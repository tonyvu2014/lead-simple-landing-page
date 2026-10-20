import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogNav from "./BlogNav";
import { formatBlogDate, getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Lead Generation & Customer Growth Guides",
  description:
    "Practical lead generation, customer acquisition, and email outreach advice for indie hackers and small businesses.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "LeadDaily.App Blog: Practical Growth Guides",
    description:
      "Field-tested ideas for finding customers, building an audience, and making outreach more useful.",
    url: "https://www.leaddaily.app/blog",
    siteName: "LeadDaily.App",
  },
};

export default function BlogIndex() {
  const posts = getBlogPosts();

  return (
    <>
      <BlogNav />
      <main>
        <section className="border-b border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <p className="mb-4 text-sm font-semibold text-primary">
              LEADDAILY FIELD NOTES
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              Better ways to find and keep your next customers.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
              Practical ideas on lead generation, customer growth, and thoughtful
              email outreach for independent teams and small businesses.
            </p>
          </div>
        </section>

        <section
          aria-label="Latest articles"
          className="mx-auto max-w-6xl px-6 py-12 sm:py-16"
        >
          {posts.length === 0 ? (
            <p className="text-gray-600">New articles are on the way.</p>
          ) : (
            <>
              {posts[0] && (
                <article className="pb-10">
                  <p className="mb-3 text-sm font-semibold text-primary">
                    LATEST ARTICLE · {posts[0].category}
                  </p>
                  <Link
                    href={`/blog/${posts[0].slug}`}
                    className="group block max-w-4xl"
                  >
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 transition group-hover:text-primary sm:text-4xl">
                      {posts[0].title}
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
                      {posts[0].description}
                    </p>
                  </Link>
                  <p className="mt-5 text-sm text-gray-500">
                    {formatBlogDate(posts[0].publishedAt)}
                    <span aria-hidden="true"> · </span>
                    {posts[0].readingTime} min read
                  </p>
                </article>
              )}

              <div className="border-t border-gray-200">
                {posts.slice(1).map((post) => (
                  <article
                    key={post.slug}
                    className="grid gap-3 border-b border-gray-200 py-7 sm:grid-cols-[10rem_1fr] sm:gap-8"
                  >
                    <div className="text-sm text-gray-500">
                      <p>{formatBlogDate(post.publishedAt)}</p>
                      <p className="mt-1">{post.readingTime} min read</p>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-semibold text-primary">
                        {post.category}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-2xl font-bold leading-snug text-gray-900 transition hover:text-primary"
                      >
                        {post.title}
                      </Link>
                      <p className="mt-3 max-w-3xl leading-relaxed text-gray-600">
                        {post.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </section>
      </main>
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="" width={32} height={32} />
            <span>
              <span className="block text-sm font-bold text-gray-900">
                LeadDaily<span className="text-primary">.App</span>
              </span>
              <span className="block text-xs text-gray-500">
                AI Lead Generation &amp; Cold Email for Indie Hackers, Startups,
                and Small Businesses
              </span>
            </span>
          </Link>
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} LeadDaily.App. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}