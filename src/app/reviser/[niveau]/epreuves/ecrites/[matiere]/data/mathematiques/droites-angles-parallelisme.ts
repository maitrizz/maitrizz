import type { Fiche } from "@/components/fiche/types";
import { COPIES_DROITES_ANGLES_PARALLELISME } from "./copies-droites-angles-parallelisme";
import { EXERCICES_DROITES_ANGLES_PARALLELISME } from "./exercices-droites-angles-parallelisme";

export const SAVOIR_FAIRE = [
  { id: "types-angles", label: "Types d'angles (compl./suppl.)" },
  { id: "somme-triangle", label: "Somme des angles d'un triangle" },
  { id: "somme-polygone", label: "Somme des angles d'un polygone" },
  { id: "angles-paralleles", label: "Angles et droites parallèles" },
  { id: "mediatrice", label: "Médiatrice et équidistance" },
];

export const ficheDroitesAnglesParallelisme: Fiche = {
  slug: "droites-angles-parallelisme",
  matiere: "mathematiques",
  numero: 18,
  partie: "Partie 4 : Espace et géométrie plane",
  title: "Droites, angles, parallélisme",
  subtitle:
    "Types d'angles · complémentaires et supplémentaires · somme des angles d'un triangle et d'un polygone · alternes-internes et correspondants · médiatrice · bissectrice.",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème D", variant: "info" },
  ],
  metaTitle: "Droites, angles et parallélisme · Fiche de révision CRPE",
  metaDescription:
    "Fiche CRPE sur les angles : types d'angles, complémentaires et supplémentaires, somme des angles d'un triangle et d'un polygone, angles alternes-internes et correspondants, parallélisme, médiatrice et bissectrice. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
              title: "La base de toute démonstration géométrique",
              text: "Les angles sont partout : triangles, polygones, configurations de droites parallèles, constructions à la règle et au compas. Maîtriser leurs propriétés est la base de toute démonstration. Cette fiche couvre les résultats fondamentaux que le jury attend systématiquement.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Types d'angles, complémentaires et supplémentaires",
              blocks: [
                {
                  type: "table",
                  headers: ["Type d'angle", "Mesure"],
                  rows: [
                    ["Aigu", "entre 0° et 90°"],
                    ["Droit", "90° (perpendiculaire)"],
                    ["Obtus", "entre 90° et 180°"],
                    ["Plat", "180° (demi-tour)"],
                    ["Rentrant", "supérieur à 180°"],
                  ],
                },
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Angles complémentaires",
                      variant: "info",
                      lines: ["Leur somme vaut 90°.", "37° et 53° sont complémentaires."],
                    },
                    {
                      title: "Angles supplémentaires",
                      variant: "info",
                      lines: ["Leur somme vaut 180°.", "70° et 110° sont supplémentaires.", "Deux angles formés sur une droite sont supplémentaires."],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "💡 Repères à retenir",
                  text: "90° = angle droit, 180° = angle plat, 360° = tour complet, 45° = moitié d'un angle droit, 60° = angle d'un triangle équilatéral. Mémo : Complémentaires → Complètent le Carré (l'angle droit).",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Somme des angles d'un triangle et d'un polygone",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Triangle : toujours 180°",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "Pour **tout** triangle, la somme des trois angles vaut **180°**. Conséquence : si on connaît deux angles, le troisième vaut 180° − (somme des deux). Exemple : 40° + 75° + ? = 180° donne ? = 65°.",
                    },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Polygone convexe à n côtés : (n − 2) × 180°",
                  blocks: [
                    {
                      type: "table",
                      headers: ["Polygone", "n", "Somme des angles", "Angle si régulier"],
                      rows: [
                        ["Triangle", "3", "180°", "60°"],
                        ["Quadrilatère", "4", "360°", "90°"],
                        ["Pentagone", "5", "540°", "108°"],
                        ["Hexagone", "6", "720°", "120°"],
                        ["Octogone", "8", "1 080°", "135°"],
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "Pourquoi (n − 2) ? On découpe le polygone en (n − 2) triangles depuis un sommet, et chaque triangle apporte 180°. L'angle d'un polygone régulier vaut la somme divisée par n.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Convexe ou concave",
                  text: "Un polygone est convexe si tous ses angles sont inférieurs à 180° (le segment entre deux sommets reste à l'intérieur). S'il a un angle rentrant (un « creux »), il est concave et la formule ne s'applique pas directement. Au CRPE, les figures sont convexes sauf indication contraire. La nature des triangles, quadrilatères et polygones est détaillée dans la [fiche N°19](fiche:triangles-quadrilateres-polygones).",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Droites coupées par une sécante",
              blocks: [
                {
                  type: "paragraph",
                  text: "Quand une sécante coupe deux droites, elle forme des paires d'angles. Si les deux droites sont **parallèles**, ces paires ont des propriétés remarquables.",
                },
                {
                  type: "table",
                  headers: ["Paire d'angles", "Position", "Si droites parallèles"],
                  rows: [
                    ["Alternes-internes", "de part et d'autre de la sécante, entre les droites", "égaux (angles en Z)"],
                    ["Correspondants", "du même côté, un entre, un dehors", "égaux (angles en F)"],
                    ["Co-internes", "du même côté, entre les droites", "supplémentaires (180°)"],
                    ["Opposés par le sommet", "à une même intersection", "égaux (toujours, même sans parallèles)"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Les réciproques sont au programme",
                  text: "Si deux angles alternes-internes (ou correspondants) sont égaux, alors les droites sont parallèles. C'est l'outil clé pour démontrer un parallélisme. Et attention : les angles opposés par le sommet sont égaux, pas supplémentaires (ce sont les angles adjacents qui sont supplémentaires).",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Médiatrice et bissectrice",
              blocks: [
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Médiatrice d'un segment [AB]",
                      variant: "info",
                      lines: [
                        "Droite perpendiculaire à [AB] passant par son milieu.",
                        "Propriété : M est sur la médiatrice si et seulement si MA = MB.",
                        "Sert à montrer qu'un point est équidistant de deux autres.",
                      ],
                    },
                    {
                      title: "Bissectrice d'un angle",
                      variant: "info",
                      lines: [
                        "Demi-droite qui partage l'angle en deux angles égaux.",
                        "Propriété : un point de la bissectrice est équidistant des deux côtés.",
                        "Sert à montrer une équidistance aux côtés d'un angle.",
                      ],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Médiatrice n'est pas médiane",
                  text: "La médiatrice est relative à un segment (perpendiculaire en son milieu). La médiane d'un triangle relie un sommet au milieu du côté opposé : elle n'est pas perpendiculaire à ce côté, sauf dans un triangle isocèle. Ne pas confondre non plus médiatrice et hauteur (perpendiculaire, mais pas forcément au milieu). L'intersection des trois médiatrices d'un triangle est le centre de son cercle circonscrit ([fiche N°20](fiche:cercle)).",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : confondre alternes-internes et correspondants",
              badge: "Très fréquent",
              faux: "Désigner deux angles du même côté de la sécante comme alternes-internes.",
              vrai: "Alternes-internes : de part et d'autre de la sécante (en Z). Correspondants : du même côté (en F).",
              methode: "Les deux sont égaux si les droites sont parallèles, mais leur position diffère.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : appliquer 180° au quadrilatère",
              badge: "Classique",
              faux: "Quadrilatère d'angles 80°, 95°, 110° : 4e angle = 180° − 80° − 95° − 110° = −105°.",
              vrai: "Somme d'un quadrilatère = (4 − 2) × 180° = 360°. 4e angle = 360° − 285° = 75°.",
              methode: "Toujours calculer la somme attendue (n − 2) × 180° avant de soustraire.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : angles opposés par le sommet pris supplémentaires",
              badge: "Piège courant",
              faux: "Un angle vaut 70°, son opposé par le sommet vaut 180° − 70° = 110°.",
              vrai: "Les angles opposés par le sommet sont égaux : l'opposé de 70° vaut 70°. Ce sont les adjacents qui valent 110°.",
              methode: "Autour d'une intersection : deux paires d'angles égaux, somme totale 360°.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : confondre médiatrice et hauteur",
              badge: "Fréquent",
              faux: "Tracer une perpendiculaire à [AB], mais pas en son milieu, et l'appeler médiatrice.",
              vrai: "La médiatrice est perpendiculaire à [AB] ET passe par son milieu : les deux conditions.",
              methode: "La construction au compas (arcs depuis A et B) donne automatiquement les deux.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école : le regard du futur enseignant",
              text: "Au cycle 2, les élèves reconnaissent et reproduisent l'angle droit avec l'équerre, et distinguent perpendiculaires et parallèles dans leur environnement.\n\nAu cycle 3, ils mesurent et construisent des angles au rapporteur, reconnaissent aigu/droit/obtus, et découvrent que la somme des angles d'un triangle vaut 180°, souvent par pliage : on déchire les trois angles et on les aligne pour former un angle plat.\n\nCe que le jury valorise : savoir que les angles alternes-internes sont un résultat du cycle 4 à ne pas confondre avec les correspondants, et savoir expliquer la somme 180° par le pliage plutôt que par une démonstration formelle à l'école.",
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
              title: "Quatre protocoles pour les situations fréquentes",
              text: "Identifier la configuration, citer la propriété utilisée (le jury la valorise), calculer, vérifier. Chaque savoir-faire se termine par une vérification.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Calculer un angle manquant (triangle ou polygone)",
              intro:
                "**Question type :** « Un triangle a des angles de 47° et 83° : le troisième ? Un pentagone a 4 angles de 100°, 95°, 110°, 105° : le cinquième ? »",
              steps: [
                {
                  number: "1",
                  text: "**Triangle : somme = 180°.**",
                  example: { lines: ["180° − 47° − 83° = 50°"] },
                },
                {
                  number: "2",
                  text: "**Polygone : calculer d'abord la somme totale.**",
                  example: { lines: ["Pentagone : (5 − 2) × 180° = 540°", "5e angle = 540° − 410° = 130°"] },
                },
                {
                  number: "3",
                  text: "**Vérifier que tous les angles totalisent la somme.**",
                  example: { lines: ["100 + 95 + 110 + 105 + 130 = 540° ✓"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Un quadrilatère a trois angles de 85°, 110° et 95°. Quel est le quatrième ?",
              correction: [
                { type: "line", text: "Somme = (4 − 2) × 180° = 360°. 4e angle = 360° − 85° − 110° − 95° = **70°**." },
                { type: "note", text: "On calcule la somme attendue avant de soustraire." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Démontrer un parallélisme par les angles",
              intro:
                "**Question type :** « Une sécante coupe deux droites ; deux angles alternes-internes valent 65° et 65°. Les droites sont-elles parallèles ? »",
              steps: [
                {
                  number: "1",
                  text: "**Identifier le type d'angles.**",
                  example: { lines: ["Alternes-internes (de part et d'autre, entre les droites)"] },
                },
                {
                  number: "2",
                  text: "**Appliquer la réciproque et citer la propriété.**",
                  example: { lines: ["Angles alternes-internes égaux → droites parallèles", "65° = 65° → les droites sont parallèles"] },
                  warn: "⚠️ Toujours nommer la propriété utilisée dans la rédaction.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Deux droites parallèles, un angle mesuré vaut 70°. Que vaut son alterne-interne ?",
              correction: [
                { type: "line", text: "Les angles alternes-internes sont égaux quand les droites sont parallèles : **70°**." },
                { type: "note", text: "Égaux pour les alternes-internes et les correspondants ; supplémentaires pour les co-internes." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Calculer tous les angles d'une configuration de parallèles",
              intro:
                "**Question type :** « Deux parallèles coupées par une sécante ; un angle vaut 70°. Trouver tous les autres. »",
              steps: [
                {
                  number: "1",
                  text: "**L'angle et son opposé par le sommet sont égaux.**",
                  example: { lines: ["70° → opposé 70°"] },
                },
                {
                  number: "2",
                  text: "**Les adjacents sont supplémentaires.**",
                  example: { lines: ["180° − 70° = 110° (et son opposé 110°)"] },
                },
                {
                  number: "3",
                  text: "**Reporter à l'autre intersection (alternes-internes/correspondants).**",
                  example: { lines: ["On obtient seulement 70° et 110°, répétés"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Deux droites se coupent, un angle vaut 110°. Que valent les trois autres ?",
              correction: [
                { type: "line", text: "Son opposé par le sommet : 110°. Les deux adjacents : 180° − 110° = **70°** chacun." },
                { type: "note", text: "Deux paires d'angles égaux autour d'une intersection." },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Construire une médiatrice ou une bissectrice",
              intro:
                "**Rappel :** le CRPE demande souvent des constructions (compas, règle, rapporteur).",
              steps: [
                {
                  number: "1",
                  text: "**Médiatrice de [AB] : deux arcs de même rayon.**",
                  example: { lines: ["Arc depuis A, arc depuis B (rayon > AB/2)", "Les 2 intersections donnent la médiatrice"] },
                },
                {
                  number: "2",
                  text: "**Bissectrice : arcs depuis le sommet puis depuis les côtés.**",
                  example: { lines: ["Arc de centre S → E et F sur les côtés", "Arcs depuis E et F → un point de la bissectrice"] },
                  warn: "⚠️ La médiatrice obtenue est bien perpendiculaire ET passe par le milieu.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Un point P vérifie PA = PB. Sur quelle droite se trouve-t-il forcément ?",
              correction: [
                { type: "line", text: "Sur la **médiatrice de [AB]** : P équidistant de A et B équivaut à P sur la médiatrice." },
                { type: "note", text: "C'est la propriété caractéristique, utilisable dans les deux sens." },
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
              title: "Droites, angles, parallélisme",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_DROITES_ANGLES_PARALLELISME,
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
              title: "Droites, angles, parallélisme",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_DROITES_ANGLES_PARALLELISME,
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
              center: { title: "Droites et angles", subtitle: "parallélisme" },
              branches: [
                {
                  title: "Types d'angles",
                  variant: "blue",
                  lines: ["Aigu, droit, obtus, plat, rentrant", "Complémentaires 90°", "Supplémentaires 180°"],
                },
                {
                  title: "Sommes des angles",
                  variant: "green",
                  lines: ["Triangle : 180°", "Polygone : (n − 2) × 180°", "Régulier : somme ÷ n"],
                },
                {
                  title: "Droites parallèles",
                  variant: "green",
                  lines: ["Alternes-internes égaux (Z)", "Correspondants égaux (F)", "Co-internes supplémentaires"],
                },
                {
                  title: "Réciproques",
                  variant: "yellow",
                  lines: ["Angles égaux → droites //", "Opposés par le sommet : égaux"],
                },
                {
                  title: "Médiatrice",
                  variant: "yellow",
                  lines: ["⊥ au milieu de [AB]", "M dessus ⟺ MA = MB"],
                },
                {
                  title: "Bissectrice",
                  variant: "purple",
                  dashed: true,
                  lines: ["Partage l'angle en deux", "Point équidistant des côtés"],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
