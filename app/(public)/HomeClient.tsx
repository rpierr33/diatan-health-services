"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  Pill,
  Heart,
  Shield,
  Video,
  BookOpen,
  Users,
  Leaf,
  Network,
  RefreshCw,
  ChevronRight,
  ChevronDown,
  Phone,
  Calendar,
} from "lucide-react";

// Icon mapping by slug/name for services
const ICON_MAP: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  "clipboard-list": ClipboardList,
  "pill": Pill,
  "heart-handshake": Heart,
  "shield": Shield,
  "video": Video,
  "book-open": BookOpen,
  "users": Users,
  "leaf": Leaf,
  "network": Network,
  "refresh-cw": RefreshCw,
};

function getIcon(icon: string): React.ComponentType<React.SVGProps<SVGSVGElement>> {
  return ICON_MAP[icon] || Heart;
}

export type DbService = {
  id: number;
  slug: string;
  name: string;
  description: string;
  icon: string;
};

export type DbCondition = {
  id: number;
  slug: string;
  name: string;
  description: string;
  category: string;
};

export type DbTestimonial = {
  id: number;
  name: string;
  text: string;
  conditionTreated: string | null;
  isFeatured: boolean;
};

interface HomeClientProps {
  services: DbService[];
  conditions: DbCondition[];
  testimonials: DbTestimonial[];
  insuranceList: string[];
}

/* ── Motion variants — slow, intentional, healthcare ─────── */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

/* ── Sub-components ─────────────────────────────────────── */

function ServiceAccordion({ services }: { services: DbService[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      className="max-w-3xl mx-auto divide-y"
      style={{ borderColor: "#E0CDB8" }}
    >
      {services.map((service, i) => {
        const isOpen = openIndex === i;
        const Icon = getIcon(service.icon);
        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center gap-5 py-5 px-2 text-left group transition-colors duration-200 rounded-lg -mx-2 hover:bg-[#FFFBF5]"
              style={{ paddingLeft: "8px", paddingRight: "8px" }}
            >
              <Icon
                className="w-5 h-5 shrink-0 transition-colors duration-300"
                style={{ color: isOpen ? "#3D5A3E" : "#C4956A" }}
                aria-hidden="true"
              />
              <span
                className="flex-1 font-semibold text-base"
                style={{
                  color: isOpen ? "#3D5A3E" : "#2A2420",
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                }}
              >
                {service.name}
              </span>
              <ChevronDown
                className="w-5 h-5 shrink-0 transition-transform duration-300"
                style={{
                  color: "#C4956A",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
                aria-hidden="true"
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <p
                    className="pb-5 pl-10 pr-8 text-sm leading-relaxed"
                    style={{
                      color: "#6B5E52",
                      fontFamily: "var(--font-body), system-ui, sans-serif",
                    }}
                  >
                    {service.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

function TestimonialCarousel({ testimonials }: { testimonials: DbTestimonial[] }) {
  const [current, setCurrent] = useState(0);

  if (testimonials.length === 0) return null;

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div
        aria-hidden="true"
        className="text-8xl leading-none mb-4 select-none"
        style={{
          color: "#3D5A3E",
          opacity: 0.3,
          fontFamily: "var(--font-heading), Georgia, serif",
          lineHeight: 0.8,
        }}
      >
        &ldquo;
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-xl sm:text-2xl leading-relaxed italic mb-8"
            style={{
              color: "#FFFBF5",
              fontFamily: "var(--font-heading), Georgia, serif",
            }}
          >
            &ldquo;{t.text}&rdquo;
          </p>
          <p
            className="font-semibold text-base mb-2"
            style={{
              color: "#FFFBF5",
              fontFamily: "var(--font-body), system-ui, sans-serif",
            }}
          >
            {t.name}
          </p>
          {t.conditionTreated && (
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: "rgba(196, 149, 106, 0.18)",
                color: "#DEB896",
                border: "1px solid rgba(196, 149, 106, 0.3)",
                fontFamily: "var(--font-body), system-ui, sans-serif",
              }}
            >
              {t.conditionTreated}
            </span>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-6 mt-10">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: "rgba(255, 251, 245, 0.08)",
            color: "#DEB896",
            border: "1px solid rgba(196, 149, 106, 0.25)",
          }}
        >
          <ChevronRight
            className="w-4 h-4 rotate-180"
            aria-hidden="true"
          />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                backgroundColor:
                  i === current ? "#C4956A" : "rgba(196, 149, 106, 0.3)",
              }}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: "rgba(255, 251, 245, 0.08)",
            color: "#DEB896",
            border: "1px solid rgba(196, 149, 106, 0.25)",
          }}
        >
          <ChevronRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────── */

export default function HomeClient({ services, conditions, testimonials, insuranceList }: HomeClientProps) {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO
         ═══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "92vh",
          backgroundColor: "#FFFBF5",
          display: "flex",
          alignItems: "center",
        }}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute"
          style={{
            bottom: "-60px",
            right: "-80px",
            width: "520px",
            height: "520px",
            opacity: 0.08,
            color: "#3D5A3E",
          }}
        >
          <g transform="translate(300,300)">
            <path
              d="M120,-160C154,-138,178,-99,186,-58C194,-16,185,28,168,68C151,108,126,144,91,163C56,182,11,184,-32,176C-75,168,-116,150,-144,118C-172,86,-187,40,-180,-4C-173,-48,-144,-90,-108,-120C-72,-150,-29,-168,16,-169C61,-170,86,-182,120,-160Z"
              fill="currentColor"
            />
          </g>
        </svg>

        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeUp} custom={0}>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8"
                style={{
                  backgroundColor: "#F5EDE2",
                  color: "#3D5A3E",
                  border: "1px solid #E0CDB8",
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full inline-block"
                  style={{ backgroundColor: "#3D5A3E" }}
                />
                Accepting New Patients
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl sm:text-6xl font-bold leading-[1.15] mb-6"
              style={{
                color: "#2A2420",
                fontFamily: "var(--font-heading), Georgia, serif",
              }}
            >
              Your mind deserves{" "}
              <span style={{ color: "#3D5A3E" }}>gentle care.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg sm:text-xl leading-relaxed mb-10"
              style={{
                color: "#6B5E52",
                fontFamily: "var(--font-body), system-ui, sans-serif",
                maxWidth: "480px",
              }}
            >
              Compassionate psychiatric services in Lauderhill, Florida.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="text-base font-semibold px-8 py-6 rounded-xl btn-breathe"
                style={{
                  backgroundColor: "#3D5A3E",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                }}
              >
                <Link href="/book-appointment">
                  <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
                  Book an Appointment
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base font-semibold px-8 py-6 rounded-xl"
                style={{
                  borderColor: "#E0CDB8",
                  color: "#4A3F38",
                  backgroundColor: "transparent",
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                }}
              >
                <a href="tel:9543475845">
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  Call (954) 347-5845
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SERVICES — Accordion from DB
         ═══════════════════════════════════════════════════════ */}
      <section className="py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={sectionReveal}
            className="mb-14"
          >
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
              style={{
                color: "#C4956A",
                fontFamily: "var(--font-body), system-ui, sans-serif",
              }}
            >
              How We Help
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{
                color: "#2A2420",
                fontFamily: "var(--font-heading), Georgia, serif",
              }}
            >
              A full spectrum of care,
              <br />
              built around you.
            </h2>
          </motion.div>

          {services.length > 0 ? (
            <ServiceAccordion services={services} />
          ) : (
            <p className="text-center py-8" style={{ color: "#6B5E52" }}>
              Loading services...
            </p>
          )}

          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
              style={{
                color: "#3D5A3E",
                fontFamily: "var(--font-body), system-ui, sans-serif",
              }}
            >
              View all services
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CONDITIONS — Tag cloud from DB
         ═══════════════════════════════════════════════════════ */}
      <section className="py-28" style={{ backgroundColor: "#F5EDE2" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={sectionReveal}
            className="mb-12"
          >
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
              style={{
                color: "#C4956A",
                fontFamily: "var(--font-body), system-ui, sans-serif",
              }}
            >
              Conditions We Treat
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{
                color: "#2A2420",
                fontFamily: "var(--font-heading), Georgia, serif",
              }}
            >
              You are not alone.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="flex flex-wrap gap-3 mb-10"
          >
            {conditions.slice(0, 12).map((condition, i) => (
              <motion.div key={condition.id} variants={fadeUp} custom={i * 0.04}>
                <Link href="/conditions">
                  <span
                    className="inline-block px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-300"
                    style={{
                      backgroundColor: "transparent",
                      color: "#2A2420",
                      border: "1px solid #E0CDB8",
                      fontFamily: "var(--font-body), system-ui, sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.backgroundColor = "#DEB896";
                      (e.currentTarget as HTMLSpanElement).style.borderColor = "#DEB896";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.backgroundColor = "transparent";
                      (e.currentTarget as HTMLSpanElement).style.borderColor = "#E0CDB8";
                    }}
                  >
                    {condition.name}
                  </span>
                </Link>
              </motion.div>
            ))}
            {conditions.length > 12 && (
              <motion.div variants={fadeUp} custom={12 * 0.04}>
                <Link href="/conditions">
                  <span
                    className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300"
                    style={{
                      backgroundColor: "#3D5A3E",
                      color: "#FFFFFF",
                      border: "1px solid #3D5A3E",
                      fontFamily: "var(--font-body), system-ui, sans-serif",
                    }}
                  >
                    +{conditions.length - 12} More
                  </span>
                </Link>
              </motion.div>
            )}
          </motion.div>

          <Link
            href="/conditions"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
            style={{
              color: "#3D5A3E",
              fontFamily: "var(--font-body), system-ui, sans-serif",
            }}
          >
            View all conditions
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TESTIMONIALS — Carousel from DB
         ═══════════════════════════════════════════════════════ */}
      <section className="py-28" style={{ backgroundColor: "#2A2420" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={sectionReveal}
            className="text-center mb-16"
          >
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
              style={{
                color: "#C4956A",
                fontFamily: "var(--font-body), system-ui, sans-serif",
              }}
            >
              Patient Stories
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{
                color: "#FFFBF5",
                fontFamily: "var(--font-heading), Georgia, serif",
              }}
            >
              Real people, real recovery.
            </h2>
          </motion.div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MEET OUR PROVIDERS
         ═══════════════════════════════════════════════════════ */}
      <section className="py-28" style={{ backgroundColor: "#FFFBF5" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={sectionReveal}
            className="text-center mb-16"
          >
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#C4956A", fontFamily: "var(--font-body), system-ui, sans-serif" }}
            >
              Our Team
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              Meet Our Providers
            </h2>
            <p
              className="mt-4 text-base max-w-xl mx-auto"
              style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}
            >
              Board-certified psychiatric professionals dedicated to your mental wellness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-8">
            {[
              { src: "/dr-diatan.jpg", name: "Dr. Diatan", title: "Founder & Lead Psychiatrist, PMHNP-BC" },
              { src: "/provider-2.jpg", name: "Provider", title: "PMHNP-BC" },
            ].map((doc, i) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={doc.src}
                    alt={doc.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <h3
                  className="text-base font-semibold"
                  style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}
                >
                  {doc.name}
                </h3>
                <p
                  className="text-sm mt-1"
                  style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}
                >
                  {doc.title}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/about"
              className="inline-flex items-center text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: "#3D5A3E", fontFamily: "var(--font-body), system-ui, sans-serif" }}
            >
              Learn more about our team →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          INSURANCE
         ═══════════════════════════════════════════════════════ */}
      <section className="py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={sectionReveal}
            className="mb-12"
          >
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
              style={{
                color: "#C4956A",
                fontFamily: "var(--font-body), system-ui, sans-serif",
              }}
            >
              Insurance &amp; Payment
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{
                color: "#2A2420",
                fontFamily: "var(--font-heading), Georgia, serif",
              }}
            >
              Insurance We Accept
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-base leading-loose mb-10"
            style={{
              color: "#6B5E52",
              fontFamily: "var(--font-body), system-ui, sans-serif",
            }}
          >
            {insuranceList.map((ins, i) => (
              <span key={ins}>
                {ins}
                {i < insuranceList.length - 1 && (
                  <span
                    aria-hidden="true"
                    style={{ color: "#E0CDB8", margin: "0 10px" }}
                  >
                    ·
                  </span>
                )}
              </span>
            ))}
          </motion.p>

          <p
            className="text-sm mb-6"
            style={{
              color: "#9A8F86",
              fontFamily: "var(--font-body), system-ui, sans-serif",
            }}
          >
            Not sure if your insurance is accepted? Contact us to verify.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="font-semibold px-8 rounded-xl"
              style={{
                backgroundColor: "#3D5A3E",
                color: "#FFFFFF",
                fontFamily: "var(--font-body), system-ui, sans-serif",
              }}
            >
              <Link href="/book-appointment">Book an Appointment</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="font-semibold px-8 rounded-xl"
              style={{
                borderColor: "#E0CDB8",
                color: "#4A3F38",
                fontFamily: "var(--font-body), system-ui, sans-serif",
              }}
            >
              <a href="tel:9543475845">
                <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                Verify Insurance
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA
         ═══════════════════════════════════════════════════════ */}
      <section
        className="py-28 relative overflow-hidden"
        style={{ backgroundColor: "#3D5A3E" }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute"
          style={{
            top: "-80px",
            right: "-80px",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(196,149,106,0.12) 0%, transparent 70%)",
          }}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={sectionReveal}
          className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2
            className="text-4xl sm:text-5xl font-bold mb-5 leading-tight"
            style={{
              color: "#FFFFFF",
              fontFamily: "var(--font-heading), Georgia, serif",
            }}
          >
            Take the First Step
          </h2>
          <p
            className="text-lg mb-10 leading-relaxed"
            style={{
              color: "rgba(255,251,245,0.82)",
              fontFamily: "var(--font-body), system-ui, sans-serif",
            }}
          >
            Book your appointment today. We are here to walk with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Button
              asChild
              size="lg"
              className="text-base font-semibold px-10 py-6 rounded-xl"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#3D5A3E",
                fontFamily: "var(--font-body), system-ui, sans-serif",
              }}
            >
              <Link href="/book-appointment">
                <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
                Book Your Appointment
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base font-semibold px-10 py-6 rounded-xl"
              style={{
                borderColor: "rgba(255,251,245,0.3)",
                color: "#FFFFFF",
                backgroundColor: "transparent",
                fontFamily: "var(--font-body), system-ui, sans-serif",
              }}
            >
              <a
                href="https://www.zocdoc.com/practice/diatan-health-services-115310"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book on ZocDoc
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base font-semibold px-10 py-6 rounded-xl"
              style={{
                borderColor: "rgba(255,251,245,0.3)",
                color: "#FFFFFF",
                backgroundColor: "transparent",
                fontFamily: "var(--font-body), system-ui, sans-serif",
              }}
            >
              <a href="tel:9543475845">
                <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                (954) 347-5845
              </a>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
