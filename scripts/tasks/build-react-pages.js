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
  .forEach(mod => (nodeModules[mod] = `commonjs ${mod}`));

const coreConfig = {
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js|jsx?$/,
        exclude: /\.json$/,
        loader: 'babel-loader',
      },
    ],
  },
  externals: nodeModules,
};

module.exports = function(gulp, plugins, consts, options) {
  const createWebpackBundles = function(file, enc, cb) {
    const pathArray = file.path.replace(consts.SRC, '').split('/');
    const fileNameWithExtension = pathArray.pop();
    const relativePath = pathArray.join('/');
    const jsPath = plugins.path.join(consts.VERSIONED_DIST, relativePath);

    const config = Object.assign({}, coreConfig, {
      resolve: {
        extensions: ['.js', '.jsx'],
        modules: [consts.COMPONENTS, consts.DOCS, 'node_modules'],
      },
      entry: {
        [fileNameWithExtension]: file.path,
      },
      output: {
        filename: '[name]',
        path: jsPath,
        libraryTarget: 'commonjs2',
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

  const createHtmlFiles = function(file, enc, cb) {
    const path = file.path.replace(consts.SRC, consts.VERSIONED_DIST);

    delete require.cache[require.resolve(path)];
    const ReactPageClass = require(path).default;
    const htmlPage = ReactDOMServer.renderToStaticMarkup(
      React.createElement(ReactPageClass)
    );
    const doctype = '<!DOCTYPE html>\n';

    file.contents = Buffer.from(doctype + htmlPage);
    cb(null, file);
  };

  return function() {
    let input, output;

    if (options.iframe) {
      input = plugins.path.join(consts.COMPONENTS, '/**/iframe-pages/*.jsx');
      output = plugins.path.join(consts.VERSIONED_DIST, 'docs');
    } else {
      input = plugins.path.join(consts.DOCS, '/pages/*.jsx');
      output = plugins.path.join(consts.VERSIONED_DIST);
    }

    return gulp
      .src(input, {base: consts.SRC})
      .pipe(through.obj(createWebpackBundles))
      .pipe(through.obj(createHtmlFiles))
      .pipe(
        rename(function(path) {
          path.dirname += '/..';
          path.extname = '.html';
        })
      )
      .pipe(prettify())
      .pipe(gulp.dest(output));
  };
};
