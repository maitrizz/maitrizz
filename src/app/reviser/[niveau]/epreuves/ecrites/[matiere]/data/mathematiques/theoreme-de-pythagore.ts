import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "J'énonce le théorème de Pythagore : dans un triangle rectangle, le carré de l'hypoténuse égale la somme des carrés des deux autres côtés" },
  { id: "e2", label: "Je connais la démonstration par les aires" },
  { id: "e3", label: "J'utilise la réciproque pour démontrer qu'un triangle est rectangle" },
  { id: "e4", label: "J'utilise la contraposée pour démontrer qu'un triangle n'est pas rectangle (et le qualifier)" },
  { id: "e5", label: "Je calcule l'hypoténuse : c = √(a² + b²)" },
  { id: "e6", label: "Je calcule un côté de l'angle droit : b = √(c² − a²)" },
  { id: "e7", label: "Je reconnais les triplets pythagoriciens (3-4-5, 5-12-13, 8-15-17, 7-24-25) et leurs multiples" },
  { id: "e8", label: "J'applique Pythagore dans les solides (diagonale d'un pavé, hauteur d'une pyramide)" },
  { id: "e9", label: "Je rédige une justification rigoureuse et je prends toujours la racine positive d'une longueur" },
];

export const ficheTheoremeDePythagore: Fiche = {
  slug: "theoreme-de-pythagore",
  matiere: "mathematiques",
  numero: 21,
  partie: "Partie 4 : Espace et géométrie plane",
  title: "Théorème de Pythagore",
  subtitle:
    "Énoncé et démonstration par les aires · réciproque · contraposée · calculer une longueur · triplets pythagoriciens · applications dans les solides",
  badges: [
    { label: "★★★ Quasiment chaque sujet", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème D", variant: "info" },
  ],
  metaTitle: "Théorème de Pythagore (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur le théorème de Pythagore : énoncé, démonstration par les aires, réciproque, contraposée, calcul de longueurs, triplets pythagoriciens et applications dans les solides. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                { number: "①", title: "Énoncé et démonstration", text: "c² = a² + b², et la preuve classique par les aires." },
                { number: "②", title: "Réciproque et contraposée", text: "Démontrer qu'un triangle est rectangle, ou qu'il ne l'est pas." },
                { number: "③", title: "Calculer une longueur", text: "L'hypoténuse ou un côté de l'angle droit, et les triplets pythagoriciens." },
                { number: "④", title: "Applications 3D", text: "Diagonale d'un pavé, hauteur d'une pyramide : Pythagore dans les solides." },
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
              title: "Le théorème le plus utilisé de la géométrie",
              text: "Pythagore ne sert pas qu'à calculer une longueur : il permet de démontrer qu'un triangle est rectangle (réciproque), qu'il ne l'est pas (contraposée), et de résoudre des problèmes dans les solides (diagonale d'un cube, hauteur d'une pyramide). Le jury attend trois choses : l'énoncer rigoureusement, maîtriser réciproque et contraposée, et soigner la rédaction. La racine carrée ([fiche N°4](fiche:puissances-racines-reels)) intervient naturellement ici.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Énoncé et démonstration par les aires",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Le théorème",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "Si un triangle est rectangle en A, alors :",
                        "**BC² = AB² + AC²**",
                        "Le carré de l'hypoténuse = somme des carrés des deux autres côtés.",
                      ],
                      note: "L'hypoténuse est le côté opposé à l'angle droit (le plus long). Avec c = hypoténuse : c² = a² + b².",
                    },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Démonstration par les aires (à connaître)",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "On construit un grand carré de côté (a + b) de deux façons, et on égalise les aires.",
                    },
                    {
                      type: "formulaBlock",
                      lines: [
                        "Aire du grand carré : (a + b)² = a² + 2ab + b²",
                        "Disposition 1 : 4 triangles + carré central → 2ab + c²",
                        "Disposition 2 : 4 triangles + a² + b² → 2ab + a² + b²",
                        "En égalisant : c² = a² + b²",
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Réciproque et contraposée",
              blocks: [
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Réciproque : prouver que c'est rectangle",
                      variant: "success",
                      lines: [
                        "Si BC² = AB² + AC², alors le triangle est rectangle en A.",
                        "On compare le carré du plus grand côté à la somme des carrés des deux autres.",
                        "9, 12, 15 : 15² = 225 = 81 + 144 → rectangle.",
                      ],
                    },
                    {
                      title: "Contraposée : prouver que ce n'est pas rectangle",
                      variant: "warning",
                      lines: [
                        "Si BC² ≠ AB² + AC², alors le triangle n'est pas rectangle.",
                        "5, 7, 9 : 9² = 81 ≠ 25 + 49 = 74 → non rectangle.",
                        "81 > 74 → obtusangle (si <, acutangle).",
                      ],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "💡 Les trois versions à distinguer",
                  text: "Direct : rectangle → c² = a² + b² (calculer une longueur). Réciproque : c² = a² + b² → rectangle (prouver que c'est rectangle). Contraposée : c² ≠ a² + b² → pas rectangle (prouver que ce n'est PAS rectangle). La réciproque suppose que les longueurs forment bien un triangle.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Calculer une longueur et reconnaître un triplet",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "Hypoténuse : c = √(a² + b²) (ex. a = 3, b = 4 → c = 5)",
                    "Côté de l'angle droit : b = √(c² − a²) (ex. c = 13, a = 5 → b = 12)",
                  ],
                  note: "Ne jamais oublier de prendre la racine carrée à la fin. Une longueur est positive : pas de ± devant la racine.",
                },
                {
                  type: "table",
                  headers: ["Triplet de base", "Multiples courants", "Vérification"],
                  rows: [
                    ["(3, 4, 5)", "(6, 8, 10) · (9, 12, 15)", "9 + 16 = 25"],
                    ["(5, 12, 13)", "(10, 24, 26)", "25 + 144 = 169"],
                    ["(8, 15, 17)", "(16, 30, 34)", "64 + 225 = 289"],
                    ["(7, 24, 25)", "(14, 48, 50)", "49 + 576 = 625"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Tout multiple d'un triplet est un triplet : (3, 4, 5) × k donne (3k, 4k, 5k). Les reconnaître évite les calculs de racines (reconnaître 5-12-13 évite de calculer √169).",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Applications dans les solides",
              blocks: [
                {
                  type: "paragraph",
                  text: "Pythagore s'applique en 3D en identifiant un triangle rectangle caché dans une coupe.",
                },
                {
                  type: "cardGrid",
                  columns: 3,
                  cards: [
                    { title: "Diagonale d'un rectangle", variant: "info", lines: ["d² = L² + l²", "6 × 8 → d = √100 = 10"] },
                    { title: "Diagonale d'un pavé", variant: "info", lines: ["d² = L² + l² + h²", "Cube d'arête a → d = a√3"] },
                    { title: "Hauteur d'un isocèle", variant: "info", lines: ["h² = côté² − (base/2)²", "côtés 10, base 12 → h = 8"] },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "💡 Diagonale du pavé en deux étapes",
                  text: "On calcule d'abord la diagonale de la base (d_base² = L² + l²), puis la diagonale du pavé (d² = d_base² + h²). Cela revient à d² = L² + l² + h².",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : oublier de prendre la racine carrée",
              badge: "Très fréquent",
              faux: "a = 3, b = 4 : c = 3² + 4² = 25.",
              vrai: "c² = 25, donc c = √25 = 5. La racine est l'étape finale obligatoire.",
              methode: "Pythagore donne le CARRÉ de la longueur : penser à conclure par la racine.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : confondre hypoténuse et côté de l'angle droit",
              badge: "Classique",
              faux: "Chercher un côté de l'angle droit avec c² = a² + b².",
              vrai: "Pour un côté de l'angle droit : b² = c² − a² (on soustrait, on ne somme pas).",
              methode: "Repérer d'abord l'hypoténuse (le plus grand côté, opposé à l'angle droit).",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : confondre réciproque et contraposée",
              badge: "Logique",
              faux: "Conclure « rectangle » à partir de c² ≠ a² + b².",
              vrai: "c² = a² + b² → rectangle (réciproque) ; c² ≠ a² + b² → pas rectangle (contraposée).",
              methode: "Comparer le carré du plus grand côté à la somme des carrés des deux autres, puis choisir la version.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : appliquer Pythagore sans angle droit",
              badge: "Conceptuel",
              faux: "Utiliser c² = a² + b² dans un triangle quelconque.",
              vrai: "Le théorème direct n'est valable que si le triangle est rectangle (à vérifier ou justifier).",
              methode: "Citer l'angle droit : « par le théorème de Pythagore dans le triangle ABC rectangle en A ».",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école : le regard du futur enseignant",
              text: "Pythagore est introduit en 4e (cycle 4), pas à l'école primaire. En CM, les élèves calculent périmètres et aires et construisent des figures, sans le théorème. Des élèves curieux peuvent croiser le triplet (3, 4, 5) dans des problèmes de construction.\n\nCe qu'il faut maîtriser pour le CRPE : énoncer les trois formes (directe, réciproque, contraposée), distinguer ce qu'on cherche à prouver, calculer une longueur, résoudre en 3D en deux étapes. Le jury valorise la rédaction : « par le théorème de Pythagore appliqué au triangle ABC rectangle en A », pas un calcul nu.\n\nC'est aussi l'un des rares contextes où la racine carrée intervient naturellement à l'école : l'occasion de revoir √(a²) = a pour a ≥ 0 ([fiche N°4](fiche:puissances-racines-reels)).",
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
              title: "La moitié des points se gagne à la rédaction",
              text: "Toujours identifier l'angle droit, nommer l'hypoténuse, et préciser la version utilisée (directe, réciproque, contraposée). Chaque savoir-faire se termine par une vérification.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Calculer une longueur (théorème direct)",
              intro:
                "**Question type :** « Triangle ABC rectangle en B, AB = 5, BC = 12. Calculer AC. »",
              steps: [
                {
                  number: "1",
                  text: "**Identifier l'angle droit et l'hypoténuse.**",
                  example: { lines: ["Rectangle en B → hypoténuse AC (opposée à B)"] },
                },
                {
                  number: "2",
                  text: "**Écrire la relation et calculer.**",
                  example: { lines: ["AC² = AB² + BC² = 25 + 144 = 169 → AC = √169 = 13"] },
                },
                {
                  number: "3",
                  text: "**Conclure (longueur positive).**",
                  example: { lines: ["AC = 13 cm (jamais de ± devant la racine)"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Triangle rectangle en A, AB = 6, AC = 8. Calculer BC.",
              correction: [
                { type: "line", text: "BC² = 6² + 8² = 36 + 64 = 100 → BC = **10** (triplet 6-8-10)." },
                { type: "note", text: "BC est l'hypoténuse (opposée à l'angle droit en A)." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Calculer un côté de l'angle droit",
              intro:
                "**Question type :** « Triangle rectangle en A, hypoténuse BC = 15, AB = 9. Calculer AC. »",
              steps: [
                {
                  number: "1",
                  text: "**Repérer que l'inconnue est un côté de l'angle droit.**",
                  example: { lines: ["BC est l'hypoténuse, AC un côté de l'angle droit"] },
                },
                {
                  number: "2",
                  text: "**Soustraire (et non sommer).**",
                  example: { lines: ["AC² = BC² − AB² = 225 − 81 = 144 → AC = 12"] },
                  warn: "⚠️ Pour un côté de l'angle droit, on soustrait : c² − a².",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Triangle rectangle en A, hypoténuse BC = 13, AB = 5. Calculer AC.",
              correction: [
                { type: "line", text: "AC² = 13² − 5² = 169 − 25 = 144 → AC = **12** (triplet 5-12-13)." },
                { type: "note", text: "On soustrait car AC est un côté de l'angle droit." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Démontrer qu'un triangle est (ou n'est pas) rectangle",
              intro:
                "**Question type :** « DEF avec DE = 9, EF = 40, DF = 41 est-il rectangle ? Et GHI avec 4, 6, 7 ? »",
              steps: [
                {
                  number: "1",
                  text: "**Identifier le plus grand côté.**",
                  example: { lines: ["DF = 41 ; GI = 7"] },
                },
                {
                  number: "2",
                  text: "**Comparer son carré à la somme des deux autres.**",
                  example: { lines: ["41² = 1681 = 9² + 40² → égalité", "7² = 49 ≠ 4² + 6² = 52"] },
                },
                {
                  number: "3",
                  text: "**Conclure avec réciproque ou contraposée.**",
                  example: { lines: ["DEF rectangle en E (réciproque)", "GHI non rectangle ; 49 < 52 → acutangle (contraposée)"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Le triangle de côtés 5, 7, 9 est-il rectangle ?",
              correction: [
                { type: "line", text: "9² = 81 ; 5² + 7² = 74 ; 81 ≠ 74 : **non rectangle**, et 81 > 74 → obtusangle (contraposée)." },
                { type: "note", text: "On compare le carré du plus grand côté à la somme des autres." },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Appliquer Pythagore dans un solide",
              intro:
                "**Question type :** « Pavé droit 3 × 4 × 12. Calculer la grande diagonale. »",
              steps: [
                {
                  number: "1",
                  text: "**Diagonale de la base.**",
                  example: { lines: ["d_base² = 3² + 4² = 25 → d_base = 5"] },
                },
                {
                  number: "2",
                  text: "**Pythagore une seconde fois avec la hauteur.**",
                  example: { lines: ["d² = d_base² + h² = 25 + 144 = 169 → d = 13"] },
                },
                {
                  number: "💡",
                  text: "**Formule directe possible.**",
                  example: { lines: ["d² = L² + l² + h² = 9 + 16 + 144 = 169"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Quelle est la grande diagonale d'un cube d'arête a ?",
              correction: [
                { type: "line", text: "d² = a² + a² + a² = 3a² → d = **a√3**." },
                { type: "note", text: "Trois fois le carré de l'arête, puis racine." },
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
                  question: "Dans un triangle rectangle, que vaut le carré de l'hypoténuse ?",
                  options: ["La différence des carrés des deux autres côtés", "La somme des carrés des deux autres côtés", "Le produit des deux autres côtés", "La somme des deux autres côtés"],
                  correctIndex: 1,
                  explanation: "Théorème de Pythagore : c² = a² + b², le carré de l'hypoténuse égale la somme des carrés des deux autres côtés.",
                },
                {
                  objectifId: "e5",
                  question: "Triangle rectangle, côtés de l'angle droit 3 et 4. Que vaut l'hypoténuse ?",
                  options: ["7", "5", "25", "12"],
                  correctIndex: 1,
                  explanation: "c = √(3² + 4²) = √25 = 5. Triplet pythagoricien 3-4-5.",
                },
                {
                  objectifId: "e6",
                  question: "Hypoténuse 13, un côté de l'angle droit 5. Que vaut l'autre côté ?",
                  options: ["18", "12", "8", "√194"],
                  correctIndex: 1,
                  explanation: "b = √(13² − 5²) = √(169 − 25) = √144 = 12. On soustrait pour un côté de l'angle droit.",
                },
                {
                  objectifId: "e3",
                  question: "Un triangle a pour côtés 9, 12, 15. Que peut-on conclure ?",
                  options: ["Il n'est pas rectangle", "Il est rectangle (réciproque)", "Il est équilatéral", "On ne peut rien dire"],
                  correctIndex: 1,
                  explanation: "15² = 225 = 9² + 12² = 81 + 144 : par la réciproque, le triangle est rectangle.",
                },
                {
                  objectifId: "e4",
                  question: "Un triangle a pour côtés 5, 7, 9. Que peut-on conclure ?",
                  options: ["Rectangle", "Non rectangle, et obtusangle", "Non rectangle, et acutangle", "Équilatéral"],
                  correctIndex: 2,
                  explanation: "9² = 81 et 5² + 7² = 74. 81 ≠ 74 → non rectangle (contraposée) ; 81 > 74 → obtusangle.",
                },
                {
                  objectifId: "e7",
                  question: "Lequel est un triplet pythagoricien ?",
                  options: ["(6, 7, 10)", "(8, 15, 17)", "(4, 5, 6)", "(2, 3, 4)"],
                  correctIndex: 1,
                  explanation: "8² + 15² = 64 + 225 = 289 = 17². Les autres ne vérifient pas a² + b² = c².",
                },
                {
                  objectifId: "e8",
                  question: "Quelle est la grande diagonale d'un cube d'arête a ?",
                  options: ["a√2", "a√3", "3a", "2a"],
                  correctIndex: 1,
                  explanation: "d² = a² + a² + a² = 3a², donc d = a√3.",
                },
                {
                  objectifId: "e9",
                  question: "On a trouvé c² = 49. Que vaut c (longueur) ?",
                  options: ["±7", "7", "49", "24,5"],
                  correctIndex: 1,
                  explanation: "Une longueur est positive : c = √49 = 7 (jamais ±7). Et il ne faut pas oublier de prendre la racine.",
                },
                {
                  objectifId: "e2",
                  question: "Sur quoi repose la démonstration classique de Pythagore vue dans la fiche ?",
                  options: ["Sur la trigonométrie", "Sur l'égalité de deux décompositions de l'aire d'un grand carré", "Sur le théorème de Thalès", "Sur les angles inscrits"],
                  correctIndex: 1,
                  explanation: "On calcule l'aire d'un carré de côté (a + b) de deux façons et on égalise : on obtient c² = a² + b².",
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
              text: "Identifiez l'angle droit, nommez l'hypoténuse, précisez la version du théorème. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Calculs directs et triplets",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : calculer des longueurs",
              objectifTag: "Théorème direct",
              enonce: "Triangle ABC rectangle en A dans chaque cas.",
              question: "a) AB = 6, AC = 8 : calculer BC.\nb) BC = 15, AB = 9 : calculer AC.\nc) AB = AC = 7 : calculer BC (forme exacte).",
              correction: [
                { type: "line", label: "a)", text: "BC² = 36 + 64 = 100 → BC = 10." },
                { type: "line", label: "b)", text: "AC² = 225 − 81 = 144 → AC = 12 (triplet 9-12-15)." },
                { type: "line", label: "c)", text: "BC² = 49 + 49 = 98 → BC = 7√2 ≈ 9,90 (triangle rectangle isocèle)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : reconnaître un triplet",
              objectifTag: "Triplets pythagoriciens",
              question: "Pour chaque triplet, dire s'il est pythagoricien :\na) (5, 12, 13)\nb) (8, 15, 17)\nc) (6, 7, 10)\nd) (20, 21, 29)",
              correction: [
                { type: "line", label: "a)", text: "13² = 169 = 25 + 144 ✓ : triplet." },
                { type: "line", label: "b)", text: "17² = 289 = 64 + 225 ✓ : triplet." },
                { type: "line", label: "c)", text: "10² = 100 ≠ 36 + 49 = 85 : pas un triplet (obtusangle)." },
                { type: "line", label: "d)", text: "29² = 841 = 400 + 441 ✓ : triplet." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : réciproque et contraposée",
              sub: "Rédiger une preuve",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : rectangle ou non ?",
              objectifTag: "Réciproque / contraposée",
              question:
                "Pour chaque triangle, dire s'il est rectangle (réciproque) ou non (contraposée), et préciser le type sinon :\na) 10, 24, 26\nb) 5, 8, 10\nc) 9, 12, 16",
              correction: [
                { type: "line", label: "a)", text: "26² = 676 = 100 + 576 ✓ → rectangle (réciproque)." },
                { type: "line", label: "b)", text: "10² = 100 ; 25 + 64 = 89 ; 100 > 89 → non rectangle, obtusangle." },
                { type: "line", label: "c)", text: "16² = 256 ; 81 + 144 = 225 ; 256 > 225 → non rectangle, obtusangle." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : diagonale d'un écran",
              objectifTag: "Application directe",
              enonce: "Un écran rectangulaire mesure 60 cm de large et 32 cm de haut.",
              question: "a) Calculer la longueur de la diagonale.\nb) Reconnaître un triplet pythagoricien (en simplifiant).",
              correction: [
                { type: "line", label: "a)", text: "d² = 60² + 32² = 3 600 + 1 024 = 4 624 → d = 68 cm." },
                { type: "line", label: "b)", text: "60 = 4 × 15, 32 = 4 × 8, 68 = 4 × 17 : c'est le triplet (8, 15, 17) multiplié par 4." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : applications dans les solides",
              sub: "Pythagore en 3D",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : diagonale d'un pavé et hauteur d'une pyramide",
              objectifTag: "Pythagore 3D",
              question:
                "a) Pavé droit 8 × 9 × 12 : calculer la grande diagonale.\nb) Pyramide à base carrée de côté 6, hauteur 4 : calculer l'apothème (distance du sommet au milieu d'une arête de base), sachant qu'elle vérifie apothème² = hauteur² + (côté/2)².",
              correction: [
                { type: "line", label: "a)", text: "d² = 8² + 9² + 12² = 64 + 81 + 144 = 289 → d = 17." },
                { type: "line", label: "b)", text: "apothème² = 4² + 3² = 16 + 9 = 25 → apothème = 5 (triplet 3-4-5)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : problème complet",
              sub: "Combiner les outils",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 4 : l'échelle contre le mur",
              objectifTag: "Modélisation",
              enonce: "Une échelle de 5 m est appuyée contre un mur vertical. Son pied est à 1,4 m du mur.",
              question: "a) À quelle hauteur l'échelle touche-t-elle le mur (arrondir au cm) ?\nb) On éloigne le pied à 3 m du mur : nouvelle hauteur ?\nc) Que se passerait-il si le pied était à 5 m du mur ?",
              correction: [
                { type: "line", label: "a)", text: "h² = 5² − 1,4² = 25 − 1,96 = 23,04 → h = 4,80 m." },
                { type: "line", label: "b)", text: "h² = 25 − 9 = 16 → h = 4 m (triplet 3-4-5)." },
                { type: "line", label: "c)", text: "h² = 25 − 25 = 0 → h = 0 : l'échelle serait à plat sur le sol (cas limite)." },
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
              text: "Cet exercice reproduit le format d'un sujet de concours, combinant calcul de longueur, réciproque et application 3D. Comptez 20 minutes, en conditions réelles.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 5 : la tente de camping",
              objectifTag: "Pythagore, réciproque, 3D",
              enonce:
                "Une tente a une base rectangulaire ABCD de 3 m × 4 m. Un mât vertical de hauteur 2,4 m est planté au centre O de la base. Des cordes relient le sommet S du mât aux quatre coins.",
              question:
                "1.1 Calculer la diagonale AC de la base.\n1.2 En déduire la distance OA (du centre à un coin).\n1.3 Calculer la longueur d'une corde SA (S au-dessus de O à 2,4 m).\n2.1 Un triangle de côtés 1,5 m, 2 m et 2,5 m est-il rectangle ? Justifier.\n2.2 À quoi sert ce triangle pour vérifier que le mât est bien vertical sur le terrain ?",
              correction: [
                { type: "line", label: "1.1", text: "AC² = 3² + 4² = 25 → AC = 5 m." },
                { type: "line", label: "1.2", text: "O est le centre, donc OA = AC ÷ 2 = 2,5 m." },
                { type: "line", label: "1.3", text: "SA² = OA² + OS² = 2,5² + 2,4² = 6,25 + 5,76 = 12,01 → SA ≈ 3,47 m." },
                { type: "line", label: "2.1", text: "2,5² = 6,25 = 1,5² + 2² = 2,25 + 4 = 6,25 : par la réciproque, le triangle est rectangle (triplet 3-4-5 divisé par 2)." },
                { type: "line", label: "2.2", text: "On peut matérialiser un angle droit au sol avec ce triangle (méthode du « 3-4-5 ») pour vérifier que le mât est perpendiculaire au sol." },
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
              title: "Erreur type · Exercice 6 : racine oubliée",
              objectifTag: "Calcul de longueur",
              enonce: "**Copie d'un candidat :** triangle rectangle en A, AB = 3, AC = 4.\n*Réponse produite :* « BC = 3² + 4² = 25 cm ».",
              question: "a) Identifier l'erreur.\nb) Donner la bonne réponse.",
              correction: [
                { type: "paragraph", text: "**Erreur : la racine carrée a été oubliée.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Pythagore donne BC² = 25, pas BC = 25." },
                    { text: "BC = √25 = 5 cm." },
                    { text: "Toujours conclure par la racine carrée." },
                  ],
                },
                { type: "note", text: "Le théorème fournit le carré de la longueur, jamais la longueur directement." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 7 : somme au lieu de différence",
              objectifTag: "Côté de l'angle droit",
              enonce: "**Copie d'un candidat :** triangle rectangle en A, hypoténuse BC = 10, AB = 6. Calculer AC.\n*Réponse produite :* « AC² = 10² + 6² = 136 ».",
              question: "a) Identifier l'erreur.\nb) Donner la bonne réponse.",
              correction: [
                { type: "paragraph", text: "**Erreur : addition au lieu de soustraction.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "AC est un côté de l'angle droit, pas l'hypoténuse : on soustrait." },
                    { text: "AC² = BC² − AB² = 100 − 36 = 64 → AC = 8." },
                    { text: "Triplet 6-8-10." },
                  ],
                },
                { type: "note", text: "Repérer l'hypoténuse (le plus grand côté) avant de choisir somme ou différence." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 8 : réciproque mal conclue",
              objectifTag: "Réciproque / contraposée",
              enonce: "**Copie d'un candidat :** triangle de côtés 4, 6, 7.\n*Réponse produite :* « 7² ≠ 4² + 6², donc le triangle est rectangle ».",
              question: "a) Identifier l'erreur.\nb) Donner la bonne conclusion.",
              correction: [
                { type: "paragraph", text: "**Erreur : conclusion inversée.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Une inégalité (c² ≠ a² + b²) prouve que le triangle n'est PAS rectangle (contraposée)." },
                    { text: "7² = 49 ; 4² + 6² = 52 ; 49 ≠ 52 → non rectangle." },
                    { text: "49 < 52 → triangle acutangle." },
                  ],
                },
                { type: "note", text: "Égalité → rectangle (réciproque) ; inégalité → pas rectangle (contraposée)." },
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
                  question: "Énoncer le théorème de Pythagore.",
                  answer:
                    "Si un triangle est rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés : c² = a² + b² (c = hypoténuse, le côté opposé à l'angle droit).",
                },
                {
                  question: "Sur quoi repose la démonstration par les aires ?",
                  answer:
                    "On calcule l'aire d'un carré de côté (a + b) de deux façons : (a + b)² = 4 triangles + c² d'un côté, et 4 triangles + a² + b² de l'autre. En égalisant : c² = a² + b².",
                },
                {
                  question: "Que dit la réciproque de Pythagore ?",
                  answer:
                    "Si dans un triangle BC² = AB² + AC², alors le triangle est rectangle en A. On l'utilise pour prouver qu'un triangle est rectangle, après avoir identifié le plus grand côté.",
                },
                {
                  question: "Que dit la contraposée ? À quoi sert-elle ?",
                  answer:
                    "Si BC² ≠ AB² + AC², alors le triangle n'est pas rectangle. Elle prouve qu'un triangle n'est PAS rectangle. Si le carré du plus grand côté est supérieur à la somme → obtusangle, sinon → acutangle.",
                  astuce: "Égalité → rectangle ; inégalité → pas rectangle.",
                },
                {
                  question: "Comment calculer l'hypoténuse ? Un côté de l'angle droit ?",
                  answer:
                    "Hypoténuse : c = √(a² + b²) (on somme). Côté de l'angle droit : b = √(c² − a²) (on soustrait). Toujours prendre la racine, et garder une longueur positive.",
                },
                {
                  question: "Citer quatre triplets pythagoriciens.",
                  answer:
                    "(3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25). Tout multiple est aussi un triplet : (6, 8, 10), (9, 12, 15)… Les reconnaître évite les calculs de racines.",
                },
                {
                  question: "Comment calculer la grande diagonale d'un pavé droit ?",
                  answer:
                    "En deux étapes : diagonale de la base (d_base² = L² + l²), puis d² = d_base² + h². Soit directement d² = L² + l² + h². Pour un cube d'arête a : d = a√3.",
                },
                {
                  question: "Pourquoi citer l'angle droit dans la rédaction ?",
                  answer:
                    "Le théorème direct ne s'applique que si le triangle est rectangle. Écrire « par le théorème de Pythagore dans le triangle ABC rectangle en A » justifie l'emploi de la relation. Le jury valorise cette rigueur.",
                },
                {
                  question: "Pourquoi une longueur n'a-t-elle pas de ± devant la racine ?",
                  answer:
                    "Une longueur est positive. Si c² = 49, alors c = √49 = 7 (et non ±7). Le ± concerne les équations x² = 49, pas les longueurs.",
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
              center: { title: "Pythagore", subtitle: "c² = a² + b²" },
              branches: [
                {
                  title: "Théorème direct",
                  variant: "blue",
                  lines: ["Triangle rectangle → c² = a² + b²", "Calculer une longueur"],
                },
                {
                  title: "Réciproque",
                  variant: "green",
                  lines: ["c² = a² + b² → rectangle", "Prouver que c'est rectangle"],
                },
                {
                  title: "Contraposée",
                  variant: "green",
                  lines: ["c² ≠ a² + b² → pas rectangle", "obtusangle (>) ou acutangle (<)"],
                },
                {
                  title: "Calculs",
                  variant: "yellow",
                  lines: ["Hypoténuse : √(a² + b²)", "Côté droit : √(c² − a²)", "Toujours la racine, positive"],
                },
                {
                  title: "Triplets",
                  variant: "yellow",
                  lines: ["3-4-5, 5-12-13", "8-15-17, 7-24-25", "et leurs multiples"],
                },
                {
                  title: "Solides",
                  variant: "purple",
                  dashed: true,
                  lines: ["Diagonale pavé : √(L² + l² + h²)", "Cube : a√3"],
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
