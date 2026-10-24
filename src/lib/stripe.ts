/**
 * Stripe, côté serveur uniquement.
 *
 * Ce fichier ne doit JAMAIS être importé depuis un composant client : il lit
 * `STRIPE_SECRET_KEY`, qui permet de créer des paiements et de lire les
 * données de tous vos clients. Elle n'a pas de préfixe `NEXT_PUBLIC_`,
 * justement pour que Next refuse de l'envoyer au navigateur.
 *
 * Règle de partage des rôles : Stripe est la source de vérité de la
 * facturation, Supabase ne garde qu'un reflet de ce qui sert à décider quoi
 * afficher. Aucun montant, aucun moyen de paiement ne transite par nos tables.
 */

import Stripe from "stripe";

const CLE = process.env.STRIPE_SECRET_KEY;

/** `null` si Stripe n'est pas configuré : le site doit rester debout sans lui. */
export function stripe(): Stripe | null {
  if (!CLE) return null;
  return new Stripe(CLE);
}

/** Identifiant du tarif fondateur, créé dans le tableau de bord Stripe. */
export const PRIX_FONDATEUR = process.env.STRIPE_PRICE_FONDATEUR;

export function paiementDisponible(): boolean {
  return Boolean(CLE && PRIX_FONDATEUR);
}

/**
 * Traduction du vocabulaire Stripe vers le nôtre.
 *
 * Choix important : un abonnement résilié reste `actif` pour nous jusqu'au
 * terme déjà payé. On le marque `annule` avec sa date de fin, et c'est la
 * fonction `abonnement_actif` en base qui tranche. C'est la loi, et c'est
 * surtout la moindre des choses : quelqu'un qui a payé son mois le garde.
 */
export function statutLisible(abonnement: Stripe.Subscription): {
  statut: "aucun" | "actif" | "en_retard" | "annule";
  fin: string | null;
} {
  const fin = finDePeriode(abonnement);

  if (abonnement.cancel_at_period_end) return { statut: "annule", fin };

  switch (abonnement.status) {
    case "active":
    case "trialing":
      return { statut: "actif", fin };
    case "past_due":
    case "unpaid":
      return { statut: "en_retard", fin };
    case "canceled":
      return { statut: "annule", fin };
    default:
      // incomplete, incomplete_expired, paused : aucun accès ouvert.
      return { statut: "aucun", fin };
  }
}

/**
 * Fin de la période en cours. Stripe la porte sur l'article d'abonnement
 * depuis la version 2025 de l'API, et non plus sur l'abonnement lui-même.
 */
function finDePeriode(abonnement: Stripe.Subscription): string | null {
  const article = abonnement.items?.data?.[0];
  const horodatage =
    article?.current_period_end ??
    (abonnement as unknown as { current_period_end?: number }).current_period_end;
  return typeof horodatage === "number" ? new Date(horodatage * 1000).toISOString() : null;
}
