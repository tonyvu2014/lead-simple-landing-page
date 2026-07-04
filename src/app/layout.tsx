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
  metadataBase: new URL("https://leaddaily.app"),
  title: {
    default: "LeadDaily.App - AI Lead Generation & Cold Email for Indie Hackers, Startups, and Small Businesses",
    template: "%s | LeadDaily.App",
  },
  description:
    `LeadDaily.app is an AI-powered lead generation and cold email platform built for indie developers, startup founders, and small businesses looking to acquire their first customers without spending a fortune.

     Simply describe your product or ideal customer, and LeadDaily.app automatically discovers qualified business leads and verified email addresses from public online sources. It then generates highly personalized cold emails and intelligent follow-up sequences using AI, allowing you to send immediately or schedule campaigns from a single, easy-to-use dashboard.

     Whether you're launching a SaaS product, validating a startup idea, promoting a new service, or growing a small business, LeadDaily.app helps you find potential customers, start meaningful conversations, and generate more sales—faster, smarter, and at a fraction of the cost of traditional outbound sales tools.`,
  keywords: [
    "AI lead generation",
    "cold email",
    "follow-up email",
    "sales automation",
    "email scheduling",
    "B2B leads",
    "sales outreach",
    "lead conversion",
    "LeadDaily.App",
    "AI-powered sales",
    "lead generation for startups",
    "lead generation for small businesses",
    "lead generation for indie hackers",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "LeadDaily.App - AI Lead Generation & Cold Email for Indie Hackers, Startups, and Small Businesses",
    description: `LeadDaily.app is an AI-powered lead generation and cold email platform built for indie developers, startup founders, and small businesses looking to acquire their first customers without spending a fortune on ads.

Simply describe your product or ideal customer, and LeadDaily.app automatically discovers qualified business leads and verified email addresses from public online sources. It then generates highly personalized cold emails and intelligent follow-up sequences using AI, allowing you to send immediately or schedule campaigns from a single, easy-to-use dashboard.

Whether you're launching a SaaS product, validating a startup idea, promoting a new service, or growing a small business, LeadDaily.app helps you find potential customers, start meaningful conversations, and generate more sales—faster, smarter, and at a fraction of the cost of traditional outbound sales tools.`,
    siteName: "LeadDaily.App",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "LeadDaily.App - AI Lead Generation & Cold Email for Indie Hackers, Startups, and Small Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeadDaily.App - AI Lead Generation & Cold Email for Indie Hackers, Startups, and Small Businesses",
    description:
      `LeadDaily.app is an AI-powered lead generation and cold email platform built for indie developers, startup founders, and small businesses looking to acquire their first customers without spending a fortune on ads.

      Simply describe your product or ideal customer, and LeadDaily.app automatically discovers qualified business leads and verified email addresses from public online sources. It then generates highly personalized cold emails and intelligent follow-up sequences using AI, allowing you to send immediately or schedule campaigns from a single, easy-to-use dashboard.

      Whether you're launching a SaaS product, validating a startup idea, promoting a new service, or growing a small business, LeadDaily.app helps you find potential customers, start meaningful conversations, and generate more sales—faster, smarter, and at a fraction of the cost of traditional outbound sales tools.`,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
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
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-991920301"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-991920301');
          `,
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
