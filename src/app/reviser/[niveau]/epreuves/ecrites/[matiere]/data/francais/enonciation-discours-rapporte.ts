import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "en1", label: "Je distingue le discours ancré dans l'énonciation du récit coupé de l'énonciation (pronoms, temps, indicateurs)" },
  { id: "en2", label: "J'identifie les embrayeurs (déictiques) : mots dont le sens dépend de la situation d'énonciation" },
  { id: "en3", label: "Je reconnais le discours direct (guillemets, verbe introducteur, incise)" },
  { id: "en4", label: "Je reconnais le discours indirect (subordonnée introduite par que / si / mot interrogatif / de + infinitif)" },
  { id: "en5", label: "Je reconnais le discours indirect libre (ni guillemets ni verbe introducteur ; test du « pensa-t-il »)" },
  { id: "en6", label: "Je connais le récit de paroles (la prise de parole est mentionnée sans en reproduire le contenu)" },
  { id: "en7", label: "J'applique la concordance des temps et la transposition des embrayeurs lors du passage au discours indirect" },
];

export const ficheEnonciationDiscoursRapporte: Fiche = {
  slug: "enonciation-discours-rapporte",
  matiere: "francais",
  numero: 14,
  partie: "Partie 1 : Grammaire du texte et du discours",
  title: "L'énonciation et le discours rapporté",
  subtitle:
    "Discours ancré / récit coupé, embrayeurs, discours direct, indirect, indirect libre, récit de paroles et concordance des temps",
  badges: [
    { label: "★★☆ Fréquent", variant: "hot" },
    { label: "Cycle 3-4 · BOEN n°1 du 22 janvier 2019", variant: "info" },
  ],
  metaTitle: "L'énonciation et le discours rapporté (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur l'énonciation (discours ancré / récit coupé, embrayeurs) et le discours rapporté (direct, indirect, indirect libre, récit de paroles), avec la concordance des temps et la transposition des embrayeurs. Méthode pas-à-pas, formules d'analyse, exercices corrigés, flashcards et auto-évaluation.",
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
                "Deux questions que le jury pose souvent : qui parle, depuis quelle situation ? et comment les paroles sont-elles rapportées ?",
              items: [
                {
                  number: "①",
                  title: "L'énonciation",
                  text: "Discours ancré dans l'énonciation ou récit coupé : on le repère aux pronoms, aux temps et aux indicateurs.",
                },
                {
                  number: "②",
                  title: "Les embrayeurs",
                  text: "Les mots (je, ici, demain…) dont le sens dépend de qui parle, où et quand.",
                },
                {
                  number: "③",
                  title: "Les formes du discours rapporté",
                  text: "Discours direct, indirect, indirect libre, récit de paroles : reconnaître la forme et son effet.",
                },
                {
                  number: "④",
                  title: "La concordance des temps",
                  text: "Au discours indirect, les temps et les embrayeurs se transforment selon le verbe introducteur.",
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
              text: "Cette notion répond à deux questions liées : **qui parle dans ce texte et depuis quelle situation ?** (l'énonciation) et **comment les paroles d'un personnage sont-elles rapportées ?** (le discours rapporté). Identifier la façon dont un texte rapporte des paroles, c'est toujours analyser qui parle, depuis où, et avec quels mots.",
            },
            {
              type: "subsection",
              number: "①",
              title: "L'énonciation : discours ancré ou récit coupé ?",
              blocks: [
                {
                  type: "paragraph",
                  text: "Avant d'analyser un texte, posez quatre questions : **qui parle ? à qui ? quand ? où ?** Selon les réponses, le texte relève de l'un des deux grands systèmes.",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Discours ancré dans l'énonciation",
                      definition: "Le locuteur parle en son nom, au moment où il écrit. On sent sa présence.",
                      exemples: [
                        "« **Je** crois que lire est l'un des actes les plus libres. » (je, présent d'énonciation)",
                      ],
                      test: "Indices : je, tu, nous, ici, maintenant, aujourd'hui ; présent, futur, passé composé. Textes : essai, lettre, discours, article.",
                    },
                    {
                      title: "Récit coupé de l'énonciation",
                      definition: "Le narrateur raconte une histoire autonome ; il s'efface. On ne sait pas qui raconte, et cela n'importe pas.",
                      exemples: [
                        "« Le facteur **distribuait** le courrier. **Il passa** devant la boulangerie. » (il, imparfait, passé simple)",
                      ],
                      test: "Indices : il, elle, ils, ce jour-là, la veille, alors ; passé simple, imparfait, plus-que-parfait. Textes : roman, conte, fable.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  text: "Un texte mêle souvent les deux : un roman (récit) contient des dialogues (discours ancré). On identifie le système **dominant** et on signale les ruptures.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Les embrayeurs (déictiques)",
              blocks: [
                {
                  type: "paragraph",
                  text: "On appelle **embrayeurs** (ou déictiques) les mots dont le sens change selon qui parle, où et quand. « je », « ici », « demain » ne désignent pas la même chose selon le locuteur, contrairement à « la table » ou « Paris », qui sont fixes.",
                },
                {
                  type: "table",
                  title: "Les catégories d'embrayeurs",
                  headers: ["Catégorie", "Mots", "Ce qu'ils désignent"],
                  rows: [
                    ["Pronoms de personne", "je, tu, nous, vous", "Le locuteur (je) et son destinataire (tu)"],
                    ["Indicateurs de temps", "maintenant, aujourd'hui, hier, demain", "Le moment par rapport au moment où l'on parle"],
                    ["Indicateurs de lieu", "ici, là, ce lieu", "L'espace par rapport à la position du locuteur"],
                    ["Démonstratifs", "ce, ceci, cela", "Ce que le locuteur montre ou désigne"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  text: "En passant du discours ancré au récit, les embrayeurs se transforment : je → il, aujourd'hui → ce jour-là, ici → là, demain → le lendemain.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Les formes du discours rapporté",
              blocks: [
                {
                  type: "paragraph",
                  text: "Soit Paul a dit : « Je pars demain. » On peut rapporter ces paroles de quatre façons, et le jury peut demander laquelle est employée et quel effet elle produit.",
                },
                {
                  type: "notionCardGrid",
                  columns: 1,
                  cards: [
                    {
                      title: "Discours direct (DD)",
                      definition: "On reproduit les paroles mot pour mot.",
                      exemples: [
                        "Paul dit : « Je pars demain. »",
                        "Incise : « C'est, **dit-il**, un cadavre. » (verbe introducteur intercalé, sujet inversé, sans majuscule)",
                      ],
                      test: "Guillemets (ou tirets de dialogue), deux-points, verbe introducteur (dire, répondre, s'écrier…), embrayeurs du personnage. Effet : authenticité, vivacité.",
                    },
                    {
                      title: "Discours indirect (DI)",
                      definition: "On reformule les paroles dans une subordonnée, sans guillemets.",
                      exemples: [
                        "Paul dit **qu'il partait le lendemain**.",
                        "Déclaration → que ; question totale → si ; question partielle → mot interrogatif ; ordre → de + infinitif.",
                      ],
                      test: "Verbe introducteur + que / si / mot interrogatif / de + infinitif ; embrayeurs transposés ; concordance des temps. Effet : distance, intégration au récit.",
                    },
                    {
                      title: "Discours indirect libre (DIL)",
                      definition: "Les paroles ou pensées sont glissées dans le récit sans guillemets ni verbe introducteur.",
                      exemples: [
                        "« Il était furieux. **Il partirait dès l'aube, il n'en pouvait plus !** »",
                        "Test : peut-on ajouter « pensa-t-il » sans changer le sens ? Si oui, c'est du DIL.",
                      ],
                      test: "Ni guillemets ni verbe introducteur ; conditionnel ou imparfait ; ponctuation expressive ; 3e personne. Effet : intimité, fusion des voix narrateur / personnage.",
                    },
                    {
                      title: "Récit de paroles",
                      definition: "La prise de parole est mentionnée, sans en reproduire le contenu (discours narrativisé).",
                      exemples: [
                        "« Il lui **annonça son départ** pour Paris. » ; « Elle lui **dit au revoir**. »",
                      ],
                      test: "Un verbe de parole, mais aucun contenu reproduit. Effet : résumé, accélération du rythme.",
                    },
                  ],
                },
                {
                  type: "table",
                  title: "Tableau récapitulatif des 4 formes",
                  headers: ["Forme", "Guillemets", "Verbe introducteur", "Effet"],
                  rows: [
                    ["Discours direct", "Oui", "Oui", "Authenticité, vivacité"],
                    ["Discours indirect", "Non", "Oui (+ que / si / de)", "Distance, intégration au récit"],
                    ["Discours indirect libre", "Non", "Non", "Intimité, ambiguïté des voix"],
                    ["Récit de paroles", "Non", "Oui (sans contenu)", "Résumé, accélération"],
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "La concordance des temps",
              blocks: [
                {
                  type: "paragraph",
                  text: "Au discours indirect, il y a deux verbes : le **verbe introducteur** (dit, déclara…) et le verbe des paroles rapportées. La règle ne dépend que du temps du verbe introducteur.",
                },
                {
                  type: "formulaBlock",
                  title: "La règle en deux cas",
                  lines: [
                    "Verbe introducteur au PRÉSENT (il dit que…) : le verbe des paroles ne change pas.",
                    "Verbe introducteur au PASSÉ (il déclara que…) : présent → imparfait ; futur → conditionnel ; passé composé → plus-que-parfait.",
                    "Imparfait et conditionnel restent inchangés.",
                  ],
                  note: "Les embrayeurs se transposent aussi : demain → le lendemain, hier → la veille, aujourd'hui → ce jour-là.",
                },
                {
                  type: "table",
                  title: "Verbe introducteur au passé : les transformations",
                  headers: ["Paroles (DD)", "Discours indirect (il déclara que…)", "Transformation"],
                  rows: [
                    ["« Je pars. »", "qu'il partait", "présent → imparfait"],
                    ["« Je partirai. »", "qu'il partirait", "futur → conditionnel"],
                    ["« Je suis parti. »", "qu'il était parti", "passé composé → plus-que-parfait"],
                    ["« Je partais. »", "qu'il partait", "imparfait → inchangé"],
                    ["« Je partirais. »", "qu'il partirait", "conditionnel → inchangé"],
                  ],
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · présent d'énonciation ≠ présent de narration",
              badge: "Confusion fréquente",
              faux: "Analyser « On écrit parce qu'on ne sait pas » comme un présent de narration.",
              vrai: "C'est un **présent d'énonciation** (à valeur de vérité générale) : le locuteur réfléchit dans le moment du discours. Le présent de narration anime, lui, un récit au passé (voir la notion 7).",
              methode: "Se demander : le texte est-il un récit au passé (narration) ou un discours ancré dans le présent du locuteur (énonciation) ?",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 · « est-ce que » au discours indirect",
              badge: "Erreur très fréquente",
              faux: "« Il demanda est-ce qu'elle viendrait. »",
              vrai: "« est-ce que » appartient à l'interrogation directe : il disparaît toujours au discours indirect, remplacé par **si** (question totale) : « Il demanda **si** elle viendrait. »",
              methode: "Pour une question oui/non rapportée, employer « si » ; pour une question partielle, le mot interrogatif (où, quand, pourquoi…).",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 · discours indirect ou indirect libre ?",
              badge: "Cas difficile",
              faux: "« Il partirait dès l'aube ! » analysé comme discours indirect parce qu'il n'y a pas de guillemets.",
              vrai: "L'absence de guillemets ne suffit pas. Le DI exige un verbe introducteur + une subordonnée. Ici, phrase autonome, conditionnel et exclamation : c'est du **discours indirect libre**.",
              methode: "Chercher le verbe introducteur et la subordination : s'ils manquent et que la phrase est autonome, c'est du DIL.",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°4 · « on » n'est pas un pronom impersonnel",
              badge: "Terminologie",
              faux: "Analyser « on » (dans « on écrit… ») comme un pronom impersonnel.",
              vrai: "« on » est un **pronom personnel indéfini** (3e personne du singulier) à valeur généralisante : il désigne un référent humain générique. Les pronoms impersonnels sont « il » dans « il faut », « il pleut » (sans référent).",
              methode: "Réserver « impersonnel » à « il » des tournures sans référent ; « on » est toujours personnel indéfini.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 3 :** les élèves apprennent à reconnaître et à ponctuer le dialogue (discours direct), puis à transposer au discours indirect.\n\n**Cycle 4 :** la distinction des systèmes d'énonciation et le discours indirect libre relèvent surtout de l'expertise du professeur.\n\n**Ce que vous devez savoir dire :** « On enseigne d'abord le discours direct par la ponctuation du dialogue, avant la transposition au discours indirect, qui demande de manipuler pronoms, temps et indicateurs. »",
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
              text: "Identifier le système d'énonciation, reconnaître la forme de discours rapporté, et transposer du discours direct au discours indirect. Chacune se termine par un checkpoint.",
            },
            {
              type: "rappelExpress",
              title: "Rappel express : les deux systèmes",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "Discours ancré : je / tu, présent, ici / maintenant (le locuteur est présent).",
                    "Récit coupé : il / elle, passé simple / imparfait, ce jour-là / la veille (le narrateur s'efface).",
                    "Embrayeur = mot dont le sens dépend de la situation d'énonciation (voir aussi la notion 7 pour les valeurs des temps).",
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ « est-ce que » disparaît au discours indirect ; le futur y devient conditionnel si le verbe introducteur est au passé.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Identifier le système d'énonciation",
              intro:
                "**Question typique :** « Ce texte est-il ancré dans l'énonciation ou coupé d'elle ? »\nOn relève les indices.",
              steps: [
                {
                  number: "1",
                  text: "**Repérer les pronoms** : je / tu (ancré) ou il / elle (récit).",
                  example: { lines: ["« Le facteur distribuait… Il passa… » → il → récit"] },
                },
                {
                  number: "2",
                  text: "**Repérer les temps et les indicateurs** : présent + aujourd'hui (ancré) ou passé simple / imparfait + ce jour-là (récit).",
                  example: { lines: ["« distribuait, passa, ce jour-là » → système du récit"] },
                },
                {
                  number: "💡",
                  text: "**Conclure et signaler les ruptures** (un dialogue inséré dans un récit, par exemple).",
                  warn: "⚠️ Identifier le système dominant, pas seulement une phrase isolée.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "« Je vous écris depuis Rome, où je resterai jusqu'à demain. » Ancré ou récit ? Un indice.",
              correction: [
                { type: "line", text: "**Discours ancré dans l'énonciation** : pronoms « je / vous », présent et futur, embrayeurs « depuis Rome », « demain » qui dépendent de la situation du locuteur." },
                { type: "note", text: "Trouvé ? Vous repérez les embrayeurs. Sinon, revoyez le tableau des indices." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Reconnaître la forme de discours rapporté",
              intro:
                "**Question typique :** « Quelle est la forme de discours rapporté, et quel effet produit-elle ? »",
              steps: [
                {
                  number: "1",
                  text: "**Y a-t-il des guillemets et un verbe introducteur ?** Les deux → discours direct.",
                  example: { lines: ["« Il dit : “Je pars.” » → discours direct"] },
                },
                {
                  number: "2",
                  text: "**Un verbe introducteur + une subordonnée (que / si / de) ?** → discours indirect. **Aucun des deux, phrase autonome ?** → discours indirect libre.",
                  example: { lines: ["« Il dit qu'il partait » → DI ; « Il partirait, c'était sûr ! » → DIL"] },
                },
                {
                  number: "💡",
                  text: "**Nommer l'effet** : authenticité (DD), distance (DI), intimité (DIL), accélération (récit de paroles).",
                  warn: "⚠️ Pour le DIL, appliquer le test du « pensa-t-il ».",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "« Elle relut l'énoncé. Non, décidément, elle ne comprenait rien ! » Quelle forme, et pourquoi ?",
              correction: [
                { type: "line", text: "**Discours indirect libre** : ni guillemets ni verbe introducteur, imparfait (« comprenait ») et ponctuation expressive (« ! ») trahissent la pensée du personnage intégrée au récit." },
                { type: "note", text: "Le test du « pensa-t-elle » fonctionne ? Direction le dernier checkpoint." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Transposer du discours direct au discours indirect",
              intro:
                "**Question typique :** « Transposez ce passage au discours indirect (verbe introducteur au passé). »",
              steps: [
                {
                  number: "1",
                  text: "**Choisir l'introducteur** : que (déclaration), si (question totale), mot interrogatif (question partielle), de + infinitif (ordre).",
                  example: { lines: ["« Est-ce que tu viens ? » → … demanda s'il venait"] },
                },
                {
                  number: "2",
                  text: "**Transposer les pronoms et les embrayeurs**, puis **appliquer la concordance des temps** (si le verbe introducteur est au passé).",
                  example: { lines: ["« Je partirai demain » → qu'il partirait le lendemain"] },
                },
                {
                  number: "💡",
                  text: "**Vérifier** : « est-ce que » a disparu, le futur est devenu conditionnel, « demain » est devenu « le lendemain ».",
                  warn: "⚠️ Imparfait et conditionnel ne changent pas, même avec un introducteur au passé.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Transposez : Il déclara : « Je suis parti hier. » (verbe introducteur au passé)",
              correction: [
                { type: "line", text: "« Il déclara **qu'il était parti la veille**. » : passé composé → plus-que-parfait (était parti), « hier » → « la veille », « je » → « il »." },
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
                  objectifId: "en1",
                  question: "« Le facteur distribuait le courrier. Il passa devant la boulangerie. » Ce texte relève :",
                  options: ["du discours ancré", "du récit coupé de l'énonciation", "du discours direct", "d'une lettre"],
                  correctIndex: 1,
                  explanation:
                    "Pronoms de 3e personne (il), imparfait et passé simple : le narrateur s'efface, c'est un récit coupé de l'énonciation.",
                },
                {
                  objectifId: "en2",
                  question: "Dans « Je te parle depuis ici, aujourd'hui », combien d'embrayeurs ?",
                  options: ["Aucun", "Deux", "Quatre", "Un seul"],
                  correctIndex: 2,
                  explanation:
                    "« je », « te », « ici », « aujourd'hui » sont quatre embrayeurs : leur sens dépend de la situation d'énonciation.",
                },
                {
                  objectifId: "en3",
                  question: "« “Quel beau paysage !”, s'écria-t-elle. » est :",
                  options: ["du discours indirect", "du discours indirect libre", "du discours direct avec incise", "un récit de paroles"],
                  correctIndex: 2,
                  explanation:
                    "Guillemets, ponctuation expressive conservée et verbe introducteur en incise à sujet inversé : discours direct avec incise.",
                },
                {
                  objectifId: "en4",
                  question: "« Il demanda ___ elle venait. » (question oui/non rapportée)",
                  options: ["est-ce qu'", "si", "que", "qu'est-ce qu'"],
                  correctIndex: 1,
                  explanation:
                    "Une question totale au discours indirect se transpose par « si » : « Il demanda si elle venait. »",
                },
                {
                  objectifId: "en5",
                  question: "« Il était furieux. Il partirait dès l'aube ! » Cette dernière phrase est :",
                  options: ["du discours direct", "du discours indirect", "du discours indirect libre", "un récit de paroles"],
                  correctIndex: 2,
                  explanation:
                    "Pas de guillemets ni de verbe introducteur, conditionnel et exclamation : discours indirect libre (test : « pensa-t-il » fonctionne).",
                },
                {
                  objectifId: "en6",
                  question: "« Il lui annonça son départ pour Paris. » est :",
                  options: ["un discours direct", "un récit de paroles", "un discours indirect libre", "une incise"],
                  correctIndex: 1,
                  explanation:
                    "La prise de parole est mentionnée mais aucun contenu n'est reproduit : c'est un récit de paroles (discours narrativisé).",
                },
                {
                  objectifId: "en7",
                  question: "« Je partirai. » au discours indirect avec « il déclara » donne :",
                  options: ["qu'il partira", "qu'il partirait", "qu'il était parti", "qu'il partait"],
                  correctIndex: 1,
                  explanation:
                    "Verbe introducteur au passé : le futur devient conditionnel → « il déclara qu'il partirait ».",
                },
                {
                  objectifId: "en7",
                  question: "Au discours indirect (verbe introducteur au passé), « demain » devient :",
                  options: ["aujourd'hui", "le lendemain", "la veille", "demain (inchangé)"],
                  correctIndex: 1,
                  explanation:
                    "Les embrayeurs se transposent : demain → le lendemain, hier → la veille, aujourd'hui → ce jour-là.",
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
              sub: "Forme du discours, embrayeurs, transposition",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 1 : Identifier la forme",
              objectifTag: "Formes du discours",
              question:
                "Identifiez la forme (DD, DI, DIL, récit de paroles) et justifiez par un indice :\na) « Marie murmura : “Je ne comprends rien.” »   b) « Elle pensait que cet exercice était trop difficile. »   c) « Elle relut l'énoncé. Non, elle ne comprenait rien ! »   d) « Il lui annonça son départ. »   e) « “Quel beau paysage !”, s'écria-t-elle. »",
              correction: [
                { type: "line", label: "a)", text: "**Discours direct** : guillemets, deux-points, verbe introducteur « murmura », pronom « je »." },
                { type: "line", label: "b)", text: "**Discours indirect** : verbe introducteur « pensait » + « que », imparfait, pas de guillemets." },
                { type: "line", label: "c)", text: "**Discours indirect libre** : ni verbe introducteur ni guillemets, imparfait + exclamation, point de vue du personnage." },
                { type: "line", label: "d)", text: "**Récit de paroles** : la prise de parole est mentionnée, aucun contenu reproduit." },
                { type: "line", label: "e)", text: "**Discours direct avec incise** : guillemets, incise à sujet inversé, ponctuation expressive conservée." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 2 : Transposer au discours indirect",
              objectifTag: "Concordance",
              question:
                "Transposez au discours indirect (verbe introducteur au passé) :\na) Il déclara : « Je pars demain. »   b) Elle demanda : « Est-ce que tu viens ? »   c) Il cria : « Taisez-vous ! »   d) Il murmura : « J'avais peur. »",
              correction: [
                { type: "line", label: "a)", text: "Il déclara **qu'il partait le lendemain** (présent → imparfait, demain → le lendemain, je → il)." },
                { type: "line", label: "b)", text: "Elle demanda **s'il venait** (est-ce que → si, présent → imparfait)." },
                { type: "line", label: "c)", text: "Il cria **de se taire** (impératif → de + infinitif)." },
                { type: "line", label: "d)", text: "Il murmura **qu'il avait peur** (imparfait → inchangé)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 3 : Repérer les embrayeurs",
              question:
                "Relevez les embrayeurs et précisez ce qu'ils désignent :\na) « Je vous parle depuis ici, aujourd'hui. »   b) « Nous partirons demain matin. »   c) « Ce livre que tu tiens est le mien. »",
              correction: [
                { type: "line", label: "a)", text: "« je » = le locuteur ; « vous » = le destinataire ; « ici » = le lieu du locuteur ; « aujourd'hui » = le jour de l'énonciation." },
                { type: "line", label: "b)", text: "« Nous » = le locuteur et d'autres ; « demain » = le jour suivant le moment d'énonciation." },
                { type: "line", label: "c)", text: "« Ce » = démonstratif de proximité (objet désigné) ; « tu » = le destinataire ; « le mien » renvoie au locuteur." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : Analyser",
              sub: "Justifier, effet stylistique, cas complexes",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 4 : Discours ancré ou récit ?",
              enonce: "« Écrire n'est pas tout à fait un choix : c'est un aveu d'impuissance. On écrit parce qu'on ne sait par quel autre biais attraper le réel. »",
              question: "a) Ce passage est-il ancré dans l'énonciation ou coupé d'elle ? Deux indices. b) Quel est le statut du pronom « on » ? Peut-on le remplacer par « il » ?",
              correction: [
                { type: "line", label: "a)", text: "**Discours ancré** : présent à valeur de vérité générale (« est, écrit, sait »), absence des temps du récit (ni passé simple ni imparfait de narration). Le locuteur énonce une réflexion dans le présent du discours." },
                { type: "line", label: "b)", text: "« on » est un **pronom personnel indéfini** à valeur généralisante (tout écrivain, le locuteur inclus). On **ne peut pas** le remplacer par « il » sans perdre la portée universelle." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 5 : Le discours indirect libre",
              enonce: "« Elle regarda la lettre une dernière fois. Vraiment, il était impossible de rester. Elle partirait dès l'aube, sans prévenir personne. Qu'ils se débrouillent ! »",
              question: "a) Identifiez la forme de discours rapporté (trois indices). b) Réécrivez les deux dernières phrases en discours indirect (introducteur : « elle pensa »).",
              correction: [
                { type: "line", label: "a)", text: "**Discours indirect libre** : 1) ni guillemets ni verbe introducteur ; 2) conditionnel « partirait » (futur dans le passé, point de vue du personnage) ; 3) exclamation « Qu'ils se débrouillent ! » qui trahit la voix du personnage." },
                { type: "line", label: "b)", text: "« Elle pensa qu'elle partirait dès l'aube, sans prévenir personne, et qu'ils n'avaient qu'à se débrouiller. »" },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : Maîtriser",
              sub: "Analyse complète, formule rédigée",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 6 : Analyse d'un vers de La Fontaine",
              enonce: "« Court à son compagnon, lui dit que c'est merveille / Qu'il n'ait eu seulement que la peur pour tout mal. » (La Fontaine, L'Ours et les Deux Compagnons)",
              question: "a) Identifiez la forme de discours rapporté (indices grammaticaux). b) Quel effet ce choix produit-il dans une fable ?",
              correction: [
                { type: "line", label: "a)", text: "**Discours indirect** : verbe introducteur « dit » + subordonnée en « que » (« lui dit que c'est merveille / qu'il n'ait eu… »), pas de guillemets. Le verbe introducteur est au présent : pas de concordance, le présent et le subjonctif sont maintenus." },
                { type: "line", label: "b)", text: "Le discours indirect intègre les paroles au rythme narratif : il accélère le récit et maintient la voix du narrateur au premier plan, ce qui préserve la distance ironique propre à La Fontaine." },
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
              text: "Ces exercices reproduisent le format de la Partie 1 (analyse de l'énonciation et du discours rapporté) et les exercices de transposition. Les exercices calqués sur des sujets récents portent le badge ✦.",
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format identique au concours",
              title: "Exercice 1 : analyse complète d'un texte",
              enonce:
                "« Elle posa la lettre sur la table. C'était fini, elle le savait. Jamais elle ne reviendrait dans cette maison.\n\nIl avait dit, la veille, qu'il ne comprenait pas. Comment pouvait-elle partir ainsi ?\n\nElle haussa les épaules. Il ne comprendrait jamais, de toute façon. Autant partir vite, sans se retourner. »",
              question: "1) Le premier paragraphe est-il ancré ou coupé de l'énonciation (deux indices) ? 2) Forme du discours rapporté au deuxième paragraphe ? 3) Forme au troisième paragraphe (trois indices + effet) ? 4) Expliquez « la veille » (et non « hier »).",
              correction: [
                { type: "line", text: "**1)** Récit coupé de l'énonciation : pronoms de 3e personne (« elle, ses »), imparfait et conditionnel ancrés dans le système du récit, pas d'embrayeurs déictiques." },
                { type: "line", text: "**2)** Discours indirect : verbe introducteur « avait dit » + subordonnée en « que », concordance (présent → imparfait « ne comprenait »)." },
                { type: "line", text: "**3)** Discours indirect libre : ni verbe introducteur ni guillemets ; conditionnel « ne comprendrait » (futur dans le passé) ; phrases courtes et résolues qui rendent la pensée du personnage. Effet : intimité, accès direct aux pensées, fusion des voix." },
                { type: "line", text: "**4)** « la veille » est la transposition de « hier » : au discours indirect, les embrayeurs deviennent des indicateurs relatifs au récit (hier → la veille, demain → le lendemain, aujourd'hui → ce jour-là)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 2 : transposition d'un dialogue",
              enonce:
                "Transposez au discours indirect (verbe introducteur au passé composé) :\n« Nous partirons demain matin, dit-il. Est-ce que tu as préparé tes bagages ? »\n« Non, répondit-elle. Fais-le sans moi ! »",
              question: "Appliquez toutes les transformations (pronoms, embrayeurs, concordance, introducteurs).",
              correction: [
                { type: "line", text: "Il a dit **qu'ils partiraient le lendemain matin** et a demandé **si elle avait préparé ses bagages**." },
                { type: "line", text: "Elle a répondu **que non** et lui a dit **de le faire sans elle**." },
                { type: "line", text: "Transformations : nous → ils, tu → elle, je → elle, moi → elle ; demain → le lendemain ; futur → conditionnel ; passé composé → plus-que-parfait ; est-ce que → si ; impératif → de + infinitif." },
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
              text: "Ces exercices reproduisent des **erreurs fréquentes** sur l'énonciation et le discours rapporté. Repérer ce qui cloche et corriger rigoureusement est une compétence directement valorisée au concours.",
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 1 · Réponse à corriger : présent de narration",
              enonce: "Réponse d'un candidat : « Le présent dans “On écrit parce qu'on ne sait pas” est un présent de narration. »",
              question: "Identifiez l'erreur et précisez la valeur exacte du présent.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Le présent de narration s'emploie dans un récit au passé pour créer de la vivacité ; ce n'est pas le cas ici", bad: true },
                    { text: "Le texte est ancré dans l'énonciation (réflexion), pas dans un récit" },
                    { text: "Réponse attendue : c'est un **présent d'énonciation** à valeur de vérité générale (voir la notion 7)" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 2 · Réponse à corriger : « est-ce que » au DI",
              enonce: "Copie d'un candidat : « Il lui demanda est-ce qu'elle viendrait avec eux. »",
              question: "Identifiez l'erreur et corrigez.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "« est-ce que » appartient à l'interrogation directe et ne peut pas figurer dans une subordonnée interrogative indirecte", bad: true },
                    { text: "Une question totale se transpose par « si »" },
                    { text: "Réponse attendue : « Il lui demanda **si** elle viendrait avec eux. »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 3 · Réponse à corriger : concordance",
              enonce: "Transposition d'un candidat : « Elle déclara : “Je viendrai demain.” » → « Elle déclara qu'elle viendra demain. »",
              question: "Identifiez les deux erreurs et corrigez.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "« viendra » : le futur doit passer au conditionnel (verbe introducteur « déclara » au passé)", bad: true },
                    { text: "« demain » : l'embrayeur doit devenir « le lendemain »", bad: true },
                    { text: "Réponse attendue : « Elle déclara **qu'elle viendrait le lendemain**. »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 4 · Réponse à corriger : « on » impersonnel",
              enonce: "Réponse d'un candidat : « Le pronom “on” dans “on écrit” est un pronom impersonnel. »",
              question: "Identifiez l'erreur et donnez la bonne analyse.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "« on » n'est pas impersonnel : les pronoms impersonnels sont « il » de « il faut / il pleut » (sans référent)", bad: true },
                    { text: "« on » désigne bien un référent humain générique" },
                    { text: "Réponse attendue : « on » est un **pronom personnel indéfini** (3e personne du singulier) à valeur généralisante" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 5 · Réponse à corriger : DI ou DIL ?",
              enonce: "Réponse d'un candidat : « “Il partirait dès l'aube !” est du discours indirect car il n'y a pas de guillemets. »",
              question: "Identifiez l'erreur sur la distinction DI / DIL et corrigez.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "L'absence de guillemets ne suffit pas : le DI exige un verbe introducteur + une subordonnée", bad: true },
                    { text: "Ici, phrase autonome, sans verbe introducteur ni subordination" },
                    { text: "Réponse attendue : c'est du **discours indirect libre** (conditionnel + exclamation, pensée intégrée au récit)" },
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
                  question: "Les 4 formes du discours rapporté ?",
                  answer:
                    "**Direct** : guillemets, verbe introducteur, embrayeurs du personnage.\n**Indirect** : verbe introducteur + que / si / de, concordance, pas de guillemets.\n**Indirect libre** : ni verbe introducteur ni guillemets, phrases autonomes, temps du récit + ponctuation expressive.\n**Récit de paroles** : prise de parole mentionnée, aucun contenu reproduit.",
                },
                {
                  question: "Concordance des temps (verbe introducteur au passé) ?",
                  answer:
                    "Présent → **imparfait**.\nFutur → **conditionnel présent**.\nPassé composé → **plus-que-parfait**.\nImparfait → **inchangé**. Conditionnel → **inchangé**.",
                  astuce: "💡 Verbe introducteur au présent → aucun changement de temps.",
                },
                {
                  question: "Embrayeurs transposés au discours indirect ?",
                  answer:
                    "demain → **le lendemain** ; hier → **la veille** ; aujourd'hui → **ce jour-là** ; maintenant → **alors** ; ici → **là**.\nPronoms : je / tu → il / elle ; nous → ils / elles.",
                },
                {
                  question: "Les 4 introducteurs du discours indirect ?",
                  answer:
                    "**Déclaration** : verbe + que. **Question totale** : verbe + si (est-ce que disparaît). **Question partielle** : mot interrogatif (où, quand…). **Ordre** : de + infinitif.",
                  astuce: "⚠️ « est-ce que » ne survit jamais au discours indirect.",
                },
                {
                  question: "Discours ancré ou récit coupé : les indices ?",
                  answer:
                    "**Ancré** : je / tu, présent / futur, ici / maintenant / aujourd'hui. Essai, lettre, discours.\n**Récit coupé** : il / elle, passé simple / imparfait, ce jour-là / la veille. Roman, conte, fable.",
                  astuce: "⚠️ Présent d'énonciation (le locuteur parle de maintenant) ≠ présent de narration (récit au passé, voir notion 7).",
                },
                {
                  question: "Le DIL : comment le reconnaître à coup sûr ?",
                  answer:
                    "**Test :** peut-on ajouter « pensa-t-il » sans changer le sens ? Si oui, c'est du discours indirect libre.\nIndices cumulés : conditionnel ou imparfait, ponctuation expressive, phrases autonomes, sans guillemets ni verbe introducteur.",
                  astuce: "💡 Très présent chez Zola, Flaubert, Maupassant.",
                },
                {
                  question: "Qu'est-ce qu'un embrayeur (déictique) ?",
                  answer:
                    "Un mot dont le sens dépend de la situation d'énonciation : je, tu, ici, maintenant, demain, ce…\nContrairement à « la table » ou « Paris », qui désignent toujours la même chose.",
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
              center: { title: "Énonciation", subtitle: "et discours rapporté" },
              branches: [
                {
                  title: "Énonciation",
                  lines: ["Discours ancré : je, présent, ici", "Récit coupé : il, passé simple", "Embrayeurs (déictiques)"],
                  variant: "blue",
                },
                {
                  title: "Formes du discours",
                  lines: ["Direct : guillemets + introducteur", "Indirect : que / si / de", "Indirect libre : ni l'un ni l'autre", "Récit de paroles : sans contenu"],
                  variant: "green",
                },
                {
                  title: "Concordance des temps",
                  lines: ["Présent → imparfait", "Futur → conditionnel", "PC → plus-que-parfait"],
                  variant: "green",
                },
                {
                  title: "Pièges classiques",
                  lines: ["Présent d'énonciation ≠ narration", "« est-ce que » disparaît au DI", "« on » = personnel indéfini"],
                  variant: "yellow",
                },
                {
                  title: "Renvois",
                  lines: ["Valeurs des temps → notion 7", "Cohérence textuelle → notion 13", "Phonologie → notion 15"],
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
