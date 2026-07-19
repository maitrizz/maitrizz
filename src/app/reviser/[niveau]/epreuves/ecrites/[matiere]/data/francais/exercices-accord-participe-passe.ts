// Banque d'exercices OUVERTS, notion 12 « L'accord du participe passé ».
//
// CHANTIER 2 (refonte façon Grévisse, DOCTRINE_EXERCICES.md) : exercices réécrits.
// 3 niveaux : Fondamentaux · Concours (la cible) · Expert (au-delà = les cas « hors
// attendus » du cours : perception + infinitif, pronominaux dont « se » est toujours
// COI, COD de mesure, neutre « l' », COD antéposé d'un pronominal).
// 4 savoir-faire : avec être · avec avoir (COD avant) · pronominaux · cas particuliers.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_ACCORD_PARTICIPE_PASSE: TrainerExercice[] = [
  // ————————————————————————— Fondamentaux —————————————————————————
  {
    id: "fr-12-exo-f1",
    notion: "fr-12",
    savoirFaire: ["etre"],
    difficulte: 1,
    question:
      "Accordez le participe passé :\na) « Elle est (parti). »\nb) « Les fleurs sont (fané). »",
    reponseType:
      "a) « **partie** » (accord avec le sujet « elle », féminin singulier).\nb) « **fanées** » (accord avec « fleurs », féminin pluriel).\nAvec l'auxiliaire **être**, le participe passé s'accorde avec le sujet.",
    explication: [],
  },
  {
    id: "fr-12-exo-f2",
    notion: "fr-12",
    savoirFaire: ["avoir-cod-avant"],
    difficulte: 1,
    question:
      "Accordez le participe passé :\na) « Elles ont (mangé). »\nb) « Elle a (pris) une pomme. »",
    reponseType:
      "a) « **mangé** » (invariable : aucun COD).\nb) « **pris** » (invariable : le COD « une pomme » est placé après le verbe).\nAvec **avoir**, pas d'accord si le COD est absent ou placé après.",
    explication: [],
  },
  {
    id: "fr-12-exo-f3",
    notion: "fr-12",
    savoirFaire: ["avoir-cod-avant"],
    difficulte: 1,
    question:
      "Accordez le participe passé :\na) « La pomme que j'ai (mangé). »\nb) « Les lettres, je les ai (écrit). »",
    reponseType:
      "a) « **mangée** » (le COD « que » = « la pomme » est placé avant → accord féminin singulier).\nb) « **écrites** » (le COD « les » = « les lettres » est avant → accord féminin pluriel).\nAvec **avoir**, le PP s'accorde avec le COD quand celui-ci précède.",
    explication: [],
  },
  {
    id: "fr-12-exo-f4",
    notion: "fr-12",
    savoirFaire: ["cas-particuliers"],
    difficulte: 1,
    question:
      "« -er » ou « -é » ? Justifiez par le test (mordre / mordu) :\na) « Il faut (travailler). »\nb) « Il a (travaillé). »",
    reponseType:
      "a) « **travailler** » (infinitif : « il faut *mordre* » fonctionne).\nb) « **travaillé** » (participe : « il a *mordu* »).\nLe remplacement par un verbe du 3e groupe (mordre / mordu) tranche entre l'infinitif et le participe.",
    explication: [],
  },
  {
    id: "fr-12-exo-f5",
    notion: "fr-12",
    savoirFaire: ["cas-particuliers"],
    difficulte: 1,
    question:
      "Accordez le participe passé employé seul :\na) « une lettre (signé) »\nb) « (Étonné), elles se turent. »",
    reponseType:
      "a) « **signée** » (épithète du nom « lettre »).\nb) « **Étonnées** » (épithète détachée, accord avec « elles »).\nEmployé seul (sans auxiliaire), le participe passé s'accorde comme un adjectif.",
    explication: [],
  },
  {
    id: "fr-12-exo-f6",
    notion: "fr-12",
    savoirFaire: ["pronominaux"],
    difficulte: 1,
    question:
      "Accordez le participe passé :\na) « Elle s'est (lavé). »\nb) « Ils se sont (rencontré). »",
    reponseType:
      "a) « **lavée** » (« se » = COD, accord avec le sujet).\nb) « **rencontrés** » (« se » = COD réciproque, accord avec le sujet pluriel).\nQuand « se » est COD, le participe passé s'accorde.",
    explication: [],
  },

  // ————————————————————————— Concours (la cible) —————————————————————————
  {
    id: "fr-12-exo-c1",
    notion: "fr-12",
    savoirFaire: ["avoir-cod-avant"],
    difficulte: 2,
    question:
      "**Justifiez l'accord par une manipulation** (trouvez le COD et sa place) :\n« Les efforts que vous avez (fourni). »",
    reponseType:
      "« **fournis** ». Manipulation : « avez fourni *quoi* ? » → « que » = « les efforts », placé **avant** le verbe → accord au masculin pluriel. Avec **avoir**, le PP s'accorde avec le COD seulement s'il précède le verbe.",
    explication: [],
  },
  {
    id: "fr-12-exo-c2",
    notion: "fr-12",
    savoirFaire: ["pronominaux"],
    difficulte: 2,
    question:
      "Accordez et justifiez le rôle de « se » :\na) « Elle s'est (lavé) les mains. »\nb) « Ils se sont (parlé). »",
    reponseType:
      "a) « **lavé** » (invariable) : « se » est **COI** (elle lave les mains *à elle-même*) ; le COD « les mains » est placé après.\nb) « **parlé** » (invariable) : « se » est **COI** (on parle *à* quelqu'un).\nQuand « se » est COI, le participe passé ne s'accorde pas.",
    explication: [],
  },
  {
    id: "fr-12-exo-c3",
    notion: "fr-12",
    savoirFaire: ["etre", "avoir-cod-avant"],
    difficulte: 2,
    question:
      "Accordez (attention au double auxiliaire) :\na) « Elle est (descendu) très vite. »\nb) « Elle a (descendu) les valises. »",
    reponseType:
      "a) « **descendue** » (emploi intransitif, auxiliaire **être** → accord avec le sujet).\nb) « **descendu** » (emploi transitif, auxiliaire **avoir**, COD « les valises » placé après → invariable).\nLe même verbe change d'auxiliaire et de règle selon sa construction.",
    explication: [],
  },
  {
    id: "fr-12-exo-c4",
    notion: "fr-12",
    savoirFaire: ["cas-particuliers"],
    difficulte: 2,
    question:
      "Accordez (attention au pronom « en ») :\na) « Des erreurs, j'en ai (commis). »\nb) « Ces livres, j'en ai (lu) plusieurs. »",
    reponseType:
      "a) « **commis** » (invariable : le COD est « en », pronom neutre → pas d'accord).\nb) « **lu** » (invariable : avec « en », le PP ne s'accorde pas).\nLe pronom « en » comme COD laisse le participe passé invariable.",
    explication: [],
  },
  {
    id: "fr-12-exo-c5",
    notion: "fr-12",
    savoirFaire: ["cas-particuliers"],
    difficulte: 2,
    question:
      "Accordez le participe suivi d'un infinitif :\na) « Les robes qu'elle a (fait) faire. »\nb) « La maison qu'il a (laissé) construire. »",
    reponseType:
      "a) « **fait** » (invariable : « fait » suivi d'un infinitif reste toujours invariable).\nb) « **laissé** » (invariable : depuis la rectification de 1990, « laissé » + infinitif est invariable, comme « fait »).",
    explication: [],
  },
  {
    id: "fr-12-exo-c6",
    notion: "fr-12",
    savoirFaire: ["pronominaux"],
    difficulte: 2,
    question:
      "Accordez (verbes essentiellement pronominaux) :\na) « Elles se sont (souvenu) de tout. »\nb) « Ils se sont (enfui). »",
    reponseType:
      "a) « **souvenues** » (« se souvenir » n'existe qu'à la forme pronominale → accord avec le sujet).\nb) « **enfuis** » (« s'enfuir » essentiellement pronominal → accord avec le sujet).\nLes verbes essentiellement pronominaux accordent leur PP avec le sujet.",
    explication: [],
  },
  {
    id: "fr-12-exo-c7",
    notion: "fr-12",
    savoirFaire: ["cas-particuliers"],
    difficulte: 2,
    question:
      "**Prouvez, par le test de remplacement**, la bonne terminaison :\n« Il a commencé à (ranger / rangé) sa chambre, qu'il avait (laisser / laissé) en désordre. »",
    reponseType:
      "« **ranger** » (infinitif après « à » : test « commencé à *prendre* ») et « **laissé** » (participe après « avait » : test « avait *pris* »).\nLe remplacement par un verbe du 3e groupe (prendre / pris) tranche entre -er (infinitif) et -é (participe).",
    explication: [],
  },
  {
    id: "fr-12-exo-c8",
    notion: "fr-12",
    savoirFaire: ["avoir-cod-avant"],
    difficulte: 2,
    question:
      "Accordez (le COD est antéposé par un mot exclamatif ou interrogatif) :\na) « Quelle joie nous avons (éprouvé) ! »\nb) « Combien de fautes a-t-il (fait) ? »",
    reponseType:
      "a) « **éprouvée** » (COD antéposé « quelle joie », féminin singulier → accord).\nb) « **faites** » (COD « combien de fautes » placé avant → accord féminin pluriel).\nL'antéposition du COD peut venir d'un mot exclamatif ou interrogatif, pas seulement d'un pronom.",
    explication: [],
  },
  {
    id: "fr-12-exo-c9",
    notion: "fr-12",
    savoirFaire: ["pronominaux"],
    difficulte: 2,
    question:
      "Accordez et justifiez :\na) « La ville s'est (construit) en un siècle. »\nb) « Elle s'est (acheté) une voiture. »",
    reponseType:
      "a) « **construite** » (pronominal de **sens passif** : accord avec le sujet « la ville »).\nb) « **acheté** » (invariable : « se » est COI — elle a acheté une voiture *à elle-même* —, le COD « une voiture » est placé après).",
    explication: [],
  },
  {
    id: "fr-12-exo-c10",
    notion: "fr-12",
    savoirFaire: ["etre", "avoir-cod-avant", "pronominaux"],
    difficulte: 2,
    question:
      "Corrigez tous les accords de participe passé :\n« Les lettres qu'elle a écrit sont parti ce matin ; elle s'est dépêché de les poster. »",
    reponseType:
      "« Les lettres qu'elle a **écrites** sont **parties** ce matin ; elle s'est **dépêchée** de les poster. »\n- « écrites » : COD « que » (= les lettres) antéposé, avec *avoir* ;\n- « parties » : auxiliaire *être*, accord avec « les lettres » ;\n- « dépêchée » : « se dépêcher » essentiellement pronominal → accord avec le sujet.",
    explication: [],
  },

  // ————————————————————————— Expert (au-delà de l'épreuve) —————————————————————————
  {
    id: "fr-12-exo-e1",
    notion: "fr-12",
    savoirFaire: ["avoir-cod-avant", "cas-particuliers"],
    difficulte: 3,
    question:
      "Accordez et justifiez finement (verbe de perception + infinitif) :\na) « Les musiciens que j'ai (entendu) jouer. »\nb) « La sonate que j'ai (entendu) jouer. »",
    reponseType:
      "a) « **entendus** » : le COD « que » (= les musiciens) **fait** l'action de l'infinitif « jouer » → accord.\nb) « **entendu** » : le COD « que » (= la sonate) **subit** l'action (elle ne joue pas) → pas d'accord.\nAvec un verbe de perception suivi d'un infinitif, le PP s'accorde si le COD fait l'action, pas s'il la subit.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : ce cas est hors des attendus de base ; le maîtriser (et le justifier par « qui fait l'action ? ») est valorisé. « fait » + infinitif, lui, reste toujours invariable.",
      },
    ],
  },
  {
    id: "fr-12-exo-e2",
    notion: "fr-12",
    savoirFaire: ["pronominaux"],
    difficulte: 3,
    question:
      "Accordez (ces pronominaux ne s'accordent jamais) :\na) « Ils se sont (succédé) au pouvoir. »\nb) « Elles se sont (plu) immédiatement. »",
    reponseType:
      "a) « **succédé** » (invariable : « se succéder » = succéder *à* qqn → « se » COI).\nb) « **plu** » (invariable : « se plaire » = plaire *à* qqn → « se » COI).\nListe à connaître (« se » toujours COI, PP invariable) : se succéder, se plaire, se complaire, se nuire, se parler, se ressembler, se sourire, se téléphoner, se mentir…",
    explication: [],
  },
  {
    id: "fr-12-exo-e3",
    notion: "fr-12",
    savoirFaire: ["cas-particuliers", "avoir-cod-avant"],
    difficulte: 3,
    question:
      "Accordez et justifiez (complément de mesure ou COD ?) :\na) « Les trois heures que j'ai (dormi). »\nb) « Les efforts que ce travail m'a (coûté). »",
    reponseType:
      "a) « **dormi** » (invariable : « les trois heures » est un complément de **durée** (CC), pas un vrai COD).\nb) « **coûté** » (invariable au sens propre : « coûter » a un complément de prix/mesure). Au sens figuré (« coûter » = valoir), l'accord redevient possible : « les efforts que ce projet m'a coûtés ».\nLe départage : vrai COD (qui répond à « quoi ? ») ou complément de mesure ?",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : « courir, valoir, peser, coûter, vivre, dormir » ont souvent un complément de mesure (CC) qui n'entraîne pas l'accord, à distinguer de leur emploi figuré transitif.",
      },
    ],
  },
  {
    id: "fr-12-exo-e4",
    notion: "fr-12",
    savoirFaire: ["cas-particuliers"],
    difficulte: 3,
    question:
      "Accordez et justifiez :\n« La situation est plus grave que je ne l'avais (pensé). »",
    reponseType:
      "« **pensé** » (invariable) : « l' » est un **pronom neutre** qui reprend toute une proposition (« que la situation était grave »), et non un nom doté d'un genre et d'un nombre. Un COD neutre n'entraîne pas l'accord. (Le « ne » est ici explétif.)",
    explication: [],
  },
  {
    id: "fr-12-exo-e5",
    notion: "fr-12",
    savoirFaire: ["pronominaux", "avoir-cod-avant"],
    difficulte: 3,
    question:
      "Accordez et justifiez (COD antéposé d'un verbe pronominal) :\na) « Les mains qu'elle s'est (lavé). »\nb) « Elle se les est (lavé). »",
    reponseType:
      "a) « **lavées** » : le COD « que » (= les mains) est placé **avant** → accord, bien que « se » soit COI.\nb) « **lavées** » : le COD « les » (= les mains) est antéposé → accord.\nChez les pronominaux réfléchis assimilés à « avoir », c'est la **place du vrai COD** qui commande l'accord, et non le pronom « se ».",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : ne pas accorder avec « se » (COI) mais bien avec le COD antéposé (« les mains ») est exactement le raisonnement attendu sur ce cas mixte.",
      },
    ],
  },
];
