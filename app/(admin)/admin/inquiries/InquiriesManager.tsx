"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MessageSquare } from "lucide-react";

type Inquiry = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  source: string;
  status: "new" | "contacted" | "resolved" | "closed";
  createdAt: Date;
};

const STATUS_COLORS = {
  new: { bg: "#E8F5EE", color: "#27AE60" },
  contacted: { bg: "#EBF5FB", color: "#3498DB" },
  resolved: { bg: "#F0F0F0", color: "#6B7280" },
  closed: { bg: "#FEF9E7", color: "#F39C12" },
};

interface Props {
  initialInquiries: Inquiry[];
}

export default function InquiriesManager({ initialInquiries }: Props) {
  const [inquiries, setInquiries] = useState(initialInquiries);

  const updateStatus = async (id: number, status: Inquiry["status"]) => {
    const prev = inquiries.find((i) => i.id === id);
    setInquiries((items) =>
      items.map((i) => (i.id === id ? { ...i, status } : i))
    );
    try {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error("Failed to update");
      toast.success("Status updated");
    } catch {
      if (prev) setInquiries((items) =>
        items.map((i) => (i.id === id ? { ...i, status: prev.status } : i))
      );
      toast.error("Failed to update status");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "#2C3E50" }}>Inquiries</h1>
        <p className="text-sm mt-1" style={{ color: "#6B7280" }}>
          {inquiries.filter((i) => i.status === "new").length} new ·{" "}
          {inquiries.length} total
        </p>
      </div>

      {inquiries.length === 0 ? (
        <div className="text-center py-20">
          <MessageSquare className="w-12 h-12 mx-auto mb-3" style={{ color: "#E2EAE6" }} aria-hidden="true" />
          <p style={{ color: "#6B7280" }}>No inquiries yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {inquiries.map((inquiry) => (
            <Card
              key={inquiry.id}
              className="border"
              style={{ borderColor: "#E2EAE6", backgroundColor: "#FFFFFF" }}
            >
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <p className="font-semibold text-sm" style={{ color: "#2C3E50" }}>
                        {inquiry.name}
                      </p>
                      <Badge
                        className="text-xs"
                        style={{
                          backgroundColor: STATUS_COLORS[inquiry.status]?.bg || "#F0F0F0",
                          color: STATUS_COLORS[inquiry.status]?.color || "#6B7280",
                        }}
                      >
                        {inquiry.status}
                      </Badge>
                      <span className="text-xs" style={{ color: "#9CA3AF" }}>
                        {inquiry.source}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs mb-3" style={{ color: "#6B7280" }}>
                      <a href={`mailto:${inquiry.email}`} className="flex items-center gap-1">
                        <Mail className="w-3 h-3" aria-hidden="true" />
                        {inquiry.email}
                      </a>
                      {inquiry.phone && (
                        <a href={`tel:${inquiry.phone}`} className="flex items-center gap-1">
                          <Phone className="w-3 h-3" aria-hidden="true" />
                          {inquiry.phone}
                        </a>
                      )}
                    </div>
                    <p className="text-sm" style={{ color: "#4A5568" }}>
                      {inquiry.message}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Select
                      value={inquiry.status}
                      onValueChange={(val) =>
                        updateStatus(inquiry.id, val as Inquiry["status"])
                      }
                    >
                      <SelectTrigger className="h-8 text-xs w-36">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {(["new", "contacted", "resolved", "closed"] as const).map((s) => (
                          <SelectItem key={s} value={s} className="text-xs capitalize">
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
