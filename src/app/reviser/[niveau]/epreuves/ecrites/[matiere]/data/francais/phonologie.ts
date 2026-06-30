import type { Fiche } from "@/components/fiche/types";
import { EXERCICES_PHONOLOGIE } from "./exercices-phonologie";
import { COPIES_PHONOLOGIE } from "./copies-phonologie";

const SAVOIR_FAIRE = [
  { id: "phonemes-graphemes", label: "Phonèmes/graphèmes" },
  { id: "syllabes", label: "Syllabes" },
  { id: "accents", label: "Accents" },
  { id: "liaisons", label: "Liaisons" },
  { id: "homophones", label: "Homophones" },
  { id: "transcription", label: "Transcription" },
];

export const fichePhonologie: Fiche = {
  slug: "phonologie",
  matiere: "francais",
  numero: 16,
  partie: "Partie 1 : Grammaire du texte et du discours",
  title: "La phonologie",
  subtitle: "Phonème, graphème, lettre, transcription API, correspondances grapho-phonémiques et valeurs d'une lettre",
  badges: [
      {
          "label": "★★☆ Fréquent",
          "variant": "hot"
      },
      {
          "label": "Cycle 1 à 3 · BOEN n°1 du 22 janvier 2019",
          "variant": "info"
      }
  ],
  metaTitle: "La phonologie (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "La phonologie au CRPE : phonème, graphème et lettre, transcription en API, correspondances grapho-phonémiques, h muet et h aspiré. Méthode et exercices corrigés.",
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
                  text: "Les valeurs grammaticales et distinctives des lettres muettes (marques de pluriel et de féminin, homophones) sont approfondies dans la fiche [Les homophones grammaticaux](fiche:homophones-grammaticaux).",
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
                "*Question typique : « Transcrivez le mot <u>beaucoup</u> en alphabet phonétique international. »*",
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
                "*Question typique : « Indiquez le nombre de lettres, de graphèmes et de phonèmes du mot <u>chant</u>. »*",
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
                "*Question typique : « Quelle est la valeur de la lettre <t> dans le mot <u>patience</u> ? »*",
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
              title: "La phonologie",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_PHONOLOGIE,
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
              title: "La phonologie",
              copies: COPIES_PHONOLOGIE,
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
                  lines: ["Homophones → notion 13", "Formation des mots → notion 17"],
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
