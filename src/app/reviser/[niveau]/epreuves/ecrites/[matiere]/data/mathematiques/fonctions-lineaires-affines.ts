import type { Fiche } from "@/components/fiche/types";
import { COPIES_FONCTIONS_LINEAIRES_AFFINES } from "./copies-fonctions-lineaires-affines";
import { EXERCICES_FONCTIONS_LINEAIRES_AFFINES } from "./exercices-fonctions-lineaires-affines";

export const SAVOIR_FAIRE = [
  { id: "image-antecedent", label: "Calculer image et antécédent" },
  { id: "lecture-graphique", label: "Lire un tableau ou un graphique" },
  { id: "lineaire-affine", label: "Distinguer linéaire et affine (a, b)" },
  { id: "tracer", label: "Tracer une droite et lire a, b" },
  { id: "intersection", label: "Intersecter deux droites" },
  { id: "proportionnalite-lien", label: "Relier fonction et proportionnalité" },
];

export const ficheFonctionsLineairesAffines: Fiche = {
  slug: "fonctions-lineaires-affines",
  matiere: "mathematiques",
  numero: 14,
  partie: "Partie 2 : Organisation, données, fonctions",
  title: "Fonctions : notion, linéaires et affines",
  subtitle:
    "Image et antécédent · notations f(x) et x ↦ f(x) · tableau de valeurs · lecture graphique · fonction linéaire f(x) = ax · fonction affine f(x) = ax + b · intersection de droites",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème B", variant: "info" },
  ],
  metaTitle: "Fonctions linéaires et affines · Fiche de révision CRPE",
  metaDescription:
    "Fiche CRPE sur les fonctions : notion de fonction, image et antécédent, notations f(x), tableau de valeurs, lecture graphique, fonction linéaire f(x) = ax, fonction affine f(x) = ax + b et intersection de deux droites. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
              title: "Une fonction, c'est une machine à transformer des nombres",
              text: "Une machine à café : une capsule (l'entrée) donne un café (la sortie), toujours le même pour la même capsule. Une fonction, c'est pareil : pour chaque valeur d'entrée, elle produit une et une seule valeur de sortie.\n\nVous en manipulez déjà : « prix = 2 × le nombre de kg » est une fonction, « aire = côté² » aussi. Cette fiche apprend à les nommer, les écrire et les lire, puis se concentre sur les deux familles les plus testées au CRPE : les fonctions linéaires et affines, dont les courbes sont des droites.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Qu'est-ce qu'une fonction ? Image et antécédent",
              blocks: [
                {
                  type: "paragraph",
                  text: "Une **fonction f** associe à chaque valeur x (l'entrée) une valeur unique f(x) (la sortie). On écrit **f : x ↦ f(x)** (« f envoie x sur f(x) »). x est la **variable** (ou antécédent), f(x) est l'**image** de x. Ce qui fait une fonction : une seule image par antécédent.",
                },
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "L'image (on calcule)",
                      variant: "info",
                      lines: ["f(x) = 2x + 1 → f(3) = 7.", "7 est l'image de 3.", "« Calculer l'image de 3 » : appliquer la formule."],
                    },
                    {
                      title: "L'antécédent (on résout)",
                      variant: "info",
                      lines: ["3 est un antécédent de 7.", "« Trouver l'antécédent de 7 » : résoudre 2x + 1 = 7.", "On part de la sortie, on cherche l'entrée."],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Image et antécédent : deux opérations inverses",
                  text: "Une image est toujours unique pour un x donné. Un antécédent, lui, peut ne pas exister (x² = −4 impossible) ou être multiple (g(x) = x² : 4 a deux antécédents, 2 et −2). Et f(3) ne signifie pas f × 3 : c'est la valeur de f quand on entre 3.",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Trois notations pour la même idée",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "f(x) = 3x − 2 (la règle de calcul)",
                        "x ↦ 3x − 2 (la transformation)",
                        "f : x ↦ 3x − 2 (notation complète)",
                      ],
                      note: "Toutes décrivent la même fonction. f(x) = … sert à définir la règle, x ↦ … insiste sur la transformation.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Tableau de valeurs et lecture graphique",
              blocks: [
                {
                  type: "paragraph",
                  text: "Pour f(x) = 2x − 1, on choisit des valeurs de x, on remplace, on note le résultat. Chaque paire (x ; f(x)) devient un point de la courbe.",
                },
                {
                  type: "table",
                  headers: ["x", "−2", "0", "1", "3"],
                  rows: [
                    ["f(x) = 2x − 1", "−5", "−1", "1", "5"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "💡 Lire un graphique dans les deux sens",
                  text: "Image de 2 : repérer x = 2 sur l'axe horizontal, monter jusqu'à la courbe, lire la valeur sur l'axe vertical. Antécédent de 5 : repérer y = 5 sur l'axe vertical, aller jusqu'à la courbe, descendre lire x. Si la courbe coupe la ligne horizontale en plusieurs points, il y a plusieurs antécédents. La droite dans un repère et son équation y = ax + b sont détaillées dans la [fiche N°17](fiche:reperage-coordonnees).",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "La fonction linéaire f(x) = ax",
              blocks: [
                {
                  type: "paragraph",
                  text: "Une **fonction linéaire** est de la forme **f(x) = ax**, où a est le **coefficient directeur**. Sa courbe est une droite qui passe obligatoirement par l'origine (0 ; 0). Elle correspond exactement à une situation de **proportionnalité** : a est le coefficient de proportionnalité.",
                },
                {
                  type: "formulaBlock",
                  lines: [
                    "**f(x) = ax** · f(0) = 0 toujours · droite passant par (0 ; 0)",
                    "Taxi à 2,50 €/km sans frais : f(x) = 2,5x",
                    "f(0) = 0 · f(4) = 10 · f(10) = 25",
                  ],
                  note: "Interprétation de a : quand x augmente de 1, f(x) augmente de a. a > 0 : droite montante ; a < 0 : droite descendante.",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "La fonction affine f(x) = ax + b",
              blocks: [
                {
                  type: "paragraph",
                  text: "Une **fonction affine** est de la forme **f(x) = ax + b**. a est le **coefficient directeur** (la pente, même rôle que pour la linéaire) et b est l'**ordonnée à l'origine** : la valeur de f quand x = 0, là où la droite coupe l'axe vertical.",
                },
                {
                  type: "table",
                  headers: ["", "Linéaire f(x) = ax", "Affine f(x) = ax + b"],
                  rows: [
                    ["f(0)", "0 toujours", "b"],
                    ["Courbe", "droite par (0 ; 0)", "droite coupant l'axe y en (0 ; b)"],
                    ["Proportionnalité ?", "oui (k = a)", "non (sauf si b = 0)"],
                    ["Exemple", "f(x) = 2x", "g(x) = 2x + 3"],
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Lire a et b, tracer, intersecter",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "**Lire b** : la valeur où la droite coupe l'axe vertical. **Lire a** : entre deux points, a = (y₂ − y₁) ÷ (x₂ − x₁). **Tracer** : placer (0 ; b), puis avancer de 1 en x et monter de a en y. **Intersection** de deux droites f et g : résoudre f(x) = g(x), puis calculer y.",
                    },
                    {
                      type: "formulaBlock",
                      lines: [
                        "f(x) = 2x + 1 et g(x) = −x + 7",
                        "2x + 1 = −x + 7 → 3x = 6 → x = 2",
                        "y = f(2) = 5 → intersection (2 ; 5)",
                      ],
                      note: "Si f et g sont deux tarifs, l'intersection donne la valeur de x où les deux coûts sont égaux. Résoudre f(x) = g(x) relève des équations ([fiche N°9](fiche:equations-inequations-systemes)).",
                    },
                  ],
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : confondre image et antécédent",
              badge: "Très fréquent",
              faux: "« L'antécédent de 3 par f » : on calcule f(3).",
              vrai: "L'image de 3 = f(3). L'antécédent de 3 = la solution de f(x) = 3.",
              methode: "Image : on entre x, on calcule. Antécédent : on cherche ce qui donne la sortie voulue.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : confondre a et b dans f(x) = ax + b",
              badge: "Très fréquent",
              faux: "Dans f(x) = 3x + 5 : a = 5 et b = 3.",
              vrai: "a = 3 (coefficient de x, la pente), b = 5 (terme constant, ordonnée à l'origine).",
              methode: "a est toujours devant le x ; b est le terme seul, sans x.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : croire que f(x) = 2x + 3 est proportionnel",
              badge: "Conceptuel",
              faux: "« La droite monte régulièrement, donc c'est une proportionnalité. »",
              vrai: "f(0) = 3 ≠ 0 : la droite ne passe pas par l'origine, ce n'est pas proportionnel.",
              methode: "Proportionnalité ⟺ fonction linéaire ⟺ droite passant par l'origine (b = 0).",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : calculer a = y₂ ÷ x₂",
              badge: "Fréquent",
              faux: "Points (2 ; 5) et (4 ; 9) : a = 9 ÷ 4 = 2,25.",
              vrai: "a = (9 − 5) ÷ (4 − 2) = 4 ÷ 2 = 2 : a mesure une variation, un rapport d'écarts.",
              methode: "Toujours a = (y₂ − y₁) ÷ (x₂ − x₁), jamais une seule coordonnée.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école : le regard du futur enseignant",
              text: "Au cycle 3, les élèves travaillent des tableaux de valeurs et des graphiques sans le mot « fonction » : ils raisonnent sur « le prix dépend du nombre d'articles », la notion de fonction en acte. Les fonctions linéaires apparaissent sous la forme de tableaux de proportionnalité, sans vocabulaire algébrique : la droite passant par l'origine est le graphique d'une situation proportionnelle.\n\nAu cycle 4, la notion est formalisée (notations f(x), images, antécédents, graphiques), et les fonctions affines arrivent en 3e (identifier a et b, tracer, interpréter, comparer des tarifs par intersection).\n\nCe que le jury attend : faire le lien entre proportionnalité ([fiche N°13](fiche:proportionnalite-pourcentages)) et fonction linéaire f(x) = ax, et savoir expliquer pourquoi une fonction affine avec b ≠ 0 ne modélise plus une proportionnalité. C'est une distinction conceptuelle clé pour vos futurs élèves.",
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
              title: "Le réflexe général",
              text: "Identifier ce qu'on cherche (image ou antécédent, a ou b, intersection), choisir la bonne opération (calculer f(x) ou résoudre une équation), tracer avec deux points, vérifier. Chaque savoir-faire ci-dessous se termine par une vérification.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Calculer une image, trouver un antécédent",
              intro:
                "**Question type :** « Soit f(x) = 4x − 3. Calculer f(−2), puis trouver l'antécédent de 9. »",
              steps: [
                {
                  number: "1",
                  text: "**Image : substituer x par la valeur (entre parenthèses).**",
                  example: { lines: ["f(−2) = 4 × (−2) − 3 = −8 − 3 = −11"] },
                },
                {
                  number: "2",
                  text: "**Antécédent : écrire f(x) = valeur, puis résoudre.**",
                  example: { lines: ["4x − 3 = 9 → 4x = 12 → x = 3"] },
                },
                {
                  number: "3",
                  text: "**Vérifier l'antécédent.**",
                  example: { lines: ["f(3) = 4 × 3 − 3 = 9 ✓"] },
                  warn: "⚠️ Mettre la valeur entre parenthèses : (−2)² = +4, pas −4.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Soit f(x) = 3x − 5. Calculer f(2), puis trouver l'antécédent de 7.",
              correction: [
                { type: "line", text: "f(2) = 6 − 5 = **1**. Antécédent de 7 : 3x − 5 = 7 → 3x = 12 → **x = 4**." },
                { type: "note", text: "Image : on calcule. Antécédent : on résout une équation." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Identifier a et b, dire linéaire ou affine",
              intro:
                "**Question type :** « Pour chaque fonction, donner a et b, puis le type. »",
              steps: [
                {
                  number: "1",
                  text: "**Mettre sous la forme ax + b.**",
                  example: { lines: ["f(x) = 4x − 7 → a = 4, b = −7 (affine)", "h(x) = 5 + 2x → a = 2, b = 5 (affine)"] },
                  warn: "⚠️ Dans 5 + 2x, b = 5 et a = 2, pas l'inverse.",
                },
                {
                  number: "2",
                  text: "**Reconnaître la linéaire : b = 0.**",
                  example: { lines: ["g(x) = −3x → a = −3, b = 0 (linéaire)"] },
                },
                {
                  number: "3",
                  text: "**Vérifier avec f(0) = b.**",
                  example: { lines: ["g(0) = 0 → passe par l'origine → linéaire confirmé"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "La fonction k(x) = x/2 est-elle linéaire ou affine ? Donner a et b.",
              correction: [
                { type: "line", text: "k(x) = 0,5x : a = 0,5, b = 0 → **linéaire** (droite par l'origine)." },
                { type: "note", text: "b = 0 signale une fonction linéaire, donc une proportionnalité." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Tracer une droite affine",
              intro:
                "**Question type :** « Tracer la droite de f(x) = −x + 4. »",
              steps: [
                {
                  number: "1",
                  text: "**Placer le point (0 ; b).**",
                  example: { lines: ["b = 4 → A(0 ; 4)"] },
                },
                {
                  number: "2",
                  text: "**Utiliser la pente pour un second point.**",
                  example: { lines: ["a = −1 : f(1) = 3 → B(1 ; 3)"] },
                },
                {
                  number: "3",
                  text: "**Calculer un troisième point pour vérifier l'alignement.**",
                  example: { lines: ["f(4) = 0 → C(4 ; 0) ; A, B, C alignés ✓"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Pour f(x) = 2x − 3, donner le point d'ordonnée à l'origine et un second point.",
              correction: [
                { type: "line", text: "(0 ; −3) (car b = −3), puis par exemple (3 ; 3) car f(3) = 6 − 3 = 3." },
                { type: "note", text: "Deux points suffisent pour tracer une droite." },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Trouver l'expression à partir de deux points",
              intro:
                "**Question type :** « Une droite passe par (0 ; 2) et (3 ; 8). Trouver son expression. »",
              steps: [
                {
                  number: "1",
                  text: "**Lire b : ordonnée du point où x = 0.**",
                  example: { lines: ["(0 ; 2) → b = 2"] },
                },
                {
                  number: "2",
                  text: "**Calculer a avec les deux points.**",
                  example: { lines: ["a = (8 − 2) ÷ (3 − 0) = 6 ÷ 3 = 2"] },
                },
                {
                  number: "3",
                  text: "**Écrire et vérifier.**",
                  example: { lines: ["f(x) = 2x + 2 ; f(3) = 8 ✓"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Une droite passe par (0 ; −1) et (2 ; 5). Quelle est son expression ?",
              correction: [
                { type: "line", text: "b = −1 ; a = (5 − (−1)) ÷ (2 − 0) = 6 ÷ 2 = 3. Donc **f(x) = 3x − 1**." },
                { type: "note", text: "a est le rapport des écarts (y₂ − y₁) ÷ (x₂ − x₁)." },
              ],
            },
            {
              type: "methodeGroup",
              number: "⑤",
              title: "Trouver l'intersection de deux droites",
              intro:
                "**Question type :** « Taxi A : f(x) = 1,5x + 4. Taxi B : g(x) = 2,5x. À partir de combien de km B devient-il plus cher ? »",
              steps: [
                {
                  number: "1",
                  text: "**Égaliser f(x) = g(x) et résoudre.**",
                  example: { lines: ["1,5x + 4 = 2,5x → 4 = x → x = 4 km"] },
                },
                {
                  number: "2",
                  text: "**Calculer y pour les coordonnées complètes.**",
                  example: { lines: ["y = g(4) = 10 € → intersection (4 ; 10)"] },
                },
                {
                  number: "3",
                  text: "**Interpréter dans le contexte.**",
                  example: { lines: ["En dessous de 4 km : B moins cher", "Au-delà de 4 km : A moins cher"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Trouver l'intersection de f(x) = x + 2 et g(x) = 3x − 4.",
              correction: [
                { type: "line", text: "x + 2 = 3x − 4 → 6 = 2x → x = 3, puis y = 3 + 2 = 5. Intersection **(3 ; 5)**." },
                { type: "note", text: "On résout f(x) = g(x), puis on calcule y." },
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
              title: "Fonctions : notion, linéaires et affines",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_FONCTIONS_LINEAIRES_AFFINES,
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
              title: "Fonctions : notion, linéaires et affines",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_FONCTIONS_LINEAIRES_AFFINES,
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
              center: { title: "Fonctions", subtitle: "linéaires et affines" },
              branches: [
                {
                  title: "Notion de fonction",
                  variant: "blue",
                  lines: ["Une seule image par antécédent", "Image : calculer f(x)", "Antécédent : résoudre f(x) = k"],
                },
                {
                  title: "Notations et graphique",
                  variant: "blue",
                  lines: ["f(x), x ↦ f(x)", "Tableau de valeurs → points", "Lecture dans les deux sens"],
                },
                {
                  title: "Fonction linéaire",
                  variant: "green",
                  lines: ["f(x) = ax", "Droite par l'origine", "= proportionnalité"],
                },
                {
                  title: "Fonction affine",
                  variant: "green",
                  lines: ["f(x) = ax + b", "a = pente, b = ordonnée à l'origine", "f(0) = b"],
                },
                {
                  title: "Lire et tracer",
                  variant: "yellow",
                  lines: ["b : coupe l'axe y", "a = (y₂ − y₁) ÷ (x₂ − x₁)", "Tracer avec 2 points"],
                },
                {
                  title: "Intersection",
                  variant: "purple",
                  dashed: true,
                  lines: ["Résoudre f(x) = g(x)", "Comparer deux tarifs"],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
