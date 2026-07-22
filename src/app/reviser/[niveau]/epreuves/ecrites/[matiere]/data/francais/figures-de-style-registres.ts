import type { Fiche } from "@/components/fiche/types";
import { EXERCICES_FIGURES_DE_STYLE_REGISTRES } from "./exercices-figures-de-style-registres";
import { COPIES_FIGURES_DE_STYLE_REGISTRES } from "./copies-figures-de-style-registres";

export const SAVOIR_FAIRE = [
  { id: "images", label: "Images" },
  { id: "opposition", label: "Opposition" },
  { id: "insistance", label: "Insistance" },
  { id: "attenuation", label: "Atténuation" },
  { id: "sonorites", label: "Sonorités" },
  { id: "registres", label: "Registres" },
];

export const ficheFiguresRegistres: Fiche = {
  slug: "figures-de-style-registres",
  matiere: "francais",
  numero: 19,
  partie: "Partie 2 : Lexique",
  title: "Les figures de style et les registres",
  subtitle: "Comparaison, métaphore, personnification, métonymie, synecdoque, hyperbole, litote, antithèse, registres de langue et littéraires.",
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
  metaTitle: "Figures de style et registres · Fiche de révision CRPE",
  metaDescription:
    "Figures de style et registres au CRPE : métaphore, métonymie, hyperbole, antithèse, oxymore, et les registres lyrique, épique, comique. Exercices corrigés.",
  maitriseNotionSlug: "figures-de-style-registres",
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
              text: "Les figures de style exploitent les ressources du langage pour produire un **effet**. Au concours, on demande systématiquement d'**identifier** la figure, de la **nommer** précisément, et surtout d'**analyser son effet** dans le texte. La plupart des candidats savent reconnaître et nommer une figure ; c'est l'analyse de l'effet qui fait défaut, et c'est précisément là que se jouent les points. Retenez ce réflexe dès maintenant : une figure repérée n'a de valeur que si vous dites ce qu'elle produit. Cette notion prolonge le sens propre et le sens figuré vus à la fiche [relations sémantiques](fiche:relations-semantiques) ; sur l'enseignement du lexique, voir les [ressources Lexique et culture d'Éduscol](https://eduscol.education.fr/255/lexique-et-culture).",
            },
            {
              type: "subsection",
              number: "①",
              title: "Les figures d'analogie",
              blocks: [
                {
                  type: "notionCardGrid",
                  columns: 1,
                  cards: [
                    {
                      title: "Comparaison",
                      definition: "Rapproche deux éléments au moyen d'un outil explicite (comme, tel, semblable à, ressembler à).",
                      exemples: [
                        "« Vivre, sans l'écriture, me va mal, **comme** un habit trop lâche. » (comparé : la vie sans écriture ; outil : comme ; comparant : un habit trop lâche)",
                      ],
                      astuce: "Test : un outil visible (comme, tel, semblable à) → comparaison.",
                      test: "**Effet :** rend sensible une idée abstraite par une image concrète ; la ressemblance est suggérée, non imposée, ce qui laisse au lecteur une marge d'interprétation.",
                    },
                    {
                      title: "Métaphore",
                      definition: "Assimile deux éléments sans outil de comparaison (A est B, ou le A de B). Plus forte que la comparaison.",
                      exemples: [
                        "« ma route est une impasse » ; « une humble flamme » (l'inspiration) ; « l'éclaboussure des âmes humaines » (les vices)",
                      ],
                      astuce: "On peut souvent y réinsérer « comme » pour la transformer en comparaison.",
                      test: "**Effet :** rapprochement plus dense et plus saisissant que la comparaison ; en fondant les deux termes, la métaphore condense l'image et oblige le lecteur à reconstruire le lien, donc à s'impliquer.",
                    },
                    {
                      title: "Métaphore filée",
                      definition: "Une métaphore développée sur plusieurs phrases : le même comparant est décliné en images cohérentes.",
                      exemples: [
                        "Métaphore du voyage désorienté : route, impasse, chemin sans destination, terres inconnues, à tâtons, trébucher",
                      ],
                      test: "**Effet :** tisse une cohérence d'image sur tout le passage et installe une vision d'ensemble ; la repérer prouve une lecture globale du texte, ce que le jury valorise.",
                    },
                    {
                      title: "Personnification",
                      definition: "Attribue des caractéristiques humaines (action, sentiment, volonté) à un inanimé, un animal ou une abstraction.",
                      exemples: [
                        "« la langue n'est pas un objet inerte… c'est elle qui nous transforme » : la langue agit comme un sujet",
                      ],
                      test: "**Effet :** donne vie, mouvement et volonté à ce qui n'en a pas ; peut inverser un rapport de force, rendre une abstraction menaçante ou attendrissante selon le contexte.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Comparaison ou métaphore ?",
                  text: "C'est la confusion la plus fréquente. **Comparaison** = « A **comme** B » (outil visible). **Métaphore** = « A **est** B » ou « le A de B » (pas d'outil). Test : peut-on repérer un « comme » ? Si oui, c'est une comparaison.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Figures d'insistance et d'opposition",
              blocks: [
                {
                  type: "notionCardGrid",
                  columns: 1,
                  cards: [
                    {
                      title: "Hyperbole",
                      definition: "Exagération volontaire, par amplification.",
                      exemples: ["« des torrents de larmes » ; « je meurs de faim »"],
                      test: "**Effet :** frappe l'imagination, dramatise ou amuse ; donne du relief à une émotion.",
                    },
                    {
                      title: "Litote",
                      definition: "Dire moins pour suggérer davantage.",
                      exemples: ["« Va, je ne te hais point » (= je t'aime)"],
                      test: "**Effet :** renforce par la retenue ; l'atténuation laisse deviner une intensité plus grande.",
                    },
                    {
                      title: "Antithèse",
                      definition: "Oppose deux termes contraires placés dans des groupes distincts.",
                      exemples: ["« Je vis, je meurs. » (Louise Labé)"],
                      test: "**Effet :** met un contraste en relief, structure une opposition d'idées et dynamise le propos.",
                    },
                    {
                      title: "Oxymore",
                      definition: "Réunit deux termes contradictoires dans le même groupe de mots.",
                      exemples: ["« une obscure clarté » ; « un silence éloquent »"],
                      test: "**Effet :** crée une tension, exprime un paradoxe ou un trouble que les mots seuls ne diraient pas.",
                    },
                    {
                      title: "Anaphore",
                      definition: "Répète un mot en début de phrase ou de membre de phrase.",
                      exemples: ["« Je suis monté… j'ai vu… je suis descendu… »"],
                      test: "**Effet :** martèle, rythme et insiste ; crée un effet d'accumulation et d'amplification.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Litote ou euphémisme ?",
                  text: "La **litote** dit moins pour suggérer **davantage** (amplification par l'atténuation, souvent ironique). L'**euphémisme** atténue par **pudeur** pour éviter un mot trop direct : « il nous a quittés » (= il est mort) est un euphémisme, pas une litote.",
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Antithèse ou oxymore ?",
                  text: "L'**antithèse** oppose deux termes dans des groupes distincts (domination / transformation). L'**oxymore** comprime la contradiction dans un même groupe (« obscure clarté »), créant une tension plus intense.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Les figures de substitution",
              blocks: [
                {
                  type: "notionCardGrid",
                  columns: 1,
                  cards: [
                    {
                      title: "Métonymie",
                      definition: "Désigne une réalité par un autre terme uni à elle par un lien logique réel : le contenant pour le contenu, la cause pour l'effet, le lieu pour l'institution, l'auteur pour l'œuvre, l'instrument pour celui qui s'en sert.",
                      exemples: [
                        "« **Boire un verre** » (le contenant pour le contenu) ; « lire **un Zola** » (l'auteur pour l'œuvre) ; « **l'Élysée** a démenti » (le lieu pour l'institution)",
                      ],
                      astuce: "Lien réel (de contiguïté), pas de ressemblance : c'est ce qui la sépare de la métaphore.",
                      test: "**Effet :** condense l'expression et évoque une réalité par association ; rapide et imagée, elle évite la répétition et joue sur la connivence avec le lecteur.",
                    },
                    {
                      title: "Synecdoque",
                      definition: "Variété de métonymie fondée sur un rapport d'inclusion : la partie pour le tout (ou l'inverse), le singulier pour le pluriel, la matière pour l'objet.",
                      exemples: [
                        "« **Une voile** à l'horizon » (la partie pour le tout : le bateau) ; « les **fers** » pour les chaînes (la matière pour l'objet) ; « gagner son **pain** » (un aliment pour la nourriture)",
                      ],
                      test: "**Effet :** suggère un ensemble par un détail significatif ; en isolant un fragment, elle attire l'attention sur lui et donne du relief à l'image.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Métonymie, synecdoque ou métaphore ?",
                  text: "La **synecdoque** est une métonymie particulière, fondée sur l'**inclusion** (« une voile » pour un bateau) ; la **métonymie** au sens large repose sur un autre lien logique (contenant, cause, lieu…). Au concours, nommer « métonymie » une synecdoque est le plus souvent **accepté** (la synecdoque est un cas de métonymie). À distinguer de la **métaphore**, qui repose sur une **ressemblance** (analogie), non sur un lien réel : « boire un verre » est une métonymie, « un torrent de larmes » une métaphore.",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Les registres",
              blocks: [
                {
                  type: "table",
                  title: "Registres de langue (niveaux de langue)",
                  headers: ["Registre", "Caractéristiques", "Exemple", "Ce qu'il révèle"],
                  rows: [
                    ["Soutenu", "Vocabulaire recherché, syntaxe complexe, tournures littéraires", "« Je ne saurais y consentir. »", "Distance, solennité, maîtrise de la langue ou milieu cultivé"],
                    ["Courant", "Vocabulaire standard, syntaxe correcte sans recherche", "« Je ne peux pas accepter. »", "Neutralité, communication ordinaire entre locuteurs"],
                    ["Familier", "Vocabulaire relâché, syntaxe simplifiée, expressions populaires", "« J'peux pas. »", "Proximité, oralité, spontanéité ; sert souvent à camper un personnage"],
                  ],
                },
                {
                  type: "table",
                  title: "Registres littéraires (ton et atmosphère)",
                  headers: ["Registre", "Caractéristiques", "Effet recherché sur le lecteur"],
                  rows: [
                    ["Lyrique", "Expression des émotions intimes, « je », vocabulaire des sentiments", "Émouvoir, faire partager une émotion personnelle, susciter l'identification"],
                    ["Épique", "Grandeur, héroïsme, amplification (hyperboles, pluriels)", "Grandir le sujet, susciter l'admiration, donner une dimension collective"],
                    ["Pathétique", "Émotion intense, souffrance, malheur", "Émouvoir, susciter la pitié et la compassion pour un personnage"],
                    ["Comique / ironique", "Décalage, jeu de langage, dire le contraire de ce qu'on pense", "Faire rire ou sourire ; l'ironie critique en gardant une distance"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  title: "Deux notions distinctes",
                  text: "Ne pas confondre le **registre de langue** (le niveau de langue : soutenu, courant, familier) et le **registre littéraire** (le ton : lyrique, pathétique…). Un texte peut être de registre de langue soutenu ET de registre littéraire pathétique.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · appeler « métaphore » une comparaison",
              badge: "Erreur très fréquente",
              faux: "« comme un habit trop lâche » est une métaphore.",
              vrai: "La présence de l'outil « comme » en fait une **comparaison**. La métaphore assimile sans outil.",
              methode: "Chercher un outil (comme, tel, semblable à) : s'il y en a un, c'est une comparaison.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 · confondre métaphore simple et filée",
              badge: "Source d'erreurs",
              faux: "« ma route est une impasse » est une métaphore filée.",
              vrai: "C'est une métaphore **simple** (un seul terme). La métaphore filée, c'est l'ensemble du passage : route, impasse, chemin sans destination, terres inconnues, à tâtons.",
              methode: "Après avoir repéré une métaphore, relire tout le passage pour chercher d'autres termes du même domaine.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 · litote ou euphémisme ?",
              badge: "Cas difficile",
              faux: "« il nous a quittés » est une litote.",
              vrai: "C'est un **euphémisme** : on atténue par pudeur. La litote, elle, dit moins pour suggérer davantage (intention d'amplification).",
              methode: "Y a-t-il une amplification cachée (litote) ou seulement une volonté d'adoucir (euphémisme) ?",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°4 · nommer sans analyser l'effet",
              badge: "Perte de points",
              faux: "« “un habit trop lâche” est une comparaison car il y a “comme”. » (et on s'arrête là)",
              vrai: "Il faut **analyser l'effet** : cette image du vêtement mal taillé exprime l'inadéquation de la vie sans écriture à l'autrice, qui s'y perd, s'y empêtre.",
              methode: "Après avoir nommé la figure, toujours expliquer ce qu'elle produit dans le texte (la paraphrase ne suffit pas).",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 1 (maternelle) :** on joue avec les sonorités et le langage (comptines, rimes, formulettes), et les enfants rencontrent des expressions imagées sans aucune analyse.\n\n**Cycle 2 :** on distingue le sens propre du sens figuré (« il pleut des cordes »), on explique des expressions imagées du quotidien et on travaille les niveaux de langue à l'oral (adapter sa façon de parler selon la situation).\n\n**Cycle 3 :** les élèves découvrent la comparaison puis la métaphore simples, et commencent à percevoir l'effet d'une image dans un texte lu ; l'écart entre langage courant et langage soutenu se précise.\n\n**Ce que vous devez savoir dire :** « On enseigne d'abord la comparaison (repérable à “comme”) avant la métaphore, car elle est plus explicite. L'objectif n'est pas d'étiqueter des figures, mais de faire sentir ce qu'une image apporte au texte. » (voir [Éduscol, Lexique et culture](https://eduscol.education.fr/255/lexique-et-culture) et l'[étude de la langue cycles 2 et 3](https://eduscol.education.fr/248/francais-cycles-2-et-3-etude-de-la-langue))",
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
              title: "La méthode d'analyse, pas à pas",
              text: "Repérer la famille d'une figure et la nommer précisément, identifier le registre, puis rédiger une analyse complète : ces démarches valent pour toutes les figures, pas seulement la comparaison et la métaphore. Chacune se termine par un checkpoint et par la formulation exacte attendue le jour J.",
            },
            {
              type: "rappelExpress",
              title: "Rappel express : ce que le jury attend",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "Comparaison = outil explicite ; métaphore = pas d'outil ; filée = développée sur le passage.",
                    "Registre de langue = niveau (soutenu / courant / familier) ; registre littéraire = ton (lyrique, pathétique…).",
                    "Une figure se nomme, se cite, s'explique, et surtout s'analyse dans son effet.",
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ Qualité plus que quantité : mieux vaut analyser finement deux procédés que d'en lister dix sans les expliquer.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Repérer la famille d'une figure et la nommer précisément",
              intro:
                "*Question typique : « Relevez et nommez précisément la figure de style dans la phrase : “ma route est une impasse”. »*",
              steps: [
                {
                  number: "1",
                  text: "**Repérer l'écart de langage et le classer dans une famille.** Un rapprochement de sens → analogie (comparaison, métaphore, personnification). Une exagération ou une atténuation → insistance (hyperbole, litote). Des termes contraires → opposition (antithèse, oxymore). Une répétition en tête de membre → anaphore.",
                  example: { lines: ["« ma route est une impasse » : l'écriture est rapprochée d'un chemin → famille de l'analogie."] },
                },
                {
                  number: "2",
                  text: "**Affiner dans la famille.** Pour l'analogie, chercher l'outil de comparaison (comme, tel, semblable à) : présent → comparaison, absent → métaphore. Pour l'opposition, regarder si les contraires sont dans des groupes distincts (antithèse) ou dans le même groupe (oxymore).",
                  example: { lines: ["Aucun outil, le verbe « est » assimile directement → métaphore (et non comparaison)."] },
                  warn: "⚠️ Le geste décisif : ne jamais appeler « métaphore » une image construite avec « comme ». C'est l'erreur de nomenclature la plus sanctionnée.",
                },
                {
                  number: "3",
                  text: "**Vérifier l'extension de l'image** : pour une métaphore, relire le passage pour repérer d'autres termes du même domaine. S'il y en a, elle est filée.",
                  example: { lines: ["« route, impasse, chemin sans destination, terres inconnues, à tâtons » → métaphore filée du voyage."] },
                },
                {
                  number: "💡",
                  text: "**Réponse attendue (formulation modèle) :** « “ma route est une impasse” est une métaphore : l'écriture est assimilée à un chemin sans issue, sans outil de comparaison. Elle s'inscrit dans une métaphore filée du voyage désorienté, développée sur tout le passage (route, impasse, terres inconnues, à tâtons), qui construit l'écriture comme une errance risquée. »",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Nommez précisément la figure dans : « Ses yeux brillaient comme des étoiles. »",
              correction: [
                { type: "line", text: "**Explication :** la présence de l'outil « comme » classe l'image dans l'analogie et tranche : c'est une comparaison, pas une métaphore. Pour une métaphore, il faudrait supprimer l'outil (« Ses yeux, deux étoiles »)." },
                { type: "line", text: "**Réponse attendue (formulation modèle) :** « “comme des étoiles” est une comparaison : les yeux (comparé) sont rapprochés des étoiles (comparant) au moyen de l'outil “comme”. L'image suggère leur éclat et leur vivacité. »" },
                { type: "note", text: "Outil repéré du premier coup ? Sinon, revoyez la distinction comparaison / métaphore." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Identifier le registre (de langue puis littéraire)",
              intro:
                "*Question typique : « Caractérisez le registre du passage : “Ô mon fils, mon unique espérance, faut-il que je te survive ?” »*",
              steps: [
                {
                  number: "1",
                  text: "**Identifier le registre de langue** en observant le vocabulaire et la syntaxe : recherché → soutenu, standard → courant, relâché → familier.",
                  example: { lines: ["« faut-il que je te survive », tournure soignée et lexique choisi → registre de langue soutenu."] },
                },
                {
                  number: "2",
                  text: "**Identifier le registre littéraire** en observant le ton, l'émotion et l'effet visé : souffrance et pitié → pathétique, émotion intime et « je » → lyrique, grandeur → épique, décalage et raillerie → comique ou ironique.",
                  example: { lines: ["l'apostrophe « Ô mon fils » et l'expression de la douleur appellent la pitié → registre pathétique."] },
                  warn: "⚠️ Le piège à éviter : traiter « soutenu » (registre de langue) et « pathétique » (registre littéraire) comme s'ils étaient de même nature. Ce sont deux niveaux d'analyse, et un texte cumule souvent les deux.",
                },
                {
                  number: "💡",
                  text: "**Réponse attendue (formulation modèle) :** « Ce passage relève d'un registre de langue soutenu (syntaxe soignée, lexique choisi) et d'un registre littéraire pathétique : l'apostrophe et l'expression de la douleur paternelle suscitent la pitié du lecteur. »",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "« Monte en moi une humble flamme. » Quel registre littéraire, et pourquoi ?",
              correction: [
                { type: "line", text: "**Explication :** l'expression d'une émotion intérieure, la présence du « moi » poétique et l'élan spirituel sont les marques du registre lyrique." },
                { type: "line", text: "**Réponse attendue (formulation modèle) :** « Ce vers relève du registre lyrique : l'image de la “flamme” qui “monte en moi” traduit une émotion intime et un élan intérieur, soutenus par la présence du “je” poétique. »" },
                { type: "note", text: "Le registre littéraire repéré ? Direction le dernier checkpoint." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Rédiger l'analyse complète d'une figure (les quatre temps)",
              intro:
                "*Question typique : « Relevez et analysez un procédé stylistique dans : “l'éclaboussure des âmes humaines” (Lola Lafon). »*",
              steps: [
                {
                  number: "1",
                  text: "**Nommer** la figure et **citer** le passage exact entre guillemets.",
                  example: { lines: ["« l'éclaboussure des âmes humaines » est une métaphore."] },
                },
                {
                  number: "2",
                  text: "**Expliquer le mécanisme** : repérer le comparé, le comparant, et la présence ou l'absence d'outil.",
                  example: { lines: ["la part trouble des humains (comparé) est assimilée à une projection de boue, une éclaboussure (comparant), sans outil de comparaison."] },
                },
                {
                  number: "3",
                  text: "**Analyser l'effet** dans le texte : ce que l'image suggère, le sens qu'elle apporte au propos.",
                  example: { lines: ["l'image de la souillure rend tangible la laideur morale et traduit un regard lucide, presque amer, sur l'humanité."] },
                  warn: "⚠️ Le geste qui rapporte les points : analyser l'effet. Nommer et paraphraser sans l'effet ne vaut presque rien au concours.",
                },
                {
                  number: "💡",
                  text: "**Réponse attendue (formulation modèle) :** « “l'éclaboussure des âmes humaines” est une métaphore : la part trouble des hommes est assimilée à une projection de boue, sans outil de comparaison. L'image de la souillure rend concrète et visible la laideur morale, et traduit le regard sans complaisance de l'autrice sur l'humanité. »",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Analysez la phrase « Il sentait le vide de sa vie s'étendre autour de lui. » : nommez la figure et analysez son effet.",
              correction: [
                { type: "line", text: "**Explication :** un sentiment abstrait, le vide intérieur, reçoit une réalité spatiale (il « s'étend autour de lui »), sans outil de comparaison : c'est une métaphore. L'effet tient à cette spatialisation, qui rend la souffrance presque palpable." },
                { type: "line", text: "**Réponse attendue (formulation modèle) :** « L'expression “le vide de sa vie s'étendre autour de lui” est une métaphore : le vide intérieur, abstrait, est spatialisé comme un espace physique qui s'étend. L'image rend la souffrance psychologique tangible et en fait percevoir l'ampleur. »" },
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
              title: "Les figures de style et les registres",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_FIGURES_DE_STYLE_REGISTRES,
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
              title: "Les figures de style et les registres",
              copies: COPIES_FIGURES_DE_STYLE_REGISTRES,
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
              center: { title: "Figures", subtitle: "et registres" },
              branches: [
                {
                  title: "Analogie",
                  lines: [
                    "Comparaison : avec outil (comme, tel)",
                    "Métaphore : sans outil, plus forte",
                    "Filée : image sur tout le passage",
                    "Personnification : donne vie, agentivité",
                  ],
                  variant: "blue",
                },
                {
                  title: "Insistance / opposition",
                  lines: [
                    "Hyperbole : exagère, dramatise",
                    "Litote : dit moins, suggère plus",
                    "Antithèse : contraires, groupes distincts",
                    "Oxymore : contraires, même groupe",
                    "Anaphore : répète, martèle, rythme",
                  ],
                  variant: "green",
                },
                {
                  title: "Registres de langue",
                  lines: ["Soutenu : recherché, distance", "Courant : standard, neutre", "Familier : relâché, oralité"],
                  variant: "green",
                },
                {
                  title: "Registres littéraires",
                  lines: [
                    "Lyrique : émotion intime",
                    "Épique : grandeur, héroïsme",
                    "Pathétique : pitié, souffrance",
                    "Comique / ironique : décalage, distance",
                  ],
                  variant: "blue",
                },
                {
                  title: "Analyser une figure (4 temps)",
                  lines: [
                    "1. Nommer + citer",
                    "2. Mécanisme : comparé / comparant",
                    "3. Effet dans le texte",
                    "Sans l'effet = pas de points",
                  ],
                  variant: "yellow",
                },
                {
                  title: "Pièges classiques",
                  lines: ["Comparaison ≠ métaphore (« comme »)", "Litote ≠ euphémisme", "Antithèse ≠ oxymore", "Nommer sans analyser l'effet"],
                  variant: "yellow",
                },
                {
                  title: "Renvois",
                  lines: ["Sens propre / figuré → relations sémantiques (n°17)", "Formation des mots → n°16", "Vers la Partie 3 (développement rédigé)"],
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
