import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary to-secondary min-h-[70vh] flex items-center">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Réussis ton concours CRPE
          <br />
          avec <span className="text-accent">Maitrizz</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
          La plateforme de révision pensée pour les futurs professeurs des
          écoles. Des fiches, des quiz et des exercices pour te préparer
          efficacement au concours INSPE.
        </p>
        <Link
          href="/reviser"
          className="btn btn-accent btn-lg text-lg shadow-lg"
        >
          Commencer à réviser
        </Link>
      </div>
    </section>
  );
}
