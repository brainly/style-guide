import * as React from 'react';
import SeparatorVertical, {SIZE} from './SeparatorVertical';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('SeparatorVertical', () => {
  test('size', () => {
    const separator = render(<SeparatorVertical size={SIZE.SMALL} />);

    expect(
      separator.container.firstElementChild.classList.contains(
        'sg-vertical-separator--small'
      )
    ).toEqual(true);
  });

  it('should have role="separator" and vertical orientation', () => {
    const separator = render(<SeparatorVertical />);

    expect(
      separator.getByRole('separator').getAttribute('aria-orientation')
    ).toBe('vertical');
  });

  it('should have no a11y violations', async () => {
    await testA11y(<SeparatorVertical />);
  });
});
