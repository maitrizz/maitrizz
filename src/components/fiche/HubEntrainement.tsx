"use client";

// HUB D'ENTRAÎNEMENT (français écrit) — la « salle » où l'on ENTRETIENT le geste.
//
// Rôle (GABARIT_NOTION.md §2) : récupération espacée (Leitner) entrelacée sur PLUSIEURS
// notions, hors des fiches. C'est lui qui porte le TABLEAU DE MAÎTRISE (§6 bis) : une ligne
// par notion (combien de savoir-faire « acquis · à consolider · pas encore »), et qui peut
// faire REDESCENDRE un voyant quand on oublie (le ré-test espacé met à jour le dernier signal).
//
// Le moteur d'entraînement (filtres, espacement, ré-injection des ratés, bilan) est le
// composant <Trainer> déjà existant : ici on l'ALIMENTE avec les items des notions choisies,
// sous une clé de magasin partagée (HUB_SLUG), distincte des fiches.

import { useMemo, useState, useSyncExternalStore } from "react";
import { Trainer } from "./Trainer";
import {
  computeJaugeGlobale,
  jaugeLabel,
  loadDerniersResultats,
  toItemsTagues,
  HUB_SLUG,
  type EtatMaitrise,
  type JaugeSavoirFaire,
} from "./maitrise";
import {
  computeDailyPlan,
  formatNextDue,
  loadTrainerState,
  type DailyPlan,
} from "./trainerProgress";
import type { Block, TrainerItem } from "./types";
import { HUB_NOTIONS, type HubNotion } from "@/app/reviser/[niveau]/epreuves/ecrites/[matiere]/data/francais/hub-entrainement";

type Phase = "accueil" | "entrainement";
// Séance du jour (dû seulement) vs choix libre des notions.
type SessionMode = "quotidien" | "libre";

// Tous les items du hub, une fois pour toutes (la séance du jour balaie toutes les notions).
const TOUS_ITEMS: TrainerItem[] = HUB_NOTIONS.flatMap((n) => n.items);
const TOUS_SAVOIR_FAIRE = dedupeSavoirFaire(HUB_NOTIONS);

export function HubEntrainement() {
  const [phase, setPhase] = useState<Phase>("accueil");
  const [sessionMode, setSessionMode] = useState<SessionMode>("quotidien");
  const [selection, setSelection] = useState<string[]>(() => HUB_NOTIONS.map((n) => n.notionSlug));
  // Choix manuel des notions : replié par défaut (l'action par défaut est la séance du jour).
  const [choixOuvert, setChoixOuvert] = useState(false);
  // Permet de recalculer le tableau de maîtrise au retour de l'entraînement.
  const [tick, setTick] = useState(0);

  function toggle(slug: string) {
    setSelection((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  }

  const notionsChoisies = HUB_NOTIONS.filter((n) => selection.includes(n.notionSlug));

  // Bloc trainer combiné : tous les items des notions choisies, sous une seule banque.
  const trainerBlock = useMemo<Extract<Block, { type: "trainer" }>>(() => {
    const items: TrainerItem[] = notionsChoisies.flatMap((n) => n.items);
    const savoirFaire = dedupeSavoirFaire(notionsChoisies);
    return {
      type: "trainer",
      title: "Entraînement ciblé",
      intro:
        "Entretenez le geste dans la durée. Les questions reviennent au bon moment ; ce que vous ratez revient plus tôt.",
      sessionSize: 10,
      savoirFaire,
      items,
    };
  }, [notionsChoisies]);

  // Bloc « séance du jour » : toutes les notions, séance bornée sur les items échus.
  const blocQuotidien = useMemo<Extract<Block, { type: "trainer" }>>(
    () => ({
      type: "trainer",
      title: "Séance du jour",
      sessionSize: 10,
      savoirFaire: TOUS_SAVOIR_FAIRE,
      items: TOUS_ITEMS,
    }),
    [],
  );

  function lancer(mode: SessionMode) {
    setSessionMode(mode);
    setPhase("entrainement");
  }

  if (phase === "entrainement") {
    const quotidien = sessionMode === "quotidien";
    return (
      <div className="flex flex-col gap-4">
        <button
          type="button"
          onClick={() => {
            setPhase("accueil");
            setTick((t) => t + 1); // recalcule la maîtrise au retour
          }}
          className="self-start text-sm font-semibold text-base-content/60 hover:text-base-content"
        >
          ← Retour
        </button>
        <Trainer
          block={quotidien ? blocQuotidien : trainerBlock}
          ficheSlug={HUB_SLUG}
          autoStart={quotidien ? "due" : undefined}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <SeanceDuJour key={tick} onStart={() => lancer("quotidien")} />

      <TableauMaitrise key={`m-${tick}`} />

      {/* Choix manuel : carte secondaire clairement visible (alternative à la séance du jour). */}
      <div className="rounded-xl border-2 border-primary/25 bg-base-100 p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-black text-base-content">Réviser une notion précise</h3>
            <p className="text-sm text-base-content/60 leading-relaxed">
              Vous bloquez sur un point&nbsp;? Entraînez-vous dessus uniquement, sans attendre son échéance.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setChoixOuvert((v) => !v)}
            aria-expanded={choixOuvert}
            className="btn btn-outline btn-primary btn-sm shrink-0"
          >
            {choixOuvert ? "Masquer" : "Choisir"}
            <span className={`ml-1 inline-block transition-transform duration-200 ${choixOuvert ? "rotate-180" : ""}`}>⌄</span>
          </button>
        </div>

        {choixOuvert && (
          <div className="mt-4 flex flex-col gap-3 border-t border-base-200 pt-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-base-content/50">
              Cochez les notions à travailler
            </p>
            <div className="flex flex-wrap gap-2">
              {HUB_NOTIONS.map((n) => {
                const active = selection.includes(n.notionSlug);
                return (
                  <button
                    key={n.notionSlug}
                    type="button"
                    onClick={() => toggle(n.notionSlug)}
                    className={`rounded-lg border-2 px-3.5 py-2 text-sm font-bold transition-colors ${
                      active
                        ? "border-primary bg-primary text-primary-content"
                        : "border-base-300 bg-base-100 text-base-content/70 hover:border-primary/50"
                    }`}
                  >
                    {active ? "✓ " : ""}
                    {n.numero}. {shortTitle(n.title)}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              disabled={notionsChoisies.length === 0 || trainerBlock.items.length === 0}
              onClick={() => lancer("libre")}
              className="btn btn-outline btn-primary self-start mt-1 disabled:opacity-50"
            >
              Lancer une séance ciblée
            </button>
            {notionsChoisies.length === 0 && (
              <span className="text-xs text-base-content/40">Choisissez au moins une notion.</span>
            )}
          </div>
        )}
      </div>

      <ScienceEspacee />
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   L'intérêt scientifique de l'entraînement espacé (pédagogie transparente).
   Phénomènes réels et établis ; aucune statistique inventée.
──────────────────────────────────────────────────────────── */

function ScienceEspacee() {
  const [ouvert, setOuvert] = useState(false);
  return (
    <div className="rounded-xl border border-base-300 bg-base-100">
      <button
        type="button"
        onClick={() => setOuvert((v) => !v)}
        aria-expanded={ouvert}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
      >
        <span className="text-sm font-bold text-base-content">
          Pourquoi réviser un peu chaque jour marche mieux que tout d&apos;un coup
        </span>
        <span className={`shrink-0 text-base-content/40 transition-transform duration-200 ${ouvert ? "rotate-180" : ""}`}>⌄</span>
      </button>

      {ouvert && (
        <div className="flex flex-col gap-4 border-t border-base-200 px-5 py-5 text-sm leading-relaxed text-base-content/75">
          <p>
            La mémoire oublie vite ce qu&apos;elle vient d&apos;apprendre&nbsp;: dès 1885, Hermann Ebbinghaus a décrit cette
            «&nbsp;courbe de l&apos;oubli&nbsp;», une chute rapide dans les heures et les jours qui suivent. Réviser tout
            d&apos;un bloc la veille lutte mal contre elle&nbsp;: l&apos;information redescend presque aussi vite.
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <p>
                <span className="font-semibold text-base-content">L&apos;effet d&apos;espacement.</span> Revoir une notion à
                intervalles qui s&apos;allongent (le lendemain, puis quelques jours, puis quelques semaines) ancre bien plus
                durablement que la même durée de révision massée. Chaque rappel au bon moment «&nbsp;relance&nbsp;» la
                mémoire pour plus longtemps.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <p>
                <span className="font-semibold text-base-content">La récupération active.</span> Se tester, c&apos;est-à-dire
                répondre de mémoire plutôt que relire, fixe davantage la trace. L&apos;effort de rappel est ce qui renforce
                le souvenir&nbsp;: c&apos;est pour cela que le hub vous fait répondre, pas seulement relire.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <p>
                <span className="font-semibold text-base-content">Le bon moment.</span> On vous représente une question
                juste avant que vous ne l&apos;oubliiez, et on la repousse plus loin quand elle est solide. C&apos;est
                exactement ce que gèrent les «&nbsp;boîtes&nbsp;» du système de Leitner, sur lesquelles repose votre séance
                du jour.
              </p>
            </div>
          </div>

          <p className="text-base-content/60">
            En clair&nbsp;: la fiche construit le geste, le hub l&apos;entretient. Quelques minutes régulières valent mieux
            qu&apos;un marathon la veille, et c&apos;est justement ce que prépare le concours&nbsp;: des savoirs
            disponibles le jour J, pas seulement révisés.
          </p>
        </div>
      )}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Séance du jour : le copilote. Une action évidente, fondée sur l'espacement.
──────────────────────────────────────────────────────────── */

function SeanceDuJour({ onStart }: { onStart: () => void }) {
  const mounted = useMounted();
  const [pourquoi, setPourquoi] = useState(false);
  const plan: DailyPlan | null = mounted
    ? computeDailyPlan(TOUS_ITEMS, loadTrainerState(HUB_SLUG))
    : null;

  // Squelette discret avant hydratation (pas de saut de mise en page).
  if (plan === null) {
    return <div className="h-36 rounded-2xl bg-base-200/60 animate-pulse" />;
  }

  const rienAFaire = plan.dueTotal === 0;
  // On ne montre JAMAIS l'arriéré (démotivant) : seulement la dose du jour, bornée.
  const tailleSeance = Math.min(plan.dueTotal, 10);

  return (
    <div className="rounded-2xl bg-primary grid-paper-light p-6 text-primary-content shadow-sm">
      <p className="text-xs font-bold uppercase tracking-wider text-primary-content/60">Votre séance du jour</p>

      {rienAFaire ? (
        <>
          <p className="mt-2 text-2xl font-black">Tout est à jour ✅</p>
          <p className="mt-1 text-sm text-primary-content/70">
            Rien à revoir dans l&apos;immédiat.{" "}
            {plan.nextDue ? `Prochaine révision ${formatNextDue(plan.nextDue)}.` : ""}
          </p>
          <button
            type="button"
            onClick={onStart}
            className="btn btn-sm mt-4 border-0 bg-white/15 text-primary-content hover:bg-white/25"
          >
            S&apos;entraîner quand même
          </button>
        </>
      ) : (
        <>
          <p className="mt-2 text-2xl font-black">Prêt à réviser ?</p>

          {/* Réassurance visible d'emblée : ces questions ne sont pas au hasard. */}
          <div className="mt-3 flex items-start gap-2.5 rounded-lg bg-white/10 px-4 py-3">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-secondary" />
            <p className="text-sm leading-relaxed text-primary-content/90">
              <span className="font-bold text-primary-content">Sélection sur mesure.</span> Ces {tailleSeance}&nbsp;question
              {tailleSeance > 1 ? "s" : ""} ciblent en priorité ce que vous êtes sur le point d&apos;oublier, d&apos;après vos
              réponses précédentes. Comptez quelques minutes.
            </p>
          </div>

          <button
            type="button"
            onClick={onStart}
            className="btn btn-secondary btn-lg mt-4 w-full sm:w-auto shadow-md"
          >
            Réviser maintenant →
          </button>

          {/* Le détail du mécanisme, pour qui veut creuser. */}
          <button
            type="button"
            onClick={() => setPourquoi((v) => !v)}
            aria-expanded={pourquoi}
            className="mt-4 block text-xs font-semibold text-primary-content/60 transition-colors hover:text-primary-content"
          >
            Comment ça marche&nbsp;?
            <span className={`ml-1 inline-block transition-transform duration-200 ${pourquoi ? "rotate-180" : ""}`}>⌄</span>
          </button>
          {pourquoi && (
            <p className="mt-2 rounded-lg bg-white/10 px-4 py-3 text-sm leading-relaxed text-primary-content/85">
              Chaque question suit son propre calendrier (le{" "}
              <a
                href="https://fr.wikipedia.org/wiki/Syst%C3%A8me_Leitner"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 hover:text-primary-content"
              >
                système de Leitner
              </a>
              ). Une bonne réponse repousse son retour de
              plus en plus loin (le lendemain, puis 3, 7, 16, 30&nbsp;jours)&nbsp;; une erreur la fait revenir très vite.
              Vous passez ainsi du temps sur ce qui est encore fragile, presque pas sur ce qui est déjà solide. Chaque jour,
              on vous montre simplement celles dont c&apos;est le moment, les plus fragiles d&apos;abord.
            </p>
          )}
        </>
      )}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Tableau de maîtrise : une ligne par notion (résumé des voyants).
──────────────────────────────────────────────────────────── */

type LigneMaitrise = { notion: HubNotion; jauge: JaugeSavoirFaire };

// Lecture localStorage (client uniquement) : une jauge globale par notion.
function chargerResumes(): LigneMaitrise[] {
  return HUB_NOTIONS.map((notion) => {
    const items = toItemsTagues(notion.items, []);
    const resultats = loadDerniersResultats(notion.notionSlug);
    return { notion, jauge: computeJaugeGlobale(items, resultats) };
  });
}

// Renvoie false côté serveur, true côté client (après hydratation), sans effet ni
// setState : la façon idiomatique de différer une lecture localStorage au client.
function useMounted(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

// Habillage par état : feu tricolore doux (code couleur universel adouci).
// pas encore = gris · en cours = ambre · acquis = vert.
const ETAT_UI: Record<EtatMaitrise, { dot: string; fill: string; text: string }> = {
  acquis: { dot: "bg-success", fill: "bg-success", text: "text-success" },
  "a-consolider": { dot: "bg-[#d99a3a]", fill: "bg-[#d99a3a]", text: "text-[#a9761d]" },
  "pas-encore": { dot: "bg-base-300", fill: "bg-base-300", text: "text-base-content/40" },
};

// Ordre d'affichage de la synthèse (du plus avancé au moins avancé).
const LEGENDE: { etat: EtatMaitrise; mot: string }[] = [
  { etat: "acquis", mot: "Acquis" },
  { etat: "a-consolider", mot: "En cours" },
  { etat: "pas-encore", mot: "Pas encore" },
];

function TableauMaitrise() {
  // localStorage n'existe qu'au client : on attend le montage avant de lire.
  const mounted = useMounted();
  const resumes = mounted ? chargerResumes() : null;
  // Le détail par notion est replié par défaut : on ne veut pas d'une muraille de tuiles.
  const [ouvert, setOuvert] = useState(false);

  // État de chaque notion + comptage par état (pour la barre de synthèse).
  const lignes =
    resumes?.map(({ notion, jauge }) => ({ notion, jauge, etat: jaugeLabel(jauge).etat })) ?? null;
  const compte: Record<EtatMaitrise, number> = { acquis: 0, "a-consolider": 0, "pas-encore": 0 };
  lignes?.forEach((l) => (compte[l.etat] += 1));
  const total = lignes?.length ?? 0;

  if (lignes === null) {
    return <p className="text-sm text-base-content/40">Chargement…</p>;
  }

  // Pas de boîte, pas de fond : du contenu aéré. La barre segmentée porte l'essentiel.
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-base-content/40">Où j&apos;en suis</h2>
        <button
          type="button"
          onClick={() => setOuvert((v) => !v)}
          aria-expanded={ouvert}
          className="text-xs font-semibold text-base-content/50 transition-colors hover:text-primary"
        >
          {ouvert ? "Masquer le détail" : "Voir par notion"}
          <span className={`ml-1 inline-block transition-transform duration-200 ${ouvert ? "rotate-180" : ""}`}>⌄</span>
        </button>
      </div>

      {/* Synthèse : segments espacés en pilules, sans chiffre. */}
      <div className="mt-3 flex h-2.5 w-full gap-1">
        {LEGENDE.map(({ etat }) =>
          compte[etat] > 0 ? (
            <div
              key={etat}
              className={`rounded-full ${ETAT_UI[etat].fill} transition-[width] duration-500`}
              style={{ width: `${(compte[etat] / total) * 100}%` }}
            />
          ) : null,
        )}
      </div>
      <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1">
        {LEGENDE.map(({ etat, mot }) => (
          <span key={etat} className="flex items-center gap-1.5 text-xs font-medium text-base-content/60">
            <span className={`h-2 w-2 rounded-full ${ETAT_UI[etat].dot}`} />
            {mot}
          </span>
        ))}
      </div>

      {/* Détail par notion : liste aérée sans cadre, uniquement à la demande. */}
      {ouvert && (
        <>
          <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {lignes.map(({ notion, jauge, etat }) => {
              const { label } = jaugeLabel(jauge);
              return (
                <li key={notion.notionSlug} className="flex items-center gap-2.5">
                  <span
                    className={`h-2.5 w-2.5 shrink-0 rounded-full ${ETAT_UI[etat].dot}`}
                    role="img"
                    aria-label={label}
                    title={label}
                  />
                  <span className="truncate text-sm text-base-content/80">
                    {notion.numero}. {shortTitle(notion.title)}
                  </span>
                </li>
              );
            })}
          </ul>

          <p className="mt-4 text-xs leading-relaxed text-base-content/40">
            Ni note ni pourcentage : chaque erreur est gratuite, vous réessayez et la pastille avance.
            Le détail savoir-faire par savoir-faire reste dans chaque fiche.
          </p>
        </>
      )}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Utilitaires
──────────────────────────────────────────────────────────── */

// Combine les savoir-faire des notions choisies (dédoublonnés par id, pour le filtre du Trainer).
function dedupeSavoirFaire(notions: HubNotion[]): { id: string; label: string }[] {
  const seen = new Map<string, string>();
  for (const n of notions) {
    for (const sf of n.savoirFaire) {
      if (!seen.has(sf.id)) seen.set(sf.id, sf.label);
    }
  }
  return [...seen].map(([id, label]) => ({ id, label }));
}

// « 1. Classes grammaticales · Nature des mots » → on garde la partie avant le « · ».
function shortTitle(title: string): string {
  return title.split("·")[0].trim();
}
