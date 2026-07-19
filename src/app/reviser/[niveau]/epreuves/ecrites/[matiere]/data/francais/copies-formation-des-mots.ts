// Banque de copies à corriger, notion 17 « La formation des mots ».
//
// Copies dérivées des pièges du cours v1 et/ou du matériel de détection d'erreur existant.
// Mélange volontaire de réponses justes et fausses.

type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_FORMATION_DES_MOTS: CopieACorriger[] = [
  {
    id: "fr-17-cop-01",
    copie: "Un candidat affirme : « déraison » est un mot composé, formé de « dé » et de « raison ».",
    correcte: false,
    verdict: "Le test est simple : **chaque morceau peut-il s'employer seul comme mot ?** « raison » oui, mais « **dé-** » non : c'est un préfixe, jamais un mot autonome. Dès qu'un morceau ne tient pas seul (dé-, in-, -able, -tion…), on est dans la **dérivation**, pas la composition. « déraison » = préfixe dé- + radical raison → **dérivation préfixale**. La composition, elle, n'assemble que des mots qui existent seuls : porte + feuille → portefeuille.",
    coteProf: "Passez les morceaux un par un : « ce morceau existe-t-il seul comme mot ? ». Un seul « non » suffit à écarter la composition.",
  },
  {
    id: "fr-17-cop-02",
    copie: "Un candidat affirme : Le préfixe d'« irremplaçable » est « in- ».",
    correcte: false,
    verdict: "Devant un radical en r, in- devient **ir-** (assimilation) : le préfixe est **ir-**, d'où le doublement du r.",
    coteProf: "Regarder la première lettre du radical : b/m/p → im- ; r → ir- ; l → il- ; sinon in-.",
  },
  {
    id: "fr-17-cop-03",
    copie: "Un candidat affirme : « raisonnement » est un adverbe formé en -ment comme « lentement ».",
    correcte: false,
    verdict: "« raisonnement » est un **nom** (verbe raisonner + -ment). « lentement » est un **adverbe** (adjectif féminin lente + -ment). Même suffixe, deux valeurs selon la base.",
    coteProf: "Regarder la base : adjectif féminin → adverbe ; verbe → nom masculin.",
  },
  {
    id: "fr-17-cop-04",
    copie: "Un candidat affirme : Segmenter le mot sans expliquer le sens de chaque morphème ni l'ancrer dans le texte.",
    correcte: false,
    verdict: "Le jury attend les deux : l'**analyse de la formation** ET l'**explication du sens**, confirmé par le contexte du texte.",
    coteProf: "Toujours conclure par le sens global et une vérification dans le passage étudié.",
  },
  {
    id: "fr-17-cop-05",
    copie: "Copie d'un candidat : « “déraison” est formé par composition, de deux mots : “dé” et “raison”. »",
    correcte: false,
    verdict: "À corriger : Confusion dérivation / composition : « dé- » n'est pas un mot autonome\n- La composition assemble deux mots qui existent seuls (porte + feuille)\n- Réponse attendue : **dérivation préfixale** (préfixe dé- + radical raison)",
  },
  {
    id: "fr-17-cop-06",
    copie: "Un candidat affirme : Le test est simple : **chaque morceau peut-il s'employer seul comme mot ?** « raison » oui, mais « **dé-** » non : c'est un préfixe, jamais un mot autonome. Dès qu'un morceau ne tient pas seul (dé-, in-, -able, -tion…), on est dans la **dérivation**, pas la composition. « déraison » = préfixe dé- + radical raison → **dérivation préfixale**. La composition, elle, n'assemble que des mots qui existent seuls : porte + feuille → portefeuille.",
    correcte: true,
    verdict: "C'est juste : Le test est simple : **chaque morceau peut-il s'employer seul comme mot ?** « raison » oui, mais « **dé-** » non : c'est un préfixe, jamais un mot autonome. Dès qu'un morceau ne tient pas seul (dé-, in-, -able, -tion…), on est dans la **dérivation**, pas la composition. « déraison » = préfixe dé- + radical raison → **dérivation préfixale**. La composition, elle, n'assemble que des mots qui existent seuls : porte + feuille → portefeuille.",
    coteProf: "Passez les morceaux un par un : « ce morceau existe-t-il seul comme mot ? ». Un seul « non » suffit à écarter la composition.",
  },
  {
    id: "fr-17-cop-07",
    copie: "Un candidat affirme : Devant un radical en r, in- devient **ir-** (assimilation) : le préfixe est **ir-**, d'où le doublement du r.",
    correcte: true,
    verdict: "C'est juste : Devant un radical en r, in- devient **ir-** (assimilation) : le préfixe est **ir-**, d'où le doublement du r.",
    coteProf: "Regarder la première lettre du radical : b/m/p → im- ; r → ir- ; l → il- ; sinon in-.",
  },
  {
    id: "fr-17-cop-08",
    copie: "Un candidat affirme : « raisonnement » est un **nom** (verbe raisonner + -ment). « lentement » est un **adverbe** (adjectif féminin lente + -ment). Même suffixe, deux valeurs selon la base.",
    correcte: true,
    verdict: "C'est juste : « raisonnement » est un **nom** (verbe raisonner + -ment). « lentement » est un **adverbe** (adjectif féminin lente + -ment). Même suffixe, deux valeurs selon la base.",
    coteProf: "Regarder la base : adjectif féminin → adverbe ; verbe → nom masculin.",
  },
];
