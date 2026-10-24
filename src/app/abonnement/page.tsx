"use client";

/**
 * L'offre fondateur.
 *
 * Parti pris d'honnêteté, et il n'est pas négociable : on vend l'état RÉEL du
 * contenu, pas celui qu'il sera dans six mois. Ce qui manque est écrit noir sur
 * blanc, au même endroit que ce qui est inclus. Un candidat qui découvre après
 * paiement que les sciences sont vides se fait rembourser et le dit autour de
 * lui, ce qui coûte infiniment plus cher qu'un abonnement non vendu.
 */

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { useCompte } from "@/components/compte/CompteProvider";
import { Message } from "@/components/compte/ui";

const INCLUS = [
  "Les 21 notions de français écrit, cours, méthode et exercices corrigés",
  "Les 27 fiches de mathématiques, programme du concours couvert",
  "L'entraînement espacé : 589 questions qui reviennent au bon moment",
  "Le suivi de maîtrise, notion par notion, et votre espace personnel",
  "Les sujets blancs chronométrés et leur correction guidée",
];

const PAS_ENCORE = [
  "Les sciences et technologie : une seule fiche sur dix-huit aujourd'hui",
  "La version L3 des fiches de mathématiques, à dériver du M2",
  "Les épreuves orales, qui ne sont pas au programme de cette plateforme",
];

function Offre() {
  const router = useRouter();
  const parametres = useSearchParams();
  const { utilisateur, abonne, chargement } = useCompte();
  const [enCours, setEnCours] = useState(false);
  const [erreur, setErreur] = useState<string | null>(null);

  const retour = parametres.get("retour");

  async function sAbonner() {
    if (!utilisateur) {
      router.push("/inscription");
      return;
    }
    setEnCours(true);
    setErreur(null);
    try {
      const reponse = await fetch("/api/paiement/checkout", { method: "POST" });
      const donnees = await reponse.json();
      if (!reponse.ok || !donnees.url) {
        setErreur(donnees.erreur ?? "Le paiement n'a pas pu démarrer.");
        setEnCours(false);
        return;
      }
      window.location.href = donnees.url;
    } catch {
      setErreur("La connexion a échoué. Vérifiez votre réseau et réessayez.");
      setEnCours(false);
    }
  }

  return (
    <section className="bg-seyes flex-1 px-5 py-12 md:py-16">
      <div className="mx-auto max-w-2xl">

        <h1 className="text-3xl font-bold text-primary lg:text-4xl">Soutenir Maitrizz</h1>
        <div className="mt-4 h-px w-full bg-primary/20" />

        {retour === "succes" ? (
          <div className="mt-6">
            <Message type="succes">
              Votre abonnement est enregistré, merci. Il peut s&apos;écouler quelques secondes
              avant que votre espace en tienne compte.
            </Message>
          </div>
        ) : null}
        {retour === "annule" ? (
          <div className="mt-6">
            <Message type="erreur">
              Paiement abandonné, rien ne vous a été prélevé. Vous pouvez reprendre quand vous
              voulez.
            </Message>
          </div>
        ) : null}
        {erreur ? (
          <div className="mt-6">
            <Message type="erreur">{erreur}</Message>
          </div>
        ) : null}

        <p className="mt-6 font-ui text-base leading-relaxed text-on-surface">
          Maitrizz est construit par une seule personne, et le contenu est écrit à la main,
          fiche par fiche. L&apos;abonnement fondateur finance ce travail et vous donne accès
          à l&apos;entraînement espacé, qui est le cœur de la méthode.
        </p>

        <div className="mt-8 rounded-xl bg-white p-8 ring-1 ring-primary/10 shadow-copy">
          <span className="inline-block -rotate-1 rounded-sm border-2 border-secondary/50 px-3 py-1.5 font-ui text-[11px] font-bold uppercase tracking-[0.18em] text-secondary/90">
            Tarif fondateur, verrouillé à vie
          </span>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-5xl font-bold text-primary">7,90 €</span>
            <span className="font-ui text-lg text-on-surface-variant">/ mois</span>
          </div>
          <p className="mt-2 font-ui text-sm text-on-surface-variant">
            Au lieu de 12,90 € à l&apos;ouverture. Ce prix reste le vôtre tant que votre
            abonnement demeure actif, sans engagement, résiliable en un clic.
          </p>

          <div className="mt-8">
            <p className="font-ui text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
              Ce que vous avez aujourd&apos;hui
            </p>
            <ul className="mt-4 space-y-3">
              {INCLUS.map((ligne) => (
                <li key={ligne} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                  <span className="font-ui text-sm leading-relaxed text-on-surface">{ligne}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Le bloc qui compte. Personne ne vend ce qui lui manque, et c'est
              précisément pour ça qu'il faut le faire. */}
          <div className="mt-7 rounded-xl border border-outline-variant/60 bg-surface p-5">
            <p className="font-ui text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
              Ce qui n&apos;est pas encore là
            </p>
            <ul className="mt-4 space-y-3">
              {PAS_ENCORE.map((ligne) => (
                <li key={ligne} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-base-300" />
                  <span className="font-ui text-sm leading-relaxed text-on-surface-variant">
                    {ligne}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-ui text-xs leading-relaxed text-on-surface-variant">
              Les sciences et la version L3 sont le chantier en cours, et arriveront sans
              supplément. Les oraux ne sont pas prévus : mieux vaut le dire que le laisser
              espérer.
            </p>
          </div>

          {abonne ? (
            <div className="mt-8">
              <p className="font-ui text-sm font-bold text-success">
                Vous êtes abonné. Merci, sincèrement.
              </p>
              <Link
                href="/compte"
                className="mt-4 inline-block font-ui text-sm text-primary underline decoration-secondary/60 decoration-2 underline-offset-4"
              >
                Gérer mon abonnement
              </Link>
            </div>
          ) : (
            <>
              <button
                type="button"
                onClick={sAbonner}
                disabled={enCours || chargement}
                className="mt-8 w-full rounded-xl bg-primary py-3.5 font-ui text-base font-bold text-white transition-all hover:bg-primary-container active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {enCours ? "Un instant…" : utilisateur ? "Devenir fondateur" : "Créer mon compte"}
              </button>
              <p className="mt-4 text-center font-ui text-xs leading-relaxed text-on-surface-variant">
                Paiement sécurisé par Stripe. Aucune donnée bancaire ne transite par Maitrizz.
              </p>
            </>
          )}
        </div>

        <p className="mt-8 text-center font-ui text-sm text-on-surface-variant">
          Les fiches de cours restent{" "}
          <Link href="/reviser" className="text-primary underline decoration-secondary/60 decoration-2 underline-offset-4">
            librement accessibles
          </Link>
          , avec ou sans abonnement.
        </p>

      </div>
    </section>
  );
}

export default function AbonnementPage() {
  return (
    <Suspense>
      <Offre />
    </Suspense>
  );
}
