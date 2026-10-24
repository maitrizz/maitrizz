/**
 * Webhook Stripe : la seule voie par laquelle un abonnement devient actif.
 *
 * Pourquoi pas au retour de paiement ? Parce qu'un retour de navigateur n'est
 * pas une preuve : la personne peut fermer l'onglet avant, ou bricoler l'URL
 * de succès. Stripe, lui, nous prévient de serveur à serveur, et signe son
 * message. C'est cette signature qui fait foi.
 *
 * Toute la route repose donc sur deux gardes :
 *  1. la signature est vérifiée avant de lire quoi que ce soit ;
 *  2. le corps est lu BRUT (`req.text()`), car la signature porte sur les
 *     octets exacts : le moindre reformatage JSON la casserait.
 */

import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { statutLisible, stripe } from "@/lib/stripe";
import { clientAdmin } from "@/lib/supabase-serveur";

const SECRET = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(requete: Request) {
  const client = stripe();
  const admin = clientAdmin();
  if (!client || !admin || !SECRET) {
    return NextResponse.json({ erreur: "Webhook non configuré." }, { status: 503 });
  }

  const signature = requete.headers.get("stripe-signature");
  if (!signature) return NextResponse.json({ erreur: "Signature absente." }, { status: 400 });

  const corps = await requete.text();

  let evenement: Stripe.Event;
  try {
    evenement = client.webhooks.constructEvent(corps, signature, SECRET);
  } catch {
    // Signature invalide : la requête ne vient pas de Stripe. On s'arrête net.
    return NextResponse.json({ erreur: "Signature invalide." }, { status: 400 });
  }

  try {
    switch (evenement.type) {
      // Premier paiement accepté : on relie le client Stripe au compte.
      case "checkout.session.completed": {
        const session = evenement.data.object;
        const utilisateurId = session.client_reference_id ?? session.metadata?.utilisateur_id;
        const clientId = typeof session.customer === "string" ? session.customer : session.customer?.id;
        if (utilisateurId && clientId) {
          await admin.from("profils").update({ stripe_client_id: clientId }).eq("id", utilisateurId);
        }
        break;
      }

      // Toute la vie de l'abonnement : création, renouvellement, impayé,
      // résiliation. Un seul traitement, pour éviter que deux chemins de code
      // divergent sur ce qu'est « être abonné ».
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const abonnement = evenement.data.object;
        const { statut, fin } = statutLisible(abonnement);
        const clientId =
          typeof abonnement.customer === "string" ? abonnement.customer : abonnement.customer?.id;
        const utilisateurId = abonnement.metadata?.utilisateur_id;

        const valeurs = {
          abonnement_statut: evenement.type === "customer.subscription.deleted" ? "annule" : statut,
          abonnement_fin: fin,
          abonnement_maj_le: new Date().toISOString(),
          ...(clientId ? { stripe_client_id: clientId } : {}),
        };

        // On vise d'abord l'identifiant de compte porté par les métadonnées,
        // et on retombe sur l'identifiant client Stripe. Les deux existent
        // justement pour qu'un seul manquant ne perde pas l'abonné.
        if (utilisateurId) {
          await admin.from("profils").update(valeurs).eq("id", utilisateurId);
        } else if (clientId) {
          await admin.from("profils").update(valeurs).eq("stripe_client_id", clientId);
        }
        break;
      }

      default:
        // Les autres événements ne nous concernent pas. On répond quand même
        // 200 : sans quoi Stripe réessaierait indéfiniment.
        break;
    }
  } catch {
    // Erreur de notre côté : on renvoie 500 pour que Stripe retente plus tard,
    // plutôt que de perdre silencieusement un abonnement payé.
    return NextResponse.json({ erreur: "Traitement impossible." }, { status: 500 });
  }

  return NextResponse.json({ recu: true });
}
