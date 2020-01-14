import React from 'react';
import LabelDeprecated, { SIZE, ICON_COLOR, ICON_TYPE, ICON_SIZE, LabelDeprecatedIcon } from './LabelDeprecated';
import Icon from 'icons/Icon';
import { shallow } from 'enzyme';
describe('LabelDeprecated', function () {
  test('render', function () {
    var iconType = ICON_TYPE.STAR;
    var label = shallow(React.createElement(LabelDeprecated, {
      iconType: iconType,
      text: "test"
    }));
    var icon = label.find(LabelDeprecatedIcon);
    var textLabel = label.find('label.sg-label-deprecated__text');
    expect(label.hasClass('sg-label-deprecated')).toEqual(true);
    expect(textLabel).toHaveLength(1);
    expect(icon).toHaveLength(1);
    expect(icon.props().iconType).toEqual(iconType);
  });
  test('icon color', function () {
    var iconType = ICON_TYPE.HEART;
    var iconColor = ICON_COLOR.LAVENDER;
    var label = shallow(React.createElement(LabelDeprecated, {
      iconType: iconType,
      iconColor: iconColor,
      text: "test"
    }));
    var icon = label.find(LabelDeprecatedIcon);
    expect(icon.props().iconColor).toEqual(iconColor);
  });
  test('size', function () {
    var size = SIZE.SMALL;
    var iconType = ICON_TYPE.HEART;
    var label = shallow(React.createElement(LabelDeprecated, {
      iconType: iconType,
      size: size,
      text: "test"
    }));
    var icon = label.find(LabelDeprecatedIcon);
    expect(label.hasClass('sg-label-deprecated--small')).toEqual(true);
    expect(icon.props().iconSize).toEqual(ICON_SIZE[size]);
  });
  test('default size', function () {
    var size = SIZE.NORMAL;
    var iconType = ICON_TYPE.HEART;
    var label = shallow(React.createElement(LabelDeprecated, {
      iconType: iconType,
      size: size,
      text: "test"
    }));
    var icon = label.find(LabelDeprecatedIcon);
    expect(label.hasClass('sg-label-deprecated--small')).toEqual(false);
    expect(label.hasClass('sg-label-deprecated--large')).toEqual(false);
    expect(icon.props().iconSize).toEqual(ICON_SIZE[size]);
  });
  test('secondary label', function () {
    var label = shallow(React.createElement(LabelDeprecated, {
      secondary: true,
      text: "test"
    }));
    expect(label.hasClass('sg-label-deprecated--secondary')).toEqual(true);
  });
  test('emphasised', function () {
    var label = shallow(React.createElement(LabelDeprecated, {
      emphasised: true,
      text: "test"
    }));
    expect(label.hasClass('sg-label-deprecated--emphasised')).toEqual(true);
  });
  test('elements to top', function () {
    var iconType = ICON_TYPE.HEART;
    var label = shallow(React.createElement(LabelDeprecated, {
      iconType: iconType,
      elementsToTop: true,
      text: "test"
    }));
    expect(label.hasClass('sg-label-deprecated--elements-to-the-top')).toEqual(true);
  });
  test('label with no text', function () {
    var iconType = ICON_TYPE.HEART;
    var label = shallow(React.createElement(LabelDeprecated, {
      iconType: iconType
    }));
    var textLabel = label.find('div.sg-label-deprecated__text');
    expect(textLabel).toHaveLength(0);
  });
  test('label with a number', function () {
    var label = shallow(React.createElement(LabelDeprecated, {
      secondary: true,
      text: "test",
      number: 23
    }));
    var numberLabel = label.find('div.sg-label-deprecated__number');
    expect(numberLabel).toHaveLength(1);
    var label2 = shallow(React.createElement(LabelDeprecated, {
      secondary: true,
      text: "test",
      number: 0
    }));
    var numberLabel2 = label2.find('div.sg-label-deprecated__number');
    expect(numberLabel2).toHaveLength(1);
  });
  test('passing children', function () {
    var element = React.createElement("div", {
      className: "smth123"
    }, "xyz");
    var label = shallow(React.createElement(LabelDeprecated, null, element));
    expect(label.find('div.smth123')).toHaveLength(1);
  });
});
describe('LabelDeprecatedIcon', function () {
  test('render icon and pass props', function () {
    var iconType = ICON_TYPE.STAR;
    var iconColor = ICON_COLOR.BLUE;
    var iconSize = 10;
    var label = shallow(React.createElement(LabelDeprecatedIcon, {
      iconType: iconType,
      iconColor: iconColor,
      iconSize: iconSize
    }));
    var icon = label.find(Icon);
    expect(icon).toHaveLength(1);
    expect(icon.props().type).toEqual(iconType);
    expect(icon.props().color).toEqual(iconColor);
    expect(icon.props().size).toEqual(iconSize);
  });
  test('render content', function () {
    var content = React.createElement("div", {
      className: "xyz"
    }, "xyz123");
    var label = shallow(React.createElement(LabelDeprecatedIcon, {
      iconContent: content
    }));
    var icon = label.find(Icon);
    expect(icon).toHaveLength(0);
    expect(label.find('.xyz')).toHaveLength(1);
  });
  test('render null', function () {
    var label = shallow(React.createElement(LabelDeprecatedIcon, null));
    var icon = label.find(Icon);
    expect(icon).toHaveLength(0);
    expect(label.equals(null)).toBeTruthy();
  });
});