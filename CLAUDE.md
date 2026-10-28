# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page "link in bio" site for **Ana Vende** (a tech-accessories seller), built with Astro 5 + React 19 + Tailwind CSS v4. Static output, deployed on Netlify (`https://anavende-links.netlify.app/`). All user-facing copy is in Spanish (Argentine voseo: "Seguime", "Escribime", "Vos elegís").

## Commands

Package manager is **pnpm** (version pinned via `packageManager` in `package.json`). There are no tests or linter configured.

- `pnpm install` — install deps
- `pnpm dev` — dev server at `localhost:4321`
- `pnpm build` — static build to `./dist/`
- `pnpm preview` — serve the built site
- `pnpm astro check` — type-check `.astro`/`.ts` files (needs `@astrojs/check` installed)

## Supply-chain settings (pnpm-workspace.yaml)

- `minimumReleaseAge: 1440` — pnpm refuses package versions published less than 24h ago. A fresh release failing to install is expected, not a bug.
- `allowBuilds` — only `esbuild`, `sharp` and `@tailwindcss/oxide` may run install scripts. A new dependency with build scripts will fail install with `ERR_PNPM_IGNORED_BUILDS`; vet it, then approve with `pnpm approve-builds <pkg>`.

## Architecture

**Content lives in `data.json`, not in components.** The page name, the typewriter subtitle phrases (`animatedSubtitle`), and the link cards (`links`) are all read from it via the `@data` path alias. Each link has `title`/`caption` (shown on the card), `text` (accessible label), `icon`, `url`; the first entry is the featured store card (`featured`, `action`). To change what the page shows, edit `data.json`. (`socials` is currently unused — its footer rendering is commented out in `src/pages/index.astro`.)

Path aliases (`tsconfig.json`): `@data` → `./data.json`, `@/*` → `src/*`.

Rendering flow: `src/pages/index.astro` (the only page) → wraps content in `src/layouts/Layout.astro` (SEO/Open Graph meta, favicons, font, global CSS) → renders the stand sign, then maps `links` to `src/components/ui/HangCard.astro` (the first link renders as the large featured card).

**Link icons are resolved by string key.** Each `links[].icon` in `data.json` must match a key in the `icons` map inside `src/components/ui/HangCard.astro` (`web`, `shop`, `instagram`, `facebook`, `whatsapp`). Unknown keys render the button without an icon. Adding a new icon means creating an SVG component in `src/icons/` (taking a `class` prop) and registering it in that map.

**Visual world: "Tablero de feria"** — the page is a fair-stand pegboard in brand bordó (`#822733`) with channels hanging as cards on hooks. All styling and design tokens (CSS custom properties) live in `src/styles/global.css` as plain CSS classes, not Tailwind utilities; Tailwind v4 is loaded only for preflight and `sr-only`. Font is Archivo variable (self-hosted via `@fontsource-variable/archivo`, using its width axis). Product context is in `PRODUCT.md`; design-direction notes live under `.impeccable/`.

**Motion**: CSS keyframes in `global.css` (card drop/swing/nudge) plus a small inline script in `index.astro` that sets `--sway` from scroll velocity and swings cards on `pointerdown`. All of it is disabled under `prefers-reduced-motion`. **React is used only for** `src/components/SubtitleAnimation.tsx` (typewriter), hydrated with `client:load`.

Static assets (logo `anavende_logo.png`, favicons, `site.webmanifest`) live in `public/`. The site URL and OG image URL are hardcoded in `Layout.astro`.
