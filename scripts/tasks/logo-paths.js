const prettier = require('prettier');

module.exports = function(gulp, plugins, consts) {
  return function() {
    const logos = plugins.path.join(consts.SRC, 'images', 'logos', '*');

    return gulp
      .src([logos], {
        base: './src',
      })
      .pipe(plugins.rev())
      .pipe(
        plugins.rev.manifest('logos.json', {
          transformer: {
            parse: JSON.parse,
            stringify(src) {
              const output = Object.keys(src).reduce((acc, next) => {
                const filename = plugins.path.basename(next).split('.')[0];

                return Object.assign(acc, {
                  [filename]: plugins.path.relative(consts.SRC, src[next]),
                });
              }, {});

              return prettier.format(JSON.stringify(output), {parser: 'json'});
            },
          },
        })
      )
      .pipe(gulp.dest(consts.SRC));
  };
};
