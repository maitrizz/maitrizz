// Banque d'exercices OUVERTS, notion 13 « Les homophones grammaticaux ».
//
// CHANTIER 2 (refonte façon Grévisse, DOCTRINE_EXERCICES.md) : exercices réécrits.
// 3 niveaux : Fondamentaux · Concours (la cible) · Expert (au-delà : c'est/s'est/
// sais/sait, leur possessif singulier/pluriel, « on » + négation « n' », ce pronom
// vs déterminant).
// Méthode signature : le test de l'imparfait (a→avait, est→était, ont→avaient…).
// Les paires hors filtre (on/ont, ou/où…) sont travaillées dans les exercices
// « corriger un texte » multi-paires.
// 6 savoir-faire : a/à · et/est · son/sont · ce/se · ces/ses/c'est/s'est · leur/leurs.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_HOMOPHONES_GRAMMATICAUX: TrainerExercice[] = [
  // ————————————————————————— Fondamentaux —————————————————————————
  {
    id: "fr-13-exo-f1",
    notion: "fr-13",
    savoirFaire: ["a-a"],
    difficulte: 1,
    question:
      "Complétez par « a » ou « à » et justifiez par le test de l'imparfait :\n« Il ___ pris le train ___ huit heures. »",
    reponseType:
      "« Il **a** pris le train **à** huit heures. » Test : « a » → « avait » (verbe avoir) fonctionne ; « à » → « avait » impossible (c'est une préposition).",
    explication: [],
  },
  {
    id: "fr-13-exo-f2",
    notion: "fr-13",
    savoirFaire: ["et-est"],
    difficulte: 1,
    question:
      "Complétez par « et » ou « est » :\n« Mon frère ___ grand ___ mince. »",
    reponseType:
      "« Mon frère **est** grand **et** mince. » Test : « est » → « était » (verbe être) ; « et » → « était » impossible (conjonction = « et puis »).",
    explication: [],
  },
  {
    id: "fr-13-exo-f3",
    notion: "fr-13",
    savoirFaire: ["son-sont"],
    difficulte: 1,
    question:
      "Complétez par « son » ou « sont » :\n« ___ frère et ___ cousin ___ venus. »",
    reponseType:
      "« **Son** frère et **son** cousin **sont** venus. » « son » = déterminant possessif (→ « mon ») ; « sont » = verbe être (→ « étaient »).",
    explication: [],
  },
  {
    id: "fr-13-exo-f4",
    notion: "fr-13",
    savoirFaire: ["ce-se"],
    difficulte: 1,
    question:
      "Complétez par « ce » ou « se » :\n« ___ chien ___ promène seul. »",
    reponseType:
      "« **Ce** chien **se** promène seul. » « ce » = déterminant démonstratif (devant un nom, → « le ») ; « se » = pronom réfléchi (devant un verbe, → « il se promène »).",
    explication: [],
  },
  {
    id: "fr-13-exo-f5",
    notion: "fr-13",
    savoirFaire: ["ces-ses-cest-sest"],
    difficulte: 1,
    question:
      "Complétez par « ces » ou « ses » :\n« Range ___ affaires (les tiennes) et regarde ___ photos (celles-là). »",
    reponseType:
      "« Range **ses** affaires et regarde **ces** photos. » « ses » = possessif (les siennes, → « mes ») ; « ces » = démonstratif (= ceux-là, → « ce / cette » au singulier).",
    explication: [],
  },
  {
    id: "fr-13-exo-f6",
    notion: "fr-13",
    savoirFaire: ["leur-leurs"],
    difficulte: 1,
    question:
      "Complétez par « leur » ou « leurs » :\n« Je ___ ai rendu ___ livres. »",
    reponseType:
      "« Je **leur** ai rendu **leurs** livres. » « leur » devant un verbe = pronom personnel **invariable** (= « lui » au pluriel) ; « leurs » devant un nom pluriel = déterminant possessif (qui s'accorde).",
    explication: [],
  },

  // ————————————————————————— Concours (la cible) —————————————————————————
  {
    id: "fr-13-exo-c1",
    notion: "fr-13",
    savoirFaire: ["a-a"],
    difficulte: 2,
    question:
      "**Justifiez la graphie** (nature + test) :\n« Elle a réussi à convaincre. »",
    reponseType:
      "« **a** » : verbe avoir (3e personne, → « elle avait réussi »).\n« **à** » : préposition introduisant l'infinitif « convaincre » (→ « avait » impossible).\nFormule attendue : nommer la nature, puis appliquer le test de l'imparfait.",
    explication: [],
  },
  {
    id: "fr-13-exo-c2",
    notion: "fr-13",
    savoirFaire: ["a-a", "et-est"],
    difficulte: 2,
    question:
      "Corrigez les homophones mal orthographiés (test de l'imparfait) :\n« A huit heures, on ont fini, et chacun et rentré. »",
    reponseType:
      "« **À** huit heures, on **a** fini, et chacun **est** rentré. »\n- « A » → « À » (préposition de temps) ;\n- « ont » → « a » (« on » = pronom singulier → verbe au singulier) ;\n- second « et » → « est » (verbe être : « était rentré »).",
    explication: [],
  },
  {
    id: "fr-13-exo-c3",
    notion: "fr-13",
    savoirFaire: ["ces-ses-cest-sest"],
    difficulte: 2,
    question:
      "Complétez par « ces », « ses », « c'est » ou « s'est » :\n« ___ un fait : il ___ trompé en rangeant ___ affaires dans ___ cartons. »",
    reponseType:
      "« **C'est** un fait : il **s'est** trompé en rangeant **ses** affaires dans **ces** cartons. »\n« c'est » = « cela est » ; « s'est » = pronominal (« il se… », → « je me suis ») ; « ses » = possessif ; « ces » = démonstratif.",
    explication: [],
  },
  {
    id: "fr-13-exo-c4",
    notion: "fr-13",
    savoirFaire: ["ce-se"],
    difficulte: 2,
    question:
      "Complétez et justifiez :\n« ___ que je sais ___ voit. »",
    reponseType:
      "« **Ce** que je sais **se** voit. » « ce » = pronom démonstratif (→ « cela ») ; « se » = pronom réfléchi (pronominal de sens passif « est vu », → « il se voit »).",
    explication: [],
  },
  {
    id: "fr-13-exo-c5",
    notion: "fr-13",
    savoirFaire: ["leur-leurs"],
    difficulte: 2,
    question:
      "Complétez et justifiez :\n« Les enfants ouvrent ___ cadeaux ; je ___ souris. »",
    reponseType:
      "« Les enfants ouvrent **leurs** cadeaux ; je **leur** souris. » « leurs » = déterminant possessif (plusieurs cadeaux → accord) ; « leur » = pronom personnel **invariable** (= « à eux », jamais de « s »).",
    explication: [],
  },
  {
    id: "fr-13-exo-c6",
    notion: "fr-13",
    savoirFaire: ["son-sont"],
    difficulte: 2,
    question:
      "Complétez par « son » ou « sont » (test de l'imparfait) :\n« ___ cartable et ___ cahier ___ restés sur la table. »",
    reponseType:
      "« **Son** cartable et **son** cahier **sont** restés sur la table. » « son » → « mon » (possessif) ; « sont » → « étaient » (verbe être).",
    explication: [],
  },
  {
    id: "fr-13-exo-c7",
    notion: "fr-13",
    savoirFaire: ["ces-ses-cest-sest", "a-a", "et-est"],
    difficulte: 2,
    question:
      "Corrigez tous les homophones :\n« Son ami ses trompé : ces livres sont a lui, est il les a oubliés. »",
    reponseType:
      "« Son ami **s'est** trompé : **ses** livres sont **à** lui, **et** il les a oubliés. »\n- « ses » → « s'est » (pronominal) ;\n- « ces » → « ses » (possessif : ses livres à lui) ;\n- « a » → « à » (préposition) ;\n- « est » → « et » (conjonction).",
    explication: [],
  },
  {
    id: "fr-13-exo-c8",
    notion: "fr-13",
    savoirFaire: ["leur-leurs"],
    difficulte: 2,
    question:
      "Complétez et justifiez chaque « leur » :\n« Je ___ ai dit de prendre ___ manteaux et ___ parapluie. »",
    reponseType:
      "« Je **leur** ai dit de prendre **leurs** manteaux et **leur** parapluie. »\n- « leur » (devant le verbe « ai dit ») : pronom invariable ;\n- « leurs » manteaux : un chacun, plusieurs au total → pluriel ;\n- « leur » parapluie : un seul partagé → singulier (le nombre du possessif suit l'objet possédé).",
    explication: [],
  },
  {
    id: "fr-13-exo-c9",
    notion: "fr-13",
    savoirFaire: ["a-a"],
    difficulte: 2,
    question:
      "Dans une copie, justifiez les corrections de a / à :\n« Cette œuvre invite a réfléchir et a pour but de convaincre. »",
    reponseType:
      "« Cette œuvre invite **à** réfléchir et **a** pour but de convaincre. »\n- « à réfléchir » : préposition (test « avait » impossible) ;\n- « a pour but » : verbe avoir (→ « avait pour but »).\nC'est le piège du développement rédigé : a / à reste fréquent dans une phrase soutenue.",
    explication: [],
  },
  {
    id: "fr-13-exo-c10",
    notion: "fr-13",
    savoirFaire: ["ce-se", "ces-ses-cest-sest", "son-sont", "a-a"],
    difficulte: 2,
    question:
      "Corrigez tous les homophones :\n« Ce matin, il ce lève tôt ; ses enfants jouent dans ses jardins qui son a eux. »",
    reponseType:
      "« Ce matin, il **se** lève tôt ; ses enfants jouent dans **ces** jardins qui **sont** **à** eux. »\n- « ce » → « se » (pronom réfléchi devant le verbe) ;\n- « ses » jardins → « ces » jardins (démonstratif : ces jardins-là) ;\n- « son » → « sont » (verbe être) ;\n- « a » → « à » (préposition).",
    explication: [],
  },

  // ————————————————————————— Expert (au-delà de l'épreuve) —————————————————————————
  {
    id: "fr-13-exo-e1",
    notion: "fr-13",
    savoirFaire: ["ces-ses-cest-sest"],
    difficulte: 3,
    question:
      "Complétez par « c'est », « s'est », « sais » ou « sait » :\n« ___ difficile : personne ne ___ pourquoi il ___ enfui, et je ne ___ pas où il est. »",
    reponseType:
      "« **C'est** difficile : personne ne **sait** pourquoi il **s'est** enfui, et je ne **sais** pas où il est. »\n- « c'est » = cela est ;\n- « sait » / « sais » = verbe *savoir* (3e / 1re personne) ;\n- « s'est » = pronominal (« il s'est enfui »).",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : la série c'est / s'est / sais / sait se tranche en identifiant qui parle (sais = je/tu, sait = il), et en testant « cela est » (c'est) ou « se + verbe » (s'est).",
      },
    ],
  },
  {
    id: "fr-13-exo-e2",
    notion: "fr-13",
    savoirFaire: ["leur-leurs"],
    difficulte: 3,
    question:
      "Justifiez le nombre du « leur » possessif :\na) « Ils ont perdu leur chemin. »\nb) « Ils ont perdu leurs illusions. »",
    reponseType:
      "a) « **leur** chemin » : un seul chemin commun → singulier.\nb) « **leurs** illusions » : plusieurs → pluriel.\nLe nombre du déterminant possessif « leur(s) » suit le **nombre de l'objet possédé**, pas celui des possesseurs : c'est ce qui rend ce cas délicat.",
    explication: [],
  },
  {
    id: "fr-13-exo-e3",
    notion: "fr-13",
    savoirFaire: ["a-a"],
    difficulte: 3,
    question:
      "Complétez et justifiez (attention au « n' » de la négation et au test) :\n« ___ ___ rien dit ___ personne. »",
    reponseType:
      "« **On** **n'a** rien dit **à** personne. »\n- « on » = pronom (→ « il n'a ») ;\n- « a » = verbe avoir (→ « avait ») ;\n- le « n' » de la négation est **obligatoire** avec « rien » / « personne » (« on a rien dit » est fautif) ;\n- « à personne » = préposition.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : le piège n'est pas seulement l'homophone, c'est le « ne » de négation effacé à l'oral. « On n'a rien » s'entend comme « on a rien » : le test du sens (négation) doit rétablir le « n' ».",
      },
    ],
  },
  {
    id: "fr-13-exo-e4",
    notion: "fr-13",
    savoirFaire: ["ce-se"],
    difficulte: 3,
    question:
      "« ce » ou « se » ? Donnez la nature de chaque graphie :\na) « Il ne sait pas ce qu'il veut. »\nb) « Tout se sait dans ce village. »",
    reponseType:
      "a) « **ce** qu'il veut » : « ce » est un **pronom démonstratif** (antécédent de la relative, = « la chose que »).\nb) « **se** sait » : pronom réfléchi (pronominal de sens passif, « est su ») ; « **ce** village » : déterminant démonstratif.\nMême son, trois emplois : pronom démonstratif, pronom réfléchi, déterminant démonstratif.",
    explication: [],
  },
  {
    id: "fr-13-exo-e5",
    notion: "fr-13",
    savoirFaire: ["a-a", "et-est", "son-sont", "ce-se", "ces-ses-cest-sest", "leur-leurs"],
    difficulte: 3,
    question:
      "Corrigez tous les homophones de ce texte :\n« Ses élèves on bien travaillé ; leurs maîtresse et fière, est elle leur a dit que ces un bon résultat. »",
    reponseType:
      "« **Ces** élèves **ont** bien travaillé ; **leur** maîtresse **est** fière, **et** elle leur a dit que **c'est** un bon résultat. »\n- « Ses » → « Ces » (démonstratif : ces élèves-là) ;\n- « on » → « ont » (verbe avoir) ;\n- « leurs » → « leur » (une seule maîtresse) ;\n- « et » → « est » (verbe être) ;\n- « est » → « et » (conjonction) ;\n- « ces » → « c'est » (cela est).",
    explication: [],
  },
];
