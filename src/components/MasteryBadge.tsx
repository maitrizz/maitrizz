export default function MasteryBadge({
  value = 0,
  size = "md",
}: {
  value?: number;
  size?: "sm" | "md";
}) {
  const dim = size === "sm" ? "w-12 h-12" : "w-16 h-16";
  const textSize = size === "sm" ? "text-base" : "text-xl";

  const color =
    value === 0
      ? "border-base-300 text-base-content/30"
      : value < 50
      ? "border-warning text-warning"
      : value < 100
      ? "border-info text-info"
      : "border-success text-success";

  return (
    <div
      className={`${dim} rounded-full border-2 border-dashed ${color} flex flex-col items-center justify-center shrink-0`}
    >
      <span className={`${textSize} font-bold leading-none`}>{value}</span>
      <span className="text-xs leading-none">%</span>
    </div>
  );
}
