import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_DUREES_MASSES_GRANDEURS_COMPOSEES: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-16-exo-conversions-durees",
    notion: "ma-16",
    savoirFaire: ["durees-conversion"],
    difficulte: 1,
    question: "a) Convertir 3h 45min en minutes.\nb) Convertir 200 minutes en h min.\nc) Convertir 2,4 h en h min.\nd) Convertir 3h 18min en heures décimales.",
    reponseType:
      "a) 3 × 60 + 45 = 225 min.\nb) 200 ÷ 60 = 3 h reste 20 min → 3h 20min.\nc) 0,4 × 60 = 24 min → 2h 24min.\nd) 18 ÷ 60 = 0,3 → 3,3 h.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-16-exo-conversions-masses",
    notion: "ma-16",
    savoirFaire: ["masses"],
    difficulte: 1,
    question: "a) 3,5 kg en g.\nb) 4 500 g en kg.\nc) 2,3 t en kg.\nd) Une recette demande 750 g de farine : combien de paquets de 1 kg acheter ?",
    reponseType:
      "a) 3,5 × 1 000 = 3 500 g.\nb) 4 500 ÷ 1 000 = 4,5 kg.\nc) 2,3 × 1 000 = 2 300 kg.\nd) 750 g < 1 kg : 1 paquet suffit (250 g de surplus).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-16-exo-trajet-train",
    notion: "ma-16",
    savoirFaire: ["durees-calcul", "vitesse"],
    difficulte: 1,
    enonce: "Un train part de Paris à 7h 54min et arrive à Lyon à 10h 02min. La distance est de 465 km.",
    question: "a) Durée du trajet ?\nb) Durée en heures décimales ?\nc) Vitesse moyenne ?",
    reponseType:
      "a) 7h 54 → 8h (+6 min), 8h → 10h (+2 h), 10h → 10h 02 (+2 min) : 2h 08min.\nb) t = 2 + 8/60 = 32/15 h ≈ 2,133 h.\nc) v = 465 ÷ (32/15) = 465 × 15/32 ≈ 218 km/h.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-16-exo-masse-volumique-debit",
    notion: "ma-16",
    savoirFaire: ["masse-volumique-debit"],
    difficulte: 1,
    enonce: "On étudie un cube d'aluminium et une piscine.",
    question:
      "a) Cube d'aluminium d'arête 5 cm, masse volumique 2,7 g/cm³ : masse en g, puis en kg.\nb) Piscine 25 m × 12,5 m × 1,8 m, remplie à 40 m³/h : temps de remplissage (h min) ?",
    reponseType:
      "a) V = 5³ = 125 cm³ ; m = 2,7 × 125 = 337,5 g = 0,3375 kg.\nb) V = 25 × 12,5 × 1,8 = 562,5 m³ ; t = 562,5 ÷ 40 = 14,0625 h ; 0,0625 × 60 ≈ 4 min → 14h 04min.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-16-exo-plein-carburant",
    notion: "ma-16",
    savoirFaire: ["lire-unite"],
    difficulte: 2,
    enonce: "Une voiture consomme 7 L aux 100 km. Le gazole coûte 1,75 €/L. Elle parcourt 240 km.",
    question: "a) Consommation totale en litres ?\nb) Coût du carburant pour ce trajet ?\nc) Quel serait le coût pour 600 km ?",
    reponseType:
      "a) 240 × 7 ÷ 100 = 16,8 L.\nb) 16,8 × 1,75 = 29,40 €.\nc) 600 × 7 ÷ 100 = 42 L ; 42 × 1,75 = 73,50 €.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-16-exo-camion-sable",
    notion: "ma-16",
    savoirFaire: ["masse-volumique-debit", "vitesse"],
    difficulte: 3,
    enonce: "Le bac d'un camion est un pavé droit de 4 m × 2 m × 0,8 m. La masse volumique du sable humide est de 1 800 kg/m³.",
    question:
      "a) Volume du bac en m³ et en litres.\nb) Masse du sable en kg et en tonnes.\nc) Le camion part à 6h 35min et doit arriver avant 9h, sur 185 km : vitesse moyenne minimale (arrondie au km/h) ?\nd) Une pompe vide le bac à 0,3 m³/min : temps de vidange (min s) ?",
    reponseType:
      "a) V = 4 × 2 × 0,8 = 6,4 m³ = 6 400 L.\nb) m = 1 800 × 6,4 = 11 520 kg = 11,52 t.\nc) Durée max = 2h 25min = 29/12 h ; v = 185 ÷ (29/12) = 185 × 12/29 ≈ 77 km/h.\nd) t = 6,4 ÷ 0,3 ≈ 21,33 min ; 0,33 × 60 ≈ 20 s → 21 min 20 s.",
    explication: [],
  },
];
