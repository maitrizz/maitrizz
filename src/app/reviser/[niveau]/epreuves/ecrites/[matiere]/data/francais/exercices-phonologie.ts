// Banque d'exercices OUVERTS, notion 16 « La phonologie ».
//
// CHANTIER 2 (refonte façon Grévisse, DOCTRINE_EXERCICES.md) : exercices réécrits.
// 3 niveaux : Fondamentaux · Concours (la cible) · Expert (au-delà : « e » caduc et
// loi des trois consonnes, polygraphie de /o/, transcription savante, statuts de
// liaison, opposition /e/ ~ /ɛ/).
// 6 savoir-faire : phonèmes/graphèmes · syllabes · accents · liaisons · homophones
// · transcription (API).

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_PHONOLOGIE: TrainerExercice[] = [
  // ————————————————————————— Fondamentaux —————————————————————————
  {
    id: "fr-16-exo-f1",
    notion: "fr-16",
    savoirFaire: ["phonemes-graphemes"],
    difficulte: 1,
    question:
      "Dans le mot « chat », comptez les lettres, les graphèmes et les phonèmes.",
    reponseType:
      "« chat » = /ʃa/.\n- **4 lettres** : c, h, a, t.\n- **3 graphèmes** : <ch> (= /ʃ/), <a> (= /a/), <t> (muet).\n- **2 phonèmes** : /ʃ/, /a/.\nLe <t> final est muet (valeur zéro) : il ne faut pas confondre les trois niveaux.",
    explication: [],
  },
  {
    id: "fr-16-exo-f2",
    notion: "fr-16",
    savoirFaire: ["transcription"],
    difficulte: 1,
    question:
      "Transcrivez en API :\na) « beau »\nb) « oiseau »",
    reponseType:
      "a) /bo/.\nb) /wazo/.\nAttention aux graphèmes complexes : <eau> = /o/, <oi> = /wa/, le <s> intervocalique = /z/.",
    explication: [],
  },
  {
    id: "fr-16-exo-f3",
    notion: "fr-16",
    savoirFaire: ["syllabes"],
    difficulte: 1,
    question:
      "Combien de syllabes orales ?\na) « maison »\nb) « chocolat »\nc) « ordinateur »",
    reponseType:
      "a) **2** (mai-son /mɛ-zɔ̃/).\nb) **3** (cho-co-lat /ʃɔ-kɔ-la/).\nc) **4** (or-di-na-teur /ɔʁ-di-na-tœʁ/).",
    explication: [],
  },
  {
    id: "fr-16-exo-f4",
    notion: "fr-16",
    savoirFaire: ["homophones"],
    difficulte: 1,
    question:
      "Ces mots sont-ils homophones (même prononciation) ?\na) « cent / sang / sans »\nb) « pêche / pèche »",
    reponseType:
      "a) **oui** : tous se prononcent /sɑ̃/.\nb) **oui** : les deux se prononcent /pɛʃ/.\nCe sont des **homophones lexicaux** : même son, mais sens et graphies différents.",
    explication: [],
  },
  {
    id: "fr-16-exo-f5",
    notion: "fr-16",
    savoirFaire: ["accents"],
    difficulte: 1,
    question:
      "Quel son note l'accent ?\na) « é » dans « été »\nb) « è » dans « père »",
    reponseType:
      "a) « é » (accent aigu) = /e/ (voyelle fermée).\nb) « è » (accent grave) = /ɛ/ (voyelle ouverte).\nIci, l'accent distingue le timbre de la voyelle.",
    explication: [],
  },
  {
    id: "fr-16-exo-f6",
    notion: "fr-16",
    savoirFaire: ["liaisons"],
    difficulte: 1,
    question:
      "H muet ou h aspiré ? (test : élision et liaison possibles ?)\na) « l'homme »\nb) « le héros »",
    reponseType:
      "a) **h muet** : l'élision (« l'homme ») et la liaison (« les hommes » /z/) sont possibles.\nb) **h aspiré** : ni élision (« le héros », pas « l'héros ») ni liaison (« les héros », pas de /z/).\nLe h aspiré bloque la liaison et l'élision.",
    explication: [],
  },

  // ————————————————————————— Concours (la cible) —————————————————————————
  {
    id: "fr-16-exo-c1",
    notion: "fr-16",
    savoirFaire: ["transcription"],
    difficulte: 2,
    question:
      "Transcrivez en API (mots à valeur exceptionnelle) :\na) « femme »\nb) « second »",
    reponseType:
      "a) /fam/ : le « e » se prononce /a/ (exception).\nb) /səgɔ̃/ : le « c » se prononce /g/, le « d » final est muet.\nCes mots échappent aux correspondances grapho-phonémiques régulières.",
    explication: [],
  },
  {
    id: "fr-16-exo-c2",
    notion: "fr-16",
    savoirFaire: ["phonemes-graphemes", "transcription"],
    difficulte: 2,
    question:
      "Comptez les lettres, les graphèmes et les phonèmes :\n« beaucoup »",
    reponseType:
      "« beaucoup » = /boku/.\n- **8 lettres** : b, e, a, u, c, o, u, p.\n- **5 graphèmes** : <b>, <eau> (= /o/), <c> (= /k/), <ou> (= /u/), <p> (muet).\n- **4 phonèmes** : /b/, /o/, /k/, /u/.\nNe pas confondre les 8 lettres et les 4 phonèmes (piège classique).",
    explication: [],
  },
  {
    id: "fr-16-exo-c3",
    notion: "fr-16",
    savoirFaire: ["phonemes-graphemes"],
    difficulte: 2,
    question:
      "Nommez le type de valeur du <c> :\na) « café » (/k/)\nb) « cinéma » (/s/)\nc) « tabac » (muet)",
    reponseType:
      "a) /k/ : valeur **de base** (devant a, o, u).\nb) /s/ : valeur **de position** (devant e, i, y).\nc) muet : valeur **zéro** (lettre finale non prononcée).\nLe <c> illustre la polyphonie d'un graphème.",
    explication: [],
  },
  {
    id: "fr-16-exo-c4",
    notion: "fr-16",
    savoirFaire: ["liaisons"],
    difficulte: 2,
    question:
      "La liaison se fait-elle ? Justifiez :\na) « les enfants »\nb) « et alors »\nc) « un grand homme »",
    reponseType:
      "a) **oui**, liaison obligatoire (déterminant + nom : « les_enfants » /z/).\nb) **non**, liaison interdite après « et ».\nc) **oui**, liaison (adjectif antéposé + nom : « grand_homme » /t/).",
    explication: [],
  },
  {
    id: "fr-16-exo-c5",
    notion: "fr-16",
    savoirFaire: ["syllabes"],
    difficulte: 2,
    question:
      "Découpez en syllabes orales et comptez :\na) « petite »\nb) « actuellement »",
    reponseType:
      "a) « petite » /pə-tit/ : **2 syllabes** (le « e » final est muet).\nb) « actuellement » /ak-tɥɛl-mɑ̃/ : **3 syllabes**.\nÀ l'oral, le « e » caduc final ne forme pas de syllabe.",
    explication: [],
  },
  {
    id: "fr-16-exo-c6",
    notion: "fr-16",
    savoirFaire: ["homophones"],
    difficulte: 2,
    question:
      "Donnez au moins trois homophones de « ver » et distinguez-les.",
    reponseType:
      "« ver » (animal), « verre » (récipient), « vert » (couleur), « vers » (préposition / poésie), « vair » (fourrure). Tous se prononcent /vɛʁ/ : ce sont des **homophones lexicaux** (même son, graphies et sens différents).",
    explication: [],
  },
  {
    id: "fr-16-exo-c7",
    notion: "fr-16",
    savoirFaire: ["liaisons"],
    difficulte: 2,
    question:
      "**Prouvez, par un test**, que « héros » a un h aspiré mais « héroïne » un h muet.",
    reponseType:
      "Test de l'élision et de la liaison :\n- « le héros » (pas « l'héros »), « les | héros » (pas de liaison) → **h aspiré**.\n- « l'héroïne » (élision) et « les_héroïnes » (liaison /z/) → **h muet**.\nDeux mots de la même famille, deux h différents : seul le test tranche.",
    explication: [],
  },
  {
    id: "fr-16-exo-c8",
    notion: "fr-16",
    savoirFaire: ["phonemes-graphemes"],
    difficulte: 2,
    question:
      "Quel phonème note le graphème souligné ?\na) « monta<u>gn</u>e »\nb) « <u>ph</u>are »\nc) « fi<u>ll</u>e »",
    reponseType:
      "a) <gn> = /ɲ/.\nb) <ph> = /f/.\nc) <ill> = /j/ (semi-consonne).\nCe sont des graphèmes complexes (plusieurs lettres pour un seul phonème).",
    explication: [],
  },
  {
    id: "fr-16-exo-c9",
    notion: "fr-16",
    savoirFaire: ["transcription"],
    difficulte: 2,
    question:
      "Transcrivez la voyelle nasale :\na) « pain »\nb) « pont »\nc) « banc »\nd) « brun »",
    reponseType:
      "a) /ɛ̃/ (« ain »).\nb) /ɔ̃/ (« on »).\nc) /ɑ̃/ (« an »).\nd) /œ̃/ (« un »), souvent réalisé /ɛ̃/ en français standard moderne.\nCe sont les voyelles nasales du français.",
    explication: [],
  },
  {
    id: "fr-16-exo-c10",
    notion: "fr-16",
    savoirFaire: ["accents"],
    difficulte: 2,
    question:
      "L'accent modifie-t-il la prononciation ?\na) « a » / « à »\nb) « ou » / « où »\nc) « le » / « thé »",
    reponseType:
      "a) « a » / « à » : **même son** /a/ (l'accent grave est purement distinctif, orthographique).\nb) « ou » / « où » : même son /u/ (accent distinctif).\nc) « le » /lə/ (e caduc) vs « thé » /te/ (é = /e/) : ici l'accent **change** le son.\nL'accent grave sur a/u ne modifie pas la prononciation ; sur e, il fixe le timbre.",
    explication: [],
  },

  // ————————————————————————— Expert (au-delà de l'épreuve) —————————————————————————
  {
    id: "fr-16-exo-e1",
    notion: "fr-16",
    savoirFaire: ["syllabes", "transcription"],
    difficulte: 3,
    question:
      "Le « e » de « petit » se prononce-t-il toujours ? Analysez :\na) « le petit »\nb) « un petit chat »",
    reponseType:
      "Le « e » caduc /ə/ est **instable** : il tombe ou se maintient selon l'entourage consonantique (loi des trois consonnes / loi de Grammont).\na) « le petit » : le /ə/ peut tomber (« le p'tit »), car sa chute ne crée pas d'amas de trois consonnes.\nb) « un petit chat » : le /ə/ tend à se maintenir, sinon « p-t-ch » formerait un amas difficile.\nSa réalisation dépend donc du contexte et du registre.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : le « e » caduc (ou schwa) est le phonème le plus variable du français ; savoir qu'il dépend du contexte (et non d'une règle fixe) est valorisé.",
      },
    ],
  },
  {
    id: "fr-16-exo-e2",
    notion: "fr-16",
    savoirFaire: ["phonemes-graphemes"],
    difficulte: 3,
    question:
      "Relevez toutes les graphies du phonème /o/ dans ces mots :\n« eau », « auto », « pot », « hôte »",
    reponseType:
      "/o/ s'écrit ici : <eau> (eau), <au> (auto), <o> (pot), <ô> (hôte).\nUn même phonème /o/ correspond à de nombreux graphèmes : c'est la **polygraphie phonique**, l'une des sources majeures des difficultés orthographiques du français.",
    explication: [],
  },
  {
    id: "fr-16-exo-e3",
    notion: "fr-16",
    savoirFaire: ["transcription"],
    difficulte: 3,
    question:
      "Transcrivez en API et justifiez les irrégularités :\n« aquarium »",
    reponseType:
      "/akwaʁjɔm/.\n- <qu> = /kw/ (et non /k/ : prononciation savante, d'origine latine) ;\n- <a> = /a/ ;\n- <um> final = /ɔm/ (latinisme, comme dans « album », « maximum »).\nMot emprunté au latin, il échappe aux correspondances courantes du français.",
    explication: [],
  },
  {
    id: "fr-16-exo-e4",
    notion: "fr-16",
    savoirFaire: ["liaisons"],
    difficulte: 3,
    question:
      "Classez ces liaisons (obligatoire · facultative · interdite) :\na) « les amis »\nb) « je suis allé » (oral courant)\nc) « des héros »\nd) « tout à coup »",
    reponseType:
      "a) **obligatoire** (déterminant + nom : « les_amis » /z/).\nb) **facultative** (après un verbe : réalisée en registre soutenu, omise en courant).\nc) **interdite** (h aspiré : « des | héros »).\nd) **obligatoire** (locution figée : « tout_à coup » /t/).\nTrois statuts de liaison, plus les cas figés.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : distinguer liaison obligatoire, facultative et interdite (et repérer les locutions figées) est exactement ce que le jury attend sur la liaison.",
      },
    ],
  },
  {
    id: "fr-16-exo-e5",
    notion: "fr-16",
    savoirFaire: ["accents", "transcription"],
    difficulte: 3,
    question:
      "Justifiez la voyelle (/e/ fermé ou /ɛ/ ouvert) :\na) « pré »\nb) « près »\nc) « lait »",
    reponseType:
      "a) « pré » /pʁe/ : /e/ **fermé** (« é », accent aigu, syllabe ouverte).\nb) « près » /pʁɛ/ : /ɛ/ **ouvert** (« è », accent grave).\nc) « lait » /lɛ/ : /ɛ/ **ouvert** (graphème « ai »).\nEn finale, « é » note /e/ fermé ; « è », « ê » et « ai » notent /ɛ/ ouvert.",
    explication: [],
  },
];
