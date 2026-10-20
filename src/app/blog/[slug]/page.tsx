import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogNav from "../BlogNav";
import {
  formatBlogDate,
  getBlogPost,
  getBlogPosts,
} from "@/lib/blog";

const siteUrl = "https://www.leaddaily.app";

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: [post.targetKeyword, post.category],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${siteUrl}/blog/${post.slug}`,
      publishedTime: new Date(`${post.publishedAt}T00:00:00Z`).toISOString(),
      authors: [post.author],
      siteName: "LeadDaily.App",
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: new Date(`${post.publishedAt}T00:00:00Z`).toISOString(),
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "LeadDaily.App",
      url: siteUrl,
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    keywords: post.targetKeyword,
  };
  const relatedPosts = getBlogPosts()
    .filter((item) => item.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <BlogNav />
      <main className="mx-auto max-w-6xl px-6 pb-20 pt-10 sm:pt-14">
        <Link
          href="/blog"
          className="text-sm font-medium text-gray-600 transition hover:text-primary"
        >
          &larr; All articles
        </Link>
        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(14rem,1fr)]">
          <article>
            <header className="border-b border-gray-200 pb-8">
              <p className="mb-4 text-sm font-semibold text-primary">
                {post.category} <span aria-hidden="true">·</span> {post.format}
              </p>
              <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
                {post.title}
              </h1>
              <p className="mt-5 text-xl leading-relaxed text-gray-600">
                {post.description}
              </p>
              <p className="mt-6 text-sm text-gray-500">
                {post.author} <span aria-hidden="true">·</span>{" "}
                <time dateTime={post.publishedAt}>
                  {formatBlogDate(post.publishedAt)}
                </time>{" "}
                <span aria-hidden="true">·</span> {post.readingTime} min read
              </p>
            </header>

            <div className="prose-content">
              {post.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-8">
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={`${section.id}-p-${index}`}>{paragraph}</p>
                  ))}
                  {section.bullets.length > 0 && (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                  {section.steps.length > 0 && (
                    <ol>
                      {section.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  )}
                </section>
              ))}
            </div>

            <aside className="mt-10 border-l-4 border-primary pl-5">
              <p className="text-sm font-semibold text-gray-900">The takeaway</p>
              <p className="mt-2 leading-relaxed text-gray-700">{post.takeaway}</p>
            </aside>

            {relatedPosts.length > 0 && (
              <nav aria-label="Related articles" className="mt-14 border-t border-gray-200 pt-8">
                <h2 className="text-xl font-bold text-gray-900">Keep reading</h2>
                <ul className="mt-4 space-y-4">
                  {relatedPosts.map((related) => (
                    <li key={related.slug}>
                      <Link
                        href={`/blog/${related.slug}`}
                        className="font-semibold text-gray-800 transition hover:text-primary"
                      >
                        {related.title} <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-8 border-l border-gray-200 pl-6">
              <p className="mb-4 text-sm font-semibold text-gray-900">
                In this article
              </p>
              <ol className="space-y-3">
                {post.sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-sm leading-relaxed text-gray-600 transition hover:text-primary"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}