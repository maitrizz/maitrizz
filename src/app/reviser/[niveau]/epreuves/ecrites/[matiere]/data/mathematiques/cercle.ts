import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je distingue cercle et disque, rayon et diamètre, et je calcule périmètre (2πr) et aire (πr²)" },
  { id: "e2", label: "Je sais qu'une tangente est perpendiculaire au rayon au point de contact" },
  { id: "e3", label: "Je sais que la médiatrice d'une corde passe par le centre du cercle" },
  { id: "e4", label: "Je distingue cercle circonscrit (médiatrices, sommets) et cercle inscrit (bissectrices, côtés)" },
  { id: "e5", label: "Je sais que le cercle circonscrit à un triangle rectangle a pour centre le milieu de l'hypoténuse" },
  { id: "e6", label: "J'applique le théorème de l'angle inscrit (angle au centre = 2 × angle inscrit)" },
  { id: "e7", label: "Je sais que tout angle inscrit dans un demi-cercle est droit" },
  { id: "e8", label: "Je vérifie la position de M (arc majeur ou mineur) avant d'appliquer le théorème" },
  { id: "e9", label: "Je calcule la longueur d'un arc et l'aire d'un secteur de n degrés" },
];

export const ficheCercle: Fiche = {
  slug: "cercle",
  matiere: "mathematiques",
  numero: 20,
  partie: "Partie 4 : Espace et géométrie plane",
  title: "Cercle et configurations remarquables",
  subtitle:
    "Vocabulaire du cercle · tangente · médiatrice et cercle · cercle inscrit et circonscrit · angle inscrit et angle au centre · longueur d'arc et aire de secteur",
  badges: [
    { label: "★★ Fréquent", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème D", variant: "info" },
  ],
  metaTitle: "Cercle et configurations remarquables (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur le cercle : vocabulaire, tangente perpendiculaire au rayon, médiatrice d'une corde, cercle inscrit et circonscrit, théorème de l'angle inscrit, angle dans un demi-cercle, longueur d'arc et aire de secteur. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                { number: "①", title: "Vocabulaire du cercle", text: "Cercle et disque, rayon, diamètre, corde, arc, secteur, périmètre et aire." },
                { number: "②", title: "Tangente et médiatrice", text: "La tangente perpendiculaire au rayon, la médiatrice d'une corde." },
                { number: "③", title: "Inscrit et circonscrit", text: "Les deux cercles associés à un triangle, à ne pas confondre." },
                { number: "④", title: "Angle inscrit", text: "Le théorème reliant angle au centre et angle inscrit, et l'angle droit dans un demi-cercle." },
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
              title: "Le cercle apparaît toujours en configuration",
              text: "Au CRPE, le cercle est rarement isolé : une tangente qui le frôle, un triangle inscrit, un angle au centre double de l'angle inscrit. Ce sont ces configurations, et la façon de les exploiter dans un raisonnement, qui font la différence. Le théorème de Pythagore ([fiche N°21](fiche:theoreme-de-pythagore)) est souvent mobilisé avec la tangente.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Vocabulaire du cercle",
              blocks: [
                {
                  type: "paragraph",
                  text: "Un **cercle** de centre O et de rayon r est l'ensemble des points situés à distance r de O. Le **disque** est la surface délimitée par le cercle. Distinction essentielle : on calcule le **périmètre du cercle** (2πr) et l'**aire du disque** (πr²).",
                },
                {
                  type: "table",
                  headers: ["Terme", "Définition", "À retenir"],
                  rows: [
                    ["Rayon r", "du centre à un point du cercle", "tous les rayons sont égaux"],
                    ["Diamètre", "corde passant par le centre", "longueur 2r, le plus long segment"],
                    ["Corde", "segment reliant deux points du cercle", "le diamètre en est une"],
                    ["Arc", "portion de cercle entre deux points", "arc mineur ou majeur"],
                    ["Secteur", "portion de disque entre deux rayons", "une « part de pizza »"],
                  ],
                },
                {
                  type: "formulaBlock",
                  lines: [
                    "Périmètre du cercle = 2πr · aire du disque = πr²",
                    "Longueur d'un arc de n° : (n ÷ 360) × 2πr",
                    "Aire d'un secteur de n° : (n ÷ 360) × πr²",
                  ],
                  note: "Quelle fraction de tour ? (n ÷ 360) du total.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Tangente et médiatrice d'une corde",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "La tangente : perpendiculaire au rayon",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "Une **tangente** touche le cercle en un seul point T (point de tangence). Propriété fondamentale : la tangente est **perpendiculaire au rayon OT** en T. Réciproque : une droite perpendiculaire au rayon en un point du cercle est tangente.",
                    },
                    {
                      type: "paragraph",
                      text: "Conséquence : pour prouver qu'une droite est tangente, montrer qu'elle est perpendiculaire au rayon au point de contact. Exemple : OT = 5 (rayon), A sur la tangente avec AT = 12 ; le triangle OTA est rectangle en T, donc OA² = 25 + 144 = 169, OA = 13.",
                    },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Médiatrice et cercle",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "Un point M est sur la médiatrice de [AB] si et seulement si MA = MB (équidistance). De plus, **la médiatrice d'une corde passe par le centre du cercle**. Application clé : pour trouver le centre d'un cercle passant par trois points A, B, C, on trace les médiatrices de [AB] et [BC] ; leur intersection est le centre.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Cercle inscrit et cercle circonscrit",
              blocks: [
                {
                  type: "table",
                  headers: ["Cercle", "Centre", "Rayon", "Lien au triangle"],
                  rows: [
                    ["Circonscrit", "intersection des médiatrices", "distance aux sommets", "passe par les 3 sommets"],
                    ["Inscrit", "intersection des bissectrices", "distance aux côtés", "tangent aux 3 côtés"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "💡 Mémo",
                  text: "circonscrIT → sommets (médiatrices) ; inscrIT → bIssectrIces → côtés. Les deux constructions sont détaillées dans la [fiche N°18](fiche:droites-angles-parallelisme).",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Triangle rectangle et cercle circonscrit",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "Si un triangle est rectangle, le centre de son cercle circonscrit est le **milieu de l'hypoténuse**, et le rayon vaut la **moitié de l'hypoténuse**. C'est directement relié à l'angle inscrit dans un demi-cercle (section ④).",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Angle inscrit et angle au centre",
              blocks: [
                {
                  type: "paragraph",
                  text: "Deux points A et B sont fixés sur un cercle de centre O. Pour un point M du cercle, l'**angle inscrit** est l'angle en M, l'**angle au centre** est l'angle en O ; les deux interceptent le même arc AB.",
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Le théorème de l'angle inscrit",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "**Angle au centre = 2 × angle inscrit** (même arc intercepté)",
                        "Corollaire : tous les angles inscrits interceptant le même arc sont égaux.",
                        "Corollaire clé : un angle inscrit dans un demi-cercle vaut 90°.",
                      ],
                      note: "Si [AB] est un diamètre, tout point M du cercle (distinct de A, B) donne un angle AMB droit.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Vérifier la position de M",
                  text: "Le théorème s'applique quand M est sur l'arc majeur (le grand arc). Si M est sur l'arc mineur, l'angle inscrit et la moitié de l'angle au centre sont supplémentaires (somme 180°). Un schéma rapide évite l'erreur.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : confondre rayon et diamètre dans les formules",
              badge: "Très fréquent",
              faux: "Diamètre 10 cm : périmètre = 2π × 10 = 20π.",
              vrai: "r = 10 ÷ 2 = 5. Périmètre = 2π × 5 = 10π ≈ 31,4 cm.",
              methode: "2πr et πr² utilisent toujours le rayon : si on donne le diamètre, diviser par 2.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : appliquer l'angle inscrit sans vérifier l'arc",
              badge: "Fréquent",
              faux: "Angle au centre 80°, M sur l'arc mineur : angle inscrit = 80 ÷ 2 = 40°.",
              vrai: "Sur l'arc mineur, l'angle vaut 180° − 40° = 140°.",
              methode: "Repérer sur quel arc se trouve M avant d'appliquer le théorème (faire un schéma).",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : confondre cercle inscrit et circonscrit",
              badge: "Classique",
              faux: "Tracer les médiatrices pour le centre du cercle inscrit.",
              vrai: "Inscrit → bissectrices (tangent aux côtés). Circonscrit → médiatrices (passe par les sommets).",
              methode: "Mémo : inscrIT → bIssectrIces ; cIrconscrIt → médIatrIces.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : tangente perpendiculaire à une corde",
              badge: "Subtil",
              faux: "« La tangente en T est perpendiculaire à la corde [TA]. »",
              vrai: "La tangente est perpendiculaire au rayon OT, pas à une corde quelconque passant par T.",
              methode: "Tangente ⊥ rayon, uniquement. Ne pas confondre rayon et corde.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école : le regard du futur enseignant",
              text: "Au cycle 2, les élèves tracent des cercles au compas et apprennent centre, rayon, diamètre ; ils comprennent que tous les rayons sont égaux, raison pour laquelle le compas trace un cercle.\n\nAu cycle 3, ils calculent périmètre et aire du disque, construisent des cercles passant par des points donnés et découvrent la médiatrice. Les configurations (tangente, inscrit/circonscrit, angle inscrit) relèvent du cycle 4 : non attendues à l'école, mais le socle qu'il faut maîtriser pour enseigner avec recul.\n\nCe que le jury valorise : savoir pourquoi la construction au compas du cercle passant par trois points fonctionne (équidistance, donc médiatrices), pour enseigner avec profondeur et non par mimétisme.",
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
              title: "Reconnaître la configuration d'abord",
              text: "Tangente ? Angle inscrit ? Cercle circonscrit ? La configuration dicte la propriété à utiliser. La reconnaître en quelques secondes fait gagner du temps. Chaque savoir-faire se termine par une vérification.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Utiliser la tangente pour calculer une longueur",
              intro:
                "**Question type :** « Cercle de centre O, rayon 6 cm, tangent en T à une droite d. A sur d avec AT = 8 cm. Calculer OA. »",
              steps: [
                {
                  number: "1",
                  text: "**Identifier le triangle rectangle.**",
                  example: { lines: ["Tangente en T → OT ⊥ d → triangle OTA rectangle en T"] },
                },
                {
                  number: "2",
                  text: "**Appliquer Pythagore ([fiche N°21](fiche:theoreme-de-pythagore)).**",
                  example: { lines: ["OA² = OT² + AT² = 36 + 64 = 100 → OA = 10 cm"] },
                },
                {
                  number: "💡",
                  text: "**Rédiger en citant la propriété.**",
                  example: { lines: ["« La tangente est ⊥ au rayon OT, donc OTA est rectangle en T… »"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Cercle de rayon 5, tangente en T, A sur la tangente avec AT = 12. Calculer OA.",
              correction: [
                { type: "line", text: "OTA rectangle en T : OA² = 5² + 12² = 169 → OA = **13**." },
                { type: "note", text: "Triplet pythagoricien 5-12-13." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Utiliser l'angle inscrit",
              intro:
                "**Question type :** « [BC] est un diamètre, A un point du cercle distinct de B et C. Montrer que le triangle ABC est rectangle en A. »",
              steps: [
                {
                  number: "1",
                  text: "**Reconnaître le corollaire du demi-cercle.**",
                  example: { lines: ["[BC] diamètre → angle au centre BOC = 180°"] },
                },
                {
                  number: "2",
                  text: "**Appliquer le théorème de l'angle inscrit.**",
                  example: { lines: ["Angle BAC = 180° ÷ 2 = 90° → rectangle en A"] },
                  warn: "⚠️ Vérifier que A est bien sur le cercle et distinct de B et C.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Angle au centre AOB = 80°, M sur l'arc majeur. Que vaut l'angle inscrit AMB ?",
              correction: [
                { type: "line", text: "Angle inscrit = angle au centre ÷ 2 = 80° ÷ 2 = **40°**." },
                { type: "note", text: "Sur l'arc mineur, ce serait 180° − 40° = 140°." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Trouver le centre d'un cercle par trois points",
              intro:
                "**Question type :** « A(0 ; 0), B(4 ; 0), C(0 ; 3). Centre et rayon du cercle passant par A, B, C ? »",
              steps: [
                {
                  number: "1",
                  text: "**Tester si le triangle est rectangle.**",
                  example: { lines: ["AB² = 16, AC² = 9, BC² = 25 ; 16 + 9 = 25 → rectangle en A"] },
                },
                {
                  number: "2",
                  text: "**Rectangle → centre au milieu de l'hypoténuse.**",
                  example: { lines: ["Centre = milieu [BC] = (2 ; 1,5) ; rayon = BC ÷ 2 = 2,5"] },
                },
                {
                  number: "3",
                  text: "**Vérifier.**",
                  example: { lines: ["OA² = 2² + 1,5² = 6,25 = 2,5² ✓"] },
                  warn: "⚠️ Si le triangle n'est pas rectangle, croiser les médiatrices de [AB] et [AC].",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Quel est le centre du cercle circonscrit à un triangle rectangle en A, d'hypoténuse [BC] ?",
              correction: [
                { type: "line", text: "Le **milieu de [BC]** (l'hypoténuse), et le rayon vaut BC ÷ 2." },
                { type: "note", text: "C'est le corollaire de l'angle inscrit dans un demi-cercle." },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Calculer une longueur d'arc ou une aire de secteur",
              intro:
                "**Question type :** « Cercle de rayon 4 m. Longueur de l'arc correspondant à un angle au centre de 100° ? »",
              steps: [
                {
                  number: "1",
                  text: "**Repérer la fraction de tour.**",
                  example: { lines: ["100° ÷ 360° = 5/18 du cercle"] },
                },
                {
                  number: "2",
                  text: "**Multiplier par le périmètre total.**",
                  example: { lines: ["Longueur = (100 ÷ 360) × 2π × 4 ≈ 6,98 m"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Aire du secteur de 90° dans un disque de rayon 6 cm ?",
              correction: [
                { type: "line", text: "(90 ÷ 360) × π × 6² = (1/4) × 36π = **9π ≈ 28,3 cm²**." },
                { type: "note", text: "90° = un quart de disque." },
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
                  question: "Un cercle a un diamètre de 10 cm. Quel est son périmètre ?",
                  options: ["20π cm", "10π cm", "100π cm", "5π cm"],
                  correctIndex: 1,
                  explanation: "Le rayon vaut 10 ÷ 2 = 5 cm. Périmètre = 2πr = 2π × 5 = 10π ≈ 31,4 cm. Ne pas utiliser le diamètre dans 2πr.",
                },
                {
                  objectifId: "e2",
                  question: "Une tangente touche un cercle en T. À quoi est-elle perpendiculaire ?",
                  options: ["À une corde passant par T", "Au rayon OT", "Au diamètre quelconque", "À rien de particulier"],
                  correctIndex: 1,
                  explanation: "La tangente est perpendiculaire au rayon au point de contact (OT), pas à une corde quelconque.",
                },
                {
                  objectifId: "e3",
                  question: "Par où passe la médiatrice d'une corde d'un cercle ?",
                  options: ["Par un sommet", "Par le centre du cercle", "Par le milieu d'un rayon", "Par le point de tangence"],
                  correctIndex: 1,
                  explanation: "La médiatrice d'une corde passe par le centre du cercle : c'est ce qui permet de retrouver le centre à partir de deux cordes.",
                },
                {
                  objectifId: "e4",
                  question: "Le centre du cercle inscrit dans un triangle est l'intersection des…",
                  options: ["médiatrices des côtés", "bissectrices des angles", "hauteurs", "médianes"],
                  correctIndex: 1,
                  explanation: "Cercle inscrit → bissectrices (tangent aux côtés). Les médiatrices donnent le cercle circonscrit (qui passe par les sommets).",
                },
                {
                  objectifId: "e5",
                  question: "Où est le centre du cercle circonscrit à un triangle rectangle ?",
                  options: ["Au sommet de l'angle droit", "Au milieu de l'hypoténuse", "Au centre de gravité", "À l'intersection des hauteurs"],
                  correctIndex: 1,
                  explanation: "Pour un triangle rectangle, le centre du cercle circonscrit est le milieu de l'hypoténuse, et le rayon vaut la moitié de l'hypoténuse.",
                },
                {
                  objectifId: "e6",
                  question: "L'angle au centre AOB vaut 110°. Que vaut l'angle inscrit AMB (M sur l'arc majeur) ?",
                  options: ["110°", "55°", "220°", "70°"],
                  correctIndex: 1,
                  explanation: "Théorème de l'angle inscrit : angle inscrit = angle au centre ÷ 2 = 110° ÷ 2 = 55°.",
                },
                {
                  objectifId: "e7",
                  question: "[AB] est un diamètre, M un point du cercle distinct de A et B. Que vaut l'angle AMB ?",
                  options: ["45°", "90°", "180°", "Cela dépend de M"],
                  correctIndex: 1,
                  explanation: "Tout angle inscrit dans un demi-cercle est droit : l'angle au centre vaut 180°, donc l'angle inscrit vaut 90°.",
                },
                {
                  objectifId: "e8",
                  question: "Angle au centre 80°, mais M est sur l'arc mineur. Que vaut l'angle inscrit AMB ?",
                  options: ["40°", "80°", "140°", "100°"],
                  correctIndex: 2,
                  explanation: "Sur l'arc mineur, l'angle inscrit est supplémentaire de 40° : 180° − 40° = 140°. Toujours vérifier la position de M.",
                },
                {
                  objectifId: "e9",
                  question: "Longueur de l'arc de 90° d'un cercle de rayon 4 cm ?",
                  options: ["8π cm", "2π cm", "π cm", "4π cm"],
                  correctIndex: 1,
                  explanation: "(90 ÷ 360) × 2π × 4 = (1/4) × 8π = 2π ≈ 6,28 cm. C'est un quart du périmètre.",
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
              text: "Identifiez la configuration, citez la propriété, justifiez. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Vocabulaire, tangente, Pythagore",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : vocabulaire et calculs",
              objectifTag: "Périmètre, aire, corde",
              enonce: "Un cercle a un rayon de 7 cm. Un point A est à 10 cm du centre O.",
              question: "a) A est-il à l'intérieur, sur, ou à l'extérieur du cercle ?\nb) Calculer le périmètre du cercle et l'aire du disque.\nc) Une corde [BC] a son milieu à 3 cm du centre : calculer BC.",
              correction: [
                { type: "line", label: "a)", text: "OA = 10 > r = 7 : A est à l'extérieur." },
                { type: "line", label: "b)", text: "Périmètre = 2π × 7 ≈ 43,98 cm ; aire = π × 7² ≈ 153,94 cm²." },
                { type: "line", label: "c)", text: "La médiatrice de [BC] passe par O, donc OM ⊥ BC. OB² = OM² + MB² → 49 = 9 + MB² → MB = √40, BC = 2√40 = 4√10 ≈ 12,65 cm." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : tangente",
              objectifTag: "Tangente et Pythagore",
              enonce: "Cercle de centre O, rayon 5 cm, tangent en T à une droite d. A est sur d, à 12 cm de T.",
              question: "a) Justifier que le triangle OTA est rectangle en T.\nb) Calculer OA.",
              correction: [
                { type: "line", label: "a)", text: "La tangente est perpendiculaire au rayon au point de contact : OT ⊥ d, donc OTA est rectangle en T." },
                { type: "line", label: "b)", text: "OA² = OT² + AT² = 25 + 144 = 169 → OA = 13 cm." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : angle inscrit",
              sub: "Configurations et arcs",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : angle inscrit et arcs",
              objectifTag: "Angle inscrit",
              enonce: "Dans un cercle de centre O, l'angle au centre AOB vaut 110°.",
              question: "a) Angle inscrit AMB si M est sur l'arc majeur ?\nb) Angle AMB si M est sur l'arc mineur ?\nc) Deux points M et N sont sur l'arc majeur : que dire de AMB et ANB ?",
              correction: [
                { type: "line", label: "a)", text: "110° ÷ 2 = 55°." },
                { type: "line", label: "b)", text: "Supplémentaire : 180° − 55° = 125°." },
                { type: "line", label: "c)", text: "Ils interceptent le même arc : AMB = ANB = 55° (angles inscrits dans le même arc égaux)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : triangle rectangle inscrit",
              objectifTag: "Cercle circonscrit",
              enonce: "On donne A(1 ; 0), B(5 ; 0), C(5 ; 4).",
              question: "a) Vérifier que le triangle ABC est rectangle et préciser en quel sommet.\nb) Centre et rayon du cercle circonscrit.\nc) Vérifier que A est sur ce cercle.",
              correction: [
                { type: "line", label: "a)", text: "AB² = 16, BC² = 16, AC² = 32 ; 16 + 16 = 32 → rectangle en B." },
                { type: "line", label: "b)", text: "Rectangle en B → diamètre [AC]. Centre = milieu [AC] = (3 ; 2) ; rayon = √32 ÷ 2 = 2√2 ≈ 2,83." },
                { type: "line", label: "c)", text: "Distance A → centre : √[(3 − 1)² + (2 − 0)²] = √8 = 2√2 = rayon ✓." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : arcs et secteurs",
              sub: "Fractions de cercle",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : la piste circulaire",
              objectifTag: "Longueur d'arc",
              enonce: "Une piste circulaire a un rayon de 4 m. Trois plots B, A, C sont placés, [BC] étant un diamètre, et l'angle au centre BOA vaut 100°.",
              question: "a) Périmètre complet de la piste.\nb) Longueur de [BC].\nc) Longueur de l'arc de 100° (l'arc BA).",
              correction: [
                { type: "line", label: "a)", text: "2π × 4 ≈ 25,13 m." },
                { type: "line", label: "b)", text: "BC = 2r = 8 m (diamètre)." },
                { type: "line", label: "c)", text: "(100 ÷ 360) × 2π × 4 = (5/18) × 8π ≈ 6,98 m." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : problème complet niveau CRPE",
              sub: "Combiner plusieurs configurations",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 4 : la roue de la cour",
              objectifTag: "Triangle inscrit",
              enonce: "Une roue de centre O et de rayon 30 cm porte un triangle équilatéral ABC inscrit (sommets sur le cercle). L'angle au centre AOB vaut 120°.",
              question:
                "a) Justifier que les trois angles au centre valent 120°.\nb) En déduire l'angle inscrit ACB.\nc) Calculer la longueur du côté AB (triangle isocèle OAB, OA = OB = 30, angle 120°).\nd) Comparer le périmètre du triangle à celui du cercle.",
              correction: [
                { type: "line", label: "a)", text: "Triangle équilatéral → trois arcs égaux → trois angles au centre égaux, de somme 360°, donc 120° chacun." },
                { type: "line", label: "b)", text: "Angle inscrit ACB = 120° ÷ 2 = 60° (cohérent avec un triangle équilatéral)." },
                { type: "line", label: "c)", text: "La médiatrice de [AB] passe par O, angle AOM = 60°. AM = 30 × sin(60°) = 15√3, donc AB = 30√3 ≈ 51,96 cm." },
                { type: "line", label: "d)", text: "Triangle : 3 × 30√3 = 90√3 ≈ 155,9 cm ; cercle : 2π × 30 ≈ 188,5 cm. Le triangle fait environ 83 % du cercle." },
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
              text: "Cet exercice reproduit le format d'un sujet de concours, combinant angle inscrit, diamètre et calculs d'arcs. Comptez 20 à 25 minutes, en conditions réelles.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 5 : la piste de motricité",
              objectifTag: "Angle inscrit, diamètre, arcs",
              enonce:
                "Une enseignante trace une piste circulaire de centre O et de rayon 4 m. Trois plots A, B, C sont sur la piste, avec [BC] un diamètre. Un plot M est sur la piste, du même côté que A par rapport à BC. L'angle au centre BOA vaut 100°.",
              question:
                "1.1 Calculer l'angle inscrit BMA (même arc que l'angle au centre BOA).\n1.2 Calculer l'angle BCA (C sur l'arc majeur).\n1.3 Le triangle BCA est-il rectangle ? En quel sommet ? Justifier.\n2.1 Longueur de la piste complète.\n2.2 Longueur de [BC].\n2.3 Longueur de l'arc BC contenant A (100° au centre).",
              correction: [
                { type: "line", label: "1.1", text: "BMA = BOA ÷ 2 = 100° ÷ 2 = 50°." },
                { type: "line", label: "1.2", text: "BCA intercepte le même arc BA : 100° ÷ 2 = 50° (M et C sur le même arc, angles égaux)." },
                { type: "line", label: "1.3", text: "[BC] diamètre → angle au centre 180° → angle inscrit BAC = 90° : le triangle BAC est rectangle en A." },
                { type: "line", label: "2.1", text: "2π × 4 ≈ 25,13 m." },
                { type: "line", label: "2.2", text: "BC = 2 × 4 = 8 m." },
                { type: "line", label: "2.3", text: "(100 ÷ 360) × 2π × 4 = (5/18) × 8π ≈ 6,98 m." },
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
              title: "Erreur type · Exercice 6 : rayon et diamètre confondus",
              objectifTag: "Formules du cercle",
              enonce: "**Copie d'un candidat :** un cercle de diamètre 10 cm.\n*Réponse produite :* « périmètre = 2π × 10 = 20π ≈ 62,83 cm ».",
              question: "a) Identifier l'erreur.\nb) Donner le bon périmètre.",
              correction: [
                { type: "paragraph", text: "**Erreur : diamètre utilisé à la place du rayon.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "La formule 2πr utilise le rayon, pas le diamètre." },
                    { text: "r = 10 ÷ 2 = 5 cm." },
                    { text: "Périmètre = 2π × 5 = 10π ≈ 31,42 cm." },
                  ],
                },
                { type: "note", text: "Quand l'énoncé donne un diamètre, diviser par 2 avant tout calcul." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 7 : angle inscrit sans vérifier l'arc",
              objectifTag: "Angle inscrit",
              enonce: "**Copie d'un candidat :** angle au centre AOB = 80°, M sur l'arc mineur (entre A et B).\n*Réponse produite :* « angle AMB = 80° ÷ 2 = 40° ».",
              question: "a) Identifier l'erreur.\nb) Donner le bon angle.",
              correction: [
                { type: "paragraph", text: "**Erreur : théorème appliqué sans vérifier la position de M.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Le théorème (moitié de l'angle au centre) vaut quand M est sur l'arc majeur." },
                    { text: "L'angle inscrit sur l'arc majeur vaudrait 40°." },
                    { text: "M sur l'arc mineur : AMB = 180° − 40° = 140°." },
                  ],
                },
                { type: "note", text: "Faire un schéma de 10 secondes pour situer M avant de conclure." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 8 : inscrit et circonscrit confondus",
              objectifTag: "Cercles d'un triangle",
              enonce: "**Copie d'un candidat :** « Pour le cercle inscrit, je trace les médiatrices ; leur intersection est le centre. »",
              question: "a) Identifier l'erreur.\nb) Donner la bonne construction.",
              correction: [
                { type: "paragraph", text: "**Erreur : médiatrices données pour le cercle inscrit.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Les médiatrices donnent le centre du cercle circonscrit (qui passe par les sommets)." },
                    { text: "Le cercle inscrit a pour centre l'intersection des bissectrices des angles." },
                    { text: "Il est tangent aux trois côtés ; son rayon est la distance du centre à un côté." },
                  ],
                },
                { type: "note", text: "Mémo : inscrIT → bIssectrIces ; cIrconscrIt → médIatrIces." },
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
                  question: "Quelle différence entre cercle et disque ? Quelles formules ?",
                  answer:
                    "Le cercle est la ligne (ensemble des points à distance r de O), le disque est la surface. Périmètre du cercle = 2πr ; aire du disque = πr². Le diamètre vaut 2r.",
                  astuce: "Quand l'énoncé donne le diamètre, diviser par 2 pour obtenir r.",
                },
                {
                  question: "Quelle est la propriété fondamentale de la tangente ?",
                  answer:
                    "La tangente à un cercle est perpendiculaire au rayon au point de contact. Réciproque : une droite perpendiculaire au rayon en un point du cercle est tangente.",
                  astuce: "Perpendiculaire au rayon, pas à une corde quelconque.",
                },
                {
                  question: "Que dit la propriété de la médiatrice d'une corde ?",
                  answer:
                    "La médiatrice d'une corde passe par le centre du cercle. Pour trouver le centre d'un cercle passant par trois points, on croise les médiatrices de deux cordes.",
                },
                {
                  question: "Cercle circonscrit : centre et construction ?",
                  answer:
                    "Centre = intersection des médiatrices des côtés ; le cercle passe par les trois sommets ; rayon = distance aux sommets. Cas du triangle rectangle : centre = milieu de l'hypoténuse.",
                  astuce: "Médiatrices → circonscrit → sommets.",
                },
                {
                  question: "Cercle inscrit : centre et construction ?",
                  answer:
                    "Centre = intersection des bissectrices des angles ; le cercle est tangent aux trois côtés ; rayon = distance aux côtés.",
                  astuce: "inscrIT → bIssectrIces → côtés.",
                },
                {
                  question: "Énoncer le théorème de l'angle inscrit.",
                  answer:
                    "L'angle au centre est le double de l'angle inscrit qui intercepte le même arc (angle AOB = 2 × angle AMB). Corollaire : tous les angles inscrits dans le même arc sont égaux.",
                },
                {
                  question: "Quel angle forme tout point d'un cercle avec un diamètre ?",
                  answer:
                    "Un angle droit (90°). Si [AB] est un diamètre et M un point du cercle (distinct de A et B), l'angle AMB vaut 90°. C'est le corollaire de l'angle inscrit dans un demi-cercle.",
                  astuce: "Très utile pour démontrer qu'un angle est droit.",
                },
                {
                  question: "Pourquoi vérifier la position de M dans l'angle inscrit ?",
                  answer:
                    "Le théorème (angle inscrit = moitié de l'angle au centre) vaut pour M sur l'arc majeur. Si M est sur l'arc mineur, l'angle inscrit est supplémentaire (180° moins la moitié de l'angle au centre).",
                },
                {
                  question: "Formules pour un arc et un secteur de n degrés ?",
                  answer:
                    "Longueur d'arc = (n ÷ 360) × 2πr ; aire de secteur = (n ÷ 360) × πr². On prend la fraction de tour (n ÷ 360) du périmètre ou de l'aire totale.",
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
              center: { title: "Cercle", subtitle: "configurations remarquables" },
              branches: [
                {
                  title: "Vocabulaire",
                  variant: "blue",
                  lines: ["Cercle (2πr) vs disque (πr²)", "Rayon, diamètre = 2r, corde", "Arc, secteur : fraction de tour"],
                },
                {
                  title: "Tangente",
                  variant: "green",
                  lines: ["Perpendiculaire au rayon en T", "Triangle rectangle + Pythagore"],
                },
                {
                  title: "Médiatrice",
                  variant: "green",
                  lines: ["MA = MB ⟺ M sur la médiatrice", "Médiatrice d'une corde passe par O"],
                },
                {
                  title: "Inscrit / circonscrit",
                  variant: "yellow",
                  lines: ["Circonscrit : médiatrices, sommets", "Inscrit : bissectrices, côtés", "Rectangle → centre milieu hypoténuse"],
                },
                {
                  title: "Angle inscrit",
                  variant: "purple",
                  lines: ["Angle au centre = 2 × inscrit", "Demi-cercle → angle droit"],
                },
                {
                  title: "Vigilance",
                  variant: "purple",
                  dashed: true,
                  lines: ["Rayon ≠ diamètre", "Vérifier l'arc (majeur/mineur)"],
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
