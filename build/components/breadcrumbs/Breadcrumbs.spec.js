import React from 'react';
import Breadcrumb from './Breadcrumb';
import { shallow } from 'enzyme';
var elements = ['Coments (9)', 'Report', 'Follow'];
test('render', function () {
  var breadcrumb = shallow(React.createElement(Breadcrumb, {
    elements: elements
  }));
  expect(breadcrumb.hasClass('sg-breadcrumb-list')).toEqual(true);
  expect(breadcrumb.find('.sg-breadcrumb-list__element')).toHaveLength(elements.length);
});
test('short', function () {
  var breadcrumb = shallow(React.createElement(Breadcrumb, {
    elements: elements,
    short: true
  }));
  expect(breadcrumb.hasClass('sg-breadcrumb-list--short')).toEqual(true);
});
test('adaptive', function () {
  var breadcrumb = shallow(React.createElement(Breadcrumb, {
    elements: elements,
    adaptive: true
  }));
  expect(breadcrumb.hasClass('sg-breadcrumb-list--adaptive')).toEqual(true);
});