import type { Fiche } from "@/components/fiche/types";
import { COPIES_TRANSFORMATIONS_DU_PLAN } from "./copies-transformations-du-plan";
import { EXERCICES_TRANSFORMATIONS_DU_PLAN } from "./exercices-transformations-du-plan";

export const SAVOIR_FAIRE = [
  { id: "symetrie-axiale", label: "Symétrie axiale" },
  { id: "symetrie-centrale", label: "Symétrie centrale (coordonnées)" },
  { id: "translation", label: "Translation (coordonnées)" },
  { id: "axes-centres", label: "Axes et centres de symétrie" },
  { id: "identifier", label: "Identifier une transformation" },
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
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème D", variant: "info" },
  ],
  metaTitle: "Transformations du plan · Fiche de révision CRPE",
  metaDescription:
    "Fiche CRPE sur les transformations du plan : symétrie axiale, symétrie centrale, translation, rotation et homothétie, propriétés conservées, axes et centres de symétrie, frises et pavages. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
              title: "Construire, reconnaître, raisonner",
              text: "Les transformations sont omniprésentes au CRPE : construire l'image d'un point ou d'une figure, identifier les axes de symétrie d'une figure, reconnaître une frise ou un pavage. La vraie difficulté est conceptuelle : distinguer les transformations qui conservent les distances (les isométries) de celle qui ne les conserve pas (l'homothétie), et savoir quelle propriété est conservée dans chaque cas. Les images se calculent souvent en repère ([fiche N°17](fiche:reperage-coordonnees)).",
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
                  text: "Parallélogramme, rectangle, losange, carré : 1 centre (l'intersection des diagonales). Cercle : 1 centre. Un triangle (même équilatéral) n'a pas de centre de symétrie. Propriété clé : un quadrilatère est un parallélogramme si et seulement si il admet un centre de symétrie. La hiérarchie des quadrilatères est détaillée dans la [fiche N°19](fiche:triangles-quadrilateres-polygones).",
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
              title: "Transformations du plan",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_TRANSFORMATIONS_DU_PLAN,
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
              title: "Transformations du plan",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_TRANSFORMATIONS_DU_PLAN,
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
      ],
    },
  ],
};
