import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_SUITES_NUMERIQUES: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-10-exo-reconnaitre-type",
    notion: "ma-10",
    savoirFaire: ["reconnaitre"],
    difficulte: 1,
    enonce: "Trois suites : A = 3, 7, 11, 15… ; B = 2, 6, 18, 54… ; C = 10, 7, 4, 1…",
    question: "a) Calculer les différences et les rapports.\nb) Identifier le type et la raison de chacune.\nc) La suite C est-elle croissante ou décroissante ?",
    reponseType:
      "A) 7 − 3 = 4, 11 − 7 = 4 : arithmétique, d = 4.\nB) 6 ÷ 2 = 3, 18 ÷ 6 = 3 : géométrique, q = 3.\nC) 7 − 10 = −3, 4 − 7 = −3 : arithmétique, d = −3, donc décroissante.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-10-exo-terme-general",
    notion: "ma-10",
    savoirFaire: ["terme-arith", "terme-geo"],
    difficulte: 1,
    enonce: "Suite arithmétique u₁ = 5, d = 3. Suite géométrique u₁ = 4, q = 2.",
    question: "a) Calculer u₈ pour l'arithmétique.\nb) Calculer u₆ pour la géométrique.\nc) Pour l'arithmétique, quel est le premier terme supérieur à 100 ?",
    reponseType:
      "a) u₈ = 5 + (8 − 1) × 3 = 5 + 21 = 26.\nb) u₆ = 4 × 2⁵ = 4 × 32 = 128.\nc) 5 + (n − 1) × 3 > 100 → n − 1 > 31,6 → n = 33 : u₃₃ = 5 + 32 × 3 = 101.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-10-exo-epargne-association",
    notion: "ma-10",
    savoirFaire: ["modeliser", "terme-arith"],
    difficulte: 1,
    enonce: "Une association a 500 € en caisse et reçoit 80 € de cotisations par mois.",
    question:
      "a) Modéliser par une suite (type, u₁, d).\nb) Exprimer uₙ en fonction de n.\nc) À partir de quel mois la caisse dépasse-t-elle 1 500 € ?",
    reponseType:
      "a) On ajoute 80 chaque mois → arithmétique, u₁ = 500, d = 80.\nb) uₙ = 500 + (n − 1) × 80 = 420 + 80n.\nc) 420 + 80n > 1 500 → n > 13,5 → n = 14 : à partir du 14e mois (u₁₄ = 1 540 €).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-10-exo-placement-bancaire",
    notion: "ma-10",
    savoirFaire: ["modeliser", "terme-geo", "taux-raison"],
    difficulte: 1,
    enonce: "Un parent place 3 000 € à 2 % d'intérêts annuels composés.",
    question:
      "a) Modéliser par une suite géométrique (u₁, q).\nb) Calculer le capital après 5 ans (arrondi au centime).\nc) Comparer, au bout de 10 ans, avec des intérêts simples de 2 % (60 € par an).",
    reponseType:
      "a) +2 % → q = 1,02, u₁ = 3 000, géométrique.\nb) u₅ = 3 000 × 1,02⁴ ≈ 3 247,30 €.\nc) Intérêts simples : 3 000 + 10 × 60 = 3 600 €. Composés : 3 000 × 1,02⁹ ≈ 3 586 €. Proches sur 10 ans, mais l'effet composé s'amplifie ensuite.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-10-exo-population-ecole",
    notion: "ma-10",
    savoirFaire: ["modeliser", "terme-geo"],
    difficulte: 2,
    enonce: "En 2020, une école compte 280 élèves. Scénario A : +12 élèves par an. Scénario B : +4 % par an.",
    question:
      "a) Modéliser chaque scénario (type, u₁, raison).\nb) Calculer l'effectif prévu en 2030 (arrondi à l'entier).\nc) Que dit la forme des graphiques sur la nature de chaque scénario ?",
    reponseType:
      "a) A : arithmétique, u₁ = 280, d = 12. B : géométrique, u₁ = 280, q = 1,04.\nb) 2030 → n = 11. A : 280 + 10 × 12 = 400. B : 280 × 1,04¹⁰ ≈ 414.\nc) A : points alignés (croissance linéaire). B : courbe de plus en plus pentue (croissance exponentielle), qui finit toujours par dominer A.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-10-exo-deux-financeurs",
    notion: "ma-10",
    savoirFaire: ["modeliser", "somme"],
    difficulte: 3,
    enonce: "Une municipalité verse 5 000 € la 1re année, puis +800 € par an. Une entreprise verse 3 000 € la 1re année, puis +10 % par an.",
    question:
      "a) Modéliser chaque contribution (type, premier terme, raison).\nb) Exprimer aₙ (municipalité) et bₙ (entreprise).\nc) Calculer la contribution de chacun la 6e année.\nd) Calculer la somme versée par la municipalité sur 8 ans.",
    reponseType:
      "a) Municipalité : arithmétique, a₁ = 5 000, d = 800. Entreprise : géométrique, b₁ = 3 000, q = 1,10.\nb) aₙ = 5 000 + (n − 1) × 800 = 4 200 + 800n ; bₙ = 3 000 × 1,10^(n − 1).\nc) a₆ = 4 200 + 800 × 6 = 9 000 € ; b₆ = 3 000 × 1,10⁵ ≈ 4 831 €.\nd) S₈ = 8 × (a₁ + a₈) ÷ 2 = 8 × (5 000 + 10 600) ÷ 2 = 62 400 €.",
    explication: [],
  },
];
