import * as React from 'react';
import SeparatorVertical, {SIZE} from './SeparatorVertical';
import {render} from '@testing-library/react';

test('render', () => {
  const separator = render(<SeparatorVertical />);

  expect(separator.hasClass('sg-vertical-separator')).toEqual(true);
  expect(separator.hasClass('sg-vertical-separator--normal')).toEqual(false);
});
test('size', () => {
  const separator = render(<SeparatorVertical size={SIZE.SMALL} />);

  expect(separator.hasClass('sg-vertical-separator--small')).toEqual(true);
});
