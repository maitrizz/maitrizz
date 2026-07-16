import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_SECTIONS_REPERAGE_ESPACE: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-26-exo-identifier-sections",
    notion: "ma-26",
    savoirFaire: ["sections"],
    difficulte: 1,
    question:
      "Décrire la forme de la section :\na) Un cylindre coupé par un plan parallèle à sa base.\nb) Un cube coupé par un plan parallèle à une face.\nc) Une pyramide coupée par un plan passant par son sommet et un côté de la base.\nd) Un cône coupé par un plan contenant l'axe.",
    reponseType:
      "a) Un disque de même rayon que la base.\nb) Un carré identique à la face du cube.\nc) Un triangle isocèle (sommet + les deux extrémités du côté).\nd) Un triangle isocèle (section axiale).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-26-exo-distance-milieu-triangle",
    notion: "ma-26",
    savoirFaire: ["coordonnees-3d"],
    difficulte: 1,
    enonce: "On donne A(2 ; 0 ; 1), B(5 ; 4 ; 1) et C(2 ; 4 ; 5).",
    question: "a) Calculer AB, AC et BC.\nb) Calculer le milieu M de [BC].\nc) Montrer que ABC est isocèle.",
    reponseType:
      "a) AB = √(9 + 16 + 0) = 5 ; AC = √(0 + 16 + 16) = 4√2 ; BC = √(9 + 0 + 16) = 5.\nb) M = ((5+2)/2 ; (4+4)/2 ; (1+5)/2) = (3,5 ; 4 ; 3).\nc) AB = BC = 5, donc ABC est isocèle en B.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-26-exo-diagonales-cube-pave",
    notion: "ma-26",
    savoirFaire: ["diagonale-pave"],
    difficulte: 1,
    question: "a) Grande diagonale d'un cube d'arête 5 cm (forme exacte).\nb) Grande diagonale d'un pavé 6 × 8 × 24 cm.\nc) La grande diagonale d'un cube mesure 12 cm. Quelle est son arête ?",
    reponseType:
      "a) d = √(5² + 5² + 5²) = √75 = 5√3 ≈ 8,66 cm.\nb) d = √(36 + 64 + 576) = √676 = 26 cm.\nc) d = a√3 → a = 12/√3 = 4√3 ≈ 6,93 cm.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-26-exo-hauteur-pyramide",
    notion: "ma-26",
    savoirFaire: ["hauteur-pyramide"],
    difficulte: 1,
    enonce: "Une pyramide régulière à base carrée de côté 8 cm a des arêtes latérales de 7 cm.",
    question: "a) Calculer la distance du centre de la base à un sommet de la base.\nb) Calculer la hauteur h de la pyramide.",
    reponseType:
      "a) Diagonale de la base = 8√2, donc distance centre-sommet = demi-diagonale = 4√2 cm.\nb) h² = 7² − (4√2)² = 49 − 32 = 17 → h = √17 ≈ 4,12 cm.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-26-exo-toiture-pyramidale",
    notion: "ma-26",
    savoirFaire: ["hauteur-pyramide", "sections"],
    difficulte: 2,
    enonce: "Une toiture est une pyramide régulière à base rectangulaire 12 m × 8 m. Le faîte est à 3 m au-dessus du niveau de la base.",
    question: "a) Calculer la distance du centre O de la base à un angle de la base.\nb) Calculer la longueur d'une arête latérale (de S à un angle de la base).\nc) Un plan horizontal coupe à mi-hauteur. Forme et dimensions de la section ?",
    reponseType:
      "a) Demi-diagonale = √(6² + 4²) = √52 = 2√13 ≈ 7,21 m.\nb) Arête² = h² + (2√13)² = 9 + 52 = 61 → arête = √61 ≈ 7,81 m.\nc) Section parallèle à la base, donc rectangle semblable. À mi-hauteur (k = 1/2) : 6 m × 4 m.",
    explication: [],
  },
];
