module.exports = function (gulp, plugins, consts) {
    return function (done) {
        var docsSassSources = plugins.path.join(consts.DOCS, '_sass', '*.scss');

        plugins.livereload.listen();
        return gulp.watch([docsSassSources], ['sass:docs-build']);
    }
};
