import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je reconnais les types d'angles et je distingue complémentaires (90°) et supplémentaires (180°)" },
  { id: "e2", label: "Je calcule le troisième angle d'un triangle : 180° − (somme des deux autres)" },
  { id: "e3", label: "J'applique la formule (n − 2) × 180° pour tout polygone convexe" },
  { id: "e4", label: "Je distingue angles alternes-internes (de part et d'autre) et correspondants (même côté)" },
  { id: "e5", label: "Je sais que deux droites parallèles donnent des angles égaux, et je connais la réciproque" },
  { id: "e6", label: "Je sais que les angles opposés par le sommet sont égaux (pas supplémentaires)" },
  { id: "e7", label: "Je définis la médiatrice (perpendiculaire au milieu) et sa propriété d'équidistance" },
  { id: "e8", label: "Je définis la bissectrice et je sais la construire à la règle et au compas" },
  { id: "e9", label: "Je sais expliquer la somme 180° d'un triangle, y compris par le pliage en primaire" },
];

export const ficheDroitesAnglesParallelisme: Fiche = {
  slug: "droites-angles-parallelisme",
  matiere: "mathematiques",
  numero: 18,
  partie: "Partie 4 : Espace et géométrie plane",
  title: "Droites, angles, parallélisme",
  subtitle:
    "Types d'angles · complémentaires et supplémentaires · somme des angles d'un triangle et d'un polygone · alternes-internes et correspondants · médiatrice · bissectrice",
  badges: [
    { label: "★★★ Présent dans presque tous les sujets", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème D", variant: "info" },
  ],
  metaTitle: "Droites, angles et parallélisme (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur les angles : types d'angles, complémentaires et supplémentaires, somme des angles d'un triangle et d'un polygone, angles alternes-internes et correspondants, parallélisme, médiatrice et bissectrice. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                { number: "①", title: "Les types d'angles", text: "Aigu, droit, obtus, plat, rentrant ; complémentaires et supplémentaires." },
                { number: "②", title: "Angles dans les figures", text: "Somme des angles d'un triangle (180°) et d'un polygone ((n − 2) × 180°)." },
                { number: "③", title: "Droites et sécante", text: "Alternes-internes, correspondants, co-internes, et le parallélisme." },
                { number: "④", title: "Médiatrice et bissectrice", text: "Deux droites caractéristiques et leurs propriétés d'équidistance." },
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
                  text: "Un polygone est convexe si tous ses angles sont inférieurs à 180° (le segment entre deux sommets reste à l'intérieur). S'il a un angle rentrant (un « creux »), il est concave et la formule ne s'applique pas directement. Au CRPE, les figures sont convexes sauf indication contraire.",
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
                  text: "La médiatrice est relative à un segment (perpendiculaire en son milieu). La médiane d'un triangle relie un sommet au milieu du côté opposé : elle n'est pas perpendiculaire à ce côté, sauf dans un triangle isocèle. Ne pas confondre non plus médiatrice et hauteur (perpendiculaire, mais pas forcément au milieu).",
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
                  number: "💡",
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
                  question: "Quel est le complément de 37° ?",
                  options: ["143°", "53°", "63°", "37°"],
                  correctIndex: 1,
                  explanation: "Deux angles complémentaires ont pour somme 90° : 90° − 37° = 53°.",
                },
                {
                  objectifId: "e2",
                  question: "Un triangle a deux angles de 47° et 83°. Quel est le troisième ?",
                  options: ["40°", "50°", "60°", "130°"],
                  correctIndex: 1,
                  explanation: "Somme des angles d'un triangle = 180°. 180° − 47° − 83° = 50°.",
                },
                {
                  objectifId: "e3",
                  question: "Quelle est la somme des angles d'un pentagone ?",
                  options: ["360°", "540°", "720°", "900°"],
                  correctIndex: 1,
                  explanation: "(n − 2) × 180° = (5 − 2) × 180° = 540°.",
                },
                {
                  objectifId: "e4",
                  question: "Deux angles alternes-internes sont situés…",
                  options: ["du même côté de la sécante", "de part et d'autre de la sécante, entre les droites", "à l'extérieur des deux droites", "à la même intersection"],
                  correctIndex: 1,
                  explanation: "Alternes-internes : de part et d'autre de la sécante, entre les deux droites (angles en Z). Les correspondants sont du même côté.",
                },
                {
                  objectifId: "e5",
                  question: "Deux droites parallèles coupées par une sécante : que vaut l'alterne-interne d'un angle de 65° ?",
                  options: ["115°", "65°", "25°", "On ne peut pas savoir"],
                  correctIndex: 1,
                  explanation: "Si les droites sont parallèles, les angles alternes-internes sont égaux : 65°.",
                },
                {
                  objectifId: "e6",
                  question: "Deux droites se coupent ; un angle vaut 70°. Que vaut son angle opposé par le sommet ?",
                  options: ["110°", "70°", "20°", "180°"],
                  correctIndex: 1,
                  explanation: "Les angles opposés par le sommet sont égaux : 70°. Ce sont les angles adjacents qui valent 110°.",
                },
                {
                  objectifId: "e7",
                  question: "Un point M vérifie MA = MB. Où se trouve-t-il ?",
                  options: ["Sur la droite (AB)", "Sur la médiatrice de [AB]", "Sur la bissectrice de l'angle A", "Au milieu de [AB]"],
                  correctIndex: 1,
                  explanation: "MA = MB équivaut à : M est sur la médiatrice de [AB] (propriété caractéristique).",
                },
                {
                  objectifId: "e8",
                  question: "Que fait la bissectrice d'un angle ?",
                  options: ["Elle coupe le côté opposé en son milieu", "Elle partage l'angle en deux angles égaux", "Elle est perpendiculaire à un côté", "Elle relie deux sommets"],
                  correctIndex: 1,
                  explanation: "La bissectrice partage l'angle en deux angles égaux ; ses points sont équidistants des deux côtés.",
                },
                {
                  objectifId: "e3",
                  question: "Quel est l'angle d'un hexagone régulier ?",
                  options: ["108°", "120°", "135°", "90°"],
                  correctIndex: 1,
                  explanation: "Somme = (6 − 2) × 180° = 720°, divisée par 6 sommets : 720° ÷ 6 = 120°.",
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
              text: "Citez la propriété utilisée, calculez la somme attendue avant de soustraire, vérifiez. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Calculs d'angles",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : angles dans les figures",
              objectifTag: "Somme des angles",
              question: "a) Un triangle isocèle a un angle au sommet de 40° : les deux angles à la base ?\nb) Chaque angle d'un hexagone régulier ?\nc) Un quadrilatère a trois angles de 85°, 110°, 95° : le quatrième ?",
              correction: [
                { type: "line", label: "a)", text: "180° − 40° = 140°, partagés en deux angles égaux : 70° chacun." },
                { type: "line", label: "b)", text: "(6 − 2) × 180° = 720° ; 720° ÷ 6 = 120°." },
                { type: "line", label: "c)", text: "360° − 85° − 110° − 95° = 70°." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : complémentaires et supplémentaires",
              objectifTag: "Compléments",
              question: "a) Complément de 37° ?\nb) Supplément de 112° ?\nc) Deux angles supplémentaires dans le rapport 2 : 3 : leurs mesures ?",
              correction: [
                { type: "line", label: "a)", text: "90° − 37° = 53°." },
                { type: "line", label: "b)", text: "180° − 112° = 68°." },
                { type: "line", label: "c)", text: "2x + 3x = 180° → x = 36° : les angles valent 72° et 108°." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : droites parallèles",
              sub: "Alternes-internes, correspondants",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : configuration de parallèles",
              objectifTag: "Angles et parallèles",
              enonce: "Deux droites parallèles d₁ et d₂ sont coupées par une sécante. Un angle formé avec d₁ mesure 55°.",
              question: "a) Trouver les 4 angles à l'intersection avec d₁.\nb) En déduire les angles à l'intersection avec d₂.\nc) Vérifier que les co-internes sont supplémentaires.",
              correction: [
                { type: "line", label: "a)", text: "55° et son opposé 55° ; les adjacents 125° et 125°." },
                { type: "line", label: "b)", text: "Mêmes valeurs à d₂ (alternes-internes et correspondants égaux) : 55°, 125°, 55°, 125°." },
                { type: "line", label: "c)", text: "Co-internes : 55° + 125° = 180° ✓." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : la somme des angles par les parallèles",
              objectifTag: "Démonstration",
              enonce: "Dans un triangle ABC, on trace par A une droite parallèle à (BC).",
              question: "a) Quels angles alternes-internes apparaissent ?\nb) En déduire la somme des angles du triangle.\nc) Si l'angle en B vaut 55° et l'angle en A vaut 70°, calculer l'angle en C.",
              correction: [
                { type: "line", label: "a)", text: "La parallèle coupée par (AB) et (AC) crée des alternes-internes égaux aux angles en B et en C." },
                { type: "line", label: "b)", text: "Les trois angles en A forment un angle plat (180°), égaux aux trois angles du triangle : somme = 180°." },
                { type: "line", label: "c)", text: "Angle en C = 180° − 55° − 70° = 55°." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : polygones et inconnues",
              sub: "Mise en équation des angles",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : pentagone avec inconnue",
              objectifTag: "Angles et équation",
              enonce: "Un pentagone convexe ABCDE a : angle A = 2 × angle B, angle C = 90°, angle D = 110°, angle E = angle B + 20°.",
              question: "a) Somme des angles du pentagone ?\nb) Exprimer tous les angles en fonction de l'angle B.\nc) Calculer chaque angle.\nd) Le pentagone peut-il être régulier ?",
              correction: [
                { type: "line", label: "a)", text: "(5 − 2) × 180° = 540°." },
                { type: "line", label: "b)", text: "A = 2B, C = 90°, D = 110°, E = B + 20°." },
                { type: "line", label: "c)", text: "2B + B + 90° + 110° + (B + 20°) = 540° → 4B + 220° = 540° → B = 80°. Donc A = 160°, B = 80°, C = 90°, D = 110°, E = 100°." },
                { type: "line", label: "d)", text: "Non : un pentagone régulier a tous ses angles à 108°, ce qui n'est pas le cas." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : médiatrice et raisonnement",
              sub: "Propriétés caractéristiques",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 4 : équidistance et médiatrice",
              objectifTag: "Médiatrice",
              enonce: "Trois maisons A, B et C ne sont pas alignées. On veut placer un puits P équidistant des trois.",
              question: "a) Que doit vérifier P par rapport à A et B ? À B et C ?\nb) Comment construire P géométriquement ?\nc) Ce point existe-t-il toujours ?",
              correction: [
                { type: "line", label: "a)", text: "PA = PB (P sur la médiatrice de [AB]) et PB = PC (P sur la médiatrice de [BC])." },
                { type: "line", label: "b)", text: "P est l'intersection des médiatrices de [AB] et [BC] (centre du cercle circonscrit au triangle ABC)." },
                { type: "line", label: "c)", text: "Oui, dès que A, B, C ne sont pas alignés : les deux médiatrices se coupent en un point unique." },
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
              text: "Cet exercice reproduit le format d'un sujet de concours, qui combine somme d'angles, parallélisme et triangle. Comptez 20 minutes, en conditions réelles.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 5 : la façade de l'école",
              objectifTag: "Angles, polygone, parallélisme",
              enonce:
                "La façade d'une école est modélisée par un pentagone ABCDE. Les angles en A, B et E sont droits (90°). Une poutre diagonale relie B à D.",
              question:
                "1.1 Calculer la somme des angles du pentagone.\n1.2 Sachant que l'angle en C est égal à l'angle en D, calculer ces deux angles.\n1.3 Vérifier que l'angle en C est obtus.\n2.1 Dans le triangle BCD, l'angle en B (entre BD et BC) vaut 35° et l'angle en C vaut 60°. Calculer l'angle en D du triangle.\n2.2 La poutre BD est-elle perpendiculaire à un côté du triangle ? Justifier.\n3.1 Si (AB) est parallèle à (ED), quelle relation lie l'angle ABD et l'angle BDE ? Si l'angle ABD vaut 55°, calculer l'angle BDE.",
              correction: [
                { type: "line", label: "1.1", text: "(5 − 2) × 180° = 540°." },
                { type: "line", label: "1.2", text: "90° + 90° + C + D + 90° = 540° → C + D = 270°. Comme C = D : C = D = 135°." },
                { type: "line", label: "1.3", text: "135° > 90° : l'angle est obtus." },
                { type: "line", label: "2.1", text: "Dans le triangle BCD : angle en D = 180° − 35° − 60° = 85°." },
                { type: "line", label: "2.2", text: "Aucun angle du triangle BCD ne vaut 90° : BD n'est perpendiculaire à aucun côté." },
                { type: "line", label: "3.1", text: "(AB) // (ED), sécante (BD) : les angles ABD et BDE sont alternes-internes, donc égaux. Si ABD = 55°, alors BDE = 55°." },
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
              title: "Erreur type · Exercice 6 : alternes-internes confondus",
              objectifTag: "Configuration de droites",
              enonce: "**Copie d'un candidat :** sur deux parallèles coupées par une sécante, il désigne comme alternes-internes deux angles situés du même côté de la sécante.",
              question: "a) Identifier l'erreur.\nb) Préciser la bonne définition.",
              correction: [
                { type: "paragraph", text: "**Erreur : confusion entre alternes-internes et correspondants.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Les angles du même côté ne sont pas alternes-internes." },
                    { text: "Alternes-internes : de part et d'autre de la sécante, entre les droites (en Z)." },
                    { text: "Correspondants : du même côté de la sécante (en F). Les deux sont égaux si les droites sont parallèles." },
                  ],
                },
                { type: "note", text: "Mémo visuel : alternes-internes en Z, correspondants en F." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 7 : 180° au lieu de 360°",
              objectifTag: "Somme des angles",
              enonce: "**Copie d'un candidat :** un quadrilatère a trois angles de 80°, 95°, 110°.\n*Réponse produite :* « 4e angle = 180° − 80° − 95° − 110° = −105° ».",
              question: "a) Identifier l'erreur.\nb) Donner le bon angle.",
              correction: [
                { type: "paragraph", text: "**Erreur : somme du triangle utilisée pour un quadrilatère.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Un angle négatif est impossible : c'est le signe d'une somme erronée." },
                    { text: "Somme d'un quadrilatère = (4 − 2) × 180° = 360°." },
                    { text: "4e angle = 360° − 80° − 95° − 110° = 75°." },
                  ],
                },
                { type: "note", text: "Toujours calculer (n − 2) × 180° avant de soustraire." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 8 : opposés par le sommet supplémentaires",
              objectifTag: "Angles opposés par le sommet",
              enonce: "**Copie d'un candidat :** deux droites se coupent, un angle vaut 70°.\n*Réponse produite :* « l'angle opposé par le sommet vaut 180° − 70° = 110° ».",
              question: "a) Identifier l'erreur.\nb) Donner la bonne valeur.",
              correction: [
                { type: "paragraph", text: "**Erreur : opposés par le sommet pris pour supplémentaires.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Les angles opposés par le sommet sont égaux, pas supplémentaires." },
                    { text: "L'opposé de 70° vaut 70°." },
                    { text: "Ce sont les angles adjacents qui valent 180° − 70° = 110°." },
                  ],
                },
                { type: "note", text: "Autour d'une intersection : deux paires d'angles égaux, somme totale 360°." },
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
                  question: "Quelle est la somme des angles d'un triangle ?",
                  answer:
                    "180°, pour tout triangle (scalène, isocèle, équilatéral, rectangle). Si deux angles sont connus, le troisième vaut 180° − (somme des deux autres).",
                  astuce: "Ne pas confondre avec le quadrilatère (360°).",
                },
                {
                  question: "Formule de la somme des angles d'un polygone à n côtés ?",
                  answer:
                    "S = (n − 2) × 180°. Quadrilatère 360°, pentagone 540°, hexagone 720°. Angle d'un polygone régulier : S ÷ n.",
                  astuce: "(n − 2), pas n : on découpe en (n − 2) triangles.",
                },
                {
                  question: "Angles alternes-internes : définition et propriété ?",
                  answer:
                    "Deux angles formés par une sécante, de part et d'autre de la sécante et entre les deux droites. Si les droites sont parallèles, ils sont égaux. Réciproque : s'ils sont égaux, les droites sont parallèles.",
                  astuce: "Mémo : angles en Z.",
                },
                {
                  question: "Angles correspondants : définition et propriété ?",
                  answer:
                    "Deux angles du même côté de la sécante (un entre les droites, un à l'extérieur). Égaux si les droites sont parallèles. Mémo : angles en F.",
                  astuce: "Du même côté, contrairement aux alternes-internes.",
                },
                {
                  question: "Angles co-internes : que vaut leur somme si les droites sont parallèles ?",
                  answer:
                    "180° (ils sont supplémentaires). C'est le seul cas où les angles ne sont pas égaux mais supplémentaires.",
                },
                {
                  question: "Les angles opposés par le sommet sont-ils égaux ou supplémentaires ?",
                  answer:
                    "Égaux. Ce sont les angles adjacents qui sont supplémentaires (180°). Un angle de 70° a un opposé de 70° et des adjacents de 110°.",
                  astuce: "Erreur fréquente : les croire supplémentaires.",
                },
                {
                  question: "Qu'est-ce que la médiatrice d'un segment et sa propriété clé ?",
                  answer:
                    "La droite perpendiculaire à [AB] passant par son milieu. Propriété : M est sur la médiatrice si et seulement si MA = MB. Construction au compas : deux arcs de même rayon depuis A et B.",
                  astuce: "Médiatrice ≠ médiane ≠ hauteur.",
                },
                {
                  question: "Qu'est-ce que la bissectrice d'un angle ?",
                  answer:
                    "La demi-droite qui partage l'angle en deux angles égaux. Un point de la bissectrice est équidistant des deux côtés de l'angle. Construction au compas en deux étapes (arc depuis le sommet, puis depuis les côtés).",
                },
                {
                  question: "Complémentaires ou supplémentaires : quelle différence ?",
                  answer:
                    "Complémentaires : somme 90° (ils complètent un angle droit). Supplémentaires : somme 180° (ils complètent un angle plat). 37° et 53° sont complémentaires ; 70° et 110° supplémentaires.",
                  astuce: "Complémentaires → Complètent le Carré (angle droit).",
                },
                {
                  question: "Comment expliquer la somme 180° d'un triangle à l'école ?",
                  answer:
                    "Par le pliage : on déchire les trois coins du triangle et on les aligne, ils forment un angle plat (180°). C'est l'approche du cycle 3, avant toute démonstration formelle.",
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
