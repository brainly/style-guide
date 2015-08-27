'use strict';

var gulp = require('gulp');
var argv = require('yargs').argv;
var path = require('path');
var fs = require('fs');
var del = require('del');
var runSequence = require('run-sequence');
var pkg = require('./package');

var gulpif = require('gulp-if');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var fontcustom = require('gulp-fontcustom');
var base64 = require('gulp-base64');
var replace = require('gulp-replace');
var svgSprite = require('gulp-svg-sprite');
var rev = require('gulp-rev');
var fingerprint = require('gulp-fingerprint');

var DEV_ENV = argv.production ? false : true;
var PROD_ENV = !DEV_ENV;
var VERSION = PROD_ENV ? pkg.version : 'dev';

var SRC = path.join(__dirname, 'src');
var DIST = path.join(__dirname, 'dist');
var VERSIONED_DIST = path.join(DIST, VERSION);
var DOCS = path.join(SRC, 'docs');
var SASS = path.join(SRC, 'sass');
var COMPONENTS = path.join(SRC, 'components');

gulp.task('sass:docs', function () {
    return gulp.src(path.join(DOCS, 'sass', '**', '*.scss'))
        .pipe(gulpif(DEV_ENV, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie 8', 'ie 9'],
            cascade: true
        }))
        .pipe(gulpif(DEV_ENV, sourcemaps.write()))
        .pipe(gulp.dest(path.join(VERSIONED_DIST, 'docs', 'css')))
        .pipe(gulpif(DEV_ENV, livereload()));
});

gulp.task('sass:build', function () {
    var sassMain = path.join(SRC, 'sass', 'main.scss');

    return gulp.src(sassMain)
        .pipe(sass({outputStyle: 'compressed'})
        .on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie 8', 'ie 9'],
            cascade: false
        }))
        .pipe(rename('style-guide.css'))
        .pipe(gulp.dest(VERSIONED_DIST))
});

gulp.task('docs:copy', function(){
    var allDocs = path.join(DOCS, '/**');

    return gulp.src(allDocs, {base: SRC})
        .pipe(gulp.dest(VERSIONED_DIST));
});

gulp.task('fingerprint', function () {
    var fonts = path.join(SRC, 'fonts', '*');
    var images = path.join(SRC, 'images', '*');

    // by default, gulp would pick `assets/css` as the base,
    // so we need to set it explicitly:
    return gulp.src([fonts, images], {base: './src'})
        .pipe(rev())
        .pipe(gulp.dest(DIST))  // write rev'd assets to build dir
        .pipe(rev.manifest())
        .pipe(gulp.dest(VERSIONED_DIST)); // write manifest to build dir
});

gulp.task('fingerprint-replace', function () {
    var manifest = require(path.join(VERSIONED_DIST, 'rev-manifest'));
    var css = path.join(VERSIONED_DIST, 'style-guide.css');

    var docsHtml = path.join(VERSIONED_DIST, 'docs', '*.html')

    gulp.src(css)
        .pipe(fingerprint(manifest, {prefix: '../'}))
        .pipe(gulp.dest(VERSIONED_DIST));

    return gulp.src(docsHtml)
        .pipe(fingerprint(manifest, {prefix: '../../'}))
        .pipe(gulp.dest(path.join(VERSIONED_DIST, 'docs')));
});

gulp.task('icons:generate-fonts', function() {
    var icons = path.join(SRC, 'icons');
    var iconsComponentPath = path.join(COMPONENTS, 'icons', 'font');

    return gulp.src(icons)
        .pipe(fontcustom({
            font_name: 'brainly-icons', // defaults to 'fontcustom'
            templates: 'scss',
            'css-selector': '.mint-icon-{{glyph}}'
        }))
        .pipe(gulp.dest(iconsComponentPath));
});

gulp.task('icons:create-data-file', function() {
    var iconsComponentPath = path.join(COMPONENTS, 'icons');
    var iconsScss = path.join(iconsComponentPath, 'font', '_brainly-icons.scss');
    var iconsDataScss = path.join(iconsComponentPath, '_icons-data.scss');

    var fontIconsContents = fs.readFileSync(iconsScss),
        splitByHeader = fontIconsContents.toString().split('[data-icon]:before,'),
        withoutHeader = splitByHeader[splitByHeader.length - 1];

    fs.writeFileSync(iconsDataScss, withoutHeader);
});

gulp.task('icons:inline-fonts', function() {
    var iconsComponentPath = path.join(COMPONENTS, 'icons');
    var iconsEmbedTemplate = path.join(iconsComponentPath, '_icons-embed-template.scss');

    return gulp.src(iconsEmbedTemplate)
        .pipe(base64())
        .pipe(rename('_icons-embed.scss'))
        .pipe(gulp.dest(iconsComponentPath));
});

gulp.task('icons:cleanup', function(done) {
    var iconFont = path.join(COMPONENTS, 'icons', 'font');
    var fontManifest = '.fontcustom-manifest.json';

    del([iconFont, fontManifest], done);
});

gulp.task('clean:dist', function(done){
    del([path.join(DIST, '**'), '!' + DIST], done);
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
                        dest: '_subjects-icons-embed.scss'
                    }
                },
                prefix: '.mint-subject-icon--',
                bust: false,
                sprite: '../images/subjects-icons.svg',
                dimensions: true
            }
        }
    };

    var subjectIconsComponentPath = path.join(COMPONENTS, 'subject-icons');

    return gulp.src('./src/images/subjects/*.svg')
        .pipe(svgSprite(config))
        .pipe(replace('url(../images/subjects-icons.svg', 'url($mintImagesPath + \'subjects-icons.svg\''))
        .pipe(gulp.dest(subjectIconsComponentPath))
});

gulp.task('watch:docs', function(done) {
    var docsSassSources = path.join(DOCS, 'sass', '**', '*.scss');
    livereload.listen();
    return gulp.watch([docsSassSources], ['sass:docs']);
});

gulp.task('watch:sass', function(done) {
    var mainSassSources = path.join(SASS, '**', '*.scss');
    var componentsSassSources = path.join(COMPONENTS, '**', '*.scss');

    livereload.listen();
    return gulp.watch([mainSassSources, componentsSassSources], ['sass:build']);
});

gulp.task('build', function(done){
    runSequence('clean:dist', 'sass:build', 'docs:copy', 'sass:docs', 'fingerprint', 'fingerprint-replace', done);
});
