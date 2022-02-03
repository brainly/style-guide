#!/usr/bin/env node

const glob = require('glob');
const inquirer = require('inquirer');
const path = require('path');
const exec = require('child_process').execSync;
const chalk = require('chalk');

const transformsDir = path.join(__dirname, '/', 'transforms');
const jscodeshiftExecutable = require.resolve('.bin/jscodeshift');

const TRANSFORMER_INQUIRER_CHOICES = [
  {
    name: 'replace-colors-rebranding: Replaces old colors.',
    value: 'replace-colors-rebranding',
  },
];

const PARSER_INQUIRER_CHOICES = [
  {
    name: 'JavaScript',
    value: 'babel',
  },
  {
    name: 'JavaScript with Flow',
    value: 'flow',
  },
  {
    name: 'TypeScript',
    value: 'tsx',
  },
];

function expandFilePathIfNeeded(filePath) {
  return filePath.includes('*') ? glob.sync(filePath) : filePath;
}

async function runTransform({files, parser = 'babel', transformer}) {
  const transformPath = path.join(transformsDir, `${transformer}.js`);

  let args = [];

  args.push('--verbose=0');
  // args.push('--dry');

  args.push('--ignore-pattern=**/node_modules/**');

  args.push('--parser', parser);

  if (parser === 'tsx') {
    args.push('--extensions=tsx,ts,jsx,js');
  } else {
    args.push('--extensions=jsx,js');
  }

  args = args.concat(['--transform', transformPath]);

  args = args.concat(files);

  console.log(`Executing: ${chalk.yellow(`jscodeshift ${args.join(' ')}`)}`);

  const command = [jscodeshiftExecutable, ...args].join(' ');

  try {
    exec(command, {encoding: 'utf-8', stdio: 'inherit'});
  } catch (err) {
    console.log(err);
  }
}

const run = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'filePath',
        message: 'On which file or directory should the codemod be applied?',
        default: './test/*',
        filter: filePath => filePath.trim(),
      },
      {
        type: 'list',
        name: 'parser',
        message: 'Which dialect of JavaScript do you use?',
        default: 'babel',
        pageSize: PARSER_INQUIRER_CHOICES.length,
        choices: PARSER_INQUIRER_CHOICES,
      },
      {
        type: 'list',
        name: 'transformer',
        message: 'Which transform would you like to apply?',
        pageSize: TRANSFORMER_INQUIRER_CHOICES.length,
        choices: TRANSFORMER_INQUIRER_CHOICES,
      },
    ])
    .then(answers => {
      const {filePath, transformer, parser} = answers;

      const filesExpanded = expandFilePathIfNeeded(filePath);

      if (!filesExpanded.length) {
        console.log(`No files found matching ${filePath.join(' ')}`);
        return null;
      }

      return runTransform({
        files: filesExpanded,
        parser,
        transformer,
      });
    });
};

module.exports = {
  run,
};
