module.exports = function (gulp, plugins, consts) {
  return function () {
    const componentsHtml = plugins.path.join(consts.COMPONENTS, '/**/*.jsx');

    plugins.livereload.listen();
    return gulp.watch(componentsHtml, function () {
      plugins.runSequence('jekyll:docs', 'docs:copy-components','build:react-pages', 'fingerprint-replace', 'index-fingerprint-replace');
    });
  }
};
