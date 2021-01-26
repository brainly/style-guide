'use strict';

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

fs.removeSync(DEST_DIR);

files.forEach(sourceFile => {
  const flowCode = fs.readFileSync(sourceFile, 'utf-8');

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

  const sourceExtension = path.extname(sourceFile);
  const destinationExtension = mapExtension(sourceExtension);

  const relativeSourceFile = path.relative(SOURCE_DIR, sourceFile);
  const outputFile = path.join(
    DEST_DIR,
    relativeSourceFile.replace(sourceExtension, destinationExtension)
  );

  fs.outputFileSync(outputFile, typescriptCode, noop => noop);
});

function mapExtension(extension = '') {
  const map = {
    '.js': '.ts',
    '.jsx': '.tsx',
  };

  const ext = map[extension];

  if (!ext) {
    throw new Error(`Extension '${extension}' doesn't have equivalent in map.`);
  }

  return ext;
}
