import React from 'react';
import Search, {SIZE, COLOR, VALIDATION} from './Search';
import TextInput from '../form-elements/TextInput';
import Icon, {TYPE, COLOR as ICON_COLOR} from '../icons/Icon';
import {shallow} from 'enzyme';

test('render', () => {
  const button = shallow(
    <Search/>
  );

  expect(button.hasClass('sg-search')).toEqual(true);
  expect(button.find(TextInput)).toHaveLength(1);
});

test('set Search specific properties to TextInput', () => {
  const button = shallow(
    <Search/>
  );

  const textInput = button.find(TextInput);

  expect(textInput.props().type).toEqual('search');
  expect(textInput.props().withIcon).toEqual(true);
});

test('pass properties to TextInput, without Search specific', () => {
  const size = SIZE.LARGE;
  const validation = VALIDATION.VALID;
  const color = COLOR.ALT;
  const type = 'text';
  const withIcon = false;

  const button = shallow(
    <Search color={color} size={size} validation={validation} type={type} withIcon={withIcon}/>
  );

  const textInput = button.find(TextInput);

  expect(textInput.props().size).toEqual(size);
  expect(textInput.props().color).toEqual(color);
  expect(textInput.props().validation).toEqual(validation);

  expect(textInput.props().type).toEqual('search');
  expect(textInput.props().withIcon).toEqual(true);
});

test('render icon', () => {
  const button = shallow(
    <Search/>
  );

  const icon = button.find(Icon);

  expect(icon).toHaveLength(1);
  expect(button.find('.sg-search__icon')).toHaveLength(1);
  expect(icon.props().type).toEqual(TYPE.SEARCH);
  expect(icon.props().color).toEqual(ICON_COLOR.GRAY_SECONDARY);
  expect(icon.props().size).toEqual(18);
});

test('adaptive icon', () => {
  const search = shallow(
    <Search adaptiveIco={true}/>
  );

  const icon = search.find(Icon);

  expect(icon.props().color).toEqual(ICON_COLOR.ADAPTIVE);
});
