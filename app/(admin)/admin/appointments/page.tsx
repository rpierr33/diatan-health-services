import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { appointments, providers } from "@/lib/db/schema";
import { desc } from "drizzle-orm";
import AdminShell from "@/components/admin/AdminShell";
import AppointmentsManager from "./AppointmentsManager";

async function getData() {
  try {
    const [appts, provs] = await Promise.all([
      db.select().from(appointments).orderBy(desc(appointments.createdAt)),
      db.select().from(providers),
    ]);
    return { appointments: appts, providers: provs };
  } catch {
    return { appointments: [], providers: [] };
  }
}

export default async function AppointmentsPage() {
  const session = await auth();
  if (!session?.user) redirect("/admin/login");
  const data = await getData();

  return (
    <AdminShell>
      <AppointmentsManager
        initialAppointments={data.appointments}
        providers={data.providers}
      />
    </AdminShell>
  );
}
