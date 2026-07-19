import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_DENOMBREMENT: TrainerExercice[] = [
  {
    // TODO refonte exo
    id: "ma-07-exo-tenue-matin",
    notion: "ma-07",
    savoirFaire: ["principes"],
    difficulte: 1,
    enonce: "Lucie a 3 hauts, 2 pantalons et 2 paires de chaussures.",
    question:
      "a) Combien de tenues complètes (haut + pantalon + chaussures) ?\nb) Si elle fixe les baskets, combien de tenues restent possibles ?\nc) Elle choisit un haut au hasard parmi les 3 : lequel a-t-elle le plus de chances de choisir ?",
    reponseType:
      "a) Haut ET pantalon ET chaussures, indépendants : 3 × 2 × 2 = 12 tenues.\nb) Les chaussures sont fixées : 3 × 2 = 6 tenues.\nc) Aucun : les 3 hauts ont la même chance, 1/3 chacun.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-07-exo-code-casier",
    notion: "ma-07",
    savoirFaire: ["remise"],
    difficulte: 1,
    enonce: "Un code à 3 chiffres, chacun compris entre 1 et 6.",
    question:
      "a) Combien de codes si les chiffres peuvent se répéter ?\nb) Combien si tous les chiffres doivent être différents ?\nc) Parmi les codes sans répétition, combien commencent par 4 ?",
    reponseType:
      "a) Avec répétition : 6 × 6 × 6 = 216 codes.\nb) Sans répétition, ordre compte : A(6, 3) = 6 × 5 × 4 = 120 codes.\nc) 1er chiffre fixé à 4, puis 5 et 4 restants : 1 × 5 × 4 = 20 codes.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-07-exo-podium-sportif",
    notion: "ma-07",
    savoirFaire: ["arrangement"],
    difficulte: 1,
    enonce: "8 élèves participent à une course. On remet une médaille d'or, d'argent et de bronze.",
    question:
      "a) Combien de podiums différents ?\nb) Combien placent Lucas en 1re position ?\nc) Si le podium est tiré au sort, Lucas et Emma ont-ils la même chance d'être 1er ? Justifier sans calculer.",
    reponseType:
      "a) Ordre compte, sans remise, 3 places parmi 8 : A(8, 3) = 8 × 7 × 6 = 336 podiums.\nb) Lucas fixé en 1re place, puis 7 et 6 restants : 1 × 7 × 6 = 42 podiums.\nc) Oui, par symétrie : chaque élève a la même chance d'être 1er (1/8). Les 336 podiums se répartissent en 336 ÷ 8 = 42 pour chacun en tête.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-07-exo-bibliotheque-classe",
    notion: "ma-07",
    savoirFaire: ["permutation"],
    difficulte: 1,
    enonce: "Une enseignante range 4 romans, 3 albums et 2 documentaires (9 livres) en une seule rangée.",
    question:
      "a) Combien de façons de ranger tous les livres sans contrainte ?\nb) Combien si les 4 romans doivent être côte à côte ?\nc) Un élève dit : « Il y a 4 + 3 + 2 = 9 façons de choisir le premier livre. » A-t-il raison ?",
    reponseType:
      "a) 9 livres à ordonner tous : P(9) = 9! = 362 880 dispositions.\nb) Le bloc de 4 romans compte comme 1 objet : 6 objets → P(6) = 720, et les romans s'ordonnent en 4! = 24. Total : 720 × 24 = 17 280.\nc) Pour le seul 1er livre, oui (9 choix exclusifs). Mais pour ranger tous les livres, les choix s'accumulent (ET) : le total est 9!, pas 9.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-07-exo-jeu-cartes",
    notion: "ma-07",
    savoirFaire: ["principes", "remise"],
    difficulte: 2,
    enonce: "Chaque carte d'un jeu a une forme (3 possibles), une couleur (3) et une valeur (3). Toutes les combinaisons existent.",
    question:
      "a) Combien de cartes différentes ? Justifier.\nb) Combien de cartes sont rouges ET ont un cercle ?\nc) On tire 2 cartes successivement sans remise. Combien d'issues ?",
    reponseType:
      "a) Forme ET couleur ET valeur, indépendants : 3 × 3 × 3 = 27 cartes.\nb) Cercle (1) × rouge (1) × 3 valeurs = 3 cartes.\nc) 1er tirage : 27 ; 2e sans remise : 26. Total : 27 × 26 = 702 issues.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-07-exo-groupes-classements",
    notion: "ma-07",
    savoirFaire: ["groupe-classement", "arrangement"],
    difficulte: 2,
    enonce: "Un club compte 6 membres.",
    question:
      "a) On désigne un président et un trésorier (rôles distincts). Combien de façons ?\nb) On désigne une commission de 2 membres (sans rôle distinct). Combien de commissions ?\nc) Expliquer pourquoi le résultat de b) est la moitié de celui de a).",
    reponseType:
      "a) Ordre compte, sans remise : A(6, 2) = 6 × 5 = 30 façons.\nb) Sans rôle : 30 ÷ 2 = 15 commissions.\nc) Chaque commission {X, Y} correspond à 2 désignations ordonnées (X-Y et Y-X). On divise donc par 2! = 2.",
    explication: [],
  },
  {
    // TODO refonte exo
    id: "ma-07-exo-analyse-erreur",
    notion: "ma-07",
    savoirFaire: ["principes", "arbre-tableau"],
    difficulte: 3,
    enonce: "Avec un jeu où chaque carte a une forme (3) et une couleur (3), un élève de CM2 dit : « Il y a 3 + 3 = 6 cartes différentes. »",
    question:
      "a) Identifier précisément l'erreur de raisonnement.\nb) À quel niveau ce type d'activité peut-il être proposé, et quel concept prépare-t-il ?\nc) Décrire une activité concrète pour aider l'élève à comprendre.",
    reponseType:
      "a) L'élève applique le principe additif (3 + 3) alors que les caractéristiques sont cumulatives : une carte a une forme ET une couleur. Il confond « ou » et produit (« et »).\nb) Dès le cycle 3 (CM1-CM2), pour amorcer le dénombrement systématique. Cela prépare le principe multiplicatif, formalisé en cycle 4, et la rigueur de l'énumération exhaustive.\nc) Un tableau à double entrée (formes en colonnes, couleurs en lignes). L'élève remplit chaque case et compte visuellement 3 × 3 = 9 combinaisons. La manipulation précède la formule.",
    explication: [],
  },
];
