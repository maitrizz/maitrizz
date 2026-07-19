"use client";

import { useState } from "react";

const PARCOURS_OPTIONS = [
  { value: "licence", label: "Licence" },
  { value: "master1", label: "Master 1" },
  { value: "master2", label: "Master 2" },
  { value: "reconversion", label: "En reconversion ou candidat libre" },
  { value: "renseignement", label: "Je me renseigne" },
];

type Statut = "repos" | "envoi" | "succes" | "erreur";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [parcours, setParcours] = useState("");
  const [website, setWebsite] = useState("");
  const [statut, setStatut] = useState<Statut>("repos");
  const [messageErreur, setMessageErreur] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (statut === "envoi") return;
    setStatut("envoi");
    setMessageErreur("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, parcours, website }),
      });
      const data = await response.json().catch(() => null);
      if (response.ok) {
        setStatut("succes");
      } else {
        setStatut("erreur");
        setMessageErreur(
          data?.error ?? "L'inscription n'a pas abouti. Réessaie dans un instant.",
        );
      }
    } catch {
      setStatut("erreur");
      setMessageErreur("L'inscription n'a pas abouti. Vérifie ta connexion et réessaie.");
    }
  }

  return (
    <section id="newsletter" className="px-5 pb-16 pt-4 md:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="bg-seyes-dark relative overflow-hidden rounded-xl bg-primary px-8 py-14 text-center text-on-primary shadow-lg md:px-24">
          <div className="relative z-10 mx-auto max-w-3xl space-y-6">
            <h2 className="text-balance text-3xl font-bold leading-tight text-white lg:text-4xl">
              Prêt·e à devenir professeur des écoles&nbsp;?
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 lg:text-lg">
              Laissez votre adresse pour recevoir nos conseils de révision et
              être prévenu·e du lancement officiel de la plateforme, en
              septembre.
            </p>

            {statut === "succes" ? (
              <p
                role="status"
                className="mx-auto max-w-md rounded-xl bg-white/10 px-6 py-5 text-base leading-relaxed text-white"
              >
                C&rsquo;est presque fini&nbsp;: un e-mail vient de partir dans ta
                boîte. Clique sur le lien qu&rsquo;il contient pour confirmer ton
                inscription.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto flex max-w-md flex-col gap-3 pt-2"
              >
                {/* Champ pot de miel : invisible pour les humains, rempli par les robots. */}
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

                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    aria-label="Votre adresse e-mail"
                    placeholder="votre.email@exemple.fr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-xl bg-white px-5 py-4 font-ui text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none"
                  />
                  <select
                    name="parcours"
                    required
                    aria-label="Votre parcours actuel"
                    value={parcours}
                    onChange={(e) => setParcours(e.target.value)}
                    className={`rounded-xl bg-white px-5 py-4 font-ui focus:outline-none sm:max-w-[180px] ${
                      parcours === ""
                        ? "text-on-surface-variant/50"
                        : "text-on-surface"
                    }`}
                  >
                    <option value="" disabled hidden>
                      Où en es-tu ?
                    </option>
                    {PARCOURS_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={statut === "envoi"}
                  className="rounded-xl bg-secondary px-8 py-4 font-ui font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {statut === "envoi" ? "Un instant…" : "Me prévenir"}
                </button>

                {statut === "erreur" && (
                  <p role="alert" className="font-ui text-sm text-white/90">
                    {messageErreur}
                  </p>
                )}
              </form>
            )}

            <p className="font-ui text-sm text-white/80">
              Pas de spam. Désinscription en un clic à tout moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
