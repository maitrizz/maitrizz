import type { Fiche } from "@/components/fiche/types";
import { EXERCICES_FORMES_NON_CONJUGUEES } from "./exercices-formes-non-conjuguees";
import { COPIES_FORMES_NON_CONJUGUEES } from "./copies-formes-non-conjuguees";

export const SAVOIR_FAIRE = [
  { id: "infinitif", label: "Infinitif" },
  { id: "participe-present", label: "Participe présent" },
  { id: "participe-passe", label: "Participe passé" },
  { id: "gerondif", label: "Gérondif" },
  { id: "infinitive-participiale", label: "Infinitive/participiale" },
];

export const ficheFormesNonConjuguees: Fiche = {
  slug: "formes-non-conjuguees",
  matiere: "francais",
  numero: 10,
  partie: "Partie 1 : Le verbe",
  title: "Infinitif, participes et gérondif",
  subtitle: "Analyser une forme verbale non conjuguée dans une phrase.",
  badges: [
      {
          "label": "★★ Fréquent",
          "variant": "hot"
      },
      {
          "label": "Cycle 3-4 · BOEN n°1 du 22 janvier 2019",
          "variant": "info"
      }
  ],
  metaTitle: "Infinitif, participes et gérondif · Fiche de révision CRPE",
  metaDescription: "Formes non conjuguées du verbe au CRPE : infinitif, participe présent, gérondif et participe passé, avec la distinction de l'adjectif verbal.",
  maitriseNotionSlug: "formes-non-conjuguees",
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
                "*Question typique : Donnez la nature et la fonction du groupe souligné dans la phrase « Elle répondit <u>en souriant</u>. »*",
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
                "*Question typique : Dans « J'entends <u>les enfants chanter</u> », délimitez les propositions et donnez leur nature.*",
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
              text: "Méthode bien en tête ? Passez à l’application.",
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
              title: "Infinitif, participes et gérondif",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_FORMES_NON_CONJUGUEES,
            },
          ],
        },
        {
          id: "corriger",
          label: "Corriger des erreurs",
          icon: "",
          blocks: [
            {
              type: "callout",
              variant: "info",
              icon: "",
              text: "**Vous passez de l'autre côté de la copie.** Pour chaque candidat, dites si la réponse est correcte ; si elle ne l'est pas, corrigez-la. Se mettre à la place du jury, c'est une excellente façon de voir ce qu'on attend de vous.",
            },
            {
              type: "corrigerCopies",
              title: "Infinitif, participes et gérondif",
              copies: COPIES_FORMES_NON_CONJUGUEES,
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
                  lines: ["Subordonnées infinitive / participiale → notion 5", "Temps composés → notion 7", "Accord du participe passé → notion 12"],
                  variant: "purple",
                  dashed: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
