import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_CALCUL_LITTERAL: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-08-exo-reduire-calculer",
    notion: "ma-08",
    savoirFaire: ["reduire", "identites"],
    difficulte: 1,
    question:
      "On donne A = 3x² − 5x + 2 + x² + 4x − 7 et B = (x + 2)(x − 2).\na) Réduire A.\nb) Développer B et nommer l'identité utilisée.\nc) Calculer A et B pour x = 3.",
    reponseType:
      "a) A = (3x² + x²) + (−5x + 4x) + (2 − 7) = 4x² − x − 5.\nb) Identité (a + b)(a − b) = a² − b² : B = x² − 4.\nc) A(3) = 36 − 3 − 5 = 28 ; B(3) = 9 − 4 = 5.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-08-exo-developper-reduire",
    notion: "ma-08",
    savoirFaire: ["developper", "identites"],
    difficulte: 1,
    question: "Développer et réduire :\na) 3(2x + 1) − 2(x − 4)\nb) (x + 5)(x − 2)\nc) (3x − 1)²\nd) (x + 7)(x − 7)",
    reponseType:
      "a) 6x + 3 − 2x + 8 = 4x + 11.\nb) x² − 2x + 5x − 10 = x² + 3x − 10.\nc) (3x)² − 2 × 3x × 1 + 1² = 9x² − 6x + 1.\nd) x² − 7² = x² − 49.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-08-exo-factoriser-maximum",
    notion: "ma-08",
    savoirFaire: ["factoriser", "identites"],
    difficulte: 1,
    question: "Factoriser le plus possible :\na) 5x + 15\nb) x² − 9x\nc) 4x² − 1\nd) x² + 6x + 9\ne) 2x² − 8",
    reponseType:
      "a) 5(x + 3).\nb) x(x − 9).\nc) (2x)² − 1² = (2x + 1)(2x − 1).\nd) x² + 2 × x × 3 + 3² = (x + 3)².\ne) 2(x² − 4) = 2(x + 2)(x − 2) : facteur commun 2, puis identité 3.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-08-exo-calcul-malin",
    notion: "ma-08",
    savoirFaire: ["identites"],
    difficulte: 1,
    question: "À l'aide d'une identité remarquable, sans calculatrice :\na) 98 × 102\nb) 47² (avec 47 = 50 − 3)\nc) 99 × 101",
    reponseType:
      "a) (100 − 2)(100 + 2) = 100² − 2² = 10 000 − 4 = 9 996.\nb) (50 − 3)² = 2 500 − 300 + 9 = 2 209.\nc) (100 − 1)(100 + 1) = 10 000 − 1 = 9 999.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-08-exo-carreleur",
    notion: "ma-08",
    savoirFaire: ["developper", "identites"],
    difficulte: 2,
    enonce: "Un carreleur pose un carré de côté x mètres, puis une bordure de 2 mètres de large tout autour.",
    question:
      "a) Exprimer l'aire totale (carré + bordure) en fonction de x, puis développer.\nb) En déduire l'aire de la seule bordure, réduite.\nc) Vérifier pour x = 4.",
    reponseType:
      "a) Côté total = x + 2 + 2 = x + 4. Aire totale = (x + 4)² = x² + 8x + 16.\nb) Aire bordure = (x + 4)² − x² = 8x + 16.\nc) x = 4 : aire totale = 8² = 64 ; bordure = 8 × 4 + 16 = 48, et 64 − 16 = 48 ✓.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-08-exo-programme-magicien",
    notion: "ma-08",
    savoirFaire: ["programme", "factoriser"],
    difficulte: 2,
    enonce: "Programme : « Choisir un nombre, ajouter 4, multiplier le résultat par le nombre de départ, ajouter 4. »",
    question:
      "a) Vérifier avec x = 3 et x = 5.\nb) Traduire chaque étape en expression algébrique (x = nombre de départ).\nc) Développer et factoriser pour montrer que le résultat est toujours un carré parfait.",
    reponseType:
      "a) x = 3 : (3 + 4) × 3 + 4 = 25 = 5² ; x = 5 : (5 + 4) × 5 + 4 = 49 = 7².\nb) x → x + 4 → x(x + 4) = x² + 4x → x² + 4x + 4.\nc) x² + 4x + 4 = (x + 2)² : toujours le carré du nombre de départ augmenté de 2.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-08-exo-pairs-impairs-consecutifs",
    notion: "ma-08",
    savoirFaire: ["prouver"],
    difficulte: 3,
    question:
      "a) Montrer que le produit de deux entiers impairs est toujours impair.\nb) Montrer que la différence des carrés de deux entiers consécutifs est toujours impaire.",
    reponseType:
      "a) Soient 2a + 1 et 2b + 1 impairs. (2a + 1)(2b + 1) = 4ab + 2a + 2b + 1 = 2(2ab + a + b) + 1 : de la forme 2 × entier + 1, donc impair.\nb) Deux consécutifs n et n + 1 : (n + 1)² − n² = (2n + 1) × 1 = 2n + 1, impair pour tout n.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-08-exo-piscine-bordure",
    notion: "ma-08",
    savoirFaire: ["factoriser", "developper"],
    difficulte: 3,
    enonce: "Une piscine carrée de côté x mètres est entourée d'une bordure de 1 mètre de large.",
    question:
      "a) Exprimer l'aire totale (piscine + bordure) en fonction de x.\nb) En déduire l'aire de la bordure B(x), développée et réduite.\nc) Factoriser B(x) et l'interpréter.\nd) Vérifier pour x = 5.",
    reponseType:
      "a) Carré de côté (x + 2) : aire totale = (x + 2)².\nb) B(x) = (x + 2)² − x² = x² + 4x + 4 − x² = 4x + 4.\nc) B(x) = 4(x + 1) : on retrouve les 4 bandes de la bordure, de longueur (x + 1).\nd) x = 5 : total 7² = 49, piscine 25, bordure 24 ; et 4 × 5 + 4 = 24 ✓.",
    explication: [],
  },
];
