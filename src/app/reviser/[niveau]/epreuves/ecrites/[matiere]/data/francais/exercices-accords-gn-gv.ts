// Banque d'exercices OUVERTS, notion 11 « Les accords dans le GN et le GV ».
//
// Migration de structure : exercices repris depuis l'onglet « Application » v1,
// sans réécriture pédagogique. Le fond sera repris dans un chantier ultérieur.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_ACCORDS_GN_GV: TrainerExercice[] = [
  // TODO refonte exo
  {
    id: "fr-11-exo-01",
    notion: "fr-11",
    savoirFaire: ["accords-gn","collectifs-coordination"],
    difficulte: 1,
    question: "Identifiez le nom noyau et justifiez l'accord de l'adjectif souligné :\na) « de longues heures <u>silencieuses</u> »   b) « un regard <u>bleu</u> et fixe »   c) « des pulls <u>marron</u> »   d) « une <u>demi</u>-heure de trajet »   e) « des yeux <u>bleu-vert</u> »",
    reponseType: "a) Noyau « heures » (féminin pluriel) → « silencieuses » au féminin pluriel (accord normal).\n\nb) Noyau « regard » (masculin singulier) → « bleu » au masculin singulier (couleur simple, s'accorde).\n\nc) « marron » : nom employé comme couleur, invariable.\n\nd) « demi » placé devant le nom : invariable.\n\ne) « bleu-vert » : couleur composée, invariable.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-11-exo-02",
    notion: "fr-11",
    savoirFaire: ["accords-gn","sujet-verbe","sujet-inverse-eloigne","collectifs-coordination","accords-complexes"],
    difficulte: 1,
    question: "Identifiez le groupe sujet et justifiez l'accord du verbe :\na) « Les enfants de la classe <u>jouent</u> dans la cour. »   b) « La liste des candidats admis <u>est</u> longue. »   c) « C'est moi qui <u>suis</u> arrivé le premier. »   d) « On <u>travaille</u> toute la journée. »   e) « Arrivent alors les trois voyageurs. »",
    reponseType: "a) Sujet « les enfants de la classe » (noyau « enfants », 3e pluriel) → « jouent ».\n\nb) Groupe sujet « La liste des candidats admis », dont le nom noyau « liste » est singulier → « est » (pas d'attraction).\n\nc) « qui » a pour antécédent « moi » (1re singulier) → « suis ».\n\nd) « On » → 3e personne du singulier → « travaille ».\n\ne) Sujet inversé : « Ce sont les trois voyageurs qui arrivent » → 3e personne du pluriel → « arrivent ».",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-11-exo-03",
    notion: "fr-11",
    savoirFaire: ["accords-gn","collectifs-coordination"],
    difficulte: 1,
    question: "Vrai ou faux, justifiez :\na) « La plupart des élèves » appelle toujours un verbe au singulier.\nb) Dans « un livre et une revue illustrés », l'accord masculin pluriel est correct.\nc) « On » peut commander un accord au pluriel du verbe.\nd) Dans « des robes bleu marine », l'adjectif est invariable.",
    reponseType: "a) **Faux** : « la plupart » + nom pluriel appelle toujours le pluriel (« ont réussi »).\n\nb) **Vrai** : noms de genres différents coordonnés par « et » → masculin pluriel.\n\nc) **Faux** : « on » commande toujours un verbe à la 3e personne du singulier. En revanche, un adjectif ou un participe peut s'accorder en genre et en nombre avec les personnes que « on » représente.\n\nd) **Vrai** : « bleu marine » est une couleur composée, invariable.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-11-exo-04",
    notion: "fr-11",
    savoirFaire: ["accords-gn","sujet-verbe","sujet-inverse-eloigne","collectifs-coordination"],
    difficulte: 2,
    question: "Choisissez la forme correcte et justifiez :\na) « Beaucoup d'enfants (joue / jouent) dans la cour. »   b) « Ni le directeur ni les enseignants ne (sont / est) disponibles. »   c) « Parmi les romans qui (m'a / m'ont) marqué, celui-ci est mon préféré. »   d) « Zoé a l'air (heureuse / heureux). » (elle est heureuse)",
    reponseType: "a) **jouent** : « beaucoup de » + nom pluriel → accord avec le nom (pluriel).\n\nb) **sont** : « ni… ni… » coordonne deux sujets tous deux concernés ; le verbe se met au pluriel.\n\nc) **m'ont** : « qui » a pour antécédent « les romans », au pluriel.\n\nd) **heureuse** : « avoir l'air » = « sembler » → attribut accordé avec le sujet « Zoé ».",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-11-exo-05",
    notion: "fr-11",
    savoirFaire: ["accords-gn","sujet-verbe","collectifs-coordination","accords-complexes"],
    difficulte: 2,
    enonce: "« La lumière blanche et crue du plein été, coulant à flots par les larges fenêtres, éclatait en taches lumineuses sur les cases. »",
    question: "Identifiez le groupe sujet du verbe « éclatait » et justifiez l'accord des adjectifs « blanche », « larges » et « lumineuses ».",
    reponseType: "Groupe sujet : « La lumière blanche et crue du plein été » (noyau « lumière », féminin singulier) → « éclatait » à la 3e personne du singulier.\n\n« blanche » et « crue » : épithètes liées de « lumière » (féminin singulier).\n\n« larges » : épithète liée de « fenêtres » (féminin pluriel) ; « lumineuses » : épithète liée de « taches » (féminin pluriel).",
    explication: [
      { type: "note", text: "💡 « coulant » est un participe présent, invariable : épithète détachée du sujet « lumière »." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-11-exo-06",
    notion: "fr-11",
    savoirFaire: ["accords-gn","collectifs-coordination"],
    difficulte: 2,
    question: "Choisissez et justifiez. Pour c), indiquez les deux accords possibles :\na) « La plupart des spectateurs (a / ont) applaudi. »   b) « Le nombre de candidats (a / ont) augmenté. »   c) « Un grand nombre de visiteurs (est venu / sont venus). »   d) « Lui ou elle (viendra / viendront) demain. » (un seul des deux)",
    reponseType: "a) **ont** : « la plupart des » + pluriel → pluriel.\n\nb) **a** : « le nombre de » désigne une quantité → singulier.\n\nc) **sont venus** met l'accent sur les visiteurs et leur pluralité ; **est venu** reste possible si l'on considère « un grand nombre » comme un ensemble singulier. Le participe passé doit suivre l'accord choisi.\n\nd) **viendra** : « ou » au sens exclusif (un seul des deux) → singulier.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-11-exo-07",
    notion: "fr-11",
    savoirFaire: ["accords-gn","sujet-verbe","collectifs-coordination"],
    difficulte: 3,
    enonce: "« Les premières neiges de l'hiver avaient recouvert la plaine silencieuse. »",
    question: "Identifiez le groupe sujet, puis justifiez l'accord du verbe et des adjectifs « premières » et « silencieuse ».",
    reponseType: "Groupe sujet « Les premières neiges de l'hiver » (noyau « neiges », féminin pluriel) → « avaient recouvert » à la 3e personne du pluriel.\n\n« premières » : épithète liée de « neiges » (féminin pluriel).\n\n« silencieuse » : épithète liée de « plaine » (féminin singulier).",
    explication: [
      { type: "note", text: "💡 L'accord du participe passé « recouvert » (avec l'auxiliaire « avoir ») relève de la notion 12." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-11-exo-08",
    notion: "fr-11",
    savoirFaire: ["accords-gn","sujet-inverse-eloigne","collectifs-coordination","accords-complexes"],
    difficulte: 3,
    enonce: "« Soudain, de grandes masses nuageuses et sombres avaient envahi le ciel, chassant les dernières lueurs dorées du couchant. »",
    question: "a) Identifiez le groupe sujet de « avaient envahi » et justifiez l'accord. b) Justifiez l'accord de « dorées ».",
    reponseType: "a) Groupe sujet « de grandes masses nuageuses et sombres » (noyau « masses », féminin pluriel) → « avaient envahi » à la 3e personne du pluriel (test : « Ce sont les masses qui avaient envahi »).\n\nb) « dorées » : épithète liée de « lueurs » (féminin pluriel).",
    explication: [
      { type: "note", text: "💡 « chassant » est un participe présent invariable (épithète détachée). « grandes », « nuageuses », « sombres » s'accordent toutes avec « masses »." },
    ],
  },
];
