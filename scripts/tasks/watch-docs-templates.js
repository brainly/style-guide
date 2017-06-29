module.exports = function(gulp, plugins, consts) {
  return function() {
    const docsSources = plugins.path.join(consts.DOCS, '/**/*.{html,yml}');

    plugins.livereload.listen();
    return gulp.watch([docsSources], function() {
      plugins.runSequence('jekyll:docs', 'fingerprint-replace', 'index-fingerprint-replace');
    });
  };
};
