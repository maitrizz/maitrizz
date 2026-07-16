import type { Fiche } from "@/components/fiche/types";
import { COPIES_NOMBRES_RELATIFS } from "./copies-nombres-relatifs";
import { EXERCICES_NOMBRES_RELATIFS } from "./exercices-nombres-relatifs";

export const SAVOIR_FAIRE = [
  { id: "ensembles-nombres", label: "Situer ℕ, ℤ, ℚ, ℝ" },
  { id: "comparer-relatifs", label: "Placer et comparer des relatifs" },
  { id: "oppose-valeur-absolue", label: "Calculer opposé et valeur absolue" },
  { id: "addition-soustraction", label: "Additionner et soustraire" },
  { id: "multiplication-division", label: "Multiplier et diviser" },
  { id: "priorites-signes", label: "Respecter les priorités et les signes" },
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
                  text: "**ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ** : le symbole ⊂ se lit « est inclus dans ». Tout entier naturel est aussi un relatif, un rationnel et un réel. Mais −3 n'est pas dans ℕ, et √2 n'est dans aucun des trois premiers ensembles. Les rationnels et décimaux sont détaillés dans la [fiche N°3](fiche:fractions-decimaux), les réels et irrationnels dans la [fiche N°4](fiche:puissances-racines-reels).",
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
                  text: "**①** parenthèses (de l'intérieur vers l'extérieur), puis **②** × et ÷ (de gauche à droite), puis **③** + et − (de gauche à droite).\nExemple : 3 + 2 × (−4) − (−1) = 3 + (−8) − (−1) = 3 + (−8) + 1 = −4.\nLes priorités opératoires sont approfondies dans la [fiche N°5](fiche:calcul-numerique-priorites).",
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
              buttonLabel: "Voir la méthode",
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
                  number: "4",
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
              title: "Nombres relatifs",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_NOMBRES_RELATIFS,
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
              title: "Nombres relatifs",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_NOMBRES_RELATIFS,
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
      ],
    },
  ],
};
