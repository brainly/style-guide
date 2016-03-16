module.exports = function (gulp, plugins, consts) {
  return function () {
    var manifest = require(plugins.path.join(consts.VERSIONED_DIST, 'rev-manifest'));
    var indexHtmlPath = plugins.path.join(consts.VERSIONED_DIST, 'docs', 'index.html');

    return gulp.src(indexHtmlPath)
      .pipe(plugins.replace(/%%(.*?)%%/g, function(string, path) {
        return manifest[path];
      }))
      .pipe(gulp.dest(plugins.path.join(consts.VERSIONED_DIST, 'docs')));
  }
};
