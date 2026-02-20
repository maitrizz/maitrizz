"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Reste informé sur le concours
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
          Inscris-toi à notre newsletter pour recevoir les dernières actualités
          du CRPE, des conseils de révision et des ressources exclusives
          directement dans ta boîte mail.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="ton.email@exemple.fr"
            className="input input-bordered flex-1 bg-white/90 text-base-content"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn btn-accent font-semibold">
            S&apos;inscrire
          </button>
        </form>

        <p className="text-white/60 text-sm mt-4">
          Pas de spam, promis. Tu peux te désinscrire à tout moment.
        </p>
      </div>
    </section>
  );
}
