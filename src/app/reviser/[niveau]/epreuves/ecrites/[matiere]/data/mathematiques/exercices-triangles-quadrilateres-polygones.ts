import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_TRIANGLES_QUADRILATERES_POLYGONES: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-19-exo-inegalite-triangulaire",
    notion: "ma-19",
    savoirFaire: ["inegalite-classer"],
    difficulte: 1,
    question:
      "Pour chaque triplet (cm), dire si un triangle existe, et préciser son type selon les côtés :\na) 3, 5, 7\nb) 4, 4, 9\nc) 6, 6, 6\nd) 1, 10, 10",
    reponseType:
      "a) 7 < 3 + 5 = 8 ✓ : possible, scalène.\nb) 9 < 4 + 4 = 8 ? non : impossible.\nc) 6 < 12 ✓ : possible, équilatéral.\nd) 10 < 1 + 10 = 11 ✓ : possible, isocèle.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-19-exo-angles-triangles",
    notion: "ma-19",
    savoirFaire: ["angles-triangle"],
    difficulte: 1,
    question: "Calculer les angles manquants :\na) angle A = 55°, angle B = 75°\nb) isocèle de sommet A, angle B = 35°\nc) rectangle en C, angle A = 27°",
    reponseType:
      "a) angle C = 180° − 55° − 75° = 50°.\nb) angle C = angle B = 35°, donc angle A = 180° − 70° = 110° (obtusangle).\nc) angle B = 180° − 90° − 27° = 63°.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-19-exo-reconnaitre-figure",
    notion: "ma-19",
    savoirFaire: ["quadrilateres"],
    difficulte: 1,
    question:
      "Quelle figure obtient-on dans chaque cas ?\na) Parallélogramme dont les diagonales sont égales.\nb) Parallélogramme dont les diagonales sont perpendiculaires.\nc) Parallélogramme dont les diagonales sont égales et perpendiculaires.\nd) Quadrilatère avec une seule paire de côtés parallèles.",
    reponseType: "a) Rectangle.\nb) Losange.\nc) Carré.\nd) Trapèze.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-19-exo-polygones-reguliers",
    notion: "ma-19",
    savoirFaire: ["polygones-reguliers"],
    difficulte: 1,
    question: "a) Angle intérieur d'un octogone régulier ?\nb) Angle extérieur d'un hexagone régulier ?\nc) Pourquoi le pentagone régulier ne pave-t-il pas le plan ?",
    reponseType:
      "a) (8 − 2) × 180° ÷ 8 = 1 080° ÷ 8 = 135°.\nb) 360° ÷ 6 = 60°.\nc) Angle 108° ; 360° ÷ 108° ≈ 3,33 n'est pas entier : les pentagones laissent des trous.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-19-exo-nature-quadrilatere",
    notion: "ma-19",
    savoirFaire: ["nature-coordonnees", "quadrilateres"],
    difficulte: 2,
    enonce: "On donne A(0 ; 0), B(4 ; 0), C(4 ; 4) et D(0 ; 4).",
    question: "a) Montrer que ABCD est un parallélogramme (milieux des diagonales).\nb) Calculer AC et BD.\nc) Conclure sur la nature exacte d'ABCD.",
    reponseType:
      "a) Milieu [AC] = (2 ; 2) ; milieu [BD] = (2 ; 2) : même milieu → parallélogramme.\nb) AC = √(4² + 4²) = √32 ; BD = √(4² + 4²) = √32 : diagonales égales.\nc) Diagonales égales → rectangle ; côtés AB = AD = 4 (côtés consécutifs égaux) → c'est un carré.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-19-exo-cas-egalite",
    notion: "ma-19",
    savoirFaire: ["cas-egalite"],
    difficulte: 3,
    enonce: "ABC et DEF sont deux triangles. On sait que AB = DE = 5 cm, AC = DF = 7 cm.",
    question:
      "a) Si l'angle en A est égal à l'angle en D, les triangles sont-ils égaux ? Quel cas ?\nb) Si on connaît seulement l'angle en B (= angle en E), peut-on conclure ?\nc) Pourquoi la rigueur sur l'angle « compris » est-elle essentielle ?",
    reponseType:
      "a) Oui : AB = DE, AC = DF, et l'angle en A (compris entre AB et AC) égal à l'angle en D → cas CAC, triangles égaux.\nb) Non : l'angle en B n'est pas compris entre les deux côtés connus (AB et AC). C'est une configuration CCA, qui ne suffit pas.\nc) Sans l'angle compris, deux triangles différents peuvent partager ces données : la conclusion serait fausse.",
    explication: [],
  },
];
