module.exports = function(gulp, plugins, consts) {
  return function() {
    const staticJS = plugins.path.join(consts.SRC, 'js', '*');
    const output = plugins.path.join(consts.VERSIONED_DIST, 'docs');

    return gulp.src([staticJS], {base: './src'})
      .pipe(gulp.dest(output));
  };
};
