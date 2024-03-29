module.exports = function (gulp, plugins, consts) {
  return function () {
    const fonts = plugins.path.join(consts.SRC, 'fonts', '*');
    const images = plugins.path.join(consts.SRC, 'images', '**', '*');
    const icons = plugins.path.join(consts.SRC, 'images', 'icons', '*');
    const subjects = plugins.path.join(consts.SRC, 'images', 'subjects', '*');
    const subjectsMono = plugins.path.join(
      consts.SRC,
      'images',
      'subjects-mono',
      '*'
    );

    // by default, gulp would pick `assets/css` as the base,
    // so we need to set it explicitly:
    return gulp
      .src([fonts, images, `!${icons}`, `!${subjects}`, `!${subjectsMono}`], {
        base: './src',
      })
      .pipe(plugins.rev())
      .pipe(gulp.dest(consts.DIST)) // write rev'd assets to build dir
      .pipe(plugins.rev.manifest())
      .pipe(gulp.dest(consts.VERSIONED_DIST)); // write manifest to build dir
  };
};
