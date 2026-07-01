import type { Fiche } from "@/components/fiche/types";
import { EXERCICES_HOMOPHONES_GRAMMATICAUX } from "./exercices-homophones-grammaticaux";
import { COPIES_HOMOPHONES_GRAMMATICAUX } from "./copies-homophones-grammaticaux";

const SAVOIR_FAIRE = [
  { id: "a-a", label: "a/à" },
  { id: "et-est", label: "et/est" },
  { id: "son-sont", label: "son/sont" },
  { id: "ce-se", label: "ce/se" },
  { id: "ces-ses-cest-sest", label: "ces/ses/c’est/s’est" },
  { id: "leur-leurs", label: "leur/leurs" },
];

export const ficheHomophonesGrammaticaux: Fiche = {
  slug: "homophones-grammaticaux",
  matiere: "francais",
  numero: 13,
  partie: "Partie 1 : Orthographe grammaticale",
  title: "Les homophones grammaticaux",
  subtitle: "a/à, est/et, son/sont, on/ont, ou/où, ce/se, ses/ces, leur/leurs, mais/mes, davantage/d'avantage(s), c'est/s'est, sa/ça, la/là/l'a/l'as, quel/qu'elle, tout/tous, peu/peut/peux, quand/quant/qu'en, près/prêt",
  badges: [
      {
          "label": "★★★ Très fréquent",
          "variant": "hot"
      },
      {
          "label": "Cycle 3-4 · BOEN n°1 du 22 janvier 2019",
          "variant": "info"
      }
  ],
  metaTitle: "Homophones grammaticaux · Fiche de révision CRPE",
  metaDescription:
    "Les homophones grammaticaux au CRPE : a/à, est/et, son/sont, on/ont, ses/ces, ce/se, leur/leurs, c'est/s'est. Tests de remplacement, méthode, exercices corrigés.",
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
                        "« **Ce** sera utile », « **Ce** que je veux » → devant un verbe ou « que » → pronom démonstratif",
                      ],
                      test: "Changer de personne : « il se lave » devient « je me lave » → pronom réfléchi « se ». « ce » ne varie pas ainsi : devant un verbe ou « que », c'est le pronom démonstratif (ce sera, ce que).",
                      astuce: "Confusion fréquente devant un verbe : « se » accompagne un verbe pronominal (se trouver, se faire) ; « ce » annonce ou reprend (ce sera, ce que je crois).",
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
                        "« **Tous** les élèves travaillent. » → devant un nom → déterminant masculin pluriel",
                        "« **Tous** ont réussi. » → remplace le nom → pronom",
                        "« Elle est **tout** émue » mais « Elles sont **toutes** honteuses » → adverbe (= entièrement)",
                      ],
                      test: "Devant un nom : déterminant, on accorde. Seul : pronom. Devant un adjectif : adverbe invariable, **sauf** devant un adjectif féminin commençant par une consonne ou un h aspiré (« toute honteuse », « toutes contentes »).",
                    },
                    {
                      title: "peu / peut / peux",
                      definition: "**peu** = adverbe de quantité (invariable) · **peut / peux** = verbe pouvoir au présent.",
                      exemples: [
                        "« Il **peut** réussir. » → « Il **pouvait** réussir » ✓ → verbe",
                        "« Il travaille **peu**. » → « il travaille pouvait » impossible → adverbe",
                      ],
                      test: "Remplacer par « pouvait » : si ça marche, c'est le verbe « peut / peux » ; sinon, l'adverbe « peu ».",
                    },
                    {
                      title: "quand / quant / qu'en",
                      definition: "**quand** = conjonction ou adverbe de temps · **quant (à / au)** = locution (= en ce qui concerne) · **qu'en** = « que » + pronom « en ».",
                      exemples: [
                        "« **Quand** il arrive… » → « **lorsqu'**il arrive » ✓ → temps",
                        "« **Quant à** moi, je refuse. » → « en ce qui concerne moi » ✓ → locution",
                        "« Je sais ce **qu'en** pense Léa. » → « ce **que** Léa **en** pense » ✓",
                      ],
                      test: "« lorsque » → quand ; « en ce qui concerne » → quant (à) ; décomposable en « que… en » → qu'en.",
                    },
                    {
                      title: "près / prêt(e)",
                      definition: "**près** = adverbe ou préposition de lieu (près de), invariable · **prêt(e)** = adjectif (= préparé), variable.",
                      exemples: [
                        "« Elle est **prête** à partir. » → « préparée » ✓ et accord audible → adjectif",
                        "« Il habite tout **près**. » → invariable, idée de lieu → adverbe",
                      ],
                      test: "Remplacer par « préparé(e) » : si ça marche et que le mot s'accorde, c'est l'adjectif « prêt » ; sinon, « près » (lieu, invariable).",
                    },
                    {
                      title: "quoique / quoi que",
                      definition: "**quoique** (un mot) = conjonction de subordination (= bien que, concession) · **quoi que** (deux mots) = « quelle que soit la chose que » (= peu importe ce que).",
                      exemples: [
                        "« **Quoiqu'**il soit tard, je sors. » → « **bien qu'**il soit tard » ✓ → un mot",
                        "« **Quoi que** tu fasses, je te soutiens. » → « **quelle que soit la chose que** tu fasses » ✓ → deux mots",
                      ],
                      test: "Remplacer par « bien que » : si ça marche, c'est « quoique » (un mot). Si « quelle que soit la chose que » convient, c'est « quoi que » (deux mots).",
                    },
                    {
                      title: "quelque(s) / quel(s) que / quelle(s) que",
                      definition: "**quelque** = déterminant (= plusieurs, un certain), accordé en nombre, ou **adverbe** invariable (= environ, devant un nombre) · **quel que** (deux mots) = « quel » + « que » devant le verbe **être** au subjonctif ; « quel » s'accorde alors avec le sujet.",
                      exemples: [
                        "« J'ai **quelques** doutes. » → déterminant, accord avec « doutes »",
                        "« Il y a **quelque** vingt ans. » → adverbe (= environ), invariable",
                        "« **Quels que** soient les obstacles… » → deux mots ; « quels » accordé avec « obstacles » (sujet de « soient »)",
                      ],
                      test: "Devant le verbe être au subjonctif → « quel que » en deux mots (accord avec le sujet). Sinon → « quelque » (déterminant accordé, ou adverbe = environ, invariable).",
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
                  variant: "info",
                  title: "Renvoi",
                  text: "La ponctuation syntaxique (virgule, point-virgule, deux-points) est traitée dans la fiche [La phrase complexe et sa ponctuation](fiche:phrase-complexe).",
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
                    "Un homophone se tranche par sa nature : verbe, déterminant, pronom, conjonction, préposition (voir [Les classes grammaticales](fiche:classes-grammaticales)).",
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
                "*Question typique : « Justifiez l'orthographe du mot souligné. » Exemple d'appui : « Je ___ ai rendu ___ livres. »*",
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
              title: "Les homophones grammaticaux",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_HOMOPHONES_GRAMMATICAUX,
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
              title: "Les homophones grammaticaux",
              copies: COPIES_HOMOPHONES_GRAMMATICAUX,
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
                  title: "Autres paires fréquentes",
                  lines: ["peu/peut : pouvait ?", "quand/quant : lorsque / en ce qui concerne", "près/prêt : préparé(e) ?"],
                  variant: "green",
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
      ],
    },
  ],
};
