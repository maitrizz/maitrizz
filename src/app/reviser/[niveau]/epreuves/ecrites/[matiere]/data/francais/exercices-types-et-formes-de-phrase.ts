// Banque d'exercices OUVERTS, notion 06 « Types et formes de phrase ».
//
// Migration de structure : exercices repris depuis l'onglet « Application » v1,
// sans réécriture pédagogique. Le fond sera repris dans un chantier ultérieur.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_TYPES_ET_FORMES_DE_PHRASE: TrainerExercice[] = [
  // TODO refonte exo
  {
    id: "fr-06-exo-01",
    notion: "fr-06",
    savoirFaire: ["types","interrogation","injonction","emphase"],
    difficulte: 1,
    question: "Donnez le type de chaque phrase.\na) « Range ta chambre. »   b) « Quelle chance ! »   c) « As-tu compris ? »   d) « La pluie a cessé. »",
    reponseType: "a) **Injonctif** (ordre, verbe à l'impératif).\n\nb) **Exclamatif** (sentiment, mot exclamatif *quelle*, point d'exclamation).\n\nc) **Interrogatif** (demande d'information, inversion *as-tu*, point d'interrogation).\n\nd) **Déclaratif** (information, point final).",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-06-exo-02",
    notion: "fr-06",
    savoirFaire: ["types","negation","interrogation","emphase"],
    difficulte: 2,
    question: "Indiquez le type ET la ou les formes de chaque phrase.\na) « N'es-tu jamais content ? »   b) « Il manque deux chaises. »   c) « C'est ce livre que je cherchais. »",
    reponseType: "a) Type **interrogatif** (interrogation totale, registre soutenu : inversion *es-tu*) + forme **négative** (négation **partielle** *ne… jamais*, qui porte sur le temps).\n\nb) Type **déclaratif** + forme **impersonnelle** (« il » ne désigne personne ; le sujet réel *deux chaises* est rejeté après le verbe).\n\nc) Type **déclaratif** + forme **emphatique** (présentatif *c'est… que* mettant *ce livre* en relief).\n\nModèle de rédaction (a) : « Phrase de type **interrogatif**, interrogation **totale** de registre soutenu (inversion *es-tu*, point d'interrogation), à la forme **négative** (négation **partielle** *ne… jamais*, portant sur le temps). »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-06-exo-03",
    notion: "fr-06",
    savoirFaire: ["types","negation","interrogation","emphase"],
    difficulte: 2,
    question: "Pour chaque question, dites si elle est totale ou partielle, et donnez son registre.\na) « Tu pars quand ? »   b) « Est-ce qu'il a téléphoné ? »   c) « Pourquoi ris-tu ? »",
    reponseType: "a) Interrogation **partielle** (porte sur le moment, *quand*), registre **familier** (mot interrogatif rejeté en fin, pas d'inversion).\n\nb) Interrogation **totale** (réponse oui/non), registre **courant** (*est-ce que*).\n\nc) Interrogation **partielle** (porte sur la cause, *pourquoi*), registre **soutenu** (inversion *ris-tu*).",
    explication: [
      { type: "note", text: "Deux axes indépendants : totale/partielle d'un côté, registre de l'autre. On donne toujours les deux." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-06-exo-04",
    notion: "fr-06",
    savoirFaire: ["types","negation","interrogation","emphase"],
    difficulte: 3,
    question: "Ces phrases sont-elles négatives ? Justifiez.\na) « Je ne bois que de l'eau. »   b) « Je ne bois pas d'alcool. »",
    reponseType: "a) **Non, affirmative restrictive.** « ne… que » = seulement : « Je bois seulement de l'eau. » Le fait (boire) est bien posé, il est seulement restreint.\n\nb) **Oui, négative** (négation totale *ne… pas*). Le fait est supprimé : « Je bois de l'alcool » devient faux.\n\nTest à citer dans la copie : on remplace par « seulement ». En (a), le sens tient (« seulement de l'eau ») : c'est une restriction. En (b), le remplacement est impossible : c'est une vraie négation.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-06-exo-05",
    notion: "fr-06",
    savoirFaire: ["types","negation","interrogation","emphase"],
    difficulte: 3,
    question: "Transformez « Tu fermes la fenêtre. » a) en phrase interrogative (registre soutenu), b) en phrase injonctive, c) en phrase de forme négative.",
    reponseType: "a) « **Fermes-tu** la fenêtre ? » (inversion du sujet, point d'interrogation).\n\nb) « **Ferme** la fenêtre. » (impératif présent, 2e personne).\n\nc) « Tu **ne** fermes **pas** la fenêtre. » (négation totale *ne… pas*).",
    explication: [
      { type: "note", text: "La transformation est l'exercice CRPE par excellence : elle prouve qu'on a compris la marque de chaque type et de chaque forme." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-06-exo-06",
    notion: "fr-06",
    savoirFaire: ["types","negation","interrogation","emphase"],
    difficulte: 3,
    question: "Ces « ne » sont-ils des négations ? Justifiez.\na) « Je crains qu'il ne pleuve. »   b) « Il ne dit rien. »   c) « Je ne suis pas sans savoir ce qui se passe. »",
    reponseType: "a) **Non, « ne » explétif** : « je crains qu'il pleuve » garde le même sens. Après « craindre que », ce « ne » n'a pas de valeur négative.\n\nb) **Oui, négation** : « ne… rien » est une négation partielle portant sur le COD.\n\nc) **Non, sens affirmatif** : « ne… pas sans » est une double négation qui s'annule (= « je sais ce qui se passe »), procédé de litote.\n\n« Le « ne » de (a) est explétif (suppressible : *je crains qu'il pleuve*) ; celui de (b) est une vraie négation partielle (*ne… rien*) ; en (c), *ne… pas sans* est une double négation à valeur affirmative (= je sais), c'est une litote. »",
    explication: [],
  },
];
