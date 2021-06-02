# Durable Objects TypeScript Counter template


## Note: You must use [wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update) 1.17 or newer to use this template.

## Please read the [Durable Object documentation](https://developers.cloudflare.com/workers/learning/using-durable-objects) before using this template.

A template for kick starting a Cloudflare Workers project using:

- Durable Objects
- TypeScript
- Jest for unit testing
- Modules (ES Modules to be specific)
- Rollup
- Wrangler

Worker code is in `src/`. The Durable Object `CounterTs` class is in `src/counter.ts`, and the eyeball script is in `index.ts`.

Rollup is configured to output a bundled ES Module to `dist/index.mjs`.

There's an example unit test in `src/index.test.ts`, which will run as part of `wrangler build`.   To run tests on their own use `npm test`.

On your first publish, you must use `wrangler publish --new-class CounterTs` to allow the CounterTs class to implement Durable Objects.
