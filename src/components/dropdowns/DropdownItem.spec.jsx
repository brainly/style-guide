import React from 'react';
import DropdownItem from './DropdownItem';
import {shallow} from 'enzyme';


test('render', () => {
  const text = 'xyz';
  const dropDown = shallow(<DropdownItem text={text} onClick={() => undefined}/>);
  const textItem = dropDown.find('.sg-dropdown__item-text');

  expect(dropDown.hasClass('sg-dropdown__item-hole')).toEqual(true);
  expect(textItem).toHaveLength(1);
  expect(textItem.text()).toEqual(text);
});

test('click working', () => {
  const onClick = jest.fn();
  const dropDown = shallow(<DropdownItem text="xyz" onClick={onClick}/>);

  expect(onClick.mock.calls).toHaveLength(0);

  dropDown.simulate('click');
  expect(onClick.mock.calls).toHaveLength(1);
});

test('click working', () => {
  const onClick = jest.fn();
  const dropDown = shallow(<DropdownItem text="xyz" onClick={onClick}/>);

  expect(onClick.mock.calls).toHaveLength(0);

  dropDown.simulate('click');
  expect(onClick.mock.calls).toHaveLength(1);
});
