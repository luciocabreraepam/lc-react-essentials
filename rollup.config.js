import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import svg from 'rollup-plugin-svg-import';
import { terser } from 'rollup-plugin-terser';
//import postcss from 'rollup-plugin-postcss';

export default {
  input: './src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      exports: 'named'
    }
  ],
  plugins: [
    // postcss({
    //   plugins: [],
    //   minimize: true
    // }),
    svg({
      // process SVG to DOM Node or String. Default: false
      stringify: false
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    }),
    external(),
    resolve(),
    terser()
  ],
  external: ['prop-types']
};
