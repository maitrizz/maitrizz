import type { Fiche } from "@/components/fiche/types";
import { EXERCICES_PRESENT_FUTUR_CONDITIONNEL_SUBJONCTIF } from "./exercices-present-futur-conditionnel-subjonctif";
import { COPIES_PRESENT_FUTUR_CONDITIONNEL_SUBJONCTIF } from "./copies-present-futur-conditionnel-subjonctif";

const SAVOIR_FAIRE = [
  { id: "present", label: "Présent" },
  { id: "futur", label: "Futur" },
  { id: "conditionnel", label: "Conditionnel" },
  { id: "subjonctif", label: "Subjonctif" },
  { id: "valeurs", label: "Valeurs des temps" },
  { id: "concordance", label: "Concordance" },
];

export const fichePresentFuturConditionnelSubjonctif: Fiche = {
  slug: "present-futur-conditionnel-subjonctif",
  matiere: "francais",
  numero: 9,
  partie: "Partie 1 : Le verbe",
  title: "Présent, futur, conditionnel et subjonctif",
  subtitle: "Nommer les valeurs du présent, du futur et du conditionnel, et reconnaître les emplois du subjonctif",
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
  metaTitle: "Présent, futur, conditionnel, subjonctif (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Présent, futur, conditionnel et subjonctif au CRPE : les valeurs de chaque temps et les emplois du subjonctif. Test conditionnel/imparfait, exercices corrigés.",
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
              text: "Le présent, le futur, le conditionnel et le subjonctif complètent le système verbal. Deux difficultés dominent les copies : confondre conditionnel et imparfait, et employer l'indicatif à la place du subjonctif. Cette fiche donne les valeurs précises et les formules de réponse jury. L'identification de la forme (terminaisons, test du « r ») relève de la notion 7.",
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
                      exemples: ["« En ce moment, je **lis** le journal » : l'action se déroule au moment où je parle"],
                      test: "L'action a lieu maintenant, au moment de l'énonciation.",
                    },
                    {
                      title: "Habitude",
                      definition: "Action répétée ou régulière.",
                      exemples: ["« Chaque matin, il **se lève** à six heures » : l'action se répète régulièrement"],
                      test: "Ajouter « d'habitude » est naturel.",
                    },
                    {
                      title: "Vérité générale",
                      definition: "Fait valable en tout temps et pour tous : loi, proverbe, maxime.",
                      exemples: [
                        "« Un triangle **possède** trois côtés » : propriété toujours valable",
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
                      title: "Présent à valeur de futur",
                      definition: "Action située après le moment où l'on parle, exprimée au présent.",
                      exemples: ["« Le train **part** demain à huit heures » : action future programmée"],
                      test: "Indicateur temporel futur (demain, bientôt…) + verbe au présent.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Habitude ou vérité générale ?",
                  text: "Le contexte reste décisif, mais le test « d'habitude » peut aider. Si l'ajout est naturel, comme dans « D'habitude, il se lève à six heures », le présent exprime une **habitude**. Si l'ajout rend la phrase incohérente, comme dans « D'habitude, un triangle possède trois côtés », le présent exprime une **vérité générale**.",
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
                      title: "Futur injonctif",
                      definition: "Ordre, consigne ou prescription formulés au futur.",
                      exemples: ["« Tu **feras** tes devoirs avant de sortir »"],
                      test: "La phrase pourrait être reformulée à l'impératif : « Fais tes devoirs avant de sortir. »",
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
                      note: "Les deux sont des temps de l'indicatif. Le « r » est la marque du conditionnel présent (voir notion 7 pour l'identification de la forme).",
                    },
                  ],
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Hypothèse",
                      definition: "Conséquence d'une hypothèse introduite par « si » + imparfait. Le contexte indique si cette hypothèse est possible, peu probable ou irréelle.",
                      exemples: ["« Si elle venait demain, je **serais** heureux » : conséquence d'une hypothèse"],
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
                      exemples: ["« Selon plusieurs sources, le président **serait** en déplacement » : information non vérifiée"],
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
                  text: "Le subjonctif apparaît notamment après un verbe ou une conjonction qui présente le fait comme voulu, redouté, incertain ou nécessaire. Dans la réponse, nommez cet élément et son sens. Exemple : dans « Il faut que tu viennes », « viennes » est au subjonctif présent ; il est introduit par « il faut que », qui exprime la nécessité.",
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
              vrai: "Dans la [Terminologie grammaticale publiée par Éduscol en 2020](https://eduscol.education.gouv.fr/media/67998/download?attachment=), le conditionnel est un **temps de l'indicatif**. Réponse : « conditionnel présent (temps de l'indicatif) ».",
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
              faux: "« Depuis toujours, on écrit pour transmettre des histoires et conserver la mémoire du passé » analysé comme un présent d'habitude.",
              vrai: "Le sujet générique « on » et le repère « depuis toujours » donnent à l'énoncé une portée générale : le présent exprime ici une **vérité générale**, et non le comportement répété d'une personne précise.",
              methode: "Observer la portée de l'énoncé. Sujet précis + marqueur de répétition : habitude. Sujet générique + affirmation valable au-delà d'une situation particulière : vérité générale. Le test « d'habitude » peut confirmer l'analyse.",
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
              type: "rappelExpress",
              title: "Rappel express : les formules jury",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "Présent : action en cours · habitude · vérité générale · présent de narration · valeur de futur",
                    "Futur : action à venir · injonction · vérité générale future",
                    "Conditionnel présent (temps de l'indicatif) : hypothèse · politesse · fait non confirmé · futur dans le passé",
                    "Subjonctif : nommer le déclencheur et la nuance exprimée (volonté, sentiment, doute, nécessité, concession, but…)",
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
                "*Question typique : Donnez la valeur du verbe souligné. Exemple : « Selon plusieurs sources, le président <u>serait</u> en déplacement. »*",
              steps: [
                {
                  number: "1",
                  text: "**Identifier la forme** : présent, futur, conditionnel présent (test du « nous » pour départager conditionnel et imparfait).",
                  example: { lines: ["« serait » → test « nous serions » → conditionnel présent (temps de l'indicatif)"] },
                },
                {
                  number: "2",
                  text: "**Lire le contexte** : y a-t-il un « si » + imparfait (hypothèse) ? une demande (politesse) ? une information rapportée (fait non confirmé) ? un verbe au passé (futur dans le passé) ?",
                  example: { lines: ["« Selon plusieurs sources, le président serait en déplacement » → information rapportée → fait non confirmé"] },
                },
                {
                  number: "💡",
                  text: "**Réponse attendue :** « serait » est au conditionnel présent, temps de l'indicatif. Il présente comme non confirmée l'information rapportée par plusieurs sources.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Donnez la valeur de « écrit » dans « Depuis toujours, on écrit pour transmettre des histoires et conserver la mémoire du passé ».",
              correction: [
                { type: "line", text: "**Réponse attendue :** « écrit » est au présent de l'indicatif, valeur de vérité générale. Le sujet générique « on » et le repère « depuis toujours » présentent l'affirmation comme valable au-delà d'une situation particulière." },
                { type: "note", text: "Réponse complète du premier coup ? Vous tenez la formule." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Reconnaître et justifier un subjonctif",
              intro:
                "*Question typique : Justifiez l'emploi du subjonctif. Exemple : « Il faut qu'elle <u>parte</u> avant midi. »*",
              steps: [
                {
                  number: "1",
                  text: "**Repérer le déclencheur** placé avant le verbe : verbe de volonté, de sentiment, de doute ; conjonction (bien que, pour que, avant que…) ; nécessité (il faut que).",
                  example: { lines: ["« Il faut qu'elle parte » → déclencheur « il faut que » (nécessité)"] },
                },
                {
                  number: "2",
                  text: "**Vérifier que ce n'est pas une certitude affirmée** : « je sais que », « je crois que », « je suis certain que » appellent généralement l'indicatif à la forme affirmative.",
                  example: { lines: ["« Je sais qu'il vient » → certitude → indicatif"] },
                },
                {
                  number: "💡",
                  text: "**Réponse attendue :** « parte » est au présent du subjonctif. Son emploi est déclenché par la tournure impersonnelle « il faut que », qui exprime ici la nécessité d'un départ avant midi.",
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
                { type: "line", text: "**Réponse attendue :** « soit » est au présent du subjonctif. Son emploi est déclenché par la conjonction « bien que », qui exprime la concession." },
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
              title: "Présent, futur, conditionnel et subjonctif",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_PRESENT_FUTUR_CONDITIONNEL_SUBJONCTIF,
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
              title: "Présent, futur, conditionnel et subjonctif",
              copies: COPIES_PRESENT_FUTUR_CONDITIONNEL_SUBJONCTIF,
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
              center: { title: "Présent, futur, conditionnel, subjonctif", subtitle: "Valeurs et emplois" },
              branches: [
                {
                  title: "Présent (5 valeurs)",
                  lines: ["Action en cours · habitude", "Vérité générale", "Narration · valeur de futur"],
                  variant: "blue",
                },
                {
                  title: "Futur (3 valeurs)",
                  lines: ["Action à venir", "Injonction", "Vérité générale future"],
                  variant: "blue",
                },
                {
                  title: "Conditionnel présent",
                  lines: ["Hypothèse · politesse", "Fait non confirmé · futur dans le passé", "Temps de l'indicatif"],
                  variant: "green",
                },
                {
                  title: "Subjonctif",
                  lines: ["Nommer le déclencheur", "Préciser la nuance exprimée", "Certitude affirmée → indicatif"],
                  variant: "green",
                },
                {
                  title: "Renvoi",
                  lines: ["Identifier la forme (terminaisons)", "→ notion 7"],
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
