import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_NOMBRES_RELATIFS: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-02-exo-vocabulaire-base",
    notion: "ma-02",
    savoirFaire: ["oppose-valeur-absolue", "ensembles-nombres"],
    difficulte: 1,
    question:
      "a) Donner l'opposé de : +5 · −3 · 0 · −17\nb) Donner la valeur absolue de : +7 · −4 · −12 · 0\nc) Parmi +3 · −5 · 0 · −1 · 42 · −100, lesquels appartiennent à ℕ, lesquels à ℤ seulement ?",
    reponseType:
      "a) opposé de +5 = −5 · de −3 = +3 · de 0 = 0 · de −17 = +17\nb) |+7| = 7 · |−4| = 4 · |−12| = 12 · |0| = 0\nc) ℕ : +3, 0, 42 · ℤ seulement : −5, −1, −100. 0 appartient à ℕ et à ℤ ; les négatifs sont dans ℤ mais pas dans ℕ.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-02-exo-ordre-droite-graduee",
    notion: "ma-02",
    savoirFaire: ["comparer-relatifs"],
    difficulte: 1,
    question: "Ranger dans l'ordre croissant : +4, −6, +1, −2, 0, −10, +3.",
    reponseType: "−10 < −6 < −2 < 0 < +1 < +3 < +4",
    explication: [
      { type: "note", text: "−10 est plus petit que −6, même si 10 > 6 : vers la gauche de la droite, on diminue." },
    ],
  },
  {
    // TODO refonte exo
    id: "ma-02-exo-addition-soustraction",
    notion: "ma-02",
    savoirFaire: ["addition-soustraction"],
    difficulte: 1,
    question: "Calculer en montrant les étapes :\na) (−5) + (−3)   b) (+7) + (−10)   c) (−4) − (−6)   d) (+3) − (+8) − (−2)",
    reponseType:
      "a) même signe → −(5+3) = **−8**\nb) signes différents, |−10| > |+7| → −(10−7) = **−3**\nc) (−4) − (−6) = (−4) + (+6) = **+2**\nd) 3 − 8 + 2 = **−3**",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-02-exo-multiplication-division",
    notion: "ma-02",
    savoirFaire: ["multiplication-division"],
    difficulte: 1,
    question: "Calculer :\na) (−4) × (+3)   b) (−5) × (−6)   c) (−18) ÷ (+3)   d) (−24) ÷ (−4)",
    reponseType:
      "a) signes différents → **−12**\nb) même signe → **+30**\nc) signes différents → **−6**\nd) même signe → **+6**",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-02-exo-expression-priorites",
    notion: "ma-02",
    savoirFaire: ["priorites-signes", "multiplication-division", "addition-soustraction"],
    difficulte: 2,
    question: "Calculer en respectant les priorités :\na) 3 − 2 × (−4) + (−1)   b) (−2)² − 3 × (−1 + 5)   c) −3 × (−2 − 4) ÷ (−3)",
    reponseType:
      "a) 3 + 8 − 1 = **10**\nb) (−2)² − 3 × 4 = 4 − 12 = **−8**\nc) −3 × (−6) ÷ (−3) = 18 ÷ (−3) = **−6**",
    explication: [
      { type: "note", text: "En b), (−2)² = +4 (et non −4) : un carré est toujours positif ou nul." },
    ],
  },
  {
    // TODO refonte exo
    id: "ma-02-exo-temperatures",
    notion: "ma-02",
    savoirFaire: ["comparer-relatifs", "addition-soustraction"],
    difficulte: 2,
    enonce: "La température est de −8 °C à Moscou, +5 °C à Paris, +32 °C à Dubaï.",
    question:
      "a) Ranger ces villes de la plus froide à la plus chaude.\nb) Quel est l'écart de température entre Moscou et Paris ?\nc) À Moscou, la température baisse encore de 6 °C : quelle est la nouvelle température ?",
    reponseType:
      "a) Moscou (−8 °C) < Paris (+5 °C) < Dubaï (+32 °C)\nb) écart = +5 − (−8) = 5 + 8 = **13 °C**\nc) −8 − 6 = **−14 °C**",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-02-exo-raisonnement-signes",
    notion: "ma-02",
    savoirFaire: ["multiplication-division", "priorites-signes"],
    difficulte: 3,
    question:
      "a) Montrer que le produit de deux relatifs est positif si et seulement s'ils ont le même signe.\nb) Un élève affirme : « (−1)ⁿ est toujours égal à −1 ». Donner un contre-exemple et la règle générale.\nc) Sans calculer, déterminer le signe de (−2)¹⁰⁰ × (−3)⁵¹ × (+4)³.",
    reponseType:
      "a) Mêmes signes : (+|a|)(+|b|) = +|a||b| > 0, ou (−|a|)(−|b|) = +|a||b| > 0. Signes différents : (+|a|)(−|b|) = −|a||b| < 0. Le produit est donc positif exactement quand les signes sont égaux.\nb) Contre-exemple : (−1)² = +1 ≠ −1. Règle : (−1)ⁿ = +1 si n est pair, −1 si n est impair.\nc) (−2)¹⁰⁰ positif (100 pair), (−3)⁵¹ négatif (51 impair), (+4)³ positif. Produit : positif × négatif × positif = **négatif**.",
    explication: [],
  },
];
