"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/conditions", label: "Conditions" },
  { href: "/about", label: "About" },
  { href: "/telepsychiatry", label: "Telepsychiatry" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={{
        /* Warm-tinted glassmorphism — cream with blur */
        backgroundColor: scrolled
          ? "rgba(255, 251, 245, 0.94)"
          : "rgba(255, 251, 245, 0.80)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: scrolled
          ? "1px solid rgba(224, 205, 184, 0.7)"
          : "1px solid transparent",
        boxShadow: scrolled
          ? "0 2px 16px rgba(42, 36, 32, 0.05)"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0"
            aria-label="Diatan Health Services - Home"
          >
            <Image
              src="/diatan-logo.png"
              alt="Diatan Health Services logo"
              width={40}
              height={40}
              className="rounded-xl"
              priority
            />
            <div className="hidden sm:block">
              <div
                className="font-semibold text-[15px] leading-tight"
                style={{
                  color: "#3D5A3E",
                  fontFamily: "var(--font-heading), Georgia, serif",
                }}
              >
                Diatan Health Services
              </div>
              <div
                className="text-[11px] tracking-wide"
                style={{
                  color: "#9A8F86",
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                }}
              >
                Where mental wellness is our priority
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-0.5"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-[#F5EDE2]"
                style={{
                  color: "#4A3F38",
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:9543475845"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-80"
              style={{
                color: "#3D5A3E",
                fontFamily: "var(--font-body), system-ui, sans-serif",
              }}
              aria-label="Call us at (954) 347-5845"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span className="hidden md:inline">(954) 347-5845</span>
            </a>
            <a
              href="https://www.zocdoc.com/practice/diatan-health-services-115310"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg border transition-all duration-200 hover:opacity-80"
              style={{
                color: "#3D5A3E",
                borderColor: "#3D5A3E",
                backgroundColor: "transparent",
                fontFamily: "var(--font-body), system-ui, sans-serif",
              }}
            >
              Book on ZocDoc
            </a>
            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex font-semibold btn-breathe rounded-lg"
              style={{
                backgroundColor: "#3D5A3E",
                color: "#FFFFFF",
                fontFamily: "var(--font-body), system-ui, sans-serif",
              }}
            >
              <Link href="/book-appointment">Book Appointment</Link>
            </Button>
            <button
              className="lg:hidden p-2 rounded-lg transition-colors hover:bg-[#F5EDE2]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              style={{ color: "#4A3F38" }}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{
            backgroundColor: "rgba(255, 251, 245, 0.98)",
            borderColor: "#E0CDB8",
          }}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 rounded-lg text-base font-medium hover:bg-[#F5EDE2] transition-colors"
                style={{
                  color: "#4A3F38",
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t" style={{ borderColor: "#E0CDB8" }}>
              <Button
                asChild
                className="w-full font-semibold btn-breathe rounded-lg"
                style={{ backgroundColor: "#3D5A3E", color: "#FFFFFF" }}
              >
                <Link
                  href="/book-appointment"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Appointment
                </Link>
              </Button>
              <a
                href="https://www.zocdoc.com/practice/diatan-health-services-115310"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-3 py-2.5 text-sm font-semibold rounded-lg border transition-colors"
                style={{ color: "#3D5A3E", borderColor: "#3D5A3E", backgroundColor: "transparent" }}
              >
                Book on ZocDoc
              </a>
              <a
                href="tel:9543475845"
                className="flex items-center justify-center gap-2 mt-3 py-2 text-sm font-medium"
                style={{
                  color: "#3D5A3E",
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                }}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                (954) 347-5845
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
