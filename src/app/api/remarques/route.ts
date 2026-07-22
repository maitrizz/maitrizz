import { NextResponse } from "next/server";

// Boîte à remarques de la bêta : le message est transmis par email via
// l'API transactionnelle de Brevo.
// Variables d'environnement :
// - BREVO_API_KEY (obligatoire, déjà utilisée par la newsletter).
// - REMARQUES_EMAIL (optionnel) : destinataire(s), séparés par des virgules,
//   par défaut claude@maitrizz.fr.

const TYPES_VALIDES = [
  "bug",
  "erreur-contenu",
  "idee",
  "encouragement",
  "autre",
] as const;
type TypeRemarque = (typeof TYPES_VALIDES)[number];

const LIBELLES: Record<TypeRemarque, string> = {
  bug: "Bug",
  "erreur-contenu": "Erreur dans le contenu",
  idee: "Idée d'amélioration",
  encouragement: "Encouragement",
  autre: "Autre",
};

const MAX_MESSAGE = 4000;

function echapperHtml(texte: string): string {
  return texte
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const destinataires = (process.env.REMARQUES_EMAIL ?? "claude@maitrizz.fr")
    .split(",")
    .map((a) => a.trim())
    .filter(Boolean);
  const expediteur = destinataires[0];
  if (!apiKey) {
    console.error("remarques: BREVO_API_KEY manquant");
    return NextResponse.json(
      { error: "L'envoi est indisponible pour le moment." },
      { status: 503 },
    );
  }

  let body: {
    type?: unknown;
    message?: unknown;
    email?: unknown;
    page?: unknown;
    website?: unknown;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Pot de miel anti-robots, même principe que la newsletter.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (message.length === 0) {
    return NextResponse.json(
      { error: "Le message est vide." },
      { status: 400 },
    );
  }

  const type: TypeRemarque = TYPES_VALIDES.includes(body.type as TypeRemarque)
    ? (body.type as TypeRemarque)
    : "autre";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const page = typeof body.page === "string" ? body.page.slice(0, 200) : "";

  const contenuHtml = [
    `<p><strong>Type :</strong> ${LIBELLES[type]}</p>`,
    page ? `<p><strong>Page :</strong> ${echapperHtml(page)}</p>` : "",
    email ? `<p><strong>Contact :</strong> ${echapperHtml(email)}</p>` : "",
    `<p><strong>Message :</strong></p>`,
    `<p>${echapperHtml(message.slice(0, MAX_MESSAGE)).replaceAll("\n", "<br>")}</p>`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Boîte à remarques Maitrizz", email: expediteur },
        to: destinataires.map((a) => ({ email: a })),
        replyTo: email ? { email } : undefined,
        subject: `[Maitrizz] ${LIBELLES[type]}${page ? ` · ${page}` : ""}`,
        htmlContent: contenuHtml,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ ok: true });
    }
    const detail = await response.text();
    console.error(`remarques: Brevo ${response.status}`, detail);
    return NextResponse.json(
      { error: "L'envoi n'a pas abouti. Réessaie dans un instant." },
      { status: 502 },
    );
  } catch (error) {
    console.error("remarques: appel Brevo impossible", error);
    return NextResponse.json(
      { error: "L'envoi n'a pas abouti. Réessaie dans un instant." },
      { status: 502 },
    );
  }
}
