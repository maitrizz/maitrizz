import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "tp1", label: "Je sais que la difficulté n'est pas d'identifier le temps (notion 6) mais de nommer sa valeur avec précision : je n'écris jamais « valeur : passé »" },
  { id: "tp2", label: "Je connais les 5 valeurs de l'imparfait : description, habitude, action en cours interrompue, politesse, condition" },
  { id: "tp3", label: "Je connais les 3 valeurs du passé simple : action délimitée, succession d'événements, rupture" },
  { id: "tp4", label: "Je connais les 3 valeurs du passé composé : lien avec le présent, accompli, substitut du passé simple (récit à la 1re personne)" },
  { id: "tp5", label: "Je connais les 2 valeurs du plus-que-parfait : antériorité dans le passé, irréel du passé (si + plus-que-parfait)" },
  { id: "tp6", label: "Je distingue la description de l'habitude à l'imparfait grâce au test « chaque jour »" },
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
    "Fiche CRPE complète sur les valeurs des temps du passé : les 5 valeurs de l'imparfait, les 3 valeurs du passé simple, les 3 valeurs du passé composé, les 2 valeurs du plus-que-parfait, le système du récit (imparfait et passé simple). Méthode de réponse jury, test « chaque jour », exercices corrigés, flashcards et auto-évaluation.",
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
                  title: "Nommer la valeur, pas seulement le temps",
                  text: "Identifier le temps relève de la notion 6. Ici, on nomme sa valeur précise : « valeur : passé » ne dit rien.",
                },
                {
                  number: "②",
                  title: "Les 5 valeurs de l'imparfait",
                  text: "Description, habitude, action en cours interrompue, politesse, condition.",
                },
                {
                  number: "③",
                  title: "Passé simple et passé composé",
                  text: "3 valeurs chacun : action délimitée, succession, rupture ; lien avec le présent, accompli, substitut du passé simple.",
                },
                {
                  number: "④",
                  title: "Plus-que-parfait et système du récit",
                  text: "Antériorité, irréel du passé ; et l'opposition imparfait (décor) / passé simple (événement).",
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
              text: "Reconnaître qu'un verbe est à l'imparfait, c'est la notion 6. La vraie difficulté, à ce stade, est de **nommer sa valeur** dans le contexte. Le jury perd patience devant « valeur : passé » ou « action passée » : ces formulations ne disent rien. Cette fiche apprend à nommer la valeur avec précision et à rédiger la réponse attendue.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Nommer la valeur, pas seulement le temps",
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
                  text: "Ne jamais s'arrêter à « valeur : passé ». Demandez-vous : ce temps **décrit-il, raconte-t-il, situe-t-il avant un autre passé ?** C'est cette précision qui rapporte les points.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Les 5 valeurs de l'imparfait",
              blocks: [
                {
                  type: "paragraph",
                  text: "L'imparfait exprime toujours une **durée, un état ou une répétition** dans le passé : jamais un événement ponctuel. Selon le contexte, il prend cinq valeurs.",
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
                      test: "Ajouter « chaque jour » est impossible ici : c'est une description, pas une habitude.",
                    },
                    {
                      title: "Habitude dans le passé",
                      definition: "Action répétée ou régulière dans le passé.",
                      exemples: [
                        "« Il **aimait** les soirs d'automne, quand il **rentrait** seul » : goût et action récurrents",
                      ],
                      test: "Ajouter « chaque jour / toujours » est naturel : c'est une habitude.",
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
                      title: "Condition (si + imparfait)",
                      definition: "Hypothèse irréelle du présent, dans une proposition en « si ». La principale est au conditionnel présent.",
                      exemples: [
                        "« **Si** elle **venait**, je serais heureux » : elle ne vient pas (hypothèse irréelle)",
                      ],
                      test: "« si » + imparfait, avec une principale au conditionnel présent (« je serais »), temps de l'indicatif.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Les valeurs du passé simple et du passé composé",
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
              title: "Le plus-que-parfait et le système du récit",
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
              faux: "« regardait → imparfait, valeur : passé ».",
              vrai: "« Passé » est la valeur commune à tous les temps du passé : elle ne dit rien. Préciser : **valeur descriptive** (action en cours dans le passé qui forme le décor).",
              methode: "Toujours nommer ce que le temps fait : décrire, raconter un événement, marquer une antériorité, exprimer une habitude…",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°2 · Confondre description et habitude",
              badge: "Nuance subtile",
              faux: "« se hâtait » analysé comme un imparfait d'habitude.",
              vrai: "Test « chaque jour » : « elle se hâtait chaque jour » n'est pas naturel dans ce contexte : c'est une **description**, pas une habitude.",
              methode: "Ajouter « chaque jour / toujours » : naturel → habitude ; impossible → description.",
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
              type: "callout",
              variant: "success",
              icon: "",
              title: "Une démarche, une formule",
              text: "Nommer une valeur, c'est appliquer une démarche simple et la couler dans la formule jury. Une seconde méthode apprend à commenter le système du récit.",
            },
            {
              type: "rappelExpress",
              title: "Rappel express : la formule jury",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "[verbe] est à [temps] de l'indicatif, valeur [nom précis] : il exprime [son rôle dans le texte].",
                    "Imparfait : descriptive · d'habitude · d'action en cours · de politesse · conditionnelle",
                    "Passé simple : action délimitée · succession · rupture",
                    "Passé composé : lien avec le présent · accompli · substitut du passé simple",
                    "Plus-que-parfait : antériorité · irréel du passé",
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ Jamais « valeur : passé ». Toujours une valeur précise + ce que le temps fait dans le texte.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Nommer la valeur d'un temps du passé",
              intro:
                "**Question typique :** « Donnez la valeur du verbe souligné. »\nLe temps est déjà identifié (notion 6) ; on s'occupe ici de la valeur.",
              steps: [
                {
                  number: "1",
                  text: "**Identifier le temps** (imparfait, passé simple, passé composé, plus-que-parfait), comme en notion 6.",
                  example: { lines: ["« regardait » → imparfait"] },
                },
                {
                  number: "2",
                  text: "**Lire le contexte** : décor ou événement ? répétition ou scène unique ? lien avec le présent ? antériorité ?",
                  example: { lines: ["« regardait les enfants jouer » → action en cours qui plante le décor"] },
                },
                {
                  number: "3",
                  text: "**Choisir la valeur précise** et appliquer le test utile (« chaque jour » pour départager description et habitude).",
                  example: { lines: ["« regardait chaque jour » → forcé ici → description, pas habitude"] },
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
                "**Question typique :** « Analysez l'emploi des temps dans cet extrait. »\nQuand imparfait et passé simple coexistent, on commente leur opposition.",
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
                  example: { lines: ["Imparfait exclusif chez Colette ou Maupassant : un souvenir figé, sans événement"] },
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
                  question: "Pourquoi « valeur : passé » est-elle une réponse insuffisante ?",
                  options: [
                    "Parce qu'elle est trop longue",
                    "Parce que c'est la valeur commune à tous les temps du passé : elle ne dit rien de précis",
                    "Parce que le passé n'a pas de valeur",
                    "Parce qu'il faut donner le groupe du verbe",
                  ],
                  correctIndex: 1,
                  explanation:
                    "Tous les temps du passé expriment « le passé ». Le jury attend la valeur précise (description, habitude, antériorité…) et son rôle dans le texte.",
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
                  question: "Quel test distingue la description de l'habitude à l'imparfait ?",
                  options: [
                    "Le test « nous »",
                    "Ajouter « chaque jour / toujours » : naturel → habitude, impossible → description",
                    "Le test du passif",
                    "Le test de l'auxiliaire",
                  ],
                  correctIndex: 1,
                  explanation:
                    "« il rentrait chaque soir » est naturel (habitude) ; « elle se hâtait chaque jour » est forcé ici (description).",
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
                  question: "Dans « J'ai vu se rouvrir les portes » (récit à la 1re personne), le passé composé a une valeur de :",
                  options: ["Antériorité", "Lien avec le présent", "Condition", "Description"],
                  correctIndex: 1,
                  explanation:
                    "Le passé composé relie le souvenir au présent du narrateur : l'action passée reste vivante dans sa mémoire.",
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
                  question: "Dans « Si elle venait, je serais heureux », quelle est la valeur de l'imparfait « venait » ?",
                  options: ["Habitude", "Condition (hypothèse irréelle du présent)", "Politesse", "Description"],
                  correctIndex: 1,
                  explanation:
                    "« si » + imparfait exprime une hypothèse irréelle du présent ; la principale « je serais » est au conditionnel présent (temps de l'indicatif).",
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
                "Donnez la valeur de l'imparfait :\na) « Ma mère regardait les enfants jouer. »   b) « Il aimait les soirs d'automne, quand il rentrait seul. »   c) « Elle lisait quand il arriva. »   d) « Je voulais vous demander un service. »   e) « Si elle venait, je serais heureux. »",
              correction: [
                { type: "line", label: "a)", text: "Description (action en cours, décor affectif)" },
                { type: "line", label: "b)", text: "Habitude (goût et action récurrents)" },
                { type: "line", label: "c)", text: "Action en cours interrompue (par « arriva », passé simple)" },
                { type: "line", label: "d)", text: "Politesse (atténuation de la demande)" },
                { type: "line", label: "e)", text: "Condition (hypothèse irréelle du présent ; principale « je serais » au conditionnel présent)" },
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
                "Donnez la valeur du passé composé :\na) « J'ai vu se rouvrir les portes. »   b) « Je suis monté sur la terrasse. » (récit à la 1re personne)   c) « Il a fini son travail. »",
              correction: [
                { type: "line", label: "a)", text: "Lien avec le présent (souvenir vivant, 1re personne)" },
                { type: "line", label: "b)", text: "Substitut du passé simple (récit intime à la 1re personne)" },
                { type: "line", label: "c)", text: "Accompli (résultat acquis au moment où l'on parle)" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 4 : Description ou habitude ?",
              objectifTag: "Test « chaque jour »",
              question:
                "Appliquez le test « chaque jour » :\na) « elle se hâtait »   b) « il aimait les soirs d'automne »   c) « elle ne disait rien »   d) « les portes me séparaient du monde »",
              correction: [
                { type: "line", label: "a)", text: "« elle se hâtait chaque jour » → forcé ici → description" },
                { type: "line", label: "b)", text: "« il aimait les soirs d'automne chaque automne » → naturel → habitude" },
                { type: "line", label: "c)", text: "« elle ne disait jamais rien » → naturel → habitude" },
                { type: "line", label: "d)", text: "« les portes me séparaient chaque jour » → forcé → description (état permanent)" },
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
                "Rédigez la réponse jury complète :\na) « Ma mère regardait les enfants jouer. »   b) « Une femme passa. »   c) « J'ai vu se rouvrir les portes. »   d) « Elle avait relu sa lettre. »",
              correction: [
                { type: "line", label: "a)", text: "« regardait » est à l'imparfait de l'indicatif, valeur descriptive : il exprime une action en cours dans le passé qui forme le décor affectif de la scène." },
                { type: "line", label: "b)", text: "« passa » est au passé simple de l'indicatif, valeur d'action délimitée : il exprime un événement ponctuel qui ouvre le récit." },
                { type: "line", label: "c)", text: "« ai vu » est au passé composé de l'indicatif, valeur de lien avec le présent : il exprime un souvenir qui reste vivant dans la mémoire du narrateur." },
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
                { type: "note", text: "Le plus-que-parfait place « relire » avant les deux passés simples. Sans lui, l'ordre chronologique serait ambigu." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 7 : Corriger l'analyse",
              question:
                "Ces analyses sont-elles correctes ? Corrigez :\na) « regardait → imparfait, valeur : passé »   b) « se hâtait → imparfait d'habitude »   c) « avait relu → passé composé, valeur : accompli »   d) « souriait » et « disait » → même valeur",
              correction: [
                { type: "line", label: "a)", text: "Valeur trop vague : « valeur descriptive » (action en cours dans le passé)." },
                { type: "line", label: "b)", text: "Faux : test « chaque jour » forcé ici → description, pas habitude." },
                { type: "line", label: "c)", text: "Double erreur : c'est un plus-que-parfait (auxiliaire « avait »), valeur d'antériorité." },
                { type: "line", label: "d)", text: "Faux : « souriait » = description, « disait » = habitude (« elle ne disait jamais rien »)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 8 : Réécriture et effet",
              question:
                "Réécrivez en remplaçant les passés simples par des imparfaits, puis commentez l'effet :\n« Soudain, la porte s'ouvrit. Elle posa son livre, regarda autour d'elle, se leva. »",
              correction: [
                { type: "line", text: "« Soudain, la porte s'ouvrait. Elle posait son livre, regardait autour d'elle, se levait. »" },
                { type: "note", text: "À l'imparfait, les actions perdent leur caractère ponctuel : elles semblent s'étirer ou se répéter. « Soudain » devient contradictoire avec la durée de l'imparfait ; le récit perd sa dynamique et son effet de surprise." },
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
              title: "Exercice 9 · Extrait littéraire : Émile Zola",
              enonce:
                "« Une femme passa, tenant par la main un petit garçon. Elle se hâtait, les yeux baissés, pressée d'atteindre sa maison avant la nuit. »\n*(Émile Zola, Germinal, 1885)*",
              question: "Rédigez la réponse jury pour « passa » et « se hâtait », et commentez leur opposition.",
              correction: [
                { type: "line", text: "« passa » est au passé simple de l'indicatif, valeur d'action délimitée : il fait surgir la femme dans le récit (premier plan)." },
                { type: "line", text: "« se hâtait » est à l'imparfait de l'indicatif, valeur descriptive : il décrit l'état de la femme et forme le décor (arrière-plan)." },
                { type: "note", text: "Opposition : le passé simple ouvre la scène et fait avancer le récit, l'imparfait la décrit. Système classique du récit réaliste de Zola." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 10 · Extrait littéraire : Colette",
              enonce:
                "« Ma mère, dont le regard ne vieillissait pas, regardait les enfants jouer dans le jardin. Elle souriait, muette, heureuse, et ne disait rien. »\n*(Colette, La Maison de Claudine, 1922)*",
              question: "Rédigez la réponse jury pour « vieillissait », « regardait », « souriait », « disait », et commentez l'emploi exclusif de l'imparfait.",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Temps · valeur"],
                  rows: [
                    ["vieillissait", "Imparfait, valeur descriptive (propriété permanente dans le passé)"],
                    ["regardait", "Imparfait, valeur descriptive (action en cours, décor affectif)"],
                    ["souriait", "Imparfait, valeur descriptive (état en cours, portrait)"],
                    ["disait", "Imparfait, valeur d'habitude (elle ne disait jamais rien)"],
                  ],
                },
                { type: "note", text: "Imparfait exclusif, aucun passé simple : Colette suspend le temps dans un souvenir figé. Le choix de l'imparfait traduit la contemplation nostalgique." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 11 · Extrait littéraire : Guy de Maupassant",
              enonce:
                "« Il aimait les promenades solitaires dans les bois, et les soirs d'automne, quand il rentrait seul, il sentait le vide de sa vie s'étendre autour de lui. »\n*(Guy de Maupassant, Bel-Ami, 1885)*",
              question: "Rédigez la réponse jury pour « aimait », « rentrait », « sentait », et commentez l'effet de l'imparfait exclusif.",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Temps · valeur"],
                  rows: [
                    ["aimait", "Imparfait, valeur d'habitude (goût régulier)"],
                    ["rentrait", "Imparfait, valeur d'habitude (action répétée)"],
                    ["sentait", "Imparfait, valeur descriptive (perception intérieure continue)"],
                  ],
                },
                { type: "note", text: "Imparfait exclusif : Maupassant traduit le vide intérieur de Bel-Ami. Rien ne se passe, tout se répète : l'absence d'événement (donc de passé simple) est elle-même signifiante." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 12 · Extrait littéraire : Marguerite Yourcenar",
              enonce:
                "« J'ai vu se rouvrir les portes qui me séparaient du monde, je suis monté sur la terrasse, mais ils étaient moins beaux que ceux de tes crépuscules. »\n*(Marguerite Yourcenar, Nouvelles orientales, 1963)*",
              question: "Rédigez la réponse jury pour « ai vu », « séparaient », « suis monté », « étaient », et commentez le système des temps.",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Temps · valeur"],
                  rows: [
                    ["ai vu", "Passé composé, valeur de lien avec le présent (souvenir vivant)"],
                    ["séparaient", "Imparfait, valeur descriptive (état passé durable)"],
                    ["suis monté", "Passé composé, valeur de substitut du passé simple (récit à la 1re personne)"],
                    ["étaient", "Imparfait, valeur descriptive (constat, nuance de déception)"],
                  ],
                },
                { type: "note", text: "Les passés composés portent les actions mémorables, les imparfaits les états. Le passé composé ancre le souvenir dans le présent du narrateur : récit intime, pas narration distancée." },
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
              variant: "crpe",
              title: "Exercice 1 : Émile Zola, Germinal",
              enonce:
                "« Une femme <u>passa</u>, tenant par la main un petit garçon. Elle <u>se hâtait</u>, les yeux baissés. »\n*(Émile Zola, Germinal, 1885)*",
              question: "Rédigez la réponse jury pour « passa » et « se hâtait ».",
              correction: [
                { type: "line", text: "« passa » est au passé simple de l'indicatif, valeur d'action délimitée : il exprime un événement ponctuel qui ouvre la scène." },
                { type: "line", text: "« se hâtait » est à l'imparfait de l'indicatif, valeur descriptive : il exprime l'état en cours de la femme, formant le décor en opposition au passé simple." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 2 : Colette, La Maison de Claudine",
              enonce:
                "« Elle <u>souriait</u>, muette, heureuse, et ne <u>disait</u> rien. »\n*(Colette, La Maison de Claudine, 1922)*",
              question: "Rédigez la réponse jury pour « souriait » et « disait ». Ont-ils la même valeur ?",
              correction: [
                { type: "line", text: "« souriait » est à l'imparfait de l'indicatif, valeur descriptive : il exprime l'état en cours de la mère, formant son portrait." },
                { type: "line", text: "« disait » est à l'imparfait de l'indicatif, valeur d'habitude : il exprime un comportement récurrent (elle ne disait jamais rien)." },
                { type: "note", text: "Même temps, valeurs différentes : c'est le contexte, pas le temps, qui tranche." },
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
              badge: "✦ Format concours récent",
              title: "Exercice 4 : Marguerite Yourcenar, Comment Wang-Fô fut sauvé",
              enonce:
                "« J'<u>ai vu</u> se rouvrir les portes qui me <u>séparaient</u> du monde ; je <u>suis monté</u> sur la terrasse. »\n*(Marguerite Yourcenar, Nouvelles orientales, 1963)*",
              question: "Format identique au concours · Rédigez la réponse jury pour « ai vu », « séparaient » et « suis monté », et commentez le système des temps.",
              correction: [
                { type: "line", text: "« ai vu » est au passé composé de l'indicatif, valeur de lien avec le présent : le souvenir reste vivant dans la mémoire du narrateur." },
                { type: "line", text: "« séparaient » est à l'imparfait de l'indicatif, valeur descriptive : il exprime un état passé durable." },
                { type: "line", text: "« suis monté » est au passé composé de l'indicatif, valeur de substitut du passé simple : récit intime à la 1re personne." },
                { type: "note", text: "Le passé composé ancre le souvenir dans le présent du narrateur ; l'imparfait porte les états. Récit intime, pas narration distancée." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format concours récent",
              title: "Exercice 5 : Lola Lafon, Quand tu écouteras cette chanson",
              enonce:
                "« On <u>écrit</u> parce qu'on ne sait par quel autre biais attraper le réel. Vivre, sans l'écriture, me <u>va</u> mal. »\n*(Lola Lafon, Quand tu écouteras cette chanson, 2023)*",
              question: "Format identique au concours · Rédigez la réponse jury pour « écrit » et « va ».",
              correction: [
                { type: "line", text: "« écrit » est au présent de l'indicatif, valeur de vérité générale : il exprime une affirmation universelle sur la condition de l'écrivain." },
                { type: "line", text: "« va » est au présent de l'indicatif, valeur d'état actuel : il exprime le ressenti de l'auteure au moment où elle écrit." },
                { type: "note", text: "💡 Les valeurs du présent sont approfondies dans la notion 8." },
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
              enonce: "Réponse d'un candidat : « **regardait** : imparfait de l'indicatif, valeur : passé », pour *« Ma mère regardait les enfants jouer. »*",
              question: "Pourquoi cette réponse est-elle insuffisante ? Rédigez la réponse attendue.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "« passé » est la valeur commune à tous les temps du passé : elle ne dit rien", bad: true },
                    { text: "Réponse attendue : valeur descriptive, action en cours dans le passé qui forme le décor affectif de la scène" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 2 · Réponse à corriger : « se hâtait »",
              enonce: "Réponse d'un candidat : « **se hâtait** : imparfait d'habitude », pour *« Elle se hâtait, les yeux baissés. »*",
              question: "Identifiez l'erreur et rédigez la réponse attendue.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Test « chaque jour » : « elle se hâtait chaque jour » est forcé dans ce contexte → pas une habitude", bad: true },
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
                  question: "Quelles sont les 5 valeurs de l'imparfait ?",
                  answer:
                    "1. **Description** (état, action en cours, décor).\n2. **Habitude** (action répétée).\n3. **Action en cours interrompue** (+ passé simple).\n4. **Politesse** (atténuation d'une demande).\n5. **Condition** (si + imparfait, principale au conditionnel présent).",
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
                    "Test « chaque jour / toujours ».\nNaturel → habitude (« il rentrait seul chaque soir »).\nForcé → description (« elle se hâtait » dans une scène unique).",
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
                  astuce: "💡 Jamais « valeur : passé ».",
                },
                {
                  question: "Pourquoi un récit à la 1re personne emploie-t-il souvent le passé composé ?",
                  answer:
                    "Le passé composé crée un lien entre le souvenir et le présent du narrateur : les événements restent vivants dans sa mémoire. Le passé simple donnerait une narration plus froide et distancée.",
                  astuce: "💡 Exemple : « j'ai vu… je suis monté… » (récit intime).",
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
                  title: "Imparfait (5 valeurs)",
                  lines: ["Description · habitude", "Action en cours interrompue", "Politesse · condition"],
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
                  title: "Réflexes",
                  lines: ["Jamais « valeur : passé »", "Test « chaque jour »", "Commenter l'opposition des temps"],
                  variant: "yellow",
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
