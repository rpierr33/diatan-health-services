import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { inquiries } from "@/lib/db/schema";
import { requireAuth } from "@/lib/utils/auth-guard";
import { eq } from "drizzle-orm";
import { z } from "zod";

const patchSchema = z.object({
  status: z.enum(["new", "contacted", "resolved", "closed"]).optional(),
});

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = await requireAuth();
  if (authError) return authError;

  const { id } = await params;
  const numId = parseInt(id, 10);
  if (isNaN(numId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    const body = await req.json();
    const data = patchSchema.parse(body);
    const [updated] = await db
      .update(inquiries)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(inquiries.id, numId))
      .returning();
    if (!updated) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(updated);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input", details: err.issues }, { status: 400 });
    }
    console.error("[inquiries PATCH]", err);
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
  if (isNaN(numId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    await db.delete(inquiries).where(eq(inquiries.id, numId));
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[inquiries DELETE]", err);
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
