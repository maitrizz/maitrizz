"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
          {menuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/reviser" onClick={() => setMenuOpen(false)}>
                  Réviser
                </Link>
              </li>
              <li>
                <Link href="/blogs" onClick={() => setMenuOpen(false)}>
                  Blogs
                </Link>
              </li>
            </ul>
          )}
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-bold text-primary">
          Maitrizz
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          <li>
            <Link href="/" className="font-medium">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/reviser" className="font-medium">
              Réviser
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="font-medium">
              Blogs
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-primary btn-sm" disabled>
          Se connecter
        </button>
      </div>
    </div>
  );
}
