// Banque de copies à corriger, notion 11 « Les accords dans le GN et le GV ».
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

export const COPIES_ACCORDS_GN_GV: CopieACorriger[] = [
  {
    id: "fr-11-cop-01",
    copie: "Un candidat affirme : « La liste des candidats **contiennent** plusieurs erreurs. » Le verbe a été accordé avec le nom pluriel le plus proche, « candidats ».",
    correcte: false,
    verdict: "Le groupe sujet est « la liste des candidats ». Son nom noyau est « liste », au singulier : le verbe doit donc être au singulier. On écrit : « La liste des candidats **contient** plusieurs erreurs. »",
    coteProf: "Repérer le groupe sujet, puis retirer mentalement son complément : « La liste contient plusieurs erreurs. » L'accord devient évident.",
  },
  {
    id: "fr-11-cop-02",
    copie: "Un candidat affirme : « un livre et une revue illustrée » (accord avec le seul dernier nom).",
    correcte: false,
    verdict: "Deux noms coordonnés par « et » → pluriel ; masculin + féminin → masculin pluriel : « un livre et une revue **illustrés** ».",
    coteProf: "Repérer tous les noms coordonnés que l'adjectif qualifie, puis accorder au pluriel (masculin si genres mêlés).",
  },
  {
    id: "fr-11-cop-03",
    copie: "Un candidat affirme : « des pulls marrons », « des chaussures crèmes ».",
    correcte: false,
    verdict: "Les **noms employés comme couleurs** (marron, crème, kaki, saumon…) et les **couleurs composées** (bleu marine) sont **invariables** : « des pulls **marron** ».",
    coteProf: "Se demander si le mot est un vrai adjectif (rouge, bleu : accord) ou un nom employé comme couleur (marron, crème : invariable).",
  },
  {
    id: "fr-11-cop-04",
    copie: "Un candidat affirme : « La plupart des élèves **a réussi**. » Le verbe a été mis au singulier à cause du nom « plupart ».",
    correcte: false,
    verdict: "Avec « la plupart de » suivi d'un nom pluriel, le verbe se met au **pluriel** : « La plupart des élèves **ont réussi**. »",
    coteProf: "Repérer le nom placé après « la plupart de » : s'il est au pluriel, le verbe est au pluriel.",
  },
  {
    id: "fr-11-cop-05",
    copie: "Copie d'un candidat : « *des champs lexical utilisés dans le texte* ».",
    correcte: false,
    verdict: "À corriger : L'adjectif n'est pas accordé avec le nom noyau « champs » (masculin pluriel)\n- Le pluriel des adjectifs en -al est généralement en -aux\n- Réponse attendue : « des champs lexicaux »",
  },
  {
    id: "fr-11-cop-06",
    copie: "Un candidat affirme : Le groupe sujet est « la liste des candidats ». Son nom noyau est « liste », au singulier : le verbe doit donc être au singulier. On écrit : « La liste des candidats **contient** plusieurs erreurs. »",
    correcte: true,
    verdict: "C'est juste : Le groupe sujet est « la liste des candidats ». Son nom noyau est « liste », au singulier : le verbe doit donc être au singulier. On écrit : « La liste des candidats **contient** plusieurs erreurs. »",
    coteProf: "Repérer le groupe sujet, puis retirer mentalement son complément : « La liste contient plusieurs erreurs. » L'accord devient évident.",
  },
  {
    id: "fr-11-cop-07",
    copie: "Un candidat affirme : Deux noms coordonnés par « et » → pluriel ; masculin + féminin → masculin pluriel : « un livre et une revue **illustrés** ».",
    correcte: true,
    verdict: "C'est juste : Deux noms coordonnés par « et » → pluriel ; masculin + féminin → masculin pluriel : « un livre et une revue **illustrés** ».",
    coteProf: "Repérer tous les noms coordonnés que l'adjectif qualifie, puis accorder au pluriel (masculin si genres mêlés).",
  },
  {
    id: "fr-11-cop-08",
    copie: "Un candidat affirme : Les **noms employés comme couleurs** (marron, crème, kaki, saumon…) et les **couleurs composées** (bleu marine) sont **invariables** : « des pulls **marron** ».",
    correcte: true,
    verdict: "C'est juste : Les **noms employés comme couleurs** (marron, crème, kaki, saumon…) et les **couleurs composées** (bleu marine) sont **invariables** : « des pulls **marron** ».",
    coteProf: "Se demander si le mot est un vrai adjectif (rouge, bleu : accord) ou un nom employé comme couleur (marron, crème : invariable).",
  },
];
