// Banque d'exercices OUVERTS, notion 18 « Les relations sémantiques ».
//
// Migration de structure : exercices repris depuis l'onglet « Application » v1,
// sans réécriture pédagogique. Le fond sera repris dans un chantier ultérieur.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_RELATIONS_SEMANTIQUES: TrainerExercice[] = [
  // TODO refonte exo
  {
    id: "fr-18-exo-01",
    notion: "fr-18",
    savoirFaire: ["synonymie","antonymie","hyperonymie"],
    difficulte: 1,
    question: "Synonymie, antonymie ou hyperonymie/hyponymie ?\na) rapide / lent · b) chêne / arbre · c) débuter / commencer · d) vivant / mort · e) roman / récit · f) triste / mélancolique",
    reponseType: "a) antonymie (graduable) · b) hyponymie (chêne hyponyme d'arbre) · c) synonymie · d) antonymie (complémentaire) · e) hyponymie (roman hyponyme de récit) · f) synonymie.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-18-exo-02",
    notion: "fr-18",
    savoirFaire: ["synonymie"],
    difficulte: 1,
    question: "Donnez deux synonymes en précisant une nuance :\nregarder · peur · parler",
    reponseType: "**regarder** : observer (attention active) / contempler (durée, admiration).\n\n**peur** : crainte (moins intense) / terreur (plus intense).\n\n**parler** : s'exprimer (soutenu) / bavarder (familier, durée).",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-18-exo-03",
    notion: "fr-18",
    savoirFaire: ["sens-propre-figure"],
    difficulte: 1,
    question: "a) « une lumière brûlante » · b) « brûler d'impatience » · c) « les yeux baissés » · d) « un regard glacial »",
    reponseType: "a) sens propre (chaleur physique) · b) sens figuré (désir intense) · c) sens propre (position des yeux) · d) sens figuré (froideur, indifférence hostile).",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-18-exo-04",
    notion: "fr-18",
    savoirFaire: ["synonymie"],
    difficulte: 2,
    enonce: "« Elle se hâtait, les yeux baissés, pressée d'atteindre sa maison avant la nuit. » (Zola)",
    question: "Proposez un synonyme en contexte pour « se hâtait », « pressée » et « atteindre », et justifiez la nuance.",
    reponseType: "**se hâtait** → se dépêchait / pressait le pas (urgence ; « courait » serait inexact, elle marche).\n\n**pressée** → poussée par l'urgence (sous pression, non enthousiaste).\n\n**atteindre** → rejoindre / gagner (« atteindre » implique un effort pour parvenir).",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-18-exo-05",
    notion: "fr-18",
    savoirFaire: ["synonymie","champ-lexical"],
    difficulte: 2,
    enonce: "« Ma mère, dont le regard ne vieillissait pas, regardait les enfants jouer. Elle souriait, muette, heureuse, et ne disait rien. » (Colette)",
    question: "a) Relevez le champ lexical du silence et de la retenue. b) « muette » est-il synonyme de « silencieuse » ici ?",
    reponseType: "a) Champ du silence : « muette », « ne disait rien », « souriait » (expression sans parole), le « regard » qui remplace les mots.\n\nb) Non : « silencieuse » = absence de bruit (neutre) ; « muette » = absence délibérée de parole, avec une émotion retenue, un indicible. « Muette » suggère une plénitude que les mots ne pourraient contenir.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-18-exo-06",
    notion: "fr-18",
    savoirFaire: ["champ-lexical"],
    difficulte: 2,
    question: "Pour le mot « lumière » : donnez son champ sémantique (ses sens), puis construisez un champ lexical de la lumière (mots d'un thème).",
    reponseType: "**Champ sémantique de « lumière »** : (1) rayonnement visible ; (2) source lumineuse ; (3) sens figuré : intelligence, savoir (« les Lumières »).\n\n**Champ lexical de la lumière** : soleil, flamme, rayon, lueur, éclat, briller, éclairer (mots de natures variées autour du thème).",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-18-exo-07",
    notion: "fr-18",
    savoirFaire: ["synonymie"],
    difficulte: 3,
    enonce: "« Mes romans me mènent en bateau, donc ils me baladent. » (Lola Lafon)",
    question: "Expliquez la polysémie de « balader » et comment l'autrice joue sur les deux sens. Rédigez au format jury.",
    reponseType: "« balader » est polysémique : (1) se promener, déambuler ; (2) sens familier : mener en bateau, tromper. L'autrice cite d'abord « mener en bateau » puis conclut par « me baladent », activant les deux sens.\n\n**Formule jury :** « Le verbe “balader” est polysémique. En contexte, Lafon active simultanément son sens premier (être emporté, errer) et son sens familier (être mené en bateau, trompé). Ce jeu exprime l'ambivalence de son rapport à l'écriture : à la fois errance libératrice et perte de contrôle. »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-18-exo-08",
    notion: "fr-18",
    savoirFaire: ["sens-propre-figure"],
    difficulte: 3,
    enonce: "« En écrivant, je suis comme une apatride. » (d'après Lola Lafon)",
    question: "Expliquez en contexte le sens d'« apatride » : sens propre, sens figuré, et connotations.",
    reponseType: "**Sens propre** : personne sans nationalité (juridique). **Sens figuré** : l'écriture contraint l'autrice à quitter ses repères, comme si elle changeait de pays.\n\n**Connotations ambivalentes** : négative (déracinement, perte de repères, angoisse) ET positive (liberté de l'errance, disponibilité créatrice). Signaler cette ambivalence est valorisé : c'est une lecture experte.",
    explication: [],
  },
];
