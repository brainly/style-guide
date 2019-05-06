module.exports = function(gulp, plugins, consts) {
  return function() {
    const input = plugins.path.join(consts.VERSIONED_DIST, '**/*');
    const latestDist = plugins.path.join(consts.LATEST_DIST);

    return gulp.src([input])
      .pipe(gulp.dest(latestDist));
  };
};
