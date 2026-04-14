import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Diatan Health Services Privacy Policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Badge style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }} className="mb-3">Legal</Badge>
          <h1 className="text-3xl font-bold mb-2" style={{ color: "#2C3E50" }}>Privacy Policy</h1>
          <p className="text-sm" style={{ color: "#6B7280" }}>Last Updated: January 1, 2024</p>
        </div>
        <div className="space-y-6 text-sm leading-relaxed" style={{ color: "#4A5568" }}>
          <section>
            <h2 className="text-lg font-bold mb-2" style={{ color: "#2C3E50" }}>Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you fill out forms on our website, contact us, or book an appointment. This may include your name, email address, phone number, and health-related information.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold mb-2" style={{ color: "#2C3E50" }}>How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To schedule and manage appointments</li>
              <li>To communicate with you about your care</li>
              <li>To improve our website and services</li>
              <li>To comply with legal and regulatory requirements</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-bold mb-2" style={{ color: "#2C3E50" }}>HIPAA Compliance</h2>
            <p>Your health information is protected under HIPAA. We follow strict privacy and security standards for all protected health information. See our <a href="/hipaa" style={{ color: "#27AE60" }}>HIPAA Notice of Privacy Practices</a> for full details.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold mb-2" style={{ color: "#2C3E50" }}>Contact Us</h2>
            <p>For privacy concerns, contact us at info@diatanhealthservices.com or call (954) 347-5845.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
