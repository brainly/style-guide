import {generateResponsiveClassNames} from './responsive-props';

describe('generateResponsiveClassNames', () => {
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
      'skipped breakpoints',
      // eslint-disable-next-line no-sparse-arrays
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
    (type, testCase, prop, classNames) => {
      expect(generateResponsiveClassNames(generateClass, prop)).toEqual(
        classNames
      );
    }
  );
});
