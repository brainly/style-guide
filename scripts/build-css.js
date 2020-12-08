const path = require('path');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const fs = require('fs-extra');
const constants = require('./constants');

fs.readFile(constants.CSS_SRC, (err, css) => {
  postcss([tailwindcss(constants.CSS_CONFIG)])
    .process(css, {
      from: constants.CSS_SRC,
      to: path.join(constants.CSS_OUTPUT_DIR, 'index.css'),
    })
    .then(result => {
      fs.outputFile(
        path.join(constants.CSS_OUTPUT_DIR, 'index.css'),
        result.css,
        () => true
      );
      if (result.map) {
        fs.outputFile(
          path.join(constants.CSS_OUTPUT_DIR, 'index.css.map'),
          result.map,
          () => true
        );
      }
    });
});

async function copyCssConfig() {
  try {
    await fs.copy(
      path.join(constants.CSS_SRC_DIR, 'config'),
      path.join(constants.CSS_OUTPUT_DIR, 'config')
    );
  } catch (err) {
    console.error(err);
  }
}

copyCssConfig();
