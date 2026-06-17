import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "pc1", label: "Je distingue la phrase simple (un seul verbe conjugué) de la phrase complexe (plusieurs), en comptant les verbes conjugués" },
  { id: "pc2", label: "Je sais que les formes non conjuguées (infinitif, participe, gérondif) ne créent pas de proposition, sauf sujet propre distinct" },
  { id: "pc3", label: "Je connais les trois modes de liaison des propositions : juxtaposition, coordination, subordination" },
  { id: "pc4", label: "Je connais les 6 familles de subordonnées (relative, complétive, circonstancielle, interrogative indirecte, infinitive, participiale) et leur fonction globale" },
  { id: "pc5", label: "Je distingue « que » relatif (antécédent) de « que » conjonction (complétive), et la relative de l'interrogative indirecte" },
  { id: "pc6", label: "Je reconnais une subordonnée infinitive et une subordonnée participiale grâce au critère du sujet propre distinct" },
  { id: "pc7", label: "Je sais analyser une phrase complexe en 4 étapes : compter, délimiter, identifier l'introducteur, nommer nature et fonction" },
];

export const fichePhraseComplexe: Fiche = {
  slug: "phrase-complexe",
  matiere: "francais",
  numero: 5,
  partie: "Partie 1 : Grammaire de la phrase",
  title: "La phrase complexe",
  subtitle:
    "Compter et nommer les propositions : les 6 familles de subordonnées et les formes non conjuguées",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 + lycée · BOEN n°1 du 22 janvier 2019", variant: "info" },
  ],
  metaTitle: "La phrase complexe (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur la phrase complexe : phrase simple ou complexe, juxtaposition, coordination, subordination, les 6 familles de subordonnées (relative, complétive, circonstancielle, interrogative indirecte, infinitive, participiale), les formes non conjuguées. Méthode d'analyse en 4 étapes, pièges fréquents, exercices corrigés, flashcards et auto-évaluation.",
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
                  title: "Phrase simple ou complexe ?",
                  text: "On compte les verbes conjugués : un seul, phrase simple ; plusieurs, phrase complexe. C'est le point de départ.",
                },
                {
                  number: "②",
                  title: "Juxtaposition, coordination, subordination",
                  text: "Trois façons de relier les propositions entre elles, à reconnaître avant de nommer.",
                },
                {
                  number: "③",
                  title: "Les 6 familles de subordonnées",
                  text: "Relative, complétive, circonstancielle, interrogative indirecte, infinitive, participiale : chacune a son introducteur et sa fonction.",
                },
                {
                  number: "④",
                  title: "Les formes non conjuguées",
                  text: "Infinitif, participe, gérondif : elles ne créent pas de proposition, sauf si elles ont un sujet propre distinct.",
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
              text: "Le jury demande de **délimiter et nommer chaque proposition**. La démarche est toujours la même : compter les verbes conjugués, découper, identifier l'introducteur, nommer nature et fonction. Cette fiche porte sur l'architecture de la phrase complexe. La fonction précise d'un pronom relatif (par exemple « dont ») se trouve par dépronominalisation et relève des fonctions (notions 2 et 3) : on y renvoie quand c'est utile.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Phrase simple ou complexe : compter les verbes conjugués",
              blocks: [
                {
                  type: "paragraph",
                  text: "Une **proposition** est un groupe de mots organisé autour d'un **verbe conjugué**. On compte donc les propositions en comptant les verbes conjugués.\n\n**Phrase simple :** un seul verbe conjugué, donc une seule proposition (indépendante).\n**Phrase complexe :** plusieurs verbes conjugués, donc plusieurs propositions reliées entre elles.",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Compter les verbes conjugués",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "« Elle se hâtait, les yeux baissés, pressée d'atteindre sa maison. » → 1 verbe conjugué (se hâtait) : phrase simple",
                        "« On écrit parce qu'on ne sait par quel biais attraper le réel. » → 2 verbes conjugués (écrit, sait) : phrase complexe",
                      ],
                      note: "« baissés », « pressée », « atteindre », « attraper » sont des formes non conjuguées : elles ne comptent pas (voir l'étape ④).",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Le réflexe à avoir",
                  text: "Avant tout, **soulignez les verbes conjugués** : leur nombre donne le nombre de propositions. Ne comptez ni les infinitifs, ni les participes, ni les gérondifs (sauf exception du sujet propre, étape ④).",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Juxtaposition, coordination, subordination",
              blocks: [
                {
                  type: "paragraph",
                  text: "Dans une phrase complexe, les propositions sont reliées de trois façons :",
                },
                {
                  type: "bullets",
                  items: [
                    "**Juxtaposition :** les propositions sont placées côte à côte, séparées par une virgule, un point-virgule ou deux-points. « Il pleut, je reste. »",
                    "**Coordination :** une conjonction de coordination (mais, ou, et, donc, or, ni, car) relie deux propositions de même rang. « Il pleut, mais je sors. »",
                    "**Subordination :** une proposition dépend d'une autre (la principale) par un subordonnant (pronom relatif, conjonction…). « Je sais qu'il viendra. »",
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Juxtaposition et coordination relient des propositions **de même rang** (souvent des indépendantes). La subordination crée une **dépendance** : la subordonnée a une fonction dans la phrase, exactement comme un mot. C'est ce que nomment les 6 familles de l'étape ③.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Les 6 familles de propositions subordonnées",
              blocks: [
                {
                  type: "paragraph",
                  text: "Chaque subordonnée se reconnaît à son **introducteur** et se nomme par sa **nature** (la famille) et sa **fonction globale** dans la phrase.",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Relative",
                      definition: "Introduite par un pronom relatif, elle complète un nom antécédent placé avant le pronom.",
                      sousClasses: "**Introducteurs :** qui · que · dont · où · lequel (et formes contractées)",
                      exemples: [
                        "« les portes **qui me séparaient du monde** » : relative, épithète du nom « portes »",
                      ],
                      piege: "Le pronom relatif a une nature stable. Sa fonction dans la relative (qui = sujet, dont = CDN ou COI…) se trouve par dépronominalisation : voir les notions 2 et 3.",
                      test: "Y a-t-il un antécédent nominal juste avant le pronom relatif ? Si oui : relative.",
                    },
                    {
                      title: "Complétive",
                      definition: "Introduite par la conjonction « que » (pur outil grammatical, sans antécédent). Elle complète le verbe.",
                      sousClasses: "**Fonction globale :** COD · sujet · attribut",
                      exemples: [
                        "« Je sais **qu'il viendra** » : complétive, COD du verbe « sais »",
                      ],
                      piege: "Distinguer « que » conjonction (pas d'antécédent : complétive) et « que » pronom relatif (antécédent : relative). Voir le piège n°2.",
                      test: "« que » sans antécédent nominal, non supprimable et non déplaçable : complétive.",
                    },
                    {
                      title: "Circonstancielle",
                      definition: "Introduite par une conjonction sémantique. Elle précise une circonstance et se rattache au verbe principal.",
                      sousClasses: "**Introducteurs :** quand · parce que · bien que · si · pour que · comme…",
                      exemples: [
                        "« On écrit **parce qu'on ne sait pas** » : circonstancielle, CC de cause",
                      ],
                      piege: "« car » relève de la coordination (déplacement impossible), pas de la subordination : ce n'est pas une circonstancielle.",
                      test: "La proposition est-elle supprimable et déplaçable ? Si oui : circonstancielle.",
                    },
                    {
                      title: "Interrogative indirecte",
                      definition: "Introduite par un mot interrogatif, après un verbe de questionnement (savoir, demander, ignorer…). Elle rapporte une question sans guillemets.",
                      sousClasses: "**Introducteurs :** si · qui · comment · où · par quel…",
                      exemples: [
                        "« Je me demande **s'il viendra** » : interrogative indirecte, COD du verbe « me demande »",
                      ],
                      piege: "À ne pas confondre avec la relative : l'interrogative indirecte n'a pas d'antécédent et dépend d'un verbe de questionnement.",
                      test: "Pas d'antécédent + verbe de questionnement introducteur : interrogative indirecte.",
                    },
                    {
                      title: "Subordonnée infinitive",
                      definition: "Sans subordonnant. Verbe à l'infinitif ayant un sujet propre distinct, après un verbe de perception ou factitif.",
                      sousClasses: "**Verbes introducteurs :** voir · entendre · regarder · sentir · faire · laisser",
                      exemples: [
                        "« Ma mère regardait **les enfants jouer** » : infinitive, COD du verbe « regardait » (sujet propre : « les enfants »)",
                      ],
                      piege: "« pour + infinitif » à même sujet n'est pas une infinitive : c'est un groupe infinitif, CC de but. Voir le piège n°3.",
                      test: "Deux conditions simultanées : verbe de perception ou factitif, et sujet propre distinct de la principale.",
                    },
                    {
                      title: "Subordonnée participiale",
                      definition: "Sans subordonnant. Participe (présent ou passé) ayant un sujet propre distinct, détaché par une virgule.",
                      sousClasses: "**Fonction globale :** CC de temps · cause · condition",
                      exemples: [
                        "« **Le rideau levé**, le spectacle commença » : participiale, CC de temps (sujet propre : « le rideau »)",
                      ],
                      piege: "Si le participe partage le sujet de la principale, ce n'est pas une participiale mais une épithète détachée. Voir le piège n°4.",
                      test: "Le participe a-t-il un sujet propre distinct de celui de la principale ? Si oui : participiale.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Nommer une subordonnée, c'est donner sa **nature** (la famille) et sa **fonction globale** (épithète, COD, CC…). Pour analyser la fonction d'un mot à l'intérieur de la subordonnée (le pronom relatif notamment), voir les notions 2 et 3.",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Les formes non conjuguées",
              blocks: [
                {
                  type: "paragraph",
                  text: "L'infinitif, le participe présent, le gérondif et le participe passé sont des formes **non conjuguées** : par défaut, elles **ne créent pas de proposition**. Elles occupent une fonction dans la phrase, comme un mot ou un groupe.",
                },
                {
                  type: "table",
                  headers: ["Forme", "Reconnaissance", "Fonctions habituelles", "Exemple"],
                  rows: [
                    ["Infinitif", "-er, -ir, -re, -oir ; invariable", "Sujet, COD, complément du nom, CC de but (pour + infinitif)", "« **Vivre**, sans l'écriture, me va mal » : sujet de « va »"],
                    ["Participe présent", "radical + -ant, sans « en », invariable", "Épithète détachée du sujet ou d'un nom", "« Une femme passa, **tenant** son enfant » : épithète détachée"],
                    ["Gérondif", "« en » + -ant, invariable, même sujet", "CC de manière, temps, cause, moyen", "« Il rentra **en chantant** » : CC de manière"],
                    ["Participe passé", "-é, -i, -u ; s'accorde avec le nom", "Épithète liée ou détachée", "« les yeux **baissés** » : épithète liée de « yeux »"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ Exception : si l'infinitif ou le participe a un **sujet propre distinct** du sujet principal, il forme une subordonnée infinitive ou participiale (étape ③) et compte alors comme une proposition.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · Compter les formes non conjuguées comme des propositions",
              badge: "Erreur de comptage",
              faux: "« Elle passa, tenant son enfant » analysé comme deux propositions.",
              vrai: "« tenant » est un participe présent non conjugué : il n'y a qu'**une seule proposition**. Seuls les verbes conjugués comptent.",
              methode: "Souligner uniquement les verbes conjugués. Infinitif, participe et gérondif ne comptent pas, sauf sujet propre distinct.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 · « que » : pronom relatif ou conjonction ?",
              badge: "Mot caméléon",
              faux: "Analyser systématiquement « que » comme une conjonction de subordination.",
              vrai: "Chercher un antécédent : antécédent présent → **pronom relatif** (relative) ; pas d'antécédent → **conjonction** (complétive).",
              methode: "« le livre que je lis » (antécédent « livre » : relatif) ; « Je sais que… » (pas d'antécédent : conjonction).",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 · Subordonnée infinitive sans vérifier les deux conditions",
              badge: "Deux critères simultanés",
              faux: "« pour regarder les nuages » analysé comme une subordonnée infinitive.",
              vrai: "Il faut **deux conditions** : un verbe de perception ou factitif, et un sujet propre distinct. Ici, « monter » n'est pas un verbe de perception et le sujet est le même : c'est un groupe infinitif, CC de but.",
              methode: "Vérifier les deux critères avant de conclure : verbe introducteur de perception ou factitif, et sujet propre distinct.",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°4 · Épithète détachée confondue avec subordonnée participiale",
              badge: "Sujet propre décisif",
              faux: "« Elle passa, tenant son enfant » analysé comme une subordonnée participiale.",
              vrai: "Le sujet de « tenant » est « elle », le même que celui de « passa » : c'est une **épithète détachée**. La participiale exige un sujet propre distinct.",
              methode: "Comparer le sujet du participe et celui de la principale. Même sujet : épithète détachée. Sujet distinct : participiale.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 2 (CP-CE2) :** les élèves travaillent surtout la phrase simple, repèrent le verbe et observent les signes de ponctuation.\n\n**Cycle 3 :** on introduit la phrase complexe par observation : compter les verbes conjugués, repérer les mots de liaison (et, mais, parce que, qui, que). Les termes savants (subordonnée, principale) arrivent au cycle 4.\n\n**Ce que vous devez savoir dire :** « On part du verbe conjugué : autant de verbes conjugués, autant de propositions. On observe ensuite comment elles sont reliées (juxtaposition, coordination, subordination). Cette démarche de comptage et de découpage se construit dès le cycle 3. »",
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
              title: "Une démarche en 4 étapes",
              text: "Face à une phrase, on applique toujours les mêmes étapes : compter, délimiter, identifier l'introducteur, nommer. Une seconde méthode traite le cas particulier des subordonnées sans subordonnant.",
            },
            {
              type: "rappelExpress",
              title: "Rappel express : les 4 étapes",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "1. Compter les verbes conjugués → nombre de propositions",
                    "2. Délimiter chaque proposition entre crochets",
                    "3. Identifier le mot introducteur → quelle famille ?",
                    "4. Nommer : nature (relative, complétive, circonstancielle…) + fonction (épithète, COD, CC…)",
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ Le jury attend toutes les propositions nommées, **principale comprise**. Ne pas oublier de nommer la proposition principale.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Analyser une phrase complexe pas à pas",
              intro:
                "**Exemple :** « On écrit parce qu'on ne sait par quel biais attraper le réel. »\nOn applique les 4 étapes dans l'ordre.",
              steps: [
                {
                  number: "1",
                  text: "**Compter les verbes conjugués :** « écrit », « sait » → 2 propositions → phrase complexe.",
                  example: { lines: ["« attraper » est un infinitif : il ne compte pas"] },
                },
                {
                  number: "2",
                  text: "**Délimiter chaque proposition :** [On écrit] [parce qu'on ne sait par quel biais attraper le réel].",
                },
                {
                  number: "3",
                  text: "**Identifier l'introducteur :** « parce que » = locution conjonctive (circonstancielle de cause) ; « par quel biais » = mot interrogatif après « sait » (interrogative indirecte).",
                },
                {
                  number: "💡",
                  text: "**Nommer nature et fonction :** [On écrit] = principale ; [parce qu'on ne sait…] = subordonnée conjonctive, CC de cause ; [par quel biais attraper le réel] = subordonnée interrogative indirecte, COD de « sait ».",
                  warn: "⚠️ Ne pas oublier de nommer la principale, et toujours donner nature ET fonction.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Combien de propositions dans : « Quand il arriva, elle lisait un roman » ? Nommez-les.",
              correction: [
                { type: "line", text: "2 verbes conjugués (arriva, lisait) → 2 propositions. [Quand il arriva] = subordonnée circonstancielle de temps ; [elle lisait un roman] = proposition principale." },
                {
                  type: "note",
                  text: "Trouvé du premier coup ? Vous tenez la méthode. Sinon, reprenez les étapes 1 à 3.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Reconnaître une subordonnée sans subordonnant (infinitive ou participiale)",
              intro:
                "**Question typique :** « Y a-t-il une subordonnée infinitive ou participiale ? »\nCes deux familles n'ont pas de mot introducteur : c'est le sujet propre qui les révèle.",
              steps: [
                {
                  number: "1",
                  text: "**Repérer un infinitif ou un participe détaché**, puis chercher son sujet.",
                  example: { lines: ["« Ma mère regardait les enfants jouer » → infinitif « jouer », sujet « les enfants »"] },
                },
                {
                  number: "2",
                  text: "**Le sujet est-il distinct de celui de la principale ?** Si non, c'est une épithète détachée (participe) ou un groupe infinitif (infinitif), pas une subordonnée.",
                  example: { lines: ["« les enfants » (sujet de jouer) ≠ « ma mère » (sujet de regardait) → sujet propre distinct"] },
                },
                {
                  number: "💡",
                  text: "**Pour l'infinitive, vérifier aussi le verbe introducteur** (perception ou factitif). Pour la participiale, le participe détaché à sujet propre suffit.",
                  example: { lines: ["« regardait » est un verbe de perception → subordonnée infinitive, COD de « regardait »"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "« Le rideau levé, le spectacle commença. » Subordonnée participiale ou épithète détachée ?",
              correction: [
                { type: "line", text: "Le sujet de « levé » (le rideau) est distinct de celui de « commença » (le spectacle) → **subordonnée participiale**, CC de temps." },
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
              text: "9 questions rapides pour vérifier que le Cours et la Méthode sont bien ancrés. Le détail objectif par objectif est dans l'onglet Auto-évaluation.",
            },
            {
              type: "quizBlock",
              questions: [
                {
                  objectifId: "pc1",
                  question: "Comment compte-t-on les propositions d'une phrase ?",
                  options: [
                    "On compte tous les verbes, conjugués ou non",
                    "On compte les verbes conjugués",
                    "On compte les virgules",
                    "On compte les mots de liaison",
                  ],
                  correctIndex: 1,
                  explanation:
                    "Chaque verbe conjugué délimite une proposition. Les formes non conjuguées (infinitif, participe, gérondif) ne comptent pas, sauf sujet propre distinct.",
                },
                {
                  objectifId: "pc2",
                  question: "Dans « Une femme passa, tenant son enfant », combien de propositions ?",
                  options: ["Une seule", "Deux", "Trois", "Aucune"],
                  correctIndex: 0,
                  explanation:
                    "« tenant » est un participe présent non conjugué (même sujet que « passa ») : une seule proposition.",
                },
                {
                  objectifId: "pc4",
                  question: "Dans « Je sais qu'il viendra », la subordonnée est :",
                  options: ["Une relative", "Une complétive (COD)", "Une circonstancielle", "Une interrogative indirecte"],
                  correctIndex: 1,
                  explanation:
                    "« que » est ici une conjonction sans antécédent : la subordonnée est une complétive, COD du verbe « sais ».",
                },
                {
                  objectifId: "pc5",
                  question: "Comment distingue-t-on « que » relatif et « que » conjonction ?",
                  options: [
                    "Par la place dans la phrase",
                    "Par la présence ou non d'un antécédent nominal",
                    "Par le temps du verbe",
                    "On ne peut pas les distinguer",
                  ],
                  correctIndex: 1,
                  explanation:
                    "Antécédent présent → pronom relatif (relative) ; pas d'antécédent → conjonction (complétive).",
                },
                {
                  objectifId: "pc6",
                  question: "Dans « Ma mère regardait les enfants jouer », « les enfants jouer » est :",
                  options: ["Une relative", "Une complétive", "Une subordonnée infinitive", "Un groupe infinitif CC de but"],
                  correctIndex: 2,
                  explanation:
                    "Verbe de perception (« regardait ») et sujet propre distinct (« les enfants ») : c'est une subordonnée infinitive, COD de « regardait ».",
                },
                {
                  objectifId: "pc6",
                  question: "Dans « Le rideau levé, le spectacle commença », « Le rideau levé » est :",
                  options: ["Une épithète détachée", "Une subordonnée participiale (CC de temps)", "Une relative", "Une complétive"],
                  correctIndex: 1,
                  explanation:
                    "Le participe « levé » a un sujet propre distinct (« le rideau » ≠ « le spectacle ») : subordonnée participiale, CC de temps.",
                },
                {
                  objectifId: "pc3",
                  question: "Dans « Il pleut, mais je sors », les deux propositions sont reliées par :",
                  options: ["Subordination", "Coordination", "Juxtaposition", "Une relative"],
                  correctIndex: 1,
                  explanation:
                    "« mais » est une conjonction de coordination : les deux propositions sont de même rang (coordination).",
                },
                {
                  objectifId: "pc4",
                  question: "Dans « Je me demande s'il viendra », la subordonnée est :",
                  options: ["Une circonstancielle de condition", "Une interrogative indirecte (COD)", "Une relative", "Une complétive"],
                  correctIndex: 1,
                  explanation:
                    "« si » dépend du verbe de questionnement « me demande », sans antécédent : interrogative indirecte, COD de « me demande ».",
                },
                {
                  objectifId: "pc7",
                  question: "Quelle est la première étape de la méthode pour analyser une phrase complexe ?",
                  options: [
                    "Nommer la nature et la fonction de chaque proposition",
                    "Compter les verbes conjugués",
                    "Identifier l'introducteur de chaque subordonnée",
                    "Délimiter chaque proposition",
                  ],
                  correctIndex: 1,
                  explanation:
                    "La méthode en 4 étapes commence par compter les verbes conjugués, puis délimiter, identifier l'introducteur, et enfin nommer nature et fonction.",
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
              sub: "Compter, délimiter, reconnaître la famille",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 1 : Phrase simple ou complexe ?",
              objectifTag: "Compter les propositions",
              question:
                "Comptez les verbes conjugués uniquement :\na) « Elle se hâtait, les yeux baissés, pressée d'atteindre sa maison. »   b) « Ma mère regardait les enfants jouer dans le jardin. »   c) « On écrit parce qu'on ne sait par quel biais attraper le réel. »   d) « Le rideau levé, le spectacle commença. »",
              correction: [
                { type: "line", label: "a)", text: "**Simple** : 1 verbe conjugué (se hâtait) ; « baissés », « pressée », « atteindre » sont des formes non conjuguées." },
                { type: "line", label: "b)", text: "**Complexe** : 1 verbe conjugué (regardait) + 1 subordonnée infinitive (« jouer », sujet propre « les enfants »)." },
                { type: "line", label: "c)", text: "**Complexe** : 2 verbes conjugués (écrit, sait) + 1 interrogative indirecte enchâssée." },
                { type: "line", label: "d)", text: "**Complexe** : 1 verbe conjugué (commença) + 1 subordonnée participiale (« levé », sujet propre « le rideau »)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 2 : Identifier la famille",
              objectifTag: "Les 6 familles",
              question:
                "Identifiez la famille de chaque subordonnée :\na) « les portes <u>qui me séparaient du monde</u> »   b) « Je sais <u>qu'il viendra</u>. »   c) « On écrit <u>parce qu'on ne sait pas</u>. »   d) « Je me demande <u>s'il viendra</u>. »   e) « regardait <u>les enfants jouer</u> »   f) « <u>Le rideau levé</u>, le spectacle commença. »",
              correction: [
                { type: "line", label: "a)", text: "Relative (pronom relatif « qui », antécédent « portes »)" },
                { type: "line", label: "b)", text: "Complétive (conjonction « que », COD de « sais »)" },
                { type: "line", label: "c)", text: "Circonstancielle de cause (locution « parce que », supprimable)" },
                { type: "line", label: "d)", text: "Interrogative indirecte totale (« si » + verbe de questionnement « me demande »)" },
                { type: "line", label: "e)", text: "Subordonnée infinitive (verbe de perception « regardait », sujet propre « les enfants »)" },
                { type: "line", label: "f)", text: "Subordonnée participiale (participe « levé », sujet propre « le rideau »)" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 3 : Nature des formes non conjuguées",
              objectifTag: "Formes non conjuguées",
              question:
                "Identifiez la nature : infinitif · participe présent · gérondif · participe passé · verbe conjugué.\na) « Une femme passa, <u>tenant</u> son enfant. »   b) « les yeux <u>baissés</u> »   c) « Il rentra <u>en chantant</u>. »   d) « <u>Vivre</u>, sans l'écriture, me va mal. »   e) « Ma mère <u>regardait</u> les enfants jouer. »",
              correction: [
                { type: "line", label: "a)", text: "**tenant** → participe présent (-ant, sans « en », invariable)" },
                { type: "line", label: "b)", text: "**baissés** → participe passé (accord masculin pluriel avec « yeux »)" },
                { type: "line", label: "c)", text: "**en chantant** → gérondif (« en » + -ant), CC de manière" },
                { type: "line", label: "d)", text: "**Vivre** → infinitif, sujet du verbe « va »" },
                { type: "line", label: "e)", text: "**regardait** → verbe conjugué (imparfait), délimite la proposition principale" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 4 : Y a-t-il une subordonnée infinitive ?",
              objectifTag: "Subordonnée infinitive",
              question:
                "Appliquez les deux conditions (verbe de perception ou factitif + sujet propre distinct) :\na) « J'entends les oiseaux chanter. »   b) « Il est monté pour regarder les nuages. »   c) « Il sentait le vide de sa vie s'étendre. »   d) « Elle veut partir tôt. »",
              correction: [
                { type: "line", label: "a)", text: "**Oui** : verbe de perception « entends » + sujet propre « les oiseaux » (distinct de « je »)." },
                { type: "line", label: "b)", text: "**Non** : « monter » n'est pas un verbe de perception et le sujet est le même → groupe infinitif, CC de but." },
                { type: "line", label: "c)", text: "**Oui** : verbe de perception « sentait » + sujet propre « le vide de sa vie »." },
                { type: "line", label: "d)", text: "**Non** : « vouloir » n'est pas un verbe de perception et le sujet est le même → groupe infinitif, COD." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : Analyser",
              sub: "Cas limites, enchâssements, justification exigée",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 5 : Subordonnée participiale ou épithète détachée ?",
              question:
                "Appliquez le critère du sujet propre :\na) « Elle passa, tenant son enfant. »   b) « Le rideau levé, le spectacle commença. »   c) « Épuisée, elle s'endormit. »   d) « Tout le monde étant parti, elle ferma la porte. »",
              correction: [
                { type: "line", label: "a)", text: "**Épithète détachée** : sujet de « tenant » = elle (même que « passa »)." },
                { type: "line", label: "b)", text: "**Subordonnée participiale** : sujet de « levé » = le rideau (distinct de « le spectacle »), CC de temps." },
                { type: "line", label: "c)", text: "**Épithète détachée** : sujet de « Épuisée » = elle (même que « s'endormit »)." },
                { type: "line", label: "d)", text: "**Subordonnée participiale** : sujet de « étant parti » = tout le monde (distinct de « elle »), CC de cause." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 6 : « si » interrogatif ou conditionnel ?",
              question:
                "Distinguez et justifiez :\na) « Je me demande s'il viendra. »   b) « Si elle vient, je serai heureux. »   c) « Il ignore si tout est prêt. »",
              correction: [
                { type: "line", label: "a)", text: "**Interrogatif** : verbe de questionnement « me demande » → interrogative indirecte totale." },
                { type: "line", label: "b)", text: "**Conditionnel** : pas de verbe de questionnement, proposition supprimable et déplaçable → circonstancielle de condition." },
                { type: "line", label: "c)", text: "**Interrogatif** : verbe de questionnement « ignore » → interrogative indirecte totale." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 7 : Délimiter et nommer (enchâssements)",
              question:
                "Délimitez toutes les propositions par des crochets et nommez chacune :\na) « Je sais que le livre qu'il lit est passionnant. »   b) « Elle reste parce qu'elle ignore quand il rentrera. »",
              correction: [
                {
                  type: "line",
                  label: "a)",
                  text: "[Je sais] principale ; [que le livre … est passionnant] complétive, COD de « sais » ; [qu'il lit] relative, épithète de « livre ».",
                },
                {
                  type: "line",
                  label: "b)",
                  text: "[Elle reste] principale ; [parce qu'elle ignore …] circonstancielle de cause ; [quand il rentrera] interrogative indirecte, COD de « ignore ».",
                },
                { type: "note", text: "⚠️ Une subordonnée peut en contenir une autre (enchâssement) : on délimite de la plus large à la plus enchâssée." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 8 : Analyser toutes les formes non conjuguées",
              enonce:
                "« Une femme passa, tenant par la main un petit garçon. Elle se hâtait, les yeux baissés, pressée d'atteindre sa maison. »\n*(Émile Zola, Germinal, 1885)*",
              question: "Donnez la nature et la fonction de chaque forme non conjuguée, et dites si elle crée une proposition.",
              correction: [
                {
                  type: "table",
                  headers: ["Forme", "Nature", "Fonction", "Crée une proposition ?"],
                  rows: [
                    ["tenant", "Participe présent", "Épithète détachée de « femme »", "Non (même sujet)"],
                    ["baissés", "Participe passé", "Épithète liée de « yeux »", "Non"],
                    ["pressée", "Participe passé", "Épithète détachée du sujet « elle »", "Non (même sujet)"],
                    ["d'atteindre", "Groupe infinitif prépositionnel", "Complément de l'adjectif « pressée »", "Non (même sujet, pas de verbe de perception)"],
                  ],
                },
                { type: "note", text: "Deux phrases simples : un verbe conjugué chacune (passa, se hâtait)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : Maîtriser",
              sub: "Extraits littéraires, analyse complète, conditions proches du concours",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 9 · Extrait littéraire : Colette",
              enonce:
                "« Ma mère, dont le regard ne vieillissait pas, regardait les enfants jouer dans le jardin. »\n*(Colette, La Maison de Claudine, 1922)*",
              question: "Délimitez et nommez toutes les propositions.",
              correction: [
                {
                  type: "table",
                  headers: ["Proposition", "Nature et fonction"],
                  rows: [
                    ["Ma mère … regardait", "Proposition principale"],
                    ["dont le regard ne vieillissait pas", "Subordonnée relative explicative, épithète de « mère »"],
                    ["les enfants jouer dans le jardin", "Subordonnée infinitive, COD de « regardait » (sujet propre : « les enfants »)"],
                  ],
                },
                { type: "note", text: "💡 La fonction de « dont » (CDN du nom « regard ») se trouve par dépronominalisation : voir les notions 2 et 3." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 10 · Extrait littéraire : Lola Lafon",
              enonce:
                "« On écrit parce qu'on ne sait par quel autre biais attraper le réel. »\n*(Lola Lafon, Quand tu écouteras cette chanson, 2023)*",
              question: "Délimitez et nommez toutes les propositions, et analysez chaque subordonnée.",
              correction: [
                {
                  type: "table",
                  headers: ["Proposition", "Nature et fonction"],
                  rows: [
                    ["On écrit", "Proposition principale"],
                    ["parce qu'on ne sait …", "Subordonnée conjonctive, CC de cause (supprimable et déplaçable)"],
                    ["par quel autre biais attraper le réel", "Subordonnée interrogative indirecte partielle, COD de « sait »"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 11 · Extrait littéraire : Marguerite Duras",
              enonce:
                "« Elle regardait les eaux du fleuve avec une attention que rien ne semblait pouvoir distraire. »\n*(Marguerite Duras, L'Amant, 1984)*",
              question: "Délimitez et nommez toutes les propositions.",
              correction: [
                {
                  type: "table",
                  headers: ["Proposition", "Nature et fonction"],
                  rows: [
                    ["Elle regardait les eaux du fleuve avec une attention", "Proposition principale"],
                    ["que rien ne semblait pouvoir distraire", "Subordonnée relative déterminative, épithète de « attention »"],
                  ],
                },
                { type: "note", text: "💡 « que » est ici un pronom relatif (antécédent « attention ») ; sa fonction (COD de « distraire ») relève des notions 2 et 3." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 12 · Extrait littéraire : Marguerite Yourcenar",
              enonce:
                "« J'ai vu se rouvrir les portes qui me séparaient du monde ; je suis monté sur la terrasse pour regarder les nuages, mais ils étaient moins beaux que ceux de tes crépuscules. »\n*(Marguerite Yourcenar, Nouvelles orientales, 1963)*",
              question: "Délimitez et nommez toutes les propositions.",
              correction: [
                {
                  type: "table",
                  headers: ["Proposition", "Nature et fonction"],
                  rows: [
                    ["j'ai vu (se rouvrir les portes…)", "Proposition principale (+ subordonnée infinitive COD)"],
                    ["se rouvrir les portes…", "Subordonnée infinitive, COD de « ai vu » (sujet propre : « les portes »)"],
                    ["qui me séparaient du monde", "Subordonnée relative déterminative, épithète de « portes »"],
                    ["je suis monté sur la terrasse", "Proposition indépendante juxtaposée"],
                    ["mais ils étaient moins beaux…", "Proposition indépendante coordonnée (« mais »)"],
                  ],
                },
                { type: "note", text: "💡 « pour regarder les nuages » est un groupe infinitif (CC de but), pas une subordonnée infinitive : même sujet, pas de verbe de perception." },
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
              text: "Ces exercices reproduisent le format des questions sur les propositions de la Partie 1 : extrait littéraire, délimitation et nomination des propositions, formulation jury. Les exercices calqués sur des sujets récents portent le badge ✦.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 1 : Colette, La Maison de Claudine",
              enonce:
                "« Ma mère, dont le regard ne vieillissait pas, regardait les enfants jouer dans le jardin. Elle souriait, muette, heureuse, et ne disait rien. »\n*(Colette, La Maison de Claudine, 1922)*",
              question: "Délimitez et nommez toutes les propositions de la première phrase.",
              correction: [
                {
                  type: "table",
                  headers: ["Proposition", "Nature et fonction"],
                  rows: [
                    ["Ma mère … regardait", "Proposition principale"],
                    ["dont le regard ne vieillissait pas", "Subordonnée relative explicative, épithète de « mère »"],
                    ["les enfants jouer dans le jardin", "Subordonnée infinitive, COD de « regardait »"],
                  ],
                },
                { type: "note", text: "⚠️ « muette », « heureuse » sont des épithètes détachées du sujet « elle », pas des propositions (pas de verbe conjugué)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 2 : Marguerite Duras, L'Amant",
              enonce:
                "« Elle regardait les eaux du fleuve avec une attention que rien ne semblait pouvoir distraire. »\n*(Marguerite Duras, L'Amant, 1984)*",
              question: "Délimitez et nommez toutes les propositions.",
              correction: [
                {
                  type: "table",
                  headers: ["Proposition", "Nature et fonction"],
                  rows: [
                    ["Elle regardait … avec une attention", "Proposition principale"],
                    ["que rien ne semblait pouvoir distraire", "Subordonnée relative déterminative, épithète de « attention »"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 3 : Lola Lafon, Quand tu écouteras cette chanson",
              enonce:
                "« On écrit parce qu'on ne sait par quel autre biais attraper le réel. »\n*(Lola Lafon, Quand tu écouteras cette chanson, 2023)*",
              question: "Appliquez la méthode en 4 étapes et nommez chaque proposition.",
              correction: [
                {
                  type: "table",
                  headers: ["Proposition", "Nature et fonction"],
                  rows: [
                    ["On écrit", "Proposition principale"],
                    ["parce qu'on ne sait …", "Subordonnée conjonctive, CC de cause"],
                    ["par quel autre biais attraper le réel", "Subordonnée interrogative indirecte partielle, COD de « sait »"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format concours récent",
              title: "Exercice 4 : Marguerite Yourcenar, Comment Wang-Fô fut sauvé",
              enonce:
                "« J'ai vu se rouvrir les portes qui me séparaient du monde. »\n*(Marguerite Yourcenar, Nouvelles orientales, 1963)*",
              question: "Format identique au concours · Délimitez et nommez les propositions ; précisez la nature de « qui ».",
              correction: [
                {
                  type: "table",
                  headers: ["Proposition", "Nature et fonction"],
                  rows: [
                    ["J'ai vu (se rouvrir les portes…)", "Proposition principale (+ subordonnée infinitive COD)"],
                    ["se rouvrir les portes…", "Subordonnée infinitive, COD de « ai vu » (verbe de perception, sujet propre « les portes »)"],
                    ["qui me séparaient du monde", "Subordonnée relative déterminative, épithète de « portes »"],
                  ],
                },
                { type: "note", text: "« qui » est un pronom relatif (nature). Sa fonction (sujet de « séparaient ») s'analyse dans la notion 2." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format concours récent",
              title: "Exercice 5 : Lola Lafon, Quand tu écouteras cette chanson",
              enonce:
                "« Vivre, sans l'écriture, me va mal, comme un habit trop lâche dans lequel je m'empêtre. »\n*(Lola Lafon, Quand tu écouteras cette chanson, 2023)*",
              question: "Format identique au concours · Délimitez et nommez toutes les propositions ; analysez « comme ».",
              correction: [
                {
                  type: "table",
                  headers: ["Proposition / groupe", "Nature et fonction"],
                  rows: [
                    ["Vivre … me va mal", "Proposition principale (« Vivre » = infinitif, sujet de « va »)"],
                    ["comme un habit trop lâche", "Comparaison introduite par « comme » + GN, CC de comparaison"],
                    ["dans lequel je m'empêtre", "Subordonnée relative déterminative, épithète de « habit »"],
                  ],
                },
                { type: "note", text: "⚠️ « comme » devant un GN (« comme un habit ») s'analyse en préposition introduisant une comparaison ; l'analyse en conjonction de subordination avec ellipse du verbe (« comme [le ferait] un habit ») est également admise. Le seul verbe conjugué de la comparaison est « m'empêtre », dans la relative." },
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
              enonce: "Réponse d'un candidat : « **Elle passa, tenant son enfant** » → deux propositions : principale + subordonnée participiale.",
              question: "Identifiez l'erreur et rédigez la réponse attendue.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Erreur : subordonnée participiale annoncée sans sujet propre distinct", bad: true },
                    { text: "Le sujet de « tenant » est « elle », le même que celui de « passa »" },
                    { text: "Réponse attendue : une seule proposition ; « tenant son enfant » = participe présent, épithète détachée de « femme »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 2 · Réponse à corriger : « pour regarder les nuages »",
              enonce: "Réponse d'un candidat : « **pour regarder les nuages** » → subordonnée infinitive de but, pour *« Il est monté pour regarder les nuages. »*",
              question: "Identifiez les deux conditions manquantes.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "« monter » n'est pas un verbe de perception ou factitif", bad: true },
                    { text: "Le sujet de « regarder » est le même que celui de « monter » : pas de sujet propre distinct", bad: true },
                    { text: "Réponse attendue : groupe infinitif prépositionnel, CC de but de « est monté »" },
                  ],
                },
                { type: "note", text: "💡 La subordonnée infinitive exige les deux conditions simultanément : verbe de perception ou factitif, et sujet propre distinct." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 3 · Réponse à corriger : « Je me demande qui vient »",
              enonce: "Réponse d'un candidat : « **qui vient** : subordonnée relative ; « qui » épithète de « Je » », pour *« Je me demande qui vient. »*",
              question: "Identifiez les deux erreurs et rédigez la réponse attendue.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Pas d'antécédent nominal avant « qui » : ce n'est pas une relative", bad: true },
                    { text: "« Je » n'est pas un antécédent, c'est le sujet de « me demande »", bad: true },
                    { text: "Réponse attendue : subordonnée interrogative indirecte partielle, COD de « me demande » (« qui » = pronom interrogatif)" },
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
                  question: "Comment compte-t-on les propositions d'une phrase ?",
                  answer:
                    "On compte les **verbes conjugués** : un verbe conjugué = une proposition. Ne comptent pas : infinitif, participe présent, gérondif, participe passé sans auxiliaire.",
                  astuce: "⚠️ Exception : un infinitif ou un participe à sujet propre distinct forme une subordonnée (infinitive ou participiale).",
                },
                {
                  question: "Quelles sont les 6 familles de subordonnées ?",
                  answer:
                    "1. **Relative** : pronom relatif + antécédent, épithète.\n2. **Complétive** : « que » conjonction, COD ou sujet.\n3. **Circonstancielle** : conjonction sémantique, CC.\n4. **Interrogative indirecte** : mot interrogatif + verbe de questionnement, COD.\n5. **Infinitive** : verbe de perception/factitif + sujet propre, COD.\n6. **Participiale** : participe + sujet propre, CC.",
                },
                {
                  question: "Quels sont les trois modes de liaison des propositions ?",
                  answer:
                    "**Juxtaposition** (virgule, point-virgule, deux-points), **coordination** (mais, ou, et, donc, or, ni, car), **subordination** (un subordonnant crée une dépendance).",
                },
                {
                  question: "Critère commun à la subordonnée infinitive et à la participiale ?",
                  answer:
                    "Toutes deux exigent un **sujet propre distinct** du sujet principal.\nInfinitive : + verbe de perception ou factitif (« regardait les enfants jouer »).\nParticipiale : participe à sujet propre (« Le rideau levé, le spectacle commença »).",
                  astuce: "⚠️ Même sujet → épithète détachée ou groupe infinitif, pas de subordonnée.",
                },
                {
                  question: "Comment distinguer « que » relatif et « que » conjonction ?",
                  answer:
                    "Chercher un antécédent nominal avant « que ».\nAntécédent présent → pronom relatif (relative).\nPas d'antécédent → conjonction (complétive).",
                  astuce: "« le livre que je lis » (relatif) ; « Je sais que… » (conjonction).",
                },
                {
                  question: "Comment distinguer interrogative indirecte et relative ?",
                  answer:
                    "**Relative** : antécédent nominal + pronom relatif (« l'homme qui vient »).\n**Interrogative indirecte** : verbe de questionnement + pas d'antécédent (« Je me demande qui vient »).",
                },
                {
                  question: "Les 4 formes non conjuguées et leurs fonctions habituelles ?",
                  answer:
                    "Infinitif (-er/-ir/-re) : sujet, COD, complément du nom, CC de but.\nParticipe présent (-ant sans « en ») : épithète détachée.\nGérondif (en + -ant) : CC de manière, temps.\nParticipe passé (-é/-i/-u accordé) : épithète liée ou détachée.",
                },
                {
                  question: "La méthode en 4 étapes pour analyser une phrase complexe ?",
                  answer:
                    "1. Compter les verbes conjugués.\n2. Délimiter chaque proposition entre crochets.\n3. Identifier le mot introducteur (quelle famille ?).\n4. Nommer nature et fonction (principale comprise).",
                  astuce: "💡 Pour une relative, la fonction du pronom relatif se trouve par dépronominalisation (notions 2 et 3).",
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
              center: { title: "La phrase complexe", subtitle: "Propositions et subordonnées" },
              branches: [
                {
                  title: "Compter les propositions",
                  lines: ["1 verbe conjugué = 1 proposition", "Formes non conjuguées : ne comptent pas", "Sauf sujet propre distinct"],
                  variant: "blue",
                },
                {
                  title: "3 modes de liaison",
                  lines: ["Juxtaposition (, ; :)", "Coordination (mais, et, donc…)", "Subordination"],
                  variant: "blue",
                },
                {
                  title: "6 familles de subordonnées",
                  lines: ["Relative · complétive", "Circonstancielle · interrogative indirecte", "Infinitive · participiale"],
                  variant: "green",
                },
                {
                  title: "Méthode en 4 étapes",
                  lines: ["Compter · délimiter", "Identifier l'introducteur", "Nommer nature + fonction"],
                  variant: "green",
                },
                {
                  title: "Pièges classiques",
                  lines: ["Formes non conjuguées comptées", "que relatif ≠ conjonction", "Même sujet ≠ participiale"],
                  variant: "yellow",
                },
                {
                  title: "Renvoi",
                  lines: ["Fonction du pronom relatif", "(dépronominalisation)", "→ notions 2 et 3"],
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
