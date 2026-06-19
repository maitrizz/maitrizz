"use client";

import { createContext, useContext } from "react";

/**
 * Contexte fournissant le niveau et la matière de la fiche en cours de rendu.
 * Sert à construire les liens internes entre fiches (renvois « voir fiche N°X »)
 * sans coder le niveau en dur dans les données : la même fiche peut ainsi être
 * affichée sous /m2/… comme sous /l3/… avec des renvois corrects.
 */
type FicheRoute = { niveau: string; matiere: string };

const FicheRouteContext = createContext<FicheRoute | null>(null);

export const FicheRouteProvider = FicheRouteContext.Provider;

export function useFicheRoute() {
  return useContext(FicheRouteContext);
}
