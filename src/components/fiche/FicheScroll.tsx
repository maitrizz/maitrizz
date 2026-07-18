"use client";

import { useEffect, useMemo, useState } from "react";
import { FicheRouteProvider } from "./FicheRouteContext";
import { ProtoBlock } from "./blocks/ProtoBlock";
import type { Fiche } from "./types";
import { Label, PartieLabel, sansEmoji } from "./ui";

/* Mise en page « scroll libre » des fiches notion (issue du proto
   /proto/notion/light, validée le 18/07) :
   - les groupes (Apprendre / S'entraîner / Mémo) restent des onglets séparés ;
   - à l'intérieur d'un groupe, TOUS les sous-onglets défilent en continu ;
   - un sommaire imbriqué (sous-onglet en tête, sous-sections dessous) suit la
     lecture (scrollspy) et permet le saut direct ;
   - barre d'onglets collante sous la navbar du site, retour en haut au
     changement de groupe, sommaire repliable en mobile.
   Le parent fournit le fond et le conteneur (max-w + px-4 md:px-8, que les
   marges négatives de la barre collante doivent compenser). `children` est
   inséré entre l'en-tête et les onglets (ex. voyants « Où j'en suis »). */

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function scrollToAnchor(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

type SommaireEntry = {
  id: string;
  label: string;
  minutes: number | null;
  sousSections: { id: string; title: string }[];
};

/* Ordre de grandeur de lecture d'un chapitre (~180 mots/min) : un contenu
   long mais BORNÉ décourage beaucoup moins qu'un contenu long sans fin
   visible. Estimation grossière : on ramasse toutes les chaînes des blocs. */
function minutesLecture(blocks: unknown): number {
  const textes: string[] = [];
  (function walk(v: unknown) {
    if (typeof v === "string") textes.push(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === "object") Object.values(v).forEach(walk);
  })(blocks);
  const mots = textes.join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(mots / 180));
}

/* Liste de liens du sommaire, partagée entre la colonne desktop et le
   <details> mobile. `activeId` = ancre actuellement lue (scrollspy) : le
   sous-onglet est aussi marqué actif quand c'est l'une de ses sous-sections
   qui est à l'écran. */
function SommaireLinks({
  sommaire,
  activeId,
  onNavigate,
}: {
  sommaire: SommaireEntry[];
  activeId: string | null;
  onNavigate?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <ul className="flex flex-col gap-4">
      {sommaire.map((t) => {
        const tabActive = activeId === t.id || t.sousSections.some((s) => s.id === activeId);
        return (
          <li key={t.id} className="flex flex-col gap-1">
            <a
              href={`#${t.id}`}
              onClick={onNavigate}
              className={`font-ui text-[13px] font-bold uppercase tracking-[0.06em] transition-colors hover:text-secondary ${
                tabActive ? "text-secondary" : "text-primary"
              }`}
            >
              {t.label}
              {t.minutes !== null && (
                <span className="ml-1.5 font-normal normal-case tracking-normal text-on-surface-variant/70">
                  ~{t.minutes} min
                </span>
              )}
            </a>
            {t.sousSections.length > 0 && (
              <ul className="flex flex-col gap-0.5 border-l border-outline-variant/50 pl-3">
                {t.sousSections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      onClick={onNavigate}
                      className={`block py-0.5 font-ui text-[12.5px] leading-snug transition-colors hover:text-secondary ${
                        activeId === s.id ? "font-semibold text-secondary" : "text-on-surface-variant"
                      }`}
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function FicheScroll({
  fiche,
  niveau,
  matiere,
  children,
}: {
  fiche: Fiche;
  niveau: string;
  matiere: string;
  children?: React.ReactNode;
}) {
  const [groupId, setGroupId] = useState(fiche.tabGroups[0]?.id);
  const group = fiche.tabGroups.find((g) => g.id === groupId) ?? fiche.tabGroups[0];
  const [activeId, setActiveId] = useState<string | null>(null);
  const showGroupTabs = fiche.tabGroups.length > 1;

  // Navigue vers un onglet : change de groupe si besoin, puis saute à son ancre.
  function goToTab(tabId: string) {
    const targetGroup = fiche.tabGroups.find((g) => g.tabs.some((t) => t.id === tabId));
    if (targetGroup && targetGroup.id !== group?.id) {
      setGroupId(targetGroup.id);
      // Laisse le nouveau groupe se monter avant de sauter à l'ancre.
      requestAnimationFrame(() => requestAnimationFrame(() => scrollToAnchor(slugify(`tab-${tabId}`))));
    } else {
      scrollToAnchor(slugify(`tab-${tabId}`));
    }
  }

  // Changement de groupe par la barre d'onglets : repartir en haut de page,
  // sinon on atterrit à l'ancienne profondeur de défilement, au milieu de rien.
  function switchGroup(id: string) {
    if (id === group?.id) return;
    setGroupId(id);
    setActiveId(null);
    window.scrollTo({ top: 0 });
  }

  // Sommaire imbriqué du groupe courant : un item par sous-onglet, avec ses
  // sous-sections dessous s'il en a. Un sous-onglet sans sous-section reste
  // une simple entrée cliquable (chapitre court, ex. « Pièges »).
  const sommaire = useMemo<SommaireEntry[]>(() => {
    if (!group) return [];
    // La durée n'a de sens que pour le groupe de LECTURE (le premier,
    // « Apprendre ») : sur les exercices, un temps de lecture serait trompeur.
    const estimable = group.id === fiche.tabGroups[0]?.id;
    return group.tabs.map((t) => ({
      id: slugify(`tab-${t.id}`),
      label: t.label,
      minutes: estimable ? minutesLecture(t.blocks) : null,
      sousSections: t.blocks
        .filter((b): b is Extract<typeof b, { type: "subsection" }> => b.type === "subsection")
        .map((b) => ({ id: slugify(`${t.id}-${b.number}-${b.title}`), title: sansEmoji(b.title) })),
    }));
  }, [group, fiche.tabGroups]);

  // Un sujet blanc « tout-en-un » (un seul onglet, sans sous-sections) n'a ni
  // barre d'onglets ni sommaire : le contenu se suffit à lui-même.
  const showSommaire = sommaire.length > 1 || sommaire.some((t) => t.sousSections.length > 0);

  // Scrollspy : la section dont l'ancre traverse la bande haute de l'écran
  // devient l'entrée active du sommaire. Repère d'orientation permanent,
  // sans rien demander au lecteur.
  useEffect(() => {
    const ids = sommaire.flatMap((t) => [t.id, ...t.sousSections.map((s) => s.id)]);
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visibles = entries.filter((e) => e.isIntersecting);
        if (visibles.length > 0) {
          const haut = visibles.reduce((a, b) => (a.boundingClientRect.top <= b.boundingClientRect.top ? a : b));
          setActiveId(haut.target.id);
        }
      },
      // Bande de détection : entre 10 % et 40 % du haut de l'écran.
      { rootMargin: "-10% 0px -60% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sommaire]);

  // Un ctaBox « Aller à X → » n'a de sens que si X n'est pas déjà affiché
  // sur cette page. Dans un groupe rendu en continu, un CTA visant un onglet
  // du MÊME groupe est redondant (la suite est juste dessous) ; seul un CTA
  // vers un AUTRE groupe reste utile.
  const idsDuGroupe = useMemo(() => new Set(group?.tabs.map((t) => t.id)), [group]);

  const numero = String(fiche.numero).padStart(2, "0");

  if (!group) return null;

  return (
    <FicheRouteProvider value={{ niveau, matiere }}>
      <div className="flex flex-col">
        {/* En-tête : sobre, sans bandeau décoratif */}
        <div className="flex flex-col gap-3 border-b border-outline-variant/50 pb-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-ui text-xs text-on-surface-variant">
            {fiche.numero > 0 && (
              <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-primary font-serif text-xs font-bold text-white">
                {numero}
              </span>
            )}
            <PartieLabel>{fiche.partie}</PartieLabel>
            {fiche.badges.map((badge, i) => (
              <span
                key={i}
                className={`font-ui text-[10px] font-bold uppercase tracking-[0.18em] ${
                  badge.variant === "hot" ? "text-error" : "text-on-surface-variant"
                }`}
              >
                {badge.label}
              </span>
            ))}
          </div>
          <h1 className="font-serif text-3xl font-bold text-primary md:text-4xl">{fiche.title}</h1>
          <p className="max-w-[46rem] font-serif text-lg italic text-on-surface-variant">{fiche.subtitle}</p>
        </div>

        {children}

        {/* UN seul niveau d'onglets : Apprendre / S'entraîner / Mémo.
            Collant sous la navbar du site (h-20) : arrivé en bas d'un long
            chapitre, c'est précisément le moment où on veut passer au groupe
            suivant sans tout remonter. */}
        {showGroupTabs && (
          <div className="sticky top-20 z-20 -mx-4 mt-6 flex flex-wrap gap-1 border-b border-outline-variant/50 bg-[#fffdf8] px-4 md:-mx-8 md:px-8">
            {fiche.tabGroups.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => switchGroup(g.id)}
                className={`-mb-px border-b-2 px-4 py-2.5 font-ui text-sm font-bold transition-colors ${
                  g.id === group.id
                    ? "border-secondary text-secondary"
                    : "border-transparent text-on-surface-variant hover:text-primary"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        )}

        {/* Sommaire mobile : repliable, entre les onglets et le contenu.
            Sur téléphone la colonne de gauche n'existe pas ; sans lui, aucune
            vue d'ensemble ni accès direct à une section. */}
        {showSommaire && (
          <details className="mt-6 rounded-md ring-1 ring-outline-variant/50 lg:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 [&::-webkit-details-marker]:hidden">
              <Label>Sur cette page</Label>
              <span aria-hidden className="text-secondary">
                ▾
              </span>
            </summary>
            <div className="border-t border-outline-variant/40 px-4 py-4">
              <SommaireLinks
                sommaire={sommaire}
                activeId={activeId}
                onNavigate={(e) => {
                  // Referme le panneau après le saut : il masquerait la section visée.
                  e.currentTarget.closest("details")?.removeAttribute("open");
                }}
              />
            </div>
          </details>
        )}

        <div
          className={
            showSommaire
              ? "mt-8 lg:grid lg:grid-cols-[14rem_minmax(0,1fr)] lg:items-start lg:gap-10"
              : "mt-8"
          }
        >
          {/* Sommaire desktop : suit la lecture (scrollspy), collant sous la
              navbar + barre d'onglets. Clic = saut direct, rien à débloquer. */}
          {showSommaire && (
            <nav aria-label="Sommaire" className="hidden lg:sticky lg:top-36 lg:flex lg:flex-col lg:gap-4">
              <Label>Sur cette page</Label>
              <SommaireLinks sommaire={sommaire} activeId={activeId} />
            </nav>
          )}

          {/* Contenu : tous les sous-onglets du groupe, en continu */}
          <div className="flex min-w-0 flex-col gap-12">
            {group.tabs.map((t) => (
              <div key={t.id} id={slugify(`tab-${t.id}`)} className="flex scroll-mt-36 flex-col gap-6">
                {group.tabs.length > 1 && (
                  <h2 className="border-b border-secondary/25 pb-2 font-ui text-base font-bold uppercase tracking-[0.04em] text-secondary">
                    {t.label}
                  </h2>
                )}
                <div className="flex flex-col gap-8">
                  {t.blocks
                    .filter((b) => !(b.type === "ctaBox" && idsDuGroupe.has(b.targetTab)))
                    .map((b, i) => (
                      <div
                        key={i}
                        className="scroll-mt-36"
                        id={b.type === "subsection" ? slugify(`${t.id}-${b.number}-${b.title}`) : undefined}
                      >
                        <ProtoBlock block={b} ficheSlug={fiche.slug} onNavigateTab={goToTab} />
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FicheRouteProvider>
  );
}
