import type { Fiche } from "@/components/fiche/types";

// Objectifs de la fiche, utilisés en aperçu (Vue d'ensemble) et en auto-évaluation
const OBJECTIFS = [
  { id: "mt1", label: "Je sais que le jury attend trois éléments (mode, temps, valeur) et que cette fiche identifie le mode et le temps ; la valeur est approfondie aux notions 7 et 8" },
  { id: "mt2", label: "Je connais les modes (indicatif, subjonctif, impératif ; infinitif, participe, gérondif), je sais que le conditionnel est un temps de l'indicatif, et qu'une forme non conjuguée n'a pas de temps personnel à indiquer" },
  { id: "mt3", label: "Je distingue le conditionnel présent de l'imparfait grâce au test « nous » (présence du « r »)" },
  { id: "mt4", label: "Je distingue le passé composé du plus-que-parfait grâce au temps de l'auxiliaire" },
  { id: "mt5", label: "Je distingue l'indicatif du subjonctif grâce au contexte (après « que, bien que, pour que… » et les verbes de volonté ou de doute)" },
  { id: "mt6", label: "Je reconnais le passé simple, y compris ses formes irrégulières (fut, vint, fit, put, sut, dit…)" },
  { id: "mt7", label: "Je sais identifier une forme verbale en 4 questions : conjuguée ou non, mode, temps, valeur" },
];

export const ficheModesEtTemps: Fiche = {
  slug: "modes-et-temps",
  matiere: "francais",
  numero: 6,
  partie: "Partie 1 : Le verbe",
  title: "Modes et temps",
  subtitle:
    "Identifier le mode et le temps d'une forme verbale : morphologie, terminaisons, formes irrégulières",
  badges: [
    { label: "★★★ Tombe chaque année", variant: "hot" },
    { label: "Cycle 3-4 · BOEN n°1 du 22 janvier 2019", variant: "info" },
  ],
  metaTitle: "Modes et temps du verbe (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Fiche CRPE complète sur les modes et les temps du verbe : panorama des modes, terminaisons caractéristiques (présent, imparfait, passé simple, futur, conditionnel, subjonctif), temps composés et auxiliaire, formes irrégulières. Méthode d'identification en 4 questions, pièges fréquents, exercices corrigés, flashcards et auto-évaluation.",
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
                  title: "Les modes",
                  text: "Indicatif, subjonctif, impératif (personnels) ; infinitif, participe, gérondif (non personnels). Le conditionnel est un temps de l'indicatif.",
                },
                {
                  number: "②",
                  title: "Reconnaître le temps aux terminaisons",
                  text: "Présent, imparfait, passé simple, futur, conditionnel, subjonctif : chaque temps a sa marque.",
                },
                {
                  number: "③",
                  title: "Les temps composés",
                  text: "Passé composé, plus-que-parfait, futur antérieur… C'est le temps de l'auxiliaire qui les distingue.",
                },
                {
                  number: "④",
                  title: "Les formes irrégulières à connaître",
                  text: "Passé simple (fut, vint, fit…) et subjonctif (soit, ait, aille…) : les formes les plus testées.",
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
              text: "Pour chaque forme verbale, le jury attend **trois éléments : le mode, le temps et la valeur**. Cette fiche couvre les deux premiers : reconnaître le mode et le temps à partir de la forme (terminaisons, auxiliaire, formes irrégulières). La **valeur** (ce que le temps exprime dans son contexte) est approfondie dans les notions 7 et 8.",
            },
            {
              type: "subsection",
              number: "①",
              title: "Les modes",
              blocks: [
                {
                  type: "paragraph",
                  text: "Le **mode** indique la manière dont l'action est envisagée. On distingue les **modes personnels** (le verbe se conjugue avec un sujet et varie en personne) et les **modes non personnels** (formes non conjuguées, sans personne).",
                },
                {
                  type: "table",
                  headers: ["Mode", "Personnel ?", "Temps principaux"],
                  rows: [
                    ["Indicatif", "Oui (avec sujet)", "Présent, imparfait, passé simple, passé composé, plus-que-parfait, futur, futur antérieur, conditionnel présent, conditionnel passé"],
                    ["Subjonctif", "Oui (avec sujet)", "Présent, passé, imparfait (littéraire)"],
                    ["Impératif", "Oui (sans sujet exprimé)", "Présent, passé"],
                    ["Infinitif", "Non", "Présent, passé"],
                    ["Participe", "Non", "Présent, passé"],
                    ["Gérondif", "Non", "Présent (en + participe présent)"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Le statut du conditionnel",
                  text: "Dans la terminologie grammaticale de référence retenue (Éduscol récent), le conditionnel n'est pas un mode autonome : c'est un **temps de l'indicatif** (conditionnel présent, conditionnel passé). On répond donc « **indicatif, conditionnel présent** » ou « **indicatif, conditionnel passé** ». L'appellation traditionnelle « mode conditionnel » subsiste dans certains usages scolaires : on peut la mentionner, mais ce n'est pas la formulation retenue.",
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "💡 Une forme **non conjuguée** (infinitif, participe, gérondif) n'a pas de temps personnel à indiquer : on donne seulement sa nature. « tenant », « baissés », « atteindre » ne se voient pas attribuer un mode et un temps comme un verbe conjugué.",
                },
              ],
            },
            {
              type: "subsection",
              number: "②",
              title: "Reconnaître le temps aux terminaisons",
              blocks: [
                {
                  type: "paragraph",
                  text: "Pour une **forme simple** (un seul mot), la terminaison suffit le plus souvent à identifier le temps.",
                },
                {
                  type: "table",
                  headers: ["Temps", "Terminaisons", "Repère"],
                  rows: [
                    ["Présent", "-e, -es, -e… ou -s, -s, -t…", "Formes irrégulières fréquentes : suis, es, est ; ai, a, ont ; vais, va, vont"],
                    ["Imparfait", "-ais, -ais, -ait, -ions, -iez, -aient", "Jamais de « r » avant la terminaison"],
                    ["Passé simple", "-ai/-as/-a ; -is/-is/-it ; -us/-us/-ut", "Formes irrégulières : fut, vit, fit, vint, put, dit"],
                    ["Futur", "-rai, -ras, -ra, -rons, -rez, -ront", "Base proche de l'infinitif : sera, aura, ira, fera, viendra"],
                    ["Conditionnel présent", "-rais, -rais, -rait, -rions, -riez, -raient", "Toujours un « r » avant la terminaison"],
                    ["Subjonctif présent", "-e, -es, -e, -ions, -iez, -ent", "Après « que, bien que, pour que… » : soit, ait, aille, fasse"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Le piège imparfait / conditionnel",
                  text: "Une forme en **-ait** peut être un imparfait (« regardait ») ou un conditionnel (« serait »). Test décisif : mettre à « nous ». **-ions** sans « r » = imparfait (« nous regardions ») ; **-rions** avec « r » = conditionnel (« nous serions »).",
                },
              ],
            },
            {
              type: "subsection",
              number: "③",
              title: "Les temps composés : l'auxiliaire décide",
              blocks: [
                {
                  type: "paragraph",
                  text: "Un **temps composé** s'écrit en deux mots : un **auxiliaire** (être ou avoir) suivi du **participe passé**. C'est le temps de l'auxiliaire qui donne le temps composé.",
                },
                {
                  type: "table",
                  headers: ["Temps composé", "Auxiliaire", "Exemple"],
                  rows: [
                    ["Passé composé", "Présent de avoir / être + participe passé", "j'ai vu, je suis monté"],
                    ["Plus-que-parfait", "Imparfait de avoir / être + participe passé", "elle avait relu, il était parti"],
                    ["Futur antérieur", "Futur de avoir / être + participe passé", "il aura fini, elle sera arrivée"],
                    ["Conditionnel passé", "Conditionnel présent de avoir / être + participe passé", "j'aurais voulu, elle serait venue"],
                    ["Subjonctif passé", "Subjonctif de avoir / être + participe passé", "qu'il ait vu, qu'elle soit partie"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ Clé de lecture : passé composé = auxiliaire au présent (« a vu ») ; plus-que-parfait = auxiliaire à l'imparfait (« avait vu »). Ne pas confondre non plus « il est parti » (passé composé, verbe de mouvement) avec une voix passive.",
                },
              ],
            },
            {
              type: "subsection",
              number: "④",
              title: "Les formes irrégulières à connaître",
              blocks: [
                {
                  type: "paragraph",
                  text: "Certaines formes irrégulières reviennent constamment dans les textes littéraires. Les reconnaître au premier coup d'œil fait gagner un temps précieux.",
                },
                {
                  type: "cardGrid",
                  columns: 2,
                  variant: "info",
                  cards: [
                    {
                      title: "Passé simple (3e pers.)",
                      lines: [
                        "être → fut, furent",
                        "avoir → eut, eurent",
                        "faire → fit · voir → vit",
                        "venir → vint · dire → dit",
                        "pouvoir → put · savoir → sut · devoir → dut",
                      ],
                    },
                    {
                      title: "Subjonctif présent",
                      lines: [
                        "être → soit, soient",
                        "avoir → ait, aient",
                        "aller → aille · faire → fasse",
                        "pouvoir → puisse · savoir → sache",
                        "vouloir → veuille · venir → vienne",
                      ],
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  icon: "💡",
                  text: "Une même forme peut cacher deux analyses : « vit » est le présent de « vivre » (« il vit à Paris ») ou le passé simple de « voir » (« il vit la femme »). Seul le contexte tranche.",
                },
              ],
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°1 · Confondre conditionnel présent et imparfait",
              badge: "Très fréquent",
              faux: "« serait » analysé comme un imparfait.",
              vrai: "« serait » contient un « r » avant la terminaison : c'est un **conditionnel présent** (un temps de l'indicatif).",
              methode: "Test « nous » : « nous serions » donne -rions (avec « r ») → conditionnel ; « nous étions » donne -ions (sans « r ») → imparfait.",
            },
            {
              type: "piegeCard",
              variant: "rouge",
              title: "Piège n°2 · Confondre passé composé et plus-que-parfait",
              badge: "Auxiliaire décisif",
              faux: "« avait vu » analysé comme un passé composé.",
              vrai: "L'auxiliaire « avait » est à l'imparfait : c'est un **plus-que-parfait**. Le passé composé a son auxiliaire au présent (« a vu »).",
              methode: "Toujours repérer le temps de l'auxiliaire d'abord : présent → passé composé ; imparfait → plus-que-parfait.",
            },
            {
              type: "piegeCard",
              variant: "orange",
              title: "Piège n°3 · Prendre un passé simple irrégulier pour un futur",
              badge: "Formes irrégulières",
              faux: "« fut » analysé comme un futur de « être ».",
              vrai: "« fut » est le **passé simple** de « être » (3e personne du singulier). Le futur est « sera ».",
              methode: "Mémoriser les passés simples irréguliers (fut, eut, fit, vit, vint, put, sut, dit) et les distinguer du futur (sera, aura, fera…).",
            },
            {
              type: "piegeCard",
              variant: "bleu",
              title: "Piège n°4 · Oublier la valeur, le 3e élément",
              badge: "Réponse incomplète",
              faux: "« regardait → imparfait de l'indicatif » et s'arrêter là.",
              vrai: "Le jury attend **trois éléments** : mode, temps et valeur. Donner aussi la valeur (description, habitude, action en cours…).",
              methode: "Après le mode et le temps, préciser la valeur dans le contexte. L'analyse détaillée des valeurs est traitée dans les notions 7 et 8.",
            },
            {
              type: "primaireBox",
              title: "Ce que ça donne à l'école primaire : le regard du futur enseignant",
              text: "**Cycle 2 (CP-CE2) :** premières conjugaisons au présent, futur, imparfait et passé composé, surtout par mémorisation des terminaisons les plus régulières.\n\n**Cycle 3 :** consolidation des temps de l'indicatif, introduction du passé simple (en lecture) et de la notion de mode (impératif, conditionnel). Les terminaisons sont travaillées par tris et régularités.\n\n**Ce que vous devez savoir dire :** « On apprend d'abord à reconnaître les terminaisons régulières, puis à raisonner par familles. Le futur antérieur ou le plus-que-parfait s'expliquent par l'auxiliaire. La conjugaison se construit sur des régularités, pas sur du par-cœur isolé. »",
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
              icon: "",
              title: "Une démarche en 4 questions",
              text: "Face à une forme verbale, on se pose toujours les mêmes questions, dans l'ordre. Une seconde méthode traite les formes ambiguës (le « r » du conditionnel, l'auxiliaire des temps composés).",
            },
            {
              type: "rappelExpress",
              title: "Rappel express : les 4 questions",
              blocks: [
                {
                  type: "formulaBlock",
                  lines: [
                    "Q1. La forme est-elle conjuguée ou non conjuguée ?",
                    "Q2. Quel est le mode ? (contexte : que/bien que + volonté ou doute → subjonctif · ordre sans sujet exprimé → impératif · sinon indicatif)",
                    "Q3. Quel est le temps ? (terminaison pour les formes simples ; auxiliaire pour les formes composées ; le « r » distingue le conditionnel présent de l'imparfait, tous deux temps de l'indicatif)",
                    "Q4. Quelle est la valeur dans ce contexte ? (notions 7 et 8)",
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  text: "⚠️ Une forme non conjuguée (infinitif, participe, gérondif) s'arrête à Q1 : on donne sa nature, pas un mode ni un temps personnel.",
                },
              ],
            },
            {
              type: "methodeGroup",
              number: "①",
              title: "Identifier une forme verbale en 4 questions",
              intro:
                "**Exemple :** « il serait malade ».\nOn applique les questions dans l'ordre.",
              steps: [
                {
                  number: "1",
                  text: "**Conjuguée ou non ?** « serait » est conjuguée (forme simple, un mot) → on continue.",
                },
                {
                  number: "2",
                  text: "**Quel mode ?** Pas de subordonnant imposant le subjonctif, pas d'ordre sans sujet exprimé → indicatif.",
                },
                {
                  number: "3",
                  text: "**Quel temps ?** Présence d'un « r » avant la terminaison (-rait), confirmée par le test « nous » (« nous serions » → -rions) → conditionnel présent, un temps de l'indicatif.",
                },
                {
                  number: "💡",
                  text: "**Quelle valeur ?** Préciser dans le contexte (ici, une information rapportée sans certitude). L'analyse détaillée des valeurs relève des notions 7 et 8.",
                  warn: "⚠️ « -ait » fait spontanément penser à l'imparfait : ne pas oublier de chercher le « r » du conditionnel.",
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Donnez le mode et le temps de « viendrait ».",
              correction: [
                { type: "line", text: "« viendrait » contient un « r » avant la terminaison ; test « nous » : « nous viendrions » (-rions) → **conditionnel présent**." },
                { type: "note", text: "Trouvé du premier coup ? Vous tenez la méthode. Sinon, reprenez Q2 et Q3." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Trancher une forme ambiguë",
              intro:
                "**Question typique :** « Donnez le mode et le temps de la forme soulignée. »\nDeux tests règlent l'essentiel des hésitations.",
              steps: [
                {
                  number: "1",
                  text: "**Forme simple en -ait :** appliquer le test « nous » pour départager imparfait (-ions) et conditionnel (-rions).",
                  example: { lines: ["« réduirait » → « nous réduirions » → conditionnel présent"] },
                },
                {
                  number: "2",
                  text: "**Forme composée (deux mots) :** lire le temps de l'auxiliaire.",
                  example: { lines: ["« avait relu » → auxiliaire « avait » (imparfait) → plus-que-parfait"] },
                },
                {
                  number: "💡",
                  text: "**Forme irrégulière isolée :** revenir à l'infinitif, puis au mode et au temps.",
                  example: { lines: ["« vint » → venir → indicatif passé simple"] },
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              title: "Checkpoint : à vous de jouer",
              badge: "30 secondes",
              question: "Mode et temps de « était parti » ?",
              correction: [
                { type: "line", text: "Forme composée : auxiliaire « était » (imparfait de être) + participe passé → **plus-que-parfait** de l'indicatif." },
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
              text: "8 questions rapides pour vérifier que le Cours et la Méthode sont bien ancrés. Le détail objectif par objectif est dans l'onglet Auto-évaluation.",
            },
            {
              type: "quizBlock",
              questions: [
                {
                  objectifId: "mt1",
                  question: "Quels sont les trois éléments attendus par le jury pour une forme verbale ?",
                  options: [
                    "Le groupe, la personne et le nombre",
                    "Le mode, le temps et la valeur",
                    "Le radical, la terminaison et l'auxiliaire",
                    "La nature, la fonction et le genre",
                  ],
                  correctIndex: 1,
                  explanation:
                    "Le jury attend le mode, le temps et la valeur. Cette fiche traite le mode et le temps ; la valeur est approfondie aux notions 7 et 8.",
                },
                {
                  objectifId: "mt3",
                  question: "Comment distinguer le conditionnel présent de l'imparfait ?",
                  options: [
                    "Par la personne du verbe",
                    "Par le test « nous » : -rions (conditionnel) ou -ions (imparfait)",
                    "Par la présence d'un auxiliaire",
                    "On ne peut pas les distinguer",
                  ],
                  correctIndex: 1,
                  explanation:
                    "Le « r » est la marque du conditionnel : « nous serions » (-rions) → conditionnel ; « nous étions » (-ions) → imparfait.",
                },
                {
                  objectifId: "mt4",
                  question: "Dans « elle avait relu sa lettre », « avait relu » est :",
                  options: ["Un passé composé", "Un plus-que-parfait", "Un conditionnel passé", "Un imparfait"],
                  correctIndex: 1,
                  explanation:
                    "L'auxiliaire « avait » est à l'imparfait : c'est un plus-que-parfait. Le passé composé aurait l'auxiliaire au présent (« a relu »).",
                },
                {
                  objectifId: "mt5",
                  question: "Dans « Il faut qu'il vienne », « vienne » est :",
                  options: ["Indicatif présent", "Subjonctif présent", "Conditionnel présent", "Impératif"],
                  correctIndex: 1,
                  explanation:
                    "Après « il faut que » (nécessité), le verbe est au subjonctif : « vienne » est un subjonctif présent.",
                },
                {
                  objectifId: "mt6",
                  question: "« fut » est :",
                  options: ["Le futur de être", "Le passé simple de être", "Le subjonctif de être", "Le présent de être"],
                  correctIndex: 1,
                  explanation:
                    "« fut » est le passé simple de « être » (3e personne du singulier). Le futur est « sera », le subjonctif « soit ».",
                },
                {
                  objectifId: "mt2",
                  question: "Dans « Une femme passa, tenant son enfant », quel est le mode de « tenant » ?",
                  options: ["Indicatif", "Participe (présent)", "Subjonctif", "Aucun : forme non conjuguée sans temps personnel"],
                  correctIndex: 1,
                  explanation:
                    "« tenant » est un participe présent, mode non personnel : on donne sa nature, pas un temps personnel comme pour un verbe conjugué.",
                },
                {
                  objectifId: "mt2",
                  question: "Pour identifier la forme « il aurait voulu », on répond :",
                  options: ["Indicatif passé composé", "Indicatif, conditionnel passé", "Subjonctif passé", "Indicatif plus-que-parfait"],
                  correctIndex: 1,
                  explanation:
                    "L'auxiliaire « aurait » est au conditionnel présent : la forme est un conditionnel passé, temps de l'indicatif.",
                },
                {
                  objectifId: "mt7",
                  question: "Quelle est la première question à se poser devant une forme verbale ?",
                  options: [
                    "Quelle est sa valeur ?",
                    "Est-elle conjuguée ou non conjuguée ?",
                    "Quel est son groupe ?",
                    "Quel est son sujet ?",
                  ],
                  correctIndex: 1,
                  explanation:
                    "On vérifie d'abord si la forme est conjuguée. Une forme non conjuguée (infinitif, participe, gérondif) n'a pas de mode ni de temps personnel à indiquer.",
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
              sub: "Mode et temps, formes simples",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 1 : Mode et temps",
              objectifTag: "Mode et temps",
              question:
                "Identifiez le mode et le temps de chaque verbe souligné :\na) « Une femme <u>passa</u>. »   b) « Ma mère <u>regardait</u> les enfants. »   c) « On <u>écrit</u>. »   d) « Il faut qu'elle <u>vienne</u>. »   e) « Si elle venait, je <u>serais</u> heureux. »",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Mode", "Temps"],
                  rows: [
                    ["passa", "Indicatif", "Passé simple"],
                    ["regardait", "Indicatif", "Imparfait"],
                    ["écrit", "Indicatif", "Présent"],
                    ["vienne", "Subjonctif", "Présent"],
                    ["serais", "Indicatif", "Conditionnel présent"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 2 : Conditionnel présent ou imparfait ?",
              objectifTag: "Conditionnel / imparfait",
              question:
                "Appliquez le test « nous » :\na) « Elle serait malade. »   b) « Elle était fatiguée. »   c) « Il viendrait si on l'invitait. »   d) « Il venait souvent. »   e) « Ce médicament réduirait les risques. »",
              correction: [
                { type: "line", label: "a)", text: "« nous serions » → -rions → conditionnel présent" },
                { type: "line", label: "b)", text: "« nous étions » → -ions sans « r » → imparfait" },
                { type: "line", label: "c)", text: "« nous viendrions » → -rions → conditionnel présent" },
                { type: "line", label: "d)", text: "« nous venions » → -ions sans « r » → imparfait" },
                { type: "line", label: "e)", text: "« nous réduirions » → -rions → conditionnel présent" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 3 : Passé composé ou plus-que-parfait ?",
              objectifTag: "Temps composés",
              question:
                "Justifiez par l'auxiliaire :\na) « j'ai vu se rouvrir les portes. »   b) « Elle avait relu sa lettre. »   c) « je suis monté sur la terrasse. »   d) « il était parti avant son arrivée. »",
              correction: [
                { type: "line", label: "a)", text: "« ai » = présent de avoir → passé composé" },
                { type: "line", label: "b)", text: "« avait » = imparfait de avoir → plus-que-parfait" },
                { type: "line", label: "c)", text: "« suis » = présent de être → passé composé" },
                { type: "line", label: "d)", text: "« était » = imparfait de être → plus-que-parfait" },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "echauffement",
              title: "Exercice 4 : Indicatif ou subjonctif ?",
              objectifTag: "Indicatif / subjonctif",
              question:
                "Justifiez par le contexte :\na) « Il faut qu'il vienne. »   b) « Je sais qu'il vient. »   c) « bien qu'elle soit fatiguée »   d) « Je crois qu'elle part demain. »",
              correction: [
                { type: "line", label: "a)", text: "Subjonctif (« il faut que » : nécessité) → « vienne »" },
                { type: "line", label: "b)", text: "Indicatif (« je sais que » : certitude) → « vient »" },
                { type: "line", label: "c)", text: "Subjonctif (« bien que » : concession) → « soit »" },
                { type: "line", label: "d)", text: "Indicatif (« je crois que » : opinion présentée comme réelle) → « part »" },
              ],
            },
            {
              type: "niveauBanner",
              level: "n2",
              stars: "★★☆",
              label: "Niveau 2 : Analyser",
              sub: "Formes composées, irrégulières, cas ambigus",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 5 : Passés simples irréguliers",
              objectifTag: "Formes irrégulières",
              question:
                "Donnez l'infinitif, le mode et le temps de chaque forme :\na) « fut »   b) « vint »   c) « fit »   d) « put »   e) « sut »   f) « dit »",
              correction: [
                {
                  type: "table",
                  headers: ["Forme", "Infinitif", "Mode · Temps"],
                  rows: [
                    ["fut", "être", "Indicatif · passé simple"],
                    ["vint", "venir", "Indicatif · passé simple"],
                    ["fit", "faire", "Indicatif · passé simple"],
                    ["put", "pouvoir", "Indicatif · passé simple"],
                    ["sut", "savoir", "Indicatif · passé simple"],
                    ["dit", "dire", "Indicatif · passé simple (ou présent selon le contexte)"],
                  ],
                },
                { type: "note", text: "⚠️ « dit » peut être présent (« il dit la vérité ») ou passé simple (« il dit alors… ») : le contexte tranche." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 6 : Formes composées",
              objectifTag: "Temps composés",
              question:
                "Identifiez le mode et le temps (attention à l'auxiliaire) :\na) « ils étaient moins beaux »   b) « j'ai vu se rouvrir »   c) « je suis monté »   d) « elle avait relu sa lettre »   e) « j'aurais voulu vous écrire »",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Mode · Temps", "Auxiliaire"],
                  rows: [
                    ["étaient", "Indicatif · imparfait", "Forme simple"],
                    ["ai vu", "Indicatif · passé composé", "« ai » = présent de avoir"],
                    ["suis monté", "Indicatif · passé composé", "« suis » = présent de être"],
                    ["avait relu", "Indicatif · plus-que-parfait", "« avait » = imparfait de avoir"],
                    ["aurais voulu", "Indicatif · conditionnel passé", "« aurais » = avoir au conditionnel présent"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 7 : Corriger l'analyse",
              question:
                "Ces analyses sont-elles correctes ? Corrigez si nécessaire :\na) « serait » → indicatif imparfait   b) « avait vu » → passé composé   c) « vienne » (après « bien que ») → indicatif présent   d) « fut » → futur simple",
              correction: [
                { type: "line", label: "a)", text: "Faux : test « nous serions » (-rions, avec « r ») → conditionnel présent, pas imparfait." },
                { type: "line", label: "b)", text: "Faux : auxiliaire « avait » (imparfait) → plus-que-parfait." },
                { type: "line", label: "c)", text: "Faux : « bien que » impose le subjonctif → subjonctif présent." },
                { type: "line", label: "d)", text: "Faux : « fut » = passé simple de être ; le futur est « sera »." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n2",
              title: "Exercice 8 : « vit » et « vit »",
              question:
                "Distinguez les deux « vit » et proposez un contexte pour chacun.",
              correction: [
                {
                  type: "table",
                  headers: ["Forme", "Infinitif", "Mode · Temps", "Contexte"],
                  rows: [
                    ["vit", "vivre", "Indicatif · présent", "« Il vit à Paris depuis dix ans. »"],
                    ["vit", "voir", "Indicatif · passé simple", "« Il vit la femme traverser la rue. »"],
                  ],
                },
                { type: "note", text: "💡 Seul le contexte tranche : récit au passé et événement ponctuel → passé simple de voir ; situation durable → présent de vivre." },
              ],
            },
            {
              type: "niveauBanner",
              level: "n3",
              stars: "★★★",
              label: "Niveau 3 : Maîtriser",
              sub: "Extraits littéraires, relevé complet des verbes conjugués",
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 9 · Extrait littéraire : Émile Zola",
              enonce:
                "« Une femme passa, tenant par la main un petit garçon. Elle se hâtait, les yeux baissés, pressée d'atteindre sa maison. »\n*(Émile Zola, Germinal, 1885)*",
              question: "Relevez tous les verbes conjugués et donnez leur mode et leur temps.",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Mode", "Temps"],
                  rows: [
                    ["passa", "Indicatif", "Passé simple"],
                    ["se hâtait", "Indicatif", "Imparfait"],
                  ],
                },
                { type: "note", text: "⚠️ « tenant », « baissés », « pressée », « atteindre » sont des formes non conjuguées : pas de mode ni de temps personnel à indiquer." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 10 · Extrait littéraire : Colette",
              enonce:
                "« Ma mère, dont le regard ne vieillissait pas, regardait les enfants jouer dans le jardin. Elle souriait, muette, heureuse, et ne disait rien. »\n*(Colette, La Maison de Claudine, 1922)*",
              question: "Relevez tous les verbes conjugués et donnez leur mode et leur temps.",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Mode", "Temps"],
                  rows: [
                    ["vieillissait", "Indicatif", "Imparfait"],
                    ["regardait", "Indicatif", "Imparfait"],
                    ["souriait", "Indicatif", "Imparfait"],
                    ["disait", "Indicatif", "Imparfait"],
                  ],
                },
                { type: "note", text: "💡 « jouer » est un infinitif (forme non conjuguée) : pas de mode ni de temps personnel. La valeur de ces imparfaits est traitée aux notions 7 et 8." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 11 · Extrait littéraire : Marguerite Yourcenar",
              enonce:
                "« J'ai vu se rouvrir les portes qui me séparaient du monde, je suis monté sur la terrasse, mais ils étaient moins beaux que ceux de tes crépuscules. »\n*(Marguerite Yourcenar, Nouvelles orientales, 1963)*",
              question: "Relevez tous les verbes conjugués et donnez leur mode et leur temps.",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Mode", "Temps"],
                  rows: [
                    ["ai vu", "Indicatif", "Passé composé"],
                    ["séparaient", "Indicatif", "Imparfait"],
                    ["suis monté", "Indicatif", "Passé composé"],
                    ["étaient", "Indicatif", "Imparfait"],
                  ],
                },
                { type: "note", text: "💡 « se rouvrir », « regarder » (s'ils figurent dans l'extrait) sont des infinitifs : formes non conjuguées." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "standard",
              level: "n3",
              title: "Exercice 12 · Extrait littéraire : Victor Hugo",
              enonce:
                "« Insensées choses qui nous font rêver ! Monte en moi une humble flamme. »\n*(Victor Hugo)*",
              question: "Relevez tous les verbes conjugués et donnez leur mode et leur temps.",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Mode", "Temps"],
                  rows: [
                    ["font", "Indicatif", "Présent"],
                    ["Monte", "Indicatif", "Présent"],
                  ],
                },
                { type: "note", text: "⚠️ « rêver » est un infinitif : forme non conjuguée, pas de mode ni de temps personnel." },
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
              text: "Ces exercices reproduisent le format de la question sur le verbe de la Partie 1 : extrait littéraire, identification du mode et du temps, formulation jury. Les exercices calqués sur des sujets récents portent le badge ✦. La valeur (3e élément attendu) est approfondie aux notions 7 et 8.",
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 1 : Émile Zola, Germinal",
              enonce:
                "« Une femme <u>passa</u>, tenant par la main un petit garçon. Elle <u>se hâtait</u>, les yeux baissés. »\n*(Émile Zola, Germinal, 1885)*",
              question: "Donnez le mode et le temps de « passa » et « se hâtait ».",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Mode", "Temps"],
                  rows: [
                    ["passa", "Indicatif", "Passé simple"],
                    ["se hâtait", "Indicatif", "Imparfait"],
                  ],
                },
                { type: "note", text: "💡 La valeur (action ponctuelle pour le passé simple, arrière-plan descriptif pour l'imparfait) s'analyse aux notions 7 et 8." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 2 : Colette, La Maison de Claudine",
              enonce:
                "« Ma mère, dont le regard ne <u>vieillissait</u> pas, <u>regardait</u> les enfants jouer dans le jardin. »\n*(Colette, La Maison de Claudine, 1922)*",
              question: "Donnez le mode et le temps de « vieillissait » et « regardait ».",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Mode", "Temps"],
                  rows: [
                    ["vieillissait", "Indicatif", "Imparfait"],
                    ["regardait", "Indicatif", "Imparfait"],
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "crpe",
              title: "Exercice 3 : forme ambiguë",
              enonce: "« Selon la rumeur, il <u>serait</u> déjà parti. »",
              question: "Donnez le mode et le temps de « serait », et justifiez par un test.",
              correction: [
                { type: "line", text: "« serait » contient un « r » avant la terminaison. Test « nous » : « nous serions » (-rions) → **conditionnel présent**." },
                { type: "note", text: "⚠️ « -ait » fait penser à l'imparfait, mais le « r » signale le conditionnel. La valeur (information non confirmée) relève des notions 7 et 8." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format concours récent",
              title: "Exercice 4 : Marguerite Yourcenar, Comment Wang-Fô fut sauvé",
              enonce:
                "« J'<u>ai vu</u> se rouvrir les portes qui me <u>séparaient</u> du monde ; je <u>suis monté</u> sur la terrasse. »\n*(Marguerite Yourcenar, Nouvelles orientales, 1963)*",
              question: "Format identique au concours · Donnez le mode et le temps de « ai vu », « séparaient » et « suis monté ».",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Mode", "Temps"],
                  rows: [
                    ["ai vu", "Indicatif", "Passé composé"],
                    ["séparaient", "Indicatif", "Imparfait"],
                    ["suis monté", "Indicatif", "Passé composé"],
                  ],
                },
                { type: "note", text: "💡 « suis monté » est un passé composé (auxiliaire « être » au présent), à ne pas confondre avec une voix passive." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "annale",
              badge: "✦ Format concours récent",
              title: "Exercice 5 : Lola Lafon, Quand tu écouteras cette chanson",
              enonce:
                "« On <u>écrit</u> parce qu'on ne <u>sait</u> par quel autre biais attraper le réel. »\n*(Lola Lafon, Quand tu écouteras cette chanson, 2023)*",
              question: "Format identique au concours · Donnez le mode et le temps de « écrit » et « sait ».",
              correction: [
                {
                  type: "table",
                  headers: ["Verbe", "Mode", "Temps"],
                  rows: [
                    ["écrit", "Indicatif", "Présent"],
                    ["sait", "Indicatif", "Présent"],
                  ],
                },
                { type: "note", text: "💡 « attraper » est un infinitif (forme non conjuguée). La valeur de vérité générale de ces présents est traitée aux notions 7 et 8." },
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
              title: "Exercice 1 · Réponse à corriger : « serait »",
              enonce: "Réponse d'un candidat : « **serait** : indicatif imparfait », pour *« Selon la rumeur, il serait parti. »*",
              question: "Identifiez l'erreur et rédigez la réponse attendue.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Erreur : le temps. « -ait » a été pris pour un imparfait", bad: true },
                    { text: "Test « nous » : « nous serions » → -rions (avec « r ») → conditionnel présent" },
                    { text: "Réponse attendue : indicatif, conditionnel présent (le mode indicatif était correct ; c'est le temps qui était faux)" },
                  ],
                },
                { type: "note", text: "💡 La valeur (information rapportée non confirmée) s'analyse aux notions 7 et 8." },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 2 · Réponse à corriger : « avait relu »",
              enonce: "Réponse d'un candidat : « **avait relu** : passé composé », pour *« Elle avait relu sa lettre avant de la poster. »*",
              question: "Identifiez l'erreur et rédigez la réponse attendue.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Erreur : passé composé annoncé alors que l'auxiliaire est à l'imparfait", bad: true },
                    { text: "« avait » = imparfait de avoir → plus-que-parfait" },
                    { text: "Réponse attendue : indicatif plus-que-parfait (le passé composé serait « a relu »)" },
                  ],
                },
              ],
            },
            {
              type: "exerciceCard",
              variant: "err-type",
              title: "Exercice 3 · Réponse à corriger : « fut »",
              enonce: "Réponse d'un candidat : « **fut** : futur simple de être », pour *« La nuit fut longue. »*",
              question: "Identifiez l'erreur et donnez la forme correcte du futur.",
              correction: [
                {
                  type: "checklist",
                  items: [
                    { text: "Erreur : « fut » confondu avec un futur", bad: true },
                    { text: "« fut » est le passé simple de être (3e personne du singulier)" },
                    { text: "Le futur simple de être (3e personne du singulier) est « sera »" },
                    { text: "Réponse attendue : indicatif passé simple" },
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
                  question: "Quels sont les trois éléments attendus par le jury pour une forme verbale ?",
                  answer:
                    "1. **Mode** (indicatif, subjonctif, impératif, infinitif, participe, gérondif).\n2. **Temps** (présent, imparfait, passé simple, passé composé, conditionnel présent…).\n3. **Valeur** (ce que le temps exprime dans le contexte).",
                  astuce: "⚠️ La valeur est le 3e élément, là où se perdent des points. Son analyse détaillée est aux notions 7 et 8.",
                },
                {
                  question: "Comment distinguer conditionnel présent et imparfait ?",
                  answer:
                    "Test « nous » :\nImparfait → -ions sans « r » (« nous regardions »).\nConditionnel → -rions avec « r » (« nous regarderions »).",
                  astuce: "💡 Le « r » est la marque du conditionnel.",
                },
                {
                  question: "Comment distinguer passé composé et plus-que-parfait ?",
                  answer:
                    "On regarde le temps de l'auxiliaire :\nPassé composé → auxiliaire au présent (« a vu », « est parti »).\nPlus-que-parfait → auxiliaire à l'imparfait (« avait vu », « était parti »).",
                },
                {
                  question: "Passé simple de être : les 6 formes ?",
                  answer: "fus, fus, fut, fûmes, fûtes, furent.",
                  astuce: "⚠️ « fut » et « furent » sont les plus fréquents en littérature. Ne pas confondre avec « sera » (futur) ou « soit » (subjonctif).",
                },
                {
                  question: "Formes irrégulières du passé simple à connaître ?",
                  answer:
                    "être → fut · avoir → eut · faire → fit · voir → vit · venir → vint · pouvoir → put · savoir → sut · dire → dit · mettre → mit.",
                },
                {
                  question: "Formes irrégulières du subjonctif présent à connaître ?",
                  answer:
                    "être → soit · avoir → ait · aller → aille · faire → fasse · pouvoir → puisse · savoir → sache · vouloir → veuille · venir → vienne.",
                  astuce: "💡 On les rencontre après « que, bien que, pour que, avant que… ».",
                },
                {
                  question: "Comment identifier une forme verbale ? (les 4 questions)",
                  answer:
                    "Q1 : conjuguée ou non ? Q2 : quel mode ? Q3 : quel temps ? Q4 : quelle valeur ?\nUne forme non conjuguée (infinitif, participe, gérondif) s'arrête à Q1 : on donne seulement sa nature.",
                },
                {
                  question: "Comment identifier la forme du conditionnel ?",
                  answer:
                    "On répond « **indicatif, conditionnel présent** » ou « **indicatif, conditionnel passé** » : dans la terminologie Éduscol récente retenue, le conditionnel est un **temps de l'indicatif**, pas un mode autonome.",
                  astuce: "💡 L'appellation traditionnelle « mode conditionnel » subsiste dans certains usages scolaires, mais ce n'est pas la formulation retenue.",
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
              center: { title: "Modes et temps", subtitle: "Identifier la forme verbale" },
              branches: [
                {
                  title: "3 éléments attendus",
                  lines: ["Mode · temps · valeur", "Cette fiche : mode + temps", "Valeur → notions 7 et 8"],
                  variant: "blue",
                },
                {
                  title: "Les modes",
                  lines: ["Personnels : indicatif, subjonctif, impératif", "Non personnels : infinitif, participe, gérondif", "Conditionnel = temps de l'indicatif"],
                  variant: "blue",
                },
                {
                  title: "Tests décisifs",
                  lines: ["Conditionnel / imparfait : test « nous » (r)", "Passé composé / PQP : temps de l'auxiliaire", "Indicatif / subjonctif : contexte"],
                  variant: "green",
                },
                {
                  title: "Formes irrégulières",
                  lines: ["Passé simple : fut, vint, fit, put…", "Subjonctif : soit, ait, aille, fasse…"],
                  variant: "yellow",
                },
                {
                  title: "Méthode en 4 questions",
                  lines: ["Conjuguée ? mode ?", "temps ? valeur ?"],
                  variant: "green",
                },
                {
                  title: "Renvoi",
                  lines: ["Valeurs des temps", "→ notions 7 et 8"],
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
