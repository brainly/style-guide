'use strict';

var version = require('./../package.json').version;
var path = require('path');
var webpack = require('webpack');

var rootPath = path.join(__dirname, '..');

function root(p) {
  return path.join(rootPath, p);
}

var srcPath = root('src');
var componentsPath = root('src/components');
var sassPath = root('src/sass');
var docsPath = root('src/docs');
var fontsPath = root('src/fonts');


var distPath = root('dist');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/entry'
  ],
  output: {
    path: distPath,
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      APP_VERSION: JSON.stringify(version)
    })
  ],
  resolve : {
    alias : {
      'components' : componentsPath,
      'sass' : sassPath,
      'fonts': fontsPath,
      'helpers': root('src/helpers')
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: srcPath,
        query: {
          stage: 2,
          optional: ['es7.classProperties'],
          loose: 'all',
          plugins: ['react-transform'],
          extra: {
            'react-transform': {
              'transforms': [
                {
                  'transform': 'react-transform-hmr',
                  'imports': ['react'],
                  'locals': ['module']
                }, {
                  'transform': 'react-transform-catch-errors',
                  'imports': ['react', 'redbox-react']
                }
              ]
            }
          }
        }
      },
      {
        test: /\.json$/,
        loader: 'json',
        include: [componentsPath, docsPath]
      },
      {
        test: /\.scss$/,
        loader: 'style!css!autoprefixer?browsers=last 2 versions!sass',
        include: [componentsPath, docsPath, sassPath]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?.[ext]&mimetype=image/png',
        include: srcPath
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
        include: srcPath
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file',
        include: srcPath
      }
    ]
  }
};
