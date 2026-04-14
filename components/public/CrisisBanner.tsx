"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function CrisisBanner() {
  return (
    <div
      className="crisis-banner w-full py-2 px-4 text-center text-sm font-medium"
      role="alert"
      aria-label="Crisis support information"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <span className="font-semibold">
          If you are in crisis or having thoughts of suicide:
        </span>
        <div className="flex items-center gap-4">
          <a
            href="tel:988"
            className="flex items-center gap-1 underline hover:no-underline font-bold"
            aria-label="Call 988 Suicide and Crisis Lifeline"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            Call or Text 988
          </a>
          <span aria-hidden="true">|</span>
          <a
            href="sms:741741?body=HOME"
            className="flex items-center gap-1 underline hover:no-underline"
            aria-label="Text HOME to Crisis Text Line at 741741"
          >
            <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
            Text HOME to 741741
          </a>
        </div>
      </div>
    </div>
  );
}
