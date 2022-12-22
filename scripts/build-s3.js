const {version: packageJsonVersion} = require('../package.json');
const s3 = require('@brainly/s3');
const {execSync} = require('child_process');
const yargs = require('yargs');
const path = require('path');
const fs = require('fs');

yargs.default('detached', false);
yargs.default('latest', false);

yargs.boolean('detached');
yargs.boolean('latest');

const argv = yargs.argv;
const bucket = process.env.BUCKET;
const version = argv.latest ? 'latest' : packageJsonVersion;
const detached = argv['detached'];

console.log(`Building ${version} version`);

if (!argv.latest) {
  console.log(`Checking ${bucket} bucket.`);

  const client = s3.createClient({
    s3Options: {
      region: 'eu-west-1',
    },
  });

  client.s3.getObject(
    {
      Bucket: bucket,
      Key: `${version}/style-guide.css`,
    },
    function (err) {
      if (err) {
        // NoSuchKey - we can list bucket files and file is not found
        // AccessDenied - we can't list bucket files and file is not found or we dont have access
        if (err.name === 'NoSuchKey' || err.name === 'AccessDenied') {
          console.log(
            `${version}/style-guide.css is not found. Building files.`
          );
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
} else {
  buildFiles();
}

function buildFiles() {
  let options = '';

  if (detached) {
    options = `-d`;
  }

  execSync(`VERSION=${version} ./scripts/build.sh ${options}`);
}
