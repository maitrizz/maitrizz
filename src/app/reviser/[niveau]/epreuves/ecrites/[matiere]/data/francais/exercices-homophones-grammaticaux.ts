// Banque d'exercices OUVERTS, notion 13 « Les homophones grammaticaux ».
//
// Migration de structure : exercices repris depuis l'onglet « Application » v1,
// sans réécriture pédagogique. Le fond sera repris dans un chantier ultérieur.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_HOMOPHONES_GRAMMATICAUX: TrainerExercice[] = [
  // TODO refonte exo
  {
    id: "fr-13-exo-01",
    notion: "fr-13",
    savoirFaire: ["a-a","et-est","son-sont","ce-se"],
    difficulte: 1,
    question: "Choisissez et justifiez :\na) « Il ___ terminé son travail. » (a/à)   b) « Elle pense ___ son avenir. » (a/à)   c) « Ils ___ arrivés en retard. » (son/sont)   d) « ___ mange bien dans ce restaurant. » (On/Ont)   e) « Tu viens ___ tu restes ? » (ou/où)",
    reponseType: "a) **a** : « il avait terminé » ✓ → verbe avoir.\n\nb) **à** : « elle pense avait » impossible → préposition.\n\nc) **sont** : « ils étaient arrivés » ✓ → verbe être (3e pluriel).\n\nd) **On** : « Il mange » ✓ → pronom personnel indéfini.\n\ne) **ou** : « ou bien tu restes » ✓ → conjonction de coordination.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-13-exo-02",
    notion: "fr-13",
    savoirFaire: ["a-a","et-est","son-sont","ce-se","ces-ses-cest-sest","leur-leurs"],
    difficulte: 1,
    question: "Choisissez et justifiez :\na) « Il range ___ affaires. » (ses/ces)   b) « Je ___ ai parlé. » (leur/leurs)   c) « ___ maison est grande. » (Leur/Leurs)   d) « Il ___ lève tôt. » (se/ce)   e) « Il travaille ___ il est épuisé. » (mais/mes)",
    reponseType: "a) **ses** : « son affaire » au singulier ✓ → déterminant possessif.\n\nb) **leur** : « Je lui ai parlé » ✓ → pronom personnel COI, invariable.\n\nc) **Leur** : « lui » impossible → déterminant possessif ; un seul nom → singulier.\n\nd) **se** : pronom réfléchi du verbe pronominal « se lever » ; à la 1re personne, on dirait « je me lève ».\n\ne) **mais** : « cependant » ✓ → conjonction de coordination (opposition).",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-13-exo-03",
    notion: "fr-13",
    savoirFaire: ["a-a","et-est","son-sont","ce-se","ces-ses-cest-sest"],
    difficulte: 2,
    question: "Complétez et justifiez chaque choix :\n« ___ (Ce/Se) matin-là, il ___ (se/ce) leva plus tôt que d'habitude. ___ (Son/Sont) frère ___ (est/et) sa sœur dormaient encore. Il prit ___ (ses/ces) affaires en silence : ___ (ou/où) irait-il ? »",
    reponseType: "**Ce** matin-là : déterminant démonstratif (devant un nom).\n\nil **se** leva : pronom réfléchi du verbe pronominal « se lever » ; à la 1re personne, on dirait « je me lève ».\n\n**Son** frère : déterminant possessif (« mon frère » ✓).\n\n**et** sa sœur : conjonction de coordination (« était sa sœur » impossible).\n\n**ses** affaires : déterminant possessif (« son affaire » au singulier ✓).\n\n**où** irait-il : adverbe interrogatif (« ou bien irait-il » impossible).",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-13-exo-04",
    notion: "fr-13",
    savoirFaire: ["a-a","et-est","ce-se","ces-ses-cest-sest"],
    difficulte: 2,
    question: "Choisissez et justifiez :\na) « Il faut travailler ___ pour progresser. »   b) « Cette solution présente beaucoup ___. »   c) « Il ne voit pas ___ à changer de méthode. »",
    reponseType: "a) **davantage** : adverbe, remplaçable par « plus ».\n\nb) **d'avantages** : nom pluriel, remplaçable par « beaucoup d'avantages » / « beaucoup de bénéfices ».\n\nc) **d'avantage** : préposition « de » + nom singulier « avantage » ; on peut reformuler par « aucun avantage à changer de méthode ».",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-13-exo-05",
    notion: "fr-13",
    savoirFaire: ["a-a","et-est","son-sont","ce-se","ces-ses-cest-sest"],
    difficulte: 2,
    question: "Choisissez et justifiez :\na) « ___ une erreur fréquente. » (C'est/S'est)   b) « Il ___ aperçu de son oubli. » (c'est/s'est)   c) « ___ réponse est claire. » (Sa/Ça)   d) « ___ me paraît juste. » (Sa/Ça)   e) « Elle ___ compris trop tard. » (la/l'a/là)",
    reponseType: "a) **C'est** : « cela est une erreur fréquente » ✓.\n\nb) **s'est** : verbe pronominal « s'apercevoir » au passé composé.\n\nc) **Sa** : déterminant possessif devant le nom féminin « réponse ».\n\nd) **Ça** : pronom démonstratif, remplaçable par « cela ».\n\ne) **l'a** : pronom « l' » + verbe avoir ; test « elle l'avait compris ».",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-13-exo-06",
    notion: "fr-13",
    savoirFaire: ["a-a","et-est","son-sont","ce-se","ces-ses-cest-sest","leur-leurs"],
    difficulte: 3,
    enonce: "« Tous ces élèves se demandent où sont leurs cahiers ; on leur a pourtant dit de ranger davantage leurs affaires, mais ils ne savent pas quelle méthode appliquer. »",
    question: "Justifiez les formes « Tous », « ces », « se », « où », « sont », « leurs », « on », « leur », « davantage », le second « leurs », « mais » et « quelle ».",
    reponseType: "**Tous** : déterminant indéfini masculin pluriel, accordé avec « élèves ».\n\n**Ces** : déterminant démonstratif, test « cet élève » au singulier.\n\n**se** : pronom réfléchi du verbe pronominal « se demander » ; à la 1re personne, « je me demande ».\n\n**où** : adverbe interrogatif de lieu ; « ou bien » est impossible.\n\n**sont** : verbe être, test « étaient ».\n\n**leurs cahiers** : déterminant possessif accordé avec le nom pluriel « cahiers ».\n\n**on** : pronom personnel indéfini, test « il ».\n\n**leur** : pronom personnel COI, test « lui » ; il est donc invariable.\n\n**davantage** : adverbe, remplaçable par « plus ».\n\n**leurs affaires** : déterminant possessif accordé avec le nom pluriel « affaires ».\n\n**mais** : conjonction de coordination exprimant une opposition, remplaçable par « cependant ».\n\n**quelle méthode** : déterminant interrogatif féminin singulier, accordé avec le nom « méthode ».",
    explication: [],
  },
];
