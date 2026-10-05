# AGENTS.md

Personal portfolio and blog for Giovanni Aguirre (https://www.builtbygio.dev).
Next.js App Router site where blog and project pages are MDX files.

## Stack

- Next.js 16 (App Router) + React 19, TypeScript strict
- Tailwind CSS v4 (`@import "tailwindcss"` in `app/global.css`)
- MDX via `next-mdx-remote/rsc`, syntax highlighting via `sugar-high`
- pnpm, Node 20.11.0 (`.nvmrc`)
- CV/resume: `cv.yaml` (RenderCV schema) drives both the homepage and the PDF
- Deployed to Vercel; analytics/speed-insights from `@vercel/*`

## Commands

```sh
pnpm install
pnpm dev      # local dev server
pnpm build    # production build; this is the only real check (runs typecheck)
pnpm start    # serve the production build
pnpm resume:pdf  # regenerate public/giovanni_aguirre.pdf from cv.yaml (needs RenderCV)
pnpm build:all   # resume:pdf + build (local prep; Vercel runs plain `build`)
```

There is no lint or test tooling. Do not add or invent a test/lint command.
Verify changes with `pnpm build`.

`pnpm resume:pdf` shells out to RenderCV (Python 3.12+, Typst-based), which is a
**dev-only** tool — Vercel does not run it. Install it once with
`uv tool install "rendercv[full]"` (or `pipx install "rendercv[full]"`). The
generated `public/giovanni_aguirre.pdf` is committed.

## Repo map

- `app/layout.tsx` — root layout, fonts, metadata, nav/footer, `PixelTrail`
- `cv.yaml` — resume single source of truth (RenderCV schema); homepage + PDF
- `public/giovanni_aguirre.pdf` — generated CV download (committed, see `pnpm resume:pdf`)
- `app/page.tsx` — home (hero + accordion sections, rendered from `cv.yaml`)
- `app/blog/page.tsx`, `app/blog/[slug]/page.tsx` — blog index and post page
- `app/projects/page.tsx`, `app/projects/[slug]/page.tsx` — projects index and page
- `app/contact/page.tsx`, `app/not-found.tsx`
- `app/blog/posts/*.mdx`, `app/projects/posts/*.mdx` — content
- `app/components/` — `nav`, `footer`, `posts`, `post`, `mdx`, `accordion`, `pixel-trail`
- `app/utils/index.ts` — MDX discovery, frontmatter parsing, date formatting, `Post` types
- `app/sitemap.ts` — exports `baseUrl` (canonical site URL, used by sitemap, RSS, OG images, and metadata); generates sitemap
- `app/rss/route.ts`, `app/og/route.tsx`, `app/robots.ts` — feeds and metadata routes
- `app/global.css` — design tokens, `.prose` styles, utility classes

Import alias is `app/*` (see `tsconfig.json` `baseUrl`).

## Code conventions

- React Server Components by default. Add `"use client"` only when hooks or
  browser APIs are required (`nav.tsx`, `pixel-trail.tsx`).
- Use the site's semantic classes from `app/global.css` instead of ad-hoc
  Tailwind: `.label` (small uppercase eyebrow/date), `.text-muted`,
  `.text-primary`, `.hairline` (top border), `.item-list` (list spacing).
  Long-form MDX body text is styled by `.prose`.
- Visual language: editorial, hairline separators
  (`border-black/15 dark:border-white/15`), neutral palette. Dark mode is
  class-based: `@custom-variant dark` in `app/global.css` keys `dark:` off a
  `.dark` class on `<html>`; `ThemeToggle` (in the header) flips it and stores
  the choice in `localStorage`, defaulting to the OS setting via a pre-paint
  script in `app/layout.tsx`. Hover/active colors use
  `hover:text-neutral-500`.
- The accordion is a native `<details>` element — no JS, no state.
- Icons come from `react-feather`.
- Keep types strict; prefer `type` for data shapes. `Post`/`Metadata` live in
  `app/utils/index.ts`.
- Component filenames are lowercase; some pages default-export a lowercase
  `page`/`Page`. Match the surrounding file rather than "fixing" it.

## Content authoring

Add a `.mdx` file to `app/blog/posts/` or `app/projects/posts/`; the filename
becomes the slug. Frontmatter is read by a line-based parser (not a YAML lib):

```mdx
---
title: "Post title"
publishedAt: "2026-01-31"
summary: "One-line description used for SEO and the post list."
# optional
image: "/path/for/og.jpg"
stack: "React, Node.js"   # projects only
---
```

Parser rules: only the first `--- ... ---` block is read; each line is split on
the first `": "`; surrounding single/double quotes are stripped; no nested
objects or lists. `title`, `publishedAt`, and `summary` are required.

Available MDX components are mapped in `app/components/mdx.tsx`: links open
externally unless they start with `/` or `#`, and `Image`, `Video`, and `Table`
are custom. Headings get slugified `id`s and self-links automatically.

### Resume (`cv.yaml`)

`cv.yaml` is the single source of truth for the resume. It uses the RenderCV
schema: a `cv` block (name, headline, contacts, `sections`) plus `design`
(`theme: harvard`). Section keys are arbitrary and become both the PDF headings
and the homepage accordion labels. Each section must hold entries of one type:
`experience` (`company`/`position`), `education` (`institution`/`area`),
`normal` (`name`), `one_line` (`label`/`details`), `bullet` (`bullet`), or a
plain string. Text fields support Markdown; the homepage strips it
(`stripMarkdown`), the PDF renders it.

The homepage reads it via `getCV()` in `app/utils/index.ts`. After editing
`cv.yaml`, run `pnpm resume:pdf` and commit `public/giovanni_aguirre.pdf` — Vercel cannot
regenerate it.

## Publishing

Deployment is manual with the Vercel CLI. Pushing to `master` does **not**
auto-deploy, and `vercel` uploads your working tree — so regenerate the PDF
before deploying.

CV change only (`cv.yaml`):

1. Edit `cv.yaml`.
2. `pnpm build:all` — regenerates `public/giovanni_aguirre.pdf` and verifies the build.
3. Commit and push: `git add -A && git commit -m "update CV" && git push`.
4. Deploy: `vercel --prod`.

Site/HTML change (pages, components, or MDX posts):

1. Edit the files.
2. `pnpm build` — verify.
3. Commit and push.
4. Deploy: `vercel --prod`.

If both changed, follow the CV steps — `build:all` covers the site build too.

## Gotchas

- Blog/project posts are only picked up if the file is in the right `posts/`
  directory and parses correctly; both indexes and `/sitemap.xml` depend on it.
- `next.config.js` allowlists remote image hosts (`raw.githubusercontent.com`,
  `github.com`) for `next/image`; new hosts must be added there.
- `PixelTrail` is decorative and opts out on reduced-motion and coarse pointers.
  Leave those guards in place.
- Editing `cv.yaml` without running `pnpm resume:pdf` leaves the homepage and
  the PDF out of sync.
