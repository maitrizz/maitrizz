type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_SECTIONS_REPERAGE_ESPACE: CopieACorriger[] = [
  {
    id: "ma-26-copie-3e-coordonnee",
    copie: "Distance entre A(1 ; 2 ; 0) et B(4 ; 6 ; 12). Un candidat écrit : « √((4−1)² + (6−2)²) = 5 ».",
    correcte: false,
    verdict: "À corriger : la troisième coordonnée a été oubliée. AB = √(3² + 4² + 12²) = √169 = 13.",
    coteProf: "Toujours écrire les trois carrés dans la distance 3D, même si l'un est nul.",
  },
  {
    id: "ma-26-copie-diagonale-pave",
    copie: "Grande diagonale d'un pavé 3 × 4 × 12 cm. Un candidat écrit : « √(3² + 12²) = √153 ≈ 12,37 cm ».",
    correcte: false,
    verdict: "À corriger : la dimension de 4 cm a été oubliée. d = √(3² + 4² + 12²) = √169 = 13 cm.",
    coteProf: "Diagonale d'un pavé : d = √(L² + l² + h²), les trois dimensions.",
  },
  {
    id: "ma-26-copie-section-pyramide",
    copie: "Pyramide à base carrée de côté 6 cm coupée à mi-hauteur. Un candidat écrit : « La section est un carré de côté 6 cm ».",
    correcte: false,
    verdict: "À corriger : la section d'une pyramide parallèle à la base est semblable, pas isométrique. À mi-hauteur (k = 1/2), le côté vaut 3 cm.",
    coteProf: "Prisme : section parallèle isométrique. Pyramide : section semblable (côtés ×k).",
  },
  {
    id: "ma-26-copie-diagonale-face",
    copie: "Grande diagonale d'un cube d'arête 5 cm. Un candidat écrit : « √(5² + 5²) = 5√2 ≈ 7,07 cm ».",
    correcte: false,
    verdict: "À corriger : 5√2 est la diagonale d'une face. La grande diagonale traverse le cube : √(5² + 5² + 5²) = 5√3 ≈ 8,66 cm.",
    coteProf: "Diagonale d'une face : a√2 ; grande diagonale du cube : a√3.",
  },
  {
    id: "ma-26-copie-diagonale-correct",
    copie: "Grande diagonale d'un pavé 3 × 4 × 12 cm. Un candidat écrit : « d = √(3² + 4² + 12²) = √169 = 13 cm ».",
    correcte: true,
    verdict: "C'est juste : les trois dimensions sont prises en compte (triplet 3-4-5 pour la base, puis 5-12-13).",
  },
  {
    id: "ma-26-copie-distance-correct",
    copie: "Distance entre A(2 ; 0 ; 1) et B(5 ; 4 ; 1). Un candidat écrit : « √(3² + 4² + 0²) = √25 = 5 ».",
    correcte: true,
    verdict: "C'est juste : la formule 3D est appliquée avec ses trois termes, soit AB = 5.",
  },
];
