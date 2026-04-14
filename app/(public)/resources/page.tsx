import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, ChevronRight } from "lucide-react";
import { db } from "@/lib/db";
import { blogPosts } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";

export const metadata: Metadata = {
  title: "Resources & Blog",
  description:
    "Mental health articles, self-care tips, and educational content from the team at Diatan Health Services.",
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
  {
    id: 1,
    slug: "understanding-anxiety-disorders",
    title: "Understanding Anxiety Disorders: Signs, Symptoms & Treatment",
    excerpt: "Anxiety is the most common mental health condition in the US. Learn to recognize the signs and discover evidence-based treatments that work.",
    category: "anxiety",
    readTimeMinutes: 6,
    publishedAt: new Date("2024-11-15"),
    isPublished: true,
    coverImageUrl: null,
  },
  {
    id: 2,
    slug: "benefits-of-telepsychiatry",
    title: "The Growing Benefits of Telepsychiatry: Mental Health Care From Home",
    excerpt: "Telepsychiatry is transforming access to mental health care. Discover how remote psychiatric services can benefit you.",
    category: "telehealth",
    readTimeMinutes: 5,
    publishedAt: new Date("2024-12-01"),
    isPublished: true,
    coverImageUrl: null,
  },
  {
    id: 3,
    slug: "breaking-the-stigma-mental-health",
    title: "Breaking the Stigma: Why Talking About Mental Health Matters",
    excerpt: "Mental health stigma prevents millions from seeking help. Together, we can change the conversation and save lives.",
    category: "wellness",
    readTimeMinutes: 7,
    publishedAt: new Date("2025-01-10"),
    isPublished: true,
    coverImageUrl: null,
  },
];

async function getPosts() {
  try {
    const posts = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.isPublished, true))
      .orderBy(desc(blogPosts.publishedAt));
    return posts.length > 0 ? posts : fallbackPosts;
  } catch {
    return fallbackPosts;
  }
}

export default async function ResourcesPage() {
  const posts = await getPosts();

  return (
    <>
      {/* Hero */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #E8F5EE 0%, #F0F9F5 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge
            className="mb-4 text-sm"
            style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
          >
            Resources & Education
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "#2C3E50" }}>
            Mental Health Resources
          </h1>
          <p className="text-lg" style={{ color: "#4A5568" }}>
            Articles, guides, and educational content to support your mental
            wellness journey.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen
                className="w-12 h-12 mx-auto mb-4"
                style={{ color: "#E2EAE6" }}
                aria-hidden="true"
              />
              <p className="text-lg" style={{ color: "#6B7280" }}>
                Articles coming soon. Check back for mental health resources.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.id} href={`/resources/${post.slug}`}>
                  <Card
                    className="border card-hover h-full"
                    style={{ borderColor: "#E2EAE6", backgroundColor: "#FAFAFA" }}
                  >
                    <div
                      className="h-2 rounded-t-lg"
                      style={{ backgroundColor: "#27AE60" }}
                      aria-hidden="true"
                    />
                    <CardHeader>
                      <Badge
                        className="self-start text-xs mb-2"
                        style={{ backgroundColor: "#E8F5EE", color: "#27AE60" }}
                      >
                        {CATEGORY_LABELS[post.category] || post.category}
                      </Badge>
                      <CardTitle
                        className="text-base font-bold leading-snug"
                        style={{ color: "#2C3E50" }}
                      >
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "#6B7280" }}>
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs" style={{ color: "#9CA3AF" }}>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>{post.readTimeMinutes} min read</span>
                        </div>
                        <span className="flex items-center gap-0.5 font-medium" style={{ color: "#27AE60" }}>
                          Read More
                          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Crisis Resources */}
      <section className="py-16" style={{ backgroundColor: "#F0F7F4" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#2C3E50" }}>
            Crisis Resources
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: "988 Lifeline", desc: "Call or text 988", link: "tel:988" },
              { name: "Crisis Text Line", desc: "Text HOME to 741741", link: "sms:741741?body=HOME" },
              { name: "Emergency Services", desc: "Call 911", link: "tel:911" },
            ].map((r) => (
              <a
                key={r.name}
                href={r.link}
                className="block rounded-xl p-4 text-center border transition-all hover:shadow-md"
                style={{ backgroundColor: "#FFFFFF", borderColor: "#E2EAE6" }}
              >
                <p className="font-bold text-sm" style={{ color: "#27AE60" }}>
                  {r.name}
                </p>
                <p className="text-xs mt-1" style={{ color: "#6B7280" }}>
                  {r.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
