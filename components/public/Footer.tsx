import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#1E2D3A", color: "#C4B8B0" }}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.png"
                alt="Diatan Health Services"
                width={38}
                height={38}
                className="rounded-xl"
              />
              <span
                className="font-semibold text-base font-lora"
                style={{
                  color: "#2D7A4F",
                  fontFamily: "var(--font-lora), Georgia, serif",
                }}
              >
                Diatan Health Services
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed mb-6 font-inter"
              style={{ color: "#8A9EA8", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              Providing compassionate, evidence-based psychiatric and mental
              health care to our community.
            </p>
            <div
              className="rounded-xl p-4 text-sm"
              style={{ backgroundColor: "rgba(45,158,96,0.15)", border: "1px solid rgba(45,158,96,0.25)" }}
            >
              <p
                className="font-semibold mb-2 font-inter"
                style={{ color: "#2D7A4F", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
              >
                Crisis Support — 24/7
              </p>
              <p className="font-inter" style={{ color: "#C4B8B0", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                Call or Text: <strong style={{ color: "#FFFFFF" }}>988</strong>
              </p>
              <p className="font-inter" style={{ color: "#C4B8B0", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
                Crisis Text Line: <strong style={{ color: "#FFFFFF" }}>HOME to 741741</strong>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-semibold text-sm uppercase tracking-wider mb-5 font-inter"
              style={{ color: "#FFFFFF", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm font-inter" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
              {[
                { href: "/services", label: "Our Services" },
                { href: "/conditions", label: "Conditions Treated" },
                { href: "/about", label: "About Us" },
                { href: "/telepsychiatry", label: "Telepsychiatry" },
                { href: "/book-appointment", label: "Book Appointment" },
                { href: "/resources", label: "Resources & Blog" },
                { href: "/careers", label: "Careers" },
                { href: "/contact", label: "Contact Us" },
                { href: "/faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-[#2D7A4F]"
                    style={{ color: "#8A9EA8" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="font-semibold text-sm uppercase tracking-wider mb-5 font-inter"
              style={{ color: "#FFFFFF", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              Our Services
            </h3>
            <ul className="space-y-3 text-sm font-inter" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
              {[
                "Psychiatric Evaluations",
                "Medication Management",
                "Individual Therapy",
                "Crisis Intervention",
                "Telepsychiatry",
                "Psychoeducation",
                "Psychosocial Rehabilitation",
                "Wellness & Prevention",
                "Care Coordination",
                "Continuity of Care",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="transition-colors duration-200 hover:text-[#2D7A4F]"
                    style={{ color: "#8A9EA8" }}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="font-semibold text-sm uppercase tracking-wider mb-5 font-inter"
              style={{ color: "#FFFFFF", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              Contact Information
            </h3>
            <ul className="space-y-4 text-sm font-inter" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 mt-0.5 shrink-0"
                  style={{ color: "#2D7A4F" }}
                  aria-hidden="true"
                />
                <span style={{ color: "#8A9EA8" }}>
                  4200 NW 16th St. Suite 449
                  <br />
                  Lauderhill, FL 33313
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#2D7A4F" }}
                  aria-hidden="true"
                />
                <a
                  href="tel:9543475845"
                  className="transition-colors hover:text-[#2D7A4F]"
                  style={{ color: "#8A9EA8" }}
                >
                  (954) 347-5845
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#2D7A4F" }}
                  aria-hidden="true"
                />
                <a
                  href="mailto:info@diatanhealthservices.com"
                  className="transition-colors hover:text-[#2D7A4F] break-all"
                  style={{ color: "#8A9EA8" }}
                >
                  info@diatanhealthservices.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#2D7A4F" }}
                  aria-hidden="true"
                />
                <span style={{ color: "#8A9EA8" }}>Monday – Friday</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-inter"
          style={{ borderColor: "#2A3D4D", color: "#5A6E7A", fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        >
          <p>
            &copy; {new Date().getFullYear()} Diatan Health Services, LLC. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/hipaa" className="transition-colors hover:text-[#2D7A4F]">
              HIPAA Notice
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-[#2D7A4F]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-[#2D7A4F]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
