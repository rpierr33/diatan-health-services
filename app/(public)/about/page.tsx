"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Heart, Shield, Users, Star, CheckCircle2,
  Phone, Calendar, Award, BookOpen, Sparkles, MapPin, Clock,
} from "lucide-react";

const values = [
  { icon: Heart, title: "Compassionate Care", desc: "We approach every patient with empathy, dignity, and genuine concern for their well-being." },
  { icon: Shield, title: "Evidence-Based Practice", desc: "Our treatments are grounded in the latest psychiatric research and clinical best practices." },
  { icon: Users, title: "Inclusive Environment", desc: "We welcome everyone, regardless of background, identity, or circumstance." },
  { icon: Star, title: "Personalized Approach", desc: "No two people are the same. We tailor every treatment plan to the individual." },
  { icon: Sparkles, title: "Holistic Wellness", desc: "We treat the whole person — mind, body, and spirit — not just symptoms." },
  { icon: BookOpen, title: "Patient Education", desc: "We believe informed patients are empowered patients. We explain everything." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }),
};

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-28 relative overflow-hidden" style={{ backgroundColor: "#FFFBF5" }}>
        <svg aria-hidden="true" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none absolute" style={{ bottom: "-60px", right: "-80px", width: "440px", height: "440px", opacity: 0.06, color: "#3D5A3E" }}>
          <g transform="translate(300,300)"><path d="M120,-160C154,-138,178,-99,186,-58C194,-16,185,28,168,68C151,108,126,144,91,163C56,182,11,184,-32,176C-75,168,-116,150,-144,118C-172,86,-187,40,-180,-4C-173,-48,-144,-90,-108,-120C-72,-150,-29,-168,16,-169C61,-170,86,-182,120,-160Z" fill="currentColor" /></g>
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} custom={0}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8" style={{ backgroundColor: "#F5EDE2", color: "#3D5A3E", border: "1px solid #E0CDB8", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: "#3D5A3E" }} />
                  About Us
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} custom={1} className="text-5xl sm:text-6xl font-bold leading-[1.15] mb-6" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
                Compassionate care{" "}
                <span style={{ color: "#3D5A3E" }}>for our community.</span>
              </motion.h1>

              <motion.p variants={fadeUp} custom={2} className="text-lg leading-relaxed mb-8" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                Diatan Health Services, LLC is a psychiatric and mental health practice dedicated to fostering holistic mental well-being through compassionate, personalized care. We serve Lauderhill, FL and the surrounding communities with in-person and telehealth services.
              </motion.p>

              <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base font-semibold px-8 py-6 rounded-xl btn-breathe" style={{ backgroundColor: "#3D5A3E", color: "#FFFFFF", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                  <Link href="/book-appointment">
                    <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
                    Schedule an Appointment
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base font-semibold px-8 py-6 rounded-xl" style={{ borderColor: "#E0CDB8", color: "#4A3F38", backgroundColor: "transparent", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                  <a href="tel:9543475845">
                    <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                    Contact Us
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Practice info card */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center"
            >
              <div className="rounded-3xl p-8 shadow-sm text-center border" style={{ backgroundColor: "#FFFFFF", borderColor: "#E0CDB8", maxWidth: "380px", width: "100%" }}>
                <Image src="/diatan-logo.png" alt="Diatan Health Services" width={100} height={100} className="mx-auto rounded-2xl mb-6" />
                <h2 className="font-bold text-xl mb-1" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
                  Diatan Health Services, LLC
                </h2>
                <p className="text-sm mb-5" style={{ color: "#C4956A", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                  Psychiatric &amp; Mental Health Services
                </p>
                <div className="space-y-2.5 text-sm" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 shrink-0" style={{ color: "#C4956A" }} />
                    <span>4200 NW 16th St. Suite 449, Lauderhill, FL</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4 shrink-0" style={{ color: "#C4956A" }} />
                    <span className="font-medium" style={{ color: "#3D5A3E" }}>Monday to Friday</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={sectionReveal}
            className="grid lg:grid-cols-2 gap-8 mb-20"
          >
            <div className="rounded-2xl p-8 border-l-4" style={{ backgroundColor: "#F5EDE2", borderLeftColor: "#C4956A" }}>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C4956A", fontFamily: "var(--font-body), system-ui, sans-serif" }}>Our Mission</span>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
                Why We Do This
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                To foster holistic mental well-being by providing compassionate, personalized psychiatric care. We are committed to evidence-based practices, innovative therapeutic approaches, and creating a safe, inclusive environment where every patient feels seen, heard, and respected.
              </p>
            </div>
            <div className="rounded-2xl p-8 border-l-4" style={{ backgroundColor: "#FFFBF5", borderLeftColor: "#3D5A3E" }}>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#3D5A3E", fontFamily: "var(--font-body), system-ui, sans-serif" }}>Our Vision</span>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
                Where We&apos;re Going
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                A community where mental health care is accessible, destigmatized, and woven into every aspect of overall health and wellness. We envision a future where no one suffers in silence, and where seeking help is seen as an act of strength.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={sectionReveal}
            className="mb-12"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C4956A", fontFamily: "var(--font-body), system-ui, sans-serif" }}>What Drives Us</span>
            <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
              Our Core Values
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } }}
                className="group rounded-2xl p-8 border transition-all duration-300 hover:shadow-md"
                style={{ backgroundColor: "#FFFBF5", borderColor: "#E0CDB8" }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300" style={{ backgroundColor: "#F5EDE2" }}>
                  <value.icon className="w-6 h-6" style={{ color: "#C4956A" }} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: "#2A2420", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-28" style={{ backgroundColor: "#F5EDE2" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={sectionReveal}>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C4956A", fontFamily: "var(--font-body), system-ui, sans-serif" }}>Our Credentials</span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
                Board-Certified Providers
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                Our clinical team holds the PMHNP-BC (Psychiatric Mental Health Nurse Practitioner — Board Certified) credential, the gold standard in advanced psychiatric nursing practice. This certification demonstrates mastery of psychiatric assessment, diagnosis, psychotherapy, and medication management.
              </p>
              <ul className="space-y-3">
                {["PMHNP-BC Certified Providers", "Florida Licensed Advanced Practice Registered Nurses", "Continuing education in evidence-based practices", "Specialized training in trauma-informed care", "Telepsychiatry certified"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: "#3D5A3E" }} aria-hidden="true" />
                    <span style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: "#E0CDB8" }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/care-elders.jpg"
                  alt="Community care at Diatan Health Services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 border-t" style={{ backgroundColor: "#FFFFFF", borderColor: "#E0CDB8" }}>
              <div className="text-center mb-6">
                <h3 className="font-bold text-xl" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
                  Our Practice Philosophy
                </h3>
              </div>
              <div className="space-y-5 text-sm leading-relaxed" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                {[
                  { label: "Person-Centered Care", text: "We start with your goals, your values, and your life — not a checklist or a protocol." },
                  { label: "Trauma-Informed", text: "We recognize that past experiences shape present challenges. We approach care with sensitivity and understanding." },
                  { label: "Collaborative", text: "You are the expert on your own life. We are the experts on mental health. Together, we build the best plan." },
                  { label: "Recovery-Oriented", text: "We believe in the capacity for recovery, growth, and a meaningful life — regardless of diagnosis." },
                ].map((item) => (
                  <p key={item.label}>
                    <strong style={{ color: "#3D5A3E" }}>{item.label}:</strong>{" "}{item.text}
                  </p>
                ))}
              </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* Our Providers */}
      <section className="py-28" style={{ backgroundColor: "#FFFBF5" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={sectionReveal}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C4956A", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
              Our Providers
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
              The People Behind Your Care
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { src: "/doctor-4.png", name: "Dr. Jean Diatan", title: "Founder & Lead Psychiatrist", bio: "Board-certified with over 15 years of experience in psychiatric care." },
              { src: "/doctor-2.png", name: "Dr. Marie Joseph", title: "PMHNP-BC", bio: "Specializes in mood disorders and medication management." },
              { src: "/doctor-3.png", name: "Dr. Sarah Laurent", title: "PMHNP-BC", bio: "Expert in anxiety, PTSD, and trauma-informed care." },
              { src: "/doctor-1.png", name: "Dr. Claire Beaumont", title: "Clinical Therapist", bio: "Focuses on individual therapy and psychoeducation." },
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
                  <Image src={doc.src} alt={doc.name} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
                <h3 className="text-base font-semibold" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>{doc.name}</h3>
                <p className="text-sm mt-1" style={{ color: "#3D5A3E", fontFamily: "var(--font-body), system-ui, sans-serif" }}>{doc.title}</p>
                <p className="text-xs mt-2" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>{doc.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative overflow-hidden" style={{ backgroundColor: "#2A2420" }}>
        <div aria-hidden="true" className="pointer-events-none absolute" style={{ top: "-80px", right: "-80px", width: "360px", height: "360px", borderRadius: "50%", background: "radial-gradient(circle, rgba(196,149,106,0.12) 0%, transparent 70%)" }} />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={sectionReveal}
          className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight" style={{ color: "#FFFBF5", fontFamily: "var(--font-heading), Georgia, serif" }}>
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: "rgba(255,251,245,0.75)", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
            Schedule your initial consultation today and take the first step toward lasting mental wellness.
          </p>
          <Button asChild size="lg" className="text-base font-semibold px-10 py-6 rounded-xl" style={{ backgroundColor: "#FFFFFF", color: "#3D5A3E", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
            <Link href="/book-appointment">
              <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
              Book Your Appointment
            </Link>
          </Button>
        </motion.div>
      </section>
    </>
  );
}
