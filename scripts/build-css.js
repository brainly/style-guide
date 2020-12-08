const path = require('path');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const fs = require('fs-extra');

const SRC_DIR = path.resolve(__dirname, '../src/css');
const SRC = path.join(SRC_DIR, 'index.css');
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

async function copyConfig() {
  try {
    await fs.copy(path.join(SRC_DIR, 'config'), path.join(OUTPUT, 'config'));
  } catch (err) {
    console.error(err);
  }
}

copyConfig();
