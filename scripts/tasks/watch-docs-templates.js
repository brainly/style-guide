module.exports = function(gulp, plugins, consts) {
  return function() {
    const docsSources = plugins.path.join(consts.DOCS, '/**/*.{jsx,js}');
    const componentsHtml = plugins.path.join(
      consts.COMPONENTS,
      '/**/*.{jsx,js}'
    );

    plugins.livereload.listen();
    return gulp.watch(
      [docsSources, componentsHtml],
      gulp.series(
        'build:react-pages',
        'build:react-iframe-pages',
        'build:react-interactive-pages',
        'fingerprint-replace',
        'index-fingerprint-replace'
      )
    );
  };
};
