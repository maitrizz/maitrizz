import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_PUISSANCES_RACINES_REELS: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-04-exo-carres-parfaits-racines",
    notion: "ma-04",
    savoirFaire: ["carres-parfaits", "simplifier-racine"],
    difficulte: 1,
    question:
      "a) Calculer sans calculatrice : √25 · √144 · √1 · √0\nb) Encadrer √50 entre deux entiers consécutifs.\nc) Vrai ou faux : « √16 = ±4 » ?",
    reponseType:
      "a) √25 = 5 · √144 = 12 · √1 = 1 · √0 = 0\nb) 7² = 49 < 50 < 64 = 8² → 7 < √50 < 8\nc) Faux : √16 = 4 uniquement (racine positive). Les solutions de x² = 16 sont 4 et −4, mais √16 = 4.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-04-exo-regles-puissances",
    notion: "ma-04",
    savoirFaire: ["regles-puissances"],
    difficulte: 1,
    question: "Calculer : a) 3² × 3³   b) 5⁴ ÷ 5²   c) (2³)²   d) 4⁰   e) 2⁻³",
    reponseType:
      "a) 3²⁺³ = 3⁵ = 243\nb) 5⁴⁻² = 5² = 25\nc) 2^(3×2) = 2⁶ = 64\nd) 4⁰ = 1\ne) 2⁻³ = 1/2³ = 1/8 = 0,125",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-04-exo-simplifier-puissances-racines",
    notion: "ma-04",
    savoirFaire: ["regles-puissances", "simplifier-racine"],
    difficulte: 1,
    question: "a) (3² × 3⁵) / 3⁴   b) √32   c) √(3/4) × √12   d) (√5 − √5) + (√3)²   e) 2⁻² × 4³",
    reponseType:
      "a) 3⁷ / 3⁴ = 3³ = 27\nb) √32 = √(16×2) = 4√2\nc) √(3/4 × 12) = √9 = 3\nd) 0 + 3 = 3\ne) 2⁻² × (2²)³ = 2⁻² × 2⁶ = 2⁴ = 16",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-04-exo-encadrements-precision",
    notion: "ma-04",
    savoirFaire: ["encadrer-irrationnel", "simplifier-racine"],
    difficulte: 2,
    question:
      "a) Encadrer √5 à 0,1 près et donner l'arrondi au dixième.\nb) La diagonale d'un carré de côté 3 cm vaut 3√2 : l'encadrer à 0,01 cm près.\nc) Simplifier a = √3 + √12. Est-ce un irrationnel ?",
    reponseType:
      "a) 2,2² = 4,84 < 5 et 2,3² = 5,29 > 5 → 2,2 < √5 < 2,3. Arrondi : 2,2.\nb) 1,41 < √2 < 1,42 → 4,23 < 3√2 < 4,26 cm.\nc) √12 = 2√3, donc a = √3 + 2√3 = 3√3, irrationnel (rationnel non nul × irrationnel).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-04-exo-vrai-faux-justifies",
    notion: "ma-04",
    savoirFaire: ["ensembles-nombres", "regles-puissances"],
    difficulte: 2,
    question: "Vrai ou faux, en justifiant :\nA. √(4 + 9) = √4 + √9\nB. (√7)² = 7\nC. Tout irrationnel est un réel.\nD. 2⁻³ > 2⁻⁵",
    reponseType:
      "A. Faux : √13 ≈ 3,6, alors que √4 + √9 = 5. √(a+b) ≠ √a + √b.\nB. Vrai : (√a)² = a pour a ≥ 0.\nC. Vrai : ℝ = ℚ ∪ (irrationnels), tout irrationnel est dans ℝ.\nD. Vrai : 2⁻³ = 1/8 et 2⁻⁵ = 1/32, or 1/8 > 1/32.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-04-exo-irrationalite-absurde",
    notion: "ma-04",
    savoirFaire: ["justifier-irrationalite"],
    difficulte: 3,
    enonce:
      "Cet exercice mobilise le raisonnement par l'absurde. Il n'est pas indispensable, mais distingue les meilleures copies.",
    question:
      "a) Montrer que √3 est irrationnel.\nb) Sachant que √2 est irrationnel, montrer que 1 + √2 l'est aussi.\nc) √2 × √8 est-il irrationnel ?",
    reponseType:
      "a) Supposons √3 = p/q irréductible. Alors p² = 3q², donc 3 | p², donc 3 | p. En posant p = 3k : q² = 3k², donc 3 | q. Contradiction avec PGCD(p, q) = 1.\nb) Si 1 + √2 = p/q rationnel, alors √2 = p/q − 1 serait rationnel : contradiction. Donc 1 + √2 est irrationnel.\nc) √2 × √8 = √16 = 4, un entier (donc rationnel). Le produit de deux irrationnels peut être rationnel : un contre-exemple que le jury valorise.",
    explication: [],
  },
];
