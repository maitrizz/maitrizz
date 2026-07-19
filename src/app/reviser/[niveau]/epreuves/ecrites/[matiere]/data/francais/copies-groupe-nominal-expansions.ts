// Banque de copies à corriger, notion 03 « Le groupe nominal et ses expansions ».
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

export const COPIES_GROUPE_NOMINAL_EXPANSIONS: CopieACorriger[] = [
  {
    id: "fr-03-cop-01",
    copie: "Un candidat affirme : Dans « un acte de courage », « de courage » est analysé comme CC de manière.",
    correcte: false,
    verdict: "« de courage » est le **complément du nom « acte »** : il est à l'intérieur du GN et n'est pas mobile.",
    coteProf: "Test : déplacer en tête de phrase. « De courage un acte » est impossible, donc CDN. « Avec courage, il agit » fonctionne, donc CC.",
  },
  {
    id: "fr-03-cop-02",
    copie: "Un candidat affirme : Dans « Seule, elle pleurait », « Seule » est analysé comme attribut du sujet.",
    correcte: false,
    verdict: "Il n'y a pas de verbe d'état : « Seule » est une **épithète détachée** du sujet « elle ».",
    coteProf: "L'attribut du sujet exige : sujet + verbe d'état (être, sembler, paraître…) + adjectif. Sans verbe d'état, c'est une épithète (liée ou détachée).",
  },
  {
    id: "fr-03-cop-03",
    copie: "Un candidat affirme : Considérer « Les élèves qui travaillent réussissent » et « Les élèves, qui travaillent, réussissent » comme deux phrases de même sens.",
    correcte: false,
    verdict: "Sans virgule : relative **déterminative** (seulement certains élèves). Entre virgules : relative **explicative** (tous les élèves).",
    coteProf: "Test : supprimer la relative. Le sens change, donc déterminative ; le sens se conserve, donc explicative.",
  },
  {
    id: "fr-03-cop-04",
    copie: "Réponse d'un candidat : « **dans les bois** : complément du nom « promenades » uniquement », pour *« les promenades solitaires dans les bois »*.",
    correcte: false,
    verdict: "À corriger : Analyse présentée comme unique, alors que deux lectures sont défendables\n- Lecture 1 (complément du nom) : « dans les bois » précise le type de promenade, non mobile sans changer le sens\n- Lecture 2 (CC de lieu) : « dans les bois » précise où il se promène, mobile (« Dans les bois, il aimait les promenades »)",
    coteProf: "💡 Les deux analyses sont recevables : le jury attend que le candidat justifie son choix par un test, pas qu'il tranche sans preuve.",
  },
  {
    id: "fr-03-cop-05",
    copie: "Réponse d'un candidat : « **muette** : attribut du sujet « elle » », pour *« Elle souriait, muette, heureuse. »*",
    correcte: false,
    verdict: "À corriger : Erreur : épithète détachée confondue avec attribut du sujet\n- L'attribut du sujet exige un verbe d'état (être, paraître, sembler…) entre le sujet et l'adjectif. Ici, « souriait » n'est pas un verbe d'état.\n- Réponse attendue : « muette » → adjectif qualificatif, épithète détachée du sujet « elle »",
    coteProf: "Test : y a-t-il un verbe d'état entre « elle » et « muette » ? Non, donc épithète détachée.",
  },
  {
    id: "fr-03-cop-06",
    copie: "Un candidat affirme : « de courage » est le **complément du nom « acte »** : il est à l'intérieur du GN et n'est pas mobile.",
    correcte: true,
    verdict: "C'est juste : « de courage » est le **complément du nom « acte »** : il est à l'intérieur du GN et n'est pas mobile.",
    coteProf: "Test : déplacer en tête de phrase. « De courage un acte » est impossible, donc CDN. « Avec courage, il agit » fonctionne, donc CC.",
  },
  {
    id: "fr-03-cop-07",
    copie: "Un candidat affirme : Il n'y a pas de verbe d'état : « Seule » est une **épithète détachée** du sujet « elle ».",
    correcte: true,
    verdict: "C'est juste : Il n'y a pas de verbe d'état : « Seule » est une **épithète détachée** du sujet « elle ».",
    coteProf: "L'attribut du sujet exige : sujet + verbe d'état (être, sembler, paraître…) + adjectif. Sans verbe d'état, c'est une épithète (liée ou détachée).",
  },
  {
    id: "fr-03-cop-08",
    copie: "Un candidat affirme : Sans virgule : relative **déterminative** (seulement certains élèves). Entre virgules : relative **explicative** (tous les élèves).",
    correcte: true,
    verdict: "C'est juste : Sans virgule : relative **déterminative** (seulement certains élèves). Entre virgules : relative **explicative** (tous les élèves).",
    coteProf: "Test : supprimer la relative. Le sens change, donc déterminative ; le sens se conserve, donc explicative.",
  },
];
