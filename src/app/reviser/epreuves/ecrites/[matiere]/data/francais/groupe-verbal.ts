import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "gv1", label: "Je sais que le groupe verbal s'organise autour d'un verbe noyau, second constituant obligatoire de la phrase avec le groupe sujet" },
  { id: "gv2", label: "Je connais les cinq constructions du verbe selon la transitivité : intransitif, transitif direct, transitif indirect, double (COD + COS), attributif" },
  { id: "gv3", label: "Je distingue un transitif direct (COD, passif possible) d'un transitif indirect (COI, passif impossible) grâce aux tests de transitivité" },
  { id: "gv4", label: "Je connais les verbes faussement transitifs directs (obéir à, ressembler à, jouer de…) qui se construisent en réalité avec un COI" },
  { id: "gv5", label: "Je distingue un verbe attributif (verbe d'état + attribut) d'un transitif direct (COD), et je connais les verbes d'état" },
  { id: "gv6", label: "Je connais les sous-types de verbes pronominaux (réfléchi, réciproque, passif, essentiellement pronominal) et les verbes impersonnels" },
  { id: "gv7", label: "Je sais analyser la voix passive (le COD devient sujet) et la construction causative « faire + infinitif » (l'infinitif est COD de « faire »)" },
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
    { label: "Cycle 4 + lycée · BOEN n°1 du 22 janvier 2019", variant: "info" },
  ],
  metaTitle: "Le groupe verbal (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur le groupe verbal : verbe noyau, transitivité (intransitif, transitif direct, transitif indirect, double, attributif), verbes faussement transitifs directs, verbes d'état, verbes pronominaux et impersonnels, voix passive et construction causative « faire + infinitif ». Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                  title: "Les constructions selon la transitivité",
                  text: "Intransitif, transitif direct, transitif indirect, double, attributif : cinq façons pour le verbe de se construire.",
                },
                {
                  number: "③",
                  title: "Verbes pronominaux et impersonnels",
                  text: "Réfléchi, réciproque, passif, essentiellement pronominal ; et le « il » impersonnel sans référent réel.",
                },
                {
                  number: "④",
                  title: "Voix passive et « faire » causatif",
                  text: "Deux transformations à savoir analyser : le COD qui devient sujet, et « faire + infinitif ».",
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
              text: "Analyser un groupe verbal, c'est d'abord identifier la **construction du verbe** : se suffit-il à lui-même ? appelle-t-il un complément direct, indirect, un attribut ? Cette fiche porte sur cette construction. L'identification fine de la fonction d'un complément (les 4 tests de repérage) est traitée dans la notion 2 (fonctions syntaxiques) : on y renvoie quand c'est utile.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Le groupe verbal : un verbe noyau et ses compléments",
              blocks: [
                {
                  type: "paragraph",
                  text: "Le **groupe verbal (GV)** est le second constituant obligatoire de la phrase de base, avec le **groupe sujet**. Il s'organise autour d'un **verbe noyau**, qui peut appeler des **compléments essentiels** (COD, COI, attribut) et accueillir des **compléments circonstanciels** (CC).\n\nLe point clé : c'est la **construction du verbe** qui détermine la fonction de ses compléments. Savoir que « obéir » se construit avec une préposition, c'est déjà savoir que son complément est un COI.",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "La construction commande la fonction",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "« Elle mange **une pomme** » → verbe transitif direct : « une pomme » = GN, COD",
                        "« Elle parle **à son ami** » → verbe transitif indirect : « à son ami » = GN prépositionnel, COI",
                        "« Elle semble **fatiguée** » → verbe d'état : « fatiguée » = adjectif, attribut du sujet",
                      ],
                      note: "Le même groupe (« une pomme ») n'aurait pas la même fonction après un autre verbe. C'est le verbe qui décide : voilà pourquoi on commence par lui.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Le réflexe à avoir",
                  text: "Face à un verbe souligné, posez-vous toujours : **se suffit-il à lui-même (intransitif) ? appelle-t-il un complément d'objet (transitif) ? relie-t-il le sujet à un attribut (verbe d'état) ?** Cette question oriente toute l'analyse.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Les cinq constructions selon la transitivité",
              blocks: [
                {
                  type: "paragraph",
                  text: "La **transitivité** décrit la façon dont le verbe se construit avec ses compléments essentiels. On distingue cinq constructions de base.",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Intransitif",
                      definition: "Le verbe n'admet pas de complément d'objet. Il peut accueillir des compléments circonstanciels, mais se suffit à lui-même.",
                      sousClasses: "**Verbes fréquents :** dormir · partir · naître · mourir · courir · tomber · arriver · briller",
                      exemples: [
                        "« Il **dort** » : aucun complément d'objet",
                        "« Le soleil **brille** » : « brille » se suffit ; un CC reste possible (« brille fort »)",
                      ],
                      piege: "Un verbe transitif employé sans complément reste transitif (emploi absolu) : « Il **mange** tous les jours » n'est pas un verbe intransitif. Voir le piège n°3.",
                      test: "La question « quoi ? / qui ? » après le verbe est impossible.",
                    },
                    {
                      title: "Transitif direct",
                      definition: "Le verbe est suivi d'un COD, sans préposition.",
                      sousClasses: "**Verbes fréquents :** manger · lire · voir · aimer · prendre · dire · savoir · croire",
                      exemples: [
                        "« Elle mange **une pomme** » : « une pomme » = GN, COD",
                        "« Je sais **qu'il viendra** » : proposition subordonnée conjonctive, COD",
                      ],
                      piege: "Ne pas confondre le COD avec l'attribut du sujet placé après un verbe d'état (« Il est médecin »). Voir le piège n°2.",
                      test: "« quoi ? / qui ? » sans préposition ; pronominalisation par le/la/les ; passif souvent possible (« une pomme est mangée »).",
                    },
                    {
                      title: "Transitif indirect",
                      definition: "Le verbe est suivi d'un COI, introduit par une préposition (à, de).",
                      sousClasses: "**Verbes fréquents :** parler à · rêver de · obéir à · ressembler à · se souvenir de · jouer de · avoir besoin de",
                      exemples: [
                        "« Il parle **à son ami** » : GN prépositionnel, COI",
                        "« Elle rêve **de liberté** » : GN prépositionnel, COI (pronominalisation : « Elle en rêve »)",
                      ],
                      piege: "Verbes faussement transitifs directs : obéir À, nuire À, ressembler À, pardonner À se construisent avec un COI, pas un COD. Voir le piège n°1.",
                      test: "« à / de qui ? quoi ? » ; pronominalisation par lui/leur, y, en ; passif impossible.",
                    },
                    {
                      title: "Transitif double (COD + COS)",
                      definition: "Le verbe admet à la fois un COD et un complément d'objet second (COS), introduit par une préposition.",
                      sousClasses: "**Verbes fréquents :** offrir · donner · dire · apporter · envoyer · montrer · écrire · enseigner",
                      exemples: [
                        "« Il offre **des fleurs** (COD) **à sa mère** (COS) »",
                        "« Je **le lui** donne » : « le » = COD, « lui » = COS",
                      ],
                      piege: "Le COS n'existe que s'il y a aussi un COD. Sans COD, le complément en « à » est un COI simple.",
                      test: "Schéma verbe + COD + COS ; le COS répond à « à qui ? » en présence d'un COD.",
                    },
                    {
                      title: "Attributif",
                      definition: "Le verbe d'état relie le sujet à son attribut. Il n'a pas de COD.",
                      sousClasses: "**Verbes d'état :** être · paraître · sembler · devenir · rester · demeurer · avoir l'air · passer pour · se révéler · s'avérer",
                      exemples: [
                        "« Il est **médecin** » : « médecin » = nom, attribut du sujet « il »",
                        "« Elle semble **fatiguée** » : « fatiguée » = adjectif, attribut du sujet « elle »",
                      ],
                      piege: "« avoir l'air » est attributif dans « Elle a l'air **fatiguée** » (accord avec le sujet), moins clairement dans « Elle a l'air **d'une reine** ».",
                      test: "Remplacer par « être » : si le sens reste proche, le verbe est attributif. L'attribut s'accorde avec le sujet, et la passivation est impossible.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Ces étiquettes (COD, COI, COS, attribut) nomment la fonction du complément pour caractériser la construction du verbe. Pour **identifier une fonction pas à pas** (les 4 tests : encadrement, question, pronominalisation, mobilité), voir la notion 2.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Verbes pronominaux et verbes impersonnels",
              blocks: [
                {
                  type: "paragraph",
                  text: "Deux constructions méritent un traitement à part : le verbe **pronominal** (précédé d'un pronom réfléchi) et le verbe **impersonnel** (sujet « il » sans référent réel).",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Pronominal",
                      definition: "Le verbe est précédé d'un pronom réfléchi (me, te, se, nous, vous). On distingue quatre sous-types.",
                      sousClasses: "**Sous-types :** réfléchi · réciproque · passif pronominal · essentiellement pronominal",
                      exemples: [
                        "**Réfléchi :** « Elle **se lave** » : le sujet est aussi l'objet de l'action (« se » = COD)",
                        "**Réciproque :** « Ils **se parlent** » : l'un à l'autre, pluriel obligatoire (« se » = COI)",
                        "**Passif pronominal :** « Ce livre **se vend** bien » : sens passif (= est vendu)",
                        "**Essentiellement pronominal :** « Elle **se souvient** » : le verbe n'existe pas sans « se »",
                      ],
                      piege: "Le pronom réfléchi « se » peut être COD ou COI : « Elle se lave » (se = COD) mais « Elle se lave les mains » (se = COI, les mains = COD). Cette distinction commande l'accord du participe passé, traité dans la notion 11.",
                      test: "Si un autre COD est exprimé, « se » est COI ; sinon, « se » est COD.",
                    },
                    {
                      title: "Impersonnel",
                      definition: "Le sujet « il » est purement grammatical, sans référent réel. Le sujet logique, s'il existe, est placé après le verbe.",
                      sousClasses: "**Constructions fréquentes :** il pleut · il neige · il faut · il s'agit de · il arrive que · il y a",
                      exemples: [
                        "« **Il** pleut » : « il » ne renvoie à personne (sujet grammatical)",
                        "« **Il** arrive **des gens** » : sujet grammatical « il », sujet logique « des gens »",
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
              title: "La voix passive et la construction causative « faire + infinitif »",
              blocks: [
                {
                  type: "paragraph",
                  text: "Deux constructions reviennent souvent à l'analyse : la **voix passive** (une transformation de la phrase active) et le **« faire » causatif** (faire faire l'action par quelqu'un d'autre).",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "La voix passive",
                  blocks: [
                    {
                      type: "formulaBlock",
                      title: "Actif vers passif",
                      lines: [
                        "Actif : « **Le chat** mange **la souris**. »",
                        "Passif : « **La souris** est mangée **par le chat**. »",
                        "Le COD actif devient sujet ; le sujet actif devient complément d'agent (par / de) ; le verbe devient « être + participe passé accordé ».",
                      ],
                      note: "Seul le COD peut devenir sujet passif : la voix passive est donc réservée aux verbes transitifs directs. Elle est impossible avec un verbe intransitif, transitif indirect ou attributif.",
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      text: "⚠️ « Il est parti » n'est pas un passif : c'est un passé composé avec l'auxiliaire « être » (verbe de mouvement). Au passif, le participe passé s'accorde toujours avec le sujet : « Les portes furent **ouvertes** ».",
                    },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Le « faire » causatif",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "« Elle fait **ses devoirs** » → « ses devoirs » = GN, COD : « faire » ordinaire",
                        "« Elle fait **travailler** ses élèves » → « travailler » = infinitif, COD de « fait » : « faire » causatif",
                      ],
                      note: "Dans « faire + infinitif », le sujet fait faire l'action par quelqu'un d'autre. L'infinitif est COD de « faire ». Exemple littéraire : « les choses qui nous **font rêver** » (« rêver » = COD de « font »).",
                    },
                  ],
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · Verbes faussement transitifs directs",
              badge: "Très fréquent",
              faux: "« Il obéit ses parents » : « ses parents » analysé comme COD.",
              vrai: "« obéir À » est transitif indirect : « à ses parents » est un **COI**.",
              methode:
                "Liste à retenir : obéir à, nuire à, ressembler à, pardonner à, plaire à, téléphoner à, jouer de, se souvenir de, avoir besoin de, douter de. Test : pronominalisation par lui/leur ou en, et passif impossible.",
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
              vrai: "La transitivité est une propriété **du verbe**, pas de la phrase : « manger » reste transitif, ici en **emploi absolu**.",
              methode: "Se demander si le verbe pourrait recevoir un COD (« manger une pomme »). Si oui, il est transitif, même employé seul.",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°4 · « faire + infinitif » : l'infinitif n'est pas sujet",
              badge: "Grand classique",
              faux: "Dans « les choses qui nous font rêver », « rêver » est analysé comme sujet de « font ».",
              vrai: "Dans la construction causative « faire + infinitif », l'infinitif est **COD de « faire »**. Le sujet de « font » est « qui » (qui reprend « choses »).",
              methode: "Test : « les choses font quoi ? rêver » : « rêver » répond à « quoi ? », donc COD. La construction « faire + infinitif » est figée.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 2 (CP-CE2) :** les élèves repèrent le verbe (« le mot qui dit ce qu'on fait »), puis distinguent peu à peu le verbe de son complément.\n\n**Cycle 3 :** on introduit le complément du verbe (COD, COI) et l'attribut du sujet, souvent par manipulation (remplacer, supprimer, déplacer). La transitivité n'est pas nommée, mais la distinction « le verbe se suffit-il ou appelle-t-il un complément ? » se construit.\n\n**Ce que vous devez savoir dire :** « On part du verbe, noyau de la phrase. On observe ce qu'il appelle : rien, un complément direct, un complément introduit par une préposition, un attribut. Cette observation de la construction du verbe prépare l'analyse des fonctions au collège. »",
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
              text: "Identifier la construction d'un verbe, reconnaître une voix passive ou un « faire » causatif : ce sont les deux situations qui reviennent sur cette notion. Chacune se termine par un checkpoint.",
            },
            {
              type: "rappelExpress",
              title: "Rappel express : les tests de transitivité",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "Question « quoi ? / qui ? » sans préposition → transitif direct (COD)",
                    "Question « à / de quoi ? » avec préposition → transitif indirect (COI)",
                    "Passif possible → transitif direct ; passif impossible → indirect, intransitif ou attributif",
                    "Remplacement par « être » → verbe d'état (attribut, pas COD)",
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ La transitivité est une propriété du verbe : un transitif employé sans complément reste transitif (emploi absolu).",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Identifier la construction d'un verbe pas à pas",
              intro:
                "**Question typique :** « Donnez le type de construction du verbe souligné. »\nOn avance par éliminations, du plus simple au plus précis.",
              steps: [
                {
                  number: "1",
                  text: "**Est-ce un verbe d'état ?** Tenter le remplacement par « être ». Si le sens reste proche, le verbe est attributif : le complément est un attribut du sujet.",
                  example: { lines: ["« Il semble fatigué » → « Il est fatigué » → attributif"] },
                },
                {
                  number: "2",
                  text: "**Sinon, le verbe appelle-t-il un complément d'objet ?** Poser « quoi ? / qui ? ». Sans réponse possible → intransitif (ou emploi absolu).",
                  example: { lines: ["« Il dort » → « dort quoi ? » impossible → intransitif"] },
                },
                {
                  number: "3",
                  text: "**Si oui, ce complément a-t-il une préposition ?** Sans préposition → transitif direct (COD) ; avec préposition (à, de) → transitif indirect (COI). Vérifier par le passif (possible = direct).",
                  example: {
                    lines: [
                      "« Elle mange une pomme » → sans préposition, passif possible → transitif direct",
                      "« Il obéit à ses parents » → avec « à », passif impossible → transitif indirect",
                    ],
                  },
                },
                {
                  number: "💡",
                  text: "**Y a-t-il deux compléments ?** Un COD plus un complément en « à » → construction double (COD + COS). Le verbe est-il précédé d'un pronom réfléchi ? → pronominal. Le sujet « il » est-il sans référent ? → impersonnel.",
                  warn: "⚠️ Une construction se justifie par un test (passif, pronominalisation, remplacement par « être »), jamais « au feeling ».",
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
              title: "Reconnaître une voix passive ou un « faire » causatif",
              intro:
                "**Question typique :** « Analysez la construction du verbe souligné. »\nDeux tournures à ne pas manquer.",
              steps: [
                {
                  number: "1",
                  text: "**Voix passive :** repérer « être + participe passé ». Le sujet subit l'action, l'agent est introduit par « par / de ». Vérifier que la phrase active correspondante a un COD.",
                  example: { lines: ["« La souris est mangée par le chat » → passif (« Le chat mange la souris »)"] },
                },
                {
                  number: "2",
                  text: "**Attention au faux passif :** « être + participe passé » d'un verbe de mouvement est un passé composé, pas un passif.",
                  example: { lines: ["« Il est parti » → passé composé avec « être », pas un passif"] },
                },
                {
                  number: "💡",
                  text: "**« faire + infinitif » :** si « faire » est suivi d'un infinitif, c'est la construction causative. L'infinitif est COD de « faire ».",
                  example: { lines: ["« Elle fait travailler ses élèves » → « travailler » = COD de « fait »"] },
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
                  question: "Quel test confirme qu'un verbe est transitif direct ?",
                  options: [
                    "Le verbe est suivi d'une préposition",
                    "La mise au passif est possible (le COD devient sujet)",
                    "La pronominalisation par lui / leur",
                    "Le verbe est invariable",
                  ],
                  correctIndex: 1,
                  explanation:
                    "Seul un COD peut devenir sujet au passif : si la passivation fonctionne, le verbe est transitif direct.",
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
                  question: "Un verbe à double complémentation (transitif double) gouverne :",
                  options: ["deux COD", "un COD et un COS", "deux attributs", "un sujet et un COD"],
                  correctIndex: 1,
                  explanation:
                    "Le verbe double gouverne un COD et un complément d'objet second (COS) : « Il offre des fleurs (COD) à sa mère (COS) ».",
                },
                {
                  objectifId: "gv6",
                  question: "Dans « Ce livre se vend bien », quel est le sous-type de verbe pronominal ?",
                  options: ["Réfléchi", "Réciproque", "Passif pronominal", "Essentiellement pronominal"],
                  correctIndex: 2,
                  explanation:
                    "« se vend » a un sens passif (= est vendu) : c'est un passif pronominal.",
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
                  question: "Dans « Elle fait travailler ses élèves », « travailler » est :",
                  options: ["Sujet de la phrase", "COD du verbe « fait »", "Attribut du sujet", "CC de but"],
                  correctIndex: 1,
                  explanation:
                    "Dans la construction causative « faire + infinitif », l'infinitif est COD de « faire » : « elle fait quoi ? travailler ».",
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
                { type: "line", label: "e)", text: "**arrivent** → intransitif (emploi absolu, « demain » = CC de temps)" },
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
              title: "Exercice 4 : Sous-types de verbes pronominaux",
              objectifTag: "Verbes pronominaux",
              question:
                "Identifiez le sous-type : réfléchi · réciproque · passif pronominal · essentiellement pronominal.\na) « Elle <u>se regarde</u> dans le miroir. »   b) « Ils <u>se téléphonent</u> chaque soir. »   c) « Ce livre <u>se lit</u> facilement. »   d) « Il <u>s'enfuit</u> sans se retourner. »   e) « Elle <u>se méfie</u> de tout. »",
              correction: [
                { type: "line", label: "a)", text: "**se regarde** → réfléchi (elle regarde elle-même)" },
                { type: "line", label: "b)", text: "**se téléphonent** → réciproque (l'un à l'autre, pluriel)" },
                { type: "line", label: "c)", text: "**se lit** → passif pronominal (= est lu)" },
                { type: "line", label: "d)", text: "**s'enfuit** → essentiellement pronominal (« enfuir » seul n'existe pas)" },
                { type: "line", label: "e)", text: "**se méfie** → essentiellement pronominal (« méfier » seul n'existe pas)" },
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
                { type: "line", label: "a)", text: "« monte l'escalier » → transitif direct (« l'escalier » = COD) / « monte » → intransitif (emploi absolu)" },
                { type: "line", label: "b)", text: "« passe l'examen » → transitif direct (COD) / « passe pour un génie » → attributif (« passer pour » = verbe d'état)" },
                { type: "line", label: "c)", text: "« sent la rose » → transitif direct (« la rose » = COD) / « sent bon » → attributif (« bon » = attribut du sujet, comme après « paraît »)" },
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
                { type: "note", text: "💡 Seul le COD peut devenir sujet au passif : ce test isole les transitifs directs." },
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
                { type: "line", label: "d)", text: "« ses élèves » n'est pas sujet de « travailler » : dans « faire + infinitif », l'infinitif « travailler » est COD de « fait »." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 8 : Verbes impersonnels",
              objectifTag: "Verbes impersonnels",
              question:
                "Pour chaque verbe impersonnel, identifiez le sujet grammatical et le sujet logique (réel) :\na) « Il arrive des problèmes. »   b) « Il faut travailler. »   c) « Il est possible qu'il vienne. »   d) « Il y a trois personnes. »",
              correction: [
                {
                  type: "table",
                  headers: ["Phrase", "Sujet grammatical", "Sujet logique"],
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
                { type: "note", text: "💡 Si un autre COD est exprimé (les mains), « se » est COI. Sinon, « se » est COD. Cette distinction commande l'accord du participe passé : voir la notion 11." },
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
              text: "Ces exercices reproduisent le format de la question d'étude de la langue de la Partie 1 : extrait littéraire, analyse de la construction du verbe, formulation jury. Les exercices calqués sur des sujets récents portent le badge ✦.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 1 : Gustave Flaubert, Madame Bovary",
              enonce:
                "« Elle <u>rêvait</u> des contrées lointaines, des rivages lumineux, des palais de marbre où des fontaines <u>jaillissaient</u> sous des ciels toujours bleus. »\n*(Gustave Flaubert, Madame Bovary, 1857)*",
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
              title: "Exercice 2 : Victor Hugo, Les Misérables",
              enonce:
                "« Les misérables ne <u>manquent</u> pas sur la terre. Partout, les souffrances <u>sont</u> grandes et les hommes <u>sont</u> las de ne plus croire. »\n*(Victor Hugo, Les Misérables, 1862)*",
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
              badge: "✦ Format concours récent",
              title: "Exercice 3 : Lola Lafon, Quand tu écouteras cette chanson",
              enonce:
                "« Écrire n'<u>est</u> pas tout à fait un choix : c'est un aveu d'impuissance. On <u>écrit</u> parce qu'on ne sait par quel autre biais attraper le réel. »\n*(Lola Lafon, Quand tu écouteras cette chanson, 2023)*",
              question: "Format identique au concours · Analysez la construction de chaque verbe souligné : « <u>est</u> » · « <u>écrit</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Construction", "Compléments essentiels / sujet"],
                  rows: [
                    ["n'est pas … un choix", "Attributif (forme négative)", "Attribut du sujet : « un choix » · sujet : « Écrire » (verbe à l'infinitif employé comme sujet)"],
                    ["écrit", "Intransitif (emploi absolu)", "Aucun COD exprimé · « parce qu'on ne sait… » = CC de cause"],
                  ],
                },
                { type: "note", text: "⚠️ « Écrire » reste un verbe à l'infinitif, même employé comme sujet de « est ». On n'écrit jamais « nom verbal » : cette catégorie n'existe pas (voir notion 1)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format concours récent",
              title: "Exercice 4 : Marguerite Yourcenar, Comment Wang-Fô fut sauvé",
              enonce:
                "« J'ai vu se rouvrir les portes qui me séparaient du monde ; je suis monté sur la terrasse du palais pour regarder les nuages, mais ils étaient moins beaux que ceux de tes crépuscules. »\n*(Marguerite Yourcenar, Nouvelles orientales, 1963)*",
              question:
                "Format identique au concours · Analysez la construction de chaque verbe souligné : « <u>ai vu</u> … se rouvrir » · « <u>suis monté</u> » · « <u>étaient</u> moins beaux »",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Construction", "Compléments essentiels"],
                  rows: [
                    ["ai vu … se rouvrir", "Transitif direct + proposition infinitive", "COD : « se rouvrir les portes qui me séparaient du monde » = proposition subordonnée infinitive (verbe de perception)"],
                    ["suis monté", "Intransitif", "Aucun complément d'objet (« sur la terrasse » = CC de lieu, « pour regarder les nuages » = CC de but)"],
                    ["étaient moins beaux", "Attributif", "Attribut du sujet « ils » : « moins beaux » (adjectif au comparatif d'infériorité)"],
                  ],
                },
                { type: "note", text: "💡 « suis monté » est un passé composé avec l'auxiliaire « être » (verbe de mouvement), à ne pas confondre avec une voix passive." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format concours récent",
              title: "Exercice 5 : Victor Hugo (poème)",
              enonce:
                "« Insensées choses qui nous <u>font</u> rêver ! <u>Monte</u> en moi une humble flamme. »\n*(Victor Hugo)*",
              question: "Format identique au concours · Analysez la construction de chaque verbe souligné : « <u>font</u> rêver » · « <u>Monte</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Construction", "Compléments essentiels / sujet"],
                  rows: [
                    ["font rêver", "Causative (« faire + infinitif »)", "COD : « rêver » (infinitif) · sujet de « font » : « qui » (pronom relatif reprenant « choses »)"],
                    ["Monte", "Intransitif (sujet postposé)", "Aucun complément d'objet · sujet postposé : « une humble flamme » · « en moi » = CC de lieu"],
                  ],
                },
                { type: "note", text: "⚠️ Dans « faire + infinitif », l'infinitif est COD de « faire » : « rêver » n'est pas le sujet de « font » (grand classique de l'épreuve)." },
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
                    { text: "« à son père » n'est ni supprimable (« Il ressemble » seul est incomplet) ni librement mobile : ce n'est pas un CC" },
                    { text: "Réponse attendue : « ressembler à » est transitif indirect ; « à son père » → COI (« Il lui ressemble »)" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 2 · Réponse à corriger : « médecin »",
              enonce: "Réponse d'un candidat : « **médecin** : COD du verbe devenir », pour *« Il devient médecin. »*",
              question: "Identifiez l'erreur et expliquez par deux tests.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Erreur : attribut du sujet confondu avec COD", bad: true },
                    { text: "Test du passif : « Un médecin est devenu par lui » est impossible, donc pas un COD" },
                    { text: "Test de l'accord : « médecin » s'accorde avec le sujet (« Elle devient médecin »), comportement d'un attribut" },
                    { text: "Réponse attendue : « médecin » → nom, attribut du sujet « il » (verbe d'état « devient »)" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 3 · Réponse à corriger : « rêver »",
              enonce: "Réponse d'un candidat : « **rêver** : sujet du verbe font », pour *« Insensées choses qui nous font rêver. »*",
              question: "Identifiez l'erreur et rédigez la réponse attendue.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Erreur : COD confondu avec sujet", bad: true },
                    { text: "Le sujet de « font » est « qui » (pronom relatif reprenant « choses »)" },
                    { text: "Réponse attendue : « rêver » → verbe à l'infinitif, COD de « font » (construction causative « faire + infinitif »)" },
                  ],
                },
                { type: "note", text: "💡 Test : « les choses font quoi ? rêver » : l'infinitif répond à « quoi ? », donc COD." },
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
                  question: "Quelles sont les cinq constructions du verbe selon la transitivité ?",
                  answer:
                    "1. **Intransitif** : aucun complément d'objet (dormir, partir).\n2. **Transitif direct** : COD sans préposition (manger une pomme).\n3. **Transitif indirect** : COI avec préposition (parler à, rêver de).\n4. **Transitif double** : COD + COS (offrir des fleurs à sa mère).\n5. **Attributif** : verbe d'état + attribut du sujet (être, sembler, devenir).",
                },
                {
                  question: "Quels verbes sont transitifs indirects mais souvent pris pour des transitifs directs ?",
                  answer:
                    "En À : obéir à, nuire à, ressembler à, pardonner à, plaire à, téléphoner à.\nEn DE : jouer de, se souvenir de, manquer de, avoir besoin de, douter de.",
                  astuce: "💡 Test : pronominalisation par lui/leur ou en, et passivation impossible.",
                },
                {
                  question: "Comment distinguer un COD d'un attribut du sujet ?",
                  answer:
                    "**COD** : après un verbe transitif direct, passivation possible, pronominalisation par le/la/les.\n**Attribut du sujet** : après un verbe d'état, passivation impossible, accord avec le sujet.",
                  astuce: "⚠️ « Il est médecin » : pas de COD, « médecin » est attribut du sujet.",
                },
                {
                  question: "Quels sont les principaux verbes d'état ?",
                  answer:
                    "être, paraître, sembler, devenir, rester, demeurer, avoir l'air, passer pour, se révéler, s'avérer.",
                  astuce: "💡 Test : remplacer par « être ». « Il semble fatigué » équivaut à « Il est fatigué ».",
                },
                {
                  question: "Le pronom réfléchi « se » : COD ou COI ?",
                  answer:
                    "Si un autre COD est exprimé, « se » est COI (« Elle se lave les mains » : les mains = COD, se = COI).\nSinon, « se » est COD (« Elle se lave » : se = COD).",
                  astuce: "⚠️ Distinction décisive pour l'accord du participe passé (voir notion 11).",
                },
                {
                  question: "Quels sont les quatre sous-types de verbes pronominaux ?",
                  answer:
                    "**Réfléchi** (se laver), **réciproque** (se parler, pluriel), **passif pronominal** (se vendre = est vendu), **essentiellement pronominal** (se souvenir, n'existe pas sans « se »).",
                },
                {
                  question: "Quelle est la règle de la voix passive ? Quand est-elle impossible ?",
                  answer:
                    "Le COD devient sujet, le sujet devient complément d'agent (par/de), le verbe devient « être + participe passé accordé ».\nImpossible avec un verbe intransitif, transitif indirect ou attributif (pas de COD à promouvoir).",
                  astuce: "⚠️ « Il est parti » n'est pas un passif : c'est un passé composé avec « être ».",
                },
                {
                  question: "Construction « faire + infinitif » : comment analyser l'infinitif ?",
                  answer:
                    "C'est la construction causative : le sujet fait faire l'action par un autre. L'infinitif est toujours **COD de « faire »**.\n« Elle fait travailler ses élèves » : travailler = COD de fait.",
                  astuce: "💡 « les choses qui nous font rêver » : rêver = COD de font, pas sujet.",
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
              center: { title: "Le groupe verbal", subtitle: "Construction du verbe" },
              branches: [
                {
                  title: "Le GV",
                  lines: ["Verbe noyau + compléments", "2e constituant obligatoire", "La construction commande la fonction"],
                  variant: "blue",
                },
                {
                  title: "Transitivité",
                  lines: ["Intransitif · transitif direct", "Transitif indirect · double (COD + COS)", "Attributif (verbe d'état)"],
                  variant: "blue",
                },
                {
                  title: "Constructions particulières",
                  lines: ["Pronominal (4 sous-types)", "Impersonnel (« il » grammatical)"],
                  variant: "green",
                },
                {
                  title: "Transformations",
                  lines: ["Voix passive (COD → sujet)", "Faire + infinitif (causatif)"],
                  variant: "green",
                },
                {
                  title: "Pièges classiques",
                  lines: ["obéir à = COI", "devient médecin = attribut", "faire + inf : inf = COD"],
                  variant: "yellow",
                },
                {
                  title: "Renvois",
                  lines: ["Fonctions (4 tests) → notion 2", "Accord du PP pronominal → notion 11"],
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
