"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Footer() {
  const pathname = usePathname();

  // Le prototype (/proto) a son propre footer.
  if (pathname?.startsWith("/proto")) return null;

  return (
    <footer className="border-t border-outline-variant/30 bg-white/50 px-5 py-14 md:px-16">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 md:grid-cols-4">
        <div className="space-y-6 md:col-span-2">
          <Logo />
          <p className="max-w-sm font-ui text-base leading-relaxed text-on-surface-variant">
            La préparation au CRPE repensée : clarté, structure et exigence
            pour tous les futurs professeurs des écoles.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-ui text-xs font-bold uppercase tracking-widest text-primary">
            Explorer
          </h4>
          <ul className="space-y-3 font-ui text-sm text-on-surface-variant">
            <li>
              <Link href="/reviser" className="transition-colors hover:text-secondary">
                Réviser
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-ui text-xs font-bold uppercase tracking-widest text-primary">
            Légal
          </h4>
          <ul className="space-y-3 font-ui text-sm text-on-surface-variant">
            <li>
              <Link href="#" className="transition-colors hover:text-secondary">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="#" className="transition-colors hover:text-secondary">
                Confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1440px] border-t border-outline-variant/20 pt-6 text-center">
        <p className="font-ui text-xs font-medium uppercase tracking-widest text-on-surface-variant/60">
          © {new Date().getFullYear()} Maitrizz.
        </p>
      </div>
    </footer>
  );
}
