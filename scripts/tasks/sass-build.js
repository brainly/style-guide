const sass = require('gulp-sass')(require('sass'));

module.exports = function (gulp, plugins, consts) {
  return function (done) {
    const sassFilesSrc = plugins.path.join(consts.SRC, 'sass', 'main.scss');

    gulp
      .src(sassFilesSrc)
      .pipe(plugins.sourcemaps.init())
      .pipe(
        sass({
          outputStyle: 'compressed',
          includePaths: ['node_modules/'],
        }).on('error', done)
      )
      .pipe(
        plugins.autoprefixer({
          browsers: [
            'last 2 versions',
            'OperaMini >= 5',
            'Android >= 4',
            'Chrome >= 28',
            'Safari >= 7',
          ],
          cascade: false,
        })
      )
      .pipe(plugins.rename('style-guide.css'))
      .pipe(plugins.sourcemaps.write('.'))
      .pipe(gulp.dest(consts.VERSIONED_DIST))
      .pipe(gulp.dest(consts.CSS_OUTPUT_DIR))
      .on('error', done)
      .on('end', done);
  };
};
