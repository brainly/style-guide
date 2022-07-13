const {execSync} = require('child_process');

module.exports = function (gulp, plugins, consts) {
  return function (done) {
    execSync(`build-storybook -o dist/${consts.VERSION}/docs`, {
      maxBuffer: 100000000,
    });
    done();
  };
};
