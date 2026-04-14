import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { providers } from "@/lib/db/schema";
import { requireAuth } from "@/lib/utils/auth-guard";
import { eq } from "drizzle-orm";
import { z } from "zod";

const ALLOWED_FIELDS = [
  "name", "title", "credentials", "specialties", "bio", "photoUrl",
  "email", "phone", "isActive", "displayOrder",
] as const;

const patchSchema = z.object({
  name: z.string().min(1).optional(),
  title: z.string().min(1).optional(),
  credentials: z.string().optional(),
  specialties: z.array(z.string()).optional(),
  bio: z.string().optional(),
  photoUrl: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  isActive: z.boolean().optional(),
  displayOrder: z.number().optional(),
});

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = await requireAuth();
  if (authError) return authError;

  const { id } = await params;
  const numId = parseInt(id, 10);
  if (isNaN(numId)) return NextResponse.json({ error: "Invalid ID" }, { status: 400 });

  try {
    const body = await req.json();
    const data = patchSchema.parse(body);
    const allowedData = Object.fromEntries(
      Object.entries(data).filter(([k]) => ALLOWED_FIELDS.includes(k as typeof ALLOWED_FIELDS[number]))
    );
    const [updated] = await db
      .update(providers)
      .set({ ...allowedData, updatedAt: new Date() })
      .where(eq(providers.id, numId))
      .returning();
    if (!updated) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(updated);
  } catch (err) {
    console.error("[providers PATCH]", err);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = await requireAuth();
  if (authError) return authError;

  const { id } = await params;
  const numId = parseInt(id, 10);
  if (isNaN(numId)) return NextResponse.json({ error: "Invalid ID" }, { status: 400 });

  try {
    // Soft delete via isActive
    await db
      .update(providers)
      .set({ isActive: false, updatedAt: new Date() })
      .where(eq(providers.id, numId));
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[providers DELETE]", err);
    return NextResponse.json({ error: "Failed to deactivate provider" }, { status: 500 });
  }
}
