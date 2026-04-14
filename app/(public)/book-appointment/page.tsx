"use client";

import { motion } from "framer-motion";
import AppointmentForm from "./AppointmentForm";
import { CheckCircle2, Shield, Clock } from "lucide-react";

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }),
};

export default function BookAppointmentPage() {
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
                Schedule Your Visit
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} custom={1} className="text-5xl sm:text-6xl font-bold leading-[1.15] mb-6" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
              Take the{" "}
              <span style={{ color: "#3D5A3E" }}>first step.</span>
            </motion.h1>

            <motion.p variants={fadeUp} custom={2} className="text-lg sm:text-xl leading-relaxed mb-10" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif", maxWidth: "480px" }}>
              Complete the form below and our team will contact you within 1 business day to confirm your appointment.
            </motion.p>

            {/* Trust row */}
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap items-center justify-center gap-6 text-sm" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
              {[
                { icon: Shield, label: "HIPAA Compliant" },
                { icon: CheckCircle2, label: "Response within 1 business day" },
                { icon: Clock, label: "Same-week appointments available" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4" style={{ color: "#3D5A3E" }} />
                  {label}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ZocDoc CTA */}
      <section className="py-10 border-b" style={{ backgroundColor: "#F5EDE2", borderColor: "#E0CDB8" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold mb-4" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
            Already on ZocDoc? Book directly with verified insurance info:
          </p>
          <a
            href="https://www.zocdoc.com/practice/diatan-health-services-115310"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-base font-bold px-8 py-4 rounded-xl shadow-sm transition-all duration-200 hover:opacity-90 hover:shadow-md"
            style={{ backgroundColor: "#3D5A3E", color: "#FFFFFF", fontFamily: "var(--font-body), system-ui, sans-serif" }}
          >
            Book Online via ZocDoc
          </a>
          <p className="text-xs mt-4" style={{ color: "#9A8F86", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
            Or fill out the form below and we&apos;ll contact you within 1 business day.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={sectionReveal}
          >
            <AppointmentForm />
          </motion.div>
        </div>
      </section>
    </>
  );
}
