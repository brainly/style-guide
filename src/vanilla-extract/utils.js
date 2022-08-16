import {screenSizeMediaQueries} from './config';
import {styleVariants} from '@vanilla-extract/css';

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
  color1 = color1.replace(/#/g, '');
  color2 = color2.replace(/#/g, '');
  function d2h(d) {
    return d.toString(16);
  } // convert a decimal value to hex
  function h2d(h) {
    return parseInt(h, 16);
  } // convert a hex value to decimal

  weight = typeof weight !== 'undefined' ? weight : 50; // set the weight to 50%, if that argument is omitted

  let color = '#';

  for (let i = 0; i <= 5; i += 2) {
    // loop through each of the 3 hex pairs—red, green, and blue
    const v1 = h2d(color1.substr(i, 2)), // extract the current pairs
      v2 = h2d(color2.substr(i, 2));
    // combine the current pairs from each source color, according to the specified weight
    let val = d2h(Math.floor(v2 + (v1 - v2) * (weight / 100.0)));

    while (val.length < 2) {
      val = `0${val}`;
    } // prepend a '0' if val results in a single digit

    color += val; // concatenate val to our new color string
  }

  return color; // PROFIT!
};
