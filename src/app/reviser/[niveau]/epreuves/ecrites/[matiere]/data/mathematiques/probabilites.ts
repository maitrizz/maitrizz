import type { Fiche } from "@/components/fiche/types";
import { COPIES_PROBABILITES } from "./copies-probabilites";
import { EXERCICES_PROBABILITES } from "./exercices-probabilites";

export const SAVOIR_FAIRE = [
  { id: "proba-classique", label: "Calculer une probabilité classique" },
  { id: "contraire", label: "Utiliser l'événement contraire" },
  { id: "reunion", label: "Réunion d'événements composés" },
  { id: "arbre", label: "Construire un arbre pondéré" },
  { id: "remise", label: "Distinguer avec et sans remise" },
  { id: "loi-grands-nombres", label: "Fréquence et loi des grands nombres" },
];

export const ficheProbabilites: Fiche = {
  slug: "probabilites",
  matiere: "mathematiques",
  numero: 12,
  partie: "Partie 2 : Organisation, données, fonctions",
  title: "Probabilités",
  subtitle:
    "Expérience aléatoire · événements · équiprobabilité · complémentaire · événements incompatibles · arbres pondérés · loi des grands nombres · simulation tableur.",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème B", variant: "info" },
  ],
  metaTitle: "Probabilités (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur les probabilités : vocabulaire, probabilité classique, événement contraire, événements incompatibles, arbres pondérés (avec et sans remise), loi des grands nombres et simulation tableur. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
              title: "Pourquoi les probabilités ?",
              text: "Vous lancez un dé : le résultat est imprévisible, mais vous savez que le 2 sort « 1 fois sur 6 en moyenne ». Une probabilité, c'est un nombre entre 0 et 1 qui mesure la chance qu'un événement se produise.\n\nElles sont partout : météo, jeux, assurances, médecine, sondages. Au CRPE, c'est l'un des sujets les plus testés (arbres pondérés, événement composé, lien avec le dénombrement ([fiche N°7](fiche:denombrement)), simulation tableur). Bonne nouvelle : les probabilités demandent surtout de la méthode (bien définir les événements, construire l'arbre, lire les bonnes branches). Avec la méthode, ce sont des points assurés.",
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
                      text: "Décortiquer =ENT(ALEA()*6)+1 : ALEA() donne un réel de [0 ; 1[, ×6 le ramène dans [0 ; 6[, ENT prend la partie entière (0 à 5), +1 décale vers {1, …, 6}. Les formules de tableur sont détaillées dans la [fiche N°27](fiche:algorithmique-scratch-tableur).",
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
                  number: "3",
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
              title: "Probabilités",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_PROBABILITES,
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
              title: "Probabilités",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_PROBABILITES,
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
      ],
    },
  ],
};
