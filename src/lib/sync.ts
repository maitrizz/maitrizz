/**
 * Adaptateur réseau du magasin : le seul endroit où la progression rencontre
 * Supabase.
 *
 * Deux mouvements, et deux seulement :
 *  - `recupererTout` au moment de la connexion ou de l'ouverture d'un onglet :
 *    on descend les lignes du serveur, on les FUSIONNE avec celles de
 *    l'appareil (règles dans `store.ts`), puis on renvoie ce que la fusion a
 *    changé, pour que l'autre appareil en profite à son tour ;
 *  - `envoyer`, appelé par la file du magasin, environ deux secondes après la
 *    dernière action, avec les clés modifiées.
 *
 * Rien ici ne décide de pédagogie : les règles de fusion vivent dans
 * `store.ts`, où elles restent vérifiables sans réseau.
 */

import type { SupabaseClient } from "@supabase/supabase-js";
import {
  appliquerDistant,
  clesConnues,
  lireJSON,
  majLocale,
  signalerArriveeDistante,
  type AdaptateurSync,
} from "./store";

type LigneProgression = {
  cle: string;
  valeur: unknown;
  maj_le: string;
};

/**
 * Monte vers le serveur les clés indiquées. Une clé absente localement a été
 * supprimée par le candidat : on efface la ligne correspondante.
 *
 * `upsert` écrase la ligne existante. C'est volontaire et sans danger : ce
 * qu'on envoie est TOUJOURS le résultat d'une fusion avec ce que le serveur
 * avait, jamais une valeur formée dans le vide.
 */
export function creerAdaptateur(client: SupabaseClient, utilisateurId: string): AdaptateurSync {
  return {
    async envoyer(cles: string[]) {
      const aEcrire: { utilisateur_id: string; cle: string; valeur: unknown }[] = [];
      const aEffacer: string[] = [];

      for (const cle of cles) {
        const valeur = lireJSON<unknown>(cle, null);
        if (valeur === null) aEffacer.push(cle);
        else aEcrire.push({ utilisateur_id: utilisateurId, cle, valeur });
      }

      if (aEcrire.length > 0) {
        const { error } = await client
          .from("progression")
          .upsert(aEcrire, { onConflict: "utilisateur_id,cle" });
        // On relaie l'erreur : le magasin remettra le lot dans la file.
        if (error) throw new Error(error.message);
      }

      if (aEffacer.length > 0) {
        const { error } = await client
          .from("progression")
          .delete()
          .eq("utilisateur_id", utilisateurId)
          .in("cle", aEffacer);
        if (error) throw new Error(error.message);
      }
    },
  };
}

/**
 * Descend toute la progression du serveur et la fusionne avec l'appareil.
 * Renvoie les clés à renvoyer au serveur : celles que la fusion a modifiées,
 * et celles que cet appareil est seul à connaître.
 */
export async function recupererTout(
  client: SupabaseClient,
  utilisateurId: string,
): Promise<string[]> {
  const { data, error } = await client
    .from("progression")
    .select("cle, valeur, maj_le")
    .eq("utilisateur_id", utilisateurId);

  if (error) throw new Error(error.message);

  const lignes = (data ?? []) as LigneProgression[];
  const vuesAuServeur = new Set<string>();
  const aRenvoyer: string[] = [];
  let quelqueChoseAChange = false;

  for (const ligne of lignes) {
    vuesAuServeur.add(ligne.cle);
    // `maj_le` est posé par la base, donc fiable. Une date locale absente vaut
    // 0 : le serveur l'emporte alors pour les formats indivisibles.
    const distantePlusRecente = Date.parse(ligne.maj_le) > majLocale(ligne.cle);
    if (appliquerDistant(ligne.cle, ligne.valeur, distantePlusRecente)) {
      quelqueChoseAChange = true;
      aRenvoyer.push(ligne.cle);
    }
  }

  // Ce que cet appareil a et que le serveur ignore : première connexion, ou
  // révisions faites hors ligne. Ces clés doivent monter telles quelles.
  for (const cle of clesConnues(utilisateurId)) {
    if (!vuesAuServeur.has(cle)) aRenvoyer.push(cle);
  }

  // Un seul réveil des composants pour toute la salve, plutôt qu'un par clé.
  if (quelqueChoseAChange) signalerArriveeDistante();

  return aRenvoyer;
}
