import React from 'react';
import Button, {BUTTON_TYPE} from './Button';
import {shallow} from 'enzyme';

test('render', () => {
  const button = shallow(
    <Button>Some text</Button>
  );

  expect(button.hasClass('sg-button')).toEqual(true);

});

test('type', () => {
  const buttonType = BUTTON_TYPE.PRIMARY_BLUE;
  const button = shallow(
    <Button type={buttonType}>Some text</Button>
  );

  expect(button.hasClass('sg-button--' + buttonType)).toEqual(true);
});

test('button with href', () => {
  const button = shallow(
    <Button href="http://example.com">Some text</Button>
  );

  expect(button.find('a[href]')).toHaveLength(1);
  expect(button.find('button')).toHaveLength(0);
});

test('disabled', () => {
  const button = shallow(
    <Button disabled>Some text</Button>
  );

  expect(button.hasClass('sg-button--disabled')).toEqual(true);
  expect(button.is('[disabled]')).toEqual(true);

});
test('not disabled', () => {
  const button = shallow(
    <Button>Some text</Button>
  );

  expect(button.hasClass('sg-button--disabled')).toEqual(false);
  expect(button.is('[disabled]')).toEqual(false);

});

test('primary don\'t have small', () => {
  const button = shallow(
    <Button small>Some text</Button>
  );

  expect(button.hasClass('sg-button--small')).toEqual(false);
});
test('full width', () => {
  const button = shallow(
    <Button fullWidth>Some text</Button>
  );

  expect(button.hasClass('sg-button--full-width')).toEqual(true);
});

test('icon', () => {
  const icon = <span>:P</span>;
  const button = shallow(
    <Button icon={icon}>Some text</Button>
  );

  expect(button.contains(icon)).toEqual(true);
  expect(button.find('.sg-button__icon')).toHaveLength(1);
});

test('no icon', () => {
  const button = shallow(
    <Button>Some text</Button>
  );

  expect(button.find('.sg-button__icon')).toHaveLength(0);
});
