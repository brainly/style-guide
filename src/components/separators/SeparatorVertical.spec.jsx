import React from 'react';
import SeparatorVertical, {SIZE} from './SeparatorVertical';
import {shallow} from 'enzyme';

test('render', () => {
  const separator = shallow(<SeparatorVertical />);

  expect(separator.hasClass('sg-vertical-separator')).toEqual(true);
  expect(separator.hasClass('sg-vertical-separator--normal')).toEqual(false);
});

test('size', () => {
  const separator = shallow(<SeparatorVertical size={SIZE.SMALL} />);

  expect(separator.hasClass('sg-vertical-separator--small')).toEqual(true);
});
