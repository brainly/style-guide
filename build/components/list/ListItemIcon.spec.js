import React from 'react';
import { shallow } from 'enzyme';
import ListItemIcon from './ListItemIcon';
describe('<ListItemIcon>', function () {
  it('renders', function () {
    var listItemIcon = shallow(React.createElement(ListItemIcon, null));
    expect(listItemIcon.hasClass('sg-list__icon')).toEqual(true);
  });
  it('renders with small right spcing', function () {
    var listItemIcon = shallow(React.createElement(ListItemIcon, {
      small: true
    }));
    expect(listItemIcon.hasClass('sg-list__icon--spacing-right-small')).toEqual(true);
  });
  it('renders children', function () {
    var children = React.createElement("div", null, "Text");
    var listItemIcon = shallow(React.createElement(ListItemIcon, null, children));
    expect(listItemIcon.contains(children)).toEqual(true);
  });
  it('renders additional classes', function () {
    var list = shallow(React.createElement(ListItemIcon, {
      className: "m4l"
    }, "42"));
    expect(list.hasClass('sg-list__icon')).toEqual(true);
    expect(list.hasClass('m4l')).toEqual(true);
  });
});