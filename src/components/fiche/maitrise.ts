/**
 * Calculateur de maîtrise par savoir-faire (les « voyants »).
 *
 * Doctrine (GABARIT_NOTION.md §6 bis) :
 *  - Trois états bienveillants, PAS de note ni de % : « pas encore » · « à consolider » · « acquis ».
 *  - On regarde l'ÉTAT ACTUEL, pas l'historique des fautes. L'erreur est gratuite : un raté
 *    laisse un voyant « à consolider » (jamais un rouge) ; on réessaie, le voyant passe au vert.
 *  - UN SEUL tableau, dérivé de toutes les surfaces (notion + hub), parce que chaque item
 *    porte ses tags `savoirFaire`. On NE crée PAS un 4e magasin : on RECROISE les magasins
 *    existants (exercices, trainer) avec les tags des banques. Source unique = anti-dérive (§5).
 *
 * Découpage volontaire : `computeMaitrise` est une fonction PURE (testable, sans navigateur) ;
 * les lecteurs `load…` vont chercher l'état réel dans localStorage.
 */

import { loadTrainerState } from "./trainerProgress";
import type { TrainerItem, TrainerExercice } from "./types";

export type EtatMaitrise = "pas-encore" | "a-consolider" | "acquis";

// Un item réduit à ce dont le calcul a besoin : son identifiant et ses savoir-faire.
// Convient aussi bien aux items fermés (TrainerItem) qu'aux exercices ouverts (TrainerExercice).
export type ItemTague = { id: string; savoirFaire: string[] };

// Dernier résultat connu par item : true = réussi · false = à revoir · absent = pas encore tenté.
export type DerniersResultats = Record<string, boolean>;

/* ────────────────────────────────────────────────────────────
   Lecteurs : reconstituent les « derniers résultats » depuis localStorage.
   On ne touche pas aux magasins existants, on les LIT.
──────────────────────────────────────────────────────────── */

type RatingMap = Record<string, "ok" | "ko">;

function loadRatingMap(key: string): RatingMap {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as RatingMap) : {};
  } catch {
    return {};
  }
}

// Tiroir Leitner partagé par le hub d'entraînement (espacé, multi-notions).
// Le hub mélange des items de plusieurs notions sous une seule clé ; comme chaque
// item porte son `id`, lire ce tiroir entier est sans danger (seuls les items de la
// notion calculée correspondent).
export const HUB_SLUG = "hub-francais-ecrit";

/**
 * Derniers résultats d'une notion, fusionnés depuis toutes ses surfaces :
 *  - le hub d'entraînement (Leitner) `maitrizz:trainer:hub-francais-ecrit` → lastResult ok/ko ;
 *  - un éventuel trainer interne `maitrizz:trainer:<slug>` (aucun aujourd'hui : le trainer vit au hub) ;
 *  - « Appliquer » (exercices ouverts) `maitrizz:exos:<slug>` → ok/ko (auto-évaluation).
 * NB : « Corriger des erreurs » (`maitrizz:copies:<slug>`) n'est PAS encore inclus :
 * les copies ne portent pas encore de tags `savoirFaire` (à brancher quand elles seront taguées).
 * L'ordre de fusion fait primer le dernier signal connu (le hub espacé peut faire redescendre un voyant).
 */
export function loadDerniersResultats(notionSlug: string): DerniersResultats {
  const resultats: DerniersResultats = {};

  const exos = loadRatingMap(`maitrizz:exos:${notionSlug}`);
  for (const [id, r] of Object.entries(exos)) {
    resultats[id] = r === "ok";
  }

  const trainerState = loadTrainerState(notionSlug);
  for (const [id, st] of Object.entries(trainerState)) {
    resultats[id] = st.lastResult === "ok";
  }

  const hubState = loadTrainerState(HUB_SLUG);
  for (const [id, st] of Object.entries(hubState)) {
    resultats[id] = st.lastResult === "ok";
  }

  return resultats;
}

/* ────────────────────────────────────────────────────────────
   Jauge de remplissage par savoir-faire (part d'items réussis).
   La barre ne fait que MONTER : un raté ne retire rien (il laisse l'item
   non rempli, comme un item non tenté). L'erreur reste gratuite (§6 bis),
   pas de score qui descend.
──────────────────────────────────────────────────────────── */

export type JaugeSavoirFaire = {
  reussis: number; // items dont le dernier résultat connu est « réussi »
  tentes: number; // items déjà tentés (réussis ou ratés)
  total: number; // items portant ce savoir-faire
  ratio: number; // reussis / total, dans [0, 1]
};

export function computeJauges(
  savoirFaireIds: string[],
  items: ItemTague[],
  resultats: DerniersResultats,
): Record<string, JaugeSavoirFaire> {
  const table: Record<string, JaugeSavoirFaire> = {};
  for (const sf of savoirFaireIds) {
    const concernes = items.filter((it) => it.savoirFaire.includes(sf));
    let reussis = 0;
    let tentes = 0;
    for (const it of concernes) {
      const r = resultats[it.id];
      if (r === undefined) continue;
      tentes++;
      if (r === true) reussis++;
    }
    const total = concernes.length;
    table[sf] = { reussis, tentes, total, ratio: total === 0 ? 0 : reussis / total };
  }
  return table;
}

/**
 * Jauge GLOBALE d'une notion : agrège tous ses items (chacun compté une fois,
 * sans dédoublonner par savoir-faire). Sert à la vue d'ensemble du hub (une
 * ligne par notion).
 */
export function computeJaugeGlobale(
  items: ItemTague[],
  resultats: DerniersResultats,
): JaugeSavoirFaire {
  let reussis = 0;
  let tentes = 0;
  for (const it of items) {
    const r = resultats[it.id];
    if (r === undefined) continue;
    tentes++;
    if (r === true) reussis++;
  }
  const total = items.length;
  return { reussis, tentes, total, ratio: total === 0 ? 0 : reussis / total };
}

/**
 * Libellé bienveillant + état (pour la couleur) d'après la jauge.
 * Aucun chiffre : on qualifie la progression, on ne note pas.
 */
export function jaugeLabel(j: JaugeSavoirFaire): { label: string; etat: EtatMaitrise } {
  if (j.total === 0 || j.tentes === 0) return { label: "Pas encore", etat: "pas-encore" };
  if (j.reussis === j.total) return { label: "Acquis", etat: "acquis" };
  if (j.reussis === 0) return { label: "À retravailler", etat: "a-consolider" };
  if (j.ratio >= 0.67) return { label: "Presque acquis", etat: "a-consolider" };
  return { label: "En cours", etat: "a-consolider" };
}

/** Aide de typage : rassemble items fermés + exercices ouverts en briques taguées. */
export function toItemsTagues(
  trainerItems: TrainerItem[],
  exercices: TrainerExercice[],
): ItemTague[] {
  return [
    ...trainerItems.map((it) => ({ id: it.id, savoirFaire: it.savoirFaire })),
    ...exercices.map((ex) => ({ id: ex.id, savoirFaire: ex.savoirFaire })),
  ];
}
