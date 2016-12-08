module.exports = function (gulp, plugins, consts) {
    return function (done) {
        var docsSources = plugins.path.join(consts.DOCS, '**', '*.{html,yml}');
        var componentsTemplatesSources = plugins.path.join(consts.COMPONENTS, '**', '*.html');

        plugins.livereload.listen();
        return gulp.watch([docsSources, componentsTemplatesSources], function () {
            plugins.runSequence('jekyll:docs', 'docs:copy-components', 'fingerprint-replace', 'index-fingerprint-replace');
        });
    }
};
