'use strict';

var gulp = require('gulp');
var argv = require('yargs').argv;
var path = require('path');
var del = require('del');
var runSequence = require('run-sequence');
var pkg = require('./package');

var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var replace = require('gulp-replace');
var svgSprite = require('gulp-svg-sprite');
var rev = require('gulp-rev');
var fingerprint = require('gulp-fingerprint');
var soften = require('gulp-soften');

var DEV_ENV = argv.production ? false : true;
var PROD_ENV = !DEV_ENV;
var VERSION = PROD_ENV ? pkg.version : 'dev';

var SRC = path.join(__dirname, 'src');
var DIST = path.join(__dirname, 'dist');
var VERSIONED_DIST = path.join(DIST, VERSION);
var DOCS = path.join(SRC, 'docs');
var SASS = path.join(SRC, 'sass');
var COMPONENTS = path.join(SRC, 'components');

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

gulp.task('sass:docs-build', function () {
    var sassMain = path.join(DOCS, '_sass', 'main.scss');
    var outputFile = path.join(VERSIONED_DIST, 'docs', 'css');

    return gulp.src(sassMain)
        .pipe(sass({outputStyle: 'compressed'})
        .on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie 8', 'ie 9'],
            cascade: false
        }))
        .pipe(rename('main.css'))
        .pipe(gulp.dest(outputFile))
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

    var docsHtml = path.join(VERSIONED_DIST, 'docs', '*.html');

    gulp.src(css)
        .pipe(fingerprint(manifest, {prefix: '../'}))
        .pipe(gulp.dest(VERSIONED_DIST));

    return gulp.src(docsHtml)
        .pipe(fingerprint(manifest, {
          prefix: '../../',
          regex: /(?:url\(["']?(.*?)['"]?\)|src=["'](.*?)['"]|src=([^\s\>]+)(?:\>|\s)|xlink:href=['"](.*?)#|href=["'](.*?)['"]|href=([^\s\>]+)(?:\>|\s))/g
        }))
        .pipe(gulp.dest(path.join(VERSIONED_DIST, 'docs')));
});

gulp.task('clean:dist', function (done) {
    del([path.join(DIST, '**'), '!' + DIST], done);
});

gulp.task('svg:subjects', function (done) {
    var config = {
        mode: {
            css: {
                dest: '',
                render: {
                    scss: {
                        dest: '_subject-icons-embed.scss'
                    }
                },
                prefix: '.mint-subject-icon--',
                bust: false,
                sprite: '../../images/subjects-icons.svg',
                dimensions: true
            }
        }
    };

    var subjectIconsComponentPath = path.join(COMPONENTS, 'subject-icons');

    return gulp.src('./src/images/subjects/*.svg')
        .pipe(svgSprite(config))
        .pipe(soften(2))
        .pipe(replace('url(../../images/subjects-icons.svg', 'url($mintImagesPath + \'subjects-icons.svg\''))
        .pipe(gulp.dest(subjectIconsComponentPath))
});

gulp.task('svg:icons', function (done) {
    var config = {
        mode: {
            symbol: {
                sprite: '../icons.svg'
            }
        }
    };

    return gulp.src('./src/icons/*.svg')
        .pipe(svgSprite(config))
        .pipe(replace('<symbol', '<symbol style="overflow: visible;"'))
        .pipe(gulp.dest('./src/images'));
});

gulp.task('jekyll:docs', function (gulpCallBack) {
    var spawn = require('child_process').spawn;
    var docsOutputPath = path.join(VERSIONED_DIST, 'docs');
    var jekyll = spawn('jekyll', ['build', '--config', 'src/docs/_config.yml', '--source', 'src/docs', '-d', docsOutputPath], {stdio: 'inherit'});
    jekyll.on('exit', function (code) {
        gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: ' + code);
    });
});

gulp.task('docs:copy-components', function () {
    var componentsHtml = path.join(COMPONENTS, '/**/*.html');
    var docsOutputPath = path.join(VERSIONED_DIST, 'docs');

    return gulp.src(componentsHtml, {base: SRC})
        .pipe(gulp.dest(docsOutputPath));
});

gulp.task('watch:sass', function (done) {
    var mainSassSources = path.join(SASS, '**', '*.scss');
    var componentsSassSources = path.join(COMPONENTS, '**', '*.scss');

    livereload.listen();
    return gulp.watch([mainSassSources, componentsSassSources], function () {
        runSequence('sass:build', 'fingerprint-replace');
    });
});

gulp.task('watch:docs-templates', function (done) {
    var docsSources = path.join(DOCS, '**', '*.{html,yml}');
    livereload.listen();
    return gulp.watch([docsSources], function () {
        runSequence('jekyll:docs', 'fingerprint-replace', 'docs:copy-components');
    });
});

gulp.task('watch:docs-sass', function (done) {
    var docsSassSources = path.join(DOCS, '_sass', '*.scss');

    livereload.listen();
    return gulp.watch([docsSassSources], ['sass:docs-build']);
});

gulp.task('scss-lint', function() {
  var scssLint = require('gulp-scss-lint');

  return gulp.src(['src/**/*.scss', '!src/sass/vendors/**', '!src/docs/**', '!src/components/icons/_icons-data.scss'])
    .pipe(scssLint({
      'maxBuffer': 1024*1000
    }))
    .pipe(scssLint.failReporter());
});

gulp.task('watch', ['watch:sass', 'watch:docs-templates', 'watch:docs-sass']);

gulp.task('build', function (done) {
    runSequence('clean:dist', 'sass:build', 'svg:icons', 'jekyll:docs', 'fingerprint', 'fingerprint-replace', 'docs:copy-components', 'sass:docs-build', done);
});

gulp.task('ci', ['scss-lint']);
