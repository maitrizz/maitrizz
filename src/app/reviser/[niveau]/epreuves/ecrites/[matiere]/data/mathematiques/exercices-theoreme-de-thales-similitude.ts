import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_THEOREME_DE_THALES_SIMILITUDE: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-22-exo-calculer-longueurs",
    notion: "ma-22",
    savoirFaire: ["calculer-longueur"],
    difficulte: 1,
    enonce: "Dans un triangle, S est le sommet. Sur la sécante 1 : SA = 4, SB = 10. Sur la sécante 2 : SA' = 6. (AA') ∥ (BB').",
    question: "a) Calculer SB'.\nb) Calculer AA' sachant que BB' = 15.",
    reponseType:
      "a) SA/SB = SA'/SB' → 4/10 = 6/SB' → SB' = 6 × 10/4 = 15.\nb) SA/SB = AA'/BB' → 4/10 = AA'/15 → AA' = 15 × 4/10 = 6.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-22-exo-configuration-papillon",
    notion: "ma-22",
    savoirFaire: ["calculer-longueur"],
    difficulte: 1,
    enonce: "Deux droites se croisent en S. Sur la première : A à 3 cm de S, B à 9 cm de S de l'autre côté. Sur la deuxième : A' à 4 cm de S, B' à 12 cm de S de l'autre côté. (AA') ∥ (BB').",
    question: "Vérifier par le calcul que Thalès s'applique bien ici, et nommer la configuration.",
    reponseType:
      "S est entre A et B, et entre A' et B' : c'est la configuration papillon.\nSA/SB = 3/9 = 1/3 et SA'/SB' = 4/12 = 1/3 : les rapports sont égaux, Thalès est bien vérifié.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-22-exo-droites-paralleles",
    notion: "ma-22",
    savoirFaire: ["reciproque"],
    difficulte: 1,
    enonce: "Sur la sécante 1 : S, M, N avec SM = 3, SN = 9. Sur la sécante 2 : S, M', N' avec SM' = 5, SN' = 15.",
    question: "Montrer que (MM') ∥ (NN'). Préciser la configuration et la version du théorème utilisée.",
    reponseType:
      "Configuration triangle (S, M, N dans cet ordre ; S, M', N' dans cet ordre).\nSM/SN = 3/9 = 1/3 et SM'/SN' = 5/15 = 1/3 : les rapports sont égaux.\nD'après la réciproque du théorème de Thalès, (MM') ∥ (NN').",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-22-exo-similitude-coefficient",
    notion: "ma-22",
    savoirFaire: ["coefficient", "similitude"],
    difficulte: 1,
    enonce: "△ABC et △DEF sont semblables, avec AB = 5, DE = 8 et Aire(ABC) = 25 cm².",
    question: "a) Calculer le coefficient de similitude k de △ABC vers △DEF.\nb) Calculer l'aire de △DEF.",
    reponseType:
      "a) k = DE/AB = 8/5 = 1,6.\nb) Aire(DEF) = k² × Aire(ABC) = 1,6² × 25 = 2,56 × 25 = 64 cm².",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-22-exo-homothetie",
    notion: "ma-22",
    savoirFaire: ["homothetie"],
    difficulte: 2,
    enonce: "Sur une demi-droite issue de O, on place A tel que OA = 3 cm. On applique l'homothétie de centre O et de rapport k = 2,5.",
    question: "a) Où se trouve l'image A' de A ?\nb) Un segment [AB] mesure 4 cm. Quelle est la longueur de son image [A'B'] ? Que peut-on dire des directions de (AB) et (A'B') ?",
    reponseType:
      "a) OA' = k × OA = 2,5 × 3 = 7,5 cm, sur la même demi-droite que A (car k > 0).\nb) A'B' = k × AB = 2,5 × 4 = 10 cm. Une droite et son image par une homothétie sont parallèles : (AB) ∥ (A'B').",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-22-exo-triangles-semblables-rectangle",
    notion: "ma-22",
    savoirFaire: ["similitude"],
    difficulte: 2,
    enonce: "△ABC est rectangle en C. H est le pied de la hauteur issue de C.",
    question: "a) Montrer que △ACH et △ABC sont semblables.\nb) En déduire une relation entre AC, AH et AB.",
    reponseType:
      "a) Les deux triangles partagent l'angle en A, et ont chacun un angle droit (en H pour ACH, en C pour ABC). Par le critère AA, ils sont semblables.\nb) Côtés homologues proportionnels : AC/AB = AH/AC, d'où AC² = AH × AB.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-22-exo-maquette-ecole",
    notion: "ma-22",
    savoirFaire: ["coefficient", "calculer-longueur"],
    difficulte: 3,
    enonce: "Un architecte réalise la maquette d'une école à l'échelle 1/50. Sur la maquette, une salle de classe mesure 12 cm × 9 cm, et une fenêtre a une surface de 4 cm².",
    question: "a) Calculer les dimensions réelles de la salle de classe.\nb) Calculer la surface réelle de la fenêtre.\nc) Sur le plan, une allée est tracée. Deux droites parallèles à cette allée coupent deux sécantes issues d'un point S. Sur la sécante 1 : SM = 6 cm, SN = 10 cm. Sur la sécante 2 : SM' = 9 cm. Calculer SN'.",
    reponseType:
      "a) Le passage maquette → réalité multiplie les longueurs par 50 : 12 × 50 = 600 cm = 6 m et 9 × 50 = 450 cm = 4,5 m.\nb) Les aires sont multipliées par 50² = 2 500 : 4 × 2 500 = 10 000 cm² = 1 m².\nc) Par Thalès : SM/SN = SM'/SN' → 6/10 = 9/SN' → SN' = 9 × 10/6 = 15 cm.",
    explication: [],
  },
];
