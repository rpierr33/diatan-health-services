import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart, Shield, Users, Star, CheckCircle2,
  Phone, Calendar, Award, BookOpen, Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Diatan Health Services, LLC — our mission, values, and the compassionate team behind our psychiatric and mental health care practice in Lauderhill, FL.",
};

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    desc: "We approach every patient with empathy, dignity, and genuine concern for their well-being.",
  },
  {
    icon: Shield,
    title: "Evidence-Based Practice",
    desc: "Our treatments are grounded in the latest psychiatric research and clinical best practices.",
  },
  {
    icon: Users,
    title: "Inclusive Environment",
    desc: "We welcome everyone, regardless of background, identity, or circumstance.",
  },
  {
    icon: Star,
    title: "Personalized Approach",
    desc: "No two people are the same. We tailor every treatment plan to the individual.",
  },
  {
    icon: Sparkles,
    title: "Holistic Wellness",
    desc: "We treat the whole person — mind, body, and spirit — not just symptoms.",
  },
  {
    icon: BookOpen,
    title: "Patient Education",
    desc: "We believe informed patients are empowered patients. We explain everything.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 lg:py-24"
        style={{
          background: "linear-gradient(135deg, #E8F5EE 0%, #F0F9F5 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                className="mb-4 text-sm"
                style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
              >
                About Us
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: "#2C3E50" }}>
                Compassionate Psychiatric Care for Our Community
              </h1>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#4A5568" }}>
                Diatan Health Services, LLC is a psychiatric and mental health
                practice dedicated to fostering holistic mental well-being through
                compassionate, personalized care. We serve Lauderhill, FL and the
                surrounding communities with in-person and telehealth services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="font-semibold"
                  style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
                >
                  <Link href="/book-appointment">
                    <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
                    Schedule an Appointment
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="font-semibold"
                  style={{ borderColor: "#27AE60", color: "#27AE60" }}
                >
                  <a href="tel:9543475845">
                    <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                    Contact Us
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div
                className="rounded-3xl p-8 shadow-lg text-center"
                style={{ backgroundColor: "#FFFFFF", maxWidth: "380px", width: "100%" }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Diatan Health Services"
                  width={100}
                  height={100}
                  className="mx-auto rounded-2xl mb-6"
                />
                <h2 className="font-bold text-xl mb-2" style={{ color: "#2C3E50" }}>
                  Diatan Health Services, LLC
                </h2>
                <p className="text-sm mb-4" style={{ color: "#27AE60" }}>
                  Psychiatric & Mental Health Services
                </p>
                <div className="space-y-2 text-sm" style={{ color: "#6B7280" }}>
                  <p>4200 NW 16th St. Suite 449</p>
                  <p>Lauderhill, FL 33313</p>
                  <p className="font-medium" style={{ color: "#27AE60" }}>
                    Monday to Friday
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "#F0F7F4", borderLeft: "4px solid #27AE60" }}
            >
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#2C3E50" }}>
                Our Mission
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#4A5568" }}>
                To foster holistic mental well-being by providing compassionate,
                personalized psychiatric care. We are committed to evidence-based
                practices, innovative therapeutic approaches, and creating a safe,
                inclusive environment where every patient feels seen, heard, and
                respected.
              </p>
            </div>
            <div
              className="rounded-2xl p-8"
              style={{ backgroundColor: "#E8F5EE", borderLeft: "4px solid #1ABC9C" }}
            >
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#2C3E50" }}>
                Our Vision
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#4A5568" }}>
                A community where mental health care is accessible, destigmatized,
                and woven into every aspect of overall health and wellness. We
                envision a future where no one suffers in silence, and where
                seeking help is seen as an act of strength.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#2C3E50" }}>
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <Card
                key={value.title}
                className="border card-hover"
                style={{ borderColor: "#E2EAE6", backgroundColor: "#FAFAFA" }}
              >
                <CardContent className="p-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#E8F5EE" }}
                  >
                    <value.icon
                      className="w-6 h-6"
                      style={{ color: "#27AE60" }}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ color: "#2C3E50" }}>
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                    {value.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PMHNP-BC Section */}
      <section className="py-20" style={{ backgroundColor: "#F0F7F4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                className="mb-4 text-sm"
                style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
              >
                Our Credentials
              </Badge>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "#2C3E50" }}>
                Board-Certified Psychiatric Mental Health Nurse Practitioners
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#4A5568" }}>
                Our clinical team holds the PMHNP-BC (Psychiatric Mental Health
                Nurse Practitioner — Board Certified) credential, the gold standard
                in advanced psychiatric nursing practice. This certification
                demonstrates mastery of psychiatric assessment, diagnosis,
                psychotherapy, and medication management.
              </p>
              <ul className="space-y-3">
                {[
                  "PMHNP-BC Certified Providers",
                  "Florida Licensed Advanced Practice Registered Nurses",
                  "Continuing education in evidence-based practices",
                  "Specialized training in trauma-informed care",
                  "Telepsychiatry certified",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2
                      className="w-5 h-5 shrink-0"
                      style={{ color: "#27AE60" }}
                      aria-hidden="true"
                    />
                    <span style={{ color: "#4A5568" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Card
                className="border"
                style={{ borderColor: "#E2EAE6", backgroundColor: "#FFFFFF" }}
              >
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Award
                      className="w-16 h-16 mx-auto mb-3"
                      style={{ color: "#27AE60" }}
                      aria-hidden="true"
                    />
                    <h3 className="font-bold text-xl" style={{ color: "#2C3E50" }}>
                      Our Practice Philosophy
                    </h3>
                  </div>
                  <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#4A5568" }}>
                    <p>
                      <strong style={{ color: "#27AE60" }}>Person-Centered Care:</strong>{" "}
                      We start with your goals, your values, and your life — not a
                      checklist or a protocol.
                    </p>
                    <p>
                      <strong style={{ color: "#27AE60" }}>Trauma-Informed:</strong>{" "}
                      We recognize that past experiences shape present challenges.
                      We approach care with sensitivity and understanding.
                    </p>
                    <p>
                      <strong style={{ color: "#27AE60" }}>Collaborative:</strong>{" "}
                      You are the expert on your own life. We are the experts on
                      mental health. Together, we build the best plan.
                    </p>
                    <p>
                      <strong style={{ color: "#27AE60" }}>Recovery-Oriented:</strong>{" "}
                      We believe in the capacity for recovery, growth, and a
                      meaningful life — regardless of diagnosis.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#2C3E50" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#FFFFFF" }}>
            Ready to Meet Our Team?
          </h2>
          <p className="text-lg mb-8 opacity-80" style={{ color: "#ECF0F1" }}>
            Schedule your initial consultation today and take the first step
            toward lasting mental wellness.
          </p>
          <Button
            asChild
            size="lg"
            className="font-semibold"
            style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
          >
            <Link href="/book-appointment">
              <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
              Book Your Appointment
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
