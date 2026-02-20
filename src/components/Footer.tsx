import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-neutral text-neutral-content p-10">
      <nav className="flex gap-6">
        <Link href="/" className="link link-hover">
          Accueil
        </Link>
        <Link href="/reviser" className="link link-hover">
          Réviser
        </Link>
        <Link href="/blogs" className="link link-hover">
          Blogs
        </Link>
      </nav>
      <aside>
        <p>&copy; {new Date().getFullYear()} Maitrizz. Tous droits réservés.</p>
      </aside>
    </footer>
  );
}
