const path = require('path');
const {babel} = require('@rollup/plugin-babel');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
  input: 'src/index.js',
  output: {
    file: path.join(__dirname, 'dist-sandbox', 'main.js'),
  },
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx'],
    }),
    commonjs({
      defaultIsModuleExports: true,
    }),
  ],
  external: ['react'],
};
