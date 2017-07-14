import React from 'react';
import SeparatorHorizontal, {TYPE} from './SeparatorHorizontal';
import {shallow} from 'enzyme';

test('render', () => {
  const separator = shallow(
    <SeparatorHorizontal/>
  );

  expect(separator.hasClass('sg-horizontal-separator')).toEqual(true);
  expect(separator.hasClass('sg-horizontal-separator--normal')).toEqual(false);
});

test('type', () => {
  const separator = shallow(
    <SeparatorHorizontal type={TYPE.SPACED}/>
  );

  expect(separator.hasClass('sg-horizontal-separator--spaced')).toEqual(true);
});
