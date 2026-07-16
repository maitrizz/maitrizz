type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_THEOREME_DE_PYTHAGORE: CopieACorriger[] = [
  {
    id: "ma-21-copie-racine",
    copie: "Triangle rectangle en A, AB = 3, AC = 4. Un candidat écrit : « BC = 3² + 4² = 25 cm ».",
    correcte: false,
    verdict: "À corriger : Pythagore donne BC² = 25, pas BC. Il faut conclure par la racine : BC = √25 = 5 cm.",
    coteProf: "Le théorème fournit le carré de la longueur, jamais la longueur directement.",
  },
  {
    id: "ma-21-copie-hypotenuse-cote",
    copie: "Triangle rectangle en A, hypoténuse BC = 10, AB = 6. Pour AC, un candidat écrit : « AC² = 10² + 6² = 136 ».",
    correcte: false,
    verdict: "À corriger : AC est un côté de l'angle droit, on soustrait. AC² = BC² − AB² = 100 − 36 = 64 → AC = 8 (triplet 6-8-10).",
    coteProf: "Repérer l'hypoténuse (le plus grand côté) avant de choisir somme ou différence.",
  },
  {
    id: "ma-21-copie-reciproque",
    copie: "Triangle de côtés 4, 6, 7. Un candidat écrit : « 7² ≠ 4² + 6², donc le triangle est rectangle ».",
    correcte: false,
    verdict: "À corriger : une inégalité prouve que le triangle n'est PAS rectangle (contraposée). 49 < 52 → acutangle.",
    coteProf: "Égalité → rectangle (réciproque) ; inégalité → pas rectangle (contraposée).",
  },
  {
    id: "ma-21-copie-sans-angle-droit",
    copie: "Dans un triangle quelconque ABC (aucun angle droit signalé), un candidat écrit : « BC² = AB² + AC² ».",
    correcte: false,
    verdict: "À corriger : le théorème direct ne s'applique que si le triangle est rectangle. Sans angle droit, la relation est fausse.",
    coteProf: "Citer l'angle droit : « par le théorème de Pythagore dans le triangle ABC rectangle en A ».",
  },
  {
    id: "ma-21-copie-hypotenuse-correct",
    copie: "Triangle rectangle en A, AB = 6, AC = 8. Un candidat écrit : « BC² = 36 + 64 = 100 → BC = 10 ».",
    correcte: true,
    verdict: "C'est juste : BC est l'hypoténuse, on somme les carrés, et la racine donne 10 (triplet 6-8-10).",
  },
  {
    id: "ma-21-copie-reciproque-correct",
    copie: "Triangle de côtés 9, 12, 15. Un candidat écrit : « 15² = 225 = 81 + 144, donc rectangle (réciproque) ».",
    correcte: true,
    verdict: "C'est juste : le carré du plus grand côté égale la somme des carrés des deux autres, la réciproque conclut que le triangle est rectangle.",
  },
];
