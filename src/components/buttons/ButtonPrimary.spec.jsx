import React from 'react';
import ButtonPrimary, {BUTTON_PRIMARY_TYPE} from './ButtonPrimary';
import {shallow} from 'enzyme';

test('render', () => {
  const button = shallow(<ButtonPrimary>Some text</ButtonPrimary>);

  expect(button.hasClass('sg-button-primary')).toEqual(true);
});

test('type', () => {
  const buttonType = BUTTON_PRIMARY_TYPE.ALT;
  const button = shallow(
    <ButtonPrimary buttonType={buttonType}>Some text</ButtonPrimary>
  );

  expect(button.hasClass(`sg-button-primary--${buttonType}`)).toEqual(true);
});

test('button with href', () => {
  const button = shallow(
    <ButtonPrimary href="http://example.com">Some text</ButtonPrimary>
  );

  expect(button.find('a')).toHaveLength(1);
  expect(button.find('button')).toHaveLength(0);
});

test('disabled', () => {
  const button = shallow(<ButtonPrimary disabled>Some text</ButtonPrimary>);

  expect(button.hasClass('sg-button-primary--disabled')).toEqual(true);
  expect(button.is('[disabled]')).toEqual(true);
});
test('not disabled', () => {
  const button = shallow(<ButtonPrimary>Some text</ButtonPrimary>);

  expect(button.hasClass('sg-button-primary--disabled')).toEqual(false);
  expect(button.is('[disabled]')).toEqual(false);
});

test("primary don't have small", () => {
  const button = shallow(<ButtonPrimary small>Some text</ButtonPrimary>);

  expect(button.hasClass('sg-button-primary--small')).toEqual(false);
});
test('wide', () => {
  const button = shallow(<ButtonPrimary wide>Some text</ButtonPrimary>);

  expect(button.hasClass('sg-button-primary--full-width')).toEqual(true);
});

test('icon', () => {
  const icon = <span>:P</span>;
  const button = shallow(<ButtonPrimary icon={icon}>Some text</ButtonPrimary>);

  expect(button.contains(icon)).toEqual(true);
  expect(button.find('.sg-button-primary__icon')).toHaveLength(1);
});

test('no icon', () => {
  const button = shallow(<ButtonPrimary>Some text</ButtonPrimary>);

  expect(button.find('.sg-button-primary__icon')).toHaveLength(0);
});
