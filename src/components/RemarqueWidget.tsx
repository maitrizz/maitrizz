"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

// Boîte à remarques de la bêta : bouton discret en bas à droite, présent sur
// tout le site. Le message part par email via /api/remarques, avec la page
// courante pour situer les signalements.

const TYPES = [
  { value: "bug", label: "Un bug" },
  { value: "erreur-contenu", label: "Une erreur dans le contenu" },
  { value: "idee", label: "Une idée d'amélioration" },
  { value: "encouragement", label: "Un encouragement" },
  { value: "autre", label: "Autre chose" },
];

type Statut = "repos" | "envoi" | "succes" | "erreur";

export default function RemarqueWidget() {
  const pathname = usePathname();
  const [ouvert, setOuvert] = useState(false);
  const [type, setType] = useState("bug");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [statut, setStatut] = useState<Statut>("repos");
  const [messageErreur, setMessageErreur] = useState("");

  // Le prototype a sa propre mise en page, on ne l'encombre pas.
  if (pathname?.startsWith("/proto")) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (statut === "envoi") return;
    setStatut("envoi");
    setMessageErreur("");
    try {
      const response = await fetch("/api/remarques", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ type, message, email, website, page: pathname }),
      });
      const data = await response.json().catch(() => null);
      if (response.ok) {
        setStatut("succes");
        setMessage("");
      } else {
        setStatut("erreur");
        setMessageErreur(
          data?.error ?? "L'envoi n'a pas abouti. Réessaie dans un instant.",
        );
      }
    } catch {
      setStatut("erreur");
      setMessageErreur("L'envoi n'a pas abouti. Vérifie ta connexion et réessaie.");
    }
  }

  function fermer() {
    setOuvert(false);
    if (statut === "succes") setStatut("repos");
  }

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {ouvert && (
        <div className="w-[calc(100vw-2.5rem)] max-w-sm rounded-2xl border border-outline-variant/40 bg-surface p-5 shadow-2xl">
          {statut === "succes" ? (
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-on-surface">
                Merci beaucoup, c&rsquo;est bien envoyé. Je lis toutes les
                remarques, elles font avancer la plateforme.
              </p>
              <button
                onClick={fermer}
                className="w-full rounded-xl bg-primary px-6 py-2.5 font-ui text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-primary-container active:scale-95"
              >
                Fermer
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <p className="font-ui text-[11px] font-bold uppercase tracking-widest text-primary">
                Une remarque sur la bêta&nbsp;?
              </p>

              {/* Pot de miel anti-robots, invisible pour les humains. */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />

              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                aria-label="Type de remarque"
                className="w-full rounded-xl border border-outline-variant/40 bg-white px-4 py-2.5 font-ui text-sm text-on-surface focus:outline-none"
              >
                {TYPES.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>

              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                maxLength={4000}
                aria-label="Votre remarque"
                placeholder="Dites-moi tout : un bug, une coquille dans une fiche, une idée, ou juste un petit mot d'encouragement…"
                className="w-full resize-none rounded-xl border border-outline-variant/40 bg-white px-4 py-2.5 text-sm leading-relaxed text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                aria-label="Votre e-mail (facultatif)"
                placeholder="Votre e-mail (facultatif, pour vous répondre)"
                className="w-full rounded-xl border border-outline-variant/40 bg-white px-4 py-2.5 font-ui text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none"
              />

              {statut === "erreur" && (
                <p role="alert" className="text-sm text-error">
                  {messageErreur}
                </p>
              )}

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={fermer}
                  className="rounded-xl border border-primary/20 bg-white/60 px-4 py-2.5 font-ui text-xs font-bold uppercase tracking-widest text-primary transition-all hover:bg-white active:scale-95"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={statut === "envoi"}
                  className="flex-1 rounded-xl bg-secondary px-4 py-2.5 font-ui text-xs font-bold uppercase tracking-widest text-white shadow-md shadow-secondary/20 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {statut === "envoi" ? "Envoi…" : "Envoyer"}
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      <button
        onClick={() => (ouvert ? fermer() : setOuvert(true))}
        aria-expanded={ouvert}
        className="rounded-full bg-primary px-5 py-3 font-ui text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:bg-primary-container hover:-translate-y-0.5 active:scale-95"
      >
        {ouvert ? "Fermer" : "Une remarque ?"}
      </button>
    </div>
  );
}
