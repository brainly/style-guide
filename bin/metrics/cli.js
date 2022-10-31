const {main} = require('./main');
const yargs = require('yargs');

const commitID = yargs.argv._[0];
const commitDate = yargs.argv._[1];

main(commitID, commitDate);
