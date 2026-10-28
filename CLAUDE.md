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

**Content lives in `data.json`, not in components.** The page name, the typewriter subtitle phrases (`animatedSubtitle`), and the link buttons (`links`) are all read from it via the `@data` path alias. To change what the page shows, edit `data.json`. (`socials` is currently unused — its footer rendering is commented out in `src/pages/index.astro`.)

Path aliases (`tsconfig.json`): `@data` → `./data.json`, `@/*` → `src/*`.

Rendering flow: `src/pages/index.astro` (the only page) → wraps content in `src/layouts/Layout.astro` (SEO/Open Graph meta, favicons, global CSS) → maps `links` to `src/components/ui/Link.astro`.

**Link icons are resolved by string key.** Each `links[].icon` in `data.json` must match a key in the `icons` map inside `src/components/ui/Link.astro` (`shop`, `instagram`, `facebook`, `whatsapp`). Unknown keys render the button without an icon. Adding a new icon means creating an SVG component in `src/icons/` (taking a `class` prop) and registering it in that map.

**React is used only for interactivity**: `src/components/SubtitleAnimation.tsx` (typewriter effect) is hydrated with `client:load`. Everything else is static `.astro`.

Styling is Tailwind v4 via the Vite plugin (`astro.config.mjs`) — there is no `tailwind.config.js`; custom CSS (e.g. the `.cursor-blink` animation) goes in `src/styles/global.css`. Brand colors are hardcoded as arbitrary values (`#bf3b4d`/`#cf4053` button gradient, `#e3e3e3` background).

Static assets (logo `anavende_logo.png`, favicons, `site.webmanifest`) live in `public/`. The site URL and OG image URL are hardcoded in `Layout.astro`.
