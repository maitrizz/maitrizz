import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je définis : expérience aléatoire, issue, univers Ω, événement, événement certain et impossible" },
  { id: "e2", label: "Je calcule une probabilité classique P(A) = cas favorables ÷ total, en vérifiant l'équiprobabilité" },
  { id: "e3", label: "J'utilise P(Ā) = 1 − P(A), surtout pour « au moins un… »" },
  { id: "e4", label: "Je vérifie si deux événements sont incompatibles avant d'additionner leurs probabilités" },
  { id: "e5", label: "Je construis un arbre pondéré et j'applique ses deux règles (multiplier sur un chemin, additionner entre chemins)" },
  { id: "e6", label: "Je distingue tirage avec remise et sans remise dans un arbre" },
  { id: "e7", label: "J'explique la loi des grands nombres : la fréquence se rapproche de la probabilité quand n grandit" },
  { id: "e8", label: "Je lis et j'interprète une formule de simulation tableur (ALEA, ENT, SI, NB.SI)" },
];

export const ficheProbabilites: Fiche = {
  slug: "probabilites",
  matiere: "mathematiques",
  numero: 12,
  partie: "Partie 2 : Organisation, données, fonctions",
  title: "Probabilités",
  subtitle:
    "Expérience aléatoire · événements · équiprobabilité · complémentaire · événements incompatibles · arbres pondérés · loi des grands nombres · simulation tableur",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème B", variant: "info" },
  ],
  metaTitle: "Probabilités (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur les probabilités : vocabulaire, probabilité classique, événement contraire, événements incompatibles, arbres pondérés (avec et sans remise), loi des grands nombres et simulation tableur. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                {
                  number: "①",
                  title: "Vocabulaire et probabilité classique",
                  text: "Univers, événement, et la règle des cas favorables en situation d'équiprobabilité.",
                },
                {
                  number: "②",
                  title: "Événements composés",
                  text: "Le contraire, les événements incompatibles, la réunion.",
                },
                {
                  number: "③",
                  title: "Les arbres pondérés",
                  text: "L'outil central du CRPE : deux règles, avec ou sans remise.",
                },
                {
                  number: "④",
                  title: "Loi des grands nombres et tableur",
                  text: "Le lien fréquence / probabilité, et la simulation d'une expérience.",
                },
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
              title: "Pourquoi les probabilités ?",
              text: "Vous lancez un dé : le résultat est imprévisible, mais vous savez que le 2 sort « 1 fois sur 6 en moyenne ». Une probabilité, c'est un nombre entre 0 et 1 qui mesure la chance qu'un événement se produise.\n\nElles sont partout : météo, jeux, assurances, médecine, sondages. Au CRPE, c'est l'un des sujets les plus testés (arbres pondérés, événement composé, lien avec le dénombrement, simulation tableur). Bonne nouvelle : les probabilités demandent surtout de la méthode (bien définir les événements, construire l'arbre, lire les bonnes branches). Avec la méthode, ce sont des points assurés.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Vocabulaire et probabilité classique",
              blocks: [
                {
                  type: "table",
                  headers: ["Terme", "Définition", "Exemple (dé)"],
                  rows: [
                    ["Expérience aléatoire", "résultat imprévisible à l'avance", "lancer un dé équilibré"],
                    ["Issue", "un résultat élémentaire possible", "1, 2, 3, 4, 5 ou 6"],
                    ["Univers Ω", "ensemble de toutes les issues", "Ω = {1, 2, 3, 4, 5, 6}"],
                    ["Événement", "sous-ensemble de l'univers", "« pair » = {2, 4, 6}"],
                    ["Événement certain", "se réalise toujours (c'est Ω)", "« entre 1 et 6 »"],
                    ["Événement impossible", "ne se réalise jamais (c'est ∅)", "« obtenir 7 »"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "**Une probabilité P(A) vérifie : 0 ≤ P(A) ≤ 1, P(Ω) = 1, P(∅) = 0.** P(A) = 0 → impossible ; P(A) = 1 → certain ; P(A) = 0,5 → une chance sur deux.",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Probabilité classique (Laplace)",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "**P(A) = nombre d'issues favorables ÷ nombre total d'issues**",
                        "Dé, A = « pair » : P(A) = 3/6 = 1/2",
                        "Jeu de 52 cartes, B = « un as » : P(B) = 4/52 = 1/13",
                      ],
                      note: "Formule valable uniquement en situation d'équiprobabilité (dé équilibré, tirage au hasard d'objets identiques).",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Événements composés : contraire, incompatibles, réunion",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "L'événement contraire",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "**P(Ā) = 1 − P(A)**",
                        "P(obtenir 6) = 1/6 → P(ne pas obtenir 6) = 5/6",
                      ],
                      note: "Réflexe : « au moins un… » = 1 − P(aucun). Souvent beaucoup plus rapide que le calcul direct.",
                    },
                  ],
                },
                {
                  type: "table",
                  headers: ["Situation", "Formule"],
                  rows: [
                    ["Événement contraire", "P(Ā) = 1 − P(A)"],
                    ["Incompatibles (A ∩ B = ∅)", "P(A ∪ B) = P(A) + P(B)"],
                    ["Cas général", "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)"],
                    ["Probabilité classique", "P(A) = |A| ÷ |Ω|"],
                    ["Somme des probabilités des issues", "Σ P(issues) = 1"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Vérifier l'incompatibilité avant d'additionner",
                  text: "A = « pair » et B = « multiple de 3 » sur un dé ne sont pas incompatibles : 6 est dans les deux. P(A ∪ B) = 3/6 + 2/6 − 1/6 = 4/6 = 2/3, et non 5/6. Toujours vérifier si A ∩ B = ∅.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Les arbres pondérés : l'outil central",
              blocks: [
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Règle 1 : multiplier sur un chemin",
                      variant: "info",
                      lines: ["La probabilité d'un chemin = produit des branches.", "P(chemin) = p₁ × p₂ × …"],
                    },
                    {
                      title: "Règle 2 : additionner entre chemins",
                      variant: "info",
                      lines: ["Un événement par plusieurs chemins = somme des chemins.", "P(A) = P(chemin 1) + P(chemin 2) + …"],
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "**Exemple (avec remise).** Urne de 3 rouges et 5 bleues, deux tirages avec remise. P(une rouge et une bleue, dans n'importe quel ordre) = P(RB) + P(BR) = 3/8 × 5/8 + 5/8 × 3/8 = 15/64 + 15/64 = 30/64 = 15/32.",
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Deux vérifications obligatoires",
                  text: "Sur chaque nœud, la somme des branches sortantes vaut 1. Et la somme de tous les chemins finaux vaut 1. Si ce n'est pas le cas, il y a une erreur. Précisez toujours si le tirage est avec ou sans remise : sans remise, les probabilités du 2e tirage changent (après une rouge, l'urne 3R/5B devient 2R/5B).",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Loi des grands nombres et simulation tableur",
              blocks: [
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Fréquence observée",
                      variant: "info",
                      lines: ["Mesurée dans une expérience réelle.", "60 lancers, 8 fois le 6 → 8/60 ≈ 0,133", "Varie d'une série à l'autre."],
                    },
                    {
                      title: "Probabilité (théorique)",
                      variant: "info",
                      lines: ["Calculée à partir du modèle.", "Dé équilibré → P(6) = 1/6 ≈ 0,167", "Fixe, ne dépend d'aucune expérience."],
                    },
                  ],
                },
                {
                  type: "formulaBlock",
                  lines: [
                    "**Loi des grands nombres :** quand n → ∞, fréquence observée(A) → P(A)",
                    "10 lancers : la fréquence du 6 peut être loin de 1/6",
                    "1 000 lancers : la fréquence est très proche de 1/6",
                  ],
                  note: "C'est le pont entre statistiques et probabilités : la fréquence estime la probabilité, d'autant mieux que l'échantillon est grand.",
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ L'erreur du joueur",
                  text: "La loi des grands nombres ne dit pas qu'« après 5 piles, on va avoir face ». Chaque lancer est indépendant des précédents. Il n'y a pas de « rattrapage » des essais passés.",
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Simulation tableur (attendue au cycle 4)",
                  blocks: [
                    {
                      type: "table",
                      headers: ["Formule", "Ce qu'elle fait"],
                      rows: [
                        ["=ALEA()", "nombre décimal aléatoire dans [0 ; 1["],
                        ["=ENT(ALEA()*6)+1", "simule un dé équilibré (résultat de 1 à 6)"],
                        ["=SI(ALEA()<0,5;\"Pile\";\"Face\")", "simule un lancer de pièce équilibrée"],
                        ["=NB.SI(A1:A1000;6)", "compte le nombre de 6 obtenus"],
                        ["=NB.SI(A1:A1000;6)/1000", "fréquence observée du 6 (approche 1/6)"],
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "Décortiquer =ENT(ALEA()*6)+1 : ALEA() donne un réel de [0 ; 1[, ×6 le ramène dans [0 ; 6[, ENT prend la partie entière (0 à 5), +1 décale vers {1, …, 6}.",
                    },
                  ],
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : appliquer P = favorables/total sans équiprobabilité",
              badge: "Très fréquent",
              faux: "Utiliser la formule classique même quand les issues n'ont pas la même chance.",
              vrai: "La formule P(A) = cas favorables ÷ total n'est valable que si toutes les issues sont équiprobables.",
              methode: "Repérer dans l'énoncé : « au hasard », « dé équilibré », « pièce non truquée » → équiprobabilité.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : oublier d'additionner les chemins",
              badge: "Très fréquent",
              faux: "P(exactement 1 rouge sur 2 tirages) = 3/8 × 5/8 = 15/64 (un seul chemin).",
              vrai: "Deux chemins mènent à « 1 rouge et 1 bleue » : RB et BR. P = 15/64 + 15/64 = 30/64.",
              methode: "Lister TOUS les chemins menant à l'événement avant de calculer.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : confondre avec et sans remise",
              badge: "Classique",
              faux: "Tirage sans remise dans 3R/5B : P(2e = R) = 3/8.",
              vrai: "Après une rouge, il reste 2R et 5B (7 billes) : P(2e = R | 1re = R) = 2/7.",
              methode: "Sans remise, recompter le contenu de l'urne avant chaque branche.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : confondre fréquence et probabilité",
              badge: "Fréquent",
              faux: "20 lancers, 5 fois le 6 : « le dé est truqué, P(6) = 1/4 ».",
              vrai: "5/20 est une fréquence observée. Un tel écart est normal sur 20 lancers : on ne peut rien conclure.",
              methode: "La fréquence estime la probabilité. Pas de conclusion sur un petit nombre d'essais.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école : le regard du futur enseignant",
              text: "Au cycle 2, les élèves perçoivent l'aléatoire par des jeux de dés et de cartes, et distinguent ce qui est certain, impossible ou aléatoire : la fondation, sans probabilité formelle.\n\nAu cycle 3, les programmes introduisent la notion de probabilité, la fréquence, et le lien fréquence / probabilité. Les élèves simulent des expériences (dés, puis tableur ou Scratch) pour observer la stabilisation des fréquences : la loi des grands nombres à leur niveau.\n\nCe qu'il faut apporter : comprendre pourquoi « lancer 10 fois un dé et obtenir 3 fois le 6 » ne contredit pas P(6) = 1/6. La simulation informatique, en multipliant les essais, rend cette loi observable, ce qui est impossible à la main.",
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
              title: "La méthode qui fait la différence",
              text: "Avant tout calcul : définir l'univers, vérifier s'il y a équiprobabilité, et choisir le bon outil (formule directe, arbre, ou contraire). Chaque savoir-faire ci-dessous se termine par une vérification.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Calculer une probabilité classique (1 épreuve)",
              intro:
                "**Question type :** « Dans un jeu de 52 cartes, probabilité d'obtenir un cœur ou un as ? »",
              steps: [
                {
                  number: "1",
                  text: "**Définir l'univers et les événements.**",
                  example: { lines: ["Ω = 52 cartes (équiprobables)", "A = cœur (13), B = as (4)"] },
                },
                {
                  number: "2",
                  text: "**Vérifier si les événements sont incompatibles.**",
                  example: { lines: ["A ∩ B = as de cœur = 1 carte → NON incompatibles"] },
                },
                {
                  number: "3",
                  text: "**Appliquer la formule adaptée.**",
                  example: { lines: ["P(A ∪ B) = 13/52 + 4/52 − 1/52 = 16/52 = 4/13 ≈ 0,308"] },
                  warn: "⚠️ Sans soustraire l'as de cœur, on le compterait deux fois.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Dé équilibré. Probabilité d'obtenir un nombre pair ou égal à 1 ?",
              correction: [
                { type: "line", text: "« pair » = {2, 4, 6}, « égal à 1 » = {1} : incompatibles. P = 3/6 + 1/6 = 4/6 = **2/3**." },
                { type: "note", text: "Ici A ∩ B = ∅, on peut additionner directement." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Construire et lire un arbre pondéré (sans remise)",
              intro:
                "**Question type :** « Urne de 4 rouges et 6 vertes, 2 tirages sans remise. P(2 couleurs différentes) ? »",
              steps: [
                {
                  number: "1",
                  text: "**Probabilités du 1er tirage.**",
                  example: { lines: ["P(R) = 4/10 = 2/5, P(V) = 6/10 = 3/5"] },
                },
                {
                  number: "2",
                  text: "**Probabilités du 2e tirage, sans remise (recompter).**",
                  example: { lines: ["Après R : P(V|R) = 6/9 = 2/3", "Après V : P(R|V) = 4/9"] },
                },
                {
                  number: "3",
                  text: "**Identifier les chemins favorables et additionner.**",
                  example: { lines: ["P(RV) = 2/5 × 2/3 = 4/15", "P(VR) = 3/5 × 4/9 = 4/15", "P = 4/15 + 4/15 = 8/15 ≈ 0,533"] },
                  warn: "⚠️ Les probabilités du 2e tirage dépendent du 1er : c'est la différence avec le tirage avec remise.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Urne de 3 rouges, 2 bleues. Tirage de 2 sans remise. P(rouge puis bleue) ?",
              correction: [
                { type: "line", text: "P(RB) = 3/5 × 2/4 = 3/5 × 1/2 = **3/10**." },
                { type: "note", text: "Après une rouge, il reste 2R et 2B (4 billes) : P(B|R) = 2/4." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Utiliser l'événement contraire (« au moins un »)",
              intro:
                "**Question type :** « 3 lancers d'une pièce équilibrée. P(au moins un Pile) ? »",
              steps: [
                {
                  number: "1",
                  text: "**Repérer « au moins un » → passer au contraire.**",
                  example: { lines: ["Ā = aucun Pile = 3 fois Face"] },
                },
                {
                  number: "2",
                  text: "**Calculer P(Ā) (lancers indépendants → on multiplie).**",
                  example: { lines: ["P(FFF) = 1/2 × 1/2 × 1/2 = 1/8"] },
                },
                {
                  number: "3",
                  text: "**Conclure avec P(A) = 1 − P(Ā).**",
                  example: { lines: ["P(A) = 1 − 1/8 = 7/8 = 0,875"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Urne 2R, 3B, 2 tirages avec remise. P(au moins une rouge) ?",
              correction: [
                { type: "line", text: "Contraire = aucune rouge = BB : P(BB) = 3/5 × 3/5 = 9/25. P(au moins 1R) = 1 − 9/25 = **16/25**." },
                { type: "note", text: "Le contraire évite de sommer RR + RB + BR." },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Lire et expliquer une simulation tableur",
              intro:
                "**Question type :** « La colonne A contient =ENT(ALEA()*6)+1, la colonne B =SI(A1=6;1;0). Que calcule =SOMME(B1:B1000)/1000 ? »",
              steps: [
                {
                  number: "1",
                  text: "**Décortiquer les formules cellule par cellule.**",
                  example: { lines: ["ENT(ALEA()*6)+1 → dé de 1 à 6", "SI(A1=6;1;0) → 1 si 6, sinon 0"] },
                },
                {
                  number: "2",
                  text: "**Interpréter le calcul final.**",
                  example: { lines: ["SOMME(B1:B1000) = nombre de 6 sur 1 000 lancers", "÷ 1 000 = fréquence observée du 6"] },
                },
                {
                  number: "💡",
                  text: "**Relier à la loi des grands nombres.**",
                  example: { lines: ["Cette fréquence approche 1/6 ≈ 0,167, d'autant mieux que n est grand."] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Que renvoie =SI(MOD(A1;2)=0;1;0) appliquée à un résultat de dé ?",
              correction: [
                { type: "line", text: "MOD(A1;2) est le reste de la division par 2 : 0 si pair. La formule renvoie **1 si le résultat est pair, 0 sinon**." },
                { type: "note", text: "Pratique pour estimer la fréquence des résultats pairs." },
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
              text: "8 questions rapides pour vérifier que le Cours et la Méthode sont bien ancrés. Le détail objectif par objectif est dans l'onglet Auto-évaluation.",
            },
            {
              type: "quizBlock",
              questions: [
                {
                  objectifId: "e1",
                  question: "Que vaut la probabilité d'un événement impossible ?",
                  options: ["1", "0,5", "0", "Cela dépend"],
                  correctIndex: 2,
                  explanation: "Un événement impossible (l'ensemble vide) a une probabilité de 0. L'événement certain (Ω) a une probabilité de 1.",
                },
                {
                  objectifId: "e2",
                  question: "Dé équilibré. Probabilité d'obtenir un multiple de 3 ?",
                  options: ["1/2", "1/3", "1/6", "2/3"],
                  correctIndex: 1,
                  explanation: "Multiples de 3 sur un dé : {3, 6}, soit 2 issues sur 6. P = 2/6 = 1/3 (équiprobabilité).",
                },
                {
                  objectifId: "e3",
                  question: "P(obtenir 6) = 1/6. Que vaut P(ne pas obtenir 6) ?",
                  options: ["1/6", "5/6", "1/2", "0"],
                  correctIndex: 1,
                  explanation: "P(Ā) = 1 − P(A) = 1 − 1/6 = 5/6.",
                },
                {
                  objectifId: "e4",
                  question: "Sur un dé, A = « pair » et B = « multiple de 3 ». Que vaut P(A ou B) ?",
                  options: ["5/6", "2/3", "1/2", "1"],
                  correctIndex: 1,
                  explanation: "A = {2,4,6}, B = {3,6}, A ∩ B = {6}. P(A ∪ B) = 3/6 + 2/6 − 1/6 = 4/6 = 2/3. Les événements ne sont pas incompatibles.",
                },
                {
                  objectifId: "e5",
                  question: "Dans un arbre, comment calcule-t-on la probabilité d'un chemin ?",
                  options: ["En additionnant les branches", "En multipliant les branches du chemin", "En prenant la plus petite", "En divisant par le nombre de branches"],
                  correctIndex: 1,
                  explanation: "Règle 1 de l'arbre : la probabilité d'un chemin est le produit des probabilités des branches qui le composent.",
                },
                {
                  objectifId: "e6",
                  question: "Urne 3R, 5B. Sans remise, après avoir tiré une rouge, que vaut P(rouge au 2e tirage) ?",
                  options: ["3/8", "2/7", "3/7", "2/8"],
                  correctIndex: 1,
                  explanation: "Sans remise, après une rouge il reste 2R et 5B, soit 7 billes : P(R au 2e) = 2/7.",
                },
                {
                  objectifId: "e7",
                  question: "On lance un dé 1 000 fois : la fréquence du 6 vaut 0,168. Comment l'interpréter ?",
                  options: ["Le dé est truqué", "C'est cohérent avec P(6) = 1/6 (loi des grands nombres)", "C'est une erreur de calcul", "La probabilité est devenue 0,168"],
                  correctIndex: 1,
                  explanation: "0,168 est une fréquence observée, très proche de 1/6 ≈ 0,167. La loi des grands nombres prévoit ce rapprochement quand n est grand.",
                },
                {
                  objectifId: "e8",
                  question: "Que simule la formule tableur =ENT(ALEA()*6)+1 ?",
                  options: ["Un tirage entre 0 et 6", "Un lancer de dé équilibré (1 à 6)", "Une pièce de monnaie", "Un nombre décimal"],
                  correctIndex: 1,
                  explanation: "ALEA() ∈ [0 ; 1[, ×6 ∈ [0 ; 6[, ENT donne 0 à 5, +1 donne 1 à 6 : c'est un dé équilibré.",
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
              text: "Définissez l'univers, vérifiez l'équiprobabilité, choisissez le bon outil. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Probabilité classique, contraire, réunion",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : une urne simple",
              objectifTag: "Probabilité classique",
              enonce: "Une urne contient 5 billes rouges, 3 bleues et 2 jaunes. On tire une bille au hasard.",
              question: "a) Combien de billes au total ?\nb) Calculer P(rouge), P(bleue), P(jaune).\nc) Vérifier que la somme vaut 1.\nd) Calculer P(ne pas tirer une rouge).",
              correction: [
                { type: "line", label: "a)", text: "10 billes au total (tirage au hasard → équiprobabilité)." },
                { type: "line", label: "b)", text: "P(rouge) = 5/10 = 1/2 ; P(bleue) = 3/10 ; P(jaune) = 2/10 = 1/5." },
                { type: "line", label: "c)", text: "5/10 + 3/10 + 2/10 = 10/10 = 1 ✓." },
                { type: "line", label: "d)", text: "P(pas rouge) = 1 − 1/2 = 1/2 (ou directement 5/10)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : dé et événements",
              objectifTag: "Réunion d'événements",
              enonce: "On lance un dé équilibré. A = « multiple de 3 », B = « nombre impair ».",
              question: "a) Lister les issues de A et de B.\nb) Calculer P(A) et P(B).\nc) A et B sont-ils incompatibles ? Calculer P(A ∪ B).",
              correction: [
                { type: "line", label: "a)", text: "A = {3, 6}, B = {1, 3, 5}." },
                { type: "line", label: "b)", text: "P(A) = 2/6 = 1/3 ; P(B) = 3/6 = 1/2." },
                { type: "line", label: "c)", text: "A ∩ B = {3} ≠ ∅ → non incompatibles. P(A ∪ B) = 1/3 + 1/2 − 1/6 = 4/6 = 2/3." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : arbres pondérés",
              sub: "Avec et sans remise",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : arbre avec remise",
              objectifTag: "Arbre, contraire",
              enonce: "Une boîte contient 2 jetons rouges et 3 jetons noirs. On tire 2 jetons successivement avec remise.",
              question: "a) Donner les probabilités à chaque tirage.\nb) Calculer P(2 jetons de même couleur).\nc) Calculer P(au moins un rouge).",
              correction: [
                { type: "line", label: "a)", text: "Avec remise : P(R) = 2/5, P(N) = 3/5 à chaque tirage (somme 1 à chaque nœud)." },
                { type: "line", label: "b)", text: "P(RR) = 4/25, P(NN) = 9/25 → même couleur = 13/25 = 0,52." },
                { type: "line", label: "c)", text: "Contraire NN = 9/25 → P(au moins 1 rouge) = 1 − 9/25 = 16/25 = 0,64." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : arbre sans remise",
              objectifTag: "Arbre sans remise",
              enonce: "Un sac contient 3 boules blanches et 2 boules noires. On tire 2 boules successivement sans remise.",
              question: "a) Donner les probabilités du 1er puis du 2e tirage.\nb) Calculer P(exactement 1 blanche).\nc) Calculer P(2 blanches).",
              correction: [
                { type: "line", label: "a)", text: "1er : P(B) = 3/5, P(N) = 2/5. Après B : P(B|B) = 2/4, P(N|B) = 2/4. Après N : P(B|N) = 3/4, P(N|N) = 1/4." },
                { type: "line", label: "b)", text: "BN + NB = 3/5 × 2/4 + 2/5 × 3/4 = 3/10 + 3/10 = 6/10 = 3/5." },
                { type: "line", label: "c)", text: "P(BB) = 3/5 × 2/4 = 6/20 = 3/10." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : dénombrement et probabilité",
              sub: "Combiner les outils",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : nombre tiré au hasard",
              objectifTag: "Dénombrement + probabilité",
              enonce: "On choisit au hasard un entier de 1 à 20 inclus.",
              question: "a) P(multiple de 3) ?\nb) P(multiple de 5) ?\nc) P(multiple de 3 ou de 5) ?\nd) P(multiple de 3 et de 5) ?",
              correction: [
                { type: "line", label: "a)", text: "{3, 6, 9, 12, 15, 18} → 6 valeurs → P = 6/20 = 3/10." },
                { type: "line", label: "b)", text: "{5, 10, 15, 20} → 4 valeurs → P = 4/20 = 1/5." },
                { type: "line", label: "c)", text: "A ∩ B = multiples de 15 = {15} → 1 valeur. P(A ∪ B) = 6/20 + 4/20 − 1/20 = 9/20." },
                { type: "line", label: "d)", text: "P(multiple de 15) = 1/20 (lien avec le PPCM, [fiche N°6](fiche:divisibilite-pgcd-ppcm))." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : simulation et loi des grands nombres",
              sub: "Interpréter une expérience",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 4 : fréquence et probabilité",
              objectifTag: "Loi des grands nombres",
              enonce: "On simule au tableur 1 000 lancers d'un dé. La fréquence observée du 6 est 0,154.",
              question: "a) Quelle est la probabilité théorique d'obtenir 6 ?\nb) L'écart avec 0,154 est-il inquiétant ?\nc) Que prédit la loi des grands nombres si on passe à 100 000 lancers ?",
              correction: [
                { type: "line", label: "a)", text: "Dé équilibré : P(6) = 1/6 ≈ 0,167." },
                { type: "line", label: "b)", text: "Non : 0,154 est une fréquence observée, proche de 0,167. Un petit écart est normal sur 1 000 lancers." },
                { type: "line", label: "c)", text: "La fréquence se rapprochera encore davantage de 1/6 : plus n est grand, meilleure est l'estimation." },
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
              text: "Cet exercice reproduit le format et la difficulté d'un sujet de concours. Comptez 25 minutes, en conditions réelles, avec justifications complètes.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 5 : la kermesse de l'école",
              objectifTag: "Dénombrement, arbre, loi des grands nombres",
              enonce:
                "Jeu des dés : un élève lance deux dés équilibrés et gagne si la somme est supérieure ou égale à 10.\nJeu des jetons : un sachet contient 4 jetons rouges et 2 verts ; l'élève tire 2 jetons sans remise et gagne si les deux sont de même couleur.",
              question:
                "1.1 Combien de paires (d₁ ; d₂) au total ?\n1.2 Lister les paires de somme ≥ 10. En déduire P(gagner aux dés).\n1.3 Calculer P(perdre aux dés).\n2.1 Construire l'arbre du tirage de 2 jetons sans remise et vérifier que la somme des probabilités finales vaut 1.\n2.2 Calculer P(gagner aux jetons).\n2.3 Quel jeu donne le plus de chances de gagner ?\n3.1 On simule le jeu des dés 500 fois, 90 victoires. Calculer la fréquence et la comparer à la théorie.\n3.2 Que prédit la loi des grands nombres avec 10 000 simulations ?",
              correction: [
                { type: "line", label: "1.1", text: "6 × 6 = 36 paires équiprobables." },
                { type: "line", label: "1.2", text: "Somme ≥ 10 : (4,6), (5,5), (6,4), (5,6), (6,5), (6,6) → 6 paires. P(gagner aux dés) = 6/36 = 1/6 ≈ 0,167." },
                { type: "line", label: "1.3", text: "P(perdre aux dés) = 1 − 1/6 = 5/6 ≈ 0,833." },
                { type: "line", label: "2.1", text: "1er : P(R) = 4/6 = 2/3, P(V) = 1/3. Après R : P(R|R) = 3/5, P(V|R) = 2/5. Après V : P(R|V) = 4/5, P(V|V) = 1/5. Vérif : 6/15 + 4/15 + 4/15 + 1/15 = 1 ✓." },
                { type: "line", label: "2.2", text: "Même couleur = RR ou VV : 2/3 × 3/5 + 1/3 × 1/5 = 6/15 + 1/15 = 7/15 ≈ 0,467." },
                { type: "line", label: "2.3", text: "Jetons (≈ 46,7 %) bien plus avantageux que les dés (≈ 16,7 %)." },
                { type: "line", label: "3.1", text: "Fréquence = 90/500 = 0,18 = 18 %, cohérent avec 1/6 ≈ 16,7 % (écart normal sur 500 essais)." },
                { type: "line", label: "3.2", text: "La fréquence observée se rapprochera de 1/6 : avec 10 000 simulations, elle sera très proche de 16,7 %." },
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
              title: "Erreur type · Exercice 6 : additionner sans vérifier l'incompatibilité",
              objectifTag: "Réunion d'événements",
              enonce: "**Copie d'un candidat :** dé équilibré, A = « pair », B = « multiple de 3 ». Calculer P(A ou B).\n*Réponse produite :* « P = 1/2 + 1/3 = 5/6 ».",
              question: "a) Identifier l'erreur.\nb) Donner le calcul correct.",
              correction: [
                { type: "paragraph", text: "**Erreur : addition directe sur des événements non incompatibles.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "6 est à la fois pair et multiple de 3 : A ∩ B = {6} ≠ ∅. Le 6 est compté deux fois." },
                    { text: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 3/6 + 2/6 − 1/6 = 4/6 = 2/3." },
                  ],
                },
                { type: "note", text: "Toujours vérifier si A ∩ B = ∅ avant d'additionner." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 7 : probabilités figées sans remise",
              objectifTag: "Tirage sans remise",
              enonce: "**Copie d'un candidat :** urne 3 rouges, 2 bleues, 2 tirages sans remise. Calculer P(rouge puis bleue).\n*Réponse produite :* « 3/5 × 2/5 = 6/25 ».",
              question: "a) Identifier l'erreur.\nb) Donner le calcul correct.",
              correction: [
                { type: "paragraph", text: "**Erreur : probabilités du 2e tirage non recalculées.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Après une rouge, il reste 2R et 2B (4 billes), pas 5 : P(B|R) = 2/4, pas 2/5." },
                    { text: "P(RB) = 3/5 × 2/4 = 3/5 × 1/2 = 3/10." },
                  ],
                },
                { type: "note", text: "Sans remise : recompter le contenu de l'urne avant chaque branche." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 8 : fréquence prise pour la probabilité",
              objectifTag: "Loi des grands nombres",
              enonce: "**Copie d'un candidat :** on lance 20 fois un dé, le 6 sort 5 fois.\n*Réponse produite :* « P(6) = 5/20 = 0,25, le dé est truqué ».",
              question: "a) Identifier l'erreur.\nb) Donner l'interprétation correcte.",
              correction: [
                { type: "paragraph", text: "**Erreur : fréquence observée confondue avec la probabilité.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "5/20 est une fréquence observée sur 20 lancers, pas la probabilité." },
                    { text: "Pour un dé équilibré, P(6) = 1/6 ≈ 0,167. Un écart sur 20 lancers est normal." },
                    { text: "On ne peut pas conclure que le dé est truqué : il faudrait un très grand nombre d'essais." },
                  ],
                },
                { type: "note", text: "La fréquence estime la probabilité ; la fiabilité augmente avec le nombre d'essais." },
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
                  question: "Que signifie P(A) = 0 ? Et P(A) = 1 ?",
                  answer:
                    "P(A) = 0 : événement impossible (jamais réalisé). P(A) = 1 : événement certain (toujours réalisé). Une probabilité est toujours entre 0 et 1.",
                  astuce: "Un résultat comme P = 1,2 ou P = −0,3 signale une erreur de calcul.",
                },
                {
                  question: "Formule de l'événement contraire ? Quand l'utiliser ?",
                  answer:
                    "P(Ā) = 1 − P(A). À utiliser surtout pour « au moins un… » : calculer « aucun » et soustraire à 1. Exemple : P(au moins un Pile sur 3 lancers) = 1 − (1/2)³ = 7/8.",
                },
                {
                  question: "Quelle condition pour additionner P(A) + P(B) directement ?",
                  answer:
                    "A et B doivent être incompatibles (A ∩ B = ∅). Sinon : P(A ∪ B) = P(A) + P(B) − P(A ∩ B), pour ne pas compter deux fois les issues communes.",
                },
                {
                  question: "Les deux règles d'or de l'arbre pondéré ?",
                  answer:
                    "Règle 1 : multiplier les probabilités des branches le long d'un chemin. Règle 2 : additionner les probabilités de tous les chemins menant à l'événement. En bref : × sur un chemin, + entre plusieurs chemins.",
                  astuce: "Vérifier : somme des branches d'un nœud = 1, somme de tous les chemins = 1.",
                },
                {
                  question: "Différence entre tirage avec et sans remise ?",
                  answer:
                    "Avec remise : on remet l'objet, les probabilités restent identiques (épreuves indépendantes). Sans remise : le total diminue et les probabilités du 2e tirage changent selon le 1er. Toujours recompter l'urne avant chaque branche.",
                },
                {
                  question: "Qu'est-ce que la loi des grands nombres ?",
                  answer:
                    "Quand on répète une expérience un grand nombre de fois, la fréquence observée d'un événement converge vers sa probabilité théorique : quand n → ∞, fréquence(A) → P(A).",
                  astuce: "Elle ne dit pas que les séquences s'équilibrent à court terme : chaque lancer est indépendant.",
                },
                {
                  question: "Que simule =ENT(ALEA()*6)+1 dans un tableur ?",
                  answer:
                    "Un lancer de dé équilibré (résultat de 1 à 6). ALEA() ∈ [0 ; 1[, ×6 ∈ [0 ; 6[, ENT donne 0 à 5, +1 donne 1 à 6. Pour une pièce : =SI(ALEA()<0,5;\"P\";\"F\").",
                },
                {
                  question: "Comment vérifier la cohérence d'un arbre pondéré ?",
                  answer:
                    "Deux vérifications : pour chaque nœud, la somme des branches sortantes = 1 ; pour tout l'arbre, la somme des chemins finaux = 1. Si l'une échoue, il y a une erreur de probabilité.",
                },
                {
                  question: "Calculer P(au moins une rouge sur 2 tirages avec remise) dans une urne 2R, 3B ?",
                  answer:
                    "Par le contraire : « aucune rouge » = BB, P(BB) = 3/5 × 3/5 = 9/25. P(au moins 1R) = 1 − 9/25 = 16/25 = 0,64. Bien plus rapide que de sommer RR + RB + BR.",
                },
                {
                  question: "Qu'est-ce que l'équiprobabilité ? Quand s'applique-t-elle ?",
                  answer:
                    "Toutes les issues ont la même probabilité. On peut alors écrire P(A) = nombre d'issues de A ÷ nombre total. Conditions : dé équilibré, pièce non truquée, tirage au hasard d'objets identiques.",
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
              center: { title: "Probabilités", subtitle: "Mesurer le hasard" },
              branches: [
                {
                  title: "Vocabulaire",
                  variant: "blue",
                  lines: ["Univers Ω, issue, événement", "Certain (1), impossible (0)", "0 ≤ P(A) ≤ 1"],
                },
                {
                  title: "Probabilité classique",
                  variant: "blue",
                  lines: ["P(A) = favorables ÷ total", "Sous équiprobabilité"],
                },
                {
                  title: "Événements composés",
                  variant: "green",
                  lines: ["P(Ā) = 1 − P(A)", "Incompatibles : P(A) + P(B)", "Général : − P(A ∩ B)"],
                },
                {
                  title: "Arbres pondérés",
                  variant: "green",
                  lines: ["× sur un chemin", "+ entre chemins", "Avec / sans remise"],
                },
                {
                  title: "Loi des grands nombres",
                  variant: "yellow",
                  lines: ["Fréquence → probabilité", "Estimation meilleure si n grand"],
                },
                {
                  title: "Simulation tableur",
                  variant: "purple",
                  dashed: true,
                  lines: ["=ENT(ALEA()*6)+1 → dé", "=NB.SI / 1000 → fréquence"],
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
