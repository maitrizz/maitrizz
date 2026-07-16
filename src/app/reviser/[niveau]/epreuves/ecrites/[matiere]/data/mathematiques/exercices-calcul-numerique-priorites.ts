import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_CALCUL_NUMERIQUE_PRIORITES: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-05-exo-priorites-base",
    notion: "ma-05",
    savoirFaire: ["priorites"],
    difficulte: 1,
    question: "Calculer sans calculatrice :\na) 5 + 3 × 2   b) (5 + 3) × 2   c) 20 − 4 ÷ 2   d) 12 ÷ 4 × 3   e) 2 + 3²",
    reponseType:
      "a) 5 + 6 = 11\nb) 8 × 2 = 16\nc) 20 − 2 = 18\nd) 3 × 3 = 9 (gauche à droite, même priorité)\ne) 2 + 9 = 11",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-05-exo-regles-signes",
    notion: "ma-05",
    savoirFaire: ["regles-signes"],
    difficulte: 1,
    question: "Calculer :\na) (−4) + (−7)   b) (−3) − (−5)   c) (−6) × (−4)   d) (−15) ÷ 3   e) (−2)³",
    reponseType:
      "a) même signe → −11\nb) −3 + 5 = +2\nc) deux négatifs → +24\nd) signes opposés → −5\ne) (−2)³ = −8 (trois facteurs négatifs → négatif)",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-05-exo-expressions-priorites",
    notion: "ma-05",
    savoirFaire: ["priorites", "regles-signes"],
    difficulte: 1,
    question: "Calculer en détaillant :\na) 4 × 3 + 2² − (7 − 3)   b) 18 ÷ (2 + 1) × 4 − 5   c) (−2) × 3 + 4 × (−1) − (−6)",
    reponseType:
      "a) 12 + 4 − 4 = 12\nb) 18 ÷ 3 × 4 − 5 = 24 − 5 = 19\nc) −6 + (−4) − (−6) = −6 − 4 + 6 = −4",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-05-exo-division-euclidienne",
    notion: "ma-05",
    savoirFaire: ["division-euclidienne"],
    difficulte: 1,
    question: "Donner q et r, puis écrire a = b×q + r :\na) 87 ÷ 9   b) 145 ÷ 11   c) 200 ÷ 13",
    reponseType:
      "a) 87 = 9 × 9 + 6, avec 0 ≤ 6 < 9\nb) 145 = 11 × 13 + 2, avec 0 ≤ 2 < 11\nc) 200 = 13 × 15 + 5, avec 0 ≤ 5 < 13",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-05-exo-calcul-mental",
    notion: "ma-05",
    savoirFaire: ["distributivite-mental"],
    difficulte: 2,
    question: "Calculer mentalement en détaillant la stratégie :\na) 99 × 7   b) 36 × 25   c) 125 × 8   d) 47 + 53",
    reponseType:
      "a) (100 − 1) × 7 = 700 − 7 = 693\nb) 36 × 100 ÷ 4 = 900\nc) 125 × 4 × 2 = 500 × 2 = 1 000\nd) complément : 47 + 3 = 50, + 50 = 100",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-05-exo-probleme-mixte",
    notion: "ma-05",
    savoirFaire: ["priorites", "decimaux-virgule"],
    difficulte: 2,
    enonce:
      "Un enseignant achète 24 cahiers à 2,75 € l'unité et 3 paquets de stylos à 4,50 € le paquet, avec un budget de 80 €.",
    question: "a) Coût total des achats ?\nb) Reste du budget ?\nc) Peut-il acheter 5 cahiers de plus avec ce reste ?",
    reponseType:
      "a) 24 × 2,75 + 3 × 4,50 = 66 + 13,50 = 79,50 €\nb) 80 − 79,50 = 0,50 €\nc) 5 × 2,75 = 13,75 € > 0,50 € → non, le budget est insuffisant.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-05-exo-proprietes-division",
    notion: "ma-05",
    savoirFaire: ["division-euclidienne"],
    difficulte: 3,
    question:
      "a) En divisant un entier n par 3, montrer que n² laisse toujours le reste 0 ou 1.\nb) En déduire qu'un entier dont le carré est divisible par 3 est lui-même divisible par 3.",
    reponseType:
      "a) n = 3k → n² = 3(3k²), reste 0. n = 3k+1 → n² = 3(3k²+2k)+1, reste 1. n = 3k+2 → n² = 3(3k²+4k+1)+1, reste 1. Donc n² laisse 0 ou 1.\nb) Si 3 divise n², le reste de n² par 3 est 0, ce qui n'arrive que pour n = 3k. Donc 3 divise n.",
    explication: [
      {
        type: "note",
        text: "C'est exactement le raisonnement utilisé pour montrer que √3 est irrationnel ([fiche N°4](fiche:puissances-racines-reels)).",
      },
    ],
  },
];
