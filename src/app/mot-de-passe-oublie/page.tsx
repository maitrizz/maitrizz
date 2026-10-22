"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  BoutonPrincipal,
  CarteCompte,
  Champ,
  LienDiscret,
  Message,
  messageLisible,
} from "@/components/compte/ui";

export default function MotDePasseOubliePage() {
  const [email, setEmail] = useState("");
  const [erreur, setErreur] = useState<string | null>(null);
  const [envoye, setEnvoye] = useState(false);
  const [enCours, setEnCours] = useState(false);

  async function envoyer(evenement: React.FormEvent) {
    evenement.preventDefault();
    const client = supabase();
    if (!client) return;

    setEnCours(true);
    setErreur(null);

    const { error } = await client.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/compte/nouveau-mot-de-passe`,
    });

    if (error) {
      setErreur(messageLisible(error.message));
      setEnCours(false);
      return;
    }
    setEnvoye(true);
    setEnCours(false);
  }

  if (envoye) {
    return (
      <CarteCompte
        titre="Message envoyé"
        intro="Si un compte existe avec cette adresse, vous allez recevoir un lien pour choisir un nouveau mot de passe."
      >
        <p className="text-center">
          <LienDiscret href="/connexion">Retour à la connexion</LienDiscret>
        </p>
      </CarteCompte>
    );
  }

  return (
    <CarteCompte
      titre="Mot de passe oublié"
      intro="Indiquez votre adresse, nous vous envoyons un lien pour en choisir un nouveau."
      pied={<LienDiscret href="/connexion">Retour à la connexion</LienDiscret>}
    >
      {erreur ? <Message type="erreur">{erreur}</Message> : null}

      <form onSubmit={envoyer}>
        <Champ
          id="email"
          label="Adresse email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <BoutonPrincipal type="submit" enCours={enCours}>
          Recevoir le lien
        </BoutonPrincipal>
      </form>
    </CarteCompte>
  );
}
