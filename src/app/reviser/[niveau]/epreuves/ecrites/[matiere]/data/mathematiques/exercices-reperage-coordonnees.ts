import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_REPERAGE_COORDONNEES: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-17-exo-distance-milieu",
    notion: "ma-17",
    savoirFaire: ["distance", "milieu"],
    difficulte: 1,
    enonce: "On donne A(2 ; 5) et B(6 ; 2).",
    question: "a) Calculer la distance AB.\nb) Calculer le milieu M de [AB].\nc) Le point C(4 ; 3,5) est-il le milieu de [AB] ?",
    reponseType:
      "a) AB = √[(6 − 2)² + (2 − 5)²] = √[16 + 9] = √25 = 5.\nb) M((2 + 6) ÷ 2 ; (5 + 2) ÷ 2) = (4 ; 3,5).\nc) C(4 ; 3,5) = M : oui, C est le milieu de [AB].",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-17-exo-equation-droite",
    notion: "ma-17",
    savoirFaire: ["equation-droite", "appartenance"],
    difficulte: 1,
    question: "a) Équation de la droite par A(0 ; 3) et B(2 ; 7).\nb) Le point C(5 ; 13) appartient-il à cette droite ?",
    reponseType:
      "a) a = (7 − 3) ÷ (2 − 0) = 2 ; b = 3. Donc y = 2x + 3.\nb) y = 2 × 5 + 3 = 13 = yC : oui, C appartient à la droite.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-17-exo-familles-droites",
    notion: "ma-17",
    savoirFaire: ["positions", "appartenance"],
    difficulte: 1,
    enonce: "On donne la droite d : y = 3x − 2.",
    question: "a) Équation d'une parallèle à d passant par (0 ; 5).\nb) Équation d'une perpendiculaire à d passant par (0 ; 1).\nc) Où d coupe-t-elle l'axe des abscisses ?",
    reponseType:
      "a) Même pente a = 3, b = 5 : y = 3x + 5.\nb) Pente perpendiculaire a₂ = −1/3 (car 3 × (−1/3) = −1), b = 1 : y = −x/3 + 1.\nc) y = 0 : 3x − 2 = 0 → x = 2/3, point (2/3 ; 0).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-17-exo-intersection-appartenance",
    notion: "ma-17",
    savoirFaire: ["positions", "distance", "appartenance"],
    difficulte: 1,
    enonce: "Les droites d₁ : y = x + 4 et d₂ : y = −2x + 7 se coupent en I.",
    question: "a) Coordonnées de I.\nb) Distance entre I et l'origine O.\nc) Le point A(2 ; 6) est-il sur d₁ ? Sur d₂ ?",
    reponseType:
      "a) x + 4 = −2x + 7 → 3x = 3 → x = 1, y = 5. I(1 ; 5).\nb) OI = √(1² + 5²) = √26 ≈ 5,1.\nc) d₁ : 2 + 4 = 6 ✓ ; d₂ : −4 + 7 = 3 ≠ 6 → A est sur d₁ mais pas sur d₂.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-17-exo-triangle-repere",
    notion: "ma-17",
    savoirFaire: ["distance", "milieu"],
    difficulte: 2,
    enonce: "On donne A(0 ; 0), B(4 ; 0) et C(2 ; 4).",
    question: "a) Calculer AB, BC et AC.\nb) Le triangle ABC est-il isocèle ? Justifier.\nc) Calculer le milieu M de [BC].",
    reponseType:
      "a) AB = √16 = 4 ; BC = √(4 + 16) = 2√5 ; AC = √(4 + 16) = 2√5.\nb) BC = AC = 2√5 : le triangle est isocèle en C.\nc) M((4 + 2) ÷ 2 ; (0 + 4) ÷ 2) = (3 ; 2).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-17-exo-mediane-hauteur",
    notion: "ma-17",
    savoirFaire: ["equation-droite", "positions"],
    difficulte: 3,
    enonce: "On reprend A(0 ; 0), B(4 ; 0), C(2 ; 4), et M(3 ; 2) le milieu de [BC].",
    question:
      "a) Déterminer l'équation de la droite (AM).\nb) La droite (AM) est-elle perpendiculaire à (BC) ? Justifier.\nc) Le triangle étant isocèle en C, quel est son axe de symétrie ?",
    reponseType:
      "a) (AM) passe par A(0 ; 0) et M(3 ; 2) : a = 2/3, b = 0 → y = (2/3)x.\nb) Pente de (BC) = (4 − 0) ÷ (2 − 4) = −2 ; (2/3) × (−2) = −4/3 ≠ −1 : non, (AM) n'est pas perpendiculaire à (BC).\nc) L'axe de symétrie passe par C et le milieu de [AB] : c'est la droite verticale x = 2 (et non la médiane issue de A).",
    explication: [],
  },
];
