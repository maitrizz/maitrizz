// Banque de copies à corriger, notion 12 « L'accord du participe passé ».
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

export const COPIES_ACCORD_PARTICIPE_PASSE: CopieACorriger[] = [
  {
    id: "fr-12-cop-01",
    copie: "Un candidat affirme : « Elles ont **rangées** leurs affaires. » Le participe passé a été accordé à tort avec le sujet « elles ».",
    correcte: false,
    verdict: "Avec l'auxiliaire « avoir », le participe passé ne s'accorde pas avec le sujet. Le COD « leurs affaires » est placé après le verbe : on écrit « Elles ont **rangé** leurs affaires. »",
    coteProf: "Repérer l'auxiliaire, puis poser la question « elles ont rangé quoi ? ». Le COD est après le verbe : le participe passé reste invariable.",
  },
  {
    id: "fr-12-cop-02",
    copie: "Un candidat affirme : « Des livres, j'en ai lus*. »",
    correcte: false,
    verdict: "Avec « en », le participe passé reste invariable : « Des livres, j'en ai **lu**. » C'est un cas particulier qui échappe à la règle ordinaire du COD antéposé.",
    coteProf: "Repérer « en » avant le verbe : il bloque l'accord, quel que soit le genre ou le nombre du nom de référence.",
  },
  {
    id: "fr-12-cop-03",
    copie: "Un candidat affirme : « Elles se sont souries* en se retrouvant. »",
    correcte: false,
    verdict: "« sourire à quelqu'un » : « se » est COI, donc PP invariable : « Elles se sont **souri**. »",
    coteProf: "Se demander si le verbe se construit avec « à » (se parler, se sourire, se téléphoner…) : si oui, « se » est COI et le PP reste invariable.",
  },
  {
    id: "fr-12-cop-04",
    copie: "Un candidat affirme : « Elle a montée* les valises. »",
    correcte: false,
    verdict: "Avec avoir, le COD « les valises » est placé après le verbe : PP invariable, « Elle a **monté** les valises. » Mais : « les valises qu'elle a **montées** » (COD antéposé).",
    coteProf: "Monter, descendre, sortir, passer, rentrer, retourner : vérifier d'abord l'auxiliaire, puis la position du COD.",
  },
  {
    id: "fr-12-cop-05",
    copie: "Copie d'un candidat : le participe passé de « choisir » écrit *choisit* (« le sujet choisit* par l'auteur »).",
    correcte: false,
    verdict: "À corriger : Confusion avec la forme conjuguée « il choisit » (présent / passé simple) : ajout d'un -t final\n- Le participe passé de « choisir » est « choisi », sans -t. On retrouve cette terminaison dans « fini » ou « réussi », mais tous les verbes en -ir ne suivent pas ce modèle.\n- Réponse attendue : « le sujet **choisi** par l'auteur »",
  },
  {
    id: "fr-12-cop-06",
    copie: "Un candidat affirme : Avec l'auxiliaire « avoir », le participe passé ne s'accorde pas avec le sujet. Le COD « leurs affaires » est placé après le verbe : on écrit « Elles ont **rangé** leurs affaires. »",
    correcte: true,
    verdict: "C'est juste : Avec l'auxiliaire « avoir », le participe passé ne s'accorde pas avec le sujet. Le COD « leurs affaires » est placé après le verbe : on écrit « Elles ont **rangé** leurs affaires. »",
    coteProf: "Repérer l'auxiliaire, puis poser la question « elles ont rangé quoi ? ». Le COD est après le verbe : le participe passé reste invariable.",
  },
  {
    id: "fr-12-cop-07",
    copie: "Un candidat affirme : Avec « en », le participe passé reste invariable : « Des livres, j'en ai **lu**. » C'est un cas particulier qui échappe à la règle ordinaire du COD antéposé.",
    correcte: true,
    verdict: "C'est juste : Avec « en », le participe passé reste invariable : « Des livres, j'en ai **lu**. » C'est un cas particulier qui échappe à la règle ordinaire du COD antéposé.",
    coteProf: "Repérer « en » avant le verbe : il bloque l'accord, quel que soit le genre ou le nombre du nom de référence.",
  },
  {
    id: "fr-12-cop-08",
    copie: "Un candidat affirme : « sourire à quelqu'un » : « se » est COI, donc PP invariable : « Elles se sont **souri**. »",
    correcte: true,
    verdict: "C'est juste : « sourire à quelqu'un » : « se » est COI, donc PP invariable : « Elles se sont **souri**. »",
    coteProf: "Se demander si le verbe se construit avec « à » (se parler, se sourire, se téléphoner…) : si oui, « se » est COI et le PP reste invariable.",
  },
];
