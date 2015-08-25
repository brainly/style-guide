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
var del = require('del');
var runSequence = require('run-sequence');
var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
var replace = require('gulp-replace');
var svgSprite = require('gulp-svg-sprite');
var pkg = require('./package');
var rev = require('gulp-rev');
var fingerprint = require('gulp-fingerprint');

gulp.task('sass:docs', function () {
    return gulp.src('./docs/sass/**/*.scss')
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

gulp.task('sass:build', function () {
    return gulp.src('./src/sass/main.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie 8', 'ie 9'],
            cascade: false
        }))
        .pipe(rename('style-guide-'+ pkg.version + '.min.css'))
        .pipe(gulp.dest('./dist'))
});


gulp.task('fingerprint', function () {
    // by default, gulp would pick `assetscss` as the base,
    // so we need to set it explicitly:
    return gulp.src(['./src/fonts/*', './src/images/*'], {base: './src'})
        .pipe(rev())
        .pipe(gulp.dest('./dist'))  // write rev'd assets to build dir
        .pipe(rev.manifest())
        .pipe(gulp.dest('./dist')); // write manifest to build dir
});

gulp.task('fingerprint-replace', function () {
    var manifest = require('./dist/rev-manifest');

    return gulp.src('./dist/style-guide-'+ pkg.version + '.min.css')
        .pipe(fingerprint(manifest))
        .pipe(gulp.dest('./dist'));
});

gulp.task('icons:generate-fonts', function() {
    return gulp.src("./src/icons/")
        .pipe(fontcustom({
            font_name: 'brainly-icons', // defaults to 'fontcustom'
            templates: 'scss',
            'css-selector': '.mint-icon-{{glyph}}'
        }))
        .pipe(gulp.dest('./src/sass/fonts'));
});

gulp.task('icons:create-data-file', function() {
    var fontIconsContents = fs.readFileSync('./src/sass/fonts/_brainly-icons.scss'),
        splitByHeader = fontIconsContents.toString().split('[data-icon]:before,'),
        withoutHeader = splitByHeader[splitByHeader.length - 1];

    fs.writeFileSync('./src/sass/_icons-data.scss', withoutHeader);
});

gulp.task('icons:inline-fonts', function() {
    return gulp.src('./src/sass/_icons-embed-template.scss')
        .pipe(base64())
        .pipe(rename('_icons-embed.scss'))
        .pipe(gulp.dest('./src/sass'));
});

gulp.task('icons:cleanup', function(done) {
    del(['./src/sass/fonts/', './.fontcustom-manifest.json'], done);
});

gulp.task('clean:dist', function(done){
    del(['./dist'], done);
});

gulp.task('icons', function(done) {
    runSequence('icons:generate-fonts', 'icons:create-data-file', 'icons:inline-fonts', 'icons:cleanup', done);
});

gulp.task('subjects', function(done) {
    var config = {
        mode: {
            css: {
                dest: '',
                render: {
                    scss: {
                        dest: '_subjects-icons.scss'
                    }
                },
                prefix: '.mint-subject-icon--',
                bust: false,
                sprite: '../images/subjects-icons.svg',
                dimensions: true
            }
        }
    };

    return gulp.src('./src/images/subjects/*.svg')
        .pipe(svgSprite(config))
        .pipe(replace('url(../images/subjects-icons.svg', 'url($mintImagesPath + \'subjects-icons.svg\''))
        .pipe(gulp.dest('./src/sass'))
});

gulp.task('watch', function(done) {
    livereload.listen();
    return gulp.watch(['./docs/sass/**/*.scss', './src/sass/**/*.scss'], ['sass:docs']);
});

gulp.task('production', function(done){
    runSequence('clean:dist', 'sass:build', 'fingerprint', 'fingerprint-replace', done);
});
