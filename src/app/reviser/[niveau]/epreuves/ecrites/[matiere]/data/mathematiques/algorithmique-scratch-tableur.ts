import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je connais la notion d'algorithme, de variable et de séquence d'instructions" },
  { id: "e2", label: "Je comprends une boucle (répéter n fois, tant que) et je détermine son résultat" },
  { id: "e3", label: "Je comprends une instruction conditionnelle (si… alors… sinon)" },
  { id: "e4", label: "Je lis un script Scratch et je prédis ce qu'il produit (figure, position, valeur)" },
  { id: "e5", label: "Je complète ou j'écris un script Scratch (déplacements, stylo, rotations, boucles imbriquées)" },
  { id: "e6", label: "J'écris une formule de tableur et je comprends la recopie avec une référence relative" },
  { id: "e7", label: "Je distingue référence relative et référence absolue ($) et j'utilise la fonction SI" },
  { id: "e8", label: "Je sais ce qu'apporte un logiciel de géométrie dynamique (GeoGebra) en lecture et en construction" },
  { id: "e9", label: "Je situe l'algorithmique et la programmation dans les programmes (pensée informatique, cycles 3 et 4)" },
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
  metaTitle: "Algorithmique, Scratch et tableur (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur l'algorithmique et la pensée informatique : notion d'algorithme, variables, boucles et conditionnelles, lecture et écriture de scripts Scratch, formules de tableur, référence absolue, fonction SI et géométrie dynamique. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                { number: "①", title: "Algorithme et variables", text: "Séquence d'instructions, variable, affectation : le vocabulaire de base." },
                { number: "②", title: "Boucles et conditionnelles", text: "Répéter, tant que, si… alors… sinon : les structures de contrôle." },
                { number: "③", title: "Scratch", text: "Lire, compléter et écrire un script ; tracer une figure avec le stylo." },
                { number: "④", title: "Tableur et GeoGebra", text: "Formules, référence absolue, fonction SI, et géométrie dynamique." },
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
                  question: "Qu'est-ce qu'une variable en algorithmique ?",
                  options: ["Un nombre fixe", "Une boîte nommée qui contient une valeur modifiable", "Une figure géométrique", "Une condition"],
                  correctIndex: 1,
                  explanation: "Une variable est une boîte nommée dont le contenu (la valeur) peut changer au cours de l'exécution.",
                },
                {
                  objectifId: "e2",
                  question: "mettre n à 1, puis répéter 4 fois : multiplier n par 2. Que vaut n à la fin ?",
                  options: ["8", "16", "9", "2"],
                  correctIndex: 1,
                  explanation: "n passe par 2, 4, 8, 16 : à la fin n = 16 (soit 2⁴).",
                },
                {
                  objectifId: "e3",
                  question: "Quelle structure choisit entre deux actions selon une condition ?",
                  options: ["La boucle répéter", "La séquence", "Le si… alors… sinon", "La variable"],
                  correctIndex: 2,
                  explanation: "L'instruction conditionnelle si… alors… sinon exécute un bloc ou l'autre selon que la condition est vraie ou fausse.",
                },
                {
                  objectifId: "e4",
                  question: "répéter 3 fois : avancer de 100 ; tourner de 120°. Quelle figure ?",
                  options: ["Un carré", "Un triangle équilatéral", "Un hexagone", "Un cercle"],
                  correctIndex: 1,
                  explanation: "3 répétitions et 360/3 = 120° : c'est un triangle équilatéral de côté 100.",
                },
                {
                  objectifId: "e5",
                  question: "Pour tracer un carré, de quel angle le lutin doit-il tourner à chaque coin ?",
                  options: ["45°", "60°", "90°", "120°"],
                  correctIndex: 2,
                  explanation: "360 / 4 = 90°. On tourne de l'angle extérieur, qui vaut ici 90°.",
                },
                {
                  objectifId: "e6",
                  question: "On recopie la formule =A1+B1 de la cellule C1 vers C2. Que devient-elle ?",
                  options: ["=A1+B1", "=A2+B2", "=A1+B2", "=C1+C2"],
                  correctIndex: 1,
                  explanation: "Les références relatives se décalent avec la recopie : =A1+B1 devient =A2+B2.",
                },
                {
                  objectifId: "e7",
                  question: "Quelle écriture fige la cellule D1 lors d'une recopie ?",
                  options: ["D1", "$D$1", "D$1 seulement", "D1$"],
                  correctIndex: 1,
                  explanation: "$D$1 est une référence absolue : la colonne et la ligne restent fixes lors de la recopie.",
                },
                {
                  objectifId: "e7",
                  question: "Que renvoie =SI(B2>=10 ; \"Admis\" ; \"Refusé\") si B2 vaut 8 ?",
                  options: ["Admis", "Refusé", "8", "VRAI"],
                  correctIndex: 1,
                  explanation: "La condition B2>=10 est fausse (8 < 10), donc la fonction renvoie la valeur du cas faux : « Refusé ».",
                },
                {
                  objectifId: "e9",
                  question: "À quel cycle Scratch est-il explicitement introduit dans les programmes ?",
                  options: ["Dès la maternelle", "Au cycle 3 (CM1-6e)", "Seulement au lycée", "Jamais à l'école"],
                  correctIndex: 1,
                  explanation: "L'initiation à la programmation, avec Scratch, est explicitement au programme du cycle 3.",
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
              text: "Exécutez chaque script pas à pas et notez l'état du programme. Pour le tableur, demandez-vous ce qui doit se décaler et ce qui doit rester fixe. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Boucles et figures",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : suivre des variables",
              objectifTag: "Variables et boucles",
              question:
                "Pour chaque programme, donner la valeur finale.\na) mettre a à 10, puis répéter 3 fois : enlever 4 à a.\nb) mettre p à 1, puis répéter 5 fois : multiplier p par 2.\nc) mettre s à 0, puis pour i de 1 à 4 : ajouter i à s.",
              correction: [
                { type: "line", label: "a)", text: "a = 10 − 4 − 4 − 4 = −2." },
                { type: "line", label: "b)", text: "p = 2, 4, 8, 16, 32 → p = 32 (soit 2⁵)." },
                { type: "line", label: "c)", text: "s = 1 + 2 + 3 + 4 = 10." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : reconnaître la figure",
              objectifTag: "Scratch et angles",
              question:
                "Quelle figure trace chaque script (stylo abaissé) ?\na) répéter 4 fois : avancer de 80 ; tourner de 90°.\nb) répéter 6 fois : avancer de 40 ; tourner de 60°.\nc) répéter 8 fois : avancer de 30 ; tourner de 45°.",
              correction: [
                { type: "line", label: "a)", text: "Carré de côté 80 (360/4 = 90°)." },
                { type: "line", label: "b)", text: "Hexagone régulier de côté 40 (360/6 = 60°)." },
                { type: "line", label: "c)", text: "Octogone régulier de côté 30 (360/8 = 45°)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : conditionnelles et tableur",
              sub: "Décider et calculer",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : une boucle avec condition",
              objectifTag: "Conditionnelle",
              enonce: "On exécute : mettre score à 0. Répéter 6 fois : ajouter 2 à score. Puis : si (score > 8) alors dire « gagné » sinon dire « perdu ».",
              question: "a) Que vaut score à la fin de la boucle ?\nb) Que dit le lutin ?",
              correction: [
                { type: "line", label: "a)", text: "score = 2 × 6 = 12." },
                { type: "line", label: "b)", text: "12 > 8 est vrai, donc le lutin dit « gagné »." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : formules de tableur",
              objectifTag: "Référence absolue, SI",
              enonce: "Une feuille de notes : les noms en colonne A (lignes 2 à 21), les notes sur 20 en colonne B. La cellule E1 contient un coefficient 0,5.",
              question: "a) Formule en C2 affichant la note pondérée (note × coefficient), recopiable vers le bas.\nb) Formule en D2 affichant « Admis » si la note est au moins 10, sinon « Refusé ».\nc) Formule donnant la moyenne de la classe.",
              correction: [
                { type: "line", label: "a)", text: "=B2*$E$1 (B2 se décale à la recopie, $E$1 reste fixe)." },
                { type: "line", label: "b)", text: "=SI(B2>=10 ; \"Admis\" ; \"Refusé\")." },
                { type: "line", label: "c)", text: "=MOYENNE(B2:B21)." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : boucles imbriquées",
              sub: "Aller plus loin",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : une rosace par boucles imbriquées",
              objectifTag: "Boucles imbriquées",
              enonce: "Script : répéter 6 fois [ répéter 4 fois (avancer de 60 ; tourner de 90°) ; tourner de 60° ].",
              question: "a) Que trace la boucle intérieure seule ?\nb) Que produit la boucle extérieure ?\nc) Combien de carrés au total, et comment sont-ils disposés ?",
              correction: [
                { type: "line", label: "a)", text: "La boucle intérieure (4 fois, 90°) trace un carré de côté 60." },
                { type: "line", label: "b)", text: "La boucle extérieure répète 6 fois le carré en tournant de 60° entre chaque." },
                { type: "line", label: "c)", text: "6 carrés identiques disposés en rosace, régulièrement répartis (60° entre chacun, soit un tour complet : 6 × 60 = 360°)." },
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
              text: "Cet exercice reproduit le format d'un sujet de concours : il combine lecture de script Scratch, tableur et recul didactique. Comptez environ 25 minutes, en conditions réelles.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 4 : l'escalier de Scratch et le budget de classe",
              objectifTag: "Scratch, tableur, didactique",
              enonce:
                "Partie A. Un script trace un motif : mettre L à 20. Répéter 5 fois [ avancer de L ; tourner de 90° ; avancer de L ; tourner de −90° ; ajouter 10 à L ].\nPartie B. Une enseignante prépare le budget d'une sortie. En B2:B6, le prix unitaire de cinq fournitures ; en C2:C6, les quantités. En F1, une remise (coefficient 0,9).",
              question:
                "A.1 Quelle est la valeur de L après le premier tour de boucle ?\nA.2 Décrire l'allure générale de la figure obtenue (que font les deux rotations opposées ?).\nB.1 Écrire en D2 le coût d'une fourniture (prix × quantité), recopiable vers le bas.\nB.2 Écrire en E2 le coût après remise, recopiable, la remise étant en F1.\nB.3 Écrire la formule donnant le coût total après remise.\nC. Citer une compétence de cycle 3 travaillée par l'activité Scratch.",
              correction: [
                { type: "line", label: "A.1", text: "L démarre à 20 ; on lui ajoute 10 en fin de tour : après le premier tour, L = 30." },
                { type: "line", label: "A.2", text: "Les rotations +90° puis −90° font monter le tracé « en marches d'escalier », et chaque marche s'allonge (L augmente de 10 à chaque tour)." },
                { type: "line", label: "B.1", text: "=B2*C2 (prix × quantité, références relatives qui se décalent)." },
                { type: "line", label: "B.2", text: "=D2*$F$1 (coût recopié, remise figée en $F$1)." },
                { type: "line", label: "B.3", text: "=SOMME(E2:E6)." },
                { type: "line", label: "C", text: "Se repérer et orienter ses déplacements, décomposer un problème en étapes, ou utiliser une boucle pour répéter un motif (pensée informatique du cycle 3)." },
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
              title: "Erreur type · Exercice 5 : angle intérieur dans un tracé",
              objectifTag: "Scratch et angles",
              enonce: "**Copie d'un candidat :** « Pour tracer un triangle équilatéral, je répète 3 fois : avancer ; tourner de 60°, car les angles d'un triangle équilatéral valent 60°. »",
              question: "a) Identifier l'erreur.\nb) Donner le bon angle.",
              correction: [
                { type: "paragraph", text: "**Erreur : le lutin tourne de l'angle extérieur, pas de l'angle intérieur.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Tourner de 60° tracerait un motif ouvert, pas un triangle fermé." },
                    { text: "Angle de rotation = 360 / 3 = 120°." },
                    { text: "Vérification : la somme des rotations sur un tour complet vaut 360°." },
                  ],
                },
                { type: "note", text: "Angle de rotation = 360 / nombre de côtés. Carré 90°, triangle 120°, hexagone 60°." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 6 : référence non figée",
              objectifTag: "Tableur",
              enonce: "**Copie d'un candidat :** « En C2, j'écris =B2*D1 et je recopie vers le bas. » Le taux est en D1.",
              question: "a) Pourquoi le calcul est-il faux dès la cellule C3 ?\nb) Corriger la formule.",
              correction: [
                { type: "paragraph", text: "**Erreur : la référence D1 n'est pas figée.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Recopiée en C3, la formule devient =B3*D2, mais D2 est vide : le résultat est faux." },
                    { text: "Il faut figer le taux : =B2*$D$1." },
                    { text: "Ainsi, en C3 on obtient =B3*$D$1, ce qui est correct." },
                  ],
                },
                { type: "note", text: "Une cellule qui ne doit pas se décaler lors de la recopie se fige avec des $." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 7 : affectation lue comme une égalité",
              objectifTag: "Variables",
              enonce: "**Copie d'un candidat :** « L'instruction « mettre x à x + 1 » est impossible, car x ne peut pas être égal à x + 1. »",
              question: "a) Expliquer l'erreur de lecture.\nb) Donner le sens correct.",
              correction: [
                { type: "paragraph", text: "**Erreur : confondre affectation et égalité mathématique.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Ce n'est pas une équation : aucune valeur à trouver." },
                    { text: "« mettre x à x + 1 » calcule x + 1, puis range le résultat dans x." },
                    { text: "Si x valait 5, x vaut désormais 6. C'est l'incrémentation." },
                  ],
                },
                { type: "note", text: "L'affectation remplace l'ancienne valeur d'une variable par une nouvelle, calculée à partir de l'ancienne." },
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
                  question: "Qu'est-ce qu'un algorithme ? Une variable ?",
                  answer:
                    "Un algorithme est une suite finie et ordonnée d'instructions résolvant un problème. Une variable est une boîte nommée contenant une valeur modifiable. L'affectation (mettre x à 5) lui donne une valeur.",
                },
                {
                  question: "Quelles sont les trois structures de contrôle de base ?",
                  answer:
                    "La séquence (instructions dans l'ordre), la boucle (répéter n fois ou tant que), et la conditionnelle (si… alors… sinon). Une boucle peut être imbriquée dans une autre.",
                },
                {
                  question: "Comment tracer un polygone régulier à n côtés en Scratch ?",
                  answer:
                    "Stylo abaissé, puis répéter n fois : avancer de L, tourner de 360/n degrés. L'angle de rotation est l'angle extérieur 360/n.",
                  astuce: "Carré : 90°. Triangle équilatéral : 120°. Hexagone : 60°.",
                },
                {
                  question: "Comment lire un script et prédire son résultat ?",
                  answer:
                    "On l'exécute mentalement pas à pas : on note la position du lutin et la valeur de chaque variable à chaque tour de boucle, comme dans un tableau d'évolution.",
                },
                {
                  question: "Que signifie « mettre x à x + 1 » ?",
                  answer:
                    "C'est une affectation, pas une égalité : on calcule x + 1 et on range le résultat dans x. Si x valait 5, il vaut maintenant 6 (incrémentation).",
                },
                {
                  question: "Différence entre référence relative et référence absolue dans un tableur ?",
                  answer:
                    "Une référence relative (A1) se décale lors de la recopie. Une référence absolue ($A$1) reste fixe. On fige une cellule (un taux, un coefficient) avec des $ : =B2*$D$1.",
                },
                {
                  question: "Comment s'écrit la fonction SI ?",
                  answer:
                    "=SI(condition ; valeur_si_vrai ; valeur_si_faux). Exemple : =SI(B2>=10 ; \"Admis\" ; \"Refusé\") renvoie « Admis » si B2 ≥ 10, sinon « Refusé ».",
                },
                {
                  question: "Que devient =A1+B1 recopiée d'une ligne vers le bas ?",
                  answer:
                    "Elle devient =A2+B2 : les références relatives suivent le déplacement. Recopiée encore : =A3+B3, etc.",
                },
                {
                  question: "À quoi sert un logiciel de géométrie dynamique (GeoGebra) ?",
                  answer:
                    "À construire des figures, déplacer des points et observer ce qui reste invariant. Au CRPE, on demande de lire une construction (propriétés utilisées) ou d'en décrire les étapes.",
                },
                {
                  question: "Où se situe l'initiation à la programmation dans les programmes ?",
                  answer:
                    "Au cycle 2 et surtout au cycle 3 (CM1-CM2), avec des activités de déplacement et Scratch. On y travaille le repérage, l'orientation et la décomposition d'un problème en étapes : la pensée informatique.",
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
