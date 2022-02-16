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
    Bucket: 'styleguide-prod.brainly.com',
    Key: `${version}/style-guide.css`,
  },
  function (err) {
    if (err) {
      if (err.name === 'NotFound') {
        execSync('yarn build');
      } else {
        console.log(err, err.stack);
      }
    } else {
      console.log(
        'No version change detected in package.json, skipping build.'
      );
    }
  }
);
