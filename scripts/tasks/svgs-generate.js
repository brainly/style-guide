function svgSymbolCleanUp(shape, sprite, callback) {
    var symbol = shape.dom.documentElement;
    var childNodes = shape.dom.documentElement.childNodes;
    symbol.setAttribute('style', 'overflow: visible');

    for(var i = 0; i < childNodes.length; i++) {
        if(childNodes[i].nodeType === 1) {
            childNodes[i].removeAttribute('class');
            childNodes[i].removeAttribute('fill');
        }
    }
    callback(null);
}

function svgAddPolyfill(svgPolyfill, svg) {
    return svg.replace('</svg>', '<script xmlns="http://www.w3.org/2000/svg" type="text/ecmascript">' + svgPolyfill + '</script></svg>');
}

module.exports = function (gulp, plugins, consts) {
    return function () {
        var fs = require('fs');
        var svgPolyfill = fs.readFileSync(plugins.path.join(consts.SRC, 'svg-polyfill.js'), "utf8");
        var subjectIconsPath = plugins.path.join(consts.SRC, 'images', 'subjects', '*.svg');
        var iconsPath = plugins.path.join(consts.SRC, 'images', 'icons', '*.svg');
        var destPath = plugins.path.join(consts.SRC, 'images');

        var subjectIconsConfig = {
            mode: {
                symbol: {
                    sprite: '../subjects-icons.svg'
                }
            },
            shape: {
                id: {
                    generator: "icon-subject-%s"
                },
                transform: [{
                    custom: svgSymbolCleanUp
                }]
            },
            svg: {
                transform: [svgAddPolyfill.bind(null, svgPolyfill)]
            }
        };

        var iconsConfig = {
            mode: {
                symbol: {
                    sprite: '../icons.svg'
                }
            },
            shape: {
                id: {
                    generator: "icon-%s"
                },
                transform: [{
                    custom: svgSymbolCleanUp
                }]
            },
            svg: {
                transform: [svgAddPolyfill.bind(null, svgPolyfill)]
            }
        };

        gulp.src(subjectIconsPath)
            .pipe(plugins.svgSprite(subjectIconsConfig))
            .pipe(gulp.dest(destPath));

        return gulp.src(iconsPath)
            .pipe(plugins.svgSprite(iconsConfig))
            .pipe(gulp.dest(destPath));
    }
};
