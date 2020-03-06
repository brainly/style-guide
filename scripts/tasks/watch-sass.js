module.exports = function(gulp, plugins, consts) {
  return function() {
    const mainSassSources = plugins.path.join(
      consts.SRC,
      'sass',
      '**',
      '*.scss'
    );
    const componentsSassSources = plugins.path.join(
      consts.COMPONENTS,
      '**',
      '*.scss'
    );

    plugins.livereload.listen();
    return gulp.watch(
      [mainSassSources, componentsSassSources],
      gulp.series('sass:build', 'fingerprint-replace')
    );
  };
};
