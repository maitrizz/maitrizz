import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MATIERES,
  MATIERE_LABELS,
  getPartieGroups,
  isValidMatiere,
} from "./data";

export async function generateStaticParams() {
  return MATIERES.map((matiere) => ({ matiere }));
}

export default async function MatierePage({
  params,
}: {
  params: Promise<{ matiere: string }>;
}) {
  const { matiere } = await params;

  if (!isValidMatiere(matiere)) {
    notFound();
  }

  const label = MATIERE_LABELS[matiere];
  const groups = getPartieGroups(matiere);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-primary grid-paper-light py-16 relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>›</span>
            <Link href="/reviser" className="hover:text-white transition-colors">Réviser</Link>
            <span>›</span>
            <Link href="/reviser/epreuves" className="hover:text-white transition-colors">Épreuves</Link>
            <span>›</span>
            <Link href="/reviser/epreuves/ecrites" className="hover:text-white transition-colors">Écrites</Link>
            <span>›</span>
            <span className="text-white/90 font-medium">{label}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
            Écrit — {label}
          </h1>
          <p className="text-white/70 text-lg">
            Toutes les fiches de révision, classées par grande partie du programme.
          </p>
        </div>
      </div>

      {/* Contenu */}
      <div className="bg-base-100 max-w-5xl mx-auto px-6 lg:px-8 py-14">
        {groups.length === 0 && (
          <p className="text-base-content/55 text-center py-12">
            Les fiches de {label.toLowerCase()} arrivent très bientôt.
          </p>
        )}

        <div className="flex flex-col gap-10">
          {groups.map((group) => (
            <div key={group.partie}>
              <h2 className="text-lg font-black text-base-content mb-4 pb-2 border-b-2 border-base-300">
                {group.partie}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {group.fiches.map((fiche) => (
                  <Link
                    key={fiche.slug}
                    href={`/reviser/epreuves/ecrites/${matiere}/${fiche.slug}`}
                    className="bg-base-100 grid-paper border-2 border-base-300 rounded-2xl p-5 flex flex-col gap-3 hover:border-primary/40 hover:shadow-lg transition-all duration-200 group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-black text-base-content group-hover:text-primary transition-colors leading-snug">
                        Notion {fiche.numero} — {fiche.title}
                      </h3>
                    </div>
                    <p className="text-sm text-base-content/55 leading-relaxed line-clamp-2">
                      {fiche.subtitle}
                    </p>
                    {fiche.badges.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-auto pt-1">
                        {fiche.badges.map((badge, i) => (
                          <span
                            key={i}
                            className={
                              badge.variant === "hot"
                                ? "inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-error/10 text-error"
                                : "inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                            }
                          >
                            {badge.label}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
