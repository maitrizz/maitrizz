import type { Fiche } from "@/components/fiche/types";
import { COPIES_EQUATIONS_INEQUATIONS_SYSTEMES } from "./copies-equations-inequations-systemes";
import { EXERCICES_EQUATIONS_INEQUATIONS_SYSTEMES } from "./exercices-equations-inequations-systemes";

export const SAVOIR_FAIRE = [
  { id: "equation-1er-degre", label: "Résoudre une équation du 1er degré" },
  { id: "mise-en-equation", label: "Mettre un problème en équation" },
  { id: "produit-nul", label: "Appliquer la règle du produit nul" },
  { id: "systeme", label: "Résoudre un système à 2 inconnues" },
  { id: "inequation", label: "Résoudre une inéquation (intervalles)" },
  { id: "valeur-absolue", label: "Valeur absolue et intervalles (Seconde)" },
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
              title: "Pourquoi résoudre des équations ?",
              text: "Une ceinture de 90 cm, deux morceaux, le premier deux fois plus long que le second. On pourrait tâtonner, ou écrire : si le second fait x cm, le premier fait 2x, et x + 2x = 90, donc x = 30.\n\nVoilà l'essence d'une équation : traduire une situation par une expression, puis trouver la valeur inconnue qui la vérifie. Dans la [fiche N°8](fiche:calcul-litteral), les lettres étaient des variables (on généralisait) ; ici ce sont des inconnues, une valeur précise à trouver. Cette fiche couvre les équations du 1er degré, les systèmes, les inéquations, et deux notions du programme de Seconde (intervalles et valeur absolue).",
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
                      text: "On utilise souvent la factorisation ([fiche N°8](fiche:calcul-litteral)) pour obtenir une forme produit = 0. Exemple : x² − 9 = 0 → x² − 3² = 0 → (x + 3)(x − 3) = 0 → x = −3 ou x = 3.",
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
              title: "Équations, inéquations, systèmes",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_EQUATIONS_INEQUATIONS_SYSTEMES,
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
              title: "Équations, inéquations, systèmes",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_EQUATIONS_INEQUATIONS_SYSTEMES,
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
      ],
    },
  ],
};
