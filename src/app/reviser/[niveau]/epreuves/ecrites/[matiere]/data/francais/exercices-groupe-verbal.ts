// Banque d'exercices OUVERTS, notion 04 « Le groupe verbal ».
//
// CHANTIER 2 (refonte façon Grévisse, DOCTRINE_EXERCICES.md) : exercices réécrits.
// 3 niveaux : Fondamentaux (un mot, un test) · Concours (la cible, format épreuve,
// types variés dont « prouver par une manipulation ») · Expert (au-delà : factitif
// avec causé au COI, « se faire + infinitif » passif/factitif, attribut de circonstance).
// Périmètre : construction du verbe (transitivité), voix (active/passive/pronominale/
// impersonnelle), périphrases verbales. L'accord du PP est renvoyé à la notion 12.
// Couverture des 6 savoir-faire, dont les périphrases (jusque-là quasi absentes).

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_GROUPE_VERBAL: TrainerExercice[] = [
  // ————————————————————————— Fondamentaux —————————————————————————
  {
    id: "fr-04-exo-f1",
    notion: "fr-04",
    savoirFaire: ["verbe-noyau", "complements-verbe"],
    difficulte: 1,
    question:
      "Donnez la construction du verbe en gras :\na) « Il **dort** profondément. »\nb) « Elle **lit** un roman. »\nc) « Il **pense** à son avenir. »",
    reponseType:
      "a) **dort** : intransitif (aucun COD possible).\nb) **lit** : transitif direct (COD « un roman »).\nc) **pense** : transitif indirect (COI « à son avenir »).",
    explication: [],
  },
  {
    id: "fr-04-exo-f2",
    notion: "fr-04",
    savoirFaire: ["complements-verbe", "attributs"],
    difficulte: 1,
    question:
      "Le groupe en gras est-il COD ou attribut du sujet ?\na) « Il devient **médecin**. »\nb) « Il rencontre **un médecin**. »",
    reponseType:
      "a) **médecin** : attribut du sujet (verbe d'état « devient » ; « médecin » désigne le sujet).\nb) **un médecin** : COD (« il *le* rencontre »). Test : un verbe d'état introduit un attribut ; un verbe d'action transitif introduit un COD.",
    explication: [],
  },
  {
    id: "fr-04-exo-f3",
    notion: "fr-04",
    savoirFaire: ["voix-passive"],
    difficulte: 1,
    question:
      "Mettez à la voix passive et identifiez le complément d'agent :\n« Le chat attrape la souris. »",
    reponseType:
      "« La souris **est attrapée par le chat**. » Le sujet « la souris » subit l'action ; **par le chat** = complément d'agent (l'ancien sujet de la phrase active).",
    explication: [],
  },
  {
    id: "fr-04-exo-f4",
    notion: "fr-04",
    savoirFaire: ["voix-passive", "pronominalisation"],
    difficulte: 1,
    question:
      "Indiquez la voix de chaque phrase :\na) « Le jury récompense les lauréats. »\nb) « Les lauréats sont récompensés. »\nc) « Les lauréats se félicitent. »",
    reponseType:
      "a) **voix active** (le sujet fait l'action).\nb) **voix passive** (le sujet subit ; auxiliaire *être* + participe passé).\nc) **voix pronominale** (pronom réfléchi « se » ; ici réciproque : les uns les autres).",
    explication: [],
  },
  {
    id: "fr-04-exo-f5",
    notion: "fr-04",
    savoirFaire: ["periphrases"],
    difficulte: 1,
    question:
      "Repérez le verbe noyau (lexical) et le semi-auxiliaire :\na) « Je vais sortir. »\nb) « Il doit travailler. »",
    reponseType:
      "a) Noyau lexical : **sortir** ; semi-auxiliaire : **vais** (*aller* + infinitif = futur proche).\nb) Noyau lexical : **travailler** ; semi-auxiliaire modal : **doit** (obligation).",
    explication: [],
  },
  {
    id: "fr-04-exo-f6",
    notion: "fr-04",
    savoirFaire: ["pronominalisation", "complements-verbe"],
    difficulte: 1,
    question:
      "Dans chaque phrase, « se » est-il COD ou COI ?\na) « Elle se coiffe. »\nb) « Elle se parle à voix basse. »\nc) « Ils se téléphonent. »",
    reponseType:
      "a) **se = COD** (coiffer *quelqu'un*).\nb) **se = COI** (parler *à quelqu'un*).\nc) **se = COI** (téléphoner *à quelqu'un*). Le test : reconstruire la construction du verbe (directe → COD, avec préposition → COI).",
    explication: [],
  },

  // ————————————————————————— Concours (la cible) —————————————————————————
  {
    id: "fr-04-exo-c1",
    notion: "fr-04",
    savoirFaire: ["voix-passive"],
    difficulte: 2,
    question:
      "**Prouvez, par une manipulation**, que ces deux phrases ne sont pas à la même voix :\na) « La porte est fermée par le gardien. »\nb) « La porte est fermée depuis midi. »",
    reponseType:
      "a) **voix passive** : on rétablit l'actif (« le gardien ferme la porte ») et un complément d'agent est présent.\nb) **pas un passif** : « fermée » exprime un **état** (résultat), c'est un attribut du sujet. On ne peut pas ajouter d'agent (« *fermée par midi* » est impossible) et on peut remplacer par « close ».\nLe test décisif : peut-on remonter à un agent qui *accomplit* l'action ? Oui en a) (passif), non en b) (état).",
    explication: [],
  },
  {
    id: "fr-04-exo-c2",
    notion: "fr-04",
    savoirFaire: ["pronominalisation"],
    difficulte: 2,
    question:
      "Donnez le type de chaque verbe pronominal (réfléchi · réciproque · de sens passif · essentiellement pronominal) :\na) « Elle se regarde dans la glace. »\nb) « Ils se battent. »\nc) « Ce livre se vend bien. »\nd) « Il s'évanouit. »",
    reponseType:
      "a) **réfléchi** (se = COD ; l'action retombe sur le sujet).\nb) **réciproque** (l'un l'autre).\nc) **de sens passif** (« ce livre est vendu » ; le sujet subit).\nd) **essentiellement pronominal** (« s'évanouir » n'existe pas sans « se »).",
    explication: [],
  },
  {
    id: "fr-04-exo-c3",
    notion: "fr-04",
    savoirFaire: ["periphrases"],
    difficulte: 2,
    question:
      "Identifiez la périphrase verbale et sa valeur :\na) « Il **va partir**. »\nb) « Elle **vient de** rentrer. »\nc) « Ils **étaient en train de** dîner. »",
    reponseType:
      "a) **futur proche** (*aller* + infinitif).\nb) **passé récent** (*venir de* + infinitif).\nc) **aspect duratif** (*être en train de* + infinitif).\nDans les trois cas, le verbe lexical (partir / rentrer / dîner) reste le noyau ; *va / vient de / étaient en train de* sont des **semi-auxiliaires** (d'aspect ou de temps).",
    explication: [],
  },
  {
    id: "fr-04-exo-c4",
    notion: "fr-04",
    savoirFaire: ["verbe-noyau", "complements-verbe"],
    difficulte: 2,
    question:
      "« il » est-il impersonnel ou personnel ? S'il y a un sujet réel, indiquez-le.\na) « Il neige sur la ville. »\nb) « Il faut du courage. »\nc) « Il revient demain. »",
    reponseType:
      "a) **impersonnel** (verbe météorologique « neiger » ; aucun sujet réel).\nb) **impersonnel** : « il » est apparent, le sujet réel (logique) est **du courage** (« du courage est nécessaire »).\nc) **personnel** : « il » renvoie à une personne déjà nommée.",
    explication: [],
  },
  {
    id: "fr-04-exo-c5",
    notion: "fr-04",
    savoirFaire: ["verbe-noyau", "complements-verbe", "attributs"],
    difficulte: 2,
    question:
      "**Relevez chaque verbe conjugué** et donnez sa construction (intransitif · transitif direct · transitif indirect · attributif) :\n« L'enfant grandit, devient curieux et ressemble à son père. »",
    reponseType:
      "- **grandit** : intransitif (pas de complément d'objet).\n- **devient** : attributif (attribut du sujet « curieux »).\n- **ressemble** : transitif indirect (COI « à son père »).\nUn même sujet (« L'enfant ») commande les trois verbes, mais chacun a sa propre construction.",
    explication: [],
  },
  {
    id: "fr-04-exo-c6",
    notion: "fr-04",
    savoirFaire: ["voix-passive"],
    difficulte: 2,
    question:
      "Mettez à la voix active. Que devient l'agent ?\n« Ce roman a été traduit en vingt langues. »",
    reponseType:
      "Aucun complément d'agent n'est exprimé : l'agent est **indéterminé**. À l'actif, on le rend par un sujet indéfini : « **On** a traduit ce roman en vingt langues. » C'est l'un des emplois du passif : **effacer l'agent** quand il est inconnu ou inutile.",
    explication: [],
  },
  {
    id: "fr-04-exo-c7",
    notion: "fr-04",
    savoirFaire: ["complements-verbe"],
    difficulte: 2,
    question:
      "Le même verbe a deux constructions selon la phrase. Donnez-les :\na) « Il manque son train. »\nb) « Il manque de patience. »",
    reponseType:
      "a) **transitif direct** : COD « son train » (manquer = rater).\nb) **transitif indirect** : COI « de patience » (manquer de = faire défaut).\nMême verbe « manquer », deux sens et deux constructions : c'est la phrase, pas le verbe seul, qui fixe la construction.",
    explication: [],
  },
  {
    id: "fr-04-exo-c8",
    notion: "fr-04",
    savoirFaire: ["pronominalisation", "voix-passive"],
    difficulte: 2,
    question:
      "**Prouvez, par une manipulation**, que le verbe pronominal a un sens passif :\n« Ce plat se mange froid. »",
    reponseType:
      "**se mange** : pronominal de **sens passif**. Manipulation : on le transpose en passif ou en actif à sujet indéfini, « ce plat **est mangé** froid » / « **on** mange ce plat froid ». Le sujet « ce plat » **subit** l'action (un plat ne se mange pas lui-même) : « se » n'est ni réfléchi ni réciproque, il marque le passif.",
    explication: [],
  },
  {
    id: "fr-04-exo-c9",
    notion: "fr-04",
    savoirFaire: ["periphrases", "complements-verbe"],
    difficulte: 2,
    question:
      "Analysez « faire » : est-ce le verbe principal ? Quelle est la fonction de « une maison » ?\n« Elle fait construire une maison. »",
    reponseType:
      "**fait construire** = périphrase **factitive** (causative) : *faire* est semi-auxiliaire, *construire* le verbe lexical. « faire » n'est pas le verbe principal au sens plein : le sujet « elle » ne construit pas elle-même, elle **fait construire** (par un tiers). « une maison » est le COD de l'ensemble « faire construire ». On ne sépare pas les deux verbes.",
    explication: [],
  },
  {
    id: "fr-04-exo-c10",
    notion: "fr-04",
    savoirFaire: ["periphrases"],
    difficulte: 2,
    question:
      "Donnez la valeur du semi-auxiliaire « devoir » :\na) « Il doit pleuvoir cet après-midi. »\nb) « Il doit partir avant midi. »",
    reponseType:
      "a) valeur **épistémique** (probabilité) : « il pleuvra sans doute ».\nb) valeur **déontique** (obligation) : « il est obligé de partir ».\nMême semi-auxiliaire « devoir », deux valeurs : le contexte tranche.",
    explication: [],
  },

  // ————————————————————————— Expert (au-delà de l'épreuve) —————————————————————————
  {
    id: "fr-04-exo-e1",
    notion: "fr-04",
    savoirFaire: ["periphrases", "complements-verbe"],
    difficulte: 3,
    question:
      "Combien de noyaux verbaux ? Quelles fonctions ?\n« Le professeur fait lire un poème aux élèves. »",
    reponseType:
      "**fait lire** forme **un seul** ensemble verbal (périphrase **factitive**) : *faire* est semi-auxiliaire, *lire* le verbe lexical. Ce ne sont pas deux verbes indépendants. « un poème » est COD de « faire lire » ; « aux élèves » est le **causé** (celui qui lit), construit en **COI** parce que l'infinitif a déjà son propre COD.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : la règle se voit par contraste. « Le professeur fait lire les élèves » (infinitif sans COD) → « les élèves » est COD ; « Le professeur fait lire un poème aux élèves » (infinitif avec COD) → le causé passe au COI.",
      },
    ],
  },
  {
    id: "fr-04-exo-e2",
    notion: "fr-04",
    savoirFaire: ["pronominalisation", "complements-verbe"],
    difficulte: 3,
    question:
      "« se » est-il COD ou COI ? Quel effet sur l'accord du participe passé ?\na) « Elle s'est lavée. »\nb) « Elle s'est lavé les mains. »",
    reponseType:
      "a) **se = COD** (elle lave elle-même) → le participe s'accorde avec le COD placé avant : « lav**ée** ».\nb) **se = COI** (à elle-même) ; le COD est « les mains », placé **après** le verbe → pas d'accord : « lav**é** ».\nLa fonction du « se » commande donc l'accord (mécanisme détaillé en notion 12).",
    explication: [],
  },
  {
    id: "fr-04-exo-e3",
    notion: "fr-04",
    savoirFaire: ["pronominalisation", "voix-passive"],
    difficulte: 3,
    question:
      "« se » a-t-il la même valeur ? Justifiez :\na) « Les fautes se corrigent vite. »\nb) « Le professeur se corrige. »",
    reponseType:
      "a) **de sens passif** : « les fautes sont corrigées » ; le sujet **subit**, il n'y a pas d'agent réfléchi.\nb) **réfléchi** : le professeur se corrige lui-même (se = COD).\nLe test décisif : le sujet peut-il agir sur lui-même ? En a) le sujet est inanimé (« les fautes ») → impossible, c'est donc un passif déguisé.",
    explication: [],
  },
  {
    id: "fr-04-exo-e4",
    notion: "fr-04",
    savoirFaire: ["pronominalisation", "voix-passive", "periphrases"],
    difficulte: 3,
    question:
      "Analysez la tournure « se faire + infinitif » :\na) « Il s'est fait renvoyer de l'école. »\nb) « Il s'est fait construire une villa. »",
    reponseType:
      "a) valeur **passive** : « il s'est fait renvoyer » = « il **a été renvoyé** ». Le sujet **subit** l'action (il ne se renvoie pas lui-même) ; « se » n'est pas un vrai réfléchi.\nb) valeur **factitive** (causative) : « il a **fait construire** une villa **pour lui** » (il en est le bénéficiaire). Même tournure « se faire + infinitif », deux valeurs (passive ou factitive) selon le sens.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : « se faire + infinitif » ne se range ni en simple réfléchi ni en simple passif. Nommer la valeur (subie ou causée) et la prouver par une reformulation est ce qui est attendu.",
      },
    ],
  },
  {
    id: "fr-04-exo-e5",
    notion: "fr-04",
    savoirFaire: ["attributs"],
    difficulte: 3,
    question:
      "« fâchée » est-il attribut du sujet ? Justifiez, alors que « partir » n'est pas un verbe d'état :\n« Elle est partie fâchée. »",
    reponseType:
      "Oui : **fâchée** est un **attribut du sujet** « elle », construit avec un verbe qui n'est pas essentiellement attributif (*partir*). On parle d'**attribut de circonstance** (ou attribut du sujet avec verbe non attributif) : l'adjectif exprime un état du sujet *au moment de l'action* (« elle était fâchée en partant »). Indices : il s'accorde avec le sujet et n'est pas isolé par une virgule (sinon ce serait une épithète détachée). D'autres verbes le permettent : *vivre heureux, mourir jeune, naître riche*.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : la frontière avec l'épithète détachée tient à la virgule et à la mobilité. « Elle est partie, fâchée » (détaché, mobile) penche vers l'épithète détachée ; « Elle est partie fâchée » (soudé au verbe) vers l'attribut de circonstance.",
      },
    ],
  },
];
