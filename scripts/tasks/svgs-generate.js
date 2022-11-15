function svgSymbolCleanUp(config, shape, sprite, callback) {
  const symbol = shape.dom.documentElement;
  const childNodes = shape.dom.documentElement.childNodes;
  const hasFixedColors = symbol.getAttribute('data-fixedcolors');

  symbol.setAttribute('style', 'overflow: visible');

  for (let i = 0; i < childNodes.length; i++) {
    if (childNodes[i].nodeType === 1) {
      if (config.removeClass) {
        childNodes[i].removeAttribute('class');
      }

      if (!hasFixedColors && !config.keepFill) {
        childNodes[i].removeAttribute('fill');
      }
    }

    if (childNodes[i].nodeName === 'title') {
      symbol.removeChild(childNodes[i]);
      i--;
    }
  }

  callback(null);
}

function svgAddPolyfill(svgPolyfill, svg) {
  return svgPolyfill.replace('#SVG#', svg.replace(/(\r\n|\n|\r)/gm, ''));
}

module.exports = function (gulp, plugins, consts) {
  return function () {
    const fs = require('fs');
    const svgPolyfill = fs.readFileSync(
      plugins.path.join(consts.SRC, 'svg-polyfill.js'),
      'utf8'
    );
    const subjectIconsPath = plugins.path.join(
      consts.SRC,
      'images',
      'subjects',
      '*.svg'
    );
    const subjectMonoIconsPath = plugins.path.join(
      consts.SRC,
      'images',
      'subjects-mono',
      '*.svg'
    );
    const iconsPath = plugins.path.join(consts.SRC, 'images', 'icons', '*.svg');
    const mathSymbolsPath = plugins.path.join(
      consts.SRC,
      'images',
      'math-symbols',
      '*.svg'
    );
    const mobileIconsPath = plugins.path.join(
      consts.SRC,
      'images',
      'mobile-icons',
      '*.svg'
    );
    const destPath = plugins.path.join(consts.SRC, 'images');

    const subjectIconsConfig = {
      mode: {
        symbol: {
          sprite: '../subjects-icons.js',
        },
      },
      shape: {
        id: {
          generator: 'icon-subject-%s',
        },
        transform: [
          'svgo',
          {
            custom: svgSymbolCleanUp.bind(null, {
              removeClass: false,
              keepFill: true,
            }),
          },
        ],
      },
      svg: {
        transform: [svgAddPolyfill.bind(null, svgPolyfill)],
      },
    };

    const subjectMonoIconsConfig = {
      mode: {
        symbol: {
          sprite: '../subjects-mono-icons.js',
        },
      },
      shape: {
        id: {
          generator: 'icon-subject-mono-%s',
        },
        transform: [
          'svgo',
          {
            custom: svgSymbolCleanUp.bind(null, {removeClass: true}),
          },
        ],
      },
      svg: {
        transform: [svgAddPolyfill.bind(null, svgPolyfill)],
      },
    };

    const iconsConfig = {
      mode: {
        symbol: {
          sprite: '../icons.js',
        },
      },
      shape: {
        id: {
          generator: 'icon-%s',
        },
        transform: [
          'svgo',
          {
            custom: svgSymbolCleanUp.bind(null, {removeClass: true}),
          },
        ],
      },
      svg: {
        transform: [svgAddPolyfill.bind(null, svgPolyfill)],
      },
    };

    const mathSymbolsConfig = {
      mode: {
        symbol: {
          sprite: '../math-symbols-icons.js',
        },
      },
      shape: {
        id: {
          generator: 'sg-math-symbol-icon-%s',
        },
        transform: [
          'svgo',
          {
            custom: svgSymbolCleanUp.bind(null, {removeClass: true}),
          },
        ],
      },
      svg: {
        transform: [svgAddPolyfill.bind(null, svgPolyfill)],
      },
    };

    const mobileIconsConfig = {
      mode: {
        symbol: {
          sprite: '../mobile-icons.js',
        },
      },
      shape: {
        id: {
          generator: 'icon-mobile-%s',
        },
        transform: [
          'svgo',
          {
            custom: svgSymbolCleanUp.bind(null, {removeClass: true}),
          },
        ],
      },
      svg: {
        transform: [svgAddPolyfill.bind(null, svgPolyfill)],
      },
    };

    gulp
      .src(subjectIconsPath)
      .pipe(plugins.svgSprite(subjectIconsConfig))
      .pipe(gulp.dest(destPath));

    gulp
      .src(subjectMonoIconsPath)
      .pipe(plugins.svgSprite(subjectMonoIconsConfig))
      .pipe(gulp.dest(destPath));

    gulp
      .src(mathSymbolsPath)
      .pipe(plugins.svgSprite(mathSymbolsConfig))
      .pipe(gulp.dest(destPath));

    gulp
      .src(mobileIconsPath)
      .pipe(plugins.svgSprite(mobileIconsConfig))
      .pipe(gulp.dest(destPath));

    return gulp
      .src(iconsPath)
      .pipe(plugins.svgSprite(iconsConfig))
      .pipe(gulp.dest(destPath));
  };
};
