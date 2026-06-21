import type { Fiche } from "@/components/fiche/types";
import type { Niveau } from "@/lib/niveau";

/**
 * Notion 20 : Rédiger le développement (Partie 3 : développement rédigé).
 *
 * Suite de la notion 19 (construire le plan) : une fois le plan posé, on rédige
 * l'introduction, les paragraphes argumentés et la conclusion. Comme pour la
 * notion 19, le contenu disciplinaire est commun L3/M2 (voir CHARTE_FRANCAIS.md
 * §0) ; seul le cadre diffère. Une fabrique unique construit les deux fiches ;
 * voir ficheRedigerDeveloppementL3 / ...M2 en bas de fichier.
 */

const OBJECTIFS = [
  { id: "rd1", label: "Je rédige une introduction en trois temps : amorce, problématique, annonce du plan" },
  { id: "rd2", label: "Je construis un paragraphe argumenté : idée directrice, appui textuel, analyse" },
  { id: "rd3", label: "J'intègre mes citations correctement (courtes, entre guillemets, fondues dans la phrase)" },
  { id: "rd4", label: "J'enchaîne mes parties avec des connecteurs et des transitions" },
  { id: "rd5", label: "Je rédige une conclusion qui répond à la problématique et propose une ouverture" },
  { id: "rd6", label: "J'écris au présent de l'analyse, dans un niveau de langue correct" },
  { id: "rd7", label: "Je relis pour corriger la langue et vérifier que je réponds bien à la consigne" },
];

type CadreNiveau = { badge: string; cadre: string };

const CADRE: Record<Niveau, CadreNiveau> = {
  m2: {
    badge: "Épreuve écrite de français · 3 h",
    cadre:
      "Au concours **M2** (épreuve de français de **3 heures**), une fois le plan construit (notion 19), il reste à rédiger un texte continu et structuré : " +
      "une introduction, deux ou trois parties argumentées et une conclusion. C'est la qualité de cette rédaction qui transforme un bon plan en bonne copie. " +
      "On garde du temps pour la relecture : la langue est évaluée.",
  },
  l3: {
    badge: "Épreuve commune français + maths · 4 h",
    cadre:
      "Au concours **L3** (épreuve commune français et mathématiques, **4 heures**), le développement rédigé suit le plan construit à la notion 19 : " +
      "introduction, deux ou trois parties argumentées, conclusion. La maîtrise de la langue, attendue jusqu'au niveau **lycée** (2de et 1re), est évaluée : " +
      "on réserve du temps pour la relecture.",
  },
};

function ficheRedigerDeveloppement(niveau: Niveau): Fiche {
  const cadre = CADRE[niveau];

  return {
    slug: "rediger-le-developpement",
    matiere: "francais",
    numero: 20,
    partie: "Partie 3 : Développement rédigé",
    title: "Rédiger le développement",
    subtitle:
      "Rédiger l'introduction, construire des paragraphes argumentés, intégrer ses citations, lier ses parties et conclure",
    badges: [
      { label: "★★★ Le cœur de la Partie 3", variant: "hot" },
      { label: cadre.badge, variant: "info" },
    ],
    metaTitle:
      "Rédiger le développement : Partie 3 du CRPE · Fiche de révision | Maitrizz",
    metaDescription:
      "Fiche CRPE complète sur la rédaction du développement (Partie 3) : introduction en trois temps (amorce, problématique, annonce du plan), paragraphe argumenté (idée, citation, analyse), intégration des citations, connecteurs et transitions, conclusion et ouverture. Méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                  "Le plan est construit (notion 19) : il faut maintenant le rédiger. Un correcteur attend un texte continu, argumenté et appuyé sur le texte support, pas une liste d'idées. Voici comment passer du plan à la copie.",
                items: [
                  {
                    number: "①",
                    title: "Rédiger l'introduction",
                    text: "Trois temps : une amorce, la problématique reformulée, l'annonce du plan.",
                  },
                  {
                    number: "②",
                    title: "Le paragraphe argumenté",
                    text: "Une idée directrice, un appui textuel cité, une analyse qui relie au fil directeur.",
                  },
                  {
                    number: "③",
                    title: "Lier les parties",
                    text: "Connecteurs logiques et transitions pour donner au développement sa cohérence.",
                  },
                  {
                    number: "④",
                    title: "Conclure et relire",
                    text: "Un bilan qui répond à la problématique, une ouverture mesurée, puis la relecture de la langue.",
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
                title: "L'introduction en trois temps",
                blocks: [
                  {
                    type: "paragraph",
                    text: "L'introduction se rédige une fois le plan posé. Elle suit trois temps, dans cet ordre, et tient en quelques phrases : on entre en matière, on pose la question, on annonce le parcours.",
                  },
                  {
                    type: "notionCardGrid",
                    columns: 1,
                    cards: [
                      {
                        title: "1. L'amorce",
                        definition: "Une entrée en matière qui situe le texte (auteur, thème, genre) sans réciter une banalité ni une généralité creuse.",
                        exemples: [
                          "« Dans cet extrait, le narrateur revient sur les lieux de son enfance et confronte son souvenir à la réalité. »",
                        ],
                        test: "L'amorce parle déjà du texte, pas de l'humanité en général.",
                      },
                      {
                        title: "2. La problématique",
                        definition: "La question reformulée en une phrase claire, qui sera le fil directeur du développement.",
                        exemples: [
                          "« On peut alors se demander comment le texte met en scène l'écart entre la maison rêvée et la maison retrouvée. »",
                        ],
                        test: "On ne recopie pas la consigne : on la transforme en intention de lecture.",
                      },
                      {
                        title: "3. L'annonce du plan",
                        definition: "Les grandes parties annoncées dans l'ordre, de façon fluide (pas « je vais parler de... »).",
                        exemples: [
                          "« Nous verrons d'abord la maison idéalisée du souvenir, puis la réalité décevante qui s'y substitue. »",
                        ],
                        test: "L'annonce correspond exactement aux axes du plan.",
                      },
                    ],
                  },
                  {
                    type: "callout",
                    variant: "warning",
                    icon: "⚠️",
                    title: "L'amorce n'est pas une généralité",
                    text: "« De tout temps, les hommes ont aimé leur maison... » est une amorce creuse, sanctionnée. On entre directement par le texte support et son sujet précis.",
                  },
                ],
              },
              {
                type: "subsection",
                number: "②",
                title: "Le paragraphe argumenté",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Chaque sous-partie du plan devient un paragraphe. Il s'organise toujours de la même façon : une **idée directrice**, un **appui textuel** cité, une **analyse** qui explique en quoi l'appui sert l'idée et le fil directeur.",
                  },
                  {
                    type: "formulaBlock",
                    title: "La structure d'un paragraphe",
                    lines: [
                      "Idée directrice : la phrase qui ouvre et annonce ce qu'on démontre.",
                      "Appui textuel : une citation courte entre guillemets, ou un renvoi précis.",
                      "Analyse : on explique le procédé et son effet, on relie à l'idée et à la problématique.",
                    ],
                    note: "Une idée par paragraphe : on ne mélange pas deux démonstrations dans le même bloc.",
                  },
                  {
                    type: "callout",
                    variant: "info",
                    icon: "💡",
                    title: "Citer, c'est intégrer",
                    text: "Une citation se met **entre guillemets**, reste **courte**, et se **fond dans la phrase** : « Le narrateur parle d'une maison « plus petite » que dans son souvenir, ce qui traduit sa déception. » On évite de recopier des lignes entières.",
                  },
                ],
              },
              {
                type: "subsection",
                number: "③",
                title: "Lier les parties : connecteurs et transitions",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Un développement n'est pas une suite de paragraphes juxtaposés. À l'intérieur d'une partie, les **connecteurs logiques** organisent les idées ; entre deux grandes parties, une **transition** fait le bilan de ce qui précède et annonce ce qui suit.",
                  },
                  {
                    type: "bullets",
                    items: [
                      "**Connecteurs** : d'abord, ensuite, en effet, ainsi, cependant, c'est pourquoi (voir la cohérence textuelle, notion 13).",
                      "**Transition** : une phrase qui clôt une partie et ouvre la suivante (« Si le souvenir idéalise la maison, la réalité, elle, déçoit. »).",
                      "**Alinéa** : on saute une ligne ou on retraite à chaque nouveau paragraphe, pour rendre la structure visible.",
                    ],
                  },
                ],
              },
              {
                type: "subsection",
                number: "④",
                title: "La conclusion, puis la relecture",
                blocks: [
                  {
                    type: "paragraph",
                    text: "La **conclusion** fait le bilan : elle répond clairement à la problématique en reprenant les apports des parties, sans recopier l'introduction. Elle peut se terminer par une **ouverture** mesurée (un rapprochement, un prolongement), jamais par une question vague.",
                  },
                  {
                    type: "callout",
                    variant: "info",
                    icon: "💡",
                    title: "Garder du temps pour relire",
                    text: "La langue est évaluée. On relit pour corriger l'orthographe et la syntaxe (ponctuation, notion 5 ; accords, notions 10-11 ; homophones, notion 12) et pour vérifier qu'on a bien répondu à la consigne. On rédige au **présent de l'analyse** (« le narrateur montre », pas « le narrateur montra »).",
                  },
                ],
              },
              {
                type: "piegeCard",
                variant: "rouge",
                title: "Piège n°1 · l'introduction qui récite la consigne",
                badge: "Erreur très fréquente",
                faux: "« Je vais répondre à la question : dans quelle mesure ce texte est-il émouvant. »",
                vrai: "On reformule la question en problématique et on annonce un plan : « On peut se demander par quels moyens le texte émeut son lecteur. Nous verrons d'abord... »",
                methode: "Reformuler la consigne avec ses mots, puis annoncer les axes du plan.",
              },
              {
                type: "piegeCard",
                variant: "rouge",
                title: "Piège n°2 · la citation déposée sans analyse",
                badge: "Perte de points",
                faux: "« L'auteur écrit : “la maison était plus petite”. Ensuite il dit qu'il est déçu. »",
                vrai: "On analyse : « L'adjectif “plus petite” traduit le rapetissement du souvenir confronté au réel, et donc la déception du narrateur. »",
                methode: "Après chaque citation, expliquer le procédé et son effet ; ne jamais s'arrêter à la citation.",
              },
              {
                type: "piegeCard",
                variant: "orange",
                title: "Piège n°3 · le développement sans transitions",
                badge: "Cas fréquent",
                faux: "Trois paragraphes posés l'un après l'autre, sans aucun lien entre eux.",
                vrai: "Des connecteurs à l'intérieur des parties et une phrase de transition entre les grandes parties.",
                methode: "À la fin de chaque partie, écrire une phrase qui fait le bilan et annonce la suivante.",
              },
              {
                type: "piegeCard",
                variant: "bleu",
                title: "Piège n°4 · la conclusion qui recopie l'introduction",
                badge: "Réflexe à corriger",
                faux: "Reprendre mot pour mot la problématique et l'annonce du plan en guise de conclusion.",
                vrai: "Faire le bilan des apports du développement (la réponse construite), puis ouvrir brièvement.",
                methode: "En conclusion, répondre à la problématique à partir de ce qu'on a démontré, pas de ce qu'on a annoncé.",
              },
              {
                type: "primaireBox",
                title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
                text: "**Cycle 3 :** les élèves apprennent à rédiger des textes structurés (en paragraphes), à utiliser des connecteurs, et à réviser leur écrit pour l'améliorer.\n\n**Ce que vous devez savoir dire :** « Rédiger puis réviser un texte cohérent et ponctué est une compétence enseignée dès le cycle 3. Au concours, je mobilise exactement ce que je ferai travailler à mes élèves : une idée par paragraphe, des liens entre les idées, une relecture. »",
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
                text: "Rédiger l'introduction, rédiger un paragraphe argumenté, puis conclure et relire. Chacune se termine par un checkpoint.",
              },
              {
                type: "rappelExpress",
                title: "Rappel express : ce que le jury attend de la rédaction",
                blocks: [
                  {
                    type: "formulaBlock",
                    lines: [
                      "Introduction : amorce, problématique, annonce du plan.",
                      "Paragraphe : idée directrice, citation courte intégrée, analyse de l'effet.",
                      "Conclusion : bilan qui répond à la problématique, puis ouverture mesurée.",
                    ],
                  },
                  {
                    type: "callout",
                    variant: "warning",
                    text: "⚠️ On garde du temps pour relire : la langue (orthographe, syntaxe, ponctuation) est évaluée.",
                  },
                ],
              },
              {
                type: "methodeGroup",
                number: "①",
                title: "Rédiger l'introduction",
                intro: "**Objectif :** une introduction en trois temps, à partir du plan déjà construit.",
                steps: [
                  {
                    number: "1",
                    text: "**Amorce** : situer le texte (auteur, thème, genre) en une phrase, sans généralité creuse.",
                    example: { lines: ["« Dans cet extrait, le narrateur retrouve la maison de son enfance. »"] },
                  },
                  {
                    number: "2",
                    text: "**Problématique** : reformuler la question en une phrase.",
                    example: { lines: ["« On peut se demander comment le texte met en scène l'écart entre souvenir et réalité. »"] },
                  },
                  {
                    number: "💡",
                    text: "**Annoncer le plan** dans l'ordre des parties, de façon fluide.",
                    warn: "⚠️ Ne pas écrire « je vais parler de » : on annonce les idées, pas l'intention.",
                  },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                title: "Checkpoint : à vous de jouer",
                badge: "30 secondes",
                question: "Que corriger dans cette amorce : « De tout temps, les hommes ont aimé leur maison » ?",
                correction: [
                  { type: "line", text: "C'est une **généralité creuse**. Il faut entrer par le texte : « Dans cet extrait, le narrateur confronte le souvenir de sa maison à ce qu'elle est devenue. »" },
                  { type: "note", text: "Amorce ancrée dans le texte ? Sinon, revoyez l'étape ①." },
                ],
              },
              {
                type: "methodeGroup",
                number: "②",
                title: "Rédiger un paragraphe argumenté",
                intro: "**Objectif :** transformer une sous-partie du plan en paragraphe.",
                steps: [
                  {
                    number: "1",
                    text: "**Annoncer l'idée directrice** en début de paragraphe.",
                    example: { lines: ["« La maison du souvenir apparaît d'abord embellie. »"] },
                  },
                  {
                    number: "2",
                    text: "**Citer** un appui textuel court, fondu dans la phrase.",
                    example: { lines: ["« Le narrateur évoque une demeure « immense » dans son enfance. »"] },
                  },
                  {
                    number: "💡",
                    text: "**Analyser** : expliquer le procédé et son effet, relier à la problématique.",
                    warn: "⚠️ Une citation sans analyse ne démontre rien.",
                  },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                title: "Checkpoint : à vous de jouer",
                badge: "30 secondes",
                question: "Complétez l'analyse : « Le narrateur parle d'une maison “plus petite”... »",
                correction: [
                  { type: "line", text: "« ... ce qui traduit le décalage entre le souvenir d'enfant, qui agrandit tout, et le regard adulte : l'adjectif comparatif marque la déception. »" },
                  { type: "note", text: "Citation analysée ? Direction le dernier checkpoint." },
                ],
              },
              {
                type: "methodeGroup",
                number: "③",
                title: "Conclure et relire",
                intro: "**Objectif :** une conclusion utile, puis une relecture efficace.",
                steps: [
                  {
                    number: "1",
                    text: "**Faire le bilan** : répondre à la problématique à partir des parties démontrées.",
                    example: { lines: ["« Le texte donne ainsi à voir comment le souvenir idéalise puis se heurte au réel. »"] },
                  },
                  {
                    number: "2",
                    text: "**Ouvrir** brièvement (un rapprochement, un prolongement), sans question vague.",
                    example: { lines: ["« Ce motif du retour déçu traverse aussi d'autres récits d'enfance. »"] },
                  },
                  {
                    number: "💡",
                    text: "**Relire** : orthographe, accords, ponctuation, présent de l'analyse, réponse à la consigne.",
                    warn: "⚠️ Réserver les dernières minutes à cette relecture : la langue est notée.",
                  },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                title: "Checkpoint : à vous de jouer",
                badge: "30 secondes",
                question: "Une conclusion qui reprend mot pour mot l'introduction : qu'est-ce qui cloche ?",
                correction: [
                  { type: "line", text: "Elle **n'apporte rien** : la conclusion doit faire le bilan de ce qu'on a démontré (la réponse construite), pas répéter ce qu'on avait annoncé." },
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
                    objectifId: "rd1",
                    question: "Les trois temps d'une introduction sont, dans l'ordre :",
                    options: [
                      "annonce du plan, amorce, problématique",
                      "amorce, problématique, annonce du plan",
                      "problématique, conclusion, amorce",
                      "citation, idée, analyse",
                    ],
                    correctIndex: 1,
                    explanation:
                      "On entre en matière (amorce), on pose la question (problématique), puis on annonce le parcours (plan).",
                  },
                  {
                    objectifId: "rd2",
                    question: "Un paragraphe argumenté s'organise autour de :",
                    options: [
                      "une idée directrice, un appui textuel, une analyse",
                      "trois citations à la suite",
                      "un résumé du passage",
                      "une opinion personnelle sans le texte",
                    ],
                    correctIndex: 0,
                    explanation:
                      "Une idée, appuyée sur une citation, puis analysée : c'est l'unité de base du développement.",
                  },
                  {
                    objectifId: "rd3",
                    question: "Une citation bien intégrée est :",
                    options: [
                      "longue et recopiée telle quelle sur plusieurs lignes",
                      "courte, entre guillemets, fondue dans la phrase",
                      "donnée sans guillemets",
                      "remplacée par un résumé",
                    ],
                    correctIndex: 1,
                    explanation:
                      "On cite court, entre guillemets, en intégrant la citation à sa propre phrase.",
                  },
                  {
                    objectifId: "rd4",
                    question: "Entre deux grandes parties, une transition sert à :",
                    options: [
                      "résumer tout le texte",
                      "faire le bilan de la partie close et annoncer la suivante",
                      "introduire une nouvelle citation",
                      "rien, ce n'est pas utile",
                    ],
                    correctIndex: 1,
                    explanation:
                      "La transition relie les parties : elle clôt ce qui précède et ouvre ce qui suit.",
                  },
                  {
                    objectifId: "rd5",
                    question: "Une bonne conclusion :",
                    options: [
                      "recopie l'introduction",
                      "répond à la problématique, puis propose une ouverture mesurée",
                      "pose une question vague",
                      "ajoute une nouvelle partie",
                    ],
                    correctIndex: 1,
                    explanation:
                      "Bilan qui répond à la problématique à partir des parties démontrées, puis ouverture brève.",
                  },
                  {
                    objectifId: "rd6",
                    question: "Le temps employé pour analyser un texte est :",
                    options: ["le passé simple", "le présent de l'analyse", "le futur", "le conditionnel"],
                    correctIndex: 1,
                    explanation:
                      "On écrit « le narrateur montre », au présent de l'analyse, pas « le narrateur montra ».",
                  },
                  {
                    objectifId: "rd7",
                    question: "Pourquoi garder du temps pour la relecture ?",
                    options: [
                      "ce n'est pas nécessaire",
                      "pour ajouter des citations",
                      "parce que la langue (orthographe, syntaxe) est évaluée",
                      "pour recopier au propre l'introduction",
                    ],
                    correctIndex: 2,
                    explanation:
                      "La maîtrise de la langue compte dans la note : la relecture corrige les erreurs et vérifie la réponse à la consigne.",
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
                label: "Niveau 1 : Repérer ce qui va et ce qui cloche",
                sub: "Introduction, citation, présent de l'analyse",
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "echauffement",
                title: "Exercice 1 : L'ordre de l'introduction",
                objectifTag: "Introduction",
                question:
                  "Remettez dans l'ordre ces trois éléments d'introduction :\na) « Nous verrons d'abord..., puis... » · b) « Dans cet extrait, le narrateur retrouve sa maison d'enfance. » · c) « On peut se demander comment le souvenir se heurte au réel. »",
                correction: [
                  { type: "line", text: "Ordre : **b) amorce**, puis **c) problématique**, puis **a) annonce du plan**." },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "echauffement",
                title: "Exercice 2 : Citation bien ou mal intégrée ?",
                objectifTag: "Citer",
                question:
                  "Laquelle est correctement intégrée ?\na) « L'auteur écrit, je cite la phrase entière : ... » · b) « Le narrateur évoque une maison “plus petite”, signe de sa déception. »",
                correction: [
                  { type: "line", text: "**b)** : citation courte, entre guillemets, fondue dans la phrase et suivie d'un début d'analyse. En a), la citation est annoncée lourdement et recopiée." },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "echauffement",
                title: "Exercice 3 : Au présent de l'analyse",
                question:
                  "Réécrivez au présent de l'analyse : « Le narrateur décrivit la maison et montra sa déception. »",
                correction: [
                  { type: "line", text: "« Le narrateur **décrit** la maison et **montre** sa déception. »" },
                ],
              },
              {
                type: "niveauBanner",
                level: "n2",
                stars: "★★☆",
                label: "Niveau 2 : Rédiger un paragraphe",
                sub: "Idée, citation, analyse, transition",
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "n2",
                title: "Exercice 4 : Un paragraphe complet",
                enonce: "Idée à défendre : « Le souvenir idéalise la maison. » Texte : le narrateur se rappelle une demeure « immense », « pleine de lumière ».",
                question: "Rédigez le paragraphe (idée, citation, analyse).",
                correction: [
                  { type: "line", text: "Exemple : « La maison du souvenir apparaît d'abord idéalisée. Le narrateur la revoit « immense » et « pleine de lumière » : ces termes hyperboliques traduisent le regard d'un enfant pour qui tout paraissait grand et lumineux. Le souvenir embellit donc la demeure avant même que le réel ne vienne le contredire. »" },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "n2",
                title: "Exercice 5 : Écrire une transition",
                enonce: "Partie 1 : la maison idéalisée du souvenir. Partie 2 : la maison réelle, décevante.",
                question: "Rédigez la phrase de transition entre les deux parties.",
                correction: [
                  { type: "line", text: "Exemple : « Mais à cette demeure rêvée, le retour substitue une maison bien différente. » On clôt la partie 1 (le souvenir) et on annonce la partie 2 (le réel)." },
                ],
              },
              {
                type: "niveauBanner",
                level: "n3",
                stars: "★★★",
                label: "Niveau 3 : Introduction et conclusion complètes",
                sub: "À partir d'un plan donné",
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "n3",
                title: "Exercice 6 : Rédiger l'introduction et la conclusion",
                enonce:
                  "Consigne : « En quoi ce texte met-il en scène le décalage entre souvenir et réalité ? » Plan : Axe 1, la maison idéalisée du souvenir · Axe 2, la maison réelle, décevante.",
                question: "Rédigez l'introduction (trois temps) et la conclusion (bilan + ouverture).",
                correction: [
                  { type: "line", text: "**Introduction** : « Dans cet extrait, un narrateur adulte retrouve la maison de son enfance (amorce). On peut se demander comment le texte met en scène le décalage entre le souvenir et la réalité (problématique). Nous verrons d'abord la maison idéalisée du souvenir, puis la maison réelle, qui déçoit (annonce). »" },
                  { type: "line", text: "**Conclusion** : « Le texte montre ainsi comment le souvenir agrandit et embellit la maison, avant que le retour ne révèle une demeure ordinaire : le décalage naît de cet écart entre l'image rêvée et le réel (bilan). Ce motif du retour déçu nourrit bien des récits d'enfance (ouverture). »" },
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
                text: "Ces exercices reproduisent le format de la Partie 3 : à partir d'une question sur un texte, on rédige tout ou partie du développement. Les exercices calqués sur le format du concours portent le badge ✦.",
              },
              {
                type: "exerciceCard",
                variant: "annale",
                badge: "✦ Format identique au concours",
                title: "Exercice 1 : Introduction et premier paragraphe",
                enonce:
                  "Texte support (extrait) : un personnage attend une lettre qui ne vient pas ; le récit alterne espoir et abattement.",
                question: "Consigne : « Analysez comment le texte traduit l'attente du personnage. » Rédigez l'introduction et le premier paragraphe du développement.",
                correction: [
                  { type: "paragraph", text: "**Introduction** : « Dans cet extrait, un personnage guette l'arrivée d'une lettre (amorce). On peut se demander par quels moyens le texte rend sensible cette attente (problématique). Nous verrons d'abord le rythme qui mime l'impatience, puis les variations entre espoir et abattement (annonce). » **Premier paragraphe** : « Le texte traduit d'abord l'attente par son rythme. Les phrases courtes, juxtaposées, miment l'impatience du personnage qui « regarde », « écoute », « revient à la fenêtre ». Cette accumulation de gestes brefs installe une tension croissante et fait ressentir au lecteur la lenteur du temps qui passe. »" },
                ],
              },
              {
                type: "exerciceCard",
                variant: "crpe",
                title: "Exercice 2 : La conclusion",
                enonce: "Même texte que l'exercice 1. Développement : Axe 1, le rythme de l'attente · Axe 2, l'alternance espoir / abattement.",
                question: "Rédigez la conclusion (bilan + ouverture).",
                correction: [
                  { type: "paragraph", text: "« Le texte donne ainsi à sentir l'attente par le rythme haché de la narration et par le balancement constant entre l'espoir et le découragement du personnage : c'est la forme même du récit qui rend l'attente palpable (bilan). On retrouve ce travail du rythme dans d'autres pages consacrées à l'attente amoureuse (ouverture). »" },
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
                text: "Ces exercices reproduisent des **erreurs fréquentes** de rédaction en Partie 3. Repérer ce qui cloche et corriger rigoureusement est une compétence directement valorisée au concours.",
              },
              {
                type: "exerciceCard",
                variant: "err-type",
                title: "Exercice 1 · Introduction à corriger : la consigne recopiée",
                enonce: "Introduction d'un candidat : « Je vais répondre à la question : en quoi ce texte traduit-il l'attente du personnage. »",
                question: "Identifiez et corrigez le défaut.",
                correction: [
                  {
                    type: "checklist",
                    items: [
                      { text: "L'introduction recopie la consigne et annonce une intention (« je vais répondre »)", bad: true },
                      { text: "Il manque l'amorce et l'annonce du plan ; on ne reformule pas la question" },
                      { text: "Attendu : une amorce qui situe le texte, la question reformulée en problématique, puis l'annonce des axes" },
                    ],
                  },
                ],
              },
              {
                type: "exerciceCard",
                variant: "err-type",
                title: "Exercice 2 · Paragraphe à corriger : la citation non analysée",
                enonce: "Paragraphe d'un candidat : « L'auteur écrit : “la maison était plus petite”. Donc il est déçu. »",
                question: "Identifiez et corrigez le défaut.",
                correction: [
                  {
                    type: "checklist",
                    items: [
                      { text: "La citation est déposée puis abandonnée : aucune analyse du procédé", bad: true },
                      { text: "« Donc il est déçu » est une affirmation, pas une démonstration" },
                      { text: "Attendu : analyser le comparatif « plus petite » (le réel dément le souvenir agrandi de l'enfance) avant de conclure à la déception" },
                    ],
                  },
                ],
              },
              {
                type: "exerciceCard",
                variant: "err-type",
                title: "Exercice 3 · Conclusion à corriger : la répétition de l'introduction",
                enonce: "Conclusion d'un candidat : « Comme annoncé, nous avons vu la maison idéalisée puis la maison réelle. On peut se demander comment le souvenir se heurte au réel. »",
                question: "Identifiez et corrigez le défaut.",
                correction: [
                  {
                    type: "checklist",
                    items: [
                      { text: "La conclusion répète l'annonce du plan et repose la problématique au lieu d'y répondre", bad: true },
                      { text: "Elle n'apporte aucun bilan des idées démontrées" },
                      { text: "Attendu : répondre à la problématique à partir des parties (le souvenir idéalise, le réel déçoit, d'où le décalage), puis une ouverture brève" },
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
                    question: "Quels sont les trois temps de l'introduction ?",
                    answer:
                      "1) **Amorce** (entrée par le texte) · 2) **Problématique** (la question reformulée) · 3) **Annonce du plan** (les axes dans l'ordre).",
                    astuce: "💡 L'amorce parle du texte, jamais d'une généralité (« de tout temps... »).",
                  },
                  {
                    question: "Comment se construit un paragraphe argumenté ?",
                    answer:
                      "Une **idée directrice**, un **appui textuel** cité, une **analyse** qui explique le procédé et son effet et relie à la problématique.",
                    astuce: "⚠️ Une idée par paragraphe ; une citation sans analyse ne démontre rien.",
                  },
                  {
                    question: "Comment intégrer une citation ?",
                    answer:
                      "Courte, entre guillemets, fondue dans sa propre phrase : « Le narrateur évoque une maison “plus petite”, signe de sa déception. »",
                    astuce: "💡 On évite de recopier des lignes entières.",
                  },
                  {
                    question: "À quoi sert une transition ?",
                    answer:
                      "À relier deux grandes parties : une phrase qui fait le bilan de la partie close et annonce la suivante.",
                    astuce: "💡 Les connecteurs (en effet, ainsi, cependant) relèvent de la cohérence textuelle (notion 13).",
                  },
                  {
                    question: "Que doit faire une conclusion ?",
                    answer:
                      "Répondre à la problématique à partir des parties démontrées (bilan), puis proposer une ouverture mesurée.",
                    astuce: "⚠️ Ne pas recopier l'introduction ni reposer la question.",
                  },
                  {
                    question: "Quel temps pour analyser un texte ?",
                    answer:
                      "Le présent de l'analyse : « le narrateur montre, le texte met en scène », pas le passé simple.",
                  },
                  {
                    question: "Pourquoi relire à la fin ?",
                    answer:
                      "Parce que la langue est évaluée : on corrige l'orthographe, les accords et la ponctuation, et on vérifie qu'on a répondu à la consigne.",
                    astuce: "💡 Réserver les dernières minutes à la relecture.",
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
                center: { title: "Rédiger", subtitle: "le développement" },
                branches: [
                  {
                    title: "Introduction",
                    lines: ["Amorce", "Problématique", "Annonce du plan"],
                    variant: "blue",
                  },
                  {
                    title: "Paragraphe",
                    lines: ["Idée directrice", "Citation courte intégrée", "Analyse de l'effet"],
                    variant: "green",
                  },
                  {
                    title: "Liens et conclusion",
                    lines: ["Connecteurs, transitions", "Bilan + ouverture", "Présent de l'analyse"],
                    variant: "green",
                  },
                  {
                    title: "Pièges classiques",
                    lines: ["Intro qui récite la consigne", "Citation non analysée", "Conclusion qui répète l'intro"],
                    variant: "yellow",
                  },
                  {
                    title: "Renvois",
                    lines: ["Construire le plan → notion 19", "Cohérence, connecteurs → notion 13", "Culture littéraire → notion 21"],
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

export const ficheRedigerDeveloppementL3 = ficheRedigerDeveloppement("l3");
export const ficheRedigerDeveloppementM2 = ficheRedigerDeveloppement("m2");
