import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy – LeadDaily.App",
  description:
    "Read the LeadDaily.App Privacy Policy to understand how we collect, use, and protect your personal data.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    type: "article",
    title: "Privacy Policy – LeadDaily.App",
    description:
      "Read the LeadDaily.App Privacy Policy to understand how we collect, use, and protect your personal data.",
    url: "https://leaddaily.app/privacy-policy",
    siteName: "LeadDaily.App",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "LeadDaily.App privacy policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy – LeadDaily.App",
    description:
      "Read the LeadDaily.App Privacy Policy to understand how we collect, use, and protect your personal data.",
    images: ["/opengraph-image"],
  },
};

function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <Image
      src="/logo.svg"
      alt="LeadDaily.App logo"
      width={32}
      height={32}
      className={className}
    />
  );
}

export default function PrivacyPolicy() {
  const lastUpdated = "17 May 2026";

  return (
    <>
      {/* ── Navbar ── */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="text-lg font-bold text-gray-900">
              LeadDaily<span className="text-primary">.App</span>
            </span>
          </Link>
          <Link
            href="/#hero"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            Get Early Access
          </Link>
        </div>
      </nav>

      {/* ── Content ── */}
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-32 text-gray-700">
        <h1 className="mb-2 text-4xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mb-10 text-sm text-gray-400">Last updated: {lastUpdated}</p>

        <p className="mb-8 text-base leading-relaxed">
          Welcome to <strong>LeadDaily.App</strong> (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;, or &ldquo;our&rdquo;). We are committed to protecting
          your personal information and your right to privacy. This Privacy Policy
          explains what information we collect, how we use it, with whom we share
          it, and what rights you have in relation to it. Please read this policy
          carefully. If you disagree with any part, please discontinue using our
          services.
        </p>

        {/* 1 */}
        <Section title="1. Who We Are">
          <p>
            LeadDaily.App is an AI-powered lead generation and email outreach
            platform. Our registered business address and data controller contact
            can be reached at{" "}
            <a
              href="mailto:contact@leaddaily.app"
              className="text-primary underline hover:text-primary-dark"
            >
              contact@leaddaily.app
            </a>
            .
          </p>
        </Section>

        {/* 2 */}
        <Section title="2. Information We Collect">
          <p className="mb-3">
            We collect information in the following ways:
          </p>
          <h3 className="mb-1 font-semibold text-gray-800">
            2.1 Information You Provide Directly
          </h3>
          <ul className="mb-4 list-disc pl-6 space-y-1">
            <li>
              <strong>Account registration:</strong> name, email address, and
              password when you create an account or join the early-access
              waitlist.
            </li>
            <li>
              <strong>Profile &amp; billing:</strong> company name, job title,
              billing address, and payment details (processed by our payment
              provider; we do not store raw card data).
            </li>
            <li>
              <strong>Support communications:</strong> any information you share
              when you contact us for help.
            </li>
            <li>
              <strong>Survey &amp; feedback responses:</strong> optional
              information you choose to provide in surveys or product research.
            </li>
          </ul>

          <h3 className="mb-1 font-semibold text-gray-800">
            2.2 Information We Collect Automatically
          </h3>
          <ul className="mb-4 list-disc pl-6 space-y-1">
            <li>
              <strong>Usage data:</strong> pages visited, features used, search
              queries, clicks, and session duration.
            </li>
            <li>
              <strong>Device &amp; browser data:</strong> IP address, browser
              type, operating system, device identifiers, and referring URLs.
            </li>
            <li>
              <strong>Cookies &amp; similar technologies:</strong> see
              Section 8 for details.
            </li>
          </ul>

          <h3 className="mb-1 font-semibold text-gray-800">
            2.3 Information from Third Parties
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Data from social login providers (e.g., Google OAuth) if you
              choose to sign in that way.
            </li>
            <li>
              Publicly available business information used to generate lead
              profiles (company name, industry, public contact details).
            </li>
            <li>
              Enrichment data from our integrated data partners to improve lead
              quality.
            </li>
          </ul>
        </Section>

        {/* 3 */}
        <Section title="3. How We Use Your Information">
          <p className="mb-3">We use collected information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Create and manage your account and provide our services.</li>
            <li>
              Personalise the AI-generated leads and email copy to match your
              target audience and tone of voice.
            </li>
            <li>
              Process payments and send related billing communications.
            </li>
            <li>
              Send product updates, feature announcements, and marketing emails
              (you can unsubscribe at any time).
            </li>
            <li>
              Respond to your support requests and improve our customer service.
            </li>
            <li>
              Monitor, analyse, and improve platform performance, security, and
              reliability.
            </li>
            <li>
              Detect, prevent, and address fraud, abuse, and other harmful
              activity.
            </li>
            <li>
              Comply with legal obligations and enforce our Terms of Service.
            </li>
            <li>
              Conduct research and analytics to understand how our platform is
              used and where it can be improved.
            </li>
          </ul>
        </Section>

        {/* 4 */}
        <Section title="4. Legal Bases for Processing (GDPR)">
          <p className="mb-3">
            If you are located in the European Economic Area (EEA) or the United
            Kingdom, we process your personal data under the following legal
            bases:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Contract performance:</strong> to deliver the services you
              have signed up for.
            </li>
            <li>
              <strong>Legitimate interests:</strong> to improve our platform,
              prevent fraud, and send relevant product communications.
            </li>
            <li>
              <strong>Consent:</strong> for marketing emails and non-essential
              cookies where required by law.
            </li>
            <li>
              <strong>Legal obligation:</strong> to comply with applicable laws
              and regulations.
            </li>
          </ul>
        </Section>

        {/* 5 */}
        <Section title="5. How We Share Your Information">
          <p className="mb-3">
            We do <strong>not</strong> sell your personal data. We may share it
            with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Service providers:</strong> cloud infrastructure, payment
              processors, email delivery services, and analytics tools that
              process data on our behalf under strict data processing agreements.
            </li>
            <li>
              <strong>AI &amp; data partners:</strong> third-party AI models and
              lead-enrichment providers used to power our features, bound by
              confidentiality obligations.
            </li>
            <li>
              <strong>Business transfers:</strong> if we merge, are acquired, or
              sell assets, your data may be transferred as part of that
              transaction. You will be notified in advance.
            </li>
            <li>
              <strong>Legal requirements:</strong> when required by law,
              subpoena, or other legal process, or when we believe disclosure is
              necessary to protect rights, property, or safety.
            </li>
          </ul>
        </Section>

        {/* 6 */}
        <Section title="6. Data Retention">
          <p>
            We retain your personal data for as long as your account is active or
            as needed to provide our services. If you close your account, we will
            delete or anonymise your personal data within <strong>90 days</strong>
            , unless we are required to retain it for legal, tax, or audit
            purposes. Aggregated, anonymised analytics data may be retained
            indefinitely.
          </p>
        </Section>

        {/* 7 */}
        <Section title="7. International Data Transfers">
          <p>
            LeadDaily.App operates globally. Your data may be transferred to and
            processed in countries outside your own, including the United States
            and Australia. Where data is transferred from the EEA or UK, we use
            appropriate safeguards such as Standard Contractual Clauses (SCCs)
            approved by the European Commission to ensure your data is protected
            to the same standard as within the EEA.
          </p>
        </Section>

        {/* 8 */}
        <Section title="8. Cookies and Tracking Technologies">
          <p className="mb-3">
            We use cookies and similar tracking technologies to operate and
            improve our platform. Our cookies fall into four categories:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Strictly necessary:</strong> essential for the website to
              function (e.g., authentication tokens, CSRF protection).
            </li>
            <li>
              <strong>Functional:</strong> remember your preferences and
              personalise your experience.
            </li>
            <li>
              <strong>Analytics:</strong> help us understand how visitors
              interact with our site (e.g., Vercel Analytics, Google Analytics).
            </li>
            <li>
              <strong>Marketing:</strong> used to measure the effectiveness of
              advertising campaigns (e.g., Google Ads conversion tracking).
            </li>
          </ul>
          <p className="mt-3">
            You can control cookies through your browser settings. Note that
            disabling certain cookies may affect the functionality of our
            platform.
          </p>
        </Section>

        {/* 9 */}
        <Section title="9. Your Rights">
          <p className="mb-3">
            Depending on your location, you may have the following rights
            regarding your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Access:</strong> request a copy of the personal data we
              hold about you.
            </li>
            <li>
              <strong>Correction:</strong> ask us to correct inaccurate or
              incomplete data.
            </li>
            <li>
              <strong>Deletion:</strong> request the erasure of your personal
              data (&ldquo;right to be forgotten&rdquo;).
            </li>
            <li>
              <strong>Restriction:</strong> ask us to limit how we process your
              data in certain circumstances.
            </li>
            <li>
              <strong>Portability:</strong> receive your data in a
              machine-readable format and transfer it to another service.
            </li>
            <li>
              <strong>Objection:</strong> object to our processing of your data
              for direct marketing or where we rely on legitimate interests.
            </li>
            <li>
              <strong>Withdraw consent:</strong> where processing is based on
              consent, you can withdraw it at any time without affecting the
              lawfulness of prior processing.
            </li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please email{" "}
            <a
              href="mailto:contact@leaddaily.app"
              className="text-primary underline hover:text-primary-dark"
            >
              contact@leaddaily.app
            </a>
            . We will respond within 30 days (or sooner where required by law).
            If you are in the EEA or UK, you also have the right to lodge a
            complaint with your local data protection authority.
          </p>
        </Section>

        {/* 10 */}
        <Section title="10. Data Security">
          <p>
            We implement industry-standard technical and organisational measures
            to protect your data, including TLS encryption in transit, AES-256
            encryption at rest, role-based access controls, regular security
            audits, and penetration testing. Despite these measures, no system is
            completely secure. We will notify you and relevant authorities of any
            data breach as required by law.
          </p>
        </Section>

        {/* 11 */}
        <Section title="11. Children's Privacy">
          <p>
            Our services are not directed to children under the age of 16 (or the
            applicable age of digital consent in your jurisdiction). We do not
            knowingly collect personal data from children. If you believe a child
            has provided us with personal data without parental consent, please
            contact us and we will delete it promptly.
          </p>
        </Section>

        {/* 12 */}
        <Section title="12. Third-Party Links">
          <p>
            Our platform may contain links to third-party websites. We are not
            responsible for their privacy practices and encourage you to review
            their privacy policies before providing any personal data.
          </p>
        </Section>

        {/* 13 */}
        <Section title="13. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. When we make
            material changes, we will notify you by email or by displaying a
            prominent notice on our platform at least 14 days before the changes
            take effect. The &ldquo;Last updated&rdquo; date at the top of this
            page reflects the most recent revision.
          </p>
        </Section>

        {/* 14 */}
        <Section title="14. Contact Us">
          <p>
            If you have any questions, concerns, or requests relating to this
            Privacy Policy or our data practices, please contact:
          </p>
          <address className="mt-3 not-italic leading-relaxed">
            <strong>LeadDaily.App – Privacy Team</strong>
            <br />
            Email:{" "}
            <a
              href="mailto:contact@leaddaily.app"
              className="text-primary underline hover:text-primary-dark"
            >
              contact@leaddaily.app
            </a>
          </address>
        </Section>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <Link
            href="/"
            className="text-sm font-medium text-primary underline hover:text-primary-dark"
          >
            ← Back to LeadDaily.App
          </Link>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <span className="text-sm font-bold text-gray-900">
                LeadDaily<span className="text-primary">.App</span>
              </span>
              <p className="text-xs text-gray-500">
                Grow Your Leads Everyday Using AI.
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} LeadDaily.App. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="mb-3 text-xl font-bold text-gray-900">{title}</h2>
      <div className="text-base leading-relaxed">{children}</div>
    </section>
  );
}
