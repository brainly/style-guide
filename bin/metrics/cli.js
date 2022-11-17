#!/usr/bin/env node

const {main} = require('./main');
const meow = require('meow');

const command = meow({
  description: 'CLI tool for collecting styleguide metrics.',
  help: `
    Usage
      $ yarn sg-metrics <...options> commit-hash date
    Options
      --dry    Dry run (no data is send to database)
    `,
  flags: {
    dry: {
      type: 'boolean',
      default: false,
    },
  },
  alias: {
    h: 'help',
  },
});

main(command.input[0], command.input[1], {dry: command.flags.dry});
