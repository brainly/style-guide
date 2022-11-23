#!/usr/bin/env node

const {main} = require('./main');
const meow = require('meow');

const command = meow({
  description: 'CLI tool for collecting styleguide metrics.',
  help: `
    Usage
      $ yarn sg-metrics [options...] <paths>
    Options
      --dry            Dry run (no data is send to database)
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

main(command.input, {
  dry: command.flags.dry,
})
  .then(() => {
    process.exit(0);
  })
  .catch(err => {
    console(err);
    process.exit(1);
  });
