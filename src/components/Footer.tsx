import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-black text-xl tracking-tight text-neutral-content mb-1">
              MAITRIZZ
            </p>
            <p className="text-neutral-content/40 text-sm">
              La prépa CRPE qui te veut du bien.
            </p>
          </div>

          <nav className="flex gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-neutral-content/50 hover:text-neutral-content transition-colors"
            >
              Accueil
            </Link>
            <Link
              href="/reviser"
              className="text-sm font-medium text-neutral-content/50 hover:text-neutral-content transition-colors"
            >
              Réviser
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-neutral-content/50 hover:text-neutral-content transition-colors"
            >
              Blog
            </Link>
          </nav>

          <p className="text-neutral-content/30 text-sm">
            &copy; {new Date().getFullYear()} Maitrizz
          </p>
        </div>
      </div>
    </footer>
  );
}
