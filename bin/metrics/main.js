const glob = require('glob');
const jsc = require('jscodeshift');
const flowParser = require('jscodeshift/parser/flow');
const tsxParser = require('jscodeshift/parser/tsx');
const {Lambda} = require('@aws-sdk/client-lambda');
const prettier = require('prettier');
const fs = require('fs');

/* eslint-disable no-console */

exports.main = async function (commitID, commitDate, {dry} = {}) {
  const lambda = new Lambda({
    region: 'eu-west-1',
  });

  if (!commitID) {
    console.error('Invalid commit hash');
    return;
  }

  if (!commitDate) {
    console.error('Invalid date');
    return;
  }

  const result = {
    styleguideVersion: getVersion(),
    commitID,
    components: getComponents(),
    commitDate: new Date(parseInt(commitDate, 10)).toISOString(),
    project: getProject(),
  };

  if (dry) {
    process.stdout.write(
      `${prettier.format(JSON.stringify(result), {parser: 'json-stringify'})}`
    );
  } else {
    await lambda
      .invoke({
        FunctionName: 'styleguide_metrics_post_components_lambda',
        Payload: JSON.stringify(result),
      })
      .catch(e => {
        console.error(e);
      });
  }
};

function getProject() {
  const packageParsed = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

  return packageParsed.name;
}

function getVersion() {
  const packageParsed = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

  return (
    (packageParsed.dependencies &&
      packageParsed.dependencies['brainly-style-guide']) ||
    null
  );
}

function getComponents() {
  const elements = [];
  const filePaths = glob.sync('**/*.{js,ts}x', {
    ignore: 'node_modules/**',
    cwd: process.cwd(),
  });

  filePaths.forEach(path => {
    const importPattern = /from 'brainly-style-guide'/;
    const content = fs.readFileSync(path, 'utf8');
    const importMatch = importPattern.exec(content);

    if (importMatch !== null) {
      const ast = jsc(content, {
        parser: path.includes('.jsx') ? flowParser() : tsxParser(),
      });

      const sgImports = [];

      ast.find(jsc.ImportDeclaration).forEach(importDeclaration => {
        if (importDeclaration.value.source.value === 'brainly-style-guide') {
          importDeclaration.value.specifiers.forEach(specifier => {
            if (!specifier.imported.name.includes('Type')) {
              sgImports.push(specifier.imported.name);
            }
          });
        }
      });

      sgImports.forEach(importName => {
        ast.find(jsc.JSXOpeningElement).forEach(item => {
          if (item.value.name.name === importName) {
            const jsxElementInfo = {
              location: `${path}#${item.value.loc.start.line}:${item.value.loc.start.column}`,
              name: importName,
              props: item.value.attributes.reduce((acc, next) => {
                if (next.type !== jsc.JSXAttribute.name) {
                  return acc;
                }

                if (next.value === null) {
                  acc[next.name.name] = true;
                } else if (next.value.type === 'Literal') {
                  acc[next.name.name] = next.value.value;
                }

                return acc;
              }, {}),
            };

            elements.push(jsxElementInfo);
          }
        });
      });
    }
  });

  return elements;
}
