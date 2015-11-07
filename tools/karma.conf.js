var webpack = require('webpack');
var webpackConfig = require('./webpack.config.dev');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: process.env.NODE_ENV !== 'test',
    files: [
      'tests.webpack.js'
    ],
    frameworks: ['mocha', 'sinon-chai'],
    plugins: [
      'karma-chrome-launcher',
      'karma-mocha',
      'karma-sinon-chai',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-tap-reporter'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: ['tap'],
    webpack: Object.assign(webpackConfig, {
      devtool: 'inline-source-map'
    }),
    webpackServer: {
      noInfo: true
    },
    webpackMiddleware: {
      noInfo: true
    }
  })
};
