// Banque de copies à corriger, notion 02 « Fonctions syntaxiques ».
//
// Copies dérivées des pièges du cours v1 et des erreurs types déjà présentes.
// Mélange volontaire de réponses justes et fausses.

type CopieACorriger = {
  id: string;
  copie: string;
  correcte: boolean;
  verdict: string;
  coteProf?: string;
};

export const COPIES_FONCTIONS_SYNTAXIQUES: CopieACorriger[] = [
  {
    id: "fr-02-cop-sujet-inverse",
    copie: "Pour « Monte en moi une humble flamme », un candidat écrit : « *une humble flamme* est un **COD** du verbe *monte* ».",
    correcte: false,
    verdict: "À corriger : « une humble flamme » est le **sujet** du verbe « monte » ; le sujet est postposé.",
    coteProf: "Test attendu : encadrement par « c'est… qui » : « C'est une humble flamme qui monte en moi ».",
  },
  {
    id: "fr-02-cop-menti",
    copie: "Pour « Tu m'as menti », un candidat écrit : « *m'* est un **COD** ».",
    correcte: false,
    verdict: "À corriger : « m' » est **COI** du verbe « mentir », car on dit « mentir à quelqu'un ».",
    coteProf: "Le pronom placé avant le verbe cache la préposition : « Tu as menti à moi ».",
  },
  {
    id: "fr-02-cop-muette",
    copie: "Pour « Elle souriait, muette, heureuse », un candidat écrit : « *muette* est un **attribut du sujet** ».",
    correcte: false,
    verdict: "À corriger : « muette » est une **épithète détachée** ; il n'y a pas de verbe d'état entre « elle » et l'adjectif.",
    coteProf: "Le test décisif est la présence d'un verbe d'état : « Elle semblait muette » donnerait un attribut.",
  },
  {
    id: "fr-02-cop-habite-paris",
    copie: "Pour « Il habite à Paris », un candidat écrit : « *à Paris* est un **CC de lieu supprimable** ».",
    correcte: false,
    verdict: "À corriger : « à Paris » est un **complément essentiel de lieu** ; « Il habite » seul est bancal.",
    coteProf: "Double test : mobilité et suppression. Si la suppression échoue, ce n'est pas un CC libre.",
  },
  {
    id: "fr-02-cop-apostrophe",
    copie: "Pour « Tu m'as menti, vieil imposteur », un candidat écrit : « *vieil imposteur* est une **apposition** ».",
    correcte: false,
    verdict: "À corriger : « vieil imposteur » est une **apostrophe** ; elle interpelle l'interlocuteur et n'a aucun lien syntaxique avec la phrase.",
    coteProf: "L'apposition se rattache syntaxiquement à un nom ; l'apostrophe est hors syntaxe.",
  },
  {
    id: "fr-02-cop-dont-coi",
    copie: "Pour « La maison dont il parlait était magnifique », un candidat écrit : « *dont* est un pronom relatif, **COI** du verbe *parlait* ».",
    correcte: true,
    verdict: "C'est juste : « dont » est un **pronom relatif** et sa fonction est **COI** du verbe « parlait » ; on dépronominalise en « il parlait de la maison ».",
  },
  {
    id: "fr-02-cop-paul-apposition",
    copie: "Pour « Paul, ravi, sourit », un candidat écrit : « *ravi* est une **apposition** à Paul ».",
    correcte: true,
    verdict: "C'est recevable : « ravi » est un adjectif détaché se rapportant au sujet « Paul ». On le nomme **épithète détachée** (terme retenu dans la fiche) ou *apposition de l'adjectif* selon les grammaires : les deux désignent la même fonction.",
    coteProf: "Pour un adjectif détaché, « épithète détachée » et « apposition » sont admis. Le terme « apposition » reste en revanche réservé au GN quand on veut être précis (« Paul, *mon voisin*, sourit »).",
  },
  {
    id: "fr-02-cop-hugo-apposition",
    copie: "Pour « Hugo, grand poète, mourut âgé », un candidat écrit : « *grand poète* est une **apposition** à *Hugo* ».",
    correcte: true,
    verdict: "C'est juste : « grand poète » est un **GN apposé** à « Hugo » : isolé par des virgules, supprimable, il désigne la même personne que le nom.",
  },
  {
    id: "fr-02-cop-chien-voisine",
    copie: "Pour « Le chien de ma voisine aboie », un candidat écrit : « *de ma voisine* est un **CDN** du nom *chien* ».",
    correcte: true,
    verdict: "C'est juste : « de ma voisine » est un **complément du nom** « chien », à l'intérieur du GN et non mobile hors du groupe nominal.",
  },
];
