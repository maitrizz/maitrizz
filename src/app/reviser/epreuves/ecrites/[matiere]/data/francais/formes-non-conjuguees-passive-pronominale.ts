import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "fv1", label: "Je reconnais les 4 formes non conjuguées (infinitif, participe présent, gérondif, participe passé) et leur fonction ; je sais qu'elles ne créent pas de proposition à elles seules (voir notion 5)" },
  { id: "fv2", label: "Je distingue le participe présent (sans « en », épithète) du gérondif (« en » + -ant, CC) et de l'adjectif verbal (accordé)" },
  { id: "fv3", label: "Je connais la construction de la voix passive (être + participe passé accordé avec le sujet) et le complément d'agent (par / de)" },
  { id: "fv4", label: "Je sais quand le passif est impossible : verbe intransitif, verbe attributif, « avoir » de possession" },
  { id: "fv5", label: "Je connais la valeur stylistique de la voix passive : mise en relief du patient, effacement de l'agent" },
  { id: "fv6", label: "Je connais les 4 emplois du verbe pronominal : réfléchi, réciproque, passif pronominal, essentiellement pronominal" },
  { id: "fv7", label: "Je distingue la forme passive (être + participe passé) de la forme pronominale à sens passif (se + verbe) ; l'accord du participe passé est détaillé en notion 11" },
];

export const ficheFormesNonConjugueesPassivePronominale: Fiche = {
  slug: "formes-non-conjuguees-passive-pronominale",
  matiere: "francais",
  numero: 9,
  partie: "Partie 1 : Le verbe",
  title: "Formes non conjuguées, voix passive et forme pronominale",
  subtitle:
    "Reconnaître et analyser l'infinitif, les participes, le gérondif, la voix passive et les verbes pronominaux",
  badges: [
    { label: "★★ Fréquent", variant: "hot" },
    { label: "Cycle 3-4 · BOEN n°1 du 22 janvier 2019", variant: "info" },
  ],
  metaTitle: "Formes non conjuguées, voix passive, forme pronominale (CRPE) · Fiche | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur les formes du verbe : les 4 formes non conjuguées (infinitif, participe présent, gérondif, participe passé), le participe présent vs gérondif vs adjectif verbal, la voix passive (construction, complément d'agent, valeur), et les 4 emplois du verbe pronominal. Réponses jury, exercices corrigés, flashcards et auto-évaluation.",
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
                  title: "Les 4 formes non conjuguées",
                  text: "Infinitif, participe présent, gérondif, participe passé : leur nature et leur fonction.",
                },
                {
                  number: "②",
                  title: "Participe présent, gérondif, adjectif verbal",
                  text: "Trois formes proches en -ant ou -é qu'il faut savoir distinguer.",
                },
                {
                  number: "③",
                  title: "La voix passive",
                  text: "Être + participe passé accordé, complément d'agent, cas d'impossibilité et valeur stylistique.",
                },
                {
                  number: "④",
                  title: "La forme pronominale",
                  text: "Réfléchi, réciproque, passif pronominal, essentiellement pronominal.",
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
              text: "Cette fiche réunit trois manières de se présenter du verbe : les formes non conjuguées, la voix passive et la forme pronominale. On apprend à reconnaître chaque forme et à l'analyser. Le rôle de ces formes au niveau de la proposition (subordonnée infinitive ou participiale) relève de la notion 5 ; la transitivité, de la notion 4 ; l'accord du participe passé, de la notion 11.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Les 4 formes non conjuguées",
              blocks: [
                {
                  type: "paragraph",
                  text: "Les formes **non conjuguées** ne portent ni personne ni temps personnel. Seules, elles **ne créent pas de proposition** (voir notion 5). Elles occupent une fonction dans la phrase, comme un mot ou un groupe.",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Infinitif",
                      definition: "Forme nominale du verbe, invariable, sans sujet exprimé.",
                      sousClasses: "**Reconnaissance :** -er, -ir, -re, -oir",
                      exemples: [
                        "« **Vivre**, sans l'écriture, me va mal » : infinitif, sujet de « va »",
                        "« pour **regarder** les nuages » : infinitif, groupe infinitif prépositionnel CC de but",
                      ],
                      piege: "Avec un sujet propre distinct, après un verbe de perception, l'infinitif forme une subordonnée infinitive (notion 5).",
                      test: "Fonctions possibles : sujet, COD, complément du nom, CC de but (pour + infinitif).",
                    },
                    {
                      title: "Participe présent",
                      definition: "Forme en -ant, invariable, sans « en ». Se rapporte à un nom dont il partage le sujet.",
                      sousClasses: "**Reconnaissance :** radical + -ant, sans « en »",
                      exemples: [
                        "« Une femme passa, **tenant** par la main un petit garçon » : épithète détachée du nom « femme »",
                      ],
                      piege: "Sujet distinct du sujet principal → subordonnée participiale (notion 5). Avec « en » → gérondif.",
                      test: "Invariable, sans « en », fonction d'épithète détachée.",
                    },
                    {
                      title: "Gérondif",
                      definition: "« en » + participe présent, invariable, toujours au même sujet que le verbe principal.",
                      sousClasses: "**Reconnaissance :** « en » + -ant",
                      exemples: [
                        "« Il rentra **en chantant** » : CC de manière",
                        "« C'est **en forgeant** qu'on devient forgeron » : CC de moyen",
                      ],
                      piege: "« en » + -ant = gérondif (CC) ; sans « en » = participe présent (épithète).",
                      test: "Fonctions : CC de manière, temps, cause, moyen, condition.",
                    },
                    {
                      title: "Participe passé",
                      definition: "Forme en -é, -i, -u… qui s'accorde avec le nom qualifié, et entre dans les temps composés avec un auxiliaire.",
                      sousClasses: "**Reconnaissance :** -é, -i, -u, -is, -it (accordé)",
                      exemples: [
                        "« les yeux **baissés** » : épithète liée du nom « yeux » (accord masculin pluriel)",
                        "« **Pressée** d'atteindre sa maison » : épithète détachée du sujet (accord féminin singulier)",
                      ],
                      piege: "Employé avec un auxiliaire, il forme un temps composé (notion 6) ; l'accord est détaillé en notion 11.",
                      test: "S'accorde avec le nom : épithète liée ou détachée.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Participe présent, gérondif, adjectif verbal",
              blocks: [
                {
                  type: "paragraph",
                  text: "Trois formes proches se distinguent par un test simple : la présence de « en » et la possibilité d'accord.",
                },
                {
                  type: "table",
                  headers: ["Forme", "Reconnaissance", "Variable ?", "Exemple"],
                  rows: [
                    ["Participe présent", "-ant, sans « en »", "Invariable", "« une femme **tenant** son enfant » : épithète détachée"],
                    ["Gérondif", "« en » + -ant", "Invariable", "« **en souriant** » : CC de manière"],
                    ["Adjectif verbal", "-ant (ou -ent), employé comme adjectif", "S'accorde", "« une femme **charmante** », « une histoire **émouvante** »"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ Test : « en » devant la forme → gérondif (CC). Accord avec le nom → adjectif verbal. Ni l'un ni l'autre, forme en -ant invariable rapportée à un nom → participe présent.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "La voix passive",
              blocks: [
                {
                  type: "paragraph",
                  text: "À la voix passive, le **sujet subit** l'action. Construction : **être (conjugué) + participe passé accordé avec le sujet**. C'est le temps de « être » qui donne le temps du verbe passif. Seuls les verbes transitifs directs peuvent se mettre au passif (voir notion 4).",
                },
                {
                  type: "table",
                  title: "Actif et passif (le temps est porté par « être »)",
                  headers: ["Actif", "Passif", "Temps de « être »"],
                  rows: [
                    ["Le chat mange la souris.", "La souris est mangée par le chat.", "Présent"],
                    ["Le chat mangeait la souris.", "La souris était mangée par le chat.", "Imparfait"],
                    ["Le chat a mangé la souris.", "La souris a été mangée par le chat.", "Passé composé"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Le complément d'agent",
                  text: "Le **complément d'agent** désigne celui qui effectue l'action. Il est introduit par **par** (« mangée **par** le chat ») ou par **de** (« aimée **de** tous », pour un état ou un sentiment). Il peut être absent : « La porte a été fermée » (agent inconnu ou volontairement tu).",
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Quand le passif est impossible",
                  text: "Le passif exige un COD à promouvoir en sujet. Il est donc **impossible** avec : un verbe **intransitif** (« Il dort »), un verbe **attributif** (« Elle semble fatiguée »), le verbe **avoir** au sens de possession (« Il a une voiture »).",
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Valeur stylistique",
                  text: "La voix passive met en relief le **patient** (ce qui subit l'action) et permet d'**effacer l'agent** : « Les portes furent ouvertes » insiste sur l'événement, pas sur celui qui agit (effet de mystère ou de généralité).",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "La forme pronominale : 4 emplois",
              blocks: [
                {
                  type: "paragraph",
                  text: "Un verbe **pronominal** est conjugué avec un pronom réfléchi de même personne que le sujet (me, te, se, nous, vous, se). Il faut distinguer la **forme** (pronominale) des **emplois**, qui déterminent l'accord du participe passé (détaillé en notion 11).",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Réfléchi",
                      definition: "Le sujet fait l'action sur lui-même ; le pronom est COD ou COI.",
                      exemples: [
                        "« Elle **se lave** » : elle se lave elle-même (« se » = COD)",
                        "« Elle **se lave** les mains » : (« se » = COI, « les mains » = COD)",
                      ],
                      test: "Le sujet et l'objet de l'action sont la même personne.",
                    },
                    {
                      title: "Réciproque",
                      definition: "Au pluriel : les sujets font l'action l'un sur l'autre.",
                      exemples: ["« Ils **se regardent** » : l'un regarde l'autre"],
                      test: "Sujet pluriel, action mutuelle (« l'un l'autre »).",
                    },
                    {
                      title: "Passif pronominal",
                      definition: "Valeur passive : le sujet est le patient, l'agent est absent.",
                      exemples: [
                        "« Ce livre **se lit** facilement » : on lit ce livre (sens passif)",
                        "« Le français **se parle** dans de nombreux pays »",
                      ],
                      test: "On pourrait dire « est lu / est parlé » : sens passif sans auxiliaire « être ».",
                    },
                    {
                      title: "Essentiellement pronominal",
                      definition: "Le verbe n'existe qu'à la forme pronominale ; le pronom n'est pas analysable.",
                      exemples: [
                        "s'enfuir, se souvenir, s'abstenir, s'évanouir, se repentir, s'emparer",
                        "« Elle **s'est souvenue** de lui »",
                      ],
                      test: "Le verbe sans « se » n'existe pas (« souvenir » seul est impossible).",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "💡 L'accord du participe passé varie selon l'emploi (réfléchi, réciproque, passif, essentiellement pronominal). Cette règle, centrale, est traitée en détail dans la notion 11.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · Confondre participe présent et gérondif",
              badge: "Formes proches",
              faux: "« en chantant » analysé comme un participe présent.",
              vrai: "« en » + -ant = **gérondif** (complément circonstanciel). Sans « en » = participe présent (épithète).",
              methode: "Chercher « en » devant la forme : présent → gérondif ; absent → participe présent.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 · Confondre forme passive et forme pronominale à sens passif",
              badge: "Deux constructions",
              faux: "« Ce livre se lit facilement » analysé comme une forme passive.",
              vrai: "C'est une **forme pronominale à sens passif** : il n'y a pas d'auxiliaire « être » + participe passé. La forme passive serait « est lu ».",
              methode: "Passive = « être + participe passé ». Pronominale à sens passif = « se + verbe », sans auxiliaire « être ».",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 · Oublier l'accord du participe passé au passif",
              badge: "Orthographe",
              faux: "« La porte a été fermé. »",
              vrai: "Au passif, le participe passé s'accorde toujours avec le **sujet** : « La porte a été **fermée** ».",
              methode: "Repérer le sujet et accorder le participe passé en genre et en nombre.",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°4 · Prendre un essentiellement pronominal pour un réfléchi",
              badge: "Emploi non analysable",
              faux: "« s'enfuir » analysé comme un réfléchi (« il fuit lui-même »).",
              vrai: "« s'enfuir » n'existe pas sans « se » : c'est un **essentiellement pronominal**. Le pronom n'est pas analysable comme COD ou COI.",
              methode: "Tester l'existence du verbe sans « se » : impossible → essentiellement pronominal.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 2 (CP-CE2) :** premiers participes passés dans les temps composés (« j'ai mangé ») ; la voix passive et les verbes pronominaux ne sont pas étudiés comme tels.\n\n**Cycle 3 :** on observe la transformation active/passive et l'accord du participe passé avec « être », souvent par manipulation. Le gérondif (« en + -ant ») apparaît comme une façon de dire « comment ».\n\n**Ce que vous devez savoir dire :** « On fait d'abord manipuler les transformations (actif/passif) et observer les accords, avant de nommer les formes. La distinction participe présent / gérondif se construit par l'usage. »",
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
              text: "Analyser une forme non conjuguée ; reconnaître une voix passive ou une forme pronominale. Chacune se termine par un checkpoint.",
            },
            {
              type: "rappelExpress",
              title: "Rappel express : les réflexes",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "Forme en -ant : « en » → gérondif (CC) · accordé → adjectif verbal · sinon → participe présent (épithète)",
                    "« être » + participe passé → voix passive (participe passé accordé avec le sujet)",
                    "« se » + verbe → forme pronominale (identifier l'emploi : réfléchi, réciproque, passif, essentiellement pronominal)",
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ Une forme non conjuguée n'a pas de mode ni de temps personnel : on donne sa nature et sa fonction. Le niveau proposition (subordonnée infinitive ou participiale) relève de la notion 5.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Analyser une forme non conjuguée",
              intro:
                "**Question typique :** « Précisez la nature et la fonction de la forme soulignée. »\nOn identifie la forme, puis sa fonction dans la phrase.",
              steps: [
                {
                  number: "1",
                  text: "**Identifier la forme :** infinitif (-er, -ir, -re), participe présent (-ant sans « en »), gérondif (« en » + -ant), participe passé (-é, -i, -u accordé).",
                  example: { lines: ["« tenant » → -ant sans « en » → participe présent"] },
                },
                {
                  number: "2",
                  text: "**Donner la fonction :** infinitif sujet/COD/CC de but ; participe présent épithète détachée ; gérondif CC ; participe passé épithète.",
                  example: { lines: ["« tenant » → épithète détachée du nom « femme »"] },
                },
                {
                  number: "💡",
                  text: "**Vérifier le sujet :** si l'infinitif ou le participe a un sujet propre distinct, c'est une subordonnée (infinitive ou participiale, notion 5).",
                  example: { lines: ["« tenant » : sujet = la femme (même que la principale) → épithète détachée, pas de subordonnée"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Nature et fonction de « en chantant » dans « Il rentra en chantant » ?",
              correction: [
                { type: "line", text: "« en chantant » est un gérondif (« en » + -ant) : CC de manière du verbe « rentra »." },
                { type: "note", text: "Trouvé du premier coup ? Vous tenez la méthode. Sinon, cherchez le « en » qui signale le gérondif." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Reconnaître une voix passive ou une forme pronominale",
              intro:
                "**Question typique :** « Identifiez la voix / l'emploi du verbe souligné. »\nDeux constructions à ne pas confondre.",
              steps: [
                {
                  number: "1",
                  text: "**Voix passive :** repérer « être + participe passé », le sujet qui subit, l'agent introduit par « par » ou « de ». Vérifier l'accord du participe passé avec le sujet.",
                  example: { lines: ["« La porte a été fermée par le gardien » → passive, agent « par le gardien »"] },
                },
                {
                  number: "2",
                  text: "**Forme pronominale :** repérer « se + verbe » (sans auxiliaire « être »), puis identifier l'emploi : réfléchi, réciproque, passif pronominal, essentiellement pronominal.",
                  example: { lines: ["« Ce livre se lit » → forme pronominale à sens passif (et non voix passive)"] },
                },
                {
                  number: "💡",
                  text: "**Pour l'emploi pronominal :** tester l'existence du verbe sans « se » (impossible → essentiellement pronominal), le pluriel mutuel (réciproque), le sens passif (passif pronominal), sinon réfléchi.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "« Ils se sont battus. » Forme passive ou pronominale ? Quel emploi ?",
              correction: [
                { type: "line", text: "Forme pronominale (« se » + verbe, pas d'auxiliaire « être » passif) : emploi réciproque (l'un a battu l'autre)." },
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
                  objectifId: "fv2",
                  question: "Dans « Il rentra en chantant », « en chantant » est :",
                  options: ["Un participe présent", "Un gérondif", "Un adjectif verbal", "Un infinitif"],
                  correctIndex: 1,
                  explanation:
                    "« en » + -ant = gérondif : c'est un complément circonstanciel (ici de manière). Sans « en », ce serait un participe présent.",
                },
                {
                  objectifId: "fv1",
                  question: "Dans « Vivre, sans l'écriture, me va mal », « Vivre » est :",
                  options: ["Un nom", "Un infinitif, sujet de « va »", "Un participe", "Un gérondif"],
                  correctIndex: 1,
                  explanation:
                    "« Vivre » est un infinitif employé comme sujet du verbe « va ». La nature reste verbale (jamais « nom verbal »).",
                },
                {
                  objectifId: "fv3",
                  question: "Comment se construit la voix passive ?",
                  options: [
                    "Avec un pronom réfléchi",
                    "Avec « être » conjugué + participe passé accordé avec le sujet",
                    "Avec « avoir » + participe passé",
                    "Avec « en » + participe présent",
                  ],
                  correctIndex: 1,
                  explanation:
                    "La voix passive se construit avec « être » au temps voulu + participe passé accordé avec le sujet. Le temps est porté par « être ».",
                },
                {
                  objectifId: "fv4",
                  question: "Dans laquelle de ces phrases le passif est-il impossible ?",
                  options: [
                    "« Le jury corrige les copies. »",
                    "« Elle semble fatiguée. »",
                    "« La tempête a déraciné l'arbre. »",
                    "« Marie écrit une lettre. »",
                  ],
                  correctIndex: 1,
                  explanation:
                    "« sembler » est un verbe attributif, sans COD : le passif est impossible. Les trois autres ont un COD promouvable en sujet.",
                },
                {
                  objectifId: "fv5",
                  question: "Quelle est la valeur stylistique de « Les portes furent ouvertes » (sans agent) ?",
                  options: [
                    "Mettre en avant l'agent",
                    "Mettre en relief le patient et effacer l'agent",
                    "Exprimer une habitude",
                    "Exprimer une hypothèse",
                  ],
                  correctIndex: 1,
                  explanation:
                    "L'agent est effacé : on met en avant ce qui subit l'action (les portes), avec un effet de mystère ou de généralité.",
                },
                {
                  objectifId: "fv6",
                  question: "Dans « Ce livre se lit facilement », l'emploi du verbe pronominal est :",
                  options: ["Réfléchi", "Réciproque", "Passif pronominal", "Essentiellement pronominal"],
                  correctIndex: 2,
                  explanation:
                    "« se lit » a un sens passif (on lit ce livre) sans auxiliaire « être » : c'est un passif pronominal.",
                },
                {
                  objectifId: "fv6",
                  question: "« s'enfuir » est un verbe pronominal de type :",
                  options: ["Réfléchi", "Réciproque", "Passif pronominal", "Essentiellement pronominal"],
                  correctIndex: 3,
                  explanation:
                    "« enfuir » n'existe pas sans « se » : c'est un essentiellement pronominal, le pronom n'est pas analysable.",
                },
                {
                  objectifId: "fv7",
                  question: "« Ce livre se lit » et « Ce livre est lu » : quelle différence ?",
                  options: [
                    "Aucune, ce sont deux voix passives",
                    "« se lit » = forme pronominale à sens passif ; « est lu » = voix passive (être + participe passé)",
                    "« se lit » = voix active ; « est lu » = forme pronominale",
                    "Les deux sont des formes pronominales",
                  ],
                  correctIndex: 1,
                  explanation:
                    "« se lit » est une forme pronominale à sens passif (se + verbe) ; « est lu » est une voix passive (être + participe passé).",
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
              sub: "Nature, construction, emploi",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 1 : Nature des formes non conjuguées",
              objectifTag: "Formes non conjuguées",
              question:
                "Identifiez la nature :\na) « <u>tenant</u> par la main un petit garçon »   b) « les yeux <u>baissés</u> »   c) « <u>pressée</u> d'atteindre sa maison »   d) « <u>Vivre</u>, sans l'écriture, me va mal »   e) « pour <u>regarder</u> les nuages »   f) « Il rentra <u>en chantant</u> »",
              correction: [
                { type: "line", label: "a)", text: "Participe présent (-ant, sans « en », invariable)" },
                { type: "line", label: "b)", text: "Participe passé (accord masculin pluriel avec « yeux »)" },
                { type: "line", label: "c)", text: "Participe passé (accord féminin singulier avec le sujet)" },
                { type: "line", label: "d)", text: "Infinitif (-re, sujet de « va »)" },
                { type: "line", label: "e)", text: "Infinitif (-er, CC de but)" },
                { type: "line", label: "f)", text: "Gérondif (« en » + -ant, CC de manière)" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 2 : Transformer à la voix passive",
              objectifTag: "Voix passive",
              question:
                "Mettez à la voix passive et identifiez le complément d'agent :\na) « Le jury corrige les copies. »   b) « Tous les élèves aimaient ce professeur. »   c) « La tempête a déraciné l'arbre. »",
              correction: [
                { type: "line", label: "a)", text: "« Les copies sont corrigées par le jury » (être au présent + participe passé ; agent : par le jury)" },
                { type: "line", label: "b)", text: "« Ce professeur était aimé de tous les élèves » (être à l'imparfait ; agent : de tous les élèves)" },
                { type: "line", label: "c)", text: "« L'arbre a été déraciné par la tempête » (être au passé composé ; agent : par la tempête)" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 3 : Emploi du verbe pronominal",
              objectifTag: "Verbes pronominaux",
              question:
                "Identifiez l'emploi : réfléchi · réciproque · passif pronominal · essentiellement pronominal.\na) « Elle se lave les mains. »   b) « Ils se regardent. »   c) « Ce livre se lit facilement. »   d) « Il s'est évanoui. »   e) « Elle se hâtait. »",
              correction: [
                { type: "line", label: "a)", text: "Réfléchi (elle lave ses propres mains ; « se » = COI)" },
                { type: "line", label: "b)", text: "Réciproque (l'un regarde l'autre, pluriel)" },
                { type: "line", label: "c)", text: "Passif pronominal (on lit ce livre ; sens passif, agent absent)" },
                { type: "line", label: "d)", text: "Essentiellement pronominal (« s'évanouir » n'existe pas sans « se »)" },
                { type: "line", label: "e)", text: "Essentiellement pronominal (« se hâter » n'existe pas sans « se »)" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 4 : Le passif est-il possible ?",
              objectifTag: "Passif impossible",
              question:
                "Ces phrases peuvent-elles être mises au passif ? Justifiez.\na) « Il dort. »   b) « Elle mange une pomme. »   c) « Il a une voiture. » (possession)   d) « Elle semble fatiguée. »",
              correction: [
                { type: "line", label: "a)", text: "Non : verbe intransitif (pas de COD)." },
                { type: "line", label: "b)", text: "Oui : « Une pomme est mangée par elle » (verbe transitif direct)." },
                { type: "line", label: "c)", text: "Non : « avoir » au sens de possession." },
                { type: "line", label: "d)", text: "Non : verbe attributif (pas de COD)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : Analyser",
              sub: "Distinctions fines, réponse jury, valeur stylistique",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 5 : Participe présent, gérondif ou adjectif verbal ?",
              question:
                "Identifiez la nature :\na) « une femme charmante »   b) « en souriant »   c) « tenant son enfant »   d) « une histoire émouvante »   e) « en chantant »",
              correction: [
                {
                  type: "table",
                  headers: ["Forme", "Nature", "Indice"],
                  rows: [
                    ["charmante", "Adjectif verbal", "S'accorde (féminin), qualifie « femme »"],
                    ["en souriant", "Gérondif", "« en » + -ant, complément circonstanciel"],
                    ["tenant", "Participe présent", "-ant sans « en », invariable, épithète"],
                    ["émouvante", "Adjectif verbal", "S'accorde (féminin), qualifie « histoire »"],
                    ["en chantant", "Gérondif", "« en » + -ant, complément circonstanciel"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 6 : Voix passive et valeur stylistique",
              enonce: "« Les portes furent ouvertes, et la lumière entra. »",
              question: "Analysez « furent ouvertes » et commentez la valeur stylistique de l'agent absent.",
              correction: [
                { type: "line", text: "« furent ouvertes » : voix passive, « être » au passé simple + participe passé accordé (féminin pluriel), complément d'agent absent." },
                { type: "note", text: "L'agent effacé met en avant l'événement lui-même (l'ouverture des portes) plutôt que celui qui agit : effet de mystère ou d'universalité." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 7 : Corriger l'analyse",
              question:
                "Ces analyses sont-elles correctes ? Corrigez :\na) « en chantant » → participe présent, épithète détachée\nb) « Ce livre se lit facilement » → voix passive avec auxiliaire « être »\nc) « Elle se hâtait » → verbe pronominal réfléchi\nd) « baissés » → participe présent invariable",
              correction: [
                { type: "line", label: "a)", text: "Faux : « en » + -ant = gérondif (CC), pas participe présent." },
                { type: "line", label: "b)", text: "Faux : forme pronominale à sens passif (pas d'auxiliaire « être » + participe passé)." },
                { type: "line", label: "c)", text: "Faux : « se hâter » est essentiellement pronominal (n'existe pas sans « se »)." },
                { type: "line", label: "d)", text: "Faux : « baissés » est un participe passé accordé (masculin pluriel), pas un participe présent." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 8 : Emploi pronominal et accord",
              objectifTag: "Verbes pronominaux",
              question:
                "Identifiez l'emploi et justifiez l'accord du participe passé :\na) « Elle s'est lavée. »   b) « Elles se sont téléphoné. »   c) « Elle s'est souvenue de lui. »",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Emploi", "Accord du participe passé"],
                  rows: [
                    ["s'est lavée", "Réfléchi (« se » = COD antéposé)", "Accordé féminin singulier avec le sujet"],
                    ["se sont téléphoné", "Réciproque (« se » = COI : téléphoner à)", "Invariable (COD absent)"],
                    ["s'est souvenue", "Essentiellement pronominal", "Accordé féminin singulier avec le sujet"],
                  ],
                },
                { type: "note", text: "💡 La règle complète de l'accord du participe passé des verbes pronominaux est traitée dans la notion 11." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : Maîtriser",
              sub: "Extraits littéraires, réponse jury rédigée",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 9 · Extrait littéraire : Émile Zola",
              enonce:
                "« Une femme passa, tenant par la main un petit garçon. Elle se hâtait, les yeux baissés, pressée d'atteindre sa maison avant la nuit. »\n*(Émile Zola, Germinal, 1885)*",
              question: "Analysez chaque forme non conjuguée et le verbe pronominal.",
              correction: [
                {
                  type: "table",
                  headers: ["Forme", "Nature", "Analyse"],
                  rows: [
                    ["tenant", "Participe présent", "Épithète détachée du nom « femme » (même sujet)"],
                    ["se hâtait", "Verbe pronominal (essentiellement pronominal)", "Conjugué à l'imparfait"],
                    ["baissés", "Participe passé", "Épithète liée du nom « yeux » (accord masculin pluriel)"],
                    ["pressée", "Participe passé", "Épithète détachée du sujet (accord féminin singulier)"],
                    ["atteindre", "Infinitif", "Groupe infinitif prépositionnel, complément de l'adjectif « pressée »"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 10 · Extrait littéraire : Marguerite Yourcenar",
              enonce:
                "« J'ai vu se rouvrir les portes qui me séparaient du monde, je suis monté sur la terrasse du palais pour regarder les nuages. »\n*(Marguerite Yourcenar, Nouvelles orientales, 1963)*",
              question: "Rédigez la réponse jury pour « se rouvrir » et « regarder ».",
              correction: [
                { type: "line", text: "« se rouvrir » est un infinitif : tête d'une subordonnée infinitive COD de « ai vu » (verbe de perception). Son sujet propre « les portes » est distinct du sujet principal « je »." },
                { type: "line", text: "« regarder » est un infinitif : groupe infinitif prépositionnel (pour + infinitif) CC de but de « suis monté ». Même sujet que le verbe principal : ce n'est pas une subordonnée infinitive." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 11 · Voix active et voix passive",
              enonce: "a) « Le gardien a fermé la porte. »   b) « La porte a été fermée. » (agent absent)",
              question: "Identifiez la voix de chaque phrase et commentez l'effet produit.",
              correction: [
                {
                  type: "table",
                  headers: ["Phrase", "Voix", "Effet"],
                  rows: [
                    ["a) a fermé", "Active (passé composé)", "Le gardien est au premier plan, l'agent est mis en valeur"],
                    ["b) a été fermée", "Passive (passé composé, participe passé accordé)", "La porte est au premier plan, l'agent est effacé : mystère ou généralité"],
                  ],
                },
                { type: "note", text: "La voix passive met en avant le patient de l'action et permet d'effacer l'agent." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 12 · Extrait construit sur le modèle des annales",
              enonce:
                "« Elle entendit la pluie tomber sur les toits. Debout devant la fenêtre, les bras croisés, elle regardait le jardin en silence. »",
              question: "Analysez toutes les formes verbales, conjuguées et non conjuguées.",
              correction: [
                {
                  type: "table",
                  headers: ["Forme", "Nature", "Analyse"],
                  rows: [
                    ["entendit", "Verbe conjugué (passé simple)", "Action délimitée, + subordonnée infinitive COD"],
                    ["tomber", "Infinitif", "Subordonnée infinitive COD de « entendit » (sujet propre « la pluie »)"],
                    ["croisés", "Participe passé", "Épithète liée du nom « bras » (accord masculin pluriel)"],
                    ["regardait", "Verbe conjugué (imparfait)", "Description, état en cours"],
                  ],
                },
                { type: "note", text: "💡 « en silence » n'est pas un gérondif (« en » + nom, pas « en » + -ant) : c'est un GN prépositionnel, CC de manière." },
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
              text: "Ces exercices reproduisent le format de la question sur le verbe de la Partie 1 : extrait littéraire, nature et fonction de la forme, voix verbale, réponse jury. Les exercices calqués sur des sujets récents portent le badge ✦.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 1 : Émile Zola, Germinal",
              enonce:
                "« Une femme passa, <u>tenant</u> par la main un petit garçon. Elle se hâtait, les yeux <u>baissés</u>, <u>pressée</u> d'atteindre sa maison. »\n*(Émile Zola, Germinal, 1885)*",
              question: "Rédigez la réponse jury pour « tenant », « baissés » et « pressée ».",
              correction: [
                { type: "line", text: "« tenant » est un participe présent : épithète détachée du sujet « femme » ; même sujet que le verbe principal, ce qui exclut une subordonnée participiale." },
                { type: "line", text: "« baissés » est un participe passé (accord masculin pluriel avec « yeux ») : épithète liée du nom « yeux »." },
                { type: "line", text: "« pressée » est un participe passé (accord féminin singulier avec le sujet) : épithète détachée du sujet." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format concours récent",
              title: "Exercice 2 : Marguerite Yourcenar, Comment Wang-Fô fut sauvé",
              enonce:
                "« J'ai vu <u>se rouvrir</u> les portes qui me séparaient du monde, je suis monté sur la terrasse pour <u>regarder</u> les nuages. »\n*(Marguerite Yourcenar, Nouvelles orientales, 1963)*",
              question: "Format identique au concours · Rédigez la réponse jury pour « se rouvrir » et « regarder ».",
              correction: [
                { type: "line", text: "« se rouvrir » est un infinitif : tête d'une subordonnée infinitive COD de « ai vu » (verbe de perception), sujet propre « les portes » distinct de « je »." },
                { type: "line", text: "« regarder » est un infinitif : groupe infinitif prépositionnel (pour + infinitif) CC de but de « suis monté », même sujet (pas de subordonnée infinitive)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format concours récent",
              title: "Exercice 3 : Lola Lafon, Quand tu écouteras cette chanson",
              enonce:
                "« <u>Vivre</u>, sans l'écriture, me va mal. »\n*(Lola Lafon, Quand tu écouteras cette chanson, 2023)*",
              question: "Format identique au concours · Rédigez la réponse jury pour « Vivre ».",
              correction: [
                { type: "line", text: "« Vivre » est un infinitif présent : il est sujet du verbe « va », assumant une fonction nominale. Sa nature reste verbale (jamais « nom verbal »)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 4 : la voix passive",
              enonce: "« La porte a été <u>fermée</u> par le gardien. »",
              question: "Identifiez la voix verbale ; précisez la nature et la fonction de « par le gardien ».",
              correction: [
                { type: "line", text: "Voix passive : « a été fermée » = « être » au passé composé + participe passé accordé (féminin singulier) avec le sujet « la porte »." },
                { type: "line", text: "« par le gardien » : GN prépositionnel, complément d'agent (il désigne celui qui effectue l'action)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 5 : la forme pronominale",
              enonce: "« Ce vin <u>se boit</u> frais ; les bouteilles <u>se sont vendues</u> en une heure. »",
              question: "Identifiez l'emploi de chaque verbe pronominal.",
              correction: [
                { type: "line", text: "« se boit » : passif pronominal (on boit ce vin ; sens passif, agent absent)." },
                { type: "line", text: "« se sont vendues » : passif pronominal (les bouteilles ont été vendues) ; le participe passé s'accorde avec le sujet (féminin pluriel)." },
                { type: "note", text: "💡 L'accord du participe passé des verbes pronominaux est détaillé en notion 11." },
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
              title: "Exercice 1 · Réponse à corriger : « tenant son enfant »",
              enonce: "Réponse d'un candidat : « **tenant son enfant** : proposition subordonnée participiale », pour *« Une femme passa, tenant son enfant. »*",
              question: "Identifiez l'erreur et rédigez la réponse attendue.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Le sujet de « tenant » est le même que le sujet principal (la femme)", bad: true },
                    { text: "Une subordonnée participiale exige un sujet propre distinct (voir notion 5)" },
                    { text: "Réponse attendue : « tenant » = participe présent, épithète détachée du sujet « femme »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 2 · Réponse à corriger : « en chantant »",
              enonce: "Réponse d'un candidat : « **en chantant** : participe présent, épithète », pour *« Il rentra en chantant. »*",
              question: "Identifiez l'erreur et rédigez la réponse attendue.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "« en » + -ant = gérondif, pas participe présent", bad: true },
                    { text: "Le participe présent s'emploie sans « en »" },
                    { text: "Réponse attendue : « en chantant » = gérondif, CC de manière" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 3 · Réponse à corriger : « Ce livre se lit »",
              enonce: "Réponse d'un candidat : « **se lit** : forme passive (être + participe passé) », pour *« Ce livre se lit facilement. »*",
              question: "Identifiez l'erreur et rédigez la réponse attendue.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Il n'y a pas d'auxiliaire « être » + participe passé : ce n'est pas une voix passive", bad: true },
                    { text: "C'est une forme pronominale à sens passif (« se » + verbe)" },
                    { text: "Réponse attendue : « se lit » = verbe pronominal à sens passif (l'action est subie par le sujet, agent absent)" },
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
              text: "Cliquez sur chaque carte pour révéler la réponse. Questions formulées comme le jury.",
            },
            {
              type: "flashcardDeck",
              cards: [
                {
                  question: "Comment reconnaître les 4 formes non conjuguées ?",
                  answer:
                    "**Infinitif** : -er/-ir/-re/-oir, invariable.\n**Participe présent** : -ant sans « en », invariable.\n**Gérondif** : « en » + -ant, invariable.\n**Participe passé** : -é/-i/-u, s'accorde.",
                  astuce: "💡 Seules, ces formes ne créent pas de proposition (voir notion 5).",
                },
                {
                  question: "Participe présent, gérondif ou adjectif verbal ?",
                  answer:
                    "**Gérondif** : « en » + -ant (CC).\n**Adjectif verbal** : forme en -ant qui s'accorde (« une femme charmante »).\n**Participe présent** : -ant invariable, sans « en », épithète.",
                },
                {
                  question: "Comment se construit la voix passive ?",
                  answer:
                    "« être » (conjugué au temps voulu) + participe passé accordé avec le sujet. Le temps est porté par « être ».\n« La souris est mangée par le chat. »",
                  astuce: "⚠️ Le participe passé s'accorde toujours avec le sujet au passif.",
                },
                {
                  question: "Qu'est-ce que le complément d'agent ?",
                  answer:
                    "Il désigne celui qui effectue l'action à la voix passive. Introduit par **par** (« par le chat ») ou **de** (« aimée de tous »). Il peut être absent.",
                },
                {
                  question: "Quand le passif est-il impossible ?",
                  answer:
                    "Sans COD à promouvoir en sujet : verbe **intransitif** (« il dort »), verbe **attributif** (« elle semble fatiguée »), **avoir** de possession (« il a une voiture »).",
                },
                {
                  question: "Quels sont les 4 emplois du verbe pronominal ?",
                  answer:
                    "**Réfléchi** (le sujet agit sur lui-même) ; **réciproque** (pluriel, l'un l'autre) ; **passif pronominal** (sens passif, « ce livre se lit ») ; **essentiellement pronominal** (n'existe qu'avec « se », « s'enfuir »).",
                },
                {
                  question: "Forme passive ou forme pronominale à sens passif ?",
                  answer:
                    "**Passive** : « être » + participe passé (« est lu »).\n**Pronominale à sens passif** : « se » + verbe, sans auxiliaire « être » (« se lit »).",
                  astuce: "⚠️ « Ce livre se lit » n'est pas une voix passive.",
                },
                {
                  question: "Formule jury pour un participe présent épithète ?",
                  answer:
                    "« [forme] est un participe présent : épithète détachée du sujet [nom] ; même sujet que le verbe principal, ce qui exclut une subordonnée participiale. »",
                  astuce: "💡 Sujet distinct → subordonnée participiale (notion 5).",
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
              center: { title: "Formes du verbe", subtitle: "Non conjuguées, passive, pronominale" },
              branches: [
                {
                  title: "Formes non conjuguées",
                  lines: ["Infinitif · participe présent", "Gérondif (en + -ant)", "Participe passé (accordé)"],
                  variant: "blue",
                },
                {
                  title: "en -ant : 3 formes",
                  lines: ["Gérondif : en + -ant (CC)", "Adjectif verbal : accordé", "Participe présent : invariable"],
                  variant: "blue",
                },
                {
                  title: "Voix passive",
                  lines: ["être + participe passé accordé", "Complément d'agent (par / de)", "Met en relief le patient"],
                  variant: "green",
                },
                {
                  title: "Forme pronominale",
                  lines: ["Réfléchi · réciproque", "Passif pronominal", "Essentiellement pronominal"],
                  variant: "green",
                },
                {
                  title: "Pièges classiques",
                  lines: ["en + -ant = gérondif", "se lit ≠ voix passive", "accord du PP au passif"],
                  variant: "yellow",
                },
                {
                  title: "Renvois",
                  lines: ["Subordonnées infinitive / participiale → notion 5", "Accord du participe passé → notion 11"],
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
