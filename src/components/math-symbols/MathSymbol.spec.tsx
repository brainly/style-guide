import * as React from 'react';
import MathSymbol, {MATH_SYMBOL_TYPE, SIZE, ICON_COLOR} from './MathSymbol';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('MathSymbol', () => {
  it('should have an accessible title and img role', async () => {
    const type = 'pi';
    const icon = render(<MathSymbol type={type} />);

    expect(
      icon.getByRole('img', {
        name: type,
      })
    ).toBeTruthy();
  });

  it('render', () => {
    const icon = render(<MathSymbol type={MATH_SYMBOL_TYPE.SQUERE_ROOT} />);

    expect(icon.getByRole('img')).toBeTruthy();
    expect(icon.container.firstElementChild.querySelector('use')).toBeTruthy();
  });

  it('type passed to xlink:href', () => {
    const type = MATH_SYMBOL_TYPE.SQUERE_ROOT;
    const icon = render(<MathSymbol type={type} />);
    const use = icon.container.firstElementChild.querySelector('use');

    expect(use.getAttribute('xlink:href')).toEqual(
      `#sg-math-symbol-icon-${type}`
    );
  });

  it('colors', () => {
    const type = MATH_SYMBOL_TYPE.SQUERE_ROOT;
    const color = ICON_COLOR['icon-black'];
    const icon = render(<MathSymbol type={type} color={color} />);

    expect(
      icon.container.firstElementChild.classList.contains(
        `sg-math-symbol-icon--${color}`
      )
    ).toEqual(true);
  });

  it('size', () => {
    const size = SIZE.SMALL;
    const type = MATH_SYMBOL_TYPE.SQUERE_ROOT;
    const icon = render(<MathSymbol type={type} size={size} />);

    expect(
      icon.container.firstElementChild.classList.contains(
        `sg-math-symbol-icon--${size}`
      )
    ).toEqual(true);
  });

  it('wide', () => {
    const type = MATH_SYMBOL_TYPE.LIMIT;
    const icon = render(<MathSymbol type={type} />);

    expect(
      icon.container.firstElementChild.classList.contains(
        'sg-math-symbol-icon--wide'
      )
    ).toEqual(true);
  });

  it('wide with size', () => {
    const type = MATH_SYMBOL_TYPE.LIMIT;
    const size = SIZE.SMALL;
    const icon = render(<MathSymbol type={type} size={size} />);

    expect(
      icon.container.firstElementChild.classList.contains(
        'sg-math-symbol-icon--wide-small'
      )
    ).toEqual(true);
  });

  it('other props', () => {
    const type = MATH_SYMBOL_TYPE.SQUERE_ROOT;
    const icon = render(<MathSymbol type={type} data-foo="bar" />);

    expect(icon.container.firstElementChild.getAttribute('data-foo')).toEqual(
      'bar'
    );
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<MathSymbol type="pi" />);
    });

    it('should have no a11y violations when title is provided', async () => {
      await testA11y(<MathSymbol type="pi" title="Title" />);
    });
  });
});
