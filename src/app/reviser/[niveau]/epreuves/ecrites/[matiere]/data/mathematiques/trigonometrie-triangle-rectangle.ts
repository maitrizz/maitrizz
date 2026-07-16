import type { Fiche } from "@/components/fiche/types";
import { COPIES_TRIGONOMETRIE_TRIANGLE_RECTANGLE } from "./copies-trigonometrie-triangle-rectangle";
import { EXERCICES_TRIGONOMETRIE_TRIANGLE_RECTANGLE } from "./exercices-trigonometrie-triangle-rectangle";

export const SAVOIR_FAIRE = [
  { id: "definitions", label: "Identifier les côtés (SOH-CAH-TOA)" },
  { id: "calcul-longueur", label: "Calculer une longueur" },
  { id: "calcul-angle", label: "Calculer un angle (arcsin/arccos/arctan)" },
  { id: "valeurs-remarquables", label: "Valeurs remarquables et identités" },
  { id: "hauteur-pente", label: "Hauteur inaccessible et pente" },
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
              title: "La trigonométrie complète Pythagore",
              text: "Là où Pythagore calcule une longueur à partir de deux côtés, la trigonométrie calcule une longueur ou un angle à partir d'un côté et d'un angle. C'est l'outil des pentes, des hauteurs inaccessibles et de tous les problèmes où l'angle d'inclinaison est donné. La difficulté n'est pas le calcul : c'est de toujours rapporter sin, cos et tan à l'angle de référence, et de ne pas confondre côté adjacent et côté opposé selon l'angle choisi. Elle prolonge le théorème de Pythagore ([fiche N°21](fiche:theoreme-de-pythagore)), qui reste l'outil de vérification, et se relie aux pourcentages via la pente ([fiche N°13](fiche:proportionnalite-pourcentages)).",
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
                  number: "3",
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
              title: "Trigonométrie dans le triangle rectangle",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_TRIGONOMETRIE_TRIANGLE_RECTANGLE,
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
              title: "Trigonométrie dans le triangle rectangle",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_TRIGONOMETRIE_TRIANGLE_RECTANGLE,
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
      ],
    },
  ],
};
