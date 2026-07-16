type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_REPERAGE_COORDONNEES: CopieACorriger[] = [
  {
    id: "ma-17-copie-abscisse-ordonnee",
    copie: "Pour placer A(3 ; −2), un candidat écrit : « 3 cases vers le haut et 2 cases à droite ».",
    correcte: false,
    verdict: "À corriger : 3 est l'abscisse (horizontal), −2 l'ordonnée (vertical). Il faut aller 3 cases à droite, puis 2 cases vers le bas.",
    coteProf: "M(x ; y) = M(horizontal ; vertical). x = axe des x = horizontal.",
  },
  {
    id: "ma-17-copie-carres-distance",
    copie: "Pour la distance entre A(1 ; 2) et B(4 ; 6), un candidat écrit : « AB = √(4 − 1 + 6 − 2) = √7 ».",
    correcte: false,
    verdict: "À corriger : la formule est √[(Δx)² + (Δy)²]. AB = √[(4 − 1)² + (6 − 2)²] = √[9 + 16] = √25 = 5.",
    coteProf: "C'est Pythagore : élever au carré chaque écart avant d'additionner.",
  },
  {
    id: "ma-17-copie-a-b",
    copie: "Pour la droite par A(0 ; 4) et B(2 ; 8), un candidat écrit : « a = 4 et b = (8 − 4) ÷ 2 = 2 ».",
    correcte: false,
    verdict: "À corriger : a se calcule (pente) = (8 − 4) ÷ (2 − 0) = 2, et b se lit en x = 0, soit b = 4. Donc y = 2x + 4.",
    coteProf: "a se calcule (Δy/Δx) ; b se lit en x = 0.",
  },
  {
    id: "ma-17-copie-signe-negatif",
    copie: "Pour A(−3 ; 2) et B(1 ; −4), pour calculer xB − xA, un candidat écrit : « 1 − 3 = −2 ».",
    correcte: false,
    verdict: "À corriger : xA = −3, donc xB − xA = 1 − (−3) = 1 + 3 = 4 (et yB − yA = −4 − 2 = −6).",
    coteProf: "Écrire les coordonnées négatives entre parenthèses : 1 − (−3) = 1 + 3.",
  },
  {
    id: "ma-17-copie-distance-correct",
    copie: "Pour la distance entre A(1 ; 2) et B(4 ; 6), un candidat écrit : « AB = √[(4 − 1)² + (6 − 2)²] = √25 = 5 ».",
    correcte: true,
    verdict: "C'est juste : les écarts sont bien élevés au carré, √(9 + 16) = √25 = 5.",
  },
  {
    id: "ma-17-copie-milieu-correct",
    copie: "Pour le milieu de [AB] avec A(2 ; 6) et B(8 ; 2), un candidat écrit : « M((2 + 8) ÷ 2 ; (6 + 2) ÷ 2) = (5 ; 4) ».",
    correcte: true,
    verdict: "C'est juste : le milieu est la moyenne des coordonnées, soit (5 ; 4).",
  },
];
