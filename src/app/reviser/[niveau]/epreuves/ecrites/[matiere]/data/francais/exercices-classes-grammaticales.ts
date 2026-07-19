// PROTOTYPE — Banque d'exercices OUVERTS, notion 01 « Classes grammaticales ».
//
// On rédige son analyse, puis on la compare au CORRIGÉ-MODÈLE. Un seul texte de
// corrigé : `reponseType` = LA réponse type CRPE, complète (nature + justification),
// telle qu'on l'écrirait le jour J. C'est suffisant ; PAS d'explication qui
// paraphrase derrière (anti-redondance, voir GABARIT_NOTION.md §3).
// `explication` ne sert qu'à ajouter un VRAI extra (un piège, « ce que le
// correcteur attend ») là où il en faut un, sinon elle reste vide.
//
// Difficulté croissante (1 Fondamentaux → 2 Concours → 3 Expert).
// Savoir-faire (multi-tag) : determinants · adv-adj · cameleons · pronoms · infinitif · invariables.
//
// TYPES D'EXERCICES (inspirés du Grevisse exercices) : on travaille la notion sous
// plusieurs angles, pas seulement « donnez la nature » — identifier · repérer dans
// un texte · classer · distinguer un mot-caméléon · PROUVER par une manipulation
// (le cœur : on ne nomme pas, on prouve par un test). À CURER plus tard : remplacer
// certaines phrases par de vraies citations d'auteurs SOURCÉES (auteur + œuvre).

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_CLASSES_GRAMMATICALES: TrainerExercice[] = [
  // ════════════════════════════════════════════════════════════════════════
  // Niveau 1 · Fondamentaux (un mot, un test)
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "fr-01-exo-ses",
    notion: "fr-01",
    savoirFaire: ["determinants"],
    difficulte: 1,
    enonce: "Il a rangé <u>ses</u> livres.",
    question: "Donnez la nature du mot souligné.",
    reponseType: "« *ses* » est un **déterminant possessif** : il introduit le nom *livres* et s'accorde avec lui (sa / ses).",
    explication: [],
  },
  {
    id: "fr-01-exo-vite",
    notion: "fr-01",
    savoirFaire: ["adv-adj"],
    difficulte: 1,
    enonce: "Elle court <u>vite</u>.",
    question: "Donnez la nature du mot souligné.",
    reponseType: "« *vite* » est un **adverbe** (de manière) : invariable (« elles courent vite »), il modifie le verbe *court*.",
    explication: [],
  },
  {
    id: "fr-01-exo-avec",
    notion: "fr-01",
    savoirFaire: ["invariables"],
    difficulte: 1,
    enonce: "Il joue <u>avec</u> son frère.",
    question: "Donnez la nature du mot souligné.",
    reponseType: "« *avec* » est une **préposition** : invariable, elle introduit le GN *son frère*.",
    explication: [],
  },
  {
    id: "fr-01-exo-chanter",
    notion: "fr-01",
    savoirFaire: ["infinitif"],
    difficulte: 1,
    enonce: "Elle aime <u>chanter</u>.",
    question: "Donnez la nature du mot souligné.",
    reponseType: "« *chanter* » est un **verbe à l'infinitif** : complément de *aime*, il garde sa nature de verbe (aucun déterminant ne le précède).",
    explication: [],
  },
  {
    // Type « classer » — Grevisse
    id: "fr-01-exo-classer",
    notion: "fr-01",
    savoirFaire: ["adv-adj", "invariables"],
    difficulte: 1,
    enonce: "chien · vite · sous · table · grand · et",
    question: "Classez ces six mots en deux colonnes : variables (qui peuvent s'accorder) et invariables.",
    reponseType:
      "**Variables** : *chien*, *table* (noms), *grand* (adjectif). **Invariables** : *vite* (adverbe), *sous* (préposition), *et* (conjonction).",
    explication: [],
  },

  // ════════════════════════════════════════════════════════════════════════
  // Niveau 2 · Concours (phrases complètes, format épreuve)
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "fr-01-exo-matin",
    notion: "fr-01",
    savoirFaire: ["determinants", "adv-adj"],
    difficulte: 2,
    enonce: "<u>Chaque</u> matin, le <u>vieux</u> facteur passait <u>lentement</u>.",
    question: "Donnez la nature de chacun des trois mots soulignés.",
    reponseType:
      "*Chaque* est un **déterminant indéfini** (il introduit le nom *matin*) ; *vieux* un **adjectif** (accordé avec *facteur*, qu'il qualifie) ; *lentement* un **adverbe** de manière (invariable, il modifie *passait*).",
    explication: [],
  },
  {
    id: "fr-01-exo-nuit",
    notion: "fr-01",
    savoirFaire: ["cameleons", "invariables", "adv-adj"],
    difficulte: 2,
    enonce: "<u>Comme</u> la nuit tombait, les enfants, <u>épuisés</u>, rentrèrent <u>lentement</u>.",
    question: "Analysez la nature des trois mots soulignés et justifiez.",
    reponseType:
      "*Comme* est une **conjonction de subordination** (elle introduit la proposition *la nuit tombait*) ; *épuisés* un **adjectif** (accordé avec *enfants*) ; *lentement* un **adverbe** de manière (invariable, il modifie *rentrèrent*).",
    explication: [],
  },
  {
    id: "fr-01-exo-tout-double",
    notion: "fr-01",
    savoirFaire: ["cameleons", "determinants", "pronoms"],
    difficulte: 2,
    enonce: "<u>Tout</u> le monde s'était tu, et <u>tout</u> paraissait calme.",
    question: "Donnez la nature des deux occurrences de « tout ».",
    reponseType:
      "Le premier *Tout* est un **déterminant indéfini** (il précède le nom *monde*) ; le second *tout* un **pronom indéfini** (il ne précède aucun nom, il en tient lieu, sujet de *paraissait*).",
    explication: [],
  },
  {
    id: "fr-01-exo-lire",
    notion: "fr-01",
    savoirFaire: ["adv-adj", "infinitif"],
    difficulte: 2,
    enonce: "Il aimait <u>tant</u> <u>lire</u> qu'il en oubliait l'heure.",
    question: "Donnez la nature des deux mots soulignés et justifiez.",
    reponseType:
      "*tant* est un **adverbe** d'intensité (invariable, « aimait tant… que ») ; *lire* un **verbe à l'infinitif** (complément de *aimait*, il garde sa nature de verbe).",
    explication: [],
  },
  {
    id: "fr-01-exo-celui-qui",
    notion: "fr-01",
    savoirFaire: ["pronoms"],
    difficulte: 2,
    enonce: "<u>Celui</u> <u>qui</u> parle, je <u>le</u> connais bien.",
    question: "Donnez la nature des trois mots soulignés et justifiez.",
    reponseType:
      "*Celui* est un **pronom démonstratif** ; *qui* un **pronom relatif** (antécédent *celui*, sujet de *parle*) ; *le* un **pronom personnel** (devant le verbe, COD de *connais*, ce n'est pas un article).",
    explication: [],
  },
  {
    id: "fr-01-exo-prepositions",
    notion: "fr-01",
    savoirFaire: ["invariables"],
    difficulte: 2,
    enonce: "Il avança <u>sans</u> bruit, <u>mais</u> s'arrêta <u>devant</u> la porte.",
    question: "Donnez la nature des trois mots soulignés et justifiez.",
    reponseType:
      "*sans* est une **préposition** (elle introduit le GN *bruit*) ; *mais* une **conjonction de coordination** (elle relie les deux propositions) ; *devant* une **préposition** (elle introduit le GN *la porte*).",
    explication: [],
  },
  {
    // Type « repérer dans un texte » — Grevisse
    id: "fr-01-exo-relever-det",
    notion: "fr-01",
    savoirFaire: ["determinants"],
    difficulte: 2,
    enonce: "Chaque matin, ces enfants rangent leurs affaires dans leur casier.",
    question: "Relevez tous les déterminants de cette phrase.",
    reponseType:
      "Quatre déterminants : *Chaque* (indéfini), *ces* (démonstratif), *leurs* et *leur* (possessifs).",
    explication: [
      { type: "note", text: "Piège : « leur » devant « casier » est un déterminant possessif (il introduit le nom), à ne pas confondre avec le pronom « leur » (invariable, devant un verbe)." },
    ],
  },
  {
    // Type « repérer dans un texte » — Grevisse
    id: "fr-01-exo-relever-adv",
    notion: "fr-01",
    savoirFaire: ["adv-adj"],
    difficulte: 2,
    enonce: "Il travaille toujours sérieusement, mais aujourd'hui il est très fatigué.",
    question: "Relevez tous les adverbes de cette phrase.",
    reponseType:
      "Quatre adverbes : *toujours*, *sérieusement*, *aujourd'hui*, *très*. (*mais* est une conjonction de coordination, pas un adverbe.)",
    explication: [],
  },
  {
    // Type « prouver par une manipulation » — le cœur du Grevisse
    id: "fr-01-exo-prouver-bon",
    notion: "fr-01",
    savoirFaire: ["adv-adj"],
    difficulte: 2,
    enonce: "Ces fleurs sentent bon.",
    question: "Prouvez, par une manipulation, que « bon » est ici un adverbe et non un adjectif.",
    reponseType:
      "Test de l'accord : on essaie de l'accorder avec « fleurs » → « elles sentent *bon* », jamais « *bonnes* ». L'accord est impossible : *bon* est invariable et modifie le verbe « sentent » : c'est donc un **adverbe**.",
    explication: [],
  },

  // ════════════════════════════════════════════════════════════════════════
  // Niveau 3 · Expert (au-delà de l'épreuve)
  // ════════════════════════════════════════════════════════════════════════
  {
    id: "fr-01-exp-que-trois",
    notion: "fr-01",
    savoirFaire: ["cameleons", "pronoms", "invariables"],
    difficulte: 3,
    enonce: "Je sais <u>que</u> le livre <u>que</u> tu veux coûte plus <u>que</u> prévu.",
    question: "Donnez la nature des trois « que » et justifiez chacun.",
    reponseType:
      "Le premier *que* est une **conjonction de subordination** (complétive, COD de *sais*) ; le deuxième un **pronom relatif** (antécédent *le livre*) ; le troisième une **conjonction de subordination** comparative (*plus… que*).",
    explication: [
      { type: "note", text: "Le correcteur attend que vous traitiez les trois séparément : introduit une complétive ? remplace un antécédent ? introduit le second terme d'une comparaison ?" },
    ],
  },
  {
    id: "fr-01-exp-dense",
    notion: "fr-01",
    savoirFaire: ["cameleons", "invariables", "pronoms", "adv-adj"],
    difficulte: 3,
    enonce: "<u>Comme</u> la nuit venait, <u>tout</u> se taisait, et lui, <u>pourtant</u> brave, tremblait.",
    question: "Analysez la nature des trois mots soulignés et justifiez.",
    reponseType:
      "*Comme* est une **conjonction de subordination** ; *tout* un **pronom indéfini** (sujet de *se taisait*, il ne détermine aucun nom) ; *pourtant* un **adverbe** de liaison (invariable, il marque l'opposition).",
    explication: [],
  },
  {
    id: "fr-01-exp-du-double",
    notion: "fr-01",
    savoirFaire: ["determinants"],
    difficulte: 3,
    enonce: "Il a versé <u>du</u> lait, puis a parlé longuement <u>du</u> voisin.",
    question: "Les deux « du » ont-ils la même nature ? Justifiez.",
    reponseType:
      "Non. Le premier *du* est un **article partitif** (une quantité non comptée de *lait*) ; le second un **article défini contracté** (mis pour *de le* : « parler de le voisin »).",
    explication: [
      { type: "note", text: "Le test qui tranche : peut-on remplacer par « de le » ? Oui pour le second (contracté), non pour le premier (partitif)." },
    ],
  },
  {
    id: "fr-01-exp-devoir",
    notion: "fr-01",
    savoirFaire: ["infinitif", "determinants"],
    difficulte: 3,
    enonce: "Le <u>devoir</u> accompli, il put enfin <u>dormir</u>.",
    question: "Les deux mots soulignés sortent du même verbe. Ont-ils la même nature ?",
    reponseType:
      "Non. *devoir*, précédé du déterminant *Le*, est lexicalisé en **nom commun** ; *dormir*, complément de *put* et sans déterminant devant lui, reste un **verbe à l'infinitif**.",
    explication: [
      { type: "note", text: "Ce que le correcteur attend : montrer que c'est le déterminant (et non la fonction) qui nominalise l'infinitif, comme « le pouvoir », « le rire », « un être »." },
    ],
  },
  {
    // Type « prouver par une manipulation » — le cœur du Grevisse
    id: "fr-01-exp-prouver-le",
    notion: "fr-01",
    savoirFaire: ["pronoms"],
    difficulte: 3,
    enonce: "Je le connais depuis l'enfance.",
    question: "Prouvez, par une manipulation, que « le » n'est pas un article mais un pronom.",
    reponseType:
      "Test de remplacement : *le* tient lieu d'un GN (« je connais *cet homme* » → « je *le* connais ») et se place devant le verbe, pas devant un nom. Un article précéderait un nom (« *le* garçon »). Ici *le* remplace : c'est un **pronom personnel** (COD de « connais »).",
    explication: [],
  },
];
