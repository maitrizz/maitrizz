import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "g1", label: "Je sais délimiter un groupe nominal et identifier son nom noyau (et le déterminant qui l'introduit)" },
  { id: "g2", label: "Je distingue le GN minimal (déterminant + nom noyau) du GN étendu par des expansions optionnelles" },
  { id: "g3", label: "Je connais les 4 expansions du nom (épithète liée, épithète détachée, complément du nom, proposition subordonnée relative) et leur nature" },
  { id: "g4", label: "Je distingue l'épithète liée de l'épithète détachée, et l'épithète détachée de l'attribut du sujet (présence ou non d'un verbe d'état)" },
  { id: "g5", label: "Je distingue le complément du nom (dans le GN, non mobile) du complément circonstanciel (mobile et supprimable)" },
  { id: "g6", label: "Je distingue la relative déterminative (sans virgule, restreint le sens) de la relative explicative (entre virgules, ajoute une information)" },
  { id: "g7", label: "Je sais que la place de l'adjectif épithète peut changer le sens (un grand homme / un homme grand)" },
];

export const ficheGroupeNominalExpansions: Fiche = {
  slug: "groupe-nominal-expansions",
  matiere: "francais",
  numero: 3,
  partie: "Partie 1 : Grammaire de la phrase",
  title: "Le groupe nominal et ses expansions",
  subtitle:
    "Analyser la structure interne du GN : épithète, complément du nom, proposition subordonnée relative",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 + lycée · BOEN n°1 du 22 janvier 2019", variant: "info" },
  ],
  metaTitle: "Le groupe nominal et ses expansions (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur le groupe nominal et ses expansions : nom noyau, déterminant, GN minimal et GN étendu, les 4 expansions (épithète liée, épithète détachée, complément du nom, proposition subordonnée relative), relative déterminative ou explicative, place de l'adjectif épithète. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                  title: "Le groupe nominal et son noyau",
                  text: "Un GN s'organise autour d'un nom noyau, précédé d'un déterminant. C'est le point de départ de toute analyse.",
                },
                {
                  number: "②",
                  title: "Les 4 expansions du nom",
                  text: "Épithète liée, épithète détachée, complément du nom, proposition subordonnée relative : elles enrichissent le nom noyau.",
                },
                {
                  number: "③",
                  title: "Relative déterminative ou explicative",
                  text: "Sans virgule, la relative restreint le sens du nom ; entre virgules, elle ajoute une information. Le sens change.",
                },
                {
                  number: "④",
                  title: "La place de l'adjectif épithète",
                  text: "Avant ou après le nom, certains adjectifs changent de sens : un grand homme n'est pas un homme grand.",
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
              text: "Analyser un groupe nominal, c'est repérer son noyau (le nom central), puis lister ce qui l'enrichit. Cette fiche porte sur la **structure du GN** et la **nature de ses expansions**. La fonction des mots dans la phrase est traitée dans la notion 2 (fonctions syntaxiques) : on y renvoie quand c'est utile.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Qu'est-ce qu'un groupe nominal ?",
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
              title: "Les 4 expansions du nom",
              blocks: [
                {
                  type: "paragraph",
                  text: "Une **expansion** est un mot ou un groupe qui complète le nom noyau à l'intérieur du GN. On en distingue quatre, qu'il faut savoir reconnaître et nommer par leur nature.",
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
                        "**Natures possibles :** adjectif qualificatif · participe passé employé comme adjectif · participe présent employé comme adjectif (adjectif verbal)",
                      exemples: [
                        "« un **beau** jardin » : adjectif qualificatif, épithète liée du nom « jardin »",
                        "« les yeux **baissés** » : participe passé employé comme adjectif, épithète liée du nom « yeux »",
                      ],
                      piege:
                        "Certains adjectifs changent de sens selon leur place : « un **grand** homme » (remarquable) n'est pas « un homme **grand** » (de haute taille). Voir l'étape ④.",
                      test: "Déplaçable autour du nom, mais jamais hors du GN ; s'accorde en genre et en nombre avec le nom.",
                    },
                    {
                      title: "Épithète détachée (apposée)",
                      definition:
                        "Adjectif ou groupe adjectival séparé du nom par une virgule, mobile dans la phrase. Il se rapporte au nom (ou au pronom) sans verbe d'état.",
                      sousClasses:
                        "**Natures possibles :** adjectif qualificatif · groupe adjectival · participe passé · participe présent",
                      exemples: [
                        "« **Épuisée**, elle s'endormit » : adjectif qualificatif, épithète détachée du sujet « elle »",
                        "« Une femme passa, **tenant** par la main un enfant » : participe présent, épithète détachée (apposée) du nom « femme »",
                      ],
                      piege:
                        "Sans verbe d'état entre le nom et l'adjectif, ce n'est jamais un attribut du sujet : « **Seule**, elle pleurait » est une épithète détachée, pas un attribut.",
                      test: "Entre virgules, mobile (déplaçable en tête ou en fin de phrase), supprimable sans rendre la phrase incorrecte.",
                    },
                    {
                      title: "Complément du nom (CDN)",
                      definition:
                        "Groupe qui complète le nom noyau à l'intérieur du GN. Toujours dans le GN, non mobile.",
                      sousClasses:
                        "**Natures possibles :** GN prépositionnel (de, à, en, pour…) · groupe infinitif prépositionnel · parfois une proposition subordonnée relative",
                      exemples: [
                        "« la maison **de Pierre** » : GN prépositionnel, complément du nom « maison »",
                        "« l'envie **de partir** » : groupe infinitif prépositionnel, complément du nom « envie »",
                      ],
                      piege:
                        "Ne pas confondre avec le complément circonstanciel : « un acte **de courage** » (CDN, dans le GN) n'est pas « il agit **avec courage** » (CC, mobile). Même préposition possible : « la gare **de Paris** » (CDN) / « elle revient **de Paris** » (CC).",
                      test: "Non mobile hors du GN : « De Pierre la maison » est impossible.",
                    },
                    {
                      title: "Proposition subordonnée relative",
                      definition:
                        "Proposition introduite par un pronom relatif, qui complète un nom antécédent dans le GN et contient un verbe conjugué.",
                      sousClasses:
                        "**Pronoms relatifs introducteurs :** qui · que · dont · où · lequel (et formes contractées : auquel, duquel…)",
                      exemples: [
                        "« le livre **que je lis** » : proposition subordonnée relative, expansion du nom « livre »",
                        "« la ville **où il vit** » : proposition subordonnée relative, expansion du nom « ville »",
                      ],
                      piege:
                        "Le pronom relatif a une **nature** stable (pronom relatif). Sa **fonction** à l'intérieur de la relative (sujet, COD, COI, CDN, complément circonstanciel) s'obtient par dépronominalisation : c'est une question de fonctions, traitée dans la notion 2.",
                      test: "Repérer le pronom relatif, l'antécédent (le nom complété) et le verbe conjugué de la relative.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Les expansions disent **comment le nom est enrichi** : c'est leur nature qui nous occupe ici. Pour analyser le **rôle d'un pronom relatif** dans la relative (par exemple « dont » = COI ou CDN), on dépronominalise, et cela relève de l'analyse des fonctions (notion 2).",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Relative déterminative ou explicative",
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
                      "Déterminative",
                      "Pas de virgule",
                      "Restreint le sens du nom (identifie parmi plusieurs)",
                      "Non : la supprimer change le sens",
                      "« Les élèves **qui travaillent** réussissent » (pas tous les élèves)",
                    ],
                    [
                      "Explicative",
                      "Entre virgules",
                      "Ajoute une information sur un nom déjà identifié",
                      "Oui : la phrase reste vraie sans elle",
                      "« Les élèves, **qui travaillent**, réussissent » (tous les élèves)",
                    ],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ Test décisif : **supprimer la relative**. Si le sens de la phrase change, elle est **déterminative**. S'il se conserve, elle est **explicative**.",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "La place de l'adjectif épithète peut changer le sens",
              blocks: [
                {
                  type: "paragraph",
                  text: "Pour beaucoup d'adjectifs, la place (avant ou après le nom) est neutre. Mais certains adjectifs **changent de sens** selon leur position : c'est un classique de l'analyse littéraire.",
                },
                {
                  type: "table",
                  headers: ["Adjectif", "Avant le nom", "Après le nom"],
                  rows: [
                    ["grand", "un **grand** homme (remarquable)", "un homme **grand** (de haute taille)"],
                    ["ancien", "un **ancien** élève (autrefois élève)", "un meuble **ancien** (d'époque)"],
                    ["certain", "un **certain** charme (vague, indéfini)", "une chose **certaine** (sûre)"],
                    ["propre", "ma **propre** maison (à moi)", "une maison **propre** (nette)"],
                    ["brave", "un **brave** homme (bon, honnête)", "un homme **brave** (courageux)"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  text: "À surveiller aussi : **seul, pauvre, simple, cher, même, nouveau**. Devant un extrait littéraire, se demander si la place de l'adjectif porte un sens particulier.",
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
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°4 · La place de l'adjectif épithète considérée comme toujours neutre",
              badge: "Culture littéraire",
              faux: "Penser que « un grand homme » et « un homme grand » disent la même chose.",
              vrai: "Certains adjectifs changent de sens selon leur position : « un **grand** homme » (remarquable) n'est pas « un homme **grand** » (de haute taille).",
              methode: "Pour grand, ancien, certain, propre, brave, seul, pauvre, simple, cher : vérifier le sens selon que l'adjectif précède ou suit le nom.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 2 (CP-CE2) :** les élèves repèrent le nom et son déterminant, puis enrichissent peu à peu le groupe nominal (ajouter un adjectif pour préciser : « un chat » → « un gros chat noir »).\n\n**Cycle 3 :** le groupe nominal devient un objet d'étude à part entière. On identifie le nom noyau, on ajoute ou on supprime des expansions (adjectif, complément du nom), on manipule des relatives simples.\n\n**Ce que vous devez savoir dire :** « Le groupe nominal se construit autour d'un nom noyau. On apprend d'abord à le repérer, puis à l'enrichir et à l'alléger par manipulation, avant de nommer les expansions. C'est une compétence d'expansion et de réduction de phrase, travaillée dès le cycle 2. »",
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
              text: "Analyser la structure d'un GN, déterminer le type d'une relative : ce sont les deux situations qui reviennent sur cette notion. Chacune se termine par un checkpoint pour avancer en confiance.",
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
                "**Question typique :** « Délimitez le GN, donnez son noyau et analysez ses expansions. »\nOn part du noyau, puis on examine ce qui l'entoure.",
              steps: [
                {
                  number: "1",
                  text: "**Repérer le nom noyau** et le déterminant qui l'introduit.",
                  example: { lines: ["« le vieux chat roux de ma voisine » → noyau = chat, déterminant = le"] },
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
                  text: "**Lever les deux confusions classiques :** pour une épithète détachée, vérifier l'absence de verbe d'état (sinon c'est un attribut, notion 2). Pour un groupe prépositionnel, tester la mobilité (complément du nom dans le GN, ou complément circonstanciel mobile).",
                  warn: "⚠️ Une analyse se justifie toujours par un test (mobilité, suppression, accord), jamais « au feeling ».",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Délimitez le GN, donnez le noyau et la nature de l'expansion : « une femme <u>élégante</u> ».",
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
                "**Question typique :** « La relative soulignée est-elle déterminative ou explicative ? »\nLa ponctuation oriente, le test de suppression tranche.",
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
                  objectifId: "g3",
                  question: "Quelles sont les 4 expansions du nom ?",
                  options: [
                    "Épithète liée, épithète détachée, complément du nom, proposition subordonnée relative",
                    "Sujet, COD, COI, complément circonstanciel",
                    "Nom, déterminant, adjectif, pronom",
                    "Déterminant, noyau, préposition, adverbe",
                  ],
                  correctIndex: 0,
                  explanation:
                    "Les expansions enrichissent le nom noyau : l'épithète (liée ou détachée), le complément du nom et la proposition subordonnée relative.",
                },
                {
                  objectifId: "g1",
                  question: "Dans « le vieux chat roux de ma voisine », quel est le nom noyau ?",
                  options: ["vieux", "chat", "voisine", "roux"],
                  correctIndex: 1,
                  explanation:
                    "« chat » est le nom central du GN ; « vieux », « roux » et « de ma voisine » sont ses expansions, « voisine » étant le noyau du GN inclus dans le complément du nom.",
                },
                {
                  objectifId: "g4",
                  question: "Dans « Seule, elle pleurait », quelle est la fonction de « Seule » ?",
                  options: ["Attribut du sujet", "Épithète détachée du sujet « elle »", "Épithète liée", "Apposition nominale"],
                  correctIndex: 1,
                  explanation:
                    "Il n'y a pas de verbe d'état entre « elle » et « Seule » : c'est une épithète détachée, pas un attribut du sujet.",
                },
                {
                  objectifId: "g5",
                  question: "Dans « un acte de courage », quelle est la fonction de « de courage » ?",
                  options: ["CC de manière", "Complément du nom « acte »", "COI", "Apposition"],
                  correctIndex: 1,
                  explanation:
                    "« de courage » est à l'intérieur du GN et n'est pas mobile (« De courage un acte » est impossible) : c'est un complément du nom.",
                },
                {
                  objectifId: "g6",
                  question: "Dans « Les élèves qui travaillent réussissent », la relative « qui travaillent » est :",
                  options: [
                    "Explicative (entre virgules)",
                    "Déterminative (sans virgule, restreint le sens)",
                    "Une apposition",
                    "Un complément du nom infinitif",
                  ],
                  correctIndex: 1,
                  explanation:
                    "Pas de virgule : la relative restreint le sens (seulement les élèves qui travaillent). La supprimer change le sens, donc déterminative.",
                },
                {
                  objectifId: "g7",
                  question: "« un grand homme » et « un homme grand » : que peut-on dire ?",
                  options: [
                    "C'est strictement la même chose",
                    "Le sens change selon la place de l'adjectif",
                    "« grand » est un adverbe dans le second cas",
                    "« grand » est un déterminant",
                  ],
                  correctIndex: 1,
                  explanation:
                    "« un grand homme » désigne un homme remarquable ; « un homme grand » désigne un homme de haute taille. La place de l'épithète change le sens.",
                },
                {
                  objectifId: "g3",
                  question: "Dans « le livre que je lis », « que je lis » est :",
                  options: [
                    "Un complément du nom (GN prépositionnel)",
                    "Une proposition subordonnée relative",
                    "Une épithète détachée",
                    "Une apposition",
                  ],
                  correctIndex: 1,
                  explanation:
                    "« que je lis » est introduite par le pronom relatif « que », contient un verbe conjugué et complète l'antécédent « livre » : c'est une proposition subordonnée relative.",
                },
                {
                  objectifId: "g2",
                  question: "Qu'est-ce qu'un GN minimal ?",
                  options: [
                    "Un nom employé seul",
                    "Un déterminant et un nom noyau",
                    "Un nom et toutes ses expansions",
                    "Un déterminant, un adjectif et un nom",
                  ],
                  correctIndex: 1,
                  explanation:
                    "Le GN minimal se réduit au déterminant et au nom noyau (« le chat »). Les expansions sont optionnelles.",
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
              sub: "Délimiter le GN, repérer les expansions, phrases simples",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 1 : Délimiter le GN et son noyau",
              question:
                "Délimitez le GN et identifiez son nom noyau :\na) « Le vieux chat roux de ma voisine dormait au soleil. »   b) « Une femme élégante portait un manteau en laine bleue. »   c) « Les enfants qui jouent dans la cour sont bruyants. »   d) « Son envie de partir l'envahissait. »",
              correction: [
                { type: "line", label: "a)", text: "GN = « Le vieux chat roux de ma voisine » ; noyau = **chat**" },
                { type: "line", label: "b)", text: "GN1 = « Une femme élégante » (noyau = **femme**) ; GN2 = « un manteau en laine bleue » (noyau = **manteau**)" },
                { type: "line", label: "c)", text: "GN = « Les enfants qui jouent dans la cour » ; noyau = **enfants**" },
                { type: "line", label: "d)", text: "GN = « Son envie de partir » ; noyau = **envie**" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 2 : Classer chaque expansion",
              objectifTag: "Les 4 expansions",
              question:
                "Classez chaque expansion soulignée : épithète liée · épithète détachée · complément du nom · proposition relative.\na) « un <u>beau</u> jardin »   b) « la maison <u>de Pierre</u> »   c) « le livre <u>que je lisais</u> »   d) « <u>Épuisée</u>, elle s'endormit »   e) « les jours <u>passés</u> »   f) « l'envie <u>de voyager</u> »",
              correction: [
                { type: "line", label: "a)", text: "**beau** → épithète liée (adjectif qualificatif, accolé avant le nom)" },
                { type: "line", label: "b)", text: "**de Pierre** → complément du nom (GN prépositionnel, dans le GN, non mobile)" },
                { type: "line", label: "c)", text: "**que je lisais** → proposition subordonnée relative (introduite par « que »)" },
                { type: "line", label: "d)", text: "**Épuisée** → épithète détachée (adjectif séparé par une virgule, mobile)" },
                { type: "line", label: "e)", text: "**passés** → épithète liée (participe passé employé comme adjectif)" },
                { type: "line", label: "f)", text: "**de voyager** → complément du nom (groupe infinitif prépositionnel, complète « envie »)" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 3 : Relever toutes les expansions",
              question:
                "Relevez toutes les expansions du nom noyau et donnez leur nature :\na) « le vieux chat roux de ma voisine qui ronronne »   b) « une envie soudaine de partir loin »   c) « les longues chevauchées silencieuses dans les bois »",
              correction: [
                {
                  type: "line",
                  label: "a)",
                  text: "Noyau : **chat**. « vieux » → épithète liée (avant) ; « roux » → épithète liée (après) ; « de ma voisine » → complément du nom ; « qui ronronne » → proposition subordonnée relative.",
                },
                {
                  type: "line",
                  label: "b)",
                  text: "Noyau : **envie**. « soudaine » → épithète liée ; « de partir loin » → complément du nom (groupe infinitif prépositionnel).",
                },
                {
                  type: "line",
                  label: "c)",
                  text: "Noyau : **chevauchées**. « longues » → épithète liée (avant) ; « silencieuses » → épithète liée (après) ; « dans les bois » → complément du nom ou CC de lieu selon la lecture (à justifier).",
                },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : Analyser",
              sub: "Réponse rédigée, justification exigée, cas limites",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 4 : Vrai ou faux, justifiez",
              question:
                "Vrai ou faux, justifiez en une phrase :\na) Dans « un homme grand », « grand » est épithète liée.\nb) Dans « un grand homme », « grand » signifie la même chose qu'en a).\nc) « Les étudiants qui travaillent réussissent » contient une relative explicative.\nd) Dans « Les étudiants, qui travaillent, réussissent », la relative est entre virgules, donc déterminative.",
              correction: [
                { type: "line", label: "a)", text: "**Vrai.** « grand » est une épithète liée du nom « homme », placée après lui." },
                { type: "line", label: "b)", text: "**Faux.** « un grand homme » (avant) = homme remarquable ; « un homme grand » (après) = homme de haute taille. La place change le sens." },
                { type: "line", label: "c)", text: "**Faux.** Pas de virgule, donc relative déterminative (elle restreint : seulement ceux qui travaillent)." },
                { type: "line", label: "d)", text: "**Faux.** Les virgules signalent une relative explicative, jamais déterminative." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 5 : Complément du nom ou complément circonstanciel ?",
              objectifTag: "CDN / CC",
              question:
                "Le groupe est-il une expansion du nom (CDN) ou un complément circonstanciel (CC) ? Justifiez par la mobilité et la suppression.\na) « un acte <u>de bravoure</u> » vs « Il agit <u>avec bravoure</u>. »   b) « la gare <u>de Lyon</u> » vs « Elle revient <u>de Lyon</u>. »   c) « une maison <u>en pierre</u> » vs « Il travaille <u>en silence</u>. »",
              correction: [
                { type: "line", label: "a)", text: "« de bravoure » → complément du nom « acte » (non mobile : « De bravoure un acte » impossible) / « avec bravoure » → CC de manière (mobile : « Avec bravoure, il agit »)." },
                { type: "line", label: "b)", text: "« de Lyon » (gare) → complément du nom « gare » (identifie la gare, non mobile) / « de Lyon » (revient) → CC de lieu (mobile : « De Lyon, elle revient »)." },
                { type: "line", label: "c)", text: "« en pierre » → complément du nom « maison » (matière, non mobile) / « en silence » → CC de manière (mobile : « En silence, il travaille »)." },
                { type: "note", text: "⚠️ Même préposition possible des deux côtés : seul le test de mobilité tranche." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 6 : La place de l'adjectif change le sens",
              objectifTag: "Place de l'épithète",
              question:
                "Expliquez comment le sens change selon la place de l'adjectif, et proposez une phrase pour chaque cas :\na) « ancien »   b) « certain »   c) « propre »   d) « brave »",
              correction: [
                { type: "line", label: "a)", text: "« un **ancien** professeur » (qui l'était autrefois) n'est pas « un professeur **ancien** » (très âgé)." },
                { type: "line", label: "b)", text: "« un **certain** charme » (indéfini, vague) n'est pas « une chose **certaine** » (assurée, sûre)." },
                { type: "line", label: "c)", text: "« ma **propre** maison » (qui m'appartient) n'est pas « une maison **propre** » (nette, non sale)." },
                { type: "line", label: "d)", text: "« un **brave** homme » (bon, honnête) n'est pas « un homme **brave** » (courageux)." },
                { type: "note", text: "💡 À retenir : grand, ancien, certain, propre, brave, seul, pauvre, simple, cher changent de sens selon leur position." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 7 : Déterminative ou explicative ?",
              objectifTag: "Type de relative",
              question:
                "Indiquez le type de relative (déterminative ou explicative) et justifiez par le test de suppression :\na) « Les élèves qui ont travaillé ont réussi. »   b) « Les élèves, qui avaient tous bien travaillé, ont réussi. »   c) « Le roman que j'ai lu était passionnant. »   d) « Madame Bovary, que Flaubert écrivit en 1857, est un chef-d'œuvre. »",
              correction: [
                { type: "line", label: "a)", text: "**Déterminative** (pas de virgule). Suppression : « Les élèves ont réussi » change de sens (tous ? certains ?)." },
                { type: "line", label: "b)", text: "**Explicative** (entre virgules). Suppression : « Les élèves ont réussi » garde le sens (tous)." },
                { type: "line", label: "c)", text: "**Déterminative.** Suppression : « Le roman était passionnant » fait perdre l'identité du roman." },
                { type: "line", label: "d)", text: "**Explicative.** Suppression : « Madame Bovary est un chef-d'œuvre » garde le sens (l'œuvre est déjà identifiée)." },
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
              title: "Exercice 8 · Extrait littéraire : Émile Zola",
              enonce:
                "« Une femme passa, tenant par la main un petit garçon d'une dizaine d'années. Elle se hâtait, les yeux baissés, pressée d'atteindre sa maison avant la nuit. »\n*(Émile Zola, Germinal, 1885)*",
              question:
                "Pour chaque GN souligné, identifiez le noyau et analysez ses expansions : « <u>un petit garçon d'une dizaine d'années</u> » · « <u>les yeux baissés</u> » · « <u>sa maison</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["GN", "Noyau", "Expansions"],
                  rows: [
                    ["un petit garçon d'une dizaine d'années", "garçon", "« petit » → épithète liée · « d'une dizaine d'années » → complément du nom (GN prépositionnel)"],
                    ["les yeux baissés", "yeux", "« baissés » → épithète liée (participe passé employé comme adjectif)"],
                    ["sa maison", "maison", "Aucune expansion : GN minimal (déterminant + noyau)"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 9 · Extrait littéraire : Gustave Flaubert",
              enonce:
                "« Elle rêvait des contrées lointaines, des rivages lumineux, des palais de marbre où des fontaines jaillissaient sous des ciels toujours bleus. »\n*(Gustave Flaubert, Madame Bovary, 1857)*",
              question:
                "Analysez la structure interne de chaque GN souligné : « <u>des contrées lointaines</u> » · « <u>des palais de marbre où des fontaines jaillissaient</u> » · « <u>des ciels toujours bleus</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["GN", "Noyau", "Expansions"],
                  rows: [
                    ["des contrées lointaines", "contrées", "« lointaines » → épithète liée (après le noyau)"],
                    ["des palais de marbre où des fontaines jaillissaient", "palais", "« de marbre » → complément du nom (matière) · « où des fontaines jaillissaient » → proposition subordonnée relative déterminative"],
                    ["des ciels toujours bleus", "ciels", "« bleus » → épithète liée · « toujours » → adverbe qui modifie l'épithète « bleus », à l'intérieur de l'expansion"],
                  ],
                },
                { type: "note", text: "💡 « où » est un pronom relatif. Sa fonction dans la relative (CC de lieu) s'analyse par dépronominalisation : voir la notion 2 (fonctions)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 10 · Extrait littéraire : Guy de Maupassant",
              enonce:
                "« Il aimait les promenades solitaires dans les bois, les longues chevauchées silencieuses, et les soirs d'automne, quand il rentrait seul. »\n*(Guy de Maupassant, Bel-Ami, 1885)*",
              question:
                "Analysez la structure interne de chaque GN souligné : « <u>les promenades solitaires dans les bois</u> » · « <u>les longues chevauchées silencieuses</u> » · « <u>les soirs d'automne</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["GN", "Noyau", "Expansions"],
                  rows: [
                    ["les promenades solitaires dans les bois", "promenades", "« solitaires » → épithète liée · « dans les bois » → complément du nom ou CC de lieu (les deux lectures sont défendables, à justifier)"],
                    ["les longues chevauchées silencieuses", "chevauchées", "« longues » → épithète liée (avant) · « silencieuses » → épithète liée (après)"],
                    ["les soirs d'automne", "soirs", "« d'automne » → complément du nom (GN prépositionnel, caractérise les soirs)"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 11 · Extrait littéraire : Marguerite Yourcenar",
              enonce:
                "« À seize ans, j'ai vu se rouvrir les portes qui me séparaient du monde, je suis monté sur la terrasse du palais pour regarder les nuages. »\n*(Marguerite Yourcenar, Comment Wang-Fô fut sauvé, Nouvelles orientales, 1963)*",
              question:
                "Analysez la structure interne de chaque GN souligné : « <u>les portes qui me séparaient du monde</u> » · « <u>la terrasse du palais</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["GN", "Noyau", "Expansions"],
                  rows: [
                    ["les portes qui me séparaient du monde", "portes", "« qui me séparaient du monde » → proposition subordonnée relative déterminative"],
                    ["la terrasse du palais", "terrasse", "« du palais » → complément du nom (GN prépositionnel, identifie quelle terrasse)"],
                  ],
                },
                { type: "note", text: "💡 « qui » est un pronom relatif ; sa fonction dans la relative (sujet de « séparaient ») s'analyse dans la notion 2." },
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
              text: "Ces exercices reproduisent le format de la question d'étude de la langue de la Partie 1 : extrait littéraire, analyse de la nature et du rôle des groupes, formulation jury. Les exercices calqués sur des sujets récents portent le badge ✦.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 1 : Émile Zola, Germinal",
              enonce:
                "« Une femme passa, <u>tenant</u> par la main un petit garçon <u>d'une dizaine d'années</u>. Elle se hâtait, les yeux <u>baissés</u>, <u>pressée d'atteindre sa maison</u> avant la nuit. »\n*(Émile Zola, Germinal, 1885)*",
              question:
                "Précisez la nature et le rôle dans le GN : « <u>tenant</u> » · « <u>d'une dizaine d'années</u> » · « <u>baissés</u> » · « <u>pressée d'atteindre sa maison</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Mot / groupe", "Nature", "Rôle"],
                  rows: [
                    ["tenant", "Participe présent", "Épithète détachée (apposée) du nom « femme », équivaut à « qui tenait… »"],
                    ["d'une dizaine d'années", "GN prépositionnel", "Complément du nom « garçon »"],
                    ["baissés", "Participe passé employé comme adjectif", "Épithète liée du nom « yeux »"],
                    ["pressée d'atteindre sa maison", "Adjectif + groupe infinitif prépositionnel", "Épithète détachée du sujet « elle »"],
                  ],
                },
                { type: "note", text: "⚠️ « tenant » n'est pas une proposition participiale : celle-ci suppose un sujet propre, distinct de celui de la principale. Ici, « tenant » partage le sujet « femme », c'est donc un participe présent apposé (épithète détachée). À distinguer aussi du gérondif (« en tenant ») et de l'adjectif verbal accordé." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 2 : Gustave Flaubert, Madame Bovary",
              enonce:
                "« Elle rêvait des contrées <u>lointaines</u>, des rivages <u>lumineux</u>, des palais <u>de marbre</u> <u>où</u> des fontaines jaillissaient sous des ciels toujours <u>bleus</u>. »\n*(Gustave Flaubert, Madame Bovary, 1857)*",
              question: "Précisez la nature et le rôle dans le GN : « <u>lointaines</u> » · « <u>lumineux</u> » · « <u>de marbre</u> » · « <u>où</u> » · « <u>bleus</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Mot / groupe", "Nature", "Rôle"],
                  rows: [
                    ["lointaines", "Adjectif qualificatif", "Épithète liée du nom « contrées »"],
                    ["lumineux", "Adjectif qualificatif", "Épithète liée du nom « rivages »"],
                    ["de marbre", "GN prépositionnel", "Complément du nom « palais »"],
                    ["où", "Pronom relatif", "Introduit la proposition subordonnée relative, expansion du nom « palais »"],
                    ["bleus", "Adjectif qualificatif", "Épithète liée du nom « ciels »"],
                  ],
                },
                { type: "note", text: "💡 La fonction de « où » dans la relative (CC de lieu) relève de l'analyse des fonctions : voir la notion 2." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 3 : Guy de Maupassant, Bel-Ami",
              enonce:
                "« Il aimait les promenades <u>solitaires</u>, les longues chevauchées <u>silencieuses</u>, et les soirs <u>d'automne</u>, quand il sentait le vide <u>de sa vie</u> s'étendre autour de lui. »\n*(Guy de Maupassant, Bel-Ami, 1885)*",
              question: "Précisez la nature et le rôle dans le GN : « <u>solitaires</u> » · « <u>silencieuses</u> » · « <u>d'automne</u> » · « <u>de sa vie</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["Mot / groupe", "Nature", "Rôle"],
                  rows: [
                    ["solitaires", "Adjectif qualificatif", "Épithète liée du nom « promenades »"],
                    ["silencieuses", "Adjectif qualificatif", "Épithète liée du nom « chevauchées »"],
                    ["d'automne", "GN prépositionnel", "Complément du nom « soirs »"],
                    ["de sa vie", "GN prépositionnel", "Complément du nom « vide »"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format concours récent",
              title: "Exercice 4 : Marguerite Yourcenar, Nouvelles orientales",
              enonce:
                "« un <u>tapis</u> dont elles savaient par cœur le <u>dessin</u> » · « les <u>provinces de l'Empire</u> »\n*(Marguerite Yourcenar, Comment Wang-Fô fut sauvé, Nouvelles orientales, 1963)*",
              question:
                "Format identique au concours · Analysez les expansions : la relative de « tapis » · « <u>de l'Empire</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["GN", "Noyau", "Expansion"],
                  rows: [
                    ["un tapis dont elles savaient par cœur le dessin", "tapis", "« dont elles savaient par cœur le dessin » → proposition subordonnée relative"],
                    ["les provinces de l'Empire", "provinces", "« de l'Empire » → complément du nom « provinces » (GN prépositionnel)"],
                  ],
                },
                { type: "note", text: "⚠️ Le pronom relatif « dont » a pour antécédent « tapis ». Sa fonction se trouve par dépronominalisation : « elles savaient par cœur le dessin **de ce tapis** », donc « dont » = complément du nom « dessin » (et non COI du verbe « savoir », qui est transitif direct). Cette analyse de fonction relève de la notion 2." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format concours récent",
              title: "Exercice 5 : Lola Lafon, Quand tu écouteras cette chanson",
              enonce:
                "« Écrire n'est pas tout à fait un choix : c'est un <u>aveu d'impuissance</u>. On écrit parce qu'on ne sait par <u>quel autre biais</u> attraper <u>le réel</u>. »\n*(Lola Lafon, Quand tu écouteras cette chanson, 2023)*",
              question: "Format identique au concours · Analysez les GN soulignés : « <u>un aveu d'impuissance</u> » · « <u>quel autre biais</u> » · « <u>le réel</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["GN", "Noyau", "Expansion / analyse"],
                  rows: [
                    ["un aveu d'impuissance", "aveu", "« d'impuissance » → complément du nom « aveu » (GN prépositionnel, précise la nature de l'aveu)"],
                    ["quel autre biais", "biais", "« quel » → déterminant interrogatif · « autre » → épithète liée"],
                    ["le réel", "réel", "Adjectif substantivé employé comme nom (le déterminant « le » confirme l'emploi nominal) : GN minimal, sans expansion"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 6 : Victor Hugo (poème)",
              enonce:
                "« Insensées choses qui nous font rêver ! Monte en moi une humble flamme. Je ne sais ce que je fais distinguer, de ces palmes qui font l'ombre à mon âme. »\n*(Victor Hugo)*",
              question:
                "Identifiez et analysez les expansions du nom dans les GN soulignés : « <u>Insensées choses qui nous font rêver</u> » · « <u>une humble flamme</u> » · « <u>ces palmes qui font l'ombre à mon âme</u> »",
              correction: [
                {
                  type: "table",
                  headers: ["GN", "Noyau", "Expansions"],
                  rows: [
                    ["Insensées choses qui nous font rêver", "choses", "« Insensées » → épithète liée (avant, féminin pluriel) · « qui nous font rêver » → proposition subordonnée relative déterminative"],
                    ["une humble flamme", "flamme", "« humble » → épithète liée (avant le nom)"],
                    ["ces palmes qui font l'ombre à mon âme", "palmes", "« qui font l'ombre à mon âme » → proposition subordonnée relative déterminative"],
                  ],
                },
                { type: "note", text: "⚠️ « Insensées » n'est pas un participe passé (il n'existe pas de verbe « insenser ») : c'est un adjectif qualificatif qui s'accorde avec « choses » (féminin pluriel)." },
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
              title: "Exercice 1 · Réponse à corriger : « dans les bois »",
              enonce:
                "Réponse d'un candidat : « **dans les bois** : complément du nom « promenades » uniquement », pour *« les promenades solitaires dans les bois »*.",
              question: "Cette analyse est-elle la seule possible ? Discutez.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Analyse présentée comme unique, alors que deux lectures sont défendables", bad: true },
                    { text: "Lecture 1 (complément du nom) : « dans les bois » précise le type de promenade, non mobile sans changer le sens" },
                    { text: "Lecture 2 (CC de lieu) : « dans les bois » précise où il se promène, mobile (« Dans les bois, il aimait les promenades »)" },
                  ],
                },
                { type: "note", text: "💡 Les deux analyses sont recevables : le jury attend que le candidat justifie son choix par un test, pas qu'il tranche sans preuve." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 2 · Réponse à corriger : « muette »",
              enonce: "Réponse d'un candidat : « **muette** : attribut du sujet « elle » », pour *« Elle souriait, muette, heureuse. »*",
              question: "Identifiez l'erreur et rédigez la réponse attendue.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Erreur : épithète détachée confondue avec attribut du sujet", bad: true },
                    { text: "L'attribut du sujet exige un verbe d'état (être, paraître, sembler…) entre le sujet et l'adjectif. Ici, « souriait » n'est pas un verbe d'état." },
                    { text: "Réponse attendue : « muette » → adjectif qualificatif, épithète détachée (apposée) du sujet « elle »" },
                  ],
                },
                { type: "note", text: "Test : y a-t-il un verbe d'état entre « elle » et « muette » ? Non, donc épithète détachée." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 3 · Réponse à corriger : relative déterminative",
              enonce: "Réponse d'un candidat : « **qui ont travaillé** : relative explicative », pour *« Les élèves qui ont travaillé ont réussi. »*",
              question: "Cette analyse est-elle correcte ? Justifiez par le test de suppression.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Erreur : déterminative confondue avec explicative", bad: true },
                    { text: "Pas de virgule encadrant la relative, donc relative déterminative" },
                    { text: "Test de suppression : « Les élèves ont réussi » change de sens (tous ? seulement ceux qui ont travaillé ?) : la suppression modifie le sens, donc déterminative" },
                    { text: "Réponse attendue : « qui ont travaillé » → proposition subordonnée relative déterminative" },
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
                  question: "Qu'est-ce qu'un GN minimal ? Quels éléments sont obligatoires ?",
                  answer:
                    "Un **GN minimal** = déterminant + nom noyau (« le chat », « une maison »). Rien d'autre n'est obligatoire : toutes les expansions sont optionnelles.",
                },
                {
                  question: "Quelles sont les 4 expansions du nom ?",
                  answer:
                    "1. **Épithète liée** : adjectif accolé au nom, sans virgule (un beau jardin).\n2. **Épithète détachée** : adjectif séparé par une virgule, mobile (Épuisée, elle s'endormit).\n3. **Complément du nom** : groupe prépositionnel dans le GN, non mobile (le livre de Pierre).\n4. **Proposition subordonnée relative** : introduite par un pronom relatif (le livre que je lis).",
                },
                {
                  question: "Comment distinguer une épithète liée d'une épithète détachée ?",
                  answer:
                    "**Liée** : accolée au nom, sans virgule, non mobile hors du GN (un beau jardin).\n**Détachée** : séparée par une virgule, mobile, supprimable (Seule, elle pleurait).",
                  astuce: "💡 La virgule et la mobilité sont les indices décisifs.",
                },
                {
                  question: "Épithète détachée ou attribut du sujet ?",
                  answer:
                    "**Attribut du sujet** : exige un verbe d'état entre le sujet et l'adjectif (« Elle est muette »).\n**Épithète détachée** : aucun verbe d'état (« Elle souriait, muette »).",
                  astuce: "⚠️ « Seule, elle pleurait » → épithète détachée, pas attribut.",
                },
                {
                  question: "Comment distinguer un complément du nom d'un complément circonstanciel ?",
                  answer:
                    "**Complément du nom** : à l'intérieur du GN, non mobile (« la gare de Lyon »).\n**Complément circonstanciel** : hors du GN, mobile et supprimable (« Elle revient de Lyon »).",
                  astuce: "💡 Test : déplacer en tête de phrase. Possible → CC. Impossible → complément du nom.",
                },
                {
                  question: "Relative déterminative ou explicative : quelle différence ?",
                  answer:
                    "**Déterminative** : pas de virgule, restreint le sens du nom, non supprimable sans changer le sens (« Les élèves qui travaillent réussissent »).\n**Explicative** : entre virgules, ajoute une information, supprimable (« Les élèves, qui travaillent, réussissent »).",
                },
                {
                  question: "La place de l'adjectif épithète change-t-elle le sens ?",
                  answer:
                    "Oui pour certains adjectifs : un **grand** homme (remarquable) n'est pas un homme **grand** (de haute taille). Idem pour ancien, certain, propre, brave, seul, pauvre, simple, cher.",
                },
                {
                  question: "Le pronom relatif : quelle nature, quelle fonction ?",
                  answer:
                    "**Nature** : pronom relatif, stable (qui, que, dont, où, lequel…).\n**Fonction** dans la relative : se trouve par dépronominalisation (qui = sujet, que = COD, dont = COI ou CDN, où = CC). C'est une question de fonctions, traitée dans la notion 2.",
                  astuce: "⚠️ Ne pas écrire « pronom relatif » comme fonction : c'est la nature.",
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
                  lines: ["CDN ≠ CC (mobilité)", "Épithète détachée ≠ attribut", "Place de l'épithète = sens"],
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
