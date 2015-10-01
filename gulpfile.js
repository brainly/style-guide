'use strict';

var fs = require('fs');
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

var svgPolyfill = fs.readFileSync(path.join(SRC, 'svg-polyfill.js'), "utf8");

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
            regex: /(?:url\(["']?(.*?)['"]?\)|src=["'](.*?)['"]|src=([^\s\>]+)(?:\>|\s)|data=["'](.*?)['"]|href=["'](.*?)['"]|href=([^\s\>]+)(?:\>|\s))/g
        }))
        .pipe(gulp.dest(path.join(VERSIONED_DIST, 'docs')));
});

gulp.task('clean:dist', function (done) {
    del([path.join(DIST, '**'), '!' + DIST], done);
});

function svgSymbolCleanUp(shape, sprite, callback) {
    var symbol = shape.dom.documentElement;
    var childNodes = shape.dom.documentElement.childNodes;
    symbol.setAttribute('style', 'overflow: visible');

    for(var i = 0; i < childNodes.length; i++) {
        if(childNodes[i].nodeType === 1) {
            childNodes[i].removeAttribute('class');
            childNodes[i].removeAttribute('fill');
        }
    }
    callback(null);
}

function svgAddPolyfill(svg) {
    return svg.replace('</svg>', '<script xmlns="http://www.w3.org/2000/svg" type="text/ecmascript">' + svgPolyfill + '</script></svg>');
}

gulp.task('svg:subjects', function () {
    var subjectIconsPath = path.join(SRC, 'images', 'subjects', '*.svg');

    var config = {
        mode: {
            symbol: {
                sprite: '../subjects-icons.svg'
            }
        },
        shape: {
            id: {
                generator: "icon-subject-%s"
            },
            transform: [{
                custom: svgSymbolCleanUp
            }]
        },
        svg: {
            transform: [svgAddPolyfill]
        }
    };

    return gulp.src(subjectIconsPath)
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./src/images'))
});

gulp.task('svg:icons', function () {
    var iconsPath = path.join(SRC, 'images', 'icons', '*.svg');

    var config = {
        mode: {
            symbol: {
                sprite: '../icons.svg'
            }
        },
        shape: {
            id: {
                generator: "icon-%s"
            },
            transform: [{
                custom: svgSymbolCleanUp
            }]
        },
        svg: {
            transform: [svgAddPolyfill]
        }
    };

    return gulp.src(iconsPath)
        .pipe(svgSprite(config))
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

gulp.task('scss-unused-variables', function(done) {
    var cmd = path.join(__dirname, 'scripts', 'find_scss_unused_variables.sh')  + ' ' + SRC;
    var gutil = require('gulp-util');
    require('child_process').exec(cmd, function(error, stdout) {
        if (error) {
            error = new gutil.PluginError('scss-unused-variables', {
                message: stdout,
                showStack: false
            });
            return done(error);
        } // return error
        done();
    });
});

gulp.task('watch', ['watch:sass', 'watch:docs-templates', 'watch:docs-sass']);

gulp.task('build', function (done) {
    runSequence('clean:dist', 'sass:build', 'svg:icons',  'svg:subjects', 'jekyll:docs', 'fingerprint', 'fingerprint-replace', 'docs:copy-components', 'sass:docs-build', done);
});

gulp.task('ci', ['scss-lint', 'scss-unused-variables']);
