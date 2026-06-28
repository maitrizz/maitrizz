// Banque d'exercices OUVERTS, notion 06 « Types et formes de phrase ».
//
// CHANTIER 2 (refonte façon Grévisse, DOCTRINE_EXERCICES.md) : exercices réécrits.
// 3 niveaux : Fondamentaux · Concours (la cible) · Expert (au-delà : interrogation
// oratoire, « ne » explétif, litote/cumul de négations, dislocations, type ≠ acte
// de langage).
// Périmètre : un type (déclaratif/interrogatif/injonctif/exclamatif) + d'éventuelles
// formes (négative, emphatique, active/passive). Le mécanisme de la voix passive
// relève de la notion 4 ; on s'en tient ici à la FORME de phrase.
// 6 savoir-faire : types · négation · interrogation · injonction · emphase · actif-passif.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_TYPES_ET_FORMES_DE_PHRASE: TrainerExercice[] = [
  // ————————————————————————— Fondamentaux —————————————————————————
  {
    id: "fr-06-exo-f1",
    notion: "fr-06",
    savoirFaire: ["types"],
    difficulte: 1,
    question:
      "Donnez le type de chaque phrase :\na) « Quelle heure est-il ? »\nb) « Ferme la porte. »\nc) « Le train part à huit heures. »\nd) « Comme c'est beau ! »",
    reponseType:
      "a) **interrogatif**.\nb) **injonctif**.\nc) **déclaratif**.\nd) **exclamatif**.",
    explication: [],
  },
  {
    id: "fr-06-exo-f2",
    notion: "fr-06",
    savoirFaire: ["types", "actif-passif"],
    difficulte: 1,
    question:
      "Donnez le **type** et la **forme** de la phrase :\n« Le voleur a été arrêté par la police. »",
    reponseType:
      "Type : **déclaratif**. Forme : **passive** (le sujet « le voleur » subit l'action ; agent « par la police »). Une phrase a un seul type, mais peut porter une forme.",
    explication: [],
  },
  {
    id: "fr-06-exo-f3",
    notion: "fr-06",
    savoirFaire: ["interrogation"],
    difficulte: 1,
    question:
      "L'interrogation est-elle totale ou partielle ?\na) « Viens-tu ? »\nb) « Où vas-tu ? »\nc) « As-tu fini ton travail ? »",
    reponseType:
      "a) **totale** (réponse attendue : oui / non).\nb) **partielle** (porte sur un élément : le lieu).\nc) **totale** (oui / non).",
    explication: [],
  },
  {
    id: "fr-06-exo-f4",
    notion: "fr-06",
    savoirFaire: ["injonction"],
    difficulte: 1,
    question:
      "Ces phrases sont-elles injonctives ? Justifiez :\na) « Sortez. »\nb) « Vous sortirez immédiatement. »\nc) « Prière de ne pas fumer. »",
    reponseType:
      "Toutes les trois sont **injonctives** (elles donnent un ordre ou une consigne) :\na) impératif ;\nb) futur à valeur d'ordre ;\nc) tournure nominale (« prière de »).\nL'injonction ne passe donc pas seulement par l'impératif.",
    explication: [],
  },
  {
    id: "fr-06-exo-f5",
    notion: "fr-06",
    savoirFaire: ["negation"],
    difficulte: 1,
    question:
      "Ces phrases sont-elles négatives ?\na) « Je n'ai pas faim. »\nb) « Je n'ai qu'un euro. »",
    reponseType:
      "a) **négative** (« ne… pas »).\nb) **non négative** : « ne… que » est une **restriction** (= seulement). « Je n'ai qu'un euro » signifie « j'ai seulement un euro » : c'est une phrase affirmative restrictive.",
    explication: [],
  },
  {
    id: "fr-06-exo-f6",
    notion: "fr-06",
    savoirFaire: ["emphase"],
    difficulte: 1,
    question:
      "Donnez le **type** et la **forme** :\n« C'est Pierre qui a gagné. »",
    reponseType:
      "Type : **déclaratif**. Forme : **emphatique** (mise en relief de « Pierre » par le présentatif « c'est… qui »). L'emphase est une forme : elle ne change pas le type de la phrase.",
    explication: [],
  },

  // ————————————————————————— Concours (la cible) —————————————————————————
  {
    id: "fr-06-exo-c1",
    notion: "fr-06",
    savoirFaire: ["types", "negation", "emphase"],
    difficulte: 2,
    question:
      "Donnez le **type** et **toutes les formes** :\n« Ce n'est pas lui qui décidera ! »",
    reponseType:
      "Type : **déclaratif**. Formes : **négative** (« ne… pas ») + **emphatique** (présentatif « c'est… qui »). Le point d'exclamation marque l'**intonation**, il ne fait pas de la phrase un type exclamatif.",
    explication: [],
  },
  {
    id: "fr-06-exo-c2",
    notion: "fr-06",
    savoirFaire: ["types", "injonction"],
    difficulte: 2,
    question:
      "**Prouvez, par une manipulation**, que ces deux phrases ne sont pas du même type, malgré le point d'exclamation :\na) « Sors ! »\nb) « Comme tu as grandi ! »",
    reponseType:
      "a) **injonctif** : la phrase donne un ordre (verbe à l'impératif, pas de sujet exprimé) ; on peut la reformuler « Je t'ordonne de sortir ».\nb) **exclamatif** : elle exprime un sentiment, structurée par un mot exclamatif (« comme ») ; aucune reformulation en ordre n'est possible.\nLe point d'exclamation est commun aux deux ; c'est la structure et l'intention qui fixent le type.",
    explication: [],
  },
  {
    id: "fr-06-exo-c3",
    notion: "fr-06",
    savoirFaire: ["interrogation"],
    difficulte: 2,
    question:
      "Donnez le registre de chaque interrogation (soutenu · courant · familier) :\na) « Viendras-tu ? »\nb) « Est-ce que tu viendras ? »\nc) « Tu viendras ? »",
    reponseType:
      "a) **soutenu** (inversion sujet-verbe).\nb) **courant** (« est-ce que »).\nc) **familier** (simple intonation, ordre sujet-verbe maintenu).\nLes trois posent la même question totale ; seul le registre change.",
    explication: [],
  },
  {
    id: "fr-06-exo-c4",
    notion: "fr-06",
    savoirFaire: ["interrogation"],
    difficulte: 2,
    question:
      "Interrogation directe ou indirecte ? Transformez chacune en l'autre :\na) « Où vas-tu ? »\nb) « Je te demande où tu vas. »",
    reponseType:
      "a) **directe** : autonome, point d'interrogation, inversion sujet-verbe. Transformée en indirecte : « Je te demande où tu vas. »\nb) **indirecte** : subordonnée dépendant de « demander », sans point d'interrogation, ordre sujet-verbe rétabli. Transformée en directe : « Où vas-tu ? »",
    explication: [],
  },
  {
    id: "fr-06-exo-c5",
    notion: "fr-06",
    savoirFaire: ["injonction"],
    difficulte: 2,
    question:
      "Relevez ce qui exprime l'ordre (ou la consigne) dans chaque phrase :\na) « Ne pas dépasser la dose prescrite. »\nb) « Et si tu rangeais ta chambre ? »\nc) « Tu devrais te reposer. »",
    reponseType:
      "a) **infinitif injonctif** (consigne écrite).\nb) **interrogation à valeur d'injonction atténuée** (suggestion).\nc) **conditionnel + verbe modal** (conseil, ordre adouci).\nL'injonction se réalise par des moyens variés, bien au-delà de l'impératif.",
    explication: [],
  },
  {
    id: "fr-06-exo-c6",
    notion: "fr-06",
    savoirFaire: ["types", "interrogation"],
    difficulte: 2,
    question:
      "« quel » introduit-il une exclamation ou une interrogation ? Justifiez :\na) « Quel courage ! »\nb) « Quel jour sommes-nous ? »",
    reponseType:
      "a) **exclamatif** : « quel » exclamatif, exprime l'admiration (intonation montante, point d'exclamation).\nb) **interrogatif** : « quel » interrogatif, demande une information (point d'interrogation).\nMême mot « quel », deux types : ne pas se fier au seul mot.",
    explication: [],
  },
  {
    id: "fr-06-exo-c7",
    notion: "fr-06",
    savoirFaire: ["actif-passif"],
    difficulte: 2,
    question:
      "À quelle forme (active ou passive) est chaque phrase ? Réécrivez-la à l'autre forme :\na) « Le maire a inauguré le pont. »\nb) « Le coupable a été arrêté. »",
    reponseType:
      "a) forme **active** → passive : « Le pont a été inauguré par le maire. »\nb) forme **passive** → active : « On a arrêté le coupable » (agent indéterminé : sujet indéfini « on »).\nLa forme passive met en avant ce qui subit l'action (mécanisme détaillé en notion 4).",
    explication: [],
  },
  {
    id: "fr-06-exo-c8",
    notion: "fr-06",
    savoirFaire: ["emphase"],
    difficulte: 2,
    question:
      "**Prouvez, par une manipulation**, que ces phrases sont emphatiques, et nommez le procédé :\na) « Moi, je n'y crois pas. »\nb) « C'est demain qu'il arrive. »",
    reponseType:
      "a) emphase par **détachement** : « Moi, » est repris par « je ». On revient à la forme neutre « Je n'y crois pas » ; le pronom détaché met le sujet en relief.\nb) emphase par **extraction** (présentatif « c'est… que ») : forme neutre « Il arrive demain » ; « c'est… que » isole et met en relief « demain ».\nLa manipulation décisive : revenir à la phrase neutre fait apparaître le procédé de mise en relief.",
    explication: [],
  },
  {
    id: "fr-06-exo-c9",
    notion: "fr-06",
    savoirFaire: ["negation"],
    difficulte: 2,
    question:
      "La négation est-elle totale ou partielle ?\na) « Il ne vient pas. »\nb) « Il ne vient jamais. »\nc) « Personne n'est venu. »",
    reponseType:
      "a) **totale** : « ne… pas » nie tout le propos.\nb) **partielle** : « ne… jamais » nie un élément (le temps, la fréquence).\nc) **partielle** : « ne… personne » nie le sujet.\nSeule « ne… pas / point » est une négation totale ; les autres portent sur un élément précis.",
    explication: [],
  },
  {
    id: "fr-06-exo-c10",
    notion: "fr-06",
    savoirFaire: ["types", "negation", "interrogation"],
    difficulte: 2,
    question:
      "Pour chaque phrase, donnez le type et l'éventuelle forme :\n« Qui a éteint la lumière ? Je n'y vois rien. Rallume-la tout de suite ! »",
    reponseType:
      "1. « Qui a éteint la lumière ? » : **interrogatif** (interrogation partielle).\n2. « Je n'y vois rien. » : **déclaratif**, forme **négative** (partielle, « ne… rien »).\n3. « Rallume-la tout de suite ! » : **injonctif** (impératif ; le point d'exclamation ne le rend pas exclamatif).",
    explication: [],
  },

  // ————————————————————————— Expert (au-delà de l'épreuve) —————————————————————————
  {
    id: "fr-06-exo-e1",
    notion: "fr-06",
    savoirFaire: ["interrogation", "types"],
    difficulte: 3,
    question:
      "Ces interrogations attendent-elles une réponse ? Quelle est leur valeur ?\na) « Qui ne rêve pas de liberté ? »\nb) « As-tu pris ton parapluie ? »",
    reponseType:
      "a) **interrogation oratoire (rhétorique)** : fausse question, qui équivaut à une affirmation forte (« tout le monde rêve de liberté ») ; aucune réponse n'est attendue.\nb) **vraie interrogation** (totale), attendant une réponse oui / non.\nLa forme interrogative peut donc servir une intention **assertive** : le type grammatical ne dit pas tout de l'intention.",
    explication: [],
  },
  {
    id: "fr-06-exo-e2",
    notion: "fr-06",
    savoirFaire: ["negation"],
    difficulte: 3,
    question:
      "Le « ne » est-il une vraie négation ? Justifiez :\na) « Je crains qu'il ne pleuve. »\nb) « Il ne pleut pas. »",
    reponseType:
      "a) **« ne » explétif** : il n'exprime aucune négation. « Je crains qu'il ne pleuve » = « je crains qu'il pleuve » (on craint que cela arrive). Ce « ne » accompagne certains verbes de crainte, ou « avant que », « à moins que »…\nb) **vraie négation** (« ne… pas »).\nLe « ne » seul n'est donc pas toujours négatif : repérer le second terme (pas, jamais, rien…) ou son absence.",
    explication: [],
  },
  {
    id: "fr-06-exo-e3",
    notion: "fr-06",
    savoirFaire: ["negation"],
    difficulte: 3,
    question:
      "Analysez la négation et son effet de sens :\na) « Il n'est pas incompétent. »\nb) « Il ne dit jamais rien à personne. »",
    reponseType:
      "a) **litote** : la négation « ne… pas » porte sur un adjectif déjà négatif (préfixe privatif « in- »). La double négation produit une **affirmation atténuée** (« il est plutôt compétent »).\nb) **cumul de mots négatifs** (jamais, rien, personne) qui se **renforcent** au lieu de s'annuler : en français, ces termes s'additionnent dans une même négation (contrairement à la logique mathématique).",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : nommer l'effet (litote = atténuation par double négation) au-delà de l'étiquette « négative » est ce qui est valorisé.",
      },
    ],
  },
  {
    id: "fr-06-exo-e4",
    notion: "fr-06",
    savoirFaire: ["emphase"],
    difficulte: 3,
    question:
      "Distinguez les procédés d'emphase et leur nuance :\na) « Ce livre, je l'ai adoré. »\nb) « Je l'ai adoré, ce livre. »\nc) « C'est ce livre que j'ai adoré. »",
    reponseType:
      "a) **dislocation à gauche** : le thème (« Ce livre ») est posé d'abord, repris par « l' ».\nb) **dislocation à droite** : l'élément est rejeté en fin de phrase, annoncé par « l' ».\nc) **extraction** par présentatif (« c'est… que ») : focalisation **contrastive** sur « ce livre » (et pas un autre).\nTrois emphases, trois effets : annoncer, rappeler, opposer.",
    explication: [],
  },
  {
    id: "fr-06-exo-e5",
    notion: "fr-06",
    savoirFaire: ["types"],
    difficulte: 3,
    question:
      "Le type grammatical correspond-il toujours à l'intention ? Analysez :\na) « Pourrais-tu fermer la fenêtre ? »\nb) « Il fait un peu froid ici. »",
    reponseType:
      "a) phrase **interrogative** (type grammatical), mais **acte injonctif** : c'est une demande polie d'agir, pas une vraie question.\nb) phrase **déclarative** qui sert un **acte injonctif indirect** (sous-entendu : « ferme la fenêtre »).\nIl faut distinguer le **type grammatical** (la structure) de l'**acte de langage** (l'intention). À ne pas confondre non plus avec la modalisation.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : repérer le décalage entre type grammatical et intention (acte de langage indirect) est un raffinement ; au CRPE, savoir que le type ne dicte pas toujours l'intention suffit.",
      },
    ],
  },
];
