import Link from "next/link";
import { Caveat } from "next/font/google";

/* ──────────────────────────────────────────────────────────────────────────
   PROTOTYPE v2 — « LA COPIE CORRIGÉE »
   Isolé sur /proto. Les codes de la copie d'examen deviennent l'interface :
   - la marge (filet rouge du cahier) structure la page
   - le stylo terracotta = vraie annotation manuscrite, porteuse de sens
   - le barème /20 = motif récurrent (programme, tarif)
   - 3 voix typo : Source Serif (contenu) / Work Sans (interface) / Caveat (main)
   - du contenu RÉEL et dense (vraie correction grammaticale), pas d'abstractions
   ────────────────────────────────────────────────────────────────────────── */

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
});

/* La main du correcteur (manuscrit terracotta) */
function Hand({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`text-secondary ${className}`}
      style={{ fontFamily: "var(--font-caveat), cursive" }}
    >
      {children}
    </span>
  );
}

/* Petite étiquette interface (Work Sans, capitales) */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-ui text-[11px] font-bold uppercase tracking-[0.22em] text-on-surface-variant">
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
      className={`h-6 w-6 overflow-visible ${className}`}
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

/* Flèche manuscrite (annotation -> contenu) */
function Fleche({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 80 50"
      className={`overflow-visible ${className}`}
    >
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

/* La marge rouge double du cahier Seyès, en filet vertical */
function Marge() {
  return (
    <div aria-hidden className="absolute inset-y-0 left-0 flex">
      <div className="w-px bg-secondary/40" />
      <div className="w-[3px]" />
      <div className="w-px bg-secondary/40" />
    </div>
  );
}

/* ── HERO : le haut d'une copie ───────────────────────────────────────────── */
function Hero() {
  return (
    <section className="bg-seyes px-5 py-16 md:px-12 lg:py-20">
      <div className="mx-auto max-w-[1180px]">
        {/* La feuille de copie */}
        <div className="relative overflow-hidden rounded-sm border border-outline-variant/60 bg-white shadow-xl">
          <Marge />
          <div className="pl-12 pr-6 py-10 md:pl-20 md:pr-16 md:py-14">
            {/* En-tête d'épreuve, comme le cartouche d'une copie */}
            <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-dashed border-outline-variant pb-5">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
                <span>
                  <Label>Épreuve</Label>{" "}
                  <span className="font-ui text-sm font-semibold text-primary">
                    CRPE écrit
                  </span>
                </span>
                <span>
                  <Label>Session</Label>{" "}
                  <span className="font-ui text-sm font-semibold text-primary">
                    2026
                  </span>
                </span>
                <span>
                  <Label>Candidat</Label>{" "}
                  <span className="font-ui text-sm font-semibold text-primary">
                    vous
                  </span>
                </span>
              </div>
              <span className="rounded-sm border border-secondary/40 px-3 py-1 font-ui text-sm font-bold text-secondary">
                Objectif : admis·e
              </span>
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <h1 className="text-balance text-5xl font-medium leading-[1.08] text-primary lg:text-6xl lg:leading-[1.06]">
                  Préparez le CRPE
                  <br />
                  sans vous{" "}
                  <span className="relative whitespace-nowrap">
                    <Entoure>perdre.</Entoure>
                  </span>
                </h1>

                <p className="mt-8 max-w-lg text-lg leading-relaxed text-on-surface-variant">
                  Des fiches fidèles aux attendus, des entraînements corrigés et
                  un parcours lisible. Vous travaillez l&apos;essentiel, dans le
                  bon ordre, et vous savez exactement ce que le jury attend.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="/reviser"
                    className="rounded-sm bg-secondary px-8 py-3.5 font-ui text-base font-bold text-white transition-all hover:-translate-y-0.5 active:scale-95"
                  >
                    Commencer à réviser
                  </Link>
                  <Link
                    href="#correction"
                    className="font-ui text-base font-bold text-primary underline decoration-secondary/40 decoration-2 underline-offset-8 transition-colors hover:decoration-secondary"
                  >
                    Voir une fiche corrigée
                  </Link>
                </div>
              </div>

              {/* Annotation manuscrite dans la marge de droite */}
              <div className="relative hidden lg:block">
                <Hand className="block text-right text-3xl leading-tight">
                  enfin une prépa
                  <br />
                  qui va à l&apos;essentiel
                </Hand>
                <Fleche className="ml-auto mt-1 h-12 w-20 -scale-x-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── LA CORRECTION : l'artefact central, contenu RÉEL ─────────────────────── */
function Correction() {
  return (
    <section id="correction" className="px-5 py-24 md:px-12">
      <div className="mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Discours */}
        <div>
          <Label>Ce que Maitrizz vous apprend</Label>
          <h2 className="mt-4 text-balance text-4xl font-medium leading-tight text-primary lg:text-5xl">
            À éviter la faute qui coûte des points.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-on-surface-variant">
            Confondre la <em className="text-primary not-italic font-semibold">nature</em>{" "}
            et la <em className="text-primary not-italic font-semibold">fonction</em> d&apos;un
            mot, c&apos;est l&apos;erreur classique du concours. Chaque fiche
            vous entraîne sur le cas précis qui fait trébucher, et vous corrige
            comme le ferait le jury.
          </p>
          <Link
            href="/reviser"
            className="mt-8 inline-block font-ui font-bold text-secondary underline decoration-2 underline-offset-4 transition-colors hover:text-primary"
          >
            Voir toutes les notions de grammaire →
          </Link>
        </div>

        {/* La copie corrigée (artefact) */}
        <div className="relative overflow-hidden rounded-sm border border-outline-variant/60 bg-white p-8 shadow-xl md:p-10">
          <div className="mb-6 flex items-center justify-between">
            <Label>Exercice — nature &amp; fonction</Label>
            <span className="font-ui text-xs text-on-surface-variant">
              Notion 02
            </span>
          </div>

          <p className="text-lg leading-relaxed text-on-surface">
            Donnez la nature et la fonction du mot souligné.
          </p>
          <p className="mt-4 text-xl leading-relaxed text-primary">
            La petite fille{" "}
            <span className="underline decoration-primary/50 decoration-2 underline-offset-4">
              rêveuse
            </span>{" "}
            regarde les étoiles.
          </p>

          {/* La réponse du candidat, corrigée au stylo */}
          <div className="mt-8 border-t border-dashed border-outline-variant pt-6">
            <Label>Votre réponse</Label>
            <div className="relative mt-3 space-y-1 text-lg text-on-surface">
              <p>
                Nature :{" "}
                <span className="relative">
                  <span className="text-on-surface-variant line-through decoration-secondary decoration-2">
                    épithète
                  </span>{" "}
                  <Hand className="text-2xl">adjectif !</Hand>
                </span>
              </p>
              <p>Fonction : épithète du nom « fille »</p>
            </div>

            {/* Annotation marginale + barème */}
            <div className="mt-6 flex items-start justify-between gap-4 rounded-sm bg-surface-container/50 p-4">
              <div className="flex items-start gap-3">
                <Coche className="mt-0.5 shrink-0" />
                <Hand className="text-2xl leading-snug">
                  « épithète » est une fonction, pas une nature. Bien vu pour le
                  reste.
                </Hand>
              </div>
              <span className="shrink-0 font-ui text-2xl font-bold text-secondary">
                7<span className="text-base text-on-surface-variant">/8</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── LE RELEVÉ : un bulletin scolaire des matières couvertes ───────────────── */
const matieres = [
  { t: "Français", c: "21 notions", p: "4 parties", note: "écrit + oral" },
  { t: "Mathématiques", c: "27 fiches", p: "6 parties", note: "écrit + oral" },
  { t: "Sciences", c: "18 modules", p: "4 parties", note: "écrit" },
];

function Releve() {
  return (
    <section className="border-y border-outline-variant/60 bg-surface-container/30 px-5 py-24 md:px-12">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Label>Le programme</Label>
            <h2 className="mt-4 text-balance text-4xl font-medium leading-tight text-primary lg:text-5xl">
              Tout le concours, traité fiche par fiche.
            </h2>
          </div>
          <Hand className="text-3xl">rien d&apos;oublié ✓</Hand>
        </div>

        {/* La feuille de relevé */}
        <div className="relative overflow-hidden rounded-sm border border-outline-variant/60 bg-white shadow-xl">
          <Marge />
          <div className="pl-12 pr-6 py-2 md:pl-20 md:pr-12">
            {/* En-tête de colonnes */}
            <div className="hidden grid-cols-[1.5fr_1fr_1fr_1fr] gap-4 border-b border-outline-variant py-4 sm:grid">
              <Label>Matière</Label>
              <Label>Contenu</Label>
              <Label>Découpage</Label>
              <Label>Épreuves</Label>
            </div>

            {matieres.map((m) => (
              <div
                key={m.t}
                className="grid grid-cols-2 items-center gap-4 border-b border-dashed border-outline-variant py-6 last:border-b-0 sm:grid-cols-[1.5fr_1fr_1fr_1fr]"
              >
                <div className="col-span-2 flex items-center gap-3 sm:col-span-1">
                  <Coche className="shrink-0" />
                  <span className="text-2xl font-medium text-primary">{m.t}</span>
                </div>
                <span className="text-lg text-on-surface">{m.c}</span>
                <span className="text-lg text-on-surface-variant">{m.p}</span>
                <span className="font-ui text-sm text-on-surface-variant">
                  {m.note}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 font-ui text-sm text-on-surface-variant">
          Chaque fiche est sourcée sur les programmes officiels et les rapports
          de jury du CRPE.
        </p>
      </div>
    </section>
  );
}

/* ── LA FAQ : des questions corrigées dans la marge ───────────────────────── */
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
    <section className="px-5 py-24 md:px-12">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-12">
          <Label>Vos questions, corrigées</Label>
          <h2 className="mt-4 text-balance text-4xl font-medium leading-tight text-primary lg:text-5xl">
            Tout ce qu&apos;on nous demande avant de se lancer.
          </h2>
        </div>

        <div className="relative pl-12 md:pl-16">
          <Marge />
          <dl>
            {questions.map((item) => (
              <div
                key={item.q}
                className="border-b border-outline-variant/50 py-8 first:pt-0"
              >
                <dt className="flex items-baseline gap-4 text-xl font-medium text-primary">
                  <Hand className="shrink-0 text-2xl">Q.</Hand>
                  {item.q}
                </dt>
                <dd className="mt-3 max-w-2xl pl-9 text-lg leading-relaxed text-on-surface-variant">
                  {item.r}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ── LE TARIF : une ligne de barème ───────────────────────────────────────── */
const perks = [
  "Accès illimité à tous les modules",
  "Fiches fidèles aux attendus du jury",
  "Entraînements corrigés, en illimité",
  "Sans engagement, résiliable en un clic",
];

function Tarif() {
  return (
    <section className="px-5 py-24 md:px-12">
      <div className="mx-auto grid max-w-[1180px] items-center gap-14 lg:grid-cols-2">
        <div>
          <Label>L&apos;accès</Label>
          <h2 className="mt-4 text-balance text-4xl font-medium leading-tight text-primary lg:text-5xl">
            Un seul tarif, sans piège.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-on-surface-variant">
            Pas de formules à étages. Tout est compris, et vous partez quand
            vous voulez.
          </p>
          <ul className="mt-8 space-y-3">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-3">
                <Coche className="h-5 w-5 shrink-0" />
                <span className="text-on-surface">{perk}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-sm border border-outline-variant/60 bg-white p-10 shadow-xl">
          <Marge />
          <div className="pl-8">
            <Label>Abonnement mensuel</Label>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-7xl font-medium text-primary">6 €</span>
              <span className="font-ui text-lg text-on-surface-variant">
                / mois
              </span>
            </div>
            <Hand className="mt-2 block text-2xl">le prix d&apos;un café par semaine</Hand>
            <Link
              href="#fin"
              className="mt-8 block rounded-sm bg-primary py-4 text-center font-ui text-base font-bold text-on-primary transition-all hover:bg-primary-container active:scale-[0.98]"
            >
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
    <section id="fin" className="px-5 pb-20 md:px-12">
      <div className="bg-seyes-dark relative overflow-hidden rounded-sm bg-primary px-8 py-20 text-center text-on-primary md:px-16">
        <h2 className="text-balance text-4xl font-medium leading-tight lg:text-5xl">
          Prêt·e à préparer le CRPE sereinement ?
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-on-primary-container">
          Laissez votre adresse : vous serez prévenu·e dès l&apos;ouverture,
          avec nos conseils de révision d&apos;ici là.
        </p>
        <form className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="votre.email@exemple.fr"
            className="flex-1 rounded-sm bg-white px-5 py-3.5 font-ui text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none"
          />
          <button
            type="button"
            className="rounded-sm bg-secondary px-7 py-3.5 font-ui font-bold text-white transition-all hover:-translate-y-0.5 active:scale-95"
          >
            Me prévenir
          </button>
        </form>
      </div>
    </section>
  );
}

/* Surcharge de charte LOCALE au prototype (ne touche pas la charte globale).
   Fond « blanc chaud épuré » : plus lumineux et net que le crème #fbf9f4. */
const charteProto = {
  "--color-surface": "#fcfcfa",
  "--color-surface-container": "#f1f1ed",
  backgroundColor: "#fcfcfa",
} as React.CSSProperties;

export default function ProtoPage() {
  return (
    <div className={caveat.variable} style={charteProto}>
      <Hero />
      <Correction />
      <Releve />
      <Faq />
      <Tarif />
      <Cloture />
    </div>
  );
}
