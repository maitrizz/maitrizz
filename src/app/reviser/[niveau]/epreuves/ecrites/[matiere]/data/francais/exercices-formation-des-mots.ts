// Banque d'exercices OUVERTS, notion 17 « La formation des mots ».
//
// Migration de structure : exercices repris depuis l'onglet « Application » v1,
// sans réécriture pédagogique. Le fond sera repris dans un chantier ultérieur.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_FORMATION_DES_MOTS: TrainerExercice[] = [
  // TODO refonte exo
  {
    id: "fr-17-exo-01",
    notion: "fr-17",
    savoirFaire: ["suffixation","composition"],
    difficulte: 1,
    question: "Mot simple ou construit ? Si construit, nommez le procédé :\nrelire · sol · portefeuille · impossible · arc-en-ciel · surnaturel",
    reponseType: "**Méthode :** on teste l'autonomie de chaque élément. Tous les éléments existent seuls → composition ; un élément non autonome (préfixe, suffixe) → dérivation.\n\n**Réponse attendue :** *sol* est un mot simple. *relire* (re- + lire), *impossible* (im- + possible) et *surnaturel* (sur- + naturel) sont construits par **dérivation préfixale** ; *portefeuille* et *arc-en-ciel* par **composition populaire**.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-17-exo-02",
    notion: "fr-17",
    savoirFaire: ["radical-famille","suffixation"],
    difficulte: 1,
    question: "a) Identifiez le préfixe et son sens : décomposer · surnaturel · prénatal · transporter.\nb) Identifiez le suffixe et la classe produite : formation · lentement · portable · liberté.",
    reponseType: "**Méthode :** le préfixe se place avant le radical et conserve la classe ; le suffixe se place après et peut la changer.\n\na) **Réponse attendue :** dé- (action inverse) · sur- (au-delà) · pré- (antériorité) · trans- (à travers).\n\nb) -tion → nom · -ment → adverbe · -able → adjectif · -té → nom.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-17-exo-03",
    notion: "fr-17",
    savoirFaire: ["radical-famille"],
    difficulte: 1,
    question: "Donnez l'allomorphe et la règle :\nindécis · impossible · illégal · irrégulier",
    reponseType: "**Règle :** le préfixe négatif s'assimile à la consonne initiale du radical : b/m/p → im-, l → il-, r → ir-, sinon in-.\n\n**Réponse attendue :** in- (indécis : consonne ordinaire) · im- (impossible : devant p) · il- (illégal : devant l) · ir- (irrégulier : devant r).",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-17-exo-04",
    notion: "fr-17",
    savoirFaire: ["suffixation"],
    difficulte: 2,
    question: "Analysez la formation et indiquez si la classe change :\nraisonnement · lentement · liberté · lecteur · portable",
    reponseType: "raisonnement : raisonner + -ment → nom (verbe → nom) · lentement : lente + -ment → adverbe (adjectif → adverbe) · liberté : libre + -té → nom (adjectif → nom) · lecteur : lire + -eur → nom (verbe → nom) · portable : porter + -able → adjectif (verbe → adjectif).\n\n**Réponse attendue :** dans les cinq cas le suffixe change la classe : *raisonnement* → nom, *lentement* → adverbe, *liberté* → nom, *lecteur* → nom, *portable* → adjectif.",
    explication: [
      { type: "note", text: "💡 Le suffixe change ici toujours la classe ; le préfixe, lui, la conserve." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-17-exo-05",
    notion: "fr-17",
    savoirFaire: ["radical-famille","suffixation"],
    difficulte: 2,
    enonce: "« Vivre, sans l'écriture, me va mal. » (Lola Lafon, Quand tu écouteras cette chanson)",
    question: "Analysez la formation de « écriture » et expliquez son sens. Donnez trois mots de la même famille.",
    reponseType: "**Analyse :** suffixation, radical **écrit-** (verbe écrire) + suffixe **-ure** (résultat, procédé). Classe : verbe → nom. « Écriture » désigne l'acte d'écrire et son résultat ; le contexte en fait un mode d'être indispensable.\n\nFamille : écrire, écrivain, écrit, réécriture.\n\n**Réponse attendue :** « *Écriture* est formé par **suffixation** : le radical *écrit-* (du verbe écrire) reçoit le suffixe *-ure*, qui marque le résultat et transforme le verbe en nom. Le mot désigne l'acte d'écrire et son résultat ; dans la phrase, il devient une condition vitale de l'existence. Mots de la même famille : *écrire*, *écrivain*, *réécriture*. »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-17-exo-06",
    notion: "fr-17",
    savoirFaire: ["radical-famille"],
    difficulte: 2,
    question: "Pour le thème de l'écriture, donnez 4 mots de la même famille et 4 mots du champ lexical, puis expliquez la différence.",
    reponseType: "**Famille** (même radical) : écrire, écriture, écrivain, réécriture.\n\n**Champ lexical** (même thème) : plume, encre, page, roman.\n\n**Explication :** la famille repose sur la morphologie (un radical commun), le champ lexical sur le sens (un thème commun). « écriture » appartient aux deux ; « plume » au champ lexical seulement.\n\n**Réponse attendue :** « Quatre mots de la même **famille** que *écriture* (radical *écri-*) : *écrire*, *écrivain*, *réécriture*, *écriteau*. Quatre mots du **champ lexical** de l'écriture (même thème) : *plume*, *encre*, *page*, *roman*. La famille se définit par la forme, le champ lexical par le sens. »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-17-exo-07",
    notion: "fr-17",
    savoirFaire: ["radical-famille"],
    difficulte: 3,
    enonce: "« Il avait grandi dans la déraison des enfances paysannes. » (d'après Jean-Paul Sartre, Les Mots)",
    question: "Analysez la formation de « déraison » pour en expliquer le sens, et donnez quatre mots de la même famille.",
    reponseType: "**Analyse :** dérivation préfixale à partir du nom « raison ». Le préfixe **dé-** a une valeur privative (absence, opposé). Classe conservée : nom → nom. « Déraison » = absence de raison, manque de discernement ; dans le texte, le terme désigne l'état de ceux privés d'accès à la culture lettrée.\n\nFamille : raison, raisonnement, raisonnable, déraisonnable.\n\n**Réponse attendue :** « *Déraison* est formé par **dérivation préfixale** : le préfixe privatif *dé-* s'ajoute au nom *raison*, sans changer la classe (nom → nom). Le mot signifie *l'absence de raison, le manque de discernement* ; dans le texte, il qualifie ceux qui sont privés d'accès à la culture lettrée. Mots de la même famille : *raison*, *raisonnement*, *raisonnable*, *déraisonnable*. »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-17-exo-08",
    notion: "fr-17",
    savoirFaire: ["radical-famille","suffixation"],
    difficulte: 3,
    enonce: "« Camille travaille le bois brut, trop sinueux, avec une dégauchisseuse. »",
    question: "« dégauchisseuse » n'est pas courant. Montrez comment l'analyse morphologique et le contexte permettent d'en inférer le sens.",
    reponseType: "**Analyse :** dérivation, préfixe **dé-** (action corrective) + radical **gauch-** (gauchir : être tordu, sinueux) + suffixe **-euse** (nom d'outil, comme perceuse). L'analyse suggère un outil qui « dégauchit », qui redresse ce qui est tordu.\n\nLe contexte confirme : le bois est « sinueux » et l'outil sert à le travailler.\n\n**Réponse attendue :** « En décomposant *dé-* (action corrective) + *gauch-* (gauchir, être tordu) + *-euse* (nom d'outil), j'infère qu'une *dégauchisseuse* est un outil qui redresse le bois tordu. Le contexte le confirme : le bois est *sinueux* et l'outil sert à le travailler. »",
    explication: [],
  },
];
