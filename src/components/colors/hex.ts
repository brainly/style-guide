// @ts-ignore TS7016
import colors from './colors';

const hex: Record<string, string> = {};

Object.keys(colors).forEach(groupName => {
  // @ts-ignore TS7006
  colors[groupName].forEach(color => {
    hex[color.variable.slice(1)] = `#${color.hex}`;
  });
});
export default hex;
