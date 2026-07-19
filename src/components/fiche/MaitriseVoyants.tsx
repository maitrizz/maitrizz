"use client";

// VOYANTS « OÙ J'EN SUIS » dans la notion (GABARIT_NOTION.md §6 bis, brique 3).
//
// Affiche, savoir-faire par savoir-faire, une JAUGE de remplissage = la part d'items
// réussis, dérivée des magasins existants (hub d'entraînement + exercices « Appliquer »).
// On NE crée pas de nouveau magasin : on RECROISE les surfaces via les tags `savoirFaire`
// (anti-dérive, §5).
//
// Design : MÊME langage visuel que le tableau du hub (sobre, aéré, code couleur partagé
// ETAT_STYLE). Une barre de synthèse segmentée + légende à pastilles en tête, puis le
// détail savoir-faire par savoir-faire, REPLIÉ par défaut (comme le hub).
//
// Doctrine (§6 bis) : pas de note ni de %. La jauge ne fait que MONTER : un raté ne retire
// rien (il laisse l'item non rempli, comme un item non tenté), donc l'erreur reste gratuite.
// On qualifie la progression par un mot (Pas encore · En cours · Presque acquis · Acquis),
// jamais par un chiffre.

import { useState, useSyncExternalStore } from "react";
import {
  computeJauges,
  jaugeLabel,
  loadDerniersResultats,
  toItemsTagues,
  ETAT_STYLE,
  type EtatMaitrise,
  type ItemTague,
} from "./maitrise";
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

// Synthèse en tête : combien de savoir-faire dans chaque état (du plus avancé au moins).
const LEGENDE: { etat: EtatMaitrise; mot: string }[] = [
  { etat: "acquis", mot: "Acquis" },
  { etat: "a-consolider", mot: "En cours" },
  { etat: "pas-encore", mot: "Pas encore" },
];

export function MaitriseVoyants({
  notionSlug,
  title = "Où j'en suis",
  intro,
  extraItems = [],
}: {
  notionSlug: string;
  title?: string;
  intro?: RichTextType;
  // Items d'autres surfaces de la fiche (exercices « Appliquer », copies « Corriger »),
  // déjà tagués `savoirFaire`, à recroiser avec la banque du hub (§5, source unique).
  extraItems?: ItemTague[];
}) {
  const mounted = useMounted();
  const [ouvert, setOuvert] = useState(false);
  const notion = HUB_NOTIONS.find((n) => n.notionSlug === notionSlug);

  // Notion pas encore branchée au hub : on le dit, sans bloquer la fiche.
  if (!notion) {
    return (
      <div className="rounded-xl border border-base-300 bg-base-100 px-5 py-4">
        <h2 className="text-xs font-bold uppercase tracking-wider text-base-content/40">{title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-base-content/50">
          Les voyants de cette notion arriveront avec son entraînement dédié.
        </p>
      </div>
    );
  }

  const jauges = mounted
    ? computeJauges(
        notion.savoirFaire.map((s) => s.id),
        [...toItemsTagues(notion.items, []), ...extraItems],
        loadDerniersResultats(notion.notionSlug),
      )
    : null;

  // Comptage par état (pour la barre de synthèse), sur les savoir-faire de la notion.
  const compte: Record<EtatMaitrise, number> = { acquis: 0, "a-consolider": 0, "pas-encore": 0 };
  if (jauges) {
    for (const sf of notion.savoirFaire) {
      const { etat } = jaugeLabel(jauges[sf.id] ?? { reussis: 0, tentes: 0, total: 0, ratio: 0 });
      compte[etat] += 1;
    }
  }
  const total = notion.savoirFaire.length;

  return (
    <div className="rounded-xl border border-base-300 bg-base-100 px-5 py-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-base-content/40">{title}</h2>
        <button
          type="button"
          onClick={() => setOuvert((v) => !v)}
          aria-expanded={ouvert}
          className="text-xs font-semibold text-base-content/50 transition-colors hover:text-primary"
        >
          {ouvert ? "Masquer le détail" : "Voir le détail"}
          <span className={`ml-1 inline-block transition-transform duration-200 ${ouvert ? "rotate-180" : ""}`}>⌄</span>
        </button>
      </div>

      {jauges === null ? (
        <p className="mt-3 text-sm text-base-content/40">Chargement…</p>
      ) : (
        <>
          {/* Synthèse : segments espacés en pilules, sans chiffre (comme au hub). */}
          <div className="mt-3 flex h-2.5 w-full gap-1">
            {LEGENDE.map(({ etat }) =>
              compte[etat] > 0 ? (
                <div
                  key={etat}
                  className={`rounded-full ${ETAT_STYLE[etat].fill} transition-[width] duration-500`}
                  style={{ width: `${(compte[etat] / total) * 100}%` }}
                />
              ) : null,
            )}
          </div>
          <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1">
            {LEGENDE.map(({ etat, mot }) => (
              <span key={etat} className="flex items-center gap-1.5 text-xs font-medium text-base-content/60">
                <span className={`h-2 w-2 rounded-full ${ETAT_STYLE[etat].dot}`} />
                {mot}
              </span>
            ))}
          </div>

          {/* Détail savoir-faire par savoir-faire (replié par défaut). */}
          {ouvert && (
            <div className="mt-4 flex flex-col gap-4 border-t border-base-200 pt-4">
              <div className="text-sm leading-relaxed text-base-content/70">
                {intro ? (
                  <RichText text={intro} />
                ) : (
                  <>
                    <p>Chaque barre montre où vous en êtes sur un savoir-faire, avec trois couleurs :</p>
                    <ul className="mt-2 flex flex-col gap-1.5">
                      <li className="flex items-center gap-2">
                        <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${ETAT_STYLE.acquis.fill}`} />
                        <span><span className="font-semibold text-base-content">Vert :</span> acquis.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${ETAT_STYLE["a-consolider"].fill}`} />
                        <span><span className="font-semibold text-base-content">Ambre :</span> à revoir (réponse manquée).</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${ETAT_STYLE["pas-encore"].fill}`} />
                        <span><span className="font-semibold text-base-content">Gris :</span> pas encore travaillé.</span>
                      </li>
                    </ul>
                    <p className="mt-2">
                      À chaque bonne réponse, le vert progresse. Une erreur passe en ambre, elle ne fait jamais reculer la
                      barre : vous réessayez et le vert reprend sa place.
                    </p>
                  </>
                )}
              </div>

              <ul className="flex flex-col gap-3.5">
                {notion.savoirFaire.map((sf) => (
                  <JaugeRow
                    key={sf.id}
                    name={sf.label}
                    jauge={jauges[sf.id] ?? { reussis: 0, tentes: 0, total: 0, ratio: 0 }}
                  />
                ))}
              </ul>

              <p className="text-xs leading-relaxed text-base-content/40">
                La barre ne fait que monter&nbsp;: elle se remplit quand vous vous entraînez (ici ou au hub d&apos;entraînement
                espacé).
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
