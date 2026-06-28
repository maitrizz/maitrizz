// Banque d'exercices OUVERTS, notion 03 « Le groupe nominal et ses expansions ».
//
// CHANTIER 2 (refonte façon Grévisse, DOCTRINE_EXERCICES.md) : exercices réécrits.
// 3 niveaux : Fondamentaux (un mot, un test) · Concours (la cible, format épreuve,
// types variés dont « prouver par une manipulation ») · Expert (au-delà : ambiguïté
// d'antécédent, apposition liée « le roi Louis XIV », « ville de Paris » apposition
// de relation vs CDN, adjectif de relation).
// Périmètre : ici le GN = STRUCTURE/expansions (nature, place) ; la FONCTION du GN
// relève de la notion 2. Couverture des 6 savoir-faire, dont les déterminants.
// Citations vérifiées (Hugo, Baudelaire) ; ailleurs, phrases neutres.
// Convention apposition/épithète détachée : voir notion 2 (termes admis ; on retient
// « épithète détachée » pour l'adjectif, « apposition » pour le GN).

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_GROUPE_NOMINAL_EXPANSIONS: TrainerExercice[] = [
  // ————————————————————————— Fondamentaux —————————————————————————
  {
    id: "fr-03-exo-f1",
    notion: "fr-03",
    savoirFaire: ["noyau-gn", "epithete", "cdn", "relative"],
    difficulte: 1,
    question:
      "Relevez le **noyau** du GN, puis donnez la nature de chacune de ses expansions :\n« le vieux moulin de pierre qui domine le village »",
    reponseType:
      "Noyau : **moulin**.\n- **vieux** : épithète (liée).\n- **de pierre** : complément du nom (CDN).\n- **qui domine le village** : subordonnée relative (antécédent « moulin »).\nLe déterminant « le » n'est pas une expansion : il introduit le GN.",
    explication: [],
  },
  {
    id: "fr-03-exo-f2",
    notion: "fr-03",
    savoirFaire: ["determinants"],
    difficulte: 1,
    question:
      "Rangez ces déterminants en deux listes : **articles** d'un côté, **autres déterminants** (possessif, démonstratif, indéfini, numéral) de l'autre :\n*le · ce · mon · trois · la · quelques · cette · des*",
    reponseType:
      "**Articles** : *le, la, des* (*des* = article indéfini pluriel).\n\n**Autres déterminants** : *ce, cette* (démonstratifs) ; *mon* (possessif) ; *trois* (numéral) ; *quelques* (indéfini).\n\nTest : l'article introduit le nom sans rien indiquer de plus ; les autres déterminants ajoutent une information (possession, désignation, quantité).",
    explication: [],
  },
  {
    id: "fr-03-exo-f3",
    notion: "fr-03",
    savoirFaire: ["epithete", "cdn", "relative", "apposition"],
    difficulte: 1,
    question:
      "Donnez la nature de chaque expansion en gras :\na) « une tasse **en porcelaine** »\nb) « un homme **qui doute** »\nc) « Athènes, **berceau de la démocratie** »",
    reponseType:
      "a) **en porcelaine** : CDN du nom « tasse ».\nb) **qui doute** : subordonnée relative (antécédent « homme »).\nc) **berceau de la démocratie** : GN, apposition à « Athènes ».",
    explication: [],
  },
  {
    id: "fr-03-exo-f4",
    notion: "fr-03",
    savoirFaire: ["determinants"],
    difficulte: 1,
    question:
      "Donnez la nature précise du déterminant souligné :\na) « <u>chaque</u> matin »\nb) « <u>ses</u> amis »\nc) « <u>quel</u> courage ! »\nd) « <u>deux</u> chats »",
    reponseType:
      "a) **chaque** : déterminant indéfini (distributif).\nb) **ses** : déterminant possessif.\nc) **quel** : déterminant exclamatif (ici) ; interrogatif dans « Quel livre lis-tu ? ».\nd) **deux** : déterminant numéral cardinal.",
    explication: [],
  },
  {
    id: "fr-03-exo-f5",
    notion: "fr-03",
    savoirFaire: ["epithete", "cdn"],
    difficulte: 1,
    question:
      "Pour chaque expansion en gras, dites si c'est une **épithète** ou un **CDN** :\na) « un sourire **éclatant** »\nb) « un sourire **de joie** »\nc) « une robe **rouge** »\nd) « une robe **du soir** »",
    reponseType:
      "a) **éclatant** : épithète (adjectif).\nb) **de joie** : CDN (groupe prépositionnel).\nc) **rouge** : épithète (adjectif).\nd) **du soir** : CDN (groupe prépositionnel).\nTest : un adjectif accordé avec le nom = épithète ; un groupe introduit par une préposition = CDN.",
    explication: [],
  },
  {
    id: "fr-03-exo-f6",
    notion: "fr-03",
    savoirFaire: ["relative", "noyau-gn"],
    difficulte: 1,
    question:
      "Relevez la subordonnée relative et son antécédent :\n« La maison que mes grands-parents ont construite tient encore debout. »",
    reponseType:
      "Relative : **que mes grands-parents ont construite**. Antécédent : **maison** (noyau du GN sujet). Le pronom relatif « que » introduit la proposition ; sa fonction à l'intérieur de la relative (COD) relève de la notion 2.",
    explication: [],
  },

  // ————————————————————————— Concours (la cible) —————————————————————————
  {
    id: "fr-03-exo-c1",
    notion: "fr-03",
    savoirFaire: ["cdn"],
    difficulte: 2,
    question:
      "**Prouvez, par une manipulation**, que « de Paris » est une expansion du nom (CDN) dans « le train de Paris », et non un complément du verbe.",
    reponseType:
      "**de Paris** : CDN du nom « train ». Le groupe est soudé au nom :\n1. On ne peut pas l'extraire du GN : « *De Paris* le train arrive » est impossible.\n2. Il suit le GN quand celui-ci se déplace : « *Le train de Paris*, je l'attends ».\nIl dépend du nom, pas du verbe : c'est donc une expansion du nom, et non un CC.",
    explication: [],
  },
  {
    id: "fr-03-exo-c2",
    notion: "fr-03",
    savoirFaire: ["noyau-gn", "relative"],
    difficulte: 2,
    question:
      "Délimitez le GN, donnez son noyau et analysez son expansion :\n« à l'heure **où blanchit la campagne** » (Victor Hugo, *Demain, dès l'aube*)",
    reponseType:
      "GN : « *l'heure où blanchit la campagne* », noyau **heure**. Expansion : **où blanchit la campagne**, subordonnée relative introduite par le pronom relatif « où » (antécédent « heure »). On analyse ici la **structure interne** du GN ; la fonction du GN entier (CC de temps après « à ») relève de la notion 2.",
    explication: [],
  },
  {
    id: "fr-03-exo-c3",
    notion: "fr-03",
    savoirFaire: ["relative"],
    difficulte: 2,
    question:
      "Les deux relatives ont-elles la même valeur ? Justifiez :\na) « Les élèves **qui avaient révisé** ont réussi. »\nb) « Les élèves, **qui avaient révisé**, ont réussi. »",
    reponseType:
      "Non.\na) **déterminative** (sans virgule) : elle restreint le sens, seuls les élèves ayant révisé ont réussi ; non supprimable sans changer le sens.\nb) **explicative** (entre virgules) : elle ajoute une information sur *tous* les élèves ; supprimable sans toucher au noyau.\nLa virgule est décisive : elle fait basculer le sens.",
    explication: [],
  },
  {
    id: "fr-03-exo-c4",
    notion: "fr-03",
    savoirFaire: ["noyau-gn", "epithete", "cdn", "relative"],
    difficulte: 2,
    question:
      "**Relevez toutes les expansions du nom** dans la phrase et donnez leur nature :\n« Le vieux libraire, passionné de poésie, vendait des livres rares qui sentaient la poussière. »",
    reponseType:
      "- **vieux** : épithète (liée) du nom « libraire ».\n- **passionné de poésie** : épithète détachée se rapportant à « libraire » (groupe adjectival : *passionné* + son complément *de poésie*).\n- **rares** : épithète (liée) du nom « livres ».\n- **qui sentaient la poussière** : subordonnée relative (antécédent « livres »).",
    explication: [],
  },
  {
    id: "fr-03-exo-c5",
    notion: "fr-03",
    savoirFaire: ["apposition", "epithete"],
    difficulte: 2,
    question:
      "Donnez la nature de chaque élément détaché et le mot auquel il se rapporte :\n« Le château, **vieille demeure du XVe siècle**, dominait la vallée, **silencieuse**. »",
    reponseType:
      "- **vieille demeure du XVe siècle** : GN, apposition à « château » (élément nominal coréférent, entre virgules).\n- **silencieuse** : adjectif, épithète détachée se rapportant à « la vallée » (pas de verbe d'état, isolé par une virgule).\nLa nature de l'élément tranche : GN détaché coréférent = apposition ; adjectif détaché = épithète détachée.",
    explication: [],
  },
  {
    id: "fr-03-exo-c6",
    notion: "fr-03",
    savoirFaire: ["relative"],
    difficulte: 2,
    question:
      "**Prouvez, par une manipulation**, que la relative est explicative (et non déterminative) :\n« Mon père, qui déteste l'avion, a pris le train. »",
    reponseType:
      "Relative **explicative**. Manipulations :\n1. Elle est entre virgules.\n2. Elle est **supprimable** : « Mon père a pris le train » garde le même référent unique.\n3. Le noyau « mon père » est déjà identifié de façon unique (déterminant possessif) : la relative ne peut que **commenter**, pas sélectionner parmi plusieurs pères.\nSi l'on retirait les virgules, la phrase deviendrait anormale (on ne restreint pas un référent unique).",
    explication: [],
  },
  {
    id: "fr-03-exo-c7",
    notion: "fr-03",
    savoirFaire: ["determinants"],
    difficulte: 2,
    question:
      "Donnez la nature du déterminant en gras dans chaque GN :\na) « **bien des** difficultés »\nb) « **la plupart des** élèves »\nc) « **n'importe quel** livre »\nd) « **tant de** patience »",
    reponseType:
      "Tous sont des **déterminants indéfinis** (souvent des locutions, exprimant la quantité) :\na) **bien des** ; b) **la plupart des** ; c) **n'importe quel** ; d) **tant de**.\nPiège : ces déterminants complexes introduisent le nom comme un déterminant simple ; il ne faut pas isoler « des » ou « de » à l'intérieur.",
    explication: [],
  },
  {
    id: "fr-03-exo-c8",
    notion: "fr-03",
    savoirFaire: ["relative", "epithete"],
    difficulte: 2,
    question:
      "Remplacez la relative par une **épithète** de même sens, puis nommez les deux expansions :\na) « un enfant qui obéit »\nb) « une eau que l'on peut boire »",
    reponseType:
      "a) « un enfant **obéissant** » : la relative *qui obéit* devient une épithète (participe présent / adjectif).\nb) « une eau **potable** » : la relative *que l'on peut boire* devient une épithète (adjectif).\nLes deux expansions (relative et épithète) jouent le même rôle d'expansion du nom ; la transformation le rend visible.",
    explication: [],
  },
  {
    id: "fr-03-exo-c9",
    notion: "fr-03",
    savoirFaire: ["noyau-gn", "epithete", "cdn"],
    difficulte: 2,
    question:
      "Analysez la structure du GN (noyau + expansions) :\n« le vert paradis des amours enfantines » (Baudelaire, *Mœsta et errabunda*)",
    reponseType:
      "Noyau : **paradis**.\n- **vert** : épithète (liée, antéposée).\n- **des amours enfantines** : CDN du nom « paradis » (et, à l'intérieur, **enfantines** est épithète du nom « amours »).\nLe déterminant « le » introduit le GN.",
    explication: [],
  },
  {
    id: "fr-03-exo-c10",
    notion: "fr-03",
    savoirFaire: ["apposition"],
    difficulte: 2,
    question:
      "Donnez la nature de l'élément en gras et justifiez :\n« **Professeur exigeant**, monsieur Martin notait sévèrement. »",
    reponseType:
      "**Professeur exigeant** : GN apposé (apposition) à « monsieur Martin », placé en tête de phrase. Bien que sans déterminant, c'est un groupe **nominal** coréférent (« monsieur Martin, qui est un professeur exigeant »), supprimable. C'est donc une apposition, pas une épithète (qui serait adjectivale).",
    explication: [],
  },

  // ————————————————————————— Expert (au-delà de l'épreuve) —————————————————————————
  {
    id: "fr-03-exo-e1",
    notion: "fr-03",
    savoirFaire: ["relative", "cdn", "noyau-gn"],
    difficulte: 3,
    question:
      "Cette phrase a deux analyses possibles. Lesquelles ? Comment lever l'ambiguïté ?\n« Le fils du voisin **qui joue du piano** me dérange. »",
    reponseType:
      "La relative **qui joue du piano** peut se rattacher à deux antécédents :\n1. à **fils** (« le fils… qui joue du piano ») : c'est le fils qui joue ;\n2. à **voisin**, noyau du CDN « du voisin » : c'est le voisin qui joue.\nLes deux analyses sont grammaticalement correctes. Le piège : l'antécédent d'une relative n'est **pas toujours le nom le plus proche**. On lève l'ambiguïté en reformulant (« le fils de mon voisin pianiste me dérange » ; « le voisin, qui joue du piano, dont le fils me dérange »).",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : à l'oral, l'intonation (la pause) désigne l'antécédent ; à l'écrit, seule la reformulation lève réellement l'ambiguïté.",
      },
    ],
  },
  {
    id: "fr-03-exo-e2",
    notion: "fr-03",
    savoirFaire: ["apposition", "epithete"],
    difficulte: 3,
    question:
      "Analysez chaque élément détaché :\n« Mon oncle, **médecin de campagne**, **infatigable**, parcourait les routes. »",
    reponseType:
      "- **médecin de campagne** : GN, apposition à « Mon oncle » (élément nominal coréférent).\n- **infatigable** : adjectif, épithète détachée se rapportant à « Mon oncle » (élément adjectival ; *apposition de l'adjectif* est un terme admis, cf. notion 2).\nConvention : on réserve **apposition** au GN et **épithète détachée** à l'adjectif, ces deux derniers désignant la même fonction.",
    explication: [],
  },
  {
    id: "fr-03-exo-e3",
    notion: "fr-03",
    savoirFaire: ["cdn", "apposition"],
    difficulte: 3,
    question:
      "Le groupe « de + nom » a-t-il la même nature dans les deux cas ? Justifiez :\na) « la ville **de Paris** »\nb) « la ville **de mon enfance** »",
    reponseType:
      "Non (cas subtil).\na) Dans « la ville *de Paris* » : « Paris » **désigne la même réalité** que « ville » (Paris *est* la ville). On y voit le plus souvent une **apposition** introduite par un « de » de relation (« la ville, à savoir Paris »).\nb) Dans « la ville *de mon enfance* » : « de mon enfance » **complète** le nom sans le redéfinir (la ville où j'ai grandi) : c'est un **CDN** classique.\nTest : peut-on poser « ville = X » ? Oui pour Paris (apposition), non pour « mon enfance » (CDN).",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : « la ville de Paris », « le mois de mai », « le royaume de France » sont analysés tantôt en apposition de relation, tantôt en CDN selon les grammaires. Savoir qu'il y a débat, et pourquoi, vaut mieux qu'une étiquette tranchée.",
      },
    ],
  },
  {
    id: "fr-03-exo-e4",
    notion: "fr-03",
    savoirFaire: ["apposition", "cdn"],
    difficulte: 3,
    question:
      "« Louis XIV » a-t-il la même fonction dans les deux GN ? Justifiez :\na) « le roi **Louis XIV** »\nb) « le portrait **de Louis XIV** »",
    reponseType:
      "Non.\na) « le roi *Louis XIV* » : **Louis XIV** est une **apposition** au nom « roi » (juxtaposée, sans préposition : le roi *est* Louis XIV). Ici l'apposition est **liée** (soudée, sans virgule).\nb) « le portrait *de Louis XIV* » : **de Louis XIV** est un **CDN** (le portrait représente Louis XIV ; « portrait » ≠ « Louis XIV »).\nPoint fin : l'apposition n'est pas toujours détachée par une virgule ; elle peut être **liée**.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : l'apposition liée est souvent oubliée. Elle apparaît dans « le mot *liberté* », « le fleuve *Amazone* », « le numéro *sept* » : juxtaposition sans préposition, même réalité.",
      },
    ],
  },
  {
    id: "fr-03-exo-e5",
    notion: "fr-03",
    savoirFaire: ["epithete"],
    difficulte: 3,
    question:
      "Ces deux adjectifs sont-ils des épithètes de même nature ? Justifiez :\n« une décision **rapide** » / « une décision **politique** »",
    reponseType:
      "Les deux sont épithètes, mais de natures différentes. **rapide** est un adjectif **qualificatif** ordinaire : gradable (« très rapide ») et possible en attribut (« la décision est rapide »). **politique** est ici un **adjectif de relation** : il **classe** le nom (≈ « relative à la politique ») au lieu de le qualifier ; il ne s'antépose pas (« *une politique décision* » est impossible) et se gradue mal au sens relationnel. Il est sémantiquement proche d'un CDN (« une décision *de politique* »).",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : repérer l'adjectif de relation (économique, présidentiel, solaire…) et le rapprocher du CDN est un raffinement valorisé ; au CRPE, savoir qu'il existe suffit.",
      },
    ],
  },
];
