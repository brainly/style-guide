module.exports = function (gulp, plugins, consts) {
    return function (done) {
        var mainSassSources = plugins.path.join(consts.SRC, 'sass', '**', '*.scss');
        var componentsSassSources = plugins.path.join(consts.COMPONENTS, '**', '*.scss');

        plugins.livereload.listen();
        return gulp.watch([mainSassSources, componentsSassSources], function () {
            return plugins.runSequence('sass:build', 'fingerprint-replace');
        });
    }
};
