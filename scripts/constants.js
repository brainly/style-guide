const path = require('path');

const projectRoot = path.resolve(__dirname, '../');

const CSS_SRC_DIR = path.join(projectRoot, './src/css');
const CSS_SRC = path.join(CSS_SRC_DIR, 'index.css');
const CSS_OUTPUT_DIR = path.join(projectRoot, './css');
const CSS_CONFIG = path.resolve(projectRoot, './src/css/config/index.js');

module.exports = {
  CSS_SRC_DIR,
  CSS_SRC,
  CSS_OUTPUT_DIR,
  CSS_CONFIG,
};
