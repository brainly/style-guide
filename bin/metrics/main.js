const jsc = require('jscodeshift');
const flowParser = require('jscodeshift/parser/flow');
const tsxParser = require('jscodeshift/parser/tsx');
const {Lambda} = require('@aws-sdk/client-lambda');
const prettier = require('prettier');
const fs = require('fs');
const execSync = require('child_process').execSync;

/* eslint-disable no-console */

exports.main = async function (paths, {dry} = {}) {
  if (!paths) {
    throw new Error(
      'Missing paths. For more infgormation run: sg-metrics --help'
    );
  }

  const [commitID, commitDate] = execSync('git log -1 --format="%h %at000"')
    .toString()
    .split(' ');

  const version = getVersion();

  const result = {
    styleguideVersion: version,
    commitID,
    components: getComponents(paths),
    commitDate: new Date(parseInt(commitDate, 10)).toISOString(),
    project: getProject(),
  };

  if (dry) {
    console.log(
      `${prettier.format(JSON.stringify(result), {parser: 'json-stringify'})}`
    );
  } else {
    const lambda = new Lambda({
      region: 'eu-west-1',
    });

    await lambda.invoke({
      FunctionName: 'styleguide_metrics_post_components_lambda',
      Payload: JSON.stringify(result),
    });
  }
};

function getProject() {
  const packageParsed = JSON.parse(fs.readFileSync('package.json', 'utf-8'));

  return packageParsed.name;
}

function getVersion() {
  let packageParsed;

  try {
    packageParsed = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
  } catch (e) {
    throw new Error(
      'Malformed or missing package.json. Run CLI in project root directory.'
    );
  }

  if (!packageParsed.dependencies['brainly-style-guide']) {
    throw new Error(
      '"brainly-style-guide" dependency not found in package.json'
    );
  }

  return packageParsed.dependencies['brainly-style-guide'];
}

function getComponents(filePaths) {
  const elements = [];

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
