const path = require('path');

const projectRoot = path.resolve(__dirname, '../');

const CSS_SRC_DIR = path.join(projectRoot, './src/css');
const CSS_SRC = path.join(CSS_SRC_DIR, 'index.css');
const CSS_OUTPUT_DIR = path.join(projectRoot, './css');
const CSS_CONFIG = path.resolve(projectRoot, './src/css/config/index.js');

const DEPRECATED_JSON_PATH = path.join(projectRoot, './deprecated.json');
const DEPRECATED_YAML_PATH = path.join(projectRoot, './deprecated.yaml');

module.exports = {
  CSS_SRC_DIR,
  CSS_SRC,
  CSS_OUTPUT_DIR,
  CSS_CONFIG,
  DEPRECATED_JSON_PATH,
  DEPRECATED_YAML_PATH,
};
