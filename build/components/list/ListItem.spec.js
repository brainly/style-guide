import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';
describe('<ListItem>', function () {
  it('renders', function () {
    var listItem = shallow(React.createElement(ListItem, null));
    expect(listItem.hasClass('sg-list__element')).toEqual(true);
  });
  it('renders children', function () {
    var children = React.createElement("div", null, "Text");
    var listItem = shallow(React.createElement(ListItem, null, children));
    expect(listItem.contains(children)).toEqual(true);
  });
  it('renders additional classes', function () {
    var list = shallow(React.createElement(ListItem, {
      className: "m4l"
    }, "42"));
    expect(list.hasClass('sg-list__element')).toEqual(true);
    expect(list.hasClass('m4l')).toEqual(true);
  });
});