import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je résous une équation du 1er degré et je vérifie la solution" },
  { id: "e2", label: "Je mets un problème en équation en 4 étapes et je conclus en français" },
  { id: "e3", label: "J'applique la règle du produit nul uniquement quand le membre de droite est 0" },
  { id: "e4", label: "Je résous un système à 2 inconnues par substitution et par combinaison" },
  { id: "e5", label: "Je résous une inéquation et j'inverse le sens quand je divise par un négatif" },
  { id: "e6", label: "Je lis et j'écris la notation d'intervalle (crochets ouverts et fermés) [Seconde]" },
  { id: "e7", label: "Je comprends |x − a| comme une distance et je résous |x − a| ≤ r [Seconde]" },
  { id: "e8", label: "Je vérifie toujours la cohérence de la solution dans le contexte du problème" },
];

export const ficheEquationsInequationsSystemes: Fiche = {
  slug: "equations-inequations-systemes",
  matiere: "mathematiques",
  numero: 9,
  partie: "Partie 1 : Nombres et calcul",
  title: "Équations, inéquations, systèmes",
  subtitle:
    "Équation du 1er degré · mise en équation · équation-produit · systèmes à 2 inconnues · inéquations · intervalles · valeur absolue",
  badges: [
    { label: "★★ Fréquent", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020", variant: "info" },
    { label: "Intervalles et |x| : programme Seconde", variant: "info" },
  ],
  metaTitle: "Équations, inéquations et systèmes (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur les équations : équation du 1er degré, mise en équation, équation-produit, systèmes à 2 inconnues (substitution et combinaison), inéquations, intervalles et valeur absolue. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                  title: "L'équation du 1er degré",
                  text: "Isoler l'inconnue avec deux règles d'or, et toujours vérifier.",
                },
                {
                  number: "②",
                  title: "Mise en équation et équation-produit",
                  text: "Traduire un problème en 4 étapes, et la règle du produit nul.",
                },
                {
                  number: "③",
                  title: "Systèmes à 2 inconnues",
                  text: "Deux contraintes, deux inconnues : substitution ou combinaison.",
                },
                {
                  number: "④",
                  title: "Inéquations, intervalles, valeur absolue",
                  text: "Des ensembles de solutions, et deux notions du programme de Seconde.",
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
              title: "Pourquoi résoudre des équations ?",
              text: "Une ceinture de 90 cm, deux morceaux, le premier deux fois plus long que le second. On pourrait tâtonner, ou écrire : si le second fait x cm, le premier fait 2x, et x + 2x = 90, donc x = 30.\n\nVoilà l'essence d'une équation : traduire une situation par une expression, puis trouver la valeur inconnue qui la vérifie. Dans la fiche N°8, les lettres étaient des variables (on généralisait) ; ici ce sont des inconnues, une valeur précise à trouver. Cette fiche couvre les équations du 1er degré, les systèmes, les inéquations, et deux notions du programme de Seconde (intervalles et valeur absolue).",
            },
            {
              type: "subsection",
              number: "①",
              title: "L'équation du 1er degré : trouver l'inconnue",
              blocks: [
                {
                  type: "paragraph",
                  text: "Une équation du 1er degré est une égalité du type ax + b = c, où x est l'inconnue. « 1er degré » signifie que l'inconnue n'est jamais élevée à une puissance supérieure à 1 (pas de x², pas de x³). Résoudre, c'est isoler x à l'aide de deux opérations qui conservent l'égalité.",
                },
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Règle 1 : ajouter ou soustraire",
                      variant: "info",
                      lines: ["Le même nombre des deux côtés.", "x − 5 = 3 → x − 5 + 5 = 3 + 5 → x = 8"],
                    },
                    {
                      title: "Règle 2 : multiplier ou diviser",
                      variant: "info",
                      lines: ["Par le même nombre non nul.", "3x = 12 → 3x ÷ 3 = 12 ÷ 3 → x = 4"],
                    },
                  ],
                },
                {
                  type: "formulaBlock",
                  lines: [
                    "Résoudre 2x + 5 = x − 3",
                    "2x − x = −3 − 5 (les x à gauche, les nombres à droite)",
                    "x = −8",
                  ],
                  note: "Vérification : 2 × (−8) + 5 = −11 et (−8) − 3 = −11 ✓",
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "💡 Réflexe vérification",
                  text: "Toujours substituer la valeur trouvée dans l'équation de départ. Si les deux membres sont égaux, la solution est correcte. Ne jamais sauter cette étape au concours.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Mise en équation et équation-produit",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Mettre un problème en équation : les 4 étapes",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "C'est souvent la partie la plus valorisée au CRPE : l'équation n'est pas donnée, il faut la construire à partir d'un énoncé en français. Problème fil rouge : « Une classe a 35 élèves, 5 garçons de plus que de filles. Combien de filles ? »",
                    },
                    {
                      type: "table",
                      headers: ["Étape", "Sur le fil rouge"],
                      rows: [
                        ["① Nommer l'inconnue (et son unité)", "Soit x le nombre de filles."],
                        ["② Exprimer les autres quantités avec x", "Garçons = x + 5."],
                        ["③ Traduire la contrainte en égalité", "x + (x + 5) = 35, soit 2x + 5 = 35."],
                        ["④ Résoudre, vérifier, conclure en français", "x = 15 : 15 filles et 20 garçons."],
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "Ce que le jury pénalise : écrire « 2x + 5 = 35 » sans avoir dit ce que représente x. Sans la phrase de l'étape ①, la résolution est juste mais pédagogiquement incomplète.",
                    },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "L'équation-produit : la règle du produit nul",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "**A × B = 0 ⟺ A = 0 ou B = 0**",
                        "(x − 3)(2x + 5) = 0",
                        "⟺ x = 3 ou x = −5/2",
                      ],
                      note: "Cette règle ne fonctionne QUE si le membre de droite est 0. Si A × B = 6, on ne peut pas écrire A = 2 et B = 3.",
                    },
                    {
                      type: "paragraph",
                      text: "On utilise souvent la factorisation (fiche N°8) pour obtenir une forme produit = 0. Exemple : x² − 9 = 0 → x² − 3² = 0 → (x + 3)(x − 3) = 0 → x = −3 ou x = 3.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Les systèmes de 2 équations à 2 inconnues",
              blocks: [
                {
                  type: "paragraph",
                  text: "Quand un problème a deux inconnues et deux contraintes, une seule équation ne suffit plus : il faut un système. Deux méthodes, selon la situation.",
                },
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Substitution",
                      variant: "info",
                      lines: [
                        "Quand une équation isole facilement une variable.",
                        "x + y = 10 et 2x − y = 5",
                        "y = 10 − x, puis 2x − (10 − x) = 5 → x = 5, y = 5",
                      ],
                    },
                    {
                      title: "Combinaison (addition)",
                      variant: "info",
                      lines: [
                        "Quand additionner élimine une variable.",
                        "x + y = 10 et 2x − y = 5",
                        "Addition : 3x = 15 → x = 5, puis y = 5",
                      ],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "💡 Vérifier dans les deux équations",
                  text: "Toujours vérifier la solution dans les DEUX équations de départ, pas seulement dans la dernière utilisée. Et conclure en français : « Un café coûte 5 € et un thé 3 €. »",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Inéquations, intervalles et valeur absolue",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Résoudre une inéquation du 1er degré",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "Une inéquation remplace le signe = par <, >, ≤ ou ≥. La solution n'est plus une valeur unique mais un ensemble, souvent un intervalle. On isole l'inconnue comme pour une équation, avec une règle cruciale.",
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⚠️ La règle qui change tout",
                      text: "Quand on multiplie ou divise les deux membres par un nombre négatif, le sens de l'inégalité s'inverse : < devient >, ≤ devient ≥.",
                    },
                    {
                      type: "cardGrid",
                      columns: 2,
                      cards: [
                        {
                          title: "Sans inversion",
                          variant: "success",
                          lines: ["2x + 3 > 7 → 2x > 4", "x > 2 (division par 2 > 0)", "Solution : ]2 ; +∞["],
                        },
                        {
                          title: "Avec inversion",
                          variant: "warning",
                          lines: ["−3x + 1 ≤ 10 → −3x ≤ 9", "x ≥ −3 (division par −3 < 0)", "Solution : [−3 ; +∞["],
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Programme de Seconde",
                  text: "Les intervalles et la valeur absolue ci-dessous relèvent du programme de Seconde. Ils sont attendus au CRPE M2 et à conserver à ce titre, mais à retirer lors de la future dérivation L3 (qui s'appuie sur le seul programme cycle 4).",
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Les intervalles : notation et lecture (Seconde)",
                  blocks: [
                    {
                      type: "table",
                      headers: ["Notation", "Signifie", "Bornes"],
                      rows: [
                        ["[a ; b]", "a ≤ x ≤ b", "a et b incluses"],
                        ["]a ; b[", "a < x < b", "a et b exclues"],
                        ["[a ; b[", "a ≤ x < b", "a incluse, b exclue"],
                        ["[a ; +∞[", "x ≥ a", "+∞ toujours exclu"],
                        ["]−∞ ; b]", "x ≤ b", "−∞ toujours exclu"],
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "Règle : ≤ ou ≥ donne un crochet fermé ([ ou ]), < ou > un crochet ouvert (] ou [). ±∞ est toujours exclu (crochet ouvert), car l'infini n'est pas un nombre.",
                    },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "La valeur absolue : la distance à zéro (Seconde)",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "|x| est la distance de x à 0 : |5| = 5, |−5| = 5, |0| = 0",
                        "|x − a| = distance entre x et a",
                        "|x − a| ≤ r ⟺ a − r ≤ x ≤ a + r",
                      ],
                      note: "Exemple : |x − 3| ≤ 2 ⟺ −2 ≤ x − 3 ≤ 2 ⟺ 1 ≤ x ≤ 5, soit x ∈ [1 ; 5].",
                    },
                  ],
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : ne pas inverser l'inégalité",
              badge: "Très fréquent",
              faux: "−2x > 6 → x > −3 (sens conservé).",
              vrai: "−2x > 6 → x < −3 : diviser par −2 (négatif) inverse le sens.",
              methode: "Diviser ou multiplier par un négatif = retourner la flèche de l'inégalité.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : produit nul sans membre = 0",
              badge: "Très fréquent",
              faux: "(x − 2)(x + 3) = 6 → x − 2 = 6 ou x + 3 = 6.",
              vrai: "La règle A × B = 0 exige un membre de droite nul. Ici, développer, réduire, puis ramener à = 0.",
              methode: "Vérifier d'abord : le membre de droite est-il 0 ? Sinon, développer avant de factoriser.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : oublier la cohérence avec le contexte",
              badge: "Classique",
              faux: "Trouver x = −4 pour un nombre d'élèves et conclure sans rien signaler.",
              vrai: "Un nombre d'élèves est un entier positif. x = −4 est solution de l'équation mais n'a pas de sens : il faut le signaler.",
              methode: "Relire toujours la valeur trouvée à la lumière du contexte (positif ? entier ? dans les bornes ?).",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : crochet ouvert sur une borne incluse",
              badge: "Notation",
              faux: "x ≥ 3 → ]3 ; +∞[ (le 3 est exclu à tort).",
              vrai: "x ≥ 3 → [3 ; +∞[ : le crochet fermé indique que 3 est inclus.",
              methode: "≤ ou ≥ → crochet fermé ; < ou > → crochet ouvert. L'infini garde toujours un crochet ouvert.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école : le regard du futur enseignant",
              text: "Aux cycles 2 et 3, les élèves résolvent des problèmes par essais-ajustements ou par « remontée » (« si 2 crayons coûtent 6 €, 1 crayon coûte 3 € »). C'est une approche arithmétique, sans lettre, que les programmes du cycle 3 développent en demandant de formuler et résoudre des problèmes : cela prépare implicitement la mise en équation.\n\nSavoir modéliser un problème par une équation est exactement la compétence que le jury évalue. Écrire « soit x la quantité cherchée, alors… » avant de résoudre montre qu'on comprend la démarche, pas seulement qu'on manipule des symboles. Les situations de recherche proposées en primaire (partages, prix, mesures) sont les mêmes que celles modélisées par des équations au collège : comprendre cette continuité permet d'enseigner avec cohérence.",
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
              title: "Lire la consigne avant tout",
              text: "« Résoudre », « mettre en équation », « exprimer l'ensemble des solutions » ne demandent pas la même chose. Un mot mal lu, et tous les points sont perdus. Chaque savoir-faire ci-dessous se termine par une vérification.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Résoudre une équation du 1er degré",
              intro:
                "**Question type :** « Résoudre 3(x − 2) + 5 = 2x + 7. »",
              steps: [
                {
                  number: "1",
                  text: "**Développer et réduire chaque membre.**",
                  example: { lines: ["3x − 6 + 5 = 2x + 7", "3x − 1 = 2x + 7"] },
                },
                {
                  number: "2",
                  text: "**Rassembler les x d'un côté, les nombres de l'autre.**",
                  example: { lines: ["3x − 2x = 7 + 1", "x = 8"] },
                },
                {
                  number: "3",
                  text: "**Vérifier dans l'équation de départ.**",
                  example: { lines: ["3(8 − 2) + 5 = 23 et 2 × 8 + 7 = 23 ✓"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Résoudre 5x − 4 = 2x + 11.",
              correction: [
                { type: "line", text: "5x − 2x = 11 + 4 → 3x = 15 → **x = 5**." },
                { type: "line", text: "Vérification : 5 × 5 − 4 = 21 et 2 × 5 + 11 = 21 ✓." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Mettre un problème en équation et le résoudre",
              intro:
                "**Problème type :** « Une classe a 32 élèves, 4 filles de plus que de garçons. Combien de garçons ? »",
              steps: [
                {
                  number: "1",
                  text: "**Nommer l'inconnue avec précision.**",
                  example: { lines: ["Soit x le nombre de garçons."] },
                },
                {
                  number: "2",
                  text: "**Exprimer les autres quantités avec x.**",
                  example: { lines: ["Filles = x + 4"] },
                },
                {
                  number: "3",
                  text: "**Traduire la contrainte et résoudre.**",
                  example: { lines: ["x + (x + 4) = 32 → 2x + 4 = 32 → x = 14"] },
                },
                {
                  number: "4",
                  text: "**Vérifier la cohérence et conclure en français.**",
                  example: { lines: ["14 + 18 = 32 ✓ : il y a 14 garçons et 18 filles."] },
                  warn: "⚠️ La valeur de x n'est pas la réponse : son interprétation en français l'est.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Un ruban de 90 cm est coupé en deux, le premier morceau fait le double du second. Mettre en équation et résoudre.",
              correction: [
                { type: "line", text: "Soit x le second morceau. Premier = 2x. x + 2x = 90 → 3x = 90 → x = 30." },
                { type: "line", text: "Le second morceau fait 30 cm, le premier 60 cm." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Résoudre une équation-produit",
              intro:
                "**Question type :** « Résoudre (2x − 6)(x + 4) = 0. »",
              steps: [
                {
                  number: "1",
                  text: "**Vérifier que le membre de droite est 0.**",
                  example: { lines: ["Oui : on peut appliquer la règle du produit nul."] },
                },
                {
                  number: "2",
                  text: "**Écrire les deux équations séparées et les résoudre.**",
                  example: { lines: ["2x − 6 = 0 → x = 3", "x + 4 = 0 → x = −4"] },
                  warn: "⚠️ Si l'énoncé donne un membre de droite ≠ 0, développer d'abord et ramener à = 0 avant de factoriser.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Résoudre x² − 16 = 0.",
              correction: [
                { type: "line", text: "x² − 4² = 0 → (x + 4)(x − 4) = 0 → **x = −4 ou x = 4**." },
                { type: "note", text: "On factorise par l'identité a² − b² pour obtenir un produit nul." },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Résoudre un système et une inéquation",
              intro:
                "**Système type :** « x + y = 10 et 2x − y = 5. » **Inéquation type :** « −2x + 7 ≤ 3x − 3. »",
              steps: [
                {
                  number: "1",
                  text: "**Système : substituer ou combiner.**",
                  example: { lines: ["Combinaison : addition → 3x = 15 → x = 5", "Puis 5 + y = 10 → y = 5"] },
                },
                {
                  number: "2",
                  text: "**Vérifier dans les deux équations, conclure.**",
                  example: { lines: ["5 + 5 = 10 ✓ et 2 × 5 − 5 = 5 ✓"] },
                },
                {
                  number: "3",
                  text: "**Inéquation : isoler x, surveiller le signe du coefficient.**",
                  example: { lines: ["10 ≤ 5x → 2 ≤ x (division par 5 > 0)", "Solution : [2 ; +∞["] },
                  warn: "⚠️ Si on divise par un négatif, inverser le sens de l'inégalité.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Résoudre −4x + 3 > 11 et donner la solution en intervalle.",
              correction: [
                { type: "line", text: "−4x > 8 → x < −2 (division par −4 < 0, sens inversé). Solution : **]−∞ ; −2[**." },
                { type: "note", text: "Le piège : ne pas oublier d'inverser le sens en divisant par un négatif." },
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
                  question: "Résoudre 2x + 5 = x − 3.",
                  options: ["x = 8", "x = −8", "x = 2", "x = −2"],
                  correctIndex: 1,
                  explanation: "2x − x = −3 − 5 → x = −8. Vérification : 2 × (−8) + 5 = −11 et (−8) − 3 = −11 ✓.",
                },
                {
                  objectifId: "e2",
                  question: "Dans une mise en équation, quelle est l'étape que le jury pénalise le plus si elle manque ?",
                  options: ["Le calcul final", "La phrase « Soit x… » qui définit l'inconnue", "La vérification numérique", "Le titre de l'exercice"],
                  correctIndex: 1,
                  explanation: "Sans définir ce que représente x, la résolution est mathématiquement juste mais pédagogiquement incomplète. Le jury attend cette phrase.",
                },
                {
                  objectifId: "e3",
                  question: "Résoudre (x − 3)(2x + 5) = 0.",
                  options: ["x = 3 et x = 5", "x = 3 et x = −5/2", "x = −3 et x = 5/2", "Aucune solution"],
                  correctIndex: 1,
                  explanation: "Produit nul : x − 3 = 0 ou 2x + 5 = 0, donc x = 3 ou x = −5/2.",
                },
                {
                  objectifId: "e3",
                  question: "Peut-on écrire « (x − 2)(x + 3) = 6 donc x − 2 = 6 ou x + 3 = 6 » ?",
                  options: ["Oui, c'est la règle du produit", "Non : la règle du produit nul exige un membre de droite égal à 0", "Oui, si x est entier", "Non, il faut une calculatrice"],
                  correctIndex: 1,
                  explanation: "La règle A × B = 0 ⟺ A = 0 ou B = 0 ne s'applique que si le membre de droite est 0. Ici, il faut développer puis ramener à = 0.",
                },
                {
                  objectifId: "e4",
                  question: "Pour le système x + y = 10 et 2x − y = 5, que donne l'addition des deux équations ?",
                  options: ["3x = 15, donc x = 5", "x = 10", "y = 5 directement", "3y = 15"],
                  correctIndex: 0,
                  explanation: "En additionnant, les y s'éliminent (+y et −y) : 3x = 15, donc x = 5, puis y = 5. C'est la méthode par combinaison.",
                },
                {
                  objectifId: "e5",
                  question: "Résoudre −3x ≤ 9.",
                  options: ["x ≤ −3", "x ≥ −3", "x ≤ 3", "x ≥ 3"],
                  correctIndex: 1,
                  explanation: "On divise par −3 (négatif) : le sens s'inverse, donc x ≥ −3, soit [−3 ; +∞[.",
                },
                {
                  objectifId: "e6",
                  question: "Comment écrire x ≥ −2 en notation d'intervalle ?",
                  options: ["]−2 ; +∞[", "[−2 ; +∞[", "]−∞ ; −2]", "[−2 ; +∞]"],
                  correctIndex: 1,
                  explanation: "≥ signifie que −2 est inclus (crochet fermé), et +∞ est toujours exclu : [−2 ; +∞[.",
                },
                {
                  objectifId: "e7",
                  question: "Résoudre |x − 3| ≤ 2.",
                  options: ["x ∈ [1 ; 5]", "x ∈ ]1 ; 5[", "x ∈ [−2 ; 2]", "x ∈ [3 ; 5]"],
                  correctIndex: 0,
                  explanation: "|x − 3| ≤ 2 ⟺ −2 ≤ x − 3 ≤ 2 ⟺ 1 ≤ x ≤ 5, soit x ∈ [1 ; 5]. C'est l'ensemble des x à moins de 2 de 3.",
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
              text: "Nommez toujours l'inconnue avant d'écrire l'équation. Vérifiez la solution dans l'équation de départ ET dans le contexte. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Résolution et mise en équation directe",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : le partage de croissants",
              objectifTag: "Mise en équation",
              enonce: "Une boulangère partage 84 croissants en deux plateaux : le premier contient le double du second.",
              question: "a) Nommer l'inconnue et écrire l'équation.\nb) Résoudre et conclure.\nc) Vérifier dans le contexte.",
              correction: [
                { type: "line", label: "a)", text: "Soit x le nombre de croissants du second plateau. Premier = 2x. Équation : x + 2x = 84." },
                { type: "line", label: "b)", text: "3x = 84 → x = 28. Second plateau : 28 ; premier : 56." },
                { type: "line", label: "c)", text: "28 + 56 = 84 ✓ et 56 = 2 × 28 ✓ : entiers positifs, cohérent." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : équation et inéquation",
              objectifTag: "Résolution et intervalle",
              question: "On pose A = 4x − 3 et B = x + 9.\na) Résoudre A = B.\nb) Pour quelles valeurs A > B ? Donner l'intervalle.\nc) Vérifier avec x = 6.",
              correction: [
                { type: "line", label: "a)", text: "4x − 3 = x + 9 → 3x = 12 → x = 4. Vérif : 13 = 13 ✓." },
                { type: "line", label: "b)", text: "4x − 3 > x + 9 → 3x > 12 → x > 4, soit ]4 ; +∞[." },
                { type: "line", label: "c)", text: "x = 6 : A = 21 > B = 15 ✓, et 6 ∈ ]4 ; +∞[ ✓." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : équation-produit et système",
              sub: "Choisir la bonne méthode",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : équation-produit",
              objectifTag: "Produit nul et factorisation",
              question: "On cherche les solutions de x² − 5x + 6 = 0.\na) Vérifier que x² − 5x + 6 = (x − 2)(x − 3).\nb) En déduire les solutions.",
              correction: [
                { type: "line", label: "a)", text: "(x − 2)(x − 3) = x² − 3x − 2x + 6 = x² − 5x + 6 ✓." },
                { type: "line", label: "b)", text: "(x − 2)(x − 3) = 0 ⟺ x = 2 ou x = 3." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : système à la buvette",
              objectifTag: "Système à 2 inconnues",
              enonce: "À la buvette, 3 jus et 2 eaux coûtent 8,50 € ; 1 jus et 4 eaux coûtent 6,50 €.",
              question: "a) Nommer les inconnues et écrire le système.\nb) Résoudre par la méthode de votre choix.\nc) Vérifier dans les deux équations.",
              correction: [
                { type: "line", label: "a)", text: "Soit j le prix d'un jus, e celui d'une eau. Système : 3j + 2e = 8,50 et j + 4e = 6,50." },
                { type: "line", label: "b)", text: "Combinaison (1) − 3 × (2) : −10e = −11 → e = 1,10 €, puis j = 6,50 − 4 × 1,10 = 2,10 €." },
                { type: "line", label: "c)", text: "3 × 2,10 + 2 × 1,10 = 8,50 ✓ et 2,10 + 4 × 1,10 = 6,50 ✓." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : inéquations et valeur absolue",
              sub: "Ensembles de solutions (dont Seconde)",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : signe d'un produit",
              objectifTag: "Inéquation-produit",
              question: "On reprend (x − 2)(x − 3).\na) Résoudre (x − 2)(x − 3) = 0.\nb) Résoudre (x − 2)(x − 3) > 0 en étudiant le signe du produit.",
              correction: [
                { type: "line", label: "a)", text: "x = 2 ou x = 3." },
                { type: "line", label: "b)", text: "Produit positif quand les deux facteurs ont le même signe : x < 2 (deux négatifs) ou x > 3 (deux positifs). Solution : ]−∞ ; 2[ ∪ ]3 ; +∞[." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 4 : tolérance d'usinage (Seconde)",
              objectifTag: "Valeur absolue et intervalle",
              enonce: "Un fabricant accepte des pièces de 50 mm avec une tolérance de ±2 mm.",
              question: "a) Exprimer la condition avec une valeur absolue.\nb) Résoudre et donner l'intervalle des longueurs acceptées.\nc) Une pièce de 51,5 mm est-elle acceptée ?",
              correction: [
                { type: "line", label: "a)", text: "|x − 50| ≤ 2 (la longueur est à moins de 2 mm de 50)." },
                { type: "line", label: "b)", text: "−2 ≤ x − 50 ≤ 2 → 48 ≤ x ≤ 52, soit [48 ; 52]." },
                { type: "line", label: "c)", text: "51,5 ∈ [48 ; 52] et |51,5 − 50| = 1,5 ≤ 2 : la pièce est acceptée." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : problèmes complets niveau CRPE",
              sub: "Système, inéquation, interprétation",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 5 : la course solidaire",
              objectifTag: "Système et inéquation",
              enonce: "Chaque élève parcourt 3 km ou 5 km. 42 élèves participent, pour une distance totale de 166 km.",
              question:
                "a) Nommer les inconnues et écrire le système.\nb) Résoudre par substitution.\nc) Vérifier et conclure.\nd) Un organisateur dit : « Si tous avaient couru 3 km, on aurait parcouru au moins 150 km. » Vérifier par une inéquation.",
              correction: [
                { type: "line", label: "a)", text: "Soit a le nombre d'élèves à 3 km, b à 5 km. Système : a + b = 42 et 3a + 5b = 166." },
                { type: "line", label: "b)", text: "a = 42 − b, puis 3(42 − b) + 5b = 166 → 2b = 40 → b = 20, a = 22." },
                { type: "line", label: "c)", text: "22 + 20 = 42 ✓ et 3 × 22 + 5 × 20 = 166 ✓. 22 élèves à 3 km, 20 à 5 km." },
                { type: "line", label: "d)", text: "Tous à 3 km : 3 × 42 = 126 km. Or 126 < 150 : l'affirmation est fausse (3n ≥ 150 demanderait n ≥ 50, mais n = 42)." },
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
              text: "Cet exercice reproduit le format et les exigences d'un sujet de concours. Comptez 20 à 25 minutes, en conditions réelles, avec justifications complètes.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 6 : la rénovation de la bibliothèque",
              objectifTag: "Modélisation, équation, inéquation",
              enonce:
                "Une école fait poser des rayonnages. L'artisan propose deux tarifs.\nTarif A : forfait fixe de 120 € plus 15 € par mètre linéaire posé.\nTarif B : 25 € par mètre linéaire, sans forfait.",
              question:
                "1.1 Exprimer le coût A et le coût B en fonction du nombre x de mètres posés.\n1.2 Pour quelle valeur de x les deux tarifs sont-ils égaux ? Résoudre et vérifier.\n1.3 À partir de combien de mètres le tarif A devient-il plus avantageux ? Résoudre l'inéquation.\n2.1 Pour 18 mètres, quel tarif choisir ? Calculer l'économie.\n2.2 Avec un budget de 350 € au tarif A, combien de mètres au maximum peut-on poser ?",
              correction: [
                { type: "line", label: "1.1", text: "C_A = 15x + 120 ; C_B = 25x." },
                { type: "line", label: "1.2", text: "15x + 120 = 25x → 120 = 10x → x = 12 m. Vérif : C_A = 300 € = C_B ✓." },
                { type: "line", label: "1.3", text: "15x + 120 < 25x → 120 < 10x → x > 12, soit ]12 ; +∞[ : le tarif A est plus avantageux au-delà de 12 m." },
                { type: "line", label: "2.1", text: "18 > 12 → tarif A : C_A(18) = 390 €, C_B(18) = 450 €. Économie : 60 €." },
                { type: "line", label: "2.2", text: "15x + 120 ≤ 350 → 15x ≤ 230 → x ≤ 15,33…, soit 15 mètres entiers au maximum." },
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
              title: "Erreur type · Exercice 7 : inégalité non inversée",
              objectifTag: "Inéquations",
              enonce: "**Copie d'un candidat :** résoudre −4x + 3 > 11.\n*Réponse produite :* « −4x > 8 → x > −2 ».",
              question: "a) Identifier l'erreur.\nb) Donner la résolution correcte.",
              correction: [
                { type: "paragraph", text: "**Erreur : le sens de l'inégalité n'a pas été inversé.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "En divisant par −4 (négatif), le candidat a gardé le sens >." },
                    { text: "Diviser par un négatif inverse le sens : −4x > 8 → x < −2." },
                    { text: "Solution : ]−∞ ; −2[. Vérification : x = −3 donne −4 × (−3) + 3 = 15 > 11 ✓." },
                  ],
                },
                { type: "note", text: "Le piège ne concerne que la multiplication et la division, pas l'addition." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 8 : produit nul mal appliqué",
              objectifTag: "Équation-produit",
              enonce: "**Copie d'un candidat :** résoudre (x − 2)(x + 1) = 4.\n*Réponse produite :* « x − 2 = 4 ou x + 1 = 4 → x = 6 ou x = 3 ».",
              question: "a) Identifier l'erreur.\nb) Donner la résolution correcte.",
              correction: [
                { type: "paragraph", text: "**Erreur : règle du produit nul sur un membre de droite ≠ 0.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "La règle A × B = 0 ⟺ A = 0 ou B = 0 exige un membre de droite nul, or il vaut 4." },
                    { text: "Développer : x² − x − 2 = 4 → x² − x − 6 = 0 → (x − 3)(x + 2) = 0." },
                    { text: "Solutions : x = 3 ou x = −2. (Test de l'erreur : (6 − 2)(6 + 1) = 28 ≠ 4.)" },
                  ],
                },
                { type: "note", text: "Toujours vérifier d'abord : le membre de droite est-il 0 ?" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 9 : pas de conclusion en français",
              objectifTag: "Mise en équation",
              enonce: "**Copie d'un candidat :** un problème demande le nombre d'élèves de chaque groupe. Le candidat résout et trouve x = 15.\n*Réponse produite :* « x = 15. »",
              question: "a) Pourquoi la réponse est-elle incomplète ?\nb) Donner une conclusion correcte.",
              correction: [
                { type: "paragraph", text: "**Erreur : la valeur de l'inconnue n'est pas interprétée.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "x = 15 est la valeur numérique de l'inconnue, pas la réponse au problème posé en français." },
                    { text: "Il faut interpréter : « Il y a 15 élèves dans le premier groupe » et déduire l'effectif du second." },
                    { text: "Un problème posé en français se conclut par une phrase en français." },
                  ],
                },
                { type: "note", text: "Le jury distingue le calcul (juste) de la réponse au problème (à rédiger)." },
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
                  question: "Quelles sont les deux règles de base pour résoudre une équation ?",
                  answer:
                    "Règle 1 : ajouter ou soustraire le même nombre des deux membres. Règle 2 : multiplier ou diviser les deux membres par le même nombre non nul. Objectif : isoler x.",
                  astuce: "Toujours vérifier la solution trouvée dans l'équation de départ.",
                },
                {
                  question: "La règle du produit nul : énoncé et condition.",
                  answer:
                    "A × B = 0 ⟺ A = 0 ou B = 0. Elle ne s'applique QUE si le membre de droite est exactement 0. Exemple : (x − 3)(x + 1) = 0 → x = 3 ou x = −1.",
                  astuce: "Si le membre de droite n'est pas 0 : développer, ramener à = 0, puis factoriser.",
                },
                {
                  question: "Les 4 étapes de la mise en équation d'un problème.",
                  answer:
                    "① Nommer l'inconnue avec son unité (« Soit x… »). ② Exprimer les autres quantités avec x. ③ Traduire la contrainte en équation. ④ Résoudre, vérifier, conclure en français.",
                  astuce: "La conclusion en français est obligatoire au concours.",
                },
                {
                  question: "Résoudre un système : quelles deux méthodes ?",
                  answer:
                    "Substitution : isoler une variable dans une équation, la remplacer dans l'autre (idéal si une variable est déjà isolée). Combinaison : multiplier les équations pour éliminer une variable par addition. Toujours vérifier dans les deux équations.",
                },
                {
                  question: "Le piège n°1 des inéquations.",
                  answer:
                    "Quand on multiplie ou divise les deux membres par un nombre négatif, le sens de l'inégalité s'inverse : −2x > 6 → x < −3 (et non x > −3).",
                  astuce: "Diviser par un négatif = retourner la flèche. Cela ne concerne pas l'addition.",
                },
                {
                  question: "Lire la notation d'intervalle (Seconde).",
                  answer:
                    "[a ; b] : a ≤ x ≤ b. ]a ; b[ : a < x < b. [a ; +∞[ : x ≥ a. ]−∞ ; b] : x ≤ b. Règle : ≤ ou ≥ → crochet fermé ; < ou > → crochet ouvert. ±∞ toujours exclu.",
                },
                {
                  question: "Valeur absolue |x − a| : interprétation et résolution (Seconde).",
                  answer:
                    "|x − a| est la distance entre x et a. |x − a| ≤ r ⟺ a − r ≤ x ≤ a + r, soit x ∈ [a − r ; a + r]. Exemple : |x − 5| ≤ 3 → x ∈ [2 ; 8].",
                },
                {
                  question: "Équation ou inéquation : quelle différence ?",
                  answer:
                    "Équation (=) : une ou plusieurs valeurs précises (ensemble fini). Inéquation (<, >, ≤, ≥) : un ensemble de valeurs, souvent un intervalle. Même résolution, sauf l'inversion du sens en multipliant/divisant par un négatif.",
                },
                {
                  question: "Pourquoi vérifier la solution dans le contexte ?",
                  answer:
                    "Une équation peut avoir une solution mathématique valide mais incohérente : x = −5 pour un effectif, x = 2,7 pour un nombre de personnes, x = 150 pour un pourcentage. Il faut signaler l'incohérence et en tenir compte.",
                },
                {
                  question: "Quel lien entre équations et école primaire ?",
                  answer:
                    "En primaire, on résout par essais-ajustements ou remontée arithmétique, sans lettre. La mise en équation formalise ces mêmes situations. Maîtriser les équations aide le futur enseignant à comprendre la structure des problèmes proposés en classe.",
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
              center: { title: "Équations", subtitle: "Trouver l'inconnue" },
              branches: [
                {
                  title: "Équation 1er degré",
                  variant: "blue",
                  lines: ["Isoler x (ajouter/diviser)", "Toujours vérifier"],
                },
                {
                  title: "Mise en équation",
                  variant: "blue",
                  lines: ["Nommer l'inconnue", "Traduire, résoudre", "Conclure en français"],
                },
                {
                  title: "Équation-produit",
                  variant: "green",
                  lines: ["A × B = 0 ⟺ A = 0 ou B = 0", "Seulement si membre droit = 0"],
                },
                {
                  title: "Systèmes",
                  variant: "green",
                  lines: ["Substitution", "Combinaison (addition)", "Vérifier les 2 équations"],
                },
                {
                  title: "Inéquations",
                  variant: "yellow",
                  lines: ["Solution = intervalle", "Diviser par négatif → inverser"],
                },
                {
                  title: "Intervalles et |x| (Seconde)",
                  variant: "purple",
                  dashed: true,
                  lines: ["[ fermé, ] ouvert", "|x − a| ≤ r → [a − r ; a + r]"],
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
