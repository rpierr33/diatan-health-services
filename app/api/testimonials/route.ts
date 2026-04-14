import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { testimonials } from "@/lib/db/schema";
import { eq, asc } from "drizzle-orm";

export async function GET() {
  try {
    const rows = await db
      .select()
      .from(testimonials)
      .where(eq(testimonials.isFeatured, true))
      .orderBy(asc(testimonials.displayOrder));
    return NextResponse.json(rows);
  } catch (err) {
    console.error("[testimonials GET]", err);
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 });
  }
}
