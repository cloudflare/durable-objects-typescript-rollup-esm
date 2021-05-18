# Durable Objects Typescript Counter template

## NOTE: You must be using wrangler 1.16.0-durable-objects.rc.0 or newer to use this template

A template for kick starting a Cloudflare Workers project using:

- Durable Objects
- Typescript
- Modules (ES Modules to be specific)
- Rollup
- Wrangler

Worker code is in `src/`. The Durable Object `CounterTs` class is in `src/counter.ts`, and the eyeball script is in `index.ts`.

Rollup is configured to output a bundled ES Module to `dist/index.mjs`.

On your first publish, you must use `wrangler publish --new-class CounterTs` to allow the CounterTs class to implement Durable Objects.
