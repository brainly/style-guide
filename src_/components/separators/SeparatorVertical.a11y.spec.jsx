import * as React from 'react';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';
import SeparatorVertical from './SeparatorVertical';

describe('SeparatorVertical', () => {
  it('should have role="separator" and vertical orientation', () => {
    const separator = render(<SeparatorVertical />);

    expect(
      separator.getByRole('separator').getAttribute('aria-orientation')
    ).toBe('vertical');
  });
});

describe('SeparatorVertical a11y', () => {
  it('should have no a11y violations', async () => {
    await testA11y(<SeparatorVertical />);
  });
});
