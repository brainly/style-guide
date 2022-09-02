import * as path from 'path';
import {vanillaExtractPlugin} from '@vanilla-extract/rollup-plugin';
import {babel} from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: path.join(__dirname, 'dist-vanilla-rollup', 'main.js'),
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
