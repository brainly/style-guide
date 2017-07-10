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
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJSPlugin()
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
};

module.exports = function(gulp, plugins, consts) {
  const createWebpackBundles = function(file, enc, cb) {
    const jsPath = plugins.path.join(consts.VERSIONED_DIST, 'docs/', 'js/');

    const config = Object.assign({}, coreConfig, {
      entry: {
        [plugins.path.basename(file.path)]: file.path
      },
      output: {
        filename: '[name].bundle.js',
        path: jsPath,
        // libraryTarget: 'commonjs2'
      }
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
