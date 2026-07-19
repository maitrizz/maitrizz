import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_TRIGONOMETRIE_TRIANGLE_RECTANGLE: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-23-exo-longueurs-angle",
    notion: "ma-23",
    savoirFaire: ["calcul-longueur", "definitions"],
    difficulte: 1,
    enonce: "Triangle ABC rectangle en B. Angle en A = 40°, AB = 8 cm.",
    question: "a) Calculer BC (opposé à l'angle en A).\nb) Calculer AC (hypoténuse).\nc) Vérifier avec Pythagore.",
    reponseType:
      "a) tan 40° = BC/AB → BC = 8 × tan 40° ≈ 6,71 cm.\nb) cos 40° = AB/AC → AC = 8/cos 40° ≈ 10,44 cm.\nc) AB² + BC² ≈ 64 + 45,0 ≈ 109,0 ≈ AC² ✓.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-23-exo-valeurs-remarquables",
    notion: "ma-23",
    savoirFaire: ["valeurs-remarquables"],
    difficulte: 1,
    question:
      "a) Hypoténuse 6 cm, un angle aigu 30°. Calculer les deux côtés de l'angle droit (valeurs exactes).\nb) Triangle rectangle isocèle, côté de l'angle droit 5 cm. Calculer l'hypoténuse (valeur exacte).",
    reponseType:
      "a) Opposé à 30° = 6 × sin 30° = 6 × 1/2 = 3 cm. Adjacent = 6 × cos 30° = 6 × √3/2 = 3√3 cm.\nb) Angles 45°-45°-90° : hyp = côté × √2 = 5√2 ≈ 7,07 cm.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-23-exo-rampe-acces",
    notion: "ma-23",
    savoirFaire: ["hauteur-pente", "calcul-angle"],
    difficulte: 1,
    enonce: "Une rampe d'accès doit respecter une pente maximale de 5 % et surmonter une marche de 20 cm de hauteur.",
    question: "a) Calculer l'angle d'inclinaison correspondant à 5 % (pente = hauteur/longueur horizontale).\nb) Calculer la longueur horizontale minimale.\nc) Calculer la longueur de la rampe (hypoténuse).",
    reponseType:
      "a) tan α = 5/100 = 0,05 → α = arctan(0,05) ≈ 2,86°.\nb) tan α = h/d → d = h/tan α = 20/0,05 = 400 cm = 4 m.\nc) hyp = √(400² + 20²) = √160 400 ≈ 400,5 cm (soit ≈ 4 m).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-23-exo-identite-triplet",
    notion: "ma-23",
    savoirFaire: ["valeurs-remarquables", "calcul-angle"],
    difficulte: 1,
    enonce: "α est un angle aigu d'un triangle rectangle, avec tan α = 3/4.",
    question: "a) En déduire sin α et cos α sans calculatrice.\nb) Calculer α en degrés.",
    reponseType:
      "a) tan α = 3/4 → opposé 3, adjacent 4, hypoténuse 5 (triplet 3-4-5). sin α = 3/5, cos α = 4/5 (vérif. : 9/25 + 16/25 = 1 ✓).\nb) α = arctan(3/4) = arctan(0,75) ≈ 36,9°.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-23-exo-tour-chateau",
    notion: "ma-23",
    savoirFaire: ["hauteur-pente"],
    difficulte: 2,
    enonce: "Pour estimer la hauteur d'une tour, un enseignant se place à 40 m de la base et mesure l'angle de visée du sommet à 52°. Ses yeux sont à 1,65 m du sol.",
    question: "a) Calculer la hauteur h de la tour au-dessus de ses yeux.\nb) En déduire la hauteur totale de la tour.\nc) À quelle distance devrait-il se placer pour que l'angle de visée soit 45° ?",
    reponseType:
      "a) tan 52° = h/40 → h = 40 × tan 52° ≈ 51,20 m.\nb) Hauteur totale ≈ 51,20 + 1,65 ≈ 52,85 m.\nc) tan 45° = 1, donc d = h = 51,20 m : il faut se placer à environ 51,2 m de la base.",
    explication: [],
  },
];
