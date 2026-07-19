"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Le prototype (/proto) a son propre header.
  if (pathname?.startsWith("/proto")) return null;

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-md border-b border-outline-variant/30">
      {/* Bandeau bêta : visible sur tout le site tant que la plateforme est gratuite. */}
      <div className="bg-primary bg-seyes-dark">
        <p className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-3 gap-y-1 px-5 py-2 text-center font-ui text-[11px] font-semibold uppercase tracking-widest text-white md:px-16">
          <span>Bêta ouverte : tout est gratuit jusqu&apos;au lancement de septembre</span>
          <Link
            href="/#newsletter"
            className="underline decoration-secondary decoration-2 underline-offset-4 transition-colors hover:text-secondary"
          >
            Me prévenir du lancement
          </Link>
        </p>
      </div>
      <nav className="flex items-center justify-between h-20 max-w-[1440px] mx-auto px-5 md:px-16">
        <Link href="/" aria-label="Accueil Maitrizz">
          <Logo />
        </Link>

        <div className="flex items-center gap-3 md:gap-6 ml-auto">
          <Link
            href="/reviser"
            className={`hidden md:block font-ui font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-xl border-2 transition-all active:scale-95 ${
              pathname?.startsWith("/reviser")
                ? "border-primary bg-primary/10 text-primary"
                : "border-primary/30 text-primary hover:border-primary hover:bg-primary/5"
            }`}
          >
            Réviser
          </Link>
          <Link
            href="/#newsletter"
            className="bg-primary text-white px-6 py-2.5 rounded-xl font-ui font-bold text-xs uppercase tracking-widest shadow-sm hover:bg-primary-container transition-all active:scale-95"
          >
            Rejoindre la bêta
          </Link>

          {/* Burger mobile */}
          <button
            className="md:hidden text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
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
        </div>
      )}
    </header>
  );
}
