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
  components/   # one file per page section + LangSwitch
  config/       # contact.ts — WHATSAPP_NUMBER / WHATSAPP_URL / EMAIL
  i18n/         # ui.ts — full en/es translation dict + helpers
  layouts/      # Layout.astro — html shell, fonts, meta, lang detector
  pages/        # index.astro (en) + es/index.astro
  styles/       # global.css — @theme tokens + .glass-panel/.recessed/.indigo-glow
public/
  images/       # static portfolio imagery (downloaded from Stitch AI URLs)
ui_reference/   # original Stitch mockup (code.html, DESIGN.md, screen.png) — read-only reference, not built
```

## Internationalization

Two locales: `en` (default, served at `/`) and `es` (served at `/es/`). Configured via Astro's built-in `i18n` in `astro.config.mjs`.

**Where translations live**: `src/i18n/ui.ts` — single typed dict with both languages. Components pull their slice via `useTranslations(getLangFromUrl(Astro.url))`. No prop drilling.

**Language selection** (priority order, evaluated by an inline pre-paint script in `Layout.astro`):
1. `localStorage.lang` — set when the user clicks the `LangSwitch`. Persists across visits.
2. `PUBLIC_FORCE_LANG` env var — build-time override. Used locally to develop in Spanish without clicking. Leave unset on Vercel.
3. `navigator.language` — first-visit fallback; `'es'` browsers go to `/es/`, everything else to `/`.

**Local dev override**: copy `.env.example` to `.env` and uncomment `PUBLIC_FORCE_LANG=es`. The repo ships with a local `.env` already set to `es` (gitignored).

**SEO**: `<link rel="alternate" hreflang>` is emitted for both locales from `Layout.astro`.

## Commands

```bash
bun install
bun run dev      # http://localhost:4321
bun run build    # → dist/
bun run preview
```

## Conventions

- **Design tokens**: live in the `@theme` block in `src/styles/global.css`. Don't reintroduce a `tailwind.config.{js,mjs}` — Tailwind v4 reads tokens from CSS.
- **Theming**: the site auto-switches between dark (default) and light via `prefers-color-scheme`. Dark tokens live in the `@theme` block; light tokens override them in a `@media (prefers-color-scheme: light)` block at the bottom of `global.css`. **Always use semantic tokens** (`text-on-surface`, `bg-surface-container-low`, `bg-on-surface/10`, etc.) — never `text-white` / `bg-zinc-*` / `bg-white/X`, which only render correctly in one theme.
- **Custom utilities**: `.glass-panel`, `.recessed`, `.indigo-glow`, `.headline-wide` are defined once in `global.css`. Reuse them rather than re-implementing the effect inline.
- **Contact links**: WhatsApp / email URLs must come from `src/config/contact.ts` — there's no other source of truth.
- **Sections**: each page section is its own `.astro` component. Add a new section by creating one and importing it from `src/pages/index.astro`.
- **Images**: served from `public/images/` with descriptive filenames. The originals were AI-generated URLs from Stitch (CDN may expire) — they're now local copies.

## Reference

- `ui_reference/DESIGN.md` — design system intent ("Refined Soft-morphism", color/typography/spacing rationale).
- `ui_reference/code.html` — original Stitch markup that was ported into the components.
- `ui_reference/screen.png` — visual reference of the full page.
