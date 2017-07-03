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

function getTask(task) {
  return require(path.join(consts.PROJECT_DIR, 'scripts', 'tasks', task))(gulp, plugins, consts);
}

gulp.task('sass:build', getTask('sass-build'));
gulp.task('watch:sass', getTask('watch-sass'));

gulp.task('sass:docs-build', getTask('sass-docs-build'));
gulp.task('watch:docs-sass', getTask('watch-docs-sass'));

gulp.task('fingerprint', getTask('fingerprint'));
gulp.task('fingerprint-replace', getTask('fingerprint-replace'));
gulp.task('index-fingerprint-replace', getTask('index-fingerprint-replace'));


gulp.task('svgs-generate', getTask('svgs-generate'));

gulp.task('docs:copy-components', getTask('docs-copy-components'));
gulp.task('build:copy-components', getTask('build-copy-components'));
gulp.task('watch:copy-components', getTask('watch-copy-components'));

gulp.task('build:copy-package-json', getTask('build-copy-package-json'));

gulp.task('root-redirect-page', getTask('root-redirect-page'));

gulp.task('build:react-pages', getTask('build-react-pages'));
gulp.task('docs:react-pages', getTask('docs-react-pages'));
gulp.task('watch:react-pages', getTask('watch-react-pages'));

gulp.task('jekyll:docs', getTask('jekyll-docs'));
gulp.task('watch:docs-templates', getTask('watch-docs-templates'));

gulp.task('upload-files', getTask('upload-files'));

gulp.task('clean:dist', getTask('clean-dist'));

gulp.task('build', function(done) {
  runSequence('clean:dist', 'sass:build', 'sass:docs-build', 'svgs-generate', 'build:copy-components',
    'build:react-pages', 'build:copy-package-json', 'jekyll:docs', 'docs:copy-components', 'docs:react-pages',
    'fingerprint', 'fingerprint-replace', 'index-fingerprint-replace', 'root-redirect-page', done);
});

gulp.task('watch',
  ['watch:sass', 'watch:docs-sass', 'watch:copy-components', 'watch:react-pages', 'watch:docs-templates']
);

gulp.task('deploy', function(done) {
  runSequence('build', 'upload-files', done);
});
