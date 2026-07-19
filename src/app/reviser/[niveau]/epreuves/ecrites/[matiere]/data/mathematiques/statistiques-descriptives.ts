import type { Fiche } from "@/components/fiche/types";
import type { Niveau } from "@/lib/niveau";
import { COPIES_STATISTIQUES_DESCRIPTIVES } from "./copies-statistiques-descriptives";
import { EXERCICES_STATISTIQUES_DESCRIPTIVES } from "./exercices-statistiques-descriptives";

export const SAVOIR_FAIRE = [
  { id: "tableau", label: "Construire un tableau d'effectifs" },
  { id: "moyenne", label: "Calculer une moyenne pondérée" },
  { id: "mediane", label: "Déterminer la médiane" },
  { id: "quartiles", label: "Calculer quartiles et EIQ" },
  { id: "boite", label: "Tracer et lire une boîte à moustaches" },
  { id: "lecture-critique", label: "Lire un graphique de façon critique" },
];

function ficheStatistiquesDescriptives(niveau: Niveau): Fiche {
  const l3 = niveau === "l3";
  return {
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
  metaTitle: "Statistiques descriptives · Fiche de révision CRPE",
  metaDescription:
    "Fiche CRPE sur les statistiques : effectifs et fréquences, moyenne, médiane, quartiles, écart interquartile, boîte à moustaches, choix du graphique et lecture critique. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                  rows: l3
                    ? [
                        ["Étendue", "max − min", "18 − 8 = 10"],
                        ["Écart interquartile (EIQ)", "Q3 − Q1", "14 − 10 = 4"],
                      ]
                    : [
                        ["Étendue", "max − min", "18 − 8 = 10"],
                        ["Écart interquartile (EIQ)", "Q3 − Q1", "14 − 10 = 4"],
                        ["Variance (Seconde)", "Σ nᵢ × (xᵢ − x̄)² ÷ N", "≈ 7,39"],
                        ["Écart-type (Seconde)", "√variance", "≈ 2,72"],
                      ],
                },
                ...(l3
                  ? []
                  : [
                      {
                        type: "callout" as const,
                        variant: "warning" as const,
                        title: "⚠️ Variance et écart-type : programme Seconde",
                        text: "L'étendue, les quartiles et l'écart interquartile relèvent du cycle 4. La variance et l'écart-type relèvent du programme de Seconde : attendus au CRPE M2, mais à retirer lors de la future dérivation L3.",
                      },
                    ]),
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "La boîte à moustaches : 5 valeurs clés",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "min · Q1 · médiane · Q3 · max",
                        "Sur 28 élèves : 8 · 10 · 12 · 14 · 18 (EIQ = 4)",
                      ],
                      note: "La boîte contient les 50 % centraux. Comparer deux boîtes : regarder la position (médiane) ET la dispersion (longueur de la boîte).",
                    },
                    {
                      type: "paragraph",
                      text: "Exemple comparatif : une classe B avec médiane 14 et EIQ 7 a de meilleurs résultats centraux qu'une classe A (médiane 12, EIQ 4), mais elle est bien moins homogène. On ne peut pas dire que B est « meilleure » sans préciser la dispersion.",
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
                  example: { lines: ["Q1 = (10 + 10) ÷ 2 = 10", "Q3 = (14 + 14) ÷ 2 = 14"] },
                },
                {
                  number: "3",
                  text: "**Calculer l'EIQ et lister les 5 valeurs.**",
                  example: { lines: ["EIQ = 14 − 10 = 4", "min 8 · Q1 10 · Mé 12 · Q3 14 · max 18"] },
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
                "**Question type :** « Construire la boîte (min 8, Q1 10, Mé 12, Q3 14, max 18), puis commenter un graphique. »",
              steps: [
                {
                  number: "1",
                  text: "**Tracer un axe gradué et légendé (unité + titre).**",
                  example: { lines: ["Axe de 8 à 18, unité régulière"] },
                },
                {
                  number: "2",
                  text: "**Tracer la boîte de Q1 à Q3, le trait médian, les moustaches.**",
                  example: { lines: ["Boîte 10 → 14, trait à 12, moustaches vers 8 et 18"] },
                  warn: "⚠️ Le jury pénalise un axe sans unité ou une boîte sans trait médian.",
                },
                {
                  number: "3",
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
              title: "Statistiques descriptives",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_STATISTIQUES_DESCRIPTIVES,
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
              title: "Statistiques descriptives",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_STATISTIQUES_DESCRIPTIVES,
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
      ],
    },
  ],
  };
}

export const ficheStatistiquesDescriptivesM2 = ficheStatistiquesDescriptives("m2");
export const ficheStatistiquesDescriptivesL3 = ficheStatistiquesDescriptives("l3");
