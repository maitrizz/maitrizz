import type { Fiche } from "@/components/fiche/types";
import { EXERCICES_TEMPS_DU_PASSE } from "./exercices-temps-du-passe";
import { COPIES_TEMPS_DU_PASSE } from "./copies-temps-du-passe";

export const SAVOIR_FAIRE = [
  { id: "imparfait", label: "Imparfait" },
  { id: "passe-simple", label: "Passé simple" },
  { id: "passe-compose", label: "Passé composé" },
  { id: "plus-que-parfait", label: "Plus-que-parfait" },
  { id: "valeurs", label: "Valeurs des temps" },
  { id: "concordance", label: "Concordance" },
];

export const ficheTempsDuPasse: Fiche = {
  slug: "temps-du-passe",
  matiere: "francais",
  numero: 8,
  partie: "Partie 1 : Le verbe",
  title: "Les temps du passé",
  subtitle: "Nommer la valeur de l'imparfait, du passé simple, du passé composé et du plus-que-parfait.",
  badges: [
      {
          "label": "★★★ Tombe chaque année",
          "variant": "hot"
      },
      {
          "label": "Cycle 3-4 · BOEN n°1 du 22 janvier 2019",
          "variant": "info"
      }
  ],
  metaTitle: "Temps du passé · Fiche de révision CRPE",
  metaDescription: "Les temps du passé au CRPE : imparfait, passé simple, passé composé, plus-que-parfait, le système du récit. Méthode et exercices corrigés.",
  maitriseNotionSlug: "temps-du-passe",
  tabGroups: [
    {
      id: "apprendre",
      label: "Apprendre",
      icon: "",
      tabs: [
        {
          id: "comprendre",
          label: "Comprendre",
          icon: "",
          blocks: [
            {
              type: "callout",
              variant: "info",
              icon: "",
              title: "Avant de commencer",
              text: "Dans la notion 7, vous avez appris à identifier le mode et le temps d'un verbe. Ici, vous allez déterminer la **valeur des temps du passé dans leur contexte** : description, habitude, événement ou antériorité.",
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
                      note: "L'identification du temps (imparfait, passé simple…) se justifie comme en notion 7. Ici, l'essentiel est la valeur, formulée précisément.",
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
              methode: "Repérer d'abord le temps de l'auxiliaire (voir notion 7), puis nommer la valeur d'antériorité.",
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
                "*Question typique : Donnez la valeur du verbe souligné. Exemple : « Ce soir-là, ma mère <u>regardait</u> les enfants jouer dans le jardin. »*",
              steps: [
                {
                  number: "1",
                  text: "**Identifier le temps** (imparfait, passé simple, passé composé, plus-que-parfait), comme en notion 7.",
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
                "*Question typique : Analysez l'emploi des temps dans cet extrait : « Une femme <u>passa</u>. Elle <u>se hâtait</u>, les yeux baissés. »*",
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
                { type: "note", text: "@nav Méthode en tête ? Direction S’entraîner." },
              ],
            },
            {
              type: "ctaBox",
              text: "Méthode bien en tête ? Passez à l’application.",
              buttonLabel: "Aller à Appliquer",
              targetTab: "appliquer",
            },
          ],
        },
      ],
    },
    {
      id: "entrainer",
      label: "S'entraîner",
      icon: "",
      tabs: [
        {
          id: "appliquer",
          label: "Appliquer",
          icon: "",
          blocks: [
            {
              type: "exerciceBank",
              title: "Les temps du passé",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_TEMPS_DU_PASSE,
            },
          ],
        },
        {
          id: "corriger",
          label: "Corriger des erreurs",
          icon: "",
          blocks: [
            {
              type: "callout",
              variant: "info",
              icon: "",
              text: "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
            },
            {
              type: "corrigerCopies",
              title: "Les temps du passé",
              copies: COPIES_TEMPS_DU_PASSE,
            },
          ],
        },
      ],
    },
    {
      id: "memo",
      label: "Mémo",
      icon: "",
      tabs: [
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
                  lines: ["Identifier mode et temps", "→ notion 7"],
                  variant: "purple",
                  dashed: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
