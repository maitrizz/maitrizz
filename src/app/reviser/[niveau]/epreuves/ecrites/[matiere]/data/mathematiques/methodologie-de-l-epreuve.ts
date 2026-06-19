import type { Fiche } from "@/components/fiche/types";

/**
 * Méthodologie de l'épreuve écrite de mathématiques (numéro 0, en tête de parcours).
 *
 * Rédigée à partir des sources officielles (juin 2026) :
 * - devenirenseignant.gouv.fr, « Les épreuves des concours externes bac+5 » :
 *   épreuve écrite de mathématiques, 3 h, coefficient 1, notée sur 20, note <= 5
 *   éliminatoire, « un ensemble d'au moins trois exercices indépendants ».
 * - Arrêté du 25 janvier 2021 (CRPE rénové, sessions 2022 et suivantes), cadre M2.
 * - Programme de référence : cycle 4 (BOEN n°31 du 30 juillet 2020) + partie
 *   « Nombres et calculs » du programme de Seconde.
 *
 * Charte appliquée : aucune statistique d'admission ni référence d'annale précise
 * non sourçable ; barèmes par exercice présentés comme variables (non officiels,
 * fixés par chaque sujet) ; cadre réglementaire conservé. Point factuel important :
 * depuis la réforme, l'écrit de mathématiques est purement disciplinaire ; la
 * dimension didactique est évaluée à l'oral (épreuve de leçon), pas à l'écrit.
 */

const OBJECTIFS = [
  { id: "me1", label: "Je connais le cadre de l'épreuve : durée, coefficient, barème, note éliminatoire" },
  { id: "me2", label: "Je sais que l'écrit est constitué d'au moins trois exercices indépendants" },
  { id: "me3", label: "Je connais le programme de référence (cycle 4 et « Nombres et calculs » de Seconde)" },
  { id: "me4", label: "Je sais que l'écrit est disciplinaire : la didactique est évaluée à l'oral, pas ici" },
  { id: "me5", label: "Je repère les types d'exercices qui reviennent et je commence par mes points forts" },
  { id: "me6", label: "Je répartis mon temps sur les trois heures et je ne laisse aucun exercice vide" },
  { id: "me7", label: "Je rédige et je justifie chaque réponse, et je vérifie par un ordre de grandeur" },
];

export const ficheMethodologieMathematiques: Fiche = {
  slug: "methodologie-de-l-epreuve",
  matiere: "mathematiques",
  numero: 0,
  partie: "Méthodologie",
  title: "Méthodologie de l'épreuve écrite de mathématiques",
  subtitle:
    "Comprendre le cadre de l'épreuve, ce que le jury évalue, et gérer ses 3 heures sur des exercices indépendants",
  badges: [
    { label: "Point de départ du parcours", variant: "hot" },
    { label: "Épreuve écrite de mathématiques · 3 h", variant: "info" },
  ],
  metaTitle:
    "Méthodologie de l'épreuve écrite de mathématiques (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Méthodologie de l'épreuve écrite de mathématiques du CRPE M2 (3 h) : format, coefficient, barème, note éliminatoire, exercices indépendants, programme de référence (cycle 4 et Seconde), ce que le jury évalue, stratégie et gestion du temps. Conseils et auto-évaluation.",
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
              intro:
                "Avant de réviser les notions, il faut savoir précisément ce que l'on attend de vous. Cette fiche présente le cadre officiel de l'épreuve, ce que le jury évalue, les types d'exercices qui reviennent, et une stratégie de gestion du temps.",
              items: [
                { number: "①", title: "Le cadre de l'épreuve", text: "Une épreuve de 3 h, son coefficient, son barème et sa note éliminatoire." },
                { number: "②", title: "La structure des sujets", text: "Au moins trois exercices indépendants, et les domaines qui reviennent." },
                { number: "③", title: "Ce que le jury évalue", text: "Connaissances, raisonnement, rédaction. La didactique, elle, est à l'oral." },
                { number: "④", title: "La stratégie et le temps", text: "Choisir l'ordre des exercices, justifier, vérifier, ne rien laisser vide." },
              ],
            },
          ],
        },
        {
          id: "cours",
          label: "Cadre de l'épreuve",
          icon: "",
          blocks: [
            {
              type: "callout",
              variant: "info",
              icon: "",
              title: "Avant de commencer",
              text: "L'épreuve écrite de mathématiques est une épreuve d'admissibilité du CRPE. Elle vérifie votre maîtrise disciplinaire : connaître les notions du programme et savoir les mobiliser, en raisonnant et en rédigeant clairement. Ce n'est pas une épreuve pédagogique : depuis la réforme, la didactique et l'analyse de productions d'élèves ne sont plus à l'écrit, elles sont évaluées à l'oral (épreuve de leçon).",
            },
            {
              type: "subsection",
              number: "①",
              title: "Le format de l'épreuve",
              blocks: [
                {
                  type: "table",
                  title: "Format général",
                  headers: ["Caractéristique", "Détail"],
                  rows: [
                    ["Durée", "3 heures"],
                    ["Notation", "20 points, coefficient 1"],
                    ["Note éliminatoire", "Inférieure ou égale à 5/20 : élimine du concours, quelle que soit la note globale"],
                    ["Structure", "Un ensemble d'au moins trois exercices indépendants (questions à choix multiples et questions à réponse construite)"],
                    ["Programme de référence", "Programme de mathématiques du cycle 4, et partie « Nombres et calculs » du programme de Seconde"],
                    ["Calculatrice", "Autorisée, en mode examen (à confirmer sur la convocation de votre session)"],
                    [
                      "Cadre réglementaire",
                      "[Arrêté du 25 janvier 2021](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043075701) (CRPE rénové, sessions 2022 et suivantes)",
                    ],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "La note éliminatoire est absolue",
                  text: "Une note inférieure ou égale à 5/20 élimine du concours, quelle que soit la moyenne. Comme les exercices sont indépendants, la priorité est d'en traiter le plus possible : une copie qui aborde tous les exercices vaut mieux qu'un seul exercice parfait et le reste laissé vide.",
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  title: "Des exercices indépendants : un atout",
                  text: "Aucun exercice ne dépend d'un autre. Si vous bloquez sur une question, vous pouvez passer à l'exercice suivant sans rien perdre. Et même au sein d'un exercice, les questions sont souvent traitables séparément.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "La structure des sujets",
              blocks: [
                {
                  type: "paragraph",
                  text: "Le sujet réunit au moins trois exercices indépendants, souvent davantage, qui balaient l'ensemble du programme. Deux formats de questions cohabitent : des questions à choix multiples (parfois à justifier) et des questions à réponse construite, où la rédaction et le raisonnement comptent autant que le résultat.",
                },
                {
                  type: "cardGrid",
                  columns: 2,
                  cards: [
                    { title: "Nombres et calcul", value: "Partie 1", lines: ["Numération, fractions, puissances", "Arithmétique (PGCD, premiers)", "Calcul littéral, équations"], variant: "info" },
                    { title: "Données et fonctions", value: "Partie 2", lines: ["Statistiques, probabilités", "Proportionnalité, pourcentages", "Fonctions linéaires et affines"], variant: "info" },
                    { title: "Grandeurs et mesures", value: "Partie 3", lines: ["Périmètres, aires, volumes", "Conversions, grandeurs composées"], variant: "info" },
                    { title: "Espace et géométrie", value: "Parties 4 et 5", lines: ["Pythagore, Thalès, trigonométrie", "Transformations, solides, espace"], variant: "info" },
                    { title: "Algorithmique", value: "Partie 6", lines: ["Scratch (lire et écrire un script)", "Tableur, géométrie dynamique"], variant: "info" },
                    { title: "Problème en contexte", value: "Transversal", lines: ["Une situation concrète à modéliser", "Plusieurs notions combinées"], variant: "neutral" },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "Un exercice de Scratch ou de tableur est presque toujours présent : il ne faut jamais l'impasser (voir la [notion 27, Algorithmique et Scratch](fiche:algorithmique-scratch-tableur)). Les problèmes en contexte mobilisent souvent la proportionnalité ([notion 13](fiche:proportionnalite-pourcentages)), la géométrie (notions [21](fiche:theoreme-de-pythagore) à [23](fiche:trigonometrie-triangle-rectangle)) ou les grandeurs (notions [15](fiche:perimetres-aires-volumes) et [16](fiche:durees-masses-grandeurs-composees)).",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Ce que le jury évalue",
              blocks: [
                {
                  type: "table",
                  title: "Trois compétences, sur toute la copie",
                  headers: ["Compétence", "Ce que le jury vérifie", "Ce qui fait gagner des points"],
                  rows: [
                    ["Connaissances", "La maîtrise des notions du programme et la capacité à les mobiliser.", "La bonne propriété ou formule citée, appliquée au bon endroit."],
                    ["Raisonnement", "La logique de la démarche, la justification des étapes.", "Un raisonnement explicite : on nomme le théorème, on justifie chaque étape."],
                    ["Expression écrite", "La clarté de la rédaction et la correction de la langue, même en maths.", "Des phrases complètes, une conclusion nette, des notations correctes."],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Le résultat seul ne suffit pas",
                  text: "Sur les questions à réponse construite, une bonne réponse non justifiée ne rapporte pas tous les points, et une démarche correcte avec une erreur de calcul en rapporte souvent une partie. On rédige, on justifie, on conclut par une phrase.",
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  title: "Et la didactique ?",
                  text: "Depuis la réforme, l'écrit de mathématiques est purement disciplinaire : aucune question ne porte sur la façon d'enseigner ni sur l'analyse de productions d'élèves. Cette dimension est évaluée à l'oral (épreuve de leçon). Les encarts « Côté prof » et « le regard du futur enseignant » des fiches préparent surtout cet oral, mais ils aident aussi à comprendre les problèmes ancrés dans des situations scolaires.",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Le programme de référence",
              blocks: [
                {
                  type: "paragraph",
                  text: "Le socle est le programme de mathématiques du cycle 4 (5e, 4e, 3e), organisé en cinq thèmes. S'y ajoute la partie « Nombres et calculs » du programme de Seconde, qui apporte quelques notions au-delà du collège.",
                },
                {
                  type: "table",
                  title: "Les cinq thèmes du cycle 4",
                  headers: ["Thème", "Contenu", "Notions concernées"],
                  rows: [
                    ["A · Nombres et calculs", "Nombres, fractions, puissances, arithmétique, calcul littéral, équations.", "Notions 01 à 10"],
                    ["B · Organisation et gestion de données, fonctions", "Statistiques, probabilités, proportionnalité, fonctions.", "Notions 11 à 14"],
                    ["C · Grandeurs et mesures", "Longueurs, aires, volumes, conversions, grandeurs composées.", "Notions 15 et 16"],
                    ["D · Espace et géométrie", "Géométrie plane, Pythagore, Thalès, transformations, solides et espace.", "Notions 17 à 26"],
                    ["E · Algorithmique et programmation", "Algorithme, Scratch, tableur, géométrie dynamique.", "Notion 27"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Le programme de Seconde ajoute quelques notions",
                  text: "Au-delà du cycle 4, certaines notions relèvent de la Seconde et peuvent apparaître : suites, intervalles et valeur absolue, quartiles, variance et écart-type. Elles sont signalées « Seconde » dans les fiches concernées (notions [09](fiche:equations-inequations-systemes), [10](fiche:suites-numeriques) et [11](fiche:statistiques-descriptives)).",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · laisser des exercices vides",
              badge: "Erreur la plus coûteuse",
              faux: "Passer une heure sur le premier exercice pour le rendre parfait, et n'avoir plus le temps pour les autres.",
              vrai: "Les exercices sont indépendants et chacun rapporte des points : mieux vaut traiter le début de chaque exercice que d'en perfectionner un seul.",
              methode: "Faire un premier passage rapide sur tout le sujet, traiter le sûr, puis revenir sur le difficile.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 · donner un résultat sans justification",
              badge: "Points perdus",
              faux: "Écrire seulement « AC = 13 cm » sans citer le théorème ni poser le calcul.",
              vrai: "On nomme la propriété (« par le théorème de Pythagore dans le triangle ABC rectangle en A »), on pose, on conclut par une phrase.",
              methode: "Sur une question à réponse construite, toujours rédiger la démarche, pas seulement le résultat.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 · impasser Scratch ou le tableur",
              badge: "À corriger",
              faux: "Sauter l'exercice d'algorithmique en pensant qu'il est secondaire.",
              vrai: "Un exercice de Scratch ou de tableur est presque toujours présent et se traite souvent vite : c'est des points accessibles (voir la [notion 27](fiche:algorithmique-scratch-tableur)).",
              methode: "Repérer cet exercice dès le début et le traiter quand l'énergie est encore là.",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°4 · oublier de vérifier ses résultats",
              badge: "Perte de points évitable",
              faux: "Rendre un volume négatif, une probabilité supérieure à 1, ou une longueur d'hypoténuse plus courte qu'un côté.",
              vrai: "Un ordre de grandeur, une unité cohérente et un résultat plausible se vérifient en quelques secondes.",
              methode: "Avant de passer à la suite, relire le résultat et se demander s'il est plausible.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école : le regard du futur enseignant",
              text: "L'écrit teste des mathématiques de niveau collège (cycle 4) et début de lycée, mais le cadre de référence du concours reste l'enseignement à l'école primaire. Beaucoup de problèmes sont donc ancrés dans des situations scolaires concrètes (recettes, plans, partages, déplacements).\n\nMême si la didactique n'est pas notée à l'écrit, comprendre comment une notion s'enseigne au primaire aide à décoder ces contextes et à donner des réponses justes au bon niveau. C'est aussi la préparation directe de l'oral de leçon.\n\nC'est le rôle des encarts « le regard du futur enseignant » présents dans chaque fiche : ils relient la notion savante à ce qui se construit à l'école.",
            },
            {
              type: "ctaBox",
              text: "Cadre bien en tête ? Passez aux conseils pratiques.",
              buttonLabel: "Voir les conseils pratiques",
              targetTab: "methode",
            },
          ],
        },
        {
          id: "methode",
          label: "Conseils pratiques",
          icon: "",
          blocks: [
            {
              type: "callout",
              variant: "success",
              icon: "",
              title: "Le jour de l'épreuve",
              text: "Voici les gestes à appliquer concrètement : survoler tout le sujet, commencer par les exercices que l'on maîtrise, justifier chaque réponse, vérifier ses résultats, et garder du temps pour ne rien laisser vide.",
            },
            {
              type: "rappelExpress",
              title: "Rappel express : les priorités de l'épreuve",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "Ne jamais laisser un exercice vide : la note de 5/20 est éliminatoire.",
                    "Les exercices sont indépendants : commencer par les plus sûrs.",
                    "Justifier et rédiger chaque réponse, même courte.",
                    "Vérifier chaque résultat par un ordre de grandeur et une unité.",
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ La calculatrice (en mode examen) ne dispense pas de poser les étapes : un résultat seul, sans démarche, ne rapporte pas tous les points.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Survoler tout le sujet avant de se lancer",
              intro: "**Les premières minutes comptent :** elles servent à voir l'ensemble, pas à commencer à calculer.",
              steps: [
                {
                  number: "1",
                  text: "**Lire tous les exercices** : repérer les domaines (calcul, géométrie, données, Scratch) et la difficulté de chacun.",
                  example: { lines: ["5 minutes, sans rien rédiger encore"] },
                },
                {
                  number: "2",
                  text: "**Repérer les questions rapides** : QCM, questions de cours, exercice de tableur ou de Scratch.",
                  example: { lines: ["Ce sont des points accessibles à prendre tôt"] },
                },
                {
                  number: "💡",
                  text: "**Noter le barème de chaque exercice** s'il est indiqué : il guide la répartition du temps.",
                  warn: "⚠️ Ne pas commencer par l'exercice le plus dur juste parce qu'il est en premier.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Choisir l'ordre des exercices",
              intro:
                "**Il n'y a pas d'ordre imposé.** Comme les exercices sont indépendants, on commence par ses points forts pour sécuriser des points, puis on s'attaque au reste.",
              steps: [
                {
                  number: "1",
                  text: "**Commencer par le sûr** : l'exercice du domaine que vous maîtrisez le mieux, et les QCM rapides.",
                  example: { lines: ["On engrange des points et de la confiance"] },
                },
                {
                  number: "2",
                  text: "**Fixer une heure limite par exercice** : par exemple « à telle heure, je passe au suivant », pour ne pas s'enliser.",
                  example: { lines: ["Une question bloquante ne doit pas manger un autre exercice"] },
                },
                {
                  number: "💡",
                  text: "**Si vous bloquez**, laisser un blanc propre et passer à la suite : on revient à la fin s'il reste du temps.",
                  warn: "⚠️ Le perfectionnisme sur un exercice est l'ennemi de la note globale.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: "Répartir ses 3 heures",
              intro: "**Repères indicatifs**, à ajuster selon le nombre d'exercices et le barème. L'essentiel : garder une marge de relecture.",
              preBlocks: [
                {
                  type: "formulaBlock",
                  title: "Répartition recommandée sur 3 heures",
                  lines: [
                    "0 h 00 à 0 h 10 (10 min) : survol de tout le sujet et repérage des questions rapides.",
                    "0 h 10 à 0 h 40 (30 min) : QCM et questions rapides (Scratch, tableur, cours).",
                    "0 h 40 à 2 h 30 (110 min) : les exercices à réponse construite, du plus sûr au plus difficile.",
                    "2 h 30 à 3 h 00 (30 min) : reprise des questions laissées et relecture (résultats, unités, langue).",
                  ],
                  note: "Avec quatre à six exercices, cela laisse environ 20 à 30 minutes par exercice construit. À moduler selon le barème indiqué sur le sujet.",
                },
              ],
              steps: [
                {
                  number: "💡",
                  text: "**Si vous êtes en retard** : assurer au moins le début de chaque exercice restant (les premières questions sont souvent les plus accessibles).",
                  warn: "⚠️ Quelques questions traitées dans chaque exercice valent mieux qu'un seul exercice complet et les autres vides.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "④",
              title: "Rédiger, justifier, vérifier",
              intro: "**La rédaction fait partie de la note.** Une réponse construite se rédige comme une mini-démonstration.",
              steps: [
                {
                  number: "1",
                  text: "**Annoncer la propriété utilisée** avant de calculer.",
                  example: { lines: ["« D'après le théorème de Thalès dans la configuration triangle… »"] },
                },
                {
                  number: "2",
                  text: "**Poser les étapes et conclure par une phrase**, avec l'unité.",
                  example: { lines: ["« La longueur AC mesure donc 13 cm. »"] },
                },
                {
                  number: "3",
                  text: "**Vérifier la plausibilité** : ordre de grandeur, unité, signe, cohérence.",
                  example: { lines: ["Une probabilité est entre 0 et 1 ; une longueur est positive"] },
                },
                {
                  number: "💡",
                  text: "**Soigner la langue et les notations** sur toute la copie : l'orthographe et la clarté sont évaluées, même en mathématiques.",
                  warn: "⚠️ Garder un vrai temps de relecture en fin d'épreuve.",
                },
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
