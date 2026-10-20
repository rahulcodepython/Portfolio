# CLAUDE.md

Personal portfolio site for Rahul Das (rahulcodepython). Fully static Next.js export hosted on Cloudflare Pages. No database, no admin dashboard.

## Commands

- `npm run dev` — dev server (Turbopack) on http://localhost:3000. Does not run the Pages Function, so the contact form fails here.
- `npm run build` — static export into `out/`
- `npm run preview` — build + `wrangler pages dev out` on http://localhost:8788 (runs `functions/`; needs `.dev.vars`)
- `npx tsc --noEmit` — type check (build also type-checks; errors fail the build)
- No test suite exists.

## Stack

Next.js 16 (App Router, `output: "export"`, `images.unoptimized`) · React 19 · TypeScript · Tailwind CSS v4 + shadcn/ui (`components/ui`) · `motion` (import from `motion/react`, not `framer-motion`) · next-themes · react-hook-form + Zod 4 · sonner toasts · Cloudflare Pages Functions · Resend.

Fonts come from `next/font` in `app/layout.tsx` (Montserrat as `--font-montserrat` for sans, JetBrains Mono as `--font-jetbrains` for mono), wired into `--font-sans` / `--font-mono` in `app/globals.css`.

## Layout

- `lib/data.ts` — **all site content**: profile, social links (`socials`, with icons), nav items, experience, education, skills (by category), projects. Content changes go here, not in components.
- `app/(home)/page.tsx` — composes the sections; one file per section in `app/(home)/` (hero, about, experience, education, skills, services, projects, contact, footer, scroll-to-top). All are client components.
- `components/site/` — `navbar.tsx` (fixed header, active-section highlight, mobile Sheet menu), `theme-toggle.tsx`, `section-heading.tsx` (the `<Title />` heading used by every section).
- `components/ui/` — only the shadcn/Magic UI components in use. Add more with `npx shadcn@latest add <name>`.
- Theme: `app/layout.tsx` uses next-themes `ThemeProvider` directly with `defaultTheme="light"`, `enableSystem={false}`.
- `lib/validations.ts` — `contactSchema`, shared by the form and the Function.
- `functions/api/contact.ts` — Cloudflare Pages Function for `POST /api/contact`. Checks a honeypot field (`website`), validates with `contactSchema`, sends mail via the Resend REST API. Imports with relative paths only (no `@/` alias in Functions).
- `wrangler.toml` — `pages_build_output_dir = "out"`.
- `docs/cloudflare-pages.md` — deployment guide (GitHub → Cloudflare Pages, Resend, custom domain).
- `docs/resume.html` — source of `public/resume.pdf`; regenerate with `google-chrome-stable --headless=new --no-pdf-header-footer --print-to-pdf=public/resume.pdf "file://$PWD/docs/resume.html"` and keep it to one page. Update it when experience/projects/education in `lib/data.ts` change.
- `app/globals.css` — theme tokens on `:root` (light) and `.dark`.

## Environment

Function env vars (Cloudflare Pages settings, or `.dev.vars` locally): `RESEND_API_KEY` (secret), `CONTACT_TO_EMAIL` (default `rahulcodepython@gmail.com`), `CONTACT_FROM_EMAIL` (default `Portfolio <portfolio@rahulcodepython.in>`; domain must be verified in Resend).

## Conventions

- Sections alternate `bg-muted/30` backgrounds: experience, skills, projects are tinted.
- Section components use `SectionHeading` and motion `whileInView` with `viewport={{ once: true }}`.
- The page wrapper has `overflow-x-clip` because the slide-in animations start at x: ±50 and would otherwise cause horizontal scroll on mobile.
- No server-side code in `app/`: static export forbids route handlers, server actions, cookies, etc. Anything dynamic goes in `functions/`.
- Code style: 4-space indent in most files (some section files use tabs; match the file), double quotes, light comments.

## Known gotchas

- Project screenshots live in `public/projects/`. A project with `image: null` (CLI tools) renders `TerminalPreview` instead of a site screenshot.
- `components/ui/hyper-text.tsx` and `components/ui/typing-animation.tsx` come from the Magic UI registry (`npx shadcn@latest add @magicui/<name>`); the typing cursor keyframes were added to `app/globals.css` by that command. HyperText always renders uppercase mono letters.
- `profile.cvUrl` is `/resume.pdf`; the file must exist in `public/`.
- The About "Lifespan" fact is a live counter (`Lifespan` in `about.tsx`) from `profile.birthDate`, rendered only after mount so the static HTML never holds a stale value.
- `public/sitemap.xml` and `public/robots.txt` are hand-written for https://rahulcodepython.in.
- Headless Chrome screenshots with `--screenshot` show sections blank (motion animations don't run under virtual time); check visuals via CDP or a real browser.
