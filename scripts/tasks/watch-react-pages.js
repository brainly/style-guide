module.exports = function(gulp, plugins, consts) {
  return function() {
    const componentsHtml = plugins.path.join(consts.COMPONENTS, '/**/*.jsx');

    plugins.livereload.listen();
    return gulp.watch(componentsHtml, ['build:react-pages']);
  };
};
