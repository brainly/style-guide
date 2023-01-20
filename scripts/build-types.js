#!/usr/bin/env node

'use strict';

const glob = require('glob');
const path = require('path');
const fs = require('fs-extra');
const ts = require('typescript');
const apiExtractor = require('@microsoft/api-extractor');
const tsConfig = require('../tsconfig.json');

const ROOT_DIR = path.resolve(__dirname, '../');
const SOURCE_DIR = path.join(ROOT_DIR, 'src');
const DEST_DIR = path.join(ROOT_DIR, '.typescript');
const TYPES_DIR = path.join(ROOT_DIR, 'types');

const files = glob.sync(
  `{/components/**/*.{ts,tsx},/js/generateRandomString.ts,/index.ts}`,
  {
    ignore: [`/**/{pages,iframe-pages,__mocks__}/*`, '/**/*{stories,spec}.*'],
    root: SOURCE_DIR,
  }
);

console.log(`Found ${files.length} source files.`);

fs.removeSync(DEST_DIR);
fs.removeSync(TYPES_DIR);

files.forEach(sourceFile => {
  const typescriptCode = fs.readFileSync(sourceFile, 'utf-8');

  try {
    const relativeSourceFile = path.relative(SOURCE_DIR, sourceFile);
    const outputFile = path.join(DEST_DIR, relativeSourceFile);

    fs.outputFileSync(outputFile, typescriptCode, noop => noop);
  } catch (e) {
    console.error(`Error copying ${sourceFile}`);
    throw e;
  }
});

const tsFiles = glob.sync('.typescript/**/*.{ts,tsx}');

const {options: compilerOptions} = ts.convertCompilerOptionsFromJson(
  tsConfig.compilerOptions,
  ''
);

const options = {...compilerOptions, declarationDir: '.typescript'};

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

// Extract API
// Combine all d.ts files into one library.d.ts

console.log('Generating library API declaration...');

const apiExtractorJsonPath = path.join(ROOT_DIR, 'api-extractor.json');

const extractorConfig =
  apiExtractor.ExtractorConfig.loadFileAndPrepare(apiExtractorJsonPath);

fs.ensureDirSync(TYPES_DIR);

const extractorResult = apiExtractor.Extractor.invoke(extractorConfig, {
  localBuild: true,
  showVerboseMessages: true,
});

if (extractorResult.succeeded) {
  console.log(`API Extractor completed successfully`);
  process.exitCode = 0;
} else {
  console.error(
    `API Extractor completed with ${extractorResult.errorCount} errors` +
      ` and ${extractorResult.warningCount} warnings`
  );
  process.exitCode = 1;
}

/**
 * A bug in API Extractor: microsoft/rushstack#2479 changes React to React_2.
 * It breaks ts typechecking when using brainly-style-guide package in app.
 * Until fixed we have to replace it back to React.
 **/
console.log('Replacing React_2 with React');

let finalTypes = fs
  .readFileSync(path.resolve(TYPES_DIR, 'brainly-style-guide.d.ts'))
  .toString();

finalTypes = finalTypes.replace(/React_\d/g, 'React');

fs.writeFileSync(
  path.resolve(TYPES_DIR, 'brainly-style-guide.d.ts'),
  finalTypes
);
