import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je place et je lis un point M(x ; y) sans confondre abscisse et ordonnée" },
  { id: "e2", label: "Je calcule la distance AB = √[(xB − xA)² + (yB − yA)²] sans oublier les carrés" },
  { id: "e3", label: "Je calcule les coordonnées du milieu d'un segment (moyenne des coordonnées)" },
  { id: "e4", label: "Je détermine l'équation y = ax + b d'une droite à partir de deux points" },
  { id: "e5", label: "Je sais que a est la pente (Δy/Δx) et b l'ordonnée à l'origine (y quand x = 0)" },
  { id: "e6", label: "Je vérifie si un point appartient à une droite en substituant ses coordonnées" },
  { id: "e7", label: "Je trouve l'intersection de deux droites en égalisant leurs équations" },
  { id: "e8", label: "Je reconnais deux droites parallèles (même a) ou perpendiculaires (a₁ × a₂ = −1)" },
  { id: "e9", label: "Je trouve où une droite coupe l'axe des x (poser y = 0) et l'axe des y (poser x = 0)" },
];

export const ficheReperageCoordonnees: Fiche = {
  slug: "reperage-coordonnees",
  matiere: "mathematiques",
  numero: 17,
  partie: "Partie 4 : Espace et géométrie plane",
  title: "Repérage et coordonnées dans le plan",
  subtitle:
    "Repère orthonormé · coordonnées d'un point · distance entre deux points · milieu d'un segment · équation d'une droite y = ax + b · lecture graphique",
  badges: [
    { label: "★★★ Incontournable", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème D", variant: "info" },
  ],
  metaTitle: "Repérage et coordonnées dans le plan (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur le repérage dans le plan : repère orthonormé, coordonnées d'un point, distance entre deux points, milieu d'un segment, équation d'une droite y = ax + b et lecture graphique. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                { number: "①", title: "Le repère orthonormé", text: "Origine, axes, et les coordonnées d'un point M(x ; y)." },
                { number: "②", title: "Distance et milieu", text: "La distance entre deux points (Pythagore) et le milieu d'un segment." },
                { number: "③", title: "Équation d'une droite", text: "y = ax + b : pente, ordonnée à l'origine, parallèles et perpendiculaires." },
                { number: "④", title: "Lire un graphique", text: "Coordonnées, appartenance à une droite, intersection." },
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
              title: "Le langage commun de la géométrie et des fonctions",
              text: "Placer un point, calculer une distance, trouver un milieu, tracer une droite y = ax + b : ces compétences reviennent dans presque tous les sujets, souvent au détour d'un exercice de fonctions ou de géométrie. C'est aussi une compétence transversale (sciences, statistiques, géographie). L'équation y = ax + b est celle des fonctions affines ([fiche N°14](fiche:fonctions-lineaires-affines)) ; ici, on l'exploite géométriquement dans le repère.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Le repère orthonormé et les coordonnées",
              blocks: [
                {
                  type: "paragraph",
                  text: "Un **repère orthonormé** est défini par une origine **O**, un axe horizontal (axe des **abscisses**, x) et un axe vertical (axe des **ordonnées**, y), perpendiculaires, avec la même unité sur les deux axes. Un point se note **M(x ; y)** : abscisse d'abord, ordonnée ensuite.",
                },
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Lire les coordonnées",
                      variant: "info",
                      lines: ["A(3 ; 2) : abscisse 3, ordonnée 2.", "C(4 ; −1) : abscisse 4, ordonnée −1.", "O(0 ; 0) : l'origine."],
                    },
                    {
                      title: "Placer un point",
                      variant: "info",
                      lines: ["Partir de O.", "Avancer de x (→ si x > 0, ← sinon).", "Monter de y (↑ si y > 0, ↓ sinon)."],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Notation française et ordre des coordonnées",
                  text: "On écrit M(x ; y) avec un point-virgule : A(3 ; 2), pas A(3, 2). Et l'abscisse (horizontal) vient toujours en premier. Confondre abscisse et ordonnée est l'erreur n°1.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Distance entre deux points et milieu",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Les deux formules fondamentales",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "**Distance : AB = √[(xB − xA)² + (yB − yA)²]**",
                        "**Milieu : M( (xA + xB) ÷ 2 ; (yA + yB) ÷ 2 )**",
                      ],
                      note: "La distance est le théorème de Pythagore appliqué au triangle rectangle formé par A, B et leur projection. Le milieu est la moyenne des coordonnées.",
                    },
                    {
                      type: "paragraph",
                      text: "Exemple : A(1 ; 2) et B(4 ; 6). AB = √[(4 − 1)² + (6 − 2)²] = √[9 + 16] = √25 = 5. Milieu : ((1 + 4) ÷ 2 ; (2 + 6) ÷ 2) = (2,5 ; 4).",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "💡 Triplets pythagoriciens",
                  text: "Reconnaître les triplets remarquables fait gagner du temps : 3-4-5 (et son double 6-8-10), 5-12-13. Si vous tombez sur √25 = 5 ou √100 = 10, c'est souvent un triplet.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Équation d'une droite dans le repère",
              blocks: [
                {
                  type: "paragraph",
                  text: "Toute droite non verticale a une équation **y = ax + b**, où **a est le coefficient directeur** (pente) et **b l'ordonnée à l'origine** (y quand x = 0).",
                },
                {
                  type: "table",
                  headers: ["Élément", "Définition", "Exemple y = 2x − 3"],
                  rows: [
                    ["Coefficient directeur a", "a = (yB − yA) ÷ (xB − xA)", "a = 2 (monte de 2 quand x augmente de 1)"],
                    ["Ordonnée à l'origine b", "y quand x = 0", "b = −3 (coupe l'axe y en −3)"],
                    ["Droites parallèles", "même coefficient a", "y = 2x + 5 // y = 2x − 3"],
                    ["Droites perpendiculaires", "a₁ × a₂ = −1", "y = 2x et y = −½x"],
                    ["Droite verticale", "x = c (pas de y = ax + b)", "x = 4, pente infinie"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Droites horizontales et verticales",
                  text: "Une droite horizontale a pour équation y = b (pente nulle, a = 0). Une droite verticale a pour équation x = c : elle n'a pas d'équation de la forme y = ax + b (sa pente est infinie).",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Lire et interpréter un graphique",
              blocks: [
                {
                  type: "paragraph",
                  text: "Le graphique sert souvent de support à un problème. Il faut savoir lire des coordonnées, déterminer l'équation d'une droite tracée, et vérifier l'appartenance d'un point.",
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Déterminer l'équation d'une droite tracée",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "Méthode en 2 étapes : lire deux points à coordonnées entières (par exemple A(0 ; 2) et B(3 ; 8)), puis calculer a = (8 − 2) ÷ (3 − 0) = 2 et lire b = 2 (ordonnée en x = 0). Équation : y = 2x + 2. Vérifier avec les deux points.",
                    },
                    {
                      type: "paragraph",
                      text: "Pour lire un antécédent : « pour quelle valeur de x a-t-on y = 5 ? », tracer la ligne y = 5 et lire l'abscisse du point d'intersection avec la courbe.",
                    },
                  ],
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : inverser abscisse et ordonnée",
              badge: "Très fréquent",
              faux: "Placer A(3 ; −2) à 3 cases en haut et 2 à droite.",
              vrai: "Abscisse 3 (horizontal), ordonnée −2 (vertical) : 3 cases à droite, 2 cases vers le bas.",
              methode: "M(x ; y) = M(horizontal ; vertical). x = axe des x = horizontal.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : oublier les carrés dans la distance",
              badge: "Classique",
              faux: "AB = √[(4 − 1) + (6 − 2)] = √7.",
              vrai: "AB = √[(4 − 1)² + (6 − 2)²] = √[9 + 16] = √25 = 5.",
              methode: "C'est Pythagore : élever au carré chaque écart AVANT d'additionner.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : confondre a et b dans y = ax + b",
              badge: "Fréquent",
              faux: "Par A(0 ; 4) et B(2 ; 8) : a = 4, b = (8 − 4) ÷ 2 = 2.",
              vrai: "a = (8 − 4) ÷ (2 − 0) = 2 (pente), b = 4 (ordonnée en x = 0). Donc y = 2x + 4.",
              methode: "a se calcule (Δy/Δx) ; b se lit en x = 0.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : erreur de signe avec des coordonnées négatives",
              badge: "Piège courant",
              faux: "A(−3 ; 2), B(1 ; −4) : xB − xA = 1 − 3 = −2.",
              vrai: "xB − xA = 1 − (−3) = 1 + 3 = 4 ; yB − yA = −4 − 2 = −6.",
              methode: "Quand une coordonnée est négative, l'écrire entre parenthèses : 1 − (−3) = 1 + 3.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école : le regard du futur enseignant",
              text: "Au cycle 3, les élèves découvrent le repérage sur quadrillage et sur droite graduée : ils placent des points, lisent des coordonnées et représentent des données dans un tableau. C'est la base pour lire les graphiques de toutes les disciplines.\n\nAu cycle 4, le repère orthonormé est formalisé (coordonnées négatives, distance entre deux points, équations de droites). Le jury attend qu'on relie « repérage » et « fonctions » : une droite dans un repère est la représentation graphique d'une fonction affine.\n\nCe que le jury valorise : savoir que le repérage est une compétence transversale, et que les élèves confondent souvent abscisse et ordonnée. D'où l'importance d'ancrer tôt la convention x = horizontal, y = vertical.",
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
              text: "Identifier ce qu'on cherche (distance, milieu, équation, intersection), appliquer la formule, vérifier (souvent avec un second point). Chaque savoir-faire se termine par une vérification.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Distance et milieu",
              intro:
                "**Question type :** « A(−2 ; 1) et B(4 ; 9). Calculer AB et le milieu M de [AB]. »",
              steps: [
                {
                  number: "1",
                  text: "**Calculer les écarts de coordonnées.**",
                  example: { lines: ["xB − xA = 4 − (−2) = 6", "yB − yA = 9 − 1 = 8"] },
                  warn: "⚠️ Attention aux négatifs : 4 − (−2) = 6.",
                },
                {
                  number: "2",
                  text: "**Appliquer la formule de la distance.**",
                  example: { lines: ["AB = √(6² + 8²) = √100 = 10"] },
                },
                {
                  number: "3",
                  text: "**Calculer le milieu (moyenne des coordonnées).**",
                  example: { lines: ["M((−2 + 4) ÷ 2 ; (1 + 9) ÷ 2) = M(1 ; 5)"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "A(2 ; 5) et B(6 ; 2). Calculer AB et le milieu.",
              correction: [
                { type: "line", text: "AB = √[(6 − 2)² + (2 − 5)²] = √[16 + 9] = √25 = **5**. Milieu : **(4 ; 3,5)**." },
                { type: "note", text: "Distance : Pythagore ; milieu : moyenne des coordonnées." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Équation d'une droite passant par deux points",
              intro:
                "**Question type :** « Équation de (AB) avec A(1 ; 3) et B(4 ; 9). »",
              steps: [
                {
                  number: "1",
                  text: "**Calculer le coefficient directeur a.**",
                  example: { lines: ["a = (9 − 3) ÷ (4 − 1) = 6 ÷ 3 = 2"] },
                },
                {
                  number: "2",
                  text: "**Trouver b en substituant un point.**",
                  example: { lines: ["A(1 ; 3) : 3 = 2 × 1 + b → b = 1", "y = 2x + 1"] },
                },
                {
                  number: "3",
                  text: "**Vérifier avec le second point.**",
                  example: { lines: ["B(4 ; 9) : 2 × 4 + 1 = 9 ✓"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Équation de la droite passant par A(0 ; 3) et B(2 ; 7) ?",
              correction: [
                { type: "line", text: "a = (7 − 3) ÷ (2 − 0) = 2 ; b = 3. Donc **y = 2x + 3**." },
                { type: "note", text: "b se lit directement (ordonnée en x = 0)." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Appartenance d'un point, antécédent",
              intro:
                "**Question type :** « Droite y = 3x − 2. Le point C(3 ; 7) est-il dessus ? Pour quel x a-t-on y = 10 ? »",
              steps: [
                {
                  number: "1",
                  text: "**Tester l'appartenance en substituant.**",
                  example: { lines: ["3 × 3 − 2 = 7 = yC → C appartient à la droite"] },
                },
                {
                  number: "2",
                  text: "**Trouver l'antécédent : résoudre l'équation.**",
                  example: { lines: ["3x − 2 = 10 → 3x = 12 → x = 4"] },
                },
                {
                  number: "💡",
                  text: "**Vérifier.**",
                  example: { lines: ["3 × 4 − 2 = 10 ✓"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Le point B(2 ; 4) appartient-il à la droite y = 2x + 1 ?",
              correction: [
                { type: "line", text: "2 × 2 + 1 = 5 ≠ 4 : **non**, B n'appartient pas à la droite." },
                { type: "note", text: "On substitue les coordonnées et on compare." },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Intersection de deux droites",
              intro:
                "**Question type :** « d₁ : y = 2x + 1 et d₂ : y = −x + 7. Coordonnées du point I ? »",
              steps: [
                {
                  number: "1",
                  text: "**Égaliser les deux expressions.**",
                  example: { lines: ["2x + 1 = −x + 7 → 3x = 6 → x = 2"] },
                },
                {
                  number: "2",
                  text: "**Calculer y et vérifier dans l'autre équation.**",
                  example: { lines: ["y = 2 × 2 + 1 = 5 ; d₂ : −2 + 7 = 5 ✓", "I(2 ; 5)"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Où la droite y = 2x − 6 coupe-t-elle l'axe des x ?",
              correction: [
                { type: "line", text: "Axe des x : y = 0. 2x − 6 = 0 → x = 3. Intersection **(3 ; 0)**." },
                { type: "note", text: "Couper l'axe des x : poser y = 0 (et non x = 0)." },
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
                  question: "Pour placer A(3 ; −2), que fait-on à partir de l'origine ?",
                  options: ["3 cases en haut, 2 à droite", "3 cases à droite, 2 cases vers le bas", "3 cases à gauche, 2 en haut", "2 cases à droite, 3 vers le bas"],
                  correctIndex: 1,
                  explanation: "Abscisse 3 (horizontal) → 3 cases à droite ; ordonnée −2 (vertical) → 2 cases vers le bas.",
                },
                {
                  objectifId: "e2",
                  question: "Distance entre A(1 ; 2) et B(4 ; 6) ?",
                  options: ["√7", "5", "7", "25"],
                  correctIndex: 1,
                  explanation: "AB = √[(4 − 1)² + (6 − 2)²] = √[9 + 16] = √25 = 5. Ne pas oublier les carrés.",
                },
                {
                  objectifId: "e3",
                  question: "Milieu de [AB] avec A(2 ; 6) et B(8 ; 2) ?",
                  options: ["(3 ; 2)", "(5 ; 4)", "(6 ; 4)", "(10 ; 8)"],
                  correctIndex: 1,
                  explanation: "M((2 + 8) ÷ 2 ; (6 + 2) ÷ 2) = (5 ; 4). Le milieu est la moyenne des coordonnées.",
                },
                {
                  objectifId: "e4",
                  question: "Équation de la droite par A(0 ; 3) et B(2 ; 7) ?",
                  options: ["y = 4x + 3", "y = 2x + 3", "y = 2x + 7", "y = 3x + 2"],
                  correctIndex: 1,
                  explanation: "a = (7 − 3) ÷ (2 − 0) = 2 ; b = 3 (ordonnée en x = 0). Donc y = 2x + 3.",
                },
                {
                  objectifId: "e5",
                  question: "Dans y = 3x − 2, que vaut l'ordonnée à l'origine ?",
                  options: ["3", "−2", "2", "0"],
                  correctIndex: 1,
                  explanation: "b = −2 : la droite coupe l'axe des ordonnées en (0 ; −2). a = 3 est la pente.",
                },
                {
                  objectifId: "e6",
                  question: "Le point C(3 ; 7) appartient-il à la droite y = 3x − 2 ?",
                  options: ["Oui", "Non", "On ne peut pas savoir", "Seulement si x > 0"],
                  correctIndex: 0,
                  explanation: "3 × 3 − 2 = 7 = yC : oui, C appartient à la droite.",
                },
                {
                  objectifId: "e7",
                  question: "Intersection de y = x + 4 et y = −2x + 7 ?",
                  options: ["(1 ; 5)", "(3 ; 7)", "(2 ; 3)", "(5 ; 1)"],
                  correctIndex: 0,
                  explanation: "x + 4 = −2x + 7 → 3x = 3 → x = 1, puis y = 5. Intersection (1 ; 5).",
                },
                {
                  objectifId: "e8",
                  question: "Quelles droites sont perpendiculaires ?",
                  options: ["y = 2x et y = 2x + 3", "y = 2x et y = −½x", "y = 2x et y = −2x", "y = 3x et y = 3x − 1"],
                  correctIndex: 1,
                  explanation: "Perpendiculaires : a₁ × a₂ = −1. Ici 2 × (−½) = −1. Même pente (2 et 2) = parallèles.",
                },
                {
                  objectifId: "e9",
                  question: "Où la droite y = 2x − 6 coupe-t-elle l'axe des abscisses ?",
                  options: ["(0 ; −6)", "(3 ; 0)", "(−6 ; 0)", "(0 ; 3)"],
                  correctIndex: 1,
                  explanation: "Axe des x : y = 0. 2x − 6 = 0 → x = 3. Point (3 ; 0). (En x = 0, on a (0 ; −6), sur l'axe des y.)",
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
              text: "Notez bien l'ordre (x ; y), élevez au carré dans la distance, vérifiez avec un second point. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Coordonnées, distance, milieu",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : distance et milieu",
              objectifTag: "Distance, milieu",
              enonce: "On donne A(2 ; 5) et B(6 ; 2).",
              question: "a) Calculer la distance AB.\nb) Calculer le milieu M de [AB].\nc) Le point C(4 ; 3,5) est-il le milieu de [AB] ?",
              correction: [
                { type: "line", label: "a)", text: "AB = √[(6 − 2)² + (2 − 5)²] = √[16 + 9] = √25 = 5." },
                { type: "line", label: "b)", text: "M((2 + 6) ÷ 2 ; (5 + 2) ÷ 2) = (4 ; 3,5)." },
                { type: "line", label: "c)", text: "C(4 ; 3,5) = M : oui, C est le milieu de [AB]." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : équation de droite",
              objectifTag: "Équation y = ax + b",
              question: "a) Équation de la droite par A(0 ; 3) et B(2 ; 7).\nb) Le point C(5 ; 13) appartient-il à cette droite ?",
              correction: [
                { type: "line", label: "a)", text: "a = (7 − 3) ÷ (2 − 0) = 2 ; b = 3. Donc y = 2x + 3." },
                { type: "line", label: "b)", text: "y = 2 × 5 + 3 = 13 = yC : oui, C appartient à la droite." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : parallèles, perpendiculaires, intersection",
              sub: "Raisonnements sur les droites",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : familles de droites",
              objectifTag: "Parallèles et perpendiculaires",
              enonce: "On donne la droite d : y = 3x − 2.",
              question: "a) Équation d'une parallèle à d passant par (0 ; 5).\nb) Équation d'une perpendiculaire à d passant par (0 ; 1).\nc) Où d coupe-t-elle l'axe des abscisses ?",
              correction: [
                { type: "line", label: "a)", text: "Même pente a = 3, b = 5 : y = 3x + 5." },
                { type: "line", label: "b)", text: "Pente perpendiculaire a₂ = −1/3 (car 3 × (−1/3) = −1), b = 1 : y = −x/3 + 1." },
                { type: "line", label: "c)", text: "y = 0 : 3x − 2 = 0 → x = 2/3, point (2/3 ; 0)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : intersection et appartenance",
              objectifTag: "Intersection",
              enonce: "Les droites d₁ : y = x + 4 et d₂ : y = −2x + 7 se coupent en I.",
              question: "a) Coordonnées de I.\nb) Distance entre I et l'origine O.\nc) Le point A(2 ; 6) est-il sur d₁ ? Sur d₂ ?",
              correction: [
                { type: "line", label: "a)", text: "x + 4 = −2x + 7 → 3x = 3 → x = 1, y = 5. I(1 ; 5)." },
                { type: "line", label: "b)", text: "OI = √(1² + 5²) = √26 ≈ 5,1." },
                { type: "line", label: "c)", text: "d₁ : 2 + 4 = 6 ✓ ; d₂ : −4 + 7 = 3 ≠ 6 → A est sur d₁ mais pas sur d₂." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : repérage et géométrie",
              sub: "Triangle dans un repère",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : triangle dans un repère",
              objectifTag: "Distances et nature",
              enonce: "On donne A(0 ; 0), B(4 ; 0) et C(2 ; 4).",
              question: "a) Calculer AB, BC et AC.\nb) Le triangle ABC est-il isocèle ? Justifier.\nc) Calculer le milieu M de [BC].",
              correction: [
                { type: "line", label: "a)", text: "AB = √16 = 4 ; BC = √(4 + 16) = 2√5 ; AC = √(4 + 16) = 2√5." },
                { type: "line", label: "b)", text: "BC = AC = 2√5 : le triangle est isocèle en C." },
                { type: "line", label: "c)", text: "M((4 + 2) ÷ 2 ; (0 + 4) ÷ 2) = (3 ; 2)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : raisonnement complet",
              sub: "Médiane, perpendicularité",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 4 : médiane et hauteur",
              objectifTag: "Repérage et géométrie",
              enonce: "On reprend A(0 ; 0), B(4 ; 0), C(2 ; 4), et M(3 ; 2) le milieu de [BC].",
              question:
                "a) Déterminer l'équation de la droite (AM).\nb) La droite (AM) est-elle perpendiculaire à (BC) ? Justifier.\nc) Le triangle étant isocèle en C, quel est son axe de symétrie ?",
              correction: [
                { type: "line", label: "a)", text: "(AM) passe par A(0 ; 0) et M(3 ; 2) : a = 2/3, b = 0 → y = (2/3)x." },
                { type: "line", label: "b)", text: "Pente de (BC) = (4 − 0) ÷ (2 − 4) = −2 ; (2/3) × (−2) = −4/3 ≠ −1 : non, (AM) n'est pas perpendiculaire à (BC)." },
                { type: "line", label: "c)", text: "L'axe de symétrie passe par C et le milieu de [AB] : c'est la droite verticale x = 2 (et non la médiane issue de A)." },
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
              text: "Cet exercice reproduit le format d'un sujet de concours, qui combine repérage, équations de droites et aire. Comptez 20 minutes, en conditions réelles.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 5 : le jardin partagé",
              objectifTag: "Repérage, droites, aire",
              enonce:
                "Un jardin est représenté dans un repère orthonormé (unité : 1 mètre). Les coins sont A(1 ; 1), B(9 ; 1), C(9 ; 7), D(1 ; 7). Une allée relie A à C. Une fontaine F est au milieu de [BD].",
              question:
                "1.1 Vérifier que ABCD est un rectangle (calculer AB, BC).\n1.2 Calculer la diagonale AC.\n1.3 Coordonnées de la fontaine F (milieu de [BD]).\n2.1 Équation de la droite (AC).\n2.2 Un banc est en G(5 ; 4) : est-il sur l'allée ? Justifier.\n2.3 Équation de la perpendiculaire à (AC) passant par F.\n3.1 Aire du jardin.\n3.2 L'allée partage le jardin en deux triangles : aire de chacun.",
              correction: [
                { type: "line", label: "1.1", text: "AB = √[(9 − 1)² + 0] = 8 ; BC = √[0 + (7 − 1)²] = 6. Côtés horizontaux et verticaux → angles droits → rectangle." },
                { type: "line", label: "1.2", text: "AC = √[(9 − 1)² + (7 − 1)²] = √[64 + 36] = √100 = 10 m." },
                { type: "line", label: "1.3", text: "F((9 + 1) ÷ 2 ; (1 + 7) ÷ 2) = (5 ; 4)." },
                { type: "line", label: "2.1", text: "a = (7 − 1) ÷ (9 − 1) = 6/8 = 3/4 ; b : 1 = (3/4) × 1 + b → b = 1/4. Donc y = (3/4)x + 1/4." },
                { type: "line", label: "2.2", text: "G(5 ; 4) : (3/4) × 5 + 1/4 = 15/4 + 1/4 = 4 = yG → G est sur l'allée (et confondu avec F)." },
                { type: "line", label: "2.3", text: "Pente perpendiculaire à 3/4 : −4/3. Par F(5 ; 4) : 4 = −(4/3) × 5 + b → b = 32/3. Donc y = −(4/3)x + 32/3." },
                { type: "line", label: "3.1", text: "Rectangle : 8 × 6 = 48 m²." },
                { type: "line", label: "3.2", text: "La diagonale partage le rectangle en deux triangles égaux : 48 ÷ 2 = 24 m² chacun." },
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
              title: "Erreur type · Exercice 6 : abscisse et ordonnée inversées",
              objectifTag: "Coordonnées",
              enonce: "**Copie d'un candidat :** placer A(3 ; −2).\n*Réponse produite :* « 3 cases vers le haut et 2 cases à droite ».",
              question: "a) Identifier l'erreur.\nb) Donner le placement correct.",
              correction: [
                { type: "paragraph", text: "**Erreur : abscisse et ordonnée inversées.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "A(3 ; −2) : 3 est l'abscisse (horizontal), −2 l'ordonnée (vertical)." },
                    { text: "Partir de O, aller 3 cases à droite, puis 2 cases vers le bas." },
                  ],
                },
                { type: "note", text: "M(x ; y) = M(horizontal ; vertical). x = axe des x = horizontal." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 7 : carrés oubliés dans la distance",
              objectifTag: "Distance",
              enonce: "**Copie d'un candidat :** distance entre A(1 ; 2) et B(4 ; 6).\n*Réponse produite :* « AB = √(4 − 1 + 6 − 2) = √7 ».",
              question: "a) Identifier l'erreur.\nb) Donner la distance correcte.",
              correction: [
                { type: "paragraph", text: "**Erreur : différences non élevées au carré.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "La formule est √[(Δx)² + (Δy)²], pas √[Δx + Δy]." },
                    { text: "AB = √[(4 − 1)² + (6 − 2)²] = √[9 + 16] = √25 = 5." },
                  ],
                },
                { type: "note", text: "C'est Pythagore : élever au carré chaque écart avant d'additionner." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 8 : signe d'une coordonnée négative",
              objectifTag: "Écarts de coordonnées",
              enonce: "**Copie d'un candidat :** A(−3 ; 2) et B(1 ; −4). Calculer xB − xA.\n*Réponse produite :* « 1 − 3 = −2 ».",
              question: "a) Identifier l'erreur.\nb) Donner le bon écart.",
              correction: [
                { type: "paragraph", text: "**Erreur : signe de xA ignoré.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "xA = −3, donc xB − xA = 1 − (−3), pas 1 − 3." },
                    { text: "xB − xA = 1 − (−3) = 1 + 3 = 4 ; yB − yA = −4 − 2 = −6." },
                  ],
                },
                { type: "note", text: "Écrire les coordonnées négatives entre parenthèses : 1 − (−3) = 1 + 3." },
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
                  question: "Comment lire les coordonnées d'un point M(x ; y) ?",
                  answer:
                    "x est l'abscisse (horizontal, axe des x), y l'ordonnée (vertical, axe des y). Pour placer M : partir de O, aller x cases à droite (ou gauche), puis y cases en haut (ou bas).",
                  astuce: "x = axe des x = horizontal = premier chiffre. Ne pas inverser.",
                },
                {
                  question: "Formule de la distance entre deux points ?",
                  answer:
                    "AB = √[(xB − xA)² + (yB − yA)²]. C'est le théorème de Pythagore appliqué au triangle rectangle formé par A, B et leur projection. Exemple : A(1 ; 2), B(4 ; 6) → √(9 + 16) = 5.",
                  astuce: "Ne pas oublier les carrés : √(Δx + Δy) est faux.",
                },
                {
                  question: "Coordonnées du milieu M de [AB] ?",
                  answer:
                    "xM = (xA + xB) ÷ 2, yM = (yA + yB) ÷ 2 : moyenne des abscisses, moyenne des ordonnées. A(2 ; 6) et B(8 ; 2) → M(5 ; 4).",
                  astuce: "C'est une moyenne (somme ÷ 2), pas une différence.",
                },
                {
                  question: "Que représentent a et b dans y = ax + b ?",
                  answer:
                    "a est le coefficient directeur (pente) = Δy/Δx ; b est l'ordonnée à l'origine (y quand x = 0). y = 3x − 2 : pente 3, coupe l'axe y en −2.",
                  astuce: "a se calcule, b se lit en x = 0.",
                },
                {
                  question: "Comment déterminer l'équation d'une droite par deux points ?",
                  answer:
                    "Calculer a = (yB − yA) ÷ (xB − xA), puis trouver b en substituant un point dans y = ax + b. Vérifier avec le second point.",
                },
                {
                  question: "Parallèles ou perpendiculaires : comment savoir ?",
                  answer:
                    "Parallèles : même coefficient directeur a. Perpendiculaires : a₁ × a₂ = −1. Exemple : y = 2x et y = −½x sont perpendiculaires (2 × (−½) = −1).",
                  astuce: "Perpendiculaires ≠ pentes opposées : c'est a₂ = −1/a₁.",
                },
                {
                  question: "Comment vérifier qu'un point appartient à une droite ?",
                  answer:
                    "Substituer ses coordonnées dans l'équation. Si l'égalité est vérifiée, le point appartient à la droite. y = 2x + 1, A(3 ; 7) : 2 × 3 + 1 = 7 ✓.",
                },
                {
                  question: "Comment trouver l'intersection de deux droites ?",
                  answer:
                    "Au point d'intersection, les y sont égaux : égaliser les deux expressions, résoudre en x, puis calculer y. Vérifier dans les deux équations.",
                },
                {
                  question: "Équation de l'axe des x ? De l'axe des y ?",
                  answer:
                    "Axe des x (horizontal) : y = 0. Axe des y (vertical) : x = 0. Pour savoir où une droite coupe l'axe des x, poser y = 0 ; pour l'axe des y, poser x = 0 (on obtient b).",
                  astuce: "Erreur fréquente : poser x = 0 pour couper l'axe des x.",
                },
                {
                  question: "Comment reconnaître une droite horizontale ou verticale ?",
                  answer:
                    "Horizontale : y = b (pente nulle, a = 0). Verticale : x = c (pente infinie, pas d'équation y = ax + b).",
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
              center: { title: "Repérage", subtitle: "coordonnées dans le plan" },
              branches: [
                {
                  title: "Le repère",
                  variant: "blue",
                  lines: ["M(x ; y) : abscisse, ordonnée", "x horizontal, y vertical", "Point-virgule, x en premier"],
                },
                {
                  title: "Distance",
                  variant: "green",
                  lines: ["AB = √[(Δx)² + (Δy)²]", "C'est Pythagore", "Triplets 3-4-5, 6-8-10"],
                },
                {
                  title: "Milieu",
                  variant: "green",
                  lines: ["Moyenne des coordonnées", "((xA + xB)/2 ; (yA + yB)/2)"],
                },
                {
                  title: "Équation y = ax + b",
                  variant: "yellow",
                  lines: ["a = Δy/Δx (pente)", "b = ordonnée en x = 0", "Parallèles : même a"],
                },
                {
                  title: "Positions relatives",
                  variant: "yellow",
                  lines: ["Perpendiculaires : a₁ × a₂ = −1", "Intersection : égaliser les y"],
                },
                {
                  title: "Lire un graphique",
                  variant: "purple",
                  dashed: true,
                  lines: ["Appartenance : substituer", "Axe des x : y = 0 ; axe des y : x = 0"],
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
