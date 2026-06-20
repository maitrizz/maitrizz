"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section id="newsletter" className="px-5 py-16 md:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="bg-seyes-dark relative overflow-hidden rounded-3xl bg-primary px-8 py-20 text-center text-on-primary shadow-2xl md:px-24">
          <div className="relative z-10 mx-auto max-w-3xl space-y-8">
            <h2 className="text-balance text-4xl font-black leading-tight">
              Prêt·e à devenir professeur des écoles ?
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-on-primary-container">
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

            <p className="font-ui text-sm text-on-primary-container/70">
              Pas de spam. Désinscription en un clic à tout moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
