import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "ph1", label: "Je distingue phonème (unité sonore), graphème (unité graphique) et lettre (unité de l'alphabet)" },
  { id: "ph2", label: "Je transcris un mot en API entre barres obliques, en notant l'oral et non l'écrit" },
  { id: "ph3", label: "Je compte les phonèmes sans les confondre avec les lettres (digrammes, lettres muettes)" },
  { id: "ph4", label: "Je distingue la polygraphie phonique (un phonème, plusieurs graphèmes) de la polyphonie graphique (un graphème, plusieurs valeurs)" },
  { id: "ph5", label: "Je connais la valeur de position (c, g, s) et la valeur de combinaison (t dans -tion)" },
  { id: "ph6", label: "Je distingue le h muet du h aspiré par leurs effets sur l'élision et la liaison" },
  { id: "ph7", label: "Je distingue la phonétique (les sons) de la phonologie (les phonèmes) et je connais la paire minimale" },
];

export const fichePhonologie: Fiche = {
  slug: "phonologie",
  matiere: "francais",
  numero: 15,
  partie: "Partie 1 : Grammaire du texte et du discours",
  title: "La phonologie",
  subtitle:
    "Phonème, graphème, lettre, transcription API, correspondances grapho-phonémiques et valeurs d'une lettre",
  badges: [
    { label: "★★☆ Fréquent", variant: "hot" },
    { label: "Cycle 2-3 · BOEN n°1 du 22 janvier 2019", variant: "info" },
  ],
  metaTitle: "La phonologie (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur la phonologie : phonème, graphème et lettre, transcription en API, les phonèmes du français, correspondances grapho-phonémiques (polygraphie phonique, polyphonie graphique), valeur de position et de combinaison, h muet et h aspiré, phonétique et phonologie. Méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                "La phonologie étudie les sons de la langue comme unités fonctionnelles. Au concours, quatre savoir-faire reviennent.",
              items: [
                {
                  number: "①",
                  title: "Phonème, graphème, lettre",
                  text: "Trois niveaux distincts : l'unité sonore, l'unité graphique qui la transcrit, et l'unité de l'alphabet.",
                },
                {
                  number: "②",
                  title: "La transcription en API",
                  text: "Noter l'oral entre barres obliques, en comptant les phonèmes et non les lettres.",
                },
                {
                  number: "③",
                  title: "Les correspondances grapho-phonémiques",
                  text: "Polygraphie phonique, polyphonie graphique, valeur de position et de combinaison.",
                },
                {
                  number: "④",
                  title: "Lettres muettes, h muet et h aspiré",
                  text: "Reconnaître ce qui ne se prononce pas et les effets du h sur l'élision et la liaison.",
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
              text: "La **phonologie** étudie les unités sonores fonctionnelles d'une langue, les **phonèmes**. Elle se distingue de la **phonétique**, qui décrit les sons tels qu'ils sont physiquement produits. Au concours, on demande d'identifier un phonème, de distinguer phonème et graphème, de transcrire en API, d'analyser les correspondances grapho-phonémiques et d'expliquer la valeur d'une lettre en contexte.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Phonème, graphème, lettre",
              blocks: [
                {
                  type: "notionCardGrid",
                  columns: 1,
                  cards: [
                    {
                      title: "Le phonème (unité de l'oral)",
                      definition: "La plus petite unité sonore capable de distinguer deux mots. On le note entre barres obliques /…/.",
                      exemples: [
                        "« pain » /pɛ̃/ ≠ « bain » /bɛ̃/ : /p/ et /b/ sont deux phonèmes (paire minimale)",
                        "« sol » /sɔl/ ≠ « vol » /vɔl/ : /s/ et /v/ sont deux phonèmes",
                      ],
                      test: "Le phonème est abstrait (fonctionnel) ; le son est sa réalisation concrète. On dénombre généralement 36 phonèmes en français.",
                    },
                    {
                      title: "Le graphème (unité de l'écrit)",
                      definition: "Une lettre ou un groupe de lettres qui transcrit un phonème (terminologie 2020).",
                      exemples: [
                        "Monogramme : o (/o/ dans « mot »)",
                        "Digramme : ou, ch, an, eu ; trigramme : eau, ain, ein",
                      ],
                      test: "Dans « eau », il y a 3 lettres mais 1 seul graphème, qui transcrit le phonème /o/.",
                    },
                    {
                      title: "La lettre (unité de l'alphabet)",
                      definition: "L'une des 26 lettres. Elle peut former un graphème, être muette, ou faire partie d'un graphème complexe.",
                      exemples: [
                        "Dans « chant » : <ch> = /ʃ/, <an> = /ɑ̃/, <t> muet (aucun phonème)",
                      ],
                      test: "Phonème = oral ; graphème = écrit (transcription du phonème) ; lettre = alphabet.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Les phonèmes du français et la transcription API",
              blocks: [
                {
                  type: "paragraph",
                  text: "On dénombre généralement **36 phonèmes** : 16 voyelles (11 orales, 4 nasales et le « e » caduc), 17 consonnes et 3 semi-consonnes. La transcription phonologique se note entre **barres obliques /…/** (les crochets […] sont réservés à la phonétique fine, hors concours).",
                },
                {
                  type: "table",
                  title: "Les voyelles",
                  headers: ["Type", "Phonèmes (exemples)"],
                  rows: [
                    ["Orales", "/i/ vie · /e/ été · /ɛ/ fête · /a/ chat · /ɔ/ or · /o/ mot · /u/ fou · /y/ lune · /ø/ feu · /œ/ peur · /ə/ le"],
                    ["Nasales", "/ɑ̃/ an · /ɔ̃/ on · /ɛ̃/ in · /œ̃/ un"],
                  ],
                },
                {
                  type: "table",
                  title: "Consonnes et semi-consonnes",
                  headers: ["Type", "Phonèmes (exemples)"],
                  rows: [
                    ["Consonnes", "/p/ /b/ /t/ /d/ /k/ /g/ /f/ /v/ /s/ /z/ /ʃ/ chat /ʒ/ jeu /l/ /ʁ/ rue /m/ /n/ /ɲ/ agneau"],
                    ["Semi-consonnes", "/j/ yeux · /w/ oui · /ɥ/ nuit"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  title: "Le « e » caduc /ə/",
                  text: "Le « e » caduc est instable : il peut s'effacer sans changer le sens (« fenêtre » /fənɛtʁ/ ou /fnɛtʁ/). Au concours, les deux transcriptions sont recevables si elles sont justifiées. Selon les régions, /œ̃/ tend aussi à se confondre avec /ɛ̃/ : on retient 36 phonèmes pour le concours.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Les correspondances grapho-phonémiques",
              blocks: [
                {
                  type: "paragraph",
                  text: "Certains phonèmes s'écrivent de plusieurs façons (**polygraphie phonique**, difficulté à l'écriture) ; certains graphèmes ont plusieurs valeurs (**polyphonie graphique**, difficulté à la lecture). C'est ce que le jury appelle la **valeur** d'une lettre.",
                },
                {
                  type: "table",
                  title: "Un phonème, plusieurs graphèmes (polygraphie phonique)",
                  headers: ["Phonème", "Graphèmes", "Exemples"],
                  rows: [
                    ["/o/", "o, au, eau, ô", "mot, chaud, beau, côte"],
                    ["/ɛ̃/", "in, ain, ein, im, aim", "fin, main, peine, timbre, faim"],
                    ["/s/", "s, ss, c (+e/i/y), ç, t (+ion)", "sac, masse, ceci, garçon, nation"],
                    ["/ɑ̃/", "an, en, am, em", "an, vent, chambre, temps"],
                  ],
                },
                {
                  type: "table",
                  title: "Un graphème, plusieurs valeurs (polyphonie graphique)",
                  headers: ["Graphème", "Valeurs", "Exemples"],
                  rows: [
                    ["<c>", "/k/ devant a/o/u/consonne ; /s/ devant e/i/y ; muet", "car ; ceci ; blanc"],
                    ["<g>", "/g/ devant a/o/u/consonne ; /ʒ/ devant e/i/y", "gare ; girafe"],
                    ["<s>", "/s/ (initiale, devant/après consonne, ss) ; /z/ intervocalique ; muet final", "sol ; maison ; bras"],
                    ["<x>", "/ks/ ; /gz/ ; /s/ ; /z/ (liaison)", "taxi ; examen ; dix ; sixième"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  title: "Valeur de position et valeur de combinaison",
                  text: "**Valeur de position** : la valeur dépend des lettres voisines (« c » = /k/ devant a/o/u, /s/ devant e/i/y). **Valeur de combinaison** : « t » prend la valeur /s/ devant « i » + voyelle dans « nation » /nasjɔ̃/, mais garde /t/ après consonne dans « question » /kɛstjɔ̃/.",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Lettres muettes, h muet et h aspiré",
              blocks: [
                {
                  type: "paragraph",
                  text: "Une lettre est **muette** quand elle ne correspond à aucun phonème : lettre finale (« bras », « lait »), « e » caduc effacé, ou « h ». Le « h » ne produit jamais de phonème, mais ses effets diffèrent.",
                },
                {
                  type: "table",
                  title: "H muet et h aspiré",
                  headers: ["", "H muet", "H aspiré"],
                  rows: [
                    ["Phonème produit", "Aucun", "Aucun"],
                    ["Élision", "Possible : l'heure", "Impossible : la honte"],
                    ["Liaison", "Possible : les hommes /lezɔm/", "Impossible : les hiboux /leibu/"],
                    ["Exemples", "heure, homme, habiter", "honte, hibou, haricot"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  text: "Le h aspiré n'est pas « prononcé » : il bloque l'élision et la liaison sans produire de son. « la honte » se dit /la ɔ̃t/, jamais « l'honte ».",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · compter les lettres au lieu des phonèmes",
              badge: "Erreur très fréquente",
              faux: "« chant » contient 5 phonèmes (c, h, a, n, t).",
              vrai: "« chant » contient **2 phonèmes** : /ʃ/ (digramme <ch>) et /ɑ̃/ (digramme <an>) ; le <t> est muet : /ʃɑ̃/.",
              methode: "Toujours partir de l'oral : identifier les phonèmes prononcés, pas les lettres écrites.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 · transcrire les lettres muettes",
              badge: "Source d'erreurs",
              faux: "« lait » → /lɛt/ (en transcrivant le t).",
              vrai: "« lait » → **/lɛ/** : le <t> final est muet, il ne correspond à aucun phonème. De même « beau » → /bo/, pas /beau/.",
              methode: "Ne jamais transcrire une lettre qui ne se prononce pas.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 · h muet ou h aspiré ?",
              badge: "Cas difficile",
              faux: "« honte » a un h muet, donc on peut dire « l'honte ».",
              vrai: "« honte » a un **h aspiré** : pas d'élision ni de liaison. On dit « **la** honte » (jamais « l'honte »).",
              methode: "Tester l'élision : si « l' » est impossible (la honte), c'est un h aspiré.",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°4 · le « s » intervocalique",
              badge: "À mémoriser",
              faux: "Dans « maison », <s> = /s/ « comme d'habitude ».",
              vrai: "Entre deux voyelles, <s> se sonorise en **/z/** : « maison » → /mɛzɔ̃/. Le <ss> reste toujours /s/ (« masse »).",
              methode: "Vérifier la position : <s> entre deux voyelles → /z/ ; ailleurs (initiale, près d'une consonne, doublé) → /s/.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 2 :** la phonologie est au cœur de l'apprentissage de la lecture. Les élèves développent la **conscience phonologique** (segmenter en syllabes puis en phonèmes) et apprennent les **correspondances grapho-phonémiques** pour décoder.\n\n**Ce que vous devez savoir dire :** « Distinguer phonème, graphème et lettre n'est pas qu'une question d'examen : c'est le socle de l'enseignement de la lecture. Un élève apprend à associer un graphème à un phonème (décoder) et inversement (encoder). »",
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
              text: "Transcrire un mot en API, compter lettres / graphèmes / phonèmes, et analyser la valeur d'une lettre. Chacune se termine par un checkpoint.",
            },
            {
              type: "rappelExpress",
              title: "Rappel express : trois niveaux",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "Phonème = unité sonore (oral), noté /…/.",
                    "Graphème = lettre(s) transcrivant un phonème (écrit).",
                    "Lettre = unité de l'alphabet (peut être muette ou partie d'un graphème).",
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ On transcrit ce qu'on entend, pas ce qu'on écrit : les lettres muettes n'apparaissent pas.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Transcrire un mot en API",
              intro:
                "**Question typique :** « Transcrivez ce mot en API. »\nQuatre étapes.",
              steps: [
                {
                  number: "1",
                  text: "**Prononcer le mot à voix haute** (c'est l'oral qu'on transcrit).",
                  example: { lines: ["« bateau » se dit /bato/, pas « b-a-t-e-a-u »"] },
                },
                {
                  number: "2",
                  text: "**Identifier chaque phonème** dans l'ordre, puis **noter le symbole API** entre barres obliques.",
                  example: { lines: ["« regardait » → /ʁəgaʁdɛ/ (le <e> caduc et le <t> sont muets)"] },
                },
                {
                  number: "💡",
                  text: "**Vérifier les graphèmes complexes et les lettres muettes** : un digramme (<ou>, <ch>) = 1 phonème.",
                  warn: "⚠️ « eau » = 1 phonème /o/, pas trois.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Transcrivez « beau » et indiquez le nombre de phonèmes.",
              correction: [
                { type: "line", text: "« beau » → **/bo/** : 2 phonèmes (/b/ et /o/). Le trigramme <eau> transcrit le seul phonème /o/." },
                { type: "note", text: "Trouvé ? Vous ne confondez pas lettres et phonèmes. Sinon, revoyez les digrammes." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Compter lettres, graphèmes et phonèmes",
              intro:
                "**Question typique :** « Combien de lettres, de graphèmes et de phonèmes dans ce mot ? »",
              steps: [
                {
                  number: "1",
                  text: "**Compter les lettres** (les caractères écrits).",
                  example: { lines: ["« chant » → 5 lettres"] },
                },
                {
                  number: "2",
                  text: "**Découper en graphèmes** puis **en phonèmes** (les lettres muettes ne donnent pas de phonème).",
                  example: { lines: ["« chant » → graphèmes <ch>, <an>, <t muet> ; phonèmes /ʃ/, /ɑ̃/ → /ʃɑ̃/ (2 phonèmes prononcés)"] },
                },
                {
                  number: "💡",
                  text: "**Signaler le « e » caduc** : il compte comme phonème s'il est prononcé, pas s'il est effacé.",
                  warn: "⚠️ « monde » : /mɔ̃d/ (3) ou /mɔ̃də/ (4) selon la prononciation ; les deux sont recevables si justifiées.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Combien de phonèmes dans « nuit » ? Transcrivez.",
              correction: [
                { type: "line", text: "« nuit » → **/nɥi/** : 3 phonèmes (/n/, /ɥ/ semi-consonne, /i/). Le <t> final est muet ; <ui> transcrit /ɥi/." },
                { type: "note", text: "La semi-consonne /ɥ/ repérée ? Direction le dernier checkpoint." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Analyser la valeur d'une lettre",
              intro:
                "**Question typique :** « Quelle est la valeur de la lettre soulignée ? »",
              steps: [
                {
                  number: "1",
                  text: "**Donner le phonème** correspondant (ou dire qu'elle est muette).",
                  example: { lines: ["Dans « garçon », <ç> correspond au phonème /s/"] },
                },
                {
                  number: "2",
                  text: "**Nommer le type de valeur** : valeur de position (lettres voisines) ou de combinaison.",
                  example: { lines: ["Dans « nation », <t> a la valeur /s/ par combinaison avec <i> + voyelle"] },
                },
                {
                  number: "💡",
                  text: "**Justifier par la règle** : « <c> = /s/ devant e, i, y ».",
                  warn: "⚠️ Distinguer valeur de position (c, g, s) et valeur de combinaison (t dans -tion).",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Quelle est la valeur de <s> dans « maison » ? Justifiez.",
              correction: [
                { type: "line", text: "<s> a la valeur **/z/** : en position intervocalique (entre deux voyelles), le <s> se sonorise. « maison » → /mɛzɔ̃/." },
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
                  objectifId: "ph1",
                  question: "Dans « eau », combien de lettres, de graphèmes et de phonèmes ?",
                  options: ["3, 3, 3", "3, 1, 1", "1, 1, 1", "3, 2, 1"],
                  correctIndex: 1,
                  explanation:
                    "3 lettres, mais 1 seul graphème <eau> qui transcrit 1 seul phonème /o/.",
                },
                {
                  objectifId: "ph3",
                  question: "Combien de phonèmes dans « chant » ?",
                  options: ["5", "4", "3", "2"],
                  correctIndex: 3,
                  explanation:
                    "/ʃ/ (digramme <ch>) et /ɑ̃/ (digramme <an>) ; le <t> est muet. Donc /ʃɑ̃/, soit 2 phonèmes.",
                },
                {
                  objectifId: "ph2",
                  question: "Comment transcrit-on correctement « lait » ?",
                  options: ["/lɛt/", "/lɛ/", "[lɛ]", "/lait/"],
                  correctIndex: 1,
                  explanation:
                    "Le <t> final est muet : /lɛ/. On note entre barres obliques (phonologie), pas entre crochets.",
                },
                {
                  objectifId: "ph4",
                  question: "Le phonème /o/ qui s'écrit o, au ou eau illustre :",
                  options: ["la polyphonie graphique", "la polygraphie phonique", "une paire minimale", "une liaison"],
                  correctIndex: 1,
                  explanation:
                    "Un même phonème écrit de plusieurs façons : c'est la polygraphie phonique (difficulté à l'écriture).",
                },
                {
                  objectifId: "ph5",
                  question: "Dans « nation », la lettre <t> a la valeur :",
                  options: ["/t/", "/s/", "muette", "/z/"],
                  correctIndex: 1,
                  explanation:
                    "Devant <i> + voyelle, <t> prend la valeur /s/ (valeur de combinaison) : « nation » → /nasjɔ̃/.",
                },
                {
                  objectifId: "ph6",
                  question: "« honte » commence par :",
                  options: ["un h muet (l'honte)", "un h aspiré (la honte)", "un phonème /h/", "une voyelle"],
                  correctIndex: 1,
                  explanation:
                    "h aspiré : pas d'élision ni de liaison. On dit « la honte », jamais « l'honte ».",
                },
                {
                  objectifId: "ph6",
                  question: "Dans « maison », la lettre <s> se prononce :",
                  options: ["/s/", "/z/", "muette", "/ʃ/"],
                  correctIndex: 1,
                  explanation:
                    "En position intervocalique, <s> se sonorise en /z/ : /mɛzɔ̃/.",
                },
                {
                  objectifId: "ph7",
                  question: "Le /ʁ/ roulé et le /ʁ/ grasseyé sont :",
                  options: [
                    "deux phonèmes distincts",
                    "deux réalisations (sons) du même phonème /ʁ/",
                    "une paire minimale",
                    "deux graphèmes",
                  ],
                  correctIndex: 1,
                  explanation:
                    "Phonétiquement distincts, mais phonologiquement identiques : aucune paire minimale ne les oppose, ce sont des variantes du même phonème /ʁ/.",
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
              label: "Niveau 1 : Identifier et transcrire",
              sub: "Compter les phonèmes, transcrire, valeur de base",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 1 : Compter les phonèmes",
              objectifTag: "Phonèmes",
              question: "Combien de phonèmes dans chaque mot ?\npeur · chat · beau · main · yeux",
              correction: [
                { type: "line", text: "peur → 3 (/pœʁ/) · chat → 2 (/ʃa/, t muet) · beau → 2 (/bo/) · main → 2 (/mɛ̃/) · yeux → 2 (/jø/)." },
                { type: "note", text: "💡 Les digrammes (ch, eau, ai+n nasalisé) ne comptent que pour un phonème." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 2 : Lettres, graphèmes, phonèmes",
              objectifTag: "Trois niveaux",
              question: "Pour chaque mot, donnez le nombre de lettres, de graphèmes et de phonèmes :\nnuit · monde · eau · chant",
              correction: [
                {
                  type: "table",
                  headers: ["Mot", "Lettres", "Graphèmes", "Phonèmes", "Transcription"],
                  rows: [
                    ["nuit", "4", "3 (n · ui · t muet)", "3", "/nɥi/"],
                    ["monde", "5", "4 (m · on · d · e)", "3 ou 4", "/mɔ̃d/ ou /mɔ̃də/"],
                    ["eau", "3", "1 (eau)", "1", "/o/"],
                    ["chant", "5", "3 (ch · an · t muet)", "2", "/ʃɑ̃/"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 3 : Valeur de la lettre <c>",
              question: "Donnez la valeur de <c> et la règle de position :\ncar · ciel · reçu · école · cygne",
              correction: [
                { type: "line", text: "car : /k/ (devant a) · ciel : /s/ (devant i) · reçu : /s/ (cédille devant u) · école : /k/ (devant o) · cygne : /s/ (devant y)." },
                { type: "line", text: "**Règle :** <c> = /k/ devant a, o, u et les consonnes ; /s/ devant e, i, y. La cédille <ç> impose /s/ devant a, o, u." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : Analyser les correspondances",
              sub: "Polygraphie, polyphonie, valeurs",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 4 : Valeur de <s>",
              question: "Donnez la valeur de <s> et justifiez par la position :\nsol · raison · sport · insensé · tasse",
              correction: [
                { type: "line", text: "sol : /s/ (initiale) · raison : /z/ (intervocalique) · sport : /s/ (devant consonne) · insensé : /s/ (après la consonne n) · tasse : /s/ (<ss> toujours /s/)." },
                { type: "line", text: "**Règle :** <s> = /z/ uniquement entre deux voyelles ; <ss> reste toujours /s/." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 5 : Polygraphie et polyphonie",
              enonce: "« Elle se hâtait, les yeux baissés, pressée d'atteindre sa maison avant la nuit. » (Zola)",
              question: "Relevez un exemple de polygraphie phonique et un de polyphonie graphique.",
              correction: [
                { type: "line", text: "**Polygraphie phonique :** le phonème /e/ s'écrit <é> dans « pressée » et <ai> dans l'imparfait « hâtait » : un phonème, plusieurs graphèmes." },
                { type: "line", text: "**Polyphonie graphique :** le graphème <s> vaut /s/ dans « sa » (initiale) et /z/ dans « maison » (intervocalique) : un graphème, plusieurs valeurs." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 6 : Valeur de <x>",
              question: "Identifiez la valeur de <x> :\ntaxi · examen · dix · luxe · sixième",
              correction: [
                { type: "line", text: "taxi : /ks/ · examen : /gz/ (ex- + voyelle) · dix : /s/ (finale isolée) · luxe : /ks/ · sixième : /z/ (liaison dans le groupe numéral)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : Analyse fine",
              sub: "Transcription complète, phonétique vs phonologie",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 7 : Transcription complète",
              enonce: "« j'ai vu se rouvrir les portes qui me séparaient du monde. » (Marguerite Yourcenar, Comment Wang-Fô fut sauvé)",
              question: "Transcrivez « rouvrir » en API. Comptez phonèmes, graphèmes et lettres.",
              correction: [
                { type: "line", text: "« rouvrir » → **/ʁuvʁiʁ/** : 6 phonèmes, 7 lettres. Décomposition : <r> /ʁ/, <ou> /u/ (digramme), <v> /v/, <r> /ʁ/, <i> /i/, <r> /ʁ/." },
                { type: "note", text: "💡 7 lettres pour 6 phonèmes : le digramme <ou> compte 2 lettres pour 1 phonème." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 8 : Phonétique ou phonologie ?",
              question: "Définissez phonétique et phonologie. Pourquoi le /ʁ/ roulé et le /ʁ/ grasseyé sont-ils phonétiquement distincts mais phonologiquement identiques ?",
              correction: [
                { type: "line", text: "**Phonétique :** description physique des sons (articulation, acoustique). **Phonologie :** étude des sons comme unités fonctionnelles (les phonèmes)." },
                { type: "line", text: "Le /ʁ/ roulé et le /ʁ/ grasseyé sont deux sons différents, mais aucune paire minimale ne les oppose en français : changer l'un en l'autre ne change jamais le sens. Ce sont des **variantes (allophones)** du même phonème /ʁ/." },
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
              text: "Ces exercices reproduisent le format de la question de phonologie en Partie 1. Les exercices calqués sur des sujets récents portent le badge ✦.",
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format identique au concours",
              title: "Exercice 1 : transcription d'un extrait",
              enonce: "« j'ai vu se rouvrir les portes qui me séparaient du monde, je suis monté sur la terrasse du palais pour regarder les nuages. » (Marguerite Yourcenar, Comment Wang-Fô fut sauvé)",
              question: "Transcrivez « portes », « palais » et « nuages » et indiquez le nombre de phonèmes. Pour « portes », précisez la valeur de chaque graphème.",
              correction: [
                { type: "line", text: "**portes** → /pɔʁt/ : 4 phonèmes. <p> /p/, <o> /ɔ/, <r> /ʁ/, <t> /t/, <e> muet, <s> muet." },
                { type: "line", text: "**palais** → /palɛ/ : 4 phonèmes (<ai> = /ɛ/, <s> muet)." },
                { type: "line", text: "**nuages** → /nyaʒ/ : 4 phonèmes (<ge> = /ʒ/, <s> muet)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format identique au concours",
              title: "Exercice 2 : valeur du h et lettres muettes",
              enonce: "« Vivre, sans l'écriture, me va mal, comme un habit trop lâche. » (Lola Lafon, Quand tu écouteras cette chanson)",
              question: "a) Le <h> de « habit » est-il muet ou aspiré ? Justifiez par l'élision et la liaison. b) Transcrivez « habit » et identifiez les lettres muettes.",
              correction: [
                { type: "line", label: "a)", text: "**h muet** : l'élision est possible (« l'habit ») et la liaison aussi (« un bel habit » /œ̃bɛlabi/)." },
                { type: "line", label: "b)", text: "« habit » → /abi/ : 3 phonèmes. Lettres muettes : <h> (aucun phonème) et <t> final." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 3 : le phonème /ɑ̃/",
              enonce: "semblant · chambre · cependant · vantard",
              question: "Transcrivez chaque mot, comptez les phonèmes et indiquez le graphème du phonème /ɑ̃/.",
              correction: [
                { type: "line", text: "semblant → /sɑ̃blɑ̃/ (6 ; <em> = /ɑ̃/, <an> = /ɑ̃/) · chambre → /ʃɑ̃bʁ/ (5 ; <am> = /ɑ̃/) · cependant → /səpɑ̃dɑ̃/ (7 ; <en> = /ɑ̃/, <an> = /ɑ̃/) · vantard → /vɑ̃taʁ/ (5 ; <an> = /ɑ̃/, <d> muet)." },
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
              text: "Ces exercices reproduisent des **erreurs fréquentes** en phonologie. Repérer ce qui cloche et corriger rigoureusement est une compétence directement valorisée au concours.",
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 1 · Réponse à corriger : lettres vs phonèmes",
              enonce: "Copie d'un candidat : « Le mot “chant” contient 5 phonèmes car il y a 5 lettres : c, h, a, n, t. »",
              question: "Identifiez et corrigez l'erreur.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Confusion entre lettre et phonème : le candidat compte les lettres", bad: true },
                    { text: "<ch> est un digramme (1 phonème /ʃ/), <an> aussi (/ɑ̃/), le <t> est muet" },
                    { text: "Réponse attendue : « chant » → **/ʃɑ̃/**, soit 2 phonèmes" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 2 · Réponse à corriger : le <s> de « maison »",
              enonce: "Copie d'un candidat : « Dans “maison”, <s> se prononce /s/ car s = /s/ en règle générale. »",
              question: "Identifiez et corrigez l'erreur.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "La règle de position est ignorée : <s> est ici intervocalique", bad: true },
                    { text: "Entre deux voyelles, <s> se sonorise en /z/" },
                    { text: "Réponse attendue : « maison » → **/mɛzɔ̃/** (<s> = /z/)" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 3 · Réponse à corriger : « l'honte »",
              enonce: "Copie d'un candidat : « “honte” prend un h muet, donc on peut dire “l'honte” par élision. »",
              question: "Identifiez et corrigez l'erreur.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "« honte » commence par un h aspiré, pas un h muet", bad: true },
                    { text: "Le h aspiré bloque l'élision et la liaison" },
                    { text: "Réponse attendue : on dit « **la** honte » (jamais « l'honte »)" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 4 · Réponse à corriger : le <t> de « nation »",
              enonce: "Copie d'un candidat : « “nation” → /natiɔ̃/ car le t de -tion se prononce /t/, sa valeur normale. »",
              question: "Identifiez et corrigez l'erreur.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "La valeur de combinaison de <t> devant <i> + voyelle est ignorée", bad: true },
                    { text: "Dans -tion précédé d'une voyelle, <t> prend la valeur /s/" },
                    { text: "Réponse attendue : « nation » → **/nasjɔ̃/**. (Exception : « question » /kɛstjɔ̃/, car <t> est précédé d'une consonne)" },
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
                  question: "Phonème, graphème, lettre : quelles différences ?",
                  answer:
                    "**Phonème** : plus petite unité sonore fonctionnelle (oral), notée /…/.\n**Graphème** : une ou plusieurs lettres transcrivant un phonème (écrit).\n**Lettre** : unité de l'alphabet (peut être muette).",
                  astuce: "💡 « eau » = 3 lettres, 1 graphème, 1 phonème /o/.",
                },
                {
                  question: "Polygraphie phonique vs polyphonie graphique ?",
                  answer:
                    "**Polygraphie phonique** : un phonème, plusieurs graphèmes (/o/ → o, au, eau). Difficulté à l'écriture.\n**Polyphonie graphique** : un graphème, plusieurs valeurs (<s> → /s/, /z/, muet). Difficulté à la lecture.",
                },
                {
                  question: "La règle de position de <c> ?",
                  answer:
                    "<c> = /k/ devant a, o, u et les consonnes (car, col, cube, crayon).\n<c> = /s/ devant e, i, y (ceci, ciel, cycle).\nLa cédille <ç> impose /s/ devant a, o, u (garçon, reçu).",
                },
                {
                  question: "H muet ou h aspiré ?",
                  answer:
                    "**H muet** : élision et liaison possibles (l'heure, les hommes).\n**H aspiré** : élision et liaison impossibles (la honte, le hibou).\nDans les deux cas, le h ne correspond à aucun phonème.",
                  astuce: "⚠️ Le dictionnaire signale le h aspiré (souvent par *).",
                },
                {
                  question: "Combien de phonèmes en français ?",
                  answer:
                    "Environ **36 phonèmes** : 16 voyelles (11 orales, 4 nasales, le « e » caduc), 17 consonnes, 3 semi-consonnes (/j/, /w/, /ɥ/).",
                  astuce: "💡 /œ̃/ et /ɛ̃/ se confondent dans plusieurs régions : on retient 36 pour le concours.",
                },
                {
                  question: "La valeur de <-tion> dans « nation » vs « question » ?",
                  answer:
                    "« nation » /nasjɔ̃/ : <t> précédé d'une voyelle → valeur /s/.\n« question » /kɛstjɔ̃/ : <t> précédé d'une consonne → valeur /t/.\nC'est une valeur de combinaison du graphème <t>.",
                },
                {
                  question: "Phonétique ou phonologie ?",
                  answer:
                    "**Phonétique** : description physique des sons.\n**Phonologie** : étude des phonèmes (unités fonctionnelles distinctives).\nLe /ʁ/ roulé et le /ʁ/ grasseyé sont 2 sons (phonétique) mais 1 seul phonème /ʁ/ (phonologie).",
                  astuce: "💡 Au concours, on note entre barres obliques /…/, pas entre crochets.",
                },
                {
                  question: "Qu'est-ce qu'une paire minimale ?",
                  answer:
                    "Deux mots qui ne diffèrent que par un seul phonème et ont des sens différents : « sol » /sɔl/ vs « vol » /vɔl/.\nElle prouve que la différence sonore est phonémiquement pertinente (deux phonèmes distincts).",
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
              center: { title: "Phonologie", subtitle: "oral et écrit" },
              branches: [
                {
                  title: "Trois niveaux",
                  lines: ["Phonème (oral) /…/", "Graphème (écrit)", "Lettre (alphabet)"],
                  variant: "blue",
                },
                {
                  title: "Les phonèmes",
                  lines: ["≈ 36 phonèmes", "16 voyelles, 17 consonnes", "3 semi-consonnes"],
                  variant: "green",
                },
                {
                  title: "Correspondances",
                  lines: ["Polygraphie phonique", "Polyphonie graphique", "Valeur de position / combinaison"],
                  variant: "green",
                },
                {
                  title: "Lettres muettes / h",
                  lines: ["Lettres finales muettes", "H muet : l'heure", "H aspiré : la honte"],
                  variant: "blue",
                },
                {
                  title: "Pièges classiques",
                  lines: ["Compter les lettres, pas les phonèmes", "Transcrire les lettres muettes", "<s> intervocalique → /z/"],
                  variant: "yellow",
                },
                {
                  title: "Renvois",
                  lines: ["Homophones → notion 12", "Formation des mots → notion 16"],
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
