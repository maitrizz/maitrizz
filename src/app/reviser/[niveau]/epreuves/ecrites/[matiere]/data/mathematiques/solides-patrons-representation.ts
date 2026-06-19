import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je connais les 5 familles de solides et leurs cas particuliers (cube, tétraèdre…)" },
  { id: "e2", label: "Je connais les formules S, A, F pour les prismes (2n, 3n, n+2) et les pyramides (n+1, 2n, n+1)" },
  { id: "e3", label: "Je connais la formule d'Euler (S + F = A + 2) et ses conditions d'application (polyèdres seulement)" },
  { id: "e4", label: "Je sais identifier un solide à partir de ses trois vues (face, dessus, côté)" },
  { id: "e5", label: "Je connais les règles de la perspective cavalière (face en vraie grandeur, fuite réduite, arêtes cachées en pointillés)" },
  { id: "e6", label: "Je décris le patron de chaque solide (formes et dimensions de chaque pièce)" },
  { id: "e7", label: "Je calcule l'aire latérale d'un prisme (périmètre de base × hauteur) et d'un cylindre (2πrh)" },
  { id: "e8", label: "Je sais que plusieurs patrons valides peuvent exister pour un même solide" },
  { id: "e9", label: "Je vérifie la validité d'un patron (faces présentes, dimensions cohérentes, formule d'Euler)" },
];

export const ficheSolidesPatronsRepresentation: Fiche = {
  slug: "solides-patrons-representation",
  matiere: "mathematiques",
  numero: 25,
  partie: "Partie 5 : Géométrie dans l'espace",
  title: "Solides, représentation et patrons",
  subtitle:
    "Prismes · pyramides · cylindres · cônes · sphères · formule d'Euler · perspective cavalière · vues · patrons",
  badges: [
    { label: "★★★ Quasiment chaque sujet", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème D", variant: "info" },
  ],
  metaTitle: "Solides, représentation et patrons (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur les solides : prismes, pyramides, cylindres, cônes et sphères, formule d'Euler, perspective cavalière, vues et patrons. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                { number: "①", title: "Les 5 familles de solides", text: "Prisme, pyramide, cylindre, cône, sphère : reconnaître et nommer." },
                { number: "②", title: "Sommets, arêtes, faces et Euler", text: "Les formules de comptage et la relation S + F = A + 2." },
                { number: "③", title: "Représentations", text: "Perspective cavalière et les trois vues (face, dessus, côté)." },
                { number: "④", title: "Patrons", text: "Déplier un solide, décrire ses pièces, vérifier qu'un patron est valide." },
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
              title: "Le passage du 2D au 3D",
              text: "Les solides sont présents dans presque tous les sujets : reconnaître un solide à partir de son patron, calculer une aire, identifier des vues. La difficulté n'est pas le calcul, c'est le passage du plan à l'espace : visualiser un solide depuis son patron, comprendre ce qu'est une vue, et ne pas confondre aire latérale et aire totale. Les calculs de volumes sont traités dans la fiche N°15.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Les 5 familles de solides",
              blocks: [
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Prisme droit",
                      variant: "info",
                      lines: [
                        "Deux bases parallèles et égales (polygones), reliées par des faces rectangulaires.",
                        "Cas particuliers : pavé droit (base rectangle), cube (base carrée = hauteur).",
                      ],
                    },
                    {
                      title: "Pyramide",
                      variant: "info",
                      lines: [
                        "Une base polygonale et un sommet S relié à chaque sommet de la base.",
                        "Cas particuliers : tétraèdre (base triangle), pyramide régulière (sommet au-dessus du centre).",
                      ],
                    },
                    {
                      title: "Cylindre de révolution",
                      variant: "info",
                      lines: [
                        "Deux bases circulaires et une surface latérale (un rectangle déroulé).",
                      ],
                    },
                    {
                      title: "Cône de révolution",
                      variant: "info",
                      lines: [
                        "Une base circulaire et un sommet.",
                        "Génératrice l = √(r² + h²).",
                      ],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "La sphère est l'ensemble des points situés à une distance r du centre O : ni face, ni arête, ni sommet. Cylindre, cône et sphère ont des faces courbes : ce ne sont pas des polyèdres.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Sommets, arêtes, faces et formule d'Euler",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Formules de comptage et relation d'Euler",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "Prisme à base n-gone : S = 2n · A = 3n · F = n + 2",
                        "Pyramide à base n-gone : S = n + 1 · A = 2n · F = n + 1",
                        "**Formule d'Euler (polyèdres) : S + F = A + 2**",
                      ],
                      note: "La formule d'Euler vaut pour tout polyèdre convexe (prismes, pyramides). Elle ne s'applique pas aux cylindres, cônes et sphères, qui ont des faces courbes.",
                    },
                  ],
                },
                {
                  type: "table",
                  headers: ["Solide", "S", "F", "A", "Vérification"],
                  rows: [
                    ["Tétraèdre", "4", "4", "6", "4 + 4 = 6 + 2 ✓"],
                    ["Cube", "8", "6", "12", "8 + 6 = 12 + 2 ✓"],
                    ["Prisme triangulaire", "6", "5", "9", "6 + 5 = 9 + 2 ✓"],
                    ["Pyramide à base carrée", "5", "5", "8", "5 + 5 = 8 + 2 ✓"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Euler est utile pour vérifier qu'un patron est correct ou pour trouver un élément manquant : si l'on connaît deux des trois nombres, on déduit le troisième.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Représentations : perspective cavalière et vues",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Les règles de la perspective cavalière",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "1. Faces de face : dessinées en vraie grandeur (non déformées).",
                        "2. Arêtes de fuite : en oblique (souvent 45°), longueur réduite de moitié.",
                        "3. Arêtes cachées : en pointillés.",
                        "4. Arêtes parallèles : restent parallèles dans le dessin.",
                      ],
                    },
                  ],
                },
                {
                  type: "table",
                  headers: ["Vue", "Direction", "Ce qu'on voit"],
                  rows: [
                    ["De face", "depuis l'avant", "la face avant projetée"],
                    ["De dessus", "depuis le haut", "le contour vu d'en haut"],
                    ["De côté", "depuis la droite", "le profil latéral"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Exemples : le cube donne trois carrés identiques. Le cylindre : face = rectangle, dessus = cercle, côté = rectangle. La pyramide à base carrée : face = triangle, dessus = carré, côté = triangle.",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Patrons : le solide déplié",
              blocks: [
                {
                  type: "paragraph",
                  text: "Un patron est le développement plan d'un solide : toutes ses faces dépliées dans un même plan, de sorte qu'en repliant on retrouve le solide.",
                },
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    { title: "Prisme droit", variant: "info", lines: ["2 bases (polygones identiques) + n rectangles latéraux.", "Aire latérale = périmètre de base × hauteur."] },
                    { title: "Pyramide", variant: "info", lines: ["1 base + n triangles (un par arête de base).", "Régulière : les n triangles sont isocèles et identiques."] },
                    { title: "Cylindre", variant: "info", lines: ["2 disques (rayon r) + 1 rectangle.", "Rectangle : largeur 2πr, hauteur h."] },
                    { title: "Cône", variant: "info", lines: ["1 disque (rayon r) + 1 secteur angulaire.", "Secteur : rayon l = génératrice, arc 2πr."] },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "Un même solide peut avoir plusieurs patrons valides (un cube en a 11). Pour vérifier un patron : chaque face est présente une seule fois, les dimensions sont cohérentes, et les faces qui se touchent dans le solide partagent une arête dans le patron.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : confondre aire latérale et aire totale",
              badge: "Très fréquent",
              faux: "Aire totale d'un cube de côté 5 cm : 5 × 5 = 25 cm².",
              vrai: "25 cm² est l'aire d'une seule face. Le cube en a 6 : aire totale = 6 × 5² = 150 cm².",
              methode: "Aire totale = aire latérale + aires des bases (2 bases pour un prisme, 1 pour une pyramide).",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : appliquer Euler aux cylindres et cônes",
              badge: "Fréquent",
              faux: "Vérifier S + F = A + 2 pour un cylindre.",
              vrai: "La formule d'Euler ne vaut que pour les polyèdres (faces planes). Cylindre, cône et sphère sont exclus.",
              methode: "Euler : prismes et pyramides uniquement, jamais pour les solides à faces courbes.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : confondre hauteur du prisme et côté de la base",
              badge: "Classique",
              faux: "Face latérale d'un prisme de hauteur 8 : 8 × 8 = 64 cm².",
              vrai: "Chaque face latérale est un rectangle de largeur = côté de la base et de hauteur = hauteur du prisme.",
              methode: "Aire latérale d'un prisme = périmètre de la base × hauteur du prisme.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : croire qu'un solide n'a qu'un seul patron",
              badge: "Conceptuel",
              faux: "Entre deux patrons différents, l'un est forcément faux.",
              vrai: "Un solide peut avoir plusieurs patrons valides : un cube en admet 11.",
              methode: "La question est « est-ce UN patron valide », pas « est-ce LE patron ».",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école : le regard du futur enseignant",
              text: "Au cycle 2 (CP-CE2), les élèves manipulent des solides concrets (cubes, boîtes), les décrivent et les trient selon leurs propriétés visibles (faces planes ou courbes). Le vocabulaire face, arête, sommet est introduit progressivement.\n\nAu cycle 3 (CM1-6e), les élèves construisent des patrons, reproduisent des solides et calculent des aires de patrons. La formule d'Euler est étudiée en 6e. Les vues en plan (dessus, face, côté) sont travaillées en lien avec la lecture de plans de bâtiments.\n\nPour le CRPE : savoir passer du solide au patron et inversement, calculer une aire latérale ou totale, et vérifier qu'un patron donné correspond bien à un solide (via Euler ou le comptage des faces).",
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
              title: "Identifier, déplier, vérifier",
              text: "Toujours commencer par identifier la famille du solide. Puis lire ou construire son patron, et vérifier avec Euler ou le comptage des faces. Distinguer aire latérale et aire totale.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Identifier un solide à partir de son patron",
              intro:
                "**Question type :** « Ce patron est-il celui d'un prisme triangulaire ? »",
              steps: [
                {
                  number: "1",
                  text: "**Compter et identifier les faces.**",
                  example: { lines: ["Prisme triangulaire : 5 faces (2 triangles + 3 rectangles)"] },
                },
                {
                  number: "2",
                  text: "**Vérifier la compatibilité des dimensions.**",
                  example: { lines: ["Les rectangles ont la même hauteur h ; leurs largeurs = côtés du triangle"] },
                },
                {
                  number: "3",
                  text: "**Vérifier avec Euler.**",
                  example: { lines: ["S = 6, F = 5, A = 9 → 6 + 5 = 9 + 2 = 11 ✓"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Un patron comporte 1 carré et 4 triangles. De quel solide s'agit-il ?",
              correction: [
                { type: "line", text: "1 base carrée + 4 triangles latéraux : c'est une **pyramide à base carrée**." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Calculer l'aire totale d'un prisme droit",
              intro:
                "**Question type :** « Prisme droit à base triangulaire équilatérale de côté 6 cm, hauteur 10 cm. Aire totale ? »",
              steps: [
                {
                  number: "1",
                  text: "**Aire des deux bases.**",
                  example: { lines: ["Triangle équilatéral : aire = 9√3 cm² → 2 bases = 18√3 ≈ 31,18 cm²"] },
                },
                {
                  number: "2",
                  text: "**Aire latérale = périmètre de base × hauteur.**",
                  example: { lines: ["(3 × 6) × 10 = 180 cm²"] },
                },
                {
                  number: "3",
                  text: "**Aire totale = latérale + 2 bases.**",
                  example: { lines: ["180 + 18√3 ≈ 211,18 cm²"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Aire latérale d'un prisme à base carrée de côté 4 cm et de hauteur 10 cm ?",
              correction: [
                { type: "line", text: "Périmètre de base × hauteur = (4 × 4) × 10 = **160 cm²**." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Trouver le nombre d'arêtes d'un solide",
              intro:
                "**Question type :** « Une pyramide a une base pentagonale. Combien de sommets, d'arêtes et de faces ? »",
              steps: [
                {
                  number: "1",
                  text: "**Appliquer les formules (pyramide, n = 5).**",
                  example: { lines: ["S = n + 1 = 6 · F = n + 1 = 6 · A = 2n = 10"] },
                },
                {
                  number: "2",
                  text: "**Vérifier avec Euler.**",
                  example: { lines: ["6 + 6 = 10 + 2 = 12 ✓"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Un polyèdre a 10 sommets et 7 faces. Combien d'arêtes ?",
              correction: [
                { type: "line", text: "S + F = A + 2 → 10 + 7 = A + 2 → A = **15**." },
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
                  question: "Quel solide a deux bases circulaires reliées par une surface latérale ?",
                  options: ["Le cône", "Le cylindre", "La sphère", "La pyramide"],
                  correctIndex: 1,
                  explanation: "Le cylindre de révolution a deux bases circulaires et une surface latérale (un rectangle déroulé).",
                },
                {
                  objectifId: "e2",
                  question: "Combien d'arêtes a un prisme à base hexagonale ?",
                  options: ["12", "18", "8", "6"],
                  correctIndex: 1,
                  explanation: "Prisme à base n-gone : A = 3n. Pour n = 6 : A = 18.",
                },
                {
                  objectifId: "e3",
                  question: "Un polyèdre a 8 sommets et 6 faces. Combien d'arêtes ?",
                  options: ["10", "12", "14", "16"],
                  correctIndex: 1,
                  explanation: "S + F = A + 2 → 8 + 6 = A + 2 → A = 12 (c'est le cube).",
                },
                {
                  objectifId: "e3",
                  question: "À quels solides la formule d'Euler s'applique-t-elle ?",
                  options: ["À tous les solides", "Aux polyèdres (faces planes)", "Aux cylindres et cônes", "À la sphère"],
                  correctIndex: 1,
                  explanation: "La formule d'Euler ne vaut que pour les polyèdres convexes. Cylindre, cône et sphère ont des faces courbes.",
                },
                {
                  objectifId: "e4",
                  question: "Un solide se voit comme un carré de dessus et un triangle de face. Qu'est-ce que c'est ?",
                  options: ["Un cube", "Un prisme", "Une pyramide à base carrée", "Un cylindre"],
                  correctIndex: 2,
                  explanation: "Base carrée (vue de dessus) et rétrécissement vers un sommet (vue de face triangulaire) : une pyramide à base carrée.",
                },
                {
                  objectifId: "e5",
                  question: "En perspective cavalière, comment dessine-t-on les arêtes cachées ?",
                  options: ["En gras", "En rouge", "En pointillés", "On ne les dessine pas"],
                  correctIndex: 2,
                  explanation: "Les arêtes cachées sont dessinées en pointillés.",
                },
                {
                  objectifId: "e7",
                  question: "Aire latérale d'un cylindre de rayon r et de hauteur h ?",
                  options: ["πr²", "2πr + h", "2πrh", "πr²h"],
                  correctIndex: 2,
                  explanation: "La surface latérale déroulée est un rectangle de largeur 2πr et de hauteur h, donc 2πrh.",
                },
                {
                  objectifId: "e8",
                  question: "Combien de patrons différents un cube admet-il ?",
                  options: ["1", "6", "11", "Une infinité"],
                  correctIndex: 2,
                  explanation: "Un cube a 11 patrons distincts. Un solide peut donc avoir plusieurs patrons valides.",
                },
                {
                  objectifId: "e9",
                  question: "Que faut-il vérifier en priorité pour valider un patron de prisme triangulaire ?",
                  options: ["Qu'il a 6 faces", "Qu'il a 2 triangles et 3 rectangles aux bonnes dimensions", "Qu'il est dessiné en couleur", "Qu'il tient sur une page"],
                  correctIndex: 1,
                  explanation: "Le prisme triangulaire a 5 faces : 2 triangles + 3 rectangles, dont les largeurs correspondent aux côtés du triangle.",
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
              text: "Identifiez d'abord la famille du solide, vérifiez avec Euler, distinguez aire latérale et aire totale. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Compter et identifier",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : sommets, arêtes, faces",
              objectifTag: "Comptage et Euler",
              question:
                "a) Un prisme droit a une base hexagonale. Combien de sommets, d'arêtes, de faces ?\nb) Vérifier la formule d'Euler pour le cube.\nc) Un polyèdre a 10 sommets et 7 faces. Combien d'arêtes ?",
              correction: [
                { type: "line", label: "a)", text: "n = 6 : S = 12, A = 18, F = 8. Vérif. : 12 + 8 = 18 + 2 = 20 ✓." },
                { type: "line", label: "b)", text: "Cube : S = 8, F = 6, A = 12. 8 + 6 = 12 + 2 = 14 ✓." },
                { type: "line", label: "c)", text: "S + F = A + 2 → 10 + 7 = A + 2 → A = 15." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : identifier un solide depuis ses vues",
              objectifTag: "Vues",
              enonce: "Trois vues d'un solide : vue de face = triangle isocèle, vue de dessus = carré, vue de côté = triangle isocèle.",
              question: "Identifier le solide et justifier.",
              correction: [
                { type: "line", text: "Vue de dessus carrée : la base est un carré. Vues de face et de côté triangulaires : le solide se rétrécit vers un sommet." },
                { type: "line", text: "C'est une pyramide à base carrée (régulière, car les triangles sont isocèles et identiques)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : patrons et aires",
              sub: "Construire et calculer",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : patron d'un cylindre",
              objectifTag: "Patron et aire",
              enonce: "Un cylindre a un rayon de base r = 4 cm et une hauteur h = 10 cm.",
              question: "a) Décrire le patron (formes et dimensions).\nb) Calculer l'aire latérale et l'aire totale (arrondir au cm²).",
              correction: [
                { type: "line", label: "a)", text: "2 disques de rayon 4 cm + 1 rectangle de largeur 2πr = 8π ≈ 25,1 cm et de hauteur 10 cm." },
                { type: "line", label: "b)", text: "Aire latérale = 2πr × h = 80π ≈ 251 cm². Aire des 2 bases = 2πr² = 32π ≈ 101 cm². Aire totale ≈ 352 cm²." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : ce patron est-il valide ?",
              objectifTag: "Validation d'un patron",
              enonce: "On propose pour un prisme droit à base triangulaire : 2 triangles rectangles (côtés 3, 4, 5 cm) + 3 rectangles de hauteur 8 cm et de largeurs 3, 4 et 5 cm.",
              question: "a) Vérifier la cohérence (faces, Euler).\nb) Calculer l'aire totale du prisme.",
              correction: [
                { type: "line", label: "a)", text: "5 faces (2 triangles + 3 rectangles) ✓. S = 6, A = 9 : 6 + 5 = 9 + 2 = 11 ✓. Les largeurs 3, 4, 5 correspondent aux côtés du triangle : patron cohérent." },
                { type: "line", label: "b)", text: "2 bases = 2 × (½ × 3 × 4) = 12 cm². Aire latérale = (3 + 4 + 5) × 8 = 96 cm². Aire totale = 108 cm²." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : problème contextualisé",
              sub: "Modéliser et calculer",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : la brique de jus de fruit",
              objectifTag: "Aire latérale, cylindre",
              enonce: "Pour un projet de CM2, les élèves recouvrent de papier des briques cylindriques de rayon 4 cm et de hauteur 12 cm. Chaque feuille fait 30 cm × 40 cm.",
              question: "a) Calculer l'aire de la surface latérale d'une brique (arrondir au cm²).\nb) Combien de briques peut-on recouvrir avec une feuille (surface latérale seulement) ?",
              correction: [
                { type: "line", label: "a)", text: "Aire latérale = 2πr × h = 2π × 4 × 12 = 96π ≈ 302 cm²." },
                { type: "line", label: "b)", text: "Aire de la feuille = 1 200 cm². 1 200 / 302 ≈ 3,97, donc on peut recouvrir 3 briques entières." },
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
              text: "Cet exercice reproduit le format d'un sujet de concours : il combine description d'un solide, patron, et calculs d'aires avec Pythagore. Comptez environ 25 minutes, en conditions réelles.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 4 : la tente de camping",
              objectifTag: "Prisme, patron, aire",
              enonce:
                "Une tente est modélisée par un prisme droit à base triangulaire isocèle. La base a une hauteur de 1,2 m et une largeur de 2,4 m. La longueur de la tente est 3 m.",
              question:
                "1.1 Combien ce prisme a-t-il de sommets, d'arêtes et de faces ? Vérifier avec Euler.\n1.2 Décrire le patron avec ses dimensions.\n2.1 Calculer l'aire de la base triangulaire.\n2.2 Calculer la longueur des côtés égaux du triangle isocèle.\n2.3 Calculer l'aire totale de la toile (toutes les faces sauf le sol).",
              correction: [
                { type: "line", label: "1.1", text: "Prisme triangulaire : S = 6, A = 9, F = 5. Euler : 6 + 5 = 9 + 2 = 11 ✓." },
                { type: "line", label: "1.2", text: "2 triangles isocèles (base 2,4 m, hauteur 1,2 m) + 3 rectangles : 2 de côté isocèle × 3 m et 1 de 2,4 m × 3 m (le sol)." },
                { type: "line", label: "2.1", text: "Aire de la base = ½ × 2,4 × 1,2 = 1,44 m²." },
                { type: "line", label: "2.2", text: "La hauteur partage la base en deux segments de 1,2 m : côté isocèle = √(1,2² + 1,2²) = 1,2√2 ≈ 1,70 m." },
                { type: "line", label: "2.3", text: "Toile (sans le sol) : 2 triangles + 2 rectangles latéraux. 2 × 1,44 + 2 × (1,2√2 × 3) ≈ 2,88 + 10,18 ≈ 13,06 m² (soit ≈ 1 306 dm²)." },
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
              title: "Erreur type · Exercice 5 : aire latérale prise pour aire totale",
              objectifTag: "Aire totale",
              enonce: "**Copie d'un candidat :** « Aire totale d'un cube de côté 5 cm : 5 × 5 = 25 cm². »",
              question: "a) Identifier l'erreur.\nb) Donner la bonne réponse.",
              correction: [
                { type: "paragraph", text: "**Erreur : 25 cm² est l'aire d'une seule face.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Le cube a 6 faces identiques." },
                    { text: "Aire totale = 6 × 5² = 6 × 25 = 150 cm²." },
                    { text: "Pour un prisme : aire totale = aire latérale + 2 × aire de base." },
                  ],
                },
                { type: "note", text: "Toujours se demander combien de faces composent le solide." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 6 : Euler appliqué à un cylindre",
              objectifTag: "Conditions d'Euler",
              enonce: "**Copie d'un candidat :** « Cylindre : 0 sommet + 2 faces = 1 arête + 2, donc 2 = 3 ? »",
              question: "a) Identifier l'erreur.\nb) Corriger.",
              correction: [
                { type: "paragraph", text: "**Erreur : la formule d'Euler ne s'applique pas au cylindre.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Le cylindre a des faces courbes : ce n'est pas un polyèdre." },
                    { text: "Cylindre, cône et sphère n'ont ni arêtes ni sommets au sens d'Euler." },
                    { text: "Euler vaut uniquement pour les prismes et pyramides." },
                  ],
                },
                { type: "note", text: "Vérifier que le solide est un polyèdre avant d'appliquer S + F = A + 2." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 7 : un seul patron possible",
              objectifTag: "Patrons multiples",
              enonce: "**Copie d'un candidat :** « Un solide n'a qu'un patron, donc entre ces deux patrons l'un est faux. »",
              question: "a) Identifier l'erreur.\nb) Comment vérifier un patron ?",
              correction: [
                { type: "paragraph", text: "**Erreur : un solide peut avoir plusieurs patrons valides.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Le cube admet 11 patrons distincts." },
                    { text: "Pour valider : toutes les faces présentes une fois, dimensions cohérentes." },
                    { text: "Les faces voisines dans le solide doivent partager une arête dans le patron." },
                  ],
                },
                { type: "note", text: "La question est « est-ce UN patron valide », pas « est-ce LE patron »." },
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
                  question: "Énoncer la formule d'Euler et ses conditions d'application.",
                  answer:
                    "S + F = A + 2 (sommets + faces = arêtes + 2). Elle vaut pour tout polyèdre convexe (prismes, pyramides, tétraèdre, cube). Pas pour le cylindre, le cône ni la sphère (faces courbes).",
                  astuce: "Cylindres et cônes ne sont pas des polyèdres : Euler inapplicable.",
                },
                {
                  question: "Sommets, arêtes et faces d'un prisme à base n-gone ?",
                  answer:
                    "S = 2n, A = 3n, F = n + 2 (n rectangles latéraux + 2 bases). Exemples : triangle (n = 3) → S = 6, A = 9, F = 5 ; hexagone (n = 6) → S = 12, A = 18, F = 8.",
                },
                {
                  question: "Sommets, arêtes et faces d'une pyramide à base n-gone ?",
                  answer:
                    "S = n + 1, A = 2n, F = n + 1 (n triangles + 1 base). Exemples : base triangle → tétraèdre (S = 4, A = 6, F = 4) ; base carrée → S = 5, A = 8, F = 5.",
                },
                {
                  question: "Décrire le patron d'un cylindre et ses dimensions.",
                  answer:
                    "2 disques de rayon r (les bases) + 1 rectangle de largeur 2πr (la circonférence) et de hauteur h. Aire latérale = 2πrh ; aire totale = 2πrh + 2πr².",
                },
                {
                  question: "Formule générale de l'aire latérale d'un prisme droit ?",
                  answer:
                    "Aire latérale = périmètre de la base × hauteur. Chaque face latérale est un rectangle (côté de base × hauteur du prisme). Aire totale = aire latérale + 2 × aire de la base.",
                },
                {
                  question: "Les trois vues d'un solide et leur direction d'observation ?",
                  answer:
                    "Vue de face (depuis l'avant), vue de dessus (depuis le haut), vue de côté (depuis la droite). Cube : trois carrés identiques. Cylindre : face = rectangle, dessus = cercle, côté = rectangle.",
                },
                {
                  question: "Les règles de la perspective cavalière ?",
                  answer:
                    "Faces de face en vraie grandeur ; arêtes de fuite en oblique (souvent 45°) avec longueur réduite de moitié ; arêtes cachées en pointillés ; arêtes parallèles restant parallèles.",
                },
                {
                  question: "Comment vérifier qu'un patron est valide ?",
                  answer:
                    "Compter les faces (bon nombre, bonnes formes), vérifier les dimensions (arêtes partagées de même longueur), appliquer Euler pour les polyèdres, et contrôler le repliage. Un solide peut avoir plusieurs patrons valides.",
                },
                {
                  question: "Décrire le patron d'un cône.",
                  answer:
                    "1 disque de rayon r (la base) + 1 secteur angulaire de rayon l = √(r² + h²) (la génératrice) et d'arc 2πr. Aire latérale = πrl ; aire totale = πrl + πr².",
                },
                {
                  question: "Comment distinguer rapidement un prisme d'une pyramide ?",
                  answer:
                    "Le prisme a deux bases parallèles et égales et des faces latérales rectangulaires (un « tube » à section constante). La pyramide a une seule base, un sommet, et des faces triangulaires : elle se rétrécit vers le sommet.",
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
              center: { title: "Solides", subtitle: "S + F = A + 2" },
              branches: [
                {
                  title: "5 familles",
                  variant: "blue",
                  lines: ["prisme, pyramide", "cylindre, cône, sphère"],
                },
                {
                  title: "Comptage",
                  variant: "green",
                  lines: ["prisme : 2n, 3n, n+2", "pyramide : n+1, 2n, n+1"],
                },
                {
                  title: "Euler",
                  variant: "green",
                  lines: ["S + F = A + 2", "polyèdres seulement"],
                },
                {
                  title: "Représentations",
                  variant: "yellow",
                  lines: ["perspective cavalière", "3 vues : face, dessus, côté"],
                },
                {
                  title: "Patrons",
                  variant: "yellow",
                  lines: ["solide déplié", "plusieurs patrons valides"],
                },
                {
                  title: "Aires",
                  variant: "purple",
                  dashed: true,
                  lines: ["prisme : périmètre × h", "cylindre : 2πrh"],
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
