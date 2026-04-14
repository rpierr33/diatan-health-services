import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { blogPosts } from "@/lib/db/schema";
import { desc } from "drizzle-orm";
import AdminShell from "@/components/admin/AdminShell";
import BlogManager from "./BlogManager";

export default async function BlogAdminPage() {
  const session = await auth();
  if (!session?.user) redirect("/admin/login");

  let posts: unknown[] = [];
  try {
    posts = await db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));
  } catch {
    posts = [];
  }

  return (
    <AdminShell>
      <BlogManager initialPosts={posts as Parameters<typeof BlogManager>[0]['initialPosts']} />
    </AdminShell>
  );
}
