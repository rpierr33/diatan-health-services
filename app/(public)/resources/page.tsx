import type { Metadata } from "next";
import { db } from "@/lib/db";
import { blogPosts } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";
import ResourcesClient from "./ResourcesClient";

export const metadata: Metadata = {
  title: "Resources & Blog",
  description: "Mental health articles, self-care tips, and educational content from the team at Diatan Health Services.",
};

const CATEGORY_LABELS: Record<string, string> = {
  mental_health: "Mental Health",
  anxiety: "Anxiety",
  depression: "Depression",
  trauma: "Trauma",
  wellness: "Wellness",
  medication: "Medication",
  therapy: "Therapy",
  telehealth: "Telehealth",
  crisis: "Crisis",
  substance_use: "Substance Use",
};

const fallbackPosts = [
  { id: 1, slug: "understanding-anxiety-disorders", title: "Understanding Anxiety Disorders: Signs, Symptoms & Treatment", excerpt: "Anxiety is the most common mental health condition in the US. Learn to recognize the signs and discover evidence-based treatments that work.", category: "anxiety", readTimeMinutes: 6, publishedAt: new Date("2024-11-15"), isPublished: true, coverImageUrl: null },
  { id: 2, slug: "benefits-of-telepsychiatry", title: "The Growing Benefits of Telepsychiatry: Mental Health Care From Home", excerpt: "Telepsychiatry is transforming access to mental health care. Discover how remote psychiatric services can benefit you.", category: "telehealth", readTimeMinutes: 5, publishedAt: new Date("2024-12-01"), isPublished: true, coverImageUrl: null },
  { id: 3, slug: "breaking-the-stigma-mental-health", title: "Breaking the Stigma: Why Talking About Mental Health Matters", excerpt: "Mental health stigma prevents millions from seeking help. Together, we can change the conversation and save lives.", category: "wellness", readTimeMinutes: 7, publishedAt: new Date("2025-01-10"), isPublished: true, coverImageUrl: null },
];

async function getPosts() {
  try {
    const posts = await db.select().from(blogPosts).where(eq(blogPosts.isPublished, true)).orderBy(desc(blogPosts.publishedAt));
    return posts.length > 0 ? posts : fallbackPosts;
  } catch {
    return fallbackPosts;
  }
}

export default async function ResourcesPage() {
  const posts = await getPosts();
  return <ResourcesClient posts={posts} categoryLabels={CATEGORY_LABELS} />;
}
