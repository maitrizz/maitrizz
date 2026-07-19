// Banque d'exercices OUVERTS, notion 08 « Les temps du passé ».
//
// CHANTIER 2 (refonte façon Grévisse, DOCTRINE_EXERCICES.md) : exercices réécrits.
// 3 niveaux : Fondamentaux · Concours (la cible) · Expert (au-delà : imparfait
// contrefactuel, passé surcomposé, discours indirect libre, passé antérieur).
// Périmètre : NOMMER LA VALEUR / l'emploi des temps du passé (la « formule jury »)
// et commenter le système imparfait/passé simple. La morphologie/identification
// relève de la notion 07.
// 6 savoir-faire : imparfait · passé simple · passé composé · plus-que-parfait
// · valeurs des temps · concordance.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_TEMPS_DU_PASSE: TrainerExercice[] = [
  // ————————————————————————— Fondamentaux —————————————————————————
  {
    id: "fr-08-exo-f1",
    notion: "fr-08",
    savoirFaire: ["imparfait", "valeurs"],
    difficulte: 1,
    question:
      "Donnez la valeur précise de l'imparfait :\na) « Il faisait nuit, le vent soufflait. »\nb) « Chaque été, nous allions à la mer. »",
    reponseType:
      "a) imparfait de **description** (décor, arrière-plan d'une scène).\nb) imparfait d'**habitude** (action répétée dans le passé, signalée par « chaque été »).",
    explication: [],
  },
  {
    id: "fr-08-exo-f2",
    notion: "fr-08",
    savoirFaire: ["passe-simple", "valeurs"],
    difficulte: 1,
    question:
      "Donnez la valeur du passé simple :\na) « Il ouvrit la porte, entra, s'assit. »\nb) « Soudain, un cri retentit. »",
    reponseType:
      "a) **succession** d'actions de premier plan (elles s'enchaînent).\nb) **rupture** : action ponctuelle qui surgit et fait avancer le récit.",
    explication: [],
  },
  {
    id: "fr-08-exo-f3",
    notion: "fr-08",
    savoirFaire: ["imparfait", "passe-simple"],
    difficulte: 1,
    question:
      "Quel temps est en arrière-plan, lequel fait avancer l'action ?\n« Il dormait quand le téléphone sonna. »",
    reponseType:
      "« dormait » : imparfait, **arrière-plan** (situation en cours, durée). « sonna » : passé simple, **premier plan** (événement ponctuel qui survient). L'imparfait pose le cadre, le passé simple l'événement.",
    explication: [],
  },
  {
    id: "fr-08-exo-f4",
    notion: "fr-08",
    savoirFaire: ["passe-compose", "valeurs"],
    difficulte: 1,
    question:
      "Donnez la valeur du passé composé :\na) « J'ai fini mes devoirs, je peux jouer. »\nb) « Hier, il a plu toute la journée. »",
    reponseType:
      "a) **accompli** relié au présent (le résultat vaut maintenant).\nb) **action passée datée** (passé composé substitut du passé simple, registre courant).",
    explication: [],
  },
  {
    id: "fr-08-exo-f5",
    notion: "fr-08",
    savoirFaire: ["plus-que-parfait", "valeurs"],
    difficulte: 1,
    question:
      "Donnez la valeur du plus-que-parfait :\n« Quand je suis arrivé, il était déjà parti. »",
    reponseType:
      "**antériorité** : « était parti » exprime une action accomplie **avant** une autre action passée (« suis arrivé »). Le plus-que-parfait situe un fait avant un autre fait passé.",
    explication: [],
  },
  {
    id: "fr-08-exo-f6",
    notion: "fr-08",
    savoirFaire: ["passe-compose", "plus-que-parfait"],
    difficulte: 1,
    question:
      "Donnez le temps et ce qu'il marque :\na) « Il a mangé. »\nb) « Il avait mangé avant de partir. »",
    reponseType:
      "a) **passé composé** (auxiliaire au présent « a »).\nb) **plus-que-parfait** (auxiliaire à l'imparfait « avait ») : marque l'antériorité par rapport à « partir ». L'auxiliaire décide du temps.",
    explication: [],
  },

  // ————————————————————————— Concours (la cible) —————————————————————————
  {
    id: "fr-08-exo-c1",
    notion: "fr-08",
    savoirFaire: ["imparfait", "valeurs"],
    difficulte: 2,
    question:
      "Rédigez la valeur de l'imparfait comme au concours (temps + valeur + justification) :\n« Il regardait la mer, songeur. »",
    reponseType:
      "« regardait » est un **imparfait de description** : il installe un arrière-plan et présente l'action sans bornes précises (ni début ni fin marqués), posant le décor de la scène. (Formule attendue : nommer le temps, la valeur, puis justifier par l'absence de délimitation.)",
    explication: [],
  },
  {
    id: "fr-08-exo-c2",
    notion: "fr-08",
    savoirFaire: ["imparfait", "valeurs"],
    difficulte: 2,
    question:
      "Ces deux imparfaits ont-ils la même valeur ? Justifiez :\na) « Le soleil se couchait sur la colline. »\nb) « Le dimanche, il se couchait tard. »",
    reponseType:
      "Non.\na) **description** : un moment unique, le décor d'une scène.\nb) **habitude** : action répétée, marquée par « le dimanche ».\nLe repère de répétition (« le dimanche ») signale l'habitude ; la scène unique signale la description. C'est le piège classique à éviter.",
    explication: [],
  },
  {
    id: "fr-08-exo-c3",
    notion: "fr-08",
    savoirFaire: ["passe-simple", "imparfait"],
    difficulte: 2,
    question:
      "**Prouvez, par une manipulation**, que les temps ne sont pas interchangeables :\n« Il lisait quand on frappa. »",
    reponseType:
      "« lisait » (imparfait) = action en cours, durée d'arrière-plan ; « frappa » (passé simple) = événement ponctuel qui l'interrompt. Manipulation : en inversant les temps (« Il lut quand on frappait »), le sens se brise (deux actions mal articulées, l'interruption disparaît). L'imparfait porte la durée, le passé simple l'événement : leur répartition n'est pas libre.",
    explication: [],
  },
  {
    id: "fr-08-exo-c4",
    notion: "fr-08",
    savoirFaire: ["imparfait", "passe-simple", "valeurs"],
    difficulte: 2,
    question:
      "Commentez l'emploi des temps dans ce récit (système imparfait / passé simple) :\n« La pluie tombait. Les rues étaient désertes. Soudain, une porte claqua et un homme surgit. »",
    reponseType:
      "« tombait », « étaient » : imparfaits d'**arrière-plan** (décor, situation durable). « claqua », « surgit » : passés simples de **premier plan** (événements ponctuels successifs qui déclenchent l'action). Le système oppose le **cadre** (imparfait) aux **événements** (passé simple) : c'est cette articulation qu'il faut commenter, pas chaque temps isolément.",
    explication: [],
  },
  {
    id: "fr-08-exo-c5",
    notion: "fr-08",
    savoirFaire: ["passe-compose", "valeurs"],
    difficulte: 2,
    question:
      "Donnez la valeur du passé composé :\na) « La science a beaucoup progressé. »\nb) « Napoléon est mort en 1821. »\nc) « J'ai compris, tu peux continuer. »",
    reponseType:
      "a) **bilan** relié au présent (un résultat qui vaut aujourd'hui).\nb) **passé daté**, substitut du passé simple (registre courant).\nc) **accompli immédiat** (l'action vient de s'achever, effet présent).",
    explication: [],
  },
  {
    id: "fr-08-exo-c6",
    notion: "fr-08",
    savoirFaire: ["plus-que-parfait", "valeurs"],
    difficulte: 2,
    question:
      "Donnez la valeur du plus-que-parfait :\na) « Il pleuvait ; le sol avait gelé pendant la nuit. »\nb) « Si tu m'avais prévenu, je serais venu. »",
    reponseType:
      "a) **antériorité** : le gel est antérieur à la scène décrite à l'imparfait.\nb) **irréel du passé** : dans le système hypothétique « si + plus-que-parfait », la condition n'a pas été réalisée (tu ne m'as pas prévenu).",
    explication: [],
  },
  {
    id: "fr-08-exo-c7",
    notion: "fr-08",
    savoirFaire: ["concordance"],
    difficulte: 2,
    question:
      "Mettez les verbes au temps du récit passé qui convient et nommez-les :\n« Il (comprendre) à ce moment que la nuit (tomber) déjà. »",
    reponseType:
      "« Il **comprit** (passé simple : l'événement) que la nuit **était** déjà **tombée** (plus-que-parfait : antériorité). » La concordance place l'action antérieure (la nuit tombée) avant l'événement principal du récit.",
    explication: [],
  },
  {
    id: "fr-08-exo-c8",
    notion: "fr-08",
    savoirFaire: ["imparfait", "valeurs"],
    difficulte: 2,
    question:
      "Donnez la valeur de l'imparfait (attention : il ne renvoie pas au passé) :\na) « Je voulais vous demander un service. »\nb) « Si on partait maintenant ? »",
    reponseType:
      "a) imparfait de **politesse** (atténuation : « je veux » adouci par mise à distance).\nb) imparfait de **suggestion / hypothèse** (proposition atténuée).\nCe sont des valeurs **modales** de l'imparfait : aucune des deux phrases ne se rapporte au passé.",
    explication: [],
  },
  {
    id: "fr-08-exo-c9",
    notion: "fr-08",
    savoirFaire: ["imparfait", "valeurs"],
    difficulte: 2,
    question:
      "Quelle est la valeur de l'imparfait, alors qu'on attendrait un passé simple ?\n« Le 3 septembre 1939, la guerre éclatait. »",
    reponseType:
      "**imparfait narratif** (ou de perspective) : il présente un événement ponctuel daté comme le ferait un passé simple, mais avec un effet de **mise en relief / ralenti** (le narrateur fait durer l'instant, le souligne). C'est un emploi stylistique fréquent dans le récit et le journalisme.",
    explication: [],
  },
  {
    id: "fr-08-exo-c10",
    notion: "fr-08",
    savoirFaire: ["imparfait", "passe-simple", "valeurs"],
    difficulte: 2,
    question:
      "Donnez le temps et la valeur de chaque verbe :\n« Elle marchait vite ; tout à coup, elle s'arrêta net : une silhouette se tenait là. »",
    reponseType:
      "- « marchait » : imparfait, action en cours d'arrière-plan.\n- « s'arrêta » : passé simple, **rupture** (événement ponctuel).\n- « se tenait » : imparfait de **description** (le décor révélé, arrière-plan).\nLe passé simple porte l'événement, les imparfaits l'encadrent.",
    explication: [],
  },

  // ————————————————————————— Expert (au-delà de l'épreuve) —————————————————————————
  {
    id: "fr-08-exo-e1",
    notion: "fr-08",
    savoirFaire: ["imparfait", "valeurs"],
    difficulte: 3,
    question:
      "Analysez la valeur, particulièrement marquée, de l'imparfait :\n« Une seconde de plus et la bombe explosait. »",
    reponseType:
      "imparfait **contrefactuel** (d'imminence contrariée) : l'action **ne s'est pas produite**, mais elle a été sur le point de l'être. Cet imparfait présente comme presque réel un fait qui n'a pas eu lieu. C'est une valeur modale, à distinguer nettement des emplois temporels (description, habitude).",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : nommer précisément la valeur (imparfait contrefactuel) et signaler que le fait n'a pas eu lieu évite le piège n°1 (valeur trop vague).",
      },
    ],
  },
  {
    id: "fr-08-exo-e2",
    notion: "fr-08",
    savoirFaire: ["passe-compose"],
    difficulte: 3,
    question:
      "Identifiez ce temps rare et sa valeur :\n« Quand il a eu fini de parler, tout le monde applaudit. »",
    reponseType:
      "« a eu fini » : **passé surcomposé** (double auxiliaire « a eu » + participe). Il marque l'**antériorité immédiate** par rapport à un autre passé (ici un passé simple), comme le plus-que-parfait le fait pour l'imparfait. Emploi de registre courant, surtout dans les subordonnées de temps (« quand, dès que »).",
    explication: [],
  },
  {
    id: "fr-08-exo-e3",
    notion: "fr-08",
    savoirFaire: ["imparfait", "passe-simple", "valeurs"],
    difficulte: 3,
    question:
      "Commentez le système des temps de ce récit et l'effet produit :\n« Le soir tombait. Hélène rêvait à la fenêtre. Un cavalier passa, la salua, disparut. Elle ne bougea pas. »",
    reponseType:
      "Imparfaits (« tombait », « rêvait ») : arrière-plan, durée, état d'âme (décor + situation psychologique). Passés simples (« passa », « salua », « disparut », « ne bougea pas ») : événements ponctuels successifs de premier plan. L'effet : l'événement (le cavalier) surgit sur fond de rêverie immobile, et la dernière phrase au passé simple souligne par contraste l'**absence de réaction**. Commenter ce contraste vaut mieux que d'étiqueter chaque temps isolément.",
    explication: [],
  },
  {
    id: "fr-08-exo-e4",
    notion: "fr-08",
    savoirFaire: ["concordance", "imparfait"],
    difficulte: 3,
    question:
      "Expliquez l'emploi de l'imparfait et du conditionnel dans ce passage au discours indirect libre :\n« Il hésitait. Partirait-il ? Demain, il prendrait sa décision. »",
    reponseType:
      "Au **discours indirect libre**, les pensées du personnage sont rapportées sans verbe introducteur. L'imparfait (« hésitait ») et surtout le **conditionnel** (« partirait », « prendrait » = futur dans le passé) transposent au passé ce qui serait, au style direct, un présent et un futur (« J'hésite. Est-ce que je pars ? Demain, je prendrai ma décision »). La concordance avec un récit passé impose ces temps.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : repérer le discours indirect libre (absence de verbe introducteur + temps reculés) est un point d'analyse valorisé, à relier à la notion 15 (énonciation).",
      },
    ],
  },
  {
    id: "fr-08-exo-e5",
    notion: "fr-08",
    savoirFaire: ["passe-simple"],
    difficulte: 3,
    question:
      "Identifiez les deux temps et leur rapport :\n« Quand il eut terminé, il se leva. »",
    reponseType:
      "« eut terminé » : **passé antérieur** (auxiliaire au passé simple + participe) ; « se leva » : **passé simple**. Le passé antérieur marque l'**antériorité immédiate** par rapport au passé simple, dans un récit soutenu (souvent après « quand, dès que, lorsque »). Il est au passé simple ce que le plus-que-parfait est à l'imparfait.",
    explication: [],
  },
];
