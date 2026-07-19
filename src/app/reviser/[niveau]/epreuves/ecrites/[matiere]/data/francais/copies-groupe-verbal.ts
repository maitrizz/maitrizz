// Banque de copies à corriger, notion 04 « Le groupe verbal ».
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

export const COPIES_GROUPE_VERBAL: CopieACorriger[] = [
  {
    id: "fr-04-cop-01",
    copie: "Un candidat affirme : Dans « Il obéit à ses parents », « à ses parents » est analysé comme un COD.",
    correcte: false,
    verdict: "Le verbe se construit « obéir à quelqu'un ». Le groupe « à ses parents », introduit par la préposition « à », est donc un **COI** : « Il leur obéit. »",
    coteProf: "D'autres verbes transitifs indirects se construisent de la même façon avec une préposition : nuire à, ressembler à, plaire à, téléphoner à, jouer de, se souvenir de, avoir besoin de, douter de.",
  },
  {
    id: "fr-04-cop-02",
    copie: "Un candidat affirme : Dans « Il est médecin », « médecin » est analysé comme COD.",
    correcte: false,
    verdict: "Après un verbe d'état, le complément est **attribut du sujet**, jamais COD.",
    coteProf: "Test décisif : la passivation. « Une pomme est mangée » fonctionne (COD), mais « Un médecin est été par lui » est impossible (attribut). L'attribut s'accorde aussi avec le sujet.",
  },
  {
    id: "fr-04-cop-03",
    copie: "Un candidat affirme : Classer « manger » comme intransitif dans « Il mange tous les jours ».",
    correcte: false,
    verdict: "Dans cet emploi, le complément d'objet de « manger » n'est pas exprimé : c'est un **emploi absolu** du verbe transitif.",
    coteProf: "Analyser la construction dans son contexte, puis vérifier si le verbe admet habituellement un objet : « manger une pomme ».",
  },
  {
    id: "fr-04-cop-04",
    copie: "Un candidat affirme : Dans « les choses qui nous font rêver », « rêver » est analysé isolément comme COD de « font » ou comme son sujet.",
    correcte: false,
    verdict: "« font rêver » constitue le **noyau verbal factitif**. Le sujet de cet ensemble est « qui », qui reprend « choses ».",
    coteProf: "Repérer le bloc « faire + infinitif » : le sujet fait réaliser le procès exprimé par l'infinitif.",
  },
  {
    id: "fr-04-cop-05",
    copie: "Un candidat affirme : Dans « Elle est partie ce matin », « est partie » est analysé comme une voix passive.",
    correcte: false,
    verdict: "C'est un **passé composé** : certains verbes de mouvement ou d'état (partir, arriver, venir, tomber, rester…) forment leur passé composé avec l'auxiliaire « être ». Il n'y a ni action subie, ni complément d'agent possible.",
    coteProf: "Test : essayer de reconstruire une phrase active où le sujet deviendrait COD. « Quelqu'un a parti Elle » est impossible → ce n'est pas un passif. Pour un vrai passif, « Les portes ont été ouvertes » donne « Quelqu'un a ouvert les portes ».",
  },
  {
    id: "fr-04-cop-06",
    copie: "Un candidat affirme : Le verbe se construit « obéir à quelqu'un ». Le groupe « à ses parents », introduit par la préposition « à », est donc un **COI** : « Il leur obéit. »",
    correcte: true,
    verdict: "C'est juste : Le verbe se construit « obéir à quelqu'un ». Le groupe « à ses parents », introduit par la préposition « à », est donc un **COI** : « Il leur obéit. »",
    coteProf: "D'autres verbes transitifs indirects se construisent de la même façon avec une préposition : nuire à, ressembler à, plaire à, téléphoner à, jouer de, se souvenir de, avoir besoin de, douter de.",
  },
  {
    id: "fr-04-cop-07",
    copie: "Un candidat affirme : Après un verbe d'état, le complément est **attribut du sujet**, jamais COD.",
    correcte: true,
    verdict: "C'est juste : Après un verbe d'état, le complément est **attribut du sujet**, jamais COD.",
    coteProf: "Test décisif : la passivation. « Une pomme est mangée » fonctionne (COD), mais « Un médecin est été par lui » est impossible (attribut). L'attribut s'accorde aussi avec le sujet.",
  },
  {
    id: "fr-04-cop-08",
    copie: "Un candidat affirme : Dans cet emploi, le complément d'objet de « manger » n'est pas exprimé : c'est un **emploi absolu** du verbe transitif.",
    correcte: true,
    verdict: "C'est juste : Dans cet emploi, le complément d'objet de « manger » n'est pas exprimé : c'est un **emploi absolu** du verbe transitif.",
    coteProf: "Analyser la construction dans son contexte, puis vérifier si le verbe admet habituellement un objet : « manger une pomme ».",
  },
];
