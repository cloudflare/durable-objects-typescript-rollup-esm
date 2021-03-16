# 👷 Durable Objects Counter template

A template for kick starting a Cloudflare Workers project using:

- Durable Objects
- Modules (ES Modules to be specific)
- Rollup
- Wrangler

Worker code is in `src/`. The Durable Object `Counter` class is in `src/counter.mjs`, and the eyeball script is in `index.mjs`.

Rollup is configured to output a bundled ES Module to `dist/index.mjs`.

- This bundle is also configured to be the main module, using the `module` key in `package.json`.

On your first publish, you must use `wrangler publish --new-class` to allow the Counter class to implement Durable Objects.