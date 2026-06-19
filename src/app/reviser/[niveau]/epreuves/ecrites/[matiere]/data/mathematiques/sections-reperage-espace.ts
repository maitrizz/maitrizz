import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je décris la section obtenue selon le plan (parallèle, perpendiculaire, oblique) sur les solides usuels" },
  { id: "e2", label: "Je sais que la section d'une pyramide par un plan parallèle à la base est semblable (pas isométrique) à la base" },
  { id: "e3", label: "Je connais les sections d'un cylindre (disque, rectangle, ellipse selon l'inclinaison)" },
  { id: "e4", label: "Je repère un point dans l'espace par (x ; y ; z) et je calcule une distance et un milieu" },
  { id: "e5", label: "Je calcule la grande diagonale d'un pavé en deux étapes ou par d = √(L² + l² + h²)" },
  { id: "e6", label: "Je distingue la diagonale d'une face (a√2) et la grande diagonale d'un cube (a√3)" },
  { id: "e7", label: "Je calcule la hauteur d'une pyramide régulière (Pythagore dans le triangle sommet-centre-base)" },
  { id: "e8", label: "Je repère un point sur la sphère terrestre par sa latitude et sa longitude (M2)" },
  { id: "e9", label: "Je fais le lien entre sections, vues planes et représentations des solides" },
];

export const ficheSectionsReperageEspace: Fiche = {
  slug: "sections-reperage-espace",
  matiere: "mathematiques",
  numero: 26,
  partie: "Partie 5 : Géométrie dans l'espace",
  title: "Sections, repérage dans l'espace et sur la sphère",
  subtitle:
    "Section par un plan · sections des solides usuels · repère orthonormé de l'espace · Pythagore dans l'espace · repérage sur la sphère (latitude, longitude)",
  badges: [
    { label: "★★ Fréquent", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème D", variant: "info" },
  ],
  metaTitle: "Sections, repérage dans l'espace et sur la sphère (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur la géométrie dans l'espace : section d'un solide par un plan, sections des solides usuels, repère orthonormé de l'espace, Pythagore dans l'espace, repérage sur la sphère par latitude et longitude. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                { number: "①", title: "Qu'est-ce qu'une section ?", text: "L'intersection d'un solide avec un plan, et la méthode pour la construire." },
                { number: "②", title: "Sections des solides usuels", text: "Cube, prisme, pyramide, cylindre, cône : les formes à connaître." },
                { number: "③", title: "Repère et Pythagore dans l'espace", text: "Coordonnées (x ; y ; z), distance, milieu, diagonale d'un pavé." },
                { number: "④", title: "Repérage sur la sphère", text: "Latitude et longitude, le lien avec la géographie (M2)." },
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
              title: "Visualiser dans l'espace",
              text: "La section d'un solide est souvent donnée dans un contexte concret (coupe d'une boîte, d'un bâtiment, d'un fruit). La difficulté est de visualiser la section et d'en identifier la forme. Pythagore dans l'espace complète naturellement la fiche, et le repérage sur la sphère fait le pont avec la géographie. Les calculs de volumes sont traités dans la fiche N°15.",
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
            {
              type: "subsection",
              number: "④",
              title: "Repérage sur la sphère (M2)",
              blocks: [
                {
                  type: "callout",
                  variant: "warning",
                  title: "Au programme M2 uniquement",
                  text: "Le repérage sur la sphère terrestre figure au programme du cycle 4 version 2020 (référence M2). Il a été retiré de la version 2025 : à ne pas reprendre pour la dérivation L3.",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Latitude et longitude",
                  blocks: [
                    {
                      type: "formulaBlock",
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
                  type: "callout",
                  variant: "info",
                  text: "L'équateur est le seul parallèle qui soit un grand cercle (de même rayon que la sphère). Les autres parallèles sont des cercles plus petits. C'est une section de la sphère par un plan perpendiculaire à l'axe des pôles.",
                },
              ],
            },
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
              text: "Au cycle 3 (CM1-6e), les élèves réalisent des coupes de solides concrets (fruits, fromages, boîtes) et observent les formes obtenues. La section d'un cube est étudiée vers la 6e-5e, le repère de l'espace en 4e.\n\nLe repérage sur la sphère relie naturellement les mathématiques et la géographie (latitude, longitude, méridiens, parallèles, fuseaux horaires) : une situation interdisciplinaire classique.\n\nPour le CRPE : savoir décrire et construire une section dans les cas usuels, calculer une diagonale ou une hauteur par Pythagore en deux étapes, et utiliser les coordonnées 3D pour une distance ou un milieu.",
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
                  number: "💡",
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
                  question: "Quelle est la section d'un cube par un plan parallèle à une face ?",
                  options: ["Un triangle", "Un carré", "Un hexagone", "Un cercle"],
                  correctIndex: 1,
                  explanation: "Un plan parallèle à une face du cube donne un carré identique à cette face.",
                },
                {
                  objectifId: "e2",
                  question: "Une pyramide à base carrée de côté 8 cm est coupée à mi-hauteur. Quel est le côté de la section ?",
                  options: ["8 cm", "4 cm", "16 cm", "2 cm"],
                  correctIndex: 1,
                  explanation: "Section semblable à la base, rapport k = 1/2 à mi-hauteur : côté = 8/2 = 4 cm.",
                },
                {
                  objectifId: "e3",
                  question: "Quelle section obtient-on en coupant un cylindre par un plan contenant son axe ?",
                  options: ["Un disque", "Une ellipse", "Un rectangle", "Un triangle"],
                  correctIndex: 2,
                  explanation: "Un plan contenant l'axe du cylindre donne un rectangle.",
                },
                {
                  objectifId: "e4",
                  question: "Distance entre A(1 ; 2 ; 3) et B(5 ; 0 ; 7) ?",
                  options: ["6", "√36", "Les deux réponses précédentes", "12"],
                  correctIndex: 2,
                  explanation: "AB = √(16 + 4 + 16) = √36 = 6.",
                },
                {
                  objectifId: "e5",
                  question: "Grande diagonale d'un pavé 6 × 8 × 24 cm ?",
                  options: ["26 cm", "10 cm", "30 cm", "√100 cm"],
                  correctIndex: 0,
                  explanation: "d = √(36 + 64 + 576) = √676 = 26 cm (base 6-8-10, puis 10-24-26).",
                },
                {
                  objectifId: "e6",
                  question: "Pour un cube d'arête a, que vaut la diagonale d'une face ?",
                  options: ["a√3", "a√2", "2a", "3a"],
                  correctIndex: 1,
                  explanation: "La diagonale d'une face (carré de côté a) vaut a√2. La grande diagonale du cube vaut a√3.",
                },
                {
                  objectifId: "e7",
                  question: "Pour une pyramide régulière, où se trouve le pied de la hauteur ?",
                  options: ["Sur un sommet de la base", "Au milieu d'une arête", "Au centre de la base", "Hors de la base"],
                  correctIndex: 2,
                  explanation: "Le pied de la hauteur d'une pyramide régulière est le centre de la base.",
                },
                {
                  objectifId: "e8",
                  question: "Sur la sphère terrestre, quel parallèle est un grand cercle ?",
                  options: ["Le méridien de Greenwich", "L'équateur", "Le cercle polaire", "Le tropique du Cancer"],
                  correctIndex: 1,
                  explanation: "L'équateur est le seul parallèle qui soit un grand cercle (même rayon que la sphère).",
                },
                {
                  objectifId: "e9",
                  question: "La vue de dessus d'un cône de révolution est :",
                  options: ["Un triangle", "Un rectangle", "Un disque", "Une ellipse"],
                  correctIndex: 2,
                  explanation: "Vu de dessus, un cône se projette en un disque (avec le sommet au centre).",
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
              text: "Identifiez le type de section, et pour Pythagore dans l'espace, raisonnez toujours en deux étapes. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Identifier et calculer",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : identifier des sections",
              objectifTag: "Sections usuelles",
              question:
                "Décrire la forme de la section :\na) Un cylindre coupé par un plan parallèle à sa base.\nb) Un cube coupé par un plan parallèle à une face.\nc) Une pyramide coupée par un plan passant par son sommet et un côté de la base.\nd) Un cône coupé par un plan contenant l'axe.",
              correction: [
                { type: "line", label: "a)", text: "Un disque de même rayon que la base." },
                { type: "line", label: "b)", text: "Un carré identique à la face du cube." },
                { type: "line", label: "c)", text: "Un triangle isocèle (sommet + les deux extrémités du côté)." },
                { type: "line", label: "d)", text: "Un triangle isocèle (section axiale)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : distance, milieu et nature d'un triangle",
              objectifTag: "Coordonnées 3D",
              enonce: "On donne A(2 ; 0 ; 1), B(5 ; 4 ; 1) et C(2 ; 4 ; 5).",
              question: "a) Calculer AB, AC et BC.\nb) Calculer le milieu M de [BC].\nc) Montrer que ABC est isocèle.",
              correction: [
                { type: "line", label: "a)", text: "AB = √(9 + 16 + 0) = 5 ; AC = √(0 + 16 + 16) = 4√2 ; BC = √(9 + 0 + 16) = 5." },
                { type: "line", label: "b)", text: "M = ((5+2)/2 ; (4+4)/2 ; (1+5)/2) = (3,5 ; 4 ; 3)." },
                { type: "line", label: "c)", text: "AB = BC = 5, donc ABC est isocèle en B." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : Pythagore dans l'espace",
              sub: "Deux étapes",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : diagonales d'un cube et d'un pavé",
              objectifTag: "Grande diagonale",
              question: "a) Grande diagonale d'un cube d'arête 5 cm (forme exacte).\nb) Grande diagonale d'un pavé 6 × 8 × 24 cm.\nc) La grande diagonale d'un cube mesure 12 cm. Quelle est son arête ?",
              correction: [
                { type: "line", label: "a)", text: "d = √(5² + 5² + 5²) = √75 = 5√3 ≈ 8,66 cm." },
                { type: "line", label: "b)", text: "d = √(36 + 64 + 576) = √676 = 26 cm." },
                { type: "line", label: "c)", text: "d = a√3 → a = 12/√3 = 4√3 ≈ 6,93 cm." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : hauteur d'une pyramide régulière",
              objectifTag: "Pythagore S-O-A",
              enonce: "Une pyramide régulière à base carrée de côté 8 cm a des arêtes latérales de 7 cm.",
              question: "a) Calculer la distance du centre de la base à un sommet de la base.\nb) Calculer la hauteur h de la pyramide.",
              correction: [
                { type: "line", label: "a)", text: "Diagonale de la base = 8√2, donc distance centre-sommet = demi-diagonale = 4√2 cm." },
                { type: "line", label: "b)", text: "h² = 7² − (4√2)² = 49 − 32 = 17 → h = √17 ≈ 4,12 cm." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : problème contextualisé",
              sub: "Section et diagonale",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : la toiture pyramidale",
              objectifTag: "Pythagore 3D, section",
              enonce: "Une toiture est une pyramide régulière à base rectangulaire 12 m × 8 m. Le faîte est à 3 m au-dessus du niveau de la base.",
              question: "a) Calculer la distance du centre O de la base à un angle de la base.\nb) Calculer la longueur d'une arête latérale (de S à un angle de la base).\nc) Un plan horizontal coupe à mi-hauteur. Forme et dimensions de la section ?",
              correction: [
                { type: "line", label: "a)", text: "Demi-diagonale = √(6² + 4²) = √52 = 2√13 ≈ 7,21 m." },
                { type: "line", label: "b)", text: "Arête² = h² + (2√13)² = 9 + 52 = 61 → arête = √61 ≈ 7,81 m." },
                { type: "line", label: "c)", text: "Section parallèle à la base, donc rectangle semblable. À mi-hauteur (k = 1/2) : 6 m × 4 m." },
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
              text: "Cet exercice reproduit le format d'un sujet de concours : il combine repérage 3D, distance et sections dans un contexte concret. Comptez environ 25 minutes, en conditions réelles.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 4 : la salle de classe",
              objectifTag: "Repérage 3D, distance, section",
              enonce:
                "Une salle de classe est modélisée par un pavé droit de 6 m × 8 m × 3 m (longueur × largeur × hauteur). Un vidéoprojecteur est fixé au coin A du plafond ; l'écran est au coin B du sol, diagonalement opposé.",
              question:
                "1.1 En plaçant l'origine au coin du sol situé sous A, donner les coordonnées de A et B.\n1.2 Calculer la distance AB (le câble entre projecteur et écran).\n1.3 Calculer le milieu M du câble.\n2.1 Un plan horizontal coupe la salle à 1,5 m du sol. Forme, dimensions et aire de la section ?\n2.2 Un plan vertical passe par la diagonale du sol et celle du plafond. Décrire la section et calculer sa diagonale.",
              correction: [
                { type: "line", label: "1.1", text: "Repère : x (longueur 6), y (largeur 8), z (hauteur 3). A = (0 ; 0 ; 3), B = (6 ; 8 ; 0)." },
                { type: "line", label: "1.2", text: "AB = √(6² + 8² + 3²) = √(36 + 64 + 9) = √109 ≈ 10,44 m." },
                { type: "line", label: "1.3", text: "M = ((0+6)/2 ; (0+8)/2 ; (3+0)/2) = (3 ; 4 ; 1,5)." },
                { type: "line", label: "2.1", text: "Plan parallèle au sol : rectangle 6 m × 8 m, aire = 48 m²." },
                { type: "line", label: "2.2", text: "Rectangle de largeur = diagonale du sol = √(6² + 8²) = 10 m et de hauteur 3 m. Sa diagonale = √(10² + 3²) = √109 ≈ 10,44 m (c'est la grande diagonale du pavé)." },
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
              title: "Erreur type · Exercice 5 : diagonale du pavé en une étape",
              objectifTag: "Grande diagonale",
              enonce: "**Copie d'un candidat :** pavé 3 × 4 × 12 cm.\n*Réponse produite :* « d = √(3² + 12²) = √153 ≈ 12,37 cm. »",
              question: "a) Identifier l'erreur.\nb) Donner la bonne réponse.",
              correction: [
                { type: "paragraph", text: "**Erreur : la dimension de 4 cm a été oubliée.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "La diagonale d'un pavé met en jeu les trois dimensions." },
                    { text: "d = √(3² + 4² + 12²) = √169 = 13 cm." },
                    { text: "Triplet 3-4-5 pour la base, puis 5-12-13." },
                  ],
                },
                { type: "note", text: "Diagonale d'un pavé : d = √(L² + l² + h²), toujours les trois dimensions." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 6 : section de pyramide isométrique",
              objectifTag: "Sections",
              enonce: "**Copie d'un candidat :** pyramide à base carrée de côté 6 cm coupée à mi-hauteur.\n*Réponse produite :* « La section est un carré de côté 6 cm. »",
              question: "a) Identifier l'erreur.\nb) Donner la bonne réponse.",
              correction: [
                { type: "paragraph", text: "**Erreur : la section d'une pyramide parallèle à la base est semblable, pas isométrique.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "La section se réduit en se rapprochant du sommet." },
                    { text: "À mi-hauteur, le rapport depuis le sommet est k = 1/2." },
                    { text: "Côté de la section = 6 × 1/2 = 3 cm (et aire divisée par 4)." },
                  ],
                },
                { type: "note", text: "Pour un prisme, la section parallèle aux bases est isométrique. Pour une pyramide, elle est semblable." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 7 : diagonale de face prise pour la grande diagonale",
              objectifTag: "Diagonales d'un cube",
              enonce: "**Copie d'un candidat :** grande diagonale d'un cube d'arête 5 cm.\n*Réponse produite :* « √(5² + 5²) = 5√2 ≈ 7,07 cm. »",
              question: "a) Identifier l'erreur.\nb) Donner la bonne réponse.",
              correction: [
                { type: "paragraph", text: "**Erreur : c'est la diagonale d'une face, pas la grande diagonale.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "5√2 relie deux sommets d'une même face." },
                    { text: "La grande diagonale traverse le cube : √(5² + 5² + 5²) = 5√3 ≈ 8,66 cm." },
                    { text: "Diagonale d'une face : a√2 ; grande diagonale : a√3." },
                  ],
                },
                { type: "note", text: "Les sujets demandent presque toujours la grande diagonale (a√3)." },
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
                  question: "Distance entre deux points de l'espace A(x₁;y₁;z₁) et B(x₂;y₂;z₂) ?",
                  answer:
                    "AB = √((x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²). Extension de la formule du plan avec une troisième coordonnée. Milieu : ((x₁+x₂)/2 ; (y₁+y₂)/2 ; (z₁+z₂)/2).",
                },
                {
                  question: "Diagonale d'un pavé droit L × l × h, et cas du cube ?",
                  answer:
                    "d = √(L² + l² + h²), calculée en deux étapes (d_base = √(L² + l²), puis d = √(d_base² + h²)). Cube d'arête a : d = a√3. Diagonale d'une face de cube : a√2.",
                  astuce: "Diagonale d'une face ≠ grande diagonale du solide.",
                },
                {
                  question: "Section d'une pyramide par un plan parallèle à la base ?",
                  answer:
                    "Une figure semblable à la base (pas isométrique). Au rapport k depuis le sommet : côtés ×k, aire ×k². À mi-hauteur, k = 1/2 (côtés divisés par 2, aire divisée par 4).",
                },
                {
                  question: "Sections d'un cube : quelles formes possibles ?",
                  answer:
                    "Carré (plan parallèle à une face), rectangle (2 arêtes parallèles), triangle (3 faces, jusqu'à équilatéral), quadrilatère (4 faces), hexagone (6 faces).",
                },
                {
                  question: "Les sections d'un cylindre ?",
                  answer:
                    "Plan parallèle ou perpendiculaire à l'axe : disque. Plan contenant l'axe : rectangle. Plan oblique : ellipse.",
                },
                {
                  question: "Hauteur d'une pyramide régulière : méthode ?",
                  answer:
                    "Le pied de la hauteur est le centre de la base. On calcule d, la distance du centre à un sommet de la base (base carrée de côté a : d = a√2/2). Puis h = √(arête latérale² − d²) par Pythagore.",
                },
                {
                  question: "Règle des parallèles pour les sections ?",
                  answer:
                    "Plan parallèle à une face. Prisme : section isométrique à la base. Pyramide : section semblable (réduite). Cylindre : disque de même rayon. Cône : disque plus petit.",
                },
                {
                  question: "Comment repère-t-on un point dans l'espace ?",
                  answer:
                    "Dans un repère orthonormé à trois axes perpendiculaires, par M(x ; y ; z) : x l'abscisse, y la profondeur, z la hauteur. C'est l'extension du repère du plan avec une coordonnée z.",
                },
                {
                  question: "Comment repère-t-on un point sur la sphère terrestre ? (M2)",
                  answer:
                    "Par sa latitude (0° à l'équateur, jusqu'à 90° N ou S aux pôles) et sa longitude (0° au méridien de Greenwich, jusqu'à 180° E ou O). Méridiens : demi-grands cercles reliant les pôles ; parallèles : cercles à latitude constante.",
                  astuce: "L'équateur est le seul parallèle qui soit un grand cercle. Notion au programme M2 (retirée en 2025).",
                },
                {
                  question: "Diagonale d'une face d'un cube et grande diagonale : les distinguer.",
                  answer:
                    "Diagonale d'une face (carré de côté a) : a√2. Grande diagonale du cube (sommet à sommet opposé) : a√3. Pour a = 5 : a√2 ≈ 7,07 et a√3 ≈ 8,66.",
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
                {
                  title: "Sphère (M2)",
                  variant: "purple",
                  dashed: true,
                  lines: ["latitude et longitude", "équateur = grand cercle"],
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
