import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je convertis entre heures-minutes et heures décimales (2h 45min = 2,75 h)" },
  { id: "e2", label: "Je calcule une durée entre deux instants par la méthode des étapes" },
  { id: "e3", label: "J'additionne et je soustrais des durées en gérant les retenues en base 60" },
  { id: "e4", label: "Je convertis les masses (t, kg, g, mg) avec les coefficients ×1 000" },
  { id: "e5", label: "Je calcule une vitesse v = d ÷ t, avec t en heures décimales si v est en km/h" },
  { id: "e6", label: "Je convertis km/h en m/s (÷3,6) et m/s en km/h (×3,6)" },
  { id: "e7", label: "Je calcule une densité d = m ÷ V et je retrouve m ou V" },
  { id: "e8", label: "Je calcule un débit Q = V ÷ t en vérifiant la cohérence des unités" },
  { id: "e9", label: "Je retrouve la formule d'une grandeur composée à partir de son unité" },
];

export const ficheDureesMassesGrandeursComposees: Fiche = {
  slug: "durees-masses-grandeurs-composees",
  matiere: "mathematiques",
  numero: 16,
  partie: "Partie 3 : Grandeurs et mesures",
  title: "Durées, masses et grandeurs composées",
  subtitle:
    "Conversions de durées (base 60) · heures décimales · masses (base 10) · vitesse · densité · débit · prix unitaire",
  badges: [
    { label: "★★ Fréquent", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème C", variant: "info" },
  ],
  metaTitle: "Durées, masses et grandeurs composées (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur les durées, masses et grandeurs composées : conversions de durées en base 60, heures décimales, masses, vitesse moyenne, densité, débit et prix unitaire. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
              title: "Le programme en 3 étapes",
              items: [
                { number: "①", title: "Les durées", text: "La base 60 : conversions, heures décimales, additions et soustractions." },
                { number: "②", title: "Les masses", text: "La base 10 : t, kg, g, mg, avec les coefficients ×1 000." },
                { number: "③", title: "Les grandeurs composées", text: "Vitesse, densité, débit, prix unitaire : retrouver la formule par l'unité." },
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
              title: "La fiche des situations concrètes",
              text: "Combien de temps dure un trajet ? À quelle vitesse roule ce véhicule ? Quelle masse de farine pour cette recette ? La difficulté : les durées ne se calculent pas en base 10 (1 h = 60 min, pas 100), et les grandeurs composées (vitesse, densité, débit) mettent en jeu deux unités à la fois. Le volet proportionnalité de ces grandeurs est détaillé dans la [fiche N°13](fiche:proportionnalite-pourcentages) ; ici, on se concentre sur les conversions et le maniement des unités.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Les durées : la base 60",
              blocks: [
                {
                  type: "paragraph",
                  text: "La particularité des durées : **1 heure = 60 minutes, 1 minute = 60 secondes**. On travaille en base 60, pas en base 10. La chaîne : semaine (×7) jour (×24) heure (×60) minute (×60) seconde.",
                },
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Convertir en minutes",
                      variant: "info",
                      lines: ["2h 35min = 2 × 60 + 35 = 155 min", "140 min = 2 h reste 20 → 2h 20min"],
                    },
                    {
                      title: "Heures décimales ↔ h min",
                      variant: "info",
                      lines: ["2h 45min : 45 ÷ 60 = 0,75 → 2,75 h", "3,4 h : 0,4 × 60 = 24 → 3h 24min"],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Le piège classique : 2h 30min ≠ 2,3 h",
                  text: "On ne « colle » pas les chiffres. 2h 30min = 2 + 30 ÷ 60 = 2,5 h. Pour passer en décimal : minutes ÷ 60. Repères : 15min = 0,25 ; 20min = 0,333 ; 30min = 0,5 ; 45min = 0,75.",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Additionner et soustraire en base 60",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "Addition : 3h 45min + 2h 30min = 5h 75min → 6h 15min",
                        "Soustraction : 5h 10min − 2h 45min → 4h 70min − 2h 45min = 2h 25min",
                      ],
                      note: "Quand les minutes dépassent 60, on retire 60 et on ajoute 1 h. Méthode alternative : tout convertir en minutes, calculer, reconvertir.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Les masses : la base 10",
              blocks: [
                {
                  type: "paragraph",
                  text: "La masse se convertit en base 10, comme les longueurs : **×1 000 à chaque grand palier**. La chaîne : tonne (×1 000) kilogramme (×1 000) gramme (×1 000) milligramme.",
                },
                {
                  type: "formulaBlock",
                  lines: [
                    "1 t = 1 000 kg · 1 kg = 1 000 g · 1 g = 1 000 mg",
                    "2,5 kg = 2 500 g · 750 g = 0,75 kg · 3,2 t = 3 200 kg",
                  ],
                  note: "Attention à ne pas confondre avec les volumes, où 1 dm³ = 1 L (unité de capacité).",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Les grandeurs composées : vitesse, densité, débit",
              blocks: [
                {
                  type: "paragraph",
                  text: "Une **grandeur composée** combine deux grandeurs. La clé : lire l'unité pour retrouver la formule sans l'apprendre par cœur. km/h se lit « kilomètres par heure » → distance ÷ temps.",
                },
                {
                  type: "table",
                  headers: ["Grandeur", "Formule", "Unité", "Exemple"],
                  rows: [
                    ["Vitesse moyenne", "v = d ÷ t", "km/h, m/s", "300 km en 2 h → 150 km/h"],
                    ["Densité (masse volumique)", "d = m ÷ V", "g/cm³, kg/m³", "m = 270 g, V = 100 cm³ → 2,7 g/cm³"],
                    ["Débit", "Q = V ÷ t", "L/h, m³/s", "600 L en 3 h → 200 L/h"],
                    ["Prix unitaire", "p = P ÷ n", "€/kg, €/m²", "12 € pour 3 kg → 4 €/kg"],
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Le triangle des formules",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "Pour la vitesse : d en haut, v et t en bas. On cache la grandeur cherchée, ce qui reste donne la formule : couvrir d → v × t, couvrir v → d ÷ t, couvrir t → d ÷ v. Même triangle pour la densité (m, d, V) et le débit (V, Q, t).",
                    },
                    {
                      type: "formulaBlock",
                      lines: [
                        "Train : 240 km en 1h 36min",
                        "t = 1 + 36/60 = 1,6 h (heures décimales !)",
                        "v = 240 ÷ 1,6 = 150 km/h",
                      ],
                      note: "Conversion : km/h ÷ 3,6 = m/s ; m/s × 3,6 = km/h. 90 km/h = 25 m/s.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "💡 Méthode universelle pour les coûts",
                  text: "Lire l'unité du prix donne la formule : €/L → coût = quantité (L) × prix ; €/km → coût = distance × tarif ; €/m² → coût = aire × prix. Piège fréquent : pour le carburant, calculer d'abord la consommation totale (240 km à 7 L/100 km → 16,8 L) avant de multiplier par le prix.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : 2h 30min = 2,3 h",
              badge: "Très fréquent",
              faux: "210 km en 2h 30min : v = 210 ÷ 2,3 ≈ 91,3 km/h.",
              vrai: "2h 30min = 2,5 h, donc v = 210 ÷ 2,5 = 84 km/h.",
              methode: "Minutes ÷ 60 pour la partie décimale. 30min → 0,5 ; 15min → 0,25 ; 20min → 0,333.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : additionner des durées comme des décimaux",
              badge: "Classique",
              faux: "3h 45min + 1h 30min = 3,45 + 1,30 = 4h 75min.",
              vrai: "3h 45min + 1h 30min = 4h 75min → 75 min = 1h 15min → 5h 15min.",
              methode: "Travailler en base 60 : quand les minutes dépassent 60, retirer 60 et ajouter 1 h.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : oublier de convertir km/h ↔ m/s",
              badge: "Fréquent",
              faux: "15 m/s = 15 × 100 = 1 500 km/h.",
              vrai: "15 m/s × 3,6 = 54 km/h (1 m/s = 3 600 m/h = 3,6 km/h).",
              methode: "m/s → km/h : × 3,6 ; km/h → m/s : ÷ 3,6.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : mélanger les unités d'une grandeur composée",
              badge: "Fréquent",
              faux: "Débit 3 L/min, cuve 540 L : t = 540 ÷ 3 = 180 heures.",
              vrai: "t = 540 ÷ 3 = 180 minutes (car Q est en L/min), soit 3 h.",
              methode: "L ÷ (L/min) = min. Vérifier l'unité du résultat avant de conclure.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école : le regard du futur enseignant",
              text: "Au cycle 2, les élèves manipulent des durées concrètes (compter des jours, lire l'heure sur une horloge) et comparent des masses à la balance, sans calcul formel.\n\nAu cycle 3, les programmes introduisent le calcul sur les durées (addition, soustraction) et les premières grandeurs composées, comme la vitesse au CM2, abordée via un tableau de proportionnalité distance/temps avant la formule.\n\nCe que le jury attend : savoir expliquer pourquoi 1h 30min n'est pas 1,3 h, et distinguer durée et heure (instant). Montrer que la vitesse est une grandeur quotient, qu'on peut introduire par la proportionnalité ([fiche N°13](fiche:proportionnalite-pourcentages)) avant d'écrire v = d ÷ t.",
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
              title: "Quatre protocoles pour les situations fréquentes",
              text: "Identifier le type de calcul, harmoniser les unités (heures décimales pour les vitesses), appliquer la formule, vérifier la cohérence des unités du résultat. Chaque savoir-faire se termine par une vérification.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Calculer une durée entre deux instants",
              intro:
                "**Question type :** « Un train part à 8h 47min et arrive à 11h 23min. Durée du trajet ? »",
              steps: [
                {
                  number: "1",
                  text: "**Avancer par sauts jusqu'à l'heure suivante.**",
                  example: { lines: ["8h 47min → 9h : +13 min"] },
                },
                {
                  number: "2",
                  text: "**Sauter d'heure en heure, puis jusqu'à l'arrivée.**",
                  example: { lines: ["9h → 11h : +2 h", "11h → 11h 23min : +23 min"] },
                },
                {
                  number: "3",
                  text: "**Additionner les sauts.**",
                  example: { lines: ["2 h + 13 min + 23 min = 2h 36min"] },
                  warn: "⚠️ La méthode des étapes est moins risquée que la soustraction posée avec emprunt.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Durée entre 9h 50min et 12h 15min ?",
              correction: [
                { type: "line", text: "9h 50 → 10h : +10 min ; 10h → 12h : +2 h ; 12h → 12h 15 : +15 min. Total : **2h 25min**." },
                { type: "note", text: "On avance par sauts confortables jusqu'à l'heure d'arrivée." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Heures décimales et calcul de vitesse",
              intro:
                "**Question type :** « Une voiture roule à 90 km/h pendant 2h 20min. Distance parcourue ? »",
              steps: [
                {
                  number: "1",
                  text: "**Convertir la durée en heures décimales.**",
                  example: { lines: ["2h 20min = 2 + 20/60 = 7/3 h ≈ 2,333 h"] },
                  warn: "⚠️ Garder la fraction exacte (7/3) évite les erreurs d'arrondi.",
                },
                {
                  number: "2",
                  text: "**Appliquer d = v × t.**",
                  example: { lines: ["d = 90 × 7/3 = 210 km"] },
                },
                {
                  number: "3",
                  text: "**Vérifier par estimation.**",
                  example: { lines: ["2 h à 90 km/h = 180 km, + 20 min (1/3 h) = +30 km → 210 km ✓"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Un train parcourt 240 km en 1h 36min. Vitesse moyenne ?",
              correction: [
                { type: "line", text: "1h 36min = 1 + 36/60 = 1,6 h. v = 240 ÷ 1,6 = **150 km/h**." },
                { type: "note", text: "Toujours convertir la durée en heures décimales avant de diviser." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Calculer avec une grandeur composée (densité, débit)",
              intro:
                "**Question type :** « Une cuve cylindrique de rayon 40 cm et hauteur 1,2 m se remplit à 150 L/min. Temps de remplissage ? »",
              steps: [
                {
                  number: "1",
                  text: "**Calculer le volume, en harmonisant les unités.**",
                  example: { lines: ["r = 0,4 m, h = 1,2 m → V = π × 0,16 × 1,2 ≈ 0,603 m³ ≈ 603 L"] },
                },
                {
                  number: "2",
                  text: "**Appliquer t = V ÷ Q.**",
                  example: { lines: ["t = 603 ÷ 150 ≈ 4 min"] },
                },
                {
                  number: "💡",
                  text: "**Vérifier la cohérence des unités.**",
                  example: { lines: ["L ÷ (L/min) = min ✓"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Un bloc de plomb de 50 cm³, densité 11,3 g/cm³. Masse ?",
              correction: [
                { type: "line", text: "m = d × V = 11,3 × 50 = **565 g**." },
                { type: "note", text: "Le triangle : couvrir m donne d × V." },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Convertir km/h en m/s et résoudre",
              intro:
                "**Question type :** « Un cycliste roule à 36 km/h. Franchit-il un passage de 25 m en moins de 3 s ? »",
              steps: [
                {
                  number: "1",
                  text: "**Convertir la vitesse en m/s.**",
                  example: { lines: ["36 km/h ÷ 3,6 = 10 m/s"] },
                },
                {
                  number: "2",
                  text: "**Calculer la distance en 3 s.**",
                  example: { lines: ["d = 10 × 3 = 30 m"] },
                },
                {
                  number: "3",
                  text: "**Conclure par une phrase.**",
                  example: { lines: ["30 m > 25 m : oui, il franchit le passage en moins de 3 s."] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Convertir 72 km/h en m/s.",
              correction: [
                { type: "line", text: "72 ÷ 3,6 = **20 m/s**." },
                { type: "note", text: "km/h → m/s : diviser par 3,6." },
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
                  question: "Convertir 2h 45min en heures décimales.",
                  options: ["2,45 h", "2,75 h", "2,5 h", "2,9 h"],
                  correctIndex: 1,
                  explanation: "45 ÷ 60 = 0,75, donc 2h 45min = 2,75 h. On ne colle jamais les chiffres (2,45 h serait faux).",
                },
                {
                  objectifId: "e1",
                  question: "Convertir 3,4 h en heures et minutes.",
                  options: ["3h 4min", "3h 40min", "3h 24min", "3h 14min"],
                  correctIndex: 2,
                  explanation: "Partie décimale × 60 : 0,4 × 60 = 24 min, donc 3,4 h = 3h 24min.",
                },
                {
                  objectifId: "e2",
                  question: "Durée entre 8h 47min et 11h 23min ?",
                  options: ["3h 24min", "2h 36min", "2h 24min", "3h 36min"],
                  correctIndex: 1,
                  explanation: "8h 47 → 9h (+13 min), 9h → 11h (+2 h), 11h → 11h 23 (+23 min) : 2 h + 36 min = 2h 36min.",
                },
                {
                  objectifId: "e3",
                  question: "Combien font 3h 45min + 1h 30min ?",
                  options: ["4h 75min", "4,75 h", "5h 15min", "5h 75min"],
                  correctIndex: 2,
                  explanation: "4h 75min, et 75 min = 1h 15min, donc 5h 15min. On gère la retenue en base 60.",
                },
                {
                  objectifId: "e4",
                  question: "Convertir 2,3 t en kilogrammes.",
                  options: ["230 kg", "2 300 kg", "23 kg", "23 000 kg"],
                  correctIndex: 1,
                  explanation: "1 t = 1 000 kg, donc 2,3 t = 2 300 kg. La masse se convertit en base 10 (×1 000).",
                },
                {
                  objectifId: "e5",
                  question: "210 km parcourus en 2h 30min. Vitesse moyenne ?",
                  options: ["91,3 km/h", "84 km/h", "105 km/h", "70 km/h"],
                  correctIndex: 1,
                  explanation: "2h 30min = 2,5 h. v = 210 ÷ 2,5 = 84 km/h. L'erreur serait de diviser par 2,3.",
                },
                {
                  objectifId: "e6",
                  question: "Convertir 90 km/h en m/s.",
                  options: ["250 m/s", "25 m/s", "324 m/s", "9 m/s"],
                  correctIndex: 1,
                  explanation: "km/h → m/s : ÷ 3,6. 90 ÷ 3,6 = 25 m/s.",
                },
                {
                  objectifId: "e7",
                  question: "Un bloc de volume 100 cm³ et de masse 270 g. Quelle densité ?",
                  options: ["2,7 g/cm³", "0,37 g/cm³", "27 g/cm³", "370 g/cm³"],
                  correctIndex: 0,
                  explanation: "d = m ÷ V = 270 ÷ 100 = 2,7 g/cm³ (proche de l'aluminium).",
                },
                {
                  objectifId: "e8",
                  question: "Un robinet de débit 3 L/min remplit une cuve de 540 L. Temps de remplissage ?",
                  options: ["180 heures", "180 minutes (3 h)", "1 620 minutes", "60 minutes"],
                  correctIndex: 1,
                  explanation: "t = 540 ÷ 3 = 180. Le débit étant en L/min, t est en minutes, soit 3 h. Pas en heures directement.",
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
              text: "Harmonisez les unités, convertissez les durées en heures décimales avant les vitesses, vérifiez l'unité du résultat. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Conversions de durées et de masses",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : conversions de durées",
              objectifTag: "Durées",
              question: "a) Convertir 3h 45min en minutes.\nb) Convertir 200 minutes en h min.\nc) Convertir 2,4 h en h min.\nd) Convertir 3h 18min en heures décimales.",
              correction: [
                { type: "line", label: "a)", text: "3 × 60 + 45 = 225 min." },
                { type: "line", label: "b)", text: "200 ÷ 60 = 3 h reste 20 min → 3h 20min." },
                { type: "line", label: "c)", text: "0,4 × 60 = 24 min → 2h 24min." },
                { type: "line", label: "d)", text: "18 ÷ 60 = 0,3 → 3,3 h." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : conversions de masses",
              objectifTag: "Masses",
              question: "a) 3,5 kg en g.\nb) 4 500 g en kg.\nc) 2,3 t en kg.\nd) Une recette demande 750 g de farine : combien de paquets de 1 kg acheter ?",
              correction: [
                { type: "line", label: "a)", text: "3,5 × 1 000 = 3 500 g." },
                { type: "line", label: "b)", text: "4 500 ÷ 1 000 = 4,5 kg." },
                { type: "line", label: "c)", text: "2,3 × 1 000 = 2 300 kg." },
                { type: "line", label: "d)", text: "750 g < 1 kg : 1 paquet suffit (250 g de surplus)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : durées et vitesse",
              sub: "Horaires, heures décimales",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : un trajet en train",
              objectifTag: "Durée et vitesse",
              enonce: "Un train part de Paris à 7h 54min et arrive à Lyon à 10h 02min. La distance est de 465 km.",
              question: "a) Durée du trajet ?\nb) Durée en heures décimales ?\nc) Vitesse moyenne ?",
              correction: [
                { type: "line", label: "a)", text: "7h 54 → 8h (+6 min), 8h → 10h (+2 h), 10h → 10h 02 (+2 min) : 2h 08min." },
                { type: "line", label: "b)", text: "t = 2 + 8/60 = 32/15 h ≈ 2,133 h." },
                { type: "line", label: "c)", text: "v = 465 ÷ (32/15) = 465 × 15/32 ≈ 218 km/h." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : densité et débit",
              objectifTag: "Grandeurs composées",
              enonce: "On étudie un cube d'aluminium et une piscine.",
              question:
                "a) Cube d'aluminium d'arête 5 cm, densité 2,7 g/cm³ : masse en g, puis en kg.\nb) Piscine 25 m × 12,5 m × 1,8 m, remplie à 40 m³/h : temps de remplissage (h min) ?",
              correction: [
                { type: "line", label: "a)", text: "V = 5³ = 125 cm³ ; m = 2,7 × 125 = 337,5 g = 0,3375 kg." },
                { type: "line", label: "b)", text: "V = 25 × 12,5 × 1,8 = 562,5 m³ ; t = 562,5 ÷ 40 = 14,0625 h ; 0,0625 × 60 ≈ 4 min → 14h 04min." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : coûts et carburant",
              sub: "Grandeurs composées économiques",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : le plein de carburant",
              objectifTag: "Prix unitaire",
              enonce: "Une voiture consomme 7 L aux 100 km. Le gazole coûte 1,75 €/L. Elle parcourt 240 km.",
              question: "a) Consommation totale en litres ?\nb) Coût du carburant pour ce trajet ?\nc) Quel serait le coût pour 600 km ?",
              correction: [
                { type: "line", label: "a)", text: "240 × 7 ÷ 100 = 16,8 L." },
                { type: "line", label: "b)", text: "16,8 × 1,75 = 29,40 €." },
                { type: "line", label: "c)", text: "600 × 7 ÷ 100 = 42 L ; 42 × 1,75 = 73,50 €." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : problème multi-grandeurs",
              sub: "Combiner volume, masse, durée, débit",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 4 : le camion de sable",
              objectifTag: "Problème complet",
              enonce: "Le bac d'un camion est un pavé droit de 4 m × 2 m × 0,8 m. La densité du sable humide est de 1 800 kg/m³.",
              question:
                "a) Volume du bac en m³ et en litres.\nb) Masse du sable en kg et en tonnes.\nc) Le camion part à 6h 35min et doit arriver avant 9h, sur 185 km : vitesse moyenne minimale (arrondie au km/h) ?\nd) Une pompe vide le bac à 0,3 m³/min : temps de vidange (min s) ?",
              correction: [
                { type: "line", label: "a)", text: "V = 4 × 2 × 0,8 = 6,4 m³ = 6 400 L." },
                { type: "line", label: "b)", text: "m = 1 800 × 6,4 = 11 520 kg = 11,52 t." },
                { type: "line", label: "c)", text: "Durée max = 2h 25min = 29/12 h ; v = 185 ÷ (29/12) = 185 × 12/29 ≈ 77 km/h." },
                { type: "line", label: "d)", text: "t = 6,4 ÷ 0,3 ≈ 21,33 min ; 0,33 × 60 ≈ 20 s → 21 min 20 s." },
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
              text: "Cet exercice reproduit le format d'un sujet de concours, qui combine durées, vitesse, volume et débit. Comptez 20 minutes, en conditions réelles.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 5 : la sortie scolaire",
              objectifTag: "Durée, vitesse, volume, débit",
              enonce:
                "Un car part de l'école à 8h 15min et doit arriver au musée à 10h 30min, distance 162 km. Le car consomme 28 L de gazole aux 100 km, à 1,68 €/L.\nLe musée a un réservoir cylindrique de rayon 1,5 m et hauteur 2 m, alimenté par une pompe à 120 L/min.",
              question:
                "1.1 Durée maximale du trajet ?\n1.2 Vitesse moyenne minimale (arrondie au km/h) ?\n1.3 Coût du carburant pour l'aller-retour ?\n2.1 Volume du réservoir en m³ puis en litres (valeur exacte puis approchée) ?\n2.2 Temps de remplissage du réservoir (h min) ?\n2.3 Le réservoir peut-il être rempli entre 7h et le début de la visite à 10h 30min ?",
              correction: [
                { type: "line", label: "1.1", text: "8h 15 → 10h 30 : 2 h, puis +15 min → 2h 15min." },
                { type: "line", label: "1.2", text: "t = 2h 15min = 9/4 h ; v = 162 ÷ (9/4) = 162 × 4/9 = 72 km/h." },
                { type: "line", label: "1.3", text: "Aller-retour 324 km ; conso = 324 × 28/100 = 90,72 L ; coût = 90,72 × 1,68 ≈ 152,41 €." },
                { type: "line", label: "2.1", text: "V = π × 1,5² × 2 = 4,5π m³ ≈ 14,14 m³ ≈ 14 137 L." },
                { type: "line", label: "2.2", text: "t = 14 137 ÷ 120 ≈ 117,8 min ≈ 1h 58min." },
                { type: "line", label: "2.3", text: "Durée disponible : 7h → 10h 30 = 210 min ; remplissage ≈ 118 min < 210 min : oui, c'est possible." },
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
              title: "Erreur type · Exercice 6 : durée mal convertie",
              objectifTag: "Heures décimales",
              enonce: "**Copie d'un candidat :** vitesse pour 210 km en 2h 30min.\n*Réponse produite :* « v = 210 ÷ 2,3 ≈ 91,3 km/h ».",
              question: "a) Identifier l'erreur.\nb) Donner la vitesse correcte.",
              correction: [
                { type: "paragraph", text: "**Erreur : 2h 30min lu comme 2,3 h.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Le candidat a collé les chiffres au lieu de diviser les minutes par 60." },
                    { text: "2h 30min = 2 + 30/60 = 2,5 h." },
                    { text: "v = 210 ÷ 2,5 = 84 km/h." },
                  ],
                },
                { type: "note", text: "Repères : 30min = 0,5 h ; 15min = 0,25 h ; 20min = 0,333 h." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 7 : durées additionnées en décimal",
              objectifTag: "Base 60",
              enonce: "**Copie d'un candidat :** 3h 45min + 1h 30min.\n*Réponse produite :* « 3,45 + 1,30 = 4,75 h = 4h 75min ».",
              question: "a) Identifier les erreurs.\nb) Donner le résultat correct.",
              correction: [
                { type: "paragraph", text: "**Deux erreurs : conversion fausse et résultat impossible.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "3h 45min n'est pas 3,45 h, et 4h 75min est impossible (75 > 60)." },
                    { text: "3h 45min + 1h 30min = 4h 75min, puis 75 min = 1h 15min." },
                    { text: "Résultat : 5h 15min." },
                  ],
                },
                { type: "note", text: "En base 60 : quand les minutes dépassent 60, retirer 60 et ajouter 1 h." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 8 : unités d'un débit mélangées",
              objectifTag: "Grandeurs composées",
              enonce: "**Copie d'un candidat :** débit 3 L/min, cuve de 540 L, durée en heures.\n*Réponse produite :* « t = 540 ÷ 3 = 180 heures ».",
              question: "a) Identifier l'erreur.\nb) Donner le résultat correct.",
              correction: [
                { type: "paragraph", text: "**Erreur : unité du résultat ignorée.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Le débit est en L/min, donc t = 540 ÷ 3 = 180 minutes, pas heures." },
                    { text: "180 min = 180 ÷ 60 = 3 heures." },
                    { text: "Vérification d'unité : L ÷ (L/min) = min." },
                  ],
                },
                { type: "note", text: "Toujours vérifier l'unité de chaque grandeur avant et après le calcul." },
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
                  question: "Comment convertir 2h 45min en heures décimales ?",
                  answer:
                    "Minutes ÷ 60 : 45 ÷ 60 = 0,75, donc 2,75 h. Repères : 15min = 0,25 h ; 20min = 0,333 h ; 30min = 0,5 h ; 45min = 0,75 h.",
                  astuce: "2h 45min n'est jamais 2,45 h : ne pas coller les chiffres.",
                },
                {
                  question: "Comment convertir 3,4 h en heures et minutes ?",
                  answer:
                    "Partie entière = 3 h ; partie décimale × 60 : 0,4 × 60 = 24 min, donc 3h 24min. Et non 3h 4min.",
                },
                {
                  question: "Comment additionner ou soustraire des durées ?",
                  answer:
                    "En base 60 : 3h 45min + 2h 30min = 5h 75min → 6h 15min (75 min = 1h 15min). Pour soustraire, on « emprunte » 1 h = 60 min. Alternative : tout convertir en minutes.",
                },
                {
                  question: "Comment convertir les masses ?",
                  answer:
                    "En base 10, ×1 000 par grand palier : 1 t = 1 000 kg, 1 kg = 1 000 g, 1 g = 1 000 mg. Ne pas confondre avec les volumes (1 dm³ = 1 L).",
                },
                {
                  question: "Formule de la vitesse moyenne (triangle DVT) ?",
                  answer:
                    "v = d ÷ t, d = v × t, t = d ÷ v. On cache la grandeur cherchée dans le triangle (d en haut, v et t en bas). Le temps doit être en heures décimales si v est en km/h.",
                },
                {
                  question: "Comment convertir km/h en m/s, et inversement ?",
                  answer:
                    "km/h → m/s : ÷ 3,6 ; m/s → km/h : × 3,6. Intuition : 1 m/s = 3 600 m/h = 3,6 km/h. Exemple : 72 km/h = 20 m/s.",
                },
                {
                  question: "Formule de la densité et ses dérivées ?",
                  answer:
                    "d = m ÷ V, m = d × V, V = m ÷ d. Même triangle que la vitesse. Eau : 1 g/cm³ = 1 000 kg/m³. Vérifier la cohérence des unités (g/cm³ → m en g, V en cm³).",
                },
                {
                  question: "Formule du débit, et un exemple ?",
                  answer:
                    "Q = V ÷ t, V = Q × t, t = V ÷ Q. Remplir 300 L en 30 min → Q = 10 L/min. L'unité de t dépend de celle du débit (L/min → t en min).",
                },
                {
                  question: "Comment retrouver la formule d'une grandeur composée ?",
                  answer:
                    "En lisant son unité : km/h → distance ÷ temps ; g/cm³ → masse ÷ volume ; L/min → volume ÷ temps ; €/kg → prix ÷ masse. L'unité contient la formule.",
                },
                {
                  question: "Pourquoi 1h 30min n'est pas 1,3 h (recul d'enseignant) ?",
                  answer:
                    "Parce que les durées sont en base 60 : 30 min = 30/60 = 0,5 h, donc 1h 30min = 1,5 h. C'est une difficulté à expliciter aux élèves, qui confondent le système horaire (base 60) avec la base 10.",
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
              center: { title: "Durées, masses", subtitle: "et grandeurs composées" },
              branches: [
                {
                  title: "Durées (base 60)",
                  variant: "blue",
                  lines: ["1 h = 60 min, 1 min = 60 s", "2h 45min = 2,75 h (45 ÷ 60)", "Retenue à 60 min"],
                },
                {
                  title: "Masses (base 10)",
                  variant: "blue",
                  lines: ["×1 000 par palier", "1 t = 1 000 kg = 1 000 000 g"],
                },
                {
                  title: "Vitesse",
                  variant: "green",
                  lines: ["v = d ÷ t (t en heures)", "km/h ÷ 3,6 = m/s"],
                },
                {
                  title: "Densité",
                  variant: "green",
                  lines: ["d = m ÷ V", "eau : 1 g/cm³ = 1 000 kg/m³"],
                },
                {
                  title: "Débit",
                  variant: "yellow",
                  lines: ["Q = V ÷ t", "unité de t selon le débit"],
                },
                {
                  title: "Lire l'unité",
                  variant: "purple",
                  dashed: true,
                  lines: ["km/h → d ÷ t", "g/cm³ → m ÷ V", "€/kg → prix ÷ masse"],
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
