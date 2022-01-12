const through = require('through2');
const webpack = require('webpack');
const baseWebpackConfigFn = require('../../webpack.config');

const baseWebpackConfig = baseWebpackConfigFn();

module.exports = function(gulp, plugins, consts) {
  const createWebpackBundles = function(file, enc, cb) {
    const jsPath = plugins.path.join(consts.VERSIONED_DIST, 'docs/', 'js/');
    const webpackPlugins = [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(
          consts.IS_PRODUCTION ? 'production' : 'development'
        ),
      }),
    ];

    const config = Object.assign({}, baseWebpackConfig, {
      entry: {
        [plugins.path.basename(file.path)]: file.path,
      },
      output: {
        filename: '[name].bundle.js',
        path: jsPath,
      },
      plugins: webpackPlugins,
      devtool: consts.IS_PRODUCTION ? 'source-map' : 'eval',
      mode: consts.IS_PRODUCTION ? 'production' : 'development',
    });

    webpack(config, function(err, stats) {
      const info = stats.toJson();

      if (err || stats.hasErrors()) {
        console.error(err, info.errors);
        return;
      }
      cb(null, file);
    });
  };

  return function() {
    const componentsHtml = plugins.path.join(consts.SRC, 'docs', 'page-*.jsx');

    return gulp
      .src(componentsHtml, {base: consts.SRC})
      .pipe(through.obj(createWebpackBundles));
  };
};
