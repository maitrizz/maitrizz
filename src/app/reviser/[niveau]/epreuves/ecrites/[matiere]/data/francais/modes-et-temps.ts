import type { Fiche } from "@/components/fiche/types";
import { EXERCICES_MODES_ET_TEMPS } from "./exercices-modes-et-temps";
import { COPIES_MODES_ET_TEMPS } from "./copies-modes-et-temps";

const SAVOIR_FAIRE = [
  { id: "modes-personnels", label: "Modes personnels" },
  { id: "modes-non-personnels", label: "Modes non personnels" },
  { id: "temps-simples-composes", label: "Temps simples/composés" },
  { id: "valeurs-temporelles", label: "Valeurs temporelles" },
  { id: "valeurs-modales", label: "Valeurs modales" },
  { id: "concordance", label: "Concordance" },
];

export const ficheModesEtTemps: Fiche = {
  slug: "modes-et-temps",
  matiere: "francais",
  numero: 7,
  partie: "Partie 1 : Le verbe",
  title: "Modes et temps",
  subtitle: "Identifier le mode et le temps d'une forme verbale : morphologie, terminaisons, formes irrégulières",
  badges: [
      {
          "label": "★★★ Tombe chaque année",
          "variant": "hot"
      },
      {
          "label": "Cycle 3-4 · BOEN n°1 du 22 janvier 2019",
          "variant": "info"
      }
  ],
  metaTitle: "Modes et temps du verbe (CRPE) · Fiche de révision | Maitrizz",
  metaDescription:
    "Modes et temps du verbe au CRPE : les modes, terminaisons du présent, imparfait, passé simple, futur, conditionnel, subjonctif. Méthode et exercices corrigés.",
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
                  headers: ["Mode", "Personnel ?", "Temps principaux", "Exemple"],
                  rows: [
                    ["Indicatif", "Oui (avec sujet)", "Présent, imparfait, passé simple, passé composé, plus-que-parfait, futur, futur antérieur, conditionnel présent, conditionnel passé", "« Il vient. »"],
                    ["Subjonctif", "Oui (avec sujet)", "Présent, passé, imparfait (littéraire)", "« Il faut qu'il vienne. »"],
                    ["Impératif", "Oui (sans sujet exprimé)", "Présent, passé", "« Viens ! »"],
                    ["Infinitif", "Non", "Présent, passé", "« venir »"],
                    ["Participe", "Non", "Présent, passé", "« venant », « venu »"],
                    ["Gérondif", "Non", "Présent (en + participe présent)", "« en venant »"],
                  ],
                },
                {
                  type: "callout",
                  variant: "warning",
                  icon: "⚠️",
                  title: "Le statut du conditionnel",
                  text: "Dans la [terminologie grammaticale de référence publiée par Éduscol](https://eduscol.education.gouv.fr/media/67998/download?attachment=), le conditionnel n'est pas un mode autonome : c'est un **temps de l'indicatif** (conditionnel présent, conditionnel passé). On répond donc « **indicatif, conditionnel présent** » ou « **indicatif, conditionnel passé** ». L'appellation traditionnelle « mode conditionnel » subsiste dans certains usages scolaires : on peut la mentionner, mais ce n'est pas la formulation retenue.",
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
                  text: "Pour une **forme simple** (un seul mot), la terminaison suffit le plus souvent à identifier le temps. Le tableau ci-dessous aligne les six personnes : lu en colonnes, il fait ressortir ce qui sépare chaque temps, à commencer par le **« r »** du futur et du conditionnel.",
                },
                {
                  type: "table",
                  title: "Le tableau des terminaisons (formes régulières)",
                  headers: ["Temps", "je / j'", "tu", "il · elle", "nous", "vous", "ils · elles"],
                  rows: [
                    ["**Présent** · 1er groupe", "-e", "-es", "-e", "-ons", "-ez", "-ent"],
                    ["**Présent** · autres", "-s", "-s", "-t / -d", "-ons", "-ez", "-ent"],
                    ["**Imparfait**", "-ais", "-ais", "-ait", "-ions", "-iez", "-aient"],
                    ["**Passé simple** · en -a", "-ai", "-as", "-a", "-âmes", "-âtes", "-èrent"],
                    ["**Passé simple** · en -i", "-is", "-is", "-it", "-îmes", "-îtes", "-irent"],
                    ["**Passé simple** · en -u", "-us", "-us", "-ut", "-ûmes", "-ûtes", "-urent"],
                    ["**Futur**", "-**r**ai", "-**r**as", "-**r**a", "-**r**ons", "-**r**ez", "-**r**ont"],
                    ["**Conditionnel** présent", "-**r**ais", "-**r**ais", "-**r**ait", "-**r**ions", "-**r**iez", "-**r**aient"],
                    ["**Subjonctif** présent", "-e", "-es", "-e", "-ions", "-iez", "-ent"],
                  ],
                },
                {
                  type: "cardGrid",
                  columns: 3,
                  variant: "info",
                  cards: [
                    {
                      title: "Le « r » qui projette",
                      lines: [
                        "Un **« r »** juste avant la terminaison = **futur** (-**r**ai) ou **conditionnel** (-**r**ais).",
                        "*« il partira », « il partirait »*",
                      ],
                      variant: "success",
                    },
                    {
                      title: "-ais sans « r »",
                      lines: [
                        "**-ais · -ait · -aient** sans « r » devant = **imparfait**.",
                        "*« il partait », « ils regardaient »*",
                      ],
                      variant: "info",
                    },
                    {
                      title: "Après « que… »",
                      lines: [
                        "Une terminaison qui suit **que, bien que, pour que, il faut que** = souvent **subjonctif**.",
                        "*« qu'il parte », « qu'elle vienne »*",
                      ],
                      variant: "warning",
                    },
                  ],
                },
                {
                  type: "callout",
                  variant: "info",
                  text: "💡 Au **présent**, les verbes les plus courants sont irréguliers et s'apprennent par cœur : *suis, es, est · ai, a, ont · vais, va, vont · fais, fait, font · dis, dit*. Les formes irrégulières du **passé simple** et du **subjonctif** sont rassemblées à l'étape ④.",
                },
                {
                  type: "callout",
                  variant: "warning",
                  title: "⚠️ Le piège imparfait / conditionnel",
                  text: "Une forme en **-ait** peut être un imparfait (« regardait ») ou un conditionnel (« serait »). Test décisif : mettez à « nous ». **-ions** sans « r » = imparfait (« nous regardions ») ; **-rions** avec « r » = conditionnel (« nous serions »).",
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
                  text: "⚠️ Clé de lecture : passé composé = auxiliaire au présent (« a vu ») ; plus-que-parfait = auxiliaire à l'imparfait (« avait vu »).",
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
              title: "Le bon ordre d'analyse",
              text: "Pour identifier une forme verbale, avancez toujours dans le même ordre : vérifiez si elle est conjuguée, puis déterminez son mode, son temps et sa valeur. Chaque réponse doit être justifiée par un indice précis : la terminaison, l'auxiliaire ou le contexte. La valeur des temps est approfondie dans les notions 7 et 8.",
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
                  text: "**Quelle valeur ?** Ici, la forme présente une information rapportée sans certitude.\n\n**Réponse attendue :** « serait » est conjugué à l'indicatif, au conditionnel présent. Il exprime ici une information non confirmée.",
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
                { type: "line", text: "**Réponse attendue :** « viendrait » est conjugué à l'indicatif, au conditionnel présent. Le test « nous viendrions » fait apparaître la terminaison -rions." },
                { type: "note", text: "Trouvé du premier coup ? Vous tenez la méthode. Sinon, reprenez Q2 et Q3." },
              ],
            },
            {
              type: "methodeGroup",
              number: "②",
              title: "Trancher une forme ambiguë",
              intro:
                "*Question typique : Donnez le mode et le temps des formes soulignées dans « Ce traitement <u>réduirait</u> les risques », « Elle <u>avait relu</u> le dossier » et « Il <u>vint</u> aussitôt ».*",
              steps: [
                {
                  number: "1",
                  text: "**Forme simple en -ait :** appliquer le test « nous » pour départager imparfait (-ions) et conditionnel (-rions).",
                  example: { lines: ["**Réponse attendue :** « réduirait » est conjugué à l'indicatif, au conditionnel présent. Test : « nous réduirions »."] },
                },
                {
                  number: "2",
                  text: "**Forme composée (deux mots) :** lire le temps de l'auxiliaire.",
                  example: { lines: ["**Réponse attendue :** « avait relu » est conjugué à l'indicatif, au plus-que-parfait. L'auxiliaire « avait » est à l'imparfait."] },
                },
                {
                  number: "💡",
                  text: "**Forme irrégulière isolée :** revenir à l'infinitif, puis au mode et au temps.",
                  example: { lines: ["**Réponse attendue :** « vint » est conjugué à l'indicatif, au passé simple du verbe « venir »."] },
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
                { type: "line", text: "**Réponse attendue :** « était parti » est conjugué à l'indicatif, au plus-que-parfait. L'auxiliaire « était » est à l'imparfait." },
                { type: "note", text: "@nav Méthode en tête ? Direction S’entraîner." },
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
              title: "Modes et temps",
              savoirFaire: SAVOIR_FAIRE,
              exercices: EXERCICES_MODES_ET_TEMPS,
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
              title: "Modes et temps",
              copies: COPIES_MODES_ET_TEMPS,
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
      ],
    },
  ],
};
