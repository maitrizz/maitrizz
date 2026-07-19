import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_STATISTIQUES_DESCRIPTIVES: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-11-exo-temperatures",
    notion: "ma-11",
    savoirFaire: ["moyenne", "mediane"],
    difficulte: 1,
    enonce: "Températures minimales sur 7 jours (°C) : 4, 7, 5, 11, 9, 6, 8.",
    question: "a) Calculer la moyenne.\nb) Déterminer la médiane.\nc) Quelle est l'étendue ?",
    reponseType:
      "a) (4 + 7 + 5 + 11 + 9 + 6 + 8) ÷ 7 = 50 ÷ 7 ≈ 7,14 °C.\nb) Triée : 4, 5, 6, 7, 8, 9, 11. N = 7 (impair), rang 4 : médiane = 7 °C.\nc) Étendue = 11 − 4 = 7 °C.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-11-exo-tableau-effectifs",
    notion: "ma-11",
    savoirFaire: ["tableau", "moyenne", "mediane"],
    difficulte: 1,
    enonce: "30 élèves, notes 6, 8, 10, 12, 14, 16 d'effectifs 2, 4, 9, 8, 5, 2.",
    question: "a) Calculer la moyenne.\nb) Déterminer la médiane avec les effectifs cumulés.",
    reponseType:
      "a) Σ nᵢ xᵢ = 12 + 32 + 90 + 96 + 70 + 32 = 332 → x̄ = 332 ÷ 30 ≈ 11,07.\nb) Effectifs cumulés : 2, 6, 15, 23, 28, 30. N = 30, rangs 15 et 16 → valeurs 10 et 12 → médiane = (10 + 12) ÷ 2 = 11.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-11-exo-durees-entrainement",
    notion: "ma-11",
    savoirFaire: ["quartiles", "boite"],
    difficulte: 1,
    enonce: "Durées (min) de 12 sportifs, triées : 35, 42, 48, 51, 55, 58, 60, 65, 70, 74, 80, 90.",
    question: "a) Déterminer médiane, Q1 et Q3.\nb) Calculer l'EIQ et l'interpréter.\nc) Donner les 5 valeurs de la boîte à moustaches.",
    reponseType:
      "a) N = 12 : médiane = (58 + 60) ÷ 2 = 59. Moitié inf. → Q1 = (48 + 51) ÷ 2 = 49,5. Moitié sup. → Q3 = (70 + 74) ÷ 2 = 72.\nb) EIQ = 72 − 49,5 = 22,5 min : les 50 % centraux s'étalent sur 22,5 minutes.\nc) min 35 · Q1 49,5 · Mé 59 · Q3 72 · max 90.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-11-exo-comparer-groupes",
    notion: "ma-11",
    savoirFaire: ["boite", "lecture-critique"],
    difficulte: 2,
    enonce: "Test de lecture (sur 100). Groupe A : min 20, Q1 45, Mé 60, Q3 75, max 95. Groupe B : min 35, Q1 55, Mé 65, Q3 70, max 80.",
    question: "a) Quel groupe a la médiane la plus haute ? Sens ?\nb) Quel groupe est le plus homogène ? Justifier numériquement.\nc) Un élève de A a eu 80 : est-ce une bonne performance dans son groupe ?",
    reponseType:
      "a) Groupe B (65 > 60) : 50 % des élèves de B ont un score ≥ 65, contre 60 pour A. B a de meilleurs résultats centraux.\nb) EIQ(A) = 30, EIQ(B) = 15 : B est plus homogène (EIQ deux fois plus faible).\nc) Q3(A) = 75, donc 80 est au-dessus du 3e quartile : la performance est dans le quart supérieur du groupe, c'est une bonne performance.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-11-exo-moyenne-mediane",
    notion: "ma-11",
    savoirFaire: ["mediane", "lecture-critique"],
    difficulte: 3,
    enonce: "Dans une petite entreprise, 9 employés gagnent 1 600 € et le dirigeant gagne 10 000 €.",
    question: "a) Calculer le salaire moyen.\nb) Déterminer le salaire médian.\nc) Quel indicateur représente le mieux le salaire « typique » ? Justifier.",
    reponseType:
      "a) Moyenne = (9 × 1 600 + 10 000) ÷ 10 = (14 400 + 10 000) ÷ 10 = 2 440 €.\nb) Série triée : neuf 1 600 puis 10 000. N = 10, rangs 5 et 6 → tous deux 1 600 → médiane = 1 600 €.\nc) La médiane (1 600 €) : la moyenne est tirée vers le haut par le seul salaire du dirigeant et ne représente personne. La médiane décrit le salaire typique.",
    explication: [],
  },
];
