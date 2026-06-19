import type { Fiche } from "@/components/fiche/types";

/**
 * Vecteurs (notion propre au L3 : contenu du programme cycle 4 version 2025,
 * absent du programme 2020 donc absent du M2). Ajoutée uniquement à la liste
 * MATHEMATIQUES_L3. Périmètre cycle 4 2025 : définition et égalité de vecteurs,
 * lien avec la translation, somme et relation de Chasles, produit par un réel et
 * colinéarité, coordonnées, norme et milieu dans un repère. Le produit scalaire
 * et le critère du déterminant relèvent de la Seconde (signalés comme tels).
 */

const OBJECTIFS = [
  { id: "e1", label: "Je définis un vecteur par sa direction, son sens et sa longueur, et je reconnais deux vecteurs égaux" },
  { id: "e2", label: "Je fais le lien entre un vecteur et la translation associée" },
  { id: "e3", label: "Je sais que AB⃗ = DC⃗ équivaut à : ABCD est un parallélogramme" },
  { id: "e4", label: "J'utilise la relation de Chasles pour additionner des vecteurs (AB⃗ + BC⃗ = AC⃗)" },
  { id: "e5", label: "J'utilise la règle du parallélogramme pour construire une somme de vecteurs" },
  { id: "e6", label: "Je connais le produit d'un vecteur par un réel et je reconnais des vecteurs colinéaires" },
  { id: "e7", label: "Je calcule les coordonnées d'un vecteur AB⃗ = (xB − xA ; yB − yA)" },
  { id: "e8", label: "Je calcule la norme d'un vecteur et les coordonnées d'un milieu" },
  { id: "e9", label: "Je rédige une démonstration vectorielle en justifiant par la relation de Chasles ou la colinéarité" },
];

export const ficheVecteurs: Fiche = {
  slug: "vecteurs",
  matiere: "mathematiques",
  numero: 28,
  partie: "Partie 4 : Espace et géométrie plane",
  title: "Vecteurs",
  subtitle:
    "Définition et égalité · lien avec la translation · somme et relation de Chasles · produit par un réel et colinéarité · coordonnées, norme et milieu",
  badges: [
    { label: "★★ Nouveauté du programme 2025", variant: "hot" },
    { label: "Cycle 4 · Programme 2025 · Espace et géométrie", variant: "info" },
  ],
  metaTitle: "Vecteurs (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur les vecteurs : définition et égalité, lien avec la translation, somme et relation de Chasles, règle du parallélogramme, produit par un réel, colinéarité, coordonnées, norme et milieu dans un repère. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                { number: "①", title: "Vecteur et égalité", text: "Direction, sens, longueur ; lien avec la translation et le parallélogramme." },
                { number: "②", title: "Somme et relation de Chasles", text: "Enchaîner des vecteurs et la règle du parallélogramme." },
                { number: "③", title: "Produit par un réel et colinéarité", text: "Agrandir, réduire, inverser un vecteur ; reconnaître des vecteurs colinéaires." },
                { number: "④", title: "Coordonnées, norme, milieu", text: "Calculer dans un repère : coordonnées d'un vecteur, longueur, milieu." },
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
              title: "Une nouveauté du programme 2025",
              text: "Les vecteurs sont un contenu introduit au cycle 4 par le programme 2025 (étudié en 3e) : c'est donc une notion attendue au concours L3, mais absente du M2. Un vecteur décrit un déplacement (une translation) : une direction, un sens et une longueur. La difficulté n'est pas le calcul, c'est la rigueur de notation (le sens compte, l'ordre des lettres aussi) et le bon usage de la relation de Chasles.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Vecteur, égalité et lien avec la translation",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Définition",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "Un vecteur AB⃗ est caractérisé par trois éléments :",
                        "sa **direction** (celle de la droite (AB)), son **sens** (de A vers B),",
                        "et sa **longueur** (la distance AB, aussi appelée norme, notée ‖AB⃗‖).",
                      ],
                      note: "Le vecteur AB⃗ est le vecteur de la translation qui transforme A en B (voir la [fiche N°24](fiche:transformations-du-plan)). BA⃗ a la même direction et la même longueur que AB⃗, mais le sens opposé : BA⃗ = −AB⃗.",
                    },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Égalité de deux vecteurs et parallélogramme",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "Deux vecteurs sont égaux s'ils ont même direction, même sens et même longueur.",
                        "**AB⃗ = DC⃗  ⟺  ABCD est un parallélogramme.**",
                      ],
                      note: "Attention à l'ordre des sommets : pour le parallélogramme ABCD, c'est AB⃗ = DC⃗ (et non AB⃗ = CD⃗). On suit le contour A → B → C → D.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Le vecteur nul 0⃗ (noté AA⃗) a une longueur nulle, pas de direction propre. Deux points A et B sont confondus si et seulement si AB⃗ = 0⃗.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Somme de vecteurs et relation de Chasles",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Les deux façons d'additionner",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "**Relation de Chasles** : AB⃗ + BC⃗ = AC⃗",
                        "(on enchaîne les déplacements ; la lettre d'arrivée du premier",
                        "est la lettre de départ du second).",
                        "**Règle du parallélogramme** : si AB⃗ et AD⃗ partent du même point A,",
                        "leur somme AB⃗ + AD⃗ = AC⃗, où ABCD est un parallélogramme.",
                      ],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "💡 Reconnaître la bonne configuration",
                  text: "Chasles s'utilise quand les vecteurs s'enchaînent (bout à bout) : AB⃗ + BC⃗. La règle du parallélogramme s'utilise quand les vecteurs partent du même point : AB⃗ + AD⃗. Les deux donnent le même type de résultat, on choisit selon la figure.",
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "La relation de Chasles sert aussi à décomposer un vecteur : AC⃗ = AB⃗ + BC⃗ permet d'introduire un point intermédiaire B utile dans une démonstration.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Produit par un réel et colinéarité",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Multiplier un vecteur par un nombre",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "Le vecteur k·u⃗ (k réel) a la même direction que u⃗.",
                        "Si k > 0 : même sens ; si k < 0 : sens opposé.",
                        "Sa longueur est |k| × ‖u⃗‖.",
                      ],
                      note: "Exemples : 2·u⃗ est deux fois plus long, même sens ; −u⃗ a la même longueur, sens opposé.",
                    },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Vecteurs colinéaires",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "Deux vecteurs u⃗ et v⃗ (non nuls) sont **colinéaires**",
                        "s'ils ont la même direction, c'est-à-dire s'il existe un réel k tel que v⃗ = k·u⃗.",
                      ],
                      note: "Conséquences utiles : AB⃗ et AC⃗ colinéaires ⟺ A, B, C alignés ; AB⃗ et CD⃗ colinéaires ⟺ (AB) et (CD) parallèles. C'est le lien des vecteurs avec le parallélisme et l'alignement (voir la [fiche N°22](fiche:theoreme-de-thales-similitude)).",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Coordonnées, norme et milieu dans un repère",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Calculer dans un repère",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "Coordonnées d'un vecteur : **AB⃗ = (xB − xA ; yB − yA)** (arrivée − départ).",
                        "Somme : si u⃗ = (x ; y) et v⃗ = (x' ; y'), alors u⃗ + v⃗ = (x + x' ; y + y').",
                        "Produit : k·u⃗ = (kx ; ky).",
                        "Norme : ‖AB⃗‖ = √((xB − xA)² + (yB − yA)²).",
                        "Milieu de [AB] : I = ((xA + xB)/2 ; (yA + yB)/2).",
                      ],
                      note: "Les coordonnées d'un vecteur ne dépendent pas de sa position, seulement du déplacement. Le repérage du plan est traité dans la [fiche N°17](fiche:reperage-coordonnees).",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "Marqué « Seconde » : le critère de colinéarité par les coordonnées (u⃗ et v⃗ de coordonnées (x ; y) et (x' ; y') sont colinéaires lorsque xy' − x'y = 0) et le produit scalaire relèvent du programme de Seconde, pas du cycle 4. Au L3, on reconnaît la colinéarité par l'existence d'un réel k tel que v⃗ = k·u⃗.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : confondre AB⃗ et BA⃗",
              badge: "Très fréquent",
              faux: "Écrire AB⃗ = BA⃗ parce que c'est « la même droite ».",
              vrai: "AB⃗ et BA⃗ ont la même longueur et la même direction, mais des sens opposés : BA⃗ = −AB⃗.",
              methode: "Le sens fait partie du vecteur : toujours lire l'ordre des lettres (départ → arrivée).",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : mal enchaîner la relation de Chasles",
              badge: "Classique",
              faux: "Écrire AB⃗ + CB⃗ = AC⃗.",
              vrai: "La lettre d'arrivée du premier vecteur doit être la lettre de départ du second : AB⃗ + BC⃗ = AC⃗.",
              methode: "Vérifier que la lettre du milieu se répète et s'élimine (A**B** + **B**C = AC).",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : ordre des sommets du parallélogramme",
              badge: "À surveiller",
              faux: "Conclure « ABCD parallélogramme » à partir de AB⃗ = CD⃗.",
              vrai: "Pour le parallélogramme ABCD, c'est AB⃗ = DC⃗ (contour A → B → C → D). AB⃗ = CD⃗ donnerait un parallélogramme « croisé ».",
              methode: "Suivre le contour dans l'ordre des sommets et comparer des côtés opposés.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : coordonnées calculées à l'envers",
              badge: "Calcul",
              faux: "Calculer AB⃗ = (xA − xB ; yA − yB).",
              vrai: "On fait toujours arrivée moins départ : AB⃗ = (xB − xA ; yB − yA).",
              methode: "Penser « B moins A » dans le même ordre que le nom du vecteur AB⃗.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école : le regard du futur enseignant",
              text: "Les vecteurs ne sont pas enseignés à l'école primaire : ils apparaissent au cycle 4 (3e) avec le programme 2025. Mais l'idée de déplacement est préparée bien avant : au cycle 3, les élèves codent des déplacements sur quadrillage (« avance de 3 cases vers la droite »), ce qui est exactement l'intuition d'un vecteur.\n\nPour le concours L3 : maîtriser la notation (le sens et l'ordre des lettres comptent), la relation de Chasles, le lien égalité de vecteurs / parallélogramme, et le calcul des coordonnées et de la norme dans un repère.\n\nLe vecteur fait le pont entre plusieurs notions déjà vues : la translation (transformation), l'alignement et le parallélisme, et le repérage dans le plan.",
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
              title: "Notation rigoureuse, justification systématique",
              text: "Sur les vecteurs, la moitié des points se gagne à la notation (sens, ordre des lettres) et à la justification (citer Chasles, l'égalité de vecteurs ou la colinéarité). On rédige chaque conclusion.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Montrer qu'un quadrilatère est un parallélogramme",
              intro:
                "**Question type :** « A(0 ; 0), B(3 ; 1), C(5 ; 4), D(2 ; 3). Montrer que ABCD est un parallélogramme. »",
              steps: [
                {
                  number: "1",
                  text: "**Calculer les coordonnées de AB⃗ et DC⃗.**",
                  example: { lines: ["AB⃗ = (3 − 0 ; 1 − 0) = (3 ; 1)", "DC⃗ = (5 − 2 ; 4 − 3) = (3 ; 1)"] },
                },
                {
                  number: "2",
                  text: "**Comparer et conclure.**",
                  example: { lines: ["AB⃗ = DC⃗, donc ABCD est un parallélogramme."] },
                  warn: "⚠️ Comparer AB⃗ et DC⃗ (et non CD⃗) : on suit le contour A → B → C → D.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "E(1 ; 1), F(4 ; 2), G(6 ; 5), H(3 ; 4). EFGH est-il un parallélogramme ?",
              correction: [
                { type: "line", text: "EF⃗ = (3 ; 1) et HG⃗ = (6 − 3 ; 5 − 4) = (3 ; 1). EF⃗ = HG⃗, donc **EFGH est un parallélogramme**." },
                { type: "note", text: "On compare EF⃗ et HG⃗ (côtés opposés dans l'ordre du contour)." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Simplifier une expression avec la relation de Chasles",
              intro:
                "**Question type :** « Simplifier AB⃗ + BC⃗ + CD⃗. »",
              steps: [
                {
                  number: "1",
                  text: "**Enchaîner les vecteurs bout à bout.**",
                  example: { lines: ["AB⃗ + BC⃗ = AC⃗ (les B s'éliminent)"] },
                },
                {
                  number: "2",
                  text: "**Recommencer jusqu'au bout.**",
                  example: { lines: ["AC⃗ + CD⃗ = AD⃗ (les C s'éliminent)"] },
                },
                {
                  number: "💡",
                  text: "**Conclure.**",
                  example: { lines: ["AB⃗ + BC⃗ + CD⃗ = AD⃗"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Simplifier MN⃗ + NP⃗.",
              correction: [
                { type: "line", text: "MN⃗ + NP⃗ = **MP⃗** (la lettre N se répète et s'élimine)." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Montrer que trois points sont alignés",
              intro:
                "**Question type :** « A(1 ; 2), B(3 ; 5), C(7 ; 11). Montrer que A, B, C sont alignés. »",
              steps: [
                {
                  number: "1",
                  text: "**Calculer deux vecteurs partant du même point.**",
                  example: { lines: ["AB⃗ = (2 ; 3) et AC⃗ = (6 ; 9)"] },
                },
                {
                  number: "2",
                  text: "**Chercher un réel k tel que AC⃗ = k·AB⃗.**",
                  example: { lines: ["AC⃗ = (6 ; 9) = 3 × (2 ; 3) = 3·AB⃗"] },
                },
                {
                  number: "3",
                  text: "**Conclure par la colinéarité.**",
                  example: { lines: ["AB⃗ et AC⃗ sont colinéaires, donc A, B, C sont alignés."] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "u⃗ = (2 ; 3) et v⃗ = (6 ; 9). Sont-ils colinéaires ?",
              correction: [
                { type: "line", text: "v⃗ = (6 ; 9) = 3 × (2 ; 3) = 3·u⃗, donc **u⃗ et v⃗ sont colinéaires**." },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Calculer une norme et un milieu",
              intro:
                "**Question type :** « A(1 ; 2), B(5 ; 8). Calculer la longueur AB et les coordonnées du milieu I de [AB]. »",
              steps: [
                {
                  number: "1",
                  text: "**Coordonnées de AB⃗ puis norme.**",
                  example: { lines: ["AB⃗ = (4 ; 6) → ‖AB⃗‖ = √(4² + 6²) = √52 = 2√13 ≈ 7,21"] },
                },
                {
                  number: "2",
                  text: "**Coordonnées du milieu.**",
                  example: { lines: ["I = ((1 + 5)/2 ; (2 + 8)/2) = (3 ; 5)"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "A(0 ; 0), B(3 ; 4). Que vaut ‖AB⃗‖ ?",
              correction: [
                { type: "line", text: "AB⃗ = (3 ; 4) → ‖AB⃗‖ = √(9 + 16) = √25 = **5**." },
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
                  question: "Quels sont les trois éléments qui caractérisent un vecteur ?",
                  options: ["Origine, milieu, extrémité", "Direction, sens, longueur", "Abscisse, ordonnée, cote", "Longueur, largeur, hauteur"],
                  correctIndex: 1,
                  explanation: "Un vecteur est caractérisé par sa direction, son sens et sa longueur (norme).",
                },
                {
                  objectifId: "e1",
                  question: "Que vaut BA⃗ par rapport à AB⃗ ?",
                  options: ["BA⃗ = AB⃗", "BA⃗ = −AB⃗", "BA⃗ = 2·AB⃗", "BA⃗ = 0⃗"],
                  correctIndex: 1,
                  explanation: "BA⃗ a même direction et même longueur que AB⃗, mais le sens opposé : BA⃗ = −AB⃗.",
                },
                {
                  objectifId: "e3",
                  question: "ABCD est un parallélogramme. Quelle égalité est correcte ?",
                  options: ["AB⃗ = CD⃗", "AB⃗ = DC⃗", "AB⃗ = BC⃗", "AC⃗ = BD⃗"],
                  correctIndex: 1,
                  explanation: "Pour le parallélogramme ABCD (contour A → B → C → D), on a AB⃗ = DC⃗.",
                },
                {
                  objectifId: "e4",
                  question: "Que vaut AB⃗ + BC⃗ ?",
                  options: ["AC⃗", "BA⃗", "CB⃗", "0⃗"],
                  correctIndex: 0,
                  explanation: "Relation de Chasles : AB⃗ + BC⃗ = AC⃗ (la lettre B s'élimine).",
                },
                {
                  objectifId: "e4",
                  question: "Simplifier MN⃗ + NP⃗ + PQ⃗.",
                  options: ["MQ⃗", "MP⃗", "NQ⃗", "QM⃗"],
                  correctIndex: 0,
                  explanation: "Par Chasles enchaînée : MN⃗ + NP⃗ + PQ⃗ = MQ⃗.",
                },
                {
                  objectifId: "e6",
                  question: "u⃗ = (2 ; 3) et v⃗ = (6 ; 9). Que peut-on dire ?",
                  options: ["Ils sont égaux", "Ils sont colinéaires (v⃗ = 3·u⃗)", "Ils sont opposés", "Aucun lien"],
                  correctIndex: 1,
                  explanation: "v⃗ = (6 ; 9) = 3 × (2 ; 3) = 3·u⃗ : les vecteurs sont colinéaires.",
                },
                {
                  objectifId: "e7",
                  question: "A(1 ; 2) et B(4 ; 7). Quelles sont les coordonnées de AB⃗ ?",
                  options: ["(5 ; 9)", "(3 ; 5)", "(−3 ; −5)", "(4 ; 7)"],
                  correctIndex: 1,
                  explanation: "AB⃗ = (xB − xA ; yB − yA) = (4 − 1 ; 7 − 2) = (3 ; 5).",
                },
                {
                  objectifId: "e8",
                  question: "AB⃗ = (3 ; 4). Que vaut ‖AB⃗‖ ?",
                  options: ["7", "5", "12", "25"],
                  correctIndex: 1,
                  explanation: "‖AB⃗‖ = √(3² + 4²) = √25 = 5.",
                },
                {
                  objectifId: "e8",
                  question: "A(1 ; 2) et B(5 ; 8). Quelles sont les coordonnées du milieu de [AB] ?",
                  options: ["(6 ; 10)", "(3 ; 5)", "(4 ; 6)", "(2 ; 3)"],
                  correctIndex: 1,
                  explanation: "Milieu = ((1 + 5)/2 ; (2 + 8)/2) = (3 ; 5).",
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
              text: "Soignez la notation (sens, ordre des lettres) et justifiez chaque conclusion (Chasles, égalité de vecteurs, colinéarité). Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Notation et coordonnées",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : coordonnées, norme, opposé",
              objectifTag: "Calcul de base",
              enonce: "Dans un repère, A(2 ; 1), B(5 ; 5).",
              question: "a) Calculer les coordonnées de AB⃗.\nb) Calculer ‖AB⃗‖.\nc) Donner les coordonnées de BA⃗.",
              correction: [
                { type: "line", label: "a)", text: "AB⃗ = (5 − 2 ; 5 − 1) = (3 ; 4)." },
                { type: "line", label: "b)", text: "‖AB⃗‖ = √(3² + 4²) = √25 = 5." },
                { type: "line", label: "c)", text: "BA⃗ = −AB⃗ = (−3 ; −4)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : relation de Chasles",
              objectifTag: "Simplification",
              question: "Simplifier les expressions suivantes :\na) AB⃗ + BC⃗\nb) RS⃗ + ST⃗ + TU⃗\nc) AB⃗ + BA⃗",
              correction: [
                { type: "line", label: "a)", text: "AB⃗ + BC⃗ = AC⃗." },
                { type: "line", label: "b)", text: "RS⃗ + ST⃗ + TU⃗ = RU⃗." },
                { type: "line", label: "c)", text: "AB⃗ + BA⃗ = AA⃗ = 0⃗ (vecteur nul)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : parallélogramme et alignement",
              sub: "Démontrer avec des vecteurs",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : parallélogramme",
              objectifTag: "Égalité de vecteurs",
              enonce: "A(−1 ; 0), B(2 ; 1), C(3 ; 4), D(0 ; 3).",
              question: "Montrer que ABCD est un parallélogramme.",
              correction: [
                { type: "line", text: "AB⃗ = (2 − (−1) ; 1 − 0) = (3 ; 1)." },
                { type: "line", text: "DC⃗ = (3 − 0 ; 4 − 3) = (3 ; 1)." },
                { type: "line", text: "AB⃗ = DC⃗, donc ABCD est un parallélogramme." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : alignement",
              objectifTag: "Colinéarité",
              enonce: "A(1 ; 1), B(3 ; 2), C(7 ; 4).",
              question: "Les points A, B, C sont-ils alignés ? Justifier.",
              correction: [
                { type: "line", text: "AB⃗ = (2 ; 1) et AC⃗ = (6 ; 3)." },
                { type: "line", text: "AC⃗ = (6 ; 3) = 3 × (2 ; 1) = 3·AB⃗ : les vecteurs sont colinéaires." },
                { type: "line", text: "Donc A, B, C sont alignés." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : combiner les outils",
              sub: "Milieu, parallélisme, construction",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : milieu et parallélisme",
              objectifTag: "Synthèse",
              enonce: "A(0 ; 0), B(4 ; 2), C(6 ; 6), D(2 ; 4). I est le milieu de [AC] et J le milieu de [BD].",
              question: "a) Calculer les coordonnées de I et J.\nb) Que peut-on en déduire pour ABCD ?\nc) Vérifier en comparant AB⃗ et DC⃗.",
              correction: [
                { type: "line", label: "a)", text: "I = ((0 + 6)/2 ; (0 + 6)/2) = (3 ; 3). J = ((4 + 2)/2 ; (2 + 4)/2) = (3 ; 3)." },
                { type: "line", label: "b)", text: "I = J : les diagonales [AC] et [BD] ont le même milieu, donc ABCD est un parallélogramme." },
                { type: "line", label: "c)", text: "AB⃗ = (4 ; 2) et DC⃗ = (6 − 2 ; 6 − 4) = (4 ; 2) : AB⃗ = DC⃗, cohérent." },
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
              text: "Cet exercice reproduit le format d'un sujet de concours : il combine coordonnées, parallélogramme, colinéarité et relation de Chasles. Comptez environ 20 minutes, en conditions réelles.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 4 : le repère du quadrillage",
              objectifTag: "Vecteurs, synthèse",
              enonce:
                "Dans un repère, on donne A(1 ; 1), B(4 ; 2), C(5 ; 5) et D(2 ; 4).",
              question:
                "1.1 Calculer les coordonnées de AB⃗ et DC⃗.\n1.2 En déduire la nature du quadrilatère ABCD.\n1.3 Calculer les coordonnées du point E tel que AE⃗ = 2·AB⃗.\n2.1 Calculer ‖AB⃗‖ et ‖BC⃗‖.\n2.2 Le quadrilatère ABCD est-il un losange ? Justifier.",
              correction: [
                { type: "line", label: "1.1", text: "AB⃗ = (3 ; 1) ; DC⃗ = (5 − 2 ; 5 − 4) = (3 ; 1)." },
                { type: "line", label: "1.2", text: "AB⃗ = DC⃗, donc ABCD est un parallélogramme." },
                { type: "line", label: "1.3", text: "AE⃗ = 2·AB⃗ = (6 ; 2). Donc E = A + (6 ; 2) = (1 + 6 ; 1 + 2) = (7 ; 3)." },
                { type: "line", label: "2.1", text: "‖AB⃗‖ = √(3² + 1²) = √10. BC⃗ = (1 ; 3), ‖BC⃗‖ = √(1² + 3²) = √10." },
                { type: "line", label: "2.2", text: "ABCD est un parallélogramme dont deux côtés consécutifs ont la même longueur (√10) : c'est un losange." },
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
              title: "Erreur type · Exercice 5 : coordonnées à l'envers",
              objectifTag: "Coordonnées d'un vecteur",
              enonce: "**Copie d'un candidat :** A(2 ; 5), B(6 ; 1).\n*Réponse produite :* « AB⃗ = (2 − 6 ; 5 − 1) = (−4 ; 4). »",
              question: "a) Identifier l'erreur.\nb) Donner les bonnes coordonnées.",
              correction: [
                { type: "paragraph", text: "**Erreur : le candidat a calculé départ − arrivée.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "On calcule arrivée − départ, dans l'ordre du nom AB⃗." },
                    { text: "AB⃗ = (xB − xA ; yB − yA) = (6 − 2 ; 1 − 5) = (4 ; −4)." },
                    { text: "Le candidat avait en fait calculé BA⃗." },
                  ],
                },
                { type: "note", text: "Penser « B moins A » pour AB⃗." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 6 : Chasles mal enchaînée",
              objectifTag: "Relation de Chasles",
              enonce: "**Copie d'un candidat :** « AB⃗ + CB⃗ = AC⃗. »",
              question: "a) Identifier l'erreur.\nb) Corriger.",
              correction: [
                { type: "paragraph", text: "**Erreur : la lettre intermédiaire ne se répète pas correctement.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Dans AB⃗ + CB⃗, l'arrivée du premier (B) n'est pas le départ du second (C)." },
                    { text: "La relation correcte est AB⃗ + BC⃗ = AC⃗." },
                    { text: "Astuce : CB⃗ = −BC⃗, donc AB⃗ + CB⃗ = AB⃗ − BC⃗, ce qui n'est pas AC⃗." },
                  ],
                },
                { type: "note", text: "La lettre du milieu doit se répéter : A**B** + **B**C = AC." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 7 : parallélogramme mal orienté",
              objectifTag: "Égalité de vecteurs",
              enonce: "**Copie d'un candidat :** « AB⃗ = CD⃗, donc ABCD est un parallélogramme. »",
              question: "a) Identifier l'erreur.\nb) Donner la condition correcte.",
              correction: [
                { type: "paragraph", text: "**Erreur : mauvais couple de côtés opposés.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "AB⃗ = CD⃗ donnerait un quadrilatère « croisé », pas un parallélogramme." },
                    { text: "La condition est AB⃗ = DC⃗ (contour A → B → C → D)." },
                    { text: "On peut aussi vérifier que les diagonales [AC] et [BD] ont le même milieu." },
                  ],
                },
                { type: "note", text: "Suivre l'ordre des sommets du contour pour comparer les bons côtés." },
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
                  question: "Qu'est-ce qui caractérise un vecteur ? Que vaut BA⃗ ?",
                  answer:
                    "Un vecteur AB⃗ est défini par sa direction, son sens et sa longueur (norme ‖AB⃗‖). BA⃗ a même direction et même longueur que AB⃗ mais le sens opposé : BA⃗ = −AB⃗.",
                  astuce: "Le sens fait partie du vecteur : l'ordre des lettres compte.",
                },
                {
                  question: "Quel est le lien entre un vecteur et une translation ?",
                  answer:
                    "Le vecteur AB⃗ est le vecteur de la translation qui transforme A en B. Deux vecteurs égaux décrivent la même translation (voir la fiche Transformations).",
                },
                {
                  question: "À quelle condition ABCD est-il un parallélogramme ?",
                  answer:
                    "ABCD est un parallélogramme si et seulement si AB⃗ = DC⃗ (en suivant le contour A → B → C → D). On peut aussi dire que les diagonales [AC] et [BD] ont le même milieu.",
                  astuce: "Attention : c'est AB⃗ = DC⃗, pas AB⃗ = CD⃗.",
                },
                {
                  question: "Énoncer la relation de Chasles.",
                  answer:
                    "AB⃗ + BC⃗ = AC⃗ : on enchaîne les déplacements, la lettre d'arrivée du premier vecteur étant la lettre de départ du second. Elle sert à additionner ou à décomposer un vecteur.",
                },
                {
                  question: "Qu'est-ce que la règle du parallélogramme ?",
                  answer:
                    "Si AB⃗ et AD⃗ partent du même point A, leur somme est AB⃗ + AD⃗ = AC⃗, où ABCD est un parallélogramme. C'est l'autre façon d'additionner deux vecteurs.",
                },
                {
                  question: "Que sont des vecteurs colinéaires ?",
                  answer:
                    "Deux vecteurs non nuls u⃗ et v⃗ sont colinéaires s'ils ont la même direction, c'est-à-dire s'il existe un réel k tel que v⃗ = k·u⃗. AB⃗ et AC⃗ colinéaires ⟺ A, B, C alignés.",
                },
                {
                  question: "Coordonnées d'un vecteur, somme et produit par un réel ?",
                  answer:
                    "AB⃗ = (xB − xA ; yB − yA). Pour u⃗ = (x ; y) et v⃗ = (x' ; y') : u⃗ + v⃗ = (x + x' ; y + y') et k·u⃗ = (kx ; ky).",
                  astuce: "Toujours arrivée − départ, dans l'ordre du nom du vecteur.",
                },
                {
                  question: "Norme d'un vecteur et coordonnées d'un milieu ?",
                  answer:
                    "‖AB⃗‖ = √((xB − xA)² + (yB − yA)²). Milieu de [AB] : I = ((xA + xB)/2 ; (yA + yB)/2).",
                },
                {
                  question: "Comment montrer que trois points A, B, C sont alignés ?",
                  answer:
                    "On calcule AB⃗ et AC⃗, puis on cherche un réel k tel que AC⃗ = k·AB⃗. Si on le trouve, les vecteurs sont colinéaires, donc A, B, C sont alignés.",
                },
                {
                  question: "Quel contenu sur les vecteurs relève de la Seconde (pas du cycle 4) ?",
                  answer:
                    "Le critère de colinéarité par le déterminant (xy' − x'y = 0) et le produit scalaire relèvent de la Seconde. Au cycle 4, la colinéarité se reconnaît par l'existence d'un réel k tel que v⃗ = k·u⃗.",
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
              center: { title: "Vecteurs", subtitle: "direction · sens · longueur" },
              branches: [
                {
                  title: "Vecteur et égalité",
                  variant: "blue",
                  lines: ["BA⃗ = −AB⃗", "AB⃗ = DC⃗ ⟺ ABCD parallélogramme"],
                },
                {
                  title: "Translation",
                  variant: "blue",
                  lines: ["vecteur d'une translation", "lien fiche Transformations"],
                },
                {
                  title: "Somme",
                  variant: "green",
                  lines: ["Chasles : AB⃗ + BC⃗ = AC⃗", "règle du parallélogramme"],
                },
                {
                  title: "Produit, colinéarité",
                  variant: "yellow",
                  lines: ["k·u⃗ : longueur |k|·‖u⃗‖", "colinéaires ⟺ v⃗ = k·u⃗"],
                },
                {
                  title: "Coordonnées",
                  variant: "yellow",
                  lines: ["AB⃗ = (xB − xA ; yB − yA)", "‖AB⃗‖ = √(x² + y²)"],
                },
                {
                  title: "Milieu",
                  variant: "purple",
                  dashed: true,
                  lines: ["I = ((xA + xB)/2 ; (yA + yB)/2)"],
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
