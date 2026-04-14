import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about mental health services, therapy, insurance, telehealth, and your first appointment at Diatan Health Services.",
};

const faqs = [
  {
    category: "First Visit",
    questions: [
      {
        q: "What should I expect at my first appointment?",
        a: "Your first appointment is a psychiatric evaluation. This typically lasts 60-90 minutes. Your provider will review your medical and psychiatric history, discuss your current symptoms, and work with you to develop a personalized treatment plan. You may bring a list of current medications, any previous diagnoses, and questions you have.",
      },
      {
        q: "How do I prepare for my first appointment?",
        a: "Please bring: a valid photo ID, insurance card, a list of all current medications (including supplements), any previous psychiatric or medical records if available, and a list of questions you want to ask. Arriving 10-15 minutes early to complete paperwork is recommended.",
      },
      {
        q: "Can I bring someone with me to my appointment?",
        a: "Yes. You are welcome to bring a trusted family member or support person. However, most of the appointment will be one-on-one between you and your provider. Please let us know in advance if you plan to bring someone.",
      },
    ],
  },
  {
    category: "Insurance & Payment",
    questions: [
      {
        q: "What insurance plans do you accept?",
        a: "We accept Self-Pay, Medicare, Medicaid, United Healthcare, Avmed, Oscar Health, Cigna, UMR, Medica, Preferred Care Partners, Oxford Health, and Obama Care/ACA. If your insurance is not listed, please call us at (954) 347-5845 to discuss your options.",
      },
      {
        q: "Do you offer a sliding scale or payment plans for self-pay patients?",
        a: "We are committed to making care accessible. Please contact our office to discuss self-pay rates and payment arrangement options. We will work with you to find a plan that fits your situation.",
      },
      {
        q: "How do I verify my insurance benefits before my appointment?",
        a: "You can call the member services number on the back of your insurance card to verify your mental health benefits. Our team will also verify your insurance before your appointment. If you have questions, call us at (954) 347-5845.",
      },
    ],
  },
  {
    category: "Therapy & Treatment",
    questions: [
      {
        q: "What is the difference between a psychiatrist and a therapist?",
        a: "A psychiatrist (or psychiatric nurse practitioner) can prescribe medications and conduct psychiatric evaluations. A therapist (psychologist, social worker, counselor) provides talk therapy. Our PMHNP-BC providers can do both — offering evaluations, medication management, AND therapy.",
      },
      {
        q: "How long does treatment typically last?",
        a: "Treatment length varies significantly by individual. Some conditions respond quickly to treatment, while others require longer-term management. Your provider will discuss realistic expectations during your initial evaluation and adjust your care plan as you progress.",
      },
      {
        q: "Will I need to take medication?",
        a: "Not necessarily. Many conditions can be managed with therapy alone, lifestyle changes, and psychoeducation. Medication is discussed as one option among many, and you will always have an active role in any decision about your treatment.",
      },
    ],
  },
  {
    category: "Telehealth",
    questions: [
      {
        q: "Is telehealth as effective as in-person care?",
        a: "Research consistently shows that telehealth is clinically equivalent to in-person care for most psychiatric conditions, including evaluation, therapy, and medication management. Many patients actually prefer telehealth for its convenience and privacy.",
      },
      {
        q: "What do I need for a telehealth appointment?",
        a: "You need a stable internet connection, a device with a camera and microphone (smartphone, tablet, or computer), and a private, quiet space. You will receive a secure link before your appointment. If you have technical difficulties, you can call us and switch to a phone appointment.",
      },
      {
        q: "Can medications be prescribed via telehealth?",
        a: "Yes. Our PMHNP-BC providers can prescribe medications, including controlled substances when clinically appropriate and in compliance with state regulations, during telehealth appointments.",
      },
    ],
  },
  {
    category: "Crisis & Emergencies",
    questions: [
      {
        q: "What should I do if I am in a mental health crisis?",
        a: "If you are in immediate danger, call 911. If you are having thoughts of suicide or are in a mental health crisis, call or text 988 (Suicide & Crisis Lifeline) available 24/7. You can also text HOME to 741741 (Crisis Text Line). For non-emergency concerns, call our office at (954) 347-5845.",
      },
      {
        q: "Do you provide crisis intervention services?",
        a: "Yes. We offer crisis intervention services during business hours. Our team can conduct urgent assessments, provide safety planning, and coordinate with higher levels of care when necessary. For after-hours crises, the 988 Lifeline is available 24/7.",
      },
    ],
  },
  {
    category: "Privacy & HIPAA",
    questions: [
      {
        q: "Is my information confidential?",
        a: "Yes. Your health information is protected by HIPAA (Health Insurance Portability and Accountability Act). We will not disclose your information without your written consent, except in specific situations required by law (e.g., imminent danger to self or others).",
      },
      {
        q: "Can I see my own records?",
        a: "Yes. You have the right to access your medical records. Submit a written request to our office and we will provide your records within the timeframe required by law (typically 30 days).",
      },
    ],
  },
];

export default function FAQPage() {
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
            FAQ
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "#2C3E50" }}>
            Frequently Asked Questions
          </h1>
          <p className="text-lg" style={{ color: "#4A5568" }}>
            Common questions about our services, insurance, telehealth, and
            what to expect. Can&apos;t find your answer? Call us.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2
                  className="text-xl font-bold mb-4 pb-2 border-b"
                  style={{ color: "#27AE60", borderColor: "#E2EAE6" }}
                >
                  {section.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {section.questions.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`${section.category}-${i}`}
                      className="border rounded-xl px-4"
                      style={{ borderColor: "#E2EAE6" }}
                    >
                      <AccordionTrigger
                        className="text-left font-semibold py-4 text-sm"
                        style={{ color: "#2C3E50" }}
                      >
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent
                        className="text-sm pb-4 leading-relaxed"
                        style={{ color: "#4A5568" }}
                      >
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#F0F7F4" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#2C3E50" }}>
            Still Have Questions?
          </h2>
          <p className="text-base mb-6" style={{ color: "#6B7280" }}>
            Our friendly team is here to help. Call us, send a message, or
            book your first appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="font-semibold"
              style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
            >
              <Link href="/book-appointment">
                <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
                Book an Appointment
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
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
