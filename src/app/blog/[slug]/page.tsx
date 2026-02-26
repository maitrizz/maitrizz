import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "../data";
import type { Article } from "../data";

// ── Schémas visuels ───────────────────────────────────────────────────────────

function ConcoursTypesSchema() {
  const voies = [
    {
      id: "externe",
      emoji: "🎓",
      label: "Concours Externe",
      badgeClass: "badge-primary",
      borderClass: "border-primary/30",
      bgClass: "bg-primary/5",
      condBg: "bg-primary/10",
      audience: "Étudiants & diplômés",
      condition: "Bac +3 minimum (licence ou équivalent)",
      note: "Voie principale pour les jeunes diplômés",
    },
    {
      id: "interne",
      emoji: "🏛️",
      label: "Concours Interne",
      badgeClass: "badge-secondary",
      borderClass: "border-secondary/30",
      bgClass: "bg-secondary/5",
      condBg: "bg-secondary/10",
      audience: "Agents de la fonction publique",
      condition: "3 ans minimum de service dans le secteur public",
      note: "Valorise l'expérience dans l'Éducation nationale",
    },
    {
      id: "troisieme",
      emoji: "💼",
      label: "Troisième Voie",
      badgeClass: "badge-accent",
      borderClass: "border-accent/30",
      bgClass: "bg-accent/5",
      condBg: "bg-accent/10",
      audience: "Salariés & indépendants",
      condition: "5 ans d'expérience professionnelle dans le privé",
      note: "Idéale pour les reconversions professionnelles",
    },
  ];

  return (
    <div className="my-8 rounded-2xl border-2 border-base-200 bg-base-50 p-5 md:p-7">
      {/* Nœud central */}
      <div className="flex justify-center mb-1">
        <div className="bg-primary text-primary-content rounded-xl px-5 py-2.5 text-center shadow-md">
          <p className="font-bold">CRPE — Concours de Recrutement des Professeurs des Écoles</p>
          <p className="text-xs text-primary-content/70 mt-0.5">3 voies d&apos;accès selon votre profil</p>
        </div>
      </div>

      {/* Connecteur vers les cartes */}
      <div className="flex justify-center">
        <div className="w-px h-5 bg-base-300" />
      </div>
      <div className="hidden md:flex items-center justify-between px-[16.5%] mb-0">
        <div className="w-px h-4 bg-base-300" />
        <div className="flex-1 h-px bg-base-300 -mt-4" />
        <div className="w-px h-4 bg-base-300" />
        <div className="flex-1 h-px bg-base-300 -mt-4" />
        <div className="w-px h-4 bg-base-300" />
      </div>

      {/* Les 3 voies */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {voies.map((v) => (
          <div
            key={v.id}
            className={`rounded-xl border-2 ${v.borderClass} ${v.bgClass} p-4 text-center flex flex-col gap-2`}
          >
            <div className="text-3xl">{v.emoji}</div>
            <span className={`badge ${v.badgeClass} mx-auto font-semibold`}>{v.label}</span>
            <p className="text-sm font-semibold text-base-content">{v.audience}</p>
            <div className="divider my-0 text-xs text-base-content/40">Condition d&apos;accès</div>
            <p className={`text-xs text-base-content/70 ${v.condBg} rounded-lg px-3 py-2`}>
              {v.condition}
            </p>
            <p className="text-xs text-base-content/40 italic">{v.note}</p>
          </div>
        ))}
      </div>

      {/* Connecteur vers le résultat */}
      <div className="hidden md:flex items-center justify-between px-[16.5%] mt-0">
        <div className="w-px h-4 bg-base-300" />
        <div className="flex-1 h-px bg-base-300 mt-4" />
        <div className="w-px h-4 bg-base-300" />
        <div className="flex-1 h-px bg-base-300 mt-4" />
        <div className="w-px h-4 bg-base-300" />
      </div>
      <div className="flex justify-center md:mt-0 mt-3">
        <div className="w-px h-5 bg-base-300" />
      </div>

      {/* Résultat commun */}
      <div className="flex justify-center">
        <div className="bg-base-200 border border-base-300 rounded-2xl px-5 py-4 text-center w-full max-w-2xl">
          <p className="font-bold text-sm text-base-content mb-3">Admission au concours</p>
          <div className="flex flex-col items-stretch gap-2">
            {/* Étape 1 : Formation en alternance */}
            <div className="bg-primary/8 border border-primary/25 rounded-xl px-3 py-2.5 flex items-center gap-3">
              <div className="flex-1 text-left">
                <p className="text-xs font-bold text-primary leading-tight mb-0.5">Formation en alternance</p>
                <p className="text-xs text-base-content/55 leading-snug">Master M2E à l&apos;INSPE</p>
              </div>
              <div className="flex-shrink-0 flex flex-col gap-1">
                <span className="badge badge-sm badge-primary badge-outline font-semibold">Année 1</span>
                <span className="badge badge-sm badge-primary badge-outline font-semibold">Année 2</span>
              </div>
            </div>

            {/* Flèche */}
            <div className="flex justify-center">
              <svg viewBox="0 0 20 20" className="w-5 h-5 text-base-content/25 flex-shrink-0 rotate-90">
                <path d="M4 10h10M10 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Étape 2 : Professeur des Écoles */}
            <div className="bg-success/10 border border-success/30 rounded-xl px-3 py-2.5 text-left">
              <p className="text-xs font-bold text-success leading-tight mb-0.5">Professeur des Écoles</p>
              <p className="text-xs text-base-content/55 leading-snug">Titularisation après le M2</p>
              <p className="text-xs text-base-content/40 leading-snug mt-0.5">Fonctionnaire titulaire</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReformeSchema() {
  type RowStyle = "muted" | "primary" | "success";
  interface Step {
    label: string;
    sub: string;
    style: RowStyle;
    crpeAfter?: boolean;
  }

  const avant: Step[] = [
    { label: "Licence", sub: "L1 · L2 · L3", style: "muted" },
    { label: "Master MEEF", sub: "1ère année", style: "muted" },
    { label: "Master MEEF", sub: "2ème année", style: "muted", crpeAfter: true },
    { label: "PE stagiaire", sub: "T0 — 1 an", style: "muted" },
    { label: "Titularisation", sub: "Professeur des Écoles", style: "muted" },
  ];

  const apres: Step[] = [
    { label: "Licence", sub: "L1 · L2 · L3", style: "primary", crpeAfter: true },
    { label: "Master M2E", sub: "1ère année", style: "primary" },
    { label: "Master M2E", sub: "2ème année", style: "primary" },
    { label: "PE stagiaire", sub: "T0 — 1 an", style: "success" },
    { label: "Titularisation", sub: "Professeur des Écoles", style: "success" },
  ];

  const stepClass: Record<RowStyle, string> = {
    muted: "bg-base-200 border-base-300 text-base-content/50",
    primary: "bg-primary/10 border-primary/40 text-base-content",
    success: "bg-success/10 border-success/40 text-base-content",
  };

  function Arrow({ style }: { style: RowStyle }) {
    return (
      <span className={`text-lg font-bold flex-shrink-0 ${style === "muted" ? "text-base-content/25" : "text-primary/50"}`}>
        →
      </span>
    );
  }

  function CrpeArrow({ variant }: { variant: "muted" | "new" }) {
    const isMuted = variant === "muted";
    return (
      <div className={`flex flex-col items-center gap-1 flex-shrink-0 px-1 ${isMuted ? "opacity-75" : ""}`}>
        <span className={`text-xs font-bold px-2.5 py-1 rounded-lg leading-tight shadow-sm ${isMuted ? "bg-base-300 text-base-content/60 border border-base-400/40" : "bg-primary text-primary-content shadow-md shadow-primary/20 ring-2 ring-primary/20 ring-offset-1"}`}>
          CRPE
        </span>
        <svg viewBox="0 0 22 10" className={`w-10 h-4 ${isMuted ? "text-base-content/40" : "text-primary/80"}`}>
          <path d="M2 5h15M13 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  function StepBox({ step }: { step: Step }) {
    return (
      <div className="flex-shrink-0">
        <div className={`border-2 rounded-xl px-3 py-2 text-center min-w-[90px] ${stepClass[step.style]}`}>
          <p className="text-xs font-semibold leading-tight">{step.label}</p>
          <p className="text-xs opacity-60 mt-0.5 leading-tight">{step.sub}</p>
        </div>
      </div>
    );
  }

  function renderSteps(steps: Step[], crpeVariant: "muted" | "new") {
    return steps.map((step, i) => (
      <React.Fragment key={i}>
        {i > 0 && (
          steps[i - 1].crpeAfter
            ? <CrpeArrow variant={crpeVariant} />
            : <Arrow style={step.style === "muted" ? "muted" : step.style === "success" ? "success" : "primary"} />
        )}
        <StepBox step={step} />
      </React.Fragment>
    ));
  }

  return (
    <div className="my-8 rounded-2xl border-2 border-base-200 overflow-hidden not-prose">
      {/* En-tête */}
      <div className="bg-base-200 px-5 py-3 text-center border-b border-base-300">
        <p className="font-bold text-base-content">La réforme du CRPE 2026 en un coup d&apos;œil</p>
        <p className="text-xs text-base-content/50 mt-0.5">Évolution du parcours pour devenir professeur des écoles</p>
      </div>

      {/* Ligne AVANT */}
      <div className="px-5 py-5 bg-base-100 border-b border-base-200">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-base-content/40 bg-base-200 rounded-lg px-2.5 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Avant 2026 — Ancien parcours
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 gap-y-5">
          {renderSteps(avant, "muted")}
        </div>
      </div>

      {/* Ligne APRÈS */}
      <div className="px-5 py-5 bg-primary/5">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/15 rounded-lg px-2.5 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Dès 2026 — Nouveau parcours
          </span>
          <span className="text-xs text-primary/60 font-medium">Le CRPE avance de 2 ans !</span>
        </div>
        <div className="flex flex-wrap items-center gap-2 gap-y-5">
          {renderSteps(apres, "new")}
        </div>
      </div>

      {/* Notice transition */}
      <div className="bg-warning/10 border-t border-warning/30 px-5 py-3 flex items-start gap-2.5">
        <span className="badge badge-warning badge-sm mt-0.5 flex-shrink-0">2026 – 2027</span>
        <p className="text-xs text-base-content/65 leading-relaxed">
          <strong>Période de transition :</strong> les deux concours (L3 et M2) coexistent pendant deux ans avant la suppression définitive du concours de M2.
        </p>
      </div>
    </div>
  );
}

function EpreuvesTable() {
  type CardChange = "fusionnée" | "identique" | "modifiée" | "à confirmer";

  interface OldCard {
    label: string;
    desc: string;
  }

  interface NewCard {
    label: string;
    desc: string;
    change: CardChange;
  }

  interface EpreuveRow {
    old: OldCard[];
    newCard: NewCard;
  }

  interface EpreuveGroup {
    group: string;
    rows: EpreuveRow[];
  }

  const groups: EpreuveGroup[] = [
    {
      group: "Épreuves écrites",
      rows: [
        {
          old: [
            { label: "Français", desc: "Conjugaison, grammaire, lexique, orthographe, rédaction" },
            { label: "Mathématiques", desc: "Résolution de problèmes, raisonnement" },
          ],
          newCard: {
            label: "Français + Mathématiques",
            desc: "Une seule épreuve combinée réunissant les deux matières",
            change: "fusionnée",
          },
        },
        {
          old: [
            { label: "Disciplinaire", desc: "Au choix : histoire-géo/EMC, sciences/technologie ou arts" },
          ],
          newCard: {
            label: "Disciplinaire",
            desc: "4 domaines au choix : histoire-géo/EMC, sciences, arts ou langue vivante",
            change: "modifiée",
          },
        },
      ],
    },
    {
      group: "Épreuves orales",
      rows: [
        {
          old: [
            { label: "Leçon", desc: "Un sujet en français ET un sujet en mathématiques" },
          ],
          newCard: {
            label: "Leçon",
            desc: "Exposé + entretien en français ou mathématiques (au choix du candidat)",
            change: "modifiée",
          },
        },
        {
          old: [
            { label: "EPS / Motivation / CSE", desc: "EPS, motivation, parcours et connaissance du système éducatif" },
          ],
          newCard: {
            label: "EPS / Motivation / CSE",
            desc: "Inchangée par rapport à l'ancien concours",
            change: "identique",
          },
        },
      ],
    },
  ];

  const changeBadge: Record<CardChange, { cls: string; label: string }> = {
    "fusionnée":   { cls: "badge-warning", label: "Fusion" },
    "identique":   { cls: "badge-success", label: "Identique" },
    "modifiée":    { cls: "badge-info",    label: "Modifiée" },
    "à confirmer": { cls: "badge-ghost",   label: "À confirmer" },
  };

  const changeBorder: Record<CardChange, string> = {
    "fusionnée":   "border-warning/40 bg-warning/5",
    "identique":   "border-success/30 bg-success/5",
    "modifiée":    "border-primary/30 bg-primary/5",
    "à confirmer": "border-base-300 bg-base-100",
  };

  return (
    <div className="my-8 not-prose overflow-x-auto rounded-2xl border-2 border-base-200">
      <div className="min-w-[540px]">
        {/* Column headers */}
        <div className="grid grid-cols-[1fr_40px_1fr]">
          <div className="px-4 py-3 bg-base-200 flex items-center gap-2">
            <span className="text-xs font-bold text-base-content/50 uppercase tracking-wide">Ancien CRPE</span>
            <span className="badge badge-ghost badge-sm">bac+5</span>
          </div>
          <div className="bg-base-200" />
          <div className="px-4 py-3 bg-primary/10 flex items-center gap-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Nouveau CRPE</span>
            <span className="badge badge-primary badge-sm">bac+3</span>
          </div>
        </div>

        {/* Groups */}
        {groups.map((group, gi) => (
          <div key={gi}>
            {/* Group label */}
            <div className="px-4 py-2 bg-base-200/50 border-t border-base-200">
              <span className="text-xs font-bold text-base-content/50 uppercase tracking-wider">{group.group}</span>
            </div>

            {/* Rows */}
            {group.rows.map((row, ri) => (
              <div key={ri} className="grid grid-cols-[1fr_40px_1fr] border-t border-base-100">
                {/* Old card(s) */}
                <div className="p-3 flex flex-col gap-2 justify-center">
                  {row.old.map((card, ci) => (
                    <div key={ci} className="rounded-xl border border-base-200 bg-base-100 px-3 py-2.5">
                      <p className="text-xs font-semibold text-base-content/45 mb-0.5">{card.label}</p>
                      <p className="text-xs text-base-content/35 leading-relaxed">{card.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center border-x border-base-100">
                  <svg viewBox="0 0 20 20" className="w-4 h-4 text-base-content/25 flex-shrink-0">
                    <path d="M4 10h10M10 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* New card */}
                <div className="p-3 flex flex-col justify-center">
                  <div className={`rounded-xl border-2 ${changeBorder[row.newCard.change]} px-3 py-2.5`}>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <p className="text-xs font-semibold text-base-content/80 leading-snug">{row.newCard.label}</p>
                      <span className={`badge badge-sm flex-shrink-0 ${changeBadge[row.newCard.change].cls}`}>
                        {changeBadge[row.newCard.change].label}
                      </span>
                    </div>
                    <p className="text-xs text-base-content/55 leading-relaxed">{row.newCard.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Objectif footer */}
        <div className="grid grid-cols-[1fr_40px_1fr] border-t-2 border-base-200 bg-base-200/40">
          <div className="px-4 py-3.5">
            <p className="text-xs font-bold text-base-content/40 uppercase tracking-wide mb-1">Objectif</p>
            <p className="text-xs text-base-content/50 leading-relaxed">
              Admission et classement pour nomination comme professeur des écoles stagiaire
            </p>
          </div>
          <div className="border-x border-base-200" />
          <div className="px-4 py-3.5 bg-primary/10">
            <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Objectif</p>
            <p className="text-xs text-primary/70 font-semibold leading-relaxed">
              Admission et entrée en master M2E
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const SCHEMAS: Record<string, React.ReactNode> = {
  "concours-types": <ConcoursTypesSchema />,
  "reforme-2026": <ReformeSchema />,
  "epreuves-table": <EpreuvesTable />,
};

const categoryColors: Record<Article["category"], string> = {
  Conseils: "badge-primary",
  Témoignages: "badge-accent",
  Guides: "badge-secondary",
  Actualités: "badge-info",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Gère le formatage inline : **bold**, *italic*, [lien](url)
function renderInline(text: string): React.ReactNode {
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
          return (
            <strong key={i} className="text-base-content font-semibold">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (
          part.startsWith("*") &&
          part.endsWith("*") &&
          !part.startsWith("**") &&
          part.length > 2
        ) {
          return <em key={i}>{part.slice(1, -1)}</em>;
        }
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          return (
            <a
              key={i}
              href={linkMatch[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary"
            >
              {linkMatch[1]}
            </a>
          );
        }
        return part || null;
      })}
    </>
  );
}

function renderContent(content: string): React.ReactNode[] {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;
  const k = () => key++;

  while (i < lines.length) {
    const trimmed = lines[i].trim();

    // Schéma visuel
    if (trimmed.startsWith(":::schema-")) {
      const schemaKey = trimmed.slice(":::schema-".length);
      const schema = SCHEMAS[schemaKey];
      if (schema) {
        elements.push(<React.Fragment key={k()}>{schema}</React.Fragment>);
      }
      i++;
      continue;
    }

    // Bloc de code
    if (trimmed.startsWith("```")) {
      i++;
      const codeLines: string[] = [];
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // ferme ```
      elements.push(
        <pre
          key={k()}
          className="bg-base-200 border border-base-300 rounded-xl p-4 text-sm overflow-x-auto mb-6 font-mono text-base-content/80 leading-relaxed"
        >
          {codeLines.join("\n")}
        </pre>
      );
      continue;
    }

    // Séparateur ---
    if (trimmed === "---") {
      elements.push(<div key={k()} className="divider my-2" />);
      i++;
      continue;
    }

    // Blockquote / callout
    if (trimmed.startsWith("> ")) {
      const bqLines: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith("> ") || lines[i].trim() === ">")) {
        const bqLine = lines[i].trim();
        bqLines.push(bqLine.startsWith("> ") ? bqLine.slice(2) : "");
        i++;
      }
      elements.push(
        <div key={k()} className="border-l-4 border-accent/60 bg-accent/5 rounded-r-xl px-5 py-4 my-6">
          {bqLines.map((line, idx) =>
            line ? (
              <p key={idx} className="text-sm text-base-content/75 leading-relaxed mb-1 last:mb-0">
                {renderInline(line)}
              </p>
            ) : null
          )}
        </div>
      );
      continue;
    }

    // Titre h2
    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={k()} className="text-xl font-bold text-base-content mt-10 mb-3">
          {trimmed.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    // Titre h3
    if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={k()} className="text-lg font-semibold text-base-content mt-7 mb-3">
          {trimmed.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    // Liste à puces
    if (trimmed.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <ul key={k()} className="list-disc list-inside space-y-1.5 mb-4 text-base-content/75">
          {items.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Liste numérotée
    if (/^\d+\.\s/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={k()} className="list-decimal list-inside space-y-2 mb-4 text-base-content/75">
          {items.map((item, idx) => (
            <li key={idx}>{renderInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Tableau
    if (trimmed.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        if (!lines[i].includes("---")) tableLines.push(lines[i]);
        i++;
      }
      const [header, ...rows] = tableLines;
      const headerCells = header
        .split("|")
        .filter(Boolean)
        .map((c) => c.trim());
      elements.push(
        <div key={k()} className="overflow-x-auto mb-6">
          <table className="table table-sm border border-base-200 rounded-lg w-full">
            <thead>
              <tr className="bg-base-200">
                {headerCells.map((cell, ci) => (
                  <th key={ci} className="text-base-content font-semibold">
                    {renderInline(cell)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className="border-t border-base-200">
                  {row
                    .split("|")
                    .filter(Boolean)
                    .map((cell, ci) => (
                      <td key={ci} className="text-base-content/75">
                        {renderInline(cell.trim())}
                      </td>
                    ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Ligne entièrement en gras (titre de sous-section ou question FAQ)
    if (trimmed.startsWith("**") && trimmed.endsWith("**") && trimmed.length > 4) {
      elements.push(
        <p key={k()} className="font-semibold text-base-content mb-2 mt-5">
          {trimmed.slice(2, -2)}
        </p>
      );
      i++;
      continue;
    }

    // Ligne vide — saut
    if (trimmed === "") {
      i++;
      continue;
    }

    // Paragraphe normal
    elements.push(
      <p key={k()} className="text-base-content/75 leading-relaxed mb-4">
        {renderInline(trimmed)}
      </p>
    );
    i++;
  }

  return elements;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const related = articles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-base-100">
      {/* Fil d'Ariane */}
      <div className="bg-base-200/50 border-b border-base-200 py-3">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-base-content/50">
            <Link href="/" className="hover:text-primary transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-base-content/80 truncate">{article.title}</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article className="container mx-auto px-6 py-12 max-w-4xl">
        {/* En-tête */}
        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`badge font-medium ${categoryColors[article.category]}`}>
              {article.category}
            </span>
            {article.tags.map((tag) => (
              <span key={tag} className="badge badge-ghost badge-sm">
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-base-content leading-tight mb-6">
            {article.title}
          </h1>

          <p className="text-lg text-base-content/60 leading-relaxed mb-8 border-l-4 border-primary/30 pl-4">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-4 py-4 border-y border-base-200">
            <div className="avatar placeholder">
              <div className="bg-primary/15 text-primary rounded-full w-11">
                <span className="text-base font-bold">{article.author.charAt(0)}</span>
              </div>
            </div>
            <div>
              <p className="font-semibold text-base-content">{article.author}</p>
              <p className="text-sm text-base-content/50">{article.authorRole}</p>
            </div>
            <div className="ml-auto text-right text-sm text-base-content/50">
              <p>{formatDate(article.date)}</p>
              <p>{article.readTime} min de lecture</p>
            </div>
          </div>
        </header>

        {/* Corps de l'article */}
        <div>{renderContent(article.content)}</div>

        {/* Tags */}
        <div className="mt-10 pt-6 border-t border-base-200">
          <p className="text-sm text-base-content/50 mb-3">Tags :</p>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="badge badge-ghost">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Retour + Articles liés */}
        <div className="mt-12">
          <Link href="/blog" className="btn btn-ghost btn-sm mb-8">
            ← Retour au blog
          </Link>

          {related.length > 0 && (
            <>
              <h3 className="text-xl font-bold text-base-content mb-6">Articles similaires</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="card bg-base-200 hover:bg-base-300 transition-colors"
                  >
                    <div className="card-body p-4 gap-2">
                      <span
                        className={`badge badge-sm ${categoryColors[rel.category]} self-start`}
                      >
                        {rel.category}
                      </span>
                      <p className="font-semibold text-sm text-base-content line-clamp-2 leading-snug">
                        {rel.title}
                      </p>
                      <p className="text-xs text-base-content/50">{rel.readTime} min</p>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </article>
    </div>
  );
}
