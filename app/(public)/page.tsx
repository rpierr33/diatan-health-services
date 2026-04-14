"use client";

import Link from "next/link";
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
  Star,
  ChevronRight,
  ChevronDown,
  Phone,
  Calendar,
  CheckCircle2,
  Quote,
} from "lucide-react";

const services = [
  { icon: ClipboardList, name: "Psychiatric Evaluations", desc: "Comprehensive assessments leading to accurate diagnosis and a personalized treatment plan built around your specific needs and history." },
  { icon: Pill, name: "Medication Management", desc: "Expert prescribing, titration, and ongoing monitoring of psychiatric medications to achieve optimal therapeutic outcomes with minimal side effects." },
  { icon: Heart, name: "Individual Therapy", desc: "One-on-one counseling sessions drawing from evidence-based modalities — CBT, DBT, trauma-informed care — tailored to your unique situation." },
  { icon: Shield, name: "Crisis Intervention", desc: "Immediate, compassionate support during acute mental health emergencies. Same-day assessments and stabilization plans when you need it most." },
  { icon: Video, name: "Telepsychiatry", desc: "Secure HIPAA-compliant video or phone consultations. Full psychiatric care from anywhere in Florida — no waiting room, no commute." },
  { icon: BookOpen, name: "Psychoeducation", desc: "Structured education on your condition, treatment options, and evidence-based coping skills that help you stay in control of your mental health." },
  { icon: Users, name: "Psychosocial Rehab", desc: "Evidence-based group and individual programs that rebuild social skills, daily functioning, and community integration for long-term recovery." },
  { icon: Leaf, name: "Wellness & Prevention", desc: "Proactive programs focused on stress reduction, resilience building, sleep hygiene, and self-care to prevent crisis before it begins." },
  { icon: Network, name: "Care Coordination", desc: "Seamless communication with your primary care physician, specialists, and support systems to ensure unified, whole-person care." },
  { icon: RefreshCw, name: "Continuity of Care", desc: "Long-term monitoring, treatment adjustment, and recovery support that adapts as your needs evolve — never just a one-time visit." },
];

const conditions = [
  "Major Depressive Disorder", "Bipolar Disorder", "Anxiety Disorders",
  "PTSD", "ADHD", "Schizophrenia", "OCD", "Eating Disorders",
  "Substance Use Disorders", "Panic Disorder", "Personality Disorders",
  "Trauma Treatment",
];

const testimonials = [
  { name: "Samantha Gingras", condition: "Depression", text: "I battled depression for years. The therapy and support here helped me regain control of my life. The team is compassionate and truly listens — I finally feel like myself again." },
  { name: "Phillip Williams", condition: "Anxiety", text: "Opening up about my mental health struggles was the most liberating thing I have ever done. This practice gave me the safe space I needed to heal and move forward." },
  { name: "Priya Shanku", condition: "Bipolar Disorder", text: "Recovery is a journey, not a destination. Both therapy and medication played crucial roles in my healing. I am genuinely grateful for the personalized, patient care I received." },
  { name: "Sabine Thais", condition: "PTSD", text: "Having a supportive environment is the foundation of mental wellness. Diatan Health provided exactly that — a warm, inclusive space where I felt truly understood and not judged." },
];

const insuranceList = [
  "Self-Pay", "Medicare", "Medicaid", "United Healthcare", "Avmed",
  "Oscar Health", "Cigna", "UMR", "Medica", "Preferred Care Partners",
  "Oxford Health", "ACA / ObamaCare",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

function ServiceAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto divide-y" style={{ borderColor: "#E8DDD0" }}>
      {services.map((service, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center gap-5 py-5 px-2 text-left group transition-colors duration-200 hover:bg-[#FDF4EC] rounded-lg -mx-2 px-2"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
                style={{
                  backgroundColor: isOpen ? "#2D7A4F" : "#F5EDE4",
                }}
              >
                <service.icon
                  className="w-5 h-5 transition-colors duration-300"
                  style={{ color: isOpen ? "#FFFFFF" : "#C17F59" }}
                  aria-hidden="true"
                />
              </div>
              <span
                className="flex-1 font-semibold text-base font-inter"
                style={{
                  color: isOpen ? "#2D7A4F" : "#2A2520",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                {service.name}
              </span>
              <ChevronDown
                className="w-5 h-5 shrink-0 transition-transform duration-300"
                style={{
                  color: "#C17F59",
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
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <p
                    className="pb-5 pl-[60px] pr-8 text-sm leading-relaxed font-inter"
                    style={{
                      color: "#6B5E52",
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                    }}
                  >
                    {service.desc}
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

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <div className="max-w-2xl mx-auto text-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Quote
            className="w-10 h-10 mx-auto mb-6"
            style={{ color: "#C17F59", opacity: 0.7 }}
            aria-hidden="true"
          />
          <p
            className="text-xl sm:text-2xl leading-relaxed italic mb-8 font-lora"
            style={{
              color: "#2A2520",
              fontFamily: "var(--font-lora), Georgia, serif",
            }}
          >
            &ldquo;{t.text}&rdquo;
          </p>
          <div className="flex justify-center mb-3" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, idx) => (
              <Star
                key={idx}
                className="w-4 h-4"
                style={{ color: "#C17F59", fill: "#C17F59" }}
                aria-hidden="true"
              />
            ))}
          </div>
          <p
            className="font-semibold text-base font-inter"
            style={{ color: "#2A2520", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
          >
            {t.name}
          </p>
          <span
            className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium font-inter"
            style={{
              backgroundColor: "#F5EDE4",
              color: "#C17F59",
              border: "1px solid #E8CDB8",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            {t.condition}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots + arrows */}
      <div className="flex items-center justify-center gap-6 mt-10">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
          style={{ backgroundColor: "#F5EDE4", color: "#C17F59", border: "1px solid #E8CDB8" }}
        >
          <ChevronRight className="w-4 h-4 rotate-180" aria-hidden="true" />
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
                backgroundColor: i === current ? "#C17F59" : "#E8CDB8",
              }}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
          style={{ backgroundColor: "#F5EDE4", color: "#C17F59", border: "1px solid #E8CDB8" }}
        >
          <ChevronRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── Centered, single-column, Headspace-inspired ──────── */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "92vh",
          background: "linear-gradient(170deg, #FFF8F0 0%, #FAF0E6 40%, #F5EDE4 100%)",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Warm organic background blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 w-[480px] h-[480px] opacity-30 blob"
          style={{ background: "radial-gradient(circle, #D4A875 0%, transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 -right-32 w-[360px] h-[360px] opacity-20 blob-2"
          style={{ background: "radial-gradient(circle, #2D7A4F 0%, transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 left-1/3 w-[320px] h-[320px] opacity-15 blob"
          style={{ background: "radial-gradient(circle, #C17F59 0%, transparent 70%)" }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeUp} custom={0}>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-8 font-inter"
                style={{
                  backgroundColor: "#F5EDE4",
                  color: "#C17F59",
                  border: "1px solid #E8CDB8",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C17F59] inline-block" />
                PMHNP-BC Certified Care · Lauderhill, FL
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-7 font-lora"
              style={{
                color: "#2A2520",
                fontFamily: "var(--font-lora), Georgia, serif",
              }}
            >
              Your mind deserves{" "}
              <span style={{ color: "#2D7A4F" }}>real care.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg sm:text-xl leading-relaxed mb-10 font-inter"
              style={{
                color: "#6B5E52",
                maxWidth: "540px",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              Compassionate psychiatric and mental health care for individuals
              and families — in-person in Lauderhill and via secure telepsychiatry
              across Florida.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="text-base font-semibold px-8 py-6 rounded-xl btn-breathe font-inter"
                style={{
                  backgroundColor: "#2D7A4F",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
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
                className="text-base font-semibold px-8 py-6 rounded-xl font-inter"
                style={{
                  borderColor: "#E8CDB8",
                  color: "#C17F59",
                  backgroundColor: "transparent",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                <Link href="/services">
                  Our Services
                  <ChevronRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-5 justify-center">
              {[
                "Evidence-Based Treatment",
                "Telepsychiatry Available",
                "Insurance Accepted",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2
                    className="w-4 h-4 shrink-0"
                    style={{ color: "#2D7A4F" }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-sm font-medium font-inter"
                    style={{ color: "#6B5E52", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── Accordion / stacked list ─────────────────────── */}
      <section className="py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="text-center mb-16"
          >
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-5 font-inter"
              style={{
                backgroundColor: "#F5EDE4",
                color: "#C17F59",
                border: "1px solid #E8CDB8",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              Our Services
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-5 font-lora"
              style={{ color: "#2A2520", fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Comprehensive Mental Health Care
            </h2>
            <p
              className="text-lg max-w-xl mx-auto font-inter"
              style={{ color: "#6B5E52", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              A full spectrum of psychiatric and mental health services —
              delivered with compassion and clinical precision.
            </p>
          </motion.div>

          <ServiceAccordion />

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="font-semibold px-8 rounded-xl font-inter"
              style={{
                borderColor: "#E8CDB8",
                color: "#C17F59",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              <Link href="/services">
                View All Services
                <ChevronRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── CONDITIONS ───────────────────────────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: "#FDF6EE" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="text-center mb-14"
          >
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-5 font-inter"
              style={{
                backgroundColor: "#2D7A4F",
                color: "#FFFFFF",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              Conditions We Treat
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-5 font-lora"
              style={{ color: "#2A2520", fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              You Are Not Alone
            </h2>
            <p
              className="text-lg max-w-xl mx-auto font-inter"
              style={{ color: "#6B5E52", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              We provide expert care for a wide range of mental health conditions.
              Whatever you are facing, we are here to help.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="flex flex-wrap gap-3 justify-center mb-10"
          >
            {conditions.map((condition, i) => (
              <motion.div key={condition} variants={fadeUp} custom={i * 0.04}>
                <Link href="/conditions">
                  <span
                    className="inline-block px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 hover:border-[#2D7A4F] hover:text-[#2D7A4F] hover:shadow-sm font-inter"
                    style={{
                      backgroundColor: "#FFFFFF",
                      color: "#2A2520",
                      border: "1px solid #E8CDB8",
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                    }}
                  >
                    {condition}
                  </span>
                </Link>
              </motion.div>
            ))}
            <Link href="/conditions">
              <span
                className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold cursor-pointer font-inter"
                style={{
                  backgroundColor: "#2D7A4F",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                +14 More &rarr;
              </span>
            </Link>
          </motion.div>

          <div className="text-center">
            <Button
              asChild
              className="font-semibold px-8 rounded-xl font-inter"
              style={{
                backgroundColor: "#2D7A4F",
                color: "#FFFFFF",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              <Link href="/conditions">View All Conditions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── TELEPSYCHIATRY CTA ── Centered, not 2-col ───────────────── */}
      <section
        className="py-28 relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #1E5C38 0%, #2D7A4F 55%, #3A8F60 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 opacity-10 blob"
          style={{ background: "radial-gradient(circle, #FFFFFF, transparent)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 -left-10 w-64 h-64 opacity-10 blob-2"
          style={{ background: "radial-gradient(circle, #FFFFFF, transparent)" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-6 font-inter"
            style={{
              backgroundColor: "rgba(255,255,255,0.15)",
              color: "#FFFFFF",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
            }}
          >
            Telehealth Available
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6 leading-tight font-lora text-white"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            Quality Care From the Comfort of Home
          </h2>
          <p
            className="text-lg opacity-85 leading-relaxed mb-8 font-inter text-white"
            style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
          >
            Our secure telepsychiatry platform connects you with our team via
            video or phone. No commute, no waiting room. Same compassionate care,
            wherever you are in Florida.
          </p>
          <ul className="space-y-3 mb-10 text-left inline-block">
            {[
              "HIPAA-compliant video platform",
              "Available via phone or video",
              "Prescription management included",
              "Most insurance plans accepted",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 opacity-80 text-white" aria-hidden="true" />
                <span
                  className="opacity-85 font-inter text-white"
                  style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div>
            <Button
              asChild
              size="lg"
              className="font-semibold px-8 rounded-xl font-inter"
              style={{
                backgroundColor: "#FFFFFF",
                color: "#2D7A4F",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              <Link href="/telepsychiatry">
                <Video className="w-5 h-5 mr-2" aria-hidden="true" />
                Learn About Telepsychiatry
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* ── TESTIMONIALS ── Single-quote carousel ────────────────────── */}
      <section className="py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="text-center mb-16"
          >
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-5 font-inter"
              style={{
                backgroundColor: "#F5EDE4",
                color: "#C17F59",
                border: "1px solid #E8CDB8",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              Patient Stories
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold font-lora"
              style={{ color: "#2A2520", fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Real People, Real Recovery
            </h2>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* ── INSURANCE ── Text list, no badges ───────────────────────── */}
      <section className="py-28" style={{ backgroundColor: "#FDF6EE" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="text-center mb-14"
          >
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-5 font-inter"
              style={{
                backgroundColor: "#2D7A4F",
                color: "#FFFFFF",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              Insurance &amp; Payment
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-5 font-lora"
              style={{ color: "#2A2520", fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              We Accept Most Insurance Plans
            </h2>
            <p
              className="text-lg max-w-xl mx-auto font-inter"
              style={{ color: "#6B5E52", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              We work with most major insurance providers to make mental health
              care accessible and affordable for everyone.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="flex flex-wrap gap-x-8 gap-y-3 justify-center mb-12"
          >
            {insuranceList.map((ins, i) => (
              <motion.span
                key={ins}
                variants={fadeUp}
                custom={i * 0.04}
                className="text-sm font-medium font-inter"
                style={{
                  color: "#6B5E52",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                {ins}
              </motion.span>
            ))}
          </motion.div>

          <div className="text-center">
            <p
              className="text-sm mb-6 font-inter"
              style={{ color: "#9A8F86", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              Not sure if your insurance is accepted? Contact us to verify.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="font-semibold px-8 rounded-xl font-inter"
                style={{
                  backgroundColor: "#2D7A4F",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                <Link href="/book-appointment">Book an Appointment</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="font-semibold px-8 rounded-xl font-inter"
                style={{
                  borderColor: "#E8CDB8",
                  color: "#C17F59",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                <a href="tel:9543475845">
                  <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                  Verify Insurance
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section
        className="py-28 relative overflow-hidden"
        style={{ backgroundColor: "#2A2520" }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 60% 50%, rgba(45,122,79,0.15) 0%, transparent 70%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6 font-lora"
            style={{ color: "#FFFFFF", fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            Ready to Start Your Journey to Wellness?
          </h2>
          <p
            className="text-lg mb-10 leading-relaxed font-inter"
            style={{ color: "#B8A99A", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
          >
            Taking the first step is the hardest part. We are here to walk with
            you every step of the way. Schedule your appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-base font-semibold px-10 py-6 rounded-xl btn-breathe font-inter"
              style={{
                backgroundColor: "#2D7A4F",
                color: "#FFFFFF",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
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
              className="text-base font-semibold px-10 py-6 rounded-xl font-inter"
              style={{
                borderColor: "rgba(255,255,255,0.2)",
                color: "#FFFFFF",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
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
