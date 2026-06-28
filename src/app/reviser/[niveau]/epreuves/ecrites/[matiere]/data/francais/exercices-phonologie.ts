// Banque d'exercices OUVERTS, notion 16 « La phonologie ».
//
// Migration de structure : exercices repris depuis l'onglet « Application » v1,
// sans réécriture pédagogique. Le fond sera repris dans un chantier ultérieur.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_PHONOLOGIE: TrainerExercice[] = [
  // TODO refonte exo
  {
    id: "fr-16-exo-01",
    notion: "fr-16",
    savoirFaire: ["phonemes-graphemes"],
    difficulte: 1,
    question: "Combien de phonèmes dans chaque mot ?\npeur · chat · beau · main · yeux",
    reponseType: "**Réponse attendue :** peur → 3 (/pœʁ/) · chat → 2 (/ʃa/) · beau → 2 (/bo/) · main → 2 (/mɛ̃/) · yeux → 2 (/jø/).",
    explication: [
      { type: "note", text: "💡 Explication : on compte les sons, jamais les lettres. Les graphèmes complexes ne valent qu'un seul phonème (<ch> → /ʃ/, <eau> → /o/, <ain> → /ɛ̃/, <eu> → /ø/) et les lettres finales muettes (le <t> de « chat ») ne comptent pas." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-16-exo-02",
    notion: "fr-16",
    savoirFaire: ["phonemes-graphemes","accents","transcription"],
    difficulte: 1,
    question: "Pour chaque mot, donnez le nombre de lettres, de graphèmes et de phonèmes :\nnuit · monde · eau · chant",
    reponseType: "Mot | Lettres | Graphèmes | Phonèmes | Transcription\n--- | --- | --- | --- | ---\nnuit | 4 | 4 (n · u · i · t muet) | 3 | /nɥi/\nmonde | 5 | 4 (m · on · d · e) | 3 ou 4 | /mɔ̃d/ ou /mɔ̃də/\neau | 3 | 1 (eau) | 1 | /o/\nchant | 5 | 3 (ch · an · t muet) | 2 | /ʃɑ̃/",
    explication: [
      { type: "note", text: "💡 Explication : lettres ≥ graphèmes ≥ phonèmes. Un digramme (<on>, <ch>) fait baisser le nombre de graphèmes ; une lettre muette (<t>, <e> final) fait baisser le nombre de phonèmes. Dans « nuit », <u> et <i> notent deux sons (/ɥ/ et /i/) : ce sont deux graphèmes, pas un digramme." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-16-exo-03",
    notion: "fr-16",
    savoirFaire: ["phonemes-graphemes"],
    difficulte: 1,
    question: "Donnez la valeur de <c> et la règle de position :\ncar · ciel · reçu · école · cygne",
    reponseType: "**Règle (explication) :** <c> = /k/ devant a, o, u et les consonnes ; /s/ devant e, i, y. La cédille <ç> impose /s/ devant a, o, u.\n\n**Réponse attendue :** car → /k/ (devant a) · ciel → /s/ (devant i) · reçu → /s/ (cédille, devant u) · école → /k/ (devant o) · cygne → /s/ (devant y).",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-16-exo-04",
    notion: "fr-16",
    savoirFaire: ["phonemes-graphemes"],
    difficulte: 2,
    question: "Donnez la valeur de <s> et justifiez par la position :\nsol · raison · sport · insensé · tasse",
    reponseType: "**Règle (explication) :** <s> = /z/ uniquement entre deux voyelles ; partout ailleurs (initiale, contre une consonne, doublé en <ss>) il vaut /s/.\n\n**Réponse attendue :** sol → /s/ (initiale) · raison → /z/ (intervocalique) · sport → /s/ (devant consonne) · insensé → /s/ (après la consonne <n>) · tasse → /s/ (<ss> toujours /s/).",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-16-exo-05",
    notion: "fr-16",
    savoirFaire: ["phonemes-graphemes"],
    difficulte: 2,
    enonce: "« Elle se hâtait, les yeux baissés, pressée d'atteindre sa maison avant la nuit. » (Zola)",
    question: "Relevez un exemple de polygraphie phonique et un de polyphonie graphique.",
    reponseType: "**Polygraphie phonique** (un phonème, plusieurs graphèmes) : le phonème /ɛ/ s'écrit <e> dans « elle » et <ai> dans l'imparfait « hâtait » : un même son noté de deux façons.\n\n**Polyphonie graphique** (un graphème, plusieurs valeurs) : le graphème <s> vaut /s/ dans « sa » (initiale) et /z/ dans « maison » (intervocalique) : une même lettre, deux sons.",
    explication: [
      { type: "note", text: "💡 Réponse attendue : un exemple précis de chaque phénomène, en nommant le phonème (ou le graphème) concerné et en justifiant par la position dans le mot." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-16-exo-06",
    notion: "fr-16",
    savoirFaire: ["phonemes-graphemes","liaisons"],
    difficulte: 2,
    question: "Identifiez la valeur de <x> :\ntaxi · examen · dix · luxe · sixième",
    reponseType: "**Réponse attendue :** taxi → /ks/ · examen → /gz/ (<ex> + voyelle) · dix → /s/ (en finale, mot isolé) · luxe → /ks/ · sixième → /z/.",
    explication: [
      { type: "note", text: "💡 Explication : dans « sixième » (comme « dixième »), <x> prend la valeur /z/ devant le suffixe -ième. Ce n'est pas une liaison : la liaison ne joue qu'entre deux mots (« six enfants » → /sizɑ̃fɑ̃/)." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-16-exo-07",
    notion: "fr-16",
    savoirFaire: ["phonemes-graphemes","accents","transcription"],
    difficulte: 3,
    enonce: "« j'ai vu se rouvrir les portes qui me séparaient du monde. » (Marguerite Yourcenar, Comment Wang-Fô fut sauvé)",
    question: "Transcrivez « rouvrir » en API. Comptez phonèmes, graphèmes et lettres.",
    reponseType: "**Réponse attendue :** « rouvrir » → **/ʁuvʁiʁ/** : 7 lettres, 6 graphèmes, 6 phonèmes. Décomposition : <r> /ʁ/, <ou> /u/ (digramme), <v> /v/, <r> /ʁ/, <i> /i/, <r> /ʁ/.",
    explication: [
      { type: "note", text: "💡 Explication : 7 lettres pour 6 graphèmes car le digramme <ou> compte 2 lettres pour 1 unité ; 6 graphèmes pour 6 phonèmes car tous sont prononcés (aucune lettre muette ici)." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-16-exo-08",
    notion: "fr-16",
    savoirFaire: ["phonemes-graphemes"],
    difficulte: 3,
    question: "Définissez phonétique et phonologie. Pourquoi le /ʁ/ roulé et le /ʁ/ grasseyé sont-ils phonétiquement distincts mais phonologiquement identiques ?",
    reponseType: "**Explication :** la **phonétique** décrit physiquement les sons (articulation, acoustique) ; la **phonologie** étudie les sons comme unités fonctionnelles distinctives, les phonèmes.\n\n**Réponse attendue :** le /ʁ/ roulé et le /ʁ/ grasseyé sont deux sons différents (plan phonétique), mais aucune paire minimale ne les oppose en français : les substituer ne change jamais le sens d'un mot. Ce sont donc des **variantes (allophones)** d'un seul et même phonème /ʁ/ (plan phonologique).",
    explication: [],
  },
];
