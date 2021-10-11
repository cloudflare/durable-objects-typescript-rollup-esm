import esbuild from 'rollup-plugin-esbuild'

export default {
  input: 'src/index.ts',
  output: {
    exports: 'named',
    format: 'es',
    file: 'dist/index.mjs',
    sourcemap: true,
  },
  plugins: [
    esbuild({
      // required for resolving modules
      experimentalBundling: true,
      minify: true,
    }),
  ],
}
