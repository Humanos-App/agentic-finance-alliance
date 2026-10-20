# Agentic Finance Alliance

Website and brand system for **AFA**: private, curated dinners at the frontier of AI and financial services.

## Repository layout

| Path | What's there |
| --- | --- |
| `frontend/` | The website. Next.js app, deployed on Vercel. |
| `design-system/` | Brand reference: voice and wording rules, tokens, components, guideline cards, and the source designs (`AFA Website v2.html`, the sponsorship one-pager, Luma covers). Start with `design-system/README.md`. |

## Frontend

### Stack

- [Next.js 15](https://nextjs.org/) (App Router) + React 19
- TypeScript
- Plain CSS (design tokens in `frontend/app/globals.css`, one file per section in `frontend/app/styles/`)
- Deployed on [Vercel](https://vercel.com/)

### Local development

```bash
cd frontend
npm install
npm run dev      # start the dev server on http://localhost:3000
```

### Scripts

Run from `frontend/`.

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run typecheck` | Type-check |

### Where things live

- `app/page.tsx` composes the page from `components/sections/*`, top to bottom.
- `lib/dinners.ts` holds the next and previous dinner (city, date, Luma link, cover). Update it when a new dinner is announced.
- `lib/seo.ts` is the single source for metadata, the sitemap, robots, the manifest and the OG card.
- `app/actions/partner-request.ts` sends the partner form through MailerSend, the same way the humanos.tech contact form does.
- `public/assets/` holds the A mark, guest logos, Lisbon photography and the hero after movie (compressed, muted).

### Environment variables

Copy `frontend/.env.example` to `frontend/.env.local` and fill in:

- `MAILERSEND_API_KEY`, `MAILERSEND_FROM_EMAIL`, `MAILERSEND_FROM_NAME`: transactional email (partner form)
- `NEXT_PUBLIC_SITE_URL`: canonical origin, once the domain is live. On Vercel it falls back to the project's production URL.

Add the same variables in Vercel (Project → Settings → Environment Variables) for production.

### Deploying on Vercel

Import the repo in Vercel and set **Root Directory** to `frontend`. Next.js is detected automatically.

## Branches

`dev` → `stage` → `main` (production). Feature branches are cut from `dev`.
