// Banque d'exercices OUVERTS, notion 02 « Fonctions syntaxiques ».
//
// Migration de structure : exercices repris depuis l'onglet « Application » v1,
// sans réécriture pédagogique. Le fond sera repris dans un chantier ultérieur.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_FONCTIONS_SYNTAXIQUES: TrainerExercice[] = [
  // TODO refonte exo
  {
    id: "fr-02-exo-01",
    notion: "fr-02",
    savoirFaire: ["sujet", "cod-coi", "attribut", "cc"],
    difficulte: 1,
    question: "Quelle est la fonction du groupe souligné ?\na) « <u>Le soleil</u> se couchait lentement. »   b) « Il mange <u>une pomme</u>. »   c) « Elle parle <u>à son ami</u>. »   d) « <u>Rapidement</u>, il referma la porte. »   e) « Il semble <u>fatigué</u>. »",
    reponseType: "a) **Le soleil** → sujet du verbe « se couchait » (« C'est le soleil qui se couchait »)\n\nb) **une pomme** → COD du verbe « mange » (quoi ? ; « Il la mange »)\n\nc) **à son ami** → COI du verbe « parle » (à qui ? ; « Elle lui parle »)\n\nd) **Rapidement** → CC de manière (mobile et supprimable)\n\ne) **fatigué** → attribut du sujet « il » (verbe d'état « semble »)",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-02-exo-02",
    notion: "fr-02",
    savoirFaire: ["sujet", "attribut", "cc", "epithete-apposition"],
    difficulte: 1,
    question: "Vrai ou faux, justifiez en une phrase :\na) Dans « Le chien de ma voisine aboie », « de ma voisine » est un CC de lieu.\nb) Dans « Elle paraît heureuse », « heureuse » est attribut du sujet.\nc) Dans « Il habite à Lyon », « à Lyon » est supprimable.\nd) Dans « Seul, il repartit », « Seul » est attribut du sujet.",
    reponseType: "a) **Faux** : « de ma voisine » est CDN du nom « chien » (dans le GN, non mobile).\n\nb) **Vrai** : attribut du sujet « elle » via le verbe d'état « paraît ».\n\nc) **Faux** : « Il habite » seul est bancal, « à Lyon » est un complément essentiel de lieu.\n\nd) **Faux** : pas de verbe d'état, « Seul » est une épithète détachée.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-02-exo-03",
    notion: "fr-02",
    savoirFaire: ["cod-coi", "cc"],
    difficulte: 1,
    question: "Identifiez la fonction du groupe souligné :\na) « Il offre <u>des fleurs</u>. »   b) « Elle rêve <u>de voyages</u>. »   c) « Il travaille <u>avec soin</u>. »   d) « Je doute <u>de sa sincérité</u>. »   e) « Il lit <u>un roman</u>. »   f) « Ils partent <u>demain matin</u>. »",
    reponseType: "a) **des fleurs** → COD (« Il les offre »)\n\nb) **de voyages** → COI (« Elle en rêve »)\n\nc) **avec soin** → CC de manière (mobile et supprimable)\n\nd) **de sa sincérité** → COI (« Il en doute »)\n\ne) **un roman** → COD (« Il le lit »)\n\nf) **demain matin** → CC de temps (mobile et supprimable)",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-02-exo-04",
    notion: "fr-02",
    savoirFaire: ["sujet", "cod-coi", "cc"],
    difficulte: 1,
    question: "Identifiez le sujet et précisez sa nature :\na) « Les enfants courent dans le jardin. »   b) « Écrire est un plaisir. »   c) « Il est tard. »   d) « Que tu partes m'attriste. »   e) « Monte en moi une humble flamme. »",
    reponseType: "a) Sujet : **Les enfants** → GN\n\nb) Sujet : **Écrire** → verbe à l'infinitif (infinitif sujet)\n\nc) Sujet : **Il** → pronom personnel impersonnel (sujet grammatical, sans référent réel)\n\nd) Sujet : **Que tu partes** → proposition subordonnée conjonctive\n\ne) Sujet : **une humble flamme** → GN (sujet postposé)",
    explication: [
      { type: "note", text: "⚠️ En e), « en moi » n'est pas le sujet mais un CC de lieu : le sujet est le GN postposé." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-02-exo-05",
    notion: "fr-02",
    savoirFaire: ["sujet", "cod-coi", "attribut", "cc", "epithete-apposition"],
    difficulte: 1,
    question: "Fonctions possibles : sujet · attribut du sujet · COD · COI · CC · CDN · épithète · apposition · apostrophe.\na) « La maison <u>de Pierre</u> est grande. »   b) « <u>Mes amis</u>, écoutez-moi. »   c) « Hugo, <u>grand poète romantique</u>, vécut longtemps. »   d) « Il devient <u>professeur</u>. »   e) « Elle porte une <u>belle</u> robe. »   f) « Il part <u>pour fuir</u>. »",
    reponseType: "a) **de Pierre** → CDN du nom « maison »\n\nb) **Mes amis** → apostrophe (interpelle, sans lien syntaxique)\n\nc) **grand poète romantique** → apposition (entre virgules, se rapporte à « Hugo »)\n\nd) **professeur** → attribut du sujet « il » (verbe d'état « devient »)\n\ne) **belle** → épithète liée du nom « robe »\n\nf) **pour fuir** → CC de but (groupe infinitif prépositionnel)",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-02-exo-06",
    notion: "fr-02",
    savoirFaire: ["cod-coi", "cc", "epithete-apposition"],
    difficulte: 1,
    question: "Identifiez la fonction du groupe souligné en justifiant par la question après le verbe et, si besoin, par la suppression :\na) « Il téléphone <u>à sa mère</u>. »   b) « Elle raconte <u>son voyage</u>. »   c) « Ils habitent <u>à Paris</u>. »   d) « <u>Le matin</u>, il lit. »",
    reponseType: "a) **à sa mère** → COI du verbe « téléphone » : il téléphone à qui ? à sa mère.\n\nb) **son voyage** → COD du verbe « raconte » : elle raconte quoi ? son voyage, sans préposition.\n\nc) **à Paris** → complément essentiel de lieu : il habite où ? à Paris ; « Ils habitent » seul est incomplet.\n\nd) **Le matin** → CC de temps : le groupe est supprimable (« il lit ») et déplaçable (« il lit le matin »).",
    explication: [
      { type: "note", text: "⚠️ La question après le verbe aide à repérer COD et COI, mais elle ne suffit pas pour les lieux : il faut aussi tester la suppression." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-02-exo-07",
    notion: "fr-02",
    savoirFaire: ["cc", "epithete-apposition"],
    difficulte: 1,
    question: "Identifiez la fonction du groupe souligné :\na) « le chien <u>du voisin</u> »   b) « Il travaille <u>avec courage</u>. »   c) « un acte <u>de courage</u> »   d) « Elle revient <u>de Paris</u>. »   e) « la gare <u>de Paris</u> »",
    reponseType: "a) **du voisin** → CDN (dans le GN, non mobile)\n\nb) **avec courage** → CC de manière (mobile et supprimable)\n\nc) **de courage** → CDN du nom « acte » (non mobile)\n\nd) **de Paris** → CC de lieu (mobile et supprimable)\n\ne) **de Paris** → CDN du nom « gare » (non mobile)",
    explication: [
      { type: "note", text: "⚠️ Même préposition, deux fonctions : le test de mobilité et de suppression est décisif." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-02-exo-08",
    notion: "fr-02",
    savoirFaire: ["sujet", "cod-coi", "attribut", "cc", "epithete-apposition"],
    difficulte: 1,
    question: "Identifiez la fonction du groupe souligné :\na) « Je <u>le</u> crois <u>sincère</u>. »   b) « Il offre <u>des roses</u> <u>à sa femme</u>. »   c) « <u>Épuisée</u>, elle s'endormit. »   d) « Ils ont élu Paola <u>présidente</u>. »",
    reponseType: "a) **sincère** → attribut du COD « le » : ce n'est pas « je » qui est sincère, mais « le » (« il est sincère »)\n\nb) **des roses** → COD ; **à sa femme** → COS\n\nc) **Épuisée** → épithète détachée du sujet « elle » (pas de verbe d'état)\n\nd) **présidente** → attribut du COD « Paola » (« Paola est présidente »)",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-02-exo-09",
    notion: "fr-02",
    savoirFaire: ["sujet", "cod-coi", "cc"],
    difficulte: 2,
    question: "Justifiez la fonction par un test grammatical explicite :\na) « Elle aime son métier. » (COD ?)\nb) « Il obéit à ses parents. » (COI ?)\nc) « Les enfants jouent dehors. » (sujet ?)",
    reponseType: "a) **son métier** → COD du verbe « aime ». Deux tests le confirment : 1) question après le verbe : « elle aime quoi ? » → « son métier », sans préposition ; 2) pronominalisation : « Elle l'aime ». Le groupe complète directement le verbe.\n\nb) **à ses parents** → COI du verbe « obéit ». Deux tests le confirment : 1) question après le verbe : « il obéit à qui ? » → « à ses parents » ; 2) pronominalisation : « Il leur obéit ». La préposition « à » est imposée par le verbe « obéir à ».\n\nc) **Les enfants** → sujet du verbe « jouent ». Test : encadrement par « c'est… qui » → « Ce sont les enfants qui jouent dehors ». Le groupe commande l'accord du verbe à la 3e personne du pluriel.\n\n**Réponse attendue (formulation jury) :** « a) *son métier* → COD de *aime* (elle *l'*aime) ; b) *à ses parents* → COI de *obéit* (obéir à ; il *leur* obéit) ; c) *Les enfants* → sujet de *jouent* (ce sont les enfants qui jouent). »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-02-exo-10",
    notion: "fr-02",
    savoirFaire: ["cod-coi", "cc", "epithete-apposition"],
    difficulte: 2,
    question: "« à » introduit des fonctions différentes. Identifiez-les :\na) « Il pense <u>à son avenir</u>. »   b) « Il court <u>à toute vitesse</u>. »   c) « Il habite <u>à Bordeaux</u>. »   d) « Il donne un livre <u>à sa sœur</u>. »",
    reponseType: "a) **à son avenir** → COI (« Il y pense », non supprimable)\n\nb) **à toute vitesse** → CC de manière (mobile et supprimable)\n\nc) **à Bordeaux** → complément essentiel de lieu (« Il habite » seul est bancal)\n\nd) **à sa sœur** → COS (COD = « un livre »)",
    explication: [
      { type: "note", text: "⚠️ « à » introduit COI, CC ou COS selon le contexte : les tests de suppression et de pronominalisation sont indispensables." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-02-exo-11",
    notion: "fr-02",
    savoirFaire: ["sujet", "cod-coi", "attribut", "cc", "epithete-apposition"],
    difficulte: 2,
    question: "Expliquez pourquoi la fonction entre parenthèses est fausse, donnez la bonne :\na) « <u>Heureuse</u>, elle entra dans la pièce. » (attribut du sujet ?)\nb) « Le livre <u>de Paul</u> est sur la table. » (CC de lieu ?)\nc) « <u>Mes chers amis</u>, je vous remercie. » (sujet ?)\nd) « Il semble <u>content</u>. » (épithète liée ?)",
    reponseType: "a) Pas attribut du sujet (aucun verbe d'état) → **épithète détachée** du sujet « elle ».\n\nb) Pas CC de lieu (« de Paul » non mobile) → **CDN** du nom « livre ».\n\nc) Pas sujet (aucun lien avec un verbe, supprimable) → **apostrophe**.\n\nd) Pas épithète liée (« content » séparé du sujet par « semble ») → **attribut du sujet**.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-02-exo-12",
    notion: "fr-02",
    savoirFaire: ["cod-coi"],
    difficulte: 2,
    question: "Identifiez la fonction du groupe souligné. Attention à la préposition qui introduit le groupe : elle fait partie de la construction du verbe et peut changer l'analyse.\na) « Il ressemble <u>à son père</u>. »   b) « Elle nuit <u>à ses intérêts</u>. »   c) « Il joue <u>de la guitare</u>. »   d) « Ils ont besoin <u>de repos</u>. »",
    reponseType: "a) **à son père** → COI (ressembler À ; « Il lui ressemble »)\n\nb) **à ses intérêts** → COI (nuire À ; « Elle y nuit »)\n\nc) **de la guitare** → COI (jouer DE ; « Il en joue »)\n\nd) **de repos** → COI (avoir besoin DE ; « Ils en ont besoin »)",
    explication: [
      { type: "note", text: "💡 À retenir : obéir à, nuire à, ressembler à, parler à, penser à, jouer de, manquer de, avoir besoin de, se souvenir de sont tous transitifs indirects." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-02-exo-13",
    notion: "fr-02",
    savoirFaire: ["sujet", "cod-coi", "epithete-apposition"],
    difficulte: 2,
    question: "Identifiez le sujet et sa nature :\na) « Que tu aies réussi me comble de joie. »   b) « Partir serait une erreur. »   c) « Il neige depuis ce matin. »   d) « Tout est possible. »",
    reponseType: "a) **Que tu aies réussi** → proposition subordonnée conjonctive sujet\n\nb) **Partir** → verbe à l'infinitif (infinitif sujet)\n\nc) **Il** → pronom personnel impersonnel (sujet grammatical, sans référent)\n\nd) **Tout** → pronom indéfini sujet",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-02-exo-14",
    notion: "fr-02",
    savoirFaire: ["sujet", "cod-coi", "attribut", "cc"],
    difficulte: 2,
    question: "Analysez la fonction du groupe souligné :\na) « Je le crois <u>parti</u>. »   b) « Elle regarde <u>les enfants jouer</u>. »   c) « Il entend <u>la pluie tomber</u>. »   d) « Elle le trouve <u>charmant</u>. »",
    reponseType: "a) **parti** → attribut du COD « le » (« il est parti »)\n\nb) **les enfants jouer** → proposition subordonnée infinitive, COD du verbe « regarde »\n\nc) **la pluie tomber** → proposition subordonnée infinitive, COD du verbe « entend »\n\nd) **charmant** → attribut du COD « le » (« il est charmant »)",
    explication: [
      { type: "note", text: "⚠️ Après un verbe de perception (voir, entendre, regarder, sentir) + infinitif ayant son propre sujet → proposition subordonnée infinitive COD." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-02-exo-15",
    notion: "fr-02",
    savoirFaire: ["cc"],
    difficulte: 2,
    question: "Précisez le type de CC (temps, lieu, manière, cause, but, condition, concession, moyen) :\na) « <u>Malgré la pluie</u>, il sortit. »   b) « Il court <u>pour gagner du temps</u>. »   c) « Elle tremblait <u>de peur</u>. »   d) « <u>Si tu viens</u>, je serai heureux. »   e) « Il écrit <u>avec un stylo rouge</u>. »",
    reponseType: "a) **Malgré la pluie** → CC de concession\n\nb) **pour gagner du temps** → CC de but\n\nc) **de peur** → CC de cause\n\nd) **Si tu viens** → CC de condition\n\ne) **avec un stylo rouge** → CC de moyen",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-02-exo-16",
    notion: "fr-02",
    savoirFaire: ["cod-coi", "epithete-apposition"],
    difficulte: 2,
    question: "Distinguez et justifiez :\na) « Paris, <u>capitale de la France</u>, est magnifique. »   b) « La capitale <u>de la France</u> est magnifique. »   c) « Victor Hugo, <u>auteur des Misérables</u>, est né en 1802. »   d) « L'auteur <u>des Misérables</u> est né en 1802. »",
    reponseType: "a) **capitale de la France** → apposition (entre virgules, se rapporte à « Paris », supprimable)\n\nb) **de la France** → CDN du nom « capitale » (dans le GN, non mobile)\n\nc) **auteur des Misérables** → apposition (entre virgules, se rapporte à « Victor Hugo »)\n\nd) **des Misérables** → CDN du nom « auteur »",
    explication: [
      { type: "note", text: "💡 Apposition : groupe entre virgules, supprimable. CDN : groupe prépositionnel dans le GN, non mobile." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-02-exo-17",
    notion: "fr-02",
    savoirFaire: ["sujet", "cod-coi", "cc", "epithete-apposition"],
    difficulte: 3,
    enonce: "« Une femme passa, tenant par la main un petit garçon <u>d'une dizaine d'années</u>. Elle se hâtait, les yeux <u>baissés</u>, <u>pressée d'atteindre sa maison</u> <u>avant la nuit</u>. »\n*(Émile Zola, Germinal, 1885)*",
    question: "Précisez la nature et la fonction : « <u>Une femme</u> » · « <u>d'une dizaine d'années</u> » · « <u>baissés</u> » · « <u>avant la nuit</u> » · « <u>pressée d'atteindre sa maison</u> »",
    reponseType: "Mot / groupe | Nature | Fonction\n--- | --- | ---\nUne femme | Groupe nominal | Sujet du verbe « passa »\nd'une dizaine d'années | GN prépositionnel | CDN du nom « garçon »\nbaissés | Participe passé employé comme adjectif | Épithète détachée du nom « yeux »\navant la nuit | GN prépositionnel | CC de temps du verbe « atteindre »\npressée d'atteindre sa maison | Adjectif + groupe infinitif prépositionnel | Épithète détachée du sujet « elle »\n\n**Réponse attendue (formulation jury) :** « *Une femme* → GN, sujet de *passa* ; *d'une dizaine d'années* → GN prépositionnel, CDN du nom *garçon* ; *baissés* → participe passé employé comme adjectif, épithète détachée du nom *yeux* ; *avant la nuit* → GN prépositionnel, CC de temps ; *pressée d'atteindre sa maison* → groupe adjectival, épithète détachée du sujet *elle*. »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-02-exo-18",
    notion: "fr-02",
    savoirFaire: ["sujet", "cod-coi", "cc", "epithete-apposition"],
    difficulte: 3,
    enonce: "« Il aimait <u>les promenades solitaires</u> <u>dans les bois</u>, les longues chevauchées silencieuses, et les soirs d'automne, quand il rentrait <u>seul</u>, il sentait <u>le vide de sa vie</u> s'étendre <u>autour de lui</u>. »\n*(Guy de Maupassant, Bel-Ami, 1885)*",
    question: "Précisez la nature et la fonction : « <u>les promenades solitaires</u> » · « <u>dans les bois</u> » · « <u>seul</u> » · « <u>le vide de sa vie</u> » · « <u>autour de lui</u> »",
    reponseType: "Mot / groupe | Nature | Fonction\n--- | --- | ---\nles promenades solitaires | Groupe nominal | COD du verbe « aimait »\ndans les bois | GN prépositionnel | CDN du nom « promenades » (ou CC de lieu selon la lecture)\nseul | Adjectif qualificatif | Épithète détachée du sujet « il »\nle vide de sa vie | Groupe nominal | COD du verbe « sentait »\nautour de lui | GN prépositionnel | CC de lieu du verbe « s'étendre »\n\n**Réponse attendue (formulation jury) :** « *les promenades solitaires* → GN, COD de *aimait* ; *dans les bois* → GN prépositionnel, CDN du nom *promenades* (ou CC de lieu, si on justifie) ; *seul* → adjectif qualificatif, épithète détachée du sujet *il* ; *le vide de sa vie* → GN, COD de *sentait* ; *autour de lui* → GN prépositionnel, CC de lieu de *s'étendre*. »",
    explication: [
      { type: "note", text: "⚠️ « dans les bois » peut s'analyser en CDN ou en CC de lieu : les deux sont défendables si on justifie." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-02-exo-19",
    notion: "fr-02",
    savoirFaire: ["sujet", "cod-coi", "cc", "epithete-apposition"],
    difficulte: 3,
    enonce: "« Ma mère, <u>dont</u> le regard ne vieillissait pas, regardait <u>les enfants jouer</u> <u>dans le jardin</u>. Elle souriait, <u>muette</u>, heureuse, et ne disait <u>rien</u>. »\n*(Colette, La Maison de Claudine, 1922)*",
    question: "Précisez la nature et la fonction : « <u>dont</u> » · « <u>les enfants jouer</u> » · « <u>dans le jardin</u> » · « <u>muette</u> » · « <u>rien</u> »",
    reponseType: "Mot / groupe | Nature | Fonction\n--- | --- | ---\ndont | Pronom relatif | CDN du nom « regard » (dépronominalisé : « le regard de ma mère »)\nles enfants jouer | Proposition subordonnée infinitive | COD du verbe « regardait » (verbe de perception)\ndans le jardin | GN prépositionnel | CC de lieu du verbe « jouer »\nmuette | Adjectif qualificatif | Épithète détachée du sujet « elle »\nrien | Pronom indéfini | COD du verbe « disait »\n\n**Réponse attendue (formulation jury) :** « *dont* → pronom relatif, CDN du nom *regard* (le regard *de ma mère*) ; *les enfants jouer* → proposition subordonnée infinitive, COD de *regardait* ; *dans le jardin* → GN prépositionnel, CC de lieu de *jouer* ; *muette* → adjectif qualificatif, épithète détachée du sujet *elle* ; *rien* → pronom indéfini, COD de *disait*. »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-02-exo-20",
    notion: "fr-02",
    savoirFaire: ["cod-coi", "cc", "epithete-apposition"],
    difficulte: 3,
    enonce: "« Elle rêvait <u>des contrées lointaines</u>, des rivages lumineux, des palais <u>de marbre</u> <u>où</u> des fontaines jaillissaient <u>sous des ciels toujours bleus</u>. »\n*(Gustave Flaubert, Madame Bovary, 1857)*",
    question: "Précisez la nature et la fonction : « <u>des contrées lointaines</u> » · « <u>de marbre</u> » · « <u>où</u> » · « <u>sous des ciels toujours bleus</u> »",
    reponseType: "Mot / groupe | Nature | Fonction\n--- | --- | ---\ndes contrées lointaines | Groupe nominal | COI du verbe « rêvait » (rêver DE ; « Elle en rêvait »)\nde marbre | GN prépositionnel | CDN du nom « palais »\noù | Pronom relatif | CC de lieu du verbe « jaillissaient » (dépronominalisé : « dans les palais »)\nsous des ciels toujours bleus | GN prépositionnel | CC de lieu du verbe « jaillissaient »\n\n**Réponse attendue (formulation jury) :** « *des contrées lointaines* → GN, COI de *rêvait* (rêver de ; elle *en* rêvait) ; *de marbre* → GN prépositionnel, CDN du nom *palais* ; *où* → pronom relatif, CC de lieu de *jaillissaient* (dans les palais) ; *sous des ciels toujours bleus* → GN prépositionnel, CC de lieu de *jaillissaient*. »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-02-exo-21",
    notion: "fr-02",
    savoirFaire: ["cod-coi", "epithete-apposition"],
    difficulte: 3,
    enonce: "« Elle regardait <u>les eaux du fleuve</u> avec une attention <u>que</u> rien ne semblait pouvoir distraire. Peut-être pensait-elle <u>à quelqu'un d'absent</u>, à des jours passés, à une autre vie <u>possible</u>. »\n*(Marguerite Duras, L'Amant, 1984)*",
    question: "Précisez la nature et la fonction : « <u>les eaux du fleuve</u> » · « <u>que</u> » · « <u>à quelqu'un d'absent</u> » · « <u>possible</u> »",
    reponseType: "Mot / groupe | Nature | Fonction\n--- | --- | ---\nles eaux du fleuve | Groupe nominal | COD du verbe « regardait »\nque | Pronom relatif | COD du verbe « distraire » (dépronominalisé : « distraire cette attention »)\nà quelqu'un d'absent | GN prépositionnel | COI du verbe « pensait » (penser À quelqu'un)\npossible | Adjectif qualificatif | Épithète liée du nom « vie »\n\n**Réponse attendue (formulation jury) :** « *les eaux du fleuve* → GN, COD de *regardait* ; *que* → pronom relatif, COD de *distraire* (distraire cette attention) ; *à quelqu'un d'absent* → GN prépositionnel, COI de *pensait* (penser à quelqu'un) ; *possible* → adjectif qualificatif, épithète liée du nom *vie*. »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-02-exo-22",
    notion: "fr-02",
    savoirFaire: ["sujet", "cod-coi", "attribut", "cc", "epithete-apposition"],
    difficulte: 3,
    enonce: "« <u>Écrire</u> n'est pas tout à fait un choix : c'est <u>un aveu d'impuissance</u>. On écrit <u>parce qu'on ne sait par quel autre biais attraper le réel</u>. Vivre, <u>sans l'écriture</u>, me va <u>mal</u>. »\n*(Lola Lafon, Quand tu écouteras cette chanson, 2023)*",
    question: "Précisez la nature et la fonction : « <u>Écrire</u> » · « <u>un aveu d'impuissance</u> » · « <u>parce qu'on ne sait…</u> » · « <u>sans l'écriture</u> » · « <u>mal</u> »",
    reponseType: "Mot / groupe | Nature | Fonction\n--- | --- | ---\nÉcrire | Verbe à l'infinitif | Sujet du verbe « est »\nun aveu d'impuissance | Groupe nominal | Attribut du sujet « c' » (verbe « est »)\nparce qu'on ne sait… | Proposition subordonnée circonstancielle | CC de cause du verbe « écrit »\nsans l'écriture | GN prépositionnel | CC de manière ou de condition du verbe « va »\nmal | Adverbe de manière | CC de manière du verbe « va »\n\n**Réponse attendue (formulation jury) :** « *Écrire* → verbe à l'infinitif, sujet de *est* ; *un aveu d'impuissance* → GN, attribut du sujet *c'* (verbe *est*) ; *parce qu'on ne sait…* → proposition subordonnée circonstancielle, CC de cause de *écrit* ; *sans l'écriture* → GN prépositionnel, CC (de condition ou de manière) de *va* ; *mal* → adverbe, CC de manière de *va*. »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-02-exo-23",
    notion: "fr-02",
    savoirFaire: ["sujet", "cod-coi", "attribut", "cc", "epithete-apposition"],
    difficulte: 3,
    enonce: "« <u>Les misérables</u> ne manquent pas <u>sur la terre</u>. <u>Partout</u>, hélas, les souffrances sont <u>grandes</u> et les hommes sont las <u>de ne plus croire</u>. »\n*(Victor Hugo, Les Misérables, 1862)*",
    question: "Précisez la nature et la fonction : « <u>Les misérables</u> » · « <u>sur la terre</u> » · « <u>Partout</u> » · « <u>grandes</u> » · « <u>de ne plus croire</u> »",
    reponseType: "Mot / groupe | Nature | Fonction\n--- | --- | ---\nLes misérables | Groupe nominal | Sujet du verbe « manquent »\nsur la terre | GN prépositionnel | CC de lieu du verbe « manquent »\nPartout | Adverbe de lieu | CC de lieu du verbe « sont »\ngrandes | Adjectif qualificatif | Attribut du sujet « souffrances »\nde ne plus croire | Groupe infinitif prépositionnel | Complément de l'adjectif « las » (las DE)\n\n**Réponse attendue (formulation jury) :** « *Les misérables* → GN, sujet de *manquent* ; *sur la terre* → GN prépositionnel, CC de lieu de *manquent* ; *Partout* → adverbe, CC de lieu de *sont* ; *grandes* → adjectif qualificatif, attribut du sujet *souffrances* (verbe d'état *sont*) ; *de ne plus croire* → groupe infinitif prépositionnel, complément de l'adjectif *las*. »",
    explication: [
      { type: "note", text: "💡 *de ne plus croire* complète l'adjectif *las* (las **de** quelque chose) : on dit *complément de l'adjectif*, pas complément du nom, car *las* est un adjectif et non un nom." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-02-exo-24",
    notion: "fr-02",
    savoirFaire: ["sujet", "cod-coi", "attribut", "cc", "epithete-apposition"],
    difficulte: 3,
    enonce: "« <u>À seize ans</u>, j'ai vu se rouvrir <u>les portes qui me séparaient du monde</u>, je suis monté <u>sur la terrasse</u> du palais <u>pour regarder les nuages</u>, mais ils étaient <u>moins beaux</u> que ceux de tes crépuscules. »\n*(Marguerite Yourcenar, Comment Wang-Fô fut sauvé, Nouvelles orientales, 1963)*",
    question: "Précisez la nature et la fonction : « <u>À seize ans</u> » · « <u>les portes qui me séparaient du monde</u> » · « <u>sur la terrasse</u> » · « <u>pour regarder les nuages</u> » · « <u>moins beaux</u> »",
    reponseType: "Mot / groupe | Nature | Fonction\n--- | --- | ---\nÀ seize ans | GN prépositionnel | CC de temps du verbe « ai vu »\nles portes qui me séparaient du monde | Groupe nominal (GN + subordonnée relative) | Sujet du verbe « se rouvrir » (proposition subordonnée infinitive)\nsur la terrasse | GN prépositionnel | CC de lieu du verbe « suis monté »\npour regarder les nuages | Groupe infinitif prépositionnel | CC de but du verbe « suis monté »\nmoins beaux | Adjectif qualificatif (au comparatif) | Attribut du sujet « ils »\n\n**Réponse attendue (formulation jury) :** « *À seize ans* → GN prépositionnel, CC de temps de *ai vu* ; *les portes qui me séparaient du monde* → GN (avec relative), sujet de l'infinitif *se rouvrir* (proposition subordonnée infinitive COD de *ai vu*) ; *sur la terrasse* → GN prépositionnel, CC de lieu de *suis monté* ; *pour regarder les nuages* → groupe infinitif prépositionnel, CC de but de *suis monté* ; *moins beaux* → adjectif qualificatif (comparatif), attribut du sujet *ils*. »",
    explication: [],
  },
];
