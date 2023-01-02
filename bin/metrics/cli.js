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
      --ignore         Pattern to ignore files
    `,
  flags: {
    dry: {
      type: 'boolean',
      default: false,
    },
    ignore: {
      type: 'string',
      default: null,
    },
  },
  alias: {
    h: 'help',
  },
});

main(command.input, {
  dry: command.flags.dry,
  ignore: command.flags.ignore,
})
  .then(() => {
    process.exit(0);
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.log(err);
    process.exit(1);
  });
