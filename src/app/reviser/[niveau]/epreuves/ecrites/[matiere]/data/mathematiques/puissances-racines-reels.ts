import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je connais les 5 règles des puissances et je les applique sans erreur" },
  { id: "e2", label: "Je connais les carrés parfaits de 1² à 12² dans les deux sens" },
  { id: "e3", label: "Je sais simplifier une racine carrée (par exemple √72 = 6√2)" },
  { id: "e4", label: "Je sais encadrer un irrationnel à une précision donnée, avec vérification par le carré" },
  { id: "e5", label: "Je sais expliquer pourquoi √2 est irrationnel et ce que cela implique concrètement" },
  { id: "e6", label: "Je connais le schéma ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ et je sais classer un nombre, rationnel ou irrationnel" },
  { id: "e7", label: "Je connais les erreurs types (distribuer une puissance, additionner des racines, √(a²) = |a|)" },
  { id: "e8", label: "Je sais relier les puissances de 10 à la numération décimale (recul primaire)" },
];

export const fichePuissancesRacinesReels: Fiche = {
  slug: "puissances-racines-reels",
  matiere: "mathematiques",
  numero: 4,
  partie: "Partie 1 : Nombres et calcul",
  title: "Puissances, racines et réels",
  subtitle:
    "Puissances entières positives et négatives · règles de calcul · racines carrées · √2 irrationnel · ensemble ℝ · encadrements décimaux",
  badges: [
    { label: "★★ Très fréquent", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème A", variant: "info" },
  ],
  metaTitle: "Puissances, racines carrées et réels ℝ (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur les puissances, les racines carrées et les réels : les 5 règles des puissances, carrés parfaits, simplification de racines, irrationalité de √2, ensemble ℝ, encadrements décimaux. Cours, méthode, exercices corrigés, flashcards et auto-évaluation.",
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
                { number: "①", title: "L'ensemble ℝ", text: "Rationnels et irrationnels : la dernière frontière des nombres." },
                { number: "②", title: "Les racines carrées", text: "Définition, propriétés et simplification." },
                { number: "③", title: "Carrés parfaits", text: "Les 12 carrés à connaître par cœur pour aller vite." },
                { number: "④", title: "√2 est irrationnel", text: "Ce que cela signifie et ce que le jury attend." },
                { number: "⑤", title: "Puissances et encadrements", text: "Les 5 règles des puissances et comment situer un irrationnel." },
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
              text: "Vous connaissez ℕ, ℤ et ℚ. Cette fiche franchit la dernière frontière : ℝ, les réels. ℝ contient ℚ, mais aussi tous les nombres qu'aucune fraction ne peut exprimer exactement (√2, π, √3…). Ces nombres irrationnels existent bien sur la droite graduée, mais leur écriture décimale est infinie et ne se répète jamais.",
            },
            {
              type: "subsection",
              number: "①",
              title: "L'ensemble ℝ : rationnels et irrationnels",
              blocks: [
                {
                  type: "paragraph",
                  text: "**ℝ = ℚ ∪ (irrationnels)** : tout réel est soit rationnel (fraction, décimal fini ou périodique), soit irrationnel (développement décimal infini et non périodique).",
                },
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    { title: "Irrationnels algébriques", variant: "info", lines: ["Racines qui ne tombent pas sur un entier.", "√2 · √3 · √5 · ∛2"] },
                    { title: "Irrationnels transcendants", variant: "info", lines: ["π ≈ 3,14159…", "e ≈ 2,71828…"] },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Racines carrées : définition, propriétés, simplification",
              blocks: [
                {
                  type: "paragraph",
                  text: "La racine carrée répond à une question simple : quel nombre, multiplié par lui-même, donne a ? Si l'aire d'un carré est 9 cm², son côté mesure √9 = 3 cm. Si l'aire est 2 cm², le côté mesure √2 cm, une longueur bien réelle mais impossible à écrire exactement avec notre numération.",
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Définition",
                  text: "**√a est l'unique réel positif dont le carré vaut a.** On convient que la racine désigne toujours le résultat positif : √9 = 3, pas −3, même si (−3)² = 9. On a donc **(√a)² = a** et **√(a²) = |a|**.",
                },
                {
                  type: "table",
                  title: "Propriétés des racines carrées",
                  headers: ["Règle", "Formule", "Exemple"],
                  rows: [
                    ["Produit", "√(a×b) = √a × √b", "√12 = √(4×3) = 2√3"],
                    ["Quotient", "√(a/b) = √a / √b", "√(9/4) = 3/2"],
                    ["Carré d'une racine", "(√a)² = a", "(√5)² = 5"],
                    ["⚠️ Addition", "√(a+b) ≠ √a + √b", "√(9+16) = 5 ≠ 3+4"],
                  ],
                },
                {
                  type: "formulaBlock",
                  title: "Simplifier √n : chercher le plus grand carré parfait diviseur",
                  lines: ["√48 = √(16 × 3) = 4√3", "√75 = √(25 × 3) = 5√3", "√200 = √(100 × 2) = 10√2"],
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Carrés parfaits : à connaître absolument",
              blocks: [
                {
                  type: "paragraph",
                  text: "Un **carré parfait** est un entier qui est le carré d'un autre entier : sa racine tombe juste. Les reconnaître permet de simplifier les racines immédiatement (48 = 16 × 3 → √48 = 4√3).",
                },
                {
                  type: "table",
                  headers: ["n", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  rows: [["n²", "1", "4", "9", "16", "25", "36", "49", "64", "81", "100", "121", "144"]],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Ces 12 carrés se savent dans les deux sens : 7² = 49 et √49 = 7. Les retrouver instantanément est indispensable.",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "√2 est irrationnel",
              blocks: [
                {
                  type: "paragraph",
                  text: "√2 ne peut s'écrire ni sous forme de fraction, ni avec un développement décimal fini ou périodique. Sa valeur approchée est 1,41421356…, mais ces décimales ne s'arrêtent jamais et ne se répètent jamais. Ce n'est pas un défaut de la calculatrice : c'est la nature du nombre.",
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Toutes les racines ne sont pas irrationnelles",
                  text: "**√n est irrationnel dès que n n'est pas un carré parfait.** Si n est un carré parfait, √n est un entier (√9 = 3). Entre 1 et 100, seuls 10 nombres sont des carrés parfaits : les 90 autres ont une racine irrationnelle.",
                },
                {
                  type: "primaireBox",
                  title: "Ce que le jury attend",
                  text: "Savoir que √2 ∈ ℝ et √2 ∉ ℚ, et l'expliquer simplement : « √2 est irrationnel, on ne peut pas l'écrire exactement sous forme de fraction ni de décimale, la calculatrice en donne une valeur approchée. » Concrètement : quand un élève calcule la diagonale d'un carré de côté 1 cm avec Pythagore, il obtient √2 cm ; il faut pouvoir lui expliquer que 1,414… est une approximation et que la valeur exacte s'écrit √2.",
                },
              ],
            },
            {
              type: "subsection",
              number: "⑤",
              title: "Puissances : définition et 5 règles",
              blocks: [
                {
                  type: "paragraph",
                  text: "Pour tout réel a et tout entier n ≥ 1 : **aⁿ = a × a × … × a** (n fois). Avec les conventions **a⁰ = 1** (pour a ≠ 0) et **a⁻ⁿ = 1/aⁿ**.",
                },
                {
                  type: "table",
                  title: "Les 5 règles fondamentales",
                  headers: ["Règle", "Formule", "Exemple"],
                  rows: [
                    ["Produit, même base", "aᵐ × aⁿ = aᵐ⁺ⁿ", "10³ × 10⁴ = 10⁷"],
                    ["Quotient, même base", "aᵐ ÷ aⁿ = aᵐ⁻ⁿ", "2⁵ ÷ 2² = 2³ = 8"],
                    ["Puissance de puissance", "(aᵐ)ⁿ = aᵐˣⁿ", "(3²)⁴ = 3⁸"],
                    ["Produit, même exposant", "aⁿ × bⁿ = (a×b)ⁿ", "3² × 5² = 15²"],
                    ["Exposant nul ou négatif", "a⁰ = 1 · a⁻ⁿ = 1/aⁿ", "5⁰ = 1 · 2⁻³ = 1/8"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Trois pièges classiques",
                  text: "aᵐ × bⁿ ne fusionne pas si les bases diffèrent · (a + b)² ≠ a² + b² (la puissance ne se distribue pas sur l'addition) · 2³ × 3² ≠ 6⁵, mais = 8 × 9 = 72.",
                },
              ],
            },
            {
              type: "subsection",
              number: "⑥",
              title: "Encadrer un irrationnel",
              blocks: [
                {
                  type: "paragraph",
                  text: "On ne peut pas écrire √2 exactement, mais on peut le situer entre deux décimaux aussi proches qu'on veut : c'est un **encadrement**, qui se prouve toujours par le calcul des carrés.",
                },
                {
                  type: "formulaBlock",
                  lines: ["1,41² = 1,9881 < 2 et 1,42² = 2,0164 > 2", "Donc 1,41 < √2 < 1,42 (encadrement à 0,01 près)"],
                  note: "Valeur approchée par défaut : 1,41 ; par excès : 1,42 ; arrondi à 0,01 : 1,41.",
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Valeur absolue et intervalles s'articulent avec les inéquations : ils sont traités dans la fiche Équations, inéquations et systèmes.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : distribuer une puissance sur une addition",
              badge: "Erreur la plus coûteuse",
              faux: "(3 + 4)² = 3² + 4² = 25.",
              vrai: "(3 + 4)² = 7² = **49**. On développe : (a + b)² = a² + 2ab + b².",
              methode: "Les puissances se distribuent sur la multiplication, jamais sur l'addition.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : additionner les racines",
              badge: "Très fréquent",
              faux: "√9 + √16 = √(9+16) = √25 = 5.",
              vrai: "√9 + √16 = 3 + 4 = **7**. La racine d'une somme n'est pas la somme des racines.",
              methode: "√(a+b) ≠ √a + √b, mais √(a×b) = √a × √b.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : confondre √(a²) et (√a)²",
              badge: "Subtil et discriminant",
              faux: "√((−3)²) = −3.",
              vrai: "√((−3)²) = √9 = **3**. La racine carrée donne toujours un résultat positif : √(a²) = |a|.",
              methode: "Par définition, √ désigne la racine positive : √4 = 2 uniquement.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : croire que aᵐ × bⁿ = (ab)ᵐ⁺ⁿ",
              badge: "Règle invalide",
              faux: "2³ × 3² = 6⁵.",
              vrai: "2³ × 3² = 8 × 9 = **72**. On ne regroupe que si les exposants sont identiques : 2³ × 5³ = 10³.",
              methode: "Bases différentes et exposants différents : on calcule séparément.",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°5 : un encadrement sans vérification",
              badge: "Perte de point fréquente",
              faux: "« √3 ≈ 1,7 à 0,1 près » sans calcul.",
              vrai: "Vérifier : 1,7² = 2,89 < 3 et 1,8² = 3,24 > 3 → **1,7 < √3 < 1,8**.",
              methode: "Un encadrement se prouve : les deux calculs de carré doivent figurer dans la copie.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "Les puissances et les racines ne sont pas au programme du primaire, mais leur logique est partout.\n\n**Puissances de 10 (cycles 2-3) :** quand un élève comprend que 1 centaine = 100 unités, il manipule 10² = 100. La forme développée 4 000 + 300 + 20 + 5 = 4×10³ + 3×10² + 2×10 + 5 est une décomposition en puissances de 10.\n\n**Le carré en géométrie (cycle 3) :** l'aire d'un carré de côté 5 cm est 5² = 25 cm².\n\n**Pourquoi √2 pour un futur PE :** √2 apparaît dès qu'on calcule la diagonale d'un carré (Pythagore). Savoir qu'il est irrationnel permet d'expliquer pourquoi la calculatrice n'en donne qu'une approximation. C'est le recul que le jury valorise.",
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
              title: "Trois savoir-faire exigibles au concours",
              text: "Calculer avec des puissances, simplifier une racine, encadrer un irrationnel. Ils apparaissent souvent dans des « vrai/faux à justifier » : il faut savoir justifier vite.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Calculer avec des puissances",
              intro: "**Question typique :** « Simplifier (2³ × 2⁻¹ × 4²) / 2⁵ ».",
              steps: [
                {
                  number: "1",
                  text: "**Tout ramener à la même base** (ici, en base 2).",
                  example: { lines: ["4² = (2²)² = 2⁴"] },
                },
                {
                  number: "2",
                  text: "**Numérateur, même base : additionner les exposants.**",
                  example: { lines: ["2³ × 2⁻¹ × 2⁴ = 2^(3 − 1 + 4) = 2⁶"] },
                },
                {
                  number: "3",
                  text: "**Division, même base : soustraire les exposants.**",
                  example: { lines: ["2⁶ / 2⁵ = 2¹ = **2**"] },
                  warn: "⚠️ Vérifier numériquement : (8 × 0,5 × 16) / 32 = 64 / 32 = 2 ✓",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Simplifier (3⁵ × 3²) / 3⁴.",
              correction: [
                { type: "line", text: "Même base : 3^(5+2) / 3⁴ = 3⁷ / 3⁴ = 3³ = **27**." },
                { type: "note", text: "Produit → on additionne les exposants ; quotient → on les soustrait." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Simplifier √n : extraire les carrés parfaits",
              intro: "**Question typique :** « Simplifier √72 ».",
              steps: [
                {
                  number: "1",
                  text: "**Décomposer n en produit avec le plus grand carré parfait diviseur.**",
                  example: { lines: ["72 = 36 × 2 (36 = 6²)"] },
                  exampleNote: "Pour le trouver : factoriser. 72 = 2³ × 3² → on regroupe par paires : (2×3)² × 2 = 36 × 2.",
                },
                {
                  number: "2",
                  text: "**Appliquer √(a×b) = √a × √b.**",
                  example: { lines: ["√72 = √36 × √2 = 6√2"] },
                },
                {
                  number: "3",
                  text: "**Vérifier qu'on ne peut plus simplifier.**",
                  example: { lines: ["2 n'est pas un carré parfait → **6√2** est la forme simplifiée"] },
                  warn: "⚠️ Vérification : 6√2 ≈ 8,485 et √72 ≈ 8,485 ✓",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Simplifier √50.",
              correction: [
                { type: "line", text: "50 = 25 × 2 → √50 = 5√2." },
                { type: "note", text: "25 est le plus grand carré parfait qui divise 50." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Encadrer un irrationnel à une précision donnée",
              intro: "**Question typique :** « Donner un encadrement de √7 à 0,1 près ».",
              steps: [
                {
                  number: "1",
                  text: "**Trouver les entiers qui encadrent la racine** (sans calculatrice).",
                  example: { lines: ["2² = 4 < 7 < 9 = 3² → 2 < √7 < 3"] },
                },
                {
                  number: "2",
                  text: "**Affiner à 0,1 en testant des décimaux.**",
                  example: { lines: ["2,6² = 6,76 < 7 et 2,7² = 7,29 > 7", "→ 2,6 < √7 < 2,7"] },
                },
                {
                  number: "3",
                  text: "**Donner valeur approchée et arrondi.**",
                  example: { lines: ["Arrondi à 0,1 : 2,6 (car √7 ≈ 2,646 < 2,65)"] },
                  warn: "⚠️ Un encadrement n'est validé qu'après vérification par le carré : écrire les deux calculs.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Entre quels entiers consécutifs se trouve √20 ?",
              correction: [
                { type: "line", text: "4² = 16 < 20 < 25 = 5² → **4 < √20 < 5**." },
                { type: "note", text: "On encadre d'abord par des entiers (carrés parfaits voisins) avant d'affiner." },
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
                  question: "Combien vaut 3² × 3⁵ ?",
                  options: ["3¹⁰", "3⁷", "9⁷", "6⁷"],
                  correctIndex: 1,
                  explanation: "Même base : on additionne les exposants. 3² × 3⁵ = 3^(2+5) = 3⁷.",
                },
                {
                  objectifId: "e1",
                  question: "Combien vaut 2⁻³ ?",
                  options: ["−8", "−6", "1/8", "1/6"],
                  correctIndex: 2,
                  explanation: "Un exposant négatif donne l'inverse : 2⁻³ = 1/2³ = 1/8 = 0,125.",
                },
                {
                  objectifId: "e2",
                  question: "Combien vaut √144 ?",
                  options: ["11", "12", "14", "72"],
                  correctIndex: 1,
                  explanation: "144 = 12², donc √144 = 12 (carré parfait à connaître).",
                },
                {
                  objectifId: "e3",
                  question: "Quelle est la forme simplifiée de √72 ?",
                  options: ["8√2", "6√2", "2√18", "36√2"],
                  correctIndex: 1,
                  explanation: "72 = 36 × 2 et 36 = 6², donc √72 = 6√2.",
                },
                {
                  objectifId: "e7",
                  question: "Combien vaut (3 + 4)² ?",
                  options: ["25", "49", "12", "7"],
                  correctIndex: 1,
                  explanation: "(3 + 4)² = 7² = 49. On ne distribue pas le carré : 3² + 4² = 25 est faux.",
                },
                {
                  objectifId: "e6",
                  question: "À quel ensemble appartient √9 ?",
                  options: ["Aux irrationnels (ℝ∖ℚ)", "À ℕ", "À aucun", "Seulement à ℝ"],
                  correctIndex: 1,
                  explanation: "√9 = 3, un entier naturel. 9 est un carré parfait, donc sa racine est rationnelle (et même entière).",
                },
                {
                  objectifId: "e5",
                  question: "√2 est-il rationnel ?",
                  options: ["Oui, c'est une fraction", "Non, il est irrationnel", "Oui, il vaut 1,414", "Cela dépend de la calculatrice"],
                  correctIndex: 1,
                  explanation: "√2 est irrationnel : il ne s'écrit sous aucune forme a/b, et son développement décimal est infini non périodique. 1,414… n'est qu'une approximation.",
                },
                {
                  objectifId: "e4",
                  question: "Entre quels entiers consécutifs se situe √7 ?",
                  options: ["1 et 2", "2 et 3", "3 et 4", "6 et 8"],
                  correctIndex: 1,
                  explanation: "2² = 4 < 7 < 9 = 3², donc 2 < √7 < 3.",
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
              label: "Échauffement : Mémo et carrés parfaits",
              sub: "Réflexes à acquérir",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : carrés parfaits et racines directes",
              objectifTag: "Carrés parfaits",
              question:
                "a) Calculer sans calculatrice : √25 · √144 · √1 · √0\nb) Encadrer √50 entre deux entiers consécutifs.\nc) Vrai ou faux : « √16 = ±4 » ?",
              correction: [
                { type: "line", label: "a)", text: "√25 = 5 · √144 = 12 · √1 = 1 · √0 = 0" },
                { type: "line", label: "b)", text: "7² = 49 < 50 < 64 = 8² → 7 < √50 < 8" },
                { type: "line", label: "c)", text: "Faux : √16 = 4 uniquement (racine positive). Les solutions de x² = 16 sont 4 et −4, mais √16 = 4." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : règles des puissances",
              objectifTag: "Règles des puissances",
              question: "Calculer : a) 3² × 3³   b) 5⁴ ÷ 5²   c) (2³)²   d) 4⁰   e) 2⁻³",
              correction: [
                { type: "line", label: "a)", text: "3²⁺³ = 3⁵ = 243" },
                { type: "line", label: "b)", text: "5⁴⁻² = 5² = 25" },
                { type: "line", label: "c)", text: "2^(3×2) = 2⁶ = 64" },
                { type: "line", label: "d)", text: "4⁰ = 1" },
                { type: "line", label: "e)", text: "2⁻³ = 1/2³ = 1/8 = 0,125" },
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
              title: "Exercice 1 : simplifier puissances et racines",
              objectifTag: "Simplifier une racine",
              question: "a) (3² × 3⁵) / 3⁴   b) √32   c) √(3/4) × √12   d) (√5 − √5) + (√3)²   e) 2⁻² × 4³",
              correction: [
                { type: "line", label: "a)", text: "3⁷ / 3⁴ = 3³ = 27" },
                { type: "line", label: "b)", text: "√32 = √(16×2) = 4√2" },
                { type: "line", label: "c)", text: "√(3/4 × 12) = √9 = 3" },
                { type: "line", label: "d)", text: "0 + 3 = 3" },
                { type: "line", label: "e)", text: "2⁻² × (2²)³ = 2⁻² × 2⁶ = 2⁴ = 16" },
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
              title: "Exercice 2 : encadrements et précision",
              objectifTag: "Encadrer un irrationnel",
              question:
                "a) Encadrer √5 à 0,1 près et donner l'arrondi au dixième.\nb) La diagonale d'un carré de côté 3 cm vaut 3√2 : l'encadrer à 0,01 cm près.\nc) Simplifier a = √3 + √12. Est-ce un irrationnel ?",
              correction: [
                { type: "line", label: "a)", text: "2,2² = 4,84 < 5 et 2,3² = 5,29 > 5 → 2,2 < √5 < 2,3. Arrondi : 2,2." },
                { type: "line", label: "b)", text: "1,41 < √2 < 1,42 → 4,23 < 3√2 < 4,26 cm." },
                { type: "line", label: "c)", text: "√12 = 2√3, donc a = √3 + 2√3 = 3√3, irrationnel (rationnel non nul × irrationnel)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : vrai ou faux justifiés",
              objectifTag: "Classer un nombre",
              question: "Vrai ou faux, en justifiant :\nA. √(4 + 9) = √4 + √9\nB. (√7)² = 7\nC. Tout irrationnel est un réel.\nD. 2⁻³ > 2⁻⁵",
              correction: [
                { type: "line", label: "A", text: "**Faux** : √13 ≈ 3,6, alors que √4 + √9 = 5. √(a+b) ≠ √a + √b." },
                { type: "line", label: "B", text: "**Vrai** : (√a)² = a pour a ≥ 0." },
                { type: "line", label: "C", text: "**Vrai** : ℝ = ℚ ∪ (irrationnels), tout irrationnel est dans ℝ." },
                { type: "line", label: "D", text: "**Vrai** : 2⁻³ = 1/8 et 2⁻⁵ = 1/32, or 1/8 > 1/32." },
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
              title: "Exercice 4 : irrationalité et raisonnement par l'absurde",
              badge: "Pour aller plus loin",
              objectifTag: "Expliquer l'irrationalité de √2",
              enonce: "Cet exercice mobilise le raisonnement par l'absurde. Il n'est pas indispensable, mais distingue les meilleures copies.",
              question:
                "a) Montrer que √3 est irrationnel.\nb) Sachant que √2 est irrationnel, montrer que 1 + √2 l'est aussi.\nc) √2 × √8 est-il irrationnel ?",
              correction: [
                { type: "line", label: "a)", text: "Supposons √3 = p/q irréductible. Alors p² = 3q², donc 3 | p², donc 3 | p. En posant p = 3k : q² = 3k², donc 3 | q. Contradiction avec PGCD(p, q) = 1." },
                { type: "line", label: "b)", text: "Si 1 + √2 = p/q rationnel, alors √2 = p/q − 1 serait rationnel : contradiction. Donc 1 + √2 est irrationnel." },
                { type: "line", label: "c)", text: "√2 × √8 = √16 = 4, un entier (donc rationnel). Le produit de deux irrationnels peut être rationnel : un contre-exemple que le jury valorise." },
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
              title: "Type CRPE : ensembles de nombres et irrationnels",
              objectifTag: "Classer un nombre",
              enonce: "En fin de troisième, un enseignant fait classer des nombres et étudier leurs propriétés.",
              question:
                "Partie A : 1. Classer −5 · 3/7 · √9 · √2 · 0,333… · π · −2/1 dans ℕ, ℤ, ℚ ou ℝ∖ℚ.\n2. Justifier que 0,333… = 1/3 est rationnel.\n3. Un élève dit : « π ≈ 3,14 donc π = 314/100 est rationnel. » Expliquer l'erreur.\nPartie B : 4. Simplifier √50 + √8 − √18 et montrer que le résultat est irrationnel.\n5. Encadrer √10 au dixième et donner l'arrondi.\n6. Simplifier (2³ × 10²) / (4 × 10⁻¹) et l'écrire en notation scientifique.\nPartie C : 7. Pourquoi est-il pédagogiquement pertinent de montrer que √2 ne s'écrit pas exactement en décimales ?",
              correction: [
                { type: "line", label: "A1.", text: "−5 ∈ ℤ · 3/7 ∈ ℚ · √9 = 3 ∈ ℕ · √2 ∈ ℝ∖ℚ · 0,333… = 1/3 ∈ ℚ · π ∈ ℝ∖ℚ · −2/1 = −2 ∈ ℤ" },
                { type: "line", label: "A2.", text: "x = 0,333… → 10x = 3,333… → 9x = 3 → x = 1/3, rationnel." },
                { type: "line", label: "A3.", text: "3,14 est une valeur approchée de π, pas sa valeur exacte. π est le rapport exact circonférence / diamètre, qui n'est pas une fraction : 3,14 et π diffèrent dès le millième." },
                { type: "line", label: "B4.", text: "√50 = 5√2, √8 = 2√2, √18 = 3√2 → 5√2 + 2√2 − 3√2 = 4√2, irrationnel." },
                { type: "line", label: "B5.", text: "3,1² = 9,61 < 10 et 3,2² = 10,24 > 10 → 3,1 < √10 < 3,2. Arrondi : 3,2." },
                { type: "line", label: "B6.", text: "(8 × 100) / (4 × 0,1) = 800 / 0,4 = 2000 = 2 × 10³." },
                { type: "line", label: "C7.", text: "Cela fait comprendre la limite de toute écriture décimale : la calculatrice donne une approximation, jamais la valeur exacte. L'élève apprend à distinguer valeur exacte et valeur approchée, compétence clé en mesures et en géométrie." },
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
              text: "Ces erreurs types représentent des pertes de points évitables. Les identifier et les corriger est valorisé au CRPE.",
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 1 : distribuer la puissance sur l'addition",
              objectifTag: "Erreurs types",
              enonce: "**Copie type :** « (3 + 4)² = 3² + 4² = 25, donc (a + b)² = a² + b². »",
              question: "Montrer que (a + b)² ≠ a² + b² en général.",
              correction: [
                { type: "line", text: "(3 + 4)² = 7² = 49 ≠ 3² + 4² = 25. L'affirmation est fausse." },
                { type: "note", text: "Développement correct : (a + b)² = a² + 2ab + b². La puissance se distribue sur la multiplication, pas sur l'addition." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 2 : encadrement sans vérification",
              objectifTag: "Encadrer un irrationnel",
              enonce: "**Copie type :** « √6 ≈ 2,4 donc 2,4 < √6 < 2,5 », sans calcul de vérification.",
              question: "Donner un encadrement de √6 à 0,1 près, correctement justifié.",
              correction: [
                { type: "line", text: "2,4² = 5,76 < 6 et 2,5² = 6,25 > 6 → 2,4 < √6 < 2,5. Arrondi : 2,4." },
                { type: "note", text: "Les deux calculs de carré doivent apparaître : un encadrement non justifié ne vaut rien au CRPE." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 3 : additionner les racines",
              objectifTag: "Erreurs types",
              enonce: "**Copie type :** « √3 + √3 = √6 ».",
              question: "Calculer correctement √3 + √3.",
              correction: [
                { type: "line", text: "√3 + √3 = 2√3 (on additionne les coefficients, comme 3x + 3x = 6x)." },
                { type: "note", text: "√a + √b ≠ √(a+b). En revanche √a × √b = √(ab) : la règle du produit s'applique, pas celle de la somme." },
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
                  question: "Énoncer les 5 règles des puissances (même base).",
                  answer:
                    "aᵐ × aⁿ = aᵐ⁺ⁿ · aᵐ ÷ aⁿ = aᵐ⁻ⁿ · (aᵐ)ⁿ = aᵐⁿ · aⁿ × bⁿ = (ab)ⁿ · a⁰ = 1 et a⁻ⁿ = 1/aⁿ.",
                  astuce: "Ces règles supposent la même base (sauf la 4e, qui demande le même exposant).",
                },
                {
                  question: "Qu'est-ce qu'un nombre irrationnel ? Donner quatre exemples.",
                  answer:
                    "Un réel qui ne s'écrit pas sous forme p/q, dont le développement décimal est infini et non périodique. Exemples : √2, √3, π, e.",
                  astuce: "Ne pas confondre avec un développement long : 1/7 = 0,142857… est périodique, donc rationnel.",
                },
                {
                  question: "Quelle est la règle pour simplifier √n ?",
                  answer: "Chercher le plus grand carré parfait qui divise n, puis appliquer √(a×b) = √a × √b. Exemple : √72 = √(36×2) = 6√2.",
                },
                {
                  question: "Pourquoi √2 est-il irrationnel ? (résumé)",
                  answer:
                    "Supposons √2 = p/q irréductible. Alors p² = 2q² → p pair → p = 2k → q² = 2k² → q pair. Mais p et q pairs contredisent PGCD(p, q) = 1. Donc √2 ∉ ℚ.",
                },
                {
                  question: "Que valent (√a)² et √(a²) ?",
                  answer:
                    "(√a)² = a pour a ≥ 0. √(a²) = |a| pour tout réel a, car la racine carrée est toujours positive. Exemple : √((−5)²) = 5.",
                  astuce: "On ne peut pas écrire √(a²) = a si a peut être négatif.",
                },
                {
                  question: "Le produit de deux irrationnels est-il toujours irrationnel ?",
                  answer:
                    "Non. Contre-exemple : √2 × √8 = √16 = 4, rationnel. En revanche, un irrationnel multiplié par un rationnel non nul est toujours irrationnel.",
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
              center: { title: "Puissances, racines", subtitle: "ℝ" },
              branches: [
                { title: "L'ensemble ℝ", variant: "blue", lines: ["ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ", "Irrationnels : √2, π, e"] },
                { title: "5 règles des puissances", variant: "green", lines: ["aᵐ × aⁿ = aᵐ⁺ⁿ · (aᵐ)ⁿ = aᵐⁿ", "a⁰ = 1 · a⁻ⁿ = 1/aⁿ"] },
                { title: "Racines carrées", variant: "green", lines: ["√(a×b) = √a × √b", "√(a²) = |a|"] },
                { title: "Carrés parfaits", variant: "blue", lines: ["1, 4, 9, 16… 144", "√72 = 6√2"] },
                { title: "Encadrer un irrationnel", variant: "yellow", lines: ["Vérifier par le carré", "1,41 < √2 < 1,42"] },
                { title: "Pièges", variant: "purple", dashed: true, lines: ["(a+b)² ≠ a² + b²", "√(a+b) ≠ √a + √b"] },
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
