module.exports = function(gulp, plugins, consts) {
  return function() {
    const indexHtmlPath = plugins.path.join(consts.VERSIONED_DIST, 'docs', 'index.html');
    const manifest = require(plugins.path.join(consts.VERSIONED_DIST, 'rev-manifest'));
    const output = plugins.path.join(consts.VERSIONED_DIST, 'docs');

    return gulp.src(indexHtmlPath)
      .pipe(plugins.replace(/%%(.*?)%%/g, function(string, path) {
        return manifest[path];
      }))
      .pipe(gulp.dest(output));
  };
};
