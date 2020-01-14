import React from 'react';
import { shallow } from 'enzyme';
import Flex, { FLEX_DIRECTION, FLEX_JUSTIFY_VALUES, FLEX_ALIGNMENT_VALUES, FLEX_MARGINS } from './Flex';
describe('<Flex>', function () {
  var children = React.createElement("div", null, "Text");
  it('renders without error', function () {
    shallow(React.createElement(Flex, null, children));
  });
  it('renders proper flex direction of flex', function () {
    var component = shallow(React.createElement(Flex, {
      direction: FLEX_DIRECTION.COLUMN
    }, children));
    expect(component.hasClass('sg-flex--column')).toEqual(true);
  });
  it('renders inline flex', function () {
    var component = shallow(React.createElement(Flex, {
      inlineFlex: true
    }, children));
    expect(component.hasClass('sg-flex--inline')).toEqual(true);
  });
  it('renders component with proper flex justify property', function () {
    var component = shallow(React.createElement(Flex, {
      justifyContent: FLEX_JUSTIFY_VALUES.FLEX_START
    }, children));
    expect(component.hasClass('sg-flex--justify-content-flex-start')).toEqual(true);
  });
  it('renders component with proper flex align property', function () {
    var component = shallow(React.createElement(Flex, {
      alignItems: FLEX_ALIGNMENT_VALUES.CENTER
    }, children));
    expect(component.hasClass('sg-flex--align-items-center')).toEqual(true);
  });
  it('renders component with set margin', function () {
    var component = shallow(React.createElement(Flex, {
      margin: FLEX_MARGINS.LARGE
    }, children));
    expect(component.hasClass('sg-flex--margin-l')).toEqual(true);
  });
  it('renders component with set margin top', function () {
    var component = shallow(React.createElement(Flex, {
      marginTop: FLEX_MARGINS.LARGE
    }, children));
    expect(component.hasClass('sg-flex--margin-top-l')).toEqual(true);
  });
  it('renders component with set margin right', function () {
    var component = shallow(React.createElement(Flex, {
      marginRight: FLEX_MARGINS.LARGE
    }, children));
    expect(component.hasClass('sg-flex--margin-right-l')).toEqual(true);
  });
  it('renders component with set margin bottom', function () {
    var component = shallow(React.createElement(Flex, {
      marginBottom: FLEX_MARGINS.LARGE
    }, children));
    expect(component.hasClass('sg-flex--margin-bottom-l')).toEqual(true);
  });
  it('renders component with set margin left', function () {
    var component = shallow(React.createElement(Flex, {
      marginLeft: FLEX_MARGINS.LARGE
    }, children));
    expect(component.hasClass('sg-flex--margin-left-l')).toEqual(true);
  });
});