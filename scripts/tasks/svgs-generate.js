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

      if (!hasFixedColors) {
        childNodes[i].removeAttribute('fill');
      }
    }
  }
  callback(null);
}

module.exports = function (gulp, plugins, consts) {
  return function () {
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
    const destPath = plugins.path.join(consts.SRC, 'images', 'svg-sprites');

    const subjectIconsConfig = {
      mode: {
        symbol: {
          sprite: '../subjects-icons.svg',
        },
      },
      shape: {
        id: {
          generator: 'icon-subject-%s',
        },
        transform: [
          'svgo',
          {
            custom: svgSymbolCleanUp.bind(null, {removeClass: false}),
          },
        ],
      },
    };

    const subjectMonoIconsConfig = {
      mode: {
        symbol: {
          sprite: '../subjects-mono-icons.svg',
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
    };

    const iconsConfig = {
      mode: {
        symbol: {
          sprite: '../icons.svg',
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
    };

    const mathSymbolsConfig = {
      mode: {
        symbol: {
          sprite: '../math-symbols-icons.svg',
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
    };

    const mobileIconsConfig = {
      mode: {
        symbol: {
          sprite: '../mobile-icons.svg',
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
