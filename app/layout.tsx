import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "#FAFAFA", color: "#2C3E50" }}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
