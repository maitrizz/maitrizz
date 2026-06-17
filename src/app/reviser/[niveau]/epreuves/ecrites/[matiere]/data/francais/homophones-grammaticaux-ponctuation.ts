import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "h1", label: "Je distingue les homophones verbe / mot invariable (a/à, est/et, son/sont, on/ont) en testant la mise à l'imparfait" },
  { id: "h2", label: "Je tranche ou/où et ce/se par un test de remplacement adapté (ou bien, me/te)" },
  { id: "h3", label: "Je distingue le déterminant possessif (ses) du déterminant démonstratif (ces)" },
  { id: "h4", label: "Je sais que le pronom personnel COI « leur » est invariable (test : lui), alors que le déterminant possessif « leur(s) » s'accorde" },
  { id: "h5", label: "Je distingue mais/mes et davantage/d'avantage(s)" },
  { id: "p1", label: "Je sais nommer les emplois de la virgule (détachement, juxtaposition, énumération, ellipse, coordination implicite, subordonnée antéposée)" },
  { id: "p2", label: "Je distingue le point-virgule (relation logique implicite) des deux-points (annonce explicite)" },
  { id: "p3", label: "Je rédige une justification syntaxique précise, au-delà de « la virgule marque une pause »" },
];

export const ficheHomophonesPonctuation: Fiche = {
  slug: "homophones-grammaticaux-ponctuation",
  matiere: "francais",
  numero: 12,
  partie: "Partie 1 : Orthographe grammaticale",
  title: "Les homophones grammaticaux et la ponctuation",
  subtitle:
    "a/à, est/et, son/sont, ses/ces, leur/leurs, ou/où, ce/se… et les emplois de la virgule, du point-virgule et des deux-points",
  badges: [
    { label: "★★★ Très fréquent", variant: "hot" },
    { label: "Cycle 3-4 · BOEN n°1 du 22 janvier 2019", variant: "info" },
  ],
  metaTitle: "Les homophones grammaticaux et la ponctuation (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur les homophones grammaticaux (a/à, est/et, son/sont, on/ont, ou/où, ses/ces, ce/se, leur/leurs, mais/mes, davantage/d'avantage) avec leurs tests de remplacement, et sur la ponctuation (emplois de la virgule, point-virgule, deux-points) avec la justification syntaxique attendue au concours. Méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                "Deux savoir-faire complémentaires : trancher un homophone grâce au bon test, et nommer précisément un emploi de ponctuation.",
              items: [
                {
                  number: "①",
                  title: "Homophones verbe / mot invariable",
                  text: "a/à, est/et, son/sont, on/ont : le test de la mise à l'imparfait permet de repérer la forme verbale.",
                },
                {
                  number: "②",
                  title: "Les autres homophones",
                  text: "ou/où, ce/se, ses/ces, leur/leurs, mais/mes, davantage : chaque paire a son test de remplacement.",
                },
                {
                  number: "③",
                  title: "La virgule",
                  text: "Détachement, juxtaposition, énumération, ellipse, coordination implicite, subordonnée antéposée : nommer l'emploi.",
                },
                {
                  number: "④",
                  title: "Point-virgule et deux-points",
                  text: "Relation logique implicite (point-virgule) ou annonce explicite (deux-points), à justifier en formule précise.",
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
              text: "Les **homophones grammaticaux** sont des mots qui se prononcent de la même façon mais s'écrivent différemment selon leur **nature** : « a » (verbe) ou « à » (préposition). On les tranche en identifiant cette nature, le plus souvent par un **test de remplacement**. La **ponctuation**, elle, fait l'objet d'une question dédiée en Partie 1 (analyse de deux emplois de la virgule) : le jury attend une analyse syntaxique précise, pas « la virgule marque une pause ». Ces deux points sont parmi les erreurs les plus fréquentes au concours, à chaque session.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Homophones verbe / mot invariable : le test de l'imparfait",
              blocks: [
                {
                  type: "paragraph",
                  text: "Pour ces quatre paires, une seule des deux formes est un **verbe**. Un verbe peut se mettre à l'**imparfait** : c'est le test décisif. Si le remplacement par l'imparfait fonctionne, on écrit la forme verbale ; sinon, c'est le mot invariable.",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "a / à",
                      definition: "**a** = verbe avoir (3e personne du singulier) · **à** = préposition.",
                      exemples: [
                        "« Il **a** mangé. » → « Il **avait** mangé » ✓ → verbe",
                        "« Il pense **à** ses vacances. » → l'imparfait est impossible → préposition",
                      ],
                      test: "Remplacer par « avait » : si ça marche, c'est « a » ; sinon, « à ».",
                    },
                    {
                      title: "est / et",
                      definition: "**est** = verbe être (3e personne du singulier) · **et** = conjonction de coordination.",
                      exemples: [
                        "« Elle **est** fatiguée. » → « Elle **était** fatiguée » ✓ → verbe",
                        "« Il mange **et** boit. » → l'imparfait est impossible → conjonction",
                      ],
                      test: "Remplacer par « était » : si ça marche, c'est « est » ; sinon, « et ».",
                    },
                    {
                      title: "son / sont",
                      definition: "**son** = déterminant possessif · **sont** = verbe être (3e personne du pluriel).",
                      exemples: [
                        "« **Son** chien aboie. » → « **Mon** chien aboie » ✓ → déterminant",
                        "« Ils **sont** partis. » → « Ils **étaient** partis » ✓ → verbe",
                      ],
                      test: "Remplacer par « mon » (déterminant) ou par « étaient » (verbe).",
                    },
                    {
                      title: "on / ont",
                      definition: "**on** = pronom personnel indéfini (3e personne du singulier) · **ont** = verbe avoir (3e personne du pluriel).",
                      exemples: [
                        "« **On** mange bien ici. » → « **Il** mange bien ici » ✓ → pronom",
                        "« Ils **ont** réussi. » → « Ils **avaient** réussi » ✓ → verbe",
                      ],
                      test: "Remplacer par « il » (pronom) ou par « avaient » (verbe).",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Les autres homophones : un test par paire",
              blocks: [
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "ou / où",
                      definition: "**ou** = conjonction de coordination (alternative) · **où** = pronom relatif ou adverbe (lieu, temps).",
                      exemples: [
                        "« Tu viens **ou** tu restes ? » → « **ou bien** » ✓ → conjonction",
                        "« La ville **où** il habite. » → « ou bien » impossible → pronom relatif",
                      ],
                      test: "Remplacer par « ou bien » : si ça marche, c'est « ou » (sans accent).",
                    },
                    {
                      title: "ce / se",
                      definition: "**ce** = déterminant ou pronom démonstratif · **se** = pronom personnel réfléchi.",
                      exemples: [
                        "« Il **se** lave. » → « Il **me** lave » (1re personne) ✓ → pronom réfléchi",
                        "« **Ce** livre est beau. » → devant un nom → déterminant démonstratif",
                      ],
                      test: "« se » se remplace par « me » ou « te » ; « ce » non.",
                    },
                    {
                      title: "ses / ces",
                      definition: "**ses** = déterminant possessif (pluriel de son/sa) · **ces** = déterminant démonstratif (pluriel de ce/cette).",
                      exemples: [
                        "« Il range **ses** affaires. » → « **son** affaire » ✓ → possessif",
                        "« **Ces** résultats sont bons. » → « **ce** résultat » ✓ → démonstratif",
                      ],
                      test: "Mettre au singulier : « son/sa » (possessif) ou « ce/cette » (démonstratif).",
                      astuce: "« ses » implique un possesseur identifié ; « ces » désigne des éléments déjà connus du contexte.",
                    },
                    {
                      title: "leur / leurs",
                      definition: "**leur** (pronom personnel COI) = invariable · **leur(s)** (déterminant possessif) = s'accorde avec le nom qui suit.",
                      exemples: [
                        "« Je **leur** parle. » → « Je **lui** parle » ✓ → pronom COI, invariable",
                        "« **Leurs** enfants jouent. » → « lui » impossible → déterminant, accord avec « enfants »",
                      ],
                      test: "Remplacer par « lui » : si ça marche, c'est le pronom « leur » (jamais de -s).",
                    },
                    {
                      title: "mais / mes",
                      definition: "**mais** = conjonction de coordination (opposition) · **mes** = déterminant possessif (1re personne).",
                      exemples: [
                        "« Il travaille **mais** il est fatigué. » → « **cependant** » ✓ → conjonction",
                        "« **Mes** amis arrivent. » → devant un nom → déterminant possessif",
                      ],
                      test: "Remplacer par « cependant / pourtant » : si ça marche, c'est « mais ».",
                    },
                    {
                      title: "davantage / d'avantage(s)",
                      definition: "**davantage** (un mot) = adverbe de quantité · **d'avantage(s)** = préposition « de » + nom « avantage(s) ».",
                      exemples: [
                        "« Il travaille **davantage**. » → « Il travaille **plus** » ✓ → adverbe",
                        "« Il tire **d'avantages** de cette situation. » → « des avantages » ✓ → nom",
                      ],
                      test: "Remplacer par « plus » (adverbe) ou par « un avantage / des avantages » (nom).",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "La virgule : nommer l'emploi",
              blocks: [
                {
                  type: "paragraph",
                  text: "Le jury n'attend pas « la virgule marque une pause », mais le **nom de l'emploi** et sa **justification syntaxique**. Voici les emplois à savoir reconnaître.",
                },
                {
                  type: "table",
                  title: "Les emplois de la virgule",
                  headers: ["Emploi", "Rôle", "Exemple"],
                  rows: [
                    ["Détachement", "Isole un constituant déplacé ou mis en relief (CC, épithète détachée, apposition)", "« Épuisée, elle s'endormit. »"],
                    ["Juxtaposition", "Relie deux propositions sans conjonction", "« Il entre, il s'assoit. »"],
                    ["Énumération", "Sépare les éléments d'une liste (sauf avant « et » final)", "« rouge, bleu, vert et jaune »"],
                    ["Ellipse du verbe", "Marque l'absence d'un verbe répété", "« Paul mange une pomme, Marie une poire. »"],
                    ["Coordination implicite", "Remplace une conjonction effacée (et, mais, or…)", "« Il est courageux, tenace. »"],
                    ["Subordonnée antéposée", "Sépare une subordonnée placée avant la principale", "« Quand il pleut, je reste chez moi. »"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  title: "La formule de justification attendue",
                  text: "« La virgule marque ici un [détachement / une juxtaposition / une ellipse…] : elle [isole l'épithète détachée du sujet / relie deux propositions sans conjonction / efface le verbe répété…], ce qui [produit tel effet]. »",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Point-virgule, deux-points, tiret et parenthèses",
              blocks: [
                {
                  type: "paragraph",
                  text: "Le **point-virgule** sépare deux **propositions indépendantes** dont le sens est lié par une relation logique **implicite** (cause, opposition, conséquence). Il est plus fort que la virgule, plus faible que le point.\n\n« Il travaillait sans relâche ; ses efforts finirent par payer. » : conséquence implicite.",
                },
                {
                  type: "table",
                  title: "Les emplois des deux-points",
                  headers: ["Emploi", "Exemple"],
                  rows: [
                    ["Annonce d'une énumération", "« Il acheta : du pain, du beurre et du lait. »"],
                    ["Annonce d'une explication ou d'une cause", "« Il est absent : il est malade. »"],
                    ["Annonce d'une conséquence", "« Elle s'entraîna des mois : elle gagna le concours. »"],
                    ["Annonce d'une citation ou du discours direct", "« Il dit : “Je reviendrai.” »"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  title: "Tiret et parenthèses",
                  text: "Les **parenthèses** encadrent un élément accessoire que l'on peut supprimer sans changer le sens : « La grammaire de référence (publiée en 2020) sert d'appui. » Le **tiret double** joue un rôle proche, avec une mise en relief plus marquée que la virgule ou les parenthèses.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · a / à dans le développement rédigé",
              badge: "Erreur très fréquente",
              faux: "« Il pense a son travail et a sa famille. »",
              vrai: "« à » est ici la préposition : le test de l'imparfait échoue (« il pense avait son travail » est impossible). On écrit « **à** » dans les deux cas.",
              methode: "Devant tout « a/à », tester « avait » : si l'imparfait passe, c'est le verbe « a » ; sinon, la préposition « à ».",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 · le pronom « leur » invariable",
              badge: "Source d'erreurs",
              faux: "« Je leurs ai dit la vérité. »",
              vrai: "Le pronom personnel COI « leur » (= lui) est **invariable** : « Je **leur** ai dit la vérité. » Le -s est réservé au déterminant possessif (« leurs enfants »).",
              methode: "Remplacer par « lui » : si ça marche, c'est le pronom « leur », jamais de -s.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 · ses / ces",
              badge: "Cas difficile",
              faux: "« Ses résultats montrent que la méthode est efficace. » (alors que les résultats sont déjà évoqués, sans possesseur).",
              vrai: "Sans possesseur identifié, le sens est démonstratif : « **Ces** résultats… » Test : « ce résultat » au singulier.",
              methode: "Se demander s'il y a un possesseur (ses, son/sa) ou si l'on désigne des éléments déjà connus (ces, ce/cette).",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°4 · « la virgule marque une pause »",
              badge: "Réponse refusée",
              faux: "« La virgule marque une pause dans la lecture. »",
              vrai: "Le jury attend le nom de l'emploi et sa justification : « La virgule marque un **détachement** : elle isole l'épithète détachée du sujet. »",
              methode: "Toujours nommer l'emploi syntaxique (détachement, juxtaposition, ellipse…) puis le justifier par la structure de la phrase.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 2 :** premières confusions travaillées (a/à, est/et, son/sont, on/ont) par le raisonnement grammatical, en repérant la nature du mot.\n\n**Cycle 3-4 :** consolidation (ses/ces, leur/leurs) et premiers emplois de la ponctuation. Les élèves apprennent à justifier, pas seulement à choisir.\n\n**Ce que vous devez savoir dire :** « On n'enseigne pas un homophone par cœur, mais par un raisonnement : quelle est la nature du mot ? Le test de remplacement (avait, mon, lui…) rend ce raisonnement automatique. »",
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
              text: "Trancher un homophone par un test de remplacement, et analyser un signe de ponctuation en formule précise. Chacune se termine par un checkpoint.",
            },
            {
              type: "rappelExpress",
              title: "Rappel express : nature et fonction",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "Un homophone se tranche par sa nature : verbe, déterminant, pronom, conjonction, préposition (voir la notion 1).",
                    "Un verbe peut se mettre à l'imparfait ; un mot invariable, non.",
                    "Un signe de ponctuation s'analyse par son emploi syntaxique, pas par « la pause ».",
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ Le pronom COI « leur » est invariable (test : lui) ; seul le déterminant possessif « leur(s) » s'accorde.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Trancher un homophone grammatical",
              intro:
                "**Question typique :** « Justifiez l'orthographe du mot souligné. »\nOn identifie la nature par un test.",
              steps: [
                {
                  number: "1",
                  text: "**Repérer la paire** concernée (a/à, est/et, ses/ces, leur/leurs…).",
                  example: { lines: ["« Il range ___ affaires. » → paire ses/ces"] },
                },
                {
                  number: "2",
                  text: "**Appliquer le test de remplacement** propre à la paire (avait, était, mon, lui, ou bien, ce/cette…).",
                  example: { lines: ["« son affaire » au singulier ✓ → possessif « ses »"] },
                },
                {
                  number: "💡",
                  text: "**Nommer la nature** dans la justification : déterminant possessif, pronom COI, conjonction de coordination…",
                  warn: "⚠️ « leur » pronom est invariable ; ne jamais lui ajouter de -s.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Justifiez l'orthographe : « Je ___ ai rendu ___ livres. » (leur/leurs, deux fois)",
              correction: [
                { type: "line", text: "« Je **leur** ai rendu » : test « lui » ✓ → pronom personnel COI, invariable. « ___ livres » : « lui » impossible → déterminant possessif, accord avec « livres » (pluriel) → « **leurs** livres »." },
                { type: "note", text: "Trouvé du premier coup ? Le test « lui » est la clé. Sinon, revoyez la paire leur/leurs." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Analyser un signe de ponctuation",
              intro:
                "**Question typique :** « Analysez deux emplois de la virgule dans ce passage. »\nOn nomme, puis on justifie.",
              steps: [
                {
                  number: "1",
                  text: "**Nommer l'emploi** : détachement, juxtaposition, énumération, ellipse, coordination implicite, subordonnée antéposée (virgule) ; relation implicite (point-virgule) ; annonce (deux-points).",
                  example: { lines: ["« Épuisée, elle s'endormit. » → détachement"] },
                },
                {
                  number: "2",
                  text: "**Justifier par la structure** : quel constituant est isolé, relié, annoncé ? Avec quel effet ?",
                  example: { lines: ["La virgule isole l'épithète détachée « Épuisée » du sujet « elle », avec un effet d'emphase."] },
                },
                {
                  number: "💡",
                  text: "**Rédiger en formule** : « [signe] marque ici [emploi] : il/elle [action syntaxique], ce qui [effet]. »",
                  warn: "⚠️ « marque une pause » est refusé : il faut nommer l'emploi syntaxique.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Analysez le point-virgule : « Les uns criaient ; les autres se taisaient. »",
              correction: [
                { type: "line", text: "Le point-virgule sépare deux propositions indépendantes liées par une relation d'**opposition** implicite. Plus fort que la virgule, il maintient les deux propositions dans le même mouvement descriptif." },
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
              text: "9 questions rapides pour vérifier que le Cours et la Méthode sont bien ancrés. Le détail objectif par objectif est dans l'onglet Auto-évaluation.",
            },
            {
              type: "quizBlock",
              questions: [
                {
                  objectifId: "h1",
                  question: "« Ils ___ travaillé toute la nuit. » Quelle forme ?",
                  options: ["on", "ont", "ons", "honts"],
                  correctIndex: 1,
                  explanation:
                    "Test : « Ils avaient travaillé » ✓ → verbe avoir à la 3e personne du pluriel : ont.",
                },
                {
                  objectifId: "h1",
                  question: "« Il pense ___ son avenir. » Quelle forme ?",
                  options: ["a", "à", "as", "at"],
                  correctIndex: 1,
                  explanation:
                    "Test : « il pense avait son avenir » est impossible → ce n'est pas le verbe, mais la préposition « à ».",
                },
                {
                  objectifId: "h5",
                  question: "« Il travaille ___ il est fatigué. » Quelle forme ?",
                  options: ["mes", "mais", "m'est", "maie"],
                  correctIndex: 1,
                  explanation:
                    "Test : « cependant » fonctionne → conjonction de coordination « mais ». « mes » serait un déterminant possessif, devant un nom.",
                },
                {
                  objectifId: "h2",
                  question: "« La ville ___ il est né est loin. » Quelle forme ?",
                  options: ["ou", "où", "oû", "houx"],
                  correctIndex: 1,
                  explanation:
                    "Test : « ou bien il est né » est impossible → ce n'est pas la conjonction, mais le pronom relatif de lieu « où ».",
                },
                {
                  objectifId: "h3",
                  question: "« ___ résultats sont encourageants. » (résultats déjà évoqués) Quelle forme ?",
                  options: ["Ses", "Ces", "C'est", "Sais"],
                  correctIndex: 1,
                  explanation:
                    "Sens démonstratif (résultats déjà connus, sans possesseur) : test « ce résultat » au singulier → déterminant démonstratif « ces ».",
                },
                {
                  objectifId: "h4",
                  question: "« Je ___ ai parlé hier. » Quelle forme ?",
                  options: ["leur", "leurs", "leur(s)", "l'heure"],
                  correctIndex: 0,
                  explanation:
                    "Test : « Je lui ai parlé » ✓ → pronom personnel COI « leur », toujours invariable.",
                },
                {
                  objectifId: "p1",
                  question: "Dans « Quand il pleut, je reste chez moi », la virgule marque :",
                  options: ["une énumération", "une subordonnée antéposée", "une ellipse du verbe", "une simple pause"],
                  correctIndex: 1,
                  explanation:
                    "La virgule sépare la subordonnée circonstancielle de temps, placée avant la principale.",
                },
                {
                  objectifId: "p2",
                  question: "« Il est absent : il est malade. » Les deux-points marquent :",
                  options: ["une énumération", "une citation", "une explication / cause", "une opposition"],
                  correctIndex: 2,
                  explanation:
                    "Les deux-points annoncent une explication : le second segment donne la cause de l'absence.",
                },
                {
                  objectifId: "p3",
                  question: "Quelle justification le jury accepte pour la virgule de « Épuisée, elle s'endormit » ?",
                  options: [
                    "« Elle marque une pause dans la lecture. »",
                    "« Elle sépare deux mots. »",
                    "« Elle marque un détachement : elle isole l'épithète détachée du sujet. »",
                    "« Elle est obligatoire ici. »",
                  ],
                  correctIndex: 2,
                  explanation:
                    "Il faut nommer l'emploi (détachement) et le justifier par la structure (épithète détachée isolée du sujet).",
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
              sub: "Choisir la bonne forme, nommer l'emploi",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 1 : Homophones verbe / mot invariable",
              objectifTag: "Test de l'imparfait",
              question:
                "Choisissez et justifiez :\na) « Il ___ terminé son travail. » (a/à)   b) « Elle pense ___ son avenir. » (a/à)   c) « Ils ___ arrivés en retard. » (son/sont)   d) « ___ mange bien dans ce restaurant. » (On/Ont)   e) « Tu viens ___ tu restes ? » (ou/où)",
              correction: [
                { type: "line", label: "a)", text: "**a** : « il avait terminé » ✓ → verbe avoir." },
                { type: "line", label: "b)", text: "**à** : « elle pense avait » impossible → préposition." },
                { type: "line", label: "c)", text: "**sont** : « ils étaient arrivés » ✓ → verbe être (3e pluriel)." },
                { type: "line", label: "d)", text: "**On** : « Il mange » ✓ → pronom personnel indéfini." },
                { type: "line", label: "e)", text: "**ou** : « ou bien tu restes » ✓ → conjonction de coordination." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 2 : ses/ces, leur/leurs, ce/se, mais/mes",
              objectifTag: "Test par paire",
              question:
                "Choisissez et justifiez :\na) « Il range ___ affaires. » (ses/ces)   b) « Je ___ ai parlé. » (leur/leurs)   c) « ___ maison est grande. » (Leur/Leurs)   d) « Il ___ lève tôt. » (se/ce)   e) « Il travaille ___ il est épuisé. » (mais/mes)",
              correction: [
                { type: "line", label: "a)", text: "**ses** : « son affaire » au singulier ✓ → déterminant possessif." },
                { type: "line", label: "b)", text: "**leur** : « Je lui ai parlé » ✓ → pronom personnel COI, invariable." },
                { type: "line", label: "c)", text: "**Leur** : « lui » impossible → déterminant possessif ; un seul nom → singulier." },
                { type: "line", label: "d)", text: "**se** : « Il me lève » → pronom réfléchi (se lever)." },
                { type: "line", label: "e)", text: "**mais** : « cependant » ✓ → conjonction de coordination (opposition)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 3 : Nommer l'emploi de la virgule",
              question:
                "Identifiez et nommez l'emploi de la virgule :\na) « Épuisée, elle s'endormit. »   b) « Il prit son manteau, son chapeau et son sac. »   c) « Il entra, regarda autour de lui, puis s'assit. »   d) « Quand le soleil se lève, les oiseaux chantent. »",
              correction: [
                { type: "line", label: "a)", text: "**Détachement** : la virgule isole l'épithète détachée « Épuisée » du sujet « elle »." },
                { type: "line", label: "b)", text: "**Énumération** : elle sépare les éléments d'une liste (pas de virgule avant le « et » final)." },
                { type: "line", label: "c)", text: "**Juxtaposition** : elle relie des propositions sans conjonction explicite." },
                { type: "line", label: "d)", text: "**Subordonnée antéposée** : elle sépare la circonstancielle de temps placée avant la principale." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : Analyser",
              sub: "Justification syntaxique, texte à compléter, transformation",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 4 : Virgule et point-virgule dans un extrait",
              enonce: "« Ses mains tremblaient ; ses yeux, rouges et gonflés, cherchaient un regard ami. »",
              question: "a) Justifiez l'emploi du point-virgule. b) Nommez l'emploi des deux virgules.",
              correction: [
                { type: "line", label: "a)", text: "Le point-virgule sépare deux propositions indépendantes liées par un **parallélisme descriptif** : elles dépeignent le même personnage au même instant, sans rupture aussi forte qu'un point." },
                { type: "line", label: "b)", text: "Les deux virgules encadrent l'**épithète détachée** « rouges et gonflés » du nom « yeux » (double virgule de détachement)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 5 : Texte à compléter",
              question:
                "Complétez et justifiez chaque choix :\n« ___ (Ce/Se) matin-là, il ___ (se/ce) leva plus tôt que d'habitude. ___ (Son/Sont) frère ___ (est/et) sa sœur dormaient encore. Il prit ___ (ses/ces) affaires en silence : ___ (ou/où) irait-il ? »",
              correction: [
                { type: "line", text: "**Ce** matin-là : déterminant démonstratif (devant un nom)." },
                { type: "line", text: "il **se** leva : pronom réfléchi (« il me leva » → se lever)." },
                { type: "line", text: "**Son** frère : déterminant possessif (« mon frère » ✓)." },
                { type: "line", text: "**et** sa sœur : conjonction de coordination (« était sa sœur » impossible)." },
                { type: "line", text: "**ses** affaires : déterminant possessif (« son affaire » au singulier ✓)." },
                { type: "line", text: "**où** irait-il : adverbe interrogatif (« ou bien irait-il » impossible)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 6 : Transformer pour analyser",
              enonce: "« Mes romans me baladent et ils me mènent en bateau. »",
              question: "a) Remplacez « et » par une virgule seule : quel effet syntaxique ? b) Remplacez « et » par « car » : quel changement de sens ?",
              correction: [
                { type: "line", label: "a)", text: "« Mes romans me baladent, ils me mènent en bateau. » : la virgule crée une **juxtaposition** (coordination implicite). L'effet est une succession plus rapide, une addition neutre." },
                { type: "line", label: "b)", text: "« Mes romans me baladent car ils me mènent en bateau. » : « car » introduit une **cause explicite** ; le second segment justifie le premier. La causalité remplace la simple addition." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : Maîtriser",
              sub: "Analyse complète, formule jury rédigée",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 7 : Analyse complète",
              enonce: "« Écrire est un engagement à ferrailler. On s'engage dans l'écriture comme dans une armée imaginaire, où l'on serait à la fois général et aspirant soldat. »",
              question: "a) Justifiez la virgule après « imaginaire ». b) Analysez la nature et la fonction de « où ». c) Que marque « et » dans « général et aspirant soldat » ?",
              correction: [
                { type: "line", label: "a)", text: "La virgule marque un **détachement** : elle isole la subordonnée relative explicative « où l'on serait… », qui apporte une précision non indispensable sur « armée imaginaire ». Effet : un ralentissement du rythme." },
                { type: "line", label: "b)", text: "« où » est un **pronom relatif** de lieu (antécédent « armée imaginaire ») ; il introduit la subordonnée relative et y occupe la fonction de **complément circonstanciel de lieu**." },
                { type: "line", label: "c)", text: "« et » est une **conjonction de coordination** qui unit les deux attributs « général » et « aspirant soldat » par une relation d'**addition** : le sujet occuperait les deux rôles à la fois." },
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
              text: "Ces exercices reproduisent le format de la Partie 1 : justification d'homophones et analyse de la ponctuation en formule rédigée. Les exercices calqués sur des sujets récents portent le badge ✦.",
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format identique au concours",
              title: "Exercice 1 : homophones et analyse de la ponctuation",
              enonce:
                "« Ce soir-là, ses doigts, gourds et maladroits, cherchaient en vain les touches du piano. Elle avait beau se dire que tout irait mieux demain ; son cœur, lui, n'y croyait plus. On l'entendait soupirer : la musique lui manquait. »",
              question: "1) Justifiez « ses » (l. 1) et « se » (l. 2). 2) Analysez deux emplois différents de la virgule. 3) Justifiez le point-virgule après « demain ». 4) Analysez les deux-points après « soupirer ».",
              correction: [
                { type: "line", text: "**1) ses** : déterminant possessif (« son doigt » au singulier ✓). **se** : pronom réfléchi de « se dire » (« elle me dit » ✓)." },
                { type: "line", text: "**2)** « ses doigts, gourds et maladroits, » : double virgule de **détachement** encadrant l'épithète détachée « gourds et maladroits » du nom « doigts ». « son cœur, lui, » : double virgule encadrant le **pronom de reprise** « lui », mis en relief (apposition emphatique au sujet « son cœur »)." },
                { type: "line", text: "**3)** Le point-virgule sépare deux propositions indépendantes liées par une relation d'**opposition** implicite (elle se rassure / son cœur résiste)." },
                { type: "line", text: "**4)** Les deux-points annoncent une **explication** : le segment qui suit explicite ce que révèle le soupir." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 2 : corriger des homophones",
              enonce:
                "« ___ (Ses/Ces) enfants jouent dans la cour : ___ (leur/leurs) rires sont contagieux. ___ (On/Ont) voit qu'ils ___ (a/ont) besoin de ___ (ses/ces) moments de liberté. »",
              question: "Choisissez la forme correcte et justifiez chaque choix en une phrase.",
              correction: [
                { type: "line", text: "**Ces** enfants : démonstratif (« ce enfant » au singulier, enfants désignés)." },
                { type: "line", text: "**leurs** rires : déterminant possessif, accord avec « rires » (« lui » impossible)." },
                { type: "line", text: "**On** voit : pronom personnel indéfini (« il voit » ✓)." },
                { type: "line", text: "ils **ont** besoin : verbe avoir 3e pluriel (« ils avaient besoin » ✓ ; « a » serait incompatible avec « ils »)." },
                { type: "line", text: "**ces** moments : déterminant démonstratif (« ce moment » au singulier ; « se » impossible devant un nom)." },
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
              text: "Ces exercices reproduisent des **erreurs fréquentes** observées dans les copies, y compris à la Partie 3. Repérer ce qui cloche et corriger rigoureusement est une compétence directement valorisée au concours.",
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 1 · Réponse à corriger : « pense a »",
              enonce: "Copie d'un candidat (Partie 3) : « Il pense *a son travail et *a sa famille. »",
              question: "Identifiez les deux erreurs et corrigez avec le test de remplacement.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Deux prépositions « à » écrites sans accent", bad: true },
                    { text: "Test : « il pense avait son travail » est impossible → ce n'est pas le verbe « a »" },
                    { text: "Réponse attendue : « Il pense **à** son travail et **à** sa famille. »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 2 · Réponse à corriger : « je leurs ai dit »",
              enonce: "Copie d'un candidat : « Je *leurs ai dit la vérité. »",
              question: "Identifiez l'erreur, nommez la nature de « leur » ici, et corrigez.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Ajout d'un -s erroné sur le pronom personnel COI", bad: true },
                    { text: "Le pronom « leur » (= lui) est invariable ; le -s est réservé au déterminant possessif" },
                    { text: "Réponse attendue : « Je **leur** ai dit la vérité. » (test : « je lui ai dit » ✓)" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 3 · Réponse à corriger : « ses résultats »",
              enonce: "Copie d'un candidat (Partie 3) : « *Ses résultats montrent que la méthode est efficace. » (le texte parle de résultats déjà évoqués, sans possesseur).",
              question: "Identifiez l'erreur et distinguez « ses » et « ces ».",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "« ses » implique un possesseur, absent du contexte", bad: true },
                    { text: "Le sens est démonstratif : il s'agit des résultats déjà évoqués" },
                    { text: "Réponse attendue : « **Ces** résultats montrent… » (test : « ce résultat » ✓)" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 4 · Réponse à corriger : « marque une pause »",
              enonce: "Réponse d'un candidat (analyse de la virgule) : « La virgule dans “Épuisée, elle s'endormit” marque une *pause dans la lecture. »",
              question: "Reformulez en réponse syntaxique précise (cette formulation est refusée par le jury).",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Réponse trop générale, refusée : elle ne nomme aucun emploi syntaxique", bad: true },
                    { text: "Il faut nommer l'emploi (détachement) et le justifier" },
                    { text: "Réponse attendue : « La virgule marque un **détachement** : elle isole l'épithète détachée “Épuisée” du sujet “elle”, avec un effet d'emphase sur l'état du personnage. »" },
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
                  question: "Les 5 tests de remplacement essentiels ?",
                  answer:
                    "**a / à** : « avait » → a (verbe).\n**est / et** : « était » → est (verbe).\n**son / sont** : « mon » → son (déterminant).\n**ou / où** : « ou bien » → ou (conjonction).\n**leur / leurs** : « lui » → leur (pronom COI, invariable).",
                  astuce: "💡 Si le mot peut passer à l'imparfait, c'est un verbe.",
                },
                {
                  question: "ses / ces : comment trancher ?",
                  answer:
                    "**ses** (possessif) : pluriel de son/sa → test « son/sa » au singulier. « ses livres » → « son livre » ✓.\n**ces** (démonstratif) : pluriel de ce/cette → test « ce/cette » au singulier. « ces livres » → « ce livre » ✓.",
                  astuce: "« ses » implique un possesseur ; « ces » désigne des éléments déjà connus.",
                },
                {
                  question: "leur pronom COI ou leurs déterminant ?",
                  answer:
                    "**leur** pronom COI : invariable, remplaçable par « lui ». « Je leur parle » = « Je lui parle » ✓ → jamais de -s.\n**leur(s)** déterminant : s'accorde avec le nom. « leurs livres » (pluriel), « leur livre » (singulier).",
                  astuce: "⚠️ Erreur fréquente : « leurs » avec -s sur le pronom.",
                },
                {
                  question: "La virgule : 4 emplois clés à nommer ?",
                  answer:
                    "**Détachement** : isole un constituant déplacé. « Épuisée, elle s'endormit. »\n**Juxtaposition** : relie sans conjonction. « Il entre, il s'assoit. »\n**Énumération** : sépare une liste. « rouge, bleu et vert ».\n**Subordonnée antéposée** : « Quand il pleut, je reste. »",
                  astuce: "💡 « La virgule marque une pause » est refusé : nommer l'emploi syntaxique.",
                },
                {
                  question: "Point-virgule ou deux-points ?",
                  answer:
                    "**Point-virgule ( ; )** : entre deux propositions indépendantes liées par une relation logique **implicite** (cause, opposition, conséquence). « Il travaille ; ses efforts paient. »\n**Deux-points ( : )** : annoncent ce qui suit, relation **explicite** : explication, conséquence, énumération, citation. « Il est absent : il est malade. »",
                },
                {
                  question: "on / ont et est / et : la confusion de verbes ?",
                  answer:
                    "**on** = pronom personnel indéfini → test « il ».\n**ont** = verbe avoir 3e pluriel → test « avaient ».\n**est** = verbe être 3e singulier → test « était ».\n**et** = conjonction de coordination → l'imparfait est impossible.",
                  astuce: "Une forme verbale passe toujours à l'imparfait ; un mot invariable, non.",
                },
                {
                  question: "ce / se : démonstratif ou réfléchi ?",
                  answer:
                    "**se** = pronom personnel réfléchi → remplaçable par « me / te ». « Il se lave » → « Il me lave » ✓.\n**ce** = déterminant démonstratif (devant un nom) ou pronom démonstratif (neutre, devant un verbe ou « que »). « Ce livre. » · « Ce que je veux. »",
                },
                {
                  question: "La formule de justification de la ponctuation ?",
                  answer:
                    "« [Signe] marque ici [emploi : détachement / juxtaposition / annonce…] : il/elle [action syntaxique : isole / relie / annonce…] [l'élément], ce qui [effet]. »\nExemple : « La virgule marque un détachement : elle isole l'épithète détachée “épuisée” du sujet “elle”. »",
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
              center: { title: "Homophones", subtitle: "et ponctuation" },
              branches: [
                {
                  title: "Test de l'imparfait",
                  lines: ["a/à : avait", "est/et : était", "son/sont : étaient", "on/ont : il / avaient"],
                  variant: "blue",
                },
                {
                  title: "Un test par paire",
                  lines: ["ou/où : ou bien", "ce/se : me/te", "ses/ces : son/sa ou ce/cette"],
                  variant: "blue",
                },
                {
                  title: "leur / leurs",
                  lines: ["Pronom COI : lui → invariable", "Déterminant : accord avec le nom"],
                  variant: "green",
                },
                {
                  title: "La virgule",
                  lines: ["Détachement, juxtaposition", "Énumération, ellipse", "Subordonnée antéposée"],
                  variant: "green",
                },
                {
                  title: "Pièges classiques",
                  lines: ["a/à dans la rédaction", "leur invariable (jamais -s)", "« marque une pause » refusé"],
                  variant: "yellow",
                },
                {
                  title: "Renvois",
                  lines: ["Classes de mots → notion 1", "Fonctions (COI) → notion 2", "Cohérence textuelle → notion 13"],
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
