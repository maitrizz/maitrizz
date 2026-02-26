"use client";

import { useState } from "react";
import Link from "next/link";

export type Question = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
};

interface Props {
  questions: Question[];
  backHref: string;
  backLabel?: string;
}

export default function QCMInterface({
  questions,
  backHref,
  backLabel = "Retour",
}: Props) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [results, setResults] = useState<boolean[]>([]);
  const [finished, setFinished] = useState(false);

  const q = questions[current];
  const isAnswered = selected !== null;

  function handleSelect(idx: number) {
    if (isAnswered) return;
    setSelected(idx);
  }

  function handleNext() {
    const isCorrect = selected === q.correctIndex;
    const newResults = [...results, isCorrect];
    setResults(newResults);

    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setSelected(null);
    setResults([]);
    setFinished(false);
  }

  if (finished) {
    const score = results.filter(Boolean).length;
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="flex flex-col items-center gap-6 py-10">
        <div className="text-center">
          <div className="text-6xl font-bold text-primary mb-2">{pct}%</div>
          <p className="text-base-content/60">
            {score} bonne{score > 1 ? "s" : ""} réponse{score > 1 ? "s" : ""}{" "}
            sur {questions.length}
          </p>
        </div>
        <div className="flex gap-3">
          <button onClick={handleRestart} className="btn btn-outline">
            Recommencer
          </button>
          <Link href={backHref} className="btn btn-ghost">
            {backLabel}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Progression */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-base-content/50 shrink-0">
          {current + 1} / {questions.length}
        </span>
        <div className="flex-1 bg-base-300 rounded-full h-1.5">
          <div
            className="bg-primary h-1.5 rounded-full transition-all"
            style={{ width: `${(current / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="card bg-base-200 border border-base-300 p-6">
        <p className="text-base font-medium text-base-content leading-relaxed">
          {q.question}
        </p>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-2">
        {q.options.map((opt, idx) => {
          const isCorrect = idx === q.correctIndex;
          const isSelected = idx === selected;
          let cls =
            "btn btn-outline w-full justify-start text-left h-auto py-3 px-4 font-normal whitespace-normal";

          if (isAnswered) {
            if (isCorrect)
              cls +=
                " !border-success !text-success bg-success/10 hover:bg-success/10";
            else if (isSelected)
              cls +=
                " !border-error !text-error bg-error/10 hover:bg-error/10";
            else cls += " opacity-40";
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={cls}
              disabled={isAnswered && !isSelected && !isCorrect}
            >
              <span className="font-bold mr-3 shrink-0">
                {String.fromCharCode(65 + idx)}.
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Explication + Suivant */}
      {isAnswered && (
        <div className="flex flex-col gap-3">
          {q.explanation && (
            <div
              className={`rounded-lg p-4 text-sm leading-relaxed ${
                selected === q.correctIndex
                  ? "bg-success/10 text-success"
                  : "bg-error/10 text-error"
              }`}
            >
              💡 {q.explanation}
            </div>
          )}
          <button onClick={handleNext} className="btn btn-primary w-full">
            {current < questions.length - 1
              ? "Question suivante →"
              : "Voir les résultats"}
          </button>
        </div>
      )}
    </div>
  );
}
