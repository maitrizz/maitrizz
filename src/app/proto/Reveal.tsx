"use client";

import { useEffect, useRef, useState } from "react";

/* Apparition progressive au scroll (fondu + léger glissement).
   Utilisé pour faire apparaître la correction par étapes. */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect des préférences d'accessibilité : pas d'animation = visible direct.
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      const t = window.setTimeout(() => setShown(true), 0);
      return () => window.clearTimeout(t);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);

    // Filet de sécurité : si l'observateur ne se déclenche jamais (onglet en
    // arrière-plan, navigateur capricieux), on révèle quand même au bout d'un
    // moment pour ne jamais laisser de contenu invisible.
    const fallback = window.setTimeout(() => setShown(true), 1500);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
