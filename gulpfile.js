'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');

gulp.task('sass:docs', function () {
    gulp.src('./docs/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./docs/css'))
        .pipe(livereload());
});

gulp.task('sass:framework-build', function () {
    gulp.src('./framework/sass/main.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('./framework/css/'))
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('./docs/sass/**/*.scss', ['sass:docs']);
    gulp.watch('./framework/sass/**/*.scss', ['sass:docs']);
});
