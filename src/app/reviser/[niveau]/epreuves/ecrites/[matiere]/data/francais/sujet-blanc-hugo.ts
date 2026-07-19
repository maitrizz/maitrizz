import type { Block, Fiche } from "@/components/fiche/types";
import type { Niveau } from "@/lib/niveau";

/**
 * ════════════════════════════════════════════════════════════════════════
 * SUJET BLANC nº1 — Victor Hugo, « Le Dernier Jour d'un condamné » (1829)
 * ════════════════════════════════════════════════════════════════════════
 *
 * Épreuve blanche « tout-en-un » (bloc examRunner) : un seul flux où le candidat
 * choisit son mode (examen / entraînement), compose directement sur le site
 * (texte à gauche, questions et champs de réponse à droite), suit le temps
 * (global + par partie), puis se corrige (réponse vs attendu, auto-évaluation
 * cochable, note estimée /20, bilan par partie, récap du temps, plan de
 * révision, historique).
 *
 * Texte support : chapitre I, reproduit VERBATIM depuis l'édition de 1910
 * (Wikisource). Victor Hugo est mort en 1885 : œuvre dans le domaine public.
 *
 * Deux variantes (une seule fabrique, texte partagé) :
 *  - M2 : épreuve de français autonome (3 h), barème estimé 7 / 4 / 9.
 *  - L3 : partie « français » de l'épreuve commune (~2 h), barème estimé 6 / 4 / 10.
 * Barèmes présentés comme estimations (non officiels), conformément à la charte.
 * ════════════════════════════════════════════════════════════════════════
 */

const TEXTE_PARAGRAPHES: string[] = [
  "Condamné à mort !",
  "Voilà cinq semaines que j'habite avec cette pensée, toujours seul avec elle, toujours glacé de sa présence, toujours courbé sous son poids !",
  "Autrefois, car il me semble qu'il y a plutôt des années que des semaines, j'étais un homme comme un autre homme. Chaque jour, chaque heure, chaque minute avait son idée. Mon esprit, jeune et riche, était plein de fantaisies. Il s'amusait à me les dérouler les unes après les autres, sans ordre et sans fin, brodant d'inépuisables arabesques cette rude et mince étoffe de la vie. C'étaient des jeunes filles, de splendides chapes d'évêque, des batailles gagnées, des théâtres pleins de bruit et de lumière, et puis encore des jeunes filles et de sombres promenades la nuit sous les larges bras des marronniers. C'était toujours fête dans mon imagination. Je pouvais penser à ce que je voulais, j'étais libre.",
  "Maintenant je suis captif. Mon corps est aux fers dans un cachot, mon esprit est en prison dans une idée. Une horrible, une sanglante, une implacable idée ! Je n'ai plus qu'une pensée, qu'une conviction, qu'une certitude : condamné à mort !",
  "Quoi que je fasse, elle est toujours là, cette pensée infernale, comme un spectre de plomb à mes côtés, seule et jalouse, chassant toute distraction, face à face avec moi misérable, et me secouant de ses deux mains de glace quand je veux détourner la tête ou fermer les yeux. Elle se glisse sous toutes les formes où mon esprit voudrait la fuir, se mêle comme un refrain horrible à toutes les paroles qu'on m'adresse, se colle avec moi aux grilles hideuses de mon cachot ; m'obsède éveillé, épie mon sommeil convulsif, et reparaît dans mes rêves sous la forme d'un couteau.",
  "Je viens de m'éveiller en sursaut, poursuivi par elle et me disant : – Ah ! ce n'est qu'un rêve ! – Hé bien ! avant même que mes yeux lourds aient eu le temps de s'entr'ouvrir assez pour voir cette fatale pensée écrite dans l'horrible réalité qui m'entoure, sur la dalle mouillée et suante de ma cellule, dans les rayons pâles de ma lampe de nuit, dans la trame grossière de la toile de mes vêtements, sur la sombre figure du soldat de garde dont la giberne reluit à travers la grille du cachot, il me semble que déjà une voix a murmuré à mon oreille : – Condamné à mort !",
];

// ── L'épreuve (bloc examRunner) ─────────────────────────────────────────────
function blocEpreuve(niveau: Niveau): Block {
  const m2 = niveau === "m2";
  const half2 = m2 ? 1 : 0.75;
  const half4 = m2 ? 0.75 : 0.5;

  return {
    type: "examRunner",
    intro:
      "Un sujet complet sur un texte de Victor Hugo (domaine public). Choisissez votre mode, composez directement sur le site, puis corrigez-vous : note estimée /20 (barème indicatif), bilan par partie et plan de révision.",
    tips: [
      "**La langue est notée partout**, pas seulement en Partie 3. Une réponse de grammaire mal écrite perd des points.",
      "**Restez précis dans vos analyses** : nommez le fait de langue exact (*« subordonnée relative »*, *« épithète détachée »*) et justifiez-le par la structure de la phrase, au lieu d'une description vague.",
      "**En Partie 3, la question prime sur le texte** : le texte est un appui, pas l'objet à commenter.",
      "**Gardez toujours du temps pour la rédaction** : c'est la partie qui pèse le plus.",
    ],
    text: {
      title: "Victor Hugo, Le Dernier Jour d'un condamné (1829), chapitre I",
      paragraphs: TEXTE_PARAGRAPHES,
      note: "Un narrateur, condamné à mort, attend son exécution. Le roman s'ouvre sur ses pensées, cinq semaines après le verdict. Hugo, opposé à la peine de mort, donne la parole au condamné de l'intérieur.",
    },
    totalMinutes: m2 ? 180 : 120,
    parts: [
      {
        id: "p1",
        title: "Partie 1 — Étude de la langue",
        points: m2 ? 7 : 6,
        recommendedMinutes: m2 ? 45 : 35,
        questions: [
          {
            id: "q1",
            label: "Question 1 · classe grammaticale et fonction",
            enonce:
              "Donnez la **classe grammaticale** et la **fonction** des mots soulignés : a) « **Il** s'amusait à me les dérouler » ; b) « Il s'amusait à me **les** dérouler » ; c) « Mon esprit, jeune et **riche**, était plein de fantaisies » ; d) « comme un spectre **de plomb** à mes côtés ».",
            answerPrompt: "Pour chaque mot : sa classe et sa fonction.",
            answerRows: 3,
            elements: [
              { label: "**a) Il** : pronom personnel, **sujet** de *s'amusait*", points: 0.5 },
              { label: "**b) les** : pronom personnel, **COD** de *dérouler*", points: 0.5 },
              { label: "**c) riche** : adjectif qualificatif, **épithète détachée** du nom *esprit*", points: 0.5 },
              { label: "**d) de plomb** : GN prépositionnel, **complément du nom** *spectre* (CDN)", points: 0.5 },
            ],
            revise: { label: "Fiche : Classes grammaticales", slug: "classes-grammaticales" },
          },
          {
            id: "q2",
            label: "Question 2 · la subordonnée « qu'on m'adresse »",
            enonce:
              "Analysez la proposition subordonnée soulignée (nature, mot introducteur, fonction) : « se mêle comme un refrain horrible à toutes les paroles **qu'on m'adresse** ».",
            answerPrompt: "Nature, mot introducteur, fonction.",
            elements: [
              { label: "**Nature** : subordonnée **relative**, pronom relatif *qu'* (antécédent *paroles*)", points: half2 },
              { label: "**Fonction** : complément de l'antécédent *paroles* ; le relatif *que* est **COD** du verbe *adresser*", points: half2 },
            ],
            revise: { label: "Fiche : Phrase complexe", slug: "phrase-complexe" },
          },
          {
            id: "q3",
            label: "Question 3 · l'opposition des temps",
            enonce:
              "Relevez le temps verbal dominant du 2ᵉ paragraphe (« Autrefois… »), puis celui des 3ᵉ et 4ᵉ paragraphes (« Maintenant… »). **Justifiez** la valeur de cette opposition.",
            answerPrompt: "Le temps de chaque passage et la valeur de l'opposition.",
            elements: [
              { label: "2ᵉ paragraphe : **imparfait** (le passé révolu, l'habitude)", points: 0.5 },
              { label: "3ᵉ-4ᵉ paragraphes : **présent** (présent d'énonciation, la captivité actuelle)", points: 0.5 },
              { label: "Valeur : la **rupture** entre liberté passée et enfermement présent", points: 0.5 },
            ],
            revise: { label: "Fiche : Modes et temps", slug: "modes-et-temps" },
          },
          {
            id: "q4",
            label: "Question 4 · les accords",
            enonce:
              "Justifiez l'accord du verbe et du participe passé dans : « **C'étaient** des jeunes filles, de splendides chapes d'évêque, des batailles **gagnées**… ».",
            answerPrompt: "Justifiez « C'étaient » et « gagnées ».",
            elements: [
              { label: "**C'étaient** : présentatif *c'est / ce sont*, accord avec l'énumération au pluriel qui suit", points: half4 },
              { label: "**gagnées** : participe passé employé comme adjectif (épithète de *batailles*), accordé au féminin pluriel", points: half4 },
            ],
            revise: { label: "Fiche : Accords dans le GN et le GV", slug: "accords-gn-gv" },
          },
        ],
      },
      {
        id: "p2",
        title: "Partie 2 — Lexique",
        points: 4,
        recommendedMinutes: m2 ? 30 : 25,
        questions: [
          {
            id: "q5",
            label: "Question 5 · formation des mots",
            enonce: "Décomposez et expliquez la **formation** des mots : *implacable*, *inépuisables*, *captif*.",
            answerPrompt: "Décomposez les trois mots.",
            elements: [
              { label: "**implacable** : *in-* (privatif) + *plac-* (*placare*, apaiser) + *-able* → « qu'on ne peut apaiser »", points: 0.5 },
              { label: "**inépuisables** : *in-* + *épuis-* + *-able* → « qu'on ne peut épuiser »", points: 0.5 },
              { label: "**captif** : emprunt savant au latin *captivus* (*capere*, prendre)", points: 0.5 },
            ],
            revise: { label: "Fiche : Formation des mots", slug: "formation-des-mots" },
          },
          {
            id: "q6",
            label: "Question 6 · sens en contexte",
            enonce: "Expliquez le **sens en contexte** de « fantaisies » et de « arabesques » (2ᵉ paragraphe).",
            answerPrompt: "Le sens des deux mots dans le texte.",
            elements: [
              { label: "**fantaisies** : les productions libres de l'imagination (sens créatif, pas « caprice »)", points: 0.5 },
              { label: "**arabesques** : motif sinueux ; au figuré, les méandres de l'imagination (cf. *« brodant »*)", points: 0.5 },
            ],
            revise: { label: "Fiche : Relations sémantiques", slug: "relations-semantiques" },
          },
          {
            id: "q7",
            label: "Question 7 · champs lexicaux",
            enonce:
              "Relevez deux mots du **champ lexical de la liberté** et deux du **champ lexical de l'enfermement**. Quel rapport le texte établit-il entre eux ?",
            answerPrompt: "Deux mots de chaque champ, et le rapport.",
            elements: [
              { label: "**Liberté** (*libre, fête…*) et **enfermement** (*captif, aux fers, cachot, prison, grilles*)", points: 0.5 },
              { label: "Rapport : **antithèse** marquant la **rupture** entre l'avant et le maintenant", points: 0.5 },
            ],
            revise: { label: "Fiche : Relations sémantiques", slug: "relations-semantiques" },
          },
          {
            id: "q8",
            label: "Question 8 · figure de style",
            enonce: "Identifiez la **figure de style** dans « comme un spectre de plomb à mes côtés » et précisez ce qu'elle exprime.",
            answerPrompt: "La figure et ce qu'elle exprime.",
            elements: [
              { label: "**Comparaison** (*« comme »*) : *« de plomb »* dit le poids qui écrase ; la pensée est aussi **personnifiée**", points: 0.5 },
            ],
            revise: { label: "Fiche : Figures de style et registres", slug: "figures-de-style-registres" },
          },
        ],
      },
      m2
        ? {
            id: "p3",
            title: "Partie 3 — Développement rédigé",
            points: 9,
            recommendedMinutes: 105,
            intro:
              "Le texte est un appui : répondez à la question, ne le commentez pas pour lui-même. Introduction, deux ou trois axes, conclusion. La langue est notée.",
            questions: [
              {
                id: "q9",
                label: "Question 9 · le développement rédigé",
                enonce:
                  "**Selon vous, la littérature peut-elle contribuer à faire évoluer le regard de la société sur une question comme la justice ?** Appuyez-vous sur le texte de Hugo, vos lectures et votre culture.",
                answerPrompt: "Rédigez votre développement (introduction, axes, conclusion).",
                answerRows: 12,
                elements: [
                  { label: "**Introduction** complète : amorce, problématique, annonce du plan", points: 1.5 },
                  { label: "**Plan structuré** en deux ou trois axes distincts", points: 2 },
                  { label: "**Appui précis sur le texte** (citation analysée, pas plaquée)", points: 1.5 },
                  { label: "**Référence(s) extérieure(s)** mobilisée(s) (culture, lectures)", points: 1.5 },
                  { label: "**Réponse à la question** posée, sans hors-sujet ni paraphrase", points: 1.5 },
                  { label: "**Langue** correcte et soignée", points: 1 },
                ],
                note: "**Développement-modèle rédigé.**\n\nAu début du XIXᵉ siècle, alors que l'échafaud se dresse encore sur les places publiques, Victor Hugo ouvre son roman sur la voix d'un homme qui attend la mort. En donnant la parole au condamné, il ne se contente pas de raconter : il plaide. On peut alors se demander si la littérature peut réellement contribuer à faire évoluer le regard de la société sur une question aussi grave que la justice. Nous verrons d'abord qu'elle agit en faisant ressentir l'injustice, puis qu'elle nourrit le débat public, avant d'en mesurer les limites.\n\nLa force première de la littérature est de faire ressentir ce qu'un raisonnement abstrait laisserait froid. Chez Hugo, le condamné parle à la première personne et au présent : « Maintenant je suis captif. » Le lecteur ne contemple pas une exécution de loin, il partage de l'intérieur l'angoisse d'un homme réduit à une seule pensée, « cette pensée infernale » comparée à « un spectre de plomb ». En prêtant un visage et une voix à celui que la société ne voit que comme un criminel, le texte fait naître l'empathie, et avec elle le doute : ce châtiment est-il juste ?\n\nAu-delà de l'émotion, la littérature argumente et pèse dans le débat collectif. Le roman de Hugo a accompagné le long combat pour l'abolition de la peine de mort. D'autres œuvres ont joué ce rôle : dans « J'accuse… ! », Zola met sa notoriété au service de la révision du procès Dreyfus ; un siècle plus tôt, Voltaire, dans le Traité sur la tolérance, mobilise l'opinion autour de l'affaire Calas. À chaque fois, un texte transforme un cas particulier en question de société et oblige les consciences à se positionner.\n\nIl faut pourtant se garder d'exagérer ce pouvoir. La littérature ne vote pas les lois et n'agit qu'à long terme : en France, l'abolition de la peine de mort n'intervient qu'en 1981, plus d'un siècle après le plaidoyer de Hugo. Un texte ne convainc d'ailleurs que le lecteur disposé à l'entendre. La littérature prépare et accompagne le changement plus qu'elle ne le décrète.\n\nLa littérature ne remplace donc ni la loi ni l'action politique, mais elle change le regard avant que les institutions ne changent : en faisant ressentir l'injustice et en la nommant, elle ouvre les consciences. On peut se demander si, aujourd'hui, le cinéma et les témoignages n'ont pas en partie pris le relais de ce rôle.\n\n**Autres références mobilisables** : Hugo (*Claude Gueux*), Camus (*Réflexions sur la guillotine*), l'*Antigone* de Sophocle ou d'Anouilh (la justice face à la loi).",
                revise: { label: "Fiche : Produire le développement rédigé", slug: "produire-le-developpement" },
              },
            ],
          }
        : {
            id: "p3",
            title: "Partie 3 — Développement rédigé",
            points: 10,
            recommendedMinutes: 60,
            intro:
              "Répondez directement à la question, en une trentaine de lignes : un court développement structuré, pas un commentaire du texte. La langue est notée.",
            questions: [
              {
                id: "q9",
                label: "Question 9 · le développement rédigé",
                enonce:
                  "Ce texte cherche à émouvoir le lecteur sur le sort d'un condamné à mort. **Selon vous, la littérature est-elle un moyen efficace pour défendre une cause ?** En une trentaine de lignes, appuyez-vous sur le texte et sur votre culture.",
                answerPrompt: "Rédigez votre développement (~30 lignes).",
                answerRows: 12,
                elements: [
                  { label: "**Réponse directe** à la question posée", points: 2 },
                  { label: "**Avis structuré** : deux temps, une introduction et une conclusion brèves", points: 2.5 },
                  { label: "**Appui précis sur le texte** de Hugo", points: 2 },
                  { label: "**Une référence extérieure** au moins (lecture, œuvre, fait culturel)", points: 1.5 },
                  { label: "**Langue** correcte et soignée", points: 2 },
                ],
                note: "**Développement-modèle rédigé (une trentaine de lignes).**\n\nLa littérature peut défendre une cause avec une grande force, car elle ne se contente pas d'exposer des arguments : elle fait ressentir. Encore faut-il que le lecteur accepte de se laisser toucher. C'est ce que montre le texte de Victor Hugo.\n\nDans Le Dernier Jour d'un condamné, Hugo donne directement la parole au condamné. En écrivant « Maintenant je suis captif » à la première personne et au présent, il nous place dans la cellule, au plus près de l'angoisse : on ne juge plus de loin, on partage la peur d'un homme. Cette émotion conduit le lecteur à s'interroger sur la peine de mort, ce qui était précisément le but de l'auteur, adversaire de ce châtiment.\n\nCette force a toutefois une condition : il faut accepter d'entrer dans le texte. D'autres œuvres défendent une cause autrement : les fables de La Fontaine dénoncent l'injustice en faisant sourire, et l'article « J'accuse… ! » de Zola s'appuie sur des preuves. Chaque texte choisit ses moyens, mais tous cherchent à faire réfléchir.\n\nAinsi, la littérature est bien un moyen efficace pour défendre une cause : en touchant et en interrogeant le lecteur, elle ouvre les consciences. Elle ne remplace pas l'action, mais elle la prépare.",
                revise: { label: "Fiche : Produire le développement rédigé", slug: "produire-le-developpement" },
              },
            ],
          },
    ],
  };
}

// ── Fabrique ────────────────────────────────────────────────────────────────
function buildSujetHugo(niveau: Niveau): Fiche {
  const m2 = niveau === "m2";

  return {
    slug: "sujet-blanc-hugo-condamne",
    matiere: "francais",
    kind: "sujet",
    numero: 30,
    partie: "S'entraîner en conditions réelles",
    title: "Sujet blanc nº1 · Hugo, Le Dernier Jour d'un condamné",
    subtitle: m2
      ? "Une épreuve complète à faire en ligne, avec correction interactive et note estimée : étude de la langue, lexique, développement rédigé (3 h)."
      : "Une épreuve complète à faire en ligne, avec correction interactive et note estimée : grammaire, lexique, développement rédigé (partie français de l'épreuve commune).",
    badges: [
      { label: "Sujet blanc · conditions réelles", variant: "hot" },
      { label: m2 ? "Français · 3 h" : "Partie français · épreuve commune", variant: "info" },
    ],
    metaTitle: m2
      ? "Sujet blanc CRPE M2 français (Hugo) — étude de la langue, lexique, rédaction | Maitrizz"
      : "Sujet blanc CRPE L3 français (Hugo) — grammaire, lexique, rédaction | Maitrizz",
    metaDescription: m2
      ? "Sujet blanc complet de français du CRPE M2 sur un texte de Victor Hugo (domaine public), à composer en ligne : étude de la langue, lexique et développement rédigé, avec chronomètre, correction interactive et note estimée /20."
      : "Sujet blanc complet de français du CRPE L3 sur un texte de Victor Hugo (domaine public), à composer en ligne : grammaire, lexique et développement rédigé, avec chronomètre, correction interactive et note estimée /20.",

    tabGroups: [
      {
        id: "s-entrainer",
        label: "S'entraîner",
        icon: "",
        tabs: [
          {
            id: "epreuve",
            label: "L'épreuve",
            icon: "",
            blocks: [blocEpreuve(niveau)],
          },
        ],
      },
    ],
  };
}

export const ficheSujetBlancHugoL3 = buildSujetHugo("l3");
export const ficheSujetBlancHugoM2 = buildSujetHugo("m2");
