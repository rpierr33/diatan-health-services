import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { conditions } from "@/lib/db/schema";
import { eq, asc } from "drizzle-orm";

export async function GET() {
  try {
    const rows = await db
      .select()
      .from(conditions)
      .where(eq(conditions.isActive, true))
      .orderBy(asc(conditions.displayOrder));
    return NextResponse.json(rows);
  } catch (err) {
    console.error("[conditions GET]", err);
    return NextResponse.json({ error: "Failed to fetch conditions" }, { status: 500 });
  }
}
