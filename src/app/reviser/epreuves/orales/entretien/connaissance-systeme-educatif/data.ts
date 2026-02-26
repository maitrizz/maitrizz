import type { Question } from "@/components/QCMInterface";

// ────────────────────────────────────────────────────────────────────────────
// Block types - éléments de contenu d'une fiche
// ────────────────────────────────────────────────────────────────────────────

export type Block =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "nested_bullets"; items: { title: string; bullets: string[] }[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "blockquote"; text: string; source?: string }
  | { type: "callout"; variant: "tip" | "nota" | "summary"; title: string; lines: string[] };

export type FicheContent = {
  title: string;
  intro: string;
  sections: { heading: string; blocks: Block[] }[];
  aRetenir: string;
};

export type MSPContent = {
  scenario: string;
  questions: string[];
};

export type ModuleContent = {
  label: string;
  objectif?: string;
  fiches: [FicheContent, FicheContent, FicheContent, FicheContent];
  ficheQuestions: [Question[], Question[], Question[], Question[]];
  msp: MSPContent;
};

// ────────────────────────────────────────────────────────────────────────────
// Helpers - placeholders
// ────────────────────────────────────────────────────────────────────────────

function placeholderFiche(module: number, fiche: number): FicheContent {
  return {
    title: `Module ${module} - Fiche ${fiche}`,
    intro: `Contenu de la fiche ${fiche} du module ${module}. Ce texte introductif présente les grands axes de la notion abordée dans cette fiche.`,
    sections: [
      {
        heading: "Contexte",
        blocks: [
          { type: "paragraph", text: "Lorem ipsum - remplacer ce paragraphe par le vrai contenu pédagogique de la fiche." },
        ],
      },
      {
        heading: "Points clés",
        blocks: [
          {
            type: "bullets",
            items: [
              "Point clé 1 - à compléter",
              "Point clé 2 - à compléter",
              "Point clé 3 - à compléter",
            ],
          },
        ],
      },
    ],
    aRetenir: "Phrase synthèse à retenir - à compléter avec le vrai résumé.",
  };
}

function placeholderQuestions(module: number, fiche: number): Question[] {
  return [
    {
      question: `[Module ${module} · Fiche ${fiche}] Question 1 - à remplacer.`,
      options: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
      correctIndex: 0,
      explanation: "Explication - à compléter.",
    },
    {
      question: `[Module ${module} · Fiche ${fiche}] Question 2 - à remplacer.`,
      options: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
      correctIndex: 1,
      explanation: "Explication - à compléter.",
    },
    {
      question: `[Module ${module} · Fiche ${fiche}] Question 3 - à remplacer.`,
      options: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
      correctIndex: 2,
    },
    {
      question: `[Module ${module} · Fiche ${fiche}] Question 4 - à remplacer.`,
      options: ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
      correctIndex: 3,
    },
  ];
}

function placeholderMSP(module: number): MSPContent {
  return {
    scenario: `[Module ${module}] Scénario de mise en situation professionnelle - à remplacer par la vraie situation.`,
    questions: [
      "Comment réagiriez-vous face à cette situation ?",
      "Quelles valeurs de l'école républicaine mobiliseriez-vous ?",
      "Quels acteurs de la communauté éducative impliqueriez-vous ?",
    ],
  };
}

function buildModule(n: number): ModuleContent {
  return {
    label: `Module ${n}`,
    fiches: [
      placeholderFiche(n, 1),
      placeholderFiche(n, 2),
      placeholderFiche(n, 3),
      placeholderFiche(n, 4),
    ],
    ficheQuestions: [
      placeholderQuestions(n, 1),
      placeholderQuestions(n, 2),
      placeholderQuestions(n, 3),
      placeholderQuestions(n, 4),
    ],
    msp: placeholderMSP(n),
  };
}

// ────────────────────────────────────────────────────────────────────────────
// Module 1 - Contenu réel
// ────────────────────────────────────────────────────────────────────────────

const module1Fiche1: FicheContent = {
  title: "Fiche 1 - L'école de la République : fondements et missions",
  intro:
    "L'école de la République est bien plus qu'un lieu d'instruction : elle est une institution politique et sociale, visant à former des citoyens libres, éclairés et capables de contribuer au bien commun.",
  sections: [
    {
      heading: "1. Les fondements historiques de l'école républicaine",
      blocks: [
        { type: "subheading", text: "L'école, pilier de la République" },
        {
          type: "paragraph",
          text: "Son évolution traduit la construction de l'État républicain, qui a progressivement affirmé la place centrale de l'éducation dans la société.",
        },
        { type: "subheading", text: "Les grandes lois fondatrices" },
        {
          type: "table",
          headers: ["Loi", "Date", "Apports essentiels"],
          rows: [
            [
              "Loi Guizot",
              "1833",
              "Chaque commune doit ouvrir une école de garçons. Première structuration nationale de l'enseignement primaire.",
            ],
            [
              "Loi Falloux",
              "1850",
              "Ouverture aux établissements privés, sous contrôle de l'État.",
            ],
            [
              "Lois Ferry",
              "1881–1882",
              "École gratuite, laïque et obligatoire (6 à 13 ans à l'époque).",
            ],
            [
              "Loi Goblet",
              "1886",
              "Laïcisation des personnels : écarter les religieux de l'enseignement public. Laïcisation progressive du personnel des écoles publiques.",
            ],
            [
              "Loi de séparation des Églises et de l'État",
              "1905",
              "Texte fondateur de la laïcité. Respect de toutes les croyances, égalité devant la loi sans distinction de religion, garantie du libre exercice des cultes, absence de culte officiel. Neutralité de l'État vis-à-vis de toutes les religions.",
            ],
          ],
        },
        {
          type: "paragraph",
          text: "Ces lois traduisent la volonté de rendre l'école universelle et émancipatrice : un lieu de savoir, mais aussi de formation des futurs citoyens.",
        },
      ],
    },
    {
      heading: "2. Les valeurs de l'école républicaine",
      blocks: [
        { type: "subheading", text: "Liberté, Égalité, Fraternité" },
        {
          type: "nested_bullets",
          items: [
            {
              title: "Liberté",
              bullets: [
                "Liberté d'accès à l'instruction : tous les enfants peuvent aller à l'école, quelles que soient leurs origines ou leurs croyances.",
                "Liberté de conscience, garantie par la laïcité (enseignement laïque ; l'élève n'est pas obligé de porter des signes religieux).",
                "Liberté pédagogique de l'enseignant dans le cadre des programmes officiels.",
              ],
            },
            {
              title: "Égalité",
              bullets: [
                "Tous les élèves ont droit à la même qualité d'éducation.",
                "L'école cherche à réduire les inégalités sociales, territoriales et culturelles.",
              ],
            },
            {
              title: "Fraternité",
              bullets: [
                "L'école apprend le vivre-ensemble et le respect d'autrui.",
                "Elle favorise la coopération, la solidarité et la compréhension mutuelle.",
              ],
            },
          ],
        },
        {
          type: "subheading",
          text: "La laïcité : le grand principe structurant",
        },
        {
          type: "bullets",
          items: [
            "La Charte de la laïcité à l'école (2013) rappelle que l'école garantit la neutralité de l'État et le respect des croyances de chacun.",
            "Elle permet d'enseigner les savoirs sans prosélytisme, en favorisant l'esprit critique et la liberté de jugement.",
            "Le personnel éducatif a un devoir d'exemplarité : neutralité religieuse, politique et philosophique.",
          ],
        },
        {
          type: "callout",
          variant: "nota",
          title: "À noter pour le concours",
          lines: [
            "La laïcité est un sujet majeur des oraux du CRPE. Un module complet y est consacré pour te permettre de maîtriser le sujet et de répondre à toutes les questions avec assurance et sérénité.",
          ],
        },
        { type: "subheading", text: "La gratuité" },
        {
          type: "paragraph",
          text: "L'école publique est gratuite : aucun frais de scolarité n'est demandé aux familles. Ce principe garantit l'accès de tous les enfants à l'instruction, indépendamment de la situation économique de leurs parents.",
        },
      ],
    },
    {
      heading: "3. Les missions du service public d'éducation",
      blocks: [
        {
          type: "paragraph",
          text: "Le Code de l'éducation dispose que « la mission première de l'école » est de « faire partager aux élèves les valeurs de la République ». Le service public de l'éducation fait acquérir à tous les élèves le respect de l'égale dignité des êtres humains, de la liberté de conscience et de la laïcité (art. L.111-1).",
        },
        { type: "subheading", text: "Instruire" },
        {
          type: "blockquote",
          text: "Donner à chacun les moyens de développer sa personnalité, d'élever son niveau de formation initiale et continue, de s'insérer dans la vie sociale et professionnelle, et d'exercer sa citoyenneté.",
          source: "Code de l'Éducation, art. L111-1",
        },
        {
          type: "bullets",
          items: [
            "Transmettre les savoirs fondamentaux (lire, écrire, compter, respecter autrui).",
            "Garantir la maîtrise du socle commun de connaissances, de compétences et de culture.",
            "Offrir à chaque élève les outils intellectuels pour penser par lui-même.",
          ],
        },
        { type: "subheading", text: "Éduquer" },
        {
          type: "bullets",
          items: [
            "Développer la personnalité, le sens moral et le civisme.",
            "Faire vivre les valeurs républicaines à travers les enseignements et la vie scolaire.",
            "Responsabiliser l'élève et l'amener à comprendre les règles de la société.",
          ],
        },
        { type: "subheading", text: "Socialiser" },
        {
          type: "bullets",
          items: [
            "Apprendre à vivre ensemble, à coopérer, à résoudre les conflits.",
            "Participer à la formation du citoyen et à la cohésion nationale.",
            "Favoriser l'inclusion et la reconnaissance de la diversité.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Instruire vs Éduquer",
          lines: [
            "Instruire, c'est transmettre des savoirs : connaissances et compétences intellectuelles (lire, écrire, compter, raisonner). L'école instruit à travers les programmes et les disciplines.",
            "Éduquer, c'est former la personne dans sa globalité : valeurs, vivre-ensemble, citoyenneté, respect, autonomie, responsabilité. La famille, la société et l'école y participent ensemble.",
            "L'enseignant a une double mission : instruire ET éduquer - transmetteur de savoirs ET acteur de la formation du citoyen.",
          ],
        },
      ],
    },
    {
      heading: "4. L'école d'aujourd'hui : une mission en évolution",
      blocks: [
        {
          type: "paragraph",
          text: "Les missions de l'école évoluent pour répondre aux défis du monde contemporain.",
        },
        {
          type: "bullets",
          items: [
            "Lutter contre les inégalités : garantir à chaque élève les mêmes chances de réussite, quel que soit son genre, son milieu ou son lieu de vie (éducation prioritaire, dispositifs de soutien).",
            "Promouvoir l'inclusion et la réussite de tous : accueillir et accompagner chaque élève dans sa singularité (handicap, difficultés, haut potentiel…) pour construire une école réellement inclusive.",
            "Éduquer à la transition écologique, au numérique et à la citoyenneté mondiale : former des citoyens responsables capables de comprendre les enjeux environnementaux, d'utiliser le numérique de manière éthique et de s'ouvrir sur le monde.",
          ],
        },
        {
          type: "paragraph",
          text: "L'école du XXIe siècle ne transmet plus seulement des savoirs : elle prépare les élèves à vivre et agir ensemble dans un monde en constante évolution.",
        },
      ],
    },
    {
      heading: "5. Le socle commun de connaissances, de compétences et de culture",
      blocks: [
        {
          type: "paragraph",
          text: "Le socle commun définit ce que tout élève doit maîtriser à 16 ans (fin du collège). Il sert de référence pour les programmes et les cycles, structurant les apprentissages en 5 domaines.",
        },
        { type: "subheading", text: "Création et évolution" },
        {
          type: "bullets",
          items: [
            "Créé par la loi Fillon (23 avril 2005, « Loi d'orientation et de programme pour l'avenir de l'école »).",
            "Précisé et révisé en 2015.",
            "Intégré au LSU (Livret Scolaire Unique) depuis 2016, pour un suivi des acquis du CP à la 3e.",
          ],
        },
        { type: "subheading", text: "Les 5 domaines de compétences" },
        {
          type: "nested_bullets",
          items: [
            {
              title: "1. Langages pour penser et communiquer",
              bullets: ["Lire, écrire, s'exprimer oralement et comprendre les messages."],
            },
            {
              title: "2. Méthodes et outils pour apprendre",
              bullets: ["Utiliser le numérique, organiser son travail, travailler en autonomie et en groupe."],
            },
            {
              title: "3. Formation de la personne et du citoyen",
              bullets: ["Respecter les règles, développer le sens de l'engagement, comprendre les valeurs républicaines."],
            },
            {
              title: "4. Systèmes naturels et techniques",
              bullets: ["Observer, expérimenter, comprendre le monde physique et les technologies."],
            },
            {
              title: "5. Représentations du monde et culture humaniste",
              bullets: ["Histoire, géographie, arts, éducation physique et sportive."],
            },
          ],
        },
        { type: "subheading", text: "Son évaluation" },
        {
          type: "bullets",
          items: [
            "Les enseignants utilisent le LSU (Livret Scolaire Unique) pour suivre les progrès des élèves dans chaque domaine.",
            "L'évaluation se fait tout au long des cycles, de manière formative et continue.",
            "Elle permet de repérer les besoins d'aide et de soutien, en lien avec le RASED ou les dispositifs adaptés.",
          ],
        },
      ],
    },
  ],
  aRetenir:
    "L'école républicaine repose sur trois piliers (Liberté, Égalité, Fraternité) et trois missions fondamentales (instruire, éduquer, socialiser). La laïcité en est le grand principe structurant. Le socle commun définit les compétences essentielles que tout élève doit maîtriser à 16 ans.",
};

// ────────────────────────────────────────────────────────────────────────────
// Données des modules
// ────────────────────────────────────────────────────────────────────────────

export const modules: Record<string, ModuleContent> = {
  "module-1": {
    label: "Module 1 - Comprendre le système éducatif français",
    objectif: "Acquérir les bases indispensables pour comprendre l'organisation, les missions et les acteurs du système éducatif français.",
    fiches: [
      module1Fiche1,
      placeholderFiche(1, 2),
      placeholderFiche(1, 3),
      placeholderFiche(1, 4),
    ],
    ficheQuestions: [
      placeholderQuestions(1, 1),
      placeholderQuestions(1, 2),
      placeholderQuestions(1, 3),
      placeholderQuestions(1, 4),
    ],
    msp: placeholderMSP(1),
  },
  "module-2": buildModule(2),
  "module-3": buildModule(3),
  "module-4": buildModule(4),
  "module-5": buildModule(5),
  "module-6": buildModule(6),
  "module-7": buildModule(7),
};
