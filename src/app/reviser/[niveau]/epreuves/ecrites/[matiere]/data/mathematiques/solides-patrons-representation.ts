import type { Fiche } from "@/components/fiche/types";
import { COPIES_SOLIDES_PATRONS_REPRESENTATION } from "./copies-solides-patrons-representation";
import { EXERCICES_SOLIDES_PATRONS_REPRESENTATION } from "./exercices-solides-patrons-representation";

export const SAVOIR_FAIRE = [
  { id: "comptage", label: "Compter sommets, arêtes, faces" },
  { id: "euler", label: "Formule d'Euler" },
  { id: "vues", label: "Identifier un solide par ses vues" },
  { id: "patrons", label: "Décrire et valider un patron" },
  { id: "aires", label: "Aire latérale et aire totale" },
];

export const ficheSolidesPatronsRepresentation: Fiche = {
  slug: "solides-patrons-representation",
  matiere: "mathematiques",
  numero: 25,
  partie: "Partie 5 : Géométrie dans l'espace",
  title: "Solides, représentation et patrons",
  subtitle:
    "Prismes · pyramides · cylindres · cônes · sphères · formule d'Euler · perspective cavalière · vues · patrons.",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème D", variant: "info" },
  ],
  metaTitle: "Solides, représentation et patrons · Fiche de révision CRPE",
  metaDescription:
    "Fiche CRPE sur les solides : prismes, pyramides, cylindres, cônes et sphères, formule d'Euler, perspective cavalière, vues et patrons. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
              title: "Le passage du 2D au 3D",
              text: "Les solides sont présents dans presque tous les sujets : reconnaître un solide à partir de son patron, calculer une aire, identifier des vues. La difficulté n'est pas le calcul, c'est le passage du plan à l'espace : visualiser un solide depuis son patron, comprendre ce qu'est une vue, et ne pas confondre aire latérale et aire totale. Les calculs de volumes sont traités dans la [fiche N°15](fiche:perimetres-aires-volumes), et le théorème de Pythagore ([fiche N°21](fiche:theoreme-de-pythagore)) intervient pour les génératrices et les hauteurs.",
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
              title: "Solides, représentation et patrons",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_SOLIDES_PATRONS_REPRESENTATION,
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
              title: "Solides, représentation et patrons",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_SOLIDES_PATRONS_REPRESENTATION,
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
      ],
    },
  ],
};
