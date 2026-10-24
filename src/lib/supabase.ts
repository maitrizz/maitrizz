/**
 * Client Supabase, côté navigateur.
 *
 * Un seul client pour tout le site (motif « singleton ») : chaque appel à
 * `createBrowserClient` ouvre sa propre écoute de session, et en créer un par
 * composant provoquerait des rafraîchissements de jeton concurrents.
 *
 * Les deux variables viennent de `.env.local` et sont PUBLIQUES par
 * conception : tout ce qui porte le préfixe `NEXT_PUBLIC_` part dans le
 * navigateur. Ce qui protège les données, c'est la sécurité par ligne définie
 * dans `supabase/migrations/`, jamais le secret de cette clé.
 */

import { createBrowserClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";

const URL_SUPABASE = process.env.NEXT_PUBLIC_SUPABASE_URL;
const CLE_PUBLIQUE = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

let client: SupabaseClient | null = null;

/**
 * Renvoie le client, ou `null` si le projet n'est pas configuré.
 *
 * Le `null` est volontaire et doit être traité partout : le site doit rester
 * entièrement utilisable sans comptes (mode local, comme aujourd'hui), que ce
 * soit sur une machine de développement sans `.env.local` ou si Supabase est
 * indisponible. On ne fait pas dépendre la révision d'un service tiers.
 */
export function supabase(): SupabaseClient | null {
  if (!URL_SUPABASE || !CLE_PUBLIQUE) return null;
  if (typeof window === "undefined") return null;
  client ??= createBrowserClient(URL_SUPABASE, CLE_PUBLIQUE);
  return client;
}

/** Les comptes sont-ils disponibles sur cette installation ? */
export function comptesDisponibles(): boolean {
  return Boolean(URL_SUPABASE && CLE_PUBLIQUE);
}

/** Profil candidat, en miroir de la table `profils`. */
export type Profil = {
  id: string;
  email: string;
  niveau: "l3" | "m2" | null;
  date_concours: string | null;
  abonnement_statut: "aucun" | "actif" | "en_retard" | "annule";
  abonnement_fin: string | null;
};

/** Champs lus partout : une seule liste, pour qu'elles ne divergent pas. */
export const CHAMPS_PROFIL = "id, email, niveau, date_concours, abonnement_statut, abonnement_fin";

/**
 * L'accès est-il ouvert ?
 *
 * Un abonnement résilié reste honoré jusqu'au terme déjà payé. Même règle que
 * la fonction `abonnement_actif` en base : si vous changez l'une, changez
 * l'autre, sinon le site et la base ne diront pas la même chose.
 */
export function abonnementActif(profil: Profil | null): boolean {
  if (!profil) return false;
  if (profil.abonnement_statut === "actif") return true;
  return (
    profil.abonnement_statut === "annule" &&
    Boolean(profil.abonnement_fin) &&
    new Date(profil.abonnement_fin as string).getTime() > Date.now()
  );
}
