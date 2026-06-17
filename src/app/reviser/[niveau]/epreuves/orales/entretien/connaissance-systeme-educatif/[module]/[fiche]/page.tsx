import Link from "next/link";
import { notFound } from "next/navigation";
import { isValidNiveau } from "@/lib/niveau";
import { modules, type Block } from "../../data";

function RenderBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-base-content/70 leading-relaxed">{block.text}</p>
      );

    case "subheading":
      return (
        <h3 className="text-sm font-bold text-primary uppercase tracking-wide mt-2">
          {block.text}
        </h3>
      );

    case "bullets":
      return (
        <ul className="list-disc list-inside flex flex-col gap-1.5 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="text-base-content/70 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );

    case "nested_bullets":
      return (
        <div className="flex flex-col gap-4">
          {block.items.map((item, i) => (
            <div key={i}>
              <p className="font-semibold text-base-content mb-1.5">
                {item.title}
              </p>
              <ul className="list-disc list-inside flex flex-col gap-1 pl-4">
                {item.bullets.map((b, j) => (
                  <li key={j} className="text-base-content/70 leading-relaxed text-sm">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );

    case "table":
      return (
        <div className="overflow-x-auto rounded-xl border border-base-300">
          <table className="table table-sm w-full">
            <thead>
              <tr>
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className="bg-base-200 text-base-content font-semibold text-xs uppercase tracking-wide"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-t border-base-200">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="text-base-content/70 text-sm align-top py-3"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "blockquote":
      return (
        <blockquote className="border-l-4 border-secondary bg-secondary/10 rounded-r-xl p-4">
          <p className="text-base-content/80 italic leading-relaxed">
            « {block.text} »
          </p>
          {block.source && (
            <p className="text-xs text-base-content/40 mt-2 font-medium">
              - {block.source}
            </p>
          )}
        </blockquote>
      );

    case "callout": {
      const isTip = block.variant === "tip";
      const isNota = block.variant === "nota";
      return (
        <div
          className={[
            "border rounded-xl p-4 flex flex-col gap-2",
            isTip
              ? "border-primary/30 bg-primary/5"
              : isNota
              ? "border-accent/40 bg-accent/5"
              : "border-secondary/30 bg-secondary/5",
          ].join(" ")}
        >
          <p
            className={[
              "text-xs font-bold uppercase tracking-widest",
              isTip ? "text-primary" : isNota ? "text-accent" : "text-secondary",
            ].join(" ")}
          >
            {block.title}
          </p>
          <div className="flex flex-col gap-1.5">
            {block.lines.map((line, i) => (
              <p key={i} className="text-base-content/70 text-sm leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </div>
      );
    }

    default:
      return null;
  }
}

export default async function FichePage({
  params,
}: {
  params: Promise<{ niveau: string; module: string; fiche: string }>;
}) {
  const { niveau, module, fiche } = await params;

  if (!isValidNiveau(niveau)) notFound();

  const moduleData = modules[module];
  const ficheNumber = parseInt(fiche.replace("fiche-", ""), 10);

  if (!moduleData || isNaN(ficheNumber) || ficheNumber < 1 || ficheNumber > 4) {
    notFound();
  }

  const BASE = `/reviser/${niveau}/epreuves/orales/entretien/connaissance-systeme-educatif`;

  const data = moduleData.fiches[ficheNumber - 1];
  const prevFiche = ficheNumber > 1 ? ficheNumber - 1 : null;
  const nextFiche = ficheNumber < 4 ? ficheNumber + 1 : null;

  return (
    <section className="py-10 px-6 bg-base-100 min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto max-w-2xl">

        {/* Navigation */}
        <div className="flex items-center gap-2 mb-8">
          <Link href={`${BASE}/${module}`} className="btn btn-ghost btn-sm">
            ← {moduleData.label}
          </Link>
          <div className="flex-1" />
          {prevFiche && (
            <Link
              href={`${BASE}/${module}/fiche-${prevFiche}`}
              className="btn btn-ghost btn-sm"
            >
              ← Fiche {prevFiche}
            </Link>
          )}
          <span className="text-sm text-base-content/40">
            Fiche {ficheNumber} / 4
          </span>
          {nextFiche && (
            <Link
              href={`${BASE}/${module}/fiche-${nextFiche}`}
              className="btn btn-ghost btn-sm"
            >
              Fiche {nextFiche} →
            </Link>
          )}
        </div>

        {/* Contenu */}
        <article className="flex flex-col gap-7">
          <h1 className="text-2xl font-bold text-base-content">{data.title}</h1>

          <p className="text-base-content/70 leading-relaxed">{data.intro}</p>

          {data.sections.map((section, i) => (
            <div key={i} className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-base-content border-b border-base-300 pb-2">
                {section.heading}
              </h2>
              {section.blocks.map((block, j) => (
                <RenderBlock key={j} block={block} />
              ))}
            </div>
          ))}

          {/* À retenir */}
          <div className="border-l-4 border-primary bg-primary/5 rounded-r-xl p-4 mt-2">
            <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
              À retenir
            </p>
            <p className="text-base-content font-medium leading-relaxed">
              {data.aRetenir}
            </p>
          </div>
        </article>

        {/* Bouton QCM */}
        <div className="mt-10">
          <Link
            href={`${BASE}/${module}/${fiche}/qcm`}
            className="btn btn-primary w-full"
          >
            Faire le QCM →
          </Link>
        </div>

      </div>
    </section>
  );
}
