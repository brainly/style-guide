const revFile = require('rev-file');

const glob = require('glob');

const path = require('path');

const logos = glob
  .sync('images/logos/**/*.svg', {
    cwd: path.join(__dirname),
  })
  // @ts-expect-error TS7006
  .reduce((acc, next) => {
    const key = path.basename(next).split('.')[0];

    acc[key] = path.relative(
      __dirname,
      revFile.sync(path.join(__dirname, next))
    );
    return acc;
  }, {});

module.exports = `export default ${JSON.stringify(logos)}`;
