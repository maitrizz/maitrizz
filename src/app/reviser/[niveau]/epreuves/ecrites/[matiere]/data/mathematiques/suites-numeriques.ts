import type { Fiche } from "@/components/fiche/types";
import { COPIES_SUITES_NUMERIQUES } from "./copies-suites-numeriques";
import { EXERCICES_SUITES_NUMERIQUES } from "./exercices-suites-numeriques";

export const SAVOIR_FAIRE = [
  { id: "reconnaitre", label: "Reconnaître le type (d ou q)" },
  { id: "terme-arith", label: "Terme général arithmétique" },
  { id: "terme-geo", label: "Terme général géométrique" },
  { id: "taux-raison", label: "Passer d'un taux à la raison q" },
  { id: "somme", label: "Calculer une somme de termes" },
  { id: "modeliser", label: "Modéliser une situation par une suite" },
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
                  text: "**Variation :** q > 1 croissante, 0 < q < 1 décroissante, q < 0 termes alternés. **Graphique :** les points ne sont pas alignés, ils forment une courbe (croissance ou décroissance exponentielle). Le lien taux ↔ coefficient multiplicateur (1 + t/100) est détaillé dans la [fiche N°13](fiche:proportionnalite-pourcentages).",
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
                  number: "3",
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
              title: "Suites numériques",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_SUITES_NUMERIQUES,
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
              title: "Suites numériques",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_SUITES_NUMERIQUES,
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
      ],
    },
  ],
};
