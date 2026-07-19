import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_ALGORITHMIQUE_SCRATCH_TABLEUR: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-27-exo-suivre-variables",
    notion: "ma-27",
    savoirFaire: ["variables", "boucles-conditionnelles"],
    difficulte: 1,
    question:
      "Pour chaque programme, donner la valeur finale.\na) mettre a à 10, puis répéter 3 fois : enlever 4 à a.\nb) mettre p à 1, puis répéter 5 fois : multiplier p par 2.\nc) mettre s à 0, puis pour i de 1 à 4 : ajouter i à s.",
    reponseType:
      "a) a = 10 − 4 − 4 − 4 = −2.\nb) p = 2, 4, 8, 16, 32 → p = 32 (soit 2⁵).\nc) s = 1 + 2 + 3 + 4 = 10.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-27-exo-reconnaitre-figure",
    notion: "ma-27",
    savoirFaire: ["scratch"],
    difficulte: 1,
    question:
      "Quelle figure trace chaque script (stylo abaissé) ?\na) répéter 4 fois : avancer de 80 ; tourner de 90°.\nb) répéter 6 fois : avancer de 40 ; tourner de 60°.\nc) répéter 8 fois : avancer de 30 ; tourner de 45°.",
    reponseType:
      "a) Carré de côté 80 (360/4 = 90°).\nb) Hexagone régulier de côté 40 (360/6 = 60°).\nc) Octogone régulier de côté 30 (360/8 = 45°).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-27-exo-boucle-condition",
    notion: "ma-27",
    savoirFaire: ["boucles-conditionnelles"],
    difficulte: 1,
    enonce: "On exécute : mettre score à 0. Répéter 6 fois : ajouter 2 à score. Puis : si (score > 8) alors dire « gagné » sinon dire « perdu ».",
    question: "a) Que vaut score à la fin de la boucle ?\nb) Que dit le lutin ?",
    reponseType:
      "a) score = 2 × 6 = 12.\nb) 12 > 8 est vrai, donc le lutin dit « gagné ».",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-27-exo-formules-tableur",
    notion: "ma-27",
    savoirFaire: ["tableur"],
    difficulte: 1,
    enonce: "Une feuille de notes : les noms en colonne A (lignes 2 à 21), les notes sur 20 en colonne B. La cellule E1 contient un coefficient 0,5.",
    question: "a) Formule en C2 affichant la note pondérée (note × coefficient), recopiable vers le bas.\nb) Formule en D2 affichant « Admis » si la note est au moins 10, sinon « Refusé ».\nc) Formule donnant la moyenne de la classe.",
    reponseType:
      "a) =B2*$E$1 (B2 se décale à la recopie, $E$1 reste fixe).\nb) =SI(B2>=10 ; \"Admis\" ; \"Refusé\").\nc) =MOYENNE(B2:B21).",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-27-exo-rosace-imbriquees",
    notion: "ma-27",
    savoirFaire: ["scratch", "boucles-conditionnelles"],
    difficulte: 2,
    enonce: "Script : répéter 6 fois [ répéter 4 fois (avancer de 60 ; tourner de 90°) ; tourner de 60° ].",
    question: "a) Que trace la boucle intérieure seule ?\nb) Que produit la boucle extérieure ?\nc) Combien de carrés au total, et comment sont-ils disposés ?",
    reponseType:
      "a) La boucle intérieure (4 fois, 90°) trace un carré de côté 60.\nb) La boucle extérieure répète 6 fois le carré en tournant de 60° entre chaque.\nc) 6 carrés identiques disposés en rosace, régulièrement répartis (60° entre chacun, soit un tour complet : 6 × 60 = 360°).",
    explication: [],
  },
];
