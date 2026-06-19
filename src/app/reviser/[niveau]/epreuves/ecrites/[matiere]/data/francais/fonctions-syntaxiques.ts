import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "f1", label: "Je distingue la nature (ce qu'est le mot) et la fonction (son rôle dans la phrase), et je donne toujours les deux" },
  { id: "f2", label: "Je connais les principales fonctions : sujet, attribut, COD, COI, COS, attribut du COD, complément d'agent, CC, CDN, épithète, apposition, apostrophe" },
  { id: "f3", label: "J'applique les 4 tests de repérage : encadrement « c'est…qui », question, pronominalisation, mobilité + suppression" },
  { id: "f4", label: "Je distingue COD et COI grâce à la préposition, et je connais les verbes transitifs indirects (obéir à, jouer de…)" },
  { id: "f5", label: "Je distingue l'attribut du sujet (verbe d'état) de l'épithète détachée (sans verbe d'état)" },
  { id: "f6", label: "Je distingue le CDN (dans le GN, non mobile) du CC (mobile et supprimable), et le CC libre du complément essentiel" },
  { id: "f7", label: "Je distingue l'apposition de l'apostrophe, et je sais corriger une erreur de fonction dans une copie" },
];

export const ficheFonctionsSyntaxiques: Fiche = {
  slug: "fonctions-syntaxiques",
  matiere: "francais",
  numero: 2,
  partie: "Partie 1 : Grammaire de la phrase",
  title: "Fonctions syntaxiques",
  subtitle:
    "Identifier le rôle de chaque mot ou groupe dans la phrase : la question du tableau nature + fonction",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 + lycée", variant: "info" },
  ],
  metaTitle: "Fonctions syntaxiques (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur les fonctions syntaxiques : sujet, attribut du sujet, COD, COI, COS, attribut du COD, complément d'agent, complément circonstanciel, complément du nom, épithète, apposition, apostrophe. Les tests de repérage, pièges fréquents, méthode, exercices corrigés, flashcards et auto-évaluation.",
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
                  title: "Nature et fonction : à ne pas confondre",
                  text: "La nature ne change pas (« beau » est toujours un adjectif). La fonction, elle, dépend de la phrase : c'est ce qu'on étudie ici.",
                },
                {
                  number: "②",
                  title: "Les fonctions liées au verbe",
                  text: "Sujet, attribut du sujet, COD, COI, COS, attribut du COD, complément circonstanciel : elles dépendent du verbe.",
                },
                {
                  number: "③",
                  title: "Les fonctions dans le groupe nominal",
                  text: "Complément du nom, épithète, apposition : elles précisent un nom à l'intérieur du groupe nominal.",
                },
                {
                  number: "④",
                  title: "Les 4 tests de repérage",
                  text: "Encadrement, question, pronominalisation, mobilité + suppression : quatre réflexes pour trancher à coup sûr.",
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
              text: "Identifier une fonction, c'est comprendre le rôle d'un mot ou d'un groupe dans la phrase. Il n'y a pas de hasard : on suit toujours le même chemin, presque comme un algorithme, jusqu'à ce que les réflexes deviennent automatiques. Face à un groupe souligné, demandez-vous d'abord s'il dépend du verbe, d'un nom ou de l'ensemble de la phrase, puis affinez : sujet, complément du verbe, attribut, complément circonstanciel… Cette fiche porte sur la **fonction** ; la **nature** a été travaillée dans la [notion 1](classes-grammaticales).",
            },
            {
              type: "subsection",
              number: "①",
              title: "Nature et fonction : à ne pas confondre",
              blocks: [
                {
                  type: "paragraph",
                  text: "La **nature** d'un mot ou d'un groupe correspond à ce qu'il est : nom, verbe, adjectif, groupe nominal… Elle est **stable** et ne change pas selon la phrase (voir la [notion 1](classes-grammaticales)).\n\nLa **fonction** syntaxique, elle, correspond à son **rôle dans la phrase** : sujet, complément, attribut… Elle **dépend du contexte** et peut varier. Un même groupe nominal peut par exemple être sujet dans « Le chat dort » et COD dans « Je regarde le chat ». Au concours, la réponse complète donne **toujours les deux** : nature ET fonction.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Les fonctions liées au verbe",
              blocks: [
                {
                  type: "paragraph",
                  text: "Ces fonctions se définissent par rapport au **verbe**. Pour les mémoriser, on peut les ranger dans cet ordre : qui commande le verbe (sujet), ce que le verbe complète (COD, COI, COS), ce qu'il attribue (attribut du sujet ou du COD), ce qui agit au passif (complément d'agent), puis les circonstances (CC).",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Sujet",
                      definition: "De qui ou de quoi parle la phrase. Toujours en lien avec le verbe, qu'il commande en personne et en nombre.",
                      sousClasses: "**Natures possibles :** GN · pronom · infinitif · proposition subordonnée",
                      exemples: [
                        "« **Le chat** dort » : GN, sujet de « dort »",
                        "« **Il** dort » : pronom personnel, sujet de « dort »",
                        "« **Écrire** est un plaisir » : verbe à l'infinitif, sujet de « est »",
                        "« **Que tu partes** m'attriste » : proposition subordonnée conjonctive, sujet de « attriste »",
                      ],
                      piege: "Sujet postposé (inversé) fréquent en poésie : « Monte **une humble flamme** » → « une humble flamme » est sujet, pas COD.",
                      test: "Encadrement « c'est… qui » : « C'est le chat qui dort ».",
                    },
                    {
                      title: "COD",
                      definition: "Complément d'objet direct : complète un verbe transitif direct, sans préposition.",
                      sousClasses: "**Natures possibles :** GN · pronom (le/la/les) · infinitif · proposition subordonnée conjonctive ou interrogative indirecte",
                      exemples: [
                        "« Elle mange **une pomme** » : GN, COD de « mange »",
                        "« Il **la** mange » : pronom personnel, COD de « mange »",
                        "« Elle aime **lire** » : verbe à l'infinitif, COD de « aime »",
                        "« Je pense **que tu as raison** » : proposition subordonnée conjonctive, COD de « pense »",
                        "« Je me demande **où il va** » : proposition interrogative indirecte, COD de « demande »",
                      ],
                      piege: "Verbes faussement directs : obéir À, nuire À, ressembler À, pardonner À. Ils sont en réalité transitifs indirects (COI).",
                      test: "« qui ? / quoi ? » sans préposition. Pronominalisation par le/la/les. Passif souvent possible (« une pomme est mangée »).",
                    },
                    {
                      title: "COI",
                      definition: "Complément d'objet indirect : complète un verbe transitif indirect, introduit par une préposition (à, de).",
                      sousClasses: "**Natures possibles :** GN prépositionnel · pronom personnel placé avant le verbe (lui, leur, y, en) · proposition subordonnée prépositionnelle",
                      exemples: [
                        "« Il pense **à ses vacances** » : GN prépositionnel, COI de « penser à »",
                        "« Elle **lui** parle » : pronom personnel, COI de « parler à »",
                        "« Je tiens **à ce que tu viennes** » : proposition subordonnée prépositionnelle, COI de « tiens »",
                      ],
                      piege: "Certains pronoms personnels placés avant le verbe cachent la préposition : « m' » dans « Tu m'as menti » est COI, car on dit « mentir à quelqu'un ».",
                      test: "« à / de qui ? quoi ? ». Pronominalisation : à + personne → lui/leur · de + chose → en · à + lieu → y. Passif impossible.",
                    },
                    {
                      title: "COS",
                      definition: "Complément d'objet second : le second complément quand un COD et un COI coexistent.",
                      sousClasses: "**Natures possibles :** GN prépositionnel · pronom personnel placé avant le verbe",
                      exemples: [
                        "« Il offre **des fleurs** (GN, COD) **à sa mère** (GN prépositionnel, COS) »",
                        "« Il **lui** offre des fleurs » : pronom personnel, COS de « offre »",
                      ],
                      piege: "Rare au concours. Ne pas le confondre avec un COI seul : le COS suppose un COD à côté.",
                      test: "Schéma verbe + COD + COS. Le COS répond à « à qui ? » en présence d'un COD.",
                    },
                    {
                      title: "Attribut du sujet",
                      definition: "Qualité ou identité attribuée au sujet par l'intermédiaire d'un verbe d'état (être, paraître, sembler, devenir, rester, demeurer, avoir l'air, passer pour).",
                      sousClasses: "**Natures possibles :** adjectif qualificatif · GN · pronom · adverbe (« debout »)",
                      exemples: [
                        "« Il semble **fatigué** » : adjectif qualificatif, attribut du sujet « il »",
                        "« Il devient **professeur** » : GN, attribut du sujet « il »",
                        "« Ce livre est **le mien** » : pronom possessif, attribut du sujet « ce livre »",
                        "« Il est resté **debout** » : adverbe, attribut du sujet « il »",
                      ],
                      piege: "Pour avoir un attribut du sujet, il faut un verbe d'état qui relie le sujet à une qualité ou une identité : « Il semble fatigué ». Sans ce verbe d'état, l'adjectif est une épithète : « Fatigué, il rentre ». Attention aussi à l'attribut du COD : il ne qualifie pas le sujet, mais le COD. Exemple : dans « Je trouve ce livre intéressant », « intéressant » qualifie « ce livre » (COD), pas « je ».",
                      test: "Remplacer par « être + adjectif » : « Il semble fatigué » équivaut à « Il est fatigué ».",
                    },
                    {
                      title: "Attribut du COD",
                      definition: "Qualité attribuée au COD par un verbe factitif ou déclaratif (trouver, juger, croire, estimer, nommer, élire, rendre).",
                      sousClasses: "**Natures possibles :** adjectif qualificatif · GN · participe passé",
                      exemples: [
                        "« Je **le** crois **sincère** » : « sincère » adjectif qualificatif, attribut du COD « le »",
                        "« Ils ont élu Marie **présidente** » : « présidente » nom, attribut du COD « Marie »",
                        "« Je le croyais **parti** » : participe passé, attribut du COD « le »",
                      ],
                      piege: "Ne pas confondre avec l'épithète liée : la nuance est fine. Dans « Je trouve ce livre **intéressant** », « intéressant » est attribut du COD, car il apporte une information sur le COD « ce livre » par l'intermédiaire du verbe « trouve ». Dans « un livre intéressant », « intéressant » est épithète liée : il appartient directement au groupe nominal « un livre intéressant », sans passer par un verbe.",
                      test: "« COD + être + attribut » : « Je le crois sincère » donne « il est sincère ».",
                    },
                    {
                      title: "Complément d'agent",
                      definition: "Dans une phrase à la voix passive, groupe qui indique qui accomplit l'action subie par le sujet.",
                      sousClasses: "**Natures possibles :** GN prépositionnel introduit par « par » ou « de » · pronom",
                      exemples: [
                        "« La souris est mangée **par le chat** » : GN prépositionnel, complément d'agent du verbe passif « est mangée »",
                        "« Ce roman est apprécié **de tous** » : pronom indéfini, complément d'agent du verbe passif « est apprécié »",
                      ],
                      piege: "Tous les groupes introduits par « par » ne sont pas des compléments d'agent. Dans « Il passe par Paris », « par Paris » indique le lieu : c'est un CC. Le complément d'agent apparaît avec un verbe au passif et correspond au sujet de la phrase active.",
                      test: "Transformer au passif puis revenir à l'actif : « La souris est mangée par le chat » → « Le chat mange la souris ». « Le chat » accomplit l'action : c'est le complément d'agent.",
                    },
                    {
                      title: "Complément circonstanciel (CC)",
                      definition: "Précise les circonstances de l'action : temps, lieu, manière, cause, but, conséquence, condition, concession, moyen, accompagnement.",
                      sousClasses: "**Natures possibles :** GN prépositionnel · adverbe · GN sans préposition (« demain matin ») · proposition subordonnée circonstancielle",
                      exemples: [
                        "« **Demain**, il part » : adverbe, CC de temps",
                        "« Il agit **avec courage** » : GN prépositionnel, CC de manière",
                        "« Il part **demain matin** » : GN sans préposition, CC de temps",
                        "« **Quand il pleut**, il lit » : proposition subordonnée circonstancielle, CC de temps",
                      ],
                      astuce: "**Types fréquents :** temps (quand ?), lieu (où ?), manière (comment ?), cause (pourquoi ? à cause de quoi ?), but (dans quel but ?), condition (à quelle condition ?), concession (malgré quoi ?), moyen (avec quoi ?).",
                      piege: "Un complément non supprimable n'est pas un CC libre mais un complément essentiel : « Il habite **à Paris** » (« Il habite » seul est bancal).",
                      test: "Double test : mobilité en tête de phrase ET suppression sans rendre la phrase incorrecte. Les deux doivent fonctionner.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Les fonctions dans le groupe nominal",
              blocks: [
                {
                  type: "paragraph",
                  text: "Ces fonctions précisent un **nom** à l'intérieur du groupe nominal, ou se rattachent à un nom ou à l'interlocuteur.",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Complément du nom (CDN)",
                      definition: "Expansion du groupe nominal : précise ou détermine le nom noyau. Toujours à l'intérieur du GN.",
                      sousClasses: "**Natures possibles :** GN prépositionnel · proposition subordonnée relative · infinitif prépositionnel · adjectif (épithète)",
                      exemples: [
                        "« le livre **de Pierre** » : GN prépositionnel, CDN du nom « livre »",
                        "« le livre **que je lis** » : proposition subordonnée relative, expansion du nom « livre »",
                        "« le désir **de partir** » : infinitif prépositionnel, CDN du nom « désir »",
                        "« une maison **bleue** » : adjectif qualificatif, épithète du nom « maison »",
                      ],
                      piege: "Ne pas confondre avec le CC : « Il part **avec courage** » (CC, mobile) n'est pas « un acte **de courage** » (CDN, non mobile). Même préposition, deux fonctions : « de Paris » est CDN dans « la gare de Paris », CC dans « Elle revient de Paris ».",
                      test: "Non mobile hors du GN : « De Pierre le livre » est impossible.",
                    },
                    {
                      title: "Épithète",
                      definition: "Adjectif (ou participe) rattaché à un nom. Liée : accolée au nom, sans virgule. Détachée : séparée par une virgule, mobile.",
                      sousClasses: "**Natures possibles :** adjectif qualificatif · participe passé · participe présent (détachée)",
                      exemples: [
                        "« un **grand** homme » : adjectif qualificatif, épithète liée du nom « homme »",
                        "« une porte **fermée** » : participe passé, épithète liée du nom « porte »",
                        "« une eau **courante** » : participe présent employé comme adjectif verbal, épithète liée du nom « eau »",
                        "« **Seul**, il repartit » : adjectif qualificatif, épithète détachée du sujet « il »",
                      ],
                      piege: "Sans verbe d'état entre le nom et l'adjectif, c'est une épithète, jamais un attribut du sujet.",
                      test: "Y a-t-il un verbe d'état entre le nom et l'adjectif ? Non → épithète. Oui → attribut.",
                    },
                    {
                      title: "Apposition",
                      definition: "Groupe (souvent nominal) mis en relation avec un nom ou un pronom, séparé par une virgule, et qui désigne la même réalité.",
                      sousClasses: "**Natures possibles :** GN · adjectif qualificatif",
                      exemples: [
                        "« Hugo, **grand poète romantique**, vécut longtemps » : GN, apposition à « Hugo »",
                        "« Paul, **ravi**, sourit » : adjectif qualificatif, apposition à « Paul »",
                      ],
                      piege: "Différente du CDN (pas de virgule) et de l'apostrophe (qui interpelle sans lien syntaxique).",
                      test: "Entre virgules, supprimable, et désigne la même réalité que le nom.",
                    },
                    {
                      title: "Apostrophe",
                      definition: "Groupe qui interpelle l'interlocuteur. Aucun lien syntaxique avec la phrase.",
                      sousClasses: "**Natures possibles :** GN · pronom",
                      exemples: [
                        "« **Mes amis**, écoutez-moi » : GN, apostrophe (aucune fonction syntaxique)",
                        "« **Toi**, viens ici » : pronom personnel, apostrophe",
                        "« Tu m'as menti, **vieil imposteur** » : GN, apostrophe",
                      ],
                      piege: "N'a **aucune** fonction syntaxique : il faut le signaler explicitement. À ne pas confondre avec l'apposition, qui a un lien avec un nom.",
                      test: "Supprimable sans altérer la phrase. Isolée par une virgule ou un point d'exclamation.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Tester une fonction : un exemple complet",
              blocks: [
                {
                  type: "paragraph",
                  text: "Les tests servent surtout quand plusieurs analyses semblent possibles. On part d'une phrase, on isole le groupe à analyser, puis on vérifie son rôle par manipulation. Exemple de départ : « Le soir, les enfants regardent un film. »",
                },
                {
                  type: "table",
                  headers: ["Groupe à analyser", "Manipulation utile", "Conclusion"],
                  rows: [
                    [
                      "« les enfants »",
                      "Encadrement : « Ce sont les enfants qui regardent un film. » Le groupe commande aussi l'accord du verbe.",
                      "Sujet du verbe « regardent ».",
                    ],
                    [
                      "« un film »",
                      "Question après le verbe : les enfants regardent quoi ? « un film ». Pronominalisation : « Les enfants le regardent. »",
                      "COD du verbe « regardent ».",
                    ],
                    [
                      "« Le soir »",
                      "Déplacement et suppression : « Les enfants regardent un film le soir » ; « Les enfants regardent un film ». La phrase reste correcte.",
                      "Complément circonstanciel de temps.",
                    ],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ Le test de la question ne suffit pas toujours. Dans « Il habite à Lyon », « à Lyon » répond à « où ? », mais il n'est pas supprimable : « Il habite » est incomplet. Ce n'est donc pas un CC libre, mais un complément essentiel de lieu.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · Sujet inversé non identifié",
              badge: "Très fréquent",
              faux: "Dans « Monte en moi une humble flamme », « une humble flamme » est analysé comme COD.",
              vrai: "« une humble flamme » est le **sujet** du verbe « monte » : le sujet est postposé (placé après le verbe).",
              methode: "Toujours tester l'encadrement, même quand le sujet est après le verbe : « C'est une humble flamme qui monte en moi ».",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 · COD / COI : la préposition absorbée",
              badge: "Très fréquent",
              faux: "Dans « Tu m'as menti », « m' » est analysé comme COD.",
              vrai: "« mentir À quelqu'un » est un verbe transitif indirect : « m' » est donc **COI**.",
              methode: "Remplacer le pronom par le GN : « Tu as menti à moi » fait apparaître la préposition, donc COI. Les pronoms personnels placés avant le verbe (m', t', lui…) peuvent cacher cette préposition.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 · Épithète détachée confondue avec attribut du sujet",
              badge: "Très fréquent",
              faux: "Dans « Elle souriait, muette, heureuse », « muette » est analysé comme attribut du sujet.",
              vrai: "C'est une **épithète détachée** : il n'y a pas de verbe d'état entre « elle » et « muette ».",
              methode: "Y a-t-il un verbe d'état (être, sembler, paraître…) entre le sujet et l'adjectif ? Non → épithète détachée. Oui → attribut du sujet.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 · CC non supprimable confondu avec CC mobile",
              badge: "Piège subtil",
              faux: "Dans « Il habite à Paris », « à Paris » est analysé comme CC de lieu supprimable.",
              vrai: "« Il habite » seul est bancal : « à Paris » est un **complément essentiel de lieu** (non supprimable).",
              methode: "Double test, mobilité ET suppression. Si l'un échoue, ce n'est pas un CC libre mais un complément essentiel.",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°5 · L'apostrophe n'a pas de fonction syntaxique",
              badge: "Souvent oublié",
              faux: "Dans « Tu m'as menti, vieil imposteur », « vieil imposteur » est analysé comme COD ou apposition.",
              vrai: "C'est une **apostrophe** : elle interpelle l'interlocuteur et n'a aucun lien syntaxique avec la phrase.",
              methode: "Supprimer le groupe : « Tu m'as menti » reste complet, donc apostrophe. Toujours signaler qu'elle est hors syntaxe.",
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
              title: "Une démarche par hypothèses",
              text: "Face à un groupe souligné, on commence par le situer : dépend-il du verbe de la phrase ou d'un nom ? Ce premier tri évite de chercher un COD là où il faut reconnaître un complément du nom, ou de prendre une épithète pour un attribut.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Faire le premier tri : verbe ou nom ?",
              intro:
                "**Question typique :** « Donnez la fonction du groupe souligné. »\nAvant de nommer la fonction, on regarde où le groupe se rattache dans la phrase.",
              steps: [
                {
                  number: "1",
                  text: "**Le groupe dépend-il du verbe ?** Il peut faire l'action, compléter le verbe, recevoir une qualité par le verbe, ou préciser les circonstances de l'action.",
                  example: { lines: ["« Les enfants regardent <u>un film</u> » → le groupe complète « regardent » → fonction liée au verbe"] },
                },
                {
                  number: "2",
                  text: "**Le groupe dépend-il d'un nom ?** Il fait partie d'un groupe nominal, précise un nom ou ajoute une information sur ce nom.",
                  example: { lines: ["« le livre <u>de Paul</u> » → le groupe complète le nom « livre » → fonction dans le groupe nominal"] },
                },
                {
                  number: "3",
                  text: "**Le groupe interpelle-t-il quelqu'un ?** Il ne dépend alors ni du verbe ni d'un nom : c'est une apostrophe.",
                  example: { lines: ["« <u>Mes amis</u>, écoutez-moi » → apostrophe"] },
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Si le groupe dépend du verbe",
              intro:
                "On cherche alors parmi les fonctions construites autour du verbe : sujet, COD, COI, attribut, complément d'agent, complément circonstanciel.",
              steps: [
                {
                  number: "1",
                  text: "**Si le groupe semble commander le verbe**, tester l'encadrement « c'est… qui ».",
                  example: { lines: ["« <u>Le soleil</u> se couchait » → « C'est le soleil qui se couchait » → sujet"] },
                },
                {
                  number: "2",
                  text: "**Si le groupe semble compléter le verbe**, poser la question après le verbe : sans préposition → COD ; avec à / de → COI. Vérifier par la pronominalisation.",
                  example: { lines: ["« Elle parle <u>à son ami</u> » → « Elle lui parle » → COI"] },
                },
                {
                  number: "3",
                  text: "**Si le groupe donne une qualité ou une identité par le verbe**, vérifier s'il s'agit d'un attribut : attribut du sujet après un verbe d'état, attribut du COD si la qualité porte sur le COD.",
                  example: { lines: ["« Il semble <u>fatigué</u> » → attribut du sujet ; « Je trouve ce livre <u>intéressant</u> » → attribut du COD"] },
                },
                {
                  number: "4",
                  text: "**Si la phrase est au passif**, le groupe introduit par « par » ou « de » peut être complément d'agent : il indique qui accomplit l'action.",
                  example: { lines: ["« La souris est mangée <u>par le chat</u> » → complément d'agent"] },
                },
                {
                  number: "5",
                  text: "**Si le groupe indique une circonstance**, tester mobilité + suppression : si les deux marchent → CC ; sinon, complément essentiel.",
                  example: { lines: ["« <u>Rapidement</u>, il referma la porte » → mobile et supprimable → CC de manière"] },
                },
                {
                  number: "💡",
                  text: "**Si aucune manipulation ne convient**, revenir au premier tri : le groupe dépend peut-être d'un nom, ou il s'agit d'une apostrophe.",
                  warn: "⚠️ Une fonction se justifie toujours par un test, jamais « au feeling ».",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Si le groupe dépend d'un nom",
              intro:
                "On ne cherche plus un complément du verbe : on regarde comment le groupe enrichit le nom. Les fonctions à vérifier sont surtout le complément du nom, l'épithète et l'apposition.",
              steps: [
                {
                  number: "1",
                  text: "**Le groupe complète le nom avec une préposition ou une relative ?** C'est souvent un complément du nom.",
                  example: { lines: ["« le livre <u>de Paul</u> » → CDN du nom « livre »"] },
                },
                {
                  number: "2",
                  text: "**L'adjectif est directement lié au nom ?** C'est une épithète liée. S'il est séparé par une virgule, c'est une épithète détachée.",
                  example: { lines: ["« une <u>belle</u> robe » → épithète liée du nom « robe »", "« <u>Fatigué</u>, l'enfant s'endormit » → épithète détachée du nom « enfant »"] },
                },
                {
                  number: "3",
                  text: "**Le groupe est détaché par des virgules et désigne la même réalité que le nom ?** C'est une apposition.",
                  example: { lines: ["« Hugo, <u>grand poète romantique</u>, vécut longtemps » → apposition à « Hugo »"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Donnez la fonction du groupe souligné : « Elle parle <u>à son ami</u>. »",
              correction: [
                { type: "line", text: "« à son ami » → **COI** du verbe « parle » (test : « à qui ? » ; pronominalisation : « Elle lui parle »)." },
                { type: "note", text: "Trouvé du premier coup ? Direction le Quiz éclair. Sinon, relisez l'étape 2." },
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
                  objectifId: "f1",
                  question: "Qu'est-ce que la fonction syntaxique d'un mot ?",
                  options: [
                    "Ce qu'est le mot, indépendamment de la phrase",
                    "Son rôle dans la phrase, qui dépend du contexte",
                    "Son genre et son nombre",
                    "Sa place dans le dictionnaire",
                  ],
                  correctIndex: 1,
                  explanation:
                    "La fonction est le rôle du mot dans la phrase ; elle varie selon le contexte, contrairement à la nature qui est stable.",
                },
                {
                  objectifId: "f3",
                  question: "Quel test identifie le sujet, même quand il est placé après le verbe ?",
                  options: ["La pronominalisation", "L'encadrement « c'est… qui »", "La suppression", "Le passif"],
                  correctIndex: 1,
                  explanation:
                    "« C'est [groupe] qui [verbe] » identifie le sujet, y compris postposé : « C'est une humble flamme qui monte ».",
                },
                {
                  objectifId: "f4",
                  question: "Dans « Il obéit à ses parents », quelle est la fonction de « à ses parents » ?",
                  options: ["COD", "COI", "CC de lieu", "Attribut"],
                  correctIndex: 1,
                  explanation:
                    "« obéir À quelqu'un » est transitif indirect : « à ses parents » est COI (pronominalisation : « Il leur obéit »).",
                },
                {
                  objectifId: "f5",
                  question: "Dans « Seul, il repartit », quelle est la fonction de « Seul » ?",
                  options: ["Attribut du sujet", "Épithète détachée", "Apposition", "Adverbe"],
                  correctIndex: 1,
                  explanation:
                    "Il n'y a pas de verbe d'état entre « il » et « Seul » : c'est une épithète détachée, pas un attribut du sujet.",
                },
                {
                  objectifId: "f6",
                  question: "Dans « le livre de Pierre », quelle est la fonction de « de Pierre » ?",
                  options: ["CC de lieu", "Complément du nom (CDN)", "COI", "Apposition"],
                  correctIndex: 1,
                  explanation:
                    "« de Pierre » est à l'intérieur du GN et non mobile (« De Pierre le livre » est impossible) : c'est un CDN.",
                },
                {
                  objectifId: "f6",
                  question: "Dans « Il habite à Paris », « à Paris » est-il supprimable ?",
                  options: [
                    "Oui, c'est un CC de lieu",
                    "Non, c'est un complément essentiel de lieu",
                    "Oui, c'est une apposition",
                    "Non, c'est un COD",
                  ],
                  correctIndex: 1,
                  explanation:
                    "« Il habite » seul est bancal : « à Paris » n'est pas supprimable, c'est un complément essentiel de lieu.",
                },
                {
                  objectifId: "f7",
                  question: "Dans « Tu m'as menti, vieil imposteur », quelle est la fonction de « vieil imposteur » ?",
                  options: ["Apposition", "COD", "Apostrophe", "Attribut"],
                  correctIndex: 2,
                  explanation:
                    "« vieil imposteur » interpelle l'interlocuteur sans lien syntaxique : c'est une apostrophe (supprimable, hors syntaxe).",
                },
                {
                  objectifId: "f2",
                  question: "Dans « Je le crois sincère », quelle est la fonction de « sincère » ?",
                  options: ["Attribut du sujet", "Épithète liée", "Attribut du COD", "COD"],
                  correctIndex: 2,
                  explanation:
                    "« sincère » ne qualifie pas le sujet « je » : il qualifie le COD « le » via le verbe « croire ». C'est donc un attribut du COD ; la reformulation donne « il est sincère ».",
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
              sub: "Questions directes, phrases simples",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 1 : Quelle fonction ?",
              question:
                "Quelle est la fonction du groupe souligné ?\na) « <u>Le soleil</u> se couchait lentement. »   b) « Il mange <u>une pomme</u>. »   c) « Elle parle <u>à son ami</u>. »   d) « <u>Rapidement</u>, il referma la porte. »   e) « Il semble <u>fatigué</u>. »",
              correction: [
                { type: "line", label: "a)", text: "**Le soleil** → sujet du verbe « se couchait » (« C'est le soleil qui se couchait »)" },
                { type: "line", label: "b)", text: "**une pomme** → COD du verbe « mange » (quoi ? ; « Il la mange »)" },
                { type: "line", label: "c)", text: "**à son ami** → COI du verbe « parle » (à qui ? ; « Elle lui parle »)" },
                { type: "line", label: "d)", text: "**Rapidement** → CC de manière (mobile et supprimable)" },
                { type: "line", label: "e)", text: "**fatigué** → attribut du sujet « il » (verbe d'état « semble »)" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 2 : Vrai ou faux",
              question:
                "Vrai ou faux, justifiez en une phrase :\na) Dans « Le chien de ma voisine aboie », « de ma voisine » est un CC de lieu.\nb) Dans « Elle paraît heureuse », « heureuse » est attribut du sujet.\nc) Dans « Il habite à Lyon », « à Lyon » est supprimable.\nd) Dans « Seul, il repartit », « Seul » est attribut du sujet.",
              correction: [
                { type: "line", label: "a)", text: "**Faux** : « de ma voisine » est CDN du nom « chien » (dans le GN, non mobile)." },
                { type: "line", label: "b)", text: "**Vrai** : attribut du sujet « elle » via le verbe d'état « paraît »." },
                { type: "line", label: "c)", text: "**Faux** : « Il habite » seul est bancal, « à Lyon » est un complément essentiel de lieu." },
                { type: "line", label: "d)", text: "**Faux** : pas de verbe d'état, « Seul » est une épithète détachée." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 3 : COD, COI ou CC ?",
              question:
                "Identifiez la fonction du groupe souligné :\na) « Il offre <u>des fleurs</u>. »   b) « Elle rêve <u>de voyages</u>. »   c) « Il travaille <u>avec soin</u>. »   d) « Je doute <u>de sa sincérité</u>. »   e) « Il lit <u>un roman</u>. »   f) « Ils partent <u>demain matin</u>. »",
              correction: [
                { type: "line", label: "a)", text: "**des fleurs** → COD (« Il les offre »)" },
                { type: "line", label: "b)", text: "**de voyages** → COI (« Elle en rêve »)" },
                { type: "line", label: "c)", text: "**avec soin** → CC de manière (mobile et supprimable)" },
                { type: "line", label: "d)", text: "**de sa sincérité** → COI (« Il en doute »)" },
                { type: "line", label: "e)", text: "**un roman** → COD (« Il le lit »)" },
                { type: "line", label: "f)", text: "**demain matin** → CC de temps (mobile et supprimable)" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 4 : Sujet et nature du sujet",
              question:
                "Identifiez le sujet et précisez sa nature :\na) « Les enfants courent dans le jardin. »   b) « Écrire est un plaisir. »   c) « Il est tard. »   d) « Que tu partes m'attriste. »   e) « Monte en moi une humble flamme. »",
              correction: [
                { type: "line", label: "a)", text: "Sujet : **Les enfants** → GN" },
                { type: "line", label: "b)", text: "Sujet : **Écrire** → verbe à l'infinitif (infinitif sujet)" },
                { type: "line", label: "c)", text: "Sujet : **Il** → pronom personnel impersonnel (sujet grammatical, sans référent réel)" },
                { type: "line", label: "d)", text: "Sujet : **Que tu partes** → proposition subordonnée conjonctive" },
                { type: "line", label: "e)", text: "Sujet : **une humble flamme** → GN (sujet postposé)" },
                { type: "note", text: "⚠️ En e), « en moi » n'est pas le sujet mais un CC de lieu : le sujet est le GN postposé." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 5 : Associer chaque groupe à sa fonction",
              question:
                "Fonctions possibles : sujet · attribut du sujet · COD · COI · CC · CDN · épithète · apposition · apostrophe.\na) « La maison <u>de Pierre</u> est grande. »   b) « <u>Mes amis</u>, écoutez-moi. »   c) « Hugo, <u>grand poète romantique</u>, vécut longtemps. »   d) « Il devient <u>professeur</u>. »   e) « Elle porte une <u>belle</u> robe. »   f) « Il part <u>pour fuir</u>. »",
              correction: [
                { type: "line", label: "a)", text: "**de Pierre** → CDN du nom « maison »" },
                { type: "line", label: "b)", text: "**Mes amis** → apostrophe (interpelle, sans lien syntaxique)" },
                { type: "line", label: "c)", text: "**grand poète romantique** → apposition (entre virgules, se rapporte à « Hugo »)" },
                { type: "line", label: "d)", text: "**professeur** → attribut du sujet « il » (verbe d'état « devient »)" },
                { type: "line", label: "e)", text: "**belle** → épithète liée du nom « robe »" },
                { type: "line", label: "f)", text: "**pour fuir** → CC de but (groupe infinitif prépositionnel)" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 6 : Complément du verbe ou circonstance ?",
              question:
                "Identifiez la fonction du groupe souligné en justifiant par la question après le verbe et, si besoin, par la suppression :\na) « Il téléphone <u>à sa mère</u>. »   b) « Elle raconte <u>son voyage</u>. »   c) « Ils habitent <u>à Paris</u>. »   d) « <u>Le matin</u>, il lit. »",
              correction: [
                { type: "line", label: "a)", text: "**à sa mère** → COI du verbe « téléphone » : il téléphone à qui ? à sa mère." },
                { type: "line", label: "b)", text: "**son voyage** → COD du verbe « raconte » : elle raconte quoi ? son voyage, sans préposition." },
                { type: "line", label: "c)", text: "**à Paris** → complément essentiel de lieu : il habite où ? à Paris ; « Ils habitent » seul est incomplet." },
                { type: "line", label: "d)", text: "**Le matin** → CC de temps : le groupe est supprimable (« il lit ») et déplaçable (« il lit le matin »)." },
                { type: "note", text: "⚠️ La question après le verbe aide à repérer COD et COI, mais elle ne suffit pas pour les lieux : il faut aussi tester la suppression." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 7 : CDN ou CC ?",
              question:
                "Identifiez la fonction du groupe souligné :\na) « le chien <u>du voisin</u> »   b) « Il travaille <u>avec courage</u>. »   c) « un acte <u>de courage</u> »   d) « Elle revient <u>de Paris</u>. »   e) « la gare <u>de Paris</u> »",
              correction: [
                { type: "line", label: "a)", text: "**du voisin** → CDN (dans le GN, non mobile)" },
                { type: "line", label: "b)", text: "**avec courage** → CC de manière (mobile et supprimable)" },
                { type: "line", label: "c)", text: "**de courage** → CDN du nom « acte » (non mobile)" },
                { type: "line", label: "d)", text: "**de Paris** → CC de lieu (mobile et supprimable)" },
                { type: "line", label: "e)", text: "**de Paris** → CDN du nom « gare » (non mobile)" },
                { type: "note", text: "⚠️ Même préposition, deux fonctions : le test de mobilité et de suppression est décisif." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 8 : Toutes fonctions mêlées",
              question:
                "Identifiez la fonction du groupe souligné :\na) « Je <u>le</u> crois <u>sincère</u>. »   b) « Il offre <u>des roses</u> <u>à sa femme</u>. »   c) « <u>Épuisée</u>, elle s'endormit. »   d) « Ils ont élu Paola <u>présidente</u>. »",
              correction: [
                { type: "line", label: "a)", text: "**sincère** → attribut du COD « le » : ce n'est pas « je » qui est sincère, mais « le » (« il est sincère »)" },
                { type: "line", label: "b)", text: "**des roses** → COD ; **à sa femme** → COS" },
                { type: "line", label: "c)", text: "**Épuisée** → épithète détachée du sujet « elle » (pas de verbe d'état)" },
                { type: "line", label: "d)", text: "**présidente** → attribut du COD « Paola » (« Paola est présidente »)" },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : Analyser",
              sub: "Réponse rédigée, justification exigée, cas limites",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 9 : Justifier par un test",
              question:
                "Justifiez la fonction par un test grammatical explicite :\na) « Elle aime son métier. » (COD ?)\nb) « Il obéit à ses parents. » (COI ?)\nc) « Les enfants jouent dehors. » (sujet ?)",
              correction: [
                { type: "line", label: "a)", text: "**son métier** → COD du verbe « aime ». Deux tests le confirment : 1) question après le verbe : « elle aime quoi ? » → « son métier », sans préposition ; 2) pronominalisation : « Elle l'aime ». Le groupe complète directement le verbe." },
                { type: "line", label: "b)", text: "**à ses parents** → COI du verbe « obéit ». Deux tests le confirment : 1) question après le verbe : « il obéit à qui ? » → « à ses parents » ; 2) pronominalisation : « Il leur obéit ». La préposition « à » est imposée par le verbe « obéir à »." },
                { type: "line", label: "c)", text: "**Les enfants** → sujet du verbe « jouent ». Test : encadrement par « c'est… qui » → « Ce sont les enfants qui jouent dehors ». Le groupe commande l'accord du verbe à la 3e personne du pluriel." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 10 : Le piège de « à »",
              objectifTag: "COD / COI / CC / COS",
              question:
                "« à » introduit des fonctions différentes. Identifiez-les :\na) « Il pense <u>à son avenir</u>. »   b) « Il court <u>à toute vitesse</u>. »   c) « Il habite <u>à Bordeaux</u>. »   d) « Il donne un livre <u>à sa sœur</u>. »",
              correction: [
                { type: "line", label: "a)", text: "**à son avenir** → COI (« Il y pense », non supprimable)" },
                { type: "line", label: "b)", text: "**à toute vitesse** → CC de manière (mobile et supprimable)" },
                { type: "line", label: "c)", text: "**à Bordeaux** → complément essentiel de lieu (« Il habite » seul est bancal)" },
                { type: "line", label: "d)", text: "**à sa sœur** → COS (COD = « un livre »)" },
                { type: "note", text: "⚠️ « à » introduit COI, CC ou COS selon le contexte : les tests de suppression et de pronominalisation sont indispensables." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 11 : Fonction fausse, fonction correcte",
              question:
                "Expliquez pourquoi la fonction entre parenthèses est fausse, donnez la bonne :\na) « <u>Heureuse</u>, elle entra dans la pièce. » (attribut du sujet ?)\nb) « Le livre <u>de Paul</u> est sur la table. » (CC de lieu ?)\nc) « <u>Mes chers amis</u>, je vous remercie. » (sujet ?)\nd) « Il semble <u>content</u>. » (épithète liée ?)",
              correction: [
                { type: "line", label: "a)", text: "Pas attribut du sujet (aucun verbe d'état) → **épithète détachée** du sujet « elle »." },
                { type: "line", label: "b)", text: "Pas CC de lieu (« de Paul » non mobile) → **CDN** du nom « livre »." },
                { type: "line", label: "c)", text: "Pas sujet (aucun lien avec un verbe, supprimable) → **apostrophe**." },
                { type: "line", label: "d)", text: "Pas épithète liée (« content » séparé du sujet par « semble ») → **attribut du sujet**." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 12 : Verbes transitifs indirects",
              objectifTag: "COD / COI",
              question:
                "Identifiez la fonction du groupe souligné. Attention à la préposition qui introduit le groupe : elle fait partie de la construction du verbe et peut changer l'analyse.\na) « Il ressemble <u>à son père</u>. »   b) « Elle nuit <u>à ses intérêts</u>. »   c) « Il joue <u>de la guitare</u>. »   d) « Ils ont besoin <u>de repos</u>. »",
              correction: [
                { type: "line", label: "a)", text: "**à son père** → COI (ressembler À ; « Il lui ressemble »)" },
                { type: "line", label: "b)", text: "**à ses intérêts** → COI (nuire À ; « Elle y nuit »)" },
                { type: "line", label: "c)", text: "**de la guitare** → COI (jouer DE ; « Il en joue »)" },
                { type: "line", label: "d)", text: "**de repos** → COI (avoir besoin DE ; « Ils en ont besoin »)" },
                { type: "note", text: "💡 À retenir : obéir à, nuire à, ressembler à, parler à, penser à, jouer de, manquer de, avoir besoin de, se souvenir de sont tous transitifs indirects." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 13 : Sujets complexes",
              question:
                "Identifiez le sujet et sa nature :\na) « Que tu aies réussi me comble de joie. »   b) « Partir serait une erreur. »   c) « Il neige depuis ce matin. »   d) « Tout est possible. »",
              correction: [
                { type: "line", label: "a)", text: "**Que tu aies réussi** → proposition subordonnée conjonctive sujet" },
                { type: "line", label: "b)", text: "**Partir** → verbe à l'infinitif (infinitif sujet)" },
                { type: "line", label: "c)", text: "**Il** → pronom personnel impersonnel (sujet grammatical, sans référent)" },
                { type: "line", label: "d)", text: "**Tout** → pronom indéfini sujet" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 14 : Participe et infinitif",
              question:
                "Analysez la fonction du groupe souligné :\na) « Je le crois <u>parti</u>. »   b) « Elle regarde <u>les enfants jouer</u>. »   c) « Il entend <u>la pluie tomber</u>. »   d) « Elle le trouve <u>charmant</u>. »",
              correction: [
                { type: "line", label: "a)", text: "**parti** → attribut du COD « le » (« il est parti »)" },
                { type: "line", label: "b)", text: "**les enfants jouer** → proposition subordonnée infinitive, COD du verbe « regarde »" },
                { type: "line", label: "c)", text: "**la pluie tomber** → proposition subordonnée infinitive, COD du verbe « entend »" },
                { type: "line", label: "d)", text: "**charmant** → attribut du COD « le » (« il est charmant »)" },
                { type: "note", text: "⚠️ Après un verbe de perception (voir, entendre, regarder, sentir) + infinitif ayant son propre sujet → proposition subordonnée infinitive COD." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 15 : Types de compléments circonstanciels",
              objectifTag: "CC",
              question:
                "Précisez le type de CC (temps, lieu, manière, cause, but, condition, concession, moyen) :\na) « <u>Malgré la pluie</u>, il sortit. »   b) « Il court <u>pour gagner du temps</u>. »   c) « Elle tremblait <u>de peur</u>. »   d) « <u>Si tu viens</u>, je serai heureux. »   e) « Il écrit <u>avec un stylo rouge</u>. »",
              correction: [
                { type: "line", label: "a)", text: "**Malgré la pluie** → CC de concession" },
                { type: "line", label: "b)", text: "**pour gagner du temps** → CC de but" },
                { type: "line", label: "c)", text: "**de peur** → CC de cause" },
                { type: "line", label: "d)", text: "**Si tu viens** → CC de condition" },
                { type: "line", label: "e)", text: "**avec un stylo rouge** → CC de moyen" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 16 : Apposition ou CDN ?",
              objectifTag: "Apposition / CDN",
              question:
                "Distinguez et justifiez :\na) « Paris, <u>capitale de la France</u>, est magnifique. »   b) « La capitale <u>de la France</u> est magnifique. »   c) « Victor Hugo, <u>auteur des Misérables</u>, est né en 1802. »   d) « L'auteur <u>des Misérables</u> est né en 1802. »",
              correction: [
                { type: "line", label: "a)", text: "**capitale de la France** → apposition (entre virgules, se rapporte à « Paris », supprimable)" },
                { type: "line", label: "b)", text: "**de la France** → CDN du nom « capitale » (dans le GN, non mobile)" },
                { type: "line", label: "c)", text: "**auteur des Misérables** → apposition (entre virgules, se rapporte à « Victor Hugo »)" },
                { type: "line", label: "d)", text: "**des Misérables** → CDN du nom « auteur »" },
                { type: "note", text: "💡 Apposition : groupe entre virgules, supprimable. CDN : groupe prépositionnel dans le GN, non mobile." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : Maîtriser",
              sub: "Format tableau du concours, extraits littéraires",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 17 · Extrait littéraire : Émile Zola",
              enonce:
                "« Une femme passa, tenant par la main un petit garçon <u>d'une dizaine d'années</u>. Elle se hâtait, les yeux <u>baissés</u>, <u>pressée d'atteindre sa maison</u> <u>avant la nuit</u>. »\n*(Émile Zola, Germinal, 1885)*",
              question:
                "Précisez la nature et la fonction : « <u>Une femme</u> » · « <u>d'une dizaine d'années</u> » · « <u>baissés</u> » · « <u>avant la nuit</u> » · « <u>pressée d'atteindre sa maison</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Mot / groupe", "Nature", "Fonction"],
                  rows: [
                    ["Une femme", "Groupe nominal", "Sujet du verbe « passa »"],
                    ["d'une dizaine d'années", "GN prépositionnel", "CDN du nom « garçon »"],
                    ["baissés", "Participe passé employé comme adjectif", "Épithète détachée du nom « yeux »"],
                    ["avant la nuit", "GN prépositionnel", "CC de temps du verbe « atteindre »"],
                    ["pressée d'atteindre sa maison", "Adjectif + groupe infinitif prépositionnel", "Épithète détachée du sujet « elle »"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 18 · Extrait littéraire : Guy de Maupassant",
              enonce:
                "« Il aimait <u>les promenades solitaires</u> <u>dans les bois</u>, les longues chevauchées silencieuses, et les soirs d'automne, quand il rentrait <u>seul</u>, il sentait <u>le vide de sa vie</u> s'étendre <u>autour de lui</u>. »\n*(Guy de Maupassant, Bel-Ami, 1885)*",
              question:
                "Précisez la nature et la fonction : « <u>les promenades solitaires</u> » · « <u>dans les bois</u> » · « <u>seul</u> » · « <u>le vide de sa vie</u> » · « <u>autour de lui</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Mot / groupe", "Nature", "Fonction"],
                  rows: [
                    ["les promenades solitaires", "Groupe nominal", "COD du verbe « aimait »"],
                    ["dans les bois", "GN prépositionnel", "CDN du nom « promenades » (ou CC de lieu selon la lecture)"],
                    ["seul", "Adjectif qualificatif", "Épithète détachée du sujet « il »"],
                    ["le vide de sa vie", "Groupe nominal", "COD du verbe « sentait »"],
                    ["autour de lui", "GN prépositionnel", "CC de lieu du verbe « s'étendre »"],
                  ],
                },
                { type: "note", text: "⚠️ « dans les bois » peut s'analyser en CDN ou en CC de lieu : les deux sont défendables si on justifie." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 19 · Extrait littéraire : Colette",
              enonce:
                "« Ma mère, <u>dont</u> le regard ne vieillissait pas, regardait <u>les enfants jouer</u> <u>dans le jardin</u>. Elle souriait, <u>muette</u>, heureuse, et ne disait <u>rien</u>. »\n*(Colette, La Maison de Claudine, 1922)*",
              question:
                "Précisez la nature et la fonction : « <u>dont</u> » · « <u>les enfants jouer</u> » · « <u>dans le jardin</u> » · « <u>muette</u> » · « <u>rien</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Mot / groupe", "Nature", "Fonction"],
                  rows: [
                    ["dont", "Pronom relatif", "CDN du nom « regard » (dépronominalisé : « le regard de ma mère »)"],
                    ["les enfants jouer", "Proposition subordonnée infinitive", "COD du verbe « regardait » (verbe de perception)"],
                    ["dans le jardin", "GN prépositionnel", "CC de lieu du verbe « jouer »"],
                    ["muette", "Adjectif qualificatif", "Épithète détachée du sujet « elle »"],
                    ["rien", "Pronom indéfini", "COD du verbe « disait »"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 20 · Extrait littéraire : Gustave Flaubert",
              enonce:
                "« Elle rêvait <u>des contrées lointaines</u>, des rivages lumineux, des palais <u>de marbre</u> <u>où</u> des fontaines jaillissaient <u>sous des ciels toujours bleus</u>. »\n*(Gustave Flaubert, Madame Bovary, 1857)*",
              question:
                "Précisez la nature et la fonction : « <u>des contrées lointaines</u> » · « <u>de marbre</u> » · « <u>où</u> » · « <u>sous des ciels toujours bleus</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Mot / groupe", "Nature", "Fonction"],
                  rows: [
                    ["des contrées lointaines", "Groupe nominal", "COI du verbe « rêvait » (rêver DE ; « Elle en rêvait »)"],
                    ["de marbre", "GN prépositionnel", "CDN du nom « palais »"],
                    ["où", "Pronom relatif", "CC de lieu du verbe « jaillissaient » (dépronominalisé : « dans les palais »)"],
                    ["sous des ciels toujours bleus", "GN prépositionnel", "CC de lieu du verbe « jaillissaient »"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 21 · Extrait littéraire : Marguerite Duras",
              enonce:
                "« Elle regardait <u>les eaux du fleuve</u> avec une attention <u>que</u> rien ne semblait pouvoir distraire. Peut-être pensait-elle <u>à quelqu'un d'absent</u>, à des jours passés, à une autre vie <u>possible</u>. »\n*(Marguerite Duras, L'Amant, 1984)*",
              question:
                "Précisez la nature et la fonction : « <u>les eaux du fleuve</u> » · « <u>que</u> » · « <u>à quelqu'un d'absent</u> » · « <u>possible</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Mot / groupe", "Nature", "Fonction"],
                  rows: [
                    ["les eaux du fleuve", "Groupe nominal", "COD du verbe « regardait »"],
                    ["que", "Pronom relatif", "COD du verbe « distraire » (dépronominalisé : « distraire cette attention »)"],
                    ["à quelqu'un d'absent", "GN prépositionnel", "COI du verbe « pensait » (penser À quelqu'un)"],
                    ["possible", "Adjectif qualificatif", "Épithète liée du nom « vie »"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 22 · Extrait littéraire : Lola Lafon",
              enonce:
                "« <u>Écrire</u> n'est pas tout à fait un choix : c'est <u>un aveu d'impuissance</u>. On écrit <u>parce qu'on ne sait par quel autre biais attraper le réel</u>. Vivre, <u>sans l'écriture</u>, me va <u>mal</u>. »\n*(Lola Lafon, Quand tu écouteras cette chanson, 2023)*",
              question:
                "Précisez la nature et la fonction : « <u>Écrire</u> » · « <u>un aveu d'impuissance</u> » · « <u>parce qu'on ne sait…</u> » · « <u>sans l'écriture</u> » · « <u>mal</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Mot / groupe", "Nature", "Fonction"],
                  rows: [
                    ["Écrire", "Verbe à l'infinitif", "Sujet du verbe « est »"],
                    ["un aveu d'impuissance", "Groupe nominal", "Attribut du sujet « c' » (verbe « est »)"],
                    ["parce qu'on ne sait…", "Proposition subordonnée circonstancielle", "CC de cause du verbe « écrit »"],
                    ["sans l'écriture", "GN prépositionnel", "CC de manière ou de condition du verbe « va »"],
                    ["mal", "Adverbe de manière", "CC de manière du verbe « va »"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 23 · Extrait littéraire : Victor Hugo",
              enonce:
                "« <u>Les misérables</u> ne manquent pas <u>sur la terre</u>. <u>Partout</u>, hélas, les souffrances sont <u>grandes</u> et les hommes sont las <u>de ne plus croire</u>. »\n*(Victor Hugo, Les Misérables, 1862)*",
              question:
                "Précisez la nature et la fonction : « <u>Les misérables</u> » · « <u>sur la terre</u> » · « <u>Partout</u> » · « <u>grandes</u> » · « <u>de ne plus croire</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Mot / groupe", "Nature", "Fonction"],
                  rows: [
                    ["Les misérables", "Groupe nominal", "Sujet du verbe « manquent »"],
                    ["sur la terre", "GN prépositionnel", "CC de lieu du verbe « manquent »"],
                    ["Partout", "Adverbe de lieu", "CC de lieu du verbe « sont »"],
                    ["grandes", "Adjectif qualificatif", "Attribut du sujet « souffrances »"],
                    ["de ne plus croire", "Groupe infinitif prépositionnel", "CDN de l'adjectif « las » (las DE)"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 24 · Extrait littéraire : Marguerite Yourcenar",
              enonce:
                "« <u>À seize ans</u>, j'ai vu se rouvrir <u>les portes qui me séparaient du monde</u>, je suis monté <u>sur la terrasse</u> du palais <u>pour regarder les nuages</u>, mais ils étaient <u>moins beaux</u> que ceux de tes crépuscules. »\n*(Marguerite Yourcenar, Comment Wang-Fô fut sauvé, Nouvelles orientales, 1963)*",
              question:
                "Précisez la nature et la fonction : « <u>À seize ans</u> » · « <u>les portes qui me séparaient du monde</u> » · « <u>sur la terrasse</u> » · « <u>pour regarder les nuages</u> » · « <u>moins beaux</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Mot / groupe", "Nature", "Fonction"],
                  rows: [
                    ["À seize ans", "GN prépositionnel", "CC de temps du verbe « ai vu »"],
                    ["les portes qui me séparaient du monde", "Groupe nominal (GN + subordonnée relative)", "Sujet du verbe « se rouvrir » (proposition subordonnée infinitive)"],
                    ["sur la terrasse", "GN prépositionnel", "CC de lieu du verbe « suis monté »"],
                    ["pour regarder les nuages", "Groupe infinitif prépositionnel", "CC de but du verbe « suis monté »"],
                    ["moins beaux", "Adjectif qualificatif (au comparatif)", "Attribut du sujet « ils »"],
                  ],
                },
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
              text: "Ces exercices reproduisent le format de la question d'étude de la langue de la Partie 1 : extrait littéraire, tableau nature + fonction, formulation jury. Les exercices calqués sur des sujets récents portent le badge ✦.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 25 : Émile Zola, Germinal",
              enonce:
                "« Une femme passa, <u>tenant</u> par la main un petit garçon <u>d'une dizaine d'années</u>. Elle se hâtait, les yeux <u>baissés</u>, pressée d'atteindre sa maison <u>avant</u> la nuit. »\n*(Émile Zola, Germinal, 1885)*",
              question: "Précisez la nature et la fonction : « <u>Une femme</u> » · « <u>tenant</u> » · « <u>d'une dizaine d'années</u> » · « <u>baissés</u> » · « <u>avant</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Mot / groupe", "Nature", "Fonction"],
                  rows: [
                    ["Une femme", "Groupe nominal", "Sujet du verbe « passa »"],
                    ["tenant", "Participe présent (forme verbale non conjuguée)", "Épithète détachée (apposée) du sujet « femme », équivaut à « qui tenait… »"],
                    ["d'une dizaine d'années", "GN prépositionnel", "CDN du nom « garçon »"],
                    ["baissés", "Participe passé employé comme adjectif", "Épithète détachée du nom « yeux »"],
                    ["avant", "Préposition", "Introduit le GN « la nuit », CC de temps"],
                  ],
                },
                { type: "note", text: "⚠️ « tenant » = participe présent, à distinguer du gérondif (« en tenant ») et de l'adjectif verbal (« une eau courante », qui s'accorde). Ce n'est pas une proposition participiale : celle-ci suppose un sujet propre, distinct de celui de la principale." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 26 : Guy de Maupassant, Bel-Ami",
              enonce:
                "« Il aimait les promenades <u>solitaires</u> dans les bois, les longues chevauchées silencieuses, et les soirs d'automne, <u>quand</u> il rentrait <u>seul</u>, il sentait <u>le vide de sa vie</u> s'étendre autour de lui. »\n*(Guy de Maupassant, Bel-Ami, 1885)*",
              question: "Précisez la nature et la fonction : « <u>solitaires</u> » · « <u>quand</u> » · « <u>seul</u> » · « <u>le vide de sa vie</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Mot / groupe", "Nature", "Fonction"],
                  rows: [
                    ["solitaires", "Adjectif qualificatif", "Épithète liée du nom « promenades »"],
                    ["quand", "Conjonction de subordination", "Introduit la subordonnée circonstancielle de temps"],
                    ["seul", "Adjectif qualificatif", "Épithète détachée du sujet « il »"],
                    ["le vide de sa vie", "Groupe nominal", "COD du verbe « sentait »"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 27 : Colette, La Maison de Claudine",
              enonce:
                "« Ma mère, <u>dont</u> le regard ne vieillissait pas, regardait les enfants jouer dans le jardin. Elle souriait, <u>muette</u>, <u>heureuse</u>, et ne disait <u>rien</u>. »\n*(Colette, La Maison de Claudine, 1922)*",
              question: "Précisez la nature et la fonction : « <u>dont</u> » · « <u>muette</u> » · « <u>heureuse</u> » · « <u>rien</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Mot / groupe", "Nature", "Fonction"],
                  rows: [
                    ["dont", "Pronom relatif", "CDN du nom « regard » (dépronominalisé : « le regard de ma mère »)"],
                    ["muette", "Adjectif qualificatif", "Épithète détachée du sujet « elle »"],
                    ["heureuse", "Adjectif qualificatif", "Épithète détachée du sujet « elle »"],
                    ["rien", "Pronom indéfini", "COD du verbe « disait »"],
                  ],
                },
                { type: "note", text: "⚠️ La fonction de « dont » se trouve au cas par cas par dépronominalisation : ici CDN, ailleurs COI. On ne généralise jamais." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 28 : Gustave Flaubert, Madame Bovary",
              enonce:
                "« Elle rêvait des contrées <u>lointaines</u>, des rivages lumineux, des palais <u>de marbre</u> <u>où</u> des fontaines jaillissaient sous des ciels <u>toujours</u> bleus. »\n*(Gustave Flaubert, Madame Bovary, 1857)*",
              question: "Précisez la nature et la fonction : « <u>lointaines</u> » · « <u>de marbre</u> » · « <u>où</u> » · « <u>toujours</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Mot / groupe", "Nature", "Fonction"],
                  rows: [
                    ["lointaines", "Adjectif qualificatif", "Épithète liée du nom « contrées »"],
                    ["de marbre", "GN prépositionnel", "CDN du nom « palais »"],
                    ["où", "Pronom relatif", "CC de lieu du verbe « jaillissaient » (dépronominalisé : « dans les palais »)"],
                    ["toujours", "Adverbe de temps", "Modifie l'adjectif « bleus »"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format concours récent",
              title: "Exercice 29 : Marguerite Yourcenar, Nouvelles orientales",
              enonce:
                "« un <u>tapis dont</u> elles savaient par cœur le dessin » · « les provinces <u>de l'Empire</u> » · « Tu <u>m'</u>as menti, Wang-Fô, <u>vieil imposteur</u> »\n*(Marguerite Yourcenar, Comment Wang-Fô fut sauvé, Nouvelles orientales, 1963)*",
              question: "Précisez la nature et la fonction : « <u>dont</u> » · « <u>de l'Empire</u> » · « <u>m'</u> » · « <u>vieil imposteur</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Mot / groupe", "Nature", "Fonction"],
                  rows: [
                    ["dont", "Pronom relatif", "CDN du nom « dessin » (dépronominalisé : « le dessin de ce tapis »)"],
                    ["de l'Empire", "GN prépositionnel", "CDN du nom « provinces »"],
                    ["m'", "Pronom personnel (1re personne du singulier)", "COI du verbe « mentir » (mentir À quelqu'un)"],
                    ["vieil imposteur", "Groupe nominal", "Apostrophe (interpelle l'interlocuteur, aucun lien syntaxique)"],
                  ],
                },
                { type: "note", text: "⚠️ Piège classique : « m' » = COI (mentir À quelqu'un, jamais COD). Et « vieil imposteur » = apostrophe, pas apposition ni COD." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format concours récent",
              title: "Exercice 30 : Lola Lafon, Quand tu écouteras cette chanson",
              enonce:
                "« <u>Écrire</u> n'<u>est</u> pas tout à fait un choix : c'<u>est</u> un aveu d'impuissance. On <u>écrit</u> parce qu'on ne sait par quel autre biais attraper le réel. Vivre, sans l'écriture, me <u>va</u> mal. »\n*(Lola Lafon, Quand tu écouteras cette chanson, 2023)*",
              question:
                "Identifiez les sujets des verbes soulignés, leur nature et leur fonction : « <u>est</u> » (1re occ.) · « <u>est</u> » (2e occ.) · « <u>écrit</u> » · « <u>va</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Sujet", "Nature du sujet", "Fonction"],
                  rows: [
                    ["est (1re occ.)", "Écrire", "Verbe à l'infinitif", "Sujet du verbe « est »"],
                    ["est (2e occ.)", "c'", "Pronom démonstratif élidé", "Sujet du verbe « est »"],
                    ["écrit", "On", "Pronom personnel indéfini", "Sujet du verbe « écrit »"],
                    ["va", "Vivre", "Verbe à l'infinitif", "Sujet du verbe « va »"],
                  ],
                },
                { type: "note", text: "⚠️ Un infinitif peut être sujet. « c' » est un pronom démonstratif élidé, à ne pas confondre avec le déterminant « ce »." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 31 : Victor Hugo (poème)",
              enonce:
                "« <u>Jugez</u> ! <u>Insensées</u> choses qui nous font <u>rêver</u> ! Monte en moi une humble flamme. <u>Je</u> ne sais ce que je fais distinguer. »",
              question: "Précisez la nature et la fonction : « <u>Jugez</u> » · « <u>Insensées</u> » · « <u>rêver</u> » · « <u>Je</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Mot", "Nature", "Fonction"],
                  rows: [
                    ["Jugez", "Verbe « juger » à l'impératif présent, 2e pers. pluriel", "Verbe de la proposition principale (pas de sujet exprimé à l'impératif)"],
                    ["Insensées", "Adjectif qualificatif (fém. pluriel)", "Épithète liée du nom « choses »"],
                    ["rêver", "Verbe à l'infinitif", "COD du verbe « font » (construction faire + infinitif)"],
                    ["Je", "Pronom personnel, 1re pers. sing.", "Sujet du verbe « sais »"],
                  ],
                },
                { type: "note", text: "⚠️ « Insensées » n'est pas un participe passé (il n'existe pas de verbe « insenser ») : c'est un adjectif qualificatif qui s'accorde avec « choses »." },
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
              text: "Ces exercices reprennent des erreurs fréquentes relevées dans les copies. Identifier l'erreur d'analyse, la corriger et l'expliquer clairement fait aussi partie des gestes professionnels à construire pour enseigner la grammaire.",
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 32 · Réponse à corriger : « dont »",
              enonce: "Réponse d'un candidat : « **dont** : pronom relatif / **fonction : pronom relatif** », pour la phrase *« La maison dont il parlait était magnifique. »*",
              question: "Identifiez l'erreur et rédigez la réponse attendue.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Nature : pronom relatif (correct)" },
                    { text: "Fonction donnée par le candidat : « pronom relatif »", bad: true },
                    { text: "Fonction attendue : COI du verbe « parler de » (dépronominalisé : « il parlait de la maison »)" },
                  ],
                },
                { type: "note", text: "⚠️ Erreur très fréquente : répéter la nature en guise de fonction. Méthode : remplacer « dont » par « de + GN », puis identifier la fonction de ce groupe." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 33 · Réponse à corriger : « Seul »",
              enonce: "Réponse d'un candidat : « **Seul** : attribut du sujet « il » », pour la phrase *« Seul, il repartit. »*",
              question: "Identifiez l'erreur et rédigez la réponse attendue.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Erreur : épithète détachée confondue avec attribut du sujet", bad: true },
                    { text: "L'attribut du sujet exige un verbe d'état (être, paraître, sembler…) entre le sujet et l'adjectif. Ici, aucun." },
                    { text: "Réponse attendue : « Seul » → adjectif qualificatif, épithète détachée du sujet « il »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 34 · Réponse à corriger : « à Paris »",
              enonce: "Réponse d'un candidat : « **à Paris** : CC de lieu (supprimable) », pour la phrase *« Il habite à Paris. »*",
              question: "Identifiez l'erreur et expliquez.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Erreur : CC libre confondu avec complément essentiel", bad: true },
                    { text: "« Il habite » seul est bancal : « à Paris » n'est pas supprimable" },
                    { text: "Réponse attendue : « à Paris » → GN prépositionnel, complément essentiel de lieu du verbe « habiter »" },
                  ],
                },
                { type: "note", text: "💡 Double test : mobilité ET suppression. Si l'un échoue, ce n'est pas un CC libre." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 35 · Réponse à corriger : « vieil imposteur »",
              enonce: "Réponse d'un candidat : « **vieil imposteur** : apposition au sujet « Tu » », pour la phrase *« Tu m'as menti, vieil imposteur. »*",
              question: "Cette analyse est-elle correcte ? Justifiez et proposez la réponse attendue.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Erreur : apostrophe confondue avec apposition", bad: true },
                    { text: "L'apposition entretient un lien syntaxique avec un nom. Ici, « vieil imposteur » interpelle l'interlocuteur, sans lien syntaxique." },
                    { text: "Réponse attendue : « vieil imposteur » → GN, apostrophe (aucune fonction syntaxique)" },
                  ],
                },
                { type: "note", text: "💡 Apposition = lien sémantique ET syntaxique avec un nom. Apostrophe = lien avec l'interlocuteur, hors syntaxe. Test : supprimer le groupe ; « Tu m'as menti » reste complet." },
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
                  question: "Quelle démarche suivre pour identifier la fonction d'un groupe ?",
                  answer:
                    "1. Repérer à quoi le groupe se rattache : au verbe, à un nom, ou à l'interlocuteur.\n2. S'il dépend du verbe : chercher sujet, COD/COI, attribut, complément d'agent ou CC.\n3. S'il dépend d'un nom : chercher CDN, épithète ou apposition.\n4. Justifier avec une manipulation adaptée : « c'est… qui », question après le verbe, passif, déplacement/suppression.",
                },
                {
                  question: "Comment distinguer attribut du sujet et épithète détachée ?",
                  answer:
                    "**Attribut du sujet** : exige un verbe d'état entre le sujet et l'adjectif (« Il est fatigué »).\n**Épithète détachée** : aucun verbe d'état, adjectif séparé par une virgule (« Fatigué, il s'endormit »).",
                  astuce: "⚠️ « Seul, il repartit » → épithète détachée, pas attribut.",
                },
                {
                  question: "Quelle est la différence entre CDN et CC ?",
                  answer:
                    "**CDN** : à l'intérieur du GN, non mobile (« le livre de Pierre »).\n**CC** : hors du GN, mobile en tête de phrase ET supprimable (« Il travaille à Paris »).",
                  astuce: "💡 Test : déplacer en tête de phrase. Possible → CC. Impossible → CDN.",
                },
                {
                  question: "Comment trouver la fonction du pronom relatif « dont » ?",
                  answer:
                    "On dépronominalise : remplacer « dont » par « de + GN antécédent ».\n« la maison dont il rêvait » → « il rêvait de la maison » → COI.\n« un tapis dont elles savaient le dessin » → « le dessin de ce tapis » → CDN.",
                  astuce: "⚠️ Erreur classique : écrire « pronom relatif » comme fonction, c'est la nature.",
                },
                {
                  question: "Quelle est la différence entre apposition et apostrophe ?",
                  answer:
                    "**Apposition** : groupe entre virgules qui désigne la même réalité qu'un nom de la phrase, avec lien syntaxique (« Hugo, grand poète, vécut longtemps »).\n**Apostrophe** : groupe qui interpelle l'interlocuteur, sans lien syntaxique (« Tu m'as menti, vieil imposteur »).",
                  astuce: "💡 L'apostrophe est toujours supprimable sans altérer la phrase.",
                },
                {
                  question: "« m' » dans « Tu m'as menti » : COD ou COI ?",
                  answer:
                    "**COI**. Le verbe « mentir » se construit avec un COI (mentir à quelqu'un). Avec « m' », la préposition n'apparaît plus directement : on retrouve l'idée de « à moi ».",
                  astuce: "⚠️ Erreur très fréquente : beaucoup de candidats répondent COD.",
                },
                {
                  question: "Comment distinguer un CC de lieu libre d'un complément essentiel de lieu ?",
                  answer:
                    "**CC de lieu libre** : mobile ET supprimable (« Il court dans le parc » → « Il court »).\n**Complément essentiel** : non supprimable sans vider la phrase (« Il habite à Paris » → « Il habite » est bancal).",
                  astuce: "💡 Si la suppression rend la phrase incomplète → complément essentiel.",
                },
                {
                  question: "Quels verbes transitifs indirects sont souvent pris pour des transitifs directs ?",
                  answer:
                    "Verbes en À : obéir à, nuire à, ressembler à, parler à, penser à, téléphoner à, mentir à.\nVerbes en DE : jouer de, manquer de, avoir besoin de, se souvenir de, douter de.",
                  astuce: "💡 Pronominalisation impossible par le/la/les → ce n'est pas un COD.",
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
              center: { title: "Fonctions syntaxiques", subtitle: "Le rôle dans la phrase" },
              branches: [
                {
                  title: "Nature vs fonction",
                  lines: ["Nature = ce qu'est le mot (stable)", "Fonction = son rôle (variable)", "Toujours donner les deux"],
                  variant: "blue",
                },
                {
                  title: "Liées au verbe",
                  lines: ["Sujet · COD · COI · COS", "Attribut du sujet · attribut du COD", "Complément d'agent · CC"],
                  variant: "blue",
                },
                {
                  title: "Dans le groupe nominal",
                  lines: ["CDN · épithète", "Apposition", "(Apostrophe : hors syntaxe)"],
                  variant: "green",
                },
                {
                  title: "Démarche",
                  lines: ["Dépend du verbe ?", "Dépend d'un nom ?", "Justifier par une manipulation"],
                  variant: "green",
                },
                {
                  title: "Pièges classiques",
                  lines: ["Sujet inversé", "COD ≠ COI (préposition)", "Attribut ≠ épithète détachée", "CC libre ≠ complément essentiel"],
                  variant: "yellow",
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
