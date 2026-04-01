# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **React SPA** for **Arjava Technologies** — a full-stack IT solutions company. It is deployed via GitHub Pages at `arjavatech.com` (configured via `CNAME`).

## Tech Stack

- **React 18** — functional components + hooks only
- **TypeScript** — strict mode, no `any`
- **Vite** — build tool and dev server
- **Tailwind CSS** — all styling (no Bootstrap, no inline styles)
- **React Router DOM v6** — client-side routing
- **@radix-ui/react-dialog** — modal dialogs (Our Works section)
- **lucide-react** — icons

## Dev Commands

```bash
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build locally
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About Us |
| `/services` | Our Services |
| `/products` | Our Products |
| `/contact` | Contact Us |
| `/privacy-policy` | Privacy Policy |

## Project Structure

```
src/
  components/
    layout/
      Navbar.tsx       ← sticky navbar, NavLink active state, mobile hamburger
      Footer.tsx       ← dark navy, 4-col grid, social icons, Google Maps embed
    ui/
      ServiceCard.tsx  ← dark navy header + expandable read-more (useState)
      WorkModal.tsx    ← Radix Dialog triggered by clicking a work image
      PageCover.tsx    ← AJ cover.jpg + page title overlay (reused on inner pages)
  pages/
    Home.tsx           ← Hero, Vision/Mission, Digital Services, Dev Process, Our Works
    AboutUs.tsx
    OurServices.tsx
    OurProducts.tsx
    ContactUs.tsx      ← proposal form (no backend yet — TODO: wire to API)
    PrivacyPolicy.tsx
  lib/
    utils.ts           ← cn() helper (clsx + tailwind-merge)
  App.tsx              ← BrowserRouter + Routes
  main.tsx
  index.css            ← Tailwind directives + custom component classes
```

## Brand Tokens (tailwind.config.js)

- `brand` / `bg-brand` → `#00095A` (primary navy)
- `text-body` → `#4B4B4B`
- Font: Roboto (Google Fonts, loaded in index.html)

## Images

All images live in the `image/` directory (served as public assets). Reference them as `/image/filename.ext`.

## Deployment

GitHub Pages deploys from the `dist/` folder on push to `main`. Because this is a SPA with client-side routing, a `404.html` redirect may be needed for deep-link support on GitHub Pages.
