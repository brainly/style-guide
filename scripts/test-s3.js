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
    Bucket: 'style-guide.brainly.com',
    Key: `index.html`,
  },
  function(notExist) {
    console.log(notExist);
  }
);
