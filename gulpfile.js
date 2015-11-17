'use strict';

var gulp = require('gulp');
var argv = require('yargs').argv;
var path = require('path');
var runSequence = require('run-sequence');
var pkg = require('./package');
var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'run\-sequence']
});

plugins.path = path;

var consts = {
    PROJECT_DIR: __dirname,
    VERSION: argv.production ? pkg.version : 'dev',
    get SRC() {
        return path.join(this.PROJECT_DIR, 'src');
    },
    get DIST() {
        return path.join(this.PROJECT_DIR, 'dist');
    },
    get DOCS() {
        return path.join(this.SRC, 'docs');
    },
    get VERSIONED_DIST() {
        return path.join(this.DIST, this.VERSION);
    },
    get COMPONENTS() {
        return path.join(this.SRC, 'components');
    }
};

function getTask(task) {
  return require(path.join(consts.PROJECT_DIR, 'scripts', 'tasks', task))(gulp, plugins, consts);
}

gulp.task('sass:build', getTask('sass-build'));
gulp.task('sass:docs-build', getTask('sass-docs-build'));

gulp.task('fingerprint', getTask('fingerprint'));
gulp.task('fingerprint-replace', getTask('fingerprint-replace'));

gulp.task('clean:dist', getTask('clean-dist'));

gulp.task('svgs-generate', getTask('svgs-generate'));

gulp.task('jekyll:docs', getTask('jekyll-docs'));

gulp.task('docs:copy-components', getTask('docs-copy-components'));

gulp.task('watch:sass', getTask('watch-sass'));
gulp.task('watch:docs-templates', getTask('watch-docs-templates'));
gulp.task('watch:docs-sass', getTask('watch-docs-sass'));
gulp.task('watch', ['watch:sass', 'watch:docs-templates', 'watch:docs-sass']);

gulp.task('scss-lint', getTask('scss-lint'));
gulp.task('scss-unused-variables', getTask('scss-unused-variables'));

gulp.task('eslint', getTask('eslint'));

gulp.task('ci', ['scss-lint', 'scss-unused-variables', 'eslint']);

gulp.task('build', function (done) {
  runSequence('clean:dist', 'eslint', 'sass:build',
              'svgs-generate', 'jekyll:docs', 'docs:copy-components',
              'fingerprint', 'fingerprint-replace', 'sass:docs-build', done);
});
