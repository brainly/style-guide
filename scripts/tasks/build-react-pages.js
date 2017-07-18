const through = require('through2');
const fs = require('fs');
const webpack = require('webpack');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const rename = require('gulp-rename');
const prettify = require('gulp-prettify');

// create external modules for webpack to not include it in bundles.
const nodeModules = {};

fs.readdirSync('node_modules')
  .filter(dir => dir !== '.bin')
  .forEach(mod => nodeModules[mod] = 'commonjs ' + mod);

const coreConfig = {
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.js|jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: nodeModules
};

module.exports = function(gulp, plugins, consts) {
  const createWebpackBundles = function(file, enc, cb) {
    const pathArray = file.path.replace(consts.SRC, '').split('/');
    const fileNameWithExtension = pathArray.pop();
    const relativePath = pathArray.join('/');
    const jsPath = plugins.path.join(consts.VERSIONED_DIST, 'docs', relativePath);

    const config = Object.assign({}, coreConfig, {
      entry: {
        [fileNameWithExtension]: file.path
      },
      output: {
        filename: '[name]',
        path: jsPath,
        libraryTarget: 'commonjs2'
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

  const createHtmlFiles = function(file, enc, cb) {
    const path = file.path.replace(consts.SRC, consts.VERSIONED_DIST + '/docs');
    const ReactPageClass = require(path).default;
    const htmlPage = ReactDOMServer.renderToStaticMarkup(React.createElement(ReactPageClass));
    const doctype = '<!DOCTYPE html>\n';

    file.contents = new Buffer(doctype + htmlPage);
    cb(null, file);
  };


  return function() {
    const componentsHtml = plugins.path.join(consts.DOCS, '/pages/*.jsx');
    const docsOutputPathVersionedDist = plugins.path.join(consts.VERSIONED_DIST);

    return gulp.src(componentsHtml, {base: consts.SRC})
      .pipe(through.obj(createWebpackBundles))
      .pipe(through.obj(createHtmlFiles))
      .pipe(rename(
        function(path) {
          path.dirname += '/..';
          path.extname = '.html';
        })
      )
      .pipe(prettify())
      .pipe(gulp.dest(docsOutputPathVersionedDist));
  };
};
