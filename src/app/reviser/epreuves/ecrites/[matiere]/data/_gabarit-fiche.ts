import type { Fiche } from "@/components/fiche/types";

/**
 * ════════════════════════════════════════════════════════════════════════
 * GABARIT OFFICIEL — structure d'une fiche "notion" (écrit)
 * ════════════════════════════════════════════════════════════════════════
 *
 * Validé sur la notion 1 de maths (numération · systèmes de bases) :
 *   ./mathematiques/numeration-systemes-de-bases.ts
 *
 * COMMENT CRÉER UNE NOUVELLE FICHE :
 *   1. Copier ce fichier dans ./mathematiques/ ou ./francais/, le renommer
 *      en kebab-case (ex: "proportionnalite.ts") et renommer la constante
 *      exportée (ex: ficheProportionnalite).
 *   2. Remplir chaque section ci-dessous SANS changer la structure des
 *      3 groupes / 10 onglets — c'est elle qui porte la pédagogie.
 *   3. Enregistrer la fiche dans ./index.ts : ajouter l'import et l'entrée
 *      dans le tableau FICHES["mathematiques" | "francais"].
 *
 * Ce fichier n'est PAS une fiche réelle — ne pas l'ajouter à FICHES.
 * Catalogue complet des types de blocs disponibles : src/components/fiche/types.ts
 * Exemple complet et détaillé : ./mathematiques/numeration-systemes-de-bases.ts
 * ════════════════════════════════════════════════════════════════════════
 */

// Objectifs de la fiche — utilisés dans "Vue d'ensemble" (annonce) ET dans
// "Auto-évaluation" (checklist + suivi de maîtrise via le Quiz éclair).
// Prévoir 5 à 8 objectifs, formulés "Je sais / Je comprends / Je maîtrise...".
const OBJECTIFS = [
  { id: "e1", label: "Je sais ..." },
  { id: "e2", label: "Je comprends ..." },
  { id: "e3", label: "Je maîtrise ..." },
];

export const ficheGabarit: Fiche = {
  slug: "...", // kebab-case, utilisé dans l'URL
  matiere: "mathematiques", // ou "francais"
  numero: 0, // ordre dans la partie — détermine le tri et la nav précédent/suivant
  partie: "Partie X — ...",
  title: "...",
  subtitle: "...",
  badges: [
    // Signal de fréquence/importance — donne du sens dès l'arrivée sur la fiche
    { label: "★★★ Tombe chaque année", variant: "hot" },
    // Ancrage programme (cycle, BOEN, thème)
    { label: "Cycle X · BOEN 2020 · Thème ...", variant: "info" },
  ],
  metaTitle: "... (CRPE) — Fiche de révision | Maitrizz",
  metaDescription: "...",

  tabGroups: [
    // ════════════════════════════════════════════════════════════════════
    // GROUPE 1 — Découvrir 📖
    // Rôle : comprendre la notion avant de s'exercer.
    // ════════════════════════════════════════════════════════════════════
    {
      id: "decouvrir",
      label: "Découvrir",
      icon: "📖",
      tabs: [
        {
          id: "vue-d-ensemble",
          label: "Vue d'ensemble",
          icon: "🗺️",
          // Rôle : annoncer le programme en N étapes numérotées (①②③...).
          // Ces mêmes numéros seront repris dans "Cours", "Méthode" et
          // "Mémo" — c'est le fil rouge de toute la fiche.
          blocks: [
            {
              type: "sommaireApercu",
              title: "Le programme en N étapes",
              // Une phrase d'accroche courte, spécifique à la notion (pas de
              // texte générique recopié d'une fiche à l'autre).
              intro: "...",
              items: [
                { number: "①", title: "...", text: "..." },
                { number: "②", title: "...", text: "..." },
              ],
            },
          ],
        },
        {
          id: "cours",
          label: "Cours",
          icon: "📚",
          // Rôle : exposer la notion, subsection par subsection (mêmes
          // numéros ①②③ que la Vue d'ensemble). Toujours relier au connu
          // ("vous faites déjà ça sans y penser..."), signaler les pièges
          // au fil du texte (piegeCard), terminer par un primaireBox (lien
          // avec l'enseignement primaire) puis un ctaBox vers "Méthode".
          blocks: [
            {
              type: "callout",
              variant: "info",
              icon: "🧠",
              title: "Avant de commencer",
              text: "...",
            },
            {
              type: "subsection",
              number: "①",
              title: "...",
              blocks: [
                { type: "paragraph", text: "..." },
                // cardGrid, highlightBox, table... selon le besoin
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "...",
              blocks: [{ type: "paragraph", text: "..." }],
            },
            // Pièges fréquents repérés sur cette notion — un par erreur classique
            {
              type: "piegeCard",
              variant: "rouge",
              title: "⚠️ Piège n°1 — ...",
              badge: "Erreur très fréquente",
              faux: "...",
              vrai: "...",
              methode: "...",
            },
            // Lien avec la pratique enseignante — donne du sens au futur prof
            {
              type: "primaireBox",
              title: "🏫 Ce que ça donne à l'école primaire — le regard du futur enseignant",
              text: "...",
            },
            {
              type: "ctaBox",
              text: "Cours bien en tête ? Passez à la méthode →",
              buttonLabel: "🔢 Voir la méthode pas-à-pas",
              targetTab: "methode",
            },
          ],
        },
        {
          id: "methode",
          label: "Méthode",
          icon: "🔢",
          // Rôle : méthode(s) pas-à-pas (methodeGroup → steps). Si la
          // méthode s'appuie sur des prérequis, les rappeler juste avant
          // via "rappelExpress" (just-in-time, réduit la charge cognitive).
          // Chaque methodeGroup se termine par un exerciceCard "Checkpoint"
          // (30 secondes) pour vérifier l'acquisition avant de continuer.
          // ctaBox final → "quiz".
          blocks: [
            {
              type: "callout",
              variant: "success",
              icon: "🤝",
              title: "...",
              text: "...",
            },
            {
              type: "rappelExpress",
              title: "⚡ Rappel express — notions utilisées ci-dessous",
              blocks: [{ type: "paragraph", text: "..." }],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "...",
              intro: "**Question typique :** « ... »",
              steps: [
                { number: "1", text: "**...**", example: { lines: ["..."] } },
                { number: "2", text: "**...**", example: { lines: ["..."] } },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "✅ Checkpoint — à vous de jouer",
              badge: "30 secondes",
              question: "...",
              correction: [{ type: "line", text: "..." }],
            },
            {
              type: "ctaBox",
              text: "Méthode bien en tête ? Testez-vous →",
              buttonLabel: "🧪 Lancer le Quiz éclair",
              targetTab: "quiz",
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // GROUPE 2 — Pratiquer 🎯
    // Rôle : appliquer, tester, se confronter au format de l'épreuve.
    // ════════════════════════════════════════════════════════════════════
    {
      id: "pratiquer",
      label: "Pratiquer",
      icon: "🎯",
      tabs: [
        {
          id: "quiz",
          label: "Quiz éclair",
          icon: "🧪",
          // Rôle : ~10 questions QCM, CHACUNE liée à un objectifId présent
          // dans OBJECTIFS (ci-dessus) → alimente le suivi de maîtrise
          // (boîtes de Leitner) affiché dans "Auto-évaluation".
          // ctaBox final → "appli".
          blocks: [
            {
              type: "callout",
              variant: "info",
              icon: "🧪",
              title: "Avant de passer aux exercices",
              text: "N questions rapides pour vérifier que le Cours et la Méthode sont bien ancrés. Chaque réponse alimente votre suivi de maîtrise — retrouvez le détail objectif par objectif dans l'onglet **Auto-évaluation**, avec la date de votre prochaine révision.",
            },
            {
              type: "quizBlock",
              questions: [
                {
                  objectifId: "e1",
                  question: "...",
                  options: ["...", "...", "...", "..."],
                  correctIndex: 0,
                  explanation: "...",
                },
              ],
            },
            {
              type: "ctaBox",
              text: "Quiz terminé ? Direction l'Application pour des exercices plus complets →",
              buttonLabel: "🎯 Voir l'Application",
              targetTab: "appli",
            },
          ],
        },
        {
          id: "appli",
          label: "Application",
          icon: "🎯",
          // Rôle : exercices progressifs — niveauBanner puis exerciceCard(s),
          // toujours dans cet ordre : echauffement (✅) → n1 (★☆☆) →
          // n2 (★★☆) → n3 (★★★). Victoires faciles d'abord → confiance.
          blocks: [
            {
              type: "callout",
              variant: "success",
              text: "Progressez niveau par niveau. Chaque niveau ajoute une difficulté. Corrigez avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              stars: "✅",
              label: "Échauffement — Je vérifie que j'ai compris le Cours",
              sub: "Questions directes, une seule chose à la fois",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 — ...",
              question: "...",
              correction: [{ type: "line", text: "..." }],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 — Calcul direct",
              sub: "Application immédiate du Cours",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 — ...",
              objectifTag: "...",
              question: "...",
              correction: [{ type: "line", text: "..." }],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 — Mise en contexte",
              sub: "Problèmes concrets, plusieurs étapes",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice — ...",
              question: "...",
              correction: [{ type: "line", text: "..." }],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 — Raisonnement ouvert",
              sub: "Justification · démonstration · question ouverte",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice — ...",
              question: "...",
              correction: [{ type: "line", text: "..." }],
            },
          ],
        },
        {
          id: "crpe",
          label: "Type CRPE",
          icon: "📄",
          // Rôle : exercices au format des sujets officiels.
          // variant "crpe" pour un exercice type, "annale" + badge
          // "✦ D'après [source]" pour un sujet issu d'une annale réelle.
          blocks: [
            {
              type: "callout",
              variant: "success",
              text: "Ces exercices reproduisent exactement le format des sujets officiels. Les sujets issus d'annales réelles sont identifiés par le badge ✦ ANNALE.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "📄 Type CRPE · Exercice",
              enonce: "...",
              question: "...",
              correction: [{ type: "paragraph", text: "..." }],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              title: "📄 Type CRPE · Exercice",
              badge: "✦ D'après [source]",
              enonce: "...",
              question: "...",
              correction: [{ type: "paragraph", text: "..." }],
            },
          ],
        },
        {
          id: "cote-prof",
          label: "Côté prof",
          icon: "🔴",
          // Rôle : analyses d'erreurs RÉELLES (variant "err-type") — copie
          // de candidat ou d'élève à corriger. Compétence directement
          // valorisée au CRPE (analyse didactique). Utiliser "checklist"
          // dans la correction pour lister les erreurs avec bad: true.
          blocks: [
            {
              type: "callout",
              variant: "warning",
              text: "Ces exercices reproduisent des **erreurs réelles de candidats**, analysées à partir des rapports de jury et des productions types. Identifier une erreur et la corriger rigoureusement est une compétence directement valorisée au CRPE.",
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "🔴 Erreur type · Exercice",
              enonce: "**Copie d'un candidat :** ...",
              question: "a) Cette réponse est-elle correcte ? Justifier.\nb) Si elle est fausse, identifier précisément l'erreur et donner la réponse attendue.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "..." },
                    { text: "**Réponse correcte :** ..." },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════════
    // GROUPE 3 — Réviser ⚡
    // Rôle : ancrer durablement et suivre sa progression.
    // ════════════════════════════════════════════════════════════════════
    {
      id: "reviser",
      label: "Réviser",
      icon: "⚡",
      tabs: [
        {
          id: "flash",
          label: "Flashcards",
          icon: "⚡",
          // Rôle : rappel actif (active recall). "astuce" optionnelle pour
          // donner une méthode de réponse, pas juste la réponse brute.
          blocks: [
            {
              type: "callout",
              variant: "info",
              text: "Essayez de répondre dans votre tête avant de révéler la réponse, puis évaluez-vous : les cartes « à revoir » repasseront en fin de série.",
            },
            {
              type: "flashcardDeck",
              cards: [
                { question: "...", answer: "...", astuce: "..." },
              ],
            },
          ],
        },
        {
          id: "memo",
          label: "Mémo",
          icon: "🧠",
          // Rôle : carte mentale de synthèse — reprend les mêmes grandes
          // étapes que "Vue d'ensemble", pour une révision flash avant le jour J.
          blocks: [
            {
              type: "callout",
              variant: "info",
              icon: "🧠",
              title: "Toute la notion, en un coup d'œil",
              text: "Voici la carte mentale complète de cette fiche — un excellent outil pour réviser rapidement avant le jour J, une fois que vous avez travaillé chaque partie.",
            },
            {
              type: "mindmapLite",
              center: { title: "...", subtitle: "..." },
              branches: [
                { title: "...", variant: "blue", lines: ["..."] },
                { title: "...", variant: "green", lines: ["..."] },
                { title: "Pièges classiques", variant: "yellow", lines: ["..."] },
                { title: "Recul primaire", variant: "purple", dashed: true, lines: ["..."] },
              ],
            },
          ],
        },
        {
          id: "autoeval",
          label: "Auto-évaluation",
          icon: "✅",
          // Rôle : checklist liée à OBJECTIFS, avec suivi automatique du
          // Quiz éclair (boîtes de Leitner, dates de prochaine révision).
          // Ne rien ajouter d'autre ici — le composant gère tout.
          blocks: [{ type: "autoEvalChecklist", items: OBJECTIFS }],
        },
      ],
    },
  ],
};
