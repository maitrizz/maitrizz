// Banque d'exercices OUVERTS, notion 12 « L'accord du participe passé ».
//
// Migration de structure : exercices repris depuis l'onglet « Application » v1,
// sans réécriture pédagogique. Le fond sera repris dans un chantier ultérieur.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_ACCORD_PARTICIPE_PASSE: TrainerExercice[] = [
  // TODO refonte exo
  {
    id: "fr-12-exo-01",
    notion: "fr-12",
    savoirFaire: ["etre","avoir-cod-avant","pronominaux"],
    difficulte: 1,
    question: "Choisissez la forme correcte et justifiez (auxiliaire + règle) :\na) « Elle est (parti / partie) en voyage. »   b) « Il a (dormi / dormie) longtemps. »   c) « Les lettres qu'il a (envoyé / envoyées). »   d) « Nous les avons (vu / vus). » (les = masculin pluriel)   e) « Elle a (monté / montée) les valises. »",
    reponseType: "a) **partie** : auxiliaire être → accord avec le sujet « elle » (féminin singulier).\n\nb) **dormi** : auxiliaire avoir, verbe intransitif, pas de COD → invariable.\n\nc) **envoyées** : auxiliaire avoir, « que » = COD antéposé, antécédent « lettres » (féminin pluriel) → accord.\n\nd) **vus** : auxiliaire avoir, « les » = COD antéposé (masculin pluriel) → accord.\n\ne) **monté** : auxiliaire avoir (monter transitif), COD « les valises » placé après → invariable.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-12-exo-02",
    notion: "fr-12",
    savoirFaire: ["etre","avoir-cod-avant","pronominaux"],
    difficulte: 1,
    question: "Appliquez le test -ir à chaque forme soulignée :\na) « Il faut <u>manger</u> des légumes. »   b) « Le repas <u>terminé</u>, ils sortirent. »   c) « Je l'ai entendu <u>chanter</u>. »   d) « Elle a <u>regardé</u> le film. »   e) « Il est allé <u>chercher</u> du pain. »",
    reponseType: "a) **infinitif** : « Il faut choisir » ✓ → manger.\n\nb) **participe passé** : « Le repas choisi… » ✓ → terminé, accordé avec « repas » (masculin singulier).\n\nc) **infinitif** : « Je l'ai entendu choisir » ✓ → chanter (subordonnée infinitive).\n\nd) **participe passé** : « Elle a choisi » ✓ → regardé, COD « le film » après → invariable.\n\ne) **infinitif** : « Il est allé choisir » ✓ → chercher.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-12-exo-03",
    notion: "fr-12",
    savoirFaire: ["etre","avoir-cod-avant","pronominaux"],
    difficulte: 1,
    question: "Vrai ou faux, justifiez :\na) Avec le pronom « en », le PP s'accorde avec le COD antéposé.\nb) Les verbes essentiellement pronominaux s'accordent avec le sujet.\nc) « Ils se sont souri » → « souri » est invariable.\nd) « les livres que j'ai lus » → « lus » s'accorde avec « livres ».",
    reponseType: "a) **Faux** : avec le pronom « en », le participe passé reste invariable : « J'en ai mangé ».\n\nb) **Vrai** : s'enfuir, se souvenir, se méfier… s'accordent avec le sujet.\n\nc) **Vrai** : « sourire à » → « se » est COI → PP invariable.\n\nd) **Vrai** : « que » = COD antéposé, antécédent « livres » (masculin pluriel) → lus.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-12-exo-04",
    notion: "fr-12",
    savoirFaire: ["etre","avoir-cod-avant","pronominaux","cas-particuliers"],
    difficulte: 2,
    question: "Accordez correctement et justifiez :\na) « Des efforts, il en a (fait / faits). »   b) « Combien de pages as-tu (lu / lues) ? »   c) « Quelle décision a-t-il (pris / prise) ? »   d) « Des erreurs ? Elle en a (commis / commises). »",
    reponseType: "a) **fait** : avec le pronom « en », le participe passé reste invariable.\n\nb) **lues** : « combien de pages » = COD antéposé (féminin pluriel) → accord.\n\nc) **prise** : « quelle décision » = COD antéposé (féminin singulier) → accord.\n\nd) **commis** : avec le pronom « en », le participe passé reste invariable, même si le nom repris est féminin pluriel.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-12-exo-05",
    notion: "fr-12",
    savoirFaire: ["etre","avoir-cod-avant","pronominaux"],
    difficulte: 2,
    enonce: "« Les photos qu'elle avait prises montraient les enfants qu'elle avait photographiés dans la cour. »",
    question: "Pour « prises » et « photographiés », identifiez le COD antéposé (nature, antécédent, genre, nombre) et justifiez l'accord.",
    reponseType: "**prises** : « que » = pronom relatif COD antéposé, antécédent « photos » (féminin pluriel) → prises. Justification : « prises » s'accorde avec l'antécédent du pronom relatif « que », « photos », COD placé avant l'auxiliaire avoir.\n\n**photographiés** : « que » = pronom relatif COD antéposé, antécédent « enfants » (masculin pluriel) → photographiés.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-12-exo-06",
    notion: "fr-12",
    savoirFaire: ["etre","avoir-cod-avant","pronominaux"],
    difficulte: 2,
    question: "Identifiez le rôle du pronom « se » (COD / COI / non analysable) et accordez :\na) « Elle s'est (laver). »   b) « Elle s'est (laver) les mains. »   c) « Ils se sont (téléphoner). »   d) « Elles se sont (souvenir). »   e) « Ils se sont (regarder). »",
    reponseType: "a) **lavée** : « se » = COD → accord avec le sujet « elle » (féminin singulier).\n\nb) **lavé** : « se » = COI, COD « les mains » après → invariable.\n\nc) **téléphoné** : « téléphoner à » → « se » = COI → invariable.\n\nd) **souvenues** : essentiellement pronominal → accord avec le sujet « elles » (féminin pluriel).\n\ne) **regardés** : « se » = COD réciproque → accord avec le sujet « ils » (masculin pluriel).",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-12-exo-07",
    notion: "fr-12",
    savoirFaire: ["etre","avoir-cod-avant","pronominaux"],
    difficulte: 3,
    enonce: "« La décision qu'il avait prise la veille, personne ne l'avait encore comprise. Les délégués s'étaient regardés sans mot dire. »",
    question: "Justifiez en une phrase rédigée les accords de « prise », « comprise » et « regardés ».",
    reponseType: "**prise** (féminin singulier) : auxiliaire avoir, « que » = pronom relatif COD antéposé, antécédent « décision » (féminin singulier) → accord.\n\n**comprise** (féminin singulier) : auxiliaire avoir, pronom personnel « l' » = COD antéposé, mis pour « la décision » (féminin singulier) → accord.\n\n**regardés** (masculin pluriel) : verbe pronominal réciproque, « se » = COD → accord avec le sujet « les délégués » (masculin pluriel).",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-12-exo-08",
    notion: "fr-12",
    savoirFaire: ["etre","avoir-cod-avant","pronominaux"],
    difficulte: 3,
    enonce: "« Elles se sont écrit des lettres touchantes, puis elles se les sont lues à voix haute. »",
    question: "a) Justifiez l'invariabilité de « écrit ». b) Justifiez l'accord de « lues ».",
    reponseType: "a) **écrit** invariable : « écrire à » → « se » = COI ; le COD « des lettres » est placé après le verbe.\n\nb) **lues** : « les » = COD antéposé, mis pour « les lettres » (féminin pluriel) → accord. (Ici « se » est COI, c'est « les » qui commande l'accord.)",
    explication: [
      { type: "note", text: "💡 Bien distinguer le pronom réfléchi « se » du pronom COD « les » : c'est le COD antéposé qui déclenche l'accord." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-12-exo-09",
    notion: "fr-12",
    savoirFaire: ["etre","avoir-cod-avant","pronominaux","cas-particuliers"],
    difficulte: 3,
    enonce: "« Les mille euros que ce voyage m'a [coûté] en valaient la peine. La cantatrice que j'ai [entendu] chanter était éblouissante, mais l'œuvre que j'ai [entendu] jouer m'a déçu. La situation était plus grave qu'on ne l'avait [dit]. »",
    question: "Accordez chaque participe entre crochets et justifiez votre choix.",
    reponseType: "**coûté** invariable : *coûté combien ?* « mille euros » est un complément de prix (mesure), pas un COD.\n\n**entendue** (la cantatrice) : la cantatrice **fait** l'action de chanter (elle chante) → accord avec « que », mis pour « cantatrice » (féminin singulier).\n\n**entendu** (l'œuvre) invariable : l'œuvre **subit** l'action (elle est jouée, elle ne joue pas) → pas d'accord.\n\n**dit** invariable : « l' » est le pronom neutre, il reprend « que la situation était grave » (une idée), pas un nom.\n\n« *coûté* reste invariable : *mille euros* répond à *combien ?*, c'est un complément de mesure, non un COD. *entendue chanter* s'accorde (la cantatrice fait l'action de chanter), tandis que *entendu jouer* reste invariable (l'œuvre subit l'action). *dit* reste invariable : *l'* est neutre et reprend toute la proposition, pas un nom. »",
    explication: [],
  },
];
