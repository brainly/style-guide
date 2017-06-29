module.exports = function(gulp, plugins, consts) {
  return function(done) {
    if (!consts.AWS_ACCESS_KEY || !consts.AWS_SECRET_ACCESS_KEY) {
      console.error('AWS_ACCESS_KEY and AWS_SECRET_ACCESS_KEY environment constiables needs to be set');
      done();
      return;
    }

    const s3 = require('s3');

    const client = s3.createClient({
      s3Options: {
        accessKeyId: consts.AWS_ACCESS_KEY,
        secretAccessKey: consts.AWS_SECRET_ACCESS_KEY,
        region: consts.AWS_REGION
      }
    });

    client.s3.headObject({
      Bucket: consts.BUCKET_NAME,
      Key: `${consts.VERSION}/style-guide.css`
    }, function(notExits, data) {
      if (notExits) {
        const params = {
          localDir: consts.DIST,
          s3Params: {
            Bucket: consts.BUCKET_NAME
          }
        };
        const uploader = client.uploadDir(params);

        uploader.on('error', function(err) {
          console.error('unable to upload:', err.stack);
        });
        uploader.on('progress', function() {
          console.log('Upload progress', uploader.progressAmount, uploader.progressTotal);
        });
        uploader.on('end', done);
      } else {
        throw new Error('Version already exists');
      }
    });
  };
};
