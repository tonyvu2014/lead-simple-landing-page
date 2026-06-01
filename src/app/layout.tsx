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
    default: "LeadDaily.App - Grow Your Leads Every Day Using AI",
    template: "%s | LeadDaily.App",
  },
  description:
    "LeadDaily.App uses AI to find potential leads, generate customised cold and follow-up emails, and lets you send or schedule them — all in one place.",
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
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "LeadDaily.App - Grow Your Leads Every Day Using AI",
    description:
      "LeadDaily.App uses AI to find potential leads, generate customised cold and follow-up emails, and lets you send or schedule them — all in one place.",
    siteName: "LeadDaily.App",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "LeadDaily.App - Grow your leads every day using AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeadDaily.App - Grow Your Leads Every Day Using AI",
    description:
      "LeadDaily.App uses AI to find potential leads, generate customised cold and follow-up emails, and lets you send or schedule them — all in one place.",
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
