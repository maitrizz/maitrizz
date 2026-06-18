import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je distingue périmètre (longueur) et aire (surface), et je convertis les longueurs (×10)" },
  { id: "e2", label: "Je connais les formules d'aire des figures usuelles (triangle, disque, trapèze, losange, parallélogramme)" },
  { id: "e3", label: "Je convertis une aire (×100 entre unités consécutives)" },
  { id: "e4", label: "Je connais les formules de volume (pavé, prisme, cylindre, pyramide, cône, sphère)" },
  { id: "e5", label: "Je convertis un volume (×1 000) et je connais 1 dm³ = 1 L, 1 cm³ = 1 mL" },
  { id: "e6", label: "Je calcule l'aire ou le volume d'une figure composite (addition ou soustraction)" },
  { id: "e7", label: "Je sais qu'un agrandissement de rapport k multiplie les longueurs par k, les aires par k², les volumes par k³" },
  { id: "e8", label: "Je harmonise les unités avant tout calcul et je donne π en valeur exacte puis approchée" },
  { id: "e9", label: "Je sais expliquer une formule (ex. aire du rectangle par pavage) et la situer dans les programmes primaires" },
];

export const fichePerimetresAiresVolumes: Fiche = {
  slug: "perimetres-aires-volumes",
  matiere: "mathematiques",
  numero: 15,
  partie: "Partie 3 : Grandeurs et mesures",
  title: "Périmètres, aires, volumes et conversions",
  subtitle:
    "Longueurs et périmètres · aires des figures usuelles · volumes des solides · conversions (×10, ×100, ×1 000) · effet d'un agrandissement (×k, ×k², ×k³)",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème C", variant: "info" },
  ],
  metaTitle: "Périmètres, aires, volumes et conversions (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur les grandeurs et mesures : périmètres et aires des figures usuelles, volumes des solides, conversions d'unités (longueur, aire, volume), figures composites et effet d'un agrandissement (k, k², k³). Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                { number: "①", title: "Longueurs et périmètres", text: "Le contour d'une figure, et les conversions de longueurs (×10)." },
                { number: "②", title: "Aires", text: "Les formules des figures usuelles, et les conversions d'aires (×100)." },
                { number: "③", title: "Volumes", text: "Les formules des solides, et les conversions de volumes (×1 000)." },
                { number: "④", title: "Effet d'un agrandissement", text: "Longueurs ×k, aires ×k², volumes ×k³ : l'erreur n°1 du concours." },
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
              title: "La fiche du concret",
              text: "Superficie d'une salle, volume d'une piscine, périmètre d'un terrain : les grandeurs et mesures sont dans presque tous les sujets. Le jury attend trois choses : connaître les formules, maîtriser les conversions (y compris pour les aires et les volumes), et savoir situer ces notions dans les programmes primaires. La difficulté n'est pas la formule mais de choisir la bonne, dans la bonne unité, et de convertir sans se tromper.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Longueurs et périmètres",
              blocks: [
                {
                  type: "paragraph",
                  text: "Le **périmètre** (P) est la longueur du contour d'une figure. Son unité est toujours une unité de longueur (cm, m), jamais cm² ou m². Pour le cercle, on parle de **circonférence**, mais c'est la même idée.",
                },
                {
                  type: "table",
                  headers: ["Figure", "Formule du périmètre", "Exemple"],
                  rows: [
                    ["Carré (côté a)", "P = 4 × a", "a = 5 cm → 20 cm"],
                    ["Rectangle (L, l)", "P = 2 × (L + l)", "L = 8, l = 3 → 22 cm"],
                    ["Triangle (a, b, c)", "P = a + b + c", "3 + 4 + 5 = 12 cm"],
                    ["Cercle (rayon r)", "C = 2πr = πd", "r = 5 → 10π ≈ 31,4 cm"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Conversions de longueurs : ×10 entre unités consécutives",
                  text: "km, m, dm, cm, mm. Grande unité → petite : multiplier ; petite → grande : diviser. 1 m = 100 cm (×10 deux fois), 1 km = 1 000 m. Plus l'unité est petite, plus il en faut.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Aires des figures usuelles",
              blocks: [
                {
                  type: "paragraph",
                  text: "L'**aire** (A) mesure la surface intérieure. Son unité est toujours une unité au carré (cm², m²).",
                },
                {
                  type: "table",
                  headers: ["Figure", "Formule de l'aire", "Exemple"],
                  rows: [
                    ["Carré (côté a)", "A = a²", "a = 5 → 25 cm²"],
                    ["Rectangle (L, l)", "A = L × l", "8 × 3 → 24 cm²"],
                    ["Triangle (base b, hauteur h)", "A = ½ × b × h", "b = 6, h = 4 → 12 cm²"],
                    ["Parallélogramme (b, h)", "A = b × h", "7 × 4 → 28 cm²"],
                    ["Trapèze (bases B et b, hauteur h)", "A = ½ × (B + b) × h", "B = 8, b = 4, h = 3 → 18 cm²"],
                    ["Losange (diagonales d₁, d₂)", "A = ½ × d₁ × d₂", "d₁ = 10, d₂ = 6 → 30 cm²"],
                    ["Disque (rayon r)", "A = π × r²", "r = 3 → 9π ≈ 28,3 cm²"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ La hauteur est perpendiculaire à la base",
                  text: "Pour le triangle et le parallélogramme, h est la perpendiculaire à la base, pas le côté oblique (sauf si l'angle est droit). Pour le disque, on élève le rayon au carré (πr²), pas le diamètre.",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Conversions d'aires : ×100 entre unités consécutives",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "L'aire est en 2D : si les côtés sont ×10, la surface est ×10² = ×100. Donc 1 m² = 10 000 cm² (et non 100), 1 ha = 10 000 m², 1 km² = 100 ha. Un carré de 1 m de côté contient 100 × 100 = 10 000 petits carrés de 1 cm².",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Volumes des solides",
              blocks: [
                {
                  type: "paragraph",
                  text: "Le **volume** (V) mesure l'espace occupé. Son unité est toujours une unité au cube (cm³, m³, dm³).",
                },
                {
                  type: "table",
                  headers: ["Solide", "Formule du volume", "Exemple"],
                  rows: [
                    ["Cube (côté a)", "V = a³", "a = 3 → 27 cm³"],
                    ["Pavé droit (L, l, h)", "V = L × l × h", "4 × 3 × 2 → 24 cm³"],
                    ["Prisme droit (base A_b, hauteur h)", "V = A_b × h", "A_b = 12, h = 5 → 60 cm³"],
                    ["Cylindre (rayon r, hauteur h)", "V = π × r² × h", "r = 3, h = 10 → 90π ≈ 283 cm³"],
                    ["Pyramide ou cône (base A_b, h)", "V = ⅓ × A_b × h", "A_b = 16, h = 6 → 32 cm³"],
                    ["Sphère (rayon r)", "V = 4/3 × π × r³", "r = 3 → 36π ≈ 113 cm³"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "💡 Le prisme et le cylindre, même logique",
                  text: "Un prisme droit a une section constante : V = aire de la base × hauteur. Un cylindre est un prisme dont la base est un disque. La pyramide et le cône ajoutent le facteur ⅓.",
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Conversions de volumes : ×1 000 entre unités consécutives",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "1 m³ = 1 000 dm³ = 1 000 L (volume en 3D : ×10³)",
                        "**1 dm³ = 1 L · 1 cm³ = 1 mL**",
                        "1 L = 1 000 cm³ · 1 cL = 10 cm³",
                      ],
                      note: "Le lien 1 cm³ = 1 mL est le pont entre volume géométrique et contenance.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Effet d'un agrandissement ou d'une réduction de rapport k",
              blocks: [
                {
                  type: "paragraph",
                  text: "Multiplier toutes les longueurs par k ne multiplie pas les aires et les volumes par k. C'est le résultat clé, et la source d'erreur numéro 1 au CRPE.",
                },
                {
                  type: "table",
                  headers: ["Rapport k", "Longueurs", "Aires", "Volumes"],
                  rows: [
                    ["2", "×2", "×4 (= 2²)", "×8 (= 2³)"],
                    ["3", "×3", "×9 (= 3²)", "×27 (= 3³)"],
                    ["1/2", "÷2", "÷4", "÷8"],
                    ["k", "×k", "×k²", "×k³"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ « Les côtés sont doublés, donc l'aire double » : FAUX",
                  text: "Si les longueurs sont multipliées par 2, l'aire est multipliée par 4 et le volume par 8. C'est aussi pourquoi les facteurs de conversion sont 10, 100, 1 000 : ×10 pour les longueurs, ×10² = 100 pour les aires, ×10³ = 1 000 pour les volumes.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : convertir une aire comme une longueur",
              badge: "Très fréquent",
              faux: "5 m² = 5 × 10 = 50 dm².",
              vrai: "5 m² = 5 × 100 = 500 dm² (1 m = 10 dm, donc 1 m² = 10² = 100 dm²).",
              methode: "Aire : ×100 entre unités consécutives. Volume : ×1 000. Longueur : ×10.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : confondre périmètre et aire",
              badge: "Très fréquent",
              faux: "Périmètre d'un carré de côté 5 cm = 25 cm².",
              vrai: "Périmètre = 4 × 5 = 20 cm (en cm). Aire = 5² = 25 cm² (en cm²).",
              methode: "Périmètre : le tour, en cm. Aire : la surface, en cm². Vérifier toujours l'unité.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : prendre un côté pour la hauteur",
              badge: "Conceptuel",
              faux: "Triangle de côtés 5, 6, 7 cm : A = ½ × 6 × 7.",
              vrai: "h est la perpendiculaire abaissée sur la base, pas un côté (sauf angle droit).",
              methode: "Utiliser la hauteur donnée. Sans elle, l'énoncé la précise ou propose un autre chemin.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : oublier π ou prendre π = 3",
              badge: "Fréquent",
              faux: "Aire d'un disque de rayon 4 cm = 4² = 16 cm².",
              vrai: "A = π × 4² = 16π ≈ 50,3 cm².",
              methode: "Toujours écrire π dans la formule : valeur exacte (16π) puis valeur approchée (≈ 50,3).",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école : le regard du futur enseignant",
              text: "Au cycle 2, on compare des longueurs et on mesure à la règle, avec les unités usuelles (cm, m), sans formules.\n\nAu cycle 3 (BO 2024), on construit les périmètres et aires des figures usuelles, les unités et conversions, et on introduit le volume avec des cubes. Les élèves construisent les formules par manipulation avant de les mémoriser.\n\nAu cycle 4, on aborde les volumes des solides (prisme, cylindre, pyramide, cône, sphère) et l'effet des agrandissements.\n\nCe que le jury attend : savoir expliquer pourquoi l'aire d'un rectangle est L × l, en le pavant de carrés-unités (L colonnes de l carrés), pas seulement appliquer la formule. À l'école, le sens précède la mémorisation.",
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
              title: "Le réflexe général",
              text: "Identifier la figure, écrire la formule, harmoniser les unités, calculer, vérifier l'unité du résultat (longueur → cm, aire → cm², volume → cm³). Chaque savoir-faire ci-dessous se termine par une vérification.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Calculer l'aire d'une figure composite",
              intro:
                "**Question type :** « Une pièce en L : un rectangle 8 m × 6 m avec un coin de 3 m × 2 m retiré. Aire ? »",
              steps: [
                {
                  number: "1",
                  text: "**Décomposer (addition) ou soustraire un morceau.**",
                  example: { lines: ["Soustraction : 8 × 6 − 3 × 2 = 48 − 6 = 42 m²"] },
                },
                {
                  number: "2",
                  text: "**Vérifier par une autre découpe.**",
                  example: { lines: ["Addition : 5 × 6 + 3 × 4 = 30 + 12 = 42 m² ✓"] },
                },
                {
                  number: "💡",
                  text: "**Contrôler l'unité et l'ordre de grandeur.**",
                  example: { lines: ["42 m² entre 30 et 48 m² : cohérent"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Un rectangle 10 m × 7 m dont on retire un carré de 2 m de côté. Aire restante ?",
              correction: [
                { type: "line", text: "10 × 7 − 2² = 70 − 4 = **66 m²**." },
                { type: "note", text: "Aire composite : grande figure moins le morceau retiré." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Convertir une aire ou un volume",
              intro:
                "**Question type :** « Convertir 3,5 m² en cm², puis 2,4 m³ en L. »",
              steps: [
                {
                  number: "1",
                  text: "**Identifier le facteur selon le type de grandeur.**",
                  example: { lines: ["Aire : 1 m² = 10 000 cm² (100²)", "Volume : 1 m³ = 1 000 L (10³)"] },
                },
                {
                  number: "2",
                  text: "**Multiplier (ou diviser) selon le sens.**",
                  example: { lines: ["3,5 × 10 000 = 35 000 cm²", "2,4 × 1 000 = 2 400 L"] },
                  warn: "⚠️ Pour les aires, ×100² = 10 000, pas ×100. C'est l'erreur la plus fréquente.",
                },
                {
                  number: "3",
                  text: "**Vérifier le sens : vers une plus petite unité → on multiplie.**",
                  example: { lines: ["35 000 cm² > 3,5 m² ✓"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Convertir 2,5 m² en cm², et 500 L en m³.",
              correction: [
                { type: "line", text: "2,5 × 10 000 = **25 000 cm²** ; 500 L = 0,5 m³ (1 000 L = 1 m³)." },
                { type: "note", text: "Aire ×100 entre unités voisines, volume ×1 000." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Calculer le volume d'un solide",
              intro:
                "**Question type :** « Une citerne cylindrique de rayon 80 cm et de hauteur 1,5 m. Volume en litres ? »",
              steps: [
                {
                  number: "1",
                  text: "**Harmoniser les unités avant tout calcul.**",
                  example: { lines: ["r = 80 cm, h = 1,5 m = 150 cm"] },
                  warn: "⚠️ Ne jamais mélanger cm et m dans le même calcul.",
                },
                {
                  number: "2",
                  text: "**Appliquer la formule.**",
                  example: { lines: ["V = π × 80² × 150 = 960 000π cm³ ≈ 3 016 000 cm³"] },
                },
                {
                  number: "3",
                  text: "**Convertir en litres (1 L = 1 000 cm³).**",
                  example: { lines: ["960 000π ÷ 1 000 = 960π ≈ 3 016 L"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Un pavé de 20 cm × 10 cm × 5 cm contient combien de litres ?",
              correction: [
                { type: "line", text: "V = 20 × 10 × 5 = 1 000 cm³ = **1 L** (car 1 L = 1 000 cm³)." },
                { type: "note", text: "1 cm³ = 1 mL, donc 1 000 cm³ = 1 000 mL = 1 L." },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Calculer un périmètre avec π",
              intro:
                "**Question type :** « Un stade : un rectangle 80 m × 40 m prolongé par deux demi-cercles de diamètre 40 m. Périmètre ? »",
              steps: [
                {
                  number: "1",
                  text: "**Décomposer le contour.**",
                  example: { lines: ["2 longueurs : 2 × 80 = 160 m", "2 demi-cercles = 1 cercle de diamètre 40 m"] },
                },
                {
                  number: "2",
                  text: "**Calculer la partie circulaire (C = πd).**",
                  example: { lines: ["C = 40π m"] },
                },
                {
                  number: "3",
                  text: "**Additionner, donner valeur exacte puis approchée.**",
                  example: { lines: ["P = 160 + 40π ≈ 285,7 m"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Circonférence d'un cercle de rayon 7 cm (valeur exacte puis approchée) ?",
              correction: [
                { type: "line", text: "C = 2π × 7 = 14π cm ≈ **44 cm**." },
                { type: "note", text: "Donner la valeur exacte (14π) avant l'approchée." },
              ],
            },
            {
              type: "methodeGroup",
              number: "⑤",
              title: "Appliquer l'effet d'un agrandissement",
              intro:
                "**Question type :** « On agrandit une maquette d'un facteur 3. Une face de 8 cm² devient quelle aire ? Un volume de 2 cm³ ? »",
              steps: [
                {
                  number: "1",
                  text: "**Repérer le rapport k et la grandeur concernée.**",
                  example: { lines: ["k = 3 ; aire → ×k², volume → ×k³"] },
                },
                {
                  number: "2",
                  text: "**Appliquer le bon exposant.**",
                  example: { lines: ["Aire : 8 × 3² = 8 × 9 = 72 cm²", "Volume : 2 × 3³ = 2 × 27 = 54 cm³"] },
                  warn: "⚠️ Ne jamais multiplier l'aire ou le volume par k seul.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "On double les dimensions d'un cube. Son volume est multiplié par combien ?",
              correction: [
                { type: "line", text: "Par 2³ = **8** (les longueurs ×2, le volume ×k³)." },
                { type: "note", text: "Aire ×4, volume ×8 : le piège classique du concours." },
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
                  question: "Quel est le périmètre d'un carré de côté 5 cm ?",
                  options: ["25 cm²", "20 cm", "10 cm", "25 cm"],
                  correctIndex: 1,
                  explanation: "P = 4 × 5 = 20 cm (unité de longueur). 25 cm² serait l'aire, pas le périmètre.",
                },
                {
                  objectifId: "e2",
                  question: "Aire d'un triangle de base 6 cm et de hauteur 4 cm ?",
                  options: ["24 cm²", "12 cm²", "10 cm²", "12 cm"],
                  correctIndex: 1,
                  explanation: "A = ½ × b × h = ½ × 6 × 4 = 12 cm². La hauteur est perpendiculaire à la base.",
                },
                {
                  objectifId: "e3",
                  question: "Combien vaut 1 m² en cm² ?",
                  options: ["100 cm²", "1 000 cm²", "10 000 cm²", "1 000 000 cm²"],
                  correctIndex: 2,
                  explanation: "1 m = 100 cm, donc 1 m² = 100² = 10 000 cm². L'aire se convertit par ×100 entre unités consécutives.",
                },
                {
                  objectifId: "e4",
                  question: "Volume d'un cylindre de rayon 3 cm et de hauteur 10 cm ?",
                  options: ["30π cm³", "90π cm³", "9π cm³", "300 cm³"],
                  correctIndex: 1,
                  explanation: "V = π × r² × h = π × 9 × 10 = 90π ≈ 283 cm³.",
                },
                {
                  objectifId: "e5",
                  question: "À combien de litres correspond 1 dm³ ?",
                  options: ["10 L", "1 L", "1 000 L", "0,1 L"],
                  correctIndex: 1,
                  explanation: "1 dm³ = 1 L (et 1 cm³ = 1 mL). C'est le pont entre volume et contenance.",
                },
                {
                  objectifId: "e6",
                  question: "Une pièce en L : rectangle 8 m × 6 m moins un coin 3 m × 2 m. Aire ?",
                  options: ["48 m²", "42 m²", "54 m²", "40 m²"],
                  correctIndex: 1,
                  explanation: "8 × 6 − 3 × 2 = 48 − 6 = 42 m². On soustrait le morceau retiré.",
                },
                {
                  objectifId: "e7",
                  question: "On multiplie les dimensions d'un solide par 3. Son volume est multiplié par :",
                  options: ["3", "9", "27", "6"],
                  correctIndex: 2,
                  explanation: "Volume ×k³ = 3³ = 27. (Les longueurs ×3, les aires ×9, les volumes ×27.)",
                },
                {
                  objectifId: "e8",
                  question: "Aire d'un disque de rayon 4 cm ?",
                  options: ["16 cm²", "8π cm²", "16π cm² ≈ 50,3 cm²", "4π cm²"],
                  correctIndex: 2,
                  explanation: "A = π × r² = π × 16 = 16π ≈ 50,3 cm². On élève le rayon au carré, et on garde π.",
                },
                {
                  objectifId: "e9",
                  question: "Comment expliquer à un élève pourquoi l'aire d'un rectangle est L × l ?",
                  options: ["C'est une formule à mémoriser", "En le pavant de carrés-unités : L colonnes de l carrés", "En mesurant le périmètre", "En comptant les côtés"],
                  correctIndex: 1,
                  explanation: "On pave le rectangle de carrés de 1 unité : il y a l rangées de L carrés, soit L × l carrés-unités. Le sens précède la formule.",
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
              text: "Écrivez la formule, harmonisez les unités, vérifiez l'unité du résultat. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Formules usuelles et conversions",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : périmètre et aire",
              objectifTag: "Formules de base",
              enonce: "Une salle de classe est un rectangle de 9 m sur 6 m.",
              question: "a) Calculer son périmètre.\nb) Calculer son aire en m², puis en cm².\nc) Coût d'un parquet à 18 €/m² ?",
              correction: [
                { type: "line", label: "a)", text: "P = 2 × (9 + 6) = 30 m." },
                { type: "line", label: "b)", text: "A = 9 × 6 = 54 m² = 540 000 cm²." },
                { type: "line", label: "c)", text: "54 × 18 = 972 €." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : conversions",
              objectifTag: "Conversions",
              question: "Convertir :\na) 2,5 m² → cm²\nb) 45 000 cm² → m²\nc) 3 m³ → L\nd) 250 cL → cm³",
              correction: [
                { type: "line", label: "a)", text: "2,5 × 10 000 = 25 000 cm²." },
                { type: "line", label: "b)", text: "45 000 ÷ 10 000 = 4,5 m²." },
                { type: "line", label: "c)", text: "3 × 1 000 = 3 000 L." },
                { type: "line", label: "d)", text: "250 cL = 2 500 mL = 2 500 cm³ (1 mL = 1 cm³)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : aires et volumes",
              sub: "Disque, cylindre, figure composite",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : disque et cylindre",
              objectifTag: "Aire et volume",
              enonce: "Un réservoir cylindrique a un rayon de base de 50 cm et une hauteur de 2 m.",
              question: "a) Aire de la base (disque) en cm² (valeur exacte puis approchée).\nb) Volume du réservoir en cm³, puis en litres.",
              correction: [
                { type: "line", label: "a)", text: "A = π × 50² = 2 500π ≈ 7 854 cm²." },
                { type: "line", label: "b)", text: "h = 2 m = 200 cm. V = 2 500π × 200 = 500 000π ≈ 1 570 796 cm³ ≈ 1 571 L." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : figure composite",
              objectifTag: "Aire composite",
              enonce: "Un terrain est un rectangle de 30 m × 20 m, auquel on ajoute un demi-disque de diamètre 20 m sur un petit côté.",
              question: "a) Aire du rectangle.\nb) Aire du demi-disque (valeur exacte puis approchée).\nc) Aire totale du terrain.",
              correction: [
                { type: "line", label: "a)", text: "30 × 20 = 600 m²." },
                { type: "line", label: "b)", text: "Rayon = 10 m. Demi-disque = ½ × π × 10² = 50π ≈ 157 m²." },
                { type: "line", label: "c)", text: "600 + 50π ≈ 757 m²." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : agrandissement et réduction",
              sub: "Effets k, k², k³",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : la maquette",
              objectifTag: "Effet d'un rapport k",
              enonce: "Une maquette est à l'échelle 1/50 d'un bâtiment réel (le réel est 50 fois plus grand).",
              question: "a) Une fenêtre mesure 2 cm de haut sur la maquette : hauteur réelle en m ?\nb) Une façade fait 30 cm² sur la maquette : aire réelle en m² ?\nc) Le volume réel est 250 m³ : volume de la maquette en cm³ ?",
              correction: [
                { type: "line", label: "a)", text: "Longueur ×50 : 2 × 50 = 100 cm = 1 m." },
                { type: "line", label: "b)", text: "Aire ×50² = ×2 500 : 30 × 2 500 = 75 000 cm² = 7,5 m²." },
                { type: "line", label: "c)", text: "Volume réel ÷ 50³ = ÷125 000. 250 m³ = 250 000 000 cm³ ; ÷125 000 = 2 000 cm³." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 4 : volume d'une pyramide",
              objectifTag: "Volume",
              enonce: "Une pyramide a une base carrée de 6 cm de côté et une hauteur de 10 cm.",
              question: "a) Aire de la base.\nb) Volume de la pyramide.\nc) Comparer au volume du pavé de même base et même hauteur.",
              correction: [
                { type: "line", label: "a)", text: "A_base = 6² = 36 cm²." },
                { type: "line", label: "b)", text: "V = ⅓ × 36 × 10 = 120 cm³." },
                { type: "line", label: "c)", text: "Pavé : 36 × 10 = 360 cm³. La pyramide en fait le tiers (facteur ⅓)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : problèmes niveau CRPE",
              sub: "Combiner aire, volume, conversions",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 5 : la piscine",
              objectifTag: "Volume et capacité",
              enonce: "Une piscine a la forme d'un pavé droit de 10 m de long, 5 m de large et 1,5 m de profondeur.",
              question: "a) Volume en m³.\nb) Capacité en litres.\nc) À 12 L/min, combien de temps pour la remplir (en heures, arrondi) ?",
              correction: [
                { type: "line", label: "a)", text: "V = 10 × 5 × 1,5 = 75 m³." },
                { type: "line", label: "b)", text: "75 m³ × 1 000 = 75 000 L." },
                { type: "line", label: "c)", text: "75 000 ÷ 12 = 6 250 min ≈ 104 h (environ 4 jours et 8 h)." },
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
              text: "Cet exercice reproduit le format d'un sujet de concours, qui combine aire, volume, conversions et effet d'un agrandissement. Comptez 25 minutes, en conditions réelles.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 6 : le bac à sable et sa maquette",
              objectifTag: "Aire, volume, conversions, rapport k",
              enonce:
                "Une école installe un bac à sable en forme de pavé droit, de 3 m de long, 2 m de large et 30 cm de profondeur. Pour le présenter, on en fabrique une maquette à l'échelle 1/20.",
              question:
                "1.1 Calculer l'aire du fond du bac (en m²).\n1.2 Calculer le volume du bac (en m³), puis le volume de sable nécessaire en litres.\n1.3 Le sable coûte 45 € le m³. Coût total ?\n2.1 Sur la maquette (1/20), quelles sont les dimensions du bac en cm ?\n2.2 Quelle est l'aire du fond de la maquette (en cm²) ?\n2.3 Quel est le volume de la maquette (en cm³) ?\n3.1 Comment expliquer à un élève de CM2 pourquoi 1 m³ = 1 000 L ?",
              correction: [
                { type: "line", label: "1.1", text: "Aire du fond = 3 × 2 = 6 m²." },
                { type: "line", label: "1.2", text: "h = 30 cm = 0,3 m. V = 3 × 2 × 0,3 = 1,8 m³ = 1 800 L." },
                { type: "line", label: "1.3", text: "1,8 × 45 = 81 €." },
                { type: "line", label: "2.1", text: "÷ 20 : longueur 300 ÷ 20 = 15 cm, largeur 200 ÷ 20 = 10 cm, profondeur 30 ÷ 20 = 1,5 cm." },
                { type: "line", label: "2.2", text: "Aire du fond = 15 × 10 = 150 cm² (ou aire réelle 60 000 cm² ÷ 20² = ÷400 = 150 cm²)." },
                { type: "line", label: "2.3", text: "V = 15 × 10 × 1,5 = 225 cm³ (ou volume réel 1 800 000 cm³ ÷ 20³ = ÷8 000 = 225 cm³)." },
                { type: "line", label: "3.1", text: "1 m³ est un cube de 1 m = 10 dm de côté. Il contient 10 × 10 × 10 = 1 000 cubes de 1 dm³, et 1 dm³ = 1 L. Donc 1 m³ = 1 000 L." },
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
              title: "Erreur type · Exercice 7 : conversion d'aire fautive",
              objectifTag: "Conversions",
              enonce: "**Copie d'un candidat :** convertir 5 m² en dm².\n*Réponse produite :* « 5 m² = 5 × 10 = 50 dm² ».",
              question: "a) Identifier l'erreur.\nb) Donner la conversion correcte.",
              correction: [
                { type: "paragraph", text: "**Erreur : aire convertie comme une longueur.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Le candidat a multiplié par 10 (facteur des longueurs)." },
                    { text: "1 m = 10 dm, donc 1 m² = 10² = 100 dm²." },
                    { text: "5 m² = 5 × 100 = 500 dm²." },
                  ],
                },
                { type: "note", text: "Aire : ×100 entre unités consécutives ; volume : ×1 000 ; longueur : ×10." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 8 : aire doublée au lieu de quadruplée",
              objectifTag: "Effet d'un agrandissement",
              enonce: "**Copie d'un candidat :** on double les côtés d'un carré d'aire 9 cm².\n*Réponse produite :* « l'aire double : 9 × 2 = 18 cm² ».",
              question: "a) Identifier l'erreur.\nb) Donner la bonne aire.",
              correction: [
                { type: "paragraph", text: "**Erreur : aire multipliée par k au lieu de k².**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Doubler les longueurs (k = 2) ne double pas l'aire." },
                    { text: "L'aire est multipliée par k² = 4." },
                    { text: "Nouvelle aire = 9 × 4 = 36 cm² (un carré de côté 3 → côté 6, aire 36)." },
                  ],
                },
                { type: "note", text: "Longueurs ×k, aires ×k², volumes ×k³." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 9 : unités mélangées",
              objectifTag: "Harmonisation des unités",
              enonce: "**Copie d'un candidat :** volume d'un pavé de 2 m × 50 cm × 40 cm.\n*Réponse produite :* « V = 2 × 50 × 40 = 4 000 cm³ ».",
              question: "a) Identifier l'erreur.\nb) Donner le volume correct.",
              correction: [
                { type: "paragraph", text: "**Erreur : mètres et centimètres mélangés.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Le candidat a multiplié 2 (m) par 50 et 40 (cm) sans convertir." },
                    { text: "Tout convertir en cm : 2 m = 200 cm." },
                    { text: "V = 200 × 50 × 40 = 400 000 cm³ = 400 L." },
                  ],
                },
                { type: "note", text: "Toujours harmoniser les unités avant de multiplier." },
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
                  question: "Quelle différence entre périmètre et aire ?",
                  answer:
                    "Le périmètre est la longueur du contour (en cm, m). L'aire est la surface intérieure (en cm², m²). Carré de côté 5 cm : périmètre 20 cm, aire 25 cm².",
                  astuce: "Toujours vérifier l'unité : longueur ou unité au carré.",
                },
                {
                  question: "Formules d'aire : triangle, disque, trapèze, losange.",
                  answer:
                    "Triangle : ½ × b × h. Disque : π × r². Trapèze : ½ × (B + b) × h. Losange : ½ × d₁ × d₂. La hauteur h est perpendiculaire à la base.",
                },
                {
                  question: "Comment convertir une aire entre unités consécutives ?",
                  answer:
                    "×100 (ou ÷100), car l'aire est en 2D : 1 m = 10 dm → 1 m² = 100 dm². Donc 1 m² = 10 000 cm², 1 ha = 10 000 m².",
                  astuce: "Erreur classique : multiplier par 10 comme une longueur.",
                },
                {
                  question: "Formules de volume : prisme/cylindre, pyramide/cône, sphère.",
                  answer:
                    "Prisme et cylindre : V = aire de la base × hauteur (cylindre : π r² h). Pyramide et cône : ⅓ × aire de la base × hauteur. Sphère : 4/3 × π × r³.",
                },
                {
                  question: "Comment convertir un volume ? Les équivalences clés ?",
                  answer:
                    "×1 000 entre unités consécutives (3D). 1 dm³ = 1 L, 1 cm³ = 1 mL, 1 m³ = 1 000 L, 1 L = 1 000 cm³.",
                },
                {
                  question: "Effet d'un agrandissement de rapport k ?",
                  answer:
                    "Longueurs ×k, aires ×k², volumes ×k³. Doubler les côtés (k = 2) : aire ×4, volume ×8. C'est l'erreur n°1 du concours.",
                },
                {
                  question: "Comment calculer l'aire d'une figure composite ?",
                  answer:
                    "Décomposer en figures simples (addition), ou partir d'une grande figure et soustraire un morceau. Vérifier par une autre découpe et contrôler l'ordre de grandeur.",
                },
                {
                  question: "Pourquoi écrire π et non π = 3 ?",
                  answer:
                    "π ≈ 3,14159 n'est pas 3. On écrit π dans la formule, on donne la valeur exacte (ex. 16π cm²) puis la valeur approchée (≈ 50,3 cm²) si demandé.",
                },
                {
                  question: "Pourquoi harmoniser les unités avant un calcul de volume ?",
                  answer:
                    "Mélanger m et cm fausse le résultat. On convertit tout dans la même unité (souvent en cm pour obtenir des cm³), puis on applique la formule.",
                },
                {
                  question: "Comment expliquer l'aire du rectangle à un élève ?",
                  answer:
                    "En le pavant de carrés de 1 unité : on obtient l rangées de L carrés, soit L × l carrés-unités. Cette construction donne du sens à la formule avant de la mémoriser.",
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
              center: { title: "Grandeurs et mesures", subtitle: "périmètre, aire, volume" },
              branches: [
                {
                  title: "Périmètres",
                  variant: "blue",
                  lines: ["Carré 4a, rectangle 2(L + l)", "Cercle C = 2πr = πd", "Longueurs : ×10"],
                },
                {
                  title: "Aires",
                  variant: "green",
                  lines: ["Triangle ½bh, disque πr²", "Trapèze ½(B + b)h, losange ½d₁d₂", "Aires : ×100"],
                },
                {
                  title: "Volumes",
                  variant: "green",
                  lines: ["Prisme/cylindre A_b × h", "Pyramide/cône ⅓ A_b h, sphère 4/3 πr³", "Volumes : ×1 000"],
                },
                {
                  title: "Équivalences clés",
                  variant: "yellow",
                  lines: ["1 dm³ = 1 L", "1 cm³ = 1 mL", "1 m³ = 1 000 L"],
                },
                {
                  title: "Agrandissement k",
                  variant: "yellow",
                  lines: ["Longueurs ×k", "Aires ×k²", "Volumes ×k³"],
                },
                {
                  title: "Réflexes",
                  variant: "purple",
                  dashed: true,
                  lines: ["Harmoniser les unités", "Garder π, valeur exacte puis approchée", "Vérifier l'unité du résultat"],
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
