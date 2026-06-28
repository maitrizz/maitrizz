// Banque d'exercices OUVERTS, notion 07 « Modes et temps ».
//
// Migration de structure : exercices repris depuis l'onglet « Application » v1,
// sans réécriture pédagogique. Le fond sera repris dans un chantier ultérieur.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_MODES_ET_TEMPS: TrainerExercice[] = [
  // TODO refonte exo
  {
    id: "fr-07-exo-01",
    notion: "fr-07",
    savoirFaire: ["modes-personnels","temps-simples-composes","valeurs-temporelles"],
    difficulte: 1,
    question: "Identifiez le mode et le temps de chaque verbe souligné :\na) « Une femme <u>passa</u>. »   b) « Ma mère <u>regardait</u> les enfants. »   c) « On <u>écrit</u>. »   d) « Il faut qu'elle <u>vienne</u>. »   e) « Si elle venait, je <u>serais</u> heureux. »",
    reponseType: "Verbe | Mode | Temps\n--- | --- | ---\npassa | Indicatif | Passé simple\nregardait | Indicatif | Imparfait\nécrit | Indicatif | Présent\nvienne | Subjonctif | Présent\nserais | Indicatif | Conditionnel présent",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-07-exo-02",
    notion: "fr-07",
    savoirFaire: ["modes-personnels"],
    difficulte: 1,
    question: "Appliquez le test « nous » :\na) « Elle serait malade. »   b) « Elle était fatiguée. »   c) « Il viendrait si on l'invitait. »   d) « Il venait souvent. »   e) « Ce médicament réduirait les risques. »",
    reponseType: "a) « nous serions » → -rions → conditionnel présent\n\nb) « nous étions » → -ions sans « r » → imparfait\n\nc) « nous viendrions » → -rions → conditionnel présent\n\nd) « nous venions » → -ions sans « r » → imparfait\n\ne) « nous réduirions » → -rions → conditionnel présent",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-07-exo-03",
    notion: "fr-07",
    savoirFaire: ["temps-simples-composes","valeurs-temporelles"],
    difficulte: 1,
    question: "Justifiez par l'auxiliaire :\na) « j'ai vu se rouvrir les portes. »   b) « Elle avait relu sa lettre. »   c) « je suis monté sur la terrasse. »   d) « il était parti avant son arrivée. »",
    reponseType: "a) « ai » = présent de avoir → passé composé\n\nb) « avait » = imparfait de avoir → plus-que-parfait\n\nc) « suis » = présent de être → passé composé\n\nd) « était » = imparfait de être → plus-que-parfait",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-07-exo-04",
    notion: "fr-07",
    savoirFaire: ["modes-personnels","valeurs-modales"],
    difficulte: 1,
    question: "Justifiez par le contexte :\na) « Il faut qu'il vienne. »   b) « Je sais qu'il vient. »   c) « bien qu'elle soit fatiguée »   d) « Je crois qu'elle part demain. »",
    reponseType: "a) Subjonctif (« il faut que » : nécessité) → « vienne »\n\nb) Indicatif (« je sais que » : certitude) → « vient »\n\nc) Subjonctif (« bien que » : concession) → « soit »\n\nd) Indicatif (« je crois que » : opinion présentée comme réelle) → « part »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-07-exo-05",
    notion: "fr-07",
    savoirFaire: ["modes-personnels","modes-non-personnels","temps-simples-composes","valeurs-temporelles"],
    difficulte: 2,
    question: "Donnez l'infinitif, le mode et le temps de chaque forme :\na) « fut »   b) « vint »   c) « fit »   d) « put »   e) « sut »   f) « prit »",
    reponseType: "Forme | Infinitif | Mode · Temps\n--- | --- | ---\nfut | être | Indicatif · passé simple\nvint | venir | Indicatif · passé simple\nfit | faire | Indicatif · passé simple\nput | pouvoir | Indicatif · passé simple\nsut | savoir | Indicatif · passé simple\nprit | prendre | Indicatif · passé simple",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-07-exo-06",
    notion: "fr-07",
    savoirFaire: ["modes-personnels","temps-simples-composes","valeurs-temporelles"],
    difficulte: 2,
    question: "Identifiez le mode et le temps (attention à l'auxiliaire) :\na) « ils étaient moins beaux »   b) « j'ai vu se rouvrir »   c) « je suis monté »   d) « elle avait relu sa lettre »   e) « j'aurais voulu vous écrire »",
    reponseType: "Verbe | Mode · Temps | Auxiliaire\n--- | --- | ---\nétaient | Indicatif · imparfait | Forme simple\nai vu | Indicatif · passé composé | « ai » = présent de avoir\nsuis monté | Indicatif · passé composé | « suis » = présent de être\navait relu | Indicatif · plus-que-parfait | « avait » = imparfait de avoir\naurais voulu | Indicatif · conditionnel passé | « aurais » = avoir au conditionnel présent",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-07-exo-07",
    notion: "fr-07",
    savoirFaire: ["modes-personnels","temps-simples-composes","valeurs-temporelles"],
    difficulte: 2,
    question: "Ces analyses sont-elles correctes ? Corrigez si nécessaire :\na) « serait » → indicatif imparfait   b) « avait vu » → passé composé   c) « vienne » (après « bien que ») → indicatif présent   d) « fut » → futur simple",
    reponseType: "a) Faux : test « nous serions » (-rions, avec « r ») → conditionnel présent, pas imparfait.\n\nb) Faux : auxiliaire « avait » (imparfait) → plus-que-parfait.\n\nc) Faux : « bien que » impose le subjonctif → subjonctif présent.\n\nd) Faux : « fut » = passé simple de être ; le futur est « sera ».",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-07-exo-08",
    notion: "fr-07",
    savoirFaire: ["modes-personnels","modes-non-personnels","temps-simples-composes","valeurs-temporelles"],
    difficulte: 2,
    question: "Distinguez les deux « vit » et proposez un contexte pour chacun.",
    reponseType: "Forme | Infinitif | Mode · Temps | Contexte\n--- | --- | --- | ---\nvit | vivre | Indicatif · présent | « Il vit à Paris depuis dix ans. »\nvit | voir | Indicatif · passé simple | « Il vit la femme traverser la rue. »",
    explication: [
      { type: "note", text: "💡 Seul le contexte tranche : récit au passé et événement ponctuel → passé simple de voir ; situation durable → présent de vivre." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-07-exo-09",
    notion: "fr-07",
    savoirFaire: ["modes-personnels","temps-simples-composes","valeurs-temporelles"],
    difficulte: 3,
    enonce: "« Une femme passa, tenant par la main un petit garçon. Elle se hâtait, les yeux baissés, pressée d'atteindre sa maison. »",
    question: "Relevez tous les verbes conjugués et donnez leur mode et leur temps.",
    reponseType: "Verbe | Mode | Temps\n--- | --- | ---\npassa | Indicatif | Passé simple\nse hâtait | Indicatif | Imparfait",
    explication: [
      { type: "note", text: "⚠️ « tenant », « baissés », « pressée » et « atteindre » sont des formes non conjuguées : elles ne font pas partie du relevé demandé." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-07-exo-10",
    notion: "fr-07",
    savoirFaire: ["modes-personnels","modes-non-personnels","valeurs-temporelles","valeurs-modales"],
    difficulte: 3,
    enonce: "« Ma mère, dont le regard ne vieillissait pas, regardait les enfants jouer dans le jardin. Elle souriait, muette, heureuse, et ne disait rien. »",
    question: "Relevez tous les verbes conjugués et donnez leur mode et leur temps.",
    reponseType: "Verbe | Mode | Temps\n--- | --- | ---\nvieillissait | Indicatif | Imparfait\nregardait | Indicatif | Imparfait\nsouriait | Indicatif | Imparfait\ndisait | Indicatif | Imparfait",
    explication: [
      { type: "note", text: "💡 « jouer » est un infinitif : cette forme non conjuguée ne fait pas partie du relevé. La valeur des imparfaits est traitée dans les notions 7 et 8." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-07-exo-11",
    notion: "fr-07",
    savoirFaire: ["modes-personnels","modes-non-personnels","valeurs-temporelles"],
    difficulte: 3,
    enonce: "« À seize ans, j'ai vu se rouvrir les portes qui me séparaient du monde : je suis monté sur la terrasse du palais pour regarder les nuages, mais ils étaient moins beaux que ceux de tes crépuscules. »\n*(Marguerite Yourcenar, « Comment Wang-Fô fut sauvé », Nouvelles orientales)*",
    question: "Relevez tous les verbes conjugués et donnez leur mode et leur temps.",
    reponseType: "Verbe | Mode | Temps\n--- | --- | ---\nai vu | Indicatif | Passé composé\nséparaient | Indicatif | Imparfait\nsuis monté | Indicatif | Passé composé\nétaient | Indicatif | Imparfait",
    explication: [
      { type: "note", text: "💡 « se rouvrir » et « regarder » sont des infinitifs : ces formes non conjuguées ne font pas partie du relevé." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-07-exo-12",
    notion: "fr-07",
    savoirFaire: ["modes-personnels","modes-non-personnels","valeurs-temporelles"],
    difficulte: 3,
    enonce: "« Les choses insensées nous font rêver ; une humble flamme monte en moi. »",
    question: "Relevez tous les verbes conjugués et donnez leur mode et leur temps.",
    reponseType: "Verbe | Mode | Temps\n--- | --- | ---\nfont | Indicatif | Présent\nmonte | Indicatif | Présent",
    explication: [
      { type: "note", text: "⚠️ « rêver » est un infinitif : cette forme non conjuguée ne fait pas partie du relevé." },
    ],
  },
];
