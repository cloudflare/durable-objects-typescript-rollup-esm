# Durable Objects TypeScript Counter template


## Note: You must use [wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update) 2.0.0 or newer to use this template.

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

Once you have published the worker, you can interact with it as follows:

```
bash-3.2$ curl worker.your-account-name.workers.dev/
Select a Durable Object to contact by using the `name` URL query string parameter. e.g. ?name=A
bash-3.2$ curl worker.your-account-name.workers.dev/?name=A
Durable Object 'A' 0 is even
bash-3.2$ curl worker.your-account-name.workers.dev/increment?name=A
Durable Object 'A' 1 is odd
bash-3.2$ curl worker.your-account-name.workers.dev/increment?name=A
Durable Object 'A' 2 is even
bash-3.2$ curl worker.your-account-name.workers.dev/decrement?name=A
Durable Object 'A' 1 is odd
```

## Other Durable Objects templates:

If you don't want TypeScript, or prefer Webpack (in place of Rollup), or prefer no bundler:

- Rollup + ES Modules: https://github.com/cloudflare/durable-objects-rollup-esm
- Webpack + CommonJS Modules: https://github.com/cloudflare/durable-objects-webpack-commonjs
- Vanilla JS: https://github.com/cloudflare/durable-objects-template
