import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_DIVISIBILITE_PGCD_PPCM: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-06-exo-criteres-divisibilite",
    notion: "ma-06",
    savoirFaire: ["criteres-divisibilite"],
    difficulte: 1,
    enonce: "Un primeur reçoit une caisse de 756 fruits et veut les répartir en barquettes identiques, sans reste.",
    question:
      "a) Sans poser de division, dire si 756 est divisible par 2, 3, 4, 9. Justifier par les critères.\nb) Des barquettes de 12 fruits, est-ce possible ? Combien ?\nc) Lister tous les diviseurs de 12.",
    reponseType:
      "a) unités = 6 (pair) → par 2 ✓ ; 7+5+6 = 18 div. par 3 → par 3 ✓ ; 56 = 14 × 4 → par 4 ✓ ; 18 = 2 × 9 → par 9 ✓.\nb) 756 ÷ 12 = 63 (exact, car 63 × 12 = 756). Oui, 63 barquettes.\nc) 12 = 2² × 3, nombre de diviseurs = (2+1)(1+1) = 6 : 1, 2, 3, 4, 6, 12.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-06-exo-nombres-premiers",
    notion: "ma-06",
    savoirFaire: ["tester-primalite"],
    difficulte: 1,
    question:
      "a) Parmi 91, 97, 101, 111, lesquels sont premiers ? Détailler.\nb) Pourquoi 2 est-il le seul premier pair ?\nc) Corriger un élève qui dit « 1 est premier car il n'est divisible que par 1 ».",
    reponseType:
      "a) 91 = 7 × 13 → non premier ; 97 premier (tester 2, 3, 5, 7 ≤ √97) ; 101 premier (tester 2, 3, 5, 7) ; 111 = 3 × 37 → non premier.\nb) Tout pair autre que 2 a au moins trois diviseurs (1, 2, lui-même), donc n'est pas premier. Seul 2 reste premier.\nc) Un premier a exactement deux diviseurs distincts. 1 n'en a qu'un (lui-même), il est donc exclu, ce qui assure l'unicité de la décomposition.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-06-exo-carreaux-faience",
    notion: "ma-06",
    savoirFaire: ["pgcd", "decomposer"],
    difficulte: 1,
    enonce: "Un artisan carrele un mur de 252 cm sur 168 cm avec des carreaux carrés identiques, sans découpe, les plus grands possible.",
    question:
      "a) Pourquoi la taille du carreau doit-elle diviser 252 et 168 ? Quelle notion cherche-t-on ?\nb) Calculer PGCD(252, 168) par Euclide. Taille maximale ?\nc) Combien de carreaux en largeur, en hauteur, au total ?\nd) Vérifier le PGCD par décomposition.",
    reponseType:
      "a) Pour s'ajuster sans découpe, le côté doit diviser 252 et 168 ; le plus grand possible est le PGCD.\nb) 252 = 168 × 1 + 84 ; 168 = 84 × 2 + 0. PGCD = 84. Carreaux de 84 cm × 84 cm.\nc) Largeur : 252 ÷ 84 = 3 ; hauteur : 168 ÷ 84 = 2 ; total : 3 × 2 = 6 carreaux.\nd) 252 = 2² × 3² × 7, 168 = 2³ × 3 × 7 → facteurs communs 2² × 3 × 7 = 84 ✓.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-06-exo-fraction-irreductible",
    notion: "ma-06",
    savoirFaire: ["pgcd", "premiers-entre-eux"],
    difficulte: 1,
    enonce: "Une recette utilise 330 g de farine et 462 g de sucre.",
    question:
      "a) Calculer PGCD(330, 462) par Euclide.\nb) Rendre la fraction 330/462 irréductible et l'interpréter.\nc) 330 et 462 sont-ils premiers entre eux ?",
    reponseType:
      "a) 462 = 330 × 1 + 132 ; 330 = 132 × 2 + 66 ; 132 = 66 × 2 + 0. PGCD = 66.\nb) 330 ÷ 66 = 5, 462 ÷ 66 = 7 → 5/7. Pour 5 parts de farine, 7 parts de sucre.\nc) Non : PGCD = 66 ≠ 1. On peut réduire les proportions (5 et 7) tout en gardant le rapport.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-06-exo-sonneries-cloches",
    notion: "ma-06",
    savoirFaire: ["ppcm", "decomposer"],
    difficulte: 2,
    enonce: "La cloche de l'église sonne toutes les 20 minutes, celle de la mairie toutes les 36 minutes. Les deux sonnent ensemble à 8h00.",
    question:
      "a) À quelle heure sonneront-elles de nouveau ensemble ?\nb) Calculer PGCD(20, 36) et PPCM(20, 36) par décomposition, et vérifier avec PGCD × PPCM = a × b.\nc) Entre 8h00 et 20h00 (720 min), combien de fois sonnent-elles ensemble ?",
    reponseType:
      "a) 20 = 2² × 5, 36 = 2² × 3². PPCM = 2² × 3² × 5 = 180 min = 3 h → de nouveau ensemble à 11h00.\nb) PGCD = 2² = 4. Vérification : 4 × 180 = 720 = 20 × 36 ✓.\nc) Toutes les 180 min ; 720 ÷ 180 = 4, soit 5 fois en comptant 8h00 (8h, 11h, 14h, 17h, 20h).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-06-exo-tournoi-sportif",
    notion: "ma-06",
    savoirFaire: ["pgcd", "ppcm"],
    difficulte: 3,
    enonce: "Une association répartit 120 garçons et 96 filles en équipes mixtes identiques (même nombre de garçons et de filles par équipe), en formant le maximum d'équipes.",
    question:
      "a) Pourquoi le nombre d'équipes est-il un diviseur commun de 120 et 96, et pourquoi le plus grand ?\nb) Calculer PGCD(120, 96) par Euclide.\nc) Combien d'équipes ? Combien de garçons et de filles par équipe ?\nd) Décomposer 120 et 96, puis calculer le PPCM. Donner un contexte sportif où il interviendrait.",
    reponseType:
      "a) n équipes répartissent 120 et 96 en parts égales, donc n divise les deux. On cherche le maximum : le PGCD.\nb) 120 = 96 × 1 + 24 ; 96 = 24 × 4 + 0. PGCD = 24.\nc) 24 équipes, 120 ÷ 24 = 5 garçons et 96 ÷ 24 = 4 filles par équipe.\nd) 120 = 2³ × 3 × 5, 96 = 2⁵ × 3 → PPCM = 2⁵ × 3 × 5 = 480. Exemple : si A joue toutes les 120 min et B toutes les 96 min, elles joueront ensemble après 480 min (8 h).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-06-exo-colliers-perles",
    notion: "ma-06",
    savoirFaire: ["pgcd", "decomposer"],
    difficulte: 3,
    enonce: "Une enseignante a 210 perles rouges et 315 perles bleues. Elle veut des colliers identiques utilisant toutes les perles, avec le plus grand nombre de perles par collier.",
    question:
      "a) Décomposer 210 et 315, puis calculer PGCD(210, 315). Combien de colliers ? Contenu de chacun ?\nb) Vérifier par Euclide.\nc) Quels obstacles pour des élèves de CE2, et comment les aider sans introduire le PGCD formel ?",
    reponseType:
      "a) 210 = 2 × 3 × 5 × 7, 315 = 3² × 5 × 7 → communs 3 × 5 × 7 = 105. 105 colliers de 2 rouges et 3 bleues (210 ÷ 105 = 2, 315 ÷ 105 = 3).\nb) 315 = 210 × 1 + 105 ; 210 = 105 × 2 + 0 → PGCD = 105 ✓.\nc) Obstacles : la divisibilité n'est pas formalisée au CE2, et trouver le maximum de colliers ne va pas de soi. Aide : commencer avec de petits nombres (6 rouges, 9 bleues), manipuler des jetons, puis généraliser. La manipulation construit le sens « multiple/diviseur » avant les mots.",
    explication: [],
  },
];
