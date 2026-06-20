"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-md border-b border-outline-variant/30">
      <nav className="flex items-center justify-between h-20 max-w-[1440px] mx-auto px-5 md:px-16">
        <Link href="/" aria-label="Accueil Maitrizz">
          <Logo />
        </Link>

        {/* Liens desktop */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="/reviser"
            className="font-ui font-semibold text-xs uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors"
          >
            Réviser
          </Link>
          <Link
            href="/blog"
            className="font-ui font-semibold text-xs uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors"
          >
            Blog
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <button
            className="hidden sm:block font-ui font-bold text-xs uppercase tracking-widest text-primary hover:text-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
          >
            Connexion
          </button>
          <button
            className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-ui font-bold text-xs uppercase tracking-widest shadow-sm hover:bg-primary-container transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled
          >
            S&apos;inscrire
          </button>

          {/* Burger mobile */}
          <button
            className="md:hidden text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-surface px-5 py-4 space-y-1 border-t border-outline-variant/30">
          <Link href="/reviser" className="block py-2 font-ui font-semibold text-sm text-on-surface-variant hover:text-secondary transition-colors" onClick={() => setMenuOpen(false)}>
            Réviser
          </Link>
          <Link href="/blog" className="block py-2 font-ui font-semibold text-sm text-on-surface-variant hover:text-secondary transition-colors" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
        </div>
      )}
    </header>
  );
}
