"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-base-200 grid-paper py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="bg-primary rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Blob décoratif */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Reste informé sur le concours
            </h2>
            <p className="text-lg text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
              Reçois les dernières actualités du CRPE, des conseils de révision
              et des ressources exclusives directement dans ta boîte mail.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="ton.email@exemple.fr"
                className="input flex-1 bg-white text-base-content placeholder-base-content/40 rounded-full px-5"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-accent rounded-full font-semibold"
              >
                S&apos;inscrire
              </button>
            </form>

            <p className="text-white/40 text-sm mt-4">
              Pas de spam, promis. Tu peux te désinscrire à tout moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
