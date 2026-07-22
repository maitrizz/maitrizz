import type { Fiche } from "@/components/fiche/types";
import type { Niveau } from "@/lib/niveau";

/**
 * Méthodologie de l'épreuve écrite de mathématiques (numéro 0, en tête de parcours).
 * Fabrique ficheMethodologie(niveau) : les deux concours divergent sur le cadre.
 *
 * Rédigée à partir des sources officielles (juin 2026) :
 * - M2 (bac+5), devenirenseignant.gouv.fr : épreuve écrite de mathématiques, 3 h,
 *   coefficient 1, notée sur 20, note <= 5 éliminatoire, « un ensemble d'au moins
 *   trois exercices indépendants ». Arrêté du 25 janvier 2021.
 * - L3 (bac+3), devenirenseignant.gouv.fr : épreuve écrite COMMUNE français +
 *   mathématiques, 4 h, coefficient 5, notée sur 20 (maths = 10 points), note
 *   <= 2,5/10 sur une partie éliminatoire. Arrêté du 17 avril 2025 (sessions 2026 et +).
 * - Programme de référence : cycle 4 (BOEN n°31 du 30 juillet 2020) + partie
 *   « Nombres et calculs » du programme de Seconde (le M2 ; le L3 vise le cycle 4).
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
  { id: "me3", label: "Je connais le programme de référence (cycle 4, complété par « Nombres et calculs » de Seconde au M2)" },
  { id: "me4", label: "Je sais que l'écrit est disciplinaire : la didactique est évaluée à l'oral, pas ici" },
  { id: "me5", label: "Je repère les types d'exercices qui reviennent et je commence par mes points forts" },
  { id: "me6", label: "Je répartis mon temps sur la durée de l'épreuve et je ne laisse aucun exercice vide" },
  { id: "me7", label: "Je rédige et je justifie chaque réponse, et je vérifie par un ordre de grandeur" },
];

function ficheMethodologie(niveau: Niveau): Fiche {
  const l3 = niveau === "l3";
  return {
  slug: "methodologie-de-l-epreuve",
  matiere: "mathematiques",
  kind: "methodo",
  numero: 0,
  partie: "Méthodologie",
  title: "Méthodologie de l'épreuve écrite de mathématiques",
  subtitle: l3
    ? "Comprendre l'épreuve commune français et mathématiques, ce que le jury évalue, et gérer ses 4 heures."
    : "Comprendre le cadre de l'épreuve, ce que le jury évalue, et gérer ses 3 heures sur des exercices indépendants.",
  badges: [
    { label: "Point de départ du parcours", variant: "hot" },
    {
      label: l3 ? "Épreuve commune français + maths · 4 h" : "Épreuve écrite de mathématiques · 3 h",
      variant: "info",
    },
  ],
  metaTitle:
    "Méthodologie de l'épreuve écrite de mathématiques · Fiche de révision CRPE",
  metaDescription: l3
    ? "Méthodologie de la partie mathématiques du CRPE L3 : épreuve commune français et mathématiques (4 h), barème, note éliminatoire, exercices indépendants, programme de référence (cycle 4), ce que le jury évalue, stratégie et gestion du temps. Conseils et auto-évaluation."
    : "Méthodologie de l'épreuve écrite de mathématiques du CRPE M2 (3 h) : format, coefficient, barème, note éliminatoire, exercices indépendants, programme de référence (cycle 4 et Seconde), ce que le jury évalue, stratégie et gestion du temps. Conseils et auto-évaluation.",
  tabGroups: [
    {
      id: "decouvrir",
      label: "Découvrir",
      icon: "",
      tabs: [
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
              text: l3
                ? "Au CRPE L3, les mathématiques font partie d'une épreuve commune avec le français, d'une durée totale de 4 heures. La partie mathématiques vérifie votre maîtrise disciplinaire : connaître les notions du programme et savoir les mobiliser, en raisonnant et en rédigeant clairement. Ce n'est pas une épreuve pédagogique : la didactique et l'analyse de productions d'élèves ne sont pas à l'écrit, elles sont évaluées à l'oral (épreuve de leçon)."
                : "L'épreuve écrite de mathématiques est une épreuve d'admissibilité du CRPE. Elle vérifie votre maîtrise disciplinaire : connaître les notions du programme et savoir les mobiliser, en raisonnant et en rédigeant clairement. Ce n'est pas une épreuve pédagogique : depuis la réforme, la didactique et l'analyse de productions d'élèves ne sont plus à l'écrit, elles sont évaluées à l'oral (épreuve de leçon).",
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
                  rows: l3
                    ? [
                        ["Durée", "4 heures pour l'épreuve commune français + mathématiques"],
                        ["Notation", "20 points au total, coefficient 5 : 10 points pour le français, 10 points pour les mathématiques"],
                        ["Note éliminatoire", "Inférieure ou égale à 2,5/10 sur la partie mathématiques (ou sur le français) : élimine du concours"],
                        ["Structure (maths)", "Plusieurs exercices ou problèmes indépendants (questions à choix multiples et questions à réponse construite)"],
                        ["Programme de référence", "Programme de mathématiques du cycle 4"],
                        ["Calculatrice", "Autorisée, en mode examen (à confirmer sur la convocation de votre session)"],
                        [
                          "Cadre réglementaire",
                          "[Arrêté du 17 avril 2025](https://www.legifrance.gouv.fr/search/all?query=Arr%C3%AAt%C3%A9%20du%2017%20avril%202025%20CRPE%20externe%20bac%2B3) (CRPE externe bac+3, sessions 2026 et suivantes)",
                        ],
                      ]
                    : [
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
                  variant: "danger",
                  icon: "⚠️",
                  title: "La note éliminatoire est absolue",
                  text: l3
                    ? "Une note inférieure ou égale à 2,5/10 sur la partie mathématiques élimine du concours, et c'est indépendant du français : une excellente note en français ne compense pas des maths trop faibles. Comme les exercices sont indépendants, la priorité est d'en traiter le plus possible."
                    : "Une note inférieure ou égale à 5/20 élimine du concours, quelle que soit la moyenne. Comme les exercices sont indépendants, la priorité est d'en traiter le plus possible : une copie qui aborde tous les exercices vaut mieux qu'un seul exercice parfait et le reste laissé vide.",
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
                  text: l3
                    ? "Le programme de référence est celui des mathématiques du cycle 4 (5e, 4e, 3e), organisé en cinq thèmes."
                    : "Le socle est le programme de mathématiques du cycle 4 (5e, 4e, 3e), organisé en cinq thèmes. S'y ajoute la partie « Nombres et calculs » du programme de Seconde, qui apporte quelques notions au-delà du collège.",
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
                  title: l3 ? "Le contenu « Seconde » est hors programme pour vous" : "Le programme de Seconde ajoute quelques notions",
                  text: l3
                    ? "Certaines fiches signalent un contenu « Seconde » (suites, intervalles et valeur absolue, quartiles, variance et écart-type) : il relève du concours M2, pas du L3 dont le programme se limite au cycle 4. Vous pouvez ignorer ces passages marqués « Seconde » dans les fiches concernées (notions [09](fiche:equations-inequations-systemes), [10](fiche:suites-numeriques) et [11](fiche:statistiques-descriptives))."
                    : "Au-delà du cycle 4, certaines notions relèvent de la Seconde et peuvent apparaître : suites, intervalles et valeur absolue, quartiles, variance et écart-type. Elles sont signalées « Seconde » dans les fiches concernées (notions [09](fiche:equations-inequations-systemes), [10](fiche:suites-numeriques) et [11](fiche:statistiques-descriptives)).",
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
                    l3
                      ? "Ne jamais laisser un exercice vide : la note de 2,5/10 sur la partie maths est éliminatoire."
                      : "Ne jamais laisser un exercice vide : la note de 5/20 est éliminatoire.",
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
                  number: "3",
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
                  number: "3",
                  text: "**Si vous bloquez**, laisser un blanc propre et passer à la suite : on revient à la fin s'il reste du temps.",
                  warn: "⚠️ Le perfectionnisme sur un exercice est l'ennemi de la note globale.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "③",
              title: l3 ? "Répartir le temps des maths dans les 4 heures" : "Répartir ses 3 heures",
              intro: "**Repères indicatifs**, à ajuster selon le nombre d'exercices et le barème. L'essentiel : garder une marge de relecture.",
              preBlocks: [
                {
                  type: "formulaBlock",
                  title: l3 ? "Répartition recommandée pour la partie maths (environ 2 h)" : "Répartition recommandée sur 3 heures",
                  lines: l3
                    ? [
                        "5 min : survol de tous les exercices de maths et repérage des questions rapides.",
                        "20 min : QCM et questions rapides (Scratch, tableur, cours).",
                        "75 min : les exercices à réponse construite, du plus sûr au plus difficile.",
                        "20 min : reprise des questions laissées et relecture (résultats, unités, langue).",
                        "Soit environ 2 h pour les maths. Le français occupe l'autre moitié des 4 h, avec son propre bloc de temps protégé.",
                      ]
                    : [
                        "0 h 00 à 0 h 10 (10 min) : survol de tout le sujet et repérage des questions rapides.",
                        "0 h 10 à 0 h 40 (30 min) : QCM et questions rapides (Scratch, tableur, cours).",
                        "0 h 40 à 2 h 30 (110 min) : les exercices à réponse construite, du plus sûr au plus difficile.",
                        "2 h 30 à 3 h 00 (30 min) : reprise des questions laissées et relecture (résultats, unités, langue).",
                      ],
                  note: l3
                    ? "Ne pas laisser le français ou les maths absorber tout le temps : la note de 2,5/10 par partie est éliminatoire. Réserver un vrai bloc à chaque discipline."
                    : "Avec quatre à six exercices, cela laisse environ 20 à 30 minutes par exercice construit. À moduler selon le barème indiqué sur le sujet.",
                },
              ],
              steps: [
                {
                  number: "1",
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
                  number: "4",
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
}

/**
 * Méthodologie L3 (bac+3) — réécriture du 22/07/2026, calquée sur la refonte
 * française du même jour.
 *
 * Rédigée avec le regard d'une personne qui connaît le concours de l'intérieur :
 * on explique précisément l'épreuve, puis on donne des conseils concrets pour la
 * réussir. Ton humain, vouvoiement partout, aucune fausse preuve sociale.
 *
 * Faits vérifiés sur sources officielles (juillet 2026), à partir du sujet zéro
 * « Première épreuve d'admissibilité » (devenirenseignant.gouv.fr) :
 *  - Épreuve écrite d'admissibilité « Français et Mathématiques » : 4 h, coef 5,
 *    deux parties indépendantes, ~2 h estimées par partie ; barème indicatif /20
 *    par partie, note finale /10 par partie ; note ≤ 2,5/10 à une partie = éliminatoire.
 *  - Partie B (maths) du sujet zéro : 5 exercices, 20 points (4+5+4+3+4), dont un
 *    problème tarifaire (fonctions affines), de la géométrie (aires, cercle,
 *    Pythagore, échelle), un tableau à double entrée (données, pourcentages) et un
 *    QCM (algorithme d'affectations, volume d'un pavé réduit, conversion en litres).
 *  - « Il sera tenu compte de la clarté des raisonnements et de la qualité de la
 *    rédaction dans l'appréciation des copies. » Calculatrice autorisée (mode examen).
 *  - Programme : « l'ensemble des connaissances du cycle 4 ».
 *  - Première session en avril 2026 : aucun rapport de jury bac+3 encore publié.
 * Sources : arrêté du 17 avril 2025 ; devenirenseignant.gouv.fr (pages 1380, 1382, 1405, 1163).
 */
const SRC_EPREUVES = "https://www.devenirenseignant.gouv.fr/les-epreuves-du-concours-externe-bac3-de-recrutement-de-professeurs-des-ecoles-1380";
const SRC_SUJETS_ZERO = "https://www.devenirenseignant.gouv.fr/exemples-de-sujets-des-concours-externes-bac3-de-recrutement-d-enseignants-1405";
const SRC_RAPPORTS = "https://www.devenirenseignant.gouv.fr/les-sujets-des-epreuves-ecrites-et-rapports-des-jurys-des-crpe-1163";
const SRC_PROGRAMME = "https://www.devenirenseignant.gouv.fr/le-programme-des-epreuves-des-concours-externes-bac3-de-recrutement-de-professeurs-des-ecoles-1382";
const SRC_ARRETE = "https://www.legifrance.gouv.fr/search/all?query=Arr%C3%AAt%C3%A9%20du%2017%20avril%202025%20CRPE%20externe%20bac%2B3";

function buildMethodologieL3(): Fiche {
  return {
    slug: "methodologie-de-l-epreuve",
    matiere: "mathematiques",
    kind: "methodo",
    numero: 0,
    partie: "Méthodologie",
    title: "Méthodologie de l'épreuve écrite de mathématiques",
    subtitle:
      "Bien comprendre l'épreuve commune de français et de mathématiques, et savoir exactement quoi faire, dans quel ordre, le jour du concours.",
    badges: [
      { label: "À lire en premier", variant: "hot" },
      { label: "Épreuve commune français + maths · 4 h", variant: "info" },
    ],
    metaTitle: "Méthodologie de l'écrit de mathématiques · Fiche de révision CRPE",
    metaDescription:
      "Méthodologie du CRPE bac+3 : l'épreuve commune français et maths (4 h), le barème du sujet zéro, la note éliminatoire, la structure des exercices de maths, un plan des 4 heures et la méthode de rédaction. Sources officielles citées.",
    tabGroups: [
      {
        id: "decouvrir",
        label: "Découvrir",
        icon: "",
        tabs: [
          {
            id: "cours",
            label: "Comprendre l'épreuve",
            icon: "",
            blocks: [
              {
                type: "callout",
                variant: "info",
                icon: "",
                title: "En deux mots",
                text: "Au concours bac+3, les mathématiques ne se passent pas toutes seules : elles partagent une épreuve de 4 heures avec le français. On y évalue votre maîtrise des notions du programme et votre façon de raisonner, pas votre façon d'enseigner : ni didactique, ni analyse de copies d'élèves à produire. Cette dimension-là est réservée à l'oral (l'épreuve de leçon). Savoir précisément ce qu'on attend de vous, c'est déjà la moitié du chemin.",
              },
              {
                type: "mindmapLite",
                center: { title: "Français + Maths", subtitle: "une seule épreuve · 4 h · notée sur 20" },
                branches: [
                  {
                    title: "Maths · 10 pts",
                    lines: ["Plusieurs exercices indépendants", "Programme du cycle 4", "QCM et réponses construites"],
                    variant: "green",
                  },
                  {
                    title: "Français · 10 pts",
                    lines: ["Un texte support", "Langue, lexique, développement"],
                    variant: "blue",
                  },
                  {
                    title: "Le couperet",
                    lines: ["Une note ≤ 2,5 / 10", "à une seule des deux parties", "et vous êtes éliminé"],
                    variant: "yellow",
                    dashed: true,
                  },
                ],
              },
              {
                type: "subsection",
                number: "①",
                title: "Ce que vous passez, précisément",
                blocks: [
                  {
                    type: "cardGrid",
                    columns: 2,
                    cards: [
                      {
                        title: "Partie Mathématiques",
                        value: "/10",
                        lines: [
                          "Plusieurs exercices ou problèmes indépendants",
                          "Programme du cycle 4",
                          "Une note ≤ 2,5/10 est éliminatoire",
                        ],
                        variant: "info",
                      },
                      {
                        title: "Partie Français",
                        value: "/10",
                        lines: [
                          "Un seul texte, de 500 mots maximum",
                          "Trois phases : langue, lexique, développement",
                          "Une note ≤ 2,5/10 est éliminatoire",
                        ],
                        variant: "neutral",
                      },
                    ],
                  },
                  {
                    type: "table",
                    title: "La carte d'identité de l'épreuve",
                    headers: ["Caractéristique", "Détail"],
                    rows: [
                      ["Durée", "4 heures, français et mathématiques ensemble (environ 2 h par partie)"],
                      ["Coefficient", "5, le plus lourd des épreuves écrites"],
                      ["Notation", "20 points : 10 pour les maths, 10 pour le français"],
                      ["Note éliminatoire", "Une note inférieure ou égale à 2,5/10 à l'une des deux parties élimine, quelle que soit la moyenne"],
                      ["Structure (maths)", "Plusieurs exercices ou problèmes indépendants, mêlant QCM et questions à réponse construite"],
                      ["Calculatrice", "Autorisée, en mode examen (à confirmer sur votre convocation)"],
                      ["Programme", "Le programme de mathématiques du cycle 4 (5e, 4e, 3e)"],
                      ["Cadre officiel", `[Arrêté du 17 avril 2025](${SRC_ARRETE}), première session en avril 2026`],
                    ],
                  },
                  {
                    type: "callout",
                    variant: "danger",
                    icon: "⚠️",
                    title: "La première chose à comprendre",
                    text: "La barre de 2,5/10 tombe séparément sur les maths et sur le français. Un 9/10 en français ne rattrape pas un 2/10 en maths : les deux notes doivent passer la barre. Une partie bâclée, ou laissée à moitié vide faute de temps, peut donc à elle seule vous sortir du concours. Comme les exercices de maths sont indépendants, la parade est simple : en aborder le plus possible, plutôt que d'en perfectionner un seul.",
                  },
                ],
              },
              {
                type: "subsection",
                number: "②",
                title: "Comment le sujet de maths est bâti",
                blocks: [
                  {
                    type: "paragraph",
                    text: "La partie maths réunit plusieurs exercices indépendants qui balaient les cinq thèmes du cycle 4. Deux formats de questions cohabitent : des questions à choix multiples (souvent sans justification demandée) et des questions à réponse construite, où le raisonnement et la rédaction comptent autant que le résultat.",
                  },
                  {
                    type: "cardGrid",
                    columns: 3,
                    cards: [
                      { title: "A · Nombres et calculs", lines: ["Fractions, décimaux, puissances", "Arithmétique, calcul littéral", "Équations"], variant: "info" },
                      { title: "B · Données et fonctions", lines: ["Statistiques, probabilités", "Proportionnalité, pourcentages", "Fonctions affines"], variant: "info" },
                      { title: "C · Grandeurs et mesures", lines: ["Longueurs, aires, volumes", "Conversions, grandeurs composées"], variant: "info" },
                      { title: "D · Espace et géométrie", lines: ["Pythagore, Thalès, trigonométrie", "Transformations, solides, espace"], variant: "info" },
                      { title: "E · Algorithmique", lines: ["Scratch : lire et écrire un script", "Tableur, géométrie dynamique"], variant: "info" },
                      { title: "Problème en contexte", lines: ["Une situation concrète à modéliser", "Plusieurs notions combinées"], variant: "neutral" },
                    ],
                  },
                  {
                    type: "callout",
                    variant: "info",
                    icon: "💡",
                    title: "Deux réflexes de lecture du sujet",
                    text: "Un exercice de Scratch ou de tableur est presque toujours présent, et il se traite souvent vite : ce sont des points accessibles à ne jamais impasser (voir la [notion 27, Algorithmique et Scratch](fiche:algorithmique-scratch-tableur)). Et repérez tout de suite les QCM : une réponse fausse n'enlève pas de point, donc on ne laisse jamais une case vide.",
                  },
                ],
              },
              {
                type: "highlightBox",
                variant: "marine",
                icon: "📄",
                title: "Le sujet zéro, décortiqué",
                blocks: [
                  {
                    type: "paragraph",
                    text: `Le seul [exemple officiellement cadré](${SRC_SUJETS_ZERO}) par le ministère comporte cinq exercices de maths, pour 20 points. Le voici exercice par exercice. Vous verrez que rien ne dépasse le programme du collège, et que chaque exercice mobilise des notions du parcours.`,
                  },
                  {
                    type: "table",
                    headers: ["Exercice", "Ce qui était demandé", "Notions"],
                    rows: [
                      [
                        "1 · 4 pts",
                        "Ranger six nombres dans l'ordre croissant (fractions, décimaux, écritures variées), puis une probabilité simple : on en tire un au hasard, quelle probabilité qu'il soit entier ? décimal ?",
                        "[Fractions et décimaux](fiche:fractions-decimaux), [probabilités](fiche:probabilites)",
                      ],
                      [
                        "2 · 5 pts",
                        "Un problème concret : trois formules tarifaires d'un musée à comparer. Trouver la plus avantageuse selon le nombre de visites, résoudre une inéquation, lire un graphique, puis appliquer une remise de 15 %.",
                        "[Proportionnalité](fiche:proportionnalite-pourcentages), [fonctions affines](fiche:fonctions-lineaires-affines)",
                      ],
                      [
                        "3 · 4 pts",
                        "De la géométrie : un carré de 8 cm avec deux demi-cercles inscrits. Aire du carré, aire exacte de la zone grisée, agrandissement à l'échelle 125 : 1, longueur d'une diagonale (Pythagore), puis un calcul de quantité de peinture.",
                        "[Aires](fiche:perimetres-aires-volumes), [cercle](fiche:cercle), [Pythagore](fiche:theoreme-de-pythagore)",
                      ],
                      [
                        "4 · 3 pts",
                        "De la gestion de données : compléter un tableau à double entrée (filles / garçons, usage des jeux de cour) à partir de pourcentages, puis calculer des proportions.",
                        "[Statistiques](fiche:statistiques-descriptives), pourcentages",
                      ],
                      [
                        "5 · 4 pts",
                        "Un QCM de quatre questions, sans justification : lire un algorithme d'affectations (type Scratch), l'effet d'une réduction sur le volume d'un pavé, une conversion de volume en litres.",
                        "[Algorithmique et Scratch](fiche:algorithmique-scratch-tableur), [volumes](fiche:perimetres-aires-volumes)",
                      ],
                    ],
                  },
                  {
                    type: "paragraph",
                    text: "Ce sont exactement les notions du parcours : proportionnalité, aires et cercle, Pythagore, données, Scratch. Rien d'exotique, mais il faut savoir les mobiliser vite et proprement.",
                  },
                ],
              },
              {
                type: "subsection",
                number: "③",
                title: "On note le raisonnement, pas seulement le résultat",
                blocks: [
                  {
                    type: "paragraph",
                    text: "C'est ce que l'on sous-estime le plus. Le sujet zéro le dit noir sur blanc pour la partie maths : « Il sera tenu compte de la clarté des raisonnements et de la qualité de la rédaction dans l'appréciation des copies. » Sur une question à réponse construite, une réponse juste mais jetée sans démarche ne rapporte pas tous les points ; à l'inverse, une démarche correcte avec une erreur de calcul en récupère souvent une partie.",
                  },
                  {
                    type: "cardGrid",
                    columns: 2,
                    cards: [
                      {
                        title: "Ce qui ne suffit pas",
                        lines: [
                          "Un résultat seul : « AC = 13 cm »",
                          "Un calcul sans propriété nommée",
                          "Un résultat sorti de la calculatrice, sans étape",
                        ],
                        variant: "neutral",
                      },
                      {
                        title: "Ce qu'on attend",
                        lines: [
                          "La propriété citée avant le calcul",
                          "Les étapes posées, lisibles",
                          "Une phrase de conclusion, avec l'unité",
                        ],
                        variant: "success",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    text: "Une réponse construite se rédige comme une mini-démonstration : on annonce, on calcule, on conclut. Les QCM, eux, ne demandent aucune justification (sauf mention contraire) : on y va vite pour dégager du temps.",
                  },
                ],
              },
              {
                type: "highlightBox",
                variant: "marine",
                icon: "📋",
                title: "Ce que le jury regarde sur toute la copie",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Un principe qui traverse tout le concours, maths comprises : la langue est votre premier outil de travail de futur professeur des écoles. On la soigne partout.",
                  },
                  {
                    type: "callout",
                    variant: "info",
                    text: "« Il sera tenu compte de la clarté des raisonnements et de la qualité de la rédaction dans l'appréciation des copies. »",
                  },
                  {
                    type: "paragraph",
                    text: "Autrement dit, une copie de maths brouillonne, avec des notations fausses et des phrases bancales, se pénalise elle-même. On rédige en phrases complètes, on conclut nettement, et on garde du temps pour se relire.",
                  },
                  {
                    type: "paragraph",
                    text: `La session 2026 étant la première du concours bac+3, aucun rapport de jury propre à cette épreuve n'est encore paru : les attendus ci-dessus viennent des [textes officiels](${SRC_EPREUVES}) et du [sujet zéro](${SRC_SUJETS_ZERO}).`,
                  },
                ],
              },
              {
                type: "highlightBox",
                variant: "neutral",
                icon: "🔗",
                title: "Les sources officielles",
                blocks: [
                  {
                    type: "bullets",
                    items: [
                      `[Les épreuves du concours externe bac+3](${SRC_EPREUVES}) — structure, durée, barème, note éliminatoire.`,
                      `[Les sujets zéro (dont la partie maths)](${SRC_SUJETS_ZERO}) — l'exemple cadré par le ministère.`,
                      `[Le programme des épreuves bac+3](${SRC_PROGRAMME}) — le périmètre exact des notions (cycle 4).`,
                      `[Sujets des écrits et rapports des jurys du CRPE](${SRC_RAPPORTS}) — à consulter à mesure qu'ils paraissent.`,
                    ],
                  },
                ],
              },
              {
                type: "ctaBox",
                text: "Vous voyez ce qu'on attend. Passons à comment le réussir.",
                buttonLabel: "Voir les conseils pratiques",
                targetTab: "methode",
              },
            ],
          },
          {
            id: "methode",
            label: "Réussir le jour J",
            icon: "",
            blocks: [
              {
                type: "callout",
                variant: "success",
                icon: "",
                title: "L'état d'esprit",
                text: "Le niveau demandé est celui du collège. La vraie difficulté est ailleurs : tenir 4 heures sur deux matières, sans se laisser dévorer par l'une, sans laisser d'exercice vide. Les meilleures copies ne sont pas les plus savantes. Ce sont les plus complètes et les mieux gérées.",
              },
              {
                type: "rappelExpress",
                title: "À garder devant les yeux",
                blocks: [
                  {
                    type: "formulaBlock",
                    lines: [
                      "Aucune partie vide : 2,5/10 par matière, et c'est éliminé.",
                      "Les exercices sont indépendants : commencer par les plus sûrs.",
                      "On justifie et on rédige chaque réponse construite, même courte.",
                      "On vérifie chaque résultat : ordre de grandeur, unité, signe.",
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
                title: "Les cinq premières minutes",
                intro: "**Avant de calculer, on regarde tout.** Ces cinq minutes-là décident du reste de la journée.",
                steps: [
                  {
                    number: "1",
                    text: "**Parcourir le sujet en entier, maths et français** : repérer ce qui a l'air simple, ce qui risque de coincer, et l'exercice de Scratch ou de tableur. On ne répond pas, on prend la mesure du travail.",
                    example: { lines: ["2 à 3 minutes, le sujet entier sous les yeux"] },
                  },
                  {
                    number: "2",
                    text: "**Repérer les points faciles à prendre tôt** : les QCM, les questions de cours, l'exercice d'algorithmique. On note leur barème s'il est indiqué.",
                    example: { lines: ["Ce sont des points sûrs, à sécuriser en premier"] },
                  },
                  {
                    number: "💡",
                    text: "**Choisir par quelle matière commencer** : on en traite une entièrement, puis l'autre. Commencez par celle qui vous met en confiance, souvent votre point fort. Aucun ordre n'est imposé.",
                    warn: "⚠️ Ne commencez pas par l'exercice le plus dur juste parce qu'il est en premier.",
                  },
                ],
              },
              {
                type: "methodeGroup",
                number: "②",
                title: "Un plan de 4 heures qui tient",
                intro: "**Des repères, à ajuster à votre rythme.** L'idée : deux vraies moitiés, et aucune des deux qui déborde sur l'autre.",
                preBlocks: [
                  {
                    type: "formulaBlock",
                    title: "Comment découper les 4 heures",
                    lines: [
                      "≈ 2 h pour les maths, à placer avant ou après le français :",
                      "  5 min — survol de tous les exercices, repérage des points sûrs.",
                      "  20 min — QCM et questions rapides (Scratch, tableur, cours).",
                      "  75 min — les exercices à réponse construite, du plus sûr au plus dur.",
                      "  20 min — reprise des questions laissées et relecture.",
                      "≈ 2 h pour le français, avec son propre bloc de temps protégé.",
                    ],
                    note: "Ces durées disent le temps à réserver, pas l'ordre dans lequel commencer. Si vous attaquez par le français, gardez ensuite tout le temps prévu pour les maths. Et laissez quelques minutes à la toute fin pour relire résultats, unités et langue.",
                  },
                ],
                steps: [
                  {
                    number: "💡",
                    text: "**En retard ?** Assurez au moins le début de chaque exercice restant : les premières questions sont souvent les plus accessibles.",
                    warn: "⚠️ Quelques questions traitées dans chaque exercice valent mieux qu'un seul exercice complet et les autres vides.",
                  },
                ],
              },
              {
                type: "methodeGroup",
                number: "③",
                title: "Dans les maths : rédiger, justifier, vérifier",
                intro: "**La rédaction fait partie de la note.** Une réponse construite se traite comme une mini-démonstration.",
                steps: [
                  {
                    number: "1",
                    text: "**Annoncer la propriété utilisée** avant de calculer.",
                    example: { lines: ["« D'après le théorème de Pythagore dans le triangle ABC rectangle en A… »"] },
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
                    text: "**Les QCM se traitent à part** : aucune justification n'est demandée, et une réponse fausse n'enlève aucun point. On ne laisse donc jamais une case vide.",
                    warn: "⚠️ Soigner les notations et l'orthographe sur toute la copie : la clarté est évaluée, même en maths.",
                  },
                ],
              },
              {
                type: "highlightBox",
                variant: "neutral",
                icon: "✍️",
                title: "Rédiger pour marquer les points",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Une bonne réponse construite tient en trois gestes : on nomme la propriété, on pose le calcul, on conclut par une phrase avec l'unité. Voici des tournures à reprendre presque telles quelles.",
                  },
                  {
                    type: "table",
                    headers: ["Type de question", "Une réponse qui marque"],
                    rows: [
                      [
                        "Longueur (triangle rectangle)",
                        "« Le triangle ABC est rectangle en A, donc d'après le théorème de Pythagore… ; on en déduit AC = 13 cm. » On nomme, on pose, on conclut. Voir [le théorème de Pythagore](fiche:theoreme-de-pythagore).",
                      ],
                      [
                        "Situation de proportionnalité",
                        "« Les deux grandeurs sont proportionnelles ; le coefficient de proportionnalité est… » On justifie la proportionnalité avant de l'utiliser. Voir [la proportionnalité](fiche:proportionnalite-pourcentages).",
                      ],
                      [
                        "Probabilité",
                        "« Il y a 6 issues équiprobables, dont 2 favorables, donc la probabilité vaut 2/6 = 1/3. » On compte les cas, on conclut par une fraction simplifiée. Voir [les probabilités](fiche:probabilites).",
                      ],
                      [
                        "Aire ou volume",
                        "« L'aire du disque vaut π × r² = … cm². » On écrit la formule, on remplace, on donne l'unité (et la valeur exacte si elle est demandée). Voir [périmètres, aires et volumes](fiche:perimetres-aires-volumes).",
                      ],
                      [
                        "Lecture d'un script Scratch",
                        "« À la fin de la boucle, la variable prend la valeur… car… » On suit le script pas à pas et on justifie le résultat. Voir [algorithmique et Scratch](fiche:algorithmique-scratch-tableur).",
                      ],
                    ],
                  },
                ],
              },
              {
                type: "highlightBox",
                variant: "neutral",
                icon: "✅",
                title: "Vos dernières minutes",
                blocks: [
                  {
                    type: "paragraph",
                    text: "Cette relecture-là rapporte des points sans réviser : on ne refait pas les calculs de zéro, on traque les erreurs qui coûtent cher.",
                  },
                  {
                    type: "bullets",
                    items: [
                      "Les unités : chaque résultat porte-t-il la bonne unité (cm, cm², L…) ?",
                      "L'ordre de grandeur : le résultat est-il plausible (un volume positif, une probabilité entre 0 et 1) ?",
                      "Les QCM : aucune case laissée vide, puisqu'une erreur ne coûte rien.",
                      "Chaque réponse construite : la propriété est-elle nommée, la conclusion rédigée ?",
                      "La langue et les notations : phrases lisibles, symboles corrects.",
                    ],
                  },
                ],
              },
              {
                type: "highlightBox",
                variant: "marine",
                icon: "🎯",
                title: "Si vous ne retenez que trois choses",
                blocks: [
                  {
                    type: "formulaBlock",
                    lines: [
                      "Une copie abordée partout bat une copie brillante à moitié.",
                      "On justifie et on conclut : le raisonnement compte autant que le résultat.",
                      "Quelques minutes de vérification rapportent plus qu'une dernière question grattée.",
                    ],
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
}

export const ficheMethodologieMathematiquesM2 = ficheMethodologie("m2");
export const ficheMethodologieMathematiquesL3 = buildMethodologieL3();
