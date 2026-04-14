"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog";
import { BookOpen, Plus, Edit2, Trash2, Eye, EyeOff, Loader2 } from "lucide-react";

type Post = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  isPublished: boolean;
  readTimeMinutes: number;
  createdAt: Date;
};

const CATEGORIES = [
  { value: "mental_health", label: "Mental Health" },
  { value: "anxiety", label: "Anxiety" },
  { value: "depression", label: "Depression" },
  { value: "trauma", label: "Trauma" },
  { value: "wellness", label: "Wellness" },
  { value: "medication", label: "Medication" },
  { value: "therapy", label: "Therapy" },
  { value: "telehealth", label: "Telehealth" },
  { value: "crisis", label: "Crisis" },
  { value: "substance_use", label: "Substance Use" },
];

interface Props {
  initialPosts: Post[];
}

export default function BlogManager({ initialPosts }: Props) {
  const [posts, setPosts] = useState(initialPosts);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "mental_health",
    isPublished: false,
    readTimeMinutes: 5,
  });

  const openNew = () => {
    setEditingPost(null);
    setForm({ title: "", slug: "", excerpt: "", content: "", category: "mental_health", isPublished: false, readTimeMinutes: 5 });
    setDialogOpen(true);
  };

  const openEdit = (post: Post) => {
    setEditingPost(post);
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      isPublished: post.isPublished,
      readTimeMinutes: post.readTimeMinutes,
    });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.title || !form.slug || !form.content) {
      toast.error("Title, slug, and content are required");
      return;
    }
    setSaving(true);
    try {
      const method = editingPost ? "PUT" : "POST";
      const url = editingPost ? `/api/blog/${editingPost.id}` : "/api/blog";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to save");
      const saved = await res.json();
      if (editingPost) {
        setPosts((p) => p.map((post) => (post.id === editingPost.id ? saved : post)));
        toast.success("Post updated");
      } else {
        setPosts((p) => [saved, ...p]);
        toast.success("Post created");
      }
      setDialogOpen(false);
    } catch {
      toast.error("Failed to save post");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this post?")) return;
    try {
      const res = await fetch(`/api/blog/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      setPosts((p) => p.filter((post) => post.id !== id));
      toast.success("Post deleted");
    } catch {
      toast.error("Failed to delete post");
    }
  };

  const togglePublish = async (post: Post) => {
    try {
      const res = await fetch(`/api/blog/${post.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...post, isPublished: !post.isPublished }),
      });
      if (!res.ok) throw new Error();
      const updated = await res.json();
      setPosts((p) => p.map((existing) => (existing.id === post.id ? updated : existing)));
      toast.success(post.isPublished ? "Post unpublished" : "Post published");
    } catch {
      toast.error("Failed to update post");
    }
  };

  const autoSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#2C3E50" }}>Blog Posts</h1>
          <p className="text-sm mt-1" style={{ color: "#6B7280" }}>
            {posts.filter((p) => p.isPublished).length} published · {posts.length} total
          </p>
        </div>
        <Button
          onClick={openNew}
          className="font-semibold"
          style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
        >
          <Plus className="w-4 h-4 mr-2" aria-hidden="true" />
          New Post
        </Button>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-20">
          <BookOpen className="w-12 h-12 mx-auto mb-3" style={{ color: "#E2EAE6" }} aria-hidden="true" />
          <p className="mb-4" style={{ color: "#6B7280" }}>No blog posts yet.</p>
          <Button onClick={openNew} style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}>
            <Plus className="w-4 h-4 mr-2" aria-hidden="true" />
            Create First Post
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <Card key={post.id} className="border" style={{ borderColor: "#E2EAE6", backgroundColor: "#FFFFFF" }}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-semibold text-sm" style={{ color: "#2C3E50" }}>
                        {post.title}
                      </h3>
                      <Badge
                        className="text-xs"
                        style={post.isPublished
                          ? { backgroundColor: "#E8F5EE", color: "#27AE60" }
                          : { backgroundColor: "#F0F0F0", color: "#6B7280" }}
                      >
                        {post.isPublished ? "Published" : "Draft"}
                      </Badge>
                    </div>
                    <p className="text-xs truncate" style={{ color: "#6B7280" }}>
                      /{post.slug} · {post.readTimeMinutes} min · {CATEGORIES.find((c) => c.value === post.category)?.label}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => togglePublish(post)}
                      aria-label={post.isPublished ? "Unpublish" : "Publish"}
                      className="p-1.5 rounded"
                      style={{ color: post.isPublished ? "#27AE60" : "#9CA3AF" }}
                    >
                      {post.isPublished ? (
                        <Eye className="w-4 h-4" aria-hidden="true" />
                      ) : (
                        <EyeOff className="w-4 h-4" aria-hidden="true" />
                      )}
                    </button>
                    <button
                      onClick={() => openEdit(post)}
                      aria-label="Edit post"
                      className="p-1.5 rounded"
                      style={{ color: "#3498DB" }}
                    >
                      <Edit2 className="w-4 h-4" aria-hidden="true" />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      aria-label="Delete post"
                      className="p-1.5 rounded"
                      style={{ color: "#E74C3C" }}
                    >
                      <Trash2 className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingPost ? "Edit Post" : "New Blog Post"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="blogTitle">Title *</Label>
              <Input
                id="blogTitle"
                value={form.title}
                onChange={(e) => {
                  const title = e.target.value;
                  setForm((f) => ({ ...f, title, slug: f.slug || autoSlug(title) }));
                }}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="blogSlug">Slug *</Label>
              <Input
                id="blogSlug"
                value={form.slug}
                onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="blogCategory">Category</Label>
              <Select value={form.category} onValueChange={(val) => setForm((f) => ({ ...f, category: val }))}>
                <SelectTrigger id="blogCategory" className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="blogExcerpt">Excerpt *</Label>
              <Textarea
                id="blogExcerpt"
                value={form.excerpt}
                onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
                rows={2}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="blogContent">Content * (Markdown supported)</Label>
              <Textarea
                id="blogContent"
                value={form.content}
                onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
                rows={10}
                className="mt-1 font-mono text-sm"
              />
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="blogPublished"
                checked={form.isPublished}
                onChange={(e) => setForm((f) => ({ ...f, isPublished: e.target.checked }))}
              />
              <Label htmlFor="blogPublished" className="cursor-pointer">
                Publish immediately
              </Label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={saving}
              style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
            >
              {saving ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
                  Saving...
                </>
              ) : (
                editingPost ? "Save Changes" : "Create Post"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
