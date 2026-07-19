import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_SOLIDES_PATRONS_REPRESENTATION: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-25-exo-comptage-euler",
    notion: "ma-25",
    savoirFaire: ["comptage", "euler"],
    difficulte: 1,
    question:
      "a) Un prisme droit a une base hexagonale. Combien de sommets, d'arêtes, de faces ?\nb) Vérifier la formule d'Euler pour le cube.\nc) Un polyèdre a 10 sommets et 7 faces. Combien d'arêtes ?",
    reponseType:
      "a) n = 6 : S = 12, A = 18, F = 8. Vérif. : 12 + 8 = 18 + 2 = 20 ✓.\nb) Cube : S = 8, F = 6, A = 12. 8 + 6 = 12 + 2 = 14 ✓.\nc) S + F = A + 2 → 10 + 7 = A + 2 → A = 15.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-25-exo-identifier-vues",
    notion: "ma-25",
    savoirFaire: ["vues"],
    difficulte: 1,
    enonce: "Trois vues d'un solide : vue de face = triangle isocèle, vue de dessus = carré, vue de côté = triangle isocèle.",
    question: "Identifier le solide et justifier.",
    reponseType:
      "Vue de dessus carrée : la base est un carré. Vues de face et de côté triangulaires : le solide se rétrécit vers un sommet.\nC'est une pyramide à base carrée (régulière, car les triangles sont isocèles et identiques).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-25-exo-patron-cylindre",
    notion: "ma-25",
    savoirFaire: ["patrons", "aires"],
    difficulte: 1,
    enonce: "Un cylindre a un rayon de base r = 4 cm et une hauteur h = 10 cm.",
    question: "a) Décrire le patron (formes et dimensions).\nb) Calculer l'aire latérale et l'aire totale (arrondir au cm²).",
    reponseType:
      "a) 2 disques de rayon 4 cm + 1 rectangle de largeur 2πr = 8π ≈ 25,1 cm et de hauteur 10 cm.\nb) Aire latérale = 2πr × h = 80π ≈ 251 cm². Aire des 2 bases = 2πr² = 32π ≈ 101 cm². Aire totale ≈ 352 cm².",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-25-exo-patron-valide",
    notion: "ma-25",
    savoirFaire: ["patrons", "euler"],
    difficulte: 1,
    enonce: "On propose pour un prisme droit à base triangulaire : 2 triangles rectangles (côtés 3, 4, 5 cm) + 3 rectangles de hauteur 8 cm et de largeurs 3, 4 et 5 cm.",
    question: "a) Vérifier la cohérence (faces, Euler).\nb) Calculer l'aire totale du prisme.",
    reponseType:
      "a) 5 faces (2 triangles + 3 rectangles) ✓. S = 6, A = 9 : 6 + 5 = 9 + 2 = 11 ✓. Les largeurs 3, 4, 5 correspondent aux côtés du triangle : patron cohérent.\nb) 2 bases = 2 × (½ × 3 × 4) = 12 cm². Aire latérale = (3 + 4 + 5) × 8 = 96 cm². Aire totale = 108 cm².",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-25-exo-brique-jus",
    notion: "ma-25",
    savoirFaire: ["aires"],
    difficulte: 2,
    enonce: "Pour un projet de CM2, les élèves recouvrent de papier des briques cylindriques de rayon 4 cm et de hauteur 12 cm. Chaque feuille fait 30 cm × 40 cm.",
    question: "a) Calculer l'aire de la surface latérale d'une brique (arrondir au cm²).\nb) Combien de briques peut-on recouvrir avec une feuille (surface latérale seulement) ?",
    reponseType:
      "a) Aire latérale = 2πr × h = 2π × 4 × 12 = 96π ≈ 302 cm².\nb) Aire de la feuille = 1 200 cm². 1 200 / 302 ≈ 3,97, donc on peut recouvrir 3 briques entières.",
    explication: [],
  },
];
