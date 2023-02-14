import * as React from 'react';
import SeparatorHorizontal, {TYPE} from './SeparatorHorizontal';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('SeparatorHorizontal', () => {
  it('render', () => {
    const separator = render(<SeparatorHorizontal />);

    expect(separator.queryByRole('separator')).toBeTruthy();
  });

  it('type', () => {
    const separator = render(<SeparatorHorizontal type={TYPE.SPACED} />);

    expect(
      separator.container.firstElementChild.classList.contains(
        'sg-horizontal-separator--spaced'
      )
    ).toEqual(true);
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<SeparatorHorizontal />);
    });
  });
});
