type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_CALCUL_NUMERIQUE_PRIORITES: CopieACorriger[] = [
  {
    id: "ma-05-copie-priorites",
    copie: "Pour calculer 2 + 3 × 4, un candidat écrit : « 2 + 3 × 4 = 5 × 4 = 20 ».",
    correcte: false,
    verdict: "À corriger : la multiplication passe avant l'addition. 2 + 3 × 4 = 2 + 12 = **14**.",
    coteProf: "Le calcul de gauche à droite est un automatisme de lecture ; la règle des priorités doit devenir un réflexe plus fort.",
  },
  {
    id: "ma-05-copie-signes",
    copie: "Pour calculer (−3) × (−4), un candidat écrit : « (−3) × (−4) = −12 ».",
    correcte: false,
    verdict: "À corriger : deux facteurs de même signe donnent un résultat positif. (−3) × (−4) = **+12**.",
    coteProf: "Compter les facteurs négatifs : nombre pair → positif, impair → négatif.",
  },
  {
    id: "ma-05-copie-reste-superieur",
    copie: "Pour la division euclidienne de 53 par 7, un candidat écrit : « 7 × 6 = 42, reste 11, donc q = 6 et r = 11 ».",
    correcte: false,
    verdict: "À corriger : le reste 11 ≥ 7, le quotient est trop petit. 7 × 7 = 49, reste 4 → 53 = 7 × 7 + 4, avec 0 ≤ 4 < 7.",
    coteProf: "Après chaque division euclidienne, vérifier que le reste est strictement inférieur au diviseur.",
  },
  {
    id: "ma-05-copie-virgule",
    copie: "Pour calculer 0,3 × 0,4, un candidat écrit : « 0,3 × 0,4 = 1,2 ».",
    correcte: false,
    verdict: "À corriger : 3 × 4 = 12, et 1 + 1 = 2 décimales → **0,12**.",
    coteProf: "Le produit a autant de décimales que la somme des décimales des deux facteurs.",
  },
  {
    id: "ma-05-copie-euclidienne-decimale",
    copie: "On demande la valeur décimale de 17 ÷ 4. Un candidat répond : « 17 ÷ 4 = 4 reste 1 ».",
    correcte: false,
    verdict: "À corriger : on demandait la valeur décimale, soit 17 ÷ 4 = **4,25**. « Quotient 4, reste 1 » répond à la division euclidienne.",
    coteProf: "« Quotient et reste » → euclidienne ; « valeur exacte » ou « résultat » → décimale.",
  },
  {
    id: "ma-05-copie-euclidienne-correcte",
    copie: "Pour la division euclidienne de 100 par 7, un candidat écrit : « 100 = 7 × 14 + 2, avec 0 ≤ 2 < 7 ».",
    correcte: true,
    verdict: "C'est juste : 7 × 14 = 98, reste 2, et 2 < 7. La relation a = bq + r est bien écrite.",
  },
  {
    id: "ma-05-copie-priorites-correcte",
    copie: "Pour calculer 12 ÷ 3 × 4, un candidat écrit : « 12 ÷ 3 × 4 = 4 × 4 = 16 ».",
    correcte: true,
    verdict: "C'est juste : × et ÷ ont la même priorité, on va de gauche à droite. 12 ÷ 3 = 4, puis 4 × 4 = 16.",
  },
];
