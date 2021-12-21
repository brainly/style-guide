const through = require('through2');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function(gulp, plugins, consts) {
  const babelPlugins = !consts.IS_PRODUCTION
    ? [
        [
          'transform-define',
          {
            LOGO_BASE_URL: '/',
          },
        ],
      ]
    : [];

  const coreConfig = {
    target: 'node',
    module: {
      rules: [
        {
          test: /\.js|jsx?$/,
          loader: 'babel-loader',
          exclude: /\.json$/,
          options: {
            plugins: babelPlugins,
          },
        },
      ],
    },
    externals: {
      html_beautify: 'html_beautify',
      hljs: 'hljs',
    },
  };

  const createWebpackBundles = function(file, enc, cb) {
    const jsPath = plugins.path.join(consts.VERSIONED_DIST, 'docs/', 'js/');
    const webpackPlugins = [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(
          consts.IS_PRODUCTION ? 'production' : 'development'
        ),
      }),
    ];

    const config = Object.assign({}, coreConfig, {
      entry: {
        [plugins.path.basename(file.path)]: file.path,
      },
      output: {
        filename: '[name].bundle.js',
        path: jsPath,
      },
      resolve: {
        extensions: ['.js', '.jsx'],
        modules: [consts.COMPONENTS, consts.DOCS, 'node_modules'],
      },
      plugins: webpackPlugins,
      devtool: consts.IS_PRODUCTION ? 'source-map' : 'eval',
      optimization: {
        minimize: consts.IS_PRODUCTION,
        minimizer: consts.IS_PRODUCTION
          ? [
              new TerserPlugin({
                sourceMap: true,
                parallel: true,
                terserOptions: {
                  keep_classnames: true,
                  keep_fnames: true,
                },
              }),
            ]
          : undefined,
      },
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
