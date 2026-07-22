import type { Fiche } from "@/components/fiche/types";
import { COPIES_CALCUL_LITTERAL } from "./copies-calcul-litteral";
import { EXERCICES_CALCUL_LITTERAL } from "./exercices-calcul-litteral";

export const SAVOIR_FAIRE = [
  { id: "reduire", label: "Réduire une expression" },
  { id: "developper", label: "Développer (distributivité)" },
  { id: "identites", label: "Utiliser les identités remarquables" },
  { id: "factoriser", label: "Factoriser au maximum" },
  { id: "programme", label: "Traduire un programme de calcul" },
  { id: "prouver", label: "Prouver par le calcul" },
];

export const ficheCalculLitteral: Fiche = {
  slug: "calcul-litteral",
  matiere: "mathematiques",
  numero: 8,
  partie: "Partie 1 : Nombres et calcul",
  title: "Calcul littéral et expressions algébriques",
  subtitle:
    "Variable et inconnue · réduire · développer · factoriser · distributivité · identités remarquables · prouver par le calcul · programmes de calcul.",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème A", variant: "info" },
  ],
  metaTitle: "Calcul littéral et identités remarquables · Fiche de révision CRPE",
  metaDescription:
    "Fiche CRPE sur le calcul littéral : variable et inconnue, réduire, développer (distributivité simple et double), factoriser, les 3 identités remarquables, programmes de calcul et preuve par le calcul. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                  number: "4",
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
                  number: "4",
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
              title: "Calcul littéral et expressions algébriques",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_CALCUL_LITTERAL,
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
              title: "Calcul littéral et expressions algébriques",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_CALCUL_LITTERAL,
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
      ],
    },
  ],
};
