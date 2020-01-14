import React from 'react';
import Label from './Label';
import Icon from 'icons/Icon';
import { shallow } from 'enzyme';
describe('Label', function () {
  test('render', function () {
    var label = shallow(React.createElement(Label, {
      type: "default",
      color: "blue"
    }, "example label"));
    expect(label.hasClass('sg-label')).toEqual(true);
    expect(label.hasClass('sg-label--blue-secondary-light')).toEqual(true);
  });
  test('render with icon', function () {
    var label = shallow(React.createElement(Label, {
      type: "default",
      iconType: "star"
    }, "example label"));
    var icon = label.find(Icon);
    expect(label.hasClass('sg-label')).toEqual(true);
    expect(icon).toHaveLength(1);
    expect(icon.props().type).toEqual('star');
  });
  test('render type strong', function () {
    var label = shallow(React.createElement(Label, {
      type: "strong",
      color: "mint"
    }, "example label"));
    expect(label.hasClass('sg-label')).toEqual(true);
    expect(label.hasClass('sg-label--mint-primary')).toEqual(true);
  });
  test('dark close button if default', function () {
    var mockCallback = jest.fn();
    var label = shallow(React.createElement(Label, {
      type: "default",
      color: "mint",
      onClose: mockCallback
    }, "example label"));
    expect(label.find('.sg-label__close-button')).toHaveLength(1);
    expect(label.find('div').find(Icon)).toHaveLength(1);
    expect(label.find('div').find(Icon).props().color).toEqual('dark');
  });
  test('clicking on close button calls onClose', function () {
    var mockCallback = jest.fn();
    var label = shallow(React.createElement(Label, {
      type: "strong",
      color: "mint",
      onClose: mockCallback
    }, "example label"));
    var closeDivNode = label.find('.sg-label__close-button');
    closeDivNode.simulate('click');
    expect(mockCallback).toHaveBeenCalled();
  });
});