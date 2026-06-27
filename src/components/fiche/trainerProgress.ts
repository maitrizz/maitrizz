/**
 * Moteur du trainer : récupération espacée par item (boîtes de Leitner).
 *
 * À la différence de `progress.ts` (maîtrise par OBJECTIF, alimentée par le quiz),
 * ici l'unité suivie est l'ITEM. Chaque item vit dans une boîte ; une bonne réponse
 * le fait monter d'une boîte (intervalle de révision plus long), une erreur le renvoie
 * en boîte 0 (échu tout de suite). Persisté en localStorage, par fiche.
 *
 * « Réviser indéfiniment » = la boucle revient au bon moment, pas un flux aléatoire.
 */

import type { TrainerItem } from "./types";

export type ItemState = {
  box: number; // 0..MAX_BOX
  due: number; // epoch ms : prochaine échéance
  seen: number;
  ok: number;
  lastResult: "ok" | "ko";
};

export type TrainerState = Record<string, ItemState>; // clé : item.id

// Intervalle (en jours) avant la prochaine échéance, par boîte.
// Boîte 0 = échu immédiatement (revoir dès la session suivante).
const TRAINER_INTERVALS_DAYS = [0, 1, 3, 7, 16, 30];
const MAX_BOX = TRAINER_INTERVALS_DAYS.length - 1;
const DAY_MS = 24 * 60 * 60 * 1000;

function storageKey(ficheSlug: string) {
  return `maitrizz:trainer:${ficheSlug}`;
}

export function loadTrainerState(ficheSlug: string): TrainerState {
  try {
    const raw = localStorage.getItem(storageKey(ficheSlug));
    return raw ? (JSON.parse(raw) as TrainerState) : {};
  } catch {
    return {};
  }
}

function saveTrainerState(ficheSlug: string, state: TrainerState) {
  try {
    localStorage.setItem(storageKey(ficheSlug), JSON.stringify(state));
  } catch {
    // localStorage indisponible (navigation privée…) : on ignore la persistance
  }
}

/** Met à jour l'état d'un item après une réponse et persiste. Renvoie le nouvel état complet. */
export function recordTrainerAnswer(
  ficheSlug: string,
  itemId: string,
  correct: boolean,
  now = Date.now(),
): TrainerState {
  const state = loadTrainerState(ficheSlug);
  const current = state[itemId];
  const box = correct ? Math.min((current?.box ?? -1) + 1, MAX_BOX) : 0;

  state[itemId] = {
    box,
    due: now + TRAINER_INTERVALS_DAYS[box] * DAY_MS,
    seen: (current?.seen ?? 0) + 1,
    ok: (current?.ok ?? 0) + (correct ? 1 : 0),
    lastResult: correct ? "ok" : "ko",
  };

  saveTrainerState(ficheSlug, state);
  return state;
}

/** Un item est échu s'il n'a jamais été vu ou si son échéance est passée. */
function isDue(item: TrainerItem, state: TrainerState, now: number): boolean {
  const s = state[item.id];
  return !s || s.due <= now;
}

/**
 * Construit la file d'une session : items échus, priorisés (boîte la plus basse
 * et plus en retard d'abord), puis entrelacés pour ne pas enchaîner deux items
 * du même objectif (interleaving). `forceAll` ignore les échéances (mode « tout revoir »).
 */
export function buildSessionQueue(
  items: TrainerItem[],
  state: TrainerState,
  options: { limit?: number; now?: number; forceAll?: boolean } = {},
): TrainerItem[] {
  const { limit = 12, now = Date.now(), forceAll = false } = options;

  const pool = forceAll ? [...items] : items.filter((it) => isDue(it, state, now));

  pool.sort((a, b) => {
    const sa = state[a.id];
    const sb = state[b.id];
    const boxA = sa?.box ?? -1; // jamais vu = priorité haute
    const boxB = sb?.box ?? -1;
    if (boxA !== boxB) return boxA - boxB;
    if (a.difficulte !== b.difficulte) return a.difficulte - b.difficulte; // facile d'abord
    return (sa?.due ?? 0) - (sb?.due ?? 0);
  });

  const selected = pool.slice(0, limit);
  return interleaveByObjectif(selected);
}

/** Réordonne pour éviter deux items consécutifs du même savoir-faire (glouton). */
function interleaveByObjectif(items: TrainerItem[]): TrainerItem[] {
  const remaining = [...items];
  const result: TrainerItem[] = [];
  let lastSf: string | null = null;

  while (remaining.length > 0) {
    let idx = remaining.findIndex((it) => (it.savoirFaire[0] ?? "") !== lastSf);
    if (idx === -1) idx = 0; // plus que des items du même savoir-faire : on prend le premier
    const [next] = remaining.splice(idx, 1);
    result.push(next);
    lastSf = next.savoirFaire[0] ?? "";
  }
  return result;
}

export type TrainerStats = {
  total: number;
  dueCount: number;
  masteredCount: number; // items en boîte haute (≥ MAX_BOX - 1)
  nextDue: number | null; // échéance la plus proche parmi les items non échus
};

export function computeStats(
  items: TrainerItem[],
  state: TrainerState,
  now = Date.now(),
): TrainerStats {
  let dueCount = 0;
  let masteredCount = 0;
  let nextDue: number | null = null;

  for (const item of items) {
    const s = state[item.id];
    if (isDue(item, state, now)) {
      dueCount++;
    } else if (nextDue === null || s.due < nextDue) {
      nextDue = s.due;
    }
    if (s && s.box >= MAX_BOX - 1) masteredCount++;
  }

  return { total: items.length, dueCount, masteredCount, nextDue };
}

/** Formate une échéance future en texte court (« dans 3 jours », « demain »…). */
export function formatNextDue(nextDue: number | null, now = Date.now()): string {
  if (nextDue === null) return "";
  const days = Math.round((nextDue - now) / DAY_MS);
  if (days <= 0) return "aujourd'hui";
  if (days === 1) return "demain";
  return `dans ${days} jours`;
}
