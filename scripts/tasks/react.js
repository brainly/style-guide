const webpack = require('webpack-stream');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const through = require('through2');
const path = require('path');
const named = require('vinyl-named');
const vm = require('vm');
const rename = require("gulp-rename");


module.exports = function(gulp, plugins, consts) {
  return function() {
    const componentsHtml = plugins.path.join(consts.COMPONENTS, '/**/pages/*.jsx');
    // const docsOutputPath = plugins.path.join(consts.VERSIONED_DIST, 'docs');
    const docsOutputPath = plugins.path.join(consts.VERSIONED_DIST, 'docs/generatedComponents');

    return gulp.src(componentsHtml, {base: consts.SRC})
      .pipe(named())
      .pipe(webpack({
        module: {
          loaders: [
            {
              test: /\.js|jsx?$/,
              loader: 'babel-loader'
            },
          ],
        },
      }))
      .pipe(through.obj((file, enc, cb) => {
        // console.log(arguments)
        // console.log(file)
        // console.dir(file)
        const fileString = file.contents.toString(enc);
        const script = new vm.Script('bundle=' + fileString);
        script.runInThisContext();
        const ReactPageClass = bundle.default; //bundle from running script
        const htmlPage = ReactDOMServer.renderToStaticMarkup(React.createElement(ReactPageClass));

        file.contents = new Buffer(htmlPage);
        cb(null, file);
      }))
      .pipe(rename(function(path) {
        path.extname = ".html"
      }))
      .pipe(gulp.dest(docsOutputPath));
  }
};
