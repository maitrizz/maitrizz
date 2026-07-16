import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_PROPORTIONNALITE_POURCENTAGES: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-13-exo-coefficient-tableau",
    notion: "ma-13",
    savoirFaire: ["proportionnalite"],
    difficulte: 1,
    enonce: "Un peintre utilise 3 L de peinture pour couvrir 18 m².",
    question: "a) Trouver le coefficient k et son unité.\nb) Compléter : 1 L → ? · 5 L → ? · 8 L → ?\nc) Quelle quantité pour 42 m² ?",
    reponseType:
      "a) k = 18 ÷ 3 = 6 m²/L.\nb) 1 L → 6 m² · 5 L → 30 m² · 8 L → 48 m².\nc) 42 ÷ 6 = 7 L.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-13-exo-pourcentage-ratio",
    notion: "ma-13",
    savoirFaire: ["pourcentage", "ratio"],
    difficulte: 1,
    question: "a) Calculer 30 % de 250 €.\nb) Sur 24 élèves, 18 réussissent : quel pourcentage ?\nc) Partager 36 bonbons selon le ratio 2 : 7.",
    reponseType:
      "a) 0,30 × 250 = 75 €.\nb) 18 ÷ 24 × 100 = 75 %.\nc) 2 + 7 = 9 parts ; 36 ÷ 9 = 4 ; donc 2 × 4 = 8 et 7 × 4 = 28 (8 + 28 = 36).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-13-exo-soldes-valeur-initiale",
    notion: "ma-13",
    savoirFaire: ["coef-multiplicateur"],
    difficulte: 1,
    question: "a) Un manteau de 180 € est soldé à −40 %. Prix soldé ?\nb) Après −40 %, un article coûte 90 € : prix initial ?\nc) Un salaire augmente de 25 % puis baisse de 20 % : taux global ?",
    reponseType:
      "a) CM = 0,60 → 180 × 0,60 = 108 €.\nb) CM = 0,60 → initial = 90 ÷ 0,60 = 150 €.\nc) 1,25 × 0,80 = 1,00 → 0 % (cas où les variations s'annulent exactement).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-13-exo-echelle-plan",
    notion: "ma-13",
    savoirFaire: ["echelle", "proportionnalite"],
    difficulte: 1,
    enonce: "Plan d'architecte à l'échelle 1/100. Une pièce mesure 4,5 cm sur le plan.",
    question: "a) Longueur réelle en mètres ?\nb) Une façade de 7,5 m mesure combien sur le plan ?\nc) L'échelle est-elle une situation de proportionnalité ?",
    reponseType:
      "a) 4,5 × 100 = 450 cm = 4,5 m.\nb) 7,5 m = 750 cm → 750 ÷ 100 = 7,5 cm.\nc) Oui : d_plan = (1/100) × d_réelle, rapport constant k = 1/100.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-13-exo-vitesse-horaires",
    notion: "ma-13",
    savoirFaire: ["grandeurs-composees"],
    difficulte: 2,
    enonce: "Un cycliste part à 9h24 et arrive à 12h09, après 82 km.",
    question: "a) Durée en heures décimales ?\nb) Vitesse moyenne ?\nc) À cette vitesse, distance en 2h 30min ?",
    reponseType:
      "a) De 9h24 à 12h09 = 2h 45min = 2 + 45/60 = 2,75 h.\nb) v = 82 ÷ 2,75 ≈ 29,8 km/h.\nc) 2h 30min = 2,5 h → d = 29,8 × 2,5 ≈ 74,5 km.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-13-exo-masse-volumique",
    notion: "ma-13",
    savoirFaire: ["grandeurs-composees"],
    difficulte: 2,
    enonce: "L'aluminium a une masse volumique de 2,7 g/cm³. Une poutre a un volume de 800 cm³.",
    question: "a) Masse de la poutre en kg ?\nb) Volume d'une poutre de 5,4 kg ?\nc) L'aluminium flotte-t-il dans l'eau (1 g/cm³) ?",
    reponseType:
      "a) m = 2,7 × 800 = 2 160 g = 2,16 kg.\nb) V = 5 400 ÷ 2,7 = 2 000 cm³.\nc) Non : sa masse volumique (2,7 g/cm³) dépasse celle de l'eau (1 g/cm³), donc l'aluminium coule.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-13-exo-proportionnel-ou-non",
    notion: "ma-13",
    savoirFaire: ["proportionnalite"],
    difficulte: 3,
    question:
      "Pour chaque situation, décider et justifier.\na) Prix d'un taxi : 2 € fixe + 1,20 €/km.\nb) Périmètre d'un carré selon son côté.\nc) Aire d'un carré selon son côté.\nd) Nombre de tuiles (identiques) pour un toit selon sa surface.",
    reponseType:
      "a) Non : (2 + 1,20d) ÷ d varie (3,20 pour 1 km, 2,20 pour 2 km).\nb) Oui : P = 4c, rapport P/c = 4 constant.\nc) Non : A = c², rapport A/c = c variable (côté ×2 → aire ×4).\nd) Oui : nombre de tuiles ÷ surface = 1 ÷ (surface d'une tuile), constant.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-13-exo-echelle-vitesse",
    notion: "ma-13",
    savoirFaire: ["echelle", "grandeurs-composees"],
    difficulte: 3,
    enonce: "Sur une carte au 1/100 000, deux villes A et B sont distantes de 7,4 cm. Un randonneur part de A à 8h30 et marche à 4,5 km/h.",
    question: "a) Distance réelle AB en km ?\nb) Heure d'arrivée à B ?\nc) Avec une pause de 45 min à mi-chemin, nouvelle heure d'arrivée ?",
    reponseType:
      "a) 7,4 × 100 000 = 740 000 cm = 7 400 m = 7,4 km.\nb) t = 7,4 ÷ 4,5 ≈ 1,644 h ≈ 1h 39min → arrivée vers 10h09.\nc) Trajet 1h 39min + pause 45min ≈ 2h 24min → arrivée vers 10h54.",
    explication: [],
  },
];
