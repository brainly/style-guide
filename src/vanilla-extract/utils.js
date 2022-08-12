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
