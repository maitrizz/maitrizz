// Banque d'exercices OUVERTS, notion 10 « Infinitif, participes et gérondif ».
//
// CHANTIER 2 (refonte façon Grévisse, DOCTRINE_EXERCICES.md) : exercices réécrits.
// 3 niveaux : Fondamentaux · Concours (la cible) · Expert (au-delà : sujet du
// gérondif, triple distinction négligent/négligents/négligeant, participes
// prépositionnels invariables, participiale absolue vs gérondif).
// Périmètre : NATURE + FONCTION de la forme non conjuguée dans la phrase. L'accord
// du participe passé relève de la notion 12 ; la voix passive/pronominale de la 04.
// 5 savoir-faire : infinitif · participe présent · participe passé · gérondif
// · infinitive/participiale.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_FORMES_NON_CONJUGUEES: TrainerExercice[] = [
  // ————————————————————————— Fondamentaux —————————————————————————
  {
    id: "fr-10-exo-f1",
    notion: "fr-10",
    savoirFaire: ["infinitif", "participe-present", "gerondif"],
    difficulte: 1,
    question:
      "Donnez la forme verbale non conjuguée :\na) « chanter »\nb) « chantant »\nc) « en chantant »\nd) « ayant chanté »",
    reponseType:
      "a) **infinitif**.\nb) **participe présent**.\nc) **gérondif** (« en » + forme en -ant).\nd) **participe passé** (forme composée : « ayant » + participe).",
    explication: [],
  },
  {
    id: "fr-10-exo-f2",
    notion: "fr-10",
    savoirFaire: ["gerondif", "participe-present"],
    difficulte: 1,
    question:
      "Participe présent ou gérondif ?\na) « Il partit en courant. »\nb) « Les enfants courant dans la cour riaient. »",
    reponseType:
      "a) **gérondif** (présence de « en » ; CC de manière de « partit »).\nb) **participe présent** (sans « en » ; équivaut à « qui couraient », épithète de « enfants »).\nLe « en » est le signe du gérondif.",
    explication: [],
  },
  {
    id: "fr-10-exo-f3",
    notion: "fr-10",
    savoirFaire: ["infinitif"],
    difficulte: 1,
    question:
      "Donnez la fonction de l'infinitif souligné :\na) « <u>Fumer</u> est dangereux. »\nb) « Il aime <u>lire</u>. »",
    reponseType:
      "a) **sujet** du verbe « est ».\nb) **COD** du verbe « aime ».\nL'infinitif peut occuper les fonctions d'un nom (rôle nominal).",
    explication: [],
  },
  {
    id: "fr-10-exo-f4",
    notion: "fr-10",
    savoirFaire: ["participe-passe"],
    difficulte: 1,
    question:
      "Donnez la nature et la fonction du participe passé en gras :\na) « une porte **fermée** »\nb) « **Épuisés**, ils s'arrêtèrent. »",
    reponseType:
      "a) participe passé employé comme adjectif, **épithète** (liée) du nom « porte ».\nb) participe passé, **épithète détachée** se rapportant au sujet « ils ».\nEmployé seul (sans auxiliaire), le participe passé fonctionne comme un adjectif.",
    explication: [],
  },
  {
    id: "fr-10-exo-f5",
    notion: "fr-10",
    savoirFaire: ["participe-present"],
    difficulte: 1,
    question:
      "Participe présent (invariable) ou adjectif verbal (accordé) ?\na) « des enfants **obéissant** à leurs parents »\nb) « des enfants **obéissants** »",
    reponseType:
      "a) **participe présent** (invariable ; suivi d'un complément « à leurs parents » ; valeur verbale).\nb) **adjectif verbal** (accordé : « -s » ; il qualifie, valeur d'adjectif).\nLe participe présent reste toujours invariable.",
    explication: [],
  },
  {
    id: "fr-10-exo-f6",
    notion: "fr-10",
    savoirFaire: ["gerondif"],
    difficulte: 1,
    question:
      "Donnez la fonction du gérondif :\na) « Il lit en mangeant. »\nb) « En forgeant, on devient forgeron. »",
    reponseType:
      "a) **CC de manière** (simultanéité) de « lit ».\nb) **CC de moyen / condition** (« c'est en forgeant que… »).\nLe gérondif est toujours CC et se rapporte au sujet du verbe principal.",
    explication: [],
  },

  // ————————————————————————— Concours (la cible) —————————————————————————
  {
    id: "fr-10-exo-c1",
    notion: "fr-10",
    savoirFaire: ["infinitif"],
    difficulte: 2,
    question:
      "Donnez la nature et la fonction de l'infinitif :\na) « Il rêve de voyager. »\nb) « Partir, c'est mourir un peu. »",
    reponseType:
      "a) « voyager » : infinitif, **COI** de « rêve » (rêver *de* qqch).\nb) « Partir » : infinitif, **sujet** (repris par « c' ») ; « mourir » : infinitif, **attribut**. L'infinitif occupe ici des fonctions nominales.",
    explication: [],
  },
  {
    id: "fr-10-exo-c2",
    notion: "fr-10",
    savoirFaire: ["participe-present"],
    difficulte: 2,
    question:
      "**Prouvez, par une manipulation**, lequel est participe présent et lequel est adjectif verbal :\n« une situation provocante » / « des propos provoquant la colère »",
    reponseType:
      "« provocante » : **adjectif verbal** (accordé au féminin ; orthographe « -cante » ; il qualifie « situation »).\n« provoquant » : **participe présent** (invariable ; orthographe « -quant » ; suivi du COD « la colère » ; valeur verbale).\nManipulation : s'il s'accorde et se remplace par un autre adjectif → adjectif verbal ; s'il a un complément d'objet et reste invariable → participe présent. (Les deux orthographes diffèrent : provocant / provoquant, fatigant / fatiguant.)",
    explication: [],
  },
  {
    id: "fr-10-exo-c3",
    notion: "fr-10",
    savoirFaire: ["gerondif"],
    difficulte: 2,
    question:
      "Donnez le rapport exprimé par le gérondif :\na) « En arrivant, il salua tout le monde. »\nb) « Il s'est blessé en tombant. »\nc) « En travaillant, tu réussiras. »",
    reponseType:
      "a) **temps / simultanéité**.\nb) **cause / moyen**.\nc) **condition**.\nLe gérondif est toujours CC ; seule sa nuance change selon le contexte.",
    explication: [],
  },
  {
    id: "fr-10-exo-c4",
    notion: "fr-10",
    savoirFaire: ["infinitive-participiale", "infinitif"],
    difficulte: 2,
    question:
      "Subordonnée infinitive ou simple groupe infinitif ? Justifiez :\na) « J'entends les enfants crier. »\nb) « Je vais chercher du pain. »",
    reponseType:
      "a) **subordonnée infinitive** : « crier » a un **sujet propre** (« les enfants ») et dépend d'un verbe de perception (« entends »).\nb) **groupe infinitif** : « chercher » a le même sujet que « vais » (je), sans sujet propre → ce n'est pas une proposition.\nLe sujet propre est le critère décisif.",
    explication: [],
  },
  {
    id: "fr-10-exo-c5",
    notion: "fr-10",
    savoirFaire: ["infinitive-participiale", "participe-passe"],
    difficulte: 2,
    question:
      "Y a-t-il une subordonnée participiale ? Justifiez :\na) « Le chat parti, les souris dansent. »\nb) « Parti tôt, il arriva avant tous. »",
    reponseType:
      "a) **oui** : « Le chat parti » est une participiale (sujet propre « le chat » + participe « parti »), CC de temps/cause.\nb) **non** : « Parti tôt » se rapporte au sujet de la principale (« il »), sans sujet propre → c'est une épithète détachée.\nLe sujet propre fait la proposition.",
    explication: [],
  },
  {
    id: "fr-10-exo-c6",
    notion: "fr-10",
    savoirFaire: ["infinitif"],
    difficulte: 2,
    question:
      "**Prouvez, par une manipulation**, que « rire » n'a pas la même nature :\na) « Le rire est bon pour la santé. »\nb) « Il aime rire. »",
    reponseType:
      "a) « le rire » : infinitif **substantivé** (devenu un nom : précédé d'un déterminant « le », pluralisable « des rires », sans complément verbal).\nb) « rire » : infinitif **verbal**, COD de « aime » (on peut lui adjoindre un complément : « rire *de bon cœur* »).\nManipulation : la présence d'un déterminant et l'impossibilité d'un complément verbal signent la nominalisation.",
    explication: [],
  },
  {
    id: "fr-10-exo-c7",
    notion: "fr-10",
    savoirFaire: ["participe-passe"],
    difficulte: 2,
    question:
      "« fini » est-il un élément de temps composé ou un adjectif ?\na) « Il a fini son travail. »\nb) « Un travail fini. »",
    reponseType:
      "a) participe passé dans un **temps composé** (auxiliaire « a » + participe = passé composé de « finir »).\nb) participe passé employé comme **adjectif**, épithète du nom « travail ».\nTest : présence d'un auxiliaire conjugué → temps composé ; absence d'auxiliaire → emploi adjectival.",
    explication: [],
  },
  {
    id: "fr-10-exo-c8",
    notion: "fr-10",
    savoirFaire: ["infinitif", "participe-passe", "gerondif"],
    difficulte: 2,
    question:
      "Relevez les formes verbales non conjuguées et donnez leur nature et fonction :\n« En rentrant, fatigué, il décida de se reposer. »",
    reponseType:
      "- « En rentrant » : **gérondif**, CC de temps.\n- « fatigué » : **participe passé** adjectival, épithète détachée (sujet « il »).\n- « se reposer » : **infinitif**, COI de « décida » (décider *de* faire).",
    explication: [],
  },
  {
    id: "fr-10-exo-c9",
    notion: "fr-10",
    savoirFaire: ["infinitif"],
    difficulte: 2,
    question:
      "Donnez la valeur de l'infinitif :\na) « Ne pas se pencher au-dehors. »\nb) « Que faire ? »\nc) « Moi, mentir ? »",
    reponseType:
      "a) infinitif **injonctif** (consigne).\nb) infinitif **délibératif** (interrogation).\nc) infinitif **exclamatif** (indignation).\nSeul, l'infinitif peut faire phrase avec des valeurs variées.",
    explication: [],
  },
  {
    id: "fr-10-exo-c10",
    notion: "fr-10",
    savoirFaire: ["participe-present"],
    difficulte: 2,
    question:
      "Analysez le participe présent :\n« Les candidats ayant réussi recevront un diplôme. »",
    reponseType:
      "« ayant réussi » : participe présent (forme **composée**) à valeur verbale ; il équivaut à une relative (« qui ont réussi ») et est épithète du nom « candidats ». La forme composée (« ayant » + participe) marque une action **antérieure**.",
    explication: [],
  },

  // ————————————————————————— Expert (au-delà de l'épreuve) —————————————————————————
  {
    id: "fr-10-exo-e1",
    notion: "fr-10",
    savoirFaire: ["infinitive-participiale", "infinitif"],
    difficulte: 3,
    question:
      "Analysez « les oiseaux » et la nature de l'ensemble :\n« Je regarde les oiseaux voler. »",
    reponseType:
      "« les oiseaux voler » = **proposition subordonnée infinitive**, COD de « regarde ». « les oiseaux » est le **sujet** de l'infinitif « voler », mais fonctionne aussi comme support du COD de « regarde » (double analyse classiquement débattue). Reconnaître l'infinitive et son sujet propre est l'essentiel.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : la proposition infinitive n'existe qu'après les verbes de perception (voir, entendre, sentir, regarder…) et « laisser / faire ». Le sujet propre de l'infinitif est la condition.",
      },
    ],
  },
  {
    id: "fr-10-exo-e2",
    notion: "fr-10",
    savoirFaire: ["gerondif"],
    difficulte: 3,
    question:
      "Pourquoi cette phrase est-elle fautive, et que révèle-t-elle sur le gérondif ?\n« En arrivant à la gare, le train était déjà parti. »",
    reponseType:
      "Faute : le gérondif (« en arrivant ») doit avoir le **même sujet** que le verbe principal. Or le sujet de « était parti » est « le train » : la phrase laisse entendre que c'est le train qui arrive, ce qui est absurde. Règle : le sujet du gérondif est obligatoirement celui du verbe principal. Correction : « En arrivant à la gare, **je** vis que le train était déjà parti. »",
    explication: [],
  },
  {
    id: "fr-10-exo-e3",
    notion: "fr-10",
    savoirFaire: ["participe-present"],
    difficulte: 3,
    question:
      "Distinguez les trois formes proches et justifiez l'orthographe :\na) « Ils négligent leurs devoirs. »\nb) « des élèves négligents »\nc) « négligeant leurs devoirs, ils échouèrent »",
    reponseType:
      "a) « négligent » : **verbe conjugué** (présent, 3e personne du pluriel de « négliger »).\nb) « négligents » : **adjectif verbal** (accordé ; orthographe « -ent »).\nc) « négligeant » : **participe présent** (invariable ; orthographe « -eant » ; ici suivi du COD « leurs devoirs »).\nTrois formes proches, trois natures, trois orthographes.",
    explication: [],
  },
  {
    id: "fr-10-exo-e4",
    notion: "fr-10",
    savoirFaire: ["participe-passe"],
    difficulte: 3,
    question:
      "Pourquoi ces participes passés sont-ils invariables ici ?\na) « Ci-joint les pièces demandées. »\nb) « Vu les circonstances, il renonça. »",
    reponseType:
      "Placés **en tête, devant le nom**, ces participes passés (« ci-joint », « vu », mais aussi « étant donné », « passé », « excepté », « y compris ») se figent en **locutions prépositives** et restent **invariables**. Placés après le nom, ils redeviennent adjectifs et s'accordent : « les pièces **ci-jointes** ». C'est la position qui décide.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : reconnaître que ces participes « prépositionnels » sortent du système de l'accord du PP (notion 12) est un point fin valorisé.",
      },
    ],
  },
  {
    id: "fr-10-exo-e5",
    notion: "fr-10",
    savoirFaire: ["infinitive-participiale", "participe-present", "gerondif"],
    difficulte: 3,
    question:
      "Analysez chaque forme en -ant et en -é :\n« La nuit tombant, les promeneurs, fatigués, rentrèrent en pressant le pas. »",
    reponseType:
      "- « La nuit tombant » : participe présent à **sujet propre** (« la nuit ») → **subordonnée participiale** (CC de temps).\n- « fatigués » : participe passé adjectival, **épithète détachée** (sujet « les promeneurs »).\n- « en pressant » : **gérondif** (CC de manière, sujet = celui de « rentrèrent »).\nTrois formes proches, trois analyses : le sujet propre et le « en » sont les critères.",
    explication: [],
  },
];
