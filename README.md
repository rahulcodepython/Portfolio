# Rahul Das — Portfolio

Personal portfolio of Rahul Das, Full Stack Developer. Fully static Next.js site hosted on Cloudflare Pages, with one Cloudflare Pages Function that emails contact form messages through Resend.

## Tech Stack

- Next.js 16 (App Router, `output: "export"`), React 19, TypeScript
- Tailwind CSS v4 + shadcn/ui, motion, next-themes (light/dark, light by default)
- react-hook-form + Zod for the contact form
- Cloudflare Pages Function + Resend for email

## Editing content

All content (profile, social links, experience, education, skills, projects) lives in `lib/data.ts`. Edit it and redeploy.

- Profile photo: `public/01.jpg`
- CV: `public/resume.pdf`, generated from `docs/resume.html` (command in the guide below)

## Development

```bash
npm install
npm run dev       # site only, http://localhost:3000 (the contact form needs the Function, see below)
npm run preview   # static build + Cloudflare Pages Function, http://localhost:8788
```

For `npm run preview`, create a `.dev.vars` file (git-ignored) with the variables from `.env.example`.

## Deploying to Cloudflare Pages

Full step-by-step guide: [docs/cloudflare-pages.md](docs/cloudflare-pages.md). Short version:


1. **Resend**
   1. Create an account at resend.com.
   2. Add and verify the domain `rahulcodepython.in` (add the DNS records Resend shows).
   3. Create an API key.
2. **Cloudflare Pages**
   1. Go to Workers & Pages > Create > Pages > Connect to Git, and pick this repository.
   2. Framework preset: **Next.js (Static HTML Export)**. Build command: `npm run build`. Build output directory: `out`.
   3. Under Settings > Variables and Secrets, add:
      - `RESEND_API_KEY` (as a secret)
      - `CONTACT_TO_EMAIL` = `rahulcodepython@gmail.com`
      - `CONTACT_FROM_EMAIL` = `Portfolio <portfolio@rahulcodepython.in>`
   4. Deploy, then add your custom domain under Custom domains.

The `functions/` directory is picked up automatically and serves `POST /api/contact`. The Resend key never reaches the browser.
