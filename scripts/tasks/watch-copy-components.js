module.exports = function(gulp, plugins, consts) {
  return function() {
    const componentsTemplatesSources = plugins.path.join(consts.COMPONENTS, '/**/*.html');


    plugins.livereload.listen();
    return gulp.watch(componentsTemplatesSources, ['build:copy-components']);
  };
};
