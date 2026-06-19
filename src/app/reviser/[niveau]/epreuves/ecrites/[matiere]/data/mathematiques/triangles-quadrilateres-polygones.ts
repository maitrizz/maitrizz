import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je classe un triangle selon ses côtés (scalène, isocèle, équilatéral) et ses angles (acutangle, rectangle, obtusangle)" },
  { id: "e2", label: "J'applique l'inégalité triangulaire stricte pour décider si trois longueurs forment un triangle" },
  { id: "e3", label: "Je calcule un angle dans un triangle (somme 180°), y compris les cas isocèle et rectangle" },
  { id: "e4", label: "Je connais les cas d'égalité des triangles (CCC, CAC, ACA) et je sais que CCA ne suffit pas" },
  { id: "e5", label: "Je connais les propriétés caractéristiques du parallélogramme" },
  { id: "e6", label: "Je distingue rectangle (diagonales égales) et losange (diagonales perpendiculaires)" },
  { id: "e7", label: "Je sais qu'un carré est à la fois un rectangle et un losange, et je maîtrise la hiérarchie des quadrilatères" },
  { id: "e8", label: "Je connais le trapèze et le cerf-volant, qui ne sont pas des parallélogrammes" },
  { id: "e9", label: "Je démontre la nature d'un quadrilatère en coordonnées (milieux des diagonales, longueurs)" },
  { id: "e10", label: "Je connais les polygones réguliers et les trois pavages réguliers du plan" },
];

export const ficheTrianglesQuadrilateresPolygones: Fiche = {
  slug: "triangles-quadrilateres-polygones",
  matiere: "mathematiques",
  numero: 19,
  partie: "Partie 4 : Espace et géométrie plane",
  title: "Triangles, quadrilatères, polygones",
  subtitle:
    "Types de triangles · inégalité triangulaire · somme des angles · cas d'égalité · parallélogramme, rectangle, losange, carré · trapèze et cerf-volant · polygones réguliers",
  badges: [
    { label: "★★★ Très fréquent", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème D", variant: "info" },
  ],
  metaTitle: "Triangles, quadrilatères et polygones (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE de géométrie plane : types de triangles, inégalité triangulaire, somme des angles, cas d'égalité, parallélogramme et sa hiérarchie (rectangle, losange, carré), trapèze, cerf-volant et polygones réguliers. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                { number: "①", title: "Les triangles", text: "Classification, inégalité triangulaire, somme des angles, cas d'égalité." },
                { number: "②", title: "Le parallélogramme et sa famille", text: "Rectangle, losange, carré : propriétés caractéristiques et hiérarchie." },
                { number: "③", title: "Trapèze et cerf-volant", text: "Les quadrilatères qui ne sont pas des parallélogrammes." },
                { number: "④", title: "Polygones réguliers", text: "Angles, pavages réguliers, et démonstrations en coordonnées." },
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
              title: "Le cœur de la géométrie plane",
              text: "Le jury ne veut pas du vocabulaire récité : il veut voir que vous savez définir, distinguer et raisonner sur ces figures. Un carré n'est pas « un rectangle aux côtés égaux » au sens flou : c'est précisément un losange qui a un angle droit (ou un rectangle aux côtés consécutifs égaux). Cette rigueur de définition est exactement ce qu'on attend d'un futur enseignant. La somme des angles d'un polygone et les constructions à la règle et au compas (médiatrice, bissectrice) sont détaillées dans la [fiche N°18](fiche:droites-angles-parallelisme).",
            },
            {
              type: "subsection",
              number: "①",
              title: "Les triangles",
              blocks: [
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Classer selon les côtés",
                      variant: "info",
                      lines: ["Scalène : aucun côté égal.", "Isocèle : au moins 2 côtés égaux.", "Équilatéral : 3 côtés égaux (cas particulier d'isocèle)."],
                    },
                    {
                      title: "Classer selon les angles",
                      variant: "info",
                      lines: ["Acutangle : 3 angles aigus.", "Rectangle : un angle droit.", "Obtusangle : un angle obtus."],
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "Les deux classifications se combinent : isocèle rectangle (angles 90°, 45°, 45°), équilatéral toujours acutangle (3 angles de 60°). Un triangle ne peut pas être à la fois rectangle et obtusangle.",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Inégalité triangulaire (condition d'existence)",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "Trois longueurs forment un triangle si chacune est",
                        "strictement inférieure à la somme des deux autres.",
                        "Raccourci : le plus grand côté < somme des deux autres.",
                      ],
                      note: "3, 4, 5 → 5 < 7 ✓ (et rectangle). 2, 3, 6 → 6 < 5 faux → impossible. 3, 4, 7 → 7 < 7 faux (inégalité stricte) → points alignés.",
                    },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Somme des angles et cas d'égalité",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "La somme des angles d'un triangle vaut **180°**. Conséquences : équilatéral → 3 angles de 60° ; rectangle → les deux angles aigus sont complémentaires ; isocèle → les deux angles à la base sont égaux.",
                    },
                    {
                      type: "paragraph",
                      text: "**Cas d'égalité (congruence)** : deux triangles sont égaux si CCC (trois côtés), CAC (deux côtés et l'angle compris), ACA (deux angles et le côté compris). Pour les triangles rectangles, l'hypoténuse et un côté suffisent.",
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⚠️ CCA n'est pas un cas d'égalité",
                      text: "Deux côtés et un angle NON compris entre eux ne suffisent pas à conclure que les triangles sont égaux. C'est l'erreur la plus classique en démonstration.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Le parallélogramme et sa famille",
              blocks: [
                {
                  type: "paragraph",
                  text: "Un **parallélogramme** est un quadrilatère dont les côtés opposés sont parallèles deux à deux. On le reconnaît par ses **propriétés caractéristiques** (réciproques) : côtés opposés égaux, angles opposés égaux, ou diagonales qui se coupent en leur milieu. La dernière est la plus puissante au concours, car elle ne demande que des calculs de milieu.",
                },
                {
                  type: "table",
                  headers: ["Propriété", "Parallélogramme", "Rectangle", "Losange", "Carré"],
                  rows: [
                    ["Côtés opposés parallèles et égaux", "oui", "oui", "oui", "oui"],
                    ["Quatre côtés égaux", "non", "non", "oui", "oui"],
                    ["Quatre angles droits", "non", "oui", "non", "oui"],
                    ["Diagonales de même milieu", "oui", "oui", "oui", "oui"],
                    ["Diagonales égales", "non", "oui", "non", "oui"],
                    ["Diagonales perpendiculaires", "non", "non", "oui", "oui"],
                  ],
                },
                {
                  type: "cardGrid",
                  columns: 3,
                  cards: [
                    { title: "Rectangle", variant: "info", lines: ["Parallélogramme avec un angle droit.", "Caractéristique : diagonales égales."] },
                    { title: "Losange", variant: "info", lines: ["Parallélogramme à 4 côtés égaux.", "Caractéristique : diagonales perpendiculaires."] },
                    { title: "Carré", variant: "info", lines: ["À la fois rectangle ET losange.", "Diagonales égales, perpendiculaires, même milieu."] },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ La hiérarchie des quadrilatères",
                  text: "Tout carré est un losange ET un rectangle ; tout rectangle (et tout losange) est un parallélogramme. Mais un rectangle n'est pas forcément un losange, et inversement. Un carré est un cas particulier de rectangle, pas l'inverse.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Trapèze et cerf-volant : les non-parallélogrammes",
              blocks: [
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Trapèze",
                      variant: "info",
                      lines: [
                        "Exactement une paire de côtés parallèles (les bases).",
                        "Angles d'un même côté non parallèle : supplémentaires.",
                        "Trapèze isocèle : jambes égales, diagonales égales (sans être un parallélogramme).",
                      ],
                    },
                    {
                      title: "Cerf-volant (deltoïde)",
                      variant: "info",
                      lines: [
                        "Deux paires de côtés adjacents égaux.",
                        "Diagonales perpendiculaires.",
                        "La diagonale principale est un axe de symétrie.",
                      ],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Ce qui distingue les familles : parallélogramme (2 paires de côtés parallèles), trapèze (1 seule paire parallèle), cerf-volant (0 paire parallèle, mais 2 paires de côtés adjacents égaux). Le trapèze isocèle a ses diagonales égales sans être un rectangle : ne pas confondre.",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Polygones réguliers et pavages",
              blocks: [
                {
                  type: "paragraph",
                  text: "Un **polygone régulier** est à la fois équilatéral (côtés égaux) et équiangle (angles égaux). Angle intérieur = (n − 2) × 180° ÷ n ; angle extérieur = 360° ÷ n. La somme des angles extérieurs d'un polygone convexe vaut toujours 360°.",
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Les trois pavages réguliers du plan",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "Pour qu'un polygone régulier pave le plan, son angle intérieur doit diviser 360° exactement. Seuls trois conviennent : le **triangle équilatéral** (60°, soit 6 autour d'un point), le **carré** (90°, soit 4), l'**hexagone** (120°, soit 3). Le pentagone (108°) ne pave pas. Les abeilles utilisent l'hexagone : il couvre le maximum de surface pour un minimum de cire.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Constructions à la règle et au compas (médiatrice, bissectrice, perpendiculaire) : voir la [fiche N°18](fiche:droites-angles-parallelisme). Triangle équilatéral de côté a : tracer [AB], puis deux arcs de rayon a centrés en A et B ; leur intersection donne C.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : inégalité triangulaire non stricte",
              badge: "Très fréquent",
              faux: "3, 4, 7 forment un triangle car 7 = 3 + 4.",
              vrai: "L'inégalité est stricte : 7 < 3 + 4 est faux (7 = 7). Les points sont alignés, pas de triangle.",
              methode: "Comparer le plus grand côté à la somme des deux autres, avec une inégalité STRICTE.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : CCA pris pour un cas d'égalité",
              badge: "Classique",
              faux: "Deux côtés et un angle (non compris) égaux → triangles égaux.",
              vrai: "CCA ne suffit pas. Les cas valides sont CCC, CAC (angle compris), ACA.",
              methode: "L'angle doit être COMPRIS entre les deux côtés (CAC), ou le côté entre les deux angles (ACA).",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : confondre carré, rectangle et losange",
              badge: "Hiérarchie",
              faux: "« Un carré est un rectangle aux côtés égaux » présenté comme si rectangle ⊂ carré.",
              vrai: "C'est l'inverse : carré ⊂ rectangle et carré ⊂ losange. Tout carré est un rectangle, mais pas tout rectangle.",
              methode: "Rectangle = angles droits ; losange = côtés égaux ; carré = les deux.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : propriété simple prise pour caractéristique",
              badge: "Démonstration",
              faux: "« Les côtés opposés sont égaux, donc c'est un rectangle. »",
              vrai: "Côtés opposés égaux caractérise le parallélogramme, pas le rectangle. Pour un rectangle : diagonales égales, ou un angle droit.",
              methode: "Pour conclure, utiliser une propriété caractéristique (condition suffisante), pas une simple propriété.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école : le regard du futur enseignant",
              text: "Au cycle 2, les élèves reconnaissent et nomment les figures par la vue et le toucher (carré, rectangle, triangle, cercle), et construisent avec règle et équerre : ils reconnaissent, ils ne démontrent pas encore.\n\nAu cycle 3, ils décrivent rigoureusement avec le vocabulaire géométrique (côtés, angles, diagonales) et commencent à justifier : ils distinguent un carré d'un losange par ses angles, un rectangle d'un parallélogramme par ses angles droits. L'inégalité triangulaire et la somme des angles du triangle apparaissent en 6e.\n\nCe que le jury attend : la rigueur du cycle 4 (définitions, propriétés caractéristiques, démonstrations) et la conscience de la hiérarchie des quadrilatères. Savoir d'où viennent ces notions permet d'enseigner avec pertinence.",
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
              title: "Identifier la notion, puis la propriété",
              text: "Repérer la figure en jeu, choisir la propriété (caractéristique pour conclure), calculer, justifier. Au concours, la rigueur de la rédaction compte autant que le résultat. Chaque savoir-faire se termine par une vérification.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Vérifier si trois longueurs forment un triangle",
              intro:
                "**Question type :** « Des cordes de 5 m, 8 m et 14 m peuvent-elles former un triangle ? »",
              steps: [
                {
                  number: "1",
                  text: "**Repérer le plus grand côté.**",
                  example: { lines: ["14 est le plus grand"] },
                },
                {
                  number: "2",
                  text: "**Comparer strictement à la somme des deux autres.**",
                  example: { lines: ["5 + 8 = 13 ; 14 < 13 ? non"] },
                },
                {
                  number: "3",
                  text: "**Conclure.**",
                  example: { lines: ["L'inégalité triangulaire n'est pas vérifiée : pas de triangle."] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Les longueurs 6, 6, 6 forment-elles un triangle ? De quel type ?",
              correction: [
                { type: "line", text: "6 < 6 + 6 = 12 ✓ : oui, c'est un triangle **équilatéral**." },
                { type: "note", text: "On vérifie l'inégalité même quand le résultat semble évident." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Calculer un angle dans un triangle",
              intro:
                "**Question type :** « Triangle isocèle ABC, AB = AC, angle en A = 40°. Calculer les angles en B et C. »",
              steps: [
                {
                  number: "1",
                  text: "**Utiliser la propriété isocèle (angles à la base égaux).**",
                  example: { lines: ["AB = AC → angle en B = angle en C"] },
                },
                {
                  number: "2",
                  text: "**Appliquer la somme 180°.**",
                  example: { lines: ["40° + 2 × (angle en B) = 180° → angle en B = 70°"] },
                },
                {
                  number: "💡",
                  text: "**Vérifier.**",
                  example: { lines: ["40° + 70° + 70° = 180° ✓"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Triangle rectangle en C, angle en A = 27°. Quel est l'angle en B ?",
              correction: [
                { type: "line", text: "180° − 90° − 27° = **63°** (les deux angles aigus sont complémentaires : 27° + 63° = 90°)." },
                { type: "note", text: "Dans un triangle rectangle, les deux angles aigus totalisent 90°." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Identifier un quadrilatère par ses propriétés",
              intro:
                "**Question type :** « ABCD a des diagonales qui se coupent en leur milieu et sont égales. Quelle figure ? »",
              steps: [
                {
                  number: "1",
                  text: "**Diagonales de même milieu → parallélogramme.**",
                  example: { lines: ["Condition caractéristique du parallélogramme"] },
                },
                {
                  number: "2",
                  text: "**Ajouter la propriété supplémentaire.**",
                  example: { lines: ["Diagonales égales → rectangle"] },
                  warn: "⚠️ Si en plus perpendiculaires → carré ; perpendiculaires seules (milieu commun) → losange.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Un parallélogramme a ses diagonales perpendiculaires. Quelle figure ?",
              correction: [
                { type: "line", text: "Un **losange** (diagonales perpendiculaires = propriété caractéristique du losange)." },
                { type: "note", text: "Si elles étaient aussi égales, ce serait un carré." },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Démontrer la nature d'un quadrilatère en coordonnées",
              intro:
                "**Question type :** « A(1 ; 2), B(4 ; 2), C(5 ; 5), D(2 ; 5). ABCD est-il un rectangle ? »",
              steps: [
                {
                  number: "1",
                  text: "**Vérifier le parallélogramme : milieux des diagonales.**",
                  example: { lines: ["Milieu [AC] = (3 ; 3,5) ; milieu [BD] = (3 ; 3,5) → même milieu → parallélogramme"] },
                },
                {
                  number: "2",
                  text: "**Tester la propriété caractéristique visée.**",
                  example: { lines: ["AC² = 4² + 3² = 25 → AC = 5", "BD² = (−2)² + 3² = 13 → BD = √13"] },
                },
                {
                  number: "3",
                  text: "**Conclure rigoureusement (même par la négative).**",
                  example: { lines: ["AC ≠ BD : ce n'est pas un rectangle, juste un parallélogramme."] },
                  warn: "⚠️ Conclure par la négative est une réponse rigoureuse, valorisée par le jury.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Quelle est la première chose à vérifier pour montrer qu'un quadrilatère est un parallélogramme en coordonnées ?",
              correction: [
                { type: "line", text: "Que les **diagonales ont le même milieu** (calcul de deux milieux qui coïncident)." },
                { type: "note", text: "C'est la propriété caractéristique la plus rapide en coordonnées." },
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
              text: "10 questions rapides pour vérifier que le Cours et la Méthode sont bien ancrés. Le détail objectif par objectif est dans l'onglet Auto-évaluation.",
            },
            {
              type: "quizBlock",
              questions: [
                {
                  objectifId: "e1",
                  question: "Un triangle a trois angles de 60°. Quel est son type selon les côtés ?",
                  options: ["Scalène", "Isocèle non équilatéral", "Équilatéral", "Rectangle"],
                  correctIndex: 2,
                  explanation: "Trois angles égaux (60°) impliquent trois côtés égaux : le triangle est équilatéral (et acutangle).",
                },
                {
                  objectifId: "e2",
                  question: "Les longueurs 2, 3 et 6 forment-elles un triangle ?",
                  options: ["Oui", "Non, car 6 n'est pas inférieur à 2 + 3 = 5", "Oui, c'est un triangle plat", "On ne peut pas savoir"],
                  correctIndex: 1,
                  explanation: "6 < 2 + 3 = 5 est faux : l'inégalité triangulaire n'est pas vérifiée, pas de triangle.",
                },
                {
                  objectifId: "e3",
                  question: "Triangle isocèle de sommet principal A avec angle en A = 40°. Que valent les angles à la base ?",
                  options: ["40° chacun", "70° chacun", "100° chacun", "50° chacun"],
                  correctIndex: 1,
                  explanation: "(180° − 40°) ÷ 2 = 70° pour chacun des deux angles à la base.",
                },
                {
                  objectifId: "e4",
                  question: "Lequel n'est PAS un cas d'égalité des triangles ?",
                  options: ["CCC", "CAC (angle compris)", "ACA", "CCA (angle non compris)"],
                  correctIndex: 3,
                  explanation: "CCA (deux côtés et un angle non compris) ne suffit pas. Les cas valides : CCC, CAC, ACA.",
                },
                {
                  objectifId: "e5",
                  question: "Quelle propriété caractérise un parallélogramme ?",
                  options: ["Un angle droit", "Les diagonales se coupent en leur milieu", "Les diagonales sont égales", "Les diagonales sont perpendiculaires"],
                  correctIndex: 1,
                  explanation: "Diagonales de même milieu = propriété caractéristique du parallélogramme. Les autres caractérisent rectangle, losange ou carré.",
                },
                {
                  objectifId: "e6",
                  question: "Un parallélogramme dont les diagonales sont égales est un…",
                  options: ["losange", "rectangle", "cerf-volant", "trapèze"],
                  correctIndex: 1,
                  explanation: "Diagonales égales dans un parallélogramme = rectangle. Diagonales perpendiculaires = losange.",
                },
                {
                  objectifId: "e7",
                  question: "Quelle affirmation est correcte ?",
                  options: ["Tout rectangle est un carré", "Tout carré est un rectangle", "Un losange est toujours un rectangle", "Un parallélogramme est toujours un losange"],
                  correctIndex: 1,
                  explanation: "Tout carré est un rectangle (et un losange), mais l'inverse est faux. Le carré est un cas particulier.",
                },
                {
                  objectifId: "e8",
                  question: "Combien de paires de côtés parallèles a un trapèze ?",
                  options: ["Aucune", "Exactement une", "Deux", "Trois"],
                  correctIndex: 1,
                  explanation: "Le trapèze a exactement une paire de côtés parallèles (les bases). Le cerf-volant n'en a aucune.",
                },
                {
                  objectifId: "e9",
                  question: "Pour A(1 ; 2), B(4 ; 2), C(5 ; 5), D(2 ; 5), que valent les milieux des diagonales ?",
                  options: ["Différents", "Tous deux (3 ; 3,5), donc c'est un parallélogramme", "(2,5 ; 3) et (3 ; 4)", "On ne peut pas conclure"],
                  correctIndex: 1,
                  explanation: "Milieu [AC] = (3 ; 3,5) et milieu [BD] = (3 ; 3,5) : même milieu, donc ABCD est un parallélogramme.",
                },
                {
                  objectifId: "e10",
                  question: "Quel polygone régulier NE pave PAS le plan ?",
                  options: ["Le triangle équilatéral", "Le carré", "Le pentagone régulier", "L'hexagone régulier"],
                  correctIndex: 2,
                  explanation: "Son angle (108°) ne divise pas 360° (360 ÷ 108 ≈ 3,33). Seuls triangle, carré et hexagone pavent le plan.",
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
              text: "Identifiez la notion, choisissez la propriété, justifiez. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Triangles : existence et angles",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : inégalité triangulaire",
              objectifTag: "Existence d'un triangle",
              question: "Pour chaque triplet (cm), dire si un triangle existe, et préciser son type selon les côtés :\na) 3, 5, 7\nb) 4, 4, 9\nc) 6, 6, 6\nd) 1, 10, 10",
              correction: [
                { type: "line", label: "a)", text: "7 < 3 + 5 = 8 ✓ : possible, scalène." },
                { type: "line", label: "b)", text: "9 < 4 + 4 = 8 ? non : impossible." },
                { type: "line", label: "c)", text: "6 < 12 ✓ : possible, équilatéral." },
                { type: "line", label: "d)", text: "10 < 1 + 10 = 11 ✓ : possible, isocèle." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : angles dans les triangles",
              objectifTag: "Somme des angles",
              question: "Calculer les angles manquants :\na) angle A = 55°, angle B = 75°\nb) isocèle de sommet A, angle B = 35°\nc) rectangle en C, angle A = 27°",
              correction: [
                { type: "line", label: "a)", text: "angle C = 180° − 55° − 75° = 50°." },
                { type: "line", label: "b)", text: "angle C = angle B = 35°, donc angle A = 180° − 70° = 110° (obtusangle)." },
                { type: "line", label: "c)", text: "angle B = 180° − 90° − 27° = 63°." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : quadrilatères",
              sub: "Identifier par les propriétés",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : reconnaître la figure",
              objectifTag: "Propriétés caractéristiques",
              question:
                "Quelle figure obtient-on dans chaque cas ?\na) Parallélogramme dont les diagonales sont égales.\nb) Parallélogramme dont les diagonales sont perpendiculaires.\nc) Parallélogramme dont les diagonales sont égales et perpendiculaires.\nd) Quadrilatère avec une seule paire de côtés parallèles.",
              correction: [
                { type: "line", label: "a)", text: "Rectangle." },
                { type: "line", label: "b)", text: "Losange." },
                { type: "line", label: "c)", text: "Carré." },
                { type: "line", label: "d)", text: "Trapèze." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : polygones réguliers",
              objectifTag: "Angles et pavage",
              question: "a) Angle intérieur d'un octogone régulier ?\nb) Angle extérieur d'un hexagone régulier ?\nc) Pourquoi le pentagone régulier ne pave-t-il pas le plan ?",
              correction: [
                { type: "line", label: "a)", text: "(8 − 2) × 180° ÷ 8 = 1 080° ÷ 8 = 135°." },
                { type: "line", label: "b)", text: "360° ÷ 6 = 60°." },
                { type: "line", label: "c)", text: "Angle 108° ; 360° ÷ 108° ≈ 3,33 n'est pas entier : les pentagones laissent des trous." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : démonstration en coordonnées",
              sub: "Milieux, longueurs, nature",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : nature d'un quadrilatère",
              objectifTag: "Démonstration en coordonnées",
              enonce: "On donne A(0 ; 0), B(4 ; 0), C(4 ; 4) et D(0 ; 4).",
              question: "a) Montrer que ABCD est un parallélogramme (milieux des diagonales).\nb) Calculer AC et BD.\nc) Conclure sur la nature exacte d'ABCD.",
              correction: [
                { type: "line", label: "a)", text: "Milieu [AC] = (2 ; 2) ; milieu [BD] = (2 ; 2) : même milieu → parallélogramme." },
                { type: "line", label: "b)", text: "AC = √(4² + 4²) = √32 ; BD = √(4² + 4²) = √32 : diagonales égales." },
                { type: "line", label: "c)", text: "Diagonales égales → rectangle ; côtés AB = AD = 4 (côtés consécutifs égaux) → c'est un carré." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : raisonnement complet",
              sub: "Cas d'égalité, justification",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 4 : cas d'égalité des triangles",
              objectifTag: "Congruence",
              enonce: "ABC et DEF sont deux triangles. On sait que AB = DE = 5 cm, AC = DF = 7 cm.",
              question:
                "a) Si l'angle en A est égal à l'angle en D, les triangles sont-ils égaux ? Quel cas ?\nb) Si on connaît seulement l'angle en B (= angle en E), peut-on conclure ?\nc) Pourquoi la rigueur sur l'angle « compris » est-elle essentielle ?",
              correction: [
                { type: "line", label: "a)", text: "Oui : AB = DE, AC = DF, et l'angle en A (compris entre AB et AC) égal à l'angle en D → cas CAC, triangles égaux." },
                { type: "line", label: "b)", text: "Non : l'angle en B n'est pas compris entre les deux côtés connus (AB et AC). C'est une configuration CCA, qui ne suffit pas." },
                { type: "line", label: "c)", text: "Sans l'angle compris, deux triangles différents peuvent partager ces données : la conclusion serait fausse." },
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
              text: "Cet exercice reproduit le format d'un sujet de concours : démonstration rigoureuse de la nature d'un quadrilatère en coordonnées. Comptez 25 minutes, en conditions réelles.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 5 : nature d'un quadrilatère",
              objectifTag: "Démonstration, nature, justification",
              enonce:
                "Dans un repère orthonormé, on donne A(1 ; 1), B(5 ; 2), C(6 ; 6) et D(2 ; 5).",
              question:
                "1.1 Calculer les coordonnées des milieux des diagonales [AC] et [BD].\n1.2 En déduire que ABCD est un parallélogramme.\n2.1 Calculer les longueurs AC et BD.\n2.2 Calculer les longueurs des côtés AB et AD.\n3.1 ABCD est-il un rectangle ? Un losange ? Un carré ? Justifier rigoureusement.\n3.2 Rédiger une phrase de conclusion sur la nature exacte d'ABCD.",
              correction: [
                { type: "line", label: "1.1", text: "Milieu [AC] = ((1 + 6) ÷ 2 ; (1 + 6) ÷ 2) = (3,5 ; 3,5) ; milieu [BD] = ((5 + 2) ÷ 2 ; (2 + 5) ÷ 2) = (3,5 ; 3,5)." },
                { type: "line", label: "1.2", text: "Les diagonales ont le même milieu : ABCD est un parallélogramme." },
                { type: "line", label: "2.1", text: "AC = √[(6 − 1)² + (6 − 1)²] = √50 ; BD = √[(2 − 5)² + (5 − 2)²] = √18. AC ≠ BD." },
                { type: "line", label: "2.2", text: "AB = √[(5 − 1)² + (2 − 1)²] = √17 ; AD = √[(2 − 1)² + (5 − 1)²] = √17. AB = AD." },
                { type: "line", label: "3.1", text: "Diagonales non égales → pas un rectangle (ni carré). Côtés consécutifs égaux (AB = AD) dans un parallélogramme → losange." },
                { type: "line", label: "3.2", text: "« ABCD est un parallélogramme dont deux côtés consécutifs sont égaux : c'est un losange (mais pas un carré, car ses diagonales ne sont pas égales). »" },
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
              title: "Erreur type · Exercice 6 : inégalité triangulaire non stricte",
              objectifTag: "Existence d'un triangle",
              enonce: "**Copie d'un candidat :** « 3, 4 et 7 forment un triangle car 7 = 3 + 4. »",
              question: "a) Identifier l'erreur.\nb) Donner la conclusion correcte.",
              correction: [
                { type: "paragraph", text: "**Erreur : inégalité prise au sens large.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "L'inégalité triangulaire est stricte : il faut 7 < 3 + 4, or 7 = 7." },
                    { text: "Quand le plus grand côté égale la somme des deux autres, les points sont alignés." },
                    { text: "3, 4, 7 ne forment donc pas un triangle (cas dégénéré)." },
                  ],
                },
                { type: "note", text: "Toujours vérifier une inégalité STRICTE." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 7 : CCA utilisé comme cas d'égalité",
              objectifTag: "Cas d'égalité",
              enonce: "**Copie d'un candidat :** « Les triangles ont deux côtés égaux et un angle égal, donc ils sont égaux. »",
              question: "a) Identifier l'erreur.\nb) Préciser à quelle condition la conclusion serait valable.",
              correction: [
                { type: "paragraph", text: "**Erreur : l'angle n'est pas compris entre les deux côtés (CCA).**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Deux côtés et un angle non compris (CCA) ne caractérisent pas l'égalité." },
                    { text: "Il faut que l'angle soit COMPRIS entre les deux côtés (cas CAC)." },
                    { text: "Les cas valides sont CCC, CAC, ACA (et hypoténuse-côté pour les rectangles)." },
                  ],
                },
                { type: "note", text: "Vérifier la position de l'angle (compris ou non) avant de conclure." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 8 : propriété simple prise pour caractéristique",
              objectifTag: "Démonstration de la nature",
              enonce: "**Copie d'un candidat :** « Les côtés opposés d'ABCD sont égaux, donc ABCD est un rectangle. »",
              question: "a) Identifier l'erreur.\nb) Donner la conclusion correcte.",
              correction: [
                { type: "paragraph", text: "**Erreur : propriété du parallélogramme prise pour celle du rectangle.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Côtés opposés égaux caractérise le parallélogramme, pas le rectangle." },
                    { text: "Pour un rectangle, il faut un angle droit, ou des diagonales égales." },
                    { text: "On ne peut conclure qu'au parallélogramme avec cette seule propriété." },
                  ],
                },
                { type: "note", text: "Pour conclure à une figure précise, utiliser sa propriété caractéristique." },
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
                  question: "Comment classe-t-on un triangle ?",
                  answer:
                    "Selon les côtés : scalène (aucun égal), isocèle (au moins deux égaux), équilatéral (trois égaux). Selon les angles : acutangle (trois aigus), rectangle (un droit), obtusangle (un obtus). Les deux classifications se combinent.",
                },
                {
                  question: "Énoncer l'inégalité triangulaire.",
                  answer:
                    "Trois longueurs forment un triangle si chacune est strictement inférieure à la somme des deux autres. Raccourci : le plus grand côté < somme des deux autres.",
                  astuce: "L'inégalité est stricte : si égalité, les points sont alignés.",
                },
                {
                  question: "Que valent la somme des angles d'un triangle et d'un polygone ?",
                  answer:
                    "Triangle : 180°. Polygone à n côtés : (n − 2) × 180°. Pour un polygone régulier, chaque angle vaut cette somme divisée par n.",
                },
                {
                  question: "Quels sont les cas d'égalité des triangles ?",
                  answer:
                    "CCC (trois côtés), CAC (deux côtés et l'angle compris), ACA (deux angles et le côté compris). Pour les triangles rectangles : hypoténuse et un côté. CCA ne suffit pas.",
                  astuce: "L'angle doit être COMPRIS entre les deux côtés.",
                },
                {
                  question: "Quelles propriétés caractérisent un parallélogramme ?",
                  answer:
                    "Côtés opposés parallèles (définition), ou côtés opposés égaux, ou angles opposés égaux, ou diagonales se coupant en leur milieu. Cette dernière est la plus rapide en coordonnées.",
                },
                {
                  question: "Comment distinguer rectangle, losange et carré ?",
                  answer:
                    "Rectangle : parallélogramme à angle droit (diagonales égales). Losange : parallélogramme à côtés égaux (diagonales perpendiculaires). Carré : les deux à la fois (diagonales égales ET perpendiculaires).",
                },
                {
                  question: "Quelle est la hiérarchie des quadrilatères ?",
                  answer:
                    "Carré ⊂ rectangle ⊂ parallélogramme, et carré ⊂ losange ⊂ parallélogramme. Tout carré est un rectangle et un losange, mais pas l'inverse.",
                  astuce: "Le carré est un cas particulier, jamais le cas général.",
                },
                {
                  question: "Qu'est-ce qu'un trapèze ? Un cerf-volant ?",
                  answer:
                    "Trapèze : exactement une paire de côtés parallèles (les bases) ; ce n'est pas un parallélogramme. Cerf-volant : deux paires de côtés adjacents égaux, diagonales perpendiculaires, une diagonale axe de symétrie.",
                },
                {
                  question: "Comment démontrer la nature d'un quadrilatère en coordonnées ?",
                  answer:
                    "Vérifier d'abord le parallélogramme (mêmes milieux des diagonales), puis la propriété caractéristique : diagonales égales → rectangle, longueurs de côtés égales → losange, les deux → carré.",
                },
                {
                  question: "Quels polygones réguliers pavent le plan ? Pourquoi ?",
                  answer:
                    "Le triangle équilatéral (60°), le carré (90°) et l'hexagone (120°) : leur angle intérieur divise 360° exactement. Le pentagone (108°) ne pave pas (360 ÷ 108 n'est pas entier).",
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
              center: { title: "Triangles et quadrilatères", subtitle: "géométrie plane" },
              branches: [
                {
                  title: "Triangles",
                  variant: "blue",
                  lines: ["Côtés : scalène, isocèle, équilatéral", "Angles : acutangle, rectangle, obtusangle", "Somme des angles 180°"],
                },
                {
                  title: "Inégalité triangulaire",
                  variant: "blue",
                  lines: ["Plus grand côté < somme des deux autres", "Inégalité STRICTE"],
                },
                {
                  title: "Cas d'égalité",
                  variant: "green",
                  lines: ["CCC, CAC, ACA", "CCA ne suffit pas", "Angle COMPRIS"],
                },
                {
                  title: "Parallélogramme",
                  variant: "green",
                  lines: ["Diagonales de même milieu", "Rectangle : diagonales égales", "Losange : diagonales ⊥"],
                },
                {
                  title: "Hiérarchie",
                  variant: "yellow",
                  lines: ["Carré = rectangle ET losange", "Trapèze : 1 paire //", "Cerf-volant : 2 paires adjacentes ="],
                },
                {
                  title: "Polygones réguliers",
                  variant: "purple",
                  dashed: true,
                  lines: ["Angle = (n − 2) × 180° ÷ n", "Pavages : triangle, carré, hexagone"],
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
