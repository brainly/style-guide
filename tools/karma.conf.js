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
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
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
