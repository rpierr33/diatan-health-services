import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ClipboardList, Pill, Heart, Shield, Video, BookOpen,
  Users, Leaf, Network, RefreshCw, ChevronRight, Phone, Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive psychiatric and mental health services including psychiatric evaluations, medication management, individual therapy, crisis intervention, telepsychiatry, and more.",
};

const services = [
  {
    slug: "psychiatric-evaluations",
    icon: ClipboardList,
    name: "Psychiatric Evaluations",
    shortDesc: "Comprehensive assessments for accurate diagnosis.",
    longDesc:
      "Our thorough psychiatric evaluations include a detailed review of your medical history, symptom assessment, mental status examination, and diagnostic clarification. We take the time to truly understand your unique situation before creating a personalized treatment plan.",
    includes: [
      "Comprehensive mental status exam",
      "Medical and psychiatric history review",
      "Diagnostic assessment",
      "Personalized treatment planning",
      "Coordination with other providers",
    ],
  },
  {
    slug: "medication-management",
    icon: Pill,
    name: "Medication Management",
    shortDesc: "Expert prescribing and monitoring of psychiatric medications.",
    longDesc:
      "Managing psychiatric medications requires expertise and regular monitoring. Our PMHNP-BC team prescribes evidence-based medications, monitors for effectiveness and side effects, and adjusts treatment as needed to optimize your mental health outcomes.",
    includes: [
      "Initial medication evaluation",
      "Evidence-based prescribing",
      "Regular follow-up monitoring",
      "Side effect management",
      "Medication adjustment and optimization",
    ],
  },
  {
    slug: "individual-therapy",
    icon: Heart,
    name: "Individual Therapy",
    shortDesc: "One-on-one counseling tailored to your unique needs.",
    longDesc:
      "Individual therapy provides a private, supportive space to explore your thoughts, feelings, and behaviors. Our therapists use evidence-based modalities including CBT, DBT, and trauma-focused approaches to help you achieve lasting change.",
    includes: [
      "Cognitive Behavioral Therapy (CBT)",
      "Dialectical Behavior Therapy (DBT)",
      "Trauma-focused therapy",
      "Mindfulness-based interventions",
      "Goal-setting and progress tracking",
    ],
  },
  {
    slug: "crisis-intervention",
    icon: Shield,
    name: "Crisis Intervention",
    shortDesc: "Immediate support during mental health emergencies.",
    longDesc:
      "Mental health crises require immediate, skilled intervention. Our team provides rapid assessment, safety planning, and stabilization services to help you navigate acute mental health emergencies safely and effectively.",
    includes: [
      "Rapid psychiatric assessment",
      "Safety planning",
      "Crisis stabilization",
      "Emergency medication management",
      "Coordination with emergency services",
    ],
  },
  {
    slug: "telepsychiatry",
    icon: Video,
    name: "Telepsychiatry Services",
    shortDesc: "Secure remote consultations via video or phone.",
    longDesc:
      "Telepsychiatry brings expert psychiatric care directly to you — from your home, office, or anywhere with a stable internet connection. All sessions are conducted on HIPAA-compliant platforms, ensuring your privacy and security.",
    includes: [
      "HIPAA-compliant video platform",
      "Phone consultation option",
      "Prescription management",
      "Follow-up care",
      "Most insurance plans accepted",
    ],
  },
  {
    slug: "psychoeducation",
    icon: BookOpen,
    name: "Psychoeducation",
    shortDesc: "Education on conditions, treatments, and coping skills.",
    longDesc:
      "Understanding your mental health condition is a powerful component of recovery. Our psychoeducation services equip you and your loved ones with knowledge about diagnoses, treatment options, and practical coping strategies.",
    includes: [
      "Condition-specific education",
      "Medication education",
      "Coping skills training",
      "Family education sessions",
      "Self-management strategies",
    ],
  },
  {
    slug: "psr",
    icon: Users,
    name: "Psychosocial Rehabilitation (PSR)",
    shortDesc: "Enhance independent functioning and community integration.",
    longDesc:
      "PSR services help individuals with serious mental illness build the skills needed for independent living, employment, and community participation. Our structured programs address social skills, daily living skills, and vocational readiness.",
    includes: [
      "Social skills training",
      "Daily living skills",
      "Vocational support",
      "Community integration",
      "Peer support groups",
    ],
  },
  {
    slug: "wellness-prevention",
    icon: Leaf,
    name: "Wellness & Prevention Programs",
    shortDesc: "Stress reduction, resilience building, and self-care.",
    longDesc:
      "Prevention is as important as treatment. Our wellness programs focus on building mental resilience, developing healthy habits, and implementing evidence-based stress reduction techniques before a crisis occurs.",
    includes: [
      "Stress management techniques",
      "Mindfulness training",
      "Sleep hygiene coaching",
      "Resilience building",
      "Lifestyle modification support",
    ],
  },
  {
    slug: "care-coordination",
    icon: Network,
    name: "Care Coordination",
    shortDesc: "Seamless integration with your entire care team.",
    longDesc:
      "Mental health is deeply connected to physical health. Our care coordination services ensure seamless communication and collaboration between your psychiatric providers, primary care physicians, and specialists.",
    includes: [
      "Communication with PCP",
      "Specialist referrals",
      "Medical record coordination",
      "Integrated care planning",
      "Community resource navigation",
    ],
  },
  {
    slug: "continuity-of-care",
    icon: RefreshCw,
    name: "Continuity of Care",
    shortDesc: "Ongoing monitoring and long-term recovery support.",
    longDesc:
      "Recovery is an ongoing journey, not a destination. Our continuity of care services ensure that you have consistent, long-term support to maintain your mental wellness, prevent relapse, and achieve your long-term goals.",
    includes: [
      "Regular progress monitoring",
      "Relapse prevention planning",
      "Long-term medication management",
      "Transition of care support",
      "Follow-up scheduling",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 lg:py-24"
        style={{
          background: "linear-gradient(135deg, #E8F5EE 0%, #F0F9F5 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge
            className="mb-4 text-sm"
            style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
          >
            Our Services
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: "#2C3E50" }}>
            Comprehensive Mental Health Services
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "#4A5568" }}>
            We offer a full spectrum of psychiatric and mental health services,
            tailored to meet you where you are on your wellness journey.
          </p>
          <Button
            asChild
            size="lg"
            className="font-semibold"
            style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
          >
            <Link href="/book-appointment">
              <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
              Schedule a Consultation
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className={`grid lg:grid-cols-2 gap-10 items-start ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#E8F5EE" }}
                    >
                      <service.icon
                        className="w-7 h-7"
                        style={{ color: "#27AE60" }}
                        aria-hidden="true"
                      />
                    </div>
                    <h2 className="text-2xl font-bold" style={{ color: "#2C3E50" }}>
                      {service.name}
                    </h2>
                  </div>
                  <p className="text-lg mb-4" style={{ color: "#4A5568" }}>
                    {service.longDesc}
                  </p>
                  <Button
                    asChild
                    className="font-semibold"
                    style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
                  >
                    <Link href="/book-appointment">Book This Service</Link>
                  </Button>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <Card
                    className="border"
                    style={{ borderColor: "#E2EAE6", backgroundColor: "#F0F7F4" }}
                  >
                    <CardHeader>
                      <CardTitle
                        className="text-base font-semibold"
                        style={{ color: "#27AE60" }}
                      >
                        What&apos;s Included
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2.5 text-sm"
                            style={{ color: "#2C3E50" }}
                          >
                            <ChevronRight
                              className="w-4 h-4 shrink-0"
                              style={{ color: "#27AE60" }}
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#F0F7F4" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#2C3E50" }}>
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8" style={{ color: "#6B7280" }}>
            Contact us today to schedule your initial consultation. We are here
            to help you find the right path to mental wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="font-semibold"
              style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
            >
              <Link href="/book-appointment">Book an Appointment</Link>
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
                (954) 347-5845
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
