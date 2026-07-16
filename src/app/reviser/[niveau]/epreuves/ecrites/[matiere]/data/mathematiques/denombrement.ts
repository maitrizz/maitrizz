import type { Fiche } from "@/components/fiche/types";
import { COPIES_DENOMBREMENT } from "./copies-denombrement";
import { EXERCICES_DENOMBREMENT } from "./exercices-denombrement";

export const SAVOIR_FAIRE = [
  { id: "principes", label: "Choisir principe additif ou multiplicatif" },
  { id: "remise", label: "Distinguer avec et sans remise" },
  { id: "arbre-tableau", label: "Construire un arbre ou un tableau" },
  { id: "arrangement", label: "Calculer un arrangement A(n, p)" },
  { id: "permutation", label: "Calculer une permutation (n!)" },
  { id: "groupe-classement", label: "Distinguer un groupe d'un classement" },
];

export const ficheDenombrement: Fiche = {
  slug: "denombrement",
  matiere: "mathematiques",
  numero: 7,
  partie: "Partie 1 : Nombres et calcul",
  title: "Dénombrement et combinatoire élémentaire",
  subtitle:
    "Compter sans lister · principe additif · principe multiplicatif · arbre de choix · tableau à double entrée · arrangements · permutations (factorielle)",
  badges: [
    { label: "★★ Très fréquent", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème B", variant: "info" },
  ],
  metaTitle: "Dénombrement et combinatoire (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur le dénombrement : principes additif et multiplicatif, arbre de choix, tableau à double entrée, avec et sans remise, arrangements A(n, p) et permutations (factorielle). Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
              title: "Deux questions, deux outils",
              text: "Situation 1 : un sachet cadeau contient un stylo (rouge, bleu ou vert) ET un carnet (grand ou petit). Combien de sachets différents ? Chaque stylo se combine avec chacun des 2 carnets : 3 × 2 = 6.\n\nSituation 2 : cinq élèves, un prix à la 1re, 2e et 3e place. Combien de podiums ? 5 candidats pour la 1re place, 4 restants pour la 2e, 3 pour la 3e : 5 × 4 × 3 = 60.\n\nMême réflexe : compter intelligemment sans tout lister. C'est le dénombrement, au programme du cycle 4, et il prépare directement les probabilités ([N°12](fiche:probabilites)) : pour calculer une probabilité, il faut souvent commencer par compter. Lisez la fiche dans l'ordre, chaque notion en appelle une autre.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Trois mots à connaître : cardinal, ordinal, univers",
              blocks: [
                {
                  type: "paragraph",
                  text: "Le **cardinal** d'un ensemble E est le nombre d'éléments qu'il contient, noté **Card(E)**. Il répond à « combien ? ». Exemples : Card({rouge, bleu, vert}) = 3, Card({1, 2, 3, 4, 5, 6}) = 6, Card(∅) = 0.",
                },
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Cardinal : « combien ? »",
                      variant: "info",
                      lines: ["« Il y a 3 élèves dans l'équipe. »", "Compte. Ne dit pas qui est où."],
                    },
                    {
                      title: "Ordinal : « à quelle place ? »",
                      variant: "info",
                      lines: ["« Alice est 1re, Bob est 2e. »", "Positionne. L'ordre porte du sens."],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "**La question centrale du dénombrement : est-ce que l'ordre compte ?** Pour un podium, les places sont ordinales (1re ≠ 2e, même avec les mêmes personnes). Pour une équipe sans hiérarchie, seul le cardinal compte.",
                },
                {
                  type: "paragraph",
                  text: "Le vocabulaire des expériences : une **issue** est un résultat élémentaire (« obtenir la face 3 »), l'**univers Ω** est l'ensemble de toutes les issues (Ω = {1, 2, 3, 4, 5, 6} pour un dé, Card(Ω) = 6), et il y a **équiprobabilité** quand toutes les issues ont la même chance. Les outils de la fiche servent à compter Card(Ω) et Card(A) ; le calcul des probabilités vient en [N°12](fiche:probabilites).",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Les deux principes : additif (OU) et multiplicatif (ET)",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Principe additif : « l'un OU l'autre »",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "8 romans et 5 BD, on emprunte un seul livre : 8 + 5 = 13 choix. Les possibilités s'additionnent parce qu'elles sont **exclusives** (choisir un roman exclut de choisir une BD).",
                    },
                    {
                      type: "formulaBlock",
                      lines: [
                        "**Card(A ∪ B) = Card(A) + Card(B)** si A et B sont disjoints",
                        "Si les cas se chevauchent :",
                        "Card(A ∪ B) = Card(A) + Card(B) − Card(A ∩ B)",
                      ],
                      note: "16 élèves font du latin, 14 du théâtre, 5 les deux : 16 + 14 − 5 = 25 (les 5 ont été comptés deux fois).",
                    },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Principe multiplicatif : « l'un ET l'autre »",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "3 hauts ET 4 pantalons : chaque haut va avec chacun des 4 pantalons, soit 3 × 4 = 12 tenues. Les choix s'accumulent parce qu'ils sont **successifs et indépendants** : on fait les deux, l'un après l'autre.",
                    },
                    {
                      type: "formulaBlock",
                      lines: [
                        "**Card(E₁ × E₂ × … × Eₙ) = Card(E₁) × Card(E₂) × … × Card(Eₙ)**",
                        "Menu (4 entrées, 5 plats, 3 desserts) → 4 × 5 × 3 = 60",
                        "Code à 4 chiffres (0 à 9, répétitions permises) → 10⁴ = 10 000",
                      ],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "💡 Le réflexe de reconnaissance",
                  text: "Reformulez la question avec ET ou OU. « Je choisis un haut ET un pantalon » → multiplication. « Je choisis un roman OU une BD » → addition. Ce seul réflexe évite l'erreur la plus fréquente.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Visualiser avant de calculer : arbre et tableau",
              blocks: [
                {
                  type: "paragraph",
                  text: "Sur de petits exemples, représenter toutes les issues est utile et valorisé au concours. Deux outils, au programme du cycle 4, pour une même situation : tirer une couleur dans {Rouge, Bleu, Vert} puis une forme dans {Rond, Carré}.",
                },
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "Arbre de choix",
                      variant: "info",
                      lines: [
                        "Chaque branche = un choix, chaque chemin racine → feuille = une issue.",
                        "3 branches × 2 = 6 feuilles = 6 issues.",
                        "Idéal quand le 2e choix dépend du 1er (sans remise).",
                      ],
                    },
                    {
                      title: "Tableau à double entrée",
                      variant: "info",
                      lines: [
                        "Lignes = couleurs, colonnes = formes, chaque case = une issue.",
                        "3 lignes × 2 colonnes = 6 cases = 6 issues.",
                        "Idéal pour deux séries de choix indépendants.",
                      ],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "💡 Conseil concours",
                  text: "Dessiner un arbre ou un tableau sur un exemple simple montre que vous comprenez la structure du problème, le recul que le jury valorise. Mais attention au temps : ne les dessinez que si l'énoncé le demande, ou si le nombre d'issues est petit (12 environ au maximum). Sur de grands nombres, calculez directement et mentionnez l'outil : « on peut représenter les issues dans un arbre, ce qui donne… ».",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Arrangements et permutations : choisir et ordonner",
              blocks: [
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Arrangement A(n, p) : choisir et ordonner, sans remise",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "Reprenons le podium : 5 élèves, 3 places. On applique le principe multiplicatif, mais le nombre d'options **diminue** à chaque étape (5, puis 4, puis 3), car un élève déjà placé n'est plus disponible. C'est un arrangement : une liste **ordonnée** de p éléments distincts tirés parmi n, **sans remise**.",
                    },
                    {
                      type: "formulaBlock",
                      lines: [
                        "**A(n, p) = n × (n−1) × … × (n−p+1)** (p facteurs en partant de n)",
                        "A(5, 3) = 5 × 4 × 3 = 60",
                        "A(7, 2) = 7 × 6 = 42 · A(6, 4) = 6 × 5 × 4 × 3 = 360",
                      ],
                      note: "Avec remise, on aurait 5 × 5 × 5 = 125 (comme si un élève pouvait être 1re et 3e place). Sans remise, c'est toujours moins.",
                    },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Permutation n! : ordonner TOUS les éléments",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "Un arrangement où p = n : on utilise tous les éléments et on les ordonne tous. Ranger 4 livres : 4 × 3 × 2 × 1 = 24 façons. Ce produit décroissant jusqu'à 1 est la **factorielle** de n, notée **n!**.",
                    },
                    {
                      type: "formulaBlock",
                      lines: [
                        "**n! = n × (n−1) × … × 2 × 1**",
                        "1! = 1 · 2! = 2 · 3! = 6 · 4! = 24 · 5! = 120 · 6! = 720",
                        "Anagrammes de CHAT (4 lettres distinctes) → 4! = 24",
                      ],
                      note: "Une permutation est un arrangement où p = n : A(n, n) = n × (n−1) × … × 1 = n!.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Dénombrement et probabilités : la frontière",
                  text: "Les outils de cette fiche servent à compter : combien d'issues au total, combien vérifient une condition. Les probabilités elles-mêmes (P(A), arbres pondérés, événements contraires) font l'objet de la [fiche N°12](fiche:probabilites). Ici on compte, là-bas on probabilise.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : additionner quand il faut multiplier",
              badge: "Très fréquent",
              faux: "« 3 hauts et 4 pantalons → 3 + 4 = 7 tenues. »",
              vrai: "On choisit un haut ET un pantalon (les deux ensemble) → 3 × 4 = 12 tenues.",
              methode: "ET (cumulatif) → multiplication ; OU (exclusif) → addition. Reformuler avant de choisir.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : confondre avec et sans remise",
              badge: "Très fréquent",
              faux: "« Podium de 3 places parmi 5 élèves → 5 × 5 × 5 = 125. »",
              vrai: "Un élève ne peut pas occuper deux places (sans remise) → A(5, 3) = 5 × 4 × 3 = 60.",
              methode: "Se demander : peut-on reprendre le même élément ? Si non, le nombre d'options diminue à chaque étape.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : confondre arrangement et permutation",
              badge: "Classique",
              faux: "« 3 rôles à distribuer parmi 5 élèves → 5! = 120. »",
              vrai: "On prend p = 3 parmi n = 5, pas tous → A(5, 3) = 5 × 4 × 3 = 60.",
              methode: "Permutation = on ordonne TOUS les éléments. Arrangement = on en prend seulement p parmi n.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : double comptage quand les ensembles se chevauchent",
              badge: "Subtil",
              faux: "« 16 font du latin, 14 du théâtre → 30 élèves concernés. »",
              vrai: "Si 5 font les deux : 16 + 14 − 5 = 25 (on retire ceux comptés deux fois).",
              methode: "Le principe additif simple ne vaut que si les ensembles sont totalement disjoints.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école : le regard du futur enseignant",
              text: "On ne parle ni d'arrangements ni de factorielles à l'école : on construit l'intuition par des situations concrètes.\n\n**Cycle 2 :** les élèves dénombrent intuitivement (« combien de façons de mettre 3 enfants en rang ? ») par manipulation et tri, sans formalisme.\n\n**Cycle 3 :** les arbres de possibilités apparaissent dans le cadre des probabilités. C'est le premier contact avec le principe multiplicatif, sans que le terme soit employé.\n\n**Cycle 4 :** le BOEN 2020 mentionne explicitement les tableaux à double entrée, les arbres de choix, le principe multiplicatif et les arrangements, en pont vers les probabilités.\n\nCe qu'il faut savoir dire au jury : « On construit l'intuition par des situations concrètes (tenues, menus, tirages) et on représente avec des arbres ou des tableaux. L'objectif est que l'élève comprenne pourquoi on multiplie : parce que chaque branche de l'arbre se subdivise de façon indépendante. »",
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
              title: "Trois questions à se poser, dans l'ordre",
              text: "Avant toute formule : 1) les choix sont-ils cumulatifs (ET) ou exclusifs (OU) ? → multiplication ou addition. 2) L'ordre compte-t-il ? → arrangement ou non. 3) Peut-on reprendre le même élément ? → avec ou sans remise. Chaque savoir-faire ci-dessous se termine par une vérification.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Appliquer le principe multiplicatif",
              intro:
                "**Question type :** « 4 entrées, 5 plats, 3 desserts. Combien de menus (une entrée + un plat + un dessert) ? »",
              steps: [
                {
                  number: "1",
                  text: "**Identifier les étapes et compter les options de chacune.**",
                  example: { lines: ["Entrée : 4 · Plat : 5 · Dessert : 3"] },
                },
                {
                  number: "2",
                  text: "**Vérifier que les choix sont indépendants (ET).**",
                  example: { lines: ["Le choix du plat ne dépend pas de l'entrée : oui."] },
                },
                {
                  number: "3",
                  text: "**Multiplier et rédiger la justification.**",
                  example: { lines: ["« Par le principe multiplicatif, 4 × 5 × 3 = 60 menus. »"] },
                  warn: "⚠️ Toujours écrire « par le principe multiplicatif » : le jury valorise la justification, pas seulement le résultat.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Un code à 3 chiffres, chacun de 0 à 9, répétitions permises. Combien de codes possibles ?",
              correction: [
                { type: "line", text: "Trois choix indépendants de 10 options : 10 × 10 × 10 = **1 000 codes**." },
                { type: "note", text: "« Avec répétition » signifie que le nombre d'options reste constant à chaque étape." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Construire un arbre de choix",
              intro:
                "**Question type :** « Une urne contient R, B, V. On tire 2 boules sans remise. Lister les issues. »",
              steps: [
                {
                  number: "1",
                  text: "**Dessiner le 1er niveau : une branche par option.**",
                  example: { lines: ["1er tirage → R, B, V (3 branches)"] },
                },
                {
                  number: "2",
                  text: "**Ajouter le 2e niveau en retirant l'élément déjà pris.**",
                  example: { lines: ["R → B, V · B → R, V · V → R, B"] },
                },
                {
                  number: "3",
                  text: "**Lire les feuilles : chaque chemin est une issue.**",
                  example: { lines: ["(R,B) (R,V) (B,R) (B,V) (V,R) (V,B)", "6 issues = 3 × 2 ✓"] },
                  warn: "⚠️ Avec remise, l'arbre aurait 3 × 3 = 9 feuilles, et (R,R), (B,B), (V,V) seraient possibles.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "On lance une pièce (Pile/Face) puis un dé à 4 faces. Combien d'issues ? Combien de feuilles aurait l'arbre ?",
              correction: [
                { type: "line", text: "2 × 4 = **8 issues**, donc 8 feuilles (2 branches au 1er niveau, chacune se subdivisant en 4)." },
                { type: "note", text: "Chaque chemin racine → feuille est une issue complète." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Calculer un arrangement",
              intro:
                "**Question type :** « 7 élèves candidats pour 4 rôles distincts. Combien de distributions ? »",
              steps: [
                {
                  number: "1",
                  text: "**Vérifier : l'ordre compte ? Sans remise ? Combien de places ?**",
                  example: { lines: ["Rôles distincts → ordre compte ; un élève par rôle → sans remise ; p = 4 parmi n = 7"] },
                },
                {
                  number: "2",
                  text: "**Raisonner étape par étape : partir de n, décrémenter, écrire p facteurs.**",
                  example: { lines: ["7 → 6 → 5 → 4", "A(7, 4) = 7 × 6 × 5 × 4 = 840"] },
                },
                {
                  number: "3",
                  text: "**Cas permutation : si on ordonnait tous les 7 élèves.**",
                  example: { lines: ["P(7) = 7! = 5 040"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "6 élèves, 2 rôles distincts (un meneur, un porte-drapeau). Combien de façons de les désigner ?",
              correction: [
                { type: "line", text: "Ordre compte, sans remise, p = 2 parmi 6 : A(6, 2) = 6 × 5 = **30 façons**." },
                { type: "note", text: "Les rôles sont distincts, donc l'ordre compte : c'est un arrangement, pas une équipe." },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Distinguer un groupe d'un classement",
              intro:
                "**Question type :** « Combien d'équipes de 2 élèves parmi 5 (sans rôle distinct) ? » Idée : si l'ordre ne compte pas, on corrige l'arrangement.",
              steps: [
                {
                  number: "1",
                  text: "**Compter d'abord comme si l'ordre comptait (arrangement).**",
                  example: { lines: ["A(5, 2) = 5 × 4 = 20 paires ordonnées"] },
                },
                {
                  number: "2",
                  text: "**Repérer le double comptage : (Alice, Bob) = (Bob, Alice).**",
                  example: { lines: ["Chaque équipe est comptée 2! = 2 fois"] },
                },
                {
                  number: "3",
                  text: "**Diviser par le nombre d'ordres des éléments choisis.**",
                  example: { lines: ["20 ÷ 2 = 10 équipes"] },
                  warn: "⚠️ Rôles distincts → arrangement (l'ordre compte). Groupe sans hiérarchie → diviser par les permutations des éléments choisis.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Combien de binômes de 2 élèves (sans rôle) peut-on former dans un groupe de 4 ?",
              correction: [
                { type: "line", text: "A(4, 2) = 4 × 3 = 12 paires ordonnées, puis 12 ÷ 2 = **6 binômes**." },
                { type: "note", text: "On divise par 2! car l'ordre des deux élèves ne distingue pas deux binômes différents." },
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
              title: "Dénombrement et combinatoire élémentaire",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_DENOMBREMENT,
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
              title: "Dénombrement et combinatoire élémentaire",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_DENOMBREMENT,
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
              center: { title: "Dénombrement", subtitle: "Compter sans lister" },
              branches: [
                {
                  title: "Principe additif",
                  variant: "blue",
                  lines: ["OU, cas exclusifs", "Card(A ∪ B) = Card(A) + Card(B)", "Chevauchement : − Card(A ∩ B)"],
                },
                {
                  title: "Principe multiplicatif",
                  variant: "blue",
                  lines: ["ET, choix indépendants", "n₁ × n₂ × … × nₖ", "Menu 4 × 5 × 3 = 60"],
                },
                {
                  title: "Arbre et tableau",
                  variant: "green",
                  lines: ["Arbre : choix successifs", "Tableau : lignes × colonnes", "Petits exemples (≤ 12 issues)"],
                },
                {
                  title: "Arrangement A(n, p)",
                  variant: "green",
                  lines: ["Ordre compte, sans remise", "n × (n−1) × … (p facteurs)", "A(5, 3) = 60"],
                },
                {
                  title: "Permutation n!",
                  variant: "yellow",
                  lines: ["Ordonner TOUS les éléments", "n! : 4! = 24, 5! = 120", "A(n, n) = n!"],
                },
                {
                  title: "Prépare les probabilités",
                  variant: "purple",
                  dashed: true,
                  lines: ["Compter Card(Ω) et Card(A)", "Le calcul de P(A) en [N°12](fiche:probabilites)"],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
