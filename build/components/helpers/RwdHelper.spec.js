import React from 'react';
import RwdHelper, { TYPE } from './RwdHelper';
import { shallow } from 'enzyme';
import Icon, { TYPE as icoTypes } from 'icons/Icon';
test('render element', function () {
  var rwdHelper = shallow(React.createElement(RwdHelper, {
    hide: TYPE.SMALL_ONLY
  }, React.createElement("div", null, "inside div")));
  expect(rwdHelper.hasClass('sg-hide-for-small-only')).toEqual(true);
  expect(rwdHelper.is('div')).toEqual(true);
});
test('render element', function () {
  var rwdHelper = shallow(React.createElement(RwdHelper, {
    hide: TYPE.SMALL_ONLY
  }, React.createElement(Icon, {
    type: icoTypes.HEART
  })));
  expect(rwdHelper.hasClass('sg-hide-for-small-only')).toEqual(true);
  expect(rwdHelper.is(Icon)).toEqual(true);
});
test('render text', function () {
  var rwdHelper = shallow(React.createElement(RwdHelper, {
    hide: TYPE.SMALL_ONLY
  }, "Some text"));
  expect(rwdHelper.hasClass('sg-hide-for-small-only')).toEqual(true);
  expect(rwdHelper.is('span')).toEqual(true);
});
test('merge className', function () {
  var rwdHelper = shallow(React.createElement(RwdHelper, {
    hide: TYPE.SMALL_ONLY
  }, React.createElement("div", {
    className: "test"
  }, "inside div")));
  expect(rwdHelper.find('.test.sg-hide-for-small-only')).toHaveLength(1);
});