type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_PROPORTIONNALITE_POURCENTAGES: CopieACorriger[] = [
  {
    id: "ma-13-copie-non-proportionnel",
    copie: "Carré de côté 3 cm (aire 9 cm²). Pour l'aire du carré de côté 6 cm, un candidat écrit : « le côté double, donc l'aire double : 9 × 2 = 18 cm² ».",
    correcte: false,
    verdict: "À corriger : l'aire n'est pas proportionnelle au côté (A = c²). Si le côté ×2, l'aire ×4. Aire du carré de côté 6 cm = 36 cm².",
    coteProf: "Tester le rapport avant d'appliquer la règle de trois : 9 ÷ 3 = 3 mais 36 ÷ 6 = 6.",
  },
  {
    id: "ma-13-copie-valeur-initiale",
    copie: "Après −30 %, un prix vaut 140 €. Pour le prix initial, un candidat écrit : « initial = 140 + 30 % de 140 = 182 € ».",
    correcte: false,
    verdict: "À corriger : les 30 % s'appliquaient sur le prix initial. CM = 0,70 → initial = 140 ÷ 0,70 = 200 € (vérif : 200 × 0,70 = 140).",
    coteProf: "Pour remonter à la valeur initiale, diviser la valeur finale par le CM.",
  },
  {
    id: "ma-13-copie-taux-successifs",
    copie: "Un prix subit +10 % puis +10 %. Un candidat écrit : « +10 % + 10 % = +20 % global ».",
    correcte: false,
    verdict: "À corriger : la seconde hausse s'applique sur une base déjà augmentée. CM global = 1,10 × 1,10 = 1,21, soit +21 %.",
    coteProf: "Multiplier les coefficients multiplicateurs, jamais additionner les taux.",
  },
  {
    id: "ma-13-copie-conversion-duree",
    copie: "Pour convertir 1h 45min en heures décimales, un candidat écrit : « 1h 45min = 1,45 h ».",
    correcte: false,
    verdict: "À corriger : on convertit les minutes par ÷ 60. 1h 45min = 1 + 45/60 = 1,75 h.",
    coteProf: "Repères : 15min = 0,25 ; 30min = 0,5 ; 45min = 0,75.",
  },
  {
    id: "ma-13-copie-cm-correct",
    copie: "Un loyer de 800 € augmente de 6 %. Un candidat écrit : « CM = 1,06 → 800 × 1,06 = 848 € ».",
    correcte: true,
    verdict: "C'est juste : une augmentation de 6 % correspond au coefficient 1 + 0,06 = 1,06, et 800 × 1,06 = 848 €.",
  },
  {
    id: "ma-13-copie-echelle-correct",
    copie: "Sur une carte au 1/25 000, un candidat écrit : « 4 cm → 4 × 25 000 = 100 000 cm = 1 km ».",
    correcte: true,
    verdict: "C'est juste : la distance réelle vaut 100 000 cm, convertie en 1 000 m = 1 km.",
  },
];
