module.exports = function(gulp, plugins, consts) {
  return function() {
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

    return gulp
      .src([fonts, images, `!${icons}`, `!${subjects}`, `!${subjectsMono}`], {
        base: './src',
      })
      .pipe(gulp.dest(consts.ASSETS_DIST)); // write to assts
  };
};
