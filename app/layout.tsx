import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
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
      className={`${lora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter" style={{ backgroundColor: "#FFF8F0", color: "#2C3E50" }}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
