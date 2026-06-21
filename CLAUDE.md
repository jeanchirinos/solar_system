# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server at localhost:4321 (binds to all interfaces via --host)
pnpm build      # Build for production
pnpm preview    # Preview production build locally
pnpm upd        # Interactive upgrade of all dependencies to latest
```

## Environment Variables

Copy `.env.example` to `.env`. Required variables:

| Variable | Usage |
|---|---|
| `API_URL` | Server-side API base URL |
| `PUBLIC_API_URL` | Client-side API base URL |
| `IMAGES_URL` | Server-side image CDN base URL |
| `PUBLIC_IMAGES_URL` | Client-side image CDN base URL |

All variables are centralized in `src/constants/env.ts` via the `ENV` object. Never access `import.meta.env` directly — always go through `ENV`.

## Architecture

Astro 6 project with SSR (Vercel adapter) and prerendered static routes for planet detail pages.

**Rendering strategy:**
- `src/pages/index.astro` — SSR: fetches current planet (Earth) at request time
- `src/pages/planetas/[name].astro` — prerendered (`export const prerender = true`): `getStaticPaths` calls the API at build time to generate all planet routes

**Data flow:**
- API calls live in `src/api/` — plain fetch functions that call an external REST API
- Types are in `src/types/` — `Planet`, `PlanetName` enum, `Satellite`, `Question`
- All images are served from an external CDN; the domain must be allowlisted in `astro.config.mjs` (read from `IMAGES_URL` at build time)

**Component pattern:**
- `.astro` components handle server-side rendering and layout (e.g., `CurrentPlanet.astro`, `Layout.astro`)
- `.tsx` components handle client-side interactivity with `client:load` (e.g., `CurrentPlanetWrapper.tsx`, `ShowPlanetLink.tsx`)
- `CurrentPlanetWrapper.tsx` uses `localStorage` to track navigation direction (`prev`/`next`/`unknown`) to drive View Transition animation slots passed as Astro slots

**View Transitions:**
- Planet detail page uses Astro View Transitions with named elements (`transition:name`) for shared-element animations
- Three image slots (`planeta_prev`, `planeta_next`, `planeta_initial`) are rendered simultaneously; `CurrentPlanetWrapper` shows only the relevant one based on navigation direction

## Path Aliases

- `@/*` → `./src/*`
- `@components/*` → `./src/components/*`
- `@assets/*` → `./src/assets/*`

## Styling

Tailwind CSS v4 via `@tailwindcss/vite` plugin (no `tailwind.config` file — configuration is CSS-based).
