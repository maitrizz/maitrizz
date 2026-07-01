"use client";

// VOYANTS « OÙ J'EN SUIS » dans la notion (GABARIT_NOTION.md §6 bis, brique 3).
//
// Affiche, savoir-faire par savoir-faire, une JAUGE de remplissage = la part d'items
// réussis, dérivée des magasins existants (hub d'entraînement + exercices « Appliquer »).
// On NE crée pas de nouveau magasin : on RECROISE les surfaces via les tags `savoirFaire`
// (anti-dérive, §5).
//
// Doctrine (§6 bis) : pas de note ni de %. La jauge ne fait que MONTER : un raté ne retire
// rien (il laisse l'item non rempli, comme un item non tenté), donc l'erreur reste gratuite.
// On qualifie la progression par un mot (Pas encore · En cours · Presque acquis · Acquis),
// jamais par un chiffre.

import { useState, useSyncExternalStore } from "react";
import { computeJauges, jaugeLabel, loadDerniersResultats, toItemsTagues } from "./maitrise";
import { JaugeRow } from "./JaugeBar";
import { HUB_NOTIONS } from "@/app/reviser/[niveau]/epreuves/ecrites/[matiere]/data/francais/hub-entrainement";
import { RichText } from "./richtext";
import type { RichText as RichTextType } from "./types";

// Renvoie false côté serveur, true côté client (après hydratation) : on diffère la
// lecture localStorage au client, sans effet ni setState (idiomatique).
function useMounted(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function MaitriseVoyants({
  notionSlug,
  title = "Où j'en suis",
  intro,
}: {
  notionSlug: string;
  title?: string;
  intro?: RichTextType;
}) {
  const mounted = useMounted();
  const [open, setOpen] = useState(true);
  const notion = HUB_NOTIONS.find((n) => n.notionSlug === notionSlug);

  // Notion pas encore branchée au hub : on le dit, sans bloquer la fiche.
  if (!notion) {
    return (
      <div className="rounded-xl border-2 border-base-300 overflow-hidden">
        <div className="bg-base-200 px-4 py-3 text-sm font-semibold">📊 {title}</div>
        <div className="bg-base-100 px-5 py-4">
          <p className="text-sm text-base-content/50 leading-relaxed">
            Les voyants de cette notion arriveront avec son entraînement dédié.
          </p>
        </div>
      </div>
    );
  }

  const jauges = mounted
    ? computeJauges(
        notion.savoirFaire.map((s) => s.id),
        toItemsTagues(notion.items, []),
        loadDerniersResultats(notion.notionSlug),
      )
    : null;

  // Décompte une-ligne (en-tête replié) : combien d'acquis / en cours / pas encore.
  const resume = jauges
    ? notion.savoirFaire.reduce(
        (acc, sf) => {
          const etat = jaugeLabel(jauges[sf.id] ?? { reussis: 0, tentes: 0, total: 0, ratio: 0 }).etat;
          if (etat === "acquis") acc.acquis++;
          else if (etat === "a-consolider") acc.enCours++;
          else acc.pasEncore++;
          return acc;
        },
        { acquis: 0, enCours: 0, pasEncore: 0 },
      )
    : null;

  return (
    <div className="rounded-xl border-2 border-primary overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full bg-primary text-primary-content px-4 py-3 text-sm font-semibold flex items-center justify-between gap-3"
      >
        <span>📊 {title}</span>
        <span className="flex items-center gap-3">
          {!open && resume && (
            <span className="hidden sm:flex items-center gap-2.5 font-semibold">
              <span>{resume.acquis} acquis</span>
              <span className="opacity-80">{resume.enCours} en cours</span>
              <span className="opacity-60">{resume.pasEncore} à voir</span>
            </span>
          )}
          <span aria-hidden className={`transition-transform ${open ? "rotate-180" : ""}`}>⌄</span>
        </span>
      </button>
      <div className={`bg-base-100 px-5 py-5 flex-col gap-3 ${open ? "flex" : "hidden"}`}>
        <p className="text-sm text-base-content/70 leading-relaxed">
          {intro ? (
            <RichText text={intro} />
          ) : (
            <>
              Pas de note ni de pourcentage : la jauge montre seulement ce que vous maîtrisez déjà, savoir-faire par
              savoir-faire. Une erreur ne pénalise jamais ; vous réessayez, la jauge avance.
            </>
          )}
        </p>
        {jauges === null ? (
          <p className="text-sm text-base-content/40">Chargement…</p>
        ) : (
          <ul className="flex flex-col gap-3.5">
            {notion.savoirFaire.map((sf) => (
              <JaugeRow
                key={sf.id}
                name={sf.label}
                jauge={jauges[sf.id] ?? { reussis: 0, tentes: 0, total: 0, ratio: 0 }}
              />
            ))}
          </ul>
        )}
        <p className="text-xs text-base-content/40 leading-relaxed">
          La jauge se remplit quand vous vous entraînez (ici ou au hub d&apos;entraînement espacé).
        </p>
      </div>
    </div>
  );
}
