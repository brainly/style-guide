module.exports = function (gulp, plugins, consts) {
  const buildClasses = (gulp, plugins, consts) => {
    return gulp
      .src(plugins.path.join(consts.SRC, '**', '*.(jsx?|tsx?)'))
      .pipe();
  };

  return function () {
    return gulp.watch(
      [plugins.path.join(consts.SRC, '**', '*.(jsx?|tsx?)')],
      gulp.series(buildClasses)
    );
  };
};
