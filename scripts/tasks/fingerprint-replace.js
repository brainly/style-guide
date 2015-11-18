module.exports = function (gulp, plugins, consts) {
  return function () {
    var manifest = require(plugins.path.join(consts.VERSIONED_DIST, 'rev-manifest'));
    var cssPath = plugins.path.join(consts.VERSIONED_DIST, 'style-guide.css');
    var docsHtmlPath = plugins.path.join(consts.VERSIONED_DIST, 'docs', '*.html');
    var componentsHtmlPath = plugins.path.join(consts.VERSIONED_DIST, 'docs', 'components','**', '*.html');
    /* eslint-disable max-len */
    var inlineReferencesReg = /(?:url\(["']?(.*?)['"]?\)|src=["'](.*?)['"]|src=([^\s\>]+)(?:\>|\s)|data=["'](.*?)['"]|href=["'](.*?)['"]|href=([^\s\>]+)(?:\>|\s))/g;
    /* eslint-enable max-len */
    var docsHtmlRootRelativePath = '../../';
    var componentsHtmlRootRelativePath = '../../../../';

    gulp.src(cssPath)
            .pipe(plugins.fingerprint(manifest, {prefix: '../'}))
            .pipe(gulp.dest(consts.VERSIONED_DIST));

    gulp.src(docsHtmlPath)
            .pipe(plugins.fingerprint(manifest, {
              prefix: docsHtmlRootRelativePath,
              regex: inlineReferencesReg
            }))
            .pipe(gulp.dest(plugins.path.join(consts.VERSIONED_DIST, 'docs')));

    return gulp.src(componentsHtmlPath)
            .pipe(plugins.fingerprint(manifest, {
              prefix: componentsHtmlRootRelativePath,
              regex: inlineReferencesReg
            }))
            .pipe(gulp.dest(plugins.path.join(consts.VERSIONED_DIST, 'docs', 'components')));
  }
};
