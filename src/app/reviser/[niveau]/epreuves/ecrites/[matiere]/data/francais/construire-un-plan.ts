import type { Fiche } from "@/components/fiche/types";
import type { Niveau } from "@/lib/niveau";

/**
 * Notion 19 : Construire un plan (Partie 3 : développement rédigé).
 *
 * Le contenu disciplinaire est commun aux deux concours (voir CHARTE_FRANCAIS.md
 * §0) : seules diffèrent les mentions de cadre (durée de l'épreuve, longueur du
 * texte support) et, pour le L3, l'ouverture possible vers les notions de lycée.
 * Une seule fabrique construit donc les deux fiches, en injectant le cadre du
 * niveau ; voir ficheConstruirePlanL3 / ficheConstruirePlanM2 en bas de fichier.
 */

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "cp1", label: "J'analyse la consigne (verbe, objet, périmètre) pour cerner exactement ce qui est demandé" },
  { id: "cp2", label: "Je transforme la question en un fil directeur (problématique ou intention de lecture)" },
  { id: "cp3", label: "Je choisis le type de plan adapté à la consigne (thématique ou dialectique)" },
  { id: "cp4", label: "Je dégage deux ou trois axes distincts, équilibrés et non redondants" },
  { id: "cp5", label: "J'ordonne les axes selon une progression (du constat vers l'interprétation)" },
  { id: "cp6", label: "J'appuie chaque sous-partie sur un élément précis du ou des textes" },
  { id: "cp7", label: "Je rédige un plan détaillé au brouillon avant de me lancer dans la rédaction" },
];

type CadreNiveau = {
  badge: string;
  texteSupport: string;
  cadre: string;
};

const CADRE: Record<Niveau, CadreNiveau> = {
  m2: {
    badge: "Épreuve écrite de français · 3 h",
    texteSupport: "un texte de 400 à 600 mots environ",
    cadre:
      "Au concours **M2**, le français est une épreuve écrite autonome de **3 heures**. La **Partie 3** demande, à partir d'une question portant sur " +
      "un texte de 400 à 600 mots environ, de produire un **développement rédigé et structuré**. C'est la partie qui pèse le plus dans la note : un développement " +
      "bien construit fait la différence. Avant de rédiger (notion 20), tout se joue dans le plan.",
  },
  l3: {
    badge: "Épreuve commune français + maths · 4 h",
    texteSupport: "un texte de 500 mots maximum",
    cadre:
      "Au concours **L3**, le français est intégré à une épreuve commune avec les mathématiques (**4 heures** au total). La partie « développement rédigé » " +
      "s'appuie sur un texte de 500 mots maximum. Le support peut mobiliser, en plus du programme de cycle 4, des notions d'étude de la langue vues au **lycée** " +
      "(2de et 1re), mais la démarche pour construire le plan reste exactement la même. C'est la partie la plus valorisée : tout se joue dans le plan, avant la rédaction (notion 20).",
  },
};

function ficheConstruirePlan(niveau: Niveau): Fiche {
  const cadre = CADRE[niveau];

  return {
    slug: "construire-un-plan",
    matiere: "francais",
    numero: 19,
    partie: "Partie 3 : Développement rédigé",
    title: "Construire un plan",
    subtitle:
      "Analyser la consigne, problématiser, choisir un type de plan, dégager des axes et organiser ses idées avant de rédiger le développement",
    badges: [
      { label: "★★★ Le cœur de la Partie 3", variant: "hot" },
      { label: cadre.badge, variant: "info" },
    ],
    metaTitle:
      "Construire un plan : développement rédigé du CRPE · Fiche de révision | Maitrizz",
    metaDescription:
      "Fiche CRPE complète sur la construction du plan en Partie 3 (développement rédigé) : analyser la consigne, formuler une problématique, choisir un plan thématique ou dialectique, dégager des axes équilibrés et non redondants, appuyer chaque idée sur le texte. Méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                  "En Partie 3, le développement n'est pas un résumé du texte : c'est une réponse organisée à une question. Un correcteur repère en quelques lignes si le plan tient. Construire ce plan, c'est tout l'objet de cette fiche ; la rédaction proprement dite est traitée à la notion 20.",
                items: [
                  {
                    number: "①",
                    title: "Analyser la consigne",
                    text: "Repérer le verbe de consigne, l'objet exact et le périmètre : c'est ce qui empêche le hors-sujet.",
                  },
                  {
                    number: "②",
                    title: "Problématiser et choisir le plan",
                    text: "Transformer la question en fil directeur, puis choisir un plan thématique ou dialectique selon la consigne.",
                  },
                  {
                    number: "③",
                    title: "Dégager et ordonner les axes",
                    text: "Deux ou trois axes distincts, équilibrés, non redondants, rangés dans une progression.",
                  },
                  {
                    number: "④",
                    title: "Le plan détaillé au brouillon",
                    text: "Noter sous chaque axe les idées et les appuis textuels, avant d'écrire la moindre phrase.",
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
                text: cadre.cadre,
              },
              {
                type: "subsection",
                number: "①",
                title: "Analyser la consigne",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Avant toute idée, on lit la consigne comme un contrat. Trois éléments à isoler : le **verbe de consigne** (ce qu'on doit faire), l'**objet** (sur quoi exactement) et le **périmètre** (un seul texte, plusieurs, tout le texte ou un passage).",
                  },
                  {
                    type: "table",
                    title: "Les verbes de consigne et ce qu'ils appellent",
                    headers: ["Verbe de consigne", "Ce qu'il demande", "Plan appelé"],
                    rows: [
                      ["Analysez, montrez comment, étudiez", "Explorer un fonctionnement, des procédés, des thèmes", "Plutôt thématique"],
                      ["En quoi, dans quelle mesure, peut-on dire que", "Examiner une affirmation, la nuancer", "Plutôt dialectique"],
                      ["Comparez, confrontez", "Mettre deux textes en relation (points communs, écarts)", "Comparatif, par points"],
                      ["Discutez, partagez-vous ce point de vue", "Prendre position en pesant le pour et le contre", "Dialectique"],
                    ],
                  },
                  {
                    type: "callout",
                    variant: "warning",
                    icon: "⚠️",
                    title: "Le verbe change tout",
                    text: "« **Analysez** comment l'auteur rend la scène vivante » n'appelle pas le même plan que « **Dans quelle mesure** cette scène est-elle vivante ». Le premier veut un relevé organisé de procédés ; le second veut une discussion nuancée. Lire le verbe de travers, c'est partir en hors-sujet dès la première ligne.",
                  },
                ],
              },
              {
                type: "subsection",
                number: "②",
                title: "Problématiser et choisir le type de plan",
                blocks: [
                  {
                    type: "paragraph",
                    text: "**Problématiser**, c'est reformuler la question en une intention de lecture claire, qui guidera tout le développement. On ne recopie pas la consigne : on dit ce qu'on va chercher à montrer.",
                  },
                  {
                    type: "notionCardGrid",
                    columns: 1,
                    cards: [
                      {
                        title: "Le plan thématique (ou analytique)",
                        definition: "Chaque axe explore un aspect différent de l'objet : des procédés, des thèmes, des fonctions. Les axes s'additionnent pour faire le tour de la question.",
                        exemples: [
                          "Question : « Analysez comment le narrateur fait naître la peur. » → Axe 1 : le décor et les sensations · Axe 2 : le rythme et la syntaxe · Axe 3 : le point de vue du narrateur.",
                        ],
                        test: "À choisir quand la consigne demande d'analyser, de montrer comment, d'étudier des procédés ou des thèmes.",
                      },
                      {
                        title: "Le plan dialectique (ou nuancé)",
                        definition: "On examine une affirmation : d'abord ce qui la confirme, ensuite ce qui la nuance ou la limite, et l'on aboutit à une position équilibrée.",
                        exemples: [
                          "Question : « Dans quelle mesure ce personnage est-il sympathique ? » → Axe 1 : ce qui le rend attachant · Axe 2 : ce qui tempère cette sympathie · (Axe 3 : une lecture qui dépasse l'opposition).",
                        ],
                        test: "À choisir quand la consigne invite à discuter, à nuancer, à se demander « dans quelle mesure » ou « peut-on dire que ».",
                      },
                    ],
                  },
                  {
                    type: "callout",
                    variant: "info",
                    icon: "💡",
                    title: "Deux ou trois axes, pas plus",
                    text: "Un développement de Partie 3 tient en deux ou trois grandes parties. Trois axes solides valent mieux que cinq axes survolés. Mieux vaut creuser que multiplier.",
                  },
                ],
              },
              {
                type: "subsection",
                number: "③",
                title: "Dégager et ordonner les axes",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Chaque axe doit être **distinct** des autres (pas deux parties qui disent la même chose), **équilibré** (des parties de poids comparable) et **utile** (chaque axe répond à la problématique). À l'intérieur, on range les idées en sous-parties, chacune appuyée sur le texte.",
                  },
                  {
                    type: "bullets",
                    items: [
                      "**Une idée par sous-partie**, jamais un simple résumé du passage.",
                      "**Un appui textuel** pour chaque idée : une citation courte entre guillemets ou un renvoi précis (le mot, la phrase, le procédé).",
                      "**Une progression** : du plus visible au plus subtil, du constat vers l'interprétation, ou du confirmé vers le nuancé.",
                    ],
                  },
                  {
                    type: "callout",
                    variant: "info",
                    icon: "💡",
                    title: "Le texte est votre réserve d'arguments",
                    text: "Un plan solide se nourrit du texte : procédés de style (notion 18), lexique (notions 16-17), connecteurs et organisation (notion 13). Chaque sous-partie cite ou renvoie au texte. Un axe sans appui textuel est une opinion, pas une analyse.",
                  },
                ],
              },
              {
                type: "subsection",
                number: "④",
                title: "Le plan détaillé au brouillon",
                blocks: [
                  {
                    type: "paragraph",
                    text: "On ne rédige jamais directement. On pose d'abord, au brouillon, un **plan détaillé** : la problématique en une phrase, puis chaque axe avec ses sous-parties et l'appui textuel correspondant. C'est ce squelette qui garantit l'équilibre et évite de s'égarer en cours de rédaction.",
                  },
                  {
                    type: "formulaBlock",
                    title: "La trame d'un plan détaillé",
                    lines: [
                      "Problématique : en quoi / comment / dans quelle mesure ... ?",
                      "Axe 1, [idée directrice] : sous-partie a (+ appui) · sous-partie b (+ appui)",
                      "Axe 2, [idée directrice] : sous-partie a (+ appui) · sous-partie b (+ appui)",
                      "(Axe 3, [idée directrice] : ...)",
                    ],
                    note: "L'introduction et la conclusion se rédigent une fois ce squelette posé : c'est l'objet de la notion 20.",
                  },
                ],
              },
              {
                type: "piegeCard",
                variant: "rouge",
                title: "Piège n°1 · répondre à côté de la consigne",
                badge: "Erreur très fréquente",
                faux: "La question dit « Dans quelle mesure le personnage est-il héroïque ? » et le développement se contente de raconter ce qu'il fait.",
                vrai: "Il fallait **discuter** le degré d'héroïsme (ce qui l'est, ce qui l'est moins), pas résumer l'action.",
                methode: "Souligner le verbe de consigne et le recopier en haut du brouillon : tout le plan doit y répondre.",
              },
              {
                type: "piegeCard",
                variant: "rouge",
                title: "Piège n°2 · le plan catalogue ou la paraphrase",
                badge: "Perte de points",
                faux: "Suivre le texte ligne à ligne : « d'abord l'auteur dit que..., ensuite il ajoute que... »",
                vrai: "Le développement s'organise par **idées**, pas dans l'ordre du texte. On regroupe ce qui va ensemble sous chaque axe.",
                methode: "Pour chaque sous-partie, se demander : « Quelle idée est-ce que je défends ? » et non « De quoi parle ce passage ? »",
              },
              {
                type: "piegeCard",
                variant: "orange",
                title: "Piège n°3 · des axes déséquilibrés ou redondants",
                badge: "Cas fréquent",
                faux: "Un axe de deux pages, un autre de trois lignes ; ou deux axes qui répètent la même chose sous deux titres.",
                vrai: "Des axes de poids comparable et nettement distincts. Si deux axes se recoupent, c'est qu'il n'y en a qu'un.",
                methode: "Vérifier que chaque axe pourrait se résumer en une phrase différente des autres.",
              },
              {
                type: "piegeCard",
                variant: "bleu",
                title: "Piège n°4 · le plan tout fait plaqué sur la question",
                badge: "Réflexe à corriger",
                faux: "Appliquer systématiquement « thèse / antithèse » même quand la consigne demande seulement d'analyser des procédés.",
                vrai: "Le type de plan **découle de la consigne** : thématique pour « analysez comment », dialectique pour « dans quelle mesure ».",
                methode: "Choisir le plan après avoir lu le verbe de consigne, jamais avant.",
              },
              {
                type: "primaireBox",
                title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
                text: "**Cycle 3 :** en production d'écrit, les élèves apprennent à planifier avant d'écrire (chercher des idées, les ordonner, faire un brouillon) et à organiser un texte en paragraphes.\n\n**Ce que vous devez savoir dire :** « Planifier puis réviser son écrit est une compétence enseignée dès le cycle 3. Construire un plan au concours, c'est exactement la démarche que je ferai pratiquer à mes élèves : on cherche des idées, on les regroupe, on les met en ordre avant de rédiger. »",
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
                text: "Analyser la consigne, choisir le type de plan, puis bâtir le plan détaillé au brouillon. Chacune se termine par un checkpoint.",
              },
              {
                type: "rappelExpress",
                title: "Rappel express : ce que le jury attend d'un plan",
                blocks: [
                  {
                    type: "formulaBlock",
                    lines: [
                      "Le plan répond à la consigne (verbe + objet + périmètre), pas au texte ligne à ligne.",
                      "Deux ou trois axes distincts, équilibrés, non redondants, dans une progression.",
                      "Chaque sous-partie = une idée + un appui textuel précis.",
                    ],
                  },
                  {
                    type: "callout",
                    variant: "warning",
                    text: "⚠️ On consacre du temps au brouillon : un plan détaillé posé d'avance évite le hors-sujet et le déséquilibre, qui coûtent cher.",
                  },
                ],
              },
              {
                type: "methodeGroup",
                number: "①",
                title: "Analyser la consigne",
                intro: "**Question typique :** une consigne portant sur le texte, par exemple « Analysez comment l'auteur rend la scène inquiétante. »",
                steps: [
                  {
                    number: "1",
                    text: "**Souligner le verbe de consigne** et le recopier au brouillon.",
                    example: { lines: ["« Analysez comment » → relevé organisé de procédés → plan thématique"] },
                  },
                  {
                    number: "2",
                    text: "**Isoler l'objet et le périmètre** : sur quoi exactement, dans tout le texte ou un passage, un seul texte ou plusieurs.",
                    example: { lines: ["objet : ce qui rend la scène inquiétante · périmètre : le texte entier"] },
                  },
                  {
                    number: "💡",
                    text: "**Reformuler la consigne** avec ses propres mots pour vérifier qu'on l'a comprise.",
                    warn: "⚠️ Si la reformulation s'éloigne de la consigne, on relit : c'est le premier piège du hors-sujet.",
                  },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                title: "Checkpoint : à vous de jouer",
                badge: "30 secondes",
                question: "Consigne : « Dans quelle mesure ce portrait est-il élogieux ? » Quel type de plan ?",
                correction: [
                  { type: "line", text: "**Plan dialectique** : « dans quelle mesure » invite à nuancer. Axe 1 : ce qui est élogieux · Axe 2 : ce qui tempère l'éloge." },
                  { type: "note", text: "Repéré le verbe de consigne ? Sinon, revoyez l'étape ①." },
                ],
              },
              {
                type: "methodeGroup",
                number: "②",
                title: "Problématiser et choisir le plan",
                intro: "**Objectif :** transformer la question en fil directeur et arrêter le type de plan.",
                steps: [
                  {
                    number: "1",
                    text: "**Formuler la problématique** en une phrase (en quoi, comment, dans quelle mesure...).",
                    example: { lines: ["« Par quels moyens le texte installe-t-il un climat inquiétant ? »"] },
                  },
                  {
                    number: "2",
                    text: "**Choisir le plan** d'après le verbe : thématique (analyser, montrer comment) ou dialectique (discuter, dans quelle mesure).",
                    example: { lines: ["« analyser comment » → plan thématique par familles de procédés"] },
                  },
                  {
                    number: "💡",
                    text: "**Vérifier que le plan répond à la problématique** : chaque axe doit être une étape de la réponse.",
                    warn: "⚠️ Ne pas plaquer un plan thèse/antithèse sur une consigne d'analyse.",
                  },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                title: "Checkpoint : à vous de jouer",
                badge: "30 secondes",
                question: "Pour « Analysez comment le narrateur fait naître la peur », proposez deux axes thématiques.",
                correction: [
                  { type: "line", text: "Par exemple : **Axe 1** : le décor et les sensations (vue, ouïe) · **Axe 2** : le rythme des phrases et le point de vue qui resserre l'angoisse. Deux familles de procédés distinctes." },
                  { type: "note", text: "Deux axes distincts trouvés ? Direction le dernier checkpoint." },
                ],
              },
              {
                type: "methodeGroup",
                number: "③",
                title: "Construire le plan détaillé",
                intro: "**Objectif :** poser au brouillon un squelette complet avant de rédiger.",
                steps: [
                  {
                    number: "1",
                    text: "**Sous chaque axe, noter les sous-parties** (une idée chacune).",
                    example: { lines: ["Axe 1 : a) le décor nocturne · b) les bruits isolés"] },
                  },
                  {
                    number: "2",
                    text: "**Accrocher un appui textuel à chaque idée** : citation courte ou renvoi précis.",
                    example: { lines: ["a) « les volets battaient » · b) « un grincement, puis le silence »"] },
                  },
                  {
                    number: "💡",
                    text: "**Relire le squelette** pour vérifier équilibre, distinction des axes et progression.",
                    warn: "⚠️ Deux axes qui se résument par la même phrase : il n'y en a qu'un, à refondre.",
                  },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                title: "Checkpoint : à vous de jouer",
                badge: "30 secondes",
                question: "Un candidat propose : Axe 1 « le décor fait peur », Axe 2 « l'ambiance est effrayante ». Que corriger ?",
                correction: [
                  { type: "line", text: "Les deux axes sont **redondants** (décor et ambiance se recoupent). Refondre en axes distincts : par exemple le décor et les sensations d'un côté, le rythme et le point de vue de l'autre." },
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
                text: "7 questions rapides pour vérifier que le Cours et la Méthode sont bien ancrés. Le détail objectif par objectif est dans l'onglet Auto-évaluation.",
              },
              {
                type: "quizBlock",
                questions: [
                  {
                    objectifId: "cp1",
                    question: "Dans une consigne, le premier élément à isoler est :",
                    options: ["le nombre de lignes attendu", "le verbe de consigne", "le titre du texte", "le nom de l'auteur"],
                    correctIndex: 1,
                    explanation:
                      "Le verbe de consigne (analysez, discutez, dans quelle mesure...) indique ce qu'on doit faire et donc le type de plan.",
                  },
                  {
                    objectifId: "cp3",
                    question: "« Analysez comment l'auteur rend la scène vivante » appelle plutôt :",
                    options: ["un plan dialectique", "un plan thématique", "un résumé", "une paraphrase"],
                    correctIndex: 1,
                    explanation:
                      "« Analysez comment » demande un relevé organisé de procédés : c'est un plan thématique.",
                  },
                  {
                    objectifId: "cp2",
                    question: "Problématiser une question, c'est :",
                    options: [
                      "recopier la consigne en haut de la copie",
                      "reformuler la question en un fil directeur qui guide le développement",
                      "résumer le texte support",
                      "donner d'emblée son avis personnel",
                    ],
                    correctIndex: 1,
                    explanation:
                      "On transforme la question en une intention de lecture claire (en quoi, comment, dans quelle mesure...), sans recopier la consigne.",
                  },
                  {
                    objectifId: "cp4",
                    question: "Un bon développement de Partie 3 comporte généralement :",
                    options: ["un seul axe", "deux ou trois axes", "cinq à six axes", "autant d'axes que de paragraphes du texte"],
                    correctIndex: 1,
                    explanation:
                      "Deux ou trois axes solides : on creuse plutôt que de multiplier les parties survolées.",
                  },
                  {
                    objectifId: "cp5",
                    question: "Ordonner les axes d'un plan, c'est le plus souvent :",
                    options: [
                      "les classer par ordre alphabétique",
                      "suivre l'ordre d'apparition dans le texte",
                      "aller du constat le plus visible vers l'interprétation la plus fine",
                      "placer l'axe le plus long en premier",
                    ],
                    correctIndex: 2,
                    explanation:
                      "On vise une progression : du plus évident vers le plus subtil, du constat vers l'interprétation (ou du confirmé vers le nuancé).",
                  },
                  {
                    objectifId: "cp6",
                    question: "Chaque sous-partie du plan doit comporter :",
                    options: ["une idée et un appui textuel", "uniquement une citation", "un résumé du passage", "une opinion personnelle sans le texte"],
                    correctIndex: 0,
                    explanation:
                      "Une idée directrice, appuyée sur une citation courte ou un renvoi précis au texte.",
                  },
                  {
                    objectifId: "cp7",
                    question: "Avant de rédiger le développement, on doit d'abord :",
                    options: [
                      "écrire l'introduction au propre",
                      "poser un plan détaillé au brouillon",
                      "compter les mots du texte",
                      "recopier la consigne dans la copie",
                    ],
                    correctIndex: 1,
                    explanation:
                      "Le plan détaillé (problématique, axes, sous-parties, appuis) est le squelette qui garantit équilibre et cohérence.",
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
                label: "Niveau 1 : Lire la consigne",
                sub: "Verbe de consigne et type de plan",
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "echauffement",
                title: "Exercice 1 : Thématique ou dialectique ?",
                objectifTag: "Type de plan",
                question:
                  "Indiquez le type de plan appelé :\na) « Analysez les procédés du comique. » · b) « Peut-on dire que ce dénouement est heureux ? » · c) « Montrez comment le texte critique la société. » · d) « Discutez l'idée que la nature est un refuge. »",
                correction: [
                  { type: "line", text: "a) thématique · b) dialectique · c) thématique · d) dialectique. Repère : « analysez / montrez comment » → thématique ; « peut-on dire / discutez » → dialectique." },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "echauffement",
                title: "Exercice 2 : Reformuler en problématique",
                objectifTag: "Problématiser",
                question:
                  "Transformez la consigne en une problématique :\n« Analysez comment l'auteur suscite l'émotion du lecteur. »",
                correction: [
                  { type: "line", text: "Par exemple : « Par quels moyens le texte parvient-il à émouvoir son lecteur ? » On garde l'objet (l'émotion) et on annonce une recherche de moyens." },
                ],
              },
              {
                type: "niveauBanner",
                level: "n2",
                stars: "★★☆",
                label: "Niveau 2 : Dégager des axes",
                sub: "Axes distincts, équilibrés, non redondants",
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "n2",
                title: "Exercice 3 : Trois axes pour une analyse",
                enonce: "Consigne : « Analysez comment ce passage rend la ville oppressante. »",
                question: "Proposez deux ou trois axes thématiques distincts.",
                correction: [
                  { type: "line", text: "Par exemple : **Axe 1** : le décor (rues étroites, hauteur des murs, lumière rare) · **Axe 2** : les sensations et le corps (bruit, foule, étouffement) · **Axe 3** : le regard du personnage qui projette son malaise sur la ville." },
                  { type: "line", text: "Trois familles distinctes (décor, sensations, point de vue) : aucun axe ne recoupe l'autre." },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "n2",
                title: "Exercice 4 : Repérer le défaut du plan",
                enonce: "Plan proposé pour « Dans quelle mesure le héros est-il courageux ? » : Axe 1 « il est courageux », Axe 2 « il est brave », Axe 3 « il n'a pas peur ».",
                question: "Quel est le défaut ? Proposez un plan corrigé.",
                correction: [
                  { type: "line", text: "**Défaut** : les trois axes sont redondants (courageux, brave, sans peur disent la même chose) et le plan ne nuance pas, alors que « dans quelle mesure » l'exige." },
                  { type: "line", text: "**Plan corrigé (dialectique)** : Axe 1 : ce qui montre son courage (actes, prises de risque) · Axe 2 : ce qui le nuance (hésitations, peur surmontée, motivations intéressées)." },
                ],
              },
              {
                type: "niveauBanner",
                level: "n3",
                stars: "★★★",
                label: "Niveau 3 : Plan détaillé complet",
                sub: "Problématique, axes, sous-parties, appuis",
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "n3",
                title: "Exercice 5 : Un plan détaillé de bout en bout",
                enonce:
                  "Texte (extrait fictif de type récit) : « La salle de classe s'était tue. Au premier rang, Lucie fixait sa copie blanche, le stylo immobile. Dehors, un oiseau chantait, indifférent. La cloche, soudain, déchira le silence : trop tôt. »",
                question: "Consigne : « Analysez comment ce passage traduit l'angoisse de Lucie. » Rédigez un plan détaillé (problématique, deux axes, sous-parties et appuis).",
                correction: [
                  { type: "line", text: "**Problématique** : par quels moyens ce court passage donne-t-il à sentir l'angoisse de Lucie ?" },
                  { type: "line", text: "**Axe 1, le corps et l'immobilité** : a) la copie blanche et le « stylo immobile » disent la paralysie · b) le silence de la salle (« s'était tue ») isole Lucie." },
                  { type: "line", text: "**Axe 2, le contraste et le temps qui presse** : a) l'oiseau « indifférent » dehors souligne par contraste l'enfermement intérieur · b) la cloche qui « déchira le silence » et le « trop tôt » traduisent l'urgence et la panique." },
                  { type: "note", text: "Deux axes distincts (l'immobilité du corps ; le contraste et l'urgence), chacun appuyé sur des citations courtes." },
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
                text: "Ces exercices reproduisent le format de la Partie 3 : à partir d'une question sur un texte, on construit le plan du développement (la rédaction complète relève de la notion 20). Les exercices calqués sur le format du concours portent le badge ✦.",
              },
              {
                type: "exerciceCard",
                variant: "annale",
                badge: "✦ Format identique au concours",
                title: "Exercice 1 : Construire le plan d'un développement",
                enonce:
                  "Texte support (extrait) : un narrateur revient, adulte, dans la maison de son enfance et la trouve plus petite, plus terne qu'en souvenir ; il hésite entre nostalgie et soulagement.",
                question: "Consigne : « En quoi ce passage illustre-t-il le décalage entre le souvenir et la réalité ? » Construisez le plan détaillé du développement (problématique, axes, sous-parties, appuis envisagés).",
                correction: [
                  { type: "paragraph", text: "**Problématique** : comment le texte met-il en scène l'écart entre la maison rêvée du souvenir et la maison réellement retrouvée ? **Axe 1, la maison du souvenir, idéalisée** : a) les marques d'un passé embelli · b) l'attente du narrateur en arrivant. **Axe 2, la maison réelle, décevante** : a) le lexique de la petitesse et de la grisaille · b) les sensations qui démentent le souvenir. **Axe 3 (facultatif), un sentiment ambivalent** : la nostalgie le dispute au soulagement, ce qui dépasse la simple déception. Chaque sous-partie s'appuiera sur une citation courte du texte." },
                ],
              },
              {
                type: "exerciceCard",
                variant: "crpe",
                title: "Exercice 2 : Du verbe de consigne au plan",
                enonce:
                  "Même texte que l'exercice 1.",
                question: "Consigne : « Analysez les procédés par lesquels l'auteur rend sensible la déception du narrateur. » En quoi le plan diffère-t-il de celui de l'exercice 1 ?",
                correction: [
                  { type: "paragraph", text: "Le verbe « analysez les procédés » appelle un **plan thématique par familles de procédés**, et non une discussion. Par exemple : **Axe 1, le lexique** (champ de la petitesse, de la grisaille, de l'usure) · **Axe 2, les comparaisons et le rythme** (images du rapetissement, phrases courtes du constat) · **Axe 3, le point de vue** (le regard adulte qui corrige le souvenir d'enfant). On organise par moyens d'écriture, pas par étapes d'un raisonnement." },
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
                text: "Ces exercices reproduisent des **erreurs fréquentes** de plan en Partie 3. Repérer ce qui cloche et proposer une correction rigoureuse est une compétence directement valorisée au concours.",
              },
              {
                type: "exerciceCard",
                variant: "err-type",
                title: "Exercice 1 · Plan à corriger : la paraphrase",
                enonce: "Plan d'un candidat : « 1) Au début, l'auteur décrit la maison. 2) Ensuite, il parle de son enfance. 3) À la fin, il s'en va. »",
                question: "Identifiez et corrigez le défaut de ce plan.",
                correction: [
                  {
                    type: "checklist",
                    items: [
                      { text: "Le plan suit le texte ligne à ligne : c'est de la paraphrase, pas une analyse", bad: true },
                      { text: "Un développement s'organise par idées, pas dans l'ordre du texte" },
                      { text: "Plan attendu : des axes thématiques répondant à la consigne (par exemple souvenir idéalisé / réalité décevante), chacun appuyé sur le texte" },
                    ],
                  },
                ],
              },
              {
                type: "exerciceCard",
                variant: "err-type",
                title: "Exercice 2 · Plan à corriger : le hors-sujet",
                enonce: "Consigne : « Dans quelle mesure ce personnage est-il attachant ? » Plan d'un candidat : « 1) Sa vie · 2) Son physique · 3) Ses actions. »",
                question: "Identifiez et corrigez le défaut.",
                correction: [
                  {
                    type: "checklist",
                    items: [
                      { text: "Le plan décrit le personnage mais ne discute pas son caractère attachant : il ne répond pas à « dans quelle mesure »", bad: true },
                      { text: "La consigne dialectique impose de peser le pour et le contre" },
                      { text: "Plan attendu : 1) ce qui rend le personnage attachant · 2) ce qui tempère cette sympathie, avec à chaque fois des appuis textuels" },
                    ],
                  },
                ],
              },
              {
                type: "exerciceCard",
                variant: "err-type",
                title: "Exercice 3 · Plan à corriger : axes déséquilibrés",
                enonce: "Plan d'un candidat : « Axe 1 (détaillé sur une page) : les nombreux procédés comiques. Axe 2 (deux lignes) : c'est aussi un peu triste. »",
                question: "Identifiez et corrigez le défaut.",
                correction: [
                  {
                    type: "checklist",
                    items: [
                      { text: "Les deux axes sont très déséquilibrés : un axe développé, un axe quasi vide", bad: true },
                      { text: "Les axes doivent être de poids comparable et chacun nourri d'appuis textuels" },
                      { text: "Correction : développer le second axe (en quoi le passage est-il aussi grave ou émouvant ?) ou le fondre dans le premier s'il ne tient pas" },
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
                    question: "Quels sont les trois éléments à isoler dans une consigne ?",
                    answer:
                      "Le **verbe de consigne** (ce qu'on doit faire), l'**objet** (sur quoi exactement) et le **périmètre** (un ou plusieurs textes, tout ou un passage).",
                    astuce: "💡 Souligner le verbe et le recopier en haut du brouillon.",
                  },
                  {
                    question: "Plan thématique ou plan dialectique : comment choisir ?",
                    answer:
                      "**Thématique** quand la consigne demande d'analyser, de montrer comment, d'étudier des procédés.\n**Dialectique** quand elle invite à discuter, à nuancer (« dans quelle mesure », « peut-on dire que »).",
                    astuce: "💡 Le type de plan découle du verbe de consigne.",
                  },
                  {
                    question: "Combien d'axes dans un développement de Partie 3 ?",
                    answer:
                      "Deux ou trois grandes parties, distinctes, équilibrées et non redondantes.",
                    astuce: "💡 Trois axes creusés valent mieux que cinq survolés.",
                  },
                  {
                    question: "Que doit contenir chaque sous-partie ?",
                    answer:
                      "Une **idée directrice** et un **appui textuel** précis : une citation courte ou un renvoi au texte (mot, phrase, procédé).",
                    astuce: "⚠️ Un axe sans appui textuel est une opinion, pas une analyse.",
                  },
                  {
                    question: "Comment vérifier que deux axes sont bien distincts ?",
                    answer:
                      "Chaque axe doit pouvoir se résumer en une phrase différente des autres. Si deux axes se résument pareil, il n'y en a qu'un.",
                  },
                  {
                    question: "Pourquoi un plan détaillé au brouillon ?",
                    answer:
                      "Pour poser la problématique, les axes, les sous-parties et les appuis avant de rédiger : ce squelette garantit l'équilibre et évite le hors-sujet.",
                    astuce: "💡 La rédaction proprement dite est l'objet de la notion 20.",
                  },
                  {
                    question: "L'erreur de plan la plus fréquente ?",
                    answer:
                      "La paraphrase : suivre le texte ligne à ligne (« d'abord il dit..., ensuite... ») au lieu d'organiser par idées.",
                    astuce: "⚠️ Se demander « quelle idée je défends ? », pas « de quoi parle ce passage ? ».",
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
                center: { title: "Construire", subtitle: "un plan" },
                branches: [
                  {
                    title: "Analyser la consigne",
                    lines: ["Verbe de consigne", "Objet", "Périmètre"],
                    variant: "blue",
                  },
                  {
                    title: "Choisir le plan",
                    lines: ["Thématique : analyser, montrer comment", "Dialectique : dans quelle mesure, discuter"],
                    variant: "green",
                  },
                  {
                    title: "Axes",
                    lines: ["2 ou 3 axes", "Distincts, équilibrés", "Une idée + un appui par sous-partie"],
                    variant: "green",
                  },
                  {
                    title: "Pièges classiques",
                    lines: ["Hors-sujet", "Paraphrase / plan catalogue", "Axes redondants ou déséquilibrés"],
                    variant: "yellow",
                  },
                  {
                    title: "Renvois",
                    lines: ["Cohérence du texte → notion 13", "Procédés et lexique → notions 16-18", "Rédiger → notion 20 · Culture → notion 21"],
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
}

export const ficheConstruirePlanL3 = ficheConstruirePlan("l3");
export const ficheConstruirePlanM2 = ficheConstruirePlan("m2");
