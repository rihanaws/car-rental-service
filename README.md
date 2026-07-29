# Dhaka Car Rental

A bilingual (Bangla / English) marketing and booking website for a car rental
business operating in Dhaka, Bangladesh. Built with Next.js 16 (App Router),
TypeScript, and Tailwind CSS v4.

This project uses **Bun** exclusively. Do not use npm, yarn, or pnpm.

## Prerequisites

- [Bun](https://bun.sh) installed (`curl -fsSL https://bun.sh/install | bash`)

## Setup

```bash
bun install
```

## Development

```bash
bun run dev
```

Visit http://localhost:3000.

## Build

```bash
bun run build
```

## Start (production server, after build)

```bash
bun run start
```

## Lint

`bun run lint` (`next lint`) currently does not work: Next.js 16 removed the
built-in `next lint` command, and this project has no ESLint config or
dependency installed. Add `eslint` + `eslint-config-next` to enable it.

## Tests

Unit tests use Bun's built-in test runner (`bun:test`) — no Jest/Vitest.

```bash
bun test
```

## Project structure

- `app/` — App Router pages: Home, Fleet, Services, Pricing, Booking, About,
  Contact, and the `/api/bookings` mock booking endpoint.
- `components/` — Shared UI: NavBar, Footer, LanguageToggle, Hero, booking
  step components, fleet/service cards, filters, icons.
- `lib/` — Shared types, booking submission (`lib/booking.ts`), and pure
  validation logic (`lib/validation.ts`).
- `data/` — Mock fleet (`data/vehicles.ts`) and service (`data/services.ts`)
  catalogues.
- `i18n/` — Bilingual dictionary (`i18n/translations.ts`), the
  `I18nProvider`/`useI18n` context, and server-side language resolution.
- `__tests__/` — `bun test` suites for validation logic and the i18n system.

## Notes on this version

- No authentication and no payments are wired in. Booking submission is
  mocked: it validates input and logs to the server console via
  `/api/bookings`, returning a response shaped like a real database write
  (`{ id, status, createdAt, ...payload }`).
- Search `lib/booking.ts` and `app/api/bookings/route.ts` for `// TODO:`
  comments marking exactly where Clerk (auth) and Polar.sh/Paddle (billing)
  would plug in for a future iteration.
- All vehicle data, pricing, phone numbers, and the office address are
  placeholder values for demonstration — replace with real business details
  before launch.
