import * as React from 'react';
import SeparatorHorizontal, {TYPE} from './SeparatorHorizontal';
import {render} from '@testing-library/react';

test('render', () => {
  const separator = render(<SeparatorHorizontal />);

  expect(separator.hasClass('sg-horizontal-separator')).toEqual(true);
  expect(separator.hasClass('sg-horizontal-separator--normal')).toEqual(false);
});
test('type', () => {
  const separator = render(<SeparatorHorizontal type={TYPE.SPACED} />);

  expect(separator.hasClass('sg-horizontal-separator--spaced')).toEqual(true);
});
