import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_DROITES_ANGLES_PARALLELISME: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-18-exo-angles-figures",
    notion: "ma-18",
    savoirFaire: ["somme-triangle", "somme-polygone"],
    difficulte: 1,
    question: "a) Un triangle isocèle a un angle au sommet de 40° : les deux angles à la base ?\nb) Chaque angle d'un hexagone régulier ?\nc) Un quadrilatère a trois angles de 85°, 110°, 95° : le quatrième ?",
    reponseType:
      "a) 180° − 40° = 140°, partagés en deux angles égaux : 70° chacun.\nb) (6 − 2) × 180° = 720° ; 720° ÷ 6 = 120°.\nc) 360° − 85° − 110° − 95° = 70°.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-18-exo-complementaires-supplementaires",
    notion: "ma-18",
    savoirFaire: ["types-angles"],
    difficulte: 1,
    question: "a) Complément de 37° ?\nb) Supplément de 112° ?\nc) Deux angles supplémentaires dans le rapport 2 : 3 : leurs mesures ?",
    reponseType:
      "a) 90° − 37° = 53°.\nb) 180° − 112° = 68°.\nc) 2x + 3x = 180° → x = 36° : les angles valent 72° et 108°.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-18-exo-configuration-paralleles",
    notion: "ma-18",
    savoirFaire: ["angles-paralleles"],
    difficulte: 1,
    enonce: "Deux droites parallèles d₁ et d₂ sont coupées par une sécante. Un angle formé avec d₁ mesure 55°.",
    question: "a) Trouver les 4 angles à l'intersection avec d₁.\nb) En déduire les angles à l'intersection avec d₂.\nc) Vérifier que les co-internes sont supplémentaires.",
    reponseType:
      "a) 55° et son opposé 55° ; les adjacents 125° et 125°.\nb) Mêmes valeurs à d₂ (alternes-internes et correspondants égaux) : 55°, 125°, 55°, 125°.\nc) Co-internes : 55° + 125° = 180° ✓.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-18-exo-somme-par-paralleles",
    notion: "ma-18",
    savoirFaire: ["angles-paralleles", "somme-triangle"],
    difficulte: 1,
    enonce: "Dans un triangle ABC, on trace par A une droite parallèle à (BC).",
    question: "a) Quels angles alternes-internes apparaissent ?\nb) En déduire la somme des angles du triangle.\nc) Si l'angle en B vaut 55° et l'angle en A vaut 70°, calculer l'angle en C.",
    reponseType:
      "a) La parallèle coupée par (AB) et (AC) crée des alternes-internes égaux aux angles en B et en C.\nb) Les trois angles en A forment un angle plat (180°), égaux aux trois angles du triangle : somme = 180°.\nc) Angle en C = 180° − 55° − 70° = 55°.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-18-exo-pentagone-inconnue",
    notion: "ma-18",
    savoirFaire: ["somme-polygone"],
    difficulte: 2,
    enonce: "Un pentagone convexe ABCDE a : angle A = 2 × angle B, angle C = 90°, angle D = 110°, angle E = angle B + 20°.",
    question: "a) Somme des angles du pentagone ?\nb) Exprimer tous les angles en fonction de l'angle B.\nc) Calculer chaque angle.\nd) Le pentagone peut-il être régulier ?",
    reponseType:
      "a) (5 − 2) × 180° = 540°.\nb) A = 2B, C = 90°, D = 110°, E = B + 20°.\nc) 2B + B + 90° + 110° + (B + 20°) = 540° → 4B + 220° = 540° → B = 80°. Donc A = 160°, B = 80°, C = 90°, D = 110°, E = 100°.\nd) Non : un pentagone régulier a tous ses angles à 108°, ce qui n'est pas le cas.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-18-exo-equidistance-mediatrice",
    notion: "ma-18",
    savoirFaire: ["mediatrice"],
    difficulte: 3,
    enonce: "Trois maisons A, B et C ne sont pas alignées. On veut placer un puits P équidistant des trois.",
    question: "a) Que doit vérifier P par rapport à A et B ? À B et C ?\nb) Comment construire P géométriquement ?\nc) Ce point existe-t-il toujours ?",
    reponseType:
      "a) PA = PB (P sur la médiatrice de [AB]) et PB = PC (P sur la médiatrice de [BC]).\nb) P est l'intersection des médiatrices de [AB] et [BC] (centre du cercle circonscrit au triangle ABC).\nc) Oui, dès que A, B, C ne sont pas alignés : les deux médiatrices se coupent en un point unique.",
    explication: [],
  },
];
