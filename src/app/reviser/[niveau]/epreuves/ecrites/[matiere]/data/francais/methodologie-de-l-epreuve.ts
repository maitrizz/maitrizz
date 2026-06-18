import type { Fiche } from "@/components/fiche/types";
import type { Niveau } from "@/lib/niveau";

/**
 * Méthodologie de l'épreuve écrite de français (numéro 0, en tête de parcours).
 *
 * Mise en forme des sources "M_methodologie_M2" et "M_methodologie_L3" du dossier
 * contenu. Les deux concours divergent fortement (M2 : épreuve autonome de 3 h ;
 * L3 : épreuve mixte français + maths de 4 h, programme cycle 4 seul) : la fabrique
 * ficheMethodologie(niveau) injecte donc des sections entières propres au niveau.
 *
 * Charte appliquée à la mise en forme : références d'annales précises et statistiques
 * non sourçables retirées ; citations de rapports de jury adoucies (sans année) ;
 * barèmes par partie présentés comme estimations (non officiels), conformément aux
 * sources ; cadres réglementaires conservés (Arrêté du 25 janvier 2021 pour le M2 ;
 * Arrêté du 17 avril 2025 et sujet zéro 2026 pour le L3).
 */

const OBJECTIFS = [
  { id: "me1", label: "Je connais la structure de l'épreuve écrite de français" },
  { id: "me2", label: "Je connais le cadre de mon concours : durée, barème, note éliminatoire, programme" },
  { id: "me3", label: "Je sais ce qu'attend chacune des parties (grammaire, lexique, rédaction)" },
  { id: "me4", label: "Je lis le texte support efficacement avant de répondre" },
  { id: "me5", label: "Je choisis un ordre de traitement adapté à mon profil" },
  { id: "me6", label: "Je répartis mon temps et ne sacrifie jamais la rédaction" },
  { id: "me7", label: "Je soigne la langue sur toute la copie et je relis" },
];

function ficheMethodologie(niveau: Niveau): Fiche {
  const l3 = niveau === "l3";

  return {
    slug: "methodologie-de-l-epreuve",
    matiere: "francais",
    numero: 0,
    partie: "Méthodologie",
    title: "Méthodologie de l'épreuve écrite",
    subtitle: l3
      ? "Comprendre l'épreuve commune français et mathématiques, gérer ses 4 heures et aborder les trois sous-parties de français avec méthode"
      : "Comprendre l'épreuve, gérer ses 3 heures et aborder les trois parties avec méthode",
    badges: [
      { label: "Point de départ du parcours", variant: "hot" },
      {
        label: l3 ? "Épreuve commune français + maths · 4 h" : "Épreuve écrite de français · 3 h",
        variant: "info",
      },
    ],
    metaTitle:
      "Méthodologie de l'épreuve écrite de français (CRPE) · Fiche de révision | Maitrizz",
    metaDescription: l3
      ? "Méthodologie du CRPE L3 : épreuve commune français et mathématiques (4 h), barème, note éliminatoire, trois sous-parties de français (grammaire, lexique, rédaction), programme cycle 4, stratégie et gestion du temps. Conseils, exercices et auto-évaluation."
      : "Méthodologie de l'épreuve écrite de français du CRPE M2 (3 h) : format, barème, les trois parties (étude de la langue, lexique, réflexion rédigée), programme, stratégie et gestion du temps. Conseils, exercices et auto-évaluation.",
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
                  "Avant de commencer, il faut savoir précisément ce que l'on attend de vous. Cette fiche présente le cadre de l'épreuve, les attentes du jury, ainsi que des conseils pour aborder chaque partie, notamment en matière de gestion du temps.",
                items: [
                  {
                    number: "①",
                    title: "L'épreuve et son cadre",
                    text: l3
                      ? "Une épreuve commune français + maths de 4 h, son barème et sa note éliminatoire."
                      : "Une épreuve de français de 3 h, son barème et sa note éliminatoire.",
                  },
                  {
                    number: "②",
                    title: "Les trois parties",
                    text: "Étude de la langue, lexique, rédaction : ce que chacune attend précisément.",
                  },
                  {
                    number: "③",
                    title: "La stratégie",
                    text: "Lire le texte efficacement, choisir un ordre de traitement, soigner la langue partout.",
                  },
                  {
                    number: "④",
                    title: "La gestion du temps",
                    text: "Une répartition réaliste pour ne jamais laisser de partie vide, surtout la rédaction.",
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
                icon: "",
                title: "Avant de commencer",
                text: l3
                  ? "L'épreuve écrite de français du CRPE L3 est intégrée à une épreuve commune de 4 heures qui comprend aussi les mathématiques. Elle évalue la maîtrise disciplinaire de la langue (grammaire, lexique, expression écrite) sur le seul programme de cycle 4. Ce n'est pas une épreuve pédagogique : ni didactique, ni référence aux programmes de l'école."
                  : "L'épreuve écrite de français est une épreuve d'admissibilité du CRPE M2. Elle teste votre maîtrise disciplinaire de la langue (grammaire, lexique, réflexion littéraire). Ce n'est pas une épreuve pédagogique : ni didactique, ni séquences d'enseignement. Comprendre ce qu'on demande dans chaque partie, c'est déjà gagner des points.",
              },
              {
                type: "subsection",
                number: "①",
                title: "Le format de l'épreuve",
                blocks: l3
                  ? [
                      {
                        type: "cardGrid",
                        columns: 2,
                        cards: [
                          {
                            title: "Partie Français",
                            value: "10 pts",
                            lines: [
                              "3 sous-parties : grammaire, lexique, rédaction",
                              "Texte support de 500 mots maximum",
                              "Note inférieure ou égale à 2,5/10 : éliminatoire",
                            ],
                            variant: "info",
                          },
                          {
                            title: "Partie Mathématiques",
                            value: "10 pts",
                            lines: [
                              "Exercices et problèmes",
                              "Programme de cycle 4",
                              "Note inférieure ou égale à 2,5/10 : éliminatoire",
                            ],
                            variant: "neutral",
                          },
                        ],
                      },
                      {
                        type: "table",
                        title: "Format général",
                        headers: ["Caractéristique", "Détail"],
                        rows: [
                          ["Durée totale", "4 heures (français et mathématiques ensemble)"],
                          ["Coefficient", "5 (la plus forte pondération des écrits)"],
                          ["Notation", "20 points au total : 10 points français + 10 points maths, chaque partie ramenée sur 10"],
                          ["Note éliminatoire", "Inférieure ou égale à 2,5/10 sur la partie français ou sur la partie maths : élimine du concours"],
                          ["Texte support (français)", "Extrait de roman, de nouvelle ou d'essai, de 500 mots maximum"],
                          ["Programme de référence", "Programme de français du cycle 4 en vigueur à la rentrée 2025, exclusivement"],
                          ["Cadre réglementaire", "Arrêté du 17 avril 2025 (CRPE externe bac+3, sessions 2026 et suivantes)"],
                        ],
                      },
                      {
                        type: "callout",
                        variant: "warning",
                        icon: "⚠️",
                        title: "Une double note éliminatoire",
                        text: "La note éliminatoire de 2,5/10 est absolue et indépendante pour chaque discipline : une excellente note en maths ne compense pas un français trop faible, et inversement. Les deux parties doivent être traitées sérieusement.",
                      },
                      {
                        type: "table",
                        title: "Ce qui change par rapport au CRPE M2 (pour situer)",
                        headers: ["Critère", "CRPE L3 (vous)", "CRPE M2 (pour information)"],
                        rows: [
                          ["Durée français", "Environ 2 h, dans une épreuve de 4 h", "3 h (épreuve autonome)"],
                          ["Coefficient", "5 (partagé avec les maths)", "1"],
                          ["Points français", "10 points", "20 points"],
                          ["Note éliminatoire", "Inférieure ou égale à 2,5/10", "Inférieure ou égale à 5/20"],
                          ["Programme", "Cycle 4 uniquement", "Cycle 4 et étude de la langue au lycée"],
                          ["Rédaction", "Environ 30 lignes (réponse argumentée sur le texte)", "Environ 40 lignes (réflexion structurée)"],
                        ],
                      },
                      {
                        type: "callout",
                        variant: "info",
                        icon: "💡",
                        title: "Préparez le L3, pas le M2",
                        text: "Ces informations situent simplement votre épreuve. Vous passez le CRPE L3 : préparez-vous sur son programme (cycle 4) et son format, pas sur ceux du M2.",
                      },
                    ]
                  : [
                      {
                        type: "table",
                        title: "Format général",
                        headers: ["Caractéristique", "Détail"],
                        rows: [
                          ["Durée", "3 heures"],
                          ["Notation", "20 points, coefficient 1"],
                          ["Note éliminatoire", "Inférieure ou égale à 5/20 : élimine du concours, quelle que soit la note globale"],
                          ["Texte support", "Extrait littéraire ou d'essai de 400 à 600 mots, inédit, d'une œuvre contemporaine ou patrimoniale"],
                          ["Programme de référence", "Programme de français du cycle 4 et étude de la langue au lycée"],
                          ["Cadre réglementaire", "Arrêté du 25 janvier 2021 (CRPE rénové, sessions 2022 et suivantes)"],
                        ],
                      },
                      {
                        type: "callout",
                        variant: "warning",
                        icon: "⚠️",
                        title: "La note éliminatoire est absolue",
                        text: "Une note inférieure ou égale à 5/20 élimine du concours, quelle que soit la moyenne. Finir l'épreuve est donc une priorité non négociable : mieux vaut une copie complète qu'une partie parfaite et une autre laissée vide.",
                      },
                    ],
              },
              {
                type: "subsection",
                number: "②",
                title: l3 ? "Les trois sous-parties de français" : "Les trois parties",
                blocks: [
                  {
                    type: "cardGrid",
                    columns: 3,
                    cards: l3
                      ? [
                          { title: "1 · Grammaire", value: "~6 pts", lines: ["Nature, fonction", "Modes et temps", "Orthographe grammaticale, accords"], variant: "info" },
                          { title: "2 · Lexique", value: "~4 pts", lines: ["Formation des mots", "Sens contextuel", "Famille de mots, relations sémantiques"], variant: "info" },
                          { title: "3 · Rédaction", value: "~10 pts", lines: ["Développement argumenté", "Environ 30 lignes", "Réponse à une question sur le texte"], variant: "success" },
                        ]
                      : [
                          { title: "1 · Étude de la langue", value: "~8 pts", lines: ["Grammaire, syntaxe", "Orthographe", "Questions précises sur le texte"], variant: "info" },
                          { title: "2 · Lexique", value: "~4 pts", lines: ["Formation des mots", "Sens contextuel", "Figures, registres, relations sémantiques"], variant: "info" },
                          { title: "3 · Réflexion rédigée", value: "~8 pts", lines: ["Développement structuré, argumenté", "Références personnelles", "Culture littéraire"], variant: "success" },
                        ],
                  },
                  {
                    type: "callout",
                    variant: "warning",
                    icon: "⚠️",
                    title: "Un barème estimé, non officiel",
                    text: l3
                      ? "Le barème exact par sous-partie n'est pas communiqué officiellement. Les points indiqués (environ 6, 4 et 10) sont estimés d'après la structure du sujet zéro 2026 et les textes réglementaires : ils peuvent varier."
                      : "Le barème exact par partie n'est pas communiqué officiellement. Les points indiqués (environ 8, 4 et 8) sont une estimation d'après les sujets et les rapports de jury : ils peuvent varier selon les sessions et les groupements.",
                  },
                  {
                    type: "table",
                    title: l3 ? "Sous-partie 1, Grammaire : ce qu'on teste" : "Partie 1, Étude de la langue : ce qu'on teste",
                    headers: ["Type de question", "Ce qu'on attend"],
                    rows: [
                      ["Identifier nature et fonction", "Nommer la classe grammaticale et la fonction dans la phrase, avec justification (voir notions 01 et 02)."],
                      ["Analyser mode et temps d'un verbe", "Nommer le mode et le temps, justifier la valeur en contexte : « est à l'imparfait de l'indicatif, valeur de... »."],
                      ["Analyser une proposition subordonnée", "Nommer la nature (relative, conjonctive...) et la fonction (voir notion 05)."],
                      ["Justifier un accord, une terminaison", "Donner la règle appliquée et les éléments qui commandent l'accord (notions 10-11)."],
                      ["Questions d'orthographe", "Appliquer la règle, distinguer les homophones par un critère de substitution (notion 12)."],
                    ],
                  },
                  {
                    type: "table",
                    title: l3 ? "Sous-partie 2, Lexique : ce qu'on teste" : "Partie 2, Lexique : ce qu'on teste",
                    headers: ["Type de question", "Ce qu'on attend"],
                    rows: l3
                      ? [
                          ["Analyser la formation d'un mot", "Identifier préfixe, suffixe, radical, et expliquer le sens apporté (notion 16)."],
                          ["Donner le sens contextuel", "Expliquer le sens précis dans le contexte, distinguer sens propre et figuré (notion 17)."],
                          ["Synonyme ou antonyme contextuel", "Proposer un terme qui conviendrait dans ce contexte précis, pas un synonyme générique."],
                          ["Construire une famille de mots", "Donner plusieurs mots de la même famille en indiquant leur classe."],
                          ["Identifier un champ lexical", "Relever les termes, nommer le thème, expliquer son rôle dans le texte."],
                        ]
                      : [
                          ["Formation des mots", "Identifier préfixe, suffixe, radical, étymologie, et expliquer le sens apporté (notion 16)."],
                          ["Sens contextuel d'un mot", "Expliquer le sens précis dans le contexte, distinguer sens propre et figuré (notion 17)."],
                          ["Relations sémantiques", "Synonyme, antonyme, hyperonyme, champ lexical, avec justification (notion 17)."],
                          ["Figures de style", "Identifier, nommer et expliquer l'effet produit dans le texte (notion 18)."],
                          ["Registres", "Identifier le registre et le justifier par des indices textuels (notion 18)."],
                        ],
                  },
                  {
                    type: "table",
                    title: l3 ? "Sous-partie 3, Rédaction : la plus importante" : "Partie 3, Réflexion rédigée : ce qu'on teste",
                    headers: ["Élément", "Détail"],
                    rows: l3
                      ? [
                          ["Nature de l'exercice", "Développement argumenté structuré en réponse à une question posée sur le texte. Ni résumé, ni commentaire composé, ni dissertation."],
                          ["Longueur attendue", "Environ 30 lignes. En dessous de 20 lignes, la copie est très pénalisée."],
                          ["Format", "Introduction (contextualiser et annoncer la réponse), développement en paragraphes, conclusion courte. Pas de plan dialectique obligatoire."],
                          ["L'appui sur le texte", "La question porte sur le texte : on s'y réfère, on cite brièvement, on analyse. Le texte est le centre, pas un prétexte."],
                          ["Ce que le jury évalue", "Compréhension du texte, cohérence du raisonnement, structuration, correction de la langue, richesse du vocabulaire."],
                        ]
                      : [
                          ["Nature de l'exercice", "Réflexion personnelle structurée sur une thématique littéraire suscitée par le texte. Pas un résumé, pas un commentaire."],
                          ["Format attendu", "Introduction, développement en parties, conclusion. Environ 40 lignes."],
                          ["Les trois appuis", "1) le texte support (cité et analysé), 2) des lectures personnelles (titre et auteur), 3) une culture générale (arts, histoire, cinéma...)."],
                          ["Ce que le jury évalue", "Qualité du raisonnement, développement des références, maîtrise de la langue, structuration du propos."],
                        ],
                  },
                  {
                    type: "callout",
                    variant: "info",
                    icon: "💡",
                    title: l3 ? "La rédaction L3 répond à une question sur le texte" : "La Partie 3 n'est pas un commentaire",
                    text: l3
                      ? "En L3, la rédaction répond directement à une question portant sur le texte : votre analyse du texte est au centre. Ne transposez pas la méthode du M2, où la Partie 3 est une réflexion plus large. Détail aux notions 19 à 21."
                      : "La Partie 3 est une réflexion personnelle sur une thématique suscitée par le texte, pas un résumé de ce que dit l'auteur. Le texte est un appui parmi d'autres. Détail aux notions 19 à 21.",
                  },
                ],
              },
              {
                type: "subsection",
                number: "③",
                title: "Le programme de référence",
                blocks: l3
                  ? [
                      {
                        type: "paragraph",
                        text: "Le concours L3 s'appuie **exclusivement** sur le programme de français du cycle 4 (5e, 4e, 3e) en vigueur à la rentrée 2025. Le programme de lycée n'est pas au programme de ce concours.",
                      },
                      {
                        type: "table",
                        title: "Programme de cycle 4 à l'écrit",
                        headers: ["Domaine", "Notions concernées"],
                        rows: [
                          ["Grammaire", "Classes et fonctions, phrase simple et complexe, modes et temps, accords (notions 01-11)."],
                          ["Orthographe", "Orthographe grammaticale, participe passé, homophones, accords dans le GN et le GV (notions 10-12)."],
                          ["Lexique", "Formation des mots, familles, sens contextuel, synonymie, antonymie, champs lexicaux (notions 16-17)."],
                          ["Lecture", "Compréhension d'un texte littéraire, repérage d'indices, interprétation."],
                          ["Expression écrite", "Rédaction argumentée, cohérence, structuration, correction de la langue."],
                        ],
                      },
                      {
                        type: "callout",
                        variant: "warning",
                        icon: "⚠️",
                        title: "Ce qui relève du lycée ne tombe pas en L3",
                        text: "La phonologie, l'énonciation avancée, les registres littéraires au sens du lycée et l'étymologie gréco-latine approfondie relèvent du programme de lycée (M2). Ne dispersez pas votre préparation sur ces notions.",
                      },
                    ]
                  : [
                      {
                        type: "paragraph",
                        text: "L'épreuve s'appuie sur deux sources officielles : connaître leur périmètre, c'est connaître le cadre exact des questions.",
                      },
                      {
                        type: "table",
                        title: "Deux sources, deux périmètres",
                        headers: ["Source", "Ce qu'elle couvre", "Parties concernées"],
                        rows: [
                          ["Programme de français du cycle 4", "Étude de la langue, lexique, lecture, questionnements littéraires.", "Parties 1, 2 et 3"],
                          ["Étude de la langue au lycée (2de, 1re)", "Grammaire approfondie, phrase complexe, valeurs des modes et temps, cohérence textuelle, énonciation.", "Partie 1 surtout"],
                        ],
                      },
                      {
                        type: "callout",
                        variant: "warning",
                        icon: "⚠️",
                        title: "Le lycée ajoute des notions",
                        text: "Le programme de lycée ajoute des notions peu abordées au collège : énonciation, cohérence textuelle, étude des registres, système des temps dans le récit. Elles reviennent régulièrement en Partie 1 (voir notions 13-15).",
                      },
                    ],
              },
              {
                type: "piegeCard",
                variant: "rouge",
                title: l3 ? "Piège n°1 · sacrifier la rédaction" : "Piège n°1 · ne pas finir la Partie 3",
                badge: "Erreur la plus coûteuse",
                faux: l3
                  ? "Passer plus d'une heure et demie sur la grammaire et le lexique, et n'avoir que vingt minutes pour la rédaction."
                  : "Passer trop de temps sur les Parties 1 et 2 et ne rédiger que quelques lignes en Partie 3.",
                vrai: l3
                  ? "La rédaction vaut environ la moitié de la note de français. Une rédaction correcte avec des questions un peu incomplètes vaut mieux qu'une grammaire parfaite et une rédaction de cinq lignes."
                  : "La Partie 3 vaut environ un tiers des points. Une copie qui finit la Partie 3 vaut souvent mieux qu'une Partie 1 parfaite et une Partie 3 vierge.",
                methode: "Bloquer dès le départ le temps de la rédaction et s'y tenir.",
              },
              ...(l3
                ? [
                    {
                      type: "piegeCard" as const,
                      variant: "rouge" as const,
                      title: "Piège n°2 · oublier les maths",
                      badge: "Note éliminatoire symétrique",
                      faux: "Se concentrer sur le français et arriver sur les maths en fin de temps.",
                      vrai: "La note inférieure ou égale à 2,5/10 est éliminatoire pour chaque discipline. Même en aimant le français, il faut traiter les maths sérieusement.",
                      methode: "Réserver un bloc de temps suffisant aux maths et ne jamais les laisser de côté.",
                    },
                  ]
                : []),
              {
                type: "piegeCard",
                variant: "orange",
                title: l3 ? "Piège n°3 · appliquer la méthode M2 à la rédaction L3" : "Piège n°2 · traiter la Partie 3 comme un résumé",
                badge: "À corriger",
                faux: l3
                  ? "Rédiger une réflexion personnelle large comme en M2, en oubliant de répondre à la question posée sur le texte."
                  : "Résumer ce que dit l'auteur sans développer de réflexion personnelle.",
                vrai: l3
                  ? "En L3, la question porte sur le texte : la rédaction doit y répondre directement, avec des références précises au texte."
                  : "La Partie 3 est une réflexion sur une thématique suscitée par le texte : le texte est un appui, pas l'objet.",
                methode: "Relire la question de rédaction et vérifier que chaque paragraphe y répond.",
              },
              {
                type: "piegeCard",
                variant: "bleu",
                title: l3 ? "Piège n°4 · répondre sans lire la consigne" : "Piège n°3 · répondre sans relire la question",
                badge: "Perte de points évitable",
                faux: "Identifier la nature d'un mot quand on demandait sa fonction, ou analyser une figure quand on demandait le sens contextuel.",
                vrai: "Chaque question a un verbe de consigne précis (identifier, analyser, justifier, expliquer) : on y répond exactement.",
                methode: "Souligner le verbe de consigne de chaque question avant de répondre.",
              },
              {
                type: "primaireBox",
                title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
                text: "Cette épreuve évalue votre maîtrise de la langue, celle que vous transmettrez. Un futur enseignant qui maîtrise l'orthographe, la grammaire et l'expression écrite est attendu : le jury garde cet horizon en tête à chaque correction.\n\n**Ce que vous devez savoir dire :** « Bien écrire et bien analyser la langue, c'est la base du métier : je ne peux enseigner que ce que je maîtrise solidement moi-même. »",
              },
              {
                type: "ctaBox",
                text: "Cadre bien en tête ? Passez à la méthode et à la gestion du temps.",
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
                icon: "",
                title: "Trois démarches",
                text: "Lire le texte efficacement, choisir un ordre de traitement, répartir son temps. Chacune se termine par un checkpoint.",
              },
              {
                type: "rappelExpress",
                title: "Rappel express : les priorités de l'épreuve",
                blocks: [
                  {
                    type: "formulaBlock",
                    lines: l3
                      ? [
                          "Ne jamais laisser une partie vide : la note de 2,5/10 par discipline est éliminatoire.",
                          "La rédaction vaut environ la moitié de la note de français : ne pas la sacrifier.",
                          "La langue est évaluée sur toute la copie : on garde du temps pour relire.",
                        ]
                      : [
                          "Ne jamais laisser une partie vide : la note de 5/20 est éliminatoire.",
                          "Chaque partie vaut environ un tiers des points : on les équilibre.",
                          "La langue est évaluée sur toute la copie : on garde du temps pour relire.",
                        ],
                  },
                  {
                    type: "callout",
                    variant: "warning",
                    text: "⚠️ Les réponses se rédigent en phrases complètes, même en grammaire et en lexique : un mot seul, sans justification, ne rapporte pas tous les points.",
                  },
                ],
              },
              {
                type: "methodeGroup",
                number: "①",
                title: "Lire le texte efficacement",
                intro: "**Les premières minutes comptent :** une lecture active fait gagner du temps sur toute la copie.",
                steps: [
                  {
                    number: "1",
                    text: "**Première lecture globale** : comprendre le sens, identifier le genre et le registre, repérer la structure.",
                    example: { lines: ["3 à 5 minutes, sans tout annoter"] },
                  },
                  {
                    number: "2",
                    text: "**Lire toutes les questions avant de relire** : savoir ce qu'on cherche, souligner le verbe de consigne de chacune.",
                    example: { lines: ["identifier, analyser, justifier, expliquer..."] },
                  },
                  {
                    number: "💡",
                    text: l3
                      ? "**Repérer tout de suite la question de rédaction** : elle mûrit pendant qu'on traite la grammaire et le lexique."
                      : "**Identifier dès le départ la thématique de la Partie 3** : elle active la mémoire culturelle en parallèle.",
                    warn: "⚠️ Annoter seulement ce qui est demandé, pas tout le texte.",
                  },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                title: "Checkpoint : à vous de jouer",
                badge: "30 secondes",
                question: "Pourquoi lire toutes les questions avant de relire le texte en détail ?",
                correction: [
                  { type: "line", text: "Pour **savoir ce qu'on cherche** : on annote alors uniquement ce qui sert les questions, au lieu de perdre du temps à tout souligner." },
                  { type: "note", text: "Lecture active comprise ? Sinon, revoyez l'étape ①." },
                ],
              },
              {
                type: "methodeGroup",
                number: "②",
                title: l3 ? "Choisir l'ordre des deux disciplines" : "Choisir l'ordre des parties",
                intro: "**Il n'y a pas d'ordre imposé.** Deux stratégies, selon votre profil.",
                steps: [
                  {
                    number: "1",
                    text: l3
                      ? "**Ordre conseillé** : tout le français (sous-parties 1, 2 puis 3), puis les maths. La lecture du texte nourrit la rédaction, et finir le français en bloc évite de perdre le fil."
                      : "**Ordre naturel** : Partie 1, puis 2, puis 3. La lecture approfondie du texte pour les deux premières parties nourrit la troisième.",
                    example: { lines: [l3 ? "Français en bloc, puis maths" : "Partie 1 → Partie 2 → Partie 3"] },
                  },
                  {
                    number: "2",
                    text: l3
                      ? "**Points forts d'abord** : les maths d'abord pour les candidats très à l'aise, qui sécurisent ces points avant de se concentrer sur la rédaction."
                      : "**Partie 3 d'abord** : pour les candidats plus solides en culture littéraire qu'en grammaire, afin de rédiger l'esprit frais.",
                    example: { lines: [l3 ? "Maths, puis français" : "Partie 3 → Partie 1 → Partie 2"] },
                  },
                  {
                    number: "💡",
                    text: "**Quel que soit l'ordre choisi**, ne laisser aucune partie vide et garder le temps prévu pour la rédaction.",
                    warn: "⚠️ Une partie non traitée coûte cher et peut faire basculer sous la barre éliminatoire.",
                  },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                title: "Checkpoint : à vous de jouer",
                badge: "30 secondes",
                question: l3
                  ? "Vous êtes plus à l'aise en maths qu'en rédaction. Quel ordre choisir, sans piège ?"
                  : "Vous êtes plus à l'aise en culture littéraire qu'en grammaire. Quel ordre est possible ?",
                correction: [
                  { type: "line", text: l3
                    ? "Commencer par les **maths** pour sécuriser ces points, puis le français, sans jamais rogner sur le temps de la rédaction (la moitié de la note de français)."
                    : "Commencer par la **Partie 3** pour rédiger l'esprit frais, puis les Parties 1 et 2, en respectant les durées prévues." },
                  { type: "note", text: "Stratégie claire ? Direction le dernier checkpoint." },
                ],
              },
              {
                type: "methodeGroup",
                number: "③",
                title: l3 ? "Répartir ses 4 heures" : "Répartir ses 3 heures",
                intro: "**Repères indicatifs**, à ajuster selon votre profil. L'essentiel : ne jamais sacrifier la rédaction.",
                preBlocks: [
                  {
                    type: "formulaBlock",
                    title: l3 ? "Répartition recommandée sur 4 heures" : "Répartition recommandée sur 3 heures",
                    lines: l3
                      ? [
                          "0 h 00 à 0 h 10 (10 min) : lecture active du texte et de toutes les questions.",
                          "0 h 10 à 0 h 55 (45 min) : sous-partie 1, grammaire.",
                          "0 h 55 à 1 h 20 (25 min) : sous-partie 2, lexique.",
                          "1 h 20 à 2 h 10 (50 min) : sous-partie 3, rédaction (5 min de plan, 40 min de rédaction, 5 min de relecture).",
                          "2 h 10 à 3 h 45 (95 min) : mathématiques.",
                          "3 h 45 à 4 h 00 (15 min) : relecture globale des deux parties.",
                        ]
                      : [
                          "0 h 00 à 0 h 10 (10 min) : lecture active du texte et survol des questions.",
                          "0 h 10 à 1 h 10 (60 min) : Partie 1, étude de la langue.",
                          "1 h 10 à 1 h 40 (30 min) : Partie 2, lexique.",
                          "1 h 40 à 2 h 45 (65 min) : Partie 3, réflexion rédigée (5 min de plan, 50 min de rédaction, 10 min de relecture).",
                          "2 h 45 à 3 h 00 (15 min) : relecture globale.",
                        ],
                    note: "Ces repères supposent un traitement dans l'ordre proposé. Si vous changez l'ordre, conservez les mêmes durées totales par partie.",
                  },
                ],
                steps: [
                  {
                    number: "1",
                    text: "**Bloquer le temps de la rédaction d'abord**, puis répartir le reste : c'est la partie à ne jamais sacrifier.",
                  },
                  {
                    number: "💡",
                    text: "**Si vous êtes en retard** : arrêter la partie en cours, passer à la rédaction, viser une introduction, une ou deux parties et une conclusion courte.",
                    warn: "⚠️ Même quelques lignes rédigées valent mieux qu'une partie vierge : elles évitent la zone éliminatoire.",
                  },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                title: "Checkpoint : à vous de jouer",
                badge: "30 secondes",
                question: l3
                  ? "À 1 h 20 de la fin, vous n'avez pas commencé la rédaction. Que faire ?"
                  : "À 30 minutes de la fin, vous n'avez pas commencé la Partie 3. Que faire ?",
                correction: [
                  { type: "line", text: "Arrêter la partie en cours, passer immédiatement à la rédaction avec un plan minimal (deux idées), et viser une introduction, un ou deux paragraphes et une conclusion courte. Une rédaction partielle vaut bien mieux que rien." },
                  { type: "note", text: "Méthode bien en tête ? Direction le Quiz éclair." },
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
                icon: "",
                title: "Avant de passer aux exercices",
                text: "7 questions rapides pour vérifier que le cadre et la stratégie sont bien en tête. Le détail objectif par objectif est dans l'onglet Auto-évaluation.",
              },
              {
                type: "quizBlock",
                questions: [
                  {
                    objectifId: "me1",
                    question: l3
                      ? "La partie français du CRPE L3 comporte :"
                      : "L'épreuve écrite de français du CRPE M2 comporte :",
                    options: l3
                      ? ["une seule partie", "trois sous-parties : grammaire, lexique, rédaction", "deux parties", "uniquement une rédaction"]
                      : ["une seule partie", "trois parties : étude de la langue, lexique, réflexion rédigée", "deux parties", "uniquement une dictée"],
                    correctIndex: 1,
                    explanation: "Trois parties ancrées dans le même texte support : étude de la langue, lexique, rédaction.",
                  },
                  {
                    objectifId: "me2",
                    question: l3
                      ? "Quelle note est éliminatoire en L3 ?"
                      : "Quelle note est éliminatoire en M2 ?",
                    options: l3
                      ? ["une note inférieure ou égale à 2,5/10 sur le français ou les maths", "seulement une moyenne sous 10", "aucune", "une note sous 8/10"]
                      : ["une note inférieure ou égale à 5/20", "seulement une moyenne sous 10", "aucune", "une note sous 8/20"],
                    correctIndex: 0,
                    explanation: l3
                      ? "La note de 2,5/10 est éliminatoire pour chaque discipline, indépendamment de l'autre."
                      : "Une note inférieure ou égale à 5/20 élimine du concours, quelle que soit la moyenne.",
                  },
                  {
                    objectifId: "me3",
                    question: "Une réponse de grammaire réduite à un seul mot, sans justification :",
                    options: ["rapporte tous les points", "ne rapporte pas tous les points", "est recommandée pour gagner du temps", "suffit toujours"],
                    correctIndex: 1,
                    explanation: "Les réponses se rédigent en phrases complètes, avec justification, même en grammaire et en lexique.",
                  },
                  {
                    objectifId: "me4",
                    question: "Avant de répondre, la bonne première étape est :",
                    options: ["répondre dans l'ordre sans lire le texte", "lire le texte puis toutes les questions, en soulignant les verbes de consigne", "annoter tout le texte en détail", "commencer par la rédaction sans plan"],
                    correctIndex: 1,
                    explanation: "Une lecture active (texte puis questions, verbes de consigne soulignés) oriente tout le travail.",
                  },
                  {
                    objectifId: "me5",
                    question: l3 ? "L'ordre de traitement des deux disciplines est :" : "L'ordre de traitement des parties est :",
                    options: ["imposé par le sujet", "libre : à choisir selon son profil, sans laisser de partie vide", "toujours la rédaction en dernier obligatoirement", "sans importance, on improvise"],
                    correctIndex: 1,
                    explanation: "Aucun ordre n'est imposé : on choisit selon ses points forts, en ne laissant jamais de partie vide.",
                  },
                  {
                    objectifId: "me6",
                    question: "La rédaction doit être :",
                    options: ["traitée seulement s'il reste du temps", "protégée par un temps réservé dès le départ", "réduite à quelques lignes", "remplacée par un résumé"],
                    correctIndex: 1,
                    explanation: l3
                      ? "La rédaction vaut environ la moitié de la note de français : on lui réserve son temps."
                      : "La Partie 3 vaut autant que la Partie 1 : on ne la sacrifie pas.",
                  },
                  {
                    objectifId: "me7",
                    question: "La qualité de la langue est évaluée :",
                    options: ["seulement dans la rédaction", "sur toute la copie", "nulle part", "seulement en grammaire"],
                    correctIndex: 1,
                    explanation: "Orthographe, syntaxe, ponctuation et lisibilité comptent sur l'ensemble de la copie : on garde du temps pour relire.",
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
                text: "Progression en 3 niveaux. Corrigez chaque exercice avant de passer au suivant.",
              },
              {
                type: "niveauBanner",
                level: "echauffement",
                stars: "★☆☆",
                label: "Niveau 1 : Connaître le cadre",
                sub: "Format, barème, note éliminatoire",
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "echauffement",
                title: "Exercice 1 : Le cadre de mon épreuve",
                objectifTag: "Cadre",
                question: l3
                  ? "Donnez : a) la durée totale de l'épreuve · b) le nombre de points de la partie français · c) la note éliminatoire · d) le programme de référence."
                  : "Donnez : a) la durée de l'épreuve · b) la notation et le coefficient · c) la note éliminatoire · d) le programme de référence.",
                correction: [
                  { type: "line", text: l3
                    ? "a) 4 heures (français et maths) · b) 10 points · c) une note inférieure ou égale à 2,5/10 sur l'une des deux parties · d) le programme de cycle 4 uniquement."
                    : "a) 3 heures · b) 20 points, coefficient 1 · c) une note inférieure ou égale à 5/20 · d) le cycle 4 et l'étude de la langue au lycée." },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "echauffement",
                title: "Exercice 2 : À quelle partie ?",
                objectifTag: "Les parties",
                question:
                  "À quelle partie rattacher chaque tâche ?\na) justifier l'accord d'un participe passé · b) donner le sens contextuel d'un mot · c) répondre à une question par un développement argumenté",
                correction: [
                  { type: "line", text: "a) grammaire (étude de la langue) · b) lexique · c) rédaction (Partie 3)." },
                ],
              },
              {
                type: "niveauBanner",
                level: "n2",
                stars: "★★☆",
                label: "Niveau 2 : Stratégie et temps",
                sub: "Ordre, répartition, priorités",
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "n2",
                title: "Exercice 3 : Répartir le temps",
                enonce: l3
                  ? "Vous traitez le français avant les maths."
                  : "Vous traitez les parties dans l'ordre naturel.",
                question: l3
                  ? "Proposez une répartition réaliste de vos 4 heures (lecture, grammaire, lexique, rédaction, maths, relecture)."
                  : "Proposez une répartition réaliste de vos 3 heures (lecture, P1, P2, P3, relecture).",
                correction: [
                  { type: "line", text: l3
                    ? "Par exemple : 10 min de lecture, 45 min de grammaire, 25 min de lexique, 50 min de rédaction, 95 min de maths, 15 min de relecture."
                    : "Par exemple : 10 min de lecture, 60 min de Partie 1, 30 min de Partie 2, 65 min de Partie 3, 15 min de relecture." },
                  { type: "line", text: "L'essentiel est de réserver le temps de la rédaction et de prévoir une relecture finale." },
                ],
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "n2",
                title: "Exercice 4 : Que corriger dans cette réponse ?",
                enonce: "Réponse d'un candidat à une question de grammaire : « COD, imparfait, adjectif. »",
                question: "Quel est le défaut, et que faut-il faire ?",
                correction: [
                  { type: "line", text: "C'est une **liste de mots sans phrase ni justification** : elle ne rapporte pas tous les points. Il faut rédiger en phrases complètes, nommer précisément et justifier en s'appuyant sur le texte." },
                ],
              },
              {
                type: "niveauBanner",
                level: "n3",
                stars: "★★★",
                label: "Niveau 3 : Gérer l'imprévu",
                sub: "Retard, priorités, note éliminatoire",
              },
              {
                type: "exerciceCard",
                variant: "standard",
                level: "n3",
                title: "Exercice 5 : Protocole d'urgence",
                enonce: l3
                  ? "À 1 h 20 de la fin, ni la rédaction ni les maths ne sont assez avancées."
                  : "À 30 minutes de la fin, la Partie 3 n'est pas commencée.",
                question: "Quelles priorités vous fixez-vous, et pourquoi ?",
                correction: [
                  { type: "line", text: l3
                    ? "Sécuriser d'abord de quoi éviter les deux notes éliminatoires : une rédaction structurée même courte (introduction, un ou deux paragraphes, conclusion) et quelques exercices de maths avec la démarche posée."
                    : "Arrêter la partie en cours et rédiger une Partie 3 même partielle : introduction, au moins une partie, conclusion courte." },
                  { type: "line", text: "Raison : une partie vierge coûte le plus cher et peut faire basculer sous la barre éliminatoire." },
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
                icon: "",
                text: l3
                  ? "Voici l'architecture de la partie français, calquée sur le sujet zéro officiel publié pour la session 2026."
                  : "Voici l'architecture type de l'épreuve, conforme au format officiel.",
              },
              {
                type: "exerciceCard",
                variant: "annale",
                badge: l3 ? "✦ D'après le sujet zéro 2026" : "✦ Format identique au concours",
                title: l3 ? "Architecture de la partie français" : "Architecture de l'épreuve",
                enonce: l3
                  ? "Un texte support (extrait de roman, de nouvelle ou d'essai, 500 mots maximum), suivi de trois sous-parties."
                  : "Un texte support (400 à 600 mots), suivi de trois parties.",
                question: "Reconstituez la structure et le rôle de chaque partie.",
                correction: [
                  { type: "table",
                    headers: ["Partie", "Nature", "Points (estimation)"],
                    rows: l3
                      ? [
                          ["1 · Grammaire", "Nature et fonction, formes verbales, subordonnées, accords", "~6 pts"],
                          ["2 · Lexique", "Formation d'un mot, sens contextuel, famille, synonymes/antonymes", "~4 pts"],
                          ["3 · Rédaction", "Développement argumenté en réponse à une question sur le texte (~30 lignes)", "~10 pts"],
                        ]
                      : [
                          ["1 · Étude de la langue", "Grammaire, syntaxe, orthographe, sur le texte", "~8 pts"],
                          ["2 · Lexique", "Formation, sens, figures, registres", "~4 pts"],
                          ["3 · Réflexion rédigée", "Réflexion structurée avec appuis (texte, lectures, culture)", "~8 pts"],
                        ],
                  },
                  { type: "note", text: l3
                    ? "Le sujet zéro confirme que la rédaction représente environ la moitié de la note de français : c'est la sous-partie la plus importante."
                    : "Les barèmes par partie ne sont pas officiels : ces points sont une estimation." },
                ],
              },
              {
                type: "exerciceCard",
                variant: "crpe",
                title: "S'entraîner en conditions réelles",
                enonce: l3
                  ? "Le sujet zéro officiel 2026 est disponible sur devenirenseignant.gouv.fr."
                  : "Des sujets et rapports de jury sont disponibles sur devenirenseignant.gouv.fr et les sites des rectorats.",
                question: "Comment s'entraîner utilement avant le concours ?",
                correction: [
                  { type: "line", text: l3
                    ? "Faire le sujet zéro en 4 heures chrono au moins une fois, s'entraîner séparément sur la rédaction (environ 50 minutes), se corriger en vérifiant l'ancrage dans le texte et la langue, et cibler les notions faibles (01 à 18)."
                    : "Faire au moins deux ou trois sujets complets en 3 heures chrono, se corriger à l'aide des rapports de jury, identifier ses points faibles et cibler les notions correspondantes (01 à 21)." },
                  { type: "note", text: "La gestion du temps ne s'improvise pas : elle s'automatise par l'entraînement." },
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
                icon: "",
                text: "Ces situations reproduisent des **erreurs fréquentes** repérées dans les rapports de jury. Savoir ce qui pénalise, c'est savoir l'éviter.",
              },
              {
                type: "exerciceCard",
                variant: "err-type",
                title: "Erreur 1 · La copie inachevée",
                enonce: l3
                  ? "Un candidat soigne la grammaire et le lexique, puis n'écrit que cinq lignes de rédaction faute de temps."
                  : "Un candidat soigne les Parties 1 et 2, puis n'écrit que quelques lignes en Partie 3.",
                question: "Pourquoi est-ce coûteux, et comment l'éviter ?",
                correction: [
                  {
                    type: "checklist",
                    items: [
                      { text: l3 ? "La rédaction vaut environ la moitié de la note de français : la bâcler coûte très cher" : "La Partie 3 vaut environ un tiers des points : la bâcler coûte très cher", bad: true },
                      { text: "Une partie quasi vierge peut faire approcher la note éliminatoire" },
                      { text: "À faire : réserver le temps de la rédaction dès le départ et s'y tenir" },
                    ],
                  },
                ],
              },
              {
                type: "exerciceCard",
                variant: "err-type",
                title: "Erreur 2 · La réponse non rédigée",
                enonce: "Un candidat répond aux questions de langue par des listes : « passé simple, COD, subordonnée ».",
                question: "Identifiez et corrigez le défaut.",
                correction: [
                  {
                    type: "checklist",
                    items: [
                      { text: "Une liste de mots sans phrase ni justification ne rapporte pas tous les points", bad: true },
                      { text: "Le jury attend des réponses rédigées et justifiées, même pour identifier une nature" },
                      { text: "À faire : nommer précisément, justifier, et ancrer la réponse dans le texte" },
                    ],
                  },
                ],
              },
              {
                type: "exerciceCard",
                variant: "err-type",
                title: l3 ? "Erreur 3 · La méthode M2 plaquée sur le L3" : "Erreur 3 · La Partie 3 traitée comme un résumé",
                enonce: l3
                  ? "Un candidat rédige une réflexion personnelle large et oublie de répondre à la question posée sur le texte."
                  : "Un candidat résume le texte au lieu de développer une réflexion personnelle.",
                question: "Identifiez et corrigez le défaut.",
                correction: [
                  {
                    type: "checklist",
                    items: [
                      { text: l3 ? "En L3, la rédaction répond à une question sur le texte : la réflexion large hors-sujet est pénalisée" : "La Partie 3 n'est pas un résumé : paraphraser le texte ne construit aucune réflexion", bad: true },
                      { text: l3 ? "Le texte est le centre de la réponse, pas un prétexte" : "Le texte est un appui de la réflexion, pas l'objet à résumer" },
                      { text: "À faire : relire la consigne et vérifier que chaque paragraphe y répond (notions 19-21)" },
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
            id: "flash",
            label: "Flashcards",
            icon: "",
            blocks: [
              {
                type: "callout",
                variant: "info",
                icon: "",
                text: "Cliquez sur chaque carte pour révéler la réponse. Essayez de répondre dans votre tête avant.",
              },
              {
                type: "flashcardDeck",
                cards: [
                  {
                    question: l3 ? "Quel est le cadre de l'épreuve (L3) ?" : "Quel est le cadre de l'épreuve (M2) ?",
                    answer: l3
                      ? "Épreuve commune français + maths, **4 heures**, 10 points par discipline, coefficient 5. Note inférieure ou égale à **2,5/10** par partie : éliminatoire."
                      : "Épreuve de français, **3 heures**, 20 points, coefficient 1. Note inférieure ou égale à **5/20** : éliminatoire.",
                    astuce: "⚠️ Ne jamais laisser une partie vide : finir l'épreuve est prioritaire.",
                  },
                  {
                    question: "Quelles sont les trois parties de français ?",
                    answer:
                      "1) **Étude de la langue** (grammaire) · 2) **Lexique** · 3) **Rédaction**, toutes ancrées dans le même texte support.",
                    astuce: "💡 Chaque réponse s'appuie sur le texte.",
                  },
                  {
                    question: l3 ? "Sur quel programme porte le L3 ?" : "Sur quel programme porte le M2 ?",
                    answer: l3
                      ? "Le programme de **cycle 4 uniquement**. La phonologie, l'énonciation avancée et les registres au sens du lycée n'y sont pas."
                      : "Le **cycle 4** et l'**étude de la langue au lycée** (énonciation, cohérence textuelle, registres, système des temps).",
                  },
                  {
                    question: "Comment lire le texte efficacement ?",
                    answer:
                      "Une lecture globale, puis la lecture de **toutes les questions** (verbes de consigne soulignés) avant de relire et d'annoter seulement l'utile.",
                    astuce: "💡 Repérer tôt la question de rédaction pour la laisser mûrir.",
                  },
                  {
                    question: "Quelle est la priorité dans la gestion du temps ?",
                    answer:
                      "Réserver le temps de la **rédaction** dès le départ : c'est la partie la plus lourde et celle qu'on sacrifie le plus souvent à tort.",
                    astuce: "⚠️ Même quelques lignes valent mieux qu'une partie vide.",
                  },
                  {
                    question: "Où la qualité de la langue est-elle évaluée ?",
                    answer:
                      "Sur **toute la copie** : orthographe, accords, ponctuation, lisibilité, y compris dans les réponses de grammaire et de lexique.",
                    astuce: "💡 Garder les dernières minutes pour relire.",
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
                type: "mindmapLite",
                center: { title: "L'épreuve", subtitle: l3 ? "écrite (L3)" : "écrite (M2)" },
                branches: [
                  {
                    title: "Cadre",
                    lines: l3
                      ? ["4 h, français + maths", "10 pts français, coeff. 5", "Éliminatoire : 2,5/10", "Cycle 4 uniquement"]
                      : ["3 h, 20 pts, coeff. 1", "Éliminatoire : 5/20", "Cycle 4 + lycée"],
                    variant: "blue",
                  },
                  {
                    title: "Trois parties",
                    lines: ["Grammaire", "Lexique", "Rédaction"],
                    variant: "green",
                  },
                  {
                    title: "Stratégie",
                    lines: ["Lire texte puis questions", "Ordre libre selon profil", "Langue soignée partout"],
                    variant: "green",
                  },
                  {
                    title: "Pièges classiques",
                    lines: ["Sacrifier la rédaction", "Réponses non rédigées", "Répondre sans lire la consigne"],
                    variant: "yellow",
                  },
                  {
                    title: "Renvois",
                    lines: ["Grammaire et lexique : notions 01-18", "Partie 3 : notions 19-21"],
                    variant: "purple",
                    dashed: true,
                  },
                ],
              },
            ],
          },
          {
            id: "autoeval",
            label: "Auto-évaluation",
            icon: "",
            blocks: [{ type: "autoEvalChecklist", items: OBJECTIFS }],
          },
        ],
      },
    ],
  };
}

export const ficheMethodologieL3 = ficheMethodologie("l3");
export const ficheMethodologieM2 = ficheMethodologie("m2");
