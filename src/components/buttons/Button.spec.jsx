import * as React from 'react';
import {Spinner, Icon} from '../..';
import Button, {BUTTON_TYPE} from './Button';
import {shallow} from 'enzyme';

test('render', () => {
  const button = shallow(<Button>Some text</Button>);

  expect(button.hasClass('sg-button')).toEqual(true);
});

test('type', () => {
  const buttonType = BUTTON_TYPE.SOLID;
  const button = shallow(<Button type={buttonType}>Some text</Button>);

  expect(button.hasClass(`sg-button--${buttonType}`)).toEqual(true);
});

test('button with href', () => {
  const button = shallow(<Button href="http://example.com">Some text</Button>);

  expect(button.find('a[href]')).toHaveLength(1);
  expect(button.find('button')).toHaveLength(0);
});

test('disabled', () => {
  const button = shallow(<Button disabled>Some text</Button>);

  expect(button.hasClass('sg-button--disabled')).toEqual(true);
  expect(button.is('[disabled]')).toEqual(true);
});
test('not disabled', () => {
  const button = shallow(<Button>Some text</Button>);

  expect(button.hasClass('sg-button--disabled')).toEqual(false);
  expect(button.is('[disabled]')).toEqual(false);
});

test('full width', () => {
  const button = shallow(<Button fullWidth>Some text</Button>);

  expect(button.hasClass('sg-button--full-width')).toEqual(true);
});

test('icon', () => {
  const icon = <span>:P</span>;
  const button = shallow(<Button icon={icon}>Some text</Button>);

  expect(button.contains(icon)).toEqual(true);
  expect(button.find('.sg-button__icon')).toHaveLength(1);
});

test('icon only', () => {
  const icon = <span>:P</span>;
  const button = shallow(
    <Button icon={icon} iconOnly>
      Some text
    </Button>
  );

  expect(button.contains(icon)).toEqual(true);
  expect(button.find('.sg-button--icon-only')).toHaveLength(1);
  expect(button.find('.sg-button__icon')).toHaveLength(1);
});

test('no icon', () => {
  const button = shallow(<Button>Some text</Button>);

  expect(button.find('.sg-button__icon')).toHaveLength(0);
});

test('toggle', () => {
  const button = shallow(
    <Button type="solid-light" toggle="red">
      Some text
    </Button>
  );

  expect(button.hasClass('sg-button--solid-light-toggle-red')).toEqual(true);
});

test('with icon - reversed order', () => {
  const icon = <span>:P</span>;
  const button = shallow(
    <Button icon={icon} reversedOrder>
      Some text
    </Button>
  );

  expect(button.contains(icon)).toEqual(true);
  expect(button.find('.sg-button--reversed-order')).toHaveLength(1);
});

test('in loading state button shows spinner and becomes disabled', () => {
  const button = shallow(<Button loading>Some text</Button>);

  expect(button.find(Spinner).exists()).toBe(true);
  expect(button.is('[disabled]')).toEqual(true);
});

test('in loading state button shows spinner while hiding label and icon', () => {
  const button = shallow(
    <Button loading icon={<Icon type="heart" size="24" color="adaptive" />}>
      Some text
    </Button>
  );

  expect(button.hasClass('sg-button--loading')).toEqual(true);
  expect(button.find(Spinner).exists()).toBe(true);
});
