import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

const siteUrl = "https://leaddaily.app";

export const metadata: Metadata = {
  title: "LeadDaily.App - AI Lead Generation and Cold Email Automation",
  description:
    "LeadDaily.App helps you find high-intent leads, generate AI-powered cold and follow-up emails, and send or schedule outreach in one place.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "LeadDaily.App - AI Lead Generation and Cold Email Automation",
    description:
      "Find qualified leads and launch AI-powered outreach campaigns faster with LeadDaily.App.",
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
    title: "LeadDaily.App - AI Lead Generation and Cold Email Automation",
    description:
      "Find qualified leads and launch AI-powered outreach campaigns faster with LeadDaily.App.",
    images: ["/opengraph-image"],
  },
};

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "LeadDaily.App",
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: "contact@leaddaily.app",
          contactType: "customer support",
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: "LeadDaily.App",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: siteUrl,
      description:
        "AI-powered lead generation and outreach platform for discovering leads and creating cold and follow-up emails.",
      offers: [
        {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          name: "Free",
        },
      ],
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How does LeadDaily.App find leads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You describe your product or service and target audience, and our AI searches the web to find relevant people and businesses with publicly available email addresses that match your criteria.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need any technical skills to use it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. LeadDaily.App is designed to be intuitive: describe your product, review leads and generated emails, and send outreach.",
          },
        },
        {
          "@type": "Question",
          name: "Can I schedule emails to be sent later?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. On paid plans you can schedule emails for a specific date and time and set up follow-up sequences.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <HomePageClient />
    </>
  );
}
