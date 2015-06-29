'use strict';

var gulp = require('gulp');
var fs = require('fs');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var fontcustom = require('gulp-fontcustom');
var base64 = require('gulp-base64');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');

gulp.task('sass:docs', function () {
    gulp.src('./docs/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie 8', 'ie 9'],
            cascade: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./docs/css'))
        .pipe(livereload());
});

gulp.task('sass:framework-build', function () {
    gulp.src('./framework/src/sass/main.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie 8', 'ie 9'],
            cascade: false
        }))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('./framework/dist/css/'))
});


gulp.task('icons:generate-fonts', function() {
    return gulp.src("./framework/src/icons/*.svg")
        .pipe(fontcustom({
            font_name: 'brainly-icons', // defaults to 'fontcustom'
            templates: 'scss-rails'
        }))
        .pipe(gulp.dest("./framework/src/sass/fonts"));
});

gulp.task('icons:create-data-file', function() {
    var fontIconsContents = fs.readFileSync('./framework/src/sass/fonts/_brainly-icons-rails.scss'),
        splitByHeader = fontIconsContents.toString().split('[data-icon]:before,'),
        withoutHeader = splitByHeader[splitByHeader.length - 1];

    fs.writeFileSync('./framework/src/sass/_icons-data.scss', withoutHeader);
});

gulp.task('icons:inline-fonts', function() {
    return gulp.src('./framework/src/sass/_icons-embed-template.scss')
        .pipe(base64())
        .pipe(rename('_icons-embed.scss'))
        .pipe(gulp.dest('./framework/src/sass'));
});

gulp.task('icons:cleanup', function() {
    return gulp.src(['./framework/src/sass/fonts/', './.fontcustom-manifest.json'], {read: false})
        .pipe(clean());
});

gulp.task('icons', function(done) {
    runSequence('icons:generate-fonts', 'icons:create-data-file', 'icons:inline-fonts', 'icons:cleanup', done);
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./docs/sass/**/*.scss', ['sass:docs']);
    gulp.watch('./framework/src/sass/**/*.scss', ['sass:docs']);
});
