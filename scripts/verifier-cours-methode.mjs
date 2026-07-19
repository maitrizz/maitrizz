// Vérifie que les onglets « Comprendre » et « Méthode » d'une fiche migrée reprennent
// VERBATIM le « Cours » et la « Méthode » de la fiche v1 (voir SPEC_STRUCTURE_NOTION.md §2 bis).
// Seule différence tolérée : la cible des ctaBox (targetTab) — c'est de la navigation.
//
// Usage :
//   (A) 1 argument — compare la fiche migrée à SA PROPRE version d'origine dans git (HEAD).
//       C'est le mode normal de migration : on écrase la fiche v1, git garde l'original.
//       node scripts/verifier-cours-methode.mjs "<chemin>/<slug>.ts"
//   (B) 2 arguments — compare deux fichiers explicites (utile pour le prototype v1 vs v2).
//       node scripts/verifier-cours-methode.mjs "<fichier-v1>" "<fichier-migré>"
//
// Sortie : code 0 si tout est verbatim, code 1 sinon (avec le 1er écart affiché).

import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";

// Extrait le tableau `blocks: [ ... ]` du PREMIER onglet portant `id: "<tabId>"`.
// Repère `id: "<tabId>"`, puis le `blocks:` qui suit, puis fait du bracket-matching.
function extraireBlocsOnglet(source, tabId) {
  const ancre = source.indexOf(`id: "${tabId}"`);
  if (ancre === -1) return null;
  const posBlocks = source.indexOf("blocks:", ancre);
  if (posBlocks === -1) return null;
  const debut = source.indexOf("[", posBlocks);
  if (debut === -1) return null;
  let profondeur = 0;
  for (let i = debut; i < source.length; i++) {
    const c = source[i];
    if (c === "[") profondeur++;
    else if (c === "]") {
      profondeur--;
      if (profondeur === 0) return source.slice(debut, i + 1);
    }
  }
  return null;
}

// Normalise pour comparer le FOND. On retire ce qui relève de la NAVIGATION (et qui doit
// légitimement changer quand les onglets sont réorganisés) :
//   - le bloc `ctaBox` entier (bouton de fin : texte, libellé, cible) ;
//   - une éventuelle ligne `note`/`text` d'aiguillage vers un onglet supprimé (Quiz éclair,
//     Vue d'ensemble) — marquée par le tag « @nav » dans la fiche migrée pour être exclue.
// Puis on écrase les espaces (la mise en forme du code n'est pas le contenu).
function normaliser(bloc) {
  return bloc
    .replace(/\{\s*type:\s*"ctaBox"[^}]*\}/g, "")
    .replace(/\{\s*type:\s*"note",\s*text:\s*"(?:@nav|[^"]*(?:Quiz éclair|Vue d'ensemble))[^}]*\}/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function premierEcart(a, b) {
  const n = Math.min(a.length, b.length);
  for (let i = 0; i < n; i++) {
    if (a[i] !== b[i]) {
      const ctx = 60;
      return {
        position: i,
        v1: a.slice(Math.max(0, i - ctx), i + ctx),
        migre: b.slice(Math.max(0, i - ctx), i + ctx),
      };
    }
  }
  if (a.length !== b.length) {
    return { position: n, v1: a.slice(n, n + 120), migre: b.slice(n, n + 120) };
  }
  return null;
}

const [, , arg1, arg2] = process.argv;
if (!arg1) {
  console.error("Usage : node scripts/verifier-cours-methode.mjs <fiche-migrée>            (compare à git HEAD)");
  console.error("    ou : node scripts/verifier-cours-methode.mjs <fiche-v1> <fiche-migrée> (compare deux fichiers)");
  process.exit(2);
}

let srcV1;
let srcMigre;
if (arg2) {
  // Mode B : deux fichiers explicites.
  srcV1 = readFileSync(arg1, "utf8");
  srcMigre = readFileSync(arg2, "utf8");
} else {
  // Mode A : la fiche migrée (arg1) vs sa version d'origine dans git (HEAD).
  srcMigre = readFileSync(arg1, "utf8");
  try {
    srcV1 = execSync(`git show "HEAD:${arg1}"`, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  } catch {
    console.error(`❌ Impossible de lire la version d'origine dans git : HEAD:${arg1}`);
    console.error("   (Le fichier doit être suivi par git, et la migration ne doit pas être commitée avant le contrôle.)");
    process.exit(2);
  }
}

// v1 : onglet « Cours » a l'id "cours" ; « Méthode » a l'id "methode".
// migré : « Comprendre » a l'id "comprendre" ; « Méthode » a l'id "methode".
const paires = [
  { nom: "Cours → Comprendre", idV1: "cours", idMigre: "comprendre" },
  { nom: "Méthode → Méthode", idV1: "methode", idMigre: "methode" },
];

let ok = true;
for (const { nom, idV1, idMigre } of paires) {
  const blocV1 = extraireBlocsOnglet(srcV1, idV1);
  const blocMigre = extraireBlocsOnglet(srcMigre, idMigre);

  if (!blocV1) {
    console.error(`❌ ${nom} : onglet "${idV1}" introuvable dans la fiche v1.`);
    ok = false;
    continue;
  }
  if (!blocMigre) {
    console.error(`❌ ${nom} : onglet "${idMigre}" introuvable dans la fiche migrée.`);
    ok = false;
    continue;
  }

  const ecart = premierEcart(normaliser(blocV1), normaliser(blocMigre));
  if (ecart) {
    ok = false;
    console.error(`❌ ${nom} : DIFFÉRENCE de fond (position ~${ecart.position}).`);
    console.error(`   v1    : …${ecart.v1}…`);
    console.error(`   migré : …${ecart.migre}…`);
  } else {
    console.log(`✅ ${nom} : verbatim (seule la navigation diffère).`);
  }
}

process.exit(ok ? 0 : 1);
