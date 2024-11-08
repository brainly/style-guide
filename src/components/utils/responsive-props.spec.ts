import {
  generateResponsiveClassNames,
  mergeResponsiveProps,
} from './responsive-props';

describe('mergeResponsiveProps', () => {
  it('returns object with each breakpoint being array of corresponding breakpoint values from each item', () => {
    expect(
      mergeResponsiveProps([
        ['xs', 'sm', 'xl'],
        ['align-left', 'align-right', 'align-center'],
      ])
    ).toEqual({
      sm: ['xs', 'align-left'],
      md: ['sm', 'align-right'],
      lg: ['xl', 'align-center'],
    });
  });
  it(`when one prop has missing value on breakpoint
  and has value for smaller breakpoint
  and others props have value on that breakpoint,
  then it returns smaller breakpoint value`, () => {
    expect(
      mergeResponsiveProps([
        ['xs', null, 'xl'],
        ['align-left', 'align-right', null],
      ])
    ).toEqual({
      sm: ['xs', 'align-left'],
      md: ['xs', 'align-right'],
      lg: ['xl', 'align-right'],
    });
  });
  it(`when any of objects doesnt have value for same breakpoint, then it skips this breakpoint`, () => {
    expect(
      mergeResponsiveProps([
        ['xs', null, 'xl'],
        ['align-left', null, 'align-right'],
      ])
    ).toEqual({
      sm: ['xs', 'align-left'],
      lg: ['xl', 'align-right'],
    });
  });
  it('when item is primitive value, then it uses this value for all breakpoints', () => {
    expect(
      mergeResponsiveProps(['xs', ['align-left', null, 'align-right']])
    ).toEqual({
      sm: ['xs', 'align-left'],
      md: ['xs', 'align-left'],
      lg: ['xs', 'align-right'],
      xl: ['xs', 'align-right'],
    });
  });
});
describe('generateResponsiveClassNames', () => {
  // @ts-ignore TS7006
  const generateClass = prop => (prop ? 'foo' : 'bar');

  const responsivePropsCases = [
    [
      'object',
      'all breakpoints',
      {
        sm: true,
        md: false,
        lg: true,
        xl: true,
      },
      ['foo', 'md:bar', 'lg:foo', 'xl:foo'],
    ],
    [
      'object',
      'some breakpoints',
      {
        sm: true,
        md: false,
        lg: true,
      },
      ['foo', 'md:bar', 'lg:foo'],
    ],
    ['object', 'no breakpoints', {}, []],
    [
      'object',
      'invalid breakpoints',
      {
        foo: 'bar',
      },
      [],
    ],
    [
      'array',
      'all breakpoints',
      [true, true, false, false],
      ['foo', 'md:foo', 'lg:bar', 'xl:bar'],
    ],
    [
      'array',
      'null breakpoints',
      [true, true, null, false],
      ['foo', 'md:foo', 'xl:bar'],
    ],
    [
      'array',
      'undefined breakpoints',
      [true, true, undefined, false],
      ['foo', 'md:foo', 'xl:bar'],
    ],
    [
      'array',
      'skipped breakpoints', // eslint-disable-next-line no-sparse-arrays
      [true, true, , false],
      ['foo', 'md:foo', 'xl:bar'],
    ],
    ['array', 'no breakpoints', [], []],
    [
      'array',
      'too many breakpoints',
      [true, true, false, false, true, true, true],
      ['foo', 'md:foo', 'lg:bar', 'xl:bar'],
    ],
  ];

  it.each(responsivePropsCases)(
    'renders responsive classNames when prop passed as %s with %s',
    // @ts-ignore TS2345
    (type, testCase, prop, classNames) => {
      expect(generateResponsiveClassNames(generateClass, prop)).toEqual(
        classNames
      );
    }
  );
});
