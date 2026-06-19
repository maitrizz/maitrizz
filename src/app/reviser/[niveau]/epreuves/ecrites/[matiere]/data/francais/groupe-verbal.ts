import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "gv1", label: "Je sais que le groupe verbal s'organise autour d'un verbe noyau, second constituant obligatoire de la phrase avec le groupe sujet" },
  { id: "gv2", label: "Je distingue une construction intransitive, transitive (directe ou indirecte) et attributive" },
  { id: "gv3", label: "Je reconnais une construction transitive directe (COD), indirecte (COI) ou comportant plusieurs compléments d'objet" },
  { id: "gv4", label: "Je reconnais les verbes transitifs indirects construits avec une préposition, comme obéir à, ressembler à ou jouer de" },
  { id: "gv5", label: "Je distingue un verbe attributif (verbe d'état + attribut) d'un transitif direct (COD), et je connais les verbes d'état" },
  { id: "gv6", label: "Je reconnais les principaux emplois de la voix pronominale et la voix impersonnelle" },
  { id: "gv7", label: "Je sais analyser la voix passive et la construction factitive « faire + infinitif »" },
];

export const ficheGroupeVerbal: Fiche = {
  slug: "groupe-verbal",
  matiere: "francais",
  numero: 4,
  partie: "Partie 1 : Grammaire de la phrase",
  title: "Le groupe verbal",
  subtitle:
    "Identifier la construction du verbe : transitivité, verbes pronominaux et impersonnels, voix passive",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 + lycée", variant: "info" },
  ],
  metaTitle: "Le groupe verbal (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur le groupe verbal : verbe noyau, GV transitifs, intransitifs et attributifs, voix pronominale, voix impersonnelle, voix passive et construction factitive « faire + infinitif ». Cours, méthode, exercices corrigés, flashcards et auto-évaluation.",
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
                  title: "Le groupe verbal et son noyau",
                  text: "Le GV s'organise autour d'un verbe. C'est sa construction qui commande les fonctions de ses compléments.",
                },
                {
                  number: "②",
                  title: "Trois constructions à reconnaître",
                  text: "Verbe sans objet, avec un complément d'objet, ou avec un attribut : on observe d'abord la phrase avant de nommer la construction.",
                },
                {
                  number: "③",
                  title: "Voix pronominale et impersonnelle",
                  text: "On observe le rôle du sujet dans les emplois pronominaux et le « il » impersonnel sans référent.",
                },
                {
                  number: "④",
                  title: "Voix passive et voix factitive",
                  text: "Deux constructions à savoir analyser : le COD qui devient sujet au passif et le noyau verbal « faire + infinitif ».",
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
              text: "Dans la notion 2, vous avez appris à identifier la fonction des groupes liés au verbe. Ici, on change de point de vue : on part du **verbe** et on observe comment il construit le groupe verbal. Il peut être employé seul, appeler un complément d'objet direct ou indirect, ou relier le sujet à un attribut.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Le groupe verbal : un verbe noyau et ses compléments",
              blocks: [
                {
                  type: "paragraph",
                  text: "Le **groupe verbal (GV)** est le second constituant obligatoire de la phrase de base, avec le **groupe sujet**. Il s'organise autour d'un **verbe noyau** et comprend les compléments appelés par ce verbe : COD, COI ou attribut.\n\nLe complément circonstanciel ne fait pas partie du GV : il apporte une information à l'ensemble formé par le groupe sujet et le groupe verbal. Le point clé est donc d'observer ce que le verbe exige : « obéir » se construit avec la préposition « à » (« obéir à quelqu'un ») ; le groupe introduit par « à » est donc COI.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Comprendre la construction du verbe",
              blocks: [
                {
                  type: "paragraph",
                  text: "Pour déterminer la construction d'un verbe, on regarde ce qui l'accompagne dans la phrase. Trois situations principales permettent de comprendre les termes grammaticaux utilisés ensuite.",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Trois situations à reconnaître",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "Le verbe n'a pas de complément d'objet : « Il dort. » → construction **intransitive**",
                        "Le verbe a un complément d'objet : « Elle lit un roman. » → construction **transitive**",
                        "Le verbe relie le sujet à une qualité ou une identité : « Elle semble fatiguée. » → construction **attributive**",
                      ],
                      note: "Dans une construction transitive, le complément est direct s'il n'est pas introduit par une préposition, et indirect s'il est introduit par une préposition.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "**1. La construction intransitive**\nLe verbe n'a pas de complément d'objet.",
                },
                {
                  type: "notionCardGrid",
                  columns: 1,
                  cards: [
                    {
                      title: "Intransitif",
                      definition: "Dans cet emploi, le verbe n'admet pas de complément d'objet. Le GV peut être réduit au verbe seul.",
                      sousClasses: "**Verbes fréquents :** dormir · partir · naître · mourir · courir · tomber · arriver · briller",
                      exemples: [
                        "« Il **dort** » : aucun complément d'objet",
                        "« Le soleil **brille** » : « brille » se suffit ; un CC reste possible (« brille fort »)",
                      ],
                      piege: "Un verbe employé sans complément n'est pas forcément intransitif. Dans « Il **dort** », aucun COD ne peut être ajouté : « dormir » est **intransitif**. Dans « Il **mange** », le COD n'est pas exprimé, mais on pourrait en ajouter un (« Il mange une pomme ») : « manger » est donc bien **transitif direct**, et non intransitif.",
                      test: "La question « quoi ? / qui ? » après le verbe est impossible.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "**2. La construction transitive**\nLe verbe appelle un ou plusieurs compléments d'objet. On distingue alors la construction directe de la construction indirecte.",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Transitif direct",
                      definition: "Le verbe est suivi d'un COD, sans préposition.",
                      sousClasses: "**Verbes fréquents :** manger · lire · voir · aimer · prendre · dire · savoir · croire",
                      exemples: [
                        "« Elle mange **une pomme** » : « une pomme » = GN, COD",
                        "« Je sais **qu'il viendra** » : proposition subordonnée conjonctive, COD",
                      ],
                      piege: "Ne pas confondre le COD avec l'attribut du sujet placé après un verbe d'état (« Il est médecin »). Voir le piège n°2.",
                      test: "« quoi ? / qui ? » sans préposition ; pronominalisation par le/la/les. Le passif est souvent possible, mais ce test connaît des exceptions.",
                    },
                    {
                      title: "Transitif indirect",
                      definition: "Le verbe est suivi d'un COI, introduit par une préposition (à, de).",
                      sousClasses: "**Verbes fréquents :** parler à · rêver de · obéir à · ressembler à · se souvenir de · jouer de · avoir besoin de",
                      exemples: [
                        "« Il parle **à son ami** » : GN prépositionnel, COI",
                        "« Elle rêve **de liberté** » : GN prépositionnel, COI (pronominalisation : « Elle en rêve »)",
                        "« Il obéit **à ses parents** » : GN prépositionnel, COI (« Il **leur** obéit »)",
                      ],
                      test: "« à / de qui ? quoi ? » ; pronominalisation par lui/leur, y, en ; passif impossible.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Une construction transitive peut avoir plusieurs objets",
                  text: "Certains verbes comme **donner, offrir, envoyer** ou **montrer** admettent deux compléments : « Il offre **des fleurs** à **sa mère**. » « des fleurs » est COD ; « à sa mère » est COI. On analyse chaque complément séparément.",
                },
                {
                  type: "paragraph",
                  text: "**3. La construction attributive**\nLe verbe ne reçoit pas d'objet : il relie le sujet à une qualité, un état ou une identité.",
                },
                {
                  type: "notionCardGrid",
                  columns: 1,
                  cards: [
                    {
                      title: "Attributif",
                      definition: "Le verbe d'état relie le sujet à son attribut. Il n'a pas de COD.",
                      sousClasses: "**Verbes d'état :** être · paraître · sembler · devenir · rester · demeurer · avoir l'air · passer pour · se révéler · s'avérer",
                      exemples: [
                        "« Il est **médecin** » : « médecin » = nom, attribut du sujet « il »",
                        "« Elle semble **fatiguée** » : « fatiguée » = adjectif, attribut du sujet « elle »",
                      ],
                      test: "Remplacer par « être » : si le sens reste proche, le verbe est attributif. L'attribut s'accorde avec le sujet, et la passivation est impossible.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Les étiquettes COD, COI et attribut caractérisent la construction observée. Pour identifier précisément la fonction d'un groupe, voir la notion 2.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "La voix pronominale et la voix impersonnelle",
              blocks: [
                {
                  type: "paragraph",
                  text: "Après avoir étudié la **construction du verbe**, on observe maintenant sa **voix**. Ce sont deux caractéristiques différentes : la construction indique si le verbe appelle un complément d'objet ou un attribut ; la voix indique comment l'action est organisée autour du sujet. Un même verbe peut ainsi être transitif direct à la voix active (« Léa lave la voiture ») ou à la voix passive (« La voiture est lavée par Léa »).\n\nDeux voix demandent ici une attention particulière : la voix **pronominale**, marquée par un pronom de même personne que le sujet, et la voix **impersonnelle**, construite avec un « il » sans référent.",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Voix pronominale",
                      definition: "Le verbe est précédé d'un pronom de même personne que le sujet (me, te, se, nous, vous). Trois grands emplois suffisent pour le concours.",
                      sousClasses: "**Emplois principaux :** réfléchi (réflexif ou réciproque) · à sens passif · à sens actif",
                      exemples: [
                        "**Réfléchi réflexif :** « Elle **se lave** » : elle lave elle-même",
                        "**Réfléchi réciproque :** « Ils **se parlent** » : ils parlent l'un à l'autre",
                        "**À sens passif :** « Ce livre **se vend** bien » : il est bien vendu",
                        "**À sens actif :** « Elle **se souvient** » : verbe essentiellement pronominal",
                      ],
                      piege: "Le pronom réfléchi « se » peut être COD ou COI : « Elle se lave » (se = COD) mais « Elle se lave les mains » (se = COI, les mains = COD). Cette distinction commande l'accord du participe passé, traité dans la notion 11.",
                      test: "Pour analyser « se », retrouver la construction du verbe : laver quelqu'un → COD ; parler à quelqu'un → COI. Ce test ne s'applique pas mécaniquement aux verbes essentiellement pronominaux.",
                    },
                    {
                      title: "Voix impersonnelle",
                      definition: "Le sujet grammatical « il » est un pur support, sans référent réel. Le groupe qui suit éventuellement le verbe est un complément du verbe impersonnel.",
                      sousClasses: "**Constructions fréquentes :** il pleut · il neige · il faut · il s'agit de · il arrive que · il y a",
                      exemples: [
                        "« **Il** pleut » : « il » ne renvoie à personne (sujet grammatical)",
                        "« **Il** faut **de la patience** » : « il » est le sujet grammatical ; « de la patience » est complément du verbe impersonnel",
                      ],
                      piege: "Ne pas confondre le « il » impersonnel (« Il pleut ») et le « il » personnel référentiel (« Il part », où « il » remplace un nom).",
                      test: "Le « il » impersonnel ne peut pas être remplacé par un GN référentiel.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "La voix passive et la voix factitive",
              blocks: [
                {
                  type: "paragraph",
                  text: "La voix indique le rôle joué par le sujet dans l'action. Dans une phrase passive, le sujet **subit** l'action. Dans une phrase factitive, le sujet **déclenche** l'action, mais ne l'accomplit pas lui-même. Ces deux organisations se reconnaissent à leur forme verbale.",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "La voix passive",
                  blocks: [
                    {
                      type: "formulaBlock",
                      title: "Du sujet qui agit au sujet qui subit",
                      lines: [
                        "Voix active : « **Le chat** mange **la souris**. » Le sujet « le chat » accomplit l'action ; « la souris » est COD.",
                        "Voix passive : « **La souris** est mangée **par le chat**. » Le sujet « la souris » subit l'action ; « par le chat » est complément d'agent.",
                        "Lors du passage au passif, le COD devient sujet et l'ancien sujet devient complément d'agent. Le verbe prend la forme « être + participe passé ».",
                      ],
                      note: "Seul un verbe transitif direct peut être mis au passif, car il faut un COD à transformer en sujet. Le complément d'agent peut ne pas être exprimé : « La souris est mangée. »",
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      text: "⚠️ La présence de l'auxiliaire « être » ne suffit pas. Pour vérifier un passif, reconstituez la phrase active : « Les portes ont été ouvertes » → « Quelqu'un a ouvert les portes. » En revanche, « Il est parti » ne peut pas être transformé ainsi : c'est un passé composé, pas un passif.",
                    },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Pour aller plus loin · Quand le sujet fait faire l'action",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "Dans « Elle **fait travailler** ses élèves », ce n'est pas elle qui travaille : elle fait accomplir l'action par ses élèves. On appelle cela la **construction factitive**. Pour le concours, retenez surtout que « faire + infinitif » s'analyse comme un seul noyau verbal : « fait travailler ». L'infinitif « travailler » n'est donc pas COD de « faire ».",
                    },
                  ],
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · Oublier la préposition dans l'analyse",
              badge: "Très fréquent",
              faux: "Dans « Il obéit à ses parents », « à ses parents » est analysé comme un COD.",
              vrai: "Le verbe se construit « obéir à quelqu'un ». Le groupe « à ses parents », introduit par la préposition « à », est donc un **COI** : « Il leur obéit. »",
              methode:
                "D'autres verbes transitifs indirects se construisent de la même façon avec une préposition : nuire à, ressembler à, plaire à, téléphoner à, jouer de, se souvenir de, avoir besoin de, douter de.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 · COD confondu avec attribut du sujet",
              badge: "Très fréquent",
              faux: "Dans « Il est médecin », « médecin » est analysé comme COD.",
              vrai: "Après un verbe d'état, le complément est **attribut du sujet**, jamais COD.",
              methode:
                "Test décisif : la passivation. « Une pomme est mangée » fonctionne (COD), mais « Un médecin est été par lui » est impossible (attribut). L'attribut s'accorde aussi avec le sujet.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 · Verbe transitif employé sans complément",
              badge: "Piège de contexte",
              faux: "Classer « manger » comme intransitif dans « Il mange tous les jours ».",
              vrai: "Dans cet emploi, le complément d'objet de « manger » n'est pas exprimé : c'est un **emploi absolu** du verbe transitif.",
              methode: "Analyser la construction dans son contexte, puis vérifier si le verbe admet habituellement un objet : « manger une pomme ».",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°4 · « faire + infinitif » séparé en deux noyaux",
              badge: "Grand classique",
              faux: "Dans « les choses qui nous font rêver », « rêver » est analysé isolément comme COD de « font » ou comme son sujet.",
              vrai: "« font rêver » constitue le **noyau verbal factitif**. Le sujet de cet ensemble est « qui », qui reprend « choses ».",
              methode: "Repérer le bloc « faire + infinitif » : le sujet fait réaliser le procès exprimé par l'infinitif.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 2 (CP-CE2) :** les élèves repèrent le verbe, puis distinguent peu à peu le verbe de son complément.\n\n**Cycle 3 :** on introduit le complément du verbe (COD, COI) et l'attribut du sujet, souvent par manipulation. La transitivité n'est pas nécessairement nommée, mais on observe la construction du verbe.\n\n**Ce que vous devez savoir dire :** « On part du verbe, noyau du groupe verbal. On observe s'il est employé seul, avec un complément direct ou indirect, ou avec un attribut. »",
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
              title: "Deux réflexes, deux méthodes",
              text: "Deux analyses différentes peuvent être demandées : déterminer la **construction du verbe** ou identifier sa **voix**.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Identifier la construction d'un verbe pas à pas",
              intro:
                "**Question typique :** « Le verbe souligné est-il employé dans une construction intransitive, transitive ou attributive ? Justifiez. »\n\n**Exemple fil rouge :** « Le candidat <u>répond</u> à la question. »",
              steps: [
                {
                  number: "1",
                  text: "**Vérifier si le verbe est attributif.** Le remplacement de « répond » par « est » est impossible : « répondre » n'est pas ici un verbe d'état.",
                  example: { lines: ["« répond » n'équivaut pas à « est » → construction non attributive"] },
                },
                {
                  number: "2",
                  text: "**Chercher si le verbe appelle un complément d'objet.** On pose la question après le verbe : « Le candidat répond à quoi ? » → « à la question ». Le verbe n'est donc pas intransitif dans cette phrase.",
                  example: { lines: ["répond **à quoi ?** → à la question"] },
                },
                {
                  number: "3",
                  text: "**Observer la présence d'une préposition.** Le complément « à la question » est introduit par « à » : il est COI. Le verbe « répondre » est donc employé dans une construction **transitive indirecte**.",
                  example: {
                    lines: [
                      "« Le candidat **y** répond » → la pronominalisation confirme l'analyse",
                    ],
                  },
                },
                {
                  number: "💡",
                  text: "**Réponse complète :** « répondre » est employé dans une construction transitive indirecte ; « à la question » est un COI, comme le confirme la pronominalisation par « y ».",
                  warn: "⚠️ Dans une autre phrase, la même démarche peut conduire à une construction intransitive, transitive directe ou attributive.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Donnez la construction du verbe : « Elle ressemble <u>à sa mère</u>. »",
              correction: [
                { type: "line", text: "« ressembler à » est **transitif indirect** : « à sa mère » = COI (pronominalisation : « Elle lui ressemble » ; passif impossible)." },
                {
                  type: "note",
                  text: "Trouvé du premier coup ? Vous maîtrisez cette méthode. Sinon, relisez l'étape 3 et le piège n°1.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Distinguer la voix active et la voix passive",
              intro:
                "**Question typique :** « Le verbe souligné est-il à la voix active ou à la voix passive ? Justifiez. »\n\n**Exemple fil rouge :** « Les copies <u>ont été corrigées</u> par le jury. »",
              steps: [
                {
                  number: "1",
                  text: "**Observer la forme verbale.** « ont été corrigées » est formé avec l'auxiliaire « être » et le participe passé « corrigées », accordé avec le sujet « les copies ».",
                  example: { lines: ["ont été + corrigées → forme caractéristique du passif"] },
                },
                {
                  number: "2",
                  text: "**Observer le rôle du sujet.** Les copies n'accomplissent pas l'action : elles sont corrigées. Le groupe « par le jury » indique qui accomplit l'action ; c'est le complément d'agent.",
                  example: { lines: ["les copies → subissent l'action · le jury → accomplit l'action"] },
                },
                {
                  number: "3",
                  text: "**Reconstituer la phrase active.** « Le jury a corrigé les copies » : le complément d'agent devient sujet et le sujet passif devient COD. La transformation fonctionne.",
                  example: { lines: ["« Le jury a corrigé les copies » → phrase active correspondante"] },
                },
                {
                  number: "💡",
                  text: "**Réponse complète :** « La forme verbale “ont été corrigées” est à la **voix passive** : elle est formée de l'auxiliaire “être” et du participe passé “corrigées”, le sujet “les copies” subit l'action et la phrase peut être transformée à la voix active : “Le jury a corrigé les copies”. »",
                },
                {
                  number: "⚠️",
                  text: "**Attention au faux passif :** la présence de « être » ne suffit pas. « Il est parti » est un passé composé, car on ne peut pas construire une phrase active dans laquelle « il » serait COD.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "« Les portes furent ouvertes par le gardien. » Voix active ou passive ? Justifiez.",
              correction: [
                { type: "line", text: "**Voix passive** : « être + participe passé accordé » (ouvertes, féminin pluriel), complément d'agent « par le gardien ». La phrase active est « Le gardien ouvrit les portes »." },
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
                  objectifId: "gv1",
                  question: "Le groupe verbal s'organise autour de :",
                  options: ["un nom noyau", "un verbe noyau", "un déterminant", "une préposition"],
                  correctIndex: 1,
                  explanation:
                    "Le GV s'organise autour d'un verbe noyau ; c'est le second constituant obligatoire de la phrase, avec le groupe sujet.",
                },
                {
                  objectifId: "gv3",
                  question: "Quel test fournit un indice fort d'une construction transitive directe ?",
                  options: [
                    "Le verbe est suivi d'une préposition",
                    "La mise au passif est possible (le COD devient sujet)",
                    "La pronominalisation par lui / leur",
                    "Le verbe est invariable",
                  ],
                  correctIndex: 1,
                  explanation:
                    "Lorsqu'une passivation est possible, le COD devient sujet : c'est un indice fort d'une construction transitive directe. Certains COD, notamment après des verbes de mesure, ne se prêtent toutefois pas au passif.",
                },
                {
                  objectifId: "gv4",
                  question: "Dans « Il obéit à ses parents », le verbe « obéir » se construit avec :",
                  options: ["un COD", "un COI", "un attribut du sujet", "aucun complément"],
                  correctIndex: 1,
                  explanation:
                    "« obéir À » est transitif indirect : « à ses parents » est un COI (pronominalisation : « Il leur obéit » ; passif impossible).",
                },
                {
                  objectifId: "gv5",
                  question: "Dans « Il devient médecin », « médecin » est :",
                  options: ["COD", "Attribut du sujet", "COI", "CC"],
                  correctIndex: 1,
                  explanation:
                    "« devient » est un verbe d'état : « médecin » est attribut du sujet « il » (passivation impossible, accord avec le sujet).",
                },
                {
                  objectifId: "gv2",
                  question: "Dans « Il offre des fleurs à sa mère », comment se construit le GV ?",
                  options: ["Avec deux COD", "Avec un COD et un COI", "Avec deux attributs", "Sans complément d'objet"],
                  correctIndex: 1,
                  explanation:
                    "Le GV transitif comporte deux compléments d'objet : « des fleurs » est COD et « à sa mère » est COI.",
                },
                {
                  objectifId: "gv6",
                  question: "Dans « Ce livre se vend bien », quel est le sous-type de verbe pronominal ?",
                  options: ["Réfléchi", "Réciproque", "Pronominal à sens passif", "Essentiellement pronominal"],
                  correctIndex: 2,
                  explanation:
                    "« se vend » a un sens passif (= est vendu) : c'est un pronominal à sens passif.",
                },
                {
                  objectifId: "gv7",
                  question: "À la voix passive, quel complément de la phrase active devient sujet ?",
                  options: ["Le COI", "Le COD", "Le complément circonstanciel", "L'attribut du sujet"],
                  correctIndex: 1,
                  explanation:
                    "Seul le COD peut devenir sujet passif : la voix passive est réservée aux verbes transitifs directs.",
                },
                {
                  objectifId: "gv7",
                  question: "Dans « Elle fait travailler ses élèves », quel est le noyau verbal ?",
                  options: ["fait", "fait travailler", "travailler ses élèves", "ses élèves"],
                  correctIndex: 1,
                  explanation:
                    "Dans la construction factitive, le semi-auxiliaire « faire » et l'infinitif forment ensemble le noyau verbal : « fait travailler ».",
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
              sub: "Type de construction, compléments essentiels, phrases simples",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 1 : Classer les verbes selon leur construction",
              objectifTag: "Types de construction",
              question:
                "Classez chaque verbe souligné : intransitif · transitif direct · transitif indirect · attributif.\na) « Elle <u>dort</u> paisiblement. »   b) « Il <u>mange</u> une pomme. »   c) « Elle <u>parle</u> à son ami. »   d) « Il <u>semble</u> fatigué. »   e) « Ils <u>arrivent</u> demain. »",
              correction: [
                { type: "line", label: "a)", text: "**dort** → intransitif (« dort quoi ? » impossible)" },
                { type: "line", label: "b)", text: "**mange** → transitif direct (« une pomme » = COD ; « Il la mange »)" },
                { type: "line", label: "c)", text: "**parle** → transitif indirect (« à son ami » = COI ; « Elle lui parle »)" },
                { type: "line", label: "d)", text: "**semble** → attributif (verbe d'état + attribut du sujet « fatigué »)" },
                { type: "line", label: "e)", text: "**arrivent** → intransitif (« demain » = CC de temps, extérieur au GV)" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 2 : Vrai ou faux, justifiez",
              question:
                "Vrai ou faux, justifiez en une phrase :\na) « obéir » est un verbe transitif direct.\nb) Dans « Il devient professeur », « professeur » est COD.\nc) « Il pleut » est un verbe impersonnel.\nd) « se souvenir » est un verbe essentiellement pronominal.",
              correction: [
                { type: "line", label: "a)", text: "**Faux.** « obéir À » est transitif indirect : il se construit avec un COI." },
                { type: "line", label: "b)", text: "**Faux.** « devient » est un verbe d'état : « professeur » est attribut du sujet." },
                { type: "line", label: "c)", text: "**Vrai.** « il » est un sujet grammatical impersonnel, sans référent réel." },
                { type: "line", label: "d)", text: "**Vrai.** « souvenir » n'existe pas sans le pronom réfléchi : verbe essentiellement pronominal." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 3 : Verbes d'état et attribut du sujet",
              objectifTag: "Attributif / verbes d'état",
              question:
                "Identifiez le verbe d'état et l'attribut du sujet :\na) « Il paraît épuisé. »   b) « Elle reste debout. »   c) « Il passe pour un génie. »   d) « Cette solution s'avère efficace. »   e) « Il a l'air soucieux. »",
              correction: [
                {
                  type: "table",
                  headers: ["Phrase", "Verbe d'état", "Attribut du sujet"],
                  rows: [
                    ["Il paraît épuisé", "paraît", "épuisé (adjectif qualificatif)"],
                    ["Elle reste debout", "reste", "debout (adverbe employé comme attribut)"],
                    ["Il passe pour un génie", "passe pour", "un génie (GN)"],
                    ["Cette solution s'avère efficace", "s'avère", "efficace (adjectif qualificatif)"],
                    ["Il a l'air soucieux", "a l'air", "soucieux (adjectif qualificatif)"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 4 : Principaux emplois de la voix pronominale",
              objectifTag: "Verbes pronominaux",
              question:
                "Identifiez l'emploi principal : réfléchi réflexif · réfléchi réciproque · à sens passif · à sens actif.\na) « Elle <u>se regarde</u> dans le miroir. »   b) « Ils <u>se téléphonent</u> chaque soir. »   c) « Ce livre <u>se lit</u> facilement. »   d) « Il <u>s'enfuit</u> sans se retourner. »   e) « Elle <u>se méfie</u> de tout. »",
              correction: [
                { type: "line", label: "a)", text: "**se regarde** → réfléchi réflexif (elle regarde elle-même)" },
                { type: "line", label: "b)", text: "**se téléphonent** → réfléchi réciproque (l'un à l'autre)" },
                { type: "line", label: "c)", text: "**se lit** → à sens passif (= est lu)" },
                { type: "line", label: "d)", text: "**s'enfuit** → à sens actif ; verbe essentiellement pronominal" },
                { type: "line", label: "e)", text: "**se méfie** → à sens actif ; verbe essentiellement pronominal" },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : Analyser",
              sub: "Verbes à double emploi, tests, justification exigée",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 5 : Verbes à double emploi",
              objectifTag: "Transitif / intransitif",
              question:
                "Le verbe change de construction selon le sens. Identifiez le type de GV dans chaque emploi :\na) « Il monte l'escalier. » / « Il monte. »   b) « Il passe l'examen. » / « Il passe pour un génie. »   c) « Il sent la rose. » / « Cette fleur sent bon. »",
              correction: [
                { type: "line", label: "a)", text: "« monte l'escalier » → transitif direct (« l'escalier » = COD) / « monte » → emploi intransitif" },
                { type: "line", label: "b)", text: "« passe l'examen » → transitif direct (COD) / « passe pour un génie » → attributif (« passer pour » = verbe d'état)" },
                { type: "line", label: "c)", text: "« sent la rose » → transitif direct (« la rose » = COD) / « sent bon » → emploi intransitif (« bon » est ici un adverbe)" },
                { type: "note", text: "⚠️ Verbes à double emploi : monter, sortir, passer, sentir, tourner, rentrer, descendre changent de construction selon le contexte." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 6 : Le test passif",
              objectifTag: "Transitif direct / indirect",
              question:
                "Mettez à la voix passive si c'est possible ; sinon, expliquez pourquoi et donnez la construction.\na) « Elle lit un roman. »   b) « Il parle à son ami. »   c) « Il est médecin. »   d) « Il ressemble à son père. »",
              correction: [
                { type: "line", label: "a)", text: "« Un roman est lu par elle. » : passif possible → transitif direct." },
                { type: "line", label: "b)", text: "Passif impossible → transitif indirect (un COI ne peut pas devenir sujet passif)." },
                { type: "line", label: "c)", text: "Passif impossible → attributif (un attribut ne peut pas devenir sujet passif)." },
                { type: "line", label: "d)", text: "Passif impossible → transitif indirect (« ressembler à »)." },
                { type: "note", text: "💡 Lorsqu'un groupe devient sujet au passif, il était COD à l'actif. L'impossibilité du passif ne suffit toutefois pas, à elle seule, à exclure tout COD." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 7 : Corriger la construction",
              question:
                "Repérez l'erreur d'analyse et donnez la construction correcte :\na) « Il ressemble à son père. » → « à son père » = CC de comparaison\nb) « Elle se souvient de son enfance. » → « de son enfance » = CC de cause\nc) « Il devient médecin. » → « médecin » = COD\nd) « Elle fait travailler ses élèves. » → « ses élèves » = sujet de « travailler »",
              correction: [
                { type: "line", label: "a)", text: "« à son père » n'est pas un CC : « ressembler à » est transitif indirect → COI (« Il lui ressemble »)." },
                { type: "line", label: "b)", text: "« de son enfance » n'est pas un CC : « se souvenir de » est transitif indirect → COI (« Elle s'en souvient »)." },
                { type: "line", label: "c)", text: "« médecin » n'est pas un COD : « devient » est un verbe d'état → attribut du sujet (passivation impossible)." },
                { type: "line", label: "d)", text: "« fait travailler » forme le noyau verbal factitif. « ses élèves » désigne les agents qui réalisent l'action de travailler." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 8 : Verbes impersonnels",
              objectifTag: "Verbes impersonnels",
              question:
                "Pour chaque construction impersonnelle, identifiez le sujet grammatical et le complément du verbe impersonnel :\na) « Il arrive des problèmes. »   b) « Il faut travailler. »   c) « Il est possible qu'il vienne. »   d) « Il y a trois personnes. »",
              correction: [
                {
                  type: "table",
                  headers: ["Phrase", "Sujet grammatical", "Complément du verbe impersonnel"],
                  rows: [
                    ["Il arrive des problèmes", "il (impersonnel)", "des problèmes"],
                    ["Il faut travailler", "il (impersonnel)", "travailler (infinitif)"],
                    ["Il est possible qu'il vienne", "il (impersonnel)", "qu'il vienne (proposition subordonnée conjonctive)"],
                    ["Il y a trois personnes", "il (impersonnel)", "trois personnes"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 9 : Le pronom réfléchi « se », COD ou COI ?",
              question:
                "Dans chaque phrase, « se » est-il COD ou COI ? Justifiez par la construction du verbe.\na) « Elle se lave. »   b) « Elle se lave les mains. »   c) « Ils se regardent. »   d) « Ils se sourient. »",
              correction: [
                { type: "line", label: "a)", text: "« laver quelqu'un » (COD) → « se » = COD (elle se lave elle-même)." },
                { type: "line", label: "b)", text: "« laver les mains À elle » → « se » = COI, « les mains » = COD." },
                { type: "line", label: "c)", text: "« regarder quelqu'un » (COD) → « se » = COD (l'un regarde l'autre)." },
                { type: "line", label: "d)", text: "« sourire À quelqu'un » (COI) → « se » = COI." },
                { type: "note", text: "💡 On ne déduit pas automatiquement la fonction de « se » de la présence d'un autre COD : on retrouve toujours la construction du verbe (laver quelqu'un, sourire à quelqu'un)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : Maîtriser",
              sub: "Extraits littéraires, conditions proches du concours",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 10 · Extrait littéraire : Émile Zola",
              enonce:
                "« Une femme passa, tenant par la main un petit garçon. Elle se hâtait, pressée d'atteindre sa maison avant la nuit. »\n*(Émile Zola, Germinal, 1885)*",
              question: "Analysez la construction de chaque GV souligné : « <u>passa</u> » · « <u>se hâtait</u> » · « <u>atteindre</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Construction", "Compléments essentiels"],
                  rows: [
                    ["passa", "Intransitif", "Aucun complément d'objet (« tenant… » est une épithète détachée)"],
                    ["se hâtait", "Pronominal (essentiellement pronominal)", "Aucun COD : « se » est intégré au verbe"],
                    ["atteindre", "Transitif direct (infinitif)", "COD : « sa maison » (« atteindre quoi ? »)"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 11 · Extrait littéraire : Guy de Maupassant",
              enonce:
                "« Il aimait les promenades solitaires, et il sentait le vide de sa vie s'étendre autour de lui. »\n*(Guy de Maupassant, Bel-Ami, 1885)*",
              question: "Analysez la construction de chaque GV souligné : « <u>aimait</u> » · « <u>sentait … s'étendre</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Construction", "Compléments essentiels"],
                  rows: [
                    ["aimait", "Transitif direct", "COD : « les promenades solitaires »"],
                    ["sentait … s'étendre", "Transitif direct + proposition infinitive", "COD : « le vide de sa vie s'étendre autour de lui » = proposition subordonnée infinitive (verbe de perception + sujet propre)"],
                  ],
                },
                { type: "note", text: "⚠️ Après un verbe de perception (voir, entendre, sentir, regarder) suivi d'un GN et d'un infinitif ayant son propre sujet, on a une proposition subordonnée infinitive COD." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 12 · Extrait littéraire : Colette",
              enonce:
                "« Ma mère regardait les enfants jouer dans le jardin. Elle souriait, muette, heureuse, et ne disait rien. »\n*(Colette, La Maison de Claudine, 1922)*",
              question: "Analysez la construction de chaque GV souligné : « <u>regardait … jouer</u> » · « <u>souriait</u> » · « <u>ne disait rien</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Construction", "Compléments essentiels"],
                  rows: [
                    ["regardait … jouer", "Transitif direct + proposition infinitive", "COD : « les enfants jouer dans le jardin » = proposition subordonnée infinitive"],
                    ["souriait", "Intransitif", "Aucun complément d'objet (« muette, heureuse » = épithètes détachées du sujet)"],
                    ["ne disait rien", "Transitif direct (à la forme négative)", "COD : « rien » (pronom indéfini)"],
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
              icon: "",
              text: "Ces exercices reprennent le format de l'étude de la langue au CRPE : une phrase ou un extrait à analyser et une réponse grammaticale justifiée. Le badge ✦ signale un support issu d'une annale, avec une question adaptée à cette notion.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 1 : phrase d'entraînement",
              enonce:
                "« Elle <u>rêvait</u> des contrées lointaines, des rivages lumineux, des palais de marbre où des fontaines <u>jaillissaient</u> sous des ciels toujours bleus. »",
              question: "Analysez la construction de chaque verbe souligné : « <u>rêvait</u> » · « <u>jaillissaient</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Construction", "Compléments essentiels"],
                  rows: [
                    ["rêvait", "Transitif indirect", "COI : « des contrées lointaines, des rivages lumineux, des palais de marbre » (« rêver DE » ; « Elle en rêvait »)"],
                    ["jaillissaient", "Intransitif", "Aucun complément d'objet (« sous des ciels toujours bleus » = CC de lieu)"],
                  ],
                },
                { type: "note", text: "⚠️ « rêver de » est transitif indirect : ses compléments sont des COI, malgré l'absence apparente de préposition devant chaque GN coordonné (la préposition « de » est dans « des »)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 2 : phrase d'entraînement",
              enonce:
                "« Les misérables ne <u>manquent</u> pas sur la terre. Partout, les souffrances <u>sont</u> grandes et les hommes <u>sont</u> las de ne plus croire. »",
              question: "Analysez la construction de chaque verbe souligné : « <u>manquent</u> » · « <u>sont</u> grandes » · « <u>sont</u> las »",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Construction", "Compléments essentiels"],
                  rows: [
                    ["ne manquent pas", "Intransitif (forme négative)", "Aucun complément d'objet (« sur la terre » = CC de lieu)"],
                    ["sont grandes", "Attributif", "Attribut du sujet : « grandes » (accord avec « souffrances »)"],
                    ["sont las", "Attributif", "Attribut du sujet : « las de ne plus croire » (« de ne plus croire » complète l'adjectif « las »)"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Support issu d'une annale",
              title: "Exercice 3 : Lola Lafon, Quand tu écouteras cette chanson",
              enonce:
                "« Écrire n'<u>est</u> pas tout à fait un choix : c'est un aveu d'impuissance. On <u>écrit</u> parce qu'on ne sait par quel autre biais attraper le réel. »\n*(Lola Lafon, Quand tu écouteras cette chanson, 2022)*",
              question: "Question adaptée à cette notion · Analysez la construction de chaque verbe souligné : « <u>est</u> » · « <u>écrit</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Construction", "Compléments essentiels / sujet"],
                  rows: [
                    ["n'est pas … un choix", "Attributif (forme négative)", "Attribut du sujet : « un choix » · sujet : « Écrire » (verbe à l'infinitif employé comme sujet)"],
                    ["écrit", "Transitif direct en emploi absolu", "Aucun COD exprimé · « parce qu'on ne sait… » = CC de cause"],
                  ],
                },
                { type: "note", text: "⚠️ « Écrire » reste un verbe à l'infinitif, même employé comme sujet de « est ». On n'écrit jamais « nom verbal » : cette catégorie n'existe pas (voir notion 1)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Support issu d'une annale",
              title: "Exercice 4 : Marguerite Yourcenar, Comment Wang-Fô fut sauvé",
              enonce:
                "« J'ai vu se rouvrir les portes qui me séparaient du monde ; je suis monté sur la terrasse du palais pour regarder les nuages, mais ils étaient moins beaux que ceux de tes crépuscules. »\n*(Marguerite Yourcenar, Nouvelles orientales, 1963)*",
              question:
                "Question adaptée à cette notion · Analysez la construction de chaque verbe souligné : « <u>ai vu</u> … se rouvrir » · « <u>suis monté</u> » · « <u>étaient</u> moins beaux »",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Construction", "Compléments essentiels"],
                  rows: [
                    ["ai vu … se rouvrir", "Transitif direct + proposition infinitive", "COD : la proposition subordonnée infinitive « se rouvrir les portes » ; « les portes » est le sujet postposé de « se rouvrir » et la relative « qui me séparaient du monde » complète ce nom"],
                    ["suis monté", "Intransitif", "Aucun complément d'objet (« sur la terrasse » = CC de lieu, « pour regarder les nuages » = CC de but)"],
                    ["étaient moins beaux", "Attributif", "Attribut du sujet « ils » : « moins beaux » (adjectif au comparatif d'infériorité)"],
                  ],
                },
                { type: "note", text: "💡 « suis monté » est un passé composé avec l'auxiliaire « être » (verbe de mouvement), à ne pas confondre avec une voix passive." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              badge: "Pour aller plus loin",
              title: "Exercice 5 : phrase d'entraînement",
              enonce:
                "« Ces récits nous <u>font</u> rêver ; une joie nouvelle <u>monte</u> en nous. »",
              question: "Analysez la construction de chaque verbe souligné : « <u>font</u> rêver » · « <u>monte</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Construction", "Compléments essentiels / sujet"],
                  rows: [
                    ["font rêver", "Voix factitive (« faire + infinitif »)", "Noyau verbal : « font rêver » · sujet : « ces récits » · COD : « nous »"],
                    ["monte", "Intransitif", "Aucun complément d'objet · sujet : « une joie nouvelle » · « en nous » = CC de lieu au sens figuré"],
                  ],
                },
                { type: "note", text: "⚠️ « faire » est ici un semi-auxiliaire factitif : on analyse ensemble « font rêver » comme noyau verbal." },
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
              text: "Ces exercices reproduisent des erreurs fréquentes relevées dans les copies. Repérer ce qui cloche dans une copie, c'est aussi ce que vous ferez plus tard avec vos élèves.",
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 1 · Réponse à corriger : « à son père »",
              enonce: "Réponse d'un candidat : « **à son père** : CC de comparaison », pour *« Il ressemble à son père. »*",
              question: "Identifiez l'erreur et rédigez la réponse attendue.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Erreur : COI confondu avec CC", bad: true },
                    { text: "Le verbe impose la préposition « à » : on dit « ressembler à quelqu'un »" },
                    { text: "La pronominalisation confirme que le groupe dépend du verbe : « Il lui ressemble »" },
                    { text: "Réponse attendue : « ressembler » est employé dans une construction transitive indirecte ; « à son père » est COI" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 2 · Réponse à corriger : « médecin »",
              enonce: "Réponse d'un candidat : « **médecin** : COD du verbe devenir », pour *« Il devient médecin. »*",
              question: "Identifiez l'erreur et justifiez précisément votre réponse.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Erreur : attribut du sujet confondu avec COD", bad: true },
                    { text: "« devenir » est ici un verbe d'état : il relie le sujet « il » à une identité, « médecin »" },
                    { text: "Le remplacement par « être » conserve cette relation : « Il est médecin »" },
                    { text: "Réponse attendue : « médecin » est un nom, attribut du sujet « il » ; « devenir » est employé dans une construction attributive" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 3 · Réponse à corriger : « rêver »",
              enonce: "Réponse d'un candidat : « **rêver** : sujet du verbe font », pour *« Ces récits nous font rêver. »*",
              question: "Identifiez l'erreur et rédigez la réponse attendue.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Erreur : l'infinitif est analysé isolément, sans reconnaître la construction factitive", bad: true },
                    { text: "Le sujet du noyau verbal « font rêver » est le GN « ces récits » ; « nous » en est le COD" },
                    { text: "Réponse attendue : « font rêver » est un noyau verbal à la voix factitive, formé de « faire » semi-auxiliaire et de l'infinitif « rêver »" },
                  ],
                },
                { type: "note", text: "Le sujet fait naître chez quelqu'un le procès exprimé par l'infinitif : c'est le sens factitif." },
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
                  question: "Quelles constructions du verbe faut-il savoir reconnaître ?",
                  answer:
                    "**Intransitive** : aucun complément d'objet (« Il dort »).\n**Transitive directe** : un COD (« Il lit un roman »).\n**Transitive indirecte** : un COI (« Il répond à la question »).\n**Attributive** : un attribut du sujet après un verbe d'état (« Il semble inquiet »).",
                },
                {
                  question: "Quelle différence y a-t-il entre la construction et la voix d'un verbe ?",
                  answer:
                    "La **construction** indique les compléments appelés par le verbe. La **voix** indique comment l'action est organisée autour du sujet.\nDans « Les copies sont corrigées par le jury », « corriger » est transitif direct et la forme verbale est à la voix passive.",
                },
                {
                  question: "Comment distinguer une construction transitive directe d'une construction transitive indirecte ?",
                  answer:
                    "Le complément est relié au verbe **sans préposition** : construction transitive directe, avec un COD (« Il lit un roman »).\nIl est introduit par une **préposition imposée par le verbe** : construction transitive indirecte, avec un COI (« Il obéit à ses parents » → « Il leur obéit »).",
                },
                {
                  question: "Comment distinguer un COD d'un attribut du sujet ?",
                  answer:
                    "Le **COD** complète un verbe transitif direct : « Il mange une pomme ».\nL'**attribut du sujet** caractérise le sujet par l'intermédiaire d'un verbe d'état : « Il devient médecin ». Il s'accorde avec le sujet et ne peut pas devenir sujet d'une phrase passive.",
                },
                {
                  question: "Quels sont les principaux verbes d'état ?",
                  answer:
                    "Être, paraître, sembler, devenir, rester, demeurer, avoir l'air, passer pour, se révéler, s'avérer.\nIls relient le sujet à un attribut : « Elle semble fatiguée ».",
                },
                {
                  question: "Quels sont les principaux emplois de la voix pronominale ?",
                  answer:
                    "**Réfléchi** : réflexif (« se laver ») ou réciproque (« se parler »).\n**À sens passif** : « ce livre se vend » (= est vendu).\n**À sens actif** : notamment les verbes essentiellement pronominaux (« se souvenir »).",
                },
                {
                  question: "Comment reconnaître une construction impersonnelle ?",
                  answer:
                    "Elle est construite avec un pronom « il » qui ne renvoie à personne ni à rien : « Il pleut », « Il faut de la patience ».\n« Il » est le sujet grammatical ; le groupe qui suit éventuellement le verbe est un complément du verbe impersonnel.",
                },
                {
                  question: "Comment reconnaître et justifier la voix passive ?",
                  answer:
                    "Le verbe prend la forme **être + participe passé accordé** et le sujet subit l'action. On vérifie en reconstruisant l'actif : « Les copies sont corrigées par le jury » → « Le jury corrige les copies ».\nSeul un verbe transitif direct peut être mis au passif.",
                  astuce: "⚠️ « Il est parti » est un passé composé, pas un passif.",
                },
                {
                  question: "Pour aller plus loin : qu'est-ce que la construction factitive ?",
                  answer:
                    "Le sujet fait accomplir l'action exprimée par l'infinitif : « Elle fait travailler ses élèves ». L'ensemble **faire + infinitif** forme un seul noyau verbal : « fait travailler ».",
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
              center: { title: "Le groupe verbal", subtitle: "Construction ≠ voix" },
              branches: [
                {
                  title: "Point de départ",
                  lines: ["Repérer le verbe noyau", "Observer les groupes liés au verbe", "Analyser son emploi dans la phrase"],
                  variant: "blue",
                },
                {
                  title: "La construction",
                  lines: ["Sans objet : intransitive", "Avec COD : transitive directe", "Avec COI : transitive indirecte", "Verbe d'état + attribut : attributive"],
                  variant: "blue",
                },
                {
                  title: "La voix",
                  lines: ["Active : le sujet accomplit l'action", "Passive : le sujet subit l'action", "Pronominale : me, te, se, nous, vous", "Impersonnelle : « il » sans référent"],
                  variant: "green",
                },
                {
                  title: "Reconnaître le passif",
                  lines: ["Être + participe passé accordé", "Le COD actif devient sujet", "L'agent est introduit par « par » ou « de »", "Possible seulement avec un transitif direct"],
                  variant: "green",
                },
                {
                  title: "Réponse attendue",
                  lines: ["Construction ? → intransitive, transitive ou attributive", "Voix ? → active, passive, pronominale ou impersonnelle", "Toujours citer un indice dans la phrase"],
                  variant: "yellow",
                },
                {
                  title: "Pour aller plus loin",
                  lines: ["Faire + infinitif : construction factitive", "Le sujet fait accomplir l'action", "Faire + infinitif = un seul noyau verbal"],
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
