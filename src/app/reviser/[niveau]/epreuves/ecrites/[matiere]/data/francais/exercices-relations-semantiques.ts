// Banque d'exercices OUVERTS, notion 18 « Les relations sémantiques ».
//
// CHANTIER 2 (refonte façon Grévisse, DOCTRINE_EXERCICES.md) : exercices réécrits.
// 3 niveaux : Fondamentaux · Concours (la cible) · Expert (au-delà : trois types
// d'antonymie, réseau polysémique, connotation ambivalente, synonymie partielle,
// champ lexical / sémantique / famille à ne pas confondre).
// 6 savoir-faire : synonymie · antonymie · hyperonymie · polysémie · champ lexical
// · sens propre/figuré.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_RELATIONS_SEMANTIQUES: TrainerExercice[] = [
  // ————————————————————————— Fondamentaux —————————————————————————
  {
    id: "fr-18-exo-f1",
    notion: "fr-18",
    savoirFaire: ["synonymie"],
    difficulte: 1,
    question:
      "Proposez un synonyme :\na) « content »\nb) « débuter »",
    reponseType:
      "a) heureux, satisfait, ravi, joyeux.\nb) commencer, démarrer, entamer.\nLes synonymes ont un sens proche (jamais tout à fait identique).",
    explication: [],
  },
  {
    id: "fr-18-exo-f2",
    notion: "fr-18",
    savoirFaire: ["antonymie"],
    difficulte: 1,
    question:
      "Donnez un antonyme et son type :\na) « grand »\nb) « vivant »\nc) « acheter »",
    reponseType:
      "a) « petit » : antonymes **gradables** (des degrés intermédiaires existent : moyen).\nb) « mort » : antonymes **complémentaires** (pas d'intermédiaire).\nc) « vendre » : antonymes **réciproques** (même action, point de vue inversé).",
    explication: [],
  },
  {
    id: "fr-18-exo-f3",
    notion: "fr-18",
    savoirFaire: ["hyperonymie"],
    difficulte: 1,
    question:
      "Lequel est l'hyperonyme, lequel l'hyponyme ?\n« fleur / rose »",
    reponseType:
      "« fleur » = **hyperonyme** (terme générique, englobant). « rose » = **hyponyme** (terme spécifique). La rose est une sorte de fleur.",
    explication: [],
  },
  {
    id: "fr-18-exo-f4",
    notion: "fr-18",
    savoirFaire: ["sens-propre-figure"],
    difficulte: 1,
    question:
      "Sens propre ou sens figuré ?\na) « la racine de l'arbre »\nb) « la racine du mal »",
    reponseType:
      "a) sens **propre** (la partie souterraine de la plante).\nb) sens **figuré** (l'origine, la cause).\nLe même mot a un sens premier (propre) et un sens dérivé imagé (figuré).",
    explication: [],
  },
  {
    id: "fr-18-exo-f5",
    notion: "fr-18",
    savoirFaire: ["polysemie"],
    difficulte: 1,
    question:
      "Donnez au moins deux sens du mot « glace ».",
    reponseType:
      "« glace » : (1) eau gelée ; (2) miroir ; (3) crème glacée. C'est un mot **polysémique** : une seule forme, plusieurs sens reliés.",
    explication: [],
  },
  {
    id: "fr-18-exo-f6",
    notion: "fr-18",
    savoirFaire: ["champ-lexical"],
    difficulte: 1,
    question:
      "Relevez le champ lexical dominant :\n« Le navire tanguait ; les voiles claquaient et l'équipage hissait l'ancre. »",
    reponseType:
      "Champ lexical de la **mer / navigation** : navire, voiles, équipage, ancre, hisser. Ces mots, de radicaux différents, sont liés par un même thème.",
    explication: [],
  },

  // ————————————————————————— Concours (la cible) —————————————————————————
  {
    id: "fr-18-exo-c1",
    notion: "fr-18",
    savoirFaire: ["synonymie"],
    difficulte: 2,
    question:
      "Proposez un synonyme adapté au contexte :\na) « une lumière vive »\nb) « une douleur vive »\nc) « une eau vive »",
    reponseType:
      "a) « vive » = intense, éclatante.\nb) « vive » = aiguë, intense.\nc) « vive » = courante, rapide.\nLe synonyme dépend du contexte : « vif » n'a pas le même équivalent selon le nom qu'il qualifie.",
    explication: [],
  },
  {
    id: "fr-18-exo-c2",
    notion: "fr-18",
    savoirFaire: ["antonymie"],
    difficulte: 2,
    question:
      "L'antonyme de « frais » change selon le contexte. Donnez-le :\na) « du pain frais »\nb) « une boisson fraîche »\nc) « une nouvelle fraîche »",
    reponseType:
      "a) « pain frais » ↔ **rassis**.\nb) « boisson fraîche » ↔ **chaude / tiède**.\nc) « nouvelle fraîche » ↔ **ancienne**.\nL'antonymie dépend du sens contextuel du mot.",
    explication: [],
  },
  {
    id: "fr-18-exo-c3",
    notion: "fr-18",
    savoirFaire: ["hyperonymie"],
    difficulte: 2,
    question:
      "Classez du plus générique au plus spécifique :\n« caniche, animal, chien, mammifère »",
    reponseType:
      "animal > mammifère > chien > caniche.\nChaque terme est l'hyperonyme du suivant et l'hyponyme du précédent : la relation est hiérarchique et **relative** (un mot peut être l'un ou l'autre selon la comparaison).",
    explication: [],
  },
  {
    id: "fr-18-exo-c4",
    notion: "fr-18",
    savoirFaire: ["sens-propre-figure"],
    difficulte: 2,
    question:
      "Expliquez le sens figuré et l'image :\n« Il a dévoré ce roman. »",
    reponseType:
      "« dévoré » : sens **figuré** (= lu avidement, très vite). L'image vient du sens propre (« manger gloutonnement ») : la lecture est présentée comme une dévoration, ce qui souligne l'avidité et le plaisir. Il faut **interpréter** l'image, pas seulement la signaler.",
    explication: [],
  },
  {
    id: "fr-18-exo-c5",
    notion: "fr-18",
    savoirFaire: ["polysemie"],
    difficulte: 2,
    question:
      "Polysémie ou homonymie ? Justifiez :\na) « une feuille » (d'arbre / de papier)\nb) « louer » (vanter) / « louer » (prendre en location)",
    reponseType:
      "a) « feuille » : **polysémie** — les sens sont reliés (la feuille de papier vient, par analogie, de la feuille d'arbre, plate et fine).\nb) « louer » : **homonymie** — « louer » (vanter, du latin *laudare*) et « louer » (prendre à bail, du latin *locare*) sont deux mots d'origines différentes tombés sur la même forme.\nPolysémie = un mot, des sens liés ; homonymie = deux mots, formes confondues.",
    explication: [],
  },
  {
    id: "fr-18-exo-c6",
    notion: "fr-18",
    savoirFaire: ["champ-lexical", "polysemie"],
    difficulte: 2,
    question:
      "Distinguez :\na) le champ lexical de l'amour dans un texte\nb) le champ sémantique du mot « cœur »",
    reponseType:
      "a) **champ lexical** : l'ensemble des mots d'un texte qui évoquent l'amour (passion, tendresse, désir, baiser…) — des mots différents pour un thème.\nb) **champ sémantique** : l'ensemble des **sens** d'un seul mot (« cœur » : organe, courage, centre, affection…).\nLe champ lexical regroupe des mots ; le champ sémantique, les sens d'un mot.",
    explication: [],
  },
  {
    id: "fr-18-exo-c7",
    notion: "fr-18",
    savoirFaire: ["synonymie"],
    difficulte: 2,
    question:
      "Ces synonymes sont-ils équivalents ? Classez-les par intensité :\na) « content, ravi, aux anges »\nb) « peur, frayeur, terreur »",
    reponseType:
      "a) « content » < « ravi » < « aux anges » (intensité croissante ; « aux anges » est familier et imagé).\nb) « peur » < « frayeur » < « terreur » (intensité croissante).\nLes synonymes diffèrent par l'intensité et le registre : ils ne sont pas interchangeables.",
    explication: [],
  },
  {
    id: "fr-18-exo-c8",
    notion: "fr-18",
    savoirFaire: ["sens-propre-figure"],
    difficulte: 2,
    question:
      "Distinguez la dénotation et la connotation de « renard ».",
    reponseType:
      "**Dénotation** : un mammifère carnivore (le sens objectif, de dictionnaire).\n**Connotation** : la ruse, la malice (valeurs associées culturellement, notamment par les fables).\nLa connotation ajoute des valeurs subjectives ou culturelles au sens premier.",
    explication: [],
  },
  {
    id: "fr-18-exo-c9",
    notion: "fr-18",
    savoirFaire: ["champ-lexical"],
    difficulte: 2,
    question:
      "Relevez le champ lexical dominant et dites ce qu'il révèle :\n« Les murs suintaient, la cellule était glacée, les barreaux rouillés cernaient la lucarne. »",
    reponseType:
      "Champ lexical de l'**enfermement** (cellule, barreaux, lucarne) croisé avec celui de la **dégradation** (suintaient, glacée, rouillés). Il ne suffit pas de relever : ce double champ crée une atmosphère **oppressante et misérable**. On interprète toujours l'effet produit.",
    explication: [],
  },
  {
    id: "fr-18-exo-c10",
    notion: "fr-18",
    savoirFaire: ["hyperonymie", "synonymie"],
    difficulte: 2,
    question:
      "Proposez un hyperonyme pour reprendre le mot sans le répéter :\n« J'ai adopté un caniche. Le ___ est adorable. »",
    reponseType:
      "« Le **chien** (ou l'**animal**) est adorable. » L'hyperonyme sert de reprise nominale infidèle (cf. notion 14) : il évite la répétition tout en restant clair.",
    explication: [],
  },

  // ————————————————————————— Expert (au-delà de l'épreuve) —————————————————————————
  {
    id: "fr-18-exo-e1",
    notion: "fr-18",
    savoirFaire: ["antonymie"],
    difficulte: 3,
    question:
      "Nommez précisément le type d'antonymie :\na) « pair / impair »\nb) « chaud / froid »\nc) « prêter / emprunter »\nd) « monter / descendre »",
    reponseType:
      "a) **complémentaires** : nier l'un revient à affirmer l'autre, sans intermédiaire.\nb) **gradables (contraires)** : des degrés existent (tiède…).\nc) **converses / réciproques** : même relation, rôles inversés.\nd) **réciproques** : directions inverses.\nTrois types distincts à ne pas confondre.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : nommer le type d'antonymie (complémentaire / gradable / réciproque) plutôt que de dire seulement « contraires » est ce qui est valorisé.",
      },
    ],
  },
  {
    id: "fr-18-exo-e2",
    notion: "fr-18",
    savoirFaire: ["polysemie", "sens-propre-figure"],
    difficulte: 3,
    question:
      "Montrez comment les sens de « tête » se relient :\n« la tête (du corps), la tête du lit, une tête de classe, perdre la tête, dix têtes de bétail »",
    reponseType:
      "Sens **propre** : la partie du corps. Sens **figurés dérivés** :\n- « tête du lit » : la partie haute (métaphore de position) ;\n- « tête de classe » : le premier (métaphore de rang) ;\n- « perdre la tête » : la raison (métonymie) ;\n- « dix têtes de bétail » : l'individu entier (métonymie partie → tout).\nLa polysémie forme un **réseau organisé** de sens, pas une liste aléatoire.",
    explication: [],
  },
  {
    id: "fr-18-exo-e3",
    notion: "fr-18",
    savoirFaire: ["sens-propre-figure"],
    difficulte: 3,
    question:
      "Le mot « ambitieux » est-il mélioratif ou péjoratif ? Justifiez :\na) « un projet ambitieux »\nb) « un arriviste ambitieux »",
    reponseType:
      "« ambitieux » a une **connotation ambivalente** :\na) **méliorative** (audacieux, qui vise haut) ;\nb) **péjorative** (avide de réussite, prêt à tout).\nLe contexte oriente la connotation. Repérer cette **ambivalence** est plus fin que d'attribuer au mot une valeur fixe.",
    explication: [],
  },
  {
    id: "fr-18-exo-e4",
    notion: "fr-18",
    savoirFaire: ["synonymie"],
    difficulte: 3,
    question:
      "Peut-on toujours remplacer un mot par son synonyme ? Testez « casser » / « briser » :\na) « casser une assiette »\nb) « casser les prix »\nc) « briser un cœur »",
    reponseType:
      "a) « casser » et « briser » une assiette : **interchangeables** (sens propre concret).\nb) « casser les prix » : « briser les prix » ne se dit pas (expression figée).\nc) « briser un cœur » : « casser un cœur » est inhabituel.\nConclusion : la synonymie est **partielle** ; il n'existe pas de synonymes parfaits, car les emplois figés et les nuances diffèrent.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : affirmer qu'il n'y a pas de synonymes parfaits, preuve à l'appui (collocations, registre, expressions figées), est un raisonnement valorisé.",
      },
    ],
  },
  {
    id: "fr-18-exo-e5",
    notion: "fr-18",
    savoirFaire: ["champ-lexical"],
    difficulte: 3,
    question:
      "Trois listes regroupent les mots selon des critères différents. Nommez chaque regroupement :\na) « jour, lumière, soleil, clarté »\nb) « jour, journée, journalier, ajourner »\nc) « jour : la lumière / une date / une ouverture »",
    reponseType:
      "a) **champ lexical** (mots de sens voisins, thème de la lumière du jour).\nb) **famille de mots** (même radical jour-, cf. notion 17).\nc) **champ sémantique** (les différents sens du mot « jour »).\nTrois critères : sémantique (champ lexical), morphologique (famille), polysémique (champ sémantique).",
    explication: [],
  },
];
