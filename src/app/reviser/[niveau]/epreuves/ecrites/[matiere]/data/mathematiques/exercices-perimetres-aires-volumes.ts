import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_PERIMETRES_AIRES_VOLUMES: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-15-exo-perimetre-aire",
    notion: "ma-15",
    savoirFaire: ["perimetres", "aires"],
    difficulte: 1,
    enonce: "Une salle de classe est un rectangle de 9 m sur 6 m.",
    question: "a) Calculer son périmètre.\nb) Calculer son aire en m², puis en cm².\nc) Coût d'un parquet à 18 €/m² ?",
    reponseType:
      "a) P = 2 × (9 + 6) = 30 m.\nb) A = 9 × 6 = 54 m² = 540 000 cm².\nc) 54 × 18 = 972 €.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-15-exo-conversions",
    notion: "ma-15",
    savoirFaire: ["conversions"],
    difficulte: 1,
    question: "Convertir :\na) 2,5 m² → cm²\nb) 45 000 cm² → m²\nc) 3 m³ → L\nd) 250 cL → cm³",
    reponseType:
      "a) 2,5 × 10 000 = 25 000 cm².\nb) 45 000 ÷ 10 000 = 4,5 m².\nc) 3 × 1 000 = 3 000 L.\nd) 250 cL = 2 500 mL = 2 500 cm³ (1 mL = 1 cm³).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-15-exo-disque-cylindre",
    notion: "ma-15",
    savoirFaire: ["aires", "volumes"],
    difficulte: 1,
    enonce: "Un réservoir cylindrique a un rayon de base de 50 cm et une hauteur de 2 m.",
    question: "a) Aire de la base (disque) en cm² (valeur exacte puis approchée).\nb) Volume du réservoir en cm³, puis en litres.",
    reponseType:
      "a) A = π × 50² = 2 500π ≈ 7 854 cm².\nb) h = 2 m = 200 cm. V = 2 500π × 200 = 500 000π ≈ 1 570 796 cm³ ≈ 1 571 L.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-15-exo-figure-composite",
    notion: "ma-15",
    savoirFaire: ["composite", "aires"],
    difficulte: 1,
    enonce: "Un terrain est un rectangle de 30 m × 20 m, auquel on ajoute un demi-disque de diamètre 20 m sur un petit côté.",
    question: "a) Aire du rectangle.\nb) Aire du demi-disque (valeur exacte puis approchée).\nc) Aire totale du terrain.",
    reponseType:
      "a) 30 × 20 = 600 m².\nb) Rayon = 10 m. Demi-disque = ½ × π × 10² = 50π ≈ 157 m².\nc) 600 + 50π ≈ 757 m².",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-15-exo-maquette",
    notion: "ma-15",
    savoirFaire: ["agrandissement", "conversions"],
    difficulte: 2,
    enonce: "Une maquette est à l'échelle 1/50 d'un bâtiment réel (le réel est 50 fois plus grand).",
    question: "a) Une fenêtre mesure 2 cm de haut sur la maquette : hauteur réelle en m ?\nb) Une façade fait 30 cm² sur la maquette : aire réelle en m² ?\nc) Le volume réel est 250 m³ : volume de la maquette en cm³ ?",
    reponseType:
      "a) Longueur ×50 : 2 × 50 = 100 cm = 1 m.\nb) Aire ×50² = ×2 500 : 30 × 2 500 = 75 000 cm² = 7,5 m².\nc) Volume réel ÷ 50³ = ÷125 000. 250 m³ = 250 000 000 cm³ ; ÷125 000 = 2 000 cm³.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-15-exo-volume-pyramide",
    notion: "ma-15",
    savoirFaire: ["volumes"],
    difficulte: 2,
    enonce: "Une pyramide a une base carrée de 6 cm de côté et une hauteur de 10 cm.",
    question: "a) Aire de la base.\nb) Volume de la pyramide.\nc) Comparer au volume du pavé de même base et même hauteur.",
    reponseType:
      "a) A_base = 6² = 36 cm².\nb) V = ⅓ × 36 × 10 = 120 cm³.\nc) Pavé : 36 × 10 = 360 cm³. La pyramide en fait le tiers (facteur ⅓).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-15-exo-piscine",
    notion: "ma-15",
    savoirFaire: ["volumes", "conversions"],
    difficulte: 3,
    enonce: "Une piscine a la forme d'un pavé droit de 10 m de long, 5 m de large et 1,5 m de profondeur.",
    question: "a) Volume en m³.\nb) Capacité en litres.\nc) À 12 L/min, combien de temps pour la remplir (en heures, arrondi) ?",
    reponseType:
      "a) V = 10 × 5 × 1,5 = 75 m³.\nb) 75 m³ × 1 000 = 75 000 L.\nc) 75 000 ÷ 12 = 6 250 min ≈ 104 h (environ 4 jours et 8 h).",
    explication: [],
  },
];
