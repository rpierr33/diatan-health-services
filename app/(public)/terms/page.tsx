import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Diatan Health Services Terms of Service.",
};

export default function TermsPage() {
  return (
    <div className="py-16" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Badge style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }} className="mb-3">Legal</Badge>
          <h1 className="text-3xl font-bold mb-2" style={{ color: "#2C3E50" }}>Terms of Service</h1>
          <p className="text-sm" style={{ color: "#6B7280" }}>Last Updated: January 1, 2024</p>
        </div>
        <div className="space-y-6 text-sm leading-relaxed" style={{ color: "#4A5568" }}>
          <section>
            <h2 className="text-lg font-bold mb-2" style={{ color: "#2C3E50" }}>Acceptance of Terms</h2>
            <p>By accessing or using the Diatan Health Services website and scheduling services, you agree to these Terms of Service.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold mb-2" style={{ color: "#2C3E50" }}>Medical Disclaimer</h2>
            <p>The content on this website is for informational purposes only and does not constitute medical advice. It does not replace consultation with a qualified healthcare professional. Always seek the advice of your physician or mental health provider regarding your medical condition.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold mb-2" style={{ color: "#2C3E50" }}>Emergency Situations</h2>
            <p>If you are experiencing a mental health emergency, call 911 or go to your nearest emergency room. For suicide or crisis support, call or text 988. Do not rely on this website for emergency medical guidance.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold mb-2" style={{ color: "#2C3E50" }}>Appointment Cancellation</h2>
            <p>We require at least 24 hours notice to cancel or reschedule an appointment. Late cancellations or no-shows may be subject to a fee.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold mb-2" style={{ color: "#2C3E50" }}>Contact</h2>
            <p>Questions about these terms? Contact us at info@diatanhealthservices.com or (954) 347-5845.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
