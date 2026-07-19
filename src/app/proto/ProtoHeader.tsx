"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

/* Header propre au prototype : transparent en haut, léger flou + filet fin au
   scroll. Hiérarchie de boutons : « Connexion » en lien, « S'inscrire » en
   bouton principal terracotta (réel, pas désactivé). */
export default function ProtoHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-b border-on-surface/10 bg-[#fdfaf5]/85 shadow-[0_1px_20px_-12px_rgba(12,67,78,0.35)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-[1080px] items-center justify-between px-5 md:px-12">
        <Link href="/proto" aria-label="Accueil Maitrizz">
          <Logo />
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          <Link
            href="/proto/reviser"
            className="font-ui text-sm font-semibold text-on-surface-variant transition-colors hover:text-secondary"
          >
            Réviser
          </Link>
          <Link
            href="/proto#programme"
            className="font-ui text-sm font-semibold text-on-surface-variant transition-colors hover:text-secondary"
          >
            Programme
          </Link>
          <Link
            href="#"
            className="font-ui text-sm font-semibold text-on-surface-variant transition-colors hover:text-secondary"
          >
            Blog
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="#"
            className="hidden font-ui text-sm font-semibold text-primary transition-colors hover:text-secondary sm:block"
          >
            Connexion
          </Link>
          <Link
            href="/proto#fin"
            className="rounded-md bg-secondary px-5 py-2.5 font-ui text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-95"
          >
            S&apos;inscrire
          </Link>
        </div>
      </nav>
    </header>
  );
}
