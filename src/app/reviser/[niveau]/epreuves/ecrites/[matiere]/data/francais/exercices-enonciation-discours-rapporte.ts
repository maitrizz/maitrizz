// Banque d'exercices OUVERTS, notion 15 « L'énonciation et le discours rapporté ».
//
// CHANTIER 2 (refonte façon Grévisse, DOCTRINE_EXERCICES.md) : exercices réécrits.
// 3 niveaux : Fondamentaux · Concours (la cible) · Expert (au-delà : démêler les voix
// au DIL, concordance complexe, types de modalité, double système énonciatif, effet
// des formes de discours rapporté).
// 6 savoir-faire : indices d'énonciation · discours direct · discours indirect
// · discours indirect libre · transpositions · modalisation.

import type { TrainerExercice } from "@/components/fiche/types";

export const EXERCICES_ENONCIATION_DISCOURS_RAPPORTE: TrainerExercice[] = [
  // ————————————————————————— Fondamentaux —————————————————————————
  {
    id: "fr-15-exo-f1",
    notion: "fr-15",
    savoirFaire: ["indices-enonciation"],
    difficulte: 1,
    question:
      "Énoncé ancré dans la situation d'énonciation ou récit coupé ? Justifiez :\na) « Je pars demain, viens me voir ici. »\nb) « Il partit le lendemain et la rejoignit là-bas. »",
    reponseType:
      "a) **ancré** : je / me / ici / demain + présent → des indices liés à la situation d'énonciation.\nb) **récit coupé** : il / passé simple / le lendemain / là-bas → aucun lien à la situation présente.",
    explication: [],
  },
  {
    id: "fr-15-exo-f2",
    notion: "fr-15",
    savoirFaire: ["indices-enonciation"],
    difficulte: 1,
    question:
      "Relevez les embrayeurs (déictiques) :\n« Je te retrouverai ici demain. »",
    reponseType:
      "« **Je** » (locuteur), « **te** » (interlocuteur), « **ici** » (lieu), « **demain** » (temps). Ces embrayeurs ne se comprennent que par rapport à la situation d'énonciation.",
    explication: [],
  },
  {
    id: "fr-15-exo-f3",
    notion: "fr-15",
    savoirFaire: ["discours-direct", "discours-indirect"],
    difficulte: 1,
    question:
      "Forme du discours rapporté ?\na) « Il dit : “Je viens.” »\nb) « Il dit qu'il venait. »",
    reponseType:
      "a) **discours direct** (paroles citées, deux-points et guillemets).\nb) **discours indirect** (paroles intégrées dans une subordonnée « qu'il venait », sans guillemets).",
    explication: [],
  },
  {
    id: "fr-15-exo-f4",
    notion: "fr-15",
    savoirFaire: ["discours-indirect-libre"],
    difficulte: 1,
    question:
      "Reconnaissez la forme :\n« Il s'arrêta. Devait-il continuer ? Non, il était trop tard. »",
    reponseType:
      "**discours indirect libre** (DIL) : les pensées sont rapportées sans verbe introducteur ni subordination (« Devait-il continuer ? »), mais transposées au système du récit (3e personne, imparfait).",
    explication: [],
  },
  {
    id: "fr-15-exo-f5",
    notion: "fr-15",
    savoirFaire: ["modalisation"],
    difficulte: 1,
    question:
      "Relevez la marque de subjectivité (modalisation) :\na) « C'est une décision scandaleuse. »\nb) « Il serait coupable. »",
    reponseType:
      "a) lexique **évaluatif / affectif** (« scandaleuse » porte un jugement).\nb) **conditionnel** (« serait ») : le locuteur n'assume pas pleinement l'information (fait non confirmé).\nCe sont des marques de subjectivité.",
    explication: [],
  },
  {
    id: "fr-15-exo-f6",
    notion: "fr-15",
    savoirFaire: ["transpositions", "discours-indirect"],
    difficulte: 1,
    question:
      "Transposez au discours indirect :\nIl dit : « Je suis fatigué. »",
    reponseType:
      "« Il dit **qu'il est** fatigué. » Le pronom « je » devient « il » ; on supprime les guillemets et les deux-points ; on relie par « que ».",
    explication: [],
  },

  // ————————————————————————— Concours (la cible) —————————————————————————
  {
    id: "fr-15-exo-c1",
    notion: "fr-15",
    savoirFaire: ["indices-enonciation"],
    difficulte: 2,
    question:
      "Le texte est-il entièrement ancré ? Justifiez :\n« Il marchait depuis des heures. “Où suis-je ?”, se demanda-t-il. »",
    reponseType:
      "Non. Le récit (« Il marchait… se demanda-t-il ») est **coupé** de l'énonciation (3e personne, passé). Seule la parole au discours direct (« Où suis-je ? ») est **ancrée** (présent, « je »). Un dialogue inséré ne rend pas tout le texte ancré.",
    explication: [],
  },
  {
    id: "fr-15-exo-c2",
    notion: "fr-15",
    savoirFaire: ["indices-enonciation"],
    difficulte: 2,
    question:
      "« là » est-il déictique ou anaphorique ?\na) « Pose le livre là (en le montrant). »\nb) « Il entra dans la grange ; là, il s'endormit. »",
    reponseType:
      "a) **déictique** : « là » désigne un lieu de la situation d'énonciation (le geste).\nb) **anaphorique** : « là » reprend un élément du texte (« la grange »).\nLe même mot renvoie soit à la situation, soit au co-texte.",
    explication: [],
  },
  {
    id: "fr-15-exo-c3",
    notion: "fr-15",
    savoirFaire: ["transpositions", "discours-indirect"],
    difficulte: 2,
    question:
      "Transposez au discours indirect (verbe introducteur au passé) :\nIl m'a dit : « Je te rejoindrai ici demain. »",
    reponseType:
      "« Il m'a dit **qu'il me rejoindrait là le lendemain**. » Transformations : « je » → « il », « te » → « me », « rejoindrai » (futur) → « rejoindrait » (conditionnel = futur dans le passé), « ici » → « là », « demain » → « le lendemain ». On transpose **pronoms, temps ET repères spatio-temporels**, pas seulement les temps.",
    explication: [],
  },
  {
    id: "fr-15-exo-c4",
    notion: "fr-15",
    savoirFaire: ["discours-indirect", "transpositions"],
    difficulte: 2,
    question:
      "Transposez au discours indirect :\nIl demanda : « Est-ce que tu viens ? » puis « Où vas-tu ? »",
    reponseType:
      "« Il demanda **si** je venais », puis « **où** j'allais ». « est-ce que » devient « si » (jamais « est-ce que » au discours indirect) ; le mot interrogatif « où » est conservé, l'ordre sujet-verbe rétabli, sans point d'interrogation.",
    explication: [],
  },
  {
    id: "fr-15-exo-c5",
    notion: "fr-15",
    savoirFaire: ["discours-indirect", "discours-indirect-libre"],
    difficulte: 2,
    question:
      "Discours indirect ou indirect libre ? Justifiez :\na) « Il pensa qu'il avait tort. »\nb) « Il réfléchit. Avait-il tort ? Sans doute. »",
    reponseType:
      "a) **discours indirect** : subordonnée « qu'il avait tort », introduite par « pensa ».\nb) **discours indirect libre** : ni subordination ni verbe introducteur, mais des pensées transposées au récit (imparfait, 3e personne) avec des marques d'oralité (« Sans doute »).",
    explication: [],
  },
  {
    id: "fr-15-exo-c6",
    notion: "fr-15",
    savoirFaire: ["discours-indirect"],
    difficulte: 2,
    question:
      "Identifiez la forme de discours rapporté et ce qu'elle apporte :\n« Il leur annonça son départ en quelques mots. »",
    reponseType:
      "**récit de paroles** (discours narrativisé) : les paroles sont **résumées** par le narrateur (« annonça son départ ») sans être citées ni détaillées. C'est la forme la plus condensée du discours rapporté.",
    explication: [],
  },
  {
    id: "fr-15-exo-c7",
    notion: "fr-15",
    savoirFaire: ["modalisation"],
    difficulte: 2,
    question:
      "Relevez les marques de subjectivité et nommez-les :\n« Hélas, cette soi-disant réforme serait, paraît-il, une catastrophe. »",
    reponseType:
      "- « Hélas » : **lexique affectif** (interjection) ;\n- « soi-disant », « paraît-il », « serait » (conditionnel) : **modalisateurs** (le locuteur se distancie, ne s'engage pas) ;\n- « catastrophe » : **lexique évaluatif** (jugement).\nLe cumul de ces marques trahit une forte subjectivité.",
    explication: [],
  },
  {
    id: "fr-15-exo-c8",
    notion: "fr-15",
    savoirFaire: ["modalisation", "indices-enonciation"],
    difficulte: 2,
    question:
      "Que désigne « on » dans chaque cas ?\na) « On a marché sur la Lune. »\nb) « On part en vacances, tu viens ? »",
    reponseType:
      "a) « on » **indéfini** (= « les hommes », l'humanité en général).\nb) « on » = **« nous »** (registre courant, qui inclut le locuteur).\nLe « on » peut effacer ou inclure l'énonciateur : c'est un choix d'énonciation.",
    explication: [],
  },
  {
    id: "fr-15-exo-c9",
    notion: "fr-15",
    savoirFaire: ["transpositions", "discours-direct"],
    difficulte: 2,
    question:
      "Transposez au discours direct :\nElle répondit qu'elle ne savait pas et qu'elle reviendrait plus tard.",
    reponseType:
      "« Elle répondit : “**Je ne sais pas, je reviendrai plus tard**.” » On rétablit les guillemets et les deux-points, le « je », le présent et le futur (système ancré), et on supprime « que ».",
    explication: [],
  },
  {
    id: "fr-15-exo-c10",
    notion: "fr-15",
    savoirFaire: ["discours-indirect-libre", "discours-direct"],
    difficulte: 2,
    question:
      "Nommez la forme de discours rapporté et son effet :\n« Elle le regarda. Comme il avait changé ! Reviendrait-il un jour ? »",
    reponseType:
      "**discours indirect libre** : les pensées du personnage affleurent sans introduction (« Comme il avait changé ! »), mêlant la voix du narrateur et celle du personnage. Effet : immersion dans la subjectivité du personnage, fluidité, sans la rupture des guillemets.",
    explication: [],
  },

  // ————————————————————————— Expert (au-delà de l'épreuve) —————————————————————————
  {
    id: "fr-15-exo-e1",
    notion: "fr-15",
    savoirFaire: ["discours-indirect-libre"],
    difficulte: 3,
    question:
      "Démêlez ce qui relève du DIL et ce qui relève du narrateur :\n« Marie ouvrit la lettre. Enfin une bonne nouvelle ! Elle la relut, le cœur battant. »",
    reponseType:
      "« Marie ouvrit la lettre » et « Elle la relut, le cœur battant » : **récit** (voix du narrateur, passé simple). « Enfin une bonne nouvelle ! » : **discours indirect libre** (la pensée de Marie, sans guillemets, marquée par l'exclamation et l'adverbe « enfin »). Le DIL fond les deux voix ; il faut savoir les démêler.",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : repérer le basculement (ponctuation expressive, lexique subjectif, absence de subordination) entre la voix du narrateur et celle du personnage est exactement le geste attendu sur le DIL.",
      },
    ],
  },
  {
    id: "fr-15-exo-e2",
    notion: "fr-15",
    savoirFaire: ["transpositions", "discours-indirect"],
    difficulte: 3,
    question:
      "Transposez au discours indirect (introducteur au passé) :\nIl déclara : « J'ai terminé ; je partirai quand vous m'aurez payé. »",
    reponseType:
      "« Il déclara **qu'il avait terminé et qu'il partirait quand on l'aurait payé**. »\n- passé composé → plus-que-parfait (« avait terminé ») ;\n- futur → conditionnel présent (« partirait ») ;\n- futur antérieur → conditionnel passé (« aurait payé »).\nLa concordance recule chaque temps d'un cran vers le passé.",
    explication: [],
  },
  {
    id: "fr-15-exo-e3",
    notion: "fr-15",
    savoirFaire: ["modalisation"],
    difficulte: 3,
    question:
      "Distinguez le type de modalité :\na) « Il est certain qu'il viendra. »\nb) « Il est heureux qu'il vienne. »\nc) « Il doit être malade. »",
    reponseType:
      "a) modalité **logique / épistémique** (degré de certitude : ici la certitude).\nb) modalité **appréciative / affective** (jugement de valeur, sentiment).\nc) modalité **épistémique** de probabilité (conjecture, via « devoir »).\nLa modalisation se décline en types (vérité / certitude vs jugement / appréciation).",
    explication: [],
  },
  {
    id: "fr-15-exo-e4",
    notion: "fr-15",
    savoirFaire: ["indices-enonciation", "discours-direct"],
    difficulte: 3,
    question:
      "« hier » et « aujourd'hui » se calculent-ils par rapport au lecteur ?\n« Le 5 mai, il nota dans son journal : “Hier, j'ai échoué ; aujourd'hui, je recommence.” »",
    reponseType:
      "Non. Dans le discours direct (le journal), « hier » et « aujourd'hui » sont des **embrayeurs** ancrés sur le moment de l'écriture du journal (le 5 mai) : « aujourd'hui » = le 5 mai, « hier » = le 4 mai. Ils se calculent par rapport à l'énonciation **citée**, pas par rapport au moment de lecture. C'est un double système énonciatif (récit + parole rapportée).",
    explication: [
      {
        type: "note",
        text: "Côté correcteur : montrer que les embrayeurs d'un discours direct inséré renvoient à la situation d'énonciation citée (et non à celle du récit) est un point fin valorisé.",
      },
    ],
  },
  {
    id: "fr-15-exo-e5",
    notion: "fr-15",
    savoirFaire: ["discours-direct", "discours-indirect", "discours-indirect-libre"],
    difficulte: 3,
    question:
      "Pour la même réplique « Je refuse ! », quel effet produit chaque forme de discours rapporté ?",
    reponseType:
      "- **Direct** (« Il cria : “Je refuse !” ») : vivacité, immédiateté, on entend la voix.\n- **Indirect** (« Il dit qu'il refusait ») : neutralité, distance, mise à plat.\n- **Indirect libre** (« Il bouillait. Il refusait ! ») : on épouse le point de vue du personnage sans la rupture des guillemets.\n- **Récit de paroles** (« Il opposa un refus ») : condensation maximale.\nLe choix de la forme construit un effet et une distance narrative.",
    explication: [],
  },
];
