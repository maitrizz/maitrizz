import type { Fiche } from "@/components/fiche/types";
import { EXERCICES_GROUPE_VERBAL } from "./exercices-groupe-verbal";
import { COPIES_GROUPE_VERBAL } from "./copies-groupe-verbal";

export const SAVOIR_FAIRE = [
  { id: "verbe-noyau", label: "Verbe noyau" },
  { id: "complements-verbe", label: "Compléments du verbe" },
  { id: "attributs", label: "Attributs" },
  { id: "voix-passive", label: "Voix passive" },
  { id: "pronominalisation", label: "Pronominalisation" },
  { id: "periphrases", label: "Périphrases" },
];

export const ficheGroupeVerbal: Fiche = {
  slug: "groupe-verbal",
  matiere: "francais",
  numero: 4,
  partie: "Partie 1 : Grammaire de la phrase",
  title: "Le groupe verbal",
  subtitle: "Identifier la construction du verbe : transitivité, verbes pronominaux et impersonnels, voix passive.",
  badges: [
      {
          "label": "★★★ Tombe chaque année",
          "variant": "hot"
      },
      {
          "label": "Cycle 4 + lycée",
          "variant": "info"
      }
  ],
  metaTitle: "Groupe verbal · Fiche de révision CRPE",
  metaDescription: "Le groupe verbal au CRPE : verbe noyau, constructions transitive, intransitive, attributive, voix pronominale, passive, impersonnelle. Exercices corrigés.",
  maitriseNotionSlug: "groupe-verbal",
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
              text: "« Le verbe souligné est-il transitif, intransitif ou attributif ? À quelle voix est-il employé ? » Voilà une double question typique que le jury peut poser sur le groupe verbal.\n\nPour y répondre sans hésiter, on part toujours du **verbe noyau** et on observe deux choses : comment il se **construit** (employé seul, avec un objet, ou avec un attribut), et comment l'action s'**organise autour du sujet** (sa voix : active, passive, pronominale, impersonnelle). C'est l'objet de cette fiche.",
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
                  type: "callout",
                  variant: "warning",
                  title: "Un même verbe change souvent de construction selon la phrase",
                  text: "Beaucoup de verbes très courants n'ont pas une construction fixe : c'est le contexte qui tranche. **monter, descendre, sortir, rentrer, passer, sentir, tourner** sont transitifs directs avec un COD (« Il **monte** l'escalier ») et intransitifs sans complément (« Il **monte** »). « passer » peut même devenir attributif (« Il **passe pour** un génie »). On n'étiquette donc jamais un verbe dans l'absolu : on observe sa construction **dans la phrase étudiée**.",
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
                  type: "table",
                  title: "Les quatre constructions en un coup d'œil",
                  headers: ["Construction", "Le verbe…", "Test décisif", "Exemple"],
                  rows: [
                    ["**Intransitive**", "n'a aucun complément d'objet", "« quoi ? / qui ? » après le verbe est impossible", "« Il **dort**. »"],
                    ["**Transitive directe**", "a un COD, sans préposition", "« quoi ? / qui ? » sans préposition ; pronom *le/la/les* ; passif souvent possible", "« Elle lit **un roman**. »"],
                    ["**Transitive indirecte**", "a un COI, introduit par une préposition (*à, de*)", "« à / de qui ? quoi ? » ; pronom *lui/leur, y, en* ; passif impossible", "« Il obéit **à ses parents**. »"],
                    ["**Attributive**", "relie le sujet à un attribut, via un verbe d'état", "remplacement par *être* ; accord avec le sujet ; passif impossible", "« Elle semble **fatiguée**. »"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Les étiquettes COD, COI et attribut caractérisent la construction observée. Pour identifier précisément la fonction d'un groupe, voir la [notion 2 sur les fonctions syntaxiques](fiche:fonctions-syntaxiques).",
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
                      piege: "Le pronom réfléchi « se » peut être COD ou COI : « Elle se lave » (se = COD) mais « Elle se lave les mains » (se = COI, les mains = COD). Cette distinction commande l'accord du participe passé, traité dans la [notion 12 sur l'accord du participe passé](fiche:accord-participe-passe).",
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
                    {
                      type: "callout",
                      variant: "info",
                      text: "💡 **Passif impersonnel** : avec certains verbes, le passif se construit avec un « il » impersonnel, sans sujet réel, le vrai propos suivant le verbe : « **Il** a été décidé que la séance serait reportée », « **Il** est interdit de fumer ». Tournure fréquente dans les textes administratifs et juridiques.",
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
                      text: "Dans « Elle **fait travailler** ses élèves », ce n'est pas elle qui travaille : elle fait accomplir l'action par ses élèves. On appelle cela la **construction factitive**. Pour le concours, retenez surtout que « faire + infinitif » s'analyse comme un seul noyau verbal : « fait travailler ». L'infinitif « travailler » n'est donc pas COD de « faire ».\n\nLe verbe **laisser** et les verbes de perception (**voir, entendre, sentir, regarder**) fonctionnent de façon voisine avec un infinitif : « Elle **laisse partir** les invités », « J'ai **vu se rouvrir** les portes ». On parle alors de proposition infinitive ou de noyau verbal complexe ; ces analyses sont reprises dans la [notion 10 sur les formes non conjuguées](fiche:formes-non-conjuguees).",
                    },
                  ],
                },
                {
                  type: "table",
                  title: "Les voix en un coup d'œil",
                  headers: ["Voix", "Rôle du sujet", "Marque / forme", "Exemple"],
                  rows: [
                    ["**Active**", "le sujet accomplit l'action", "forme verbale ordinaire", "« Léa **lave** la voiture. »"],
                    ["**Passive**", "le sujet subit l'action", "*être* + participe passé accordé (+ complément d'agent)", "« La voiture **est lavée** par Léa. »"],
                    ["**Pronominale**", "le sujet est associé à un pronom de même personne", "pronom *me, te, se, nous, vous*", "« Elle **se lave**. »"],
                    ["**Impersonnelle**", "le sujet *il* ne renvoie à rien", "*il* sujet grammatical sans référent", "« **Il** pleut. »"],
                    ["**Factitive** (pour aller plus loin)", "le sujet fait accomplir l'action", "*faire* + infinitif = un seul noyau verbal", "« Elle **fait travailler** ses élèves. »"],
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
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°5 · Passé composé avec « être » pris pour un passif",
              badge: "Très fréquent",
              faux: "Dans « Elle est partie ce matin », « est partie » est analysé comme une voix passive.",
              vrai: "C'est un **passé composé** : certains verbes de mouvement ou d'état (partir, arriver, venir, tomber, rester…) forment leur passé composé avec l'auxiliaire « être ». Il n'y a ni action subie, ni complément d'agent possible.",
              methode: "Test : essayer de reconstruire une phrase active où le sujet deviendrait COD. « Quelqu'un a parti Elle » est impossible → ce n'est pas un passif. Pour un vrai passif, « Les portes ont été ouvertes » donne « Quelqu'un a ouvert les portes ».",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 1 (maternelle) :** aucune terminologie. À l'oral, les élèves construisent des phrases où l'on comprend « qui fait quoi » : le verbe est implicitement le mot de l'action. C'est le socle du futur repérage du verbe noyau.\n\n**Cycle 2 (CP-CE2) :** les élèves repèrent le **verbe** dans la phrase, puis distinguent peu à peu le verbe de ce qui le complète, surtout par manipulation (changer le temps, remplacer le groupe).\n\n**Cycle 3 (CM1-6e) :** on installe le **complément du verbe** (équivalent du COD/COI, non déplaçable) et on le distingue du **complément de phrase** (déplaçable, supprimable). L'**attribut du sujet** est introduit. La transitivité n'est pas nommée, mais la construction du verbe est observée. Les attendus par cycle figurent dans les [programmes de français en vigueur](https://eduscol.education.fr/137/cycle-2-et-cycle-3).\n\n**Ce que vous devez savoir dire :** « On part du verbe, noyau du groupe verbal. On observe s'il est employé seul, avec un complément d'objet direct ou indirect, ou avec un attribut relié par un verbe d'état. Le métalangage du concours (transitivité, COD, COI, attribut) précise des repères que les élèves construisent dès le cycle 3 par la manipulation. »",
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
                "*Question typique : « Dans la phrase “Le candidat <u>répond</u> à la question.”, le verbe souligné est-il employé dans une construction intransitive, transitive ou attributive ? Justifiez votre réponse. »*",
              steps: [
                {
                  number: "1",
                  text: "**Vérifier d'abord si le verbe est attributif.** On essaie de remplacer « répond » par « est » : « Le candidat est à la question » n'a pas de sens. « répondre » n'est donc pas ici un verbe d'état, et la construction n'est pas attributive.",
                  example: { lines: ["« répond » n'équivaut pas à « est » → construction non attributive"] },
                },
                {
                  number: "2",
                  text: "**Chercher si le verbe appelle un complément d'objet.** On pose la question après le verbe : « Le candidat répond à quoi ? » → « à la question ». Le verbe reçoit bien un complément : il n'est donc pas intransitif dans cette phrase.",
                  example: { lines: ["répond **à quoi ?** → à la question"] },
                },
                {
                  number: "3",
                  text: "**Observer la présence d'une préposition.** Le complément « à la question » est introduit par la préposition « à », imposée par le verbe (« répondre à quelque chose ») : c'est donc un COI, et non un COD. La construction est **transitive indirecte**.",
                  example: {
                    lines: [
                      "« Le candidat **y** répond » → la pronominalisation par « y » confirme l'analyse",
                    ],
                  },
                  warn: "⚠️ Le geste décisif : c'est la **préposition** appelée par le verbe (et non le sens) qui sépare le COI du COD.",
                },
                {
                  number: "✅",
                  text: "**Réponse attendue (formulation modèle) :** « Le verbe *répondre* est employé dans une construction **transitive indirecte** : il se construit avec la préposition *à* (répondre à quelque chose), et son complément *à la question* est un **COI**, comme le confirme la pronominalisation par *y* (le candidat *y* répond). »",
                  warn: "⚠️ Dans une autre phrase, la même démarche peut conduire à une construction intransitive, transitive directe ou attributive : c'est l'observation des compléments, jamais le verbe pris isolément, qui décide.",
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
                { type: "line", text: "**Explication :** le verbe se construit *ressembler à quelqu'un* ; le complément *à sa mère*, introduit par la préposition *à*, est donc un COI. La pronominalisation par *lui* (« Elle **lui** ressemble ») le confirme, et le passif est impossible." },
                { type: "line", text: "**Réponse attendue (formulation jury) :** « Le verbe *ressembler* est employé dans une construction **transitive indirecte** ; *à sa mère* est un **COI** (ressembler à quelqu'un, pronominalisation par *lui*). »" },
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
                "*Question typique : « Dans la phrase “Les copies <u>ont été corrigées</u> par le jury.”, le verbe souligné est-il à la voix active ou à la voix passive ? Justifiez votre réponse. »*",
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
                  number: "✅",
                  text: "**Réponse attendue (formulation modèle) :** « La forme verbale *ont été corrigées* est à la **voix passive** : elle est formée de l'auxiliaire *être* et du participe passé *corrigées* (accordé avec le sujet), le sujet *les copies* subit l'action, et la phrase peut être ramenée à l'actif (*Le jury a corrigé les copies*), où le complément d'agent *par le jury* redevient sujet. »",
                },
                {
                  number: "⚠️",
                  text: "**Attention au faux passif :** la présence de « être » ne suffit pas. « Il est parti » est un passé composé, car on ne peut pas construire une phrase active dans laquelle « il » serait COD (voir le piège n°5).",
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
                { type: "line", text: "**Explication :** la forme verbale associe l'auxiliaire *être* (*furent*) au participe passé *ouvertes*, accordé avec le sujet (féminin pluriel). Le sujet *les portes* subit l'action, *par le gardien* est complément d'agent, et l'actif correspondant est « Le gardien ouvrit les portes »." },
                { type: "line", text: "**Réponse attendue (formulation jury) :** « *furent ouvertes* est à la **voix passive** : auxiliaire *être* + participe passé accordé, sujet qui subit l'action et complément d'agent *par le gardien* (actif : Le gardien ouvrit les portes). »" },
                { type: "note", text: "@nav Méthode en tête ? Direction S’entraîner." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Analyser un verbe à la voix pronominale",
              intro:
                "*Question typique : « Dans la phrase “Les deux sœurs <u>se sont écrit</u> tout l'été.”, identifiez l'emploi du verbe pronominal souligné et la fonction du pronom “se”. »*",
              steps: [
                {
                  number: "1",
                  text: "**Vérifier qu'on est bien à la voix pronominale.** Le verbe est précédé d'un pronom (*se*) de la même personne que le sujet *les deux sœurs*. C'est la marque de la voix pronominale.",
                  example: { lines: ["sujet *les deux sœurs* + pronom *se* de même personne → voix pronominale"] },
                },
                {
                  number: "2",
                  text: "**Identifier l'emploi.** Les sœurs s'écrivent l'une à l'autre : le pronom marque la réciprocité, c'est un emploi **réfléchi réciproque**. (Pour mémoire : réflexif = le sujet agit sur lui-même ; sens passif = *ce livre se vend* (= est vendu) ; sens actif = verbe essentiellement pronominal comme *se souvenir*.)",
                  example: { lines: ["*se sont écrit* = elles ont écrit l'une à l'autre → réciproque"] },
                },
                {
                  number: "3",
                  text: "**Retrouver la construction du verbe pour analyser “se”.** On dit *écrire à quelqu'un* : la construction est indirecte, donc le pronom *se* est **COI**, et non COD.",
                  example: { lines: ["*écrire **à** quelqu'un* → *se* = COI (et non COD)"] },
                  warn: "⚠️ Le geste décisif : *se* n'est pas automatiquement COD. On retrouve toujours la construction du verbe (*laver quelqu'un* → COD ; *écrire à quelqu'un* → COI). Cette analyse commande l'accord du participe passé, traité dans la [notion 12](fiche:accord-participe-passe) : ici *écrit* reste invariable, car *se* est COI.",
                },
                {
                  number: "✅",
                  text: "**Réponse attendue (formulation modèle) :** « *se sont écrit* est un verbe à la **voix pronominale**, en emploi **réciproque** (les sœurs s'écrivent l'une à l'autre) ; le pronom *se* est **COI**, car on écrit *à* quelqu'un. »",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Identifiez l'emploi pronominal et la fonction de « se » : « Ils <u>se sont battus</u> dans la cour. »",
              correction: [
                { type: "line", text: "**Explication :** *se battre* est un verbe essentiellement pronominal (il n'existe pas sans le pronom au même sens) : l'emploi est **à sens actif**. Le pronom *se* est ici soudé au verbe et ne s'analyse pas séparément comme COD ou COI." },
                { type: "note", text: "Pour les verbes essentiellement pronominaux, on ne décompose pas « se » : c'est ce qui les distingue des pronominaux réfléchis comme « se laver »." },
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
              title: "Le groupe verbal",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_GROUPE_VERBAL,
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
              title: "Le groupe verbal",
              copies: COPIES_GROUPE_VERBAL,
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
      ],
    },
  ],
};
