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
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [sideOpen, setSideOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when side menu is open
  useEffect(() => {
    if (sideOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [sideOpen]);

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full transition-all duration-300"
        style={{
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
          <div className="flex items-center justify-between h-16">
            {/* Left: Hamburger + Logo */}
            <div className="flex items-center gap-3">
              <button
                className="p-2 rounded-lg transition-colors hover:bg-[#F5EDE2]"
                onClick={() => setSideOpen(true)}
                aria-label="Open menu"
                style={{ color: "#4A3F38" }}
              >
                <Menu className="w-5 h-5" aria-hidden="true" />
              </button>

              <Link
                href="/"
                className="flex items-center gap-2.5 shrink-0"
                aria-label="Diatan Health Services - Home"
              >
                <Image
                  src="/diatan-logo.png"
                  alt="Diatan Health Services logo"
                  width={100}
                  height={40}
                  className="h-9 w-auto object-contain"
                  priority
                />
                <div className="hidden sm:block">
                  <div
                    className="font-semibold text-[13px] leading-tight"
                    style={{
                      color: "#3D5A3E",
                      fontFamily: "var(--font-heading), Georgia, serif",
                    }}
                  >
                    Diatan Health Services
                  </div>
                  <div
                    className="text-[10px] tracking-wide"
                    style={{
                      color: "#9A8F86",
                      fontFamily: "var(--font-body), system-ui, sans-serif",
                    }}
                  >
                    Where mental wellness is our priority
                  </div>
                </div>
              </Link>
            </div>

            {/* Right: Phone + ZocDoc + Book Appointment */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="tel:9543475845"
                className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-80"
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
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all duration-200 hover:opacity-80"
                style={{
                  color: "#3D5A3E",
                  borderColor: "#3D5A3E",
                  backgroundColor: "transparent",
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                }}
              >
                ZocDoc
              </a>
              <Button
                asChild
                size="sm"
                className="font-semibold btn-breathe rounded-lg text-xs px-3 sm:px-4 sm:text-sm"
                style={{
                  backgroundColor: "#3D5A3E",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-body), system-ui, sans-serif",
                }}
              >
                <Link href="/book-appointment">Book Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Side Menu Overlay */}
      {sideOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/30"
          onClick={() => setSideOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Side Menu Panel */}
      <div
        className={`fixed top-0 left-0 z-[70] h-full w-72 transform transition-transform duration-300 ease-in-out ${
          sideOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: "#FFFBF5" }}
        role="dialog"
        aria-modal={sideOpen}
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: "#E0CDB8" }}>
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setSideOpen(false)}
          >
            <Image
              src="/diatan-logo.png"
              alt="Diatan Health Services"
              width={80}
              height={32}
              className="h-8 w-auto object-contain"
            />
            <span
              className="font-semibold text-sm"
              style={{ color: "#3D5A3E", fontFamily: "var(--font-heading), Georgia, serif" }}
            >
              Diatan Health
            </span>
          </Link>
          <button
            onClick={() => setSideOpen(false)}
            className="p-2 rounded-lg hover:bg-[#F5EDE2] transition-colors"
            aria-label="Close menu"
            style={{ color: "#4A3F38" }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-3 py-3 rounded-lg text-[15px] font-medium hover:bg-[#F5EDE2] transition-colors"
              style={{
                color: "#4A3F38",
                fontFamily: "var(--font-body), system-ui, sans-serif",
              }}
              onClick={() => setSideOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t space-y-3" style={{ borderColor: "#E0CDB8" }}>
          <Button
            asChild
            className="w-full font-semibold btn-breathe rounded-lg"
            style={{ backgroundColor: "#3D5A3E", color: "#FFFFFF" }}
          >
            <Link href="/book-appointment" onClick={() => setSideOpen(false)}>
              Book Appointment
            </Link>
          </Button>
          <a
            href="https://www.zocdoc.com/practice/diatan-health-services-115310"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg border transition-colors"
            style={{ color: "#3D5A3E", borderColor: "#3D5A3E" }}
          >
            Book on ZocDoc
          </a>
          <a
            href="tel:9543475845"
            className="flex items-center justify-center gap-2 py-2 text-sm font-medium"
            style={{ color: "#3D5A3E" }}
          >
            <Phone className="w-4 h-4" />
            (954) 347-5845
          </a>
        </div>
      </div>
    </>
  );
}
