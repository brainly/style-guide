// @flow strict

import colors from './colors';

const hex = {};

Object.keys(colors).forEach(groupName => {
  colors[groupName].forEach(color => {
    hex[color.variable.slice(1)] = `#${color.hex}`;
  });
});

export default hex;
