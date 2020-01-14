import React from 'react';
import Search, { SIZE, COLOR } from './Search';
import Input from 'form-elements/Input';
import Icon, { TYPE, ICON_COLOR } from 'icons/Icon';
import { shallow } from 'enzyme';
import RoundButton from '../round-buttons/RoundButton';
test('render', function () {
  var search = shallow(React.createElement(Search, null));
  expect(search.hasClass('sg-search')).toEqual(true);
  expect(search.find(Input)).toHaveLength(1);
});
test('set Search specific properties to Input', function () {
  var search = shallow(React.createElement(Search, null));
  var input = search.find(Input);
  expect(input.props().type).toEqual('search');
  expect(input.props().withIcon).toEqual(true);
});
test('pass properties to Input, without Search specific', function () {
  var size = SIZE.LARGE;
  var color = COLOR.WHITE;
  var type = 'text';
  var withRoundButton = false;
  var search = shallow(React.createElement(Search, {
    color: color,
    size: size,
    valid: true,
    type: type,
    withRoundButton: withRoundButton
  }));
  var input = search.find(Input);
  expect(input.props().size).toEqual(size);
  expect(input.props().color).toEqual(color);
  expect(input.props().valid).toEqual(true);
  expect(input.props().type).toEqual('search');
  expect(input.props().withIcon).toEqual(true);
});
test('render icon', function () {
  var search = shallow(React.createElement(Search, null));
  var icon = search.find(Icon);
  expect(icon).toHaveLength(1);
  expect(search.find('.sg-search__icon')).toHaveLength(1);
  expect(icon.props().type).toEqual(TYPE.SEARCH);
  expect(icon.props().color).toEqual(ICON_COLOR.GRAY_SECONDARY);
  expect(icon.props().size).toEqual(18);
});
test('adaptive icwithRoundButtonon', function () {
  var search = shallow(React.createElement(Search, {
    withRoundButton: true
  }));
  var icon = search.find(RoundButton);
  expect(icon).toHaveLength(1);
});