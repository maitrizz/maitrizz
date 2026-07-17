import type { Fiche } from "@/components/fiche/types";
import { COPIES_DIVISIBILITE_PGCD_PPCM } from "./copies-divisibilite-pgcd-ppcm";
import { EXERCICES_DIVISIBILITE_PGCD_PPCM } from "./exercices-divisibilite-pgcd-ppcm";

export const SAVOIR_FAIRE = [
  { id: "criteres-divisibilite", label: "Appliquer les critères de divisibilité" },
  { id: "tester-primalite", label: "Tester si un nombre est premier" },
  { id: "decomposer", label: "Décomposer en facteurs premiers" },
  { id: "pgcd", label: "Calculer un PGCD (Euclide, décomposition)" },
  { id: "ppcm", label: "Calculer un PPCM (problème de conjonction)" },
  { id: "premiers-entre-eux", label: "Distinguer premier et premiers entre eux" },
];

export const ficheDivisibilitePgcdPpcm: Fiche = {
  slug: "divisibilite-pgcd-ppcm",
  matiere: "mathematiques",
  numero: 6,
  partie: "Partie 1 : Nombres et calcul",
  title: "Divisibilité, PGCD, PPCM, nombres premiers",
  subtitle:
    "Multiples et diviseurs · critères de divisibilité · division euclidienne · nombres premiers · décomposition en facteurs premiers · algorithme d'Euclide · PPCM",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème A", variant: "info" },
  ],
  metaTitle: "Divisibilité, PGCD, PPCM, nombres premiers · Fiche de révision CRPE",
  metaDescription:
    "Fiche CRPE sur l'arithmétique : divisibilité et critères, division euclidienne, nombres premiers, décomposition en facteurs premiers, PGCD (algorithme d'Euclide), PPCM et problèmes de conjonction. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
              title: "Le problème qui donne envie de comprendre",
              text: "Une enseignante dispose de 84 feuilles de dessin et de 126 crayons. Elle veut former le maximum de lots strictement identiques, en utilisant tout le matériel sans reste. Réponse : 42 lots (2 feuilles et 3 crayons chacun), car 42 est le plus grand entier qui divise à la fois 84 et 126. C'est le PGCD.\n\nAutre situation : deux bus passent toutes les 8 minutes et toutes les 12 minutes, partis ensemble à 8h00. Ils se retrouveront dans 24 minutes, à 8h24. 24, c'est le PPCM. Ces deux outils sont au cœur de la fiche. Pour les comprendre, il faut d'abord la divisibilité, les nombres premiers et la décomposition. Chaque notion en appelle une autre : lisez-les dans l'ordre.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Divisibilité : est-ce que ça tombe juste ?",
              blocks: [
                {
                  type: "paragraph",
                  text: "Diviser 12 billes entre 4 enfants, ça tombe juste (3 chacun). Diviser 13 billes entre 4 enfants, il en reste une. Cette idée simple est exactement ce que formalise la divisibilité. On dit que **b divise a** lorsqu'on peut répartir a en groupes de b sans aucun reste, c'est-à-dire s'il existe un entier k tel que **a = k × b**.",
                },
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "3 divise 12",
                      variant: "success",
                      lines: ["12 = 4 × 3 (reste = 0)", "12 est un multiple de 3", "3 est un diviseur de 12"],
                    },
                    {
                      title: "7 ne divise pas 15",
                      variant: "warning",
                      lines: ["15 = 2 × 7 + 1 (reste = 1 ≠ 0)", "15 n'est pas un multiple de 7", "7 n'est pas un diviseur de 15"],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "**Quatre façons de dire la même chose :** « b divise a », « a est multiple de b », « a est divisible par b » et « b est diviseur de a ». Toute la fiche tourne autour de cette idée. À noter : 0 est multiple de tout entier, 1 divise tout entier, et tout entier se divise lui-même.",
                },
                {
                  type: "paragraph",
                  text: "Tester si 4 572 est divisible par 3 en posant la division serait fastidieux. Des **critères** permettent de répondre en quelques secondes, sans calculer. Ils sont au programme, et le jury peut demander d'en justifier un (notamment par 3 ou par 9).",
                },
                {
                  type: "table",
                  headers: ["Divisible par", "Critère", "Exemple avec 4 572"],
                  rows: [
                    ["2", "chiffre des unités pair (0, 2, 4, 6, 8)", "oui (unités = 2)"],
                    ["3", "somme des chiffres divisible par 3", "oui (4+5+7+2 = 18 = 6 × 3)"],
                    ["4", "deux derniers chiffres = multiple de 4", "oui (72 = 18 × 4)"],
                    ["5", "chiffre des unités = 0 ou 5", "non (unités = 2)"],
                    ["9", "somme des chiffres divisible par 9", "oui (18 = 2 × 9)"],
                    ["10", "chiffre des unités = 0", "non (unités = 2)"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "💡 Combiner les critères",
                  text: "Divisible par 6 = divisible par 2 ET par 3. Divisible par 15 = par 3 ET par 5. Attention : divisible par 4 ET par 9 ne donne « divisible par 36 » que parce que 4 = 2² et 9 = 3² n'ont aucun facteur commun. Combiner deux critères ne marche que si les deux nombres sont premiers entre eux.",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Pourquoi le critère par 3 fonctionne (le jury peut le demander)",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "10 = 9 + 1, 100 = 99 + 1, 1 000 = 999 + 1 : chaque puissance de 10 est un multiple de 9, plus 1. Donc dans 4 572 = 4 × 1 000 + 5 × 100 + 7 × 10 + 2, chaque terme a le même reste par 9 (et par 3) que son chiffre. Le reste de 4 572 par 9 est donc le même que celui de 4 + 5 + 7 + 2 = 18, soit 0. D'où le critère.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Division euclidienne : quand ça ne tombe pas juste",
              blocks: [
                {
                  type: "paragraph",
                  text: "On vient de voir la divisibilité, le cas où la division tombe juste. Mais 47 billes réparties en groupes de 5, ça donne 9 groupes et il reste 2 billes. Ce reste est celui de la **division euclidienne**, l'outil fondamental de toute l'arithmétique, et la base de l'algorithme d'Euclide.",
                },
                {
                  type: "formulaBlock",
                  lines: [
                    "**a = b × q + r** avec **0 ≤ r < b**",
                    "a = dividende · b = diviseur · q = quotient · r = reste",
                    "Exemple : 47 = 5 × 9 + 2 → quotient 9, reste 2",
                  ],
                  note: "Le lien avec la divisibilité : b divise a si et seulement si le reste r = 0.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Nombres premiers et décomposition en facteurs premiers",
              blocks: [
                {
                  type: "paragraph",
                  text: "Certains entiers sont « indivisibles » : 7 ne s'écrit que 1 × 7. Ce sont les **nombres premiers**, les briques élémentaires : tout entier supérieur ou égal à 2 est soit premier, soit un produit de nombres premiers. C'est pourquoi on en a besoin pour le PGCD et le PPCM.",
                },
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "7 est premier",
                      variant: "success",
                      lines: ["Ses seuls diviseurs : 1 et 7.", "Impossible de l'écrire a × b avec a, b > 1."],
                    },
                    {
                      title: "1 n'est pas premier",
                      variant: "warning",
                      lines: ["Il n'a qu'un seul diviseur : lui-même.", "Un premier en exige exactement deux."],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "**Définition :** un entier n ≥ 2 est premier s'il a exactement deux diviseurs, 1 et lui-même. Les premiers à connaître jusqu'à 50 : **2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47**. 2 est le seul premier pair.",
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Tester si un nombre est premier : jusqu'à √n seulement",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "Il suffit de tester les diviseurs premiers inférieurs ou égaux à √n. Pourquoi ? Si n avait un diviseur d > √n, alors n ÷ d serait un diviseur inférieur à √n, qu'on aurait déjà trouvé. On teste donc seulement le « petit côté ».",
                    },
                    {
                      type: "paragraph",
                      text: "Exemple : 113 est-il premier ? √113 ≈ 10,6, donc tester 2, 3, 5, 7. Aucun ne divise 113, donc 113 est premier.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "Puisque les premiers sont les briques de base, tout entier supérieur ou égal à 2 se « décortique » en un produit de ces briques : c'est la **décomposition en facteurs premiers**. On divise successivement par le plus petit premier qui divise (2, puis 3, puis 5…) jusqu'à tomber sur 1.",
                },
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "360",
                      variant: "info",
                      lines: ["360 ÷ 2 = 180 ÷ 2 = 90 ÷ 2 = 45", "45 ÷ 3 = 15 ÷ 3 = 5 ÷ 5 = 1", "**360 = 2³ × 3² × 5**"],
                    },
                    {
                      title: "252",
                      variant: "info",
                      lines: ["252 ÷ 2 = 126 ÷ 2 = 63", "63 ÷ 3 = 21 ÷ 3 = 7 ÷ 7 = 1", "**252 = 2² × 3² × 7**"],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "💡 Une décomposition unique : le théorème fondamental de l'arithmétique",
                  text: "Tout entier n ≥ 2 s'écrit de façon unique comme produit de premiers (à l'ordre des facteurs près). C'est pourquoi 1 est exclu des premiers : sinon 6 = 2 × 3 = 1 × 2 × 3 = 1² × 2 × 3… aurait une infinité de décompositions. En comparant deux décompositions, on lit directement ce que les nombres ont en commun (le PGCD) et ce qu'il faut réunir pour les couvrir tous les deux (le PPCM).",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "PGCD et PPCM : les deux outils du concours",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "PGCD : le plus grand facteur commun",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "**PGCD(a, b)** est le plus grand entier qui divise à la fois a et b (on travaille avec des entiers naturels non nuls). Reprenons les 84 feuilles et 126 crayons : le nombre de lots doit diviser 84 et 126, et on en veut le maximum, donc on cherche le PGCD.",
                    },
                    {
                      type: "cardGrid",
                      columns: 3,
                      cards: [
                        {
                          title: "Listing",
                          variant: "info",
                          lines: ["Petits nombres.", "Lister les diviseurs, prendre le plus grand commun.", "PGCD(12, 8) → 1, 2, 4 → 4"],
                        },
                        {
                          title: "Décomposition",
                          variant: "info",
                          lines: ["Nombres moyens.", "Facteurs communs, exposant minimum.", "Détail dans l'onglet Méthode."],
                        },
                        {
                          title: "Euclide",
                          variant: "info",
                          lines: ["Grands nombres.", "Méthode universelle.", "Détail dans l'onglet Méthode."],
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "**Premiers entre eux :** a et b sont premiers entre eux quand PGCD(a, b) = 1. Cela ne veut pas dire que chacun est premier : 8 et 15 sont premiers entre eux (PGCD = 1) bien qu'aucun ne soit premier. Application directe : rendre une fraction irréductible en divisant numérateur et dénominateur par leur PGCD (36/48, PGCD = 12, donne 3/4 ; voir la [fiche N°3](fiche:fractions-decimaux)).",
                    },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "PPCM : le plus petit multiple commun",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "**PPCM(a, b)** est le plus petit entier strictement positif multiple à la fois de a et de b : l'image miroir du PGCD. Pour les deux bus (8 min et 12 min), les multiples de 8 sont 8, 16, 24… ; ceux de 12 sont 12, 24… ; le premier commun est 24.",
                    },
                    {
                      type: "formulaBlock",
                      lines: [
                        "**PPCM(a, b) = (a × b) ÷ PGCD(a, b)**",
                        "PGCD(8, 12) = 4 → PPCM = (8 × 12) ÷ 4 = 24",
                        "Par décomposition : 8 = 2³, 12 = 2² × 3 → PPCM = 2³ × 3 = 24",
                      ],
                      note: "Pourquoi pas a × b ? 8 × 12 = 96 est bien un multiple commun, mais pas le plus petit. Diviser par le PGCD retire ce que a et b ont déjà en commun.",
                    },
                    {
                      type: "paragraph",
                      text: "**Les 3 situations où le PPCM est la clé :** additionner des fractions à dénominateurs différents (1/8 + 1/12 → dénominateur commun PPCM(8, 12) = 24, soit 3/24 + 2/24 = 5/24) ; les problèmes de conjonction (bus, navettes, carillons, engrenages : deux phénomènes périodiques coïncident au PPCM des périodes) ; trouver le plus petit dénominateur commun.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "**Formule à retenir :** PGCD(a, b) × PPCM(a, b) = a × b. Elle sert à calculer l'un quand on connaît l'autre, et à vérifier ses résultats.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : croire que 1 est premier",
              badge: "Très fréquent",
              faux: "« 1 est premier car il n'est divisible que par 1. »",
              vrai: "1 est exclu des premiers : un premier a exactement deux diviseurs distincts (1 et lui-même), or 1 n'en a qu'un.",
              methode: "Cette convention garantit l'unicité de la décomposition en facteurs premiers.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : confondre PGCD et PPCM",
              badge: "Inversion fréquente",
              faux: "« Pour additionner 1/12 + 1/8, j'utilise le PGCD comme dénominateur commun. »",
              vrai: "Le dénominateur commun est le PPCM. PPCM(12, 8) = 24, donc 1/12 + 1/8 = 2/24 + 3/24 = 5/24.",
              methode: "PGCD = le plus grand qui divise les deux → fraction irréductible. PPCM = le plus petit multiple commun → dénominateur commun.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : tester la primalité trop tôt",
              badge: "Méthode incomplète",
              faux: "« 91 n'est divisible ni par 2, ni par 3, ni par 5, donc 91 est premier. »",
              vrai: "√91 ≈ 9,5 : il faut tester jusqu'à 9, donc aussi 7. Or 91 = 7 × 13. 91 n'est pas premier.",
              methode: "Tester tous les premiers inférieurs ou égaux à √n. Ne pas s'arrêter à 5.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : mal lire l'algorithme d'Euclide",
              badge: "Erreur de procédure",
              faux: "S'arrêter au reste 1, ou lire le quotient de la dernière ligne comme PGCD.",
              vrai: "On s'arrête quand le reste est 0. Le PGCD est le dernier reste non nul, c'est-à-dire le diviseur de la dernière ligne.",
              methode: "La justification repose sur PGCD(a, b) = PGCD(b, r).",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "Le mot « PGCD » n'apparaît pas à l'école, mais la notion de diviseur commun s'y construit, et le jury valorise ce lien.\n\n**Cycles 2 et 3 :** les tables de multiplication font découvrir implicitement la divisibilité (18 est dans la table de 2, 3, 6, 9). Le programme (BOEN 2020) introduit explicitement en cycle 3 les notions de multiple et de diviseur, les critères de divisibilité par 2, 3, 4, 5, 9 et 10, et la simplification de fractions par diviseurs communs visibles (sans PGCD formel).\n\n**Justifier un critère dès le CM2 :** « 100 = 99 + 1 = 33 × 3 + 1, donc 100 a le même reste que 1 dans la division par 3. » Expliquer pourquoi un critère fonctionne, c'est déjà enseigner le raisonnement. L'arithmétique est un domaine privilégié pour le raisonnement par disjonction de cas, par l'absurde ou par contre-exemple, ce que le jury apprécie.",
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
              text: "L'algorithme d'Euclide, la décomposition en facteurs premiers, le calcul du PPCM, et le test de primalité. Maîtrisez-les dans cet ordre : chacun s'appuie sur le précédent, et chacun se termine par une vérification.",
            },
            {
              type: "callout",
              variant: "info",
              title: "Quelle méthode pour le PGCD ?",
              text: "Euclide et la décomposition donnent le même résultat, mais ne s'utilisent pas dans les mêmes cas. **Euclide** : nombres grands ou difficiles à décomposer, ou quand on veut seulement le PGCD. **Décomposition** : nombres petits, ou quand l'énoncé demande aussi le PPCM, ou demande explicitement de décomposer. Règle d'or : si l'énoncé dit « décomposer en facteurs premiers », la décomposition est imposée ; sinon, au-delà de ~100, préférez Euclide.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Calculer un PGCD avec l'algorithme d'Euclide",
              intro:
                "**Question typique :** « Calculer le PGCD de 252 et 168, puis simplifier 168/252. » Principe : PGCD(a, b) = PGCD(b, r) où r est le reste de la division de a par b. On répète jusqu'à un reste nul.",
              steps: [
                {
                  number: "1",
                  text: "**Identifier a et b (a ≥ b)**, le plus grand en dividende.",
                  example: { lines: ["a = 252, b = 168"] },
                },
                {
                  number: "2",
                  text: "**Diviser a par b**, écrire a = b × q + r.",
                  example: { lines: ["252 = 168 × 1 + 84 (reste 84)"] },
                },
                {
                  number: "3",
                  text: "**Remplacer (a, b) par (b, r) et répéter** jusqu'au reste 0.",
                  example: { lines: ["168 = 84 × 2 + 0 → STOP"] },
                },
                {
                  number: "4",
                  text: "**Conclure : le PGCD est le dernier reste non nul.**",
                  example: { lines: ["PGCD(252, 168) = 84", "168/252 = 2/3 (irréductible)"] },
                  warn: "⚠️ Le PGCD est le diviseur de la dernière ligne (84), pas le quotient (2).",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Calculer PGCD(48, 36) par l'algorithme d'Euclide.",
              correction: [
                { type: "line", text: "48 = 36 × 1 + 12, puis 36 = 12 × 3 + 0. PGCD = dernier reste non nul = **12**." },
                { type: "note", text: "Le PGCD est 12 (le diviseur de la dernière ligne), pas 3 (le quotient)." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Décomposer en facteurs premiers, en déduire PGCD et PPCM",
              intro:
                "**Question typique :** « Décomposer 360 et 126. En déduire leur PGCD et leur PPCM. » Idée : une fois les décompositions faites, PGCD et PPCM se lisent d'un coup.",
              steps: [
                {
                  number: "1",
                  text: "**Diviser par 2, puis 3, puis 5…** en s'aidant des critères, jusqu'à 1.",
                  example: { lines: ["360 = 2³ × 3² × 5", "126 = 2 × 3² × 7"] },
                },
                {
                  number: "2",
                  text: "**PGCD : facteurs communs, exposant minimum.**",
                  example: { lines: ["Communs : 2 (min 1), 3 (min 2)", "PGCD = 2 × 3² = 18"] },
                },
                {
                  number: "3",
                  text: "**PPCM : tous les facteurs, exposant maximum.**",
                  example: { lines: ["2 (max 3), 3 (max 2), 5, 7", "PPCM = 2³ × 3² × 5 × 7 = 2 520"] },
                },
                {
                  number: "4",
                  text: "**Vérifier avec PGCD × PPCM = a × b.**",
                  example: { lines: ["18 × 2 520 = 45 360 = 360 × 126 ✓"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "On donne 12 = 2² × 3 et 18 = 2 × 3². Donner PGCD et PPCM par lecture des décompositions.",
              correction: [
                { type: "line", text: "PGCD : exposants minimum → 2¹ × 3¹ = **6**. PPCM : exposants maximum → 2² × 3² = **36**." },
                { type: "note", text: "Vérification : 6 × 36 = 216 = 12 × 18 ✓." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Résoudre un problème de conjonction (PPCM)",
              intro:
                "**Question typique :** « Deux navettes partent toutes les 12 et 8 minutes, ensemble à 8h00. Quand repartiront-elles ensemble ? » Idée : la coïncidence a lieu au PPCM des périodes.",
              steps: [
                {
                  number: "1",
                  text: "**Reconnaître qu'on cherche le PPCM des périodes.**",
                  example: { lines: ["Prochaine coïncidence : PPCM(12, 8) minutes"] },
                },
                {
                  number: "2",
                  text: "**Calculer le PPCM** (formule ou décomposition).",
                  example: { lines: ["PGCD(12, 8) = 4", "PPCM = (12 × 8) ÷ 4 = 24 minutes"] },
                },
                {
                  number: "3",
                  text: "**Répondre dans le contexte.**",
                  example: { lines: ["Première coïncidence : 8h24"] },
                  warn: "⚠️ Attention au décalage de comptage : inclure ou non le départ selon ce que demande l'énoncé.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Deux phares clignotent toutes les 15 s et toutes les 20 s, ensemble à un instant donné. Au bout de combien de temps coïncident-ils de nouveau ?",
              correction: [
                { type: "line", text: "PGCD(15, 20) = 5, donc PPCM = (15 × 20) ÷ 5 = 300 ÷ 5 = **60 secondes**." },
                { type: "note", text: "On cherche toujours le PPCM des deux périodes." },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Tester si un nombre est premier",
              intro: "**Question typique :** « Montrer que 137 est premier. » Idée : tester seulement les premiers inférieurs ou égaux à √n.",
              steps: [
                {
                  number: "1",
                  text: "**Calculer √n et lister les premiers à tester.**",
                  example: { lines: ["√137 ≈ 11,7 → tester 2, 3, 5, 7, 11"] },
                },
                {
                  number: "2",
                  text: "**Appliquer les critères et les divisions.**",
                  example: { lines: ["137 impair, somme 11 (pas mult. de 3),", "ne finit pas par 0/5, 137 = 7 × 19 + 4,", "137 = 11 × 12 + 5"] },
                },
                {
                  number: "3",
                  text: "**Conclure par une phrase rédigée.**",
                  example: { lines: ["137 n'est divisible par aucun premier ≤ √137,", "donc 137 est premier."] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "101 est-il premier ? Justifier brièvement.",
              correction: [
                { type: "line", text: "√101 ≈ 10, tester 2, 3, 5, 7 : 101 est impair, 1+0+1 = 2 (pas mult. de 3), ne finit pas par 0/5, 101 = 7 × 14 + 3. Aucun ne divise, donc **101 est premier**." },
                { type: "note", text: "On s'arrête à √n : inutile d'aller plus loin." },
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
              title: "Divisibilité, PGCD, PPCM, nombres premiers",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_DIVISIBILITE_PGCD_PPCM,
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
              title: "Divisibilité, PGCD, PPCM, nombres premiers",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_DIVISIBILITE_PGCD_PPCM,
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
              center: { title: "Arithmétique", subtitle: "Divisibilité · PGCD · PPCM · Premiers" },
              branches: [
                {
                  title: "Critères de divisibilité",
                  variant: "blue",
                  lines: ["2 : unités paires", "3 et 9 : somme des chiffres", "4 : deux derniers chiffres"],
                },
                {
                  title: "Nombres premiers",
                  variant: "blue",
                  lines: ["Exactement 2 diviseurs", "1 n'est pas premier", "Tester jusqu'à √n"],
                },
                {
                  title: "PGCD · Euclide",
                  variant: "green",
                  lines: ["PGCD(a, b) = PGCD(b, r)", "Dernier reste non nul", "≠ quotient de la dernière ligne"],
                },
                {
                  title: "PPCM · conjonction",
                  variant: "green",
                  lines: ["PPCM = (a × b) ÷ PGCD", "Décomposition : max des exposants", "Navettes, engrenages, bus"],
                },
                {
                  title: "Décomposition",
                  variant: "yellow",
                  lines: ["Unique (théorème fondamental)", "PGCD : min des exposants communs"],
                },
                {
                  title: "Recul primaire",
                  variant: "purple",
                  dashed: true,
                  lines: ["Distributions équitables → PGCD implicite", "Simplifier des fractions → diviseur commun"],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
