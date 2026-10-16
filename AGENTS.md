# AGENTS.md

Arabic-first (RTL) marketing site for the Riyadh massage/spa brand "درة المساج / درة سبا". Static Vite 7 + React 19 + Tailwind v4 multi-page app; no backend, tests, lint config, or CI.

## Entries (Vite multi-page, see `vite.config.ts`)
- `/` → `index.html` → `src/main.tsx` → `src/App.tsx` — main center landing. Styling is mostly hand-written CSS in `src/index.css`, not Tailwind utilities.
- `/home/` → `home/index.html` → `src/home/main.tsx` → `src/home/App.tsx` — home-service landing. Tailwind utilities + `src/home/index.css`.
- `/gifts/` → `gifts/index.html` → `src/gifts/main.tsx` → `src/gifts/App.tsx` — gift packages. Tailwind utilities + `src/gifts/index.css`.
- The three pages are self-contained: separate components, CSS entries, and even duplicated `cn` helpers (`src/utils/cn.ts`, `src/home/utils/cn.ts`, `src/gifts/utils/cn.ts`). Only share code across the trees if a change really requires it.
- The dev-only middleware in `vite.config.ts` rewrites `/home` and `/gifts` to trailing-slash paths; production relies on the built directory `index.html` files.

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
- Timed overlays differ per page: main shows a call prompt after 35 s (`src/components/DelayedCallPrompt.tsx`); home opens a WhatsApp modal 90 s after mount (`src/home/App.tsx`); gifts opens a gift popup after 120 s, forceable for testing with `?popup=true` or `#popup` (`src/gifts/components/GiftWhatsAppPopup.tsx`, dismissal stored in sessionStorage).
- Animation imports differ per page: main uses `motion/react`, home uses `framer-motion` (both v13, same library). Match the page you're editing.
- Gifts fonts load from external CDNs (`arbfonts.com`, `db.onlinewebfonts.com`, Google Fonts), declared in both `gifts/index.html` and `src/gifts/index.css`.
- SEO host mismatch: `home/index.html` canonical/OG use `https://dorra-spa.com`, while `public/home/robots.txt` and `public/home/sitemap.xml` reference `https://dorhspa.sa`; those two files also sit under `public/home/`, so they are served at `/home/...`, not the site root. Confirm the real domain before "fixing" either.
