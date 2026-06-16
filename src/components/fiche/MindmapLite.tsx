import type { Block } from "./types";

type MindmapLiteBlock = Extract<Block, { type: "mindmapLite" }>;

const VARIANT_STYLES: Record<MindmapLiteBlock["branches"][number]["variant"], string> = {
  blue: "border-primary/40 bg-primary/5 text-primary",
  green: "border-secondary/40 bg-secondary/5 text-secondary",
  yellow: "border-accent/40 bg-accent/5 text-accent",
  purple: "border-base-content/20 bg-base-content/5 text-base-content/70",
};

export function MindmapLite({ block }: { block: MindmapLiteBlock }) {
  return (
    <div className="rounded-xl border-2 border-base-300 bg-base-100 p-5 flex flex-col gap-4">
      <div className="bg-primary text-primary-content rounded-xl px-5 py-3 text-center mx-auto w-full sm:w-auto sm:min-w-[260px]">
        <div className="font-bold text-sm">{block.center.title}</div>
        {block.center.subtitle && (
          <div className="text-xs opacity-80 mt-0.5">{block.center.subtitle}</div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {block.branches.map((branch, i) => {
          const style = VARIANT_STYLES[branch.variant];
          return (
            <div
              key={i}
              className={`rounded-lg border-2 p-3.5 ${style} ${branch.dashed ? "border-dashed" : ""}`}
            >
              <div className="text-xs font-bold mb-1.5">↳ {branch.title}</div>
              <ul className="flex flex-col gap-1">
                {branch.lines.map((line, j) => (
                  <li key={j} className="text-xs text-base-content/70 leading-relaxed">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
