const {version} = require('../package.json');
const s3 = require('@brainly/s3');
const {execSync} = require('child_process');
const fs = require('fs');
const argv = require('yargs').argv;

if (argv.env && argv.env !== 'dev' && argv.env !== 'prod') {
  throw new Error(`Invalid env: ${argv.env}`);
}

const env = argv.env || 'prod';

console.log(`Building styleguide for ${env} environment`);

const client = s3.createClient({
  s3Options: {
    region: 'eu-west-1',
  },
});

function buildFiles() {
  execSync('yarn build-new --production');
  execSync(`STORYBOOK_ENV=prod yarn build-storybook -o dist/${version}/docs`);
}

client.s3.getObject(
  {
    Bucket: `styleguide-${env}.brainly.com`,
    Key: `${version}/style-guide.css`,
  },
  function (err, data) {
    if (err) {
      if (err.name === 'AccessDenied' || err.name === 'NoSuchKey') {
        buildFiles();
      } else {
        console.log(err, err.stack);
      }
    } else if (!data || (data && data.toString('utf-8') !== version)) {
      buildFiles();
    } else {
      console.log(
        'No version change detected in package.json, skipping storybook build.'
      );
    }
  }
);
