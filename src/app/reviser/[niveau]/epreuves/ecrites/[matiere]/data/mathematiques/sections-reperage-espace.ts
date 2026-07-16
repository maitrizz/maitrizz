import type { Fiche } from "@/components/fiche/types";
import type { Niveau } from "@/lib/niveau";
import { COPIES_SECTIONS_REPERAGE_ESPACE } from "./copies-sections-reperage-espace";
import { EXERCICES_SECTIONS_REPERAGE_ESPACE } from "./exercices-sections-reperage-espace";

export const SAVOIR_FAIRE = [
  { id: "sections", label: "Identifier une section" },
  { id: "coordonnees-3d", label: "Coordonnées, distance, milieu (3D)" },
  { id: "diagonale-pave", label: "Diagonale d'un pavé / cube" },
  { id: "hauteur-pyramide", label: "Hauteur d'une pyramide régulière" },
];

function ficheSectionsReperageEspace(niveau: Niveau): Fiche {
  const l3 = niveau === "l3";
  return {
  slug: "sections-reperage-espace",
  matiere: "mathematiques",
  numero: 26,
  partie: "Partie 5 : Géométrie dans l'espace",
  title: l3 ? "Sections et repérage dans l'espace" : "Sections, repérage dans l'espace et sur la sphère",
  subtitle: l3
    ? "Section par un plan · sections des solides usuels · repère orthonormé de l'espace · Pythagore dans l'espace"
    : "Section par un plan · sections des solides usuels · repère orthonormé de l'espace · Pythagore dans l'espace · repérage sur la sphère (latitude, longitude)",
  badges: [
    { label: "★★ Fréquent", variant: "hot" },
    { label: l3 ? "Cycle 4 · Programme 2025 · Espace et géométrie" : "Cycle 4 · BOEN 2020 · Thème D", variant: "info" },
  ],
  metaTitle: l3
    ? "Sections et repérage dans l'espace (CRPE) · Fiche de révision | Maitrizz"
    : "Sections, repérage dans l'espace et sur la sphère (CRPE) · Fiche de révision | Maitrizz",
  metaDescription: l3
    ? "Fiche CRPE sur la géométrie dans l'espace : section d'un solide par un plan, sections des solides usuels, repère orthonormé de l'espace, Pythagore dans l'espace. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation."
    : "Fiche CRPE sur la géométrie dans l'espace : section d'un solide par un plan, sections des solides usuels, repère orthonormé de l'espace, Pythagore dans l'espace, repérage sur la sphère par latitude et longitude. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
              title: "Visualiser dans l'espace",
              text: l3
                ? "La section d'un solide est souvent donnée dans un contexte concret (coupe d'une boîte, d'un bâtiment, d'un fruit). La difficulté est de visualiser la section et d'en identifier la forme. Pythagore dans l'espace complète naturellement la fiche. Les calculs de volumes sont traités dans la [fiche N°15](fiche:perimetres-aires-volumes) ; le repère du plan et le théorème de Pythagore, dans les [fiche N°17](fiche:reperage-coordonnees) et [fiche N°21](fiche:theoreme-de-pythagore)."
                : "La section d'un solide est souvent donnée dans un contexte concret (coupe d'une boîte, d'un bâtiment, d'un fruit). La difficulté est de visualiser la section et d'en identifier la forme. Pythagore dans l'espace complète naturellement la fiche, et le repérage sur la sphère fait le pont avec la géographie. Les calculs de volumes sont traités dans la [fiche N°15](fiche:perimetres-aires-volumes) ; le repère du plan et le théorème de Pythagore, dans les [fiche N°17](fiche:reperage-coordonnees) et [fiche N°21](fiche:theoreme-de-pythagore).",
            },
            {
              type: "subsection",
              number: "①",
              title: "Qu'est-ce qu'une section ?",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Définition et méthode",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "La section d'un solide par un plan est l'intersection du solide avec ce plan :",
                        "la figure plane obtenue en « coupant » le solide.",
                        "Le plan coupe chaque face selon une droite ; la section est le polygone",
                        "formé par toutes ces droites d'intersection.",
                      ],
                      note: "Règle des parallèles : si le plan de section est parallèle à une face, la section est une figure de même forme que cette face.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "💡 Méthode pratique",
                  text: "Repérer les points où le plan coupe chaque arête du solide, puis les relier dans l'ordre : c'est la section.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Sections des solides usuels",
              blocks: [
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Cube",
                      variant: "info",
                      lines: [
                        "Plan parallèle à une face : carré.",
                        "Plan coupant 2 arêtes parallèles : rectangle.",
                        "Plan coupant 3 faces : triangle (jusqu'à équilatéral).",
                        "Plan coupant 6 faces : hexagone.",
                      ],
                    },
                    {
                      title: "Prisme droit",
                      variant: "info",
                      lines: [
                        "Plan parallèle aux bases : figure isométrique à la base.",
                        "Plan oblique : polygone à autant de côtés que d'arêtes traversées.",
                      ],
                    },
                    {
                      title: "Pyramide",
                      variant: "info",
                      lines: [
                        "Plan parallèle à la base : figure semblable à la base (réduite).",
                        "Plan passant par le sommet : triangle.",
                      ],
                    },
                    {
                      title: "Cylindre et cône",
                      variant: "info",
                      lines: [
                        "Cylindre : disque (plan ⊥ axe), rectangle (plan contenant l'axe), ellipse (oblique).",
                        "Cône : disque, triangle isocèle (plan axial), ellipse (oblique).",
                      ],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "Pour une pyramide, la section parallèle à la base est semblable, pas isométrique. Si le plan coupe les arêtes au rapport k depuis le sommet : côtés ×k, aire ×k². À mi-hauteur, k = 1/2 (côtés divisés par 2, aire divisée par 4).",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Repère et Pythagore dans l'espace",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Coordonnées, distance et milieu",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "Un point M est repéré par M(x ; y ; z) dans un repère orthonormé (3 axes perpendiculaires).",
                        "Distance : **AB = √((x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²)**",
                        "Milieu : M = ((x₁+x₂)/2 ; (y₁+y₂)/2 ; (z₁+z₂)/2)",
                      ],
                      note: "Extension directe des formules du plan, avec une troisième coordonnée z (la hauteur).",
                    },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Pythagore dans l'espace : la méthode en deux étapes",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "Diagonale d'un pavé L × l × h :",
                        "Étape 1 : d_base² = L² + l²",
                        "Étape 2 : d² = d_base² + h², soit **d = √(L² + l² + h²)**",
                        "Cube d'arête a : d = a√3 (diagonale d'une face : a√2).",
                      ],
                      note: "Hauteur d'une pyramide régulière : le pied de la hauteur est le centre de la base. h = √(arête latérale² − distance centre-sommet²).",
                    },
                  ],
                },
              ],
            },
            ...(l3
              ? []
              : [
                  {
                    type: "subsection" as const,
                    number: "④",
                    title: "Repérage sur la sphère (M2)",
                    blocks: [
                      {
                        type: "callout" as const,
                        variant: "warning" as const,
                        title: "Au programme M2 uniquement",
                        text: "Le repérage sur la sphère terrestre figure au programme du cycle 4 version 2020 (référence M2). Il a été retiré de la version 2025 : à ne pas reprendre pour la dérivation L3.",
                      },
                      {
                        type: "highlightBox" as const,
                        variant: "marine" as const,
                        title: "Latitude et longitude",
                        blocks: [
                          {
                            type: "formulaBlock" as const,
                            lines: [
                              "Tout point de la sphère terrestre est repéré par deux angles : (latitude ; longitude).",
                              "**Latitude** : de 0° (équateur) à 90° Nord ou Sud (les pôles).",
                              "**Longitude** : de 0° (méridien de Greenwich) à 180° Est ou Ouest.",
                            ],
                            note: "Méridiens : demi-grands cercles reliant les deux pôles (longitude constante). Parallèles : cercles perpendiculaires à l'axe des pôles (latitude constante).",
                          },
                        ],
                      },
                      {
                        type: "callout" as const,
                        variant: "info" as const,
                        text: "L'équateur est le seul parallèle qui soit un grand cercle (de même rayon que la sphère). Les autres parallèles sont des cercles plus petits. C'est une section de la sphère par un plan perpendiculaire à l'axe des pôles.",
                      },
                    ],
                  },
                ]),
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : oublier la troisième coordonnée",
              badge: "Fréquent",
              faux: "Distance entre A(1;2;3) et B(4;6;3) : √((4−1)² + (6−2)²) = 5.",
              vrai: "Le résultat est juste ici (car z identiques), mais la formule doit comporter les 3 termes : √(9 + 16 + 0) = 5.",
              methode: "Toujours écrire les trois carrés dans la distance 3D, même si l'un est nul.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : la diagonale du pavé en une seule étape",
              badge: "Classique",
              faux: "Diagonale d'un pavé 3 × 4 × 12 : √(3² + 12²) = √153 ≈ 12,37 cm.",
              vrai: "Le côté de 4 cm a été oublié : d = √(3² + 4² + 12²) = √169 = 13 cm.",
              methode: "Diagonale d'un pavé : d = √(L² + l² + h²), les trois dimensions.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : section de pyramide isométrique à la base",
              badge: "Conceptuel",
              faux: "Pyramide à base carrée de côté 6 cm coupée à mi-hauteur : section = carré de 6 cm.",
              vrai: "La section est semblable, pas isométrique : à mi-hauteur (k = 1/2), côté = 3 cm.",
              methode: "Section d'une pyramide parallèle à la base : côtés ×k, où k est la fraction de hauteur depuis le sommet.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : confondre diagonale de face et grande diagonale",
              badge: "Fréquent",
              faux: "Grande diagonale d'un cube d'arête 5 : √(5² + 5²) = 5√2 ≈ 7,07 cm.",
              vrai: "5√2 est la diagonale d'une face. La grande diagonale est √(5² + 5² + 5²) = 5√3 ≈ 8,66 cm.",
              methode: "Diagonale d'une face : a√2. Grande diagonale du cube : a√3. Deux résultats différents.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école : le regard du futur enseignant",
              text: l3
                ? "Au cycle 3 (CM1-6e), les élèves réalisent des coupes de solides concrets (fruits, fromages, boîtes) et observent les formes obtenues. La section d'un cube est étudiée vers la 6e-5e, le repère de l'espace en 4e.\n\nPour le CRPE : savoir décrire et construire une section dans les cas usuels, calculer une diagonale ou une hauteur par Pythagore en deux étapes, et utiliser les coordonnées 3D pour une distance ou un milieu."
                : "Au cycle 3 (CM1-6e), les élèves réalisent des coupes de solides concrets (fruits, fromages, boîtes) et observent les formes obtenues. La section d'un cube est étudiée vers la 6e-5e, le repère de l'espace en 4e.\n\nLe repérage sur la sphère relie naturellement les mathématiques et la géographie (latitude, longitude, méridiens, parallèles, fuseaux horaires) : une situation interdisciplinaire classique.\n\nPour le CRPE : savoir décrire et construire une section dans les cas usuels, calculer une diagonale ou une hauteur par Pythagore en deux étapes, et utiliser les coordonnées 3D pour une distance ou un milieu.",
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
              title: "Identifier le type de section, calculer en deux étapes",
              text: "Pour une section : repérer si le plan est parallèle, perpendiculaire ou oblique. Pour Pythagore dans l'espace : toujours deux étapes (d'abord dans un plan, puis dans l'espace).",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Identifier la section d'un solide",
              intro:
                "**Question type :** « Quelle est la forme de la section d'un cylindre par un plan parallèle à sa base ? »",
              steps: [
                {
                  number: "1",
                  text: "**Repérer la position du plan (parallèle, perpendiculaire, oblique).**",
                  example: { lines: ["Plan parallèle à la base d'un cylindre"] },
                },
                {
                  number: "2",
                  text: "**Appliquer la règle correspondante.**",
                  example: { lines: ["Plan // base d'un cylindre → disque de même rayon"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Quelle est la section d'une pyramide à base carrée par un plan parallèle à la base, à mi-hauteur ?",
              correction: [
                { type: "line", text: "Un **carré semblable** à la base, de côté divisé par 2 (rapport k = 1/2 depuis le sommet)." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Diagonale d'un pavé (Pythagore en deux étapes)",
              intro:
                "**Question type :** « Un pavé droit mesure 3 × 4 × 12 cm. Calculer la grande diagonale. »",
              steps: [
                {
                  number: "1",
                  text: "**Étape 1 : diagonale de la base.**",
                  example: { lines: ["d_base² = 3² + 4² = 25 → d_base = 5 (triplet 3-4-5)"] },
                },
                {
                  number: "2",
                  text: "**Étape 2 : grande diagonale.**",
                  example: { lines: ["d² = 25 + 12² = 169 → d = 13 (triplet 5-12-13)"] },
                },
                {
                  number: "3",
                  text: "**Formule directe équivalente.**",
                  example: { lines: ["d = √(L² + l² + h²) = √(9 + 16 + 144) = 13"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Grande diagonale d'un cube d'arête 5 cm (forme exacte) ?",
              correction: [
                { type: "line", text: "d = √(5² + 5² + 5²) = √75 = **5√3 ≈ 8,66 cm** (pas 5√2, qui est la diagonale d'une face)." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Distance et milieu dans l'espace",
              intro:
                "**Question type :** « A(1 ; 2 ; 3) et B(5 ; 0 ; 7). Calculer AB et le milieu de [AB]. »",
              steps: [
                {
                  number: "1",
                  text: "**Distance AB.**",
                  example: { lines: ["AB = √((5−1)² + (0−2)² + (7−3)²) = √(16 + 4 + 16) = √36 = 6"] },
                },
                {
                  number: "2",
                  text: "**Milieu de [AB].**",
                  example: { lines: ["M = ((1+5)/2 ; (2+0)/2 ; (3+7)/2) = (3 ; 1 ; 5)"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Distance entre A(2 ; 0 ; 1) et B(5 ; 4 ; 1) ?",
              correction: [
                { type: "line", text: "AB = √(3² + 4² + 0²) = √25 = **5**." },
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
              title: l3 ? "Sections et repérage dans l'espace" : "Sections, repérage dans l'espace et sur la sphère",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_SECTIONS_REPERAGE_ESPACE,
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
              title: l3 ? "Sections et repérage dans l'espace" : "Sections, repérage dans l'espace et sur la sphère",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_SECTIONS_REPERAGE_ESPACE,
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
              center: { title: "Espace", subtitle: "sections et repérage" },
              branches: [
                {
                  title: "Sections",
                  variant: "blue",
                  lines: ["plan //, ⊥ ou oblique", "cube, prisme, pyramide, cylindre"],
                },
                {
                  title: "Pyramide",
                  variant: "blue",
                  lines: ["section // base : semblable", "k depuis le sommet"],
                },
                {
                  title: "Repère 3D",
                  variant: "green",
                  lines: ["M(x ; y ; z)", "distance et milieu étendus"],
                },
                {
                  title: "Pythagore espace",
                  variant: "yellow",
                  lines: ["pavé : √(L²+l²+h²)", "cube : a√3 (face : a√2)"],
                },
                {
                  title: "Pyramide régulière",
                  variant: "yellow",
                  lines: ["pied = centre de base", "h = √(arête² − d²)"],
                },
                ...(l3
                  ? []
                  : [
                      {
                        title: "Sphère (M2)",
                        variant: "purple" as const,
                        dashed: true,
                        lines: ["latitude et longitude", "équateur = grand cercle"],
                      },
                    ]),
              ],
            },
          ],
        },
      ],
    },
  ],
  };
}

export const ficheSectionsReperageEspaceM2 = ficheSectionsReperageEspace("m2");
export const ficheSectionsReperageEspaceL3 = ficheSectionsReperageEspace("l3");
