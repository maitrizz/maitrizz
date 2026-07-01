import type { Fiche } from "@/components/fiche/types";
import { EXERCICES_FONCTIONS_SYNTAXIQUES } from "./exercices-fonctions-syntaxiques";
import { COPIES_FONCTIONS_SYNTAXIQUES } from "./copies-fonctions-syntaxiques";

const SAVOIR_FAIRE = [
  { id: "sujet", label: "Sujet" },
  { id: "cod-coi", label: "COD/COI" },
  { id: "attribut", label: "Attribut" },
  { id: "cc", label: "Compléments circonstanciels" },
  { id: "epithete-apposition", label: "Épithète/apposition" },
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
  metaTitle: "Fonctions syntaxiques · Fiche de révision CRPE",
  metaDescription:
    "Les fonctions syntaxiques au CRPE : sujet, attribut, COD, COI, complément circonstanciel, épithète, apposition. Tests de repérage, méthode, exercices corrigés.",
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
              text: "Identifier une fonction, c'est comprendre le rôle d'un mot ou d'un groupe dans la phrase. Il n'y a pas de hasard : on suit toujours le même chemin, presque comme un algorithme, jusqu'à ce que les réflexes deviennent automatiques. Face à un groupe souligné, demandez-vous d'abord s'il dépend du verbe, d'un nom ou de l'ensemble de la phrase, puis affinez : sujet, complément du verbe, attribut, complément circonstanciel… Cette fiche porte sur la **fonction** ; la **nature** a été travaillée dans la [notion 1](fiche:classes-grammaticales).",
            },
            {
              type: "subsection",
              number: "①",
              title: "Nature et fonction : à ne pas confondre",
              blocks: [
                {
                  type: "paragraph",
                  text: "La **nature** d'un mot ou d'un groupe correspond à ce qu'il est : nom, verbe, adjectif, groupe nominal… Elle est **stable** et ne change pas selon la phrase (voir la [notion 1](fiche:classes-grammaticales)).\n\nLa **fonction** syntaxique, elle, correspond à son **rôle dans la phrase** : sujet, complément, attribut… Elle **dépend du contexte** et peut varier. Un même groupe nominal peut par exemple être sujet dans « Le chat dort » et COD dans « Je regarde le chat ». Au concours, la réponse complète donne **toujours les deux** : nature ET fonction.",
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
                  text: "Ces fonctions précisent un **nom** à l'intérieur du groupe nominal, ou se rattachent à un nom ou à l'interlocuteur. Complément du nom, épithète et apposition sont aussi étudiés comme **expansions du nom** dans la [notion 3 sur le groupe nominal](fiche:groupe-nominal-expansions) : ici, c'est leur **fonction** qui nous intéresse.",
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
                        "« Paul, **ravi**, sourit » : adjectif qualificatif, épithète détachée se rapportant au sujet « Paul »",
                      ],
                      piege: "Sans verbe d'état entre le nom et l'adjectif, c'est une épithète, jamais un attribut du sujet.",
                      test: "Y a-t-il un verbe d'état entre le nom et l'adjectif ? Non → épithète. Oui → attribut.",
                    },
                    {
                      title: "Apposition",
                      definition: "Groupe nominal mis en relation avec un nom ou un pronom, séparé par une virgule, et qui désigne la même réalité.",
                      sousClasses: "**Nature possible :** GN (par convention, on réserve le terme « apposition » au groupe nominal)",
                      exemples: [
                        "« Hugo, **grand poète romantique**, vécut longtemps » : GN, apposition à « Hugo »",
                        "« Paris, **capitale de la France**, est une ville lumière » : GN, apposition à « Paris »",
                      ],
                      piege: "Pour un **adjectif** détaché (« Paul, *ravi*, sourit »), on retient le terme **épithète détachée** ; certaines grammaires l'appellent *apposition de l'adjectif* : les deux désignent la **même fonction** et sont admis. À distinguer du CDN (pas de virgule) et de l'apostrophe (qui interpelle sans lien syntaxique).",
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
              type: "highlightBox",
              variant: "marine",
              title: "Cas très fréquent au concours : la fonction du pronom relatif",
              blocks: [
                {
                  type: "paragraph",
                  text: "Le jury demande très souvent la fonction de *qui, que, dont, où*. Sa **nature** est *pronom relatif* ; sa **fonction** se trouve dans la proposition subordonnée relative, jamais dans la principale. La méthode est toujours la même : on **dépronominalise**, c'est-à-dire qu'on remet l'antécédent à la place du pronom dans la subordonnée, puis on lit la fonction du groupe obtenu. La subordonnée relative elle-même est travaillée dans la [notion 5 sur la phrase complexe](fiche:phrase-complexe).",
                },
                {
                  type: "table",
                  title: "On dépronominalise, puis on lit la fonction",
                  headers: ["Pronom", "On le remplace par…", "Fonction la plus fréquente", "Exemple dépronominalisé"],
                  rows: [
                    ["**qui**", "l'antécédent, devant le verbe", "Sujet du verbe de la relative", "« l'homme **qui** parle » → « l'homme parle » → **sujet**"],
                    ["**que**", "l'antécédent, après le verbe", "COD du verbe de la relative", "« le livre **que** je lis » → « je lis le livre » → **COD**"],
                    ["**dont**", "*de* + l'antécédent", "COI, CDN ou complément de l'adjectif (selon le mot complété)", "« la maison **dont** je rêve » → « je rêve **de** la maison » → **COI**"],
                    ["**où**", "*dans / à* + l'antécédent", "CC de lieu ou de temps", "« la ville **où** je vis » → « je vis **dans** la ville » → **CC de lieu**"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "**À ne pas oublier : le complément de l'adjectif.** Quand *de* dépend d'un **adjectif** et non d'un nom, la fonction est *complément de l'adjectif*, pas CDN : « il est fier **de son travail** » → complément de l'adjectif *fier* ; « las **de ne plus croire** » → complément de l'adjectif *las*.",
                },
              ],
            },
            {
              type: "table",
              title: "Les fonctions en un coup d'œil",
              headers: ["Fonction", "Elle se rattache à…", "Question / test décisif", "Exemple (groupe en gras)"],
              rows: [
                ["**Sujet**", "au verbe (qu'il commande)", "Encadrement « c'est… qui »", "« **Le chat** dort »"],
                ["**COD**", "au verbe, sans préposition", "qui ? quoi ? + pronom *le/la/les*", "« Elle mange **une pomme** »"],
                ["**COI**", "au verbe, préposition *à / de*", "à/de qui ? quoi ? + pronom *lui/y/en*", "« Il pense **à ses vacances** »"],
                ["**COS**", "au verbe, 2ᵉ complément", "« à qui ? » en présence d'un COD", "« Il offre des fleurs **à sa mère** »"],
                ["**Attribut du sujet**", "au sujet, via un verbe d'état", "Remplacer le verbe par « être + … »", "« Il semble **fatigué** »"],
                ["**Attribut du COD**", "au COD, via trouver/croire/élire…", "« COD + être + … »", "« Je le crois **sincère** »"],
                ["**Complément d'agent**", "au verbe passif (*par / de*)", "Repasser à la voix active", "« mangée **par le chat** »"],
                ["**Complément circonstanciel**", "à la phrase (circonstance)", "Mobile **ET** supprimable", "« **Demain**, il part »"],
                ["**Complément du nom (CDN)**", "à un nom, dans le GN", "Non mobile hors du GN", "« le livre **de Pierre** »"],
                ["**Épithète**", "à un nom (adjectif)", "Adjectif lié ou détaché, sans verbe d'état", "« une maison **bleue** »"],
                ["**Apposition**", "à un nom (entre virgules)", "Désigne la même réalité, supprimable", "« Hugo, **grand poète**, … »"],
                ["**Apostrophe**", "à l'interlocuteur (interpelle)", "Supprimable, hors syntaxe", "« **Mes amis**, écoutez-moi »"],
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
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 1 (maternelle) :** aucune terminologie syntaxique. Les élèves comprennent à l'oral « qui fait quoi » dans une phrase simple (qui fait l'action, sur quoi elle porte). C'est le socle implicite du futur repérage du sujet et du complément.\n\n**Cycle 2 (CP-CE2) :** on installe le **sujet** et le **verbe** par manipulation (déplacer, remplacer par un pronom, encadrer par « c'est… qui »). Les élèves repèrent « de qui ou de quoi on parle » (le sujet) et « ce qu'on en dit » (le verbe et son groupe).\n\n**Cycle 3 (CM1-6e) :** la phrase s'analyse en **sujet**, **prédicat** (ce qu'on dit du sujet, autour du verbe), puis **complément de phrase** (déplaçable et supprimable, équivalent du CC) et **complément du verbe** (non déplaçable, équivalent du COD/COI). On introduit aussi le **complément du nom** et l'**attribut du sujet**. Les attendus par cycle figurent dans les [programmes de français en vigueur](https://eduscol.education.fr/137/cycle-2-et-cycle-3).\n\n**Ce que vous devez savoir dire :** « À l'école, on ne parle pas tout de suite de COD ou de COI : on construit d'abord le couple sujet / prédicat au cycle 3, puis on distingue le complément de phrase (déplaçable, supprimable) du complément du verbe (lié au verbe). Le métalangage du concours (COD, COI, CC, attribut) prolonge et précise ces repères construits dès le cycle 2 par la manipulation. »",
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
              title: "Une fonction se trouve par étapes, jamais au feeling",
              text: "Le jour du concours, la consigne est presque toujours la même : « Donnez la fonction du mot ou du groupe souligné. » On suit alors un chemin unique : d'abord **situer** le groupe (dépend-il du verbe, d'un nom, ou interpelle-t-il quelqu'un ?), puis **tester** par une manipulation (encadrement, question, pronominalisation, déplacement ou suppression), enfin **rédiger** la réponse en donnant toujours la **nature ET la fonction**, justifiées par le test. Chaque démarche ci-dessous est déroulée de bout en bout sur un seul exemple, jusqu'à la phrase à recopier le jour J.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "La démarche complète : situer, tester, rédiger",
              intro:
                "*Question typique : « Donnez la fonction du groupe souligné : Le soir, les enfants regardent <u>un film</u>. »*",
              steps: [
                {
                  number: "1",
                  text: "**Situer le groupe.** Se rattache-t-il au verbe, à un nom, ou interpelle-t-il quelqu'un ? Ici, *un film* complète le verbe *regardent* : on cherche donc une fonction liée au verbe (sujet, COD, COI, attribut, complément d'agent ou CC).",
                  example: { lines: ["*Le soir* / *les enfants* / *regardent* / *un film* → *un film* dépend du verbe *regardent*."] },
                },
                {
                  number: "2",
                  text: "**Poser la question après le verbe.** Sans préposition → piste COD ; avec *à* ou *de* → piste COI.",
                  example: { lines: ["« les enfants regardent **quoi** ? » → *un film*, sans préposition → piste COD."] },
                },
                {
                  number: "3",
                  text: "**Confirmer par un test.** Pour un COD : pronominalisation par *le / la / les*, et passif souvent possible.",
                  example: {
                    lines: [
                      "« Les enfants **le** regardent » → pronominalisation par *le* → COD.",
                      "« Un film est regardé par les enfants » → passif possible → COD confirmé.",
                    ],
                  },
                  warn: "⚠️ Le geste décisif : c'est la **préposition** (ou son absence) qui sépare le COD du COI, pas le sens du verbe.",
                },
                {
                  number: "💡",
                  text: "**Écarter les autres pistes.** *un film* n'est pas mobile en tête de phrase comme le serait un CC (*Le soir*, lui, l'est) et ne dépend d'aucun nom : la piste COD est la seule qui résiste aux tests.",
                },
                {
                  number: "✅",
                  text: "**Réponse attendue (formulation modèle) :** « *un film* est un **groupe nominal**, **COD** du verbe *regardent* : il complète directement le verbe (les enfants regardent quoi ? un film), sans préposition, et se pronominalise par *le* (les enfants *le* regardent). »",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Trancher entre COD, COI et complément essentiel",
              intro:
                "*Question typique : « Donnez la fonction du groupe souligné : Il téléphone <u>à sa mère</u> tous les dimanches. »*",
              steps: [
                {
                  number: "1",
                  text: "**Situer le groupe.** *à sa mère* complète le verbe *téléphone* : c'est une fonction liée au verbe. La préposition *à* écarte d'emblée le COD, qui est toujours direct (sans préposition).",
                  example: { lines: ["« il téléphone **à qui** ? » → *à sa mère* → complément construit avec *à*."] },
                },
                {
                  number: "2",
                  text: "**La préposition est-elle imposée par le verbe ?** Le verbe se construit *téléphoner à quelqu'un* : la préposition appartient à la construction du verbe → piste COI.",
                  example: { lines: ["*téléphoner* **à** quelqu'un → la préposition fait partie du verbe → piste COI."] },
                },
                {
                  number: "3",
                  text: "**Confirmer par la pronominalisation.** Un COI en *à + personne* se remplace par *lui / leur* ; le passif est impossible.",
                  example: {
                    lines: [
                      "« Il **lui** téléphone » → pronominalisation par *lui* → COI confirmé.",
                      "Passif impossible (*à sa mère est téléphonée* est agrammatical).",
                    ],
                  },
                  warn: "⚠️ Piège à éviter : ne pas confondre avec le **complément essentiel de lieu**. Dans *Il habite à Paris*, *à Paris* n'est ni pronominalisable par *lui*, ni supprimable (*Il habite* est bancal) : c'est un complément essentiel, ni COI, ni CC libre.",
                },
                {
                  number: "💡",
                  text: "**Écarter le CC.** Un CC de manière comme *à toute vitesse* serait mobile et supprimable. Ici, *à sa mère* répond à *à qui ?* et n'est pas supprimable sans vider le verbe : c'est bien un complément d'objet.",
                },
                {
                  number: "✅",
                  text: "**Réponse attendue (formulation modèle) :** « *à sa mère* est un **groupe nominal prépositionnel**, **COI** du verbe *téléphoner* : le verbe se construit avec la préposition *à* (téléphoner à quelqu'un) et le groupe se pronominalise par *lui* (il *lui* téléphone). »",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Trancher entre attribut du sujet et épithète détachée",
              intro:
                "*Question typique : « Donnez la fonction du mot souligné : <u>Heureuse</u>, elle entra dans la pièce. »*",
              steps: [
                {
                  number: "1",
                  text: "**Chercher un verbe d'état.** L'attribut du sujet relie le sujet à une qualité **par l'intermédiaire d'un verbe d'état** (être, paraître, sembler, devenir, rester, demeurer, avoir l'air, passer pour).",
                  example: { lines: ["« *Heureuse*, elle entra » → le verbe est *entra* (verbe d'action), pas un verbe d'état."] },
                },
                {
                  number: "2",
                  text: "**Conclure selon la présence du verbe d'état.** Pas de verbe d'état entre le sujet et l'adjectif → ce n'est pas un attribut, mais une **épithète détachée** (séparée par une virgule, mobile).",
                  example: { lines: ["« Elle entra dans la pièce, *heureuse* » → l'adjectif reste mobile et isolé par une virgule → épithète détachée."] },
                  warn: "⚠️ Le geste décisif : chercher le verbe d'état. *Elle semblait heureuse* → attribut du sujet ; *Heureuse, elle entra* → épithète détachée.",
                },
                {
                  number: "💡",
                  text: "**Préciser à quel mot l'adjectif se rapporte.** L'épithète détachée se rapporte ici au sujet *elle* : on l'indique explicitement dans la réponse.",
                },
                {
                  number: "✅",
                  text: "**Réponse attendue (formulation modèle) :** « *Heureuse* est un **adjectif qualificatif**, **épithète détachée** se rapportant au sujet *elle* : il n'y a aucun verbe d'état entre le sujet et l'adjectif (le verbe est *entra*), et l'adjectif, isolé par une virgule, reste mobile dans la phrase. »",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Trouver la fonction d'un pronom relatif (qui, que, dont, où)",
              intro:
                "*Question typique : « Donnez la nature et la fonction du mot souligné : La maison <u>dont</u> il rêvait était à vendre. »*",
              steps: [
                {
                  number: "1",
                  text: "**Donner d'abord la nature.** *dont* est un **pronom relatif** : il introduit la proposition subordonnée relative et reprend un antécédent (ici *la maison*). « Pronom relatif » est la nature, jamais la fonction.",
                },
                {
                  number: "2",
                  text: "**Dépronominaliser : reconstruire la subordonnée sans le relatif**, en remettant l'antécédent à la place du pronom.",
                  example: {
                    lines: [
                      "*La maison dont il rêvait* → *il rêvait **de** la maison*.",
                      "Le pronom *dont* équivaut à *de + la maison*.",
                    ],
                  },
                  warn: "⚠️ Le geste décisif : *dont* contient toujours *de*. On retrouve donc la fonction d'un groupe en *de* (COI, complément du nom, complément de l'adjectif…) selon le mot complété.",
                },
                {
                  number: "3",
                  text: "**Identifier la fonction du groupe reconstruit.** *rêver de quelque chose* : le groupe *de la maison* est COI du verbe *rêvait*. *dont* a donc cette fonction.",
                  example: { lines: ["*il rêvait **de la maison*** → COI du verbe *rêvait* → *dont* = COI."] },
                },
                {
                  number: "💡",
                  text: "**Mémoriser les cas fréquents :** *qui* est le plus souvent sujet (l'homme **qui** parle → l'homme parle), *que* le plus souvent COD (le livre **que** je lis → je lis le livre), *où* est CC de lieu ou de temps (la ville **où** je vis → je vis dans la ville). On vérifie toujours par la dépronominalisation : *dont* et *qui* changent de fonction selon la phrase.",
                },
                {
                  number: "✅",
                  text: "**Réponse attendue (formulation modèle) :** « *dont* est un **pronom relatif** (il reprend l'antécédent *la maison* et introduit la relative) ; sa fonction est **COI** du verbe *rêvait* : en dépronominalisant, on obtient *il rêvait **de** la maison*, et *rêver de* se construit avec un COI. »",
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
                { type: "line", text: "**Explication :** *à son ami* complète le verbe *parle*, qui se construit avec la préposition *à* (parler à quelqu'un). La pronominalisation par *lui* (« Elle **lui** parle ») confirme le COI ; le passif est impossible." },
                { type: "line", text: "**Réponse attendue (formulation jury) :** « *à son ami* est un **groupe nominal prépositionnel**, **COI** du verbe *parler* : préposition *à* imposée par le verbe, pronominalisation par *lui* (elle *lui* parle). »" },
                { type: "note", text: "@nav Trouvé du premier coup ? Direction S'entraîner. Sinon, relisez l'étape ②." },
              ],
            },
            {
              type: "ctaBox",
              text: "Méthode bien en tête ? Passez à l'application.",
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
              title: "Fonctions syntaxiques",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_FONCTIONS_SYNTAXIQUES,
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
              title: "Fonctions syntaxiques",
              copies: COPIES_FONCTIONS_SYNTAXIQUES,
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
      ],
    },
  ],
};
