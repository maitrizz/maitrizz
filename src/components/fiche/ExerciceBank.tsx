"use client";

import { useEffect, useState } from "react";
import { RichText } from "./richtext";
import { CorrectionLine } from "./ExerciceCard";
import { ETAT_STYLE, type EtatMaitrise } from "./maitrise";
import type { Block, TrainerExercice } from "./types";

// « Appliquer » : PAS un trainer. On choisit un niveau (Fondamentaux / Concours /
// Expert), et tous les exercices de ce niveau s'affichent à la suite, en cartes.
// Chaque carte propose un encart de réponse, le corrigé à dévoiler, et une
// auto-évaluation. La vue d'ensemble (statut par carte + bandeau) montre ce qui pèche
// et sur quels exercices revenir. La répétition pour l'automatisme, elle, est le rôle
// du trainer (hub), pas d'ici.
// NB : on n'affiche PAS l'objectif (savoir-faire) sur la carte : ce serait révéler la
// réponse. La donnée `savoirFaire` reste en coulisses (suivi, hub).

type ExerciceBankData = Extract<Block, { type: "exerciceBank" }>;
type Rating = "ok" | "ko";

const DIFF_LABELS: Record<1 | 2 | 3, string> = {
  1: "Fondamentaux",
  2: "Concours",
  3: "Expert",
};
const DIFF_HINT: Record<1 | 2 | 3, string> = {
  1: "Pour démarrer en douceur, souvent un seul mot.",
  2: "Le niveau attendu le jour de l'épreuve.",
  3: "Pour se dépasser, au-delà de l'épreuve.",
};

// Synthèse « Où j'en suis » : même langage que l'encart de maîtrise et le tableau du hub.
// réussis = acquis (vert) · à retravailler = à consolider (ambre adouci) · à faire = gris.
const SYNTHESE: { etat: EtatMaitrise; mot: string }[] = [
  { etat: "acquis", mot: "Réussis" },
  { etat: "a-consolider", mot: "À retravailler" },
  { etat: "pas-encore", mot: "À faire" },
];

function storageKey(slug: string) {
  return `maitrizz:exos:${slug}`;
}
function loadRatings(slug: string): Record<string, Rating> {
  try {
    const raw = localStorage.getItem(storageKey(slug));
    return raw ? (JSON.parse(raw) as Record<string, Rating>) : {};
  } catch {
    return {};
  }
}
function saveRatings(slug: string, ratings: Record<string, Rating>) {
  try {
    localStorage.setItem(storageKey(slug), JSON.stringify(ratings));
  } catch {
    // localStorage indisponible : on ignore
  }
}

export function ExerciceBank({ block, ficheSlug }: { block: ExerciceBankData; ficheSlug: string }) {
  const exercices = block.exercices;

  const [ratings, setRatings] = useState<Record<string, Rating>>({});
  const [level, setLevel] = useState<1 | 2 | 3>(1);

  useEffect(() => {
    setRatings(loadRatings(ficheSlug));
  }, [ficheSlug]);

  function rate(id: string, r: Rating) {
    setRatings((prev) => {
      const next = { ...prev };
      if (next[id] === r) delete next[id]; // re-cliquer le même statut l'annule
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
  const total = list.length;
  const compte: Record<EtatMaitrise, number> = { acquis: ok, "a-consolider": ko, "pas-encore": todo };

  return (
    <div className="rounded-xl border border-base-300 bg-base-100 px-5 py-5 flex flex-col gap-4">
      <p className="text-sm text-base-content/70 leading-relaxed">
        Appliquez ce que vous venez d&apos;apprendre. Trois niveaux, des bases au niveau expert : pour chaque question, rédigez
        votre réponse, comparez-la au corrigé, puis auto-évaluez-vous. Peu d&apos;exercices, mais choisis, pour faire le point sur
        vos acquis et monter en difficulté à votre rythme.
      </p>

      {/* Choix du niveau */}
      <div className="flex flex-wrap gap-2">
        {niveaux.map((n) => {
          const count = exercices.filter((e) => e.difficulte === n).length;
          const active = level === n;
          return (
            <button
              key={n}
              type="button"
              onClick={() => setLevel(n)}
              className={`rounded-lg border-2 px-3.5 py-2 text-sm font-bold transition-colors ${
                active
                  ? "border-secondary bg-secondary text-secondary-content"
                  : "border-base-300 bg-base-100 text-base-content/70 hover:border-secondary/50"
              }`}
            >
              {DIFF_LABELS[n]}
              <span className={`ml-1.5 text-xs font-normal ${active ? "opacity-90" : "opacity-50"}`}>({count})</span>
            </button>
          );
        })}
      </div>
      <p className="text-xs text-base-content/50 -mt-1.5">{DIFF_HINT[level]}</p>

      {/* « Où j'en suis » : barre segmentée + pastilles, identiques à l'encart de maîtrise. */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-base-content/40">Où j&apos;en suis</h3>
        <div className="mt-2 flex h-2.5 w-full gap-1">
          {total > 0 &&
            SYNTHESE.map(({ etat }) =>
              compte[etat] > 0 ? (
                <div
                  key={etat}
                  className={`rounded-full ${ETAT_STYLE[etat].fill} transition-[width] duration-500`}
                  style={{ width: `${(compte[etat] / total) * 100}%` }}
                />
              ) : null,
            )}
        </div>
        <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1">
          {SYNTHESE.map(({ etat, mot }) => (
            <span key={etat} className="flex items-center gap-1.5 text-xs font-medium text-base-content/60">
              <span className={`h-2 w-2 rounded-full ${ETAT_STYLE[etat].dot}`} />
              {mot}
            </span>
          ))}
        </div>
      </div>

      {/* Les exercices du niveau, à la suite */}
      <div className="flex flex-col gap-3">
        {list.map((ex, i) => (
          <ExerciceItem key={ex.id} index={i} ex={ex} rating={ratings[ex.id]} onRate={rate} />
        ))}
      </div>
    </div>
  );
}

function ExerciceItem({
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

  const statusBorder = rating === "ok" ? "border-l-success" : rating === "ko" ? "border-l-[#d99a3a]" : "border-l-base-300";
  const statusLabel =
    rating === "ok"
      ? { txt: "réussi", cls: "text-success" }
      : rating === "ko"
        ? { txt: "à retravailler", cls: "text-[#a9761d]" }
        : { txt: "à faire", cls: "text-base-content/40" };

  return (
    <div className={`rounded-lg border border-base-300 border-l-4 ${statusBorder} px-4 py-4 flex flex-col gap-3`}>
      {/* Numéro + statut (l'objectif n'est PAS affiché : il révélerait la réponse) */}
      <div className="flex items-center gap-2">
        <span className="text-[11px] font-bold uppercase tracking-wide text-base-content/50">Exercice {index + 1}</span>
        <span className={`ml-auto text-[11px] font-semibold ${statusLabel.cls}`}>{statusLabel.txt}</span>
      </div>

      {ex.enonce && (
        <div className="bg-neutral text-neutral-content rounded-lg px-4 py-2.5 text-sm leading-relaxed">
          <RichText text={ex.enonce} />
        </div>
      )}
      <p className="text-sm font-semibold leading-relaxed">
        <RichText text={ex.question} />
      </p>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold text-base-content/60 flex items-center justify-between gap-2">
          <span>Votre réponse</span>
          {!revealed && <span className="font-normal text-base-content/40">Entrée : à la ligne · deux fois : valider</span>}
        </label>
        <textarea
          className="textarea textarea-bordered w-full text-sm leading-relaxed min-h-[80px]"
          placeholder="Rédigez votre analyse : la nature, puis la justification (le test appliqué)…"
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
          <button
            type="button"
            disabled={answer.trim() === ""}
            onClick={() => setRevealed(true)}
            className="btn btn-secondary btn-sm disabled:opacity-50"
          >
            Voir le corrigé
          </button>
          {answer.trim() === "" && (
            <span className="text-xs text-base-content/40">Rédigez d&apos;abord votre réponse, même imparfaite.</span>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {/* Le corrigé : réponse-modèle, puis détail seulement s'il ajoute quelque chose. */}
          <div className="rounded-lg border border-secondary/30 bg-secondary/5 px-4 py-3 flex flex-col gap-2.5">
            <div className="text-sm leading-relaxed">
              <span className="text-[11px] font-bold uppercase tracking-wide text-secondary mr-1.5">Réponse type</span>
              <RichText text={ex.reponseType} />
            </div>
            {ex.explication.length > 0 && (
              <div className="flex flex-col gap-2 text-sm border-t border-secondary/15 pt-2.5 text-base-content/80">
                {ex.explication.map((item, i) => (
                  <CorrectionLine key={i} item={item} />
                ))}
              </div>
            )}
          </div>

          {/* Auto-évaluation : alimente la vue d'ensemble. */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => onRate(ex.id, "ko")}
              className={`flex-1 rounded-lg border-2 px-4 py-2 text-sm font-semibold transition-colors ${
                rating === "ko" ? "border-[#d99a3a] bg-[#d99a3a]/10 text-[#a9761d]" : "border-base-300 hover:border-[#d99a3a]/40"
              }`}
            >
              À retravailler
            </button>
            <button
              type="button"
              onClick={() => onRate(ex.id, "ok")}
              className={`flex-1 rounded-lg border-2 px-4 py-2 text-sm font-semibold transition-colors ${
                rating === "ok" ? "border-success bg-success/10 text-success" : "border-base-300 hover:border-success/40"
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
