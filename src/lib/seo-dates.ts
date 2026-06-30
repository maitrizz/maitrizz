import { execSync } from "node:child_process";

// Date de dernière modification (dernier commit git) du dossier de données d'une
// matière. Sert de signal de fraîcheur honnête pour le sitemap et le JSON-LD :
// la date n'est jamais inventée, elle vient de l'historique git.
//
// Best-effort : si git n'est pas disponible au build (environnement sans .git),
// on renvoie undefined et le champ est simplement omis. Mémorisé par matière
// pour ne pas relancer git une fois par fiche.
const cache = new Map<string, string | undefined>();

export function getMatiereLastModified(matiere: string): string | undefined {
  if (cache.has(matiere)) return cache.get(matiere);

  let iso: string | undefined;
  try {
    // Les crochets de [niveau]/[matiere] sont des noms de dossiers littéraux :
    // ":(literal)" empêche git de les interpréter comme un motif glob.
    const dir = `src/app/reviser/[niveau]/epreuves/ecrites/[matiere]/data/${matiere}`;
    const out = execSync(`git log -1 --format=%cI -- ":(literal)${dir}"`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    iso = out || undefined;
  } catch {
    iso = undefined;
  }

  cache.set(matiere, iso);
  return iso;
}
