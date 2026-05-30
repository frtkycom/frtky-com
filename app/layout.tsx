import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frtky.com"),

  title: {
    default: "Fırat Kaya | Quality Operations Specialist",
    template: "%s | Fırat Kaya",
  },

  description:
    "Quality Operations Specialist focused on Customer Experience, SLA Analytics, Process Improvement, Support Quality and AI-Assisted Quality Evaluation.",

  keywords: [
    "Fırat Kaya",
    "Quality Operations",
    "Customer Experience",
    "Support Operations",
    "Support Quality",
    "Quality Assurance",
    "SLA Analytics",
    "Process Improvement",
    "AI Quality Evaluation",
    "Customer Support",
    "Technical Support",
    "Dashboarding",
    "Power BI",
  ],

  authors: [{ name: "Fırat Kaya" }],
  creator: "Fırat Kaya",
  publisher: "Fırat Kaya",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Fırat Kaya | Quality Operations Specialist",
    description:
      "Quality Operations, Customer Experience, SLA Analytics, Process Improvement and AI-Assisted Quality Evaluation.",
    url: "https://frtky.com",
    siteName: "Fırat Kaya",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fırat Kaya - Quality Operations Specialist",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fırat Kaya | Quality Operations Specialist",
    description:
      "Quality Operations, Customer Experience, SLA Analytics and Process Improvement.",
    images: ["/og-image.png"],
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
      <body className="min-h-full flex flex-col bg-[#050816] text-white">
        <Navbar />

        <main className="flex-1 pt-20">{children}</main>

        <Footer />

        <Chatbot />
      </body>
    </html>
  );
}