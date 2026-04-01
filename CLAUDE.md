# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML/CSS website for **Arjava Technologies** — a full-stack IT solutions company. It is deployed via GitHub Pages at `arjavatech.com` (configured via `CNAME`).

## No Build System

There is no build process, package manager, or test framework. Files are served directly as static assets. To preview locally, open any `.html` file in a browser or use a simple static server:

```bash
python3 -m http.server 8080
```

## Tech Stack

- **Bootstrap 5.1.3** — layout, grid, responsive components (loaded via CDN)
- **Font Awesome 6.2.0** — icons (loaded via CDN)
- **Vanilla JS** — minimal scripting only
- **No backend** — the contact form (`contact us.html`) currently posts to `/action_page.php`, which is a placeholder

## File Naming Convention

HTML pages and CSS files use **spaces in filenames** (e.g., `about us.html`, `contact us style.css`). Preserve this convention when creating new pages.

## Structure

Each page has a dedicated stylesheet:
- `style.css` — global/shared styles used by `index.html`
- `about us style.css`, `contact us style.css`, `services style.css`, `products style.css` — page-specific

Images live in the `image/` directory. There are 58 assets including logos, product mockups, service icons, and social media icons.

## Authentication

`auth.html` is a Google OAuth landing page that communicates with a FastAPI backend. It reads the OAuth token from the URL hash and posts it to the backend.

## Deployment

Pushing to `main` deploys automatically via GitHub Pages. The custom domain is set in `CNAME` as `arjavatech.com`.
