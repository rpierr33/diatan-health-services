import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { inquiries } from "@/lib/db/schema";
import { requireAuth } from "@/lib/utils/auth-guard";
import { desc } from "drizzle-orm";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(1),
  source: z.enum(["contact_form", "appointment_form", "careers_form", "phone", "referral", "other"]).optional(),
});

export async function GET() {
  const authError = await requireAuth();
  if (authError) return authError;

  try {
    const rows = await db.select().from(inquiries).orderBy(desc(inquiries.createdAt));
    return NextResponse.json(rows);
  } catch (err) {
    console.error("[inquiries GET]", err);
    return NextResponse.json({ error: "Failed to fetch inquiries" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = inquirySchema.parse(body);

    const [newInquiry] = await db.insert(inquiries).values({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      source: data.source || "contact_form",
      status: "new",
    }).returning();

    return NextResponse.json(newInquiry, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input", details: err.issues }, { status: 400 });
    }
    console.error("[inquiries POST]", err);
    return NextResponse.json({ error: "Failed to create inquiry" }, { status: 500 });
  }
}
