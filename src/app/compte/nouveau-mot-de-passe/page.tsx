"use client";

/**
 * Choix d'un nouveau mot de passe, après clic sur le lien reçu par email.
 *
 * Supabase ouvre une session temporaire au moment où la page s'ouvre depuis ce
 * lien : il n'y a donc rien à vérifier ici, l'appel `updateUser` suffit. Si la
 * personne arrive sur cette page sans lien valide, l'appel échoue proprement.
 */

import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  BoutonPrincipal,
  CarteCompte,
  Champ,
  Message,
  messageLisible,
} from "@/components/compte/ui";

export default function NouveauMotDePassePage() {
  const router = useRouter();
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState<string | null>(null);
  const [enCours, setEnCours] = useState(false);

  async function envoyer(evenement: React.FormEvent) {
    evenement.preventDefault();
    const client = supabase();
    if (!client) return;
    if (motDePasse.length < 8) {
      setErreur("Le mot de passe doit faire au moins 8 caractères.");
      return;
    }

    setEnCours(true);
    setErreur(null);

    const { error } = await client.auth.updateUser({ password: motDePasse });

    if (error) {
      setErreur(
        error.message.toLowerCase().includes("session")
          ? "Ce lien n'est plus valable. Demandez-en un nouveau depuis « mot de passe oublié »."
          : messageLisible(error.message),
      );
      setEnCours(false);
      return;
    }
    router.push("/compte");
  }

  return (
    <CarteCompte titre="Nouveau mot de passe" intro="Choisissez un mot de passe d'au moins 8 caractères.">
      {erreur ? <Message type="erreur">{erreur}</Message> : null}

      <form onSubmit={envoyer}>
        <Champ
          id="mot-de-passe"
          label="Nouveau mot de passe"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
        />
        <BoutonPrincipal type="submit" enCours={enCours}>
          Enregistrer
        </BoutonPrincipal>
      </form>
    </CarteCompte>
  );
}
