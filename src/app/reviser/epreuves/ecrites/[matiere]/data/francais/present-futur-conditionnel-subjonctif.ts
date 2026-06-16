import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "vc1", label: "Je connais les 5 valeurs du présent de l'indicatif : action en cours, habitude, vérité générale, présent de narration, futur proche" },
  { id: "vc2", label: "Je distingue l'habitude de la vérité générale au présent grâce au test « d'habitude »" },
  { id: "vc3", label: "Je connais les 3 valeurs du futur simple : action à venir, ordre atténué, vérité générale future" },
  { id: "vc4", label: "Je connais les 4 valeurs du conditionnel présent (hypothèse, politesse, fait non confirmé, futur dans le passé), et je sais que le conditionnel est un temps de l'indicatif" },
  { id: "vc5", label: "Je distingue le conditionnel présent de l'imparfait grâce au test « nous » (présence du « r »)" },
  { id: "vc6", label: "Je sais que le subjonctif n'a pas de valeur propre à nommer : il est imposé par un déclencheur (verbe de volonté, de sentiment, de doute, conjonction, nécessité)" },
  { id: "vc7", label: "Je connais les déclencheurs du subjonctif et je sais que la certitude appelle l'indicatif (je sais que, je crois que…)" },
];

export const fichePresentFuturConditionnelSubjonctif: Fiche = {
  slug: "present-futur-conditionnel-subjonctif",
  matiere: "francais",
  numero: 8,
  partie: "Partie 1 : Le verbe",
  title: "Présent, futur, conditionnel et subjonctif",
  subtitle:
    "Nommer les valeurs du présent, du futur et du conditionnel, et reconnaître les emplois du subjonctif",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 3-4 · BOEN n°1 du 22 janvier 2019", variant: "info" },
  ],
  metaTitle: "Présent, futur, conditionnel, subjonctif (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur les valeurs du présent (5 valeurs), du futur simple (3 valeurs) et du conditionnel présent (4 valeurs, temps de l'indicatif), et sur les emplois du subjonctif (déclencheurs). Test conditionnel/imparfait, test habitude/vérité générale, réponses jury, exercices corrigés, flashcards et auto-évaluation.",
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
              title: "Le programme en 4 étapes",
              items: [
                {
                  number: "①",
                  title: "Le présent : 5 valeurs",
                  text: "Action en cours, habitude, vérité générale, présent de narration, futur proche.",
                },
                {
                  number: "②",
                  title: "Le futur simple : 3 valeurs",
                  text: "Action à venir, ordre atténué, vérité générale future.",
                },
                {
                  number: "③",
                  title: "Le conditionnel présent : 4 valeurs",
                  text: "Hypothèse, politesse, fait non confirmé, futur dans le passé. C'est un temps de l'indicatif.",
                },
                {
                  number: "④",
                  title: "Le subjonctif : un mode imposé",
                  text: "Pas de valeur propre : il est déclenché par un verbe ou une conjonction qui le précède.",
                },
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
              text: "Le présent, le futur, le conditionnel et le subjonctif complètent le système verbal. Deux difficultés dominent les copies : confondre conditionnel et imparfait, et employer l'indicatif à la place du subjonctif. Cette fiche donne les valeurs précises et les formules de réponse jury. L'identification de la forme (terminaisons, test du « r ») relève de la notion 6.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Le présent de l'indicatif : 5 valeurs",
              blocks: [
                {
                  type: "paragraph",
                  text: "Le présent ne dit pas seulement « maintenant ». Selon le contexte, il prend cinq valeurs distinctes.",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Action en cours",
                      definition: "L'action se déroule au moment où l'on parle ou écrit.",
                      exemples: ["« Vivre, sans l'écriture, me **va** mal » : ressenti au moment de l'écriture"],
                      test: "L'action a lieu maintenant, au moment de l'énonciation.",
                    },
                    {
                      title: "Habitude",
                      definition: "Action répétée ou régulière.",
                      exemples: ["« Il **se lève** à six heures » : tous les jours"],
                      test: "Ajouter « d'habitude » est naturel.",
                    },
                    {
                      title: "Vérité générale",
                      definition: "Fait valable en tout temps et pour tous : loi, proverbe, maxime.",
                      exemples: [
                        "« On **écrit** parce qu'on ne sait pas » : affirmation universelle",
                        "« La Terre **tourne** autour du Soleil »",
                      ],
                      test: "Ajouter « d'habitude » est impossible : c'est valable universellement.",
                    },
                    {
                      title: "Présent de narration",
                      definition: "Un événement passé est raconté au présent pour le dynamiser et créer un effet de proximité.",
                      exemples: ["« En 1789, la Révolution **éclate** » : événement passé mis au présent"],
                      test: "Indicateur temporel passé (date, « alors »…) + verbe au présent.",
                    },
                    {
                      title: "Futur proche",
                      definition: "Action future très proche ou présentée comme certaine.",
                      exemples: ["« Il **arrive** demain » : futur certain"],
                      test: "Indicateur temporel futur (demain, bientôt…) + verbe au présent.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Habitude ou vérité générale ?",
                  text: "Test « d'habitude » : « d'habitude, il se lève à six heures » est naturel (**habitude**) ; « d'habitude, on écrit » ne l'est pas (**vérité générale**, valable pour tous).",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Le futur simple : 3 valeurs",
              blocks: [
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Action à venir",
                      definition: "Action qui se déroulera après le moment de l'énonciation, présentée avec certitude.",
                      exemples: ["« Il **viendra** demain » : certitude sur l'avenir"],
                      test: "Action située dans l'avenir par rapport au moment où l'on parle.",
                    },
                    {
                      title: "Ordre atténué",
                      definition: "Consigne formulée au futur, plus douce que l'impératif.",
                      exemples: ["« Tu **feras** tes devoirs avant de sortir »"],
                      test: "Le futur remplace un impératif (« fais tes devoirs ») en l'adoucissant.",
                    },
                    {
                      title: "Vérité générale future",
                      definition: "Loi ou proverbe projeté dans l'avenir.",
                      exemples: ["« Qui **vivra** **verra** »"],
                      test: "Maxime ou proverbe, valable pour tous, au futur.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Le conditionnel présent : 4 valeurs",
              blocks: [
                {
                  type: "paragraph",
                  text: "Le conditionnel présent est un **temps de l'indicatif** (et non un mode autonome, dans la terminologie retenue). On le reconnaît au « r » avant la terminaison, et on le distingue de l'imparfait par le test « nous ».",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Test décisif : conditionnel présent ou imparfait ?",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "Conditionnel présent : terminaison avec « r » (-rais, -rait, -rions) → « nous serions »",
                        "Imparfait : terminaison sans « r » (-ais, -ait, -ions) → « nous étions »",
                      ],
                      note: "Les deux sont des temps de l'indicatif. Le « r » est la marque du conditionnel présent (voir notion 6 pour l'identification de la forme).",
                    },
                  ],
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Hypothèse",
                      definition: "Conséquence d'une condition irréelle du présent : « si » + imparfait dans la subordonnée.",
                      exemples: ["« Si elle venait, je **serais** heureux » : elle ne vient pas (irréel du présent)"],
                      test: "Présence d'une subordonnée en « si » + imparfait.",
                    },
                    {
                      title: "Politesse",
                      definition: "Atténuation d'une demande, plus polie que l'indicatif.",
                      exemples: ["« Je **voudrais** vous demander… », « **Pourriez**-vous m'aider ? »"],
                      test: "La demande pourrait se dire à l'indicatif (« je veux ») : le conditionnel l'adoucit.",
                    },
                    {
                      title: "Fait non confirmé",
                      definition: "Information rapportée non vérifiée : prudence énonciative, usage journalistique.",
                      exemples: ["« Le président **serait** en déplacement » : information non vérifiée"],
                      test: "L'énonciateur présente l'information sans la garantir.",
                    },
                    {
                      title: "Futur dans le passé",
                      definition: "Action future envisagée depuis un point du passé.",
                      exemples: ["« Elle savait qu'il **viendrait** » : futur par rapport à « savait »"],
                      test: "Une action à venir, vue depuis un verbe au passé.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Le subjonctif : un mode imposé par un déclencheur",
              blocks: [
                {
                  type: "paragraph",
                  text: "Le subjonctif **n'a pas de valeur propre** à nommer : il est imposé par un élément qui le précède. La réponse jury indique toujours **quel déclencheur** l'impose et ce qu'il exprime.",
                },
                {
                  type: "table",
                  headers: ["Déclencheur", "Exemples", "Phrase"],
                  rows: [
                    ["Verbe de volonté", "vouloir, souhaiter, exiger, ordonner", "« Je veux qu'il **vienne** »"],
                    ["Verbe de sentiment", "craindre, regretter, être heureux que", "« Je regrette qu'elle **soit** partie »"],
                    ["Verbe de doute", "douter, ne pas croire, ne pas penser", "« Je doute qu'il **réussisse** »"],
                    ["Nécessité impersonnelle", "il faut que, il est nécessaire que", "« Il faut qu'elle **parte** »"],
                    ["Concession", "bien que, quoique, encore que", "« bien qu'il **soit** fatigué »"],
                    ["But, condition, antériorité", "pour que, à moins que, avant que, pourvu que", "« pour qu'il **réussisse** »"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ La **certitude** appelle l'**indicatif** : « je sais que », « je crois que », « je pense que », « je suis certain que » sont suivis de l'indicatif. Le doute et la volonté appellent le subjonctif, la certitude appelle l'indicatif.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · Confondre conditionnel présent et imparfait",
              badge: "Très fréquent",
              faux: "« serait » analysé comme un imparfait de l'indicatif.",
              vrai: "Test « nous » : « nous serions » donne -rions (avec « r ») : c'est un **conditionnel présent**.",
              methode: "Mettre à « nous » : -rions (avec « r ») → conditionnel présent ; -ions (sans « r ») → imparfait. Les deux sont des temps de l'indicatif.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 · Classer le conditionnel comme un mode autonome",
              badge: "Terminologie retenue",
              faux: "« serait » → « mode conditionnel ».",
              vrai: "Dans la terminologie retenue (Éduscol récent), le conditionnel est un **temps de l'indicatif**. Réponse : « conditionnel présent (temps de l'indicatif) ».",
              methode: "Donner le temps (conditionnel présent ou passé) et le rattacher à l'indicatif. L'appellation traditionnelle « mode conditionnel » existe encore, mais ce n'est pas la formulation retenue.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 · Employer l'indicatif après « bien que »",
              badge: "Subjonctif obligatoire",
              faux: "« bien qu'il vient ».",
              vrai: "« bien que » impose toujours le subjonctif : « bien qu'il **vienne** ».",
              methode: "Mémoriser les conjonctions à subjonctif : bien que, quoique, pour que, avant que, à moins que, pourvu que.",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°4 · Confondre vérité générale et habitude au présent",
              badge: "Test décisif",
              faux: "« On écrit » analysé comme un présent d'habitude.",
              vrai: "Test « d'habitude » : « d'habitude, on écrit » n'est pas naturel : c'est une **vérité générale** (valable universellement), pas une habitude personnelle.",
              methode: "Ajouter « d'habitude » : naturel → habitude ; impossible → vérité générale.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 2 (CP-CE2) :** présent et futur d'usage courant ; le subjonctif et le conditionnel ne sont pas étudiés comme tels.\n\n**Cycle 3 :** on observe les emplois du présent (récit, vérité générale dans les documentaires), le futur (consignes, projets) et les premières formes du conditionnel (politesse) et du subjonctif (après « il faut que »), sans en faire une étude systématique.\n\n**Ce que vous devez savoir dire :** « Les valeurs des temps se construisent par l'usage et la lecture avant d'être nommées. On fait sentir qu'un même temps peut dire des choses différentes selon le contexte. »",
            },
            {
              type: "ctaBox",
              text: "Cours bien en tête ? Passez à la méthode.",
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
              title: "Deux démarches",
              text: "Nommer la valeur d'un présent, d'un futur ou d'un conditionnel ; reconnaître et justifier un subjonctif. Chacune se termine par un checkpoint.",
            },
            {
              type: "rappelExpress",
              title: "Rappel express : les formules jury",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "Présent : action en cours · habitude · vérité générale · présent de narration · futur proche",
                    "Futur : action à venir · ordre atténué · vérité générale future",
                    "Conditionnel présent (temps de l'indicatif) : hypothèse · politesse · fait non confirmé · futur dans le passé",
                    "Subjonctif : pas de valeur propre, nommer le déclencheur (volonté, sentiment, doute, nécessité, concession, but…)",
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ Jamais de valeur tautologique (« valeur : conditionnel ») ni vague (« valeur : présent ») : toujours une valeur précise + ce que le temps exprime.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Nommer la valeur d'un présent, d'un futur ou d'un conditionnel",
              intro:
                "**Question typique :** « Donnez la valeur du verbe souligné. »\nOn identifie la forme (notion 6), puis on lit le contexte.",
              steps: [
                {
                  number: "1",
                  text: "**Identifier la forme** : présent, futur, conditionnel présent (test du « nous » pour départager conditionnel et imparfait).",
                  example: { lines: ["« serait » → test « nous serions » → conditionnel présent (temps de l'indicatif)"] },
                },
                {
                  number: "2",
                  text: "**Lire le contexte** : y a-t-il un « si » + imparfait (hypothèse) ? une demande (politesse) ? une information rapportée (fait non confirmé) ? un verbe au passé (futur dans le passé) ?",
                  example: { lines: ["« Le président serait en déplacement » → information rapportée → fait non confirmé"] },
                },
                {
                  number: "💡",
                  text: "**Rédiger la formule jury :** temps + valeur + ce que le temps exprime.",
                  example: { lines: ["« serait » est au conditionnel présent (temps de l'indicatif), valeur de fait non confirmé : il présente l'information avec prudence."] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Donnez la valeur de « écrit » dans « On écrit parce qu'on ne sait pas ».",
              correction: [
                { type: "line", text: "« écrit » est au présent de l'indicatif, valeur de vérité générale : il exprime une affirmation universelle sur la condition de l'écrivain (« d'habitude, on écrit » n'est pas naturel)." },
                { type: "note", text: "Réponse complète du premier coup ? Vous tenez la formule. Sinon, reprenez le test « d'habitude »." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Reconnaître et justifier un subjonctif",
              intro:
                "**Question typique :** « Justifiez l'emploi du subjonctif. »\nLe subjonctif n'a pas de valeur propre : on nomme son déclencheur.",
              steps: [
                {
                  number: "1",
                  text: "**Repérer le déclencheur** placé avant le verbe : verbe de volonté, de sentiment, de doute ; conjonction (bien que, pour que, avant que…) ; nécessité (il faut que).",
                  example: { lines: ["« Il faut qu'elle parte » → déclencheur « il faut que » (nécessité)"] },
                },
                {
                  number: "2",
                  text: "**Vérifier que ce n'est pas une certitude** : « je sais que », « je crois que », « je suis certain que » appellent l'indicatif, pas le subjonctif.",
                  example: { lines: ["« Je sais qu'il vient » → certitude → indicatif"] },
                },
                {
                  number: "💡",
                  text: "**Rédiger la formule jury :** subjonctif présent, imposé par [déclencheur], qui exprime [nécessité, concession, but…].",
                  example: { lines: ["« parte » est au présent du subjonctif, imposé par « il faut que » : il exprime la nécessité que l'action ait lieu."] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Justifiez le mode dans « bien qu'il soit fatigué ».",
              correction: [
                { type: "line", text: "« soit » est au présent du subjonctif, imposé par la conjonction de concession « bien que » : il exprime un état réel qui n'empêche pas l'action principale." },
                { type: "note", text: "Méthode bien en tête ? Direction le Quiz éclair." },
              ],
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
                {
                  objectifId: "vc1",
                  question: "Dans « En 1789, la Révolution éclate », quelle est la valeur du présent ?",
                  options: ["Action en cours", "Habitude", "Présent de narration", "Futur proche"],
                  correctIndex: 2,
                  explanation:
                    "Un événement passé (1789) est raconté au présent pour le dynamiser : c'est un présent de narration.",
                },
                {
                  objectifId: "vc2",
                  question: "Quel test distingue l'habitude de la vérité générale au présent ?",
                  options: [
                    "Le test « nous »",
                    "Ajouter « d'habitude » : naturel → habitude, impossible → vérité générale",
                    "Le test de l'auxiliaire",
                    "Le test du passif",
                  ],
                  correctIndex: 1,
                  explanation:
                    "« d'habitude, il se lève à six heures » est naturel (habitude) ; « d'habitude, on écrit » ne l'est pas (vérité générale).",
                },
                {
                  objectifId: "vc4",
                  question: "Dans « Le président serait en déplacement », quelle est la valeur du conditionnel ?",
                  options: ["Hypothèse", "Politesse", "Fait non confirmé", "Futur dans le passé"],
                  correctIndex: 2,
                  explanation:
                    "Le conditionnel présente ici une information rapportée non vérifiée : valeur de fait non confirmé (usage journalistique).",
                },
                {
                  objectifId: "vc4",
                  question: "Dans la terminologie retenue, le conditionnel est :",
                  options: [
                    "Un mode autonome",
                    "Un temps de l'indicatif",
                    "Un temps du subjonctif",
                    "Une forme non conjuguée",
                  ],
                  correctIndex: 1,
                  explanation:
                    "Le conditionnel est analysé comme un temps de l'indicatif. L'appellation traditionnelle « mode conditionnel » existe encore mais n'est pas la formulation retenue.",
                },
                {
                  objectifId: "vc5",
                  question: "Comment distinguer le conditionnel présent de l'imparfait ?",
                  options: [
                    "Par la personne",
                    "Par le test « nous » : -rions (conditionnel) ou -ions (imparfait)",
                    "Par l'auxiliaire",
                    "Par le sujet",
                  ],
                  correctIndex: 1,
                  explanation:
                    "Le « r » distingue les deux : « nous serions » (-rions) → conditionnel présent ; « nous étions » (-ions) → imparfait.",
                },
                {
                  objectifId: "vc7",
                  question: "Après « Je crois que », quel mode emploie-t-on ?",
                  options: ["Le subjonctif", "L'indicatif", "Le conditionnel", "L'impératif"],
                  correctIndex: 1,
                  explanation:
                    "« Je crois que » exprime une opinion présentée comme réelle : on emploie l'indicatif. Le subjonctif s'emploie après le doute, la volonté, le sentiment.",
                },
                {
                  objectifId: "vc6",
                  question: "Que peut-on dire de la valeur du subjonctif ?",
                  options: [
                    "Il a une valeur d'antériorité",
                    "Il n'a pas de valeur propre : il est imposé par un déclencheur",
                    "Il exprime toujours le futur",
                    "Il a la même valeur que le conditionnel",
                  ],
                  correctIndex: 1,
                  explanation:
                    "Le subjonctif est imposé par un élément qui le précède (verbe de volonté, conjonction, nécessité…). La réponse jury nomme ce déclencheur.",
                },
                {
                  objectifId: "vc3",
                  question: "Dans « Tu feras tes devoirs avant de sortir », quelle est la valeur du futur ?",
                  options: ["Action à venir neutre", "Ordre atténué", "Vérité générale future", "Futur proche"],
                  correctIndex: 1,
                  explanation:
                    "Le futur formule ici une consigne, plus douce qu'un impératif : valeur d'ordre atténué.",
                },
              ],
            },
            {
              type: "ctaBox",
              text: "Quiz terminé ? Direction l'Application.",
              buttonLabel: "Voir l'Application",
              targetTab: "appli",
            },
          ],
        },
        {
          id: "appli",
          label: "Application",
          icon: "",
          blocks: [
            {
              type: "callout",
              variant: "success",
              text: "Progression en 3 niveaux. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              stars: "★☆☆",
              label: "Niveau 1 : Identifier",
              sub: "Nommer la valeur, appliquer les tests, choisir le mode",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 1 : Valeurs du présent",
              objectifTag: "Présent",
              question:
                "Donnez la valeur du présent :\na) « On écrit parce qu'on ne sait pas. »   b) « Vivre, sans l'écriture, me va mal. »   c) « En 1789, la Révolution éclate. »   d) « Il arrive demain. »   e) « Il se lève à six heures chaque matin. »",
              correction: [
                { type: "line", label: "a)", text: "Vérité générale (affirmation universelle ; « d'habitude on écrit » non naturel)" },
                { type: "line", label: "b)", text: "Action en cours (état actuel au moment d'écrire)" },
                { type: "line", label: "c)", text: "Présent de narration (événement passé mis au présent ; indicateur « 1789 »)" },
                { type: "line", label: "d)", text: "Futur proche (action future certaine ; indicateur « demain »)" },
                { type: "line", label: "e)", text: "Habitude (action répétée ; « chaque matin »)" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 2 : Conditionnel présent ou imparfait ?",
              objectifTag: "Conditionnel / imparfait",
              question:
                "Appliquez le test « nous » :\na) « Elle serait malade. »   b) « Elle était fatiguée. »   c) « Il viendrait si on l'invitait. »   d) « Il venait souvent. »   e) « Ce traitement réduirait les risques. »",
              correction: [
                { type: "line", label: "a)", text: "« nous serions » → -rions → conditionnel présent" },
                { type: "line", label: "b)", text: "« nous étions » → -ions sans « r » → imparfait" },
                { type: "line", label: "c)", text: "« nous viendrions » → -rions → conditionnel présent" },
                { type: "line", label: "d)", text: "« nous venions » → -ions sans « r » → imparfait" },
                { type: "line", label: "e)", text: "« nous réduirions » → -rions → conditionnel présent" },
                { type: "note", text: "💡 Conditionnel présent et imparfait sont tous deux des temps de l'indicatif." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 3 : Valeurs du conditionnel présent",
              objectifTag: "Conditionnel",
              question:
                "Donnez la valeur du conditionnel :\na) « Si elle venait, je serais heureux. »   b) « Je voudrais vous demander un conseil. »   c) « Le suspect aurait fui à l'étranger. »   d) « Elle savait qu'il viendrait le lendemain. »",
              correction: [
                { type: "line", label: "a)", text: "Hypothèse (irréel du présent ; si + imparfait)" },
                { type: "line", label: "b)", text: "Politesse (atténuation d'une demande)" },
                { type: "line", label: "c)", text: "Fait non confirmé (information non vérifiée)" },
                { type: "line", label: "d)", text: "Futur dans le passé (action future vue depuis « savait »)" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 4 : Indicatif ou subjonctif ?",
              objectifTag: "Indicatif / subjonctif",
              question:
                "Justifiez :\na) « Il faut qu'il vienne. »   b) « Je sais qu'il vient. »   c) « bien qu'elle soit fatiguée »   d) « Je crois qu'elle part demain. »   e) « pour qu'il réussisse »   f) « Je suis certain qu'il vient. »",
              correction: [
                { type: "line", label: "a)", text: "Subjonctif (« il faut que » : nécessité)" },
                { type: "line", label: "b)", text: "Indicatif (« je sais que » : certitude)" },
                { type: "line", label: "c)", text: "Subjonctif (« bien que » : concession, obligatoire)" },
                { type: "line", label: "d)", text: "Indicatif (« je crois que » : opinion, pas doute)" },
                { type: "line", label: "e)", text: "Subjonctif (« pour que » : but, obligatoire)" },
                { type: "line", label: "f)", text: "Indicatif (« je suis certain que » : certitude)" },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : Analyser",
              sub: "Réponse jury, déclencheurs du subjonctif, cas limites",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 5 : Vrai ou faux, justifiez",
              question:
                "a) Le conditionnel est un temps de l'indicatif.\nb) Après « je crois que », on emploie le subjonctif.\nc) Le futur simple peut exprimer un ordre.\nd) « bien que » impose toujours le subjonctif.",
              correction: [
                { type: "line", label: "a)", text: "**Vrai** (terminologie retenue) : le conditionnel est un temps de l'indicatif. L'appellation « mode conditionnel » subsiste dans certains usages mais n'est pas retenue." },
                { type: "line", label: "b)", text: "**Faux** : « je crois que » exprime une opinion → indicatif. Le subjonctif suit le doute, pas l'opinion affirmée." },
                { type: "line", label: "c)", text: "**Vrai** : « Tu feras tes devoirs » est un ordre atténué au futur." },
                { type: "line", label: "d)", text: "**Vrai** : « bien que » impose toujours le subjonctif, sans exception." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 6 : Quelles conjonctions imposent le subjonctif ?",
              objectifTag: "Déclencheurs du subjonctif",
              question:
                "Indiquez le mode imposé et justifiez :\na) parce que   b) bien que   c) pour que   d) quand   e) avant que   f) après que   g) à moins que   h) dès que",
              correction: [
                { type: "line", label: "a)", text: "parce que → indicatif (cause réelle)" },
                { type: "line", label: "b)", text: "bien que → subjonctif (concession)" },
                { type: "line", label: "c)", text: "pour que → subjonctif (but)" },
                { type: "line", label: "d)", text: "quand → indicatif (temps, fait réel)" },
                { type: "line", label: "e)", text: "avant que → subjonctif (antériorité envisagée)" },
                { type: "line", label: "f)", text: "après que → indicatif attendu (fait accompli), même si le subjonctif est très fréquent dans l'usage" },
                { type: "line", label: "g)", text: "à moins que → subjonctif (condition négative)" },
                { type: "line", label: "h)", text: "dès que → indicatif (temps, fait réel)" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 7 : Corriger l'analyse",
              question:
                "Ces analyses sont-elles correctes ? Corrigez :\na) « serait » → indicatif imparfait, valeur : état dans le passé\nb) « vienne » (après « bien que ») → indicatif présent\nc) « viendrait » → conditionnel présent, valeur : conditionnel\nd) « partira » → futur simple de l'indicatif, valeur : action à venir",
              correction: [
                { type: "line", label: "a)", text: "Erreur de temps : le mode indicatif est correct, mais « nous serions » (-rions) → conditionnel présent, pas imparfait. La valeur dépend du contexte." },
                { type: "line", label: "b)", text: "Faux : « bien que » impose le subjonctif → subjonctif présent." },
                { type: "line", label: "c)", text: "Valeur tautologique : préciser (hypothèse, politesse, fait non confirmé, futur dans le passé)." },
                { type: "line", label: "d)", text: "Correct." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 8 : Corriger les modes incorrects",
              question:
                "Pourquoi ces phrases sont-elles incorrectes ? Corrigez :\na) « bien qu'il vient »   b) « il faut qu'elle vient »   c) « pour que tu réussis »",
              correction: [
                { type: "line", label: "a)", text: "« vient » (indicatif) incorrect → « bien qu'il **vienne** » (subjonctif, concession)" },
                { type: "line", label: "b)", text: "« vient » incorrect → « il faut qu'elle **vienne** » (subjonctif, nécessité)" },
                { type: "line", label: "c)", text: "« réussis » incorrect → « pour que tu **réussisses** » (subjonctif, but)" },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : Maîtriser",
              sub: "Extraits littéraires, réponse jury rédigée",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 9 · Extrait littéraire : Lola Lafon",
              enonce:
                "« On écrit parce qu'on ne sait par quel autre biais attraper le réel. Vivre, sans l'écriture, me va mal. »\n*(Lola Lafon, Quand tu écouteras cette chanson, 2023)*",
              question: "Rédigez la réponse jury pour « écrit », « sait » et « va ».",
              correction: [
                { type: "line", text: "« écrit » est au présent de l'indicatif, valeur de vérité générale : il exprime une affirmation universelle sur la condition de l'écrivain." },
                { type: "line", text: "« sait » est au présent de l'indicatif, valeur de vérité générale : il exprime une méconnaissance permanente et universelle." },
                { type: "line", text: "« va » est au présent de l'indicatif, valeur d'action en cours : il exprime l'état actuel de l'auteure au moment d'écrire." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 10 · Extrait littéraire : Victor Hugo",
              enonce:
                "« Insensées choses qui nous font rêver ! Monte en moi une humble flamme. »\n*(Victor Hugo)*",
              question: "Rédigez la réponse jury pour « font » et « Monte ».",
              correction: [
                { type: "line", text: "« font » est au présent de l'indicatif, valeur de vérité générale : il exprime l'effet universel et permanent des choses sur le poète." },
                { type: "line", text: "« Monte » est au présent de l'indicatif, valeur d'action en cours : il exprime le surgissement immédiat de la flamme au moment du poème." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 11 · Hypothèse et politesse",
              enonce: "a) « Si elle venait, je serais heureux. »   b) « Pourriez-vous m'aider ? »   c) « Si elle était venue, j'aurais été heureux. »",
              question: "Rédigez la réponse jury pour « serais », « Pourriez » et « aurais été ».",
              correction: [
                { type: "line", label: "a)", text: "« serais » est au conditionnel présent (temps de l'indicatif), valeur d'hypothèse : conséquence d'une condition irréelle du présent (si + imparfait)." },
                { type: "line", label: "b)", text: "« Pourriez » est au conditionnel présent (temps de l'indicatif), valeur de politesse : il atténue la demande." },
                { type: "line", label: "c)", text: "« aurais été » est au conditionnel passé (temps de l'indicatif), valeur d'irréel du passé : conséquence d'une condition non réalisée dans le passé (si + plus-que-parfait)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 12 · Le subjonctif imposé",
              enonce: "a) « Il faut que chacun réussisse. »   b) « bien qu'il soit fatigué, il continue. »   c) « pour que la société avance »",
              question: "Rédigez la réponse jury pour « réussisse », « soit » et « avance ».",
              correction: [
                { type: "line", label: "a)", text: "« réussisse » est au présent du subjonctif, imposé par « il faut que » : il exprime la nécessité que l'action ait lieu." },
                { type: "line", label: "b)", text: "« soit » est au présent du subjonctif, imposé par la conjonction de concession « bien que » : il exprime un état réel qui n'empêche pas l'action principale." },
                { type: "line", label: "c)", text: "« avance » est au présent du subjonctif, imposé par la conjonction de but « pour que » : il exprime le but visé." },
              ],
            },
          ],
        },
        {
          id: "crpe",
          label: "Type CRPE",
          icon: "",
          blocks: [
            {
              type: "callout",
              variant: "success",
              icon: "",
              text: "Ces exercices reproduisent le format de la question sur le verbe de la Partie 1 : extrait littéraire, valeur du temps, réponse jury rédigée. Les exercices calqués sur des sujets récents portent le badge ✦.",
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format concours récent",
              title: "Exercice 1 : Lola Lafon, Quand tu écouteras cette chanson",
              enonce:
                "« On <u>écrit</u> parce qu'on ne <u>sait</u> par quel autre biais attraper le réel. »\n*(Lola Lafon, Quand tu écouteras cette chanson, 2023)*",
              question: "Format identique au concours · Rédigez la réponse jury pour « écrit » et « sait ».",
              correction: [
                { type: "line", text: "« écrit » est au présent de l'indicatif, valeur de vérité générale : il exprime une affirmation universelle sur la condition de l'écrivain, valable en tout temps." },
                { type: "line", text: "« sait » est au présent de l'indicatif, valeur de vérité générale : il exprime une méconnaissance permanente et universelle." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format concours récent",
              title: "Exercice 2 : Victor Hugo (poème)",
              enonce:
                "« Insensées choses qui nous <u>font</u> rêver ! »\n*(Victor Hugo)*",
              question: "Format identique au concours · Rédigez la réponse jury pour « font ».",
              correction: [
                { type: "line", text: "« font » est au présent de l'indicatif, valeur de vérité générale : il exprime l'effet universel et permanent que les choses exercent sur le poète." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 3 : conditionnel d'hypothèse",
              enonce: "« Si elle <u>venait</u>, je <u>serais</u> heureux. »",
              question: "Rédigez la réponse jury pour « venait » et « serais ».",
              correction: [
                { type: "line", text: "« venait » est à l'imparfait de l'indicatif, valeur conditionnelle : il exprime une hypothèse irréelle du présent dans la subordonnée en « si »." },
                { type: "line", text: "« serais » est au conditionnel présent (temps de l'indicatif), valeur d'hypothèse : il exprime la conséquence de cette condition irréelle." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 4 : fait non confirmé",
              enonce: "« Le président <u>serait</u> en déplacement à l'étranger. »",
              question: "Rédigez la réponse jury pour « serait ».",
              correction: [
                { type: "line", text: "« serait » est au conditionnel présent (temps de l'indicatif), valeur de fait non confirmé : il présente l'information avec prudence énonciative, comme non vérifiée par l'énonciateur." },
                { type: "note", text: "💡 Test de la forme (« nous serions » → -rions) : voir notion 6." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 5 : le subjonctif imposé",
              enonce: "« Il faut qu'elle <u>vienne</u> avant la nuit, bien qu'elle <u>soit</u> fatiguée. »",
              question: "Rédigez la réponse jury pour « vienne » et « soit ».",
              correction: [
                { type: "line", text: "« vienne » est au présent du subjonctif, imposé par « il faut que » : il exprime la nécessité que l'action ait lieu." },
                { type: "line", text: "« soit » est au présent du subjonctif, imposé par la conjonction de concession « bien que » : il exprime un état réel qui n'empêche pas l'action principale." },
              ],
            },
          ],
        },
        {
          id: "cote-prof",
          label: "Côté prof",
          icon: "",
          blocks: [
            {
              type: "callout",
              variant: "warning",
              icon: "",
              text: "Ces exercices reproduisent des erreurs fréquentes relevées dans les copies. Repérer ce qui cloche dans une copie, c'est aussi ce que vous ferez plus tard avec vos élèves.",
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 1 · Réponse à corriger : « serait »",
              enonce: "Réponse d'un candidat : « **serait** : indicatif imparfait, valeur : état dans le passé », pour *« Le président serait en déplacement. »*",
              question: "Identifiez l'erreur et rédigez la réponse correcte.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Le mode indicatif est correct, mais le temps est faux : « nous serions » (-rions, avec « r ») → conditionnel présent, pas imparfait", bad: true },
                    { text: "La valeur « état dans le passé » est fausse : préciser selon le contexte", bad: true },
                    { text: "Réponse attendue : conditionnel présent (temps de l'indicatif), valeur de fait non confirmé (information présentée avec prudence)" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 2 · Réponse à corriger : « bien qu'il vient »",
              enonce: "Réponse d'un candidat : « **bien qu'il vient** est correct : indicatif présent après « bien que ». »",
              question: "Identifiez l'erreur et rédigez la correction.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "« bien que » impose toujours le subjonctif, jamais l'indicatif", bad: true },
                    { text: "Forme correcte : « bien qu'il **vienne** »" },
                    { text: "Réponse attendue : « vienne » est au présent du subjonctif, imposé par la conjonction de concession « bien que »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 3 · Réponse à corriger : « On écrit »",
              enonce: "Réponse d'un candidat : « **On écrit** : présent d'habitude », pour *« On écrit parce qu'on ne sait pas. »*",
              question: "Identifiez l'erreur et rédigez la réponse correcte.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Test « d'habitude » : « d'habitude, on écrit » n'est pas naturel → ce n'est pas une habitude personnelle", bad: true },
                    { text: "Réponse attendue : présent de l'indicatif, valeur de vérité générale (affirmation universelle sur la condition de l'écrivain)" },
                  ],
                },
              ],
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
            {
              type: "callout",
              variant: "info",
              icon: "",
              text: "Cliquez sur chaque carte pour révéler la réponse. Questions formulées comme le jury.",
            },
            {
              type: "flashcardDeck",
              cards: [
                {
                  question: "Quelles sont les 5 valeurs du présent de l'indicatif ?",
                  answer:
                    "**Action en cours** (maintenant) ; **habitude** (« d'habitude » naturel) ; **vérité générale** (« d'habitude » impossible) ; **présent de narration** (passé raconté au présent) ; **futur proche** (indicateur futur).",
                },
                {
                  question: "Comment distinguer habitude et vérité générale au présent ?",
                  answer:
                    "Test « d'habitude ».\nNaturel → habitude (« d'habitude, il se lève à 6h »).\nImpossible → vérité générale (« d'habitude, on écrit » : non naturel, valable universellement).",
                },
                {
                  question: "Quelles sont les 3 valeurs du futur simple ?",
                  answer:
                    "**Action à venir** (certitude) ; **ordre atténué** (« Tu feras tes devoirs ») ; **vérité générale future** (« Qui vivra verra »).",
                },
                {
                  question: "Quelles sont les 4 valeurs du conditionnel présent ?",
                  answer:
                    "**Hypothèse** (si + imparfait) ; **politesse** (« je voudrais ») ; **fait non confirmé** (information non vérifiée) ; **futur dans le passé** (vu depuis un verbe au passé).",
                  astuce: "💡 Le conditionnel est un temps de l'indicatif ; on le distingue de l'imparfait par le test « nous » (présence du « r »).",
                },
                {
                  question: "Le conditionnel est-il un mode ?",
                  answer:
                    "Non : dans la terminologie retenue (Éduscol récent), c'est un **temps de l'indicatif**. On répond « conditionnel présent / passé (temps de l'indicatif) ».",
                  astuce: "⚠️ L'appellation traditionnelle « mode conditionnel » subsiste dans certains usages scolaires, mais ce n'est pas la formulation retenue.",
                },
                {
                  question: "Quand emploie-t-on le subjonctif ?",
                  answer:
                    "Après les verbes de **volonté, sentiment, doute** ; après les conjonctions **bien que, pour que, avant que, à moins que, pourvu que** ; après la **nécessité** (il faut que).",
                  astuce: "⚠️ La certitude appelle l'indicatif : « je sais que », « je crois que », « je suis certain que ».",
                },
                {
                  question: "Le subjonctif a-t-il une valeur propre à nommer ?",
                  answer:
                    "Non : il est imposé par un déclencheur qui le précède. La réponse jury nomme ce déclencheur : « subjonctif présent, imposé par [verbe ou conjonction], qui exprime [nécessité, concession, but…] ».",
                },
                {
                  question: "Formule jury pour un présent de vérité générale ?",
                  answer:
                    "« [verbe] est au présent de l'indicatif, valeur de vérité générale : il exprime une affirmation universelle sur [sujet], valable pour tous, en tout temps. »",
                  astuce: "💡 Jamais « valeur : présent ».",
                },
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
              center: { title: "Présent, futur, conditionnel, subjonctif", subtitle: "Valeurs et emplois" },
              branches: [
                {
                  title: "Présent (5 valeurs)",
                  lines: ["Action en cours · habitude", "Vérité générale", "Narration · futur proche"],
                  variant: "blue",
                },
                {
                  title: "Futur (3 valeurs)",
                  lines: ["Action à venir", "Ordre atténué", "Vérité générale future"],
                  variant: "blue",
                },
                {
                  title: "Conditionnel présent",
                  lines: ["Hypothèse · politesse", "Fait non confirmé · futur dans le passé", "Temps de l'indicatif"],
                  variant: "green",
                },
                {
                  title: "Subjonctif",
                  lines: ["Pas de valeur propre", "Imposé par un déclencheur", "Certitude → indicatif"],
                  variant: "green",
                },
                {
                  title: "Tests décisifs",
                  lines: ["Conditionnel / imparfait : « nous » (r)", "Habitude / vérité générale : « d'habitude »"],
                  variant: "yellow",
                },
                {
                  title: "Renvoi",
                  lines: ["Identifier la forme (terminaisons)", "→ notion 6"],
                  variant: "purple",
                  dashed: true,
                },
              ],
            },
          ],
        },
        {
          id: "autoeval",
          label: "Auto-évaluation",
          icon: "",
          blocks: [{ type: "autoEvalChecklist", items: OBJECTIFS }],
        },
      ],
    },
  ],
};
