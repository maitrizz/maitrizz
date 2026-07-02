import { ficheClassesGrammaticales } from "../../reviser/[niveau]/epreuves/ecrites/[matiere]/data/francais/classes-grammaticales";
import { NotionProto } from "./NotionProto";

/* Prototype « copie corrigée » d'une fiche notion (notion 01 pilote).
   Isolé sur /proto/notion : rend le VRAI contenu de la fiche via un habillage
   local, sans toucher aux composants réels (FicheHeader / FicheTabs / RenderBlock). */

export default function NotionProtoPage() {
  return <NotionProto fiche={ficheClassesGrammaticales} />;
}
