import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "fs1", label: "Je distingue la comparaison (outil explicite : comme, tel…) de la métaphore (assimilation sans outil)" },
  { id: "fs2", label: "Je reconnais la métaphore filée (développée sur tout un passage, même domaine comparant)" },
  { id: "fs3", label: "Je reconnais la personnification (attribut humain donné à un inanimé ou une abstraction)" },
  { id: "fs4", label: "Je connais les figures d'insistance et d'opposition : hyperbole, litote, antithèse, oxymore" },
  { id: "fs5", label: "Je distingue la litote (dire moins pour suggérer plus) de l'euphémisme (atténuer par pudeur)" },
  { id: "fs6", label: "Je distingue le registre de langue (soutenu / courant / familier) du registre littéraire (lyrique, épique, pathétique, comique, ironique)" },
  { id: "fs7", label: "Je rédige l'analyse d'une figure en quatre temps : nommer, citer, expliquer le mécanisme, analyser l'effet" },
];

export const ficheFiguresRegistres: Fiche = {
  slug: "figures-de-style-registres",
  matiere: "francais",
  numero: 18,
  partie: "Partie 2 : Lexique",
  title: "Les figures de style et les registres",
  subtitle:
    "Comparaison, métaphore, métaphore filée, personnification, hyperbole, litote, antithèse, registres de langue et littéraires",
  badges: [
    { label: "★★★ Tombe à chaque session", variant: "hot" },
    { label: "Cycle 3-4 · BOEN n°1 du 22 janvier 2019", variant: "info" },
  ],
  metaTitle: "Les figures de style et les registres (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur les figures de style (comparaison, métaphore, métaphore filée, personnification, hyperbole, litote, antithèse, oxymore) et les registres (de langue : soutenu, courant, familier ; littéraires : lyrique, épique, pathétique, comique, ironique). Méthode d'analyse en quatre temps, exercices corrigés, flashcards et auto-évaluation.",
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
              intro:
                "Au concours, la question est toujours la même : identifier la figure, la nommer précisément, et analyser son effet dans le texte. Nommer sans analyser ne rapporte pas de points.",
              items: [
                {
                  number: "①",
                  title: "Les figures d'analogie",
                  text: "Comparaison, métaphore, métaphore filée, personnification : rapprocher ou assimiler.",
                },
                {
                  number: "②",
                  title: "Insistance et opposition",
                  text: "Hyperbole, litote, antithèse, oxymore, anaphore : amplifier, atténuer, opposer.",
                },
                {
                  number: "③",
                  title: "Les registres",
                  text: "Registre de langue (soutenu, courant, familier) et registre littéraire (lyrique, épique…).",
                },
                {
                  number: "④",
                  title: "L'analyse en quatre temps",
                  text: "Nommer, citer, expliquer le mécanisme, analyser l'effet : la structure attendue par le jury.",
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
              text: "Les figures de style exploitent les ressources du langage pour produire un effet. Au concours, on demande systématiquement d'**identifier** la figure, de la **nommer** précisément, et surtout d'**analyser son effet** dans le texte. Les figures sont en général reconnues ; c'est l'analyse de leur effet qui fait souvent défaut. Cette notion prolonge le sens propre / figuré vu à la notion 17.",
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
                      test: "Effet : fait ressentir une idée abstraite ; la ressemblance est suggérée, non imposée.",
                    },
                    {
                      title: "Métaphore",
                      definition: "Assimile deux éléments sans outil de comparaison (A est B, ou le A de B). Plus forte que la comparaison.",
                      exemples: [
                        "« ma route est une impasse » ; « une humble flamme » (l'inspiration) ; « l'éclaboussure des âmes humaines » (les vices)",
                      ],
                      test: "On peut souvent y réinsérer « comme » pour la transformer en comparaison.",
                    },
                    {
                      title: "Métaphore filée",
                      definition: "Une métaphore développée sur plusieurs phrases : le même comparant est décliné en images cohérentes.",
                      exemples: [
                        "Métaphore du voyage désorienté : route, impasse, chemin sans destination, terres inconnues, à tâtons, trébucher",
                      ],
                      test: "Effet : crée une cohérence d'image sur tout le passage ; son identification révèle une lecture globale (valorisée).",
                    },
                    {
                      title: "Personnification",
                      definition: "Attribue des caractéristiques humaines à un inanimé, un animal ou une abstraction.",
                      exemples: [
                        "« la langue n'est pas un objet inerte… c'est elle qui nous transforme » : la langue agit comme un sujet",
                      ],
                      test: "Effet : donne vie et agentivité, peut inverser un rapport de force.",
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
                  type: "table",
                  title: "Les principales figures",
                  headers: ["Figure", "Principe", "Exemple"],
                  rows: [
                    ["Hyperbole", "Exagération volontaire (amplification)", "« des torrents de larmes », « je meurs de faim »"],
                    ["Litote", "Dire moins pour suggérer davantage", "« Va, je ne te hais point » (= je t'aime)"],
                    ["Antithèse", "Opposer deux termes contraires dans l'énoncé", "« le regard ne vieillissait pas »"],
                    ["Oxymore", "Réunir deux termes contradictoires dans le même groupe", "« une obscure clarté », « un silence éloquent »"],
                    ["Anaphore", "Répéter un mot en début de phrase ou de membre", "« Je suis monté… j'ai vu… je suis descendu… »"],
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
              title: "Les registres",
              blocks: [
                {
                  type: "table",
                  title: "Registres de langue (niveaux de langue)",
                  headers: ["Registre", "Caractéristiques", "Exemple"],
                  rows: [
                    ["Soutenu", "Vocabulaire recherché, syntaxe complexe, tournures littéraires", "« Je ne saurais y consentir. »"],
                    ["Courant", "Vocabulaire standard, syntaxe correcte sans recherche", "« Je ne peux pas accepter. »"],
                    ["Familier", "Vocabulaire relâché, syntaxe simplifiée, expressions populaires", "« J'peux pas. »"],
                  ],
                },
                {
                  type: "table",
                  title: "Registres littéraires (ton et atmosphère)",
                  headers: ["Registre", "Caractéristiques"],
                  rows: [
                    ["Lyrique", "Expression des émotions intimes, « je », vocabulaire des sentiments"],
                    ["Épique", "Grandeur, héroïsme, amplification"],
                    ["Pathétique", "Émotion intense, souffrance, pitié"],
                    ["Comique / ironique", "Décalage, jeu de langage, dire le contraire de ce qu'on pense"],
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
              text: "**Cycle 3-4 :** les élèves découvrent la comparaison et la métaphore simples, jouent avec le langage (sens propre / figuré déjà travaillé), et commencent à percevoir l'effet d'une image.\n\n**Ce que vous devez savoir dire :** « On enseigne d'abord la comparaison (avec “comme”), repère le plus simple, avant la métaphore. L'objectif n'est pas d'étiqueter des figures mais de faire sentir ce qu'une image apporte au texte. »",
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
              title: "Trois démarches",
              text: "Distinguer comparaison et métaphore (et repérer la filée), identifier le registre, et rédiger l'analyse d'une figure. Chacune se termine par un checkpoint.",
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
              title: "Distinguer comparaison et métaphore",
              intro:
                "**Question typique :** « Identifiez et nommez la figure de style. »",
              steps: [
                {
                  number: "1",
                  text: "**Chercher un outil de comparaison** (comme, tel, semblable à, ressembler à).",
                  example: { lines: ["« semblable à la barre d'une danseuse » → outil → comparaison"] },
                },
                {
                  number: "2",
                  text: "**Sans outil, c'est une métaphore.** Vérifier ensuite si elle est filée (plusieurs termes du même domaine).",
                  example: { lines: ["« route, impasse, chemin sans destination » → métaphore filée du voyage"] },
                },
                {
                  number: "💡",
                  text: "**Nommer précisément** : métaphore simple ou filée, comparaison.",
                  warn: "⚠️ Ne pas appeler « métaphore » une image avec « comme ».",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "« Ses yeux brillaient comme des étoiles. » Comparaison ou métaphore ?",
              correction: [
                { type: "line", text: "**Comparaison** : l'outil « comme » rapproche les yeux des étoiles. Pour une métaphore, il faudrait : « Ses yeux, deux étoiles. »" },
                { type: "note", text: "Trouvé l'outil ? Sinon, revoyez la distinction comparaison / métaphore." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Identifier le registre",
              intro:
                "**Question typique :** « Quel est le registre de ce passage ? »",
              steps: [
                {
                  number: "1",
                  text: "**Registre de langue** : observer le vocabulaire et la syntaxe (soutenu, courant, familier).",
                  example: { lines: ["vocabulaire recherché + syntaxe complexe → soutenu"] },
                },
                {
                  number: "2",
                  text: "**Registre littéraire** : observer le ton et l'effet visé (lyrique, épique, pathétique, comique, ironique).",
                  example: { lines: ["émotion intime + « je » → lyrique"] },
                },
                {
                  number: "💡",
                  text: "**Préciser les deux si la question le permet** : ce sont des niveaux d'analyse distincts.",
                  warn: "⚠️ Ne pas mélanger « soutenu » (langue) et « pathétique » (littéraire) comme s'ils étaient de même nature.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "« Monte en moi une humble flamme. » Quel registre littéraire ?",
              correction: [
                { type: "line", text: "**Lyrique** : expression d'une émotion intérieure, présence du « moi » poétique, élévation spirituelle." },
                { type: "note", text: "Le registre littéraire repéré ? Direction le dernier checkpoint." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Rédiger l'analyse d'une figure",
              intro:
                "**Question typique :** « Relevez et analysez un procédé stylistique. »\nQuatre temps.",
              steps: [
                {
                  number: "1",
                  text: "**Nommer** la figure et **citer** le passage exact entre guillemets.",
                  example: { lines: ["« l'éclaboussure des âmes humaines » est une métaphore"] },
                },
                {
                  number: "2",
                  text: "**Expliquer le mécanisme** (comparé, comparant, outil ou absence d'outil).",
                  example: { lines: ["les vices humains sont assimilés à une projection de boue, sans outil"] },
                },
                {
                  number: "💡",
                  text: "**Analyser l'effet** dans le texte : que suggère l'image, quel sens apporte-t-elle ?",
                  warn: "⚠️ L'analyse de l'effet est indispensable : paraphraser ne suffit pas.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Analysez « le vide de sa vie s'étendre autour de lui » (nommer + effet).",
              correction: [
                { type: "line", text: "**Métaphore** : le vide (abstrait, intérieur) est spatialisé, il « s'étend » comme un espace physique. **Effet** : la souffrance psychologique devient presque tangible, le lecteur perçoit l'étendue du vide." },
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
                  objectifId: "fs1",
                  question: "« Il est fort comme un bœuf. » est :",
                  options: ["une métaphore", "une comparaison", "une personnification", "une hyperbole"],
                  correctIndex: 1,
                  explanation:
                    "L'outil « comme » rapproche les deux termes : c'est une comparaison. Sans outil (« c'est un bœuf »), ce serait une métaphore.",
                },
                {
                  objectifId: "fs1",
                  question: "« La vie est un voyage. » est :",
                  options: ["une comparaison", "une métaphore", "une litote", "une antithèse"],
                  correctIndex: 1,
                  explanation:
                    "Assimilation directe sans outil de comparaison : c'est une métaphore.",
                },
                {
                  objectifId: "fs2",
                  question: "« route, impasse, chemin sans destination, terres inconnues, à tâtons » forment :",
                  options: ["des métaphores sans lien", "une métaphore filée", "une comparaison", "une accumulation neutre"],
                  correctIndex: 1,
                  explanation:
                    "Plusieurs termes du même domaine comparant (le voyage), développés sur le passage : c'est une métaphore filée.",
                },
                {
                  objectifId: "fs3",
                  question: "« C'est la langue qui nous transforme. » est :",
                  options: ["une hyperbole", "une personnification", "une litote", "une comparaison"],
                  correctIndex: 1,
                  explanation:
                    "La langue (abstraction) reçoit une action humaine (transformer) : c'est une personnification.",
                },
                {
                  objectifId: "fs4",
                  question: "« une obscure clarté » est :",
                  options: ["une antithèse", "un oxymore", "une hyperbole", "une litote"],
                  correctIndex: 1,
                  explanation:
                    "Deux termes contradictoires (obscur / clair) réunis dans le même groupe : c'est un oxymore.",
                },
                {
                  objectifId: "fs5",
                  question: "« il nous a quittés » (pour dire « il est mort ») est :",
                  options: ["une litote", "un euphémisme", "une hyperbole", "une métaphore filée"],
                  correctIndex: 1,
                  explanation:
                    "On atténue par pudeur, sans intention d'amplification : c'est un euphémisme, pas une litote.",
                },
                {
                  objectifId: "fs6",
                  question: "Un texte au vocabulaire recherché et à la syntaxe complexe relève d'un registre de langue :",
                  options: ["familier", "courant", "soutenu", "lyrique"],
                  correctIndex: 2,
                  explanation:
                    "C'est un registre de langue soutenu. « lyrique » serait un registre littéraire, pas un niveau de langue.",
                },
                {
                  objectifId: "fs7",
                  question: "Pour analyser une figure, après l'avoir nommée et citée, il faut surtout :",
                  options: [
                    "passer à la figure suivante",
                    "compter les figures du texte",
                    "expliquer le mécanisme puis analyser l'effet dans le texte",
                    "donner sa définition de dictionnaire",
                  ],
                  correctIndex: 2,
                  explanation:
                    "La structure attendue : nommer, citer, expliquer le mécanisme, analyser l'effet. Nommer sans analyser ne rapporte rien.",
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
              label: "Niveau 1 : Identifier et nommer",
              sub: "Figures, comparaison/métaphore, registres",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 1 : Identifier la figure",
              objectifTag: "Figures",
              question:
                "Nommez la figure :\na) « Il pleut des cordes. » · b) « Ce devoir n'est pas mal. » · c) « La vie est un voyage. » · d) « Je meurs de soif. » · e) « Le temps dévore tout. » · f) « une obscure clarté »",
              correction: [
                { type: "line", text: "a) métaphore · b) litote (= très bien) · c) métaphore · d) hyperbole · e) personnification · f) oxymore." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 2 : Comparaison ou métaphore ?",
              objectifTag: "Analogie",
              question:
                "Comparaison ou métaphore ? Indiquez l'outil s'il y en a un :\na) « fort comme un bœuf » · b) « c'est un bœuf, cet homme » · c) « ses yeux, deux étoiles » · d) « elle travaille telle une fourmi »",
              correction: [
                { type: "line", text: "a) comparaison (comme) · b) métaphore (pas d'outil) · c) métaphore (apposition directe) · d) comparaison (telle)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 3 : Registres de langue",
              question:
                "Indiquez le registre de langue, puis reformulez en registre courant :\na) « Je n'ai pu y consentir. » · b) « J'peux pas. » · c) « C'est nul. »",
              correction: [
                { type: "line", label: "a)", text: "soutenu → « Je n'ai pas pu accepter. »" },
                { type: "line", label: "b)", text: "familier → « Je ne peux pas. »" },
                { type: "line", label: "c)", text: "familier → « Ce n'est pas satisfaisant. »" },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : Analyser l'effet",
              sub: "Mécanisme et effet dans le texte",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 4 : Analyse complète d'une figure",
              enonce: "« Vivre, sans l'écriture, me va mal, comme un habit trop lâche dans lequel je m'empêtre. » (Lola Lafon)",
              question: "Nommez la figure, expliquez son mécanisme et analysez son effet.",
              correction: [
                { type: "line", text: "**Comparaison** (outil « comme ») : la vie sans écriture est comparée à un habit trop lâche. Doublée d'une **litote** (« me va mal »)." },
                { type: "line", text: "**Effet** : l'image du vêtement mal taillé corporalise une sensation abstraite ; « m'empêtre » prolonge l'idée d'entrave physique. Sans écriture, l'autrice ne tient pas dans sa propre vie." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 5 : La métaphore filée",
              enonce: "« ma route est une impasse / chemin sans destination / terres inconnues / à tâtons / trébucher » (Lola Lafon)",
              question: "Identifiez et analysez la métaphore filée : domaine comparant, termes, effet global.",
              correction: [
                { type: "line", text: "**Métaphore filée du voyage désorienté** : l'écriture est assimilée à un périple sans boussole. Termes : route, impasse, chemin sans destination, terres inconnues, à tâtons, trébucher." },
                { type: "line", text: "**Effet** : la cohérence de l'image construit l'écriture comme une errance volontaire et risquée ; l'accumulation des termes négatifs amplifie la désorientation tout en valorisant le courage de s'y engager." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 6 : Registre et procédés",
              enonce: "« Une femme passa, tenant par la main un petit garçon. Elle se hâtait, les yeux baissés, pressée d'atteindre sa maison avant la nuit. » (Zola)",
              question: "Quel registre littéraire domine ? Identifiez deux procédés qui le construisent.",
              correction: [
                { type: "line", text: "**Registre pathétique** : la scène suscite la pitié pour cette figure féminine vulnérable." },
                { type: "line", text: "**Procédé 1** : accumulation de détails réalistes (« tenant par la main », « yeux baissés », « pressée ») qui humanisent la femme. **Procédé 2** : « avant la nuit », où la nuit devient une menace symbolique (métonymie de la peur)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : Format jury complet",
              sub: "Plusieurs procédés, analyse rédigée",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 7 : Trois procédés",
              enonce: "« la langue n'est pas un objet inerte dont on se saisit et qu'on plie à sa volonté. C'est elle qui nous transforme. » (Lola Lafon)",
              question: "Identifiez la personnification et l'antithèse, et analysez leur effet combiné.",
              correction: [
                { type: "line", text: "**Personnification** : la langue « nous transforme », elle devient un sujet agissant sur l'humain." },
                { type: "line", text: "**Antithèse** : « on se saisit / on plie à sa volonté » (domination humaine) s'oppose à « c'est elle qui nous transforme » (domination de la langue)." },
                { type: "line", text: "**Effet combiné** : le renversement du rapport de force révèle la thèse de l'autrice : écrire, ce n'est pas maîtriser les mots, c'est se laisser transformer par eux." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 8 : Métaphore filée maritime",
              enonce: "« Ces énormes vagues, mousseuses d'une écume verte, semblaient s'avancer vers le hameau. Le grondement d'océan du vent dans les montagnes. La cour : île protégée des tempêtes. » (Clara Dupont-Monod, S'adapter)",
              question: "Identifiez la métaphore filée et analysez son effet d'ensemble.",
              correction: [
                { type: "line", text: "**Métaphore filée maritime** : les montagnes sont assimilées à la mer. Termes : vagues, écume verte, voie maritime, grondement d'océan, île, tempêtes." },
                { type: "line", text: "**Effet** : la maison (la cour = « île ») devient un refuge isolé au milieu de forces hostiles et gigantesques. Les « vagues » qui « s'avancent » donnent à la nature une dimension menaçante, annonçant les bouleversements à venir." },
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
              text: "Ces exercices reproduisent le format des questions de style en Partie 2 (relever et analyser des procédés). Les exercices calqués sur des sujets récents portent le badge ✦.",
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format identique au concours",
              title: "Exercice 1 : trois procédés au choix",
              enonce: "« Relire chaque matin est semblable à la barre quotidienne d'une danseuse. » / « Vivre, sans l'écriture, me va mal, comme un habit trop lâche. » / « ma route est une impasse » (Lola Lafon)",
              question: "Relevez trois procédés lexicaux qui caractérisent le travail de l'écrivain, et analysez l'effet de chacun.",
              correction: [
                { type: "line", text: "**1) Comparaison** : « semblable à la barre d'une danseuse » : la relecture évoque discipline, humilité et confrontation à son reflet. L'écriture est un art de l'entraînement, non de l'inspiration." },
                { type: "line", text: "**2) Comparaison + litote** : « me va mal, comme un habit trop lâche » : inadéquation entre soi et sa vie ; la litote « me va mal » sous-entend une nécessité vitale." },
                { type: "line", text: "**3) Métaphore (filée)** : « ma route est une impasse » s'inscrit dans la métaphore filée du voyage désorienté : l'écriture est un périple sans boussole." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format identique au concours",
              title: "Exercice 2 : la figure dominante",
              enonce: "« le monde n'est qu'un amas de taches confuses, jetées sur le vide par un peintre insensé, sans cesse effacées par nos larmes. » (Marguerite Yourcenar)",
              question: "Identifiez au moins deux procédés et analysez leur effet combiné.",
              correction: [
                { type: "line", text: "**Métaphore (filée) picturale** : le monde est assimilé à une peinture ratée (taches, peintre, effacées) : la réalité est inférieure à l'art." },
                { type: "line", text: "**Hyperbole** : « peintre insensé » amplifie le désordre du réel. **Effet combiné** : la cohérence de l'image picturale renforce le thème central : l'art transcende le réel, qui déçoit celui qui n'en connaissait que l'art." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 3 : registre de langue et registre littéraire",
              enonce: "Comparez le registre de Yourcenar (« j'ai vu se rouvrir les portes qui me séparaient du monde ») et de Lafon (« mes romans me mènent en bateau »).",
              question: "Précisez le registre de langue et le registre littéraire de chacun.",
              correction: [
                { type: "line", text: "**Yourcenar** : registre de langue **soutenu** (vocabulaire précis, syntaxe ample) ; registre littéraire **lyrique** et **épique** (récit d'une révélation, grandeur)." },
                { type: "line", text: "**Lafon** : registre de langue **courant** voire familier (« mener en bateau ») ; registre littéraire **ironique / comique** (jeu sur la polysémie, autodérision)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 4 : analyse de style rédigée",
              enonce: "« Vivre, sans l'écriture, me va mal, comme un habit trop lâche. On écrit parce qu'on ne sait par quel autre biais attraper le réel. » (Lola Lafon)",
              question: "Rédigez une analyse de style identifiant et analysant trois procédés.",
              correction: [
                { type: "paragraph", text: "**1. Comparaison** : « comme un habit trop lâche » corporalise une inadéquation abstraite (on « s'empêtre » dans une vie qui n'est pas la sienne). **2. Litote** : « me va mal » dit moins que la vérité (l'écriture est vitale), produisant une élégance retenue. **3. Métaphore** : « attraper le réel » présente l'écriture comme l'unique filet capable de capturer une réalité fuyante. Ces procédés convergent vers la même thèse : écrire est une nécessité, la seule façon d'habiter le monde à sa juste mesure." },
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
              text: "Ces exercices reproduisent des **erreurs fréquentes** dans l'analyse des figures et des registres. Repérer ce qui cloche et corriger rigoureusement est une compétence directement valorisée au concours.",
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 1 · Réponse à corriger : comparaison « métaphore »",
              enonce: "Réponse d'un candidat : « “comme un habit trop lâche” est une métaphore. »",
              question: "Identifiez et corrigez l'erreur de nomenclature.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "La présence de l'outil « comme » indique une comparaison, pas une métaphore", bad: true },
                    { text: "La métaphore assimile sans outil visible" },
                    { text: "Réponse attendue : c'est une **comparaison** ; pour une métaphore, il faudrait « Vivre sans l'écriture, c'est un habit trop lâche »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 2 · Réponse à corriger : métaphore « filée »",
              enonce: "Réponse d'un candidat : « “ma route est une impasse” est une métaphore filée. »",
              question: "Identifiez et corrigez l'erreur.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Un seul terme : c'est une métaphore simple", bad: true },
                    { text: "La métaphore filée s'étend sur plusieurs termes du même domaine (route, impasse, chemin sans destination, terres inconnues, à tâtons)" },
                    { text: "Réponse attendue : « métaphore simple, qui s'intègre dans une métaphore filée du voyage développée sur tout le passage »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 3 · Réponse à corriger : registres confondus",
              enonce: "Réponse d'un candidat : « Le texte de Zola est écrit dans un registre soutenu et pathétique. »",
              question: "Identifiez et corrigez la confusion.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Registre de langue et registre littéraire sont mélangés", bad: true },
                    { text: "Ce sont deux niveaux d'analyse distincts" },
                    { text: "Réponse attendue : registre de langue **courant** (vocabulaire accessible) ; registre littéraire **pathétique** (la scène suscite la pitié)" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 4 · Réponse à corriger : litote « euphémisme »",
              enonce: "Réponse d'un candidat : « “il nous a quittés” est une litote. »",
              question: "Identifiez et corrigez l'erreur.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "« il nous a quittés » atténue par pudeur : c'est un euphémisme", bad: true },
                    { text: "La litote dit moins pour suggérer davantage (amplification cachée)" },
                    { text: "Réponse attendue : c'est un **euphémisme** ; une litote serait « il n'est plus tout jeune » pour « il est vieux »" },
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
              text: "Cliquez sur chaque carte pour révéler la réponse. Essayez de répondre dans votre tête avant.",
            },
            {
              type: "flashcardDeck",
              cards: [
                {
                  question: "Comparaison ou métaphore : comment trancher ?",
                  answer:
                    "**Comparaison** : outil explicite visible (comme, tel, semblable à) : « fort comme un lion ».\n**Métaphore** : pas d'outil : « c'est un lion ».",
                  astuce: "💡 Test : peut-on trouver un « comme » ? Si oui, comparaison.",
                },
                {
                  question: "Qu'est-ce qu'une métaphore filée ?",
                  answer:
                    "Une métaphore développée sur plusieurs termes d'un passage, tous du même domaine comparant (le voyage, la mer…).\nExemple : route, impasse, chemin sans destination, terres inconnues, à tâtons.",
                  astuce: "💡 Son identification révèle une lecture globale du texte (valorisée).",
                },
                {
                  question: "L'erreur la plus fréquente dans l'analyse d'une figure ?",
                  answer:
                    "Nommer la figure sans analyser son effet dans le texte.\nStructure attendue : 1) nommer, 2) citer, 3) expliquer le mécanisme, 4) analyser l'effet.",
                  astuce: "⚠️ Paraphraser n'est pas analyser.",
                },
                {
                  question: "Litote ou euphémisme ?",
                  answer:
                    "**Litote** : dire moins pour suggérer davantage (amplification cachée, souvent ironique) : « je ne te hais point ».\n**Euphémisme** : atténuer par pudeur : « il nous a quittés ».",
                },
                {
                  question: "Registre de langue ou registre littéraire ?",
                  answer:
                    "**Registre de langue** : niveau de langue (soutenu / courant / familier) : vocabulaire et syntaxe.\n**Registre littéraire** : ton et atmosphère (lyrique / épique / pathétique / comique / ironique).",
                  astuce: "💡 Un texte peut être soutenu (langue) ET pathétique (littéraire).",
                },
                {
                  question: "Antithèse ou oxymore ?",
                  answer:
                    "**Antithèse** : oppose deux termes dans des groupes distincts (domination / transformation).\n**Oxymore** : réunit deux termes contradictoires dans le même groupe (« obscure clarté »).",
                },
                {
                  question: "Qu'est-ce qu'une personnification ?",
                  answer:
                    "Attribuer des caractéristiques humaines (actions, sentiments, volonté) à un inanimé, un animal ou une abstraction.\n« la langue nous transforme » : la langue devient un sujet agissant.",
                  astuce: "💡 Effet : donne vie et peut inverser un rapport de force.",
                },
                {
                  question: "La structure de réponse jury pour une figure ?",
                  answer:
                    "« [Citation] est une [figure]. [Mécanisme : comparé, comparant, outil ou non]. Elle produit l'effet de [effet] et contribue à [sens dans le texte]. »",
                  astuce: "⚠️ Qualité plus que quantité : analyser deux figures finement vaut mieux qu'en lister dix.",
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
              center: { title: "Figures", subtitle: "et registres" },
              branches: [
                {
                  title: "Analogie",
                  lines: ["Comparaison : avec outil", "Métaphore : sans outil", "Filée : sur le passage", "Personnification"],
                  variant: "blue",
                },
                {
                  title: "Insistance / opposition",
                  lines: ["Hyperbole, litote", "Antithèse, oxymore", "Anaphore"],
                  variant: "green",
                },
                {
                  title: "Registres de langue",
                  lines: ["Soutenu", "Courant", "Familier"],
                  variant: "green",
                },
                {
                  title: "Registres littéraires",
                  lines: ["Lyrique, épique", "Pathétique", "Comique, ironique"],
                  variant: "blue",
                },
                {
                  title: "Pièges classiques",
                  lines: ["Comparaison ≠ métaphore", "Litote ≠ euphémisme", "Nommer sans analyser"],
                  variant: "yellow",
                },
                {
                  title: "Renvois",
                  lines: ["Sens propre / figuré → notion 17", "Formation des mots → notion 16", "Vers la Partie 3 (rédaction)"],
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
