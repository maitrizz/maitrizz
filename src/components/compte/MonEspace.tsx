"use client";

/**
 * Mon espace : tableau de bord de révision.
 *
 * Trois niveaux de lecture, dans cet ordre, parce qu'un candidat qui ouvre
 * cette page n'a pas toujours le même besoin :
 *  1. les CHIFFRES CLÉS, pour savoir en trois secondes où il en est ;
 *  2. le PLAN, qui dit quoi faire maintenant, avec des actions nommées ;
 *  3. le DÉTAIL, par partie d'épreuve puis notion par notion, pour qui veut
 *     piloter finement.
 *
 * Rien n'est instrumenté de neuf. Tout existait déjà, éparpillé dans les
 * fiches : boîtes de Leitner du hub, jauges de maîtrise, historique des sujets
 * blancs, dates d'écriture du magasin. Cette page rassemble et conclut.
 *
 * Doctrine (GABARIT §6 bis), qui prime sur l'habillage : pas de pourcentage de
 * maîtrise, pas de série de jours consécutifs, pas de rouge. On s'adresse à
 * des adultes sous pression. Les seuls chiffres affichés sont des QUANTITÉS
 * (combien de notions, combien de questions) et les notes de sujets blancs,
 * parce qu'une épreuve blanche EST notée.
 *
 * Accessible sans compte, volontairement : montrer ce qu'on y gagne est le
 * meilleur argument pour s'inscrire.
 */

import Link from "next/link";
import { useEffect, useReducer, useSyncExternalStore } from "react";
import { HUB_NOTIONS } from "@/app/reviser/[niveau]/epreuves/ecrites/[matiere]/data/francais/hub-entrainement";
import {
  ETAT_STYLE,
  HUB_SLUG,
  computeJaugeGlobale,
  jaugeLabel,
  loadDerniersResultats,
  toItemsTagues,
  type EtatMaitrise,
  type JaugeSavoirFaire,
} from "@/components/fiche/maitrise";
import { computeDailyPlan, loadTrainerState } from "@/components/fiche/trainerProgress";
import { abonner, clesConnues, lireJSON, toutesMajLocales } from "@/lib/store";
import { useCompte } from "./CompteProvider";

type Matiere = "francais" | "mathematiques" | "sciences";

export type FicheIndex = Record<
  string,
  { title: string; partie: string; matiere: Matiere; kind?: string }
>;

export type Catalogue = {
  fiches: FicheIndex;
  totaux: Record<"l3" | "m2", Record<Matiere, number>>;
  labels: Record<Matiere, string>;
};

type Tentative = {
  date: string;
  note: number;
  maxNote?: number;
  faibles?: { label: string; slug: string }[];
};

const JOUR_MS = 86_400_000;
const PREFIXES_TRAVAIL = ["trainer:", "exos:", "copies:", "autoeval:", "mastery:"];
const INITIALES_JOURS = ["L", "M", "M", "J", "V", "S", "D"];
const MATIERES: Matiere[] = ["francais", "mathematiques", "sciences"];

/* ────────────────────────────────────────────────────────────
   Lectures. Toutes côté client, toutes synchrones.
──────────────────────────────────────────────────────────── */

function useMounted(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

const TOUS_LES_ITEMS = HUB_NOTIONS.flatMap((n) => n.items);

type LigneNotion = {
  slug: string;
  numero: number;
  titre: string;
  etat: EtatMaitrise;
  jauge: JaugeSavoirFaire;
};

function lireNotions(): LigneNotion[] {
  return HUB_NOTIONS.map((notion) => {
    const jauge = computeJaugeGlobale(
      toItemsTagues(notion.items, []),
      loadDerniersResultats(notion.notionSlug),
    );
    return {
      slug: notion.notionSlug,
      numero: notion.numero,
      titre: notion.title,
      etat: jaugeLabel(jauge).etat,
      jauge,
    };
  }).sort((a, b) => a.numero - b.numero);
}

/** Prévision des révisions sur sept jours, d'après les échéances de Leitner. */
function lireEcheances(): { jour: number; nb: number }[] {
  const etat = loadTrainerState(HUB_SLUG);
  const minuit = new Date();
  minuit.setHours(0, 0, 0, 0);
  const base = minuit.getTime();

  const jours = Array.from({ length: 7 }, (_, jour) => ({ jour, nb: 0 }));
  for (const item of Object.values(etat)) {
    const decalage = Math.floor((item.due - base) / JOUR_MS);
    if (decalage < 0) jours[0].nb += 1; // en retard : remonté sur aujourd'hui
    else if (decalage < 7) jours[decalage].nb += 1;
  }
  return jours;
}

/** Dernière notion travaillée sur cet appareil, d'après les dates d'écriture. */
function lireDerniereActivite(): { slug: string; quand: number } | null {
  let meilleur: { slug: string; quand: number } | null = null;
  for (const [cle, quand] of Object.entries(toutesMajLocales())) {
    const prefixe = PREFIXES_TRAVAIL.find((p) => cle.startsWith(p));
    if (!prefixe) continue;
    const slug = cle.slice(prefixe.length);
    if (slug === HUB_SLUG) continue;
    if (!meilleur || quand > meilleur.quand) meilleur = { slug, quand };
  }
  return meilleur;
}

function lireFichesTravaillees(compte: string | null): Set<string> {
  const slugs = new Set<string>();
  for (const cle of clesConnues(compte)) {
    const prefixe = PREFIXES_TRAVAIL.find((p) => cle.startsWith(p));
    if (!prefixe) continue;
    const slug = cle.slice(prefixe.length);
    if (slug !== HUB_SLUG) slugs.add(slug);
  }
  return slugs;
}

function lireTentatives(compte: string | null): { slug: string; tentative: Tentative }[] {
  const toutes: { slug: string; tentative: Tentative }[] = [];
  for (const cle of clesConnues(compte)) {
    if (!cle.startsWith("runner-history:")) continue;
    const slug = cle.slice("runner-history:".length);
    for (const tentative of lireJSON<Tentative[]>(cle, [])) {
      if (tentative?.date) toutes.push({ slug, tentative });
    }
  }
  return toutes.sort((a, b) => b.tentative.date.localeCompare(a.tentative.date));
}

function semainesRestantes(dateConcours: string | null | undefined): number | null {
  if (!dateConcours) return null;
  const cible = new Date(dateConcours);
  if (Number.isNaN(cible.getTime())) return null;
  const jours = Math.ceil((cible.getTime() - Date.now()) / JOUR_MS);
  return jours < 0 ? null : Math.ceil(jours / 7);
}

function dateCourte(iso: string): string {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? "" : d.toLocaleDateString("fr-FR", { day: "numeric", month: "long" });
}

function ilYA(quand: number): string {
  const jours = Math.floor((Date.now() - quand) / JOUR_MS);
  if (jours <= 0) return "aujourd'hui";
  if (jours === 1) return "hier";
  if (jours < 7) return `il y a ${jours} jours`;
  if (jours < 14) return "la semaine dernière";
  return `il y a ${Math.floor(jours / 7)} semaines`;
}

/* ────────────────────────────────────────────────────────────
   Briques d'affichage
──────────────────────────────────────────────────────────── */

/** Tuile de chiffre clé. Toujours un nombre, une unité, un commentaire. */
function Tuile({
  valeur,
  unite,
  libelle,
  accent = false,
}: {
  valeur: string | number;
  unite?: string;
  libelle: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-5 ring-1 ${
        accent ? "bg-primary text-white ring-primary" : "bg-white ring-primary/10"
      }`}
    >
      <div className="flex items-baseline gap-1.5">
        <span className={`text-3xl font-bold leading-none ${accent ? "text-white" : "text-primary"}`}>
          {valeur}
        </span>
        {unite ? (
          <span className={`font-ui text-sm ${accent ? "text-white/70" : "text-on-surface-variant"}`}>
            {unite}
          </span>
        ) : null}
      </div>
      <p
        className={`mt-2 font-ui text-[11px] font-bold uppercase leading-tight tracking-[0.14em] ${
          accent ? "text-white/70" : "text-on-surface-variant"
        }`}
      >
        {libelle}
      </p>
    </div>
  );
}

function Panneau({
  titre,
  aside,
  children,
  className = "",
}: {
  titre: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`rounded-xl bg-white p-6 ring-1 ring-primary/10 shadow-copy ${className}`}>
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="font-ui text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
          {titre}
        </h2>
        {aside}
      </div>
      <div className="mt-3 h-px w-full bg-primary/15" />
      <div className="mt-5">{children}</div>
    </section>
  );
}

/** Barre segmentée : acquis, en cours, pas encore. Le langage des voyants. */
function BarreEtats({
  acquis,
  enCours,
  total,
  hauteur = "h-2.5",
}: {
  acquis: number;
  enCours: number;
  total: number;
  hauteur?: string;
}) {
  const part = (x: number) => (total > 0 ? (x / total) * 100 : 0);
  return (
    <span className={`flex ${hauteur} w-full overflow-hidden rounded-full ${ETAT_STYLE["pas-encore"].fill}`}>
      {acquis > 0 ? (
        <span className={`${ETAT_STYLE.acquis.fill} transition-[width] duration-500`} style={{ width: `${part(acquis)}%` }} />
      ) : null}
      {enCours > 0 ? (
        <span
          className={`${ETAT_STYLE["a-consolider"].fill} transition-[width] duration-500`}
          style={{ width: `${part(enCours)}%` }}
        />
      ) : null}
    </span>
  );
}

function Action({
  href,
  titre,
  detail,
  principal = false,
}: {
  href: string;
  titre: string;
  detail: string;
  principal?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group flex items-center justify-between gap-4 rounded-xl px-5 py-4 transition-all active:scale-[0.99] ${
        principal ? "bg-white text-primary hover:bg-surface" : "border border-white/25 text-white hover:border-white/50 hover:bg-white/5"
      }`}
    >
      <span className="min-w-0">
        <span className="block font-ui text-base font-bold">{titre}</span>
        <span className={`mt-0.5 block font-ui text-sm ${principal ? "text-on-surface-variant" : "text-white/70"}`}>
          {detail}
        </span>
      </span>
      <span aria-hidden className="shrink-0 font-ui text-xl transition-transform group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}

/* ────────────────────────────────────────────────────────────
   La page
──────────────────────────────────────────────────────────── */

export function MonEspace({ catalogue }: { catalogue: Catalogue }) {
  const { fiches, totaux, labels } = catalogue;
  const { utilisateur, profil, disponible } = useCompte();
  const mounted = useMounted();

  // Une synchronisation peut faire arriver des révisions d'un autre appareil
  // pendant qu'on regarde la page : on relit quand le magasin le signale.
  const [, relire] = useReducer((n: number) => n + 1, 0);
  useEffect(() => abonner(relire), []);

  const niveau = profil?.niveau ?? "m2";
  const base = `/reviser/${niveau}/epreuves/ecrites`;
  const semaines = semainesRestantes(profil?.date_concours);

  const plan = mounted ? computeDailyPlan(TOUS_LES_ITEMS, loadTrainerState(HUB_SLUG)) : null;
  const notions = mounted ? lireNotions() : null;
  const echeances = mounted ? lireEcheances() : null;
  const derniere = mounted ? lireDerniereActivite() : null;
  const travaillees = mounted ? lireFichesTravaillees(utilisateur?.id ?? null) : null;
  const tentatives = mounted ? lireTentatives(utilisateur?.id ?? null) : null;

  const compte: Record<EtatMaitrise, number> = { acquis: 0, "a-consolider": 0, "pas-encore": 0 };
  notions?.forEach((n) => (compte[n.etat] += 1));
  const totalNotions = notions?.length ?? 0;

  const aReprendre = (notions ?? [])
    .filter((n) => n.jauge.tentes > 0 && n.etat !== "acquis")
    .sort((a, b) => a.jauge.ratio - b.jauge.ratio);

  const aDecouvrir = (notions ?? []).find((n) => n.jauge.tentes === 0);
  const nbNonCommencees = compte["pas-encore"];
  const rythme = semaines && semaines > 0 && nbNonCommencees > 0 ? Math.ceil(nbNonCommencees / semaines) : null;

  // Agrégation par PARTIE d'épreuve : c'est le découpage du concours, donc
  // celui qui parle au candidat. Les parties viennent du catalogue, pas d'une
  // liste recopiée ici qui dériverait au premier changement de programme.
  const parties = new Map<string, { acquis: number; enCours: number; total: number }>();
  for (const n of notions ?? []) {
    const partie = fiches[n.slug]?.partie ?? "Autres";
    const ligne = parties.get(partie) ?? { acquis: 0, enCours: 0, total: 0 };
    ligne.total += 1;
    if (n.etat === "acquis") ligne.acquis += 1;
    else if (n.etat === "a-consolider") ligne.enCours += 1;
    parties.set(partie, ligne);
  }

  const faibles = new Map<string, string>();
  for (const { tentative } of (tentatives ?? []).slice(0, 5)) {
    for (const f of tentative.faibles ?? []) if (!faibles.has(f.slug)) faibles.set(f.slug, f.label);
  }

  const maxEcheance = Math.max(1, ...(echeances ?? []).map((e) => e.nb));
  const jourSemaine = new Date().getDay();
  const derniereNote = tentatives?.[0]?.tentative;

  const parMatiere = MATIERES.map((matiere) => {
    const total = totaux[niveau]?.[matiere] ?? 0;
    const faites = [...(travaillees ?? [])].filter(
      (slug) => fiches[slug]?.matiere === matiere && fiches[slug]?.kind !== "methodo",
    ).length;
    return { matiere, total, faites };
  });

  return (
    <div className="bg-seyes flex-1">
      <div className="mx-auto max-w-5xl px-5 py-10 md:py-14">

        <header className="mb-7">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-primary lg:text-4xl">Mon espace</h1>
              <p className="mt-2 font-ui text-sm text-on-surface-variant">
                {profil?.niveau ? `Concours ${profil.niveau.toUpperCase()}` : "Votre plan de révision"}
                {rythme ? ` · ${nbNonCommencees} notions à ouvrir, environ ${rythme} par semaine` : ""}
              </p>
            </div>
            {utilisateur ? (
              <Link
                href="/compte"
                className="font-ui text-xs font-semibold text-on-surface-variant underline decoration-outline-variant decoration-2 underline-offset-4 transition-colors hover:text-primary"
              >
                Réglages du compte
              </Link>
            ) : null}
          </div>
          <div className="mt-4 h-px w-full bg-primary/20" />
        </header>

        {/* ── Chiffres clés ─────────────────────────────────────────── */}
        <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          <Tuile
            accent
            valeur={semaines ?? "—"}
            unite={semaines !== null ? (semaines > 1 ? "semaines" : "semaine") : undefined}
            libelle={semaines !== null ? "avant l'écrit" : "date non renseignée"}
          />
          <Tuile
            valeur={plan?.dueTotal ?? "—"}
            unite={plan ? "questions" : undefined}
            libelle="à réviser aujourd'hui"
          />
          <Tuile
            valeur={notions ? `${compte.acquis}` : "—"}
            unite={notions ? `/ ${totalNotions}` : undefined}
            libelle="notions acquises"
          />
          <Tuile
            valeur={derniereNote ? derniereNote.note : "—"}
            unite={derniereNote ? `/ ${derniereNote.maxNote ?? 20}` : undefined}
            libelle={derniereNote ? "dernier sujet blanc" : "aucun sujet blanc"}
          />
        </div>

        {!utilisateur && disponible ? (
          <div className="mb-6 rounded-xl border border-secondary/40 bg-secondary/5 p-5">
            <p className="font-ui text-sm leading-relaxed text-on-surface">
              Tout ce qui suit n&apos;est enregistré que sur cet appareil. Un cache vidé, un
              téléphone changé, et c&apos;est perdu.{" "}
              <Link href="/inscription" className="font-bold text-primary underline decoration-secondary decoration-2 underline-offset-4">
                Créez un compte
              </Link>{" "}
              pour que vos révisions vous suivent.
            </p>
          </div>
        ) : null}

        {/* ── Le plan ───────────────────────────────────────────────── */}
        <section className="bg-primary bg-seyes-dark mb-6 overflow-hidden rounded-xl p-6 shadow-copy md:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-ui text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
              À faire maintenant
            </h2>
            {plan && plan.dueTotal > 0 ? (
              <span className="font-ui text-[11px] font-bold uppercase tracking-[0.18em] text-secondary">
                Environ {Math.max(5, Math.min(15, plan.dueTotal))} minutes
              </span>
            ) : null}
          </div>
          <div className="mt-3 h-px w-full bg-white/20" />

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {plan === null ? (
              <p className="font-ui text-sm text-white/70">Chargement…</p>
            ) : (
              <>
                {plan.aRevoir > 0 ? (
                  <Action
                    principal
                    href={`${base}/francais/entrainement`}
                    titre="Reprendre vos révisions"
                    detail={`${plan.aRevoir} question${plan.aRevoir > 1 ? "s" : ""} arrive${plan.aRevoir > 1 ? "nt" : ""} à échéance`}
                  />
                ) : null}
                {aDecouvrir ? (
                  <Action
                    principal={plan.aRevoir === 0}
                    href={`${base}/francais/${aDecouvrir.slug}`}
                    titre="Découvrir une notion"
                    detail={fiches[aDecouvrir.slug]?.title ?? aDecouvrir.titre}
                  />
                ) : null}
                {aReprendre.length > 0 ? (
                  <Action
                    href={`${base}/francais/${aReprendre[0].slug}`}
                    titre="Consolider un point fragile"
                    detail={fiches[aReprendre[0].slug]?.title ?? aReprendre[0].titre}
                  />
                ) : null}
                {derniere && fiches[derniere.slug] ? (
                  <Action
                    href={`${base}/${fiches[derniere.slug].matiere}/${derniere.slug}`}
                    titre="Reprendre où vous en étiez"
                    detail={`${fiches[derniere.slug].title}, ${ilYA(derniere.quand)}`}
                  />
                ) : null}
                {plan.dueTotal === 0 && aReprendre.length === 0 && !aDecouvrir ? (
                  <p className="font-serif text-xl leading-snug text-white md:col-span-2">
                    Tout est à jour. C&apos;est le moment de vous mettre en conditions réelles
                    sur un sujet blanc.
                  </p>
                ) : null}
              </>
            )}
          </div>
        </section>

        {/* ── Grille d'analyse ──────────────────────────────────────── */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* Charge à venir */}
          <Panneau titre="Vos sept prochains jours">
            {echeances === null ? (
              <p className="font-ui text-sm text-on-surface-variant">Chargement…</p>
            ) : (
              <>
                <div className="flex items-end justify-between gap-2">
                  {echeances.map((e, i) => (
                    <div key={e.jour} className="flex min-w-0 flex-1 flex-col items-center gap-2">
                      <span className="font-ui text-xs font-bold text-on-surface-variant">
                        {e.nb > 0 ? e.nb : ""}
                      </span>
                      <span
                        className={`w-full rounded-t ${i === 0 ? "bg-primary" : "bg-primary/25"}`}
                        style={{ height: `${Math.max(4, (e.nb / maxEcheance) * 64)}px` }}
                        role="img"
                        aria-label={`${e.nb} question${e.nb > 1 ? "s" : ""}`}
                      />
                      <span className={`font-ui text-xs ${i === 0 ? "font-bold text-primary" : "text-on-surface-variant"}`}>
                        {INITIALES_JOURS[(jourSemaine + i + 6) % 7]}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 font-ui text-xs leading-relaxed text-on-surface-variant">
                  Chaque question revient à intervalle croissant : un jour, puis trois, une
                  semaine, un mois. C&apos;est ce qui fait tenir une notion jusqu&apos;au
                  concours plutôt que jusqu&apos;au lendemain.
                </p>
              </>
            )}
          </Panneau>

          {/* Avancement par matière */}
          <Panneau titre="Avancement par matière">
            {travaillees === null ? (
              <p className="font-ui text-sm text-on-surface-variant">Chargement…</p>
            ) : (
              <ul className="space-y-4">
                {parMatiere.map(({ matiere, total, faites }) => (
                  <li key={matiere}>
                    <Link href={`${base}/${matiere}`} className="block transition-opacity hover:opacity-70">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-ui text-sm font-semibold text-on-surface">{labels[matiere]}</span>
                        <span className="font-ui text-xs text-on-surface-variant">
                          {total === 0 ? "bientôt" : `${faites} / ${total} entamées`}
                        </span>
                      </div>
                      <span className="mt-1.5 flex h-2 w-full overflow-hidden rounded-full bg-base-300">
                        <span
                          className="bg-primary transition-[width] duration-500"
                          style={{ width: total > 0 ? `${(faites / total) * 100}%` : "0%" }}
                        />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </Panneau>

          {/* Maîtrise par partie d'épreuve */}
          <Panneau titre="Par partie de l'épreuve de français">
            {notions === null ? (
              <p className="font-ui text-sm text-on-surface-variant">Chargement…</p>
            ) : (
              <>
                <ul className="space-y-4">
                  {[...parties.entries()].map(([partie, l]) => (
                    <li key={partie}>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-ui text-sm font-semibold text-on-surface">{partie}</span>
                        <span className="font-ui text-xs text-on-surface-variant">
                          {l.acquis} / {l.total} acquises
                        </span>
                      </div>
                      <div className="mt-1.5">
                        <BarreEtats acquis={l.acquis} enCours={l.enCours} total={l.total} hauteur="h-2" />
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-outline-variant/40 pt-4">
                  {([
                    { etat: "acquis" as const, mot: "acquises" },
                    { etat: "a-consolider" as const, mot: "en cours" },
                    { etat: "pas-encore" as const, mot: "pas commencées" },
                  ]).map(({ etat, mot }) => (
                    <span key={etat} className="flex items-baseline gap-2 font-ui text-xs text-on-surface-variant">
                      <span className={`h-2 w-2 shrink-0 rounded-full ${ETAT_STYLE[etat].dot}`} />
                      <strong className="text-sm text-on-surface">{compte[etat]}</strong> {mot}
                    </span>
                  ))}
                </div>
              </>
            )}
          </Panneau>

          {/* Sujets blancs */}
          <Panneau titre="Vos sujets blancs">
            {tentatives === null ? (
              <p className="font-ui text-sm text-on-surface-variant">Chargement…</p>
            ) : tentatives.length === 0 ? (
              <p className="font-ui text-sm leading-relaxed text-on-surface-variant">
                Vous n&apos;en avez pas encore passé. C&apos;est pourtant le seul exercice qui
                teste la gestion du temps et l&apos;endurance, que les fiches ne travaillent pas.
              </p>
            ) : (
              <>
                <ul className="divide-y divide-outline-variant/40">
                  {tentatives.slice(0, 4).map(({ slug, tentative }) => (
                    <li key={`${slug}-${tentative.date}`} className="py-2.5 first:pt-0 last:pb-0">
                      <Link
                        href={`${base}/${fiches[slug]?.matiere ?? "francais"}/${slug}`}
                        className="flex items-center justify-between gap-4 transition-opacity hover:opacity-70"
                      >
                        <span className="min-w-0 flex-1">
                          <span className="block truncate font-ui text-sm font-semibold text-on-surface">
                            {fiches[slug]?.title ?? slug}
                          </span>
                          <span className="font-ui text-xs text-on-surface-variant">
                            {dateCourte(tentative.date)}
                          </span>
                        </span>
                        <span className="flex shrink-0 items-baseline gap-1 text-primary">
                          <span className="text-2xl font-bold leading-none">{tentative.note}</span>
                          <span className="font-ui text-xs text-on-surface-variant">
                            /&nbsp;{tentative.maxNote ?? 20}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                {faibles.size > 0 ? (
                  <div className="mt-5 border-t border-outline-variant/40 pt-4">
                    <p className="font-ui text-[11px] font-bold uppercase tracking-[0.16em] text-on-surface-variant">
                      Ce que vos copies signalent
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {[...faibles.entries()].slice(0, 6).map(([slug, label]) => (
                        <Link
                          key={slug}
                          href={`${base}/${fiches[slug]?.matiere ?? "francais"}/${slug}`}
                          className="rounded-full border border-secondary/40 bg-secondary/5 px-3.5 py-1 font-ui text-xs text-on-surface transition-colors hover:border-secondary hover:bg-secondary/10"
                        >
                          {fiches[slug]?.title ?? label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </>
            )}
          </Panneau>
        </div>

        {/* ── Détail : les 19 notions ───────────────────────────────── */}
        <Panneau
          titre="Toutes vos notions de français"
          className="mt-6"
          aside={
            <Link
              href={`${base}/francais/entrainement`}
              className="font-ui text-xs font-semibold text-on-surface-variant transition-colors hover:text-primary"
            >
              Aller au hub d&apos;entraînement
            </Link>
          }
        >
          {notions === null ? (
            <p className="font-ui text-sm text-on-surface-variant">Chargement…</p>
          ) : (
            <ul className="grid gap-x-8 gap-y-3 md:grid-cols-2">
              {notions.map((n) => {
                const { label, etat } = jaugeLabel(n.jauge);
                return (
                  <li key={n.slug}>
                    <Link
                      href={`${base}/francais/${n.slug}`}
                      className="flex items-center gap-3 transition-opacity hover:opacity-70"
                    >
                      <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${ETAT_STYLE[etat].dot}`} />
                      <span className="min-w-0 flex-1 truncate font-ui text-sm text-on-surface">
                        {fiches[n.slug]?.title ?? n.titre}
                      </span>
                      <span className={`shrink-0 font-ui text-xs font-semibold ${ETAT_STYLE[etat].text}`}>
                        {label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </Panneau>

        {/* ── Méthode ───────────────────────────────────────────────── */}
        <Panneau titre="La méthode de l'épreuve" className="mt-6">
          <div className="flex flex-wrap gap-2">
            {(["francais", "mathematiques"] as Matiere[]).map((matiere) => (
              <Link
                key={matiere}
                href={`${base}/${matiere}/methodologie-de-l-epreuve`}
                className="rounded-xl border border-primary/20 bg-white px-5 py-2.5 font-ui text-sm font-semibold text-primary transition-colors hover:bg-surface"
              >
                {labels[matiere]}
              </Link>
            ))}
          </div>
          <p className="mt-4 font-ui text-xs leading-relaxed text-on-surface-variant">
            Format, barème, durée, attendus du jury. À relire une fois en début de préparation,
            et une fois dans les jours qui précèdent l&apos;épreuve.
          </p>
        </Panneau>

        {!utilisateur && disponible ? (
          <p className="mt-8 text-center font-ui text-sm text-on-surface-variant">
            <Link href="/connexion" className="underline decoration-outline-variant decoration-2 underline-offset-4 transition-colors hover:text-primary">
              J&apos;ai déjà un compte
            </Link>
          </p>
        ) : null}

      </div>
    </div>
  );
}
