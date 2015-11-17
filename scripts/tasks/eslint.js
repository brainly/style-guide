var eslint = require('gulp-eslint');
var friendlyFormatter = require('eslint-friendly-formatter');

module.exports = function (gulp) {
  return function () {
    gulp.src(['**/*.js', '!node_modules/**', '!src/docs/**.js'])
      .pipe(eslint())
      .pipe(eslint.format(friendlyFormatter))
      .pipe(eslint.failAfterError())
      .pipe(eslint.results(function (results) {
        // Called once for all ESLint results.
        console.log('Total Results: ' + results.length);
        console.log('Total Warnings: ' + results.warningCount);
        console.log('Total Errors: ' + results.errorCount)
      }));

  }
};
