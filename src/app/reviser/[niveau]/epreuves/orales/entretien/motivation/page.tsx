import Link from "next/link";
import { notFound } from "next/navigation";
import { NIVEAUX, isValidNiveau } from "@/lib/niveau";
import { LockIcon } from "../../../../../_components/hub";

export async function generateStaticParams() {
  return NIVEAUX.map((niveau) => ({ niveau }));
}

export default async function MotivationPage({
  params,
}: {
  params: Promise<{ niveau: string }>;
}) {
  const { niveau } = await params;

  if (!isValidNiveau(niveau)) {
    notFound();
  }

  return (
    <section className="bg-seyes flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-5 py-16">
      <div className="flex max-w-md flex-col items-center rounded-xl bg-white p-10 text-center ring-1 ring-primary/10 shadow-copy">
        <span className="flex items-center gap-2 font-ui text-[11px] font-bold uppercase tracking-[0.22em] text-on-surface-variant">
          <LockIcon /> Bientôt disponible
        </span>
        <h1 className="mt-4 text-3xl font-bold text-primary">Motivation</h1>
        <p className="mt-3 font-ui text-sm leading-relaxed text-on-surface-variant">
          Le contenu de cette composante de l&apos;entretien est en cours de
          préparation.
        </p>
        <Link
          href={`/reviser/${niveau}/epreuves/orales`}
          className="mt-8 rounded-xl border border-primary/20 bg-white/60 px-7 py-3 font-ui text-xs font-bold uppercase tracking-widest text-primary transition-all hover:bg-surface active:scale-95"
        >
          ← Retour aux épreuves orales
        </Link>
      </div>
    </section>
  );
}
