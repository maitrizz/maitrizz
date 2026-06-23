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
  { id: "pc8", label: "Je sais justifier l'emploi syntaxique de la virgule, du point-virgule et des deux-points dans une phrase complexe" },
];

export const fichePhraseComplexe: Fiche = {
  slug: "phrase-complexe",
  matiere: "francais",
  numero: 5,
  partie: "Partie 1 : Grammaire de la phrase",
  title: "La phrase complexe et sa ponctuation",
  subtitle:
    "Compter et nommer les propositions, comprendre leurs liens et justifier la ponctuation syntaxique",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 + lycée · BOEN n°1 du 22 janvier 2019", variant: "info" },
  ],
  metaTitle: "La phrase complexe et sa ponctuation (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur la phrase complexe et sa ponctuation : phrase simple ou complexe, juxtaposition, coordination, subordination, emplois syntaxiques de la virgule, du point-virgule et des deux-points, les 6 familles de subordonnées, les formes non conjuguées. Méthode d'analyse, exercices corrigés, flashcards et auto-évaluation.",
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
              title: "Le programme en 5 étapes",
              items: [
                {
                  number: "①",
                  title: "Phrase simple ou complexe ?",
                  text: "On compte les verbes conjugués : un seul, phrase simple ; plusieurs, phrase complexe. C'est le point de départ.",
                },
                {
                  number: "②",
                  title: "Juxtaposition, coordination, subordination",
                  text: "Trois façons de relier les propositions entre elles.",
                },
                {
                  number: "③",
                  title: "Ponctuation et relations syntaxiques",
                  text: "Virgule, point-virgule et deux-points ne marquent pas seulement une pause : ils signalent un lien entre propositions ou le détachement d'un constituant.",
                },
                {
                  number: "④",
                  title: "Les 6 familles de subordonnées",
                  text: "Relative, complétive, circonstancielle, interrogative indirecte, infinitive, participiale : chacune a son introducteur et sa fonction.",
                },
                {
                  number: "⑤",
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
              title: "La méthode",
              text: "Pour analyser une phrase complexe, il faut **délimiter et nommer chaque proposition**. Procédez toujours dans le même ordre : repérez les verbes conjugués, délimitez les propositions, identifiez comment elles sont reliées, puis donnez la nature et la fonction de chacune.",
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
                        "« Elle se hâtait, pressée d'atteindre sa maison. » → 1 verbe conjugué (se hâtait) : phrase simple",
                        "« On écrit parce qu'on cherche à saisir le réel. » → 2 verbes conjugués (écrit, cherche) : phrase complexe",
                      ],
                      note: "« pressée », « atteindre » et « saisir » sont des formes non conjuguées : elles ne comptent pas ici, car elles n'ont pas de sujet propre distinct (voir l'étape ⑤).",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Le réflexe à avoir",
                  text: "Avant tout, **soulignez les verbes conjugués** : leur nombre donne le nombre de propositions. Ne comptez ni les infinitifs, ni les participes, ni les gérondifs (sauf exception du sujet propre, étape ⑤).",
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
                  text: "Dans une phrase complexe, les propositions sont reliées de trois façons. Pour les distinguer, posez-vous une seule question : **qu'est-ce qui relie les deux propositions, et sont-elles de même rang ?**",
                },
                {
                  type: "table",
                  title: "Les trois modes de liaison (un exemple par ligne)",
                  headers: ["Mode", "Ce qui relie", "Rang des propositions", "Exemple"],
                  rows: [
                    ["**Juxtaposition**", "Un signe de ponctuation seul (virgule, point-virgule, deux-points)", "Même rang (deux indépendantes)", "« Il pleut, je reste. »"],
                    ["**Coordination**", "Une conjonction de coordination", "Même rang (deux indépendantes)", "« Il pleut, mais je sors. »"],
                    ["**Subordination**", "Un subordonnant (pronom relatif, conjonction de subordination…)", "Rangs inégaux : la subordonnée dépend de la principale", "« Je sais qu'il viendra. »"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "🔑",
                  title: "Mémoriser les 7 conjonctions de coordination",
                  text: "**« Mais où est donc Ornicar ? »** : *mais, ou, et, donc, or, ni, car*. Ce sont les seuls mots qui coordonnent. Tout autre mot de liaison (quand, parce que, qui, que…) introduit une **subordination**.",
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Juxtaposition et coordination relient des propositions **de même rang** (souvent des indépendantes). La subordination crée une **dépendance** : la subordonnée a une fonction dans la phrase, exactement comme un mot. C'est ce que nomment les 6 familles de l'étape ④.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Ponctuation syntaxique : virgule, point-virgule, deux-points",
              blocks: [
                {
                  type: "paragraph",
                  text: "Dans une phrase complexe, la ponctuation sert souvent à rendre visible la relation entre les groupes et les propositions. Au concours, il ne suffit pas d'écrire que « la virgule marque une pause » : il faut **nommer l'emploi** et le justifier par la structure de la phrase. Cette question est tombée à la session 2024, où il fallait justifier l'emploi d'une virgule.",
                },
                {
                  type: "table",
                  title: "Les emplois syntaxiques à savoir justifier",
                  headers: ["Signe", "Emploi", "Ce qu'il faut dire"],
                  rows: [
                    ["Virgule", "Juxtaposition", "Elle relie deux propositions de même rang sans conjonction : « Il entra, il s'assit. »"],
                    ["Virgule", "Subordonnée antéposée", "Elle sépare une subordonnée placée avant la principale : « Quand il arriva, elle lisait. »"],
                    ["Virgule", "Détachement", "Elle isole un constituant mobile ou mis en relief : « Épuisée, elle s'endormit. »"],
                    ["Virgule", "Relative explicative", "Elle isole une relative qui ajoute une information non essentielle (par opposition à la relative déterminative, sans virgule) : « Mon frère, qui habite Lyon, vient demain. »"],
                    ["Virgule", "Énumération", "Elle sépare les éléments d'une série : « Il prit son manteau, son sac et ses clés. »"],
                    ["Point-virgule", "Relation logique implicite", "Il sépare deux propositions indépendantes fortement liées par le sens : opposition, conséquence, parallèle."],
                    ["Deux-points", "Annonce explicite", "Ils annoncent une explication, une conséquence, une énumération ou une citation."],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  title: "La réponse attendue",
                  text: "Formule utile : « Le signe marque ici [emploi] : il/elle [action syntaxique], ce qui [effet ou relation de sens]. » Exemple : « La virgule marque un détachement : elle isole l'épithète détachée “Épuisée” du sujet “elle”, en mettant en relief l'état du personnage. »",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Les 6 familles de propositions subordonnées",
              blocks: [
                {
                  type: "paragraph",
                  text: "Chaque subordonnée se reconnaît à son **introducteur** et se nomme par sa **nature** (la famille) et sa **fonction globale** dans la phrase. Les appellations retenues ici (relative, complétive, circonstancielle, interrogative indirecte, infinitive, participiale) sont celles de la [terminologie grammaticale Éduscol 2020](https://eduscol.education.fr/document/1872/download). Voici la vue d'ensemble à mémoriser ; les cartes qui suivent détaillent chaque famille avec son test.",
                },
                {
                  type: "table",
                  title: "Les 6 familles en un coup d'œil",
                  headers: ["Famille", "Introducteur", "Fonction globale", "Test express"],
                  rows: [
                    ["**Relative**", "qui, que, dont, où, lequel (pronom relatif)", "Épithète du nom (antécédent)", "Un antécédent nominal juste avant le pronom ?"],
                    ["**Complétive**", "que (conjonction, sans antécédent)", "COD, sujet ou attribut du verbe", "« que » non déplaçable, sans antécédent ?"],
                    ["**Circonstancielle**", "quand, parce que, si, bien que, pour que…", "CC (temps, cause, condition, but…)", "Supprimable et déplaçable ?"],
                    ["**Interrogative indirecte**", "si, qui, ce que, comment, où, pourquoi…", "COD d'un verbe de question", "Verbe demander/savoir/ignorer + pas d'antécédent ?"],
                    ["**Infinitive**", "aucun (verbe à l'infinitif)", "COD d'un verbe de perception/factitif", "Verbe de perception ou factitif + sujet propre distinct ?"],
                    ["**Participiale**", "aucun (participe présent ou passé)", "CC (temps, cause, condition)", "Participe + sujet propre distinct, détaché par une virgule ?"],
                  ],
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
                      piege: "Le pronom relatif a une nature stable. Sa fonction dans la relative (qui = sujet, dont = CDN ou COI…) se trouve par dépronominalisation : voir [Les fonctions syntaxiques](fiche:fonctions-syntaxiques) et [Le groupe nominal et ses expansions](fiche:groupe-nominal-expansions).",
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
                      definition: "Introduite par un mot interrogatif, après un verbe exprimant une question, un savoir ou une ignorance (demander, savoir, ignorer…). Elle rapporte une question sans guillemets.",
                      sousClasses: "**Introducteurs :** si · qui · comment · où · par quel…",
                      exemples: [
                        "« Je me demande **s'il viendra** » : interrogative indirecte, COD du verbe « me demande »",
                        "« On ne sait **par quel biais attraper le réel** » : interrogative indirecte partielle construite autour d'un infinitif, COD de « sait »",
                      ],
                      piege: "À ne pas confondre avec la relative : l'interrogative indirecte n'a pas d'antécédent et dépend d'un verbe de questionnement.",
                      test: "Pas d'antécédent + mot interrogatif dépendant d'un verbe comme demander, savoir ou ignorer : interrogative indirecte.",
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
                  icon: "📌",
                  title: "Trois précisions que le jury valorise",
                  text: "**La complétive n'est pas toujours COD.** Elle peut être **sujet** (« *Qu'il vienne* me rassure »), **attribut** (« Mon espoir est *qu'il revienne* ») ou compléter un nom ou un adjectif (« l'idée *qu'il parte* », « heureux *qu'il vienne* »).\n\n**La relative se nuance.** *Déterminative* (sans virgule) : elle restreint le nom et n'est pas supprimable (« les élèves *qui travaillent* réussissent »). *Explicative* (entre virgules) : elle ajoute une information non essentielle (« mes élèves, *qui travaillent*, réussissent »).\n\n**La consécutive existe.** Avec *si… que, tellement… que, au point que*, on a une circonstancielle de **conséquence** (« Il pleut *tellement que* la rue est inondée »).",
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Nommer une subordonnée, c'est donner sa **nature** (la famille) et sa **fonction globale** (épithète, COD, CC…). Pour analyser la fonction d'un mot à l'intérieur de la subordonnée (le pronom relatif notamment), voir les notions [Les fonctions syntaxiques](fiche:fonctions-syntaxiques) et [Le groupe nominal et ses expansions](fiche:groupe-nominal-expansions).",
                },
              ],
            },
            {
              type: "subsection",
              number: "⑤",
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
                    ["Participe passé", "-é, -i, -u ; s'accorde avec le nom", "Épithète liée ou détachée, ou noyau d'une participiale", "« une élève **épuisée** » : épithète liée ; « **Le rideau levé**, le spectacle commença » : participiale"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ Exception : si l'infinitif ou le participe a un **sujet propre distinct** du sujet principal, il forme une subordonnée infinitive ou participiale (étape ④) et compte alors comme une proposition.",
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
              text: "**Cycle 1 (maternelle) :** tout se joue à l'oral. L'enfant passe de la juxtaposition de mots à des phrases de plus en plus longues, et commence à relier ses idées avec « et », « parce que », « quand ». C'est la première forme de complexité, sans aucun terme savant.\n\n**Cycle 2 (CP-CE2) :** les élèves travaillent surtout la phrase simple à l'écrit, repèrent le verbe conjugué et observent les signes de ponctuation (point, virgule, point d'interrogation).\n\n**Cycle 3 (CM1-6e) :** on introduit la phrase complexe par observation : compter les verbes conjugués, repérer les mots de liaison (et, mais, parce que, qui, que). Les termes savants (subordonnée, principale) arrivent au cycle 4. Les attendus par cycle figurent dans les [programmes de français en vigueur](https://eduscol.education.fr/137/cycle-2-et-cycle-3).\n\n**Ce que vous devez savoir dire :** « On part du verbe conjugué : autant de verbes conjugués, autant de propositions. On observe ensuite comment elles sont reliées (juxtaposition, coordination, subordination). Cette démarche se prépare à l'oral dès la maternelle, puis se construit à l'écrit du cycle 2 au cycle 3. »",
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
              title: "Trois démarches à maîtriser",
              text: "Face à une phrase, on applique toujours les mêmes étapes : compter, délimiter, identifier l'introducteur, nommer. Une seconde méthode traite le cas particulier des subordonnées sans subordonnant, puis une troisième apprend à justifier la ponctuation syntaxique.",
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
                "*Question typique : « Délimitez les propositions de la phrase suivante, précisez leur nature et la manière dont elles sont reliées : On écrit parce qu'on cherche à saisir le réel. »*",
              steps: [
                {
                  number: "1",
                  text: "**Compter les verbes conjugués :** « écrit », « cherche » → 2 propositions → phrase complexe.",
                  example: { lines: ["« saisir » est un infinitif : il ne compte pas"] },
                },
                {
                  number: "2",
                  text: "**Délimiter chaque proposition :** [On écrit] [parce qu'on cherche à saisir le réel].",
                },
                {
                  number: "3",
                  text: "**Identifier l'introducteur :** « parce que » est une locution conjonctive qui introduit une subordonnée circonstancielle de cause.",
                },
                {
                  number: "💡",
                  text: "**Réponse attendue (formulation modèle) :** « La phrase comporte deux propositions. [On écrit] est la proposition principale ; [parce qu'on cherche à saisir le réel] est une proposition subordonnée conjonctive circonstancielle, complément circonstanciel de cause de “écrit”. Elles sont reliées par **subordination**, au moyen de la locution conjonctive “parce que”. »",
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
                { type: "line", text: "**Explication :** deux verbes conjugués (« arriva », « lisait ») → deux propositions. « Quand » introduit une subordonnée circonstancielle de temps, supprimable et déplaçable." },
                { type: "line", text: "**Réponse attendue (formulation modèle) :** « La phrase comporte deux propositions. [Quand il arriva] est une subordonnée circonstancielle de temps ; [elle lisait un roman] est la proposition principale. Elles sont reliées par subordination. »" },
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
                "*Question typique : Délimitez les propositions qui forment cette phrase complexe et précisez la manière dont elles sont reliées : « Ma mère regardait les enfants jouer dans le jardin. »*",
              steps: [
                {
                  number: "1",
                  text: "**Repérer les verbes :** « regardait » est conjugué et « jouer » est à l'infinitif.",
                },
                {
                  number: "2",
                  text: "**Chercher le sujet de chaque verbe :** « ma mère » est le sujet de « regardait » ; « les enfants » est le sujet de « jouer ». L'infinitif possède donc un sujet propre, distinct de celui du verbe principal.",
                },
                {
                  number: "💡",
                  text: "**Réponse attendue (formulation modèle) :** « La phrase comporte deux propositions. [Ma mère regardait] est la proposition principale ; [les enfants jouer dans le jardin] est une proposition subordonnée infinitive, COD de “regardait”. La seconde dépend du verbe “regardait”, mais elle n'est introduite par aucun mot subordonnant : c'est le sujet propre “les enfants” qui en fait une proposition. »",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "« Le rideau levé, le spectacle commença. » Délimitez et nommez les propositions.",
              correction: [
                { type: "line", text: "**Explication :** le sujet de « levé » est « le rideau » ; le sujet de « commença » est « le spectacle ». Les deux sujets sont distincts : le participe forme donc bien une proposition." },
                { type: "line", text: "**Réponse attendue (formulation modèle) :** « [Le rideau levé] est une proposition subordonnée participiale, complément circonstanciel de temps ; [le spectacle commença] est la proposition principale. »" },
                { type: "note", text: "Méthode bien en tête ? Direction le Quiz éclair." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Justifier un signe de ponctuation",
              intro:
                "*Question typique : « Justifiez l'emploi de la virgule dans la phrase suivante : Quand il arriva, elle lisait un roman. »*",
              steps: [
                {
                  number: "1",
                  text: "**Identifier ce que le signe sépare ou isole** : ici, la virgule sépare « Quand il arriva » et « elle lisait un roman ».",
                },
                {
                  number: "2",
                  text: "**Nommer l'emploi syntaxique** : « Quand il arriva » est une subordonnée circonstancielle de temps placée avant la principale.",
                },
                {
                  number: "💡",
                  text: "**Réponse attendue (formulation modèle) :** « La virgule marque ici la séparation entre une **subordonnée circonstancielle de temps antéposée** (“Quand il arriva”) et la proposition principale (“elle lisait un roman”) : elle signale que la subordonnée est placée avant la principale. »",
                  warn: "⚠️ Ne pas répondre seulement : « la virgule marque une pause ». Le jury attend le nom de l'emploi.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Justifiez les deux-points : « Il comprit enfin : la porte était restée ouverte. »",
              correction: [
                { type: "line", text: "**Explication :** la seconde proposition (« la porte était restée ouverte ») dit le contenu de ce que le personnage comprend. Le signe introduit ce que la première proposition annonce." },
                { type: "line", text: "**Réponse attendue (formulation modèle) :** « Les deux-points marquent une **annonce explicative** : ils introduisent la proposition qui explicite ce que le personnage comprend (la cause de sa compréhension). »" },
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
              text: "10 questions rapides pour vérifier que le Cours et la Méthode sont bien ancrés. Le détail objectif par objectif est dans l'onglet Auto-évaluation.",
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
                {
                  objectifId: "pc8",
                  question: "Quelle justification est correcte pour la virgule de « Quand il arriva, elle lisait » ?",
                  options: [
                    "Elle marque une pause dans la lecture",
                    "Elle sépare une subordonnée circonstancielle antéposée de la principale",
                    "Elle annonce une explication",
                    "Elle coordonne deux propositions avec une conjonction",
                  ],
                  correctIndex: 1,
                  explanation:
                    "La virgule sépare la subordonnée circonstancielle de temps, placée avant la proposition principale. Il faut nommer cet emploi syntaxique.",
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
                "Pour chaque phrase, dites si elle est simple ou complexe. Justifiez en repérant les verbes conjugués et les éventuelles formes non conjuguées à sujet propre :\na) « Elle se hâtait, les yeux baissés, pressée d'atteindre sa maison. »   b) « Ma mère regardait les enfants jouer dans le jardin. »   c) « On écrit parce qu'on cherche à saisir le réel. »   d) « Le rideau levé, le spectacle commença. »",
              correction: [
                { type: "line", label: "a)", text: "**Explication :** un seul verbe conjugué (« se hâtait »), mais « les yeux baissés » a le sujet propre « les yeux » : il forme une proposition. « pressée d'atteindre » garde le sujet « elle » : ce n'est pas une proposition." },
                { type: "line", label: "b)", text: "**Explication :** 1 verbe conjugué (« regardait ») + « jouer » (infinitif à sujet propre « les enfants ») : une subordonnée infinitive." },
                { type: "line", label: "c)", text: "**Explication :** 2 verbes conjugués (« écrit », « cherche »), donc 2 propositions. « saisir » est un infinitif, il ne compte pas." },
                { type: "line", label: "d)", text: "**Explication :** 1 verbe conjugué (« commença ») + « levé » (participe à sujet propre « le rideau ») : une subordonnée participiale." },
                { type: "line", text: "**Réponse attendue (formulation jury) :** « Les quatre phrases sont **complexes** : a) une principale et une subordonnée participiale (“les yeux baissés”) ; b) une principale et une subordonnée infinitive ; c) deux propositions reliées par subordination ; d) une principale et une subordonnée participiale. »" },
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
                { type: "line", label: "a)", text: "**Explication :** antécédent nominal « portes » juste avant « qui » → relative." },
                { type: "line", label: "b)", text: "**Explication :** « que » sans antécédent, non déplaçable → complétive, COD de « sais »." },
                { type: "line", label: "c)", text: "**Explication :** « parce que » introduit une proposition supprimable et déplaçable → circonstancielle de cause." },
                { type: "line", label: "d)", text: "**Explication :** « si » dépend du verbe de questionnement « me demande », sans antécédent → interrogative indirecte." },
                { type: "line", label: "e)", text: "**Explication :** verbe de perception « regardait » + sujet propre « les enfants » → infinitive." },
                { type: "line", label: "f)", text: "**Explication :** participe « levé » + sujet propre « le rideau » → participiale." },
                { type: "line", text: "**Réponse attendue (formulation jury) :** « a) subordonnée **relative**, épithète de “portes” ; b) subordonnée **complétive**, COD de “sais” ; c) subordonnée **circonstancielle de cause** ; d) subordonnée **interrogative indirecte** totale, COD de “me demande” ; e) subordonnée **infinitive**, COD de “regardait” ; f) subordonnée **participiale**, CC de temps. »" },
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
                { type: "line", label: "a)", text: "**Explication :** terminaison -ant, sans « en », forme invariable → participe présent." },
                { type: "line", label: "b)", text: "**Explication :** accord masculin pluriel avec « yeux » (-és) → participe passé." },
                { type: "line", label: "c)", text: "**Explication :** « en » + forme en -ant → gérondif." },
                { type: "line", label: "d)", text: "**Explication :** forme en -re invariable placée en tête, commande le verbe « va » → infinitif sujet." },
                { type: "line", label: "e)", text: "**Explication :** forme conjuguée à l'imparfait (porte les marques de personne et de temps) → verbe conjugué." },
                { type: "line", text: "**Réponse attendue (formulation jury) :** « a) “tenant” = participe présent, épithète détachée ; b) “baissés” = participe passé ; c) “en chantant” = gérondif, CC de manière ; d) “Vivre” = infinitif, sujet de “va” ; e) “regardait” = verbe conjugué (imparfait), noyau de la proposition principale. »" },
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
                { type: "line", label: "a)", text: "**Explication :** verbe de perception « entends » + sujet propre « les oiseaux » (distinct de « je ») : les deux conditions sont réunies." },
                { type: "line", label: "b)", text: "**Explication :** « monter » n'est pas un verbe de perception, et le sujet de « regarder » reste « il » : aucune condition remplie." },
                { type: "line", label: "c)", text: "**Explication :** verbe de perception « sentait » + sujet propre « le vide de sa vie » : les deux conditions sont réunies." },
                { type: "line", label: "d)", text: "**Explication :** « vouloir » n'est pas un verbe de perception, et le sujet de « partir » reste « elle »." },
                { type: "line", text: "**Réponse attendue (formulation jury) :** « a) **oui**, subordonnée infinitive, COD de “entends” ; b) **non**, groupe infinitif, CC de but de “est monté” ; c) **oui**, subordonnée infinitive, COD de “sentait” ; d) **non**, groupe infinitif, COD de “veut”. »" },
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
                { type: "line", label: "a)", text: "**Explication :** sujet de « tenant » = « elle », identique à celui de « passa » → pas de proposition." },
                { type: "line", label: "b)", text: "**Explication :** sujet de « levé » = « le rideau », distinct de « le spectacle » → proposition." },
                { type: "line", label: "c)", text: "**Explication :** sujet de « Épuisée » = « elle », identique à celui de « s'endormit » → pas de proposition." },
                { type: "line", label: "d)", text: "**Explication :** sujet de « étant parti » = « tout le monde », distinct de « elle » → proposition." },
                { type: "line", text: "**Réponse attendue (formulation jury) :** « a) **épithète détachée** du sujet “elle” ; b) **subordonnée participiale**, CC de temps ; c) **épithète détachée** du sujet “elle” ; d) **subordonnée participiale**, CC de temps (nuance de cause possible). »" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 6 : « si » interrogatif ou conjonction de condition ?",
              question:
                "Distinguez et justifiez :\na) « Je me demande s'il viendra. »   b) « Si elle vient, je serai heureux. »   c) « Il ignore si tout est prêt. »",
              correction: [
                { type: "line", label: "a)", text: "**Explication :** « si » dépend du verbe de questionnement « me demande » et ne peut pas se déplacer → « si » interrogatif." },
                { type: "line", label: "b)", text: "**Explication :** « si » introduit une condition supprimable et déplaçable (« Je serai heureux si elle vient ») → « si » conjonction de condition." },
                { type: "line", label: "c)", text: "**Explication :** « si » dépend du verbe de questionnement « ignore » → « si » interrogatif." },
                { type: "line", text: "**Réponse attendue (formulation jury) :** « a) subordonnée **interrogative indirecte** totale, COD de “me demande” ; b) subordonnée **circonstancielle de condition** ; c) subordonnée **interrogative indirecte** totale, COD de “ignore”. »" },
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
                { type: "line", text: "**Explication :** chaque phrase a 3 verbes conjugués → 3 propositions. En a), le « que » de « que le livre… » n'a pas d'antécédent (complétive), mais le « qu' » de « qu'il lit » a pour antécédent « livre » (relative). En b), « ignore » est un verbe de questionnement, donc « quand il rentrera » est interrogative indirecte (et non circonstancielle de temps)." },
                {
                  type: "line",
                  label: "a)",
                  text: "**Réponse attendue :** [Je sais] principale ; [que le livre … est passionnant] complétive, COD de « sais » ; [qu'il lit] relative, épithète de « livre ».",
                },
                {
                  type: "line",
                  label: "b)",
                  text: "**Réponse attendue :** [Elle reste] principale ; [parce qu'elle ignore …] circonstancielle de cause ; [quand il rentrera] interrogative indirecte, COD de « ignore ».",
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
                "« Une femme passa, tenant par la main un petit garçon. Elle se hâtait, les yeux baissés, pressée d'atteindre sa maison. »",
              question: "Donnez la nature et la fonction de chaque forme non conjuguée, et dites si elle crée une proposition.",
              correction: [
                { type: "line", text: "**Explication :** on teste le sujet de chaque forme. Seul « les yeux baissés » a un sujet propre (« les yeux » ≠ « elle ») : c'est la seule forme qui crée une proposition. Les autres gardent le sujet de la phrase, ce sont donc des épithètes détachées ou des compléments." },
                { type: "line", text: "**Réponse attendue (formulation jury) :**" },
                {
                  type: "table",
                  headers: ["Forme", "Nature", "Fonction", "Crée une proposition ?"],
                  rows: [
                    ["tenant", "Participe présent", "Épithète détachée de « femme »", "Non (même sujet)"],
                    ["baissés", "Participe passé", "Noyau de la participiale « les yeux baissés », CC de manière", "Oui (sujet propre : « les yeux »)"],
                    ["pressée", "Participe passé", "Épithète détachée du sujet « elle »", "Non (même sujet)"],
                    ["d'atteindre", "Groupe infinitif prépositionnel", "Complément de l'adjectif « pressée »", "Non (même sujet, pas de verbe de perception)"],
                  ],
                },
                { type: "note", text: "La première phrase est simple. La seconde est complexe : elle contient une principale et la participiale « les yeux baissés »." },
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
              title: "Exercice 9 · Analyse complète",
              enonce:
                "« Ma mère, dont le regard ne vieillissait pas, regardait les enfants jouer dans le jardin. »",
              question: "Délimitez et nommez toutes les propositions.",
              correction: [
                { type: "line", text: "**Explication :** 3 verbes conjugués ? Non : « regardait » et « vieillissait » sont conjugués (« jouer » est un infinitif). La relative « dont… » est encadrée de virgules → explicative. « les enfants jouer » a le sujet propre « les enfants » après un verbe de perception → infinitive." },
                { type: "line", text: "**Réponse attendue (formulation jury) :**" },
                {
                  type: "table",
                  headers: ["Proposition", "Nature et fonction"],
                  rows: [
                    ["Ma mère … regardait", "Proposition principale"],
                    ["dont le regard ne vieillissait pas", "Subordonnée relative explicative, apposée au groupe nominal « Ma mère »"],
                    ["les enfants jouer dans le jardin", "Subordonnée infinitive, COD de « regardait » (sujet propre : « les enfants »)"],
                  ],
                },
                { type: "note", text: "💡 La fonction de « dont » (CDN du nom « regard ») se trouve par dépronominalisation : voir [Les fonctions syntaxiques](fiche:fonctions-syntaxiques) et [Le groupe nominal et ses expansions](fiche:groupe-nominal-expansions)." },
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
                { type: "line", text: "**Explication :** « écrit » et « sait » sont les verbes conjugués. « parce que » introduit une cause (supprimable et déplaçable). « par quel biais » est un groupe interrogatif après le verbe de savoir « sait » : interrogative indirecte partielle, construite ici autour de l'infinitif « attraper »." },
                { type: "line", text: "**Réponse attendue (formulation jury) :**" },
                {
                  type: "table",
                  headers: ["Proposition", "Nature et fonction"],
                  rows: [
                    ["On écrit", "Proposition principale"],
                    ["parce qu'on ne sait …", "Subordonnée conjonctive, CC de cause (supprimable et déplaçable)"],
                    ["par quel autre biais attraper le réel", "Subordonnée interrogative indirecte partielle, COD de « sait »"],
                  ],
                },
                { type: "note", text: "Ici, l'interrogative indirecte est construite autour de l'infinitif « attraper ». Elle ne comporte pas de verbe conjugué, mais elle dépend du verbe « sait »." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 11 · Analyse complète",
              enonce:
                "« Elle regardait les eaux du fleuve avec une attention que rien ne semblait pouvoir distraire. »",
              question: "Délimitez et nommez toutes les propositions.",
              correction: [
                { type: "line", text: "**Explication :** deux verbes conjugués (« regardait », « semblait » ; « pouvoir » et « distraire » sont des infinitifs). « que » a pour antécédent « attention » → relative. Sans virgule, elle restreint le nom → déterminative." },
                { type: "line", text: "**Réponse attendue (formulation jury) :**" },
                {
                  type: "table",
                  headers: ["Proposition", "Nature et fonction"],
                  rows: [
                    ["Elle regardait les eaux du fleuve avec une attention", "Proposition principale"],
                    ["que rien ne semblait pouvoir distraire", "Subordonnée relative déterminative, épithète de « attention »"],
                  ],
                },
                { type: "note", text: "💡 « que » est ici un pronom relatif (antécédent « attention ») ; sa fonction (COD de « distraire ») relève de [Les fonctions syntaxiques](fiche:fonctions-syntaxiques)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 12 · Extrait littéraire : Marguerite Yourcenar",
              enonce:
                "« À seize ans, j'ai vu se rouvrir les portes qui me séparaient du monde : je suis monté sur la terrasse du palais pour regarder les nuages, mais ils étaient moins beaux que ceux de tes crépuscules. »\n*(Marguerite Yourcenar, « Comment Wang-Fô fut sauvé », Nouvelles orientales)*",
              question: "Délimitez et donnez la nature des différentes propositions.",
              correction: [
                { type: "line", text: "**Explication :** verbes conjugués : « ai vu », « séparaient », « suis monté », « étaient ». « ai vu » est un verbe de perception et « les portes » est le sujet propre de l'infinitif « se rouvrir » → infinitive. Les deux-points puis « mais » articulent ensuite deux indépendantes (juxtaposition puis coordination). Attention : « pour regarder » garde le sujet « je » → groupe infinitif, pas une infinitive." },
                { type: "line", text: "**Réponse attendue (formulation jury) :**" },
                {
                  type: "table",
                  headers: ["Proposition", "Nature et fonction"],
                  rows: [
                    ["À seize ans, j'ai vu", "Proposition principale"],
                    ["se rouvrir les portes…", "Subordonnée infinitive, COD de « ai vu » (sujet propre : « les portes »)"],
                    ["qui me séparaient du monde", "Subordonnée relative déterminative, épithète de « portes »"],
                    ["je suis monté sur la terrasse du palais pour regarder les nuages", "Proposition indépendante, juxtaposée à la première partie de la phrase"],
                    ["mais ils étaient moins beaux que ceux de tes crépuscules", "Proposition indépendante, coordonnée à la précédente par « mais »"],
                  ],
                },
                { type: "note", text: "💡 « pour regarder les nuages » est un groupe infinitif (CC de but), pas une subordonnée infinitive : même sujet, pas de verbe de perception." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 13 · Justifier la ponctuation syntaxique",
              enonce:
                "« Quand la pluie cessa, les enfants sortirent ; la cour, silencieuse jusque-là, se remplit de cris. »",
              question: "Justifiez la virgule après « cessa », le point-virgule, puis les deux virgules qui encadrent « silencieuse jusque-là ».",
              correction: [
                { type: "line", label: "a)", text: "**Explication :** « Quand la pluie cessa » est une subordonnée circonstancielle de temps placée avant la principale ; la virgule signale cette antéposition." },
                { type: "line", label: "b)", text: "**Explication :** « les enfants sortirent » et « la cour… se remplit de cris » sont deux indépendantes ; aucun mot de liaison ne les unit, mais le sens les rattache (conséquence)." },
                { type: "line", label: "c)", text: "**Explication :** « silencieuse jusque-là » est supprimable et se rapporte au nom « cour » ; les deux virgules l'isolent comme épithète détachée." },
                { type: "line", text: "**Réponse attendue (formulation jury) :** « a) la virgule sépare une **subordonnée circonstancielle de temps antéposée** de la principale ; b) le point-virgule marque une **relation logique implicite** entre deux indépendantes (conséquence) ; c) les deux virgules marquent le **détachement d'une épithète** (“silencieuse jusque-là”) rapportée au nom “cour”. »" },
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
              text: "Ces exercices reprennent les formulations du concours : délimiter les propositions et donner leur nature. Le badge ✦ signale un exercice directement tiré d'un sujet récent ; les autres sont des entraînements construits dans le même esprit.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 1 : Infinitive et relative",
              enonce:
                "« Ma mère, dont le regard ne vieillissait pas, regardait les enfants jouer dans le jardin. »",
              question: "Délimitez et nommez toutes les propositions.",
              correction: [
                { type: "line", text: "**Explication :** « regardait » et « vieillissait » sont les verbes conjugués. La relative « dont… » est entre virgules (explicative) ; « les enfants jouer » a un sujet propre après un verbe de perception (infinitive)." },
                {
                  type: "formulationCrpe",
                  text: "« La proposition principale est *Ma mère… regardait* ; *dont le regard ne vieillissait pas* est une subordonnée relative explicative, apposée au GN *Ma mère* (entre virgules) ; *les enfants jouer dans le jardin* est une subordonnée infinitive, COD de *regardait* (verbe de perception, sujet propre *les enfants*). »",
                },
                {
                  type: "table",
                  headers: ["Proposition", "Nature et fonction"],
                  rows: [
                    ["Ma mère … regardait", "Proposition principale"],
                    ["dont le regard ne vieillissait pas", "Subordonnée relative explicative, apposée au groupe nominal « Ma mère »"],
                    ["les enfants jouer dans le jardin", "Subordonnée infinitive, COD de « regardait »"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 2 : Proposition relative",
              enonce:
                "« Elle regardait les eaux du fleuve avec une attention que rien ne semblait pouvoir distraire. »",
              question: "Délimitez et nommez toutes les propositions.",
              correction: [
                { type: "line", text: "**Explication :** « regardait » et « semblait » sont les seuls verbes conjugués. « que » a pour antécédent « attention » → relative ; sans virgule, elle restreint le nom → déterminative." },
                {
                  type: "formulationCrpe",
                  text: "« La proposition principale est *Elle regardait les eaux du fleuve avec une attention* ; *que rien ne semblait pouvoir distraire* est une subordonnée relative déterminative (antécédent *attention*, sans virgule), épithète de *attention*. »",
                },
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
              question: "Délimitez les propositions et donnez leur nature.",
              correction: [
                { type: "line", text: "**Explication :** « écrit » et « sait » sont les verbes conjugués. « parce que » introduit une cause supprimable et déplaçable. « par quel biais » est un groupe interrogatif dépendant du verbe de savoir « sait » → interrogative indirecte partielle." },
                {
                  type: "formulationCrpe",
                  text: "« La proposition principale est *On écrit* ; *parce qu'on ne sait…* est une subordonnée conjonctive, CC de cause ; *par quel autre biais attraper le réel* est une subordonnée interrogative indirecte partielle, COD de *sait*. »",
                },
                {
                  type: "table",
                  headers: ["Proposition", "Nature et fonction"],
                  rows: [
                    ["On écrit", "Proposition principale"],
                    ["parce qu'on ne sait …", "Subordonnée conjonctive, CC de cause"],
                    ["par quel autre biais attraper le réel", "Subordonnée interrogative indirecte partielle, COD de « sait »"],
                  ],
                },
                { type: "note", text: "L'interrogative indirecte est ici construite autour de l'infinitif « attraper » et dépend du verbe « sait »." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format concours récent",
              title: "Exercice 4 : Marguerite Yourcenar, Comment Wang-Fô fut sauvé",
              enonce:
                "« À seize ans, j'ai vu se rouvrir les portes qui me séparaient du monde : je suis monté sur la terrasse du palais pour regarder les nuages, mais ils étaient moins beaux que ceux de tes crépuscules. »\n*(Marguerite Yourcenar, « Comment Wang-Fô fut sauvé », Nouvelles orientales)*",
              question: "Délimitez et donnez la nature des différentes propositions.",
              correction: [
                { type: "line", text: "**Explication :** verbes conjugués : « ai vu », « séparaient », « suis monté », « étaient ». « ai vu » (perception) + sujet propre « les portes » → infinitive ; « qui » a pour antécédent « portes » → relative. Les deux-points puis « mais » articulent deux indépendantes (juxtaposition, puis coordination)." },
                {
                  type: "formulationCrpe",
                  text: "« *À seize ans, j'ai vu* est la proposition principale ; *se rouvrir les portes…* une subordonnée infinitive, COD de *ai vu* (sujet propre *les portes*) ; *qui me séparaient du monde* une relative déterminative, épithète de *portes* ; *je suis monté… pour regarder les nuages* une indépendante juxtaposée ; *mais ils étaient moins beaux que ceux de tes crépuscules* une indépendante coordonnée par *mais*. »",
                },
                {
                  type: "table",
                  headers: ["Proposition", "Nature et fonction"],
                  rows: [
                    ["À seize ans, j'ai vu", "Proposition principale"],
                    ["se rouvrir les portes…", "Subordonnée infinitive, COD de « ai vu » (verbe de perception, sujet propre « les portes »)"],
                    ["qui me séparaient du monde", "Subordonnée relative déterminative, épithète de « portes »"],
                    ["je suis monté sur la terrasse du palais pour regarder les nuages", "Proposition indépendante, juxtaposée à la première partie de la phrase"],
                    ["mais ils étaient moins beaux que ceux de tes crépuscules", "Proposition indépendante, coordonnée à la précédente par « mais »"],
                  ],
                },
                { type: "note", text: "« pour regarder les nuages » est un groupe infinitif, CC de but, et non une proposition infinitive." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "Entraînement adapté d'un sujet récent",
              title: "Exercice 5 : Lola Lafon, Quand tu écouteras cette chanson",
              enonce:
                "« Vivre, sans l'écriture, me va mal, comme un habit trop lâche dans lequel je m'empêtre. »\n*(Lola Lafon, Quand tu écouteras cette chanson, 2023)*",
              question: "Délimitez et nommez toutes les propositions, puis analysez « comme ».",
              correction: [
                { type: "line", text: "**Explication :** « va » et « m'empêtre » sont les verbes conjugués (« Vivre » est un infinitif sujet). « comme un habit trop lâche » introduit une comparaison ; « dans lequel » a pour antécédent « habit » → relative déterminative." },
                {
                  type: "formulationCrpe",
                  text: "« *Vivre… me va mal* est la proposition principale (*Vivre*, infinitif sujet de *va*) ; *comme un habit trop lâche* est une comparaison (préposition *comme* + GN), CC de comparaison ; *dans lequel je m'empêtre* est une relative déterminative, épithète de *habit*. »",
                },
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
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 6 : emploi de la virgule",
              enonce:
                "« Épuisée par la marche, elle s'assit sur le banc ; autour d'elle, la place se vidait lentement. »",
              question: "Analysez deux emplois de la virgule et justifiez le point-virgule.",
              correction: [
                { type: "line", text: "**Explication :** « Épuisée par la marche » se rapporte au sujet « elle » et reste supprimable → épithète détachée isolée par la virgule. « autour d'elle » est un CC de lieu placé avant son verbe « se vidait » → détachement d'un complément antéposé. Le point-virgule relie deux indépendantes appartenant à la même scène." },
                { type: "formulationCrpe", text: "« La première virgule marque le **détachement d'une épithète** (“Épuisée par la marche”) rapportée au sujet “elle” ; la seconde marque le **détachement d'un CC de lieu antéposé** (“autour d'elle”) ; le point-virgule marque une **relation logique implicite** (simultanéité descriptive) entre deux indépendantes. »" },
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
                    { text: "Réponse attendue : une seule proposition ; « tenant son enfant » = groupe participial, épithète détachée du sujet « elle »" },
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
                  question: "Comment justifier une virgule au CRPE ?",
                  answer:
                    "Il faut nommer l'emploi syntaxique, puis dire ce que la virgule isole ou relie.\nExemples : subordonnée antéposée (« Quand il arrive, je pars »), détachement (« Épuisée, elle dort »), juxtaposition (« Il entre, il s'assoit »), énumération.",
                  astuce: "⚠️ « La virgule marque une pause » est trop vague : le jury attend une justification grammaticale.",
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
                  astuce: "💡 Pour une relative, la fonction du pronom relatif se trouve par dépronominalisation : voir [Les fonctions syntaxiques](fiche:fonctions-syntaxiques).",
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
                  title: "Ponctuation syntaxique",
                  lines: ["Virgule : détachement, juxtaposition", "Point-virgule : lien implicite", "Deux-points : annonce explicite"],
                  variant: "green",
                },
                {
                  title: "6 familles de subordonnées",
                  lines: ["Relative · complétive", "Circonstancielle · interrogative indirecte", "Infinitive · participiale"],
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
