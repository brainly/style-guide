// @flow strict

import {defineProperties, createSprinkles} from '@vanilla-extract/sprinkles';
import {responsiveRecipe, createResponsiveRecipe} from './responsive-recipes';

export const button = createResponsiveRecipe(
  {
    variants: {
      color: {
        pink: {
          backgroundColor: 'pink',
        },
      },
      size: {
        s: {padding: 10},
        l: {
          padding: 20,
        },
      },
    },
  },
  undefined,
  {
    responsiveVariants: ['size'],
  }
);
