"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Clock, ChevronRight } from "lucide-react";

interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTimeMinutes: number;
  publishedAt: Date | null;
}

interface Props {
  posts: Post[];
  categoryLabels: Record<string, string>;
}

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }),
};

const stagger = { visible: { transition: { staggerChildren: 0.07 } } };

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function formatDate(date: Date | null): string {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function ResourcesClient({ posts, categoryLabels }: Props) {
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
                Resources &amp; Education
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-5xl sm:text-6xl font-bold leading-[1.15] mb-6" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
              Mental Health{" "}
              <span style={{ color: "#3D5A3E" }}>Resources</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg sm:text-xl leading-relaxed" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif", maxWidth: "480px" }}>
              Articles, guides, and educational content to support your mental wellness journey.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog posts */}
      <section className="py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-30" style={{ color: "#C4956A" }} aria-hidden="true" />
              <p className="text-lg" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                Articles coming soon. Check back for mental health resources.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
            >
              {posts.map((post) => (
                <motion.div key={post.id} variants={cardVariant}>
                  <Link href={`/resources/${post.slug}`}>
                    <div
                      className="group flex flex-col h-full rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-md hover:border-[#C4956A]/40"
                      style={{ backgroundColor: "#FFFBF5", borderColor: "#E0CDB8" }}
                    >
                      {/* Terracotta accent bar */}
                      <div className="h-1.5" style={{ backgroundColor: "#C4956A" }} aria-hidden="true" />
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className="px-3 py-1 rounded-full text-xs font-semibold"
                            style={{ backgroundColor: "#F5EDE2", color: "#3D5A3E", border: "1px solid #E0CDB8", fontFamily: "var(--font-body), system-ui, sans-serif" }}
                          >
                            {categoryLabels[post.category] || post.category}
                          </span>
                          <div className="flex items-center gap-1 text-xs" style={{ color: "#9A8F86", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>{post.readTimeMinutes} min read</span>
                          </div>
                        </div>

                        <h2
                          className="font-bold leading-snug mb-3 group-hover:opacity-80 transition-opacity line-clamp-2"
                          style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif", fontSize: "clamp(1rem, 1.3vw, 1.15rem)" }}
                        >
                          {post.title}
                        </h2>
                        <p className="text-sm leading-relaxed mb-4 flex-1 line-clamp-2" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-xs pt-4 border-t" style={{ borderColor: "#E0CDB8" }}>
                          <span style={{ color: "#9A8F86", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                            {formatDate(post.publishedAt)}
                          </span>
                          <span className="flex items-center gap-0.5 font-semibold" style={{ color: "#3D5A3E", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                            Read More
                            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Crisis Resources */}
      <section className="py-28" style={{ backgroundColor: "#F5EDE2" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={sectionReveal}>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C4956A", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
              In an Emergency
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-10" style={{ color: "#2A2420", fontFamily: "var(--font-heading), Georgia, serif" }}>
              Crisis Resources
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { name: "988 Lifeline", desc: "Call or text 988", link: "tel:988" },
                { name: "Crisis Text Line", desc: "Text HOME to 741741", link: "sms:741741?body=HOME" },
                { name: "Emergency Services", desc: "Call 911", link: "tel:911" },
              ].map((r) => (
                <a
                  key={r.name}
                  href={r.link}
                  className="block rounded-2xl p-5 text-center border transition-all hover:shadow-md"
                  style={{ backgroundColor: "#FFFFFF", borderColor: "#E0CDB8" }}
                >
                  <p className="font-bold text-sm mb-1" style={{ color: "#3D5A3E", fontFamily: "var(--font-heading), Georgia, serif" }}>
                    {r.name}
                  </p>
                  <p className="text-xs" style={{ color: "#6B5E52", fontFamily: "var(--font-body), system-ui, sans-serif" }}>
                    {r.desc}
                  </p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
