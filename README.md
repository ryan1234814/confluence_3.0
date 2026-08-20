# Confluence 3.0 

Official landing page for **Confluence 3.0**, the largest industry–academia
summit hosted by the **Rajagiri School of Engineering and Technology
(RSET)** — a Silver Jubilee edition opening on **August 31, 2026, at
3:00 PM IST** at Rajagiri Valley, Kakkanad.

## Tech Stack

| Layer        | Choice                                   |
| ------------ | ---------------------------------------- |
| Framework    | React 19 (functional components + hooks) |
| Build tool   | Vite                                     |
| Styling      | Tailwind CSS v4 (tokens) + plain per-component CSS |
| Icons        | lucide-react (+ inline SVG brand glyphs) |
| State        | React `useState` / `useEffect`           |

=
## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server 
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
