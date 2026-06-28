// Banque d'exercices OUVERTS, notion 10 « Infinitif, participes et gérondif ».
//
// Migration de structure : exercices repris depuis l'onglet « Application » v1,
// sans réécriture pédagogique. Le fond sera repris dans un chantier ultérieur.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_FORMES_NON_CONJUGUEES: TrainerExercice[] = [
  // TODO refonte exo
  {
    id: "fr-10-exo-01",
    notion: "fr-10",
    savoirFaire: ["infinitif","participe-present","gerondif"],
    difficulte: 1,
    question: "Identifiez la nature de la forme soulignée :\na) « Le candidat, <u>relisant</u> sa copie, hésita. »   b) « des lettres soigneusement <u>rédigées</u> »   c) « <u>Pressée</u> d'arriver, elle accéléra. »   d) « <u>Comprendre</u> demande du temps. »   e) « Il monta sur la terrasse pour <u>regarder</u> les nuages. »   f) « Il progressa <u>en travaillant</u>. »",
    reponseType: "a) Participe présent, reconnaissable à sa terminaison en -ant et invariable.\n\nb) Participe passé, accordé au féminin pluriel avec « lettres ».\n\nc) Participe passé, accordé au féminin singulier avec le pronom « elle » auquel il se rapporte.\n\nd) Infinitif en -re, sujet du verbe « demande ».\n\ne) Infinitif en -er ; le groupe « pour regarder les nuages » est complément circonstanciel de but de « monta ».\n\nf) Gérondif, formé de « en » et du participe présent « travaillant ».",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-10-exo-02",
    notion: "fr-10",
    savoirFaire: ["infinitif"],
    difficulte: 1,
    question: "Donnez la fonction du groupe infinitif souligné :\na) « <u>Lire chaque jour</u> enrichit le vocabulaire. »   b) « Elle aime <u>lire des romans</u>. »   c) « Il s'entraîne <u>pour réussir</u>. »   d) « Elle est heureuse <u>de partir</u>. »",
    reponseType: "a) Sujet du verbe « enrichit ».\n\nb) COD du verbe « aime ».\n\nc) Complément circonstanciel de but du verbe « s'entraîne ».\n\nd) Complément de l'adjectif « heureuse ».",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-10-exo-03",
    notion: "fr-10",
    savoirFaire: ["infinitif"],
    difficulte: 1,
    question: "Dites si le participe passé est employé seul ou avec un auxiliaire, puis précisez sa fonction lorsqu'il est employé seul :\na) « une porte <u>fermée</u> »   b) « Elle a <u>fermé</u> la porte. »   c) « <u>Pressée</u> de partir, elle salua ses amis. »   d) « Les voyageurs sont <u>arrivés</u>. »",
    reponseType: "a) Employé seul, épithète liée du nom « porte ».\n\nb) Employé avec l'auxiliaire « avoir » pour former le passé composé de « fermer ».\n\nc) Employé seul, épithète détachée du pronom « elle ».\n\nd) Employé avec l'auxiliaire « être » pour former le passé composé de « arriver ».",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-10-exo-04",
    notion: "fr-10",
    savoirFaire: ["gerondif"],
    difficulte: 2,
    question: "Identifiez la nature de la forme soulignée :\na) « une réponse <u>convaincante</u> »   b) « Elle quitta la salle <u>en souriant</u>. »   c) « Les élèves <u>attendant leur tour</u> restent calmes. »   d) « des résultats <u>encourageants</u> »   e) « Il apprend <u>en observant</u>. »",
    reponseType: "Forme | Nature | Indice\n--- | --- | ---\nconvaincante | Adjectif verbal | S'accorde au féminin singulier avec « réponse »\nen souriant | Gérondif | « en » + -ant, complément circonstanciel\nattendant | Participe présent | Invariable et suivi du COD « leur tour »\nencourageants | Adjectif verbal | S'accorde au masculin pluriel avec « résultats »\nen observant | Gérondif | « en » + -ant, complément circonstanciel",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-10-exo-05",
    notion: "fr-10",
    savoirFaire: ["gerondif"],
    difficulte: 2,
    question: "Précisez la fonction et la valeur du groupe gérondif :\na) « En glissant sur le sol mouillé, il s'est fracturé le poignet. »   b) « Elle a ouvert la boîte en utilisant une clé. »   c) « En suivant ces consignes, vous éviterez plusieurs erreurs. »",
    reponseType: "a) Complément circonstanciel de cause : la glissade explique la fracture.\n\nb) Complément circonstanciel de moyen : la clé permet d'ouvrir la boîte.\n\nc) Complément circonstanciel de condition : si vous suivez ces consignes.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-10-exo-06",
    notion: "fr-10",
    savoirFaire: ["gerondif","infinitive-participiale"],
    difficulte: 2,
    question: "Ces analyses sont-elles correctes ? Corrigez :\na) « en réfléchissant » : participe présent, épithète détachée\nb) « une histoire émouvante » : participe présent invariable\nc) « elle a fermé la porte » : « fermé » est une épithète\nd) « les portes refermées, le silence revint » : « refermées » est une simple épithète détachée",
    reponseType: "a) Faux : « en » + -ant = gérondif (CC), pas participe présent.\n\nb) Faux : « émouvante » est un adjectif verbal accordé avec « histoire ».\n\nc) Faux : « fermé » est employé avec l'auxiliaire « avoir » pour former le passé composé.\n\nd) Faux : « refermées » possède un sujet propre, « les portes ». L'ensemble forme une subordonnée participiale, complément circonstanciel de temps.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-10-exo-07",
    notion: "fr-10",
    savoirFaire: ["infinitif","infinitive-participiale"],
    difficulte: 2,
    question: "Analysez les groupes infinitifs :\na) « Partir maintenant serait imprudent. »   b) « Elle renonce à partir. »   c) « Il ouvre la fenêtre pour aérer la pièce. »   d) « J'observe les oiseaux construire leur nid. »",
    reponseType: "a) « Partir maintenant » est un groupe infinitif, sujet de « serait ».\n\nb) « à partir » est un groupe infinitif prépositionnel, COI de « renonce ».\n\nc) « pour aérer la pièce » est un groupe infinitif prépositionnel, complément circonstanciel de but de « ouvre ».\n\nd) « les oiseaux construire leur nid » est une subordonnée infinitive, COD de « observe » : l'infinitif possède son propre sujet, « les oiseaux ».",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-10-exo-08",
    notion: "fr-10",
    savoirFaire: ["infinitif"],
    difficulte: 3,
    enonce: "« Portant une lourde valise, la voyageuse avançait lentement, décidée à rejoindre la gare avant la nuit. »",
    question: "Analysez la nature et la fonction de chaque forme non conjuguée.",
    reponseType: "Forme | Nature | Analyse\n--- | --- | ---\nportant | Participe présent | Épithète détachée du nom « voyageuse » (même sujet)\ndécidée | Participe passé | Épithète détachée du nom « voyageuse » (accord féminin singulier)\nrejoindre | Infinitif | Groupe infinitif prépositionnel, complément de l'adjectif « décidée »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-10-exo-09",
    notion: "fr-10",
    savoirFaire: ["infinitif","infinitive-participiale"],
    difficulte: 3,
    enonce: "« À seize ans, j'ai vu se rouvrir les portes qui me séparaient du monde : je suis monté sur la terrasse du palais pour regarder les nuages, mais ils étaient moins beaux que ceux de tes crépuscules. »\n*(Marguerite Yourcenar, « Comment Wang-Fô fut sauvé », Nouvelles orientales)*",
    question: "Rédigez la réponse jury pour « se rouvrir » et « regarder ».",
    reponseType: "« se rouvrir » est un infinitif : tête d'une subordonnée infinitive COD de « ai vu » (verbe de perception). Son sujet propre « les portes » est distinct du sujet principal « je ».\n\n« regarder » est un infinitif : groupe infinitif prépositionnel (pour + infinitif) CC de but de « suis monté ». Même sujet que le verbe principal : ce n'est pas une subordonnée infinitive.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-10-exo-10",
    notion: "fr-10",
    savoirFaire: ["participe-present","gerondif"],
    difficulte: 3,
    enonce: "a) « Les enfants, fatiguant leurs parents, refusaient de dormir. »   b) « Ces journées étaient fatigantes. »",
    question: "Analysez « fatiguant » et « fatigantes » en justifiant leur nature.",
    reponseType: "a) « fatiguant » est un participe présent, invariable. Il conserve un complément d'objet direct, « leurs parents », et est épithète détachée du nom « enfants ».\n\nb) « fatigantes » est un adjectif verbal, attribut du sujet « journées ». Il s'accorde au féminin pluriel.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-10-exo-11",
    notion: "fr-10",
    savoirFaire: ["infinitif","infinitive-participiale"],
    difficulte: 3,
    enonce: "« Elle entendit la pluie tomber sur les toits. Debout devant la fenêtre, les bras croisés, elle regardait le jardin en silence. »",
    question: "Analysez les formes verbales non conjuguées et les groupes auxquels elles appartiennent.",
    reponseType: "Forme | Nature | Analyse\n--- | --- | ---\ntomber | Infinitif | Subordonnée infinitive COD de « entendit » (sujet propre « la pluie »)\ncroisés | Participe passé | Noyau de la subordonnée participiale « les bras croisés », complément circonstanciel de manière ou d'accompagnement",
    explication: [
      { type: "note", text: "💡 « en silence » n'est pas un gérondif (« en » + nom, pas « en » + -ant) : c'est un GN prépositionnel, CC de manière." },
    ],
  },
];
