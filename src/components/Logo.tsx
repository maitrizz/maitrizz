/* Logo Maitrizz : mot-symbole serif + surlignage terracotta (coup de fluo « révision ») */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <svg
        className="absolute overflow-visible"
        style={{
          left: "-6%",
          width: "112%",
          top: "48%",
          height: "1.05em",
          transform: "translateY(-50%)",
        }}
        viewBox="0 0 320 34"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M8 10 C 110 5 210 16 314 8 C 319 16 317 26 306 28 C 200 35 90 26 10 30 C 1 26 1 14 8 10 Z"
          fill="#c36648"
          opacity="0.3"
        />
      </svg>
      <span className="relative text-2xl font-bold tracking-tight text-primary">
        Maitrizz
      </span>
    </span>
  );
}
