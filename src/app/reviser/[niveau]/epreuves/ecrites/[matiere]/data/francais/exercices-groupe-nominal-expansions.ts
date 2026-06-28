// Banque d'exercices OUVERTS, notion 03 « Le groupe nominal et ses expansions ».
//
// Migration de structure : exercices repris depuis l'onglet « Application » v1,
// sans réécriture pédagogique. Le fond sera repris dans un chantier ultérieur.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_GROUPE_NOMINAL_EXPANSIONS: TrainerExercice[] = [
  // TODO refonte exo
  {
    id: "fr-03-exo-01",
    notion: "fr-03",
    savoirFaire: ["noyau-gn","cdn","relative"],
    difficulte: 1,
    question: "Délimitez le GN et identifiez son nom noyau :\na) « Le vieux chat roux de ma voisine dormait au soleil. »   b) « Une femme élégante portait un manteau en laine bleue. »   c) « Les enfants qui jouent dans la cour sont bruyants. »   d) « Son envie de partir l'envahissait. »",
    reponseType: "a) GN = « Le vieux chat roux de ma voisine » ; noyau = **chat**\n\nb) GN1 = « Une femme élégante » (noyau = **femme**) ; GN2 = « un manteau en laine bleue » (noyau = **manteau**)\n\nc) GN = « Les enfants qui jouent dans la cour » ; noyau = **enfants**\n\nd) GN = « Son envie de partir » ; noyau = **envie**",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-03-exo-02",
    notion: "fr-03",
    savoirFaire: ["noyau-gn","epithete","cdn","relative","apposition"],
    difficulte: 1,
    question: "Classez chaque expansion soulignée : épithète liée · épithète détachée · complément du nom · proposition relative.\na) « un <u>beau</u> jardin »   b) « la maison <u>de Pierre</u> »   c) « le livre <u>que je lisais</u> »   d) « <u>Épuisée</u>, elle s'endormit »   e) « les jours <u>passés</u> »   f) « l'envie <u>de voyager</u> »",
    reponseType: "a) **beau** → épithète liée (adjectif qualificatif, accolé avant le nom)\n\nb) **de Pierre** → complément du nom (GN prépositionnel, dans le GN, non mobile)\n\nc) **que je lisais** → proposition subordonnée relative (introduite par « que »)\n\nd) **Épuisée** → épithète détachée (adjectif séparé par une virgule, mobile)\n\ne) **passés** → épithète liée (participe passé employé comme adjectif)\n\nf) **de voyager** → complément du nom (groupe infinitif prépositionnel, complète « envie »)",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-03-exo-03",
    notion: "fr-03",
    savoirFaire: ["noyau-gn","cdn","relative"],
    difficulte: 1,
    question: "Relevez toutes les expansions du nom noyau et donnez leur forme grammaticale :\na) « le vieux chat roux de ma voisine qui ronronne »   b) « une envie soudaine de partir loin »   c) « les longues chevauchées silencieuses dans les bois »",
    reponseType: "a) Noyau : **chat**. « vieux » → épithète liée (avant) ; « roux » → épithète liée (après) ; « de ma voisine » → complément du nom ; « qui ronronne » → proposition subordonnée relative.\n\nb) Noyau : **envie**. « soudaine » → épithète liée ; « de partir loin » → complément du nom (groupe infinitif prépositionnel).\n\nc) Noyau : **chevauchées**. « longues » → épithète liée (avant) ; « silencieuses » → épithète liée (après) ; « dans les bois » → complément du nom ou CC de lieu selon la lecture (à justifier).",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-03-exo-04",
    notion: "fr-03",
    savoirFaire: ["cdn","relative","apposition"],
    difficulte: 2,
    question: "Vrai ou faux, justifiez en une phrase :\na) Dans « un homme courageux », « courageux » est épithète liée.\nb) « Les étudiants qui travaillent réussissent » contient une relative explicative.\nc) Dans « Les étudiants, qui travaillent, réussissent », la relative est entre virgules, donc déterminative.",
    reponseType: "a) **Vrai.** « courageux » est une épithète liée du nom « homme », placée après lui.\n\nb) **Faux.** Pas de virgule, donc relative déterminative (elle restreint : seulement ceux qui travaillent).\n\nc) **Faux.** Les virgules signalent une relative explicative, jamais déterminative.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-03-exo-05",
    notion: "fr-03",
    savoirFaire: ["cdn","relative"],
    difficulte: 2,
    question: "Le groupe est-il une expansion du nom (CDN) ou un complément circonstanciel (CC) ? Justifiez par la mobilité et la suppression.\na) « un acte <u>de bravoure</u> » vs « Il agit <u>avec bravoure</u>. »   b) « la gare <u>de Lyon</u> » vs « Elle revient <u>de Lyon</u>. »   c) « une maison <u>en pierre</u> » vs « Il travaille <u>en silence</u>. »",
    reponseType: "a) « de bravoure » → complément du nom « acte » (non mobile : « De bravoure un acte » impossible) / « avec bravoure » → CC de manière (mobile : « Avec bravoure, il agit »).\n\nb) « de Lyon » (gare) → complément du nom « gare » (identifie la gare, non mobile) / « de Lyon » (revient) → CC de lieu (mobile : « De Lyon, elle revient »).\n\nc) « en pierre » → complément du nom « maison » (matière, non mobile) / « en silence » → CC de manière (mobile : « En silence, il travaille »).",
    explication: [
      { type: "note", text: "⚠️ Même préposition possible des deux côtés : seul le test de mobilité tranche." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-03-exo-06",
    notion: "fr-03",
    savoirFaire: ["cdn","relative","apposition"],
    difficulte: 2,
    question: "Indiquez le type de relative (déterminative ou explicative) et justifiez par le test de suppression :\na) « Les élèves qui ont travaillé ont réussi. »   b) « Les élèves, qui avaient tous bien travaillé, ont réussi. »   c) « Le roman que j'ai lu était passionnant. »   d) « Madame Bovary, que Flaubert écrivit en 1857, est un chef-d'œuvre. »",
    reponseType: "a) **Déterminative** (pas de virgule). Suppression : « Les élèves ont réussi » change de sens (tous ? certains ?).\n\nb) **Explicative** (entre virgules). Suppression : « Les élèves ont réussi » garde le sens (tous).\n\nc) **Déterminative.** Suppression : « Le roman était passionnant » fait perdre l'identité du roman.\n\nd) **Explicative.** Suppression : « Madame Bovary est un chef-d'œuvre » garde le sens (l'œuvre est déjà identifiée).",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-03-exo-07",
    notion: "fr-03",
    savoirFaire: ["noyau-gn","epithete","relative"],
    difficulte: 3,
    enonce: "« Une femme passa, tenant par la main un petit garçon d'une dizaine d'années. Elle se hâtait, les yeux baissés, pressée d'atteindre sa maison avant la nuit. »\n*(Émile Zola, Germinal, 1885)*",
    question: "Pour chaque GN souligné, identifiez le noyau et analysez ses expansions : « <u>un petit garçon d'une dizaine d'années</u> » · « <u>les yeux baissés</u> » · « <u>sa maison</u> »",
    reponseType: "GN | Noyau | Expansions\n--- | --- | ---\nun petit garçon d'une dizaine d'années | garçon | « petit » → épithète liée · « d'une dizaine d'années » → complément du nom (GN prépositionnel)\nles yeux baissés | yeux | « baissés » → épithète liée (participe passé employé comme adjectif)\nsa maison | maison | Aucune expansion : GN minimal (déterminant + noyau)",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-03-exo-08",
    notion: "fr-03",
    savoirFaire: ["noyau-gn","cdn","relative"],
    difficulte: 3,
    enonce: "« Elle rêvait des contrées lointaines, des rivages lumineux, des palais de marbre où des fontaines jaillissaient sous des ciels toujours bleus. »\n*(Gustave Flaubert, Madame Bovary, 1857)*",
    question: "Analysez la structure interne de chaque GN souligné : « <u>des contrées lointaines</u> » · « <u>des palais de marbre où des fontaines jaillissaient</u> » · « <u>des ciels toujours bleus</u> »",
    reponseType: "GN | Noyau | Expansions\n--- | --- | ---\ndes contrées lointaines | contrées | « lointaines » → épithète liée (après le noyau)\ndes palais de marbre où des fontaines jaillissaient | palais | « de marbre » → complément du nom (matière) · « où des fontaines jaillissaient » → proposition subordonnée relative déterminative\ndes ciels toujours bleus | ciels | « bleus » → épithète liée · « toujours » → adverbe qui modifie l'épithète « bleus », à l'intérieur de l'expansion",
    explication: [
      { type: "note", text: "💡 « où » est un pronom relatif. Sa fonction dans la relative (CC de lieu) s'analyse par dépronominalisation : voir la [notion 2 (fonctions)](fiche:fonctions-syntaxiques)." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-03-exo-09",
    notion: "fr-03",
    savoirFaire: ["noyau-gn","cdn","relative"],
    difficulte: 3,
    enonce: "« Il aimait les promenades solitaires dans les bois, les longues chevauchées silencieuses, et les soirs d'automne, quand il rentrait seul. »\n*(Guy de Maupassant, Bel-Ami, 1885)*",
    question: "Analysez la structure interne de chaque GN souligné : « <u>les promenades solitaires dans les bois</u> » · « <u>les longues chevauchées silencieuses</u> » · « <u>les soirs d'automne</u> »",
    reponseType: "GN | Noyau | Expansions\n--- | --- | ---\nles promenades solitaires dans les bois | promenades | « solitaires » → épithète liée · « dans les bois » → complément du nom ou CC de lieu (les deux lectures sont défendables, à justifier)\nles longues chevauchées silencieuses | chevauchées | « longues » → épithète liée (avant) · « silencieuses » → épithète liée (après)\nles soirs d'automne | soirs | « d'automne » → complément du nom (GN prépositionnel, caractérise les soirs)",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-03-exo-10",
    notion: "fr-03",
    savoirFaire: ["noyau-gn","cdn","relative"],
    difficulte: 3,
    enonce: "« À seize ans, j'ai vu se rouvrir les portes qui me séparaient du monde, je suis monté sur la terrasse du palais pour regarder les nuages. »\n*(Marguerite Yourcenar, Comment Wang-Fô fut sauvé, Nouvelles orientales, 1963)*",
    question: "Analysez la structure interne de chaque GN souligné : « <u>les portes qui me séparaient du monde</u> » · « <u>la terrasse du palais</u> »",
    reponseType: "GN | Noyau | Expansions\n--- | --- | ---\nles portes qui me séparaient du monde | portes | « qui me séparaient du monde » → proposition subordonnée relative déterminative\nla terrasse du palais | terrasse | « du palais » → complément du nom (GN prépositionnel, identifie quelle terrasse)",
    explication: [
      { type: "note", text: "💡 « qui » est un pronom relatif ; sa fonction dans la relative (sujet de « séparaient ») s'analyse dans la [notion 2](fiche:fonctions-syntaxiques)." },
    ],
  },
];
