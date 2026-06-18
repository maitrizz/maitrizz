import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je connais les critères de divisibilité (2, 3, 4, 5, 9, 10) et je les applique instantanément" },
  { id: "e2", label: "Je maîtrise la division euclidienne a = b × q + r et le lien avec la divisibilité (r = 0)" },
  { id: "e3", label: "Je sais définir un nombre premier et tester si un nombre est premier (diviseurs jusqu'à √n)" },
  { id: "e4", label: "Je décompose un entier en facteurs premiers, avec la notation par exposants" },
  { id: "e5", label: "Je calcule un PGCD par l'algorithme d'Euclide et par décomposition en facteurs premiers" },
  { id: "e6", label: "Je calcule un PPCM (par formule et par décomposition) et je l'utilise dans un problème de conjonction" },
  { id: "e7", label: "Je distingue « nombre premier » et « premiers entre eux » (PGCD = 1)" },
  { id: "e8", label: "Je sais faire le lien avec l'école primaire et justifier un critère de divisibilité" },
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
  metaTitle: "Divisibilité, PGCD, PPCM, nombres premiers (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur l'arithmétique : divisibilité et critères, division euclidienne, nombres premiers, décomposition en facteurs premiers, PGCD (algorithme d'Euclide), PPCM et problèmes de conjonction. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                  title: "Divisibilité et division euclidienne",
                  text: "Quand une division tombe juste, et que faire quand elle ne tombe pas juste.",
                },
                {
                  number: "②",
                  title: "Nombres premiers et décomposition",
                  text: "Les briques de base de tous les entiers, et le « code ADN » de chaque nombre.",
                },
                {
                  number: "③",
                  title: "Le PGCD",
                  text: "Le plus grand diviseur commun : listing, décomposition, algorithme d'Euclide.",
                },
                {
                  number: "④",
                  title: "Le PPCM",
                  text: "Le plus petit multiple commun, et son rôle clé dans les problèmes de conjonction.",
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
                      text: "**Premiers entre eux :** a et b sont premiers entre eux quand PGCD(a, b) = 1. Cela ne veut pas dire que chacun est premier : 8 et 15 sont premiers entre eux (PGCD = 1) bien qu'aucun ne soit premier. Application directe : rendre une fraction irréductible en divisant numérateur et dénominateur par leur PGCD (36/48, PGCD = 12, donne 3/4).",
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
                  number: "💡",
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
                  question: "Le nombre 4 572 est-il divisible par 3 ?",
                  options: ["Non, il est pair", "Oui, car 4+5+7+2 = 18 est divisible par 3", "Non, il faut poser la division", "On ne peut pas savoir sans calculatrice"],
                  correctIndex: 1,
                  explanation: "Critère de divisibilité par 3 : la somme des chiffres (4+5+7+2 = 18) est divisible par 3, donc 4 572 l'est aussi.",
                },
                {
                  objectifId: "e2",
                  question: "Dans la division euclidienne 47 = 5 × 9 + 2, que vaut le reste, et 5 divise-t-il 47 ?",
                  options: ["reste 9 ; oui", "reste 2 ; non", "reste 5 ; oui", "reste 2 ; oui"],
                  correctIndex: 1,
                  explanation: "Le reste est 2. Comme r ≠ 0, 5 ne divise pas 47 (la divisibilité correspond à un reste nul).",
                },
                {
                  objectifId: "e3",
                  question: "Pour tester si 113 est premier, jusqu'où faut-il tester les diviseurs ?",
                  options: ["Jusqu'à 113", "Jusqu'à 113 ÷ 2", "Jusqu'à √113 ≈ 10,6, donc 2, 3, 5, 7", "Jusqu'à 50"],
                  correctIndex: 2,
                  explanation: "Il suffit de tester les premiers inférieurs ou égaux à √n. √113 ≈ 10,6, donc 2, 3, 5, 7. Aucun ne divise 113 : il est premier.",
                },
                {
                  objectifId: "e4",
                  question: "Quelle est la décomposition en facteurs premiers de 360 ?",
                  options: ["2³ × 3² × 5", "2² × 3³ × 5", "2³ × 3 × 5²", "2 × 3² × 5 × 7"],
                  correctIndex: 0,
                  explanation: "360 = 2 × 180 = 2 × 2 × 90 = 2 × 2 × 2 × 45 = 2³ × 3² × 5 (car 45 = 9 × 5 = 3² × 5).",
                },
                {
                  objectifId: "e5",
                  question: "On calcule PGCD(90, 54) : 90 = 54 × 1 + 36, 54 = 36 × 1 + 18, 36 = 18 × 2 + 0. Que vaut le PGCD ?",
                  options: ["2", "36", "18", "90"],
                  correctIndex: 2,
                  explanation: "Le PGCD est le dernier reste non nul, soit 18 (le diviseur de la dernière ligne), et non 2 (le quotient de la dernière ligne).",
                },
                {
                  objectifId: "e6",
                  question: "Deux cloches sonnent toutes les 20 et 36 minutes, ensemble à 8h00. Quand sonneront-elles de nouveau ensemble ?",
                  options: ["À 8h36", "À 11h00 (PPCM = 180 min)", "À 9h00", "À 8h56"],
                  correctIndex: 1,
                  explanation: "PGCD(20, 36) = 4, donc PPCM = (20 × 36) ÷ 4 = 180 minutes = 3 h. Première coïncidence à 11h00.",
                },
                {
                  objectifId: "e7",
                  question: "8 et 15 sont-ils premiers entre eux ?",
                  options: ["Non, aucun des deux n'est premier", "Oui, car PGCD(8, 15) = 1", "Non, car 8 est pair", "On ne peut pas le dire"],
                  correctIndex: 1,
                  explanation: "8 = 2³ et 15 = 3 × 5 n'ont aucun facteur premier commun, donc PGCD(8, 15) = 1 : ils sont premiers entre eux, même si aucun n'est un nombre premier.",
                },
                {
                  objectifId: "e8",
                  question: "Pourquoi un nombre est-il divisible par 9 si la somme de ses chiffres l'est ?",
                  options: ["C'est une règle sans justification", "Car 10, 100, 1 000… sont des multiples de 9 plus 1", "Car 9 est impair", "Car 9 = 3 × 3"],
                  correctIndex: 1,
                  explanation: "10 = 9 + 1, 100 = 99 + 1, etc. Chaque puissance de 10 a le même reste que 1 par 9, donc le nombre a le même reste que la somme de ses chiffres.",
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
              text: "Progressez niveau par niveau. Chaque problème part d'une situation concrète, comme au concours. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Critères, diviseurs, premiers",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : critères de divisibilité",
              objectifTag: "Critères de divisibilité",
              enonce: "Un primeur reçoit une caisse de 756 fruits et veut les répartir en barquettes identiques, sans reste.",
              question:
                "a) Sans poser de division, dire si 756 est divisible par 2, 3, 4, 9. Justifier par les critères.\nb) Des barquettes de 12 fruits, est-ce possible ? Combien ?\nc) Lister tous les diviseurs de 12.",
              correction: [
                { type: "line", label: "a)", text: "unités = 6 (pair) → par 2 ✓ ; 7+5+6 = 18 div. par 3 → par 3 ✓ ; 56 = 14 × 4 → par 4 ✓ ; 18 = 2 × 9 → par 9 ✓." },
                { type: "line", label: "b)", text: "756 ÷ 12 = 63 (exact, car 63 × 12 = 756). Oui, 63 barquettes." },
                { type: "line", label: "c)", text: "12 = 2² × 3, nombre de diviseurs = (2+1)(1+1) = 6 : 1, 2, 3, 4, 6, 12." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : nombres premiers",
              objectifTag: "Tester la primalité",
              question:
                "a) Parmi 91, 97, 101, 111, lesquels sont premiers ? Détailler.\nb) Pourquoi 2 est-il le seul premier pair ?\nc) Corriger un élève qui dit « 1 est premier car il n'est divisible que par 1 ».",
              correction: [
                { type: "line", label: "a)", text: "91 = 7 × 13 → non premier ; 97 premier (tester 2, 3, 5, 7 ≤ √97) ; 101 premier (tester 2, 3, 5, 7) ; 111 = 3 × 37 → non premier." },
                { type: "line", label: "b)", text: "Tout pair autre que 2 a au moins trois diviseurs (1, 2, lui-même), donc n'est pas premier. Seul 2 reste premier." },
                { type: "line", label: "c)", text: "Un premier a exactement deux diviseurs distincts. 1 n'en a qu'un (lui-même), il est donc exclu, ce qui assure l'unicité de la décomposition." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : PGCD et décomposition",
              sub: "Application directe des méthodes",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : les carreaux de faïence",
              objectifTag: "PGCD (Euclide et décomposition)",
              enonce: "Un artisan carrele un mur de 252 cm sur 168 cm avec des carreaux carrés identiques, sans découpe, les plus grands possible.",
              question:
                "a) Pourquoi la taille du carreau doit-elle diviser 252 et 168 ? Quelle notion cherche-t-on ?\nb) Calculer PGCD(252, 168) par Euclide. Taille maximale ?\nc) Combien de carreaux en largeur, en hauteur, au total ?\nd) Vérifier le PGCD par décomposition.",
              correction: [
                { type: "line", label: "a)", text: "Pour s'ajuster sans découpe, le côté doit diviser 252 et 168 ; le plus grand possible est le PGCD." },
                { type: "line", label: "b)", text: "252 = 168 × 1 + 84 ; 168 = 84 × 2 + 0. PGCD = 84. Carreaux de 84 cm × 84 cm." },
                { type: "line", label: "c)", text: "Largeur : 252 ÷ 84 = 3 ; hauteur : 168 ÷ 84 = 2 ; total : 3 × 2 = 6 carreaux." },
                { type: "line", label: "d)", text: "252 = 2² × 3² × 7, 168 = 2³ × 3 × 7 → facteurs communs 2² × 3 × 7 = 84 ✓." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : fraction irréductible",
              objectifTag: "PGCD et simplification",
              enonce: "Une recette utilise 330 g de farine et 462 g de sucre.",
              question:
                "a) Calculer PGCD(330, 462) par Euclide.\nb) Rendre la fraction 330/462 irréductible et l'interpréter.\nc) 330 et 462 sont-ils premiers entre eux ?",
              correction: [
                { type: "line", label: "a)", text: "462 = 330 × 1 + 132 ; 330 = 132 × 2 + 66 ; 132 = 66 × 2 + 0. PGCD = 66." },
                { type: "line", label: "b)", text: "330 ÷ 66 = 5, 462 ÷ 66 = 7 → 5/7. Pour 5 parts de farine, 7 parts de sucre." },
                { type: "line", label: "c)", text: "Non : PGCD = 66 ≠ 1. On peut réduire les proportions (5 et 7) tout en gardant le rapport." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : PPCM et conjonction",
              sub: "Plusieurs outils combinés",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : les sonneries de cloches",
              objectifTag: "PPCM et conjonction",
              enonce: "La cloche de l'église sonne toutes les 20 minutes, celle de la mairie toutes les 36 minutes. Les deux sonnent ensemble à 8h00.",
              question:
                "a) À quelle heure sonneront-elles de nouveau ensemble ?\nb) Calculer PGCD(20, 36) et PPCM(20, 36) par décomposition, et vérifier avec PGCD × PPCM = a × b.\nc) Entre 8h00 et 20h00 (720 min), combien de fois sonnent-elles ensemble ?",
              correction: [
                { type: "line", label: "a)", text: "20 = 2² × 5, 36 = 2² × 3². PPCM = 2² × 3² × 5 = 180 min = 3 h → de nouveau ensemble à 11h00." },
                { type: "line", label: "b)", text: "PGCD = 2² = 4. Vérification : 4 × 180 = 720 = 20 × 36 ✓." },
                { type: "line", label: "c)", text: "Toutes les 180 min ; 720 ÷ 180 = 4, soit 5 fois en comptant 8h00 (8h, 11h, 14h, 17h, 20h)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : raisonnement niveau CRPE",
              sub: "Plusieurs outils, recul didactique",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 4 : le tournoi sportif",
              objectifTag: "PGCD, PPCM, raisonnement",
              enonce: "Une association répartit 120 garçons et 96 filles en équipes mixtes identiques (même nombre de garçons et de filles par équipe), en formant le maximum d'équipes.",
              question:
                "a) Pourquoi le nombre d'équipes est-il un diviseur commun de 120 et 96, et pourquoi le plus grand ?\nb) Calculer PGCD(120, 96) par Euclide.\nc) Combien d'équipes ? Combien de garçons et de filles par équipe ?\nd) Décomposer 120 et 96, puis calculer le PPCM. Donner un contexte sportif où il interviendrait.",
              correction: [
                { type: "line", label: "a)", text: "n équipes répartissent 120 et 96 en parts égales, donc n divise les deux. On cherche le maximum : le PGCD." },
                { type: "line", label: "b)", text: "120 = 96 × 1 + 24 ; 96 = 24 × 4 + 0. PGCD = 24." },
                { type: "line", label: "c)", text: "24 équipes, 120 ÷ 24 = 5 garçons et 96 ÷ 24 = 4 filles par équipe." },
                { type: "line", label: "d)", text: "120 = 2³ × 3 × 5, 96 = 2⁵ × 3 → PPCM = 2⁵ × 3 × 5 = 480. Exemple : si A joue toutes les 120 min et B toutes les 96 min, elles joueront ensemble après 480 min (8 h)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 5 : les colliers de perles (recul didactique)",
              objectifTag: "PGCD et obstacles d'élèves",
              enonce: "Une enseignante a 210 perles rouges et 315 perles bleues. Elle veut des colliers identiques utilisant toutes les perles, avec le plus grand nombre de perles par collier.",
              question:
                "a) Décomposer 210 et 315, puis calculer PGCD(210, 315). Combien de colliers ? Contenu de chacun ?\nb) Vérifier par Euclide.\nc) Quels obstacles pour des élèves de CE2, et comment les aider sans introduire le PGCD formel ?",
              correction: [
                { type: "line", label: "a)", text: "210 = 2 × 3 × 5 × 7, 315 = 3² × 5 × 7 → communs 3 × 5 × 7 = 105. 105 colliers de 2 rouges et 3 bleues (210 ÷ 105 = 2, 315 ÷ 105 = 3)." },
                { type: "line", label: "b)", text: "315 = 210 × 1 + 105 ; 210 = 105 × 2 + 0 → PGCD = 105 ✓." },
                { type: "line", label: "c)", text: "Obstacles : la divisibilité n'est pas formalisée au CE2, et trouver le maximum de colliers ne va pas de soi. Aide : commencer avec de petits nombres (6 rouges, 9 bleues), manipuler des jetons, puis généraliser. La manipulation construit le sens « multiple/diviseur » avant les mots." },
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
              text: "Cet exercice reproduit le format et les exigences d'un sujet de concours. Comptez 20 à 25 minutes, en conditions réelles, avec justifications complètes.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 6 : arithmétique et engrenages",
              objectifTag: "PGCD, PPCM, recul primaire",
              enonce:
                "Dans un atelier, un mécanisme comporte deux engrenages : la roue A possède 48 dents, la roue B en possède 36. Au départ, une dent de chaque roue sont en contact.",
              question:
                "1.1 Décomposer 48 et 36 en facteurs premiers.\n1.2 Calculer PGCD(48, 36) par deux méthodes (Euclide et décomposition) et vérifier qu'elles coïncident.\n1.3 Calculer PPCM(48, 36). Que représente-t-il ici ?\n1.4 Au bout de combien de contacts les deux dents se retrouvent-elles ? Combien de tours chaque roue aura-t-elle faits ?\n2.1 Expliquer à un élève de CM2 pourquoi 48 est divisible par 3.\n2.2 Citer deux problèmes du cycle 3 qui construisent la notion de diviseur commun, et leur intérêt selon le BOEN 2020.",
              correction: [
                { type: "line", label: "1.1", text: "48 = 2⁴ × 3 ; 36 = 2² × 3²." },
                { type: "line", label: "1.2", text: "Euclide : 48 = 36 × 1 + 12, 36 = 12 × 3 + 0 → PGCD = 12. Décomposition : 2² × 3 = 12 ✓." },
                { type: "line", label: "1.3", text: "PPCM = (48 × 36) ÷ 12 = 1 728 ÷ 12 = 144 (ou 2⁴ × 3² = 144). C'est le nombre minimal de contacts pour que les deux dents se retrouvent." },
                { type: "line", label: "1.4", text: "Après 144 contacts : roue A → 144 ÷ 48 = 3 tours, roue B → 144 ÷ 36 = 4 tours." },
                { type: "line", label: "2.1", text: "10 = 9 + 1, donc 10 a le même reste que 1 par 3 ; un nombre a le même reste que la somme de ses chiffres. Pour 48 : 4 + 8 = 12, divisible par 3, donc 48 l'est aussi." },
                { type: "line", label: "2.2", text: "Distributions équitables (« répartir 24 pommes et 36 poires en lots identiques » → diviseur commun) et problèmes de conjonction (« deux trains toutes les 12 et 15 min » → multiple commun). Le BOEN 2020 y voit un appui pour développer le raisonnement dans des contextes concrets." },
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
              title: "Erreur type · Exercice 7 : arrêt de l'algorithme d'Euclide",
              objectifTag: "PGCD (Euclide)",
              enonce: "**Copie d'un candidat :** PGCD(90, 54).\n90 = 54 × 1 + 36 · 54 = 36 × 1 + 18 · 36 = 18 × 2 + 0.\n*Réponse produite :* « PGCD = 2 ».",
              question: "a) Identifier l'erreur.\nb) Donner la réponse correcte et la règle.",
              correction: [
                { type: "paragraph", text: "**Erreur : le quotient lu à la place du diviseur.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Le candidat a écrit 2, le quotient de la dernière ligne, au lieu du diviseur 18." },
                    { text: "Le PGCD est le dernier reste non nul, ici 18 (apparu à l'avant-dernière ligne)." },
                    { text: "PGCD(90, 54) = 18. Vérification : 18 divise 90 (= 5 × 18) et 54 (= 3 × 18)." },
                  ],
                },
                { type: "note", text: "Réflexe : chercher le dernier reste non nul dans la colonne des restes, jamais le quotient." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 8 : décomposition incomplète",
              objectifTag: "Décomposition en facteurs premiers",
              enonce: "**Copie d'un candidat :** Décomposer 420.\n*Réponse produite :* « 420 = 2 × 2 × 105 = 4 × 105 = 4 × 5 × 21 = 20 × 21 ».",
              question: "a) Identifier l'erreur.\nb) Donner la décomposition correcte.",
              correction: [
                { type: "paragraph", text: "**Erreur : la décomposition n'est pas terminée.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "21 = 3 × 7 n'est pas premier : le candidat s'est arrêté trop tôt, et 20 n'est pas premier non plus." },
                    { text: "On continue jusqu'à ce que tous les facteurs soient premiers." },
                    { text: "420 = 2² × 3 × 5 × 7. Vérification : 4 × 3 × 5 × 7 = 420 ✓." },
                  ],
                },
                { type: "note", text: "La décomposition est finie quand chaque facteur figure dans la liste des premiers (2, 3, 5, 7, 11…)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 9 : « premiers entre eux » mal compris",
              objectifTag: "Premiers entre eux",
              enonce: "**Copie d'un candidat :** « Montrer que 8 et 15 sont premiers entre eux ».\n*Réponse produite :* « 8 = 2³ et 15 = 3 × 5 ne sont pas premiers, donc ils ne sont pas premiers entre eux ».",
              question: "a) Identifier l'erreur de vocabulaire.\nb) Donner le raisonnement correct.",
              correction: [
                { type: "paragraph", text: "**Erreur : confusion entre « nombre premier » et « premiers entre eux ».**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "« Premiers entre eux » ne veut pas dire que chaque nombre est premier." },
                    { text: "Deux nombres sont premiers entre eux quand leur PGCD vaut 1." },
                    { text: "8 = 2³ et 15 = 3 × 5 n'ont aucun facteur commun → PGCD = 1 → premiers entre eux, même si aucun n'est premier." },
                  ],
                },
                { type: "note", text: "« Premiers entre eux » décrit une relation entre deux nombres (PGCD = 1), pas une propriété de chacun." },
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
                  question: "Qu'est-ce que le PGCD de deux entiers ? Que signifie PGCD(a, b) = 1 ?",
                  answer:
                    "Le PGCD est le plus grand entier qui divise à la fois a et b. PGCD(a, b) = 1 signifie que a et b sont premiers entre eux. Application : diviser numérateur et dénominateur par le PGCD rend une fraction irréductible.",
                },
                {
                  question: "Énoncer l'algorithme d'Euclide.",
                  answer:
                    "On utilise PGCD(a, b) = PGCD(b, r), où r est le reste de la division euclidienne de a par b. On répète en remplaçant (a, b) par (b, r) jusqu'à un reste nul. Le PGCD est le dernier reste non nul (le diviseur de la dernière ligne).",
                  astuce: "Ne pas confondre le PGCD avec le quotient de la dernière ligne.",
                },
                {
                  question: "Quelle formule lie PGCD et PPCM ?",
                  answer:
                    "PGCD(a, b) × PPCM(a, b) = a × b. Donc PPCM(a, b) = (a × b) ÷ PGCD(a, b). Exemple : PGCD(12, 8) = 4 → PPCM = 96 ÷ 4 = 24.",
                },
                {
                  question: "Définir un nombre premier. 1 est-il premier ?",
                  answer:
                    "Un entier n ≥ 2 est premier s'il a exactement deux diviseurs : 1 et lui-même. 1 n'est pas premier (un seul diviseur). 2 est le seul premier pair. À connaître : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47.",
                },
                {
                  question: "Comment tester si n est premier ?",
                  answer:
                    "Tester la divisibilité par tous les premiers inférieurs ou égaux à √n. Exemple : 113, √113 ≈ 10,6, tester 2, 3, 5, 7 ; aucun ne divise, donc 113 est premier.",
                  astuce: "Ne pas s'arrêter avant √n.",
                },
                {
                  question: "Critère de divisibilité par 9, et pourquoi marche-t-il ?",
                  answer:
                    "Un entier est divisible par 9 si la somme de ses chiffres l'est. Justification : 10 = 9 + 1, 100 = 99 + 1… chaque puissance de 10 a le même reste que 1 par 9, donc le nombre a le même reste que la somme de ses chiffres.",
                },
                {
                  question: "Comment lire PGCD et PPCM sur les décompositions en facteurs premiers ?",
                  answer:
                    "PGCD : facteurs communs avec l'exposant minimum. PPCM : tous les facteurs avec l'exposant maximum. Exemple : 360 = 2³ × 3² × 5 et 252 = 2² × 3² × 7 → PGCD = 2² × 3² = 36, PPCM = 2³ × 3² × 5 × 7 = 2 520.",
                },
                {
                  question: "« Premiers entre eux » : définition et exemple.",
                  answer:
                    "a et b sont premiers entre eux quand PGCD(a, b) = 1. Exemple : 8 = 2³ et 15 = 3 × 5 n'ont aucun facteur commun, donc PGCD = 1. Ils sont premiers entre eux sans être des nombres premiers.",
                },
                {
                  question: "À quoi sert le PPCM dans un problème de conjonction ?",
                  answer:
                    "Pour deux phénomènes périodiques (navettes, engrenages, carillons…), le PPCM des périodes donne le premier instant où ils coïncident de nouveau. Exemple : bus toutes les 8 et 12 min → PPCM = 24 min.",
                },
                {
                  question: "Que dit le théorème fondamental de l'arithmétique ?",
                  answer:
                    "Tout entier n ≥ 2 s'écrit de façon unique comme produit de nombres premiers (à l'ordre près). Exemple : 60 = 2² × 3 × 5. C'est pourquoi 1 est exclu des premiers : sinon la décomposition ne serait plus unique.",
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
