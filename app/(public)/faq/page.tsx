"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "First Visit",
    questions: [
      { q: "What should I expect at my first appointment?", a: "Your first appointment is a psychiatric evaluation. This typically lasts 60-90 minutes. Your provider will review your medical and psychiatric history, discuss your current symptoms, and work with you to develop a personalized treatment plan. You may bring a list of current medications, any previous diagnoses, and questions you have." },
      { q: "How do I prepare for my first appointment?", a: "Please bring: a valid photo ID, insurance card, a list of all current medications (including supplements), any previous psychiatric or medical records if available, and a list of questions you want to ask. Arriving 10-15 minutes early to complete paperwork is recommended." },
      { q: "Can I bring someone with me to my appointment?", a: "Yes. You are welcome to bring a trusted family member or support person. However, most of the appointment will be one-on-one between you and your provider. Please let us know in advance if you plan to bring someone." },
    ],
  },
  {
    category: "Insurance & Payment",
    questions: [
      { q: "What insurance plans do you accept?", a: "We accept Self-Pay, Medicare, Medicaid, United Healthcare, Avmed, Oscar Health, Cigna, UMR, Medica, Preferred Care Partners, Oxford Health, and Obama Care/ACA. If your insurance is not listed, please call us at (954) 347-5845 to discuss your options." },
      { q: "Do you offer a sliding scale or payment plans for self-pay patients?", a: "We are committed to making care accessible. Please contact our office to discuss self-pay rates and payment arrangement options. We will work with you to find a plan that fits your situation." },
      { q: "How do I verify my insurance benefits before my appointment?", a: "You can call the member services number on the back of your insurance card to verify your mental health benefits. Our team will also verify your insurance before your appointment. If you have questions, call us at (954) 347-5845." },
    ],
  },
  {
    category: "Therapy & Treatment",
    questions: [
      { q: "What is the difference between a psychiatrist and a therapist?", a: "A psychiatrist (or psychiatric nurse practitioner) can prescribe medications and conduct psychiatric evaluations. A therapist (psychologist, social worker, counselor) provides talk therapy. Our PMHNP-BC providers can do both — offering evaluations, medication management, AND therapy." },
      { q: "How long does treatment typically last?", a: "Treatment length varies significantly by individual. Some conditions respond quickly to treatment, while others require longer-term management. Your provider will discuss realistic expectations during your initial evaluation and adjust your care plan as you progress." },
      { q: "Will I need to take medication?", a: "Not necessarily. Many conditions can be managed with therapy alone, lifestyle changes, and psychoeducation. Medication is discussed as one option among many, and you will always have an active role in any decision about your treatment." },
    ],
  },
  {
    category: "Telehealth",
    questions: [
      { q: "Is telehealth as effective as in-person care?", a: "Research consistently shows that telehealth is clinically equivalent to in-person care for most psychiatric conditions, including evaluation, therapy, and medication management. Many patients actually prefer telehealth for its convenience and privacy." },
      { q: "What do I need for a telehealth appointment?", a: "You need a stable internet connection, a device with a camera and microphone (smartphone, tablet, or computer), and a private, quiet space. You will receive a secure link before your appointment. If you have technical difficulties, you can call us and switch to a phone appointment." },
      { q: "Can medications be prescribed via telehealth?", a: "Yes. Our PMHNP-BC providers can prescribe medications, including controlled substances when clinically appropriate and in compliance with state regulations, during telehealth appointments." },
    ],
  },
  {
    category: "Crisis & Emergencies",
    questions: [
      { q: "What should I do if I am in a mental health crisis?", a: "If you are in immediate danger, call 911. If you are having thoughts of suicide or are in a mental health crisis, call or text 988 (Suicide & Crisis Lifeline) available 24/7. You can also text HOME to 741741 (Crisis Text Line). For non-emergency concerns, call our office at (954) 347-5845." },
      { q: "Do you provide crisis intervention services?", a: "Yes. We offer crisis intervention services during business hours. Our team can conduct urgent assessments, provide safety planning, and coordinate with higher levels of care when necessary. For after-hours crises, the 988 Lifeline is available 24/7." },
    ],
  },
  {
    category: "Privacy & HIPAA",
    questions: [
      { q: "Is my information confidential?", a: "Yes. Your health information is protected by HIPAA (Health Insurance Portability and Accountability Act). We will not disclose your information without your written consent, except in specific situations required by law (e.g., imminent danger to self or others)." },
      { q: "Can I see my own records?", a: "Yes. You have the right to access your medical records. Submit a written request to our office and we will provide your records within the timeframe required by law (typically 30 days)." },
    ],
  },
];

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }),
};

function FAQAccordion({ questions }: { questions: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y" style={{ borderColor: "#E0CDB8" }}>
      {questions.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={item.q}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-start justify-between gap-4 py-5 px-0 text-left transition-colors duration-200"
            >
              <span
                className="font-semibold text-sm leading-snug"
                style={{ color: isOpen ? "#3D5A3E" : "#2A2420", fontFamily: "var(--font-body), system-ui, sans-serif" }}
              >
                {item.q}
              </span>
              <ChevronDown
                className="w-5 h-5 flex-shrink-0 mt-0.5 transition-all duration-300"
                style={{ color: isOpen ? "#3D5A3E" : "#C4956A", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
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
                  <p className="pb-5 pr-8 text-sm leading-relaxed" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                    {item.a}
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

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-28 relative overflow-hidden" style={{ backgroundColor: "#FFFBF5" }}>
        <svg aria-hidden="true" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute" style={{ bottom: "-60px", right: "-80px", width: "440px", height: "440px", opacity: 0.05, color: "#3D5A3E" }}>
          <g transform="translate(300,300)"><path d="M120,-160C154,-138,178,-99,186,-58C194,-16,185,28,168,68C151,108,126,144,91,163C56,182,11,184,-32,176C-75,168,-116,150,-144,118C-172,86,-187,40,-180,-4C-173,-48,-144,-90,-108,-120C-72,-150,-29,-168,16,-169C61,-170,86,-182,120,-160Z" fill="currentColor" /></g>
        </svg>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" className="flex flex-col items-center">
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8" style={{ backgroundColor: "#F5EDE2", color: "#3D5A3E", border: "1px solid #E0CDB8", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: "#3D5A3E" }} />
                FAQ
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-5xl sm:text-6xl font-bold leading-[1.15] mb-6" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
              Questions,{" "}
              <span style={{ color: "#3D5A3E" }}>answered.</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg sm:text-xl leading-relaxed" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif", maxWidth: "480px" }}>
              Common questions about our services, insurance, telehealth, and what to expect. Can&apos;t find your answer? Call us.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {faqs.map((section) => (
              <motion.div
                key={section.category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={sectionReveal}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-7 rounded-full" style={{ backgroundColor: "#C4956A" }} aria-hidden="true" />
                  <h2
                    className="text-2xl font-bold"
                    style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}
                  >
                    {section.category}
                  </h2>
                </div>
                <div className="bg-white rounded-2xl border px-7" style={{ borderColor: "#E0CDB8" }}>
                  <FAQAccordion questions={section.questions} />
                </div>
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
          className="max-w-xl mx-auto px-4 text-center"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C4956A", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
            We&apos;re Here
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
            Still have questions?
          </h2>
          <p className="text-base mb-10 leading-relaxed" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
            Our friendly team is here to help. Call us, send a message, or book your first appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base font-semibold px-10 py-6 rounded-xl btn-breathe" style={{ backgroundColor: "#3D5A3E", color: "#FFFFFF", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
              <Link href="/book-appointment">
                <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
                Book an Appointment
              </Link>
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
