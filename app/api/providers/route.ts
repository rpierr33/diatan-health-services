import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { providers } from "@/lib/db/schema";
import { requireAuth } from "@/lib/utils/auth-guard";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";

const providerSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  title: z.string().min(1),
  credentials: z.string().optional(),
  specialties: z.array(z.string()).optional(),
  bio: z.string().optional(),
  photoUrl: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  isActive: z.boolean().optional(),
  displayOrder: z.number().optional(),
});

export async function GET() {
  try {
    const rows = await db
      .select()
      .from(providers)
      .where(eq(providers.isActive, true))
      .orderBy(providers.displayOrder);
    return NextResponse.json(rows);
  } catch (err) {
    console.error("[providers GET]", err);
    return NextResponse.json({ error: "Failed to fetch providers" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const authError = await requireAuth();
  if (authError) return authError;

  try {
    const body = await req.json();
    const data = providerSchema.parse(body);
    const [newProvider] = await db.insert(providers).values({
      name: data.name,
      slug: data.slug,
      title: data.title,
      credentials: data.credentials || "",
      specialties: data.specialties || [],
      bio: data.bio || "",
      photoUrl: data.photoUrl,
      email: data.email,
      phone: data.phone,
      isActive: data.isActive ?? true,
      displayOrder: data.displayOrder || 0,
    }).returning();
    return NextResponse.json(newProvider, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input", details: err.issues }, { status: 400 });
    }
    console.error("[providers POST]", err);
    return NextResponse.json({ error: "Failed to create provider" }, { status: 500 });
  }
}
