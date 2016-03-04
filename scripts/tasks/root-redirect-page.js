module.exports = function (gulp, plugins, consts) {
  return function () {
    var fs = require('fs');

    var outputPath = plugins.path.join(consts.DIST, 'index.html');
    var redirectPageContent = fs.readFileSync(plugins.path.join(consts.SRC, 'root-redirect.html'), "utf8");

    redirectPageContent = redirectPageContent.replace(/#LATEST_VERSION#/g, consts.VERSION);

    fs.writeFileSync(outputPath, redirectPageContent);

  };
};
