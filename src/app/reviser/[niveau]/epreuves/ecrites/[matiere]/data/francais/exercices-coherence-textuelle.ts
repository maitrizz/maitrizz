// Banque d'exercices OUVERTS, notion 14 « La cohérence textuelle ».
//
// Migration de structure : exercices repris depuis l'onglet « Application » v1,
// sans réécriture pédagogique. Le fond sera repris dans un chantier ultérieur.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_COHERENCE_TEXTUELLE: TrainerExercice[] = [
  // TODO refonte exo
  {
    id: "fr-14-exo-01",
    notion: "fr-14",
    savoirFaire: ["reprises-nominales","pronoms","connecteurs"],
    difficulte: 1,
    enonce: "« Une fillette traversait le marché. Elle portait un grand panier. La petite s'arrêta devant un étal de fleurs. Ces fleurs semblaient lui sourire. »",
    question: "Relevez les reprises du référent « fillette » et précisez le type de chacune.",
    reponseType: "**Elle** : reprise pronominale (pronom personnel sujet).\n\n**La petite** : reprise nominale infidèle (« la petite [fille] », dénomination plus spécifique à nuance affective).\n\n**lui** : reprise pronominale (pronom personnel COI).",
    explication: [
      { type: "note", text: "💡 « Ces fleurs » ne reprend pas « fillette » : l'expression renvoie aux fleurs de l'étal et appartient donc à une autre chaîne référentielle." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-14-exo-02",
    notion: "fr-14",
    savoirFaire: ["pronoms","connecteurs"],
    difficulte: 1,
    question: "Identifiez la relation logique de chaque connecteur souligné :\na) « Il s'était entraîné ; <u>par conséquent</u>, il gagna. »   b) « Elle aimait voyager ; <u>cependant</u>, elle craignait l'avion. »   c) « <u>En effet</u>, les forêts produisent de l'oxygène. »   d) « <u>Par exemple</u>, la lecture développe l'empathie. »   e) « <u>Autrement dit</u>, le texte doit progresser. »",
    reponseType: "a) **Conséquence** : le résultat découle de l'entraînement.\n\nb) **Opposition / concession** : la peur contredit le goût du voyage.\n\nc) **Cause / explication** : appuie l'affirmation.\n\nd) **Illustration** : donne un exemple concret.\n\ne) **Reformulation** : reprend l'idée en d'autres termes.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-14-exo-03",
    notion: "fr-14",
    savoirFaire: ["pronoms","connecteurs"],
    difficulte: 1,
    enonce: "« La nuit tombait sur la plaine. Les étoiles s'allumaient dans le ciel obscur. La lune éclairait faiblement le chemin. L'obscurité semblait vivante. »",
    question: "a) Nommez le champ lexical dominant et relevez ses termes. b) Quel effet produit-il ?",
    reponseType: "a) Champ lexical de la **nuit / de l'obscurité** : « nuit, obscur, lune, éclairait faiblement, obscurité ».\n\nb) Il crée une atmosphère nocturne cohérente, aux tonalités mystérieuses et légèrement inquiétantes (renforcées par « semblait vivante »).",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-14-exo-04",
    notion: "fr-14",
    savoirFaire: ["pronoms","connecteurs","progression-thematique"],
    difficulte: 1,
    question: "Indiquez le schéma de progression (linéaire, à thème constant, à thèmes dérivés) :\na) « Paris est lumineuse. Elle attire les touristes. La capitale ne dort jamais. »   b) « Paul rencontra Marie. Cette femme changea sa vie. Ce changement fut radical. »   c) « La forêt est un écosystème. Les arbres produisent de l'oxygène. Les animaux y trouvent refuge. »",
    reponseType: "a) **À thème constant** : toutes les phrases parlent de Paris (elle, la capitale).\n\nb) **Linéaire (en cascade)** : Marie → cette femme → ce changement.\n\nc) **À thèmes dérivés** : la forêt, puis ses composantes (arbres, animaux).",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-14-exo-05",
    notion: "fr-14",
    savoirFaire: ["reprises-nominales","pronoms","connecteurs","progression-thematique"],
    difficulte: 2,
    enonce: "« Un vieux professeur parcourait les rues chaque matin. L'homme s'arrêtait toujours devant la même boulangerie. Ce rituel lui semblait indispensable. Il achetait deux croissants et repartait sans un mot. »",
    question: "a) Reconstituez la chaîne référentielle du personnage. b) Quel est le schéma de progression ? c) Relevez le champ lexical de la routine.",
    reponseType: "a) « Un vieux professeur » (antécédent) → « L'homme » (nominale infidèle, hyperonyme) → « lui » (pronominale, COI) → « Il » (pronominale, sujet).\n\nb) Progression **à thème constant** : le professeur reste le sujet de bout en bout.\n\nc) Champ lexical de la routine : « chaque matin, toujours, même boulangerie, ce rituel, sans un mot ».",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-14-exo-06",
    notion: "fr-14",
    savoirFaire: ["pronoms","connecteurs"],
    difficulte: 2,
    question: "Complétez avec le connecteur le plus approprié (cependant · car · par exemple · en outre · par conséquent · autrement dit) et nommez la relation :\na) « La lecture développe le vocabulaire. ___, elle stimule l'imagination. »   b) « Il n'avait pas dormi. ___, il fit des erreurs. »   c) « Un texte sans reprises est lourd ; ___, il faut varier. »   d) « Il aimait la musique ; ___, il ne jouait d'aucun instrument. »   e) « Les élèves progressent ___ ils s'entraînent. »",
    reponseType: "a) **En outre** (addition).\n\nb) **Par conséquent** (conséquence).\n\nc) **Autrement dit** (reformulation).\n\nd) **Cependant** (opposition / concession).\n\ne) **car** (cause).",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-14-exo-07",
    notion: "fr-14",
    savoirFaire: ["reprises-nominales","pronoms","connecteurs"],
    difficulte: 3,
    enonce: "« Écrire est un engagement à ferrailler. On s'engage dans l'écriture comme dans une armée imaginaire, où l'on serait à la fois général et aspirant soldat. »",
    question: "a) Nommez le champ lexical dominant et relevez ses termes. b) Relevez deux expressions qui relancent l'idée d'écrire et précisez leur rôle dans la cohérence du passage. c) Quel effet produit la métaphore filée ?",
    reponseType: "a) Champ lexical du **combat / de la guerre** : « ferrailler, engagement, armée, général, aspirant soldat ».\n\nb) « l'écriture » reprend nominalement le verbe « écrire » (reprise par nominalisation) ; « une armée imaginaire » relance la même idée par métaphore. Ces reprises maintiennent le même référent abstrait tout en le développant.\n\nc) La métaphore filée du combat présente l'écriture comme une lutte intérieure, exigeante : elle traduit l'engagement total de l'écrivain et donne une dimension épique à un acte intime.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-14-exo-08",
    notion: "fr-14",
    savoirFaire: ["pronoms","connecteurs","progression-thematique"],
    difficulte: 3,
    enonce: "« L'école est importante. L'école permet d'apprendre. L'école est un lieu de socialisation. L'école développe l'esprit critique. »",
    question: "Réécrivez ce paragraphe en variant les reprises, en ajoutant des connecteurs et en assurant une progression lisible.",
    reponseType: "**Proposition :** « L'école occupe une place centrale dans la formation des individus. Elle permet **d'abord** l'acquisition des savoirs fondamentaux. **Mais** l'établissement scolaire est **aussi** un espace de socialisation : les élèves y apprennent à vivre ensemble. **Enfin**, cette institution développe leur esprit critique, condition d'une citoyenneté éclairée. »",
    explication: [
      { type: "note", text: "Procédés : reprises variées (elle, l'établissement scolaire, cette institution), connecteurs (d'abord, mais, enfin), progression à thème constant." },
    ],
  },
];
