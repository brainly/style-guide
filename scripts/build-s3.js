const {version} = require('../package.json');
const s3 = require('@brainly/s3');
const {execSync} = require('child_process');
const argv = require('yargs').argv;
const path = require('path');
const fs = require('fs');

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
  function (err) {
    if (err) {
      // NoSuchKey - we can list bucket files but file is not found
      if (err.name === 'NoSuchKey') {
        console.log(`${version}/style-guide.css is not found. Building files.`);
        buildFiles();
      } else {
        console.error(err, err.stack);
      }
    } else {
      console.log(
        'No version change detected in package.json, skipping build.'
      );

      // CodeBuild deploy project requires 'dist' folder to not be empty, so we create mock file.
      fs.mkdirSync(path.resolve(__dirname, '..', 'dist'));
      fs.writeFileSync(path.resolve(__dirname, '..', 'dist', '.temp'), '');
    }
  }
);
