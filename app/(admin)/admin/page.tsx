import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { appointments, inquiries, blogPosts } from "@/lib/db/schema";
import { eq, count, gte } from "drizzle-orm";
import AdminShell from "@/components/admin/AdminShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MessageSquare, BookOpen, TrendingUp } from "lucide-react";
import Link from "next/link";

async function getDashboardStats() {
  try {
    const [
      totalAppts,
      newAppts,
      totalInquiries,
      newInquiries,
      publishedPosts,
    ] = await Promise.all([
      db.select({ count: count() }).from(appointments),
      db.select({ count: count() }).from(appointments).where(eq(appointments.status, "new")),
      db.select({ count: count() }).from(inquiries),
      db.select({ count: count() }).from(inquiries).where(eq(inquiries.status, "new")),
      db.select({ count: count() }).from(blogPosts).where(eq(blogPosts.isPublished, true)),
    ]);

    return {
      totalAppts: totalAppts[0]?.count ?? 0,
      newAppts: newAppts[0]?.count ?? 0,
      totalInquiries: totalInquiries[0]?.count ?? 0,
      newInquiries: newInquiries[0]?.count ?? 0,
      publishedPosts: publishedPosts[0]?.count ?? 0,
    };
  } catch {
    return { totalAppts: 0, newAppts: 0, totalInquiries: 0, newInquiries: 0, publishedPosts: 0 };
  }
}

async function getRecentAppointments() {
  try {
    return await db
      .select()
      .from(appointments)
      .orderBy(appointments.createdAt)
      .limit(5);
  } catch {
    return [];
  }
}

export default async function AdminDashboard() {
  const session = await auth();
  if (!session?.user) redirect("/admin/login");

  const [stats, recentAppts] = await Promise.all([
    getDashboardStats(),
    getRecentAppointments(),
  ]);

  const statCards = [
    {
      label: "New Appointments",
      value: stats.newAppts,
      total: stats.totalAppts,
      icon: Calendar,
      href: "/admin/appointments",
      color: "#27AE60",
    },
    {
      label: "New Inquiries",
      value: stats.newInquiries,
      total: stats.totalInquiries,
      icon: MessageSquare,
      href: "/admin/inquiries",
      color: "#3498DB",
    },
    {
      label: "Published Articles",
      value: stats.publishedPosts,
      total: stats.publishedPosts,
      icon: BookOpen,
      href: "/admin/blog",
      color: "#9B59B6",
    },
  ];

  return (
    <AdminShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#2C3E50" }}>Dashboard</h1>
          <p className="text-sm mt-1" style={{ color: "#6B7280" }}>
            Welcome back, {session.user.name || "Admin"}
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          {statCards.map((stat) => (
            <Link key={stat.label} href={stat.href}>
              <Card
                className="border card-hover"
                style={{ borderColor: "#E2EAE6", backgroundColor: "#FFFFFF" }}
              >
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: "#6B7280" }}>
                        {stat.label}
                      </p>
                      <p className="text-3xl font-bold" style={{ color: stat.color }}>
                        {stat.value}
                      </p>
                      <p className="text-xs mt-1" style={{ color: "#9CA3AF" }}>
                        {stat.total} total
                      </p>
                    </div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${stat.color}20` }}
                    >
                      <stat.icon className="w-6 h-6" style={{ color: stat.color }} aria-hidden="true" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Recent Appointments */}
        <Card className="border" style={{ borderColor: "#E2EAE6", backgroundColor: "#FFFFFF" }}>
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <CardTitle className="text-base" style={{ color: "#2C3E50" }}>
              Recent Appointments
            </CardTitle>
            <Link href="/admin/appointments" className="text-xs font-medium" style={{ color: "#27AE60" }}>
              View All →
            </Link>
          </CardHeader>
          <CardContent>
            {recentAppts.length === 0 ? (
              <p className="text-sm py-4 text-center" style={{ color: "#6B7280" }}>
                No appointments yet.
              </p>
            ) : (
              <div className="space-y-3">
                {recentAppts.map((appt) => (
                  <div
                    key={appt.id}
                    className="flex items-center justify-between py-2 border-b last:border-0"
                    style={{ borderColor: "#F0F7F4" }}
                  >
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#2C3E50" }}>
                        {appt.patientFirstName} {appt.patientLastName}
                      </p>
                      <p className="text-xs" style={{ color: "#6B7280" }}>
                        {appt.focusArea} · {appt.appointmentType}
                      </p>
                    </div>
                    <span
                      className="text-xs px-2 py-1 rounded-full font-medium"
                      style={{
                        backgroundColor: appt.status === "new" ? "#E8F5EE" : "#F0F7F4",
                        color: appt.status === "new" ? "#27AE60" : "#6B7280",
                      }}
                    >
                      {appt.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminShell>
  );
}
