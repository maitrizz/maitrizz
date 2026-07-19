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

const PARCOURS_VALIDES = [
  "licence",
  "master1",
  "master2",
  "reconversion",
  "renseignement",
] as const;
type Parcours = (typeof PARCOURS_VALIDES)[number];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

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

  const parcours: Parcours | null = PARCOURS_VALIDES.includes(body.parcours as Parcours)
    ? (body.parcours as Parcours)
    : null;

  const attributes = parcours ? { PARCOURS: parcours } : undefined;
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
