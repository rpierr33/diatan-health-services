import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { services } from "@/lib/db/schema";
import { eq, asc } from "drizzle-orm";

export async function GET() {
  try {
    const rows = await db
      .select()
      .from(services)
      .where(eq(services.isActive, true))
      .orderBy(asc(services.displayOrder));
    return NextResponse.json(rows);
  } catch (err) {
    console.error("[services GET]", err);
    return NextResponse.json({ error: "Failed to fetch services" }, { status: 500 });
  }
}
