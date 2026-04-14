import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Conditions Treated",
  description:
    "We treat a wide range of mental health conditions including depression, anxiety, bipolar disorder, PTSD, ADHD, schizophrenia, OCD, eating disorders, and more.",
};

const conditionCategories = [
  {
    category: "Mood Disorders",
    conditions: [
      { name: "Major Depressive Disorder", desc: "A mood disorder causing persistent sadness, hopelessness, and loss of interest that significantly affects daily functioning." },
      { name: "Bipolar Disorder", desc: "A mental condition characterized by extreme mood swings including emotional highs (mania) and lows (depression)." },
      { name: "Depression", desc: "A common but serious mood disorder causing severe symptoms that affect how you feel, think, and handle daily activities." },
    ],
  },
  {
    category: "Anxiety & Related",
    conditions: [
      { name: "Anxiety Disorders", desc: "Persistent, excessive fear or worry that interferes significantly with daily activities and quality of life." },
      { name: "OCD", desc: "Obsessive-Compulsive Disorder involving unwanted recurring thoughts (obsessions) and repetitive behaviors (compulsions)." },
      { name: "Panic Disorder", desc: "Recurrent, unexpected panic attacks and persistent, excessive fear of future attacks." },
    ],
  },
  {
    category: "Trauma & Stress",
    conditions: [
      { name: "PTSD", desc: "Post-Traumatic Stress Disorder develops in some people who have experienced or witnessed shocking, dangerous, or traumatic events." },
      { name: "Child Abuse", desc: "Trauma-informed care for survivors of childhood physical, emotional, or sexual abuse and neglect." },
      { name: "Trauma Treatment", desc: "Evidence-based trauma-focused therapies including EMDR and CPT to help process and heal from traumatic experiences." },
    ],
  },
  {
    category: "Neurodevelopmental",
    conditions: [
      { name: "ADHD", desc: "Attention-Deficit/Hyperactivity Disorder affecting attention, self-control, activity levels, and executive functioning." },
      { name: "Learning Disorders", desc: "Neurodevelopmental conditions that affect reading, writing, mathematical abilities, and academic performance." },
      { name: "School Difficulties", desc: "Support for academic challenges, school refusal, learning difficulties, and educational transitions." },
    ],
  },
  {
    category: "Psychotic Disorders",
    conditions: [
      { name: "Schizophrenia", desc: "A serious mental disorder affecting how a person thinks, feels, and behaves, including disruptions to thinking and perception." },
      { name: "Personality Disorders", desc: "Inflexible and unhealthy patterns of thinking, functioning, and behaving that cause significant distress." },
    ],
  },
  {
    category: "Addiction & Behavioral",
    conditions: [
      { name: "Substance Use Disorders", desc: "Problematic patterns of alcohol or drug use leading to significant impairment or distress." },
      { name: "Gambling Disorder", desc: "Persistent and recurrent problematic gambling behavior that causes significant distress or functional impairment." },
      { name: "Eating Disorders", desc: "Serious conditions related to persistent eating behaviors that negatively impact health, emotions, and functioning." },
      { name: "In-Person Addiction Treatment", desc: "Comprehensive in-person treatment programs for substance use disorders and behavioral addictions." },
    ],
  },
  {
    category: "Special Populations",
    conditions: [
      { name: "Gender Identity Issues", desc: "Affirming, inclusive, and compassionate support for gender identity exploration, dysphoria, and transition." },
      { name: "Parenting Issues", desc: "Therapeutic guidance and practical strategies for navigating the emotional challenges of parenthood." },
      { name: "Dementia", desc: "Compassionate psychiatric care for cognitive decline, behavioral symptoms, and support for caregivers." },
    ],
  },
  {
    category: "General & Situational",
    conditions: [
      { name: "Loneliness", desc: "Therapeutic support for social isolation, building meaningful connections, and developing social skills." },
      { name: "Sleep Problems", desc: "Assessment and treatment for insomnia, hypersomnia, sleep anxiety, and other sleep-related disorders." },
      { name: "Physical Illness", desc: "Psychological support for individuals managing chronic or acute physical health conditions and medical trauma." },
      { name: "Debt-Related Mental Health", desc: "Addressing the significant psychological impact of financial stress, debt, and economic hardship." },
      { name: "Mental Health Urgent Care", desc: "Timely psychiatric intervention for acute mental health needs that require prompt attention but not emergency hospitalization." },
    ],
  },
];

export default function ConditionsPage() {
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
            Conditions We Treat
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: "#2C3E50" }}>
            You Are Not Alone
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "#4A5568" }}>
            We provide expert, compassionate care for a wide range of mental health
            conditions. Whatever you are facing, we are here to help.
          </p>
          <Button
            asChild
            size="lg"
            className="font-semibold"
            style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
          >
            <Link href="/book-appointment">
              <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
              Book an Evaluation
            </Link>
          </Button>
        </div>
      </section>

      {/* Conditions by Category */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            {conditionCategories.map((cat) => (
              <div key={cat.category}>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-1.5 h-8 rounded-full"
                    style={{ backgroundColor: "#27AE60" }}
                    aria-hidden="true"
                  />
                  <h2 className="text-2xl font-bold" style={{ color: "#2C3E50" }}>
                    {cat.category}
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.conditions.map((condition) => (
                    <Card
                      key={condition.name}
                      className="border card-hover"
                      style={{ borderColor: "#E2EAE6", backgroundColor: "#FAFAFA" }}
                    >
                      <CardHeader className="pb-2">
                        <CardTitle
                          className="text-base font-semibold"
                          style={{ color: "#2C3E50" }}
                        >
                          {condition.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                          {condition.desc}
                        </p>
                        <Link
                          href="/book-appointment"
                          className="mt-3 inline-flex text-xs font-semibold"
                          style={{ color: "#27AE60" }}
                        >
                          Get Help →
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
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
            Don&apos;t See Your Condition Listed?
          </h2>
          <p className="text-lg mb-8" style={{ color: "#6B7280" }}>
            This is not an exhaustive list. Contact us to discuss your specific
            needs — we are here to help with any mental health concern.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="font-semibold"
              style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
            >
              <Link href="/contact">Contact Us</Link>
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
