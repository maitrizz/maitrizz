import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je reconnais une suite arithmétique (différence constante) et je trouve sa raison d" },
  { id: "e2", label: "Je reconnais une suite géométrique (rapport constant) et je trouve sa raison q" },
  { id: "e3", label: "Je calcule un terme général arithmétique uₙ = u₁ + (n − 1) × d, sans erreur d'indice" },
  { id: "e4", label: "Je calcule un terme général géométrique uₙ = u₁ × q^(n − 1)" },
  { id: "e5", label: "Je construis la raison géométrique à partir d'un taux : +t % donne q = 1 + t/100" },
  { id: "e6", label: "Je calcule la somme des n premiers termes d'une suite arithmétique" },
  { id: "e7", label: "Je modélise une situation concrète par une suite (type, u₁, raison) et je lis un graphique" },
  { id: "e8", label: "Je sais que la croissance géométrique domine toujours la croissance arithmétique à long terme" },
];

export const ficheSuitesNumeriques: Fiche = {
  slug: "suites-numeriques",
  matiere: "mathematiques",
  numero: 10,
  partie: "Partie 1 : Nombres et calcul",
  title: "Suites numériques",
  subtitle:
    "Suite arithmétique (raison d, terme général, somme) · suite géométrique (raison q, terme général, somme) · reconnaître le type · modélisation · représentation graphique",
  badges: [
    { label: "★★ Fréquent", variant: "hot" },
    { label: "Programme Seconde", variant: "info" },
  ],
  metaTitle: "Suites arithmétiques et géométriques (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur les suites numériques : suites arithmétiques et géométriques, raison, terme général, somme des premiers termes, reconnaître le type, modéliser une situation et lire un graphique. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                  title: "La notion de suite",
                  text: "Une liste ordonnée de nombres, définie de façon explicite ou récurrente.",
                },
                {
                  number: "②",
                  title: "La suite arithmétique",
                  text: "On ajoute toujours le même nombre d : terme général et somme.",
                },
                {
                  number: "③",
                  title: "La suite géométrique",
                  text: "On multiplie toujours par le même nombre q : terme général et somme.",
                },
                {
                  number: "④",
                  title: "Reconnaître et représenter",
                  text: "Identifier le type, modéliser une situation, lire un graphique.",
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
              variant: "warning",
              title: "⚠️ Programme de Seconde",
              text: "Les suites relèvent du programme de Seconde. Elles sont attendues au CRPE M2 et conservées à ce titre, mais à retirer lors de la future dérivation L3 (qui s'appuie sur le seul programme cycle 4).",
            },
            {
              type: "callout",
              variant: "info",
              title: "Pourquoi les suites ?",
              text: "Une enseignante économise 50 € par mois : 200 € en janvier, 250 € en février, 300 € en mars… On pourrait additionner mois par mois, ou remarquer que le montant augmente de 50 € à chaque étape. C'est une suite arithmétique : on ajoute toujours le même nombre.\n\nAutre situation : 1 000 € placés à 3 % par an. Chaque année, le capital est multiplié par 1,03 ; après n années, 1 000 × 1,03ⁿ. C'est une suite géométrique : on multiplie toujours par le même nombre.\n\nLes suites modélisent les phénomènes répétitifs (épargne, croissance, population). Au CRPE, elles arrivent presque toujours sous forme de problèmes : l'enjeu est de reconnaître le type et d'appliquer les bonnes formules.",
            },
            {
              type: "subsection",
              number: "①",
              title: "La notion de suite : une liste ordonnée de nombres",
              blocks: [
                {
                  type: "paragraph",
                  text: "Une suite numérique est une liste ordonnée de nombres, notés u₀, u₁, u₂, u₃… (ou à partir de u₁). Chaque nombre est un **terme**, et son numéro est le **rang** (ou indice).",
                },
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Forme explicite",
                      variant: "info",
                      lines: ["uₙ donné directement en fonction de n.", "uₙ = 3n + 1 → 1, 4, 7, 10…", "Avantage : calcul direct de n'importe quel terme."],
                    },
                    {
                      title: "Forme récurrente",
                      variant: "info",
                      lines: ["Règle de passage d'un terme au suivant.", "u₀ = 1, uₙ₊₁ = uₙ + 3 → 1, 4, 7, 10…", "Avantage : facile à comprendre et à modéliser."],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Les deux formes décrivent la même suite. Au CRPE, l'énoncé donne souvent la forme récurrente (« chaque année, on ajoute / on multiplie… ») et demande la forme explicite (uₙ = …).",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "La suite arithmétique : on ajoute toujours le même nombre",
              blocks: [
                {
                  type: "paragraph",
                  text: "Une suite est **arithmétique** quand on passe d'un terme au suivant en ajoutant toujours le même nombre, la **raison**, notée d. Exemples : économiser 50 € par mois, remplir un réservoir à débit constant.",
                },
                {
                  type: "formulaBlock",
                  lines: [
                    "Récurrence : **uₙ₊₁ = uₙ + d** ; raison d = uₙ₊₁ − uₙ",
                    "Terme général : **uₙ = u₁ + (n − 1) × d**",
                    "Somme : **Sₙ = n × (u₁ + uₙ) ÷ 2** (n fois la moyenne du premier et du dernier terme)",
                  ],
                },
                {
                  type: "paragraph",
                  text: "**Exemple :** épargne de 50 €/mois, départ à 200 € (u₁ = 200, d = 50). Terme général : uₙ = 200 + (n − 1) × 50 = 150 + 50n. Après 24 mois : u₂₄ = 150 + 50 × 24 = 1 350 €. Somme des 24 versements : S₂₄ = 24 × (200 + 1 350) ÷ 2 = 18 600 €.",
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "**Variation :** d > 0 croissante, d < 0 décroissante, d = 0 constante. **Graphique :** les points sont alignés sur une droite, la signature visuelle d'une suite arithmétique.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "La suite géométrique : on multiplie toujours par le même nombre",
              blocks: [
                {
                  type: "paragraph",
                  text: "Une suite est **géométrique** quand on passe d'un terme au suivant en multipliant toujours par le même nombre, la **raison**, notée q. Exemples : intérêts composés, croissance de population, décroissance radioactive.",
                },
                {
                  type: "formulaBlock",
                  lines: [
                    "Récurrence : **uₙ₊₁ = q × uₙ** ; raison q = uₙ₊₁ ÷ uₙ",
                    "Terme général : **uₙ = u₁ × q^(n − 1)**",
                    "Somme (si q ≠ 1) : **Sₙ = u₁ × (1 − qⁿ) ÷ (1 − q)**",
                  ],
                },
                {
                  type: "paragraph",
                  text: "**Exemple :** capital de 1 000 € à 3 % par an (u₁ = 1 000, q = 1,03). Terme général : uₙ = 1 000 × 1,03^(n − 1). Après 10 ans : u₁₀ = 1 000 × 1,03⁹ ≈ 1 305 €.",
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "**Variation :** q > 1 croissante, 0 < q < 1 décroissante, q < 0 termes alternés. **Graphique :** les points ne sont pas alignés, ils forment une courbe (croissance ou décroissance exponentielle).",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Reconnaître le type : la question clé avant tout calcul",
              blocks: [
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Arithmétique ?",
                      variant: "success",
                      lines: ["Calculer uₙ₊₁ − uₙ sur plusieurs termes.", "Différence constante → arithmétique.", "3, 7, 11, 15… → d = 4"],
                    },
                    {
                      title: "Géométrique ?",
                      variant: "success",
                      lines: ["Calculer uₙ₊₁ ÷ uₙ sur plusieurs termes.", "Rapport constant → géométrique.", "2, 6, 18, 54… → q = 3"],
                    },
                  ],
                },
                {
                  type: "table",
                  headers: ["Critère", "Arithmétique", "Géométrique"],
                  rows: [
                    ["Passage au terme suivant", "on ajoute d", "on multiplie par q"],
                    ["Test", "uₙ₊₁ − uₙ constante", "uₙ₊₁ ÷ uₙ constant"],
                    ["Terme général", "u₁ + (n − 1) × d", "u₁ × q^(n − 1)"],
                    ["Graphique", "points alignés", "points sur une courbe"],
                    ["Situations", "épargne constante, paliers fixes", "intérêts composés, taux annuel"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Tester sur au moins 3 termes",
                  text: "Ne jamais conclure sur les deux premiers termes seulement. 2, 6, 18, 54 : 6 − 2 = 4 ferait croire à une suite arithmétique, mais 18 − 6 = 12 ≠ 4. Le rapport, lui, est constant (3) : c'est géométrique.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : confondre raison arithmétique (d) et géométrique (q)",
              badge: "Très fréquent",
              faux: "Suite 3, 6, 12, 24 : « arithmétique, d = 3 ».",
              vrai: "6 ÷ 3 = 2, 12 ÷ 6 = 2, 24 ÷ 12 = 2 : rapport constant, donc géométrique, q = 2.",
              methode: "Toujours tester les deux : la différence ET le rapport. Si l'un est constant, le type est déterminé.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : erreur d'indice dans le terme général",
              badge: "Très fréquent",
              faux: "Pour une suite arithmétique, u₅ = u₁ + 5 × d.",
              vrai: "u₅ = u₁ + (5 − 1) × d = u₁ + 4 × d : on ajoute d exactement (n − 1) fois.",
              methode: "De u₁ à u₅, il y a 4 sauts (pas 5). De u₁ à uₙ, il y a (n − 1) sauts.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : somme géométrique quand q = 1",
              badge: "Classique",
              faux: "Appliquer u₁ × (1 − qⁿ) ÷ (1 − q) avec q = 1 (division par zéro).",
              vrai: "Si q = 1, tous les termes valent u₁, donc Sₙ = n × u₁.",
              methode: "Vérifier que q ≠ 1 avant d'utiliser la formule de somme géométrique.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : confondre taux et raison géométrique",
              badge: "Fréquent",
              faux: "« Le capital augmente de 3 % par an, donc q = 0,03. »",
              vrai: "Augmenter de 3 %, c'est multiplier par 1 + 0,03 = 1,03. La raison est q = 1,03.",
              methode: "Taux de +t % → q = 1 + t/100 ; taux de −t % → q = 1 − t/100.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école : le regard du futur enseignant",
              text: "Aux cycles 2 et 3, les élèves travaillent déjà des suites sans les nommer : suites de nombres pairs, tables de multiplication, régularités dans les figures. Compter de 5 en 5, c'est déjà une suite arithmétique de raison 5.\n\nCe qu'il faut maîtriser : reconnaître qu'un phénomène courant (épargne, croissance, population) se modélise par une suite, en identifier le type, et appliquer les formules pour répondre à des questions de prévision.\n\nLes suites arithmétiques sont implicitement au cœur de la numération et du calcul en primaire. Savoir qu'ajouter toujours le même nombre construit une suite arithmétique permet d'enseigner avec plus de profondeur les régularités que les élèves observent.",
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
              title: "Trois éléments suffisent à tout calculer",
              text: "Avant tout calcul : identifier le type (arithmétique ou géométrique), le premier terme u₁ et la raison (d ou q). Chaque savoir-faire ci-dessous se termine par une vérification.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Reconnaître le type et trouver la raison",
              intro:
                "**Question type :** « Les termes sont 5, 8, 11, 14, 17… Identifier le type et la raison. »",
              steps: [
                {
                  number: "1",
                  text: "**Tester la différence entre termes consécutifs.**",
                  example: { lines: ["8 − 5 = 3, 11 − 8 = 3, 14 − 11 = 3 → constante", "Arithmétique, d = 3"] },
                },
                {
                  number: "2",
                  text: "**Si la différence n'est pas constante, tester le rapport.**",
                  example: { lines: ["2, 6, 18, 54… : 6 ÷ 2 = 3, 18 ÷ 6 = 3 → géométrique, q = 3"] },
                  warn: "⚠️ Si ni la différence ni le rapport n'est constant, ce n'est ni l'un ni l'autre : le dire explicitement.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Quelle est la nature de la suite 10, 7, 4, 1… ? Donner la raison.",
              correction: [
                { type: "line", text: "7 − 10 = −3, 4 − 7 = −3, 1 − 4 = −3 : différence constante → **arithmétique, d = −3** (décroissante)." },
                { type: "note", text: "Une raison négative ne change rien : la différence reste constante." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Calculer un terme général arithmétique",
              intro:
                "**Question type :** « Suite arithmétique u₁ = 7, d = 4. Calculer u₁₀. »",
              steps: [
                {
                  number: "1",
                  text: "**Écrire la formule et identifier les paramètres.**",
                  example: { lines: ["uₙ = u₁ + (n − 1) × d ; u₁ = 7, d = 4, n = 10"] },
                },
                {
                  number: "2",
                  text: "**Appliquer.**",
                  example: { lines: ["u₁₀ = 7 + (10 − 1) × 4 = 7 + 36 = 43"] },
                },
                {
                  number: "3",
                  text: "**Vérifier sur les premiers termes.**",
                  example: { lines: ["7, 11, 15, 19… on ajoute bien 4 ✓"] },
                  warn: "⚠️ Ne pas écrire u₁₀ = 7 + 10 × 4 : c'est (n − 1) sauts, pas n.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Suite arithmétique u₁ = 10, d = 5. Calculer u₇.",
              correction: [
                { type: "line", text: "u₇ = 10 + (7 − 1) × 5 = 10 + 30 = **40**." },
                { type: "note", text: "De u₁ à u₇, on fait 6 sauts. L'erreur serait 10 + 7 × 5 = 45." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Calculer un terme géométrique à partir d'un taux",
              intro:
                "**Question type :** « 2 000 € placés à 5 % d'intérêts composés par an. Capital après 8 ans ? »",
              steps: [
                {
                  number: "1",
                  text: "**Construire le modèle : u₁ et q.**",
                  example: { lines: ["u₁ = 2 000 ; taux +5 % → q = 1 + 5/100 = 1,05"] },
                },
                {
                  number: "2",
                  text: "**Appliquer la formule.**",
                  example: { lines: ["u₈ = 2 000 × 1,05^(8 − 1) = 2 000 × 1,05⁷ ≈ 2 814 €"] },
                },
                {
                  number: "💡",
                  text: "**Interpréter et conclure.**",
                  example: { lines: ["Après 8 ans, le capital est d'environ 2 814 € (814 € d'intérêts)."] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Un capital augmente de 4 % par an. Quelle est la raison q de la suite ?",
              correction: [
                { type: "line", text: "q = 1 + 4/100 = **1,04**." },
                { type: "note", text: "Erreur classique : prendre q = 0,04, ce qui serait une baisse de 96 %." },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Modéliser depuis un énoncé",
              intro:
                "**Question type :** « Une école compte 320 élèves ; l'effectif augmente de 15 par an. Effectif dans 5 ans ? »",
              steps: [
                {
                  number: "1",
                  text: "**Identifier le type via le mot clé.**",
                  example: { lines: ["« augmente de 15 » → on ajoute → arithmétique ; u₁ = 320, d = 15"] },
                },
                {
                  number: "2",
                  text: "**Écrire la suite.**",
                  example: { lines: ["uₙ = 320 + (n − 1) × 15"] },
                },
                {
                  number: "3",
                  text: "**Préciser l'indice de départ, calculer, interpréter.**",
                  example: { lines: ["Si u₁ = effectif actuel, dans 5 ans → n = 6 : u₆ = 320 + 5 × 15 = 395 élèves"] },
                  warn: "⚠️ Toujours préciser si on part de n = 0 ou n = 1 avant de calculer.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Calculer la somme des 5 premiers termes de la suite arithmétique 3, 7, 11, 15, 19.",
              correction: [
                { type: "line", text: "S₅ = 5 × (3 + 19) ÷ 2 = 5 × 11 = **55**." },
                { type: "note", text: "Sₙ = n fois la moyenne du premier et du dernier terme." },
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
                  question: "Quelle est la nature de la suite 5, 9, 13, 17… ?",
                  options: ["Géométrique, q = 4", "Arithmétique, d = 4", "Arithmétique, d = 5", "Ni l'une ni l'autre"],
                  correctIndex: 1,
                  explanation: "9 − 5 = 4, 13 − 9 = 4, 17 − 13 = 4 : différence constante, donc arithmétique de raison d = 4.",
                },
                {
                  objectifId: "e2",
                  question: "Quelle est la nature de la suite 2, 6, 18, 54… ?",
                  options: ["Arithmétique, d = 4", "Géométrique, q = 3", "Arithmétique, d = 16", "Géométrique, q = 4"],
                  correctIndex: 1,
                  explanation: "6 ÷ 2 = 3, 18 ÷ 6 = 3, 54 ÷ 18 = 3 : rapport constant, donc géométrique de raison q = 3.",
                },
                {
                  objectifId: "e3",
                  question: "Suite arithmétique u₁ = 7, d = 4. Combien vaut u₁₀ ?",
                  options: ["47", "43", "40", "44"],
                  correctIndex: 1,
                  explanation: "u₁₀ = u₁ + (10 − 1) × d = 7 + 9 × 4 = 43. On ajoute d exactement (n − 1) fois.",
                },
                {
                  objectifId: "e4",
                  question: "Suite géométrique u₁ = 4, q = 2. Combien vaut u₆ ?",
                  options: ["48", "64", "128", "256"],
                  correctIndex: 2,
                  explanation: "u₆ = u₁ × q^(6 − 1) = 4 × 2⁵ = 4 × 32 = 128.",
                },
                {
                  objectifId: "e5",
                  question: "Un capital augmente de 3 % par an. Quelle est la raison géométrique ?",
                  options: ["q = 0,03", "q = 3", "q = 1,03", "q = 0,97"],
                  correctIndex: 2,
                  explanation: "Augmenter de 3 %, c'est multiplier par 1 + 3/100 = 1,03. Prendre 0,03 serait une baisse de 97 %.",
                },
                {
                  objectifId: "e6",
                  question: "Somme des 5 premiers termes de la suite arithmétique 3, 7, 11, 15, 19 ?",
                  options: ["45", "55", "60", "50"],
                  correctIndex: 1,
                  explanation: "Sₙ = n × (u₁ + uₙ) ÷ 2 = 5 × (3 + 19) ÷ 2 = 5 × 11 = 55.",
                },
                {
                  objectifId: "e7",
                  question: "Sur un graphique, comment reconnaître une suite arithmétique ?",
                  options: ["Les points forment une courbe", "Les points sont alignés sur une droite", "Les points sont dispersés", "Les points descendent toujours"],
                  correctIndex: 1,
                  explanation: "Une suite arithmétique (croissance linéaire) a ses points alignés. Une suite géométrique forme une courbe.",
                },
                {
                  objectifId: "e8",
                  question: "Entre une suite arithmétique (d > 0) et une suite géométrique (q > 1), laquelle l'emporte à long terme ?",
                  options: ["L'arithmétique", "La géométrique", "Elles restent égales", "Cela dépend du premier terme"],
                  correctIndex: 1,
                  explanation: "La croissance géométrique finit toujours par dépasser la croissance arithmétique, même en partant plus bas : c'est la nature exponentielle vs linéaire.",
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
              text: "Commencez toujours par identifier le type, u₁ et la raison. Sans ces trois éléments, aucune formule ne s'applique correctement. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Identifier, trouver la raison, calculer",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : reconnaître le type",
              objectifTag: "Reconnaissance",
              enonce: "Trois suites : A = 3, 7, 11, 15… ; B = 2, 6, 18, 54… ; C = 10, 7, 4, 1…",
              question: "a) Calculer les différences et les rapports.\nb) Identifier le type et la raison de chacune.\nc) La suite C est-elle croissante ou décroissante ?",
              correction: [
                { type: "line", label: "A)", text: "7 − 3 = 4, 11 − 7 = 4 : arithmétique, d = 4." },
                { type: "line", label: "B)", text: "6 ÷ 2 = 3, 18 ÷ 6 = 3 : géométrique, q = 3." },
                { type: "line", label: "C)", text: "7 − 10 = −3, 4 − 7 = −3 : arithmétique, d = −3, donc décroissante." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : terme général",
              objectifTag: "Terme général",
              enonce: "Suite arithmétique u₁ = 5, d = 3. Suite géométrique u₁ = 4, q = 2.",
              question: "a) Calculer u₈ pour l'arithmétique.\nb) Calculer u₆ pour la géométrique.\nc) Pour l'arithmétique, quel est le premier terme supérieur à 100 ?",
              correction: [
                { type: "line", label: "a)", text: "u₈ = 5 + (8 − 1) × 3 = 5 + 21 = 26." },
                { type: "line", label: "b)", text: "u₆ = 4 × 2⁵ = 4 × 32 = 128." },
                { type: "line", label: "c)", text: "5 + (n − 1) × 3 > 100 → n − 1 > 31,6 → n = 33 : u₃₃ = 5 + 32 × 3 = 101." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : modélisation arithmétique",
              sub: "Construire le modèle, interpréter",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : l'épargne de l'association",
              objectifTag: "Modélisation arithmétique",
              enonce: "Une association a 500 € en caisse et reçoit 80 € de cotisations par mois.",
              question:
                "a) Modéliser par une suite (type, u₁, d).\nb) Exprimer uₙ en fonction de n.\nc) À partir de quel mois la caisse dépasse-t-elle 1 500 € ?",
              correction: [
                { type: "line", label: "a)", text: "On ajoute 80 chaque mois → arithmétique, u₁ = 500, d = 80." },
                { type: "line", label: "b)", text: "uₙ = 500 + (n − 1) × 80 = 420 + 80n." },
                { type: "line", label: "c)", text: "420 + 80n > 1 500 → n > 13,5 → n = 14 : à partir du 14e mois (u₁₄ = 1 540 €)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : le placement bancaire",
              objectifTag: "Modélisation géométrique",
              enonce: "Un parent place 3 000 € à 2 % d'intérêts annuels composés.",
              question:
                "a) Modéliser par une suite géométrique (u₁, q).\nb) Calculer le capital après 5 ans (arrondi au centime).\nc) Comparer, au bout de 10 ans, avec des intérêts simples de 2 % (60 € par an).",
              correction: [
                { type: "line", label: "a)", text: "+2 % → q = 1,02, u₁ = 3 000, géométrique." },
                { type: "line", label: "b)", text: "u₅ = 3 000 × 1,02⁴ ≈ 3 247,30 €." },
                { type: "line", label: "c)", text: "Intérêts simples : 3 000 + 10 × 60 = 3 600 €. Composés : 3 000 × 1,02⁹ ≈ 3 586 €. Proches sur 10 ans, mais l'effet composé s'amplifie ensuite." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : comparer deux modèles",
              sub: "Arithmétique contre géométrique",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : la population de l'école",
              objectifTag: "Comparaison de modèles",
              enonce: "En 2020, une école compte 280 élèves. Scénario A : +12 élèves par an. Scénario B : +4 % par an.",
              question:
                "a) Modéliser chaque scénario (type, u₁, raison).\nb) Calculer l'effectif prévu en 2030 (arrondi à l'entier).\nc) Que dit la forme des graphiques sur la nature de chaque scénario ?",
              correction: [
                { type: "line", label: "a)", text: "A : arithmétique, u₁ = 280, d = 12. B : géométrique, u₁ = 280, q = 1,04." },
                { type: "line", label: "b)", text: "2030 → n = 11. A : 280 + 10 × 12 = 400. B : 280 × 1,04¹⁰ ≈ 414." },
                { type: "line", label: "c)", text: "A : points alignés (croissance linéaire). B : courbe de plus en plus pentue (croissance exponentielle), qui finit toujours par dominer A." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : problème niveau CRPE",
              sub: "Modéliser, calculer, raisonner",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 4 : deux financeurs",
              objectifTag: "Modélisation et somme",
              enonce: "Une municipalité verse 5 000 € la 1re année, puis +800 € par an. Une entreprise verse 3 000 € la 1re année, puis +10 % par an.",
              question:
                "a) Modéliser chaque contribution (type, premier terme, raison).\nb) Exprimer aₙ (municipalité) et bₙ (entreprise).\nc) Calculer la contribution de chacun la 6e année.\nd) Calculer la somme versée par la municipalité sur 8 ans.",
              correction: [
                { type: "line", label: "a)", text: "Municipalité : arithmétique, a₁ = 5 000, d = 800. Entreprise : géométrique, b₁ = 3 000, q = 1,10." },
                { type: "line", label: "b)", text: "aₙ = 5 000 + (n − 1) × 800 = 4 200 + 800n ; bₙ = 3 000 × 1,10^(n − 1)." },
                { type: "line", label: "c)", text: "a₆ = 4 200 + 800 × 6 = 9 000 € ; b₆ = 3 000 × 1,10⁵ ≈ 4 831 €." },
                { type: "line", label: "d)", text: "S₈ = 8 × (a₁ + a₈) ÷ 2 = 8 × (5 000 + 10 600) ÷ 2 = 62 400 €." },
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
              text: "Cet exercice reproduit le format et les exigences d'un sujet de concours. Comptez 20 minutes, en conditions réelles, avec justifications complètes.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 5 : le projet de rénovation",
              objectifTag: "Modélisation, comparaison, somme",
              enonce:
                "Une municipalité verse 5 000 € la 1re année, puis augmente sa contribution de 800 € chaque année. Une entreprise verse 3 000 € la 1re année, avec une hausse de 10 % par an.",
              question:
                "1.1 Modéliser chaque contribution (type, premier terme, raison).\n1.2 Exprimer aₙ (municipalité) et bₙ (entreprise) en fonction de n.\n1.3 Calculer la contribution de chacun la 6e année.\n2.1 À partir de quelle année l'entreprise dépasse-t-elle la municipalité ?\n2.2 Calculer la somme versée par la municipalité sur les 8 premières années.\n2.3 Quel financeur sera le plus avantageux à long terme ? Justifier sans calcul.",
              correction: [
                { type: "line", label: "1.1", text: "Municipalité : arithmétique, a₁ = 5 000, d = 800. Entreprise : géométrique, b₁ = 3 000, q = 1,10." },
                { type: "line", label: "1.2", text: "aₙ = 4 200 + 800n ; bₙ = 3 000 × 1,10^(n − 1)." },
                { type: "line", label: "1.3", text: "a₆ = 9 000 € ; b₆ = 3 000 × 1,10⁵ ≈ 4 831 €." },
                { type: "line", label: "2.1", text: "Par tâtonnement : vers la 22e année, b dépasse a (b₂₂ ≈ 22 100 € contre a₂₂ = 21 800 €)." },
                { type: "line", label: "2.2", text: "S₈ = 8 × (5 000 + 10 600) ÷ 2 = 62 400 €." },
                { type: "line", label: "2.3", text: "La croissance géométrique l'emporte toujours à long terme sur la croissance arithmétique : l'entreprise sera inévitablement plus avantageuse après un certain nombre d'années, même en partant plus bas." },
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
              title: "Erreur type · Exercice 6 : erreur d'indice",
              objectifTag: "Terme général",
              enonce: "**Copie d'un candidat :** suite arithmétique u₁ = 10, d = 5. Calculer u₇.\n*Réponse produite :* « u₇ = 10 + 7 × 5 = 45 ».",
              question: "a) Identifier l'erreur.\nb) Donner le calcul correct.",
              correction: [
                { type: "paragraph", text: "**Erreur : multiplication par n au lieu de (n − 1).**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "De u₁ à u₇, il y a 6 sauts, pas 7." },
                    { text: "u₇ = 10 + (7 − 1) × 5 = 10 + 30 = 40." },
                    { text: "Vérification : 10, 15, 20, 25, 30, 35, 40 → u₇ = 40 ✓." },
                  ],
                },
                { type: "note", text: "Réflexe : vérifier sur les premiers termes après application de la formule." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 7 : taux pris pour la raison",
              objectifTag: "Suite géométrique",
              enonce: "**Copie d'un candidat :** capital de 2 000 € augmentant de 4 % par an. Calculer u₃.\n*Réponse produite :* « u₃ = 2 000 × 0,04² = 3,20 € ».",
              question: "a) Identifier l'erreur.\nb) Donner le calcul correct.",
              correction: [
                { type: "paragraph", text: "**Erreur : le taux 0,04 utilisé comme raison.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "La raison n'est pas le taux mais le coefficient multiplicateur 1 + 0,04 = 1,04." },
                    { text: "u₃ = 2 000 × 1,04² = 2 000 × 1,0816 ≈ 2 163 €." },
                    { text: "Le résultat 3,20 € est absurde (un capital qui s'effondre)." },
                  ],
                },
                { type: "note", text: "+t % → q = 1 + t/100 ; −t % → q = 1 − t/100." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 8 : identification trop rapide",
              objectifTag: "Reconnaissance",
              enonce: "**Copie d'un candidat :** suite 2, 6, 18, 54…\n*Réponse produite :* « 6 − 2 = 4, donc arithmétique, d = 4 ».",
              question: "a) Identifier l'erreur.\nb) Donner la bonne nature.",
              correction: [
                { type: "paragraph", text: "**Erreur : conclusion sur les deux premiers termes seulement.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Le candidat n'a pas vérifié les suivants : 18 − 6 = 12 ≠ 4, la différence n'est pas constante." },
                    { text: "Tester le rapport : 6 ÷ 2 = 3, 18 ÷ 6 = 3, 54 ÷ 18 = 3." },
                    { text: "La suite est géométrique de raison q = 3." },
                  ],
                },
                { type: "note", text: "Toujours tester sur au moins 3 termes consécutifs avant de conclure." },
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
                  question: "Qu'est-ce qu'une suite arithmétique ? Comment la reconnaître ?",
                  answer:
                    "On passe d'un terme au suivant en ajoutant toujours le même nombre d (la raison). Test : uₙ₊₁ − uₙ constante. Exemple : 5, 9, 13, 17… → d = 4.",
                  astuce: "Tester sur au moins 3 termes consécutifs, pas seulement les deux premiers.",
                },
                {
                  question: "Qu'est-ce qu'une suite géométrique ? Comment la reconnaître ?",
                  answer:
                    "On passe d'un terme au suivant en multipliant toujours par le même nombre q (la raison). Test : uₙ₊₁ ÷ uₙ constant. Exemple : 3, 6, 12, 24… → q = 2.",
                },
                {
                  question: "Terme général d'une suite arithmétique ?",
                  answer:
                    "uₙ = u₁ + (n − 1) × d, avec n le rang, u₁ le premier terme, d la raison. Exemple : u₁ = 3, d = 5 → u₈ = 3 + 7 × 5 = 38.",
                  astuce: "C'est (n − 1) sauts, pas n. De u₁ à u₈, on fait 7 sauts.",
                },
                {
                  question: "Terme général d'une suite géométrique ?",
                  answer:
                    "uₙ = u₁ × q^(n − 1), avec n le rang, u₁ le premier terme, q la raison. Exemple : u₁ = 2, q = 3 → u₅ = 2 × 3⁴ = 162.",
                  astuce: "Même logique : c'est q puissance (n − 1), pas n.",
                },
                {
                  question: "Taux de +4 % par an : quelle raison géométrique ?",
                  answer:
                    "q = 1 + 4/100 = 1,04. Le taux s'ajoute à 1 pour donner le coefficient multiplicateur. Une baisse de 3 % donnerait q = 1 − 0,03 = 0,97.",
                  astuce: "Ne jamais prendre q = 0,04 pour un taux de 4 % : ce serait une baisse de 96 %.",
                },
                {
                  question: "Somme des n premiers termes d'une suite arithmétique ?",
                  answer:
                    "Sₙ = n × (u₁ + uₙ) ÷ 2, soit n fois la moyenne du premier et du dernier terme. Exemple : 3, 7, 11, 15, 19 → S₅ = 5 × (3 + 19) ÷ 2 = 55.",
                },
                {
                  question: "Somme des n premiers termes d'une suite géométrique ?",
                  answer:
                    "Sₙ = u₁ × (1 − qⁿ) ÷ (1 − q) si q ≠ 1. Si q = 1, tous les termes valent u₁, donc Sₙ = n × u₁. Exemple : u₁ = 2, q = 3, n = 4 → S₄ = 2 × (1 − 81) ÷ (1 − 3) = 80.",
                },
                {
                  question: "Comment distinguer les deux types sur un graphique ?",
                  answer:
                    "Suite arithmétique : points alignés sur une droite (croissance linéaire). Suite géométrique : points sur une courbe exponentielle (la pente s'accélère). C'est un indice immédiat du type, sans calcul.",
                },
                {
                  question: "Quelles situations courantes pour chaque type ?",
                  answer:
                    "Arithmétique (on ajoute) : épargne à versement fixe, loyer révisé d'un montant constant, comptage régulier. Géométrique (on multiplie) : intérêts composés, croissance de population à taux fixe, décroissance radioactive.",
                },
                {
                  question: "À long terme, quelle croissance l'emporte ?",
                  answer:
                    "La suite géométrique (q > 1) domine toujours la suite arithmétique à long terme, même en partant plus bas. La croissance exponentielle finit toujours par dépasser la croissance linéaire.",
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
              center: { title: "Suites numériques", subtitle: "Phénomènes répétitifs" },
              branches: [
                {
                  title: "Notion de suite",
                  variant: "blue",
                  lines: ["Liste ordonnée (uₙ, rang n)", "Explicite ou récurrente"],
                },
                {
                  title: "Arithmétique",
                  variant: "green",
                  lines: ["On ajoute d", "uₙ = u₁ + (n − 1) × d", "Points alignés"],
                },
                {
                  title: "Géométrique",
                  variant: "green",
                  lines: ["On multiplie par q", "uₙ = u₁ × q^(n − 1)", "Courbe exponentielle"],
                },
                {
                  title: "Sommes",
                  variant: "yellow",
                  lines: ["Arith. : n × (u₁ + uₙ) ÷ 2", "Géo. : u₁ × (1 − qⁿ) ÷ (1 − q)"],
                },
                {
                  title: "Taux et raison",
                  variant: "yellow",
                  lines: ["+t % → q = 1 + t/100", "−t % → q = 1 − t/100"],
                },
                {
                  title: "Long terme",
                  variant: "purple",
                  dashed: true,
                  lines: ["Géométrique domine l'arithmétique", "Exponentielle > linéaire"],
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
