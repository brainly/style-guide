import React from 'react';
import DropdownContainer from './DropdownContainer';
import {shallow, mount} from 'enzyme';


const item1st = {id: 'csdsd', text: '1st item'};
const item2nd = {id: 'sdfsdfg', text: '2nd item'};
const item3rd = {id: 'fdpks', text: '3rd item'};
const defaultItems = [item1st, item2nd, item3rd];
const defaultLabel = 'default Label';
const defaultProps = {items: defaultItems, label: defaultLabel};


test('it\'s container so should\'t render presentional component', () => {
  const dropDown = shallow(<DropdownContainer {...defaultProps} />);

  expect(dropDown.hasClass('sg-dropdown')).toEqual(false);
});

test('mount should render Dropdown component', () => {
  const dropDown = mount(<DropdownContainer {...defaultProps} />);

  expect(dropDown.find('.sg-dropdown').length).toEqual(1);
});


test('no opened at start', () => {
  const dropDown = mount(<DropdownContainer {...defaultProps} />);

  expect(dropDown.hasClass('sg-dropdown--opened')).toEqual(false);
  expect(dropDown.state('isOpened')).toEqual(false);
});


test('opened at start when props passed', () => {
  const dropDown = mount(<DropdownContainer {...defaultProps} openOnStart />);

  expect(dropDown.find('.sg-dropdown').hasClass('sg-dropdown--opened')).toEqual(true);
  expect(dropDown.state('isOpened')).toEqual(true);
});


test('toggle open', () => {
  const dropDown = mount(<DropdownContainer {...defaultProps} />);

  expect(dropDown.hasClass('sg-dropdown--opened')).toEqual(false);
  expect(dropDown.state('isOpened')).toEqual(false);

  dropDown.simulate('click');
  expect(dropDown.find('.sg-dropdown').hasClass('sg-dropdown--opened')).toEqual(true);
  expect(dropDown.state('isOpened')).toEqual(true);

  dropDown.simulate('click');
  expect(dropDown.hasClass('sg-dropdown--opened')).toEqual(false);
  expect(dropDown.state('isOpened')).toEqual(false);
});

test('label from selected option', () => {
  const dropDown = mount(<DropdownContainer items={defaultItems} currentItem={item2nd} />);
  const label = dropDown.find('.sg-dropdown__hole > .sg-dropdown__item-text');

  expect(label.text()).toEqual(item2nd.text);
});

test('label and currentItem not defined', () => {
  const dropDown = mount(<DropdownContainer items={[]} />);
  const label = dropDown.find('.sg-dropdown__item-text');

  expect(label.text()).toEqual('');
});

test('default select', () => {
  const dropDown = shallow(<DropdownContainer items={defaultItems} currentItem={item2nd} />);

  expect(dropDown.state('currentItem')).toEqual(item2nd);
});

test('label contains class sg-dropdown__item-text', () => {
  const dropDown = mount(<DropdownContainer items={[]} label={defaultLabel} />);
  const label = dropDown.find('.sg-dropdown__item-text');

  expect(label).toHaveLength(1);
  expect(label.text()).toEqual(defaultLabel);
});

test('render all options', () => {
  const label = 1;
  const items = defaultItems;
  const dropDown = mount(<DropdownContainer items={items} currentItem={item2nd} />);
  const options = dropDown.find('.sg-dropdown__item-text');

  expect(options).toHaveLength(label + items.length);
});

test('clicking options + calling on props change', () => {
  const onChange = jest.fn();
  const dropDown = mount(<DropdownContainer items={defaultItems} currentItem={item2nd} onChange={onChange} />);
  const options = dropDown.find('.sg-dropdown__item-text');

  const option1st = options.at(1);
  const option2nd = options.at(2);

  expect(onChange.mock.calls).toHaveLength(0);
  expect(dropDown.state('currentItem')).toEqual(item2nd);

  option1st.simulate('click');
  expect(onChange.mock.calls).toHaveLength(1);
  expect(dropDown.state('currentItem')).toEqual(item1st);

  option1st.simulate('click');
  expect(onChange.mock.calls).toHaveLength(1); //selecting same, no changes
  expect(dropDown.state('currentItem')).toEqual(item1st);

  option2nd.simulate('click');
  expect(onChange.mock.calls).toHaveLength(2);
  expect(dropDown.state('currentItem')).toEqual(item2nd);
});

