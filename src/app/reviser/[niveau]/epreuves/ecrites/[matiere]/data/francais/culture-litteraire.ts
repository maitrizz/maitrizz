import type { Fiche } from "@/components/fiche/types";
import type { Niveau } from "@/lib/niveau";

/**
 * Notion 21 : Culture littéraire et apports (Partie 3 : développement rédigé).
 *
 * Dernière notion de la Partie 3 : comment mobiliser une culture littéraire
 * pour enrichir le développement (situer un texte, convoquer une référence
 * pertinente, proposer une ouverture) sans tomber dans le placage de
 * connaissances ni le hors-sujet. Périmètre : les apports dans le
 * développement rédigé, pas la rédaction elle-même (notion 20) ni la
 * construction du plan (notion 19). Comme pour 19 et 20, le contenu est commun
 * L3/M2 et seul le cadre diffère ; voir les exports en bas de fichier.
 */

const OBJECTIFS = [
  { id: "cl1", label: "Je sais ce qu'on attend comme apport dans un développement : situer, éclairer, ouvrir" },
  { id: "cl2", label: "J'identifie le genre d'un texte (récit, théâtre, poésie, texte d'idées) et ses repères" },
  { id: "cl3", label: "Je dispose de quelques grands repères littéraires pour situer un texte" },
  { id: "cl4", label: "Je convoque une référence pertinente (œuvre, auteur, genre) en lien avec le texte" },
  { id: "cl5", label: "J'intègre un apport brièvement et à propos, dans une analyse ou une ouverture" },
  { id: "cl6", label: "Je distingue l'apport pertinent du placage gratuit de connaissances" },
  { id: "cl7", label: "Je relie ma culture littéraire à l'enseignement de la lecture à l'école" },
];

type CadreNiveau = { badge: string; cadre: string };

const CADRE: Record<Niveau, CadreNiveau> = {
  m2: {
    badge: "Épreuve écrite de français · 3 h",
    cadre:
      "Au concours **M2** (épreuve de français de **3 heures**), le développement rédigé gagne à être éclairé par une culture littéraire : savoir situer un texte " +
      "dans son genre, convoquer une référence pertinente, proposer une ouverture juste. Le jury valorise un apport **maîtrisé et à propos**, jamais le placage de connaissances.",
  },
  l3: {
    badge: "Épreuve commune français + maths · 4 h",
    cadre:
      "Au concours **L3** (épreuve commune français et mathématiques, **4 heures**), le développement peut s'appuyer sur une culture littéraire, nourrie aussi par " +
      "les lectures du **lycée** (2de et 1re). On situe le texte dans son genre, on convoque une référence pertinente, on ouvre justement. Le jury valorise un apport " +
      "maîtrisé et à propos, jamais le placage de connaissances.",
  },
};

function ficheCultureLitteraire(niveau: Niveau): Fiche {
  const cadre = CADRE[niveau];

  return {
    slug: "culture-litteraire",
    matiere: "francais",
    numero: 21,
    partie: "Partie 3 : Développement rédigé",
    title: "Culture littéraire et apports",
    subtitle:
      "Situer un texte dans son genre, mobiliser des repères littéraires, convoquer une référence pertinente et proposer une ouverture juste",
    badges: [
      { label: "★★☆ Pour enrichir le développement", variant: "hot" },
      { label: cadre.badge, variant: "info" },
    ],
    metaTitle:
      "Culture littéraire et apports : Partie 3 du CRPE · Fiche de révision | Maitrizz",
    metaDescription:
      "Fiche CRPE sur la culture littéraire en Partie 3 (développement rédigé) : identifier le genre d'un texte (récit, théâtre, poésie, texte d'idées), mobiliser des repères littéraires, convoquer une référence pertinente sans hors-sujet, proposer une ouverture juste. Méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                  "Le développement (notions 19-20) s'appuie d'abord sur le texte ; mais une culture littéraire bien dosée l'éclaire et le valorise. L'enjeu n'est pas d'étaler des connaissances : c'est de convoquer la bonne référence, au bon endroit, brièvement.",
                items: [
                  {
                    number: "①",
                    title: "Ce qu'on attend comme apport",
                    text: "Situer le texte, éclairer une analyse, ouvrir en conclusion : l'apport sert le propos, il ne s'y substitue pas.",
                  },
                  {
                    number: "②",
                    title: "Identifier le genre",
                    text: "Récit, théâtre, poésie, texte d'idées : reconnaître le genre oriente la lecture et l'analyse.",
                  },
                  {
                    number: "③",
                    title: "Quelques repères littéraires",
                    text: "Des repères simples pour situer un texte, sans transformer la copie en cours d'histoire littéraire.",
                  },
                  {
                    number: "④",
                    title: "Convoquer une référence",
                    text: "Choisir une référence en lien réel avec le texte, l'intégrer en une phrase, éviter le placage.",
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
                title: "Ce qu'on attend comme apport",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Dans le développement, un « apport » est un élément de culture qui **sert l'analyse** : il situe le texte, éclaire un procédé, ou ouvre la réflexion. Il reste au service du propos. Trois usages utiles, du plus courant au plus délicat :",
                  },
                  {
                    type: "table",
                    title: "Trois façons d'apporter, au service du texte",
                    headers: ["Usage", "Où", "Exemple d'emploi"],
                    rows: [
                      ["Situer", "En introduction ou au fil du texte", "Reconnaître que le texte est un récit autobiographique, et lire ses « je » en conséquence."],
                      ["Éclairer", "Dans un paragraphe d'analyse", "Nommer le registre ou le genre pour expliquer un effet (voir notion 18)."],
                      ["Ouvrir", "En conclusion", "Rapprocher le texte d'une autre œuvre ou d'un genre, brièvement."],
                    ],
                  },
                  {
                    type: "callout",
                    variant: "warning",
                    icon: "⚠️",
                    title: "L'apport sert le texte, pas l'inverse",
                    text: "Le développement porte sur le texte support. Une référence n'a sa place que si elle éclaire ce texte précis. Une connaissance plaquée, sans lien, est au mieux inutile, au pire un hors-sujet.",
                  },
                ],
              },
              {
                type: "subsection",
                number: "②",
                title: "Identifier le genre du texte",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Reconnaître le genre d'un texte oriente toute la lecture. Quatre grands genres reviennent au concours, chacun avec ses repères.",
                  },
                  {
                    type: "notionCardGrid",
                    columns: 2,
                    cards: [
                      {
                        title: "Le récit",
                        definition: "Raconte une histoire : narrateur, personnages, actions, temps du récit.",
                        exemples: ["Roman, nouvelle, conte, récit autobiographique."],
                        test: "Repères : qui raconte (point de vue), à quel temps, dans quel ordre.",
                      },
                      {
                        title: "Le théâtre",
                        definition: "Texte destiné à être joué : dialogue, didascalies, double énonciation (personnages / spectateur).",
                        exemples: ["Tragédie, comédie, drame."],
                        test: "Repères : répliques, didascalies, ce que le spectateur sait et que le personnage ignore.",
                      },
                      {
                        title: "La poésie",
                        definition: "Travaille la forme et les images : vers ou prose, rythme, sonorités, figures.",
                        exemples: ["Poème en vers, poème en prose."],
                        test: "Repères : disposition (vers, strophes), rythme, sonorités, figures (notion 18).",
                      },
                      {
                        title: "Le texte d'idées",
                        definition: "Défend un point de vue : essai, article, lettre, discours. Vise à convaincre ou persuader.",
                        exemples: ["Essai, tribune, discours, lettre ouverte."],
                        test: "Repères : thèse, arguments, exemples, marques de l'énonciateur (notion 14).",
                      },
                    ],
                  },
                ],
              },
              {
                type: "subsection",
                number: "③",
                title: "Quelques repères littéraires",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Il ne s'agit pas de réciter l'histoire de la littérature, mais de disposer de repères simples pour **situer** un texte sans se tromper. Quelques points d'appui sûrs :",
                  },
                  {
                    type: "bullets",
                    items: [
                      "**Les genres et leurs visées** : le récit raconte, le théâtre se joue, la poésie travaille la forme, le texte d'idées argumente.",
                      "**Les registres** (déjà vus à la notion 18) : lyrique, épique, pathétique, comique, ironique ; ils caractérisent le ton d'un passage.",
                      "**Le rapport au réel** : un texte peut viser à représenter le monde, à l'imaginer, ou à le commenter ; le préciser aide à interpréter.",
                    ],
                  },
                  {
                    type: "callout",
                    variant: "info",
                    icon: "💡",
                    title: "Rester sûr de ses repères",
                    text: "Mieux vaut un repère exact et général qu'une date ou une attribution incertaine. En cas de doute sur un mouvement ou une date précise, on s'appuie sur ce qu'on observe dans le texte plutôt que sur un souvenir fragile.",
                  },
                ],
              },
              {
                type: "subsection",
                number: "④",
                title: "Convoquer une référence",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Une référence (une autre œuvre, un auteur, un genre) n'a d'intérêt que si elle entretient un **lien réel** avec le texte : même thème, même procédé, même genre. On l'intègre en une phrase, on dit le lien, et on revient au texte.",
                  },
                  {
                    type: "formulaBlock",
                    title: "Intégrer une référence en une phrase",
                    lines: [
                      "[Constat sur le texte] + [référence] + [lien explicite avec le texte].",
                      "Exemple : « Comme souvent dans les récits d'enfance, le narrateur idéalise le passé, motif que l'on retrouve dans bien des autobiographies. »",
                    ],
                    note: "Une référence suffit si elle est juste ; mieux vaut une référence pertinente que trois plaquées.",
                  },
                  {
                    type: "callout",
                    variant: "warning",
                    icon: "⚠️",
                    title: "Le lien doit être explicite",
                    text: "Citer un titre ou un auteur ne vaut rien si l'on ne dit pas en quoi cela éclaire le texte. C'est le lien qui fait l'apport, pas le nom.",
                  },
                ],
              },
              {
                type: "piegeCard",
                variant: "rouge",
                title: "Piège n°1 · le placage de connaissances",
                badge: "Erreur très fréquente",
                faux: "Réciter un paragraphe sur un mouvement littéraire sans rapport démontré avec le texte.",
                vrai: "Ne convoquer une connaissance que si elle éclaire le texte support, et dire explicitement le lien.",
                methode: "Avant d'écrire une référence, se demander : « En quoi cela aide-t-il à comprendre ce texte ? »",
              },
              {
                type: "piegeCard",
                variant: "rouge",
                title: "Piège n°2 · la référence inexacte",
                badge: "À éviter absolument",
                faux: "Attribuer une œuvre au mauvais auteur ou avancer une date hasardeuse.",
                vrai: "On ne cite que ce dont on est sûr ; sinon, on s'appuie sur ce qu'on observe dans le texte.",
                methode: "En cas de doute, préférer un repère général exact à un détail précis incertain.",
              },
              {
                type: "piegeCard",
                variant: "orange",
                title: "Piège n°3 · confondre le genre et le registre",
                badge: "Cas fréquent",
                faux: "Dire qu'un texte est « du genre pathétique ».",
                vrai: "Le **genre** est la catégorie (récit, théâtre, poésie, texte d'idées) ; le **registre** est le ton (pathétique, comique...). Voir notion 18.",
                methode: "Genre = quelle sorte de texte ; registre = quelle impression il produit.",
              },
              {
                type: "piegeCard",
                variant: "bleu",
                title: "Piège n°4 · l'ouverture qui s'égare",
                badge: "Réflexe à corriger",
                faux: "Terminer par une référence spectaculaire mais sans rapport, ou par une question vague.",
                vrai: "Une ouverture mesurée, qui prolonge réellement le propos (un thème, un genre, une autre œuvre proche).",
                methode: "L'ouverture reste dans le sujet : elle élargit, elle ne change pas de sujet.",
              },
              {
                type: "primaireBox",
                title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
                text: "**Cycles 2-3 :** les élèves construisent un premier parcours de lecture (littérature de jeunesse, contes, albums, premiers classiques) et apprennent à reconnaître des genres et à mettre des textes en réseau.\n\n**Ce que vous devez savoir dire :** « Constituer une culture littéraire, c'est mettre des textes en relation. À l'école, je ferai lire des œuvres en réseau (autour d'un thème, d'un genre, d'un personnage) pour que les élèves tissent des liens, exactement comme je convoque une référence pertinente dans mon développement. »",
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
                text: "Identifier le genre, choisir une référence pertinente, et l'intégrer brièvement. Chacune se termine par un checkpoint.",
              },
              {
                type: "rappelExpress",
                title: "Rappel express : ce que le jury attend d'un apport",
                blocks: [
                  {
                    type: "formulaBlock",
                    lines: [
                      "L'apport sert le texte : situer, éclairer, ouvrir.",
                      "Genre (récit, théâtre, poésie, texte d'idées) ≠ registre (le ton).",
                      "Une référence vaut par le lien explicite avec le texte, pas par le nom cité.",
                    ],
                  },
                  {
                    type: "callout",
                    variant: "warning",
                    text: "⚠️ On ne cite que ce dont on est sûr : une référence inexacte dessert la copie.",
                  },
                ],
              },
              {
                type: "methodeGroup",
                number: "①",
                title: "Identifier le genre",
                intro: "**Objectif :** reconnaître le genre pour orienter la lecture.",
                steps: [
                  {
                    number: "1",
                    text: "**Observer la forme** : dialogue et didascalies (théâtre), vers et strophes (poésie), narration (récit), thèse et arguments (texte d'idées).",
                    example: { lines: ["des répliques précédées de noms + des didascalies → théâtre"] },
                  },
                  {
                    number: "2",
                    text: "**En déduire les repères à observer** (point de vue pour le récit, rythme pour la poésie, etc.).",
                    example: { lines: ["récit → qui raconte ? à quel temps ? dans quel ordre ?"] },
                  },
                  {
                    number: "💡",
                    text: "**Ne pas confondre genre et registre** : le genre est la catégorie, le registre est le ton.",
                    warn: "⚠️ « Pathétique » est un registre, pas un genre.",
                  },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                title: "Checkpoint : à vous de jouer",
                badge: "30 secondes",
                question: "Un texte composé de répliques avec des didascalies relève de quel genre ?",
                correction: [
                  { type: "line", text: "Le **théâtre** : présence de répliques et de didascalies, texte destiné à être joué." },
                  { type: "note", text: "Genre identifié à la forme ? Sinon, revoyez l'étape ①." },
                ],
              },
              {
                type: "methodeGroup",
                number: "②",
                title: "Choisir une référence pertinente",
                intro: "**Objectif :** trouver une référence réellement liée au texte.",
                steps: [
                  {
                    number: "1",
                    text: "**Repérer un point d'accroche** dans le texte : un thème, un procédé, un genre.",
                    example: { lines: ["thème : le retour sur les lieux de l'enfance"] },
                  },
                  {
                    number: "2",
                    text: "**Chercher une référence sûre** partageant ce point d'accroche (un genre, une autre œuvre connue, un type de texte).",
                    example: { lines: ["le motif est fréquent dans les récits d'enfance et les autobiographies"] },
                  },
                  {
                    number: "💡",
                    text: "**Vérifier le lien** : la référence doit éclairer le texte, pas seulement « faire savant ».",
                    warn: "⚠️ Pas de référence sans lien démontré avec le texte.",
                  },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                title: "Checkpoint : à vous de jouer",
                badge: "30 secondes",
                question: "Pour un poème qui personnifie la mer, quel apport est pertinent : a) une définition de la personnification, b) le théorème de Pythagore ?",
                correction: [
                  { type: "line", text: "**a)** : nommer la personnification (notion 18) éclaire un procédé du texte. b) n'a aucun lien : ce serait un hors-sujet." },
                  { type: "note", text: "Lien avec le texte vérifié ? Direction le dernier checkpoint." },
                ],
              },
              {
                type: "methodeGroup",
                number: "③",
                title: "Intégrer l'apport en une phrase",
                intro: "**Objectif :** insérer la référence sans alourdir ni s'égarer.",
                steps: [
                  {
                    number: "1",
                    text: "**Partir du texte**, énoncer le constat, puis introduire la référence.",
                    example: { lines: ["« Le narrateur idéalise l'enfance, motif courant des récits autobiographiques... »"] },
                  },
                  {
                    number: "2",
                    text: "**Dire le lien** explicitement, puis revenir au texte.",
                    example: { lines: ["« ... ce qui éclaire ici l'écart entre le souvenir et le réel. »"] },
                  },
                  {
                    number: "💡",
                    text: "**Une référence juste suffit** : la qualité prime sur la quantité.",
                    warn: "⚠️ Trois références plaquées valent moins qu'une seule pertinente.",
                  },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                title: "Checkpoint : à vous de jouer",
                badge: "30 secondes",
                question: "Que manque-t-il à : « Ce texte me fait penser à un autre roman. » ?",
                correction: [
                  { type: "line", text: "Le **lien explicite** : en quoi cet autre roman éclaire-t-il le texte (même thème ? même procédé ?). Sans lien, la référence ne démontre rien." },
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
                    objectifId: "cl1",
                    question: "Dans un développement, un apport culturel doit avant tout :",
                    options: [
                      "remplacer l'analyse du texte",
                      "servir l'analyse (situer, éclairer, ouvrir)",
                      "montrer l'étendue de ses connaissances",
                      "occuper une partie entière",
                    ],
                    correctIndex: 1,
                    explanation:
                      "L'apport reste au service du texte : il situe, éclaire ou ouvre, il ne se substitue pas à l'analyse.",
                  },
                  {
                    objectifId: "cl2",
                    question: "Un texte fait de répliques et de didascalies relève du genre :",
                    options: ["récit", "théâtre", "poésie", "texte d'idées"],
                    correctIndex: 1,
                    explanation:
                      "Répliques et didascalies sont les marques du théâtre, destiné à être joué.",
                  },
                  {
                    objectifId: "cl3",
                    question: "Quelle est la visée principale d'un texte d'idées ?",
                    options: ["raconter une histoire", "être joué sur scène", "défendre un point de vue", "travailler le rythme et les sonorités"],
                    correctIndex: 2,
                    explanation:
                      "L'essai, l'article, le discours visent à convaincre ou persuader : ils défendent une thèse.",
                  },
                  {
                    objectifId: "cl4",
                    question: "Une référence est pertinente quand :",
                    options: [
                      "elle est célèbre",
                      "elle entretient un lien réel avec le texte (thème, procédé, genre)",
                      "elle est récente",
                      "elle est longue",
                    ],
                    correctIndex: 1,
                    explanation:
                      "C'est le lien avec le texte qui fait la pertinence, pas la notoriété de la référence.",
                  },
                  {
                    objectifId: "cl5",
                    question: "La bonne façon d'intégrer une référence est :",
                    options: [
                      "un paragraphe entier de connaissances",
                      "une phrase qui dit le constat, la référence et le lien",
                      "une simple liste de titres",
                      "une note en bas de copie",
                    ],
                    correctIndex: 1,
                    explanation:
                      "On part du texte, on introduit la référence et on explicite le lien, en une phrase.",
                  },
                  {
                    objectifId: "cl6",
                    question: "Citer un auteur sans expliquer le lien avec le texte, c'est :",
                    options: [
                      "un apport pertinent",
                      "du placage de connaissances",
                      "une ouverture réussie",
                      "une analyse",
                    ],
                    correctIndex: 1,
                    explanation:
                      "Sans lien explicite, la référence ne démontre rien : c'est un placage, au mieux inutile.",
                  },
                  {
                    objectifId: "cl7",
                    question: "Mettre des textes en réseau à l'école, c'est :",
                    options: [
                      "les classer par taille",
                      "les relier autour d'un thème, d'un genre ou d'un personnage",
                      "les lire dans l'ordre de parution",
                      "les apprendre par cœur",
                    ],
                    correctIndex: 1,
                    explanation:
                      "Le réseau littéraire relie des œuvres (thème, genre, personnage) : c'est la culture littéraire en construction.",
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
                label: "Niveau 1 : Genres et repères",
                sub: "Identifier le genre, distinguer genre et registre",
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "echauffement",
                title: "Exercice 1 : Quel genre ?",
                objectifTag: "Genre",
                question:
                  "Indiquez le genre :\na) un poème en vers · b) une scène avec didascalies · c) une nouvelle racontée par un narrateur · d) une tribune qui défend une thèse",
                correction: [
                  { type: "line", text: "a) poésie · b) théâtre · c) récit · d) texte d'idées." },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "echauffement",
                title: "Exercice 2 : Genre ou registre ?",
                objectifTag: "Repères",
                question:
                  "Pour chaque mot, indiquez s'il désigne un genre ou un registre :\na) récit · b) pathétique · c) théâtre · d) comique",
                correction: [
                  { type: "line", text: "a) genre · b) registre · c) genre · d) registre. Le genre est la catégorie de texte ; le registre est le ton (notion 18)." },
                ],
              },
              {
                type: "niveauBanner",
                level: "n2",
                stars: "★★☆",
                label: "Niveau 2 : Pertinence de l'apport",
                sub: "Choisir et justifier une référence",
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "n2",
                title: "Exercice 3 : Apport pertinent ou hors-sujet ?",
                enonce: "Texte : un récit où un personnage affronte une tempête en mer.",
                question:
                  "Parmi ces apports, lequel est pertinent et pourquoi ?\na) rapprocher le texte d'autres récits d'aventure en mer · b) citer une règle de grammaire sur l'accord du participe · c) évoquer un mouvement pictural sans lien",
                correction: [
                  { type: "line", text: "**a)** est pertinent : même genre et même motif (l'aventure en mer), ce qui éclaire la mise en scène du danger. b) et c) n'ont pas de lien avec le propos : hors-sujet ou placage." },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "n2",
                title: "Exercice 4 : Intégrer une référence en une phrase",
                enonce: "Constat : le poème personnifie la nature, qui semble veiller sur le personnage.",
                question: "Rédigez une phrase qui intègre un apport pertinent (genre, procédé ou motif), avec le lien explicite.",
                correction: [
                  { type: "line", text: "Exemple : « En prêtant à la nature une attention presque humaine, le poème recourt à la personnification (notion 18), procédé fréquent de la poésie lyrique pour faire du paysage le reflet des sentiments : ici, la nature protectrice rassure le personnage. »" },
                ],
              },
              {
                type: "niveauBanner",
                level: "n3",
                stars: "★★★",
                label: "Niveau 3 : Une ouverture juste",
                sub: "Conclure en élargissant sans s'égarer",
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "n3",
                title: "Exercice 5 : Rédiger une ouverture",
                enonce:
                  "Développement portant sur un récit d'enfance qui idéalise le passé.",
                question: "Rédigez une phrase d'ouverture pertinente (et dites pourquoi elle l'est), puis donnez un contre-exemple d'ouverture qui s'égare.",
                correction: [
                  { type: "line", text: "**Ouverture pertinente** : « Ce regard nostalgique sur l'enfance traverse bien des récits autobiographiques, qui font du souvenir un monde embelli. » Elle prolonge le motif (le souvenir idéalisé) dans le même genre." },
                  { type: "line", text: "**Ouverture qui s'égare** : « On pourrait aussi se demander si la technologie a changé notre enfance. » Sans lien avec le texte, elle change de sujet." },
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
                text: "Ces exercices reproduisent le format de la Partie 3, du côté des apports : mobiliser une culture littéraire au service de l'analyse. Les exercices calqués sur le format du concours portent le badge ✦.",
              },
              {
                type: "exerciceCard",
                variant: "annale",
                badge: "✦ Format identique au concours",
                title: "Exercice 1 : Situer et éclairer",
                enonce:
                  "Texte support (extrait) : un narrateur adulte raconte, à la première personne, un épisode marquant de son enfance.",
                question: "Consigne : « En quoi la culture littéraire aide-t-elle à lire ce texte ? » Montrez comment l'identification du genre et un repère pertinent éclairent la lecture (en quelques phrases).",
                correction: [
                  { type: "paragraph", text: "On reconnaît d'abord un **récit autobiographique** : un narrateur adulte revient, à la première personne, sur son passé. Ce genre invite à lire les « je » comme ceux d'un même être à deux âges, et à guetter l'écart entre le souvenir et le présent. Ce dispositif est courant dans les récits d'enfance, où l'adulte réinterprète ce que l'enfant a vécu : ce repère éclaire ici la tonalité nostalgique du passage et la distance du narrateur à l'égard de ses émotions d'autrefois." },
                ],
              },
              {
                type: "exerciceCard",
                variant: "crpe",
                title: "Exercice 2 : Une ouverture pour conclure",
                enonce: "Même texte que l'exercice 1.",
                question: "Proposez une ouverture de conclusion qui mobilise une culture littéraire de façon pertinente.",
                correction: [
                  { type: "paragraph", text: "« Ce travail du souvenir, qui transforme l'enfance en un monde à part, nourrit de nombreux récits autobiographiques : la mémoire y est moins un enregistrement fidèle qu'une recomposition. » L'ouverture prolonge le motif central (le souvenir recomposé) dans le même genre, sans changer de sujet ni avancer de référence incertaine." },
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
                text: "Ces exercices reproduisent des **erreurs fréquentes** dans l'usage de la culture littéraire en Partie 3. Repérer ce qui cloche et corriger rigoureusement est une compétence directement valorisée au concours.",
              },
              {
                type: "exerciceCard",
                variant: "err-type",
                title: "Exercice 1 · Apport à corriger : le placage",
                enonce: "Copie d'un candidat : « Avant d'analyser, rappelons que le romantisme est un mouvement qui valorise les sentiments et la nature. » (le texte n'a aucun lien établi avec ce mouvement)",
                question: "Identifiez et corrigez le défaut.",
                correction: [
                  {
                    type: "checklist",
                    items: [
                      { text: "Un paragraphe de connaissances est plaqué sans lien démontré avec le texte", bad: true },
                      { text: "L'apport doit servir l'analyse du texte support, pas l'introduire de l'extérieur" },
                      { text: "Attendu : ne mobiliser un repère que s'il éclaire un procédé ou un thème du texte, et dire le lien" },
                    ],
                  },
                ],
              },
              {
                type: "exerciceCard",
                variant: "err-type",
                title: "Exercice 2 · Apport à corriger : genre et registre confondus",
                enonce: "Copie d'un candidat : « Ce texte appartient au genre pathétique. »",
                question: "Identifiez et corrigez la confusion.",
                correction: [
                  {
                    type: "checklist",
                    items: [
                      { text: "« Pathétique » est un registre (un ton), pas un genre", bad: true },
                      { text: "Le genre serait par exemple le récit, le théâtre, la poésie ou le texte d'idées" },
                      { text: "Attendu : « Ce récit (genre) relève du registre pathétique (ton), car il suscite la pitié »" },
                    ],
                  },
                ],
              },
              {
                type: "exerciceCard",
                variant: "err-type",
                title: "Exercice 3 · Apport à corriger : la référence inexacte",
                enonce: "Copie d'un candidat : « Comme dans cette fable de La Fontaine où un loup affronte une tempête en mer... » (référence vraisemblablement inexacte)",
                question: "Identifiez et corrigez le défaut.",
                correction: [
                  {
                    type: "checklist",
                    items: [
                      { text: "La référence semble inventée ou déformée : une attribution douteuse dessert la copie", bad: true },
                      { text: "On ne cite que ce dont on est sûr ; sinon on s'appuie sur le texte" },
                      { text: "Attendu : remplacer par un repère sûr (« comme souvent dans les récits d'aventure en mer ») ou s'en tenir à l'analyse du texte" },
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
                    question: "À quoi sert un apport culturel dans le développement ?",
                    answer:
                      "À **situer** le texte, **éclairer** une analyse ou **ouvrir** en conclusion. Il sert le texte, il ne le remplace pas.",
                    astuce: "⚠️ Une connaissance sans lien avec le texte est un placage, au pire un hors-sujet.",
                  },
                  {
                    question: "Quels sont les quatre grands genres ?",
                    answer:
                      "Le **récit** (raconter), le **théâtre** (être joué), la **poésie** (travailler la forme), le **texte d'idées** (argumenter).",
                    astuce: "💡 Reconnaître le genre oriente toute la lecture.",
                  },
                  {
                    question: "Genre ou registre : quelle différence ?",
                    answer:
                      "Le **genre** est la catégorie du texte (récit, théâtre, poésie, texte d'idées). Le **registre** est le ton (lyrique, pathétique, comique...).",
                    astuce: "💡 Genre = quelle sorte de texte ; registre = quelle impression (notion 18).",
                  },
                  {
                    question: "Quand une référence est-elle pertinente ?",
                    answer:
                      "Quand elle entretient un **lien réel** avec le texte (même thème, même procédé, même genre) et que ce lien est dit explicitement.",
                    astuce: "⚠️ C'est le lien qui fait l'apport, pas le nom cité.",
                  },
                  {
                    question: "Comment intégrer une référence ?",
                    answer:
                      "En une phrase : constat sur le texte, puis référence, puis lien explicite, et l'on revient au texte.",
                    astuce: "💡 Une référence juste vaut mieux que trois plaquées.",
                  },
                  {
                    question: "Que faire en cas de doute sur une date ou un auteur ?",
                    answer:
                      "Ne pas l'écrire : on s'appuie sur ce qu'on observe dans le texte, ou sur un repère général exact.",
                    astuce: "⚠️ Une référence inexacte dessert la copie.",
                  },
                  {
                    question: "Le lien avec l'école primaire ?",
                    answer:
                      "Mettre des textes en réseau (par thème, genre, personnage) construit la culture littéraire des élèves, dès les cycles 2-3.",
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
                center: { title: "Culture", subtitle: "littéraire" },
                branches: [
                  {
                    title: "Rôle de l'apport",
                    lines: ["Situer", "Éclairer", "Ouvrir"],
                    variant: "blue",
                  },
                  {
                    title: "Les genres",
                    lines: ["Récit", "Théâtre", "Poésie", "Texte d'idées"],
                    variant: "green",
                  },
                  {
                    title: "Convoquer une référence",
                    lines: ["Lien réel avec le texte", "En une phrase", "Une suffit si elle est juste"],
                    variant: "green",
                  },
                  {
                    title: "Pièges classiques",
                    lines: ["Placage de connaissances", "Référence inexacte", "Genre confondu avec registre"],
                    variant: "yellow",
                  },
                  {
                    title: "Renvois",
                    lines: ["Registres, figures → notion 18", "Construire le plan → notion 19", "Rédiger → notion 20"],
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

export const ficheCultureLitteraireL3 = ficheCultureLitteraire("l3");
export const ficheCultureLitteraireM2 = ficheCultureLitteraire("m2");
