"use client";

/**
 * Photo — shared photography primitives for the public site.
 *
 * Two building blocks used across every public page so imagery stays
 * consistent instead of being hand-rolled per page:
 *
 *   <PhotoBand />  full-bleed horizontal image strip, optional overlaid copy
 *   <PhotoFrame /> a framed photograph for side-by-side sections, with an
 *                  optional arch crop that echoes the arched window motif
 *
 * Both warm the image toward the Warm Refuge palette with a cream scrim so
 * photographs sit inside the design system rather than fighting it.
 *
 * A note on alt text: this practice's imagery is licensed stock, not
 * photographs of Diatan staff or patients. Alt text here describes the scene
 * honestly and never implies otherwise.
 */

import Image from "next/image";
import { motion } from "framer-motion";
import { LeafSprig, ArchFrame } from "./Ornament";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ── Full-bleed image band ────────────────────────────────── */

export function PhotoBand({
  src,
  alt,
  height = 340,
  eyebrow,
  headline,
  subline,
  position = "center",
  tone = "cream",
  priority = false,
}: {
  src: string;
  alt: string;
  height?: number;
  eyebrow?: string;
  headline?: string;
  subline?: string;
  /** object-position for the image — tune the crop per photo */
  position?: string;
  /** cream = light scrim + dark text · bark = dark scrim + light text */
  tone?: "cream" | "bark";
  priority?: boolean;
}) {
  const hasCopy = Boolean(eyebrow || headline || subline);
  const isDark = tone === "bark";

  // Copy sits in a soft pool of cream at the centre so it stays legible, while
  // the photograph keeps its contrast toward the edges. A flat scrim across the
  // whole band washes the image out and it stops reading as a photograph.
  const scrim = isDark
    ? "radial-gradient(ellipse 74% 96% at 50% 50%, rgba(42,36,32,0.72) 0%, rgba(42,36,32,0.55) 55%, rgba(42,36,32,0.34) 100%)"
    : hasCopy
      ? "radial-gradient(ellipse 72% 94% at 50% 50%, rgba(255,251,245,0.92) 0%, rgba(255,251,245,0.74) 48%, rgba(255,251,245,0.38) 100%)"
      : "linear-gradient(to right, rgba(255,251,245,0.55) 0%, rgba(255,251,245,0.08) 40%, rgba(255,251,245,0.08) 60%, rgba(255,251,245,0.55) 100%)";

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: `${height}px` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        style={{ objectPosition: position }}
        sizes="100vw"
      />
      <div aria-hidden="true" className="absolute inset-0" style={{ background: scrim }} />

      {hasCopy && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="text-center max-w-2xl">
            {eyebrow && (
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest mb-3"
                style={{
                  color: isDark ? "#DEB896" : "#C4956A",
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                }}
              >
                {eyebrow}
              </span>
            )}
            {headline && (
              <p
                className="text-2xl sm:text-3xl font-bold leading-snug"
                style={{
                  color: isDark ? "#FFFBF5" : "#2A2420",
                  fontFamily: "var(--font-heading), Georgia, serif",
                }}
              >
                {headline}
              </p>
            )}
            {subline && (
              <p
                className="text-sm sm:text-base mt-3 leading-relaxed"
                style={{
                  color: isDark ? "rgba(255,251,245,0.8)" : "#6B5E52",
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                }}
              >
                {subline}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </section>
  );
}

/* ── Framed photograph for split sections ─────────────────── */

export function PhotoFrame({
  src,
  alt,
  shape = "rounded",
  aspect = "4 / 5",
  position = "center",
  sprig = false,
  arch = false,
  delay = 0,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  /** rounded = soft 2xl corners · arch = domed top, echoes the window motif */
  shape?: "rounded" | "arch" | "organic";
  aspect?: string;
  position?: string;
  /** decorative botanical sprig tucked behind a corner */
  sprig?: boolean;
  /** decorative arch outline offset behind the photo */
  arch?: boolean;
  delay?: number;
  /** set on above-the-fold hero photographs — these are the LCP element */
  priority?: boolean;
  className?: string;
}) {
  const radius =
    shape === "arch"
      ? "9999px 9999px 1.25rem 1.25rem"
      : shape === "organic"
        ? "60% 40% 30% 70% / 16% 16% 22% 22%"
        : "1.25rem";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.75, delay, ease: EASE }}
      className={`relative ${className ?? ""}`}
    >
      {arch && (
        <ArchFrame
          className="pointer-events-none absolute"
          style={{
            top: "-22px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "108%",
            height: "112%",
            opacity: 0.28,
          }}
        />
      )}

      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: aspect,
          borderRadius: radius,
          boxShadow: "0 18px 44px -22px rgba(42,36,32,0.35)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          style={{ objectPosition: position }}
          sizes="(max-width: 768px) 92vw, (max-width: 1200px) 46vw, 540px"
        />
        {/* warm the photo toward the palette */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(196,149,106,0.06) 0%, rgba(61,90,62,0.10) 100%)",
          }}
        />
      </div>

      {sprig && (
        <LeafSprig
          className="pointer-events-none absolute"
          style={{
            bottom: "-28px",
            right: "-26px",
            width: "84px",
            height: "140px",
            opacity: 0.4,
            transform: "rotate(14deg)",
          }}
        />
      )}
    </motion.div>
  );
}
