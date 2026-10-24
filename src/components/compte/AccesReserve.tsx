"use client";

/**
 * Enveloppe un contenu réservé aux abonnés.
 *
 * Deux garde-fous, tous deux délibérés :
 *
 * 1. **Un interrupteur explicite** (`NEXT_PUBLIC_ACCES_RESERVE`). Tant qu'il
 *    n'est pas posé, rien n'est verrouillé. On ne veut surtout pas d'un site
 *    qui se ferme tout seul le jour où Stripe est configuré, alors que la page
 *    d'accueil promet encore la gratuité jusqu'au lancement.
 *
 * 2. **On n'affiche jamais le mur pendant le chargement.** Le temps que la
 *    session et le profil arrivent, un abonné verrait sinon une porte fermée
 *    chez lui, ce qui est la meilleure façon de provoquer une résiliation.
 *
 * Ce qui est réservé : le hub d'entraînement espacé, c'est-à-dire la méthode.
 * Les fiches de cours restent libres, parce qu'elles font venir les candidats
 * par les moteurs de recherche et que le cours seul se trouve partout.
 */

import Link from "next/link";
import { useCompte } from "./CompteProvider";

const VERROUILLAGE_ACTIF = process.env.NEXT_PUBLIC_ACCES_RESERVE === "1";

export function AccesReserve({
  titre = "Réservé aux abonnés",
  argument,
  children,
}: {
  titre?: string;
  argument: string;
  children: React.ReactNode;
}) {
  const { abonne, utilisateur, chargement } = useCompte();

  if (!VERROUILLAGE_ACTIF || abonne || chargement) return <>{children}</>;

  return (
    <div className="rounded-xl bg-white p-8 ring-1 ring-primary/10 shadow-copy md:p-10">
      <span className="font-ui text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
        {titre}
      </span>
      <div className="mt-3 h-px w-full bg-primary/15" />

      <p className="mt-6 font-serif text-xl leading-snug text-on-surface">{argument}</p>

      <p className="mt-4 font-ui text-sm leading-relaxed text-on-surface-variant">
        Les fiches de cours, elles, restent entièrement libres : seul
        l&apos;entraînement espacé et le suivi de maîtrise demandent un abonnement.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/abonnement"
          className="rounded-xl bg-primary px-7 py-3.5 font-ui text-base font-bold text-white transition-all hover:bg-primary-container active:scale-[0.98]"
        >
          Voir l&apos;offre fondateur
        </Link>
        {!utilisateur ? (
          <Link
            href="/connexion"
            className="rounded-xl border border-primary/20 bg-white px-7 py-3.5 font-ui text-base font-bold text-primary transition-all hover:bg-surface active:scale-[0.98]"
          >
            J&apos;ai déjà un compte
          </Link>
        ) : null}
      </div>
    </div>
  );
}
