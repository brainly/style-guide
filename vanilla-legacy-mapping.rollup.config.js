import * as path from 'path';
import {vanillaExtractPlugin} from '@vanilla-extract/rollup-plugin';
import {babel} from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

console.log(process.env.NODE_ENV);

export default {
  input: 'src/vanilla-mapping.js',
  output: {
    file: path.join(__dirname, 'vanilla-mapping', 'legacy-classmap.js'),
    format: 'commonjs',
  },
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.css.js'],
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx'],
    }),
    commonjs({
      defaultIsModuleExports: true,
    }),
    vanillaExtractPlugin({
      identifiers: 'debug',
    }),
  ],
  external: ['react', 'classnames'],
};
