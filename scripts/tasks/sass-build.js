module.exports = function (gulp, plugins, consts) {
  return function () {
    var sassFilesSrc = plugins.path.join(consts.SRC, 'sass', 'main.scss');

    return gulp.src(sassFilesSrc)
            .pipe(plugins.sass({outputStyle: 'compressed'})
                .on('error', plugins.sass.logError))
            .pipe(plugins.autoprefixer({
              browsers: ['last 2 versions', 'ie 8', 'ie 9'],
              cascade: false
            }))
            .pipe(plugins.minifyCss())
            .pipe(plugins.rename('style-guide.css'))
            .pipe(gulp.dest(consts.VERSIONED_DIST))
  };
};
