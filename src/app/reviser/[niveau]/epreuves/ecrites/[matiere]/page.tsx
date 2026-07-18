import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  HubHeader,
  HubLabel,
  Souligne,
} from "../../../../_components/hub";
import {
  MATIERES,
  MATIERE_LABELS,
  NIVEAUX,
  getFicheMetas,
  getPartieGroups,
  getCanonicalNiveau,
  isValidMatiere,
  isValidNiveau,
} from "./data";

const SITE_URL = "https://www.maitrizz.fr";

/* Dessin main levée associé à chaque tête de section, par mot-clé. */
const SECTION_ICONS: { match: RegExp; icon: string }[] = [
  { match: /méthodologie/i, icon: "/illustrations/copie-stylo.svg" },
  { match: /nombres et calcul/i, icon: "/illustrations/operations.svg" },
  { match: /données|fonctions/i, icon: "/illustrations/graphique-barres.svg" },
  { match: /grandeurs/i, icon: "/illustrations/balance.svg" },
  { match: /géométrie plane/i, icon: "/illustrations/compas.svg" },
  { match: /dans l'espace/i, icon: "/illustrations/cube.svg" },
  { match: /algorithmique/i, icon: "/illustrations/blocs-algo.svg" },
  {
    match: /entraînement|conditions réelles/i,
    icon: "/illustrations/chronometre.svg",
  },
  { match: /lexique/i, icon: "/illustrations/dictionnaire.svg" },
  { match: /développement rédigé/i, icon: "/illustrations/plume.svg" },
  { match: /grammaire/i, icon: "/illustrations/loupe-phrase.svg" },
];

/* Ancre HTML d'une section du sommaire (« Partie 1 · Lexique » → « partie-1-lexique »). */
function slugifyAncre(titre: string): string {
  return titre
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function generateStaticParams() {
  return NIVEAUX.flatMap((niveau) =>
    MATIERES.map((matiere) => ({ niveau, matiere }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ niveau: string; matiere: string }>;
}): Promise<Metadata> {
  const { niveau, matiere } = await params;
  if (!isValidNiveau(niveau) || !isValidMatiere(matiere)) return {};

  const label = MATIERE_LABELS[matiere];
  // La liste des fiches (et leurs variantes) diffère entre L3 et M2 : chaque page
  // de hub est donc sa propre canonique, contrairement aux fiches partagées.
  const canonicalUrl = `/reviser/${niveau}/epreuves/ecrites/${matiere}`;
  const title = `${label} au CRPE : fiches de l'écrit | Maitrizz`;
  const description = `Fiches de révision de ${label.toLowerCase()} pour l'épreuve écrite du CRPE, classées par grande partie du programme : cours, exemples et exercices corrigés.`;
  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: { title, description, url: canonicalUrl, type: "website" },
  };
}

export default async function MatierePage({
  params,
}: {
  params: Promise<{ niveau: string; matiere: string }>;
}) {
  const { niveau, matiere } = await params;

  if (!isValidNiveau(niveau) || !isValidMatiere(matiere)) {
    notFound();
  }

  const label = MATIERE_LABELS[matiere];
  const groups = getPartieGroups(niveau, matiere);
  const base = `/reviser/${niveau}/epreuves/ecrites/${matiere}`;

  /* Regroupe les « Partie N : Thème » consécutifs sous un même en-tête de
     partie : en français, la Partie 1 compte plusieurs thèmes et son numéro
     se répétait sur chaque groupe, ce qui semait la confusion. */
  const buckets: {
    label: string | null;
    groups: { theme: string; fiches: (typeof groups)[number]["fiches"] }[];
  }[] = [];
  for (const group of groups) {
    const m = group.partie.match(/^(Partie \d+) : (.+)$/);
    const partieLabel = m ? m[1] : null;
    const theme = m ? m[2] : group.partie;
    const last = buckets[buckets.length - 1];
    if (partieLabel && last && last.label === partieLabel) {
      last.groups.push({ theme, fiches: group.fiches });
    } else {
      buckets.push({
        label: partieLabel,
        groups: [{ theme, fiches: group.fiches }],
      });
    }
  }

  const sections = buckets.map((bucket) => {
    const total = bucket.groups.reduce((n, g) => n + g.fiches.length, 0);
    const single = bucket.groups.length === 1;
    const titre = bucket.label
      ? single
        ? `${bucket.label} · ${bucket.groups[0].theme}`
        : bucket.label
      : bucket.groups[0].theme;
    const motsCles = [titre, ...bucket.groups.map((g) => g.theme)].join(" ");
    const icon =
      SECTION_ICONS.find((entry) => entry.match.test(motsCles))?.icon ?? null;
    return { ...bucket, total, single, titre, icon, id: slugifyAncre(titre) };
  });

  // Données structurées : la liste des fiches de la matière (ItemList) + le fil
  // d'Ariane, pour aider Google à comprendre que cette page est un sommaire. Les
  // liens pointent vers l'URL canonique de chaque fiche (cf. getCanonicalNiveau).
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Fiches de ${label} — épreuve écrite du CRPE`,
    inLanguage: "fr",
    url: `${SITE_URL}${base}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: getFicheMetas(niveau, matiere).map((fiche, i) => {
        const canonicalNiveau = getCanonicalNiveau(niveau, matiere, fiche.slug);
        const name =
          fiche.numero > 0 && fiche.kind !== "sujet"
            ? `Notion ${fiche.numero} : ${fiche.title}`
            : fiche.title;
        return {
          "@type": "ListItem",
          position: i + 1,
          name,
          url: `${SITE_URL}/reviser/${canonicalNiveau}/epreuves/ecrites/${matiere}/${fiche.slug}`,
        };
      }),
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { name: "Accueil", item: `${SITE_URL}/` },
      { name: "Réviser", item: `${SITE_URL}/reviser` },
      { name: "Épreuves", item: `${SITE_URL}/reviser/${niveau}/epreuves` },
      { name: "Écrites", item: `${SITE_URL}/reviser/${niveau}/epreuves/ecrites` },
      { name: label, item: `${SITE_URL}${base}` },
    ].map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: entry.name,
      item: entry.item,
    })),
  };

  return (
    <div className="bg-seyes flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <HubHeader
        crumbs={[
          { label: "Accueil", href: "/" },
          { label: "Réviser", href: "/reviser" },
          { label: `CRPE ${niveau.toUpperCase()}`, href: `/reviser/${niveau}/epreuves` },
          { label: "Épreuves écrites", href: `/reviser/${niveau}/epreuves/ecrites` },
          { label },
        ]}
        stamp="Admissibilité"
        title={
          <>
            Écrit : <Souligne>{label.toLowerCase()}</Souligne>
          </>
        }
        subtitle="Toutes les fiches de révision, classées par grande partie du programme."
        note={
          <>
            une notion,
            <br />
            une fiche
          </>
        }
      />

      {/* Rythme vertical en multiples de 32px, le pas de la grille Seyès. */}
      <section className="px-5 pb-24 pt-16 md:px-12">
        <div className="mx-auto max-w-[1080px]">
          {/* Accès à l'entraînement espacé (pilote français) */}
          {matiere === "francais" && (
            <Link
              href={`/reviser/${niveau}/epreuves/ecrites/${matiere}/entrainement`}
              className="group mb-12 flex flex-col gap-5 rounded-xl bg-primary bg-seyes-dark p-8 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl sm:flex-row sm:items-center md:p-10"
            >
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white">
                  Entraînement espacé
                </h2>
                <p className="mt-2 max-w-xl font-ui text-sm leading-relaxed text-white/75">
                  Toutes notions mêlées : les questions reviennent au bon
                  moment, ce que vous ratez revient plus tôt. La fiche construit
                  le geste ; ici, on l&apos;entretient.
                </p>
              </div>
              <span className="inline-flex w-fit shrink-0 items-center gap-2 self-start rounded-xl bg-secondary px-7 py-3.5 font-ui text-xs font-bold uppercase tracking-widest text-white shadow-md shadow-secondary/20 transition-all group-hover:gap-3 sm:self-center">
                S&apos;entraîner <span aria-hidden>→</span>
              </span>
            </Link>
          )}

          {groups.length === 0 && (
            <p className="py-12 text-center font-ui text-on-surface-variant">
              Les fiches de {label.toLowerCase()} arrivent très bientôt.
            </p>
          )}

          <div className="flex flex-col gap-14">
            {sections.map((section) => {
              return (
                <div key={section.id} id={section.id} className="scroll-mt-28">
                  {/* En-tête de partie : filet plein, contrairement aux filets
                      pointillés des thèmes, pour marquer les deux niveaux. */}
                  <div
                    className={`mb-6 flex items-center justify-between gap-4 pb-3 ${
                      section.label
                        ? "border-b-2 border-primary/15"
                        : "border-b border-dashed border-outline-variant/60"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {section.icon && (
                        <img
                          src={section.icon}
                          alt=""
                          aria-hidden
                          className="h-10 w-auto"
                        />
                      )}
                      <h2 className="text-xl font-bold text-primary">
                        {section.titre}
                      </h2>
                    </div>
                    <HubLabel>
                      {section.total} fiche{section.total > 1 ? "s" : ""}
                    </HubLabel>
                  </div>

                  <div className="flex flex-col gap-10">
                    {section.groups.map((g) => (
                      <div key={g.theme}>
                        {!section.single && (
                          <h3 className="mb-4 font-ui text-sm font-bold uppercase tracking-[0.14em] text-on-surface">
                            {g.theme}
                            <span className="ml-3 font-normal normal-case tracking-normal text-on-surface-variant">
                              {g.fiches.length} fiche
                              {g.fiches.length > 1 ? "s" : ""}
                            </span>
                          </h3>
                        )}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                          {g.fiches.map((fiche) => {
                    const hasNumero =
                      fiche.numero > 0 && fiche.kind !== "sujet";
                    return (
                      <Link
                        key={fiche.slug}
                        href={`/reviser/${niveau}/epreuves/ecrites/${matiere}/${fiche.slug}`}
                        className="group flex flex-col gap-2.5 rounded-xl bg-white p-6 ring-1 ring-primary/10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-copy hover:ring-secondary/40"
                      >
                        {hasNumero && (
                          <span className="font-ui text-[10px] font-bold uppercase tracking-[0.22em] text-on-surface-variant">
                            Notion {fiche.numero}
                          </span>
                        )}
                        <h3 className="text-lg font-bold leading-snug text-primary">
                          {fiche.title}
                        </h3>
                        <p className="line-clamp-2 font-ui text-sm leading-relaxed text-on-surface-variant">
                          {fiche.subtitle}
                        </p>
                        {/* Seuls les badges « hot » (fréquence au concours) sont
                            affichés : les métadonnées de programme alourdissaient
                            la liste. */}
                        {fiche.badges.some((b) => b.variant === "hot") && (
                          <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-2">
                            {fiche.badges
                              .filter((badge) => badge.variant === "hot")
                              .map((badge, i) => (
                                <span
                                  key={i}
                                  className="font-ui text-[11px] font-bold uppercase tracking-wider text-secondary"
                                >
                                  {badge.label}
                                </span>
                              ))}
                          </div>
                        )}
                      </Link>
                    );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Le vide du bas de page est habité par un dessin au trait :
              la trousse ouverte et ses crayons. */}
          <img
            src="/illustrations/trousse.svg"
            alt=""
            aria-hidden
            className="mx-auto mt-16 w-56 md:w-64"
          />
        </div>
      </section>
    </div>
  );
}
