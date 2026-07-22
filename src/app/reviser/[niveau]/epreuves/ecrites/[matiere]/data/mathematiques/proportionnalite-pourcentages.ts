import type { Fiche } from "@/components/fiche/types";
import { COPIES_PROPORTIONNALITE_POURCENTAGES } from "./copies-proportionnalite-pourcentages";
import { EXERCICES_PROPORTIONNALITE_POURCENTAGES } from "./exercices-proportionnalite-pourcentages";

export const SAVOIR_FAIRE = [
  { id: "proportionnalite", label: "Reconnaître et calculer une proportionnalité" },
  { id: "ratio", label: "Partager selon un ratio" },
  { id: "pourcentage", label: "Pourcentage et taux de variation" },
  { id: "coef-multiplicateur", label: "Coefficient multiplicateur et valeur initiale" },
  { id: "echelle", label: "Résoudre un problème d'échelle" },
  { id: "grandeurs-composees", label: "Vitesse, masse volumique, débit" },
];

export const ficheProportionnalitePourcentages: Fiche = {
  slug: "proportionnalite-pourcentages",
  matiere: "mathematiques",
  numero: 13,
  partie: "Partie 2 : Organisation, données, fonctions",
  title: "Proportionnalité et pourcentages",
  subtitle:
    "Coefficient et quatrième proportionnelle · ratio · pourcentages et coefficient multiplicateur · valeur initiale · successions · échelle · vitesse · masse volumique · débit.",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème B", variant: "info" },
  ],
  metaTitle: "Proportionnalité et pourcentages · Fiche de révision CRPE",
  metaDescription:
    "Fiche CRPE sur la proportionnalité et les pourcentages : coefficient, quatrième proportionnelle, ratio, coefficient multiplicateur, valeur initiale, successions de pourcentages, échelle, vitesse, masse volumique et débit. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
              title: "La notion centrale des mathématiques appliquées",
              text: "Prix, recettes, cartes, conversions, vitesse, débit, soldes : la proportionnalité et les pourcentages sont partout. Le jury les retrouve dans presque tous les sujets, souvent imbriqués dans une situation concrète. Cette fiche réunit la proportionnalité, les pourcentages et leurs grandes applications. Lisez-la dans l'ordre : chaque outil prépare le suivant.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Proportionnalité, ratio et quatrième proportionnelle",
              blocks: [
                {
                  type: "paragraph",
                  text: "Deux grandeurs x et y sont **proportionnelles** s'il existe un nombre k (le **coefficient de proportionnalité**) tel que **y = k × x**, autrement dit k = y ÷ x est constant. Si un seul rapport diffère, ce n'est pas proportionnel.",
                },
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Situations proportionnelles",
                      variant: "success",
                      lines: ["Prix à prix unitaire constant", "Recette de cuisine, conversion d'unités", "Distance à vitesse constante", "Périmètre du carré P = 4c"],
                    },
                    {
                      title: "Situations NON proportionnelles",
                      variant: "warning",
                      lines: ["Aire du carré A = c² (quadratique)", "Tarif avec abonnement fixe", "Âge et taille d'une personne", "Températures °C ↔ °F (F = 9/5 × C + 32)"],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Le test du rapport",
                  text: "Calculer y ÷ x pour chaque paire. Si tous les rapports sont égaux, c'est proportionnel ; si un seul diffère, non. Ne jamais répondre à l'instinct. L'effet d'un agrandissement sur les longueurs, aires et volumes (×k, ×k², ×k³) est détaillé dans la [fiche N°15](fiche:perimetres-aires-volumes).",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Le ratio : un partage proportionnel (attendu 2020)",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "Un **ratio** a : b exprime comment répartir une quantité en parts proportionnelles. Partager 30 bonbons selon le ratio 2 : 3, c'est faire 2 + 3 = 5 parts égales : une personne reçoit 2 parts (2/5), l'autre 3 parts (3/5).",
                    },
                    {
                      type: "formulaBlock",
                      lines: [
                        "Ratio 2 : 3 sur 30 → 1 part = 30 ÷ (2 + 3) = 6",
                        "Premier : 2 × 6 = 12 · second : 3 × 6 = 18",
                        "Vérification : 12 + 18 = 30 ✓",
                      ],
                      note: "Le ratio est une autre écriture d'une situation de proportionnalité : a : b équivaut au rapport a/b.",
                    },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Quatrième proportionnelle : 3 méthodes",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "« Une voiture consomme 7 L pour 100 km. Combien pour 350 km ? » Trois chemins vers le même résultat.",
                    },
                    {
                      type: "cardGrid",
                      columns: 3,
                      cards: [
                        { title: "Coefficient", variant: "info", lines: ["k = 7 ÷ 100 = 0,07 L/km", "350 × 0,07 = 24,5 L"] },
                        { title: "Règle de trois", variant: "info", lines: ["100 km → 7 L", "350 × 7 ÷ 100 = 24,5 L"] },
                        { title: "Linéarité", variant: "info", lines: ["350 = 300 + 50", "21 + 3,5 = 24,5 L"] },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "Propriétés du tableau utiles pour aller vite : linéarité additive (additionner deux colonnes), linéarité multiplicative (multiplier une colonne par n), passage par l'unité (revenir à x = 1).",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Pourcentages et coefficient multiplicateur",
              blocks: [
                {
                  type: "paragraph",
                  text: "Un pourcentage est une fraction de 100 : 30 % signifie 30/100 = 0,30. Calculer 30 % d'une valeur, c'est la multiplier par 0,30.",
                },
                {
                  type: "table",
                  headers: ["Calcul", "Méthode", "Exemple"],
                  rows: [
                    ["t % d'une valeur", "multiplier par t ÷ 100", "30 % de 200 € = 0,30 × 200 = 60 €"],
                    ["une partie en % d'un tout", "partie ÷ tout × 100", "18 sur 24 = 18 ÷ 24 × 100 = 75 %"],
                    ["taux de variation", "(finale − initiale) ÷ initiale × 100", "120 → 150 : 30 ÷ 120 × 100 = +25 %"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ La base d'un taux est toujours la valeur initiale",
                  text: "120 → 150 : on divise par 120 (le départ), pas par 150. Et attention à la formulation : « 20 % de 80 » (= 16) n'est pas « 20 % de plus que 80 » (= 96). Lire au mot près.",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Le coefficient multiplicateur (CM) : l'outil qui change tout",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "Au lieu de calculer la hausse puis de l'ajouter, on multiplie en une fois. Augmenter 200 € de 20 % : 200 × (1 + 0,20) = 200 × 1,20 = 240 €. Ce 1,20 est le coefficient multiplicateur.",
                    },
                    {
                      type: "formulaBlock",
                      lines: [
                        "**Augmentation de t % → CM = 1 + t/100**",
                        "**Diminution de t % → CM = 1 − t/100**",
                        "+25 % → 1,25 · −15 % → 0,85 · −30 % → 0,70",
                      ],
                      note: "CM > 1 : augmentation. CM entre 0 et 1 : diminution. Retrouver le taux : (CM − 1) × 100.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Valeur initiale et successions de pourcentages",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Retrouver la valeur initiale : diviser par le CM",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "Un article soldé à −30 % coûte 119 €. On sait que prix initial × 0,70 = 119, donc on fait l'opération inverse.",
                    },
                    {
                      type: "formulaBlock",
                      lines: [
                        "**V_initiale = V_finale ÷ CM**",
                        "119 ÷ 0,70 = 170 €",
                        "Vérification : 170 × 0,70 = 119 € ✓",
                      ],
                      note: "Erreur fréquente : ajouter 30 % à 119 (= 154,70 €). Les 30 % s'appliquaient sur 170 €, pas sur 119 €.",
                    },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Successions : on multiplie les CM, on n'additionne pas les taux",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "**CM_global = CM₁ × CM₂ × …**",
                        "+5 % puis +8 % : 1,05 × 1,08 = 1,134 → +13,4 % (et non +13 %)",
                      ],
                      note: "La 2e variation s'applique sur une base déjà modifiée : les taux ne s'additionnent pas.",
                    },
                    {
                      type: "table",
                      headers: ["Successions", "Calcul des CM", "Résultat réel"],
                      rows: [
                        ["+20 % puis −20 %", "1,20 × 0,80 = 0,96", "−4 % (une perte !)"],
                        ["+50 % puis −50 %", "1,50 × 0,50 = 0,75", "−25 %"],
                        ["+10 % puis +10 %", "1,10 × 1,10 = 1,21", "+21 %"],
                        ["−10 % puis −10 %", "0,90 × 0,90 = 0,81", "−19 %"],
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "+20 % puis −20 % ne revient pas à 0 : après +20 % sur 100 €, on a 120 €, et −20 % de 120 € retire 24 € → 96 €. La hausse et la baisse ne jouent pas sur la même base.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Applications : échelle, vitesse, masse volumique, débit",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Échelle d'une carte ou d'un plan",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "**Échelle = distance sur le plan ÷ distance réelle** (même unité)",
                        "d_réelle = d_plan × dénominateur · d_plan = d_réelle ÷ dénominateur",
                      ],
                      note: "Le résultat de d_plan × dénominateur est en cm : convertir ensuite (÷100 → m, ÷1 000 → km).",
                    },
                    {
                      type: "table",
                      headers: ["Échelle", "1 cm représente", "Usage typique"],
                      rows: [
                        ["1/100", "1 m", "plan d'appartement"],
                        ["1/1 000", "10 m", "plan cadastral"],
                        ["1/25 000", "250 m", "carte IGN de randonnée"],
                        ["1/50 000", "500 m", "carte routière régionale"],
                        ["1/1 000 000", "10 km", "carte de France"],
                      ],
                    },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Vitesse, masse volumique, débit : la même structure",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "Vitesse : v = d ÷ t · d = v × t · t = d ÷ v",
                        "Masse volumique : ρ = m ÷ V (eau : 1 g/cm³ = 1 kg/L)",
                        "Débit : D = V ÷ t",
                      ],
                      note: "Même triangle de formules : grandeur = quantité ÷ temps (ou ÷ volume).",
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⚠️ Heures décimales obligatoires",
                      text: "Avant v = d ÷ t, convertir la durée : minutes ÷ 60. 1h 45min = 1 + 45/60 = 1,75 h (jamais 1,45 h). Conversions utiles : km/h ÷ 3,6 = m/s ; m/s × 3,6 = km/h. Ces grandeurs composées (vitesse, masse volumique, débit) et leurs conversions d'unités sont approfondies dans la [fiche N°16](fiche:durees-masses-grandeurs-composees).",
                    },
                  ],
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : règle de trois sur une situation non proportionnelle",
              badge: "Conceptuel",
              faux: "Carré de côté 3 cm (aire 9 cm²) : « côté ×2, donc aire ×2 = 18 cm² ».",
              vrai: "A = c² : côté ×2 → aire ×4. Aire du carré de côté 6 cm = 36 cm².",
              methode: "Tester le rapport avant d'appliquer la règle de trois : 9 ÷ 3 = 3 mais 36 ÷ 6 = 6, donc non proportionnel.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : valeur initiale en ajoutant le pourcentage",
              badge: "Très fréquent",
              faux: "Après −30 %, prix = 140 € : « initial = 140 + 30 % de 140 = 182 € ».",
              vrai: "CM = 0,70 → initial = 140 ÷ 0,70 = 200 € (vérification : 200 × 0,70 = 140).",
              methode: "Toujours diviser la valeur finale par le CM ; les % s'appliquaient sur la valeur initiale.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : additionner des taux successifs",
              badge: "Classique",
              faux: "+10 % puis +10 % = +20 %.",
              vrai: "1,10 × 1,10 = 1,21 → +21 % : la seconde hausse s'applique sur une base déjà augmentée.",
              methode: "Multiplier les coefficients multiplicateurs, jamais additionner les taux.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : durée et échelle mal converties",
              badge: "Très fréquent",
              faux: "1h 45min = 1,45 h ; ou 4 cm au 1/50 000 = 200 000 km.",
              vrai: "1h 45min = 1,75 h (45 ÷ 60) ; 4 × 50 000 = 200 000 cm = 2 km.",
              methode: "Minutes ÷ 60 pour les durées ; cm × dénominateur donne des cm, à convertir ensuite.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école : le regard du futur enseignant",
              text: "Au cycle 2, la proportionnalité se rencontre sans être nommée : prix d'achats multiples, partages équitables, recettes (manipulation avant formalisation).\n\nAu cycle 3 (BO 2024), les tableaux de proportionnalité, le coefficient, la quatrième proportionnelle, l'échelle et la vitesse sont explicitement au programme, avec trois procédures : retour à l'unité, règle de trois, linéarité. Les pourcentages s'y limitent à « t % d'une quantité » et « exprimer une proportion » (le coefficient multiplicateur et les successions sont du cycle 4).\n\nErreur typique des élèves : appliquer la règle de trois à une situation non proportionnelle (« Paul a 12 ans et mesure 1,50 m, donc à 24 ans il mesurera 3 m ? »). À travailler explicitement. Lien à mentionner au jury : la proportionnalité est le fondement de la fonction linéaire f(x) = kx ([fiche N°14](fiche:fonctions-lineaires-affines)).",
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
              title: "Trois réflexes pour tout traiter",
              text: "Vérifier la proportionnalité, construire le bon outil (coefficient, CM, triangle de formules), et toujours contrôler les unités et le résultat. Chaque savoir-faire ci-dessous se termine par une vérification.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Vérifier et calculer une quatrième proportionnelle",
              intro:
                "**Question type :** « Un peintre couvre 18 m² avec 3 L. Quelle surface avec 11 L ? »",
              steps: [
                {
                  number: "1",
                  text: "**Vérifier la proportionnalité.**",
                  example: { lines: ["Mêmes conditions → rapport surface/volume constant"] },
                },
                {
                  number: "2",
                  text: "**Calculer (au choix : coefficient, règle de trois, linéarité).**",
                  example: { lines: ["k = 18 ÷ 3 = 6 m²/L → 11 × 6 = 66 m²"] },
                },
                {
                  number: "3",
                  text: "**Vérifier le rapport.**",
                  example: { lines: ["66 ÷ 11 = 6 = 18 ÷ 3 ✓"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Partager 35 € selon le ratio 3 : 4. Combien pour chacun ?",
              correction: [
                { type: "line", text: "1 part = 35 ÷ (3 + 4) = 5 €. Premier : 3 × 5 = **15 €** ; second : 4 × 5 = **20 €** (15 + 20 = 35 ✓)." },
                { type: "note", text: "Un ratio a : b se traite en (a + b) parts égales." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Appliquer un pourcentage avec le coefficient multiplicateur",
              intro:
                "**Question type :** « Un article coûte 340 €, soldé à −35 %. Prix soldé ? »",
              steps: [
                {
                  number: "1",
                  text: "**Construire le CM.**",
                  example: { lines: ["−35 % → CM = 1 − 0,35 = 0,65 (CM < 1 → baisse ✓)"] },
                },
                {
                  number: "2",
                  text: "**Multiplier la valeur par le CM.**",
                  example: { lines: ["340 × 0,65 = 221 €"] },
                },
                {
                  number: "3",
                  text: "**Vérifier.**",
                  example: { lines: ["Réduction = 0,35 × 340 = 119 €, et 340 − 119 = 221 € ✓"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Un loyer de 800 € augmente de 6 %. Nouveau loyer ?",
              correction: [
                { type: "line", text: "CM = 1 + 0,06 = 1,06 → 800 × 1,06 = **848 €**." },
                { type: "note", text: "Le CM fait l'augmentation en une seule multiplication." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Retrouver la valeur initiale",
              intro:
                "**Question type :** « Après une baisse de 25 %, un article coûte 90 €. Prix initial ? »",
              steps: [
                {
                  number: "1",
                  text: "**Identifier le CM.**",
                  example: { lines: ["−25 % → CM = 0,75"] },
                },
                {
                  number: "2",
                  text: "**Diviser la valeur finale par le CM.**",
                  example: { lines: ["V_initiale = 90 ÷ 0,75 = 120 €"] },
                  warn: "⚠️ Ne pas ajouter 25 % à 90 (= 112,50 €) : les 25 % s'appliquaient sur 120 €.",
                },
                {
                  number: "3",
                  text: "**Vérifier dans le sens direct.**",
                  example: { lines: ["120 × 0,75 = 90 € ✓"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Après +20 %, un prix vaut 144 €. Quel était le prix initial ?",
              correction: [
                { type: "line", text: "CM = 1,20 → initial = 144 ÷ 1,20 = **120 €** (vérification : 120 × 1,20 = 144)." },
                { type: "note", text: "On divise toujours par le CM pour remonter à la valeur de départ." },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Enchaîner des variations successives",
              intro:
                "**Question type :** « Après +15 % puis −10 %, un loyer vaut 1 242 €. Loyer initial ? Taux global ? »",
              steps: [
                {
                  number: "1",
                  text: "**Construire le CM de chaque variation.**",
                  example: { lines: ["+15 % → 1,15 · −10 % → 0,90"] },
                },
                {
                  number: "2",
                  text: "**Multiplier pour le CM global et lire le taux.**",
                  example: { lines: ["1,15 × 0,90 = 1,035 → +3,5 % global"] },
                  warn: "⚠️ +15 % puis −10 % ≠ +5 %. La 2e variation s'applique sur la valeur déjà augmentée.",
                },
                {
                  number: "3",
                  text: "**Diviser par le CM global pour la valeur initiale.**",
                  example: { lines: ["1 242 ÷ 1,035 = 1 200 €"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Un prix subit +20 % puis −20 %. Quel est le taux global ?",
              correction: [
                { type: "line", text: "1,20 × 0,80 = 0,96 → **−4 %** (et non 0 %)." },
                { type: "note", text: "Les deux variations ne jouent pas sur la même base : elles ne s'annulent pas." },
              ],
            },
            {
              type: "methodeGroup",
              number: "⑤",
              title: "Résoudre un problème d'échelle ou de vitesse",
              intro:
                "**Question type :** « Plan au 1/50 000, deux points à 4,6 cm. Distance réelle en km ? » et « 315 km en 2h 06min, vitesse ? »",
              steps: [
                {
                  number: "1",
                  text: "**Échelle : appliquer la relation, puis convertir.**",
                  example: { lines: ["4,6 × 50 000 = 230 000 cm = 2 300 m = 2,3 km"] },
                  warn: "⚠️ 230 000 cm n'est pas 230 000 km : convertir cm → m → km.",
                },
                {
                  number: "2",
                  text: "**Vitesse : convertir la durée en heures décimales.**",
                  example: { lines: ["2h 06min = 2 + 6/60 = 2,1 h"] },
                },
                {
                  number: "3",
                  text: "**Appliquer la formule et vérifier.**",
                  example: { lines: ["v = 315 ÷ 2,1 = 150 km/h", "Vérif : 150 × 2,1 = 315 km ✓"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Carte au 1/25 000, 3,2 cm entre deux villages. Distance réelle ?",
              correction: [
                { type: "line", text: "3,2 × 25 000 = 80 000 cm = 800 m = **0,8 km**." },
                { type: "note", text: "Toujours convertir le résultat (en cm) vers m puis km." },
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
              title: "Proportionnalité et pourcentages",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_PROPORTIONNALITE_POURCENTAGES,
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
              title: "Proportionnalité et pourcentages",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_PROPORTIONNALITE_POURCENTAGES,
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
              center: { title: "Proportionnalité", subtitle: "et pourcentages" },
              branches: [
                {
                  title: "Proportionnalité",
                  variant: "blue",
                  lines: ["y = k × x (rapport constant)", "Test du rapport y/x", "Ratio a : b → (a + b) parts"],
                },
                {
                  title: "Quatrième proportionnelle",
                  variant: "blue",
                  lines: ["Coefficient", "Règle de trois", "Linéarité"],
                },
                {
                  title: "Pourcentages",
                  variant: "green",
                  lines: ["t % = × t/100", "Taux : (fin − début) ÷ début", "Base = valeur initiale"],
                },
                {
                  title: "Coefficient multiplicateur",
                  variant: "green",
                  lines: ["+t % → 1 + t/100", "−t % → 1 − t/100", "Initiale = finale ÷ CM"],
                },
                {
                  title: "Successions",
                  variant: "yellow",
                  lines: ["CM global = CM₁ × CM₂", "Jamais additionner les taux", "+20 % puis −20 % → −4 %"],
                },
                {
                  title: "Applications",
                  variant: "purple",
                  dashed: true,
                  lines: ["Échelle : convertir cm → m → km", "Vitesse, masse volumique, débit", "Durée en heures décimales"],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
