import React from 'react';
import ButtonSecondary, {TYPE} from './ButtonSecondary';
import {shallow} from 'enzyme';

test('render', () => {
  const button = shallow(
    <ButtonSecondary>Some text</ButtonSecondary>
  );

  expect(button.hasClass('sg-button-secondary')).toEqual(true);
});

test('type', () => {
  const type = TYPE.ALT;
  const button = shallow(
    <ButtonSecondary type={type}>Some text</ButtonSecondary>
  );

  expect(button.hasClass('sg-button-secondary--' + type)).toEqual(true);
});

test('button with href', () => {
  const button = shallow(
    <ButtonSecondary href="http://example.com">Some text</ButtonSecondary>
  );

  expect(button.find('a')).toHaveLength(1);
  expect(button.find('button')).toHaveLength(0);
});

test('disabled', () => {
  const button = shallow(
    <ButtonSecondary disabled>Some text</ButtonSecondary>
  );

  expect(button.hasClass('sg-button-secondary--disabled')).toEqual(true);
  expect(button.is('[disabled]')).toEqual(true);

});
test('not disabled', () => {
  const button = shallow(
    <ButtonSecondary>Some text</ButtonSecondary>
  );

  expect(button.hasClass('sg-button-secondary--disabled')).toEqual(false);
  expect(button.is('[disabled]')).toEqual(false);

});


test('small', () => {
  const button = shallow(
    <ButtonSecondary small>Some text</ButtonSecondary>
  );

  expect(button.hasClass('sg-button-secondary--small')).toEqual(true);
});

test('wide', () => {
  const button = shallow(
    <ButtonSecondary wide>Some text</ButtonSecondary>
  );

  expect(button.hasClass('sg-button-secondary--full-width')).toEqual(true);
});

test('secondary button don\'t have icon', () => {
  const icon = <span>:P</span>;
  const button = shallow(
    <ButtonSecondary icon={icon}>Some text</ButtonSecondary>
  );

  expect(button.contains(icon)).toEqual(false);
});


test('active-inverse-disabled', () => {

  const typeActiveInverse = TYPE.ACTIVE_INVERSE;
  const button = shallow(
    <ButtonSecondary disabled type={typeActiveInverse}>Some text</ButtonSecondary>
  );

  expect(button.hasClass('sg-button-secondary--disabled')).toEqual(true);
  expect(button.hasClass('sg-button-secondary--' + typeActiveInverse)).toEqual(true);
  expect(button.hasClass('sg-button-secondary--' + typeActiveInverse + '-disabled')).toEqual(true);
});
