# CLAUDE.md

This file provides guidance to Claude Code when working with this codebase.

## Project Overview

Turborepo monorepo containing portfolio and documentation sites with shared UI components.

## Architecture

- **apps/alanbrowndesign/** - Astro-based portfolio site
- **apps/web/** - Next.js web app (port 3000)
- **apps/docs/** - Next.js documentation app (port 3001)
- **packages/ui/** - Shared React component library (@repo/ui)
- **packages/eslint-config/** - Shared ESLint configurations
- **packages/typescript-config/** - Shared TypeScript configurations

## Tech Stack

- TypeScript 5.9, React 19, Next.js 16, Astro 5
- pnpm workspaces with Turborepo for task orchestration
- ESLint 9 (flat config) + Prettier

## Common Commands

```bash
# Development
pnpm dev              # Start all dev servers
pnpm build            # Build all apps/packages
pnpm lint             # Lint all workspaces
pnpm check-types      # TypeScript type checking
pnpm format           # Format with Prettier

# Run commands for specific workspace
pnpm --filter @repo/ui dev
pnpm --filter alanbrowndesign dev
```

## Code Style

- Zero-warnings ESLint policy (builds fail on warnings)
- Strict TypeScript mode enabled
- Client components require "use client" directive
- Use workspace protocol for internal deps: `"@repo/ui": "workspace:*"`

## Workflow

- Main branch: `develop`
- UI package exports from `./src/*.tsx` using wildcard pattern
- Turborepo caches build outputs (except `.next/cache/`)
- Environment variables in `.env*` files invalidate build cache
