# AGENTS.md

Arabic-first (RTL) marketing site for the Riyadh massage/spa brand "درة المساج / درة سبا". Static Vite 7 + React 19 + Tailwind v4 multi-page app; no backend, tests, lint config, or CI.

## Entries (Vite multi-page, see `vite.config.ts`)
- `/` → `index.html` → `src/main.tsx` → `src/App.tsx` — main center landing. Styling is mostly hand-written CSS in `src/index.css`, not Tailwind utilities.
- `/home/` → `home/index.html` → `src/home/main.tsx` → `src/home/App.tsx` — home-service landing. Tailwind utilities + `src/home/index.css`.
- `/gifts/` → `gifts/index.html` → `src/gifts/main.tsx` → `src/gifts/App.tsx` — gift packages. Tailwind utilities + `src/gifts/index.css`.
- `/home-winter/` → `home-winter/index.html` → `src/home-winter/main.tsx` → `src/home-winter/App.tsx` — winter redesign of the home-service landing (single-page, own Tailwind `src/home-winter/index.css`, images in `public/home-winter/images/`).
- The four pages are self-contained: separate components, CSS entries, and even duplicated `cn` helpers (`src/utils/cn.ts`, `src/home/utils/cn.ts`, `src/gifts/utils/cn.ts`, `src/home-winter/utils/cn.ts`). Only share code across the trees if a change really requires it.
- The dev-only middleware in `vite.config.ts` rewrites `/home`, `/gifts`, and `/home-winter` to trailing-slash paths; production relies on the built directory `index.html` files.
- Canonical/OG URLs all use `https://durtalmsaj.sa`; root sitemap at `public/sitemap.xml` lists `/`, `/home/`, `/gifts/`, `/home-winter/`.

## Commands
- `npm run dev` / `npm run build` / `npm run preview`. Use npm: `node_modules` was installed by npm (`node_modules/.package-lock.json`), though `pnpm-lock.yaml` is also tracked — don't casually delete either lockfile.
- `npm run build` does not typecheck. Run `npx tsc --noEmit`; it currently fails with 5 pre-existing TS6133 unused-variable errors in `src/home/components/ResponsiveImage.tsx` and `vite.config.ts` (strict `noUnusedLocals`/`noUnusedParameters`).
- `npm run optimize-images` (sharp) reads `public/home/images/` and writes `public/home/images/optimized/` (not present in the repo). Only `ResponsiveImage.tsx` would consume it, and that srcset block is commented out — don't enable one side without generating the other.
- No test runner, linter, or formatter is configured; don't invent commands or config.

## Content rules
- `CONTENT_NOTES.md` is the decision log for copy, prices, offers, phone links, maps, and reviews. Read it before changing any of that; keep it updated when you do.
- All user-facing copy is Arabic; pages set `lang="ar" dir="rtl"`. Keep strings and direction intact.
- Phone conventions (documented but easy to break): `tel:` links use local Saudi numbers (`0501262512` branches, `0502076285` home); WhatsApp uses `wa.me/966...` with `encodeURIComponent`-encoded Arabic messages. Numbers are duplicated per page — `src/data.ts` (main), constants in `src/home/App.tsx`, `src/gifts/data/packages.ts` — update all copies together.
- Main-page package/service data lives in `src/data.ts`; review source data is the root-level `reviews.json`, imported by `src/components/ReviewCarousel.tsx`. Don't fabricate figures: unverified prices, dates, and totals were deliberately omitted.

## Page-specific gotchas
- Timed overlays differ per page: main shows a call prompt after 35 s (`src/components/DelayedCallPrompt.tsx`); gifts opens a gift popup after 120 s, forceable for testing with `?popup=true` or `#popup` (`src/gifts/components/GiftWhatsAppPopup.tsx`, dismissal stored in sessionStorage). Home and home-winter have no timed overlay — their WhatsApp CTAs are plain `wa.me` links (sticky bar + floating button).
- Animation imports differ per page: main uses `motion/react`, home uses `framer-motion` (both v13, same library). Match the page you're editing.
- Gifts fonts load from external CDNs (`arbfonts.com`, `db.onlinewebfonts.com`, Google Fonts), declared in both `gifts/index.html` and `src/gifts/index.css`.
- SEO: all pages use `https://durtalmsaj.sa` in canonical/OG/Twitter tags with absolute image URLs and trailing-slash paths; root `public/sitemap.xml` and `public/robots.txt` serve the four pages. The old `public/home/sitemap.xml` and `public/home/robots.txt` are served at `/home/...` (not root) and are kept in sync manually.
