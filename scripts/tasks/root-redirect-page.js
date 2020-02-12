module.exports = function (gulp, plugins, consts) {
  return function (next) {
    const fs = require('fs');

    const outputPath = plugins.path.join(consts.DIST, 'index.html');
    let redirectPageContent = fs.readFileSync(
      plugins.path.join(consts.SRC, 'root-redirect.html'),
      'utf8'
    );

    redirectPageContent = redirectPageContent.replace(
      /#LATEST_VERSION#/g,
      consts.VERSION
    );

    fs.writeFileSync(outputPath, redirectPageContent);
    next();
  };
};