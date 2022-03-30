const {version} = require('../package.json');
const s3 = require('@brainly/s3');
const {execSync} = require('child_process');
const fs = require('fs');
const path = require('path');

const client = s3.createClient({
  s3Options: {
    region: 'eu-west-1',
  },
});

client.s3.getObject(
  {
    Bucket: 'styleguide-prod.brainly.com',
    Key: `${version}/style-guide.css`,
  },
  function (err) {
    if (err) {
      if (err.name === 'AccessDenied') {
        execSync('yarn build --production');
      } else {
        console.log(err, err.stack);
      }
    } else {
      console.log(
        'No version change detected in package.json, skipping build.'
      );
      // making placeholder file to avoid UPLOAD_ARTIFACTS phase failing when no file is found
      const distPath = path.join(__dirname, '..', 'dist');

      fs.mkdirSync(distPath);
      fs.writeFileSync(
        `${distPath}/build-styleguide-s3-placeholder`,
        'placeholder file to upload in case build is skipped'
      );
    }
  }
);
