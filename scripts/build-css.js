const path = require('path');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const fs = require('fs-extra');
const util = require('util');
const constants = require('./constants');

const readFilePromise = util.promisify(fs.readFile);

async function processCss() {
  try {
    const css = await readFilePromise(constants.CSS_SRC);
    const result = await postcss([tailwindcss(constants.CSS_CONFIG)]).process(
      css,
      {
        from: constants.CSS_SRC,
        to: path.join(constants.CSS_OUTPUT_DIR, 'index.css'),
      }
    );

    await fs.outputFile(
      path.join(constants.CSS_OUTPUT_DIR, 'index.css'),
      result.css,
      () => true
    );
  } catch (err) {
    console.error(err);
  }
}

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

processCss();
copyCssConfig();
