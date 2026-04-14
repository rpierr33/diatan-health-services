import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#2A2420", color: "#C4B8B0" }}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/diatan-logo.png"
                alt="Diatan Health Services"
                width={140}
                height={56}
                className="rounded-xl"
              />
              <span
                className="font-semibold text-base"
                style={{
                  color: "#DEB896",
                  fontFamily: "var(--font-heading), Georgia, serif",
                }}
              >
                Diatan Health Services
              </span>
            </Link>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{
                color: "#8A7E78",
                fontFamily: "var(--font-body), system-ui, sans-serif",
              }}
            >
              Providing compassionate, evidence-based psychiatric and mental
              health care to our community.
            </p>
            {/* Crisis box */}
            <div
              className="rounded-xl p-4 text-sm"
              style={{
                backgroundColor: "rgba(196, 149, 106, 0.12)",
                border: "1px solid rgba(196, 149, 106, 0.25)",
              }}
            >
              <p
                className="font-semibold mb-2"
                style={{
                  color: "#DEB896",
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                }}
              >
                Crisis Support — 24/7
              </p>
              <p
                style={{
                  color: "#C4B8B0",
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                }}
              >
                Call or Text:{" "}
                <strong style={{ color: "#FFFBF5" }}>988</strong>
              </p>
              <p
                style={{
                  color: "#C4B8B0",
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                }}
              >
                Crisis Text Line:{" "}
                <strong style={{ color: "#FFFBF5" }}>HOME to 741741</strong>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3
              className="font-semibold text-xs uppercase tracking-widest mb-5"
              style={{
                color: "#FFFBF5",
                fontFamily: "var(--font-body), system-ui, sans-serif",
              }}
            >
              Services
            </h3>
            <ul
              className="space-y-3 text-sm"
              style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
            >
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
                    className="transition-colors duration-200 hover:text-[#DEB896]"
                    style={{ color: "#8A7E78" }}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-semibold text-xs uppercase tracking-widest mb-5"
              style={{
                color: "#FFFBF5",
                fontFamily: "var(--font-body), system-ui, sans-serif",
              }}
            >
              Quick Links
            </h3>
            <ul
              className="space-y-3 text-sm"
              style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
            >
              {[
                { href: "/conditions", label: "Conditions Treated" },
                { href: "/about", label: "About Us" },
                { href: "/book-appointment", label: "Book Appointment" },
                { href: "/resources", label: "Resources & Blog" },
                { href: "/careers", label: "Careers" },
                { href: "/contact", label: "Contact Us" },
                { href: "/faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-[#DEB896]"
                    style={{ color: "#8A7E78" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info + Hours */}
          <div>
            <h3
              className="font-semibold text-xs uppercase tracking-widest mb-5"
              style={{
                color: "#FFFBF5",
                fontFamily: "var(--font-body), system-ui, sans-serif",
              }}
            >
              Contact
            </h3>
            <ul
              className="space-y-4 text-sm mb-8"
              style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
            >
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 mt-0.5 shrink-0"
                  style={{ color: "#C4956A" }}
                  aria-hidden="true"
                />
                <span style={{ color: "#8A7E78" }}>
                  4200 NW 16th St. Suite 449
                  <br />
                  Lauderhill, FL 33313
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#C4956A" }}
                  aria-hidden="true"
                />
                <a
                  href="tel:9543475845"
                  className="transition-colors hover:text-[#DEB896]"
                  style={{ color: "#8A7E78" }}
                >
                  (954) 347-5845
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#C4956A" }}
                  aria-hidden="true"
                />
                <a
                  href="mailto:info@diatanhealthservices.com"
                  className="transition-colors hover:text-[#DEB896] break-all"
                  style={{ color: "#8A7E78" }}
                >
                  info@diatanhealthservices.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#C4956A" }}
                  aria-hidden="true"
                />
                <span style={{ color: "#8A7E78" }}>Monday – Friday</span>
              </li>
            </ul>

            {/* Crisis hotline repeated at bottom of contact col */}
            <p
              className="text-xs leading-relaxed"
              style={{
                color: "#6A5E58",
                fontFamily: "var(--font-body), system-ui, sans-serif",
              }}
            >
              Mental health crisis?{" "}
              <a
                href="tel:988"
                className="underline underline-offset-2 hover:text-[#DEB896] transition-colors"
                style={{ color: "#C4956A" }}
              >
                Call or text 988
              </a>{" "}
              — available 24/7.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderColor: "rgba(196, 149, 106, 0.15)",
            color: "#6A5E58",
            fontFamily: "var(--font-body), system-ui, sans-serif",
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} Diatan Health Services, LLC. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/hipaa"
              className="transition-colors hover:text-[#DEB896]"
            >
              HIPAA Notice
            </Link>
            <Link
              href="/privacy"
              className="transition-colors hover:text-[#DEB896]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-[#DEB896]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
