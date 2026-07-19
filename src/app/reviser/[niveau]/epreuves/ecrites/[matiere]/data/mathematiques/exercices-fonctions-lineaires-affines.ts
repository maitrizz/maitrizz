import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_FONCTIONS_LINEAIRES_AFFINES: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-14-exo-images-antecedents",
    notion: "ma-14",
    savoirFaire: ["image-antecedent"],
    difficulte: 1,
    enonce: "Soit f(x) = 3x − 5 et g(x) = 2x + 4.",
    question: "a) Calculer f(0), f(2), f(−1).\nb) Trouver l'antécédent de 0 par g.\nc) Trouver l'antécédent de 10 par g.",
    reponseType:
      "a) f(0) = −5 ; f(2) = 1 ; f(−1) = −8.\nb) 2x + 4 = 0 → x = −2 (vérif : g(−2) = 0).\nc) 2x + 4 = 10 → 2x = 6 → x = 3 (vérif : g(3) = 10).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-14-exo-tableau-valeurs",
    notion: "ma-14",
    savoirFaire: ["lecture-graphique", "image-antecedent"],
    difficulte: 1,
    enonce: "Soit h(x) = x² − 3x.",
    question: "a) Compléter le tableau pour x ∈ {−1 ; 0 ; 1 ; 2 ; 3 ; 4}.\nb) Pour quels x du tableau h(x) = 0 ? Que représentent ces x ?",
    reponseType:
      "a) h(−1) = 4 ; h(0) = 0 ; h(1) = −2 ; h(2) = −2 ; h(3) = 0 ; h(4) = 4.\nb) h(x) = 0 pour x = 0 et x = 3 : ce sont les antécédents de 0 (la courbe coupe l'axe des abscisses).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-14-exo-identifier-calculer",
    notion: "ma-14",
    savoirFaire: ["lineaire-affine", "image-antecedent"],
    difficulte: 1,
    enonce: "Soit f(x) = 3x − 2 et g(x) = −x + 5.",
    question: "a) Donner a, b et le type de chaque fonction.\nb) Calculer f(0), f(2), f(−1).\nc) Pour quels x a-t-on f(x) = 0 ? g(x) = 0 ?",
    reponseType:
      "a) f : a = 3, b = −2, affine ; g : a = −1, b = 5, affine.\nb) f(0) = −2 ; f(2) = 4 ; f(−1) = −5.\nc) f(x) = 0 : x = 2/3 ; g(x) = 0 : x = 5 (intersection avec l'axe des abscisses).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-14-exo-expression-deux-points",
    notion: "ma-14",
    savoirFaire: ["tracer", "lecture-graphique"],
    difficulte: 1,
    enonce: "Une droite passe par A(0 ; −1) et B(2 ; 5).",
    question: "a) Lire b directement.\nb) Calculer a.\nc) Écrire f(x) et vérifier avec B.",
    reponseType:
      "a) A(0 ; −1) → b = −1.\nb) a = (5 − (−1)) ÷ (2 − 0) = 6 ÷ 2 = 3.\nc) f(x) = 3x − 1 ; f(2) = 5 ✓.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-14-exo-facture-chauffagiste",
    notion: "ma-14",
    savoirFaire: ["lineaire-affine", "image-antecedent"],
    difficulte: 2,
    enonce: "Un chauffagiste facture 50 € de déplacement et 45 € par heure. On note f(x) le coût pour x heures.",
    question: "a) Écrire f(x).\nb) Calculer f(2) et interpréter.\nc) Pour quelle durée la facture est-elle de 230 € ?\nd) f est-elle linéaire ? Pourquoi ?",
    reponseType:
      "a) f(x) = 45x + 50.\nb) f(2) = 140 € : 2 heures de travail coûtent 140 €.\nc) 45x + 50 = 230 → 45x = 180 → x = 4 heures.\nd) Non : f(0) = 50 ≠ 0, la droite ne passe pas par l'origine. C'est affine.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-14-exo-comparer-forfaits",
    notion: "ma-14",
    savoirFaire: ["intersection", "proportionnalite-lien"],
    difficulte: 2,
    enonce: "Forfait A : 15 € par mois. Forfait B : 8 € d'abonnement fixe + 10 € par mois. On note x le nombre de mois.",
    question: "a) Modéliser le coût de chaque forfait.\nb) À partir de combien de mois B est-il moins cher ?\nc) Pour 12 mois, quel forfait est le moins cher, et de combien ?",
    reponseType:
      "a) A(x) = 15x (linéaire) ; B(x) = 10x + 8 (affine).\nb) 15x = 10x + 8 → 5x = 8 → x = 1,6. À partir du 2e mois, B est moins cher.\nc) A(12) = 180 € ; B(12) = 128 €. B est moins cher de 52 €.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-14-exo-lineaire-affine-proportionnalite",
    notion: "ma-14",
    savoirFaire: ["proportionnalite-lien", "intersection"],
    difficulte: 3,
    enonce: "On considère f(x) = 2,5x (location de vélo sans frais) et g(x) = 2x + 5 (avec adhésion).",
    question:
      "a) Laquelle modélise une proportionnalité ? Justifier.\nb) Calculer le coût de chacune pour 10 unités.\nc) Trouver le point d'intersection et l'interpréter.",
    reponseType:
      "a) f : f(0) = 0, droite par l'origine → proportionnalité (k = 2,5). g : g(0) = 5 ≠ 0 → non proportionnelle.\nb) f(10) = 25 € ; g(10) = 25 €.\nc) 2,5x = 2x + 5 → 0,5x = 5 → x = 10, y = 25. Intersection (10 ; 25) : au-delà de 10 unités, g (avec adhésion) devient plus avantageuse.",
    explication: [],
  },
];
