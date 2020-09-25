import React from 'react';
import Search, {SIZE, COLOR} from './Search';
import Input from 'form-elements/Input';
import Icon, {TYPE, ICON_COLOR} from 'icons/Icon';
import Button from 'buttons/Button';
import {shallow} from 'enzyme';

test('render', () => {
  const search = shallow(<Search />);

  expect(search.hasClass('sg-search')).toEqual(true);
  expect(search.find(Input)).toHaveLength(1);
});

test('set Search specific properties to Input', () => {
  const search = shallow(<Search />);

  const input = search.find(Input);

  expect(input.props().type).toEqual('search');
  expect(input.props().withIcon).toEqual(true);
});

test('pass properties to Input, without Search specific', () => {
  const size = SIZE.L;
  const color = COLOR.WHITE;
  const type = 'text';
  const withRoundButton = false;

  const search = shallow(
    <Search
      color={color}
      size={size}
      valid
      type={type}
      withRoundButton={withRoundButton}
    />
  );

  const input = search.find(Input);

  expect(input.props().size).toEqual(size);
  expect(input.props().color).toEqual(color);
  expect(input.props().valid).toEqual(true);

  expect(input.props().type).toEqual('search');
  expect(input.props().withIcon).toEqual(true);
});

test('render icon', () => {
  const search = shallow(<Search />);

  const icon = search.find(Icon);

  expect(icon).toHaveLength(1);
  expect(search.find('.sg-search__icon')).toHaveLength(1);
  expect(icon.props().type).toEqual(TYPE.SEARCH);
  expect(icon.props().color).toEqual(ICON_COLOR.GRAY_SECONDARY);
  expect(icon.props().size).toEqual(16);
});

test('adaptive Button with icon', () => {
  const search = shallow(<Search withRoundButton />);

  const icon = search.find(Button);

  expect(icon).toHaveLength(1);
});
