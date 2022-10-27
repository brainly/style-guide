const fs = require('fs');
const glob = require('glob');
const jsc = require('jscodeshift');
const flowParser = require('jscodeshift/parser/flow');
const tsxParser = require('jscodeshift/parser/tsx');

const versions = getVersions();
const componentsStats = getComponents();
const componetsStatsFormatted = componentsStats.reduce((acc, next) => {
  if (!acc[next.name]) {
    acc[next.name] = {
      count: 1,
      paths: [next.path],
    };
  } else {
    acc[next.name].count += 1;
    acc[next.name].paths.push(next.path);
  }

  return acc;
}, {});

fs.writeFileSync(
  'sg-metrics.log',
  `
version:
${versions}

components:
${Object.keys(componetsStatsFormatted)
  .map(key => {
    return `name: ${key}
found: ${componetsStatsFormatted[key].count}
paths:
${componetsStatsFormatted[key].paths.join('\n')}
`;
  })
  .join('\n')}
`
);

function getVersions() {
  const packageJsonPaths = glob.sync('**/package.json', {
    ignore: ['node_modules/**', 'apps/**'],
    cwd: process.cwd(),
  });

  return packageJsonPaths
    .map(path => {
      return JSON.parse(fs.readFileSync(path), 'utf-8').version;
    })
    .join(', ');
}

function getComponents() {
  const components = [];
  const filePaths = glob.sync('**/*.{js,ts}x', {
    ignore: 'node_modules/**',
    cwd: process.cwd(),
  });

  console.log(filePaths);

  filePaths.forEach(path => {
    const importPattern = /from 'brainly-style-guide'/;
    const content = fs.readFileSync(path, 'utf8');
    const importMatch = importPattern.exec(content);

    if (importMatch !== null) {
      const ast = jsc(content, {
        parser: path.includes('.jsx') ? flowParser() : tsxParser(),
      });

      ast.find(jsc.ImportDeclaration).forEach(importDeclaration => {
        if (importDeclaration.value.source.value === 'brainly-style-guide') {
          importDeclaration.value.specifiers.forEach(specifier => {
            if (!specifier.imported.name.includes('Type')) {
              components.push({
                name: specifier.imported.name,
                path,
              });
            }
          });
        }
      });
    }
  });

  return components;
}
