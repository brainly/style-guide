const path = require('path');
const fs = require('fs-extra');
const colorMap = require('../../src/components/colors/colors');

module.exports = function (gulp, plugins, consts) {
  return function (done) {
    const colorsFileDest = path.resolve(consts.SRC, 'sass', '_colors.scss');

    const transformToScssMap = function (map) {
      const colors = {};

      /* $black: #000000; */
      Object.keys(map).forEach(groupName => {
        map[groupName].forEach(color => {
          colors[
            `$${color.name.toLocaleLowerCase().replace(/ /g, '-')}`
          ] = `#${color.hex}`;
        });
      });

      return colors;
    };

    const transformToCssMap = function (map) {
      const colors = {};

      /* --black: #{$black}; */
      Object.keys(map).forEach(color => {
        colors[`--${color.substring(1)}`] = `#{${color}}`;
      });

      return colors;
    };

    const mapColors = function (map) {
      const colorsStringsMap = [];

      Object.keys(map).forEach(color => {
        colorsStringsMap.push(`${color}: ${map[color]};`);
      });
      return colorsStringsMap;
    };

    const scssVariables = transformToScssMap(colorMap);
    const cssVariables = transformToCssMap(scssVariables);
    const colorsStringsMap = [
      `/* DO NOT EDIT THIS FILE - it is generated during build process;
* all colors are defined in /src/components/colors/colors.js */`,
    ];

    colorsStringsMap.push(...mapColors(scssVariables));
    colorsStringsMap.push(':root {');
    colorsStringsMap.push(...mapColors(cssVariables));
    colorsStringsMap.push('}');

    const fileContent = colorsStringsMap.join('\n');
    const buffered = Buffer.from(fileContent);

    fs.writeFile(colorsFileDest, buffered);

    done();
  };
};
