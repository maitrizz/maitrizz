import type { Fiche } from "@/components/fiche/types";
import { EXERCICES_GROUPE_NOMINAL_EXPANSIONS } from "./exercices-groupe-nominal-expansions";
import { COPIES_GROUPE_NOMINAL_EXPANSIONS } from "./copies-groupe-nominal-expansions";

const SAVOIR_FAIRE = [
  { id: "noyau-gn", label: "Noyau du GN" },
  { id: "determinants", label: "Déterminants" },
  { id: "epithete", label: "Épithète" },
  { id: "cdn", label: "Complément du nom" },
  { id: "relative", label: "Relative" },
  { id: "apposition", label: "Apposition" },
];

export const ficheGroupeNominalExpansions: Fiche = {
  slug: "groupe-nominal-expansions",
  matiere: "francais",
  numero: 3,
  partie: "Partie 1 : Grammaire de la phrase",
  title: "Le groupe nominal et ses expansions",
  subtitle: "Analyser la structure interne du GN : épithète, complément du nom, proposition subordonnée relative",
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
  metaTitle: "Le groupe nominal et ses expansions (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur le groupe nominal et ses expansions : nom noyau, déterminant, GN minimal et GN étendu, les 4 expansions (épithète liée, épithète détachée, complément du nom, proposition subordonnée relative), relative déterminative ou explicative. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
              text: "Dans la notion 2, vous avez appris à reconnaître certaines **fonctions** liées au nom : complément du nom, épithète, apposition. Ici, on change d'échelle : on observe comment un groupe nominal se construit **autour d'un nom noyau**. L'objectif n'est plus seulement de nommer un groupe souligné, mais de comprendre comment le déterminant et les expansions organisent le GN.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Repérer la structure du groupe nominal",
              blocks: [
                {
                  type: "paragraph",
                  text: "Le **groupe nominal (GN)** est un groupe de mots organisé autour d'un **nom noyau**, généralement précédé d'un **déterminant**. Le noyau et son déterminant forment le **GN minimal**. Le nom peut ensuite être enrichi par des **expansions** qui le précisent ou le qualifient.",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Du GN minimal au GN étendu",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "**GN minimal** (obligatoire) : déterminant + nom noyau → « **le** chat », « **une** liberté », « **mon** ami »",
                        "**GN étendu** (avec expansions) : « **le vieux chat roux de ma voisine qui miaule** »",
                      ],
                      note: "Le noyau (« chat ») et son déterminant (« le ») sont obligatoires. Les expansions (« vieux », « roux », « de ma voisine », « qui miaule ») sont optionnelles : on peut les retirer sans rendre la phrase incorrecte.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Le réflexe à avoir",
                  text: "Face à un GN souligné, commencez toujours par **identifier le nom noyau**. Tout le reste se rattache à lui : le déterminant l'introduit, les expansions le précisent. C'est ce repérage qui structure toute l'analyse.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Identifier les 4 expansions du nom",
              blocks: [
                {
                  type: "paragraph",
                  text: "Une **expansion** est un mot, un groupe ou une proposition qui enrichit un nom noyau. Le plus souvent, elle se trouve dans le GN ; parfois, comme l'épithète détachée, elle est séparée par une virgule tout en se rapportant au nom ou au pronom. La [terminologie grammaticale Éduscol 2020](https://eduscol.education.fr/document/1872/download) en retient quatre.",
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Expansion (ici) ou fonction (notion 2) ?",
                  text: "Dans cette fiche, on regarde ces groupes comme des **expansions** qui construisent le GN autour de son noyau. Leur **fonction grammaticale** précise (épithète, complément du nom, apposition…) et la fonction du pronom relatif s'analysent dans la [notion 2 · Les fonctions syntaxiques](fiche:fonctions-syntaxiques). Ce sont deux regards complémentaires sur les mêmes mots.",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Épithète liée",
                      definition:
                        "Adjectif (ou participe employé comme adjectif) directement accolé au nom, avant ou après, sans virgule ni verbe d'état. Elle s'accorde avec le nom.",
                      sousClasses:
                        "**Natures possibles :** adjectif qualificatif · participe passé employé comme adjectif · participe présent employé comme adjectif verbal",
                      exemples: [
                        "« un **beau** jardin » : adjectif qualificatif, épithète liée du nom « jardin »",
                        "« les yeux **baissés** » : participe passé employé comme adjectif, épithète liée du nom « yeux »",
                        "« une eau **courante** » : participe présent employé comme adjectif verbal, épithète liée du nom « eau »",
                      ],
                      piege: "La place de l'adjectif peut changer le sens : « un **grand** homme » (remarquable) ne dit pas la même chose que « un homme **grand** » (de grande taille). La fonction, elle, reste épithète liée dans les deux cas.",
                      test: "Déplaçable autour du nom, mais jamais hors du GN ; s'accorde en genre et en nombre avec le nom.",
                    },
                    {
                      title: "Épithète détachée",
                      definition:
                        "Adjectif ou groupe adjectival séparé du nom par une virgule, mobile dans la phrase. Il se rapporte au nom (ou au pronom) sans verbe d'état.",
                      sousClasses:
                        "**Natures possibles :** adjectif qualificatif · groupe adjectival · participe passé · participe présent",
                      exemples: [
                        "« **Épuisée**, elle s'endormit » : adjectif qualificatif, épithète détachée du sujet « elle »",
                        "« **Très fière**, elle sourit » : groupe adjectival, épithète détachée du sujet « elle »",
                        "« **Rassurée**, elle entra » : participe passé, épithète détachée du sujet « elle »",
                        "« Une femme passa, **tenant** par la main un enfant » : participe présent, épithète détachée du nom « femme »",
                      ],
                      piege: "Sans verbe d'état entre le nom et l'adjectif, ce n'est jamais un attribut du sujet : « **Seule**, elle pleurait » est une épithète détachée, pas un attribut.",
                      test: "Entre virgules, mobile (déplaçable en tête ou en fin de phrase), supprimable sans rendre la phrase incorrecte.",
                    },
                    {
                      title: "Complément du nom (CDN)",
                      definition:
                        "Groupe qui complète le nom noyau à l'intérieur du GN. Toujours dans le GN, non mobile.",
                      sousClasses:
                        "**Natures possibles :** GN prépositionnel · groupe infinitif prépositionnel · parfois proposition subordonnée relative",
                      exemples: [
                        "« la maison **de Pierre** » : GN prépositionnel, complément du nom « maison »",
                        "« l'envie **de partir** » : groupe infinitif prépositionnel, complément du nom « envie »",
                        "« le livre **que je lis** » : proposition subordonnée relative, expansion du nom « livre »",
                      ],
                      piege: "Ne pas confondre avec le complément circonstanciel : « un acte **de courage** » (CDN, dans le GN) n'est pas « il agit **avec courage** » (CC, mobile). Même préposition possible : « la gare **de Paris** » (CDN) / « elle revient **de Paris** » (CC).",
                      test: "Non mobile hors du GN : « De Pierre la maison » est impossible.",
                    },
                    {
                      title: "Proposition subordonnée relative",
                      definition:
                        "Proposition introduite par un pronom relatif, qui complète un nom antécédent dans le GN et contient un verbe conjugué.",
                      sousClasses:
                        "**Pronoms relatifs introducteurs :** qui · que · dont · où · lequel et formes contractées (auquel, duquel…)",
                      exemples: [
                        "« le chien **qui aboie** » : relative introduite par « qui », expansion du nom « chien »",
                        "« le livre **que je lis** » : proposition subordonnée relative, expansion du nom « livre »",
                        "« l'ami **dont je parle** » : relative introduite par « dont », expansion du nom « ami »",
                        "« la ville **où il vit** » : proposition subordonnée relative, expansion du nom « ville »",
                        "« le sujet **auquel je pense** » : relative introduite par « auquel », expansion du nom « sujet »",
                      ],
                      piege: "Ne pas confondre la relative entière et le pronom relatif. Dans « le livre **que je lis** », l'expansion du nom « livre » est toute la proposition « que je lis ». Le mot « que », lui, est seulement le pronom relatif qui introduit cette proposition ; sa fonction à l'intérieur de la relative se travaille dans la notion 2.",
                      test: "Repérer le pronom relatif, l'antécédent (le nom complété) et le verbe conjugué de la relative.",
                    },
                  ],
                },
                {
                  type: "table",
                  title: "Tableau de synthèse : les 4 expansions en un coup d'œil",
                  headers: ["Expansion", "Nature grammaticale", "Place et ponctuation", "Test décisif", "Exemple"],
                  rows: [
                    [
                      "Épithète liée",
                      "Adjectif (ou participe employé comme adjectif)",
                      "Accolée au nom, avant ou après, sans virgule",
                      "S'accorde avec le nom ; déplaçable autour de lui, jamais hors du GN",
                      "un **beau** jardin",
                    ],
                    [
                      "Épithète détachée",
                      "Adjectif ou groupe adjectival",
                      "Séparée par une virgule, mobile dans la phrase",
                      "Supprimable et déplaçable, sans verbe d'état",
                      "**Épuisée**, elle s'endormit",
                    ],
                    [
                      "Complément du nom",
                      "GN ou groupe infinitif prépositionnel",
                      "Dans le GN, après le nom, non mobile",
                      "Introduit par une préposition ; impossible à déplacer hors du GN",
                      "la maison **de Pierre**",
                    ],
                    [
                      "Proposition subordonnée relative",
                      "Proposition (contient un verbe conjugué)",
                      "Après le nom antécédent",
                      "Introduite par un pronom relatif (qui, que, dont, où, lequel…)",
                      "le livre **que je lis**",
                    ],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "À distinguer aussi : l'apposition",
                  text: "Un **nom ou GN détaché** qui désigne autrement le noyau (« Paris, **capitale de la France**, attire les touristes ») est une **apposition**, pas une épithète : l'apposition est **nominale**, l'épithète détachée est **adjectivale**. Sa fonction se travaille dans la [notion 2 · Les fonctions syntaxiques](fiche:fonctions-syntaxiques).",
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Une distinction à approfondir",
                  text: "Les quatre expansions sont maintenant identifiées. La proposition subordonnée relative demande une attention supplémentaire : elle peut restreindre le sens du nom ou simplement ajouter une information.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Approfondir la relative : déterminative ou explicative",
              blocks: [
                {
                  type: "paragraph",
                  text: "Une proposition subordonnée relative peut jouer deux rôles très différents selon qu'elle est ou non encadrée par des virgules. La distinction change le **sens** de la phrase, et le jury y est attentif.",
                },
                {
                  type: "table",
                  headers: ["Type", "Ponctuation", "Rôle", "Suppression", "Exemple"],
                  rows: [
                    [
                      "Proposition subordonnée relative déterminative",
                      "Pas de virgule",
                      "Sélectionne une partie des êtres ou des objets désignés par le nom",
                      "Non : sans elle, on ne désigne plus le même ensemble",
                      "« Les candidats **qui ont obtenu la moyenne** sont admis. » Seuls certains candidats sont admis.",
                    ],
                    [
                      "Proposition subordonnée relative explicative",
                      "Entre virgules",
                      "Ajoute une information sur un être ou un objet déjà clairement identifié",
                      "Oui : le nom désigne toujours la même personne ou la même chose",
                      "« Mon frère, **qui habite à Lyon**, arrive demain. » « Mon frère » est déjà identifié ; la relative ajoute un renseignement.",
                    ],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ Pour distinguer les deux relatives, observez la ponctuation et surtout le sens : la déterminative restreint l'ensemble désigné ; l'explicative ajoute une information.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · Complément du nom confondu avec complément circonstanciel",
              badge: "Très fréquent",
              faux: "Dans « un acte de courage », « de courage » est analysé comme CC de manière.",
              vrai: "« de courage » est le **complément du nom « acte »** : il est à l'intérieur du GN et n'est pas mobile.",
              methode:
                "Test : déplacer en tête de phrase. « De courage un acte » est impossible, donc CDN. « Avec courage, il agit » fonctionne, donc CC.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°2 · Épithète détachée confondue avec attribut du sujet",
              badge: "Très fréquent",
              faux: "Dans « Seule, elle pleurait », « Seule » est analysé comme attribut du sujet.",
              vrai: "Il n'y a pas de verbe d'état : « Seule » est une **épithète détachée** du sujet « elle ».",
              methode:
                "L'attribut du sujet exige : sujet + verbe d'état (être, sembler, paraître…) + adjectif. Sans verbe d'état, c'est une épithète (liée ou détachée).",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 · Relative déterminative et explicative traitées comme équivalentes",
              badge: "Piège de sens",
              faux: "Considérer « Les élèves qui travaillent réussissent » et « Les élèves, qui travaillent, réussissent » comme deux phrases de même sens.",
              vrai: "Sans virgule : relative **déterminative** (seulement certains élèves). Entre virgules : relative **explicative** (tous les élèves).",
              methode: "Test : supprimer la relative. Le sens change, donc déterminative ; le sens se conserve, donc explicative.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 1 (maternelle) :** aucune terminologie, mais on enrichit déjà l'oral. L'enfant passe de « le chien » à « le gros chien noir » : c'est le tout premier geste d'expansion du nom, par imitation et reformulation.\n\n**Cycle 2 (CP-CE2) :** les élèves repèrent le nom et son déterminant, puis enrichissent peu à peu le groupe nominal (ajouter un adjectif pour préciser : « un chat » → « un gros chat noir »). On commence à manipuler : ajouter, retirer, remplacer un mot du GN.\n\n**Cycle 3 (CM1-6e) :** le groupe nominal devient un objet d'étude à part entière. On identifie le nom noyau, on ajoute ou on supprime des expansions (adjectif, complément du nom), on manipule des relatives simples. Les attendus par cycle figurent dans les [programmes de français en vigueur](https://eduscol.education.fr/137/cycle-2-et-cycle-3).\n\n**Ce que vous devez savoir dire :** « Le groupe nominal se construit autour d'un nom noyau. On apprend d'abord à le repérer, puis à l'enrichir et à l'alléger par manipulation, avant de nommer les expansions. C'est une compétence d'expansion et de réduction de phrase, travaillée dès la maternelle et nommée à partir du cycle 3. »",
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
              text: "Deux situations reviennent dans cette notion : analyser la structure d'un groupe nominal et déterminer si une proposition subordonnée relative est déterminative ou explicative.",
            },
            {
              type: "rappelExpress",
              title: "Rappel express : le réflexe avant de commencer",
              blocks: [
                {
                  type: "paragraph",
                  text: "**Repérer le noyau d'abord.**\nLe nom noyau est le mot central du GN. Tout ce qui se rapporte à lui (déterminant, expansions) en fait partie.",
                },
                {
                  type: "formulaBlock",
                  lines: [
                    "« le vieux chat roux de ma voisine qui miaule » → noyau = chat",
                    "Expansions : « vieux » et « roux » (épithètes liées) · « de ma voisine » (CDN) · « qui miaule » (relative)",
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ Le réflexe clé : trouver le noyau, puis lister chaque expansion et lui donner sa nature (adjectif épithète, complément du nom, proposition relative).",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Analyser la structure d'un GN pas à pas",
              intro:
                "*Question typique : « Délimitez le groupe nominal, donnez son nom noyau et analysez ses expansions : <u>Le vieux chat roux de ma voisine</u> dormait sur le canapé. »*",
              steps: [
                {
                  number: "1",
                  text: "**Repérer le nom noyau** et le déterminant qui l'introduit.",
                  example: { lines: ["Dans « Le vieux chat roux de ma voisine dort sur le canapé », le groupe à analyser est construit autour du nom noyau « chat », introduit par le déterminant « le »."] },
                },
                {
                  number: "2",
                  text: "**Délimiter le GN** : tout ce qui se rapporte au noyau en fait partie, y compris les expansions placées après lui.",
                  example: { lines: ["GN entier = « le vieux chat roux de ma voisine »"] },
                },
                {
                  number: "3",
                  text: "**Lister chaque expansion et donner sa nature :** adjectif accolé (épithète liée) ? adjectif entre virgules (épithète détachée) ? groupe prépositionnel (complément du nom) ? proposition introduite par un pronom relatif (relative) ?",
                  example: {
                    lines: [
                      "« vieux », « roux » → épithètes liées (adjectifs qualificatifs)",
                      "« de ma voisine » → complément du nom (GN prépositionnel)",
                    ],
                  },
                },
                {
                  number: "💡",
                  text: "**Lever les deux confusions classiques :** pour une épithète détachée, vérifier l'absence de verbe d'état (sinon c'est un attribut, [notion 2](fiche:fonctions-syntaxiques)). Pour un groupe prépositionnel, tester la mobilité (complément du nom dans le GN, ou complément circonstanciel mobile).",
                  warn: "⚠️ Une analyse se justifie toujours par un test (mobilité, suppression, accord), jamais « au feeling ».",
                },
                {
                  number: "✅",
                  text: "**Réponse attendue (formulation modèle) :** « Le groupe nominal est *Le vieux chat roux de ma voisine* ; son **nom noyau** est *chat*, introduit par le déterminant *le*. Il est enrichi par trois expansions : *vieux* et *roux*, **adjectifs qualificatifs, épithètes liées** du nom *chat* ; *de ma voisine*, **complément du nom** (groupe nominal prépositionnel, non mobile hors du GN). »",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Dans la phrase « Une femme <u>élégante</u> traversa la rue », délimitez le GN qui contient le groupe souligné, donnez son noyau et la nature de l'expansion.",
              correction: [
                { type: "line", text: "GN = « une femme élégante » ; noyau = « femme » ; « élégante » → adjectif qualificatif, épithète liée du nom « femme »." },
                {
                  type: "note",
                  text: "Trouvé du premier coup ? Vous maîtrisez cette méthode, passez à la suite. Sinon, relisez l'étape 3 ci-dessus.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Déterminer le type d'une relative (déterminative ou explicative)",
              intro:
                "*Question typique : « La proposition subordonnée relative soulignée est-elle déterminative ou explicative ? Justifiez : Les élèves <u>qui travaillent</u> réussissent. »*",
              steps: [
                {
                  number: "1",
                  text: "**Repérer la relative et son antécédent** (le nom qu'elle complète).",
                  example: { lines: ["« Les élèves qui travaillent réussissent » → antécédent = « élèves »"] },
                },
                {
                  number: "2",
                  text: "**Regarder la ponctuation :** la relative est-elle encadrée par des virgules ?",
                  example: { lines: ["Pas de virgule ici → probablement déterminative"] },
                },
                {
                  number: "💡",
                  text: "**Confirmer par le test de suppression :** supprimer la relative. Si le sens change, elle est déterminative ; s'il se conserve, elle est explicative.",
                  example: {
                    lines: ["« Les élèves réussissent » : le sens change (tous ? certains ?) → relative déterminative"],
                  },
                },
                {
                  number: "✅",
                  text: "**Réponse attendue (formulation modèle) :** « La relative *qui travaillent* n'est pas encadrée par des virgules, et sa suppression change le sens (*Les élèves réussissent* ne désigne plus le même ensemble) : c'est une **proposition subordonnée relative déterminative**, qui restreint l'ensemble des élèves à ceux qui travaillent. »",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "« Madame Bovary, que Flaubert écrivit en 1857, est un chef-d'œuvre. » La relative est-elle déterminative ou explicative ?",
              correction: [
                { type: "line", text: "Entre virgules, supprimable sans changer le sens (« Madame Bovary est un chef-d'œuvre » reste vrai, l'œuvre est déjà identifiée) → relative **explicative**." },
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
              title: "Le groupe nominal et ses expansions",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_GROUPE_NOMINAL_EXPANSIONS,
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
              title: "Le groupe nominal et ses expansions",
              copies: COPIES_GROUPE_NOMINAL_EXPANSIONS,
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
              center: { title: "Le groupe nominal", subtitle: "Structure et expansions" },
              branches: [
                {
                  title: "Le GN",
                  lines: ["Déterminant + nom noyau", "Noyau = le mot central", "GN minimal vs GN étendu"],
                  variant: "blue",
                },
                {
                  title: "Les 4 expansions",
                  lines: ["Épithète liée / détachée", "Complément du nom (CDN)", "Proposition relative"],
                  variant: "blue",
                },
                {
                  title: "Déterminative / explicative",
                  lines: ["Sans virgule = restreint", "Entre virgules = ajoute", "Test : suppression"],
                  variant: "green",
                },
                {
                  title: "Pièges classiques",
                  lines: ["CDN ≠ CC (mobilité)", "Épithète détachée ≠ attribut", "Déterminative ≠ explicative"],
                  variant: "yellow",
                },
                {
                  title: "Renvoi",
                  lines: ["Fonction du pronom relatif", "(dépronominalisation)", "→ notion 2 (fonctions)"],
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
