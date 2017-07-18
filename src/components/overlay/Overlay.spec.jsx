import React from 'react';
import Overlay from './Overlay';
import {shallow} from 'enzyme';

test('render', () => {
  const overlay = shallow(
    <Overlay/>
  );

  expect(overlay.hasClass('sg-overlay')).toEqual(true);
});

test('children', () => {
  const overlay = shallow(
    <Overlay><div className="test"></div></Overlay>
  );

  expect(overlay.find('.test')).toHaveLength(1);
});
