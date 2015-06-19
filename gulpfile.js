'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var svgSprite = require('gulp-svg-sprite');

gulp.task('sass:docs', function () {
    gulp.src('./docs/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./docs/css'))
        .pipe(livereload());
});

gulp.task('sass:framework-build', function () {
    gulp.src('./framework/src/sass/main.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('./framework/dist/css/'))
});

gulp.task('svg:sprite-generate', function(){
    gulp.src('./framework/src/icons/*.svg')
        .pipe(svgSprite({
            inline: true,
            mode: {
                symbol: {
                    sprite: '../sprite.svg'
                }
            },
            shape: {
                id: {
                    generator: 'svg-icons-%s'
                }
            }
        }))
        .pipe(gulp.dest('./framework/dist'));
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('./docs/sass/**/*.scss', ['sass:docs']);
    gulp.watch('./framework/src/sass/**/*.scss', ['sass:docs']);
});
