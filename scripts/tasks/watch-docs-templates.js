module.exports = function (gulp, plugins, consts) {
    return function (done) {
        var docsSources = plugins.path.join(consts.DOCS, '**', '*.{html,yml}');

        plugins.livereload.listen();
        return gulp.watch([docsSources], function () {
            plugins.runSequence('jekyll:docs', 'docs:copy-components', 'fingerprint-replace', 'index-fingerprint-replace');
        });
    }
};
