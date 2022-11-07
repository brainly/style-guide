const fs = require('fs');
const glob = require('glob');
const jsc = require('jscodeshift');
const flowParser = require('jscodeshift/parser/flow');
const tsxParser = require('jscodeshift/parser/tsx');
const {
  DynamoDBClient,
  TransactWriteItemsCommand,
  PutItemCommand,
  BatchWriteItemCommand,
} = require('@aws-sdk/client-dynamodb');
const {marshall} = require('@aws-sdk/util-dynamodb');

// const lambda = new Lambda();

exports.main = async function (commitID, commitDate) {
  // lambda
  //   .invoke({
  //     FunctionName: 'post_styleguide_metrics_lambda',
  //     Payload: JSON.stringify({
  //       styleguideVersion: getVersion(),
  //       commitID,
  //       jsxElements: getComponentOccurences(),
  //       commitDate: new Date(commitDate).toISOString(),
  //       project: getProject(),
  //     }),
  //   })
  //   .promise();

  const client = new DynamoDBClient({
    endpoint: 'http://localhost:8000',
  });
  /** for each 25 items
  /* - put ComponentInstance item
  /* - update Commit item - increment count for specific ComponentInstance
  **/

  const components = getComponents();
  const commitWriteCommandInputs = [];
  const writeItemInputs = [];
  const componentStatsData = [];

  components.forEach(c => {
    const componentStatInput = componentStatsData.find(
      csInput => csInput.component === c.name
    );

    if (!componentStatInput) {
      componentStatsData.push({
        component: c.name,
        id: commitID,
        date: commitDate,
        project: getProject(),
        styleguideVersion: getVersion(),
        pk: `CINST#${c.name}#${commitDate}`,
        sk: `CINST#${c.location}`,
        count: 1,
      });
    } else {
      componentStatInput.count += 1;
    }
  });

  components.forEach(c => {
    writeItemInputs.push({
      PutRequest: {
        Item: marshall({
          ...c,
          pk: `CINST#${c.name}#${commitDate}`,
          sk: `CINST#${c.location}`,
        }),
      },
    });
  });

  componentStatsData.forEach(csInput => {
    writeItemInputs.push({
      PutRequest: {
        Item: marshall(csInput),
      },
    });
  });

  let writeItemInputIndex = 0;
  const batchWriteItemInputs = [];

  while (writeItemInputIndex < writeItemInputs.length - 1) {
    const batchWriteItemsInput = {
      StyleGuideMetrics: {
        RequestItems: [],
      },
    };

    for (
      let i = 0, max = 24;
      i <= max && writeItemInputIndex <= writeItemInputs.length - 1;
      i++, writeItemInputIndex++
    ) {
      const component = components[writeItemInputIndex];
      console.log('i:', i, ', max:', max);
      console.log(
        'componentsIndex',
        writeItemInputIndex,
        ', components.length:',
        components.length - 1
      );

      batchWriteItemsInput.StyleGuideMetrics.RequestItems.push(
        writeItemInputs[writeItemInputIndex]
      );
    }

    batchWriteItemInputs.push(batchWriteItemsInput);
  }

  const commands = [
    ...batchWriteItemInputs.map(i => new BatchWriteItemCommand(i)),
  ];

  console.log(JSON.stringify(commands));

  // commands.forEach(async c => {
  //   await client.send(c);
  // });
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
