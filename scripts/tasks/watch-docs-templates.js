module.exports = function(gulp, plugins, consts) {
  return function() {
    const docsSources = plugins.path.join(consts.DOCS, '/**/*.{html,yml}');

    plugins.livereload.listen();
    return gulp.watch([docsSources], function() {
      plugins.runSequence('jekyll:docs', 'docs:react-pages', 'docs:copy-components', 'fingerprint-replace',
        'index-fingerprint-replace');
    });
  };
};
