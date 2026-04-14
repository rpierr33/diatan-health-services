import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Briefcase, Clock, Users } from "lucide-react";
import { db } from "@/lib/db";
import { careers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import CareerApplicationForm from "./CareerApplicationForm";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the team at Diatan Health Services, LLC. Open positions in psychiatric nursing, therapy, and administration.",
};

const fallbackJobs = [
  {
    id: 1,
    title: "Psychiatric Mental Health Nurse Practitioner (PMHNP)",
    department: "Clinical",
    location: "Lauderhill, FL (Hybrid)",
    type: "full_time",
    description: "We are seeking a board-certified PMHNP to join our growing team.",
    requirements: ["PMHNP-BC certification", "Florida APRN license", "2+ years psychiatric experience"],
    status: "open" as const,
  },
  {
    id: 2,
    title: "Licensed Clinical Social Worker (LCSW)",
    department: "Clinical",
    location: "Lauderhill, FL",
    type: "full_time",
    description: "Join our multidisciplinary team providing evidence-based therapy services.",
    requirements: ["Florida LCSW license", "Trauma-informed care experience", "CBT/DBT training"],
    status: "open" as const,
  },
  {
    id: 3,
    title: "Patient Care Coordinator",
    department: "Administrative",
    location: "Lauderhill, FL",
    type: "full_time",
    description: "Support our clinical team with scheduling, insurance, and patient communications.",
    requirements: ["Healthcare administrative experience", "Insurance verification knowledge", "EHR proficiency"],
    status: "open" as const,
  },
];

async function getJobs() {
  try {
    const jobs = await db.select().from(careers).where(eq(careers.status, "open"));
    return jobs.length > 0 ? jobs : fallbackJobs;
  } catch {
    return fallbackJobs;
  }
}

export default async function CareersPage() {
  const jobs = await getJobs();

  return (
    <>
      {/* Hero */}
      <section
        className="py-16 lg:py-24"
        style={{ background: "linear-gradient(135deg, #E8F5EE 0%, #F0F9F5 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge
            className="mb-4 text-sm"
            style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
          >
            Join Our Team
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: "#2C3E50" }}>
            Careers at Diatan Health
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#4A5568" }}>
            Help us build a community where mental wellness is a priority. We
            are always looking for compassionate, skilled professionals to join
            our team.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: "#2C3E50" }}>
            Why Join Diatan Health?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Collaborative Culture", desc: "A supportive, multidisciplinary team that values every voice." },
              { icon: Briefcase, title: "Meaningful Work", desc: "Directly improve the lives of people in your community every day." },
              { icon: Clock, title: "Work-Life Balance", desc: "Flexible scheduling with hybrid and telehealth options available." },
              { icon: MapPin, title: "Growing Practice", desc: "Be part of a growing practice with opportunities to advance." },
            ].map((item) => (
              <Card
                key={item.title}
                className="border text-center"
                style={{ borderColor: "#E2EAE6", backgroundColor: "#F0F7F4" }}
              >
                <CardContent className="p-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: "#27AE60" }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: "#FFFFFF" }} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: "#2C3E50" }}>
                    {item.title}
                  </h3>
                  <p className="text-xs" style={{ color: "#6B7280" }}>{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16" style={{ backgroundColor: "#F0F7F4" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: "#2C3E50" }}>
            Open Positions
          </h2>
          {jobs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg" style={{ color: "#6B7280" }}>
                No open positions at this time. Check back soon or send a
                general inquiry below.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {jobs.map((job) => (
                <Card
                  key={job.id}
                  className="border"
                  style={{ borderColor: "#E2EAE6", backgroundColor: "#FFFFFF" }}
                >
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <CardTitle className="text-lg" style={{ color: "#2C3E50" }}>
                          {job.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge style={{ backgroundColor: "#E8F5EE", color: "#27AE60" }}>
                            {job.department}
                          </Badge>
                          <span className="flex items-center gap-1 text-xs" style={{ color: "#6B7280" }}>
                            <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1 text-xs" style={{ color: "#6B7280" }}>
                            <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
                            {job.type === "full_time" ? "Full-Time" : job.type}
                          </span>
                        </div>
                      </div>
                      <Badge style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}>
                        Open
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3" style={{ color: "#4A5568" }}>
                      {job.description}
                    </p>
                    {Array.isArray(job.requirements) && job.requirements.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#6B7280" }}>
                          Requirements
                        </p>
                        <ul className="list-disc pl-4 space-y-0.5">
                          {(job.requirements as string[]).map((req: string) => (
                            <li key={req} className="text-xs" style={{ color: "#4A5568" }}>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: "#2C3E50" }}>
            Apply Now
          </h2>
          <CareerApplicationForm jobs={jobs.map((j) => ({ id: j.id, title: j.title }))} />
        </div>
      </section>
    </>
  );
}
