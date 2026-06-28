// Banque d'exercices OUVERTS, notion 08 « Les temps du passé ».
//
// Migration de structure : exercices repris depuis l'onglet « Application » v1,
// sans réécriture pédagogique. Le fond sera repris dans un chantier ultérieur.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_TEMPS_DU_PASSE: TrainerExercice[] = [
  // TODO refonte exo
  {
    id: "fr-08-exo-01",
    notion: "fr-08",
    savoirFaire: ["imparfait","passe-compose","valeurs"],
    difficulte: 1,
    question: "Donnez la valeur de l'imparfait :\na) « Ce soir-là, ma mère regardait les enfants jouer. »   b) « Chaque soir, il rentrait seul. »   c) « Elle lisait quand il arriva. »   d) « Je voulais vous demander un service. »   e) « Si elle venait demain, je serais heureux. »",
    reponseType: "a) Description (action en cours, décor affectif)\n\nb) Habitude (action répétée, signalée par « chaque soir »)\n\nc) Action en cours interrompue (par « arriva », passé simple)\n\nd) Politesse (atténuation de la demande)\n\ne) Hypothèse (la venue est envisagée ; le contexte ne permet pas de la déclarer irréelle)",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-08-exo-02",
    notion: "fr-08",
    savoirFaire: ["imparfait","passe-simple","passe-compose","valeurs"],
    difficulte: 1,
    question: "Donnez la valeur du passé simple :\na) « Une femme passa. »   b) « Elle posa son livre, regarda, se leva. »   c) « Elle lisait quand il arriva. »",
    reponseType: "a) Action délimitée (événement ponctuel, surgissement)\n\nb) Succession (trois actions enchaînées chronologiquement)\n\nc) Rupture (interrompt l'action en cours à l'imparfait)",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-08-exo-03",
    notion: "fr-08",
    savoirFaire: ["passe-simple","passe-compose","valeurs"],
    difficulte: 1,
    question: "Donnez la valeur du passé composé :\na) « Depuis ce jour, je n'ai jamais oublié cette scène. »   b) « Je suis entré, j'ai posé mon sac et je me suis assis. »   c) « Il a fini son travail : il peut partir. »",
    reponseType: "a) Lien avec le présent : le souvenir se prolonge jusqu'au moment de l'énonciation.\n\nb) Temps du récit : les passés composés enchaînent les événements de premier plan.\n\nc) Accompli avec résultat présent : le travail terminé permet de partir maintenant.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-08-exo-04",
    notion: "fr-08",
    savoirFaire: ["passe-compose","valeurs"],
    difficulte: 1,
    question: "Appuyez-vous sur les marqueurs du contexte :\na) « Ce soir-là, elle se hâtait. »   b) « Chaque soir, elle se hâtait. »   c) « Pendant le repas, elle ne disait rien. »   d) « À cette époque, elle ne disait jamais rien. »",
    reponseType: "a) Description d'une action en cours dans une scène unique, signalée par « ce soir-là ».\n\nb) Habitude, signalée par « chaque soir ».\n\nc) Description d'un comportement pendant une scène précise, délimitée par « pendant le repas ».\n\nd) Habitude, signalée par « à cette époque » et « jamais ».",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-08-exo-05",
    notion: "fr-08",
    savoirFaire: ["imparfait","passe-simple","passe-compose","plus-que-parfait","valeurs"],
    difficulte: 2,
    question: "Rédigez la réponse jury complète :\na) « Ce soir-là, ma mère regardait les enfants jouer. »   b) « Une femme passa. »   c) « Depuis ce jour, je n'ai jamais oublié cette scène. »   d) « Elle avait relu sa lettre avant de la poster. »",
    reponseType: "a) « regardait » est à l'imparfait de l'indicatif, valeur descriptive : il exprime une action en cours dans le passé qui forme le décor affectif de la scène.\n\nb) « passa » est au passé simple de l'indicatif, valeur d'action délimitée : il exprime un événement ponctuel qui ouvre le récit.\n\nc) « n'ai jamais oublié » est au passé composé de l'indicatif, valeur de lien avec le présent : l'oubli nié se prolonge jusqu'au moment de l'énonciation.\n\nd) « avait relu » est au plus-que-parfait de l'indicatif, valeur d'antériorité : il exprime une action accomplie avant un autre moment du passé.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-08-exo-06",
    notion: "fr-08",
    savoirFaire: ["passe-compose","plus-que-parfait"],
    difficulte: 2,
    question: "Placez chaque verbe dans l'ordre chronologique et expliquez l'antériorité :\n« Elle avait relu sa lettre, puis la posta et sortit sans se retourner. »",
    reponseType: "① avait relu (plus-que-parfait) : antérieur aux deux actions suivantes.\n\n② posta (passé simple) : premier événement.\n\n③ sortit (passé simple) : second événement.",
    explication: [
      { type: "note", text: "Le plus-que-parfait place « relire » avant le moment de référence du récit. Le connecteur « puis » ordonne ensuite les deux actions au passé simple." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-08-exo-07",
    notion: "fr-08",
    savoirFaire: ["imparfait","passe-compose","plus-que-parfait","valeurs"],
    difficulte: 2,
    question: "Ces analyses sont-elles correctes ? Corrigez si nécessaire :\na) Dans « Ce soir-là, elle regardait les enfants », « regardait » a une valeur d'habitude.   b) Dans « Chaque soir, elle se hâtait », « se hâtait » a une valeur descriptive.   c) « avait relu » est un passé composé à valeur d'accompli.   d) Dans « Pendant le repas, elle souriait et ne disait rien », les deux imparfaits ont la même valeur.",
    reponseType: "a) Faux : « ce soir-là » situe une scène unique ; « regardait » décrit une action en cours.\n\nb) Faux : « chaque soir » marque la répétition ; « se hâtait » exprime une habitude.\n\nc) Double erreur : c'est un plus-que-parfait (auxiliaire « avait »), valeur d'antériorité.\n\nd) Correct : dans cette scène précise, « souriait » et « ne disait rien » décrivent deux états ou comportements en cours.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-08-exo-08",
    notion: "fr-08",
    savoirFaire: ["imparfait","passe-simple","passe-compose"],
    difficulte: 2,
    question: "Réécrivez en remplaçant les passés simples par des imparfaits, puis proposez deux effets de lecture possibles :\n« Soudain, la porte s'ouvrit. Elle posa son livre, regarda autour d'elle, se leva. »",
    reponseType: "« Soudain, la porte s'ouvrait. Elle posait son livre, regardait autour d'elle, se levait. »",
    explication: [
      { type: "note", text: "Deux lectures sont possibles. Les imparfaits peuvent donner une impression de répétition ou de déroulement ralenti. Avec « soudain », « s'ouvrait » peut aussi être un imparfait narratif : l'événement ponctuel est mis en relief comme s'il se déroulait sous les yeux du lecteur." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-08-exo-09",
    notion: "fr-08",
    savoirFaire: ["imparfait","passe-simple","passe-compose","valeurs"],
    difficulte: 3,
    enonce: "« Une femme passa, tenant par la main un petit garçon. Elle se hâtait, les yeux baissés, pressée d'atteindre sa maison avant la nuit. »",
    question: "Rédigez la réponse jury pour « passa » et « se hâtait », et commentez leur opposition.",
    reponseType: "« passa » est au passé simple de l'indicatif, valeur d'action délimitée : il fait surgir la femme dans le récit (premier plan).\n\n« se hâtait » est à l'imparfait de l'indicatif, valeur descriptive : il présente une action en cours à l'arrière-plan.",
    explication: [
      { type: "note", text: "Opposition : le passé simple ouvre la scène et fait avancer le récit ; l'imparfait décrit l'action en cours à l'arrière-plan." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-08-exo-10",
    notion: "fr-08",
    savoirFaire: ["imparfait","passe-compose","valeurs"],
    difficulte: 3,
    enonce: "« Ce soir-là, ma mère, dont le regard ne vieillissait pas, regardait les enfants jouer dans le jardin. Elle souriait, muette, heureuse, et ne disait rien. »",
    question: "Rédigez la réponse jury pour « vieillissait », « regardait », « souriait », « disait », et commentez l'emploi exclusif de l'imparfait.",
    reponseType: "Verbe | Temps · valeur\n--- | ---\nvieillissait | Imparfait, valeur descriptive (propriété permanente dans le passé)\nregardait | Imparfait, valeur descriptive (action en cours, décor affectif)\nsouriait | Imparfait, valeur descriptive (état en cours, portrait)\ndisait | Imparfait, valeur descriptive (comportement pendant cette scène)",
    explication: [
      { type: "note", text: "Les imparfaits présentent les propriétés, actions et comportements sans en montrer les limites. Le repère « ce soir-là » inscrit l'ensemble dans une scène précise." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-08-exo-11",
    notion: "fr-08",
    savoirFaire: ["imparfait","passe-compose","valeurs"],
    difficulte: 3,
    enonce: "« Il aimait les promenades solitaires dans les bois et, chaque soir d'automne, quand il rentrait seul, il sentait le vide de sa vie s'étendre autour de lui. »",
    question: "Rédigez la réponse jury pour « aimait », « rentrait », « sentait », et commentez l'effet de l'imparfait exclusif.",
    reponseType: "Verbe | Temps · valeur\n--- | ---\naimait | Imparfait, valeur descriptive (goût ou état durable)\nrentrait | Imparfait, valeur d'habitude (action répétée)\nsentait | Imparfait, valeur d'habitude (perception répétée à chaque retour)",
    explication: [
      { type: "note", text: "Le contexte distingue les valeurs : « aimait » décrit un état durable ; « chaque soir » donne à « rentrait » et « sentait » une valeur d'habitude. L'emploi exclusif de l'imparfait présente ici un état et des faits répétés, sans événement ponctuel de premier plan." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-08-exo-12",
    notion: "fr-08",
    savoirFaire: ["imparfait","passe-compose","valeurs"],
    difficulte: 3,
    enonce: "« À seize ans, j'ai vu se rouvrir les portes qui me séparaient du monde : je suis monté sur la terrasse du palais pour regarder les nuages, mais ils étaient moins beaux que ceux de tes crépuscules. »\n*(Marguerite Yourcenar, « Comment Wang-Fô fut sauvé », Nouvelles orientales)*",
    question: "Rédigez la réponse jury pour « ai vu », « séparaient », « suis monté », « étaient », et commentez le système des temps.",
    reponseType: "Verbe | Temps · valeur\n--- | ---\nai vu | Passé composé, temps du récit (événement de premier plan)\nséparaient | Imparfait, valeur descriptive (état passé durable)\nsuis monté | Passé composé, temps du récit (événement de premier plan)\nétaient | Imparfait, valeur descriptive (constat, nuance de déception)",
    explication: [
      { type: "note", text: "Les passés composés portent les événements successifs du récit ; les imparfaits décrivent des états ou propriétés à l'arrière-plan." },
    ],
  },
];
