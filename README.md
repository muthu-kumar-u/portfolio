# Muthukumar — Portfolio

A dark, glassmorphic developer portfolio built with React 19, Vite, TypeScript, Tailwind CSS,
Framer Motion, and React Three Fiber. Content is data-driven from `src/data/*.ts`, sourced from
the resume — edit those files to update anything on the page.

---

## 1. Tech Stack

| Category      | Tech                                                                                     |
| ------------- | ---------------------------------------------------------------------------------------- |
| Framework     | React 19 + Vite 8 + TypeScript 5.9                                                       |
| Styling       | Tailwind CSS 3.4 (classic `tailwind.config.js` + PostCSS pipeline)                       |
| Animation     | Framer Motion 12                                                                         |
| 3D            | React Three Fiber 9, @react-three/drei 10, @react-three/postprocessing (Bloom), three.js |
| Smooth scroll | Lenis                                                                                    |
| Icons         | react-icons (Feather set)                                                                |
| Contact form  | @emailjs/browser                                                                         |
| SEO           | react-helmet-async + static meta tags in `index.html`                                    |
| Lint          | ESLint 9 (flat config) + typescript-eslint                                               |

---

## 2. Requirements

- **Node.js 20 or newer** (Vite 8 requires a current Node LTS)
- **npm** (comes with Node) — yarn/pnpm also work if you regenerate the lockfile

Check your version:

```bash
node -v
```

---

## 3. Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Copy the env template and fill in your EmailJS keys (optional — see §5)
cp .env.example .env

# 3. Start the dev server
npm run dev
```

Vite will print a local URL (default `http://localhost:5173`). The app hot-reloads on save.

### Other scripts

```bash
npm run build      # Type-checks (tsc -b) then builds a production bundle to dist/
npm run preview    # Serves the production build locally to sanity-check it
npm run lint       # Runs ESLint across the project
npm run typecheck  # Type-checks only, no emit
```

---

## 4. Project Structure

```
muthukumar-portfolio/
├── public/                      # Static files served as-is
│   ├── resume.pdf               # Powers the "Download Resume" button
│   ├── favicon.svg / favicon-*.png / apple-touch-icon.png / icon-*.png
│   ├── og-image.png             # Open Graph / Twitter card image (1200×630)
│   ├── site.webmanifest
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── main.tsx                 # Entry point (mounts <App/>, wraps HelmetProvider)
│   ├── App.tsx                  # Assembles the page: Nav → sections → Footer
│   ├── index.css                # Tailwind directives + global base styles
│   ├── components/
│   │   ├── layout/               # Navbar, Footer, ScrollProgress
│   │   ├── sections/              # Hero, About, Skills, Experience, Projects,
│   │   │                          # Credentials (Certifications+Education), Contact,
│   │   │                          # OpenSource (built, not wired in — see §7)
│   │   ├── three/                 # HeroScene, GlowOrb, FloatingGeometry,
│   │   │                          # FloatingParticles, CameraRig
│   │   └── ui/                    # Button, Badge, Tag, Card-style primitives,
│   │                              # ProgressBar, AnimatedCounter, Reveal/StaggerItem,
│   │                              # TiltCard, MagneticButton, RichText, SectionHeading, SEO
│   ├── data/                     # ALL page content lives here — edit these to update
│   │   ├── personal.ts            # Name, hero copy, about paragraphs, stats, nav links
│   │   ├── social.ts               # LinkedIn / GitHub / email links
│   │   ├── journey.ts               # About section career timeline
│   │   ├── skills.ts                # Skill categories + "all technologies" tag cloud
│   │   ├── experience.ts             # Work experience cards
│   │   ├── projects.ts               # Project cards (all 7 resume projects)
│   │   └── certifications.ts         # Certifications + education
│   ├── hooks/                    # useLenis, useMousePosition, useActiveSection,
│   │                              # useMediaQuery, useTypewriter
│   ├── lib/                      # utils.ts (cn/splitEmphasis), emailjs.ts, lenis.ts
│   └── types/                    # Shared TypeScript interfaces
├── index.html                   # SEO meta, OG/Twitter tags, font links
├── tailwind.config.js            # Color tokens, fonts, animations — the design system
├── postcss.config.js
├── vite.config.ts                 # Path alias (@ → src), dev server port, base path
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── eslint.config.js
└── package.json
```

---

## 5. Configuring the Contact Form (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/) so it works without a backend.

1. Create a free EmailJS account.
2. Add an **Email Service** (e.g. Gmail) — note the **Service ID**.
3. Add an **Email Template** with variables `from_name`, `reply_to`, and `message` — note the
   **Template ID**.
4. Grab your **Public Key** from Account → API Keys.
5. Fill in `.env` (copied from `.env.example`):

   ```bash
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```

6. Restart `npm run dev` (Vite only reads `.env` on startup).

If these aren't set, the form still renders but shows an inline notice instead of silently
failing — see `src/lib/emailjs.ts` (`isEmailJsConfigured`).

**Note:** `.env` is git-ignored. Don't commit real keys — when deploying, set the same three
variables in your host's dashboard (Vercel → Project → Settings → Environment Variables, etc.).

---

## 6. Deployment

### Vercel (recommended)

1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. Import it at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Vite.
   - Build command: `npm run build`
   - Output directory: `dist`
3. Add the three `VITE_EMAILJS_*` environment variables under Project Settings before deploying.
4. `vite.config.ts` already has `base: "/"`, which is correct for Vercel/custom domains — no
   changes needed.

### GitHub Pages

1. In `vite.config.ts`, change:

   ```ts
   base: "/",
   ```

   to your repo name:

   ```ts
   base: "/your-repo-name/",
   ```

2. Build and deploy:

   ```bash
   npm run build
   npx gh-pages -d dist
   ```

   (Install it once with `npm install -D gh-pages` if you don't have it, then optionally add a
   `"deploy": "gh-pages -d dist"` script to `package.json`.)

3. In the repo's Settings → Pages, set the source to the `gh-pages` branch.

Either way, remember to update the placeholder URLs (`https://muthu-kumar.in/...`) in
`index.html` and `public/robots.txt` / `public/sitemap.xml` to your real deployed domain.

---

## 7. Content You May Want to Revisit

Everything on the page is pulled from `src/data/`, so day-to-day edits (a new job, a new
project, updated links) never require touching component code. A few things worth knowing:

- **Skill proficiency percentages** (`src/data/skills.ts`): the "Languages" tab values (Golang
  95%, Python 82%, etc.) came straight from the original design reference. The other tabs
  (Backend, Frontend, Cloud & Infra, Databases, ML) don't have resume-sourced numbers, so
  they're reasonable placeholders — there's a comment at the top of the file; adjust freely.
- **Open Source section** (`src/components/sections/OpenSource.tsx`): built and styled to match
  the rest of the site, but **not** rendered in `App.tsx` because the resume didn't list any
  public repos/contributions. Add entries in that file and uncomment the two lines in `App.tsx`
  to enable it.
- **Placeholder domain**: `https://muthu-kumar.in` is used as a stand-in canonical URL in
  `index.html`, `robots.txt`, and `sitemap.xml`. Swap it for your real domain once you have one.
- **Resume file**: `public/resume.pdf` is your uploaded resume, wired to the "Download Resume"
  button as-is. Replace the file (keep the same name) to update it.
- **EmailJS**: contact form is inert until configured — see §5.

---

## 8. Design Notes

- Color system, fonts, and animation keyframes are centralized in `tailwind.config.js` — change
  `accent.purple` / `accent.cyan` there to re-theme the whole site.
- The hero's 3D scene (`src/components/three/HeroScene.tsx`) only mounts at `lg` breakpoints and
  above, and is skipped entirely when `prefers-reduced-motion` is set — this keeps mobile fast
  and respects accessibility preferences.
- Smooth scroll (Lenis) is also disabled under `prefers-reduced-motion` (see `src/lib/lenis.ts`).
- `npm run build` runs a full TypeScript project build before bundling, so type errors fail the
  build rather than shipping silently.
