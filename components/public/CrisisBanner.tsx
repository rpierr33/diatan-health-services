"use client";

import Link from "next/link";
import { Phone, MessageCircle, Heart } from "lucide-react";

export default function CrisisBanner() {
  return (
    <div
      className="w-full py-2.5 px-4 text-center text-sm font-medium"
      style={{ backgroundColor: "#92400E", color: "#FEF3C7" }}
      role="alert"
      aria-label="Crisis support information"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
        <span className="flex items-center gap-1.5 font-medium opacity-90">
          <Heart className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          Need immediate support?
        </span>
        <div className="flex items-center gap-5">
          <a
            href="tel:988"
            className="flex items-center gap-1.5 font-bold underline-offset-2 hover:underline"
            style={{ color: "#FFFFFF" }}
            aria-label="Call or text 988 Suicide and Crisis Lifeline"
          >
            <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            Call or Text 988
          </a>
          <span aria-hidden="true" className="opacity-40">|</span>
          <a
            href="sms:741741?body=HOME"
            className="flex items-center gap-1.5 underline-offset-2 hover:underline"
            style={{ color: "#FEF3C7" }}
            aria-label="Text HOME to Crisis Text Line at 741741"
          >
            <MessageCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            Text HOME to 741741
          </a>
        </div>
      </div>
    </div>
  );
}
