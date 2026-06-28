// Banque d'exercices OUVERTS, notion 02 « Fonctions syntaxiques ».
//
// CHANTIER 2 (refonte façon Grévisse, DOCTRINE_EXERCICES.md) : exercices réécrits.
// 3 niveaux : Fondamentaux (un mot, un test) · Concours (la cible, format épreuve,
// types de tâches variés dont « prouver par une manipulation ») · Expert (au-delà
// de l'épreuve : attribut du COD, terminologie 2020 peser/coûter, accord qui tranche
// le rattachement d'une épithète détachée).
// Audit §9 appliqué : adjectif détaché = épithète détachée (apposition réservée au GN).
// Citations vérifiées (Pascal, Verlaine, Beauvoir) ; ailleurs, phrases neutres.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_FONCTIONS_SYNTAXIQUES: TrainerExercice[] = [
  // ————————————————————————— Fondamentaux —————————————————————————
  {
    id: "fr-02-exo-f1",
    notion: "fr-02",
    savoirFaire: ["sujet"],
    difficulte: 1,
    question:
      "Donnez la fonction du groupe souligné, et le test qui la prouve :\n« Dans le jardin chantait <u>un oiseau</u>. »",
    reponseType:
      "**un oiseau** : sujet du verbe « chantait ». Test : « C'est *un oiseau* qui chantait » (encadrement par *c'est… qui*). Le sujet est ici **postposé** (placé après le verbe), ce qui ne change pas sa fonction.",
    explication: [],
  },
  {
    id: "fr-02-exo-f2",
    notion: "fr-02",
    savoirFaire: ["cod-coi"],
    difficulte: 1,
    question:
      "Donnez la fonction du groupe souligné dans chaque phrase :\na) « Elle aide <u>son frère</u>. »\nb) « Elle pense <u>à son frère</u>. »",
    reponseType:
      "a) **son frère** : COD du verbe « aide » (« Elle *l'*aide » ; on aide *quelqu'un*, sans préposition).\n\nb) **à son frère** : COI du verbe « pense » (« Elle pense *à lui*, elle *y* pense » ; on pense *à quelqu'un*). Le test décisif : le COD se reprend par *le / la / les*, le COI garde la trace de la préposition (*à lui*, *y*, *en*).",
    explication: [],
  },
  {
    id: "fr-02-exo-f3",
    notion: "fr-02",
    savoirFaire: ["attribut", "epithete-apposition"],
    difficulte: 1,
    question:
      "Rangez les adjectifs en gras en deux listes : ceux qui sont **attribut du sujet**, ceux qui sont **épithète**.\n« une nuit **claire** » · « la nuit est **claire** » · « **Claire**, la nuit invitait à la flânerie » · « elle paraît **sereine** »",
    reponseType:
      "**Attribut du sujet** (il y a un verbe d'état) : « la nuit *est* claire » ; « elle *paraît* sereine ».\n\n**Épithète** (pas de verbe d'état) : « une nuit claire » (épithète liée) ; « *Claire*, la nuit… » (épithète détachée).\n\nLe seul test : un verbe d'état (*être, paraître, sembler, devenir…*) entre le sujet et l'adjectif → attribut ; sinon → épithète.",
    explication: [],
  },
  {
    id: "fr-02-exo-f4",
    notion: "fr-02",
    savoirFaire: ["attribut"],
    difficulte: 1,
    question:
      "Relevez l'attribut du sujet et nommez le verbe qui l'introduit :\n« Après l'orage, le ciel devint d'un bleu profond. »",
    reponseType:
      "**d'un bleu profond** : attribut du sujet « le ciel », introduit par le verbe d'état **devint** (« devenir »). Test : l'attribut ne se supprime pas (« le ciel devint » est incomplet) et se rattache au sujet par le verbe attributif.",
    explication: [],
  },
  {
    id: "fr-02-exo-f5",
    notion: "fr-02",
    savoirFaire: ["cc"],
    difficulte: 1,
    question:
      "Donnez la fonction précise (avec la nuance) du groupe souligné :\na) « Il travaille <u>avec méthode</u>. »\nb) « <u>Depuis l'aube</u>, ils marchent. »",
    reponseType:
      "a) **avec méthode** : CC de manière (mobile et supprimable : « Il travaille »).\n\nb) **Depuis l'aube** : CC de temps (mobile : « Ils marchent depuis l'aube » ; supprimable). Dans les deux cas, le test du CC est double : déplacement possible et suppression possible.",
    explication: [],
  },
  {
    id: "fr-02-exo-f6",
    notion: "fr-02",
    savoirFaire: ["epithete-apposition"],
    difficulte: 1,
    question:
      "Pour chaque élément en gras, dites s'il est **épithète liée**, **épithète détachée** ou **apposition** :\na) « un **vieux** chêne »\nb) « **Furieux**, il claqua la porte »\nc) « Rome, **capitale de l'Italie**, attire les touristes »",
    reponseType:
      "a) **vieux** : épithète liée du nom « chêne » (accolée, sans virgule).\n\nb) **Furieux** : adjectif, épithète détachée se rapportant au sujet « il » (isolé par une virgule, mobile, pas de verbe d'état). On peut aussi l'appeler *apposition de l'adjectif* : même fonction.\n\nc) **capitale de l'Italie** : GN, apposition à « Rome » (élément nominal coréférent, entre virgules). Convention : on retient **épithète détachée** pour l'adjectif (b) et **apposition** pour le GN (c).",
    explication: [],
  },

  // ————————————————————————— Concours (la cible) —————————————————————————
  {
    id: "fr-02-exo-c1",
    notion: "fr-02",
    savoirFaire: ["cc", "cod-coi"],
    difficulte: 2,
    question:
      "**Prouvez, par une manipulation**, que dans « Il part demain » le mot « demain » est un complément circonstanciel, et non un COD.",
    reponseType:
      "**demain** : CC de temps. Trois manipulations le prouvent :\n1. **Déplacement** : « *Demain*, il part » reste correct (le CC est mobile).\n2. **Suppression** : « Il part » reste une phrase complète (le CC est facultatif).\n3. **Pronominalisation impossible** : on ne peut pas dire « *il le part* » (donc pas de COD).\nLes trois tests convergent : complément circonstanciel, pas COD.",
    explication: [],
  },
  {
    id: "fr-02-exo-c2",
    notion: "fr-02",
    savoirFaire: ["cc", "cod-coi"],
    difficulte: 2,
    question:
      "**Relevez tous les compléments circonstanciels** du passage et donnez la nuance de chacun :\n« Le matin, sans bruit, elle quittait la maison pour rejoindre l'atelier. »",
    reponseType:
      "Trois CC :\n- **Le matin** : CC de temps ;\n- **sans bruit** : CC de manière ;\n- **pour rejoindre l'atelier** : CC de but.\nChacun est mobile et supprimable, d'où sa fonction circonstancielle. ⚠️ Ne pas relever « la maison » : c'est le **COD** de « quittait » (« elle *la* quittait »), pas un CC.",
    explication: [],
  },
  {
    id: "fr-02-exo-c3",
    notion: "fr-02",
    savoirFaire: ["sujet", "cod-coi", "epithete-apposition"],
    difficulte: 2,
    question:
      "Donnez la fonction de chaque groupe souligné :\n« <u>Ravie</u>, <u>la directrice</u> annonça <u>la nouvelle</u> <u>à l'assemblée</u>. »",
    reponseType:
      "- **Ravie** : adjectif, épithète détachée se rapportant au sujet « la directrice » (pas de verbe d'état, isolé par une virgule).\n- **la directrice** : sujet de « annonça ».\n- **la nouvelle** : COD de « annonça » (« elle *l'*annonça »).\n- **à l'assemblée** : COI / complément d'attribution (« annoncer qqch *à qqn* » ; « elle *leur* annonça »).",
    explication: [],
  },
  {
    id: "fr-02-exo-c4",
    notion: "fr-02",
    savoirFaire: ["sujet", "cod-coi"],
    difficulte: 2,
    question:
      "Donnez la fonction des quatre groupes en gras :\n« **Le cœur** a **ses raisons** **que** **la raison** ne connaît point. » (Pascal, *Pensées*)",
    reponseType:
      "- **Le cœur** : sujet du verbe « a ».\n- **ses raisons** : COD du verbe « a ».\n- **que** : pronom relatif, **COD** du verbe « connaît » (antécédent « raisons » ; on rétablit « la raison ne connaît point *ces raisons* »).\n- **la raison** : sujet du verbe « connaît », dans la subordonnée relative.",
    explication: [],
  },
  {
    id: "fr-02-exo-c5",
    notion: "fr-02",
    savoirFaire: ["sujet", "cod-coi", "cc"],
    difficulte: 2,
    question:
      "Délimitez le **groupe sujet**, puis donnez la fonction des deux autres groupes en gras :\n« Les sanglots longs des violons de l'automne blessent **mon cœur** **d'une langueur monotone**. » (Verlaine, *Chanson d'automne*)",
    reponseType:
      "- **Groupe sujet** : « *Les sanglots longs des violons de l'automne* », sujet de « blessent ». C'est un GN étendu (*des violons* et *de l'automne* sont des compléments du nom emboîtés) ; tout le groupe reste le sujet.\n- **mon cœur** : COD de « blessent » (« ils *le* blessent »).\n- **d'une langueur monotone** : CC de manière (blesser *de quelle façon ?*).",
    explication: [],
  },
  {
    id: "fr-02-exo-c6",
    notion: "fr-02",
    savoirFaire: ["attribut", "epithete-apposition"],
    difficulte: 2,
    question:
      "**Prouvez, par une manipulation**, que « heureuse » n'a pas la même fonction dans les deux phrases :\na) « Elle semblait **heureuse**. »\nb) « **Heureuse**, elle entra dans la pièce. »",
    reponseType:
      "a) **heureuse** : attribut du sujet « elle ». Manipulation : l'adjectif dépend du verbe d'état « semblait » ; on ne peut ni le déplacer ni le supprimer sans détruire la phrase (« Elle semblait » est incomplet).\n\nb) **Heureuse** : épithète détachée se rapportant au sujet « elle ». Manipulation : aucun verbe d'état (le verbe est « entra ») ; l'adjectif est **mobile** (« Elle entra dans la pièce, *heureuse* ») et **supprimable**. Le test décisif est donc la présence ou l'absence d'un verbe d'état.",
    explication: [],
  },
  {
    id: "fr-02-exo-c7",
    notion: "fr-02",
    savoirFaire: ["cc"],
    difficulte: 2,
    question:
      "Les deux groupes « de Lyon » ont-ils la même fonction ? Justifiez par un test :\na) « le train **de Lyon** »\nb) « elle revient **de Lyon** »",
    reponseType:
      "Non.\na) Dans « le train *de Lyon* » : **complément du nom** « train ». Il est interne au GN et non mobile (« *De Lyon* le train » est impossible).\nb) Dans « elle revient *de Lyon* » : **CC de lieu** (origine), qui dépend du verbe « revient » et reste mobile (« *De Lyon*, elle revient »).\nMême groupe prépositionnel, deux fonctions selon ce à quoi il se rattache : un nom (CDN) ou un verbe (CC).",
    explication: [],
  },
  {
    id: "fr-02-exo-c8",
    notion: "fr-02",
    savoirFaire: ["cod-coi"],
    difficulte: 2,
    question:
      "Donnez la fonction des deux compléments soulignés :\n« Le facteur remet <u>le colis</u> <u>au voisin</u>. »",
    reponseType:
      "- **le colis** : COD de « remet » (« il *le* remet »).\n- **au voisin** : COS (complément d'objet second) / complément d'attribution (« il *lui* remet le colis »). C'est un second complément, introduit par *à*, qui désigne le destinataire. En terminologie 2020, on l'analyse comme un COI ; la mention « second » indique seulement qu'il s'ajoute au COD.",
    explication: [],
  },
  {
    id: "fr-02-exo-c9",
    notion: "fr-02",
    savoirFaire: ["epithete-apposition", "attribut"],
    difficulte: 2,
    question:
      "Analysez la fonction de chaque élément détaché :\n« **Épuisé**, le marcheur, **un vieil homme pourtant robuste**, s'arrêta. »",
    reponseType:
      "- **Épuisé** : adjectif, épithète détachée se rapportant au sujet « le marcheur » (pas de verbe d'état, mobile ; *apposition de l'adjectif* est un synonyme admis).\n- **un vieil homme pourtant robuste** : GN, apposition à « le marcheur » (élément *nominal*, coréférent, supprimable).\nConvention retenue : **épithète détachée** pour l'adjectif, **apposition** pour le GN. Pas d'attribut ici, car le verbe (« s'arrêta ») n'est pas un verbe d'état.",
    explication: [],
  },
  {
    id: "fr-02-exo-c10",
    notion: "fr-02",
    savoirFaire: ["sujet"],
    difficulte: 2,
    question:
      "Dans chaque phrase, distinguez le **sujet grammatical** (apparent) et, s'il existe, le **sujet réel** (logique) :\na) « **Il** pleut. »\nb) « **Il** arrive parfois **des accidents**. »",
    reponseType:
      "a) **Il** : sujet grammatical (apparent) du verbe impersonnel « pleut ». Pas de sujet réel : « pleuvoir » est essentiellement impersonnel.\n\nb) **Il** : sujet grammatical (apparent) ; **des accidents** : sujet réel (logique) du verbe « arrive » (« *des accidents* arrivent parfois »). Test : c'est « des accidents » qui porte le sens, « il » n'est qu'un support.",
    explication: [],
  },
  {
    id: "fr-02-exo-c11",
    notion: "fr-02",
    savoirFaire: ["sujet"],
    difficulte: 2,
    question:
      "**Prouvez, par une manipulation**, quel est le sujet du verbe :\n« À l'horizon se dessinaient de hautes montagnes. »",
    reponseType:
      "**de hautes montagnes** : sujet du verbe « se dessinaient », bien que postposé. Preuve : l'**encadrement** « Ce sont *de hautes montagnes* qui se dessinaient » est correct, et l'**accord** confirme (verbe au pluriel commandé par « montagnes » ; au singulier, « une haute montagne *se dessinait* »). Le groupe en tête, « À l'horizon », est un CC de lieu, pas le sujet.",
    explication: [],
  },

  // ————————————————————————— Expert (au-delà de l'épreuve) —————————————————————————
  {
    id: "fr-02-exo-e1",
    notion: "fr-02",
    savoirFaire: ["attribut", "cod-coi"],
    difficulte: 3,
    question:
      "Analysez précisément la fonction de « femme », puis de « le » :\n« On ne naît pas **femme**, on **le** devient. » (Simone de Beauvoir, *Le Deuxième Sexe*, 1949)",
    reponseType:
      "- **femme** : attribut du sujet « on ». Le verbe *naître* fonctionne ici comme un verbe attributif (« naître + état »), reliant le sujet à une qualité, sans préposition.\n- **le** : attribut du sujet également, repris par le pronom neutre *le* (« on le devient » = « on devient *femme* », et *devenir* est un verbe d'état).\nCe que le correcteur attend : ne **pas** analyser *le* comme un COD. *Devenir* n'admet pas de COD ; le pronom neutre *le* reprend toujours un attribut (ou une proposition), jamais un objet.",
    explication: [],
  },
  {
    id: "fr-02-exo-e2",
    notion: "fr-02",
    savoirFaire: ["attribut", "cod-coi"],
    difficulte: 3,
    question:
      "Nommez précisément la fonction de « président » et justifiez par une manipulation :\n« L'assemblée a élu **président** un jeune inconnu. »",
    reponseType:
      "**président** : **attribut du COD**. Le COD est « un jeune inconnu » (« l'assemblée *l'*a élu ») ; « président » exprime l'état attribué à ce COD par le verbe « élire ». Manipulation : on peut insérer un verbe d'état entre le COD et le mot (« un jeune inconnu *est devenu* président »), ce qui révèle la relation attributive. À distinguer d'un second complément : « président » ne désigne pas une autre chose élue, mais ce que *devient* le COD.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : « attribut du COD » (ou attribut de l'objet) dépasse les attendus de base, mais le savoir mobiliser est valorisé. L'erreur classique est de l'analyser en COS.",
      },
    ],
  },
  {
    id: "fr-02-exo-e3",
    notion: "fr-02",
    savoirFaire: ["cod-coi"],
    difficulte: 3,
    question:
      "Selon la **terminologie grammaticale de 2020**, quelle est la fonction des groupes soulignés ? (La réponse a changé par rapport à la grammaire traditionnelle.)\na) « Ce livre pèse <u>trois kilos</u>. »\nb) « Ce manteau coûte <u>deux cents euros</u>. »",
    reponseType:
      "a) **trois kilos** : **COD** du verbe « pèse ».\nb) **deux cents euros** : **COD** du verbe « coûte ».\nDans la terminologie 2020, qui abandonne la notion de « complément essentiel », les compléments des verbes *peser, coûter, mesurer, durer*… sont analysés comme des **COD**. Particularité : ces COD ne se pronominalisent pas en *le/la/les* et n'autorisent pas le passif, mais la terminologie officielle les range tout de même en COD.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : maîtriser cette bascule de 2020 est apprécié. Répondre « CC de mesure » ou « complément essentiel » relève de l'ancienne terminologie.",
      },
    ],
  },
  {
    id: "fr-02-exo-e4",
    notion: "fr-02",
    savoirFaire: ["epithete-apposition", "attribut"],
    difficulte: 3,
    question:
      "À quel mot se rapporte « inquiète », et quelle est sa fonction ?\n« Paul observait Marie, **inquiète**. »",
    reponseType:
      "**inquiète** : épithète détachée se rapportant à « Marie », **COD** du verbe « observait » (et non au sujet « Paul »). L'indice est l'**accord** : *inquiète* est au féminin, donc il renvoie à « Marie », pas à « Paul ». Point fin : une épithète détachée peut se rapporter au **COD**, pas seulement au sujet. Ce n'est pas un attribut (aucun verbe d'état). *Apposition de l'adjectif* serait un terme admis ; le rattachement à « Marie » reste l'essentiel à démontrer.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : avec « Paul observait Marie, *inquiet* » (masculin), l'adjectif renverrait au sujet « Paul ». C'est l'accord qui tranche le rattachement : exactement ce qu'on attend que le candidat démontre.",
      },
    ],
  },
];
