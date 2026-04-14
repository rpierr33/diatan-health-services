import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { inquiries } from "@/lib/db/schema";
import { desc } from "drizzle-orm";
import AdminShell from "@/components/admin/AdminShell";
import InquiriesManager from "./InquiriesManager";

type Inquiry = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  source: "contact_form" | "appointment_form" | "careers_form" | "phone" | "referral" | "other";
  status: "new" | "contacted" | "resolved" | "closed";
  createdAt: Date;
  updatedAt: Date;
};

export default async function InquiriesPage() {
  const session = await auth();
  if (!session?.user) redirect("/admin/login");

  let data: Inquiry[] = [];
  try {
    const rows = await db.select().from(inquiries).orderBy(desc(inquiries.createdAt));
    data = rows as Inquiry[];
  } catch {
    data = [];
  }

  return (
    <AdminShell>
      <InquiriesManager initialInquiries={data} />
    </AdminShell>
  );
}
