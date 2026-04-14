import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import AppointmentForm from "./AppointmentForm";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Schedule your psychiatric or mental health appointment with Diatan Health Services. We offer in-person and telepsychiatry options.",
};

export default function BookAppointmentPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(135deg, #E8F5EE 0%, #F0F9F5 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge
            className="mb-4 text-sm"
            style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
          >
            Schedule Your Visit
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "#2C3E50" }}>
            Book an Appointment
          </h1>
          <p className="text-lg" style={{ color: "#4A5568" }}>
            Complete the form below and our team will contact you within 1
            business day to confirm your appointment.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppointmentForm />
        </div>
      </section>
    </>
  );
}
