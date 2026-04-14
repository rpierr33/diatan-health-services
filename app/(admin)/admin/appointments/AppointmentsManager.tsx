"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, Calendar, Video, User } from "lucide-react";

type Appointment = {
  id: number;
  patientFirstName: string;
  patientLastName: string;
  email: string;
  phone: string;
  insurance: string;
  focusArea: string;
  appointmentType: string;
  preferredDate: string | null;
  status: "new" | "confirmed" | "in_progress" | "completed" | "cancelled";
  createdAt: Date;
};

type Provider = {
  id: number;
  name: string;
};

const STATUS_LABELS = {
  new: "New",
  confirmed: "Confirmed",
  in_progress: "In Progress",
  completed: "Completed",
  cancelled: "Cancelled",
};

const STATUS_COLORS = {
  new: { bg: "#E8F5EE", color: "#27AE60" },
  confirmed: { bg: "#EBF5FB", color: "#3498DB" },
  in_progress: { bg: "#FEF9E7", color: "#F39C12" },
  completed: { bg: "#F0F0F0", color: "#6B7280" },
  cancelled: { bg: "#FDEDEC", color: "#E74C3C" },
};

const COLUMNS: Array<{ key: Appointment["status"]; label: string }> = [
  { key: "new", label: "New" },
  { key: "confirmed", label: "Confirmed" },
  { key: "in_progress", label: "In Progress" },
  { key: "completed", label: "Completed" },
];

interface Props {
  initialAppointments: Appointment[];
  providers: Provider[];
}

export default function AppointmentsManager({ initialAppointments, providers }: Props) {
  const [appointments, setAppointments] = useState(initialAppointments);

  const updateStatus = async (id: number, status: Appointment["status"]) => {
    const prev = appointments.find((a) => a.id === id);
    setAppointments((appts) =>
      appts.map((a) => (a.id === id ? { ...a, status } : a))
    );
    try {
      const res = await fetch(`/api/appointments/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error("Failed to update status");
      toast.success("Status updated");
    } catch {
      if (prev) setAppointments((appts) =>
        appts.map((a) => (a.id === id ? { ...a, status: prev.status } : a))
      );
      toast.error("Failed to update status");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: "#2C3E50" }}>Appointments</h1>
        <p className="text-sm mt-1" style={{ color: "#6B7280" }}>
          {appointments.length} total appointment{appointments.length !== 1 ? "s" : ""}
        </p>
      </div>

      {appointments.length === 0 ? (
        <div className="text-center py-20">
          <Calendar className="w-12 h-12 mx-auto mb-3" style={{ color: "#E2EAE6" }} aria-hidden="true" />
          <p style={{ color: "#6B7280" }}>No appointments yet.</p>
        </div>
      ) : (
        /* Kanban-style columns */
        <div className="grid lg:grid-cols-4 gap-4">
          {COLUMNS.map((col) => {
            const colAppts = appointments.filter((a) => a.status === col.key);
            return (
              <div key={col.key}>
                <div className="flex items-center gap-2 mb-3">
                  <h2 className="font-semibold text-sm" style={{ color: "#2C3E50" }}>
                    {col.label}
                  </h2>
                  <Badge
                    className="text-xs"
                    style={{
                      backgroundColor: STATUS_COLORS[col.key].bg,
                      color: STATUS_COLORS[col.key].color,
                    }}
                  >
                    {colAppts.length}
                  </Badge>
                </div>
                <div className="space-y-3">
                  {colAppts.length === 0 ? (
                    <div
                      className="rounded-xl border-2 border-dashed p-6 text-center text-xs"
                      style={{ borderColor: "#E2EAE6", color: "#9CA3AF" }}
                    >
                      None
                    </div>
                  ) : (
                    colAppts.map((appt) => (
                      <Card
                        key={appt.id}
                        className="border"
                        style={{ borderColor: "#E2EAE6", backgroundColor: "#FFFFFF" }}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div>
                              <p className="font-semibold text-sm" style={{ color: "#2C3E50" }}>
                                {appt.patientFirstName} {appt.patientLastName}
                              </p>
                              <p className="text-xs mt-0.5" style={{ color: "#6B7280" }}>
                                {appt.focusArea}
                              </p>
                            </div>
                          </div>
                          <div className="space-y-1 text-xs mb-3" style={{ color: "#6B7280" }}>
                            <div className="flex items-center gap-1.5">
                              <Mail className="w-3 h-3" aria-hidden="true" />
                              <span className="truncate">{appt.email}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Phone className="w-3 h-3" aria-hidden="true" />
                              {appt.phone}
                            </div>
                            <div className="flex items-center gap-1.5">
                              {appt.appointmentType === "in_person" ? (
                                <User className="w-3 h-3" aria-hidden="true" />
                              ) : (
                                <Video className="w-3 h-3" aria-hidden="true" />
                              )}
                              {appt.appointmentType}
                            </div>
                            {appt.preferredDate && (
                              <div className="flex items-center gap-1.5">
                                <Calendar className="w-3 h-3" aria-hidden="true" />
                                {appt.preferredDate}
                              </div>
                            )}
                          </div>
                          <Select
                            value={appt.status}
                            onValueChange={(val) =>
                              updateStatus(appt.id, val as Appointment["status"])
                            }
                          >
                            <SelectTrigger className="h-7 text-xs">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {Object.entries(STATUS_LABELS).map(([val, label]) => (
                                <SelectItem key={val} value={val} className="text-xs">
                                  {label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
