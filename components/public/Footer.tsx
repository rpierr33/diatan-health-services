import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#2C3E50", color: "#ECF0F1" }}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Diatan Health Services"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-bold text-base" style={{ color: "#2ECC71" }}>
                Diatan Health Services
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#95A5A6" }}>
              Providing compassionate, evidence-based psychiatric and mental
              health care to our community.
            </p>
            <div
              className="rounded-lg p-3 text-sm font-medium"
              style={{ backgroundColor: "#27AE60" }}
            >
              <p className="font-bold mb-1">Crisis Support</p>
              <p>Call or Text: <strong>988</strong></p>
              <p>Crisis Text Line: <strong>HOME to 741741</strong></p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-4" style={{ color: "#FFFFFF" }}>
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm" style={{ color: "#95A5A6" }}>
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
                    className="hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-base mb-4" style={{ color: "#FFFFFF" }}>
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm" style={{ color: "#95A5A6" }}>
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
                    className="hover:text-green-400 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-base mb-4" style={{ color: "#FFFFFF" }}>
              Contact Information
            </h3>
            <ul className="space-y-3 text-sm" style={{ color: "#95A5A6" }}>
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="w-4 h-4 mt-0.5 shrink-0"
                  style={{ color: "#2ECC71" }}
                  aria-hidden="true"
                />
                <span>
                  4200 NW 16th St. Suite 449
                  <br />
                  Lauderhill, FL 33313
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#2ECC71" }}
                  aria-hidden="true"
                />
                <a
                  href="tel:9543475845"
                  className="hover:text-green-400 transition-colors"
                >
                  (954) 347-5845
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#2ECC71" }}
                  aria-hidden="true"
                />
                <a
                  href="mailto:info@diatanhealthservices.com"
                  className="hover:text-green-400 transition-colors break-all"
                >
                  info@diatanhealthservices.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock
                  className="w-4 h-4 shrink-0"
                  style={{ color: "#2ECC71" }}
                  aria-hidden="true"
                />
                <span>Monday to Friday</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-10 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
          style={{ borderColor: "#34495E", color: "#7F8C8D" }}
        >
          <p>
            &copy; {new Date().getFullYear()} Diatan Health Services, LLC. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/hipaa" className="hover:text-green-400 transition-colors">
              HIPAA Notice
            </Link>
            <Link href="/privacy" className="hover:text-green-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-green-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
