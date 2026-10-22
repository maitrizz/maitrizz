"use client";

import { useState } from "react";
import { NIVEAU_LABELS, NIVEAUX, type Niveau } from "@/lib/niveau";
import { supabase } from "@/lib/supabase";
import {
  BoutonPrincipal,
  CarteCompte,
  Champ,
  LienDiscret,
  Message,
  messageLisible,
} from "@/components/compte/ui";

export default function InscriptionPage() {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [niveau, setNiveau] = useState<Niveau>("m2");
  const [dateConcours, setDateConcours] = useState("");
  const [erreur, setErreur] = useState<string | null>(null);
  const [envoye, setEnvoye] = useState(false);
  const [enCours, setEnCours] = useState(false);

  async function envoyer(evenement: React.FormEvent) {
    evenement.preventDefault();
    const client = supabase();
    if (!client) {
      setErreur("Les comptes ne sont pas disponibles pour le moment.");
      return;
    }
    if (motDePasse.length < 8) {
      setErreur("Le mot de passe doit faire au moins 8 caractères.");
      return;
    }

    setEnCours(true);
    setErreur(null);

    // Niveau et date partent dans les métadonnées du compte : le déclencheur
    // SQL `creer_profil_a_inscription` les range dans la table `profils`, donc
    // le site n'a aucun appel supplémentaire à faire ici.
    const { error } = await client.auth.signUp({
      email,
      password: motDePasse,
      options: {
        data: { niveau, date_concours: dateConcours || null },
        emailRedirectTo: `${window.location.origin}/connexion?confirme=1`,
      },
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
        titre="Vérifiez vos emails"
        intro="Nous venons d'envoyer un message à votre adresse. Cliquez sur le lien qu'il contient pour confirmer votre compte, puis revenez vous connecter."
      >
        <Message type="succes">
          Rien reçu au bout de quelques minutes ? Pensez à regarder dans les courriers
          indésirables.
        </Message>
        <p className="text-center">
          <LienDiscret href="/connexion">Aller à la connexion</LienDiscret>
        </p>
      </CarteCompte>
    );
  }

  return (
    <CarteCompte
      titre="Créer un compte"
      intro="Pour que vos révisions vous suivent d'un appareil à l'autre, et ne disparaissent pas avec le cache de votre navigateur."
      pied={
        <>
          Vous avez déjà un compte ? <LienDiscret href="/connexion">Se connecter</LienDiscret>
        </>
      }
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
        <Champ
          id="mot-de-passe"
          label="Mot de passe"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          aide="Au moins 8 caractères."
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
        />

        <div className="mb-5">
          <span className="mb-2 block font-ui text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
            Vous préparez
          </span>
          <div className="flex gap-3">
            {NIVEAUX.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setNiveau(n)}
                className={`flex-1 rounded-xl border px-4 py-3 font-ui text-sm font-bold transition-all active:scale-95 ${
                  niveau === n
                    ? "border-primary bg-primary text-white"
                    : "border-outline-variant/60 bg-white text-on-surface hover:bg-surface"
                }`}
              >
                {NIVEAU_LABELS[n]}
              </button>
            ))}
          </div>
        </div>

        <Champ
          id="date-concours"
          label="Date de l'écrit (facultatif)"
          type="date"
          aide="Elle servira à vous proposer un rythme de révision adapté au temps qu'il vous reste. Vous pourrez la renseigner plus tard."
          value={dateConcours}
          onChange={(e) => setDateConcours(e.target.value)}
        />

        <BoutonPrincipal type="submit" enCours={enCours}>
          Créer mon compte
        </BoutonPrincipal>
      </form>
    </CarteCompte>
  );
}
