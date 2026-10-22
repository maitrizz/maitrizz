"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  BoutonPrincipal,
  CarteCompte,
  Champ,
  LienDiscret,
  Message,
  messageLisible,
} from "@/components/compte/ui";

function Formulaire() {
  const router = useRouter();
  const parametres = useSearchParams();
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState<string | null>(null);
  const [enCours, setEnCours] = useState(false);

  // Arrivée depuis l'inscription ou depuis le lien de confirmation.
  const confirme = parametres.get("confirme") === "1";

  async function envoyer(evenement: React.FormEvent) {
    evenement.preventDefault();
    const client = supabase();
    if (!client) {
      setErreur("Les comptes ne sont pas disponibles pour le moment.");
      return;
    }
    setEnCours(true);
    setErreur(null);

    const { error } = await client.auth.signInWithPassword({ email, password: motDePasse });

    if (error) {
      setErreur(messageLisible(error.message));
      setEnCours(false);
      return;
    }
    // La synchronisation démarre toute seule : le fournisseur de compte voit
    // la session changer et descend la progression.
    router.push("/compte");
  }

  return (
    <CarteCompte
      titre="Se connecter"
      intro="Retrouvez vos révisions, où que vous les ayez commencées."
      pied={
        <>
          Pas encore de compte ? <LienDiscret href="/inscription">En créer un</LienDiscret>
        </>
      }
    >
      {confirme ? (
        <Message type="succes">
          Votre adresse est confirmée. Vous pouvez vous connecter.
        </Message>
      ) : null}
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
        <Champ
          id="mot-de-passe"
          label="Mot de passe"
          type="password"
          autoComplete="current-password"
          required
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
        />
        <BoutonPrincipal type="submit" enCours={enCours}>
          Se connecter
        </BoutonPrincipal>
      </form>

      <p className="mt-5 text-center">
        <LienDiscret href="/mot-de-passe-oublie">Mot de passe oublié</LienDiscret>
      </p>
    </CarteCompte>
  );
}

export default function ConnexionPage() {
  // `useSearchParams` impose une frontière de suspense côté Next.
  return (
    <Suspense>
      <Formulaire />
    </Suspense>
  );
}
