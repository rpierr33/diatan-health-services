import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { careers, careerApplications } from "@/lib/db/schema";
import { requireAuth } from "@/lib/utils/auth-guard";
import { eq, desc } from "drizzle-orm";
import { z } from "zod";

const applicationSchema = z.object({
  careerId: z.number().optional(),
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  coverLetter: z.string().optional(),
  positionTitle: z.string().optional(),
});

export async function GET() {
  try {
    const rows = await db
      .select()
      .from(careers)
      .where(eq(careers.status, "open"))
      .orderBy(careers.createdAt);
    return NextResponse.json(rows);
  } catch (err) {
    console.error("[careers GET]", err);
    return NextResponse.json({ error: "Failed to fetch careers" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = applicationSchema.parse(body);

    const [app] = await db.insert(careerApplications).values({
      careerId: data.careerId,
      name: data.name,
      email: data.email,
      phone: data.phone,
      coverLetter: data.coverLetter,
    }).returning();

    return NextResponse.json(app, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input", details: err.issues }, { status: 400 });
    }
    console.error("[careers POST]", err);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}
