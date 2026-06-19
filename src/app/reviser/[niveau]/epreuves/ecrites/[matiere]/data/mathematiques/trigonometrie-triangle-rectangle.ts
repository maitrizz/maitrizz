import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je retiens SOH-CAH-TOA et j'identifie opposé, adjacent et hypoténuse pour un angle donné" },
  { id: "e2", label: "Je calcule une longueur en choisissant sin, cos ou tan selon les côtés en jeu" },
  { id: "e3", label: "Je calcule un angle avec arcsin, arccos ou arctan sur la calculatrice en mode degrés" },
  { id: "e4", label: "Je connais les valeurs de sin, cos et tan pour 30°, 45° et 60° sans calculatrice" },
  { id: "e5", label: "Je connais et j'utilise sin²α + cos²α = 1 pour trouver une valeur exacte" },
  { id: "e6", label: "Je connais et j'utilise tan α = sin α / cos α" },
  { id: "e7", label: "Je sais modéliser une hauteur inaccessible avec tan α = h/d" },
  { id: "e8", label: "Je sais relier l'angle d'inclinaison d'une pente à son pourcentage" },
  { id: "e9", label: "Je vérifie mes résultats (Pythagore, angles complémentaires, cohérence des valeurs)" },
];

export const ficheTrigonometrieTriangleRectangle: Fiche = {
  slug: "trigonometrie-triangle-rectangle",
  matiere: "mathematiques",
  numero: 23,
  partie: "Partie 4 : Espace et géométrie plane",
  title: "Trigonométrie dans le triangle rectangle",
  subtitle:
    "Définitions sin · cos · tan · calculer une longueur ou un angle · valeurs remarquables 30° · 45° · 60° · sin²+cos²=1 · tan = sin/cos · applications pente et hauteur",
  badges: [
    { label: "★★★ Quasiment chaque sujet", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème D", variant: "info" },
  ],
  metaTitle: "Trigonométrie dans le triangle rectangle (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur la trigonométrie du triangle rectangle : définitions de sin, cos et tan (SOH-CAH-TOA), calcul de longueurs et d'angles, valeurs remarquables, sin²+cos²=1, applications pente et hauteur inaccessible. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                { number: "①", title: "Définitions sin, cos, tan", text: "SOH-CAH-TOA : les trois rapports rapportés à l'angle de référence." },
                { number: "②", title: "Calculer une longueur ou un angle", text: "Choisir la bonne formule, puis arcsin, arccos ou arctan pour un angle." },
                { number: "③", title: "Valeurs remarquables et relations", text: "30°, 45°, 60° par cœur, sin²+cos²=1 et tan = sin/cos." },
                { number: "④", title: "Applications", text: "Pente d'une route, hauteur inaccessible : modéliser avec la tangente." },
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
              title: "La trigonométrie complète Pythagore",
              text: "Là où Pythagore calcule une longueur à partir de deux côtés, la trigonométrie calcule une longueur ou un angle à partir d'un côté et d'un angle. C'est l'outil des pentes, des hauteurs inaccessibles et de tous les problèmes où l'angle d'inclinaison est donné. La difficulté n'est pas le calcul : c'est de toujours rapporter sin, cos et tan à l'angle de référence, et de ne pas confondre côté adjacent et côté opposé selon l'angle choisi.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Définitions de sin, cos et tan",
              blocks: [
                {
                  type: "paragraph",
                  text: "Dans un triangle rectangle, pour un angle aigu α, on nomme les trois côtés par rapport à cet angle de référence : l'hypoténuse (face à l'angle droit, le plus long), le côté opposé (face à α) et le côté adjacent (entre α et l'angle droit). Changer d'angle de référence change la désignation des côtés : c'est la principale source d'erreur.",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Les trois rapports trigonométriques",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "**sin α = côté opposé / hypoténuse**",
                        "**cos α = côté adjacent / hypoténuse**",
                        "**tan α = côté opposé / côté adjacent**",
                      ],
                      note: "Mémo incontournable : SOH-CAH-TOA. Sinus = Opposé/Hypoténuse · Cosinus = Adjacent/Hypoténuse · Tangente = Opposé/Adjacent.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ L'angle de référence change tout",
                  text: "Dans un triangle rectangle en C, si on prend l'angle en A puis l'angle en B, le côté opposé et le côté adjacent s'échangent. Toujours préciser l'angle de référence avant de nommer opposé et adjacent.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Calculer une longueur, puis un angle",
              blocks: [
                {
                  type: "paragraph",
                  text: "Pour une longueur, on identifie les deux côtés en jeu (le connu et l'inconnu), on choisit la formule qui contient ces deux côtés, puis on isole l'inconnu.",
                },
                {
                  type: "table",
                  headers: ["Côté connu", "Côté cherché", "Formule"],
                  rows: [
                    ["Hypoténuse", "Opposé", "opposé = hyp × sin α"],
                    ["Hypoténuse", "Adjacent", "adjacent = hyp × cos α"],
                    ["Adjacent", "Opposé", "opposé = adj × tan α"],
                    ["Opposé", "Hypoténuse", "hyp = opp / sin α"],
                    ["Adjacent", "Hypoténuse", "hyp = adj / cos α"],
                    ["Opposé", "Adjacent", "adjacent = opp / tan α"],
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Calculer un angle : la fonction réciproque",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "Connaissant deux côtés, on calcule le rapport, puis :",
                        "α = arcsin(opp/hyp) = sin⁻¹(opp/hyp)",
                        "α = arccos(adj/hyp) = cos⁻¹(adj/hyp)",
                        "α = arctan(opp/adj) = tan⁻¹(opp/adj)",
                      ],
                      note: "Sur la calculatrice : touche 2nd ou SHIFT, puis sin, cos ou tan. Vérifier le mode DEG (degrés), pas RAD (radians). sin⁻¹ est la fonction réciproque, ce n'est pas 1/sin.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Valeurs remarquables et relations fondamentales",
              blocks: [
                {
                  type: "table",
                  headers: ["Angle α", "sin α", "cos α", "tan α"],
                  rows: [
                    ["0°", "0", "1", "0"],
                    ["30°", "1/2", "√3/2", "√3/3"],
                    ["45°", "√2/2", "√2/2", "1"],
                    ["60°", "√3/2", "1/2", "√3"],
                    ["90°", "1", "0", "indéfini"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Mémo : sin croît de 0 à 1 quand l'angle va de 0° à 90°, cos décroît de 1 à 0. Angles complémentaires : sin 30° = cos 60° = 1/2 et sin 60° = cos 30° = √3/2. Les triangles 45°-45°-90° (côtés 1, 1, √2) et 30°-60°-90° (côtés 1, √3, 2) permettent de retrouver ces valeurs.",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Deux identités à connaître",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "**sin²α + cos²α = 1** (conséquence de Pythagore : a² + b² = c² divisé par c²)",
                        "**tan α = sin α / cos α** (découle directement des définitions)",
                      ],
                      note: "Exemple : si cos α = 3/5, alors sin²α = 1 − 9/25 = 16/25, donc sin α = 4/5 (positif car α est aigu).",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Applications : pente et hauteur inaccessible",
              blocks: [
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Pente d'une route ou d'un toit",
                      variant: "info",
                      lines: [
                        "Montée h sur une distance horizontale d : tan α = h/d.",
                        "Pente 5 % → tan α = 0,05 → α ≈ 2,86°.",
                        "Pente 100 % → tan α = 1 → α = 45°.",
                      ],
                    },
                    {
                      title: "Hauteur inaccessible (angle de visée)",
                      variant: "info",
                      lines: [
                        "À une distance d connue, angle de visée α du sommet.",
                        "h = d × tan α.",
                        "d = 30 m, α = 35° → h ≈ 21 m (au niveau des yeux).",
                      ],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Si on connaît l'hypoténuse c et un angle α, on obtient directement les deux côtés sans Pythagore : opposé = c × sin α et adjacent = c × cos α.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : confondre côté opposé et adjacent",
              badge: "Très fréquent",
              faux: "Pour l'angle en A (rectangle en C), écrire sin α = AC/AB alors que AC est le côté adjacent.",
              vrai: "sin α = opposé/hyp = BC/AB ; le rapport AC/AB est le cosinus, pas le sinus.",
              methode: "Dessiner et annoter Hyp, Opp, Adj par rapport à l'angle de référence avant d'écrire la formule.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : calculatrice en mode radians",
              badge: "Très courant",
              faux: "« sin 30° donne −0,988 sur ma calculatrice. »",
              vrai: "C'est le mode RAD. En mode DEG, sin 30° = 0,5.",
              methode: "Vérifier que l'écran affiche « DEG » ou « D ». Un résultat aberrant (> 1 ou négatif pour un angle aigu) trahit le mode RAD.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : écrire sin α = une longueur",
              badge: "Conceptuel",
              faux: "« sin 50° = AC, donc AC ≈ 0,766 cm. »",
              vrai: "sin α est un rapport sans unité (entre 0 et 1 pour un angle aigu), pas une longueur. sin 50° = AC/hyp.",
              methode: "On écrit toujours sin α = rapport, jamais sin α = longueur.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : confondre arcsin et 1/sin",
              badge: "Subtile",
              faux: "« sin α = 0,6, donc α = 1/sin(0,6) ≈ 1,76. »",
              vrai: "α = arcsin(0,6) = sin⁻¹(0,6) ≈ 36,87°. La notation sin⁻¹ désigne la fonction réciproque, pas l'inverse 1/sin.",
              methode: "Pour un angle, utiliser la touche 2nd/SHIFT puis sin, cos ou tan.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école : le regard du futur enseignant",
              text: "La trigonométrie n'est pas au programme du primaire : sin, cos et tan apparaissent en 4e (cycle 4). Au cycle 3, les élèves rencontrent les angles, les mesurent au rapporteur, et travaillent sur les triangles et quadrilatères. En CM2, on peut aborder intuitivement la pente (« 10 % de pente » en contexte vélo ou ski) sans formaliser avec la tangente.\n\nCe qu'il faut maîtriser pour le CRPE : utiliser la calculatrice en mode degrés, choisir la bonne fonction (sin, cos, tan) selon les côtés en jeu, calculer un angle avec arcsin, arccos ou arctan, et connaître les valeurs remarquables par cœur pour des calculs exacts.\n\nLe jury peut demander de résoudre un problème de pente ou de hauteur inaccessible en situation scolaire. C'est souvent l'occasion de relier la trigonométrie à Thalès et à la proportionnalité (l'ombre du mât, [fiche N°22](fiche:theoreme-de-thales-similitude)).",
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
              title: "Un algorithme de décision automatique",
              text: "Toujours dans cet ordre : 1) identifier l'angle de référence, 2) nommer les côtés (opposé, adjacent, hypoténuse) par rapport à cet angle, 3) choisir sin, cos ou tan, 4) isoler l'inconnu et calculer. Et un schéma à chaque fois.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Calculer une longueur avec un angle connu",
              intro:
                "**Question type :** « Triangle ABC rectangle en C, AB = 10 cm, angle en A = 37°. Calculer AC et BC. »",
              steps: [
                {
                  number: "1",
                  text: "**Nommer les côtés par rapport à l'angle en A.**",
                  example: { lines: ["AB = hypoténuse · AC = adjacent à A · BC = opposé à A"] },
                },
                {
                  number: "2",
                  text: "**Calculer AC (adjacent, hypoténuse connue) avec cos.**",
                  example: { lines: ["cos 37° = AC/AB → AC = 10 × cos 37° ≈ 7,99 cm"] },
                },
                {
                  number: "3",
                  text: "**Calculer BC (opposé) avec sin, puis vérifier.**",
                  example: { lines: ["sin 37° = BC/AB → BC = 10 × sin 37° ≈ 6,02 cm", "Vérif. : AC² + BC² ≈ 63,8 + 36,2 = 100 = AB² ✓"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Triangle rectangle, hypoténuse 12 cm, un angle aigu 60°. Quel est le côté opposé à cet angle ?",
              correction: [
                { type: "line", text: "opposé = 12 × sin 60° = 12 × √3/2 = **6√3 ≈ 10,39 cm**." },
                { type: "note", text: "Côté opposé et hypoténuse connue : on utilise le sinus." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Calculer un angle inconnu",
              intro:
                "**Question type :** « Triangle DEF rectangle en F, DE = 13, EF = 5. Calculer l'angle en D. »",
              steps: [
                {
                  number: "1",
                  text: "**Identifier les côtés par rapport à l'angle en D.**",
                  example: { lines: ["DE = hypoténuse · EF = opposé à D · DF = adjacent"] },
                },
                {
                  number: "2",
                  text: "**Choisir la formule (opposé et hypoténuse → sin).**",
                  example: { lines: ["sin D = EF/DE = 5/13 ≈ 0,3846"] },
                },
                {
                  number: "3",
                  text: "**Appliquer arcsin (mode DEG).**",
                  example: { lines: ["D = arcsin(5/13) ≈ 22,6°"] },
                  warn: "⚠️ arcsin (sin⁻¹) est la fonction réciproque, pas 1/sin. Calculatrice en mode degrés.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Dans un triangle rectangle, le côté adjacent à α vaut 4 et l'hypoténuse 8. Que vaut α ?",
              correction: [
                { type: "line", text: "cos α = 4/8 = 0,5 → α = arccos(0,5) = **60°**." },
                { type: "note", text: "Adjacent et hypoténuse : on utilise le cosinus, puis arccos." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Calculer une hauteur inaccessible",
              intro:
                "**Question type :** « Un observateur est à 50 m d'un arbre et mesure l'angle de visée du sommet à 28°. Calculer la hauteur de l'arbre (au niveau des yeux). »",
              steps: [
                {
                  number: "1",
                  text: "**Schéma : repérer le triangle rectangle.**",
                  example: { lines: ["Base horizontale 50 m (adjacent) · hauteur h (opposé) · ligne de visée (hypoténuse)"] },
                },
                {
                  number: "2",
                  text: "**Choisir tan (opposé et adjacent, sans hypoténuse).**",
                  example: { lines: ["tan 28° = h/50 → h = 50 × tan 28° ≈ 26,6 m"] },
                },
                {
                  number: "3",
                  text: "**Ajouter la hauteur des yeux si l'énoncé le demande.**",
                  example: { lines: ["Hauteur totale ≈ 26,6 + 1,7 ≈ 28,3 m"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Une route a une pente de 8 %. Quel est son angle d'inclinaison ?",
              correction: [
                { type: "line", text: "tan α = 8/100 = 0,08 → α = arctan(0,08) ≈ **4,57°**." },
                { type: "note", text: "Pente p % signifie tan α = p/100." },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Utiliser sin²+cos²=1 pour une valeur exacte",
              intro:
                "**Question type :** « α est aigu et sin α = 5/13. Calculer cos α et tan α sans calculatrice. »",
              steps: [
                {
                  number: "1",
                  text: "**Trouver cos α avec l'identité.**",
                  example: { lines: ["cos²α = 1 − 25/169 = 144/169 → cos α = 12/13 (positif, α aigu)"] },
                },
                {
                  number: "2",
                  text: "**Calculer tan α.**",
                  example: { lines: ["tan α = sin α / cos α = (5/13)/(12/13) = 5/12"] },
                },
                {
                  number: "💡",
                  text: "**Reconnaître le triplet.**",
                  example: { lines: ["5/13, 12/13, 5/12 : ce sont les rapports du triangle 5-12-13."] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "α est aigu et cos α = 4/5. Que vaut sin α ?",
              correction: [
                { type: "line", text: "sin²α = 1 − 16/25 = 9/25 → sin α = **3/5** (triplet 3-4-5)." },
                { type: "note", text: "On prend la racine positive car α est aigu." },
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
                  question: "Que vaut le sinus d'un angle aigu dans un triangle rectangle ?",
                  options: ["Adjacent / hypoténuse", "Opposé / hypoténuse", "Opposé / adjacent", "Hypoténuse / opposé"],
                  correctIndex: 1,
                  explanation: "SOH : sinus = opposé / hypoténuse.",
                },
                {
                  objectifId: "e2",
                  question: "Hypoténuse 10, on cherche le côté adjacent à un angle de 37°. Quelle formule ?",
                  options: ["adj = 10 × sin 37°", "adj = 10 × cos 37°", "adj = 10 × tan 37°", "adj = 10 / cos 37°"],
                  correctIndex: 1,
                  explanation: "Adjacent et hypoténuse connue : cos α = adj/hyp, donc adj = hyp × cos α.",
                },
                {
                  objectifId: "e3",
                  question: "On connaît opposé = 5 et hypoténuse = 13. Comment trouver l'angle ?",
                  options: ["α = sin(5/13)", "α = arcsin(5/13)", "α = 1/sin(5/13)", "α = 5/13"],
                  correctIndex: 1,
                  explanation: "sin α = 5/13, donc α = arcsin(5/13) ≈ 22,6°. arcsin est la fonction réciproque.",
                },
                {
                  objectifId: "e4",
                  question: "Que vaut cos 30° ?",
                  options: ["1/2", "√2/2", "√3/2", "1"],
                  correctIndex: 2,
                  explanation: "cos 30° = √3/2. À comparer avec cos 60° = 1/2.",
                },
                {
                  objectifId: "e5",
                  question: "α est aigu et cos α = 3/5. Que vaut sin α ?",
                  options: ["2/5", "4/5", "5/3", "1/5"],
                  correctIndex: 1,
                  explanation: "sin²α = 1 − 9/25 = 16/25, donc sin α = 4/5 (positif car α est aigu).",
                },
                {
                  objectifId: "e6",
                  question: "Quelle relation lie tan, sin et cos ?",
                  options: ["tan α = cos α / sin α", "tan α = sin α × cos α", "tan α = sin α / cos α", "tan α = sin α + cos α"],
                  correctIndex: 2,
                  explanation: "tan α = sin α / cos α, par définition des rapports.",
                },
                {
                  objectifId: "e7",
                  question: "À 30 m d'un arbre, l'angle de visée du sommet est 35°. Quelle hauteur (au niveau des yeux) ?",
                  options: ["30 × sin 35°", "30 × cos 35°", "30 × tan 35° ≈ 21 m", "30 / tan 35°"],
                  correctIndex: 2,
                  explanation: "h = d × tan α = 30 × tan 35° ≈ 21 m. L'opposé et l'adjacent sont en jeu, donc tangente.",
                },
                {
                  objectifId: "e8",
                  question: "Une pente de 100 % correspond à quel angle ?",
                  options: ["30°", "45°", "60°", "90°"],
                  correctIndex: 1,
                  explanation: "tan α = 100/100 = 1, donc α = 45°.",
                },
                {
                  objectifId: "e9",
                  question: "Vous obtenez sin α = 1,2 pour un angle aigu. Que faut-il en conclure ?",
                  options: ["L'angle est obtus", "C'est une erreur : un sinus est toujours ≤ 1", "Il faut diviser par 2", "C'est correct"],
                  correctIndex: 1,
                  explanation: "Un sinus (comme un cosinus) est toujours compris entre −1 et 1. Une valeur supérieure à 1 signale une erreur de calcul.",
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
              text: "Commencez toujours par un schéma, nommez les côtés par rapport à l'angle de référence, puis choisissez sin, cos ou tan. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Calculs directs et valeurs remarquables",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : longueurs et angle",
              objectifTag: "SOH-CAH-TOA",
              enonce: "Triangle ABC rectangle en B. Angle en A = 40°, AB = 8 cm.",
              question: "a) Calculer BC (opposé à l'angle en A).\nb) Calculer AC (hypoténuse).\nc) Vérifier avec Pythagore.",
              correction: [
                { type: "line", label: "a)", text: "tan 40° = BC/AB → BC = 8 × tan 40° ≈ 6,71 cm." },
                { type: "line", label: "b)", text: "cos 40° = AB/AC → AC = 8/cos 40° ≈ 10,44 cm." },
                { type: "line", label: "c)", text: "AB² + BC² ≈ 64 + 45,0 ≈ 109,0 ≈ AC² ✓." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : valeurs remarquables sans calculatrice",
              objectifTag: "Valeurs exactes",
              question:
                "a) Hypoténuse 6 cm, un angle aigu 30°. Calculer les deux côtés de l'angle droit (valeurs exactes).\nb) Triangle rectangle isocèle, côté de l'angle droit 5 cm. Calculer l'hypoténuse (valeur exacte).",
              correction: [
                { type: "line", label: "a)", text: "Opposé à 30° = 6 × sin 30° = 6 × 1/2 = 3 cm. Adjacent = 6 × cos 30° = 6 × √3/2 = 3√3 cm." },
                { type: "line", label: "b)", text: "Angles 45°-45°-90° : hyp = côté × √2 = 5√2 ≈ 7,07 cm." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : problèmes contextualisés",
              sub: "Modéliser et interpréter",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : la rampe d'accès",
              objectifTag: "Pente et angle",
              enonce: "Une rampe d'accès doit respecter une pente maximale de 5 % et surmonter une marche de 20 cm de hauteur.",
              question: "a) Calculer l'angle d'inclinaison correspondant à 5 % (pente = hauteur/longueur horizontale).\nb) Calculer la longueur horizontale minimale.\nc) Calculer la longueur de la rampe (hypoténuse).",
              correction: [
                { type: "line", label: "a)", text: "tan α = 5/100 = 0,05 → α = arctan(0,05) ≈ 2,86°." },
                { type: "line", label: "b)", text: "tan α = h/d → d = h/tan α = 20/0,05 = 400 cm = 4 m." },
                { type: "line", label: "c)", text: "hyp = √(400² + 20²) = √160 400 ≈ 400,5 cm (soit ≈ 4 m)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : sin²+cos²=1 et triplet",
              objectifTag: "Valeurs exactes",
              enonce: "α est un angle aigu d'un triangle rectangle, avec tan α = 3/4.",
              question: "a) En déduire sin α et cos α sans calculatrice.\nb) Calculer α en degrés.",
              correction: [
                { type: "line", label: "a)", text: "tan α = 3/4 → opposé 3, adjacent 4, hypoténuse 5 (triplet 3-4-5). sin α = 3/5, cos α = 4/5 (vérif. : 9/25 + 16/25 = 1 ✓)." },
                { type: "line", label: "b)", text: "α = arctan(3/4) = arctan(0,75) ≈ 36,9°." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : hauteur inaccessible",
              sub: "Modélisation complète",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : la tour du château",
              objectifTag: "Angle de visée",
              enonce: "Pour estimer la hauteur d'une tour, un enseignant se place à 40 m de la base et mesure l'angle de visée du sommet à 52°. Ses yeux sont à 1,65 m du sol.",
              question: "a) Calculer la hauteur h de la tour au-dessus de ses yeux.\nb) En déduire la hauteur totale de la tour.\nc) À quelle distance devrait-il se placer pour que l'angle de visée soit 45° ?",
              correction: [
                { type: "line", label: "a)", text: "tan 52° = h/40 → h = 40 × tan 52° ≈ 51,20 m." },
                { type: "line", label: "b)", text: "Hauteur totale ≈ 51,20 + 1,65 ≈ 52,85 m." },
                { type: "line", label: "c)", text: "tan 45° = 1, donc d = h = 51,20 m : il faut se placer à environ 51,2 m de la base." },
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
              text: "Cet exercice reproduit le format d'un sujet de concours : il combine trigonométrie, géométrie et un volet de recul enseignant. Comptez environ 25 minutes, en conditions réelles.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 4 : le toit de l'école",
              objectifTag: "Trigonométrie, surface, recul",
              enonce:
                "Le toit d'une école est formé de deux pans symétriques. La largeur du bâtiment est AB = 12 m, le faîte (sommet) est au point S. La demi-largeur à la base est donc 6 m. L'angle d'inclinaison d'un pan par rapport à l'horizontale est α = 35°. La longueur du bâtiment (perpendiculaire à la coupe) est 20 m.",
              question:
                "1.1 Calculer la hauteur h du faîte au-dessus du bas du toit.\n1.2 Calculer la longueur d'un pan de toit (de la gouttière au faîte).\n1.3 Calculer l'angle au sommet S (entre les deux pans).\n2.1 Calculer la surface totale de toiture (les deux pans).\n2.2 Un enseignant affirme que si α = 45°, le faîte serait à la même hauteur que la demi-largeur (6 m). Vérifier.",
              correction: [
                { type: "line", label: "1.1", text: "Triangle droit (demi-base 6 m, angle 35°) : tan 35° = h/6 → h = 6 × tan 35° ≈ 4,20 m." },
                { type: "line", label: "1.2", text: "cos 35° = 6/L → L = 6/cos 35° ≈ 7,32 m." },
                { type: "line", label: "1.3", text: "Le triangle du toit est isocèle, deux angles de base de 35° : angle au sommet = 180° − 2 × 35° = 110°." },
                { type: "line", label: "2.1", text: "Un pan : L × 20 ≈ 7,32 × 20 ≈ 146,4 m². Surface totale ≈ 2 × 146,4 ≈ 292,8 m²." },
                { type: "line", label: "2.2", text: "Pour α = 45° : tan 45° = 1 → h = 6 × 1 = 6 m. L'affirmation est correcte." },
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
              title: "Erreur type · Exercice 5 : opposé et adjacent confondus",
              objectifTag: "Choix de la formule",
              enonce: "**Copie d'un candidat :** triangle ABC rectangle en C, angle en A = 30°, on cherche AC.\n*Réponse produite :* « sin 30° = AC/AB, donc AC = AB × sin 30°. »",
              question: "a) Identifier l'erreur.\nb) Rédiger correctement.",
              correction: [
                { type: "paragraph", text: "**Erreur : AC est le côté adjacent à l'angle en A, pas l'opposé.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "sin α = opposé/hyp = BC/AB, pas AC/AB." },
                    { text: "AC/AB est le cosinus : cos 30° = AC/AB → AC = AB × cos 30° = AB × √3/2." },
                    { text: "Annoter Hyp, Opp, Adj sur le schéma avant de choisir la formule." },
                  ],
                },
                { type: "note", text: "Opposé et adjacent dépendent de l'angle de référence : toujours le préciser." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 6 : mode radians",
              objectifTag: "Calculatrice",
              enonce: "**Copie d'un candidat :** « sin 30° = −0,988 » (lu sur la calculatrice).",
              question: "a) Identifier l'erreur.\nb) Donner la bonne valeur.",
              correction: [
                { type: "paragraph", text: "**Erreur : la calculatrice est en mode radians (RAD).**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "sin(30 rad) ≈ −0,988 : 30 radians n'a rien à voir avec 30°." },
                    { text: "En mode DEG, sin 30° = 0,5." },
                    { text: "Vérifier l'affichage « DEG » avant tout calcul trigonométrique." },
                  ],
                },
                { type: "note", text: "Un résultat aberrant (valeur > 1 ou négative pour un angle aigu) trahit le mode RAD." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 7 : arcsin confondu avec 1/sin",
              objectifTag: "Calcul d'un angle",
              enonce: "**Copie d'un candidat :** sin α = 0,6, on cherche α.\n*Réponse produite :* « α = 1/sin(0,6) ≈ 1,76. »",
              question: "a) Identifier l'erreur.\nb) Donner la bonne valeur.",
              correction: [
                { type: "paragraph", text: "**Erreur : arcsin a été confondu avec 1/sin.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "arcsin (sin⁻¹) est la fonction réciproque de sinus, ce n'est pas 1/sin." },
                    { text: "α = arcsin(0,6) = sin⁻¹(0,6) ≈ 36,87°." },
                    { text: "Sur la calculatrice : touche 2nd ou SHIFT, puis sin." },
                  ],
                },
                { type: "note", text: "L'exposant −1 de sin⁻¹ signifie « fonction réciproque », pas « 1 divisé par »." },
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
                  question: "Énoncer SOH-CAH-TOA avec les définitions complètes.",
                  answer:
                    "Pour un angle aigu α : sin α = opposé/hypoténuse, cos α = adjacent/hypoténuse, tan α = opposé/adjacent. Opposé = côté face à α ; adjacent = côté entre α et l'angle droit ; hypoténuse = côté face à l'angle droit.",
                  astuce: "Opposé et adjacent dépendent de l'angle de référence : ils changent si on prend l'autre angle aigu.",
                },
                {
                  question: "Valeurs remarquables de sin, cos et tan pour 30°, 45°, 60°.",
                  answer:
                    "30° : sin 1/2, cos √3/2, tan √3/3. 45° : sin et cos √2/2, tan 1. 60° : sin √3/2, cos 1/2, tan √3. Mémo : sin 30° = cos 60° et sin 60° = cos 30°.",
                },
                {
                  question: "Les deux identités trigonométriques fondamentales ?",
                  answer:
                    "sin²α + cos²α = 1 (conséquence de Pythagore) et tan α = sin α / cos α. Si on connaît sin α, alors cos α = √(1 − sin²α), positif si α est aigu.",
                },
                {
                  question: "Comment calculer un angle inconnu à partir des côtés ?",
                  answer:
                    "On calcule le rapport, puis la fonction réciproque : α = arcsin(opp/hyp), arccos(adj/hyp) ou arctan(opp/adj). Sur la calculatrice : 2nd ou SHIFT puis sin, cos ou tan, en mode DEG.",
                  astuce: "sin⁻¹ = arcsin = fonction réciproque. Ce n'est pas 1/sin.",
                },
                {
                  question: "Formule pour une hauteur inaccessible (angle de visée) ?",
                  answer:
                    "À une distance d de la base, angle de visée α du sommet : h = d × tan α. Si on est à 1,65 m de haut, hauteur totale = h + 1,65. Si on connaît l'hypoténuse L : h = L × sin α.",
                },
                {
                  question: "Quelle formule pour chaque situation (opposé, adjacent, hypoténuse) ?",
                  answer:
                    "On choisit la formule qui contient les deux côtés en jeu : opposé + hypoténuse → sin (SOH) ; adjacent + hypoténuse → cos (CAH) ; opposé + adjacent → tan (TOA).",
                },
                {
                  question: "Relation entre pente en % et angle d'inclinaison ?",
                  answer:
                    "Pente p % = (montée/longueur horizontale) × 100 = h/d × 100, donc tan α = p/100 et α = arctan(p/100). Pente 5 % → α ≈ 2,86° ; pente 100 % → α = 45°.",
                },
                {
                  question: "Les deux triangles rectangles remarquables et leurs côtés exacts ?",
                  answer:
                    "Triangle 45°-45°-90° : côtés 1, 1, √2 (hypoténuse = côté × √2). Triangle 30°-60°-90° : côtés 1, √3, 2. Ils permettent des calculs exacts sans calculatrice.",
                },
                {
                  question: "Si cos α = 5/13 (α aigu), calculer sin α et tan α.",
                  answer:
                    "sin²α = 1 − 25/169 = 144/169, donc sin α = 12/13. tan α = (12/13)/(5/13) = 12/5. Ce sont les rapports du triangle 5-12-13.",
                },
                {
                  question: "Quelles vérifications après un calcul trigonométrique ?",
                  answer:
                    "Pythagore (opp² + adj² = hyp²), angles complémentaires (les deux aigus font 90°), cohérence (l'hypoténuse est le plus grand côté, sin et cos restent ≤ 1), et sin 30° doit valoir 0,5 (sinon mode RAD).",
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
              center: { title: "Trigonométrie", subtitle: "SOH-CAH-TOA" },
              branches: [
                {
                  title: "Définitions",
                  variant: "blue",
                  lines: ["sin = opp/hyp", "cos = adj/hyp", "tan = opp/adj"],
                },
                {
                  title: "Calculer une longueur",
                  variant: "blue",
                  lines: ["opp = hyp × sin α", "adj = hyp × cos α", "opp = adj × tan α"],
                },
                {
                  title: "Calculer un angle",
                  variant: "green",
                  lines: ["arcsin, arccos, arctan", "calculatrice en mode DEG"],
                },
                {
                  title: "Valeurs remarquables",
                  variant: "yellow",
                  lines: ["30° : 1/2, √3/2", "45° : √2/2, √2/2", "60° : √3/2, 1/2"],
                },
                {
                  title: "Relations",
                  variant: "yellow",
                  lines: ["sin²α + cos²α = 1", "tan α = sin α / cos α"],
                },
                {
                  title: "Applications",
                  variant: "purple",
                  dashed: true,
                  lines: ["pente : tan α = h/d", "hauteur : h = d × tan α"],
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
