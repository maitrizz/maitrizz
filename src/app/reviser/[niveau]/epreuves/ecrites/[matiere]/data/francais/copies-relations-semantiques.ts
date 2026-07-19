// Banque de copies à corriger, notion 18 « Les relations sémantiques ».
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

export const COPIES_RELATIONS_SEMANTIQUES: CopieACorriger[] = [
  {
    id: "fr-18-cop-01",
    copie: "Un candidat affirme : Pour « se hâtait » (une femme qui marche vite, yeux baissés), proposer « courait ».",
    correcte: false,
    verdict: "« courir » trahit le contexte (la femme marche vite, elle ne court pas). Proposer **« se dépêchait »** ou **« pressait le pas »**.",
    coteProf: "Vérifier que le synonyme peut remplacer le mot dans cette phrase précise, sans la dénaturer.",
  },
  {
    id: "fr-18-cop-02",
    copie: "Un candidat affirme : Définir « apatride » seulement comme « personne sans nationalité ».",
    correcte: false,
    verdict: "En contexte, le mot est employé au **sens figuré** : l'écriture arrache l'auteur à ses repères, comme s'il changeait de pays. Il faut expliquer ce sens figuré.",
    coteProf: "Se demander d'abord : le mot est-il au sens propre ou figuré dans ce texte ?",
  },
  {
    id: "fr-18-cop-03",
    copie: "Un candidat affirme : « Le champ sémantique de l'écriture comprend : plume, roman, page, encre. »",
    correcte: false,
    verdict: "C'est un **champ lexical** (plusieurs mots, un thème). Le champ sémantique, c'est l'ensemble des sens d'un seul mot.",
    coteProf: "Plusieurs mots autour d'un thème → champ lexical. Plusieurs sens d'un mot → champ sémantique.",
  },
  {
    id: "fr-18-cop-04",
    copie: "Un candidat affirme : Lister les mots d'un champ lexical sans expliquer leur effet.",
    correcte: false,
    verdict: "Après le relevé, **nommer le thème et analyser l'effet** : le champ de l'enfermement traduit l'angoisse de l'écriture, il ne fait pas que décrire.",
    coteProf: "Relever, nommer le thème, puis expliquer ce que ce champ produit dans le texte.",
  },
  {
    id: "fr-18-cop-05",
    copie: "Réponse d'un candidat à « expliquez en contexte le sens d'apatride » : « Apatride signifie une personne sans nationalité, sans pays. »",
    correcte: false,
    verdict: "À corriger : Le candidat donne seulement le sens propre, sans voir l'emploi figuré\n- En contexte, le mot ne possède pas son sens premier\n- Réponse attendue : sens figuré (l'écriture arrache aux repères, comme un changement de pays), avec ses connotations ambivalentes",
  },
  {
    id: "fr-18-cop-06",
    copie: "Un candidat affirme : « courir » trahit le contexte (la femme marche vite, elle ne court pas). Proposer **« se dépêchait »** ou **« pressait le pas »**.",
    correcte: true,
    verdict: "C'est juste : « courir » trahit le contexte (la femme marche vite, elle ne court pas). Proposer **« se dépêchait »** ou **« pressait le pas »**.",
    coteProf: "Vérifier que le synonyme peut remplacer le mot dans cette phrase précise, sans la dénaturer.",
  },
  {
    id: "fr-18-cop-07",
    copie: "Un candidat affirme : En contexte, le mot est employé au **sens figuré** : l'écriture arrache l'auteur à ses repères, comme s'il changeait de pays. Il faut expliquer ce sens figuré.",
    correcte: true,
    verdict: "C'est juste : En contexte, le mot est employé au **sens figuré** : l'écriture arrache l'auteur à ses repères, comme s'il changeait de pays. Il faut expliquer ce sens figuré.",
    coteProf: "Se demander d'abord : le mot est-il au sens propre ou figuré dans ce texte ?",
  },
  {
    id: "fr-18-cop-08",
    copie: "Un candidat affirme : C'est un **champ lexical** (plusieurs mots, un thème). Le champ sémantique, c'est l'ensemble des sens d'un seul mot.",
    correcte: true,
    verdict: "C'est juste : C'est un **champ lexical** (plusieurs mots, un thème). Le champ sémantique, c'est l'ensemble des sens d'un seul mot.",
    coteProf: "Plusieurs mots autour d'un thème → champ lexical. Plusieurs sens d'un mot → champ sémantique.",
  },
];
