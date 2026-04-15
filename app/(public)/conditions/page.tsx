"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Calendar, ChevronRight } from "lucide-react";

const conditionCategories = [
  {
    category: "Mood Disorders",
    conditions: [
      { name: "Major Depressive Disorder", desc: "Persistent sadness, hopelessness, and loss of interest that significantly affects daily functioning." },
      { name: "Bipolar Disorder", desc: "Extreme mood swings including emotional highs (mania) and lows (depression)." },
      { name: "Depression", desc: "A serious mood disorder causing severe symptoms that affect how you feel, think, and handle daily activities." },
    ],
  },
  {
    category: "Anxiety & Related",
    conditions: [
      { name: "Anxiety Disorders", desc: "Persistent, excessive fear or worry that interferes with daily activities." },
      { name: "OCD", desc: "Unwanted recurring thoughts (obsessions) and repetitive behaviors (compulsions)." },
      { name: "Panic Disorder", desc: "Recurrent, unexpected panic attacks and persistent fear of future attacks." },
    ],
  },
  {
    category: "Trauma & Stress",
    conditions: [
      { name: "PTSD", desc: "Develops after experiencing or witnessing shocking, dangerous, or traumatic events." },
      { name: "Child Abuse Recovery", desc: "Trauma-informed care for survivors of childhood physical, emotional, or sexual abuse." },
      { name: "Trauma Treatment", desc: "Evidence-based therapies including EMDR and CPT to process and heal from trauma." },
    ],
  },
  {
    category: "Neurodevelopmental",
    conditions: [
      { name: "ADHD", desc: "Affects attention, self-control, activity levels, and executive functioning." },
      { name: "Learning Disorders", desc: "Conditions affecting reading, writing, mathematical abilities, and academic performance." },
      { name: "School Difficulties", desc: "Support for academic challenges, school refusal, and educational transitions." },
    ],
  },
  {
    category: "Psychotic & Personality",
    conditions: [
      { name: "Schizophrenia", desc: "Affects how a person thinks, feels, and behaves — including disruptions to thinking and perception." },
      { name: "Personality Disorders", desc: "Inflexible and unhealthy patterns of thinking, functioning, and behaving." },
    ],
  },
  {
    category: "Addiction & Behavioral",
    conditions: [
      { name: "Substance Use Disorders", desc: "Problematic patterns of alcohol or drug use leading to significant impairment." },
      { name: "Gambling Disorder", desc: "Persistent problematic gambling behavior causing distress or impairment." },
      { name: "Eating Disorders", desc: "Persistent eating behaviors that negatively impact health, emotions, and functioning." },
      { name: "Addiction Treatment", desc: "Comprehensive in-person treatment programs for substance use and behavioral addictions." },
    ],
  },
  {
    category: "Life & Situational",
    conditions: [
      { name: "Loneliness & Isolation", desc: "Support for social isolation, building meaningful connections, and social skills." },
      { name: "Sleep Problems", desc: "Assessment and treatment for insomnia, hypersomnia, and sleep-related disorders." },
      { name: "Parenting Challenges", desc: "Guidance and strategies for navigating the emotional challenges of parenthood." },
      { name: "Dementia Care", desc: "Compassionate psychiatric care for cognitive decline and caregiver support." },
      { name: "Financial Stress", desc: "Addressing the psychological impact of debt and economic hardship." },
      { name: "Gender Identity", desc: "Affirming, inclusive support for gender identity exploration and transition." },
      { name: "Urgent Mental Health", desc: "Timely psychiatric intervention for acute needs requiring prompt attention." },
    ],
  },
];

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function ConditionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-28" style={{ backgroundColor: "#FFFBF5" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={sectionReveal}>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ color: "#C4956A", fontFamily: "var(--font-body), system-ui, sans-serif" }}
            >
              Conditions We Treat
            </span>
            <h1
              className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
              style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              You are <span style={{ color: "#3D5A3E" }}>not alone.</span>
            </h1>
            <p
              className="text-lg leading-relaxed mb-10 max-w-lg mx-auto"
              style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}
            >
              Expert, compassionate care for a wide range of mental health conditions.
            </p>
            <Button
              asChild
              size="lg"
              className="text-base font-semibold px-8 py-6 rounded-xl btn-breathe"
              style={{ backgroundColor: "#3D5A3E", color: "#FFFFFF", fontFamily: "var(--font-body), system-ui, sans-serif" }}
            >
              <Link href="/book-appointment">
                <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
                Book an Evaluation
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Conditions by Category */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {conditionCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={sectionReveal}
              className="mb-16 last:mb-0"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-1.5 h-8 rounded-full"
                  style={{ backgroundColor: "#C4956A" }}
                />
                <h2
                  className="text-2xl font-bold"
                  style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}
                >
                  {cat.category}
                </h2>
              </div>

              {/* Condition cards */}
              <div className="space-y-3">
                {cat.conditions.map((condition) => (
                  <Link
                    key={condition.name}
                    href="/book-appointment"
                    className="group block rounded-xl px-6 py-5 transition-all duration-300"
                    style={{ backgroundColor: "#FFFBF5", border: "1px solid #F0E6D9" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#F5EDE2";
                      e.currentTarget.style.borderColor = "#C4956A";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#FFFBF5";
                      e.currentTarget.style.borderColor = "#F0E6D9";
                    }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3
                          className="text-base font-semibold mb-1"
                          style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}
                        >
                          {condition.name}
                        </h3>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}
                        >
                          {condition.desc}
                        </p>
                      </div>
                      <ChevronRight
                        className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ color: "#3D5A3E" }}
                      />
                    </div>
                  </Link>
                ))}
              </div>

              {/* Divider between categories */}
              {catIdx < conditionCategories.length - 1 && (
                <div className="mt-12 border-b" style={{ borderColor: "#F0E6D9" }} />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28" style={{ backgroundColor: "#3D5A3E" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={sectionReveal}
          className="max-w-2xl mx-auto px-4 text-center"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold mb-5"
            style={{ color: "#FFFBF5", fontFamily: "var(--font-heading), Georgia, serif" }}
          >
            Don&apos;t see your condition?
          </h2>
          <p
            className="text-base mb-10 leading-relaxed"
            style={{ color: "rgba(255,251,245,0.75)", fontFamily: "var(--font-body), system-ui, sans-serif" }}
          >
            This is not an exhaustive list. Contact us to discuss your needs — we are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-base font-semibold px-10 py-6 rounded-xl"
              style={{ backgroundColor: "#FFFBF5", color: "#3D5A3E", fontFamily: "var(--font-body), system-ui, sans-serif" }}
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base font-semibold px-10 py-6 rounded-xl"
              style={{ borderColor: "rgba(255,251,245,0.3)", color: "#FFFBF5", backgroundColor: "transparent", fontFamily: "var(--font-body), system-ui, sans-serif" }}
            >
              <a href="tel:9543475845">
                <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                (954) 347-5845
              </a>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
