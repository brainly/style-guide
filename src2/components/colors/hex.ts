import colors from "./colors";
const hex: Record<string, string> = {};
Object.keys(colors).forEach((groupName) => {
  colors[groupName].forEach((color) => {
    hex[color.variable.slice(1)] = `#${color.hex}`;
  });
});
export default hex;