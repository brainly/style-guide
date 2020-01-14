import React from 'react';
import SpinnerContainer from './SpinnerContainer';
import { shallow } from 'enzyme';
test('render', function () {
  var container = shallow(React.createElement(SpinnerContainer, null, "children"));
  expect(container.hasClass('sg-spinner-container')).toEqual(true);
});
test('loading', function () {
  var container = shallow(React.createElement(SpinnerContainer, {
    loading: true
  }));
  expect(container.find('.sg-spinner-container__overlay')).toHaveLength(1);
});