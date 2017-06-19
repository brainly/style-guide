const webpack = require('webpack');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const through = require('through2');
const path = require('path');
const named = require('vinyl-named');
const rename = require("gulp-rename");
const fs = require('fs');


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
    ],
  },
  externals: nodeModules
};


module.exports = function(gulp, plugins, consts) {
  return function() {
    const componentsHtml = plugins.path.join(consts.COMPONENTS, '/**/pages/*.jsx');
    const docsOutputPath = plugins.path.join(consts.VERSIONED_DIST, 'docs');

    return gulp.src(componentsHtml, {base: consts.SRC})
      .pipe(through.obj((file, enc, cb) => {
        const pathArray = file.path.replace(consts.SRC, '').split('/');
        const fileNameWithExtension = pathArray.pop();
        const relativePath = pathArray.join('/');
        const jsPath = plugins.path.join(consts.VERSIONED_DIST, 'docs', relativePath)

        const config = Object.assign({}, coreConfig, {
          entry: {
            [fileNameWithExtension]: file.path
          },
          output: {
            filename: "[name]",
            path: jsPath,
            libraryTarget: 'commonjs2'
          }
        });

        webpack(config, function(err) {
          if (err) {
            console.error(err);
            return;
          }
          cb(null, file)
        });


      }))
      .pipe(through.obj((file, enc, cb) => {
        const path = file.path.replace(consts.SRC, consts.VERSIONED_DIST + '/docs');
        const ReactPageClass = require(path).default;
        const htmlPage = ReactDOMServer.renderToStaticMarkup(React.createElement(ReactPageClass));

        fs.unlinkSync(path);

        file.contents = new Buffer(htmlPage);
        cb(null, file);

      }))
      .pipe(rename(function(path) {
        path.extname = ".html"
      }))
      .pipe(gulp.dest(docsOutputPath));
  }
};
