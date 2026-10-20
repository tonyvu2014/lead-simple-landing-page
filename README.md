This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Blog publishing

Blog articles live as JSON files in `content/blog/` and are rendered as static pages at `/blog` and `/blog/[slug]`. The sitemap includes the index and every published article.

The GitHub Actions workflow in `.github/workflows/publish-blog.yml` runs every Wednesday and Friday at 14:00 UTC. It generates one article with the OpenAI API, validates and commits it to the repository, then the repository's Vercel integration deploys the update. To enable it, add an `OPENAI_API_KEY` Actions repository secret and make sure Actions are enabled. The workflow has scoped `contents: write` permission to commit new articles. If deployments are not triggered by repository pushes, add a `VERCEL_DEPLOY_HOOK_URL` Actions secret.

Use `workflow_dispatch` to publish an article manually. Generated articles are attributed to the LeadDaily Editorial team and are expected to be reviewed for accuracy before relying on factual claims.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
