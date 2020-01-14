import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import DropdownContainer from './DropdownContainer';
import { shallow, mount } from 'enzyme';
var item1st = {
  id: 'csdsd',
  text: '1st item'
};
var item2nd = {
  id: 'sdfsdfg',
  text: '2nd item'
};
var item3rd = {
  id: 'fdpks',
  text: '3rd item'
};
var defaultItems = [item1st, item2nd, item3rd];
var defaultLabel = 'default Label';
var defaultProps = {
  items: defaultItems,
  label: defaultLabel
};
test("it's container so should't render presentional component", function () {
  var dropDown = shallow(React.createElement(DropdownContainer, defaultProps));
  expect(dropDown.hasClass('sg-dropdown')).toEqual(false);
});
test('mount should render Dropdown component', function () {
  var dropDown = mount(React.createElement(DropdownContainer, defaultProps));
  expect(dropDown.find('.sg-dropdown').length).toEqual(1);
});
test('it is closed by default', function () {
  var dropDown = mount(React.createElement(DropdownContainer, defaultProps));
  expect(dropDown.find('.sg-dropdown').hasClass('sg-dropdown--opened')).toEqual(false);
});
test('it is opened when props passed', function () {
  var dropDown = mount(React.createElement(DropdownContainer, _extends({}, defaultProps, {
    isOpened: true
  })));
  expect(dropDown.find('.sg-dropdown').hasClass('sg-dropdown--opened')).toEqual(true);
});
test('onToggle property', function () {
  var onToggle = jest.fn();
  var dropDown = mount(React.createElement(DropdownContainer, _extends({}, defaultProps, {
    onToggle: onToggle
  })));
  expect(onToggle).not.toHaveBeenCalled();
  dropDown.simulate('click');
  expect(onToggle).toHaveBeenCalled();
});
test('label from selected option', function () {
  var dropDown = mount(React.createElement(DropdownContainer, {
    items: defaultItems,
    currentItem: item2nd
  }));
  var label = dropDown.find('.sg-dropdown__hole > .sg-dropdown__item-text');
  expect(label.text()).toEqual(item2nd.text);
});
test('label and currentItem not defined', function () {
  var dropDown = mount(React.createElement(DropdownContainer, {
    items: []
  }));
  var label = dropDown.find('.sg-dropdown__item-text');
  expect(label.text()).toEqual('');
});
test('default select', function () {
  var dropDown = shallow(React.createElement(DropdownContainer, {
    items: defaultItems,
    currentItem: item2nd
  }));
  expect(dropDown.state('currentItem')).toEqual(item2nd);
});
test('label contains class sg-dropdown__item-text', function () {
  var dropDown = mount(React.createElement(DropdownContainer, {
    items: [],
    label: defaultLabel
  }));
  var label = dropDown.find('.sg-dropdown__item-text');
  expect(label).toHaveLength(1);
  expect(label.text()).toEqual(defaultLabel);
});
test('render all options', function () {
  var label = 1;
  var items = defaultItems;
  var dropDown = mount(React.createElement(DropdownContainer, {
    items: items,
    currentItem: item2nd
  }));
  var options = dropDown.find('.sg-dropdown__item-text');
  expect(options).toHaveLength(label + items.length);
});
test('clicking options + calling on props change', function () {
  var onChange = jest.fn();
  var dropDown = mount(React.createElement(DropdownContainer, {
    items: defaultItems,
    currentItem: item2nd,
    onChange: onChange
  }));
  var options = dropDown.find('.sg-dropdown__item-text');
  var option1st = options.at(1);
  var option2nd = options.at(2);
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