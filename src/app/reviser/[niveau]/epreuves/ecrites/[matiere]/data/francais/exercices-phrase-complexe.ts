// Banque d'exercices OUVERTS, notion 05 « La phrase complexe et sa ponctuation ».
//
// Migration de structure : exercices repris depuis l'onglet « Application » v1,
// sans réécriture pédagogique. Le fond sera repris dans un chantier ultérieur.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_PHRASE_COMPLEXE: TrainerExercice[] = [
  // TODO refonte exo
  {
    id: "fr-05-exo-01",
    notion: "fr-05",
    savoirFaire: ["juxtaposition-coordination-subordination","relative","conjonctive","circonstancielle"],
    difficulte: 1,
    question: "Pour chaque phrase, dites si elle est simple ou complexe. Justifiez en repérant les verbes conjugués et les éventuelles formes non conjuguées à sujet propre :\na) « Elle se hâtait, les yeux baissés, pressée d'atteindre sa maison. »   b) « Ma mère regardait les enfants jouer dans le jardin. »   c) « On écrit parce qu'on cherche à saisir le réel. »   d) « Le rideau levé, le spectacle commença. »",
    reponseType: "a) **Explication :** un seul verbe conjugué (« se hâtait »), mais « les yeux baissés » a le sujet propre « les yeux » : il forme une proposition. « pressée d'atteindre » garde le sujet « elle » : ce n'est pas une proposition.\n\nb) **Explication :** 1 verbe conjugué (« regardait ») + « jouer » (infinitif à sujet propre « les enfants ») : une subordonnée infinitive.\n\nc) **Explication :** 2 verbes conjugués (« écrit », « cherche »), donc 2 propositions. « saisir » est un infinitif, il ne compte pas.\n\nd) **Explication :** 1 verbe conjugué (« commença ») + « levé » (participe à sujet propre « le rideau ») : une subordonnée participiale.\n\n**Réponse attendue (formulation jury) :** « Les quatre phrases sont **complexes** : a) une principale et une subordonnée participiale (“les yeux baissés”) ; b) une principale et une subordonnée infinitive ; c) deux propositions reliées par subordination ; d) une principale et une subordonnée participiale. »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-05-exo-02",
    notion: "fr-05",
    savoirFaire: ["juxtaposition-coordination-subordination","relative","conjonctive","circonstancielle"],
    difficulte: 1,
    question: "Identifiez la famille de chaque subordonnée :\na) « les portes <u>qui me séparaient du monde</u> »   b) « Je sais <u>qu'il viendra</u>. »   c) « On écrit <u>parce qu'on ne sait pas</u>. »   d) « Je me demande <u>s'il viendra</u>. »   e) « regardait <u>les enfants jouer</u> »   f) « <u>Le rideau levé</u>, le spectacle commença. »",
    reponseType: "a) **Explication :** antécédent nominal « portes » juste avant « qui » → relative.\n\nb) **Explication :** « que » sans antécédent, non déplaçable → complétive, COD de « sais ».\n\nc) **Explication :** « parce que » introduit une proposition supprimable et déplaçable → circonstancielle de cause.\n\nd) **Explication :** « si » dépend du verbe de questionnement « me demande », sans antécédent → interrogative indirecte.\n\ne) **Explication :** verbe de perception « regardait » + sujet propre « les enfants » → infinitive.\n\nf) **Explication :** participe « levé » + sujet propre « le rideau » → participiale.\n\n**Réponse attendue (formulation jury) :** « a) subordonnée **relative**, épithète de “portes” ; b) subordonnée **complétive**, COD de “sais” ; c) subordonnée **circonstancielle de cause** ; d) subordonnée **interrogative indirecte** totale, COD de “me demande” ; e) subordonnée **infinitive**, COD de “regardait” ; f) subordonnée **participiale**, CC de temps. »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-05-exo-03",
    notion: "fr-05",
    savoirFaire: ["juxtaposition-coordination-subordination","relative","circonstancielle"],
    difficulte: 1,
    question: "Identifiez la nature : infinitif · participe présent · gérondif · participe passé · verbe conjugué.\na) « Une femme passa, <u>tenant</u> son enfant. »   b) « les yeux <u>baissés</u> »   c) « Il rentra <u>en chantant</u>. »   d) « <u>Vivre</u>, sans l'écriture, me va mal. »   e) « Ma mère <u>regardait</u> les enfants jouer. »",
    reponseType: "a) **Explication :** terminaison -ant, sans « en », forme invariable → participe présent.\n\nb) **Explication :** accord masculin pluriel avec « yeux » (-és) → participe passé.\n\nc) **Explication :** « en » + forme en -ant → gérondif.\n\nd) **Explication :** forme en -re invariable placée en tête, commande le verbe « va » → infinitif sujet.\n\ne) **Explication :** forme conjuguée à l'imparfait (porte les marques de personne et de temps) → verbe conjugué.\n\n**Réponse attendue (formulation jury) :** « a) “tenant” = participe présent, épithète détachée ; b) “baissés” = participe passé ; c) “en chantant” = gérondif, CC de manière ; d) “Vivre” = infinitif, sujet de “va” ; e) “regardait” = verbe conjugué (imparfait), noyau de la proposition principale. »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-05-exo-04",
    notion: "fr-05",
    savoirFaire: ["relative","circonstancielle"],
    difficulte: 1,
    question: "Appliquez les deux conditions (verbe de perception ou factitif + sujet propre distinct) :\na) « J'entends les oiseaux chanter. »   b) « Il est monté pour regarder les nuages. »   c) « Il sentait le vide de sa vie s'étendre. »   d) « Elle veut partir tôt. »",
    reponseType: "a) **Explication :** verbe de perception « entends » + sujet propre « les oiseaux » (distinct de « je ») : les deux conditions sont réunies.\n\nb) **Explication :** « monter » n'est pas un verbe de perception, et le sujet de « regarder » reste « il » : aucune condition remplie.\n\nc) **Explication :** verbe de perception « sentait » + sujet propre « le vide de sa vie » : les deux conditions sont réunies.\n\nd) **Explication :** « vouloir » n'est pas un verbe de perception, et le sujet de « partir » reste « elle ».\n\n**Réponse attendue (formulation jury) :** « a) **oui**, subordonnée infinitive, COD de “entends” ; b) **non**, groupe infinitif, CC de but de “est monté” ; c) **oui**, subordonnée infinitive, COD de “sentait” ; d) **non**, groupe infinitif, COD de “veut”. »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-05-exo-05",
    notion: "fr-05",
    savoirFaire: ["juxtaposition-coordination-subordination","relative","conjonctive","circonstancielle"],
    difficulte: 2,
    question: "Appliquez le critère du sujet propre :\na) « Elle passa, tenant son enfant. »   b) « Le rideau levé, le spectacle commença. »   c) « Épuisée, elle s'endormit. »   d) « Tout le monde étant parti, elle ferma la porte. »",
    reponseType: "a) **Explication :** sujet de « tenant » = « elle », identique à celui de « passa » → pas de proposition.\n\nb) **Explication :** sujet de « levé » = « le rideau », distinct de « le spectacle » → proposition.\n\nc) **Explication :** sujet de « Épuisée » = « elle », identique à celui de « s'endormit » → pas de proposition.\n\nd) **Explication :** sujet de « étant parti » = « tout le monde », distinct de « elle » → proposition.\n\n**Réponse attendue (formulation jury) :** « a) **épithète détachée** du sujet “elle” ; b) **subordonnée participiale**, CC de temps ; c) **épithète détachée** du sujet “elle” ; d) **subordonnée participiale**, CC de temps (nuance de cause possible). »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-05-exo-06",
    notion: "fr-05",
    savoirFaire: ["relative","conjonctive","circonstancielle"],
    difficulte: 2,
    question: "Distinguez et justifiez :\na) « Je me demande s'il viendra. »   b) « Si elle vient, je serai heureux. »   c) « Il ignore si tout est prêt. »",
    reponseType: "a) **Explication :** « si » dépend du verbe de questionnement « me demande » et ne peut pas se déplacer → « si » interrogatif.\n\nb) **Explication :** « si » introduit une condition supprimable et déplaçable (« Je serai heureux si elle vient ») → « si » conjonction de condition.\n\nc) **Explication :** « si » dépend du verbe de questionnement « ignore » → « si » interrogatif.\n\n**Réponse attendue (formulation jury) :** « a) subordonnée **interrogative indirecte** totale, COD de “me demande” ; b) subordonnée **circonstancielle de condition** ; c) subordonnée **interrogative indirecte** totale, COD de “ignore”. »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-05-exo-07",
    notion: "fr-05",
    savoirFaire: ["juxtaposition-coordination-subordination","relative","conjonctive","circonstancielle"],
    difficulte: 2,
    question: "Délimitez toutes les propositions par des crochets et nommez chacune :\na) « Je sais que le livre qu'il lit est passionnant. »   b) « Elle reste parce qu'elle ignore quand il rentrera. »",
    reponseType: "**Explication :** chaque phrase a 3 verbes conjugués → 3 propositions. En a), le « que » de « que le livre… » n'a pas d'antécédent (complétive), mais le « qu' » de « qu'il lit » a pour antécédent « livre » (relative). En b), « ignore » est un verbe de questionnement, donc « quand il rentrera » est interrogative indirecte (et non circonstancielle de temps).\n\na) **Réponse attendue :** [Je sais] principale ; [que le livre … est passionnant] complétive, COD de « sais » ; [qu'il lit] relative, épithète de « livre ».\n\nb) **Réponse attendue :** [Elle reste] principale ; [parce qu'elle ignore …] circonstancielle de cause ; [quand il rentrera] interrogative indirecte, COD de « ignore ».",
    explication: [
      { type: "note", text: "⚠️ Une subordonnée peut en contenir une autre (enchâssement) : on délimite de la plus large à la plus enchâssée." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-05-exo-08",
    notion: "fr-05",
    savoirFaire: ["juxtaposition-coordination-subordination","relative","conjonctive","circonstancielle"],
    difficulte: 2,
    enonce: "« Une femme passa, tenant par la main un petit garçon. Elle se hâtait, les yeux baissés, pressée d'atteindre sa maison. »",
    question: "Donnez la nature et la fonction de chaque forme non conjuguée, et dites si elle crée une proposition.",
    reponseType: "**Explication :** on teste le sujet de chaque forme. Seul « les yeux baissés » a un sujet propre (« les yeux » ≠ « elle ») : c'est la seule forme qui crée une proposition. Les autres gardent le sujet de la phrase, ce sont donc des épithètes détachées ou des compléments.\n\n**Réponse attendue (formulation jury) :**\n\nForme | Nature | Fonction | Crée une proposition ?\n--- | --- | --- | ---\ntenant | Participe présent | Épithète détachée de « femme » | Non (même sujet)\nbaissés | Participe passé | Noyau de la participiale « les yeux baissés », CC de manière | Oui (sujet propre : « les yeux »)\npressée | Participe passé | Épithète détachée du sujet « elle » | Non (même sujet)\nd'atteindre | Groupe infinitif prépositionnel | Complément de l'adjectif « pressée » | Non (même sujet, pas de verbe de perception)",
    explication: [
      { type: "note", text: "La première phrase est simple. La seconde est complexe : elle contient une principale et la participiale « les yeux baissés »." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-05-exo-09",
    notion: "fr-05",
    savoirFaire: ["juxtaposition-coordination-subordination","relative"],
    difficulte: 3,
    enonce: "« Ma mère, dont le regard ne vieillissait pas, regardait les enfants jouer dans le jardin. »",
    question: "Délimitez et nommez toutes les propositions.",
    reponseType: "**Explication :** 3 verbes conjugués ? Non : « regardait » et « vieillissait » sont conjugués (« jouer » est un infinitif). La relative « dont… » est encadrée de virgules → explicative. « les enfants jouer » a le sujet propre « les enfants » après un verbe de perception → infinitive.\n\n**Réponse attendue (formulation jury) :**\n\nProposition | Nature et fonction\n--- | ---\nMa mère … regardait | Proposition principale\ndont le regard ne vieillissait pas | Subordonnée relative explicative, apposée au groupe nominal « Ma mère »\nles enfants jouer dans le jardin | Subordonnée infinitive, COD de « regardait » (sujet propre : « les enfants »)",
    explication: [
      { type: "note", text: "💡 La fonction de « dont » (CDN du nom « regard ») se trouve par dépronominalisation : voir [Les fonctions syntaxiques](fiche:fonctions-syntaxiques) et [Le groupe nominal et ses expansions](fiche:groupe-nominal-expansions)." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-05-exo-10",
    notion: "fr-05",
    savoirFaire: ["juxtaposition-coordination-subordination","relative","conjonctive","circonstancielle"],
    difficulte: 3,
    enonce: "« On écrit parce qu'on ne sait par quel autre biais attraper le réel. »\n*(Lola Lafon, Quand tu écouteras cette chanson, 2023)*",
    question: "Délimitez et nommez toutes les propositions, et analysez chaque subordonnée.",
    reponseType: "**Explication :** « écrit » et « sait » sont les verbes conjugués. « parce que » introduit une cause (supprimable et déplaçable). « par quel biais » est un groupe interrogatif après le verbe de savoir « sait » : interrogative indirecte partielle, construite ici autour de l'infinitif « attraper ».\n\n**Réponse attendue (formulation jury) :**\n\nProposition | Nature et fonction\n--- | ---\nOn écrit | Proposition principale\nparce qu'on ne sait … | Subordonnée conjonctive, CC de cause (supprimable et déplaçable)\npar quel autre biais attraper le réel | Subordonnée interrogative indirecte partielle, COD de « sait »",
    explication: [
      { type: "note", text: "Ici, l'interrogative indirecte est construite autour de l'infinitif « attraper ». Elle ne comporte pas de verbe conjugué, mais elle dépend du verbe « sait »." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-05-exo-11",
    notion: "fr-05",
    savoirFaire: ["juxtaposition-coordination-subordination","relative","conjonctive"],
    difficulte: 3,
    enonce: "« Elle regardait les eaux du fleuve avec une attention que rien ne semblait pouvoir distraire. »",
    question: "Délimitez et nommez toutes les propositions.",
    reponseType: "**Explication :** deux verbes conjugués (« regardait », « semblait » ; « pouvoir » et « distraire » sont des infinitifs). « que » a pour antécédent « attention » → relative. Sans virgule, elle restreint le nom → déterminative.\n\n**Réponse attendue (formulation jury) :**\n\nProposition | Nature et fonction\n--- | ---\nElle regardait les eaux du fleuve avec une attention | Proposition principale\nque rien ne semblait pouvoir distraire | Subordonnée relative déterminative, épithète de « attention »",
    explication: [
      { type: "note", text: "💡 « que » est ici un pronom relatif (antécédent « attention ») ; sa fonction (COD de « distraire ») relève de [Les fonctions syntaxiques](fiche:fonctions-syntaxiques)." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-05-exo-12",
    notion: "fr-05",
    savoirFaire: ["juxtaposition-coordination-subordination","relative","conjonctive","circonstancielle"],
    difficulte: 3,
    enonce: "« À seize ans, j'ai vu se rouvrir les portes qui me séparaient du monde : je suis monté sur la terrasse du palais pour regarder les nuages, mais ils étaient moins beaux que ceux de tes crépuscules. »\n*(Marguerite Yourcenar, « Comment Wang-Fô fut sauvé », Nouvelles orientales)*",
    question: "Délimitez et donnez la nature des différentes propositions.",
    reponseType: "**Explication :** verbes conjugués : « ai vu », « séparaient », « suis monté », « étaient ». « ai vu » est un verbe de perception et « les portes » est le sujet propre de l'infinitif « se rouvrir » → infinitive. Les deux-points puis « mais » articulent ensuite deux indépendantes (juxtaposition puis coordination). Attention : « pour regarder » garde le sujet « je » → groupe infinitif, pas une infinitive.\n\n**Réponse attendue (formulation jury) :**\n\nProposition | Nature et fonction\n--- | ---\nÀ seize ans, j'ai vu | Proposition principale\nse rouvrir les portes… | Subordonnée infinitive, COD de « ai vu » (sujet propre : « les portes »)\nqui me séparaient du monde | Subordonnée relative déterminative, épithète de « portes »\nje suis monté sur la terrasse du palais pour regarder les nuages | Proposition indépendante, juxtaposée à la première partie de la phrase\nmais ils étaient moins beaux que ceux de tes crépuscules | Proposition indépendante, coordonnée à la précédente par « mais »",
    explication: [
      { type: "note", text: "💡 « pour regarder les nuages » est un groupe infinitif (CC de but), pas une subordonnée infinitive : même sujet, pas de verbe de perception." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-05-exo-13",
    notion: "fr-05",
    savoirFaire: ["relative","conjonctive","circonstancielle"],
    difficulte: 3,
    enonce: "« Quand la pluie cessa, les enfants sortirent ; la cour, silencieuse jusque-là, se remplit de cris. »",
    question: "Justifiez la virgule après « cessa », le point-virgule, puis les deux virgules qui encadrent « silencieuse jusque-là ».",
    reponseType: "a) **Explication :** « Quand la pluie cessa » est une subordonnée circonstancielle de temps placée avant la principale ; la virgule signale cette antéposition.\n\nb) **Explication :** « les enfants sortirent » et « la cour… se remplit de cris » sont deux indépendantes ; aucun mot de liaison ne les unit, mais le sens les rattache (conséquence).\n\nc) **Explication :** « silencieuse jusque-là » est supprimable et se rapporte au nom « cour » ; les deux virgules l'isolent comme épithète détachée.\n\n**Réponse attendue (formulation jury) :** « a) la virgule sépare une **subordonnée circonstancielle de temps antéposée** de la principale ; b) le point-virgule marque une **relation logique implicite** entre deux indépendantes (conséquence) ; c) les deux virgules marquent le **détachement d'une épithète** (“silencieuse jusque-là”) rapportée au nom “cour”. »",
    explication: [],
  },
];
