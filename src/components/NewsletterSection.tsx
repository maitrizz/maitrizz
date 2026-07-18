"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section id="newsletter" className="px-5 pb-16 pt-4 md:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="bg-seyes-dark relative overflow-hidden rounded-xl bg-primary px-8 py-14 text-center text-on-primary shadow-lg md:px-24">
          <div className="relative z-10 mx-auto max-w-3xl space-y-6">
            <h2 className="text-balance text-3xl font-bold leading-tight text-white lg:text-4xl">
              Prêt·e à devenir professeur des écoles&nbsp;?
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 lg:text-lg">
              Laissez votre adresse : vous serez prévenu·e dès l&apos;ouverture
              de la plateforme, et vous recevrez nos conseils de révision
              d&apos;ici là.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto flex max-w-md flex-col gap-3 pt-2 sm:flex-row"
            >
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
              <button
                type="submit"
                className="rounded-xl bg-secondary px-8 py-4 font-ui font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
              >
                Me prévenir
              </button>
            </form>

            <p className="font-ui text-sm text-white/80">
              Pas de spam. Désinscription en un clic à tout moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
