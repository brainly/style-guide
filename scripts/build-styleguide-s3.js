const {version} = require('../package.json');
const s3 = require('@brainly/s3');
const {execSync} = require('child_process');

const client = s3.createClient({
  s3Options: {
    region: 'eu-west-1',
  },
});

client.s3.headObject(
  {
    Bucket: 'styleguide.brainly.com',
    Key: `new-deploy/${version}/style-guide.css`,
  },
  function (err, data) {
    if (err) {
      console.log(err, err.stack);
      return;
    }

    if (!data || (data && data.toString('utf-8') !== version)) {
      execSync('yarn build');
    } else {
      console.log(
        'No version change detected in package.json, skipping build.'
      );
    }
  }
);
