import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

export interface BlogSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets: string[];
  steps: string[];
}

export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  category: string;
  readingTime: number;
  targetKeyword: string;
  format: string;
  author: string;
  takeaway: string;
  sections: BlogSection[];
}

const blogDirectory = join(process.cwd(), "content", "blog");

export function getBlogPosts(): BlogPost[] {
  return readdirSync(blogDirectory)
    .filter((filename) => filename.endsWith(".json"))
    .map((filename) =>
      JSON.parse(readFileSync(join(blogDirectory, filename), "utf8")) as BlogPost,
    )
    .sort((first, second) => second.publishedAt.localeCompare(first.publishedAt));
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return getBlogPosts().find((post) => post.slug === slug);
}

export function formatBlogDate(date: string): string {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}