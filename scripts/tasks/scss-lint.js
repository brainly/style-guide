module.exports = function (gulp, plugins, consts) {
    return function() {
        return gulp.src([plugins.path.join(consts.SRC, '**', '*.scss'), plugins.path.join('!', consts.DOCS, '**')])
            .pipe(plugins.scssLint({
            'maxBuffer': 1024*1000
            }))
            .pipe(plugins.scssLint.failReporter());
    }
};
