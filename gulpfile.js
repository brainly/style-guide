'use strict';

const gulp = require('gulp');
const argv = require('yargs').argv;
const path = require('path');
const sassCompiler = require('sass');
const plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  postRequireTransforms: {
    sass(sass) {
      return sass(sassCompiler);
    },
  },
});
const CONSTANTS = require('./scripts/constants');

plugins.path = path;

const consts = {
  PROJECT_DIR: __dirname,
  IS_PRODUCTION: Boolean(argv.production),
  VERSION: argv.version || 'latest',
  get SRC() {
    return path.join(this.PROJECT_DIR, 'src');
  },
  get DIST() {
    return path.join(this.PROJECT_DIR, 'dist');
  },
  get ASSETS_DIST() {
    return path.join(this.PROJECT_DIR, 'assets');
  },
  get DOCS() {
    return path.join(this.SRC, 'docs');
  },
  get VERSIONED_DIST() {
    return path.join(this.DIST, this.VERSION);
  },
  get COMPONENTS() {
    return path.join(this.SRC, 'components');
  },
  get LATEST_DIST() {
    return path.join(this.DIST, 'latest');
  },
  ...CONSTANTS,
};

function getTask(task, options = {}) {
  return require(path.join(consts.PROJECT_DIR, 'scripts', 'tasks', task))(
    gulp,
    plugins,
    consts,
    options
  );
}

gulp.task('sass-colors:build', getTask('sass-colors-build'));
gulp.task('sass:build', getTask('sass-build'));
gulp.task('fingerprint', getTask('fingerprint'));
gulp.task('fingerprint-replace', getTask('fingerprint-replace'));
gulp.task('svgs-generate', getTask('svgs-generate'));
gulp.task('root-redirect-page', getTask('root-redirect-page'));
gulp.task('clean:assets', getTask('clean-assets'));
gulp.task('copy-assets', getTask('copy-assets'));

gulp.task(
  'build-assets',
  gulp.series(
    'sass-colors:build',
    'svgs-generate',
    'fingerprint',
    'fingerprint-replace'
  )
);

gulp.task(
  'build-package-assets',
  gulp.series('clean:assets', 'sass:build', 'svgs-generate', 'copy-assets')
);

gulp.task('build', gulp.series('build-assets', 'root-redirect-page'));
