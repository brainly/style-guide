module.exports = function (gulp, plugins, consts) {
  return function () {
    const manifest = require(plugins.path.join(
      consts.VERSIONED_DIST,
      'rev-manifest'
    ));
    const cssPath = plugins.path.join(consts.VERSIONED_DIST, 'style-guide.css');
    const componentsHtmlPath = plugins.path.join(
      consts.VERSIONED_DIST,
      'docs',
      'components',
      '**',
      '*.html'
    );
    const inlineReferencesReg =
      /(?:url\(["']?(.*?)['"]?\)|src=["'](.*?)['"]|src=([^\s\>]+)(?:\>|\s)|data=["'](.*?)['"]|href=["'](.*?)['"]|href=([^\s\>]+)(?:\>|\s))/g;
    const componentsHtmlRootRelativePath = '../../../../';

    gulp
      .src(cssPath)
      .pipe(plugins.fingerprint(manifest, {prefix: '../'}))
      .pipe(gulp.dest(consts.VERSIONED_DIST));

    return gulp
      .src(componentsHtmlPath)
      .pipe(
        plugins.fingerprint(manifest, {
          prefix: componentsHtmlRootRelativePath,
          regex: inlineReferencesReg,
        })
      )
      .pipe(
        gulp.dest(
          plugins.path.join(consts.VERSIONED_DIST, 'docs', 'components')
        )
      );
  };
};
