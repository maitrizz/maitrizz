import type { Fiche } from "@/components/fiche/types";
import { COPIES_ALGORITHMIQUE_SCRATCH_TABLEUR } from "./copies-algorithmique-scratch-tableur";
import { EXERCICES_ALGORITHMIQUE_SCRATCH_TABLEUR } from "./exercices-algorithmique-scratch-tableur";

export const SAVOIR_FAIRE = [
  { id: "variables", label: "Variables et affectation" },
  { id: "boucles-conditionnelles", label: "Boucles et conditionnelles" },
  { id: "scratch", label: "Lire et écrire un script Scratch" },
  { id: "tableur", label: "Formules de tableur (SI, référence absolue)" },
];

export const ficheAlgorithmiqueScratchTableur: Fiche = {
  slug: "algorithmique-scratch-tableur",
  matiere: "mathematiques",
  numero: 27,
  partie: "Partie 6 : Algorithmique et pensée informatique",
  title: "Algorithmique, Scratch, tableur et GeoGebra",
  subtitle:
    "Notion d'algorithme · variables · boucles et conditionnelles · lire et écrire un script Scratch · formules de tableur · référence absolue · géométrie dynamique",
  badges: [
    { label: "★★★ Quasiment chaque sujet", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème E", variant: "info" },
  ],
  metaTitle: "Algorithmique, Scratch et tableur · Fiche de révision CRPE",
  metaDescription:
    "Fiche CRPE sur l'algorithmique et la pensée informatique : notion d'algorithme, variables, boucles et conditionnelles, lecture et écriture de scripts Scratch, formules de tableur, référence absolue, fonction SI et géométrie dynamique. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
              title: "Incontournable au concours",
              text: "Un exercice de Scratch ou de tableur figure dans presque tous les sujets. Les questions sont surtout de lecture : prédire ce qu'un script produit, donner la valeur d'une variable après une boucle, écrire une formule de tableur. Aucune compétence de programmeur n'est attendue, mais une lecture rigoureuse et le vocabulaire exact sont indispensables.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Algorithme, variable et séquence",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Le vocabulaire de base",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "**Algorithme** : suite finie et ordonnée d'instructions pour résoudre un problème.",
                        "**Séquence** : les instructions s'exécutent dans l'ordre, l'une après l'autre.",
                        "**Variable** : une « boîte » nommée qui contient une valeur, modifiable.",
                        "**Affectation** : donner une valeur à une variable (mettre x à 5, ajouter 2 à x).",
                      ],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Exemple : « mettre score à 0 », puis « ajouter 2 à score » trois fois de suite. À la fin, la variable score vaut 6. L'ordre des instructions compte : c'est une séquence.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Boucles et conditionnelles",
              blocks: [
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Boucle « répéter n fois »",
                      variant: "info",
                      lines: [
                        "Répète un bloc d'instructions un nombre fixé de fois.",
                        "répéter 4 fois [avancer ; tourner].",
                      ],
                    },
                    {
                      title: "Boucle « tant que »",
                      variant: "info",
                      lines: [
                        "Répète tant qu'une condition est vraie.",
                        "S'arrête dès que la condition devient fausse.",
                      ],
                    },
                    {
                      title: "Conditionnelle « si… alors »",
                      variant: "info",
                      lines: [
                        "Exécute un bloc seulement si la condition est vraie.",
                        "si (score > 8) alors dire « gagné ».",
                      ],
                    },
                    {
                      title: "Conditionnelle « si… alors… sinon »",
                      variant: "info",
                      lines: [
                        "Un bloc si la condition est vraie, un autre sinon.",
                        "si (note ≥ 10) alors « admis » sinon « refusé ».",
                      ],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Une boucle « répéter » factorise des instructions répétitives : répéter 4 fois un déplacement et une rotation est plus court que d'écrire huit instructions à la suite. Des boucles peuvent être imbriquées (une boucle à l'intérieur d'une autre).",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Scratch : lire et écrire un script",
              blocks: [
                {
                  type: "paragraph",
                  text: "Dans Scratch, un script est une suite de blocs exécutés par un lutin (le personnage). Avec le stylo abaissé, le lutin laisse une trace en se déplaçant : on peut ainsi tracer des figures géométriques.",
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Tracer un polygone régulier",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "stylo en position d'écriture",
                        "répéter n fois :",
                        "    avancer de L",
                        "    tourner de (360 / n) degrés",
                      ],
                      note: "L'angle de rotation est l'angle extérieur 360/n, pas l'angle intérieur du polygone. Carré : 360/4 = 90°. Triangle équilatéral : 360/3 = 120°. Hexagone : 360/6 = 60°.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "💡 Lire un script",
                  text: "Pour prédire ce qu'un script produit, on l'exécute mentalement pas à pas, en suivant la position du lutin et la valeur de chaque variable. C'est le type de question le plus fréquent au concours.",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Tableur et géométrie dynamique",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Formules et références dans un tableur",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "Une formule commence par = : =A1+B1, =SOMME(A1:A10), =MOYENNE(B2:B21).",
                        "**Référence relative** (A1) : se décale quand on recopie la formule.",
                        "**Référence absolue** ($A$1) : reste fixe quand on recopie.",
                        "**Fonction SI** : =SI(condition ; valeur_si_vrai ; valeur_si_faux).",
                      ],
                      note: "Recopier =A1+B1 vers le bas donne =A2+B2, =A3+B3… (les références suivent). Pour figer une cellule (un taux, un coefficient), on met des $ : =B2*$D$1.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Un logiciel de géométrie dynamique (GeoGebra) permet de construire des figures, de déplacer des points et d'observer ce qui reste invariant. Au CRPE, on demande de lire une construction (quelles propriétés sont utilisées) ou d'indiquer les étapes pour la reproduire.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : l'angle de rotation dans un tracé Scratch",
              badge: "Très fréquent",
              faux: "Pour un triangle équilatéral, tourner de 60° (l'angle intérieur).",
              vrai: "On tourne de l'angle extérieur 360/3 = 120°. Carré : 90°, hexagone : 60°.",
              methode: "Angle de rotation = 360 / nombre de côtés, jamais l'angle intérieur du polygone.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : oublier le $ d'une référence absolue",
              badge: "Classique",
              faux: "Recopier =B2*D1 vers le bas : la référence D1 devient D2, D3… et fausse le calcul.",
              vrai: "Pour figer le taux en D1, écrire =B2*$D$1 : D1 reste fixe à chaque recopie.",
              methode: "Une cellule qui ne doit pas bouger lors de la recopie se fige avec des $.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : suivre une boucle « tête baissée »",
              badge: "Lecture",
              faux: "Donner le résultat d'une boucle sans suivre la variable à chaque tour.",
              vrai: "On note la valeur de chaque variable et la position du lutin tour par tour.",
              methode: "Faire un tableau d'évolution : une ligne par passage dans la boucle.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : confondre = de formule et égalité mathématique",
              badge: "Conceptuel",
              faux: "Lire =A1+1 comme une équation à résoudre.",
              vrai: "Dans un tableur, = lance un calcul ; « ajouter 1 à x » en algorithmique remplace x par x + 1.",
              methode: "L'affectation n'est pas une égalité : x prend une nouvelle valeur calculée à partir de l'ancienne.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école : le regard du futur enseignant",
              text: "L'initiation à la programmation commence au cycle 2, surtout au cycle 3 (CM1-CM2), avec des activités de déplacement (coder un trajet sur quadrillage, programmer un robot ou un lutin Scratch). Les élèves travaillent le repérage, l'orientation, et la décomposition d'un problème en étapes : c'est la pensée informatique.\n\nScratch est explicitement cité dans les programmes du cycle 3. Les notions de séquence, de boucle et d'instruction se construisent d'abord sans écran (activités débranchées), puis avec le logiciel.\n\nPour le CRPE : lire et compléter un script, prédire le résultat d'une boucle, écrire une formule de tableur avec référence absolue, et savoir relier ces outils aux apprentissages du primaire (repérage, proportionnalité, traitement de données).",
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
              title: "Exécuter mentalement, pas à pas",
              text: "Pour lire un script, on suit l'état du programme tour par tour (position du lutin, valeur des variables). Pour une formule de tableur, on se demande ce qui doit bouger ou rester fixe lors de la recopie.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Déterminer la valeur d'une variable après une boucle",
              intro:
                "**Question type :** « mettre n à 1, puis répéter 4 fois : multiplier n par 2. Que vaut n à la fin ? »",
              steps: [
                {
                  number: "1",
                  text: "**Noter la valeur de départ.**",
                  example: { lines: ["n = 1"] },
                },
                {
                  number: "2",
                  text: "**Suivre chaque tour de boucle.**",
                  example: { lines: ["Tour 1 : n = 2 · Tour 2 : n = 4 · Tour 3 : n = 8 · Tour 4 : n = 16"] },
                },
                {
                  number: "3",
                  text: "**Conclure.**",
                  example: { lines: ["À la fin, n = 16 (c'est 2⁴)."] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "mettre s à 0, puis répéter 5 fois : ajouter 3 à s. Que vaut s à la fin ?",
              correction: [
                { type: "line", text: "s = 3 × 5 = **15** (on ajoute 3 à chaque tour, cinq fois)." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Prédire la figure tracée par un script",
              intro:
                "**Question type :** « répéter 6 fois : avancer de 50 ; tourner de 60°. Quelle figure obtient-on ? »",
              steps: [
                {
                  number: "1",
                  text: "**Compter les répétitions et lire l'angle.**",
                  example: { lines: ["6 répétitions, rotation de 60°"] },
                },
                {
                  number: "2",
                  text: "**Relier au nombre de côtés : 360 / angle.**",
                  example: { lines: ["360 / 60 = 6 côtés"] },
                },
                {
                  number: "3",
                  text: "**Conclure.**",
                  example: { lines: ["Un hexagone régulier de côté 50."] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Quel angle de rotation faut-il pour tracer un pentagone régulier (5 côtés) ?",
              correction: [
                { type: "line", text: "360 / 5 = **72°** (l'angle extérieur, pas l'angle intérieur de 108°)." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Écrire une formule de tableur avec recopie",
              intro:
                "**Question type :** « En colonne B, des prix hors taxes. En D1, le coefficient 1,2 (TVA). Écrire en C2 le prix TTC, recopiable vers le bas. »",
              steps: [
                {
                  number: "1",
                  text: "**Repérer ce qui change et ce qui reste fixe.**",
                  example: { lines: ["Le prix (B2, B3…) change ; le coefficient D1 reste fixe"] },
                },
                {
                  number: "2",
                  text: "**Figer la cellule fixe avec des $.**",
                  example: { lines: ["En C2 : =B2*$D$1"] },
                },
                {
                  number: "3",
                  text: "**Vérifier la recopie.**",
                  example: { lines: ["En C3 : =B3*$D$1 (B suit, $D$1 reste fixe)"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "En B2 une note, on veut afficher « Admis » si elle est ≥ 10, sinon « Refusé ». Quelle formule ?",
              correction: [
                { type: "line", text: "**=SI(B2>=10 ; \"Admis\" ; \"Refusé\")**." },
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
              title: "Algorithmique, Scratch, tableur et GeoGebra",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_ALGORITHMIQUE_SCRATCH_TABLEUR,
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
              title: "Algorithmique, Scratch, tableur et GeoGebra",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_ALGORITHMIQUE_SCRATCH_TABLEUR,
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
              center: { title: "Algorithmique", subtitle: "Scratch · tableur" },
              branches: [
                {
                  title: "Bases",
                  variant: "blue",
                  lines: ["algorithme, séquence", "variable, affectation"],
                },
                {
                  title: "Structures",
                  variant: "green",
                  lines: ["répéter n fois / tant que", "si… alors… sinon"],
                },
                {
                  title: "Scratch",
                  variant: "yellow",
                  lines: ["lutin et stylo", "polygone : tourner de 360/n"],
                },
                {
                  title: "Tableur",
                  variant: "yellow",
                  lines: ["=A1+B1, SOMME, MOYENNE", "référence absolue $D$1, SI"],
                },
                {
                  title: "GeoGebra",
                  variant: "purple",
                  lines: ["géométrie dynamique", "lire et construire"],
                },
                {
                  title: "À l'école",
                  variant: "purple",
                  dashed: true,
                  lines: ["Scratch au cycle 3", "pensée informatique"],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
