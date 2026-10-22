"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { NIVEAU_LABELS, NIVEAUX, type Niveau } from "@/lib/niveau";
import { supabase } from "@/lib/supabase";
import { useCompte } from "@/components/compte/CompteProvider";
import { BoutonPrincipal, CarteCompte, Champ, Message } from "@/components/compte/ui";

export default function ComptePage() {
  const router = useRouter();
  const {
    utilisateur,
    profil,
    chargement,
    etatSync,
    progressionLocale,
    rattacherProgressionLocale,
    ignorerProgressionLocale,
    deconnexion,
    rechargerProfil,
  } = useCompte();

  const [niveau, setNiveau] = useState<Niveau | null>(null);
  const [dateConcours, setDateConcours] = useState("");
  const [enregistre, setEnregistre] = useState(false);
  const [enCours, setEnCours] = useState(false);

  // Personne connectée : on renvoie vers la connexion plutôt que d'afficher
  // une page vide.
  useEffect(() => {
    if (!chargement && !utilisateur) router.replace("/connexion");
  }, [chargement, utilisateur, router]);

  // Le formulaire part des valeurs du profil dès qu'elles arrivent.
  useEffect(() => {
    if (!profil) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- initialise le formulaire quand le profil arrive du serveur
    setNiveau(profil.niveau);
    setDateConcours(profil.date_concours ?? "");
  }, [profil]);

  async function enregistrer(evenement: React.FormEvent) {
    evenement.preventDefault();
    const client = supabase();
    if (!client || !utilisateur) return;

    setEnCours(true);
    await client
      .from("profils")
      .update({ niveau, date_concours: dateConcours || null })
      .eq("id", utilisateur.id);
    await rechargerProfil();
    setEnCours(false);
    setEnregistre(true);
  }

  if (chargement || !utilisateur) {
    return (
      <CarteCompte titre="Mon compte">
        <p className="font-ui text-sm text-on-surface-variant">Un instant…</p>
      </CarteCompte>
    );
  }

  return (
    <CarteCompte titre="Mon compte" intro={utilisateur.email ?? undefined}>
      {progressionLocale > 0 ? (
        <div className="mb-6 rounded-xl border border-secondary/40 bg-secondary/5 p-5">
          <p className="font-ui text-sm leading-relaxed text-on-surface">
            Cet appareil contient des révisions faites avant la création de votre compte.
            Voulez-vous les rattacher ? Elles seront ajoutées à votre progression, sans jamais
            effacer ce que vous avez fait ailleurs.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={rattacherProgressionLocale}
              className="rounded-xl bg-primary px-5 py-2.5 font-ui text-sm font-bold text-white transition-all hover:bg-primary-container active:scale-95"
            >
              Les rattacher
            </button>
            <button
              type="button"
              onClick={ignorerProgressionLocale}
              className="rounded-xl border border-primary/20 bg-white px-5 py-2.5 font-ui text-sm font-bold text-primary transition-all hover:bg-surface active:scale-95"
            >
              Non merci
            </button>
          </div>
        </div>
      ) : null}

      {enregistre ? <Message type="succes">Vos informations sont enregistrées.</Message> : null}

      <form onSubmit={enregistrer}>
        <div className="mb-5">
          <span className="mb-2 block font-ui text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
            Vous préparez
          </span>
          <div className="flex gap-3">
            {NIVEAUX.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => {
                  setNiveau(n);
                  setEnregistre(false);
                }}
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
          label="Date de l'écrit"
          type="date"
          aide="Elle servira à vous proposer un rythme de révision adapté au temps qu'il vous reste."
          value={dateConcours}
          onChange={(e) => {
            setDateConcours(e.target.value);
            setEnregistre(false);
          }}
        />

        <BoutonPrincipal type="submit" enCours={enCours}>
          Enregistrer
        </BoutonPrincipal>
      </form>

      <div className="mt-8 border-t border-outline-variant/40 pt-6">
        <p className="font-ui text-xs leading-relaxed text-on-surface-variant">
          {etatSync === "a-jour"
            ? "Vos révisions sont enregistrées sur votre compte et vous suivent d'un appareil à l'autre."
            : etatSync === "en-cours"
              ? "Synchronisation en cours…"
              : "Synchronisation indisponible pour le moment. Vos révisions restent enregistrées sur cet appareil et repartiront toutes seules."}
        </p>
        <button
          type="button"
          onClick={() => void deconnexion().then(() => router.push("/"))}
          className="mt-4 font-ui text-sm text-on-surface-variant underline decoration-outline-variant decoration-2 underline-offset-4 transition-colors hover:text-primary"
        >
          Se déconnecter
        </button>
      </div>
    </CarteCompte>
  );
}
