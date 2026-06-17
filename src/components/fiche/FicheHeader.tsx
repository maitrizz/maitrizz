import type { Fiche } from "./types";

export function FicheHeader({ fiche }: { fiche: Fiche }) {
  return (
    <div className="bg-gradient-to-br from-primary to-neutral text-primary-content rounded-2xl p-6 sm:p-8 grid-paper-light">
      <p className="text-xs uppercase tracking-widest opacity-65 mb-2">
        Maitrizz · CRPE · {fiche.partie}
      </p>
      <h1 className="text-2xl sm:text-3xl font-black mb-2">
        {fiche.numero > 0 ? `Notion ${fiche.numero} — ${fiche.title}` : fiche.title}
      </h1>
      <p className="text-sm opacity-80 leading-relaxed">{fiche.subtitle}</p>
      {fiche.badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {fiche.badges.map((badge, i) => (
            <span
              key={i}
              className={
                badge.variant === "hot"
                  ? "inline-block text-xs font-semibold px-3 py-1 rounded-full bg-error text-error-content"
                  : "inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white/15 text-primary-content"
              }
            >
              {badge.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
