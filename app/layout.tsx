import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Diatan Health Services, LLC | Psychiatric & Mental Health Care",
    template: "%s | Diatan Health Services",
  },
  description:
    "Compassionate psychiatric and mental health services in Lauderhill, FL. Psychiatric evaluations, medication management, individual therapy, crisis intervention, and telepsychiatry. Where mental wellness is our priority.",
  keywords: [
    "psychiatry",
    "mental health",
    "therapy",
    "psychiatric evaluation",
    "medication management",
    "telepsychiatry",
    "Lauderhill FL",
    "mental health services",
    "PMHNP",
    "counseling",
  ],
  openGraph: {
    title: "Diatan Health Services, LLC | Psychiatric & Mental Health Care",
    description:
      "Compassionate psychiatric and mental health services in Lauderhill, FL. Where mental wellness is our priority.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${sourceSans3.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "#FFFBF5", color: "#2A2420", fontFamily: "var(--font-body), system-ui, sans-serif" }}
      >
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
