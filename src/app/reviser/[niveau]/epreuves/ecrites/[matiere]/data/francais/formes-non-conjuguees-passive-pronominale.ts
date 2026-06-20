import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "fv1", label: "J'identifie précisément une forme verbale non conjuguée" },
  { id: "fv2", label: "J'analyse sa construction : avec « en », avec un auxiliaire ou avec un sujet propre" },
  { id: "fv3", label: "Je détermine sa fonction dans la phrase" },
  { id: "fv4", label: "Je distingue une forme isolée du noyau d'une subordonnée infinitive ou participiale" },
  { id: "fv5", label: "Je rédige une réponse complète en donnant la nature, la construction et la fonction" },
];

export const ficheFormesNonConjugueesPassivePronominale: Fiche = {
  slug: "formes-non-conjuguees-passive-pronominale",
  matiere: "francais",
  numero: 9,
  partie: "Partie 1 : Le verbe",
  title: "Infinitif, participes et gérondif",
  subtitle:
    "Analyser une forme verbale non conjuguée dans une phrase",
  badges: [
    { label: "★★ Fréquent", variant: "hot" },
    { label: "Cycle 3-4 · BOEN n°1 du 22 janvier 2019", variant: "info" },
  ],
  metaTitle: "Infinitif, participes et gérondif (CRPE) · Fiche | Maitrizz",
  metaDescription:
    "Fiche CRPE sur l'analyse des formes non conjuguées du verbe : infinitif, participe présent, gérondif et participe passé, avec la distinction de l'adjectif verbal.",
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
              title: "L'analyse attendue au concours",
              items: [
                {
                  number: "①",
                  title: "Identifier la forme",
                  text: "Infinitif, participe présent, gérondif ou participe passé.",
                },
                {
                  number: "②",
                  title: "Observer sa construction",
                  text: "Avec « en », avec un auxiliaire ou avec un sujet propre.",
                },
                {
                  number: "③",
                  title: "Déterminer sa fonction",
                  text: "Sujet, complément, épithète ou complément circonstanciel.",
                },
                {
                  number: "④",
                  title: "Rédiger la réponse",
                  text: "Relier la nature, la construction et la fonction dans une réponse justifiée.",
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
              title: "L'objectif de la fiche",
              text: "Un même verbe peut être conjugué (« il écoute ») ou prendre une forme non conjuguée (« écouter », « écoutant », « en écoutant », « écouté »). Cette fiche porte sur ces formes non conjuguées. Au concours, il faut les identifier et déterminer leur fonction dans la phrase.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Les quatre formes à reconnaître",
              blocks: [
                {
                  type: "paragraph",
                  text: "Une forme non conjuguée ne varie pas selon la personne. Voici les quatre réponses possibles lorsque le jury demande sa nature.",
                },
                {
                  type: "table",
                  headers: ["Nature", "Forme du verbe « écouter »", "Indice"],
                  rows: [
                    ["Infinitif", "**écouter**", "Forme du dictionnaire, souvent en -er, -ir, -re ou -oir"],
                    ["Participe présent", "**écoutant**", "Forme en -ant, invariable"],
                    ["Gérondif", "**en écoutant**", "« en » + participe présent"],
                    ["Participe passé", "**écouté**", "Forme souvent en -é, -i, -u, -is ou -it"],
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "À quoi servent-elles dans la phrase ?",
              blocks: [
                {
                  type: "paragraph",
                  text: "Après avoir nommé la forme, observez son rôle. Chaque forme exerce certaines fonctions de manière fréquente.",
                },
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "L'infinitif",
                      definition: "Le groupe infinitif peut occuper les mêmes fonctions qu'un groupe nominal ou qu'un groupe prépositionnel.",
                      sousClasses: "**Fonctions possibles :** sujet ; attribut du sujet ; apposition ; COD ; COI ; complément du nom ; complément de l'adjectif ; complément circonstanciel de temps, de cause, de but, de manière, de condition ou d'opposition.",
                      exemples: [
                        "« **Lire** développe l'imagination. » : sujet de « développe »",
                        "« Elle aime **lire**. » : COD de « aime »",
                        "« Il vient **pour apprendre**. » : complément circonstanciel de but",
                      ],
                      test: "Chercher le verbe ou le mot dont dépend le groupe infinitif.",
                    },
                    {
                      title: "Le participe présent",
                      definition: "Il se rapporte généralement à un nom et conserve un fonctionnement verbal.",
                      sousClasses: "**Fonctions possibles :** épithète liée ; épithète détachée ; attribut du COD. Une épithète détachée peut aussi exprimer une valeur circonstancielle de temps, de cause, de condition ou d'opposition.",
                      exemples: [
                        "« Les candidats **résidant à Paris** recevront une convocation. » : épithète liée du nom « candidats »",
                        "« Une élève, **préparant son exposé**, prend des notes. » : épithète détachée du nom « élève »",
                        "« Je les ai vus **traversant la rue**. » : attribut du COD « les »",
                      ],
                      test: "Repérer le nom auquel il se rapporte.",
                    },
                    {
                      title: "Le gérondif",
                      definition: "Le groupe gérondif complète le verbe et exprime une circonstance.",
                      sousClasses: "**Fonction :** complément circonstanciel. **Valeurs possibles :** temps, manière, moyen, cause, condition, opposition ou concession.",
                      exemples: [
                        "« Il apprend **en répétant**. » : complément circonstanciel de manière",
                        "« **En sortant**, elle le salua. » : complément circonstanciel de temps",
                      ],
                      test: "Demander quelle circonstance il exprime : temps, manière, cause ou condition.",
                    },
                    {
                      title: "Le participe passé employé seul",
                      definition: "Il se rapporte généralement à un nom et peut exercer une fonction adjectivale.",
                      sousClasses: "**Fonctions possibles :** épithète liée ; épithète détachée ; attribut du sujet ; attribut du COD.",
                      exemples: [
                        "« une porte **fermée** » : épithète liée du nom « porte »",
                        "« **Étonnée**, elle se tut. » : épithète détachée du pronom « elle »",
                        "« La porte reste **fermée**. » : attribut du sujet « porte »",
                        "« Je trouve cette décision **injustifiée**. » : attribut du COD « décision »",
                      ],
                      test: "Repérer le nom ou le pronom auquel il se rapporte.",
                    },
                  ],
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Trois vérifications avant de répondre",
              blocks: [
                {
                  type: "notionCardGrid",
                  columns: 2,
                  cards: [
                    {
                      title: "1. Y a-t-il « en » ?",
                      definition: "Devant une forme en -ant, « en » signale le gérondif.",
                      exemples: ["« **en chantant** » : gérondif"],
                    },
                    {
                      title: "2. Y a-t-il un auxiliaire ?",
                      definition: "Avec « avoir » ou « être », le participe passé entre dans une forme verbale composée.",
                      exemples: ["« Elle **a fermé** la porte. » : passé composé de « fermer »"],
                    },
                    {
                      title: "3. Y a-t-il un sujet propre ?",
                      definition: "Un infinitif ou un participe ayant son propre sujet peut être le noyau d'une proposition subordonnée.",
                      exemples: [
                        "« J'entends **les enfants chanter**. » : subordonnée infinitive",
                        "« **Le rideau levé**, le spectacle commence. » : subordonnée participiale",
                      ],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "Le sujet propre est le critère décisif",
                  text: "Dans « Une femme passe, tenant un livre », « tenant » est un participe présent qui se rapporte à « une femme », sujet de « passe ». Comme il n'a pas de sujet propre, « tenant un livre » n'est pas une proposition subordonnée participiale. Le groupe est épithète détachée du nom « femme ».",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "À ne pas confondre : participe présent et adjectif verbal",
              blocks: [
                {
                  type: "paragraph",
                  text: "L'adjectif verbal n'est pas une forme verbale non conjuguée : c'est un adjectif issu d'un verbe. Il s'accorde avec le nom, contrairement au participe présent.",
                },
                {
                  type: "table",
                  headers: ["", "Participe présent", "Adjectif verbal"],
                  rows: [
                    ["Exemple", "« une candidate **convainquant** le jury »", "« une réponse **convaincante** »"],
                    ["Accord", "Invariable", "Variable"],
                    ["Fonctionnement", "Conserve des compléments verbaux : « le jury » est COD", "Qualifie le nom comme un adjectif"],
                  ],
                },
              ],
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 2 (CP-CE2) :** les élèves rencontrent l'infinitif et le participe passé dans les temps composés.\n\n**Cycle 3 :** ils consolident la distinction entre verbe conjugué, infinitif et participe passé. Le gérondif peut être observé comme une manière d'exprimer simultanéité ou manière, sans étude systématique.\n\n**Ce que vous devez savoir dire :** « On part des formes rencontrées dans les phrases, puis on compare leur construction et leur rôle avant de les nommer. »",
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
              type: "rappelExpress",
              title: "La réponse attendue",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "1. Délimiter la forme ou le groupe à analyser",
                    "2. Donner sa nature et la justifier par un indice",
                    "3. Déterminer sa fonction dans la phrase",
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "La nature et la fonction répondent à deux questions différentes. Dans « Lire instruit », « lire » est un infinitif par nature et sujet de « instruit » par fonction.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Le cas le plus fréquent : nature et fonction",
              intro:
                "**Question typique :** Donnez la nature et la fonction du groupe souligné dans la phrase « Elle répondit <u>en souriant</u>. »",
              steps: [
                {
                  number: "1",
                  text: "**Délimiter le groupe.**",
                  example: { lines: ["Le groupe souligné est « en souriant »."] },
                },
                {
                  number: "2",
                  text: "**Donner sa nature et la justifier.**",
                  example: { lines: ["« en » + participe présent signale un gérondif."] },
                },
                {
                  number: "3",
                  text: "**Déterminer sa fonction.**",
                  example: { lines: ["Il précise la manière de répondre : CC de manière de « répondit »."] },
                },
                {
                  number: "💡",
                  text: "**Réponse attendue :** « en souriant » est un gérondif, formé de la préposition « en » et du participe présent « souriant ». Il est complément circonstanciel de manière du verbe « répondit ».",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Le cas particulier : une forme avec son propre sujet",
              intro:
                "**Question typique :** Dans « J'entends <u>les enfants chanter</u> », délimitez les propositions et donnez leur nature.",
              steps: [
                {
                  number: "1",
                  text: "**Repérer la forme non conjuguée.**",
                  example: { lines: ["« chanter » est un infinitif."] },
                },
                {
                  number: "2",
                  text: "**Vérifier si elle possède un sujet propre.**",
                  example: { lines: ["« les enfants » accomplissent l'action de chanter et sont distincts du sujet « je »."] },
                },
                {
                  number: "3",
                  text: "**Délimiter et analyser la proposition.**",
                  example: { lines: ["« les enfants chanter » forme une subordonnée infinitive, COD de « entends »."] },
                },
                {
                  number: "💡",
                  text: "**Réponse attendue :** « les enfants chanter » est une proposition subordonnée infinitive. Son noyau verbal est l'infinitif « chanter » et son sujet propre est « les enfants ». Elle est COD du verbe « entends ».",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Dans « Le professeur entra, <u>portant une pile de cahiers</u> », analysez le groupe souligné.",
              correction: [
                { type: "line", text: "**Réponse attendue :** « portant » est un participe présent, invariable. Il n'a pas de sujet propre : il se rapporte au nom « professeur », également sujet du verbe « entra ». Le groupe « portant une pile de cahiers » ne forme donc pas une subordonnée participiale ; il est épithète détachée du nom « professeur »." },
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
              text: "8 questions rapides pour vérifier que le Cours et la Méthode sont bien ancrés. Le détail objectif par objectif est dans l'onglet Auto-évaluation.",
            },
            {
              type: "quizBlock",
              questions: [
                {
                  objectifId: "fv2",
                  question: "Dans « Il traversa la cour en courant », « en courant » est :",
                  options: ["Un participe présent", "Un gérondif", "Un adjectif verbal", "Un infinitif"],
                  correctIndex: 1,
                  explanation:
                    "« en » + participe présent forme un gérondif : « en courant » est ici complément circonstanciel de manière.",
                },
                {
                  objectifId: "fv1",
                  question: "Dans « Vivre, sans l'écriture, me va mal », « Vivre » est :",
                  options: ["Un nom", "Un infinitif, sujet de « va »", "Un participe", "Un gérondif"],
                  correctIndex: 1,
                  explanation:
                    "« Vivre » est un infinitif employé comme sujet du verbe « va ». Dans cette phrase, sa nature reste verbale.",
                },
                {
                  objectifId: "fv3",
                  question: "Dans « La porte fermée reste silencieuse », « fermée » est :",
                  options: [
                    "Un verbe conjugué",
                    "Un participe passé employé comme épithète",
                    "Un gérondif",
                    "Un infinitif",
                  ],
                  correctIndex: 1,
                  explanation:
                    "« fermée » est un participe passé employé sans auxiliaire. Il s'accorde avec « porte » et exerce la fonction d'épithète.",
                },
                {
                  objectifId: "fv2",
                  question: "Dans « une remarque convaincante », « convaincante » est :",
                  options: [
                    "Un participe présent invariable",
                    "Un adjectif verbal accordé",
                    "Un gérondif",
                    "Un infinitif",
                  ],
                  correctIndex: 1,
                  explanation:
                    "« convaincante » varie en genre et en nombre avec le nom « remarque » : c'est un adjectif verbal.",
                },
                {
                  objectifId: "fv3",
                  question: "Dans « Lire enrichit le vocabulaire », quelle est la fonction de « Lire » ?",
                  options: [
                    "Sujet de « enrichit »",
                    "COD de « enrichit »",
                    "Complément circonstanciel",
                    "Épithète",
                  ],
                  correctIndex: 0,
                  explanation:
                    "Le groupe infinitif « Lire » commande l'accord du verbe « enrichit » : il est sujet.",
                },
                {
                  objectifId: "fv3",
                  question: "Dans « En sortant de la classe, il salua ses amis », le gérondif exprime :",
                  options: ["Le temps", "Le lieu", "Le but", "L'opposition"],
                  correctIndex: 0,
                  explanation:
                    "« En sortant de la classe » situe le salut au moment de la sortie : c'est un complément circonstanciel de temps.",
                },
                {
                  objectifId: "fv4",
                  question: "Dans « J'entends les enfants chanter », « les enfants chanter » est :",
                  options: ["Un simple infinitif sans sujet", "Une subordonnée infinitive", "Un gérondif", "Une proposition relative"],
                  correctIndex: 1,
                  explanation:
                    "L'infinitif « chanter » possède un sujet propre, « les enfants », distinct du sujet de « entends » : l'ensemble forme une subordonnée infinitive.",
                },
                {
                  objectifId: "fv5",
                  question: "Quelle réponse analyse complètement « éclairant le passage » dans « Le guide avançait, éclairant le passage » ?",
                  options: [
                    "« éclairant » est un participe présent invariable ; il se rapporte au nom « guide », également sujet de « avançait » ; le groupe est épithète détachée de « guide ».",
                    "« éclairant le passage » est une subordonnée participiale.",
                    "« éclairant » est un gérondif complément circonstanciel.",
                    "« éclairant » est un adjectif verbal accordé avec « guide ».",
                  ],
                  correctIndex: 0,
                  explanation:
                    "La réponse donne la nature, justifie l'absence de proposition par le sujet commun et précise la fonction du groupe.",
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
              label: "Niveau 1 : Identifier",
              sub: "Nature, construction, emploi",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 1 : Nature des formes non conjuguées",
              objectifTag: "Formes non conjuguées",
              question:
                "Identifiez la nature de la forme soulignée :\na) « Le candidat, <u>relisant</u> sa copie, hésita. »   b) « des lettres soigneusement <u>rédigées</u> »   c) « <u>Pressée</u> d'arriver, elle accéléra. »   d) « <u>Comprendre</u> demande du temps. »   e) « Il monta sur la terrasse pour <u>regarder</u> les nuages. »   f) « Il progressa <u>en travaillant</u>. »",
              correction: [
                { type: "line", label: "a)", text: "Participe présent, reconnaissable à sa terminaison en -ant et invariable." },
                { type: "line", label: "b)", text: "Participe passé, accordé au féminin pluriel avec « lettres »." },
                { type: "line", label: "c)", text: "Participe passé, accordé au féminin singulier avec le pronom « elle » auquel il se rapporte." },
                { type: "line", label: "d)", text: "Infinitif en -re, sujet du verbe « demande »." },
                { type: "line", label: "e)", text: "Infinitif en -er ; le groupe « pour regarder les nuages » est complément circonstanciel de but de « monta »." },
                { type: "line", label: "f)", text: "Gérondif, formé de « en » et du participe présent « travaillant »." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 2 : Fonctions de l'infinitif",
              objectifTag: "Infinitif",
              question:
                "Donnez la fonction du groupe infinitif souligné :\na) « <u>Lire chaque jour</u> enrichit le vocabulaire. »   b) « Elle aime <u>lire des romans</u>. »   c) « Il s'entraîne <u>pour réussir</u>. »   d) « Elle est heureuse <u>de partir</u>. »",
              correction: [
                { type: "line", label: "a)", text: "Sujet du verbe « enrichit »." },
                { type: "line", label: "b)", text: "COD du verbe « aime »." },
                { type: "line", label: "c)", text: "Complément circonstanciel de but du verbe « s'entraîne »." },
                { type: "line", label: "d)", text: "Complément de l'adjectif « heureuse »." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 3 : Le participe passé",
              objectifTag: "Participe passé",
              question:
                "Dites si le participe passé est employé seul ou avec un auxiliaire, puis précisez sa fonction lorsqu'il est employé seul :\na) « une porte <u>fermée</u> »   b) « Elle a <u>fermé</u> la porte. »   c) « <u>Pressée</u> de partir, elle salua ses amis. »   d) « Les voyageurs sont <u>arrivés</u>. »",
              correction: [
                { type: "line", label: "a)", text: "Employé seul, épithète liée du nom « porte »." },
                { type: "line", label: "b)", text: "Employé avec l'auxiliaire « avoir » pour former le passé composé de « fermer »." },
                { type: "line", label: "c)", text: "Employé seul, épithète détachée du pronom « elle »." },
                { type: "line", label: "d)", text: "Employé avec l'auxiliaire « être » pour former le passé composé de « arriver »." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : Analyser",
              sub: "Nature, construction et fonction",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 4 : Participe présent, gérondif ou adjectif verbal ?",
              question:
                "Identifiez la nature de la forme soulignée :\na) « une réponse <u>convaincante</u> »   b) « Elle quitta la salle <u>en souriant</u>. »   c) « Les élèves <u>attendant leur tour</u> restent calmes. »   d) « des résultats <u>encourageants</u> »   e) « Il apprend <u>en observant</u>. »",
              correction: [
                {
                  type: "table",
                  headers: ["Forme", "Nature", "Indice"],
                  rows: [
                    ["convaincante", "Adjectif verbal", "S'accorde au féminin singulier avec « réponse »"],
                    ["en souriant", "Gérondif", "« en » + -ant, complément circonstanciel"],
                    ["attendant", "Participe présent", "Invariable et suivi du COD « leur tour »"],
                    ["encourageants", "Adjectif verbal", "S'accorde au masculin pluriel avec « résultats »"],
                    ["en observant", "Gérondif", "« en » + -ant, complément circonstanciel"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 5 : La fonction du gérondif",
              question:
                "Précisez la fonction et la valeur du groupe gérondif :\na) « En glissant sur le sol mouillé, il s'est fracturé le poignet. »   b) « Elle a ouvert la boîte en utilisant une clé. »   c) « En suivant ces consignes, vous éviterez plusieurs erreurs. »",
              correction: [
                { type: "line", label: "a)", text: "Complément circonstanciel de cause : la glissade explique la fracture." },
                { type: "line", label: "b)", text: "Complément circonstanciel de moyen : la clé permet d'ouvrir la boîte." },
                { type: "line", label: "c)", text: "Complément circonstanciel de condition : si vous suivez ces consignes." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 6 : Corriger l'analyse",
              question:
                "Ces analyses sont-elles correctes ? Corrigez :\na) « en réfléchissant » : participe présent, épithète détachée\nb) « une histoire émouvante » : participe présent invariable\nc) « elle a fermé la porte » : « fermé » est une épithète\nd) « les portes refermées, le silence revint » : « refermées » est une simple épithète détachée",
              correction: [
                { type: "line", label: "a)", text: "Faux : « en » + -ant = gérondif (CC), pas participe présent." },
                { type: "line", label: "b)", text: "Faux : « émouvante » est un adjectif verbal accordé avec « histoire »." },
                { type: "line", label: "c)", text: "Faux : « fermé » est employé avec l'auxiliaire « avoir » pour former le passé composé." },
                { type: "line", label: "d)", text: "Faux : « refermées » possède un sujet propre, « les portes ». L'ensemble forme une subordonnée participiale, complément circonstanciel de temps." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 7 : Infinitif et fonction",
              objectifTag: "Analyse complète",
              question:
                "Analysez les groupes infinitifs :\na) « Partir maintenant serait imprudent. »   b) « Elle renonce à partir. »   c) « Il ouvre la fenêtre pour aérer la pièce. »   d) « J'observe les oiseaux construire leur nid. »",
              correction: [
                { type: "line", label: "a)", text: "« Partir maintenant » est un groupe infinitif, sujet de « serait »." },
                { type: "line", label: "b)", text: "« à partir » est un groupe infinitif prépositionnel, COI de « renonce »." },
                { type: "line", label: "c)", text: "« pour aérer la pièce » est un groupe infinitif prépositionnel, complément circonstanciel de but de « ouvre »." },
                { type: "line", label: "d)", text: "« les oiseaux construire leur nid » est une subordonnée infinitive, COD de « observe » : l'infinitif possède son propre sujet, « les oiseaux »." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : Maîtriser",
              sub: "Extraits littéraires, réponse jury rédigée",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 8 · Analyse d'une phrase",
              enonce:
                "« Portant une lourde valise, la voyageuse avançait lentement, décidée à rejoindre la gare avant la nuit. »",
              question: "Analysez la nature et la fonction de chaque forme non conjuguée.",
              correction: [
                {
                  type: "table",
                  headers: ["Forme", "Nature", "Analyse"],
                  rows: [
                    ["portant", "Participe présent", "Épithète détachée du nom « voyageuse » (même sujet)"],
                    ["décidée", "Participe passé", "Épithète détachée du nom « voyageuse » (accord féminin singulier)"],
                    ["rejoindre", "Infinitif", "Groupe infinitif prépositionnel, complément de l'adjectif « décidée »"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 9 · Extrait littéraire : Marguerite Yourcenar",
              enonce:
                "« À seize ans, j'ai vu se rouvrir les portes qui me séparaient du monde : je suis monté sur la terrasse du palais pour regarder les nuages, mais ils étaient moins beaux que ceux de tes crépuscules. »\n*(Marguerite Yourcenar, « Comment Wang-Fô fut sauvé », Nouvelles orientales)*",
              question: "Rédigez la réponse jury pour « se rouvrir » et « regarder ».",
              correction: [
                { type: "line", text: "« se rouvrir » est un infinitif : tête d'une subordonnée infinitive COD de « ai vu » (verbe de perception). Son sujet propre « les portes » est distinct du sujet principal « je »." },
                { type: "line", text: "« regarder » est un infinitif : groupe infinitif prépositionnel (pour + infinitif) CC de but de « suis monté ». Même sujet que le verbe principal : ce n'est pas une subordonnée infinitive." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 10 · Une forme en -ant ambiguë",
              enonce: "a) « Les enfants, fatiguant leurs parents, refusaient de dormir. »   b) « Ces journées étaient fatigantes. »",
              question: "Analysez « fatiguant » et « fatigantes » en justifiant leur nature.",
              correction: [
                { type: "line", label: "a)", text: "« fatiguant » est un participe présent, invariable. Il conserve un complément d'objet direct, « leurs parents », et est épithète détachée du nom « enfants »." },
                { type: "line", label: "b)", text: "« fatigantes » est un adjectif verbal, attribut du sujet « journées ». Il s'accorde au féminin pluriel." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 11 · Extrait construit sur le modèle des annales",
              enonce:
                "« Elle entendit la pluie tomber sur les toits. Debout devant la fenêtre, les bras croisés, elle regardait le jardin en silence. »",
              question: "Analysez les formes verbales non conjuguées et les groupes auxquels elles appartiennent.",
              correction: [
                {
                  type: "table",
                  headers: ["Forme", "Nature", "Analyse"],
                  rows: [
                    ["tomber", "Infinitif", "Subordonnée infinitive COD de « entendit » (sujet propre « la pluie »)"],
                    ["croisés", "Participe passé", "Noyau de la subordonnée participiale « les bras croisés », complément circonstanciel de manière ou d'accompagnement"],
                  ],
                },
                { type: "note", text: "💡 « en silence » n'est pas un gérondif (« en » + nom, pas « en » + -ant) : c'est un GN prépositionnel, CC de manière." },
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
              text: "Ces exercices entraînent à rédiger une réponse complète : identification de la forme non conjuguée, justification, fonction et délimitation éventuelle d'une proposition.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 1 : participe présent ou subordonnée participiale ?",
              enonce:
                "« Le chien courait, <u>tirant sur sa laisse</u>. <u>La nuit venue</u>, les voyageurs s'arrêtèrent. »",
              question: "Analysez les deux groupes soulignés et rédigez la réponse attendue.",
              correction: [
                { type: "line", text: "Dans « tirant sur sa laisse », « tirant » est un participe présent, épithète détachée du nom « chien ». Il se rapporte au sujet de « courait » : le groupe ne forme pas une proposition subordonnée participiale." },
                { type: "line", text: "« La nuit venue » est une proposition subordonnée participiale : « venue » possède un sujet propre, « la nuit », distinct du sujet de « s'arrêtèrent ». Elle est complément circonstanciel de temps de la proposition principale." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "Entraînement adapté d'un sujet récent",
              title: "Exercice 2 : Marguerite Yourcenar, Comment Wang-Fô fut sauvé",
              enonce:
                "« À seize ans, j'ai vu <u>se rouvrir</u> les portes qui me séparaient du monde : je suis monté sur la terrasse du palais pour <u>regarder</u> les nuages, mais ils étaient moins beaux que ceux de tes crépuscules. »\n*(Marguerite Yourcenar, « Comment Wang-Fô fut sauvé », Nouvelles orientales)*",
              question: "Rédigez la réponse attendue pour « se rouvrir » et « regarder ».",
              correction: [
                { type: "line", text: "« se rouvrir » est un infinitif : tête d'une subordonnée infinitive COD de « ai vu » (verbe de perception), sujet propre « les portes » distinct de « je »." },
                { type: "line", text: "« regarder » est un infinitif : groupe infinitif prépositionnel (pour + infinitif) CC de but de « suis monté », même sujet (pas de subordonnée infinitive)." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "Entraînement adapté d'un sujet récent",
              title: "Exercice 3 : Lola Lafon, Quand tu écouteras cette chanson",
              enonce:
                "« <u>Vivre</u>, sans l'écriture, me va mal. »\n*(Lola Lafon, Quand tu écouteras cette chanson, 2022)*",
              question: "Rédigez la réponse attendue pour « Vivre ».",
              correction: [
                { type: "line", text: "« Vivre » est un infinitif présent, sujet du verbe « va ». Dans cette phrase, il conserve sa nature verbale tout en exerçant une fonction généralement occupée par un groupe nominal." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 4 : fonctions de l'infinitif",
              enonce: "« <u>Transmettre</u> des savoirs exige de la rigueur ; le professeur prépare sa séance pour <u>aider</u> les élèves à comprendre. »",
              question: "Donnez la nature et la fonction des deux formes soulignées.",
              correction: [
                { type: "line", text: "« Transmettre » est un infinitif présent. Le groupe infinitif « Transmettre des savoirs » est sujet du verbe « exige »." },
                { type: "line", text: "« aider » est un infinitif présent. Le groupe infinitif prépositionnel « pour aider les élèves à comprendre » est complément circonstanciel de but du verbe « prépare »." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 5 : valeurs du gérondif",
              enonce: "« <u>En sortant de la salle</u>, la candidate croisa une amie. <u>En vérifiant chaque accord</u>, elle éviterait plusieurs fautes. »",
              question: "Analysez la nature, la fonction et la valeur des deux groupes soulignés.",
              correction: [
                { type: "line", text: "« En sortant de la salle » est un groupe gérondif, complément circonstanciel de temps : la rencontre se produit au moment de la sortie." },
                { type: "line", text: "« En vérifiant chaque accord » est un groupe gérondif, complément circonstanciel de condition : si elle vérifiait chaque accord." },
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
              text: "Ces exercices reproduisent des erreurs fréquentes relevées dans les copies. Repérer ce qui cloche dans une copie, c'est aussi ce que vous ferez plus tard avec vos élèves.",
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 1 · Réponse à corriger : « marchant rapidement »",
              enonce: "Réponse d'un candidat : « **marchant rapidement** : proposition subordonnée participiale », pour *« Le facteur, marchant rapidement, acheva sa tournée. »*",
              question: "Identifiez l'erreur et rédigez la réponse attendue.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Le sujet de « marchant » est le même que celui du verbe principal : « le facteur »", bad: true },
                    { text: "Une subordonnée participiale exige un sujet propre distinct (voir notion 5)" },
                    { text: "Réponse attendue : « marchant » est un participe présent ; « marchant rapidement » est épithète détachée du nom « facteur »" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 2 · Réponse à corriger : « en persévérant »",
              enonce: "Réponse d'un candidat : « **en persévérant** : participe présent, épithète », pour *« Elle réussit en persévérant. »*",
              question: "Identifiez l'erreur et rédigez la réponse attendue.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "« en » + -ant = gérondif, pas participe présent", bad: true },
                    { text: "Le gérondif se construit avec « en » suivi du participe présent" },
                    { text: "Réponse attendue : « en persévérant » est un gérondif, complément circonstanciel de moyen" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 3 · Réponse à corriger : « une histoire émouvante »",
              enonce: "Réponse d'un candidat : « **émouvante** : participe présent », pour *« Cette histoire est émouvante. »*",
              question: "Identifiez l'erreur et rédigez la réponse attendue.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "« émouvante » s'accorde au féminin singulier avec « histoire » : ce n'est pas un participe présent, qui serait invariable", bad: true },
                    { text: "La forme exprime ici une propriété du nom et occupe une fonction adjectivale" },
                    { text: "Réponse attendue : « émouvante » est un adjectif verbal, attribut du sujet « histoire »" },
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
              text: "Cliquez sur chaque carte pour révéler la réponse. Questions formulées comme le jury.",
            },
            {
              type: "flashcardDeck",
              cards: [
                {
                  question: "Comment reconnaître les 4 formes non conjuguées ?",
                  answer:
                    "**Infinitif** : -er/-ir/-re/-oir, invariable.\n**Participe présent** : forme en -ant, invariable.\n**Gérondif** : « en » + participe présent, invariable.\n**Participe passé** : souvent en -é/-i/-u ; son accord dépend de son emploi.",
                  astuce: "💡 Seules, ces formes ne créent pas de proposition (voir notion 5).",
                },
                {
                  question: "Participe présent, gérondif ou adjectif verbal ?",
                  answer:
                    "**Gérondif** : « en » + participe présent, avec une fonction circonstancielle.\n**Adjectif verbal** : forme variable employée comme un adjectif (« une remarque convaincante »).\n**Participe présent** : forme verbale en -ant, invariable, qui peut conserver des compléments verbaux.",
                },
                {
                  question: "Quelles fonctions l'infinitif peut-il exercer ?",
                  answer:
                    "Comme un nom, un groupe infinitif peut être **sujet**, **COD** ou **COI**. Il peut aussi compléter un adjectif ou être complément circonstanciel, notamment de but.",
                  astuce: "Exemples : « Lire instruit » ; « elle aime lire » ; « il vient pour apprendre ».",
                },
                {
                  question: "Participe passé seul ou forme verbale composée ?",
                  answer:
                    "Employé **seul**, le participe passé peut exercer une fonction adjectivale : « une porte fermée ». Avec un **auxiliaire**, il entre dans une forme verbale composée : « elle a fermé la porte ».",
                },
                {
                  question: "Quand un infinitif forme-t-il une subordonnée infinitive ?",
                  answer:
                    "Lorsqu'il possède un **sujet propre**, distinct de celui du verbe principal : « J'entends les enfants jouer. » La subordonnée infinitive « les enfants jouer » est COD de « entends ».",
                },
                {
                  question: "Quand un participe forme-t-il une subordonnée participiale ?",
                  answer:
                    "Lorsqu'il possède un **sujet propre**, distinct de celui du verbe principal : « Le rideau levé, le spectacle commença. » La subordonnée participiale est ici complément circonstanciel de temps.",
                },
                {
                  question: "Quelles fonctions le gérondif peut-il exercer ?",
                  answer:
                    "Le groupe gérondif est complément circonstanciel. Selon le contexte, il peut exprimer le **temps**, la **manière**, la **cause**, la **condition** ou l'opposition.",
                },
                {
                  question: "Formule jury pour un participe présent épithète ?",
                  answer:
                    "« [forme] est un participe présent : épithète détachée du sujet [nom] ; même sujet que le verbe principal, ce qui exclut une subordonnée participiale. »",
                  astuce: "💡 Sujet distinct → subordonnée participiale (notion 5).",
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
              center: { title: "Formes non conjuguées", subtitle: "Infinitif, participes et gérondif" },
              branches: [
                {
                  title: "Formes non conjuguées",
                  lines: ["Infinitif · participe présent", "Gérondif (en + -ant)", "Participe passé (accordé)"],
                  variant: "blue",
                },
                {
                  title: "en -ant : 3 formes",
                  lines: ["Gérondif : en + -ant (CC)", "Adjectif verbal : accordé", "Participe présent : invariable"],
                  variant: "blue",
                },
                {
                  title: "Fonctions",
                  lines: ["Infinitif : sujet, complément", "Participe : fonction adjectivale", "Gérondif : complément circonstanciel"],
                  variant: "green",
                },
                {
                  title: "Proposition ou groupe ?",
                  lines: ["Sujet propre obligatoire", "Infinitive : les enfants jouer", "Participiale : le rideau levé"],
                  variant: "green",
                },
                {
                  title: "Pièges classiques",
                  lines: ["en + -ant = gérondif", "Forme en -ant accordée = adjectif", "Auxiliaire + PP = forme composée"],
                  variant: "yellow",
                },
                {
                  title: "Renvois",
                  lines: ["Subordonnées infinitive / participiale → notion 5", "Temps composés → notion 6", "Accord du participe passé → notion 11"],
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
