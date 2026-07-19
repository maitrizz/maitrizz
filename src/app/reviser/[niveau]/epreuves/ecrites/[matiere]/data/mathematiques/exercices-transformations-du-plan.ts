import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_TRANSFORMATIONS_DU_PLAN: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-24-exo-axes-centres",
    notion: "ma-24",
    savoirFaire: ["axes-centres"],
    difficulte: 1,
    question:
      "a) Combien d'axes de symétrie possède un rectangle non carré ? Les décrire.\nb) Un triangle isocèle non équilatéral a-t-il un centre de symétrie ?\nc) Un parallélogramme non rectangle a-t-il des axes ? Un centre ?",
    reponseType:
      "a) 2 axes : les deux médianes parallèles aux côtés. Les diagonales ne sont pas des axes.\nb) Non. Le sommet opposé à la base n'aurait pas de symétrique dans la figure.\nc) Aucun axe, mais un centre de symétrie : l'intersection des diagonales (propriété du parallélogramme).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-24-exo-coordonnees-transformations",
    notion: "ma-24",
    savoirFaire: ["symetrie-centrale", "translation"],
    difficulte: 1,
    enonce: "Dans un repère : M(4, 3), centre O(1, 2), vecteur v⃗ = (−2, 5).",
    question: "a) Coordonnées de M', symétrique de M par rapport à O.\nb) Coordonnées de M'', image de M par la translation de vecteur v⃗.",
    reponseType:
      "a) M'(2×1 − 4, 2×2 − 3) = (−2, 1). Vérif. : milieu de [MM'] = (1, 2) = O ✓.\nb) M''(4 − 2, 3 + 5) = (2, 8).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-24-exo-centrale-parallelogramme",
    notion: "ma-24",
    savoirFaire: ["symetrie-centrale", "axes-centres"],
    difficulte: 1,
    enonce: "ABCD est un parallélogramme. O est l'intersection de ses diagonales.",
    question: "a) Montrer que B est le symétrique de D par rapport à O.\nb) En déduire que A est le symétrique de C par rapport à O.",
    reponseType:
      "a) Les diagonales d'un parallélogramme se coupent en leur milieu, donc O est le milieu de [BD] : B et D sont symétriques par rapport à O.\nb) De même, O est le milieu de [AC], donc A et C sont symétriques par rapport à O.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-24-exo-identifier-transformation",
    notion: "ma-24",
    savoirFaire: ["identifier", "translation"],
    difficulte: 1,
    enonce: "Le triangle T' de sommets A'(3,5), B'(6,3), C'(5,7) est l'image du triangle T de sommets A(1,1), B(4,−1), C(3,3).",
    question: "a) Vérifier que c'est une isométrie en comparant AB et A'B'.\nb) Calculer les vecteurs AA', BB', CC'.\nc) Identifier la transformation.",
    reponseType:
      "a) AB = √(3² + (−2)²) = √13 et A'B' = √(3² + (−2)²) = √13 : longueurs égales, c'est une isométrie.\nb) AA' = (2, 4), BB' = (2, 4), CC' = (2, 4).\nc) Tous les vecteurs sont égaux : c'est la translation de vecteur (2, 4).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-24-exo-jardin-symetrique",
    notion: "ma-24",
    savoirFaire: ["symetrie-axiale"],
    difficulte: 2,
    enonce: "Une moitié de jardin est un triangle A(0,0), B(6,0), C(3,4) (en mètres). L'autre moitié est son symétrique par rapport à l'axe d'équation x = 6.",
    question: "a) Calculer les coordonnées de A', B', C', symétriques par rapport à x = 6.\nb) L'axe x = 6 est-il un axe de symétrie du jardin complet ?\nc) La surface totale vaut-elle le double de celle de ABC ?",
    reponseType:
      "a) Pour M(x, y), M'(12 − x, y) : A'(12, 0), B'(6, 0), C'(9, 4).\nb) Oui : le jardin complet est sa propre image par cette symétrie, donc x = 6 en est un axe de symétrie.\nc) Oui : la symétrie axiale conserve les aires, et le triangle (entièrement à gauche de x = 6) et son image ne se chevauchent pas — ils ne se touchent qu'au sommet B(6, 0). Aire(ABC) = ½ × 6 × 4 = 12 m², donc surface totale = 24 m².",
    explication: [],
  },
];
