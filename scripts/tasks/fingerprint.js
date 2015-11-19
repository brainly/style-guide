module.exports = function (gulp, plugins, consts) {
    return function () {
        var fonts = plugins.path.join(consts.SRC, 'fonts', '*');
        var images = plugins.path.join(consts.SRC, 'images', '**', '*');
        var icons = plugins.path.join(consts.SRC, 'images', 'icons', '*');
        var subjects = plugins.path.join(consts.SRC, 'images', 'subjects', '*');

        // by default, gulp would pick `assets/css` as the base,
        // so we need to set it explicitly:
        return gulp.src([fonts, images, '!' + icons, '!' + subjects], {base: './src'})
            .pipe(plugins.rev())
            .pipe(gulp.dest(consts.DIST))  // write rev'd assets to build dir
            .pipe(plugins.rev.manifest())
            .pipe(gulp.dest(consts.VERSIONED_DIST)); // write manifest to build dir
    }
};
