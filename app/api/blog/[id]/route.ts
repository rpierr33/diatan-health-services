import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { blogPosts } from "@/lib/db/schema";
import { requireAuth } from "@/lib/utils/auth-guard";
import { eq } from "drizzle-orm";
import { z } from "zod";

const BLOG_CATEGORIES = [
  "mental_health", "anxiety", "depression", "trauma", "wellness",
  "medication", "therapy", "telehealth", "crisis", "substance_use",
] as const;

const patchSchema = z.object({
  title: z.string().min(1).optional(),
  slug: z.string().min(1).optional(),
  excerpt: z.string().optional(),
  content: z.string().optional(),
  category: z.enum(BLOG_CATEGORIES).optional(),
  tags: z.array(z.string()).optional(),
  isPublished: z.boolean().optional(),
  readTimeMinutes: z.number().optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
});

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const numId = parseInt(id, 10);

  try {
    // Could be ID or slug lookup
    const rows = await db.select().from(blogPosts).where(eq(blogPosts.id, numId));
    if (!rows[0]) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(rows[0]);
  } catch (err) {
    console.error("[blog GET by id]", err);
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authError = await requireAuth();
  if (authError) return authError;

  const { id } = await params;
  const numId = parseInt(id, 10);

  try {
    const body = await req.json();
    const data = patchSchema.parse(body);

    const updateData: Record<string, unknown> = { ...data, updatedAt: new Date() };
    if (data.isPublished === true) {
      updateData.publishedAt = new Date();
    }

    const [updated] = await db
      .update(blogPosts)
      .set(updateData)
      .where(eq(blogPosts.id, numId))
      .returning();

    if (!updated) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(updated);
  } catch (err) {
    console.error("[blog PUT]", err);
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

  try {
    await db.delete(blogPosts).where(eq(blogPosts.id, numId));
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[blog DELETE]", err);
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
