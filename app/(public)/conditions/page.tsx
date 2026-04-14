"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";

const conditionCategories = [
  { category: "Mood Disorders", conditions: [{ name: "Major Depressive Disorder", desc: "A mood disorder causing persistent sadness, hopelessness, and loss of interest that significantly affects daily functioning." }, { name: "Bipolar Disorder", desc: "A mental condition characterized by extreme mood swings including emotional highs (mania) and lows (depression)." }, { name: "Depression", desc: "A common but serious mood disorder causing severe symptoms that affect how you feel, think, and handle daily activities." }] },
  { category: "Anxiety & Related", conditions: [{ name: "Anxiety Disorders", desc: "Persistent, excessive fear or worry that interferes significantly with daily activities and quality of life." }, { name: "OCD", desc: "Obsessive-Compulsive Disorder involving unwanted recurring thoughts (obsessions) and repetitive behaviors (compulsions)." }, { name: "Panic Disorder", desc: "Recurrent, unexpected panic attacks and persistent, excessive fear of future attacks." }] },
  { category: "Trauma & Stress", conditions: [{ name: "PTSD", desc: "Post-Traumatic Stress Disorder develops in some people who have experienced or witnessed shocking, dangerous, or traumatic events." }, { name: "Child Abuse", desc: "Trauma-informed care for survivors of childhood physical, emotional, or sexual abuse and neglect." }, { name: "Trauma Treatment", desc: "Evidence-based trauma-focused therapies including EMDR and CPT to help process and heal from traumatic experiences." }] },
  { category: "Neurodevelopmental", conditions: [{ name: "ADHD", desc: "Attention-Deficit/Hyperactivity Disorder affecting attention, self-control, activity levels, and executive functioning." }, { name: "Learning Disorders", desc: "Neurodevelopmental conditions that affect reading, writing, mathematical abilities, and academic performance." }, { name: "School Difficulties", desc: "Support for academic challenges, school refusal, learning difficulties, and educational transitions." }] },
  { category: "Psychotic Disorders", conditions: [{ name: "Schizophrenia", desc: "A serious mental disorder affecting how a person thinks, feels, and behaves, including disruptions to thinking and perception." }, { name: "Personality Disorders", desc: "Inflexible and unhealthy patterns of thinking, functioning, and behaving that cause significant distress." }] },
  { category: "Addiction & Behavioral", conditions: [{ name: "Substance Use Disorders", desc: "Problematic patterns of alcohol or drug use leading to significant impairment or distress." }, { name: "Gambling Disorder", desc: "Persistent and recurrent problematic gambling behavior that causes significant distress or functional impairment." }, { name: "Eating Disorders", desc: "Serious conditions related to persistent eating behaviors that negatively impact health, emotions, and functioning." }, { name: "In-Person Addiction Treatment", desc: "Comprehensive in-person treatment programs for substance use disorders and behavioral addictions." }] },
  { category: "Special Populations", conditions: [{ name: "Gender Identity Issues", desc: "Affirming, inclusive, and compassionate support for gender identity exploration, dysphoria, and transition." }, { name: "Parenting Issues", desc: "Therapeutic guidance and practical strategies for navigating the emotional challenges of parenthood." }, { name: "Dementia", desc: "Compassionate psychiatric care for cognitive decline, behavioral symptoms, and support for caregivers." }] },
  { category: "General & Situational", conditions: [{ name: "Loneliness", desc: "Therapeutic support for social isolation, building meaningful connections, and developing social skills." }, { name: "Sleep Problems", desc: "Assessment and treatment for insomnia, hypersomnia, sleep anxiety, and other sleep-related disorders." }, { name: "Physical Illness", desc: "Psychological support for individuals managing chronic or acute physical health conditions and medical trauma." }, { name: "Debt-Related Mental Health", desc: "Addressing the significant psychological impact of financial stress, debt, and economic hardship." }, { name: "Mental Health Urgent Care", desc: "Timely psychiatric intervention for acute mental health needs that require prompt attention but not emergency hospitalization." }] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }),
};

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = { visible: { transition: { staggerChildren: 0.05 } } };

export default function ConditionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-28 relative overflow-hidden" style={{ backgroundColor: "#FFFBF5" }}>
        <svg aria-hidden="true" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute" style={{ bottom: "-60px", right: "-80px", width: "440px", height: "440px", opacity: 0.06, color: "#3D5A3E" }}>
          <g transform="translate(300,300)"><path d="M120,-160C154,-138,178,-99,186,-58C194,-16,185,28,168,68C151,108,126,144,91,163C56,182,11,184,-32,176C-75,168,-116,150,-144,118C-172,86,-187,40,-180,-4C-173,-48,-144,-90,-108,-120C-72,-150,-29,-168,16,-169C61,-170,86,-182,120,-160Z" fill="currentColor" /></g>
        </svg>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" className="flex flex-col items-center">
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8" style={{ backgroundColor: "#F5EDE2", color: "#3D5A3E", border: "1px solid #E0CDB8", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: "#3D5A3E" }} />
                Conditions We Treat
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-5xl sm:text-6xl font-bold leading-[1.15] mb-6" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
              You are <span style={{ color: "#3D5A3E" }}>not alone.</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg sm:text-xl leading-relaxed mb-10" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif", maxWidth: "480px" }}>
              We provide expert, compassionate care for a wide range of mental health conditions. Whatever you are facing, we are here to help.
            </motion.p>
            <motion.div variants={fadeUp} custom={3}>
              <Button asChild size="lg" className="text-base font-semibold px-8 py-6 rounded-xl btn-breathe" style={{ backgroundColor: "#3D5A3E", color: "#FFFFFF", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                <Link href="/book-appointment">
                  <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
                  Book an Evaluation
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Conditions by Category */}
      <section className="py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {conditionCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={sectionReveal}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 rounded-full" style={{ backgroundColor: "#C4956A" }} aria-hidden="true" />
                  <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
                    {cat.category}
                  </h2>
                </div>

                {/* Flowing pill cloud */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={stagger}
                  className="flex flex-wrap gap-3 mb-6"
                >
                  {cat.conditions.map((condition, i) => (
                    <motion.div key={condition.name} variants={fadeUp} custom={i * 0.04}>
                      <Link href="/book-appointment">
                        <span
                          className="inline-block px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-300"
                          style={{ backgroundColor: "transparent", color: "#2A2420", border: "1px solid #E0CDB8", fontFamily: "var(--font-body), system-ui, sans-serif" }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLSpanElement).style.backgroundColor = "#F5EDE2";
                            (e.currentTarget as HTMLSpanElement).style.borderColor = "#C4956A";
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
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28" style={{ backgroundColor: "#F5EDE2" }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={sectionReveal}
          className="max-w-3xl mx-auto px-4 text-center"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C4956A", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
            We&apos;re Here
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
            Don&apos;t See Your Condition?
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
            This is not an exhaustive list. Contact us to discuss your specific needs — we are here to help with any mental health concern.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base font-semibold px-10 py-6 rounded-xl" style={{ backgroundColor: "#3D5A3E", color: "#FFFFFF", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base font-semibold px-10 py-6 rounded-xl" style={{ borderColor: "#E0CDB8", color: "#4A3F38", backgroundColor: "transparent", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
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
