import Link from "next/link";
import Reveal from "./Reveal";

/* ──────────────────────────────────────────────────────────────────────────
   PROTOTYPE v3 — « ÉDITION SCOLAIRE PREMIUM CONTEMPORAINE »
   Isolé sur /proto. Évolution de la v2 selon le brief :
   - 1 seule annotation manuscrite par section, même main, même rouge-brun
   - hiérarchie typo nette : serif (titres) / Work Sans (texte courant) /
     capitales espacées RÉSERVÉES aux petits labels / manuscrit = annotations
   - hiérarchie de boutons constante : plein / contour / lien
   - plus de contraste, plus d'espace, bordures fines + ombre douce diffuse
   ────────────────────────────────────────────────────────────────────────── */

/* Largeurs cohérentes pour toute la grille éditoriale */
const WRAP = "mx-auto w-full max-w-[1080px] px-5 md:px-12";

/* Boutons — hiérarchie fixe */
const BTN_PRIMARY =
  "inline-flex items-center justify-center gap-2 rounded-md bg-secondary px-7 py-3.5 font-ui text-base font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-95";
const BTN_SECONDARY =
  "inline-flex items-center justify-center gap-2 rounded-md border border-primary/30 px-7 py-3.5 font-ui text-base font-bold text-primary transition-all hover:border-primary/60 hover:bg-primary/[0.04] active:scale-95";

/* La main du correcteur : une seule police, un seul poids, un seul rouge-brun,
   une légère inclinaison constante. */
function Hand({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`-rotate-2 text-secondary ${className}`}
      style={{ fontFamily: "var(--font-hand), cursive" }}
    >
      {children}
    </span>
  );
}

/* Petit label : capitales espacées, réservé aux étiquettes courtes */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-ui text-[11px] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
      {children}
    </span>
  );
}

/* Intertitre de section : lisible, terracotta, peu espacé */
function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-ui text-sm font-bold uppercase tracking-[0.1em] text-secondary">
      {children}
    </span>
  );
}

/* Tampon « officiel » : un seul style, légèrement incliné */
function Tampon({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block -rotate-2 rounded-sm border-2 border-secondary/50 px-3 py-1.5 font-ui text-[11px] font-bold uppercase tracking-[0.18em] text-secondary/90">
      {children}
    </span>
  );
}

/* Mot entouré au stylo (ellipse tracée main) */
function Entoure({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      {children}
      <svg
        aria-hidden
        viewBox="0 0 200 70"
        preserveAspectRatio="none"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[150%] w-[118%] -translate-x-1/2 -translate-y-1/2 overflow-visible"
      >
        <path
          d="M40 10 C 110 1 185 6 192 28 C 197 48 140 62 92 61 C 38 60 6 50 7 30 C 8 16 28 11 70 10"
          fill="none"
          stroke="#c36648"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

/* Coche du correcteur */
function Coche({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 32 32"
      className={`overflow-visible ${className}`}
    >
      <path
        d="M4 17 C 8 19 11 24 13 28 C 18 16 24 7 31 2"
        fill="none"
        stroke="#c36648"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Flèche manuscrite */
function Fleche({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 80 50" className={`overflow-visible ${className}`}>
      <path
        d="M75 6 C 50 4 18 12 8 38"
        fill="none"
        stroke="#c36648"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M8 38 L 16 30 M8 38 L 18 40"
        fill="none"
        stroke="#c36648"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── HERO ─────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="bg-seyes px-5 py-24 md:px-12 lg:py-28">
      <div className="mx-auto w-full max-w-[1080px]">
        {/* Feuille de copie : bordure fine, ombre douce et diffuse */}
        <div className="relative overflow-hidden rounded-xl bg-white px-8 py-14 shadow-[0_24px_70px_-30px_rgba(12,67,78,0.25)] ring-1 ring-primary/[0.06] md:px-16 md:py-20">
          {/* Annotation manuscrite, en note de marge rattachée au titre */}
          <div className="pointer-events-none absolute right-12 top-16 hidden w-60 text-right lg:block xl:right-16">
            <Hand className="block text-[1.9rem] leading-tight">
              enfin une prépa
              <br />
              qui va à l&apos;essentiel
            </Hand>
            <Fleche className="ml-auto mt-1 h-14 w-24" />
          </div>

          <div className="max-w-[660px]">
            <Tampon>Programme officiel</Tampon>

            <h1 className="mt-7 text-balance text-5xl font-bold leading-[1.07] text-primary lg:text-[4.25rem] lg:leading-[1.04]">
              Préparez le{" "}
              <span className="whitespace-nowrap">
                <Entoure>CRPE</Entoure>
              </span>
              <br />
              sans vous perdre.
            </h1>

            <p className="mt-7 max-w-lg font-ui text-lg leading-relaxed text-on-surface-variant">
              Des fiches fidèles aux attendus, des entraînements corrigés et un
              parcours lisible. Vous travaillez l&apos;essentiel, dans le bon
              ordre, et vous savez exactement ce que le jury attend.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/reviser" className={BTN_PRIMARY}>
                Commencer à réviser
              </Link>
              <Link href="#correction" className={BTN_SECONDARY}>
                Voir une fiche corrigée
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── BANDE DE PREUVE (sobre, éditoriale, sans chiffres) ────────────────────── */
const preuves = [
  {
    t: "Programmes officiels",
    d: "Chaque notion est calée sur les textes en vigueur pour la session 2026.",
  },
  {
    t: "Relu par des enseignants",
    d: "Professeurs en poste et formateurs valident le contenu de chaque fiche.",
  },
  {
    t: "Rapports de jury",
    d: "Les entraînements ciblent précisément ce que le jury attend le jour J.",
  },
];

function Preuve() {
  return (
    <section className="border-y border-on-surface/[0.08] bg-surface-container/40 py-14">
      <div className={WRAP}>
        <div className="grid gap-y-8 sm:grid-cols-3">
          {preuves.map((p, i) => (
            <div
              key={p.t}
              className={`flex items-start gap-3 sm:px-8 first:sm:pl-0 last:sm:pr-0 ${
                i > 0 ? "sm:border-l sm:border-on-surface/[0.1]" : ""
              }`}
            >
              <Coche className="mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <h3 className="font-ui text-sm font-bold text-primary">{p.t}</h3>
                <p className="mt-1 font-ui text-sm leading-relaxed text-on-surface-variant">
                  {p.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── LA CORRECTION : l'artefact central ───────────────────────────────────── */
function Correction() {
  return (
    <section id="correction" className="py-28 md:py-32">
      <div className={WRAP}>
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* Discours */}
          <div>
            <Kicker>Ce que Maitrizz vous apprend</Kicker>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-tight text-primary lg:text-5xl">
              À éviter la faute qui coûte des points.
            </h2>
            <p className="mt-6 max-w-md font-ui text-lg leading-relaxed text-on-surface-variant">
              Confondre la nature et la fonction d&apos;un mot, c&apos;est
              l&apos;erreur classique du concours. Chaque fiche vous entraîne sur
              le cas précis qui fait trébucher, et vous corrige comme le ferait le
              jury.
            </p>
            <Link
              href="/reviser"
              className="mt-8 inline-flex items-center gap-1.5 font-ui font-bold text-secondary underline decoration-2 underline-offset-4 transition-colors hover:text-primary"
            >
              Voir toutes les notions de grammaire
              <span aria-hidden>→</span>
            </Link>
          </div>

          {/* La copie corrigée : feuilles superposées */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-4 rotate-2 rounded-xl bg-white shadow-[0_20px_50px_-30px_rgba(12,67,78,0.3)] ring-1 ring-primary/[0.05]"
            />
            <div className="group relative rounded-xl bg-white p-8 shadow-[0_24px_60px_-30px_rgba(12,67,78,0.28)] ring-1 ring-primary/[0.07] transition-transform duration-500 hover:-translate-y-1 md:p-10">
              <div className="mb-6 flex items-center justify-between">
                <Label>Exercice — nature &amp; fonction</Label>
                <span className="font-ui text-xs font-semibold text-on-surface-variant">
                  Notion 02
                </span>
              </div>

              <p className="font-ui leading-relaxed text-on-surface">
                Donnez la nature et la fonction du mot souligné.
              </p>
              <p className="mt-3 text-2xl leading-relaxed text-primary">
                La petite fille{" "}
                <span className="underline decoration-primary/50 decoration-2 underline-offset-4">
                  rêveuse
                </span>{" "}
                regarde les étoiles.
              </p>

              {/* Réponse corrigée au stylo, révélée progressivement */}
              <div className="mt-8 border-t border-dashed border-on-surface-variant/30 pt-6">
                <Label>Votre réponse</Label>
                <Reveal delay={120} className="mt-3 space-y-1.5 font-ui text-lg text-on-surface">
                  <p>
                    Nature :{" "}
                    <span className="text-on-surface-variant line-through decoration-secondary decoration-2">
                      épithète
                    </span>{" "}
                    <Hand className="ml-1 inline-block text-2xl">adjectif</Hand>
                  </p>
                  <p>Fonction : épithète du nom « fille »</p>
                </Reveal>

                {/* Retour du jury + barème */}
                <Reveal delay={420} className="mt-6 flex items-stretch gap-4">
                  <div className="flex flex-1 items-start gap-3 rounded-lg bg-surface-container/60 p-4">
                    <Coche className="mt-0.5 h-5 w-5 shrink-0" />
                    <p className="font-ui text-sm leading-relaxed text-on-surface">
                      <span className="font-bold text-primary">Retour du jury — </span>
                      « épithète » est une fonction, pas une nature. Le reste est
                      juste.
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-secondary/40 px-5">
                    <span className="font-serif text-3xl font-bold leading-none text-secondary">
                      12
                    </span>
                    <span className="font-ui text-xs text-on-surface-variant">
                      / 20
                    </span>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── LE PROGRAMME : tableau cliquable ──────────────────────────────────────── */
const matieres = [
  { href: "/reviser", t: "Français", c: "21 notions", p: "Écrit et oral" },
  { href: "/reviser", t: "Mathématiques", c: "27 fiches", p: "Écrit et oral" },
  { href: "/reviser", t: "Sciences", c: "18 modules", p: "Écrit" },
];

function Programme() {
  return (
    <section
      id="programme"
      className="border-y border-on-surface/[0.08] bg-surface-container/30 py-28 md:py-32 scroll-mt-24"
    >
      <div className={WRAP}>
        <div className="mb-14 max-w-[620px]">
          <Kicker>Le programme</Kicker>
          <h2 className="mt-4 text-balance text-4xl font-bold leading-tight text-primary lg:text-5xl">
            Tout le concours, traité fiche par fiche.
          </h2>
          <p className="mt-6 font-ui text-lg leading-relaxed text-on-surface-variant">
            De la grammaire aux sciences, chaque matière est découpée en notions
            courtes et sourcées. Choisissez une matière pour ouvrir son programme.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl bg-white ring-1 ring-on-surface/[0.08]">
          {matieres.map((m) => (
            <Link
              key={m.t}
              href={m.href}
              className="group flex items-center gap-5 border-b border-on-surface/[0.07] px-6 py-7 transition-colors last:border-b-0 hover:bg-surface-container/50 md:px-8"
            >
              <Coche className="h-5 w-5 shrink-0" />
              <span className="flex-1 text-2xl font-bold text-primary">{m.t}</span>
              <span className="hidden w-32 font-ui text-sm font-semibold text-on-surface sm:block">
                {m.c}
              </span>
              <span className="hidden w-28 font-ui text-sm text-on-surface-variant md:block">
                {m.p}
              </span>
              <span
                aria-hidden
                className="font-ui text-xl text-secondary transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ───────────────────────────────────────────────────────────────────── */
const questions = [
  {
    q: "Le contenu est-il à jour de la réforme du CRPE ?",
    r: "Oui. Chaque fiche suit le cadre en vigueur pour la session 2026, et nous mettons à jour dès qu'un texte officiel change.",
  },
  {
    q: "Faut-il déjà avoir un bon niveau pour commencer ?",
    r: "Non. Les notions partent du début et montent en exigence progressivement, du rappel de cours jusqu'aux cas difficiles du jour J.",
  },
  {
    q: "Puis-je arrêter quand je veux ?",
    r: "Oui, l'abonnement est sans engagement et se résilie en un clic. Vous gardez l'accès jusqu'à la fin de la période payée.",
  },
];

function Faq() {
  return (
    <section className="py-28 md:py-32">
      <div className={WRAP}>
        <div className="mb-14 max-w-[620px]">
          <Kicker>Questions fréquentes</Kicker>
          <h2 className="mt-4 text-balance text-4xl font-bold leading-tight text-primary lg:text-5xl">
            Tout ce qu&apos;on nous demande avant de se lancer.
          </h2>
        </div>

        <dl className="border-t border-on-surface/[0.1]">
          {questions.map((item) => (
            <div
              key={item.q}
              className="grid gap-2 border-b border-on-surface/[0.1] py-8 md:grid-cols-[0.9fr_1.1fr] md:gap-10"
            >
              <dt className="text-xl font-bold leading-snug text-primary">
                {item.q}
              </dt>
              <dd className="font-ui text-lg leading-relaxed text-on-surface-variant">
                {item.r}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ── TARIF ─────────────────────────────────────────────────────────────────── */
const perks = [
  "Accès illimité à tous les modules",
  "Fiches fidèles aux attendus du jury",
  "Entraînements corrigés, en illimité",
  "Sans engagement, résiliable en un clic",
];

function Tarif() {
  return (
    <section className="border-t border-on-surface/[0.08] bg-surface-container/30 py-28 md:py-32">
      <div className={WRAP}>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Kicker>L&apos;accès</Kicker>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-tight text-primary lg:text-5xl">
              Un seul tarif, sans piège.
            </h2>
            <p className="mt-6 max-w-md font-ui text-lg leading-relaxed text-on-surface-variant">
              Pas de formules à étages. Tout est compris, et vous partez quand
              vous voulez.
            </p>
            <ul className="mt-8 space-y-3">
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3">
                  <Coche className="h-5 w-5 shrink-0" />
                  <span className="font-ui text-on-surface">{perk}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-white p-10 shadow-[0_24px_60px_-30px_rgba(12,67,78,0.25)] ring-1 ring-primary/[0.07]">
            <Label>Abonnement mensuel</Label>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-serif text-7xl font-bold text-primary">6 €</span>
              <span className="font-ui text-lg text-on-surface-variant">/ mois</span>
            </div>
            <Hand className="mt-3 block text-2xl">le prix d&apos;un café par semaine</Hand>
            <Link href="#fin" className={`${BTN_PRIMARY} mt-8 w-full`}>
              Être prévenu·e du lancement
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CLÔTURE ──────────────────────────────────────────────────────────────── */
function Cloture() {
  return (
    <section id="fin" className="py-24 md:py-28">
      <div className={WRAP}>
        <div className="bg-seyes-dark relative overflow-hidden rounded-2xl bg-primary px-8 py-20 text-center text-white md:px-16">
          <h2 className="text-balance text-4xl font-bold leading-tight lg:text-5xl">
            Prêt·e à préparer le CRPE sereinement ?
          </h2>
          <p className="mx-auto mt-6 max-w-lg font-ui text-lg leading-relaxed text-white/75">
            Laissez votre adresse : vous serez prévenu·e dès l&apos;ouverture,
            avec nos conseils de révision d&apos;ici là.
          </p>
          <form className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="votre.email@exemple.fr"
              className="flex-1 rounded-md bg-white px-5 py-3.5 font-ui text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none"
            />
            <button
              type="button"
              className="rounded-md bg-secondary px-7 py-3.5 font-ui font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-95"
            >
              Me prévenir
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function ProtoPage() {
  return (
    <>
      <Hero />
      <Preuve />
      <Correction />
      <Programme />
      <Faq />
      <Tarif />
      <Cloture />
    </>
  );
}
