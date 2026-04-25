# juanbarba2026

Personal portfolio for Juan Barba — "Architect of Systems / Simple Web Tools Specialist."

Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com). Deploys as a static site on Vercel.

## Develop

```bash
bun install
bun run dev      # http://localhost:4321
bun run build    # outputs to dist/
bun run preview  # serve the built site locally
```

## Structure

```
src/
  components/   # one file per page section (Nav, Hero, Problem, ...)
  config/       # contact.ts — single source of truth for WhatsApp / email
  layouts/      # Layout.astro — html shell, fonts, meta
  pages/        # index.astro — composes the sections
  styles/       # global.css — Tailwind @theme tokens + custom utilities
public/
  images/       # static portfolio imagery
ui_reference/   # original Stitch mockup (read-only reference)
```

## Deploy

Push to a Vercel-connected repo. Vercel auto-detects Astro and runs `astro build`.
