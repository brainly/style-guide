module.exports = function (gulp, plugins, consts) {
    return function () {
        var manifest = require(plugins.path.join(consts.VERSIONED_DIST, 'rev-manifest'));
        var cssPath = plugins.path.join(consts.VERSIONED_DIST, 'style-guide.css');
        var docsHtmlPath = plugins.path.join(consts.VERSIONED_DIST, 'docs', '*.html');
        var docsCssPath = plugins.path.join(consts.VERSIONED_DIST, 'docs', 'css', 'main.css');
        var componentsHtmlPath = plugins.path.join(consts.VERSIONED_DIST, 'docs', 'components','**', '*.html');
        var inlineReferencesReg = /(?:url\(["']?(.*?)['"]?\)|src=["'](.*?)['"]|src=([^\s\>]+)(?:\>|\s)|data=["'](.*?)['"]|href=["'](.*?)['"]|href=([^\s\>]+)(?:\>|\s))/g;
        var docsHtmlRootRelativePath = '../../';
        var docsCssRootRelativePath = '../../../';
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
    }
};
