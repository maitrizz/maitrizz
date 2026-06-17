/**
 * Niveau de concours CRPE.
 *
 * Les notions de français 01-18 sont communes aux deux concours ; la
 * divergence L3/M2 commence à la notion 19 (Partie 3). Le niveau est porté
 * par le segment d'URL `/reviser/[niveau]/...`.
 *
 * Module volontairement isolé (sans dépendance aux données de fiches) pour
 * que les pages des oraux puissent l'importer sans tirer tout le graphe des
 * fiches dans leur bundle.
 */
export type Niveau = "l3" | "m2";

export const NIVEAUX: Niveau[] = ["l3", "m2"];

export const NIVEAU_LABELS: Record<Niveau, string> = {
  l3: "Concours L3",
  m2: "Concours M2",
};

export function isValidNiveau(value: string): value is Niveau {
  return value === "l3" || value === "m2";
}
