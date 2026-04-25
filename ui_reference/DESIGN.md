---
name: The Design System
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#bec6e0'
  on-secondary: '#283044'
  secondary-container: '#3f465c'
  on-secondary-container: '#adb4ce'
  tertiary: '#bcc7de'
  on-tertiary: '#263143'
  tertiary-container: '#8691a7'
  on-tertiary-container: '#1f2a3c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d8e3fb'
  tertiary-fixed-dim: '#bcc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  h1:
    fontFamily: Noto Serif
    fontSize: 4.5rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Noto Serif
    fontSize: 3rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Noto Serif
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: '0'
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Space Grotesk
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  mono-label:
    fontFamily: Space Grotesk
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-page: 64px
  section-gap: 128px
---

## Brand & Style
This design system is built for the "Architect of Systems"—a senior engineer whose work transcends code to become structural art. The aesthetic philosophy, **Refined Soft-morphism**, rejects the playful nature of early neomorphism in favor of a mature, editorial approach. It conveys precision, reliability, and intellectual depth.

The UI should feel like a physical object made of dark, frosted materials—heavy but translucent. Visual interest is generated through the interplay of light and shadow on "glass" surfaces, rather than loud decorative elements. Imagery focuses on high-quality, monochromatic 3D renders of brutalist architecture or complex structural frameworks, reinforcing the engineer’s role as a builder of robust digital foundations.

## Colors
The palette is rooted in the "Deep State" of engineering environments. The primary background is a mix of **Charcoal (#121212)** for core surfaces and **Deep Slate (#0F172A)** for depth layers. This ensures the dark mode feels expensive and avoids the "flat black" fatigue.

**Indigo (#6366F1)** is the sole accent, used sparingly to draw the eye to critical actions or status indicators. It should appear as a glowing element behind glass or a sharp line of light. Secondary surfaces use a slightly lighter **Slate (#1E293B)** to create the necessary contrast for the soft-morphic extrusions.

## Typography
The typography strategy creates a tension between the traditional and the technical. **Noto Serif** provides an authoritative, high-contrast headline style that feels literary and premium. It suggests the engineer is a thinker and a storyteller of systems.

Supporting this is **Space Grotesk**, a geometric sans-serif with subtle technical quirks that nod to the terminal and codebase. This font handles all body copy, navigation, and metadata. By using a technical sans-serif for functional text, we anchor the "Sophisticated" serif in a "Science and Technology" context.

## Layout & Spacing
The layout follows a **Fixed Grid** model to ensure an editorial, portfolio-style presentation. Content is contained within a centered 1280px container with generous 64px page margins.

A rigorous 8px spatial system governs all internal padding. The design relies on "White Space as a Feature," using large 128px gaps between sections to allow the 3D renders and headlines to breathe. Project grids should use a 12-column layout with 32px gutters, allowing for asymmetrical compositions that feel more curated than a standard bootstrap grid.

## Elevation & Depth
Depth is the cornerstone of this design system. It is achieved through three specific layers:
1.  **The Canvas:** The Charcoal base layer, matte and non-reflective.
2.  **The Glass Layer:** Elevated surfaces use a 10-20% opacity white fill with a `backdrop-filter: blur(20px)`. This creates the glassmorphic effect.
3.  **The Shadow Stack:** Each element uses a dual shadow. A deep, diffused ambient shadow (30px blur, 15% opacity) to provide lift, and a sharp, tight inner-glow on the top-left edge (1px, 20% opacity white) to simulate a light source catching the edge of the glass.

Avoid traditional "box shadows" that look like dark smudges. Instead, use "Indigo Glows" for active states—a soft 40px indigo outer glow that feels like an LED behind the surface.

## Shapes
The shape language is **Rounded (0.5rem / 8px)**. This radius is tight enough to maintain a professional, architectural feel, but soft enough to support the "soft-morphism" light-refraction effects.

Larger components, such as primary portfolio cards, should use `rounded-xl` (1.5rem) to emphasize the "object-like" quality of the glass containers. Interactive elements like tags or small buttons should never be fully pill-shaped; they must maintain a clear, structural rectangularity with softened corners.

## Components
### Buttons
Primary buttons are solid Indigo with a subtle top-to-bottom gradient. Secondary buttons are "Ghost Glass"—transparent with a 1px border and a backdrop blur, becoming more opaque on hover.

### Cards & Containers
Portfolio pieces are housed in glass containers. These feature a "Light-leak" effect where a subtle Indigo gradient is masked to only appear on the top border, suggesting the edge of a high-end glass panel.

### Technical Elements
Include specialized components for a senior engineer:
*   **Architecture Snapshots:** Small, framed views of system diagrams with heavy backdrop blurs.
*   **Code Insight Blocks:** Monospaced text blocks with a "Terminal" header, using the Indigo accent for syntax highlighting.
*   **Status Pills:** Low-profile indicators using the `mono-label` typography, featuring a pulsing dot for "Currently Available" or "System Live."

### Inputs
Input fields should be recessed (inner shadow) to appear "carved" into the slate background, contrasting with the elevated cards.