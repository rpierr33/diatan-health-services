import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { providers } from "@/lib/db/schema";
import AdminShell from "@/components/admin/AdminShell";
import ProvidersManager from "./ProvidersManager";

export default async function ProvidersPage() {
  const session = await auth();
  if (!session?.user) redirect("/admin/login");

  let data: unknown[] = [];
  try {
    data = await db.select().from(providers).orderBy(providers.displayOrder);
  } catch {
    data = [];
  }

  return (
    <AdminShell>
      <ProvidersManager initialProviders={data as Parameters<typeof ProvidersManager>[0]['initialProviders']} />
    </AdminShell>
  );
}
