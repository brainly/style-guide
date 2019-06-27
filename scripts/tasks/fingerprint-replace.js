module.exports = function(gulp, plugins, consts) {
  return function() {
    const manifest = require(plugins.path.join(consts.VERSIONED_DIST, 'rev-manifest'));
    const cssPath = plugins.path.join(consts.VERSIONED_DIST, 'style-guide.css');
    const docsHtmlPath = plugins.path.join(consts.VERSIONED_DIST, 'docs', '*.html');
    const docsCssPath = plugins.path.join(consts.VERSIONED_DIST, 'docs', 'css', 'main.css');
    const componentsHtmlPath = plugins.path.join(consts.VERSIONED_DIST, 'docs', 'components', '**', '*.html');
    /* eslint-disable no-useless-escape, max-len */
    const inlineReferencesReg = /(?:url\(["']?(.*?)['"]?\)|src=["'](.*?)['"]|src=([^\s\>]+)(?:\>|\s)|data=["'](.*?)['"]|href=["'](.*?)['"]|href=([^\s\>]+)(?:\>|\s))/g;
    /* eslint-disable no-useless-escape, max-len */
    const docsHtmlRootRelativePath = '../../';
    const docsCssRootRelativePath = '../../../';
    const componentsHtmlRootRelativePath = '../../../../';

    gulp.src(cssPath)
      .pipe(plugins.fingerprint(manifest, {prefix: '../'}))
      .pipe(gulp.dest(consts.VERSIONED_DIST));

    gulp.src(docsHtmlPath)
      .pipe(plugins.fingerprint(manifest, {
        prefix: docsHtmlRootRelativePath,
        regex: inlineReferencesReg
      }))
      .pipe(gulp.dest(plugins.path.join(consts.VERSIONED_DIST, 'docs')));

    gulp.src(docsCssPath)
      .pipe(plugins.fingerprint(manifest, {
        prefix: docsCssRootRelativePath,
        regex: inlineReferencesReg
      }))
      .pipe(gulp.dest(plugins.path.join(consts.VERSIONED_DIST, 'docs', 'css')));

    return gulp.src(componentsHtmlPath)
      .pipe(plugins.fingerprint(manifest, {
        prefix: componentsHtmlRootRelativePath,
        regex: inlineReferencesReg
      }))
      .pipe(gulp.dest(plugins.path.join(consts.VERSIONED_DIST, 'docs', 'components')));
  };
};
