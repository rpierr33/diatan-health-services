import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "HIPAA Notice of Privacy Practices",
  description: "Diatan Health Services HIPAA Notice of Privacy Practices — how we protect your health information.",
};

export default function HIPAAPage() {
  return (
    <div className="py-16" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Badge style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }} className="mb-3">
            Legal
          </Badge>
          <h1 className="text-3xl font-bold mb-2" style={{ color: "#2C3E50" }}>
            HIPAA Notice of Privacy Practices
          </h1>
          <p className="text-sm" style={{ color: "#6B7280" }}>
            Effective Date: January 1, 2024 | Last Updated: January 1, 2024
          </p>
        </div>

        <div className="space-y-6 text-sm leading-relaxed" style={{ color: "#4A5568" }}>
          <section>
            <h2 className="text-lg font-bold mb-2" style={{ color: "#2C3E50" }}>
              Your Rights
            </h2>
            <p>When it comes to your health information, you have certain rights. This section explains your rights and some of our responsibilities to help you.</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Get a copy of your health information.</strong> You can ask to see or get a copy of your health record and other health information we have about you. We will provide a copy or a summary of your health information, usually within 30 days of your request.</li>
              <li><strong>Ask us to correct health information.</strong> You can ask us to correct health information about you that you think is incorrect or incomplete.</li>
              <li><strong>Request confidential communications.</strong> You can ask us to contact you in a specific way (for example, home or office phone) or to send mail to a different address.</li>
              <li><strong>Ask us to limit what we use or share.</strong> You can ask us not to use or share certain health information for treatment, payment, or our operations.</li>
              <li><strong>Get a list of those with whom we have shared information.</strong> You can ask for a list (accounting) of the times we have shared your health information, who we shared it with, and why.</li>
              <li><strong>Get a copy of this privacy notice.</strong> You can ask for a paper copy of this notice at any time.</li>
              <li><strong>Choose someone to act for you.</strong> If you have given someone medical power of attorney or if someone is your legal guardian, that person can exercise your rights and make choices about your health information.</li>
              <li><strong>File a complaint if you feel your rights are violated.</strong></li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2" style={{ color: "#2C3E50" }}>
              Your Choices
            </h2>
            <p>For certain health information, you can tell us your choices about what we share. You have both the right and choice to tell us to share information with your family, close friends, or others involved in your care.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2" style={{ color: "#2C3E50" }}>
              Our Uses and Disclosures
            </h2>
            <p className="mb-2">We typically use or share your health information in the following ways:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Treat you.</strong> We can use your health information and share it with other professionals who are treating you.</li>
              <li><strong>Run our organization.</strong> We can use and share your health information to run our practice, improve your care, and contact you when necessary.</li>
              <li><strong>Bill for your services.</strong> We can use and share your health information to bill and get payment from health plans or other entities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2" style={{ color: "#2C3E50" }}>
              How to File a Complaint
            </h2>
            <p>If you feel we have violated your rights, you may file a complaint with us or with the U.S. Department of Health and Human Services Office for Civil Rights. To file a complaint with us, contact:</p>
            <div className="mt-2 p-4 rounded-lg" style={{ backgroundColor: "#F0F7F4" }}>
              <p><strong>Diatan Health Services, LLC</strong></p>
              <p>4200 NW 16th St. Suite 449, Lauderhill, FL 33313</p>
              <p>Phone: (954) 347-5845</p>
              <p>Email: info@diatanhealthservices.com</p>
            </div>
            <p className="mt-2">We will not retaliate against you for filing a complaint.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-2" style={{ color: "#2C3E50" }}>
              Changes to the Terms of This Notice
            </h2>
            <p>We can change the terms of this notice, and the changes will apply to all information we have about you. The new notice will be available upon request, in our office, and on our website.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
