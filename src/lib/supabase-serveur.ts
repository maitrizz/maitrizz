/**
 * Supabase côté serveur : deux clients, deux usages, à ne pas confondre.
 *
 *  - `clientSession()` agit AU NOM du visiteur, à partir du cookie de session.
 *    Il reste soumis à la sécurité par ligne : il ne peut lire que ce que le
 *    visiteur a le droit de lire. C'est lui qu'on utilise pour savoir qui
 *    demande un paiement.
 *
 *  - `clientAdmin()` utilise la clé de service et passe OUTRE la sécurité par
 *    ligne. Réservé au webhook Stripe, qui n'agit au nom de personne et doit
 *    écrire un statut d'abonnement que le visiteur n'a pas le droit de
 *    toucher. Ne jamais l'appeler depuis une route déclenchée par un visiteur.
 *
 * La clé de service n'a pas de préfixe `NEXT_PUBLIC_` : elle ne doit jamais
 * partir dans le navigateur. Quiconque l'obtient lit et modifie toute la base.
 */

import { createServerClient } from "@supabase/ssr";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

const URL_SUPABASE = process.env.NEXT_PUBLIC_SUPABASE_URL;
const CLE_PUBLIQUE = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const CLE_SERVICE = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function clientSession(): Promise<SupabaseClient | null> {
  if (!URL_SUPABASE || !CLE_PUBLIQUE) return null;
  const magasin = await cookies();
  return createServerClient(URL_SUPABASE, CLE_PUBLIQUE, {
    cookies: {
      getAll: () => magasin.getAll(),
      setAll: (aPoser) => {
        try {
          aPoser.forEach(({ name, value, options }) => magasin.set(name, value, options));
        } catch {
          // Appel depuis un composant serveur : la session est rafraîchie
          // ailleurs, on peut ignorer sans conséquence.
        }
      },
    },
  });
}

export function clientAdmin(): SupabaseClient | null {
  if (!URL_SUPABASE || !CLE_SERVICE) return null;
  return createClient(URL_SUPABASE, CLE_SERVICE, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
