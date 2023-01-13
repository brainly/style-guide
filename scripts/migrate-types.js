#!/usr/bin/env node

'use strict';

const glob = require('glob');
const path = require('path');
const fs = require('fs-extra');
const jsc = require('jscodeshift');
const flowParser = require('jscodeshift/parser/flow');
const {convert} = require('@khanacademy/flow-to-ts/dist/convert.bundle');
const ts = require('typescript');
const prettier = require('prettier');
const apiExtractor = require('@microsoft/api-extractor');
const tsConfig = require('../tsconfig.json');
const prettierOptions = require('../.prettierrc.json');

const ROOT_DIR = path.resolve(__dirname, '../');
const SOURCE_DIR = path.join(ROOT_DIR, 'src_');
const DEST_DIR = path.join(ROOT_DIR, 'src');
const TYPES_DIR = path.join(ROOT_DIR, 'types');
const TYPES_OUT_FILE = 'brainly-style-guide.d.ts';

const files = glob.sync(`/**/*.{js,jsx}`, {
  //ignore: [`/**/{pages,iframe-pages,__mocks__}/*`],
  root: SOURCE_DIR,
});

console.log(`Found ${files.length} source files.`);

//fs.removeSync(DEST_DIR);
//fs.removeSync(TYPES_DIR);

files.forEach(sourceFile => {
  const flowCode = fs.readFileSync(sourceFile, 'utf-8');

  const ast = jsc(flowCode, {
    parser: flowParser(),
  });

  let transformedCode = ast.toSource();

  // Code transformations before converting to typescript
  // to remove incompatibilities weren't caught by flow-to-ts

  // Remove generic parameters from forwardRef as Flow uses opposite order
  // forwardRef<Prop, Element> -> forwardRef
  if (ast.find(jsc.Identifier, {name: 'forwardRef'}).length) {
    transformedCode = transformedCode.replace(/forwardRef<.*>/g, 'forwardRef');
  }

  // For all inexact prop types make sure that all pass through props are declared as
  // intersection with AllHTMLAttributes<HTMLElement>
  ast
    .find(jsc.TypeAlias)
    .filter(path => path.node.id.name.match(/.*PropsType/))
    .filter(
      path => jsc(path).find(jsc.ObjectTypeAnnotation, {inexact: true}).length
    )
    .forEach(typeAliasPath => {
      const typeAnnotations = jsc(typeAliasPath).find(
        jsc.ObjectTypeAnnotation,
        {inexact: true}
      );

      // Handling union types with multiple type annotations
      typeAnnotations.forEach(path => {
        const code = jsc(path).toSource();
        const originalPropKeys = path.value.properties.map(prop => {
          return prop.key.name;
        });

        const newCode = `${code} & Omit<React.AllHTMLAttributes<HTMLElement>, ${originalPropKeys
          .map(orgPropKey => `'${orgPropKey}'`)
          .join(' | ')}>`;

        transformedCode = transformedCode.replace(code, newCode);
      });
    });

  try {
    const typescriptCode = convert(transformedCode, {
      prettier: true,
      inlineUtilityTypes: true,
      prettierOptions,
    });

    const sourceExtension = path.extname(sourceFile);
    const destinationExtension = mapExtension(sourceExtension);

    const relativeSourceFile = path.relative(SOURCE_DIR, sourceFile);
    const outputFile = path.join(
      DEST_DIR,
      relativeSourceFile.replace(sourceExtension, destinationExtension)
    );

    fs.outputFileSync(outputFile, typescriptCode, noop => noop);
  } catch (e) {
    console.error(`Error converting ${sourceFile}`);
    throw e;
  }
});

const tsFiles = glob.sync(`${DEST_DIR}/**/*.{ts,tsx}`);

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
  .readFileSync(path.resolve(TYPES_DIR, TYPES_OUT_FILE))
  .toString();

finalTypes = finalTypes.replace(/React_\d\./g, 'React.');

fs.writeFileSync(path.resolve(TYPES_DIR, TYPES_OUT_FILE), finalTypes);

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
