import { ficheTheoremeDePythagore } from "../../../reviser/[niveau]/epreuves/ecrites/[matiere]/data/mathematiques/theoreme-de-pythagore";
import { NotionProto } from "../NotionProto";

/* Test de généralisation du proto « la belle copie » sur une fiche maths
   géométrie (schémas SVG) — voir avis du 17/07 sur le déploiement à tout
   le contenu écrit. */

export default async function TestPythagorePage({
  searchParams,
}: {
  searchParams: Promise<{ groupe?: string; onglet?: string }>;
}) {
  const { groupe, onglet } = await searchParams;
  return <NotionProto fiche={ficheTheoremeDePythagore} initialGroup={groupe} initialTab={onglet} />;
}
