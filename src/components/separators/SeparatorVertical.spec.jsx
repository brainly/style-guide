import React from 'react';
import SeparatorVertical, {SIZE} from './SeparatorVertical';
import {shallow} from 'enzyme';

test('render', () => {
  const separator = shallow(
    <SeparatorVertical/>
  );

  expect(separator.hasClass('sg-separator')).toEqual(true);
  expect(separator.hasClass('sg-separator--normal')).toEqual(false);
});

test('size', () => {
  const separator = shallow(
    <SeparatorVertical size={SIZE.SMALL}/>
  );

  expect(separator.hasClass('sg-separator--small')).toEqual(true);
});
