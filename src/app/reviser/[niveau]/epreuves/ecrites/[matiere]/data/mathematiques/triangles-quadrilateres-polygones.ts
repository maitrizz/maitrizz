import type { Fiche } from "@/components/fiche/types";
import { COPIES_TRIANGLES_QUADRILATERES_POLYGONES } from "./copies-triangles-quadrilateres-polygones";
import { EXERCICES_TRIANGLES_QUADRILATERES_POLYGONES } from "./exercices-triangles-quadrilateres-polygones";

export const SAVOIR_FAIRE = [
  { id: "inegalite-classer", label: "Inégalité triangulaire et classification" },
  { id: "angles-triangle", label: "Calculer un angle dans un triangle" },
  { id: "cas-egalite", label: "Cas d'égalité des triangles" },
  { id: "quadrilateres", label: "Quadrilatères et hiérarchie" },
  { id: "nature-coordonnees", label: "Démontrer la nature en coordonnées" },
  { id: "polygones-reguliers", label: "Polygones réguliers et pavages" },
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
  metaTitle: "Triangles, quadrilatères et polygones · Fiche de révision CRPE",
  metaDescription:
    "Fiche CRPE de géométrie plane : types de triangles, inégalité triangulaire, somme des angles, cas d'égalité, parallélogramme et sa hiérarchie (rectangle, losange, carré), trapèze, cerf-volant et polygones réguliers. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
              title: "Le cœur de la géométrie plane",
              text: "Le jury ne veut pas du vocabulaire récité : il veut voir que vous savez définir, distinguer et raisonner sur ces figures. Un carré n'est pas « un rectangle aux côtés égaux » au sens flou : c'est précisément un losange qui a un angle droit (ou un rectangle aux côtés consécutifs égaux). Cette rigueur de définition est exactement ce qu'on attend d'un futur enseignant. La somme des angles d'un polygone et les constructions à la règle et au compas (médiatrice, bissectrice) sont détaillées dans la [fiche N°18](fiche:droites-angles-parallelisme). Les calculs de milieu et de distance en repère, utilisés pour démontrer la nature d'un quadrilatère, sont dans la [fiche N°17](fiche:reperage-coordonnees).",
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
                  number: "3",
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
              title: "Triangles, quadrilatères, polygones",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_TRIANGLES_QUADRILATERES_POLYGONES,
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
              title: "Triangles, quadrilatères, polygones",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_TRIANGLES_QUADRILATERES_POLYGONES,
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
      ],
    },
  ],
};
