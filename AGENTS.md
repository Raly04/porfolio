# AGENTS.md

## Project Overview

React 18 + Vite portfolio site with TypeScript, Tailwind CSS, and i18next (EN/FR). Uses Framer Motion for animations, EmailJS for contact forms, and React Router for navigation.

## Commands

```bash
bun install          # install dependencies (bun.lock present)
npm run dev          # start dev server
npm run build        # production build
npm run lint         # eslint (no warnings allowed, --max-warnings 0)
npm run preview      # preview production build
```

## Path Aliases

`@/` maps to `src/` — configured in both `vite.config.ts` and `tsconfig.json`. Use `@/components/...`, `@/utils/...` etc.

## Project Structure

- `src/main.tsx` — entry point, i18next init with EN/FR translations
- `src/App.tsx` — router with two routes: `/` (MainContainer) and `/all-projects`
- `src/components/` — all page components (hero, nav, skills, works, contacts, etc.)
- `src/components/ui/` — reusable UI primitives (button, card, badge, tabs, separator) using Radix UI + CVA
- `src/translations/` — i18n JSON files (`en/global.json`, `fr/global.json`)
- `src/utils/cn.ts` — clsx + tailwind-merge utility
- `src/assets/` — SVG components and doodle items

## Conventions

- **Tailwind custom colors**: `background` (#222831), `primary` (#00ADB5), `secondary` (#ABB2BF), `foreground` (#EEEEEE)
- **Font**: Fira Code (monospace) via `font-firacode` class
- **Dark mode**: class-based, app always runs in dark mode
- **Component style**: functional components, no class components
- **File naming**: dot-separated for multi-word components (`nav.bar.tsx`, `work.box.tsx`)
- **UI components**: `src/components/ui/` uses Radix primitives + class-variance-authority (CVA)

## Lint

ESLint configured in `.eslintrc.cjs`. The lint command uses `--max-warnings 0` so zero warnings are enforced. Key rules:
- `react-refresh/only-export-components` set to warn (allows constant exports)
- `react/jsx-no-target-blank` disabled
- Ignores `dist/` and `.eslintrc.cjs`

## TypeScript

Strict mode enabled with `noUnusedLocals` and `noUnusedParameters`. Uses bundler module resolution. `noEmit: true` (Vite handles bundling).

## Styling

- Global CSS in `src/index.css` with Tailwind directives and custom utilities (glass, gradient-border, btn-hover, card-hover, etc.)
- Tailwind safelist includes width fractions `w-1/6` through `w-6/6` for dynamic skill bars
- Responsive breakpoints: mobile-first with `md:` and custom media queries for masonry layouts
