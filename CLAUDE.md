# juanbarba2026

Personal portfolio for Juan Barba — "Architect of Systems / Simple Web Tools Specialist." Single static page, dark + indigo aesthetic.

## Stack

- **Astro 5** (static output, no SSR adapter)
- **Tailwind CSS v4** via `@tailwindcss/vite` — CSS-first config in `src/styles/global.css` `@theme` block
- **TypeScript** strict (`astro/tsconfigs/strict`)
- **Bun** for install + scripts
- Deployed on **Vercel** via auto-detection (no `@astrojs/vercel` adapter needed)

## Structure

```
src/
  components/   # one file per page section
  config/       # contact.ts — WHATSAPP_NUMBER / WHATSAPP_URL / EMAIL
  layouts/      # Layout.astro — html shell, fonts, meta
  pages/        # index.astro — composes sections
  styles/       # global.css — @theme tokens + .glass-panel/.recessed/.indigo-glow
public/
  images/       # static portfolio imagery (downloaded from Stitch AI URLs)
ui_reference/   # original Stitch mockup (code.html, DESIGN.md, screen.png) — read-only reference, not built
```

## Commands

```bash
bun install
bun run dev      # http://localhost:4321
bun run build    # → dist/
bun run preview
```

## Conventions

- **Design tokens**: live in the `@theme` block in `src/styles/global.css`. Don't reintroduce a `tailwind.config.{js,mjs}` — Tailwind v4 reads tokens from CSS.
- **Custom utilities**: `.glass-panel`, `.recessed`, `.indigo-glow`, `.headline-wide` are defined once in `global.css`. Reuse them rather than re-implementing the effect inline.
- **Contact links**: WhatsApp / email URLs must come from `src/config/contact.ts` — there's no other source of truth.
- **Sections**: each page section is its own `.astro` component. Add a new section by creating one and importing it from `src/pages/index.astro`.
- **Images**: served from `public/images/` with descriptive filenames. The originals were AI-generated URLs from Stitch (CDN may expire) — they're now local copies.

## Reference

- `ui_reference/DESIGN.md` — design system intent ("Refined Soft-morphism", color/typography/spacing rationale).
- `ui_reference/code.html` — original Stitch markup that was ported into the components.
- `ui_reference/screen.png` — visual reference of the full page.
