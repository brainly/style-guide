#!/usr/bin/env node

const glob = require('glob');
const inquirer = require('inquirer');
const path = require('path');
const exec = require('child_process').execSync;
const chalk = require('chalk');
const yargs = require('yargs');

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

const REBRANDING_COMPONENTS_NAMES_INQUIRER_CHOICES = [
  {name: 'all', value: 'all'},
  {name: 'Icon', value: 'Icon'},
  {name: 'MobileIcon', value: 'MobileIcon'},
  {name: 'SubjectIcon', value: 'SubjectIcon'},
  {name: 'MathSymbol', value: 'MathSymbol'},
  {name: 'IconAsButton', value: 'IconAsButton'},
  {name: 'Text', value: 'Text'},
  {name: 'TextBit', value: 'TextBit'},
  {name: 'Link', value: 'Link'},
  {name: 'Headline', value: 'Headline'},
  {name: 'Bubble', value: 'Bubble'},
  {name: 'Box', value: 'Box'},
  {name: 'Label', value: 'Label'},
  {name: 'CardHole', value: 'CardHole'},
  {name: 'Spinner', value: 'Spinner'},
  {name: 'SpinnerContainer', value: 'SpinnerContainer'},
  {name: 'Counter', value: 'Counter'},
  {name: 'Overlay', value: 'Overlay'},
  {name: 'FileHandler', value: 'FileHandler'},
];

function expandFilePathIfNeeded(filePath) {
  return filePath.includes('*') ? glob.sync(filePath) : filePath;
}

async function runTransform({argv, files, parser, transformer, components}) {
  const transformPath = path.join(transformsDir, `${transformer}.js`);

  let args = [];

  args.push('--verbose=0');

  if (argv.dry) {
    args.push('--dry');
  }

  args.push('--ignore-pattern=**/node_modules/**');

  args.push('--parser', parser);

  if (parser === 'tsx') {
    args.push('--extensions=tsx,ts,jsx,js');
  } else {
    args.push('--extensions=jsx,js');
  }

  if (components) args.push(`--components=${components.join(',')}`);

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
  const argv = yargs(process.argv).argv;

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
      {
        type: 'checkbox',
        name: 'components',
        message: 'To which components would you like to apply new colors?',
        default: 'all',
        when: answers => answers.transformer === 'replace-colors-rebranding',
        pageSize: REBRANDING_COMPONENTS_NAMES_INQUIRER_CHOICES.length,
        choices: REBRANDING_COMPONENTS_NAMES_INQUIRER_CHOICES,
      },
    ])
    .then(answers => {
      const {filePath, transformer, parser, components} = answers;

      const filesExpanded = expandFilePathIfNeeded(filePath);

      if (!filesExpanded.length) {
        console.log(`No files found matching ${filePath.join(' ')}`);
        return null;
      }

      return runTransform({
        argv,
        files: filesExpanded,
        parser,
        transformer,
        components,
      });
    });
};

module.exports = {
  run,
};
