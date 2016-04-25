function svgSymbolCleanUp(shape, sprite, callback) {
  var symbol = shape.dom.documentElement;
  var allPaths = shape.dom.documentElement.getElementsByTagName('path');
  symbol.setAttribute('style', 'overflow: visible');

  for (var i = 0; i < allPaths.length; i++) {
    if (allPaths[i].nodeType === 1) {
      allPaths[i].removeAttribute('class');
      allPaths[i].removeAttribute('fill');
    }
  }
  callback(null);
}

function svgAddPolyfill(svgPolyfill, svg) {
  return svgPolyfill.replace('#SVG#', svg.replace(/(\r\n|\n|\r)/gm, ""));
}

function svgMoveDefs(svgString) {
  var DOMParser = require('xmldom').DOMParser;
  var svg = new DOMParser().parseFromString(svgString);
  var defs = svg.documentElement.getElementsByTagName('defs');

  for (var i = 0; i < defs.length; i++) {
    var def = defs[i];
    def.parentNode.removeChild(def);
    svg.documentElement.insertBefore(def, svg.documentElement.firstChild);
  }

  return svg.toString();
}

module.exports = function (gulp, plugins, consts) {
  return function () {
    var fs = require('fs');
    var svgPolyfill = fs.readFileSync(plugins.path.join(consts.SRC, 'svg-polyfill.js'), "utf8");
    var subjectIconsPath = plugins.path.join(consts.SRC, 'images', 'subjects', '*.svg');
    var rankIconsPath = plugins.path.join(consts.SRC, 'images', 'ranks', '*.svg');
    var iconsPath = plugins.path.join(consts.SRC, 'images', 'icons', '*.svg');
    var destPath = plugins.path.join(consts.SRC, 'images');

    var subjectIconsConfig = {
      mode: {
        symbol: {
          sprite: '../subjects-icons.js'
        }
      },
      shape: {
        id: {
          generator: "icon-subject-%s"
        },
        transform: [{
          custom: svgSymbolCleanUp
        }, 'svgo']
      },
      svg: {
        transform: [svgAddPolyfill.bind(null, svgPolyfill)]
      }
    };

    var rankIconsConfig = {
      mode: {
        symbol: {
          sprite: '../rank-icons.js'
        }
      },
      shape: {
        id: {
          generator: "icon-rank-%s"
        },
        transform: ['svgo']
      },
      svg: {
        transform: [svgMoveDefs, svgAddPolyfill.bind(null, svgPolyfill)]
      }
    };

    var iconsConfig = {
      mode: {
        symbol: {
          sprite: '../icons.js'
        }
      },
      shape: {
        id: {
          generator: "icon-%s"
        },
        transform: [{
          custom: svgSymbolCleanUp
        }, 'svgo']
      },
      svg: {
        transform: [svgAddPolyfill.bind(null, svgPolyfill)]
      }
    };

    gulp.src(subjectIconsPath)
      .pipe(plugins.svgSprite(subjectIconsConfig))
      .pipe(gulp.dest(destPath));

    gulp.src(rankIconsPath)
      .pipe(plugins.svgSprite(rankIconsConfig))
      .pipe(gulp.dest(destPath));

    return gulp.src(iconsPath)
      .pipe(plugins.svgSprite(iconsConfig))
      .pipe(gulp.dest(destPath));
  }
};
