#!/usr/bin/env node

'use strict';

const glob = require('glob');
const path = require('path');
const fs = require('fs-extra');
const jsc = require('jscodeshift');
const flowParser = require('jscodeshift/parser/flow');
const convert = require('@khanacademy/flow-to-ts/src/convert');
const ts = require('typescript');

const ROOT_DIR = path.resolve(__dirname, '../');
const SOURCE_DIR = path.join(ROOT_DIR, 'src');
const DEST_DIR = path.join(ROOT_DIR, '.typescript');

const files = glob.sync(
  `{/components/**/*.{js,jsx},/js/generateRandomString.js,/index.js}`,
  {
    ignore: [`/**/{pages,iframe-pages,__mocks__}/*`, '/**/*{stories,spec}.*'],
    root: SOURCE_DIR,
  }
);

console.log(`Found ${files.length} source files.`);

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
    inlineUtilityTypes: true,
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

const tsFiles = glob.sync('.typescript/**/*.{ts,tsx}');

const options = {
  declaration: true,
  emitDeclarationOnly: false,
  declarationDir: '.typescript',
  jsx: 'react',
  esModuleInterop: true,
  allowJs: false,
  skipLibCheck: true,
  allowSyntheticDefaultImports: true,
  module: 'esnext',
  moduleResolution: ts.ModuleResolutionKind.NodeJs,
  resolveJsonModule: true,
};

console.log('Generating declaration files...');

const program = ts.createProgram(tsFiles, options);

const res = program.emit();

const allDiagnostics = ts
  .getPreEmitDiagnostics(program)
  .concat(res.diagnostics);

allDiagnostics.forEach(diagnostics => {
  if (diagnostics.file) {
    const {line, character} = diagnostics.file.getLineAndCharacterOfPosition(
      diagnostics.start
    );
    const message = ts.flattenDiagnosticMessageText(
      diagnostics.messageText,
      '\n'
    );

    console.log(
      `${diagnostics.file.fileName} (${line + 1}, ${character + 1}): ${message}`
    );
  } else {
    console.log(ts.flattenDiagnosticMessageText(diagnostics.messageText, '\n'));
  }
});

console.log(
  `Found ${allDiagnostics.length > 0 ? allDiagnostics.length : 'No'} errors.`
);

function mapExtension(extension = '') {
  const map = {
    '.js': '.ts',
    '.jsx': '.tsx',
  };

  const ext = map[extension];

  if (!ext) {
    throw new Error(
      `Extension '${extension}' doesn't have matching element in map.`
    );
  }

  return ext;
}
