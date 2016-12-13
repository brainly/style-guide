module.exports = function (gulp, plugins, consts) {
    return function () {
        var packageJsonPath = plugins.path.join(consts.PROJECT_DIR, 'package.json');
        var dataOutputPath = plugins.path.join(consts.SRC, 'docs', '_data');

        return gulp.src(packageJsonPath)
            .pipe(gulp.dest(dataOutputPath));
    }
};
