import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import svg from 'rollup-plugin-svg-import';
import { terser } from 'rollup-plugin-terser';

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
    svg({
      // process SVG to DOM Node or String. Default: false
      stringify: false
    }),
    babel({
      exclude: 'node_modules/**',
      // https://styled-components.com/docs/tooling#minification
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            minify: true,
            transpileTemplateLiterals: true,
            pure: true
          }
        ]
      ],
      presets: ['@babel/preset-env', '@babel/preset-react']
    }),
    external(),
    resolve(),
    terser()
  ],
  external: ['prop-types']
};


