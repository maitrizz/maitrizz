/**
 * Ouvre une page de paiement Stripe pour le tarif fondateur.
 *
 * Le navigateur ne choisit NI le prix NI le produit : il demande simplement à
 * s'abonner, et le serveur décide de quoi il s'agit. Laisser passer un
 * identifiant de tarif depuis le client permettrait à n'importe qui de
 * s'abonner au tarif de son choix.
 */

import { NextResponse } from "next/server";
import { PRIX_FONDATEUR, stripe } from "@/lib/stripe";
import { clientSession } from "@/lib/supabase-serveur";

export async function POST(requete: Request) {
  const client = stripe();
  if (!client || !PRIX_FONDATEUR) {
    return NextResponse.json({ erreur: "Le paiement n'est pas encore disponible." }, { status: 503 });
  }

  const supabase = await clientSession();
  if (!supabase) {
    return NextResponse.json({ erreur: "Service indisponible." }, { status: 503 });
  }

  // L'identité vient du cookie de session, jamais du corps de la requête.
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ erreur: "Connectez-vous pour vous abonner." }, { status: 401 });
  }

  const { data: profil } = await supabase
    .from("profils")
    .select("stripe_client_id, abonnement_statut")
    .eq("id", user.id)
    .maybeSingle();

  if (profil?.abonnement_statut === "actif") {
    return NextResponse.json({ erreur: "Vous êtes déjà abonné." }, { status: 409 });
  }

  const origine = new URL(requete.url).origin;

  try {
    const session = await client.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: PRIX_FONDATEUR, quantity: 1 }],
      // Réutiliser le client existant évite les doublons dans Stripe quand
      // quelqu'un abandonne un paiement puis recommence.
      ...(profil?.stripe_client_id
        ? { customer: profil.stripe_client_id }
        : { customer_email: user.email }),
      // Deux fils pour relier le paiement au compte : la référence sert à la
      // session, les métadonnées suivent l'abonnement toute sa vie.
      client_reference_id: user.id,
      subscription_data: { metadata: { utilisateur_id: user.id } },
      metadata: { utilisateur_id: user.id },
      locale: "fr",
      allow_promotion_codes: true,
      success_url: `${origine}/abonnement?retour=succes`,
      cancel_url: `${origine}/abonnement?retour=annule`,
    });

    return NextResponse.json({ url: session.url });
  } catch {
    // On ne renvoie jamais le message brut de Stripe : il peut contenir des
    // détails de configuration qui ne regardent pas le visiteur.
    return NextResponse.json(
      { erreur: "La page de paiement n'a pas pu s'ouvrir. Réessayez dans un instant." },
      { status: 502 },
    );
  }
}
