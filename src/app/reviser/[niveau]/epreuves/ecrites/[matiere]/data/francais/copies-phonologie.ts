// Banque de copies à corriger, notion 16 « La phonologie ».
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

export const COPIES_PHONOLOGIE: CopieACorriger[] = [
  {
    id: "fr-16-cop-01",
    copie: "Un candidat affirme : « chant » contient 5 phonèmes (c, h, a, n, t).",
    correcte: false,
    verdict: "« chant » contient **2 phonèmes** : /ʃ/ (digramme <ch>) et /ɑ̃/ (digramme <an>) ; le <t> est muet : /ʃɑ̃/.",
    coteProf: "Toujours partir de l'oral : identifier les phonèmes prononcés, pas les lettres écrites.",
  },
  {
    id: "fr-16-cop-02",
    copie: "Un candidat affirme : « lait » → /lɛt/ (en transcrivant le t).",
    correcte: false,
    verdict: "« lait » → **/lɛ/** : le <t> final est muet, il ne correspond à aucun phonème. De même « beau » → /bo/, pas /beau/.",
    coteProf: "Ne jamais transcrire une lettre qui ne se prononce pas.",
  },
  {
    id: "fr-16-cop-03",
    copie: "Un candidat affirme : « honte » a un h muet, donc on peut dire « l'honte ».",
    correcte: false,
    verdict: "« honte » a un **h aspiré** : pas d'élision ni de liaison. On dit « **la** honte » (jamais « l'honte »).",
    coteProf: "Tester l'élision : si « l' » est impossible (la honte), c'est un h aspiré.",
  },
  {
    id: "fr-16-cop-04",
    copie: "Un candidat affirme : Dans « maison », <s> = /s/ « comme d'habitude ».",
    correcte: false,
    verdict: "Entre deux voyelles, <s> se sonorise en **/z/** : « maison » → /mɛzɔ̃/. Le <ss> reste toujours /s/ (« masse »).",
    coteProf: "Vérifier la position : <s> entre deux voyelles → /z/ ; ailleurs (initiale, près d'une consonne, doublé) → /s/.",
  },
  {
    id: "fr-16-cop-05",
    copie: "Copie d'un candidat : « Le mot “chant” contient 5 phonèmes car il y a 5 lettres : c, h, a, n, t. »",
    correcte: false,
    verdict: "À corriger : Confusion entre lettre et phonème : le candidat compte les lettres\n- <ch> est un digramme (1 phonème /ʃ/), <an> aussi (/ɑ̃/), le <t> est muet\n- Réponse attendue : « chant » → **/ʃɑ̃/**, soit 2 phonèmes",
  },
  {
    id: "fr-16-cop-06",
    copie: "Un candidat affirme : « chant » contient **2 phonèmes** : /ʃ/ (digramme <ch>) et /ɑ̃/ (digramme <an>) ; le <t> est muet : /ʃɑ̃/.",
    correcte: true,
    verdict: "C'est juste : « chant » contient **2 phonèmes** : /ʃ/ (digramme <ch>) et /ɑ̃/ (digramme <an>) ; le <t> est muet : /ʃɑ̃/.",
    coteProf: "Toujours partir de l'oral : identifier les phonèmes prononcés, pas les lettres écrites.",
  },
  {
    id: "fr-16-cop-07",
    copie: "Un candidat affirme : « lait » → **/lɛ/** : le <t> final est muet, il ne correspond à aucun phonème. De même « beau » → /bo/, pas /beau/.",
    correcte: true,
    verdict: "C'est juste : « lait » → **/lɛ/** : le <t> final est muet, il ne correspond à aucun phonème. De même « beau » → /bo/, pas /beau/.",
    coteProf: "Ne jamais transcrire une lettre qui ne se prononce pas.",
  },
  {
    id: "fr-16-cop-08",
    copie: "Un candidat affirme : « honte » a un **h aspiré** : pas d'élision ni de liaison. On dit « **la** honte » (jamais « l'honte »).",
    correcte: true,
    verdict: "C'est juste : « honte » a un **h aspiré** : pas d'élision ni de liaison. On dit « **la** honte » (jamais « l'honte »).",
    coteProf: "Tester l'élision : si « l' » est impossible (la honte), c'est un h aspiré.",
  },
];
