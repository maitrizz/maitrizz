// Banque d'exercices OUVERTS, notion 05 « La phrase complexe et sa ponctuation ».
//
// CHANTIER 2 (refonte façon Grévisse, DOCTRINE_EXERCICES.md) : exercices réécrits.
// 3 niveaux : Fondamentaux (un mot, un test) · Concours (la cible, format épreuve,
// types variés dont « prouver par une manipulation ») · Expert (au-delà : « que »
// trois natures dans une phrase, participiale absolue, polysémie de « si » et « comme »,
// subordination implicite par inversion ou corrélation).
// Périmètre : compter/nommer les propositions, modes de liaison, familles de
// subordonnées, ponctuation syntaxique. La FONCTION du pronom relatif relève des
// notions 2/3 ; l'accord, de la notion 12.
// 4 savoir-faire : modes de liaison · relative · conjonctive (complétive) · circonstancielle.
// Citation vérifiée : Rimbaud ; ailleurs, phrases neutres.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_PHRASE_COMPLEXE: TrainerExercice[] = [
  // ————————————————————————— Fondamentaux —————————————————————————
  {
    id: "fr-05-exo-f1",
    notion: "fr-05",
    savoirFaire: ["juxtaposition-coordination-subordination"],
    difficulte: 1,
    question:
      "Phrase simple ou complexe ? Comptez les verbes conjugués :\na) « Le soleil brille et les oiseaux chantent. »\nb) « Il marche en chantant. »\nc) « Je crois qu'il viendra. »",
    reponseType:
      "a) **complexe** : 2 verbes conjugués (*brille*, *chantent*).\nb) **simple** : 1 seul verbe conjugué (*marche*) ; *en chantant* est un gérondif, forme non conjuguée qui ne compte pas.\nc) **complexe** : 2 verbes conjugués (*crois*, *viendra*).",
    explication: [],
  },
  {
    id: "fr-05-exo-f2",
    notion: "fr-05",
    savoirFaire: ["juxtaposition-coordination-subordination"],
    difficulte: 1,
    question:
      "Donnez le mode de liaison entre les propositions :\na) « Il pleut, je reste. »\nb) « Il pleut, mais je sors. »\nc) « Je sors quand il pleut. »",
    reponseType:
      "a) **juxtaposition** (simple virgule, aucun mot de liaison).\nb) **coordination** (conjonction de coordination « mais »).\nc) **subordination** (subordonnant « quand » : la seconde proposition dépend de la première).",
    explication: [],
  },
  {
    id: "fr-05-exo-f3",
    notion: "fr-05",
    savoirFaire: ["relative", "conjonctive", "circonstancielle"],
    difficulte: 1,
    question:
      "Nommez la subordonnée soulignée :\na) « Le livre <u>que tu lis</u> est à moi. »\nb) « Je pense <u>que tu as raison</u>. »\nc) « Je sortirai <u>quand il fera beau</u>. »",
    reponseType:
      "a) **relative** (antécédent « livre »).\nb) **complétive conjonctive** (COD de « pense », introduite par « que » sans antécédent).\nc) **circonstancielle de temps** (introduite par « quand »).",
    explication: [],
  },
  {
    id: "fr-05-exo-f4",
    notion: "fr-05",
    savoirFaire: ["juxtaposition-coordination-subordination", "circonstancielle"],
    difficulte: 1,
    question:
      "Relevez la conjonction de coordination et donnez le rapport exprimé :\na) « Il est tard, donc je pars. »\nb) « Elle hésite, car le chemin est long. »",
    reponseType:
      "a) **donc** (rapport de conséquence).\nb) **car** (rapport de cause). Attention : « car » **coordonne** (il ne se déplace pas, « *Car le chemin est long, elle hésite* » est impossible) ; ce n'est pas une circonstancielle de cause.",
    explication: [],
  },
  {
    id: "fr-05-exo-f5",
    notion: "fr-05",
    savoirFaire: ["juxtaposition-coordination-subordination"],
    difficulte: 1,
    question:
      "Justifiez l'emploi des deux-points :\n« Il n'a pas pu venir : sa voiture est tombée en panne. »",
    reponseType:
      "Les deux-points introduisent une **explication** (la seconde proposition donne la cause de la première). C'est un emploi **syntaxique** : il établit un lien logique entre deux propositions juxtaposées, sans mot subordonnant.",
    explication: [],
  },
  {
    id: "fr-05-exo-f6",
    notion: "fr-05",
    savoirFaire: ["relative", "conjonctive"],
    difficulte: 1,
    question:
      "Le mot « que » est-il pronom relatif ou conjonction ?\na) « La maison que j'habite est ancienne. »\nb) « Je sais que tu mens. »",
    reponseType:
      "a) **pronom relatif** : il a un antécédent (« maison ») et une fonction dans la relative (COD de « habite »).\nb) **conjonction de subordination** : aucun antécédent, « que » ne fait que relier ; il introduit une complétive.",
    explication: [],
  },

  // ————————————————————————— Concours (la cible) —————————————————————————
  {
    id: "fr-05-exo-c1",
    notion: "fr-05",
    savoirFaire: ["juxtaposition-coordination-subordination", "relative", "circonstancielle"],
    difficulte: 2,
    question:
      "Découpez la phrase en propositions, comptez-les et nommez chacune :\n« Quand le jour se leva, les oiseaux que la nuit avait fait taire reprirent leurs chants. »",
    reponseType:
      "**Trois** propositions (3 verbes conjugués : *se leva*, *avait fait*, *reprirent*) :\n1. « Quand le jour se leva » : subordonnée circonstancielle de temps.\n2. « que la nuit avait fait taire » : subordonnée relative (antécédent « oiseaux »).\n3. « les oiseaux… reprirent leurs chants » : proposition principale.",
    explication: [],
  },
  {
    id: "fr-05-exo-c2",
    notion: "fr-05",
    savoirFaire: ["relative", "conjonctive"],
    difficulte: 2,
    question:
      "**Prouvez, par une manipulation**, que « que » n'a pas la même nature :\na) « Le train que j'attends est en retard. »\nb) « Je crains que le train soit en retard. »",
    reponseType:
      "a) **pronom relatif** : il a un antécédent (« train ») et une fonction dans la relative (COD de « attends » : « j'attends le train »). On peut le remplacer par « lequel ».\nb) **conjonction de subordination** : aucun antécédent, « que » introduit une complétive COD de « crains » ; le remplacement par « lequel » est impossible.\nLe test : chercher un antécédent et une fonction. S'ils existent → relatif ; sinon → conjonction.",
    explication: [],
  },
  {
    id: "fr-05-exo-c3",
    notion: "fr-05",
    savoirFaire: ["circonstancielle", "juxtaposition-coordination-subordination"],
    difficulte: 2,
    question:
      "« car » et « parce que » expriment tous deux la cause. Sont-ils de même nature ?\na) « Il part, car il est tard. »\nb) « Il part parce qu'il est tard. »",
    reponseType:
      "Non.\na) **car** : conjonction de **coordination**. La proposition ne se déplace pas (« *Car il est tard, il part* » est impossible) : ce n'est pas une subordonnée.\nb) **parce que** : conjonction de **subordination**. « Parce qu'il est tard, il part » est possible (mobile) : c'est une circonstancielle de cause.\nMême sens (la cause), deux natures grammaticales.",
    explication: [],
  },
  {
    id: "fr-05-exo-c4",
    notion: "fr-05",
    savoirFaire: ["juxtaposition-coordination-subordination"],
    difficulte: 2,
    question:
      "Justifiez chaque signe de ponctuation :\na) « Il rangea ses affaires, ferma la porte, partit. »\nb) « La pluie cessa ; le soleil revint. »",
    reponseType:
      "a) Les **virgules** marquent la **juxtaposition** de propositions (énumération d'actions successives à même sujet).\nb) Le **point-virgule** juxtapose deux propositions liées par le sens, en les séparant plus nettement qu'une virgule, sans subordonnant ni coordonnant.",
    explication: [],
  },
  {
    id: "fr-05-exo-c5",
    notion: "fr-05",
    savoirFaire: ["relative", "conjonctive"],
    difficulte: 2,
    question:
      "Relative ou interrogative indirecte ? Justifiez :\na) « L'homme qui a téléphoné est mon voisin. »\nb) « Je me demande qui a téléphoné. »",
    reponseType:
      "a) **relative** : « qui » a un antécédent (« l'homme ») et une fonction (sujet de « a téléphoné »).\nb) **interrogative indirecte** : aucun antécédent ; la subordonnée dépend d'un verbe de questionnement (« se demander ») et « qui » est un mot interrogatif.\nLe test : y a-t-il un antécédent ? Le verbe principal interroge-t-il ?",
    explication: [],
  },
  {
    id: "fr-05-exo-c6",
    notion: "fr-05",
    savoirFaire: ["circonstancielle"],
    difficulte: 2,
    question:
      "Donnez la nuance de chaque circonstancielle :\na) « Bien qu'il pleuve, il sort. »\nb) « Il étudie pour qu'elle réussisse. »\nc) « Si tu viens, préviens-moi. »",
    reponseType:
      "a) **concession** (« bien que » + subjonctif).\nb) **but** (« pour que » + subjonctif).\nc) **condition / hypothèse** (« si »).",
    explication: [],
  },
  {
    id: "fr-05-exo-c7",
    notion: "fr-05",
    savoirFaire: ["juxtaposition-coordination-subordination"],
    difficulte: 2,
    question:
      "**Prouvez, par une manipulation**, que l'infinitif forme une subordonnée en a), mais pas en b) :\na) « J'entends les oiseaux chanter. »\nb) « Je sors pour acheter du pain. »",
    reponseType:
      "a) **subordonnée infinitive** : « les oiseaux » est le **sujet propre** de « chanter » (différent du sujet de « entends »), et le verbe principal est un verbe de perception. On peut transposer en complétive : « J'entends *que les oiseaux chantent* ».\nb) **pas une infinitive** : « acheter » a le **même sujet** que « sors » (je) ; c'est un groupe infinitif, CC de but (« pour + infinitif »). Les deux conditions de l'infinitive (sujet propre + verbe de perception/déclaration) ne sont pas réunies.",
    explication: [],
  },
  {
    id: "fr-05-exo-c8",
    notion: "fr-05",
    savoirFaire: ["juxtaposition-coordination-subordination"],
    difficulte: 2,
    question:
      "Subordonnée participiale ou épithète détachée ? Justifiez :\na) « La nuit tombant, ils rentrèrent. »\nb) « Fatigués, ils rentrèrent. »",
    reponseType:
      "a) **subordonnée participiale** : le participe « tombant » a son **propre sujet** (« la nuit »), distinct de celui de la principale ; l'ensemble équivaut à une circonstancielle (« comme la nuit tombait »).\nb) **épithète détachée** : « Fatigués » se rapporte au sujet de la principale (« ils ») et n'a pas de sujet à lui → ce n'est pas une participiale.\nLe test : le participe a-t-il un sujet à lui seul ?",
    explication: [],
  },
  {
    id: "fr-05-exo-c9",
    notion: "fr-05",
    savoirFaire: ["circonstancielle", "juxtaposition-coordination-subordination"],
    difficulte: 2,
    question:
      "Découpez en propositions et nommez-les :\n« Comme je descendais des Fleuves impassibles, je ne me sentis plus guidé par les haleurs. » (Rimbaud, *Le Bateau ivre*)",
    reponseType:
      "**Deux** propositions (2 verbes conjugués : *descendais*, *sentis* ; *guidé* est un participe et ne compte pas) :\n1. « Comme je descendais des Fleuves impassibles » : subordonnée circonstancielle de temps (« comme » ≈ « tandis que »).\n2. « je ne me sentis plus guidé par les haleurs » : proposition principale.",
    explication: [],
  },
  {
    id: "fr-05-exo-c10",
    notion: "fr-05",
    savoirFaire: ["relative", "juxtaposition-coordination-subordination"],
    difficulte: 2,
    question:
      "Expliquez la présence ou l'absence de virgule, et ce qu'elle change au sens :\na) « Les joueurs qui étaient blessés sont sortis. »\nb) « Les joueurs, qui étaient blessés, sont sortis. »",
    reponseType:
      "a) **sans virgule** : relative **déterminative**, elle restreint le sens (seuls les joueurs blessés sont sortis).\nb) **entre virgules** : relative **explicative**, elle ajoute une information sur *tous* les joueurs (qui étaient d'ailleurs blessés).\nLa ponctuation traduit la valeur de la relative : déterminative (soudée) ou explicative (détachée).",
    explication: [],
  },

  // ————————————————————————— Expert (au-delà de l'épreuve) —————————————————————————
  {
    id: "fr-05-exo-e1",
    notion: "fr-05",
    savoirFaire: ["relative", "conjonctive", "circonstancielle"],
    difficulte: 3,
    question:
      "Donnez la nature de chacun des trois « que » :\n« Je sais que le livre que tu veux coûte plus cher que prévu. »",
    reponseType:
      "1. « **que** le livre… coûte » : conjonction de subordination, introduit la **complétive** COD de « sais ».\n2. « **que** tu veux » : **pronom relatif** (antécédent « livre », COD de « veux »).\n3. « plus cher **que** prévu » : conjonction, second terme d'une **comparaison** (corrélation « plus… que »).\nTrois occurrences, trois natures : seul le repérage de l'antécédent et du rôle tranche.",
    explication: [],
  },
  {
    id: "fr-05-exo-e2",
    notion: "fr-05",
    savoirFaire: ["juxtaposition-coordination-subordination", "circonstancielle"],
    difficulte: 3,
    question:
      "Analysez la proposition en gras :\n« **Les portes une fois fermées**, le spectacle commença. »",
    reponseType:
      "**Les portes une fois fermées** : subordonnée **participiale absolue**. Elle a son **propre sujet** (« les portes »), un participe (« fermées »), et aucun subordonnant ; détachée de la principale, elle équivaut à une circonstancielle de temps (« une fois que les portes furent fermées »). On la dit « absolue » parce qu'elle forme un petit ensemble sujet + participe indépendant du reste de la phrase.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : la participiale (sujet propre) se distingue nettement de l'épithète détachée (« Fermées, les portes… » se rapporterait au sujet de la principale). Le sujet propre est le critère décisif.",
      },
    ],
  },
  {
    id: "fr-05-exo-e3",
    notion: "fr-05",
    savoirFaire: ["circonstancielle", "conjonctive"],
    difficulte: 3,
    question:
      "« si » introduit-il la même subordonnée ? Justifiez :\na) « Je viendrai si tu m'invites. »\nb) « Je me demande si tu viendras. »",
    reponseType:
      "Non.\na) « **si** » = conjonction de subordination : circonstancielle de **condition** (« à condition que tu m'invites »).\nb) « **si** » = mot subordonnant d'**interrogation indirecte** (totale), dépendant du verbe « se demander » : il n'exprime aucune condition.\nMême mot « si », deux valeurs ; le verbe principal (questionnement ou non) départage.",
    explication: [],
  },
  {
    id: "fr-05-exo-e4",
    notion: "fr-05",
    savoirFaire: ["circonstancielle", "juxtaposition-coordination-subordination"],
    difficulte: 3,
    question:
      "Ces phrases contiennent une **subordination implicite** (sans subordonnant). Analysez-la :\na) « Aurait-il mille raisons, je ne céderais pas. »\nb) « Plus il insiste, plus je résiste. »",
    reponseType:
      "a) Subordonnée de **concession / condition** marquée par l'**inversion** du sujet (« Aurait-il… » = « même s'il avait mille raisons ») : la subordination est exprimée sans subordonnant, par l'ordre des mots et le mode.\nb) Système **corrélatif** « plus… plus » : les deux propositions se conditionnent mutuellement (rapport de proportion). La dépendance n'est pas portée par un subordonnant unique mais par la corrélation.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : repérer une subordination sans subordonnant (inversion, corrélation « plus… plus », « tel… que ») est un raffinement valorisé ; on attend que le candidat nomme le rapport (condition, concession, proportion).",
      },
    ],
  },
  {
    id: "fr-05-exo-e5",
    notion: "fr-05",
    savoirFaire: ["circonstancielle", "juxtaposition-coordination-subordination"],
    difficulte: 3,
    question:
      "Donnez la valeur de « comme » dans chaque phrase :\na) « Comme il pleuvait, nous sommes rentrés. »\nb) « Il est rusé comme un renard. »\nc) « Comme je sortais, le téléphone sonna. »",
    reponseType:
      "a) **cause** (« comme » en tête de phrase ≈ « parce que ») : circonstancielle de cause.\nb) **comparaison** (« comme un renard » = comparant).\nc) **temps** (« comme » ≈ « au moment où ») : circonstancielle de temps.\nTrois valeurs de « comme » ; la place et le sens tranchent.",
    explication: [],
  },
];
