import type { Fiche } from "@/components/fiche/types";
import { COPIES_PERIMETRES_AIRES_VOLUMES } from "./copies-perimetres-aires-volumes";
import { EXERCICES_PERIMETRES_AIRES_VOLUMES } from "./exercices-perimetres-aires-volumes";

export const SAVOIR_FAIRE = [
  { id: "perimetres", label: "Calculer un périmètre" },
  { id: "aires", label: "Calculer une aire (figures usuelles)" },
  { id: "volumes", label: "Calculer un volume (solides)" },
  { id: "conversions", label: "Convertir aires et volumes" },
  { id: "composite", label: "Aire ou volume d'une figure composite" },
  { id: "agrandissement", label: "Effet d'un agrandissement (k, k², k³)" },
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
                  text: "Un prisme droit a une section constante : V = aire de la base × hauteur. Un cylindre est un prisme dont la base est un disque. La pyramide et le cône ajoutent le facteur ⅓. La nature des solides (familles, patrons, représentations, aire latérale) est détaillée dans la [fiche N°25](fiche:solides-patrons-representation).",
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
                  text: "Si les longueurs sont multipliées par 2, l'aire est multipliée par 4 et le volume par 8. C'est aussi pourquoi les facteurs de conversion sont 10, 100, 1 000 : ×10 pour les longueurs, ×10² = 100 pour les aires, ×10³ = 1 000 pour les volumes. Le lien avec les échelles et la proportionnalité est développé dans la [fiche N°13](fiche:proportionnalite-pourcentages).",
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
                  number: "3",
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
              title: "Périmètres, aires, volumes et conversions",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_PERIMETRES_AIRES_VOLUMES,
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
              title: "Périmètres, aires, volumes et conversions",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_PERIMETRES_AIRES_VOLUMES,
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
      ],
    },
  ],
};
