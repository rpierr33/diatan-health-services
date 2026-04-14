"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
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
  Phone,
  Calendar,
  CheckCircle2,
} from "lucide-react";

const services = [
  { icon: ClipboardList, name: "Psychiatric Evaluations", desc: "Comprehensive assessments for accurate diagnosis and personalized treatment plans." },
  { icon: Pill, name: "Medication Management", desc: "Expert prescribing and monitoring of psychiatric medications." },
  { icon: Heart, name: "Individual Therapy", desc: "One-on-one counseling sessions tailored to your unique needs." },
  { icon: Shield, name: "Crisis Intervention", desc: "Immediate, compassionate support during mental health emergencies." },
  { icon: Video, name: "Telepsychiatry", desc: "Convenient remote consultations via secure video or phone." },
  { icon: BookOpen, name: "Psychoeducation", desc: "Education on conditions, treatments, and coping skills." },
  { icon: Users, name: "Psychosocial Rehab", desc: "Evidence-based programs to enhance independent functioning." },
  { icon: Leaf, name: "Wellness & Prevention", desc: "Stress reduction, resilience building, and self-care programs." },
  { icon: Network, name: "Care Coordination", desc: "Seamless integration with your primary care team." },
  { icon: RefreshCw, name: "Continuity of Care", desc: "Ongoing monitoring and long-term recovery support." },
];

const conditions = [
  "Major Depressive Disorder", "Bipolar Disorder", "Anxiety Disorders",
  "PTSD", "ADHD", "Schizophrenia", "OCD", "Eating Disorders",
  "Substance Use Disorders", "Panic Disorder", "Personality Disorders",
  "Trauma Treatment",
];

const testimonials = [
  { name: "Samantha Gingras", condition: "Depression", text: "I battled depression for years. The therapy and support groups here helped me regain control of my life. The team is compassionate and truly listens." },
  { name: "Phillip Williams", condition: "Anxiety", text: "Opening up about my mental health struggles was the most liberating thing I have ever done. This practice gave me the safe space I needed to heal." },
  { name: "Priya Shanku", condition: "Bipolar Disorder", text: "Recovery is a journey, not a destination. Both therapy and medication played crucial roles in my healing. I am grateful for the personalized care." },
  { name: "Sabine Thais", condition: "PTSD", text: "Having a supportive environment is key to mental wellness. Diatan Health provided exactly that — a warm, inclusive space where I felt truly understood." },
];

const insuranceList = [
  "Self-Pay", "Medicare", "Medicaid", "United Healthcare", "Avmed",
  "Oscar Health", "Cigna", "UMR", "Medica", "Preferred Care Partners",
  "Oxford Health", "ACA / ObamaCare",
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "92vh",
          background: "linear-gradient(160deg, #EDF7EE 0%, #FFF8F0 45%, #F0EDF8 100%)",
        }}
      >
        {/* Organic background blobs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -left-32 w-[520px] h-[520px] opacity-25 blob"
          style={{ background: "radial-gradient(circle, #A8D5BA 0%, transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 -right-24 w-[380px] h-[380px] opacity-20 blob-2"
          style={{ background: "radial-gradient(circle, #C8B4E0 0%, transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/4 w-[300px] h-[300px] opacity-15 blob"
          style={{ background: "radial-gradient(circle, #8FBC8F 0%, transparent 70%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT: Copy */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp} custom={0}>
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-8 font-inter"
                  style={{
                    backgroundColor: "#EEF7EE",
                    color: "#2D9E60",
                    border: "1px solid #A8D5BA",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D9E60] inline-block" />
                  PMHNP-BC Certified Care
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-7 font-lora"
                style={{
                  color: "#2C3E50",
                  fontFamily: "var(--font-lora), Georgia, serif",
                }}
              >
                Where Mental{" "}
                <span style={{ color: "#2D9E60" }}>Wellness</span>
                <br />
                Is Our Priority
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-lg sm:text-xl leading-relaxed mb-10 font-inter"
                style={{
                  color: "#5A5047",
                  maxWidth: "520px",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                Compassionate, evidence-based psychiatric and mental health care
                for individuals and families in Lauderhill, FL. In-person and
                telepsychiatry available.
              </motion.p>

              <motion.div
                variants={fadeUp}
                custom={3}
                className="flex flex-col sm:flex-row gap-4 mb-10"
              >
                <Button
                  asChild
                  size="lg"
                  className="text-base font-semibold px-8 py-6 rounded-xl btn-breathe font-inter"
                  style={{
                    backgroundColor: "#2D9E60",
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
                    borderColor: "#C8D8CC",
                    color: "#2D9E60",
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

              <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-5">
                {[
                  "Evidence-Based Treatment",
                  "Telepsychiatry Available",
                  "Insurance Accepted",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2
                      className="w-4.5 h-4.5 shrink-0"
                      style={{ color: "#2D9E60" }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-sm font-medium font-inter"
                      style={{ color: "#5A5047", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT: Practice card */}
            <motion.div
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex items-center justify-center"
            >
              <div
                className="rounded-3xl p-8 shadow-2xl relative overflow-hidden"
                style={{
                  backgroundColor: "#FFFFFF",
                  maxWidth: "420px",
                  width: "100%",
                  border: "1px solid #E8DDD0",
                }}
              >
                {/* Subtle inner blob */}
                <div
                  aria-hidden="true"
                  className="absolute -top-16 -right-16 w-40 h-40 blob opacity-20"
                  style={{ background: "radial-gradient(circle, #A8D5BA, transparent)" }}
                />
                <div className="relative text-center mb-7">
                  <Image
                    src="/images/logo.png"
                    alt="Diatan Health Services"
                    width={72}
                    height={72}
                    className="mx-auto rounded-2xl mb-4"
                  />
                  <h2
                    className="font-bold text-xl mb-1 font-lora"
                    style={{ color: "#2C3E50", fontFamily: "var(--font-lora), Georgia, serif" }}
                  >
                    Diatan Health Services
                  </h2>
                  <p
                    className="text-sm font-inter"
                    style={{ color: "#2D9E60", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                  >
                    Psychiatric &amp; Mental Health Care
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Location", value: "Lauderhill, FL 33313", icon: "📍" },
                    { label: "Phone", value: "(954) 347-5845", icon: "📞" },
                    { label: "Hours", value: "Monday – Friday", icon: "🕐" },
                    { label: "Services", value: "In-Person & Telehealth", icon: "💻" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 p-3 rounded-xl"
                      style={{ backgroundColor: "#F9F5F0" }}
                    >
                      <span className="text-lg shrink-0" role="img" aria-label={item.label}>
                        {item.icon}
                      </span>
                      <div>
                        <div
                          className="text-xs font-medium font-inter"
                          style={{ color: "#9A8F86", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                        >
                          {item.label}
                        </div>
                        <div
                          className="text-sm font-semibold font-inter"
                          style={{ color: "#2C3E50", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                        >
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  className="w-full mt-6 font-semibold rounded-xl font-inter"
                  style={{ backgroundColor: "#2D9E60", color: "#FFFFFF", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                >
                  <a href="tel:9543475845">
                    <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                    Call Now
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="text-center mb-16"
          >
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-5 font-inter"
              style={{ backgroundColor: "#EEF7EE", color: "#2D9E60", border: "1px solid #A8D5BA", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              Our Services
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-5 font-lora"
              style={{ color: "#2C3E50", fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Comprehensive Mental Health Care
            </h2>
            <p
              className="text-lg max-w-xl mx-auto font-inter"
              style={{ color: "#7A7062", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              A full spectrum of psychiatric and mental health services, delivered
              with compassion and evidence-based practices.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px"
            style={{ backgroundColor: "#E8DDD0", borderRadius: "1.25rem", overflow: "hidden" }}
          >
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                variants={fadeUp}
                custom={i * 0.05}
                className="group flex flex-col items-start gap-3 p-6 transition-all duration-300 hover:bg-[#EEF7EE]"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#2D9E60]"
                  style={{ backgroundColor: "#EEF7EE" }}
                >
                  <service.icon
                    className="w-5 h-5 transition-colors duration-300 group-hover:text-white"
                    style={{ color: "#2D9E60" }}
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className="font-semibold text-sm leading-tight font-inter"
                  style={{ color: "#2C3E50", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-xs leading-relaxed font-inter"
                  style={{ color: "#7A7062", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                >
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="font-semibold px-8 rounded-xl font-inter"
              style={{ borderColor: "#A8D5BA", color: "#2D9E60", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
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
      <section className="py-28" style={{ backgroundColor: "#F9F5F0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="text-center mb-14"
          >
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-5 font-inter"
              style={{ backgroundColor: "#2D9E60", color: "#FFFFFF", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              Conditions We Treat
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-5 font-lora"
              style={{ color: "#2C3E50", fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              You Are Not Alone
            </h2>
            <p
              className="text-lg max-w-xl mx-auto font-inter"
              style={{ color: "#7A7062", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
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
                    className="inline-block px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 hover:border-[#2D9E60] hover:text-[#2D9E60] hover:shadow-sm font-inter"
                    style={{
                      backgroundColor: "#FFFFFF",
                      color: "#2C3E50",
                      border: "1px solid #E8DDD0",
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
                style={{ backgroundColor: "#2D9E60", color: "#FFFFFF", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
              >
                +14 More →
              </span>
            </Link>
          </motion.div>

          <div className="text-center">
            <Button
              asChild
              className="font-semibold px-8 rounded-xl font-inter"
              style={{ backgroundColor: "#2D9E60", color: "#FFFFFF", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              <Link href="/conditions">View All Conditions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── TELEPSYCHIATRY CTA ───────────────────────────────────────── */}
      <section
        className="py-28 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1A6B3C 0%, #2D9E60 50%, #3DAA7A 100%)",
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              style={{ color: "#FFFFFF" }}
            >
              <span
                className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-6 font-inter"
                style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#FFFFFF", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
              >
                Telehealth Available
              </span>
              <h2
                className="text-4xl sm:text-5xl font-bold mb-6 leading-tight font-lora"
                style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
              >
                Quality Care From
                <br />
                the Comfort of Home
              </h2>
              <p
                className="text-lg opacity-85 leading-relaxed mb-8 font-inter"
                style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
              >
                Our secure telepsychiatry platform connects you with our team via
                video or phone — no commute, no waiting room. Same compassionate
                care, wherever you are.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "HIPAA-compliant video platform",
                  "Available via phone or video",
                  "Prescription management included",
                  "Most insurance plans accepted",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 opacity-80" aria-hidden="true" />
                    <span
                      className="opacity-85 font-inter"
                      style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="font-semibold px-8 rounded-xl font-inter"
                style={{ backgroundColor: "#FFFFFF", color: "#2D9E60", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
              >
                <Link href="/telepsychiatry">
                  <Video className="w-5 h-5 mr-2" aria-hidden="true" />
                  Learn About Telepsychiatry
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div
                className="rounded-3xl p-12 text-center"
                style={{ backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <Video
                  className="w-20 h-20 mx-auto mb-6 opacity-90"
                  style={{ color: "#FFFFFF" }}
                  aria-hidden="true"
                />
                <p
                  className="text-2xl font-bold mb-2 font-lora"
                  style={{ color: "#FFFFFF", fontFamily: "var(--font-lora), Georgia, serif" }}
                >
                  Start Your Session Today
                </p>
                <p
                  className="opacity-75 font-inter"
                  style={{ color: "#FFFFFF", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                >
                  Book online or call (954) 347-5845
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="text-center mb-16"
          >
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-5 font-inter"
              style={{ backgroundColor: "#EEF7EE", color: "#2D9E60", border: "1px solid #A8D5BA", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              Patient Stories
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold font-lora"
              style={{ color: "#2C3E50", fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Real People, Real Recovery
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                custom={i * 0.1}
                className="flex flex-col p-8 rounded-2xl relative overflow-hidden"
                style={{
                  backgroundColor: i % 2 === 0 ? "#F9F5F0" : "#EEF7EE",
                  border: "1px solid #E8DDD0",
                }}
              >
                <span className="quote-mark mb-2" aria-hidden="true">&ldquo;</span>
                <p
                  className="text-sm leading-relaxed italic flex-1 mb-6 font-inter"
                  style={{ color: "#5A5047", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                >
                  {t.text}
                </p>
                <div>
                  <div className="flex mb-3" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4"
                        style={{ color: "#D97706", fill: "#D97706" }}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p
                    className="font-semibold text-sm font-inter"
                    style={{ color: "#2C3E50", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                  >
                    {t.name}
                  </p>
                  <span
                    className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-medium font-inter"
                    style={{ backgroundColor: "#FFFFFF", color: "#2D9E60", border: "1px solid #A8D5BA", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                  >
                    {t.condition}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INSURANCE ────────────────────────────────────────────────── */}
      <section className="py-28" style={{ backgroundColor: "#F9F5F0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="text-center mb-14"
          >
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-5 font-inter"
              style={{ backgroundColor: "#2D9E60", color: "#FFFFFF", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              Insurance &amp; Payment
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-5 font-lora"
              style={{ color: "#2C3E50", fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              We Accept Most Insurance Plans
            </h2>
            <p
              className="text-lg max-w-xl mx-auto font-inter"
              style={{ color: "#7A7062", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
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
            className="flex flex-wrap gap-3 justify-center mb-10"
          >
            {insuranceList.map((ins, i) => (
              <motion.div key={ins} variants={fadeUp} custom={i * 0.04}>
                <span
                  className="inline-block px-5 py-2.5 rounded-xl text-sm font-medium font-inter"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E8DDD0",
                    color: "#2C3E50",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                  }}
                >
                  {ins}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <p
              className="text-sm mb-6 font-inter"
              style={{ color: "#7A7062", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              Not sure if your insurance is accepted? Contact us to verify.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="font-semibold px-8 rounded-xl font-inter"
                style={{ backgroundColor: "#2D9E60", color: "#FFFFFF", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
              >
                <Link href="/book-appointment">Book an Appointment</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="font-semibold px-8 rounded-xl font-inter"
                style={{ borderColor: "#A8D5BA", color: "#2D9E60", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
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
        style={{ backgroundColor: "#2C3E50" }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 60% 50%, rgba(45,158,96,0.12) 0%, transparent 70%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6 font-lora"
            style={{ color: "#FFFFFF", fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            Ready to Start Your Journey to Wellness?
          </h2>
          <p
            className="text-lg mb-10 leading-relaxed font-inter"
            style={{ color: "#A8B8C0", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
          >
            Taking the first step is the hardest part. We are here to walk with
            you every step of the way. Schedule your appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-base font-semibold px-10 py-6 rounded-xl btn-breathe font-inter"
              style={{ backgroundColor: "#2D9E60", color: "#FFFFFF", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
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
              style={{ borderColor: "rgba(255,255,255,0.25)", color: "#FFFFFF", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
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
