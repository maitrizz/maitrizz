"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-base-100 border-b border-base-300 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xl font-black tracking-tight text-base-content"
        >
          <img src="/logo.svg" alt="Maitrizz" width={34} height={34} className="shrink-0" />
          MAITRIZZ
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-2">
          <Link
            href="/reviser"
            className="px-4 py-2 text-sm font-semibold text-base-content/70 hover:text-primary hover:bg-primary/8 rounded-xl transition-all duration-150"
          >
            Réviser
          </Link>
          <Link
            href="/blog"
            className="px-4 py-2 text-sm font-semibold text-base-content/70 hover:text-primary hover:bg-primary/8 rounded-xl transition-all duration-150"
          >
            Blog
          </Link>
          <div className="w-px h-5 bg-base-300 mx-2" />
          <button
            className="btn btn-primary btn-sm rounded-full px-5 text-sm"
            disabled
          >
            Se connecter
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden btn btn-ghost btn-sm"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-base-300 bg-base-100 px-6 py-4 space-y-1">
          <Link
            href="/"
            className="block py-2 text-sm font-medium hover:text-primary transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link
            href="/reviser"
            className="block py-2 text-sm font-medium hover:text-primary transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Réviser
          </Link>
          <Link
            href="/blog"
            className="block py-2 text-sm font-medium hover:text-primary transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
        </div>
      )}
    </header>
  );
}
