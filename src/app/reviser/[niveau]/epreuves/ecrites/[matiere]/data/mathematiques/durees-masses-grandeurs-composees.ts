import type { Fiche } from "@/components/fiche/types";
import { COPIES_DUREES_MASSES_GRANDEURS_COMPOSEES } from "./copies-durees-masses-grandeurs-composees";
import { EXERCICES_DUREES_MASSES_GRANDEURS_COMPOSEES } from "./exercices-durees-masses-grandeurs-composees";

export const SAVOIR_FAIRE = [
  { id: "durees-conversion", label: "Convertir des durées (heures décimales)" },
  { id: "durees-calcul", label: "Calculer et additionner des durées" },
  { id: "masses", label: "Convertir des masses" },
  { id: "vitesse", label: "Calculer une vitesse (km/h, m/s)" },
  { id: "masse-volumique-debit", label: "Masse volumique et débit" },
  { id: "lire-unite", label: "Retrouver une formule par l'unité" },
];

export const ficheDureesMassesGrandeursComposees: Fiche = {
  slug: "durees-masses-grandeurs-composees",
  matiere: "mathematiques",
  numero: 16,
  partie: "Partie 3 : Grandeurs et mesures",
  title: "Durées, masses et grandeurs composées",
  subtitle:
    "Conversions de durées (base 60) · heures décimales · masses (base 10) · vitesse · masse volumique · débit · prix unitaire",
  badges: [
    { label: "★★ Fréquent", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème C", variant: "info" },
  ],
  metaTitle: "Durées, masses et grandeurs composées · Fiche de révision CRPE",
  metaDescription:
    "Fiche CRPE sur les durées, masses et grandeurs composées : conversions de durées en base 60, heures décimales, masses, vitesse moyenne, masse volumique, débit et prix unitaire. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
              title: "La fiche des situations concrètes",
              text: "Combien de temps dure un trajet ? À quelle vitesse roule ce véhicule ? Quelle masse de farine pour cette recette ? La difficulté : les durées ne se calculent pas en base 10 (1 h = 60 min, pas 100), et les grandeurs composées (vitesse, masse volumique, débit) mettent en jeu deux unités à la fois. Le volet proportionnalité de ces grandeurs est détaillé dans la [fiche N°13](fiche:proportionnalite-pourcentages) ; ici, on se concentre sur les conversions et le maniement des unités.",
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
              title: "Les grandeurs composées : vitesse, masse volumique, débit",
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
                    ["Masse volumique", "ρ = m ÷ V", "g/cm³, kg/m³", "m = 270 g, V = 100 cm³ → 2,7 g/cm³"],
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
                      text: "Pour la vitesse : d en haut, v et t en bas. On cache la grandeur cherchée, ce qui reste donne la formule : couvrir d → v × t, couvrir v → d ÷ t, couvrir t → d ÷ v. Même triangle pour la masse volumique (m, ρ, V) et le débit (V, Q, t).",
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
              title: "Calculer avec une grandeur composée (masse volumique, débit)",
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
                  number: "3",
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
              question: "Un bloc de plomb de 50 cm³, masse volumique 11,3 g/cm³. Masse ?",
              correction: [
                { type: "line", text: "m = ρ × V = 11,3 × 50 = **565 g**." },
                { type: "note", text: "Le triangle : couvrir m donne ρ × V." },
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
              title: "Durées, masses et grandeurs composées",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_DUREES_MASSES_GRANDEURS_COMPOSEES,
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
              title: "Durées, masses et grandeurs composées",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_DUREES_MASSES_GRANDEURS_COMPOSEES,
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
                  title: "Masse volumique",
                  variant: "green",
                  lines: ["ρ = m ÷ V", "eau : 1 g/cm³ = 1 000 kg/m³"],
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
      ],
    },
  ],
};
