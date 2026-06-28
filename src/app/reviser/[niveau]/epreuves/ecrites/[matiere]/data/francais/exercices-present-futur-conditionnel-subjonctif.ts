// Banque d'exercices OUVERTS, notion 09 « Présent, futur, conditionnel et subjonctif ».
//
// Migration de structure : exercices repris depuis l'onglet « Application » v1,
// sans réécriture pédagogique. Le fond sera repris dans un chantier ultérieur.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_PRESENT_FUTUR_CONDITIONNEL_SUBJONCTIF: TrainerExercice[] = [
  // TODO refonte exo
  {
    id: "fr-09-exo-01",
    notion: "fr-09",
    savoirFaire: ["futur","valeurs"],
    difficulte: 1,
    question: "Donnez la valeur du présent :\na) « Un triangle possède trois côtés. »   b) « En ce moment, je lis le journal. »   c) « En 1789, la Révolution éclate. »   d) « Le train part demain à huit heures. »   e) « Chaque matin, il se lève à six heures. »",
    reponseType: "a) Vérité générale : propriété toujours valable.\n\nb) Action en cours, signalée par « en ce moment ».\n\nc) Présent de narration (événement passé mis au présent ; indicateur « 1789 »)\n\nd) Présent à valeur de futur : l'action est programmée pour le lendemain.\n\ne) Habitude, signalée par « chaque matin ».",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-09-exo-02",
    notion: "fr-09",
    savoirFaire: ["conditionnel"],
    difficulte: 1,
    question: "Appliquez le test « nous » :\na) « Elle serait malade. »   b) « Elle était fatiguée. »   c) « Il viendrait si on l'invitait. »   d) « Il venait souvent. »   e) « Ce traitement réduirait les risques. »",
    reponseType: "a) « nous serions » → -rions → conditionnel présent\n\nb) « nous étions » → -ions sans « r » → imparfait\n\nc) « nous viendrions » → -rions → conditionnel présent\n\nd) « nous venions » → -ions sans « r » → imparfait\n\ne) « nous réduirions » → -rions → conditionnel présent",
    explication: [
      { type: "note", text: "💡 Conditionnel présent et imparfait sont tous deux des temps de l'indicatif." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-09-exo-03",
    notion: "fr-09",
    savoirFaire: ["futur","conditionnel","valeurs"],
    difficulte: 1,
    question: "Donnez la valeur du conditionnel :\na) « Si elle venait demain, je serais heureux. »   b) « Je voudrais vous demander un conseil. »   c) « Selon plusieurs sources, le suspect serait à l'étranger. »   d) « Elle savait qu'il viendrait le lendemain. »",
    reponseType: "a) Hypothèse : « serais » exprime la conséquence de la venue envisagée.\n\nb) Politesse (atténuation d'une demande)\n\nc) Fait non confirmé, signalé par « selon plusieurs sources ».\n\nd) Futur dans le passé (action future vue depuis « savait »)",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-09-exo-04",
    notion: "fr-09",
    savoirFaire: ["subjonctif"],
    difficulte: 1,
    question: "Justifiez :\na) « Il faut qu'il vienne. »   b) « Je sais qu'il vient. »   c) « bien qu'elle soit fatiguée »   d) « Je crois qu'elle part demain. »   e) « pour qu'il réussisse »   f) « Je suis certain qu'il vient. »",
    reponseType: "a) Subjonctif (« il faut que » : nécessité)\n\nb) Indicatif (« je sais que » : certitude)\n\nc) Subjonctif (« bien que » : concession, obligatoire)\n\nd) Indicatif (« je crois que » : opinion, pas doute)\n\ne) Subjonctif (« pour que » : but, obligatoire)\n\nf) Indicatif (« je suis certain que » : certitude)",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-09-exo-05",
    notion: "fr-09",
    savoirFaire: ["futur","conditionnel","subjonctif","valeurs"],
    difficulte: 2,
    question: "a) Le conditionnel est un temps de l'indicatif.\nb) Après « je crois que », on emploie le subjonctif.\nc) Le futur simple peut exprimer un ordre.\nd) « bien que » impose toujours le subjonctif.",
    reponseType: "a) **Vrai** (terminologie retenue) : le conditionnel est un temps de l'indicatif. L'appellation « mode conditionnel » subsiste dans certains usages mais n'est pas retenue.\n\nb) **Faux** à la forme affirmative : « je crois que » appelle généralement l'indicatif. La négation ou l'interrogation peuvent favoriser le subjonctif.\n\nc) **Vrai** : « Tu feras tes devoirs » contient un futur injonctif qui formule une consigne.\n\nd) **Vrai** : « bien que » impose toujours le subjonctif, sans exception.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-09-exo-06",
    notion: "fr-09",
    savoirFaire: ["subjonctif"],
    difficulte: 2,
    question: "Indiquez le mode imposé et justifiez :\na) parce que   b) bien que   c) pour que   d) quand   e) avant que   f) après que   g) à moins que   h) dès que",
    reponseType: "a) parce que → indicatif (cause réelle)\n\nb) bien que → subjonctif (concession)\n\nc) pour que → subjonctif (but)\n\nd) quand → indicatif (temps, fait réel)\n\ne) avant que → subjonctif (antériorité envisagée)\n\nf) après que → indicatif attendu (fait accompli), même si le subjonctif est très fréquent dans l'usage\n\ng) à moins que → subjonctif (condition négative)\n\nh) dès que → indicatif (temps, fait réel)",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-09-exo-07",
    notion: "fr-09",
    savoirFaire: ["futur","conditionnel","subjonctif","valeurs"],
    difficulte: 2,
    question: "Ces analyses sont-elles correctes ? Corrigez :\na) « serait » → indicatif imparfait, valeur : état dans le passé\nb) « vienne » (après « bien que ») → indicatif présent\nc) Dans « Selon plusieurs sources, il viendrait demain », « viendrait » → conditionnel présent, valeur : conditionnel\nd) Dans « Le train partira demain à huit heures », « partira » → futur simple de l'indicatif, valeur : action à venir",
    reponseType: "a) Erreur de temps : le mode indicatif est correct, mais « nous serions » (-rions) → conditionnel présent, pas imparfait. La valeur dépend du contexte.\n\nb) Faux : « bien que » impose le subjonctif → subjonctif présent.\n\nc) Temps correct, valeur trop vague : le repère « selon plusieurs sources » indique un fait non confirmé.\n\nd) Correct : « demain à huit heures » situe l'action dans l'avenir.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-09-exo-08",
    notion: "fr-09",
    savoirFaire: ["subjonctif"],
    difficulte: 2,
    question: "Pourquoi ces phrases sont-elles incorrectes ? Corrigez :\na) « bien qu'il vient »   b) « il faut qu'elle vient »   c) « pour que tu réussis »",
    reponseType: "a) « vient » (indicatif) incorrect → « bien qu'il **vienne** » (subjonctif, concession)\n\nb) « vient » incorrect → « il faut qu'elle **vienne** » (subjonctif, nécessité)\n\nc) « réussis » incorrect → « pour que tu **réussisses** » (subjonctif, but)",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-09-exo-09",
    notion: "fr-09",
    savoirFaire: ["valeurs"],
    difficulte: 3,
    enonce: "« On écrit parce qu'on ne sait par quel autre biais attraper le réel. Vivre, sans l'écriture, me va mal. »\n*(Lola Lafon, Quand tu écouteras cette chanson, 2023)*",
    question: "Rédigez la réponse jury pour « écrit », « sait » et « va ».",
    reponseType: "« écrit » est au présent de l'indicatif, valeur de vérité générale : le sujet générique « on » inscrit l'affirmation dans une réflexion générale sur l'écriture.\n\n« sait » est au présent de l'indicatif et appartient à la même affirmation générale. Il présente l'impossibilité évoquée comme caractéristique de cette situation.\n\n« va » est au présent de l'indicatif, valeur d'énonciation : associé au pronom « me », il exprime le ressenti de l'auteure au moment où elle écrit.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-09-exo-10",
    notion: "fr-09",
    savoirFaire: ["valeurs"],
    difficulte: 3,
    enonce: "« Depuis toujours, certaines histoires nous font rêver. En ce moment, une vive émotion monte en moi. »",
    question: "Rédigez la réponse attendue pour « font » et « monte ».",
    reponseType: "« font » est au présent de l'indicatif, valeur de vérité générale : le repère « depuis toujours » donne à l'affirmation une portée générale.\n\n« monte » est au présent de l'indicatif, valeur d'action en cours : le repère « en ce moment » situe l'émotion au moment de l'énonciation.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-09-exo-11",
    notion: "fr-09",
    savoirFaire: ["conditionnel","valeurs"],
    difficulte: 3,
    enonce: "a) « Si elle venait demain, je serais heureux. »   b) « Pourriez-vous m'aider ? »   c) « Si elle était venue, j'aurais été heureux. »",
    question: "Rédigez la réponse jury pour « serais », « Pourriez » et « aurais été ».",
    reponseType: "a) « serais » est au conditionnel présent, temps de l'indicatif. Il exprime la conséquence de l'hypothèse « si elle venait demain », sans permettre à lui seul de la déclarer irréelle.\n\nb) « Pourriez » est au conditionnel présent (temps de l'indicatif), valeur de politesse : il atténue la demande.\n\nc) « aurais été » est au conditionnel passé (temps de l'indicatif), valeur d'irréel du passé : conséquence d'une condition non réalisée dans le passé (si + plus-que-parfait).",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-09-exo-12",
    notion: "fr-09",
    savoirFaire: ["subjonctif","concordance"],
    difficulte: 3,
    enonce: "a) « Il faut que chacun réussisse. »   b) « bien qu'il soit fatigué, il continue. »   c) « pour que la société avance »",
    question: "Rédigez la réponse jury pour « réussisse », « soit » et « avance ».",
    reponseType: "a) « réussisse » est au présent du subjonctif, imposé par « il faut que » : il exprime la nécessité que l'action ait lieu.\n\nb) « soit » est au présent du subjonctif, imposé par la conjonction de concession « bien que » : il exprime un état réel qui n'empêche pas l'action principale.\n\nc) « avance » est au présent du subjonctif, imposé par la conjonction de but « pour que » : il exprime le but visé.",
    explication: [],
  },
];
