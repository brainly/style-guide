import React from 'react';
import ButtonPrimary, {TYPE} from './ButtonPrimary';
import {shallow} from 'enzyme';

test('render', () => {
  const button = shallow(
    <ButtonPrimary>Some text</ButtonPrimary>
  );

  expect(button.hasClass('sg-button-primary')).toEqual(true);

});

test('type', () => {
  const type = TYPE.ALT;
  const button = shallow(
    <ButtonPrimary type={type}>Some text</ButtonPrimary>
  );

  expect(button.hasClass('sg-button-primary--' + type)).toEqual(true);
});

test('disabled', () => {
  const button = shallow(
    <ButtonPrimary disabled>Some text</ButtonPrimary>
  );

  expect(button.hasClass('sg-button-primary--disabled')).toEqual(true);
  expect(button.is('[disabled]')).toEqual(true);

});
test('not disabled', () => {
  const button = shallow(
    <ButtonPrimary>Some text</ButtonPrimary>
  );

  expect(button.hasClass('sg-button-primary--disabled')).toEqual(false);
  expect(button.is('[disabled]')).toEqual(false);

});

test('primary don\'t have small', () => {
  const button = shallow(
    <ButtonPrimary small>Some text</ButtonPrimary>
  );

  expect(button.hasClass('sg-button-primary--small')).toEqual(false);
});
test('wide', () => {
  const button = shallow(
    <ButtonPrimary wide>Some text</ButtonPrimary>
  );

  expect(button.hasClass('sg-button-primary--full-width')).toEqual(true);
});

test('icon', () => {
  const icon = <span>:P</span>;
  const button = shallow(
    <ButtonPrimary icon={icon}>Some text</ButtonPrimary>
  );

  expect(button.contains(icon)).toEqual(true);
  expect(button.find('.sg-button-primary__icon')).toHaveLength(1);
});

test('no icon', () => {
  const button = shallow(
    <ButtonPrimary>Some text</ButtonPrimary>
  );

  expect(button.find('.sg-button-primary__icon')).toHaveLength(0);
});
