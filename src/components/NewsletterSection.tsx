"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-base-100 py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="bg-neutral rounded-lg p-12 text-center relative overflow-hidden">

          {/* Ornements discrets */}
          <div
            className="absolute top-8 right-12 w-16 h-16 rounded-full pointer-events-none hidden sm:block"
            style={{ border: "1px solid rgba(250,248,244,0.08)" }}
          />
          <div
            className="absolute bottom-8 left-10 w-2 h-2 rounded-full opacity-30 pointer-events-none hidden sm:block"
            style={{ backgroundColor: "#b89a2f" }}
          />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-content mb-4">
              Reste informé sur le concours
            </h2>
            <p className="text-lg text-neutral-content/60 max-w-xl mx-auto mb-8 leading-relaxed">
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
                className="input flex-1 bg-white text-base-content placeholder-base-content/40 rounded px-5"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-accent rounded font-bold"
              >
                S&apos;inscrire
              </button>
            </form>

            <p className="text-neutral-content/35 text-sm mt-4" style={{ fontFamily: "var(--font-inter)" }}>
              Pas de spam, promis. Tu peux te désinscrire à tout moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
