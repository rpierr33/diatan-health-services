import type { Metadata } from "next";
import { MapPin, Briefcase } from "lucide-react";
import { db } from "@/lib/db";
import { careers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the team at Diatan Health Services, LLC. Open positions in psychiatric nursing, therapy, and administration.",
};

const fallbackJobs = [
  { id: 1, title: "Psychiatric Mental Health Nurse Practitioner (PMHNP)", department: "Clinical", location: "Lauderhill, FL (Hybrid)", type: "full_time", description: "We are seeking a board-certified PMHNP to join our growing team.", requirements: ["PMHNP-BC certification", "Florida APRN license", "2+ years psychiatric experience"], status: "open" as const },
  { id: 2, title: "Licensed Clinical Social Worker (LCSW)", department: "Clinical", location: "Lauderhill, FL", type: "full_time", description: "Join our multidisciplinary team providing evidence-based therapy services.", requirements: ["Florida LCSW license", "Trauma-informed care experience", "CBT/DBT training"], status: "open" as const },
  { id: 3, title: "Patient Care Coordinator", department: "Administrative", location: "Lauderhill, FL", type: "full_time", description: "Support our clinical team with scheduling, insurance, and patient communications.", requirements: ["Healthcare administrative experience", "Insurance verification knowledge", "EHR proficiency"], status: "open" as const },
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
  return <CareersClient jobs={jobs} />;
}
