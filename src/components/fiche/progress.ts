/**
 * Suivi de maîtrise par objectif, à partir des réponses au Quiz éclair.
 *
 * Logique inspirée des boîtes de Leitner : une bonne réponse fait avancer
 * l'objectif d'une boîte (intervalle de révision plus long), une erreur le
 * renvoie en boîte 0 (à revoir dès le lendemain). Persisté en localStorage,
 * par fiche.
 */

export type ObjectifMastery = {
  box: number; // 0 à 4 : intervalle de révision croissant (REVIEW_INTERVALS_DAYS)
  attempts: number;
  successes: number;
  lastResult: "success" | "fail";
  lastSeen: string; // date ISO
  nextReview: string; // date ISO
};

export type FicheProgress = Record<string, ObjectifMastery>;

const REVIEW_INTERVALS_DAYS = [1, 3, 7, 16, 30];

function storageKey(ficheSlug: string) {
  return `maitrizz:mastery:${ficheSlug}`;
}

export function loadFicheProgress(ficheSlug: string): FicheProgress {
  try {
    const raw = localStorage.getItem(storageKey(ficheSlug));
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function recordQuizAnswer(ficheSlug: string, objectifId: string, correct: boolean): FicheProgress {
  const progress = loadFicheProgress(ficheSlug);
  const current = progress[objectifId];
  const box = correct ? Math.min((current?.box ?? -1) + 1, REVIEW_INTERVALS_DAYS.length - 1) : 0;

  const now = new Date();
  const nextReview = new Date(now);
  nextReview.setDate(nextReview.getDate() + REVIEW_INTERVALS_DAYS[box]);

  progress[objectifId] = {
    box,
    attempts: (current?.attempts ?? 0) + 1,
    successes: (current?.successes ?? 0) + (correct ? 1 : 0),
    lastResult: correct ? "success" : "fail",
    lastSeen: now.toISOString(),
    nextReview: nextReview.toISOString(),
  };

  try {
    localStorage.setItem(storageKey(ficheSlug), JSON.stringify(progress));
  } catch {
    // localStorage indisponible (navigation privée...) : on ignore la persistance
  }

  return progress;
}

/** "aujourd'hui" / "demain" / "dans N jours" — relatif à la date du jour. */
export function formatReviewDate(iso: string): string {
  const target = new Date(iso);
  const todayMidnight = new Date();
  todayMidnight.setHours(0, 0, 0, 0);

  const diffDays = Math.round((target.getTime() - todayMidnight.getTime()) / 86_400_000);
  if (diffDays <= 0) return "aujourd'hui";
  if (diffDays === 1) return "demain";
  return `dans ${diffDays} jours`;
}
