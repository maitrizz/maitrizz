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
                  text: "Nommer une subordonnée, c'est donner sa **nature** (la famille) et sa **fonction globale** (épithète, COD, CC…). Pour analyser la fonction d'un mot à l'intérieur de la subordonnée (le pronom relatif notamment), voir les notions 2 et 3.",
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
                "**Exemple :** « On écrit parce qu'on cherche à saisir le réel. »\nOn applique les 4 étapes dans l'ordre.",
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
                  text: "**Réponse attendue :** La phrase comporte deux propositions : [On écrit] est la proposition principale ; [parce qu'on cherche à saisir le réel] est une proposition subordonnée conjonctive circonstancielle, complément circonstanciel de cause. Elles sont reliées par subordination au moyen de la locution conjonctive « parce que ».",
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
                "**Question typique du concours :** Délimitez les propositions qui forment cette phrase complexe et précisez la manière dont elles sont reliées.\n« Ma mère regardait les enfants jouer dans le jardin. »",
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
                  text: "**Réponse attendue :** La phrase comporte deux propositions : [Ma mère regardait] est la proposition principale ; [les enfants jouer dans le jardin] est une proposition subordonnée infinitive, COD de « regardait ». La seconde dépend du verbe « regardait », mais elle n'est introduite par aucun mot subordonnant.",
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
                { type: "line", text: "Le sujet de « levé » est « le rideau » ; le sujet de « commença » est « le spectacle ». Les deux sujets sont distincts." },
                { type: "line", text: "**Réponse attendue :** [Le rideau levé] est une proposition subordonnée participiale, complément circonstanciel de temps ; [le spectacle commença] est la proposition principale." },
                { type: "note", text: "Méthode bien en tête ? Direction le Quiz éclair." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Justifier un signe de ponctuation",
              intro:
                "**Question typique :** « Justifiez l'emploi de la virgule dans cette phrase. »\nExemple d'appui : « Quand il arriva, elle lisait un roman. » On nomme l'emploi puis on justifie par la structure.",
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
                  text: "**Réponse attendue :** La virgule marque ici la séparation entre une **subordonnée circonstancielle antéposée** et la proposition principale. Elle isole « Quand il arriva », placée avant « elle lisait un roman ».",
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
                { type: "line", text: "Les deux-points annoncent une **explication** : le second segment explicite ce que le personnage comprend." },
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
                { type: "line", label: "a)", text: "**Complexe** : [Elle se hâtait, pressée d'atteindre sa maison] est la principale ; [les yeux baissés] est une subordonnée participiale, avec le sujet propre « les yeux »." },
                { type: "line", label: "b)", text: "**Complexe** : 1 verbe conjugué (regardait) + 1 subordonnée infinitive (« jouer », sujet propre « les enfants »)." },
                { type: "line", label: "c)", text: "**Complexe** : 2 verbes conjugués (écrit, cherche), donc 2 propositions." },
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
                { type: "line", label: "d)", text: "**Subordonnée participiale** : sujet de « étant parti » = tout le monde (distinct de « elle »), CC de temps, avec une nuance possible de cause." },
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
                { type: "line", label: "a)", text: "**Interrogatif** : verbe de questionnement « me demande » → interrogative indirecte totale." },
                { type: "line", label: "b)", text: "**Conjonction de condition** : la proposition est supprimable et déplaçable ; c'est une subordonnée circonstancielle de condition." },
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
                "« Une femme passa, tenant par la main un petit garçon. Elle se hâtait, les yeux baissés, pressée d'atteindre sa maison. »",
              question: "Donnez la nature et la fonction de chaque forme non conjuguée, et dites si elle crée une proposition.",
              correction: [
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
                {
                  type: "table",
                  headers: ["Proposition", "Nature et fonction"],
                  rows: [
                    ["Ma mère … regardait", "Proposition principale"],
                    ["dont le regard ne vieillissait pas", "Subordonnée relative explicative, apposée au groupe nominal « Ma mère »"],
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
                "« À seize ans, j'ai vu se rouvrir les portes qui me séparaient du monde : je suis monté sur la terrasse du palais pour regarder les nuages, mais ils étaient moins beaux que ceux de tes crépuscules. »\n*(Marguerite Yourcenar, « Comment Wang-Fô fut sauvé », Nouvelles orientales)*",
              question: "Délimitez et donnez la nature des différentes propositions.",
              correction: [
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
                { type: "line", label: "a)", text: "La virgule après « cessa » sépare une **subordonnée circonstancielle de temps antéposée** (« Quand la pluie cessa ») de la proposition principale (« les enfants sortirent »)." },
                { type: "line", label: "b)", text: "Le point-virgule sépare deux propositions indépendantes liées par une relation logique implicite : la seconde prolonge la première en montrant sa conséquence dans la cour." },
                { type: "line", label: "c)", text: "Les deux virgules encadrent une **épithète détachée** (« silencieuse jusque-là ») rapportée au nom « cour » ; elles isolent un constituant supprimable et mis en relief." },
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
                { type: "line", text: "« Épuisée par la marche, » : la virgule marque un **détachement** ; elle isole le groupe adjectival épithète détachée rapporté au sujet « elle »." },
                { type: "line", text: "« autour d'elle, » : la virgule marque le **détachement d'un complément circonstanciel de lieu antéposé** à la proposition « la place se vidait lentement »." },
                { type: "line", text: "Le point-virgule sépare deux propositions indépendantes liées par une relation de simultanéité descriptive : le geste du personnage et l'évolution de la place restent dans la même scène." },
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
