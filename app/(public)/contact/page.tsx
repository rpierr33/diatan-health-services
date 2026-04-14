"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, AlertTriangle } from "lucide-react";
import ContactForm from "./ContactForm";

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }),
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const contactItems = [
  {
    icon: MapPin,
    label: "Address",
    content: (
      <div>
        <p>4200 NW 16th St. Suite 449</p>
        <p>Lauderhill, FL 33313</p>
      </div>
    ),
  },
  {
    icon: Phone,
    label: "Phone",
    content: (
      <a href="tel:9543475845" className="font-semibold transition-colors" style={{ color: "#3D5A3E" }}>
        (954) 347-5845
      </a>
    ),
  },
  {
    icon: Mail,
    label: "Email",
    content: (
      <a href="mailto:info@diatanhealthservices.com" className="font-semibold transition-colors break-all" style={{ color: "#3D5A3E" }}>
        info@diatanhealthservices.com
      </a>
    ),
  },
  {
    icon: Clock,
    label: "Office Hours",
    content: <p className="font-medium" style={{ color: "#3D5A3E" }}>Monday to Friday</p>,
  },
];

export default function ContactPage() {
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
                Get in Touch
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-5xl sm:text-6xl font-bold leading-[1.15] mb-6" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
              We are here{" "}
              <span style={{ color: "#3D5A3E" }}>for you.</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg sm:text-xl leading-relaxed" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif", maxWidth: "480px" }}>
              Reach out with questions, or to schedule your first appointment. We respond within one business day.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Crisis banner */}
      <div
        className="py-4 px-4 text-center font-medium"
        style={{ backgroundColor: "#C4956A", color: "#FFFFFF" }}
        role="alert"
      >
        <div className="flex items-center justify-center gap-2 flex-wrap text-sm" style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}>
          <AlertTriangle className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>
            <strong>Mental Health Crisis?</strong> Call or text{" "}
            <a href="tel:988" className="underline font-bold">988</a> (Suicide &amp; Crisis Lifeline) or text{" "}
            <strong>HOME</strong> to <strong>741741</strong>. For emergencies, call 911.
          </span>
        </div>
      </div>

      {/* Contact Info + Form */}
      <section className="py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
            >
              <motion.div variants={sectionReveal}>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C4956A", fontFamily: "var(--font-body), system-ui, sans-serif" }}>Practice Information</span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
                  Find Us
                </h2>
              </motion.div>

              <div className="space-y-6">
                {contactItems.map((item) => (
                  <motion.div key={item.label} variants={sectionReveal} className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#F5EDE2" }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: "#C4956A" }} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#9A8F86", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                        {item.label}
                      </p>
                      <div className="text-sm" style={{ color: "#2A2420", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                        {item.content}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Insurance list */}
              <motion.div
                variants={sectionReveal}
                className="mt-8 rounded-2xl p-6"
                style={{ backgroundColor: "#F5EDE2", border: "1px solid #E0CDB8" }}
              >
                <h3 className="font-bold text-base mb-4" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
                  Insurance We Accept
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Self-Pay", "Medicare", "Medicaid", "United Healthcare", "Avmed", "Oscar Health", "Cigna", "UMR"].map((ins) => (
                    <span
                      key={ins}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0CDB8", color: "#2A2420", fontFamily: "var(--font-body), system-ui, sans-serif" }}
                    >
                      {ins}
                    </span>
                  ))}
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: "#3D5A3E", color: "#FFFFFF", fontFamily: "var(--font-body), system-ui, sans-serif" }}
                  >
                    +4 more
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C4956A", fontFamily: "var(--font-body), system-ui, sans-serif" }}>Send a Message</span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
                Send Us a Message
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
