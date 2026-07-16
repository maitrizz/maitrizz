import type { Fiche } from "@/components/fiche/types";
import { COPIES_FRACTIONS_DECIMAUX } from "./copies-fractions-decimaux";
import { EXERCICES_FRACTIONS_DECIMAUX } from "./exercices-fractions-decimaux";

export const SAVOIR_FAIRE = [
  { id: "sens-fraction", label: "Identifier les sens d'une fraction" },
  { id: "fraction-irreductible", label: "Rendre une fraction irréductible" },
  { id: "addition-soustraction", label: "Additionner et soustraire des fractions" },
  { id: "multiplication-division", label: "Multiplier et diviser des fractions" },
  { id: "conversion-decimal", label: "Convertir fraction et décimal" },
  { id: "developpement-decimal", label: "Reconnaître fini ou périodique" },
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
                  text: "Tout décimal est un rationnel, mais tout rationnel n'est pas décimal (𝔻 ⊂ ℚ). En revanche, **√2 et π ne sont pas rationnels** : leur développement décimal est infini et non périodique, ils ne peuvent s'écrire sous aucune forme a/b. Les réels et les irrationnels sont détaillés dans la [fiche N°4](fiche:puissances-racines-reels).",
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
                  text: "Une fraction est **irréductible** quand son numérateur et son dénominateur n'ont plus aucun diviseur commun autre que 1 : c'est la forme la plus simple d'un rationnel. On l'obtient en divisant les deux termes par leur **PGCD** (plus grand commun diviseur, voir la [fiche N°6](fiche:divisibilite-pgcd-ppcm)).",
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
              buttonLabel: "Voir la méthode",
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
                  number: "3",
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
              title: "Fractions et décimaux",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_FRACTIONS_DECIMAUX,
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
              title: "Fractions et décimaux",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_FRACTIONS_DECIMAUX,
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
      ],
    },
  ],
};
