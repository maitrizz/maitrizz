import { ficheProblemesTransversaux } from "../../../reviser/[niveau]/epreuves/ecrites/[matiere]/data/mathematiques/problemes-transversaux";
import { NotionProto } from "../NotionProto";

/* Test de généralisation du proto « la belle copie » sur une fiche maths
   sans sous-sections (onglets à étape unique) — voir avis du 17/07 sur le
   déploiement à tout le contenu écrit. */

export default async function TestProblemesTransversauxPage({
  searchParams,
}: {
  searchParams: Promise<{ groupe?: string; onglet?: string }>;
}) {
  const { groupe, onglet } = await searchParams;
  return <NotionProto fiche={ficheProblemesTransversaux} initialGroup={groupe} initialTab={onglet} />;
}
