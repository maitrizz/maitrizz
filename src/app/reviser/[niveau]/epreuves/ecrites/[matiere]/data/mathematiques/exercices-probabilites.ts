import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_PROBABILITES: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-12-exo-urne-simple",
    notion: "ma-12",
    savoirFaire: ["proba-classique", "contraire"],
    difficulte: 1,
    enonce: "Une urne contient 5 billes rouges, 3 bleues et 2 jaunes. On tire une bille au hasard.",
    question: "a) Combien de billes au total ?\nb) Calculer P(rouge), P(bleue), P(jaune).\nc) Vérifier que la somme vaut 1.\nd) Calculer P(ne pas tirer une rouge).",
    reponseType:
      "a) 10 billes au total (tirage au hasard → équiprobabilité).\nb) P(rouge) = 5/10 = 1/2 ; P(bleue) = 3/10 ; P(jaune) = 2/10 = 1/5.\nc) 5/10 + 3/10 + 2/10 = 10/10 = 1 ✓.\nd) P(pas rouge) = 1 − 1/2 = 1/2 (ou directement 5/10).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-12-exo-de-evenements",
    notion: "ma-12",
    savoirFaire: ["reunion"],
    difficulte: 1,
    enonce: "On lance un dé équilibré. A = « multiple de 3 », B = « nombre impair ».",
    question: "a) Lister les issues de A et de B.\nb) Calculer P(A) et P(B).\nc) A et B sont-ils incompatibles ? Calculer P(A ∪ B).",
    reponseType:
      "a) A = {3, 6}, B = {1, 3, 5}.\nb) P(A) = 2/6 = 1/3 ; P(B) = 3/6 = 1/2.\nc) A ∩ B = {3} ≠ ∅ → non incompatibles. P(A ∪ B) = 1/3 + 1/2 − 1/6 = 4/6 = 2/3.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-12-exo-arbre-avec-remise",
    notion: "ma-12",
    savoirFaire: ["arbre", "remise", "contraire"],
    difficulte: 1,
    enonce: "Une boîte contient 2 jetons rouges et 3 jetons noirs. On tire 2 jetons successivement avec remise.",
    question: "a) Donner les probabilités à chaque tirage.\nb) Calculer P(2 jetons de même couleur).\nc) Calculer P(au moins un rouge).",
    reponseType:
      "a) Avec remise : P(R) = 2/5, P(N) = 3/5 à chaque tirage (somme 1 à chaque nœud).\nb) P(RR) = 4/25, P(NN) = 9/25 → même couleur = 13/25 = 0,52.\nc) Contraire NN = 9/25 → P(au moins 1 rouge) = 1 − 9/25 = 16/25 = 0,64.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-12-exo-arbre-sans-remise",
    notion: "ma-12",
    savoirFaire: ["arbre", "remise"],
    difficulte: 1,
    enonce: "Un sac contient 3 boules blanches et 2 boules noires. On tire 2 boules successivement sans remise.",
    question: "a) Donner les probabilités du 1er puis du 2e tirage.\nb) Calculer P(exactement 1 blanche).\nc) Calculer P(2 blanches).",
    reponseType:
      "a) 1er : P(B) = 3/5, P(N) = 2/5. Après B : P(B|B) = 2/4, P(N|B) = 2/4. Après N : P(B|N) = 3/4, P(N|N) = 1/4.\nb) BN + NB = 3/5 × 2/4 + 2/5 × 3/4 = 3/10 + 3/10 = 6/10 = 3/5.\nc) P(BB) = 3/5 × 2/4 = 6/20 = 3/10.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-12-exo-nombre-au-hasard",
    notion: "ma-12",
    savoirFaire: ["proba-classique", "reunion"],
    difficulte: 2,
    enonce: "On choisit au hasard un entier de 1 à 20 inclus.",
    question: "a) P(multiple de 3) ?\nb) P(multiple de 5) ?\nc) P(multiple de 3 ou de 5) ?\nd) P(multiple de 3 et de 5) ?",
    reponseType:
      "a) {3, 6, 9, 12, 15, 18} → 6 valeurs → P = 6/20 = 3/10.\nb) {5, 10, 15, 20} → 4 valeurs → P = 4/20 = 1/5.\nc) A ∩ B = multiples de 15 = {15} → 1 valeur. P(A ∪ B) = 6/20 + 4/20 − 1/20 = 9/20.\nd) P(multiple de 15) = 1/20 (lien avec le PPCM, [fiche N°6](fiche:divisibilite-pgcd-ppcm)).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-12-exo-frequence-probabilite",
    notion: "ma-12",
    savoirFaire: ["loi-grands-nombres"],
    difficulte: 3,
    enonce: "On simule au tableur 1 000 lancers d'un dé. La fréquence observée du 6 est 0,154.",
    question: "a) Quelle est la probabilité théorique d'obtenir 6 ?\nb) L'écart avec 0,154 est-il inquiétant ?\nc) Que prédit la loi des grands nombres si on passe à 100 000 lancers ?",
    reponseType:
      "a) Dé équilibré : P(6) = 1/6 ≈ 0,167.\nb) Non : 0,154 est une fréquence observée, proche de 0,167. Un petit écart est normal sur 1 000 lancers.\nc) La fréquence se rapprochera encore davantage de 1/6 : plus n est grand, meilleure est l'estimation.",
    explication: [],
  },
];
