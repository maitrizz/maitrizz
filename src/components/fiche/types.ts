/**
 * Modèle de données pour le gabarit de fiche "Épreuves écrites" (Maths / Français).
 * `RichText` est une chaîne pouvant contenir une mise en forme légère :
 *   - **gras**, *italique*, ~~barré~~
 *   - retours à la ligne via "\n"
 * voir src/components/fiche/richtext.tsx
 */
export type RichText = string;

/* ────────────────────────────────────────────────────────────
   Étapes de méthode (méthode pas-à-pas)
──────────────────────────────────────────────────────────── */
export type Step = {
  number: string; // "1", "2", "3", "💡", "→", "📌"...
  text: RichText;
  example?: { lines: string[] };
  exampleNote?: RichText;
  warn?: RichText;
  extra?: Block[];
};

/* ────────────────────────────────────────────────────────────
   Corrections d'exercices
──────────────────────────────────────────────────────────── */
export type CorrectionItem =
  | { type: "line"; label?: string; text: RichText }
  | { type: "paragraph"; text: RichText }
  | { type: "table"; headers: string[]; rows: RichText[][] }
  | { type: "checklist"; items: { text: RichText; bad?: boolean }[] }
  | { type: "note"; text: RichText }
  // Encart « Formulation CRPE » : la réponse rédigée telle qu'on l'écrirait le
  // jour du concours. Réservé aux exercices au format épreuve (variant crpe /
  // annale). Rendu en encart teal distinct pour être repérable d'une fiche à
  // l'autre. `text` peut contenir plusieurs lignes (séparées par "\n").
  | { type: "formulationCrpe"; text: RichText };

/* ────────────────────────────────────────────────────────────
   Blocs de contenu
──────────────────────────────────────────────────────────── */
export type Block =
  // Paragraphe simple
  | { type: "paragraph"; text: RichText }

  // Bloc d'accroche / encadré coloré (def-box, info-box, step-warn, piège inline...)
  | {
      type: "callout";
      variant: "info" | "success" | "warning" | "danger";
      icon?: string;
      title?: string;
      text: RichText;
    }

  // Section numérotée ①②③④⑤
  | { type: "subsection"; number: string; title: string; blocks: Block[] }

  // Liste à puces
  | { type: "bullets"; items: RichText[] }

  // Tableau
  | { type: "table"; title?: string; headers: string[]; rows: RichText[][] }

  // Grille de petites cartes (ex: "345 dans ses boîtes", "3 bases en résumé")
  | {
      type: "cardGrid";
      columns: 2 | 3;
      variant?: "info" | "success" | "warning" | "neutral";
      cards: {
        title?: string;
        value?: string;
        lines: RichText[];
        variant?: "info" | "success" | "warning" | "neutral";
      }[];
    }

  // Grille de "fiches notion" : une carte par notion, avec définition,
  // sous-classes, exemples concrets et piège/test bien séparés visuellement
  // (remplace avantageusement un tableau dense quand chaque ligne mérite
  // un exemple)
  | {
      type: "notionCardGrid";
      columns: 1 | 2;
      cards: {
        title: string;
        definition: RichText;
        sousClasses?: RichText;
        exemples: RichText[];
        astuce?: RichText; // mnémotechnique (🔑)
        piege?: RichText;
        test?: RichText;
      }[];
    }

  // Grille de cartes "référence" (recueil d'œuvres) : libellés explicites
  // (En bref / À retenir / Phrase type) au lieu d'icônes. Pensée pour un
  // référentiel consultable et directement exploitable.
  | {
      type: "referenceGrid";
      columns: 1 | 2;
      cards: {
        // « Œuvre · Auteur · date » : scindé à l'affichage pour mettre l'œuvre
        // en avant et reléguer auteur/date sur une ligne secondaire.
        title: string;
        genre?: string; // type/genre de l'œuvre (essai, roman dystopique, fable...) — badge
        enBref: RichText; // résumé concret de l'œuvre (de quoi ça parle)
        commentUtiliser: RichText[]; // liste des usages possibles en Partie 3
        formulationType: RichText; // phrase de concours prête à adapter (encart)
      }[];
    }

  // Encadré avec bandeau de titre coloré, contenant d'autres blocs
  | {
      type: "highlightBox";
      variant: "marine" | "neutral";
      icon?: string;
      title: string;
      blocks: Block[];
    }

  // Grille de comparaison (ex: règles d'accord CENT / VINGT / MILLE)
  | {
      type: "comparisonGrid";
      rows: { label: string; good: RichText; bad?: RichText }[];
    }

  // Formule encadrée (style monospace, ex: 1101₂ = ... = 13)
  | { type: "formulaBlock"; title?: string; lines: RichText[]; note?: RichText }

  // "Rappel express" (bandeau jaune/or)
  | { type: "rappelExpress"; title: string; blocks: Block[] }

  // Méthode pas-à-pas numérotée
  | {
      type: "methodeGroup";
      number: string;
      title: string;
      intro?: RichText;
      preBlocks?: Block[];
      steps: Step[];
    }

  // Carte "piège" (rouge / orange / bleu)
  | {
      type: "piegeCard";
      variant: "rouge" | "orange" | "bleu";
      title: string;
      badge?: string;
      faux: RichText;
      vrai: RichText;
      methode?: RichText;
    }

  // Encadré "regard du futur enseignant" (primaire)
  | { type: "primaireBox"; title: string; text: RichText }

  // Bandeau de niveau (échauffement, ★☆☆, ★★☆, ★★★)
  | {
      type: "niveauBanner";
      level: "echauffement" | "n1" | "n2" | "n3";
      label: string;
      stars?: string;
      sub?: string;
    }

  // Carte d'exercice avec corrigé repliable
  | {
      type: "exerciceCard";
      variant: "standard" | "crpe" | "annale" | "err-type";
      level?: "n1" | "n2" | "n3" | "echauffement";
      title: string;
      badge?: string;
      objectifTag?: string; // tag court reliant l'exercice à un objectif de l'Auto-évaluation
      enonce?: RichText;
      enonceCode?: string[];
      question: RichText;
      correction: CorrectionItem[];
    }

  // Deck de flashcards en mode révision (une carte à la fois, auto-évaluation)
  | {
      type: "flashcardDeck";
      cards: { question: RichText; answer: RichText; astuce?: RichText }[];
    }

  // Encadré "notion suivante"
  | { type: "nextFicheCallout"; title: RichText; text: RichText; href?: string }

  // Compteurs du bilan
  | {
      type: "bilanCounters";
      counters: { value: string | number; label: string; highlight?: boolean }[];
    }

  // Auto-évaluation (checkboxes + barre de progression)
  | { type: "autoEvalChecklist"; items: { id: string; label: string }[] }

  // Quiz éclair — QCM à correction immédiate, chaque question reliée à un
  // objectif de l'Auto-évaluation (id de la liste OBJECTIFS) pour alimenter
  // le suivi de maîtrise (voir src/components/fiche/progress.ts)
  | {
      type: "quizBlock";
      questions: {
        objectifId: string;
        question: RichText;
        options: RichText[];
        correctIndex: number;
        explanation?: RichText;
      }[];
    }

  // Jeu d'appariement au clic : relier chaque élément de gauche (ex. une œuvre)
  // à sa bonne réponse de droite (ex. son idée clé). Joué en manches successives,
  // avec score. `objectifId` (facultatif) alimente le suivi de maîtrise.
  | {
      type: "matchGame";
      instructions?: RichText;
      leftLabel?: string;
      rightLabel?: string;
      roundSize?: number; // nombre de paires par manche (défaut : 6)
      objectifId?: string;
      pairs: { left: RichText; right: RichText }[];
    }

  // Sommaire léger de la fiche (annonce le programme sans révéler le contenu) — "Vue d'ensemble"
  | {
      type: "sommaireApercu";
      title: RichText;
      intro?: RichText;
      items: { number: string; title: string; text: RichText }[];
    }

  // Carte mentale "lite" (branches CSS)
  | {
      type: "mindmapLite";
      center: { title: string; subtitle?: string };
      branches: {
        title: string;
        lines: string[];
        variant: "blue" | "green" | "yellow" | "purple";
        dashed?: boolean;
      }[];
    }

  // Encadré d'appel à l'action vers un autre onglet
  | { type: "ctaBox"; text: RichText; buttonLabel: string; targetTab: string }

  // Schéma ou illustration : image (SVG/PNG) servie depuis /public, avec légende.
  // `alt` est obligatoire (accessibilité). `maxWidth` en pixels (défaut : pleine largeur).
  | { type: "schema"; src: string; alt: string; caption?: RichText; maxWidth?: number }

  // Épreuve blanche « tout-en-un » (sujets blancs). Un seul composant orchestre
  // toute l'expérience : écran de départ (choix du mode examen / entraînement),
  // composition sur le site (texte côté gauche, questions et champs de réponse
  // côté droit), chronomètre global + temps par partie, puis correction
  // (réponse vs attendu, auto-évaluation cochable, note estimée /20, bilan par
  // partie, récap du temps, plan de révision, historique des tentatives).
  // Tout l'état est persisté en localStorage par fiche.
  | {
      type: "examRunner";
      intro?: RichText;
      tips?: RichText[]; // conseils « pour progresser », affichés dans le bilan
      text: {
        title: string; // ex: "Victor Hugo, Le Dernier Jour d'un condamné (1829)"
        paragraphs: RichText[];
        note?: RichText; // mise en situation sous le texte
      };
      totalMinutes: number;
      parts: {
        id: string;
        title: string; // ex: "Partie 1 — Étude de la langue"
        points: number; // total de la partie
        recommendedMinutes: number;
        intro?: RichText; // consigne de partie (ex: sujet du développement rédigé)
        questions: {
          id: string;
          label: string;
          enonce: RichText; // l'énoncé de la question
          answerPrompt?: string; // placeholder du champ de réponse
          answerRows?: number; // hauteur du champ (défaut : 2)
          elements: { label: RichText; points: number }[]; // réponse attendue, cochable
          note?: RichText; // justification / développement-modèle (révélé)
          revise?: { label: string; slug: string }; // fiche à revoir si la question est ratée
        }[];
      }[];
    }

  // Trainer : entraînement par récupération espacée (boîtes de Leitner) sur une
  // banque d'items fermés, auto-corrigeables. Sélectionne les items « échus »,
  // les entrelace, donne un feedback-geste immédiat, et persiste l'avancement
  // par item en localStorage. C'est la vraie fonction de l'onglet « Réviser ».
  | {
      type: "trainer";
      title?: RichText;
      intro?: RichText;
      sessionSize?: number; // nombre d'items par session (défaut : 12)
      savoirFaire?: { id: string; label: string }[]; // libellés du filtre « Ce que je travaille »
      items: TrainerItem[];
    }

  // Banque d'exercices OUVERTS, à faire à fond : on produit sa réponse, on révèle
  // le corrigé-modèle, on s'auto-évalue. Pas d'espacement : c'est de la pratique
  // délibérée, en difficulté croissante. Le composant « génère » une série filtrée
  // et mélangée à partir de la banque curée (filtres difficulté × objectif).
  | {
      type: "exerciceBank";
      title?: RichText;
      intro?: RichText;
      serieSize?: number; // nombre d'exercices par série (défaut : 6)
      savoirFaire?: { id: string; label: string }[];
      exercices: TrainerExercice[];
    }

  // « Corriger des erreurs » : une copie d'élève (analyse JUSTE ou FAUSSE). On juge
  // d'abord (« c'est juste » / « à corriger »), puis on dévoile si on avait raison, la
  // bonne analyse, et — seulement quand c'est pertinent — une ligne « côté prof »
  // (pourquoi l'élève se trompe, comment le détromper). Statut persisté par copie.
  | {
      type: "corrigerCopies";
      title?: RichText;
      intro?: RichText;
      copies: {
        id: string;
        copie: RichText; // ce que l'élève affirme (la phrase + son analyse)
        correcte: boolean; // l'analyse de l'élève est-elle juste ?
        verdict: RichText; // la bonne analyse (ou la confirmation que c'est juste)
        coteProf?: RichText; // ligne « côté prof », seulement si elle apporte
      }[];
    }
  // Voyants « Où j'en suis » dans la notion : état détaillé par savoir-faire,
  // dérivé des magasins existants (hub + exercices). `notionSlug` désigne la notion
  // à lire dans l'annuaire du hub. Renvoie un message doux si la notion n'est pas
  // encore branchée au hub.
  | { type: "maitriseVoyants"; notionSlug: string; title?: string; intro?: RichText };

/* ────────────────────────────────────────────────────────────
   Trainer (banque d'items)
──────────────────────────────────────────────────────────── */
// Modalité pédagogique = l'axe de filtre proposé à l'élève (distinct du `format`,
// qui n'est que le mode de saisie). « tout mélangé » = on ne filtre pas.
export type TrainerModalite = "rappel" | "application" | "type-concours" | "detection-erreur";

type TrainerItemBase = {
  id: string;
  notion: string; // ex: "fr-01"
  savoirFaire: string[]; // ids des savoir-faire travaillés (multi-tag) — voir GABARIT_NOTION.md
  modalite: TrainerModalite;
  difficulte: 1 | 2 | 3; // 1 échauffement · 2 standard · 3 piège
  reponseType?: RichText; // réponse courte type CRPE, affichée en premier (hors flashcards)
  feedback: RichText; // l'explication : le geste / le test à appliquer
};

export type TrainerItem =
  | (TrainerItemBase & {
      format: "qcm";
      enonce?: RichText; // la phrase / l'extrait sur lequel on travaille
      question: RichText;
      options: RichText[];
      correct: number; // index de la bonne option
    })
  | (TrainerItemBase & {
      format: "vrai-faux";
      enonce?: RichText;
      affirmation: RichText;
      correct: boolean; // true = l'affirmation est exacte
    })
  | (TrainerItemBase & {
      format: "intrus";
      consigne: RichText;
      mots: RichText[];
      intrus: number; // index du mot intrus
    })
  | (TrainerItemBase & {
      format: "classer";
      consigne: RichText;
      categories: string[];
      mots: { mot: RichText; categorie: number }[];
    })
  // Carte de rappel : on tente de répondre, on révèle, on s'auto-évalue.
  | (TrainerItemBase & {
      format: "flashcard";
      question: RichText;
      answer: RichText;
    })
  // Exercice OUVERT type concours : on rédige dans un encart, on révèle la réponse-modèle
  // (`reponseType`) + le détail (`explication`), puis on s'auto-évalue (la note pilote Leitner,
  // comme une flashcard). Ramène le geste de rédaction du jour J dans l'entraînement espacé.
  | (TrainerItemBase & {
      format: "ouvert";
      enonce?: RichText; // la phrase ou l'extrait à analyser
      question: RichText; // la consigne
      explication?: CorrectionItem[]; // détail du corrigé (réutilise le rendu des exercices)
    });

// Exercice ouvert de la banque : on rédige, on compare au corrigé-modèle.
export type TrainerExercice = {
  id: string;
  notion: string;
  savoirFaire: string[]; // ids des savoir-faire travaillés (multi-tag)
  difficulte: 1 | 2 | 3; // 1 Fondamentaux · 2 Concours · 3 Expert (au-delà de l'épreuve)
  enonce?: RichText; // la phrase ou l'extrait à analyser
  question: RichText; // la consigne
  reponseType: RichText; // LA réponse attendue, formulée comme au CRPE (affichée en premier)
  explication: CorrectionItem[]; // le détail / le pourquoi (réutilise le rendu des exerciceCard)
  attendus?: RichText[]; // points attendus à cocher pour une auto-évaluation objective (surtout niveaux 2-3)
};

/* ────────────────────────────────────────────────────────────
   Onglets et fiche
──────────────────────────────────────────────────────────── */
export type FicheTab = {
  id: string; // "vue-d-ensemble", "cours", "methode", "appli", "crpe", "cote-prof", "flash", "memo"
  label: string;
  icon: string;
  blocks: Block[];
};

// Méta-onglet regroupant plusieurs sous-onglets (ex: "Découvrir" → Vue d'ensemble, Cours, Méthode)
export type FicheTabGroup = {
  id: string; // "decouvrir", "pratiquer", "reviser"
  label: string;
  icon: string;
  tabs: FicheTab[];
};

export type FicheBadge = {
  label: string;
  variant: "hot" | "info";
};

export type Matiere = "mathematiques" | "francais" | "sciences";

export type Fiche = {
  slug: string;
  matiere: Matiere;
  // "notion" (défaut) : fiche de cours numérotée, affichée « Notion N : … ».
  // "sujet" : sujet blanc (entraînement en conditions réelles), affiché sans
  // préfixe « Notion ».
  kind?: "notion" | "sujet";
  numero: number;
  partie: string; // ex: "Partie 1 — Nombres et calcul"
  title: string; // ex: "Numération · Systèmes de bases"
  subtitle: string;
  badges: FicheBadge[];
  metaTitle: string;
  metaDescription: string;
  // Si renseigné, affiche le panneau « Où j'en suis » (voyants par savoir-faire)
  // juste sous l'en-tête, visible dès l'ouverture de la notion. Valeur = slug de la
  // notion dans l'annuaire du hub. Opt-in : seules les notions branchées au hub l'ont.
  maitriseNotionSlug?: string;
  tabGroups: FicheTabGroup[];
};
