#!/usr/bin/env node

const glob = require('glob');
const inquirer = require('inquirer');
const path = require('path');
const exec = require('child_process').execSync;
const chalk = require('chalk');
const meow = require('meow');

const transformsDir = path.join(__dirname, '/', 'transforms');
const jscodeshiftExecutable = require.resolve('.bin/jscodeshift');

const TRANSFORMER_INQUIRER_CHOICES = [
  {
    name: 'replace-colors-rebranding: Replaces old colors. 🌈',
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

const COMPONENTS_NAMES_INQUIRER_CHOICES = [
  'Icon',
  'MobileIcon',
  'SubjectIcon',
  'MathSymbol',
  'IconAsButton',
  'Text',
  'TextBit',
  'Link',
  'Headline',
  'Bubble',
  'Box',
  'Label',
  'CardHole',
  'Spinner',
  'SpinnerContainer',
  'Counter',
  'Overlay',
  'FileHandler',
];

function expandFilePathIfNeeded(filePath, parser) {
  let extensions = '{jsx,js}';

  if (parser === 'tsx') {
    extensions = '{tsx,ts,jsx,js}';
  }

  return filePath.includes('*')
    ? glob.sync(`${filePath}${extensions}`)
    : filePath;
}

async function runTransform({
  flags,
  files,
  parser,
  transformer,
  componentsSet,
}) {
  const transformPath = path.join(transformsDir, `${transformer}.js`);

  let args = [];

  args.push('--verbose=0');

  if (flags.dry) {
    args.push('--dry');
  }

  if (flags.jscodeshift) {
    args.push(flags.jscodeshift);
  }

  args.push('--ignore-pattern=**/node_modules/**');

  args.push(`--parser=${parser}`);

  if (parser === 'tsx') {
    args.push('--extensions=tsx,ts,jsx,js');
  } else {
    args.push('--extensions=jsx,js');
  }

  if (componentsSet) args.push(`--components=${componentsSet.join(',')}`);

  args = args.concat(`--transform=${transformPath}`);

  args = args.concat(files);

  console.log(`Executing: ${chalk.yellow(`jscodeshift ${args.join(' ')}`)}`);

  const command = [jscodeshiftExecutable, ...args].join(' ');

  try {
    exec(command, {encoding: 'utf-8', stdio: 'inherit'});
  } catch (err) {
    console.log(err);
  }
}

const run = async () => {
  const cli = meow(
    {
      description: 'Codemods for updating React APIs.',
      help: `
    Usage
      $ yarn sg-codemod <...options>
    Options
      --dry          Dry run (no changes are made to files)
      --jscodeshift  (Advanced) Pass options directly to jscodeshift
    `,
    },
    {
      boolean: ['dry', 'help'],
      string: ['_'],
      alias: {
        h: 'help',
      },
    }
  );

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'filePath',
        message: 'On which file or directory should the codemod be applied?',
        default: '.',
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
        type: 'list',
        name: 'componentsSetType',
        message: 'To which components would you like to apply the transform?',
        pageSize: 2,
        choices: [
          {name: '✨ all ✨', value: 'all'},
          {name: 'or select from a list below ⬇️', value: 'custom'},
        ],
        when: answers => answers.transformer === 'replace-colors-rebranding',
      },
      {
        type: 'checkbox',
        name: 'componentsSet',
        message: 'Select components from a list:',
        when: answers => answers.componentsSetType !== 'all',
        pageSize: COMPONENTS_NAMES_INQUIRER_CHOICES.length,
        choices: COMPONENTS_NAMES_INQUIRER_CHOICES,
      },
    ])
    .then(answers => {
      const {filePath, transformer, parser, componentsSetType} = answers;
      let {componentsSet} = answers;

      if (componentsSetType === 'all') componentsSet = ['all'];

      const filesExpanded = expandFilePathIfNeeded(filePath, parser);

      if (!filesExpanded.length) {
        console.log(`No files found matching ${filePath.join(' ')}`);
        return null;
      }

      return runTransform({
        flags: cli.flags,
        files: filesExpanded,
        parser,
        transformer,
        componentsSet,
      });
    })
    .then(() => {
      console.log('✨ Thanks for using our script! ✨');
    });
};

module.exports = {
  run,
};
