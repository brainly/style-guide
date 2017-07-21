const through = require('through2');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const coreConfig = {
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.js|jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: {
    'html_beautify': 'html_beautify',
    'hljs': 'hljs'
  }
};

module.exports = function(gulp, plugins, consts) {
  const createWebpackBundles = function(file, enc, cb) {
    const jsPath = plugins.path.join(consts.VERSIONED_DIST, 'docs/', 'js/');
    const webpackPlugins = [new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(consts.IS_PRODUCTION ? 'production' : 'development')
    })];

    if (consts.IS_PRODUCTION) {
      webpackPlugins.push(new UglifyJSPlugin({
        // we can't remove names - otherwise we won't be able to generate JSX
        mangle: {
          keep_fnames: true
        },
        compress: {
          keep_fnames: true
        }
      }));
    }

    const config = Object.assign({}, coreConfig, {
      entry: {
        [plugins.path.basename(file.path)]: file.path
      },
      output: {
        filename: '[name].bundle.js',
        path: jsPath
      },
      resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
          consts.COMPONENTS,
          consts.DOCS,
          'node_modules'
        ]
      },
      plugins: webpackPlugins,
      devtool: consts.IS_PRODUCTION ? 'source-map' : 'eval'
    });

    webpack(config, function(err) {
      if (err) {
        console.error(err);
        return;
      }
      cb(null, file);
    });
  };

  return function() {
    const componentsHtml = plugins.path.join(consts.SRC, 'docs', 'page-*.jsx');

    return gulp.src(componentsHtml, {base: consts.SRC})
      .pipe(through.obj(createWebpackBundles));
  };
};
