import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je distingue le principe additif (OU, situations exclusives) et le principe multiplicatif (ET, situations cumulatives)" },
  { id: "e2", label: "Je distingue « avec remise » (le nombre d'options reste constant) et « sans remise » (il diminue à chaque étape)" },
  { id: "e3", label: "Je construis un arbre de choix et je compte ses feuilles" },
  { id: "e4", label: "Je construis et j'exploite un tableau à double entrée pour dénombrer toutes les issues" },
  { id: "e5", label: "Je calcule un arrangement A(n, p) en raisonnant étape par étape" },
  { id: "e6", label: "Je calcule une permutation n! et je connais les valeurs de 1! à 6!" },
  { id: "e7", label: "Je distingue cardinal (combien ?) et ordinal (dans quel ordre ?), et je sais que le dénombrement prépare les probabilités" },
  { id: "e8", label: "Face à une question didactique, j'identifie l'obstacle, je nomme le niveau scolaire et je propose une activité concrète" },
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
                  title: "Les deux principes",
                  text: "Additif (l'un OU l'autre) et multiplicatif (l'un ET l'autre) : le cœur du dénombrement.",
                },
                {
                  number: "②",
                  title: "Visualiser",
                  text: "L'arbre de choix et le tableau à double entrée pour voir toutes les issues.",
                },
                {
                  number: "③",
                  title: "Choisir et ordonner",
                  text: "Les arrangements : choisir p éléments parmi n, sans remise, quand l'ordre compte.",
                },
                {
                  number: "④",
                  title: "Tout ordonner",
                  text: "Les permutations et la factorielle n!, et le lien vers les probabilités (N°12).",
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
              title: "Deux questions, deux outils",
              text: "Situation 1 : un sachet cadeau contient un stylo (rouge, bleu ou vert) ET un carnet (grand ou petit). Combien de sachets différents ? Chaque stylo se combine avec chacun des 2 carnets : 3 × 2 = 6.\n\nSituation 2 : cinq élèves, un prix à la 1re, 2e et 3e place. Combien de podiums ? 5 candidats pour la 1re place, 4 restants pour la 2e, 3 pour la 3e : 5 × 4 × 3 = 60.\n\nMême réflexe : compter intelligemment sans tout lister. C'est le dénombrement, au programme du cycle 4, et il prépare directement les probabilités (N°12) : pour calculer une probabilité, il faut souvent commencer par compter. Lisez la fiche dans l'ordre, chaque notion en appelle une autre.",
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
                  text: "Le vocabulaire des expériences : une **issue** est un résultat élémentaire (« obtenir la face 3 »), l'**univers Ω** est l'ensemble de toutes les issues (Ω = {1, 2, 3, 4, 5, 6} pour un dé, Card(Ω) = 6), et il y a **équiprobabilité** quand toutes les issues ont la même chance. Les outils de la fiche servent à compter Card(Ω) et Card(A) ; le calcul des probabilités vient en N°12.",
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
                  text: "Les outils de cette fiche servent à compter : combien d'issues au total, combien vérifient une condition. Les probabilités elles-mêmes (P(A), arbres pondérés, événements contraires) font l'objet de la fiche N°12. Ici on compte, là-bas on probabilise.",
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
                  number: "💡",
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
                  question: "Avec 3 entrées, 4 plats et 2 desserts, combien de menus (une entrée + un plat + un dessert) ?",
                  options: ["3 + 4 + 2 = 9", "3 × 4 × 2 = 24", "3 + 4 × 2 = 11", "9!"],
                  correctIndex: 1,
                  explanation: "On choisit une entrée ET un plat ET un dessert : choix cumulatifs, donc principe multiplicatif. 3 × 4 × 2 = 24 menus.",
                },
                {
                  objectifId: "e1",
                  question: "Dans une classe, 16 élèves font du latin, 14 du théâtre, 5 font les deux. Combien font au moins une de ces activités ?",
                  options: ["30", "25", "35", "16"],
                  correctIndex: 1,
                  explanation: "Les ensembles se chevauchent : Card(A ∪ B) = 16 + 14 − 5 = 25. On retire les 5 comptés deux fois.",
                },
                {
                  objectifId: "e2",
                  question: "Un code à 4 chiffres (0 à 9). Combien de codes avec répétitions autorisées ?",
                  options: ["10 × 9 × 8 × 7", "10⁴ = 10 000", "4 × 10 = 40", "4! = 24"],
                  correctIndex: 1,
                  explanation: "Avec remise, chaque position a 10 options indépendantes : 10 × 10 × 10 × 10 = 10 000.",
                },
                {
                  objectifId: "e3",
                  question: "On tire successivement et sans remise 2 boules parmi 3 (R, B, V). Combien de feuilles a l'arbre des issues ?",
                  options: ["9", "6", "3", "5"],
                  correctIndex: 1,
                  explanation: "1er tirage : 3 options ; 2e : 2 restantes. 3 × 2 = 6 feuilles. (Avec remise, ce serait 3 × 3 = 9.)",
                },
                {
                  objectifId: "e5",
                  question: "On distribue 3 rôles distincts parmi 5 élèves. Combien de distributions ?",
                  options: ["5! = 120", "5 × 5 × 5 = 125", "A(5, 3) = 5 × 4 × 3 = 60", "5 + 4 + 3 = 12"],
                  correctIndex: 2,
                  explanation: "Ordre compte (rôles distincts), sans remise, p = 3 parmi 5 : A(5, 3) = 5 × 4 × 3 = 60.",
                },
                {
                  objectifId: "e6",
                  question: "Combien de façons d'ordonner 4 livres distincts sur une étagère ?",
                  options: ["4 × 4 = 16", "4! = 24", "A(4, 2) = 12", "4 + 3 + 2 + 1 = 10"],
                  correctIndex: 1,
                  explanation: "On ordonne tous les éléments : permutation. 4! = 4 × 3 × 2 × 1 = 24.",
                },
                {
                  objectifId: "e7",
                  question: "Pour un podium (1re, 2e, 3e place), l'ordre des places est de nature…",
                  options: ["cardinale (on compte)", "ordinale (la place a un sens)", "indifférente", "additive"],
                  correctIndex: 1,
                  explanation: "Les places d'un podium sont ordinales : la 1re et la 2e place sont distinctes. C'est pourquoi on utilise un arrangement.",
                },
                {
                  objectifId: "e2",
                  question: "Combien d'équipes de 2 élèves (sans rôle distinct) peut-on former parmi 5 ?",
                  options: ["A(5, 2) = 20", "20 ÷ 2 = 10", "5! = 120", "5 + 4 = 9"],
                  correctIndex: 1,
                  explanation: "A(5, 2) = 20 compte les paires ordonnées, mais (Alice, Bob) = (Bob, Alice) : on divise par 2! → 10 équipes.",
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
              text: "Posez-vous d'abord les 3 questions (ET ou OU ? l'ordre compte ? remise ?) avant de calculer. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Principes de base en contexte",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : la tenue du matin",
              objectifTag: "Principe multiplicatif",
              enonce: "Lucie a 3 hauts, 2 pantalons et 2 paires de chaussures.",
              question:
                "a) Combien de tenues complètes (haut + pantalon + chaussures) ?\nb) Si elle fixe les baskets, combien de tenues restent possibles ?\nc) Elle choisit un haut au hasard parmi les 3 : lequel a-t-elle le plus de chances de choisir ?",
              correction: [
                { type: "line", label: "a)", text: "Haut ET pantalon ET chaussures, indépendants : 3 × 2 × 2 = 12 tenues." },
                { type: "line", label: "b)", text: "Les chaussures sont fixées : 3 × 2 = 6 tenues." },
                { type: "line", label: "c)", text: "Aucun : les 3 hauts ont la même chance, 1/3 chacun." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : le code du casier",
              objectifTag: "Avec / sans remise",
              enonce: "Un code à 3 chiffres, chacun compris entre 1 et 6.",
              question:
                "a) Combien de codes si les chiffres peuvent se répéter ?\nb) Combien si tous les chiffres doivent être différents ?\nc) Parmi les codes sans répétition, combien commencent par 4 ?",
              correction: [
                { type: "line", label: "a)", text: "Avec répétition : 6 × 6 × 6 = 216 codes." },
                { type: "line", label: "b)", text: "Sans répétition, ordre compte : A(6, 3) = 6 × 5 × 4 = 120 codes." },
                { type: "line", label: "c)", text: "1er chiffre fixé à 4, puis 5 et 4 restants : 1 × 5 × 4 = 20 codes." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : arrangements et permutations",
              sub: "Choisir le bon outil",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : le podium sportif",
              objectifTag: "Arrangement",
              enonce: "8 élèves participent à une course. On remet une médaille d'or, d'argent et de bronze.",
              question:
                "a) Combien de podiums différents ?\nb) Combien placent Lucas en 1re position ?\nc) Si le podium est tiré au sort, Lucas et Emma ont-ils la même chance d'être 1er ? Justifier sans calculer.",
              correction: [
                { type: "line", label: "a)", text: "Ordre compte, sans remise, 3 places parmi 8 : A(8, 3) = 8 × 7 × 6 = 336 podiums." },
                { type: "line", label: "b)", text: "Lucas fixé en 1re place, puis 7 et 6 restants : 1 × 7 × 6 = 42 podiums." },
                { type: "line", label: "c)", text: "Oui, par symétrie : chaque élève a la même chance d'être 1er (1/8). Les 336 podiums se répartissent en 336 ÷ 8 = 42 pour chacun en tête." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : la bibliothèque de classe",
              objectifTag: "Permutation",
              enonce: "Une enseignante range 4 romans, 3 albums et 2 documentaires (9 livres) en une seule rangée.",
              question:
                "a) Combien de façons de ranger tous les livres sans contrainte ?\nb) Combien si les 4 romans doivent être côte à côte ?\nc) Un élève dit : « Il y a 4 + 3 + 2 = 9 façons de choisir le premier livre. » A-t-il raison ?",
              correction: [
                { type: "line", label: "a)", text: "9 livres à ordonner tous : P(9) = 9! = 362 880 dispositions." },
                { type: "line", label: "b)", text: "Le bloc de 4 romans compte comme 1 objet : 6 objets → P(6) = 720, et les romans s'ordonnent en 4! = 24. Total : 720 × 24 = 17 280." },
                { type: "line", label: "c)", text: "Pour le seul 1er livre, oui (9 choix exclusifs). Mais pour ranger tous les livres, les choix s'accumulent (ET) : le total est 9!, pas 9." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : situations à démêler",
              sub: "Combiner les principes",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : le jeu de cartes pédagogique",
              objectifTag: "Principe multiplicatif",
              enonce: "Chaque carte d'un jeu a une forme (3 possibles), une couleur (3) et une valeur (3). Toutes les combinaisons existent.",
              question:
                "a) Combien de cartes différentes ? Justifier.\nb) Combien de cartes sont rouges ET ont un cercle ?\nc) On tire 2 cartes successivement sans remise. Combien d'issues ?",
              correction: [
                { type: "line", label: "a)", text: "Forme ET couleur ET valeur, indépendants : 3 × 3 × 3 = 27 cartes." },
                { type: "line", label: "b)", text: "Cercle (1) × rouge (1) × 3 valeurs = 3 cartes." },
                { type: "line", label: "c)", text: "1er tirage : 27 ; 2e sans remise : 26. Total : 27 × 26 = 702 issues." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 4 : groupes ou classements ?",
              objectifTag: "Groupe vs classement",
              enonce: "Un club compte 6 membres.",
              question:
                "a) On désigne un président et un trésorier (rôles distincts). Combien de façons ?\nb) On désigne une commission de 2 membres (sans rôle distinct). Combien de commissions ?\nc) Expliquer pourquoi le résultat de b) est la moitié de celui de a).",
              correction: [
                { type: "line", label: "a)", text: "Ordre compte, sans remise : A(6, 2) = 6 × 5 = 30 façons." },
                { type: "line", label: "b)", text: "Sans rôle : 30 ÷ 2 = 15 commissions." },
                { type: "line", label: "c)", text: "Chaque commission {X, Y} correspond à 2 désignations ordonnées (X-Y et Y-X). On divise donc par 2! = 2." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : raisonnement niveau CRPE",
              sub: "Situation riche, recul didactique",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 5 : analyse d'une erreur d'élève",
              objectifTag: "Recul didactique",
              enonce: "Avec un jeu où chaque carte a une forme (3) et une couleur (3), un élève de CM2 dit : « Il y a 3 + 3 = 6 cartes différentes. »",
              question:
                "a) Identifier précisément l'erreur de raisonnement.\nb) À quel niveau ce type d'activité peut-il être proposé, et quel concept prépare-t-il ?\nc) Décrire une activité concrète pour aider l'élève à comprendre.",
              correction: [
                { type: "line", label: "a)", text: "L'élève applique le principe additif (3 + 3) alors que les caractéristiques sont cumulatives : une carte a une forme ET une couleur. Il confond « ou » et produit (« et »)." },
                { type: "line", label: "b)", text: "Dès le cycle 3 (CM1-CM2), pour amorcer le dénombrement systématique. Cela prépare le principe multiplicatif, formalisé en cycle 4, et la rigueur de l'énumération exhaustive." },
                { type: "line", label: "c)", text: "Un tableau à double entrée (formes en colonnes, couleurs en lignes). L'élève remplit chaque case et compte visuellement 3 × 3 = 9 combinaisons. La manipulation précède la formule." },
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
              title: "Type CRPE · Exercice 6 : la kermesse de l'école",
              objectifTag: "Principes, arrangement, recul didactique",
              enonce:
                "Pour la kermesse, chaque participant tire une carte dans un sac (5 cartes : étoile, cœur, losange, lune, soleil), puis lance un dé à 4 faces numérotées de 1 à 4.",
              question:
                "1.1 Combien d'issues différentes ce jeu produit-il ? Justifier par le principe multiplicatif.\n1.2 Une issue est gagnante si la carte est l'étoile ou le cœur ET que le dé montre un nombre pair. Combien d'issues gagnantes ?\n2.1 Pour le défilé, 6 élèves veulent défiler les uns derrière les autres. Combien d'ordres possibles ?\n2.2 On désigne un meneur (en tête) et un porte-drapeau (en queue). Combien de façons parmi les 6 ?\n3.1 Quel outil de dénombrement recommander pour une activité similaire en CE2 ? Justifier en lien avec les programmes.\n3.2 Quel obstacle rencontrent les élèves de cycle 3 quand ils listent les issues d'un jeu à deux étapes ? Comment l'anticiper ?",
              correction: [
                { type: "line", label: "1.1", text: "Tirer une carte ET lancer le dé : deux choix successifs indépendants. Par le principe multiplicatif, 5 × 4 = 20 issues." },
                { type: "line", label: "1.2", text: "Cartes gagnantes : étoile ou cœur → 2. Faces paires : 2 ou 4 → 2. Conditions cumulatives (ET) : 2 × 2 = 4 issues gagnantes." },
                { type: "line", label: "2.1", text: "Ordonner tous les 6 élèves : permutation P(6) = 6! = 720 ordres." },
                { type: "line", label: "2.2", text: "2 rôles distincts (ordre compte), sans remise, parmi 6 : A(6, 2) = 6 × 5 = 30 façons." },
                { type: "line", label: "3.1", text: "Le tableau à double entrée : visuellement simple (les élèves cochent chaque case), il rend le principe multiplicatif lisible (lignes × colonnes) et prolonge les tableaux du cycle 2. Le BOEN 2020 le mentionne comme support du dénombrement au cycle 3." },
                { type: "line", label: "3.2", text: "Le manque de méthode systématique : ils listent dans le désordre et oublient ou comptent deux fois. Anticiper en imposant un remplissage colonne par colonne, verbalisé : « pour chaque carte, je note toutes les faces du dé »." },
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
              title: "Erreur type · Exercice 7 : additionner au lieu de multiplier",
              objectifTag: "Principes additif / multiplicatif",
              enonce: "**Copie d'un candidat :** compter les menus possibles avec 3 entrées, 4 plats, 2 desserts.\n*Réponse produite :* « 3 + 4 + 2 = 9 menus ».",
              question: "a) Identifier l'erreur.\nb) Donner le calcul correct et la règle.",
              correction: [
                { type: "paragraph", text: "**Erreur : principe additif appliqué à des choix cumulatifs.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Le candidat additionne, alors qu'on choisit une entrée ET un plat ET un dessert." },
                    { text: "Le principe additif ne vaut que pour des choix exclusifs (l'un ou l'autre)." },
                    { text: "Correct : 3 × 4 × 2 = 24 menus." },
                  ],
                },
                { type: "note", text: "Réflexe : « je prends X ET Y » → multiplication ; « X OU Y (pas les deux) » → addition." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 8 : oublier le « sans remise »",
              objectifTag: "Avec / sans remise",
              enonce: "**Copie d'un candidat :** compter les podiums or/argent/bronze parmi 5 élèves.\n*Réponse produite :* « 5 × 5 × 5 = 125 podiums ».",
              question: "a) Identifier l'erreur.\nb) Donner le calcul correct.",
              correction: [
                { type: "paragraph", text: "**Erreur : comptage avec remise au lieu de sans remise.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Le candidat compte comme si un élève pouvait recevoir deux médailles." },
                    { text: "Un élève déjà médaillé n'est plus disponible : le nombre d'options diminue (5, 4, 3)." },
                    { text: "Correct : A(5, 3) = 5 × 4 × 3 = 60 podiums." },
                  ],
                },
                { type: "note", text: "Question clé : le même élément peut-il apparaître deux fois ? Si non, sans remise." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 9 : n! au lieu de A(n, p)",
              objectifTag: "Arrangement vs permutation",
              enonce: "**Copie d'un candidat :** distribuer 3 rôles distincts parmi 5 élèves.\n*Réponse produite :* « 5! = 120 façons ».",
              question: "a) Identifier l'erreur.\nb) Donner le calcul correct et la distinction.",
              correction: [
                { type: "paragraph", text: "**Erreur : permutation au lieu d'arrangement.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "5! ordonne tous les 5 élèves, alors qu'on ne distribue que 3 rôles (2 élèves sans rôle)." },
                    { text: "On prend p = 3 parmi n = 5, pas tous." },
                    { text: "Correct : A(5, 3) = 5 × 4 × 3 = 60 façons." },
                  ],
                },
                { type: "note", text: "Permutation (n!) = on ordonne TOUS les éléments. Arrangement = on en prend p parmi n, certains restent de côté." },
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
                  question: "Principe multiplicatif : dans quel cas et comment ?",
                  answer:
                    "Quand les choix sont successifs, indépendants et cumulatifs (ET). On multiplie le nombre d'options à chaque étape : n₁ × n₂ × … × nₖ. Exemple : 3 hauts et 4 pantalons → 3 × 4 = 12 tenues.",
                  astuce: "ET → multiplication ; OU exclusif → addition. Ce réflexe évite l'erreur la plus fréquente.",
                },
                {
                  question: "Principe additif : dans quel cas et comment ?",
                  answer:
                    "Quand les situations sont exclusives et disjointes (OU). Card(A ∪ B) = Card(A) + Card(B) si A ∩ B = ∅, sinon Card(A) + Card(B) − Card(A ∩ B). Exemple : un roman (8) OU une BD (5) → 13 choix.",
                  astuce: "Si les ensembles se chevauchent, soustraire l'intersection pour ne pas compter deux fois.",
                },
                {
                  question: "Arrangement A(n, p) : définition et calcul.",
                  answer:
                    "Liste ordonnée de p éléments distincts tirés parmi n, sans remise. On part de n et on écrit p facteurs en décrémentant : A(n, p) = n × (n−1) × … × (n−p+1). Exemple : A(5, 3) = 5 × 4 × 3 = 60.",
                  astuce: "Les deux conditions : l'ordre compte ET sans remise.",
                },
                {
                  question: "Permutation n! : c'est quoi exactement ?",
                  answer:
                    "On ordonne tous les n éléments : c'est un arrangement où p = n. n! = n × (n−1) × … × 2 × 1. Valeurs clés : 3! = 6, 4! = 24, 5! = 120, 6! = 720. Exemple : ranger 4 livres → 4! = 24.",
                },
                {
                  question: "Avec remise ou sans remise : comment les distinguer ?",
                  answer:
                    "Avec remise : l'élément reste disponible, le nombre d'options reste constant (nᵖ). Sans remise : l'élément choisi disparaît, le nombre d'options diminue (arrangement). Code à 4 chiffres : avec répétition 10⁴ = 10 000, sans répétition 10 × 9 × 8 × 7 = 5 040.",
                },
                {
                  question: "Arbre de choix : quand et comment l'utiliser ?",
                  answer:
                    "Quand les choix sont successifs, surtout si le nombre d'options varie selon le chemin (sans remise). Chaque chemin racine → feuille est une issue ; compter les feuilles = compter les issues. Valorisé au concours car il rend la structure visible.",
                },
                {
                  question: "Tableau à double entrée : quand et comment ?",
                  answer:
                    "Pour exactement deux séries de choix indépendants. Lignes = options du 1er choix, colonnes = options du 2e, chaque case = une issue. Nombre d'issues = lignes × colonnes : le principe multiplicatif se lit dans la grille. Accessible dès le cycle 3.",
                },
                {
                  question: "Cardinal et ordinal : quelle différence ?",
                  answer:
                    "Cardinal : « combien ? », Card(E) = nombre d'éléments. Ordinal : « à quelle place ? », une position dans un classement. En dénombrement, si l'ordre compte (positions ordinales) → arrangement ; sinon → on corrige par les permutations.",
                },
                {
                  question: "Comment calculer A(5, 3) sans formule ?",
                  answer:
                    "Étape par étape avec le principe multiplicatif : 1re place 5 candidats, 2e place 4 restants, 3e place 3 restants → 5 × 4 × 3 = 60. La formule A(n, p) n'est qu'un raccourci de ce raisonnement.",
                  astuce: "Au CRPE, raisonner étape par étape est toujours plus sûr que d'appliquer une formule de mémoire.",
                },
                {
                  question: "Le dénombrement à l'école : quelle progression ?",
                  answer:
                    "Cycle 2 : configurations simples, listes exhaustives, intuition par manipulation. Cycle 3 : arbres et tableaux (dans les probabilités), idée de « toutes les issues ». Cycle 4 : principe multiplicatif formalisé, arrangements. Démarche : situation concrète → représentation → généralisation → formule.",
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
                  lines: ["Compter Card(Ω) et Card(A)", "Le calcul de P(A) en N°12"],
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
