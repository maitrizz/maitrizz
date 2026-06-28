// Banque d'exercices OUVERTS, notion 04 « Le groupe verbal ».
//
// Migration de structure : exercices repris depuis l'onglet « Application » v1,
// sans réécriture pédagogique. Le fond sera repris dans un chantier ultérieur.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_GROUPE_VERBAL: TrainerExercice[] = [
  // TODO refonte exo
  {
    id: "fr-04-exo-01",
    notion: "fr-04",
    savoirFaire: ["verbe-noyau","complements-verbe","attributs","pronominalisation"],
    difficulte: 1,
    question: "Classez chaque verbe souligné : intransitif · transitif direct · transitif indirect · attributif.\na) « Elle <u>dort</u> paisiblement. »   b) « Il <u>mange</u> une pomme. »   c) « Elle <u>parle</u> à son ami. »   d) « Il <u>semble</u> fatigué. »   e) « Ils <u>arrivent</u> demain. »",
    reponseType: "a) **dort** → intransitif (« dort quoi ? » impossible)\n\nb) **mange** → transitif direct (« une pomme » = COD ; « Il la mange »)\n\nc) **parle** → transitif indirect (« à son ami » = COI ; « Elle lui parle »)\n\nd) **semble** → attributif (verbe d'état + attribut du sujet « fatigué »)\n\ne) **arrivent** → intransitif (« demain » = CC de temps, extérieur au GV)",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-04-exo-02",
    notion: "fr-04",
    savoirFaire: ["complements-verbe","attributs","pronominalisation"],
    difficulte: 1,
    question: "Vrai ou faux, justifiez en une phrase :\na) « obéir » est un verbe transitif direct.\nb) Dans « Il devient professeur », « professeur » est COD.\nc) « Il pleut » est un verbe impersonnel.\nd) « se souvenir » est un verbe essentiellement pronominal.",
    reponseType: "a) **Faux.** « obéir À » est transitif indirect : il se construit avec un COI.\n\nb) **Faux.** « devient » est un verbe d'état : « professeur » est attribut du sujet.\n\nc) **Vrai.** « il » est un sujet grammatical impersonnel, sans référent réel.\n\nd) **Vrai.** « souvenir » n'existe pas sans le pronom réfléchi : verbe essentiellement pronominal.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-04-exo-03",
    notion: "fr-04",
    savoirFaire: ["attributs"],
    difficulte: 1,
    question: "Identifiez le verbe d'état et l'attribut du sujet :\na) « Il paraît épuisé. »   b) « Elle reste debout. »   c) « Il passe pour un génie. »   d) « Cette solution s'avère efficace. »   e) « Il a l'air soucieux. »",
    reponseType: "Phrase | Verbe d'état | Attribut du sujet\n--- | --- | ---\nIl paraît épuisé | paraît | épuisé (adjectif qualificatif)\nElle reste debout | reste | debout (adverbe employé comme attribut)\nIl passe pour un génie | passe pour | un génie (GN)\nCette solution s'avère efficace | s'avère | efficace (adjectif qualificatif)\nIl a l'air soucieux | a l'air | soucieux (adjectif qualificatif)",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-04-exo-04",
    notion: "fr-04",
    savoirFaire: ["voix-passive","pronominalisation"],
    difficulte: 1,
    question: "Identifiez l'emploi principal : réfléchi réflexif · réfléchi réciproque · à sens passif · à sens actif.\na) « Elle <u>se regarde</u> dans le miroir. »   b) « Ils <u>se téléphonent</u> chaque soir. »   c) « Ce livre <u>se lit</u> facilement. »   d) « Il <u>s'enfuit</u> sans se retourner. »   e) « Elle <u>se méfie</u> de tout. »",
    reponseType: "a) **se regarde** → réfléchi réflexif (elle regarde elle-même)\n\nb) **se téléphonent** → réfléchi réciproque (l'un à l'autre)\n\nc) **se lit** → à sens passif (= est lu)\n\nd) **s'enfuit** → à sens actif ; verbe essentiellement pronominal\n\ne) **se méfie** → à sens actif ; verbe essentiellement pronominal",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-04-exo-05",
    notion: "fr-04",
    savoirFaire: ["verbe-noyau","complements-verbe","attributs","pronominalisation"],
    difficulte: 2,
    question: "Le verbe change de construction selon le sens. Identifiez le type de GV dans chaque emploi :\na) « Il monte l'escalier. » / « Il monte. »   b) « Il passe l'examen. » / « Il passe pour un génie. »   c) « Il sent la rose. » / « Cette fleur sent bon. »",
    reponseType: "a) « monte l'escalier » → transitif direct (« l'escalier » = COD) / « monte » → emploi intransitif\n\nb) « passe l'examen » → transitif direct (COD) / « passe pour un génie » → attributif (« passer pour » = verbe d'état)\n\nc) « sent la rose » → transitif direct (« la rose » = COD) / « sent bon » → emploi intransitif (« bon » est ici un adverbe)",
    explication: [
      { type: "note", text: "⚠️ Verbes à double emploi : monter, sortir, passer, sentir, tourner, rentrer, descendre changent de construction selon le contexte." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-04-exo-06",
    notion: "fr-04",
    savoirFaire: ["complements-verbe","attributs","voix-passive"],
    difficulte: 2,
    question: "Mettez à la voix passive si c'est possible ; sinon, expliquez pourquoi et donnez la construction.\na) « Elle lit un roman. »   b) « Il parle à son ami. »   c) « Il est médecin. »   d) « Il ressemble à son père. »",
    reponseType: "a) « Un roman est lu par elle. » : passif possible → transitif direct.\n\nb) Passif impossible → transitif indirect (un COI ne peut pas devenir sujet passif).\n\nc) Passif impossible → attributif (un attribut ne peut pas devenir sujet passif).\n\nd) Passif impossible → transitif indirect (« ressembler à »).",
    explication: [
      { type: "note", text: "💡 Lorsqu'un groupe devient sujet au passif, il était COD à l'actif. L'impossibilité du passif ne suffit toutefois pas, à elle seule, à exclure tout COD." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-04-exo-07",
    notion: "fr-04",
    savoirFaire: ["verbe-noyau","complements-verbe","attributs","pronominalisation","periphrases"],
    difficulte: 2,
    question: "Repérez l'erreur d'analyse et donnez la construction correcte :\na) « Il ressemble à son père. » → « à son père » = CC de comparaison\nb) « Elle se souvient de son enfance. » → « de son enfance » = CC de cause\nc) « Il devient médecin. » → « médecin » = COD\nd) « Elle fait travailler ses élèves. » → « ses élèves » = sujet de « travailler »",
    reponseType: "a) « à son père » n'est pas un CC : « ressembler à » est transitif indirect → COI (« Il lui ressemble »).\n\nb) « de son enfance » n'est pas un CC : « se souvenir de » est transitif indirect → COI (« Elle s'en souvient »).\n\nc) « médecin » n'est pas un COD : « devient » est un verbe d'état → attribut du sujet (passivation impossible).\n\nd) « fait travailler » forme le noyau verbal factitif. « ses élèves » désigne les agents qui réalisent l'action de travailler.",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-04-exo-08",
    notion: "fr-04",
    savoirFaire: ["pronominalisation"],
    difficulte: 2,
    question: "Pour chaque construction impersonnelle, identifiez le sujet grammatical et le complément du verbe impersonnel :\na) « Il arrive des problèmes. »   b) « Il faut travailler. »   c) « Il est possible qu'il vienne. »   d) « Il y a trois personnes. »",
    reponseType: "Phrase | Sujet grammatical | Complément du verbe impersonnel\n--- | --- | ---\nIl arrive des problèmes | il (impersonnel) | des problèmes\nIl faut travailler | il (impersonnel) | travailler (infinitif)\nIl est possible qu'il vienne | il (impersonnel) | qu'il vienne (proposition subordonnée conjonctive)\nIl y a trois personnes | il (impersonnel) | trois personnes",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-04-exo-09",
    notion: "fr-04",
    savoirFaire: ["complements-verbe"],
    difficulte: 2,
    question: "Dans chaque phrase, « se » est-il COD ou COI ? Justifiez par la construction du verbe.\na) « Elle se lave. »   b) « Elle se lave les mains. »   c) « Ils se regardent. »   d) « Ils se sourient. »",
    reponseType: "a) « laver quelqu'un » (COD) → « se » = COD (elle se lave elle-même).\n\nb) « laver les mains À elle » → « se » = COI, « les mains » = COD.\n\nc) « regarder quelqu'un » (COD) → « se » = COD (l'un regarde l'autre).\n\nd) « sourire À quelqu'un » (COI) → « se » = COI.",
    explication: [
      { type: "note", text: "💡 On ne déduit pas automatiquement la fonction de « se » de la présence d'un autre COD : on retrouve toujours la construction du verbe (laver quelqu'un, sourire à quelqu'un)." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-04-exo-10",
    notion: "fr-04",
    savoirFaire: ["verbe-noyau","complements-verbe","pronominalisation"],
    difficulte: 3,
    enonce: "« Une femme passa, tenant par la main un petit garçon. Elle se hâtait, pressée d'atteindre sa maison avant la nuit. »\n*(Émile Zola, Germinal, 1885)*",
    question: "Analysez la construction de chaque GV souligné : « <u>passa</u> » · « <u>se hâtait</u> » · « <u>atteindre</u> »",
    reponseType: "Verbe | Construction | Compléments essentiels\n--- | --- | ---\npassa | Intransitif | Aucun complément d'objet (« tenant… » est une épithète détachée)\nse hâtait | Pronominal (essentiellement pronominal) | Aucun COD : « se » est intégré au verbe\natteindre | Transitif direct (infinitif) | COD : « sa maison » (« atteindre quoi ? »)\n\n**Réponse attendue (formulation jury) :** « *passa* est intransitif (aucun complément d'objet) ; *se hâtait*, verbe essentiellement pronominal, est à la voix pronominale en emploi à sens actif ; *atteindre* est transitif direct, avec le COD *sa maison*. »",
    explication: [],
  },
  // TODO refonte exo
  {
    id: "fr-04-exo-11",
    notion: "fr-04",
    savoirFaire: ["verbe-noyau","complements-verbe","pronominalisation"],
    difficulte: 3,
    enonce: "« Il aimait les promenades solitaires, et il sentait le vide de sa vie s'étendre autour de lui. »\n*(Guy de Maupassant, Bel-Ami, 1885)*",
    question: "Analysez la construction de chaque GV souligné : « <u>aimait</u> » · « <u>sentait … s'étendre</u> »",
    reponseType: "Verbe | Construction | Compléments essentiels\n--- | --- | ---\naimait | Transitif direct | COD : « les promenades solitaires »\nsentait … s'étendre | Transitif direct + proposition infinitive | COD : « le vide de sa vie s'étendre autour de lui » = proposition subordonnée infinitive (verbe de perception + sujet propre)\n\n**Réponse attendue (formulation jury) :** « *aimait* est transitif direct (COD : *les promenades solitaires*) ; *sentait* est transitif direct, son COD étant la proposition subordonnée infinitive *le vide de sa vie s'étendre autour de lui*. »",
    explication: [
      { type: "note", text: "⚠️ Après un verbe de perception (voir, entendre, sentir, regarder) suivi d'un GN et d'un infinitif ayant son propre sujet, on a une proposition subordonnée infinitive COD." },
    ],
  },
  // TODO refonte exo
  {
    id: "fr-04-exo-12",
    notion: "fr-04",
    savoirFaire: ["verbe-noyau","complements-verbe","pronominalisation"],
    difficulte: 3,
    enonce: "« Ma mère regardait les enfants jouer dans le jardin. Elle souriait, muette, heureuse, et ne disait rien. »\n*(Colette, La Maison de Claudine, 1922)*",
    question: "Analysez la construction de chaque GV souligné : « <u>regardait … jouer</u> » · « <u>souriait</u> » · « <u>ne disait rien</u> »",
    reponseType: "Verbe | Construction | Compléments essentiels\n--- | --- | ---\nregardait … jouer | Transitif direct + proposition infinitive | COD : « les enfants jouer dans le jardin » = proposition subordonnée infinitive\nsouriait | Intransitif | Aucun complément d'objet (« muette, heureuse » = épithètes détachées du sujet)\nne disait rien | Transitif direct (à la forme négative) | COD : « rien » (pronom indéfini)\n\n**Réponse attendue (formulation jury) :** « *regardait* est transitif direct (COD : la proposition infinitive *les enfants jouer dans le jardin*) ; *souriait* est intransitif ; *ne disait rien* est transitif direct, avec le COD *rien*. »",
    explication: [],
  },
];
