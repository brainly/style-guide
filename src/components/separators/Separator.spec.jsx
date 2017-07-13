import React from 'react';
import Separator, {SIZE} from './Separator';
import {shallow} from 'enzyme';

test('render', () => {
  const separator = shallow(
    <Separator/>
  );

  expect(separator.hasClass('sg-separator')).toEqual(true);
  expect(separator.hasClass('sg-separator--normal')).toEqual(false);
});

test('size', () => {
  const separator = shallow(
    <Separator size={SIZE.SMALL}/>
  );

  expect(separator.hasClass('sg-separator--small')).toEqual(true);
});
