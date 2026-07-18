import Link from "next/link";
import type { Metadata } from "next";
import {
  HUB_CARD,
  HubCardCtaOutline,
  HubHeader,
  HubLabel,
  Souligne,
} from "./_components/hub";

export const metadata: Metadata = {
  title: "Réviser le CRPE : concours L3 et M2 | Maitrizz",
  description:
    "Choisissez votre concours (L3 ou M2) et révisez le CRPE : fiches de cours, méthode et exercices corrigés pour les épreuves écrites et orales.",
  alternates: { canonical: "/reviser" },
};

const VOIES = [
  {
    href: "/reviser/l3/epreuves",
    index: "L3",
    label: "Voie licence",
    titre: "Concours L3",
    desc: "Nouveau format d'épreuves depuis la réforme 2026, accessible dès la troisième année de licence.",
    cta: "Réviser le CRPE L3",
  },
  {
    href: "/reviser/m2/epreuves",
    index: "M2",
    label: "Voie master",
    titre: "Concours M2",
    desc: "Format d'épreuves maintenu jusqu'en 2027, réservé aux candidats en fin de master 2.",
    cta: "Réviser le CRPE M2",
  },
];

export default function ReviserPage() {
  return (
    <div className="bg-seyes flex-1">
      <HubHeader
        crumbs={[{ label: "Accueil", href: "/" }, { label: "Réviser" }]}
        stamp="CRPE · professeur des écoles"
        title={
          <>
            Choisissez votre <Souligne>concours</Souligne>
          </>
        }
        subtitle="Deux voies selon votre niveau d'études, chacune avec son format d'épreuves et son programme de révision."
        note={
          <>
            deux voies,
            <br />
            un même concours
          </>
        }
      />

      {/* Rythme vertical en multiples de 32px, le pas de la grille Seyès. */}
      <section className="px-5 pb-24 pt-16 md:px-12">
        <div className="mx-auto grid max-w-[1080px] gap-8 md:grid-cols-2">
          {VOIES.map((voie) => (
            <Link
              key={voie.index}
              href={voie.href}
              className={`${HUB_CARD} p-8 md:p-10`}
            >
              <div className="flex items-start justify-between border-b border-dashed border-outline-variant/60 pb-6">
                <span className="font-serif text-6xl font-bold leading-none text-primary">
                  {voie.index}
                </span>
                <HubLabel>{voie.label}</HubLabel>
              </div>

              <div className="flex-1">
                <h2 className="mt-6 text-2xl font-bold text-primary lg:text-3xl">
                  {voie.titre}
                </h2>
                <p className="mt-2 font-ui leading-relaxed text-on-surface-variant">
                  {voie.desc}
                </p>
              </div>

              <HubCardCtaOutline>{voie.cta}</HubCardCtaOutline>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-[1080px] rounded-r-xl border-l-2 border-secondary bg-white/70 p-6 md:p-7">
          <HubLabel>Dans les deux voies</HubLabel>
          <p className="mt-2 max-w-3xl font-ui text-sm leading-relaxed text-on-surface">
            Vous passez d&apos;abord des épreuves écrites d&apos;admissibilité
            (français et mathématiques), puis un oral d&apos;admission. Le
            détail des épreuves change en revanche d&apos;une voie à
            l&apos;autre : choisissez la vôtre selon votre année d&apos;études,
            L3 en licence, M2 en master.
          </p>
        </div>

        {/* Le vide du bas de page est habité par un dessin au trait :
            le panneau indicateur des deux voies. */}
        <img
          src="/illustrations/panneau-l3-m2.svg"
          alt=""
          aria-hidden
          className="mx-auto mt-16 w-40 md:w-44"
        />
      </section>
    </div>
  );
}
