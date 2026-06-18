import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "e1", label: "Je connais le schéma d'inclusion ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ et je sais situer chaque ensemble" },
  { id: "e2", label: "Je sais placer des entiers relatifs sur une droite graduée et les comparer" },
  { id: "e3", label: "Je calcule l'opposé et la valeur absolue d'un nombre sans me tromper" },
  { id: "e4", label: "Je maîtrise les règles des signes pour l'addition, la soustraction, la multiplication et la division" },
  { id: "e5", label: "Je respecte les priorités opératoires (parenthèses, puis × et ÷, puis + et −)" },
  { id: "e6", label: "Je peux analyser une erreur d'élève sur les relatifs et proposer une remédiation" },
  { id: "e7", label: "Je connais des situations concrètes pour introduire les relatifs en classe" },
];

export const ficheNombresRelatifs: Fiche = {
  slug: "nombres-relatifs",
  matiere: "mathematiques",
  numero: 2,
  partie: "Partie 1 : Nombres et calcul",
  title: "Nombres relatifs",
  subtitle:
    "Entiers positifs et négatifs · droite graduée · opposé et valeur absolue · règles des signes · priorités opératoires",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème A", variant: "info" },
  ],
  metaTitle: "Nombres relatifs ℤ (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur les nombres relatifs : ensembles de nombres, droite graduée, opposé, valeur absolue, ordre, règles des signes, priorités opératoires et puissances. Cours, méthode pas-à-pas, exercices corrigés, flashcards et auto-évaluation.",
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
                  title: "La famille des nombres",
                  text: "Où se situent les entiers relatifs : ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ.",
                },
                {
                  number: "②",
                  title: "Droite graduée, opposé, valeur absolue",
                  text: "Visualiser les relatifs, les comparer, et deux notions à ne pas confondre.",
                },
                {
                  number: "③",
                  title: "Les règles des signes",
                  text: "Additionner, soustraire, multiplier et diviser des relatifs sans hésiter.",
                },
                {
                  number: "④",
                  title: "Priorités et puissances",
                  text: "L'ordre des opérations, et l'effet d'un exposant sur un nombre négatif.",
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
              title: "Avant de commencer",
              text: "Dans la fiche précédente, vous avez travaillé avec ℕ, les entiers naturels (0, 1, 2, 3…) : des nombres pour compter. Mais compter ne suffit pas. Pour soustraire dans tous les cas, exprimer une dette, une température négative ou une altitude sous le niveau de la mer, il faut des nombres négatifs. C'est l'objet de cette fiche.",
            },
            {
              type: "subsection",
              number: "①",
              title: "La famille des nombres : où se situent les entiers relatifs",
              blocks: [
                {
                  type: "paragraph",
                  text: "Les ensembles de nombres s'emboîtent comme des poupées russes : chaque ensemble contient le précédent et y ajoute de nouveaux nombres. Ce schéma couvre les quatre premières fiches de la partie Nombres : gardez-le en tête, il revient souvent.",
                },
                {
                  type: "table",
                  headers: ["Ensemble", "Notation", "Ce qu'il contient", "Exemples"],
                  rows: [
                    ["Entiers naturels", "ℕ", "0 et tous les entiers positifs", "0, 1, 2, 3, 100…"],
                    ["Entiers relatifs", "ℤ", "ℕ et tous les entiers négatifs", "…−3, −2, −1, 0, 1, 2, 3…"],
                    ["Rationnels", "ℚ", "ℤ, les fractions et les décimaux", "1/2 · −3/4 · 0,25"],
                    ["Réels", "ℝ", "ℚ et les irrationnels", "√2 · π · −√5"],
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "**ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ** : le symbole ⊂ se lit « est inclus dans ». Tout entier naturel est aussi un relatif, un rationnel et un réel. Mais −3 n'est pas dans ℕ, et √2 n'est dans aucun des trois premiers ensembles.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Les entiers relatifs : droite graduée, opposé, valeur absolue",
              blocks: [
                {
                  type: "paragraph",
                  text: "Un entier relatif est un entier muni d'un signe : positif (+) ou négatif (−). On note ℤ l'ensemble de tous les entiers relatifs. L'outil pour les visualiser est la **droite graduée**, orientée de gauche (les plus petits) vers la droite (les plus grands).",
                },
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "L'opposé",
                      variant: "info",
                      lines: [
                        "L'opposé de **a** est le nombre **−a** : à la même distance de 0, de l'autre côté.",
                        "opposé de +3 = −3 · opposé de −5 = +5 · opposé de 0 = 0",
                        "**a + (−a) = 0** toujours.",
                      ],
                    },
                    {
                      title: "La valeur absolue",
                      variant: "info",
                      lines: [
                        "La valeur absolue de **a**, notée **|a|**, est la distance entre a et 0.",
                        "|+3| = 3 · |−5| = 5 · |0| = 0",
                        "**|a| ≥ 0** toujours, et |a| = |−a|.",
                      ],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Comparer des relatifs : la règle de la droite graduée",
                  text: "Les nombres sont rangés dans l'ordre croissant de gauche à droite. Un négatif est toujours inférieur à 0 et à tout positif. Et plus un négatif a une grande valeur absolue, plus il est petit :\n**−100 < −5 < −1 < 0 < 1 < 5 < 100**.\n−100 est plus petit que −1, même si 100 > 1. Le signe prime toujours sur la magnitude.",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Opérations : les règles des signes à automatiser",
              blocks: [
                {
                  type: "paragraph",
                  text: "Les opérations sur les relatifs prolongent ce qu'on sait sur les naturels, avec des règles de signes qu'il faut automatiser. Un candidat qui hésite sur les signes perd un temps précieux au concours.",
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "Addition et soustraction",
                  blocks: [
                    {
                      type: "cardGrid",
                      columns: 2,
                      variant: "info",
                      cards: [
                        {
                          title: "Même signe",
                          lines: ["On additionne et on garde le signe.", "(+3) + (+5) = +8", "(−3) + (−5) = −8"],
                        },
                        {
                          title: "Signes différents",
                          lines: ["On soustrait et on garde le signe du plus grand en valeur absolue.", "(+8) + (−3) = +5", "(+3) + (−8) = −5"],
                        },
                      ],
                    },
                    {
                      type: "formulaBlock",
                      lines: [
                        "**Soustraire = ajouter l'opposé** : a − b = a + (−b)",
                        "(+5) − (+8) = (+5) + (−8) = −3",
                        "(+5) − (−3) = (+5) + (+3) = +8",
                      ],
                      note: "Deux signes − qui se suivent se transforment en +.",
                    },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Multiplication et division : la règle des signes",
                  blocks: [
                    {
                      type: "cardGrid",
                      columns: 2,
                      cards: [
                        {
                          title: "Même signe → positif",
                          variant: "success",
                          lines: ["(+3) × (+4) = +12", "(−3) × (−4) = +12", "(−12) ÷ (−3) = +4"],
                        },
                        {
                          title: "Signes différents → négatif",
                          variant: "warning",
                          lines: ["(+3) × (−4) = −12", "(−3) × (+4) = −12", "(−12) ÷ (+3) = −4"],
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      text: "Mnémotechnique : « les ennemis de mes ennemis sont mes amis », deux négatifs donnent un positif.",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Priorités opératoires : l'ordre à respecter",
                  text: "**①** parenthèses (de l'intérieur vers l'extérieur), puis **②** × et ÷ (de gauche à droite), puis **③** + et − (de gauche à droite).\nExemple : 3 + 2 × (−4) − (−1) = 3 + (−8) − (−1) = 3 + (−8) + 1 = −4.",
                },
                {
                  type: "highlightBox",
                  variant: "neutral",
                  title: "Puissances d'un entier relatif",
                  blocks: [
                    {
                      type: "paragraph",
                      text: "Comme pour 3² = 3 × 3 = 9, on multiplie le nombre par lui-même autant de fois que l'indique l'exposant. La règle des signes fait le reste.",
                    },
                    {
                      type: "cardGrid",
                      columns: 2,
                      cards: [
                        {
                          title: "Exposant pair → positif",
                          variant: "success",
                          lines: ["(−3)² = (−3)×(−3) = +9", "(−2)⁴ = +16", "Les − s'annulent deux par deux."],
                        },
                        {
                          title: "Exposant impair → négatif",
                          variant: "warning",
                          lines: ["(−3)³ = −27", "(−2)⁵ = −32", "Il reste un − sans paire."],
                        },
                      ],
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      title: "⚠️ Les parenthèses changent tout",
                      text: "**−3² = −(3²) = −9**, alors que **(−3)² = +9**. Sans parenthèses, le carré ne porte que sur le 3, le signe − reste devant. Toujours écrire (−3)² avec les parenthèses quand on élève un négatif.",
                    },
                  ],
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : confondre signe et opération",
              badge: "Très fréquent",
              faux: "Lire 5 − (−3) et calculer 5 − 3 = 2.",
              vrai: "Soustraire un négatif, c'est ajouter son opposé : 5 − (−3) = 5 + 3 = **8**.",
              methode: "Deux signes − qui se suivent deviennent un +.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : croire que −8 > −3",
              badge: "Erreur sur l'ordre",
              faux: "« 8 > 3 donc −8 > −3 ».",
              vrai: "Sur la droite graduée, −8 est à gauche de −3, donc **−8 < −3**.",
              methode: "Plus un négatif a une grande valeur absolue, plus il est petit. Visualiser la droite.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : oublier les priorités opératoires",
              badge: "Calcul erroné",
              faux: "3 + 2 × 4 = 5 × 4 = 20.",
              vrai: "3 + 2 × 4 = 3 + 8 = **11** : on multiplie d'abord.",
              methode: "× et ÷ sont prioritaires sur + et −, sauf indication des parenthèses.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : confondre opposé et valeur absolue",
              badge: "Notation",
              faux: "« −(−3) = −3 » · « |−5| = −5 ».",
              vrai: "−(−3) = **+3** (opposé de −3) · |−5| = **5** (distance à 0, toujours positive).",
              methode: "La valeur absolue est toujours ≥ 0 ; l'opposé peut être négatif, nul ou positif.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "Les négatifs n'apparaissent pas au programme de l'école primaire : ils entrent officiellement en cycle 4 (5e). Mais les comprendre est indispensable pour deux raisons.\n\n**Le sens des opérations :** la soustraction à l'école (8 − 3 = 5) est en réalité une addition avec un relatif. Comprendre cela aide à expliquer pourquoi on ne peut pas faire 3 − 8 dans ℕ, et prépare le terrain pour ℤ au collège.\n\n**La droite graduée :** les élèves de CE2 travaillent la droite numérique avec les positifs. C'est le même outil, qu'il suffit d'étendre vers la gauche pour entrer dans ℤ. Le jury apprécie qu'on fasse ce lien explicitement.",
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
              title: "Quatre situations types reviennent au concours",
              text: "Lisez-les dans l'ordre la première fois : chacune s'appuie sur la précédente. Chacune se termine par une vérification rapide.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Placer des entiers relatifs sur la droite graduée et les comparer",
              intro:
                "**Question typique :** « Ranger dans l'ordre croissant : −7, +2, −1, 0, +5, −3 ». Idée : sur la droite graduée, gauche = plus petit, et les négatifs sont tous à gauche de 0.",
              steps: [
                {
                  number: "1",
                  text: "**Séparer les négatifs, le zéro, les positifs.**",
                  example: { lines: ["Négatifs : −7, −3, −1", "Zéro : 0", "Positifs : +2, +5"] },
                },
                {
                  number: "2",
                  text: "**Ranger les négatifs par valeur absolue décroissante** (la plus grande valeur absolue est la plus à gauche).",
                  example: { lines: ["|−7| = 7 > |−3| = 3 > |−1| = 1", "Ordre : −7 < −3 < −1"] },
                },
                {
                  number: "3",
                  text: "**Assembler : négatifs, puis 0, puis positifs croissants.**",
                  example: { lines: ["−7 < −3 < −1 < 0 < +2 < +5"] },
                  warn: "⚠️ −7 est plus petit que −1, même si 7 > 1 en valeur absolue. Le signe prime toujours.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Ranger dans l'ordre croissant : −4, +1, −9, 0, +6.",
              correction: [
                { type: "line", text: "−9 < −4 < 0 < +1 < +6." },
                { type: "note", text: "Trouvé du premier coup ? Passez à la suite. Sinon, relisez l'étape 2 ci-dessus." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Additionner et soustraire des relatifs",
              intro:
                "**Question typique :** « Calculer (−5) + (+3) − (−2) + (−8) ». Idée : transformer toutes les soustractions en additions, puis regrouper.",
              steps: [
                {
                  number: "1",
                  text: "**Transformer chaque soustraction en addition de l'opposé.**",
                  example: { lines: ["(−5) + (+3) − (−2) + (−8)", "= (−5) + (+3) + (+2) + (−8)"] },
                },
                {
                  number: "2",
                  text: "**Regrouper les positifs ensemble, les négatifs ensemble.**",
                  example: { lines: ["Positifs : (+3) + (+2) = +5", "Négatifs : (−5) + (−8) = −13"] },
                },
                {
                  number: "3",
                  text: "**Calculer la différence, garder le signe de la plus grande valeur absolue.**",
                  example: { lines: ["|−13| > |+5| → signe −", "Résultat : −(13 − 5) = **−8**"] },
                },
                {
                  number: "💡",
                  text: "**Vérifier par estimation :** il y a plus de négatifs que de positifs, le résultat doit être négatif. ✓",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Calculer (−6) + (+2) − (−5).",
              correction: [
                { type: "line", text: "(−6) + (+2) + (+5) = +1 (soustraire −5, c'est ajouter +5)." },
                { type: "note", text: "Le réflexe : transformer la soustraction en addition de l'opposé avant de regrouper." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Appliquer les règles des signes (multiplication, division)",
              intro:
                "**Question typique :** « Calculer (−3) × (+4) × (−2) ». Idée : compter les facteurs négatifs. Nombre pair → positif ; nombre impair → négatif.",
              steps: [
                {
                  number: "1",
                  text: "**Compter les facteurs négatifs.**",
                  example: { lines: ["(−3) × (+4) × (−2)", "Deux facteurs négatifs (−3 et −2) → résultat positif"] },
                },
                {
                  number: "2",
                  text: "**Calculer le produit des valeurs absolues.**",
                  example: { lines: ["3 × 4 × 2 = 24"] },
                },
                {
                  number: "3",
                  text: "**Appliquer le signe trouvé à l'étape 1.**",
                  example: { lines: ["Résultat : **+24**"] },
                  warn: "⚠️ Si l'expression mélange + et ×, calculer les × en premier (priorités).",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Sans calculer le produit, donner le signe de (−2) × (+3) × (−5), puis le résultat.",
              correction: [
                { type: "line", text: "Deux facteurs négatifs → positif. Produit des valeurs absolues : 2 × 3 × 5 = 30, donc **+30**." },
                { type: "note", text: "On compte d'abord les facteurs négatifs, on calcule ensuite." },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Calculer une expression avec priorités opératoires",
              intro: "**Question typique :** « Calculer −2 × (3 + (−5)) − (−4) × 2 ».",
              steps: [
                {
                  number: "1",
                  text: "**Traiter les parenthèses en priorité.**",
                  example: { lines: ["3 + (−5) = −2", "Expression : −2 × (−2) − (−4) × 2"] },
                },
                {
                  number: "2",
                  text: "**Effectuer toutes les multiplications.**",
                  example: { lines: ["−2 × (−2) = +4", "(−4) × 2 = −8", "Expression : (+4) − (−8)"] },
                },
                {
                  number: "3",
                  text: "**Effectuer les additions et soustractions de gauche à droite.**",
                  example: { lines: ["(+4) − (−8) = (+4) + (+8) = **+12**"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Calculer 5 − 3 × (−2).",
              correction: [
                { type: "line", text: "On multiplie d'abord : 3 × (−2) = −6. Puis 5 − (−6) = 5 + 6 = **11**." },
                { type: "note", text: "× prioritaire sur −, puis soustraire un négatif revient à ajouter." },
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
                  question: "Quel nombre appartient à ℤ mais **pas** à ℕ ?",
                  options: ["0", "−5", "42", "3/4"],
                  correctIndex: 1,
                  explanation:
                    "ℕ ne contient que les entiers positifs ou nuls. −5 est un entier négatif : il est dans ℤ mais pas dans ℕ. (3/4 n'est ni dans ℕ ni dans ℤ.)",
                },
                {
                  objectifId: "e2",
                  question: "Quel est le rangement correct dans l'ordre croissant ?",
                  options: ["−1 < −100 < 0 < 5", "−100 < −1 < 0 < 5", "0 < −1 < −100 < 5", "5 < 0 < −1 < −100"],
                  correctIndex: 1,
                  explanation:
                    "Sur la droite graduée, plus un négatif a une grande valeur absolue, plus il est petit : −100 < −1 < 0 < 5.",
                },
                {
                  objectifId: "e3",
                  question: "Que vaut la valeur absolue de −7, notée |−7| ?",
                  options: ["−7", "7", "0", "14"],
                  correctIndex: 1,
                  explanation: "|−7| est la distance de −7 à 0 : elle vaut 7. La valeur absolue est toujours positive ou nulle.",
                },
                {
                  objectifId: "e3",
                  question: "Quel est l'opposé de −3 ?",
                  options: ["−3", "+3", "0", "1/3"],
                  correctIndex: 1,
                  explanation: "L'opposé de −3 est +3 : même distance à 0, signe changé. On a bien −3 + (+3) = 0.",
                },
                {
                  objectifId: "e4",
                  question: "Combien vaut (−4) − (−7) ?",
                  options: ["−11", "+3", "−3", "+11"],
                  correctIndex: 1,
                  explanation: "Soustraire un négatif, c'est ajouter son opposé : (−4) − (−7) = (−4) + (+7) = +3.",
                },
                {
                  objectifId: "e4",
                  question: "Quel est le signe de (−2) × (−3) × (−1) × (+4) ?",
                  options: ["Positif", "Négatif", "Nul", "On ne peut pas savoir"],
                  correctIndex: 1,
                  explanation: "Il y a trois facteurs négatifs (−2, −3, −1), soit un nombre impair : le résultat est négatif (il vaut −24).",
                },
                {
                  objectifId: "e4",
                  question: "Combien vaut (−3)² ?",
                  options: ["−9", "+9", "−6", "+6"],
                  correctIndex: 1,
                  explanation:
                    "(−3)² = (−3) × (−3) = +9. L'exposant est pair, donc le résultat est positif. Attention : −3² (sans parenthèses) vaudrait −9.",
                },
                {
                  objectifId: "e5",
                  question: "Combien vaut 3 + 2 × (−4) ?",
                  options: ["−20", "−5", "11", "−2"],
                  correctIndex: 1,
                  explanation: "On multiplie d'abord : 2 × (−4) = −8. Puis 3 + (−8) = −5. Les × sont prioritaires sur les +.",
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
              text: "Progressez niveau par niveau. Corrigez chaque exercice avant de passer au suivant.",
            },
            {
              type: "niveauBanner",
              level: "echauffement",
              label: "Échauffement : je vérifie que j'ai compris le Cours",
              sub: "Une chose à la fois",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 1 : vocabulaire de base",
              objectifTag: "Opposé et valeur absolue",
              question:
                "a) Donner l'opposé de : +5 · −3 · 0 · −17\nb) Donner la valeur absolue de : +7 · −4 · −12 · 0\nc) Parmi +3 · −5 · 0 · −1 · 42 · −100, lesquels appartiennent à ℕ, lesquels à ℤ seulement ?",
              correction: [
                { type: "line", label: "a)", text: "opposé de +5 = −5 · de −3 = +3 · de 0 = 0 · de −17 = +17" },
                { type: "line", label: "b)", text: "|+7| = 7 · |−4| = 4 · |−12| = 12 · |0| = 0" },
                { type: "line", label: "c)", text: "ℕ : +3, 0, 42 · ℤ seulement : −5, −1, −100. 0 appartient à ℕ et à ℤ ; les négatifs sont dans ℤ mais pas dans ℕ." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Question 2 : ordre sur la droite graduée",
              objectifTag: "Comparer des relatifs",
              question: "Ranger dans l'ordre croissant : +4, −6, +1, −2, 0, −10, +3.",
              correction: [
                { type: "line", text: "−10 < −6 < −2 < 0 < +1 < +3 < +4" },
                { type: "note", text: "−10 est plus petit que −6, même si 10 > 6 : vers la gauche de la droite, on diminue." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n1",
              stars: "★☆☆",
              label: "Niveau 1 : calcul direct",
              sub: "Application des règles une par une",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 1 : addition et soustraction",
              objectifTag: "Règles des signes",
              question: "Calculer en montrant les étapes :\na) (−5) + (−3)   b) (+7) + (−10)   c) (−4) − (−6)   d) (+3) − (+8) − (−2)",
              correction: [
                { type: "line", label: "a)", text: "même signe → −(5+3) = **−8**" },
                { type: "line", label: "b)", text: "signes différents, |−10| > |+7| → −(10−7) = **−3**" },
                { type: "line", label: "c)", text: "(−4) − (−6) = (−4) + (+6) = **+2**" },
                { type: "line", label: "d)", text: "3 − 8 + 2 = **−3**" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n1",
              title: "Exercice 2 : multiplication et division",
              objectifTag: "Règles des signes",
              question: "Calculer :\na) (−4) × (+3)   b) (−5) × (−6)   c) (−18) ÷ (+3)   d) (−24) ÷ (−4)",
              correction: [
                { type: "line", label: "a)", text: "signes différents → **−12**" },
                { type: "line", label: "b)", text: "même signe → **+30**" },
                { type: "line", label: "c)", text: "signes différents → **−6**" },
                { type: "line", label: "d)", text: "même signe → **+6**" },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : expressions et mise en contexte",
              sub: "Plusieurs étapes, priorités opératoires",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 3 : expression avec priorités",
              objectifTag: "Priorités opératoires",
              question: "Calculer en respectant les priorités :\na) 3 − 2 × (−4) + (−1)   b) (−2)² − 3 × (−1 + 5)   c) −3 × (−2 − 4) ÷ (−3)",
              correction: [
                { type: "line", label: "a)", text: "3 + 8 − 1 = **10**" },
                { type: "line", label: "b)", text: "(−2)² − 3 × 4 = 4 − 12 = **−8**" },
                { type: "line", label: "c)", text: "−3 × (−6) ÷ (−3) = 18 ÷ (−3) = **−6**" },
                { type: "note", text: "En b), (−2)² = +4 (et non −4) : un carré est toujours positif ou nul." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 4 : mise en contexte (températures)",
              objectifTag: "Situations concrètes",
              enonce: "La température est de −8 °C à Moscou, +5 °C à Paris, +32 °C à Dubaï.",
              question:
                "a) Ranger ces villes de la plus froide à la plus chaude.\nb) Quel est l'écart de température entre Moscou et Paris ?\nc) À Moscou, la température baisse encore de 6 °C : quelle est la nouvelle température ?",
              correction: [
                { type: "line", label: "a)", text: "Moscou (−8 °C) < Paris (+5 °C) < Dubaï (+32 °C)" },
                { type: "line", label: "b)", text: "écart = +5 − (−8) = 5 + 8 = **13 °C**" },
                { type: "line", label: "c)", text: "−8 − 6 = **−14 °C**" },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : raisonnement",
              sub: "Justification, généralisation",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 5 : raisonnement sur les signes",
              objectifTag: "Règles des signes",
              question:
                "a) Montrer que le produit de deux relatifs est positif si et seulement s'ils ont le même signe.\nb) Un élève affirme : « (−1)ⁿ est toujours égal à −1 ». Donner un contre-exemple et la règle générale.\nc) Sans calculer, déterminer le signe de (−2)¹⁰⁰ × (−3)⁵¹ × (+4)³.",
              correction: [
                {
                  type: "line",
                  label: "a)",
                  text: "Mêmes signes : (+|a|)(+|b|) = +|a||b| > 0, ou (−|a|)(−|b|) = +|a||b| > 0. Signes différents : (+|a|)(−|b|) = −|a||b| < 0. Le produit est donc positif exactement quand les signes sont égaux.",
                },
                { type: "line", label: "b)", text: "Contre-exemple : (−1)² = +1 ≠ −1. Règle : (−1)ⁿ = +1 si n est pair, −1 si n est impair." },
                { type: "line", label: "c)", text: "(−2)¹⁰⁰ positif (100 pair), (−3)⁵¹ négatif (51 impair), (+4)³ positif. Produit : positif × négatif × positif = **négatif**." },
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
              text: "Ces exercices reproduisent le format des sujets du concours. Rédigez comme le jour J : justifications complètes, présentation soignée.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 6",
              objectifTag: "Analyser une erreur d'élève",
              enonce:
                "Une enseignante de 5e propose : « Je pense à un entier relatif. Si je le multiplie par −3 et que j'ajoute 7, j'obtiens −8. Quel est ce nombre ? »",
              question:
                "1. Résoudre en explicitant les étapes.\n2. Un élève répond « −5 » : identifier son erreur probable et corriger.\n3. En CM2, un enseignant propose une variante sans négatifs : « Je multiplie par 3 et j'ajoute 7, j'obtiens 22. » Quel est ce nombre, et en quoi cette activité travaille-t-elle les opérations inverses au cycle 3 ?",
              correction: [
                { type: "line", label: "1.", text: "Soit x le nombre. −3x + 7 = −8, donc −3x = −15, donc x = (−15) ÷ (−3) = **+5**. Vérification : −3 × 5 + 7 = −15 + 7 = −8 ✓" },
                { type: "line", label: "2.", text: "L'élève a probablement oublié le signe à la division : (−15) ÷ (−3) = +5, pas −5 (deux négatifs donnent un positif)." },
                { type: "line", label: "3.", text: "3x + 7 = 22 → 3x = 15 → x = 5. Cette « devinette de nombre » travaille le sens des opérations inverses dans ℕ (chercher la valeur inconnue dans une égalité, programme cycle 3) : on défait les opérations dans l'ordre inverse, sans formalisme algébrique." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Type CRPE · Exercice 7",
              objectifTag: "Analyser une erreur d'élève",
              enonce: "On présente à des élèves de 5e : A = (−3) + (−5) · B = (−3) − (+5) · C = (−3) × (−5) · D = (−3) × (+5).",
              question:
                "1. Calculer A, B, C et D.\n2. Deux élèves confondent A et B : expliquer la différence entre ces deux expressions.\n3. Proposer une représentation sur la droite graduée pour visualiser A.",
              correction: [
                { type: "line", label: "1.", text: "A = −8 · B = (−3) + (−5) = −8 · C = +15 · D = −15" },
                { type: "line", label: "2.", text: "A et B donnent le même résultat ici, mais diffèrent conceptuellement : A additionne deux négatifs ; B soustrait un positif, ce qui revient à ajouter son opposé (−(+5) = −5). La règle « soustraire = ajouter l'opposé » les relie." },
                { type: "line", label: "3.", text: "On part de −3 et on se déplace de 5 rangs vers la gauche (ajouter un négatif = aller à gauche) : on arrive en −8. La règle « même signe → additionner et garder le signe » devient visuellement évidente." },
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
              text: "Ces exercices reproduisent des erreurs réelles de candidats. Identifier une erreur et la corriger rigoureusement est une compétence directement valorisée au CRPE.",
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 8",
              objectifTag: "Analyser une erreur d'élève",
              enonce: "**Copie d'un candidat :** Calculer (−4) − (−7).\n*Réponse produite :* (−4) − (−7) = −4 − 7 = −11.",
              question: "a) Cette réponse est-elle correcte ?\nb) Identifier précisément l'erreur.\nc) Donner la correction complète.",
              correction: [
                { type: "paragraph", text: "**Erreur : un signe négatif ignoré.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Le candidat a traité − (−7) comme −7 : il a perdu un des deux signes." },
                    { text: "Règle : soustraire un négatif, c'est ajouter son opposé, donc −(−7) = +7." },
                    { text: "Correction : (−4) − (−7) = (−4) + (+7) = **+3**." },
                    { text: "Vérification sur la droite : partir de −4, avancer de 7 vers la droite, arriver en +3 ✓." },
                  ],
                },
                { type: "note", text: "L'erreur systématique : ignorer un signe quand on a − (−x). « Deux − font un + » doit être un automatisme." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 9",
              objectifTag: "Priorités opératoires",
              enonce: "**Copie d'un candidat :** Calculer 4 − 3 × (−2) + 1.\n*Réponse produite :* (4 − 3) × (−2) + 1 = 1 × (−2) + 1 = −2 + 1 = −1.",
              question: "a) Identifier l'erreur.\nb) Donner le calcul correct avec toutes les étapes.",
              correction: [
                { type: "paragraph", text: "**Erreur : priorités non respectées.**" },
                {
                  type: "checklist",
                  items: [
                    { bad: true, text: "Le candidat a calculé (4 − 3) avant la multiplication, en allant de gauche à droite sans tenir compte des priorités." },
                    { text: "On effectue d'abord 3 × (−2) = −6." },
                    { text: "4 − 3 × (−2) + 1 = 4 − (−6) + 1 = 4 + 6 + 1 = **11**." },
                  ],
                },
                { type: "note", text: "Règle impérative : × et ÷ avant + et −, sauf entre parenthèses." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Erreur type · Exercice 10 : analyse didactique",
              objectifTag: "Analyser une erreur d'élève",
              enonce: "Un élève de 5e écrit : « −3 > −1 parce que 3 est plus grand que 1. »",
              question: "a) Identifier l'obstacle mathématique.\nb) Proposer une activité de remédiation.\nc) Quel lien avec l'enseignement de la droite graduée au primaire ?",
              correction: [
                { type: "line", label: "a)", text: "L'élève transfère une règle valide dans ℕ (3 > 1) à ℤ, sans intégrer l'effet du signe. Dans ℤ, l'ordre dépend du signe ET de la valeur absolue." },
                { type: "line", label: "b)", text: "Travailler sur la droite graduée orientée : placer −3 et −1, demander « qui est à gauche ? ». La position rend visible que −3 < −1. Compléter par des contextes concrets (températures, altitudes)." },
                { type: "line", label: "c)", text: "Au primaire, la droite numérique n'accueille que les positifs, le 0 servant de point de départ. L'extension aux négatifs demande de comprendre que les nombres augmentent vers la droite, qu'ils soient négatifs ou positifs : un vrai changement conceptuel, pas une inattention." },
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
                  question: "Quelle est la différence entre ℕ et ℤ ? Donner un nombre dans ℤ mais pas dans ℕ.",
                  answer:
                    "ℕ est l'ensemble des entiers naturels (0, 1, 2, 3…, positifs ou nuls). ℤ contient ℕ et ajoute tous les entiers négatifs. On a ℕ ⊂ ℤ. Exemple dans ℤ mais pas ℕ : −5.",
                },
                {
                  question: "Quelle est la valeur absolue de −7 ? En quoi diffère-t-elle de l'opposé ?",
                  answer:
                    "|−7| = 7 : la valeur absolue est la distance à 0, toujours positive ou nulle. L'opposé de −7 est +7 (même valeur, signe changé). Ici les deux coïncident, mais |+3| = 3 alors que l'opposé de +3 est −3.",
                  astuce: "La valeur absolue est toujours ≥ 0 ; l'opposé peut être positif, négatif ou nul.",
                },
                {
                  question: "Quel est le signe de (−2) × (−3) × (−1) × (+4) ? Justifier sans calculer.",
                  answer:
                    "Trois facteurs négatifs (nombre impair), donc résultat négatif. (Vérification : 2 × 3 × 1 × 4 = 24, soit −24.)",
                },
                {
                  question: "Pourquoi dit-on que « soustraire revient à ajouter l'opposé » ?",
                  answer:
                    "Parce que a − b = a + (−b) par définition dans ℤ. La soustraction y est une addition déguisée, ce qui unifie toutes les opérations sous forme d'additions. Exemple : 5 − (−3) = 5 + (+3) = 8.",
                },
                {
                  question: "Comparer −100 et −1 : lequel est le plus grand ? Justifier.",
                  answer:
                    "−1 > −100 : sur la droite graduée, −1 est plus à droite. Plus un négatif a une grande valeur absolue, plus il est petit. L'erreur classique est de croire que −100 > −1 « parce que 100 > 1 » : le signe inverse l'ordre.",
                },
                {
                  question: "ℤ a-t-il un plus grand élément ? Un plus petit ?",
                  answer:
                    "Non : ℤ est infini dans les deux sens. Pour tout entier n, n + 1 est plus grand et n − 1 plus petit. Différence avec ℕ, qui a un plus petit élément (0) mais pas de plus grand.",
                },
                {
                  question: "Comment introduire les relatifs à partir d'une situation concrète ?",
                  answer:
                    "Plusieurs contextes : températures (−5 °C), altitudes (−200 m), dettes (−50 €), dates avant J.-C. Ils rendent la nécessité des négatifs intuitive avant de l'abstraire.",
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
              center: { title: "Nombres relatifs", subtitle: "ℤ" },
              branches: [
                {
                  title: "Inclusion des ensembles",
                  variant: "blue",
                  lines: ["ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ", "−5 ∈ ℤ mais −5 ∉ ℕ"],
                },
                {
                  title: "Droite graduée",
                  variant: "blue",
                  lines: ["Gauche = plus petit", "−10 < −1 < 0 < 1"],
                },
                {
                  title: "Opposé et valeur absolue",
                  variant: "green",
                  lines: ["opposé(−3) = +3", "|−5| = 5, toujours ≥ 0"],
                },
                {
                  title: "Règles des signes",
                  variant: "green",
                  lines: ["Même signe → +", "Signes différents → −"],
                },
                {
                  title: "Priorités opératoires",
                  variant: "yellow",
                  lines: ["① parenthèses → ② × ÷ → ③ + −", "Erreur la plus fréquente"],
                },
                {
                  title: "Soustraire = ajouter l'opposé",
                  variant: "purple",
                  dashed: true,
                  lines: ["a − b = a + (−b)", "5 − (−3) = 5 + 3 = 8"],
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
