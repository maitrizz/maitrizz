import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "rs1", label: "Je sais que la synonymie parfaite n'existe pas : je choisis un synonyme adapté au contexte et je justifie la nuance" },
  { id: "rs2", label: "Je distingue les trois types d'antonymie : graduable, complémentaire, réciproque (conversive)" },
  { id: "rs3", label: "Je distingue l'hyperonyme (terme générique) de l'hyponyme (terme spécifique)" },
  { id: "rs4", label: "Je reconnais la polysémie et je distingue le sens propre du sens figuré en contexte" },
  { id: "rs5", label: "Je distingue la dénotation de la connotation, et je repère les connotations ambivalentes" },
  { id: "rs6", label: "Je distingue le champ lexical (mots d'un thème) du champ sémantique (sens d'un mot)" },
  { id: "rs7", label: "Je réponds aux questions de lexique en contexte : synonyme adapté, sens figuré, champ lexical analysé dans son effet" },
];

export const ficheRelationsSemantiques: Fiche = {
  slug: "relations-semantiques",
  matiere: "francais",
  numero: 17,
  partie: "Partie 2 : Lexique",
  title: "Les relations sémantiques",
  subtitle:
    "Synonymie, antonymie, hyperonymie, hyponymie, polysémie, sens propre et figuré, champ lexical et champ sémantique",
  badges: [
    { label: "★★★ Tombe à chaque session", variant: "hot" },
    { label: "Cycle 3-4 · BOEN n°1 du 22 janvier 2019", variant: "info" },
  ],
  metaTitle: "Les relations sémantiques (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur les relations sémantiques : synonymie, antonymie (graduable, complémentaire, réciproque), hyperonymie et hyponymie, polysémie, sens propre et figuré, dénotation et connotation, champ lexical et champ sémantique. Méthode du sens en contexte, exercices corrigés, flashcards et auto-évaluation.",
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
                "Les mots entrent en relation de sens. Au concours, les questions portent presque toujours sur le sens en contexte : la précision est décisive.",
              items: [
                {
                  number: "①",
                  title: "Synonymie et antonymie",
                  text: "Sens proche (jamais identique) et sens contraire (trois types d'opposition).",
                },
                {
                  number: "②",
                  title: "Hyperonymie et hyponymie",
                  text: "Les relations d'inclusion : un terme générique englobe des termes spécifiques.",
                },
                {
                  number: "③",
                  title: "Polysémie, sens propre et figuré",
                  text: "Un mot, plusieurs sens ; sens premier concret ou sens dérivé métaphorique ; dénotation et connotation.",
                },
                {
                  number: "④",
                  title: "Champ lexical et champ sémantique",
                  text: "Plusieurs mots autour d'un thème, ou plusieurs sens d'un même mot.",
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
              text: "Les mots ne vivent pas isolément : ils entrent en relation de sens. Au concours, les questions portent presque toujours sur le **sens en contexte** : proposer un synonyme adapté, expliquer un emploi figuré, dégager un champ lexical. Un synonyme qui trahit le contexte ou une définition hors-sol ne rapporte aucun point.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Synonymie et antonymie",
              blocks: [
                {
                  type: "paragraph",
                  text: "Deux mots sont **synonymes** quand leurs sens sont très proches et qu'ils peuvent se substituer dans certains contextes, jamais dans tous. La synonymie parfaite n'existe pas : chaque synonyme apporte une nuance de sens, de registre ou de connotation. « observer » (attention active), « contempler » (durée, émotion) et « regarder » diffèrent.",
                },
                {
                  type: "table",
                  title: "Les trois types d'antonymie",
                  headers: ["Type", "Principe", "Exemples"],
                  rows: [
                    ["Graduable", "Opposition sur une échelle, avec des degrés intermédiaires", "chaud / froid (tiède existe), grand / petit"],
                    ["Complémentaire", "Opposition binaire, sans intermédiaire", "vivant / mort, présent / absent, vrai / faux"],
                    ["Réciproque (conversive)", "L'un implique l'autre dans la relation inverse", "acheter / vendre, donner / recevoir"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "L'antonymie dépend du contexte",
                  text: "« léger » a pour antonyme « lourd » au sens physique, mais « grave » au sens figuré : une **légère** blessure s'oppose à une **grave** blessure. Toujours raisonner sur le sens employé dans le texte.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Hyperonymie et hyponymie",
              blocks: [
                {
                  type: "paragraph",
                  text: "Ces relations organisent le lexique en hiérarchies de sens (relation « est un type de »). L'**hyperonyme** est le terme générique ; l'**hyponyme** est le terme spécifique qu'il englobe.",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Hyperonyme (générique)",
                      definition: "Le terme général qui englobe des termes plus précis.",
                      exemples: ["« arbre » englobe chêne, peuplier, pin ; « animal » englobe chien, chat, cheval"],
                      test: "On peut toujours remonter : chêne → arbre → végétal → être vivant.",
                    },
                    {
                      title: "Hyponyme (spécifique)",
                      definition: "Le terme particulier inclus dans un terme générique.",
                      exemples: ["« chien » est un hyponyme d'« animal » ; « roman » est un hyponyme de « récit »"],
                      test: "Test : « un X est un type de Y » → X est hyponyme de Y.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  text: "Procédé d'écriture : un texte réaliste privilégie les hyponymes précis (effet de concret) ; un style plus abstrait préfère les hyperonymes.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Polysémie, sens propre et figuré, connotation",
              blocks: [
                {
                  type: "paragraph",
                  text: "Un mot **polysémique** possède plusieurs sens, tous répertoriés au dictionnaire ; le contexte sélectionne le bon. « vol » : déplacement aérien, larcin, groupe d'oiseaux.",
                },
                {
                  type: "notionCardGrid",
                  columns: 1,
                  cards: [
                    {
                      title: "Sens propre et sens figuré",
                      definition: "Le sens propre est le sens premier, concret. Le sens figuré est un sens dérivé, métaphorique.",
                      exemples: [
                        "« brûler » : sens propre = consumer par le feu ; sens figuré = brûler d'impatience (désir intense)",
                        "« une éclaboussure des âmes » : sens propre = projection de liquide ; sens figuré = souillure morale",
                      ],
                      test: "Toujours vérifier si le mot est employé au sens propre ou figuré dans le texte.",
                    },
                    {
                      title: "Dénotation et connotation",
                      definition: "La dénotation est le sens objectif (du dictionnaire) ; la connotation, les valeurs affectives ou culturelles que le mot évoque.",
                      exemples: [
                        "« serpent » : dénotation = reptile ; connotation = trahison, ruse, danger",
                      ],
                      test: "Une connotation peut être ambivalente : positive et négative à la fois.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  title: "La connotation ambivalente est valorisée",
                  text: "Quand un mot active à la fois des valeurs positives et négatives, le signaler montre une lecture fine. Exemple : « apatride » appliqué à l'écrivain combine le déracinement (négatif) et la liberté de l'errance créatrice (positif).",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Champ lexical et champ sémantique",
              blocks: [
                {
                  type: "comparisonGrid",
                  rows: [
                    { label: "Champ lexical (un thème, plusieurs mots)", good: "Tous les mots d'un texte liés à un même thème : nuit, ombre, obscur, lune… (voir la notion 13)" },
                    { label: "Champ sémantique (un mot, plusieurs sens)", good: "Tous les sens d'un même mot : « vol » = déplacement aérien / larcin / nuée d'oiseaux" },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  text: "Ne pas confondre : le champ **L**exical = une **L**iste de mots autour d'un thème (dans un texte) ; le champ **S**émantique = les **S**ens d'un seul mot (dans le dictionnaire).",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · le synonyme hors contexte",
              badge: "Erreur très fréquente",
              faux: "Pour « se hâtait » (une femme qui marche vite, yeux baissés), proposer « courait ».",
              vrai: "« courir » trahit le contexte (la femme marche vite, elle ne court pas). Proposer **« se dépêchait »** ou **« pressait le pas »**.",
              methode: "Vérifier que le synonyme peut remplacer le mot dans cette phrase précise, sans la dénaturer.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 · ne voir que le sens propre",
              badge: "Source d'erreurs",
              faux: "Définir « apatride » seulement comme « personne sans nationalité ».",
              vrai: "En contexte, le mot est employé au **sens figuré** : l'écriture arrache l'auteur à ses repères, comme s'il changeait de pays. Il faut expliquer ce sens figuré.",
              methode: "Se demander d'abord : le mot est-il au sens propre ou figuré dans ce texte ?",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 · champ lexical ou champ sémantique ?",
              badge: "Cas difficile",
              faux: "« Le champ sémantique de l'écriture comprend : plume, roman, page, encre. »",
              vrai: "C'est un **champ lexical** (plusieurs mots, un thème). Le champ sémantique, c'est l'ensemble des sens d'un seul mot.",
              methode: "Plusieurs mots autour d'un thème → champ lexical. Plusieurs sens d'un mot → champ sémantique.",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°4 · relever sans analyser",
              badge: "Perte de points",
              faux: "Lister les mots d'un champ lexical sans expliquer leur effet.",
              vrai: "Après le relevé, **nommer le thème et analyser l'effet** : le champ de l'enfermement traduit l'angoisse de l'écriture, il ne fait pas que décrire.",
              methode: "Relever, nommer le thème, puis expliquer ce que ce champ produit dans le texte.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 3-4 :** les élèves construisent des réseaux de mots (synonymes, antonymes, familles), travaillent le sens propre et figuré, et apprennent à choisir le mot juste.\n\n**Ce que vous devez savoir dire :** « On enrichit le vocabulaire en organisant les mots par relations de sens : synonymes pour nuancer, antonymes pour contraster, hyperonymes pour catégoriser. Comprendre le sens en contexte est l'objectif central. »",
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
              text: "Proposer un synonyme en contexte, expliquer le sens d'un mot, et dégager un champ lexical en l'analysant. Chacune se termine par un checkpoint.",
            },
            {
              type: "rappelExpress",
              title: "Rappel express : les relations de sens",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "Synonyme = sens proche (jamais identique) ; antonyme = sens contraire (3 types).",
                    "Hyperonyme = générique ; hyponyme = spécifique.",
                    "Sens propre = concret ; sens figuré = métaphorique. Dénotation = objectif ; connotation = subjectif.",
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ Le contexte décide toujours : un mot n'a pas de sens « en soi », il a un sens dans la phrase.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Proposer un synonyme en contexte",
              intro:
                "**Question typique :** « Proposez un synonyme du mot souligné en contexte. »",
              steps: [
                {
                  number: "1",
                  text: "**Identifier le sens précis** du mot dans la phrase (pas son sens générique).",
                  example: { lines: ["« pressée » (yeux baissés, hâte) = sous pression, pas enthousiaste"] },
                },
                {
                  number: "2",
                  text: "**Trouver un synonyme substituable** dans cette phrase, de même classe grammaticale.",
                  example: { lines: ["« pressée » → « hâtive » / « poussée par l'urgence »"] },
                },
                {
                  number: "💡",
                  text: "**Justifier la nuance** si elle est significative.",
                  warn: "⚠️ Vérifier la cohérence avec le reste de la phrase avant de valider.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Proposez un synonyme en contexte de « contemplait » dans « Elle contemplait le coucher de soleil ».",
              correction: [
                { type: "line", text: "**« admirait »** (durée + émotion esthétique, proche). « regardait » serait trop neutre, « observait » trop analytique : « contempler » implique une émotion devant la beauté." },
                { type: "note", text: "Trouvé une nuance adaptée ? Sinon, revoyez la synonymie en contexte." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Expliquer le sens d'un mot en contexte",
              intro:
                "**Question typique :** « Expliquez le sens de ce mot dans le texte. »",
              steps: [
                {
                  number: "1",
                  text: "**Déterminer si le mot est au sens propre ou figuré.**",
                  example: { lines: ["« attraper le réel » → sens figuré (on ne saisit pas le réel avec les mains)"] },
                },
                {
                  number: "2",
                  text: "**Donner le sens propre puis le sens figuré ou contextuel**, en s'appuyant sur le texte.",
                  example: { lines: ["sens propre = saisir physiquement ; sens figuré = parvenir à comprendre, représenter le réel"] },
                },
                {
                  number: "💡",
                  text: "**Préciser les connotations** si elles enrichissent la réponse (positive, négative, ambivalente).",
                  warn: "⚠️ Ne pas se contenter du sens propre quand le mot est employé au figuré.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Le mot « vide » dans « il sentait le vide de sa vie s'étendre » est-il au sens propre ou figuré ? Expliquez.",
              correction: [
                { type: "line", text: "**Sens figuré** : non le vide physique (absence de matière), mais le sentiment d'une existence sans sens. La métaphore spatiale (« s'étendre ») donne une consistance au sentiment intérieur." },
                { type: "note", text: "Le sens figuré repéré ? Direction le dernier checkpoint." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Dégager et analyser un champ lexical",
              intro:
                "**Question typique :** « Dégagez le champ lexical de [thème] et analysez son effet. »",
              steps: [
                {
                  number: "1",
                  text: "**Relever** tous les mots du texte liés au thème (noms, verbes, adjectifs, adverbes).",
                  example: { lines: ["thème de la nuit : nuit, obscur, ombre, lune, faiblement"] },
                },
                {
                  number: "2",
                  text: "**Nommer le thème** et **analyser l'effet** produit (atmosphère, intention).",
                  example: { lines: ["ce champ crée une atmosphère mystérieuse et inquiétante"] },
                },
                {
                  number: "💡",
                  text: "**Conclure sur la fonction** dans le texte : décrire ne suffit pas.",
                  warn: "⚠️ Un relevé sans analyse de l'effet est insuffisant.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Dans « muette, heureuse, et ne disait rien », quel champ lexical, et quel effet ?",
              correction: [
                { type: "line", text: "Champ lexical du **silence** (muette, ne disait rien) associé au bonheur (heureuse). Effet : le silence n'est pas vide mais plein, l'émotion se lit sur le visage plutôt qu'elle ne se dit." },
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
                  objectifId: "rs1",
                  question: "Pourquoi la synonymie parfaite n'existe-t-elle pas ?",
                  options: [
                    "Parce que deux mots ne se prononcent jamais pareil",
                    "Parce que chaque synonyme apporte une nuance de sens, de registre ou de connotation",
                    "Parce que les synonymes sont rares",
                    "Parce que le dictionnaire l'interdit",
                  ],
                  correctIndex: 1,
                  explanation:
                    "Deux mots distincts ne peuvent pas avoir exactement les mêmes propriétés : il y a toujours une nuance, et le contexte décide.",
                },
                {
                  objectifId: "rs2",
                  question: "« acheter / vendre » est une antonymie :",
                  options: ["graduable", "complémentaire", "réciproque (conversive)", "ce ne sont pas des antonymes"],
                  correctIndex: 2,
                  explanation:
                    "L'un implique l'autre dans la relation inverse : on ne peut acheter sans que quelqu'un vende. C'est une antonymie réciproque.",
                },
                {
                  objectifId: "rs3",
                  question: "Dans « chêne / arbre », quel est l'hyperonyme ?",
                  options: ["chêne", "arbre", "les deux", "aucun"],
                  correctIndex: 1,
                  explanation:
                    "« arbre » est le terme générique qui englobe « chêne » : c'est l'hyperonyme. « chêne » est l'hyponyme.",
                },
                {
                  objectifId: "rs4",
                  question: "Dans « brûler d'impatience », « brûler » est employé au sens :",
                  options: ["propre", "figuré", "littéral", "technique"],
                  correctIndex: 1,
                  explanation:
                    "Sens figuré : non « consumer par le feu » (propre), mais « éprouver un désir intense ».",
                },
                {
                  objectifId: "rs5",
                  question: "« serpent » évoque la trahison et la ruse : c'est sa :",
                  options: ["dénotation", "connotation", "polysémie", "antonymie"],
                  correctIndex: 1,
                  explanation:
                    "La dénotation est « reptile » (sens objectif) ; la trahison et la ruse sont des connotations (valeurs culturelles).",
                },
                {
                  objectifId: "rs6",
                  question: "« nuit, ombre, obscur, lune » dans un texte forment :",
                  options: ["un champ sémantique", "un champ lexical", "une polysémie", "une famille de mots"],
                  correctIndex: 1,
                  explanation:
                    "Plusieurs mots autour d'un thème (la nuit) : c'est un champ lexical. Le champ sémantique, ce sont les sens d'un seul mot.",
                },
                {
                  objectifId: "rs6",
                  question: "Les sens « déplacement aérien / larcin / nuée d'oiseaux » de « vol » forment :",
                  options: ["un champ lexical", "le champ sémantique du mot vol", "une antonymie", "une synonymie"],
                  correctIndex: 1,
                  explanation:
                    "Les différents sens d'un même mot constituent son champ sémantique (sa polysémie).",
                },
                {
                  objectifId: "rs7",
                  question: "Pour « proposez un synonyme en contexte », il faut :",
                  options: [
                    "donner le premier synonyme qui vient",
                    "choisir un mot qui peut remplacer dans cette phrase précise",
                    "donner un antonyme",
                    "recopier la définition du dictionnaire",
                  ],
                  correctIndex: 1,
                  explanation:
                    "Le synonyme doit convenir à la phrase précise, sans la dénaturer, et de même classe grammaticale.",
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
              label: "Niveau 1 : Identifier les relations",
              sub: "Synonyme, antonyme, hyperonyme, sens propre/figuré",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 1 : Quelle relation sémantique ?",
              objectifTag: "Relations",
              question:
                "Synonymie, antonymie ou hyperonymie/hyponymie ?\na) rapide / lent · b) chêne / arbre · c) débuter / commencer · d) vivant / mort · e) roman / récit · f) triste / mélancolique",
              correction: [
                { type: "line", text: "a) antonymie (graduable) · b) hyponymie (chêne hyponyme d'arbre) · c) synonymie · d) antonymie (complémentaire) · e) hyponymie (roman hyponyme de récit) · f) synonymie." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 2 : Synonymes avec nuance",
              objectifTag: "Synonymie",
              question: "Donnez deux synonymes en précisant une nuance :\nregarder · peur · parler",
              correction: [
                { type: "line", text: "**regarder** : observer (attention active) / contempler (durée, admiration)." },
                { type: "line", text: "**peur** : crainte (moins intense) / terreur (plus intense)." },
                { type: "line", text: "**parler** : s'exprimer (soutenu) / bavarder (familier, durée)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 3 : Sens propre ou figuré ?",
              question:
                "a) « une lumière brûlante » · b) « brûler d'impatience » · c) « les yeux baissés » · d) « un regard glacial »",
              correction: [
                { type: "line", text: "a) sens propre (chaleur physique) · b) sens figuré (désir intense) · c) sens propre (position des yeux) · d) sens figuré (froideur, indifférence hostile)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : Sens en contexte",
              sub: "Synonyme contextuel, champ lexical, nuances",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 4 : Synonymes en contexte",
              enonce: "« Elle se hâtait, les yeux baissés, pressée d'atteindre sa maison avant la nuit. » (Zola)",
              question: "Proposez un synonyme en contexte pour « se hâtait », « pressée » et « atteindre », et justifiez la nuance.",
              correction: [
                { type: "line", text: "**se hâtait** → se dépêchait / pressait le pas (urgence ; « courait » serait inexact, elle marche)." },
                { type: "line", text: "**pressée** → poussée par l'urgence (sous pression, non enthousiaste)." },
                { type: "line", text: "**atteindre** → rejoindre / gagner (« atteindre » implique un effort pour parvenir)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 5 : Champ lexical et analyse",
              enonce: "« Ma mère, dont le regard ne vieillissait pas, regardait les enfants jouer. Elle souriait, muette, heureuse, et ne disait rien. » (Colette)",
              question: "a) Relevez le champ lexical du silence et de la retenue. b) « muette » est-il synonyme de « silencieuse » ici ?",
              correction: [
                { type: "line", label: "a)", text: "Champ du silence : « muette », « ne disait rien », « souriait » (expression sans parole), le « regard » qui remplace les mots." },
                { type: "line", label: "b)", text: "Non : « silencieuse » = absence de bruit (neutre) ; « muette » = absence délibérée de parole, avec une émotion retenue, un indicible. « Muette » suggère une plénitude que les mots ne pourraient contenir." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 6 : Champ lexical vs champ sémantique",
              question: "Pour le mot « lumière » : donnez son champ sémantique (ses sens), puis construisez un champ lexical de la lumière (mots d'un thème).",
              correction: [
                { type: "line", text: "**Champ sémantique de « lumière »** : (1) rayonnement visible ; (2) source lumineuse ; (3) sens figuré : intelligence, savoir (« les Lumières »)." },
                { type: "line", text: "**Champ lexical de la lumière** : soleil, flamme, rayon, lueur, éclat, briller, éclairer (mots de natures variées autour du thème)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : Analyse fine",
              sub: "Polysémie, connotation ambivalente, format jury",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 7 : Jeu sur la polysémie",
              enonce: "« Mes romans me mènent en bateau, donc ils me baladent. » (Lola Lafon)",
              question: "Expliquez la polysémie de « balader » et comment l'autrice joue sur les deux sens. Rédigez au format jury.",
              correction: [
                { type: "line", text: "« balader » est polysémique : (1) se promener, déambuler ; (2) sens familier : mener en bateau, tromper. L'autrice cite d'abord « mener en bateau » puis conclut par « me baladent », activant les deux sens." },
                { type: "paragraph", text: "**Formule jury :** « Le verbe “balader” est polysémique. En contexte, Lafon active simultanément son sens premier (être emporté, errer) et son sens familier (être mené en bateau, trompé). Ce jeu exprime l'ambivalence de son rapport à l'écriture : à la fois errance libératrice et perte de contrôle. »" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 8 : Connotation ambivalente",
              enonce: "« En écrivant, je suis comme une apatride. » (d'après Lola Lafon)",
              question: "Expliquez en contexte le sens d'« apatride » : sens propre, sens figuré, et connotations.",
              correction: [
                { type: "line", text: "**Sens propre** : personne sans nationalité (juridique). **Sens figuré** : l'écriture contraint l'autrice à quitter ses repères, comme si elle changeait de pays." },
                { type: "line", text: "**Connotations ambivalentes** : négative (déracinement, perte de repères, angoisse) ET positive (liberté de l'errance, disponibilité créatrice). Signaler cette ambivalence est valorisé : c'est une lecture experte." },
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
              text: "Ces exercices reproduisent le format des questions de lexique en Partie 2 (sens en contexte). Les exercices calqués sur des sujets récents portent le badge ✦.",
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format identique au concours",
              title: "Exercice 1 : expliquer un emploi figuré",
              enonce: "« la langue n'est pas un objet inerte… j'écris comme une apatride. » (d'après Lola Lafon)",
              question: "Expliquez en contexte le sens de l'adjectif « apatride » : sens propre, sens figuré, connotations.",
              correction: [
                { type: "line", text: "**Sens propre** : personne sans nationalité reconnue (juridique)." },
                { type: "line", text: "**Sens figuré** : l'écriture arrache l'autrice à son univers familier, à ses repères identitaires, comme un changement de pays." },
                { type: "line", text: "**Connotations** : négative (déracinement, angoisse) et positive (liberté, ouverture créatrice). Reconnaître cette ambivalence est valorisé." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format identique au concours",
              title: "Exercice 2 : synonyme en contexte",
              enonce: "« La narratrice essuie les sarcasmes de sa famille lorsqu'elle lit en cachette. »",
              question: "Proposez deux synonymes en contexte de « sarcasmes » et justifiez votre choix.",
              correction: [
                { type: "line", text: "**railleries** (moqueries dérisoires) et **moqueries** (plus neutre). « sarcasmes » = railleries acérées, avec intention de blesser." },
                { type: "line", text: "À éviter : « critiques » (trop général, sans l'ironie blessante) et « insultes » (trop fort : un sarcasme n'est pas une insulte directe)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 3 : antonymie en contexte",
              enonce: "« Il avait grandi dans la déraison des enfances paysannes, loin des livres et de la sagesse humaine. » (d'après Sartre)",
              question: "a) Quel est l'antonyme de « déraison » dans ce passage ? b) Expliquez la relation des deux termes opposés.",
              correction: [
                { type: "line", label: "a)", text: "L'antonyme est **« sagesse »** : déraison = absence de raison ; sagesse = plénitude du discernement." },
                { type: "line", label: "b)", text: "« déraison » (ignorance, absence de culture) s'oppose à « sagesse humaine » (savoir acquis par les livres). L'opposition porte la thèse : l'accès aux livres conditionne l'accès à la raison." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 4 : polysémie ou homonymie ?",
              enonce: "« vol » (déplacement aérien / larcin) et « louer » (donner en location / féliciter)",
              question: "Lequel relève de la polysémie, lequel de l'homonymie ? Justifiez.",
              correction: [
                { type: "line", text: "**« vol » : polysémie** : un seul mot, des sens liés par une histoire commune (les sens dérivent l'un de l'autre)." },
                { type: "line", text: "**« louer » : homonymie** : deux mots distincts d'origines latines différentes (locare / laudare), sans lien sémantique." },
                { type: "note", text: "💡 La polysémie est bien plus fréquente dans les questions de lexique du concours." },
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
              text: "Ces exercices reproduisent des **erreurs fréquentes** dans les questions de lexique. Repérer ce qui cloche et corriger rigoureusement est une compétence directement valorisée au concours.",
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 1 · Réponse à corriger : seulement le sens propre",
              enonce: "Réponse d'un candidat à « expliquez en contexte le sens d'apatride » : « Apatride signifie une personne sans nationalité, sans pays. »",
              question: "Identifiez et corrigez l'erreur.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Le candidat donne seulement le sens propre, sans voir l'emploi figuré", bad: true },
                    { text: "En contexte, le mot ne possède pas son sens premier" },
                    { text: "Réponse attendue : sens figuré (l'écriture arrache aux repères, comme un changement de pays), avec ses connotations ambivalentes" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 2 · Réponse à corriger : synonyme hors contexte",
              enonce: "Copie d'un candidat : synonyme de « se hâtait » (une femme qui marche vite, yeux baissés) → « courait ».",
              question: "Identifiez et corrigez l'erreur.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "« courir » trahit le contexte : la femme « passa » et marche vite, elle ne court pas", bad: true },
                    { text: "Un synonyme doit être cohérent avec toute la phrase" },
                    { text: "Réponse attendue : « se dépêchait », « pressait le pas », « s'empressait »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 3 · Réponse à corriger : champ « sémantique »",
              enonce: "Réponse d'un candidat : « Le champ sémantique de l'écriture comprend : plume, roman, page, encre, auteur. »",
              question: "Identifiez et corrigez l'erreur de terminologie.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Le candidat dit « champ sémantique » alors qu'il décrit un champ lexical", bad: true },
                    { text: "Le champ sémantique = les sens d'un seul mot ; le champ lexical = des mots d'un thème" },
                    { text: "Réponse attendue : « le **champ lexical** de l'écriture comprend : plume, roman, page, encre, auteur »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 4 · Réponse à corriger : relever sans analyser",
              enonce: "Réponse d'un candidat : « Il y a beaucoup de mots liés à l'écriture comme langue, mots, écrire. Ces mots montrent que le texte parle de l'écriture. »",
              question: "Identifiez et corrigez l'erreur.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Relevé sans analyse, et justification circulaire (le texte parle d'écriture car il y a des mots sur l'écriture)", bad: true },
                    { text: "Il faut analyser l'effet du champ lexical dans le texte" },
                    { text: "Réponse attendue : montrer que les métaphores corporelles (« va mal », « habit trop lâche », « m'empêtre ») font de l'écriture une nécessité vitale et une expérience d'inadéquation" },
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
                  question: "La règle d'or pour proposer un synonyme ?",
                  answer:
                    "Toujours **en contexte** : un mot qui peut se substituer dans la phrase précise, de même classe grammaticale. La synonymie parfaite n'existe pas : préciser la nuance.",
                  astuce: "⚠️ Erreur typique : donner le premier synonyme générique sans vérifier la phrase.",
                },
                {
                  question: "Les trois types d'antonymie ?",
                  answer:
                    "**Graduable** : échelle, intermédiaires (chaud / froid).\n**Complémentaire** : binaire, sans intermédiaire (vivant / mort).\n**Réciproque** : l'un implique l'autre (acheter / vendre).",
                  astuce: "💡 L'antonymie dépend du contexte (léger / lourd ou léger / grave).",
                },
                {
                  question: "Hyperonyme ou hyponyme : comment trancher ?",
                  answer:
                    "Test : « un X est un type de Y » → X est l'**hyponyme**, Y l'**hyperonyme**.\n« Un chêne est un type d'arbre » → chêne (hyponyme), arbre (hyperonyme).",
                },
                {
                  question: "Sens propre et sens figuré ?",
                  answer:
                    "**Sens propre** : sens premier, concret (« brûler » = consumer par le feu).\n**Sens figuré** : sens dérivé, métaphorique (« brûler d'impatience »).",
                  astuce: "⚠️ Toujours vérifier si le mot est au sens propre ou figuré dans le texte.",
                },
                {
                  question: "Dénotation et connotation ?",
                  answer:
                    "**Dénotation** : sens objectif, du dictionnaire (serpent = reptile).\n**Connotation** : valeurs affectives ou culturelles (serpent = trahison, ruse).",
                  astuce: "💡 La connotation ambivalente (positive et négative) est valorisée par les jurys.",
                },
                {
                  question: "Champ lexical ou champ sémantique ?",
                  answer:
                    "**Champ lexical** : plusieurs mots d'un texte autour d'un thème (nuit, ombre, lune).\n**Champ sémantique** : les sens d'un seul mot (vol = vol aérien / larcin).",
                  astuce: "💡 Lexical = Liste de mots ; Sémantique = Sens d'un mot.",
                },
                {
                  question: "Polysémie ou homonymie ?",
                  answer:
                    "**Polysémie** : un mot, plusieurs sens **liés** par une histoire commune (vol).\n**Homonymie** : deux mots distincts d'origines différentes, prononcés ou écrits pareil (louer / louer).",
                },
                {
                  question: "Comment analyser un champ lexical sans s'arrêter au relevé ?",
                  answer:
                    "1) **Relever** les mots (toutes natures) ; 2) **nommer** le thème ; 3) **analyser l'effet** dans le texte (atmosphère, intention).",
                  astuce: "⚠️ Un relevé sans analyse de l'effet est la principale perte de points.",
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
              center: { title: "Relations", subtitle: "sémantiques" },
              branches: [
                {
                  title: "Proximité et opposition",
                  lines: ["Synonymie : sens proche", "Antonymie : graduable / complémentaire / réciproque"],
                  variant: "blue",
                },
                {
                  title: "Inclusion",
                  lines: ["Hyperonyme : générique (arbre)", "Hyponyme : spécifique (chêne)"],
                  variant: "green",
                },
                {
                  title: "Sens du mot",
                  lines: ["Polysémie : plusieurs sens", "Sens propre / sens figuré", "Dénotation / connotation"],
                  variant: "green",
                },
                {
                  title: "Champs",
                  lines: ["Champ lexical : un thème", "Champ sémantique : un mot"],
                  variant: "blue",
                },
                {
                  title: "Pièges classiques",
                  lines: ["Synonyme hors contexte", "Ne voir que le sens propre", "Relever sans analyser"],
                  variant: "yellow",
                },
                {
                  title: "Renvois",
                  lines: ["Champ lexical → notion 13", "Formation des mots → notion 16", "Figures et registres → notion 18"],
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
