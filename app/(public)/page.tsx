import { db } from "@/lib/db";
import { services, conditions, testimonials, insurancePlans } from "@/lib/db/schema";
import { eq, asc } from "drizzle-orm";
import HomeClient from "./HomeClient";

async function getHomeData() {
  try {
    const [servicesData, conditionsData, testimonialsData, insuranceData] = await Promise.all([
      db.select().from(services).where(eq(services.isActive, true)).orderBy(asc(services.displayOrder)),
      db.select().from(conditions).where(eq(conditions.isActive, true)).orderBy(asc(conditions.displayOrder)),
      db.select().from(testimonials).where(eq(testimonials.isFeatured, true)).orderBy(asc(testimonials.displayOrder)),
      db.select().from(insurancePlans).where(eq(insurancePlans.isActive, true)).orderBy(asc(insurancePlans.displayOrder)),
    ]);
    return { servicesData, conditionsData, testimonialsData, insuranceData };
  } catch (err) {
    console.error("[homepage data fetch]", err);
    return { servicesData: [], conditionsData: [], testimonialsData: [], insuranceData: [] };
  }
}

export default async function HomePage() {
  const { servicesData, conditionsData, testimonialsData, insuranceData } = await getHomeData();

  return (
    <HomeClient
      services={servicesData}
      conditions={conditionsData}
      testimonials={testimonialsData}
      insuranceList={insuranceData.map((p) => p.name)}
    />
  );
}
