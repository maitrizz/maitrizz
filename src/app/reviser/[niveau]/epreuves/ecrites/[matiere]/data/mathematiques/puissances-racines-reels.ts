import type { Fiche } from "@/components/fiche/types";
import { COPIES_PUISSANCES_RACINES_REELS } from "./copies-puissances-racines-reels";
import { EXERCICES_PUISSANCES_RACINES_REELS } from "./exercices-puissances-racines-reels";

export const SAVOIR_FAIRE = [
  { id: "ensembles-nombres", label: "Classer un nombre (ℕ, ℤ, ℚ, ℝ)" },
  { id: "regles-puissances", label: "Appliquer les 5 règles des puissances" },
  { id: "carres-parfaits", label: "Connaître les carrés parfaits" },
  { id: "simplifier-racine", label: "Simplifier une racine carrée" },
  { id: "encadrer-irrationnel", label: "Encadrer un irrationnel" },
  { id: "justifier-irrationalite", label: "Justifier qu'un nombre est irrationnel" },
];

export const fichePuissancesRacinesReels: Fiche = {
  slug: "puissances-racines-reels",
  matiere: "mathematiques",
  numero: 4,
  partie: "Partie 1 : Nombres et calcul",
  title: "Puissances, racines et réels",
  subtitle:
    "Puissances entières positives et négatives · règles de calcul · racines carrées · √2 irrationnel · ensemble ℝ · encadrements décimaux.",
  badges: [
    { label: "★★ Fréquent", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème A", variant: "info" },
  ],
  metaTitle: "Puissances, racines carrées et réels · Fiche de révision CRPE",
  metaDescription:
    "Fiche CRPE sur les puissances, les racines carrées et les réels : les 5 règles des puissances, carrés parfaits, simplification de racines, irrationalité de √2, ensemble ℝ, encadrements décimaux. Cours, méthode, exercices corrigés, flashcards et auto-évaluation.",
  tabGroups: [
    {
      id: "apprendre",
      label: "Apprendre",
      icon: "",
      tabs: [
        {
          id: "comprendre",
          label: "Comprendre",
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
                  text: "Valeur absolue et intervalles s'articulent avec les inéquations : ils sont traités dans la [fiche N°9](fiche:equations-inequations-systemes).",
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
              text: "Méthode bien en tête ? Entraînez-vous.",
              buttonLabel: "Aller à Appliquer",
              targetTab: "appliquer",
            },
          ],
        },
      ],
    },
    {
      id: "entrainer",
      label: "S'entraîner",
      icon: "",
      tabs: [
        {
          id: "appliquer",
          label: "Appliquer",
          icon: "",
          blocks: [
            {
              type: "exerciceBank",
              title: "Puissances, racines et réels",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_PUISSANCES_RACINES_REELS,
            },
          ],
        },
        {
          id: "corriger",
          label: "Corriger des erreurs",
          icon: "",
          blocks: [
            {
              type: "corrigerCopies",
              title: "Puissances, racines et réels",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_PUISSANCES_RACINES_REELS,
            },
          ],
        },
      ],
    },
    {
      id: "memo",
      label: "Mémo",
      icon: "",
      tabs: [
        {
          id: "memo",
          label: "Mémo",
          icon: "",
          blocks: [
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
      ],
    },
  ],
};
