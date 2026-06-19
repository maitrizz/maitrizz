import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je définis la symétrie axiale (l'axe est la médiatrice de [MM']) et je construis l'image d'un point" },
  { id: "e2", label: "Je définis la symétrie centrale (O milieu de [MM']) et je calcule les coordonnées de l'image" },
  { id: "e3", label: "Je définis la translation (MM' = v⃗) et je calcule l'image par les coordonnées" },
  { id: "e4", label: "Je connais la définition de la rotation et ses cas particuliers (180° donne la symétrie centrale)" },
  { id: "e5", label: "Je connais l'homothétie et ses effets : longueurs ×|k|, aires ×k², angles conservés" },
  { id: "e6", label: "Je sais que la symétrie axiale est la seule isométrie qui inverse l'orientation" },
  { id: "e7", label: "Je connais les axes et centres de symétrie des figures courantes (rectangle, losange, carré, cercle)" },
  { id: "e8", label: "Je sais que tout parallélogramme admet un centre de symétrie (mais pas toujours d'axe)" },
  { id: "e9", label: "Je sais identifier une transformation à partir d'une figure et de son image (vecteurs, invariants)" },
];

export const ficheTransformationsDuPlan: Fiche = {
  slug: "transformations-du-plan",
  matiere: "mathematiques",
  numero: 24,
  partie: "Partie 4 : Espace et géométrie plane",
  title: "Transformations du plan",
  subtitle:
    "Symétrie axiale · symétrie centrale · translation · rotation · homothétie · conservation des distances et des angles · axes et centres de symétrie · frises et pavages",
  badges: [
    { label: "★★★ Quasiment chaque sujet", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème D", variant: "info" },
  ],
  metaTitle: "Transformations du plan (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur les transformations du plan : symétrie axiale, symétrie centrale, translation, rotation et homothétie, propriétés conservées, axes et centres de symétrie, frises et pavages. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                { number: "①", title: "Les isométries", text: "Symétrie axiale, symétrie centrale, translation et rotation : elles conservent les distances." },
                { number: "②", title: "L'homothétie", text: "Agrandir ou réduire depuis un centre : longueurs ×|k|, aires ×k², angles conservés." },
                { number: "③", title: "Ce qui est conservé", text: "Le tableau des propriétés et la seule transformation qui inverse l'orientation." },
                { number: "④", title: "Axes, centres, frises et pavages", text: "Symétries des figures usuelles et transformations qui répètent un motif." },
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
              title: "Construire, reconnaître, raisonner",
              text: "Les transformations sont omniprésentes au CRPE : construire l'image d'un point ou d'une figure, identifier les axes de symétrie d'une figure, reconnaître une frise ou un pavage. La vraie difficulté est conceptuelle : distinguer les transformations qui conservent les distances (les isométries) de celle qui ne les conserve pas (l'homothétie), et savoir quelle propriété est conservée dans chaque cas.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Symétrie axiale : la réflexion par rapport à un axe",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Définition et propriétés",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "M' est le symétrique de M par rapport à l'axe d",
                        "si et seulement si **d est la médiatrice de [MM']**.",
                        "Autrement dit : d ⊥ (MM') et d coupe [MM'] en son milieu.",
                      ],
                      note: "Conservation : distances, angles, aires. L'orientation est inversée (c'est la seule isométrie inversante).",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Axes de symétrie des figures courantes",
                  text: "Segment : 2 axes (la médiatrice et la droite qui le porte). Triangle isocèle : 1 axe. Triangle équilatéral : 3 axes. Rectangle : 2 axes (les médianes parallèles aux côtés). Losange : 2 axes (les diagonales). Carré : 4 axes (2 médianes + 2 diagonales). Cercle : une infinité d'axes (tout diamètre).",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Symétrie centrale : la réflexion par rapport à un point",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Définition et coordonnées",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "M' est le symétrique de M par rapport au point O",
                        "si **O est le milieu de [MM']**.",
                        "Coordonnées : si O = (a, b) et M = (x, y), alors M' = (2a − x, 2b − y).",
                      ],
                      note: "Conservation : distances, angles, aires et orientation (contrairement à la symétrie axiale). C'est aussi une rotation d'angle 180°.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Centres de symétrie et lien avec le parallélogramme",
                  text: "Parallélogramme, rectangle, losange, carré : 1 centre (l'intersection des diagonales). Cercle : 1 centre. Un triangle (même équilatéral) n'a pas de centre de symétrie. Propriété clé : un quadrilatère est un parallélogramme si et seulement si il admet un centre de symétrie.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Translation et rotation",
              blocks: [
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Translation de vecteur v⃗",
                      variant: "info",
                      lines: [
                        "M' image de M si MM'⃗ = v⃗.",
                        "Coordonnées : v⃗ = (a, b) donne M(x, y) → M'(x + a, y + b).",
                        "Conserve distances, angles, aires, orientation.",
                      ],
                    },
                    {
                      title: "Rotation de centre O et d'angle α",
                      variant: "info",
                      lines: [
                        "M' tel que OM = OM' et l'angle (OM⃗, OM'⃗) = α.",
                        "Conserve distances, angles, aires, orientation.",
                        "α = 180° donne la symétrie centrale ; α = 360° l'identité.",
                      ],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Conséquence de la translation : pour deux points M et N, les segments [MM'] et [NN'] sont parallèles et de même longueur, donc MNN'M' est un parallélogramme.",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Homothétie : agrandir ou réduire depuis un centre",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Définition et effets",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "M' image de M par l'homothétie de centre O et de rapport k si **OM'⃗ = k × OM⃗**.",
                        "Conservé : angles, forme, orientation (si k > 0).",
                        "Non conservé : longueurs (×|k|), aires (×k²).",
                      ],
                      note: "Cas particuliers : k = 1 donne l'identité, k = −1 la symétrie centrale de centre O, k = 2 un agrandissement de rapport 2. Le lien avec Thalès et la similitude est détaillé dans la [fiche N°22](fiche:theoreme-de-thales-similitude).",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "L'homothétie (sauf si |k| = 1) n'est PAS une isométrie : elle change les longueurs. Mais elle conserve les angles, donc la figure image est semblable à la figure de départ.",
                },
              ],
            },
            {
              type: "subsection",
              number: "⑤",
              title: "Ce qui est conservé, frises et pavages",
              blocks: [
                {
                  type: "table",
                  headers: ["Transformation", "Distances", "Aires", "Orientation"],
                  rows: [
                    ["Symétrie axiale", "conservées", "conservées", "inversée"],
                    ["Symétrie centrale", "conservées", "conservées", "conservée"],
                    ["Translation", "conservées", "conservées", "conservée"],
                    ["Rotation", "conservées", "conservées", "conservée"],
                    ["Homothétie (k ≠ ±1)", "× |k|", "× k²", "conservée (k > 0)"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Les quatre premières sont des isométries (elles conservent les distances). L'homothétie n'en est une que si |k| = 1. Les angles sont conservés par toutes ces transformations.",
                },
                {
                  type: "paragraph",
                  text: "Une frise est un motif répété dans une seule direction (comme une bordure), classée selon les symétries qu'elle possède (il en existe 7 types). Un pavage remplit le plan dans deux directions sans trou ni chevauchement. Les transformations qui génèrent un pavage sont toujours des isométries : translations, rotations, symétries.",
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "💡 Composition de transformations",
                  text: "La composée de deux symétries axiales d'axes parallèles est une translation ; d'axes sécants, une rotation. La composée de deux symétries centrales est une translation.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : prendre les diagonales d'un rectangle pour des axes",
              badge: "Très fréquent",
              faux: "Un rectangle a 4 axes de symétrie : les 2 diagonales et les 2 médianes.",
              vrai: "Un rectangle non carré a 2 axes (les médianes parallèles aux côtés). Les diagonales ne sont pas des axes.",
              methode: "Les diagonales ne sont axes de symétrie que pour le losange et le carré (diagonales perpendiculaires aux côtés).",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : croire que la symétrie axiale conserve l'orientation",
              badge: "Conceptuel",
              faux: "Après une symétrie axiale, un triangle ABC dans le sens antihoraire reste antihoraire.",
              vrai: "La symétrie axiale inverse l'orientation : l'image devient horaire. C'est la seule isométrie inversante.",
              methode: "Penser au miroir : il retourne l'image. Translation, rotation et symétrie centrale conservent l'orientation.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : confondre symétrie axiale et symétrie centrale",
              badge: "Classique",
              faux: "Identifier une transformation sur un seul point (par exemple A(1,3) → A'(1,−3)).",
              vrai: "Un seul point ne suffit pas : ici la symétrie d'axe y = 0 et la symétrie de centre (1, 0) coïncident. Il faut tester d'autres points.",
              methode: "Toujours vérifier la transformation sur plusieurs points avant de conclure.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : croire qu'une homothétie change les angles",
              badge: "Subtile",
              faux: "Après une homothétie de rapport 3, les angles sont multipliés par 3 comme les longueurs.",
              vrai: "Une homothétie conserve les angles. Seules les longueurs sont multipliées par |k| et les aires par k².",
              methode: "Homothétie : longueurs ×k, aires ×k², angles inchangés. La figure image est semblable.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école : le regard du futur enseignant",
              text: "Au cycle 2 (CP-CE2), les élèves reconnaissent des axes de symétrie dans des figures simples, plient une feuille pour vérifier une symétrie, et reproduisent des figures symétriques sur papier quadrillé : la symétrie est intuitive, « la figure se replie sur elle-même ».\n\nAu cycle 3 (CM1-6e), la symétrie axiale, la symétrie centrale et la translation sont au programme. Les élèves construisent les images de figures, identifient axes et centres des polygones usuels, et étudient les frises. La rotation et l'homothétie apparaissent ensuite au cycle 4.\n\nCe qu'il faut maîtriser pour le CRPE : construire l'image d'un point ou d'une figure par chaque transformation, connaître le tableau des propriétés conservées, et identifier les symétries d'une figure ou d'un pavage. La distinction isométrie / non-isométrie est discriminante.",
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
              title: "Construire avec rigueur, identifier avec méthode",
              text: "Pour construire : appliquer la définition (médiatrice, milieu, vecteur, distance et angle). Pour identifier : mesurer, comparer l'orientation, repérer les points fixes.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Construire le symétrique d'un point par rapport à un axe",
              intro:
                "**Question type :** « Construire M', le symétrique de M par rapport à la droite d. »",
              steps: [
                {
                  number: "1",
                  text: "**Tracer la perpendiculaire à d passant par M.**",
                  example: { lines: ["À l'équerre ou au compas"] },
                },
                {
                  number: "2",
                  text: "**Repérer l'intersection I avec l'axe.**",
                  example: { lines: ["I sera le milieu de [MM']"] },
                },
                {
                  number: "3",
                  text: "**Reporter MI de l'autre côté de l'axe et vérifier.**",
                  example: { lines: ["MI = IM' → [MM'] ⊥ d et I = milieu de [MM'] sur d"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Quelle propriété caractérise l'axe d dans la symétrie axiale qui envoie M sur M' ?",
              correction: [
                { type: "line", text: "d est la **médiatrice de [MM']** : perpendiculaire à [MM'] et passant par son milieu." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Symétrie centrale : construire et calculer",
              intro:
                "**Question type :** « Construire M', symétrique de M par rapport à O, et donner ses coordonnées si O = (3, 1) et M = (5, 4). »",
              steps: [
                {
                  number: "1",
                  text: "**Tracer la droite (OM) et reporter OM de l'autre côté de O.**",
                  example: { lines: ["O est le milieu de [MM'], donc OM' = OM"] },
                },
                {
                  number: "2",
                  text: "**Appliquer la formule des coordonnées.**",
                  example: { lines: ["M' = (2a − x, 2b − y) = (2×3 − 5, 2×1 − 4) = (1, −2)"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "O = (1, 2) et M = (4, 3). Quelles sont les coordonnées de M', symétrique de M par rapport à O ?",
              correction: [
                { type: "line", text: "M' = (2×1 − 4, 2×2 − 3) = **(−2, 1)**. Vérif. : milieu de [MM'] = (1, 2) = O ✓." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Construire l'image par une translation",
              intro:
                "**Question type :** « Image du triangle ABC par la translation de vecteur v⃗ = (3 ; −2). »",
              steps: [
                {
                  number: "1",
                  text: "**Appliquer le vecteur à chaque sommet.**",
                  example: { lines: ["M(x, y) → M'(x + 3, y − 2)"] },
                },
                {
                  number: "2",
                  text: "**Calculer chaque image.**",
                  example: { lines: ["A(1, 4) → A'(4, 2) · B(3, 6) → B'(6, 4) · C(0, 2) → C'(3, 0)"] },
                },
                {
                  number: "3",
                  text: "**Vérifier : AA', BB', CC' égaux au vecteur v⃗.**",
                  example: { lines: ["Mêmes direction, sens et longueur"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Image de M(2, −1) par la translation de vecteur v⃗ = (−2, 5) ?",
              correction: [
                { type: "line", text: "M'(2 + (−2), −1 + 5) = **(0, 4)**." },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Identifier la transformation à partir d'une figure et de son image",
              intro:
                "**Question type :** « F' est l'image de F. Identifier la transformation. »",
              steps: [
                {
                  number: "1",
                  text: "**Isométrie ou non ?**",
                  example: { lines: ["Distances égales → isométrie · multipliées par un facteur → homothétie"] },
                },
                {
                  number: "2",
                  text: "**Regarder l'orientation.**",
                  example: { lines: ["Inversée → symétrie axiale · conservée → centrale, translation ou rotation"] },
                },
                {
                  number: "3",
                  text: "**Distinguer par les points fixes et les vecteurs.**",
                  example: { lines: ["Aucun point fixe + vecteurs AA' égaux → translation", "Un point fixe → rotation ou symétrie centrale", "Une droite fixe → symétrie axiale"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Une figure et son image sont isométriques, sans point fixe, et tous les vecteurs AA' sont égaux. Quelle transformation ?",
              correction: [
                { type: "line", text: "Une **translation** (de vecteur AA')." },
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
                  question: "Qu'est-ce qui caractérise l'axe d dans la symétrie qui envoie M sur M' ?",
                  options: ["d passe par M", "d est la médiatrice de [MM']", "d est parallèle à [MM']", "d est le milieu de [MM']"],
                  correctIndex: 1,
                  explanation: "M' est le symétrique de M par rapport à d si et seulement si d est la médiatrice de [MM'].",
                },
                {
                  objectifId: "e2",
                  question: "O = (3, 1), M = (5, 4). Quel est le symétrique de M par rapport à O ?",
                  options: ["(1, −2)", "(8, 5)", "(4, 2,5)", "(−5, −4)"],
                  correctIndex: 0,
                  explanation: "M' = (2×3 − 5, 2×1 − 4) = (1, −2).",
                },
                {
                  objectifId: "e3",
                  question: "Image de M(1, 4) par la translation de vecteur v⃗ = (3, −2) ?",
                  options: ["(4, 6)", "(3, −8)", "(4, 2)", "(−2, 6)"],
                  correctIndex: 2,
                  explanation: "M'(1 + 3, 4 − 2) = (4, 2).",
                },
                {
                  objectifId: "e4",
                  question: "Une rotation d'angle 180° est équivalente à :",
                  options: ["une translation", "une symétrie axiale", "une symétrie centrale", "l'identité"],
                  correctIndex: 2,
                  explanation: "La rotation de centre O et d'angle 180° est la symétrie centrale de centre O.",
                },
                {
                  objectifId: "e5",
                  question: "On applique une homothétie de rapport 3 à un triangle. Comment varient ses angles ?",
                  options: ["Ils sont multipliés par 3", "Ils sont multipliés par 9", "Ils restent inchangés", "Ils sont divisés par 3"],
                  correctIndex: 2,
                  explanation: "L'homothétie conserve les angles. Seules les longueurs (×3) et les aires (×9) changent.",
                },
                {
                  objectifId: "e6",
                  question: "Quelle est la seule isométrie qui inverse l'orientation ?",
                  options: ["La translation", "La rotation", "La symétrie centrale", "La symétrie axiale"],
                  correctIndex: 3,
                  explanation: "La symétrie axiale est la seule isométrie inversante (comme un miroir).",
                },
                {
                  objectifId: "e7",
                  question: "Combien d'axes de symétrie possède un rectangle non carré ?",
                  options: ["4", "2", "1", "0"],
                  correctIndex: 1,
                  explanation: "2 axes : les médianes parallèles aux côtés. Les diagonales ne sont pas des axes.",
                },
                {
                  objectifId: "e8",
                  question: "Quelle propriété caractérise un parallélogramme parmi les quadrilatères ?",
                  options: ["Il a un axe de symétrie", "Il a un centre de symétrie", "Il a 4 axes de symétrie", "Il n'a aucune symétrie"],
                  correctIndex: 1,
                  explanation: "Un quadrilatère est un parallélogramme si et seulement si il admet un centre de symétrie (l'intersection des diagonales).",
                },
                {
                  objectifId: "e9",
                  question: "Une figure et son image sont isométriques avec l'orientation inversée. Quelle transformation ?",
                  options: ["Translation", "Rotation", "Symétrie axiale", "Homothétie"],
                  correctIndex: 2,
                  explanation: "Orientation inversée et distances conservées : c'est une symétrie axiale.",
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
              text: "Identifiez la transformation, appliquez la définition rigoureusement, puis vérifiez que les propriétés attendues sont bien conservées. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Axes, centres et coordonnées",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : axes et centres de symétrie",
              objectifTag: "Symétries des figures",
              question:
                "a) Combien d'axes de symétrie possède un rectangle non carré ? Les décrire.\nb) Un triangle isocèle non équilatéral a-t-il un centre de symétrie ?\nc) Un parallélogramme non rectangle a-t-il des axes ? Un centre ?",
              correction: [
                { type: "line", label: "a)", text: "2 axes : les deux médianes parallèles aux côtés. Les diagonales ne sont pas des axes." },
                { type: "line", label: "b)", text: "Non. Le sommet opposé à la base n'aurait pas de symétrique dans la figure." },
                { type: "line", label: "c)", text: "Aucun axe, mais un centre de symétrie : l'intersection des diagonales (propriété du parallélogramme)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : coordonnées et transformations",
              objectifTag: "Calcul d'images",
              enonce: "Dans un repère : M(4, 3), centre O(1, 2), vecteur v⃗ = (−2, 5).",
              question: "a) Coordonnées de M', symétrique de M par rapport à O.\nb) Coordonnées de M'', image de M par la translation de vecteur v⃗.",
              correction: [
                { type: "line", label: "a)", text: "M'(2×1 − 4, 2×2 − 3) = (−2, 1). Vérif. : milieu de [MM'] = (1, 2) = O ✓." },
                { type: "line", label: "b)", text: "M''(4 − 2, 3 + 5) = (2, 8)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : propriétés et identification",
              sub: "Raisonner sur la conservation",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : symétrie centrale et parallélogramme",
              objectifTag: "Démonstration",
              enonce: "ABCD est un parallélogramme. O est l'intersection de ses diagonales.",
              question: "a) Montrer que B est le symétrique de D par rapport à O.\nb) En déduire que A est le symétrique de C par rapport à O.",
              correction: [
                { type: "line", label: "a)", text: "Les diagonales d'un parallélogramme se coupent en leur milieu, donc O est le milieu de [BD] : B et D sont symétriques par rapport à O." },
                { type: "line", label: "b)", text: "De même, O est le milieu de [AC], donc A et C sont symétriques par rapport à O." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : identifier la transformation",
              objectifTag: "Vecteurs et invariants",
              enonce: "Le triangle T' de sommets A'(3,5), B'(6,3), C'(5,7) est l'image du triangle T de sommets A(1,1), B(4,−1), C(3,3).",
              question: "a) Vérifier que c'est une isométrie en comparant AB et A'B'.\nb) Calculer les vecteurs AA', BB', CC'.\nc) Identifier la transformation.",
              correction: [
                { type: "line", label: "a)", text: "AB = √(3² + (−2)²) = √13 et A'B' = √(3² + (−2)²) = √13 : longueurs égales, c'est une isométrie." },
                { type: "line", label: "b)", text: "AA' = (2, 4), BB' = (2, 4), CC' = (2, 4)." },
                { type: "line", label: "c)", text: "Tous les vecteurs sont égaux : c'est la translation de vecteur (2, 4)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : problème contextualisé",
              sub: "Symétrie et aire",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : le jardin symétrique",
              objectifTag: "Symétrie axiale, aire",
              enonce: "Une moitié de jardin est un triangle A(0,0), B(6,0), C(3,4) (en mètres). L'autre moitié est son symétrique par rapport à l'axe d'équation x = 5.",
              question: "a) Calculer les coordonnées de A', B', C', symétriques par rapport à x = 5.\nb) L'axe x = 5 est-il un axe de symétrie du jardin complet ?\nc) La surface totale vaut-elle le double de celle de ABC ?",
              correction: [
                { type: "line", label: "a)", text: "Pour M(x, y), M'(10 − x, y) : A'(10, 0), B'(4, 0), C'(7, 4)." },
                { type: "line", label: "b)", text: "Oui : le jardin complet est sa propre image par cette symétrie, donc x = 5 en est un axe de symétrie." },
                { type: "line", label: "c)", text: "Oui : la symétrie axiale conserve les aires et les deux triangles ne se chevauchent pas. Aire(ABC) = ½ × 6 × 4 = 12 m², donc surface totale = 24 m²." },
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
              text: "Cet exercice reproduit le format d'un sujet de concours : il combine nature d'un quadrilatère, symétries et pavage par translations. Comptez environ 25 minutes, en conditions réelles.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 4 : le carrelage de la salle de classe",
              objectifTag: "Quadrilatère, symétries, pavage",
              enonce:
                "Une enseignante crée un pavage décoratif à partir d'un motif de base : le quadrilatère ABCD avec A(0,0), B(2,0), C(3,2), D(1,2). Elle génère le pavage en translatant le motif.",
              question:
                "1.1 Identifier la nature de ABCD à l'aide des vecteurs AB⃗ et DC⃗.\n1.2 ABCD a-t-il un axe de symétrie ? Un centre de symétrie ?\n2.1 Calculer les coordonnées du motif translaté de vecteur v⃗₁ = (2, 0).\n2.2 Calculer les coordonnées du motif translaté de vecteur v⃗₂ = (1, 2).\n2.3 Pourquoi les translations sont-elles adaptées pour générer un pavage sans chevauchement ?",
              correction: [
                { type: "line", label: "1.1", text: "AB⃗ = (2, 0) et DC⃗ = C − D = (2, 0). AB⃗ = DC⃗, donc ABCD est un parallélogramme." },
                { type: "line", label: "1.2", text: "AB⃗ = (2, 0) et AD⃗ = (1, 2) : côtés ni perpendiculaires ni de même longueur, donc parallélogramme quelconque. Pas d'axe de symétrie, mais un centre : le milieu de [AC] = (1,5 ; 1)." },
                { type: "line", label: "2.1", text: "v⃗₁ = (2, 0) : A₁(2,0), B₁(4,0), C₁(5,2), D₁(3,2)." },
                { type: "line", label: "2.2", text: "v⃗₂ = (1, 2) : A₂(1,2), B₂(3,2), C₂(4,4), D₂(2,4)." },
                { type: "line", label: "2.3", text: "La translation est une isométrie : elle conserve la forme et l'aire du motif. En répétant le motif par deux vecteurs non colinéaires, on recouvre le plan sans trou ni chevauchement." },
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
              title: "Erreur type · Exercice 5 : diagonales prises pour des axes",
              objectifTag: "Axes de symétrie",
              enonce: "**Copie d'un candidat :** « Un rectangle a 4 axes de symétrie : les 2 diagonales et les 2 médianes. »",
              question: "a) Identifier l'erreur.\nb) Donner la bonne réponse.",
              correction: [
                { type: "paragraph", text: "**Erreur : les diagonales d'un rectangle non carré ne sont pas des axes de symétrie.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Par réflexion autour d'une diagonale, le rectangle ne se superpose pas à lui-même." },
                    { text: "Le rectangle non carré a 2 axes : les médianes parallèles aux côtés." },
                    { text: "Le carré, lui, en a 4 (2 médianes + 2 diagonales)." },
                  ],
                },
                { type: "note", text: "Les diagonales sont axes uniquement pour le losange et le carré." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 6 : orientation et symétrie axiale",
              objectifTag: "Propriétés conservées",
              enonce: "**Copie d'un candidat :** « La symétrie axiale est une isométrie, donc elle conserve l'orientation comme la translation. »",
              question: "a) Identifier l'erreur.\nb) Corriger.",
              correction: [
                { type: "paragraph", text: "**Erreur : la symétrie axiale inverse l'orientation.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Elle conserve bien les distances, les angles et les aires, mais retourne la figure." },
                    { text: "Un triangle antihoraire devient horaire après une symétrie axiale." },
                    { text: "C'est la seule isométrie inversante ; translation, rotation et symétrie centrale conservent l'orientation." },
                  ],
                },
                { type: "note", text: "Penser au miroir : il retourne l'image." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 7 : homothétie et angles",
              objectifTag: "Homothétie",
              enonce: "**Copie d'un candidat :** « On applique une homothétie de rapport 3 à un triangle rectangle : les angles sont multipliés par 3 comme les longueurs. »",
              question: "a) Identifier l'erreur.\nb) Corriger.",
              correction: [
                { type: "paragraph", text: "**Erreur : une homothétie conserve les angles.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Multiplier des angles par 3 dépasserait vite 180° : impossible." },
                    { text: "Seules les longueurs sont multipliées par |k| (×3) et les aires par k² (×9)." },
                    { text: "Le triangle image reste rectangle, avec les mêmes angles : il est semblable à l'original." },
                  ],
                },
                { type: "note", text: "Homothétie : longueurs ×k, aires ×k², angles inchangés." },
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
                  question: "Définir la symétrie axiale. Quelle propriété caractérise le point image ?",
                  answer:
                    "M' est le symétrique de M par rapport à l'axe d si et seulement si d est la médiatrice de [MM'] (d ⊥ (MM') et d coupe [MM'] en son milieu). Conserve distances, angles et aires.",
                  astuce: "La symétrie axiale inverse l'orientation : c'est la seule isométrie inversante.",
                },
                {
                  question: "Définir la symétrie centrale et la formule des coordonnées de l'image.",
                  answer:
                    "M' est le symétrique de M par rapport à O si O est le milieu de [MM']. Si O = (a, b) et M = (x, y), alors M' = (2a − x, 2b − y). Conserve distances, angles, aires et orientation.",
                },
                {
                  question: "Définir la translation. Comment construire l'image d'un point ?",
                  answer:
                    "La translation de vecteur v⃗ envoie M sur M' tel que MM'⃗ = v⃗. Si v⃗ = (a, b), alors M(x, y) → M'(x + a, y + b). Conserve tout, dont l'orientation.",
                },
                {
                  question: "Qu'est-ce qu'une rotation ? Ses cas particuliers ?",
                  answer:
                    "Rotation de centre O et d'angle α : M' tel que OM = OM' et l'angle (OM⃗, OM'⃗) = α. Conserve distances, angles, aires, orientation. α = 180° donne la symétrie centrale, α = 360° l'identité.",
                },
                {
                  question: "Définir l'homothétie. Qu'est-ce qui est conservé ?",
                  answer:
                    "Homothétie de centre O et de rapport k : M' tel que OM'⃗ = k × OM⃗. Conserve les angles, la forme et l'orientation (si k > 0). Les longueurs sont multipliées par |k|, les aires par k². k = −1 donne la symétrie centrale.",
                  astuce: "Ce n'est une isométrie que si |k| = 1.",
                },
                {
                  question: "Tableau : quelle transformation conserve quoi ?",
                  answer:
                    "Les quatre isométries (axiale, centrale, translation, rotation) conservent distances, angles et aires. Seule la symétrie axiale inverse l'orientation. L'homothétie (k ≠ ±1) multiplie les longueurs par |k| et les aires par k², en conservant les angles.",
                },
                {
                  question: "Axes et centres de symétrie : rectangle, losange, carré, cercle ?",
                  answer:
                    "Rectangle : 2 axes (médianes), 1 centre. Losange : 2 axes (diagonales), 1 centre. Carré : 4 axes (2 médianes + 2 diagonales), 1 centre. Cercle : une infinité d'axes (tout diamètre), 1 centre.",
                  astuce: "Rectangle non carré : les diagonales ne sont pas des axes.",
                },
                {
                  question: "Lien entre parallélogramme et symétrie centrale ?",
                  answer:
                    "Un quadrilatère est un parallélogramme si et seulement si il admet un centre de symétrie : le point d'intersection des diagonales. Il n'a pas d'axe en général (sauf rectangle, losange, carré).",
                },
                {
                  question: "Comment identifier une translation à partir d'une figure et de son image ?",
                  answer:
                    "On calcule les vecteurs AA', BB', CC' pour les sommets et leurs images. S'ils sont tous égaux, c'est la translation de ce vecteur. Sinon, ce n'est pas une translation.",
                },
                {
                  question: "Composée de deux symétries axiales ? De deux symétries centrales ?",
                  answer:
                    "Deux symétries axiales d'axes parallèles : translation. D'axes sécants : rotation (centre = intersection, angle = double de l'angle entre les axes). Deux symétries centrales : translation.",
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
              center: { title: "Transformations", subtitle: "isométries + homothétie" },
              branches: [
                {
                  title: "Symétrie axiale",
                  variant: "blue",
                  lines: ["axe = médiatrice de [MM']", "orientation inversée"],
                },
                {
                  title: "Symétrie centrale",
                  variant: "green",
                  lines: ["O milieu de [MM']", "M' = (2a − x, 2b − y)"],
                },
                {
                  title: "Translation",
                  variant: "green",
                  lines: ["MM'⃗ = v⃗", "M'(x + a, y + b)"],
                },
                {
                  title: "Rotation",
                  variant: "green",
                  lines: ["centre O, angle α", "180° → symétrie centrale"],
                },
                {
                  title: "Homothétie",
                  variant: "yellow",
                  lines: ["OM'⃗ = k × OM⃗", "longueurs ×|k|, aires ×k²"],
                },
                {
                  title: "Axes et centres",
                  variant: "purple",
                  dashed: true,
                  lines: ["carré : 4 axes, 1 centre", "parallélogramme : 1 centre"],
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
