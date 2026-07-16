import type { Fiche } from "@/components/fiche/types";
import { COPIES_CERCLE } from "./copies-cercle";
import { EXERCICES_CERCLE } from "./exercices-cercle";

export const SAVOIR_FAIRE = [
  { id: "vocabulaire-formules", label: "Vocabulaire, périmètre et aire" },
  { id: "tangente", label: "Tangente et rayon" },
  { id: "mediatrice-corde", label: "Médiatrice d'une corde" },
  { id: "inscrit-circonscrit", label: "Cercle inscrit et circonscrit" },
  { id: "angle-inscrit", label: "Angle inscrit et angle au centre" },
  { id: "arc-secteur", label: "Longueur d'arc et aire de secteur" },
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
              title: "Le cercle apparaît toujours en configuration",
              text: "Au CRPE, le cercle est rarement isolé : une tangente qui le frôle, un triangle inscrit, un angle au centre double de l'angle inscrit. Ce sont ces configurations, et la façon de les exploiter dans un raisonnement, qui font la différence. Le théorème de Pythagore ([fiche N°21](fiche:theoreme-de-pythagore)) est souvent mobilisé avec la tangente. Les calculs en repère (milieu, distance) relèvent de la [fiche N°17](fiche:reperage-coordonnees), et la trigonométrie du triangle rectangle de la [fiche N°23](fiche:trigonometrie-triangle-rectangle).",
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
                  number: "3",
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
              title: "Cercle et configurations remarquables",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_CERCLE,
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
              title: "Cercle et configurations remarquables",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_CERCLE,
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
      ],
    },
  ],
};
