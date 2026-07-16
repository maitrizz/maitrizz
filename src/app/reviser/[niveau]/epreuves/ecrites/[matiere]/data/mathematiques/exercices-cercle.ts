import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_CERCLE: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-20-exo-vocabulaire-calculs",
    notion: "ma-20",
    savoirFaire: ["vocabulaire-formules", "mediatrice-corde"],
    difficulte: 1,
    enonce: "Un cercle a un rayon de 7 cm. Un point A est à 10 cm du centre O.",
    question: "a) A est-il à l'intérieur, sur, ou à l'extérieur du cercle ?\nb) Calculer le périmètre du cercle et l'aire du disque.\nc) Une corde [BC] a son milieu à 3 cm du centre : calculer BC.",
    reponseType:
      "a) OA = 10 > r = 7 : A est à l'extérieur.\nb) Périmètre = 2π × 7 ≈ 43,98 cm ; aire = π × 7² ≈ 153,94 cm².\nc) La médiatrice de [BC] passe par O, donc OM ⊥ BC. OB² = OM² + MB² → 49 = 9 + MB² → MB = √40, BC = 2√40 = 4√10 ≈ 12,65 cm.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-20-exo-tangente",
    notion: "ma-20",
    savoirFaire: ["tangente"],
    difficulte: 1,
    enonce: "Cercle de centre O, rayon 5 cm, tangent en T à une droite d. A est sur d, à 12 cm de T.",
    question: "a) Justifier que le triangle OTA est rectangle en T.\nb) Calculer OA.",
    reponseType:
      "a) La tangente est perpendiculaire au rayon au point de contact : OT ⊥ d, donc OTA est rectangle en T.\nb) OA² = OT² + AT² = 25 + 144 = 169 → OA = 13 cm.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-20-exo-angle-inscrit-arcs",
    notion: "ma-20",
    savoirFaire: ["angle-inscrit"],
    difficulte: 1,
    enonce: "Dans un cercle de centre O, l'angle au centre AOB vaut 110°.",
    question: "a) Angle inscrit AMB si M est sur l'arc majeur ?\nb) Angle AMB si M est sur l'arc mineur ?\nc) Deux points M et N sont sur l'arc majeur : que dire de AMB et ANB ?",
    reponseType:
      "a) 110° ÷ 2 = 55°.\nb) Supplémentaire : 180° − 55° = 125°.\nc) Ils interceptent le même arc : AMB = ANB = 55° (angles inscrits dans le même arc égaux).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-20-exo-triangle-rectangle-inscrit",
    notion: "ma-20",
    savoirFaire: ["inscrit-circonscrit"],
    difficulte: 1,
    enonce: "On donne A(1 ; 0), B(5 ; 0), C(5 ; 4).",
    question: "a) Vérifier que le triangle ABC est rectangle et préciser en quel sommet.\nb) Centre et rayon du cercle circonscrit.\nc) Vérifier que A est sur ce cercle.",
    reponseType:
      "a) AB² = 16, BC² = 16, AC² = 32 ; 16 + 16 = 32 → rectangle en B.\nb) Rectangle en B → diamètre [AC]. Centre = milieu [AC] = (3 ; 2) ; rayon = √32 ÷ 2 = 2√2 ≈ 2,83.\nc) Distance A → centre : √[(3 − 1)² + (2 − 0)²] = √8 = 2√2 = rayon ✓.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-20-exo-piste-circulaire",
    notion: "ma-20",
    savoirFaire: ["arc-secteur", "vocabulaire-formules"],
    difficulte: 2,
    enonce: "Une piste circulaire a un rayon de 4 m. Trois plots B, A, C sont placés, [BC] étant un diamètre, et l'angle au centre BOA vaut 100°.",
    question: "a) Périmètre complet de la piste.\nb) Longueur de [BC].\nc) Longueur de l'arc de 100° (l'arc BA).",
    reponseType:
      "a) 2π × 4 ≈ 25,13 m.\nb) BC = 2r = 8 m (diamètre).\nc) (100 ÷ 360) × 2π × 4 = (5/18) × 8π ≈ 6,98 m.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-20-exo-roue-cour",
    notion: "ma-20",
    savoirFaire: ["angle-inscrit", "inscrit-circonscrit"],
    difficulte: 3,
    enonce: "Une roue de centre O et de rayon 30 cm porte un triangle équilatéral ABC inscrit (sommets sur le cercle). L'angle au centre AOB vaut 120°.",
    question:
      "a) Justifier que les trois angles au centre valent 120°.\nb) En déduire l'angle inscrit ACB.\nc) Calculer la longueur du côté AB (triangle isocèle OAB, OA = OB = 30, angle 120°).\nd) Comparer le périmètre du triangle à celui du cercle.",
    reponseType:
      "a) Triangle équilatéral → trois arcs égaux → trois angles au centre égaux, de somme 360°, donc 120° chacun.\nb) Angle inscrit ACB = 120° ÷ 2 = 60° (cohérent avec un triangle équilatéral).\nc) La médiatrice de [AB] passe par O, angle AOM = 60°. AM = 30 × sin(60°) = 15√3, donc AB = 30√3 ≈ 51,96 cm.\nd) Triangle : 3 × 30√3 = 90√3 ≈ 155,9 cm ; cercle : 2π × 30 ≈ 188,5 cm. Le triangle fait environ 83 % du cercle.",
    explication: [],
  },
];
