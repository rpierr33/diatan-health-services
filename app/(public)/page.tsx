import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  ClipboardList,
  Pill,
  Heart,
  Shield,
  Video,
  BookOpen,
  Users,
  Leaf,
  Network,
  RefreshCw,
  Star,
  ChevronRight,
  Phone,
  Calendar,
  CheckCircle2,
} from "lucide-react";

const services = [
  { icon: ClipboardList, name: "Psychiatric Evaluations", desc: "Comprehensive assessments for accurate diagnosis and personalized treatment plans." },
  { icon: Pill, name: "Medication Management", desc: "Expert prescribing and monitoring of psychiatric medications." },
  { icon: Heart, name: "Individual Therapy", desc: "One-on-one counseling sessions tailored to your unique needs." },
  { icon: Shield, name: "Crisis Intervention", desc: "Immediate, compassionate support during mental health emergencies." },
  { icon: Video, name: "Telepsychiatry", desc: "Convenient remote consultations via secure video or phone." },
  { icon: BookOpen, name: "Psychoeducation", desc: "Education on conditions, treatments, and coping skills." },
  { icon: Users, name: "Psychosocial Rehabilitation", desc: "Evidence-based programs to enhance independent functioning." },
  { icon: Leaf, name: "Wellness & Prevention", desc: "Stress reduction, resilience building, and self-care programs." },
  { icon: Network, name: "Care Coordination", desc: "Seamless integration with your primary care team." },
  { icon: RefreshCw, name: "Continuity of Care", desc: "Ongoing monitoring and long-term recovery support." },
];

const conditions = [
  "Major Depressive Disorder", "Bipolar Disorder", "Anxiety Disorders",
  "PTSD", "ADHD", "Schizophrenia", "OCD", "Eating Disorders",
  "Substance Use Disorders", "Panic Disorder", "Personality Disorders",
  "Trauma Treatment",
];

const testimonials = [
  { name: "Samantha Gingras", condition: "Depression", text: "I battled depression for years. The therapy and support groups here helped me regain control of my life. The team is compassionate and truly listens." },
  { name: "Phillip Williams", condition: "Anxiety", text: "Opening up about my mental health struggles was the most liberating thing I have ever done. This practice gave me the safe space I needed to heal." },
  { name: "Priya Shanku", condition: "Bipolar Disorder", text: "Recovery is a journey, not a destination. Both therapy and medication played crucial roles in my healing. I am grateful for the personalized care." },
  { name: "Sabine Thais", condition: "PTSD", text: "Having a supportive environment is key to mental wellness. Diatan Health provided exactly that — a warm, inclusive space where I felt truly understood." },
];

const insuranceList = [
  "Self-Pay", "Medicare", "Medicaid", "United Healthcare", "Avmed",
  "Oscar Health", "Cigna", "UMR", "Medica", "Preferred Care Partners",
  "Oxford Health", "Obama Care / ACA",
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-20 lg:py-32"
        style={{
          background: "linear-gradient(135deg, #E8F5EE 0%, #F0F9F5 50%, #E8F5F9 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                className="mb-6 text-sm font-semibold px-4 py-1.5"
                style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
              >
                PMHNP-BC Certified Care
              </Badge>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ color: "#2C3E50" }}
              >
                Where Mental{" "}
                <span style={{ color: "#27AE60" }}>Wellness</span>{" "}
                Is Our Priority
              </h1>
              <p
                className="text-lg sm:text-xl leading-relaxed mb-8"
                style={{ color: "#4A5568" }}
              >
                Compassionate, evidence-based psychiatric and mental health care
                for individuals and families in Lauderhill, FL and beyond. In-person
                and telepsychiatry available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="text-base font-semibold px-8 py-3"
                  style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
                >
                  <Link href="/book-appointment">
                    <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
                    Book an Appointment
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base font-semibold px-8 py-3"
                  style={{ borderColor: "#27AE60", color: "#27AE60" }}
                >
                  <Link href="/services">
                    View Our Services
                    <ChevronRight className="w-5 h-5 ml-2" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                {[
                  "Evidence-Based Treatment",
                  "Telepsychiatry Available",
                  "Insurance Accepted",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2
                      className="w-5 h-5 shrink-0"
                      style={{ color: "#27AE60" }}
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium" style={{ color: "#4A5568" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div
                className="rounded-3xl p-8 shadow-xl"
                style={{ backgroundColor: "#FFFFFF", maxWidth: "440px", width: "100%" }}
              >
                <div className="text-center mb-6">
                  <Image
                    src="/images/logo.png"
                    alt="Diatan Health Services"
                    width={80}
                    height={80}
                    className="mx-auto rounded-2xl mb-4"
                  />
                  <h2 className="font-bold text-xl" style={{ color: "#2C3E50" }}>
                    Diatan Health Services
                  </h2>
                  <p className="text-sm mt-1" style={{ color: "#27AE60" }}>
                    Psychiatric & Mental Health Care
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Location", value: "Lauderhill, FL 33313", icon: "📍" },
                    { label: "Phone", value: "(954) 347-5845", icon: "📞" },
                    { label: "Hours", value: "Monday to Friday", icon: "🕐" },
                    { label: "Services", value: "In-Person & Telehealth", icon: "💻" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 p-3 rounded-lg"
                      style={{ backgroundColor: "#F0F7F4" }}
                    >
                      <span className="text-xl" role="img" aria-label={item.label}>
                        {item.icon}
                      </span>
                      <div>
                        <div className="text-xs font-medium" style={{ color: "#6B7280" }}>
                          {item.label}
                        </div>
                        <div className="text-sm font-semibold" style={{ color: "#2C3E50" }}>
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  className="w-full mt-6 font-semibold"
                  style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
                >
                  <a href="tel:9543475845">
                    <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge
              className="mb-4 text-sm"
              style={{ backgroundColor: "#E8F5EE", color: "#27AE60" }}
            >
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#2C3E50" }}>
              Comprehensive Mental Health Care
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
              We offer a full spectrum of psychiatric and mental health services,
              delivered with compassion and evidence-based practices.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {services.map((service) => (
              <Card
                key={service.name}
                className="card-hover border text-center p-4"
                style={{ borderColor: "#E2EAE6", backgroundColor: "#FFFFFF" }}
              >
                <CardContent className="p-0">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: "#E8F5EE" }}
                  >
                    <service.icon
                      className="w-6 h-6"
                      style={{ color: "#27AE60" }}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-semibold text-sm mb-2" style={{ color: "#2C3E50" }}>
                    {service.name}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#6B7280" }}>
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              className="font-semibold"
              style={{ borderColor: "#27AE60", color: "#27AE60" }}
            >
              <Link href="/services">
                View All Services
                <ChevronRight className="w-4 h-4 ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-20" style={{ backgroundColor: "#F0F7F4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge
              className="mb-4 text-sm"
              style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
            >
              Conditions We Treat
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#2C3E50" }}>
              You Are Not Alone
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
              We provide expert care for a wide range of mental health conditions.
              Whatever you are facing, we are here to help.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {conditions.map((condition) => (
              <Link key={condition} href="/conditions">
                <Badge
                  className="px-4 py-2 text-sm font-medium cursor-pointer transition-all hover:shadow-md"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#2C3E50",
                    border: "1px solid #E2EAE6",
                  }}
                >
                  {condition}
                </Badge>
              </Link>
            ))}
            <Link href="/conditions">
              <Badge
                className="px-4 py-2 text-sm font-medium"
                style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
              >
                +14 More Conditions →
              </Badge>
            </Link>
          </div>
          <div className="text-center">
            <Button
              asChild
              className="font-semibold"
              style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
            >
              <Link href="/conditions">View All Conditions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Telepsychiatry CTA */}
      <section
        className="py-20"
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
                Telehealth Available
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Quality Care From the Comfort of Home
              </h2>
              <p className="text-lg opacity-90 leading-relaxed mb-6">
                Our secure telepsychiatry platform connects you with our team via
                video or phone — no commute, no waiting room. Same compassionate
                care, wherever you are.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "HIPAA-compliant video platform",
                  "Available via phone or video",
                  "Prescription management included",
                  "Most insurance plans accepted",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 opacity-90" aria-hidden="true" />
                    <span className="opacity-90">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="font-semibold"
                style={{ backgroundColor: "#FFFFFF", color: "#27AE60" }}
              >
                <Link href="/telepsychiatry">
                  <Video className="w-5 h-5 mr-2" aria-hidden="true" />
                  Learn About Telepsychiatry
                </Link>
              </Button>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div
                className="rounded-2xl p-8 text-center"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <Video className="w-24 h-24 mx-auto mb-4 opacity-90" style={{ color: "#FFFFFF" }} aria-hidden="true" />
                <p className="text-xl font-bold" style={{ color: "#FFFFFF" }}>
                  Start Your Telehealth Session Today
                </p>
                <p className="mt-2 opacity-80" style={{ color: "#FFFFFF" }}>
                  Book online or call (954) 347-5845
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge
              className="mb-4 text-sm"
              style={{ backgroundColor: "#E8F5EE", color: "#27AE60" }}
            >
              Patient Stories
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#2C3E50" }}>
              Real People, Real Recovery
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <Card
                key={t.name}
                className="border"
                style={{ borderColor: "#E2EAE6", backgroundColor: "#FAFAFA" }}
              >
                <CardContent className="p-6">
                  <div className="flex mb-3" aria-label={`5 out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4"
                        style={{ color: "#F59E0B", fill: "#F59E0B" }}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p
                    className="text-sm leading-relaxed mb-4 italic"
                    style={{ color: "#4A5568" }}
                  >
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#2C3E50" }}>
                      {t.name}
                    </p>
                    <Badge
                      className="mt-1 text-xs"
                      style={{ backgroundColor: "#E8F5EE", color: "#27AE60" }}
                    >
                      {t.condition}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Accepted */}
      <section className="py-20" style={{ backgroundColor: "#F0F7F4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge
              className="mb-4 text-sm"
              style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
            >
              Insurance & Payment
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#2C3E50" }}>
              We Accept Most Insurance Plans
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
              We work with most major insurance providers to make mental health
              care accessible and affordable.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {insuranceList.map((ins) => (
              <div
                key={ins}
                className="px-4 py-2 rounded-lg text-sm font-medium border"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#E2EAE6",
                  color: "#2C3E50",
                }}
              >
                {ins}
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm mb-4" style={{ color: "#6B7280" }}>
              Not sure if your insurance is accepted? Contact us to verify.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  Verify Insurance
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "#2C3E50" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#FFFFFF" }}>
            Ready to Start Your Journey to Wellness?
          </h2>
          <p className="text-lg mb-8 opacity-80" style={{ color: "#ECF0F1" }}>
            Taking the first step is the hardest part. We are here to walk with
            you every step of the way. Schedule your appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-base font-semibold px-8"
              style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
            >
              <Link href="/book-appointment">
                <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
                Book Your Appointment
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base font-semibold px-8"
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
