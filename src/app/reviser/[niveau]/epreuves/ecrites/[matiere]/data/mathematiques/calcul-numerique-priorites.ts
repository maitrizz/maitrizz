import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je connais l'ordre de priorité des opérations et je l'applique sans hésitation" },
  { id: "e2", label: "Je maîtrise les règles des signes pour la multiplication et la division de relatifs" },
  { id: "e3", label: "Je sais effectuer une division euclidienne et écrire la relation a = bq + r en vérifiant que r < b" },
  { id: "e4", label: "Je sais utiliser la distributivité pour le calcul mental (× 25, × 5, décomposition)" },
  { id: "e5", label: "Je sais estimer l'ordre de grandeur d'un résultat avant et après le calcul" },
  { id: "e6", label: "Je sais bien placer la virgule dans une multiplication de décimaux" },
  { id: "e7", label: "Je sais distinguer division euclidienne et division décimale selon la question posée" },
  { id: "e8", label: "Je connais les principales erreurs types et les réflexes pour les éviter" },
];

export const ficheCalculNumeriquePriorites: Fiche = {
  slug: "calcul-numerique-priorites",
  matiere: "mathematiques",
  numero: 5,
  partie: "Partie 1 : Nombres et calcul",
  title: "Calcul numérique et priorités",
  subtitle:
    "Les quatre opérations · algorithmes posés · priorités opératoires · distributivité · calcul mental · estimation et ordre de grandeur",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème A", variant: "info" },
  ],
  metaTitle: "Calcul numérique et priorités opératoires (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur le calcul numérique : priorités opératoires, quatre opérations, division euclidienne, distributivité, calcul mental, ordre de grandeur, et les algorithmes posés à l'école primaire. Cours, méthode, exercices corrigés, flashcards et auto-évaluation.",
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
                { number: "①", title: "Les priorités opératoires", text: "L'ordre strict des opérations, valable partout." },
                { number: "②", title: "Les quatre opérations", text: "Règles des signes, propriétés et division euclidienne." },
                { number: "③", title: "Décimaux et conversions", text: "Placer la virgule, convertir les unités sans erreur." },
                { number: "④", title: "Calcul mental et estimation", text: "Aller vite et vérifier par l'ordre de grandeur." },
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
              title: "Avant de commencer",
              text: "C'est la fiche la plus opérationnelle du programme : pas de concept nouveau, mais une exigence de rigueur. Poser les calculs correctement, respecter les priorités, ne pas se tromper de signe, donner le bon format. Ces points sont dans chaque sujet, souvent en questions courtes qui rapportent des points faciles, à condition de ne pas les bâcler.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Les priorités opératoires : la règle absolue",
              blocks: [
                {
                  type: "paragraph",
                  text: "Dans une expression sans parenthèses, on ne calcule pas de gauche à droite : on respecte un ordre strict, valable pour les entiers, décimaux, fractions et relatifs.",
                },
                {
                  type: "table",
                  headers: ["Priorité", "Opérations", "Exemple"],
                  rows: [
                    ["1", "Parenthèses (de l'intérieur vers l'extérieur)", "3 × (2 + 5) = 3 × 7 = 21"],
                    ["2", "Puissances et racines", "2 + 3² = 2 + 9 = 11"],
                    ["3", "× et ÷ (de gauche à droite entre elles)", "2 + 3 × 4 = 2 + 12 = 14"],
                    ["4", "+ et − (de gauche à droite)", "10 − 3 + 2 = 9"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Le piège classique",
                  text: "**12 ÷ 3 × 4** ne fait pas 12 ÷ 12 = 1. Division et multiplication ont la même priorité, on va de gauche à droite : 12 ÷ 3 = 4, puis 4 × 4 = **16**.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Les quatre opérations et la division euclidienne",
              blocks: [
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    { title: "Règle des signes (× et ÷)", variant: "info", lines: ["Même signe → positif", "Signes opposés → négatif", "(−3) × (−4) = +12"] },
                    { title: "Distributivité", variant: "info", lines: ["a × (b + c) = a×b + a×c", "17 × 12 = 170 + 34 = 204"] },
                    { title: "Commutativité et associativité", variant: "info", lines: ["4 × 17 × 25 = 100 × 17 = 1 700", "8 × 125 = 1 000"] },
                    { title: "Multiplier par 10ⁿ", variant: "info", lines: ["× 10ⁿ : virgule vers la droite", "3,45 × 100 = 345"] },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "La division euclidienne",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: ["a = b × q + r avec 0 ≤ r < b"],
                      note: "Le reste est toujours strictement inférieur au diviseur : c'est ce qui assure l'unicité.",
                    },
                    {
                      type: "paragraph",
                      text: "Exemples : 47 ÷ 5 → quotient 9, reste 2 (47 = 5 × 9 + 2). 100 ÷ 7 → quotient 14, reste 2 (100 = 7 × 14 + 2).",
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      text: "Ne pas confondre avec la **division décimale** : 47 ÷ 5 = 9,4 (décimale) n'est pas « quotient 9, reste 2 » (euclidienne). Les deux sont correctes, mais répondent à des questions différentes.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Points de vigilance : décimaux et conversions",
              blocks: [
                {
                  type: "callout",
                  variant: "info",
                  title: "Multiplier des décimaux",
                  text: "On calcule sans la virgule, puis on replace la virgule : le résultat a autant de décimales que la **somme** des décimales des deux facteurs. 2,3 × 1,4 → 23 × 14 = 322, et 1 + 1 = 2 décimales → **3,22**.",
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Conversions d'unités",
                  text: "km → m : × 1 000 · cm → m : ÷ 100 · L → mL : × 1 000 · kg → g : × 1 000. Exemples : 3,5 km = 3 500 m · 250 cL = 2,5 L.",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Calcul mental, estimation et ordre de grandeur",
              blocks: [
                {
                  type: "paragraph",
                  text: "Le calcul mental est un outil de contrôle : une estimation rapide détecte les erreurs grossières. Le jury valorise les candidats qui montrent qu'ils ont vérifié.",
                },
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    { title: "Distributivité", variant: "info", lines: ["25 × 12 = 250 + 50 = 300"] },
                    { title: "Compléments", variant: "info", lines: ["37 + 63 = 100 · 998 + 2 = 1 000"] },
                    { title: "Raccourcis utiles", variant: "info", lines: ["× 25 = × 100 ÷ 4", "× 5 = × 10 ÷ 2"] },
                    { title: "Ordre de grandeur", variant: "info", lines: ["382 × 47 ≈ 400 × 50 = 20 000", "(exact : 17 954, cohérent)"] },
                  ],
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : calculer de gauche à droite sans les priorités",
              badge: "Erreur n°1",
              faux: "2 + 3 × 4 = 5 × 4 = 20.",
              vrai: "2 + 3 × 4 = 2 + 12 = **14** : la multiplication passe avant l'addition.",
              methode: "Avant de calculer, repérer toutes les × et ÷, les faire en premier, puis + et −.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : la règle des signes en multiplication",
              badge: "Très fréquent",
              faux: "(−3) × (−4) = −12.",
              vrai: "(−3) × (−4) = **+12**. Moins par moins donne plus.",
              methode: "Compter les facteurs négatifs : nombre pair → positif, impair → négatif.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : un reste supérieur ou égal au diviseur",
              badge: "Erreur de vérification",
              faux: "53 ÷ 7 : quotient 6, reste 11 (7 × 6 = 42).",
              vrai: "Si le reste ≥ diviseur, le quotient est trop petit : 7 × 7 = 49, reste 4 → 53 = 7 × 7 + 4.",
              methode: "Toujours vérifier r < b ; sinon, augmenter le quotient de 1.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : mal placer la virgule d'un produit de décimaux",
              badge: "Fréquent",
              faux: "0,3 × 0,4 = 1,2.",
              vrai: "3 × 4 = 12, et 1 + 1 = 2 décimales → **0,12**.",
              methode: "Additionner le nombre de décimales des deux facteurs.",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°5 : confondre division euclidienne et division décimale",
              badge: "Subtil",
              faux: "« 17 ÷ 4 = 4 reste 1 » quand on demande le résultat décimal.",
              vrai: "Valeur décimale : 17 ÷ 4 = 4,25. Division euclidienne : quotient 4, reste 1.",
              methode: "« Quotient et reste » → euclidienne. « Valeur exacte » ou « résultat » → décimale.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "Le PE doit savoir enseigner le calcul, pas seulement calculer. Le jury demande souvent d'identifier l'erreur d'un élève, d'expliquer un algorithme ou de comparer deux méthodes.\n\n**Addition (CE1-CE2) :** la retenue est un groupement de 10 qui change de rang. On l'enseigne avec des manipulations (bûchettes, abaques) avant l'écriture formelle. Un élève qui la vit comme une règle mécanique l'oublie ou la place mal.\n\n**Soustraction (CE2-CM) :** deux méthodes valides coexistent (par emprunt, la plus répandue aujourd'hui ; par compensation, dominante avant les années 1980). Le BOEN 2020 n'en impose aucune. Les élèves doivent comprendre que soustraire, c'est trouver une différence, pas seulement enlever.\n\n**Multiplication (CE1 à CM2) :** la clé est de comprendre pourquoi on décale les produits partiels. Dans 34 × 26, le 2 vaut 20 : le produit 34 × 20 = 680 est décalé d'un rang. Le décalage traduit la valeur positionnelle, ce n'est pas une convention arbitraire.\n\n**Division (CM1-CM2) :** l'algorithme le plus exigeant du cycle 3. On passe d'abord par les soustractions successives, plus intuitives, avant l'algorithme posé. La difficulté est l'estimation du chiffre du quotient. Le sens (partage et groupement) doit précéder la technique.\n\n**Les priorités opératoires** ne sont pas enseignées formellement au primaire (elles arrivent au cycle 4), mais le PE doit les maîtriser pour ne pas induire ses élèves en erreur au tableau.",
            },
            {
              type: "table",
              title: "Progression des algorithmes posés (cycles 2 et 3)",
              headers: ["Niveau", "Addition", "Soustraction", "Multiplication", "Division"],
              rows: [
                ["CE1", "Sans puis avec retenue", "Sens de la différence", "Premières posées (× 1 chiffre)", "Partage concret"],
                ["CE2", "Plusieurs retenues", "Algorithme posé", "× 1 chiffre, intro × 2 chiffres", "Soustractions successives"],
                ["CM1", "Grands nombres", "Décimaux", "Grands nombres, intro décimaux", "Posée par 1 chiffre"],
                ["CM2", "Décimaux", "Décimaux", "Décimaux, grands multiplicateurs", "Par 2 chiffres, décimaux"],
              ],
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
              title: "Trois réflexes à automatiser",
              text: "Identifier l'ordre de priorité avant de calculer, effectuer proprement une division euclidienne, estimer le résultat. Ce sont ces automatismes qui font la différence sur copie.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Calculer une expression avec priorités",
              intro: "**Question typique :** « Calculer 3 + 2² × (8 − 5) ÷ 6 − 1 ».",
              steps: [
                { number: "1", text: "**Traiter les parenthèses.**", example: { lines: ["3 + 2² × 3 ÷ 6 − 1"] } },
                { number: "2", text: "**Traiter les puissances.**", example: { lines: ["3 + 4 × 3 ÷ 6 − 1"] } },
                { number: "3", text: "**Traiter × et ÷, de gauche à droite.**", example: { lines: ["3 + 12 ÷ 6 − 1 = 3 + 2 − 1"] } },
                { number: "4", text: "**Traiter + et −, de gauche à droite.**", example: { lines: ["3 + 2 − 1 = **4**"] }, warn: "⚠️ Vérification par estimation : 3 + 4×0,5 − 1 ≈ 4. Cohérent." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Calculer 10 − 2 × 3 + 4².",
              correction: [
                { type: "line", text: "Puissance : 4² = 16. Multiplication : 2 × 3 = 6. Puis 10 − 6 + 16 = **20**." },
                { type: "note", text: "Puissances et × avant les + et − ; on finit de gauche à droite." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Effectuer et vérifier une division euclidienne",
              intro: "**Question typique :** « Quotient et reste de 253 par 17 ».",
              steps: [
                { number: "1", text: "**Estimer le quotient** : combien de fois 17 dans 253 ?", example: { lines: ["17 × 14 = 238 → 253 − 238 = 15"] } },
                { number: "2", text: "**Vérifier que le reste est inférieur au diviseur.**", example: { lines: ["15 < 17 ✓"] } },
                { number: "3", text: "**Écrire la relation de division euclidienne.**", example: { lines: ["253 = 17 × 14 + 15 avec 0 ≤ 15 < 17"] }, warn: "⚠️ Ne jamais se contenter de « q = 14, r = 15 » : la relation a = bq + r doit apparaître." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Donner quotient et reste de 100 ÷ 7, puis écrire la relation.",
              correction: [
                { type: "line", text: "7 × 14 = 98, reste 2 → **100 = 7 × 14 + 2** avec 0 ≤ 2 < 7." },
                { type: "note", text: "On vérifie toujours que le reste est strictement inférieur au diviseur." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Utiliser la distributivité pour le calcul mental",
              intro: "**Question typique :** « Calculer mentalement 48 × 25 ».",
              steps: [
                { number: "A", text: "**Décomposer un facteur.**", example: { lines: ["48 × 25 = (50 − 2) × 25 = 1 250 − 50 = 1 200"] } },
                { number: "B", text: "**Ou chercher un raccourci.**", example: { lines: ["48 × 25 = 48 × 100 ÷ 4 = 4 800 ÷ 4 = 1 200"] }, exampleNote: "× 25 = × 100 ÷ 4 ; × 5 = × 10 ÷ 2." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Calculer mentalement 36 × 25.",
              correction: [
                { type: "line", text: "36 × 100 ÷ 4 = 3 600 ÷ 4 = **900**." },
                { type: "note", text: "Multiplier par 25 revient à multiplier par 100 puis diviser par 4." },
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
              title: "Avant de passer aux exercices",
              text: "8 questions rapides pour vérifier que le Cours et la Méthode sont bien ancrés. Le détail objectif par objectif est dans l'onglet Auto-évaluation.",
            },
            {
              type: "quizBlock",
              questions: [
                {
                  objectifId: "e1",
                  question: "Combien vaut 2 + 3 × 4 ?",
                  options: ["20", "14", "24", "9"],
                  correctIndex: 1,
                  explanation: "La multiplication est prioritaire : 3 × 4 = 12, puis 2 + 12 = 14.",
                },
                {
                  objectifId: "e1",
                  question: "Combien vaut 12 ÷ 3 × 4 ?",
                  options: ["1", "16", "9", "12"],
                  correctIndex: 1,
                  explanation: "× et ÷ ont la même priorité, on va de gauche à droite : 12 ÷ 3 = 4, puis 4 × 4 = 16.",
                },
                {
                  objectifId: "e2",
                  question: "Combien vaut (−6) × (−4) ?",
                  options: ["−24", "+24", "−10", "+10"],
                  correctIndex: 1,
                  explanation: "Deux facteurs de même signe (ici négatifs) donnent un résultat positif : +24.",
                },
                {
                  objectifId: "e3",
                  question: "Quel est le reste de la division euclidienne de 47 par 5 ?",
                  options: ["0", "2", "9", "7"],
                  correctIndex: 1,
                  explanation: "47 = 5 × 9 + 2, avec 0 ≤ 2 < 5 : le quotient est 9 et le reste 2.",
                },
                {
                  objectifId: "e7",
                  question: "On demande la division euclidienne de 17 par 4. Que répond-on ?",
                  options: ["4,25", "Quotient 4, reste 1", "Quotient 4, reste 2", "4,2"],
                  correctIndex: 1,
                  explanation: "Division euclidienne : 17 = 4 × 4 + 1, donc quotient 4 et reste 1. (La valeur décimale, 4,25, répond à une autre question.)",
                },
                {
                  objectifId: "e4",
                  question: "Quel raccourci permet de multiplier mentalement par 25 ?",
                  options: ["× 10 ÷ 2", "× 100 ÷ 4", "× 5 × 5", "× 50 ÷ 2"],
                  correctIndex: 1,
                  explanation: "× 25 = × 100 ÷ 4. Exemple : 36 × 25 = 3 600 ÷ 4 = 900.",
                },
                {
                  objectifId: "e6",
                  question: "Combien vaut 0,3 × 0,4 ?",
                  options: ["1,2", "0,12", "0,7", "12"],
                  correctIndex: 1,
                  explanation: "3 × 4 = 12, et 1 + 1 = 2 décimales → 0,12.",
                },
                {
                  objectifId: "e5",
                  question: "Quel est l'ordre de grandeur de 382 × 47 ?",
                  options: ["Environ 2 000", "Environ 20 000", "Environ 200 000", "Environ 200"],
                  correctIndex: 1,
                  explanation: "382 ≈ 400 et 47 ≈ 50, donc 400 × 50 = 20 000 (le résultat exact, 17 954, est cohérent).",
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
              text: "Progressez niveau par niveau. Corrigez chaque exercice avant de continuer.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : réflexes de base",
              sub: "Priorités et signes",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : priorités opératoires",
              objectifTag: "Priorités opératoires",
              question: "Calculer sans calculatrice :\na) 5 + 3 × 2   b) (5 + 3) × 2   c) 20 − 4 ÷ 2   d) 12 ÷ 4 × 3   e) 2 + 3²",
              correction: [
                { type: "line", label: "a)", text: "5 + 6 = 11" },
                { type: "line", label: "b)", text: "8 × 2 = 16" },
                { type: "line", label: "c)", text: "20 − 2 = 18" },
                { type: "line", label: "d)", text: "3 × 3 = 9 (gauche à droite, même priorité)" },
                { type: "line", label: "e)", text: "2 + 9 = 11" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : règles des signes",
              objectifTag: "Règles des signes",
              question: "Calculer :\na) (−4) + (−7)   b) (−3) − (−5)   c) (−6) × (−4)   d) (−15) ÷ 3   e) (−2)³",
              correction: [
                { type: "line", label: "a)", text: "même signe → −11" },
                { type: "line", label: "b)", text: "−3 + 5 = +2" },
                { type: "line", label: "c)", text: "deux négatifs → +24" },
                { type: "line", label: "d)", text: "signes opposés → −5" },
                { type: "line", label: "e)", text: "(−2)³ = −8 (trois facteurs négatifs → négatif)" },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : calcul direct",
              sub: "Application des règles",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : expressions avec priorités",
              objectifTag: "Priorités opératoires",
              question: "Calculer en détaillant :\na) 4 × 3 + 2² − (7 − 3)   b) 18 ÷ (2 + 1) × 4 − 5   c) (−2) × 3 + 4 × (−1) − (−6)",
              correction: [
                { type: "line", label: "a)", text: "12 + 4 − 4 = **12**" },
                { type: "line", label: "b)", text: "18 ÷ 3 × 4 − 5 = 24 − 5 = **19**" },
                { type: "line", label: "c)", text: "−6 + (−4) − (−6) = −6 − 4 + 6 = **−4**" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : division euclidienne",
              objectifTag: "Division euclidienne",
              question: "Donner q et r, puis écrire a = b×q + r :\na) 87 ÷ 9   b) 145 ÷ 11   c) 200 ÷ 13",
              correction: [
                { type: "line", label: "a)", text: "87 = 9 × 9 + 6, avec 0 ≤ 6 < 9" },
                { type: "line", label: "b)", text: "145 = 11 × 13 + 2, avec 0 ≤ 2 < 11" },
                { type: "line", label: "c)", text: "200 = 13 × 15 + 5, avec 0 ≤ 5 < 13" },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : mise en contexte",
              sub: "Plusieurs étapes, justification",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : calcul mental et distributivité",
              objectifTag: "Distributivité et calcul mental",
              question: "Calculer mentalement en détaillant la stratégie :\na) 99 × 7   b) 36 × 25   c) 125 × 8   d) 47 + 53",
              correction: [
                { type: "line", label: "a)", text: "(100 − 1) × 7 = 700 − 7 = 693" },
                { type: "line", label: "b)", text: "36 × 100 ÷ 4 = 900" },
                { type: "line", label: "c)", text: "125 × 4 × 2 = 500 × 2 = 1 000" },
                { type: "line", label: "d)", text: "complément : 47 + 3 = 50, + 50 = 100" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 4 : problème à opérations mixtes",
              objectifTag: "Priorités opératoires",
              enonce: "Un enseignant achète 24 cahiers à 2,75 € l'unité et 3 paquets de stylos à 4,50 € le paquet, avec un budget de 80 €.",
              question: "a) Coût total des achats ?\nb) Reste du budget ?\nc) Peut-il acheter 5 cahiers de plus avec ce reste ?",
              correction: [
                { type: "line", label: "a)", text: "24 × 2,75 + 3 × 4,50 = 66 + 13,50 = **79,50 €**" },
                { type: "line", label: "b)", text: "80 − 79,50 = **0,50 €**" },
                { type: "line", label: "c)", text: "5 × 2,75 = 13,75 € > 0,50 € → **non**, le budget est insuffisant." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : raisonnement",
              sub: "Démonstration, généralisation",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 5 : propriétés de la division euclidienne",
              objectifTag: "Division euclidienne",
              question:
                "a) En divisant un entier n par 3, montrer que n² laisse toujours le reste 0 ou 1.\nb) En déduire qu'un entier dont le carré est divisible par 3 est lui-même divisible par 3.",
              correction: [
                { type: "line", label: "a)", text: "n = 3k → n² = 3(3k²), reste 0. n = 3k+1 → n² = 3(3k²+2k)+1, reste 1. n = 3k+2 → n² = 3(3k²+4k+1)+1, reste 1. Donc n² laisse 0 ou 1." },
                { type: "line", label: "b)", text: "Si 3 divise n², le reste de n² par 3 est 0, ce qui n'arrive que pour n = 3k. Donc 3 divise n." },
                { type: "note", text: "C'est exactement le raisonnement utilisé pour montrer que √3 est irrationnel (fiche Puissances et réels)." },
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
              text: "Exercice au format des sujets du concours. Traitez-le en conditions réelles avant de regarder le corrigé.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE : calcul numérique et algorithmes",
              objectifTag: "Division euclidienne",
              enonce: "En CM2, une enseignante propose différentes activités autour du calcul.",
              question:
                "Partie A : 1. Calculer A = 5 × (12 − 4²) + 18 ÷ 3 en détaillant.\n2. Un élève écrit « 5 × (12 − 4²) = 5×12 − 5×4² = 60 − 80 = −20 ». Identifier son erreur.\nPartie B : 3. Quotient et reste de 347 ÷ 12, avec la relation.\n4. 347 élèves, équipes de 12 : combien d'équipes complètes, combien d'élèves restants ?\nPartie C : 5. Calculer mentalement 35 × 12.\n6. Un élève annonce 382 × 47 ≈ 20 000. Est-ce plausible ?",
              correction: [
                { type: "line", label: "A1.", text: "A = 5 × (12 − 16) + 18 ÷ 3 = 5 × (−4) + 6 = −20 + 6 = **−14**." },
                { type: "line", label: "A2.", text: "L'élève a calculé 4² = 4 au lieu de 16 ; il a aussi distribué sur une parenthèse qu'il fallait calculer en premier. Le bon résultat de 5 × (12 − 16) est −20." },
                { type: "line", label: "B3.", text: "12 × 28 = 336, reste 11 → 347 = 12 × 28 + 11, avec 0 ≤ 11 < 12." },
                { type: "line", label: "B4.", text: "28 équipes complètes, 11 élèves restants." },
                { type: "line", label: "C5.", text: "35 × 12 = 350 + 70 = 420." },
                { type: "line", label: "C6.", text: "400 × 50 = 20 000 : estimation plausible (exact : 17 954)." },
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
              text: "Ces erreurs types coûtent des points sur des questions pourtant accessibles. Les identifier et les corriger est valorisé au CRPE.",
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 1 : ignorer les priorités",
              objectifTag: "Priorités opératoires",
              enonce: "**Copie type :** « 3 + 4 × 5 = 7 × 5 = 35 ».",
              question: "Identifier l'erreur et donner le calcul correct.",
              correction: [
                { type: "line", text: "La multiplication est prioritaire : 4 × 5 = 20, puis 3 + 20 = **23**." },
                { type: "note", text: "Le calcul de gauche à droite est un automatisme de lecture : la règle des priorités doit devenir un réflexe plus fort." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 2 : reste supérieur au diviseur",
              objectifTag: "Division euclidienne",
              enonce: "**Copie type :** division de 95 par 8 → « 8 × 10 = 80, reste 15, donc q = 10, r = 15 ».",
              question: "Identifier l'erreur et corriger.",
              correction: [
                { type: "line", text: "Reste 15 ≥ 8 : le quotient est trop petit. 8 × 11 = 88, reste 7 → 95 = 8 × 11 + 7, avec 0 ≤ 7 < 8." },
                { type: "note", text: "Réflexe : après chaque division euclidienne, vérifier que le reste est strictement inférieur au diviseur." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 3 : signe oublié dans une expression",
              objectifTag: "Règles des signes",
              enonce: "**Copie type :** « −3 − (−5) + (−2) = −3 − 5 + (−2) = −10 ».",
              question: "Identifier l'erreur et donner le calcul correct.",
              correction: [
                { type: "line", text: "−(−5) = +5, donc −3 + 5 + (−2) = −3 + 5 − 2 = **0**." },
                { type: "note", text: "Réécrire d'abord toutes les soustractions de négatifs en additions, puis calculer." },
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
              text: "Répondez dans votre tête avant de révéler, puis évaluez-vous.",
            },
            {
              type: "flashcardDeck",
              cards: [
                {
                  question: "Quel est l'ordre de priorité des opérations ?",
                  answer:
                    "1. Parenthèses · 2. Puissances et racines · 3. × et ÷ (de gauche à droite) · 4. + et − (de gauche à droite).",
                  astuce: "× et ÷ ont la même priorité (gauche à droite entre elles) ; idem pour + et −.",
                },
                {
                  question: "Quelle est la relation de la division euclidienne ?",
                  answer:
                    "a = b × q + r avec 0 ≤ r < b. Le reste est toujours strictement inférieur au diviseur, ce qui assure l'unicité.",
                  astuce: "Toujours écrire la relation complète dans la copie, pas seulement q et r.",
                },
                {
                  question: "Quel est le signe de (−) × (−) ? Et la règle générale ?",
                  answer:
                    "Positif. Règle : compter les facteurs négatifs, pair → positif, impair → négatif. Exemple : (−2) × (−3) × (−1) = −6.",
                },
                {
                  question: "Comment multiplier mentalement par 25 ? par 5 ?",
                  answer: "× 25 = × 100 ÷ 4 ; × 5 = × 10 ÷ 2. Exemples : 36 × 25 = 900 ; 46 × 5 = 230.",
                },
                {
                  question: "Qu'est-ce que la distributivité ?",
                  answer: "a × (b + c) = a×b + a×c. Utile en calcul mental : 17 × 12 = 170 + 34 = 204.",
                  astuce: "Ne pas confondre avec la puissance : (a + b)² ≠ a² + b².",
                },
                {
                  question: "Comment vérifier un calcul par l'ordre de grandeur ?",
                  answer:
                    "On arrondit chaque facteur à la puissance de 10 la plus proche et on compare. 382 × 47 ≈ 400 × 50 = 20 000 : si le résultat exact en est très éloigné, il y a une erreur.",
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
              type: "callout",
              variant: "info",
              title: "Toute la notion en un coup d'œil",
              text: "La carte mentale de la fiche, pour réviser vite avant le jour J.",
            },
            {
              type: "mindmapLite",
              center: { title: "Calcul numérique", subtitle: "Opérations et priorités" },
              branches: [
                { title: "Priorités opératoires", variant: "blue", lines: ["① parenthèses · ② puissances", "③ × ÷ · ④ + −", "Gauche à droite à rang égal"] },
                { title: "Division euclidienne", variant: "green", lines: ["a = b×q + r", "0 ≤ r < b (à vérifier)", "≠ division décimale"] },
                { title: "Règles des signes", variant: "green", lines: ["(−) × (−) = (+)", "Nb de − : pair → +, impair → −"] },
                { title: "Calcul mental", variant: "yellow", lines: ["Distributivité · compléments", "× 25 = × 100 ÷ 4"] },
                { title: "Ordre de grandeur", variant: "yellow", lines: ["Arrondir, vérifier la cohérence", "382 × 47 ≈ 20 000"] },
                { title: "Recul primaire", variant: "purple", dashed: true, lines: ["Retenue = groupement de 10", "Décalage = valeur positionnelle"] },
              ],
            },
          ],
        },
        {
          id: "autoeval",
          label: "Auto-évaluation",
          icon: "",
          blocks: [
            {
              type: "autoEvalChecklist",
              items: OBJECTIFS,
            },
          ],
        },
      ],
    },
  ],
};
