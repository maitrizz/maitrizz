import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je connais les trois sens d'une fraction (partage, quotient, opérateur)" },
  { id: "e2", label: "Je sais rendre une fraction irréductible en utilisant le PGCD" },
  { id: "e3", label: "Je sais additionner et soustraire des fractions (passage au dénominateur commun)" },
  { id: "e4", label: "Je sais multiplier et diviser des fractions (règle de l'inverse)" },
  { id: "e5", label: "Je sais convertir une fraction en décimal et un décimal en fraction" },
  { id: "e6", label: "Je sais reconnaître si un développement décimal sera fini ou périodique" },
  { id: "e7", label: "Je connais les obstacles didactiques sur les fractions et décimaux au cycle 3" },
  { id: "e8", label: "Je peux analyser une erreur d'élève sur les fractions et proposer une remédiation" },
];

export const ficheFractionsDecimaux: Fiche = {
  slug: "fractions-decimaux",
  matiere: "mathematiques",
  numero: 3,
  partie: "Partie 1 : Nombres et calcul",
  title: "Fractions et décimaux",
  subtitle:
    "Sens d'une fraction · fraction irréductible · opérations · nombres décimaux · développements fini et périodique · ensemble ℚ",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème A", variant: "info" },
  ],
  metaTitle: "Fractions et décimaux ℚ (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur les fractions et les décimaux : les trois sens d'une fraction, fraction irréductible et PGCD, les quatre opérations, conversion fraction-décimal, développement fini ou périodique, ensemble ℚ. Cours, méthode, exercices corrigés, flashcards et auto-évaluation.",
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
                { number: "①", title: "L'ensemble ℚ", text: "Où se situent fractions et décimaux : ℤ ⊂ ℚ ⊂ ℝ." },
                { number: "②", title: "Les trois sens d'une fraction", text: "Partage, quotient, opérateur, et les fractions égales." },
                { number: "③", title: "La fraction irréductible", text: "La forme la plus simple, obtenue avec le PGCD." },
                { number: "④", title: "Décimaux et développements", text: "Passer de la fraction au décimal, et savoir si le développement est fini ou périodique." },
                { number: "⑤", title: "Les quatre opérations", text: "Additionner, soustraire, multiplier, diviser, et comparer." },
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
              text: "Quand vous partagez une pizza en 4 et en mangez 3, vous utilisez la fraction 3/4. Quand vous mesurez 1 mètre 75, vous écrivez 1,75 m, un nombre décimal. Ces deux notations appartiennent au même ensemble : les rationnels (ℚ). Certains rationnels s'écrivent avec un nombre fini de décimales (0,25), d'autres jamais (1/3 = 0,333…). Cette fiche relie les deux écritures et apprend à calculer avec.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Où se situe ℚ : le schéma d'inclusion",
              blocks: [
                {
                  type: "paragraph",
                  text: "Un nombre rationnel est tout nombre qui peut s'écrire sous la forme **a/b** avec a entier et b entier non nul. ℚ contient donc les entiers (5 = 5/1, −3 = −3/1), les fractions (3/4, −2/5), les décimaux finis (0,25 = 1/4) et les rationnels non décimaux (1/3 = 0,333…).",
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Décimal n'est pas synonyme de rationnel",
                  text: "Tout décimal est un rationnel, mais tout rationnel n'est pas décimal (𝔻 ⊂ ℚ). En revanche, **√2 et π ne sont pas rationnels** : leur développement décimal est infini et non périodique, ils ne peuvent s'écrire sous aucune forme a/b.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Les trois sens d'une fraction",
              blocks: [
                {
                  type: "paragraph",
                  text: "Une fraction comme 3/4 se lit de trois façons selon le contexte. Le jury apprécie qu'on sache les nommer : c'est exactement ce qu'on enseigne au cycle 3.",
                },
                {
                  type: "cardGrid",
                  columns: 3,
                  cards: [
                    { title: "Partage", variant: "info", lines: ["On partage 1 en 4 parts égales, on en prend 3.", "3/4 d'une pizza coupée en 4."] },
                    { title: "Quotient", variant: "info", lines: ["Une fraction est aussi une division.", "3/4 = 3 ÷ 4 = 0,75"] },
                    { title: "Opérateur", variant: "info", lines: ["Prendre les 3/4 = multiplier par 3, diviser par 4.", "3/4 de 20 = 20 × 3 ÷ 4 = 15"] },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Fractions égales",
                  text: "Un même rationnel s'écrit de plusieurs façons. Pour obtenir une fraction égale, on multiplie (ou divise) **le numérateur et le dénominateur par le même entier non nul** : 1/2 = 2/4 = 6/12 = 50/100. Le dénominateur ne peut jamais être 0.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "La fraction irréductible",
              blocks: [
                {
                  type: "paragraph",
                  text: "Une fraction est **irréductible** quand son numérateur et son dénominateur n'ont plus aucun diviseur commun autre que 1 : c'est la forme la plus simple d'un rationnel. On l'obtient en divisant les deux termes par leur **PGCD** (plus grand commun diviseur, voir la fiche Divisibilité).",
                },
                {
                  type: "formulaBlock",
                  lines: ["Simplifier 24/36 :", "PGCD(24, 36) = 12", "24 ÷ 12 = 2 et 36 ÷ 12 = 3 → **2/3**"],
                  note: "Si on ne voit pas le PGCD, on simplifie par étapes (÷2, puis ÷3…) jusqu'à ne plus pouvoir.",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Nombres décimaux et développements",
              blocks: [
                {
                  type: "paragraph",
                  text: "Un nombre **décimal** est un nombre dont l'écriture à virgule se termine : 0,25 est décimal, 0,333… ne l'est pas. Pour passer d'un décimal à une fraction, le nombre de chiffres après la virgule donne le nombre de zéros au dénominateur.",
                },
                {
                  type: "table",
                  headers: ["Décimal", "Chiffres après la virgule", "Fraction"],
                  rows: [
                    ["0,3", "1", "3/10"],
                    ["0,25", "2", "25/100 = 1/4"],
                    ["0,125", "3", "125/1000 = 1/8"],
                    ["1,75", "2", "175/100 = 7/4"],
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Fini ou périodique ? La méthode en 2 étapes",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "**①** Rendre la fraction irréductible. **②** Regarder les facteurs premiers du dénominateur : s'il ne contient que des 2 et des 5, le développement est **fini** ; s'il contient un autre facteur (3, 7, 11…), il est **périodique infini**. Raison : un décimal fini est une fraction de dénominateur 10, 100, 1000…, or 10 = 2 × 5.",
                    },
                    {
                      type: "cardGrid",
                      columns: 2,
                      cards: [
                        { title: "Fini (que des 2 et des 5)", variant: "success", lines: ["1/4 → 2² → 0,25", "3/8 → 2³ → 0,375", "7/20 → 2² × 5 → 0,35"] },
                        { title: "Périodique (autre facteur)", variant: "warning", lines: ["1/3 → 3 → 0,333…", "1/7 → 7 → 0,142857…", "5/6 → 2 × 3 → 0,8333…"] },
                      ],
                    },
                    {
                      type: "callout",
                      variant: "info",
                      text: "On note la période en la surlignant : 1/3 = 0,333… À ne pas confondre avec π = 3,14159… qui ne se répète jamais (π n'est pas rationnel).",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "⑤",
              title: "Les quatre opérations et la comparaison",
              blocks: [
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    { title: "Addition et soustraction", variant: "info", lines: ["Même dénominateur : on additionne les numérateurs.", "Dénominateurs différents : on réduit au dénominateur commun.", "1/3 + 1/4 = 4/12 + 3/12 = 7/12"] },
                    { title: "Multiplication", variant: "info", lines: ["Numérateur × numérateur, dénominateur × dénominateur.", "3/4 × 2/5 = 6/20 = 3/10", "Simplifier avant de multiplier évite les grands nombres."] },
                    { title: "Division", variant: "info", lines: ["Diviser par une fraction = multiplier par son inverse.", "L'inverse de a/b est b/a.", "3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8"] },
                    { title: "Comparaison", variant: "info", lines: ["Réduire au même dénominateur, puis comparer les numérateurs.", "Ou produit en croix : 3/4 vs 5/7 → 21 > 20 → 3/4 > 5/7."] },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Le piège numéro 1",
                  text: "**1/2 + 1/3 n'est pas 2/5.** On ne touche jamais aux dénominateurs lors d'une addition : on les met d'abord au même niveau (6 ici), puis on additionne les numérateurs. 1/2 + 1/3 = 3/6 + 2/6 = 5/6.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : additionner les dénominateurs",
              badge: "Erreur n°1",
              faux: "1/3 + 1/4 = 2/7.",
              vrai: "1/3 + 1/4 = 4/12 + 3/12 = **7/12**.",
              methode: "L'addition exige un dénominateur commun. On ne touche jamais directement aux dénominateurs.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°2 : croire qu'une fraction est toujours inférieure à 1",
              badge: "Conception erronée",
              faux: "« 5/3 n'est pas une fraction parce que c'est plus grand que 1 ».",
              vrai: "5/3 est une fraction valide, elle vaut 1,666…, simplement supérieure à 1.",
              methode: "Une fraction est supérieure à 1 quand le numérateur dépasse le dénominateur. Éduscol demande de travailler ces fractions dès le CM1.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : confondre décimal et rationnel périodique",
              badge: "Fréquent",
              faux: "« 0,333… est un nombre décimal ».",
              vrai: "0,333… est un rationnel à développement **périodique** : ce n'est pas un décimal (fini). C'est 1/3.",
              methode: "Décimal = développement fini. Rationnel non décimal = développement périodique infini. Les deux sont dans ℚ.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°4 : simplifier par un facteur non commun",
              badge: "Erreur de calcul",
              faux: "Simplifier 14/21 en divisant seulement le numérateur : « = 7/21 ».",
              vrai: "PGCD(14, 21) = 7. On divise les **deux** termes : 14 ÷ 7 = 2, 21 ÷ 7 = 3 → **2/3**.",
              methode: "Le diviseur doit être commun au numérateur ET au dénominateur, et on divise toujours les deux.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 2 (CP-CE2) :** premiers partages (moitié, quart, tiers) sans notation fractionnaire.\n\n**Cycle 3 (CM1-6e) :** fractions et décimaux s'installent. Le programme (BOEN 2020) précise de construire les décimaux à partir des fractions décimales (1/10, 1/100…), puis d'introduire l'écriture à virgule comme convention. Éduscol insiste : ne pas présenter le décimal comme « deux nombres séparés par une virgule », mais comme un nombre à part entière.\n\n**Ce que vous devez savoir dire :** « Les fractions et les décimaux s'enseignent en lien étroit au cycle 3. Les décimaux se construisent comme cas particulier des fractions. Le passage de la fraction à l'écriture à virgule est une convention à expliciter, pas seulement à appliquer. »",
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
              title: "Quatre savoir-faire exigibles au concours",
              text: "La méthode ① conditionne les autres (simplifier). Lisez-les dans l'ordre. Chacune se termine par un checkpoint pour vérifier.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Rendre une fraction irréductible",
              intro: "**Question typique :** « Donner la fraction irréductible égale à 36/48 ».",
              steps: [
                {
                  number: "1",
                  text: "**Trouver le PGCD du numérateur et du dénominateur.**",
                  example: { lines: ["Diviseurs de 36 : 1, 2, 3, 4, 6, 9, 12, 18, 36", "Diviseurs de 48 : 1, 2, 3, 4, 6, 8, 12, 16, 24, 48", "Diviseurs communs : 1, 2, 3, 4, 6, 12 → PGCD = 12"] },
                },
                {
                  number: "2",
                  text: "**Diviser les deux termes par le PGCD.**",
                  example: { lines: ["36 ÷ 12 = 3", "48 ÷ 12 = 4 → 3/4"] },
                },
                {
                  number: "3",
                  text: "**Vérifier que la fraction obtenue est bien irréductible.**",
                  example: { lines: ["PGCD(3, 4) = 1 ✓ → **3/4** est irréductible"] },
                  warn: "⚠️ Si on ne voit pas le PGCD, simplifier par étapes (÷2, ÷3…) jusqu'à PGCD = 1.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Rendre irréductible : 18/24.",
              correction: [
                { type: "line", text: "PGCD(18, 24) = 6 → 18 ÷ 6 = 3, 24 ÷ 6 = 4 → **3/4**." },
                { type: "note", text: "Vérification : PGCD(3, 4) = 1, la fraction est bien irréductible." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Additionner ou soustraire des fractions",
              intro:
                "**Question typique :** « Calculer 2/3 + 3/4 − 1/6 ». On ne peut additionner que des parts de même taille : il faut d'abord un dénominateur commun.",
              steps: [
                {
                  number: "1",
                  text: "**Trouver le dénominateur commun** (le plus petit multiple commun des dénominateurs).",
                  example: { lines: ["Dénominateurs : 3, 4, 6", "Multiples de 6 : 6, 12… · de 4 : 4, 8, 12… · de 3 : 3, 6, 9, 12…", "Premier commun = 12"] },
                  exampleNote: "Commencer par les multiples du plus grand dénominateur fait gagner du temps.",
                },
                {
                  number: "2",
                  text: "**Convertir chaque fraction au dénominateur 12.**",
                  example: { lines: ["2/3 = 8/12 · 3/4 = 9/12 · 1/6 = 2/12"] },
                },
                {
                  number: "3",
                  text: "**Opérer uniquement sur les numérateurs.**",
                  example: { lines: ["8/12 + 9/12 − 2/12 = (8 + 9 − 2)/12 = 15/12"] },
                },
                {
                  number: "4",
                  text: "**Simplifier le résultat.**",
                  example: { lines: ["PGCD(15, 12) = 3 → 15 ÷ 3 = 5, 12 ÷ 3 = 4 → **5/4**"] },
                  warn: "⚠️ Toujours simplifier : une fraction non irréductible est une réponse incomplète au concours.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Calculer 1/2 + 1/3.",
              correction: [
                { type: "line", text: "Dénominateur commun 6 : 3/6 + 2/6 = **5/6**." },
                { type: "note", text: "Surtout pas 2/5 : on ne additionne jamais les dénominateurs." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Multiplier ou diviser des fractions",
              intro: "**Questions typiques :** « Calculer 5/6 × 9/10 » et « Calculer 3/8 ÷ 15/4 ».",
              steps: [
                {
                  number: "1",
                  text: "**Multiplication :** numérateur × numérateur, dénominateur × dénominateur (pas besoin de dénominateur commun).",
                  example: { lines: ["5/6 × 9/10 = 45/60", "PGCD(45, 60) = 15 → **3/4**"] },
                },
                {
                  number: "2",
                  text: "**Division :** multiplier par l'inverse de la fraction qui divise.",
                  example: { lines: ["3/8 ÷ 15/4 = 3/8 × 4/15 = 12/120 = **1/10**"] },
                  warn: "⚠️ On n'inverse que la fraction par laquelle on divise, pas les deux.",
                },
                {
                  number: "💡",
                  text: "**Simplifier avant de multiplier** évite les grands nombres (ex. 3/9 = 1/3 avant de poser le produit).",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Calculer 2/3 ÷ 4/9.",
              correction: [
                { type: "line", text: "2/3 × 9/4 = 18/12 = **3/2**." },
                { type: "note", text: "On retourne la deuxième fraction, puis on multiplie." },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Convertir entre fraction et décimal",
              intro: "**Questions typiques :** écriture décimale de 7/8, fraction irréductible de 0,36, savoir si 5/12 a un développement fini.",
              steps: [
                {
                  number: "1",
                  text: "**Fraction → décimal :** diviser le numérateur par le dénominateur.",
                  example: { lines: ["7 ÷ 8 = 0,875"] },
                  exampleNote: "La calculatrice est autorisée à l'écrit du CRPE.",
                },
                {
                  number: "2",
                  text: "**Décimal → fraction :** écrire sur la puissance de 10 correspondante, puis simplifier.",
                  example: { lines: ["0,36 = 36/100, PGCD(36, 100) = 4 → **9/25**"] },
                },
                {
                  number: "3",
                  text: "**Fini ou périodique :** rendre irréductible, puis regarder le dénominateur.",
                  example: { lines: ["5/12 irréductible, dénominateur 2² × 3", "Le 3 n'est ni un 2 ni un 5 → périodique : 5 ÷ 12 = 0,41666…"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Le développement décimal de 3/20 est-il fini ?",
              correction: [
                { type: "line", text: "Dénominateur 20 = 2² × 5 : que des 2 et des 5 → **fini**. 3 ÷ 20 = 0,15." },
                { type: "note", text: "On rend d'abord la fraction irréductible, puis on regarde les facteurs du dénominateur." },
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
                  question: "Que vaut « les 3/4 de 20 » ?",
                  options: ["12", "15", "23", "17"],
                  correctIndex: 1,
                  explanation: "Sens « opérateur » : 20 × 3 ÷ 4 = 60 ÷ 4 = 15.",
                },
                {
                  objectifId: "e2",
                  question: "Quelle est la forme irréductible de 24/36 ?",
                  options: ["2/3", "4/6", "12/18", "6/9"],
                  correctIndex: 0,
                  explanation: "PGCD(24, 36) = 12 : 24 ÷ 12 = 2 et 36 ÷ 12 = 3, donc 2/3. Les autres réponses sont égales à 2/3 mais pas irréductibles.",
                },
                {
                  objectifId: "e3",
                  question: "Combien vaut 1/3 + 1/4 ?",
                  options: ["2/7", "7/12", "2/12", "1/7"],
                  correctIndex: 1,
                  explanation: "Dénominateur commun 12 : 4/12 + 3/12 = 7/12. Surtout pas 2/7 (addition des dénominateurs).",
                },
                {
                  objectifId: "e4",
                  question: "Combien vaut 3/4 ÷ 2/5 ?",
                  options: ["6/20", "15/8", "5/6", "8/15"],
                  correctIndex: 1,
                  explanation: "Diviser, c'est multiplier par l'inverse : 3/4 × 5/2 = 15/8.",
                },
                {
                  objectifId: "e5",
                  question: "Quelle est la fraction irréductible égale à 0,25 ?",
                  options: ["25/100", "1/4", "1/2", "2/5"],
                  correctIndex: 1,
                  explanation: "0,25 = 25/100, et PGCD(25, 100) = 25 → 1/4.",
                },
                {
                  objectifId: "e6",
                  question: "Le développement décimal de 3/8 est-il fini ou périodique ?",
                  options: ["Périodique", "Fini", "Ni l'un ni l'autre", "Infini non périodique"],
                  correctIndex: 1,
                  explanation: "8 = 2³ : le dénominateur ne contient que des 2, donc le développement est fini (3/8 = 0,375).",
                },
                {
                  objectifId: "e6",
                  question: "0,333… (un tiers) est-il un nombre décimal ?",
                  options: ["Oui, c'est un décimal", "Non, c'est un rationnel à développement périodique", "Non, c'est un irrationnel", "Oui, comme π"],
                  correctIndex: 1,
                  explanation: "0,333… = 1/3 : son développement est infini et périodique. C'est un rationnel, mais pas un décimal (un décimal a un développement fini).",
                },
                {
                  objectifId: "e7",
                  question: "Selon Éduscol, comment construit-on les nombres décimaux au cycle 3 ?",
                  options: [
                    "Comme deux nombres séparés par une virgule",
                    "À partir des fractions décimales (1/10, 1/100…)",
                    "Avant les fractions",
                    "Uniquement avec la calculatrice",
                  ],
                  correctIndex: 1,
                  explanation: "On construit les décimaux comme cas particulier des fractions (fractions décimales), puis on introduit l'écriture à virgule comme convention.",
                },
                {
                  objectifId: "e8",
                  question: "Un élève écrit « 1/2 + 1/3 = 2/5 ». Quelle erreur commet-il ?",
                  options: [
                    "Il a oublié de simplifier",
                    "Il a additionné numérateurs et dénominateurs séparément",
                    "Il a inversé une fraction",
                    "Il a confondu × et ÷",
                  ],
                  correctIndex: 1,
                  explanation: "Il additionne les numérateurs (1+1) et les dénominateurs (2+3), par analogie fausse avec les entiers. Le résultat correct est 5/6.",
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
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Une notion à la fois",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : vocabulaire et sens",
              objectifTag: "Sens d'une fraction",
              question:
                "a) Dans 5/8, identifier numérateur et dénominateur.\nb) Donner deux fractions égales à 2/3.\nc) Parmi 3 · −2/5 · √2 · 0,25 · π · 7/4, lesquels sont rationnels ?\nd) 7/4 est-elle plus grande ou plus petite que 1 ?",
              correction: [
                { type: "line", label: "a)", text: "numérateur = 5, dénominateur = 8" },
                { type: "line", label: "b)", text: "2/3 = 4/6 = 6/9 (multiplier les deux termes par le même nombre)" },
                { type: "line", label: "c)", text: "Rationnels : 3, −2/5, 0,25, 7/4. Non rationnels : √2 et π." },
                { type: "line", label: "d)", text: "7/4 > 1 car le numérateur dépasse le dénominateur (7/4 = 1,75)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : fractions irréductibles",
              objectifTag: "Fraction irréductible",
              question: "Rendre irréductibles : a) 12/18   b) 35/49   c) 24/60",
              correction: [
                { type: "line", label: "a)", text: "PGCD = 6 → **2/3**" },
                { type: "line", label: "b)", text: "PGCD = 7 → **5/7**" },
                { type: "line", label: "c)", text: "PGCD = 12 → **2/5**" },
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
              title: "Exercice 1 : opérations sur les fractions",
              objectifTag: "Opérations sur les fractions",
              question: "Calculer et donner le résultat irréductible :\na) 2/5 + 3/4   b) 5/6 − 1/4   c) 3/7 × 14/9   d) 4/5 ÷ 8/15",
              correction: [
                { type: "line", label: "a)", text: "8/20 + 15/20 = **23/20**" },
                { type: "line", label: "b)", text: "10/12 − 3/12 = **7/12**" },
                { type: "line", label: "c)", text: "42/63 = **2/3** (ou en croix : 14/7 = 2 et 3/9 = 1/3 → 2/3)" },
                { type: "line", label: "d)", text: "4/5 × 15/8 = 60/40 = **3/2**" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : conversions fraction et décimal",
              objectifTag: "Convertir fraction et décimal",
              question: "a) Convertir en décimal : 3/5 · 7/8 · 2/3\nb) Convertir en fraction irréductible : 0,4 · 0,625 · 0,12",
              correction: [
                { type: "line", label: "a)", text: "3/5 = 0,6 · 7/8 = 0,875 · 2/3 = 0,666… (périodique)" },
                { type: "line", label: "b)", text: "0,4 = 2/5 · 0,625 = 5/8 · 0,12 = 3/25" },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : mise en contexte",
              sub: "Problèmes concrets, plusieurs étapes",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : fractions et situation concrète",
              objectifTag: "Opérations sur les fractions",
              enonce: "Un réservoir contient 3/4 de sa capacité maximale, soit 45 litres.",
              question:
                "a) Quelle est la capacité maximale ?\nb) On ajoute 1/6 de la capacité maximale. Quel est le volume total ?\nc) Le réservoir déborde-t-il ?",
              correction: [
                { type: "line", label: "a)", text: "3/4 de C = 45 → C = 45 × 4/3 = **60 litres**" },
                { type: "line", label: "b)", text: "1/6 de 60 = 10 litres → 45 + 10 = **55 litres**" },
                { type: "line", label: "c)", text: "55 < 60 → il ne déborde pas (rempli à 55/60 = 11/12)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 4 : comparer et ordonner",
              objectifTag: "Opérations sur les fractions",
              question: "Ranger dans l'ordre croissant en réduisant au même dénominateur : 3/5 · 2/3 · 7/12 · 5/8.",
              correction: [
                { type: "line", text: "PPCM(5, 3, 12, 8) = 120 : 3/5 = 72/120 · 2/3 = 80/120 · 7/12 = 70/120 · 5/8 = 75/120" },
                { type: "line", text: "70 < 72 < 75 < 80 → **7/12 < 3/5 < 5/8 < 2/3**" },
                { type: "note", text: "On ne peut pas comparer ces fractions sans les mettre au même dénominateur." },
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
              title: "Exercice 5 : développement décimal et rationalité",
              objectifTag: "Développement fini ou périodique",
              question:
                "a) Montrer que 1/7 a un développement périodique et trouver sa période.\nb) 0,272727… est-il rationnel ? Si oui, l'écrire en fraction irréductible.\nc) Montrer que tout décimal fini est rationnel.",
              correction: [
                { type: "line", label: "a)", text: "1 ÷ 7 = 0,142857142857… La période est 142857 (longueur 6). En divisant par 7, les restes possibles vont de 0 à 6 : après au plus 6 étapes, un reste se répète, donc la division se répète." },
                { type: "line", label: "b)", text: "x = 0,272727… → 100x = 27,272727… → 99x = 27 → x = 27/99 = **3/11**. Oui, c'est rationnel." },
                { type: "line", label: "c)", text: "Un décimal fini x à n chiffres après la virgule vérifie x × 10ⁿ = k entier, donc x = k/10ⁿ avec k ∈ ℤ : c'est un rationnel." },
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
              text: "Ces exercices reproduisent le format des sujets du concours. Une réponse sans justification ne rapporte aucun point.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 6",
              objectifTag: "Opérations sur les fractions",
              enonce: "Pour chaque affirmation, dire si elle est vraie ou fausse et justifier rigoureusement.",
              question:
                "A : « 3/5 + 4/7 = 7/12 »\nB : « Tout nombre décimal est rationnel »\nC : « La fraction 15/35 est irréductible »\nD : « 0,999… = 1 »",
              correction: [
                { type: "line", label: "A", text: "**Fausse.** 3/5 + 4/7 = 21/35 + 20/35 = 41/35. Le candidat a additionné numérateurs et dénominateurs." },
                { type: "line", label: "B", text: "**Vraie.** Tout décimal s'écrit a/10ⁿ, quotient de deux entiers, donc rationnel. (L'inverse est faux : 1/3 est rationnel mais pas décimal.)" },
                { type: "line", label: "C", text: "**Fausse.** PGCD(15, 35) = 5 ≠ 1 : on peut simplifier en 3/7." },
                { type: "line", label: "D", text: "**Vraie.** x = 0,999… → 10x = 9,999… → 9x = 9 → x = 1. Rigoureusement exact, même si contre-intuitif." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 7",
              objectifTag: "Analyser une erreur d'élève",
              enonce: "En CM2 : « Parmi 2/4 · 3/5 · 4/8 · 5/9 · 50/100 · 0,5 · 0,50, lesquels sont égaux à 1/2 ? »",
              question:
                "1. Répondre à la question.\n2. Un élève affirme que 3/5 = 1/2 « parce que 3 − 2 = 1 et 5 − 4 = 1 ». Analyser cette erreur.\n3. Quel est l'intérêt de proposer simultanément écritures fractionnaires et décimales au cycle 3 ?",
              correction: [
                { type: "line", label: "1.", text: "Égaux à 1/2 : 2/4, 4/8, 50/100, 0,5 et 0,50. Pas 3/5 (= 0,6) ni 5/9 (≈ 0,556)." },
                { type: "line", label: "2.", text: "L'élève applique une « règle des différences » (num₁ − num₂ = dén₁ − dén₂), qui est fausse. L'égalité de fractions se teste par produits en croix ou réduction au même dénominateur : il confond relation additive et relation multiplicative." },
                { type: "line", label: "3.", text: "Travailler les deux écritures montre qu'un même nombre a plusieurs représentations (0,5 = 1/2 = 50/100), ce qui renforce la notion de nombre comme objet indépendant de son écriture (recommandation Éduscol)." },
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
              text: "Ces exercices reproduisent des erreurs réelles. Identifier et corriger une erreur est une compétence directement valorisée au CRPE.",
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 8",
              objectifTag: "Analyser une erreur d'élève",
              enonce: "**Copie d'un candidat :** Calculer 1/4 + 2/3.\n*Réponse :* 1/4 + 2/3 = 3/7.",
              question: "a) Identifier l'erreur.\nb) Donner la correction.\nc) Comment l'expliquer à un élève de CM2 ?",
              correction: [
                { type: "paragraph", text: "**Erreur : addition des dénominateurs.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Le candidat a additionné numérateurs (1+2) et dénominateurs (4+3)." },
                    { text: "Correction : dénominateur commun 12 → 3/12 + 8/12 = **11/12**." },
                    { text: "Vérification : 0,25 + 0,666… ≈ 0,916… = 11/12 ✓." },
                  ],
                },
                { type: "note", text: "Pour un élève : « 1/4 de pizza et 2/3 d'une autre, ça ne fait pas 3/7. Il faut découper les deux en 12 parts égales pour pouvoir compter. »" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 9",
              objectifTag: "Convertir fraction et décimal",
              enonce: "**Copie d'un candidat :** Comparer 0,8 et 0,75.\n*Réponse :* « 0,75 > 0,8 car 75 > 8 ».",
              question: "a) Identifier l'erreur.\nb) Corriger.\nc) Proposer une remédiation pour un élève de CM1.",
              correction: [
                { type: "paragraph", text: "**Erreur : valeur positionnelle ignorée.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Le candidat compare les parties décimales comme des entiers (75 vs 8), en confondant centièmes et dixièmes." },
                    { text: "Correction : 0,8 = 0,80 = 80/100 et 0,75 = 75/100. Or 80 > 75 → **0,8 > 0,75**." },
                  ],
                },
                { type: "note", text: "Remédiation CM1 : écrire le même nombre de décimales (0,80 au lieu de 0,8), ou placer sur la droite graduée. Le 8 de 0,8 vaut 8 dixièmes, donc plus que 7 centièmes." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 10 : analyse didactique",
              objectifTag: "Analyser une erreur d'élève",
              enonce: "En CM2, un élève écrit : « 1/2 + 1/2 = 2/4 car on additionne le haut et le bas ».",
              question: "a) Identifier l'obstacle.\nb) L'élève a-t-il tort ? Justifier.\nc) Quelle activité proposer ?",
              correction: [
                { type: "line", label: "a)", text: "L'élève applique une règle fausse construite par analogie avec les entiers. Il n'a pas compris que le dénominateur représente la taille des parts." },
                { type: "line", label: "b)", text: "Oui : 1/2 + 1/2 = 2/2 = 1, alors que 2/4 = 1/2 ≠ 1." },
                { type: "line", label: "c)", text: "Manipulation : colorier les deux moitiés d'une feuille pour obtenir 1 feuille entière (et non 2/4). Puis formaliser : la taille des parts (dénominateur) ne change pas quand on ajoute des parts." },
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
              text: "Répondez dans votre tête avant de révéler, puis évaluez-vous. Formulées comme des questions de jury d'oral.",
            },
            {
              type: "flashcardDeck",
              cards: [
                {
                  question: "Qu'est-ce qu'un nombre rationnel ? Donner trois exemples, dont un surprenant.",
                  answer:
                    "Un rationnel s'écrit a/b avec a entier et b entier non nul. Exemples : 3/4 (fraction), 0,25 (= 1/4, décimal), −7 (= −7/1, entier). Surprenant : 0,333… = 1/3 est rationnel malgré son développement infini.",
                  astuce: "√2 et π ne sont pas rationnels : ils ne s'écrivent comme aucune fraction d'entiers.",
                },
                {
                  question: "Comment savoir si une fraction a un développement décimal fini ou infini ?",
                  answer:
                    "On rend la fraction irréductible, puis on regarde le dénominateur. Que des facteurs 2 et 5 → fini. Un autre facteur → périodique infini. Ex : 3/8 (2³) → 0,375 fini ; 1/6 (2×3) → 0,1666… périodique.",
                },
                {
                  question: "Calculer 2/3 + 3/5 en montrant les étapes.",
                  answer:
                    "PPCM(3, 5) = 15 : 2/3 = 10/15 et 3/5 = 9/15, donc 10/15 + 9/15 = 19/15 (déjà irréductible).",
                  astuce: "2/3 + 3/5 n'est pas 5/8 : vérifier que 5/8 = 0,625 alors que 19/15 ≈ 1,27.",
                },
                {
                  question: "Quelles sont les trois façons de lire la fraction 3/4 ?",
                  answer:
                    "Partage (1 partagé en 4, on prend 3), quotient (3 ÷ 4 = 0,75), opérateur (les 3/4 d'une quantité : × 3 puis ÷ 4). Éduscol recommande de construire ces trois sens au cycle 3.",
                },
                {
                  question: "Pourquoi 0,999… = 1 ?",
                  answer:
                    "x = 0,999… → 10x = 9,999… → 10x − x = 9 → 9x = 9 → x = 1. Autre approche : 3 × (1/3) = 3 × 0,333… = 0,999… et vaut 1. Ce sont deux écritures du même nombre.",
                },
                {
                  question: "Comment fractions et décimaux sont-ils enseignés au cycle 3 selon Éduscol ?",
                  answer:
                    "On construit les décimaux à partir des fractions décimales (1/10, 1/100…), pas l'inverse. L'écriture à virgule arrive ensuite, comme convention, une fois le sens du décimal construit.",
                },
                {
                  question: "Donner la fraction irréductible égale à 0,272727…",
                  answer:
                    "x = 0,272727… → 100x = 27,272727… → 99x = 27 → x = 27/99 = 3/11 (PGCD = 9). Vérification : 3 ÷ 11 = 0,272727… ✓",
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
              text: "La carte mentale de la fiche : un outil pour réviser rapidement avant le jour J.",
            },
            {
              type: "mindmapLite",
              center: { title: "Fractions et décimaux", subtitle: "ℚ" },
              branches: [
                { title: "Trois sens d'une fraction", variant: "blue", lines: ["Partage · quotient", "Opérateur (3/4 de 20 = 15)"] },
                { title: "Fraction irréductible", variant: "blue", lines: ["PGCD(num, dén) = 1", "36/48 → 3/4"] },
                { title: "Opérations", variant: "green", lines: ["+ et − : dénominateur commun", "× : num×num / dén×dén", "1/3 + 1/4 ≠ 2/7"] },
                { title: "Décimaux et périodiques", variant: "green", lines: ["Fini si dén = 2ᵃ × 5ᵇ", "Sinon périodique : 1/3 = 0,333…"] },
                { title: "Comparaison", variant: "yellow", lines: ["Dénominateur commun ou produit en croix", "0,8 > 0,75 (pas 75 > 8)"] },
                { title: "Recul primaire", variant: "purple", dashed: true, lines: ["Cycle 3 : décimaux via fractions décimales", "Obstacle : addition des dénominateurs"] },
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
