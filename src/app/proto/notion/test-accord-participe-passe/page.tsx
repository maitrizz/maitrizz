import { ficheAccordParticipePasse } from "../../../reviser/[niveau]/epreuves/ecrites/[matiere]/data/francais/accord-participe-passe";
import { NotionProto } from "../NotionProto";

/* Test de généralisation du proto « la belle copie » sur une 2e fiche
   français (5 sous-sections, étage 3 « cas difficiles ») — voir avis du
   17/07 sur le déploiement à tout le contenu écrit. */

export default async function TestAccordParticipePassePage({
  searchParams,
}: {
  searchParams: Promise<{ groupe?: string; onglet?: string }>;
}) {
  const { groupe, onglet } = await searchParams;
  return <NotionProto fiche={ficheAccordParticipePasse} initialGroup={groupe} initialTab={onglet} />;
}
