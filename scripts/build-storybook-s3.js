const {version} = require('../package.json');
const s3 = require('@brainly/s3');
const {execSync} = require('child_process');
const fs = require('fs');

const client = s3.createClient({
  s3Options: {
    region: 'eu-west-1',
  },
});

client.s3.getObject(
  {
    Bucket: 'style-guide.brainly.com',
    Key: `.sg-version`,
  },
  function (err, data) {
    if (err) {
      console.log(err, err.stack);
      return;
    }

    if (!data || (data && data.toString('utf-8') !== version)) {
      execSync('STORYBOOK_ENV=prod yarn build-storybook');
      fs.writeFileSync('storybook-static/.sg-version', `${version}`, 'utf-8');
    } else {
      console.log(
        'No version change detected in package.json, skipping storybook build.'
      );
    }
  }
);
