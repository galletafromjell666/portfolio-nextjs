# portfolio-nextjs

This is the code for my portfolio, it is built with Next.js and MDX for the blog and projects sections. It uses this [next.js template](https://vercel.com/templates/next.js/nextjs-portfolio) as a base.

## Features

- MDX and Markdown support
- Optimized for SEO
- RSS Feed
- Syntax highlighting
- Tailwind v4
- Resume generated as PDF from a single YAML source

## Resume

The resume is defined once in `cv.yaml` (a [RenderCV](https://rendercv.com) input,
`harvard` theme). The homepage reads it directly, and the same file renders the
downloadable PDF:

```shell
# one-time: RenderCV is a dev-only Python tool (3.12+, Typst-based)
uv tool install "rendercv[full]"

# after editing cv.yaml: regenerate the committed PDF
pnpm resume:pdf

# or regenerate the PDF and build the site together
pnpm build:all
```

Commit the regenerated `public/giovanni_aguirre.pdf`; Vercel only serves it.

## Publishing changes

Deployment is manual with the Vercel CLI. Pushing to GitHub does **not** deploy,
and `vercel` uploads your working tree — so generate the PDF before you deploy.

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

## Deploy

Install vercel-cli

```shell
npm i -g vercel
```

vercel login

```shell
vercel login
```

deploy

```shell
vercel --prod
```
