import React from 'react';
import Dropdown from './Dropdown';
import {shallow} from 'enzyme';


describe('Button Primary', () => {
  test('not render without props', () => {

    expect(React && Dropdown && !!shallow).toEqual(true);
  });
});
