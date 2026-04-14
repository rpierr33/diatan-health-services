import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Video, Wifi, Lock, Smartphone, Laptop, Clock,
  CheckCircle2, Phone, Calendar, Monitor, ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Telepsychiatry Services",
  description:
    "Convenient, secure psychiatric care from the comfort of your home. HIPAA-compliant video and phone appointments available in Florida.",
};

const steps = [
  { step: "1", title: "Book Your Appointment", desc: "Schedule online or call (954) 347-5845. Our team will confirm your appointment via email." },
  { step: "2", title: "Receive Your Link", desc: "Before your appointment, you will receive a secure link to join your session." },
  { step: "3", title: "Connect & Start", desc: "Join from any device with a camera and internet connection. Your provider will be ready." },
  { step: "4", title: "Receive Your Care", desc: "Get the same quality psychiatric evaluation, therapy, or medication management as in-person." },
];

const requirements = [
  { icon: Wifi, label: "Stable internet connection" },
  { icon: Monitor, label: "Computer, tablet, or smartphone" },
  { icon: Lock, label: "Private, quiet space" },
  { icon: Smartphone, label: "Camera and microphone" },
];

export default function TelepsychiatryPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 lg:py-24"
        style={{
          background: "linear-gradient(135deg, #27AE60 0%, #1ABC9C 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div style={{ color: "#FFFFFF" }}>
              <Badge
                className="mb-4 text-sm"
                style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#FFFFFF" }}
              >
                Telehealth Services
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Mental Health Care, Wherever You Are
              </h1>
              <p className="text-lg opacity-90 leading-relaxed mb-8">
                Our HIPAA-compliant telepsychiatry platform connects you with
                board-certified psychiatric providers via secure video or phone —
                from your home, office, or anywhere in Florida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="font-semibold"
                  style={{ backgroundColor: "#FFFFFF", color: "#27AE60" }}
                >
                  <Link href="/book-appointment">
                    <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
                    Book Telehealth Visit
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="font-semibold border-white"
                  style={{ color: "#FFFFFF" }}
                >
                  <a href="tel:9543475845">
                    <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                    Call Us
                  </a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div
                className="rounded-3xl p-8 text-center"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <Video className="w-28 h-28 mx-auto mb-4 opacity-90" style={{ color: "#FFFFFF" }} aria-hidden="true" />
                <p className="text-xl font-bold" style={{ color: "#FFFFFF" }}>
                  Secure & Private
                </p>
                <p className="mt-2 text-sm opacity-80" style={{ color: "#FFFFFF" }}>
                  HIPAA-compliant platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#2C3E50" }}>
              How Telepsychiatry Works
            </h2>
            <p className="text-lg" style={{ color: "#6B7280" }}>
              Getting started is simple. Four easy steps to your first appointment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.step} className="relative">
                <div
                  className="rounded-2xl p-6 text-center h-full"
                  style={{ backgroundColor: "#F0F7F4", border: "1px solid #E2EAE6" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                    style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
                  >
                    {step.step}
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ color: "#2C3E50" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20" style={{ backgroundColor: "#F0F7F4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "#2C3E50" }}>
                What to Expect
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Same Quality Care", desc: "Telehealth appointments are clinically equivalent to in-person visits. We can prescribe medications, conduct evaluations, and provide therapy." },
                  { title: "Session Length", desc: "Initial evaluations typically run 60-90 minutes. Follow-up appointments are usually 30-45 minutes." },
                  { title: "Preparation", desc: "Have your medication list, insurance card, and a list of questions ready. Log in 5 minutes early to test your connection." },
                  { title: "Privacy", desc: "Choose a private space where you feel comfortable speaking openly. Headphones are recommended for additional privacy." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <CheckCircle2
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: "#27AE60" }}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "#2C3E50" }}>
                        {item.title}
                      </p>
                      <p className="text-sm" style={{ color: "#6B7280" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "#2C3E50" }}>
                Technology Requirements
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {requirements.map((req) => (
                  <Card
                    key={req.label}
                    className="border"
                    style={{ borderColor: "#E2EAE6", backgroundColor: "#FFFFFF" }}
                  >
                    <CardContent className="p-4 flex items-center gap-3">
                      <req.icon
                        className="w-6 h-6 shrink-0"
                        style={{ color: "#27AE60" }}
                        aria-hidden="true"
                      />
                      <span className="text-sm font-medium" style={{ color: "#2C3E50" }}>
                        {req.label}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div
                className="rounded-lg p-4 text-sm"
                style={{ backgroundColor: "#FEF9E7", border: "1px solid #F59E0B" }}
              >
                <p className="font-semibold mb-1" style={{ color: "#92400E" }}>
                  Technical Difficulties?
                </p>
                <p style={{ color: "#78350F" }}>
                  If you experience technical issues, call us directly at{" "}
                  <a href="tel:9543475845" style={{ color: "#27AE60", fontWeight: 600 }}>
                    (954) 347-5845
                  </a>{" "}
                  and we will switch to a phone appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services via Telehealth */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#2C3E50" }}>
            Services Available via Telehealth
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Psychiatric Evaluations",
              "Medication Management & Refills",
              "Individual Therapy",
              "Psychoeducation",
              "Follow-Up Appointments",
              "Wellness Consultations",
            ].map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 p-4 rounded-xl border"
                style={{ backgroundColor: "#F0F7F4", borderColor: "#E2EAE6" }}
              >
                <CheckCircle2
                  className="w-5 h-5 shrink-0"
                  style={{ color: "#27AE60" }}
                  aria-hidden="true"
                />
                <span className="font-medium text-sm" style={{ color: "#2C3E50" }}>
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#2C3E50" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#FFFFFF" }}>
            Ready for Your Telehealth Visit?
          </h2>
          <p className="text-lg mb-8 opacity-80" style={{ color: "#ECF0F1" }}>
            Book your appointment online or call us. We accept most insurance plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="font-semibold"
              style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
            >
              <Link href="/book-appointment">
                <Video className="w-5 h-5 mr-2" aria-hidden="true" />
                Book Telehealth Appointment
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-semibold"
              style={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}
            >
              <a href="tel:9543475845">
                <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                (954) 347-5845
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
