import type { Fiche } from "@/components/fiche/types";
import { COPIES_THEOREME_DE_PYTHAGORE } from "./copies-theoreme-de-pythagore";
import { EXERCICES_THEOREME_DE_PYTHAGORE } from "./exercices-theoreme-de-pythagore";

export const SAVOIR_FAIRE = [
  { id: "calcul-hypotenuse", label: "Calculer l'hypoténuse" },
  { id: "calcul-cote", label: "Calculer un côté de l'angle droit" },
  { id: "reciproque-contraposee", label: "Réciproque et contraposée" },
  { id: "triplets", label: "Reconnaître les triplets pythagoriciens" },
  { id: "pythagore-3d", label: "Pythagore dans les solides" },
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
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème D", variant: "info" },
  ],
  metaTitle: "Théorème de Pythagore (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur le théorème de Pythagore : énoncé, démonstration par les aires, réciproque, contraposée, calcul de longueurs, triplets pythagoriciens et applications dans les solides. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                  text: "On calcule d'abord la diagonale de la base (d_base² = L² + l²), puis la diagonale du pavé (d² = d_base² + h²). Cela revient à d² = L² + l² + h². Les sections et le repérage dans l'espace, où Pythagore intervient de la même façon, sont détaillés dans la [fiche N°26](fiche:sections-reperage-espace).",
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
                  number: "3",
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
              title: "Théorème de Pythagore",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_THEOREME_DE_PYTHAGORE,
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
              title: "Théorème de Pythagore",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_THEOREME_DE_PYTHAGORE,
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
      ],
    },
  ],
};
