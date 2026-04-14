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
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog";
import { Users, Plus, Edit2, UserX, Loader2 } from "lucide-react";

type Provider = {
  id: number;
  name: string;
  slug: string;
  title: string;
  credentials: string;
  bio: string;
  specialties: string[] | null;
  isActive: boolean;
  displayOrder: number;
};

interface Props {
  initialProviders: Provider[];
}

export default function ProvidersManager({ initialProviders }: Props) {
  const [providers, setProviders] = useState(initialProviders);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingProvider, setEditingProvider] = useState<Provider | null>(null);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    name: "", slug: "", title: "", credentials: "",
    bio: "", specialties: "", displayOrder: 0, isActive: true,
  });

  const openNew = () => {
    setEditingProvider(null);
    setForm({ name: "", slug: "", title: "", credentials: "", bio: "", specialties: "", displayOrder: 0, isActive: true });
    setDialogOpen(true);
  };

  const openEdit = (provider: Provider) => {
    setEditingProvider(provider);
    setForm({
      name: provider.name, slug: provider.slug, title: provider.title,
      credentials: provider.credentials, bio: provider.bio,
      specialties: (provider.specialties || []).join(", "),
      displayOrder: provider.displayOrder, isActive: provider.isActive,
    });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.name || !form.slug || !form.title) {
      toast.error("Name, slug, and title are required");
      return;
    }
    setSaving(true);
    const payload = {
      ...form,
      specialties: form.specialties.split(",").map((s) => s.trim()).filter(Boolean),
    };
    try {
      const method = editingProvider ? "PATCH" : "POST";
      const url = editingProvider ? `/api/providers/${editingProvider.id}` : "/api/providers";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      const saved = await res.json();
      if (editingProvider) {
        setProviders((p) => p.map((prov) => (prov.id === editingProvider.id ? saved : prov)));
        toast.success("Provider updated");
      } else {
        setProviders((p) => [...p, saved]);
        toast.success("Provider added");
      }
      setDialogOpen(false);
    } catch {
      toast.error("Failed to save provider");
    } finally {
      setSaving(false);
    }
  };

  const handleDeactivate = async (id: number) => {
    if (!confirm("Deactivate this provider?")) return;
    try {
      const res = await fetch(`/api/providers/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      setProviders((p) => p.map((prov) => (prov.id === id ? { ...prov, isActive: false } : prov)));
      toast.success("Provider deactivated");
    } catch {
      toast.error("Failed to deactivate");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#2C3E50" }}>Providers</h1>
          <p className="text-sm mt-1" style={{ color: "#6B7280" }}>
            {providers.filter((p) => p.isActive).length} active
          </p>
        </div>
        <Button
          onClick={openNew}
          className="font-semibold"
          style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
        >
          <Plus className="w-4 h-4 mr-2" aria-hidden="true" />
          Add Provider
        </Button>
      </div>

      {providers.length === 0 ? (
        <div className="text-center py-20">
          <Users className="w-12 h-12 mx-auto mb-3" style={{ color: "#E2EAE6" }} aria-hidden="true" />
          <p className="mb-4" style={{ color: "#6B7280" }}>No providers yet.</p>
          <Button onClick={openNew} style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}>
            Add First Provider
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          {providers.map((provider) => (
            <Card key={provider.id} className="border" style={{ borderColor: "#E2EAE6", backgroundColor: "#FFFFFF" }}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-sm" style={{ color: "#2C3E50" }}>
                        {provider.name}
                      </h3>
                      {provider.credentials && (
                        <Badge style={{ backgroundColor: "#E8F5EE", color: "#27AE60" }} className="text-xs">
                          {provider.credentials}
                        </Badge>
                      )}
                      {!provider.isActive && (
                        <Badge style={{ backgroundColor: "#FDEDEC", color: "#E74C3C" }} className="text-xs">
                          Inactive
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs mt-0.5" style={{ color: "#6B7280" }}>
                      {provider.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => openEdit(provider)}
                      aria-label="Edit provider"
                      className="p-1.5 rounded"
                      style={{ color: "#3498DB" }}
                    >
                      <Edit2 className="w-4 h-4" aria-hidden="true" />
                    </button>
                    {provider.isActive && (
                      <button
                        onClick={() => handleDeactivate(provider.id)}
                        aria-label="Deactivate provider"
                        className="p-1.5 rounded"
                        style={{ color: "#E74C3C" }}
                      >
                        <UserX className="w-4 h-4" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingProvider ? "Edit Provider" : "Add Provider"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="provName">Name *</Label>
                <Input id="provName" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="provSlug">Slug *</Label>
                <Input id="provSlug" value={form.slug} onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))} className="mt-1" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="provTitle">Title *</Label>
                <Input id="provTitle" value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="provCreds">Credentials</Label>
                <Input id="provCreds" value={form.credentials} onChange={(e) => setForm((f) => ({ ...f, credentials: e.target.value }))} placeholder="PMHNP-BC" className="mt-1" />
              </div>
            </div>
            <div>
              <Label htmlFor="provSpecialties">Specialties (comma-separated)</Label>
              <Input id="provSpecialties" value={form.specialties} onChange={(e) => setForm((f) => ({ ...f, specialties: e.target.value }))} placeholder="Anxiety, Depression, Trauma" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="provBio">Bio</Label>
              <Textarea id="provBio" value={form.bio} onChange={(e) => setForm((f) => ({ ...f, bio: e.target.value }))} rows={4} className="mt-1" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSave} disabled={saving} style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}>
              {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" /> : null}
              {editingProvider ? "Save Changes" : "Add Provider"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
