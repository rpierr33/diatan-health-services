"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Users, Clock } from "lucide-react";
import CareerApplicationForm from "./CareerApplicationForm";

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: unknown;
  status: string;
}

interface Props {
  jobs: Job[];
}

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }),
};

const benefits = [
  { icon: Users, title: "Collaborative Culture", desc: "A supportive, multidisciplinary team that values every voice." },
  { icon: Briefcase, title: "Meaningful Work", desc: "Directly improve the lives of people in your community every day." },
  { icon: Clock, title: "Work-Life Balance", desc: "Flexible scheduling with hybrid and telehealth options available." },
  { icon: MapPin, title: "Growing Practice", desc: "Be part of a growing practice with opportunities to advance." },
];

export default function CareersClient({ jobs }: Props) {
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
                Join Our Team
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-5xl sm:text-6xl font-bold leading-[1.15] mb-6" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
              Careers at{" "}
              <span style={{ color: "#3D5A3E" }}>Diatan Health.</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg sm:text-xl leading-relaxed" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif", maxWidth: "520px" }}>
              Help us build a community where mental wellness is a priority. We are always looking for compassionate, skilled professionals to join our team.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={sectionReveal} className="mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C4956A", fontFamily: "var(--font-body), system-ui, sans-serif" }}>Why Us</span>
            <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
              Why Join Diatan Health?
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((item) => (
              <motion.div
                key={item.title}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } }}
                className="group rounded-2xl p-8 border text-center transition-all duration-300 hover:shadow-md"
                style={{ backgroundColor: "#FFFBF5", borderColor: "#E0CDB8" }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform duration-300" style={{ backgroundColor: "#F5EDE2" }}>
                  <item.icon className="w-6 h-6" style={{ color: "#C4956A" }} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-sm mb-2" style={{ color: "#2A2420", fontFamily: "var(--font-body), system-ui, sans-serif" }}>{item.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-28" style={{ backgroundColor: "#F5EDE2" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={sectionReveal} className="mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C4956A", fontFamily: "var(--font-body), system-ui, sans-serif" }}>Hiring Now</span>
            <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
              Open Positions
            </h2>
          </motion.div>

          {jobs.length === 0 ? (
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionReveal} className="text-center py-12">
              <p className="text-lg" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                No open positions at this time. Check back soon or send a general inquiry below.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="space-y-5"
            >
              {jobs.map((job) => (
                <motion.div
                  key={job.id}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } } }}
                  className="rounded-2xl border bg-white p-7"
                  style={{ borderColor: "#E0CDB8" }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-bold text-lg mb-2" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "#F5EDE2", color: "#3D5A3E", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1 text-xs" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                          <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1 text-xs" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                          <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
                          {job.type === "full_time" ? "Full-Time" : job.type}
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold shrink-0" style={{ backgroundColor: "#3D5A3E", color: "#FFFFFF", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                      Open
                    </span>
                  </div>
                  <p className="text-sm mb-3" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                    {job.description}
                  </p>
                  {Array.isArray(job.requirements) && (job.requirements as string[]).length > 0 && (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: "#9A8F86", fontFamily: "var(--font-body), system-ui, sans-serif" }}>Requirements</p>
                      <ul className="list-disc pl-4 space-y-0.5">
                        {(job.requirements as string[]).map((req: string) => (
                          <li key={req} className="text-xs" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Application Form */}
      <section className="py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={sectionReveal}>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C4956A", fontFamily: "var(--font-body), system-ui, sans-serif" }}>Ready to Apply?</span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-10" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
              Apply Now
            </h2>
            <CareerApplicationForm jobs={jobs.map((j) => ({ id: j.id, title: j.title }))} />
          </motion.div>
        </div>
      </section>
    </>
  );
}
