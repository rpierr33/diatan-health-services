import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, Phone } from "lucide-react";
import { db } from "@/lib/db";
import { blogPosts } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

type Props = { params: Promise<{ slug: string }> };

async function getPost(slug: string) {
  try {
    const rows = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return rows[0] || null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
  };
}

const CATEGORY_LABELS: Record<string, string> = {
  mental_health: "Mental Health", anxiety: "Anxiety", depression: "Depression",
  trauma: "Trauma", wellness: "Wellness", medication: "Medication",
  therapy: "Therapy", telehealth: "Telehealth", crisis: "Crisis", substance_use: "Substance Use",
};

/** Render markdown-lite content safely as React nodes */
function renderContent(raw: string) {
  return raw.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl font-bold mt-8 mb-3" style={{ color: "#2C3E50" }}>
          {block.slice(3)}
        </h2>
      );
    }
    if (block.startsWith("### ")) {
      return (
        <h3 key={i} className="text-xl font-semibold mt-6 mb-2" style={{ color: "#2C3E50" }}>
          {block.slice(4)}
        </h3>
      );
    }
    // Render bullet list blocks
    if (block.split("\n").every((line) => line.startsWith("- "))) {
      return (
        <ul key={i} className="list-disc pl-5 space-y-1 my-3" style={{ color: "#4A5568" }}>
          {block.split("\n").map((line, j) => (
            <li key={j}>{renderInline(line.slice(2))}</li>
          ))}
        </ul>
      );
    }
    // Numbered list
    if (block.split("\n").every((line) => /^\d+\./.test(line))) {
      return (
        <ol key={i} className="list-decimal pl-5 space-y-1 my-3" style={{ color: "#4A5568" }}>
          {block.split("\n").map((line, j) => (
            <li key={j}>{renderInline(line.replace(/^\d+\.\s*/, ""))}</li>
          ))}
        </ol>
      );
    }
    return (
      <p key={i} className="mb-4 leading-relaxed" style={{ color: "#4A5568" }}>
        {renderInline(block)}
      </p>
    );
  });
}

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} style={{ color: "#2C3E50" }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post || !post.isPublished) {
    notFound();
  }

  return (
    <article className="py-12" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 text-sm mb-8 font-medium"
          style={{ color: "#27AE60" }}
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Resources
        </Link>

        <header className="mb-8">
          <Badge
            className="mb-4 text-sm"
            style={{ backgroundColor: "#E8F5EE", color: "#27AE60" }}
          >
            {CATEGORY_LABELS[post.category] || post.category}
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight" style={{ color: "#2C3E50" }}>
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm" style={{ color: "#9CA3AF" }}>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" aria-hidden="true" />
              {post.readTimeMinutes} min read
            </span>
            {post.publishedAt && (
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric", month: "long", day: "numeric",
                })}
              </span>
            )}
          </div>
        </header>

        <div className="space-y-1">
          {renderContent(post.content)}
        </div>

        <div
          className="mt-12 rounded-2xl p-6 text-center"
          style={{ backgroundColor: "#F0F7F4", border: "1px solid #E2EAE6" }}
        >
          <h2 className="text-xl font-bold mb-3" style={{ color: "#2C3E50" }}>
            Need Professional Support?
          </h2>
          <p className="text-sm mb-6" style={{ color: "#4A5568" }}>
            If you are struggling, our team is here to help. Schedule an
            appointment or call us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              className="font-semibold"
              style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
            >
              <Link href="/book-appointment">Book an Appointment</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="font-semibold"
              style={{ borderColor: "#27AE60", color: "#27AE60" }}
            >
              <a href="tel:9543475845">
                <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                (954) 347-5845
              </a>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
