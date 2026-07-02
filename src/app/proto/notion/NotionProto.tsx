"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { FicheRouteProvider } from "@/components/fiche/FicheRouteContext";
import type { Block, Fiche } from "@/components/fiche/types";
import { ProtoBlock } from "./ProtoBlock";
import { BTN_PRIMARY, BTN_SECONDARY, Hand, Label, PartieLabel } from "./ui";

/* Prototype « copie corrigée », directions 1a (marge compagnon) + 1b (lecture apaisée)
   fusionnées : marge gauche sticky (sommaire actif / échéance / objectifs), colonne
   de lecture blanche posée sur le Seyès, corps serif un cran plus grand, palette
   d'outils flottante à droite (taille du texte fonctionnelle, le reste en aperçu). */

const WRAP = "mx-auto w-full max-w-[76rem] px-5 md:px-8";

// Trois crans de taille du corps (A- / A+). Le confort de lecture de 1b.
const SIZES = [14.5, 15.5, 16.75];

// Valeurs de démo (en dur) juste pour juger la maquette — pas de vraie donnée.
const OBJECTIFS_DEMO = [
  "Distinguer nature et fonction",
  "Nommer les 9 classes",
  "Repérer les mots variables",
];

export function NotionProto({
  fiche,
  initialGroup,
  initialTab,
}: {
  fiche: Fiche;
  initialGroup?: string;
  initialTab?: string;
}) {
  const { tabGroups } = fiche;
  const [activeGroup, setActiveGroup] = useState(initialGroup ?? tabGroups[0]?.id);
  const [activeTab, setActiveTab] = useState(initialTab ?? tabGroups[0]?.tabs[0]?.id);
  const [nonces, setNonces] = useState<Record<string, number>>({});

  // Confort de lecture (palette 1b)
  const [sizeIdx, setSizeIdx] = useState(1);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [objectifs, setObjectifs] = useState<boolean[]>(() => OBJECTIFS_DEMO.map((_, i) => i === 0));

  const contentRef = useRef<HTMLDivElement>(null);

  function selectTab(tabId: string) {
    const group = tabGroups.find((g) => g.tabs.some((t) => t.id === tabId));
    if (!group) return;
    setActiveGroup(group.id);
    setActiveTab(tabId);
  }

  const title =
    fiche.numero > 0 ? `Notion ${String(fiche.numero).padStart(2, "0")} — ${fiche.title}` : fiche.title;

  // Sommaire de l'onglet actif : construit à partir des sections de premier niveau.
  const activeTabObj = useMemo(
    () => tabGroups.flatMap((g) => g.tabs).find((t) => t.id === activeTab),
    [tabGroups, activeTab]
  );
  const sommaire = useMemo(
    () =>
      (activeTabObj?.blocks ?? [])
        .map((b: Block, i: number) =>
          b.type === "subsection" ? { id: `${activeTab}--s${i}`, number: b.number, title: b.title } : null
        )
        .filter((x): x is { id: string; number: string; title: string } => x !== null),
    [activeTabObj, activeTab]
  );

  // Scrollspy : la section la plus haute encore visible pilote le sommaire.
  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll<HTMLElement>("[data-proto-section]"));
    if (!els.length) {
      setActiveSection(null);
      return;
    }
    setActiveSection(els[0].id);
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-104px 0px -55% 0px", threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [activeGroup, activeTab]);

  // Barre de progression : avancement de la lecture dans la colonne.
  useEffect(() => {
    const onScroll = () => {
      const el = contentRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), Math.max(total, 1));
      setProgress(total > 0 ? scrolled / total : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [activeTab]);

  function goToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <FicheRouteProvider value={{ niveau: "m2", matiere: "francais" }}>
      <div className="relative bg-seyes py-10 md:py-14">
        <div className={`${WRAP} flex flex-col gap-6`}>
          {/* Fil d'Ariane */}
          <nav className="flex flex-wrap items-center gap-2 font-ui text-sm text-on-surface-variant">
            <Link href="/proto" className="transition-colors hover:text-secondary">Accueil</Link>
            <span className="opacity-40">›</span>
            <Link href="/proto/reviser" className="transition-colors hover:text-secondary">Réviser</Link>
            <span className="opacity-40">›</span>
            <Link href="#" className="transition-colors hover:text-secondary">Écrit · Français</Link>
            <span className="opacity-40">›</span>
            <span className="font-semibold text-primary">Notion {String(fiche.numero).padStart(2, "0")}</span>
          </nav>

          <div className="lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:items-start lg:gap-10">
            {/* ── Marge compagnon (1a) ─────────────────────────────────── */}
            <aside className="mb-6 hidden self-start lg:sticky lg:top-8 lg:mb-0 lg:flex lg:flex-col lg:gap-5">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary font-serif text-sm font-bold text-white">
                    {String(fiche.numero).padStart(2, "0")}
                  </span>
                  <span className="font-ui text-[11px] font-bold uppercase tracking-[0.14em] text-secondary">
                    En cours
                  </span>
                </div>
                <button type="button" className={`${BTN_PRIMARY} w-full !px-4 !py-2.5 text-xs`}>
                  Reprendre où j'étais
                </button>
              </div>

              {sommaire.length > 0 && (
                <nav className="flex flex-col gap-1.5">
                  <Label>Sommaire</Label>
                  <ul className="flex flex-col gap-0.5">
                    {sommaire.map((s) => {
                      const on = activeSection === s.id;
                      return (
                        <li key={s.id}>
                          <button
                            type="button"
                            onClick={() => goToSection(s.id)}
                            className={`flex w-full items-baseline gap-2 rounded-md px-2 py-1.5 text-left font-ui text-[13px] leading-snug transition-colors ${
                              on
                                ? "bg-secondary/[0.08] font-semibold text-secondary"
                                : "text-on-surface-variant hover:bg-primary/[0.04] hover:text-primary"
                            }`}
                          >
                            <span className={`shrink-0 ${on ? "text-secondary" : "text-on-surface-variant/60"}`}>
                              {s.number}
                            </span>
                            <span>{s.title}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              )}

              {/* Prochaine échéance (démo) + note manuscrite de marge */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3 rounded-lg bg-primary px-4 py-3 text-white">
                  <span className="font-serif text-2xl font-bold leading-none">J-6</span>
                  <span className="font-ui text-[11px] leading-tight text-white/80">
                    Prochaine échéance<br />Écrit de français
                  </span>
                </div>
                <Hand className="self-end pr-1 text-xl leading-none -rotate-2">garde le rythme !</Hand>
              </div>

              {/* Objectifs (démo cochable) */}
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                  <Label>Objectifs</Label>
                  <span className="font-ui text-[11px] font-semibold text-on-surface-variant">
                    {objectifs.filter(Boolean).length}/{objectifs.length}
                  </span>
                </div>
                <ul className="flex flex-col gap-1">
                  {OBJECTIFS_DEMO.map((label, i) => (
                    <li key={i}>
                      <button
                        type="button"
                        onClick={() => setObjectifs((o) => o.map((v, j) => (j === i ? !v : v)))}
                        className="flex w-full items-start gap-2 text-left font-ui text-[13px] leading-snug text-on-surface/80"
                      >
                        <span
                          className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border text-[10px] font-bold transition-colors ${
                            objectifs[i]
                              ? "border-secondary bg-secondary text-white"
                              : "border-outline-variant text-transparent"
                          }`}
                          aria-hidden
                        >
                          ✓
                        </span>
                        <span className={objectifs[i] ? "text-on-surface-variant line-through" : ""}>{label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* ── Colonne de lecture (feuille blanche, 1b) ─────────────── */}
            <main className="overflow-hidden rounded-2xl bg-white ring-1 ring-primary/[0.06] shadow-[0_30px_80px_-52px_rgba(12,67,78,0.35)]">
              {/* En-tête */}
              <header className="px-6 pb-7 pt-8 md:px-11 md:pb-8 md:pt-10">
                <PartieLabel>{fiche.partie}</PartieLabel>
                <h1 className="mt-6 text-balance font-serif text-3xl font-bold leading-tight text-primary md:text-[2.5rem]">
                  {title}
                </h1>
                <p className="mt-4 max-w-2xl font-ui text-base leading-relaxed text-on-surface-variant">
                  {fiche.subtitle}
                </p>
                {fiche.badges.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {fiche.badges.map((badge, i) =>
                      badge.variant === "hot" ? (
                        <span key={i} className="rounded-full bg-secondary px-3 py-1 font-ui text-xs font-bold text-white">
                          {badge.label}
                        </span>
                      ) : (
                        <span key={i} className="rounded-full px-3 py-1 font-ui text-xs font-semibold text-on-surface-variant ring-1 ring-outline-variant">
                          {badge.label}
                        </span>
                      )
                    )}
                  </div>
                )}
              </header>

              {/* Barre d'onglets + progression, collée sous le haut de fenêtre */}
              <div className="sticky top-0 z-10 border-y border-outline-variant/50 bg-white/95 backdrop-blur-sm">
                <div className="h-0.5 w-full bg-primary/[0.06]">
                  <div className="h-full bg-secondary transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />
                </div>
                <div className="flex flex-col gap-2.5 px-6 py-3 md:px-11">
                  <div className="grid grid-cols-3 gap-2">
                    {tabGroups.map((group) => (
                      <button
                        key={group.id}
                        type="button"
                        onClick={() => {
                          setActiveGroup(group.id);
                          setActiveTab(group.tabs[0]?.id);
                        }}
                        className={
                          activeGroup === group.id
                            ? "rounded-md bg-primary px-3 py-2.5 font-ui text-sm font-bold text-white shadow-sm transition-all"
                            : "rounded-md border border-primary/25 px-3 py-2.5 font-ui text-sm font-bold text-primary transition-all hover:border-primary/50 hover:bg-primary/[0.04]"
                        }
                      >
                        {group.label}
                      </button>
                    ))}
                  </div>
                  {tabGroups.map((group) => (
                    <div
                      key={group.id}
                      style={{ display: activeGroup === group.id ? "flex" : "none" }}
                      className="flex-wrap gap-2"
                    >
                      {group.tabs.map((tab) => (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => {
                            if (activeTab === tab.id) {
                              setNonces((m) => ({ ...m, [tab.id]: (m[tab.id] ?? 0) + 1 }));
                            } else {
                              setActiveTab(tab.id);
                            }
                          }}
                          className={
                            activeTab === tab.id
                              ? "rounded-full bg-secondary/10 px-4 py-1.5 font-ui text-xs font-bold text-secondary ring-1 ring-secondary/40 transition-all"
                              : "rounded-full px-4 py-1.5 font-ui text-xs font-semibold text-on-surface-variant ring-1 ring-outline-variant/70 transition-all hover:text-secondary hover:ring-secondary/40"
                          }
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contenu — corps un cran plus grand (1b), taille pilotée par A-/A+ */}
              <div
                ref={contentRef}
                className="px-6 py-8 md:px-11 md:py-10"
                style={{ fontSize: `${SIZES[sizeIdx]}px` }}
              >
                {tabGroups.map((group) => (
                  <div key={group.id} style={{ display: activeGroup === group.id ? "block" : "none" }}>
                    {group.tabs.map((tab) => (
                      <div
                        key={`${tab.id}-${nonces[tab.id] ?? 0}`}
                        style={{ display: activeTab === tab.id ? "flex" : "none" }}
                        className="flex-col gap-6"
                      >
                        {tab.blocks.map((block, i) =>
                          block.type === "subsection" ? (
                            <div key={i} id={`${tab.id}--s${i}`} data-proto-section className="scroll-mt-28">
                              <ProtoBlock block={block} ficheSlug={fiche.slug} onNavigateTab={selectTab} />
                            </div>
                          ) : (
                            <ProtoBlock key={i} block={block} ficheSlug={fiche.slug} onNavigateTab={selectTab} />
                          )
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Navigation précédent / suivant */}
              <div className="flex items-center justify-between gap-4 border-t border-outline-variant/60 px-6 py-6 md:px-11">
                <span className="font-ui text-sm text-on-surface-variant/60">Début du programme</span>
                <Link href="#" className={BTN_SECONDARY}>
                  Notion 02 : Fonctions syntaxiques <span aria-hidden>→</span>
                </Link>
              </div>
            </main>
          </div>
        </div>

        {/* ── Palette d'outils flottante (1b) — A-/A+ fonctionnel, reste en aperçu ── */}
        <div className="fixed right-4 top-1/2 z-20 hidden -translate-y-1/2 xl:flex">
          <div className="flex flex-col items-stretch gap-1 rounded-2xl bg-white/95 p-1.5 shadow-[0_18px_50px_-28px_rgba(12,67,78,0.4)] ring-1 ring-primary/10 backdrop-blur">
            <button
              type="button"
              onClick={() => setSizeIdx((i) => Math.max(0, i - 1))}
              disabled={sizeIdx === 0}
              title="Réduire le texte"
              className="flex h-9 w-9 items-center justify-center rounded-xl font-serif text-sm text-primary transition-colors hover:bg-primary/[0.06] disabled:opacity-30"
            >
              A−
            </button>
            <button
              type="button"
              onClick={() => setSizeIdx((i) => Math.min(SIZES.length - 1, i + 1))}
              disabled={sizeIdx === SIZES.length - 1}
              title="Agrandir le texte"
              className="flex h-9 w-9 items-center justify-center rounded-xl font-serif text-lg text-primary transition-colors hover:bg-primary/[0.06] disabled:opacity-30"
            >
              A+
            </button>
            <span className="mx-auto my-0.5 h-px w-5 bg-outline-variant/60" />
            <ToolIcon title="Surligneur" label="✎" />
            <ToolIcon title="Marque-page" label="⚑" />
            <ToolIcon title="Minuteur (Pomodoro)" label="25" />
          </div>
        </div>
      </div>
    </FicheRouteProvider>
  );
}

// Outil d'aperçu (inerte) de la palette — présent pour juger le rendu.
function ToolIcon({ title, label }: { title: string; label: string }) {
  return (
    <button
      type="button"
      title={`${title} (aperçu)`}
      className="flex h-9 w-9 items-center justify-center rounded-xl font-ui text-sm text-on-surface-variant transition-colors hover:bg-primary/[0.06] hover:text-primary"
    >
      {label}
    </button>
  );
}
