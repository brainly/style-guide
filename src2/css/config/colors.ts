const colorMap = require("../../components/colors/colors");

const colors = {};
Object.keys(colorMap).forEach((groupName) => {
  colorMap[groupName].forEach((color) => {
    colors[color.name.toLocaleLowerCase().replace(/ /g, "-")] = `#${color.hex}`;
  });
});
module.exports = colors;