import { shallow } from 'enzyme';
import React from 'react';
import List from './List';
describe('<List>', function () {
  it('renders', function () {
    var list = shallow(React.createElement(List, null));
    expect(list.hasClass('sg-list')).toEqual(true);
  });
  it('renders with spaced elements', function () {
    var list = shallow(React.createElement(List, {
      spaced: true
    }));
    expect(list.hasClass('sg-list--spaced-elements')).toEqual(true);
  });
  test('renders with default spacing', function () {
    var list = shallow(React.createElement(List, null));
    expect(list.hasClass('sg-list--spaced-elements')).toEqual(false);
  });
  it('renders additional classes', function () {
    var list = shallow(React.createElement(List, {
      className: "m4l"
    }));
    expect(list.hasClass('sg-list')).toEqual(true);
    expect(list.hasClass('m4l')).toEqual(true);
  });
});