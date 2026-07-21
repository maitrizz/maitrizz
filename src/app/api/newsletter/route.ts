import { NextResponse } from "next/server";

// Inscription à la liste bêta via Brevo.
// Variables d'environnement attendues (.env.local) :
// - BREVO_API_KEY (obligatoire) : clé API Brevo, commence par "xkeysib-".
// - BREVO_LIST_ID (obligatoire) : id numérique de la liste « Bêta Maitrizz ».
// - BREVO_DOI_TEMPLATE_ID (optionnel) : id du template de double opt-in.
//   S'il est présent, Brevo envoie l'email « confirme ton inscription » ;
//   sinon le contact est ajouté directement à la liste.
// - BREVO_DOI_REDIRECT_URL (optionnel) : page affichée après confirmation,
//   par défaut la page d'accueil.
// - NEWSLETTER_NOTIF_EMAILS (optionnel) : liste d'adresses séparées par des
//   virgules à notifier à chaque inscription, par défaut brevo@maitrizz.fr.
//   L'envoi passe par l'API transactionnelle Brevo, avec l'email et le
//   parcours du contact écrits directement dans le message (pas de variable
//   de personnalisation Brevo, qui se résout sur le destinataire et pas sur
//   le contact inscrit dans une automatisation envoyée à une adresse fixe).

const PARCOURS_VALIDES = [
  "licence",
  "master1",
  "master2",
  "reconversion",
  "renseignement",
] as const;
type Parcours = (typeof PARCOURS_VALIDES)[number];

const LIBELLES_PARCOURS: Record<Parcours, string> = {
  licence: "Licence (voie L3)",
  master1: "Master 1",
  master2: "Master 2 (voie M2)",
  reconversion: "Reconversion",
  renseignement: "Se renseigne",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

async function notifierInscription(apiKey: string, email: string, parcours: Parcours) {
  const destinataires = (
    process.env.NEWSLETTER_NOTIF_EMAILS ?? "brevo@maitrizz.fr"
  )
    .split(",")
    .map((a) => a.trim())
    .filter(Boolean);

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Bêta Maitrizz", email: "brevo@maitrizz.fr" },
        to: destinataires.map((a) => ({ email: a })),
        subject: `[Maitrizz] Nouvelle inscription bêta : ${email}`,
        htmlContent: `<p><strong>Email :</strong> ${email}</p><p><strong>Parcours :</strong> ${LIBELLES_PARCOURS[parcours]}</p>`,
      }),
    });
    if (!response.ok) {
      const detail = await response.text();
      console.error(`newsletter: notification Brevo ${response.status}`, detail);
    }
  } catch (error) {
    console.error("newsletter: envoi de la notification impossible", error);
  }
}

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);
  if (!apiKey || !Number.isInteger(listId) || listId <= 0) {
    console.error("newsletter: BREVO_API_KEY ou BREVO_LIST_ID manquant");
    return NextResponse.json(
      { error: "L'inscription est indisponible pour le moment." },
      { status: 503 },
    );
  }

  let body: { email?: unknown; parcours?: unknown; website?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Champ pot de miel : rempli uniquement par les robots.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Cette adresse e-mail ne semble pas valide." },
      { status: 400 },
    );
  }

  if (!PARCOURS_VALIDES.includes(body.parcours as Parcours)) {
    return NextResponse.json(
      { error: "Merci d'indiquer où tu en es." },
      { status: 400 },
    );
  }
  const parcours = body.parcours as Parcours;

  const attributes = { PARCOURS: parcours };
  const doiTemplateId = Number(process.env.BREVO_DOI_TEMPLATE_ID);
  const useDoubleOptin = Number.isInteger(doiTemplateId) && doiTemplateId > 0;

  const url = useDoubleOptin
    ? "https://api.brevo.com/v3/contacts/doubleOptinConfirmation"
    : "https://api.brevo.com/v3/contacts";
  const payload = useDoubleOptin
    ? {
        email,
        attributes,
        includeListIds: [listId],
        templateId: doiTemplateId,
        redirectionUrl:
          process.env.BREVO_DOI_REDIRECT_URL ?? "https://www.maitrizz.fr/?inscription=confirmee",
      }
    : { email, attributes, listIds: [listId], updateEnabled: true };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    // 201 : créé ; 204 : déjà connu et mis à jour. Les deux sont un succès.
    if (response.ok || response.status === 204) {
      // Sans double opt-in, l'inscription est immédiate : on notifie tout de
      // suite. Avec double opt-in, on attend la confirmation par email avant
      // de considérer l'inscription comme acquise.
      if (!useDoubleOptin) await notifierInscription(apiKey, email, parcours);
      return NextResponse.json({ ok: true });
    }

    const detail = await response.text();
    console.error(`newsletter: Brevo ${response.status}`, detail);
    return NextResponse.json(
      { error: "L'inscription n'a pas abouti. Réessaie dans un instant." },
      { status: 502 },
    );
  } catch (error) {
    console.error("newsletter: appel Brevo impossible", error);
    return NextResponse.json(
      { error: "L'inscription n'a pas abouti. Réessaie dans un instant." },
      { status: 502 },
    );
  }
}
