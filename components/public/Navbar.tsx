"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/conditions", label: "Conditions Treated" },
  { href: "/about", label: "About Us" },
  { href: "/telepsychiatry", label: "Telepsychiatry" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full shadow-sm"
      style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #E2EAE6" }}
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
              src="/images/logo.png"
              alt="Diatan Health Services logo"
              width={44}
              height={44}
              className="rounded-lg"
              priority
            />
            <div className="hidden sm:block">
              <div
                className="font-bold text-lg leading-tight"
                style={{ color: "#27AE60" }}
              >
                Diatan Health Services
              </div>
              <div className="text-xs" style={{ color: "#6B7280" }}>
                Where mental wellness is our priority
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-green-600"
                style={{ color: "#2C3E50" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:9543475845"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium"
              style={{ color: "#27AE60" }}
              aria-label="Call us at (954) 347-5845"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span className="hidden md:inline">(954) 347-5845</span>
            </a>
            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex font-semibold"
              style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
            >
              <Link href="/book-appointment">Book Appointment</Link>
            </Button>
            <button
              className="lg:hidden p-2 rounded-md"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              style={{ color: "#2C3E50" }}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{ backgroundColor: "#FFFFFF", borderColor: "#E2EAE6" }}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 rounded-md text-base font-medium"
                style={{ color: "#2C3E50" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t" style={{ borderColor: "#E2EAE6" }}>
              <Button
                asChild
                className="w-full font-semibold"
                style={{ backgroundColor: "#27AE60", color: "#FFFFFF" }}
              >
                <Link href="/book-appointment" onClick={() => setMobileOpen(false)}>
                  Book Appointment
                </Link>
              </Button>
              <a
                href="tel:9543475845"
                className="flex items-center justify-center gap-2 mt-3 py-2 text-sm font-medium"
                style={{ color: "#27AE60" }}
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
