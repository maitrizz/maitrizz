// Banque d'exercices OUVERTS, notion 09 « Présent, futur, conditionnel et subjonctif ».
//
// CHANTIER 2 (refonte façon Grévisse, DOCTRINE_EXERCICES.md) : exercices réécrits.
// 3 niveaux : Fondamentaux · Concours (la cible) · Expert (au-delà : statut 2020 du
// conditionnel, subjonctif imparfait, présent gnomique vs énonciation, subjonctif en
// indépendante).
// Périmètre : NOMMER LES VALEURS du présent/futur/conditionnel et les EMPLOIS du
// subjonctif. Terminologie 2020 : le conditionnel est un temps de l'indicatif.
// 6 savoir-faire : présent · futur · conditionnel · subjonctif · valeurs · concordance.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_PRESENT_FUTUR_CONDITIONNEL_SUBJONCTIF: TrainerExercice[] = [
  // ————————————————————————— Fondamentaux —————————————————————————
  {
    id: "fr-09-exo-f1",
    notion: "fr-09",
    savoirFaire: ["present", "valeurs"],
    difficulte: 1,
    question:
      "Donnez la valeur du présent :\na) « Il lit dans sa chambre. »\nb) « Deux et deux font quatre. »\nc) « Je pars demain. »",
    reponseType:
      "a) **action en cours** (au moment où l'on parle).\nb) **vérité générale** (vrai en tout temps).\nc) présent à valeur de **futur proche** (« demain » le confirme).",
    explication: [],
  },
  {
    id: "fr-09-exo-f2",
    notion: "fr-09",
    savoirFaire: ["present", "valeurs"],
    difficulte: 1,
    question:
      "Habitude ou vérité générale ?\na) « Le soleil se lève à l'est. »\nb) « Il se lève à six heures. »",
    reponseType:
      "a) **vérité générale** (valable toujours et pour tous).\nb) **habitude** (propre à une personne, action répétée). Le critère : la portée universelle (vérité générale) ou individuelle et répétée (habitude).",
    explication: [],
  },
  {
    id: "fr-09-exo-f3",
    notion: "fr-09",
    savoirFaire: ["futur", "valeurs"],
    difficulte: 1,
    question:
      "Donnez la valeur du futur :\na) « Il arrivera lundi. »\nb) « Tu rangeras ta chambre. »\nc) « Qui vivra verra. »",
    reponseType:
      "a) **action à venir** (emploi de base).\nb) **futur injonctif** (ordre déguisé).\nc) **vérité générale future** (tournure de proverbe).",
    explication: [],
  },
  {
    id: "fr-09-exo-f4",
    notion: "fr-09",
    savoirFaire: ["conditionnel"],
    difficulte: 1,
    question:
      "Conditionnel présent ou imparfait ?\na) « je finirais »\nb) « je finissais »",
    reponseType:
      "a) **conditionnel présent** (« r » de l'infinitif + -ais).\nb) **imparfait** (-ais, sans « r »). En terminologie 2020, le conditionnel est un **temps de l'indicatif**.",
    explication: [],
  },
  {
    id: "fr-09-exo-f5",
    notion: "fr-09",
    savoirFaire: ["subjonctif"],
    difficulte: 1,
    question:
      "Relevez le verbe au subjonctif et son déclencheur :\na) « Il faut que tu partes. »\nb) « Je doute qu'il vienne. »",
    reponseType:
      "a) **partes** (subjonctif présent), déclencheur « il faut que » (nécessité).\nb) **vienne** (subjonctif présent), déclencheur « douter que » (doute). Le subjonctif est imposé par un déclencheur.",
    explication: [],
  },
  {
    id: "fr-09-exo-f6",
    notion: "fr-09",
    savoirFaire: ["subjonctif", "concordance"],
    difficulte: 1,
    question:
      "Indicatif ou subjonctif ? Justifiez :\na) « Bien qu'il (être) fatigué, il continue. »\nb) « Parce qu'il (être) fatigué, il s'arrête. »",
    reponseType:
      "a) **subjonctif** : « Bien qu'il **soit** fatigué » (« bien que » impose le subjonctif).\nb) **indicatif** : « Parce qu'il **est** fatigué » (« parce que » se construit avec l'indicatif).\nLe subordonnant commande le mode.",
    explication: [],
  },

  // ————————————————————————— Concours (la cible) —————————————————————————
  {
    id: "fr-09-exo-c1",
    notion: "fr-09",
    savoirFaire: ["present", "valeurs"],
    difficulte: 2,
    question:
      "Nommez et justifiez la valeur du présent :\n« En 1492, Christophe Colomb débarque en Amérique. »",
    reponseType:
      "présent de **narration** (présent historique) : il rend un fait passé plus vivant, comme s'il se déroulait sous nos yeux. Justification : un contexte clairement passé (« en 1492 ») associé à un verbe au présent = actualisation du passé.",
    explication: [],
  },
  {
    id: "fr-09-exo-c2",
    notion: "fr-09",
    savoirFaire: ["conditionnel"],
    difficulte: 2,
    question:
      "**Prouvez, par une manipulation**, que « aimerais » est un conditionnel et non un imparfait :\n« J'aimerais vous aider. »",
    reponseType:
      "Manipulation : changer de personne. « nous aim**erions** » fait apparaître le « r » du conditionnel ; l'imparfait donnerait « nous aimions ». Le « r » de l'infinitif « aimer » est la marque décisive. La valeur, ici, est la **politesse** (demande atténuée).",
    explication: [],
  },
  {
    id: "fr-09-exo-c3",
    notion: "fr-09",
    savoirFaire: ["conditionnel", "valeurs"],
    difficulte: 2,
    question:
      "Donnez la valeur du conditionnel :\na) « Si j'étais riche, je voyagerais. »\nb) « Le président serait souffrant. »\nc) « Pourriez-vous m'aider ? »\nd) « Il a promis qu'il viendrait. »",
    reponseType:
      "a) **hypothèse** (apodose d'un système « si + imparfait »).\nb) **fait non confirmé** (conditionnel journalistique).\nc) **politesse** (demande atténuée).\nd) **futur dans le passé** (transposition de « il viendra »).",
    explication: [],
  },
  {
    id: "fr-09-exo-c4",
    notion: "fr-09",
    savoirFaire: ["subjonctif"],
    difficulte: 2,
    question:
      "Pourquoi le subjonctif ?\na) « Je cherche un livre qui soit facile à lire. »\nb) « C'est le plus beau spectacle que j'aie vu. »",
    reponseType:
      "a) subjonctif dans la relative parce que l'antécédent est **visé, non encore identifié** (un livre pas encore trouvé : nuance d'éventualité).\nb) subjonctif après un **superlatif** (« le plus beau… que »), qui exprime une appréciation. Le subjonctif ne suit donc pas que les verbes de volonté.",
    explication: [],
  },
  {
    id: "fr-09-exo-c5",
    notion: "fr-09",
    savoirFaire: ["futur", "valeurs"],
    difficulte: 2,
    question:
      "Donnez la valeur du futur :\na) « Vous me ferez trois copies pour demain. »\nb) « Il aura encore oublié, comme d'habitude. »",
    reponseType:
      "a) **futur injonctif** (ordre).\nb) **futur antérieur de probabilité** (conjecture : « il a sans doute oublié »). Le futur peut porter des valeurs modales.",
    explication: [],
  },
  {
    id: "fr-09-exo-c6",
    notion: "fr-09",
    savoirFaire: ["present", "valeurs"],
    difficulte: 2,
    question:
      "Ces deux présents ont-ils la même valeur ? Justifiez :\na) « L'eau gèle à 0 °C. »\nb) « Hier, je rentrais tranquillement quand soudain, un chien surgit devant moi. »",
    reponseType:
      "Non.\na) **vérité générale** (loi physique, toujours vraie).\nb) **présent de narration** : il rend vivant un fait passé (le contexte « hier » le situe dans le passé).\nLe contexte temporel tranche entre l'intemporel et le récit actualisé.",
    explication: [],
  },
  {
    id: "fr-09-exo-c7",
    notion: "fr-09",
    savoirFaire: ["subjonctif"],
    difficulte: 2,
    question:
      "**Prouvez, par une manipulation**, que le mode change :\na) « Je pense qu'il vient. »\nb) « Je ne pense pas qu'il vienne. »",
    reponseType:
      "a) **indicatif** (« vient ») : « penser que » à la forme affirmative pose le fait comme réel.\nb) **subjonctif** (« vienne ») : « ne pas penser que » introduit le doute, l'incertitude.\nManipulation : passer de l'affirmation à la négation fait basculer le mode de l'indicatif au subjonctif.",
    explication: [],
  },
  {
    id: "fr-09-exo-c8",
    notion: "fr-09",
    savoirFaire: ["concordance", "futur"],
    difficulte: 2,
    question:
      "Mettez le verbe de la subordonnée au temps correct :\na) « Je partirai dès que tu (arriver). »\nb) « Préviens-moi quand tu (finir) ton travail. »",
    reponseType:
      "a) « dès que tu **arriveras** » : **futur** (après « dès que », le français met le futur quand la principale est au futur).\nb) « quand tu **auras fini** » : **futur antérieur** (antériorité par rapport à l'ordre donné).",
    explication: [],
  },
  {
    id: "fr-09-exo-c9",
    notion: "fr-09",
    savoirFaire: ["present", "futur", "conditionnel", "valeurs"],
    difficulte: 2,
    question:
      "Donnez la valeur de chaque verbe en gras :\n« Demain, je **partirai** tôt. Le train **part** à 7 h. J'**aimerais** arriver avant midi. »",
    reponseType:
      "- **partirai** : futur, action à venir.\n- **part** : présent à valeur de futur (horaire programmé).\n- **aimerais** : conditionnel de **souhait atténué / politesse**.",
    explication: [],
  },
  {
    id: "fr-09-exo-c10",
    notion: "fr-09",
    savoirFaire: ["subjonctif"],
    difficulte: 2,
    question:
      "Le mode change-t-il le sens ? Justifiez :\na) « Il a tout rangé, de sorte que la pièce est nette. »\nb) « Range tout, de sorte que la pièce soit nette. »",
    reponseType:
      "Oui.\na) **indicatif** (« est ») : « de sorte que » exprime la **conséquence** (un résultat réalisé).\nb) **subjonctif** (« soit ») : « de sorte que » exprime le **but** (un résultat visé, pas encore réalisé).\nLe mode distingue conséquence (indicatif) et but (subjonctif).",
    explication: [],
  },

  // ————————————————————————— Expert (au-delà de l'épreuve) —————————————————————————
  {
    id: "fr-09-exo-e1",
    notion: "fr-09",
    savoirFaire: ["conditionnel"],
    difficulte: 3,
    question:
      "Selon la terminologie 2020, à quel mode appartient le conditionnel ? Justifiez par sa valeur :\n« Il a dit qu'il viendrait. »",
    reponseType:
      "Selon la terminologie 2020, le conditionnel est un **temps de l'indicatif** (et non un mode autonome). Justification : ici, « viendrait » est un **futur dans le passé** (transposition de « il viendra » dans un récit passé), emploi purement temporel qui confirme son rattachement à l'indicatif. Le conditionnel garde des emplois modaux (hypothèse, politesse), mais son classement officiel est désormais temporel.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : c'est le piège classique. Présenter le conditionnel comme un « mode » relève de l'ancienne terminologie ; le rattacher à l'indicatif (tout en signalant ses valeurs modales) est ce qui est attendu.",
      },
    ],
  },
  {
    id: "fr-09-exo-e2",
    notion: "fr-09",
    savoirFaire: ["subjonctif", "concordance"],
    difficulte: 3,
    question:
      "Identifiez le mode et le temps, et commentez le registre :\n« Il eût fallu qu'il vînt plus tôt. »",
    reponseType:
      "« vînt » : **subjonctif imparfait** (de « venir »), employé par concordance après un verbe de registre soutenu au passé. « eût fallu » : conditionnel passé deuxième forme (de morphologie identique au subjonctif plus-que-parfait). Registre **soutenu / littéraire**. En registre courant : « Il aurait fallu qu'il vienne ».",
    explication: [],
  },
  {
    id: "fr-09-exo-e3",
    notion: "fr-09",
    savoirFaire: ["present", "valeurs"],
    difficulte: 3,
    question:
      "Distinguez finement la valeur du présent :\na) « La Terre tourne autour du Soleil. »\nb) « Je t'aime. »",
    reponseType:
      "a) présent à valeur **gnomique** (vérité générale, intemporelle, valable hors du moment de parole).\nb) présent d'**énonciation** : il coïncide avec le moment où l'on parle, ancré dans l'instant.\nMême morphologie, deux ancrages opposés : l'intemporel et l'actuel.",
    explication: [],
  },
  {
    id: "fr-09-exo-e4",
    notion: "fr-09",
    savoirFaire: ["conditionnel", "valeurs"],
    difficulte: 3,
    question:
      "Le conditionnel pourrait avoir deux valeurs. Laquelle retenir, et comment trancher ?\n« Selon la météo, il pleuvrait demain. »",
    reponseType:
      "Valeur retenue : **fait non confirmé** (conditionnel journalistique) : l'information n'est pas garantie, et « selon la météo » signale la source non assumée. Ce n'est **pas** un futur dans le passé, car il n'y a aucune principale au passé pour servir de repère. Le marqueur « selon » et l'absence de récit passé imposent la valeur modale d'information non confirmée.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : trancher entre futur dans le passé (besoin d'un repère passé) et conditionnel d'information non confirmée (présence d'une source : « selon », « d'après ») est exactement le geste attendu.",
      },
    ],
  },
  {
    id: "fr-09-exo-e5",
    notion: "fr-09",
    savoirFaire: ["subjonctif"],
    difficulte: 3,
    question:
      "Identifiez l'emploi du subjonctif en proposition indépendante :\na) « Qu'il parte ! »\nb) « Vive la République ! »\nc) « Soit un triangle ABC. »",
    reponseType:
      "Subjonctif en **indépendante** (sans déclencheur subordonnant) :\na) **ordre / injonction** à la 3e personne (impératif impossible à cette personne).\nb) **souhait** (optatif, expression figée).\nc) **supposition** (langue mathématique : « soit » = « supposons »).\nLe subjonctif n'est donc pas toujours subordonné.",
    explication: [],
  },
];
