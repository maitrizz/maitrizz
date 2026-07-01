// Notion 01 « Classes grammaticales » au format figé (3 maisons : Apprendre / S'entraîner / Mémo).
// Notion de référence du GABARIT_NOTION.md (anciennement le prototype classes-grammaticales-v2,
// devenu la version officielle le 28/06/2026).

import type { Fiche } from "@/components/fiche/types";
import { EXERCICES_CLASSES_GRAMMATICALES } from "./exercices-classes-grammaticales";
import { COPIES_CLASSES_GRAMMATICALES } from "./copies-classes-grammaticales";

// Savoir-faire de la notion = filtre « Ce que je travaille » (Appliquer).
// Multi-tag côté exercices. Voir GABARIT_NOTION.md §4.
const SAVOIR_FAIRE = [
  { id: "determinants", label: "Déterminants" },
  { id: "adv-adj", label: "Adverbe ou adjectif" },
  { id: "cameleons", label: "Mots-caméléons" },
  { id: "pronoms", label: "Pronoms" },
  { id: "infinitif", label: "L'infinitif" },
  { id: "invariables", label: "Les invariables" },
];

// « Corriger des erreurs » : copies de candidats (justes OU fausses) jugées une à une,
// via le bloc interactif `corrigerCopies` (banque COPIES_CLASSES_GRAMMATICALES).

export const ficheClassesGrammaticales: Fiche = {
  slug: "classes-grammaticales",
  matiere: "francais",
  numero: 1,
  partie: "Partie 1 : Grammaire de la phrase",
  title: "Classes grammaticales · Nature des mots",
  subtitle:
    "Identifier la nature de tout mot ou groupe : la question de classe grammaticale qui tombe chaque année",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 3-4 · Terminologie grammaticale", variant: "info" },
  ],
  metaTitle: "Classes grammaticales · Fiche de révision CRPE",
  metaDescription: "Les classes grammaticales au CRPE : nom, déterminant, adjectif, pronom, verbe, adverbe, et les mots-caméléons (tout, que, si). Cours et exercices corrigés.",
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
          // Cours repris À L'IDENTIQUE de la fiche v1 (classes-grammaticales.ts,
          // onglet « Cours »). Contenu non modifié ; seul l'emballage (l'onglet
          // où il vit + la cible du CTA final) est adapté à la v2.
          blocks: [
            {
              type: "callout",
              variant: "info",
              icon: "",
              title: "Avant de commencer",
              text: "Verbe, adjectif, nom... vous connaissez déjà les mots. Ce qui fait gagner des points au concours, c'est la précision : nommer la bonne classe grammaticale, puis justifier avec un vrai indice de la phrase. Une réponse courte peut être excellente si elle est exacte et prouvée.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Qu'est-ce que la nature d'un mot ?",
              blocks: [
                {
                  type: "paragraph",
                  text: "La **classe grammaticale** (ou nature) d'un mot, c'est **ce qu'il est** : « chanter » est toujours un verbe, « beau » est toujours un adjectif. C'est une information **stable**, qu'on retrouve dans le dictionnaire. Seule une poignée de formes très courantes (*tout*, *comme*, *que*, *si*…) y figurent sous **plusieurs classes** : ce ne sont pas des mots qui « changent » de nature, mais des formes identiques recouvrant plusieurs mots, et c'est le contexte qui dit lequel est employé (voir l'étape ④).\n\n⚠️ À ne pas confondre avec la **fonction**, qui désigne le **rôle du mot ou du groupe dans la phrase** : sujet, COD, complément circonstanciel, attribut… Par exemple, « le chat » reste un groupe nominal par nature, mais il peut être sujet dans « Le chat dort » ou COD dans « Je regarde le chat ». La fonction, elle, change avec la phrase : c'est l'objet de la fiche [Fonctions syntaxiques](fiche:fonctions-syntaxiques). **Cette fiche porte uniquement sur la nature.**",
                },
                {
                  type: "table",
                  title: "Une seule nature, plusieurs fonctions possibles",
                  headers: ["Phrase", "Nature de « le chat »", "Fonction dans la phrase"],
                  rows: [
                    ["« **Le chat** dort. »", "Groupe nominal (stable)", "Sujet"],
                    ["« Je regarde **le chat**. »", "Groupe nominal (stable)", "COD"],
                    ["« Je pense **au chat**. »", "Groupe nominal (stable)", "COI"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Le réflexe à avoir",
                  text: "Face à un mot souligné dans un sujet de concours, posez-vous toujours la même question : **« Qu'est-ce que c'est ? »** (quelle est sa **nature** ?). Puis justifiez par un test : variabilité, remplacement, suppression.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Les 5 classes variables : elles peuvent s'accorder",
              blocks: [
                {
                  type: "paragraph",
                  text: "Une classe est dite **variable** quand le mot peut changer de forme selon le genre, le nombre ou la personne. Cinq classes sont variables : **nom, déterminant, adjectif, pronom, verbe**.",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Nom",
                      definition: "Désigne une personne, un animal, une chose ou une idée.",
                      sousClasses: "**Sous-classes :** commun (la majorité) · propre (être unique, avec majuscule)",
                      exemples: [
                        "**Commun :** « le **chien** dort » : désigne un être de façon générale, précédé d'un déterminant",
                        "**Propre :** « **Paris** est traversé par la Seine » : désigne un être unique, avec une majuscule",
                      ],
                      piege:
                        "Un infinitif précédé d'un déterminant (« le boire et le manger ») reste un **verbe** par nature, sauf lexicalisation complète (« le pouvoir », « un rire » : vrais noms, avec pluriel et adjectif).",
                      test:
                        "Le mot varie-t-il au pluriel ou prend-il un adjectif (« des pouvoirs », « un grand pouvoir ») ? Si oui : nom. Sinon, malgré le déterminant : infinitif, nature verbale (voir Piège n°2).",
                    },
                    {
                      title: "Déterminant",
                      definition:
                        "Introduit le nom, le précède toujours. C'est la classe avec le plus de sous-classes : un exemple pour chacune ci-dessous.",
                      sousClasses:
                        "**Sous-classes :** articles (défini, indéfini, partitif) · possessif · démonstratif · indéfini · numéral cardinal · exclamatif ou interrogatif",
                      exemples: [
                        "**Article défini :** « **le** chat », « **la** maison », « **les** enfants »",
                        "**Article indéfini :** « **un** chat », « **des** histoires »",
                        "**Article partitif :** « **du** pain », « **de la** confiture »",
                        "**Possessif :** « **mon** stylo », « **leurs** affaires »",
                        "**Démonstratif :** « **ce** livre », « **cette** idée »",
                        "**Indéfini :** « **chaque** élève », « **quelques** jours »",
                        "**Numéral cardinal :** « **deux** enfants », « **trois** essais »",
                        "**Exclamatif ou interrogatif :** « **quel** talent ! », « **quelle** heure ? »",
                      ],
                      piege:
                        "[Terminologie grammaticale Éduscol 2020](https://eduscol.education.fr/document/1872/download) : « mon », « ce », « chaque »… sont des **déterminants**, et non plus des « adjectifs possessifs, démonstratifs ou indéfinis ».\n\nAttention aussi à « du ». Dans « du pain » ou « du courage », il introduit une quantité qu'on ne compte pas précisément : c'est un **article partitif**. Dans « le chien du voisin », il signifie « de + le » : ce n'est pas un article partitif, mais une **forme contractée** introduisant un complément. Le bon réflexe : remplacer mentalement par « de le » et regarder si « du » appartient à un groupe introduit par « de ».",
                      test: "Le mot est-il directement suivi d'un nom (ou d'un adjectif puis d'un nom) ? Si oui : déterminant.",
                    },
                    {
                      title: "Adjectif qualificatif",
                      definition: "Qualifie ou détermine le nom, et s'accorde avec lui en genre et en nombre.",
                      sousClasses:
                        "**Sous-classes :** adjectif qualificatif (la majorité) · adjectif numéral ordinal (deuxième, troisième… : reste adjectif, à la différence des numéraux cardinaux devenus déterminants) · adjectif verbal (participe présent employé comme adjectif, accordé)",
                      exemples: [
                        "**Adjectif qualificatif :** « un **grand** jardin » / « une **grande** maison » : accord en genre",
                        "**Adjectif numéral ordinal :** « le **deuxième** rang »",
                        "**Adjectif verbal :** « une eau **courante** », « une élève **souriante** » : accordé, à la différence du participe présent et du gérondif (« en souriant », toujours invariables)",
                      ],
                      piege: "Si le mot ne s'accorde pas, ce **n'est pas** un adjectif : c'est un adverbe.",
                      test: "Accord possible au féminin pluriel ? Si oui : adjectif.",
                    },
                    {
                      title: "Pronom",
                      definition: "Remplace ou désigne un nom ou un groupe nominal.",
                      sousClasses:
                        "**Sous-classes :** personnel · possessif · démonstratif · relatif · interrogatif · indéfini",
                      exemples: [
                        "**Personnel :** « Marie est arrivée, **elle** semblait fatiguée » : remplace « Marie »",
                        "**Possessif :** « Ce stylo est **le mien** » : remplace « mon stylo »",
                        "**Démonstratif :** « **Celui-ci** me plaît » : remplace un nom déjà désigné",
                        "**Relatif :** « la maison **que** j'ai visitée » : remplace « la maison »",
                        "**Interrogatif :** « **Lequel** préfères-tu ? »",
                        "**Indéfini :** « **Personne** n'a répondu »",
                      ],
                      piege:
                        "Ne pas confondre le **pronom relatif** « que » (« le livre **que** je lis ») et la **conjonction de subordination** « que » (« je crois **que** tu lis ») : voir l'étape ④ (mots-caméléons).",
                      test: "Le mot est-il remplaçable par un groupe nominal ? Si oui : pronom.",
                    },
                    {
                      title: "Verbe",
                      definition: "Exprime une action, un état ou un devenir : il est le noyau du groupe verbal.",
                      sousClasses:
                        "**Sous-classes :** transitif direct · transitif indirect · intransitif · attributif (être, sembler, devenir…) · pronominal · impersonnel",
                      exemples: [
                        "**Transitif direct :** « Elle **mange** une pomme » : COD « une pomme »",
                        "**Transitif indirect :** « Il **pense** à ses vacances » : COI « à ses vacances »",
                        "**Intransitif :** « Le bébé **dort** » : aucun complément",
                        "**Attributif :** « Il **semble** épuisé » : attribut « épuisé »",
                        "**Pronominal :** « Elle **se lave** avant de partir »",
                        "**Impersonnel :** « **Il pleut** depuis ce matin »",
                      ],
                      piege:
                        "Infinitif, participe et gérondif restent des **verbes** par leur nature, même employés comme un nom (par exemple comme sujet).",
                      test: "Pour un verbe d'état, le remplacer par « être » : si le sens reste proche, il est attributif.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Cas particulier : l'infinitif",
                  text: "« **Écrire** est difficile » : « écrire » reste un **verbe à l'infinitif**, même employé comme un nom (ici, comme sujet de « est difficile »). Plus largement, infinitif, participe et gérondif restent des **verbes** par leur nature, quel que soit leur emploi.\nNe jamais écrire « **nom verbal** » : cette catégorie n'existe pas en grammaire.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Les classes invariables : elles ne changent jamais de forme",
              blocks: [
                {
                  type: "paragraph",
                  text: "Une classe est dite **invariable** quand le mot garde toujours la même forme, quel que soit le contexte. Dans la [terminologie grammaticale Éduscol 2020](https://eduscol.education.fr/document/1872/download), les classes invariables à connaître ici sont : **adverbe, préposition, conjonction, interjection**.\n\n💡 *Repère de mémorisation :* on retient souvent **5 classes variables + 5 entrées invariables** pour apprendre la liste. Ce repère compte l'**onomatopée** à part. Mais dans la dernière terminologie grammaticale officielle ([Éduscol, 2020](https://eduscol.education.fr/document/1872/download)), l'onomatopée est rattachée à l'**interjection** : officiellement, il n'y a donc plus **10 classes grammaticales**, mais **9**. L'onomatopée se reconnaît dans une phrase, mais elle ne forme pas une classe autonome.",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Adverbe",
                      definition:
                        "Modifie un verbe, un adjectif, un autre adverbe ou toute une phrase. Toujours invariable.",
                      sousClasses:
                        "**Sous-classes :** manière · temps · lieu · quantité ou intensité · négation · doute ou modalisation · affirmation",
                      exemples: [
                        "**Manière :** « Elle parle **doucement** » : modifie le verbe « parle »",
                        "**Temps :** « Il arrivera **demain** »",
                        "**Lieu :** « Le chat dort **ici** »",
                        "**Quantité ou intensité :** « Il est **très** fatigué »",
                        "**Négation :** « Elle **ne** vient **pas** »",
                        "**Doute ou modalisation :** « Il viendra **peut-être** »",
                        "**Affirmation :** « Viendras-tu ? **Oui**, sans hésiter » : répond à la question",
                      ],
                      piege:
                        "« rapidement » n'est **pas** un adjectif (contrairement à « rapide ») : un adverbe en -ment ne s'accorde jamais.",
                      test: "Accord au féminin pluriel impossible ? Alors c'est un adverbe, et non un adjectif.",
                    },
                    {
                      title: "Préposition",
                      definition:
                        "Introduit un groupe en indiquant une relation. Toujours suivie d'un **groupe nominal (GN) ou d'un infinitif**, jamais seule.",
                      sousClasses:
                        "**Sous-classes :** simples (à, de, en, dans, par, pour, sur, sous, avec, sans, entre, vers) · locutions (à cause de, grâce à, afin de, au lieu de…)",
                      exemples: [
                        "**Simple, suivie d'un GN :** « Elle part **avant** la nuit » : suivie du GN « la nuit »",
                        "**Simple, suivie d'un infinitif :** « Il travaille **pour** réussir » : suivie de l'infinitif « réussir »",
                        "**Locution prépositionnelle :** « Il réussit **grâce à** son travail » : locution, suivie du GN « son travail »",
                      ],
                      piege:
                        "« **avant** la nuit » (préposition, suivie d'un GN) est différent de « il était déjà parti **avant** » (adverbe, rien après).",
                      test: "Le mot est-il suivi d'un GN ou d'un infinitif ? Si oui : préposition. Sinon : adverbe.",
                    },
                    {
                      title: "Conjonction",
                      definition:
                        "Relie deux éléments de même nature (coordination) ou introduit une proposition subordonnée (subordination). Pour les distinguer : l'élément de coordination est **déplaçable ou supprimable** sans casser la phrase, celui de subordination ne l'est pas.",
                      sousClasses:
                        "**Sous-classes :** coordination (mais, ou, et, donc, or, ni, car) · subordination (que, si, quand, comme, lorsque, bien que…)",
                      exemples: [
                        "**Coordination :** « Il pleut, **mais** je sors quand même »",
                        "**Subordination :** « Je pense **que** tu as raison »",
                      ],
                      astuce:
                        "**Les 7 conjonctions de coordination :** Mais · Ou · Et · Donc · Or · Ni · Car, soit « Mais où est donc Ornicar ? ». Toutes les autres relèvent de la subordination.",
                      piege:
                        "« comme », « que » et « si » sont des mots-caméléons : voir l'étape ④ pour analyser leur emploi exact.",
                      test:
                        "L'élément est-il déplaçable ou supprimable sans casser la phrase ? Si oui : coordination. Sinon : subordination.",
                    },
                    {
                      title: "Interjection",
                      definition: "Exprime une réaction spontanée, toujours isolée par la ponctuation.",
                      sousClasses:
                        "**Sous-classes :** émotion (Ah !, Oh !, Hélas !, Zut !) · ordre (Chut !, Halte !, Debout !) · contact (Allô !, Hep !, Ohé !)",
                      exemples: [
                        "**Émotion :** « **Hélas** ! il est trop tard » : exprime la déploration",
                        "**Ordre :** « **Chut** ! on vous écoute »",
                        "**Contact :** « **Allô** ! qui est à l'appareil ? »",
                      ],
                      piege:
                        "« **Debout** ! » (interjection, ordre isolé) est différent de « il est resté **debout** », un **adverbe** (de position).",
                      test:
                        "Le mot est-il isolé par une exclamation ou une virgule, sans lien syntaxique avec le reste de la phrase ? Si oui : interjection.",
                    },
                    {
                      title: "Onomatopée (cas de l'interjection)",
                      definition: "Imite un son. Dans la [terminologie grammaticale Éduscol 2020](https://eduscol.education.fr/document/1872/download), elle est rattachée à l'interjection. Rare à l'épreuve, mais facile à reconnaître.",
                      sousClasses: "**Sous-classes :** plouf, crac, pschitt, boum, coin-coin, tic-tac",
                      exemples: ["« **Boum** ! la porte claqua » : onomatopée imitant un bruit"],
                      test: "Même comportement que l'interjection : isolée, sans lien syntaxique avec le reste de la phrase.",
                    },
                  ],
                },
                {
                  type: "table",
                  title: "Les 9 classes en un coup d'œil (à mémoriser)",
                  headers: ["Classe", "Var. ?", "Comment la reconnaître", "Exemple"],
                  rows: [
                    ["**Nom**", "Variable", "Désigne un être, une chose, une idée ; précédé d'un déterminant", "le **chien** dort"],
                    ["**Déterminant**", "Variable", "Précède et introduit le nom", "**le** chien dort"],
                    ["**Adjectif**", "Variable", "Qualifie le nom et s'accorde avec lui", "un **gros** chien"],
                    ["**Pronom**", "Variable", "Remplace un nom ou un groupe nominal", "**il** dort"],
                    ["**Verbe**", "Variable", "Exprime une action ou un état ; se conjugue", "le chien **dort**"],
                    ["**Adverbe**", "Invariable", "Modifie un verbe, un adjectif, un adverbe ou la phrase", "il dort **paisiblement**"],
                    ["**Préposition**", "Invariable", "Introduit un GN ou un infinitif (jamais seule)", "il joue **avec** le chien"],
                    ["**Conjonction**", "Invariable", "Relie deux éléments ou introduit une subordonnée", "il dort **et** ronfle"],
                    ["**Interjection**", "Invariable", "Réaction spontanée, isolée par la ponctuation (l'onomatopée s'y rattache)", "**Oh** ! le chien !"],
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Les mots-caméléons : tout, comme, que, si",
              blocks: [
                {
                  type: "paragraph",
                  text: "Quelques formes très fréquentes recouvrent **plusieurs natures possibles** : le dictionnaire les range sous plusieurs classes. Le mot ne « change » pas de nature tout seul : c'est **l'emploi dans la phrase** qui révèle laquelle de ces natures est réalisée. La méthode est toujours la même : **regarder ce qui précède et ce qui suit le mot** avant de conclure.",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Algorithme express : identifier un mot-caméléon",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "1. Il est suivi d'un nom ou d'un groupe nominal ? → penser **déterminant** ou **préposition** selon le mot.",
                        "2. Il introduit une proposition avec un verbe conjugué ? → penser **conjonction de subordination**.",
                        "3. Il remplace un nom ou un groupe nominal ? → penser **pronom**.",
                        "4. Il modifie un adjectif, un verbe ou toute la phrase ? → penser **adverbe**.",
                      ],
                      note: "On ne choisit pas la nature du mot seul : on observe sa construction dans la phrase.",
                    },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "4 mots, plusieurs natures possibles",
                  blocks: [
                    {
                      type: "cardGrid",
                      columns: 2,
                      variant: "info",
                      cards: [
                        {
                          title: "tout",
                          lines: [
                            "Suivi d'un nom → **déterminant** (tout le monde)",
                            "Remplace un nom → **pronom** (Tout est perdu)",
                            "Modifie un adjectif → **adverbe** (tout rouge)",
                          ],
                        },
                        {
                          title: "comme",
                          lines: [
                            "Suivi d'un GN → **préposition** (comme sa mère)",
                            "Introduit une subordonnée → **conjonction** (Comme il était fatigué…)",
                            "En tête exclamative → **adverbe** (Comme c'est beau !)",
                          ],
                        },
                        {
                          title: "que",
                          lines: [
                            "Après un verbe → **conjonction de subordination** complétive (Je sais que…)",
                            "Remplace un GN → **pronom relatif** (l'homme que j'ai vu)",
                            "En tête exclamative → **adverbe** (Que c'est beau !)",
                            "Dans une comparaison (plus/aussi/moins... que) → **conjonction de subordination** comparative (Il est plus grand que son frère)",
                          ],
                        },
                        {
                          title: "si",
                          lines: [
                            "Introduit une condition → **conjonction de subordination** (Si tu viens…)",
                            "Modifie un adjectif → **adverbe** (d'intensité) (si beau)",
                            "Répond à une négation → **adverbe** (d'affirmation) (Mais si !)",
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "3 autres formes, plusieurs natures possibles : leur, même, des",
                  blocks: [
                    {
                      type: "cardGrid",
                      columns: 2,
                      variant: "info",
                      cards: [
                        {
                          title: "leur",
                          lines: [
                            "Devant un nom → **déterminant possessif** (leurs livres)",
                            "Devant un verbe → **pronom personnel** (je leur parle)",
                          ],
                        },
                        {
                          title: "même",
                          lines: [
                            "À côté d'un nom → **adjectif** (le même jour)",
                            "À côté d'un verbe ou d'un mot → **adverbe** (même les enfants riaient)",
                            "Après un déterminant, remplace un nom → **pronom** (j'ai choisi le même)",
                          ],
                        },
                        {
                          title: "des",
                          lines: [
                            "Devant un nom → **article indéfini** (des histoires)",
                            "Mis pour « de les » → **forme contractée** (la fin des vacances)",
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Pour chacun de ces mots, la nature ne se devine pas isolément : c'est **l'environnement immédiat** (le mot juste avant, le mot juste après) qui tranche.",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Zoom sur « que » : le mot-caméléon à surveiller",
                  blocks: [
                    {
                      type: "cardGrid",
                      columns: 2,
                      variant: "warning",
                      cards: [
                        {
                          title: "Après un verbe",
                          lines: [
                            "« Je pense **que** tu as raison. »",
                            "→ **conjonction de subordination**",
                            "Elle introduit une proposition complétive.",
                          ],
                        },
                        {
                          title: "Après un nom",
                          lines: [
                            "« Le livre **que** je lis. »",
                            "→ **pronom relatif**",
                            "Il reprend le nom placé avant lui.",
                          ],
                        },
                        {
                          title: "En exclamation",
                          lines: [
                            "« **Que** c'est beau ! »",
                            "→ **adverbe** (exclamatif)",
                            "Il marque l'intensité.",
                          ],
                        },
                        {
                          title: "Dans une comparaison",
                          lines: [
                            "« Il est plus grand **que** moi. »",
                            "→ **conjonction de subordination**",
                            "Elle introduit le second terme de la comparaison.",
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · Adverbe confondu avec adjectif",
              badge: "Très fréquent",
              faux: "« rapidement » = adjectif qualificatif · « fort » dans « Il parle fort » = adjectif",
              vrai: "Si un mot est invariable, c'est un adverbe, jamais un adjectif.",
              methode: "Test : tenter l'accord au féminin pluriel. « rapidement/rapidements » → impossible → adverbe. « grand/grande/grands/grandes » → possible → adjectif.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°2 · L'infinitif n'est pas un nom",
              badge: "Très fréquent",
              faux: "« Écrire » dans « Écrire est difficile » = nom commun",
              vrai: "Un infinitif reste un VERBE même quand il est employé comme sujet.",
              methode: "Sa nature reste verbale (verbe à l'infinitif), même employé comme un nom (ici, comme sujet). Ne jamais l'appeler « nom verbal » : cette catégorie n'existe pas.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 · Terminologie : déterminant, pas adjectif",
              badge: "Formulation attendue",
              faux: "« mon », « ce », « chaque » = adjectifs possessif / démonstratif / indéfini",
              vrai: "Ce sont tous des DÉTERMINANTS. La classe « adjectif » ne couvre plus les mots qui introduisent un nom.",
              methode: "Règle simple : le mot introduit un nom sans le qualifier → déterminant. Il qualifie le nom (exprime une qualité) → adjectif qualificatif.",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°4 · Préposition ou adverbe ? Le piège de « avant », « après », « contre »",
              badge: "Même mot, deux natures",
              faux: "« Il était déjà parti avant. » → préposition",
              vrai: "Suivi d'un GN ou d'un infinitif → **préposition** (« avant la nuit »). Seul, sans rien après → **adverbe** (« il était parti avant »).",
              methode: "Test : ce mot peut-il se retrouver seul en fin de phrase ? Si oui → adverbe. S'il lui faut obligatoirement un groupe après lui → préposition. S'applique à « avant », « après », « contre », « dessous », « dessus »…",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°5 · « leur » : déterminant ou pronom ?",
              badge: "Très fréquent",
              faux: "« Je **leur** ai rendu **leur** copie. » → deux fois la même nature",
              vrai: "« leur » devant un verbe (« je **leur** parle ») = pronom personnel, invariable. « leur(s) » devant un nom (« **leurs** copies ») = déterminant possessif, qui s'accorde en nombre.",
              methode: "Test décisif : essayez d'ajouter un -s. « leurs copies » fonctionne (déterminant) ; « je leurs parle » est impossible (pronom, jamais de -s).",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 1 (maternelle) :** aucune terminologie grammaticale encore. Les élèves manipulent la langue à l'oral, enrichissent leur vocabulaire et perçoivent peu à peu que les mots servent à **nommer** (un objet, une personne) ou à dire **ce qu'on fait** (une action). C'est le terreau implicite sur lequel le classement des mots s'appuiera ensuite.\n\n**Cycle 2 (CP-CE2) :** les élèves découvrent progressivement le **nom**, le **verbe**, l'**adjectif** et le **déterminant**, souvent via des activités de tri (« la chasse aux verbes », « je classe les mots »).\n\n**Cycle 3 (CM1-6e) :** introduction du **pronom**, de l'**adverbe**, puis des autres classes invariables. Le tableau de classement des natures de mots devient un outil régulier de la leçon de grammaire. Les attendus par cycle figurent dans les [programmes de français en vigueur](https://eduscol.education.fr/137/cycle-2-et-cycle-3).\n\n**Ce que vous devez savoir dire :** « La classe grammaticale est une notion qu'on construit progressivement : implicitement en maternelle (nommer / agir), puis classe par classe du CP au cycle 3, en partant de manipulations concrètes (tri, classement) avant la terminologie. Le repère qui structure tout l'enseignement : la nature d'un mot est stable. »",
            },
            {
              type: "ctaBox",
              text: "Cours bien en tête ? Passez à la méthode →",
              buttonLabel: "Voir la méthode",
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
              text: "Identifier la nature d'un mot, traiter un mot-caméléon : ce sont les **deux situations** sur la nature des mots qui reviennent systématiquement au concours. Chacune se termine par un checkpoint pour avancer en confiance.",
            },
            {
              type: "rappelExpress",
              title: "Rappel express : le réflexe avant de commencer",
              blocks: [
                {
                  type: "paragraph",
                  text: "**Le test de variabilité**\nUn mot est *variable* s'il peut changer de forme selon le genre ou le nombre (accord). S'il garde toujours la même forme, il est *invariable*.",
                },
                {
                  type: "formulaBlock",
                  lines: [
                    "grand → grande, grands, grandes (accord possible → variable → adjectif)",
                    "vite → vite, vite, vite (aucun accord possible → invariable → adverbe)",
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ Le réflexe clé : tester d'abord la variabilité. Variable → nom, déterminant, adjectif, pronom ou verbe. Invariable → adverbe, préposition, conjonction ou interjection.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Identifier la nature d'un mot isolé",
              intro:
                "*Question typique : « Donnez la classe grammaticale du mot souligné : Le vieux chien dormait <u>paisiblement</u> près du feu. »*",
              steps: [
                {
                  number: "1",
                  text: "**Le mot est-il variable ?** Tenter l'accord au féminin et au pluriel.",
                  example: {
                    lines: [
                      "*paisiblement* → paisiblement / paisiblement / paisiblement → aucun accord possible → **invariable**.",
                      "On cherchera donc parmi les 4 classes invariables : adverbe, préposition, conjonction, interjection.",
                    ],
                  },
                },
                {
                  number: "2",
                  text: "**Si le mot avait été variable :** précède-t-il directement un nom (→ déterminant) ? le remplace-t-il (→ pronom) ? désigne-t-il une personne, une chose ou une idée (→ nom) ? exprime-t-il une action ou un état (→ verbe) ? qualifie-t-il un nom en s'accordant avec lui (→ adjectif) ? Ici, ce n'est pas la piste à suivre : *paisiblement* est invariable.",
                },
                {
                  number: "3",
                  text: "**Notre mot étant invariable :** introduit-il un GN ou un infinitif (→ préposition) ? relie-t-il deux éléments ou introduit-il une subordonnée (→ conjonction) ? est-il isolé par la ponctuation, sans lien syntaxique (→ interjection) ? ou modifie-t-il un autre mot (→ adverbe) ?",
                  example: {
                    lines: [
                      "*paisiblement* n'introduit aucun groupe, ne relie rien, n'est pas isolé par une virgule.",
                      "Il **modifie le verbe** *dormait* (il dit comment le chien dormait) → **adverbe**.",
                    ],
                  },
                  warn: "⚠️ Le geste décisif : repérer le mot sur lequel porte *paisiblement*. Un adverbe se rattache toujours à un autre mot, ici le verbe.",
                },
                {
                  number: "💡",
                  text: "**Vérifier avec le test rapide de la classe envisagée :** un adverbe est invariable et se supprime sans rendre la phrase incorrecte (*Le vieux chien dormait près du feu.* reste correct). Les deux indices concordent : c'est bien un adverbe.",
                  warn: "⚠️ Une nature se justifie toujours par un test précis : variabilité, remplacement, suppression.",
                },
                {
                  number: "✅",
                  text: "**Réponse attendue (formulation modèle) :** « *paisiblement* est un **adverbe** (de manière) : il est invariable (l'accord est impossible) et il modifie le verbe *dormait*, en précisant la manière dont se déroule l'action. »",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Donnez la nature du mot souligné : « Elle parle <u>doucement</u>. »",
              correction: [
                { type: "line", text: "**Explication :** « doucement » est invariable (aucun accord possible) et modifie le verbe « parle » : il en précise la manière." },
                { type: "line", text: "**Réponse attendue (formulation jury) :** « *doucement* est un **adverbe** (de manière) : invariable, il modifie le verbe *parle*. »" },
                {
                  type: "note",
                  text: "Trouvé du premier coup ? Vous maîtrisez cette méthode, passez à la suite. Sinon, relisez l'étape 1 ci-dessus avant de continuer.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Traiter un mot-caméléon (tout, comme, que, si)",
              intro:
                "*Question typique : « Quelle est la nature du mot souligné : <u>Tout</u> le monde regardait la scène. »*",
              steps: [
                {
                  number: "1",
                  text: "**Repérer le mot-caméléon et regarder ce qui le suit immédiatement.**",
                  example: {
                    lines: ["« *Tout* le monde regardait » → *Tout* est suivi du nom *le monde*."],
                  },
                },
                {
                  number: "2",
                  text: "**Choisir la bonne piste :** le mot introduit-il un nom ou un groupe nominal ? une proposition avec verbe conjugué ? remplace-t-il un nom ? modifie-t-il un adjectif, un verbe ou la phrase ?",
                  example: {
                    lines: ["*Tout* est directement suivi du nom *le monde* → il **introduit le nom** → **déterminant indéfini**."],
                  },
                  warn: "⚠️ Le piège à éviter : confondre ce *Tout* déterminant avec le *Tout* pronom de « *Tout* est perdu » (là, *Tout* ne précède aucun nom, il en remplace un).",
                },
                {
                  number: "💡",
                  text: "**Vérifier avec le test de variabilité si besoin :** « tout » déterminant ou pronom est variable (tout / toute / tous / toutes) ; « tout » adverbe est invariable (sauf devant un adjectif féminin commençant par une consonne : *toute petite*).",
                },
                {
                  number: "✅",
                  text: "**Réponse attendue (formulation modèle) :** « Dans cette phrase, *Tout* est un **déterminant indéfini** : il introduit directement le nom *monde* et s'accorde avec lui (*tout* le monde / *toutes* les classes). »",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Quelle est la nature de « Comme » dans : « Comme c'est beau ! » ?",
              correction: [
                { type: "line", text: "**Explication :** « Comme » est en tête de phrase exclamative ; il n'introduit ni GN ni subordonnée, il marque l'intensité." },
                { type: "line", text: "**Réponse attendue (formulation jury) :** « Ici, *Comme* est un **adverbe** (exclamatif d'intensité) : placé en tête de l'exclamation, il porte sur tout l'énoncé. »" },
                { type: "note", text: "@nav Méthode en tête ? Direction S'entraîner pour l'automatiser." },
              ],
            },
            {
              type: "ctaBox",
              text: "Méthode bien en tête ? Entraînez-vous →",
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
              title: "Classes grammaticales",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_CLASSES_GRAMMATICALES,
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
              title: "Classes grammaticales",
              copies: COPIES_CLASSES_GRAMMATICALES,
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
              center: { title: "Classes grammaticales", subtitle: "Nature des mots" },
              branches: [
                {
                  title: "La nature",
                  lines: ["= ce qu'est le mot", "stable, jamais changée", "1re question : variable ou invariable ?"],
                  variant: "blue",
                },
                {
                  title: "5 variables",
                  lines: ["nom · déterminant", "adjectif · pronom", "verbe"],
                  variant: "blue",
                },
                {
                  title: "4 invariables",
                  lines: ["adverbe · préposition", "conjonction · interjection", "(+ onomatopée)"],
                  variant: "green",
                },
                {
                  title: "Mots-caméléons",
                  lines: ["tout · comme · que · si", "leur · même", "→ regarder le contexte"],
                  variant: "green",
                },
                {
                  title: "Pièges",
                  lines: ["adverbe ≠ adjectif (variabilité)", "infinitif reste un verbe", "déterminant ≠ adjectif", "« leur » + verbe = pronom"],
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
