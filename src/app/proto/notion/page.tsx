import { ficheClassesGrammaticales } from "../../reviser/[niveau]/epreuves/ecrites/[matiere]/data/francais/classes-grammaticales";
import { NotionProto } from "./NotionProto";

/* Prototype « la belle copie » d'une fiche notion (notion 01 pilote).
   Isolé sur /proto/notion : rend le VRAI contenu de la fiche via un habillage
   local, sans toucher aux composants réels (FicheHeader / FicheTabs / RenderBlock).
   ?groupe= & ?onglet= permettent d'ouvrir directement un onglet donné. */

export default async function NotionProtoPage({
  searchParams,
}: {
  searchParams: Promise<{ groupe?: string; onglet?: string }>;
}) {
  const { groupe, onglet } = await searchParams;
  return <NotionProto fiche={ficheClassesGrammaticales} initialGroup={groupe} initialTab={onglet} />;
}
