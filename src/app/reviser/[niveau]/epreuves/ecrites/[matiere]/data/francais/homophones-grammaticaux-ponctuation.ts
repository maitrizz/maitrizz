import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "h1", label: "Je distingue les homophones verbe / mot invariable (a/à, est/et, son/sont, on/ont) en testant la mise à l'imparfait" },
  { id: "h2", label: "Je tranche ou/où et ce/se par un test de remplacement adapté (ou bien, me/te)" },
  { id: "h3", label: "Je distingue le déterminant possessif (ses) du déterminant démonstratif (ces)" },
  { id: "h4", label: "Je sais que le pronom personnel COI « leur » est invariable (test : lui), alors que le déterminant possessif « leur(s) » s'accorde" },
  { id: "h5", label: "Je distingue mais/mes et davantage/d'avantage(s)" },
  { id: "h6", label: "Je distingue c'est/s'est/sais/sait, sa/ça et la/là/l'a/l'as par la nature grammaticale et les tests adaptés" },
  { id: "h7", label: "Je tranche quel(s)/quelle(s)/qu'elle(s) et tout/tous/toute(s) en observant le groupe nominal ou le remplacement" },
];

export const ficheHomophonesPonctuation: Fiche = {
  slug: "homophones-grammaticaux",
  matiere: "francais",
  numero: 12,
  partie: "Partie 1 : Orthographe grammaticale",
  title: "Les homophones grammaticaux",
  subtitle:
    "a/à, est/et, son/sont, on/ont, ou/où, ce/se, ses/ces, leur/leurs, mais/mes, davantage/d'avantage(s), c'est/s'est, sa/ça, la/là/l'a/l'as, quel/qu'elle, tout/tous",
  badges: [
    { label: "★★★ Très fréquent", variant: "hot" },
    { label: "Cycle 3-4 · BOEN n°1 du 22 janvier 2019", variant: "info" },
  ],
  metaTitle: "Les homophones grammaticaux (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur les homophones grammaticaux (a/à, est/et, son/sont, on/ont, ou/où, ses/ces, ce/se, leur/leurs, mais/mes, davantage/d'avantage, c'est/s'est/sais/sait, sa/ça, la/là/l'a/l'as, quel/qu'elle, tout/tous) avec leurs tests de remplacement, une méthode pas-à-pas, des exercices corrigés, des flashcards et une auto-évaluation.",
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
              intro:
                "Les homophones grammaticaux se tranchent par le raisonnement : on identifie la nature du mot, puis on applique le bon test de remplacement.",
              items: [
                {
                  number: "①",
                  title: "Homophones verbe / mot invariable",
                  text: "a/à, est/et, son/sont, on/ont : le test de la mise à l'imparfait permet de repérer la forme verbale.",
                },
                {
                  number: "②",
                  title: "Les autres paires à test",
                  text: "ou/où, ce/se, ses/ces, leur/leurs, mais/mes, davantage : chaque paire a son test de remplacement.",
                },
                {
                  number: "③",
                  title: "Les cas très fréquents en rédaction",
                  text: "c'est/s'est/sais/sait, sa/ça, la/là/l'a/l'as, quel/qu'elle, tout/tous : ils se corrigent en identifiant le groupe ou le verbe caché.",
                },
                {
                  number: "④",
                  title: "Justifier comme au concours",
                  text: "On ne répond pas seulement par la forme correcte : on nomme la nature du mot et on donne le test qui valide le choix.",
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
              text: "Les **homophones grammaticaux** sont des mots qui se prononcent de la même façon mais s'écrivent différemment selon leur **nature** : « a » est un verbe, « à » est une préposition. Le bon réflexe n'est donc pas de mémoriser une liste au hasard, mais d'appliquer un **test de remplacement** et de nommer la nature obtenue.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Homophones verbe / mot invariable : le test de l'imparfait",
              blocks: [
                {
                  type: "paragraph",
                  text: "Pour ces quatre paires, une seule des deux formes est un **verbe**. Un verbe peut se mettre à l'**imparfait** : c'est le test décisif. Si le remplacement par l'imparfait fonctionne, on écrit la forme verbale ; sinon, c'est le mot invariable.",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "a / à",
                      definition: "**a** = verbe avoir (3e personne du singulier) · **à** = préposition.",
                      exemples: [
                        "« Il **a** mangé. » → « Il **avait** mangé » ✓ → verbe",
                        "« Il pense **à** ses vacances. » → l'imparfait est impossible → préposition",
                      ],
                      test: "Remplacer par « avait » : si ça marche, c'est « a » ; sinon, « à ».",
                    },
                    {
                      title: "est / et",
                      definition: "**est** = verbe être (3e personne du singulier) · **et** = conjonction de coordination.",
                      exemples: [
                        "« Elle **est** fatiguée. » → « Elle **était** fatiguée » ✓ → verbe",
                        "« Il mange **et** boit. » → l'imparfait est impossible → conjonction",
                      ],
                      test: "Remplacer par « était » : si ça marche, c'est « est » ; sinon, « et ».",
                    },
                    {
                      title: "son / sont",
                      definition: "**son** = déterminant possessif · **sont** = verbe être (3e personne du pluriel).",
                      exemples: [
                        "« **Son** chien aboie. » → « **Mon** chien aboie » ✓ → déterminant",
                        "« Ils **sont** partis. » → « Ils **étaient** partis » ✓ → verbe",
                      ],
                      test: "Remplacer par « mon » (déterminant) ou par « étaient » (verbe).",
                    },
                    {
                      title: "on / ont",
                      definition: "**on** = pronom personnel indéfini (3e personne du singulier) · **ont** = verbe avoir (3e personne du pluriel).",
                      exemples: [
                        "« **On** mange bien ici. » → « **Il** mange bien ici » ✓ → pronom",
                        "« Ils **ont** réussi. » → « Ils **avaient** réussi » ✓ → verbe",
                      ],
                      test: "Remplacer par « il » (pronom) ou par « avaient » (verbe).",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Les autres homophones : un test par paire",
              blocks: [
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "ou / où",
                      definition: "**ou** = conjonction de coordination (alternative) · **où** = pronom relatif ou adverbe (lieu, temps).",
                      exemples: [
                        "« Tu viens **ou** tu restes ? » → « **ou bien** » ✓ → conjonction",
                        "« La ville **où** il habite. » → « ou bien » impossible → pronom relatif",
                      ],
                      test: "Remplacer par « ou bien » : si ça marche, c'est « ou » (sans accent).",
                    },
                    {
                      title: "ce / se",
                      definition: "**ce** = déterminant ou pronom démonstratif · **se** = pronom personnel réfléchi.",
                      exemples: [
                        "« Il **se** lave. » → « Je **me** lave » ✓ → pronom réfléchi",
                        "« **Ce** livre est beau. » → devant un nom → déterminant démonstratif",
                      ],
                      test: "Changer de personne : « il se lave » devient « je me lave » ou « tu te laves » ; « ce » ne varie pas ainsi.",
                    },
                    {
                      title: "ses / ces",
                      definition: "**ses** = déterminant possessif (pluriel de son/sa) · **ces** = déterminant démonstratif (pluriel de ce/cette).",
                      exemples: [
                        "« Il range **ses** affaires. » → « **son** affaire » ✓ → possessif",
                        "« **Ces** résultats sont bons. » → « **ce** résultat » ✓ → démonstratif",
                      ],
                      test: "Mettre au singulier : « son/sa » (possessif) ou « ce/cette » (démonstratif).",
                      astuce: "« ses » implique un possesseur identifié ; « ces » désigne des éléments déjà connus du contexte.",
                    },
                    {
                      title: "leur / leurs",
                      definition: "**leur** (pronom personnel COI) = invariable · **leur(s)** (déterminant possessif) = s'accorde avec le nom qui suit.",
                      exemples: [
                        "« Je **leur** parle. » → « Je **lui** parle » ✓ → pronom COI, invariable",
                        "« **Leurs** enfants jouent. » → « lui » impossible → déterminant, accord avec « enfants »",
                      ],
                      test: "Remplacer par « lui » : si ça marche, c'est le pronom « leur » (jamais de -s).",
                    },
                    {
                      title: "mais / mes",
                      definition: "**mais** = conjonction de coordination (opposition) · **mes** = déterminant possessif (1re personne).",
                      exemples: [
                        "« Il travaille **mais** il est fatigué. » → « **cependant** » ✓ → conjonction",
                        "« **Mes** amis arrivent. » → devant un nom → déterminant possessif",
                      ],
                      test: "Remplacer par « cependant / pourtant » : si ça marche, c'est « mais ».",
                    },
                    {
                      title: "davantage / d'avantage(s)",
                      definition: "**davantage** (un mot) = adverbe de quantité · **d'avantage(s)** = préposition « de » + nom « avantage(s) ».",
                      exemples: [
                        "« Il travaille **davantage**. » → « Il travaille **plus** » ✓ → adverbe",
                        "« Il ne voit pas **d'avantage** à changer. » → « aucun avantage » ✓ → nom",
                      ],
                      test: "Remplacer par « plus » (adverbe) ou par « un avantage / des avantages » (nom).",
                    },
                    {
                      title: "c'est / s'est / sais / sait",
                      definition: "**c'est** = pronom démonstratif + verbe être · **s'est** = pronom réfléchi + être · **sais/sait** = verbe savoir.",
                      exemples: [
                        "« **C'est** important. » → « cela est important » ✓",
                        "« Il **s'est** trompé. » → verbe pronominal « se tromper » au passé composé",
                        "« Je **sais** / il **sait** la réponse. » → verbe savoir",
                      ],
                      test: "Remplacer « c' » par « cela » ; repérer un verbe pronominal pour « s'est » ; changer de personne pour « sais/sait ».",
                    },
                    {
                      title: "sa / ça",
                      definition: "**sa** = déterminant possessif féminin singulier · **ça** = pronom démonstratif familier (= cela).",
                      exemples: [
                        "« **Sa** copie est lisible. » → « son cahier » ✓ → possessif",
                        "« **Ça** me surprend. » → « cela me surprend » ✓ → pronom",
                      ],
                      test: "Remplacer par « cela » : si ça marche, on écrit « ça » ; devant un nom féminin possédé, on écrit « sa ».",
                    },
                    {
                      title: "la / là / l'a / l'as",
                      definition: "**la** = déterminant ou pronom · **là** = adverbe de lieu · **l'a / l'as** = pronom « l' » + verbe avoir.",
                      exemples: [
                        "« **La** porte est ouverte. » → déterminant devant un nom",
                        "« Il est **là**. » → « ici » ✓ → adverbe de lieu",
                        "« Il **l'a** vue. » → « il l'avait vue » ✓ → avoir",
                      ],
                      test: "Remplacer par « ici » pour « là » ; par « l'avait » pour « l'a/l'as » ; devant un nom ou COD féminin, « la ».",
                    },
                    {
                      title: "quel(s) / quelle(s) / qu'elle(s)",
                      definition: "**quel(s)/quelle(s)** = déterminant ou adjectif interrogatif/exclamatif · **qu'elle(s)** = « que » + pronom personnel.",
                      exemples: [
                        "« **Quelle** surprise ! » → accompagne un nom féminin",
                        "« Je pense **qu'elle** viendra. » → « qu'il viendra » ✓",
                      ],
                      test: "Remplacer « elle(s) » par « il(s) » : si ça marche, écrire « qu'elle(s) ». Sinon accorder « quel » avec le nom.",
                    },
                    {
                      title: "tout / tous / toute(s)",
                      definition: "**tout** peut être déterminant, pronom ou adverbe ; sa forme dépend du mot qu'il accompagne ou remplace.",
                      exemples: [
                        "« **Tous** les élèves travaillent. » → déterminant masculin pluriel",
                        "« Elles sont **toutes** prêtes. » → pronom/adverbe selon l'analyse, accord audible",
                        "« Elle est **tout** émue. » → adverbe devant adjectif féminin commençant par voyelle",
                      ],
                      test: "Identifier le mot concerné : devant un nom, accorder comme déterminant ; seul, pronom ; devant un adjectif, souvent adverbe.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Justifier une graphie : nature + test",
              blocks: [
                {
                  type: "paragraph",
                  text: "Au concours, il faut éviter les réponses réduites à « on écrit comme ça parce que ça sonne juste ». Une bonne justification suit toujours le même schéma : **forme choisie + nature grammaticale + test de remplacement**.",
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Exemple de réponse attendue",
                  text: "« Il **a** terminé » : on écrit **a** car il s'agit du verbe avoir à la 3e personne du singulier. Le remplacement par l'imparfait fonctionne : « Il **avait** terminé ». Dans « Il pense **à** son avenir », le remplacement par « avait » est impossible : **à** est une préposition.",
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "Renvoi",
                  text: "La ponctuation syntaxique (virgule, point-virgule, deux-points) est désormais traitée dans la **notion 5 : La phrase complexe et sa ponctuation**.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · a / à dans le développement rédigé",
              badge: "Erreur très fréquente",
              faux: "« Il pense a son travail et a sa famille. »",
              vrai: "« à » est ici la préposition : le test de l'imparfait échoue (« il pense avait son travail » est impossible). On écrit « **à** » dans les deux cas.",
              methode: "Devant tout « a/à », tester « avait » : si l'imparfait passe, c'est le verbe « a » ; sinon, la préposition « à ».",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 · le pronom « leur » invariable",
              badge: "Source d'erreurs",
              faux: "« Je leurs ai dit la vérité. »",
              vrai: "Le pronom personnel COI « leur » (= lui) est **invariable** : « Je **leur** ai dit la vérité. » Le -s est réservé au déterminant possessif (« leurs enfants »).",
              methode: "Remplacer par « lui » : si ça marche, c'est le pronom « leur », jamais de -s.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 · ses / ces",
              badge: "Cas difficile",
              faux: "« Ses résultats montrent que la méthode est efficace. » (alors que les résultats sont déjà évoqués, sans possesseur).",
              vrai: "Sans possesseur identifié, le sens est démonstratif : « **Ces** résultats… » Test : « ce résultat » au singulier.",
              methode: "Se demander s'il y a un possesseur (ses, son/sa) ou si l'on désigne des éléments déjà connus (ces, ce/cette).",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 2 :** premières confusions travaillées (a/à, est/et, son/sont, on/ont) par le raisonnement grammatical, en repérant la nature du mot.\n\n**Cycle 3-4 :** consolidation (ses/ces, leur/leurs, ce/se, ou/où) avec des tests de remplacement explicites. Les élèves apprennent à justifier, pas seulement à choisir.\n\n**Ce que vous devez savoir dire :** « On n'enseigne pas un homophone par cœur, mais par un raisonnement : quelle est la nature du mot ? Le test de remplacement (avait, mon, lui…) rend ce raisonnement automatique. »",
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
              type: "rappelExpress",
              title: "Rappel express : nature et fonction",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "Un homophone se tranche par sa nature : verbe, déterminant, pronom, conjonction, préposition (voir la notion 1).",
                    "Un verbe peut se mettre à l'imparfait ; un mot invariable, non.",
                    "Une justification complète donne la forme choisie, la nature grammaticale et le test utilisé.",
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ Le pronom COI « leur » est invariable (test : lui) ; seul le déterminant possessif « leur(s) » s'accorde avec le nom qui suit.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Trancher un homophone grammatical",
              intro:
                "**Question typique :** « Justifiez l'orthographe du mot souligné. »\nExemple d'appui : « Je ___ ai rendu ___ livres. » On identifie la nature de chaque occurrence par un test.",
              steps: [
                {
                  number: "1",
                  text: "**Repérer la paire** concernée (a/à, est/et, ses/ces, leur/leurs…).",
                  example: { lines: ["« Je ___ ai rendu ___ livres. » → paire leur/leurs, deux occurrences à analyser séparément"] },
                },
                {
                  number: "2",
                  text: "**Appliquer le test de remplacement** propre à la paire (avait, était, mon, lui, ou bien, ce/cette…).",
                  example: { lines: ["« Je lui ai rendu » ✓ → pronom COI « leur » ; « lui livres » impossible → déterminant possessif « leurs » devant un nom pluriel"] },
                },
                {
                  number: "💡",
                  text: "**Nommer la nature** dans la justification : déterminant possessif, pronom COI, conjonction de coordination…",
                  warn: "⚠️ « leur » pronom est invariable ; ne jamais lui ajouter de -s.",
                },
                {
                  number: "✓",
                  text: "**Formuler la réponse attendue** : « Je **leur** ai rendu » : pronom personnel COI, remplaçable par « lui », donc invariable. « **Leurs** livres » : déterminant possessif, accordé avec le nom pluriel « livres ».",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Justifiez l'orthographe : « ___ résultats montrent qu'il faut travailler ___. » (Ces/Ses puis davantage/d'avantage)",
              correction: [
                { type: "line", text: "**Réponse attendue :** « **Ces** résultats montrent qu'il faut travailler **davantage**. »" },
                { type: "line", text: "On écrit **Ces** avec un c car il s'agit d'un déterminant démonstratif : il désigne des résultats déjà évoqués. Le test au singulier donne « **ce** résultat »." },
                { type: "line", text: "On écrit **davantage** en un seul mot car il s'agit d'un adverbe de quantité, remplaçable par « plus » : « il faut travailler plus »." },
                { type: "note", text: "Trouvé du premier coup ? Vous savez passer d'une paire à l'autre en gardant le même raisonnement : nature + test." },
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
              text: "11 questions rapides pour vérifier que le Cours et la Méthode sont bien ancrés. Le détail objectif par objectif est dans l'onglet Auto-évaluation.",
            },
            {
              type: "quizBlock",
              questions: [
                {
                  objectifId: "h1",
                  question: "« Ils ___ travaillé toute la nuit. » Quelle forme ?",
                  options: ["on", "ont", "ons", "honts"],
                  correctIndex: 1,
                  explanation:
                    "Test : « Ils avaient travaillé » ✓ → verbe avoir à la 3e personne du pluriel : ont.",
                },
                {
                  objectifId: "h1",
                  question: "« Il pense ___ son avenir. » Quelle forme ?",
                  options: ["a", "à", "as", "at"],
                  correctIndex: 1,
                  explanation:
                    "Test : « il pense avait son avenir » est impossible → ce n'est pas le verbe, mais la préposition « à ».",
                },
                {
                  objectifId: "h5",
                  question: "« Il travaille ___ il est fatigué. » Quelle forme ?",
                  options: ["mes", "mais", "m'est", "maie"],
                  correctIndex: 1,
                  explanation:
                    "Test : « cependant » fonctionne → conjonction de coordination « mais ». « mes » serait un déterminant possessif, devant un nom.",
                },
                {
                  objectifId: "h2",
                  question: "« La ville ___ il est né est loin. » Quelle forme ?",
                  options: ["ou", "où", "oû", "houx"],
                  correctIndex: 1,
                  explanation:
                    "Test : « ou bien il est né » est impossible → ce n'est pas la conjonction, mais le pronom relatif de lieu « où ».",
                },
                {
                  objectifId: "h3",
                  question: "« ___ résultats sont encourageants. » (résultats déjà évoqués) Quelle forme ?",
                  options: ["Ses", "Ces", "C'est", "Sais"],
                  correctIndex: 1,
                  explanation:
                    "Sens démonstratif (résultats déjà connus, sans possesseur) : test « ce résultat » au singulier → déterminant démonstratif « ces ».",
                },
                {
                  objectifId: "h4",
                  question: "« Je ___ ai parlé hier. » Quelle forme ?",
                  options: ["leur", "leurs", "leur(s)", "l'heure"],
                  correctIndex: 0,
                  explanation:
                    "Test : « Je lui ai parlé » ✓ → pronom personnel COI « leur », toujours invariable.",
                },
                {
                  objectifId: "h2",
                  question: "« Il ___ prépare à partir. » Quelle forme ?",
                  options: ["ce", "se", "ces", "ses"],
                  correctIndex: 1,
                  explanation:
                    "« se » est le pronom réfléchi du verbe pronominal « se préparer » ; on peut comparer avec « je me prépare ».",
                },
                {
                  objectifId: "h5",
                  question: "« Ce choix offre ___ de garanties. » Quelle forme ?",
                  options: ["davantage", "d'avantage", "d'avantages", "d'avantagez"],
                  correctIndex: 0,
                  explanation:
                    "On peut remplacer par « plus » : il s'agit de l'adverbe « davantage ».",
                },
                {
                  objectifId: "h6",
                  question: "« Il ___ blessé en tombant. » Quelle forme ?",
                  options: ["c'est", "s'est", "sait", "sais"],
                  correctIndex: 1,
                  explanation:
                    "Il s'agit du verbe pronominal « se blesser » au passé composé : « il s'est blessé ».",
                },
                {
                  objectifId: "h7",
                  question: "« Je crois ___ viendra demain. » Quelle forme ?",
                  options: ["quelle", "quel", "qu'elle", "qu'elles"],
                  correctIndex: 2,
                  explanation:
                    "On peut remplacer par « qu'il viendra demain » : « qu'elle » = que + pronom personnel.",
                },
                {
                  objectifId: "h7",
                  question: "« ___ les élèves ont rendu leur copie. » Quelle forme ?",
                  options: ["Tout", "Tous", "Toute", "Toutes"],
                  correctIndex: 1,
                  explanation:
                    "Devant un nom masculin pluriel (« les élèves »), le déterminant s'accorde : « tous les élèves ».",
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
              sub: "Choisir la bonne forme et justifier par le test",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 1 : Homophones verbe / mot invariable",
              objectifTag: "Test de l'imparfait",
              question:
                "Choisissez et justifiez :\na) « Il ___ terminé son travail. » (a/à)   b) « Elle pense ___ son avenir. » (a/à)   c) « Ils ___ arrivés en retard. » (son/sont)   d) « ___ mange bien dans ce restaurant. » (On/Ont)   e) « Tu viens ___ tu restes ? » (ou/où)",
              correction: [
                { type: "line", label: "a)", text: "**a** : « il avait terminé » ✓ → verbe avoir." },
                { type: "line", label: "b)", text: "**à** : « elle pense avait » impossible → préposition." },
                { type: "line", label: "c)", text: "**sont** : « ils étaient arrivés » ✓ → verbe être (3e pluriel)." },
                { type: "line", label: "d)", text: "**On** : « Il mange » ✓ → pronom personnel indéfini." },
                { type: "line", label: "e)", text: "**ou** : « ou bien tu restes » ✓ → conjonction de coordination." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 2 : ses/ces, leur/leurs, ce/se, mais/mes",
              objectifTag: "Test par paire",
              question:
                "Choisissez et justifiez :\na) « Il range ___ affaires. » (ses/ces)   b) « Je ___ ai parlé. » (leur/leurs)   c) « ___ maison est grande. » (Leur/Leurs)   d) « Il ___ lève tôt. » (se/ce)   e) « Il travaille ___ il est épuisé. » (mais/mes)",
              correction: [
                { type: "line", label: "a)", text: "**ses** : « son affaire » au singulier ✓ → déterminant possessif." },
                { type: "line", label: "b)", text: "**leur** : « Je lui ai parlé » ✓ → pronom personnel COI, invariable." },
                { type: "line", label: "c)", text: "**Leur** : « lui » impossible → déterminant possessif ; un seul nom → singulier." },
                { type: "line", label: "d)", text: "**se** : pronom réfléchi du verbe pronominal « se lever » ; à la 1re personne, on dirait « je me lève »." },
                { type: "line", label: "e)", text: "**mais** : « cependant » ✓ → conjonction de coordination (opposition)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : Analyser",
              sub: "Texte à compléter, justification rédigée, cas proches",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : Texte à compléter",
              question:
                "Complétez et justifiez chaque choix :\n« ___ (Ce/Se) matin-là, il ___ (se/ce) leva plus tôt que d'habitude. ___ (Son/Sont) frère ___ (est/et) sa sœur dormaient encore. Il prit ___ (ses/ces) affaires en silence : ___ (ou/où) irait-il ? »",
              correction: [
                { type: "line", text: "**Ce** matin-là : déterminant démonstratif (devant un nom)." },
                { type: "line", text: "il **se** leva : pronom réfléchi du verbe pronominal « se lever » ; à la 1re personne, on dirait « je me lève »." },
                { type: "line", text: "**Son** frère : déterminant possessif (« mon frère » ✓)." },
                { type: "line", text: "**et** sa sœur : conjonction de coordination (« était sa sœur » impossible)." },
                { type: "line", text: "**ses** affaires : déterminant possessif (« son affaire » au singulier ✓)." },
                { type: "line", text: "**où** irait-il : adverbe interrogatif (« ou bien irait-il » impossible)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 4 : davantage ou d'avantage(s) ?",
              question:
                "Choisissez et justifiez :\na) « Il faut travailler ___ pour progresser. »   b) « Cette solution présente beaucoup ___. »   c) « Il ne voit pas ___ à changer de méthode. »",
              correction: [
                { type: "line", label: "a)", text: "**davantage** : adverbe, remplaçable par « plus »." },
                { type: "line", label: "b)", text: "**d'avantages** : nom pluriel, remplaçable par « beaucoup d'avantages » / « beaucoup de bénéfices »." },
                { type: "line", label: "c)", text: "**d'avantage** : préposition « de » + nom singulier « avantage » ; on peut reformuler par « aucun avantage à changer de méthode »." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 5 : c'est/s'est, sa/ça, la/là/l'a",
              question:
                "Choisissez et justifiez :\na) « ___ une erreur fréquente. » (C'est/S'est)   b) « Il ___ aperçu de son oubli. » (c'est/s'est)   c) « ___ réponse est claire. » (Sa/Ça)   d) « ___ me paraît juste. » (Sa/Ça)   e) « Elle ___ compris trop tard. » (la/l'a/là)",
              correction: [
                { type: "line", label: "a)", text: "**C'est** : « cela est une erreur fréquente » ✓." },
                { type: "line", label: "b)", text: "**s'est** : verbe pronominal « s'apercevoir » au passé composé." },
                { type: "line", label: "c)", text: "**Sa** : déterminant possessif devant le nom féminin « réponse »." },
                { type: "line", label: "d)", text: "**Ça** : pronom démonstratif, remplaçable par « cela »." },
                { type: "line", label: "e)", text: "**l'a** : pronom « l' » + verbe avoir ; test « elle l'avait compris »." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : Maîtriser",
              sub: "Justification complète, formule jury rédigée",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 6 : Justification complète",
              enonce: "« Tous ces élèves se demandent où sont leurs cahiers ; on leur a pourtant dit de ranger davantage leurs affaires, mais ils ne savent pas quelle méthode appliquer. »",
              question: "Justifiez les formes « Tous », « ces », « se », « où », « sont », « leurs », « on », « leur », « davantage », le second « leurs », « mais » et « quelle ».",
              correction: [
                { type: "line", text: "**Tous** : déterminant indéfini masculin pluriel, accordé avec « élèves »." },
                { type: "line", text: "**Ces** : déterminant démonstratif, test « cet élève » au singulier." },
                { type: "line", text: "**se** : pronom réfléchi du verbe pronominal « se demander » ; à la 1re personne, « je me demande »." },
                { type: "line", text: "**où** : adverbe interrogatif de lieu ; « ou bien » est impossible." },
                { type: "line", text: "**sont** : verbe être, test « étaient »." },
                { type: "line", text: "**leurs cahiers** : déterminant possessif accordé avec le nom pluriel « cahiers »." },
                { type: "line", text: "**on** : pronom personnel indéfini, test « il »." },
                { type: "line", text: "**leur** : pronom personnel COI, test « lui » ; il est donc invariable." },
                { type: "line", text: "**davantage** : adverbe, remplaçable par « plus »." },
                { type: "line", text: "**leurs affaires** : déterminant possessif accordé avec le nom pluriel « affaires »." },
                { type: "line", text: "**mais** : conjonction de coordination exprimant une opposition, remplaçable par « cependant »." },
                { type: "line", text: "**quelle méthode** : déterminant interrogatif féminin singulier, accordé avec le nom « méthode »." },
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
              text: "Ces exercices reproduisent le format de la Partie 1 : choisir une graphie, puis la justifier par la nature grammaticale et un test de remplacement.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 1 : justifier des homophones dans un extrait",
              enonce:
                "« Ce matin-là, ses élèves se taisaient : on leur avait demandé davantage d'attention, mais ces consignes semblaient déjà oubliées. C'est pourtant là qu'elle l'a répété. »",
              question: "Justifiez les formes « Ce », « ses », « se », « on », « leur », « davantage », « mais », « ces », « C'est », « là », « qu'elle » et « l'a ».",
              correction: [
                { type: "line", text: "**Ce matin-là** : déterminant démonstratif devant un nom ; au pluriel, on aurait « ces matins-là »." },
                { type: "line", text: "**ses élèves** : déterminant possessif ; test au singulier « son élève »." },
                { type: "line", text: "**se taisaient** : pronom réfléchi du verbe pronominal « se taire » ; à la 1re personne, « je me tais »." },
                { type: "line", text: "**on** : pronom personnel indéfini ; test « il avait demandé »." },
                { type: "line", text: "**leur** : pronom personnel COI, remplaçable par « lui » ; il est invariable." },
                { type: "line", text: "**davantage** : adverbe, remplaçable par « plus »." },
                { type: "line", text: "**mais** : conjonction de coordination exprimant l'opposition, remplaçable par « cependant »." },
                { type: "line", text: "**ces consignes** : déterminant démonstratif ; test au singulier « cette consigne »." },
                { type: "line", text: "**C'est** : « cela est » ; pronom démonstratif + verbe être." },
                { type: "line", text: "**là** : adverbe de lieu, remplaçable par « ici »." },
                { type: "line", text: "**qu'elle** : « que » + pronom personnel ; test « qu'il l'a répété »." },
                { type: "line", text: "**l'a** : pronom « l' » + verbe avoir ; test « l'avait répété »." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 2 : corriger des homophones",
              enonce:
                "« ___ (Ses/Ces) enfants jouent dans la cour : ___ (leur/leurs) rires sont contagieux. ___ (On/Ont) voit qu'ils ___ (a/ont) besoin de ___ (ses/ces) moments de liberté. »",
              question: "Choisissez la forme correcte et justifiez chaque choix en une phrase.",
              correction: [
                { type: "line", text: "**Ces** enfants : déterminant démonstratif (« cet enfant » au singulier), car les enfants sont désignés dans la situation." },
                { type: "line", text: "**leurs** rires : déterminant possessif, accord avec « rires » (« lui » impossible)." },
                { type: "line", text: "**On** voit : pronom personnel indéfini (« il voit » ✓)." },
                { type: "line", text: "ils **ont** besoin : verbe avoir 3e pluriel (« ils avaient besoin » ✓ ; « a » serait incompatible avec « ils »)." },
                { type: "line", text: "**ces** moments : déterminant démonstratif (« ce moment » au singulier), qui renvoie aux moments de liberté dont on vient de parler." },
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
              text: "Ces exercices reproduisent des **erreurs fréquentes** observées dans les copies, y compris à la Partie 3. Repérer ce qui cloche et corriger rigoureusement est une compétence directement valorisée au concours.",
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 1 · Réponse à corriger : « pense a »",
              enonce: "Copie d'un candidat (Partie 3) : « Il pense *a son travail et *a sa famille. »",
              question: "Identifiez les deux erreurs et corrigez avec le test de remplacement.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Deux prépositions « à » écrites sans accent", bad: true },
                    { text: "Test : « il pense avait son travail » est impossible → ce n'est pas le verbe « a »" },
                    { text: "Réponse attendue : « Il pense **à** son travail et **à** sa famille. »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 2 · Réponse à corriger : « je leurs ai dit »",
              enonce: "Copie d'un candidat : « Je *leurs ai dit la vérité. »",
              question: "Identifiez l'erreur, nommez la nature de « leur » ici, et corrigez.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Ajout d'un -s erroné sur le pronom personnel COI", bad: true },
                    { text: "Le pronom « leur » (= lui) est invariable ; le -s est réservé au déterminant possessif" },
                    { text: "Réponse attendue : « Je **leur** ai dit la vérité. » (test : « je lui ai dit » ✓)" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 3 · Réponse à corriger : « ses résultats »",
              enonce: "Copie d'un candidat (Partie 3) : « *Ses résultats montrent que la méthode est efficace. » (le texte parle de résultats déjà évoqués, sans possesseur).",
              question: "Identifiez l'erreur et distinguez « ses » et « ces ».",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "« ses » implique un possesseur, absent du contexte", bad: true },
                    { text: "Le sens est démonstratif : il s'agit des résultats déjà évoqués" },
                    { text: "Réponse attendue : « **Ces** résultats montrent… » (test : « ce résultat » ✓)" },
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
              text: "Cliquez sur chaque carte pour révéler la réponse. Essayez de répondre dans votre tête avant.",
            },
            {
              type: "flashcardDeck",
              cards: [
                {
                  question: "Comment reconnaître les homophones verbaux ?",
                  answer:
                    "Quand l'une des deux formes est un verbe, on teste l'**imparfait**.\n**a** → « avait » : « Il a compris » → « Il avait compris ».\n**est** → « était » : « Elle est prête » → « Elle était prête ».\n**sont** → « étaient » : « Ils sont venus » → « Ils étaient venus ».\n**ont** → « avaient » : « Ils ont fini » → « Ils avaient fini ».",
                  astuce: "Si l'imparfait fonctionne, on écrit la forme verbale ; sinon, on cherche l'autre nature.",
                },
                {
                  question: "ses / ces : comment trancher ?",
                  answer:
                    "**ses** (possessif) : pluriel de son/sa → test « son/sa » au singulier. « ses livres » → « son livre » ✓.\n**ces** (démonstratif) : pluriel de ce/cette → test « ce/cette » au singulier. « ces livres » → « ce livre » ✓.",
                  astuce: "« ses » implique un possesseur ; « ces » désigne des éléments déjà connus.",
                },
                {
                  question: "leur ou leurs : comment décider ?",
                  answer:
                    "**leur** est invariable quand c'est un **pronom personnel COI** : il se remplace par « lui ». « Je leur parle » → « Je lui parle ».\n**leur(s)** varie quand c'est un **déterminant possessif** placé devant un nom : « leur livre » / « leurs livres ».",
                  astuce: "Question réflexe : puis-je remplacer par « lui » ? Si oui, pas de -s.",
                },
                {
                  question: "on / ont et est / et : la confusion de verbes ?",
                  answer:
                    "**on** = pronom personnel indéfini → test « il ».\n**ont** = verbe avoir 3e pluriel → test « avaient ».\n**est** = verbe être 3e singulier → test « était ».\n**et** = conjonction de coordination → l'imparfait est impossible.",
                  astuce: "Une forme verbale passe toujours à l'imparfait ; un mot invariable, non.",
                },
                {
                  question: "ce / se : démonstratif ou réfléchi ?",
                  answer:
                    "**se** = pronom personnel réfléchi dans un verbe pronominal ; à la 1re personne, il devient « me ». « Il se lave » → « Je me lave ».\n**ce** = déterminant démonstratif (devant un nom) ou pronom démonstratif (neutre, devant un verbe ou « que »). « Ce livre. » · « Ce que je veux. »",
                },
                {
                  question: "c'est / s'est / sais / sait : quel test ?",
                  answer:
                    "**c'est** = cela est : « C'est vrai » → « Cela est vrai ».\n**s'est** = verbe pronominal au passé composé : « Il s'est trompé ».\n**sais/sait** = verbe savoir : « je sais », « il sait ».",
                  astuce: "Changer de personne aide : « je sais », « tu sais », « il sait ».",
                },
                {
                  question: "sa/ça, la/là/l'a/l'as, quel/qu'elle : les tests rapides ?",
                  answer:
                    "**ça** → « cela » ; **sa** → déterminant possessif devant un nom.\n**là** → « ici » ; **l'a/l'as** → « l'avait » ; **la** → déterminant ou pronom féminin.\n**qu'elle(s)** → « qu'il(s) » ; **quel(s)/quelle(s)** s'accorde avec un nom.",
                },
                {
                  question: "tout / tous / toute(s) : comment raisonner ?",
                  answer:
                    "Devant un nom, **tout** est déterminant et s'accorde : tout le groupe, tous les élèves, toutes les copies.\nSeul, il peut être pronom : « Tous ont réussi ».\nDevant un adjectif, il est souvent adverbe : « tout étonnée », avec des cas d'accord devant consonne ou h aspiré.",
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
              center: { title: "Homophones", subtitle: "tests de remplacement" },
              branches: [
                {
                  title: "Test de l'imparfait",
                  lines: ["a/à : avait", "est/et : était", "son/sont : étaient", "on/ont : il / avaient"],
                  variant: "blue",
                },
                {
                  title: "Un test par paire",
                  lines: ["ou/où : ou bien", "ce/se : me/te", "ses/ces : son/sa ou ce/cette"],
                  variant: "blue",
                },
                {
                  title: "leur / leurs",
                  lines: ["Pronom COI : lui → invariable", "Déterminant : accord avec le nom"],
                  variant: "green",
                },
                {
                  title: "Cas de rédaction",
                  lines: ["c'est/s'est : cela est ou verbe pronominal", "sa/ça : possessif ou cela", "la/là/l'a : nom, lieu ou avoir"],
                  variant: "green",
                },
                {
                  title: "Accords à surveiller",
                  lines: ["quel/qu'elle : qu'il ?", "tout/tous/toute(s)", "Accorder avec le nom si déterminant"],
                  variant: "blue",
                },
                {
                  title: "Pièges classiques",
                  lines: ["a/à dans la rédaction", "leur invariable (jamais -s)", "ses ≠ ces sans possesseur"],
                  variant: "yellow",
                },
                {
                  title: "Renvois",
                  lines: ["Classes de mots → notion 1", "Fonctions (COI) → notion 2", "Ponctuation → notion 5"],
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
