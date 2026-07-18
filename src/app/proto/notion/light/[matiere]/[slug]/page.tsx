import { notFound } from "next/navigation";
import {
  getFiche,
  isValidMatiere,
} from "../../../../../reviser/[niveau]/epreuves/ecrites/[matiere]/data";
import { NotionProtoLight } from "../../../NotionProtoLight";

/* Route générique du proto « scroll libre » : affiche n'importe quelle fiche
   (français ou maths, référence M2) dans la maquette light, pour valider la
   direction sur tout le catalogue avant de toucher aux vraies pages.
   Rien de branché sur les vraies pages. */

export default async function NotionProtoLightFichePage({
  params,
}: {
  params: Promise<{ matiere: string; slug: string }>;
}) {
  const { matiere, slug } = await params;
  if (!isValidMatiere(matiere)) notFound();
  const fiche = getFiche("m2", matiere, slug);
  if (!fiche) notFound();
  return <NotionProtoLight fiche={fiche} />;
}
