"use client";

/**
 * Briques communes aux pages de compte (connexion, inscription, mot de passe).
 *
 * Elles reprennent le vocabulaire visuel du site : carte blanche posée sur le
 * papier Seyès, filet teal, libellés en petites capitales espacées. Rien de
 * neuf n'est inventé ici, on réutilise les classes déjà en place ailleurs.
 */

import Link from "next/link";

export function CarteCompte({
  titre,
  intro,
  children,
  pied,
}: {
  titre: string;
  intro?: string;
  children: React.ReactNode;
  pied?: React.ReactNode;
}) {
  return (
    <section className="bg-seyes flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-5 py-16">
      <div className="w-full max-w-md rounded-xl bg-white p-8 ring-1 ring-primary/10 shadow-copy md:p-10">
        <h1 className="text-3xl font-bold text-primary">{titre}</h1>
        <div className="mt-3 h-px w-full bg-primary/20" />
        {intro ? (
          <p className="mt-4 font-ui text-sm leading-relaxed text-on-surface-variant">{intro}</p>
        ) : null}
        <div className="mt-7">{children}</div>
      </div>
      {pied ? (
        <div className="mt-6 text-center font-ui text-sm text-on-surface-variant">{pied}</div>
      ) : null}
    </section>
  );
}

export function Champ({
  id,
  label,
  aide,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { id: string; label: string; aide?: string }) {
  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="mb-2 block font-ui text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant"
      >
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="w-full rounded-xl border border-outline-variant/60 bg-white px-4 py-3 font-ui text-base text-on-surface outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/15"
      />
      {aide ? (
        <p className="mt-2 font-ui text-xs leading-relaxed text-on-surface-variant">{aide}</p>
      ) : null}
    </div>
  );
}

export function BoutonPrincipal({
  children,
  enCours,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { enCours?: boolean }) {
  return (
    <button
      {...props}
      disabled={props.disabled || enCours}
      className="mt-2 w-full rounded-xl bg-primary py-3.5 font-ui text-base font-bold text-white transition-all hover:bg-primary-container active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {enCours ? "Un instant…" : children}
    </button>
  );
}

/**
 * Message de retour. Le ton compte : une erreur de connexion ne doit jamais
 * ressembler à une sanction, le candidat est déjà sous pression.
 */
export function Message({ type, children }: { type: "erreur" | "succes"; children: React.ReactNode }) {
  const style =
    type === "erreur"
      ? "border-secondary/40 bg-secondary/5 text-on-surface"
      : "border-success/40 bg-success/5 text-on-surface";
  return (
    <p className={`mb-5 rounded-xl border px-4 py-3 font-ui text-sm leading-relaxed ${style}`}>
      {children}
    </p>
  );
}

export function LienDiscret({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="font-ui text-sm text-primary underline decoration-secondary/60 decoration-2 underline-offset-4 transition-colors hover:text-secondary"
    >
      {children}
    </Link>
  );
}

/**
 * Traduit les messages d'erreur de Supabase, qui arrivent en anglais et dans
 * un vocabulaire technique. On ne renvoie jamais le texte brut au candidat.
 */
export function messageLisible(brut: string): string {
  const m = brut.toLowerCase();
  if (m.includes("invalid login credentials")) {
    return "Cet email et ce mot de passe ne correspondent pas. Vérifiez la saisie, ou utilisez « mot de passe oublié ».";
  }
  if (m.includes("email not confirmed")) {
    return "Votre adresse n'est pas encore confirmée. Ouvrez le message que nous vous avons envoyé, puis réessayez.";
  }
  if (m.includes("user already registered") || m.includes("already been registered")) {
    return "Un compte existe déjà avec cette adresse. Connectez-vous, ou demandez un nouveau mot de passe.";
  }
  if (m.includes("password should be at least")) {
    return "Le mot de passe doit faire au moins 8 caractères.";
  }
  if (m.includes("rate limit") || m.includes("too many")) {
    return "Trop de tentatives d'affilée. Patientez quelques minutes avant de réessayer.";
  }
  if (m.includes("failed to fetch") || m.includes("network")) {
    return "La connexion au serveur a échoué. Vos révisions restent enregistrées sur cet appareil, réessayez plus tard.";
  }
  return "Quelque chose n'a pas fonctionné. Réessayez dans un instant.";
}
