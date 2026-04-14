import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { appointments } from "@/lib/db/schema";
import { requireAuth } from "@/lib/utils/auth-guard";
import { desc } from "drizzle-orm";
import { z } from "zod";

const appointmentSchema = z.object({
  patientFirstName: z.string().min(1),
  patientLastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
  dateOfBirth: z.string().optional(),
  insurance: z.string().min(1),
  memberId: z.string().optional(),
  focusArea: z.string().min(1),
  appointmentType: z.string().min(1),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().optional(),
  isNewPatient: z.boolean().default(true),
  hipaaConsent: z.boolean(),
});

export async function GET() {
  const authError = await requireAuth();
  if (authError) return authError;

  try {
    const rows = await db
      .select()
      .from(appointments)
      .orderBy(desc(appointments.createdAt));
    return NextResponse.json(rows);
  } catch (err) {
    console.error("[appointments GET]", err);
    return NextResponse.json({ error: "Failed to fetch appointments" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = appointmentSchema.parse(body);

    const [newAppt] = await db.insert(appointments).values({
      patientFirstName: data.patientFirstName,
      patientLastName: data.patientLastName,
      email: data.email,
      phone: data.phone,
      dateOfBirth: data.dateOfBirth,
      insurance: data.insurance,
      memberId: data.memberId,
      focusArea: data.focusArea,
      appointmentType: data.appointmentType,
      preferredDate: data.preferredDate,
      preferredTime: data.preferredTime,
      message: data.message,
      isNewPatient: data.isNewPatient,
      hipaaConsent: data.hipaaConsent,
      status: "new",
    }).returning();

    return NextResponse.json(newAppt, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input", details: err.issues }, { status: 400 });
    }
    console.error("[appointments POST]", err);
    return NextResponse.json({ error: "Failed to create appointment" }, { status: 500 });
  }
}
