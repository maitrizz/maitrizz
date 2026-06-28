// Banque d'exercices OUVERTS, notion 07 « Modes et temps ».
//
// CHANTIER 2 (refonte façon Grévisse, DOCTRINE_EXERCICES.md) : exercices réécrits.
// 3 niveaux : Fondamentaux · Concours (la cible) · Expert (au-delà : conditionnel
// passé 2e forme, concordance au discours indirect, subjonctif imparfait, aspect
// accompli, futur antérieur vs conditionnel passé).
// Terminologie 2020 : le conditionnel est un TEMPS de l'indicatif (pas un mode à part).
// La morphologie fine des formes non conjuguées relève de la notion 10.
// 6 savoir-faire : modes personnels · modes non personnels · temps simples/composés
// · valeurs temporelles · valeurs modales · concordance.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_MODES_ET_TEMPS: TrainerExercice[] = [
  // ————————————————————————— Fondamentaux —————————————————————————
  {
    id: "fr-07-exo-f1",
    notion: "fr-07",
    savoirFaire: ["modes-personnels", "temps-simples-composes"],
    difficulte: 1,
    question:
      "Donnez le mode et le temps :\na) « il chantait »\nb) « qu'il chante »\nc) « chante ! »\nd) « il a chanté »",
    reponseType:
      "a) indicatif imparfait.\nb) subjonctif présent.\nc) impératif présent.\nd) indicatif passé composé (temps composé : auxiliaire + participe passé).",
    explication: [],
  },
  {
    id: "fr-07-exo-f2",
    notion: "fr-07",
    savoirFaire: ["temps-simples-composes", "modes-personnels"],
    difficulte: 1,
    question:
      "Distinguez ces formes à la terminaison :\na) « je chanterais »\nb) « je chantais »\nc) « je chanterai »",
    reponseType:
      "a) **conditionnel présent** (-rais : le « r » de l'infinitif + -ais).\nb) **imparfait** (-ais, sans « r »).\nc) **futur simple** (-rai).\nEn terminologie 2020, le conditionnel est un **temps de l'indicatif**.",
    explication: [],
  },
  {
    id: "fr-07-exo-f3",
    notion: "fr-07",
    savoirFaire: ["modes-non-personnels"],
    difficulte: 1,
    question:
      "Donnez le mode (non personnel) et la forme :\na) « chanter »\nb) « chantant »\nc) « ayant chanté »\nd) « en marchant »",
    reponseType:
      "a) **infinitif** présent.\nb) **participe** présent.\nc) **participe** passé (composé : « ayant » + participe).\nd) **gérondif** (« en » + participe présent).",
    explication: [],
  },
  {
    id: "fr-07-exo-f4",
    notion: "fr-07",
    savoirFaire: ["temps-simples-composes"],
    difficulte: 1,
    question:
      "Le temps est-il simple ou composé ?\na) « il mangeait »\nb) « il avait mangé »\nc) « il mangera »\nd) « il a mangé »",
    reponseType:
      "a) **simple** (imparfait).\nb) **composé** (plus-que-parfait).\nc) **simple** (futur).\nd) **composé** (passé composé).\nUn temps composé = auxiliaire conjugué + participe passé.",
    explication: [],
  },
  {
    id: "fr-07-exo-f5",
    notion: "fr-07",
    savoirFaire: ["valeurs-temporelles"],
    difficulte: 1,
    question:
      "Donnez la valeur du présent dans chaque phrase :\na) « L'eau bout à 100 °C. »\nb) « En 1789, le peuple prend la Bastille. »\nc) « J'arrive dans cinq minutes. »",
    reponseType:
      "a) présent de **vérité générale**.\nb) présent de **narration** (présent historique).\nc) présent à valeur de **futur proche**.",
    explication: [],
  },
  {
    id: "fr-07-exo-f6",
    notion: "fr-07",
    savoirFaire: ["valeurs-modales"],
    difficulte: 1,
    question:
      "Donnez la valeur du conditionnel :\na) « Il viendrait demain. »\nb) « Il aurait gagné au loto. »\nc) « Je voudrais un café. »",
    reponseType:
      "a) **futur dans le passé** (valeur temporelle).\nb) **fait non confirmé** (valeur modale, « conditionnel journalistique »).\nc) **demande polie** (valeur modale d'atténuation).",
    explication: [],
  },

  // ————————————————————————— Concours (la cible) —————————————————————————
  {
    id: "fr-07-exo-c1",
    notion: "fr-07",
    savoirFaire: ["temps-simples-composes", "valeurs-temporelles"],
    difficulte: 2,
    question:
      "**Prouvez, par une manipulation**, que « chanterais » et « chantais » ne sont pas au même temps :\n« Je chantais autrefois ; je chanterais si on me le demandait. »",
    reponseType:
      "« chantais » : **imparfait** (-ais, sans « r » avant la terminaison). « chanterais » : **conditionnel présent** (« r » de l'infinitif + -ais).\nManipulation décisive : changer de personne. « nous chant**ions** » (imparfait) vs « nous chant**erions** » (conditionnel) : le « r » réapparaît au conditionnel. Le contexte hypothétique (« si on me le demandait ») confirme la valeur.",
    explication: [],
  },
  {
    id: "fr-07-exo-c2",
    notion: "fr-07",
    savoirFaire: ["temps-simples-composes", "modes-personnels"],
    difficulte: 2,
    question:
      "Donnez le temps exact et expliquez ce qui les distingue :\na) « Il a fermé la porte. »\nb) « Il avait fermé la porte. »",
    reponseType:
      "a) **passé composé** (auxiliaire au **présent** « a » + participe passé).\nb) **plus-que-parfait** (auxiliaire à l'**imparfait** « avait » + participe passé).\nC'est l'auxiliaire qui décide. Le plus-que-parfait marque l'antériorité par rapport à un autre fait passé.",
    explication: [],
  },
  {
    id: "fr-07-exo-c3",
    notion: "fr-07",
    savoirFaire: ["modes-personnels", "modes-non-personnels", "temps-simples-composes"],
    difficulte: 2,
    question:
      "Donnez le mode et le temps de ces formes :\na) « il fit »\nb) « il fut »\nc) « il vit »\nd) « ayant pris »",
    reponseType:
      "a) **passé simple** (faire).\nb) **passé simple** (être).\nc) **passé simple** (voir).\nd) **participe passé composé** (mode non personnel : « ayant » + participe).\nPiège : « il fit / il vit » sont des passés simples irréguliers, **pas** des futurs malgré leur brièveté.",
    explication: [],
  },
  {
    id: "fr-07-exo-c4",
    notion: "fr-07",
    savoirFaire: ["modes-personnels"],
    difficulte: 2,
    question:
      "À quel mode sont les verbes en gras ? Pourquoi ?\na) « Il faut que tu **viennes**. »\nb) « Je veux qu'il **fasse** un effort. »",
    reponseType:
      "a) **subjonctif présent** (« venir »), commandé par la locution « il faut que » (nécessité).\nb) **subjonctif présent** (« faire »), commandé par « vouloir que » (volonté).\nLe subjonctif s'emploie après certains déclencheurs (volonté, nécessité, sentiment, doute).",
    explication: [],
  },
  {
    id: "fr-07-exo-c5",
    notion: "fr-07",
    savoirFaire: ["valeurs-temporelles"],
    difficulte: 2,
    question:
      "Donnez la valeur de l'imparfait dans chaque phrase :\na) « Tous les matins, il se levait à six heures. »\nb) « Si j'avais le temps, je viendrais. »\nc) « Un pas de plus et il tombait. »",
    reponseType:
      "a) imparfait d'**habitude** (itératif).\nb) imparfait dans un **système hypothétique** (irréel du présent, après « si »).\nc) imparfait **d'imminence contrariée** : il a failli tomber (action sur le point de se produire mais évitée).",
    explication: [],
  },
  {
    id: "fr-07-exo-c6",
    notion: "fr-07",
    savoirFaire: ["modes-personnels"],
    difficulte: 2,
    question:
      "**Prouvez, par une manipulation**, que « voie » est au subjonctif et non à l'indicatif :\n« Il faut qu'il voie le médecin. »",
    reponseType:
      "**voie** : subjonctif présent. Manipulation : à l'indicatif présent, on aurait « il **voit** le médecin » ; après le déclencheur « il faut que », la forme devient « qu'il **voie** ». La comparaison des deux formes à la 3e personne (voit / voie) révèle le changement de mode imposé par « il faut que ».",
    explication: [],
  },
  {
    id: "fr-07-exo-c7",
    notion: "fr-07",
    savoirFaire: ["concordance"],
    difficulte: 2,
    question:
      "Mettez le verbe de la subordonnée au temps correct et nommez-le :\na) « Je pense qu'il (venir) bientôt. »\nb) « Je pensais qu'il (venir) bientôt. »",
    reponseType:
      "a) « Je pense qu'il **viendra** » (futur simple : postérieur au présent de la principale).\nb) « Je pensais qu'il **viendrait** » (conditionnel présent = **futur dans le passé** : la concordance recule le repère avec le passé de la principale).",
    explication: [],
  },
  {
    id: "fr-07-exo-c8",
    notion: "fr-07",
    savoirFaire: ["temps-simples-composes", "valeurs-temporelles"],
    difficulte: 2,
    question:
      "Donnez le mode, le temps et la valeur du verbe :\n« Longtemps, je me suis couché de bonne heure. » (Proust, *Du côté de chez Swann*)",
    reponseType:
      "**me suis couché** : indicatif, **passé composé** (temps composé : auxiliaire « suis » au présent + participe « couché »). Valeur : action **répétée / durative** dans le passé (soulignée par « longtemps »), envisagée comme un tout, avec un lien au moment de l'énonciation.",
    explication: [],
  },
  {
    id: "fr-07-exo-c9",
    notion: "fr-07",
    savoirFaire: ["valeurs-modales"],
    difficulte: 2,
    question:
      "Donnez la valeur du futur dans chaque phrase :\na) « Tu prendras tes médicaments à midi. »\nb) « Ce sera sans doute le facteur. »\nc) « J'aurai bientôt fini. »",
    reponseType:
      "a) futur à valeur d'**ordre** (injonction atténuée).\nb) futur de **probabilité** (conjecture).\nc) **futur antérieur** à valeur d'accompli prochain.\nLe futur peut donc porter des valeurs modales, au-delà de la simple postériorité.",
    explication: [],
  },
  {
    id: "fr-07-exo-c10",
    notion: "fr-07",
    savoirFaire: ["valeurs-temporelles", "temps-simples-composes"],
    difficulte: 2,
    question:
      "Relevez les temps et expliquez leur emploi dans ce récit :\n« Il marchait depuis une heure quand il aperçut une lumière. Il s'arrêta. »",
    reponseType:
      "- **marchait** : imparfait, **arrière-plan** (action en cours, durée).\n- **aperçut** : passé simple, **premier plan** (action ponctuelle qui rompt la durée).\n- **s'arrêta** : passé simple, action successive de premier plan.\nL'imparfait pose le décor, le passé simple fait avancer le récit.",
    explication: [],
  },

  // ————————————————————————— Expert (au-delà de l'épreuve) —————————————————————————
  {
    id: "fr-07-exo-e1",
    notion: "fr-07",
    savoirFaire: ["modes-personnels", "temps-simples-composes"],
    difficulte: 3,
    question:
      "Cette forme verbale a deux noms possibles. Lesquels, et lequel retenir ici ?\n« Il eût aimé partir plus tôt. »",
    reponseType:
      "« eût aimé » est, ici, un **conditionnel passé deuxième forme** (de morphologie identique au **subjonctif plus-que-parfait**). Le sens est conditionnel : « il aurait aimé ». On le rencontre en registre soutenu. La même forme s'analyse en subjonctif plus-que-parfait dans un autre contexte (« bien qu'il eût aimé… ») : c'est le sens et la construction qui tranchent.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : reconnaître la « deuxième forme » du conditionnel passé (eût aimé = aurait aimé) et savoir qu'elle se confond formellement avec le subjonctif plus-que-parfait est un point fin valorisé.",
      },
    ],
  },
  {
    id: "fr-07-exo-e2",
    notion: "fr-07",
    savoirFaire: ["concordance"],
    difficulte: 3,
    question:
      "Transposez au discours indirect passé et justifiez les temps :\nIl a dit : « Je viendrai demain quand j'aurai fini. »",
    reponseType:
      "« Il a dit qu'il **viendrait** le lendemain quand il **aurait fini**. » Le futur simple → **conditionnel présent** (futur dans le passé) ; le futur antérieur → **conditionnel passé**. La concordance recule chaque temps d'un cran vers le passé ; « demain » → « le lendemain ».",
    explication: [],
  },
  {
    id: "fr-07-exo-e3",
    notion: "fr-07",
    savoirFaire: ["modes-personnels", "concordance"],
    difficulte: 3,
    question:
      "Identifiez le mode et le temps, et commentez le registre :\n« Je craignais qu'il ne vînt. »",
    reponseType:
      "**vînt** : **subjonctif imparfait** (de « venir »). Il s'emploie par concordance après un verbe principal au passé (« craignais »), en registre **soutenu / littéraire**. En registre courant, on dirait « qu'il ne vienne » (subjonctif présent). Le « ne » est ici **explétif** (pas de négation).",
    explication: [],
  },
  {
    id: "fr-07-exo-e4",
    notion: "fr-07",
    savoirFaire: ["temps-simples-composes", "valeurs-temporelles"],
    difficulte: 3,
    question:
      "« a mangé » exprime-t-il toujours le passé ? Analysez la valeur :\na) « Il a mangé à midi. »\nb) « Quand il a mangé, il fait la sieste. »\nc) « En deux minutes, c'est mangé. »",
    reponseType:
      "a) passé composé à valeur de **passé** (action révolue).\nb) valeur d'**accompli** dans le présent : antériorité immédiate, habitude (« dès qu'il a fini de manger »).\nc) valeur d'**accompli résultatif** (l'état présent issu de l'action).\nLe temps composé exprime d'abord l'**accompli** (aspect), pas seulement le passé.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : distinguer le temps (situation dans la chronologie) de l'aspect (accompli / inaccompli) est exactement ce que le jury attend sur les temps composés.",
      },
    ],
  },
  {
    id: "fr-07-exo-e5",
    notion: "fr-07",
    savoirFaire: ["temps-simples-composes", "valeurs-modales"],
    difficulte: 3,
    question:
      "Une lettre d'écart : distinguez le temps et la valeur :\na) « Il aura terminé avant midi. »\nb) « Il aurait terminé s'il avait eu le temps. »",
    reponseType:
      "a) **futur antérieur** (« aura » au futur + participe) : action future achevée avant un repère ; valeur possible de **probabilité** (« il a sans doute terminé »).\nb) **conditionnel passé** (« aurait » au conditionnel + participe) : **irréel du passé** (action non réalisée, sous une condition non remplie).\n« aura » / « aurait » : un son d'écart, deux temps et deux valeurs.",
    explication: [],
  },
];
