#!/usr/bin/env node

const {main} = require('./main');

const commitID = process.argv[2];
const commitDate = parseInt(process.argv[3], 10);

main(commitID, commitDate);
