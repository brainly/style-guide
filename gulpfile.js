'use strict';

const gulp = require('gulp');
const argv = require('yargs').argv;
const path = require('path');
const runSequence = require('run-sequence');
const pkg = require('./package');
const plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', 'run-sequence']
});

plugins.path = path;

const consts = {
  PROJECT_DIR: __dirname,
  IS_PRODUCTION: Boolean(argv.production),
  VERSION: argv.production ? pkg.version : 'dev',
  BUCKET_NAME: argv.production ? 'styleguide.brainly.com' : 'beta.styleguide.brainly.com',
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_REGION: 'eu-west-1',
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

function getTask(task, options = {}) {
  return require(path.join(consts.PROJECT_DIR, 'scripts', 'tasks', task))(gulp, plugins, consts, options);
}

gulp.task('sass:build', getTask('sass-build'));
gulp.task('watch:sass', getTask('watch-sass'));

gulp.task('sass:docs-build', getTask('sass-docs-build'));
gulp.task('watch:docs-sass', getTask('watch-docs-sass'));

gulp.task('fingerprint', getTask('fingerprint'));
gulp.task('fingerprint-replace', getTask('fingerprint-replace'));
gulp.task('index-fingerprint-replace', getTask('index-fingerprint-replace'));

gulp.task('svgs-generate', getTask('svgs-generate'));

gulp.task('root-redirect-page', getTask('root-redirect-page'));

gulp.task('build:react-iframe-pages', getTask('build-react-pages', {iframe: true}));
gulp.task('build:react-pages', getTask('build-react-pages'));
gulp.task('build:react-interactive-pages', getTask('build-react-interactive-pages'));

gulp.task('watch:docs-templates', getTask('watch-docs-templates'));

gulp.task('upload-files', getTask('upload-files'));

gulp.task('copy-static', getTask('copy-static'));

gulp.task('clean:dist', getTask('clean-dist'));

gulp.task('build', function(done) {
  runSequence('clean:dist', 'sass:build', 'sass:docs-build', 'svgs-generate', 'build:react-pages',
    'build:react-iframe-pages', 'build:react-interactive-pages',
    'copy-static', 'fingerprint', 'fingerprint-replace', 'index-fingerprint-replace',
    'root-redirect-page', done);
});

gulp.task('watch',
  ['watch:sass', 'watch:docs-sass', 'watch:docs-templates']
);

gulp.task('deploy', function(done) {
  runSequence('build', 'upload-files', done);
});
