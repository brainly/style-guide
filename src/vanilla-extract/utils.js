import {styleVariants} from '@vanilla-extract/css';
import {screenSizeMediaQueries} from './config';

export const responsiveVariants = variants =>
  styleVariants({
    ...variants,
    ...Object.keys(variants).reduce((acc, next) => {
      Object.keys(screenSizeMediaQueries).forEach(breakpoint => {
        acc[`${breakpoint}:${next}`] = {
          '@media': {
            [screenSizeMediaQueries[breakpoint]]: variants[next],
          },
        };
      });

      return acc;
    }, {}),
  });

export const mix = function (color1, color2, weight) {
  const colorsNormalized = [color1, color2].map(color => {
    let isHex = false;
    const decimals = [];

    if (color.includes('#')) {
      isHex = true;
      color = color.replace(/#/g, '');
    } else if (!color.includes('rgb')) {
      isHex = true;
    }

    if (isHex) {
      for (let i = 0; i <= 5; i += 2) {
        // loop through each of the 3 hex pairs—red, green, and blue
        decimals.push(h2d(color.substr(i, 2))); // extract the current pairs
      }
    } else {
      let colorNormalized = /\(.*\)/.exec(color);

      if (colorNormalized === null) {
        throw new Error(`Invalid color format: ${color}`);
      }

      colorNormalized = colorNormalized[0];

      colorNormalized = colorNormalized.slice(1, -1);
      colorNormalized = colorNormalized
        .split(',')
        .map(colorPart => parseFloat(colorPart));
      decimals.push(...colorNormalized);
    }

    return decimals;
  });

  weight = typeof weight !== 'undefined' ? weight : 50; // set the weight to 50%, if that argument is omitted

  // add alpha
  colorsNormalized[0][3] = colorsNormalized[0][3] || 1;
  colorsNormalized[1][3] = colorsNormalized[1][3] || 1;

  const weightWithAlpha =
    (weight + (colorsNormalized[0][3] + colorsNormalized[1][3]) / 2) / 2;

  let mixedColor = 'rgba(';

  for (let i = 0; i <= 3; i += 1) {
    const colorVal1 = colorsNormalized[0][i];
    const colorVal2 = colorsNormalized[1][i];

    let val;

    if (i === 3) {
      val = colorVal2 + (colorVal1 - colorVal2) * (weight / 100.0);
    } else {
      val = colorVal2 + (colorVal1 - colorVal2) * (weightWithAlpha / 100.0);
      val = Math.floor(val);
    }

    if (i !== 0) {
      mixedColor += ',';
    }

    mixedColor += val; // concatenate val to our new color string
  }

  mixedColor += ')';

  function h2d(h) {
    return parseInt(h, 16);
  } // convert a hex value to decimal

  return mixedColor;
};
