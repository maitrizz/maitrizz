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
  | { type: "note"; text: RichText };

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
      // Pictogramme thématique sobre (SVG inline, dessiné main) servant d'ancre
      // visuelle pour le thème. Optionnel : clé d'icône (ex: "plume").
      pictogram?: string;
      cards: {
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
  | { type: "schema"; src: string; alt: string; caption?: RichText; maxWidth?: number };

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
  numero: number;
  partie: string; // ex: "Partie 1 — Nombres et calcul"
  title: string; // ex: "Numération · Systèmes de bases"
  subtitle: string;
  badges: FicheBadge[];
  metaTitle: string;
  metaDescription: string;
  tabGroups: FicheTabGroup[];
};
