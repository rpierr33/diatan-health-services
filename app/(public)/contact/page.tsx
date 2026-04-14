import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, AlertTriangle } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Diatan Health Services. Located at 4200 NW 16th St. Suite 449, Lauderhill, FL. Call (954) 347-5845.",
};

export default function ContactPage() {
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
            Get In Touch
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "#2C3E50" }}>
            Contact Us
          </h1>
          <p className="text-lg" style={{ color: "#4A5568" }}>
            We are here to help. Reach out with questions, or to schedule
            your first appointment.
          </p>
        </div>
      </section>

      {/* Crisis Banner */}
      <div
        className="py-4 px-4 text-center font-medium"
        style={{ backgroundColor: "#E74C3C", color: "#FFFFFF" }}
        role="alert"
      >
        <div className="flex items-center justify-center gap-2">
          <AlertTriangle className="w-5 h-5" aria-hidden="true" />
          <span>
            <strong>Mental Health Crisis?</strong> Call or text{" "}
            <a href="tel:988" className="underline font-bold">988</a> (Suicide & Crisis Lifeline) or text{" "}
            <strong>HOME</strong> to <strong>741741</strong>. For emergencies, call 911.
          </span>
        </div>
      </div>

      {/* Contact Info + Form */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8" style={{ color: "#2C3E50" }}>
                Practice Information
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    content: (
                      <div>
                        <p>4200 NW 16th St. Suite 449</p>
                        <p>Lauderhill, FL 33313</p>
                      </div>
                    ),
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    content: (
                      <a href="tel:9543475845" style={{ color: "#27AE60" }}>
                        (954) 347-5845
                      </a>
                    ),
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    content: (
                      <a href="mailto:info@diatanhealthservices.com" style={{ color: "#27AE60" }}>
                        info@diatanhealthservices.com
                      </a>
                    ),
                  },
                  {
                    icon: Clock,
                    label: "Office Hours",
                    content: <p>Monday to Friday</p>,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#E8F5EE" }}
                    >
                      <item.icon
                        className="w-5 h-5"
                        style={{ color: "#27AE60" }}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#6B7280" }}>
                        {item.label}
                      </p>
                      <div className="text-sm" style={{ color: "#2C3E50" }}>
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-8 rounded-xl p-6"
                style={{ backgroundColor: "#F0F7F4", border: "1px solid #E2EAE6" }}
              >
                <h3 className="font-bold text-base mb-3" style={{ color: "#2C3E50" }}>
                  Insurance We Accept
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Self-Pay", "Medicare", "Medicaid", "United Healthcare",
                    "Avmed", "Oscar Health", "Cigna", "UMR",
                  ].map((ins) => (
                    <span
                      key={ins}
                      className="px-2 py-1 rounded text-xs font-medium"
                      style={{ backgroundColor: "#FFFFFF", border: "1px solid #E2EAE6", color: "#2C3E50" }}
                    >
                      {ins}
                    </span>
                  ))}
                  <span
                    className="px-2 py-1 rounded text-xs font-medium"
                    style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
                  >
                    +4 more
                  </span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8" style={{ color: "#2C3E50" }}>
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
