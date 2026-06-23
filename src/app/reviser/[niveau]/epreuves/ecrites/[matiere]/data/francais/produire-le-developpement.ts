import type { Fiche } from "@/components/fiche/types";

/**
 * Notion 19 : Produire le développement (Partie 3 : développement rédigé).
 *
 * Fusion des anciennes notions 19 (construire le plan) et 20 (rédiger). La
 * Partie 3 est une SEULE tâche : à partir d'une question posée sur un texte,
 * produire un développement rédigé et structuré (une RÉFLEXION ARGUMENTÉE
 * suscitée par le texte, et non un commentaire de procédés).
 *
 * IMPORTANT : contrairement aux notions 01-18, le contenu N'EST PAS commun
 * L3/M2 ici. Les attendus diffèrent (voir reference_crpe_partie3_nature en
 * mémoire) :
 *  - M2 : épreuve de français autonome (3 h), développement ample (9 pts) ;
 *    question souvent générale ; on mobilise explicitement le texte, sa
 *    culture, ses lectures et sa réflexion personnelle. Exemple : sujet 2026
 *    (Amin Maalouf).
 *  - L3 : épreuve commune français + maths (4 h, ~2 h pour le français) ;
 *    développement COURT (« une trentaine de lignes », 10 pts) ; question
 *    souvent ANCRÉE sur le texte ; le texte reste au centre (lectures du
 *    lycée en appoint). Exemple : sujet 0 bac+3 (Charles Perrault).
 *
 * D'où DEUX fiches distinctes (deux fabriques), même slug/numéro mais
 * chacune dans la liste de son niveau (FRANCAIS_L3 / FRANCAIS_M2).
 */

// ===========================================================================
// M2 — Réflexion argumentée ample (texte + culture + lectures)
// ===========================================================================

const OBJECTIFS_M2 = [
  { id: "pd1", label: "J'analyse la question (verbe, notion clé, ce qu'il faut mobiliser) pour cerner ce qui est demandé" },
  { id: "pd2", label: "Je transforme la question en une problématique qui sert de fil directeur" },
  { id: "pd3", label: "Je choisis le type de plan adapté (analytique le plus souvent, dialectique si la question invite à trancher)" },
  { id: "pd4", label: "Je mobilise le texte ET ma culture et mes lectures pour nourrir chaque axe" },
  { id: "pd5", label: "Je bâtis un plan détaillé équilibré : deux ou trois axes, une idée et un appui par sous-partie" },
  { id: "pd6", label: "Je rédige une introduction en trois temps : amorce, problématique, annonce du plan" },
  { id: "pd7", label: "Je construis un paragraphe argumenté : idée directrice, appui, analyse" },
  { id: "pd8", label: "Je lie mes parties (connecteurs, transitions) et je conclus par un bilan et une ouverture" },
  { id: "pd9", label: "J'écris au présent, dans une langue correcte, et je garde du temps pour relire" },
];

function ficheProduireDeveloppementM2Builder(): Fiche {
  return {
    slug: "produire-le-developpement",
    matiere: "francais",
    numero: 19,
    partie: "Partie 3 : Développement rédigé",
    title: "Produire le développement rédigé",
    subtitle:
      "Analyser la question, problématiser, bâtir un plan, mobiliser le texte et sa culture, puis rédiger une réflexion argumentée structurée",
    badges: [
      { label: "★★★ Le cœur de la Partie 3", variant: "hot" },
      { label: "Épreuve écrite de français · 3 h", variant: "info" },
    ],
    metaTitle:
      "Produire le développement rédigé (M2) : Partie 3 du CRPE · Fiche de révision | Maitrizz",
    metaDescription:
      "Fiche CRPE M2 sur la Partie 3 (réflexion et développement) : analyser la question, formuler une problématique, choisir un plan, mobiliser le texte et sa culture, rédiger l'introduction, les paragraphes et la conclusion d'une réflexion argumentée. Méthode déroulée sur le sujet officiel 2026, exercices d'après les sujets réels, flashcards et auto-évaluation.",
    tabGroups: [
      {
        id: "decouvrir",
        label: "Découvrir",
        icon: "",
        tabs: [
          {
            id: "vue-d-ensemble",
            label: "Vue d'ensemble",
            icon: "",
            blocks: [
              {
                type: "sommaireApercu",
                title: "Le programme en 5 étapes",
                intro:
                  "En Partie 3 du M2, vous répondez à une question posée sur un texte par un développement rédigé et structuré. Ce n'est pas un commentaire du texte ni un résumé : c'est une réflexion argumentée qui s'appuie sur le texte, sur votre culture et sur vos lectures. Voici la chaîne complète, de la question à la copie.",
                items: [
                  { number: "①", title: "Analyser la question", text: "Repérer le verbe, la notion clé et ce qu'il faut mobiliser : c'est ce qui empêche le hors-sujet." },
                  { number: "②", title: "Problématiser et choisir le plan", text: "Transformer la question en fil directeur, puis choisir un plan analytique ou dialectique." },
                  { number: "③", title: "Mobiliser texte et culture", text: "Puiser dans le texte ET dans sa culture et ses lectures, puis bâtir un plan détaillé." },
                  { number: "④", title: "Rédiger", text: "Introduction en trois temps, paragraphes argumentés liés entre eux, conclusion avec ouverture." },
                  { number: "⑤", title: "Relire", text: "Corriger la langue (elle est notée) et vérifier qu'on a bien répondu à la question." },
                ],
              },
            ],
          },
          {
            id: "cours",
            label: "Cours",
            icon: "",
            blocks: [
              {
                type: "callout",
                variant: "info",
                icon: "",
                title: "Avant de commencer",
                text:
                  "Au concours **M2**, le français est une épreuve écrite autonome de **3 heures**. Sa **Partie 3**, « Réflexion et développement », vaut **9 points** : à partir d'une question posée sur un texte (400 à 600 mots), vous rédigez « un développement présentant un raisonnement rédigé et structuré ». " +
                  "Ce **n'est pas un commentaire** du texte : c'est une **réflexion argumentée** où vous mobilisez le texte, votre culture, vos lectures et votre réflexion personnelle. C'est la partie la plus rentable de l'épreuve.",
              },
              {
                type: "callout",
                variant: "warning",
                icon: "⚠️",
                title: "Ce que les sujets officiels demandent vraiment",
                text:
                  "Les consignes réelles ne disent jamais « analysez les procédés du texte ». Elles posent une **question de réflexion** et vous demandent d'y répondre « en vous appuyant sur le texte, votre réflexion personnelle, vos lectures et votre culture » (sujets officiels 2025 et 2026). " +
                  "Exemple, session 2026 : « Quel est, selon vous, l'intérêt pour une personne de mettre par écrit ses expériences vécues ? » Le texte est un point de départ et un appui, pas l'objet unique. Voir les [sujets officiels du CRPE](https://www.devenirenseignant.gouv.fr/les-sujets-des-epreuves-ecrites-et-rapports-des-jurys-des-crpe-1163).",
              },
              {
                type: "subsection",
                number: "①",
                title: "Analyser la question",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Avant toute idée, on lit la question comme un contrat. Trois éléments à isoler : le **verbe** (ce qu'on doit faire), la **notion clé** (sur quoi porte la réflexion) et **ce qu'il faut mobiliser** (le texte, mais aussi votre culture et vos lectures, ce que la consigne rappelle presque toujours en M2).",
                  },
                  {
                    type: "table",
                    title: "Les tournures de question et le plan qu'elles appellent",
                    headers: ["Tournure de la question", "Ce qu'elle demande", "Plan appelé"],
                    rows: [
                      ["Quel est l'intérêt de... ? En quoi... ?", "Explorer les aspects, les fonctions, les raisons d'une notion", "Analytique (par aspects)"],
                      ["Dans quelle mesure... ? Peut-on dire que... ?", "Examiner une affirmation, peser le pour et le contre", "Dialectique"],
                      ["Pensez-vous que... ? Partagez-vous ce point de vue ?", "Prendre position en nuançant", "Dialectique"],
                      ["Vous interrogerez les liens entre A et B", "Étudier une relation sous plusieurs angles", "Analytique (par facettes)"],
                    ],
                  },
                  {
                    type: "callout",
                    variant: "info",
                    icon: "💡",
                    title: "La notion clé ouvre votre culture",
                    text: "Une fois la notion clé repérée (l'écriture de soi, le rôle de l'art, le souvenir...), demandez-vous aussitôt : quelles œuvres, quels auteurs, quels exemples connais-je sur ce thème ? C'est ce réflexe qui nourrit la réflexion au M2 (voir [références mobilisables](fiche:culture-litteraire)).",
                  },
                ],
              },
              {
                type: "subsection",
                number: "②",
                title: "Problématiser et choisir le type de plan",
                blocks: [
                  {
                    type: "paragraph",
                    text: "**Problématiser**, c'est reformuler la question en une intention claire, qui guidera tout le développement. On ne recopie pas la consigne : on dit ce qu'on va chercher à montrer. Le **type de plan** découle ensuite de la question.",
                  },
                  {
                    type: "notionCardGrid",
                    columns: 1,
                    cards: [
                      {
                        title: "Le plan analytique (par aspects)",
                        definition: "Chaque axe explore un aspect, une fonction ou une raison liés à la notion. Les axes s'additionnent pour faire le tour de la question. C'est le plan le plus fréquent en Partie 3.",
                        exemples: [
                          "Question 2026 : « Quel est l'intérêt de mettre par écrit ses expériences vécues ? » → Axe 1 : garder une trace contre l'oubli · Axe 2 : se comprendre soi-même · Axe 3 : transmettre et témoigner.",
                        ],
                        test: "À choisir quand la question demande d'explorer des aspects, des fonctions, des raisons (« quel intérêt », « en quoi »).",
                      },
                      {
                        title: "Le plan dialectique (nuancé)",
                        definition: "On examine une affirmation : d'abord ce qui la confirme, ensuite ce qui la nuance ou la limite, et l'on aboutit à une position équilibrée.",
                        exemples: [
                          "Question : « Peut-on dire que l'écriture console toujours de ce qu'on a vécu ? » → Axe 1 : en quoi elle console · Axe 2 : ses limites · (Axe 3 : une position dépassant l'opposition).",
                        ],
                        test: "À choisir quand la question invite à discuter, à trancher (« dans quelle mesure », « peut-on dire que »).",
                      },
                    ],
                  },
                  {
                    type: "callout",
                    variant: "info",
                    icon: "💡",
                    title: "Deux ou trois axes, pas plus",
                    text: "Un développement de Partie 3 tient en deux ou trois grandes parties. Trois axes solides valent mieux que cinq survolés. Mieux vaut creuser que multiplier.",
                  },
                ],
              },
              {
                type: "subsection",
                number: "③",
                title: "Mobiliser le texte et la culture, puis bâtir le plan détaillé",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Chaque axe doit être **distinct**, **équilibré** et **utile** (il répond à la problématique). Surtout, en M2, on l'appuie sur **deux sources** : le texte support et votre culture. C'est la marque d'une copie de M2 : la réflexion dépasse le seul texte.",
                  },
                  {
                    type: "bullets",
                    items: [
                      "**Une idée par sous-partie**, jamais un simple résumé du texte.",
                      "**Un appui dans le texte** : une citation courte entre guillemets ou un renvoi précis.",
                      "**Un appui dans votre culture** : une œuvre, un auteur, un exemple précis lié à la notion (voir [références mobilisables](fiche:culture-litteraire)).",
                      "**Une progression** : du plus évident au plus subtil, ou du confirmé vers le nuancé.",
                    ],
                  },
                  {
                    type: "formulaBlock",
                    title: "Intégrer une référence en une phrase",
                    lines: [
                      "[Constat sur le texte] + [référence précise] + [lien explicite avec l'idée].",
                      "Exemple : « Comme le narrateur de Maalouf, Anne Frank, dans son Journal, écrit pour garder mémoire d'une expérience menacée : l'écriture devient une trace contre l'oubli. »",
                    ],
                    note: "On dit toujours le lien : citer un titre ou un auteur ne vaut rien sans la phrase qui le relie à l'idée. Et on ne cite que ce dont on est sûr (une date ou une attribution hasardeuse dessert la copie). Pour un recueil de références classées par thème, voir le [référentiel de références mobilisables](fiche:culture-litteraire).",
                  },
                  {
                    type: "formulaBlock",
                    title: "La trame d'un plan détaillé",
                    lines: [
                      "Problématique : en quoi / pourquoi / dans quelle mesure ... ?",
                      "Axe 1, [idée directrice] : appui texte + appui culture",
                      "Axe 2, [idée directrice] : appui texte + appui culture",
                      "(Axe 3, [idée directrice] : ...)",
                    ],
                    note: "On pose ce squelette au brouillon avant d'écrire la moindre phrase : c'est lui qui garantit l'équilibre et évite le hors-sujet.",
                  },
                  {
                    type: "callout",
                    variant: "warning",
                    icon: "⚠️",
                    title: "Le texte seul ne suffit pas (au M2)",
                    text: "Un développement qui ne ferait que paraphraser le texte passe à côté de la consigne : elle vous demande explicitement votre culture et vos lectures. À l'inverse, une culture plaquée sans lien avec la question est sanctionnée. Chaque référence doit servir l'idée.",
                  },
                ],
              },
              {
                type: "subsection",
                number: "④",
                title: "Rédiger : introduction, paragraphes, conclusion",
                blocks: [
                  {
                    type: "notionCardGrid",
                    columns: 1,
                    cards: [
                      {
                        title: "L'introduction en trois temps",
                        definition: "Une amorce qui entre par le texte ou la notion, la problématique reformulée, l'annonce du plan, le tout en quelques phrases.",
                        exemples: ["« Dans Le Périple de Baldassare, le narrateur reprend la plume malgré tout. On peut se demander pourquoi une personne éprouve le besoin de mettre par écrit ses expériences. Nous verrons d'abord..., puis..., enfin... »"],
                        test: "L'amorce parle déjà du sujet précis, jamais d'une généralité (« de tout temps, les hommes... »).",
                      },
                      {
                        title: "Le paragraphe argumenté",
                        definition: "Une idée directrice, un appui (texte ou référence) cité ou précis, une analyse qui relie l'appui à l'idée et à la problématique.",
                        exemples: ["Idée → appui → analyse : « Écrire conserve une trace. Le narrateur a beau avoir « écrit pour le feu », il continue : l'acte d'écrire vaut pour lui-même, contre l'oubli. »"],
                        test: "Une idée par paragraphe ; une citation ou une référence sans analyse ne démontre rien.",
                      },
                      {
                        title: "La conclusion",
                        definition: "Un bilan qui répond à la problématique à partir des parties démontrées, puis une ouverture mesurée (un rapprochement, un prolongement).",
                        exemples: ["« Mettre par écrit ses expériences répond donc à des besoins essentiels : garder une trace, se comprendre, transmettre. On peut se demander si les écrits numériques d'aujourd'hui prolongent ce besoin. »"],
                        test: "La conclusion ne recopie pas l'introduction et ne repose pas la question : elle y répond.",
                      },
                    ],
                  },
                  {
                    type: "bullets",
                    items: [
                      "**Connecteurs** à l'intérieur des parties : d'abord, ensuite, en effet, ainsi, cependant (voir [cohérence textuelle](fiche:coherence-textuelle)).",
                      "**Transition** entre deux grandes parties : une phrase qui clôt l'une et annonce l'autre.",
                      "**Présent** de l'analyse et de la vérité générale (« l'écriture conserve », pas « l'écriture conserva »).",
                    ],
                  },
                ],
              },
              {
                type: "piegeCard",
                variant: "rouge",
                title: "Piège n°1 · transformer le développement en commentaire de texte",
                badge: "Erreur sur la nature de l'épreuve",
                faux: "Relever les procédés du texte (« l'auteur emploie une métaphore... ») comme s'il s'agissait d'un commentaire littéraire.",
                vrai: "Répondre à la **question de réflexion** posée, en utilisant le texte comme un appui parmi d'autres, aux côtés de votre culture.",
                methode: "Recopier la question en haut du brouillon et vérifier que chaque paragraphe y répond, au lieu de décrire le texte.",
              },
              {
                type: "piegeCard",
                variant: "rouge",
                title: "Piège n°2 · la culture absente ou plaquée",
                badge: "Spécifique au M2",
                faux: "Ne s'appuyer que sur le texte ; ou citer une œuvre célèbre sans aucun lien avec la question.",
                vrai: "Mobiliser une référence **précise et reliée** à l'idée défendue, comme la consigne le demande.",
                methode: "Après chaque référence, écrire la phrase qui la relie à votre idée ; si vous n'y arrivez pas, la référence ne sert à rien.",
              },
              {
                type: "piegeCard",
                variant: "orange",
                title: "Piège n°3 · la paraphrase ou le résumé du texte",
                badge: "Perte de points",
                faux: "Suivre le texte ligne à ligne : « d'abord l'auteur dit que..., ensuite il ajoute que... »",
                vrai: "Le développement s'organise par **idées** qui répondent à la question, pas dans l'ordre du texte.",
                methode: "Pour chaque sous-partie, se demander : « Quelle idée je défends ? », et non « De quoi parle ce passage ? »",
              },
              {
                type: "piegeCard",
                variant: "bleu",
                title: "Piège n°4 · l'introduction qui récite la consigne",
                badge: "Réflexe à corriger",
                faux: "« Je vais répondre à la question : quel est l'intérêt de mettre par écrit ses expériences. »",
                vrai: "Une amorce, la question reformulée en problématique, puis l'annonce du plan.",
                methode: "Reformuler la question avec ses propres mots, jamais la recopier telle quelle.",
              },
              {
                type: "ctaBox",
                text: "Cours bien en tête ? Passez à la méthode, déroulée sur un vrai sujet.",
                buttonLabel: "Voir la méthode pas-à-pas",
                targetTab: "methode",
              },
            ],
          },
          {
            id: "methode",
            label: "Méthode",
            icon: "",
            blocks: [
              {
                type: "callout",
                variant: "success",
                icon: "",
                title: "La méthode déroulée sur un sujet réel (session 2026)",
                text:
                  "Prenons un vrai sujet de M2 : le texte est un extrait de **Amin Maalouf, *Le Périple de Baldassare*** (un négociant tient son journal pendant le grand incendie de Londres de 1666). " +
                  "La consigne de Partie 3 (9 points) est, mot pour mot : « **Quel est, selon vous, l'intérêt pour une personne de mettre par écrit ses expériences vécues ?** Vous répondrez à cette question en vous appuyant sur le texte d'Amin Maalouf, votre réflexion personnelle, vos lectures et votre culture. Vous présenterez votre propos de façon structurée et argumentée. » " +
                  "Source : [sujets officiels du CRPE](https://www.devenirenseignant.gouv.fr/les-sujets-des-epreuves-ecrites-et-rapports-des-jurys-des-crpe-1163).",
              },
              {
                type: "rappelExpress",
                title: "Rappel express : ce que le jury attend (M2)",
                blocks: [
                  {
                    type: "formulaBlock",
                    lines: [
                      "Le développement répond à la question, pas au texte ligne à ligne.",
                      "Deux ou trois axes distincts, appuyés sur le texte ET sur votre culture.",
                      "Introduction (amorce, problématique, annonce), paragraphes argumentés, conclusion (bilan, ouverture).",
                      "Présent de l'analyse, langue soignée, du temps gardé pour relire.",
                    ],
                  },
                  { type: "callout", variant: "warning", text: "⚠️ La langue est notée : un hors-sujet ou une copie fautive coûtent cher, même avec de bonnes idées." },
                ],
              },
              {
                type: "methodeGroup",
                number: "①",
                title: "Analyser la question",
                intro: "**Sujet 2026 :** « Quel est, selon vous, l'intérêt pour une personne de mettre par écrit ses expériences vécues ? »",
                steps: [
                  { number: "1", text: "**Repérer le verbe / la tournure** : « Quel est l'intérêt de... ? » appelle d'explorer des aspects, donc un plan analytique.", example: { lines: ["« quel est l'intérêt » → plusieurs fonctions à explorer → plan par aspects"] } },
                  { number: "2", text: "**Isoler la notion clé** : mettre par écrit ses expériences, c'est-à-dire l'écriture de soi (journal, mémoires, autobiographie).", example: { lines: ["notion clé : écrire sa propre vie / écriture de soi"] } },
                  { number: "💡", text: "**Lister ce qu'on doit mobiliser** : le texte de Maalouf, mais aussi votre culture et vos lectures sur l'écriture de soi.", warn: "⚠️ La consigne demande explicitement votre culture : un développement appuyé sur le seul texte est incomplet." },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                title: "Checkpoint : à vous de jouer",
                badge: "30 secondes",
                question: "Quelle est la notion clé de la question, et quel type de plan appelle-t-elle ?",
                correction: [
                  { type: "line", text: "Notion clé : **l'écriture de soi**. Tournure « quel est l'intérêt » → **plan analytique** : on explore plusieurs intérêts/fonctions." },
                  { type: "note", text: "Repéré la notion clé et la tournure ? Sinon, revoyez l'étape ①." },
                ],
              },
              {
                type: "methodeGroup",
                number: "②",
                title: "Problématiser et choisir le plan",
                intro: "**Objectif :** transformer la question en fil directeur et arrêter le plan.",
                steps: [
                  { number: "1", text: "**Formuler la problématique** en une phrase.", example: { lines: ["« Pourquoi une personne éprouve-t-elle le besoin de consigner par écrit ce qu'elle a vécu ? »"] } },
                  { number: "2", text: "**Arrêter les axes** (analytique, par fonctions de l'écriture de soi).", example: { lines: ["Axe 1 : garder une trace · Axe 2 : se comprendre · Axe 3 : transmettre, témoigner"] } },
                  { number: "💡", text: "**Vérifier que chaque axe répond à la question** et se distingue des autres.", warn: "⚠️ Trois axes qui se résument par la même phrase : il n'y en a qu'un, à refondre." },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                title: "Checkpoint : à vous de jouer",
                badge: "30 secondes",
                question: "Proposez un troisième axe, distinct de « garder une trace » et « se comprendre soi-même ».",
                correction: [
                  { type: "line", text: "Par exemple : **transmettre et témoigner** (laisser quelque chose aux autres, porter un témoignage). C'est une fonction tournée vers autrui, distincte des deux premières." },
                  { type: "note", text: "Un axe vraiment distinct trouvé ? Direction l'étape ③." },
                ],
              },
              {
                type: "methodeGroup",
                number: "③",
                title: "Mobiliser le texte et la culture",
                intro: "**Objectif :** nourrir chaque axe d'un appui dans le texte et d'un appui dans votre culture.",
                steps: [
                  { number: "1", text: "**Puiser dans le texte** une citation courte pour chaque axe.", example: { lines: ["Axe 1 : « j'ai écrit pour le feu », « pitoyable Sisyphe » · Axe 2 : « rendre compte de tout ce qui m'arrivait »"] } },
                  { number: "2", text: "**Convoquer une référence** précise et reliée pour chaque axe.", example: { lines: ["Axe 1 : le Journal d'Anne Frank · Axe 2 : les Essais de Montaigne, les Confessions de Rousseau"] } },
                  { number: "💡", text: "**Relier chaque appui à l'idée** : la citation ou la référence ne vaut que par l'analyse qui la suit.", warn: "⚠️ Une référence plaquée, sans lien avec la question, est sanctionnée." },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                title: "Checkpoint : à vous de jouer",
                badge: "30 secondes",
                question: "Pour l'axe « se comprendre soi-même », citez une référence et reliez-la en une phrase.",
                correction: [
                  { type: "line", text: "Par exemple : « Dans ses *Essais*, Montaigne déclare se peindre lui-même : écrire devient un moyen de se connaître. » La référence est reliée à l'idée (se comprendre), pas seulement citée." },
                  { type: "note", text: "Référence reliée à l'idée ? Direction le dernier checkpoint." },
                ],
              },
              {
                type: "methodeGroup",
                number: "④",
                title: "Rédiger et relier",
                intro: "**Objectif :** passer du plan à un texte continu (introduction, paragraphes liés, conclusion).",
                steps: [
                  { number: "1", text: "**Rédiger l'introduction** en trois temps (amorce par le texte, problématique, annonce du plan).", example: { lines: ["amorce : le narrateur de Maalouf reprend la plume malgré tout · puis problématique · puis annonce des trois axes"] } },
                  { number: "2", text: "**Rédiger chaque paragraphe** (idée → appui → analyse) et **lier** par des transitions.", example: { lines: ["« Écrire conserve d'abord une trace... » puis transition « Mais l'écriture ne fait pas que conserver : elle aide aussi à se comprendre. »"] } },
                  { number: "💡", text: "**Conclure** (bilan + ouverture), puis **relire** (langue, présent de l'analyse, réponse à la question).", warn: "⚠️ Gardez les dernières minutes pour la relecture : accords ([accord du participe passé](fiche:accord-participe-passe)), ponctuation, homophones." },
                ],
              },
              {
                type: "callout",
                variant: "success",
                icon: "",
                title: "Réponse attendue (formulation modèle), au format du concours",
                text:
                  "**Introduction.** « Dans *Le Périple de Baldassare*, le narrateur d'Amin Maalouf rouvre un cahier pour consigner sa vie, alors même qu'il a déjà « écrit pour le feu » et perdu les précédents. Ce geste obstiné invite à se demander pourquoi une personne éprouve le besoin de mettre par écrit ses expériences vécues. Nous verrons d'abord que l'écriture conserve une trace contre l'oubli, puis qu'elle aide celui qui écrit à se comprendre, enfin qu'elle permet de transmettre et de témoigner. »\n\n" +
                  "**Développement (premier paragraphe).** « Écrire ses expériences, c'est d'abord lutter contre l'oubli et l'effacement. Le narrateur de Maalouf sait ses cahiers voués à disparaître (« j'ai écrit pour le feu »), et pourtant il continue, « pitoyable Sisyphe » : l'acte d'écrire vaut pour lui-même, parce qu'il fixe l'instant avant qu'il ne s'efface. Bien des œuvres naissent de ce besoin de garder mémoire : dans son *Journal*, Anne Frank consigne jour après jour une expérience que l'Histoire menaçait d'engloutir. Mettre par écrit, c'est arracher un peu de soi au temps. »\n\n" +
                  "**Conclusion.** « Mettre par écrit ses expériences répond ainsi à des besoins essentiels : conserver une trace de ce qui fuit, mieux se comprendre en se relisant, et transmettre aux autres ce que l'on a vécu. Comme le narrateur de Maalouf, qui écrit « en dépit de tout », celui qui tient un journal fait de l'écriture une manière de résister à l'effacement. On peut se demander si les écrits numériques d'aujourd'hui, blogs et messageries, prolongent ce même besoin de se dire. »",
              },
              {
                type: "ctaBox",
                text: "Méthode bien en tête ? Testez-vous.",
                buttonLabel: "Lancer le Quiz éclair",
                targetTab: "quiz",
              },
            ],
          },
        ],
      },
      {
        id: "pratiquer",
        label: "Pratiquer",
        icon: "",
        tabs: [
          {
            id: "quiz",
            label: "Quiz éclair",
            icon: "",
            blocks: [
              {
                type: "callout",
                variant: "info",
                icon: "",
                title: "Avant de passer aux exercices",
                text: "9 questions rapides pour vérifier que le Cours et la Méthode sont bien ancrés. Le détail objectif par objectif est dans l'onglet Auto-évaluation.",
              },
              {
                type: "quizBlock",
                questions: [
                  { objectifId: "pd1", question: "En Partie 3 du M2, le travail demandé est :", options: ["un commentaire des procédés du texte", "un résumé du texte", "une réflexion argumentée répondant à une question posée sur le texte", "une dictée commentée"], correctIndex: 2, explanation: "Les sujets officiels posent une question de réflexion ; on y répond en s'appuyant sur le texte, sa culture et ses lectures." },
                  { objectifId: "pd1", question: "Dans une question de Partie 3, le premier élément à isoler est :", options: ["le nombre de lignes attendu", "le verbe ou la tournure de la question", "le nom de l'auteur", "le titre du texte"], correctIndex: 1, explanation: "Le verbe ou la tournure (« quel est l'intérêt », « dans quelle mesure ») indique ce qu'on doit faire et le type de plan." },
                  { objectifId: "pd3", question: "« Quel est l'intérêt de mettre par écrit ses expériences ? » appelle plutôt :", options: ["un plan dialectique", "un plan analytique (par aspects)", "un résumé", "une paraphrase"], correctIndex: 1, explanation: "« Quel est l'intérêt » demande d'explorer plusieurs aspects ou fonctions : c'est un plan analytique." },
                  { objectifId: "pd2", question: "Problématiser une question, c'est :", options: ["recopier la consigne en haut de la copie", "reformuler la question en un fil directeur", "résumer le texte support", "donner d'emblée son avis sans argument"], correctIndex: 1, explanation: "On transforme la question en une intention claire, sans recopier la consigne." },
                  { objectifId: "pd4", question: "Pour appuyer une idée, en Partie 3 du M2, on s'appuie :", options: ["uniquement sur le texte support", "uniquement sur sa culture", "sur le texte ET sur sa culture et ses lectures", "sur son opinion seule, sans exemple"], correctIndex: 2, explanation: "La consigne du M2 demande explicitement de mobiliser le texte, la culture, les lectures et la réflexion personnelle." },
                  { objectifId: "pd5", question: "Un bon développement de Partie 3 comporte généralement :", options: ["un seul axe", "deux ou trois axes", "cinq à six axes", "autant d'axes que de paragraphes du texte"], correctIndex: 1, explanation: "Deux ou trois axes solides : on creuse plutôt que de multiplier les parties survolées." },
                  { objectifId: "pd6", question: "Les trois temps d'une introduction sont, dans l'ordre :", options: ["annonce du plan, amorce, problématique", "amorce, problématique, annonce du plan", "problématique, conclusion, amorce", "citation, idée, analyse"], correctIndex: 1, explanation: "On entre en matière (amorce), on pose la question (problématique), puis on annonce le parcours (plan)." },
                  { objectifId: "pd7", question: "Un paragraphe argumenté s'organise autour de :", options: ["une idée directrice, un appui, une analyse", "trois citations à la suite", "un résumé du passage", "une opinion sans aucun appui"], correctIndex: 0, explanation: "Une idée, appuyée sur une citation ou une référence, puis analysée : c'est l'unité de base du développement." },
                  { objectifId: "pd8", question: "Une bonne conclusion :", options: ["recopie l'introduction", "répond à la problématique à partir des parties, puis ouvre brièvement", "pose une question vague", "ajoute une nouvelle partie"], correctIndex: 1, explanation: "Bilan qui répond à la problématique à partir de ce qu'on a démontré, puis ouverture mesurée." },
                ],
              },
              { type: "ctaBox", text: "Quiz terminé ? Direction l'Application.", buttonLabel: "Voir l'Application", targetTab: "appli" },
            ],
          },
          {
            id: "appli",
            label: "Application",
            icon: "",
            blocks: [
              { type: "callout", variant: "success", text: "Progression en 3 niveaux. Corrigez chaque exercice avant de passer au suivant." },
              { type: "niveauBanner", level: "echauffement", stars: "★☆☆", label: "Niveau 1 : Lire la question", sub: "Tournure, type de plan, problématique" },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "echauffement",
                title: "Exercice 1 : Analytique ou dialectique ?",
                objectifTag: "Type de plan",
                question: "Indiquez le type de plan appelé :\na) « En quoi le voyage forme-t-il celui qui le vit ? » · b) « Peut-on dire que le bonheur s'apprend ? » · c) « Quel est l'intérêt de lire des récits de vie ? » · d) « Dans quelle mesure la solitude est-elle un mal ? »",
                correction: [{ type: "line", text: "a) analytique · b) dialectique · c) analytique · d) dialectique. Repère : « en quoi / quel intérêt » → analytique ; « peut-on dire / dans quelle mesure » → dialectique." }],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "echauffement",
                title: "Exercice 2 : Reformuler en problématique",
                objectifTag: "Problématiser",
                question: "Transformez la question en une problématique :\n« Quel est l'intérêt de garder une correspondance écrite ? »",
                correction: [{ type: "line", text: "Par exemple : « Pourquoi conserver et relire les lettres que l'on a échangées ? » On garde la notion et on annonce une recherche de raisons, sans recopier la consigne." }],
              },
              { type: "niveauBanner", level: "n2", stars: "★★☆", label: "Niveau 2 : Trouver des axes et des appuis", sub: "Axes distincts, appui texte + culture" },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "n2",
                title: "Exercice 3 : Trois axes pour une réflexion",
                enonce: "Question : « Quel est l'intérêt, pour une personne, de raconter ses voyages ? »",
                question: "Proposez deux ou trois axes analytiques distincts.",
                correction: [
                  { type: "line", text: "Par exemple : **Axe 1** : revivre et fixer le souvenir · **Axe 2** : faire découvrir aux autres des lieux et des cultures · **Axe 3** : réfléchir sur soi à travers la rencontre de l'ailleurs." },
                  { type: "line", text: "Trois fonctions distinctes (pour soi, pour autrui, pour se connaître) : aucun axe ne recoupe l'autre." },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "n2",
                title: "Exercice 4 : Relier une référence à une idée",
                enonce: "Idée à défendre : « Écrire sa vie aide à se comprendre. »",
                question: "Citez une référence (œuvre ou auteur) et reliez-la à l'idée en une phrase.",
                correction: [
                  { type: "line", text: "Par exemple : « Dans ses *Confessions*, Rousseau entreprend de tout dire de lui pour se connaître : l'écriture de soi devient un examen de sa propre vie. »" },
                  { type: "note", text: "Toute référence pertinente et reliée convient (Montaigne, un journal intime, des mémoires...)." },
                ],
              },
              { type: "niveauBanner", level: "n3", stars: "★★★", label: "Niveau 3 : Plan détaillé et rédaction", sub: "Problématique, axes, appuis, introduction, conclusion" },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "n3",
                title: "Exercice 5 : Un plan détaillé de bout en bout",
                enonce: "Question : « Quel est l'intérêt de tenir un journal intime ? »",
                question: "Rédigez un plan détaillé : problématique, deux ou trois axes, et pour chaque axe un appui texte et un appui culture.",
                correction: [
                  { type: "line", text: "**Problématique** : pourquoi prendre le temps, chaque jour, de consigner sa vie par écrit ?" },
                  { type: "line", text: "**Axe 1, apaiser ses émotions** : appui texte (écrire « chaque soir » pour se soulager) · culture (le *Journal* d'Anne Frank, confident d'une adolescente)." },
                  { type: "line", text: "**Axe 2, garder une trace** : appui texte (la volonté de tout consigner) · culture (les mémoires, qui fixent une vie)." },
                  { type: "line", text: "**Axe 3, se comprendre** : appui texte (le retour sur soi du diariste) · culture (les *Essais* de Montaigne)." },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "n3",
                title: "Exercice 6 : Rédiger l'introduction et la conclusion",
                enonce: "Question : « Quel est l'intérêt de tenir un journal intime ? » Plan : Axe 1, apaiser ses émotions · Axe 2, garder une trace · Axe 3, se comprendre.",
                question: "Rédigez l'introduction (trois temps) et la conclusion (bilan + ouverture).",
                correction: [
                  { type: "line", text: "**Introduction** : « Tenir un journal, c'est se confier chaque soir à une page muette (amorce). On peut se demander ce qui pousse une personne à consigner ainsi sa vie (problématique). Nous verrons d'abord que le journal apaise les émotions, puis qu'il garde une trace du temps, enfin qu'il aide à se comprendre (annonce). »" },
                  { type: "line", text: "**Conclusion** : « Tenir un journal répond donc à un triple besoin : se soulager, se souvenir, se connaître. On peut se demander si les réseaux où l'on raconte sa vie aujourd'hui jouent le même rôle (ouverture). »" },
                ],
              },
            ],
          },
          {
            id: "crpe",
            label: "Type CRPE",
            icon: "",
            blocks: [
              { type: "callout", variant: "success", icon: "", text: "Ces exercices reprennent des **consignes réelles de l'épreuve M2** (sujets officiels, sourcés). Le badge ✦ signale un sujet officiel." },
              {
                type: "exerciceCard",
                variant: "annale",
                badge: "✦ Sujet officiel · session 2026 (Groupement 1)",
                title: "Exercice 1 : Construire le développement",
                enonce: "Texte support : Amin Maalouf, *Le Périple de Baldassare* (le narrateur tient son journal pendant l'incendie de Londres de 1666). Source : [sujets officiels du CRPE](https://www.devenirenseignant.gouv.fr/les-sujets-des-epreuves-ecrites-et-rapports-des-jurys-des-crpe-1163).",
                question: "Consigne (9 points) : « Quel est, selon vous, l'intérêt pour une personne de mettre par écrit ses expériences vécues ? » Construisez le plan détaillé (problématique, axes, appuis texte et culture).",
                correction: [{ type: "paragraph", text: "**Problématique** : pourquoi une personne éprouve-t-elle le besoin de consigner par écrit ce qu'elle a vécu ? **Axe 1, garder une trace contre l'oubli** : texte (« j'ai écrit pour le feu », le « pitoyable Sisyphe ») · culture (le *Journal* d'Anne Frank). **Axe 2, se comprendre soi-même** : texte (« rendre compte de tout ce qui m'arrivait ») · culture (les *Essais* de Montaigne, les *Confessions* de Rousseau). **Axe 3, transmettre et témoigner** : texte (écrire pour laisser un récit) · culture (les mémoires, les témoignages d'époque)." }],
              },
              {
                type: "exerciceCard",
                variant: "annale",
                badge: "✦ Sujet officiel · session 2025 (Groupement 1)",
                title: "Exercice 2 : Rédiger l'introduction",
                enonce: "Texte support : Marguerite Yourcenar (*Comment Wang-Fô fut sauvé*).",
                question: "Consigne : « En vous appuyant sur cette citation et le texte de Marguerite Yourcenar, sur votre culture, vos lectures et vos réflexions personnelles, vous interrogerez les liens que l'art entretient avec le réel. » Proposez une problématique, deux axes, et rédigez l'introduction.",
                correction: [{ type: "paragraph", text: "**Problématique** : l'art se contente-t-il de reproduire le réel, ou le transforme-t-il ? **Axe 1, l'art imite et donne à voir le réel** · **Axe 2, l'art le transforme et en révèle une autre vérité.** **Introduction** : « Dans le conte de Marguerite Yourcenar, un peintre est accusé de mentir sur le monde par sa peinture (amorce). On peut se demander quels liens l'art entretient avec le réel (problématique). Nous verrons d'abord que l'art imite le réel pour le donner à voir, puis qu'il le transforme pour en révéler une vérité plus profonde (annonce). »" }],
              },
            ],
          },
          {
            id: "cote-prof",
            label: "Côté prof",
            icon: "",
            blocks: [
              { type: "callout", variant: "warning", icon: "", text: "Ces exercices reproduisent des **erreurs fréquentes** en Partie 3. Les repérer et corriger rigoureusement est une compétence valorisée au concours." },
              {
                type: "exerciceCard",
                variant: "err-type",
                title: "Exercice 1 · Le développement transformé en commentaire",
                enonce: "Pour « Quel est l'intérêt de mettre par écrit ses expériences ? », un candidat écrit : « 1) L'auteur emploie la première personne. 2) Il compare le narrateur à Sisyphe. 3) Le champ lexical du feu domine. »",
                question: "Identifiez et corrigez le défaut.",
                correction: [{ type: "checklist", items: [
                  { text: "Le candidat commente les procédés du texte au lieu de répondre à la question de réflexion", bad: true },
                  { text: "La Partie 3 n'est pas un commentaire : le texte est un appui, pas l'objet de l'analyse" },
                  { text: "Attendu : des axes qui répondent à la question (garder une trace, se comprendre, transmettre), appuyés sur le texte ET la culture" },
                ] }],
              },
              {
                type: "exerciceCard",
                variant: "err-type",
                title: "Exercice 2 · La culture absente",
                enonce: "Un candidat traite tout le sujet en ne citant que le texte de Maalouf, sans aucune autre référence.",
                question: "Identifiez et corrigez le défaut.",
                correction: [{ type: "checklist", items: [
                  { text: "La consigne du M2 demande explicitement la culture et les lectures : s'en tenir au texte est incomplet", bad: true },
                  { text: "Chaque axe gagne à être appuyé aussi sur une œuvre extérieure reliée à l'idée" },
                  { text: "Attendu : par exemple le Journal d'Anne Frank, les Confessions de Rousseau, en lien avec les fonctions de l'écriture de soi" },
                ] }],
              },
              {
                type: "exerciceCard",
                variant: "err-type",
                title: "Exercice 3 · La référence plaquée",
                enonce: "Un candidat écrit : « L'écriture aide à se souvenir. D'ailleurs, Victor Hugo était un grand écrivain. »",
                question: "Identifiez et corrigez le défaut.",
                correction: [{ type: "checklist", items: [
                  { text: "La référence est plaquée et sans lien avec l'idée", bad: true },
                  { text: "Une référence ne vaut que reliée à l'idée par une analyse" },
                  { text: "Attendu : une œuvre précise reliée, par exemple « le Journal d'Anne Frank garde la mémoire d'une expérience que la guerre menaçait d'effacer »" },
                ] }],
              },
            ],
          },
        ],
      },
      {
        id: "reviser",
        label: "Réviser",
        icon: "",
        tabs: [
          {
            id: "flash",
            label: "Flashcards",
            icon: "",
            blocks: [
              { type: "callout", variant: "info", icon: "", text: "Cliquez sur chaque carte pour révéler la réponse. Essayez de répondre dans votre tête avant." },
              {
                type: "flashcardDeck",
                cards: [
                  { question: "Quelle est la nature de la Partie 3 au M2 ?", answer: "Une **réflexion argumentée** suscitée par le texte : on répond à une question en s'appuyant sur le texte, sa culture, ses lectures et sa réflexion personnelle.", astuce: "⚠️ Ce n'est ni un commentaire de procédés, ni un résumé." },
                  { question: "Quels trois éléments isoler dans la question ?", answer: "Le **verbe / la tournure**, la **notion clé** et **ce qu'il faut mobiliser** (texte + culture).", astuce: "💡 La notion clé déclenche aussitôt la recherche de références." },
                  { question: "Plan analytique ou dialectique : comment choisir ?", answer: "**Analytique** pour « quel intérêt », « en quoi ».\n**Dialectique** pour « dans quelle mesure », « peut-on dire que ».", astuce: "💡 Le plan découle de la tournure de la question." },
                  { question: "Sur quoi appuyer chaque idée au M2 ?", answer: "Sur **deux sources** : un appui dans le **texte** et un appui dans votre **culture** (œuvre, auteur, exemple précis).", astuce: "⚠️ La consigne du M2 demande explicitement votre culture et vos lectures." },
                  { question: "Quels sont les trois temps de l'introduction ?", answer: "1) **Amorce** · 2) **Problématique** · 3) **Annonce du plan**.", astuce: "💡 L'amorce parle du sujet précis, jamais d'une généralité." },
                  { question: "Comment se construit un paragraphe argumenté ?", answer: "Une **idée directrice**, un **appui** (texte ou référence), une **analyse** qui relie l'appui à l'idée.", astuce: "⚠️ Une citation ou une référence sans analyse ne démontre rien." },
                  { question: "Que doit faire la conclusion ?", answer: "Répondre à la problématique à partir des parties démontrées (bilan), puis proposer une ouverture mesurée.", astuce: "⚠️ Ne pas recopier l'introduction ni reposer la question." },
                  { question: "L'erreur la plus grave en Partie 3 ?", answer: "Traiter le sujet comme un commentaire du texte ou le paraphraser, au lieu de répondre à la question de réflexion.", astuce: "💡 Recopier la question en haut du brouillon et y revenir à chaque paragraphe." },
                ],
              },
            ],
          },
          {
            id: "memo",
            label: "Mémo",
            icon: "",
            blocks: [
              {
                type: "mindmapLite",
                center: { title: "Produire", subtitle: "le développement (M2)" },
                branches: [
                  { title: "Analyser la question", lines: ["Verbe / tournure", "Notion clé", "Ce qu'il faut mobiliser"], variant: "blue" },
                  { title: "Plan", lines: ["Analytique : quel intérêt, en quoi", "Dialectique : dans quelle mesure", "2 ou 3 axes distincts"], variant: "green" },
                  { title: "Arguments", lines: ["Appui texte (citation)", "Appui culture (œuvre, auteur)", "Une analyse qui relie"], variant: "green" },
                  { title: "Rédiger", lines: ["Intro : amorce, problématique, annonce", "Paragraphe : idée, appui, analyse", "Conclusion : bilan, ouverture"], variant: "green" },
                  { title: "Pièges classiques", lines: ["Commentaire de procédés", "Culture absente ou plaquée", "Paraphrase du texte"], variant: "yellow" },
                  { title: "Renvois", lines: ["Cohérence, connecteurs → notion 13", "Procédés, lexique → notions 16-18", "Culture et références → notion 20"], variant: "purple", dashed: true },
                ],
              },
            ],
          },
          { id: "autoeval", label: "Auto-évaluation", icon: "", blocks: [{ type: "autoEvalChecklist", items: OBJECTIFS_M2 }] },
        ],
      },
    ],
  };
}

// ===========================================================================
// L3 — Développement court ancré sur le texte (épreuve commune, temps limité)
// ===========================================================================

const OBJECTIFS_L3 = [
  { id: "pl1", label: "J'analyse la question, souvent ancrée sur le texte (« qu'est-ce qui rend cette page... »)" },
  { id: "pl2", label: "Je transforme la question en une problématique qui reste reliée au texte" },
  { id: "pl3", label: "Je bâtis un plan court (deux axes le plus souvent), distinct et équilibré" },
  { id: "pl4", label: "J'appuie chaque idée sur le texte (et, en appoint, sur une lecture, y compris du lycée)" },
  { id: "pl5", label: "Je rédige une introduction brève en trois temps : amorce, problématique, annonce" },
  { id: "pl6", label: "Je construis un paragraphe argumenté : idée directrice, citation du texte, analyse" },
  { id: "pl7", label: "Je conclus (bilan, ouverture) et je lie mes parties" },
  { id: "pl8", label: "Je gère mon temps (le français partage l'épreuve avec les maths) et je relis" },
];

function ficheProduireDeveloppementL3Builder(): Fiche {
  return {
    slug: "produire-le-developpement",
    matiere: "francais",
    numero: 19,
    partie: "Partie 3 : Développement rédigé",
    title: "Produire le développement rédigé",
    subtitle:
      "Analyser une question posée sur le texte, problématiser, bâtir un plan court, puis rédiger une réflexion argumentée d'une trentaine de lignes, sous contrainte de temps",
    badges: [
      { label: "★★★ Le cœur de la Partie 3", variant: "hot" },
      { label: "Épreuve commune français + maths · 4 h", variant: "info" },
    ],
    metaTitle:
      "Produire le développement rédigé (L3) : Partie 3 du CRPE bac+3 · Fiche de révision | Maitrizz",
    metaDescription:
      "Fiche CRPE bac+3 (L3) sur la Partie 3 (expression écrite) : analyser une question posée sur le texte, formuler une problématique, bâtir un plan court, rédiger un développement structuré et argumenté d'une trentaine de lignes sous contrainte de temps. Méthode déroulée sur le sujet 0 officiel (Perrault), exercices d'après les sujets réels, flashcards et auto-évaluation.",
    tabGroups: [
      {
        id: "decouvrir",
        label: "Découvrir",
        icon: "",
        tabs: [
          {
            id: "vue-d-ensemble",
            label: "Vue d'ensemble",
            icon: "",
            blocks: [
              {
                type: "sommaireApercu",
                title: "Le programme en 5 étapes",
                intro:
                  "En L3, la dernière partie de l'épreuve de français vous demande de répondre à une question posée sur le texte par un développement structuré et argumenté d'une trentaine de lignes. C'est court, ancré sur le texte, et le temps est compté (l'épreuve est partagée avec les mathématiques). Voici la chaîne complète.",
                items: [
                  { number: "①", title: "Analyser la question", text: "Repérer ce que la question demande à propos du texte : c'est ce qui empêche le hors-sujet." },
                  { number: "②", title: "Problématiser", text: "Transformer la question en fil directeur, sans s'éloigner du texte." },
                  { number: "③", title: "Bâtir un plan court", text: "Deux axes le plus souvent, distincts et équilibrés, chacun appuyé sur le texte." },
                  { number: "④", title: "Rédiger bref", text: "Introduction, deux paragraphes argumentés, conclusion : une trentaine de lignes." },
                  { number: "⑤", title: "Gérer le temps et relire", text: "Ne pas déborder sur les maths, garder un moment pour corriger la langue (elle est notée)." },
                ],
              },
            ],
          },
          {
            id: "cours",
            label: "Cours",
            icon: "",
            blocks: [
              {
                type: "callout",
                variant: "info",
                icon: "",
                title: "Avant de commencer",
                text:
                  "Au concours **L3** (bac+3), le français est intégré à une épreuve commune avec les mathématiques : **4 heures** au total, dont environ **2 heures** estimées pour le français. La partie « expression écrite » vaut **10 points** (sur les 20 du français) : à partir d'une question posée sur un texte (500 mots maximum), vous rédigez un développement « structuré et argumenté » d'**une trentaine de lignes**. " +
                  "Ce **n'est pas un commentaire** : c'est une **réflexion argumentée** ancrée sur le texte, que vos lectures (y compris du **lycée**, 2de et 1re) peuvent éclairer. Cadre fixé par l'[arrêté du 17 avril 2025](https://www.legifrance.gouv.fr/search/all?query=Arr%C3%AAt%C3%A9%20du%2017%20avril%202025%20CRPE%20externe%20bac%2B3).",
              },
              {
                type: "callout",
                variant: "warning",
                icon: "⚠️",
                title: "Ce que le sujet 0 demande vraiment",
                text:
                  "La question porte souvent **sur le texte lui-même**. Exemple, sujet 0 officiel : « **Qu'est-ce qui rend cette page d'un conte du XVIIe siècle toujours significative dans le cadre d'une réflexion sur l'égalité entre homme et femme ?** Votre réponse prendra la forme d'un développement structuré et argumenté d'une trentaine de lignes. » " +
                  "Le texte est au centre ; on en part pour réfléchir. Voir les [exemples de sujets bac+3](https://www.devenirenseignant.gouv.fr/exemples-de-sujets-des-concours-externes-bac3-de-recrutement-d-enseignants-1405).",
              },
              {
                type: "subsection",
                number: "①",
                title: "Analyser la question",
                blocks: [
                  {
                    type: "paragraph",
                    text: "On lit la question comme un contrat. Trois éléments à isoler : le **verbe / la tournure** (ce qu'on doit faire), la **notion clé** (sur quoi porte la réflexion) et le **lien au texte** (la question part presque toujours du texte : « cette page », « ce passage », « ce personnage »).",
                  },
                  {
                    type: "table",
                    title: "Les tournures de question et le plan qu'elles appellent",
                    headers: ["Tournure de la question", "Ce qu'elle demande", "Plan appelé"],
                    rows: [
                      ["Qu'est-ce qui rend ce texte... ? En quoi cette page... ?", "Montrer ce qui, dans le texte, justifie une qualité", "Analytique (par aspects du texte)"],
                      ["Quel est l'intérêt de... ? Pourquoi... ?", "Explorer des aspects, des raisons", "Analytique"],
                      ["Dans quelle mesure... ? Peut-on dire que... ?", "Discuter, nuancer", "Dialectique"],
                    ],
                  },
                  {
                    type: "callout",
                    variant: "info",
                    icon: "💡",
                    title: "Rester accroché au texte",
                    text: "En L3, le texte est votre première réserve d'arguments. Avant de chercher loin, demandez-vous : qu'est-ce que ce passage précis montre, et comment ? Une lecture personnelle (un livre lu au lycée, par exemple) peut éclairer la réflexion, mais elle vient en appoint, pas à la place du texte (voir [références mobilisables](fiche:culture-litteraire)).",
                  },
                ],
              },
              {
                type: "subsection",
                number: "②",
                title: "Problématiser et bâtir un plan court",
                blocks: [
                  {
                    type: "paragraph",
                    text: "**Problématiser**, c'est reformuler la question en une intention claire, qui reste reliée au texte. On ne recopie pas la consigne. Vu la longueur attendue (une trentaine de lignes), **deux axes** suffisent le plus souvent : inutile d'en multiplier.",
                  },
                  {
                    type: "notionCardGrid",
                    columns: 1,
                    cards: [
                      {
                        title: "Le plan analytique (par aspects)",
                        definition: "Chaque axe montre un aspect du texte qui répond à la question. C'est le plan le plus fréquent en L3, car la question part du texte.",
                        exemples: [
                          "Sujet 0 : « Qu'est-ce qui rend cette page significative sur l'égalité homme-femme ? » → Axe 1 : un rapport de domination donné à voir · Axe 2 : une portée qui dépasse l'époque.",
                        ],
                        test: "À choisir quand la question demande ce qui, dans le texte, justifie une idée (« qu'est-ce qui rend », « en quoi »).",
                      },
                      {
                        title: "Le plan dialectique (nuancé)",
                        definition: "On examine une affirmation : d'abord ce qui la confirme, ensuite ce qui la nuance, puis une position équilibrée.",
                        exemples: ["Question : « Peut-on dire que ce personnage est entièrement victime ? » → Axe 1 : en quoi il l'est · Axe 2 : ce qui nuance."],
                        test: "À choisir quand la question invite à discuter (« dans quelle mesure », « peut-on dire que »).",
                      },
                    ],
                  },
                  {
                    type: "callout",
                    variant: "info",
                    icon: "💡",
                    title: "Deux axes solides valent mieux que trois bâclés",
                    text: "Une trentaine de lignes, c'est environ une introduction, deux paragraphes et une conclusion. Mieux vaut deux axes bien appuyés sur le texte qu'un plan en trois parties survolées faute de temps.",
                  },
                ],
              },
              {
                type: "subsection",
                number: "③",
                title: "Trouver les arguments dans le texte",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Chaque axe doit être **distinct**, **équilibré** et **utile**. À l'intérieur, on range les idées en sous-parties, chacune **appuyée sur le texte** (une citation courte ou un renvoi précis). Une lecture personnelle peut renforcer un axe, mais le texte reste la base.",
                  },
                  {
                    type: "bullets",
                    items: [
                      "**Une idée par sous-partie**, jamais un simple résumé du passage.",
                      "**Un appui dans le texte** : une citation courte entre guillemets ou un renvoi précis (le mot, la phrase).",
                      "**En appoint, une lecture** (un livre, y compris du lycée) reliée à l'idée, si elle l'éclaire.",
                      "**Une progression** : du plus visible au plus subtil.",
                    ],
                  },
                  {
                    type: "callout",
                    variant: "info",
                    icon: "💡",
                    title: "Intégrer une lecture (en appoint)",
                    text: "Si une lecture éclaire votre idée, intégrez-la en une phrase : [constat sur le texte] + [référence] + [lien explicite]. Dites toujours le lien, et ne citez que ce dont vous êtes sûr. Un recueil de références classées par thème est proposé au [référentiel de références mobilisables](fiche:culture-litteraire).",
                  },
                  {
                    type: "formulaBlock",
                    title: "La trame d'un plan détaillé (court)",
                    lines: [
                      "Problématique : en quoi / qu'est-ce qui rend ... ?",
                      "Axe 1, [idée directrice] : appui texte (+ éventuelle lecture)",
                      "Axe 2, [idée directrice] : appui texte (+ éventuelle lecture)",
                    ],
                    note: "On pose ce squelette au brouillon avant d'écrire, mais sans y passer trop de temps : l'épreuve est partagée avec les maths.",
                  },
                  {
                    type: "callout",
                    variant: "warning",
                    icon: "⚠️",
                    title: "Ni paraphrase, ni hors-sujet",
                    text: "Résumer le texte ne répond pas à la question ; partir trop loin du texte non plus. On organise par idées qui répondent à la question, chacune ancrée dans le texte.",
                  },
                ],
              },
              {
                type: "subsection",
                number: "④",
                title: "Rédiger : introduction, paragraphes, conclusion",
                blocks: [
                  {
                    type: "notionCardGrid",
                    columns: 1,
                    cards: [
                      {
                        title: "L'introduction (brève) en trois temps",
                        definition: "Une amorce qui entre par le texte, la problématique reformulée, l'annonce du plan, en deux ou trois phrases.",
                        exemples: ["« Dans cette page de La Barbe bleue, Perrault met en scène une épouse menacée de mort par son mari. On peut se demander en quoi cette scène éclaire encore l'égalité entre femmes et hommes. Nous verrons d'abord..., puis... »"],
                        test: "L'amorce parle du texte précis, jamais d'une généralité.",
                      },
                      {
                        title: "Le paragraphe argumenté",
                        definition: "Une idée directrice, une citation courte du texte, une analyse qui relie la citation à l'idée et à la problématique.",
                        exemples: ["Idée → citation → analyse : « La femme est soumise : « plus pâle que la mort », elle « se jeta aux pieds de son mari ». Sa terreur dit l'inégalité du rapport. »"],
                        test: "Une idée par paragraphe ; une citation sans analyse ne démontre rien.",
                      },
                      {
                        title: "La conclusion (brève)",
                        definition: "Un bilan qui répond à la problématique à partir des axes, puis une ouverture mesurée.",
                        exemples: ["« Cette page reste significative parce qu'elle expose un rapport de domination que seule la solidarité vient contrer. Elle invite à réfléchir, aujourd'hui encore, aux violences faites aux femmes. »"],
                        test: "La conclusion ne recopie pas l'introduction : elle répond à la question.",
                      },
                    ],
                  },
                  {
                    type: "bullets",
                    items: [
                      "**Connecteurs** et **transition** entre les deux parties (voir [cohérence textuelle](fiche:coherence-textuelle)).",
                      "**Présent** de l'analyse (« le texte montre », pas « le texte montra »).",
                      "**Une trentaine de lignes** : on va à l'essentiel, sans délayer.",
                    ],
                  },
                ],
              },
              {
                type: "piegeCard",
                variant: "rouge",
                title: "Piège n°1 · transformer le développement en commentaire ou en paraphrase",
                badge: "Erreur sur la nature de l'épreuve",
                faux: "Relever les procédés du texte, ou raconter la page ligne à ligne (« d'abord il dit que..., ensuite... »).",
                vrai: "Répondre à la **question** posée, en organisant par idées appuyées sur le texte.",
                methode: "Recopier la question en haut du brouillon et vérifier que chaque paragraphe y répond.",
              },
              {
                type: "piegeCard",
                variant: "rouge",
                title: "Piège n°2 · le développement trop long ou inachevé",
                badge: "Spécifique au L3",
                faux: "Rédiger trois grandes parties, déborder sur le temps des maths, ou ne pas finir la conclusion.",
                vrai: "Un développement court et complet : une trentaine de lignes, deux axes, une conclusion bouclée.",
                methode: "Se fixer une durée pour le français (environ 2 h) et s'y tenir ; viser deux axes.",
              },
              {
                type: "piegeCard",
                variant: "orange",
                title: "Piège n°3 · s'éloigner du texte",
                badge: "Cas fréquent",
                faux: "Partir dans des généralités ou des souvenirs personnels sans jamais revenir au texte.",
                vrai: "Chaque idée s'ancre dans le texte par une citation ou un renvoi précis.",
                methode: "Pour chaque sous-partie, vérifier qu'il y a un appui tiré du texte.",
              },
              {
                type: "piegeCard",
                variant: "bleu",
                title: "Piège n°4 · l'introduction qui récite la consigne",
                badge: "Réflexe à corriger",
                faux: "« Je vais répondre à la question : qu'est-ce qui rend cette page significative. »",
                vrai: "Une amorce, la question reformulée en problématique, puis l'annonce du plan.",
                methode: "Reformuler la question avec ses propres mots, jamais la recopier telle quelle.",
              },
              {
                type: "ctaBox",
                text: "Cours bien en tête ? Passez à la méthode, déroulée sur le sujet 0 officiel.",
                buttonLabel: "Voir la méthode pas-à-pas",
                targetTab: "methode",
              },
            ],
          },
          {
            id: "methode",
            label: "Méthode",
            icon: "",
            blocks: [
              {
                type: "callout",
                variant: "success",
                icon: "",
                title: "La méthode déroulée sur le sujet 0 officiel (bac+3)",
                text:
                  "Prenons le sujet 0 de L3 : le texte est un extrait de **Charles Perrault, *La Barbe bleue*** (le mari, de retour, découvre que sa femme a ouvert le cabinet interdit et la condamne à mort ; la sœur Anne guette l'arrivée des frères). " +
                  "La consigne (10 points) est, mot pour mot : « **Qu'est-ce qui rend cette page d'un conte du XVIIe siècle toujours significative dans le cadre d'une réflexion sur l'égalité entre homme et femme ?** Votre réponse prendra la forme d'un développement structuré et argumenté d'une trentaine de lignes. » " +
                  "Source : [exemples de sujets bac+3](https://www.devenirenseignant.gouv.fr/exemples-de-sujets-des-concours-externes-bac3-de-recrutement-d-enseignants-1405).",
              },
              {
                type: "rappelExpress",
                title: "Rappel express : ce que le jury attend (L3)",
                blocks: [
                  {
                    type: "formulaBlock",
                    lines: [
                      "Le développement répond à la question, en restant ancré sur le texte.",
                      "Deux axes distincts, appuyés sur des citations courtes du texte.",
                      "Introduction, deux paragraphes, conclusion : une trentaine de lignes.",
                      "Du temps gardé pour les maths et pour relire la langue.",
                    ],
                  },
                  { type: "callout", variant: "warning", text: "⚠️ L'épreuve est partagée avec les maths : un développement clair et complet, pas un texte interminable." },
                ],
              },
              {
                type: "methodeGroup",
                number: "①",
                title: "Analyser la question",
                intro: "**Sujet 0 :** « Qu'est-ce qui rend cette page d'un conte du XVIIe siècle toujours significative dans le cadre d'une réflexion sur l'égalité entre homme et femme ? »",
                steps: [
                  { number: "1", text: "**Repérer la tournure** : « Qu'est-ce qui rend cette page significative... » appelle de montrer ce qui, dans le texte, le justifie : plan analytique ancré sur le texte.", example: { lines: ["« qu'est-ce qui rend » → aspects du texte à montrer → plan par aspects"] } },
                  { number: "2", text: "**Isoler la notion clé** : l'égalité (ou l'inégalité) entre les femmes et les hommes, telle que la scène la donne à voir.", example: { lines: ["notion clé : rapport homme / femme dans cette page"] } },
                  { number: "💡", text: "**Relier au texte** : repérer dans le passage ce qui touche au rapport entre les deux personnages.", warn: "⚠️ La question part du texte : on ne traite pas l'égalité en général, mais à partir de cette page." },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                title: "Checkpoint : à vous de jouer",
                badge: "30 secondes",
                question: "La question demande-t-elle de parler de l'égalité en général, ou à partir du texte ?",
                correction: [
                  { type: "line", text: "**À partir du texte** : « qu'est-ce qui rend **cette page** significative ». On montre ce que la scène de Perrault donne à voir, avant d'élargir." },
                  { type: "note", text: "Bien vu le lien au texte ? Sinon, revoyez l'étape ①." },
                ],
              },
              {
                type: "methodeGroup",
                number: "②",
                title: "Problématiser et bâtir un plan court",
                intro: "**Objectif :** transformer la question en fil directeur et arrêter deux axes.",
                steps: [
                  { number: "1", text: "**Formuler la problématique** en une phrase, reliée au texte.", example: { lines: ["« En quoi cette scène ancienne éclaire-t-elle encore la question de l'égalité entre femmes et hommes ? »"] } },
                  { number: "2", text: "**Arrêter deux axes** (vu la longueur attendue).", example: { lines: ["Axe 1 : un rapport de domination donné à voir · Axe 2 : une portée toujours actuelle"] } },
                  { number: "💡", text: "**Vérifier que les axes répondent à la question** et se distinguent.", warn: "⚠️ Deux axes qui disent la même chose : il n'y en a qu'un." },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                title: "Checkpoint : à vous de jouer",
                badge: "30 secondes",
                question: "Pourquoi deux axes plutôt que trois pour ce sujet ?",
                correction: [
                  { type: "line", text: "Parce que le développement attendu fait **une trentaine de lignes** : deux axes bien appuyés sur le texte tiennent dans ce format, trois seraient survolés." },
                  { type: "note", text: "Compris la contrainte de longueur ? Direction l'étape ③." },
                ],
              },
              {
                type: "methodeGroup",
                number: "③",
                title: "Trouver les arguments dans le texte",
                intro: "**Objectif :** appuyer chaque axe sur des citations courtes du passage.",
                steps: [
                  { number: "1", text: "**Pour l'axe 1 (domination)** : relever ce qui montre le pouvoir du mari et la soumission de la femme.", example: { lines: ["« Il faut mourir, Madame » · « plus pâle que la mort » · « se jeta aux pieds de son mari »"] } },
                  { number: "2", text: "**Pour l'axe 2 (portée actuelle)** : relever ce qui dépasse l'anecdote (la solidarité, l'appel au secours).", example: { lines: ["« Anne, ma sœur Anne, ne vois-tu rien venir ? » (l'attente des frères qui sauveront l'héroïne)"] } },
                  { number: "💡", text: "**Relier chaque citation à l'idée** : la citation ne vaut que par l'analyse.", warn: "⚠️ En appoint seulement : une lecture personnelle peut éclairer, mais le texte reste la base." },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                title: "Checkpoint : à vous de jouer",
                badge: "30 secondes",
                question: "Quelle citation montre le mieux la domination du mari ?",
                correction: [
                  { type: "line", text: "« **Il faut mourir, Madame** » : le mari s'arroge un pouvoir de vie et de mort sur sa femme. La soumission de celle-ci (« se jeta à ses pieds ») complète le tableau." },
                  { type: "note", text: "Citation pertinente reliée à l'idée ? Direction le dernier checkpoint." },
                ],
              },
              {
                type: "methodeGroup",
                number: "④",
                title: "Rédiger et relier",
                intro: "**Objectif :** un développement bref et complet (une trentaine de lignes).",
                steps: [
                  { number: "1", text: "**Rédiger l'introduction** brève en trois temps (amorce par le texte, problématique, annonce).", example: { lines: ["amorce : Perrault met en scène une épouse menacée · puis problématique · puis annonce des deux axes"] } },
                  { number: "2", text: "**Rédiger deux paragraphes** (idée → citation → analyse) reliés par une transition.", example: { lines: ["« Cette page met d'abord en scène un rapport de domination... » puis « Mais cette scène garde aussi une portée actuelle. »"] } },
                  { number: "💡", text: "**Conclure** brièvement (bilan + ouverture), puis **relire** et garder du temps pour les maths.", warn: "⚠️ Relire la langue : accords ([accord du participe passé](fiche:accord-participe-passe)), ponctuation, homophones." },
                ],
              },
              {
                type: "callout",
                variant: "success",
                icon: "",
                title: "Réponse attendue (formulation modèle), au format du concours",
                text:
                  "**Introduction.** « Dans cette page de *La Barbe bleue*, Charles Perrault met en scène une épouse que son mari condamne à mort pour avoir désobéi. On peut se demander en quoi cette scène ancienne éclaire encore la question de l'égalité entre les femmes et les hommes. Nous verrons d'abord qu'elle donne à voir un rapport de domination, puis qu'elle garde, par là, une portée toujours actuelle. »\n\n" +
                  "**Développement (premier paragraphe).** « Cette page met d'abord en scène un rapport de pure domination. Le mari détient sur sa femme un pouvoir de vie et de mort : « Il faut mourir, Madame », lui ordonne-t-il, et l'épouse, « plus pâle que la mort », « se jeta aux pieds de son mari » pour implorer son pardon. La terreur et la soumission de la femme face à l'autorité absolue de l'homme rendent visible une inégalité radicale entre les deux personnages. »\n\n" +
                  "**Conclusion.** « Cette page reste donc significative parce qu'elle expose, sous la forme d'un conte, un rapport de domination et de violence d'un homme sur une femme, que seule la solidarité (la sœur Anne, les frères) vient contrer. Elle invite à réfléchir, aujourd'hui encore, aux violences faites aux femmes et au chemin qui reste vers l'égalité. »",
              },
              {
                type: "ctaBox",
                text: "Méthode bien en tête ? Testez-vous.",
                buttonLabel: "Lancer le Quiz éclair",
                targetTab: "quiz",
              },
            ],
          },
        ],
      },
      {
        id: "pratiquer",
        label: "Pratiquer",
        icon: "",
        tabs: [
          {
            id: "quiz",
            label: "Quiz éclair",
            icon: "",
            blocks: [
              {
                type: "callout",
                variant: "info",
                icon: "",
                title: "Avant de passer aux exercices",
                text: "8 questions rapides pour vérifier que le Cours et la Méthode sont bien ancrés. Le détail objectif par objectif est dans l'onglet Auto-évaluation.",
              },
              {
                type: "quizBlock",
                questions: [
                  { objectifId: "pl1", question: "En L3, la question de la dernière partie porte le plus souvent :", options: ["sur un thème général sans rapport avec le texte", "sur le texte (« qu'est-ce qui rend cette page... »)", "sur la grammaire du texte", "sur les mathématiques"], correctIndex: 1, explanation: "La question part presque toujours du texte : on réfléchit à partir de lui." },
                  { objectifId: "pl1", question: "Le travail demandé en L3 est :", options: ["un commentaire des procédés", "un résumé du texte", "une réflexion argumentée répondant à une question sur le texte", "une dictée"], correctIndex: 2, explanation: "On répond à une question par un développement structuré et argumenté, ancré sur le texte." },
                  { objectifId: "pl3", question: "Vu la longueur attendue (une trentaine de lignes), on vise le plus souvent :", options: ["un seul axe", "deux axes", "quatre à cinq axes", "autant d'axes que de paragraphes du texte"], correctIndex: 1, explanation: "Deux axes bien appuyés tiennent dans une trentaine de lignes ; trois seraient survolés." },
                  { objectifId: "pl4", question: "En L3, chaque idée s'appuie d'abord :", options: ["sur une opinion personnelle seule", "sur le texte (citation ou renvoi précis)", "sur un résumé du passage", "sur rien de particulier"], correctIndex: 1, explanation: "Le texte est la première réserve d'arguments ; une lecture peut venir en appoint." },
                  { objectifId: "pl2", question: "Problématiser, c'est :", options: ["recopier la consigne", "reformuler la question en un fil directeur relié au texte", "résumer le texte", "donner son avis sans argument"], correctIndex: 1, explanation: "On transforme la question en intention claire, sans recopier la consigne et sans quitter le texte." },
                  { objectifId: "pl5", question: "Les trois temps de l'introduction sont, dans l'ordre :", options: ["annonce du plan, amorce, problématique", "amorce, problématique, annonce du plan", "problématique, conclusion, amorce", "citation, idée, analyse"], correctIndex: 1, explanation: "Amorce (par le texte), problématique, puis annonce du plan." },
                  { objectifId: "pl6", question: "Un paragraphe argumenté s'organise autour de :", options: ["une idée, une citation du texte, une analyse", "trois citations à la suite", "un résumé du passage", "une opinion sans appui"], correctIndex: 0, explanation: "Une idée, appuyée sur une citation courte du texte, puis analysée." },
                  { objectifId: "pl8", question: "Pourquoi gérer son temps en L3 ?", options: ["ce n'est pas utile", "parce que l'épreuve est partagée avec les mathématiques", "pour écrire le plus long possible", "pour recopier la consigne"], correctIndex: 1, explanation: "Le français partage les 4 h avec les maths : un développement complet mais pas interminable, et du temps gardé pour relire." },
                ],
              },
              { type: "ctaBox", text: "Quiz terminé ? Direction l'Application.", buttonLabel: "Voir l'Application", targetTab: "appli" },
            ],
          },
          {
            id: "appli",
            label: "Application",
            icon: "",
            blocks: [
              { type: "callout", variant: "success", text: "Progression en 3 niveaux. Corrigez chaque exercice avant de passer au suivant." },
              { type: "niveauBanner", level: "echauffement", stars: "★☆☆", label: "Niveau 1 : Lire la question", sub: "Tournure, lien au texte, problématique" },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "echauffement",
                title: "Exercice 1 : La question part-elle du texte ?",
                objectifTag: "Analyser",
                question: "Pour chaque question, dites si elle part du texte ou d'un thème général :\na) « Qu'est-ce qui rend ce portrait émouvant ? » · b) « Le bonheur est-il un but ? » · c) « En quoi ce passage critique-t-il la société ? »",
                correction: [{ type: "line", text: "a) du texte (« ce portrait ») · b) thème général (rare en L3) · c) du texte (« ce passage »). En L3, on est presque toujours dans le cas a) ou c) : on part du texte." }],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "echauffement",
                title: "Exercice 2 : Reformuler en problématique",
                objectifTag: "Problématiser",
                question: "Transformez la consigne en une problématique :\n« Qu'est-ce qui rend ce passage inquiétant ? »",
                correction: [{ type: "line", text: "Par exemple : « Par quels moyens ce passage installe-t-il un climat inquiétant ? » On garde le lien au texte et on annonce une recherche de moyens." }],
              },
              { type: "niveauBanner", level: "n2", stars: "★★☆", label: "Niveau 2 : Deux axes appuyés sur le texte", sub: "Axes distincts, citations" },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "n2",
                title: "Exercice 3 : Deux axes pour une page",
                enonce: "Question : « Qu'est-ce qui rend ce passage émouvant ? » Le texte décrit les adieux d'un enfant à ses grands-parents.",
                question: "Proposez deux axes distincts, chacun rattaché à un type d'appui du texte.",
                correction: [
                  { type: "line", text: "Par exemple : **Axe 1** : les gestes et les paroles de la séparation (ce que font et disent les personnages) · **Axe 2** : le regard de l'enfant et ses émotions (ce qu'il ressent)." },
                  { type: "line", text: "Deux entrées distinctes (les faits ; le ressenti), chacune appuyée sur des citations du texte." },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "n2",
                title: "Exercice 4 : Un paragraphe ancré sur le texte",
                enonce: "Idée à défendre : « La scène montre la peur du personnage. » Texte : le personnage « tremble », « n'ose plus bouger », « retient son souffle ».",
                question: "Rédigez le paragraphe (idée, citation, analyse).",
                correction: [{ type: "line", text: "Exemple : « La scène donne d'abord à voir la peur du personnage. Il « tremble », « n'ose plus bouger », « retient son souffle » : ces réactions du corps, accumulées, traduisent une frayeur qui le paralyse. Le texte ne dit pas la peur, il la montre par les gestes. »" }],
              },
              { type: "niveauBanner", level: "n3", stars: "★★★", label: "Niveau 3 : Développement complet (trentaine de lignes)", sub: "Plan court, introduction, conclusion" },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "n3",
                title: "Exercice 5 : Plan court et introduction",
                enonce: "Question : « En quoi ce passage rend-il la ville oppressante ? » Le texte décrit des rues étroites, sombres, une foule pressée.",
                question: "Proposez une problématique, deux axes, et rédigez l'introduction.",
                correction: [
                  { type: "line", text: "**Problématique** : par quels moyens ce passage donne-t-il à sentir une ville oppressante ?" },
                  { type: "line", text: "**Axe 1** : le décor (rues étroites, obscurité) · **Axe 2** : la foule et les sensations d'étouffement." },
                  { type: "line", text: "**Introduction** : « Dans ce passage, le narrateur traverse une ville hostile (amorce). On peut se demander par quels moyens le texte la rend oppressante (problématique). Nous verrons d'abord le décor, puis la foule et les sensations qu'il fait naître (annonce). »" },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "n3",
                title: "Exercice 6 : Conclure une trentaine de lignes",
                enonce: "Développement : Axe 1, le décor oppressant · Axe 2, la foule étouffante.",
                question: "Rédigez la conclusion (bilan + ouverture brève).",
                correction: [{ type: "line", text: "Exemple : « Ce passage rend la ville oppressante en jouant à la fois sur un décor resserré et sur une foule étouffante : l'espace et les sensations enferment le personnage. On retrouve cette ville menaçante dans bien des romans urbains (ouverture). »" }],
              },
            ],
          },
          {
            id: "crpe",
            label: "Type CRPE",
            icon: "",
            blocks: [
              { type: "callout", variant: "success", icon: "", text: "Ces exercices reprennent des **consignes réelles de l'épreuve bac+3** (sujet officiel, sourcé). Le badge ✦ signale un sujet officiel." },
              {
                type: "exerciceCard",
                variant: "annale",
                badge: "✦ Sujet 0 officiel · CRPE bac+3 (L3)",
                title: "Exercice 1 : Construire le développement",
                enonce: "Texte support : Charles Perrault, *La Barbe bleue* (1697). Source : [exemples de sujets bac+3](https://www.devenirenseignant.gouv.fr/exemples-de-sujets-des-concours-externes-bac3-de-recrutement-d-enseignants-1405).",
                question: "Consigne (10 points) : « Qu'est-ce qui rend cette page d'un conte du XVIIe siècle toujours significative dans le cadre d'une réflexion sur l'égalité entre homme et femme ? » Construisez le plan détaillé (problématique, deux axes, appuis du texte).",
                correction: [{ type: "paragraph", text: "**Problématique** : en quoi cette scène ancienne éclaire-t-elle encore la question de l'égalité entre les femmes et les hommes ? **Axe 1, un rapport de domination donné à voir** : le mari détient un pouvoir de vie et de mort (« Il faut mourir, Madame »), la femme est soumise et terrorisée (« plus pâle que la mort », « se jeta aux pieds de son mari »). **Axe 2, une portée qui dépasse l'époque** : la solidarité qui sauve l'héroïne (« Anne, ma sœur Anne, ne vois-tu rien venir ? », l'arrivée des frères) et la mise en garde, toujours actuelle, contre les violences faites aux femmes. Chaque axe s'appuie sur des citations courtes du texte." }],
              },
              {
                type: "exerciceCard",
                variant: "crpe",
                title: "Exercice 2 : Rédiger l'introduction et la conclusion",
                enonce: "Même sujet que l'exercice 1 (Perrault, *La Barbe bleue*).",
                question: "Rédigez l'introduction (trois temps) et la conclusion (bilan + ouverture), au format attendu (bref).",
                correction: [
                  { type: "line", text: "**Introduction** : « Dans cette page de *La Barbe bleue*, Perrault met en scène une épouse que son mari condamne à mort pour avoir désobéi (amorce). On peut se demander en quoi cette scène éclaire encore l'égalité entre les femmes et les hommes (problématique). Nous verrons d'abord un rapport de domination, puis la portée actuelle de cette page (annonce). »" },
                  { type: "line", text: "**Conclusion** : « Cette page reste significative parce qu'elle expose un rapport de domination et de violence que seule la solidarité vient contrer. Elle invite à réfléchir, aujourd'hui encore, aux violences faites aux femmes (ouverture). »" },
                ],
              },
            ],
          },
          {
            id: "cote-prof",
            label: "Côté prof",
            icon: "",
            blocks: [
              { type: "callout", variant: "warning", icon: "", text: "Ces exercices reproduisent des **erreurs fréquentes** en L3. Les repérer et corriger est une compétence valorisée au concours." },
              {
                type: "exerciceCard",
                variant: "err-type",
                title: "Exercice 1 · La paraphrase du texte",
                enonce: "Plan d'un candidat pour le sujet Perrault : « 1) Le mari rentre. 2) Il découvre la clef tachée. 3) Il veut tuer sa femme. 4) Les frères arrivent. »",
                question: "Identifiez et corrigez le défaut.",
                correction: [{ type: "checklist", items: [
                  { text: "Le plan raconte la page ligne à ligne : c'est de la paraphrase, pas une réflexion", bad: true },
                  { text: "Un développement s'organise par idées qui répondent à la question, pas dans l'ordre du texte" },
                  { text: "Attendu : deux axes (rapport de domination ; portée actuelle), appuyés sur des citations" },
                ] }],
              },
              {
                type: "exerciceCard",
                variant: "err-type",
                title: "Exercice 2 · Le hors-sujet (l'égalité en général)",
                enonce: "Un candidat disserte sur l'égalité hommes-femmes aujourd'hui sans jamais citer ni évoquer le texte de Perrault.",
                question: "Identifiez et corrigez le défaut.",
                correction: [{ type: "checklist", items: [
                  { text: "Le candidat oublie le texte alors que la question part de « cette page »", bad: true },
                  { text: "En L3, la réflexion s'ancre sur le texte ; les exemples extérieurs viennent en appoint" },
                  { text: "Attendu : montrer ce que la scène donne à voir (citations), avant d'élargir brièvement" },
                ] }],
              },
              {
                type: "exerciceCard",
                variant: "err-type",
                title: "Exercice 3 · Le développement inachevé",
                enonce: "Un candidat rédige une longue première partie de deux pages, puis n'a plus le temps de finir : pas de conclusion, et les maths sont à peine commencées.",
                question: "Identifiez et corrigez le défaut.",
                correction: [{ type: "checklist", items: [
                  { text: "Le candidat n'a pas géré son temps : l'épreuve est partagée avec les maths", bad: true },
                  { text: "Un développement attendu fait une trentaine de lignes, conclusion comprise" },
                  { text: "Attendu : deux axes équilibrés, une conclusion bouclée, et du temps réservé aux maths" },
                ] }],
              },
            ],
          },
        ],
      },
      {
        id: "reviser",
        label: "Réviser",
        icon: "",
        tabs: [
          {
            id: "flash",
            label: "Flashcards",
            icon: "",
            blocks: [
              { type: "callout", variant: "info", icon: "", text: "Cliquez sur chaque carte pour révéler la réponse. Essayez de répondre dans votre tête avant." },
              {
                type: "flashcardDeck",
                cards: [
                  { question: "Quelle est la nature de la Partie 3 au L3 ?", answer: "Une **réflexion argumentée** suscitée par le texte : on répond à une question (souvent posée sur le texte) par un développement d'une trentaine de lignes.", astuce: "⚠️ Ce n'est ni un commentaire de procédés, ni un résumé." },
                  { question: "La question porte le plus souvent sur quoi ?", answer: "Sur **le texte lui-même** (« qu'est-ce qui rend cette page... », « en quoi ce passage... »).", astuce: "💡 On part du texte, on l'ancre, puis on élargit brièvement." },
                  { question: "Combien d'axes viser en L3 ?", answer: "**Deux** le plus souvent : le développement attendu fait une trentaine de lignes.", astuce: "💡 Deux axes solides valent mieux que trois bâclés." },
                  { question: "Sur quoi appuyer chaque idée ?", answer: "D'abord sur le **texte** (citation courte ou renvoi précis) ; une lecture personnelle peut venir en appoint.", astuce: "⚠️ Ne pas s'éloigner du texte." },
                  { question: "Quels sont les trois temps de l'introduction ?", answer: "1) **Amorce** (par le texte) · 2) **Problématique** · 3) **Annonce du plan**.", astuce: "💡 L'amorce parle du texte précis, jamais d'une généralité." },
                  { question: "Comment se construit un paragraphe ?", answer: "Une **idée directrice**, une **citation** du texte, une **analyse** qui relie la citation à l'idée.", astuce: "⚠️ Une citation sans analyse ne démontre rien." },
                  { question: "Pourquoi gérer son temps ?", answer: "Parce que l'épreuve de 4 h est **partagée avec les mathématiques** : un développement complet mais bref, et du temps gardé pour les maths.", astuce: "💡 Viser environ 2 h pour le français." },
                  { question: "Les deux erreurs les plus fréquentes ?", answer: "La **paraphrase** (raconter le texte) et le **hors-sujet** (parler du thème en oubliant le texte).", astuce: "💡 Recopier la question en haut du brouillon et y revenir." },
                ],
              },
            ],
          },
          {
            id: "memo",
            label: "Mémo",
            icon: "",
            blocks: [
              {
                type: "mindmapLite",
                center: { title: "Produire", subtitle: "le développement (L3)" },
                branches: [
                  { title: "Analyser la question", lines: ["Tournure", "Notion clé", "Lien au texte"], variant: "blue" },
                  { title: "Plan court", lines: ["Analytique : qu'est-ce qui rend, en quoi", "Dialectique : dans quelle mesure", "2 axes le plus souvent"], variant: "green" },
                  { title: "Arguments", lines: ["Appui texte (citation)", "Lecture en appoint", "Une analyse qui relie"], variant: "green" },
                  { title: "Rédiger bref", lines: ["Intro : amorce, problématique, annonce", "Paragraphe : idée, citation, analyse", "Conclusion : bilan, ouverture"], variant: "green" },
                  { title: "Pièges classiques", lines: ["Paraphrase / commentaire", "Hors-sujet (oublier le texte)", "Développement inachevé"], variant: "yellow" },
                  { title: "Renvois", lines: ["Cohérence, connecteurs → notion 13", "Procédés, lexique → notions 16-18", "Culture et références → notion 20"], variant: "purple", dashed: true },
                ],
              },
            ],
          },
          { id: "autoeval", label: "Auto-évaluation", icon: "", blocks: [{ type: "autoEvalChecklist", items: OBJECTIFS_L3 }] },
        ],
      },
    ],
  };
}

export const ficheProduireDeveloppementL3 = ficheProduireDeveloppementL3Builder();
export const ficheProduireDeveloppementM2 = ficheProduireDeveloppementM2Builder();
