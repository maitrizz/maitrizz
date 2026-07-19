"use client";

import { useEffect, useState } from "react";
import { ETAT_STYLE, type EtatMaitrise } from "@/components/fiche/maitrise";
import type { Block, CorrectionItem, TrainerExercice } from "@/components/fiche/types";
import { BTN_PRIMARY, FEUILLE, FeuilleHeader, Kicker, Label, RichTextSobre, sansEmoji, splitTitle } from "../ui";

/* ──────────────────────────────────────────────────────────────────────────
   Versions « copie corrigée » des blocs INTERACTIFS d'une fiche notion.
   Même logique que les vrais composants (localStorage, révélation, jauges) mais
   réhabillées à la charte du proto : feuilles blanches, filets teal/terracotta,
   titres serif, libellés en petites capitales, aucun emoji. Isolé dans le proto :
   les composants réels (ExerciceBank, CorrigerCopies, MindmapLite…) ne bougent pas.
   ────────────────────────────────────────────────────────────────────────── */

/* Sélecteur de niveau : petits onglets rectangulaires (coins à peine adoucis),
   pas de pilules arrondies — trop « app » au milieu d'une page imprimée. */
const PILL_ON = "rounded-sm bg-secondary px-4 py-1.5 font-ui text-xs font-bold text-white transition-colors";
const PILL_OFF =
  "rounded-sm px-4 py-1.5 font-ui text-xs font-semibold text-on-surface-variant ring-1 ring-outline-variant/70 transition-colors hover:text-secondary hover:ring-secondary/40";

/* Panneau « extrait à analyser » / « copie de candidat » : bande de papier teintée. */
const EXTRAIT =
  "rounded-sm bg-primary/[0.045] px-4 py-3 font-serif text-[0.95em] leading-relaxed text-on-surface/85";

/* ── Corrigé : une ligne de correction, réhabillée sobre ──────────────────── */
function CorrectionLine({ item }: { item: CorrectionItem }) {
  switch (item.type) {
    case "line":
      return (
        <div className="flex items-baseline gap-2 text-[0.95em] leading-relaxed">
          {item.label && <span className="shrink-0 font-serif font-semibold text-primary">{item.label}</span>}
          <span className="text-on-surface/85"><RichTextSobre text={item.text} /></span>
        </div>
      );

    case "paragraph":
      return (
        <p className="text-[0.95em] leading-relaxed text-on-surface/85"><RichTextSobre text={item.text} /></p>
      );

    case "table":
      return (
        <div className="overflow-hidden rounded-sm ring-1 ring-outline-variant/50">
          <table className="w-full border-collapse text-left">
            {/* Tête façon imprimé : filet appuyé, pas d'aplat */}
            <thead>
              <tr className="border-b-2 border-primary/50">
                {item.headers.map((h, i) => (
                  <th key={i} className="px-3 py-2 font-ui text-[11px] font-bold uppercase tracking-[0.08em] text-primary">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {item.rows.map((row, i) => (
                <tr key={i} className="border-b border-outline-variant/30 last:border-0">
                  {row.map((cell, j) => (
                    <td key={j} className="px-3 py-2 align-top text-sm leading-relaxed text-on-surface/85">
                      <RichTextSobre text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "checklist":
      return (
        <ul className="flex flex-col gap-1.5">
          {item.items.map((entry, i) => (
            <li key={i} className="flex items-baseline gap-2 text-[0.95em] leading-relaxed">
              <span className={`shrink-0 font-bold ${entry.bad ? "text-error" : "text-secondary"}`}>
                {entry.bad ? "✗" : "✓"}
              </span>
              <span className="text-on-surface/85"><RichTextSobre text={entry.text} /></span>
            </li>
          ))}
        </ul>
      );

    case "note":
      return (
        <div className="rounded-r-sm border-l-[3px] border-secondary/50 bg-secondary/[0.05] px-3 py-2 text-[0.9em] leading-relaxed text-on-surface/85">
          <RichTextSobre text={item.text} />
        </div>
      );

    case "formulationCrpe":
      return (
        <div className="rounded-sm bg-primary/[0.04] px-3.5 py-3 ring-1 ring-primary/15">
          <Kicker>Formulation CRPE</Kicker>
          <div className="mt-1.5 flex flex-col gap-1.5 text-[0.95em] leading-relaxed text-on-surface/85">
            {item.text.split("\n").map((para, i) => (
              <p key={i}><RichTextSobre text={para} /></p>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

/* ── « Où j'en suis » : grille de petits carrés, un par exercice, façon grille
   de suivi cochée sur papier (remplace la barre arrondie qui glisse, trop
   « app »). Les carrés non tentés restent en creux (pointillés). ── */
function OuJenSuis({
  compte,
  total,
  synthese,
}: {
  compte: Record<EtatMaitrise, number>;
  total: number;
  synthese: { etat: EtatMaitrise; mot: string }[];
}) {
  const tentes = synthese.reduce((n, { etat }) => (etat === "pas-encore" ? n : n + compte[etat]), 0);
  return (
    <div>
      <Label>Où j&apos;en suis</Label>
      <div className="mt-2 flex flex-wrap items-center gap-1.5">
        {synthese.flatMap(({ etat }) =>
          Array.from({ length: compte[etat] }, (_, i) =>
            etat === "pas-encore" ? (
              <span key={`${etat}-${i}`} className="h-3 w-3 rounded-[2px] border border-dashed border-outline-variant" />
            ) : (
              <span key={`${etat}-${i}`} className={`h-3 w-3 rounded-[2px] ${ETAT_STYLE[etat].fill}`} />
            ),
          ),
        )}
        {tentes === 0 && (
          <span className="ml-1.5 font-ui text-xs text-on-surface-variant">
            {total} à faire — un carré se coche à chaque réponse
          </span>
        )}
      </div>
      {tentes > 0 && (
        <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1">
          {synthese.map(({ etat, mot }) => (
            <span key={etat} className="flex items-center gap-1.5 font-ui text-xs font-medium text-on-surface-variant">
              {etat === "pas-encore" ? (
                <span className="h-2 w-2 rounded-[2px] border border-dashed border-outline-variant" />
              ) : (
                <span className={`h-2 w-2 rounded-[2px] ${ETAT_STYLE[etat].dot}`} />
              )}
              {mot}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/* ═══ Mindmap allégée ═══════════════════════════════════════════════════════ */
type MindmapBlock = Extract<Block, { type: "mindmapLite" }>;

const BRANCH_ACCENT: Record<MindmapBlock["branches"][number]["variant"], string> = {
  blue: "border-l-primary/60",
  green: "border-l-secondary/60",
  yellow: "border-l-secondary/40",
  purple: "border-l-outline-variant",
};

export function ProtoMindmap({ block }: { block: MindmapBlock }) {
  // Vraie arborescence tracée en filets fins (esprit « copie »), pas une grille
  // de cartes : le nœud central en tête, une épine verticale, chaque branche
  // accrochée par un filet horizontal. La position spatiale des branches (le
  // long de l'épine) est stable, donc mémorisable ; l'ancien centre en aplat
  // sombre était le seul gros aplat de la page.
  return (
    <div className={`flex flex-col p-5 ${FEUILLE}`}>
      <div className="self-start rounded-sm border border-primary/40 bg-primary/[0.04] px-4 py-2.5">
        <div className="font-serif text-base font-bold text-primary">{sansEmoji(block.center.title)}</div>
        {block.center.subtitle && <div className="mt-0.5 font-ui text-xs text-on-surface-variant">{block.center.subtitle}</div>}
      </div>
      <div className="ml-5 flex flex-col gap-3 border-l border-primary/25 pb-1 pt-4">
        {block.branches.map((branch, i) => (
          <div key={i} className="relative pl-6">
            <span aria-hidden className="absolute left-0 top-[1.15rem] h-px w-6 bg-primary/25" />
            <div
              className={`rounded-sm border-l-[3px] bg-surface-container/40 px-4 py-3 ${BRANCH_ACCENT[branch.variant]} ${
                branch.dashed ? "border-dashed" : ""
              }`}
            >
              <div className="mb-1.5 font-serif text-sm font-bold text-primary">{sansEmoji(branch.title)}</div>
              <ul className="flex flex-col gap-1">
                {branch.lines.map((line, j) => (
                  <li key={j} className="text-xs leading-relaxed text-on-surface/75">{line}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══ Carte d'exercice (corrigé dépliable) ══════════════════════════════════ */
type ExerciceCardBlock = Extract<Block, { type: "exerciceCard" }>;

export function ProtoExerciceCard({ block }: { block: ExerciceCardBlock }) {
  const [open, setOpen] = useState(false);
  const { tag, title } = splitTitle(block.title);
  return (
    <div className={`overflow-hidden ${FEUILLE}`}>
      <FeuilleHeader tone="terracotta" tag={tag ?? "Exercice"} title={title} badge={block.badge} />

      {block.objectifTag && (
        <div className="border-b border-outline-variant/40 bg-surface-container/30 px-5 py-2">
          <Kicker>{block.objectifTag}</Kicker>
        </div>
      )}

      <div className="flex flex-col gap-3 p-5">
        {block.enonce && (
          <div className={EXTRAIT}><RichTextSobre text={block.enonce} /></div>
        )}
        {block.enonceCode && (
          <div className="overflow-x-auto rounded-sm bg-primary/[0.045] px-4 py-2.5 font-serif text-[0.95em] leading-loose text-on-surface/85">
            {block.enonceCode.map((line, i) => (
              <div key={i} className="whitespace-pre-wrap"><RichTextSobre text={line} /></div>
            ))}
          </div>
        )}

        <p className="font-serif text-[1em] font-semibold leading-relaxed text-on-surface"><RichTextSobre text={block.question} /></p>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center justify-between gap-2 self-start rounded-md px-1 py-1 text-left transition-colors hover:text-secondary"
        >
          <Kicker>Corrigé</Kicker>
          <span className={`text-secondary transition-transform ${open ? "rotate-180" : ""}`} aria-hidden>▾</span>
        </button>

        {open && (
          <div className="flex flex-col gap-2.5 rounded-r-sm border-l-[3px] border-secondary/50 bg-secondary/[0.04] py-3 pl-4 pr-3">
            {block.correction.map((item, i) => (
              <CorrectionLine key={i} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══ Banque d'exercices « Appliquer » ══════════════════════════════════════ */
type ExerciceBankBlock = Extract<Block, { type: "exerciceBank" }>;
type Rating = "ok" | "ko";

const DIFF_LABELS: Record<1 | 2 | 3, string> = { 1: "Fondamentaux", 2: "Concours", 3: "Expert" };
const DIFF_HINT: Record<1 | 2 | 3, string> = {
  1: "Pour démarrer en douceur, souvent un seul mot.",
  2: "Le niveau attendu le jour de l'épreuve.",
  3: "Pour se dépasser, au-delà de l'épreuve.",
};
const BANK_SYNTHESE: { etat: EtatMaitrise; mot: string }[] = [
  { etat: "acquis", mot: "Réussis" },
  { etat: "a-consolider", mot: "À retravailler" },
  { etat: "pas-encore", mot: "À faire" },
];

function bankKey(slug: string) {
  return `maitrizz:exos:${slug}`;
}
function loadRatings(slug: string): Record<string, Rating> {
  try {
    const raw = localStorage.getItem(bankKey(slug));
    return raw ? (JSON.parse(raw) as Record<string, Rating>) : {};
  } catch {
    return {};
  }
}
function saveRatings(slug: string, ratings: Record<string, Rating>) {
  try {
    localStorage.setItem(bankKey(slug), JSON.stringify(ratings));
  } catch {
    /* localStorage indisponible : on ignore */
  }
}

export function ProtoExerciceBank({ block, ficheSlug }: { block: ExerciceBankBlock; ficheSlug: string }) {
  const exercices = block.exercices;
  const [ratings, setRatings] = useState<Record<string, Rating>>({});
  const [level, setLevel] = useState<1 | 2 | 3>(1);

  useEffect(() => {
    setRatings(loadRatings(ficheSlug));
  }, [ficheSlug]);

  function rate(id: string, r: Rating) {
    setRatings((prev) => {
      const next = { ...prev };
      if (next[id] === r) delete next[id];
      else next[id] = r;
      saveRatings(ficheSlug, next);
      return next;
    });
  }

  const niveaux: (1 | 2 | 3)[] = [1, 2, 3];
  const list = exercices.filter((e) => e.difficulte === level);
  const ok = list.filter((e) => ratings[e.id] === "ok").length;
  const ko = list.filter((e) => ratings[e.id] === "ko").length;
  const todo = list.length - ok - ko;
  const compte: Record<EtatMaitrise, number> = { acquis: ok, "a-consolider": ko, "pas-encore": todo };

  return (
    <div className={`overflow-hidden ${FEUILLE}`}>
      <FeuilleHeader tone="terracotta" tag="Appliquer" />
      <div className="flex flex-col gap-5 p-5">
      <p className="text-[0.95em] leading-relaxed text-on-surface/80">
        Appliquez ce que vous venez d&apos;apprendre. Trois niveaux, des bases au niveau expert : pour chaque question, rédigez
        votre réponse, comparez-la au corrigé, puis auto-évaluez-vous. Peu d&apos;exercices, mais choisis, pour faire le point sur
        vos acquis et monter en difficulté à votre rythme.
      </p>

      <div className="flex flex-wrap gap-2">
        {niveaux.map((n) => {
          const count = exercices.filter((e) => e.difficulte === n).length;
          const active = level === n;
          return (
            <button key={n} type="button" onClick={() => setLevel(n)} className={active ? PILL_ON : PILL_OFF}>
              {DIFF_LABELS[n]}
              <span className={`ml-1.5 font-normal ${active ? "opacity-90" : "opacity-60"}`}>({count})</span>
            </button>
          );
        })}
      </div>
      <p className="-mt-1.5 font-ui text-xs text-on-surface-variant">{DIFF_HINT[level]}</p>

      <OuJenSuis compte={compte} total={list.length} synthese={BANK_SYNTHESE} />

      <div className="flex flex-col gap-3">
        {list.map((ex, i) => (
          <ProtoExerciceItem key={ex.id} index={i} ex={ex} rating={ratings[ex.id]} onRate={rate} />
        ))}
      </div>
      </div>
    </div>
  );
}

const STATUT_BORDER: Record<"ok" | "ko" | "todo", string> = {
  ok: "border-l-success",
  ko: "border-l-[#d99a3a]",
  todo: "border-l-outline-variant",
};

function ProtoExerciceItem({
  ex,
  index,
  rating,
  onRate,
}: {
  ex: TrainerExercice;
  index: number;
  rating: Rating | undefined;
  onRate: (id: string, r: Rating) => void;
}) {
  const [answer, setAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);

  const key = rating === "ok" ? "ok" : rating === "ko" ? "ko" : "todo";
  const statusLabel =
    rating === "ok"
      ? { txt: "réussi", cls: "text-success" }
      : rating === "ko"
        ? { txt: "à retravailler", cls: "text-[#a9761d]" }
        : { txt: "à faire", cls: "text-on-surface-variant/60" };

  return (
    <div className={`flex flex-col gap-3 rounded-md border border-l-4 border-outline-variant/50 ${STATUT_BORDER[key]} bg-white px-4 py-4`}>
      <div className="flex items-center gap-2">
        <Label>Exercice {index + 1}</Label>
        <span className={`ml-auto font-ui text-[11px] font-semibold ${statusLabel.cls}`}>{statusLabel.txt}</span>
      </div>

      {ex.enonce && (
        <div className={EXTRAIT}><RichTextSobre text={ex.enonce} /></div>
      )}
      <p className="font-serif text-[1em] font-semibold leading-relaxed text-on-surface"><RichTextSobre text={ex.question} /></p>

      <div className="flex flex-col gap-1.5">
        <label className="font-ui text-xs font-semibold text-on-surface-variant">Votre réponse</label>
        <textarea
          className="min-h-[96px] w-full rounded-sm border border-outline-variant/70 bg-white px-3 py-1.5 text-[0.95em] transition-colors focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary/40"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey && !revealed) {
              const before = e.currentTarget.value.slice(0, e.currentTarget.selectionStart ?? 0);
              if (before.endsWith("\n") && answer.trim() !== "") {
                e.preventDefault();
                setAnswer(answer.replace(/\n+$/, ""));
                setRevealed(true);
              }
            }
          }}
        />
      </div>

      {!revealed ? (
        <div className="flex flex-col gap-1.5 self-start">
          {/* Tant qu'il n'y a pas de réponse, le bouton est un contour neutre :
              un aplat terracotta délavé ressemblait à un bouton cassé. Il ne
              devient LE bouton plein qu'au moment où il est cliquable. */}
          <button
            type="button"
            disabled={answer.trim() === ""}
            onClick={() => setRevealed(true)}
            className={
              answer.trim() === ""
                ? "inline-flex cursor-not-allowed items-center justify-center rounded-md border border-outline-variant/70 px-4 py-2 font-ui text-xs font-bold text-on-surface-variant/50"
                : `${BTN_PRIMARY} !px-4 !py-2 text-xs`
            }
          >
            Voir le corrigé
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2.5 rounded-r-sm border-l-[3px] border-secondary/50 bg-secondary/[0.04] py-3 pl-4 pr-3">
            <div className="text-[0.95em] leading-relaxed text-on-surface/85">
              <span className="mr-1.5 font-ui text-[11px] font-bold uppercase tracking-[0.1em] text-secondary">Réponse type</span>
              <RichTextSobre text={ex.reponseType} />
            </div>
            {ex.explication.length > 0 && (
              <div className="flex flex-col gap-2 border-t border-secondary/15 pt-2.5">
                {ex.explication.map((item, i) => (
                  <CorrectionLine key={i} item={item} />
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => onRate(ex.id, "ko")}
              className={`flex-1 rounded-md border-2 px-4 py-2 font-ui text-sm font-semibold transition-colors ${
                rating === "ko" ? "border-[#d99a3a] bg-[#d99a3a]/10 text-[#a9761d]" : "border-outline-variant/60 hover:border-[#d99a3a]/50"
              }`}
            >
              À retravailler
            </button>
            <button
              type="button"
              onClick={() => onRate(ex.id, "ok")}
              className={`flex-1 rounded-md border-2 px-4 py-2 font-ui text-sm font-semibold transition-colors ${
                rating === "ok" ? "border-success bg-success/10 text-success" : "border-outline-variant/60 hover:border-success/50"
              }`}
            >
              Réussi
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══ Corriger des copies ═══════════════════════════════════════════════════ */
type CorrigerCopiesBlock = Extract<Block, { type: "corrigerCopies" }>;
type Copie = CorrigerCopiesBlock["copies"][number];
type Result = "ok" | "ko";

const COPIES_SYNTHESE: { etat: EtatMaitrise; mot: string }[] = [
  { etat: "acquis", mot: "Réussies" },
  { etat: "a-consolider", mot: "À revoir" },
  { etat: "pas-encore", mot: "Pas encore" },
];

function copiesKey(slug: string) {
  return `maitrizz:copies:${slug}`;
}
function loadResults(slug: string): Record<string, Result> {
  try {
    const raw = localStorage.getItem(copiesKey(slug));
    return raw ? (JSON.parse(raw) as Record<string, Result>) : {};
  } catch {
    return {};
  }
}
function saveResults(slug: string, results: Record<string, Result>) {
  try {
    localStorage.setItem(copiesKey(slug), JSON.stringify(results));
  } catch {
    /* localStorage indisponible : on ignore */
  }
}

export function ProtoCorrigerCopies({ block, ficheSlug }: { block: CorrigerCopiesBlock; ficheSlug: string }) {
  const copies = block.copies;
  const [results, setResults] = useState<Record<string, Result>>({});

  useEffect(() => {
    setResults(loadResults(ficheSlug));
  }, [ficheSlug]);

  function judge(id: string, correct: boolean) {
    setResults((prev) => {
      const next = { ...prev, [id]: correct ? ("ok" as const) : ("ko" as const) };
      saveResults(ficheSlug, next);
      return next;
    });
  }

  const ok = copies.filter((c) => results[c.id] === "ok").length;
  const ko = copies.filter((c) => results[c.id] === "ko").length;
  const todo = copies.length - ok - ko;
  const compte: Record<EtatMaitrise, number> = { acquis: ok, "a-consolider": ko, "pas-encore": todo };

  return (
    <div className={`overflow-hidden ${FEUILLE}`}>
      <FeuilleHeader tone="terracotta" tag="Corriger les copies" />
      <div className="flex flex-col gap-5 p-5">
        {block.intro && (
          <p className="text-[0.95em] leading-relaxed text-on-surface/80"><RichTextSobre text={block.intro} /></p>
        )}

        <OuJenSuis compte={compte} total={copies.length} synthese={COPIES_SYNTHESE} />

        <div className="flex flex-col gap-3">
          {copies.map((c, i) => (
            <ProtoCopieItem key={c.id} index={i} copie={c} result={results[c.id]} onJudge={judge} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProtoCopieItem({
  copie,
  index,
  result,
  onJudge,
}: {
  copie: Copie;
  index: number;
  result: Result | undefined;
  onJudge: (id: string, correct: boolean) => void;
}) {
  const [judged, setJudged] = useState<boolean | null>(null);
  const decided = judged !== null;
  const correct = decided && judged === copie.correcte;

  function judge(choice: boolean) {
    if (decided) return;
    setJudged(choice);
    onJudge(copie.id, choice === copie.correcte);
  }

  const key = result === "ok" ? "ok" : result === "ko" ? "ko" : "todo";
  const statusLabel =
    result === "ok"
      ? { txt: "réussie", cls: "text-success" }
      : result === "ko"
        ? { txt: "à revoir", cls: "text-[#a9761d]" }
        : { txt: "à voir", cls: "text-on-surface-variant/60" };

  function judgeBtn(choice: boolean, label: string) {
    const chosen = judged === choice;
    let cls = "border-outline-variant/60 hover:border-primary/50";
    if (decided && chosen) cls = correct ? "border-success bg-success/10 text-success" : "border-error bg-error/10 text-error";
    else if (decided) cls = "border-outline-variant/60 opacity-40";
    return (
      <button
        type="button"
        disabled={decided}
        onClick={() => judge(choice)}
        className={`flex-1 rounded-md border-2 px-4 py-2 font-ui text-sm font-semibold transition-colors ${cls}`}
      >
        {label}
      </button>
    );
  }

  return (
    <div className={`flex flex-col gap-3 rounded-md border border-l-4 border-outline-variant/50 ${STATUT_BORDER[key]} bg-white px-4 py-4`}>
      <div className="flex items-center">
        <Label>Copie de candidat nº {index + 1}</Label>
        <span className={`ml-auto font-ui text-[11px] font-semibold ${statusLabel.cls}`}>{statusLabel.txt}</span>
      </div>

      <div className={EXTRAIT}><RichTextSobre text={copie.copie} /></div>

      <p className="font-serif text-[1em] font-semibold text-on-surface">Cette analyse est-elle juste ?</p>
      <div className="flex gap-2">
        {judgeBtn(true, "C'est juste")}
        {judgeBtn(false, "À corriger")}
      </div>

      {decided && (
        <div className="flex flex-col gap-2.5">
          <p className={`font-serif text-[0.98em] font-bold ${correct ? "text-secondary" : "text-error"}`}>
            {correct ? "Bien vu." : "Raté."}
          </p>
          <div className="flex flex-col gap-2 rounded-r-sm border-l-[3px] border-primary/50 bg-primary/[0.04] py-3 pl-4 pr-3 text-[0.95em] leading-relaxed text-on-surface/85">
            <div><RichTextSobre text={copie.verdict} /></div>
            {copie.coteProf && (
              <div className="border-t border-primary/15 pt-2">
                <span className="mr-1 font-ui text-[11px] font-bold uppercase tracking-[0.1em] text-primary">Côté correcteur</span>
                <RichTextSobre text={copie.coteProf} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
