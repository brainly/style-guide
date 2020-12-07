'use strict';

const webpack = require('webpack');
const config = require('./css.webpack.config');

webpack(config, (err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  // eslint-disable-next-line no-console
  console.log(
    stats.toString({
      chunks: false,
      colors: true,
    })
  );
});
