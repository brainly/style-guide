// @flow strict

// $FlowFixMe
import {recipe as baseRecipe} from '@vanilla-extract/recipes';

const breakpoints = ['sm', 'md', 'lg', 'xl'];
const responsivePrefixes = ['', 'md:', 'lg:', 'xl:'];

const forceString = value =>
  typeof value === 'string' ? value : JSON.stringify(value);

export function responsiveRecipe(
  options = {},
  debugId = '',
  {responsiveVariants} = {responsiveVariants: []}
) {
  const finalOptions = {
    ...options,
    variants: {},
  };

  Object.keys(options.variants).forEach(variantGroupKey => {
    if (!responsiveVariants.includes(variantGroupKey)) {
      finalOptions.variants[variantGroupKey] =
        options.variants[variantGroupKey];
    } else {
      responsivePrefixes.forEach(prefix => {
        finalOptions.variants[`${prefix}${variantGroupKey}`] =
          options.variants[variantGroupKey];
      });
    }
  });

  const recipeFn = baseRecipe(finalOptions, debugId);

  return options => {
    const finalSelections = {};

    Object.keys(options).forEach(variantSelectionKey => {
      if (!responsiveVariants.includes(variantSelectionKey)) {
        finalSelections[variantSelectionKey] = options[variantSelectionKey];
      } else {
        if (typeof options[variantSelectionKey] !== 'object') {
          finalSelections[variantSelectionKey] = options[variantSelectionKey];
        }

        const responsiveSelection = options[variantSelectionKey];

        if (Array.isArray(responsiveSelection)) {
          (responsiveSelection.length > 4
            ? responsiveSelection.slice(0, 4)
            : responsiveSelection
          ).forEach((propBreakpointValue, index) => {
            if (
              propBreakpointValue !== null &&
              propBreakpointValue !== undefined
            ) {
              finalSelections[
                `${responsivePrefixes[index]}${variantSelectionKey}`
              ] = propBreakpointValue;
            }
          }, []);
        } else {
          breakpoints.forEach((breakpoint, index) => {
            if (
              responsiveSelection[breakpoint] !== null &&
              responsiveSelection[breakpoint] !== undefined
            ) {
              finalSelections[
                `${responsivePrefixes[index]}${variantSelectionKey}`
              ] = responsiveSelection[breakpoint];
            }
          });
        }
      }
    });

    return recipeFn(finalSelections, debugId);
  };
}

export const createResponsiveRecipe = (
  options = {},
  debugId,
  {responsiveVariants} = {responsiveVariants: []}
) => {
  const finalOptions = {
    ...options,
    variants: {},
  };

  Object.keys(options.variants).forEach(variantGroupKey => {
    if (!responsiveVariants.includes(variantGroupKey)) {
      finalOptions.variants[variantGroupKey] =
        options.variants[variantGroupKey];
    } else {
      responsivePrefixes.forEach(prefix => {
        finalOptions.variants[`${prefix}${variantGroupKey}`] =
          options.variants[variantGroupKey];
      });
    }
  });

  const recipeFn = baseRecipe(finalOptions, debugId);

  recipeFn.responsiveVariants = responsiveVariants;

  return {recipeFn, responsiveVariants};
};

export function runResponsiveRecipe({recipeFn, responsiveVariants}, options) {
  const finalSelections = {};

  Object.keys(options).forEach(variantSelectionKey => {
    if (!responsiveVariants.includes(variantSelectionKey)) {
      finalSelections[variantSelectionKey] = forceString(
        options[variantSelectionKey]
      );
    } else {
      if (typeof options[variantSelectionKey] !== 'object') {
        finalSelections[variantSelectionKey] = forceString(
          options[variantSelectionKey]
        );
      }

      const responsiveSelection = options[variantSelectionKey];

      if (
        responsiveSelection !== null &&
        responsiveSelection !== undefined &&
        Array.isArray(responsiveSelection)
      ) {
        (responsiveSelection.length > 4
          ? responsiveSelection.slice(0, 4)
          : responsiveSelection
        ).forEach((propBreakpointValue, index) => {
          if (
            propBreakpointValue !== null &&
            propBreakpointValue !== undefined
          ) {
            finalSelections[
              `${responsivePrefixes[index]}${variantSelectionKey}`
            ] = forceString(propBreakpointValue);
          }
        }, []);
      } else if (
        responsiveSelection !== null &&
        responsiveSelection !== undefined
      ) {
        breakpoints.forEach((breakpoint, index) => {
          if (
            responsiveSelection[breakpoint] !== null &&
            responsiveSelection[breakpoint] !== undefined
          ) {
            finalSelections[
              `${responsivePrefixes[index]}${variantSelectionKey}`
            ] = forceString(responsiveSelection[breakpoint]);
          }
        });
      }
    }
  });

  console.log(finalSelections);

  return recipeFn(finalSelections);
}
