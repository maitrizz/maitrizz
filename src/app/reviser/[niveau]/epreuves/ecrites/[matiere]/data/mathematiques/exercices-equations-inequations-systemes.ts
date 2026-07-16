import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_EQUATIONS_INEQUATIONS_SYSTEMES: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-09-exo-partage-croissants",
    notion: "ma-09",
    savoirFaire: ["mise-en-equation", "equation-1er-degre"],
    difficulte: 1,
    enonce: "Une boulangère partage 84 croissants en deux plateaux : le premier contient le double du second.",
    question: "a) Nommer l'inconnue et écrire l'équation.\nb) Résoudre et conclure.\nc) Vérifier dans le contexte.",
    reponseType:
      "a) Soit x le nombre de croissants du second plateau. Premier = 2x. Équation : x + 2x = 84.\nb) 3x = 84 → x = 28. Second plateau : 28 ; premier : 56.\nc) 28 + 56 = 84 ✓ et 56 = 2 × 28 ✓ : entiers positifs, cohérent.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-09-exo-equation-inequation",
    notion: "ma-09",
    savoirFaire: ["equation-1er-degre", "inequation"],
    difficulte: 1,
    question:
      "On pose A = 4x − 3 et B = x + 9.\na) Résoudre A = B.\nb) Pour quelles valeurs A > B ? Donner l'intervalle.\nc) Vérifier avec x = 6.",
    reponseType:
      "a) 4x − 3 = x + 9 → 3x = 12 → x = 4. Vérif : 13 = 13 ✓.\nb) 4x − 3 > x + 9 → 3x > 12 → x > 4, soit ]4 ; +∞[.\nc) x = 6 : A = 21 > B = 15 ✓, et 6 ∈ ]4 ; +∞[ ✓.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-09-exo-equation-produit",
    notion: "ma-09",
    savoirFaire: ["produit-nul"],
    difficulte: 1,
    question:
      "On cherche les solutions de x² − 5x + 6 = 0.\na) Vérifier que x² − 5x + 6 = (x − 2)(x − 3).\nb) En déduire les solutions.",
    reponseType:
      "a) (x − 2)(x − 3) = x² − 3x − 2x + 6 = x² − 5x + 6 ✓.\nb) (x − 2)(x − 3) = 0 ⟺ x = 2 ou x = 3.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-09-exo-systeme-buvette",
    notion: "ma-09",
    savoirFaire: ["systeme"],
    difficulte: 1,
    enonce: "À la buvette, 3 jus et 2 eaux coûtent 8,50 € ; 1 jus et 4 eaux coûtent 6,50 €.",
    question: "a) Nommer les inconnues et écrire le système.\nb) Résoudre par la méthode de votre choix.\nc) Vérifier dans les deux équations.",
    reponseType:
      "a) Soit j le prix d'un jus, e celui d'une eau. Système : 3j + 2e = 8,50 et j + 4e = 6,50.\nb) Combinaison (1) − 3 × (2) : −10e = −11 → e = 1,10 €, puis j = 6,50 − 4 × 1,10 = 2,10 €.\nc) 3 × 2,10 + 2 × 1,10 = 8,50 ✓ et 2,10 + 4 × 1,10 = 6,50 ✓.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-09-exo-signe-produit",
    notion: "ma-09",
    savoirFaire: ["inequation", "produit-nul"],
    difficulte: 2,
    question:
      "On reprend (x − 2)(x − 3).\na) Résoudre (x − 2)(x − 3) = 0.\nb) Résoudre (x − 2)(x − 3) > 0 en étudiant le signe du produit.",
    reponseType:
      "a) x = 2 ou x = 3.\nb) Produit positif quand les deux facteurs ont le même signe : x < 2 (deux négatifs) ou x > 3 (deux positifs). Solution : ]−∞ ; 2[ ∪ ]3 ; +∞[.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-09-exo-tolerance-usinage",
    notion: "ma-09",
    savoirFaire: ["valeur-absolue"],
    difficulte: 2,
    enonce: "Un fabricant accepte des pièces de 50 mm avec une tolérance de ±2 mm.",
    question: "a) Exprimer la condition avec une valeur absolue.\nb) Résoudre et donner l'intervalle des longueurs acceptées.\nc) Une pièce de 51,5 mm est-elle acceptée ?",
    reponseType:
      "a) |x − 50| ≤ 2 (la longueur est à moins de 2 mm de 50).\nb) −2 ≤ x − 50 ≤ 2 → 48 ≤ x ≤ 52, soit [48 ; 52].\nc) 51,5 ∈ [48 ; 52] et |51,5 − 50| = 1,5 ≤ 2 : la pièce est acceptée.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-09-exo-course-solidaire",
    notion: "ma-09",
    savoirFaire: ["systeme", "inequation"],
    difficulte: 3,
    enonce: "Chaque élève parcourt 3 km ou 5 km. 42 élèves participent, pour une distance totale de 166 km.",
    question:
      "a) Nommer les inconnues et écrire le système.\nb) Résoudre par substitution.\nc) Vérifier et conclure.\nd) Un organisateur dit : « Si tous avaient couru 3 km, on aurait parcouru au moins 150 km. » Vérifier par une inéquation.",
    reponseType:
      "a) Soit a le nombre d'élèves à 3 km, b à 5 km. Système : a + b = 42 et 3a + 5b = 166.\nb) a = 42 − b, puis 3(42 − b) + 5b = 166 → 2b = 40 → b = 20, a = 22.\nc) 22 + 20 = 42 ✓ et 3 × 22 + 5 × 20 = 166 ✓. 22 élèves à 3 km, 20 à 5 km.\nd) Tous à 3 km : 3 × 42 = 126 km. Or 126 < 150 : l'affirmation est fausse (3n ≥ 150 demanderait n ≥ 50, mais n = 42).",
    explication: [],
  },
];
