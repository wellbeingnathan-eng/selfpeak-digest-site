# VitalBrief

Health & habits, without the noise. A static health blog built with Astro, Tailwind CSS, and Markdown content collections.

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── images/posts/<slug>/     # Post images
├── src/
│   ├── components/              # Reusable Astro components
│   ├── content/posts/           # Markdown blog posts (content collection)
│   ├── layouts/                 # Page layouts
│   ├── lib/                     # Utilities
│   ├── pages/                   # File-based routing
│   └── content.config.ts        # Content collection schema
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Adding a New Post

Create a new `.md` file in `src/content/posts/`:

```markdown
---
title: "Your Post Title"
description: "A short description for SEO and post cards."
date: 2026-03-01
tags: ["nutrition", "habits"]
cover: "/images/posts/your-slug/cover.jpg"
draft: false
---

Your Markdown content here...
```

The post automatically appears on `/blog` and the home page.

Place cover images in `public/images/posts/<slug>/`.

## Subscribe Form

The subscribe form posts to a placeholder endpoint defined in `src/lib/utils.ts` (`SUBSCRIBE_ENDPOINT`). To connect it to a real service (e.g., Brevo):

1. Update `SUBSCRIBE_ENDPOINT` in `src/lib/utils.ts`
2. Or replace the form action in `src/components/SubscribeForm.astro`

## Commands

| Command         | Action                                 |
| :-------------- | :------------------------------------- |
| `npm install`   | Install dependencies                   |
| `npm run dev`   | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/`     |
| `npm run preview` | Preview build locally                |

## Deploy to Cloudflare Pages

### From GitHub

1. Push this repository to GitHub.
2. Go to [Cloudflare Pages](https://dash.cloudflare.com/?to=/:account/pages) and click **Create a project**.
3. Select **Connect to Git** and choose your repository.
4. Configure the build settings:

| Setting              | Value          |
| :------------------- | :------------- |
| **Framework preset** | Astro          |
| **Build command**    | `npm run build` |
| **Build output directory** | `dist`   |
| **Node.js version**  | `18` (or newer)|

5. Under **Environment variables**, set the Node version if needed:

| Variable         | Value |
| :--------------- | :---- |
| `NODE_VERSION`   | `18`  |

6. Click **Save and Deploy**.

### Manual Deploy

```bash
npm run build
npx wrangler pages deploy dist
```

## Tech Stack

- **Astro** -- Static site generator
- **Tailwind CSS** -- Utility-first styling
- **Content Collections** -- Type-safe Markdown content
- **@astrojs/sitemap** -- Auto-generated sitemap
- **@astrojs/rss** -- RSS feed generation
