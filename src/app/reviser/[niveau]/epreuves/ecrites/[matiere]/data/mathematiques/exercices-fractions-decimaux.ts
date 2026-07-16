import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_FRACTIONS_DECIMAUX: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-03-exo-vocabulaire-sens",
    notion: "ma-03",
    savoirFaire: ["sens-fraction"],
    difficulte: 1,
    question:
      "a) Dans 5/8, identifier numérateur et dénominateur.\nb) Donner deux fractions égales à 2/3.\nc) Parmi 3 · −2/5 · √2 · 0,25 · π · 7/4, lesquels sont rationnels ?\nd) 7/4 est-elle plus grande ou plus petite que 1 ?",
    reponseType:
      "a) numérateur = 5, dénominateur = 8\nb) 2/3 = 4/6 = 6/9 (multiplier les deux termes par le même nombre)\nc) Rationnels : 3, −2/5, 0,25, 7/4. Non rationnels : √2 et π.\nd) 7/4 > 1 car le numérateur dépasse le dénominateur (7/4 = 1,75).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-03-exo-fractions-irreductibles",
    notion: "ma-03",
    savoirFaire: ["fraction-irreductible"],
    difficulte: 1,
    question: "Rendre irréductibles : a) 12/18   b) 35/49   c) 24/60",
    reponseType:
      "a) PGCD = 6 → **2/3**\nb) PGCD = 7 → **5/7**\nc) PGCD = 12 → **2/5**",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-03-exo-operations-fractions",
    notion: "ma-03",
    savoirFaire: ["addition-soustraction", "multiplication-division", "fraction-irreductible"],
    difficulte: 1,
    question: "Calculer et donner le résultat irréductible :\na) 2/5 + 3/4   b) 5/6 − 1/4   c) 3/7 × 14/9   d) 4/5 ÷ 8/15",
    reponseType:
      "a) 8/20 + 15/20 = **23/20**\nb) 10/12 − 3/12 = **7/12**\nc) 42/63 = **2/3** (ou en croix : 14/7 = 2 et 3/9 = 1/3 → 2/3)\nd) 4/5 × 15/8 = 60/40 = **3/2**",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-03-exo-conversions",
    notion: "ma-03",
    savoirFaire: ["conversion-decimal", "developpement-decimal"],
    difficulte: 1,
    question: "a) Convertir en décimal : 3/5 · 7/8 · 2/3\nb) Convertir en fraction irréductible : 0,4 · 0,625 · 0,12",
    reponseType:
      "a) 3/5 = 0,6 · 7/8 = 0,875 · 2/3 = 0,666… (périodique)\nb) 0,4 = 2/5 · 0,625 = 5/8 · 0,12 = 3/25",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-03-exo-situation-reservoir",
    notion: "ma-03",
    savoirFaire: ["sens-fraction", "multiplication-division", "addition-soustraction"],
    difficulte: 2,
    enonce: "Un réservoir contient 3/4 de sa capacité maximale, soit 45 litres.",
    question:
      "a) Quelle est la capacité maximale ?\nb) On ajoute 1/6 de la capacité maximale. Quel est le volume total ?\nc) Le réservoir déborde-t-il ?",
    reponseType:
      "a) 3/4 de C = 45 → C = 45 × 4/3 = **60 litres**\nb) 1/6 de 60 = 10 litres → 45 + 10 = **55 litres**\nc) 55 < 60 → il ne déborde pas (rempli à 55/60 = 11/12).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-03-exo-comparer-ordonner",
    notion: "ma-03",
    savoirFaire: ["addition-soustraction"],
    difficulte: 2,
    question: "Ranger dans l'ordre croissant en réduisant au même dénominateur : 3/5 · 2/3 · 7/12 · 5/8.",
    reponseType:
      "PPCM(5, 3, 12, 8) = 120 : 3/5 = 72/120 · 2/3 = 80/120 · 7/12 = 70/120 · 5/8 = 75/120\n70 < 72 < 75 < 80 → **7/12 < 3/5 < 5/8 < 2/3**",
    explication: [
      { type: "note", text: "On ne peut pas comparer ces fractions sans les mettre au même dénominateur." },
    ],
  },
  {
    // TODO refonte exo
    id: "ma-03-exo-developpement-rationalite",
    notion: "ma-03",
    savoirFaire: ["developpement-decimal", "conversion-decimal"],
    difficulte: 3,
    question:
      "a) Montrer que 1/7 a un développement périodique et trouver sa période.\nb) 0,272727… est-il rationnel ? Si oui, l'écrire en fraction irréductible.\nc) Montrer que tout décimal fini est rationnel.",
    reponseType:
      "a) 1 ÷ 7 = 0,142857142857… La période est 142857 (longueur 6). En divisant par 7, les restes possibles vont de 0 à 6 : après au plus 6 étapes, un reste se répète, donc la division se répète.\nb) x = 0,272727… → 100x = 27,272727… → 99x = 27 → x = 27/99 = **3/11**. Oui, c'est rationnel.\nc) Un décimal fini x à n chiffres après la virgule vérifie x × 10ⁿ = k entier, donc x = k/10ⁿ avec k ∈ ℤ : c'est un rationnel.",
    explication: [],
  },
];
