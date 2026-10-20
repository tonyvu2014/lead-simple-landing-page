import { randomInt } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const blogDirectory = join(process.cwd(), "content", "blog");
const topics = [
  {
    category: "Lead generation",
    audience: "indie founders validating a narrow B2B market",
    keyword: "B2B lead generation for startups",
    angle: "finding credible buying signals before building a prospect list",
  },
  {
    category: "Customer acquisition",
    audience: "bootstrapped SaaS founders with limited marketing time",
    keyword: "customer acquisition strategy for SaaS",
    angle: "choosing one acquisition channel to test with a small weekly budget",
  },
  {
    category: "Email outreach",
    audience: "small service businesses doing founder-led sales",
    keyword: "follow-up email examples for small business",
    angle: "following up with context and a useful next step instead of pressure",
  },
  {
    category: "Customer retention",
    audience: "solo operators who rely on repeat business",
    keyword: "how to increase repeat customers",
    angle: "building a simple post-purchase check-in that improves retention",
  },
  {
    category: "Market research",
    audience: "indie hackers preparing to launch a new product",
    keyword: "customer discovery questions for startups",
    angle: "learning from customer interviews without leading the witness",
  },
  {
    category: "Small business growth",
    audience: "local and online small businesses with inconsistent inquiries",
    keyword: "small business growth strategies",
    angle: "turning referrals and inbound inquiries into a trackable pipeline",
  },
  {
    category: "Sales operations",
    audience: "tiny teams managing prospects in spreadsheets",
    keyword: "simple sales pipeline for small business",
    angle: "setting up a lightweight pipeline that prevents promising leads from going cold",
  },
  {
    category: "Email outreach",
    audience: "technical founders writing their own first sales emails",
    keyword: "cold email subject lines for B2B",
    angle: "writing clear subject lines and opening sentences without clickbait",
  },
  {
    category: "Positioning",
    audience: "bootstrapped founders whose product pitch feels too broad",
    keyword: "how to define a target audience for a startup",
    angle: "narrowing a target audience using customer language and observed fit",
  },
  {
    category: "Customer acquisition",
    audience: "small business owners comparing paid and organic channels",
    keyword: "low cost customer acquisition ideas",
    angle: "comparing acquisition channels by effort, learning value, and customer fit",
  },
  {
    category: "Lead qualification",
    audience: "independent consultants receiving a mix of good- and poor-fit leads",
    keyword: "how to qualify sales leads",
    angle: "asking a few respectful questions to identify mutual fit early",
  },
  {
    category: "Email outreach",
    audience: "founders building a small outbound campaign",
    keyword: "personalized B2B outreach at scale",
    angle: "deciding which parts of an outreach message deserve genuine personalization",
  },
  {
    category: "Customer experience",
    audience: "small teams trying to earn more word-of-mouth referrals",
    keyword: "how to get customer referrals for a small business",
    angle: "creating a referral moment around a real customer outcome",
  },
  {
    category: "Startup marketing",
    audience: "solo founders with a useful product and a very small audience",
    keyword: "marketing a startup with no audience",
    angle: "earning initial attention through useful expertise and direct customer conversations",
  },
];

const formats = [
  "A practical field guide",
  "A concise teardown",
  "A step-by-step playbook",
  "A decision framework",
  "A checklist with examples",
  "A founder's notebook",
  "A myth-versus-reality guide",
  "A short case-style scenario",
];

const lengths = [
  { label: "short", target: "500-700 words", minimum: 350, maximum: 1000 },
  { label: "medium", target: "800-1,100 words", minimum: 560, maximum: 1500 },
  { label: "long", target: "1,200-1,600 words", minimum: 800, maximum: 2200 },
];

function choose(values) {
  return values[randomInt(values.length)];
}

function wordCount(value) {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72)
    .replace(/-$/g, "");
}

function readExistingPosts() {
  return readdirSync(blogDirectory)
    .filter((filename) => filename.endsWith(".json"))
    .map((filename) => JSON.parse(readFileSync(join(blogDirectory, filename), "utf8")));
}

function validatePost(post, existingPosts, selectedLength) {
  if (!post || typeof post !== "object" || Array.isArray(post)) {
    throw new Error("The model response must be a JSON object.");
  }

  const requiredText = ["title", "description", "takeaway"];
  for (const key of requiredText) {
    if (typeof post[key] !== "string" || post[key].trim().length < 20) {
      throw new Error(`The generated post has an invalid ${key}.`);
    }
  }

  if (!Array.isArray(post.sections) || post.sections.length < 4 || post.sections.length > 9) {
    throw new Error("The generated post must have 4 to 9 sections.");
  }

  const normalizedSections = post.sections.map((section) => {
    if (!section || typeof section.heading !== "string" || section.heading.trim().length < 4) {
      throw new Error("Every section must have a descriptive heading.");
    }

    const paragraphs = Array.isArray(section.paragraphs) ? section.paragraphs : [];
    const bullets = Array.isArray(section.bullets) ? section.bullets : [];
    const steps = Array.isArray(section.steps) ? section.steps : [];
    if (paragraphs.length === 0 || paragraphs.some((item) => typeof item !== "string" || item.length < 30)) {
      throw new Error(`Section "${section.heading}" must contain substantive paragraphs.`);
    }
    if ([...bullets, ...steps].some((item) => typeof item !== "string" || item.length < 8)) {
      throw new Error(`Section "${section.heading}" contains an invalid list item.`);
    }

    return {
      id: slugify(section.heading),
      heading: section.heading.trim(),
      paragraphs,
      bullets,
      steps,
    };
  });

  const text = [
    post.title,
    post.description,
    post.takeaway,
    ...normalizedSections.flatMap((section) => [
      section.heading,
      ...section.paragraphs,
      ...section.bullets,
      ...section.steps,
    ]),
  ].join(" ");
  const count = wordCount(text);
  if (count < selectedLength.minimum || count > selectedLength.maximum) {
    throw new Error(
      `Generated ${count} words; expected ${selectedLength.minimum}-${selectedLength.maximum} for this length.`,
    );
  }

  const slug = slugify(post.title);
  if (!slug || existingPosts.some((item) => item.slug === slug)) {
    throw new Error(`The generated article slug is empty or already exists: ${slug}`);
  }

  return {
    title: post.title.trim(),
    slug,
    description: post.description.trim(),
    publishedAt: new Date().toISOString().slice(0, 10),
    category: post.category,
    readingTime: Math.max(1, Math.ceil(count / 220)),
    targetKeyword: post.targetKeyword,
    format: post.format,
    author: "LeadDaily Editorial",
    takeaway: post.takeaway.trim(),
    sections: normalizedSections,
  };
}

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is required to generate a blog article.");
  }

  if (!existsSync(blogDirectory)) mkdirSync(blogDirectory, { recursive: true });
  const existingPosts = readExistingPosts();
  const topic = choose(topics);
  const format = choose(formats);
  const length = choose(lengths);
  const recentArticles = existingPosts.slice(0, 30).map((post) => ({
    title: post.title,
    keyword: post.targetKeyword,
  }));

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      temperature: 0.85,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: [
            "You are an experienced editorial writer for indie hackers and small businesses.",
            "Write original, professionally useful articles in a natural and specific voice, not generic SEO filler.",
            "Do not claim to be a human. Do not invent studies, statistics, customer stories, quotations, product capabilities, or sources.",
            "Prefer concrete examples clearly labeled as hypothetical when useful. Avoid exaggerated promises, keyword stuffing, and repetitive conclusions.",
            "The target keyword should fit naturally; answer the reader's practical question before optimizing for search.",
            "Return only a valid JSON object with title, description, category, targetKeyword, format, takeaway, and sections.",
            "Each section must contain heading, paragraphs (an array of substantive paragraphs), bullets (an array, possibly empty), and steps (an array, possibly empty).",
            "Use 4 to 8 well-organized sections. Do not include markdown, HTML, citations, an author, a slug, a date, or reading time.",
          ].join(" "),
        },
        {
          role: "user",
          content: JSON.stringify({
            topic,
            format,
            length: length.target,
            audience: topic.audience,
            targetKeyword: topic.keyword,
            avoidRepeatingTheseRecentArticles: recentArticles,
          }),
        },
      ],
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`OpenAI request failed (${response.status}): ${detail.slice(0, 500)}`);
  }

  const result = await response.json();
  const content = result.choices?.[0]?.message?.content;
  if (typeof content !== "string") throw new Error("OpenAI returned no article content.");

  const generated = JSON.parse(content);
  const post = validatePost(generated, existingPosts, length);
  if (post.category !== topic.category || post.targetKeyword !== topic.keyword || post.format !== format) {
    throw new Error("The generated article did not preserve the selected category, keyword, or format.");
  }

  const file = join(blogDirectory, `${post.slug}.json`);
  writeFileSync(file, `${JSON.stringify(post, null, 2)}\n`, { flag: "wx" });
  console.error(`Generated ${post.slug} (${post.readingTime} min read).`);
  console.log(`file=content/blog/${post.slug}.json`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});