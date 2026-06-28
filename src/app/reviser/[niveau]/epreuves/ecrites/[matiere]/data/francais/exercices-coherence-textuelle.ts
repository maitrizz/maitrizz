// Banque d'exercices OUVERTS, notion 14 « La cohérence textuelle ».
//
// CHANTIER 2 (refonte façon Grévisse, DOCTRINE_EXERCICES.md) : exercices réécrits.
// 3 niveaux : Fondamentaux · Concours (la cible) · Expert (au-delà : reprises comme
// marqueurs de point de vue, progressions mêlées, rupture de cohérence temporelle,
// connecteurs argumentatifs, cohésion vs cohérence).
// Périmètre : analyse de la cohérence d'un TEXTE (reprises, progression, connecteurs,
// temps, ponctuation). Le champ lexical relève surtout du lexique (notions 18-19).
// 6 savoir-faire : reprises nominales · pronoms · connecteurs · progression
// thématique · temps verbaux · ponctuation.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_COHERENCE_TEXTUELLE: TrainerExercice[] = [
  // ————————————————————————— Fondamentaux —————————————————————————
  {
    id: "fr-14-exo-f1",
    notion: "fr-14",
    savoirFaire: ["pronoms"],
    difficulte: 1,
    question:
      "Relevez les mots qui reprennent « le chat » et donnez leur nature :\n« Le chat dormait. Il ronronnait. On l'entendait à peine. »",
    reponseType:
      "« **Il** » (pronom personnel sujet) et « **l'** » (pronom personnel COD) reprennent « le chat ». Ce sont des **reprises pronominales** (anaphores) qui assurent la continuité référentielle.",
    explication: [],
  },
  {
    id: "fr-14-exo-f2",
    notion: "fr-14",
    savoirFaire: ["reprises-nominales"],
    difficulte: 1,
    question:
      "La reprise est-elle fidèle ou infidèle ?\na) « Un chien aboyait. Le chien semblait perdu. »\nb) « Un chien aboyait. L'animal semblait perdu. »",
    reponseType:
      "a) reprise nominale **fidèle** (même nom « chien », seul le déterminant change).\nb) reprise nominale **infidèle** (« l'animal » : terme générique / hyperonyme).",
    explication: [],
  },
  {
    id: "fr-14-exo-f3",
    notion: "fr-14",
    savoirFaire: ["connecteurs"],
    difficulte: 1,
    question:
      "Donnez la relation logique exprimée par le connecteur :\na) « Il pleut, donc je reste. »\nb) « Il est riche, pourtant il est malheureux. »\nc) « D'abord, range. Ensuite, sors. »",
    reponseType:
      "a) **conséquence** (« donc »).\nb) **opposition / concession** (« pourtant »).\nc) **succession / temps** (« d'abord… ensuite »).",
    explication: [],
  },
  {
    id: "fr-14-exo-f4",
    notion: "fr-14",
    savoirFaire: ["progression-thematique"],
    difficulte: 1,
    question:
      "Quelle progression ?\n« Napoléon naquit en Corse. Il devint général. Il se fit couronner empereur. »",
    reponseType:
      "Progression à **thème constant** : un même thème (Napoléon, repris par « il ») reçoit des informations nouvelles (rhèmes) successives.",
    explication: [],
  },
  {
    id: "fr-14-exo-f5",
    notion: "fr-14",
    savoirFaire: ["temps-verbaux"],
    difficulte: 1,
    question:
      "Pourquoi le mélange des temps est-il cohérent ?\n« Il faisait nuit. Soudain, un bruit retentit. »",
    reponseType:
      "L'imparfait (« faisait ») installe le décor (arrière-plan), le passé simple (« retentit ») marque l'événement (premier plan). Le système des temps assure la cohérence du récit (cf. notion 8).",
    explication: [],
  },
  {
    id: "fr-14-exo-f6",
    notion: "fr-14",
    savoirFaire: ["ponctuation"],
    difficulte: 1,
    question:
      "Quel est le rôle des deux-points ?\na) « Il hésita : la route était longue. »\nb) « Trois choses comptent : l'effort, la rigueur, la patience. »",
    reponseType:
      "a) ils introduisent une **explication** (la cause de l'hésitation).\nb) ils introduisent une **énumération**.\nLa ponctuation organise les liens logiques du texte.",
    explication: [],
  },

  // ————————————————————————— Concours (la cible) —————————————————————————
  {
    id: "fr-14-exo-c1",
    notion: "fr-14",
    savoirFaire: ["reprises-nominales", "pronoms"],
    difficulte: 2,
    question:
      "Relevez toute la chaîne de reprises désignant « le loup » et donnez la nature de chacune :\n« Un loup rôdait. La bête avait faim. Il s'approcha du troupeau. Ce prédateur ne reculait devant rien. »",
    reponseType:
      "Chaîne référentielle : « Un loup » (1re mention) → « La bête » (reprise nominale infidèle, terme générique) → « Il » (reprise pronominale) → « Ce prédateur » (reprise nominale infidèle, désignation par une caractéristique). Toutes désignent le même référent.",
    explication: [],
  },
  {
    id: "fr-14-exo-c2",
    notion: "fr-14",
    savoirFaire: ["reprises-nominales"],
    difficulte: 2,
    question:
      "Donnez le type de chaque reprise nominale infidèle de « Victor Hugo » :\na) « l'écrivain »\nb) « l'auteur des Misérables »\nc) « ce génie romantique »",
    reponseType:
      "a) **terme générique** (hyperonyme).\nb) **périphrase** (désignation par une caractéristique).\nc) reprise **appréciative / méliorative** (avec connotation).\nChacune évite la répétition tout en apportant une nuance.",
    explication: [],
  },
  {
    id: "fr-14-exo-c3",
    notion: "fr-14",
    savoirFaire: ["connecteurs"],
    difficulte: 2,
    question:
      "Analysez le connecteur (relation + effet), façon concours :\n« Les preuves manquent. Néanmoins, le juge a tranché. »",
    reponseType:
      "« Néanmoins » : connecteur d'**opposition / concession**. Il indique que la décision a été prise *malgré* l'absence de preuves, articulant les deux propositions en contraste et soulignant le caractère discutable de la décision. (Formule : nommer la relation, puis interpréter l'effet.)",
    explication: [],
  },
  {
    id: "fr-14-exo-c4",
    notion: "fr-14",
    savoirFaire: ["progression-thematique"],
    difficulte: 2,
    question:
      "Nommez la progression :\na) « La forêt était dense. Cette densité gênait la marche. La marche devint épuisante. »\nb) « La maison était vaste. Le salon donnait sur le parc. Les chambres dominaient la mer. »",
    reponseType:
      "a) progression **linéaire** : le rhème d'une phrase devient le thème de la suivante (densité → marche, en cascade).\nb) progression à **thèmes dérivés** : un hyperthème (« la maison ») se décline en aspects (salon, chambres).",
    explication: [],
  },
  {
    id: "fr-14-exo-c5",
    notion: "fr-14",
    savoirFaire: ["pronoms"],
    difficulte: 2,
    question:
      "Pourquoi cette phrase manque-t-elle de cohérence ? Corrigez :\n« Paul a dit à Marc qu'il avait tort. »",
    reponseType:
      "Le pronom « il » a un **antécédent ambigu** : il peut renvoyer à Paul ou à Marc. La cohérence référentielle exige un référent identifiable. Correction : « Paul a dit à Marc que **ce dernier** avait tort » (ou « que lui, Paul, avait tort »).",
    explication: [],
  },
  {
    id: "fr-14-exo-c6",
    notion: "fr-14",
    savoirFaire: ["connecteurs"],
    difficulte: 2,
    question:
      "Distinguez la nuance de chaque connecteur :\na) « Il est parti car il était tard. »\nb) « Il est parti ; en effet, il était tard. »\nc) « Il est parti ; c'est pourquoi tout est calme. »",
    reponseType:
      "a) « car » : **cause** (justification).\nb) « en effet » : **explication / confirmation** (il appuie l'assertion précédente).\nc) « c'est pourquoi » : **conséquence**.\nCause, explication et conséquence sont proches mais distinctes.",
    explication: [],
  },
  {
    id: "fr-14-exo-c7",
    notion: "fr-14",
    savoirFaire: ["temps-verbaux"],
    difficulte: 2,
    question:
      "Expliquez en quoi les temps assurent la cohérence :\n« Quand il aura fini, il rangera, puis il sortira. »",
    reponseType:
      "Le **futur antérieur** (« aura fini ») marque une action achevée **avant** les futurs simples qui suivent (« rangera », « sortira »). La concordance des temps ordonne les actions dans le temps et assure la cohésion du passage.",
    explication: [],
  },
  {
    id: "fr-14-exo-c8",
    notion: "fr-14",
    savoirFaire: ["ponctuation"],
    difficulte: 2,
    question:
      "Justifiez la ponctuation et son rôle dans la cohésion :\n« Le ciel s'assombrit ; les oiseaux se turent ; la pluie commença. »",
    reponseType:
      "Les **points-virgules** relient trois propositions de même rang dans une progression : ils marquent une succession liée par le sens, plus unie que des points, plus séparée que des virgules. La ponctuation construit ici la cohésion du tableau.",
    explication: [],
  },
  {
    id: "fr-14-exo-c9",
    notion: "fr-14",
    savoirFaire: ["reprises-nominales", "pronoms"],
    difficulte: 2,
    question:
      "Améliorez la cohésion en variant les reprises :\n« Le renard vit le corbeau. Le renard flatta le corbeau. Le renard mangea le fromage. »",
    reponseType:
      "Remplacer les répétitions par des reprises variées : « Le renard vit le corbeau. **Il** le flatta. **Le rusé animal** finit par manger le fromage. »\nAlterner reprises pronominales (« il », « le ») et nominales infidèles (« le rusé animal ») évite la répétition et fluidifie le texte.",
    explication: [],
  },
  {
    id: "fr-14-exo-c10",
    notion: "fr-14",
    savoirFaire: ["connecteurs"],
    difficulte: 2,
    question:
      "Corrigez l'emploi fautif et nommez la relation :\n« Malgré qu'il soit tard, il continue. »",
    reponseType:
      "« Malgré que » est à **éviter à l'écrit** (tournure critiquée). On écrit « **Bien qu'**il soit tard, il continue » ou « **Malgré** l'heure tardive, il continue ». La relation exprimée est la **concession**.",
    explication: [],
  },

  // ————————————————————————— Expert (au-delà de l'épreuve) —————————————————————————
  {
    id: "fr-14-exo-e1",
    notion: "fr-14",
    savoirFaire: ["reprises-nominales", "pronoms"],
    difficulte: 3,
    question:
      "Analysez la chaîne de reprises et ce qu'elle révèle du point de vue :\n« L'accusé entra. L'homme tremblait. Le misérable osa lever les yeux. La pauvre créature attendait son sort. »",
    reponseType:
      "Chaîne : « L'accusé » (neutre, juridique) → « L'homme » (générique neutre) → « Le misérable » (connotation compatissante) → « La pauvre créature » (connotation nettement apitoyée). L'**évolution** des reprises, du neutre à l'apitoiement, trahit un **point de vue** de plus en plus compatissant du narrateur. Les reprises ne sont pas neutres : elles portent un regard.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : montrer que le choix des reprises construit un point de vue (et pas seulement la cohésion) est un raisonnement valorisé.",
      },
    ],
  },
  {
    id: "fr-14-exo-e2",
    notion: "fr-14",
    savoirFaire: ["progression-thematique"],
    difficulte: 3,
    question:
      "Ce texte mêle deux progressions. Identifiez-les :\n« La ville était animée. Ses rues grouillaient de monde. Cette foule rendait la circulation difficile, si bien que les voitures avançaient au pas. »",
    reponseType:
      "Début : progression à **thèmes dérivés** (« la ville » → « ses rues », un aspect du tout).\nPuis progression **linéaire** : le rhème devient thème (« la foule » → « cette foule » → circulation difficile → voitures au pas, en cascade).\nUn texte réel combine souvent plusieurs types de progression.",
    explication: [],
  },
  {
    id: "fr-14-exo-e3",
    notion: "fr-14",
    savoirFaire: ["temps-verbaux"],
    difficulte: 3,
    question:
      "Pourquoi ce passage est-il incohérent au plan temporel ? Corrigez :\n« Il entra dans la pièce. Il fait sombre. Il alluma la lumière. »",
    reponseType:
      "Rupture : le présent « fait » brise le système du récit au passé (« entra », « alluma »). La cohérence temporelle exige un système homogène : « Il **faisait** sombre » (imparfait de description, arrière-plan), qui s'accorde avec les passés simples de premier plan.",
    explication: [],
  },
  {
    id: "fr-14-exo-e4",
    notion: "fr-14",
    savoirFaire: ["connecteurs"],
    difficulte: 3,
    question:
      "Rétablissez les connecteurs qui structurent l'argumentation et nommez chaque relation :\n« ___ certains pensent que la technique nuit. ___, elle a sauvé des vies. ___, elle est ambivalente. »",
    reponseType:
      "« **Certes / Sans doute** certains pensent que la technique nuit » (concession) ; « **Mais / Cependant**, elle a sauvé des vies » (opposition / réfutation) ; « **Donc / Ainsi**, elle est ambivalente » (conclusion).\nLes connecteurs balisent le mouvement concession → objection → conclusion d'un raisonnement.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : repérer que les connecteurs dessinent le plan argumentatif (et pas seulement des liens locaux) est exactement ce qu'on attend dans l'analyse d'un texte d'idées.",
      },
    ],
  },
  {
    id: "fr-14-exo-e5",
    notion: "fr-14",
    savoirFaire: ["reprises-nominales", "connecteurs"],
    difficulte: 3,
    question:
      "Ce texte est cohésif (bien lié) mais incohérent (absurde). Expliquez la différence :\n« Mon chat est malade. Donc je l'ai emmené au cinéma. Ensuite, il a guéri grâce au film. »",
    reponseType:
      "La **cohésion** est assurée (connecteurs « donc », « ensuite » ; reprises « l' », « il » correctes). Mais la **cohérence** manque : les enchaînements logiques sont absurdes (emmener un chat malade au cinéma, guérir par un film). Un texte peut donc être bien lié en surface (cohésion) sans faire sens (cohérence) : ce sont deux niveaux distincts.",
    explication: [],
  },
];
