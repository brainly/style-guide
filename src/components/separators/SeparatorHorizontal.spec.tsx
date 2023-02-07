import * as React from 'react';
import SeparatorHorizontal, {TYPE} from './SeparatorHorizontal';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('SeparatorHorizontal', () => {
  test('render', () => {
    const separator = render(<SeparatorHorizontal />);

    expect(separator.queryByRole('separator')).toBeTruthy();
  });

  test('type', () => {
    const separator = render(<SeparatorHorizontal type={TYPE.SPACED} />);

    expect(
      separator.container.firstElementChild.classList.contains(
        'sg-horizontal-separator--spaced'
      )
    ).toEqual(true);
  });

  it('should have no a11y violations', async () => {
    await testA11y(<SeparatorHorizontal />);
  });
});
