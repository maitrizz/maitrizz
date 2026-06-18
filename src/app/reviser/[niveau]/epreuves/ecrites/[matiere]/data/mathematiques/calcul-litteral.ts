import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je distingue variable (expression) et inconnue (équation), et je n'applique pas « = 0 » à une expression à développer" },
  { id: "e2", label: "Je réduis une expression en regroupant correctement les termes semblables" },
  { id: "e3", label: "Je développe avec la distributivité simple et double, en distribuant le signe − sur tous les termes" },
  { id: "e4", label: "Je connais les 3 identités remarquables et je les applique dans les deux sens" },
  { id: "e5", label: "Je factorise par facteur commun et je pousse jusqu'à la factorisation maximale" },
  { id: "e6", label: "Je traduis un programme de calcul en expression littérale, je la développe et je conclus" },
  { id: "e7", label: "Je prouve un résultat général par le calcul (formes 2k, 2k+1, entiers consécutifs) avec une conclusion rédigée" },
  { id: "e8", label: "Je sais expliquer pourquoi des exemples numériques ne constituent pas une preuve" },
];

export const ficheCalculLitteral: Fiche = {
  slug: "calcul-litteral",
  matiere: "mathematiques",
  numero: 8,
  partie: "Partie 1 : Nombres et calcul",
  title: "Calcul littéral et expressions algébriques",
  subtitle:
    "Variable et inconnue · réduire · développer · factoriser · distributivité · identités remarquables · prouver par le calcul · programmes de calcul",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème A", variant: "info" },
  ],
  metaTitle: "Calcul littéral et identités remarquables (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur le calcul littéral : variable et inconnue, réduire, développer (distributivité simple et double), factoriser, les 3 identités remarquables, programmes de calcul et preuve par le calcul. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                  title: "Variable et inconnue",
                  text: "Une lettre, deux rôles : généraliser ou chercher une valeur précise.",
                },
                {
                  number: "②",
                  title: "Réduire et développer",
                  text: "Regrouper les termes semblables, puis supprimer les parenthèses par distributivité.",
                },
                {
                  number: "③",
                  title: "Factoriser et identités remarquables",
                  text: "L'opération inverse du développement, et trois formules à connaître par cœur.",
                },
                {
                  number: "④",
                  title: "Prouver par le calcul",
                  text: "Programmes de calcul et démonstrations : ce que le jury valorise vraiment.",
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
              title: "Pourquoi utiliser des lettres ?",
              text: "Un tour de magie : « Pensez à un nombre. Ajoutez 5. Multipliez par 2. Retirez le double du nombre de départ. » Le résultat est toujours 10. Pourquoi ? Si on appelle x le nombre de départ : (x + 5) × 2 − 2x = 2x + 10 − 2x = 10. Le x disparaît, le résultat ne dépend plus du nombre choisi.\n\nC'est exactement le calcul littéral : utiliser des lettres pour raisonner sur tous les nombres à la fois, au lieu de tester cas par cas. C'est un outil de preuve et de généralisation, au programme du cycle 4, présent dans chaque sujet CRPE : développer, factoriser, prouver, lire et traduire un programme de calcul. Lisez la fiche dans l'ordre.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Variable et inconnue : une lettre, deux rôles",
              blocks: [
                {
                  type: "paragraph",
                  text: "Selon le contexte, une même lettre joue deux rôles très différents. Les confondre est une des premières sources d'erreur.",
                },
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Variable : tous les nombres",
                      variant: "info",
                      lines: [
                        "Désigne un nombre quelconque, non fixé.",
                        "Dans 2x + 3, x est une variable : 5 pour x = 1, 11 pour x = 4.",
                        "Sert à écrire une formule, une règle générale.",
                      ],
                    },
                    {
                      title: "Inconnue : un nombre à trouver",
                      variant: "info",
                      lines: [
                        "Désigne un nombre précis qui vérifie une condition.",
                        "Dans 2x + 3 = 11, x est une inconnue : seul x = 4 convient.",
                        "Sert à résoudre une équation.",
                      ],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "💡 Même lettre, rôles opposés",
                  text: "Dans 3x + 1, x est une variable (expression). Dans 3x + 1 = 7, x est une inconnue (équation). La différence : une expression n'a pas de signe = contraignant, une équation si.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Réduire et développer",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Réduire : regrouper les termes semblables",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "Réduire, c'est regrouper les termes du même type : les termes en x ensemble, les termes en x² ensemble, les nombres seuls ensemble. Des termes sont **semblables** s'ils ont la même partie littérale (même lettre, même exposant).",
                    },
                    {
                      type: "formulaBlock",
                      lines: [
                        "3x + 5 + 2x − 1 = (3x + 2x) + (5 − 1) = 5x + 4",
                        "4x² + 3x − x² + 2 − 7x = 3x² − 4x + 2",
                      ],
                      note: "On ne peut pas regrouper 3x et 5 (l'un a un x, l'autre non), ni 2x et 2x² (exposants différents) : comme des pommes et des oranges.",
                    },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Développer : supprimer les parenthèses",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "Développer, c'est transformer un produit en somme en distribuant. **Distributivité simple : k(a + b) = ka + kb.**",
                    },
                    {
                      type: "formulaBlock",
                      lines: [
                        "3(2x + 5) = 6x + 15",
                        "−2(x − 4) = −2x + 8",
                        "x(x + 3) = x² + 3x",
                      ],
                      note: "Avec un signe −, le facteur change le signe de chaque terme : −(x − 4) = −x + 4 (et non −x − 4).",
                    },
                    {
                      type: "paragraph",
                      text: "**Double distributivité : (a + b)(c + d) = ac + ad + bc + bd.** Chaque terme de la première parenthèse multiplie chaque terme de la seconde, soit 4 produits avant réduction.",
                    },
                    {
                      type: "formulaBlock",
                      lines: [
                        "(x + 3)(x + 5)",
                        "= x² + 5x + 3x + 15",
                        "= x² + 8x + 15",
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Factoriser et identités remarquables",
              blocks: [
                {
                  type: "paragraph",
                  text: "Factoriser, c'est l'opération inverse du développement : partir d'une somme et l'écrire comme un produit, en « sortant » un facteur commun à tous les termes. Développer : 3(x + 2) = 3x + 6 ; factoriser : 3x + 6 = 3(x + 2).",
                },
                {
                  type: "cardGrid",
                  columns: 3,
                  cards: [
                    { title: "6x + 9", variant: "info", lines: ["facteur commun 3", "= 3(2x + 3)"] },
                    { title: "x² + 5x", variant: "info", lines: ["facteur commun x", "= x(x + 5)"] },
                    { title: "4x² − 6x", variant: "info", lines: ["facteur commun 2x", "= 2x(2x − 3)"] },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "💡 Trouver le facteur commun",
                  text: "Regarder les nombres (le PGCD des coefficients), puis les lettres (la puissance minimale de x présente dans tous les termes). Le facteur commun est le produit des deux. Toujours vérifier en redéveloppant : 3(2x + 3) = 6x + 9.",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Les 3 identités remarquables (à connaître par cœur)",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: [
                        "**(a + b)² = a² + 2ab + b²**",
                        "**(a − b)² = a² − 2ab + b²**",
                        "**(a + b)(a − b) = a² − b²**",
                      ],
                      note: "Elles fonctionnent dans les deux sens : pour développer ET pour factoriser.",
                    },
                    {
                      type: "cardGrid",
                      columns: 2,
                      cards: [
                        {
                          title: "Développer",
                          variant: "success",
                          lines: ["(x + 3)² = x² + 6x + 9", "(2x − 1)² = 4x² − 4x + 1", "(x + 4)(x − 4) = x² − 16"],
                        },
                        {
                          title: "Factoriser",
                          variant: "success",
                          lines: ["x² + 10x + 25 = (x + 5)²", "9x² − 1 = (3x + 1)(3x − 1)", "100 − 49 = 10² − 7² = 17 × 3 = 51"],
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "Au concours, l'identité 3 est souvent la plus utile pour factoriser : dès qu'on voit une différence de deux carrés (a² − b²), on écrit (a + b)(a − b).",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Prouver par le calcul : ce que le jury valorise",
              blocks: [
                {
                  type: "paragraph",
                  text: "Prouver par le calcul, c'est utiliser une lettre pour montrer qu'une propriété est vraie pour tous les nombres, pas seulement pour quelques exemples. C'est la différence entre observer et démontrer.",
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Programme de calcul : traduire en langage algébrique",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "Un programme de calcul décrit une suite d'opérations sur un nombre de départ. On le traduit en expression littérale, on développe, on interprète. Exemple : programme P, « choisir n, lui ajouter 4, multiplier par n, ajouter 4 » ; programme Q, « choisir le même n, lui ajouter 2, élever au carré ».",
                    },
                    {
                      type: "formulaBlock",
                      lines: [
                        "P : n(n + 4) + 4 = n² + 4n + 4",
                        "Q : (n + 2)² = n² + 4n + 4",
                        "Mêmes expressions → mêmes résultats pour tout n.",
                      ],
                    },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Écrire un entier d'un type donné",
                  blocks: [
                    {
                      type: "table",
                      headers: ["Notation", "Désigne", "Exemples"],
                      rows: [
                        ["2k", "tout entier pair", "0, 2, 6, −4 (k entier)"],
                        ["2k + 1", "tout entier impair", "1, 3, 5, −1 (k entier)"],
                        ["3k", "tout multiple de 3", "0, 3, 12 (k entier)"],
                        ["n et n + 1", "deux entiers consécutifs", "5 et 6 · 12 et 13"],
                        ["n − 1, n, n + 1", "trois entiers consécutifs", "milieu n ; somme = 3n"],
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "**Exemple de preuve complète.** Propriété : (n + 1)² − n² est toujours impair. Soit n un entier. (n + 1)² − n² = n² + 2n + 1 − n² = 2n + 1, de la forme 2 × (entier) + 1. Donc (n + 1)² − n² est impair, quel que soit n.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Ce que le jury attend",
                  text: "Une preuve par le calcul, pas des exemples numériques. « J'ai vérifié pour n = 1, 2, 3 » illustre mais ne démontre pas. Une démonstration avec une lettre prouve pour tous les entiers en une fois, et se conclut toujours par une phrase explicite.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : oublier de distribuer le signe −",
              badge: "Très fréquent",
              faux: "−(3x − 2) = −3x − 2.",
              vrai: "−(3x − 2) = −3x + 2 : le − change le signe de chaque terme à l'intérieur.",
              methode: "Raisonner −1 × (3x − 2) = −3x + 2. Le − devant une parenthèse retourne tous les signes.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : (a + b)² = a² + b²",
              badge: "Très fréquent",
              faux: "(x + 3)² = x² + 9.",
              vrai: "(x + 3)² = x² + 2 × x × 3 + 9 = x² + 6x + 9.",
              methode: "Le terme du milieu 2ab ne disparaît jamais. Réciter « a² PLUS deux-a-b PLUS b² ».",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : factoriser partiellement",
              badge: "Classique",
              faux: "6x + 9 = 2(3x) + 9 (le 2 ne sort que d'un terme).",
              vrai: "6x + 9 = 3(2x + 3) : le facteur commun doit diviser TOUS les termes.",
              methode: "Vérifier en redéveloppant. Si le résultat ne redonne pas le départ, la factorisation est fausse.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : prouver avec des exemples",
              badge: "Raisonnement",
              faux: "« Pour n = 1, 2, 3 ça marche, donc c'est vrai. »",
              vrai: "Une preuve exige un raisonnement général avec une lettre. Les exemples illustrent seulement.",
              methode: "Un contre-exemple suffit à réfuter, mais aucun nombre d'exemples positifs ne prouve pour TOUS les entiers.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école : le regard du futur enseignant",
              text: "Le calcul littéral n'est pas formalisé à l'école, mais la pensée algébrique s'y construit, et le jury valorise ce lien.\n\n**Cycles 2 et 3 :** les élèves rencontrent déjà l'idée à travers les suites à compléter (□ + 3 = 7), les « machines à calculer » et les formules (périmètre d'un rectangle = 2 × (L + l)). La lettre est d'abord un raccourci d'écriture, pas encore un objet manipulé.\n\n**Cycle 4 :** le calcul littéral se développe pleinement (développer, factoriser, identités remarquables, prouver par le calcul, formuler et valider une conjecture).\n\nCe qu'il faut savoir dire au jury : « À l'école, on ne parle pas de variable ni d'expression algébrique : on dit qu'on cherche un nombre ou qu'on écrit une formule. Les programmes de calcul sont un excellent pont entre l'arithmétique du cycle 3 et l'algèbre du cycle 4 : ils construisent le sens de la variable avant le formalisme. »",
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
              title: "La règle d'or au CRPE",
              text: "Toujours vérifier son résultat en substituant une valeur numérique simple (x = 0 ou x = 1). Si le développement ou la factorisation est correct, les deux expressions donnent le même résultat. Lisez bien la consigne : « développer », « factoriser » et « prouver » ne se traitent pas de la même façon.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Développer et réduire une expression",
              intro:
                "**Question type :** « Développer et réduire A = (2x + 3)(x − 1) − (x + 2)². »",
              steps: [
                {
                  number: "1",
                  text: "**Identifier chaque morceau et sa technique.**",
                  example: { lines: ["(2x + 3)(x − 1) → double distributivité", "(x + 2)² → identité 1"] },
                },
                {
                  number: "2",
                  text: "**Développer chaque morceau séparément.**",
                  example: { lines: ["(2x + 3)(x − 1) = 2x² + x − 3", "(x + 2)² = x² + 4x + 4"] },
                },
                {
                  number: "3",
                  text: "**Assembler et réduire, en distribuant le signe −.**",
                  example: { lines: ["A = (2x² + x − 3) − (x² + 4x + 4)", "= 2x² + x − 3 − x² − 4x − 4 = x² − 3x − 7"] },
                  warn: "⚠️ Le − devant (x² + 4x + 4) change le signe de CHAQUE terme. C'est l'erreur la plus fréquente.",
                },
                {
                  number: "💡",
                  text: "**Vérifier avec x = 0.**",
                  example: { lines: ["A = 3 × (−1) − 4 = −7", "Formule : 0 − 0 − 7 = −7 ✓"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Développer et réduire (x + 5) − (2x − 3).",
              correction: [
                { type: "line", text: "(x + 5) − (2x − 3) = x + 5 − 2x + 3 = **−x + 8**." },
                { type: "note", text: "Le − devant (2x − 3) donne −2x + 3, et non −2x − 3." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Factoriser une expression",
              intro:
                "**Question type :** « Factoriser B = 3x² − 12. »",
              steps: [
                {
                  number: "1",
                  text: "**Chercher un facteur commun évident.**",
                  example: { lines: ["3x² et 12 sont divisibles par 3"] },
                },
                {
                  number: "2",
                  text: "**Sortir le facteur commun.**",
                  example: { lines: ["B = 3(x² − 4)"] },
                },
                {
                  number: "3",
                  text: "**Reconnaître une identité dans ce qui reste.**",
                  example: { lines: ["x² − 4 = x² − 2² → identité 3", "B = 3(x + 2)(x − 2)"] },
                  warn: "⚠️ Toujours factoriser au maximum : après le facteur commun, chercher une différence de carrés.",
                },
                {
                  number: "💡",
                  text: "**Vérifier en redéveloppant.**",
                  example: { lines: ["3(x + 2)(x − 2) = 3(x² − 4) = 3x² − 12 ✓"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Factoriser au maximum 4x² − 16.",
              correction: [
                { type: "line", text: "4x² − 16 = 4(x² − 4) = 4(x² − 2²) = **4(x + 2)(x − 2)**." },
                { type: "note", text: "S'arrêter à 4(x² − 4) serait incomplet : x² − 4 est encore factorisable." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Traduire et exploiter un programme de calcul",
              intro:
                "**Question type :** « Choisir un nombre, le multiplier par lui-même, ajouter le double du nombre, ajouter 1. Montrer que le résultat est toujours un carré parfait. »",
              steps: [
                {
                  number: "1",
                  text: "**Nommer le nombre x et traduire chaque étape.**",
                  example: { lines: ["x → x² → x² + 2x → x² + 2x + 1"] },
                },
                {
                  number: "2",
                  text: "**Reconnaître la structure obtenue.**",
                  example: { lines: ["x² + 2x + 1 = x² + 2 × x × 1 + 1² = (x + 1)²"] },
                },
                {
                  number: "3",
                  text: "**Conclure par une phrase rédigée.**",
                  example: { lines: ["« Pour tout x, le résultat est (x + 1)², le carré du nombre suivant : c'est toujours un carré parfait. »"] },
                  warn: "⚠️ La conclusion doit être une phrase. Le jury valorise la rédaction autant que le calcul.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Programme : choisir x, ajouter 3, élever au carré. Traduire et développer.",
              correction: [
                { type: "line", text: "(x + 3)² = x² + 2 × x × 3 + 9 = **x² + 6x + 9**." },
                { type: "note", text: "On traduit étape par étape, puis on développe avec l'identité 1." },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Prouver un résultat général par le calcul",
              intro:
                "**Question type :** « Montrer que la somme de trois entiers consécutifs est un multiple de 3. »",
              steps: [
                {
                  number: "1",
                  text: "**Modéliser avec des lettres.**",
                  example: { lines: ["Trois consécutifs : n, n + 1, n + 2 (n entier)"] },
                },
                {
                  number: "2",
                  text: "**Calculer et simplifier.**",
                  example: { lines: ["n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1)"] },
                },
                {
                  number: "3",
                  text: "**Conclure en reliant au résultat.**",
                  example: { lines: ["« 3(n + 1) a 3 pour facteur, donc est multiple de 3, pour tout entier n. »"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Montrer que la somme de deux entiers pairs est paire.",
              correction: [
                { type: "line", text: "Soient 2a et 2b deux pairs. 2a + 2b = 2(a + b), avec a + b entier : c'est un pair, pour tout choix." },
                { type: "note", text: "On écrit chaque pair sous la forme 2k, puis on factorise par 2." },
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
                  question: "Dans l'expression 3x + 1 (sans signe =), quel est le rôle de x ?",
                  options: ["Une inconnue à trouver", "Une variable : x peut prendre toutes les valeurs", "Une constante", "Un coefficient"],
                  correctIndex: 1,
                  explanation: "Sans égalité contraignante, x est une variable : l'expression prend une valeur différente selon x. Dans 3x + 1 = 7, x serait une inconnue.",
                },
                {
                  objectifId: "e2",
                  question: "Réduire 4x² + 3x − x² − 7x.",
                  options: ["3x² − 4x", "5x² − 4x", "3x² + 10x", "−x⁴"],
                  correctIndex: 0,
                  explanation: "On regroupe les semblables : (4x² − x²) + (3x − 7x) = 3x² − 4x. On ne mélange jamais x² et x.",
                },
                {
                  objectifId: "e3",
                  question: "Développer −(3x − 2).",
                  options: ["−3x − 2", "−3x + 2", "3x − 2", "−3x + 2x"],
                  correctIndex: 1,
                  explanation: "Le signe − change le signe de chaque terme : −(3x − 2) = −3x + 2. C'est l'erreur la plus fréquente.",
                },
                {
                  objectifId: "e4",
                  question: "Développer (x + 3)².",
                  options: ["x² + 9", "x² + 3x + 9", "x² + 6x + 9", "x² + 6x + 3"],
                  correctIndex: 2,
                  explanation: "(a + b)² = a² + 2ab + b² : (x + 3)² = x² + 2 × x × 3 + 9 = x² + 6x + 9. Le terme 2ab ne disparaît jamais.",
                },
                {
                  objectifId: "e4",
                  question: "Factoriser 9x² − 1.",
                  options: ["(3x − 1)²", "(9x + 1)(x − 1)", "(3x + 1)(3x − 1)", "3x(3x − 1)"],
                  correctIndex: 2,
                  explanation: "Différence de carrés : 9x² − 1 = (3x)² − 1² = (3x + 1)(3x − 1).",
                },
                {
                  objectifId: "e5",
                  question: "Factoriser au maximum 12x² − 8x.",
                  options: ["4(3x² − 2x)", "4x(3x − 2)", "2x(6x − 4)", "x(12x − 8)"],
                  correctIndex: 1,
                  explanation: "Facteur commun : PGCD(12, 8) = 4 et un x commun, soit 4x. 12x² − 8x = 4x(3x − 2).",
                },
                {
                  objectifId: "e6",
                  question: "Programme : choisir x, multiplier par lui-même, ajouter le double de x, ajouter 1. Quel résultat ?",
                  options: ["x² + 1, jamais un carré", "(x + 1)², toujours un carré parfait", "2x + 1", "x² + 2"],
                  correctIndex: 1,
                  explanation: "x² + 2x + 1 = (x + 1)² : le résultat est toujours le carré du nombre qui suit x.",
                },
                {
                  objectifId: "e8",
                  question: "Un élève vérifie une propriété pour n = 1, 2, 3, 4 et conclut qu'elle est vraie pour tous les entiers. Est-ce une preuve ?",
                  options: ["Oui, 4 exemples suffisent", "Non : des exemples illustrent mais ne prouvent pas pour tous les entiers", "Oui, si les exemples sont bien choisis", "Cela dépend de la propriété"],
                  correctIndex: 1,
                  explanation: "Aucun nombre d'exemples positifs ne prouve une propriété pour TOUS les entiers. Seul un raisonnement avec une lettre le fait ; un contre-exemple, lui, suffit à réfuter.",
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
              text: "Lisez bien la consigne : « développer », « factoriser » et « prouver » ne se traitent pas de la même façon. Vérifiez chaque résultat avec une valeur. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Réduire et développer",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : réduire et calculer",
              objectifTag: "Réduire",
              question: "On donne A = 3x² − 5x + 2 + x² + 4x − 7 et B = (x + 2)(x − 2).\na) Réduire A.\nb) Développer B et nommer l'identité utilisée.\nc) Calculer A et B pour x = 3.",
              correction: [
                { type: "line", label: "a)", text: "A = (3x² + x²) + (−5x + 4x) + (2 − 7) = 4x² − x − 5." },
                { type: "line", label: "b)", text: "Identité (a + b)(a − b) = a² − b² : B = x² − 4." },
                { type: "line", label: "c)", text: "A(3) = 36 − 3 − 5 = 28 ; B(3) = 9 − 4 = 5." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : développer et réduire",
              objectifTag: "Distributivité et identités",
              question: "Développer et réduire :\na) 3(2x + 1) − 2(x − 4)\nb) (x + 5)(x − 2)\nc) (3x − 1)²\nd) (x + 7)(x − 7)",
              correction: [
                { type: "line", label: "a)", text: "6x + 3 − 2x + 8 = 4x + 11." },
                { type: "line", label: "b)", text: "x² − 2x + 5x − 10 = x² + 3x − 10." },
                { type: "line", label: "c)", text: "(3x)² − 2 × 3x × 1 + 1² = 9x² − 6x + 1." },
                { type: "line", label: "d)", text: "x² − 7² = x² − 49." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : factoriser",
              sub: "Facteur commun et identités",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : factoriser au maximum",
              objectifTag: "Factorisation",
              question: "Factoriser le plus possible :\na) 5x + 15\nb) x² − 9x\nc) 4x² − 1\nd) x² + 6x + 9\ne) 2x² − 8",
              correction: [
                { type: "line", label: "a)", text: "5(x + 3)." },
                { type: "line", label: "b)", text: "x(x − 9)." },
                { type: "line", label: "c)", text: "(2x)² − 1² = (2x + 1)(2x − 1)." },
                { type: "line", label: "d)", text: "x² + 2 × x × 3 + 3² = (x + 3)²." },
                { type: "line", label: "e)", text: "2(x² − 4) = 2(x + 2)(x − 2) : facteur commun 2, puis identité 3." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : calcul malin",
              objectifTag: "Identités remarquables",
              question: "À l'aide d'une identité remarquable, sans calculatrice :\na) 98 × 102\nb) 47² (avec 47 = 50 − 3)\nc) 99 × 101",
              correction: [
                { type: "line", label: "a)", text: "(100 − 2)(100 + 2) = 100² − 2² = 10 000 − 4 = 9 996." },
                { type: "line", label: "b)", text: "(50 − 3)² = 2 500 − 300 + 9 = 2 209." },
                { type: "line", label: "c)", text: "(100 − 1)(100 + 1) = 10 000 − 1 = 9 999." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : programmes de calcul et aires",
              sub: "Traduire, développer, interpréter",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : le carreleur",
              objectifTag: "Mise en équation et aires",
              enonce: "Un carreleur pose un carré de côté x mètres, puis une bordure de 2 mètres de large tout autour.",
              question:
                "a) Exprimer l'aire totale (carré + bordure) en fonction de x, puis développer.\nb) En déduire l'aire de la seule bordure, réduite.\nc) Vérifier pour x = 4.",
              correction: [
                { type: "line", label: "a)", text: "Côté total = x + 2 + 2 = x + 4. Aire totale = (x + 4)² = x² + 8x + 16." },
                { type: "line", label: "b)", text: "Aire bordure = (x + 4)² − x² = 8x + 16." },
                { type: "line", label: "c)", text: "x = 4 : aire totale = 8² = 64 ; bordure = 8 × 4 + 16 = 48, et 64 − 16 = 48 ✓." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 4 : le programme du magicien",
              objectifTag: "Programme de calcul",
              enonce: "Programme : « Choisir un nombre, ajouter 4, multiplier le résultat par le nombre de départ, ajouter 4. »",
              question:
                "a) Vérifier avec x = 3 et x = 5.\nb) Traduire chaque étape en expression algébrique (x = nombre de départ).\nc) Développer et factoriser pour montrer que le résultat est toujours un carré parfait.",
              correction: [
                { type: "line", label: "a)", text: "x = 3 : (3 + 4) × 3 + 4 = 25 = 5² ; x = 5 : (5 + 4) × 5 + 4 = 49 = 7²." },
                { type: "line", label: "b)", text: "x → x + 4 → x(x + 4) = x² + 4x → x² + 4x + 4." },
                { type: "line", label: "c)", text: "x² + 4x + 4 = (x + 2)² : toujours le carré du nombre de départ augmenté de 2." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : preuves niveau CRPE",
              sub: "Démontrer, conjecturer, prendre du recul",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 5 : pairs, impairs, consécutifs",
              objectifTag: "Preuve par le calcul",
              question:
                "a) Montrer que le produit de deux entiers impairs est toujours impair.\nb) Montrer que la différence des carrés de deux entiers consécutifs est toujours impaire.",
              correction: [
                { type: "line", label: "a)", text: "Soient 2a + 1 et 2b + 1 impairs. (2a + 1)(2b + 1) = 4ab + 2a + 2b + 1 = 2(2ab + a + b) + 1 : de la forme 2 × entier + 1, donc impair." },
                { type: "line", label: "b)", text: "Deux consécutifs n et n + 1 : (n + 1)² − n² = (2n + 1) × 1 = 2n + 1, impair pour tout n." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 6 : la piscine et sa bordure",
              objectifTag: "Aires et factorisation",
              enonce: "Une piscine carrée de côté x mètres est entourée d'une bordure de 1 mètre de large.",
              question:
                "a) Exprimer l'aire totale (piscine + bordure) en fonction de x.\nb) En déduire l'aire de la bordure B(x), développée et réduite.\nc) Factoriser B(x) et l'interpréter.\nd) Vérifier pour x = 5.",
              correction: [
                { type: "line", label: "a)", text: "Carré de côté (x + 2) : aire totale = (x + 2)²." },
                { type: "line", label: "b)", text: "B(x) = (x + 2)² − x² = x² + 4x + 4 − x² = 4x + 4." },
                { type: "line", label: "c)", text: "B(x) = 4(x + 1) : on retrouve les 4 bandes de la bordure, de longueur (x + 1)." },
                { type: "line", label: "d)", text: "x = 5 : total 7² = 49, piscine 25, bordure 24 ; et 4 × 5 + 4 = 24 ✓." },
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
              text: "Cet exercice reproduit le format et les exigences d'un sujet de concours, où calcul pur et programme de calcul sont toujours associés. Comptez 20 à 25 minutes, en conditions réelles.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 7 : les deux programmes rivaux",
              objectifTag: "Programme de calcul, preuve, factorisation",
              enonce:
                "Deux élèves proposent un programme de calcul.\nAlice : « Choisir un nombre, le multiplier par lui-même, ajouter le triple du nombre, retrancher 4. »\nBob : « Choisir un nombre, y soustraire 1, multiplier le résultat par le nombre augmenté de 4. »",
              question:
                "1.1 Appliquer le programme d'Alice pour x = 2 et x = −1.\n1.2 Appliquer le programme de Bob pour x = 2 et x = −1.\n2.1 En appelant x le nombre de départ, exprimer le résultat d'Alice, développé et réduit.\n2.2 Faire de même pour Bob.\n2.3 Les deux programmes donnent-ils toujours le même résultat ? Justifier.\n3.1 Factoriser l'expression de 2.1.\n3.2 En déduire les valeurs de x pour lesquelles le résultat d'Alice est nul.\n4.1 À quel niveau ces activités sont-elles inscrites au programme, et quel est leur intérêt ?\n4.2 Un élève de 4e dit : « J'ai testé pour x = 0, 1, 2, 3, c'est donc prouvé. » Que lui répondre ?",
              correction: [
                { type: "line", label: "1.1", text: "Alice : x = 2 → 4 + 6 − 4 = 6 ; x = −1 → 1 − 3 − 4 = −6." },
                { type: "line", label: "1.2", text: "Bob : x = 2 → 1 × 6 = 6 ; x = −1 → (−2) × 3 = −6." },
                { type: "line", label: "2.1", text: "Alice : x² + 3x − 4." },
                { type: "line", label: "2.2", text: "Bob : (x − 1)(x + 4) = x² + 4x − x − 4 = x² + 3x − 4." },
                { type: "line", label: "2.3", text: "Oui : les deux se réduisent à x² + 3x − 4, identiques pour tout x." },
                { type: "line", label: "3.1", text: "x² + 3x − 4 = (x − 1)(x + 4) (vérification : x² + 4x − x − 4 = x² + 3x − 4)." },
                { type: "line", label: "3.2", text: "(x − 1)(x + 4) = 0 ⟺ x = 1 ou x = −4 (propriété du produit nul, détaillée en N°9)." },
                { type: "line", label: "4.1", text: "Programmes de calcul au cycle 4 (BOEN 2020), domaine calcul littéral : point d'entrée dans l'algèbre, ils donnent du sens à la variable et montrent que l'algèbre prouve ce que l'arithmétique illustre." },
                { type: "line", label: "4.2", text: "« Tu as vérifié pour 4 valeurs : c'est utile pour détecter une erreur, mais pas une preuve. En montrant que les deux expressions se réduisent à x² + 3x − 4, on prouve l'égalité pour tout x en une seule fois. »" },
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
              title: "Erreur type · Exercice 8 : le signe − devant une parenthèse",
              objectifTag: "Distributivité du signe −",
              enonce: "**Copie d'un candidat :** développer et réduire A = (x + 5) − (2x − 3).\n*Réponse produite :* « A = x + 5 − 2x − 3 = −x + 2 ».",
              question: "a) Identifier l'erreur.\nb) Donner le calcul correct.",
              correction: [
                { type: "paragraph", text: "**Erreur : le signe − n'a pas été distribué sur tous les termes.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Le candidat a écrit −(2x − 3) = −2x − 3, en oubliant de changer le signe de −3." },
                    { text: "−(2x − 3) = −2x + 3 (chaque signe intérieur est retourné)." },
                    { text: "Correct : A = x + 5 − 2x + 3 = −x + 8." },
                  ],
                },
                { type: "note", text: "Astuce : voir le − comme × (−1) appliqué à toute la parenthèse." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 9 : (a + b)² = a² + b²",
              objectifTag: "Identités remarquables",
              enonce: "**Copie d'un candidat :** développer (x + 4)².\n*Réponse produite :* « (x + 4)² = x² + 16 ».",
              question: "a) Identifier l'erreur.\nb) Donner le développement correct et une vérification.",
              correction: [
                { type: "paragraph", text: "**Erreur : le terme du milieu 2ab a été oublié.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "(a + b)² n'est pas égal à a² + b² : il manque 2ab." },
                    { text: "(x + 4)² = x² + 2 × x × 4 + 16 = x² + 8x + 16." },
                    { text: "Vérification x = 1 : (1 + 4)² = 25 ; la formule juste donne 1 + 8 + 16 = 25 ✓ (la fausse donnait 17)." },
                  ],
                },
                { type: "note", text: "Réciter l'identité en entier détecte systématiquement cette erreur." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 10 : confondre variable et inconnue",
              objectifTag: "Variable vs inconnue",
              enonce: "**Copie d'un candidat :** on demande de factoriser 2x + 6.\n*Réponse produite :* « 2x + 6 = 0 donc x = −3 ».",
              question: "a) Identifier l'erreur conceptuelle.\nb) Donner la réponse à la vraie question.",
              correction: [
                { type: "paragraph", text: "**Erreur : une expression a été transformée en équation.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Le candidat a posé « = 0 » de lui-même : il a traité x comme une inconnue alors que la consigne demandait de manipuler une expression." },
                    { text: "Factoriser 2x + 6 = 2(x + 3)." },
                    { text: "Résoudre 2x + 6 = 0 donnerait bien x = −3, mais ce n'était pas la question." },
                  ],
                },
                { type: "note", text: "« Développer » ou « factoriser » → x est une variable. « Résoudre » ou « trouver x » → x est une inconnue." },
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
                  question: "Variable ou inconnue : quelle différence ?",
                  answer:
                    "Variable : lettre qui peut prendre toutes les valeurs, pour écrire une formule générale (dans 3x + 1, x est une variable). Inconnue : lettre dont on cherche la valeur précise qui rend une équation vraie (dans 3x + 1 = 7, x = 2).",
                  astuce: "Même lettre, rôle différent selon qu'on a une expression ou une équation.",
                },
                {
                  question: "Développer, réduire : que signifient ces mots ?",
                  answer:
                    "Développer : transformer un produit en somme en distribuant, 3(x + 2) = 3x + 6. Réduire : regrouper les termes semblables (même partie littérale), 3x + 5x = 8x. On ne réduit pas 4x² + 2x (pas semblables).",
                },
                {
                  question: "Factoriser : qu'est-ce que c'est ?",
                  answer:
                    "L'inverse de développer : transformer une somme en produit en mettant un facteur commun en évidence. 6x + 9 = 3(2x + 3). On vérifie toujours en redéveloppant, et on factorise au maximum.",
                },
                {
                  question: "Énoncer les 3 identités remarquables.",
                  answer:
                    "(a + b)² = a² + 2ab + b² ; (a − b)² = a² − 2ab + b² ; (a + b)(a − b) = a² − b². Elles servent dans les deux sens, développement et factorisation.",
                  astuce: "(a + b)² ≠ a² + b² : le terme 2ab ne disparaît jamais.",
                },
                {
                  question: "Comment reconnaître a² − b² pour factoriser ?",
                  answer:
                    "Deux termes séparés par un −, tous deux des carrés parfaits. 9x² − 16 = (3x)² − 4² = (3x + 4)(3x − 4). Application : 99 × 101 = (100 − 1)(100 + 1) = 100² − 1² = 9 999.",
                },
                {
                  question: "Comment appliquer la double distributivité ?",
                  answer:
                    "Chaque terme du 1er facteur multiplie chaque terme du 2e : (a + b)(c + d) = ac + ad + bc + bd, soit 4 produits avant réduction. (x + 3)(x − 2) = x² − 2x + 3x − 6 = x² + x − 6.",
                },
                {
                  question: "Comment écrire un entier pair, impair, trois consécutifs ?",
                  answer:
                    "Pair : 2k. Impair : 2k + 1. Multiple de 3 : 3k. Deux consécutifs : n et n + 1. Trois consécutifs : n − 1, n, n + 1 (milieu n, somme 3n). Ces formes sont la base des preuves sur les entiers.",
                },
                {
                  question: "Comment prouver une propriété par le calcul ?",
                  answer:
                    "1) Modéliser avec des lettres (pair = 2k, impair = 2k + 1, consécutifs = n et n + 1). 2) Calculer et simplifier. 3) Conclure par une phrase reliant le résultat à la propriété. Des exemples illustrent mais ne prouvent jamais.",
                },
                {
                  question: "Pourquoi un exemple ne suffit-il pas à prouver ?",
                  answer:
                    "Un exemple vérifie la propriété pour ces valeurs seulement : il peut exister un contre-exemple non testé. La preuve littérale couvre tous les cas en une fois, car la lettre représente toutes les valeurs. Un contre-exemple suffit à réfuter, mille exemples ne prouvent pas.",
                },
                {
                  question: "Comment vérifier un développement ou une factorisation ?",
                  answer:
                    "Substituer une valeur simple (x = 0 ou x = 1) dans les deux expressions : elles doivent donner le même résultat. Exemple : (x + 3)² = x² + 6x + 9, pour x = 1 : 16 = 16 ✓. Cela ne prouve pas mais détecte la quasi-totalité des erreurs.",
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
              center: { title: "Calcul littéral", subtitle: "Raisonner sur tous les nombres" },
              branches: [
                {
                  title: "Variable et inconnue",
                  variant: "blue",
                  lines: ["Variable : expression (3x + 1)", "Inconnue : équation (3x + 1 = 7)"],
                },
                {
                  title: "Réduire et développer",
                  variant: "blue",
                  lines: ["Réduire : termes semblables", "k(a + b) = ka + kb", "Distribuer le signe −"],
                },
                {
                  title: "Identités remarquables",
                  variant: "green",
                  lines: ["(a + b)² = a² + 2ab + b²", "(a − b)² = a² − 2ab + b²", "(a + b)(a − b) = a² − b²"],
                },
                {
                  title: "Factoriser",
                  variant: "green",
                  lines: ["Facteur commun (PGCD + lettres)", "Jusqu'au maximum", "Vérifier en redéveloppant"],
                },
                {
                  title: "Programmes de calcul",
                  variant: "yellow",
                  lines: ["Traduire chaque étape", "Développer, réduire", "Interpréter le résultat"],
                },
                {
                  title: "Prouver par le calcul",
                  variant: "purple",
                  dashed: true,
                  lines: ["Pair 2k, impair 2k + 1", "Un exemple ne prouve pas", "Conclure par une phrase"],
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
