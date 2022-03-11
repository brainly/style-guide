import * as React from 'react';
import {render} from '@testing-library/react';
import MathSymbol from './MathSymbol';
import {testA11y} from '../../axe';

describe('MathSymbol', () => {
  it('should have an accessible title and img role', async () => {
    const type = 'pi';
    const icon = render(<MathSymbol type={type} />);

    expect(icon.getByRole('img', {name: type})).toBeTruthy();
  });
});

describe('MathSymbol a11y', () => {
  it('should have no a11y violations', async () => {
    await testA11y(<MathSymbol type="pi" />);
  });

  it('should have no a11y violations when title is provided', async () => {
    await testA11y(<MathSymbol type="pi" title="Title" />);
  });
});
