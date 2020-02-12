module.exports = function(gulp, plugins, consts) {
  return function(done) {
    const s3 = require('s3');

    const client = s3.createClient({
      s3Options: {
        region: consts.AWS_REGION,
      },
    });

    client.s3.headObject(
      {
        Bucket: consts.BUCKET_NAME,
        Key: `${consts.VERSION}/style-guide.css`,
      },
      function(notExist) {
        if (!notExist) {
          // no upload when file exist
          done();
          return;
        }

        const params = {
          localDir: consts.DIST,
          s3Params: {
            Bucket: consts.BUCKET_NAME,
          },
        };
        const uploader = client.uploadDir(params);

        uploader.on('error', function(err) {
          console.error('unable to upload:', err.stack);
        });
        uploader.on('progress', function() {
          console.log(
            'Upload progress',
            uploader.progressAmount,
            uploader.progressTotal
          );
        });
        uploader.on('end', done);
      }
    );
  };
};
