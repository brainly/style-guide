module.exports = function(gulp, plugins, consts) {
  return function() {
    const docsSources = plugins.path.join(consts.DOCS, '/**/*.{jsx,js}');
    const componentsHtml = plugins.path.join(consts.COMPONENTS, '/**/*.{jsx,js}');


    plugins.livereload.listen();
    return gulp.watch([docsSources, componentsHtml], function() {
      plugins.runSequence('jekyll:docs', 'docs:react-pages', 'docs:copy-components', 'fingerprint-replace',
        'index-fingerprint-replace');
    });
  };
};
