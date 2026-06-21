import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "pp1", label: "Je sais que le participe passé employé seul s'accorde comme un adjectif : avec son nom noyau (épithète) ou avec le sujet (attribut)" },
  { id: "pp2", label: "Je sais que le participe passé employé avec l'auxiliaire être s'accorde avec le groupe sujet" },
  { id: "pp3", label: "Je sais que le participe passé employé avec l'auxiliaire avoir reste invariable, sauf si le COD est placé avant le verbe (COD antéposé)" },
  { id: "pp4", label: "Je reconnais les trois façons d'antéposer le COD : pronom personnel, pronom relatif « que », mot interrogatif ou exclamatif" },
  { id: "pp5", label: "Je sais que le participe passé reste invariable avec le pronom « en »" },
  { id: "pp6", label: "Je sais accorder le participe passé d'un verbe pronominal en analysant le rôle du pronom « se » (COD, COI, ou verbe essentiellement pronominal)" },
  { id: "pp7", label: "Je distingue l'infinitif en -er du participe passé en -é grâce au test de remplacement par un verbe en -ir" },
];

export const ficheAccordParticipePasse: Fiche = {
  slug: "accord-participe-passe",
  matiere: "francais",
  numero: 11,
  partie: "Partie 1 : Orthographe grammaticale",
  title: "L'accord du participe passé",
  subtitle:
    "PP seul, avec être, avec avoir (COD antéposé), verbes pronominaux et piège infinitif / participe passé",
  badges: [
    { label: "★★★ Très fréquent", variant: "hot" },
    { label: "Cycle 3-4 · BOEN n°1 du 22 janvier 2019", variant: "info" },
  ],
  metaTitle: "L'accord du participe passé (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur l'accord du participe passé : PP employé seul, avec être (accord avec le sujet), avec avoir (règle du COD antéposé par pronom personnel, relatif ou interrogatif), le cas du pronom « en », l'accord des verbes pronominaux (rôle du pronom « se »), et la distinction infinitif / participe passé. Arbre de décision, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
              intro:
                "L'accord du participe passé se décide en regardant comment il est employé. On suit toujours le même ordre de questions.",
              items: [
                {
                  number: "①",
                  title: "Le participe passé employé seul",
                  text: "Sans auxiliaire, il s'accorde comme un adjectif : avec son nom noyau (épithète) ou avec le sujet (attribut).",
                },
                {
                  number: "②",
                  title: "Avec l'auxiliaire être",
                  text: "Temps composés avec être et voix passive : accord avec le groupe sujet.",
                },
                {
                  number: "③",
                  title: "Avec l'auxiliaire avoir",
                  text: "Invariable par défaut. Accord avec le COD uniquement si celui-ci est placé avant le verbe.",
                },
                {
                  number: "④",
                  title: "Les verbes pronominaux",
                  text: "Tout dépend du rôle du pronom « se » : COD, COI, ou verbe essentiellement pronominal.",
                },
                {
                  number: "⑤",
                  title: "Infinitif ou participe passé ?",
                  text: "Le test de remplacement par un verbe en -ir tranche entre la forme en -er et la forme en -é.",
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
              text: "Le participe passé est une **forme non conjuguée** du verbe (voir la notion 9). Son accord dépend entièrement de son **emploi** : seul, avec être, ou avec avoir. La règle générale des accords (nom noyau donneur, groupe sujet) a été vue à la notion 10 ; ici, on l'applique au cas particulier du participe passé. La confusion entre infinitif et participe passé et les erreurs sur les pronominaux sont des fautes fréquentes et lourdement sanctionnées au concours.",
            },
            {
              type: "formulaBlock",
              title: "L'arbre de décision : 4 questions dans l'ordre",
              lines: [
                "① Le PP est-il employé seul (sans auxiliaire) ? → OUI : accord avec le nom noyau ou le sujet (règle A).",
                "② Sinon, l'auxiliaire est-il ÊTRE ? → OUI : accord avec le groupe sujet (règle B).",
                "③ Sinon (auxiliaire AVOIR), le COD est-il absent ou placé APRÈS le verbe ? → OUI : invariable (règle C).",
                "④ Sinon, le COD est placé AVANT le verbe (COD antéposé) → accord avec lui (règle D).",
              ],
              note: "Toujours identifier l'auxiliaire en premier, puis chercher le COD et sa position.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Règle A : le participe passé employé seul",
              blocks: [
                {
                  type: "paragraph",
                  text: "Sans auxiliaire, le participe passé fonctionne comme un **adjectif**. Il s'accorde en genre et en nombre avec le nom auquel il se rapporte : son nom noyau (épithète) ou le groupe sujet (attribut détaché).",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Épithète (liée ou détachée)",
                      definition: "Le PP se rapporte directement à un nom, sans verbe d'état.",
                      exemples: [
                        "« les yeux **baissés** » : épithète liée de « yeux » (masculin pluriel)",
                        "« **Épuisée**, elle s'endormit » : épithète détachée du sujet « elle » (féminin singulier)",
                      ],
                      test: "Accord avec le nom noyau, comme un adjectif qualificatif (voir la notion 10).",
                    },
                    {
                      title: "Attribut du sujet",
                      definition: "Le PP est relié au sujet par un verbe d'état (être, paraître, sembler, rester…).",
                      exemples: [
                        "« Les volets restaient **fermés** » : attribut du sujet « volets » (masculin pluriel)",
                      ],
                      test: "Accord avec le groupe sujet via le verbe d'état (voir la notion 4).",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Règle B : le participe passé avec l'auxiliaire être",
              blocks: [
                {
                  type: "paragraph",
                  text: "Avec l'auxiliaire **être**, le participe passé s'accorde avec le **groupe sujet**, en genre et en nombre. Cela concerne les temps composés conjugués avec être (passé composé, plus-que-parfait, futur antérieur…) et la voix passive (voir la notion 9).",
                },
                {
                  type: "table",
                  title: "Accord avec le groupe sujet",
                  headers: ["Phrase", "Groupe sujet", "Accord"],
                  rows: [
                    ["« Elle est partie tôt. »", "elle (féminin singulier)", "partie"],
                    ["« Les élèves sont arrivés en retard. »", "les élèves (masculin pluriel)", "arrivés"],
                    ["« Ces maisons ont été vendues. » (passif)", "ces maisons (féminin pluriel)", "vendues"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Verbes à double auxiliaire",
                  text: "**Monter, descendre, sortir, passer, rentrer, retourner** se conjuguent avec être quand ils sont intransitifs (« Elle est **montée** »), mais avec avoir quand ils ont un COD (« Elle a **monté** les valises » : COD « les valises » placé après, donc invariable). Avant d'accorder, vérifiez quel auxiliaire est employé.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Règles C et D : le participe passé avec l'auxiliaire avoir",
              blocks: [
                {
                  type: "paragraph",
                  text: "Avec l'auxiliaire **avoir**, le participe passé est **invariable par défaut** (règle C). Il ne s'accorde que dans un seul cas : quand le **COD est placé avant le verbe** (COD antéposé, règle D). C'est alors avec ce COD antéposé qu'il s'accorde.",
                },
                {
                  type: "table",
                  title: "Règle C : pas de COD, ou COD placé après → invariable",
                  headers: ["Phrase", "Pourquoi", "PP"],
                  rows: [
                    ["« Il a dormi longtemps. »", "verbe intransitif, pas de COD", "dormi (invariable)"],
                    ["« Elle a mangé les pommes. »", "COD « les pommes » placé après le verbe", "mangé (invariable)"],
                  ],
                },
                {
                  type: "paragraph",
                  text: "**Règle D : le COD antéposé.** Le COD peut se retrouver avant le verbe de trois façons. Dans les trois cas, on retrouve le nom que le COD représente, et on accorde le participe passé avec lui.",
                },
                {
                  type: "table",
                  title: "Les trois façons d'antéposer le COD",
                  headers: ["Mécanisme", "Exemple", "Accord"],
                  rows: [
                    ["Pronom personnel (le, la, les, me, te, nous, vous)", "« La lettre ? Je l'ai **envoyée**. »", "avec « la lettre » (féminin singulier)"],
                    ["Pronom relatif « que »", "« les livres **que** j'ai **lus** »", "avec l'antécédent « livres » (masculin pluriel)"],
                    ["Interrogatif / exclamatif", "« **Quelle** décision a-t-il **prise** ? »", "avec « quelle décision » (féminin singulier)"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Le cas du pronom « en »",
                  text: "Avec le pronom **en**, le participe passé reste **invariable**. « en » est un pronom adverbial à valeur partitive, pas un COD direct : « Des livres ? J'en ai **lu**. » ; « Des erreurs ? Elle en a **commis**. » Ne jamais accorder avec le nom de référence, même féminin pluriel.",
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  title: "« fait » et « laissé » suivis d'un infinitif",
                  text: "Le participe passé **fait** suivi d'un infinitif est **toujours invariable** : « la maison qu'il a **fait** construire ». Depuis les rectifications de 1990, **laissé** suivi d'un infinitif est lui aussi recommandé **invariable** : « les enfants qu'elle a **laissé** jouer ».",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Règle E : le participe passé des verbes pronominaux",
              blocks: [
                {
                  type: "paragraph",
                  text: "Pour un verbe pronominal, la clé est le **rôle du pronom réfléchi** (se, me, te…). La méthode : reformuler comme si l'auxiliaire était avoir, puis appliquer la règle du COD antéposé.",
                },
                {
                  type: "table",
                  title: "Accord selon le rôle du pronom « se »",
                  headers: ["Type", "Rôle de « se »", "Accord", "Exemple"],
                  rows: [
                    ["Réfléchi, se = COD", "COD antéposé", "avec le sujet", "« Elle s'est **lavée**. » (elle a lavé elle-même)"],
                    ["Réfléchi, se = COI", "COI", "invariable", "« Elle s'est **lavé** les mains. » (COD « les mains » après)"],
                    ["Réciproque, se = COD", "COD antéposé", "avec le sujet", "« Ils se sont **regardés**. »"],
                    ["Réciproque, se = COI", "COI", "invariable", "« Ils se sont **parlé**. » (parler à quelqu'un)"],
                    ["Essentiellement pronominal", "non analysable", "avec le sujet", "« Elle s'est **enfuie**. » ; « Ils se sont **souvenus**. »"],
                    ["Passif pronominal", "valeur passive", "avec le sujet", "« Ces livres se sont bien **vendus**. »"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  title: "Verbes dont « se » est toujours COI : PP invariable",
                  text: "Quelques verbes ont un pronom toujours COI, donc un PP toujours invariable : se parler, s'écrire, se sourire, se plaire, se déplaire, se nuire, se mentir, se ressembler, se succéder, se téléphoner, se suffire. « Ils se sont **souri**. » ; « Elles se sont **plu**. » ; « Les rois qui se sont **succédé**. »",
                },
              ],
            },
            {
              type: "subsection",
              number: "⑤",
              title: "Règle F : infinitif (-er) ou participe passé (-é) ?",
              blocks: [
                {
                  type: "paragraph",
                  text: "Les formes en **-er** (infinitif) et en **-é** (participe passé) du 1er groupe se prononcent de la même façon. Pour les distinguer, on remplace le verbe par un verbe du 2e groupe (en -ir) : si la phrase accepte **-ir**, c'est un **infinitif** (-er) ; si elle accepte **-i**, c'est un **participe passé** (-é).",
                },
                {
                  type: "table",
                  title: "Le test de remplacement par « choisir / choisi »",
                  headers: ["Phrase", "Remplacement", "Conclusion"],
                  rows: [
                    ["« Il faut manger équilibré. »", "« Il faut **choisir** » ✓", "infinitif : manger"],
                    ["« Il a bien mangé. »", "« Il a bien **choisi** » ✓", "participe passé : mangé"],
                    ["« Je l'ai entendu chanter. »", "« Je l'ai entendu **choisir** » ✓", "infinitif (subordonnée infinitive)"],
                  ],
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · Confusion infinitif / participe passé",
              badge: "Erreur très fréquente",
              faux: "« Il a décidé de allé* voir ses parents. » ; « J'ai entendu chanté* une mélodie. »",
              vrai: "Après « décider de », on attend un infinitif : « aller ». Le test confirme : « il a décidé de **choisir** » ✓ donc infinitif.",
              methode: "Devant toute forme en -er / -é, appliquer le test -ir : « choisir » (infinitif, -er) ou « choisi » (participe passé, -é).",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 · Le pronom « en »",
              badge: "Source d'erreurs",
              faux: "« Des livres, j'en ai lus*. »",
              vrai: "Avec « en », le PP est invariable : « Des livres, j'en ai **lu**. » « en » est un pronom adverbial partitif, pas un COD direct.",
              methode: "Repérer « en » avant le verbe : il bloque l'accord, quel que soit le genre ou le nombre du nom de référence.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 · Pronominaux dont « se » est COI",
              badge: "Cas difficile",
              faux: "« Elles se sont souries* en se retrouvant. »",
              vrai: "« sourire à quelqu'un » : « se » est COI, donc PP invariable : « Elles se sont **souri**. »",
              methode: "Se demander si le verbe se construit avec « à » (se parler, se sourire, se téléphoner…) : si oui, « se » est COI et le PP reste invariable.",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°4 · Verbes à double auxiliaire",
              badge: "À mémoriser",
              faux: "« Elle a montée* les valises. »",
              vrai: "Avec avoir, le COD « les valises » est placé après le verbe : PP invariable, « Elle a **monté** les valises. » Mais : « les valises qu'elle a **montées** » (COD antéposé).",
              methode: "Monter, descendre, sortir, passer, rentrer, retourner : vérifier d'abord l'auxiliaire, puis la position du COD.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 3 :** l'accord du participe passé employé avec être et l'accord de l'attribut sont introduits, en lien avec le repérage du sujet.\n\n**Cycle 4 :** l'accord avec avoir et la règle du COD antéposé sont étudiés progressivement ; les verbes pronominaux relèvent surtout du lycée et de l'expertise du professeur.\n\n**Ce que vous devez savoir dire :** « On enseigne d'abord le participe passé avec être, dont l'accord ressemble à celui de l'adjectif, avant la règle plus difficile du COD antéposé avec avoir. Le geste de relecture (repérer l'auxiliaire, puis chercher le COD) est à automatiser. »",
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
              title: "Trois démarches",
              text: "Accorder un participe passé ordinaire (l'arbre de décision), accorder le PP d'un verbe pronominal, et trancher entre infinitif et participe passé. Chacune se termine par un checkpoint.",
            },
            {
              type: "rappelExpress",
              title: "Rappel express : COD et auxiliaire",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "COD = répond à « qui ? » / « quoi ? » après le verbe (voir la notion 2).",
                    "COD antéposé = COD placé AVANT le verbe (pronom le/la/les, relatif que, interrogatif).",
                    "Auxiliaire = être ou avoir ; à identifier en premier.",
                  ],
                  note: "Les lettres A à F (règle A, règle B…) sont des repères internes à cette fiche, pas une terminologie officielle à employer telle quelle en copie.",
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ Le pronom « en » et le COI ne déclenchent jamais l'accord du PP avec avoir.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Accorder un participe passé : l'arbre en 4 questions",
              intro:
                "**Question typique :** « Justifiez l'accord du participe passé souligné. »\nOn pose les questions dans l'ordre.",
              steps: [
                {
                  number: "1",
                  text: "**Le PP est-il employé seul ?** Si oui, accord avec le nom noyau ou le sujet.",
                  example: { lines: ["« les yeux baissés » → épithète de « yeux » (masculin pluriel) → baissés"] },
                },
                {
                  number: "2",
                  text: "**L'auxiliaire est-il être ?** Si oui, accord avec le groupe sujet.",
                  example: { lines: ["« Elle est partie » → sujet « elle » (féminin singulier) → partie"] },
                },
                {
                  number: "3",
                  text: "**Avec avoir : y a-t-il un COD, et est-il placé avant le verbe ?** Si le COD est antéposé, accord avec lui ; sinon, invariable.",
                  example: { lines: ["« les lettres qu'il a envoyées » → « que » = COD antéposé, antécédent « lettres » (féminin pluriel) → envoyées"] },
                },
                {
                  number: "💡",
                  text: "**Vérifier les blocages** : avec « en », ou si le COD est placé après, le PP reste invariable.",
                  warn: "⚠️ « Elle a mangé les pommes » : COD après le verbe → invariable.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Justifiez l'accord dans « les photos qu'elle avait prises ».",
              correction: [
                { type: "line", text: "Auxiliaire avoir. « que » est un pronom relatif COD, dont l'antécédent est « photos » (féminin pluriel), placé avant le verbe. Le COD antéposé déclenche l'accord : « prises » (féminin pluriel)." },
                { type: "note", text: "Trouvé du premier coup ? Vous tenez la règle du COD antéposé. Sinon, revoyez la règle D." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Accorder le PP d'un verbe pronominal",
              intro:
                "**Question typique :** « Justifiez l'accord (ou l'invariabilité) du participe passé du verbe pronominal. »\nOn analyse le rôle du pronom « se ».",
              steps: [
                {
                  number: "1",
                  text: "**Le verbe est-il essentiellement pronominal** (s'enfuir, se souvenir, se méfier…) **ou passif** ? Si oui, accord avec le sujet.",
                  example: { lines: ["« Elle s'est enfuie » → accord avec « elle » (féminin singulier)"] },
                },
                {
                  number: "2",
                  text: "**Sinon, le pronom « se » est-il COD ou COI ?** Reformuler avec avoir pour trancher.",
                  example: { lines: ["« Elle s'est lavée » → elle a lavé elle-même, se = COD → accord", "« Elle s'est lavé les mains » → se = COI, COD « les mains » après → invariable"] },
                },
                {
                  number: "💡",
                  text: "**Réflexe** : un verbe qui se construit avec « à » (parler à, sourire à, téléphoner à…) a un « se » COI, donc un PP invariable.",
                  warn: "⚠️ « Ils se sont parlé » : invariable (parler à quelqu'un).",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "« Elles se sont (écrire) des lettres. » Quelle forme du participe passé, et pourquoi ?",
              correction: [
                { type: "line", text: "« écrire à quelqu'un » : « se » est COI ; le COD « des lettres » est placé après le verbe. Le PP reste invariable : « Elles se sont **écrit** des lettres »." },
                { type: "note", text: "Le réflexe du « à » fonctionne ? Direction le test infinitif / participe passé." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Trancher entre infinitif (-er) et participe passé (-é)",
              intro:
                "**Question typique :** « La forme soulignée est-elle un infinitif ou un participe passé ? »\nUn seul test suffit.",
              steps: [
                {
                  number: "1",
                  text: "**Remplacer la forme en -er / -é par un verbe du 2e groupe** (choisir).",
                  example: { lines: ["« Il faut manger » → « Il faut choisir » ✓"] },
                },
                {
                  number: "2",
                  text: "**Conclure** : si « -ir » passe, c'est un infinitif (écrire -er) ; si « -i » passe, c'est un participe passé (écrire -é).",
                  example: { lines: ["« Il a mangé » → « Il a choisi » ✓ → participe passé (-é)"] },
                },
                {
                  number: "💡",
                  text: "**Vérifier le contexte** : après une préposition (de, à, pour, sans…) ou un autre verbe, on attend presque toujours un infinitif.",
                  warn: "⚠️ « décider de + infinitif », « entendre + infinitif » : la forme est en -er.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Infinitif ou participe passé : « Les erreurs (commettre) dans ce devoir sont nombreuses. »",
              correction: [
                { type: "line", text: "Test : « les erreurs **choisies**… » ✓ → participe passé. On écrit « commises », accordé avec « erreurs » (féminin pluriel)." },
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
                  objectifId: "pp1",
                  question: "Dans « les yeux baissés », avec quoi « baissés » s'accorde-t-il ?",
                  options: ["Avec le sujet de la phrase", "Avec son nom noyau « yeux »", "Il est invariable", "Avec l'auxiliaire"],
                  correctIndex: 1,
                  explanation:
                    "Employé seul, le participe passé fonctionne comme un adjectif épithète : il s'accorde avec son nom noyau « yeux » (masculin pluriel).",
                },
                {
                  objectifId: "pp2",
                  question: "« Les élèves sont (arriver) en retard. » Quelle forme ?",
                  options: ["arrivé", "arrivée", "arrivés", "arriver"],
                  correctIndex: 2,
                  explanation:
                    "Avec l'auxiliaire être, le PP s'accorde avec le groupe sujet « les élèves » (masculin pluriel) : arrivés.",
                },
                {
                  objectifId: "pp3",
                  question: "« Elle a (manger) les pommes. » Quelle forme ?",
                  options: ["mangé", "mangée", "mangées", "manger"],
                  correctIndex: 0,
                  explanation:
                    "Avec avoir, le COD « les pommes » est placé après le verbe : pas d'accord, le PP reste invariable (mangé).",
                },
                {
                  objectifId: "pp4",
                  question: "« les livres que j'ai (lire) » : pourquoi « lus » ?",
                  options: ["L'auxiliaire est être", "« que » est un COD antéposé, antécédent « livres »", "Le PP s'accorde toujours", "« j' » est le COD"],
                  correctIndex: 1,
                  explanation:
                    "« que » est un pronom relatif COD dont l'antécédent « livres » (masculin pluriel) est placé avant le verbe : le COD antéposé déclenche l'accord.",
                },
                {
                  objectifId: "pp5",
                  question: "« Des pommes, j'en ai (manger). » Quelle forme ?",
                  options: ["mangées", "mangé", "mangées ou mangé", "mangé(e)s"],
                  correctIndex: 1,
                  explanation:
                    "Avec le pronom « en » (pronom adverbial partitif), le participe passé reste invariable : mangé.",
                },
                {
                  objectifId: "pp6",
                  question: "« Elle s'est (laver) les mains. » Quelle forme ?",
                  options: ["lavée", "lavé", "lavés", "lavées"],
                  correctIndex: 1,
                  explanation:
                    "« se » est COI (elle a lavé les mains à elle-même) ; le COD « les mains » est placé après. Le PP reste invariable : lavé.",
                },
                {
                  objectifId: "pp6",
                  question: "« Ils se sont (sourire). » Quelle forme ?",
                  options: ["souris", "souries", "souri", "sourits"],
                  correctIndex: 2,
                  explanation:
                    "« sourire à quelqu'un » : « se » est COI, donc le participe passé est invariable : souri.",
                },
                {
                  objectifId: "pp7",
                  question: "Dans « Il a décidé de (aller) voir ses parents », la forme est :",
                  options: ["un participe passé (allé)", "un infinitif (aller)", "indifféremment l'un ou l'autre", "un attribut"],
                  correctIndex: 1,
                  explanation:
                    "Après « décider de », on attend un infinitif. Test : « il a décidé de choisir » ✓ → infinitif « aller ».",
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
              sub: "Auxiliaire, COD, accord de base",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 1 : Choisir la bonne forme",
              objectifTag: "Auxiliaire et accord",
              question:
                "Choisissez la forme correcte et justifiez (auxiliaire + règle) :\na) « Elle est (parti / partie) en voyage. »   b) « Il a (dormi / dormie) longtemps. »   c) « Les lettres qu'il a (envoyé / envoyées). »   d) « Nous les avons (vu / vus). » (les = masculin pluriel)   e) « Elle a (monté / montée) les valises. »",
              correction: [
                { type: "line", label: "a)", text: "**partie** : auxiliaire être → accord avec le sujet « elle » (féminin singulier)." },
                { type: "line", label: "b)", text: "**dormi** : auxiliaire avoir, verbe intransitif, pas de COD → invariable." },
                { type: "line", label: "c)", text: "**envoyées** : auxiliaire avoir, « que » = COD antéposé, antécédent « lettres » (féminin pluriel) → accord." },
                { type: "line", label: "d)", text: "**vus** : auxiliaire avoir, « les » = COD antéposé (masculin pluriel) → accord." },
                { type: "line", label: "e)", text: "**monté** : auxiliaire avoir (monter transitif), COD « les valises » placé après → invariable." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 2 : Infinitif ou participe passé ?",
              objectifTag: "Test -ir",
              question:
                "Appliquez le test -ir à chaque forme soulignée :\na) « Il faut <u>manger</u> des légumes. »   b) « Le repas <u>terminé</u>, ils sortirent. »   c) « Je l'ai entendu <u>chanter</u>. »   d) « Elle a <u>regardé</u> le film. »   e) « Il est allé <u>chercher</u> du pain. »",
              correction: [
                { type: "line", label: "a)", text: "**infinitif** : « Il faut choisir » ✓ → manger." },
                { type: "line", label: "b)", text: "**participe passé** : « Le repas choisi… » ✓ → terminé, accordé avec « repas » (masculin singulier)." },
                { type: "line", label: "c)", text: "**infinitif** : « Je l'ai entendu choisir » ✓ → chanter (subordonnée infinitive)." },
                { type: "line", label: "d)", text: "**participe passé** : « Elle a choisi » ✓ → regardé, COD « le film » après → invariable." },
                { type: "line", label: "e)", text: "**infinitif** : « Il est allé choisir » ✓ → chercher." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 3 : Vrai ou faux",
              question:
                "Vrai ou faux, justifiez :\na) Avec le pronom « en », le PP s'accorde avec le COD antéposé.\nb) Les verbes essentiellement pronominaux s'accordent avec le sujet.\nc) « Ils se sont souri » → « souri » est invariable.\nd) « les livres que j'ai lus » → « lus » s'accorde avec « livres ».",
              correction: [
                { type: "line", label: "a)", text: "**Faux** : avec « en » (pronom adverbial partitif), le PP est invariable : « J'en ai mangé »." },
                { type: "line", label: "b)", text: "**Vrai** : s'enfuir, se souvenir, se méfier… s'accordent avec le sujet." },
                { type: "line", label: "c)", text: "**Vrai** : « sourire à » → « se » est COI → PP invariable." },
                { type: "line", label: "d)", text: "**Vrai** : « que » = COD antéposé, antécédent « livres » (masculin pluriel) → lus." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : Analyser",
              sub: "Identifier le COD antéposé, justifier en phrase",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 4 : Le pronom « en » et les interrogatifs",
              question:
                "Accordez correctement et justifiez :\na) « Des efforts, il en a (fait / faits). »   b) « Combien de pages as-tu (lu / lues) ? »   c) « Quelle décision a-t-il (pris / prise) ? »   d) « Des erreurs ? Elle en a (commis / commises). »",
              correction: [
                { type: "line", label: "a)", text: "**fait** : « en » = pronom adverbial partitif → PP invariable." },
                { type: "line", label: "b)", text: "**lues** : « combien de pages » = COD antéposé (féminin pluriel) → accord." },
                { type: "line", label: "c)", text: "**prise** : « quelle décision » = COD antéposé (féminin singulier) → accord." },
                { type: "line", label: "d)", text: "**commis** : « en » = pronom adverbial → PP invariable, même si le nom de référence est féminin pluriel." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 5 : Analyse d'un extrait",
              enonce: "« Les photos qu'elle avait prises montraient les enfants qu'elle avait photographiés dans la cour. »",
              question: "Pour « prises » et « photographiés », identifiez le COD antéposé (nature, antécédent, genre, nombre) et justifiez l'accord.",
              correction: [
                { type: "line", text: "**prises** : « que » = pronom relatif COD antéposé, antécédent « photos » (féminin pluriel) → prises. Justification : « prises » s'accorde avec l'antécédent du pronom relatif « que », « photos », COD placé avant l'auxiliaire avoir." },
                { type: "line", text: "**photographiés** : « que » = pronom relatif COD antéposé, antécédent « enfants » (masculin pluriel) → photographiés." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 6 : Les verbes pronominaux",
              question:
                "Identifiez le rôle du pronom « se » (COD / COI / non analysable) et accordez :\na) « Elle s'est (laver). »   b) « Elle s'est (laver) les mains. »   c) « Ils se sont (téléphoner). »   d) « Elles se sont (souvenir). »   e) « Ils se sont (regarder). »",
              correction: [
                { type: "line", label: "a)", text: "**lavée** : « se » = COD → accord avec le sujet « elle » (féminin singulier)." },
                { type: "line", label: "b)", text: "**lavé** : « se » = COI, COD « les mains » après → invariable." },
                { type: "line", label: "c)", text: "**téléphoné** : « téléphoner à » → « se » = COI → invariable." },
                { type: "line", label: "d)", text: "**souvenues** : essentiellement pronominal → accord avec le sujet « elles » (féminin pluriel)." },
                { type: "line", label: "e)", text: "**regardés** : « se » = COD réciproque → accord avec le sujet « ils » (masculin pluriel)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : Maîtriser",
              sub: "Analyse complète, justification rédigée",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 7 : Analyse complète",
              enonce: "« La décision qu'il avait prise la veille, personne ne l'avait encore comprise. Les délégués s'étaient regardés sans mot dire. »",
              question: "Justifiez en une phrase rédigée les accords de « prise », « comprise » et « regardés ».",
              correction: [
                { type: "line", text: "**prise** (féminin singulier) : auxiliaire avoir, « que » = pronom relatif COD antéposé, antécédent « décision » (féminin singulier) → accord." },
                { type: "line", text: "**comprise** (féminin singulier) : auxiliaire avoir, pronom personnel « l' » = COD antéposé, mis pour « la décision » (féminin singulier) → accord." },
                { type: "line", text: "**regardés** (masculin pluriel) : verbe pronominal réciproque, « se » = COD → accord avec le sujet « les délégués » (masculin pluriel)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 8 : Pronominaux et COI",
              enonce: "« Elles se sont écrit des lettres touchantes, puis elles se les sont lues à voix haute. »",
              question: "a) Justifiez l'invariabilité de « écrit ». b) Justifiez l'accord de « lues ».",
              correction: [
                { type: "line", label: "a)", text: "**écrit** invariable : « écrire à » → « se » = COI ; le COD « des lettres » est placé après le verbe." },
                { type: "line", label: "b)", text: "**lues** : « les » = COD antéposé, mis pour « les lettres » (féminin pluriel) → accord. (Ici « se » est COI, c'est « les » qui commande l'accord.)" },
                { type: "note", text: "💡 Bien distinguer le pronom réfléchi « se » du pronom COD « les » : c'est le COD antéposé qui déclenche l'accord." },
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
              text: "Ces exercices reproduisent le format de la question sur l'accord du participe passé en Partie 1 : extrait, justification rédigée. Les exercices calqués sur des sujets récents portent le badge ✦.",
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format identique au concours",
              title: "Exercice 1 : justifier plusieurs accords",
              enonce:
                "« Les candidates que le jury avait <u>retenues</u> avaient toutes préparé leur dossier avec soin. Elles s'étaient <u>écrit</u> de nombreuses lettres d'encouragement et s'étaient <u>soutenues</u> mutuellement. La directrice, satisfaite des résultats <u>obtenus</u>, les avait <u>félicitées</u> chaleureusement. »",
              question: "Justifiez les accords (ou l'invariabilité) de : retenues, écrit, soutenues, obtenus, félicitées.",
              correction: [
                { type: "line", text: "**retenues** : auxiliaire avoir, « que » = pronom relatif COD antéposé, antécédent « candidates » (féminin pluriel) → accord." },
                { type: "line", text: "**écrit** invariable : « écrire à » → « se » = COI ; le COD « de nombreuses lettres » est placé après le verbe." },
                { type: "line", text: "**soutenues** : verbe pronominal réciproque (soutenir quelqu'un), « se » = COD → accord avec le sujet « elles » (féminin pluriel)." },
                { type: "line", text: "**obtenus** : participe passé employé seul, épithète de « résultats » (masculin pluriel) → accord." },
                { type: "line", text: "**félicitées** : auxiliaire avoir, « les » = COD antéposé, mis pour « les candidates » (féminin pluriel) → accord." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 2 : infinitif ou participe passé ?",
              enonce:
                "a) « Il a décidé de partir cherché* du travail en ville. »\nb) « Les erreurs commettre* dans ce devoir sont nombreuses. »\nc) « Elle a laissé entrer les candidats. »\nd) « J'ai entendu chanté* une belle mélodie. »",
              question: "Corrigez les formes erronées et justifiez avec le test de remplacement.",
              correction: [
                { type: "line", label: "a)", text: "« partir **chercher** » : « partir choisir » ✓ → infinitif. La forme « cherché* » est une confusion infinitif / participe passé." },
                { type: "line", label: "b)", text: "« Les erreurs **commises** » : « les erreurs choisies » ✓ → participe passé, accordé avec « erreurs » (féminin pluriel)." },
                { type: "line", label: "c)", text: "« laissé » est correct et invariable : le COD « les candidats » est placé après le verbe. De plus, « laisser » suivi d'un infinitif est recommandé invariable depuis les rectifications de 1990." },
                { type: "line", label: "d)", text: "« J'ai entendu **chanter** » : « j'ai entendu choisir » ✓ → infinitif (subordonnée infinitive)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 3 : analyse complète d'un extrait",
              enonce:
                "« Les lettres qu'elle avait <u>reçues</u> le matin, elle les avait <u>rangées</u> dans un tiroir. Bouleversée, elle s'était <u>assise</u> un instant. »",
              question: "Justifiez en formule rédigée les accords de : reçues, rangées, assise.",
              correction: [
                { type: "line", text: "**reçues** : auxiliaire avoir, « que » = COD antéposé, antécédent « lettres » (féminin pluriel) → accord." },
                { type: "line", text: "**rangées** : auxiliaire avoir, « les » = COD antéposé, mis pour « les lettres » (féminin pluriel) → accord." },
                { type: "line", text: "**assise** : verbe pronominal réfléchi (s'asseoir), « se » = COD (elle a assis elle-même) → accord avec le sujet « elle » (féminin singulier)." },
                { type: "note", text: "💡 « Bouleversée » est un participe passé employé seul, épithète détachée du sujet « elle » (féminin singulier)." },
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
              text: "Ces exercices reproduisent des **erreurs fréquentes** sur le participe passé, observées dans les copies, y compris à la Partie 3. Repérer ce qui cloche et corriger rigoureusement est une compétence directement valorisée au concours.",
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 1 · Réponse à corriger : « choisit »",
              enonce: "Copie d'un candidat : le participe passé de « choisir » écrit *choisit* (« le sujet choisit* par l'auteur »).",
              question: "Identifiez l'erreur et expliquez l'orthographe correcte du participe passé.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Confusion avec la forme conjuguée « il choisit » (présent / passé simple) : ajout d'un -t final", bad: true },
                    { text: "Le participe passé des verbes en -ir se termine par -i, sans -t : fini, réussi, choisi, dormi" },
                    { text: "Réponse attendue : « le sujet **choisi** par l'auteur »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 2 · Réponse à corriger : « de allé voir »",
              enonce: "Copie d'un candidat : « *il a décidé de allé voir ses parents* ».",
              question: "Identifiez l'erreur et corrigez avec le test de remplacement.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Participe passé « allé » employé à la place de l'infinitif ; après « décider de », on attend un infinitif", bad: true },
                    { text: "Test : « il a décidé de **choisir** » ✓ → infinitif requis" },
                    { text: "Réponse attendue : « il a décidé d'**aller** voir ses parents »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 3 · Réponse à corriger : « se sont souries »",
              enonce: "Copie d'un candidat : « *Elles se sont souries en se retrouvant* ».",
              question: "Identifiez l'erreur et corrigez en justifiant le rôle du pronom « se ».",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Accord avec le sujet alors que « sourire à » a un « se » COI", bad: true },
                    { text: "« se » COI ne déclenche pas l'accord : le PP reste invariable" },
                    { text: "Réponse attendue : « Elles se sont **souri** »" },
                  ],
                },
                { type: "note", text: "💡 Même logique pour se parler, s'écrire, se téléphoner, se succéder." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 4 · Réponse à corriger : « j'en ai lus »",
              enonce: "Copie d'un candidat : « *Des livres, j'en ai lus* ».",
              question: "Identifiez l'erreur sur le pronom « en » et corrigez.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Accord avec le nom de référence de « en », traité à tort comme un COD direct", bad: true },
                    { text: "« en » est un pronom adverbial partitif : il ne déclenche pas l'accord du PP" },
                    { text: "Réponse attendue : « Des livres, j'en ai **lu** »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 5 · Réponse à corriger : « assisent »",
              enonce: "Copie d'un candidat : *assisent* pour « assis » (« ils sont assisent* »).",
              question: "Identifiez la nature de l'erreur et expliquez pourquoi « assis » ne reçoit pas de terminaison verbale.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "« assis » est traité comme un verbe conjugué : ajout de la désinence -ent", bad: true },
                    { text: "« assis » est un participe passé (ou adjectif) : il ne se conjugue pas, il s'accorde en genre et en nombre" },
                    { text: "Réponse attendue : « Ils sont **assis** » (masculin pluriel) ; « Elle est **assise** » ; « Elles sont **assises** »" },
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
                  question: "Accorder un participe passé : quel est le bon réflexe, dans l'ordre ?",
                  answer:
                    "1. PP seul → comme un adjectif.\n2. Auxiliaire être → accord avec le sujet.\n3. Auxiliaire avoir → identifier le COD et sa position : avant le verbe = accord, sinon (absent ou après) = invariable.",
                  astuce: "💡 Toujours commencer par l'auxiliaire, jamais par le COD.",
                },
                {
                  question: "COD antéposé : les 3 mécanismes ?",
                  answer:
                    "**1. Pronom personnel** : le, la, les, me, te, nous, vous. « Je les ai vus. »\n**2. Pronom relatif « que »** : accord avec l'antécédent. « les livres que j'ai lus ».\n**3. Interrogatif / exclamatif** : quel(le)(s), combien de. « Quelle décision a-t-il prise ? »",
                },
                {
                  question: "Le pronom « en » : quel accord ?",
                  answer:
                    "Avec « en », le participe passé reste **invariable**. « en » est un pronom adverbial partitif, pas un COD direct.\n« Des efforts, il en a **fait**. » ; « Des erreurs ? Elle en a **commis**. »",
                  astuce: "⚠️ Ne pas accorder avec le nom qui suit « en ».",
                },
                {
                  question: "Pronominaux : le test COD / COI ?",
                  answer:
                    "Reformuler avec avoir :\n« se laver » → elle a lavé elle-même → se = COD → accord.\n« se laver les mains » → se = COI, COD « les mains » après → invariable.\n« se souvenir » → essentiellement pronominal → accord avec le sujet.",
                  astuce: "💡 Verbe construit avec « à » (parler à, sourire à…) → « se » est COI → invariable.",
                },
                {
                  question: "Test -ir : infinitif ou participe passé ?",
                  answer:
                    "Remplacer la forme en -er / -é par un verbe en -ir :\nSi « -ir » passe → **infinitif** → écrire -er.\nSi « -i » passe → **participe passé** → écrire -é.\n« Il faut manger » → « choisir » ✓ → infinitif. « Il a mangé » → « choisi » ✓ → PP.",
                  astuce: "Confusion infinitif / PP : erreur lourdement sanctionnée au concours.",
                },
                {
                  question: "Verbes à double auxiliaire ?",
                  answer:
                    "Monter, descendre, sortir, passer, rentrer, retourner :\n« Elle est **montée**. » (intransitif, être, accord avec le sujet).\n« Elle a **monté** les valises. » (transitif, avoir, COD après → invariable).\n« les valises qu'elle a **montées** » (COD antéposé → accord).",
                },
                {
                  question: "Justifiez l'invariabilité de « souri » dans « Ils se sont souri. »",
                  answer:
                    "« sourire à quelqu'un » : « se » est COI (pas COD). Pas de COD antéposé → le participe passé reste invariable : « souri ».",
                  astuce: "💡 Réflexe : si le verbe se construit avec « à » (parler à, sourire à, téléphoner à…), « se » est COI.",
                },
                {
                  question: "Formule de justification rédigée (avoir, COD antéposé) ?",
                  answer:
                    "« [PP] s'accorde avec [pronom personnel / pronom relatif / interrogatif], mis pour [nom] ([genre] [nombre]), COD placé avant l'auxiliaire avoir. »\nExemple : « vues s'accorde avec le pronom « les », mis pour « les photos » (féminin pluriel), COD antéposé. »",
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
              center: { title: "Accord du PP", subtitle: "4 emplois" },
              branches: [
                {
                  title: "PP employé seul",
                  lines: ["Comme un adjectif", "Épithète : accord avec le nom noyau", "Attribut : accord avec le sujet"],
                  variant: "blue",
                },
                {
                  title: "Avec être",
                  lines: ["Accord avec le groupe sujet", "Temps composés + voix passive", "Double auxiliaire : vérifier"],
                  variant: "green",
                },
                {
                  title: "Avec avoir",
                  lines: ["Invariable par défaut", "Accord si COD antéposé", "« en » → invariable"],
                  variant: "green",
                },
                {
                  title: "Pronominaux",
                  lines: ["Rôle de « se » : COD / COI", "se = COD → accord avec le sujet", "se = COI → invariable"],
                  variant: "blue",
                },
                {
                  title: "Pièges classiques",
                  lines: ["Infinitif (-er) / PP (-é) : test -ir", "« en » → invariable", "se parler, se sourire → invariables"],
                  variant: "yellow",
                },
                {
                  title: "Renvois",
                  lines: ["Formes non conjuguées → notion 9", "Accords GN / GV → notion 10", "Homophones → notion 12"],
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
