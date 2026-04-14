"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function CrisisBanner() {
  return (
    <div
      className="w-full py-2 px-4 text-center text-xs font-medium"
      style={{
        backgroundColor: "#F5EDE2",
        color: "#4A3F38",
        borderBottom: "1px solid #E0CDB8",
      }}
      role="alert"
      aria-label="Crisis support information"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-5">
        <span
          className="font-medium"
          style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
        >
          Need immediate support?
        </span>
        <div className="flex items-center gap-4">
          <a
            href="tel:988"
            className="flex items-center gap-1.5 font-bold transition-colors hover:underline underline-offset-2"
            style={{
              color: "#3D5A3E",
              fontFamily: "var(--font-body), system-ui, sans-serif",
            }}
            aria-label="Call or text 988 Suicide and Crisis Lifeline"
          >
            <Phone className="w-3 h-3 shrink-0" aria-hidden="true" />
            Call 988
          </a>
          <span aria-hidden="true" style={{ color: "#C4956A", opacity: 0.5 }}>
            ·
          </span>
          <a
            href="sms:741741?body=HOME"
            className="flex items-center gap-1.5 transition-colors hover:underline underline-offset-2"
            style={{
              color: "#4A3F38",
              fontFamily: "var(--font-body), system-ui, sans-serif",
            }}
            aria-label="Text HOME to Crisis Text Line at 741741"
          >
            <MessageCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
            Text HOME to 741741
          </a>
        </div>
      </div>
    </div>
  );
}
