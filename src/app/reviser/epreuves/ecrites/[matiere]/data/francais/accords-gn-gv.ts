import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "ac1", label: "Je sais que, dans le GN, le nom noyau est le donneur d'accord : le déterminant et les adjectifs s'accordent avec lui en genre et en nombre" },
  { id: "ac2", label: "Je distingue l'adjectif épithète (accord avec le nom) de l'adjectif attribut du sujet (accord avec le groupe sujet via un verbe d'état)" },
  { id: "ac3", label: "Je connais l'accord avec plusieurs noms coordonnés : le masculin l'emporte, le féminin pluriel si tous les noms sont féminins" },
  { id: "ac4", label: "Je connais les cas difficiles du GN : adjectifs de couleur (simple, composée, nom employé comme couleur) et mi-, demi-, nu-, grand-" },
  { id: "ac5", label: "Je sais identifier le groupe sujet par le test « c'est… qui » et accorder le verbe en personne et en nombre, même avec un sujet inversé ou éloigné" },
  { id: "ac6", label: "Je connais les accords des sujets collectifs (la plupart, beaucoup de, un grand nombre de…) et coordonnés (et, ou, ni)" },
  { id: "ac7", label: "Je sais déjouer l'attraction (le verbe accordé avec le nom le plus proche au lieu du vrai sujet)" },
];

export const ficheAccordsGnGv: Fiche = {
  slug: "accords-gn-gv",
  matiere: "francais",
  numero: 10,
  partie: "Partie 1 : Orthographe grammaticale",
  title: "Les accords dans le GN et le GV",
  subtitle:
    "Accord du nom et de l'adjectif, accord sujet-verbe, chaîne d'accord et cas difficiles",
  badges: [
    { label: "★★★ Très fréquent", variant: "hot" },
    { label: "Cycle 3-4 · BOEN n°1 du 22 janvier 2019", variant: "info" },
  ],
  metaTitle: "Les accords dans le GN et le GV (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur les accords : le nom noyau donneur d'accord, l'adjectif épithète et attribut, l'accord avec plusieurs noms, les adjectifs de couleur, l'accord sujet-verbe (test « c'est… qui »), les sujets collectifs et coordonnés, l'attraction. Chaîne d'accord, méthode de relecture, exercices corrigés, flashcards et auto-évaluation.",
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
                  title: "L'accord dans le GN",
                  text: "Le nom noyau est le donneur d'accord : déterminant et adjectifs (épithètes et attributs) s'accordent avec lui.",
                },
                {
                  number: "②",
                  title: "Les cas difficiles du GN",
                  text: "Plusieurs noms coordonnés, adjectifs de couleur, mi-, demi-, nu-, grand-.",
                },
                {
                  number: "③",
                  title: "L'accord sujet-verbe",
                  text: "Identifier le groupe sujet par le test « c'est… qui », même inversé ou éloigné ; sujets collectifs et coordonnés.",
                },
                {
                  number: "④",
                  title: "La chaîne d'accord",
                  text: "Un schéma de relecture en 3 étapes pour vérifier tous les accords d'une phrase.",
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
              text: "L'accord est un mécanisme par lequel un mot (le **receveur**) reçoit le genre et le nombre d'un autre (le **donneur**). Dans le GN, le donneur est le nom noyau ; dans le GV, c'est le groupe sujet. Ces accords sont une source d'erreurs très fréquente dans les copies, y compris à la Partie 3. L'accord du participe passé (avec être, avec avoir, pronominaux) fait l'objet d'une notion à part : la notion 11.",
            },
            {
              type: "subsection",
              number: "①",
              title: "L'accord dans le GN : le nom noyau, donneur d'accord",
              blocks: [
                {
                  type: "paragraph",
                  text: "Dans un groupe nominal, le **nom noyau** donne son genre et son nombre à tous les éléments qui s'y rapportent : déterminant, adjectifs épithètes et attributs.\n\n« de petites fleurs sauvages » → noyau « fleurs » (féminin pluriel) → « petites » et « sauvages » au féminin pluriel.",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Adjectif épithète",
                      definition: "Liée (accolée au nom) ou détachée (séparée par une virgule). Elle s'accorde avec son nom noyau.",
                      exemples: [
                        "« une longue rue **étroite** » : « étroite » au féminin singulier (accord avec « rue »)",
                        "« **Épuisée**, elle s'endormit » : « Épuisée » au féminin singulier (accord avec « elle »)",
                      ],
                      test: "L'adjectif fait partie du GN (ou se rapporte au nom détaché), sans verbe d'état.",
                    },
                    {
                      title: "Adjectif attribut du sujet",
                      definition: "Relié au sujet par un verbe d'état (être, paraître, sembler, devenir, rester…). Il s'accorde avec le groupe sujet.",
                      exemples: [
                        "« Les enfants semblaient **fatigués** » : « fatigués » au masculin pluriel (accord avec « enfants »)",
                      ],
                      test: "Un verbe d'état relie le sujet et l'adjectif (voir la notion 4 pour les verbes attributifs).",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "« avoir l'air »",
                  text: "« Elle a l'air **heureuse** » : « avoir l'air » fonctionne comme « sembler » (attribut, accord avec le sujet). « Elle a l'air **fâché** » est aussi possible si l'on accorde avec « air » (épithète de « air », masculin singulier). Les deux analyses circulent ; l'accord avec le sujet est le plus courant.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Les cas difficiles du GN",
              blocks: [
                {
                  type: "paragraph",
                  text: "Trois familles de cas méritent une vigilance particulière : les noms coordonnés, les adjectifs de couleur, et quelques préfixes invariables.",
                },
                {
                  type: "table",
                  title: "Accord avec plusieurs noms coordonnés",
                  headers: ["Situation", "Règle", "Exemple"],
                  rows: [
                    ["Noms masculin + féminin", "Masculin pluriel (le masculin l'emporte)", "« un livre et une revue illustrés »"],
                    ["Noms tous masculins", "Masculin pluriel", "« un stylo et un crayon noirs »"],
                    ["Noms tous féminins", "Féminin pluriel", "« une robe et une veste rouges »"],
                    ["Dernier nom seul qualifié", "Accord avec le dernier nom", "« avec soin et minutie particulière »"],
                  ],
                },
                {
                  type: "table",
                  title: "Adjectifs de couleur et préfixes",
                  headers: ["Cas", "Règle", "Exemples"],
                  rows: [
                    ["Couleur simple", "S'accorde", "« des robes rouges », « des yeux bleus »"],
                    ["Couleur composée", "Invariable", "« des yeux bleu-vert », « des robes bleu marine »"],
                    ["Nom employé comme couleur", "Invariable", "« des pulls marron », « des chaussures crème », « des vestes kaki »"],
                    ["mi-, demi-, semi- (devant le nom)", "Invariables", "« une demi-heure », « à mi-chemin »"],
                    ["nu-, grand- (avant le nom)", "Invariables", "« nu-pieds », « grand-mère » (mais « les grands-parents »)"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  text: "Exception pour les couleurs : rose, mauve, écarlate, pourpre, fauve sont devenus de vrais adjectifs et s'accordent (« des robes roses »).",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "L'accord sujet-verbe",
              blocks: [
                {
                  type: "paragraph",
                  text: "Le verbe conjugué reçoit la **personne** et le **nombre** du **groupe sujet**. L'outil de vérification est le test d'encadrement **« c'est… qui »** : le groupe encadré est le sujet.\n\n« Les enfants jouent » → « C'est les enfants qui jouent » → groupe sujet « les enfants » (3e personne du pluriel) → « jouent ».",
                },
                {
                  type: "table",
                  title: "Sujets coordonnés et collectifs",
                  headers: ["Sujet", "Accord", "Exemple"],
                  rows: [
                    ["Noms unis par « et »", "Pluriel", "« Le chien et le chat dorment. »"],
                    ["Noms unis par « ou » / « ni »", "Pluriel le plus souvent (singulier si exclusion totale)", "« Ni lui ni elle ne sont venus. »"],
                    ["La plupart (de + nom pluriel)", "Toujours pluriel", "« La plupart des élèves ont réussi. »"],
                    ["Beaucoup de, peu de, trop de + nom", "Accord avec le nom complément", "« Beaucoup d'enfants jouent. »"],
                    ["Un grand nombre de", "Pluriel (idée de pluralité)", "« Un grand nombre de candidats ont échoué. »"],
                    ["Le nombre de", "Singulier (une quantité)", "« Le nombre de candidats a augmenté. »"],
                    ["Un des… qui", "Pluriel (le relatif reprend le pluriel)", "« C'est un des livres qui m'ont marqué. »"],
                  ],
                },
                {
                  type: "table",
                  title: "Sujets particuliers",
                  headers: ["Sujet", "Accord", "Exemple"],
                  rows: [
                    ["On", "3e personne du singulier", "« On travaille. » (l'attribut peut se mettre au pluriel : « On est fatigués. »)"],
                    ["Qui (pronom relatif)", "Avec l'antécédent", "« C'est moi qui suis venu. » ; « C'est toi qui es venu. »"],
                    ["Ce qui / Tout ce qui", "3e personne du singulier", "« Tout ce qui brille n'est pas or. »"],
                    ["Titre d'œuvre", "Singulier (l'œuvre)", "« Les Misérables est un roman de Victor Hugo. »"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Le sujet éloigné ou intercalé",
                  text: "Quand un complément s'intercale entre le sujet et le verbe, l'accord se fait avec le **vrai sujet**, pas avec le nom le plus proche : « La liste des candidats **est** longue » (sujet « liste », singulier, pas « candidats »). C'est l'erreur d'**attraction** : voir le piège n°1.",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "La chaîne d'accord : schéma de relecture",
              blocks: [
                {
                  type: "paragraph",
                  text: "Pour relire efficacement, on identifie d'abord les **donneurs** (nom noyau du GN, groupe sujet du GV), puis on vérifie que chaque **receveur** (déterminant, adjectif, verbe) porte les bonnes marques.",
                },
                {
                  type: "formulaBlock",
                  title: "Relecture en 3 étapes",
                  lines: [
                    "① Repérer chaque GN → trouver le nom noyau → vérifier genre et nombre de chaque déterminant et adjectif.",
                    "② Repérer chaque GV → isoler le groupe sujet (test « c'est… qui ») → vérifier personne et nombre du verbe.",
                    "③ Traiter les cas particuliers : sujets collectifs, coordonnés, inversés ; adjectifs de couleur.",
                  ],
                  note: "Compter 3 à 5 minutes de relecture ciblée sur les accords en fin d'épreuve.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · L'attraction (accord par proximité)",
              badge: "Très fréquent",
              faux: "« La liste des candidats montrent sa rigueur. »",
              vrai: "Le verbe est accordé avec le nom le plus proche (« candidats ») au lieu du vrai sujet (« liste », singulier) : « La liste des candidats **montre** ».",
              methode: "Toujours isoler le groupe sujet par le test « c'est… qui » avant d'accorder le verbe : « C'est la liste qui montre ».",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 · Accord avec plusieurs noms coordonnés",
              badge: "Source d'erreurs",
              faux: "« un livre et une revue illustrée » (accord avec le seul dernier nom).",
              vrai: "Deux noms coordonnés par « et » → pluriel ; masculin + féminin → masculin pluriel : « un livre et une revue **illustrés** ».",
              methode: "Repérer tous les noms coordonnés que l'adjectif qualifie, puis accorder au pluriel (masculin si genres mêlés).",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 · Adjectifs de couleur",
              badge: "Cas difficile",
              faux: "« des pulls marrons », « des chaussures crèmes ».",
              vrai: "Les **noms employés comme couleurs** (marron, crème, kaki, saumon…) et les **couleurs composées** (bleu marine) sont **invariables** : « des pulls **marron** ».",
              methode: "Se demander si le mot est un vrai adjectif (rouge, bleu : accord) ou un nom employé comme couleur (marron, crème : invariable).",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°4 · « la plupart » et « on »",
              badge: "À mémoriser",
              faux: "« La plupart des élèves a réussi. » ; « On sont fatigués. »",
              vrai: "« La plupart » + nom pluriel → **pluriel** (« ont réussi »). « On » commande toujours un verbe à la **3e personne du singulier** (« On travaille »).",
              methode: "« la plupart des + pluriel » → verbe pluriel. « On » → verbe singulier (mais l'attribut peut se mettre au pluriel : « on est fatigués »).",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 2 (CP-CE2) :** premiers accords dans le GN (déterminant, nom, adjectif) et accord sujet-verbe au présent, travaillés par manipulation et par la couleur des marques.\n\n**Cycle 3 :** consolidation de la chaîne d'accord, repérage du groupe sujet (même éloigné), premiers cas difficiles. Les élèves apprennent à se relire en cherchant le donneur d'accord.\n\n**Ce que vous devez savoir dire :** « On enseigne l'accord comme une relation entre un donneur (nom noyau, sujet) et des receveurs. La relecture ciblée (souligner le noyau, encadrer le sujet) est un geste à automatiser dès le cycle 3. »",
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
              text: "Vérifier l'accord dans le GN, puis l'accord sujet-verbe. Chacune s'appuie sur le repérage du donneur d'accord et se termine par un checkpoint.",
            },
            {
              type: "rappelExpress",
              title: "Rappel express : donneur et receveur",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "GN : donneur = nom noyau · receveurs = déterminant, adjectifs (épithète, attribut)",
                    "GV : donneur = groupe sujet · receveur = verbe conjugué",
                    "Test du groupe sujet : « c'est… qui » (le groupe encadré est le sujet)",
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ Toujours identifier le vrai donneur avant d'accorder : un complément intercalé n'est jamais le sujet (attraction).",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Vérifier l'accord dans le GN",
              intro:
                "**Question typique :** « Justifiez l'accord de l'adjectif souligné. »\nOn part du nom noyau.",
              steps: [
                {
                  number: "1",
                  text: "**Repérer le nom noyau** du GN et relever son genre et son nombre.",
                  example: { lines: ["« de longues heures silencieuses » → noyau « heures » (féminin pluriel)"] },
                },
                {
                  number: "2",
                  text: "**Vérifier chaque receveur** (déterminant, adjectifs) : porte-t-il les mêmes marques que le noyau ?",
                  example: { lines: ["« longues » et « silencieuses » : féminin pluriel, accord correct"] },
                },
                {
                  number: "💡",
                  text: "**Traiter les cas particuliers** : couleur (nom employé comme couleur = invariable), plusieurs noms coordonnés (masculin l'emporte), attribut (accord avec le sujet via un verbe d'état).",
                  warn: "⚠️ Un adjectif placé après un complément du nom s'accorde avec le noyau, pas avec le complément.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Justifiez l'accord (ou non) dans « des pulls marron ».",
              correction: [
                { type: "line", text: "« marron » est un nom employé comme adjectif de couleur : il est invariable. On n'écrit pas « marrons », malgré le nom noyau « pulls » au pluriel." },
                { type: "note", text: "Trouvé du premier coup ? Vous tenez la règle. Sinon, revoyez les cas difficiles du GN." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Vérifier l'accord sujet-verbe",
              intro:
                "**Question typique :** « Justifiez l'accord du verbe souligné. »\nOn isole le groupe sujet avant tout.",
              steps: [
                {
                  number: "1",
                  text: "**Isoler le groupe sujet** par le test « c'est… qui », même si le sujet est inversé ou éloigné.",
                  example: { lines: ["« Arrivent alors les rescapés » → « C'est les rescapés qui arrivent » → sujet « les rescapés »"] },
                },
                {
                  number: "2",
                  text: "**Donner la personne et le nombre du sujet**, puis vérifier la terminaison du verbe.",
                  example: { lines: ["« les rescapés » → 3e personne du pluriel → « arrivent »"] },
                },
                {
                  number: "💡",
                  text: "**Traiter les sujets particuliers** : collectifs (la plupart → pluriel), coordonnés (et → pluriel), « on » (3e singulier), « qui » (accord avec l'antécédent).",
                  warn: "⚠️ Ne jamais accorder avec un complément intercalé (« la liste des candidats est… »).",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "« La liste des candidats admis (être) longue. » Quelle forme du verbe ?",
              correction: [
                { type: "line", text: "Sujet = « la liste » (singulier) ; « des candidats admis » est un complément intercalé. Verbe : « est ». Test : « C'est la liste qui est longue »." },
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
                  objectifId: "ac1",
                  question: "Dans le GN, qui est le donneur d'accord ?",
                  options: ["Le déterminant", "Le nom noyau", "L'adjectif", "La préposition"],
                  correctIndex: 1,
                  explanation:
                    "Le nom noyau donne son genre et son nombre au déterminant et aux adjectifs qui s'y rapportent.",
                },
                {
                  objectifId: "ac3",
                  question: "Comment accorder l'adjectif dans « un livre et une revue (illustré) » ?",
                  options: ["illustré (masc. sing.)", "illustrée (accord avec « revue »)", "illustrés (masc. plur.)", "illustrées (fém. plur.)"],
                  correctIndex: 2,
                  explanation:
                    "Deux noms coordonnés par « et », de genres différents : pluriel, et le masculin l'emporte → « illustrés ».",
                },
                {
                  objectifId: "ac4",
                  question: "Quel groupe est correctement orthographié ?",
                  options: ["des pulls marrons", "des yeux bleu-verts", "des chaussures crème", "des robes rouge"],
                  correctIndex: 2,
                  explanation:
                    "« crème » est un nom employé comme couleur : invariable. « marron » l'est aussi ; « bleu-vert » (composée) est invariable ; « rouges » (couleur simple) s'accorde.",
                },
                {
                  objectifId: "ac5",
                  question: "Quel test permet d'identifier le groupe sujet ?",
                  options: ["Le test « nous »", "Le test d'encadrement « c'est… qui »", "Le test du passif", "Le test « d'habitude »"],
                  correctIndex: 1,
                  explanation:
                    "« C'est [groupe] qui [verbe] » isole le groupe sujet, même quand il est inversé ou éloigné.",
                },
                {
                  objectifId: "ac6",
                  question: "Dans « La plupart des élèves (avoir) réussi », quelle forme ?",
                  options: ["a réussi", "ont réussi", "as réussi", "avez réussi"],
                  correctIndex: 1,
                  explanation:
                    "« La plupart » + nom pluriel commande toujours un verbe au pluriel : « ont réussi ».",
                },
                {
                  objectifId: "ac7",
                  question: "Dans « La liste des candidats (être) longue », le verbe s'accorde avec :",
                  options: ["candidats (pluriel)", "liste (singulier)", "le mot le plus proche", "des (pluriel)"],
                  correctIndex: 1,
                  explanation:
                    "Le sujet est « la liste » (singulier) ; « des candidats » est un complément intercalé. Accorder avec « candidats » serait une erreur d'attraction.",
                },
                {
                  objectifId: "ac2",
                  question: "Dans « Les enfants semblaient fatigués », « fatigués » est :",
                  options: ["Une épithète liée", "Un attribut du sujet", "Un complément du nom", "Un adverbe"],
                  correctIndex: 1,
                  explanation:
                    "Le verbe d'état « semblaient » relie le sujet « enfants » à l'adjectif : « fatigués » est attribut du sujet (accord avec le groupe sujet).",
                },
                {
                  objectifId: "ac5",
                  question: "Dans « C'est toi qui (être) en retard », quelle forme ?",
                  options: ["est", "es", "suis", "sont"],
                  correctIndex: 1,
                  explanation:
                    "Le pronom relatif « qui » a pour antécédent « toi » (2e personne du singulier) : le verbe est « es ».",
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
              sub: "Donneur d'accord, marques, règle",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 1 : Accord dans le GN",
              objectifTag: "Accord GN",
              question:
                "Identifiez le nom noyau et justifiez l'accord de l'adjectif souligné :\na) « de longues heures <u>silencieuses</u> »   b) « un regard <u>bleu</u> et fixe »   c) « des pulls <u>marron</u> »   d) « une <u>demi</u>-heure de trajet »   e) « des yeux <u>bleu-vert</u> »",
              correction: [
                { type: "line", label: "a)", text: "Noyau « heures » (féminin pluriel) → « silencieuses » au féminin pluriel (accord normal)." },
                { type: "line", label: "b)", text: "Noyau « regard » (masculin singulier) → « bleu » au masculin singulier (couleur simple, s'accorde)." },
                { type: "line", label: "c)", text: "« marron » : nom employé comme couleur, invariable." },
                { type: "line", label: "d)", text: "« demi » placé devant le nom : invariable." },
                { type: "line", label: "e)", text: "« bleu-vert » : couleur composée, invariable." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 2 : Accord sujet-verbe",
              objectifTag: "Accord GV",
              question:
                "Identifiez le groupe sujet et justifiez l'accord du verbe :\na) « Les enfants de la classe <u>jouent</u> dans la cour. »   b) « La liste des candidats admis <u>est</u> longue. »   c) « C'est moi qui <u>suis</u> arrivé le premier. »   d) « On <u>travaille</u> toute la journée. »   e) « Arrivent alors les trois voyageurs. »",
              correction: [
                { type: "line", label: "a)", text: "Sujet « les enfants de la classe » (noyau « enfants », 3e pluriel) → « jouent »." },
                { type: "line", label: "b)", text: "Sujet « la liste » (singulier) ; « des candidats admis » est intercalé → « est » (pas d'attraction)." },
                { type: "line", label: "c)", text: "« qui » a pour antécédent « moi » (1re singulier) → « suis »." },
                { type: "line", label: "d)", text: "« On » → 3e personne du singulier → « travaille »." },
                { type: "line", label: "e)", text: "Sujet inversé : « C'est les trois voyageurs qui arrivent » → 3e pluriel → « arrivent »." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 3 : Vrai ou faux",
              question:
                "Vrai ou faux, justifiez :\na) « La plupart des élèves » appelle toujours un verbe au singulier.\nb) Dans « un livre et une revue illustrés », l'accord masculin pluriel est correct.\nc) « On » peut commander un accord au pluriel du verbe.\nd) Dans « des robes bleu marine », l'adjectif est invariable.",
              correction: [
                { type: "line", label: "a)", text: "**Faux** : « la plupart » + nom pluriel appelle toujours le pluriel (« ont réussi »)." },
                { type: "line", label: "b)", text: "**Vrai** : noms de genres différents coordonnés par « et » → masculin pluriel." },
                { type: "line", label: "c)", text: "**Faux** : « On » commande la 3e personne du singulier ; seul l'attribut peut se mettre au pluriel (« on est fatigués »)." },
                { type: "line", label: "d)", text: "**Vrai** : « bleu marine » est une couleur composée, invariable." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : Analyser",
              sub: "Cas complexes, justification, extraits littéraires",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 4 : Choisir et justifier",
              question:
                "Choisissez la forme correcte et justifiez :\na) « Beaucoup d'enfants (joue / jouent) dans la cour. »   b) « Ni le directeur ni les enseignants ne (sont / est) disponibles. »   c) « C'est un des romans qui (m'a / m'ont) le plus marqué. »   d) « Zoé a l'air (heureuse / heureux). » (elle est heureuse)",
              correction: [
                { type: "line", label: "a)", text: "**jouent** : « beaucoup de » + nom pluriel → accord avec le nom (pluriel)." },
                { type: "line", label: "b)", text: "**sont** : « ni… ni… » avec deux sujets concernés → pluriel (et le sujet le plus proche est pluriel)." },
                { type: "line", label: "c)", text: "**m'ont** : « qui » a pour antécédent « des romans » (pluriel) → pluriel." },
                { type: "line", label: "d)", text: "**heureuse** : « avoir l'air » = « sembler » → attribut accordé avec le sujet « Zoé »." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 5 · Extrait littéraire : Émile Zola",
              enonce:
                "« La lumière blanche et crue du plein été, coulant à flots par les larges fenêtres, éclatait en taches lumineuses sur les cases. »\n*(Émile Zola, Au Bonheur des Dames, 1883)*",
              question: "Identifiez le groupe sujet du verbe « éclatait » et justifiez l'accord des adjectifs « blanche », « larges » et « lumineuses ».",
              correction: [
                { type: "line", text: "Groupe sujet : « La lumière blanche et crue du plein été » (noyau « lumière », féminin singulier) → « éclatait » à la 3e personne du singulier." },
                { type: "line", text: "« blanche » et « crue » : épithètes liées de « lumière » (féminin singulier)." },
                { type: "line", text: "« larges » : épithète liée de « fenêtres » (féminin pluriel) ; « lumineuses » : épithète liée de « taches » (féminin pluriel)." },
                { type: "note", text: "💡 « coulant » est un participe présent, invariable : épithète détachée du sujet « lumière »." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 6 : Sujets collectifs et coordonnés",
              question:
                "Choisissez et justifiez :\na) « La plupart des spectateurs (a / ont) applaudi. »   b) « Le nombre de candidats (a / ont) augmenté. »   c) « Un grand nombre de visiteurs (est / sont) venus. »   d) « Lui ou elle (viendra / viendront) demain. » (un seul des deux)",
              correction: [
                { type: "line", label: "a)", text: "**ont** : « la plupart des » + pluriel → pluriel." },
                { type: "line", label: "b)", text: "**a** : « le nombre de » désigne une quantité → singulier." },
                { type: "line", label: "c)", text: "**sont** : « un grand nombre de » exprime une pluralité → pluriel (le singulier reste défendable)." },
                { type: "line", label: "d)", text: "**viendra** : « ou » au sens exclusif (un seul des deux) → singulier." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : Maîtriser",
              sub: "Analyse complète, réponse jury rédigée",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 7 : Analyse complète",
              enonce: "« Les premières neiges de l'hiver avaient recouvert la plaine silencieuse. »",
              question: "Identifiez les donneurs et les receveurs d'accord, et rédigez une justification pour chaque accord.",
              correction: [
                { type: "line", text: "Groupe sujet « Les premières neiges de l'hiver » (noyau « neiges », féminin pluriel) → « avaient recouvert » à la 3e personne du pluriel." },
                { type: "line", text: "« premières » : épithète liée de « neiges » (féminin pluriel)." },
                { type: "line", text: "« silencieuse » : épithète liée de « plaine » (féminin singulier)." },
                { type: "note", text: "💡 L'accord du participe passé « recouvert » (avec l'auxiliaire « avoir ») relève de la notion 11." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 8 : Cas difficiles cumulés",
              enonce:
                "« Soudain, de grandes masses nuageuses et sombres avaient envahi le ciel, chassant les dernières lueurs dorées du couchant. »",
              question: "a) Identifiez le groupe sujet de « avaient envahi » et justifiez l'accord. b) Justifiez l'accord de « dorées ».",
              correction: [
                { type: "line", label: "a)", text: "Groupe sujet « de grandes masses nuageuses et sombres » (noyau « masses », féminin pluriel) → « avaient envahi » à la 3e personne du pluriel (test : « C'est les masses qui avaient envahi »)." },
                { type: "line", label: "b)", text: "« dorées » : épithète liée de « lueurs » (féminin pluriel)." },
                { type: "note", text: "💡 « chassant » est un participe présent invariable (épithète détachée). « grandes », « nuageuses », « sombres » s'accordent toutes avec « masses »." },
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
              text: "Ces exercices reproduisent le format de la question sur les accords de la Partie 1 : extrait, identification des donneurs et receveurs, justification jury. Les exercices calqués sur des sujets récents portent le badge ✦.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 1 : analyse d'un extrait",
              enonce:
                "« Soudain, de grandes masses nuageuses et sombres <u>avaient envahi</u> le ciel, chassant les dernières lueurs <u>dorées</u> du couchant. Les voyageurs <u>fatigués</u>, tassés les uns contre les autres, regardaient la nuit tomber. »",
              question: "1) Groupe sujet de « avaient envahi » et accord. 2) Accord de « dorées ». 3) « fatigués » est-il épithète ou attribut ?",
              correction: [
                { type: "line", text: "1) Groupe sujet « de grandes masses nuageuses et sombres » (noyau « masses », féminin pluriel) → « avaient envahi », 3e personne du pluriel." },
                { type: "line", text: "2) « dorées » : épithète liée de « lueurs » (féminin pluriel)." },
                { type: "line", text: "3) « fatigués » est une épithète liée du nom « voyageurs » (pas de verbe d'état entre les deux ; il fait partie du GN)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 2 : cas difficiles d'accord",
              enonce:
                "a) « La plupart des élèves (rendre, passé composé) leur copie à l'heure. »\nb) « Ni le directeur ni son adjointe ne (être, futur) présents. »\nc) « C'est toi qui (faire, présent) cette erreur. »",
              question: "Choisissez la forme correcte et rédigez une justification jury en une phrase.",
              correction: [
                { type: "line", label: "a)", text: "« ont rendu » : « la plupart des » + pluriel commande toujours le pluriel." },
                { type: "line", label: "b)", text: "« seront » : les deux sujets coordonnés par « ni… ni… » sont tous deux concernés → pluriel." },
                { type: "line", label: "c)", text: "« fais » : « qui » a pour antécédent « toi » (2e personne du singulier)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format concours récent",
              title: "Exercice 3 : justifier un accord d'attribut",
              enonce: "« Les enfants <u>semblaient</u> <u>fatigués</u> après cette longue journée. »",
              question: "Format identique au concours · Justifiez l'accord de « semblaient » et de « fatigués ».",
              correction: [
                { type: "line", text: "« semblaient » s'accorde avec le groupe sujet « les enfants » (3e personne du pluriel)." },
                { type: "line", text: "« fatigués » est un adjectif attribut du sujet « enfants » (verbe d'état « semblaient ») : il s'accorde au masculin pluriel avec le groupe sujet." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 4 : un grand nombre de",
              enonce: "« Un grand nombre de visiteurs <u>étaient venus</u> admirer les nouvelles œuvres exposées. »",
              question: "Justifiez l'accord de « étaient venus », puis ceux de « nouvelles » et « exposées ».",
              correction: [
                { type: "line", text: "« Un grand nombre de visiteurs » exprime une pluralité : l'accord au pluriel (« étaient venus ») s'aligne sur le complément « visiteurs ». L'accord au singulier (avec le noyau collectif « nombre ») reste défendable : il faut justifier son choix." },
                { type: "line", text: "« nouvelles » : épithète liée de « œuvres » (féminin pluriel) ; « exposées » : participe passé épithète de « œuvres » (féminin pluriel)." },
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
              text: "Ces exercices reproduisent des erreurs d'accord fréquentes dans les copies, y compris à la Partie 3. Repérer ce qui cloche dans une copie, c'est aussi ce que vous ferez plus tard avec vos élèves.",
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 1 · Réponse à corriger : « des champs lexical »",
              enonce: "Copie d'un candidat : « *des champs lexical utilisés dans le texte* ».",
              question: "Identifiez l'erreur et corrigez en justifiant.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "L'adjectif n'est pas accordé avec le nom noyau « champs » (masculin pluriel)", bad: true },
                    { text: "Le pluriel des adjectifs en -al est généralement en -aux" },
                    { text: "Réponse attendue : « des champs lexicaux »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 2 · Réponse à corriger : « ils les découvre »",
              enonce: "Copie d'un candidat : « *ils les découvre* ».",
              question: "Identifiez l'erreur et corrigez (précisez le groupe sujet et son accord).",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Oubli de la marque du pluriel sur le verbe", bad: true },
                    { text: "Groupe sujet « ils » (3e personne du pluriel) → désinence -ent" },
                    { text: "Réponse attendue : « ils les découvrent »" },
                  ],
                },
                { type: "note", text: "⚠️ « les » est le COD (pronom), pas le sujet : il ne commande pas l'accord du verbe." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 3 · Réponse à corriger : « La liste des arguments montrent »",
              enonce: "Copie d'un candidat : « *La liste des arguments présentés par l'auteur montrent sa rigueur* ».",
              question: "Nommez le phénomène et corrigez.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Attraction : le verbe est accordé avec le nom le plus proche (« arguments ») au lieu du vrai sujet", bad: true },
                    { text: "Groupe sujet = « La liste » (féminin singulier) ; le reste est un complément intercalé" },
                    { text: "Réponse attendue : « La liste des arguments présentés par l'auteur montre sa rigueur » (test : « C'est la liste qui montre »)" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 4 · Réponse à corriger : « des pulls marrons »",
              enonce: "Copie d'un candidat : « *des pulls marrons et des chaussures crèmes* ».",
              question: "Identifiez l'erreur sur les adjectifs de couleur et corrigez.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "« marron » et « crème » ont été accordés à tort", bad: true },
                    { text: "Ce sont des noms employés comme adjectifs de couleur : ils restent invariables" },
                    { text: "Réponse attendue : « des pulls marron et des chaussures crème »" },
                  ],
                },
                { type: "note", text: "💡 Même règle pour saumon, kaki, ivoire, citron. Exception : rose, mauve, écarlate, pourpre s'accordent." },
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
                  question: "Donneur et receveurs d'accord dans le GN ?",
                  answer:
                    "**Donneur** : le nom noyau (donne genre et nombre).\n**Receveurs** : le déterminant, l'adjectif épithète (liée ou détachée), l'adjectif attribut.",
                  astuce: "⚠️ Un adjectif après un complément du nom s'accorde avec le noyau, pas avec le complément.",
                },
                {
                  question: "Donneur et receveur d'accord dans le GV ?",
                  answer:
                    "**Donneur** : le groupe sujet (donne personne et nombre).\n**Receveur** : le verbe conjugué.\nTest d'identification du sujet : « c'est… qui ».",
                  astuce: "💡 Sujet inversé : réinverser mentalement avant d'accorder.",
                },
                {
                  question: "Adjectifs de couleur : variables ou invariables ?",
                  answer:
                    "**Variables** : couleurs simples (rouge, bleu, vert, noir…).\n**Invariables** : noms employés comme couleurs (marron, crème, kaki, saumon) et couleurs composées (bleu-vert, bleu marine).",
                  astuce: "Exception : rose, mauve, écarlate, pourpre s'accordent (vrais adjectifs).",
                },
                {
                  question: "Accord avec plusieurs noms coordonnés par « et » ?",
                  answer:
                    "Verbe ou adjectif au **pluriel**. Si les noms sont de genres différents, le **masculin l'emporte** : « un livre et une revue illustrés ».",
                },
                {
                  question: "La plupart / beaucoup de / le nombre de : quel accord ?",
                  answer:
                    "**La plupart** (+ pluriel) → toujours pluriel.\n**Beaucoup de / peu de / trop de** + nom → accord avec le nom.\n**Le nombre de** → singulier (une quantité).\n**Un grand nombre de** → pluriel (pluralité).",
                },
                {
                  question: "Accord avec « qui » pronom relatif ?",
                  answer:
                    "Le verbe de la relative s'accorde avec l'**antécédent** de « qui ».\n« C'est moi qui suis venu » (antécédent « moi », 1re singulier) ; « C'est un des livres qui m'ont marqué » (antécédent « des livres », pluriel).",
                },
                {
                  question: "Qu'est-ce que l'attraction (accord par proximité) ?",
                  answer:
                    "Le verbe est accordé, à tort, avec le nom le plus proche au lieu du vrai sujet.\nErreur : « La liste des candidats montrent ». Correct : « La liste des candidats montre ».",
                  astuce: "⚠️ Parade : toujours appliquer le test « c'est… qui » avant d'accorder.",
                },
                {
                  question: "Le schéma de relecture des accords en 3 gestes ?",
                  answer:
                    "① Souligner chaque nom noyau, vérifier ses adjectifs et son déterminant.\n② Encadrer chaque groupe sujet (« c'est… qui »), vérifier le verbe.\n③ Traiter les cas particuliers (collectifs, coordonnés, inversés, couleurs).",
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
              center: { title: "Les accords", subtitle: "GN et GV" },
              branches: [
                {
                  title: "Accord dans le GN",
                  lines: ["Donneur : le nom noyau", "Receveurs : déterminant, adjectifs", "Épithète / attribut du sujet"],
                  variant: "blue",
                },
                {
                  title: "Cas difficiles du GN",
                  lines: ["Plusieurs noms : masculin l'emporte", "Couleurs : nom-couleur invariable", "mi-, demi-, nu-, grand- : invariables"],
                  variant: "blue",
                },
                {
                  title: "Accord sujet-verbe",
                  lines: ["Donneur : le groupe sujet", "Test « c'est… qui »", "Sujet inversé ou éloigné"],
                  variant: "green",
                },
                {
                  title: "Sujets particuliers",
                  lines: ["La plupart de + pluriel → pluriel", "On → 3e sing.", "Qui → accord avec l'antécédent"],
                  variant: "green",
                },
                {
                  title: "Pièges classiques",
                  lines: ["Attraction (nom le plus proche)", "Couleurs invariables", "Coordination : masculin l'emporte"],
                  variant: "yellow",
                },
                {
                  title: "Renvoi",
                  lines: ["Accord du participe passé", "(être, avoir, pronominaux)", "→ notion 11"],
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
