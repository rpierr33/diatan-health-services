"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { PhotoBand } from "@/components/public/Photo";
import { LeafSprig, LeafRule } from "@/components/public/Ornament";
import {
  ClipboardList, Pill, Heart, Shield, Video, BookOpen,
  Users, Leaf, Network, RefreshCw, ChevronRight, Phone, Calendar, ChevronDown,
} from "lucide-react";
import { useState } from "react";

const services = [
  { slug: "psychiatric-evaluations", icon: ClipboardList, name: "Psychiatric Evaluations", shortDesc: "Comprehensive assessments for accurate diagnosis.", longDesc: "Our thorough psychiatric evaluations include a detailed review of your medical history, symptom assessment, mental status examination, and diagnostic clarification. We take the time to truly understand your unique situation before creating a personalized treatment plan.", includes: ["Comprehensive mental status exam", "Medical and psychiatric history review", "Diagnostic assessment", "Personalized treatment planning", "Coordination with other providers"] },
  { slug: "medication-management", icon: Pill, name: "Medication Management", shortDesc: "Expert prescribing and monitoring of psychiatric medications.", longDesc: "Managing psychiatric medications requires expertise and regular monitoring. Our PMHNP-BC team prescribes evidence-based medications, monitors for effectiveness and side effects, and adjusts treatment as needed to optimize your mental health outcomes.", includes: ["Initial medication evaluation", "Evidence-based prescribing", "Regular follow-up monitoring", "Side effect management", "Medication adjustment and optimization"] },
  { slug: "individual-therapy", icon: Heart, name: "Individual Therapy", shortDesc: "One-on-one counseling tailored to your unique needs.", longDesc: "Individual therapy provides a private, supportive space to explore your thoughts, feelings, and behaviors. Our therapists use evidence-based modalities including CBT, DBT, and trauma-focused approaches to help you achieve lasting change.", includes: ["Cognitive Behavioral Therapy (CBT)", "Dialectical Behavior Therapy (DBT)", "Trauma-focused therapy", "Mindfulness-based interventions", "Goal-setting and progress tracking"] },
  { slug: "crisis-intervention", icon: Shield, name: "Crisis Intervention", shortDesc: "Immediate support during mental health emergencies.", longDesc: "Mental health crises require immediate, skilled intervention. Our team provides rapid assessment, safety planning, and stabilization services to help you navigate acute mental health emergencies safely and effectively.", includes: ["Rapid psychiatric assessment", "Safety planning", "Crisis stabilization", "Emergency medication management", "Coordination with emergency services"] },
  { slug: "telepsychiatry", icon: Video, name: "Telepsychiatry Services", shortDesc: "Secure remote consultations via video or phone.", longDesc: "Telepsychiatry brings expert psychiatric care directly to you — from your home, office, or anywhere with a stable internet connection. All sessions are conducted on HIPAA-compliant platforms, ensuring your privacy and security.", includes: ["HIPAA-compliant video platform", "Phone consultation option", "Prescription management", "Follow-up care", "Most insurance plans accepted"] },
  { slug: "psychoeducation", icon: BookOpen, name: "Psychoeducation", shortDesc: "Education on conditions, treatments, and coping skills.", longDesc: "Understanding your mental health condition is a powerful component of recovery. Our psychoeducation services equip you and your loved ones with knowledge about diagnoses, treatment options, and practical coping strategies.", includes: ["Condition-specific education", "Medication education", "Coping skills training", "Family education sessions", "Self-management strategies"] },
  { slug: "psr", icon: Users, name: "Psychosocial Rehabilitation (PSR)", shortDesc: "Enhance independent functioning and community integration.", longDesc: "PSR services help individuals with serious mental illness build the skills needed for independent living, employment, and community participation. Our structured programs address social skills, daily living skills, and vocational readiness.", includes: ["Social skills training", "Daily living skills", "Vocational support", "Community integration", "Peer support groups"] },
  { slug: "wellness-prevention", icon: Leaf, name: "Wellness & Prevention Programs", shortDesc: "Stress reduction, resilience building, and self-care.", longDesc: "Prevention is as important as treatment. Our wellness programs focus on building mental resilience, developing healthy habits, and implementing evidence-based stress reduction techniques before a crisis occurs.", includes: ["Stress management techniques", "Mindfulness training", "Sleep hygiene coaching", "Resilience building", "Lifestyle modification support"] },
  { slug: "care-coordination", icon: Network, name: "Care Coordination", shortDesc: "Seamless integration with your entire care team.", longDesc: "Mental health is deeply connected to physical health. Our care coordination services ensure seamless communication and collaboration between your psychiatric providers, primary care physicians, and specialists.", includes: ["Communication with PCP", "Specialist referrals", "Medical record coordination", "Integrated care planning", "Community resource navigation"] },
  { slug: "continuity-of-care", icon: RefreshCw, name: "Continuity of Care", shortDesc: "Ongoing monitoring and long-term recovery support.", longDesc: "Recovery is an ongoing journey, not a destination. Our continuity of care services ensure that you have consistent, long-term support to maintain your mental wellness, prevent relapse, and achieve your long-term goals.", includes: ["Regular progress monitoring", "Relapse prevention planning", "Long-term medication management", "Transition of care support", "Follow-up scheduling"] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }),
};

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

/* Imagery for individual services. Deliberately not every service — the gaps
   are what give the list rhythm. Services left without an image (crisis
   intervention, care coordination) are the ones where a stock photograph would
   say nothing the copy doesn't already say. */
const SERVICE_IMAGES: Record<string, { src: string; alt: string }> = {
  "psychiatric-evaluations": {
    src: "/img/conversation.webp",
    alt: "Two people sitting and talking across a small table in a bright room",
  },
  "medication-management": {
    src: "/img/medication.webp",
    alt: "A hand filling a weekly pill organiser on a table",
  },
  "individual-therapy": {
    src: "/img/comfort-hands.webp",
    alt: "One person's hands resting over another's on a table",
  },
  telepsychiatry: {
    src: "/img/telehealth-home.webp",
    alt: "A person sitting comfortably on a sofa at home with a laptop",
  },
  psychoeducation: {
    src: "/img/journal-writing.webp",
    alt: "A person writing in an open notebook on a wooden table",
  },
  psr: {
    src: "/img/gathering.webp",
    alt: "A small group sitting together around a low table",
  },
  "wellness-prevention": {
    src: "/img/leaf-detail.webp",
    alt: "Green leaves lit from behind by afternoon sun",
  },
  "continuity-of-care": {
    src: "/img/path-forest.webp",
    alt: "A path curving away through a quiet, misty woodland",
  },
};

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = service.icon;
  const image = SERVICE_IMAGES[service.slug];
  // Alternate which side the photograph sits on so the column zig-zags
  // instead of reading as one long stack of identical cards.
  const imageFirst = index % 2 === 1;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={sectionReveal}
      className="bg-white rounded-2xl border border-[#E0CDB8] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className={image ? "grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]" : undefined}>
        {image && (
          <div
            className={`relative min-h-[220px] md:min-h-full ${imageFirst ? "md:order-1" : "md:order-2"}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 320px"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(196,149,106,0.08) 0%, rgba(61,90,62,0.14) 100%)",
              }}
            />
          </div>
        )}

      <div className={`p-8 ${image ? (imageFirst ? "md:order-2" : "md:order-1") : ""}`}>
        <div className="flex items-start gap-5 mb-5">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: "#F5EDE2" }}
          >
            <Icon className="w-7 h-7" style={{ color: "#C4956A" }} aria-hidden="true" />
          </div>
          <div>
            <h2
              className="font-bold text-xl leading-snug mb-1"
              style={{
                color: "#2A2420",
                fontFamily: "var(--font-heading), Georgia, serif",
              }}
            >
              {service.name}
            </h2>
            <p className="text-sm" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
              {service.shortDesc}
            </p>
          </div>
        </div>

        <p className="text-sm leading-relaxed mb-5" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
          {service.longDesc}
        </p>

        {/* What's included toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-sm font-semibold transition-colors duration-200 mb-4"
          style={{ color: open ? "#3D5A3E" : "#C4956A", fontFamily: "var(--font-body), system-ui, sans-serif" }}
          aria-expanded={open}
        >
          What&apos;s Included
          <ChevronDown
            className="w-4 h-4 transition-transform duration-300"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            aria-hidden="true"
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
              className="space-y-2 mb-5"
            >
              {service.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm"
                  style={{ color: "#2A2420", fontFamily: "var(--font-body), system-ui, sans-serif" }}
                >
                  <ChevronRight
                    className="w-3.5 h-3.5 shrink-0"
                    style={{ color: "#3D5A3E" }}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <Button
          asChild
          className="font-semibold rounded-xl"
          style={{
            backgroundColor: "#3D5A3E",
            color: "#FFFFFF",
            fontFamily: "var(--font-body), system-ui, sans-serif",
          }}
        >
          <Link href="/book-appointment">
            <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
            Book This Service
          </Link>
        </Button>
      </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-28 relative overflow-hidden"
        style={{ backgroundColor: "#FFFBF5" }}
      >
        {/* Subtle organic shape */}
        <svg
          aria-hidden="true"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute"
          style={{ bottom: "-60px", right: "-80px", width: "440px", height: "440px", opacity: 0.06, color: "#3D5A3E" }}
        >
          <g transform="translate(300,300)">
            <path d="M120,-160C154,-138,178,-99,186,-58C194,-16,185,28,168,68C151,108,126,144,91,163C56,182,11,184,-32,176C-75,168,-116,150,-144,118C-172,86,-187,40,-180,-4C-173,-48,-144,-90,-108,-120C-72,-150,-29,-168,16,-169C61,-170,86,-182,120,-160Z" fill="currentColor" />
          </g>
        </svg>
        <LeafSprig
          className="pointer-events-none absolute hidden md:block"
          style={{ top: "40px", left: "48px", width: "88px", height: "150px", opacity: 0.22, transform: "rotate(-14deg)" }}
        />
        <div className="relative shell-read text-center">
          <motion.div initial="hidden" animate="visible" className="flex flex-col items-center">
            <motion.div variants={fadeUp} custom={0}>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8"
                style={{ backgroundColor: "#F5EDE2", color: "#3D5A3E", border: "1px solid #E0CDB8", fontFamily: "var(--font-body), system-ui, sans-serif" }}
              >
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: "#3D5A3E" }} />
                Accepting New Patients
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl sm:text-6xl font-bold leading-[1.15] mb-6"
              style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              A full spectrum of{" "}
              <span style={{ color: "#3D5A3E" }}>compassionate care.</span>
            </motion.h1>

            <motion.div variants={fadeUp} custom={1.5} className="mb-6">
              <LeafRule style={{ width: "160px", height: "24px" }} />
            </motion.div>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg sm:text-xl leading-relaxed mb-10"
              style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif", maxWidth: "520px" }}
            >
              Comprehensive psychiatric and mental health services tailored to meet you where you are on your wellness journey.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-base font-semibold px-8 py-6 rounded-xl btn-breathe"
                style={{ backgroundColor: "#3D5A3E", color: "#FFFFFF", fontFamily: "var(--font-body), system-ui, sans-serif" }}
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
                style={{ borderColor: "#E0CDB8", color: "#4A3F38", backgroundColor: "transparent", fontFamily: "var(--font-body), system-ui, sans-serif" }}
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

      {/* Care imagery strip */}
      <PhotoBand
        src="/img/comfort-hands.webp"
        alt="Two people holding hands across a table in a warm, softly lit room"
        height={300}
        position="center 45%"
        headline="Serving Lauderhill, FL and surrounding communities"
        subline="In-person & telehealth options available"
      />

      {/* Services list */}
      <section className="py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="shell-read">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={sectionReveal}
            className="mb-14"
          >
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#C4956A", fontFamily: "var(--font-body), system-ui, sans-serif" }}
            >
              What We Offer
            </span>
            <h2
              className="text-4xl sm:text-5xl font-bold"
              style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              Every service, built around you.
            </h2>
          </motion.div>

          <div className="space-y-6">
            {services.slice(0, 5).map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Breather halfway down a long list — the run of ten cards is where
            this page previously went flat. */}
        <div className="my-16">
          <PhotoBand
            src="/img/reading-room.webp"
            alt="A person sitting and reading in a warm, sunlit room with an arched doorway"
            height={300}
            position="center 40%"
            eyebrow="However you come to us"
            headline="Care is not one conversation. It's the whole arc."
          />
        </div>

        <div className="shell-read">
          <div className="space-y-6">
            {services.slice(5).map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index + 5} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative overflow-hidden" style={{ backgroundColor: "#3D5A3E" }}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute"
          style={{ top: "-80px", right: "-80px", width: "360px", height: "360px", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,149,106,0.12) 0%, transparent 70%)" }}
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
            style={{ color: "#FFFFFF", fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            Ready to Get Started?
          </h2>
          <p
            className="text-lg mb-10 leading-relaxed"
            style={{ color: "rgba(255,251,245,0.82)", fontFamily: "var(--font-body), system-ui, sans-serif" }}
          >
            Contact us today to schedule your initial consultation. We are here to help you find the right path to mental wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Button
              asChild
              size="lg"
              className="text-base font-semibold px-10 py-6 rounded-xl"
              style={{ backgroundColor: "#FFFFFF", color: "#3D5A3E", fontFamily: "var(--font-body), system-ui, sans-serif" }}
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
              className="text-base font-semibold px-10 py-6 rounded-xl"
              style={{ borderColor: "rgba(255,251,245,0.3)", color: "#FFFFFF", backgroundColor: "transparent", fontFamily: "var(--font-body), system-ui, sans-serif" }}
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
              style={{ borderColor: "rgba(255,251,245,0.3)", color: "#FFFFFF", backgroundColor: "transparent", fontFamily: "var(--font-body), system-ui, sans-serif" }}
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
