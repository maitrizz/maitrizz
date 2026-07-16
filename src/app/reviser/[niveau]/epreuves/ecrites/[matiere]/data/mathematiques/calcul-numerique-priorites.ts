import type { Fiche } from "@/components/fiche/types";
import { COPIES_CALCUL_NUMERIQUE_PRIORITES } from "./copies-calcul-numerique-priorites";
import { EXERCICES_CALCUL_NUMERIQUE_PRIORITES } from "./exercices-calcul-numerique-priorites";

export const SAVOIR_FAIRE = [
  { id: "priorites", label: "Respecter les priorités opératoires" },
  { id: "regles-signes", label: "Appliquer les règles des signes" },
  { id: "division-euclidienne", label: "Poser et vérifier une division euclidienne" },
  { id: "distributivite-mental", label: "Calculer mentalement (distributivité)" },
  { id: "ordre-de-grandeur", label: "Estimer un ordre de grandeur" },
  { id: "decimaux-virgule", label: "Placer la virgule d'un produit de décimaux" },
];

export const ficheCalculNumeriquePriorites: Fiche = {
  slug: "calcul-numerique-priorites",
  matiere: "mathematiques",
  numero: 5,
  partie: "Partie 1 : Nombres et calcul",
  title: "Calcul numérique et priorités",
  subtitle:
    "Les quatre opérations · algorithmes posés · priorités opératoires · distributivité · calcul mental · estimation et ordre de grandeur",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 4 · BOEN 2020 · Thème A", variant: "info" },
  ],
  metaTitle: "Calcul numérique et priorités opératoires (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE sur le calcul numérique : priorités opératoires, quatre opérations, division euclidienne, distributivité, calcul mental, ordre de grandeur, et les algorithmes posés à l'école primaire. Cours, méthode, exercices corrigés, flashcards et auto-évaluation.",
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
              text: "C'est la fiche la plus opérationnelle du programme : pas de concept nouveau, mais une exigence de rigueur. Poser les calculs correctement, respecter les priorités, ne pas se tromper de signe, donner le bon format. Ces points sont dans chaque sujet, souvent en questions courtes qui rapportent des points faciles, à condition de ne pas les bâcler.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Les priorités opératoires : la règle absolue",
              blocks: [
                {
                  type: "paragraph",
                  text: "Dans une expression sans parenthèses, on ne calcule pas de gauche à droite : on respecte un ordre strict, valable pour les entiers, décimaux, fractions et relatifs.",
                },
                {
                  type: "table",
                  headers: ["Priorité", "Opérations", "Exemple"],
                  rows: [
                    ["1", "Parenthèses (de l'intérieur vers l'extérieur)", "3 × (2 + 5) = 3 × 7 = 21"],
                    ["2", "Puissances et racines", "2 + 3² = 2 + 9 = 11"],
                    ["3", "× et ÷ (de gauche à droite entre elles)", "2 + 3 × 4 = 2 + 12 = 14"],
                    ["4", "+ et − (de gauche à droite)", "10 − 3 + 2 = 9"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Le piège classique",
                  text: "**12 ÷ 3 × 4** ne fait pas 12 ÷ 12 = 1. Division et multiplication ont la même priorité, on va de gauche à droite : 12 ÷ 3 = 4, puis 4 × 4 = **16**.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Les quatre opérations et la division euclidienne",
              blocks: [
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    { title: "Règle des signes (× et ÷)", variant: "info", lines: ["Même signe → positif", "Signes opposés → négatif", "(−3) × (−4) = +12"] },
                    { title: "Distributivité", variant: "info", lines: ["a × (b + c) = a×b + a×c", "17 × 12 = 170 + 34 = 204"] },
                    { title: "Commutativité et associativité", variant: "info", lines: ["4 × 17 × 25 = 100 × 17 = 1 700", "8 × 125 = 1 000"] },
                    { title: "Multiplier par 10ⁿ", variant: "info", lines: ["× 10ⁿ : virgule vers la droite", "3,45 × 100 = 345"] },
                  ],
                },
                {
                  type: "highlightBox",
                  variant: "marine",
                  title: "La division euclidienne",
                  blocks: [
                    {
                      type: "formulaBlock",
                      lines: ["a = b × q + r avec 0 ≤ r < b"],
                      note: "Le reste est toujours strictement inférieur au diviseur : c'est ce qui assure l'unicité.",
                    },
                    {
                      type: "paragraph",
                      text: "Exemples : 47 ÷ 5 → quotient 9, reste 2 (47 = 5 × 9 + 2). 100 ÷ 7 → quotient 14, reste 2 (100 = 7 × 14 + 2).",
                    },
                    {
                      type: "callout",
                      variant: "warning",
                      text: "Ne pas confondre avec la **division décimale** : 47 ÷ 5 = 9,4 (décimale) n'est pas « quotient 9, reste 2 » (euclidienne). Les deux sont correctes, mais répondent à des questions différentes. La division euclidienne, les multiples et les diviseurs sont approfondis dans la [fiche N°6](fiche:divisibilite-pgcd-ppcm).",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Points de vigilance : décimaux et conversions",
              blocks: [
                {
                  type: "callout",
                  variant: "info",
                  title: "Multiplier des décimaux",
                  text: "On calcule sans la virgule, puis on replace la virgule : le résultat a autant de décimales que la **somme** des décimales des deux facteurs. 2,3 × 1,4 → 23 × 14 = 322, et 1 + 1 = 2 décimales → **3,22**.",
                },
                {
                  type: "callout",
                  variant: "info",
                  title: "Conversions d'unités",
                  text: "km → m : × 1 000 · cm → m : ÷ 100 · L → mL : × 1 000 · kg → g : × 1 000. Exemples : 3,5 km = 3 500 m · 250 cL = 2,5 L.",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Calcul mental, estimation et ordre de grandeur",
              blocks: [
                {
                  type: "paragraph",
                  text: "Le calcul mental est un outil de contrôle : une estimation rapide détecte les erreurs grossières. Le jury valorise les candidats qui montrent qu'ils ont vérifié.",
                },
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    { title: "Distributivité", variant: "info", lines: ["25 × 12 = 250 + 50 = 300"] },
                    { title: "Compléments", variant: "info", lines: ["37 + 63 = 100 · 998 + 2 = 1 000"] },
                    { title: "Raccourcis utiles", variant: "info", lines: ["× 25 = × 100 ÷ 4", "× 5 = × 10 ÷ 2"] },
                    { title: "Ordre de grandeur", variant: "info", lines: ["382 × 47 ≈ 400 × 50 = 20 000", "(exact : 17 954, cohérent)"] },
                  ],
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 : calculer de gauche à droite sans les priorités",
              badge: "Erreur n°1",
              faux: "2 + 3 × 4 = 5 × 4 = 20.",
              vrai: "2 + 3 × 4 = 2 + 12 = **14** : la multiplication passe avant l'addition.",
              methode: "Avant de calculer, repérer toutes les × et ÷, les faire en premier, puis + et −.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 : la règle des signes en multiplication",
              badge: "Très fréquent",
              faux: "(−3) × (−4) = −12.",
              vrai: "(−3) × (−4) = **+12**. Moins par moins donne plus.",
              methode: "Compter les facteurs négatifs : nombre pair → positif, impair → négatif.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 : un reste supérieur ou égal au diviseur",
              badge: "Erreur de vérification",
              faux: "53 ÷ 7 : quotient 6, reste 11 (7 × 6 = 42).",
              vrai: "Si le reste ≥ diviseur, le quotient est trop petit : 7 × 7 = 49, reste 4 → 53 = 7 × 7 + 4.",
              methode: "Toujours vérifier r < b ; sinon, augmenter le quotient de 1.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°4 : mal placer la virgule d'un produit de décimaux",
              badge: "Fréquent",
              faux: "0,3 × 0,4 = 1,2.",
              vrai: "3 × 4 = 12, et 1 + 1 = 2 décimales → **0,12**.",
              methode: "Additionner le nombre de décimales des deux facteurs.",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°5 : confondre division euclidienne et division décimale",
              badge: "Subtil",
              faux: "« 17 ÷ 4 = 4 reste 1 » quand on demande le résultat décimal.",
              vrai: "Valeur décimale : 17 ÷ 4 = 4,25. Division euclidienne : quotient 4, reste 1.",
              methode: "« Quotient et reste » → euclidienne. « Valeur exacte » ou « résultat » → décimale.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "Le PE doit savoir enseigner le calcul, pas seulement calculer. Le jury demande souvent d'identifier l'erreur d'un élève, d'expliquer un algorithme ou de comparer deux méthodes.\n\n**Addition (CE1-CE2) :** la retenue est un groupement de 10 qui change de rang. On l'enseigne avec des manipulations (bûchettes, abaques) avant l'écriture formelle. Un élève qui la vit comme une règle mécanique l'oublie ou la place mal.\n\n**Soustraction (CE2-CM) :** deux méthodes valides coexistent (par emprunt, la plus répandue aujourd'hui ; par compensation, dominante avant les années 1980). Le BOEN 2020 n'en impose aucune. Les élèves doivent comprendre que soustraire, c'est trouver une différence, pas seulement enlever.\n\n**Multiplication (CE1 à CM2) :** la clé est de comprendre pourquoi on décale les produits partiels. Dans 34 × 26, le 2 vaut 20 : le produit 34 × 20 = 680 est décalé d'un rang. Le décalage traduit la valeur positionnelle, ce n'est pas une convention arbitraire.\n\n**Division (CM1-CM2) :** l'algorithme le plus exigeant du cycle 3. On passe d'abord par les soustractions successives, plus intuitives, avant l'algorithme posé. La difficulté est l'estimation du chiffre du quotient. Le sens (partage et groupement) doit précéder la technique.\n\n**Les priorités opératoires** ne sont pas enseignées formellement au primaire (elles arrivent au cycle 4), mais le PE doit les maîtriser pour ne pas induire ses élèves en erreur au tableau.",
            },
            {
              type: "table",
              title: "Progression des algorithmes posés (cycles 2 et 3)",
              headers: ["Niveau", "Addition", "Soustraction", "Multiplication", "Division"],
              rows: [
                ["CE1", "Sans puis avec retenue", "Sens de la différence", "Premières posées (× 1 chiffre)", "Partage concret"],
                ["CE2", "Plusieurs retenues", "Algorithme posé", "× 1 chiffre, intro × 2 chiffres", "Soustractions successives"],
                ["CM1", "Grands nombres", "Décimaux", "Grands nombres, intro décimaux", "Posée par 1 chiffre"],
                ["CM2", "Décimaux", "Décimaux", "Décimaux, grands multiplicateurs", "Par 2 chiffres, décimaux"],
              ],
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
              title: "Trois réflexes à automatiser",
              text: "Identifier l'ordre de priorité avant de calculer, effectuer proprement une division euclidienne, estimer le résultat. Ce sont ces automatismes qui font la différence sur copie.",
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Calculer une expression avec priorités",
              intro: "**Question typique :** « Calculer 3 + 2² × (8 − 5) ÷ 6 − 1 ».",
              steps: [
                { number: "1", text: "**Traiter les parenthèses.**", example: { lines: ["3 + 2² × 3 ÷ 6 − 1"] } },
                { number: "2", text: "**Traiter les puissances.**", example: { lines: ["3 + 4 × 3 ÷ 6 − 1"] } },
                { number: "3", text: "**Traiter × et ÷, de gauche à droite.**", example: { lines: ["3 + 12 ÷ 6 − 1 = 3 + 2 − 1"] } },
                { number: "4", text: "**Traiter + et −, de gauche à droite.**", example: { lines: ["3 + 2 − 1 = **4**"] }, warn: "⚠️ Vérification par estimation : 3 + 4×0,5 − 1 ≈ 4. Cohérent." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Calculer 10 − 2 × 3 + 4².",
              correction: [
                { type: "line", text: "Puissance : 4² = 16. Multiplication : 2 × 3 = 6. Puis 10 − 6 + 16 = **20**." },
                { type: "note", text: "Puissances et × avant les + et − ; on finit de gauche à droite." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Effectuer et vérifier une division euclidienne",
              intro: "**Question typique :** « Quotient et reste de 253 par 17 ».",
              steps: [
                { number: "1", text: "**Estimer le quotient** : combien de fois 17 dans 253 ?", example: { lines: ["17 × 14 = 238 → 253 − 238 = 15"] } },
                { number: "2", text: "**Vérifier que le reste est inférieur au diviseur.**", example: { lines: ["15 < 17 ✓"] } },
                { number: "3", text: "**Écrire la relation de division euclidienne.**", example: { lines: ["253 = 17 × 14 + 15 avec 0 ≤ 15 < 17"] }, warn: "⚠️ Ne jamais se contenter de « q = 14, r = 15 » : la relation a = bq + r doit apparaître." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Donner quotient et reste de 100 ÷ 7, puis écrire la relation.",
              correction: [
                { type: "line", text: "7 × 14 = 98, reste 2 → **100 = 7 × 14 + 2** avec 0 ≤ 2 < 7." },
                { type: "note", text: "On vérifie toujours que le reste est strictement inférieur au diviseur." },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Utiliser la distributivité pour le calcul mental",
              intro: "**Question typique :** « Calculer mentalement 48 × 25 ».",
              steps: [
                { number: "A", text: "**Décomposer un facteur.**", example: { lines: ["48 × 25 = (50 − 2) × 25 = 1 250 − 50 = 1 200"] } },
                { number: "B", text: "**Ou chercher un raccourci.**", example: { lines: ["48 × 25 = 48 × 100 ÷ 4 = 4 800 ÷ 4 = 1 200"] }, exampleNote: "× 25 = × 100 ÷ 4 ; × 5 = × 10 ÷ 2." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Calculer mentalement 36 × 25.",
              correction: [
                { type: "line", text: "36 × 100 ÷ 4 = 3 600 ÷ 4 = **900**." },
                { type: "note", text: "Multiplier par 25 revient à multiplier par 100 puis diviser par 4." },
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
              title: "Calcul numérique et priorités",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_CALCUL_NUMERIQUE_PRIORITES,
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
              title: "Calcul numérique et priorités",
              intro:
                "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
              copies: COPIES_CALCUL_NUMERIQUE_PRIORITES,
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
              center: { title: "Calcul numérique", subtitle: "Opérations et priorités" },
              branches: [
                { title: "Priorités opératoires", variant: "blue", lines: ["① parenthèses · ② puissances", "③ × ÷ · ④ + −", "Gauche à droite à rang égal"] },
                { title: "Division euclidienne", variant: "green", lines: ["a = b×q + r", "0 ≤ r < b (à vérifier)", "≠ division décimale"] },
                { title: "Règles des signes", variant: "green", lines: ["(−) × (−) = (+)", "Nb de − : pair → +, impair → −"] },
                { title: "Calcul mental", variant: "yellow", lines: ["Distributivité · compléments", "× 25 = × 100 ÷ 4"] },
                { title: "Ordre de grandeur", variant: "yellow", lines: ["Arrondir, vérifier la cohérence", "382 × 47 ≈ 20 000"] },
                { title: "Recul primaire", variant: "purple", dashed: true, lines: ["Retenue = groupement de 10", "Décalage = valeur positionnelle"] },
              ],
            },
          ],
        },
      ],
    },
  ],
};
