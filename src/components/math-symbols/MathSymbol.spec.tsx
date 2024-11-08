import * as React from 'react';
import MathSymbol, {MATH_SYMBOL_TYPE} from './MathSymbol';
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
    // @ts-ignore TS18047
    expect(icon.container.firstElementChild.querySelector('use')).toBeTruthy();
  });

  it('other props', () => {
    const type = MATH_SYMBOL_TYPE.SQUERE_ROOT;
    const icon = render(<MathSymbol type={type} data-foo="bar" />);

    // @ts-ignore TS18047
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
