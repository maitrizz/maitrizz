import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je reconnais une situation proportionnelle (rapport y/x constant) et je la distingue d'une situation non proportionnelle" },
  { id: "e2", label: "Je comprends et j'utilise un ratio (partage proportionnel a : b)" },
  { id: "e3", label: "Je calcule une quatrième proportionnelle par au moins deux méthodes (coefficient, règle de trois, linéarité)" },
  { id: "e4", label: "Je calcule t % d'une valeur et un taux de variation (base = valeur initiale)" },
  { id: "e5", label: "Je construis le coefficient multiplicateur : +t % donne 1 + t/100, −t % donne 1 − t/100" },
  { id: "e6", label: "Je retrouve la valeur initiale en divisant par le coefficient multiplicateur" },
  { id: "e7", label: "J'enchaîne des variations successives en multipliant les coefficients (jamais en additionnant les taux)" },
  { id: "e8", label: "Je résous un problème d'échelle et je convertis correctement cm → m → km" },
  { id: "e9", label: "Je convertis une durée en heures décimales et j'applique vitesse, densité, débit" },
];

export const ficheProportionnalitePourcentages: Fiche = {
  slug: "proportionnalite-pourcentages",
  matiere: "mathematiques",
  numero: 13,
  partie: "Partie 2 : Organisation, données, fonctions",
  title: "Proportionnalité et pourcentages",
  subtitle:
    "Coefficient et quatrième proportionnelle · ratio · pourcentages et coefficient multiplicateur · valeur initiale · successions · échelle · vitesse · densité · débit",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème B", variant: "info" },
  ],
  metaTitle: "Proportionnalité et pourcentages (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur la proportionnalité et les pourcentages : coefficient, quatrième proportionnelle, ratio, coefficient multiplicateur, valeur initiale, successions de pourcentages, échelle, vitesse, densité et débit. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                  title: "Proportionnalité et ratio",
                  text: "Reconnaître un rapport constant, partager selon un ratio, et la quatrième proportionnelle.",
                },
                {
                  number: "②",
                  title: "Pourcentages",
                  text: "Appliquer un taux, mesurer une variation, et l'outil clé : le coefficient multiplicateur.",
                },
                {
                  number: "③",
                  title: "Valeur initiale et successions",
                  text: "Remonter à la valeur de départ, et enchaîner plusieurs variations sans se tromper.",
                },
                {
                  number: "④",
                  title: "Applications",
                  text: "Échelle, vitesse, densité, débit : la proportionnalité au service des situations concrètes.",
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
                  text: "Calculer y ÷ x pour chaque paire. Si tous les rapports sont égaux, c'est proportionnel ; si un seul diffère, non. Ne jamais répondre à l'instinct.",
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
              title: "Applications : échelle, vitesse, densité, débit",
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
                  title: "Vitesse, densité, débit : la même structure",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "Vitesse : v = d ÷ t · d = v × t · t = d ÷ v",
                        "Densité : d = m ÷ V (eau : 1 g/cm³ = 1 kg/L)",
                        "Débit : D = V ÷ t",
                      ],
                      note: "Même triangle de formules : grandeur = quantité ÷ temps (ou ÷ volume).",
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⚠️ Heures décimales obligatoires",
                      text: "Avant v = d ÷ t, convertir la durée : minutes ÷ 60. 1h 45min = 1 + 45/60 = 1,75 h (jamais 1,45 h). Conversions utiles : km/h ÷ 3,6 = m/s ; m/s × 3,6 = km/h.",
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
                  question: "Quelle situation est proportionnelle ?",
                  options: ["L'aire d'un carré en fonction de son côté", "Le périmètre d'un carré en fonction de son côté", "Un tarif de taxi avec prise en charge fixe", "La température en °F en fonction des °C"],
                  correctIndex: 1,
                  explanation: "P = 4c : le rapport P/c = 4 est constant. L'aire (c²), le tarif fixe et la conversion °C↔°F ne sont pas proportionnels.",
                },
                {
                  objectifId: "e2",
                  question: "On partage 40 billes selon le ratio 3 : 5. Combien reçoit le premier ?",
                  options: ["15", "12", "24", "8"],
                  correctIndex: 0,
                  explanation: "3 + 5 = 8 parts ; 1 part = 40 ÷ 8 = 5 ; premier = 3 × 5 = 15 (et second = 25).",
                },
                {
                  objectifId: "e3",
                  question: "8 stylos coûtent 6 €. Combien coûtent 20 stylos ?",
                  options: ["12 €", "15 €", "18 €", "16 €"],
                  correctIndex: 1,
                  explanation: "Règle de trois : 20 × 6 ÷ 8 = 15 € (ou k = 6 ÷ 8 = 0,75 €/stylo, puis 20 × 0,75 = 15 €).",
                },
                {
                  objectifId: "e4",
                  question: "Un prix passe de 80 € à 100 €. Quel est le taux de variation ?",
                  options: ["+20 %", "+25 %", "+20 € donc +20 %", "+18 %"],
                  correctIndex: 1,
                  explanation: "Taux = (100 − 80) ÷ 80 × 100 = 20 ÷ 80 × 100 = +25 %. La base est la valeur initiale (80), pas 100.",
                },
                {
                  objectifId: "e5",
                  question: "Quel est le coefficient multiplicateur d'une baisse de 15 % ?",
                  options: ["0,15", "1,15", "0,85", "15"],
                  correctIndex: 2,
                  explanation: "Diminution de t % → CM = 1 − t/100 = 1 − 0,15 = 0,85 (il reste 85 % de la valeur).",
                },
                {
                  objectifId: "e6",
                  question: "Après une baisse de 20 %, un article coûte 64 €. Prix initial ?",
                  options: ["76,80 €", "80 €", "84 €", "128 €"],
                  correctIndex: 1,
                  explanation: "CM = 0,80 → initial = 64 ÷ 0,80 = 80 €. Vérification : 80 × 0,80 = 64 €.",
                },
                {
                  objectifId: "e7",
                  question: "Un prix augmente de 10 % puis de 10 %. Quel est le taux global ?",
                  options: ["+20 %", "+21 %", "+10 %", "+100 %"],
                  correctIndex: 1,
                  explanation: "On multiplie les CM : 1,10 × 1,10 = 1,21, soit +21 %. On n'additionne jamais les taux.",
                },
                {
                  objectifId: "e8",
                  question: "Sur une carte au 1/25 000, 4 cm correspondent à quelle distance réelle ?",
                  options: ["100 000 km", "1 km", "100 m", "10 km"],
                  correctIndex: 1,
                  explanation: "4 × 25 000 = 100 000 cm = 1 000 m = 1 km. Le résultat est en cm, à convertir.",
                },
                {
                  objectifId: "e9",
                  question: "Un train parcourt 270 km en 1h 30min. Quelle est sa vitesse moyenne ?",
                  options: ["180 km/h", "270 km/h", "200 km/h", "150 km/h"],
                  correctIndex: 0,
                  explanation: "1h 30min = 1,5 h. v = 270 ÷ 1,5 = 180 km/h. Toujours convertir la durée en heures décimales.",
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
              text: "Vérifiez la proportionnalité, construisez le coefficient adapté, contrôlez les unités. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Proportionnalité, ratio, pourcentage simple",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : coefficient et tableau",
              objectifTag: "Quatrième proportionnelle",
              enonce: "Un peintre utilise 3 L de peinture pour couvrir 18 m².",
              question: "a) Trouver le coefficient k et son unité.\nb) Compléter : 1 L → ? · 5 L → ? · 8 L → ?\nc) Quelle quantité pour 42 m² ?",
              correction: [
                { type: "line", label: "a)", text: "k = 18 ÷ 3 = 6 m²/L." },
                { type: "line", label: "b)", text: "1 L → 6 m² · 5 L → 30 m² · 8 L → 48 m²." },
                { type: "line", label: "c)", text: "42 ÷ 6 = 7 L." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : pourcentage et ratio",
              objectifTag: "Pourcentage, ratio",
              question: "a) Calculer 30 % de 250 €.\nb) Sur 24 élèves, 18 réussissent : quel pourcentage ?\nc) Partager 36 bonbons selon le ratio 2 : 7.",
              correction: [
                { type: "line", label: "a)", text: "0,30 × 250 = 75 €." },
                { type: "line", label: "b)", text: "18 ÷ 24 × 100 = 75 %." },
                { type: "line", label: "c)", text: "2 + 7 = 9 parts ; 36 ÷ 9 = 4 ; donc 2 × 4 = 8 et 7 × 4 = 28 (8 + 28 = 36)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : coefficient multiplicateur",
              sub: "Appliquer, retrouver, enchaîner",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : soldes et valeur initiale",
              objectifTag: "CM et valeur initiale",
              question: "a) Un manteau de 180 € est soldé à −40 %. Prix soldé ?\nb) Après −40 %, un article coûte 90 € : prix initial ?\nc) Un salaire augmente de 25 % puis baisse de 20 % : taux global ?",
              correction: [
                { type: "line", label: "a)", text: "CM = 0,60 → 180 × 0,60 = 108 €." },
                { type: "line", label: "b)", text: "CM = 0,60 → initial = 90 ÷ 0,60 = 150 €." },
                { type: "line", label: "c)", text: "1,25 × 0,80 = 1,00 → 0 % (cas où les variations s'annulent exactement)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : échelle d'un plan",
              objectifTag: "Échelle",
              enonce: "Plan d'architecte à l'échelle 1/100. Une pièce mesure 4,5 cm sur le plan.",
              question: "a) Longueur réelle en mètres ?\nb) Une façade de 7,5 m mesure combien sur le plan ?\nc) L'échelle est-elle une situation de proportionnalité ?",
              correction: [
                { type: "line", label: "a)", text: "4,5 × 100 = 450 cm = 4,5 m." },
                { type: "line", label: "b)", text: "7,5 m = 750 cm → 750 ÷ 100 = 7,5 cm." },
                { type: "line", label: "c)", text: "Oui : d_plan = (1/100) × d_réelle, rapport constant k = 1/100." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : vitesse, densité",
              sub: "Conversions et triangles de formules",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : vitesse avec horaires",
              objectifTag: "Vitesse",
              enonce: "Un cycliste part à 9h24 et arrive à 12h09, après 82 km.",
              question: "a) Durée en heures décimales ?\nb) Vitesse moyenne ?\nc) À cette vitesse, distance en 2h 30min ?",
              correction: [
                { type: "line", label: "a)", text: "De 9h24 à 12h09 = 2h 45min = 2 + 45/60 = 2,75 h." },
                { type: "line", label: "b)", text: "v = 82 ÷ 2,75 ≈ 29,8 km/h." },
                { type: "line", label: "c)", text: "2h 30min = 2,5 h → d = 29,8 × 2,5 ≈ 74,5 km." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 4 : densité",
              objectifTag: "Densité",
              enonce: "L'aluminium a une densité de 2,7 g/cm³. Une poutre a un volume de 800 cm³.",
              question: "a) Masse de la poutre en kg ?\nb) Volume d'une poutre de 5,4 kg ?\nc) L'aluminium flotte-t-il dans l'eau (1 g/cm³) ?",
              correction: [
                { type: "line", label: "a)", text: "m = 2,7 × 800 = 2 160 g = 2,16 kg." },
                { type: "line", label: "b)", text: "V = 5 400 ÷ 2,7 = 2 000 cm³." },
                { type: "line", label: "c)", text: "Non : densité 2,7 > 1, l'aluminium coule." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : situations mixtes",
              sub: "Pièges conceptuels",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 5 : proportionnel ou non ?",
              objectifTag: "Test du rapport",
              question:
                "Pour chaque situation, décider et justifier.\na) Prix d'un taxi : 2 € fixe + 1,20 €/km.\nb) Périmètre d'un carré selon son côté.\nc) Aire d'un carré selon son côté.\nd) Nombre de tuiles (identiques) pour un toit selon sa surface.",
              correction: [
                { type: "line", label: "a)", text: "Non : (2 + 1,20d) ÷ d varie (3,20 pour 1 km, 2,20 pour 2 km)." },
                { type: "line", label: "b)", text: "Oui : P = 4c, rapport P/c = 4 constant." },
                { type: "line", label: "c)", text: "Non : A = c², rapport A/c = c variable (côté ×2 → aire ×4)." },
                { type: "line", label: "d)", text: "Oui : nombre de tuiles ÷ surface = 1 ÷ (surface d'une tuile), constant." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 6 : échelle et vitesse combinées",
              objectifTag: "Échelle + vitesse",
              enonce: "Sur une carte au 1/100 000, deux villes A et B sont distantes de 7,4 cm. Un randonneur part de A à 8h30 et marche à 4,5 km/h.",
              question: "a) Distance réelle AB en km ?\nb) Heure d'arrivée à B ?\nc) Avec une pause de 45 min à mi-chemin, nouvelle heure d'arrivée ?",
              correction: [
                { type: "line", label: "a)", text: "7,4 × 100 000 = 740 000 cm = 7 400 m = 7,4 km." },
                { type: "line", label: "b)", text: "t = 7,4 ÷ 4,5 ≈ 1,644 h ≈ 1h 39min → arrivée vers 10h09." },
                { type: "line", label: "c)", text: "Trajet 1h 39min + pause 45min ≈ 2h 24min → arrivée vers 10h54." },
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
              text: "Cet exercice reproduit le format d'un sujet de concours, qui combine proportionnalité, pourcentages, échelle et vitesse. Comptez 25 minutes, en conditions réelles.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 7 : le voyage scolaire",
              objectifTag: "Proportionnalité, %, échelle, vitesse",
              enonce:
                "Une école organise un voyage à Paris pour 32 élèves de CM2.\nCar : 3,20 €/km, distance école-Paris 185 km (aller simple).\nMusée : 8,50 €/élève, réduction groupe −35 %.\nPlan utilisé en classe à l'échelle 1/500 000.\nTrajet retour : départ 17h15, arrivée 19h48, distance 185 km.",
              question:
                "1.1 Coût total du transport aller-retour.\n1.2 Le coût est-il proportionnel à la distance ? Donner le coefficient.\n2.1 Tarif réduit par élève.\n2.2 Coût total des entrées (élèves).\n2.3 Économie réalisée (en € et en %).\n3.1 Distance école-Paris sur le plan, en cm.\n3.2 Durée du retour en heures décimales, puis vitesse moyenne.\n4.1 Donner, pour le CM2, un exemple pour chacune des trois procédures (retour à l'unité, règle de trois, linéarité).",
              correction: [
                { type: "line", label: "1.1", text: "Aller-retour = 370 km. Coût = 370 × 3,20 = 1 184 €." },
                { type: "line", label: "1.2", text: "Oui : coût = 3,20 × d, rapport constant. k = 3,20 €/km." },
                { type: "line", label: "2.1", text: "CM = 0,65 → tarif réduit = 8,50 × 0,65 = 5,525 € ≈ 5,53 €." },
                { type: "line", label: "2.2", text: "32 × 5,525 = 176,80 €." },
                { type: "line", label: "2.3", text: "Plein tarif = 32 × 8,50 = 272 €. Économie = 272 − 176,80 = 95,20 €, soit 35 %." },
                { type: "line", label: "3.1", text: "185 km = 18 500 000 cm → ÷ 500 000 = 37 cm." },
                { type: "line", label: "3.2", text: "17h15 → 19h48 = 2h 33min = 2,55 h ; v = 185 ÷ 2,55 ≈ 72,5 km/h." },
                { type: "line", label: "4.1", text: "« 4 personnes : 200 g de farine, combien pour 10 ? » Retour à l'unité : 200 ÷ 4 = 50 g/pers → 500 g. Règle de trois : 10 × 200 ÷ 4 = 500 g. Linéarité : 10 = 4 + 4 + 2 → 200 + 200 + 100 = 500 g." },
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
              title: "Erreur type · Exercice 8 : règle de trois mal employée",
              objectifTag: "Proportionnalité",
              enonce: "**Copie d'un candidat :** carré de côté 3 cm (aire 9 cm²). Aire du carré de côté 6 cm ?\n*Réponse produite :* « le côté double, donc l'aire double : 9 × 2 = 18 cm² ».",
              question: "a) Identifier l'erreur.\nb) Donner la réponse correcte.",
              correction: [
                { type: "paragraph", text: "**Erreur : règle de trois sur une situation non proportionnelle.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "L'aire d'un carré n'est pas proportionnelle au côté : 9 ÷ 3 = 3 mais 36 ÷ 6 = 6." },
                    { text: "A = c² : si le côté est multiplié par 2, l'aire est multipliée par 4." },
                    { text: "Aire du carré de côté 6 cm = 6² = 36 cm²." },
                  ],
                },
                { type: "note", text: "Toujours tester le rapport avant d'appliquer la règle de trois." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 9 : valeur initiale mal calculée",
              objectifTag: "Pourcentages",
              enonce: "**Copie d'un candidat :** après −30 %, un prix vaut 140 €. Prix initial ?\n*Réponse produite :* « initial = 140 + 30 % de 140 = 182 € ».",
              question: "a) Identifier l'erreur.\nb) Donner le calcul correct.",
              correction: [
                { type: "paragraph", text: "**Erreur : pourcentage appliqué sur la valeur finale.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Les 30 % s'appliquaient sur le prix initial, pas sur 140 €." },
                    { text: "CM = 0,70 → initial = 140 ÷ 0,70 = 200 €." },
                    { text: "Vérification : 200 × 0,70 = 140 € ✓." },
                  ],
                },
                { type: "note", text: "Pour remonter à la valeur initiale, diviser par le CM." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 10 : taux successifs additionnés",
              objectifTag: "Successions",
              enonce: "**Copie d'un candidat :** un prix subit +10 % puis +10 %.\n*Réponse produite :* « +10 % + 10 % = +20 % global ».",
              question: "a) Identifier l'erreur.\nb) Donner le taux global correct.",
              correction: [
                { type: "paragraph", text: "**Erreur : addition des taux au lieu du produit des CM.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "La seconde hausse s'applique sur une base déjà augmentée de 10 %." },
                    { text: "CM global = 1,10 × 1,10 = 1,21." },
                    { text: "Taux global = (1,21 − 1) × 100 = +21 %." },
                  ],
                },
                { type: "note", text: "On multiplie les coefficients multiplicateurs ; on n'additionne jamais les taux." },
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
                  question: "Comment tester si une situation est proportionnelle ?",
                  answer:
                    "Calculer le rapport y ÷ x pour chaque paire. Si tous les rapports sont égaux, c'est proportionnel (y = k × x) ; si un seul diffère, non.",
                  astuce: "Aire du carré, tarif fixe + variable, °C↔°F : ne sont pas proportionnels.",
                },
                {
                  question: "Qu'est-ce qu'un ratio ? Comment partager selon un ratio a : b ?",
                  answer:
                    "Un ratio a : b est un partage proportionnel en (a + b) parts égales. 1 part = total ÷ (a + b), puis a parts et b parts. Exemple : 30 selon 2 : 3 → 1 part = 6, donc 12 et 18.",
                },
                {
                  question: "Les trois méthodes de la quatrième proportionnelle ?",
                  answer:
                    "Coefficient (k = y ÷ x, puis × la nouvelle valeur), règle de trois (produit en croix ÷ la valeur connue), linéarité (additionner/multiplier des colonnes). Toutes donnent le même résultat.",
                },
                {
                  question: "Comment calculer un taux de variation ?",
                  answer:
                    "Taux = (valeur finale − valeur initiale) ÷ valeur initiale × 100. La base est toujours la valeur initiale. Exemple : 120 → 150 donne 30 ÷ 120 × 100 = +25 %.",
                  astuce: "Diviser par la valeur de départ, jamais par la valeur d'arrivée.",
                },
                {
                  question: "Comment construire un coefficient multiplicateur ?",
                  answer:
                    "Augmentation de t % → CM = 1 + t/100 ; diminution de t % → CM = 1 − t/100. +25 % → 1,25 ; −15 % → 0,85. CM > 1 : hausse, CM entre 0 et 1 : baisse.",
                },
                {
                  question: "Comment retrouver la valeur initiale après une variation ?",
                  answer:
                    "V_initiale = V_finale ÷ CM. Après −30 %, prix 119 € : 119 ÷ 0,70 = 170 €. Ne jamais ajouter le % à la valeur finale.",
                },
                {
                  question: "Pourquoi ne peut-on pas additionner des taux successifs ?",
                  answer:
                    "Chaque variation s'applique sur une base différente. On multiplie les CM : +10 % puis +10 % donne 1,10 × 1,10 = 1,21, soit +21 %. Et +20 % puis −20 % donne 0,96, soit −4 %.",
                },
                {
                  question: "Comment résoudre un problème d'échelle ?",
                  answer:
                    "d_réelle = d_plan × dénominateur (résultat en cm), puis convertir : ÷100 → m, ÷1 000 → km. Exemple : 4 cm au 1/25 000 → 100 000 cm = 1 km.",
                  astuce: "Toujours mettre plan et réalité dans la même unité avant de calculer.",
                },
                {
                  question: "Comment convertir une durée en heures décimales ?",
                  answer:
                    "Minutes ÷ 60. 1h 45min = 1 + 45/60 = 1,75 h (jamais 1,45 h). Repères : 15min = 0,25 ; 20min = 0,333 ; 30min = 0,5 ; 40min = 0,667 ; 45min = 0,75.",
                },
                {
                  question: "Quelle structure commune ont vitesse, densité et débit ?",
                  answer:
                    "Le même triangle de formules : grandeur = quantité ÷ référence. v = d ÷ t ; densité = m ÷ V ; débit = V ÷ t. Couvrir la grandeur cherchée donne la formule.",
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
                  lines: ["Échelle : convertir cm → m → km", "Vitesse, densité, débit", "Durée en heures décimales"],
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
