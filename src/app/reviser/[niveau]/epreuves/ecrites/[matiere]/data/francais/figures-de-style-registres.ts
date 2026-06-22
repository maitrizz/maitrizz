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
                "**Question typique :** « Relevez et nommez précisément la figure de style dans la phrase : “ma route est une impasse”. » La même démarche s'applique à toute figure, quelle que soit sa famille.",
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
                "**Question typique :** « Caractérisez le registre du passage : “Ô mon fils, mon unique espérance, faut-il que je te survive ?” »",
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
                "**Question typique :** « Relevez et analysez un procédé stylistique dans : “l'éclaboussure des âmes humaines” (Lola Lafon). » Le jury attend quatre temps enchaînés.",
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
                { type: "line", text: "**Explication (le réflexe) :** repérer l'écart, puis classer dans une famille. a) image sans outil → métaphore (la pluie est assimilée à des cordes) · b) atténuation qui en dit plus → litote (« pas mal » = très bien) · c) assimilation sans outil → métaphore · d) exagération → hyperbole · e) action humaine prêtée à une abstraction → personnification · f) deux contraires dans le même groupe → oxymore." },
                { type: "line", text: "**Réponse attendue (formulation modèle) :** « a) métaphore · b) litote · c) métaphore · d) hyperbole · e) personnification · f) oxymore. »" },
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
                { type: "line", text: "**Explication (le test) :** chercher un outil de comparaison. S'il y en a un, c'est une comparaison ; sinon, c'est une métaphore. a) outil « comme » · b) aucun outil, le verbe « est » assimile · c) aucun outil, apposition directe · d) outil « telle »." },
                { type: "line", text: "**Réponse attendue (formulation modèle) :** « a) comparaison (outil “comme”) · b) métaphore (pas d'outil) · c) métaphore (apposition directe) · d) comparaison (outil “telle”). »" },
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
                { type: "line", text: "**Explication :** on lit le registre de langue dans le vocabulaire et la syntaxe. a) tournure soignée (« je n'ai pu », « consentir ») → soutenu · b) élision relâchée et omission du « ne » → familier · c) terme et construction relâchés → familier." },
                { type: "line", label: "a)", text: "**Réponse attendue :** soutenu → reformulation courante : « Je n'ai pas pu accepter. »" },
                { type: "line", label: "b)", text: "**Réponse attendue :** familier → reformulation courante : « Je ne peux pas. »" },
                { type: "line", label: "c)", text: "**Réponse attendue :** familier → reformulation courante : « Ce n'est pas satisfaisant. »" },
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
                { type: "line", text: "**Explication (mécanisme) :** l'outil « comme » signale une comparaison (la vie sans écriture, comparé ; un habit trop lâche, comparant). Elle se double d'une litote (« me va mal », qui en dit moins que la réalité)." },
                { type: "line", text: "**Réponse attendue (formulation modèle) :** « “comme un habit trop lâche” est une comparaison : la vie sans écriture est rapprochée d'un vêtement mal taillé au moyen de l'outil “comme”. L'image corporalise une sensation abstraite, et le verbe “m'empêtre” prolonge l'idée d'entrave physique : sans écriture, l'autrice ne tient pas dans sa propre vie. La litote “me va mal” suggère, par retenue, une véritable nécessité vitale. »" },
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
                { type: "line", text: "**Explication (mécanisme) :** plusieurs termes appartiennent au même domaine comparant, le voyage (route, impasse, chemin sans destination, terres inconnues, à tâtons, trébucher) : l'image est développée sur tout le passage, c'est une métaphore filée. Le domaine comparé est l'acte d'écrire." },
                { type: "line", text: "**Réponse attendue (formulation modèle) :** « Le passage construit une métaphore filée du voyage désorienté : l'écriture est assimilée à un périple sans boussole (route, impasse, terres inconnues, à tâtons). La cohérence de l'image fait de l'écriture une errance volontaire et risquée ; l'accumulation des termes négatifs amplifie la désorientation tout en valorisant le courage de s'y engager. »" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 6 : Registre et procédés",
              enonce: "« Une femme passa, tenant par la main un petit garçon. Elle se hâtait, les yeux baissés, pressée d'atteindre sa maison avant la nuit. » (passage de type récit réaliste)",
              question: "Quel registre littéraire domine ? Identifiez deux procédés qui le construisent.",
              correction: [
                { type: "line", text: "**Explication :** la scène met en avant une figure féminine fragile et pressée ; elle est construite pour susciter la pitié, marque du registre pathétique. Deux procédés y concourent : l'accumulation de détails concrets (« tenant par la main », « yeux baissés », « pressée ») qui rendent la femme vulnérable et proche du lecteur, et la valeur symbolique de « la nuit », menace implicite vers laquelle se précipite la scène." },
                { type: "line", text: "**Réponse attendue (formulation modèle) :** « Le passage relève du registre pathétique : il suscite la pitié pour une figure féminine vulnérable. Cet effet repose sur l'accumulation de détails réalistes (“tenant par la main”, “yeux baissés”, “pressée”), qui humanisent le personnage, et sur la connotation menaçante de “la nuit”, qui fait peser une inquiétude sur la scène. »" },
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
                { type: "line", text: "**Explication (mécanismes) :** la langue « nous transforme » : une abstraction reçoit une action de sujet humain, c'est une personnification. Par ailleurs, « on se saisit / on plie à sa volonté » (domination de l'humain) s'oppose à « c'est elle qui nous transforme » (domination de la langue) : ces deux groupes contraires forment une antithèse." },
                { type: "line", text: "**Réponse attendue (formulation modèle) :** « La phrase combine une personnification (la langue “nous transforme”, elle devient un sujet agissant) et une antithèse opposant la maîtrise humaine (“on se saisit”, “on plie à sa volonté”) à la puissance de la langue (“c'est elle qui nous transforme”). Le renversement du rapport de force porte la thèse de l'autrice : écrire, ce n'est pas maîtriser les mots, c'est se laisser transformer par eux. »" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 8 : Métaphore filée maritime",
              enonce: "« Ces énormes vagues, mousseuses d'une écume verte, semblaient s'avancer vers le hameau. Le grondement d'océan du vent dans les montagnes. La cour : île protégée des tempêtes. » (passage de type récit contemporain)",
              question: "Identifiez la métaphore filée et analysez son effet d'ensemble.",
              correction: [
                { type: "line", text: "**Explication (mécanisme) :** plusieurs termes relèvent du même domaine comparant, la mer (vagues, écume verte, grondement d'océan, île, tempêtes), alors que le comparé est le paysage de montagne et le hameau. L'image, développée sur tout le passage, est une métaphore filée maritime." },
                { type: "line", text: "**Réponse attendue (formulation modèle) :** « Le passage construit une métaphore filée maritime : les montagnes et le vent sont assimilés à une mer démontée (vagues, écume verte, grondement d'océan, tempêtes). La cour, désignée comme une “île protégée”, devient un refuge isolé au milieu de forces hostiles et gigantesques ; les “vagues” qui “s'avancent” donnent à la nature une dimension menaçante et annoncent les bouleversements à venir. »" },
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
              text: "Ces exercices reproduisent le format des questions de style en Partie 2 (relever et analyser des procédés). Les corrections sont rédigées comme au concours : ce sont des **formulations modèles**, directement reproductibles le jour J. Les exercices calqués sur le format du concours portent le badge ✦.",
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format identique au concours",
              title: "Exercice 1 : trois procédés au choix",
              enonce: "« Relire chaque matin est semblable à la barre quotidienne d'une danseuse. » / « Vivre, sans l'écriture, me va mal, comme un habit trop lâche. » / « ma route est une impasse » (Lola Lafon)",
              question: "Relevez trois procédés lexicaux qui caractérisent le travail de l'écrivain, et analysez l'effet de chacun.",
              correction: [
                { type: "line", text: "**Démarche :** pour chaque citation, nommer le procédé, repérer le comparé et le comparant, puis dire ce que l'image apporte au portrait de l'écrivain. On vise trois procédés nommés et trois effets analysés." },
                { type: "line", text: "**Réponse attendue (formulation modèle) :**" },
                { type: "line", text: "**1) Comparaison** : « semblable à la barre d'une danseuse » rapproche la relecture d'un exercice quotidien de danseuse. L'image évoque discipline, humilité et confrontation à son reflet : l'écriture est un art de l'entraînement, non de l'inspiration." },
                { type: "line", text: "**2) Comparaison et litote** : « me va mal, comme un habit trop lâche » dit l'inadéquation entre soi et sa vie ; la litote « me va mal » sous-entend, par retenue, une nécessité vitale." },
                { type: "line", text: "**3) Métaphore filée** : « ma route est une impasse » s'inscrit dans la métaphore filée du voyage désorienté : l'écriture devient un périple sans boussole, à la fois risqué et nécessaire." },
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
                { type: "line", text: "**Démarche :** repérer le champ d'images dominant (ici la peinture), nommer les procédés, puis montrer comment ils se renforcent pour servir une même idée." },
                { type: "line", text: "**Réponse attendue (formulation modèle) :** « Le passage repose sur une métaphore filée picturale : le monde est assimilé à une peinture ratée (taches, peintre, effacées), donc à une réalité inférieure à l'art. L'hyperbole “peintre insensé” amplifie le désordre du réel. La cohérence de l'image picturale et l'exagération convergent : l'art transcende un réel décevant, pour qui n'en connaissait que la beauté. »" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 3 : registre de langue et registre littéraire",
              enonce: "Comparez le registre de Yourcenar (« j'ai vu se rouvrir les portes qui me séparaient du monde ») et de Lafon (« mes romans me mènent en bateau »).",
              question: "Précisez le registre de langue et le registre littéraire de chacun.",
              correction: [
                { type: "line", text: "**Démarche :** pour chaque citation, séparer les deux niveaux d'analyse : d'abord le registre de langue (vocabulaire, syntaxe), puis le registre littéraire (ton, effet visé)." },
                { type: "line", text: "**Réponse attendue (formulation modèle) :**" },
                { type: "line", text: "**Yourcenar** : registre de langue soutenu (vocabulaire précis, syntaxe ample) ; registre littéraire lyrique et épique (le récit d'une révélation, avec une dimension de grandeur)." },
                { type: "line", text: "**Lafon** : registre de langue courant, voire familier (« mener en bateau ») ; registre littéraire ironique et comique (jeu sur la polysémie, autodérision)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 4 : analyse de style rédigée",
              enonce: "« Vivre, sans l'écriture, me va mal, comme un habit trop lâche. On écrit parce qu'on ne sait par quel autre biais attraper le réel. » (Lola Lafon)",
              question: "Rédigez une analyse de style identifiant et analysant trois procédés.",
              correction: [
                { type: "line", text: "**Démarche :** annoncer les trois procédés, les analyser un à un (nom, mécanisme, effet), puis fermer sur l'idée d'ensemble qu'ils servent. C'est le format d'une réponse rédigée au concours." },
                { type: "line", text: "**Réponse attendue (formulation modèle) :**" },
                { type: "paragraph", text: "« La comparaison “comme un habit trop lâche” corporalise une inadéquation abstraite : on s'empêtre dans une vie qui n'est pas la sienne. La litote “me va mal” dit moins que la vérité, puisque l'écriture est vitale, et produit une élégance retenue. Enfin, la métaphore “attraper le réel” présente l'écriture comme l'unique filet capable de saisir une réalité fuyante. Ces trois procédés convergent vers une même thèse : écrire est une nécessité, la seule façon d'habiter le monde à sa juste mesure. »" },
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
