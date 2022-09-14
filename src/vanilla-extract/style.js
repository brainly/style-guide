import {styleVariants, style} from '@vanilla-extract/css';

export const sgStyle = (styleObject, options) => {
  return {
    styles: style(styleObject),
    responsive:
      options && typeof options.responsive === 'boolean'
        ? options.responsive
        : false,
  };
};

export const sgStyleVariants = (styleObject, options) => {
  return {
    variants: styleVariants(styleObject),
    responsive:
      options && typeof options.responsive === 'boolean'
        ? options.responsive
        : false,
  };
};
