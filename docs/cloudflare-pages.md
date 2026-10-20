# Hosting on Cloudflare Pages (via GitHub)

This guide takes the portfolio from a local folder to a live site on `https://rahulcodepython.in`, with automatic deploys on every push to GitHub.

## How it works

- `npm run build` exports the site as plain static files into `out/` (`output: "export"` in `next.config.mjs`).
- Cloudflare Pages serves `out/` from its global CDN.
- The contact form posts to `/api/contact`. That route is a **Cloudflare Pages Function** in `functions/api/contact.ts`. It validates the message and sends it through **Resend** to your Gmail.
- The Resend API key lives only in Cloudflare's encrypted settings. It never ships to the browser and is never committed to Git.

```
Browser ──► Cloudflare Pages (static files from out/)
   │
   └─ POST /api/contact ──► Pages Function (functions/api/contact.ts) ──► Resend API ──► rahulcodepython@gmail.com
```

## What you need

- A GitHub account with this project in a repository (public or private).
- A Cloudflare account (the free plan is enough).
- A Resend account (the free plan gives 3,000 emails/month).
- The domain `rahulcodepython.in`, ideally with its DNS managed by Cloudflare. Every step below is simpler that way.

---

## Step 1: Push the project to GitHub

1. Make sure no secrets get committed. `.env`, `.env*.local` and `.dev.vars` are already in `.gitignore`. Check:

   ```bash
   git status --short | grep -E "\.env$|\.dev\.vars" || echo "OK: no secret files staged"
   ```

2. Check the build works locally before pushing:

   ```bash
   npm install
   npm run build
   ```

   The build should finish with `○ (Static) prerendered as static content`.

3. Commit and push:

   ```bash
   git add -A
   git commit -m "feat: static portfolio for Cloudflare Pages"
   git push origin main
   ```

   No GitHub repository yet? Create an empty one on github.com, then run:

   ```bash
   git remote add origin https://github.com/rahulcodepython/<repo-name>.git
   git push -u origin main
   ```

## Step 2: Set up Resend (email sending)

1. Sign up at <https://resend.com>.
2. Go to **Domains → Add Domain** and enter `rahulcodepython.in`. Pick a region close to you (for example `ap-south-1`, Mumbai).
3. Resend shows DNS records (MX, SPF `TXT` and DKIM `TXT`, usually on a `send` subdomain plus `resend._domainkey`). Add them:
   - **If the domain is on Cloudflare:** click **Sign in to Cloudflare** in Resend to add them automatically. To add them by hand instead, go to Cloudflare dashboard → your domain → **DNS → Records → Add record** and copy each record exactly. Set the Proxy status to **DNS only** (grey cloud) for these records.
   - **If the domain is at another registrar:** add the same records in that registrar's DNS panel.
4. Click **Verify DNS Records**. Wait until the domain shows **Verified**. This is usually a few minutes, at most a few hours.
5. Go to **API Keys → Create API Key**:
   - Name: `portfolio`
   - Permission: **Sending access**
   - Domain: `rahulcodepython.in`
6. Copy the key (it starts with `re_`). Resend shows it **only once**.

> Mail can only be sent *from* a verified domain. Until `rahulcodepython.in` is verified, the form returns "Failed to send message" (HTTP 502).

## Step 3: Create the Cloudflare Pages project from GitHub

1. Open <https://dash.cloudflare.com> → **Workers & Pages** → **Create** → **Pages** tab → **Connect to Git**.

   Use the **Pages** tab, not "Create Worker".
2. Click **Connect GitHub**. Authorize the **Cloudflare Pages** GitHub app, and give it access to the portfolio repository (or to all repositories).
3. Select the repository and click **Begin setup**.
4. Fill in the build settings:

   | Setting                | Value                              |
   | ---------------------- | ---------------------------------- |
   | Project name           | `portfolio` (gives `portfolio.pages.dev`; pick another name if taken) |
   | Production branch      | `main`                             |
   | Framework preset       | **Next.js (Static HTML Export)**   |
   | Build command          | `npm run build`                    |
   | Build output directory | `out`                              |
   | Root directory         | *(leave empty)*                    |

5. Expand **Environment variables (advanced)** and add:

   | Variable name  | Value |
   | -------------- | ----- |
   | `NODE_VERSION` | `22`  |

   Next.js 16 needs Node 20.9 or newer.
6. Click **Save and Deploy**. The first build takes 1–3 minutes. When it finishes, the site is live at `https://<project-name>.pages.dev`.

The `functions/` folder is detected automatically. The build log shows `Compiled Worker successfully`, and `/api/contact` is now live too. The form still fails until you add the Resend key in the next step.

## Step 4: Add the contact form settings (environment variables)

1. Open the project → **Settings** → **Variables and Secrets** → **Add**.
2. Add these for the **Production** environment:

   | Type       | Name                 | Value                                       |
   | ---------- | -------------------- | ------------------------------------------- |
   | **Secret** | `RESEND_API_KEY`     | `re_...` (your key from Step 2)             |
   | Text       | `CONTACT_TO_EMAIL`   | `rahulcodepython@gmail.com`                 |
   | Text       | `CONTACT_FROM_EMAIL` | `Portfolio <portfolio@rahulcodepython.in>`  |

3. Switch the environment selector to **Preview** and add the same three. This is optional, but without them the form does not work on preview links.
4. Click **Save**.
5. **Redeploy.** Variables only apply to new deployments. Go to **Deployments** → the latest production deployment → **⋯** → **Retry deployment**, or push any commit.

> Your local `.env` file is **not** uploaded to Cloudflare. It is only for local testing (Step 8). Production values must be set in the dashboard as above.

## Step 5: Connect the custom domain

1. Open the project → **Custom domains** → **Set up a custom domain**.
2. Enter `rahulcodepython.in` → **Continue** → **Activate domain**.
   - **Domain on Cloudflare:** the DNS record (`CNAME` to `<project>.pages.dev`, proxied) is created for you.
   - **Domain elsewhere:** Cloudflare shows a `CNAME` to add at your registrar. An apex domain (no `www`) generally needs its nameservers moved to Cloudflare. Use **Add a site** in the dashboard and follow the nameserver instructions.
3. Repeat for `www.rahulcodepython.in`.
4. Wait for both to show **Active**. HTTPS certificates are issued automatically, usually within 15 minutes.
5. *(Optional)* Redirect `www` to the bare domain. Go to the domain's dashboard → **Rules → Redirect Rules → Create rule**:
   - If: Hostname equals `www.rahulcodepython.in`
   - Then: Dynamic redirect to `concat("https://rahulcodepython.in", http.request.uri.path)`, status **301**, preserve query string.

> If `rahulcodepython.in` already points somewhere else (old hosting or old DNS records), delete those `A`/`CNAME` records first, or Pages cannot activate the domain.

## Step 6: Check everything works

1. Open `https://rahulcodepython.in`. Check the light/dark toggle, the projects screenshots and the **Get CV** button (`/resume.pdf`).
2. Check the SEO files:
   - `https://rahulcodepython.in/robots.txt`
   - `https://rahulcodepython.in/sitemap.xml`
3. Test the contact form on the site. The email arrives at `rahulcodepython@gmail.com`, and **Reply** goes straight to the sender. The first email may land in spam; mark it "Not spam".
4. Or test the API from a terminal:

   ```bash
   # Should return 400 with field errors
   curl -s -X POST https://rahulcodepython.in/api/contact \
     -H "Content-Type: application/json" -d '{"name":"","email":"x","message":"hi"}'

   # Should return 200 and send a real email
   curl -s -X POST https://rahulcodepython.in/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","message":"Hello from curl, testing the form."}'
   ```

5. *(Recommended)* Submit the sitemap in Google Search Console: add the `rahulcodepython.in` property, then **Sitemaps** → `sitemap.xml`.

## Step 7: Everyday workflow (automatic deploys)

- **Push to `main`** to deploy production automatically.
- **Push any other branch, or open a pull request,** to get a **preview deployment** at `https://<branch>.<project>.pages.dev`, plus a comment on the PR with the link. Production stays untouched.
- **Roll back:** go to **Deployments**, pick an older deployment → **⋯** → **Rollback to this deployment**.
- **Pause auto-deploys:** **Settings → Builds & deployments → Branch control**.

Typical update:

```bash
# edit lib/data.ts (content), public/ (images, resume)...
npm run build          # optional local check
git add -A && git commit -m "content: update projects" && git push
```

## Step 8: Test locally with the real Function

`npm run dev` runs only Next.js, so the contact form fails there. To run the static build together with the Pages Function locally:

1. Put the three variables in a local file. Wrangler reads `.dev.vars`; recent Wrangler versions also read `.env` when no `.dev.vars` exists. Both files are git-ignored.

   ```bash
   RESEND_API_KEY=re_...
   CONTACT_TO_EMAIL=rahulcodepython@gmail.com
   CONTACT_FROM_EMAIL="Portfolio <portfolio@rahulcodepython.in>"
   ```

2. Run:

   ```bash
   npm run preview      # next build && wrangler pages dev out
   ```

3. Open <http://localhost:8788> and submit the form.

## Updating the resume

The resume source is `docs/resume.html`. After editing it, regenerate the PDF that the site serves:

```bash
google-chrome-stable --headless=new --no-pdf-header-footer \
  --print-to-pdf=public/resume.pdf "file://$PWD/docs/resume.html"
```

Check it is still one page (`pdfinfo public/resume.pdf | grep Pages`), then commit and push.

## Troubleshooting

| Symptom | Cause / fix |
| ------- | ----------- |
| Build fails with `You are using Node.js 18...` | Add `NODE_VERSION` = `22` (Step 3.5), then retry the deployment. |
| Build fails on a TypeScript error | Run `npx tsc --noEmit` locally, fix the error, push again. |
| Site works but the form says **"Email service is not configured"** (500) | `RESEND_API_KEY` is missing in that environment (Production or Preview), or you did not redeploy after adding it. |
| Form says **"Failed to send message"** (502) | Resend rejected the request. The domain is not verified, the key is wrong or revoked, or `CONTACT_FROM_EMAIL` is not on the verified domain. Check **Resend → Logs**, and the Function logs at **Pages project → Deployments → (deployment) → Functions → Real-time logs**. |
| `/api/contact` returns 404 or 405 | The `functions/` folder must be at the repository root, and the Root directory setting must be empty. A `GET` in the browser returning 405 is normal: the route only accepts `POST`. |
| Custom domain stuck on "Verifying" | Delete old `A`/`CNAME` records for the domain, and make sure the nameservers point to Cloudflare. |
| Emails go to spam | Make sure the SPF and DKIM records show **Verified** in Resend. Optionally add a DMARC record: `TXT _dmarc` = `v=DMARC1; p=none;`. |
| Old content still showing | Hard refresh (Ctrl+Shift+R). Cloudflare purges the Pages cache on each deploy. |

## Security checklist

- Never commit `.env` or `.dev.vars`. If a key ever leaks (pushed to GitHub, pasted in chat), **revoke it in Resend right away** and create a new one.
- Keep `RESEND_API_KEY` as a **Secret** type in Cloudflare. It cannot be read back after saving.
- The form already has a hidden honeypot field and server-side validation. If spam becomes a problem, add Cloudflare Turnstile or a rate-limiting rule (**Security → WAF → Rate limiting rules**) on `/api/contact`.
