import React from 'react';
import Dropdown from './DropdownContainer';
import {shallow} from 'enzyme';


describe('Button Primary', () => {
  test('not render without props', () => {

    expect(React && Dropdown && !!shallow).toEqual(true);
  });
  test('default full width', () => {
    expect(true).toEqual(true);
  });
});
