# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Bilingual (Bangla / English) marketing and booking website for a car rental business in Dhaka, Bangladesh. Next.js 16 (App Router) + TypeScript + Tailwind v4. No auth or payments are wired in yet (see Integration points below).

**Bun only** — never npm/yarn/pnpm.

## Commands

```bash
bun install
bun run dev      # http://localhost:3000
bun run build
bun run start    # production server, after build
bun test         # bun:test (built-in runner, no Jest/Vitest)
```

Run a single test file: `bun test __tests__/validation.test.ts`

**Lint**: `bun run lint` (`next lint`) does not work — Next.js 16 removed the built-in `next lint` command and this repo has no ESLint config/dependency installed. Wire up `eslint` + `eslint-config-next` before relying on this script.

## Architecture

**i18n**: `i18n/translations.ts` holds the full bilingual dictionary (`Translations` type), keyed by `en`/`bn`. Language state flows through three pieces that must stay in sync:
- `i18n/getServerLang.ts` — reads the `dcr_lang` cookie server-side (via `next/headers`) so `app/layout.tsx` renders the correct language on first paint. Defaults to `bn`.
- `i18n/I18nProvider.tsx` — client context; on language change writes both a cookie (`dcr_lang`, source of truth) and localStorage (`dcr_lang`, best-effort fallback), and sets `data-lang`/`lang` attributes on `<html>`. On mount it reconciles against localStorage in case another tab changed it.
- `i18n/useI18n.ts` — the hook components use to read `{ lang, setLang, t }`.

`app/globals.css` uses `[data-lang]` to switch the active font-pair CSS variables (Fraunces/Sora for English, Tiro Bangla/Hind Siliguri for Bangla) — Tailwind v4 CSS-first config, `@theme` in globals.css, no `tailwind.config.js`.

**Booking flow**: `components/booking/Step{TripDetails,Vehicle,CustomerDetails,Confirmation}.tsx` are the four steps of the booking wizard rendered from `components/BookingForm.tsx`. Submission always funnels through the single choke point `lib/booking.ts:submitBooking()`, which POSTs to `app/api/bookings/route.ts`. That route validates and returns a response shaped like a real DB write (`{ id, status, createdAt, ...payload }`) but only logs to console — nothing is persisted.

**Validation**: `lib/validation.ts` contains pure, testable validation functions (BD phone regex, email regex, trip-type rules) that take the active language's `booking.validation` message slice so error copy stays bilingual without leaking i18n into components. The API route (`app/api/bookings/route.ts`) duplicates the same core validation server-side rather than importing it — check both if changing validation rules.

**Data**: `data/vehicles.ts` and `data/services.ts` are static mock catalogues typed against `lib/types.ts` (`Vehicle`, `Service`, `BookingPayload`, etc.). All prices, phone numbers, and the office address are placeholders.

**Path alias**: `@/*` maps to repo root (flat structure, no `src/`).

## Integration points (not yet wired)

Search for `// TODO:` in `lib/booking.ts` and `app/api/bookings/route.ts` — they mark exactly where:
- **Clerk** (auth) would attach `userId` to the booking payload and verify sessions server-side.
- **Polar.sh/Paddle** (billing) would create a checkout session before submission and verify payment before marking a booking `status: "received"`.

Per the stack lock: Clerk for auth (never NextAuth/Supabase Auth/Firebase Auth/Lucia), Polar.sh or Paddle for payments on new work (Stripe is legacy/support-only). Prisma + Neon would replace the console-log persistence in the API route when a real database is added.
