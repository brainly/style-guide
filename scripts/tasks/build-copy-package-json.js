module.exports = function(gulp, plugins, consts) {
  return function() {
    const packageJsonPath = plugins.path.join(consts.PROJECT_DIR, 'package.json');
    const dataOutputPath = plugins.path.join(consts.SRC, 'docs', '_data');

    return gulp.src(packageJsonPath)
      .pipe(gulp.dest(dataOutputPath));
  };
};
