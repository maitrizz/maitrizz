import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "tp1", label: "Je sais expliquer la valeur d'un temps à partir de son contexte" },
  { id: "tp2", label: "Je connais les principaux emplois de l'imparfait : description, habitude, action en cours, politesse et hypothèse" },
  { id: "tp3", label: "Je connais les 3 valeurs du passé simple : action délimitée, succession d'événements, rupture" },
  { id: "tp4", label: "Je connais les 3 valeurs du passé composé : lien avec le présent, accompli, substitut du passé simple (récit à la 1re personne)" },
  { id: "tp5", label: "Je connais les 2 valeurs du plus-que-parfait : antériorité dans le passé, irréel du passé (si + plus-que-parfait)" },
  { id: "tp6", label: "Je distingue la description de l'habitude grâce au contexte et aux marqueurs de répétition" },
  { id: "tp7", label: "Je sais commenter le système du récit (imparfait = arrière-plan, passé simple = premier plan) et rédiger une réponse jury complète" },
];

export const ficheTempsDuPasse: Fiche = {
  slug: "temps-du-passe",
  matiere: "francais",
  numero: 7,
  partie: "Partie 1 : Le verbe",
  title: "Les temps du passé",
  subtitle:
    "Nommer la valeur de l'imparfait, du passé simple, du passé composé et du plus-que-parfait",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 3-4 · BOEN n°1 du 22 janvier 2019", variant: "info" },
  ],
  metaTitle: "Les temps du passé (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur les principaux emplois de l'imparfait, du passé simple, du passé composé et du plus-que-parfait, ainsi que sur le système du récit. Méthode d'analyse en contexte, exercices corrigés, flashcards et auto-évaluation.",
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
              title: "Ce que vous allez apprendre",
              items: [
                {
                  number: "①",
                  title: "Expliquer l'emploi d'un temps",
                  text: "Après avoir identifié le temps, on montre ce qu'il exprime dans la phrase : un cadre, une habitude, un événement ou une action antérieure.",
                },
                {
                  number: "②",
                  title: "Comprendre les emplois de l'imparfait",
                  text: "L'imparfait peut installer un décor, exprimer une habitude ou présenter une action en cours. Il s'emploie aussi pour atténuer une demande ou formuler une hypothèse.",
                },
                {
                  number: "③",
                  title: "Distinguer passé simple et passé composé",
                  text: "Le passé simple fait avancer le récit littéraire. Le passé composé présente une action achevée et reste le temps habituel du récit oral ou lié au présent.",
                },
                {
                  number: "④",
                  title: "Organiser les actions dans le passé",
                  text: "Le plus-que-parfait marque ce qui s'est produit avant un autre fait passé. Dans un récit, les temps permettent aussi de distinguer l'arrière-plan des événements principaux.",
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
              text: "Dans la notion 6, vous avez appris à identifier le mode et le temps d'un verbe. Ici, vous allez déterminer la **valeur des temps du passé dans leur contexte** : description, habitude, événement ou antériorité.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Expliquer l'emploi d'un temps",
              blocks: [
                {
                  type: "paragraph",
                  text: "Chaque temps du passé a un **rôle précis** dans le récit. Donner sa **valeur**, c'est dire ce qu'il exprime ici : décrire, raconter un événement, marquer une antériorité… La réponse complète suit toujours la même structure.",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "La structure d'une réponse jury",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "[verbe] est à [temps] de l'indicatif, valeur [nom de la valeur] : il exprime [ce qu'il fait dans le texte].",
                        "Exemple : « regardait » est à l'imparfait de l'indicatif, valeur descriptive : il exprime une action en cours dans le passé qui forme le décor de la scène.",
                      ],
                      note: "L'identification du temps (imparfait, passé simple…) se justifie comme en notion 6. Ici, l'essentiel est la valeur, formulée précisément.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Le réflexe à avoir",
                  text: "Appuyez toujours votre analyse sur un indice du contexte : cadre temporel, marqueur de répétition, succession d'événements ou relation d'antériorité.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Comprendre les emplois de l'imparfait",
              blocks: [
                {
                  type: "paragraph",
                  text: "L'imparfait présente généralement un procès passé **sans en montrer les limites**. Il sert notamment à décrire, à exprimer une habitude ou à montrer une action en cours. Sa valeur dépend toujours du contexte.",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Description",
                      definition: "État, propriété ou action en cours dans le passé, sans durée délimitée. C'est le temps du décor.",
                      exemples: [
                        "« Elle **se hâtait**, les yeux baissés » : décor de la scène",
                        "« Ma mère **regardait** les enfants jouer » : action en cours, cadre affectif",
                      ],
                      test: "Chercher un cadre précis et l'absence de marqueur de répétition.",
                    },
                    {
                      title: "Habitude dans le passé",
                      definition: "Action répétée ou régulière dans le passé.",
                      exemples: [
                        "« Il **aimait** les soirs d'automne, quand il **rentrait** seul » : goût et action récurrents",
                      ],
                      test: "Repérer un marqueur de répétition : chaque jour, souvent, toujours, tous les soirs.",
                    },
                    {
                      title: "Action en cours interrompue",
                      definition: "Action qui se déroulait dans le passé, interrompue par un passé simple. Souvent avec « quand, lorsque ».",
                      exemples: [
                        "« Elle **lisait** quand il arriva » : l'action en cours est interrompue par « arriva »",
                      ],
                      test: "Repérer le passé simple qui survient pendant l'action à l'imparfait.",
                    },
                    {
                      title: "Politesse",
                      definition: "Atténuation d'une demande directe, pour l'adoucir.",
                      exemples: [
                        "« Je **voulais** vous demander un service » : l'imparfait adoucit la demande",
                      ],
                      test: "La phrase pourrait se dire au présent (« je veux ») : l'imparfait est ici un simple adoucissement.",
                    },
                    {
                      title: "Hypothèse (si + imparfait)",
                      definition: "Hypothèse envisagée comme possible, peu probable ou contraire à la réalité selon le contexte. La principale est généralement au conditionnel présent.",
                      exemples: [
                        "« **Si** elle **venait** demain, je serais heureux » : venue envisagée comme une hypothèse",
                      ],
                      test: "« si » + imparfait, avec une principale généralement au conditionnel présent (« je serais »). Le contexte précise le degré de probabilité.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "Un emploi à connaître : l'imparfait narratif",
                  text: "L'imparfait peut exceptionnellement présenter un événement ponctuel dans un récit, souvent avec un repère précis comme « soudain » ou « le lendemain ». Cet imparfait narratif produit un effet de mise en relief ou de ralentissement.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Distinguer passé simple et passé composé",
              blocks: [
                {
                  type: "paragraph",
                  text: "Le **passé simple** est le temps de l'événement (premier plan du récit littéraire). Le **passé composé** relie l'action passée au présent de l'énonciation.",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Passé simple : action délimitée",
                      definition: "Événement ponctuel et terminé, qui fait avancer le récit. C'est le premier plan.",
                      exemples: ["« Une femme **passa** » : la femme surgit dans le récit"],
                      test: "Un événement borné, qu'on ne peut pas prolonger : premier plan.",
                    },
                    {
                      title: "Passé simple : succession",
                      definition: "Plusieurs passés simples enchaînés, déroulement chronologique de l'action.",
                      exemples: ["« Elle **posa** son livre, **regarda** autour d'elle, **se leva** » : actions enchaînées"],
                      test: "Une série d'actions qui se suivent dans l'ordre.",
                    },
                    {
                      title: "Passé simple : rupture",
                      definition: "Événement ponctuel qui interrompt une action en cours à l'imparfait.",
                      exemples: ["« Elle lisait quand il **arriva** » : « arriva » rompt l'action en cours"],
                      test: "Un passé simple qui survient pendant un imparfait.",
                    },
                    {
                      title: "Passé composé : lien avec le présent",
                      definition: "Action passée dont le souvenir ou le résultat reste vivant au moment où l'on parle. Fréquent à la 1re personne.",
                      exemples: ["« J'**ai vu** se rouvrir les portes » : souvenir encore présent pour le narrateur"],
                      test: "Le passé garde un effet ou une trace dans le présent de l'énonciation.",
                    },
                    {
                      title: "Passé composé : accompli",
                      definition: "Action terminée dont le résultat est acquis au moment où l'on parle.",
                      exemples: ["« Il **a fini** son travail » : le résultat est perceptible maintenant"],
                      test: "Le résultat de l'action est constatable au présent.",
                    },
                    {
                      title: "Passé composé : substitut du passé simple",
                      definition: "À l'oral et dans les récits à la 1re personne, il assume le rôle du passé simple.",
                      exemples: ["« Je **suis monté** sur la terrasse » : récit intime à la 1re personne"],
                      test: "Récit à la 1re personne ou registre oral : le passé composé raconte là où l'écrit littéraire userait du passé simple.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Organiser les actions dans le passé",
              blocks: [
                {
                  type: "paragraph",
                  text: "Le **plus-que-parfait** situe une action **avant** un autre moment du passé. Et lorsque imparfait et passé simple coexistent, leur opposition structure tout le récit.",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Plus-que-parfait : antériorité",
                      definition: "Action accomplie avant une autre action passée.",
                      exemples: ["« Elle **avait relu** sa lettre avant de la poster » : relire précède poster"],
                      test: "Une action qui s'est passée avant un autre moment du passé.",
                    },
                    {
                      title: "Plus-que-parfait : irréel du passé",
                      definition: "Dans une hypothèse non réalisée : « si » + plus-que-parfait, avec une principale au conditionnel passé.",
                      exemples: ["« **Si** elle **était venue**, j'aurais été heureux » : elle n'est pas venue"],
                      test: "« si » + plus-que-parfait, principale au conditionnel passé : condition non réalisée dans le passé.",
                    },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Le système du récit : imparfait et passé simple",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "Passé simple = premier plan : l'événement ponctuel qui fait avancer le récit (« passa »).",
                        "Imparfait = arrière-plan : le décor, l'état, la durée (« se hâtait »).",
                        "« Une femme passa, [...] elle se hâtait » : un événement, puis un décor qui s'étire.",
                      ],
                      note: "Quand les deux temps coexistent, le signaler enrichit la réponse : « l'imparfait forme le décor du récit, en opposition au passé simple qui marque l'événement. »",
                    },
                  ],
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · Valeur trop vague",
              badge: "Très fréquent",
              faux: "Attribuer une valeur à « regardait » sans lire le reste de la phrase.",
              vrai: "Dans « Ce soir-là, elle regardait les enfants », le repère temporel inscrit l'action dans une scène unique : la valeur est **descriptive**.",
              methode: "Justifier la valeur par un indice précis du contexte.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°2 · Confondre description et habitude",
              badge: "Nuance subtile",
              faux: "Analyser « se hâtait » sans contexte comme un imparfait d'habitude.",
              vrai: "« Ce soir-là, elle se hâtait » décrit une scène unique ; « Chaque soir, elle se hâtait » exprime une habitude.",
              methode: "Chercher un cadre précis ou un marqueur de répétition.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 · Confondre passé composé et plus-que-parfait",
              badge: "Auxiliaire décisif",
              faux: "« avait relu » analysé comme un passé composé.",
              vrai: "L'auxiliaire « avait » est à l'imparfait : c'est un **plus-que-parfait** (le passé composé aurait l'auxiliaire au présent, « a relu »).",
              methode: "Repérer d'abord le temps de l'auxiliaire (voir notion 6), puis nommer la valeur d'antériorité.",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°4 · Oublier de commenter le système imparfait / passé simple",
              badge: "Réponse enrichie",
              faux: "Analyser chaque verbe isolément quand les deux temps coexistent.",
              vrai: "Mentionner l'opposition montre une vraie maîtrise : « imparfait de description qui forme le décor, en opposition au passé simple qui marque l'événement ».",
              methode: "Dès qu'imparfait et passé simple cohabitent dans l'extrait, commenter leur rôle respectif (arrière-plan / premier plan).",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 2 (CP-CE2) :** premiers emplois de l'imparfait et du passé composé, sans métalangage sur les valeurs.\n\n**Cycle 3 :** on oppose explicitement imparfait (décrire, dire ce qui durait) et passé simple (raconter ce qui s'est passé), souvent à partir de contes. Le passé composé apparaît surtout à l'oral et dans les écrits du quotidien.\n\n**Ce que vous devez savoir dire :** « On fait sentir aux élèves que l'imparfait peint le décor et que le passé simple raconte les événements. C'est cette opposition, plus que les terminaisons, qui donne sens aux temps du récit. »",
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
              type: "rappelExpress",
              title: "Rappel express : la formule jury",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "[verbe] est à [temps] de l'indicatif, valeur [nom précis] : il exprime [son rôle dans le texte].",
                    "Imparfait : description · habitude · action en cours · politesse · hypothèse",
                    "Passé simple : action délimitée · succession · rupture",
                    "Passé composé : lien avec le présent · accompli · substitut du passé simple",
                    "Plus-que-parfait : antériorité · irréel du passé",
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ Une valeur se détermine à partir du contexte. Une forme isolée ne suffit pas toujours.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Nommer la valeur d'un temps du passé",
              intro:
                "**Exemple :** « Ce soir-là, ma mère <u>regardait</u> les enfants jouer dans le jardin. »\n**Question typique :** Donnez la valeur du verbe souligné.",
              steps: [
                {
                  number: "1",
                  text: "**Identifier le temps** (imparfait, passé simple, passé composé, plus-que-parfait), comme en notion 6.",
                  example: { lines: ["« regardait » → imparfait"] },
                },
                {
                  number: "2",
                  text: "**Lire le contexte** : décor ou événement ? répétition ou scène unique ? lien avec le présent ? antériorité ?",
                  example: { lines: ["« Ce soir-là » situe une scène unique ; « regardait » présente une action en cours qui forme le cadre de la scène."] },
                },
                {
                  number: "3",
                  text: "**Choisir la valeur précise** et la justifier par un indice du contexte.",
                  example: { lines: ["Le repère « ce soir-là » exclut ici l'habitude : la valeur est descriptive."] },
                },
                {
                  number: "💡",
                  text: "**Rédiger la formule jury :** temps + valeur + rôle dans le texte.",
                  example: { lines: ["« regardait » est à l'imparfait de l'indicatif, valeur descriptive : il forme le décor affectif de la scène."] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Donnez la valeur de « passa » dans « Une femme passa, tenant son enfant ».",
              correction: [
                { type: "line", text: "« passa » est au passé simple de l'indicatif, valeur d'action délimitée : il exprime un événement ponctuel qui ouvre la scène et fait surgir la femme." },
                { type: "note", text: "Réponse complète du premier coup ? Vous tenez la formule. Sinon, reprenez les étapes 2 et 3." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Commenter le système du récit",
              intro:
                "**Exemple :** « Une femme <u>passa</u>. Elle <u>se hâtait</u>, les yeux baissés. »\n**Question typique :** Analysez l'emploi des temps dans cet extrait.",
              steps: [
                {
                  number: "1",
                  text: "**Repérer les passés simples** (premier plan, événements) et les **imparfaits** (arrière-plan, décor).",
                  example: { lines: ["« passa » (événement) / « se hâtait » (décor)"] },
                },
                {
                  number: "2",
                  text: "**Nommer la valeur de chacun**, puis relier les deux dans une phrase de synthèse.",
                },
                {
                  number: "💡",
                  text: "**Formuler l'opposition :** « l'imparfait forme le décor en opposition au passé simple qui marque l'événement ». Quand un temps est employé seul (imparfait exclusif), commenter aussi cet effet.",
                  example: { lines: ["Dans une scène composée uniquement d'imparfaits, les actions et les états sont présentés sans limites nettes."] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Dans « Elle lisait quand il arriva », quel temps est l'arrière-plan, lequel est le premier plan ?",
              correction: [
                { type: "line", text: "« lisait » (imparfait) = arrière-plan, action en cours ; « arriva » (passé simple) = premier plan, événement de rupture qui interrompt la lecture." },
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
                  objectifId: "tp1",
                  question: "Que signifie donner la valeur d'un temps ?",
                  options: [
                    "Réciter sa terminaison",
                    "Expliquer son rôle dans le contexte",
                    "Donner seulement sa date",
                    "Indiquer le groupe du verbe",
                  ],
                  correctIndex: 1,
                  explanation:
                    "La valeur indique ce que le temps exprime dans la phrase : description, habitude, événement, antériorité ou hypothèse, par exemple.",
                },
                {
                  objectifId: "tp2",
                  question: "Dans « Je voulais vous demander un service », quelle est la valeur de l'imparfait ?",
                  options: ["Description", "Habitude", "Politesse", "Condition"],
                  correctIndex: 2,
                  explanation:
                    "L'imparfait atténue ici une demande directe pour l'adoucir : c'est la valeur de politesse.",
                },
                {
                  objectifId: "tp6",
                  question: "Quel indice permet d'identifier un imparfait d'habitude ?",
                  options: [
                    "Le test « nous »",
                    "Un marqueur de répétition comme « chaque soir » ou « souvent »",
                    "Le test du passif",
                    "Le test de l'auxiliaire",
                  ],
                  correctIndex: 1,
                  explanation:
                    "L'habitude est signalée par le contexte et par des marqueurs de répétition comme « chaque soir », « souvent » ou « toujours ».",
                },
                {
                  objectifId: "tp3",
                  question: "Dans « Une femme passa », quelle est la valeur du passé simple ?",
                  options: ["Action délimitée", "Succession", "Rupture", "Habitude"],
                  correctIndex: 0,
                  explanation:
                    "« passa » exprime un événement ponctuel qui ouvre le récit : valeur d'action délimitée (premier plan).",
                },
                {
                  objectifId: "tp4",
                  question: "Dans un récit à la première personne, le passé composé peut servir à :",
                  options: ["Décrire un décor", "Raconter les événements de premier plan", "Exprimer une hypothèse", "Marquer une habitude"],
                  correctIndex: 1,
                  explanation:
                    "Dans un récit au passé, le passé composé peut porter les événements principaux, comme le passé simple dans un récit littéraire classique.",
                },
                {
                  objectifId: "tp5",
                  question: "Dans « Elle avait relu sa lettre avant de la poster », le plus-que-parfait a une valeur de :",
                  options: ["Accompli", "Antériorité", "Habitude", "Rupture"],
                  correctIndex: 1,
                  explanation:
                    "Le plus-que-parfait situe « relire » avant un autre moment du passé (« poster ») : valeur d'antériorité.",
                },
                {
                  objectifId: "tp7",
                  question: "Dans le système du récit, l'imparfait correspond à :",
                  options: [
                    "Le premier plan (l'événement)",
                    "L'arrière-plan (le décor, l'état, la durée)",
                    "L'antériorité",
                    "La succession d'événements",
                  ],
                  correctIndex: 1,
                  explanation:
                    "L'imparfait forme l'arrière-plan (décor, durée) ; le passé simple porte les événements de premier plan.",
                },
                {
                  objectifId: "tp2",
                  question: "Dans « Si elle venait demain, je serais heureux », quelle est la valeur de l'imparfait « venait » ?",
                  options: ["Habitude", "Hypothèse", "Politesse", "Description"],
                  correctIndex: 1,
                  explanation:
                    "« si » + imparfait présente ici la venue comme une hypothèse. Le contexte seul permettrait de préciser si elle est possible, peu probable ou irréelle.",
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
              sub: "Nommer la valeur, appliquer les tests",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 1 : Valeurs de l'imparfait",
              objectifTag: "Imparfait",
              question:
                "Donnez la valeur de l'imparfait :\na) « Ce soir-là, ma mère regardait les enfants jouer. »   b) « Chaque soir, il rentrait seul. »   c) « Elle lisait quand il arriva. »   d) « Je voulais vous demander un service. »   e) « Si elle venait demain, je serais heureux. »",
              correction: [
                { type: "line", label: "a)", text: "Description (action en cours, décor affectif)" },
                { type: "line", label: "b)", text: "Habitude (action répétée, signalée par « chaque soir »)" },
                { type: "line", label: "c)", text: "Action en cours interrompue (par « arriva », passé simple)" },
                { type: "line", label: "d)", text: "Politesse (atténuation de la demande)" },
                { type: "line", label: "e)", text: "Hypothèse (la venue est envisagée ; le contexte ne permet pas de la déclarer irréelle)" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 2 : Valeurs du passé simple",
              objectifTag: "Passé simple",
              question:
                "Donnez la valeur du passé simple :\na) « Une femme passa. »   b) « Elle posa son livre, regarda, se leva. »   c) « Elle lisait quand il arriva. »",
              correction: [
                { type: "line", label: "a)", text: "Action délimitée (événement ponctuel, surgissement)" },
                { type: "line", label: "b)", text: "Succession (trois actions enchaînées chronologiquement)" },
                { type: "line", label: "c)", text: "Rupture (interrompt l'action en cours à l'imparfait)" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 3 : Valeurs du passé composé",
              objectifTag: "Passé composé",
              question:
                "Donnez la valeur du passé composé :\na) « Depuis ce jour, je n'ai jamais oublié cette scène. »   b) « Je suis entré, j'ai posé mon sac et je me suis assis. »   c) « Il a fini son travail : il peut partir. »",
              correction: [
                { type: "line", label: "a)", text: "Lien avec le présent : le souvenir se prolonge jusqu'au moment de l'énonciation." },
                { type: "line", label: "b)", text: "Temps du récit : les passés composés enchaînent les événements de premier plan." },
                { type: "line", label: "c)", text: "Accompli avec résultat présent : le travail terminé permet de partir maintenant." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 4 : Description ou habitude ?",
              objectifTag: "Indices du contexte",
              question:
                "Appuyez-vous sur les marqueurs du contexte :\na) « Ce soir-là, elle se hâtait. »   b) « Chaque soir, elle se hâtait. »   c) « Pendant le repas, elle ne disait rien. »   d) « À cette époque, elle ne disait jamais rien. »",
              correction: [
                { type: "line", label: "a)", text: "Description d'une action en cours dans une scène unique, signalée par « ce soir-là »." },
                { type: "line", label: "b)", text: "Habitude, signalée par « chaque soir »." },
                { type: "line", label: "c)", text: "Description d'un comportement pendant une scène précise, délimitée par « pendant le repas »." },
                { type: "line", label: "d)", text: "Habitude, signalée par « à cette époque » et « jamais »." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : Analyser",
              sub: "Réponse jury complète, système du récit",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 5 : Réponse jury complète",
              question:
                "Rédigez la réponse jury complète :\na) « Ce soir-là, ma mère regardait les enfants jouer. »   b) « Une femme passa. »   c) « Depuis ce jour, je n'ai jamais oublié cette scène. »   d) « Elle avait relu sa lettre avant de la poster. »",
              correction: [
                { type: "line", label: "a)", text: "« regardait » est à l'imparfait de l'indicatif, valeur descriptive : il exprime une action en cours dans le passé qui forme le décor affectif de la scène." },
                { type: "line", label: "b)", text: "« passa » est au passé simple de l'indicatif, valeur d'action délimitée : il exprime un événement ponctuel qui ouvre le récit." },
                { type: "line", label: "c)", text: "« n'ai jamais oublié » est au passé composé de l'indicatif, valeur de lien avec le présent : l'oubli nié se prolonge jusqu'au moment de l'énonciation." },
                { type: "line", label: "d)", text: "« avait relu » est au plus-que-parfait de l'indicatif, valeur d'antériorité : il exprime une action accomplie avant un autre moment du passé." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 6 : Le plus-que-parfait sur la ligne du temps",
              question:
                "Placez chaque verbe dans l'ordre chronologique et expliquez l'antériorité :\n« Elle avait relu sa lettre, puis la posta et sortit sans se retourner. »",
              correction: [
                { type: "line", text: "① avait relu (plus-que-parfait) : antérieur aux deux actions suivantes." },
                { type: "line", text: "② posta (passé simple) : premier événement." },
                { type: "line", text: "③ sortit (passé simple) : second événement." },
                { type: "note", text: "Le plus-que-parfait place « relire » avant le moment de référence du récit. Le connecteur « puis » ordonne ensuite les deux actions au passé simple." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 7 : Corriger l'analyse",
              question:
                "Ces analyses sont-elles correctes ? Corrigez si nécessaire :\na) Dans « Ce soir-là, elle regardait les enfants », « regardait » a une valeur d'habitude.   b) Dans « Chaque soir, elle se hâtait », « se hâtait » a une valeur descriptive.   c) « avait relu » est un passé composé à valeur d'accompli.   d) Dans « Pendant le repas, elle souriait et ne disait rien », les deux imparfaits ont la même valeur.",
              correction: [
                { type: "line", label: "a)", text: "Faux : « ce soir-là » situe une scène unique ; « regardait » décrit une action en cours." },
                { type: "line", label: "b)", text: "Faux : « chaque soir » marque la répétition ; « se hâtait » exprime une habitude." },
                { type: "line", label: "c)", text: "Double erreur : c'est un plus-que-parfait (auxiliaire « avait »), valeur d'antériorité." },
                { type: "line", label: "d)", text: "Correct : dans cette scène précise, « souriait » et « ne disait rien » décrivent deux états ou comportements en cours." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 8 : Réécriture et effet",
              question:
                "Réécrivez en remplaçant les passés simples par des imparfaits, puis proposez deux effets de lecture possibles :\n« Soudain, la porte s'ouvrit. Elle posa son livre, regarda autour d'elle, se leva. »",
              correction: [
                { type: "line", text: "« Soudain, la porte s'ouvrait. Elle posait son livre, regardait autour d'elle, se levait. »" },
                { type: "note", text: "Deux lectures sont possibles. Les imparfaits peuvent donner une impression de répétition ou de déroulement ralenti. Avec « soudain », « s'ouvrait » peut aussi être un imparfait narratif : l'événement ponctuel est mis en relief comme s'il se déroulait sous les yeux du lecteur." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : Maîtriser",
              sub: "Extraits littéraires, réponse jury rédigée, système des temps",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 9 · Premier plan et arrière-plan",
              enonce:
                "« Une femme passa, tenant par la main un petit garçon. Elle se hâtait, les yeux baissés, pressée d'atteindre sa maison avant la nuit. »",
              question: "Rédigez la réponse jury pour « passa » et « se hâtait », et commentez leur opposition.",
              correction: [
                { type: "line", text: "« passa » est au passé simple de l'indicatif, valeur d'action délimitée : il fait surgir la femme dans le récit (premier plan)." },
                { type: "line", text: "« se hâtait » est à l'imparfait de l'indicatif, valeur descriptive : il présente une action en cours à l'arrière-plan." },
                { type: "note", text: "Opposition : le passé simple ouvre la scène et fait avancer le récit ; l'imparfait décrit l'action en cours à l'arrière-plan." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 10 · Plusieurs imparfaits dans une même scène",
              enonce:
                "« Ce soir-là, ma mère, dont le regard ne vieillissait pas, regardait les enfants jouer dans le jardin. Elle souriait, muette, heureuse, et ne disait rien. »",
              question: "Rédigez la réponse jury pour « vieillissait », « regardait », « souriait », « disait », et commentez l'emploi exclusif de l'imparfait.",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Temps · valeur"],
                  rows: [
                    ["vieillissait", "Imparfait, valeur descriptive (propriété permanente dans le passé)"],
                    ["regardait", "Imparfait, valeur descriptive (action en cours, décor affectif)"],
                    ["souriait", "Imparfait, valeur descriptive (état en cours, portrait)"],
                    ["disait", "Imparfait, valeur descriptive (comportement pendant cette scène)"],
                  ],
                },
                { type: "note", text: "Les imparfaits présentent les propriétés, actions et comportements sans en montrer les limites. Le repère « ce soir-là » inscrit l'ensemble dans une scène précise." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 11 · État et habitude",
              enonce:
                "« Il aimait les promenades solitaires dans les bois et, chaque soir d'automne, quand il rentrait seul, il sentait le vide de sa vie s'étendre autour de lui. »",
              question: "Rédigez la réponse jury pour « aimait », « rentrait », « sentait », et commentez l'effet de l'imparfait exclusif.",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Temps · valeur"],
                  rows: [
                    ["aimait", "Imparfait, valeur descriptive (goût ou état durable)"],
                    ["rentrait", "Imparfait, valeur d'habitude (action répétée)"],
                    ["sentait", "Imparfait, valeur d'habitude (perception répétée à chaque retour)"],
                  ],
                },
                { type: "note", text: "Le contexte distingue les valeurs : « aimait » décrit un état durable ; « chaque soir » donne à « rentrait » et « sentait » une valeur d'habitude. L'emploi exclusif de l'imparfait présente ici un état et des faits répétés, sans événement ponctuel de premier plan." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 12 · Extrait littéraire : Marguerite Yourcenar",
              enonce:
                "« À seize ans, j'ai vu se rouvrir les portes qui me séparaient du monde : je suis monté sur la terrasse du palais pour regarder les nuages, mais ils étaient moins beaux que ceux de tes crépuscules. »\n*(Marguerite Yourcenar, « Comment Wang-Fô fut sauvé », Nouvelles orientales)*",
              question: "Rédigez la réponse jury pour « ai vu », « séparaient », « suis monté », « étaient », et commentez le système des temps.",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Temps · valeur"],
                  rows: [
                    ["ai vu", "Passé composé, temps du récit (événement de premier plan)"],
                    ["séparaient", "Imparfait, valeur descriptive (état passé durable)"],
                    ["suis monté", "Passé composé, temps du récit (événement de premier plan)"],
                    ["étaient", "Imparfait, valeur descriptive (constat, nuance de déception)"],
                  ],
                },
                { type: "note", text: "Les passés composés portent les événements successifs du récit ; les imparfaits décrivent des états ou propriétés à l'arrière-plan." },
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
              text: "Ces exercices reprennent les formulations du concours pour analyser l'emploi des temps. Lorsqu'un extrait vient d'un sujet récent mais que la question a été adaptée à cette notion, le badge le précise.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 1 : Premier plan et arrière-plan",
              enonce:
                "« Une femme <u>passa</u>, tenant par la main un petit garçon. Elle <u>se hâtait</u>, les yeux baissés. »",
              question: "Rédigez la réponse jury pour « passa » et « se hâtait ».",
              correction: [
                { type: "line", text: "« passa » est au passé simple de l'indicatif, valeur d'action délimitée : il exprime un événement ponctuel qui ouvre la scène." },
                { type: "line", text: "« se hâtait » est à l'imparfait de l'indicatif, valeur descriptive : il présente une action en cours à l'arrière-plan, en opposition au passé simple." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 2 : Deux imparfaits dans une même scène",
              enonce:
                "« Pendant le repas, elle <u>souriait</u>, muette, heureuse, et ne <u>disait</u> rien. »",
              question: "Rédigez la réponse jury pour « souriait » et « disait ». Ont-ils la même valeur ?",
              correction: [
                { type: "line", text: "« souriait » est à l'imparfait de l'indicatif, valeur descriptive : il exprime l'état en cours de la mère, formant son portrait." },
                { type: "line", text: "« disait » est à l'imparfait de l'indicatif, valeur descriptive : il exprime son comportement pendant le repas." },
                { type: "note", text: "Les deux imparfaits ont ici la même valeur descriptive, déterminée par le cadre temporel « pendant le repas »." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 3 : le plus-que-parfait",
              enonce: "« Elle <u>avait relu</u> sa lettre avant de la poster. »",
              question: "Rédigez la réponse jury pour « avait relu ».",
              correction: [
                { type: "line", text: "« avait relu » est au plus-que-parfait de l'indicatif, valeur d'antériorité : il exprime une action accomplie avant un autre moment du passé, ici avant de poster la lettre." },
                { type: "note", text: "💡 Identification de l'auxiliaire (« avait » = imparfait → plus-que-parfait) : voir notion 6." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "Entraînement adapté d'un sujet récent",
              title: "Exercice 4 : Marguerite Yourcenar, Comment Wang-Fô fut sauvé",
              enonce:
                "« À seize ans, j'<u>ai vu</u> se rouvrir les portes qui me <u>séparaient</u> du monde : je <u>suis monté</u> sur la terrasse du palais pour regarder les nuages. »\n*(Marguerite Yourcenar, « Comment Wang-Fô fut sauvé », Nouvelles orientales)*",
              question: "Rédigez la réponse attendue pour « ai vu », « séparaient » et « suis monté », puis commentez le système des temps.",
              correction: [
                { type: "line", text: "« ai vu » est au passé composé de l'indicatif ; il porte un événement de premier plan dans ce récit à la première personne." },
                { type: "line", text: "« séparaient » est à l'imparfait de l'indicatif, valeur descriptive : il exprime un état passé durable." },
                { type: "line", text: "« suis monté » est au passé composé de l'indicatif ; il porte le second événement de premier plan." },
                { type: "note", text: "Les passés composés font progresser le récit ; l'imparfait décrit un état durable à l'arrière-plan." },
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
              title: "Exercice 1 · Réponse à corriger : « regardait »",
              enonce: "Réponse d'un candidat : « **regardait** : imparfait de l'indicatif, valeur d'habitude », pour *« Ce soir-là, ma mère regardait les enfants jouer. »*",
              question: "Pourquoi cette réponse est-elle incorrecte ? Rédigez la réponse attendue.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "« ce soir-là » situe une scène unique : la valeur d'habitude n'est pas justifiée", bad: true },
                    { text: "Réponse attendue : valeur descriptive, action en cours dans le passé qui forme le décor affectif de la scène" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 2 · Réponse à corriger : « se hâtait »",
              enonce: "Réponse d'un candidat : « **se hâtait** : imparfait d'habitude », pour *« Ce soir-là, elle se hâtait, les yeux baissés. »*",
              question: "Identifiez l'erreur et rédigez la réponse attendue.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Le repère « ce soir-là » inscrit l'action dans une scène unique : ce n'est pas une habitude", bad: true },
                    { text: "Réponse attendue : imparfait, valeur descriptive (état en cours dans la scène décrite)" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 3 · Réponse à corriger : « avait relu »",
              enonce: "Réponse d'un candidat : « **avait relu** : passé composé, valeur : action passée accomplie », pour *« Elle avait relu sa lettre avant de la poster. »*",
              question: "Identifiez les deux erreurs et rédigez la réponse attendue.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Temps faux : l'auxiliaire « avait » est à l'imparfait → plus-que-parfait, pas passé composé", bad: true },
                    { text: "Valeur imprécise : il faut nommer l'antériorité par rapport à un autre moment du passé", bad: true },
                    { text: "Réponse attendue : plus-que-parfait de l'indicatif, valeur d'antériorité (action accomplie avant de poster la lettre)" },
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
                  question: "Quels sont les principaux emplois de l'imparfait ?",
                  answer:
                    "1. **Description** (état, action en cours, décor).\n2. **Habitude** (action répétée).\n3. **Action en cours interrompue** (+ passé simple).\n4. **Politesse** (atténuation d'une demande).\n5. **Hypothèse** (si + imparfait, principale généralement au conditionnel présent).",
                },
                {
                  question: "Quelles sont les 3 valeurs du passé simple ?",
                  answer:
                    "**Action délimitée** (événement ponctuel, premier plan) ; **succession** (actions enchaînées) ; **rupture** (interrompt un imparfait).",
                  astuce: "💡 Registre : écrit littéraire, récit distancé, souvent à la 3e personne.",
                },
                {
                  question: "Quelles sont les 3 valeurs du passé composé ?",
                  answer:
                    "**Lien avec le présent** (souvenir ou résultat vivant) ; **accompli** (résultat acquis) ; **substitut du passé simple** (oral, récit à la 1re personne).",
                },
                {
                  question: "Quelles sont les 2 valeurs du plus-que-parfait ?",
                  answer:
                    "**Antériorité** (action avant un autre passé) ; **irréel du passé** (si + plus-que-parfait, principale au conditionnel passé).",
                },
                {
                  question: "Comment distinguer description et habitude à l'imparfait ?",
                  answer:
                    "On lit le contexte. Un cadre précis (« ce soir-là », « pendant le repas ») oriente vers la description ; un marqueur de répétition (« chaque soir », « souvent ») indique l'habitude.",
                  astuce: "⚠️ Même temps, valeurs différentes : le contexte seul décide.",
                },
                {
                  question: "Le système du récit : imparfait et passé simple ?",
                  answer:
                    "**Imparfait** = arrière-plan (décor, état, durée) : on peut s'y attarder.\n**Passé simple** = premier plan (événement ponctuel) : il fait avancer le récit.\n« Elle lisait [décor] quand il arriva [événement]. »",
                },
                {
                  question: "Formule jury pour un imparfait de description ?",
                  answer:
                    "« [verbe] est à l'imparfait de l'indicatif, valeur descriptive : il exprime [état / action en cours] dans le passé qui [rôle : décor, portrait, cadre…]. »",
                  astuce: "💡 Citez toujours l'indice du contexte qui justifie la valeur.",
                },
                {
                  question: "Quel rôle le passé composé peut-il jouer dans un récit ?",
                  answer:
                    "Il peut porter les événements de premier plan et les enchaîner, notamment dans un récit oral ou à la première personne.",
                  astuce: "💡 Exemple : « Je suis entré, j'ai posé mon sac et je me suis assis. »",
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
              center: { title: "Les temps du passé", subtitle: "Nommer la valeur" },
              branches: [
                {
                  title: "Emplois de l'imparfait",
                  lines: ["Description · habitude", "Action en cours interrompue", "Politesse · hypothèse"],
                  variant: "blue",
                },
                {
                  title: "Passé simple (3 valeurs)",
                  lines: ["Action délimitée", "Succession", "Rupture"],
                  variant: "blue",
                },
                {
                  title: "Passé composé / PQP",
                  lines: ["PC : lien au présent, accompli, substitut du PS", "PQP : antériorité, irréel du passé"],
                  variant: "green",
                },
                {
                  title: "Système du récit",
                  lines: ["Imparfait = arrière-plan (décor)", "Passé simple = premier plan (événement)"],
                  variant: "green",
                },
                {
                  title: "Renvoi",
                  lines: ["Identifier mode et temps", "→ notion 6"],
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
