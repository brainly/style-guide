const glob = require('glob');
const path = require('path');
const fs = require('fs-extra');
const jsc = require('jscodeshift');
const flowParser = require('jscodeshift/parser/flow');
const convert = require('@khanacademy/flow-to-ts/src/convert');

const ROOT_DIR = path.resolve(__dirname, '../');
const SOURCE_DIR = path.join(ROOT_DIR, 'src');
const DEST_DIR = path.join(ROOT_DIR, '.typescript');

const files = glob.sync(`${SOURCE_DIR}/**/*.jsx`, {});

console.log('Source files found -', files.length);

files.forEach(file => {
  const flowCode = fs.readFileSync(file, 'utf-8');

  const ast = jsc(flowCode, {
    parser: flowParser(),
  });

  const transformedCode = ast.toSource();
  const typescriptCode = convert(transformedCode, {
    printWidth: 80,
    singleQuote: true,
    semi: false,
    prettier: true,
  });

  fs.outputFileSync(
    `${DEST_DIR}/${path.basename(file, path.extname(file))}.tsx`,
    typescriptCode,
    noop => noop
  );
});
