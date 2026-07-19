"use client";

import { createContext, useContext } from "react";

/* Surcouches « démo à valider » du rendu de blocs (listes de mots des classes
   fermées, micro-rappels « De mémoire »). Le contenu vit dans les pages
   /proto/notion qui fournissent ce contexte ; les vraies pages /reviser ne le
   fournissent PAS, donc n'affichent rien tant que le contenu n'a pas été relu
   et repris en données de fiche. */

export type DemoOverlays = {
  /* Clé « Titre de carte::Sous-classe » → liste de mots (séparés par ·). */
  mots: Record<string, string>;
  /* Clé « slug de fiche::numéro de sous-section » → question de rappel actif. */
  rappels: Record<string, { question: string; reponse: string }>;
};

const AUCUNE: DemoOverlays = { mots: {}, rappels: {} };

const DemoOverlaysContext = createContext<DemoOverlays>(AUCUNE);

export const DemoOverlaysProvider = DemoOverlaysContext.Provider;

export function useDemoOverlays(): DemoOverlays {
  return useContext(DemoOverlaysContext);
}
