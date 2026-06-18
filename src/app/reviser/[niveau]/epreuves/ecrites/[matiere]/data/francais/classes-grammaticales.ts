import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je comprends que la nature d'un mot est stable : elle ne change pas selon la phrase (à la différence de la fonction, traitée à part)" },
  { id: "e2", label: "Je connais les 9 classes grammaticales de référence et le repère mnémotechnique des 10 entrées avec l'onomatopée" },
  { id: "e3", label: "Je distingue un adverbe d'un adjectif grâce au test de variabilité (accord au féminin pluriel)" },
  { id: "e4", label: "Je sais analyser les mots-caméléons (tout, comme, que, si) selon leur contexte d'emploi" },
  { id: "e5", label: "J'utilise la terminologie grammaticale de référence : déterminant (et non « adjectif possessif / démonstratif / indéfini »)" },
  { id: "e6", label: "Je sais qu'un infinitif reste un verbe, même quand il est employé comme un nom (par exemple comme sujet)" },
  { id: "e7", label: "Je sais identifier et corriger une erreur de nature dans une copie de candidat" },
];

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
  metaTitle: "Classes grammaticales (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur les classes grammaticales : les natures de mots (nom, déterminant, adjectif, pronom, verbe, adverbe, préposition, conjonction, interjection), le cas de l'onomatopée, les mots-caméléons (tout, comme, que, si) et les pièges fréquents. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
              title: "Ce qu'il faut maîtriser",
              items: [
                {
                  number: "①",
                  title: "Comprendre ce qu'on vous demande",
                  text: "Identifier la nature d'un mot, ce n'est pas donner sa fonction : on dit ce qu'il est, pas le rôle qu'il joue dans la phrase.",
                },
                {
                  number: "②",
                  title: "Les 5 classes grammaticales variables",
                  text: "Nom, déterminant, adjectif, pronom, verbe : elles peuvent varier selon le genre, le nombre ou la personne.",
                },
                {
                  number: "③",
                  title: "Les classes grammaticales invariables",
                  text: "Adverbe, préposition, conjonction, interjection : les classes retenues par la [terminologie grammaticale Éduscol 2020](https://eduscol.education.fr/document/1872/download). Pour mémoriser, on ajoute souvent l'onomatopée, rattachée à l'interjection.",
                },
                {
                  number: "④",
                  title: "Justifier les cas qui piègent",
                  text: "tout, comme, que, si, avant, fort... : le jury attend une réponse appuyée sur le contexte, pas une nature apprise isolément.",
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
              text: "Verbe, adjectif, nom... vous connaissez déjà les mots. Ce qui fait gagner des points au concours, c'est la précision : nommer la bonne classe grammaticale, employer la [terminologie grammaticale Éduscol 2020](https://eduscol.education.fr/document/1872/download), puis justifier avec un vrai indice de la phrase. Une réponse courte peut être excellente si elle est exacte et prouvée.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Qu'est-ce que la nature d'un mot ?",
              blocks: [
                {
                  type: "paragraph",
                  text: "La **classe grammaticale** (ou nature) d'un mot, c'est **ce qu'il est**, quel que soit le **contexte** : « chanter » est toujours un verbe, « beau » est toujours un adjectif. C'est une information **stable**, qu'on retrouve dans le dictionnaire.\n\n⚠️ À ne pas confondre avec la **fonction**, qui désigne le **rôle du mot ou du groupe dans la phrase** : sujet, COD, complément circonstanciel, attribut… Par exemple, « le chat » reste un groupe nominal par nature, mais il peut être sujet dans « Le chat dort » ou COD dans « Je regarde le chat ». **Cette fiche porte uniquement sur la nature.**",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "« beau » : une nature stable, quel que soit l'emploi",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "Le **beau** chien dort. → « beau » = adjectif qualificatif",
                        "Ce chien est **beau**. → « beau » = adjectif qualificatif (la même nature !)",
                      ],
                      note: "Le mot change de place et d'emploi, mais sa **nature ne change pas**. C'est elle qu'on identifie ici.",
                    },
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
                        "« **Debout** ! » (interjection, ordre isolé) est différent de « il est resté **debout** » (adverbe de position).",
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
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Les mots-caméléons : tout, comme, que, si",
              blocks: [
                {
                  type: "paragraph",
                  text: "Certains mots très fréquents changent de classe grammaticale selon leur emploi. La méthode est toujours la même : **regarder ce qui précède et ce qui suit le mot** avant de conclure.",
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
                            "Modifie un adjectif → **adverbe d'intensité** (si beau)",
                            "Répond à une négation → **adverbe d'affirmation** (Mais si !)",
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
                            "→ **adverbe exclamatif**",
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
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 2 (CP-CE2) :** les élèves découvrent progressivement le **nom**, le **verbe**, l'**adjectif** et le **déterminant**, souvent via des activités de tri (« la chasse aux verbes », « je classe les mots »).\n\n**Cycle 3 :** introduction du **pronom**, de l'**adverbe**, puis des autres classes invariables. Le tableau de classement des natures de mots devient un outil régulier de la leçon de grammaire.\n\n**Ce que vous devez savoir dire :** « La classe grammaticale est une notion qu'on construit progressivement, classe par classe, du CP au cycle 3, en partant de manipulations concrètes (tri, classement) avant la terminologie. Le repère qui structure tout l'enseignement : la nature d'un mot est stable, on la construit classe par classe. »",
            },
            {
              type: "ctaBox",
              text: "Cours bien en tête ? Passez à la méthode →",
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
                  text: "⚠️ Le réflexe clé : tester d'abord la variabilité. Variable → nom, déterminant, adjectif, pronom ou verbe. Invariable → adverbe, préposition, conjonction ou interjection. Pour mémoriser, on peut ajouter l'onomatopée dans la famille des invariables, mais elle se traite comme un cas de l'interjection.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Identifier la nature d'un mot isolé",
              intro:
                "**Question typique :** « Donnez la classe grammaticale du mot souligné. »\nOn avance par éliminations successives : variable ou invariable ? puis, à l'intérieur de cette famille, quel rôle joue le mot ?",
              steps: [
                {
                  number: "1",
                  text: "**Le mot est-il variable ?** Tenter l'accord (féminin, pluriel).",
                  example: {
                    lines: [
                      "« doucement » → doucement/doucement/doucement → aucun accord → invariable",
                      "« grand » → grand/grande/grands/grandes → accord possible → variable",
                    ],
                  },
                },
                {
                  number: "2",
                  text: "**Si variable :** précède-t-il directement un nom (→ déterminant) ? le remplace-t-il (→ pronom) ? désigne-t-il une personne/chose/idée (→ nom) ? exprime-t-il une action/état (→ verbe) ? qualifie-t-il un nom en s'accordant avec lui (→ adjectif) ?",
                },
                {
                  number: "3",
                  text: "**Si invariable :** introduit-il un GN ou un infinitif (→ préposition) ? relie-t-il deux éléments ou introduit-il une subordonnée (→ conjonction) ? modifie-t-il un autre mot ou la phrase (→ adverbe) ? est-il isolé par la ponctuation, sans lien syntaxique (→ interjection) ?",
                },
                {
                  number: "💡",
                  text: "**Vérifier avec le test rapide de la classe envisagée** (carte 💡 Test du Cours) avant de valider votre réponse.",
                  warn: "⚠️ Une nature se justifie par un test précis : variabilité, remplacement, suppression…",
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
                { type: "line", text: "« doucement » → invariable (aucun accord possible) → **adverbe de manière**, modifie le verbe « parle »." },
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
                "**Question typique :** « Quelle est la nature de « tout » dans : Tout le monde regardait ? »\nMême démarche pour les 4 mots-caméléons : on ne part jamais du mot seul. On observe sa construction, puis on suit l'algorithme express vu dans le Cours.",
              steps: [
                {
                  number: "1",
                  text: "**Repérer le mot-caméléon et regarder ce qui le suit immédiatement.**",
                  example: {
                    lines: ["« Tout le monde regardait » → « Tout » est suivi du nom « le monde »"],
                  },
                },
                {
                  number: "2",
                  text: "**Choisir la bonne piste :** le mot introduit-il un nom ou un groupe nominal ? une proposition avec verbe conjugué ? remplace-t-il un nom ? modifie-t-il un adjectif, un verbe ou la phrase ?",
                  example: {
                    lines: ["« Tout » + « le monde » (nom) → **déterminant indéfini**"],
                  },
                },
                {
                  number: "💡",
                  text: "**Vérifier avec le test de variabilité si besoin** : « tout » déterminant ou pronom est variable (tout/toute/tous/toutes) ; « tout » adverbe est invariable (sauf devant adjectif féminin commençant par une consonne : toute petite).",
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
                { type: "line", text: "« Comme » est en tête de phrase exclamative et n'introduit pas de GN ni de subordonnée → **adverbe exclamatif d'intensité**." },
                { type: "note", text: "Méthode bien en tête ? Direction le Quiz éclair." },
              ],
            },
            {
              type: "ctaBox",
              text: "Méthode bien en tête ? Testez-vous →",
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
              text: "9 questions rapides pour vérifier que le Cours et la Méthode sont bien ancrés. Chaque réponse alimente votre suivi de maîtrise : retrouvez le détail objectif par objectif dans l'onglet **Auto-évaluation**, avec la date de votre prochaine révision.",
            },
            {
              type: "quizBlock",
              questions: [
                {
                  objectifId: "e5",
                  question: "Quelle est la nature de « Chaque » dans : « Chaque élève a rendu sa copie. » ?",
                  options: ["Adjectif indéfini", "Déterminant indéfini", "Pronom indéfini", "Adverbe"],
                  correctIndex: 1,
                  explanation:
                    "« Chaque » introduit le nom « élève » sans le qualifier → déterminant. [Terminologie grammaticale Éduscol 2020](https://eduscol.education.fr/document/1872/download) : on ne dit plus « adjectif indéfini ».",
                },
                {
                  objectifId: "e3",
                  question: "« rapidement » est-il un adjectif ou un adverbe ? Pourquoi ?",
                  options: [
                    "Adjectif, car dérivé de « rapide »",
                    "Adverbe, car invariable",
                    "Adjectif, car il qualifie un verbe",
                    "Adverbe, car il se termine par -ment uniquement",
                  ],
                  correctIndex: 1,
                  explanation:
                    "« rapidement » ne s'accorde jamais (rapidement/rapidements est impossible) → c'est un adverbe de manière, qui modifie un verbe.",
                },
                {
                  objectifId: "e1",
                  question: "Dans « La maison dont il parle », quelle est la nature de « dont » ?",
                  options: ["Pronom relatif", "Conjonction de subordination", "Adverbe", "Déterminant"],
                  correctIndex: 0,
                  explanation: "« dont » est toujours un pronom relatif : c'est sa nature, stable quel que soit le contexte.",
                },
                {
                  objectifId: "e4",
                  question: "Dans « Tout est perdu. », quelle est la nature de « Tout » ?",
                  options: ["Déterminant indéfini", "Pronom indéfini", "Adverbe d'intensité", "Nom commun"],
                  correctIndex: 1,
                  explanation: "« Tout » remplace un nom et est sujet du verbe « est » → pronom indéfini.",
                },
                {
                  objectifId: "e4",
                  question: "Dans « Comme c'est étrange ! », quelle est la nature de « Comme » ?",
                  options: ["Préposition", "Conjonction de subordination", "Adverbe exclamatif d'intensité", "Pronom interrogatif"],
                  correctIndex: 2,
                  explanation: "« Comme » est en tête de phrase exclamative, sans GN ni subordonnée derrière → adverbe exclamatif d'intensité.",
                },
                {
                  objectifId: "e6",
                  question: "Dans « Chanter est un plaisir. », quelle est la nature de « Chanter » ?",
                  options: ["Nom commun", "Verbe à l'infinitif", "Adjectif verbal", "Gérondif"],
                  correctIndex: 1,
                  explanation:
                    "« Chanter » est un verbe à l'infinitif, même employé comme sujet. La nature reste verbale.",
                },
                {
                  objectifId: "e2",
                  question: "Lesquelles de ces conjonctions sont des conjonctions de coordination ?",
                  options: [
                    "mais, ou, et, donc, or, ni, car",
                    "que, si, quand, comme, lorsque",
                    "parce que, afin que, bien que",
                    "quoique, pendant que, dès que",
                  ],
                  correctIndex: 0,
                  explanation: "Mnémo « Mais où est donc Ornicar ? » : Mais · Ou · Et · Donc · Or · Ni · Car. Tout le reste relève de la subordination.",
                },
                {
                  objectifId: "e3",
                  question: "« une femme souriante » vs « une femme souriant à son fils » : que peut-on dire de « souriant(e) » ?",
                  options: [
                    "Dans les deux cas, c'est un adjectif verbal",
                    "« souriante » = adjectif verbal (accordé) ; « souriant » = participe présent (invariable)",
                    "Dans les deux cas, c'est un participe présent invariable",
                    "« souriante » = nom, « souriant » = adjectif",
                  ],
                  correctIndex: 1,
                  explanation:
                    "L'adjectif verbal s'accorde (souriante). Le participe présent reste invariable (souriant à son fils).",
                },
                {
                  objectifId: "e7",
                  question: "Un candidat répond : « Écrire : nom commun », pour « Écrire est difficile. » Que faut-il corriger ?",
                  options: [
                    "Rien, c'est correct",
                    "L'orthographe du mot",
                    "La nature : « Écrire » est un verbe à l'infinitif, pas un nom",
                    "Le groupe du verbe",
                  ],
                  correctIndex: 2,
                  explanation:
                    "« Écrire » est un verbe à l'infinitif, jamais un nom, même employé comme sujet de « est difficile ».",
                },
              ],
            },
            {
              type: "ctaBox",
              text: "Quiz terminé ? Direction l'Application pour des exercices plus complets →",
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
              text: "Progressez niveau par niveau. Chaque niveau ajoute une difficulté. Corrigez avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              stars: "",
              label: "Échauffement : Je repère la nature d'un mot isolé",
              sub: "Questions directes, une seule chose à la fois",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : Identifier la nature de mots isolés",
              question:
                "Donnez la classe grammaticale des mots soulignés :\na) « Il courait <u>vite</u>. »   b) « <u>Chaque</u> élève a rendu sa copie. »   c) « Elle est partie <u>sans</u> lui. »   d) « <u>Hélas</u>, il était trop tard. »",
              correction: [
                { type: "line", label: "a)", text: "**vite** → adverbe de manière (invariable, modifie le verbe « courait »)" },
                { type: "line", label: "b)", text: "**Chaque** → déterminant indéfini (introduit le nom « élève », toujours singulier)" },
                { type: "line", label: "c)", text: "**sans** → préposition (introduit le groupe nominal « lui »)" },
                { type: "line", label: "d)", text: "**Hélas** → interjection (exprime la déploration, isolée par la virgule)" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : Associer un mot à sa classe",
              question:
                "Associez chaque mot à sa classe grammaticale :\n**pourtant · murmurer · soudain · envers · celle · bonjour · laquelle · immense**",
              correction: [
                { type: "line", text: "**pourtant** → adverbe (opposition/concession)" },
                { type: "line", text: "**murmurer** → verbe (infinitif)" },
                { type: "line", text: "**soudain** → adverbe de temps (ou adjectif qualificatif si épithète : « un bruit soudain »)" },
                { type: "line", text: "**envers** → préposition" },
                { type: "line", text: "**celle** → pronom démonstratif" },
                { type: "line", text: "**bonjour** → interjection" },
                { type: "line", text: "**laquelle** → pronom relatif (ou interrogatif selon contexte)" },
                { type: "line", text: "**immense** → adjectif qualificatif" },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : Sous-classes et tests",
              sub: "Application directe du Cours",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : Sous-classes de déterminants",
              objectifTag: "Sous-classes de déterminants",
              question:
                "Identifiez la sous-classe précise de chaque déterminant souligné :\na) « <u>ses</u> livres »   b) « <u>quelques</u> jours »   c) « <u>quel</u> talent ! »   d) « <u>du</u> pain »   e) « <u>la</u> maison »   f) « <u>deux</u> enfants »",
              correction: [
                { type: "line", label: "a)", text: "**ses** → déterminant possessif" },
                { type: "line", label: "b)", text: "**quelques** → déterminant indéfini" },
                { type: "line", label: "c)", text: "**quel** → déterminant exclamatif" },
                { type: "line", label: "d)", text: "**du** → article partitif" },
                { type: "line", label: "e)", text: "**la** → article défini" },
                { type: "line", label: "f)", text: "**deux** → déterminant numéral cardinal" },
                {
                  type: "note",
                  text: "⚠️ Piège : « du » peut être **article partitif** quand il introduit une quantité non comptable (« du pain », « du courage »). Il peut aussi être la contraction de **de + le** dans un groupe introduit par « de » (« le chien du voisin » = le chien **de le** voisin, complément du nom). Il faut donc regarder le groupe dans lequel il apparaît.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : Sous-classes de pronoms",
              objectifTag: "Sous-classes de pronoms",
              question:
                "Classez les pronoms suivants selon leur sous-classe (personnel · relatif · démonstratif · indéfini · possessif) :\n**on · le leur · rien · auquel · ceux · te · chacun · qui**",
              correction: [
                { type: "line", text: "**on** → pronom personnel indéfini" },
                { type: "line", text: "**le leur** → pronom possessif" },
                { type: "line", text: "**rien** → pronom indéfini" },
                { type: "line", text: "**auquel** → pronom relatif" },
                { type: "line", text: "**ceux** → pronom démonstratif" },
                { type: "line", text: "**te** → pronom personnel (2e personne du singulier)" },
                { type: "line", text: "**chacun** → pronom indéfini" },
                { type: "line", text: "**qui** → pronom relatif (ou interrogatif selon contexte)" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 3 : Identifier la classe",
              objectifTag: "Identifier la classe",
              question:
                "Identifiez la classe grammaticale des mots soulignés :\na) « <u>Cela</u> m'étonne. »   b) « Il part <u>demain</u>. »   c) « <u>Ni</u> l'un <u>ni</u> l'autre ne répondit. »   d) « Elle achète <u>du</u> café. »   e) « <u>Lequel</u> préfères-tu ? »",
              correction: [
                { type: "line", label: "a)", text: "**Cela** → pronom démonstratif" },
                { type: "line", label: "b)", text: "**demain** → adverbe de temps" },
                { type: "line", label: "c)", text: "**Ni…ni** → conjonctions de coordination" },
                { type: "line", label: "d)", text: "**du** → article partitif" },
                { type: "line", label: "e)", text: "**Lequel** → pronom interrogatif" },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : Mots-caméléons et justification",
              sub: "Réponse rédigée, cas limites",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 4 : Même mot, nature différente",
              question:
                "Donnez la nature et justifiez en une phrase :\na) « Elle parle <u>fort</u>. » vs « C'est un homme <u>fort</u>. »\nb) « Il arrive <u>sans</u> crier gare. » vs « Il est <u>sans</u> emploi. »\nc) « <u>Debout</u> ! » vs « Il est resté <u>debout</u> toute la nuit. »",
              correction: [
                {
                  type: "line",
                  label: "a)",
                  text: "« parle **fort** » → adverbe de manière (invariable, modifie le verbe) / « homme **fort** » → adjectif qualificatif (variable, épithète du nom)",
                },
                { type: "line", label: "b)", text: "Les deux : **sans** → préposition dans les deux cas (introduit un GN ou un infinitif)" },
                {
                  type: "line",
                  label: "c)",
                  text: "« **Debout** ! » → interjection (exprime un ordre, isolée) / « resté **debout** » → adverbe de position (invariable)",
                },
                { type: "note", text: "⚠️ Méthode : identifier ce que le mot modifie ou introduit avant de conclure sur sa nature." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 5 : « comme », un mot-caméléon",
              objectifTag: "Mots-caméléons",
              question:
                "« comme » a des natures différentes. Identifiez-les et justifiez :\na) « Elle chante <u>comme</u> sa mère. »   b) « <u>Comme</u> il était fatigué, il s'endormit. »   c) « Il est beau <u>comme</u> un dieu. »   d) « <u>Comme</u> c'est étrange ! »",
              correction: [
                { type: "line", label: "a)", text: "**comme** → préposition de comparaison (introduit le GN « sa mère »)" },
                { type: "line", label: "b)", text: "**Comme** → conjonction de subordination de cause" },
                { type: "line", label: "c)", text: "**comme** → préposition de comparaison (introduit le GN « un dieu », même règle qu'en a)" },
                { type: "line", label: "d)", text: "**Comme** → adverbe exclamatif d'intensité" },
                { type: "note", text: "⚠️ Piège : « comme » + GN seul (sans verbe) → préposition, même en comparaison (a et c). « comme » + sujet/verbe → conjonction de subordination (b). En tête de phrase exclamative → adverbe (d).\n\nÀ noter : en comparaison, l'analyse de « comme » + GN en **conjonction de subordination** (avec ellipse du verbe : « comme sa mère [chante] ») est aussi acceptée. Les deux réponses sont valables." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 6 : Nature fausse, nature correcte",
              question:
                "Expliquez pourquoi la nature indiquée entre parenthèses est fausse. Donnez la nature correcte :\na) « Il travaille <u>beaucoup</u>. » → (adjectif ?)   b) « <u>Ce</u> que tu dis m'intéresse. » → (déterminant ?)   c) « Elle est partie <u>avant</u> moi. » → (adverbe ?)   d) « Il a couru <u>vite</u>. » → (adjectif ?)",
              correction: [
                { type: "line", label: "a)", text: "**beaucoup** ≠ adjectif car invariable → **adverbe d'intensité**." },
                { type: "line", label: "b)", text: "**Ce** ≠ déterminant car il ne précède pas directement un nom → **pronom démonstratif neutre** (il remplace un élément au lieu d'introduire un nom)." },
                { type: "line", label: "c)", text: "**avant** ≠ adverbe car suivi du pronom « moi » (GN) → **préposition**." },
                { type: "line", label: "d)", text: "**vite** ≠ adjectif car invariable → **adverbe de manière**." },
                { type: "note", text: "⚠️ Méthode : un adjectif est toujours variable. Si le mot ne s'accorde pas, ce n'est pas un adjectif." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 7 : « que », un mot-caméléon",
              objectifTag: "Mots-caméléons",
              question:
                "« que » a des natures différentes. Identifiez-les avec justification :\na) « Je sais <u>que</u> tu viendras. »   b) « L'homme <u>que</u> j'ai vu est parti. »   c) « <u>Que</u> c'est beau ! »   d) « Il est plus grand <u>que</u> son frère. »",
              correction: [
                { type: "line", label: "a)", text: "**que** → conjonction de subordination (elle introduit une complétive après « Je sais »)" },
                { type: "line", label: "b)", text: "**que** → pronom relatif (il reprend « l'homme » et introduit la relative « que j'ai vu »)" },
                { type: "line", label: "c)", text: "**Que** → adverbe exclamatif d'intensité" },
                { type: "line", label: "d)", text: "**que** → conjonction de subordination de comparaison" },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : Extraits littéraires",
              sub: "Extraits littéraires, conditions proches du concours",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 8 · Extrait littéraire : Émile Zola",
              enonce:
                "« Une femme passa, <u>tenant</u> par la main un petit garçon <u>d'une dizaine d'années</u>. Elle se hâtait, les yeux <u>baissés</u>, pressée d'atteindre sa maison <u>avant</u> la nuit. »\n*(Émile Zola, Germinal, 1885)*",
              question:
                "Donnez la nature des mots ou groupes soulignés : « <u>Une femme</u> » · « <u>tenant</u> » · « <u>d'une dizaine d'années</u> » · « <u>baissés</u> » · « <u>avant</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Mot / groupe", "Nature"],
                  rows: [
                    ["Une femme", "Groupe nominal (GN) : déterminant + nom"],
                    ["tenant", "Participe présent (forme verbale non conjuguée)"],
                    ["d'une dizaine d'années", "Groupe nominal prépositionnel : groupe nominal introduit par une préposition (« de »)"],
                    ["baissés", "Participe passé employé comme adjectif"],
                    ["avant", "Préposition"],
                  ],
                },
                { type: "note", text: "⚠️ Piège : « tenant » est un **participe présent** : il garde la forme en -ant et ne s'accorde pas. Le **gérondif** se reconnaît à « en » + participe présent (« en tenant »). L'**adjectif verbal**, lui, fonctionne comme un adjectif et s'accorde avec le nom (« une eau courante », « des élèves souriantes »)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 9 · Extrait littéraire : Victor Hugo",
              enonce:
                "« Les misérables ne manquent pas <u>sur la terre</u>. <u>Partout</u>, <u>hélas</u>, les souffrances sont <u>grandes</u> et les hommes sont <u>las</u>. »\n*(Victor Hugo, Les Misérables, 1862)*",
              question:
                "Donnez la nature des mots ou groupes soulignés : « <u>sur la terre</u> » · « <u>Partout</u> » · « <u>hélas</u> » · « <u>grandes</u> » · « <u>las</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Mot / groupe", "Nature"],
                  rows: [
                    ["sur la terre", "Groupe nominal prépositionnel : GN introduit par la préposition « sur »"],
                    ["Partout", "Adverbe de lieu"],
                    ["hélas", "Interjection"],
                    ["grandes", "Adjectif qualificatif"],
                    ["las", "Adjectif qualificatif"],
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
              text: "Ces exercices reproduisent le format concours : extrait littéraire, identification de la nature des mots, formulation jury. Les exercices calqués sur des sujets récents portent le badge ✦.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 1 : Gustave Flaubert, Madame Bovary",
              enonce:
                "« Elle rêvait des contrées <u>lointaines</u>, des rivages lumineux, des palais <u>de marbre</u> <u>où</u> des fontaines jaillissaient sous des ciels <u>toujours</u> bleus. »\n*(Gustave Flaubert, Madame Bovary, 1857)*",
              question: "Donnez la nature des mots soulignés : « <u>lointaines</u> » · « <u>de marbre</u> » · « <u>où</u> » · « <u>toujours</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Mot / groupe", "Nature"],
                  rows: [
                    ["lointaines", "Adjectif qualificatif"],
                    ["de marbre", "GN prépositionnel, introduit par « de »"],
                    ["où", "Pronom relatif"],
                    ["toujours", "Adverbe de temps"],
                  ],
                },
                {
                  type: "note",
                  text: "⚠️ Piège : « toujours » est ici un adverbe ; un adverbe peut modifier un verbe, un adjectif (ici « bleus ») ou un autre adverbe.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 2 : Colette, La Maison de Claudine",
              enonce:
                "« Ma mère, <u>dont</u> le regard ne vieillissait pas, regardait les enfants jouer dans le jardin. Elle souriait, <u>muette</u>, <u>heureuse</u>, et ne disait <u>rien</u>. »\n*(Colette, La Maison de Claudine, 1922)*",
              question: "Donnez la nature des mots soulignés : « <u>dont</u> » · « <u>muette</u> » · « <u>heureuse</u> » · « <u>rien</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Mot / groupe", "Nature"],
                  rows: [
                    ["dont", "Pronom relatif"],
                    ["muette", "Adjectif qualificatif"],
                    ["heureuse", "Adjectif qualificatif"],
                    ["rien", "Pronom indéfini"],
                  ],
                },
                {
                  type: "note",
                  text: "⚠️ « dont » est toujours un pronom relatif, quelle que soit la phrase : sa nature ne change pas.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format concours récent",
              title: "Exercice 3 : Marguerite Yourcenar, Comment Wang-Fô fut sauvé",
              enonce:
                "« … un <u>tapis dont</u> elles savaient par cœur le dessin » · « les provinces <u>de l'Empire</u> » · « Tu <u>m'</u>as menti, Wang-Fô, <u>vieil imposteur</u> »\n*(Marguerite Yourcenar, Nouvelles orientales, 1963)*",
              question: "Donnez la nature : « <u>dont</u> » · « <u>de l'Empire</u> » · « <u>m'</u> » · « <u>vieil imposteur</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Mot / groupe", "Nature"],
                  rows: [
                    ["dont", "Pronom relatif"],
                    ["de l'Empire", "GN prépositionnel, introduit par « de »"],
                    ["m'", "Pronom personnel (1re pers. sing., forme élidée de « me »)"],
                    ["vieil imposteur", "Groupe nominal"],
                  ],
                },
                {
                  type: "note",
                  text: "⚠️ « m' » est un pronom personnel : c'est la forme élidée de « me » devant voyelle.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format concours récent",
              title: "Exercice 4 : Lola Lafon, Quand tu écouteras cette chanson",
              enonce:
                "« <u>Écrire</u> n'est pas tout à fait un choix : <u>c'</u>est un aveu d'impuissance. <u>On</u> écrit parce qu'on ne sait par quel autre biais attraper le réel. <u>Vivre</u>, sans l'écriture, me va mal. »\n*(Lola Lafon, Quand tu écouteras cette chanson, 2023)*",
              question:
                "Donnez la nature de : « <u>Écrire</u> » · « <u>c'</u> » · « <u>On</u> » · « <u>Vivre</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Mot", "Nature"],
                  rows: [
                    ["Écrire", "Verbe à l'infinitif (1er groupe)"],
                    ["c'", "Pronom démonstratif élidé (forme de « ce »)"],
                    ["On", "Pronom personnel indéfini"],
                    ["Vivre", "Verbe à l'infinitif (3e groupe)"],
                  ],
                },
                {
                  type: "note",
                  text: "⚠️ Piège : un infinitif reste un verbe, même employé comme sujet (« Écrire est… »). « c' » est un pronom démonstratif élidé, à ne pas confondre avec le déterminant « ce ».",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 5 : Extrait poétique",
              enonce:
                "« <u>Jugez</u> ! <u>Insensées</u> choses qui nous font <u>rêver</u> ! <u>Monte</u> en moi une humble flamme. <u>Je</u> ne sais plus où aller. »",
              question: "Donnez la nature des mots soulignés : « <u>Jugez</u> » · « <u>Insensées</u> » · « <u>rêver</u> » · « <u>Monte</u> » · « <u>Je</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Mot", "Nature et analyse"],
                  rows: [
                    ["Jugez", "Verbe « juger » à l'impératif présent, 2e pers. pluriel"],
                    ["Insensées", "Adjectif qualificatif, féminin pluriel (accord avec « choses »)"],
                    ["rêver", "Verbe à l'infinitif (1er groupe)"],
                    ["Monte", "Verbe « monter » au présent de l'indicatif, 3e pers. sing."],
                    ["Je", "Pronom personnel, 1re pers. sing."],
                  ],
                },
                {
                  type: "note",
                  text: "⚠️ Piège : « Insensées » n'est PAS un participe passé (il n'existe pas de verbe « insenser ») : c'est un adjectif qualificatif comme un autre, qui s'accorde simplement avec le nom « choses » (fém. pluriel).",
                },
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
              text: "Ces exercices reproduisent des **erreurs fréquentes** relevées dans les copies. Repérer ce qui cloche dans une copie, c'est aussi ce que vous ferez plus tard avec vos élèves.",
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 1 · Réponse à corriger : « rapidement »",
              enonce:
                "Réponse d'un candidat : « **rapidement** : **adjectif qualificatif** formé sur le radical « rapide » », pour la phrase *« Il courait rapidement vers la sortie. »*",
              question: "Identifiez les deux erreurs et proposez la correction.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Erreur 1 : nature fausse, « rapidement » est en réalité un adverbe (invariable, modifie le verbe « courait »)", bad: true },
                    { text: "Erreur 2 : l'analyse morphologique (« formé sur le radical… ») est hors sujet pour la Partie 1", bad: true },
                    { text: "Réponse attendue : « rapidement » → adverbe de manière" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 2 · Réponse à corriger : « chaque »",
              enonce: "Réponse d'un candidat : « **chaque** : **adjectif indéfini** », pour la phrase *« Chaque matin, il prenait le même chemin. »*",
              question: "Cette réponse est-elle acceptable ? Quelle est la réponse attendue ?",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Ancienne appellation : « adjectif indéfini », à éviter", bad: true },
                    { text: "[Terminologie grammaticale Éduscol 2020](https://eduscol.education.fr/document/1872/download) : DÉTERMINANT INDÉFINI" },
                  ],
                },
                { type: "note", text: "Règle : tout ce qui introduit un nom est un déterminant, quelle que soit sa sous-classe." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 3 · Réponse à corriger : « Écrire »",
              enonce: "Réponse d'un candidat : « **Écrire** : **nom commun** », pour la phrase *« Écrire est difficile. »*",
              question: "Identifiez l'erreur et corrigez.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "« Écrire » n'est pas un nom commun : sa nature est fausse", bad: true },
                    { text: "Réponse attendue : « Écrire » → verbe à l'infinitif (1er groupe)" },
                    { text: "Un infinitif reste un VERBE même employé comme sujet ou comme complément" },
                  ],
                },
                {
                  type: "note",
                  text: "⚠️ Très fréquent : l'infinitif employé comme sujet est un grand classique de l'épreuve.",
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
                  question: "Qu'est-ce que la nature (classe grammaticale) d'un mot ?",
                  answer:
                    "C'est **ce qu'est** le mot : une information **stable**, qu'on trouve dans le dictionnaire (nom, verbe, adjectif…). Elle ne change pas selon la phrase.",
                  astuce: "À ne pas confondre avec la fonction (le rôle dans la phrase), qui est une autre notion.",
                },
                {
                  question: "Les 7 conjonctions de coordination : moyen mnémotechnique ?",
                  answer: "**Mais · Ou · Et · Donc · Or · Ni · Car**\n*« Mais où est donc Ornicar ? »*",
                },
                {
                  question: "« ce » déterminant vs « ce/c' » pronom : comment distinguer ?",
                  answer:
                    "« **ce** » déterminant introduit un nom (« ce livre »).\n« **ce/c'** » pronom remplace un nom ou annonce ce qui suit (« c'est beau »).",
                },
                {
                  question: "Un infinitif peut-il être sujet d'un verbe ? Donnez un exemple.",
                  answer: "Oui : « *Écrire* est difficile ». Même employé comme sujet, « Écrire » reste un verbe à l'infinitif.",
                  astuce: "⚠️ Grand classique de l'épreuve.",
                },
                {
                  question: "Comment appelle-t-on les anciens « adjectifs indéfinis / possessifs » ?",
                  answer:
                    "Ce sont tous des **DÉTERMINANTS** ([terminologie grammaticale Éduscol 2020](https://eduscol.education.fr/document/1872/download)). Déterminant indéfini, possessif, démonstratif…",
                },
                {
                  question: "Test rapide : comment distinguer adverbe et adjectif ?",
                  answer:
                    "L'**adjectif** est variable (accord en genre et nombre). L'**adverbe** est invariable. Test : peut-on faire l'accord ? Oui → adjectif. Non → adverbe.",
                },
                {
                  question: "Quelle est la nature de « on » ? Et son accord ?",
                  answer:
                    "**Pronom personnel indéfini**, 3e pers. sing. : le verbe se met au singulier. Quand « on » = « nous », l'accord se fait souvent au pluriel (« on est partis »).",
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
              center: { title: "Classes grammaticales", subtitle: "Nature des mots" },
              branches: [
                {
                  title: "La nature d'un mot",
                  lines: ["= ce qu'est le mot", "Stable : ne change jamais", "1re question : variable ou invariable ?"],
                  variant: "blue",
                },
                {
                  title: "5 classes variables",
                  lines: ["Nom · Déterminant", "Adjectif · Pronom", "Verbe"],
                  variant: "blue",
                },
                {
                  title: "Invariables",
                  lines: ["Officiel : adverbe · préposition", "Conjonction · interjection", "Mémo : + onomatopée"],
                  variant: "green",
                },
                {
                  title: "Mots-caméléons",
                  lines: ["tout · comme · que · si", "→ regarder le contexte", "(ce qui suit, ce qui est modifié)"],
                  variant: "green",
                },
                {
                  title: "Pièges classiques",
                  lines: ["Adverbe ≠ adjectif (variabilité)", "Infinitif reste un verbe", "Déterminant ≠ adjectif", "« dont » = toujours pronom relatif"],
                  variant: "yellow",
                },
                {
                  title: "Recul primaire",
                  lines: ["Cycle 2 : nom, verbe, adjectif, déterminant", "Cycle 3 : + pronom, adverbe, invariables"],
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
