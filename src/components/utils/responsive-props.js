// @flow strict

export type ResponsivePropObjectType = {
  sm?: mixed,
  md?: mixed,
  lg?: mixed,
  xl?: mixed,
};

export type ResponsivePropConjuctionType =
  | mixed
  | Array<?mixed>
  | {
      sm?: mixed,
      md?: mixed,
      lg?: mixed,
      xl?: mixed,
    };

export type ResponsivePropType<T> =
  | T
  | Array<?T>
  | {
      sm?: T,
      md?: T,
      lg?: T,
      xl?: T,
    };

export function mergeResponsiveProps(
  props: Array<ResponsivePropConjuctionType>
) {
  // zamien na obiekty
  const propObjects = props.map(prop => {
    if (prop === null || prop === undefined) {
      return {};
    } else if (typeof prop !== 'object') {
      return {
        sm: prop,
        md: prop,
        lg: prop,
        xl: prop,
      };
    } else if (Array.isArray(prop)) {
      const breakpoints = ['sm', 'md', 'lg', 'xl'];

      return (prop.length > 4 ? prop.slice(0, 4) : prop).reduce(
        (acc, next, index) => {
          if (next !== null && next !== undefined) {
            acc[breakpoints[index]] = next;
          }
          return acc;
        },
        {}
      );
    } else {
      return {...prop};
    }
  });

  // wyciągnij wspólne propsy dla breakpointów
  const breakpoints = ['sm', 'md', 'lg', 'xl'];
  let lastRowValues = [];

  for (let i = 0; i <= 3; i++) {
    const valueBreakpointExist = propObjects.some(
      propObject =>
        propObject[breakpoints[i]] !== null &&
        propObject[breakpoints[i]] !== undefined
    );

    if (valueBreakpointExist) {
      // eslint-disable-next-line no-loop-func
      propObjects.forEach((propObject, propObjectsIndex) => {
        if (lastRowValues[propObjectsIndex] && !propObject[breakpoints[i]]) {
          propObject[breakpoints[i]] = lastRowValues[propObjectsIndex];
        }
      });
    }

    lastRowValues = propObjects.map(propObject => propObject[breakpoints[i]]);
  }

  return ['sm', 'md', 'lg', 'xl'].reduce((acc, breakpoint) => {
    if (
      propObjects.every(
        propObject =>
          propObject[breakpoint] !== null &&
          propObject[breakpoint] !== undefined
      )
    ) {
      acc[breakpoint] = propObjects.map<mixed>(
        propObject => propObject[breakpoint]
      );
    }
    return acc;
  }, {});
}

export function generateResponsiveClassNames<T>(
  createBaseClassName: T => string,
  prop?: ResponsivePropType<T>
): Array<string> {
  if (!prop) {
    return [];
  }

  if (typeof prop !== 'object') {
    return [createBaseClassName(prop)];
  }

  if (Array.isArray(prop)) {
    const breakpoints = ['', 'md', 'lg', 'xl'];

    return (prop.length > 4 ? prop.slice(0, 4) : prop).reduce(
      (acc, propBreakpointValue, index) => {
        if (propBreakpointValue === null || propBreakpointValue === undefined) {
          return acc;
        } else {
          acc.push(
            `${
              breakpoints[index] ? `${breakpoints[index]}:` : ''
            }${createBaseClassName(propBreakpointValue)}`
          );
          return acc;
        }
      },
      []
    );
  }

  return ['sm', 'md', 'lg', 'xl']
    .map(breakpoint => {
      if (prop[breakpoint] === null || prop[breakpoint] === undefined) {
        return '';
      } else {
        return breakpoint === 'sm'
          ? createBaseClassName(prop[breakpoint])
          : `${breakpoint}:${createBaseClassName(prop[breakpoint])}`;
      }
    })
    .filter(className => className);
}
