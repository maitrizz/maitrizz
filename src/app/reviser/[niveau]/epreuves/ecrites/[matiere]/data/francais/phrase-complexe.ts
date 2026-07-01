import type { Fiche } from "@/components/fiche/types";
import { EXERCICES_PHRASE_COMPLEXE } from "./exercices-phrase-complexe";
import { COPIES_PHRASE_COMPLEXE } from "./copies-phrase-complexe";

export const SAVOIR_FAIRE = [
  { id: "juxtaposition-coordination-subordination", label: "Juxtaposition/coordination/subordination" },
  { id: "relative", label: "Relative" },
  { id: "conjonctive", label: "Conjonctive" },
  { id: "circonstancielle", label: "Circonstancielle" },
];

export const fichePhraseComplexe: Fiche = {
  slug: "phrase-complexe",
  matiere: "francais",
  numero: 5,
  partie: "Partie 1 : Grammaire de la phrase",
  title: "La phrase complexe et sa ponctuation",
  subtitle: "Compter et nommer les propositions, comprendre leurs liens et justifier la ponctuation syntaxique",
  badges: [
      {
          "label": "★★★ Tombe chaque année",
          "variant": "hot"
      },
      {
          "label": "Cycle 4 + lycée · BOEN n°1 du 22 janvier 2019",
          "variant": "info"
      }
  ],
  metaTitle: "Phrase complexe et ponctuation · Fiche de révision CRPE",
  metaDescription:
    "La phrase complexe au CRPE : juxtaposition, coordination, subordination, les familles de subordonnées et la ponctuation. Méthode et exercices corrigés.",
  maitriseNotionSlug: "phrase-complexe",
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
                  text: "Dans une phrase complexe, la ponctuation sert souvent à rendre visible la relation entre les groupes et les propositions. Au concours, il ne suffit pas d'écrire que « la virgule marque une pause » : il faut **nommer l'emploi** et le justifier par la structure de la phrase. C'est un grand classique de l'épreuve : justifier l'emploi d'une virgule revient régulièrement.",
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
                { type: "note", text: "@nav Méthode en tête ? Direction S’entraîner." },
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
              title: "La phrase complexe et sa ponctuation",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_PHRASE_COMPLEXE,
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
              title: "La phrase complexe et sa ponctuation",
              copies: COPIES_PHRASE_COMPLEXE,
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
      ],
    },
  ],
};
