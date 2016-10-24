module.exports = function (gulp, plugins, consts) {
    return function () {
        var componentsHtml = plugins.path.join(consts.COMPONENTS, '/**/*.html');
        var docsOutputPath = plugins.path.join(consts.SRC, 'docs', '_includes');

        return gulp.src(componentsHtml, {base: consts.SRC})
            .pipe(gulp.dest(docsOutputPath));
    }
};
