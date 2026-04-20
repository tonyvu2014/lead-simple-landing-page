"use client";

import Image from "next/image";
import { useState } from "react";
import { Analytics } from '@vercel/analytics/next';

/* ─── Logo Component ─── */
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

/* ─── Navbar ─── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2">
          <Logo />
          <span className="text-lg font-bold text-gray-900">
            LeadDaily<span className="text-primary">.App</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-600 transition hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#hero"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            Get Early Access
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-100 bg-white px-6 pb-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-gray-600 transition hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#hero"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-primary px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            Get Early Access
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "5bd7df29-738b-4d2d-98e0-20e785993d5a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Thank you for requesting early access! We'll keep you up to date.");
    } else {
      setResult("Error in submitting the form. Please try again later.");
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-28 pb-20"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
          <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
          AI-Powered Lead Generation
        </div>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Grow Your Leads Everyday{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Using AI
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
          LeadDaily.App discovers potential leads&apos; emails online based on
          your product description, crafts customised cold &amp; follow-up
          emails, and lets you send or schedule them — all from one dashboard.
        </p>


        <div className="mb-6 mt-6">
          {/* Demo App Button */}
          <div className="flex justify-center mb-4">
            <a
              href="https://dashboard.leaddaily.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-accent px-6 py-2 text-base font-semibold text-white shadow hover:bg-accent/90 transition-colors"
            >
              🚀 Try the Demo App
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="w-full">
              <div className="mb-6 flex justify-center">
                <span className="inline-block rounded-full bg-yellow-400/90 px-4 py-1.5 text-sm font-semibold text-yellow-900 border border-yellow-300 shadow-sm animate-pulse">
                  <span className="font-bold">Sign up now to get 40% discount!</span> Promotion ends 30/4/2026
                </span>
              </div>
              <form className="flex flex-col sm:flex-row gap-3 max-w-l mx-auto w-full" onSubmit={onSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="flex-grow sm:flex-[2] px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button 
                  type="submit"
                  className="sm:flex-[1] bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-opacity shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.25)]"
                >
                  Request Early Access
                </button>
              </form>
              {result && (
                <p className="text-sm text-green-600 mt-4">{result}</p>
              )}
            </div>
          </div>
        </div>

        <p className="mt-4 text-xs text-gray-400">
          Join waitlist to get 1000+ leads per month.
        </p>
      </div>
    </section>
  );
}

/* ─── Features ─── */
const features = [
  {
    icon: (
      <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: "AI Lead Discovery",
    desc: "Describe your product or service and let our AI scour the web to find highly relevant potential leads with verified email addresses.",
  },
  {
    icon: (
      <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: "Smart Email Generation",
    desc: "AI writes compelling cold outreach and follow-up emails for your product — no templates, no guessing, just results.",
  },
  {
    icon: (
      <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Send & Schedule",
    desc: "Send emails instantly or schedule them for the perfect time. Automate follow-up sequences to maximize your response rates.",
  },
  {
    icon: (
      <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Multi-Product Support",
    desc: "Manage lead lists for multiple products or services from one account. Keep campaigns organized and targeted.",
  },
];

function Features() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need to{" "}
            <span className="text-primary">Win More Leads</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            From finding prospects to closing deals — LeadDaily.App automates
            the outreach pipeline so you can focus on growing your
            business.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {features.map((f, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 transition hover:border-primary/20 hover:bg-primary/5 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition group-hover:bg-primary/20">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ─── */
const steps = [
  {
    num: "01",
    title: "Describe Your Product",
    desc: "Tell us about your product or service — who it's for, what problem it solves, and your target audience.",
    icon: (
      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Generate Emails",
    desc: "AI crafts compelling cold outreach and follow-up email sequences for your product for maximum engagement.",
    icon: (
      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "AI Finds Your Leads",
    desc: "Our AI searches the web to find people and businesses that match your ideal customer profile, complete with verified emails.",
    icon: (
      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.773 4.773zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Send & Schedule Emails",
    desc: "Review, edit if needed, then send immediately or schedule for the optimal time. Sit back and watch the leads to convert.",
    icon: (
      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Get started in minutes. Four simple steps to go from product
            description to leads in your inbox.
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          {/* Connector line (desktop) */}
          <div className="pointer-events-none absolute top-16 right-0 left-0 hidden h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 md:block" />

          {steps.map((s, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/25">
                {s.icon}
              </div>
              <span className="mt-4 text-xs font-bold tracking-widest text-primary/60">
                STEP {s.num}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Perfect for trying things out",
    features: [
      "1 product",
      "Up to 50 leads",
      "AI email generation",
      "Lead contact export",
      "Email sending",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Start",
    price: "$4.99",
    originalPrice: "$7.99",
    period: "/month",
    desc: "Great for growing businesses",
    features: [
      "Up to 5 products",
      "Up to 1,000 leads/month",
      "AI target audience recommendation",
      "AI email generation",
      "Lead contact export",
      "Email sending and scheduling",
      "Product management dashboard",
      "Priority support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Scale",
    price: "$7.99",
    originalPrice: "$12.99",
    period: "/month",
    desc: "For teams that need more power",
    features: [
      "Up to 20 products",
      "Up to 5,000 leads/month",
      "AI target audience recommendation",
      "AI email generation",
      "Lead contact export",
      "Email sending and scheduling",
      "Follow-up sequence",
      "Product management dashboard",
      "Use your own email domain",
      "Priority support",
    ],
    cta: "Scale Up",
    popular: false,
  },
];

function Pricing() {
  // Scroll to the Hero section (Request Early Access form)
  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, Transparent{" "}
            <span className="text-primary">Pricing</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Start free and upgrade as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border p-8 transition hover:shadow-xl ${
                p.popular
                  ? "border-primary bg-primary/5 shadow-lg ring-2 ring-primary/20"
                  : "border-gray-200 bg-white"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{p.desc}</p>

              <div className="mt-6 flex items-baseline gap-2">
                {p.originalPrice && (
                  <span className="text-xl font-semibold text-gray-400 line-through mr-2">
                    {p.originalPrice}
                  </span>
                )}
                <span className="text-4xl font-extrabold text-gray-900">
                  {p.price}
                </span>
                <span className="text-sm text-gray-500">{p.period}</span>
              </div>

              <ul className="mt-8 space-y-3">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-gray-600">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-lg py-3 text-sm font-semibold transition ${
                  p.popular
                    ? "bg-primary text-white shadow-sm hover:bg-primary-dark hover:shadow-md"
                    : "border border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
                }`}
                onClick={scrollToHero}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
const faqs = [
  {
    q: "How does LeadDaily.App find leads?",
    a: "You describe your product or service and target audience, and our AI searches the web to find relevant people and businesses with publicly available email addresses that match your criteria.",
  },
  {
    q: "Do I need any technical skills to use it?",
    a: "Not at all. LeadDaily.App is designed to be intuitive — just describe your product, review the leads and generated emails, and hit send. No coding or technical knowledge required.",
  },
  {
    q: "What kinds of emails does the AI generate?",
    a: "The AI generates cold outreach emails and follow-up sequences based on your product description. You can review and edit every email before sending.",
  },
  {
    q: "Can I schedule emails to be sent later?",
    a: "Yes! On the Start and Scale plans you can schedule emails to be sent at a specific date and time, or set up automated follow-up sequences.",
  },
  {
    q: "What format does the lead contact export use?",
    a: "You can export your lead contacts as a CSV file, which is compatible with all major spreadsheet tools and CRM systems.",
  },
  {
    q: "Can I cancel or change my plan at any time?",
    a: "Absolutely. You can upgrade, downgrade, or cancel your plan at any time from your account settings. No long-term contracts or hidden fees.",
  },
  {
    q: "What type of target audience is LeadDaily.App best for?",
    a: "LeadDaily.App is best for finding target customers who have an online presence and display their contact emails publicly. For example: bloggers and content creators with contact pages, small business owners with emails on their websites, freelancers and consultants listed on directories, e-commerce store owners, SaaS founders active on social platforms, and professionals listed on industry-specific marketplaces.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 bg-white transition hover:border-primary/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm font-medium text-gray-900">{faq.q}</span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm leading-relaxed text-gray-600">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        {/* Left: Logo + motto */}
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

        {/* Right: Copyright */}
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} LeadDaily.App. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Footer />
      <Analytics />
    </>
  );
}
