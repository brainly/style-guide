import React from 'react';
import Dropdown from './Dropdown';
import {shallow} from 'enzyme';

const item1st = {id: 'csdsd', text: '1st item'};
const item2nd = {id: 'sdfsdfg', text: '2nd item'};
const item3rd = {id: 'fdpks', text: '3rd item'};
const defaultItems = [item1st, item2nd, item3rd];
const defaultLabel = 'default Label';
const defaultProps = {items: defaultItems, label: defaultLabel};

test('render', () => {
  const dropDown = shallow(<Dropdown {...defaultProps} />);

  expect(dropDown.hasClass('sg-dropdown')).toEqual(true);

});

test('default full width', () => {
  const dropDown = shallow(<Dropdown {...defaultProps} />);

  expect(dropDown.hasClass('sg-dropdown--full-width')).toEqual(true);
});
test('no full width', () => {
  const dropDown = shallow(<Dropdown {...defaultProps} fullWidth={false} />);

  expect(dropDown.hasClass('sg-dropdown--full-width')).toEqual(false);
});

