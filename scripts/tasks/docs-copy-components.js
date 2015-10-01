module.exports = function (gulp, plugins, consts) {
    return function () {
        var componentsHtml = plugins.path.join(consts.COMPONENTS, '/**/*.html');
        var docsOutputPath = plugins.path.join(consts.VERSIONED_DIST, 'docs');

        return gulp.src(componentsHtml, {base: consts.SRC})
            .pipe(gulp.dest(docsOutputPath));
    }
};
