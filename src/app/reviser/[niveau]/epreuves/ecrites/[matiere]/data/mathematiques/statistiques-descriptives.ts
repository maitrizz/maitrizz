import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je distingue caractère quantitatif et qualitatif, et je sais pourquoi on ne calcule pas de moyenne pour un caractère qualitatif" },
  { id: "e2", label: "Je construis un tableau d'effectifs avec fréquences (%) et effectifs cumulés" },
  { id: "e3", label: "Je calcule la moyenne x̄ = Σ(nᵢ × xᵢ) ÷ N, en divisant par l'effectif total" },
  { id: "e4", label: "Je détermine la médiane (rang médian, cas N pair et impair), après avoir trié la série" },
  { id: "e5", label: "Je calcule Q1, Q3 et l'écart interquartile, en précisant la méthode" },
  { id: "e6", label: "Je trace une boîte à moustaches avec les 5 valeurs clés sur un axe gradué légendé" },
  { id: "e7", label: "Je choisis le bon graphique selon les données et je repère les pièges (axe tronqué, classes inégales)" },
  { id: "e8", label: "Je sais pourquoi la médiane est plus robuste que la moyenne en présence de valeurs extrêmes" },
];

export const ficheStatistiquesDescriptives: Fiche = {
  slug: "statistiques-descriptives",
  matiere: "mathematiques",
  numero: 11,
  partie: "Partie 2 : Organisation, données, fonctions",
  title: "Statistiques descriptives",
  subtitle:
    "Séries statistiques · effectifs et fréquences · représentations graphiques · indicateurs de position (moyenne, médiane, quartiles) · dispersion · lecture critique",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème B", variant: "info" },
  ],
  metaTitle: "Statistiques descriptives (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur les statistiques : effectifs et fréquences, moyenne, médiane, quartiles, écart interquartile, boîte à moustaches, choix du graphique et lecture critique. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                  title: "Vocabulaire et tableaux",
                  text: "Population, caractère, effectifs, fréquences et effectifs cumulés.",
                },
                {
                  number: "②",
                  title: "Représentations graphiques",
                  text: "Barres, histogramme, camembert, boîte à moustaches : le bon graphique au bon endroit.",
                },
                {
                  number: "③",
                  title: "Indicateurs de position",
                  text: "Mode, médiane, moyenne : où se situe le centre de la série ?",
                },
                {
                  number: "④",
                  title: "Quartiles et dispersion",
                  text: "Q1, Q3, écart interquartile, boîte à moustaches : la série est-elle homogène ?",
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
              title: "Pourquoi les statistiques ?",
              text: "Un journal titre : « Le salaire moyen est de 2 600 € nets. » Pourtant la majorité gagne moins. Pourquoi ? La moyenne est tirée vers le haut par les très hauts salaires. La médiane (environ 1 850 €) est bien plus représentative du salaire typique.\n\nAutre situation : une évaluation de 28 élèves, moyenne 12,5/20. Mais les élèves sont-ils très dispersés (de 2 à 20) ou homogènes (de 10 à 15) ? Les indicateurs de dispersion répondent. Les statistiques sont omniprésentes au CRPE : tableau, graphique, calcul d'indicateurs, interprétation critique. La maîtrise de la médiane, des quartiles et de la boîte à moustaches est discriminante.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Vocabulaire et tableaux",
              blocks: [
                {
                  type: "table",
                  headers: ["Terme", "Définition", "Exemple (notes sur 20)"],
                  rows: [
                    ["Population", "ensemble des individus étudiés", "la classe de 28 élèves"],
                    ["Caractère", "propriété mesurée sur chaque individu", "la note à l'évaluation"],
                    ["Quantitatif", "valeur numérique (moyenne possible)", "14/20"],
                    ["Qualitatif", "catégorie (pas de moyenne)", "couleur des yeux"],
                    ["Effectif nᵢ", "nombre d'individus ayant la valeur xᵢ", "5 élèves ont eu 14"],
                    ["Effectif total N", "taille de la population = Σ nᵢ", "N = 28"],
                    ["Effectif cumulé", "somme des effectifs jusqu'à xᵢ inclus", "jusqu'à 14 : 23 élèves"],
                    ["Fréquence fᵢ", "fᵢ = nᵢ ÷ N (entre 0 et 1)", "5/28 ≈ 17,9 %"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Caractère qualitatif ordonné",
                  text: "Les tailles de vêtements (XS, S, M, L, XL) se classent mais ne se moyennent pas : on ne calcule jamais une « taille moyenne ». La somme des fréquences vaut toujours 1 (ou 100 %) ; sinon, il y a une erreur dans le tableau.",
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "**Deux formats de tableau.** Données discrètes (valeurs isolées) : une colonne par valeur. Données continues (tailles, durées) : on regroupe en **classes** [a ; b[, et on utilise le **centre cᵢ = (borne inf. + borne sup.) ÷ 2** pour approximer la moyenne.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Les représentations graphiques",
              blocks: [
                {
                  type: "table",
                  headers: ["Graphique", "Quand l'utiliser", "Attention"],
                  rows: [
                    ["Diagramme en barres", "qualitatif ou quantitatif discret", "les barres ne se touchent pas"],
                    ["Histogramme", "données groupées en classes (continu)", "les barres se touchent ; surface ∝ effectif si classes inégales"],
                    ["Diagramme circulaire", "répartition en % de catégories", "peu lisible au-delà de 6 secteurs"],
                    ["Boîte à moustaches", "comparer la dispersion de séries", "nécessite min, Q1, médiane, Q3, max"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Histogramme à classes inégales",
                  text: "Quand les classes n'ont pas la même largeur, c'est la **surface** de la barre (hauteur × largeur) qui est proportionnelle à l'effectif, pas la hauteur. On utilise alors la densité : hauteur = fréquence ÷ largeur de classe. Une barre [0 ; 5[ de hauteur 4 (effectif 20) et une barre [5 ; 15[ de hauteur 4 (effectif 40) n'ont pas le même effectif.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Les indicateurs de position",
              blocks: [
                {
                  type: "table",
                  headers: ["Indicateur", "Définition", "Sur 28 élèves", "Sensible aux extrêmes ?"],
                  rows: [
                    ["Mode", "valeur d'effectif le plus élevé", "12 (effectif 8)", "non"],
                    ["Médiane", "coupe la série triée en deux moitiés", "12", "non"],
                    ["Moyenne x̄", "x̄ = Σ(nᵢ × xᵢ) ÷ N", "352 ÷ 28 ≈ 12,57", "oui"],
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "La médiane : règle pair / impair",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "N impair : médiane = valeur du rang (N + 1) ÷ 2",
                        "N pair : demi-somme des deux rangs centraux N/2 et N/2 + 1",
                        "Toujours trier la série avant de chercher le rang.",
                      ],
                      note: "Sur 28 élèves : rangs 14 et 15, tous deux dans la tranche 12 → médiane = 12.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Moyenne sensible aux extrêmes",
                  text: "Un seul élève à 20/20 ferait monter la moyenne mais laisserait la médiane inchangée. Pour les salaires ou les prix immobiliers, la médiane est toujours plus représentative.",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Quartiles, dispersion et boîte à moustaches",
              blocks: [
                {
                  type: "paragraph",
                  text: "Les quartiles découpent la série triée en quatre parts de 25 %. Méthode du programme cycle 4, attendue au CRPE : **Q1 = médiane de la moitié inférieure**, **Q3 = médiane de la moitié supérieure** (Q2 = médiane).",
                },
                {
                  type: "table",
                  headers: ["Indicateur", "Formule", "Sur 28 élèves"],
                  rows: [
                    ["Étendue", "max − min", "18 − 8 = 10"],
                    ["Écart interquartile (EIQ)", "Q3 − Q1", "14 − 11 = 3"],
                    ["Variance (Seconde)", "Σ nᵢ × (xᵢ − x̄)² ÷ N", "≈ 5,82"],
                    ["Écart-type (Seconde)", "√variance", "≈ 2,41"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Variance et écart-type : programme Seconde",
                  text: "L'étendue, les quartiles et l'écart interquartile relèvent du cycle 4. La variance et l'écart-type relèvent du programme de Seconde : attendus au CRPE M2, mais à retirer lors de la future dérivation L3.",
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "La boîte à moustaches : 5 valeurs clés",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "min · Q1 · médiane · Q3 · max",
                        "Sur 28 élèves : 8 · 11 · 12 · 14 · 18 (EIQ = 3)",
                      ],
                      note: "La boîte contient les 50 % centraux. Comparer deux boîtes : regarder la position (médiane) ET la dispersion (longueur de la boîte).",
                    },
                    {
                      type: "paragraph",
                      text: "Exemple comparatif : une classe B avec médiane 14 et EIQ 7 a de meilleurs résultats centraux qu'une classe A (médiane 12, EIQ 3), mais elle est bien moins homogène. On ne peut pas dire que B est « meilleure » sans préciser la dispersion.",
                    },
                  ],
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : diviser par le nombre de valeurs distinctes",
              badge: "Très fréquent",
              faux: "Notes 8, 10, 12, 14 d'effectifs 3, 5, 8, 4 : moyenne = (8 + 10 + 12 + 14) ÷ 4.",
              vrai: "x̄ = (3 × 8 + 5 × 10 + 8 × 12 + 4 × 14) ÷ 20 = 226 ÷ 20 = 11,3.",
              methode: "La formule est Σ nᵢ × xᵢ ÷ N. Diviser par N (effectif total), jamais par le nombre de valeurs.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : confondre rang et valeur pour la médiane",
              badge: "Très fréquent",
              faux: "Série 4, 7, 9, 12, 15 : « rang 3, donc médiane = 3 ».",
              vrai: "Rang médian = 3, et la valeur au rang 3 est 9 : la médiane est 9.",
              methode: "Le rang est la position ; la valeur est le nombre écrit à cette position. Ne pas les confondre.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : oublier de trier avant la médiane",
              badge: "Classique",
              faux: "Série brute 12, 4, 18, 7, 9 : valeur centrale = 18.",
              vrai: "Série triée 4, 7, 9, 12, 18 : valeur centrale = 9.",
              methode: "Toujours trier avant de chercher la médiane. Un tableau d'effectifs est déjà trié.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : lire la hauteur d'un histogramme (classes inégales)",
              badge: "Discriminant",
              faux: "Classes [0 ; 5[ et [5 ; 15[ de même hauteur 4 : « même effectif ».",
              vrai: "Effectif ∝ surface : 4 × 5 = 20 contre 4 × 10 = 40. La seconde classe a deux fois plus d'individus.",
              methode: "Classes inégales : utiliser la densité de fréquence (hauteur = fréquence ÷ largeur).",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école : le regard du futur enseignant",
              text: "Au cycle 2, les élèves organisent des données dans des tableaux simples et les représentent par des pictogrammes ou des diagrammes en barres, sans calcul d'indicateur : l'enjeu est de lire et communiquer des données.\n\nAu cycle 3, ils lisent des graphiques (barres, circulaires), calculent une moyenne arithmétique simple et rencontrent la notion de médiane, et repèrent des valeurs aberrantes.\n\nCe que le CRPE attend : expliquer à un élève de CM2 pourquoi « 5 + 9 + 12 + 14 + 20 ÷ 5 = 12 » est faux (parenthèses manquantes, priorités) ; construire une situation concrète pour distinguer moyenne et médiane (les salaires d'une entreprise où un dirigeant tire la moyenne vers le haut).",
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
              title: "Un fil rouge pour toute la méthode",
              text: "Chaque savoir-faire est illustré sur le même exemple : 28 élèves, notes de 8 à 18 (effectifs 3, 5, 8, 7, 3, 2). Reproduisez le tableau au brouillon, le résultat vient tout seul. Chaque étape se termine par une vérification.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Calculer la moyenne d'un tableau d'effectifs",
              intro:
                "**Question type :** « Calculer la note moyenne de la classe, arrondie au centième. »",
              steps: [
                {
                  number: "1",
                  text: "**Calculer chaque produit nᵢ × xᵢ.**",
                  example: { lines: ["24, 50, 96, 98, 48, 36"] },
                },
                {
                  number: "2",
                  text: "**Sommer les produits et lire N.**",
                  example: { lines: ["Σ nᵢ × xᵢ = 352 ; N = 28"] },
                },
                {
                  number: "3",
                  text: "**Diviser par N.**",
                  example: { lines: ["x̄ = 352 ÷ 28 ≈ 12,57"] },
                  warn: "⚠️ Diviser par N = 28, jamais par 6 (le nombre de valeurs distinctes).",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Notes 10 (×3) et 14 (×5). Calculer la moyenne.",
              correction: [
                { type: "line", text: "(3 × 10 + 5 × 14) ÷ 8 = (30 + 70) ÷ 8 = 100 ÷ 8 = **12,5**." },
                { type: "note", text: "On divise par l'effectif total 8, pas par 2." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Trouver la médiane avec les effectifs cumulés",
              intro:
                "**Question type :** « Déterminer la médiane (28 élèves). Justifier la démarche. »",
              steps: [
                {
                  number: "1",
                  text: "**Calculer les effectifs cumulés.**",
                  example: { lines: ["3, 8, 16, 23, 26, 28"] },
                },
                {
                  number: "2",
                  text: "**Calculer N/2 et repérer les rangs centraux.**",
                  example: { lines: ["N = 28 (pair) → rangs 14 et 15"] },
                },
                {
                  number: "3",
                  text: "**Lire les valeurs des rangs centraux et conclure.**",
                  example: { lines: ["Rangs 14 et 15 dans la tranche 12", "Médiane = (12 + 12) ÷ 2 = 12"] },
                  warn: "⚠️ N pair : demi-somme des deux rangs centraux, même s'ils tombent dans la même tranche.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Série triée 4, 7, 9, 12, 18. Donner la médiane.",
              correction: [
                { type: "line", text: "N = 5 (impair), rang (5 + 1) ÷ 2 = 3. Valeur au rang 3 = **9**." },
                { type: "note", text: "La médiane est la valeur (9), pas le rang (3)." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Calculer Q1, Q3 et l'écart interquartile",
              intro:
                "**Question type :** « Calculer Q1, Q3, l'EIQ, et donner les 5 valeurs de la boîte (28 notes triées). »",
              steps: [
                {
                  number: "1",
                  text: "**Couper la série triée en deux moitiés égales.**",
                  example: { lines: ["N = 28 → 14 valeurs dans chaque moitié"] },
                },
                {
                  number: "2",
                  text: "**Q1 = médiane de la moitié inférieure ; Q3 = médiane de la moitié supérieure.**",
                  example: { lines: ["Q1 = (10 + 12) ÷ 2 = 11", "Q3 = (14 + 14) ÷ 2 = 14"] },
                },
                {
                  number: "3",
                  text: "**Calculer l'EIQ et lister les 5 valeurs.**",
                  example: { lines: ["EIQ = 14 − 11 = 3", "min 8 · Q1 11 · Mé 12 · Q3 14 · max 18"] },
                  warn: "⚠️ Si N est impair, préciser si on inclut ou exclut la médiane des moitiés, et rester cohérent.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Pour une série, Q1 = 11 et Q3 = 14. Quel est l'écart interquartile, et que représente-t-il ?",
              correction: [
                { type: "line", text: "EIQ = 14 − 11 = **3** : l'étendue des 50 % centraux de la série." },
                { type: "note", text: "L'EIQ est robuste : il n'est pas influencé par les valeurs extrêmes." },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Tracer une boîte à moustaches et interpréter un graphique",
              intro:
                "**Question type :** « Construire la boîte (min 8, Q1 11, Mé 12, Q3 14, max 18), puis commenter un graphique. »",
              steps: [
                {
                  number: "1",
                  text: "**Tracer un axe gradué et légendé (unité + titre).**",
                  example: { lines: ["Axe de 8 à 18, unité régulière"] },
                },
                {
                  number: "2",
                  text: "**Tracer la boîte de Q1 à Q3, le trait médian, les moustaches.**",
                  example: { lines: ["Boîte 11 → 14, trait à 12, moustaches vers 8 et 18"] },
                  warn: "⚠️ Le jury pénalise un axe sans unité ou une boîte sans trait médian.",
                },
                {
                  number: "💡",
                  text: "**Interpréter en trois temps : chiffre → signification → déduction dans le contexte.**",
                  example: { lines: ["« Médiane 12 : la moitié des élèves ont une note ≤ 12. La moyenne plus haute (12,57) montre que quelques bonnes notes tirent vers le haut. »"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Un axe des ordonnées commence à 40 au lieu de 0. Quel est le risque ?",
              correction: [
                { type: "line", text: "Un axe tronqué amplifie visuellement les différences et fausse la comparaison : à signaler dans la réponse." },
                { type: "note", text: "Toujours vérifier titre, axes, unités et origine avant d'interpréter un graphique." },
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
                  question: "Pour quel caractère ne peut-on PAS calculer une moyenne ?",
                  options: ["La note sur 20", "La taille en cm", "La couleur des yeux", "La durée en minutes"],
                  correctIndex: 2,
                  explanation: "La couleur des yeux est un caractère qualitatif (catégorie non numérique) : on peut compter les effectifs, mais pas calculer une moyenne.",
                },
                {
                  objectifId: "e2",
                  question: "Dans un tableau d'effectifs, que vaut la somme des fréquences ?",
                  options: ["L'effectif total N", "1 (ou 100 %)", "La moyenne", "Le nombre de valeurs"],
                  correctIndex: 1,
                  explanation: "Les fréquences fᵢ = nᵢ ÷ N ont pour somme 1, soit 100 %. Si ce n'est pas le cas, le tableau contient une erreur.",
                },
                {
                  objectifId: "e3",
                  question: "Notes 8, 10, 12 d'effectifs 3, 5, 2. Quelle est la moyenne ?",
                  options: ["10", "(8 + 10 + 12) ÷ 3 = 10", "(3 × 8 + 5 × 10 + 2 × 12) ÷ 10 = 9,8", "30"],
                  correctIndex: 2,
                  explanation: "x̄ = Σ nᵢ × xᵢ ÷ N = (24 + 50 + 24) ÷ 10 = 98 ÷ 10 = 9,8. On divise par l'effectif total 10, pas par 3.",
                },
                {
                  objectifId: "e4",
                  question: "Série brute 12, 4, 18, 7, 9. Quelle est la médiane ?",
                  options: ["18", "12", "9", "7"],
                  correctIndex: 2,
                  explanation: "On trie d'abord : 4, 7, 9, 12, 18. N = 5 impair, rang 3 : la médiane est 9. L'erreur serait de prendre la valeur centrale de la série non triée.",
                },
                {
                  objectifId: "e5",
                  question: "Pour Q1 = 11 et Q3 = 14, que vaut l'écart interquartile ?",
                  options: ["25", "3", "12,5", "14"],
                  correctIndex: 1,
                  explanation: "EIQ = Q3 − Q1 = 14 − 11 = 3. Il mesure l'étendue des 50 % centraux et résiste aux valeurs extrêmes.",
                },
                {
                  objectifId: "e6",
                  question: "Combien de valeurs sont nécessaires pour tracer une boîte à moustaches ?",
                  options: ["3 (min, médiane, max)", "5 (min, Q1, médiane, Q3, max)", "2 (Q1, Q3)", "4 (les quartiles)"],
                  correctIndex: 1,
                  explanation: "Il faut les 5 valeurs : minimum, Q1, médiane, Q3, maximum. La boîte va de Q1 à Q3, les moustaches vers le min et le max.",
                },
                {
                  objectifId: "e7",
                  question: "Quel graphique convient à des données continues groupées en classes ?",
                  options: ["Diagramme en barres séparées", "Histogramme (barres jointives)", "Camembert", "Boîte à moustaches"],
                  correctIndex: 1,
                  explanation: "Les données continues groupées en classes se représentent par un histogramme, dont les barres se touchent (contrairement au diagramme en barres).",
                },
                {
                  objectifId: "e8",
                  question: "Pourquoi la médiane est-elle préférée à la moyenne pour les salaires ?",
                  options: ["Elle est plus facile à calculer", "Elle est robuste aux valeurs extrêmes", "Elle est toujours plus grande", "Elle ne dépend pas de N"],
                  correctIndex: 1,
                  explanation: "La moyenne est tirée vers le haut par quelques très hauts salaires. La médiane, robuste aux extrêmes, représente mieux le salaire typique.",
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
              text: "Triez toujours la série avant la médiane. Divisez par l'effectif total pour la moyenne. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Lecture de tableau, moyenne, médiane",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : températures",
              objectifTag: "Moyenne, médiane, étendue",
              enonce: "Températures minimales sur 7 jours (°C) : 4, 7, 5, 11, 9, 6, 8.",
              question: "a) Calculer la moyenne.\nb) Déterminer la médiane.\nc) Quelle est l'étendue ?",
              correction: [
                { type: "line", label: "a)", text: "(4 + 7 + 5 + 11 + 9 + 6 + 8) ÷ 7 = 50 ÷ 7 ≈ 7,14 °C." },
                { type: "line", label: "b)", text: "Triée : 4, 5, 6, 7, 8, 9, 11. N = 7 (impair), rang 4 : médiane = 7 °C." },
                { type: "line", label: "c)", text: "Étendue = 11 − 4 = 7 °C." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : tableau d'effectifs",
              objectifTag: "Tableau, moyenne, médiane",
              enonce: "30 élèves, notes 6, 8, 10, 12, 14, 16 d'effectifs 2, 4, 9, 8, 5, 2.",
              question: "a) Calculer la moyenne.\nb) Déterminer la médiane avec les effectifs cumulés.",
              correction: [
                { type: "line", label: "a)", text: "Σ nᵢ xᵢ = 12 + 32 + 90 + 96 + 70 + 32 = 332 → x̄ = 332 ÷ 30 ≈ 11,07." },
                { type: "line", label: "b)", text: "Effectifs cumulés : 2, 6, 15, 23, 28, 30. N = 30, rangs 15 et 16 → valeurs 10 et 12 → médiane = (10 + 12) ÷ 2 = 11." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : quartiles et boîte à moustaches",
              sub: "Q1, Q3, EIQ, tracé",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : durées d'entraînement",
              objectifTag: "Quartiles et boîte",
              enonce: "Durées (min) de 12 sportifs, triées : 35, 42, 48, 51, 55, 58, 60, 65, 70, 74, 80, 90.",
              question: "a) Déterminer médiane, Q1 et Q3.\nb) Calculer l'EIQ et l'interpréter.\nc) Donner les 5 valeurs de la boîte à moustaches.",
              correction: [
                { type: "line", label: "a)", text: "N = 12 : médiane = (58 + 60) ÷ 2 = 59. Moitié inf. → Q1 = (48 + 51) ÷ 2 = 49,5. Moitié sup. → Q3 = (70 + 74) ÷ 2 = 72." },
                { type: "line", label: "b)", text: "EIQ = 72 − 49,5 = 22,5 min : les 50 % centraux s'étalent sur 22,5 minutes." },
                { type: "line", label: "c)", text: "min 35 · Q1 49,5 · Mé 59 · Q3 72 · max 90." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : comparer deux séries",
              sub: "Position et dispersion",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 2 : comparer deux groupes",
              objectifTag: "Lecture de boîtes",
              enonce: "Test de lecture (sur 100). Groupe A : min 20, Q1 45, Mé 60, Q3 75, max 95. Groupe B : min 35, Q1 55, Mé 65, Q3 70, max 80.",
              question: "a) Quel groupe a la médiane la plus haute ? Sens ?\nb) Quel groupe est le plus homogène ? Justifier numériquement.\nc) Un élève de A a eu 80 : est-ce une bonne performance dans son groupe ?",
              correction: [
                { type: "line", label: "a)", text: "Groupe B (65 > 60) : 50 % des élèves de B ont un score ≥ 65, contre 60 pour A. B a de meilleurs résultats centraux." },
                { type: "line", label: "b)", text: "EIQ(A) = 30, EIQ(B) = 15 : B est plus homogène (EIQ deux fois plus faible)." },
                { type: "line", label: "c)", text: "Q3(A) = 75, donc 80 est au-dessus du 3e quartile : la performance est dans le quart supérieur du groupe, c'est une bonne performance." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : interprétation critique",
              sub: "Lire, calculer, nuancer",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 3 : moyenne contre médiane",
              objectifTag: "Interprétation critique",
              enonce: "Dans une petite entreprise, 9 employés gagnent 1 600 € et le dirigeant gagne 10 000 €.",
              question: "a) Calculer le salaire moyen.\nb) Déterminer le salaire médian.\nc) Quel indicateur représente le mieux le salaire « typique » ? Justifier.",
              correction: [
                { type: "line", label: "a)", text: "Moyenne = (9 × 1 600 + 10 000) ÷ 10 = (14 400 + 10 000) ÷ 10 = 2 440 €." },
                { type: "line", label: "b)", text: "Série triée : neuf 1 600 puis 10 000. N = 10, rangs 5 et 6 → tous deux 1 600 → médiane = 1 600 €." },
                { type: "line", label: "c)", text: "La médiane (1 600 €) : la moyenne est tirée vers le haut par le seul salaire du dirigeant et ne représente personne. La médiane décrit le salaire typique." },
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
              text: "Cet exercice reproduit le format d'un sujet de concours : lecture de tableau, calculs (moyenne, médiane, quartiles) et interprétation. Comptez 30 à 40 minutes, en conditions réelles.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 4 : aide aux devoirs",
              objectifTag: "Tableau, quartiles, interprétation",
              enonce:
                "Une enseignante relève le temps hebdomadaire (min) consacré aux devoirs par 20 élèves de CM2, avant et après un dispositif d'aide.\nAvant : durées 20, 30, 40, 50, 60, 70 d'effectifs 3, 5, 6, 4, 1, 1.\nAprès (20 valeurs triées) : 25, 30, 35, 35, 40, 40, 45, 45, 50, 50, 50, 55, 55, 60, 60, 65, 65, 70, 75, 80.",
              question:
                "A. Avant : 1) calculer la moyenne ; 2) déterminer la médiane (effectifs cumulés) ; 3) calculer Q1, Q3, EIQ.\nB. Après : 4) calculer la moyenne ; 5) déterminer médiane et quartiles.\nC. Interprétation : 6) le directeur affirme « la moyenne a augmenté, donc le dispositif est efficace » : discuter ; 7) en quoi les statistiques sont-elles utiles à l'enseignant pour le suivi des élèves (exemple cycle 3) ?",
              correction: [
                { type: "line", label: "A.1", text: "Σ nᵢ xᵢ = 60 + 150 + 240 + 200 + 60 + 70 = 780 → x̄ = 780 ÷ 20 = 39 min." },
                { type: "line", label: "A.2", text: "Effectifs cumulés : 3, 8, 14, 18, 19, 20. Rangs 10 et 11 → valeur 40 → médiane = 40 min." },
                { type: "line", label: "A.3", text: "Moitié inf. : Q1 = (30 + 30) ÷ 2 = 30. Moitié sup. : Q3 = (50 + 50) ÷ 2 = 50. EIQ = 20 min." },
                { type: "line", label: "B.4", text: "Somme = 1 034 → x̄ = 1 034 ÷ 20 = 51,7 min." },
                { type: "line", label: "B.5", text: "Médiane = (50 + 50) ÷ 2 = 50. Q1 = 40, Q3 = (60 + 65) ÷ 2 = 62,5. EIQ = 22,5 min." },
                { type: "line", label: "C.6", text: "Moyenne 39 → 51,7 et médiane 40 → 50 : le temps de travail a globalement augmenté. Mais l'EIQ passe de 20 à 22,5 (dispersion accrue), et la moustache haute s'allonge (max 70 → 80). Pour conclure à l'efficacité, il faudrait croiser avec les résultats scolaires." },
                { type: "line", label: "C.7", text: "Au cycle 3, les élèves lisent et interprètent des données en tableaux et graphiques. L'enseignant peut bâtir un tableau de notes, calculer une moyenne avec la classe et comparer deux séries graphiquement : sens du nombre, lecture de données et pensée critique." },
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
              title: "Erreur type · Exercice 5 : moyenne mal pondérée",
              objectifTag: "Moyenne",
              enonce: "**Copie d'un candidat :** notes 8, 10, 12, 14 d'effectifs 3, 5, 8, 4.\n*Réponse produite :* « moyenne = (8 + 10 + 12 + 14) ÷ 4 = 11 ».",
              question: "a) Identifier l'erreur.\nb) Donner le calcul correct.",
              correction: [
                { type: "paragraph", text: "**Erreur : division par le nombre de valeurs distinctes.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Le candidat divise par 4, en oubliant que certaines notes sont plus représentées." },
                    { text: "x̄ = (3 × 8 + 5 × 10 + 8 × 12 + 4 × 14) ÷ 20 = 226 ÷ 20 = 11,3." },
                    { text: "La formule est Σ nᵢ × xᵢ ÷ N, avec N l'effectif total." },
                  ],
                },
                { type: "note", text: "L'écart paraît petit (11 vs 11,3) mais l'erreur est conceptuelle." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 6 : médiane non triée",
              objectifTag: "Médiane",
              enonce: "**Copie d'un candidat :** série 12, 4, 18, 7, 9.\n*Réponse produite :* « valeur centrale = 18, donc médiane = 18 ».",
              question: "a) Identifier l'erreur.\nb) Donner la médiane correcte.",
              correction: [
                { type: "paragraph", text: "**Erreur : médiane cherchée sans trier la série.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Le candidat a pris la valeur centrale de la série non triée." },
                    { text: "Série triée : 4, 7, 9, 12, 18. La valeur centrale (rang 3) est 9." },
                    { text: "Médiane = 9." },
                  ],
                },
                { type: "note", text: "Réflexe : toujours trier avant de chercher la médiane." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 7 : moyenne confondue avec médiane",
              objectifTag: "Interprétation",
              enonce: "**Copie d'un candidat :** « La note moyenne de la classe est 12, donc la moitié des élèves ont eu plus de 12. »",
              question: "a) Identifier l'erreur de raisonnement.\nb) Donner la formulation correcte.",
              correction: [
                { type: "paragraph", text: "**Erreur : propriété de la médiane attribuée à la moyenne.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "C'est la médiane, pas la moyenne, qui partage la série en deux moitiés égales." },
                    { text: "La moyenne peut être supérieure ou inférieure à la médiane selon la forme de la distribution." },
                    { text: "Si la distribution est asymétrique (quelques très bons ou très mauvais), moyenne ≠ médiane." },
                  ],
                },
                { type: "note", text: "C'est l'argument des salaires : la moyenne est tirée par les extrêmes." },
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
                  question: "Quelle différence entre effectif et fréquence ?",
                  answer:
                    "Effectif nᵢ : nombre d'individus ayant la valeur xᵢ. Fréquence fᵢ = nᵢ ÷ N, entre 0 et 1, exprimable en %. L'effectif dit « combien », la fréquence dit « quelle part ».",
                  astuce: "La somme des fréquences vaut 1 (ou 100 %) ; sinon, le tableau a une erreur.",
                },
                {
                  question: "Formule de la moyenne d'un tableau d'effectifs ?",
                  answer:
                    "x̄ = (Σ nᵢ × xᵢ) ÷ N : multiplier chaque valeur par son effectif, sommer, diviser par l'effectif total. Exemple : 10 (×3), 14 (×5) → (30 + 70) ÷ 8 = 12,5.",
                  astuce: "Diviser par N, jamais par le nombre de valeurs distinctes.",
                },
                {
                  question: "Comment trouver la médiane quand N est pair ?",
                  answer:
                    "Trier la série. La médiane est la demi-somme des valeurs de rangs N/2 et N/2 + 1. Exemple : N = 10 → moyenne des rangs 5 et 6.",
                  astuce: "Ne jamais prendre le seul rang N/2 : c'est la demi-somme des deux rangs centraux.",
                },
                {
                  question: "Définition des quartiles Q1, Q2, Q3 ?",
                  answer:
                    "Q1 : 25 % des valeurs lui sont inférieures ou égales (médiane de la moitié inférieure). Q2 = médiane (50 %). Q3 : 75 % (médiane de la moitié supérieure). Ils partagent la série triée en 4 parts de 25 %.",
                },
                {
                  question: "Qu'est-ce que l'écart interquartile ? Pourquoi est-il utile ?",
                  answer:
                    "EIQ = Q3 − Q1 : l'étendue des 50 % centraux. C'est un indicateur de dispersion robuste, non influencé par les valeurs extrêmes (contrairement à l'étendue).",
                },
                {
                  question: "Quels sont les 5 éléments d'une boîte à moustaches ?",
                  answer:
                    "Minimum, Q1 (bord gauche de la boîte), médiane (trait à l'intérieur), Q3 (bord droit), maximum. La boîte couvre l'EIQ ; chaque segment contient environ 25 % des données.",
                },
                {
                  question: "Diagramme en barres ou histogramme : quelle différence ?",
                  answer:
                    "Barres : données discrètes ou qualitatives, barres séparées. Histogramme : données continues en classes, barres jointives. Si les classes sont inégales, c'est la surface (hauteur × largeur) qui est proportionnelle à l'effectif.",
                },
                {
                  question: "Pourquoi la médiane est-elle préférable à la moyenne pour les salaires ?",
                  answer:
                    "La moyenne est sensible aux valeurs extrêmes : quelques très hauts salaires la tirent vers le haut. La médiane est robuste et représente le salaire du travailleur médian. En France, moyenne ≈ 2 600 €, médiane ≈ 1 850 €.",
                },
                {
                  question: "Comment calculer la moyenne de données groupées en classes ?",
                  answer:
                    "Remplacer chaque classe par son centre cᵢ = (borne inf. + borne sup.) ÷ 2, puis x̄ = (Σ nᵢ × cᵢ) ÷ N. C'est une approximation : la valeur exacte est inconnue quand les données sont groupées.",
                },
                {
                  question: "Quels pièges visuels guetter dans un graphique ?",
                  answer:
                    "Axe des ordonnées ne commençant pas à 0 (amplifie les écarts), histogramme à classes inégales (hauteur ≠ effectif), camembert à trop de secteurs (illisible), échelle non uniforme. Toujours vérifier titre, axes, unités, origine.",
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
              center: { title: "Statistiques", subtitle: "Décrire une série" },
              branches: [
                {
                  title: "Vocabulaire et tableaux",
                  variant: "blue",
                  lines: ["Effectif nᵢ, fréquence fᵢ = nᵢ ÷ N", "Effectifs cumulés", "Quantitatif vs qualitatif"],
                },
                {
                  title: "Graphiques",
                  variant: "blue",
                  lines: ["Barres (discret), histogramme (classes)", "Camembert (% de catégories)", "Boîte à moustaches (dispersion)"],
                },
                {
                  title: "Position",
                  variant: "green",
                  lines: ["Mode, médiane (50 %)", "Moyenne x̄ = Σ nᵢxᵢ ÷ N", "Médiane robuste aux extrêmes"],
                },
                {
                  title: "Quartiles et dispersion",
                  variant: "green",
                  lines: ["Q1, Q3 (médianes des moitiés)", "EIQ = Q3 − Q1 (50 % centraux)", "Étendue = max − min"],
                },
                {
                  title: "Boîte à moustaches",
                  variant: "yellow",
                  lines: ["5 valeurs : min, Q1, Mé, Q3, max", "Comparer position ET dispersion"],
                },
                {
                  title: "Lecture critique",
                  variant: "purple",
                  dashed: true,
                  lines: ["Axe tronqué, classes inégales", "Chiffre → sens → déduction"],
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
