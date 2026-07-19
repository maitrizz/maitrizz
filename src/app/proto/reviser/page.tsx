import Link from "next/link";

/* ──────────────────────────────────────────────────────────────────────────
   PROTOTYPE v2 — page « Choisissez votre concours » (charte « copie corrigée »)
   Isolé sur /proto/reviser. Ne touche pas la vraie page /reviser.
   Parti pris : bandeau teal pour la présence + cartes ancrées par un grand
   « L3 / M2 » sérif, vrai bouton terracotta. Pas de fioriture manuscrite ici.
   ────────────────────────────────────────────────────────────────────────── */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-ui text-[11px] font-bold uppercase tracking-[0.22em] text-on-surface-variant">
      {children}
    </span>
  );
}

const voies = [
  {
    href: "/reviser/l3/epreuves",
    index: "L3",
    label: "Voie licence",
    titre: "Concours L3",
    desc: "Accessible dès la licence (bac+3).",
    faits: ["Nouveau format depuis la réforme 2026", "Écrit et oral"],
  },
  {
    href: "/reviser/m2/epreuves",
    index: "M2",
    label: "Voie master",
    titre: "Concours M2",
    desc: "Réservé aux candidats en fin de master 2.",
    faits: ["Format maintenu jusqu'en 2027", "Écrit et oral"],
  },
];

export default function ReviserProtoPage() {
  return (
    <>
      {/* Bandeau teal : présence + contraste */}
      <section className="bg-seyes-dark bg-primary px-5 py-14 text-white md:px-12 lg:py-16">
        <div className="mx-auto max-w-[1080px]">
          <nav className="mb-6 flex items-center gap-2 font-ui text-sm text-white/60">
            <Link href="/proto" className="transition-colors hover:text-white">
              Accueil
            </Link>
            <span className="opacity-50">›</span>
            <span className="font-semibold text-white">Réviser</span>
          </nav>
          <h1 className="text-balance text-4xl font-bold leading-tight text-white lg:text-5xl">
            Choisissez votre concours
          </h1>
          <p className="mt-3 font-ui text-lg text-white/75">
            CRPE, le concours de recrutement des professeurs des écoles. Deux
            voies selon votre niveau d&apos;études.
          </p>
        </div>
      </section>

      {/* Les deux voies */}
      <section className="px-5 py-16 md:px-12">
        <div className="mx-auto grid max-w-[1080px] gap-8 md:grid-cols-2">
          {voies.map((voie) => (
            <Link
              key={voie.titre}
              href={voie.href}
              className="group flex flex-col rounded-lg border border-outline-variant/60 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-xl md:p-10"
            >
              <div className="flex items-start justify-between border-b border-dashed border-outline-variant pb-6">
                <span className="font-serif text-6xl font-bold leading-none text-secondary">
                  {voie.index}
                </span>
                <Label>{voie.label}</Label>
              </div>

              <h2 className="mt-6 text-3xl font-bold text-primary">
                {voie.titre}
              </h2>
              <p className="mt-2 font-ui leading-relaxed text-on-surface-variant">
                {voie.desc}
              </p>

              <ul className="mt-5 space-y-2">
                {voie.faits.map((fait) => (
                  <li
                    key={fait}
                    className="flex items-center gap-2.5 font-ui text-sm text-on-surface"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    {fait}
                  </li>
                ))}
              </ul>

              <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-secondary px-7 py-3.5 font-ui font-bold text-white shadow-sm transition-all group-hover:gap-3 group-hover:-translate-y-0.5 group-hover:shadow-md">
                Commencer <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-[1080px] font-ui text-sm text-on-surface-variant">
          Pas sûr·e de votre voie ? La L3 s&apos;adresse aux candidats en
          licence, la M2 à ceux en fin de master.
        </p>
      </section>
    </>
  );
}
