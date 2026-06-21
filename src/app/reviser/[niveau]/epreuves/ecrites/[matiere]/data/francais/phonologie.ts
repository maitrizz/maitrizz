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
    { label: "Cycle 1 à 3 · BOEN n°1 du 22 janvier 2019", variant: "info" },
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
                  type: "paragraph",
                  text: "Tout part d'une idée simple : **on ne parle pas comme on écrit**. À l'oral, un mot est une suite de **sons** ; à l'écrit, une suite de **lettres**. Et les deux ne se correspondent presque jamais un pour un : « eau » s'écrit avec 3 lettres mais ne s'entend qu'avec un seul son /o/. La phonologie distingue donc trois niveaux qu'il ne faut jamais confondre au concours.",
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "🎯",
                  title: "L'idée à retenir en une phrase",
                  text: "Le **phonème**, c'est ce qu'on **entend** ; le **graphème**, c'est ce qu'on **écrit** pour le transcrire ; la **lettre**, c'est un signe de l'**alphabet**. Deux mondes (l'oral et l'écrit) reliés par les graphèmes.",
                },
                {
                  type: "notionCardGrid",
                  columns: 1,
                  cards: [
                    {
                      title: "Le phonème → l'ORAL (ce qu'on entend)",
                      definition: "La plus petite **brique de son** qui, à elle seule, peut changer le sens d'un mot. C'est de l'oral : on l'**entend**, on ne le voit pas. On le note entre barres obliques /…/.",
                      exemples: [
                        "« pain » /pɛ̃/ ≠ « bain » /bɛ̃/ : changer /p/ en /b/ change le mot, ce sont donc deux phonèmes (on appelle ce couple une paire minimale)",
                        "« sol » /sɔl/ ≠ « vol » /vɔl/ : /s/ et /v/ sont deux phonèmes",
                      ],
                      astuce: "🔑 Le phonème est abstrait (une fonction : distinguer les mots) ; le son est sa réalisation concrète quand on le prononce.",
                      test: "On dénombre généralement 36 phonèmes en français.",
                    },
                    {
                      title: "Le graphème → l'ÉCRIT (ce qui transcrit le son)",
                      definition: "La **brique d'écriture** qui transcrit un phonème : une lettre seule **ou** un groupe de lettres soudées. C'est de l'écrit : on le **voit** (terminologie 2020).",
                      exemples: [
                        "1 lettre (monogramme) : <o> transcrit /o/ dans « mot »",
                        "2 lettres (digramme) : <ou>, <ch>, <an>, <eu> ; 3 lettres (trigramme) : <eau>, <ain>, <ein>",
                      ],
                      test: "Dans « eau », il y a 3 lettres mais 1 seul graphème <eau>, qui transcrit le phonème /o/.",
                    },
                    {
                      title: "La lettre → l'ALPHABET (le signe de base)",
                      definition: "L'un des 26 signes de l'alphabet. Une lettre peut former un graphème à elle seule, s'associer à d'autres pour en former un, ou ne rien transcrire du tout (lettre **muette**).",
                      exemples: [
                        "Dans « chant » : <ch> = /ʃ/ (2 lettres, 1 son), <an> = /ɑ̃/ (2 lettres, 1 son), <t> muet (1 lettre, aucun son)",
                      ],
                      test: "Une lettre n'est donc pas toujours un son : 5 lettres dans « chant », mais seulement 2 sons.",
                    },
                  ],
                },
                {
                  type: "table",
                  title: "Le même mot, lu aux trois niveaux",
                  headers: ["Mot", "Lettres (écrit)", "Graphèmes (écrit)", "Phonèmes (oral)"],
                  rows: [
                    ["**eau**", "3 : e · a · u", "1 : <eau>", "1 : /o/"],
                    ["**beau**", "4 : b · e · a · u", "2 : <b> · <eau>", "2 : /b/ /o/ → /bo/"],
                    ["**chat**", "4 : c · h · a · t", "3 : <ch> · <a> · <t muet>", "2 : /ʃ/ /a/ → /ʃa/"],
                  ],
                },
                {
                  type: "callout",
                  variant: "success",
                  icon: "💡",
                  title: "Une règle qui ne trompe pas",
                  text: "On a toujours **autant ou plus de lettres que de graphèmes**, et **autant ou plus de graphèmes que de phonèmes** (lettres ≥ graphèmes ≥ phonèmes). Passer de l'écrit à l'oral ne fait jamais apparaître un son en trop : les lettres muettes, elles, disparaissent.",
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
                  type: "callout",
                  variant: "info",
                  icon: "🗂️",
                  title: "Comment lire ces tableaux",
                  text: "Chaque ligne associe un **symbole API** au **son qu'il note**, repéré en gras dans un mot-exemple. Ces symboles sont à connaître : il faut savoir **reconnaître chacun à la lecture** et le **réécrire de mémoire**. Appuyez-vous sur le mot-exemple pour retrouver le son, c'est l'outil de base de la question de phonologie au concours.",
                },
                {
                  type: "table",
                  title: "Les voyelles orales (11)",
                  headers: ["Symbole API", "Exemple entendu"],
                  rows: [
                    ["/i/", "v**i**e, m**i**di"],
                    ["/e/", "ét**é**, parl**er** (é fermé)"],
                    ["/ɛ/", "f**ê**te, m**ai**s (è ouvert)"],
                    ["/a/", "ch**a**t, **a**mi"],
                    ["/ɔ/", "**o**r, s**o**tte (o ouvert)"],
                    ["/o/", "m**o**t, b**eau** (o fermé)"],
                    ["/u/", "f**ou**, r**ou**te"],
                    ["/y/", "l**u**ne, t**u**"],
                    ["/ø/", "f**eu**, p**eu** (eu fermé)"],
                    ["/œ/", "p**eu**r, s**œu**r (eu ouvert)"],
                    ["/ə/", "l**e**, p**e**tit (« e » caduc)"],
                  ],
                },
                {
                  type: "table",
                  title: "Les voyelles nasales (4)",
                  headers: ["Symbole API", "Exemple entendu"],
                  rows: [
                    ["/ɑ̃/", "**an**, v**en**t, ch**am**bre"],
                    ["/ɔ̃/", "**on**, p**on**t"],
                    ["/ɛ̃/", "f**in**, p**ain**, br**un** (selon les régions)"],
                    ["/œ̃/", "**un**, parf**um**"],
                  ],
                },
                {
                  type: "table",
                  title: "Les consonnes (17)",
                  headers: ["Symbole API", "Exemple entendu"],
                  rows: [
                    ["/p/", "**p**ain"],
                    ["/b/", "**b**ain"],
                    ["/t/", "**t**able"],
                    ["/d/", "**d**ent"],
                    ["/k/", "**c**ar, **qu**i"],
                    ["/g/", "**g**are"],
                    ["/f/", "**f**eu, **ph**oto"],
                    ["/v/", "**v**ol"],
                    ["/s/", "**s**ol, **ç**a"],
                    ["/z/", "**z**éro, mai**s**on"],
                    ["/ʃ/", "**ch**at"],
                    ["/ʒ/", "**j**eu, **g**irafe"],
                    ["/l/", "**l**it"],
                    ["/ʁ/", "**r**ue"],
                    ["/m/", "**m**ain"],
                    ["/n/", "**n**id"],
                    ["/ɲ/", "a**gn**eau"],
                  ],
                },
                {
                  type: "table",
                  title: "Les semi-consonnes (3)",
                  headers: ["Symbole API", "Exemple entendu"],
                  rows: [
                    ["/j/", "**y**eux, pai**ll**e"],
                    ["/w/", "**ou**i, j**ou**er"],
                    ["/ɥ/", "n**u**it, l**u**i"],
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
                  text: "On appelle **valeur d'une lettre** le **phonème qu'elle transcrit dans un mot précis**. Le point clé : une même lettre **n'a pas toujours la même valeur**. Tout dépend de son entourage (les lettres voisines, sa place dans le mot). La lettre <s>, par exemple, change de valeur d'un mot à l'autre :",
                },
                {
                  type: "table",
                  title: "Une seule lettre, trois valeurs : l'exemple de <s>",
                  headers: ["Mot", "Valeur de <s>", "Pourquoi"],
                  rows: [
                    ["**sol**", "/s/", "en début de mot"],
                    ["mai**s**on", "/z/", "entre deux voyelles, le <s> se sonorise"],
                    ["bra**s**", "muet", "consonne finale non prononcée"],
                  ],
                },
                {
                  type: "paragraph",
                  text: "De ce décalage entre l'oral et l'écrit naissent deux difficultés symétriques. Quand on **écrit**, un même son peut se noter de plusieurs façons (faut-il écrire o, au ou eau ?) : c'est la **polygraphie phonique**. Quand on **lit**, une même graphie peut se prononcer de plusieurs façons (le <c> de « car » et de « ceci ») : c'est la **polyphonie graphique**. Les deux tableaux ci-dessous les présentent face à face.",
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
                  variant: "warning",
                  icon: "🎯",
                  title: "Le cœur de la question au concours : nommer la valeur",
                  text: "« Donnez la valeur de la lettre soulignée » est une question récurrente du CRPE. Donner le son ne suffit pas : le jury attend que vous **nommiez le type de valeur**. En voici les quatre, à connaître et à savoir reconnaître.",
                },
                {
                  type: "notionCardGrid",
                  columns: 1,
                  cards: [
                    {
                      title: "① Valeur de base (ou principale)",
                      definition: "La valeur **par défaut** de la lettre, celle qu'elle prend quand rien dans son entourage ne la modifie.",
                      exemples: [
                        "<b> → /b/ (bain), <a> → /a/ (ami), <v> → /v/ (vol)",
                      ],
                      astuce: "🔑 C'est la valeur « normale », hors contexte particulier.",
                    },
                    {
                      title: "② Valeur de position",
                      definition: "La valeur **change selon la lettre qui suit**. Même lettre, son différent selon son voisin de droite.",
                      exemples: [
                        "<c> → /k/ devant a/o/u/consonne (car), /s/ devant e/i/y (ceci)",
                        "<g> → /g/ devant a/o/u (gare), /ʒ/ devant e/i/y (girafe)",
                        "<s> → /z/ entre deux voyelles (maison), /s/ ailleurs (sol)",
                      ],
                      astuce: "🔑 Position : je regarde la lettre juste après.",
                    },
                    {
                      title: "③ Valeur de combinaison",
                      definition: "Plusieurs lettres se **combinent** pour produire une valeur qu'aucune n'a isolément.",
                      exemples: [
                        "<t> → /s/ dans -tion précédé d'une voyelle (nation /nasjɔ̃/)",
                        "<gu> → /g/ devant e/i (guerre, guitare) : le <u> ne se prononce pas mais maintient le son dur",
                      ],
                      piege: "« question » garde /t/ (/kɛstjɔ̃/) : le <t> suit une consonne, donc pas de combinaison en /s/.",
                    },
                    {
                      title: "④ Valeur zéro (lettre muette)",
                      definition: "La lettre ne note **aucun son**, mais elle est rarement inutile : elle porte souvent une information.",
                      exemples: [
                        "Purement muette (raison historique) : le <h> de « homme », le <p> de « sept »",
                        "Marque grammaticale (morphogramme) : le -s de « chats » (pluriel), le -e de « amie » (féminin)",
                        "Marque de famille (morphogramme lexical) : le -d muet de « grand » rappelle « grande », « grandir »",
                      ],
                      test: "Une lettre muette peut même distinguer des homophones à l'écrit : « ver / vers / vert / verre ».",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "🔗",
                  text: "Les valeurs grammaticales et distinctives des lettres muettes (marques de pluriel et de féminin, homophones) sont approfondies dans la fiche [Homophones grammaticaux et ponctuation](fiche:homophones-grammaticaux-ponctuation).",
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
              text: "**Cycle 1 (maternelle) :** tout commence ici, à l'oral et **sans aucune lettre**. Les élèves développent la **conscience phonologique** par le jeu : scander les syllabes, repérer les rimes, isoler un son dans un mot, jouer avec les sonorités (comptines, virelangues). On travaille uniquement le **phonème**, jamais encore son écriture.\n\n**Cycle 2 :** la phonologie devient le cœur de l'**apprentissage de la lecture**. Les élèves relient désormais les sons aux lettres en apprenant les **correspondances grapho-phonémiques** : associer un graphème à un phonème pour **décoder** (lire), et inversement pour **encoder** (écrire).\n\n**Cycle 3 :** les acquis se consolident sur des mots plus longs et les graphies rares ou irrégulières.\n\n**Ce que vous devez savoir dire :** « Distinguer phonème, graphème et lettre n'est pas qu'une question d'examen : c'est le socle de l'apprentissage de la lecture, préparé dès la maternelle à l'oral (conscience phonologique), puis construit au CP avec le code (correspondances grapho-phonémiques). »",
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
              text: "Transcrire un mot en API, compter lettres / graphèmes / phonèmes, et analyser la valeur d'une lettre. Chaque démarche est **déroulée sur un exemple précis**, se conclut par une **réponse rédigée type** (la formulation à reproduire le jour J), puis par un checkpoint pour vous entraîner sur un mot nouveau.",
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
                "**Question type :** « Transcrivez le mot *beaucoup* en alphabet phonétique international. »\nOn la déroule étape par étape, jusqu'à la réponse rédigée.",
              steps: [
                {
                  number: "1",
                  text: "**Prononcer le mot à voix haute.** C'est l'oral qu'on transcrit, jamais la suite des lettres.",
                  example: { lines: ["« beaucoup » se dit /boku/, pas « b-e-a-u-c-o-u-p »."] },
                },
                {
                  number: "2",
                  text: "**Découper la chaîne parlée en sons**, dans l'ordre où on les entend.",
                  example: { lines: ["J'entends quatre sons successifs : /b/ … /o/ … /k/ … /u/."] },
                },
                {
                  number: "3",
                  text: "**Traquer les graphèmes complexes et les lettres muettes** : c'est là que se gagnent ou se perdent les points. Un digramme ou un trigramme ne vaut qu'un seul son ; une lettre muette ne vaut aucun son.",
                  example: { lines: ["<eau> = /o/ (3 lettres, 1 son), <ou> = /u/ (2 lettres, 1 son), le <p> final est muet."] },
                  warn: "⚠️ La clé : ne jamais transcrire une lettre qu'on ne prononce pas, et ne jamais éclater un digramme en plusieurs sons.",
                },
                {
                  number: "4",
                  text: "**Écrire la transcription entre barres obliques** /…/ (les crochets […] sont réservés à la phonétique fine).",
                  example: { lines: ["/boku/"] },
                },
                {
                  number: "✅",
                  text: "**Réponse attendue (formulation modèle) :** « Le mot *beaucoup* se transcrit **/boku/**. Le trigramme <eau> note le phonème /o/, le digramme <ou> note /u/, et le <p> final est muet : le mot compte **4 phonèmes** pour 8 lettres. »",
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
                "**Question type :** « Indiquez le nombre de lettres, de graphèmes et de phonèmes du mot *chant*. »\nLes trois nombres sont presque toujours différents : c'est tout l'enjeu.",
              steps: [
                {
                  number: "1",
                  text: "**Compter les lettres** : les caractères écrits, un par un.",
                  example: { lines: ["« chant » → c · h · a · n · t = 5 lettres."] },
                },
                {
                  number: "2",
                  text: "**Regrouper en graphèmes** : on soude les lettres qui forment une seule unité (digrammes, trigrammes). Attention, une lettre muette reste un graphème.",
                  example: { lines: ["<ch> · <an> · <t> = 3 graphèmes (le <t> muet compte comme graphème)."] },
                },
                {
                  number: "3",
                  text: "**Passer aux phonèmes** : chaque graphème *prononcé* donne un phonème ; les graphèmes muets n'en donnent aucun.",
                  example: { lines: ["<ch> → /ʃ/, <an> → /ɑ̃/, <t> → aucun son. Soit 2 phonèmes : /ʃɑ̃/."] },
                  warn: "⚠️ La clé : lettres ≥ graphèmes ≥ phonèmes. Si vous trouvez plus de phonèmes que de graphèmes, c'est forcément une erreur.",
                },
                {
                  number: "💡",
                  text: "**Gérer le « e » caduc** : il compte comme phonème s'il est prononcé, pas s'il est effacé. Signalez les deux comptes possibles.",
                  warn: "⚠️ « monde » → /mɔ̃d/ (3 phonèmes) ou /mɔ̃də/ (4) : les deux sont recevables si vous le justifiez.",
                },
                {
                  number: "✅",
                  text: "**Réponse attendue (formulation modèle) :** « Le mot *chant* compte **5 lettres** (c, h, a, n, t), **3 graphèmes** (<ch>, <an>, <t> muet) et **2 phonèmes** (/ʃ/ et /ɑ̃/), soit /ʃɑ̃/. L'écart vient des deux digrammes (2 lettres pour 1 graphème) et du <t> muet (1 graphème pour 0 phonème). »",
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
                { type: "line", text: "**Réponse attendue :** « nuit » → **/nɥi/**, soit 3 phonèmes (/n/, /ɥ/ semi-consonne, /i/). Le <u> transcrit /ɥ/, le <i> transcrit /i/, et le <t> final est muet." },
                { type: "note", text: "💡 Explication : /ɥ/ et /i/ sont deux sons distincts, donc deux graphèmes (<u> et <i>), pas un digramme. La semi-consonne /ɥ/ repérée ? Direction le dernier checkpoint." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Analyser la valeur d'une lettre",
              intro:
                "**Question type :** « Quelle est la valeur de la lettre <t> dans le mot *patience* ? »\nLe jury attend un son ET le nom du type de valeur.",
              steps: [
                {
                  number: "1",
                  text: "**Donner le phonème** que la lettre transcrit ici (ou dire qu'elle est muette).",
                  example: { lines: ["Dans « patience », le <t> se prononce /s/, et non /t/."] },
                },
                {
                  number: "2",
                  text: "**Nommer le type de valeur** parmi les quatre (base, position, combinaison ou zéro). C'est le point qui rapporte : ne vous arrêtez jamais au seul son.",
                  example: { lines: ["Le <t> prend /s/ parce qu'il est suivi de <i> + voyelle → c'est une valeur de combinaison."] },
                },
                {
                  number: "3",
                  text: "**Justifier par la règle** et, si possible, l'opposer à un contre-exemple : c'est ce qui prouve que vous maîtrisez la règle.",
                  example: { lines: ["Règle : <t> devant <i> + voyelle = /s/ (« patience »), mais il garde /t/ après une consonne (« question » → /kɛstjɔ̃/)."] },
                  warn: "⚠️ La clé : « valeur » = son + type. Donner seulement /s/ sans nommer la valeur de combinaison, c'est une réponse incomplète.",
                },
                {
                  number: "✅",
                  text: "**Réponse attendue (formulation modèle) :** « Dans *patience*, le <t> a la valeur **/s/**. Il s'agit d'une **valeur de combinaison** : placé devant <i> suivi d'une voyelle, le <t> se prononce /s/ (« patience » → /pasjɑ̃s/). Hors de ce contexte, il garderait sa valeur de base /t/. »",
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
                  objectifId: "ph5",
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
                { type: "line", text: "**Réponse attendue :** peur → 3 (/pœʁ/) · chat → 2 (/ʃa/) · beau → 2 (/bo/) · main → 2 (/mɛ̃/) · yeux → 2 (/jø/)." },
                { type: "note", text: "💡 Explication : on compte les sons, jamais les lettres. Les graphèmes complexes ne valent qu'un seul phonème (<ch> → /ʃ/, <eau> → /o/, <ain> → /ɛ̃/, <eu> → /ø/) et les lettres finales muettes (le <t> de « chat ») ne comptent pas." },
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
                    ["nuit", "4", "4 (n · u · i · t muet)", "3", "/nɥi/"],
                    ["monde", "5", "4 (m · on · d · e)", "3 ou 4", "/mɔ̃d/ ou /mɔ̃də/"],
                    ["eau", "3", "1 (eau)", "1", "/o/"],
                    ["chant", "5", "3 (ch · an · t muet)", "2", "/ʃɑ̃/"],
                  ],
                },
                { type: "note", text: "💡 Explication : lettres ≥ graphèmes ≥ phonèmes. Un digramme (<on>, <ch>) fait baisser le nombre de graphèmes ; une lettre muette (<t>, <e> final) fait baisser le nombre de phonèmes. Dans « nuit », <u> et <i> notent deux sons (/ɥ/ et /i/) : ce sont deux graphèmes, pas un digramme." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 3 : Valeur de la lettre <c>",
              question: "Donnez la valeur de <c> et la règle de position :\ncar · ciel · reçu · école · cygne",
              correction: [
                { type: "line", text: "**Règle (explication) :** <c> = /k/ devant a, o, u et les consonnes ; /s/ devant e, i, y. La cédille <ç> impose /s/ devant a, o, u." },
                { type: "line", text: "**Réponse attendue :** car → /k/ (devant a) · ciel → /s/ (devant i) · reçu → /s/ (cédille, devant u) · école → /k/ (devant o) · cygne → /s/ (devant y)." },
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
                { type: "line", text: "**Règle (explication) :** <s> = /z/ uniquement entre deux voyelles ; partout ailleurs (initiale, contre une consonne, doublé en <ss>) il vaut /s/." },
                { type: "line", text: "**Réponse attendue :** sol → /s/ (initiale) · raison → /z/ (intervocalique) · sport → /s/ (devant consonne) · insensé → /s/ (après la consonne <n>) · tasse → /s/ (<ss> toujours /s/)." },
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
                { type: "line", text: "**Polygraphie phonique** (un phonème, plusieurs graphèmes) : le phonème /ɛ/ s'écrit <e> dans « elle » et <ai> dans l'imparfait « hâtait » : un même son noté de deux façons." },
                { type: "line", text: "**Polyphonie graphique** (un graphème, plusieurs valeurs) : le graphème <s> vaut /s/ dans « sa » (initiale) et /z/ dans « maison » (intervocalique) : une même lettre, deux sons." },
                { type: "note", text: "💡 Réponse attendue : un exemple précis de chaque phénomène, en nommant le phonème (ou le graphème) concerné et en justifiant par la position dans le mot." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 6 : Valeur de <x>",
              question: "Identifiez la valeur de <x> :\ntaxi · examen · dix · luxe · sixième",
              correction: [
                { type: "line", text: "**Réponse attendue :** taxi → /ks/ · examen → /gz/ (<ex> + voyelle) · dix → /s/ (en finale, mot isolé) · luxe → /ks/ · sixième → /z/." },
                { type: "note", text: "💡 Explication : dans « sixième » (comme « dixième »), <x> prend la valeur /z/ devant le suffixe -ième. Ce n'est pas une liaison : la liaison ne joue qu'entre deux mots (« six enfants » → /sizɑ̃fɑ̃/)." },
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
                { type: "line", text: "**Réponse attendue :** « rouvrir » → **/ʁuvʁiʁ/** : 7 lettres, 6 graphèmes, 6 phonèmes. Décomposition : <r> /ʁ/, <ou> /u/ (digramme), <v> /v/, <r> /ʁ/, <i> /i/, <r> /ʁ/." },
                { type: "note", text: "💡 Explication : 7 lettres pour 6 graphèmes car le digramme <ou> compte 2 lettres pour 1 unité ; 6 graphèmes pour 6 phonèmes car tous sont prononcés (aucune lettre muette ici)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 8 : Phonétique ou phonologie ?",
              question: "Définissez phonétique et phonologie. Pourquoi le /ʁ/ roulé et le /ʁ/ grasseyé sont-ils phonétiquement distincts mais phonologiquement identiques ?",
              correction: [
                { type: "line", text: "**Explication :** la **phonétique** décrit physiquement les sons (articulation, acoustique) ; la **phonologie** étudie les sons comme unités fonctionnelles distinctives, les phonèmes." },
                { type: "line", text: "**Réponse attendue :** le /ʁ/ roulé et le /ʁ/ grasseyé sont deux sons différents (plan phonétique), mais aucune paire minimale ne les oppose en français : les substituer ne change jamais le sens d'un mot. Ce sont donc des **variantes (allophones)** d'un seul et même phonème /ʁ/ (plan phonologique)." },
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
                { type: "line", text: "**Réponse attendue — portes** → /pɔʁt/ : 4 phonèmes. Valeur de chaque graphème : <p> /p/, <o> /ɔ/, <r> /ʁ/, <t> /t/, <e> muet, <s> muet." },
                { type: "line", text: "**palais** → /palɛ/ : 4 phonèmes (<ai> = /ɛ/, <s> muet)." },
                { type: "line", text: "**nuages** → /nɥaʒ/ : 4 phonèmes (<u> = /ɥ/, <ge> = /ʒ/, <s> muet)." },
                { type: "note", text: "💡 Explication : on transcrit l'oral, donc le <e> et le <s> finaux (muets) ne sont jamais notés. Chaque graphème prononcé reçoit la valeur du phonème qu'il transcrit." },
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
                { type: "line", text: "**Réponse attendue :** semblant → /sɑ̃blɑ̃/ (5 phonèmes ; <em> = /ɑ̃/, <an> = /ɑ̃/) · chambre → /ʃɑ̃bʁ/ (4 ; <am> = /ɑ̃/, <e> final muet) · cependant → /səpɑ̃dɑ̃/ (6 ; <en> = /ɑ̃/, <an> = /ɑ̃/) · vantard → /vɑ̃taʁ/ (5 ; <an> = /ɑ̃/, <d> muet)." },
                { type: "note", text: "💡 Explication : le phonème /ɑ̃/ se cache sous plusieurs graphèmes (an, am, en, em), chacun valant un seul son. Comptez bien : un digramme nasal = un phonème, et les lettres finales muettes (<t>, <d>, <e>) ne comptent pas." },
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
