/**
 * Ouvre le portail Stripe : changer de carte, voir ses factures, résilier.
 *
 * Tout passe par Stripe, volontairement. Écrire nous-mêmes un écran de
 * résiliation, c'est assumer la conformité, les relances et les factures, pour
 * un résultat moins bon. Et une résiliation doit rester facile à trouver :
 * c'est une obligation légale autant qu'une question de respect.
 */

import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { clientSession } from "@/lib/supabase-serveur";

export async function POST(requete: Request) {
  const client = stripe();
  const supabase = await clientSession();
  if (!client || !supabase) {
    return NextResponse.json({ erreur: "Service indisponible." }, { status: 503 });
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ erreur: "Connectez-vous d'abord." }, { status: 401 });
  }

  const { data: profil } = await supabase
    .from("profils")
    .select("stripe_client_id")
    .eq("id", user.id)
    .maybeSingle();

  if (!profil?.stripe_client_id) {
    return NextResponse.json({ erreur: "Aucun abonnement à gérer." }, { status: 404 });
  }

  try {
    const session = await client.billingPortal.sessions.create({
      customer: profil.stripe_client_id,
      return_url: `${new URL(requete.url).origin}/compte`,
    });
    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json(
      { erreur: "Le portail n'a pas pu s'ouvrir. Réessayez dans un instant." },
      { status: 502 },
    );
  }
}
