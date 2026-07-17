import type { Fiche } from "@/components/fiche/types";
import { COPIES_REPERAGE_COORDONNEES } from "./copies-reperage-coordonnees";
import { EXERCICES_REPERAGE_COORDONNEES } from "./exercices-reperage-coordonnees";

export const SAVOIR_FAIRE = [
  { id: "coordonnees", label: "Lire et placer des coordonnées" },
  { id: "distance", label: "Calculer une distance" },
  { id: "milieu", label: "Calculer un milieu" },
  { id: "equation-droite", label: "Déterminer l'équation d'une droite" },
  { id: "positions", label: "Parallèles, perpendiculaires, intersection" },
  { id: "appartenance", label: "Appartenance et intersection avec les axes" },
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
  metaTitle: "Repérage et coordonnées dans le plan · Fiche de révision CRPE",
  metaDescription:
    "Fiche CRPE sur le repérage dans le plan : repère orthonormé, coordonnées d'un point, distance entre deux points, milieu d'un segment, équation d'une droite y = ax + b et lecture graphique. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                  text: "Reconnaître les triplets remarquables fait gagner du temps : 3-4-5 (et son double 6-8-10), 5-12-13. Si vous tombez sur √25 = 5 ou √100 = 10, c'est souvent un triplet. Ces triplets et le théorème de Pythagore sont détaillés dans la [fiche N°21](fiche:theoreme-de-pythagore).",
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
                  number: "3",
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
              title: "Repérage et coordonnées dans le plan",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_REPERAGE_COORDONNEES,
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
              title: "Repérage et coordonnées dans le plan",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_REPERAGE_COORDONNEES,
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
      ],
    },
  ],
};
