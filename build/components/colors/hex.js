import colors from './colors';
var hex = {};
Object.keys(colors).forEach(function (groupName) {
  colors[groupName].forEach(function (color) {
    hex[color.variable.slice(1)] = "#".concat(color.hex);
  });
});
export default hex;