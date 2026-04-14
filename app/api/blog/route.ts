import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { blogPosts } from "@/lib/db/schema";
import { requireAuth } from "@/lib/utils/auth-guard";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";

const BLOG_CATEGORIES = [
  "mental_health", "anxiety", "depression", "trauma", "wellness",
  "medication", "therapy", "telehealth", "crisis", "substance_use",
] as const;

const postSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  excerpt: z.string().min(1),
  content: z.string().min(1),
  category: z.enum(BLOG_CATEGORIES),
  tags: z.array(z.string()).optional(),
  isPublished: z.boolean().optional(),
  readTimeMinutes: z.number().optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
});

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const publishedOnly = searchParams.get("published") === "true";

  try {
    const query = db
      .select()
      .from(blogPosts)
      .orderBy(desc(blogPosts.createdAt));

    const rows = await query;
    const filtered = publishedOnly ? rows.filter((r) => r.isPublished) : rows;
    return NextResponse.json(filtered);
  } catch (err) {
    console.error("[blog GET]", err);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const authError = await requireAuth();
  if (authError) return authError;

  try {
    const body = await req.json();
    const data = postSchema.parse(body);

    const [newPost] = await db.insert(blogPosts).values({
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt,
      content: data.content,
      category: data.category,
      tags: data.tags || [],
      isPublished: data.isPublished || false,
      publishedAt: data.isPublished ? new Date() : undefined,
      readTimeMinutes: data.readTimeMinutes || 5,
      seoTitle: data.seoTitle,
      seoDescription: data.seoDescription,
    }).returning();

    return NextResponse.json(newPost, { status: 201 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input", details: err.issues }, { status: 400 });
    }
    console.error("[blog POST]", err);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
