import React from 'react';
import Overlay from './Overlay';
import {shallow} from 'enzyme';

test('render', () => {
  const overlay = shallow(
    <Overlay/>
  );

  expect(overlay.hasClass('sg-overlay')).toEqual(true);
});
