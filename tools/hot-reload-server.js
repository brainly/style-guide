var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: { colors: true }
});

var hotMiddleware = require('webpack-hot-middleware')(compiler);

app.use(devMiddleware);

app.use(hotMiddleware);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/docs/index_dev.html'));
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
