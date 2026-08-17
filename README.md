# Confluence 3.0 — Landing Page

Official landing page for **Confluence 3.0**, the largest industry–academia
summit hosted by the **Rajagiri School of Engineering and Technology
(RSET)** — a Silver Jubilee edition opening on **September 1, 2026, at
10:00 AM IST** at Rajagiri Valley, Kakkanad.

## Features

- **Sticky navbar** — the official RSET Silver Jubilee logo, a blurred white
  backdrop, and 7 nav links. Collapses to a mobile hamburger menu.
- **Hero section** — "CONFLUENCE 3.0" headline, "Largest Industry–Academia
  Summit" tagline, an RSET host highlight, and dual CTAs.
- **Programme overview grid** — six pillar cards (Confluence Days, Workshops,
  Advisory Board, Speakers, Sponsors, Media) that double as anchor targets for
  the navbar links.
- **Live countdown** — a React `useEffect` + `setInterval` timer counting down
  to the summit's opening moment (`1788237600000` ms = Sept 1, 2026, 10:00 AM
  GMT+0530), rendered as Days : Hours : Minutes : Seconds cards.
- **Registration band** — CTA section anchoring "Register Now" /
  "Get Summit Pass".
- **3-column footer** — About & co-branded logos, Quick Links, and Contact &
  Venue, plus a sub-footer with copyright, Privacy Policy, and social links.

## Tech Stack

| Layer        | Choice                                   |
| ------------ | ---------------------------------------- |
| Framework    | React 19 (functional components + hooks) |
| Build tool   | Vite                                     |
| Styling      | Tailwind CSS v4 (tokens) + plain per-component CSS |
| Icons        | lucide-react (+ inline SVG brand glyphs) |
| State        | React `useState` / `useEffect`           |

## Prerequisites

- **Node.js** 18 or newer (20+ recommended)
- **npm** 9 or newer (bundled with Node)

Verify with:

```bash
node --version
npm --version
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Create a production build (outputs to dist/)
npm run build

# 4. Preview the production build locally
npm run preview
```

## Project Structure

```
.
├── index.html                      # HTML entry, fonts, meta, favicon
├── package.json
├── vite.config.js                  # React + Tailwind CSS v4 plugins
├── public/
│   └── images/
│       └── rset-silver-jubilee-logo.png # Official RSET Silver Jubilee logo
└── src/
    ├── main.jsx                    # React entry point
    ├── App.jsx                     # Page composition
    ├── index.css                   # Tailwind entry + design tokens (@theme)
    └── components/
        ├── Navbar/
        │   ├── Navbar.jsx           # Sticky header + mobile menu
        │   └── Navbar.css           # Plain CSS for the navbar
        ├── Hero/
        │   ├── Hero.jsx             # Title, tagline, institutions, CTAs
        │   └── Hero.css             # Plain CSS for the hero
        ├── Program/
        │   ├── Program.jsx          # Programme overview grid (anchor targets)
        │   └── Program.css          # Plain CSS for the programme grid
        ├── Countdown/
        │   ├── Countdown.jsx        # Live countdown timer
        │   └── Countdown.css        # Plain CSS for the countdown
        ├── Register/
        │   ├── Register.jsx         # Registration CTA band
        │   └── Register.css         # Plain CSS for the registration band
        ├── Contact/
        │   ├── Contact.jsx          # Contact page (cards, form, map)
        │   └── Contact.css          # Plain CSS for the contact page
        └── Footer/
            ├── Footer.jsx           # 4-column footer + sub-footer
            └── Footer.css           # Plain CSS for the footer
```

## Design System

Brand tokens are defined once in `src/index.css` under `@theme` and are used
as Tailwind utilities everywhere (`bg-navy`, `text-crimson`, `text-gold`,
`border-silver`, `font-display`, etc.):

| Token         | Value     | Usage                                   |
| ------------- | --------- | --------------------------------------- |
| `--color-navy`    | `#0A2540` | Primary elements, buttons, headings     |
| `--color-navy-dark` | `#071D33` | Button hover states                   |
| `--color-crimson`  | `#DC2626` | Highlights, badges, "3.0" mark        |
| `--color-gold`     | `#D97706` | Silver Jubilee accents                 |
| `--color-silver`   | `#94A3B8` | Silver Jubilee accents, muted borders  |
| `--font-sans`      | Inter     | Body text                               |
| `--font-display`   | Space Grotesk | Headings and display type        |

Typography loads via Google Fonts in `index.html` (Inter + Space Grotesk).

## Customization

- **Countdown target** — change `TARGET_TIMESTAMP_MS` in
  `src/components/Countdown/Countdown.jsx` (currently `1788237600000`).
- **Nav links** — edit `NAV_LINKS` in `src/components/Navbar/Navbar.jsx`.
- **Contact email / social links** — replace the placeholder
  `confluence@rajagiri.edu` and `href="#"` values in
  `src/components/Footer/Footer.jsx` and `src/components/Register/Register.jsx`.
- **Logo** — the header and footer both use `public/images/rset-silver-jubilee-logo.png`
  (a web-sized copy of the original artwork). Replace that file to update the
  branding; it is referenced from `src/components/Navbar/Navbar.jsx` and
  `src/components/Footer/Footer.jsx`.
- **Colors / fonts** — update the `@theme` block in `src/index.css`.

## Deployment

The build output is fully static — deploy `dist/` to any static host
(Netlify, Vercel, GitHub Pages, nginx, S3, etc.) with no server-side
configuration required.

## CI/CD

Pushes to `main` trigger the GitHub Actions workflow
(`.github/workflows/static.yml`), which runs in three stages:

1. **build** — installs dependencies with `npm ci` and runs `npm run build`
2. **report-build-status** — posts the build result as a commit status
3. **deploy** — publishes the built site to GitHub Pages (only after a
   successful build)
