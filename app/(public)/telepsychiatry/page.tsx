"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Video, Wifi, Lock, Smartphone, Monitor,
  CheckCircle2, Phone, Calendar, ChevronRight,
} from "lucide-react";

const steps = [
  { step: "1", title: "Book Your Appointment", desc: "Schedule online or call (954) 347-5845. Our team will confirm your appointment via email." },
  { step: "2", title: "Receive Your Link", desc: "Before your appointment, you will receive a secure link to join your session." },
  { step: "3", title: "Connect & Start", desc: "Join from any device with a camera and internet connection. Your provider will be ready." },
  { step: "4", title: "Receive Your Care", desc: "Get the same quality psychiatric evaluation, therapy, or medication management as in-person." },
];

const requirements = [
  { icon: Wifi, label: "Stable internet connection" },
  { icon: Monitor, label: "Computer, tablet, or smartphone" },
  { icon: Lock, label: "Private, quiet space" },
  { icon: Smartphone, label: "Camera and microphone" },
];

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }),
};

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

export default function TelepsychiatryPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-28 relative overflow-hidden" style={{ backgroundColor: "#FFFBF5" }}>
        <svg aria-hidden="true" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute" style={{ bottom: "-60px", right: "-80px", width: "440px", height: "440px", opacity: 0.05, color: "#3D5A3E" }}>
          <g transform="translate(300,300)"><path d="M120,-160C154,-138,178,-99,186,-58C194,-16,185,28,168,68C151,108,126,144,91,163C56,182,11,184,-32,176C-75,168,-116,150,-144,118C-172,86,-187,40,-180,-4C-173,-48,-144,-90,-108,-120C-72,-150,-29,-168,16,-169C61,-170,86,-182,120,-160Z" fill="currentColor" /></g>
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} custom={0}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8" style={{ backgroundColor: "#F5EDE2", color: "#3D5A3E", border: "1px solid #E0CDB8", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: "#3D5A3E" }} />
                  Telehealth Services
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} custom={1} className="text-5xl sm:text-6xl font-bold leading-[1.15] mb-6" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
                Care wherever{" "}
                <span style={{ color: "#3D5A3E" }}>you are.</span>
              </motion.h1>

              <motion.p variants={fadeUp} custom={2} className="text-lg leading-relaxed mb-10" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif", maxWidth: "480px" }}>
                Our HIPAA-compliant telepsychiatry platform connects you with board-certified psychiatric providers via secure video or phone — from your home, office, or anywhere in Florida.
              </motion.p>

              <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base font-semibold px-8 py-6 rounded-xl btn-breathe" style={{ backgroundColor: "#3D5A3E", color: "#FFFFFF", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                  <Link href="/book-appointment">
                    <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
                    Book Telehealth Visit
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base font-semibold px-8 py-6 rounded-xl" style={{ borderColor: "#E0CDB8", color: "#4A3F38", backgroundColor: "transparent", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                  <a href="tel:9543475845">
                    <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                    Call Us
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Video illustration */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex items-center justify-center"
            >
              <div
                className="rounded-3xl p-12 text-center border"
                style={{ backgroundColor: "#FFFFFF", borderColor: "#E0CDB8", boxShadow: "0 8px 32px rgba(61,90,62,0.08)" }}
              >
                <Video className="w-24 h-24 mx-auto mb-4" style={{ color: "#3D5A3E", opacity: 0.5 }} aria-hidden="true" />
                <p className="font-bold text-xl" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
                  Secure &amp; Private
                </p>
                <p className="mt-2 text-sm" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                  HIPAA-compliant platform
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={sectionReveal} className="mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C4956A", fontFamily: "var(--font-body), system-ui, sans-serif" }}>Simple Process</span>
            <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
              How Telepsychiatry Works
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } }}
                className="rounded-2xl p-7 border text-center"
                style={{ backgroundColor: "#FFFBF5", borderColor: "#E0CDB8" }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold" style={{ backgroundColor: "#F5EDE2", color: "#C4956A", fontFamily: "var(--font-heading), Georgia, serif" }}>
                  {step.step}
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: "#2A2420", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What to expect + requirements */}
      <section className="py-28" style={{ backgroundColor: "#F5EDE2" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={sectionReveal}>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C4956A", fontFamily: "var(--font-body), system-ui, sans-serif" }}>Expectations</span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
                What to Expect
              </h2>
              <div className="space-y-5">
                {[
                  { title: "Same Quality Care", desc: "Telehealth appointments are clinically equivalent to in-person visits. We can prescribe medications, conduct evaluations, and provide therapy." },
                  { title: "Session Length", desc: "Initial evaluations typically run 60-90 minutes. Follow-up appointments are usually 30-45 minutes." },
                  { title: "Preparation", desc: "Have your medication list, insurance card, and a list of questions ready. Log in 5 minutes early to test your connection." },
                  { title: "Privacy", desc: "Choose a private space where you feel comfortable speaking openly. Headphones are recommended for additional privacy." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#3D5A3E" }} aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-sm mb-0.5" style={{ color: "#2A2420", fontFamily: "var(--font-body), system-ui, sans-serif" }}>{item.title}</p>
                      <p className="text-sm" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C4956A", fontFamily: "var(--font-body), system-ui, sans-serif" }}>Requirements</span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
                Technology Needed
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {requirements.map((req) => (
                  <div key={req.label} className="flex items-center gap-3 p-4 rounded-2xl border" style={{ backgroundColor: "#FFFFFF", borderColor: "#E0CDB8" }}>
                    <req.icon className="w-5 h-5 shrink-0" style={{ color: "#C4956A" }} aria-hidden="true" />
                    <span className="text-sm font-medium" style={{ color: "#2A2420", fontFamily: "var(--font-body), system-ui, sans-serif" }}>{req.label}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-xl p-5 border" style={{ backgroundColor: "#FFFBF5", borderColor: "#E0CDB8" }}>
                <p className="font-semibold text-sm mb-1" style={{ color: "#2A2420", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                  Technical Difficulties?
                </p>
                <p className="text-sm" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                  If you experience technical issues, call us directly at{" "}
                  <a href="tel:9543475845" style={{ color: "#3D5A3E", fontWeight: 600 }}>(954) 347-5845</a>{" "}
                  and we will switch to a phone appointment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services via Telehealth */}
      <section className="py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={sectionReveal} className="mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C4956A", fontFamily: "var(--font-body), system-ui, sans-serif" }}>Available Remotely</span>
            <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
              Services Available via Telehealth
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {["Psychiatric Evaluations", "Medication Management & Refills", "Individual Therapy", "Psychoeducation", "Follow-Up Appointments", "Wellness Consultations"].map((service) => (
              <motion.div
                key={service}
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } }}
                className="flex items-center gap-3 p-5 rounded-2xl border"
                style={{ backgroundColor: "#FFFBF5", borderColor: "#E0CDB8" }}
              >
                <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: "#3D5A3E" }} aria-hidden="true" />
                <span className="font-medium text-sm" style={{ color: "#2A2420", fontFamily: "var(--font-body), system-ui, sans-serif" }}>{service}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative overflow-hidden" style={{ backgroundColor: "#2A2420" }}>
        <div aria-hidden="true" className="pointer-events-none absolute" style={{ top: "-80px", right: "-80px", width: "360px", height: "360px", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,149,106,0.12) 0%, transparent 70%)" }} />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={sectionReveal} className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight" style={{ color: "#FFFBF5", fontFamily: "var(--font-heading), Georgia, serif" }}>
            Ready for Your Telehealth Visit?
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: "rgba(255,251,245,0.75)", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
            Book your appointment online or call us. We accept most insurance plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base font-semibold px-10 py-6 rounded-xl" style={{ backgroundColor: "#FFFFFF", color: "#3D5A3E", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
              <Link href="/book-appointment">
                <Video className="w-5 h-5 mr-2" aria-hidden="true" />
                Book Telehealth Appointment
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base font-semibold px-10 py-6 rounded-xl" style={{ borderColor: "rgba(255,251,245,0.3)", color: "#FFFFFF", backgroundColor: "transparent", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
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
