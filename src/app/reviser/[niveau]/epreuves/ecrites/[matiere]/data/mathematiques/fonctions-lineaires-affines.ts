import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je sais ce qu'est une fonction : à chaque antécédent correspond une seule image" },
  { id: "e2", label: "Je distingue image (on calcule f(x)) et antécédent (on résout f(x) = valeur)" },
  { id: "e3", label: "Je comprends les notations f(x) et x ↦ f(x), et que f(3) n'est pas f × 3" },
  { id: "e4", label: "Je construis un tableau de valeurs et je lis une image ou un antécédent sur un graphique" },
  { id: "e5", label: "Je reconnais une fonction linéaire f(x) = ax (proportionnalité, droite par l'origine)" },
  { id: "e6", label: "Je reconnais une fonction affine f(x) = ax + b et j'identifie a (pente) et b (ordonnée à l'origine)" },
  { id: "e7", label: "Je trace une droite et je lis a et b sur un graphique" },
  { id: "e8", label: "Je trouve le point d'intersection de deux droites en résolvant f(x) = g(x)" },
  { id: "e9", label: "Je relie la fonction linéaire à la proportionnalité et j'explique pourquoi une affine avec b ≠ 0 ne l'est pas" },
];

export const ficheFonctionsLineairesAffines: Fiche = {
  slug: "fonctions-lineaires-affines",
  matiere: "mathematiques",
  numero: 14,
  partie: "Partie 2 : Organisation, données, fonctions",
  title: "Fonctions : notion, linéaires et affines",
  subtitle:
    "Image et antécédent · notations f(x) et x ↦ f(x) · tableau de valeurs · lecture graphique · fonction linéaire f(x) = ax · fonction affine f(x) = ax + b · intersection de droites",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème B", variant: "info" },
  ],
  metaTitle: "Fonctions linéaires et affines (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur les fonctions : notion de fonction, image et antécédent, notations f(x), tableau de valeurs, lecture graphique, fonction linéaire f(x) = ax, fonction affine f(x) = ax + b et intersection de deux droites. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                {
                  number: "①",
                  title: "La notion de fonction",
                  text: "Une machine à transformer : image, antécédent, notations f(x).",
                },
                {
                  number: "②",
                  title: "Tableau et graphique",
                  text: "Du tableau de valeurs à la courbe, et la lecture dans les deux sens.",
                },
                {
                  number: "③",
                  title: "La fonction linéaire",
                  text: "f(x) = ax : la proportionnalité, une droite passant par l'origine.",
                },
                {
                  number: "④",
                  title: "La fonction affine",
                  text: "f(x) = ax + b : pente, ordonnée à l'origine, intersection de droites.",
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
              title: "Une fonction, c'est une machine à transformer des nombres",
              text: "Une machine à café : une capsule (l'entrée) donne un café (la sortie), toujours le même pour la même capsule. Une fonction, c'est pareil : pour chaque valeur d'entrée, elle produit une et une seule valeur de sortie.\n\nVous en manipulez déjà : « prix = 2 × le nombre de kg » est une fonction, « aire = côté² » aussi. Cette fiche apprend à les nommer, les écrire et les lire, puis se concentre sur les deux familles les plus testées au CRPE : les fonctions linéaires et affines, dont les courbes sont des droites.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Qu'est-ce qu'une fonction ? Image et antécédent",
              blocks: [
                {
                  type: "paragraph",
                  text: "Une **fonction f** associe à chaque valeur x (l'entrée) une valeur unique f(x) (la sortie). On écrit **f : x ↦ f(x)** (« f envoie x sur f(x) »). x est la **variable** (ou antécédent), f(x) est l'**image** de x. Ce qui fait une fonction : une seule image par antécédent.",
                },
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "L'image (on calcule)",
                      variant: "info",
                      lines: ["f(x) = 2x + 1 → f(3) = 7.", "7 est l'image de 3.", "« Calculer l'image de 3 » : appliquer la formule."],
                    },
                    {
                      title: "L'antécédent (on résout)",
                      variant: "info",
                      lines: ["3 est un antécédent de 7.", "« Trouver l'antécédent de 7 » : résoudre 2x + 1 = 7.", "On part de la sortie, on cherche l'entrée."],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Image et antécédent : deux opérations inverses",
                  text: "Une image est toujours unique pour un x donné. Un antécédent, lui, peut ne pas exister (x² = −4 impossible) ou être multiple (g(x) = x² : 4 a deux antécédents, 2 et −2). Et f(3) ne signifie pas f × 3 : c'est la valeur de f quand on entre 3.",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Trois notations pour la même idée",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "f(x) = 3x − 2 (la règle de calcul)",
                        "x ↦ 3x − 2 (la transformation)",
                        "f : x ↦ 3x − 2 (notation complète)",
                      ],
                      note: "Toutes décrivent la même fonction. f(x) = … sert à définir la règle, x ↦ … insiste sur la transformation.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Tableau de valeurs et lecture graphique",
              blocks: [
                {
                  type: "paragraph",
                  text: "Pour f(x) = 2x − 1, on choisit des valeurs de x, on remplace, on note le résultat. Chaque paire (x ; f(x)) devient un point de la courbe.",
                },
                {
                  type: "table",
                  headers: ["x", "−2", "0", "1", "3"],
                  rows: [
                    ["f(x) = 2x − 1", "−5", "−1", "1", "5"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "💡 Lire un graphique dans les deux sens",
                  text: "Image de 2 : repérer x = 2 sur l'axe horizontal, monter jusqu'à la courbe, lire la valeur sur l'axe vertical. Antécédent de 5 : repérer y = 5 sur l'axe vertical, aller jusqu'à la courbe, descendre lire x. Si la courbe coupe la ligne horizontale en plusieurs points, il y a plusieurs antécédents.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "La fonction linéaire f(x) = ax",
              blocks: [
                {
                  type: "paragraph",
                  text: "Une **fonction linéaire** est de la forme **f(x) = ax**, où a est le **coefficient directeur**. Sa courbe est une droite qui passe obligatoirement par l'origine (0 ; 0). Elle correspond exactement à une situation de **proportionnalité** : a est le coefficient de proportionnalité.",
                },
                {
                  type: "formulaBlock",
                  lines: [
                    "**f(x) = ax** · f(0) = 0 toujours · droite passant par (0 ; 0)",
                    "Taxi à 2,50 €/km sans frais : f(x) = 2,5x",
                    "f(0) = 0 · f(4) = 10 · f(10) = 25",
                  ],
                  note: "Interprétation de a : quand x augmente de 1, f(x) augmente de a. a > 0 : droite montante ; a < 0 : droite descendante.",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "La fonction affine f(x) = ax + b",
              blocks: [
                {
                  type: "paragraph",
                  text: "Une **fonction affine** est de la forme **f(x) = ax + b**. a est le **coefficient directeur** (la pente, même rôle que pour la linéaire) et b est l'**ordonnée à l'origine** : la valeur de f quand x = 0, là où la droite coupe l'axe vertical.",
                },
                {
                  type: "table",
                  headers: ["", "Linéaire f(x) = ax", "Affine f(x) = ax + b"],
                  rows: [
                    ["f(0)", "0 toujours", "b"],
                    ["Courbe", "droite par (0 ; 0)", "droite coupant l'axe y en (0 ; b)"],
                    ["Proportionnalité ?", "oui (k = a)", "non (sauf si b = 0)"],
                    ["Exemple", "f(x) = 2x", "g(x) = 2x + 3"],
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Lire a et b, tracer, intersecter",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "**Lire b** : la valeur où la droite coupe l'axe vertical. **Lire a** : entre deux points, a = (y₂ − y₁) ÷ (x₂ − x₁). **Tracer** : placer (0 ; b), puis avancer de 1 en x et monter de a en y. **Intersection** de deux droites f et g : résoudre f(x) = g(x), puis calculer y.",
                    },
                    {
                      type: "formulaBlock",
                      lines: [
                        "f(x) = 2x + 1 et g(x) = −x + 7",
                        "2x + 1 = −x + 7 → 3x = 6 → x = 2",
                        "y = f(2) = 5 → intersection (2 ; 5)",
                      ],
                      note: "Si f et g sont deux tarifs, l'intersection donne la valeur de x où les deux coûts sont égaux.",
                    },
                  ],
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : confondre image et antécédent",
              badge: "Très fréquent",
              faux: "« L'antécédent de 3 par f » : on calcule f(3).",
              vrai: "L'image de 3 = f(3). L'antécédent de 3 = la solution de f(x) = 3.",
              methode: "Image : on entre x, on calcule. Antécédent : on cherche ce qui donne la sortie voulue.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : confondre a et b dans f(x) = ax + b",
              badge: "Très fréquent",
              faux: "Dans f(x) = 3x + 5 : a = 5 et b = 3.",
              vrai: "a = 3 (coefficient de x, la pente), b = 5 (terme constant, ordonnée à l'origine).",
              methode: "a est toujours devant le x ; b est le terme seul, sans x.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : croire que f(x) = 2x + 3 est proportionnel",
              badge: "Conceptuel",
              faux: "« La droite monte régulièrement, donc c'est une proportionnalité. »",
              vrai: "f(0) = 3 ≠ 0 : la droite ne passe pas par l'origine, ce n'est pas proportionnel.",
              methode: "Proportionnalité ⟺ fonction linéaire ⟺ droite passant par l'origine (b = 0).",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : calculer a = y₂ ÷ x₂",
              badge: "Fréquent",
              faux: "Points (2 ; 5) et (4 ; 9) : a = 9 ÷ 4 = 2,25.",
              vrai: "a = (9 − 5) ÷ (4 − 2) = 4 ÷ 2 = 2 : a mesure une variation, un rapport d'écarts.",
              methode: "Toujours a = (y₂ − y₁) ÷ (x₂ − x₁), jamais une seule coordonnée.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école : le regard du futur enseignant",
              text: "Au cycle 3, les élèves travaillent des tableaux de valeurs et des graphiques sans le mot « fonction » : ils raisonnent sur « le prix dépend du nombre d'articles », la notion de fonction en acte. Les fonctions linéaires apparaissent sous la forme de tableaux de proportionnalité, sans vocabulaire algébrique : la droite passant par l'origine est le graphique d'une situation proportionnelle.\n\nAu cycle 4, la notion est formalisée (notations f(x), images, antécédents, graphiques), et les fonctions affines arrivent en 3e (identifier a et b, tracer, interpréter, comparer des tarifs par intersection).\n\nCe que le jury attend : faire le lien entre proportionnalité (fiche N°13) et fonction linéaire f(x) = ax, et savoir expliquer pourquoi une fonction affine avec b ≠ 0 ne modélise plus une proportionnalité. C'est une distinction conceptuelle clé pour vos futurs élèves.",
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
              title: "Le réflexe général",
              text: "Identifier ce qu'on cherche (image ou antécédent, a ou b, intersection), choisir la bonne opération (calculer f(x) ou résoudre une équation), tracer avec deux points, vérifier. Chaque savoir-faire ci-dessous se termine par une vérification.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Calculer une image, trouver un antécédent",
              intro:
                "**Question type :** « Soit f(x) = 4x − 3. Calculer f(−2), puis trouver l'antécédent de 9. »",
              steps: [
                {
                  number: "1",
                  text: "**Image : substituer x par la valeur (entre parenthèses).**",
                  example: { lines: ["f(−2) = 4 × (−2) − 3 = −8 − 3 = −11"] },
                },
                {
                  number: "2",
                  text: "**Antécédent : écrire f(x) = valeur, puis résoudre.**",
                  example: { lines: ["4x − 3 = 9 → 4x = 12 → x = 3"] },
                },
                {
                  number: "3",
                  text: "**Vérifier l'antécédent.**",
                  example: { lines: ["f(3) = 4 × 3 − 3 = 9 ✓"] },
                  warn: "⚠️ Mettre la valeur entre parenthèses : (−2)² = +4, pas −4.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Soit f(x) = 3x − 5. Calculer f(2), puis trouver l'antécédent de 7.",
              correction: [
                { type: "line", text: "f(2) = 6 − 5 = **1**. Antécédent de 7 : 3x − 5 = 7 → 3x = 12 → **x = 4**." },
                { type: "note", text: "Image : on calcule. Antécédent : on résout une équation." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Identifier a et b, dire linéaire ou affine",
              intro:
                "**Question type :** « Pour chaque fonction, donner a et b, puis le type. »",
              steps: [
                {
                  number: "1",
                  text: "**Mettre sous la forme ax + b.**",
                  example: { lines: ["f(x) = 4x − 7 → a = 4, b = −7 (affine)", "h(x) = 5 + 2x → a = 2, b = 5 (affine)"] },
                  warn: "⚠️ Dans 5 + 2x, b = 5 et a = 2, pas l'inverse.",
                },
                {
                  number: "2",
                  text: "**Reconnaître la linéaire : b = 0.**",
                  example: { lines: ["g(x) = −3x → a = −3, b = 0 (linéaire)"] },
                },
                {
                  number: "💡",
                  text: "**Vérifier avec f(0) = b.**",
                  example: { lines: ["g(0) = 0 → passe par l'origine → linéaire confirmé"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "La fonction k(x) = x/2 est-elle linéaire ou affine ? Donner a et b.",
              correction: [
                { type: "line", text: "k(x) = 0,5x : a = 0,5, b = 0 → **linéaire** (droite par l'origine)." },
                { type: "note", text: "b = 0 signale une fonction linéaire, donc une proportionnalité." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Tracer une droite affine",
              intro:
                "**Question type :** « Tracer la droite de f(x) = −x + 4. »",
              steps: [
                {
                  number: "1",
                  text: "**Placer le point (0 ; b).**",
                  example: { lines: ["b = 4 → A(0 ; 4)"] },
                },
                {
                  number: "2",
                  text: "**Utiliser la pente pour un second point.**",
                  example: { lines: ["a = −1 : f(1) = 3 → B(1 ; 3)"] },
                },
                {
                  number: "3",
                  text: "**Calculer un troisième point pour vérifier l'alignement.**",
                  example: { lines: ["f(4) = 0 → C(4 ; 0) ; A, B, C alignés ✓"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Pour f(x) = 2x − 3, donner le point d'ordonnée à l'origine et un second point.",
              correction: [
                { type: "line", text: "(0 ; −3) (car b = −3), puis par exemple (3 ; 3) car f(3) = 6 − 3 = 3." },
                { type: "note", text: "Deux points suffisent pour tracer une droite." },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Trouver l'expression à partir de deux points",
              intro:
                "**Question type :** « Une droite passe par (0 ; 2) et (3 ; 8). Trouver son expression. »",
              steps: [
                {
                  number: "1",
                  text: "**Lire b : ordonnée du point où x = 0.**",
                  example: { lines: ["(0 ; 2) → b = 2"] },
                },
                {
                  number: "2",
                  text: "**Calculer a avec les deux points.**",
                  example: { lines: ["a = (8 − 2) ÷ (3 − 0) = 6 ÷ 3 = 2"] },
                },
                {
                  number: "3",
                  text: "**Écrire et vérifier.**",
                  example: { lines: ["f(x) = 2x + 2 ; f(3) = 8 ✓"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Une droite passe par (0 ; −1) et (2 ; 5). Quelle est son expression ?",
              correction: [
                { type: "line", text: "b = −1 ; a = (5 − (−1)) ÷ (2 − 0) = 6 ÷ 2 = 3. Donc **f(x) = 3x − 1**." },
                { type: "note", text: "a est le rapport des écarts (y₂ − y₁) ÷ (x₂ − x₁)." },
              ],
            },
            {
              type: "methodeGroup",
              number: "⑤",
              title: "Trouver l'intersection de deux droites",
              intro:
                "**Question type :** « Taxi A : f(x) = 1,5x + 4. Taxi B : g(x) = 2,5x. À partir de combien de km B devient-il plus cher ? »",
              steps: [
                {
                  number: "1",
                  text: "**Égaliser f(x) = g(x) et résoudre.**",
                  example: { lines: ["1,5x + 4 = 2,5x → 4 = x → x = 4 km"] },
                },
                {
                  number: "2",
                  text: "**Calculer y pour les coordonnées complètes.**",
                  example: { lines: ["y = g(4) = 10 € → intersection (4 ; 10)"] },
                },
                {
                  number: "3",
                  text: "**Interpréter dans le contexte.**",
                  example: { lines: ["En dessous de 4 km : B moins cher", "Au-delà de 4 km : A moins cher"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Trouver l'intersection de f(x) = x + 2 et g(x) = 3x − 4.",
              correction: [
                { type: "line", text: "x + 2 = 3x − 4 → 6 = 2x → x = 3, puis y = 3 + 2 = 5. Intersection **(3 ; 5)**." },
                { type: "note", text: "On résout f(x) = g(x), puis on calcule y." },
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
              text: "9 questions rapides pour vérifier que le Cours et la Méthode sont bien ancrés. Le détail objectif par objectif est dans l'onglet Auto-évaluation.",
            },
            {
              type: "quizBlock",
              questions: [
                {
                  objectifId: "e1",
                  question: "Qu'est-ce qui caractérise une fonction ?",
                  options: ["Chaque antécédent a une seule image", "Chaque image a un seul antécédent", "La courbe est une droite", "f(0) = 0"],
                  correctIndex: 0,
                  explanation: "Une fonction associe à chaque antécédent une image unique. Une image peut, elle, avoir plusieurs antécédents (g(x) = x²).",
                },
                {
                  objectifId: "e2",
                  question: "Soit f(x) = 2x + 1. Quel est l'antécédent de 7 ?",
                  options: ["15", "3", "7", "5"],
                  correctIndex: 1,
                  explanation: "On résout f(x) = 7 : 2x + 1 = 7 → 2x = 6 → x = 3. (15 serait l'image de 7.)",
                },
                {
                  objectifId: "e3",
                  question: "Pour f(x) = 2x + 1, que vaut f(3) ?",
                  options: ["6 (f × 3)", "7", "5", "On ne peut pas savoir"],
                  correctIndex: 1,
                  explanation: "f(3) = 2 × 3 + 1 = 7. f(3) n'est pas f × 3 : c'est la valeur de f quand on entre 3.",
                },
                {
                  objectifId: "e4",
                  question: "Dans un tableau, on lit f(1) = 1 et la paire (3 ; 5). Que peut-on dire de 3 ?",
                  options: ["3 est l'image de 5", "3 est un antécédent de 5", "3 = f(5)", "3 n'a pas de sens"],
                  correctIndex: 1,
                  explanation: "Le point (3 ; 5) signifie f(3) = 5 : 5 est l'image de 3, donc 3 est un antécédent de 5.",
                },
                {
                  objectifId: "e5",
                  question: "Quelle fonction est linéaire ?",
                  options: ["f(x) = 2x + 1", "f(x) = 3x", "f(x) = x² ", "f(x) = 5"],
                  correctIndex: 1,
                  explanation: "f(x) = 3x est de la forme ax (b = 0) : sa droite passe par l'origine, c'est une proportionnalité. 2x + 1 est affine.",
                },
                {
                  objectifId: "e6",
                  question: "Dans f(x) = 3x + 5, que valent a et b ?",
                  options: ["a = 5, b = 3", "a = 3, b = 5", "a = 3, b = 3", "a = 8, b = 0"],
                  correctIndex: 1,
                  explanation: "a = 3 (coefficient de x, la pente), b = 5 (terme constant, ordonnée à l'origine).",
                },
                {
                  objectifId: "e7",
                  question: "Une droite passe par (1 ; 3) et (3 ; 7). Quel est son coefficient directeur ?",
                  options: ["7/3", "2", "4", "3"],
                  correctIndex: 1,
                  explanation: "a = (7 − 3) ÷ (3 − 1) = 4 ÷ 2 = 2. On prend le rapport des écarts, pas une seule coordonnée.",
                },
                {
                  objectifId: "e8",
                  question: "Intersection de f(x) = 2x + 1 et g(x) = −x + 7 ?",
                  options: ["(2 ; 5)", "(3 ; 7)", "(1 ; 3)", "(5 ; 2)"],
                  correctIndex: 0,
                  explanation: "2x + 1 = −x + 7 → 3x = 6 → x = 2, puis y = 5. Intersection (2 ; 5).",
                },
                {
                  objectifId: "e9",
                  question: "Pourquoi f(x) = 2x + 3 n'est-elle pas une situation de proportionnalité ?",
                  options: ["Parce que a = 2", "Parce que f(0) = 3 ≠ 0 : la droite ne passe pas par l'origine", "Parce que la droite descend", "Parce que b = 3 > 0"],
                  correctIndex: 1,
                  explanation: "Une proportionnalité correspond à une fonction linéaire f(x) = ax (b = 0), dont la droite passe par l'origine. Ici b = 3 ≠ 0.",
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
              text: "Identifiez ce qu'on cherche, choisissez l'opération, vérifiez. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Image, antécédent, tableau de valeurs",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : images et antécédents",
              objectifTag: "Image et antécédent",
              enonce: "Soit f(x) = 3x − 5 et g(x) = 2x + 4.",
              question: "a) Calculer f(0), f(2), f(−1).\nb) Trouver l'antécédent de 0 par g.\nc) Trouver l'antécédent de 10 par g.",
              correction: [
                { type: "line", label: "a)", text: "f(0) = −5 ; f(2) = 1 ; f(−1) = −8." },
                { type: "line", label: "b)", text: "2x + 4 = 0 → x = −2 (vérif : g(−2) = 0)." },
                { type: "line", label: "c)", text: "2x + 4 = 10 → 2x = 6 → x = 3 (vérif : g(3) = 10)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : tableau de valeurs",
              objectifTag: "Tableau de valeurs",
              enonce: "Soit h(x) = x² − 3x.",
              question: "a) Compléter le tableau pour x ∈ {−1 ; 0 ; 1 ; 2 ; 3 ; 4}.\nb) Pour quels x du tableau h(x) = 0 ? Que représentent ces x ?",
              correction: [
                { type: "line", label: "a)", text: "h(−1) = 4 ; h(0) = 0 ; h(1) = −2 ; h(2) = −2 ; h(3) = 0 ; h(4) = 4." },
                { type: "line", label: "b)", text: "h(x) = 0 pour x = 0 et x = 3 : ce sont les antécédents de 0 (la courbe coupe l'axe des abscisses)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : linéaire ou affine",
              sub: "Identifier a et b, trouver l'expression",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : identifier et calculer",
              objectifTag: "Linéaire / affine",
              enonce: "Soit f(x) = 3x − 2 et g(x) = −x + 5.",
              question: "a) Donner a, b et le type de chaque fonction.\nb) Calculer f(0), f(2), f(−1).\nc) Pour quels x a-t-on f(x) = 0 ? g(x) = 0 ?",
              correction: [
                { type: "line", label: "a)", text: "f : a = 3, b = −2, affine ; g : a = −1, b = 5, affine." },
                { type: "line", label: "b)", text: "f(0) = −2 ; f(2) = 4 ; f(−1) = −5." },
                { type: "line", label: "c)", text: "f(x) = 0 : x = 2/3 ; g(x) = 0 : x = 5 (intersection avec l'axe des abscisses)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : expression à partir de deux points",
              objectifTag: "Lecture graphique",
              enonce: "Une droite passe par A(0 ; −1) et B(2 ; 5).",
              question: "a) Lire b directement.\nb) Calculer a.\nc) Écrire f(x) et vérifier avec B.",
              correction: [
                { type: "line", label: "a)", text: "A(0 ; −1) → b = −1." },
                { type: "line", label: "b)", text: "a = (5 − (−1)) ÷ (2 − 0) = 6 ÷ 2 = 3." },
                { type: "line", label: "c)", text: "f(x) = 3x − 1 ; f(2) = 5 ✓." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : situations concrètes",
              sub: "Modéliser, comparer, interpréter",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : facture d'un chauffagiste",
              objectifTag: "Fonction affine",
              enonce: "Un chauffagiste facture 50 € de déplacement et 45 € par heure. On note f(x) le coût pour x heures.",
              question: "a) Écrire f(x).\nb) Calculer f(2) et interpréter.\nc) Pour quelle durée la facture est-elle de 230 € ?\nd) f est-elle linéaire ? Pourquoi ?",
              correction: [
                { type: "line", label: "a)", text: "f(x) = 45x + 50." },
                { type: "line", label: "b)", text: "f(2) = 140 € : 2 heures de travail coûtent 140 €." },
                { type: "line", label: "c)", text: "45x + 50 = 230 → 45x = 180 → x = 4 heures." },
                { type: "line", label: "d)", text: "Non : f(0) = 50 ≠ 0, la droite ne passe pas par l'origine. C'est affine." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 4 : comparer deux forfaits",
              objectifTag: "Intersection de droites",
              enonce: "Forfait A : 15 € par mois. Forfait B : 8 € d'abonnement fixe + 10 € par mois. On note x le nombre de mois.",
              question: "a) Modéliser le coût de chaque forfait.\nb) À partir de combien de mois B est-il moins cher ?\nc) Pour 12 mois, quel forfait est le moins cher, et de combien ?",
              correction: [
                { type: "line", label: "a)", text: "A(x) = 15x (linéaire) ; B(x) = 10x + 8 (affine)." },
                { type: "line", label: "b)", text: "15x = 10x + 8 → 5x = 8 → x = 1,6. À partir du 2e mois, B est moins cher." },
                { type: "line", label: "c)", text: "A(12) = 180 € ; B(12) = 128 €. B est moins cher de 52 €." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : raisonnement niveau CRPE",
              sub: "Lien proportionnalité, justification",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 5 : linéaire, affine et proportionnalité",
              objectifTag: "Lien proportionnalité",
              enonce: "On considère f(x) = 2,5x (location de vélo sans frais) et g(x) = 2x + 5 (avec adhésion).",
              question:
                "a) Laquelle modélise une proportionnalité ? Justifier.\nb) Calculer le coût de chacune pour 10 unités.\nc) Trouver le point d'intersection et l'interpréter.",
              correction: [
                { type: "line", label: "a)", text: "f : f(0) = 0, droite par l'origine → proportionnalité (k = 2,5). g : g(0) = 5 ≠ 0 → non proportionnelle." },
                { type: "line", label: "b)", text: "f(10) = 25 € ; g(10) = 25 €." },
                { type: "line", label: "c)", text: "2,5x = 2x + 5 → 0,5x = 5 → x = 10, y = 25. Intersection (10 ; 25) : au-delà de 10 unités, g (avec adhésion) devient plus avantageuse." },
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
              text: "Cet exercice reproduit le format d'un sujet de concours, qui combine fonctions affines, lecture graphique et comparaison de tarifs. Comptez 25 minutes, en conditions réelles.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 6 : sortie scolaire en car",
              objectifTag: "Fonctions affines, intersection, recul",
              enonce:
                "Deux compagnies proposent la location d'un car pour une sortie.\nCompagnie A : 250 € de forfait + 1,20 € par km.\nCompagnie B : 2 € par km, sans forfait.\nOn note x le nombre de kilomètres parcourus.",
              question:
                "1.1 Exprimer le coût a(x) de la compagnie A et b(x) de la compagnie B.\n1.2 Pour chaque compagnie, dire si le coût est proportionnel à la distance. Justifier.\n1.3 Calculer le coût de chaque compagnie pour 200 km.\n2.1 Résoudre a(x) = b(x) et interpréter le résultat.\n2.2 Pour un trajet de 400 km, quelle compagnie choisir ?\n3.1 Comment expliquer à un élève de 3e la différence entre une fonction linéaire et une fonction affine, à partir de cet exemple ?",
              correction: [
                { type: "line", label: "1.1", text: "a(x) = 1,20x + 250 ; b(x) = 2x." },
                { type: "line", label: "1.2", text: "A : a(0) = 250 ≠ 0 → non proportionnel (affine). B : b(0) = 0, droite par l'origine → proportionnel (linéaire, k = 2)." },
                { type: "line", label: "1.3", text: "a(200) = 240 + 250 = 490 € ; b(200) = 400 €." },
                { type: "line", label: "2.1", text: "1,20x + 250 = 2x → 250 = 0,8x → x = 312,5 km. À cette distance, les deux coûtent autant (625 €)." },
                { type: "line", label: "2.2", text: "400 > 312,5 → la compagnie A est moins chère (a(400) = 730 € contre b(400) = 800 €)." },
                { type: "line", label: "3.1", text: "B est linéaire : sans forfait, le coût est proportionnel aux km (droite partant de 0). A est affine : le forfait de 250 € est un point de départ (b = 250), donc la droite ne part pas de 0 et le coût n'est plus proportionnel." },
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
              text: "Ces erreurs reproduisent des fautes réelles de candidats. Identifier une erreur et la corriger rigoureusement est une compétence directement valorisée au CRPE.",
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 7 : image au lieu d'antécédent",
              objectifTag: "Image et antécédent",
              enonce: "**Copie d'un candidat :** soit f(x) = 2x + 1. « Trouver l'antécédent de 9. »\n*Réponse produite :* « f(9) = 2 × 9 + 1 = 19 ».",
              question: "a) Identifier l'erreur.\nb) Donner la réponse correcte.",
              correction: [
                { type: "paragraph", text: "**Erreur : le candidat a calculé une image au lieu de chercher un antécédent.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "f(9) = 19 est l'image de 9, pas l'antécédent de 9." },
                    { text: "Chercher l'antécédent de 9 : résoudre f(x) = 9, soit 2x + 1 = 9." },
                    { text: "2x = 8 → x = 4. L'antécédent de 9 est 4 (vérif : f(4) = 9)." },
                  ],
                },
                { type: "note", text: "Antécédent : on part de la sortie, on résout une équation." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 8 : a et b inversés",
              objectifTag: "Fonction affine",
              enonce: "**Copie d'un candidat :** « Dans f(x) = 3x + 5, le coefficient directeur est 5 et l'ordonnée à l'origine est 3. »",
              question: "a) Identifier l'erreur.\nb) Donner les bonnes valeurs.",
              correction: [
                { type: "paragraph", text: "**Erreur : a et b inversés.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Le candidat a pris le terme constant comme pente." },
                    { text: "a = 3 (coefficient de x, la pente) ; b = 5 (terme constant, ordonnée à l'origine)." },
                    { text: "Vérification : f(0) = 5 = b, et la droite coupe l'axe y en (0 ; 5)." },
                  ],
                },
                { type: "note", text: "a est toujours devant le x ; b est le terme seul." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 9 : proportionnalité supposée à tort",
              objectifTag: "Lien proportionnalité",
              enonce: "**Copie d'un candidat :** « f(x) = 2x + 3 modélise une proportionnalité car la droite monte régulièrement. »",
              question: "a) Identifier l'erreur.\nb) Donner la justification correcte.",
              correction: [
                { type: "paragraph", text: "**Erreur : confusion entre régularité de la pente et proportionnalité.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Une droite régulière n'est pas forcément une proportionnalité." },
                    { text: "Proportionnalité ⟺ fonction linéaire f(x) = ax ⟺ droite passant par l'origine (b = 0)." },
                    { text: "Ici f(0) = 3 ≠ 0 : la droite ne passe pas par l'origine, ce n'est pas proportionnel." },
                  ],
                },
                { type: "note", text: "Le test : f(0) = 0 ? Si oui, linéaire et proportionnel ; sinon, affine." },
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
              text: "Essayez de répondre dans votre tête avant de révéler la réponse, puis évaluez-vous. Formulées comme des questions de jury d'oral.",
            },
            {
              type: "flashcardDeck",
              cards: [
                {
                  question: "Qu'est-ce qu'une fonction ?",
                  answer:
                    "Une relation qui associe à chaque antécédent x une image unique f(x). La condition : une seule image par antécédent. On note f : x ↦ f(x).",
                },
                {
                  question: "Différence entre image et antécédent ?",
                  answer:
                    "L'image de x est f(x), qu'on calcule. L'antécédent d'une valeur k est le x tel que f(x) = k, qu'on trouve en résolvant l'équation. Une image est unique ; un antécédent peut ne pas exister ou être multiple.",
                  astuce: "Image : on entre x. Antécédent : on cherche ce qui donne la sortie.",
                },
                {
                  question: "Que signifie f(3) ?",
                  answer:
                    "La valeur que prend la fonction f quand on entre 3, pas f × 3. Si f(x) = 2x + 1, alors f(3) = 2 × 3 + 1 = 7.",
                },
                {
                  question: "Qu'est-ce qu'une fonction linéaire ?",
                  answer:
                    "Une fonction de la forme f(x) = ax. Sa courbe est une droite passant par l'origine (0 ; 0). Elle correspond à une proportionnalité : a est le coefficient de proportionnalité.",
                },
                {
                  question: "Qu'est-ce qu'une fonction affine ? Rôles de a et b ?",
                  answer:
                    "Une fonction f(x) = ax + b. a est le coefficient directeur (la pente), b est l'ordonnée à l'origine (f(0) = b, point où la droite coupe l'axe vertical).",
                  astuce: "a est devant le x, b est le terme seul.",
                },
                {
                  question: "Comment lire a et b sur un graphique ?",
                  answer:
                    "b : ordonnée du point où la droite coupe l'axe vertical. a : entre deux points, a = (y₂ − y₁) ÷ (x₂ − x₁). a mesure une variation, pas une coordonnée.",
                },
                {
                  question: "Comment tracer une droite affine ?",
                  answer:
                    "Placer le point (0 ; b), puis utiliser la pente : avancer de 1 en x et monter de a en y pour un second point. Deux points suffisent ; un troisième sert à vérifier l'alignement.",
                },
                {
                  question: "Comment trouver l'intersection de deux droites ?",
                  answer:
                    "Résoudre f(x) = g(x) pour trouver x, puis calculer y. Exemple : 2x + 1 = −x + 7 → x = 2, y = 5, intersection (2 ; 5). Pour deux tarifs, c'est le point d'égalité des coûts.",
                },
                {
                  question: "Pourquoi une fonction affine avec b ≠ 0 n'est-elle pas proportionnelle ?",
                  answer:
                    "Parce que sa droite ne passe pas par l'origine : f(0) = b ≠ 0. Or une proportionnalité (fonction linéaire) impose f(0) = 0. Le terme constant b casse la proportionnalité.",
                },
                {
                  question: "Quel lien entre proportionnalité et fonction linéaire ?",
                  answer:
                    "Ce sont deux façons de dire la même chose : f(x) = ax est la traduction algébrique d'une situation proportionnelle, où a est le coefficient de proportionnalité (et le coefficient directeur de la droite).",
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
              text: "La carte mentale de la fiche : un outil pour réviser rapidement avant le jour J, une fois chaque partie travaillée.",
            },
            {
              type: "mindmapLite",
              center: { title: "Fonctions", subtitle: "linéaires et affines" },
              branches: [
                {
                  title: "Notion de fonction",
                  variant: "blue",
                  lines: ["Une seule image par antécédent", "Image : calculer f(x)", "Antécédent : résoudre f(x) = k"],
                },
                {
                  title: "Notations et graphique",
                  variant: "blue",
                  lines: ["f(x), x ↦ f(x)", "Tableau de valeurs → points", "Lecture dans les deux sens"],
                },
                {
                  title: "Fonction linéaire",
                  variant: "green",
                  lines: ["f(x) = ax", "Droite par l'origine", "= proportionnalité"],
                },
                {
                  title: "Fonction affine",
                  variant: "green",
                  lines: ["f(x) = ax + b", "a = pente, b = ordonnée à l'origine", "f(0) = b"],
                },
                {
                  title: "Lire et tracer",
                  variant: "yellow",
                  lines: ["b : coupe l'axe y", "a = (y₂ − y₁) ÷ (x₂ − x₁)", "Tracer avec 2 points"],
                },
                {
                  title: "Intersection",
                  variant: "purple",
                  dashed: true,
                  lines: ["Résoudre f(x) = g(x)", "Comparer deux tarifs"],
                },
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
