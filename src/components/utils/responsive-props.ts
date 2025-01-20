export type ResponsivePropObjectType = {
  sm?: unknown;
  md?: unknown;
  lg?: unknown;
  xl?: unknown;
};
export type ResponsivePropConjuctionType =
  | unknown
  | Array<unknown | null | undefined>
  | {
      sm?: unknown;
      md?: unknown;
      lg?: unknown;
      xl?: unknown;
    };
export type ResponsivePropType<T> =
  | T
  | Array<T | null | undefined>
  | Readonly<{
      sm?: T;
      md?: T;
      lg?: T;
      xl?: T;
    }>;
export const breakpoints = ['sm', 'md', 'lg', 'xl'];
const responsivePrefixes = ['', 'md', 'lg', 'xl'];

export function mergeResponsiveProps(
  props: Array<ResponsivePropConjuctionType>
) {
  // convert to objects
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
      return (prop.length > 4 ? prop.slice(0, 4) : prop).reduce(
        (acc, next, index) => {
          if (next !== null && next !== undefined) {
            // @ts-ignore TS7005
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
  // fill empty breakpoints when other props have values
  // @ts-ignore TS7034
  let lastRowValues = [];

  breakpoints.forEach(breakpoint => {
    const valueBreakpointExist = propObjects.some(
      propObject =>
        propObject[breakpoint] !== null && propObject[breakpoint] !== undefined
    );

    if (valueBreakpointExist) {
      // eslint-disable-next-line no-loop-func
      propObjects.forEach((propObject, propObjectsIndex) => {
        // @ts-ignore TS7005
        if (lastRowValues[propObjectsIndex] && !propObject[breakpoint]) {
          // @ts-ignore TS7005
          propObject[breakpoint] = lastRowValues[propObjectsIndex];
        }
      });
    }

    lastRowValues = propObjects.map(propObject => propObject[breakpoint]);
  });
  breakpoints.forEach;
  // merge
  return breakpoints.reduce((acc, breakpoint) => {
    if (
      propObjects.every(
        propObject =>
          propObject[breakpoint] !== null &&
          propObject[breakpoint] !== undefined
      )
    ) {
      // @ts-ignore TS7053
      acc[breakpoint] = propObjects.map<unknown>(
        propObject => propObject[breakpoint]
      );
    }

    return acc;
  }, {});
}
export function generateResponsiveClassNames<T>(
  createBaseClassName: (arg0: T) => string,
  prop?: ResponsivePropType<T>
): Array<string> {
  if (prop === null || prop === undefined) {
    return [];
  }

  if (typeof prop !== 'object') {
    return [createBaseClassName(prop)];
  }

  if (Array.isArray(prop)) {
    return (prop.length > 4 ? prop.slice(0, 4) : prop).reduce(
      (acc, propBreakpointValue, index) => {
        if (propBreakpointValue === null || propBreakpointValue === undefined) {
          return acc;
        } else if (!createBaseClassName(propBreakpointValue)) {
          return acc;
        } else {
          acc.push(
            // @ts-ignore TS2345
            `${
              responsivePrefixes[index] ? `${responsivePrefixes[index]}:` : ''
            }${createBaseClassName(propBreakpointValue)}`
          );
          return acc;
        }
      },
      []
    );
  }

  return breakpoints
    .map(breakpoint => {
      // @ts-ignore TS7053
      if (prop[breakpoint] === null || prop[breakpoint] === undefined) {
        return '';
        // @ts-ignore TS7053
      } else if (!createBaseClassName(prop[breakpoint])) {
        return '';
      } else {
        return breakpoint === 'sm'
          ? // @ts-ignore TS7053
            createBaseClassName(prop[breakpoint])
          : // @ts-ignore TS7053
            `${breakpoint}:${createBaseClassName(prop[breakpoint])}`;
      }
    })
    .filter(className => className);
}
