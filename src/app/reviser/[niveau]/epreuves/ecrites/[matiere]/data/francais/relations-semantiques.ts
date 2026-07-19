import type { Fiche } from "@/components/fiche/types";
import { EXERCICES_RELATIONS_SEMANTIQUES } from "./exercices-relations-semantiques";
import { COPIES_RELATIONS_SEMANTIQUES } from "./copies-relations-semantiques";

export const SAVOIR_FAIRE = [
  { id: "synonymie", label: "Synonymie" },
  { id: "antonymie", label: "Antonymie" },
  { id: "hyperonymie", label: "Hyperonymie" },
  { id: "polysemie", label: "Polysémie" },
  { id: "champ-lexical", label: "Champ lexical" },
  { id: "sens-propre-figure", label: "Sens propre/figuré" },
];

export const ficheRelationsSemantiques: Fiche = {
  slug: "relations-semantiques",
  matiere: "francais",
  numero: 18,
  partie: "Partie 2 : Lexique",
  title: "Les relations sémantiques",
  subtitle: "Synonymie, antonymie, hyperonymie, hyponymie, polysémie, sens propre et figuré, champ lexical et champ sémantique",
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
  metaTitle: "Relations sémantiques · Fiche de révision CRPE",
  metaDescription: "Les relations sémantiques au CRPE : synonymie, antonymie, hyperonymie, polysémie, sens propre et figuré, dénotation et connotation. Exercices corrigés.",
  maitriseNotionSlug: "relations-semantiques",
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
              text: "Les mots ne vivent pas isolément : ils entrent en relation de sens. Au concours, les questions portent presque toujours sur le **sens en contexte** : proposer un synonyme adapté, expliquer un emploi figuré, dégager un champ lexical. Un synonyme qui trahit le contexte ou une définition hors-sol ne rapporte aucun point. Sur l'enseignement du lexique, voir les [ressources Lexique et culture d'Éduscol](https://eduscol.education.fr/255/lexique-et-culture).",
            },
            {
              type: "subsection",
              number: "①",
              title: "Synonymie et antonymie",
              blocks: [
                {
                  type: "paragraph",
                  text: "**La synonymie.** Deux mots sont **synonymes** quand ils partagent le même sens de base et peuvent se substituer dans certains contextes, jamais dans tous. La synonymie parfaite n'existe pas : chaque synonyme ajoute une nuance de sens, de registre ou de connotation. Ainsi « regarder », « observer » et « contempler » sont bien synonymes, car tous les trois veulent dire « porter le regard sur quelque chose » : c'est ce socle commun qui les rend interchangeables dans certaines phrases. Mais chacun colore l'action autrement : « regarder » est neutre, « observer » insiste sur l'attention active, « contempler » ajoute la durée et l'émotion devant ce qu'on voit. Le sens partagé en fait des synonymes ; ces nuances interdisent de les employer indifféremment.",
                },
                {
                  type: "paragraph",
                  text: "**L'antonymie.** Deux mots sont **antonymes** quand leurs sens s'opposent. Mais toutes les oppositions ne fonctionnent pas de la même manière : le concours attend que vous distinguiez **trois types d'antonymie**, présentés ci-dessous.",
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
                      definition: "La **dénotation** est le sens objectif et neutre, commun à tous les locuteurs : c'est la définition du dictionnaire. La **connotation** rassemble les associations subjectives, affectives ou culturelles qui se greffent sur ce sens. Un même mot dénote la même chose pour tout le monde, mais ne connote pas la même chose selon la culture, l'époque ou le contexte.",
                      exemples: [
                        "« serpent » : dénotation = reptile sans pattes ; connotation = traîtrise, ruse, danger (héritage culturel et religieux).",
                        "« maison » et « masure » dénotent la même réalité (une habitation), mais « masure » connote la pauvreté et le délabrement.",
                        "« blanc » dénote une couleur ; il connote la pureté en Occident, mais le deuil dans d'autres cultures.",
                      ],
                      test: "Une connotation peut être ambivalente (positive et négative à la fois) et dépend du contexte : la repérer montre une lecture fine.",
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
                    { label: "Champ lexical (un thème, plusieurs mots)", good: "Tous les mots d'un texte liés à un même thème : nuit, ombre, obscur, lune… (voir la notion 14)" },
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
              text: "**Cycle 1 (maternelle) :** on construit le vocabulaire à l'oral et on amorce les relations de sens par le jeu (trouver le contraire de « grand », des mots qui veulent dire à peu près la même chose), sans terminologie.\n\n**Cycle 2 :** les élèves catégorisent les mots (termes génériques et particuliers : « fruit » englobe « pomme, poire ») et rencontrent synonymes et contraires pour préciser leur expression.\n\n**Cycle 3 :** on structure les réseaux de mots (synonymes, antonymes, familles, termes génériques et spécifiques), on travaille le sens propre et le sens figuré, et on apprend à choisir le mot juste selon le contexte.\n\n**Ce que vous devez savoir dire :** « On enrichit le vocabulaire en organisant les mots par relations de sens : synonymes pour nuancer, antonymes pour contraster, mots génériques pour catégoriser. Amorcé à l'oral dès la maternelle, ce travail se structure aux cycles 2 et 3, où comprendre le sens en contexte devient l'objectif central. » (voir [Éduscol, Lexique et culture](https://eduscol.education.fr/255/lexique-et-culture) et l'[étude de la langue cycles 2 et 3](https://eduscol.education.fr/248/francais-cycles-2-et-3-etude-de-la-langue))",
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
                "*Question typique : « Dans la phrase “Elle se hâtait, les yeux baissés, <u>pressée</u> d'atteindre sa maison avant la nuit”, proposez un synonyme en contexte de l'adjectif souligné <u>pressée</u> et justifiez votre choix. »*",
              steps: [
                {
                  number: "1",
                  text: "**Identifier le sens précis** du mot dans la phrase (pas son sens générique).",
                  example: { lines: ["« pressée » (elle marche vite, yeux baissés) = poussée par l'urgence, sous pression, pas enthousiaste"] },
                },
                {
                  number: "2",
                  text: "**Trouver un synonyme substituable** dans cette phrase, de même classe grammaticale (ici un adjectif).",
                  example: { lines: ["« pressée » → « hâtive » ou la périphrase « poussée par l'urgence »"] },
                },
                {
                  number: "💡",
                  text: "**Justifier la nuance** et vérifier la substitution dans la phrase entière.",
                  warn: "⚠️ Écarter « empressée » (zèle, amabilité) : la nuance ne convient pas au contexte d'urgence.",
                },
                {
                  number: "📌",
                  text: "**Réponse attendue (formulation modèle) :** « En contexte, l'adjectif *pressée* signifie “poussée par l'urgence, sous pression”. Un synonyme adapté est **hâtive**, ou la périphrase **poussée par l'urgence** : tous deux conservent l'idée de hâte contrainte. On écarte *empressée*, qui connote le zèle aimable, étranger à la scène. »",
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
                "*Question typique : « Dans la phrase “L'écrivain cherche à <u>attraper le réel</u> avec des mots”, expliquez le sens de l'expression soulignée <u>attraper le réel</u>. »*",
              steps: [
                {
                  number: "1",
                  text: "**Déterminer si le mot est au sens propre ou figuré.**",
                  example: { lines: ["« attraper le réel » → sens figuré (on ne saisit pas le réel avec les mains)"] },
                },
                {
                  number: "2",
                  text: "**Donner le sens propre puis le sens figuré ou contextuel**, en s'appuyant sur le texte.",
                  example: { lines: ["sens propre = saisir physiquement ; sens figuré = parvenir à comprendre et représenter le réel"] },
                },
                {
                  number: "💡",
                  text: "**Préciser les connotations** si elles enrichissent la réponse (positive, négative, ambivalente).",
                  warn: "⚠️ Ne pas se contenter du sens propre quand le mot est employé au figuré.",
                },
                {
                  number: "📌",
                  text: "**Réponse attendue (formulation modèle) :** « Le verbe *attraper* est ici employé au sens figuré. Au sens propre, il signifie “saisir physiquement, avec les mains”. Or on ne saisit pas le réel matériellement : l'expression signifie “parvenir à comprendre et à représenter le réel par l'écriture”. La métaphore de la capture suggère l'effort et la difficulté de cette saisie. »",
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
                "*Question typique : « Dans le passage “La <u>nuit</u> tombait, <u>obscure</u> ; l'<u>ombre</u> envahissait la pièce que la <u>lune</u> éclairait <u>faiblement</u>”, relevez le champ lexical de la nuit et analysez l'effet produit. »*",
              steps: [
                {
                  number: "1",
                  text: "**Relever** tous les mots du texte liés au thème (noms, verbes, adjectifs, adverbes).",
                  example: { lines: ["thème de la nuit : nuit, obscure, ombre, lune, faiblement"] },
                },
                {
                  number: "2",
                  text: "**Nommer le thème** et **analyser l'effet** produit (atmosphère, intention).",
                  example: { lines: ["ce champ crée une atmosphère sombre et inquiétante"] },
                },
                {
                  number: "💡",
                  text: "**Conclure sur la fonction** dans le texte : décrire ne suffit pas.",
                  warn: "⚠️ Un relevé sans analyse de l'effet est insuffisant.",
                },
                {
                  number: "📌",
                  text: "**Réponse attendue (formulation modèle) :** « Le champ lexical de la nuit est constitué par *nuit*, *obscure*, *ombre*, *lune* et l'adverbe *faiblement*. Ces mots de natures variées (noms, adjectif, adverbe) tissent une atmosphère sombre et inquiétante : l'obscurité qui gagne et la lumière défaillante installent une tension, comme si un danger se préparait. Le champ lexical ne décrit pas seulement le décor, il porte une intention dramatique. »",
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
              title: "Les relations sémantiques",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_RELATIONS_SEMANTIQUES,
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
              title: "Les relations sémantiques",
              copies: COPIES_RELATIONS_SEMANTIQUES,
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
                  lines: ["Champ lexical → notion 14", "Formation des mots → notion 17", "Figures et registres → notion 19"],
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
