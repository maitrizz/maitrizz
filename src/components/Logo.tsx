/* Logo Maitrizz : mot-symbole serif + soulignage manuscrit fin terracotta */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative text-2xl font-bold tracking-tight text-primary">
        Maitrizz
      </span>
      <svg
        className="absolute overflow-visible"
        style={{ left: "-1%", bottom: "-0.3em", width: "104%", height: "0.4em" }}
        viewBox="0 0 300 14"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M3 8 C 90 5 160 10 297 7"
          fill="none"
          stroke="#c36648"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.9"
        />
      </svg>
    </span>
  );
}
