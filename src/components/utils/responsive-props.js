// @flow strict

export type ResponsivePropType<T> =
  | T
  | Array<?T>
  | {
      sm?: T,
      md?: T,
      lg?: T,
      xl?: T,
    };

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
