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
              title: "L'arbre de décision en 4 questions",
              lines: [
                "① Le PP est-il employé seul (sans auxiliaire) ? → OUI : accord avec le nom noyau ou le sujet (règle A).",
                "② Sinon, l'auxiliaire est-il ÊTRE ? → OUI : accord avec le groupe sujet (règle B).",
                "③ Sinon (auxiliaire AVOIR), y a-t-il un COD ? → NON : invariable (règle C).",
                "④ Le COD est-il placé AVANT le verbe ? → NON : invariable (règle C). OUI : accord avec le COD antéposé (règle D).",
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
                  text: "Avec l'auxiliaire **avoir**, le participe passé est **invariable par défaut**. Il ne s'accorde que dans un seul cas : quand le **COD est placé avant le verbe** (COD antéposé). C'est alors avec ce COD antéposé qu'il s'accorde.",
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
                  type: "callout",
                  variant: "info",
                  title: "Règle D : le COD est placé avant le verbe",
                  text: "Après avoir vérifié qu'un COD existe, il faut regarder sa place. S'il est placé avant le verbe, le participe passé s'accorde avec lui. Le COD peut être antéposé de trois façons.",
                },
                {
                  type: "table",
                  title: "Les trois façons d'antéposer le COD",
                  headers: ["Mécanisme", "Exemple", "Question à poser", "Accord"],
                  rows: [
                    ["Pronom personnel (le, la, les, me, te, nous, vous)", "« La lettre ? Elle l'a **envoyée**. »", "Elle a envoyé quoi ? « la lettre », reprise par « l' » avant le verbe", "avec « la lettre » (féminin singulier)"],
                    ["Pronom relatif « que »", "« les livres **que** j'ai **lus** »", "J'ai lu quoi ? « les livres », repris par « que » avant le verbe", "avec « livres » (masculin pluriel)"],
                    ["Interrogatif / exclamatif", "« **Quelle** décision a-t-il **prise** ? »", "Il a pris quoi ? « quelle décision », placée avant le verbe", "avec « décision » (féminin singulier)"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Le cas du pronom « en »",
                  text: "Avec le pronom **en**, le participe passé reste **invariable** : c'est un cas particulier qui échappe à la règle ordinaire du COD antéposé. On écrit : « Des livres ? J'en ai **lu**. » ; « Des erreurs ? Elle en a **commis**. » On n'accorde pas avec le nom repris par « en », même s'il est féminin pluriel.",
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  title: "« fait » et « laissé » suivis d'un infinitif",
                  text: "Le participe passé **fait** suivi d'un infinitif est **toujours invariable** : on écrit « la maison qu'il a **fait** construire », et non « qu'il a faite construire ». Depuis les rectifications de 1990, **laissé** suivi d'un infinitif est lui aussi recommandé **invariable** : on écrit « les enfants qu'elle a **laissé** jouer », et non « qu'elle a laissés jouer ».",
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
                  text: "Un **verbe pronominal** se construit avec un pronom réfléchi qui renvoie au sujet : me, te, se, nous ou vous. À l'infinitif, il est présenté avec « se » : se laver, se parler, s'enfuir. Pour accorder son participe passé, il faut déterminer le **rôle du pronom réfléchi**. La méthode consiste à reformuler avec l'auxiliaire avoir, puis à appliquer la règle du COD antéposé.",
                },
                {
                  type: "table",
                  title: "Accord selon le rôle du pronom « se »",
                  headers: ["Type et exemple", "Question à poser", "Rôle de « se »", "Accord"],
                  rows: [
                    ["Réfléchi : « Elle s'est **lavée**. »", "Elle a lavé qui ? elle-même, reprise par « se »", "COD antéposé", "avec le sujet : lavée"],
                    ["Réfléchi : « Elle s'est **lavé** les mains. »", "Elle a lavé quoi ? « les mains » ; à qui ? à elle-même, reprise par « se »", "COI ; COD placé après", "invariable : lavé"],
                    ["Réciproque : « Ils se sont **regardés**. »", "Ils ont regardé qui ? l'un l'autre, repris par « se »", "COD antéposé", "avec le sujet : regardés"],
                    ["Réciproque : « Ils se sont **parlé**. »", "Ils ont parlé à qui ? l'un à l'autre, repris par « se »", "COI", "invariable : parlé"],
                    ["Essentiellement pronominal : « Elle s'est **enfuie**. »", "Peut-on employer « enfuir » sans « se » ? Non.", "pronom non analysable", "avec le sujet : enfuie"],
                    ["Passif pronominal : « Ces livres se sont bien **vendus**. »", "Qu'est-ce qui s'est vendu ? « ces livres »", "valeur passive", "avec le sujet : vendus"],
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
              title: "Piège n°1 · Accorder avec le sujet après « avoir »",
              badge: "Erreur très fréquente",
              faux: "« Elles ont **rangées** leurs affaires. » Le participe passé a été accordé à tort avec le sujet « elles ».",
              vrai: "Avec l'auxiliaire « avoir », le participe passé ne s'accorde pas avec le sujet. Le COD « leurs affaires » est placé après le verbe : on écrit « Elles ont **rangé** leurs affaires. »",
              methode: "Repérer l'auxiliaire, puis poser la question « elles ont rangé quoi ? ». Le COD est après le verbe : le participe passé reste invariable.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 · Le pronom « en »",
              badge: "Source d'erreurs",
              faux: "« Des livres, j'en ai lus*. »",
              vrai: "Avec « en », le participe passé reste invariable : « Des livres, j'en ai **lu**. » C'est un cas particulier qui échappe à la règle ordinaire du COD antéposé.",
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
              type: "rappelExpress",
              title: "Les repères indispensables",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "PP employé seul → accord avec le nom auquel il se rapporte.",
                    "Auxiliaire être → accord avec le groupe sujet.",
                    "Auxiliaire avoir → accord seulement avec le COD placé avant le verbe.",
                    "Verbe pronominal → déterminer si « se » est COD, COI ou non analysable.",
                    "Forme en -er / -é → remplacer par « choisir / choisi ».",
                  ],
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Accorder un participe passé avec « avoir »",
              intro:
                "**Question typique :** Dans « les lettres qu'il a <u>envoyées</u> », justifiez l'accord du participe passé souligné.",
              steps: [
                {
                  number: "1",
                  text: "**Identifier l'auxiliaire.**",
                  example: { lines: ["« a envoyées » → auxiliaire « avoir »."] },
                },
                {
                  number: "2",
                  text: "**Chercher le COD et sa place.** Poser la question « il a envoyé quoi ? »",
                  example: { lines: ["Il a envoyé « les lettres », reprises par « que » avant le verbe → COD antéposé."] },
                },
                {
                  number: "3",
                  text: "**Donner le genre et le nombre du COD.**",
                  example: { lines: ["« lettres » est féminin pluriel → « envoyées »."] },
                },
                {
                  number: "💡",
                  text: "**Réponse attendue :** « envoyées » est employé avec l'auxiliaire « avoir ». Le pronom relatif « que », mis pour « les lettres », est COD du verbe « envoyer » et se trouve avant celui-ci. Le participe passé s'accorde donc avec ce COD féminin pluriel.",
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
                { type: "line", text: "**Réponse attendue :** « prises » est employé avec l'auxiliaire « avoir ». Le pronom relatif « que », mis pour « les photos », est COD de « prendre » et se trouve avant le verbe. Le participe passé s'accorde donc au féminin pluriel avec ce COD." },
                { type: "note", text: "Trouvé du premier coup ? Vous tenez la règle du COD antéposé. Sinon, revoyez la règle D." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Accorder le PP d'un verbe pronominal",
              intro:
                "**Question typique :** Dans « Elle s'est <u>lavé</u> les mains », justifiez l'invariabilité du participe passé souligné.",
              steps: [
                {
                  number: "1",
                  text: "**Reformuler avec « avoir ».**",
                  example: { lines: ["« Elle a lavé les mains à elle-même. »"] },
                },
                {
                  number: "2",
                  text: "**Poser les questions « quoi ? » et « à qui ? ».**",
                  example: { lines: ["Elle a lavé quoi ? « les mains », COD placé après. À qui ? à elle-même, reprise par « se » → « se » est COI."] },
                },
                {
                  number: "💡",
                  text: "**Réponse attendue :** Dans « Elle s'est lavé les mains », le pronom « se » est COI et le COD « les mains » est placé après le verbe. Aucun COD ne précède le participe passé : « lavé » reste donc invariable.",
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
                { type: "line", text: "**Réponse attendue :** « écrire à quelqu'un » se construit avec un COI : « se » est donc COI. Le COD « des lettres » est placé après le verbe. Aucun COD ne précède le participe passé, qui reste invariable : « Elles se sont **écrit** des lettres »." },
                { type: "note", text: "Le réflexe du « à » fonctionne ? Direction le test infinitif / participe passé." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Trancher entre infinitif (-er) et participe passé (-é)",
              intro:
                "**Question typique :** Dans « Il a décidé d'<u>aller</u> voir ses parents », justifiez la terminaison de la forme soulignée.",
              steps: [
                {
                  number: "1",
                  text: "**Remplacer la forme en -er / -é par un verbe du 2e groupe** (choisir).",
                  example: { lines: ["« Il a décidé de choisir » est correct."] },
                },
                {
                  number: "2",
                  text: "**Conclure** : si « -ir » passe, c'est un infinitif (écrire -er) ; si « -i » passe, c'est un participe passé (écrire -é).",
                  example: { lines: ["« choisir » est un infinitif → on écrit « aller » avec la terminaison -er."] },
                },
                {
                  number: "💡",
                  text: "**Réponse attendue :** La forme « aller » peut être remplacée par l'infinitif « choisir » : « Il a décidé de choisir ». Elle est donc à l'infinitif et s'écrit avec la terminaison -er. Devant une voyelle, « de » s'élide : on écrit « d'aller ».",
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
                { type: "line", text: "**Réponse attendue :** Le remplacement par « choisies » montre qu'il faut un participe passé. « commises » est employé seul et se rapporte au nom « erreurs », féminin pluriel : il s'accorde donc avec lui." },
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
                    "Avec le pronom « en », le participe passé reste invariable : « mangé ». C'est un cas particulier de la règle d'accord avec « avoir ».",
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
                  question: "Quelle forme complète correctement « Il a décidé d'… voir ses parents » ?",
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
                { type: "line", label: "a)", text: "**Faux** : avec le pronom « en », le participe passé reste invariable : « J'en ai mangé »." },
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
                { type: "line", label: "a)", text: "**fait** : avec le pronom « en », le participe passé reste invariable." },
                { type: "line", label: "b)", text: "**lues** : « combien de pages » = COD antéposé (féminin pluriel) → accord." },
                { type: "line", label: "c)", text: "**prise** : « quelle décision » = COD antéposé (féminin singulier) → accord." },
                { type: "line", label: "d)", text: "**commis** : avec le pronom « en », le participe passé reste invariable, même si le nom repris est féminin pluriel." },
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
              text: "Ces exercices entraînent à justifier précisément l'accord ou l'invariabilité d'un participe passé dans une phrase ou un extrait.",
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
                { type: "line", label: "c)", text: "« laissé » est correct : depuis les rectifications de 1990, le participe passé « laissé » suivi d'un infinitif est recommandé invariable." },
                { type: "line", label: "d)", text: "« J'ai entendu **chanter** » : « j'ai entendu choisir » ✓ → infinitif. Aucun sujet propre de l'infinitif n'est exprimé : il ne s'agit pas d'une subordonnée infinitive." },
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
              text: "Ces exercices reproduisent des **erreurs fréquentes** sur le participe passé, observées dans les copies, y compris dans la Partie 3. Repérer ce qui cloche et corriger rigoureusement est une compétence directement valorisée au concours.",
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
                    { text: "Le participe passé de « choisir » est « choisi », sans -t. On retrouve cette terminaison dans « fini » ou « réussi », mais tous les verbes en -ir ne suivent pas ce modèle." },
                    { text: "Réponse attendue : « le sujet **choisi** par l'auteur »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 2 · Réponse à corriger : « d'allé voir »",
              enonce: "Copie d'un candidat : « *il a décidé d'allé voir ses parents* ».",
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
                    { text: "La règle ordinaire du COD antéposé a été appliquée à tort au pronom « en »", bad: true },
                    { text: "Avec « en », le participe passé reste invariable : on ne l'accorde pas avec le nom repris" },
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
                  question: "Comment reconnaître un COD placé avant un participe passé avec « avoir » ?",
                  answer:
                    "Poser la question « qui ? » ou « quoi ? » après le verbe, puis chercher où se trouve la réponse.\nLe COD peut être placé avant sous trois formes :\n**un pronom personnel** (« Je les ai vus ») ;\n**le relatif « que »** (« les livres que j'ai lus ») ;\n**un groupe interrogatif ou exclamatif** (« Quelle décision a-t-il prise ? »).\nDans ces trois cas, le participe passé s'accorde avec le COD.",
                },
                {
                  question: "Le pronom « en » : quel accord ?",
                  answer:
                    "Avec « en », le participe passé reste **invariable** : ce cas échappe à la règle ordinaire du COD antéposé.\n« Des efforts, il en a **fait**. » ; « Des erreurs ? Elle en a **commis**. »",
                  astuce: "⚠️ Ne pas accorder avec le nom qui suit « en ».",
                },
                {
                  question: "Comment accorder le participe passé d'un verbe pronominal ?",
                  answer:
                    "Reformuler avec « avoir », puis poser « qui ? », « quoi ? » ou « à qui ? ».\n**« se » est COD placé avant** → accord avec ce qu'il représente : « Elle s'est lavée. »\n**« se » est COI** → il ne commande pas l'accord : « Elle s'est lavé les mains. »\n**Verbe essentiellement pronominal ou passif pronominal** → accord avec le sujet : « Elle s'est enfuie. »",
                  astuce: "S'il existe un autre COD placé avant, le participe s'accorde avec lui : « les mains qu'elle s'est lavées ».",
                },
                {
                  question: "Test -ir : infinitif ou participe passé ?",
                  answer:
                    "Remplacer la forme en -er / -é par un verbe en -ir :\nSi « -ir » passe → **infinitif** → écrire -er.\nSi « -i » passe → **participe passé** → écrire -é.\n« Il faut manger » → « choisir » ✓ → infinitif. « Il a mangé » → « choisi » ✓ → PP.",
                  astuce: "Confusion infinitif / PP : erreur lourdement sanctionnée au concours.",
                },
                {
                  question: "Comment accorder « monter », « descendre », « sortir » et les autres verbes à double auxiliaire ?",
                  answer:
                    "Vérifier la construction du verbe.\n**Sans COD, avec « être »** : accord avec le sujet, « Elle est montée. »\n**Avec un COD, avec « avoir »** : appliquer la règle du COD, « Elle a monté les valises » ; « les valises qu'elle a montées ».",
                },
                {
                  question: "Quel accord avec les verbes pronominaux construits avec « à quelqu'un » ?",
                  answer:
                    "Le pronom « se » est COI et ne commande donc aucun accord : le participe passé reste invariable s'il n'existe pas d'autre COD antéposé.\nExemples : se parler, s'écrire, se sourire, se nuire, se mentir, se téléphoner.\n« Ils se sont **souri**. » ; « Elles se sont **téléphoné**. »",
                },
                {
                  question: "Comment rédiger la justification d'un accord avec « avoir » ?",
                  answer:
                    "Nommer l'auxiliaire, identifier le COD, préciser sa place, puis donner son genre et son nombre.\nExemple : « Dans “les photos qu'il a vues”, “que” reprend “les photos” et est COD de “voir”. Placé avant le verbe, ce COD féminin pluriel entraîne l'accord du participe passé : “vues”. »",
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
