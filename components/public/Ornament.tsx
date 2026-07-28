/**
 * Ornament — the illustrated warmth layer for Diatan Health.
 *
 * Hand-drawn botanical + organic SVG motifs in the Warm Refuge palette.
 * These carry warmth on pages where a photograph would only be filler
 * (conditions, FAQ, forms) and add texture behind real photography elsewhere.
 *
 * All ornaments are pure SVG with no client-side JS, so they render in both
 * server and client components and cost nothing at runtime. Every one is
 * aria-hidden — they are decoration, never content.
 */

const EARTH = "#3D5A3E";
const WARMTH = "#C4956A";

type OrnamentProps = {
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  opacity?: number;
};

/* ── Botanical sprig — a stem with paired leaves ──────────── */

export function LeafSprig({
  className,
  style,
  color = EARTH,
  opacity = 1,
}: OrnamentProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 200"
      fill="none"
      className={className}
      style={{ color, opacity, ...style }}
    >
      {/* main stem */}
      <path
        d="M60 196C60 196 58 150 58 120C58 84 62 44 66 4"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* leaves, alternating down the stem */}
      <path
        d="M58 132C58 132 34 130 24 112C14 94 26 78 26 78C26 78 48 84 55 102C60 116 58 132 58 132Z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M60 104C60 104 84 100 92 80C100 60 86 46 86 46C86 46 66 56 61 76C57 92 60 104 60 104Z"
        fill="currentColor"
        opacity="0.4"
      />
      <path
        d="M62 70C62 70 42 62 36 44C30 26 44 14 44 14C44 14 62 26 65 44C68 58 62 70 62 70Z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M66 40C66 40 84 30 88 14C92 -2 80 -10 80 -10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}

/* ── Arch — echoes the arched window in the welcome photograph ── */

export function ArchFrame({
  className,
  style,
  color = WARMTH,
  opacity = 1,
}: OrnamentProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 260"
      fill="none"
      className={className}
      style={{ color, opacity, ...style }}
    >
      <path
        d="M8 256V100C8 49.2 49.2 8 100 8C150.8 8 192 49.2 192 100V256"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 256V102C32 64.4 62.4 34 100 34C137.6 34 168 64.4 168 102V256"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

/* ── Soft organic divider between sections ────────────────── */

export function WaveDivider({
  className,
  style,
  color = "#F5EDE2",
  opacity = 1,
  flip = false,
}: OrnamentProps & { flip?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 96"
      preserveAspectRatio="none"
      className={className}
      style={{
        color,
        opacity,
        display: "block",
        width: "100%",
        transform: flip ? "rotate(180deg)" : undefined,
        ...style,
      }}
    >
      <path
        d="M0 40C160 8 320 0 480 16C640 32 800 72 960 80C1120 88 1280 64 1440 32V96H0V40Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ── Dotted field — quiet paper-like texture ──────────────── */

export function DotField({
  className,
  style,
  color = WARMTH,
  opacity = 0.5,
  id = "dotfield",
}: OrnamentProps & { id?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      style={{ color, opacity, ...style }}
    >
      <defs>
        <pattern
          id={id}
          x="0"
          y="0"
          width="22"
          height="22"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.6" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/* ── Organic blob — soft background mass ──────────────────── */

export function BlobShape({
  className,
  style,
  color = EARTH,
  opacity = 0.08,
}: OrnamentProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 600"
      className={className}
      style={{ color, opacity, ...style }}
    >
      <g transform="translate(300,300)">
        <path
          d="M120,-160C154,-138,178,-99,186,-58C194,-16,185,28,168,68C151,108,126,144,91,163C56,182,11,184,-32,176C-75,168,-116,150,-144,118C-172,86,-187,40,-180,-4C-173,-48,-144,-90,-108,-120C-72,-150,-29,-168,16,-169C61,-170,86,-182,120,-160Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

/* ── Small decorative rule with a leaf at centre ──────────── */

export function LeafRule({
  className,
  style,
  color = WARMTH,
  opacity = 1,
}: OrnamentProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 160 24"
      fill="none"
      className={className}
      style={{ color, opacity, ...style }}
    >
      <path d="M4 12H62" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M98 12H156" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path
        d="M80 3C80 3 90 8 90 14C90 19 85 21 80 21C75 21 70 19 70 14C70 8 80 3 80 3Z"
        fill="currentColor"
      />
      <path d="M80 21V7" stroke="#FFFBF5" strokeWidth="1.25" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}
