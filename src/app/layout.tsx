import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LeadSimple.AI - Find and Email Online Leads with Ease Using AI",
  description:
    "LeadSimple.AI uses AI to find potential leads, generate personalized cold and follow-up emails, and lets you send or schedule them — all in one place.",
  keywords:
    "AI lead generation, cold email, follow-up email, online leads, sales automation, email scheduling, personalized emails, B2B leads, sales outreach, lead conversion, LeadSimple.AI",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
