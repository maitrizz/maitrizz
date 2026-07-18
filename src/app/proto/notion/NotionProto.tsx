"use client";

import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { FicheRouteProvider } from "@/components/fiche/FicheRouteContext";
import type { Block, Fiche } from "@/components/fiche/types";
import { MATIERE_LABELS } from "../../reviser/[niveau]/epreuves/ecrites/[matiere]/data";
import { ProtoBlock } from "@/components/fiche/blocks/ProtoBlock";
import { DemoOverlaysProvider } from "@/components/fiche/blocks/demoOverlays";
import { BTN_PRIMARY, BTN_SECONDARY, FEUILLE, FeuilleHeader, Label, PartieLabel } from "@/components/fiche/ui";
import { DEMO_OVERLAYS } from "./demoData";

/* Prototype « la belle copie » : trois matières superposées.
   1. Le cahier (fond Seyès crème) : l'espace de travail du candidat.
   2. La fiche imprimée (feuille blanche) : le savoir édité — sérif, filets
      maigre-gras, encre teal, marge de copie à gauche.
   3. La main du correcteur (terracotta) : action, correction, annotation.

   FIL UNIQUE (17/07) : plus de navigation à quatre étages (intercalaires +
   sous-onglets + sommaire + précédent/suivant). Toute la fiche devient UN
   parcours linéaire d'étapes : le sommaire de la marge montre le fil complet
   (Comprendre → Méthode → Pièges → S'entraîner → Mémo) et sert de jauge de
   progression unique (étapes remplies au fur et à mesure, même langage que
   les voyants « Où j'en suis » du hub). Les intercalaires restent comme
   repère de chapitre ; cliquer dedans saute à la première étape du chapitre.
   Fin d'étape : un micro-bilan « Avant de continuer » (rappel actif) avant
   le bouton suivant. Terracotta discipliné : à retenir, pièges, LE bouton
   d'action — le reste en teal/neutre. */

const WRAP = "mx-auto w-full max-w-[76rem] px-4 md:px-8";

// Trois crans de taille du corps (A- / A+), intégrés à la barre de lecture.
const SIZES = [15, 16, 17.5];

// Largeur de lecture : ~70 caractères par ligne au corps par défaut.
const MESURE = "max-w-[47rem]";

// DÉMO : point de reprise (index d'étape). null = première visite, le bouton
// « Reprendre où j'étais » n'apparaît pas.
const REPRISE_DEMO: number | null = 1;

/* DÉMO À VALIDER — « L'image à retenir » : le schéma que l'œil photographie en
   entrant dans le cours (9 = 5 + 4, conforme à la terminologie 2020). En dur
   dans le proto ; si la direction est validée, deviendra un bloc de données
   (une image-clé par notion). */
const ESSENTIEL_DEMO = {
  variables: ["nom", "déterminant", "adjectif", "pronom", "verbe"],
  invariables: ["adverbe", "préposition", "conjonction", "interjection"],
};

/* ⚠️ DÉMO À VALIDER (contenu grammatical) — rituel de fin d'étape : deux ou
   trois questions flash de rappel actif, réponse au clic. Clé = clé d'étape
   (`tabId#index`). Ici uniquement les sections de Comprendre ; si la direction
   est validée, chaque étape aura ses questions en données, à faire relire. */
const RETENIR_DEMO: Record<string, { q: string; a: string }[]> = {
  "comprendre#0": [
    {
      q: "La nature d'un mot change-t-elle selon la phrase ?",
      a: "Non : la nature est la carte d'identité du mot, elle ne change pas. C'est la fonction (le rôle dans la phrase) qui varie.",
    },
    {
      q: "Nature et fonction : quelle différence ?",
      a: "La nature dit ce que le mot est (sa classe grammaticale) ; la fonction dit le rôle qu'il joue dans la phrase.",
    },
  ],
  "comprendre#1": [
    {
      q: "Citez les 5 classes variables.",
      a: "Nom, déterminant, adjectif, pronom, verbe.",
    },
    {
      q: "Que signifie « variable » ?",
      a: "Le mot peut changer de forme : il s'accorde en genre et en nombre, ou se conjugue (le verbe).",
    },
  ],
  "comprendre#2": [
    {
      q: "Citez les 4 classes invariables.",
      a: "Adverbe, préposition, conjonction, interjection.",
    },
    {
      q: "Où classe-t-on l'onomatopée ?",
      a: "Parmi les interjections (terminologie officielle de 2020).",
    },
  ],
  "comprendre#3": [
    {
      q: "Pourquoi parle-t-on de mots-caméléons ?",
      a: "Parce que leur nature change selon la phrase (tout, comme, que, si…) : on ne peut les analyser qu'en contexte.",
    },
    {
      q: "Quel est le mot-caméléon le plus fréquent ?",
      a: "« Que » : pronom relatif, conjonction de subordination, adverbe… C'est le cas à maîtriser en priorité.",
    },
  ],
};

function EssentielDemo() {
  return (
    <div className={`overflow-hidden ${FEUILLE}`}>
      <FeuilleHeader tone="terracotta" tag="L'image à retenir" title="9 classes : 5 variables + 4 invariables" />
      <div className="grid divide-y divide-outline-variant/40 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        <div className="flex flex-col gap-2.5 p-4 md:px-5">
          <p className="flex flex-wrap items-baseline gap-x-2">
            <span className="font-serif text-3xl font-bold leading-none text-primary">5</span>
            <span className="font-ui text-sm font-bold text-primary">variables</span>
            <span className="font-ui text-xs text-on-surface-variant">elles s&apos;accordent</span>
          </p>
          <p className="flex flex-wrap gap-1.5">
            {ESSENTIEL_DEMO.variables.map((mot) => (
              <span
                key={mot}
                className="rounded-[3px] bg-primary/[0.07] px-2 py-0.5 font-serif text-[0.95rem] font-semibold text-primary"
              >
                {mot}
              </span>
            ))}
          </p>
        </div>
        <div className="flex flex-col gap-2.5 p-4 md:px-5">
          <p className="flex flex-wrap items-baseline gap-x-2">
            <span className="font-serif text-3xl font-bold leading-none text-on-surface/70">4</span>
            <span className="font-ui text-sm font-bold text-on-surface/70">invariables</span>
            <span className="font-ui text-xs text-on-surface-variant">jamais d&apos;accord</span>
          </p>
          <p className="flex flex-wrap gap-1.5">
            {ESSENTIEL_DEMO.invariables.map((mot) => (
              <span
                key={mot}
                className="rounded-[3px] bg-base-200 px-2 py-0.5 font-serif text-[0.95rem] font-semibold text-on-surface/70"
              >
                {mot}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

/* Découpe les blocs d'un onglet en étapes de lecture : l'intro (blocs avant la
   première subsection) puis une étape par subsection, chaque bloc suivant une
   subsection lui appartenant (ex. un ctaBox de fin de section). */
function decoupeEnSections(blocks: Block[]) {
  const intro: Block[] = [];
  const sections: { number: string; title: string; blocks: Block[] }[] = [];
  for (const b of blocks) {
    if (b.type === "subsection") {
      sections.push({ number: b.number, title: b.title, blocks: [b] });
    } else if (sections.length === 0) {
      intro.push(b);
    } else {
      sections[sections.length - 1].blocks.push(b);
    }
  }
  return { intro, sections };
}

/* Le fil de lecture : toute la fiche aplatie en étapes. Un onglet à
   subsections donne une étape par section (l'intro rejoint la première) ;
   un onglet sans subsection donne une seule étape qui porte son libellé. */
type Etape = {
  key: string;
  groupId: string;
  groupLabel: string;
  tabId: string;
  tabLabel: string;
  title: string;
  blocks: Block[];
};

function construitFil(tabGroups: Fiche["tabGroups"]): Etape[] {
  const fil: Etape[] = [];
  for (const g of tabGroups) {
    for (const t of g.tabs) {
      const base = { groupId: g.id, groupLabel: g.label, tabId: t.id, tabLabel: t.label };
      const { intro, sections } = decoupeEnSections(t.blocks);
      if (sections.length === 0) {
        fil.push({ ...base, key: `${t.id}#0`, title: t.label, blocks: t.blocks });
      } else {
        sections.forEach((s, i) => {
          fil.push({
            ...base,
            key: `${t.id}#${i}`,
            title: s.title,
            blocks: i === 0 ? [...intro, ...s.blocks] : s.blocks,
          });
        });
      }
    }
  }
  return fil;
}

/* Sommaire-jauge : LE système de progression de la fiche. Étape vue = pastille
   remplie (teal), étape en cours = pastille terracotta cerclée, à venir =
   pastille en creux. Chaque groupe d'étapes est coiffé du nom de son chapitre
   (petites capitales) : le mapping intercalaires ↔ sommaire se lit d'un coup
   d'œil, sans aller-retour avec les onglets de la feuille. */
function FilNav({
  fil,
  etapeIdx,
  vues,
  onGo,
}: {
  fil: Etape[];
  etapeIdx: number;
  vues: Set<string>;
  onGo: (i: number) => void;
}) {
  return (
    <nav aria-label="Sommaire de la fiche" className="flex flex-col gap-0.5">
      {fil.map((e, i) => {
        const debutGroupe = i === 0 || fil[i - 1].groupId !== e.groupId;
        const on = i === etapeIdx;
        const vue = vues.has(e.key) && !on;
        return (
          <Fragment key={e.key}>
            {debutGroupe && (
              <span
                className={`px-2 pb-1 font-ui text-[9px] font-bold uppercase tracking-[0.18em] text-on-surface-variant/70 ${
                  i > 0 ? "mt-3 border-t border-outline-variant/50 pt-3" : ""
                }`}
              >
                {e.groupLabel}
              </span>
            )}
            <button
              type="button"
              onClick={() => onGo(i)}
              aria-current={on ? "step" : undefined}
              className={`flex w-full items-start gap-2.5 rounded-sm px-2 py-1.5 text-left font-ui text-[13px] leading-snug transition-colors ${
                on
                  ? "bg-secondary/[0.08] font-semibold text-secondary"
                  : vue
                    ? "text-on-surface-variant hover:bg-primary/[0.04] hover:text-primary"
                    : "text-on-surface-variant/75 hover:bg-primary/[0.04] hover:text-primary"
              }`}
            >
              <span
                className={`mt-px flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                  on
                    ? "text-secondary ring-1 ring-secondary"
                    : vue
                      ? "bg-primary text-white"
                      : "text-on-surface-variant/70 ring-1 ring-outline-variant"
                }`}
              >
                {i + 1}
              </span>
              <span>{e.title}</span>
            </button>
          </Fragment>
        );
      })}
    </nav>
  );
}

/* Rituel de fin d'étape : rappel actif avant de passer à la suite. Question
   flash, réponse au clic — trois secondes d'effort qui fixent la mémoire. */
function RetenirFlash({ items }: { items: { q: string; a: string }[] }) {
  const [ouvertes, setOuvertes] = useState<boolean[]>(() => items.map(() => false));
  return (
    <div className={`overflow-hidden ${FEUILLE}`}>
      <FeuilleHeader tone="terracotta" tag="Avant de continuer" title="Vérifiez que vous savez" />
      <div className="flex flex-col divide-y divide-outline-variant/40">
        {items.map((it, i) => (
          <button
            key={i}
            type="button"
            aria-expanded={ouvertes[i]}
            onClick={() => setOuvertes((o) => o.map((v, j) => (j === i ? !v : v)))}
            className="flex flex-col gap-1.5 p-4 text-left transition-colors hover:bg-primary/[0.02] md:px-5"
          >
            <span className="flex items-baseline justify-between gap-3">
              <span className="font-serif text-[0.98em] font-semibold text-primary">{it.q}</span>
              <span className="shrink-0 font-ui text-[11px] font-semibold text-secondary">
                {ouvertes[i] ? "masquer" : "voir la réponse"}
              </span>
            </span>
            {ouvertes[i] && <span className="text-[0.92em] leading-relaxed text-on-surface/85">{it.a}</span>}
          </button>
        ))}
      </div>
    </div>
  );
}

export function NotionProto({
  fiche,
  initialGroup,
  initialTab,
}: {
  fiche: Fiche;
  initialGroup?: string;
  initialTab?: string;
}) {
  const fil = useMemo(() => construitFil(fiche.tabGroups), [fiche]);

  // Étape initiale : celle de l'onglet demandé s'il existe, sinon celle du
  // groupe demandé, sinon la première.
  const [etapeIdx, setEtapeIdx] = useState(() => {
    const parOnglet = fil.findIndex((e) => e.tabId === initialTab);
    if (parOnglet >= 0) return parOnglet;
    const parGroupe = fil.findIndex((e) => e.groupId === initialGroup);
    return parGroupe >= 0 ? parGroupe : 0;
  });
  const [vues, setVues] = useState<Set<string>>(() => new Set());

  // Confort de lecture + panneaux
  const [sizeIdx, setSizeIdx] = useState(1);
  const [imageOuverte, setImageOuverte] = useState(false);
  const [sommaireOuvert, setSommaireOuvert] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const skipScrollRef = useRef(true);

  const numero = String(fiche.numero).padStart(2, "0");
  const etape = fil[etapeIdx];
  const suivante = fil[etapeIdx + 1] ?? null;

  function goToEtape(i: number) {
    if (i < 0 || i >= fil.length) return;
    setVues((v) => new Set(v).add(fil[etapeIdx].key));
    setEtapeIdx(i);
    setSommaireOuvert(false);
  }

  // Pour les ctaBox des fiches : « aller à l'onglet X » = première étape de X.
  function goToTab(tabId: string) {
    const i = fil.findIndex((e) => e.tabId === tabId);
    if (i >= 0) goToEtape(i);
  }

  // À chaque changement d'étape : on remonte en haut du contenu (sous la
  // barre de lecture collante), sauf au premier rendu.
  useEffect(() => {
    if (skipScrollRef.current) {
      skipScrollRef.current = false;
      return;
    }
    const el = contentRef.current;
    if (!el) return;
    // 80 px d'en-tête de site + ~44 px de barre de lecture + un peu d'air
    const y = el.getBoundingClientRect().top + window.scrollY - 140;
    window.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });
  }, [etapeIdx]);

  // Échap ferme le panneau ouvert (sommaire mobile ou image en grand).
  useEffect(() => {
    if (!imageOuverte && !sommaireOuvert) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setImageOuverte(false);
        setSommaireOuvert(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [imageOuverte, sommaireOuvert]);

  // DÉMO À VALIDER : l'image-clé et les questions flash ne sont écrites que
  // pour la fiche pilote (classes grammaticales). Sur les autres fiches, on
  // masque ces blocs plutôt que d'afficher un contenu qui ne leur correspond
  // pas — le temps de décider s'ils deviennent des champs de données.
  const estPilote = fiche.slug === "classes-grammaticales";
  const retenir = estPilote ? RETENIR_DEMO[etape?.key ?? ""] : undefined;

  // Libellé du bouton d'avancée : neutre dans le même onglet, nommé quand on
  // change de chapitre ou d'onglet (le lecteur sait ce qui vient).
  const labelSuivante = suivante
    ? suivante.tabId === etape.tabId
      ? "Étape suivante"
      : `Continuer : ${suivante.groupId !== etape.groupId ? suivante.groupLabel : suivante.tabLabel}`
    : null;

  return (
    <DemoOverlaysProvider value={DEMO_OVERLAYS}>
    <FicheRouteProvider value={{ niveau: "m2", matiere: "francais" }}>
      <div className="relative bg-seyes py-8 md:py-12">
        <div className={`${WRAP} flex flex-col gap-5`}>
          {/* Fil d'Ariane */}
          <nav className="flex flex-wrap items-center gap-2 font-ui text-sm text-on-surface-variant">
            <Link href="/proto" className="transition-colors hover:text-secondary">Accueil</Link>
            <span className="opacity-40">›</span>
            <Link href="/proto/reviser" className="transition-colors hover:text-secondary">Réviser</Link>
            <span className="opacity-40">›</span>
            <Link href="#" className="transition-colors hover:text-secondary">Écrit · {MATIERE_LABELS[fiche.matiere]}</Link>
            <span className="opacity-40">›</span>
            <span className="font-semibold text-primary">Notion {numero}</span>
          </nav>

          <div className="lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:items-start lg:gap-10">
            {/* ── Marge compagnon : sommaire-jauge + image-clé, rien d'autre ── */}
            <aside className="hidden self-start lg:sticky lg:top-8 lg:flex lg:flex-col lg:gap-5">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary font-serif text-sm font-bold text-white">
                  {numero}
                </span>
                <Label>Notion {numero}</Label>
              </div>

              <FilNav fil={fil} etapeIdx={etapeIdx} vues={vues} onGo={goToEtape} />

              {/* L'image-clé reste sous les yeux pendant toute la lecture :
                  la ré-exposition construit l'ancrage visuel. Clic = revoir en grand.
                  DÉMO À VALIDER, pilote uniquement (cf. estPilote). */}
              {estPilote && (
                <button
                  type="button"
                  onClick={() => setImageOuverte(true)}
                  className={`${FEUILLE} flex flex-col gap-1 p-4 text-left transition-shadow hover:shadow-md`}
                >
                  <Label>L&apos;image à retenir</Label>
                  <span className="font-serif text-2xl font-bold leading-tight text-primary">9 = 5 + 4</span>
                  <span className="font-ui text-[11px] leading-snug text-on-surface-variant">
                    5 variables · 4 invariables · cliquez pour revoir
                  </span>
                </button>
              )}
            </aside>

            {/* ── La feuille dans son classeur ─────────────────────────── */}
            <div className="min-w-0">
              {/* Onglets-intercalaires : repère de chapitre. Cliquer saute à la
                  première étape du chapitre ; l'actif suit l'étape en cours. */}
              <div role="tablist" aria-label="Parties de la fiche" className="flex items-end gap-1.5 overflow-x-auto px-3 md:px-6">
                {fiche.tabGroups.map((group) => {
                  const on = etape?.groupId === group.id;
                  return (
                    <button
                      key={group.id}
                      role="tab"
                      aria-selected={on}
                      type="button"
                      onClick={() => {
                        const i = fil.findIndex((e) => e.groupId === group.id);
                        if (i >= 0) goToEtape(i);
                      }}
                      className={
                        on
                          ? "relative z-10 -mb-px shrink-0 rounded-t-md border border-b-0 border-primary/15 bg-[#fffdf8] px-5 pb-3 pt-2.5 font-ui text-sm font-bold text-primary md:px-7"
                          : "shrink-0 rounded-t-md border border-b-0 border-primary/10 bg-base-200/80 px-5 pb-2.5 pt-2 font-ui text-sm font-semibold text-on-surface-variant transition-colors hover:bg-[#fffdf8]/70 hover:text-primary md:px-7"
                      }
                    >
                      {group.label}
                    </button>
                  );
                })}
              </div>

              <main className="relative rounded-md rounded-tl-none border border-primary/15 bg-[#fffdf8] shadow-[0_24px_60px_-48px_rgba(12,67,78,0.45)] md:rounded-tl-md">
                {/* Manchette éditoriale compacte : la première ligne du cours
                    doit rester visible sans défiler sur un 13 pouces. */}
                <header className="px-5 pb-0 pt-6 md:px-11 md:pt-8">
                  <PartieLabel>{fiche.partie}</PartieLabel>
                  <h1 className="mt-3 text-balance font-serif text-[1.7rem] font-bold leading-[1.15] text-primary md:text-[2.2rem] md:leading-[1.1]">
                    {fiche.title}
                  </h1>
                  <p className="mt-2.5 max-w-2xl font-serif text-base italic leading-relaxed text-on-surface-variant md:text-[1.05rem]">
                    {fiche.subtitle}
                  </p>
                  {/* Filet maigre-gras : la signature print de la manchette */}
                  <div aria-hidden className="mt-5 h-[5px] border-b border-t-2 border-primary/70" />
                  {/* Sous le filet : badges + repères de séance + reprise éventuelle */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 py-3">
                    {fiche.badges.length > 0 && (
                      <p className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1 font-ui text-xs">
                        {fiche.badges.map((badge, i) => (
                          <span key={i} className="flex items-baseline gap-x-2.5">
                            {i > 0 && <span aria-hidden className="text-on-surface-variant/40">·</span>}
                            <span
                              className={
                                badge.variant === "hot"
                                  ? "font-bold text-secondary"
                                  : "font-semibold text-on-surface-variant"
                              }
                            >
                              {badge.label}
                            </span>
                          </span>
                        ))}
                      </p>
                    )}
                    <span className="ml-auto font-ui text-xs text-on-surface-variant">
                      ≈ 15 min · {fil.length} étapes
                    </span>
                    {/* Reprise en contour : un seul bouton plein par écran, et
                        c'est « Étape suivante » (le fil), pas la reprise. */}
                    {REPRISE_DEMO !== null && (
                      <button
                        type="button"
                        onClick={() => goToEtape(REPRISE_DEMO)}
                        className={`${BTN_SECONDARY} !px-3.5 !py-1.5 text-xs`}
                      >
                        Reprendre où j&apos;étais →
                      </button>
                    )}
                  </div>
                </header>

                {/* Barre de lecture : position dans le fil + sommaire (mobile) + taille.
                    Elle colle SOUS l'en-tête du site (sticky h-20 = top-20), sinon
                    elle disparaît derrière lui au défilement. */}
                <div className="sticky top-20 z-10 flex items-center gap-3 border-b border-outline-variant/50 bg-[#fffdf8]/95 px-5 py-2 backdrop-blur-sm md:px-11">
                  <button
                    type="button"
                    onClick={() => setSommaireOuvert(true)}
                    className="shrink-0 rounded-sm border border-primary/25 px-2.5 py-1 font-ui text-[11px] font-bold text-primary transition-colors hover:bg-primary/[0.04] lg:hidden"
                  >
                    Sommaire
                  </button>
                  <p className="min-w-0 flex-1 truncate font-ui text-[13px] text-on-surface-variant">
                    {/* Le chapitre disparaît en très petit écran : priorité au titre d'étape */}
                    <span className="hidden sm:inline">
                      <span className="font-ui text-[10px] font-bold uppercase tracking-[0.12em] text-primary/70">
                        {etape?.groupLabel}
                      </span>
                      <span aria-hidden className="mx-2 opacity-40">·</span>
                    </span>
                    {etape?.title}
                  </p>
                  <div className="flex shrink-0 items-center">
                    <button
                      type="button"
                      onClick={() => setSizeIdx((i) => Math.max(0, i - 1))}
                      disabled={sizeIdx === 0}
                      title="Réduire le texte"
                      className="flex h-8 w-8 items-center justify-center rounded-sm font-serif text-xs text-on-surface-variant transition-colors hover:bg-primary/[0.05] hover:text-primary disabled:opacity-30"
                    >
                      A−
                    </button>
                    <button
                      type="button"
                      onClick={() => setSizeIdx((i) => Math.min(SIZES.length - 1, i + 1))}
                      disabled={sizeIdx === SIZES.length - 1}
                      title="Agrandir le texte"
                      className="flex h-8 w-8 items-center justify-center rounded-sm font-serif text-base text-on-surface-variant transition-colors hover:bg-primary/[0.05] hover:text-primary disabled:opacity-30"
                    >
                      A+
                    </button>
                  </div>
                </div>

                {/* Contenu : UNE étape à la fois, mesure de lecture ~70
                    caractères, marge de copie à gauche (md+) avec le numéro
                    de section suspendu dedans. */}
                <div
                  ref={contentRef}
                  className="relative px-5 py-7 md:py-9 md:pl-[6.25rem] md:pr-12"
                  style={{ fontSize: `${SIZES[sizeIdx]}px` }}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 left-[4.15rem] hidden w-px bg-secondary/30 md:block"
                  />
                  <div className={`flex flex-col gap-6 ${MESURE}`}>
                    {/* Règle « mémoire des lieux » : l'ancre visuelle d'une étape
                        se place toujours en tête, pleine largeur. Ici l'image-clé
                        ouvre la première étape. */}
                    {estPilote && etapeIdx === 0 && <EssentielDemo />}

                    {etape?.blocks.map((block, i) => (
                      <ProtoBlock
                        key={`${etape.key}-${i}`}
                        block={block}
                        ficheSlug={fiche.slug}
                        onNavigateTab={goToTab}
                      />
                    ))}

                    {/* Rituel de fin d'étape : rappel actif avant d'avancer */}
                    {retenir && <RetenirFlash key={etape.key} items={retenir} />}

                    {/* Navigation de lecture : une étape après l'autre */}
                    <div className="mt-2 flex flex-wrap items-center justify-between gap-3 border-t border-outline-variant/50 pt-5">
                      <button
                        type="button"
                        onClick={() => goToEtape(etapeIdx - 1)}
                        disabled={etapeIdx === 0}
                        className={`${BTN_SECONDARY} !px-4 !py-2 text-xs disabled:opacity-30`}
                      >
                        ← Précédent
                      </button>
                      {/* LE bouton du parcours : taille pleine, seul plein de l'écran. */}
                      {suivante ? (
                        <button
                          type="button"
                          onClick={() => goToEtape(etapeIdx + 1)}
                          className={`${BTN_PRIMARY} !px-5 !py-2.5`}
                        >
                          {labelSuivante} →
                        </button>
                      ) : (
                        <span className="font-ui text-sm font-bold text-primary">Fiche terminée ✓</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Passage à la notion suivante : uniquement en fin de fiche,
                    pour ne pas empiler deux rangées de navigation semblables. */}
                {!suivante && (
                  <div className="flex items-center justify-between gap-4 border-t border-outline-variant/60 px-5 py-6 md:px-11">
                    <span className="font-ui text-sm text-on-surface-variant/60">Début du programme</span>
                    <Link href="#" className={BTN_SECONDARY}>
                      Notion 02 : Fonctions syntaxiques <span aria-hidden>→</span>
                    </Link>
                  </div>
                )}
              </main>
            </div>
          </div>
        </div>

        {/* Sommaire mobile : le même fil, en panneau latéral */}
        {sommaireOuvert && (
          <div className="fixed inset-0 z-[60] flex lg:hidden" role="dialog" aria-modal aria-label="Sommaire de la fiche">
            <button
              type="button"
              aria-label="Fermer le sommaire"
              onClick={() => setSommaireOuvert(false)}
              className="absolute inset-0 bg-primary/40"
            />
            <div className="relative ml-auto flex h-full w-[85%] max-w-xs flex-col gap-4 overflow-y-auto bg-[#fffdf8] p-5 shadow-xl">
              <div className="flex items-center justify-between">
                <Label>Sommaire</Label>
                <button
                  type="button"
                  onClick={() => setSommaireOuvert(false)}
                  className="font-ui text-xs font-bold text-secondary"
                >
                  Fermer
                </button>
              </div>
              <FilNav fil={fil} etapeIdx={etapeIdx} vues={vues} onGo={goToEtape} />
            </div>
          </div>
        )}

        {/* L'image à retenir, en grand, depuis la miniature de la marge */}
        {imageOuverte && (
          <div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-primary/50 p-4"
            role="dialog"
            aria-modal
            aria-label="L'image à retenir"
            onClick={() => setImageOuverte(false)}
          >
            <div className="flex w-full max-w-2xl flex-col gap-3" onClick={(e) => e.stopPropagation()}>
              <EssentielDemo />
              <button
                type="button"
                onClick={() => setImageOuverte(false)}
                className={`${BTN_SECONDARY} self-end !bg-[#fffdf8] !px-4 !py-2 text-xs`}
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>
    </FicheRouteProvider>
    </DemoOverlaysProvider>
  );
}
