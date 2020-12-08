const path = require('path');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const fs = require('fs-extra');

const SRC = path.resolve(__dirname, '../src/css/index.css');
const OUTPUT = path.resolve(__dirname, '../css');
const CONFIG = path.resolve(__dirname, '../src/css/config/index.js');

fs.readFile(SRC, (err, css) => {
  postcss([tailwindcss(CONFIG)])
    .process(css, {from: SRC, to: path.join(OUTPUT, 'index.css')})
    .then(result => {
      fs.outputFile(path.join(OUTPUT, 'index.css'), result.css, () => true);
      if (result.map) {
        fs.outputFile(
          path.join(OUTPUT, 'index.css.map'),
          result.map,
          () => true
        );
      }
    });
});
