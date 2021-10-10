import esbuild from 'rollup-plugin-esbuild'
import { terser } from 'rollup-plugin-terser'

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
    }),
    terser(),
  ],
}
