import Link from "next/link";
import Logo from "@/components/Logo";

/* Footer propre au prototype, dans la charte « copie corrigée ». */
export default function ProtoFooter() {
  return (
    <footer className="border-t border-on-surface/10 py-16">
      <div className="mx-auto grid w-full max-w-[1080px] gap-12 px-5 md:grid-cols-4 md:px-12">
        <div className="space-y-5 md:col-span-2">
          <Logo />
          <p className="max-w-sm font-ui text-sm leading-relaxed text-on-surface-variant">
            La préparation au CRPE repensée : claire, structurée et fidèle aux
            attendus, pour tous les futurs professeurs des écoles.
          </p>
        </div>

        <div>
          <h4 className="mb-5 font-ui text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
            Explorer
          </h4>
          <ul className="space-y-3 font-ui text-sm text-on-surface-variant">
            <li>
              <Link href="/proto/reviser" className="transition-colors hover:text-secondary">
                Réviser
              </Link>
            </li>
            <li>
              <Link href="/proto#programme" className="transition-colors hover:text-secondary">
                Programme
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-ui text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
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

      <div className="mx-auto mt-14 w-full max-w-[1080px] border-t border-on-surface/[0.07] px-5 pt-8 md:px-12">
        <p className="font-ui text-xs text-on-surface-variant/70">
          © 2026 Maitrizz.
        </p>
      </div>
    </footer>
  );
}
