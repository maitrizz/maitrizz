import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_THEOREME_DE_PYTHAGORE: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-21-exo-calculer-longueurs",
    notion: "ma-21",
    savoirFaire: ["calcul-hypotenuse", "calcul-cote"],
    difficulte: 1,
    enonce: "Triangle ABC rectangle en A dans chaque cas.",
    question: "a) AB = 6, AC = 8 : calculer BC.\nb) BC = 15, AB = 9 : calculer AC.\nc) AB = AC = 7 : calculer BC (forme exacte).",
    reponseType:
      "a) BC² = 36 + 64 = 100 → BC = 10.\nb) AC² = 225 − 81 = 144 → AC = 12 (triplet 9-12-15).\nc) BC² = 49 + 49 = 98 → BC = 7√2 ≈ 9,90 (triangle rectangle isocèle).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-21-exo-reconnaitre-triplet",
    notion: "ma-21",
    savoirFaire: ["triplets"],
    difficulte: 1,
    question: "Pour chaque triplet, dire s'il est pythagoricien :\na) (5, 12, 13)\nb) (8, 15, 17)\nc) (6, 7, 10)\nd) (20, 21, 29)",
    reponseType:
      "a) 13² = 169 = 25 + 144 ✓ : triplet.\nb) 17² = 289 = 64 + 225 ✓ : triplet.\nc) 10² = 100 ≠ 36 + 49 = 85 : pas un triplet (obtusangle).\nd) 29² = 841 = 400 + 441 ✓ : triplet.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-21-exo-rectangle-ou-non",
    notion: "ma-21",
    savoirFaire: ["reciproque-contraposee"],
    difficulte: 1,
    question:
      "Pour chaque triangle, dire s'il est rectangle (réciproque) ou non (contraposée), et préciser le type sinon :\na) 10, 24, 26\nb) 5, 8, 10\nc) 9, 12, 16",
    reponseType:
      "a) 26² = 676 = 100 + 576 ✓ → rectangle (réciproque).\nb) 10² = 100 ; 25 + 64 = 89 ; 100 > 89 → non rectangle, obtusangle.\nc) 16² = 256 ; 81 + 144 = 225 ; 256 > 225 → non rectangle, obtusangle.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-21-exo-diagonale-ecran",
    notion: "ma-21",
    savoirFaire: ["calcul-hypotenuse", "triplets"],
    difficulte: 1,
    enonce: "Un écran rectangulaire mesure 60 cm de large et 32 cm de haut.",
    question: "a) Calculer la longueur de la diagonale.\nb) Reconnaître un triplet pythagoricien (en simplifiant).",
    reponseType:
      "a) d² = 60² + 32² = 3 600 + 1 024 = 4 624 → d = 68 cm.\nb) 60 = 4 × 15, 32 = 4 × 8, 68 = 4 × 17 : c'est le triplet (8, 15, 17) multiplié par 4.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-21-exo-diagonale-pave-pyramide",
    notion: "ma-21",
    savoirFaire: ["pythagore-3d"],
    difficulte: 2,
    question:
      "a) Pavé droit 8 × 9 × 12 : calculer la grande diagonale.\nb) Pyramide à base carrée de côté 6, hauteur 4 : calculer l'apothème (distance du sommet au milieu d'une arête de base), sachant qu'elle vérifie apothème² = hauteur² + (côté/2)².",
    reponseType:
      "a) d² = 8² + 9² + 12² = 64 + 81 + 144 = 289 → d = 17.\nb) apothème² = 4² + 3² = 16 + 9 = 25 → apothème = 5 (triplet 3-4-5).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-21-exo-echelle-mur",
    notion: "ma-21",
    savoirFaire: ["calcul-cote"],
    difficulte: 3,
    enonce: "Une échelle de 5 m est appuyée contre un mur vertical. Son pied est à 1,4 m du mur.",
    question: "a) À quelle hauteur l'échelle touche-t-elle le mur (arrondir au cm) ?\nb) On éloigne le pied à 3 m du mur : nouvelle hauteur ?\nc) Que se passerait-il si le pied était à 5 m du mur ?",
    reponseType:
      "a) h² = 5² − 1,4² = 25 − 1,96 = 23,04 → h = 4,80 m.\nb) h² = 25 − 9 = 16 → h = 4 m (triplet 3-4-5).\nc) h² = 25 − 25 = 0 → h = 0 : l'échelle serait à plat sur le sol (cas limite).",
    explication: [],
  },
];
