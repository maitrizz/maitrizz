// Banque d'exercices OUVERTS, notion 11 « Les accords dans le GN et le GV ».
//
// CHANTIER 2 (refonte façon Grévisse, DOCTRINE_EXERCICES.md) : exercices réécrits.
// 3 niveaux : Fondamentaux · Concours (la cible) · Expert (au-delà : « plus d'un »,
// valeur ordinale de vingt/cent, coordination « ou »/« ni », portée de l'adjectif,
// demi/nu selon la position).
// Périmètre : accord nom/adjectif (GN) et accord sujet-verbe (GV), cas difficiles.
// L'accord du PARTICIPE PASSÉ relève de la notion 12.
// 5 savoir-faire : accords dans le GN · sujet-verbe · sujet inversé/éloigné
// · collectifs/coordination · accords complexes.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_ACCORDS_GN_GV: TrainerExercice[] = [
  // ————————————————————————— Fondamentaux —————————————————————————
  {
    id: "fr-11-exo-f1",
    notion: "fr-11",
    savoirFaire: ["accords-gn"],
    difficulte: 1,
    question:
      "Accordez l'adjectif entre parenthèses et nommez le donneur d'accord :\na) « des fleurs (blanc) »\nb) « une décision (important) »",
    reponseType:
      "a) « des fleurs **blanches** » (donneur : « fleurs », féminin pluriel).\nb) « une décision **importante** » (donneur : « décision », féminin singulier).\nLe nom noyau donne son genre et son nombre à l'adjectif épithète.",
    explication: [],
  },
  {
    id: "fr-11-exo-f2",
    notion: "fr-11",
    savoirFaire: ["accords-gn", "sujet-verbe"],
    difficulte: 1,
    question:
      "Accordez l'attribut du sujet :\na) « Ces histoires sont (amusant). »\nb) « Elles semblent (épuisé). »",
    reponseType:
      "a) « **amusantes** » (attribut du sujet « histoires », fém. plur., via « sont »).\nb) « **épuisées** » (attribut du sujet « elles »).\nL'attribut du sujet s'accorde avec le sujet par l'intermédiaire du verbe d'état.",
    explication: [],
  },
  {
    id: "fr-11-exo-f3",
    notion: "fr-11",
    savoirFaire: ["sujet-verbe"],
    difficulte: 1,
    question:
      "Accordez le verbe :\na) « Les enfants (jouer, présent) dehors. »\nb) « Toi et moi (partir, futur). »",
    reponseType:
      "a) « **jouent** » (3e personne du pluriel).\nb) « **partirons** » (toi + moi = nous, 1re personne du pluriel).\nLe verbe s'accorde en personne et en nombre avec son sujet.",
    explication: [],
  },
  {
    id: "fr-11-exo-f4",
    notion: "fr-11",
    savoirFaire: ["sujet-inverse-eloigne"],
    difficulte: 1,
    question:
      "Accordez le verbe avec son vrai sujet :\na) « Au loin (briller, imparfait) les étoiles. »\nb) « Que (vouloir, présent) ces gens ? »",
    reponseType:
      "a) « **brillaient** » (sujet postposé « les étoiles », pluriel).\nb) « **veulent** » (sujet « ces gens », pluriel).\nIl faut repérer le sujet même lorsqu'il est inversé.",
    explication: [],
  },
  {
    id: "fr-11-exo-f5",
    notion: "fr-11",
    savoirFaire: ["accords-complexes"],
    difficulte: 1,
    question:
      "Accordez (ou non) l'adjectif de couleur :\na) « des robes (vert) »\nb) « des robes (marron) »",
    reponseType:
      "a) « des robes **vertes** » (adjectif de couleur simple : il s'accorde).\nb) « des robes **marron** » (invariable : nom employé comme couleur, comme *orange*, *cerise*).\nLes noms devenus adjectifs de couleur restent invariables.",
    explication: [],
  },
  {
    id: "fr-11-exo-f6",
    notion: "fr-11",
    savoirFaire: ["collectifs-coordination"],
    difficulte: 1,
    question:
      "Accordez le verbe :\na) « La plupart des élèves (réussir, passé composé). »\nb) « Beaucoup de gens (penser, présent) cela. »",
    reponseType:
      "a) « La plupart des élèves **ont réussi** » : avec « la plupart », l'accord se fait avec le complément au pluriel.\nb) « Beaucoup de gens **pensent** » : même règle (accord avec le complément « gens »).\nLes adverbes de quantité (la plupart, beaucoup, peu…) commandent l'accord avec leur complément.",
    explication: [],
  },

  // ————————————————————————— Concours (la cible) —————————————————————————
  {
    id: "fr-11-exo-c1",
    notion: "fr-11",
    savoirFaire: ["sujet-verbe", "sujet-inverse-eloigne"],
    difficulte: 2,
    question:
      "**Repérez et corrigez** l'erreur d'accord en identifiant le vrai sujet :\n« La liste des participants sont affichée. »",
    reponseType:
      "Erreur d'**attraction** (accord par proximité avec « participants »). Le sujet réel est « **La liste** » (singulier) : « La liste des participants **est affichée**. »\nManipulation : supprimer le complément du nom (« La liste… est affichée ») fait apparaître le noyau sujet.",
    explication: [],
  },
  {
    id: "fr-11-exo-c2",
    notion: "fr-11",
    savoirFaire: ["collectifs-coordination", "accords-gn"],
    difficulte: 2,
    question:
      "Accordez :\na) « Le chien et le chat (dormir, présent). »\nb) « un manteau et un pantalon (noir) »\nc) « une jupe et une veste (élégant) »",
    reponseType:
      "a) « **dorment** » (deux sujets coordonnés → pluriel).\nb) « **noirs** » (l'adjectif qualifiant deux noms masculins → masculin pluriel).\nc) « **élégantes** » (deux noms féminins → féminin pluriel).\nRègle : plusieurs donneurs coordonnés → pluriel ; le masculin l'emporte si les genres sont mêlés.",
    explication: [],
  },
  {
    id: "fr-11-exo-c3",
    notion: "fr-11",
    savoirFaire: ["collectifs-coordination"],
    difficulte: 2,
    question:
      "Justifiez l'accord (deux solutions possibles) :\na) « Une bande d'enfants courait / couraient. »\nb) « Un kilo de cerises suffit / suffisent. »",
    reponseType:
      "a) « **courait** » si l'on insiste sur l'ensemble (« la bande ») ; « **couraient** » si l'on pense aux enfants. Les deux se défendent selon le point de vue.\nb) « **suffit** » (la quantité « un kilo ») ou « **suffisent** » (les cerises) : accord souple avec le collectif ou avec son complément.",
    explication: [],
  },
  {
    id: "fr-11-exo-c4",
    notion: "fr-11",
    savoirFaire: ["accords-complexes"],
    difficulte: 2,
    question:
      "Accordez (ou non) l'adjectif de couleur :\na) « des yeux (bleu foncé) »\nb) « des rubans (vert pomme) »\nc) « des chaussures (noir) »",
    reponseType:
      "a) « bleu foncé » : **invariable** (couleur composée de deux mots).\nb) « vert pomme » : **invariable** (couleur précisée par un nom).\nc) « **noires** » (adjectif de couleur simple : il s'accorde).\nRègle : couleur simple → accord ; couleur composée ou nom-couleur → invariable.",
    explication: [],
  },
  {
    id: "fr-11-exo-c5",
    notion: "fr-11",
    savoirFaire: ["accords-complexes"],
    difficulte: 2,
    question:
      "Accordez « tel » :\na) « Des fruits (tel) que pommes et poires. »\nb) « Elle a laissé les meubles (tel quel). »",
    reponseType:
      "a) « **tels** que » : « tel que » s'accorde avec le nom qui **précède** (« fruits »).\nb) « **tels quels** » : « tel quel » s'accorde avec le nom auquel il se rapporte (« les meubles », masculin pluriel).\nÀ noter : « tel » seul (sans « que ») s'accorde avec ce qui **suit**.",
    explication: [],
  },
  {
    id: "fr-11-exo-c6",
    notion: "fr-11",
    savoirFaire: ["accords-complexes"],
    difficulte: 2,
    question:
      "Accordez les numéraux :\na) « quatre-(vingt) »\nb) « quatre-(vingt)-deux »\nc) « trois (cent) »\nd) « trois (cent) douze »\ne) « (mille) »",
    reponseType:
      "a) « quatre-vingt**s** » (vingt multiplié et final → s).\nb) « quatre-vingt-deux » (vingt suivi d'un autre nombre → pas de s).\nc) « trois cent**s** » (cent multiplié et final → s).\nd) « trois cent douze » (cent suivi d'un nombre → pas de s).\ne) « mille » (toujours invariable).",
    explication: [],
  },
  {
    id: "fr-11-exo-c7",
    notion: "fr-11",
    savoirFaire: ["sujet-inverse-eloigne"],
    difficulte: 2,
    question:
      "Accordez le verbe avec son sujet réel :\na) « Mon frère, ainsi que ses amis, (venir, futur). »\nb) « Le directeur, accompagné de ses adjoints, (arriver, passé composé). »",
    reponseType:
      "a) « **viendra** » : « ainsi que ses amis » est une comparaison entre virgules → accord avec « mon frère » seul (singulier). Sans virgules (« et ses amis »), on aurait le pluriel.\nb) « **est arrivé** » : l'incise « accompagné de ses adjoints » n'ajoute pas au sujet « le directeur » (singulier).",
    explication: [],
  },
  {
    id: "fr-11-exo-c8",
    notion: "fr-11",
    savoirFaire: ["sujet-verbe"],
    difficulte: 2,
    question:
      "Accordez le verbe (sujets particuliers) :\na) « C'(être, présent) eux les responsables. »\nb) « C'est moi qui (avoir, présent) raison. »",
    reponseType:
      "a) « Ce **sont** eux » : « ce » repris par un pronom de 3e personne du pluriel entraîne le verbe au pluriel.\nb) « qui **ai** raison » : le relatif « qui » reprend « moi » (1re personne) ; le verbe s'accorde donc à la 1re personne du singulier.",
    explication: [],
  },
  {
    id: "fr-11-exo-c9",
    notion: "fr-11",
    savoirFaire: ["accords-gn"],
    difficulte: 2,
    question:
      "Accordez l'adjectif après « avoir l'air » :\na) « Elle a l'air (content). »\nb) « Ces fruits ont l'air (mûr). »",
    reponseType:
      "a) « **contente** » : avec « avoir l'air » au sens de « sembler », l'usage moderne accorde avec le **sujet** (« elle »). L'accord avec « air » (« content ») est vieilli.\nb) « **mûrs** » : accord avec le sujet « fruits ».",
    explication: [],
  },
  {
    id: "fr-11-exo-c10",
    notion: "fr-11",
    savoirFaire: ["accords-gn", "sujet-verbe"],
    difficulte: 2,
    question:
      "Corrigez toutes les erreurs d'accord :\n« Les beau paysage que nous avons traversé était couvert de fleur sauvage. »",
    reponseType:
      "« Les **beaux** paysage**s** que nous avons traversés **étaient** couvert**s** de fleur**s** sauvage**s**. »\n- « beaux paysages » : accord pluriel dans le GN ;\n- « étaient » : sujet « les beaux paysages » (pluriel) ;\n- « couverts » : attribut au pluriel ;\n- « fleurs sauvages » : accord pluriel.",
    explication: [],
  },

  // ————————————————————————— Expert (au-delà de l'épreuve) —————————————————————————
  {
    id: "fr-11-exo-e1",
    notion: "fr-11",
    savoirFaire: ["sujet-verbe"],
    difficulte: 3,
    question:
      "Justifiez l'accord, qui peut surprendre :\na) « Le peu de moyens dont il dispose ne lui suffit pas. »\nb) « Plus d'un candidat s'est présenté. »",
    reponseType:
      "a) « Le peu de moyens… ne lui **suffit** pas » : « le peu » est senti comme le noyau (l'insuffisance), d'où le singulier. Si l'on met l'accent sur « moyens », le pluriel (« suffisent ») se défend aussi.\nb) « Plus d'un candidat **s'est présenté** » : la locution « plus d'un » commande le **singulier**, malgré le sens pluriel. (À l'inverse, « moins de deux » entraîne le pluriel.)",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : ces accords contre-intuitifs (« plus d'un » au singulier) sont des classiques ; pouvoir les justifier vaut mieux que de se fier au sens apparent.",
      },
    ],
  },
  {
    id: "fr-11-exo-e2",
    notion: "fr-11",
    savoirFaire: ["accords-complexes"],
    difficulte: 3,
    question:
      "Pourquoi « vingt » est-il invariable ici, alors qu'on écrit « quatre-vingts ans » ?\n« les années quatre-vingt »",
    reponseType:
      "« les années quatre-vingt » : « vingt » reste **invariable** car il a une valeur **ordinale / de repère** (= la décennie 1980), et non cardinale. Le « s » de « quatre-vingt**s** » n'apparaît que lorsque vingt est **multiplié ET final dans un cardinal** (« quatre-vingts ans »). De même : « page quatre-vingt », « numéro quatre-vingt » (valeur ordinale → invariable).",
    explication: [],
  },
  {
    id: "fr-11-exo-e3",
    notion: "fr-11",
    savoirFaire: ["collectifs-coordination", "sujet-verbe"],
    difficulte: 3,
    question:
      "Accordez et justifiez selon le sens :\na) « Pierre ou Paul (être élu, futur). »\nb) « Ni l'un ni l'autre ne (venir, futur). »",
    reponseType:
      "a) « Pierre ou Paul **sera** élu » si « ou » est **exclusif** (un seul poste) ; pluriel possible si « ou » est inclusif (les deux éligibles).\nb) « Ni l'un ni l'autre ne **viendra** » (exclusion : un seul est envisagé) ou « ne **viendront** » (les deux concernés) : l'usage admet les deux selon le sens.\nLa coordination par « ou » / « ni… ni » laisse l'accord dépendre du sens visé.",
    explication: [],
  },
  {
    id: "fr-11-exo-e4",
    notion: "fr-11",
    savoirFaire: ["accords-gn"],
    difficulte: 3,
    question:
      "L'adjectif qualifie-t-il un seul nom ou les deux ? Accordez en conséquence :\n« Il a une compétence et un dévouement (remarquable). »",
    reponseType:
      "Si « remarquable » qualifie **les deux** noms → « **remarquables** » (pluriel, masculin car les genres sont mêlés).\nSi l'on considère qu'il ne porte que sur « dévouement » (le nom le plus proche) → « **remarquable** » (singulier).\nL'accord traduit l'interprétation : l'usage soigné privilégie l'accord avec les deux noms quand le sens le permet.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : signaler que l'accord dépend de la portée de l'adjectif (un seul nom ou les deux) est exactement le raisonnement attendu.",
      },
    ],
  },
  {
    id: "fr-11-exo-e5",
    notion: "fr-11",
    savoirFaire: ["accords-complexes"],
    difficulte: 3,
    question:
      "Accordez selon la position du mot par rapport au nom :\na) « une (demi)-heure » / « deux heures et (demi) »\nb) « (nu)-pieds » / « les pieds (nu) »",
    reponseType:
      "a) « une **demi**-heure » : *demi* devant le nom est **invariable** ; « deux heures et **demie** » : après le nom, *demi* s'accorde en genre seulement (jamais en nombre).\nb) « **nu**-pieds » : *nu* devant le nom est invariable ; « les pieds **nus** » : après le nom, il s'accorde.\nLa position avant / après le nom décide de l'accord.",
    explication: [],
  },
];
